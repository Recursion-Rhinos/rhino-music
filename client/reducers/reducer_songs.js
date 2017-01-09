import { PLAY_SONGS, GET_NEWS } from '../constants/ActionTypes';

export default function(state=null, action) {
console.log("ACTION IN PLAY SONGS", action)
  switch(action.type) {
  case "PLAY_SONGS":
  console.log('action.payload for PLAY_SONGS REDUCER', action);
    return action.payload //object BEST PRACTISE
  }
  return state;
}


