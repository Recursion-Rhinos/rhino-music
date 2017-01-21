import { FETCH_PLAYLIST_SONGS } from '../constants/ActionTypes';

export default function(state=null, action) {
  switch(action.type) {
    case 'FETCH_PLAYLIST_SONGS':
      let songs = [];
      if(Array.isArray(action.payload.data)){
        action.payload.data.forEach((arr) => {
          songs.push(arr[0]);
        })
      }
      return songs;
  }
  return state;
}