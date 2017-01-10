import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

export default function(state = [], action) {
  console.log("REDUCER USER SETTINGS I", action);
  switch(action.type) {
    // case "USER_PASSWORD":
    // console.log("REDUCER USER SETTINGS for USER_PASSWORD ", action);
    // return action.payload.data

    case "USERNAME_CHANGE":
    console.log("REDUCER USER SETTINGS for USERNAME_CHANGE", action);
    return action.payload.data
    
    // case "USER_EMAIL":
    // console.log("REDUCER USER SETTINGS for USER_EMAIL", action);
    // return action.payload.data
  }
  return state;	
}