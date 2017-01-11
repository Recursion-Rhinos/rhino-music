import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylists } from '../../actions/playlists';
import { getEvents } from '../../actions/profileEvents';
import {Link} from 'react-router';
import Navigation from '../navigation';
import UserFavourites from './userFavourites';
import UserMenu from './userMenu';
import UserSettigns from './userSettings';

export default class Profile extends Component {	
  render() {
    return (
      <div>
        <Navigation />
        <UserMenu />
        <UserSettigns />
        <UserFavourites />           
      </div>
    );
  }
}
