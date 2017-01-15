import axios from 'axios';

const newPlaylist = (playlistName) => {
 return axios.post('/api/newPlaylist', {body: playlistName}).then((data) =>{
    return getPlaylists();
  });
}

export default newPlaylist;