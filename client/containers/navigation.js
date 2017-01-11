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
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": teal900,
    backgroundColor: teal900
  },
  largeIcon: {
    width: 60,
    height: 60,
    color: "white"
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
 
    this.state = {open: false};
  }

handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

 render() {
 	// console.log("NAVIGATION2", this.props)
  // console.log("Container")
  // let profile = <a href="/profile"></a>
   return (

    <AppBar
     style={styles.bar}
      title="Rhino Music"
      titleStyle={styles.largeIcon}
      iconElementLeft={<div> <Dashboard style={styles.largeIcon} onTouchTap={this.handleToggle}/> <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}> 
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/MyMusic"/>}>My Music</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/profile"/>} >Profile</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Events"/>} >Events</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Youtube"/>} >Videos</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/News"/>} >News</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Login</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Logout</MenuItem>
        </Drawer> </div>}
      onTitleTouchTap = {()=> {hashHistory.push("/")}}
      iconElementRight = {
       <div>
       
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