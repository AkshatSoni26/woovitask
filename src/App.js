import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondePage from "./components/SecondePage";
import ThirdPage from "./components/ThirdPage";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="App">
      <ButtonGroup variant="contained" aria-label="Basic button group" className="d-flex justify-content-center">
        <Button onClick={() => setCurrentPage(1)}>First Page</Button>
        <Button onClick={() => setCurrentPage(2)}>Second Page</Button>
        <Button onClick={() => setCurrentPage(3)}>Third Page</Button>
      </ButtonGroup>
      <div className="app-wrapper">
        <div className="card">
          <img src={require("./images/Logo.png")} alt="logo" className="logo" />
          {currentPage == 1 && <FirstPage />}
          {currentPage == 2 && <SecondePage />}
          {currentPage == 3 && <ThirdPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
