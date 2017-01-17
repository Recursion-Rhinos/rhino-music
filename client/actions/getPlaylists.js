import axios from 'axios';
import { GET_ALL_PLAYLISTS } from '../constants/ActionTypes';

const getAllPlaylists = () => {
  let request = axios.get('/api/profilePlaylists');
  return {
    type: GET_ALL_PLAYLISTS,
    payload: request
  }
}

export default getAllPlaylists;