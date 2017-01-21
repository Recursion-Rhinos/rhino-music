import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

export default function(state = [], action) {

  switch(action.type) {
    case "USER_PASSWORD":
    return action.payload.data;

    case "USERNAME_CHANGE":
    return action.payload.data;
    
    case "USER_EMAIL":
    return action.payload.data;
    }
  return state; 
}