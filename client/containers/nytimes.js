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
//src={`https://embed.spotify.com/?uri=${props.songUri}`}
  renderNews(news) {
  console.log("RENDERNEWS", this.props)
  console.log("NEWS", news);
// let renderedNews
    // if(this.props.news !== undefined) {
    let renderedNews = this.props.news  
    .filter((news) => news.multimedia.length > 1) //sorting the news with multimedia
    .map((el) => el.multimedia[0].url)
    // .map((url, idx) => url);
  // }
    // .filter((image) => image[0].url);

  console.log("renderedNews",renderedNews)
  //  <img src={`http://nytimes.com/${renderNews}`} />
  //  <ul key={ news._id }>
  return (
   <ul key={ news._id }>
     <li>     
       <img src={`http://nytimes.com/${renderedNews[0]}`} />
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
      <ul className="col-md-4 list-group">
        {console.log('THIS.PROPS.NEWS', this.props, newsData)}
        {newsData.length ? newsData.map(this.renderNews) : "Loading..."}
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