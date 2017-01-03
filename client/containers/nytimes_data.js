import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';


const nyTimesData = () => {
  console.log('nyTimesData => this.props', this.props)

  return (
    <div>
     Hello 
    <div>
  )
}

function mapStateToProps(state) {
  console.log('nyTimesData', state)
  return bindActionCreators({news: state.news});
}

export default connect(mapStateToProps)(nyTimesData)