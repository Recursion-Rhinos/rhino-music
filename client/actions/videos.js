import { PLAY_VIDEO } from '../constants/ActionTypes';

export function playSong(videoId) {
  
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return {
    type: "PLAY_VIDEO",
    payload: videoUrl	
  };
}