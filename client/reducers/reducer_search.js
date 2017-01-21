import { FETCH_SONGS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case "FETCH_SONGS":
  	state = []
    return [ action.payload.data.albums.items, ...state ];
  }
  return state; 
}