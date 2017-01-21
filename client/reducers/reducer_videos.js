import { PLAY_VIDEO } from '../constants/ActionTypes';

export default function(state=null, action) {

  switch(action.type) {
  case "PLAY_VIDEO":
    return action.payload;
  }
  return state;
}
