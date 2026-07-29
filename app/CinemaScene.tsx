"use client";

/* Three.js cameras, renderers and materials are intentionally mutable. */
/* eslint-disable react-hooks/immutability */

import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import {
  Color,
  Euler,
  InstancedMesh,
  Matrix4,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Quaternion,
  ShaderMaterial,
  SRGBColorSpace,
  Vector3,
  VideoTexture,
} from "three";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Auditorium, Seat } from "./cinema-data";

type ViewMode = "overview" | "seat";

type ViewCommand = {
  yaw: number;
  pitch: number;
  token: number;
};

type CinemaSceneProps = {
  auditorium: Auditorium;
  seats: Seat[];
  selectedSeat: Seat;
  viewMode: ViewMode;
  filmMode: boolean;
  playing: boolean;
  viewCommand: ViewCommand;
  isMobile: boolean;
  onSelectSeat: (seat: Seat) => void;
};

const upVector = new Vector3(0, 1, 0);
const silverScreenVertexShader = `
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const silverScreenFragmentShader = `
  uniform float uDimmed;
  uniform float uGain;
  uniform float uHalfGainAngle;
  uniform float uReflectiveArea;

  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  float hash21(vec2 value) {
    value = fract(value * vec2(123.34, 456.21));
    value += dot(value, value + 45.32);
    return fract(value.x * value.y);
  }

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float facing = clamp(dot(normal, viewDirection), 0.0, 1.0);

    vec3 warmLight = normalize(vec3(-0.46, 0.58, 1.0));
    vec3 coolLight = normalize(vec3(0.62, 0.36, 1.0));
    float warmReflection = pow(
      max(dot(normal, normalize(warmLight + viewDirection)), 0.0),
      15.0
    );
    float coolReflection = pow(
      max(dot(normal, normalize(coolLight + viewDirection)), 0.0),
      22.0
    );

    float viewingAngle = acos(clamp(facing, 0.0001, 1.0));
    float gainCurve = exp(
      -0.69314718 * pow(viewingAngle / uHalfGainAngle, 2.0)
    );
    float gainStrength = clamp((uGain - 1.0) / 2.0, 0.0, 1.0);
    float screenGain =
      mix(0.78, 0.62, gainStrength) +
      gainCurve * mix(0.22, 0.38, gainStrength);
    float edgeFalloff = 1.0 - length(vUv - vec2(0.5)) * 0.025;
    vec2 grainCell = floor(vUv * vec2(1480.0, 940.0));
    float grain = (hash21(grainCell) - 0.5) * 0.014;

    float baseLevel = mix(0.42, 0.2, uDimmed);
    float reflectionLevel = mix(1.0, 0.42, uDimmed);
    float luminance =
      baseLevel * screenGain * edgeFalloff +
      warmReflection * 0.1 * reflectionLevel +
      coolReflection * 0.055 * reflectionLevel +
      grain;

    // Digital perforations account for roughly 4.16% open area. At normal
    // seating distances they affect reflectance, not as individually visible dots.
    luminance *= uReflectiveArea;

    vec3 silver = vec3(0.94, 0.95, 0.945) * luminance;
    silver += vec3(0.008, 0.006, 0.003) * warmReflection;
    silver += vec3(0.002, 0.005, 0.008) * coolReflection;

    gl_FragColor = vec4(silver, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function quaternionLookingAt(position: Vector3, target: Vector3) {
  const helper = new PerspectiveCamera();
  helper.position.copy(position);
  helper.up.copy(upVector);
  helper.lookAt(target);
  return helper.quaternion.clone();
}

function createCurvedScreenGeometry(
  width: number,
  height: number,
  curveDepth: number,
) {
  const geometry = new PlaneGeometry(width, height, 56, 18);
  const position = geometry.getAttribute("position");

  for (let index = 0; index < position.count; index += 1) {
    const normalizedX = position.getX(index) / (width / 2);
    position.setZ(index, curveDepth * normalizedX * normalizedX);
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function CameraRig({
  auditorium,
  selectedSeat,
  viewMode,
  viewCommand,
}: Pick<
  CinemaSceneProps,
  "auditorium" | "selectedSeat" | "viewMode" | "viewCommand"
>) {
  const { camera, gl } = useThree();
  const desiredPosition = useRef(new Vector3());
  const desiredEuler = useRef(new Euler(0, 0, 0, "YXZ"));
  const desiredQuaternion = useRef(new Quaternion());
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  useEffect(() => {
    const position =
      viewMode === "seat"
        ? new Vector3(selectedSeat.x, selectedSeat.y + 1.18, selectedSeat.z)
        : new Vector3(0, 11.5, 15.5);
    const target =
      viewMode === "seat"
        ? new Vector3(
            0,
            auditorium.screenBottom + auditorium.screenHeight / 2,
            auditorium.screenZ,
          )
        : new Vector3(0, 7.2, -9);
    const quaternion = quaternionLookingAt(position, target);

    desiredPosition.current.copy(position);
    desiredQuaternion.current.copy(quaternion);
    desiredEuler.current.setFromQuaternion(quaternion, "YXZ");

    if (camera instanceof PerspectiveCamera) {
      camera.fov = viewMode === "seat" ? 66 : 50;
      camera.updateProjectionMatrix();
    }
  }, [auditorium, camera, selectedSeat, viewMode]);

  useEffect(() => {
    if (viewCommand.token === 0) return;
    desiredEuler.current.y += viewCommand.yaw;
    desiredEuler.current.x = Math.max(
      -1.25,
      Math.min(1.25, desiredEuler.current.x + viewCommand.pitch),
    );
    desiredQuaternion.current.setFromEuler(desiredEuler.current);
  }, [viewCommand]);

  useEffect(() => {
    const canvas = gl.domElement;

    const onPointerDown = (event: PointerEvent) => {
      dragging.current = true;
      lastPointer.current = { x: event.clientX, y: event.clientY };
      canvas.setPointerCapture?.(event.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      const deltaX = event.clientX - lastPointer.current.x;
      const deltaY = event.clientY - lastPointer.current.y;
      lastPointer.current = { x: event.clientX, y: event.clientY };

      desiredEuler.current.y -= deltaX * 0.004;
      desiredEuler.current.x = Math.max(
        -1.25,
        Math.min(1.25, desiredEuler.current.x - deltaY * 0.004),
      );
      desiredQuaternion.current.setFromEuler(desiredEuler.current);
    };

    const onPointerUp = (event: PointerEvent) => {
      dragging.current = false;
      canvas.releasePointerCapture?.(event.pointerId);
      canvas.style.cursor = "grab";
    };

    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    return () => {
      canvas.style.cursor = "";
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
    };
  }, [gl]);

  useFrame(() => {
    camera.position.lerp(desiredPosition.current, 0.085);
    camera.quaternion.slerp(desiredQuaternion.current, 0.085);
  });

  return null;
}

function SilverScreenSurface({
  auditorium,
  dimmed,
}: Pick<CinemaSceneProps, "auditorium"> & { dimmed: boolean }) {
  const materialRef = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uDimmed: { value: 0 },
      uGain: { value: auditorium.screenSurface.gain },
      uHalfGainAngle: {
        value: (auditorium.screenSurface.halfGainAngle * Math.PI) / 180,
      },
      uReflectiveArea: {
        value: 1 - auditorium.screenSurface.openAreaPercent / 100,
      },
    }),
    [
      auditorium.screenSurface.gain,
      auditorium.screenSurface.halfGainAngle,
      auditorium.screenSurface.openAreaPercent,
    ],
  );
  const geometry = useMemo(
    () =>
      createCurvedScreenGeometry(
        auditorium.screenWidth,
        auditorium.screenHeight,
        auditorium.screenSurface.curvatureDepth,
      ),
    [
      auditorium.screenHeight,
      auditorium.screenSurface.curvatureDepth,
      auditorium.screenWidth,
    ],
  );

  useEffect(() => {
    uniforms.uDimmed.value = dimmed ? 1 : 0;
  }, [dimmed, uniforms]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh
      position={[
        0,
        auditorium.screenBottom + auditorium.screenHeight / 2,
        auditorium.screenZ + 0.065,
      ]}
    >
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        ref={materialRef}
        vertexShader={silverScreenVertexShader}
        fragmentShader={silverScreenFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function VideoSurface({
  auditorium,
  active,
  playing,
}: Pick<CinemaSceneProps, "auditorium" | "playing"> & { active: boolean }) {
  const texture = useMemo(() => {
    const video = document.createElement("video");
    video.src = "/cinema-demo.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const nextTexture = new VideoTexture(video);
    nextTexture.colorSpace = SRGBColorSpace;
    return nextTexture;
  }, []);

  useEffect(() => {
    const video = texture.image as HTMLVideoElement;
    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      texture.dispose();
    };
  }, [texture]);

  useEffect(() => {
    const video = texture.image as HTMLVideoElement;

    if (active && playing) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active, playing, texture]);

  const videoHeight = Math.min(
    auditorium.screenHeight - 0.6,
    auditorium.screenWidth / (16 / 9),
  );
  const videoWidth = auditorium.screenWidth - 0.45;
  const geometry = useMemo(
    () =>
      createCurvedScreenGeometry(
        videoWidth,
        videoHeight,
        auditorium.screenSurface.curvatureDepth,
      ),
    [auditorium.screenSurface.curvatureDepth, videoHeight, videoWidth],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh
      visible={active}
      position={[
        0,
        auditorium.screenBottom + auditorium.screenHeight / 2,
        auditorium.screenZ + 0.085,
      ]}
    >
      <primitive object={geometry} attach="geometry" />
      <meshBasicMaterial
        map={active ? texture : null}
        color={active ? "#ffffff" : "#c9c8c2"}
        toneMapped={!active}
      />
    </mesh>
  );
}

function Screen({
  auditorium,
  filmMode,
  playing,
}: Pick<CinemaSceneProps, "auditorium" | "filmMode" | "playing">) {
  const centerY = auditorium.screenBottom + auditorium.screenHeight / 2;

  return (
    <group>
      <mesh
        position={[0, centerY, auditorium.screenZ - 0.1]}
      >
        <boxGeometry
          args={[auditorium.screenWidth + 0.8, auditorium.screenHeight + 0.8, 0.3]}
        />
        <meshStandardMaterial color="#111315" roughness={0.9} />
      </mesh>
      <SilverScreenSurface auditorium={auditorium} dimmed={filmMode} />
      <VideoSurface
        auditorium={auditorium}
        active={filmMode && playing}
        playing={playing}
      />
      {filmMode && (
        <pointLight
          position={[0, centerY - 1, auditorium.screenZ + 3]}
          color="#b9d5e5"
          intensity={130}
          distance={32}
          decay={2}
        />
      )}
    </group>
  );
}

function AuditoriumArchitecture({
  auditorium,
  filmMode,
}: Pick<CinemaSceneProps, "auditorium" | "filmMode">) {
  const lastRowZ =
    auditorium.firstRowZ +
    (auditorium.rowCount - 1) * auditorium.rowSpacing;
  const roomDepth = lastRowZ - auditorium.screenZ + 10;
  const roomCenterZ = auditorium.screenZ + roomDepth / 2 - 2;
  const roomHeight = Math.max(
    15,
    auditorium.screenBottom + auditorium.screenHeight + 2.2,
  );

  return (
    <group>
      <mesh position={[0, -0.5, roomCenterZ]} receiveShadow>
        <boxGeometry args={[34, 1, roomDepth]} />
        <meshStandardMaterial color="#191b1f" roughness={0.95} />
      </mesh>

      {Array.from({ length: auditorium.rowCount }, (_, row) => {
        const y = 0.4 + row * auditorium.rowRise;
        const z = auditorium.firstRowZ + row * auditorium.rowSpacing;
        return (
          <mesh key={row} position={[0, y - 0.37, z + 0.1]} receiveShadow>
            <boxGeometry args={[29, 0.72, auditorium.rowSpacing + 0.08]} />
            <meshStandardMaterial color="#202329" roughness={0.98} />
          </mesh>
        );
      })}

      <mesh position={[-17, roomHeight / 2, roomCenterZ]} receiveShadow>
        <boxGeometry args={[1.2, roomHeight, roomDepth]} />
        <meshStandardMaterial color="#23262b" roughness={0.92} />
      </mesh>
      <mesh position={[17, roomHeight / 2, roomCenterZ]} receiveShadow>
        <boxGeometry args={[1.2, roomHeight, roomDepth]} />
        <meshStandardMaterial color="#23262b" roughness={0.92} />
      </mesh>
      <mesh position={[0, roomHeight + 0.6, roomCenterZ]} receiveShadow>
        <boxGeometry args={[35.2, 1.2, roomDepth]} />
        <meshStandardMaterial color="#101114" roughness={0.96} />
      </mesh>
      <mesh
        position={[0, roomHeight / 2, lastRowZ + 5]}
        receiveShadow
      >
        <boxGeometry args={[35, roomHeight, 1]} />
        <meshStandardMaterial color="#202227" roughness={0.96} />
      </mesh>

      {[-14.5, 14.5].map((x) =>
        Array.from({ length: 8 }, (_, index) => (
          <mesh
            key={`${x}-${index}`}
            position={[
              x,
              1 + index * 0.72,
              auditorium.firstRowZ + index * auditorium.rowSpacing + 0.85,
            ]}
          >
            <boxGeometry args={[0.8, 0.06, 0.34]} />
            <meshBasicMaterial
              color={filmMode ? "#8c3e28" : "#e5a66e"}
              toneMapped={false}
            />
          </mesh>
        )),
      )}

      {[-15.6, 15.6].map((x) => (
        <group key={x}>
          <mesh position={[x, 6.8, -5]}>
            <boxGeometry args={[0.08, 7.8, 17]} />
            <meshStandardMaterial color="#27282b" roughness={0.98} />
          </mesh>
          <mesh position={[x, 6.8, 12]}>
            <boxGeometry args={[0.08, 7.8, 14]} />
            <meshStandardMaterial color="#27282b" roughness={0.98} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Seats({
  seats,
  selectedSeat,
  filmMode,
  onSelectSeat,
}: Pick<
  CinemaSceneProps,
  "seats" | "selectedSeat" | "filmMode" | "onSelectSeat"
>) {
  const cushionRef = useRef<InstancedMesh>(null);
  const backRef = useRef<InstancedMesh>(null);
  const [hoveredSeatId, setHoveredSeatId] = useState<string | null>(null);
  const matrix = useMemo(() => new Matrix4(), []);
  const seatObject = useMemo(() => new Object3D(), []);
  const seatColors = useMemo(
    () => ({
      available: new Color("#9a3036"),
      selected: new Color("#e25a52"),
      occupied: new Color("#26272a"),
      hovered: new Color("#b93b40"),
    }),
    [],
  );

  useLayoutEffect(() => {
    if (!cushionRef.current || !backRef.current) return;

    seats.forEach((seat, index) => {
      seatObject.position.set(seat.x, seat.y, seat.z);
      seatObject.rotation.set(-0.08, 0, 0);
      seatObject.updateMatrix();
      matrix.copy(seatObject.matrix);
      cushionRef.current?.setMatrixAt(index, matrix);

      seatObject.position.set(seat.x, seat.y + 0.67, seat.z + 0.32);
      seatObject.rotation.set(-0.08, 0, 0);
      seatObject.updateMatrix();
      matrix.copy(seatObject.matrix);
      backRef.current?.setMatrixAt(index, matrix);
    });

    cushionRef.current.instanceMatrix.needsUpdate = true;
    backRef.current.instanceMatrix.needsUpdate = true;
  }, [matrix, seatObject, seats]);

  useLayoutEffect(() => {
    if (!cushionRef.current || !backRef.current) return;

    seats.forEach((seat, index) => {
      const color =
        seat.id === selectedSeat.id
          ? seatColors.selected
          : seat.id === hoveredSeatId
            ? seatColors.hovered
            : seat.status === "occupied"
              ? seatColors.occupied
              : seatColors.available;
      cushionRef.current?.setColorAt(index, color);
      backRef.current?.setColorAt(index, color);
    });

    if (cushionRef.current.instanceColor) {
      cushionRef.current.instanceColor.needsUpdate = true;
    }
    if (backRef.current.instanceColor) {
      backRef.current.instanceColor.needsUpdate = true;
    }
  }, [hoveredSeatId, seatColors, seats, selectedSeat.id]);

  const getSeatFromEvent = (event: ThreeEvent<PointerEvent>) => {
    if (event.instanceId === undefined) return null;
    return seats[event.instanceId] ?? null;
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const seat = getSeatFromEvent(event as ThreeEvent<PointerEvent>);
    if (seat?.status === "available") onSelectSeat(seat);
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    const seat = getSeatFromEvent(event);
    setHoveredSeatId(seat?.status === "available" ? seat.id : null);
  };

  return (
    <group>
      <instancedMesh
        ref={cushionRef}
        args={[undefined, undefined, seats.length]}
        castShadow={!filmMode}
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerOut={() => setHoveredSeatId(null)}
      >
        <boxGeometry args={[0.98, 0.34, 0.9]} />
        <meshStandardMaterial
          vertexColors
          roughness={0.94}
          metalness={0.01}
        />
      </instancedMesh>
      <instancedMesh
        ref={backRef}
        args={[undefined, undefined, seats.length]}
        castShadow={!filmMode}
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerOut={() => setHoveredSeatId(null)}
      >
        <boxGeometry args={[0.98, 1.18, 0.27]} />
        <meshStandardMaterial
          vertexColors
          roughness={0.96}
          metalness={0.01}
        />
      </instancedMesh>
    </group>
  );
}

function SceneContents(props: CinemaSceneProps) {
  const { auditorium, filmMode, isMobile } = props;

  return (
    <>
      <color attach="background" args={[filmMode ? "#07080a" : "#111317"]} />
      <fog
        attach="fog"
        args={[filmMode ? "#08090b" : "#15171b", 20, isMobile ? 60 : 78]}
      />
      <ambientLight
        intensity={filmMode ? 0.07 : 0.92}
        color={filmMode ? "#75808a" : "#d7c7b8"}
      />
      <hemisphereLight
        args={["#aeb8c0", "#3b211e", filmMode ? 0.06 : 0.58]}
      />
      {!filmMode && (
        <>
          <spotLight
            position={[-12, 13, 8]}
            target-position={[0, 2, -2]}
            angle={0.66}
            penumbra={0.9}
            intensity={820}
            distance={54}
            color="#f0c6a7"
            castShadow={!isMobile}
          />
          <spotLight
            position={[12, 13, 8]}
            target-position={[0, 2, -2]}
            angle={0.66}
            penumbra={0.9}
            intensity={820}
            distance={54}
            color="#f0c6a7"
            castShadow={!isMobile}
          />
          <pointLight
            position={[0, 12, 12]}
            color="#f3c7a6"
            intensity={260}
            distance={48}
            decay={1.7}
          />
        </>
      )}
      <Screen
        auditorium={auditorium}
        filmMode={filmMode}
        playing={props.playing}
      />
      <AuditoriumArchitecture
        auditorium={auditorium}
        filmMode={filmMode}
      />
      <Seats
        seats={props.seats}
        selectedSeat={props.selectedSeat}
        filmMode={filmMode}
        onSelectSeat={props.onSelectSeat}
      />
      <CameraRig
        auditorium={auditorium}
        selectedSeat={props.selectedSeat}
        viewMode={props.viewMode}
        viewCommand={props.viewCommand}
      />
    </>
  );
}

export function CinemaScene(props: CinemaSceneProps) {
  const initialCameraPosition: [number, number, number] =
    props.viewMode === "seat"
      ? [
          props.selectedSeat.x,
          props.selectedSeat.y + 1.18,
          props.selectedSeat.z,
        ]
      : [0, 11.5, 15.5];

  return (
    <Canvas
      className="cinema-canvas"
      dpr={props.isMobile ? [1, 1.35] : [1, 1.75]}
      camera={{
        position: initialCameraPosition,
        fov: props.viewMode === "seat" ? 66 : 50,
        near: 0.1,
        far: 120,
      }}
      gl={{
        antialias: !props.isMobile,
        alpha: false,
        powerPreference: "high-performance",
      }}
      shadows={!props.isMobile && !props.filmMode}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.28;
      }}
    >
      <Suspense fallback={null}>
        <SceneContents {...props} />
      </Suspense>
    </Canvas>
  );
}
