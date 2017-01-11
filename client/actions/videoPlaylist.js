import axios from 'axios';
import async from 'async';
import { VIDEO_PLAYLIST } from '../constants/ActionTypes';
export function videoPlaylist(playlistName) {

console.log("PLAYLIST NAME", playlistName)
 let videoPlaylist = [];
	const videos = axios.post('/api/getPlaylistSongs',{body:playlistName})
	.then((songArrs) => { 
		console.log("SONG ARRS", songArrs)
		let songs = [];
    	songArrs.data.forEach((arr) => {
        songs.push(arr[0]);
      })

    	console.log("SONGS", songs)
    	return Promise.all(songs.map((song) => {
    		console.log("SONG", song)
    		return axios.post('/api/videofy', {
    	    		name: JSON.parse(song.song)
    	    	});
    	}))
    	.then(res => {
    		return res.map((obj) => { return JSON.parse(obj.data) });
    	})
    	.then(data => Promise.resolve(data));
	});
	console.log('videosPlaylist!!!!#!$@%#', videos)
	return {
		type: "VIDEO_PLAYLIST",
		payload: videos
	};
}
