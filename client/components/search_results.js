import React from 'react';
import SongItem from './song_item';

const SearchResults = (props) => {
  console.log("SearchResults", props.songs);
  const searchResult = props.songs.map((song, i) => {
    return (
      <SongItem 
      onSongSelect = {props.onSongSelect}
      key={i} 
      song={song} />
   );
  })
  return (
    <ul className="col-md-8 list-group">
      {searchResult}
    </ul>
  );	
} 
export default SearchResults;

//function Onclick => videoSelect. 