import { PLAY_SONGS } from '../constants/ActionTypes';

export default function(state=null, action) {
  switch(action.type) {
  case "PLAY_SONGS":
  console.log('action.payload for PLAY_SONGS REDUCER', action.payload)
    return action.payload;
  }
  return state;
}