import { PLAY_SONGS } from '../constants/ActionTypes';

export function playSong(songId) {
  return {
    type: "PLAY_SONGS",
    payload: songId	
  };
}
