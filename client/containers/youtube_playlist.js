import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playVideo } from '../actions/videos';


class YoutubePlaylist extends Component {
	constructor(props) {
		super(props);
		
		this.renderList = this.renderList.bind(this);
	}

   renderList() {
   	
   	console.log('THIS DA VID PROP. DUDE: ', this.props.videos);
   	let videosArray = [];
   	if(this.props.videos.length > 0) {
   		videosArray = this.props.videos[0];
   	}

   	// let videoId = vids.map((video) => video.id.videoId)

   	// const videoThumbnail = vids
   	// .map((image) => image.snippet.thumbnails.default.url)
   	// .map((thumbnail, idx) => (<img key={videoId.concat(idx + 1)} src={thumbnail} />));

   	// const title = vids
   	// .map((name) => name.snippet.title)
   	// .map((titles) => titles)
   	console.log('THIS DA VIDEOZZZZZZZ: ', videosArray);

   return (
	videosArray.map((video) => {
	return (
   	<li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
		)
	})
    	)
  
  }

render () {
  return (
	    <ul className="list-group col-sm-4">
	    	{this.renderList()}
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