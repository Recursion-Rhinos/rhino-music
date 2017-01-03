import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';
import NYTimesData from './nytimes';

class SearchNews extends Component {
  constructor(props) {
    super(props);
    console.log("NYTimes props =>", this.props);
  }	

  renderNews(news) {
  console.log("NEWS", news)
  return (
   <ul>
     <li>
    
     </li>
   </ul>
  )
}
//this.props.news[0].response.docs
render () {
  if(this.props.news.length === 0) {
  	console.log("NO NEWS")
  } else {
    let newsData = this.props.news.pop();	
    console.log("newsData", newsData)
  }
  
 
  return (
    <div>
      <ul>
        {console.log('THIS.PROPS.NEWS',this.props)}
        {"Fetching some Data"|| newsData.response.docs.map(this.renderNews)}
      </ul>
    </div>
  );
 }
}

function mapStateToProps(state) {
  console.log("NYTIMES STATE", state);
  return {news: state.news};
}

export default connect(mapStateToProps, null)(SearchNews);