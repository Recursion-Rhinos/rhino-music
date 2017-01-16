import axios from 'axios';
import getPlaylists from './playlists.js';

const newPlaylist = (playlistName) => {
 return axios.post('/api/newPlaylist', {body: playlistName}).then((data) =>{
    return getPlaylists();
  });
}

export default newPlaylist;