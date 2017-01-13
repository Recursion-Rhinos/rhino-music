import { GET_EVENTS } from '../actions/profileEvents';

export default function(state = [], action) {
  console.log("REDUCER GET_EVENTS I", action);
  switch(action.type) {
    case "GET_EVENTS":
    console.log("REDUCER GET_EVENTS II", action);
    if(!action.payload.data){
    	return state;
    } 
    return action.payload.data
  }
  return state;	
}