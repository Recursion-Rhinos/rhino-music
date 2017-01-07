import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }	

//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
    return (
      <div>
       <img src={"http://www.musicfilmweb.com/wp-content/uploads/2011/07/dktr-rhino.jpg"}/>
       <p>Search</p>
       <p>Videos</p>
       <p>Events</p>
       <p>News</p>
       <p>Logout</p>
      {console.log("PROPS", this.props)}
      </div>
    );
  }
}
