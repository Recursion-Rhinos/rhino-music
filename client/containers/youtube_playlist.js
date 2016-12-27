import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs } from '../actions/index';


class YoutubePlaylist extends Component {
	constructor(props) {
		super(props);
		
		this.state = {searchTerm: ''};
	}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(YoutubePlaylist);