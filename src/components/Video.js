import React from 'react';
import VideoList from './VideoList';
import VideoBtn from './VideoBtn';

import useVideosContext from '../Hooks/VideoContextHook';

const Video = ({ editVideo }) => {
  const videos = useVideosContext();
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {videos.map((video) => {
          return (
            <VideoList {...video} key={video.id} editVideo={editVideo}>
              <VideoBtn
                onPlay={() => console.log('Playing Movie')}
                onPause={() => console.log('Pause Movie')}
              >
                {video.movieName}
              </VideoBtn>
            </VideoList>
          );
        })}
      </div>
    </>
  );
};

export default Video;
