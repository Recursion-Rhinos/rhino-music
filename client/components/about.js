import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import Paper from 'material-ui/Paper';
import Flexbox from 'flexbox-react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import IconButton from 'material-ui/IconButton';
import ListItem from 'material-ui/List/ListItem';

export default class About extends Component {
  render() {

    return (
    	<div>
    	<Navigation />
        <MusicPlayer />
    
 <center>
      <h1 style={{ color: '#37474F', fontFamily: 'VT323, cursive', fontSize: '50px' }}> Welcome to <p style={{ color: '#37474F', fontFamily: 'Bungee Shade, cursive', fontSize: '50px' }}>Rhino Music</p> Take charge of your music experience!</h1>
       <p style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '28px' }}>Tired of going to seperate apps to discover the latest events, news, music videos, and songs from your favorite artists? </p>
      <p style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '28px' }}> Rhino Users can search for all of these and also listen to music and watch videos at the same time! </p>
       <p style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '28px' }}>This was made by music lovers for music lovers!</p>
      <br />
      <h4 style={{ color: '#37474F', fontFamily: 'Abel, cursive', fontSize: '38px' }}> Development Team </h4>
      <List>
    <ListItem>
 
   
        <img src="https://s29.postimg.org/lgsqqrwrr/DSC_0169.jpg" />
        <IconButton iconClassName="muidocs-icon-custom-github" />
      
    
    </ListItem>
    <ListItem>
    
        <img src="https://s27.postimg.org/cde4catgz/DSC_0157.jpg" />
        <IconButton iconClassName="muidocs-icon-custom-github" />
      
    
    </ListItem>
    <ListItem>

        <img src="https://s23.postimg.org/t3jfkn763/DSC_0162.jpg" />
      
    
    </ListItem>
    </List>
   </center>
      </div>
    )
  }
}