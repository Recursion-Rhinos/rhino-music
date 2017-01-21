import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import Paper from 'material-ui/Paper';
import Flexbox from 'flexbox-react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import IconButton from 'material-ui/IconButton';
import ListItem from 'material-ui/List/ListItem';
import FontAwesome from 'react-fontawesome';


const style = {
  height: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  largeIcon: {
    width: 60,
    height: 60,
    color: "#37474F"
  },
  box: {
    backgroundColor: "#D1C4E9",
    boxShadow: "10px 10px 5px #888888"
  }
};
// http://almende.github.io/chap-links-library/img/forkme_right_darkblue_121621.png

export default class About extends Component {
  render() {

    return (
      <div>
      <Navigation />
        <MusicPlayer />
  <center>
  <div>
      <h1 style={{ color: 'white', fontFamily: 'VT323, cursive', fontSize: '50px' }}> Welcome to <p style={{ color: '#37474F', fontFamily: 'Bungee Shade, cursive', fontSize: '50px' }}>Rhino Music</p> Take charge of your music experience!</h1>
       <p style={{ color: 'white', fontFamily: 'Abel, cursive', fontSize: '28px' }}>Tired of going to seperate apps to discover the latest events, news, music videos, and songs from your favorite artists? </p>
      <p style={{ color: 'white', fontFamily: 'Abel, cursive', fontSize: '28px' }}> Rhino Users can search for all of these and also listen to music and watch videos at the same time! </p>
       <p style={{ color: 'white', fontFamily: 'Abel, cursive', fontSize: '28px' }}>This was made by music lovers for music lovers!</p>
  
      <br />

<a class="github-button" href="https://github.com/Recursion-Rhinos/rhino-music" data-icon="octicon-star" data-style="mega" data-count-href="/Recursion-Rhinos/rhino-music/stargazers" data-count-api="/repos/Recursion-Rhinos/rhino-music#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star Recursion-Rhinos/rhino-music on GitHub">Star</a>
  </div>
  </center>
   
      <Flexbox justifyContent='center'>
      <h4 style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '38px' }}> Development Team </h4>
      </Flexbox>
      <List>
      <Flexbox justifyContent='center'>
    
    <ListItem>
     <center>
        <img src='https://s24.postimg.org/6x6flabpx/circle_me.gif' border='0' alt='narmin'/><br/><br/>
        <Flexbox justifyContent='space-around'>

     <a href="https://github.com/narmeen12?tab=repositories">
         <img src='https://github.com/favicon.ico' border='0' alt='github'/></a>
          Narmin Shahin
          <a href="https://www.linkedin.com/in/narminshahin">
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='github'/></a>
        </Flexbox>
      </center>
    </ListItem>
 
    <ListItem>
      <center>
        <img src='https://s24.postimg.org/to1rpxzxx/jerry_circle.gif' border='0' alt='jerry'/><br/><br/>
        <Flexbox justifyContent='space-around'>
        <a href="https://github.com/Jerrys914">
         <img src='https://github.com/favicon.ico' border='0' alt='jerry circle'/> </a>
          Gerard "Jerry" Shanahan
          <a href="https://www.linkedin.com/in/gerard-shanahan">
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='li'/></a>
        </Flexbox>
      </center>
      
    
    </ListItem>
    <ListItem>
    <center>
        <img src='https://s30.postimg.org/5xmwbz7sh/circle_svetlin.gif' border='0' alt='svetlin'/><br/><br/>
        <Flexbox justifyContent='space-around'>
        <a href="https://github.com/sveem">
         <img src='https://github.com/favicon.ico' border='0' alt='github'/></a>
         Svetlin Mladenov
         <a href="linkedin.com/in/mladenovs">
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='li'/></a>
         </Flexbox>      
    </center>
    </ListItem>

    </Flexbox>
    <Flexbox justifyContent='center'>
    <Paper zDepth={6} >
    <ListItem>
      <img src="https://s27.postimg.org/lo3a4f6f7/Screen_Shot_2017_01_14_at_4_30_32_PM.png" />
    </ListItem>
    </Paper>
    </Flexbox>
    </List>
      </div>
    )
  }
}