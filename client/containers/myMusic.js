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
        <li key={playlist.id} >
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
  return {playlists: state.playlists};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaylists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists)