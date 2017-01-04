import {FETCH_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=[], action) {
  console.log('PLAYLIST_REDUCER_ACTION: ', action)
  switch(action.type) {
    case "FETCH_PLAYLISTS":
      console.log('FETCH_PLAYLISTS REDUCER ACTION: ', action)
      // return [action.payload.data, ...state];
      // return state.concat(action.payload.data);
      return action.payload.data;
  }
  return state;
}