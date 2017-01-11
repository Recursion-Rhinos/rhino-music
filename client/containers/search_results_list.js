import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux'; //=> Take a look
import axios from 'axios';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import getPlaylistDropdown from '../actions/getPlaylistDropdown';

class SearchList extends Component {
  constructor(props) {  //no need of it if there is a stateless component
    super(props)
    this.index = 0;
    this.props.getPlaylistDropdown;
    this.renderAlbums = this.renderAlbums.bind(this); //binding in  a constructor
  }

  // getPlaylistDropdown() {
  //   let playlists;
  //   return axios.get('/api/myMusic').then((data) => {
  //     console.log('DATA: ', data.data)
  //     this.state = data.data;
  //   });
  // }

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
    let index = 0;
    return (
      albumsArray.map((track) => { 
        // return (
        //   <tr key={Math.random() * 100}> 
        //     <td></td>
        //     <td>{track.artists[0].name}</td>
        //     <td>{track.name}</td>
        //     <td><button onClick={() => this.props.playSong(track.uri)} >Play</button></td>
        //     <td><select id={'playlistDropdown'+track.uri}><option value='default'>Pick a Playlist</option>{this.state.map(function(playlist){
        //       return(<option value={playlist.Name}>{playlist.Name}</option>)
        //     })}></select></td>
        //     <td><button onClick={() => {let p = 'playlistDropdown'+track.uri; saveToPlaylist(document.getElementById(p).value, {artist:track.artists[0].name, album:track.name, uri:track.uri})}}>Add to playlist</button></td>
        //   </tr>
        // )
        return (
          <TableRow key={Math.random() * 100}>
            <TableRowColumn>{track.artists[0].name}</TableRowColumn>
            <TableRowColumn>{track.name}</TableRowColumn>
            <TableRowColumn><button onClick={() => this.props.playSong(track.uri)}>Play</button></TableRowColumn>
            <TableRowColumn><select id={'playlistDropdown'+track.uri}><option value='default'>Pick a Playlist</option>{this.props.playlistDropdown.map(function(playlist){
              return(<option value={playlist.Name}>{playlist.Name}</option>)
            })}></select></TableRowColumn>
            <TableRowColumn><button onClick={() => {let p = 'playlistDropdown'+track.uri; saveToPlaylist(document.getElementById(p).value, {artist:track.artists[0].name, album:track.name, uri:track.uri})}}>Add to playlist</button></TableRowColumn>
          </TableRow>
       )
    })
   )

    
}

  render () {
  console.log("PROPS IN SEARCH_RESULTS_LIST", this.props) 
    return (
       <Table>
     
      <TableBody displayRowCheckbox={false}>
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

function saveToPlaylist(playlistName, songData) {
  if(playlistName !== 'default'){
    let obj = {
      playlistName: playlistName,
      songData: songData
    }
    axios.post('/api/saveSong', {body: obj})
    .then((result) => {
      console.log('SAVING SONG')
    });
  }
}

function updateIndex() {
  this.index++;
}

function mapStateToProps(state) {
  return {tracks: state.tracks, playlistDropdown: state.PlaylistDropdown};  //same as tracks: state.tracks
}

function mapDispatchToProps(dispatch) {
  console.log("dispatch in search-results",dispatch)
  return bindActionCreators({playSong, getPlaylistDropdown}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList); //add mapDispatchToProps to mapStateToProps

