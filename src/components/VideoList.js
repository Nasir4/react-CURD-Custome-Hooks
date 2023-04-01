import React from 'react';

import useVideoDispatch from '../Hooks/VideoDispatchHook';

const mainContainer = {
  border: '1px solid black',
  padding: '5px',
  margin: '10px',
  height: '470px',
  width: '300px',
};
const imgDiv = {
  width: '100%',
  height: '250px',
};

const VideoList = ({
  id,
  movieName,
  movieUrl,
  views,
  collection,
  children,

  editVideo,
}) => {
  const dispatch = useVideoDispatch();
  return (
    <>
      <div style={mainContainer}>
        <h3>Title : {movieName}</h3>
        <div>
          <img src={movieUrl} alt="" style={imgDiv} />
        </div>
        <h5>Views : {views}</h5>
        <h5>Total Collection : {collection}</h5>
        <div>{children}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <button onClick={() => editVideo(id)}>Edit</button>
          <button onClick={() => dispatch({ type: 'DELETE', payload: id })}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoList;
