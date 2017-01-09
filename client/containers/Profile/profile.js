import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylists } from '../../actions/playlists';
import { getEvents } from '../../actions/profileEvents';
import {Link} from 'react-router';
import UserFavourites from './userFavourites';
import UserMenu from './userMenu';

export default class Home extends Component {	
  render() {
    return (
      <div>
        <UserMenu />
        <UserFavourites />           
      </div>
    );
  }
}
