import axios from 'axios';
import { FETCH_EVENTS } from '../constants/ActionTypes';

const fetchEvents = (term) => {
	let firstResult;
	let events = axios.post('/api/getId', {body: term})
		.then(function(result) {
			return result.data.resultsPage.results.artist[0].id;
		}).then(function(ID) {
			return axios.post('/api/events', {body:ID})
		})

	return {
		type: "FETCH_EVENTS",
		payload: events
	};
};

export default fetchEvents;