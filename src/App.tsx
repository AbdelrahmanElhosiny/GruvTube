import styled from "@emotion/styled";
import "./App.css";
import color from "./styles/color";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Holder>
      <Navbar />
      <Sidebar />
      <HomePage />
    </Holder>
  );
}

const Holder = styled.div`
  background-color: ${color.bg};
`;

export default App;
