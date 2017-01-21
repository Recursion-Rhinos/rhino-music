import React, { Component } from 'react'
import { connect } from 'react-redux';
import playVideo from '../actions/videos';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import videoPlaylist from '../actions/videoPlaylist';
import getDropDown  from '../actions/playlistDropdown';
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export const red400 = '#ef5350';
const style = {
  margin: 12,
  flex: {flexDirection:"column-reverse", alignItems: "center"},
  button: { backgroundColor:"#ef5350"},
  innerFlex: {alignItems: "space-between"},
  height: {height: '50px', lineHeight: '50px'}
};

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.playlist= [];
    this.flag=false;
    this.state = {value:'default'};
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
      this.props.getDropDown();
    }
    
  componentDidReceiveProps(nextProps) {
    this.forceUpdate();
  }

  handleChange(event, index, value) {
     return this.setState({value});
    }

  render () { 

  let vidList = [];
  let videoIds;
  let vidIds;
  let autoplay;
  let playlist =[];
  let firstVid;

  if(this.props.playVideo) {

    autoplay = this.props.playVideo+"?autoplay=1";

    firstVid = this.props.playVideo;

  }

  if(this.props.videos.length > 0 && !this.flag) {
    vidList = this.props.videos[0];

    vidIds = vidList.map((video) => {
      return video.id.videoId;
    });

    playlist = vidIds;

    firstVid = playlist.shift()

  }


  else if(this.props.videofyVideos && this.flag) {
    playlist = this.props.videofyVideos;

    firstVid = playlist.shift()
    
  } 
        
  return (
    <Flexbox style={style.flex}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.playVideo ? autoplay : `https://www.youtube.com/v/${firstVid}?&playlist=${playlist}&autoplay=1`}></iframe>
        </div>
        <div className="details">
          <div> </div>
     <Flexbox>
        <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value='default' primaryText="Choose Playlist"/>
            {this.props.dropdown.map((playlistDD) =>(<MenuItem value={playlistDD.Name} primaryText={playlistDD.Name} />))}
          </DropDownMenu>
        </div>
        <RaisedButton style={style.height} label="V I D E O F Y" toolTip="TURN YOUR PLAYLIST OF SONGS INTO A PLAYLIST OF VIDEOS" color="white" backgroundColor='#d32f2f' onClick={() => { this.flag = true; if(this.state.value !== 'default'){this.props.videoPlaylist(this.state.value)} }}/> 
      </Flexbox>
      </div>
    </Flexbox>
    )
  }
}

const mapStateToProps = (state) => {
  return {playVideo: state.playVideo, videos: state.videos, dropdown: state.dropdown, videofyVideos: state.videoPlaylist}; 
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDropDown, videoPlaylist }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoPlayer)