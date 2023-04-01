import { useContext } from 'react';
import VideoContext from '../context/VideoContext';

const useVideosHook = () => {
  return useContext(VideoContext);
};

export default useVideosHook;
