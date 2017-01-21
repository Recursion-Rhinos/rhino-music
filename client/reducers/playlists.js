import {FETCH_PLAYLISTS } from '../constants/ActionTypes';

export default function(state=[], action) {
  switch(action.type) {
    case "FETCH_PLAYLISTS":
      return action.payload.data;
  }
  return state;
}