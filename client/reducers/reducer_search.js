import { FETCH_SONGS } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_SONGS:
    return [ action.payload.data, ...state ];
  }
  return state;
}