import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

// size may also be a plain string using the presets 'large' or 'compact' 

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="bottom-align">
    <iframe
  		  src={`https://embed.spotify.com/?uri=${this.props.playSong}`}
  		  width="100%" 
  		  height="100" 
  		  frameBorder="0" 
  		  allowTransparency="true">
  	  </iframe>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {playSong: state.playSong}; 
}

export default connect(mapStateToProps,null)(MusicPlayer)


// "spotify:track:7vFv0yFGMJW3qVXbAd9BK9"
//src={`https://embed.spotify.com/?uri=${props.songUri}`}