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
  </div>
  </center>
   
      <Flexbox justifyContent='center'>
      <h4 style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '38px' }}> Development Team </h4>
      </Flexbox>
      <List>
      <Flexbox justifyContent='center'>
    
    <ListItem>
     <center>
        <img src='https://s24.postimg.org/6x6flabpx/circle_me.gif' border='0' alt='circle me'/><br/><br/>
        <Flexbox justifyContent='space-around'>

         <img src='https://github.com/favicon.ico' border='0' alt='github'/>
      
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='github'/>
        </Flexbox>
      </center>
    </ListItem>
 
    <ListItem>
      <center>
        <img src='https://s24.postimg.org/to1rpxzxx/jerry_circle.gif' border='0' alt='github'/><br/><br/>
        <Flexbox justifyContent='space-around'>
         <img src='https://github.com/favicon.ico' border='0' alt='jerry circle'/>
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='github'/>
        </Flexbox>
      </center>
      
    
    </ListItem>
    <ListItem>
    <center>
        <img src='https://s30.postimg.org/5xmwbz7sh/circle_svetlin.gif' border='0' alt='circle svetlin'/><br/><br/>
        <Flexbox justifyContent='space-around'>
         <img src='https://github.com/favicon.ico' border='0' alt='github'/>
         <img src='http://wwwf.imperial.ac.uk/utils/assets/apps/news/img/icon-linkedin.png' border='0' alt='github'/>
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