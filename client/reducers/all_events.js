import { GET_EVENTS } from '../actions/profileEvents';

export default function(state = [], action) {
  switch(action.type) {
    case "GET_EVENTS":
    if(!action.payload.data){
    	return state;
    } 
    return action.payload.data
  }
  return state;	
}