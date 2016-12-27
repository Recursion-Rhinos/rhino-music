import axios from 'axios';

export const FETCH_SONGS = 'FETCH_SONGS';

export function fetchSongs(term) {
	const request = axios.post('/api/search', { body: term });
	console.log("HEY THIS IS THE TERM", request)
	return {
		type: 'FETCH_SONGS',
		payload: request
	};
}

