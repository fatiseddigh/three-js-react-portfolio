import React from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
const Cube = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <color attach="background" args={["pink"]} />
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <Text fontSize={1} color="#555">
            SEDDIGH
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
