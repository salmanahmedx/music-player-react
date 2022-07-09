import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    //ref
    const audioRef = useRef(null);
    //event handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ currentTime: current, duration })
    }

    const getTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    }

    const dragHandler = e => {
        console.log(audioRef.current.currentTime)
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ currentTime: e.target.value })
    }

    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={isPlaying ? faPause : faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler}></audio>
        </div>
    );
};

export default Player;