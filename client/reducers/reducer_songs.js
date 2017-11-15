import { PLAY_SONGS, GET_NEWS } from '../constants/ActionTypes';

export default function(state=null, action) {
  switch(action.type) {
  case "PLAY_SONGS":
    return action.payload 
  }
  return state;
}


