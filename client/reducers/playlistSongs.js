import { FETCH_PLAYLIST_SONGS } from '../constants/ActionType';

export default function(state=[], action) {
  switch(action.type) {
    case: 'FETCH_PLAYLIST_SONGS':
      console.log('FETCH_PLAYLIST_SONGS ACTION: ', action);
      return action.payload.data
  }
}