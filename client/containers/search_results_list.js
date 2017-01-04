import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux'; //=> Take a look
// import MusicPlayer from './spotify_player';

class SearchList extends Component {
  constructor(props) {  //no need of it if there is a stateless component
    super(props)
    this.renderAlbums = this.renderAlbums.bind(this); //binding in  a constructor
  }

  renderAlbums(albumId) {
  	let albumsArray = [];
    console.log("PROPS TRACKS", this.props.tracks)
    if(this.props.tracks.length > 0) {
        albumsArray = this.props.tracks[0];
    }
    // console.log("PLAY SONG", playSong)
    //   let that = this;
    //   console.log("RENDER ALBUMS", this.props)
    // const name = albumId
    //  .map((title) => title.name)
    //  .map((names, idx) => (<p key={names.concat(idx + 1)}>{names}</p>));

    // const artist = albumId
    //   .map(title => title.artists[0].name)
    //   .map((artistName, idx) => (<p key={artistName.concat(idx + 1)}>{artistName}</p>)); 
      
    // const album = albumId
    //   .map(title => title.album.album_type)
    //   .map((album, idx) => (<p key={album.concat(idx + 1)}>{album}</p>));

   //For testing purposes only
  //==========================>
   // const name = albumId[0].name;
   // const artist = albumId[0].artists[0].name;
   // const album = albumId[0].album.album_type;
   //==========================>    
// onClick={() => playSong(albumId[0].uri)} }

    return (
      albumsArray.map((track) => {
       return (
      <tr onClick={() => playSong(track.uri)} key={Math.random() * 100}> 
        <td>{track.name}</td>
        <td>{track.artists[0].name}</td>
        <td>{track.album.name}</td>
        <td><button>Play</button></td>
        <td><button>Favourites</button></td>
      </tr>
        )
      })
   )
}

  render () {
  console.log("PROPS IN SEARCH_RESULTS_LIST", this.props)	
    return (
      <table className="table table-hover">
      <thead>
        <tr >
          <th> Title</th>
          <th> Artist </th>
          <th> Album </th>
          <th> Play </th>
          <th> Favourites</th>
        </tr>
      </thead>
      <tbody>
       { console.log("search_results_list => this.props", this.props)}
          {this.renderAlbums()}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps(state) {
  return {tracks: state.tracks};  //same as tracks: state.tracks
}

function mapDispatchToProps(dispatch) {
  console.log("dispatch in search-results",dispatch)
  return bindActionCreators({playSong:playSong}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList); //add mapDispatchToProps to mapStateToProps

