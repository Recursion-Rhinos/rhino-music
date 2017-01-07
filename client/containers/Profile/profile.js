import React, {Component} from 'react';
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