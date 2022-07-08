import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Player = () => {
    return (
        <div>
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" name="" id="" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon className='play' size='2x' icon={faPlay}></FontAwesomeIcon>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Player;