import { PLAY_SONGS } from '../constants/ActionTypes';

export default function(state=null, action) {
  console.log("Action in reducer_songs", action)
  switch(action.type) {
  case "PLAY_SONGS":
  console.log('action.payload for PLAY_SONGS REDUCER', action)
    return action.payload;
  }
  return state;
}