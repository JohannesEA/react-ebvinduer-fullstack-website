import styled from "styled-components";
import GlobalStyles from "./constants/GlobalStyles";
import Home from "./pages/home/Home";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div``;
