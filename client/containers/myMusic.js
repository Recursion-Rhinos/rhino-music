import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../actions/playlists.js';

class UserPlaylists extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(playlists) {
    return playlists.map((playlist) => {
      console.log("myMusic.js playlist: ", playlist);
      return (
        <li>
          {playlist.name}
        </li>
      )
    }) 
  }

  render() {
    return (
      <ul className="list-grou[ col-md-4">
        {this.renderList(this.props.playlists)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {playlists: state.playlists};
}

export default connect(mapStateToProps, null)(UserPlaylists)