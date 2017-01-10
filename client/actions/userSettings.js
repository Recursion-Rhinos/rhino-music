
import axios from 'axios';
import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

export function changeUser(username) {
  let newUsername = axios.post('/api/changeUsername', {username:username})
  let userValidation = "^[A-Za-z][A-Za-z0-9]*$";

  if(username === userValidation) {
    console.log("No free space is allowed");
  } 
  else {
  return {
    type: "USERNAME_CHANGE",
    payload: newUsername	
  };
 }
}

export function changePassword(password) {
  let somePassword = password.trim();
  if(somePassword === '') {
     console.log("No free space is allowed");
  } else {
    let newPassword = axios.post('/api/changePassword', {newPassword:somePassword});
    return {
      type: "USER_PASSWORD",
      payload: newPassword	
    };
  }
}

export function changeEmail(email) {
  let newEmail = axios.post('/api/changeEmail', {email:email});
  let emailValidation = "^[a-zA-Z0-9!#\$%\&'\*\+\-/\=\?\^_`\{\|\}~]+(\.[a-zA-Z0-9!#\$%\&'\*\+\-/\=\?\^_`\{\|\}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$";
  
    if(email === emailValidation) {
    alert("Enter another Email");
    }
    else { 
    return {
      type: "USER_EMAIL",
      payload: newEmail	
    };
   }
}
