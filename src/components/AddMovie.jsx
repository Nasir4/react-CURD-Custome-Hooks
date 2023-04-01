import React, { useState, useEffect } from 'react';
import './addMovies';

import useVideoDispatch from '../Hooks/VideoDispatchHook';

const AddMovie = ({ editVideoState }) => {
  const dispatch = useVideoDispatch();
  const initialState = {
    id: 1,
    movieName: '',
    movieUrl:
      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    views: '',
    collection: '222 crores',
  };
  const [localVideoState, setLocalVideoState] = useState(initialState);

  useEffect(() => {
    if (editVideoState) {
      setLocalVideoState(editVideoState);
    }
  }, [editVideoState]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editVideoState) {
      dispatch({
        type: 'UPDATE',
        payload: localVideoState,
      });
    } else {
      dispatch({ type: 'ADD', payload: localVideoState });
    }
    setLocalVideoState(initialState);
  };

  const handleInputs = (e) => {
    setLocalVideoState({ ...localVideoState, [e.target.name]: e.target.value });
  };

  return (
    <div className="formSty">
      {JSON.stringify(editVideoState)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="movie title"
          name="movieName"
          value={localVideoState.movieName}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="movie views"
          name="views"
          value={localVideoState.views}
          onChange={handleInputs}
        />
        <button>{editVideoState ? 'Update Video' : 'Add Video'}</button>
      </form>
    </div>
  );
};

export default AddMovie;
