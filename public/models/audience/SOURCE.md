# Seated audience models

The two GLB files in this directory are converted copies of the seated
female and male characters from **Background Posed Humans Pack** by
Quaternius.

- Original source: https://quaternius.com/packs/backgroundposedhumans.html
- Download mirror used: https://eclair-assets.itch.io/background-posed-humans-glb-pack-28-free-cc0-3d-models
- License: CC0 1.0 Universal
- License text: https://creativecommons.org/publicdomain/zero/1.0/
- Retrieved: 2026-07-30

Selected source models:

- `Female/Female Poses/OBJ/Female_Sitting.obj`
- `Female/Female Hairstyles/OBJ/Female_Hairstyle_2.obj`
- `Male/Male Poses/OBJ/Male_Sitting.obj`
- `Male/Male Hairstyles/OBJ/Male_Hairstyle_2.obj`

The GLB conversion preserves the static posed geometry and embedded
materials. Runtime code rotates every body toward the screen, scales it to
the cinema seats, smooths vertex normals, applies subdued matte materials,
and draws repeated characters with GPU instancing. The converted hairstyle
files remain bundled for source provenance; the current simulator uses
simple smooth rear hair caps so viewers see quiet silhouettes instead of
low-poly faces.
