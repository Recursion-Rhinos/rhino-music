import axios from 'axios';
import { FETCH_PLAYLISTS } from '../constants/ActionTypes';


const getPlaylists = () => {

  let request = axios.get('/api/myMusic');
  return {
    type: FETCH_PLAYLISTS,
    payload: request
  }
}

export default getPlaylists;
// export function fetchPlaylists() {  
//   return dispatch => {
//     return axios.post('/api/myMusic').then((res) => {
//       console.log('PLAYLIST RES: ', res)
//       let pLists = res.data;
//       dispatch(getPlaylists(pLists));
//     });
//   }
// }