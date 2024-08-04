import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SkyComponent from "./sky/SkyComponent";
import TrainComponent from "./train/TrainComponent";
import DropdownMenu from "./DropdownMenu";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <DropdownMenu />
        <Routes>
          <Route path="/sky-app/train" element={<TrainComponent />} />
          <Route path="/sky-app/sky" element={<SkyComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
