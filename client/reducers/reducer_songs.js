import { PLAY_SONGS, GET_NEWS } from '../constants/ActionTypes';

export default function(state=null, action) {

  switch(action.type) {
  case "PLAY_SONGS":
  console.log('action.payload for PLAY_SONGS REDUCER', action)
    return {currentSong: action.payload}; //object BEST PRACTISE
  }
  return state;
}


