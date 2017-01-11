import axios from 'axios';

const logout = () => {
  let request = axios.get('/logout');
  console.log('LOGGING OUT!!!!')
  return { 
    type: 'LOGOUT',
    payload: request
  }
};

export default logout;