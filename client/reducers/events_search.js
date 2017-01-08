import { FETCH_EVENTS } from '../actions/index';

export default function(state = null, action) {
    console.log("REDUCER EVENTS")
 
  switch (action.type) {
  case "FETCH_EVENTS":
  state = []
  	return action.payload.data.resultsPage.results.event
  }
  return state;
}