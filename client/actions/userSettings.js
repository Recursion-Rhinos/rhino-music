
import axios from 'axios';
import { USER_PASSWORD } from '../constants/ActionTypes';
import { USERNAME_CHANGE } from '../constants/ActionTypes';
import { USER_EMAIL } from '../constants/ActionTypes';

//VALIDATION
export function changeUser(username) {
  // let usernameValidation = username.trim();
  // if(usernameValidation === '') {
  //   console.log("No whitespace is allowed");
  // } else {    
  let newUsername = axios.post('/api/changeUsername', {username:username})
  return {
    type: "USERNAME_CHANGE",
    payload: newUsername	
  };
}
//}

export function changePassword(password) {
// let passwordValidation = password.trim();
//   if(passwordValidation === '') {
//     console.log("No whitespace is allowed");

//   } else {
    let newPassword = axios.post('/api/changePassword', {newPassword:password});
    return {
      type: "USER_PASSWORD",
      payload: newPassword	
    };
  }
//}

export function changeEmail(email) {
// let emailValidation = "^[a-zA-Z0-9!#\$%\&'\*\+\-/\=\?\^_`\{\|\}~]+(\.[a-zA-Z0-9!#\$%\&'\*\+\-/\=\?\^_`\{\|\}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$";
//   if(email.match(emailValidation)) {
//     alert("Enter another Email");
//     return;
//   } else { 
    let newEmail = axios.post('/api/changeEmail', {email:email});
    return {
      type: "USER_EMAIL",
      payload: newEmail	
  };
 }
//}
