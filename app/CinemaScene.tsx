"use client";

/* Three.js cameras, renderers and materials are intentionally mutable. */
/* eslint-disable react-hooks/immutability */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AmbientLight,
  Color,
  Euler,
  ExtrudeGeometry,
  Fog,
  HemisphereLight,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Quaternion,
  ShaderMaterial,
  Shape,
  SpotLight,
  SRGBColorSpace,
  Vector3,
  VideoTexture,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  cinemaSeatGeometry,
  getSeatEyeY,
  type Auditorium,
  type FilmSource,
  type Seat,
} from "./cinema-data";

type ViewCommand = {
  yaw: number;
  pitch: number;
  token: number;
};

type CinemaSceneProps = {
  auditorium: Auditorium;
  seats: Seat[];
  selectedSeat: Seat;
  filmMode: boolean;
  playing: boolean;
  filmSource: FilmSource;
  viewCommand: ViewCommand;
  isMobile: boolean;
};

const upVector = new Vector3(0, 1, 0);
const countdownPreviewId = "666393527";
const countdownPreviewEmbed = `https://player.vimeo.com/video/${countdownPreviewId}?autoplay=1&muted=1&background=1&loop=1&autopause=0&dnt=1`;
const countdownPreviewWidth = 1440;
const countdownPreviewHeight = 1080;
const lightingTransitionSpeed = 3.2;
const cameraHorizontalFov = 62;
const smoothFactor = (delta: number) =>
  1 - Math.exp(-lightingTransitionSpeed * delta);
const verticalFovForAspect = (aspect: number) =>
  (2 *
    Math.atan(
      Math.tan((cameraHorizontalFov * Math.PI) / 360) /
        Math.max(aspect, 0.1),
    ) *
    180) /
  Math.PI;
