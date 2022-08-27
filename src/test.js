import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player'

const sources = {
    sintelTrailer: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyMovie: 'https://media.w3.org/2010/05/bunny/movie.mp4',
}

const Video = (props) => {
    const ref = useRef();

    const [source, setSource] = useState(sources.bunnyMovie);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [volume, setVolume] = useState(0.5);

    const play = () => setPlaying(true);
    const pause = () => setPlaying(false);
    const mute = () => setMuted(true);
    const unmute = () => setMuted(false);

    const faster = () => {
        if (playbackRate < 10) {
            setPlaybackRate(playbackRate + 1)
        }
    };

    const slower = () => {
        if (playbackRate > 0) {
            setPlaybackRate(playbackRate - 1)
        }
    };

    const louder = () => {
        if (volume < 0.9) {
            setVolume(volume + 0.1)
            console.log(volume)
        }
    };

    const quieter = () => {
        if (volume > 0.1) {
            setVolume(volume - 0.1)
            console.log(volume)
        }
    };

    return (
        <div>
            <ReactPlayer
                ref={ref}
                url={source}
                playing={playing}
                muted={muted}
                volume={volume}
                playbackRate={playbackRate}
            />

            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={mute}>Mute</button>
            <button onClick={unmute}>Unmute</button>

            <button onClick={faster}>Increase Playback Rate</button>
            <button onClick={slower}>Decrease Playback Rate</button>

            <button onClick={louder}>Increase Volume</button>
            <button onClick={quieter}>Decrease Volume</button>

            <button onClick={() => ref.current.seekTo(10)}>Seek to 00:10</button>

            <button onClick={() => setSource(sources.sintelTrailer)}>Change to Sintel Trailer</button>
            <button onClick={() => setSource(sources.bunnyMovie)}>Change to Bunny Movie</button>
        </div>
    );
};

export default Video;
