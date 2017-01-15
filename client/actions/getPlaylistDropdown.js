import axios from 'axios';
import { GET_PLAYLIST_DROPDOWN } from '../constants/ActionTypes';

const getPlaylistDropdown = () => {
  let request = axios.get('/api/myMusic');
  return {
    type: "GET_PLAYLIST_DROPDOWN",
    payload: request
  }
}

export default getPlaylistDropdown;