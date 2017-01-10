import axios from 'axios';

const getPlaylistDropdown = () => {

  let request = axios.get('/api/myMusic');
  console.log("getPlayList in Action creator", request)
  return {
    type: "GET_PLAYLIST_DROPDOWN",
    payload: request
  }
}

export default getPlaylistDropdown;