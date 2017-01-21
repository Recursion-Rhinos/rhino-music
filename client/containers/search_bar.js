import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchSongs  from '../actions/index';
import fetchNews from '../actions/news_nytimes';
import fetchVideos  from '../actions/youtube.js';
import  fetchEvents  from '../actions/events';
// import Redux from 'react-redux';
// console.log("REDUX", {connect});
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import Search from 'material-ui/svg-icons/action/search';

const style = {
  height: "auto",
  width: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  form: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  button: {
    // margin: 12,
    // backgroundColor: "#D8C2FF"
    backgroundColor: "#B7B13A"
  },
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchVideos(this.state.term);
    // this.props.fetchEvents(this.state.term);
    this.props.fetchNews(this.state.term);
    this.props.fetchEvents(this.state.term);
    //we need to go fetch data
    this.props.fetchSongs(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
    <form style={style.form} onSubmit={this.onFormSubmit} className="input-group">
      <input 
        placeholder="search for artist or album"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button style={style.button} >
        <FlatButton
          label="Search"
          icon={<Search />}
        />
        </button>
      </span>
    </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSongs, fetchNews, fetchEvents, fetchVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
