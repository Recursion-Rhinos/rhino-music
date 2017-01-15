
import axios from 'axios';
import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

//VALIDATION
export changeUser = (username) => {  
  let newUsername = axios.post('/api/changeUsername', {username:username})
  return {
    type: "USERNAME_CHANGE",
    payload: newUsername	
  };
}

export changePassword = (password) => {
  let newPassword = axios.post('/api/changePassword', {newPassword:password});
  return {
    type: "USER_PASSWORD",
    payload: newPassword	
  };
}

export changeEmail = (email) => {
  let newEmail = axios.post('/api/changeEmail', {email:email});
  return {
    type: "USER_EMAIL",
    payload: newEmail	
  };
}
