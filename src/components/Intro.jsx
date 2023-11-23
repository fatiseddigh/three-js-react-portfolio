import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    width: 95%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    height: 100px;
  }
  @media only screen and (max-width: 1200px) {
    flex: 2;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 50px;
  }
`;
const Texts = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;
const Line = styled.img`
  width: 40px;
`;
const SubTitle = styled.h2`
  color: #ff00ff;
`;
const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #ff00ff;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1200px) {
    flex: 1;
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 700px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 3s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @keyframes animate {
    to {
      transform: translateY(-15px);
    }
  }
`;
const Intro = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <Texts>
            <Line src="./img/line.png" />
            <SubTitle>What we do</SubTitle>
          </Texts>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 3, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.28}>
              <MeshDistortMaterial
                color="#e600e6"
                attach="material"
                distort={0.75}
                speed={1}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/1.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Intro;
