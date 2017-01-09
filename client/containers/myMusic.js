import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlistSongs.js';
import { renderPlaylistSongs } from '../actions/renderPlaylist.js';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import axios from 'axios';
import getPlaylists from '../actions/playlists';
import { playSong } from '../actions/songs';

console.log("GET PLAYLIST SONGS", getPlaylistSongs)
class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.newPlaylist = this.newPlaylist.bind(this);
    this.deletePlaylists = this.deletePlaylist.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  deletePlaylist(playlistName) {
    console.log('DELETING PLAYLIST')
    axios.post('/api/deletePlaylist', {playlist: playlistName}).then((data) => {
      console.log('GETTING PLAYLISTS after delete')
      this.props.getPlaylists();
    });
  }

  newPlaylist(playlistName){
  console.log('MAKING NEW PLAYLIST')
  if(playlistName !== '') {
    axios.post('/api/newPlaylist', {body: playlistName}).then((data) => {
      console.log('GETTING NEW PLAYLISTS')
      this.props.getPlaylists();
    });
  }
 }

  renderSongs(songs) {
    console.log('SONGS!!!!!!!!!', songs)
  if(songs !== null) {
    return songs.map((songData) => {
      songData.song = JSON.parse(songData.song);
      console.log('SONG TO RENDER: ', songData)
      return (
        <tr key={songData.song.id}>
          <td>{songData.song.artist}</td>
          <td>
            <button onClick={() => this.props.playSong(songData.song.uri)}>Play</button>
          </td>
        </tr>
      )
    })
  }

    // if(songs === null) {
    //   return <tr><td></td></tr>;
    // } else {
    //   return songs.map((song) => {
    //     console.log('RENDER THIS BITCH: ', song)
    //     return
    //   })
    // }
  }

  renderList(playlists) {
    console.log('PLATLISTS!!!!!!!!!!!!!: ', playlists)
    return playlists.map((playlist) => {
      //console.log("myMusic.js playlist: ", playlist);
      return (
        <tr key={playlist.id}>
          <td>
            <button onClick={()=> { this.deletePlaylist(playlist.Name) }}>Delete</button>
            <button onClick={() => this.renderSongs(this.props.getPlaylistSongs(playlist.Name))}>{playlist.Name}</button>  
          </td>
        </tr>
        // <TableRow key={playlist.id} onClick={() => this.props.getPlaylistSongs(playlist.Name)}>
          // <TableRowColumn>{playlist.Name}</TableRowColumn>
          // <TableRowColumn>SONG INFO</TableRowColumn>
        // </TableRow>
      )
    }) 
  }

  render() {
    console.log('USER PLAYLIST PROPS: ', this.props)
    return (
    <div>
      <div>
        <table>
          <th>Playlists</th>
          <th>
            <input id='newPlaylist' type='text' placeholder='Create New Playlist' /><button onClick={() => {this.newPlaylist(document.getElementById('newPlaylist').value); document.getElementById('newPlaylist').value = '';}}>New Playlist</button>
          </th>
          {this.renderList(this.props.playlists)}
        </table>
      </div>
      <div>
        <table>
        <tr>
          <td>Songs</td>
          <td>Play</td>
        </tr>
          {this.renderSongs(this.props.playlistSongs)}
        </table>
      </div>
    </div>
        // <table>
        // {this.renderSongs(this.state)}
        // </table>
      
       // <Table>
      // <TableBody>
       // { console.log("myMusic.js => this.props", this.props)}
      // <TableRow>
        // <TableHeaderColumn> Playlists </TableHeaderColumn>
        // <TableHeaderColumn> Songs </TableHeaderColumn>
      // </TableRow>
          // {this.renderList(this.props.playlists)}
      // </TableBody>
      // </Table>
    )
  }
}

function mapStateToProps(state) {
  console.log('MSTP state: ', state)
  return {
    playlists: state.playlists, 
    getPlaylistSongs: state.playlistSongs, 
    playlistSongs: state.playlistSongs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylistSongs, getPlaylists, playSong }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);