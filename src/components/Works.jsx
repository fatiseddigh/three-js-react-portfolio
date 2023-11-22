import React, { useState } from "react";
import styled from "styled-components";
import Web from "./Web";
import Development from "./Development";
import Illustration from "./Illustration";
import ProductDesign from "./ProductDesign";
import Social from "./Social";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 73px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px #ffccff;
  position: relative;
  cursor: pointer;

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffccff;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &:after {
      animation: coloringText 0.5s linear both;
      @keyframes coloringText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Works = () => {
  const [works, setWorks] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWorks(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {works === "Web Design" ? (
            <Web />
          ) : works === "Development" ? (
            <Development />
          ) : works === "Illustration" ? (
            <Illustration />
          ) : works === "Product Design" ? (
            <ProductDesign />
          ) : (
            <Social />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
