import axios from 'axios';
import { FETCH_EVENTS } from '../constants/ActionTypes';

export function fetchEvents(term) {
	let firstResult;
	console.log("FIRST RESULT ON LINE 6", firstResult)
	let events = axios.post('/api/getId', {body: term})
		.then(function(result) {
			return result.data.resultsPage.results.artist[0].id;
		}).then(function(ID) {
			return axios.post('/api/events', {body:ID})
		})

	console.log("HEY THIS IS THE ARTIST in FETCH EVENTS", events);
	return {
		type: "FETCH_EVENTS",
		payload: events
	};
}