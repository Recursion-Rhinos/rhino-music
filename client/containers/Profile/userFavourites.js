import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllPlaylists  from '../../actions/getPlaylists';
import getEvents  from '../../actions/profileEvents';

class Favourites extends Component {
  constructor(props) {
    super(props)
    this.test = this.props.getEvents();
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.props.getAllPlaylists();
    console.log("JERRY IS THE MASTER ", this.props)
    //this.props.getEvents();
        console.log("Svetlin IS THE MASTER ", this.test)
  //   // console.log("This would be a good time to call action creator to fetch and render playlists");
  //   console.log("componentWillMount this.props =>", Promise.resolve(this.playlists))
  //   this.props.getAllPlaylists()
  //   .then((data) => {
  //     console.log("DATA IN PROPMISEEEEEEE DUDE", data)
  //     if(data) {
  //       this.playlists = data.payload.data; 
  //       console.log("PLAYLISTS IN PROMISE", this.playlists)
  //     }
  //   });
  }


  renderPlaylists(playlists) {
    console.log("PLAYLISTS INSINDE RENDERPLAYLISTS", playlists);
    return playlists.map((el, idx) => {
      return (
        <tr key={Math.random()}>
          <td>
          {el.Name}    
          </td>
       </tr>
      )
    }) 
  }

  renderEvents(events) {
  // console.log("EVENTSSSSSSSS", events)
  }


  render () {
    // console.log("SVETDaVeT Playlist", this.props.playlists);
    
    return (
    <div>
      <div>
       <table>
        <th>Playlists</th> 
        <tr>{this.renderPlaylists(this.props.playlists)}</tr>
       </table> 
      </div>
      <div> 
       <table>
       <th>Events</th>
       <tr>{this.renderEvents(this.props.events)}</tr>
       </table>
      </div>  
      </div>  
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE IN FAVOURITES", state);
  return {
    allEvents: state.allEvents,
    playlists: state.getAllPlaylists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPlaylists, getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);


