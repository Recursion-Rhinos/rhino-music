import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllPlaylists  from '../../actions/getPlaylists';
import getEvents  from '../../actions/profileEvents';

class Favourites extends Component {
  constructor(props) {
    super(props)
    // this.test = this.props.getEvents()
    // this.getUserEvents = this.getUserEvents.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
 }

  componentWillMount() {
    this.props.getAllPlaylists();
    // this.getUserEvents();
    this.props.getEvents();
    console.log("getEvents return a promise: => ", this.props.allEvents)
}
  // componentDidMount() {
  //  this.props.getEvents();
  //  console.log("componentDidMount", this.props) 
  // }
  // getUserEvents() {
  //   this.props.getEvents().then((data) => {
  //     this.test = data;
  //   })
  // }

  renderPlaylists(playlists) {
    console.log("PLAYLISTS INSINDE RENDERPLAYLISTS", playlists);
    return playlists.map((el, idx) => {
      return (
        <tr key={el + idx}>
          <td>
          {el.Name}    
          </td>
       </tr>
      )
    }) 
  }

  renderEvents(events) {
    return JSON.stringify(events);
  // console.log("EVENTSSSSSSSS", events)
  }
  render () {
<<<<<<< HEAD
    console.log("SVETDaVeT Playlist", this.props.playlists);
    
    
    return (
=======
    console.log("SVETDaVeT Playlist", this.props);
   return (
    <div>
>>>>>>> Monday
      <div>
       <table>
       <tr>
        <th>Playlists</th> 
          <tr>{this.renderPlaylists(this.props.playlists)}</tr>
       </tr>
       </table> 
      </div>
      <div> 
       <table>
         <tr>
         <th>Events</th>
           <tr>{this.renderEvents(this.props.allEvents)}</tr>
         </tr>
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getAllPlaylists, getEvents }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
export default connect(mapStateToProps, { getAllPlaylists, getEvents })(Favourites);


