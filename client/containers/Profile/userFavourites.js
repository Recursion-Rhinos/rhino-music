import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylists } from '../../actions/playlists';
import { getEvents } from '../../actions/profileEvents';

class Favourites extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log("This would be a good time to call action creator to fetch and render playlists");
    console.log("componentWillMount this.props =>", this.props.getPlaylists())
  }

  render () {
    let returnedData;
    let playlists = this.props.getPlaylists()
    .then((data) => {
      console.log("PROMISE WITH RETURNED DATA", data);
      returnedData = data;
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
    console.log("ALL PLAYLIST IN PROFILE", playlists)
    
    
    return (
      <div>
        <h1>Playlists</h1> 
        <p></p>
        <h1>Events</h1>	
      </div>    
    );
  }
}

// function mapStateToProps(state) {
//   console.log("STATE IN FAVOURITES", state);
//   return {
//     events: state.events,
//     playlists: state.playlists
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylists, getEvents }, dispatch);
}

export default connect(null, mapDispatchToProps)(Favourites);


