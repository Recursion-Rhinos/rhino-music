import { FETCH_PLAYLIST_SONGS } from '../constants/ActionTypes';

export default function(state=null, action) {
  console.log('FETCH PLIST ACTION', action)
  switch(action.type) {
    case 'FETCH_PLAYLIST_SONGS':
    console.log("PLAYLIST STATE:", state)
      console.log('FETCH_PLAYLIST_SONGS ACTION: ', action);
      return action.payload;
  }
  return state;
}