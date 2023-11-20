import Intro from "./components/Intro";
import Who from "./components/Who";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: purple;
`;
function App() {
  return (
    <Container>
      <Intro />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
