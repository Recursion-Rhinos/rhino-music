import { FETCH_PLAYLIST_SONGS } from '../constants/ActionTypes';

export default function(state=null, action) {
  console.log('FETCH PLIST ACTION', action)
  switch(action.type) {
    case 'FETCH_PLAYLIST_SONGS':
    console.log("PLAYLIST STATE:", state)
      console.log('FETCH_PLAYLIST_SONGS ACTION: ', action.payload.data);
      let songs = [];
      if(Array.isArray(action.payload.data)){
        action.payload.data.forEach((arr) => {
          songs.push(arr[0]);
        })
      }
      console.log('SONGS!!!!!!: ', songs)
      return songs;
  }
  return state;
}