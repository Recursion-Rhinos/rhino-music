import axios from 'axios';
import { LOGOUT } from '../constants/ActionTypes';

const logout = () => {
  const request = axios.get('/logout');
  return { 
    type: 'LOGOUT',
    payload: request
  }
};

export default logout;