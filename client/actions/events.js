import axios from 'axios';
import { FETCH_EVENTS } from '../constants/ActionTypes';

export function fetchEvents(artist) {
	let request = axios.post('/api/events', { body: artist});
	// .then((data)=> {console.log("RETURNED", data)});
	console.log("HEY THIS IS THE ARTIST in FETCH EVENTS", request);
	return {
		type: FETCH_EVENTS,
		payload: request
	};
}