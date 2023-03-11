import React from "react";
import "./App.css";
import Game from "./components/Game";
import Start from "./components/Start";
import ChoseXO from "./components/ChoseXO";

function App() {
  return (
    <div className="container">
      <Game />
      {/* 
      <Start />
      <ChoseXO /> */}
    </div>
  );
}

export default App;