const tuneSeatMaterial = (
  material: MeshPhysicalMaterial | null,
  factor: number,
  targetEmission: number,
  targetSheen: number,
  targetSpecular: number,
) => {
  if (!material) return;

  material.emissiveIntensity +=
    (targetEmission - material.emissiveIntensity) * factor;
  material.sheen += (targetSheen - material.sheen) * factor;
  material.specularIntensity +=
    (targetSpecular - material.specularIntensity) * factor;
};
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
  uniform float uGain;
  uniform float uHalfGainAngle;
  uniform float uReflectiveArea;
  uniform float uHouseLights;

  varying vec2 vUv;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;

  float hash21(vec2 value) {
    value = fract(value * vec2(123.34, 456.21));
    value += dot(value, value + 45.32);
    return fract(value.x * value.y);
  }

  float topSpotlight(float center, float depthFromTop) {
    float beamWidth = 0.025 + depthFromTop * 0.19;
    float horizontalFalloff = exp(
      -3.2 * pow((vUv.x - center) / beamWidth, 2.0)
    );
    float verticalFalloff = exp(-2.15 * depthFromTop);
    float softPool = exp(
      -1.2 * pow((vUv.x - center) / (beamWidth * 2.5), 2.0)
    ) * exp(-3.0 * depthFromTop);
    return horizontalFalloff * verticalFalloff + softPool * 0.28;
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
    float grainNoise = hash21(grainCell);
    float grain = (grainNoise - 0.5) * 0.022;
    float sparkle = pow(grainNoise, 24.0) * 0.075;

    float depthFromTop = 1.0 - vUv.y;
    float topWash =
      topSpotlight(0.18, depthFromTop) +
      topSpotlight(0.50, depthFromTop) * 1.08 +
      topSpotlight(0.82, depthFromTop);

    float highlightCenter =
      0.5 + clamp(viewDirection.x * 0.72, -0.24, 0.24);
    float movingSheen = exp(
      -4.2 * pow((vUv.x - highlightCenter) / 0.24, 2.0)
    );
    float grazingSheen = pow(1.0 - facing, 1.6);

    float luminance =
      0.34 * screenGain * edgeFalloff +
      warmReflection * 0.19 +
      coolReflection * 0.13 +
      movingSheen * 0.115 +
      grazingSheen * 0.08 +
      topWash * 0.22 +
      grain +
      sparkle;

    // Digital perforations account for roughly 4.16% open area. At normal
    // seating distances they affect reflectance, not as individually visible dots.
    luminance *= uReflectiveArea;

    vec3 silver = vec3(0.79, 0.82, 0.83) * luminance;
    silver += vec3(0.17, 0.105, 0.055) * topWash;
    silver += vec3(0.055, 0.075, 0.095) * movingSheen;
    silver += vec3(0.035, 0.022, 0.012) * warmReflection;
    silver += vec3(0.012, 0.025, 0.045) * coolReflection;

    gl_FragColor = vec4(silver * clamp(uHouseLights, 0.0, 1.0), 1.0);
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

function createCinemaSeatBackGeometry() {
  const shape = new Shape();
  shape.moveTo(-0.34, -0.58);
  shape.quadraticCurveTo(-0.43, -0.52, -0.44, -0.36);
  shape.quadraticCurveTo(-0.46, 0.1, -0.48, 0.4);
  shape.quadraticCurveTo(-0.47, 0.56, -0.32, 0.61);
  shape.quadraticCurveTo(0, 0.68, 0.32, 0.61);
  shape.quadraticCurveTo(0.47, 0.56, 0.48, 0.4);
  shape.quadraticCurveTo(0.46, 0.1, 0.44, -0.36);
  shape.quadraticCurveTo(0.43, -0.52, 0.34, -0.58);
  shape.quadraticCurveTo(0, -0.63, -0.34, -0.58);

  const geometry = new ExtrudeGeometry(shape, {
    depth: 0.22,
    steps: 1,
    curveSegments: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.045,
    bevelThickness: 0.035,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

type ScreenPoint = { x: number; y: number };

function quadTransform(
  [topLeft, topRight, bottomRight, bottomLeft]: [
    ScreenPoint,
    ScreenPoint,
    ScreenPoint,
    ScreenPoint,
  ],
  width: number,
  height: number,
) {
  const dx1 = topRight.x - bottomRight.x;
  const dy1 = topRight.y - bottomRight.y;
  const dx2 = bottomLeft.x - bottomRight.x;
  const dy2 = bottomLeft.y - bottomRight.y;
  const dx3 =
    topLeft.x - topRight.x + bottomRight.x - bottomLeft.x;
  const dy3 =
    topLeft.y - topRight.y + bottomRight.y - bottomLeft.y;
  const denominator = dx1 * dy2 - dx2 * dy1;

  if (Math.abs(denominator) < 0.0001) return null;

  const perspectiveX = (dx3 * dy2 - dx2 * dy3) / denominator;
  const perspectiveY = (dx1 * dy3 - dx3 * dy1) / denominator;
  const scaleX =
    topRight.x - topLeft.x + perspectiveX * topRight.x;
  const skewY =
    topRight.y - topLeft.y + perspectiveX * topRight.y;
  const skewX =
    bottomLeft.x - topLeft.x + perspectiveY * bottomLeft.x;
  const scaleY =
    bottomLeft.y - topLeft.y + perspectiveY * bottomLeft.y;

  return `matrix3d(
    ${scaleX / width}, ${skewY / width}, 0, ${perspectiveX / width},
    ${skewX / height}, ${scaleY / height}, 0, ${perspectiveY / height},
    0, 0, 1, 0,
    ${topLeft.x}, ${topLeft.y}, 0, 1
  )`;
}

function OnlineVideoTracker({
  auditorium,
  active,
  overlayRef,
}: Pick<CinemaSceneProps, "auditorium"> & {
  active: boolean;
  overlayRef: React.RefObject<HTMLDivElement | null>;
}) {
  const corners = useMemo(
    () => [
      new Vector3(),
      new Vector3(),
      new Vector3(),
      new Vector3(),
    ],
    [],
  );

  useFrame(({ camera, size }) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (!active) {
      overlay.style.visibility = "hidden";
      return;
    }

    const centerY =
      auditorium.screenBottom + auditorium.screenHeight / 2;
    const edgeZ =
      auditorium.screenZ +
      0.09 +
      auditorium.screenSurface.curvatureDepth;
    const halfWidth = auditorium.screenWidth / 2;
    const halfHeight = auditorium.screenHeight / 2;

    corners[0].set(-halfWidth, centerY + halfHeight, edgeZ);
    corners[1].set(halfWidth, centerY + halfHeight, edgeZ);
    corners[2].set(halfWidth, centerY - halfHeight, edgeZ);
    corners[3].set(-halfWidth, centerY - halfHeight, edgeZ);

    const projected = corners.map((corner) => {
      corner.project(camera);
      return {
        x: (corner.x * 0.5 + 0.5) * size.width,
        y: (-corner.y * 0.5 + 0.5) * size.height,
        z: corner.z,
      };
    });

    if (projected.some((point) => point.z < -1 || point.z > 1)) {
      overlay.style.visibility = "hidden";
      return;
    }

    const transform = quadTransform(
      [
        projected[0],
        projected[1],
        projected[2],
        projected[3],
      ],
      countdownPreviewWidth,
      countdownPreviewHeight,
    );

    if (!transform) {
      overlay.style.visibility = "hidden";
      return;
    }

    overlay.style.visibility = "visible";
    overlay.style.transform = transform;
  });

  return null;
}

function CameraRig({
  auditorium,
  selectedSeat,
  viewCommand,
}: Pick<
  CinemaSceneProps,
  "auditorium" | "selectedSeat" | "viewCommand"
>) {
  const { camera, gl, size } = useThree();
  const desiredPosition = useRef(new Vector3());
  const desiredEuler = useRef(new Euler(0, 0, 0, "YXZ"));
  const desiredQuaternion = useRef(new Quaternion());
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  useEffect(() => {
    const position = new Vector3(
      selectedSeat.x,
      getSeatEyeY(selectedSeat),
      selectedSeat.z,
    );
    const target = new Vector3(
      0,
      auditorium.screenBottom + auditorium.screenHeight / 2,
      auditorium.screenZ,
    );
    const quaternion = quaternionLookingAt(position, target);

    desiredPosition.current.copy(position);
    desiredQuaternion.current.copy(quaternion);
    desiredEuler.current.setFromQuaternion(quaternion, "YXZ");

    if (camera instanceof PerspectiveCamera) {
      camera.fov = verticalFovForAspect(size.width / size.height);
      camera.updateProjectionMatrix();
    }
  }, [auditorium, camera, selectedSeat, size.height, size.width]);

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

function ScreenSurface({
  auditorium,
  blackout,
}: Pick<CinemaSceneProps, "auditorium"> & { blackout: boolean }) {
  const materialRef = useRef<ShaderMaterial>(null);
  const [uniforms] = useState(
    () => ({
      uGain: { value: auditorium.screenSurface.gain },
      uHalfGainAngle: {
        value: (auditorium.screenSurface.halfGainAngle * Math.PI) / 180,
      },
      uReflectiveArea: {
        value: 1 - auditorium.screenSurface.openAreaPercent / 100,
      },
      uHouseLights: { value: blackout ? 0 : 1 },
    }),
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

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => {
    uniforms.uGain.value = auditorium.screenSurface.gain;
    uniforms.uHalfGainAngle.value =
      (auditorium.screenSurface.halfGainAngle * Math.PI) / 180;
    uniforms.uReflectiveArea.value =
      1 - auditorium.screenSurface.openAreaPercent / 100;
  }, [
    auditorium.screenSurface.gain,
    auditorium.screenSurface.halfGainAngle,
    auditorium.screenSurface.openAreaPercent,
    uniforms,
  ]);
  useFrame((_, delta) => {
    const material = materialRef.current;
    if (!material) return;
    const target = blackout ? 0 : 1;
    material.uniforms.uHouseLights.value +=
      (target - material.uniforms.uHouseLights.value) * smoothFactor(delta);
  });

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
    video.src = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cinema-demo.mp4`;
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

  const screenAspect = auditorium.screenWidth / auditorium.screenHeight;
  const videoAspect = 16 / 9;

  useEffect(() => {
    if (videoAspect > screenAspect) {
      const visibleWidth = screenAspect / videoAspect;
      texture.repeat.set(visibleWidth, 1);
      texture.offset.set((1 - visibleWidth) / 2, 0);
    } else {
      const visibleHeight = videoAspect / screenAspect;
      texture.repeat.set(1, visibleHeight);
      texture.offset.set(0, (1 - visibleHeight) / 2);
    }
    texture.needsUpdate = true;
  }, [screenAspect, texture, videoAspect]);

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
        map={texture}
        color="#ffffff"
        toneMapped={false}
      />
    </mesh>
  );
}

function Screen({
  auditorium,
  filmMode,
  playing,
  filmSource,
}: Pick<
  CinemaSceneProps,
  "auditorium" | "filmMode" | "playing" | "filmSource"
>) {
  const centerY = auditorium.screenBottom + auditorium.screenHeight / 2;
  const screenTop = auditorium.screenBottom + auditorium.screenHeight;
  const workLightOffsets = [-0.32, 0, 0.32];
  const workLightRefs = useRef<Array<SpotLight | null>>([]);
  const bulbMaterialRefs = useRef<Array<MeshBasicMaterial | null>>([]);
  const filmBounceRef = useRef<PointLight>(null);
  const [initialHouseLights] = useState(() => (filmMode ? 0 : 1));

  useFrame((_, delta) => {
    const factor = smoothFactor(delta);
    const workLightTarget = filmMode ? 0 : 310;
    const bulbTarget = filmMode ? 0 : 1;

    workLightRefs.current.forEach((light) => {
      if (light) {
        light.intensity += (workLightTarget - light.intensity) * factor;
      }
    });
    bulbMaterialRefs.current.forEach((material) => {
      if (material) {
        material.opacity += (bulbTarget - material.opacity) * factor;
      }
    });
    if (filmBounceRef.current) {
      const target = filmMode ? 130 : 0;
      filmBounceRef.current.intensity +=
        (target - filmBounceRef.current.intensity) * factor;
    }
  });

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
      <ScreenSurface auditorium={auditorium} blackout={filmMode} />
      <VideoSurface
        auditorium={auditorium}
        active={filmMode && playing && filmSource === "local-demo"}
        playing={playing}
      />
      {workLightOffsets.map((offset, index) => {
        const lightX = auditorium.screenWidth * offset;
        return (
          <group key={offset}>
            <spotLight
              ref={(light) => {
                workLightRefs.current[index] = light;
              }}
              position={[
                lightX,
                screenTop + 1.1,
                auditorium.screenZ + 2.4,
              ]}
              target-position={[
                lightX,
                centerY - auditorium.screenHeight * 0.16,
                auditorium.screenZ,
              ]}
              angle={0.34}
              penumbra={0.82}
              intensity={310 * initialHouseLights}
              distance={auditorium.screenHeight + 9}
              decay={1.8}
              color="#ffd2a8"
            />
            <mesh
              position={[
                lightX,
                screenTop + 0.5,
                auditorium.screenZ + 0.58,
              ]}
            >
              <cylinderGeometry args={[0.13, 0.18, 0.28, 16]} />
              <meshStandardMaterial
                color="#15171a"
                roughness={0.3}
                metalness={0.82}
              />
            </mesh>
            <mesh
              position={[
                lightX,
                screenTop + 0.34,
                auditorium.screenZ + 0.58,
              ]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <circleGeometry args={[0.105, 16]} />
              <meshBasicMaterial
                ref={(material) => {
                  bulbMaterialRefs.current[index] = material;
                }}
                color="#ffd8b6"
                transparent
                opacity={initialHouseLights}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}
      <pointLight
        ref={filmBounceRef}
        position={[0, centerY - 1, auditorium.screenZ + 3]}
        color="#b9d5e5"
        intensity={130 * (1 - initialHouseLights)}
        distance={32}
        decay={2}
      />
    </group>
  );
}

function AuditoriumArchitecture({
  auditorium,
  filmMode,
}: Pick<CinemaSceneProps, "auditorium" | "filmMode">) {
  const [aisleLightMaterial] = useState(
    () =>
      new MeshBasicMaterial({
        color: filmMode ? "#8c3e28" : "#e5a66e",
        toneMapped: false,
      }),
  );
  const aisleLightColor = useMemo(() => new Color("#e5a66e"), []);
  const aisleDarkColor = useMemo(() => new Color("#8c3e28"), []);
  const lastRowZ =
    auditorium.firstRowZ +
    (auditorium.rowCount - 1) * auditorium.rowSpacing;
  const roomDepth = lastRowZ - auditorium.screenZ + 10;
  const roomCenterZ = auditorium.screenZ + roomDepth / 2 - 2;
  const roomHeight = Math.max(
    15,
    auditorium.screenBottom + auditorium.screenHeight + 2.2,
  );
  const roomWidth = Math.max(34, auditorium.seatingWidth + 5);
  const halfRoomWidth = roomWidth / 2;
  const platformWidth = roomWidth - 5;
  const aisleLightX = Math.max(14.5, halfRoomWidth - 2.5);
  const acousticPanelX = halfRoomWidth - 1.4;

  useEffect(
    () => () => aisleLightMaterial.dispose(),
    [aisleLightMaterial],
  );
  useFrame((_, delta) => {
    aisleLightMaterial.color.lerp(
      filmMode ? aisleDarkColor : aisleLightColor,
      smoothFactor(delta),
    );
  });

  return (
    <group>
      <mesh position={[0, -0.5, roomCenterZ]} receiveShadow>
        <boxGeometry args={[roomWidth, 1, roomDepth]} />
        <meshStandardMaterial color="#191b1f" roughness={0.95} />
      </mesh>

      {Array.from({ length: auditorium.rowCount }, (_, row) => {
        const y =
          cinemaSeatGeometry.rowFloorBaseY + row * auditorium.rowRise;
        const z = auditorium.firstRowZ + row * auditorium.rowSpacing;
        return (
          <mesh key={row} position={[0, y - 0.37, z + 0.1]} receiveShadow>
            <boxGeometry
              args={[platformWidth, 0.72, auditorium.rowSpacing + 0.08]}
            />
            <meshStandardMaterial color="#202329" roughness={0.98} />
          </mesh>
        );
      })}

      <mesh
        position={[-halfRoomWidth, roomHeight / 2, roomCenterZ]}
        receiveShadow
      >
        <boxGeometry args={[1.2, roomHeight, roomDepth]} />
        <meshStandardMaterial color="#23262b" roughness={0.92} />
      </mesh>
      <mesh
        position={[halfRoomWidth, roomHeight / 2, roomCenterZ]}
        receiveShadow
      >
        <boxGeometry args={[1.2, roomHeight, roomDepth]} />
        <meshStandardMaterial color="#23262b" roughness={0.92} />
      </mesh>
      <mesh position={[0, roomHeight + 0.6, roomCenterZ]} receiveShadow>
        <boxGeometry args={[roomWidth + 1.2, 1.2, roomDepth]} />
        <meshStandardMaterial color="#101114" roughness={0.96} />
      </mesh>
      <mesh
        position={[0, roomHeight / 2, lastRowZ + 5]}
        receiveShadow
      >
        <boxGeometry args={[roomWidth, roomHeight, 1]} />
        <meshStandardMaterial color="#202227" roughness={0.96} />
      </mesh>

      {[-aisleLightX, aisleLightX].map((x) =>
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
            <primitive object={aisleLightMaterial} attach="material" />
          </mesh>
        )),
      )}

      {[-acousticPanelX, acousticPanelX].map((x) => (
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
}: Pick<
  CinemaSceneProps,
  "seats" | "selectedSeat" | "filmMode"
>) {
  const cushionRef = useRef<InstancedMesh>(null);
  const backRef = useRef<InstancedMesh>(null);
  const backShellRef = useRef<InstancedMesh>(null);
  const sidePanelRef = useRef<InstancedMesh>(null);
  const cushionMaterialRef = useRef<MeshPhysicalMaterial>(null);
  const backMaterialRef = useRef<MeshPhysicalMaterial>(null);
  const backShellMaterialRef = useRef<MeshPhysicalMaterial>(null);
  const sidePanelMaterialRef = useRef<MeshPhysicalMaterial>(null);
  const armCapRef = useRef<InstancedMesh>(null);
  const cupHolderRef = useRef<InstancedMesh>(null);
  const legRef = useRef<InstancedMesh>(null);
  const footRef = useRef<InstancedMesh>(null);
  const matrix = useMemo(() => new Matrix4(), []);
  const seatObject = useMemo(() => new Object3D(), []);
  const cushionGeometry = useMemo(
    () => new RoundedBoxGeometry(0.58, 0.18, 0.54, 3, 0.08),
    [],
  );
  const backGeometry = useMemo(
    () => createCinemaSeatBackGeometry(),
    [],
  );
  const sidePanelGeometry = useMemo(
    () => new RoundedBoxGeometry(0.12, 0.56, 0.63, 3, 0.05),
    [],
  );
  const armCapGeometry = useMemo(
    () => new RoundedBoxGeometry(0.14, 0.08, 0.62, 3, 0.035),
    [],
  );
  const seatColors = useMemo(
    () => ({
      available: {
        upholstery: new Color("#b52b52"),
        shell: new Color("#8f1e3e"),
        panel: new Color("#781832"),
      },
      selected: {
        upholstery: new Color("#df5274"),
        shell: new Color("#ad3152"),
        panel: new Color("#922542"),
      },
      occupied: {
        upholstery: new Color("#65162f"),
        shell: new Color("#4f1025"),
        panel: new Color("#420c1e"),
      },
    }),
    [],
  );

  useLayoutEffect(() => {
    if (
      !cushionRef.current ||
      !backRef.current ||
      !backShellRef.current ||
      !sidePanelRef.current ||
      !armCapRef.current ||
      !cupHolderRef.current ||
      !legRef.current ||
      !footRef.current
    ) {
      return;
    }

    const placePart = (
      mesh: InstancedMesh,
      instanceIndex: number,
      position: [number, number, number],
      rotation: [number, number, number],
      scale: [number, number, number],
    ) => {
      seatObject.position.set(...position);
      seatObject.rotation.set(...rotation);
      seatObject.scale.set(...scale);
      seatObject.updateMatrix();
      matrix.copy(seatObject.matrix);
      mesh.setMatrixAt(instanceIndex, matrix);
    };

    seats.forEach((seat, index) => {
      placePart(
        cushionRef.current!,
        index,
        [
          seat.x,
          seat.y + cinemaSeatGeometry.cushionCenterAboveFloor,
          seat.z - 0.03,
        ],
        [-0.08, 0, 0],
        [1, 1, 1],
      );
      placePart(
        backShellRef.current!,
        index,
        [
          seat.x,
          seat.y + cinemaSeatGeometry.backCenterAboveFloor,
          seat.z + 0.32,
        ],
        [cinemaSeatGeometry.backrestReclineRadians, 0, 0],
        [0.71, 0.57, 1.02],
      );
      placePart(
        backRef.current!,
        index,
        [
          seat.x,
          seat.y + cinemaSeatGeometry.backCenterAboveFloor,
          seat.z + 0.23,
        ],
        [cinemaSeatGeometry.backrestReclineRadians, 0, 0],
        [0.68, 0.54, 0.9],
      );

      [-0.35, 0.35].forEach((xOffset, sideIndex) => {
        placePart(
          sidePanelRef.current!,
          index * 2 + sideIndex,
          [seat.x + xOffset, seat.y + 0.34, seat.z + 0.06],
          [-0.055, 0, 0],
          [1, 1, 1],
        );
        placePart(
          armCapRef.current!,
          index * 2 + sideIndex,
          [
            seat.x + xOffset,
            seat.y + cinemaSeatGeometry.armrestAboveFloor,
            seat.z + 0.05,
          ],
          [-0.055, 0, 0],
          [1, 1, 1],
        );
        placePart(
          legRef.current!,
          index * 2 + sideIndex,
          [seat.x + xOffset * 0.72, seat.y + 0.2, seat.z + 0.16],
          [0, 0, 0],
          [1, 1, 1],
        );
        placePart(
          footRef.current!,
          index * 2 + sideIndex,
          [seat.x + xOffset * 0.72, seat.y + 0.03, seat.z + 0.12],
          [0, 0, 0],
          [1, 1, 1],
        );
      });

      placePart(
        cupHolderRef.current!,
        index,
        [
          seat.x + 0.35,
          seat.y + cinemaSeatGeometry.armrestAboveFloor + 0.015,
          seat.z - 0.2,
        ],
        [Math.PI / 2, 0, 0],
        [1, 1, 1],
      );
    });

    [
      cushionRef.current,
      backRef.current,
      backShellRef.current,
      sidePanelRef.current,
      armCapRef.current,
      cupHolderRef.current,
      legRef.current,
      footRef.current,
    ].forEach((mesh) => {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
    });
  }, [matrix, seatObject, seats]);

  useLayoutEffect(() => {
    if (
      !cushionRef.current ||
      !backRef.current ||
      !backShellRef.current ||
      !sidePanelRef.current
    ) {
      return;
    }

    seats.forEach((seat, index) => {
      const colors =
        seat.id === selectedSeat.id
          ? seatColors.selected
          : seat.status === "occupied"
            ? seatColors.occupied
            : seatColors.available;
      cushionRef.current?.setColorAt(index, colors.upholstery);
      backRef.current?.setColorAt(index, colors.upholstery);
      backShellRef.current?.setColorAt(index, colors.shell);
      sidePanelRef.current?.setColorAt(index * 2, colors.panel);
      sidePanelRef.current?.setColorAt(index * 2 + 1, colors.panel);
    });

    [
      cushionRef.current,
      backRef.current,
      backShellRef.current,
      sidePanelRef.current,
    ].forEach((mesh) => {
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });
  }, [seatColors, seats, selectedSeat.id]);

  useFrame((_, delta) => {
    const factor = smoothFactor(delta);
    tuneSeatMaterial(
      cushionMaterialRef.current,
      factor,
      filmMode ? 0.09 : 0.3,
      filmMode ? 0.09 : 0.14,
      filmMode ? 0.017 : 0.025,
    );
    tuneSeatMaterial(
      backMaterialRef.current,
      factor,
      filmMode ? 0.09 : 0.3,
      filmMode ? 0.1 : 0.16,
      filmMode ? 0.017 : 0.025,
    );
    tuneSeatMaterial(
      backShellMaterialRef.current,
      factor,
      filmMode ? 0.045 : 0.27,
      filmMode ? 0.035 : 0.05,
      filmMode ? 0.014 : 0.02,
    );
    tuneSeatMaterial(
      sidePanelMaterialRef.current,
      factor,
      filmMode ? 0.045 : 0.27,
      filmMode ? 0.055 : 0.08,
      filmMode ? 0.014 : 0.02,
    );
  });

  return (
    <group>
      <instancedMesh
        ref={cushionRef}
        args={[undefined, undefined, seats.length]}
        castShadow
      >
        <primitive object={cushionGeometry} attach="geometry" />
        <meshPhysicalMaterial
          ref={cushionMaterialRef}
          vertexColors
          roughness={0.93}
          metalness={0}
          emissive="#7a1236"
          emissiveIntensity={0.3}
          specularIntensity={0.025}
          specularColor="#6f1732"
          sheen={0.14}
          sheenColor="#a53252"
          sheenRoughness={0.98}
        />
      </instancedMesh>
      <instancedMesh
        ref={backShellRef}
        args={[undefined, undefined, seats.length]}
        castShadow
      >
        <primitive object={backGeometry} attach="geometry" />
        <meshPhysicalMaterial
          ref={backShellMaterialRef}
          vertexColors
          roughness={0.95}
          metalness={0}
          emissive="#65102e"
          emissiveIntensity={0.27}
          specularIntensity={0.02}
          specularColor="#5c122a"
          sheen={0.05}
          sheenColor="#862642"
          sheenRoughness={1}
        />
      </instancedMesh>
      <instancedMesh
        ref={backRef}
        args={[undefined, undefined, seats.length]}
        castShadow
      >
        <primitive object={backGeometry} attach="geometry" />
        <meshPhysicalMaterial
          ref={backMaterialRef}
          vertexColors
          roughness={0.93}
          metalness={0}
          emissive="#7a1236"
          emissiveIntensity={0.3}
          specularIntensity={0.025}
          specularColor="#6f1732"
          sheen={0.16}
          sheenColor="#a53252"
          sheenRoughness={0.98}
        />
      </instancedMesh>
      <instancedMesh
        ref={sidePanelRef}
        args={[undefined, undefined, seats.length * 2]}
      >
        <primitive object={sidePanelGeometry} attach="geometry" />
        <meshPhysicalMaterial
          ref={sidePanelMaterialRef}
          vertexColors
          roughness={0.95}
          metalness={0}
          emissive="#65102e"
          emissiveIntensity={0.27}
          specularIntensity={0.02}
          specularColor="#5c122a"
          sheen={0.08}
          sheenColor="#862642"
          sheenRoughness={1}
        />
      </instancedMesh>
      <instancedMesh
        ref={armCapRef}
        args={[undefined, undefined, seats.length * 2]}
      >
        <primitive object={armCapGeometry} attach="geometry" />
        <meshStandardMaterial
          color="#09090b"
          roughness={0.86}
          metalness={0.01}
        />
      </instancedMesh>
      <instancedMesh
        ref={cupHolderRef}
        args={[undefined, undefined, seats.length]}
      >
        <torusGeometry args={[0.055, 0.018, 6, 12]} />
        <meshBasicMaterial color="#050506" toneMapped={false} />
      </instancedMesh>
      <instancedMesh
        ref={legRef}
        args={[undefined, undefined, seats.length * 2]}
      >
        <boxGeometry args={[0.08, 0.36, 0.1]} />
        <meshStandardMaterial
          color="#111216"
          roughness={0.56}
          metalness={0.48}
        />
      </instancedMesh>
      <instancedMesh
        ref={footRef}
        args={[undefined, undefined, seats.length * 2]}
      >
        <boxGeometry args={[0.22, 0.04, 0.32]} />
        <meshStandardMaterial
          color="#101115"
          roughness={0.5}
          metalness={0.52}
        />
      </instancedMesh>
    </group>
  );
}

function SceneLighting({
  filmMode,
  isMobile,
}: Pick<CinemaSceneProps, "filmMode" | "isMobile">) {
  const backgroundRef = useRef<Color>(null);
  const fogRef = useRef<Fog>(null);
  const ambientRef = useRef<AmbientLight>(null);
  const hemisphereRef = useRef<HemisphereLight>(null);
  const houseSpotRefs = useRef<Array<SpotLight | null>>([]);
  const housePointRef = useRef<PointLight>(null);
  const litBackground = useMemo(() => new Color("#111317"), []);
  const darkBackground = useMemo(() => new Color("#07080a"), []);
  const litFog = useMemo(() => new Color("#15171b"), []);
  const darkFog = useMemo(() => new Color("#08090b"), []);
  const litAmbient = useMemo(() => new Color("#d7c7b8"), []);
  const darkAmbient = useMemo(() => new Color("#75808a"), []);
  const [initialHouseLights] = useState(() => (filmMode ? 0 : 1));

  useFrame((_, delta) => {
    const factor = smoothFactor(delta);
    const houseLevel = filmMode ? 0 : 1;
    backgroundRef.current?.lerp(
      filmMode ? darkBackground : litBackground,
      factor,
    );
    fogRef.current?.color.lerp(filmMode ? darkFog : litFog, factor);

    if (ambientRef.current) {
      ambientRef.current.intensity +=
        ((filmMode ? 0.16 : 0.92) - ambientRef.current.intensity) * factor;
      ambientRef.current.color.lerp(
        filmMode ? darkAmbient : litAmbient,
        factor,
      );
    }
    if (hemisphereRef.current) {
      hemisphereRef.current.intensity +=
        ((filmMode ? 0.13 : 0.58) - hemisphereRef.current.intensity) * factor;
    }
    houseSpotRefs.current.forEach((light) => {
      if (light) {
        light.intensity += (820 * houseLevel - light.intensity) * factor;
      }
    });
    if (housePointRef.current) {
      housePointRef.current.intensity +=
        (260 * houseLevel - housePointRef.current.intensity) * factor;
    }
  });

  return (
    <>
      <color
        ref={backgroundRef}
        attach="background"
        args={[initialHouseLights ? "#111317" : "#07080a"]}
      />
      <fog
        ref={fogRef}
        attach="fog"
        args={[
          initialHouseLights ? "#15171b" : "#08090b",
          20,
          isMobile ? 60 : 78,
        ]}
      />
      <ambientLight
        ref={ambientRef}
        intensity={initialHouseLights ? 0.92 : 0.16}
        color={initialHouseLights ? "#d7c7b8" : "#75808a"}
      />
      <hemisphereLight
        ref={hemisphereRef}
        args={[
          "#aeb8c0",
          "#3b211e",
          initialHouseLights ? 0.58 : 0.13,
        ]}
      />
      {[-12, 12].map((x, index) => (
        <spotLight
          key={x}
          ref={(light) => {
            houseSpotRefs.current[index] = light;
          }}
          position={[x, 13, 8]}
          target-position={[0, 2, -2]}
          angle={0.66}
          penumbra={0.9}
          intensity={820 * initialHouseLights}
          distance={54}
          color="#f0c6a7"
          castShadow={!isMobile}
        />
      ))}
      <pointLight
        ref={housePointRef}
        position={[0, 12, 12]}
        color="#f3c7a6"
        intensity={260 * initialHouseLights}
        distance={48}
        decay={1.7}
      />
    </>
  );
}

function SceneContents(props: CinemaSceneProps) {
  const { auditorium, filmMode, isMobile } = props;

  return (
    <>
      <SceneLighting filmMode={filmMode} isMobile={isMobile} />
      <Screen
        auditorium={auditorium}
        filmMode={filmMode}
        playing={props.playing}
        filmSource={props.filmSource}
      />
      <AuditoriumArchitecture
        auditorium={auditorium}
        filmMode={filmMode}
      />
      <Seats
        seats={props.seats}
        selectedSeat={props.selectedSeat}
        filmMode={filmMode}
      />
      <CameraRig
        auditorium={auditorium}
        selectedSeat={props.selectedSeat}
        viewCommand={props.viewCommand}
      />
    </>
  );
}

export function CinemaScene(props: CinemaSceneProps) {
  const onlineOverlayRef = useRef<HTMLDivElement>(null);
  const onlineVideoActive =
    props.filmMode &&
    props.playing &&
    props.filmSource === "imax-countdown";
  const initialCameraPosition: [number, number, number] = [
    props.selectedSeat.x,
    getSeatEyeY(props.selectedSeat),
    props.selectedSeat.z,
  ];

  return (
    <>
      <Canvas
        className="cinema-canvas"
        dpr={props.isMobile ? [1, 1.35] : [1, 1.75]}
        camera={{
          position: initialCameraPosition,
          fov: 60,
          near: 0.1,
          far: 120,
        }}
        gl={{
          antialias: !props.isMobile,
          alpha: false,
          powerPreference: "high-performance",
        }}
        shadows={!props.isMobile}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 1.28;
        }}
      >
        <Suspense fallback={null}>
          <SceneContents {...props} />
          <OnlineVideoTracker
            auditorium={props.auditorium}
            active={onlineVideoActive}
            overlayRef={onlineOverlayRef}
          />
        </Suspense>
      </Canvas>
      <div
        ref={onlineOverlayRef}
        className="online-video-overlay"
        aria-hidden={!onlineVideoActive}
      >
        {onlineVideoActive && (
          <iframe
            src={countdownPreviewEmbed}
            title="IMAX Laser Countdown"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </>
  );
}
