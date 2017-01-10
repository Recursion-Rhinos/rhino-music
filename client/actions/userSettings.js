import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

export function changeUser(username) {
  let newUsername = axios.post('/api/changeUsername', {body:username})
  return {
    type: "USERNAME_CHANGE",
    payload: newUsername	
  };
}

export function changePassword(password) {
  let newPassword = axios.post('/api/changePassword', {body:password});
  return {
    type: "USERNAME_CHANGE",
    payload: newPassword	
  };
}

export function changeEmail(email) {
  let newEmail = axios.post('/events/changeEmail', {body:email});
  return {
    type: "USER_EMAIL",
    payload: newEmail	
  };
}
