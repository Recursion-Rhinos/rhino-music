import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';
import NYTimesData from './nytimes';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class SearchNews extends Component {
  constructor(props) {
    super(props);
    this.renderNews = this.renderNews.bind(this);
  }

  renderNews(news) {
  let renderedNews = this.props.news  
    .filter((news) => news.multimedia.length > 0) //sorting the news with multimedia
    // .map((img) => img.multimedia[0].url);
  // console.log("renderedNews",renderedNews);
  //  <ul key={ news._id }>

  //news.map((text) => text.headline.main); //Have to fix this one
  return (
    renderedNews.map((el, idx) => { 
      console.log("NYTIMES IMAGES", el)
    return (
      <div 
        key={el.source.concat(idx + Math.random())}
        className="col-md-3"
        > 
        <a href={el.web_url}>
        <img src={`http://nytimes.com/${el.multimedia[0].url}`} width="220" height="160"/> 
        </a>
        {el.headline.main} 
      </div>
     )
   })
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
    <div className="row">
      {console.log('THIS.PROPS.NEWS', this.props, newsData)}
      {newsData.length ? this.renderNews(newsData) : "Loading..."}
    </div>
  );
 }
}

function mapStateToProps(state) {
  // console.log("NYTIMES STATE", state);
  return {news: state.news};
}

export default connect(mapStateToProps, null)(SearchNews);