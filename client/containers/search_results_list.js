import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux'; //=> Take a look
import axios from 'axios';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import getPlaylistDropdown from '../actions/getPlaylistDropdown';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const style = {
  height: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
class SearchList extends Component {
  constructor(props) {  //no need of it if there is a stateless component
    super(props)
    this.index = 0;
    this.props.getPlaylistDropdown();
    this.renderAlbums = this.renderAlbums.bind(this); //binding in  a constructor
  }


  renderAlbums(albumId) {
  	let albumsArray = [];
    // console.log("PROPS TRACKS", this.props.tracks)
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
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black',}}>{track.artists[0].name}</TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black',}}>{track.name}</TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}><PlayCircleFilled onClick={() => this.props.playSong(track.uri)}>Play</PlayCircleFilled></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}><select id={'playlistDropdown'+track.uri}><option value='default'>Pick a Playlist</option>{this.props.playlistDropdown.map(function(playlist){
              return(<option value={playlist.Name}>{playlist.Name}</option>)
            })}></select></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}><PlaylistAdd onClick={() => {let p = 'playlistDropdown'+track.uri; saveToPlaylist(document.getElementById(p).value, {artist:track.artists[0].name, album:track.name, uri:track.uri})}}>Add to playlist</PlaylistAdd></TableRowColumn>
          </TableRow>
       )
    })
   )

    
}

  render () {
  // console.log("PROPS IN SEARCH_RESULTS_LIST", this.props) 
    return (
       <Paper style={style} zDepth={3}>
       <Table>
     
      <TableBody displayRowCheckbox={false}>
       { console.log("search_results_list => this.props", this.props)}
    <TableRow>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> Artist </TableHeaderColumn>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> Album </TableHeaderColumn>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> Play </TableHeaderColumn>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}>Playlist Dropdown</TableHeaderColumn>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}>Add to Playlist</TableHeaderColumn>
      </TableRow>
          {this.renderAlbums()}
      </TableBody>
      </Table>
       </Paper>
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
  // console.log("dispatch in search-results",dispatch)
  return bindActionCreators({playSong, getPlaylistDropdown}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList); //add mapDispatchToProps to mapStateToProps

