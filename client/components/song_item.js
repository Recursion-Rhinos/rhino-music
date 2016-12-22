import React from 'react';
// import SearchResult from './search_results';

const SongItem = (props) => {
  console.log("SongItem",props);
  const images = props.song.album.images[2].url;
  return (
    <li onClick = {() => props.onSongSelect(props.song.uri)} className="list-group-item">
      <div className="song-list-media">
        <div className="media-left">     
          <img className="media-object" src={images} />
        </div>
      
        <div className="media-body">
          <h4 className="media-heading">{props.song.name}</h4>

        </div>
      </div>
    </li>
  );
};

export default SongItem;