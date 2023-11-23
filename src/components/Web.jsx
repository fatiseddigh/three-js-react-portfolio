import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Imac from "./Imac";

const Web = () => {
  return (
    <Canvas camera={{ fov: 15, position: [-20, 10, -30] }}>
      <Stage environment="city" intensity={0.6}>
        <Imac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Web;
