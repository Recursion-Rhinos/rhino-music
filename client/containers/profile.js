import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Profile extends Component {
//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
    return (
      <div>
      hello I AM YOUR PROFILE
      {console.log(this.props)}
      </div>
    );
  }
}

// function mapStateToProps(state) {
  
// }