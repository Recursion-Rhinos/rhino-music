import {GET_ALL_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=[], action) {
  console.log('GET_PLAYLIST_DROPDOWN: ', action)
  switch(action.type) {
    case "GET_PLAYLIST_DROPDOWN":
      console.log('GET_PLAYLIST_DROPDOWN REDUCER ACTION: ', action.payload.data)
      // return [action.payload.data, ...state];
      // return state.concat(action.payload.data);
      return action.payload.data;
  }
  return state;
}