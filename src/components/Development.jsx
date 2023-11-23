import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactLogo from "./ReactLogo";

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ReactLogo />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
