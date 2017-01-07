import React, {Component} from 'react';
import {Link} from 'react-router';
import UserFavourites from './userInformation';
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