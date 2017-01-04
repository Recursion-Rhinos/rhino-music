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
  console.log("RENDERNEWS", this.props)
  console.log("NEWS", news);
  let renderedNews = this.props.news  
    .filter((news) => news.multimedia.length > 0) //sorting the news with multimedia
    // .map((img) => img.multimedia[0].url);
  console.log("renderedNews",renderedNews);
  //  <ul key={ news._id }>

  //news.map((text) => text.headline.main); //Have to fix this one
  return (
    renderedNews.map((el, idx) => { 
    return (
      <ul class="row" key={el.source.concat(idx + Math.random()) }>
        <li class="col-xs-6 col-md-2 col-md-offset-1">     
        <img class="img-responsive" src={`http://nytimes.com/${el.multimedia[0].url}`}/> 
        </li>
        { el.headline.main} 
      </ul>
     )
   })
  )
}

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
      <ul className="col-md-4 list-group">
        {console.log('THIS.PROPS.NEWS', this.props, newsData)}
        {newsData.length ? this.renderNews(newsData) : "Loading..."}
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