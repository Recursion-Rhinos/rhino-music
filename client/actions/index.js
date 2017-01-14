import axios from 'axios';
import { FETCH_SONGS } from '../constants/ActionTypes';

export function fetchSongs(term) {
	let request = axios.post('/api/search', { body: term })
	return {
		type: FETCH_SONGS,
		payload: request
	};
}
