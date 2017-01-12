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
import Flexbox from 'flexbox-react';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Remove from 'material-ui/svg-icons/content/remove-circle';
import Paper from 'material-ui/Paper';


const style = {
  height: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

console.log("GET PLAYLIST SONGS", getPlaylistSongs)
class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.playlistId = null;
    this.playlistName = null;
    this.newPlaylist = this.newPlaylist.bind(this);
    this.deletePlaylists = this.deletePlaylist.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
    this.renderList = this.renderList.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.cellClicked = this.cellClicked.bind(this);
  }

  componentWillMount() {
    this.props.getPlaylists();
  }
  componentDidMount(){
    if(this.playlistName) {
      this.renderSongs(this.props.getPlaylistSongs(this.playlistName));
    }
  }

  deletePlaylist(playlistName) {
    axios.post('/api/deletePlaylist', {playlist: playlistName}).then((data) => {
      this.props.getPlaylists();
    });
  }

  newPlaylist(playlistName){
    if(playlistName !== '') {
      axios.post('/api/newPlaylist', {body: playlistName}).then((data) => {
        this.props.getPlaylists();
      });
    }
  }

  deleteSong(playlistId,songId){
    console.log('REmoving Song')
    axios.post('/api/removePlaylistSong', {playlistId: playlistId, songId: songId}).then((data) => {
      console.log('Song Removed')
      this.renderSongs(this.props.getPlaylistSongs(this.playlistName))
    })
  }

  cellClicked(rowNum, colNum){
    let index = rowNum-2;
    let playlist = this.props.playlists[index];
    console.log('playlist: ', playlist.Name)
    this.playlistId = playlist.id;
    this.playlistName = playlist.Name;
    this.renderSongs(this.props.getPlaylistSongs(playlist.Name));
  }

  renderSongs(songs) {
    if(Array.isArray(songs)) {
      return songs.map((songData) => {
        if(typeof songData.song === 'string'){
          songData.song = JSON.parse(songData.song);
        }
        return (
          <TableRow key={songData.id}>
            <TableRowColumn>{songData.song.artist}</TableRowColumn>
            <TableRowColumn>{songData.song.album}</TableRowColumn>
            <TableRowColumn>
              <PlayCircleFilled onClick={() => this.props.playSong(songData.song.uri)}>Play</PlayCircleFilled>
            </TableRowColumn>
            <TableRowColumn>
              <Remove onClick={()=>{this.deleteSong(this.playlistId, songData.id)}}></Remove>
            </TableRowColumn>
          </TableRow>
        )
      })
    }
  }

  renderList(playlists) {
    if(Array.isArray(playlists)){
      return playlists.map((playlist) => {
        return (
          <TableRow displayBorder={true} key={playlist.id} onClick={() => { console.log('HELLO????'); this.playlistId = playlist.id; this.playlistName= playlist.Name; this.renderSongs(this.props.getPlaylistSongs(playlist.Name))}}>
            <TableRowColumn>
              <Delete onClick={()=> { this.deletePlaylist(playlist.Name)}}></Delete>
            </TableRowColumn>
            <TableRowColumn>
              {playlist.Name} 
            </TableRowColumn>
          </TableRow>
        )
      }) 
    }
  }

  render() {
    return (
    <Paper zDepth={1}>
      <Flexbox>
        <Table onCellClick={this.cellClicked} height={'500px'}>
        <TableBody displayRowCheckbox={false}>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '20%'}} adjustForCheckbox={false}><input id='newPlaylist' type='text' placeholder='Create New Playlist' maxLength='15'/>
            <button onClick={() => {this.newPlaylist(document.getElementById('newPlaylist').value); document.getElementById('newPlaylist').value = '';}}>+</button></TableHeaderColumn>
          <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '30%'}}>Playlists</TableHeaderColumn>
          {this.renderList(this.props.playlists)}
        </TableBody>
        </Table>
        <Table height={'500px'}>
          <TableBody displayRowCheckbox={false}>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '20%'}} adjustForCheckbox={false}>Artist</TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '50%'}} adjustForCheckbox={false}>Album</TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '15%'}} adjustForCheckbox={false}>Play</TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',width: '15%'}} adjustForCheckbox={false}>Remove</TableHeaderColumn>   
            {this.renderSongs(this.props.playlistSongs)}
          </TableBody>
        </Table>
      </Flexbox>
    </Paper>
    )
  }
}

function mapStateToProps(state) {
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