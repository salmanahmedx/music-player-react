import React from "react";
import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/style.scss";
import data from "./util";


function App() {
  //data() returns array of song details from util.js
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}></Song>
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      ></Player>
    </div>
  );
}

export default App;


