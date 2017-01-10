import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playVideo } from '../actions/videos';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { videoPlaylist } from '../actions/videoPlaylist';
import  getDropDown  from '../actions/playlistDropdown';


class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.playlist= [];
     let vidList = [];
    this.componentWillMount = this.componentWillMount.bind(this);
  }

componentWillMount() {
    this.props.getDropDown();
  }
  
componentDidReceiveProps(nextProps) {
  this.forceUpdate();
}

render () { 

  console.log("THIS IS THE DROP DOWN THE PLAYLISTS", this.props.dropdown)
let vidList = [];
let firstVid;
let videoIds;
let autoplay;
if(this.props.playVideo) {
  autoplay = this.props.playVideo+"?autoplay=1";
}

console.log("PLAYAAAAAA", this.props.videofyVideos);

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

if(this.props.videofyVideos) {
  videoIds = this.props.videofyVideos;
  console.log("VIDEO LIST", vidList)
  firstVid = videoIds.shift()
  console.log("THIS IS THE FIRST VID", firstVid)
  };

  console.log("THIS IS THE VIDEO LIST OF IDs", videoIds);
        
  return (
      <div className="video-detail col-md-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.playVideo ? autoplay : `https://www.youtube.com/v/${firstVid}?&playlist=${videoIds}&autoplay=1`}></iframe>
        </div>
        <div className="details">
          <div></div>
        <div><select id={'playlistDropdown'}><option value='default'>Pick a Playlist</option>{this.props.dropdown.map(function(playlist){
              return(<option value={playlist.Name}>{playlist.Name}</option>)
            })}></select></div>
        <div><button onClick={() => {let p = 'playlistDropdown'; this.props.videoPlaylist(document.getElementById(p).value)}}>Videofy</button></div>  
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {playVideo: state.playVideo, videos: state.videos, dropdown: state.dropdown, videofyVideos: state.videoPlaylist}; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDropDown, videoPlaylist }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoPlayer)