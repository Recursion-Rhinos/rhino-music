import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playSong } from '../actions/songs';
import { bindActionCreators } from 'redux';

// size may also be a plain string using the presets 'large' or 'compact' 

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    console.log("MUSIC PLAYER",this.props.playSong)
    // this.playSong = this.playSong.bind(this)
  }

  render () {
    console.log("SPOTIFY PLAYER", this.props.playSong)
    // if(!this.props.tracks) {
    //   console.log("....loading");
    // } else if(this.props.track){
    //   let songUri = this.props.tracks[0].uri;
    //   testSong = songUri;	
    // // }
    //  + (this.props.playSong ?  this.props.playSong.currentSong : "no song")
  	let testSong = 'spotify:track:29PKceZYR9ynXLwToCvSOj'
	return (
	<div>
    <p>SONGID: {this.props.playSong ?  this.props.playSong.currentSong : "no song"}</p>
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
//   console.log("dispatch in spotify_player", dispatch)
//   return bindActionCreators({playSong:playSong}, dispatch);
// }

export default connect(mapStateToProps,null)(MusicPlayer)


// "spotify:track:7vFv0yFGMJW3qVXbAd9BK9"
//src={`https://embed.spotify.com/?uri=${props.songUri}`}