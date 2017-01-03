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

  	return this.props.vids.map((videos) => {
  		return (
  			 	<li>
      {videoThumbnail}
    </li>
  		)
  	})

   	const videoThumbnail = vids
   	.map((image) => image.snippet.thumbnails.default.url)
   	.map((thumbnail, idx) => (<img key={idx} src={thumbnail} />));

  
  }

render () {
  return (
	    <ul className="list-group col-sm-4">

	    </ul>

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