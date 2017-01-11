import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';
import { playSong } from '../actions/songs';
import { fetchNews } from '../actions/news_nytimes';
import { fetchEvents } from '../actions/events';
import { bindActionCreators } from 'redux';
import getPlaylists from '../actions/playlists';
import AppBar from 'material-ui/AppBar';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Dashboard from 'material-ui/svg-icons/action/dashboard';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": teal900,
    backgroundColor: teal900
  },
  largeIcon: {
    width: 60,
    height: 60,
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
  console.log("Container")
  // let profile = <a href="/profile"></a>
   return (

    <AppBar
     style={styles.bar}
      title="Rhino Music"
      iconElementLeft={<IconButton style> <Dashboard /> </IconButton>}
      onTitleTouchTap = {()=> {hashHistory.push("/")}}
      iconElementRight = {
       <div>
       <Tabs style={styles.bar}>
          <Tab style={styles.bar} label="Playlists" value={0} containerElement={<Link to="/MyMusic"/>} />
          <Tab style={styles.bar} label="Events" value={1} containerElement={<Link to="/Events"/>}/>
          <Tab style={styles.bar} label="Videos" containerElement={<Link to="/Youtube"/>}/>
          <Tab style={styles.bar} label="News" containerElement={<Link to="/News"/>}/>
          <Tab style={styles.bar} label="Profile" containerElement={<Link to="/profile"/>}/>
        </Tabs>
         <SwipeableViews
          style={styles.bar}
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
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