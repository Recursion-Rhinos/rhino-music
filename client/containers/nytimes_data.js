import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import fetchNews from '../actions/news_nytimes';


class nyTimesData extends Component {
 constructor(props) {
  super(props);
 }


render () {
  return (
    <div>
      <h1>Hello</h1> 
    </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {news: state.news};
}

export default connect(mapStateToProps)(nyTimesData)