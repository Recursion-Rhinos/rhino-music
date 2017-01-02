import axios from 'axios';
import { FETCH_EVENTS } from '../constants/ActionTypes';

export function fetchEvents(term) {
	let events = axios.post('/api/events', {searchTerm: term});
	// .then((data)=> {console.log("RETURNED", data)});
	console.log("HEY THIS IS THE ARTIST in FETCH EVENTS", events);
	return {
		type: FETCH_EVENTS,
		payload: events
	};
}