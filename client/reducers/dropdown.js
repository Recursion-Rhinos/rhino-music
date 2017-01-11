import { PLAYLIST_DROPDOWN } from '../actions/index';

export default function(state = [], action) { 

  switch (action.type) {
  case "PLAYLIST_DROPDOWN":
  console.log(" THIS IS THE ACTION PAYLOAD DATA", action.payload.data)
 	return action.payload.data
  }
  return state;
}