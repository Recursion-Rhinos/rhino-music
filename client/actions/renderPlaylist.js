export function renderPlaylistSongs(songsArr) {
  return {
    type: "SHOW_PLAYLIST",
    payload: songsArr
  }
}