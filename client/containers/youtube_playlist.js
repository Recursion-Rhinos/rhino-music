import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playVideo } from '../actions/videos';
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
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  image: {
    width: 480,
    height: 360
  }
};

class YoutubePlaylist extends Component {
	constructor(props) {
		super(props);
		
		this.renderList = this.renderList.bind(this);
	}


   renderList() {
   	
   	// console.log('THIS DA VID PROP. DUDE: ', this.props.videos);
   	let videosArray = [];
   	if(this.props.videos.length > 0) {
   		videosArray = this.props.videos[0];
   	}


   	// console.log('THIS DA VIDEOZZZZZZZ: ', videosArray);

    return videosArray.map(video => (
    <GridTile
          key={video.id.videoId}
          title={video.snippet.title}
          actionIcon={<IconButton><PlayVid onClick={() => this.props.playVideo(video.id.videoId)} color="white" /> </IconButton>}
        >
  
          <img style={styles.image} src={video.snippet.thumbnails.high.url} />

    </GridTile>
    ));
  
  }

render () {
  return (
<Flexbox>
  <GridList
      cellHeight={180}
      style={styles.gridList}
    >
	    <div className="row">
	    	{this.renderList()}
	    </div>
    </GridList>
</Flexbox>
	  );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos, videofyVideos: state.videoPlaylist};  //same as tracks: state.tracks
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playVideo : playVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylist);