import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylistSongs } from '../actions/playlists.js';

class PlaylistSongs extends Component {
  constructor(props) {
    super(props) {

    }
  }

  renderList(songs) {
    return 
  }

  render() {
    return (
      <ul className="list-grou col-md-4">
        {this.renderList(this.props.playlistSongs)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {playlistSongs: state.}
}