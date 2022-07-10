import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        const id = song.id;
        const selectedSong = songs.filter(song => song.id === id)
        await setCurrentSong(selectedSong[0])

        //add active status
        const newSongs = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })

        setSongs(newSongs);

        //check if the song is playing & wait when it loads
        if (isPlaying) audioRef.current.play();
    }
    return (
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;