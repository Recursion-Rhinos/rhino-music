import {FETCH_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=null, action) {
  switch(action.type) {
    case "FETCH_PLAYLISTS":
      console.log('FETCH_PLAYLISTS REDUCER ACTION: ', action)
      return {playlists: action.payload};
  }
  return state;
}