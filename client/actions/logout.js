import axios from 'axios';

const logout = () => {
  let request = axios.get('/logout');
  return { 
    type: 'LOGOUT',
    payload: request
  }
};

export default logout;