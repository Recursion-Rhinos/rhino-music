import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { playVideo } from '../actions/songs';
import { bindActionCreators } from 'redux';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    

  }

  render () {


}

  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{}</div>
          <div>{}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {playVideo: state.playVideo}; 
}
// function mapDispatchToProps(dispatch) {
//   console.log("dispatch in spotify_player", dispatch)
//   return bindActionCreators({playSong:playSong}, dispatch);
// }

export default connect(mapStateToProps,null)(VideoPlayer)