import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';

class SearchNews extends Component {
  constructor(props) {
    super(props);
    console.log("NYTimes props =>", this.props);
  }	

render () {

  return (
    <div>

    </div>
  );
 }
}

function mapStateToProps(state) {
  console.log("NYTIMES STATE", state);
  return {news: state.news};
}

export default connect(mapStateToProps, null)(SearchNews);