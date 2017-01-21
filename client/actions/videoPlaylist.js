import axios from 'axios';
import { VIDEO_PLAYLIST } from '../constants/ActionTypes';

const videoPlaylist = (playlistName) => {
  let videoPlaylist = [];
  const videos = axios.post('/api/getPlaylistSongs',{body:playlistName})
  .then((songArrs) => { 
  	let songs = [];
  	songArrs.data.forEach((arr) => {
      songs.push(arr[0]);
    })
  	return Promise.all(songs.map((song) => {
  		return axios.post('/api/videofy', {name: JSON.parse(song.song)});
  	}))
  	.then(res => {
  		return res.map((obj) => { return JSON.parse(obj.data) });
  	})
  	.then(data => Promise.resolve(data));
  });
  return {
  	type: "VIDEO_PLAYLIST",
  	payload: videos
  };
}

export default videoPlaylist;