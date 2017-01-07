import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';
import { playSong } from '../actions/songs';
import { fetchNews } from '../actions/news_nytimes';
import { fetchEvents } from '../actions/events';
import { bindActionCreators } from 'redux';
import nyTimesData  from '../containers/nytimes_data';
import getPlaylists from '../actions/playlists';
import AppBar from 'material-ui/AppBar';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": teal900,
    backgroundColor: teal900
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

 render() {
 	console.log("NAVIGATION2", this.props)
  console.log("Container", nyTimesData)
  // let profile = <a href="/profile"></a>
   return (
    <AppBar
     style={styles.bar}
      title="Rhino Music"
      iconElementRight = {
       <div>
       <Tabs style={styles.bar}>
          <Tab style={styles.bar} label="My Playlists" value={0} onClick={() => {console.log("MY MUSIC PLAYLISTS"); this.props.getPlaylists()}}/>
          <Tab style={styles.bar} label="Events" value={1} onClick={() => console.log("EVENTS EVENTS EVENTS")}/>
          <Tab style={styles.bar} label="Videos" onClick={() => console.log("VIDEOS VIDEOS VIDEOS")}/>
          <Tab style={styles.bar} label="News" onClick={() => console.log("NEWS NEWS NEWS")}/>
        </Tabs>
         <SwipeableViews
          style={styles.bar}
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
        <div></div>
       // <button onClick={() => console.log("EVENTS EVENTS EVENTS")}>Events</button>  
       // <button onClick={() => console.log("VIDEOS VIDEOS VIDEOS")}>Videos</button>
       // <button onClick={() => console.log("NEWS NEWS NEWS")}>News</button>
       // <button onClick={() => {console.log("MY MUSIC PLAYLISTS"); this.props.getPlaylists()}}>My Playlists</button>   
       // <button>Profile</button>
       // <button>Logout</button>
       </SwipeableViews>
       </div>
     }
    />

  )
 }
}

function mapStateToProps(state) {	
  return {
  	news: state.news,
  	tracks: state.tracks,
  	playSong: state.playSong,
    events: state.events,
    getPlaylists: state.playlists
  }; 

}

export default connect(mapStateToProps, { getPlaylists })(Navigation);