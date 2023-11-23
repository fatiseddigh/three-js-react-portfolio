import React from "react";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media only screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 45px;
  width: 90px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #ff00ff;
  font-weight: bold;
  cursor: pointer;
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logos.svg" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
