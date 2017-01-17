import axios from 'axios';

const removeSong = (sondId) => {
  let request = axios.post('/api/removePlaylistSong', {songId: songId});
  return {
    type: 'REMOVE_PLAYLIST_SONG',
    payload: request
  }
}

export default removeSong;