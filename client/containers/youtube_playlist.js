import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import playVideo from '../actions/videos';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import PlayVid from 'material-ui/svg-icons/av/play-circle-outline';
import Flexbox from 'flexbox-react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  image: {
    width: 150,
    height: 100
  }
};
class YoutubePlaylist extends Component {
	constructor(props) {
		super(props);
		
		this.renderList = this.renderList.bind(this);
	}

  renderList() {  	
   	let videosArray = [];
   	if(this.props.videos.length > 0) {
   		videosArray = this.props.videos[0];
   	}

    return videosArray.map(video => (
       <GridTile
          key={video.id.videoId}
          title={video.snippet.title}
          actionIcon={<IconButton><PlayVid onClick={() => this.props.playVideo(video.id.videoId)} color="white"/></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
          <img src={styles.image} src={video.snippet.thumbnails.default.url} />    
      </GridTile>
    )); 
  }

  render () {
    return (
      <div style={styles.root}>
        <GridList
        cellHeight={100}
        style={styles.gridList}
        cols={2.2}>
	    	  {this.renderList()} 
        </GridList>
      </div>
	  );
  }
}

const mapStateToProps = (state) => {
  return {videos: state.videos, videofyVideos: state.videoPlaylist};  //same as tracks: state.tracks
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ playVideo : playVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylist);