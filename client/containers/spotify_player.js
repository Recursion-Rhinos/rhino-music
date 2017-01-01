import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux'; 

// size may also be a plain string using the presets 'large' or 'compact' 

class MusicPlayer extends Component {

  render () {
  	console.log("MusicPlayer", this.props)
    // if(!this.props.tracks) {
    //   console.log("....loading");
    // } else if(this.props.track){
    //   let songUri = this.props.tracks[0].uri;
    //   testSong = songUri;	
    // }
  	let testSong = "spotify:track:5djD19mDJ1Zph90Rqzsq2O";
	return (
	<div>
	  <iframe 
		  src={`https://embed.spotify.com/?uri=${testSong}`}
		  width="100%" 
		  height="100" 
		  frameBorder="0" 
		  allowTransparency="true">
	  </iframe>
	</div>
    );
  }
}

function mapStateToProps(state) {
  return {tracks: state.tracks};
}

function mapDispatchToProps(dispatch) {
  console.log("dispatch in spotify_player", dispatch)
  return bindActionCreators({playSong:playSong}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)


// "spotify:track:7vFv0yFGMJW3qVXbAd9BK9"
//src={`https://embed.spotify.com/?uri=${props.songUri}`}