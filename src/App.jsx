import Intro from "./components/Intro";
import Who from "./components/Who";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import styled from "styled-components";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  background-color: purple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <Container>
      <Intro />
      <Who />
      <Works />
      <Contacts />
      <Test />
    </Container>
  );
}

export default App;
