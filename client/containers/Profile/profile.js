import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getPlaylists } from '../../actions/playlists';
// import { getEvents } from '../../actions/profileEvents';
// import {Link} from 'react-router';
import Navigation from '../navigation';
import UserFavourites from './userFavourites';
import UserEvents from './userEvents'
import UserMenu from './userMenu';
import UserSettings from './userSettings';

const components = {
  settings: <UserSettings />,
  playlists: <UserFavourites />,
  events: <UserEvents />
};

class Profile extends Component {	
  render() {
    return (
      <div>
        <Navigation />
        <UserMenu />
        {components[this.props.selected] || 'NONE'}          
      </div>
    );
  }
}

export default connect((state) => ({
  selected: state.selected
}))(Profile);