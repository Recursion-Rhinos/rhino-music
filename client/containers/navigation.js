import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';
import { fetchNews } from '../actions/news_nytimes';
import { fetchEvents } from '../actions/events';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }


 render() {
   return (
     <div>
       <button type = "button" class = "btn btn-default">Events</button>	
       <button type = "button" class = "btn btn-default">Videos</button>
       <button type = "button" class = "btn btn-default">News</button>	
       <button type = "button" class = "btn btn-default">Profile</button>
       <button type = "button" class = "btn btn-default">Logout</button>
     </div>
  );
 }
}


