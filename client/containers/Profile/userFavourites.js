import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllPlaylists  from '../../actions/getPlaylists';
import { getEvents } from '../../actions/profileEvents';

class Favourites extends Component {
  constructor(props) {
    super(props)
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.getAllPlaylists();
  //   // console.log("This would be a good time to call action creator to fetch and render playlists");
  //   console.log("componentWillMount this.props =>", Promise.resolve(this.playlists))
  //   this.props.getAllPlaylists()
  //   .then((data) => {
  //     console.log("DATA IN PROPMISEEEEEEE DUDE", data)
  //     if(data) {
  //       this.playlists = data.payload.data; 
  //       console.log("PLAYLISTS IN PROMISE", this.playlists)
  //     }
  //   });
  }

  render () {
    console.log("SVETDaVeT Playlist", this.props.playlists);
    
    return (
      <div>
        <h1>Playlists</h1> 
        <p></p>
        <h1>Events</h1>	
      </div>    
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE IN FAVOURITES", state);
  return {
    events: state.events,
    playlists: state.getAllPlaylists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPlaylists, getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);


