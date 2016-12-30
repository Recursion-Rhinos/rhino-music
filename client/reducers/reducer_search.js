import { FETCH_SONGS } from '../actions/index'

export default function(state = [], action) {
  console.log("REDUCER-SONGS", action)
  switch (action.type) {
  case FETCH_SONGS:
  console.log("ALBUMS:", action)
    return [ action.payload.data.tracks.items, ...state ];
  }
  return state;
}