import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import fetchSongs from '../actions/index';
import playSong from '../actions/songs';
import fetchNews from '../actions/news_nytimes';
import fetchEvents from '../actions/events';
import { bindActionCreators } from 'redux';
import getPlaylists from '../actions/playlists';
import AppBar from 'material-ui/AppBar';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Dashboard from 'material-ui/svg-icons/av/queue-music';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Logout from '../actions/logout.js';
import GetUser from '../actions/currentUser.js';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": "#512DA8"
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
    this.props.GetUser();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

 render() {
   return (
     <AppBar
      style={styles.bar}
      title="Rhino Music"
      titleStyle={{ color: 'white', fontFamily: 'Bungee Shade, cursive', fontSize: '60px' }}
      iconElementLeft={<div> <Dashboard style={styles.largeIcon} onTouchTap={this.handleToggle}/> <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}> 
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/"/>}>Search</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/MyMusic"/>} >My Music</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/profile"/>} >Profile</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Events"/>} >Events</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Youtube"/>} >Videos</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/News"/>} >News</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/About"/>} >About</MenuItem>
          <MenuItem><a style={{color:'black'}} href='/logout'>Logout</a></MenuItem>
        </Drawer></div>}
      onTitleTouchTap = {()=> {hashHistory.push("/")}}
      iconElementRight={<div style={{color:'white', 'padding-right': '10px', 'padding-top': '15px'}}> <p style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '30px'}}>Take Charge, {this.props.user.username}!</p></div>}
    />
  )
 }
}

const mapStateToProps = (state) => {	
  return {
  	news: state.news,
  	tracks: state.tracks,
  	playSong: state.playSong,
    events: state.events,
    getPlaylists: state.playlists, 
    user: state.userInfo
  }; 
}

export default connect(mapStateToProps, { getPlaylists, Logout, GetUser })(Navigation);