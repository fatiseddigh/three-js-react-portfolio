import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Media from "./Media";

const Social = () => {
  return (
    <Canvas camera={{ fov: 25, position: [10, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <Media />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Social;
