import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';


class nyTimesData extends Component {
 constructor(props) {
  super(props);
  console.log("NYTIMESDATA", this.props)
 }


render () {
 console.log('nyTimesData => this.props', this.props);
  return (
    <div>
     Hello 
    </div>
  )
 }
}

//JOHN, CAN YOU TAKE A LOOK PLEASE
function mapStateToProps(state) {
  console.log('nyTimesData', state)
  return {news: state.news};
}

export default connect(mapStateToProps)(nyTimesData)