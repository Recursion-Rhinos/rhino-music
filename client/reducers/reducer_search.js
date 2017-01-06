import { FETCH_SONGS } from '../actions/index';

export default function(state = [], action) {
  console.log("reducer_search action =>", action)
  switch (action.type) {
  case "FETCH_SONGS":
  	state = []
    return [ action.payload.data.albums.items, ...state ];
  }
  return state; 
}