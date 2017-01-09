import { VIDEO_PLAYLIST } from '../actions/index';

export default function(state = [], action) { 

  switch (action.type) {
  case "VIDEO_PLAYLIST":
 	console.log("ACTIONNNN", action)
  }
  return state;
}