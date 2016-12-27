import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export function fetchVideos(term) {

	const request = axios.post('/api/youtube', { body: term } );


	return {
		type: 'FETCH_VIDEOS',
		payload: request
	};
}