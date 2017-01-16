import axios from 'axios';
import {GET_USER} from '../constants/ActionTypes';

export default function getUser() {
  const currentUser = axios.get('/api/getUserInfo');
  return {
    type: 'GET_USER',
    payload: currentUser
  };
}

