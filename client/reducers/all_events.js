import { GET_EVENTS } from '../actions/profileEvents';

export default function(state = null, action) {
  console.log("REDUCER GET_EVENTS I", action);
  switch(action.type) {
    case "GET_EVENTS":
  console.log("REDUCER GET_EVENTS II", action);
    return action.events
  }
  return state;	
}