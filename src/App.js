import React, { useRef } from "react";
import { useState } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/style.scss";
import data from "./util";


function App() {

  //ref
  const audioRef = useRef(null);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ currentTime: current, duration })
  }

  //data() returns array of song details from util.js
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}></Song>
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      ></Player>
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}></Library>
      <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler}></audio>
    </div>
  );
}

export default App;


