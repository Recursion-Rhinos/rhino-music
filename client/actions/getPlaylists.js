import axios from 'axios';
import { GET_ALL_PLAYLISTS } from '../constants/ActionTypes';

export function getAllPlaylists() {

  let request = axios.get('/api/profilePlaylists');
  console.log("getPlayList in Action creator", request)
  return {
    type: GET_ALL_PLAYLISTS,
    payload: request
  }
}

export default getAllPlaylists;