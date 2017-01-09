import axios from 'axios';
import { VIDEO_PLAYLIST } from '../constants/ActionTypes';

export function videoPlaylist(term) {

	var videoPlaylist = axios.get('/api/myMusic')
	.then((stuff) => {console.log("STUFF", stuff)})


	return {
		type: "VIDEO_PLAYLIST",
		payload: videos
	};
}