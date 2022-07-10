export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                audioRef.current.play();
            })
        }
    }
}

//** one way of using promise **/

//** Another one is ASYNC - AWAIT **/