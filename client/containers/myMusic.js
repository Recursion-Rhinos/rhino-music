import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlistSongs.js';

console.log("GET PLAYLIST SONGS", getPlaylistSongs)
class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(playlists) {
    return playlists.map((playlist) => {
      console.log("myMusic.js playlist: ", playlist);
      return (
        <li key={playlist.id} onClick={() => this.props.getPlaylistSongs(playlist.Name)}>
          {playlist.Name}
        </li>
      )
    }) 
  }

  render() {
    console.log('USER PLAYLIST PROPS: ', this.props)
    return (
      <ul className="list-group col-md-4">
        {this.renderList(this.props.playlists)}
      </ul>
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