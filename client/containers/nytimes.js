import  React, { Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchNews } from '../actions/news_nytimes';
import NYTimesData from './nytimes';
import CircularProgress from 'material-ui/CircularProgress';
import Flexbox from 'flexbox-react';
import Launch from 'material-ui/svg-icons/action/launch';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {

  flex: {
    flexFlow: "row wrap"
  }
};


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
  <Flexbox flexWrap="wrap" justifyContent="space-between" justifyContent="space-around" padding-bottom="20px">
   { renderedNews.map((el, idx) => { 
    return (
      <div 
        key={el.source.concat(idx + Math.random())}
        > 
       
  
        <CardMedia
        backgroundColor={"#673AB7"}
      overlay={<CardTitle title={ <a href={el.web_url}>

          <Launch style={{float: "right", width: 60, height: 60, color:"white"}}/>
        </a>} subtitle={el.headline.main} />}
      >

        <img src={`http://nytimes.com/${el.multimedia[1].url}`} width="300" height="350" /> 
    </CardMedia>
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
    <Card backgroundColor={"#673AB7"} zDepth={6} >
<CardMedia
      title="NEWS"
      subtitle="Search, collect, and review artist related news."
    >
    </CardMedia>
      {console.log('THIS.PROPS.NEWS', this.props, newsData)}
      {newsData.length ? this.renderNews(newsData) : <CircularProgress size={60} thickness={5} />}
    </Card>
  );
 }
}

function mapStateToProps(state) {
  // console.log("NYTIMES STATE", state);
  return {news: state.news};
}

export default connect(mapStateToProps, null)(SearchNews);