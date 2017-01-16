import { PLAY_SONGS } from '../constants/ActionTypes';

export playSong = (songId) => {
  return {
    type: "PLAY_SONGS",
    payload: songId	
  };
}
