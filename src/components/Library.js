import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map((song, index) =>
                        <LibrarySong song={song} songs={songs} key={index} setCurrentSong={setCurrentSong} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying}></LibrarySong>
                    )
                }
            </div>
        </div>
    );
};

export default Library;