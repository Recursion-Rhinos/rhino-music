import axios from 'axios';
import {GET_USER} from '../constants/ActionTypes';

const getUser = () => {
  let currentUser = axios.get('/api/getUserInfo');
    return {
	  type: "GET_USER",
	  payload: currentUser
  };
};

export default getUser;