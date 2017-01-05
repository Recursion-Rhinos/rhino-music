import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions/events';

class EventsList extends Component {
	constructor(props) {
		super(props);
		
		this.renderEvents = this.renderEvents.bind(this);
	}
renderEvents() {
	// console.log("EVENTS LIST IS HERE", eventsList)
	// console.log('yoooo',this.props.events[0])
let eventsList = [];
console.log("WHAT IS HERE", this.props.events)
	if(!this.props.events) {
      return "search for events"
  } else {
		eventsList = this.props.events
	}
		// if(this.props.events[0].length > 0) {
return (
	
	eventsList.map((event) => {
		return (
	<tr key={Math.random() * 100}> 
        <td>{event.displayName}</td>
        <td>{event.location.city}</td>
      <td><a href={event.uri}><button onClick={() => 'location.href=`${event.uri}`'}> Reserve </button></a></td>
      </tr>		
		)
	})
  )
}


render () {
console.log("PROPS IN EVENTS LIST", this.props.events)	
return (
  <table className="table table-hover">
  <thead>
    <tr >
      <th> Event</th>
      <th> Location </th>
      <th> Purchase </th>
    </tr>
  </thead>
  <tbody>
      {this.renderEvents()}
  </tbody>
</table>
);

  }
}


function mapStateToProps(state) {
  return {events: state.events};  
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchEvents:fetchEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList); 
