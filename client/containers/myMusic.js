import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlistSongs.js';
import { renderPlaylistSongs } from '../actions/renderPlaylist.js';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

console.log("GET PLAYLIST SONGS", getPlaylistSongs)
class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(playlists) {
    console.log('PLATLISTS!!!!!!!!!!!!!: ', playlists)
    return playlists.map((playlist) => {
      //console.log("myMusic.js playlist: ", playlist);
      return (
        <tr key={playlist.id} onClick={() => renderPlaylistSongs(this.props.getPlaylistSongs(playlist.Name))}>
          <td>{playlist.Name}</td>
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
      <table>
       {this.renderList(this.props.playlists)}
      </table>
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
  return {playlists: state.playlists, getPlaylistSongs: state.playlistSongs};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylistSongs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);