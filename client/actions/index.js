import axios from 'axios';
import { FETCH_SONGS } from '../constants/ActionTypes';

export function fetchSongs(term) {
	let request = axios.post('/api/search', { body: term })
	// .then((data)=> {console.log("RETURNED", data)});
	console.log("HEY THIS IS THE TERM", request)
	return {
		type: FETCH_SONGS,
		payload: request
	};
}

