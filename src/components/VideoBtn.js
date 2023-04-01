import React from 'react';
import { useState } from 'react';

const VideoBtn = ({ children, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);

  const handleBtn = () => {
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <button onClick={handleBtn}>
        {children} : {playing ? '⏸️' : '▶️'}
      </button>
    </>
  );
};

export default VideoBtn;
