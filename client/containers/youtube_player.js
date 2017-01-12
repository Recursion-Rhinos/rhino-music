import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playVideo } from '../actions/videos';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { videoPlaylist } from '../actions/videoPlaylist';
import  getDropDown  from '../actions/playlistDropdown';
import Flexbox from 'flexbox-react';

const styles = {



}

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.playlist= [];
    this.flag=false;
    this.componentWillMount = this.componentWillMount.bind(this);
  }

componentWillMount() {
    this.props.getDropDown();
  }
  
componentDidReceiveProps(nextProps) {
  // console.log('NEXT PROPS: ', nextProps)
  this.forceUpdate();
}

render () { 

let vidList = [];
let videoIds;
let vidIds;
let autoplay;
let playlist =[];

if(this.props.playVideo) {
  autoplay = this.props.playVideo+"?autoplay=1";
}

// console.log("PLAYAAAAAA", this.props.videos[0]);

if(this.props.videos.length > 0 && !this.flag) {
  vidList = this.props.videos[0];

  vidIds = vidList.map((video) => {
    return video.id.videoId;
  });

  playlist = vidIds;
  // console.log("THIS IS THE VIDEO LIST OF IDs", playlist);
}


else if(this.props.videofyVideos && this.flag) {
  playlist = this.props.videofyVideos;

  
  // console.log("THIS IS THE FIRST VID", playlist[0])
  };

  // console.log("THIS IS THE VIDEOfy LIST OF IDs", playlist);
        
  return (
    <Flexbox>
      <div className="video-detail col-md-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.playVideo ? autoplay : `https://www.youtube.com/v/${playlist.shift()}?&playlist=${playlist}&autoplay=1`}></iframe>
        </div>
        <div className="details">
          <div></div>
        <div><select id={'playlistDropdown'}><option value='default'>Pick a Playlist</option>{this.props.dropdown.map(function(playlistDD){
              return(<option value={playlistDD.Name}>{playlistDD.Name}</option>)
            })}></select></div>
        <div><button onClick={() => { this.flag = true; this.props.playVideo = false; let p = 'playlistDropdown'; this.props.videoPlaylist(document.getElementById(p).value)}}>Videofy</button></div>  
        </div>
      </div>
    </Flexbox>
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