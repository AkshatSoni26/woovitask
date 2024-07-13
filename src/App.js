import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondePage from "./components/SecondePage";
import ThirdPage from "./components/ThirdPage";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="App">
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
