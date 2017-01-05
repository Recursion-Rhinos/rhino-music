import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlists.js';

class PlaylistSongs extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(songs) {
    return songs.map((song) => {
      console.log('playlistSongs Container Song: ', song);
      return (
        <li key={song.id}>
        {song.Name}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList(this.props.playlistSongs)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {playlistSongs: state.playlistSongs}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylistSongs }, dispatch);
}

export default connect(mapStateToProps, null)(PlaylistSongs);