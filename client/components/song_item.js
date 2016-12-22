import React from 'react';
// import SearchResult from './search_results';

const SongItem = (props) => {
  console.log("SongItem",props);
  const images = props.song.album.images[2].url;
  return (
    <li onClick = {() => props.onSongSelect(props.song.uri)} className="list-group-item">
      <div className="song-list-media">
        <div className="song-left">     
          <img className="song-object" src={images} />
        </div>
      
        <div className="song-body">
          <div className="song-heading">{props.song.name}</div>
        </div>
      </div>
    </li>
  );
};

export default SongItem;