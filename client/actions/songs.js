import { PLAY_SONGS } from '../constants/ActionTypes';

export function playSong(songId) {
  console.log("PLAY_SONGS Action Creator => songId", songId)
  return {
    type: PLAY_SONGS,
    payload: songId	
  };
}
