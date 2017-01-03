import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playVideo } from '../actions/videos';


class YoutubePlaylist extends Component {
	constructor(props) {
		super(props);
		
		this.renderList = this.renderList.bind(this);
	}

   renderList(vids) {

   	console.log("RENDER LIST VIDEOSSS", vids)



   return (

   		<li>
   			tktk
    	</li>

    	)
  
  }

render () {
  return (
  	<div>
  	<h1> Video Playlist </h1>
	    <ul className="list-group col-sm-4">
	    	{this.props.videos.map(this.renderList)}
	    </ul>
	</div>
	  );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos};  //same as tracks: state.tracks
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playVideo : playVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylist);