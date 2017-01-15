import axios from 'axios';
import { FETCH_PLAYLIST_SONGS } from '../constants/ActionTypes';

export function getPlaylistSongs(playlistName) {
  let request = axios.post('/api/getPlaylistSongs', {body:playlistName});
  return {
    type: "FETCH_PLAYLIST_SONGS",
    payload: request
  }
}
