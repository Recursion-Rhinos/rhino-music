import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playVideo } from '../actions/videos';
import { bindActionCreators } from 'redux';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  
  }

render () { 
console.log("HEEEEEEEEEEY", this.props.playVideo)
  return (
      <div className="video-detail col-md-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.playVideo} ></iframe>
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
  return {playVideo: state.playVideo}; 
}


export default connect(mapStateToProps,null)(VideoPlayer)