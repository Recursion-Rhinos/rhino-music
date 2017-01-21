import { PLAY_VIDEO } from '../constants/ActionTypes';

const playVideo = (videoId) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`
  return {
    type: "PLAY_VIDEO",
    payload: videoUrl	
  };
}

export default playVideo;