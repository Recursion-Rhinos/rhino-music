import { PLAY_VIDEO } from '../constants/ActionTypes';

export function playVideo(videoId) {
  
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return {
    type: "PLAY_VIDEO",
    payload: videoUrl	
  };
}