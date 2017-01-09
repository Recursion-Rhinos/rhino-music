import {GET_ALL_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=[], action) {
  console.log('GET_ALL_PLAYLISTS: ', action)
  switch(action.type) {
    case "GET_ALL_PLAYLISTS":
      console.log('GET_ALL_PLAYLISTS REDUCER ACTION: ', action.payload.data)
      // return [action.payload.data, ...state];
      // return state.concat(action.payload.data);
      return action.payload.data;
  }
  return state;
}