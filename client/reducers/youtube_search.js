import { FETCH_VIDEOS } from '../actions/index';

export default function(state = [], action) { 

  switch (action.type) {
  case "FETCH_VIDEOS":
 	return [action.payload.data.items,...state];
  }
  return state;
}