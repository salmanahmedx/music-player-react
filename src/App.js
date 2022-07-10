import React, { useRef } from "react";
import { useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import "./style/style.scss";
import data from "./data";


function App() {

  //ref
  const audioRef = useRef(null);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation
    })
  }

  //data() returns array of song details from util.js
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}></Nav>
      <Song currentSong={currentSong}></Song>
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      ></Player>
      <Library songs={songs} setCurrentSong={setCurrentSong} libraryStatus={libraryStatus} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}></Library>
      <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler}></audio>
    </div>
  );
}

export default App;


