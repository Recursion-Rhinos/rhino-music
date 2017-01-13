import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';
import NYTimesData from './nytimes';
import CircularProgress from 'material-ui/CircularProgress';
import Flexbox from 'flexbox-react';

const style = {

  flex: {
    flexFlow: "row wrap"
  }

}

class SearchNews extends Component {
  constructor(props) {
    super(props);
    // console.log("NYTimes props =>", this.props);
    this.renderNews = this.renderNews.bind(this);
  }

  renderNews(news) {

  // console.log("RENDERNEWS", this.props)
  // console.log("NEWS", news);
  let renderedNews = this.props.news  
    .filter((news) => news.multimedia.length > 1) //sorting the news with multimedia
    // .map((img) => img.multimedia[0].url);
  // console.log("renderedNews",renderedNews);
  //  <ul key={ news._id }>

  //news.map((text) => text.headline.main); //Have to fix this one
  return (
  <Flexbox flexWrap="wrap" justifyContent="space-around">
   { renderedNews.map((el, idx) => { 
    return (
      <div 
        key={el.source.concat(idx + Math.random())}
        > 
        <a href={el.web_url}>
        <img src={`http://nytimes.com/${el.multimedia[1].url}`} width="300" height="250"/> 
        </a>
        <div style={{'line-height': '20px', width: "190", 'padding-bottom': '10px'}}>{el.headline.main}</div>
      </div>
     )
   }) }
  </Flexbox>
  )
}

render () {
  let newsData = [];
  if(this.props.news.length === 0) {
    // console.log("NO NEWS")
  } else {
    newsData = this.props.news; 
    // console.log("newsData", newsData)
  }
  
  return (
    <div>
      {console.log('THIS.PROPS.NEWS', this.props, newsData)}
      {newsData.length ? this.renderNews(newsData) : <CircularProgress size={60} thickness={5} />}
    </div>
  );
 }
}

function mapStateToProps(state) {
  // console.log("NYTIMES STATE", state);
  return {news: state.news};
}

export default connect(mapStateToProps, null)(SearchNews);