import React from "react";
import styled from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
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
`;
const Button = styled.button`
  background-color: #ff00ff;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
          <Title>Think outside the square space</Title>
          <Texts>
            <Line src="./img/line.png" />
            <SubTitle>Who we Are</SubTitle>
          </Texts>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
