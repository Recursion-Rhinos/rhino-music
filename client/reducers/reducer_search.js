import { FETCH_SONGS } from '../actions/index';

export default function(state = [], action) {
  console.log("reducer_search action =>", action)
  switch (action.type) {
  case "FETCH_SONGS":
  console.log("ALBUMS:", action)
  	state = [];
    return [ action.payload.data.tracks.items, ...state ];
  }
  return state;
}