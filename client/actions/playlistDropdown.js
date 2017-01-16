import axios from 'axios';
import { PLAYLIST_DROPDOWN } from '../constants/ActionTypes';

export default getDropDown = () => {
  const playlists = axios.get('/api/myMusic');
	return {
		type: "PLAYLIST_DROPDOWN",
		payload: playlists
	};
}