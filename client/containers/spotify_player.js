import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { playSong } from '../actions/songs';
// size may also be a plain string using the presets 'large' or 'compact' 

class MusicPlayer extends Component {

  render () {
  	console.log("spotify_player", playSong)
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
	console.log("state in  spotify_player",state);
	console.log("spotify_player state.playSong", state.playSong);

  return {playSong: state.playSong};
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({playSong:playSong}, dispatch);
// }

export default connect(mapStateToProps)(MusicPlayer)


// "spotify:track:7vFv0yFGMJW3qVXbAd9BK9"
//src={`https://embed.spotify.com/?uri=${props.songUri}`}