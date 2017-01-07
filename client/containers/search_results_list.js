import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux'; //=> Take a look
import axios from 'axios';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class SearchList extends Component {
  constructor(props) {  //no need of it if there is a stateless component
    super(props)
    this.state = this.getPlaylistDropdown();
    this.getPlaylistDropdown = this.getPlaylistDropdown.bind(this);
    this.renderAlbums = this.renderAlbums.bind(this); //binding in  a constructor
  }

  getPlaylistDropdown() {
    let playlists;
    return axios.get('/api/myMusic').then((data) => {
      console.log('DATA: ', data.data)
      this.state = data.data;
    });
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
//  }

    return (

      albumsArray.map((track) => {
        
       return (
      <TableRow key={Math.random() * 100} onClick={() => this.props.playSong(track.uri)}> 
        <TableRowColumn>{track.artists[0].name}</TableRowColumn>
        <TableRowColumn>{track.name}</TableRowColumn>
        <TableRowColumn><button onClick={() => this.props.playSong(track.uri)} >Play</button></TableRowColumn>
        <TableRowColumn><select><option value='default'>Pick a Playlist</option>{this.state.map(function(playlist){
          return(<option value={playlist.Name}>{playlist.Name}</option>)
        })}></select></TableRowColumn>
        <TableRowColumn><button onClick={() => console.log('THIS.STATE', this.state)}>Add to playlist</button></TableRowColumn>
      </TableRow>
        )
      })
   )
}

  render () {
  console.log("PROPS IN SEARCH_RESULTS_LIST", this.props) 
    return (
       <Table>
     
      <TableBody>
       { console.log("search_results_list => this.props", this.props)}
    <TableRow>
          <TableHeaderColumn> Artist </TableHeaderColumn>
          <TableHeaderColumn> Album </TableHeaderColumn>
          <TableHeaderColumn> Play </TableHeaderColumn>
          <TableHeaderColumn>Playlist Dropdown</TableHeaderColumn>
          <TableHeaderColumn>Favourites</TableHeaderColumn>
      </TableRow>
          {this.renderAlbums()}
      </TableBody>
      </Table>
    );
  }
}



function renderDropdown(arr) {
  console.log('RESOLVED DATA: ', arr)
}

function mapStateToProps(state) {
  return {tracks: state.tracks};  //same as tracks: state.tracks
}

function mapDispatchToProps(dispatch) {
  console.log("dispatch in search-results",dispatch)
  return bindActionCreators({playSong:playSong}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList); //add mapDispatchToProps to mapStateToProps

