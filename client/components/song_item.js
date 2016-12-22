import React from 'react';
// import SearchResult from './search_results';

const SongItem = (props) => {
  console.log("SongItem",props.song.artists[0].name);
  const images = props.song.album.images[2].url;
  const artistName = props.song.artists[0].name;
  const songName = props.song.name;
  return (
    <li onClick = {() => props.onSongSelect(props.song.uri)} className="list-group-item">
      <div className="song-list-media">
        <div className="media-left">     
          <img className="media-object" src={images} />
        </div>
      
        <div className="media-body">
          <h4 className="media-heading">{artistName}-{songName}</h4>
          views ratings likes comments share lyrics 
        </div>
      </div>
    </li>
  );
};

export default SongItem;