import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {
    const songSelectHandler = () => {
        const id = song.id;
        const selectedSong = songs.filter(song => song.id === id)
        setCurrentSong(selectedSong[0])
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.current.play();
                })
            }
        }
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