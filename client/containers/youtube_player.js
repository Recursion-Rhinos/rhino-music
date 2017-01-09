import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playVideo } from '../actions/videos';
import { bindActionCreators } from 'redux';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  
  }

render () { 
let vidList = [];
let firstVid;
let videoIds;
let autoplay;
if(this.props.playVideo) {
  autoplay = this.props.playVideo+"?autoplay=1";
}

console.log("PLAYAAAAAA", this.props.videos[0]);

if(this.props.videos.length > 0) {
  vidList = this.props.videos[0];
  console.log("VIDEO LIST", vidList)
  firstVid = vidList.shift().id.videoId
  console.log("FIRST VIDEO", firstVid)

  videoIds = vidList.map((video) => {
    return video.id.videoId;
  });

  console.log("THIS IS THE VIDEO LIST OF IDs", videoIds);
  
}

  return (
      <div className="video-detail col-md-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.playVideo ? autoplay : `https://www.youtube.com/v/${firstVid}?&playlist=${videoIds}&autoplay=1`}></iframe>
        </div>
        <div className="details">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {playVideo: state.playVideo, videos: state.videos}; 
}


export default connect(mapStateToProps,null)(VideoPlayer)