import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Profile extends Component {
  constructor(props) {
    super(props);
     this.state = {open: false};
  }	

   handleToggle = () => this.setState({open: !this.state.open});


//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
    return (
      <div>
      <RaisedButton
        label="Toggle Drawer"
        onTouchTap={this.handleToggle}
      />
      <Drawer open={this.state.open}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Playlists</MenuItem>
        <MenuItem>Events</MenuItem>
        <MenuItem>Videos</MenuItem>
        <MenuItem>News</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Drawer>
      </div>
    );
  }
}


