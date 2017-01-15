import axios from 'axios';
import { LOGOUT } from '../constants/ActionTypes';

const logout = () => {
  let request = axios.get('/logout');
  return { 
    type: 'LOGOUT',
    payload: request
  }
};

export default logout;