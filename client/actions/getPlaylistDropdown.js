import axios from 'axios';

const getPlaylistDropdown = () => {

  let request = axios.get('/api/myMusic');
  return {
    type: "GET_PLAYLIST_DROPDOWN",
    payload: request
  }
}

export default getPlaylistDropdown;