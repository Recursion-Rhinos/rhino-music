import { PLAY_SONGS } from '../constants/ActionTypes';

const playSong = (songId) => {
  return {
    type: "PLAY_SONGS",
    payload: songId	
  };
}

export default playSong;
