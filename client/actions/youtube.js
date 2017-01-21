import axios from 'axios';
import { FETCH_VIDEOS } from '../constants/ActionTypes';

const fetchVideos = (term) => {
	let videos = axios.post('/api/videos', {body: term});
	return {
		type: "FETCH_VIDEOS",
		payload: videos
	};
}

export default fetchVideos;