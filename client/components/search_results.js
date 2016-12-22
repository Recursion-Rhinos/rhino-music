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
    <div>
      <div>{searchResult}</div>
    </div>
  );	
} 
export default SearchResults;

//function Onclick => videoSelect. 