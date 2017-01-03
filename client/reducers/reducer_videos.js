import { PLAY_VIDEO } from '../constants/ActionTypes';

export default function(state=null, action) {

  switch(action.type) {
  case "PLAY_VIDEO":
  console.log('action.payload for PLAY_VIDEOS REDUCER', action)
    return {currentVideo: action.payload};
  }
  return state;
}
