import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Song></Song>
      <Player></Player>
    </div>
  );
}

export default App;


