import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';
import NYTimesData from './nytimes';

class SearchNews extends Component {
  constructor(props) {
    super(props);
    console.log("NYTimes props =>", this.props);
    this.renderNews = this.renderNews.bind(this);
  }	

  renderNews(news) {
  console.log("NEWS", this.news)
  return (
   <ul key={ news._id }>
     <li>
      { news.headline.main }
     </li>
   </ul>
  )
}
//this.props.news[0].response.docs
render () {
  let newsData = [];
  if(this.props.news.length === 0) {
  	console.log("NO NEWS")
  } else {
    newsData = this.props.news;	
    console.log("newsData", newsData)
  }
  
 
  return (
    <div>
      <ul>
        {console.log('THIS.PROPS.NEWS', this.props, newsData)}
        {newsData.length ? newsData.map(this.renderNews) : "Fetching some Data"}
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