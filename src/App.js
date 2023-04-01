import React, { useState, useReducer } from 'react';

import './style.css';
import { movieData } from './data/movieData';
import VideosReducer from './Reducers/videoReducer';
import Video from './components/Video';
import AddMovie from './components/AddMovie';
import TheameContext from './context/TheamContext';
import VideoContext from './context/VideoContext';
import VideoDispatchContext from './context/VideoDispatchContext';

export default function App() {
  const [editVideoState, setEditVideoState] = useState(null);

  const [videos, dispatch] = useReducer(VideosReducer, movieData);
  const [Theam, setTheam] = useState('dark');

  const editVideo = (id) => {
    let vid = videos.find((video) => video.id === id);

    setEditVideoState(vid);
  };

  return (
    <TheameContext.Provider value={Theam}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <button
            onClick={() => setTheam(Theam === 'dark' ? 'light' : 'dark')}
            style={{ border: 'none', padding: '5px', backgroundColor: 'none' }}
          >
            {Theam === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className={Theam}>
            <AddMovie editVideoState={editVideoState} />
            <hr />
            <Video editVideo={editVideo}></Video>
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </TheameContext.Provider>
  );
}
