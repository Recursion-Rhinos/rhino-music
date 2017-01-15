import { SHOW_PLAYLIST } from '../constants/ActionTypes';

export function renderPlaylistSongs(songsArr) {
  return {
    type: "SHOW_PLAYLIST",
    payload: songsArr
  }
}