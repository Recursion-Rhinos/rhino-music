import {GET_ALL_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=[], action) {
  switch(action.type) {
    case "GET_PLAYLIST_DROPDOWN":
      return action.payload.data;
  }
  return state;
}