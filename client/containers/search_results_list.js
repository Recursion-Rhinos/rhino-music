import React, { Component } from 'react';
import { connect } from 'react-redux';
import playSong from '../actions/songs';
import { bindActionCreators } from 'redux'; //=> Take a look
import axios from 'axios';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import getPlaylistDropdown from '../actions/getPlaylistDropdown';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import BrokenImage from 'material-ui/svg-icons/image/broken-image';

const style = {
  height: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  largeIcon: {
    width: 60,
    height: 60,
    color: "#37474F"
  }
};

class SearchList extends Component {
  constructor(props) {  //no need of it if there is a stateless component
    super(props)
    this.index = 0;
    this.state = {value:'default'};
    this.props.getPlaylistDropdown();
    this.renderAlbums = this.renderAlbums.bind(this); //binding in  a constructor
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
   return this.setState({value});
  }

  renderAlbums(albumId) {
  	let albumsArray = [];
    if(this.props.tracks.length > 0) {
      albumsArray = this.props.tracks[0];
    }
    return (
      albumsArray.map((track) => { 
        return (    
          <TableRow key={Math.random() * 100}>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black',}}><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '28px' }}>{track.artists[0].name}</p></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black',}}><img src={track.images[2] ? track.images[2].url : (<BrokenImage>noImage</BrokenImage>)} /><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{track.name}</p></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}><IconButton style={style.largeIcon}><PlayCircleFilled onClick={() => this.props.playSong(track.uri)}>Play</PlayCircleFilled></IconButton></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}>
              <DropDownMenu id={"playlistDropdown" + track.uri} value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={'default'} primaryText="Choose Playlist" />
                {this.props.playlistDropdown.map((playlist) => (<MenuItem value={playlist.Name} primaryText={playlist.Name} />))}
              </DropDownMenu></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'white',}}><IconButton style={style.largeIcon}><PlaylistAdd style={style.largeIcon} onClick={() => {let p = 'playlistDropdown'+track.uri; saveToPlaylist(this.state.value, {artist:track.artists[0].name, album:track.name, uri:track.uri, image: track.images[2].url})}}>Add to playlist</PlaylistAdd></IconButton></TableRowColumn>
          </TableRow>
        )
      })
    )
  }

  render () { 
    return (
      <Paper style={style} zDepth={5}>
        <Table>
          <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px' }}> Artist </p></TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px' }}>  Album </p></TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px' }}> Play </p></TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px' }}> Playlist Dropdown</p></TableHeaderColumn>
            <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white',}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px' }}> Add to Playlist</p></TableHeaderColumn>
          </TableRow>
            {this.renderAlbums()}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const saveToPlaylist = (playlistName, songData) => {
  if(playlistName !== 'default'){
    let obj = {
      playlistName: playlistName,
      songData: songData
    }
    axios.post('/api/saveSong', {body: obj})
  }
}

const mapStateToProps = (state) => {
  return {tracks: state.tracks, playlistDropdown: state.PlaylistDropdown};  //same as tracks: state.tracks
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({playSong, getPlaylistDropdown}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList); //add mapDispatchToProps to mapStateToProps

