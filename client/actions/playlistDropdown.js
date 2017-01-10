import axios from 'axios';
import { PLAYLIST_DROPDOWN } from '../constants/ActionTypes';

export default function getDropDown() {

  const playlists = axios.get('/api/myMusic');

  console.log(" THIS IS THE PLAYLIST HAPPENING DUDE", playlists)

	return {
		type: "PLAYLIST_DROPDOWN",
		payload: playlists
	};
}