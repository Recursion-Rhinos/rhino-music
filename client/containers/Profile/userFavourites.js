import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllPlaylists  from '../../actions/getPlaylists';
import getEvents  from '../../actions/profileEvents';
import removeEvent from '../../actions/removeEvent';

class Favourites extends Component {
  constructor(props) {
    super(props)

    this.componentWillMount = this.componentWillMount.bind(this);
    // this.test = this.props.getEvents()
    // this.getUserEvents = this.getUserEvents.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
 }

componentWillMount() {
    this.props.getAllPlaylists();
    // this.getUserEvents();
    this.props.getEvents();
    console.log("getEvents return a promise: => ", this.props.allEvents)
}

handleToggle(event, toggled) {
  this.setState({
  [event.target.name]: toggled,
  });
};

handleChange (event) {
  this.setState({height: event.target.value});
};

componentDidReceiveProps(nextProps) {
  this.forceUpdate();
};
 
  renderPlaylists(playlists) {
    console.log("PLAYLISTS INSINDE RENDERPLAYLISTS", playlists);
    if(Array.isArray(playlists)) {
      return playlists.map((el, idx) => {
        return (
          <tr key={el.Name}>
            <td>
            {el.Name}    
            </td>
         </tr>
        )
      }) 
    }
  }

  renderEvents(events) {
    // console.log("EVEEENTSSSS", JSON.parse(events));
    const data = [];
    events.forEach((arr) => {
      arr.forEach((obj) => {
        data.push(obj);
      });
    });
    data.forEach((ele) => {
      console.log("JSON PARSEEEEEEEEE", ele);
      ele.event = JSON.parse(ele.event);
    })
     console.log("DATAAAAAAAAAAA", data)
    return data.map((el, idx) =>{
      console.log("+++++++++++++++++++++++++++", el)
      return (
        <tr key={el + (idx + Math.random())}>
          <td>{el.event.name}</td> 
          <td>{el.event.location? el.event.location[0] : "USA"}</td>
          <td><button onClick={() => {this.props.removeEvent(el.id); this.props.getEvents()}}>Remove</button></td>   
        </tr>
      )  
    });
  }
   //NEED STYLING!!!
  render () {
    console.log("SVETDaVeT Playlist", this.props)
   return (
    <div>
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
export default connect(mapStateToProps, { getAllPlaylists, getEvents, removeEvent })(Favourites);


