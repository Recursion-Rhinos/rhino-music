import { PLAYLIST_DROPDOWN } from '../actions/index';

export default function(state = [], action) { 

  switch (action.type) {
    case "PLAYLIST_DROPDOWN":
 	    return action.payload.data
  }
  return state;
}