import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong }) => {
    const songSelectHandler = () => {
        const id = song.id;
        const selectedSong = songs.filter(song => song.id === id)
        setCurrentSong(selectedSong[0])
    }
    return (
        <div className='library-song' onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;