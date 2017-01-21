import { FETCH_EVENTS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
  case "FETCH_EVENTS":
  state = [];
    if(!action.payload.data) {
      return state;
    }
  	return action.payload.data.resultsPage.results.event;
  }
  return state;
}