import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlistSongs.js';
import { renderPlaylistSongs } from '../actions/renderPlaylist.js';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import axios from 'axios';
import getPlaylists from '../actions/playlists';
import { playSong } from '../actions/songs';
import {Link} from 'react-router';

const styles = {
  selectBox: { width: '50%' },
  playlist: { width: '100%'}

}
console.log("GET PLAYLIST SONGS", getPlaylistSongs)
class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.newPlaylist = this.newPlaylist.bind(this);
    this.deletePlaylists = this.deletePlaylist.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
    this.renderList = this.renderList.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.getPlaylists();
  }

  deletePlaylist(playlistName) {
    console.log('DELETING PLAYLIST')
    axios.post('/api/deletePlaylist', {playlist: playlistName}).then((data) => {
      console.log('GETTING PLAYLISTS AFTER DELETE')
      this.props.getPlaylists();
    });
  }

  newPlaylist(playlistName){
  console.log('MAKING NEW PLAYLIST')
  //playListName = result of remove spaces before and after name of playlist
  //
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
          <tr key={songData.id}>
            <td>{songData.song.artist}</td>
            <td>
              <button onClick={() => this.props.playSong(songData.song.uri)}>Play</button>
            </td>
          </tr>
        )
      })
    }
  }

  renderList(playlists) {
    console.log('PLATLISTS!!!!!!!!!!!!!: ', playlists)
    return playlists.map((playlist) => {
      return (
        <TableRow key={playlist.id}>
          <TableRowColumn>
            <button onClick={()=> { this.deletePlaylist(playlist.Name) }}>Delete</button>
            <button onClick={() => this.renderSongs(this.props.getPlaylistSongs(playlist.Name))}>{playlist.Name}</button>  
          </TableRowColumn>
        </TableRow>
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
    <div /*style={{display: 'inline-block'}}*/>

        <Table>
        <TableBody>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Playlists</TableHeaderColumn>
          <TableHeaderColumn>
            <input id='newPlaylist' type='text' placeholder='Create New Playlist' maxLength='15'/>
            <button onClick={() => {this.newPlaylist(document.getElementById('newPlaylist').value); document.getElementById('newPlaylist').value = '';}}>+</button>
          </TableHeaderColumn>
          {this.renderList(this.props.playlists)}
        </TableBody>
        </Table>
        <table>
        <tr>
          <th>Songs</th>
          <th>Play</th>
        </tr>
          {this.renderSongs(this.props.playlistSongs)}
        </table>
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