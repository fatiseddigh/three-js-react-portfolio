import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import LopTop from "./LopTop";

const Illustration = () => {
  return (
    <Canvas camera={{ fov: 25, position: [25, 5, 5] }}>
      <Stage environment="city" intensity={0.6}>
        <LopTop />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Illustration;
