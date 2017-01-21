
const renderPlaylistSongs = (songsArr) => {
  return {
    type: "SHOW_PLAYLIST",
    payload: songsArr
  }
}

export default renderPlaylistSongs;