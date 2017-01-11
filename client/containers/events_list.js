import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions/events';
import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: "auto",
  width: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  button: {
    color: "#00BCD4",
    textColor: "white"
  }
};

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
    console.log("EVENTS++++++++++++++>>>>>>>", event)
		return (
       <TableRow key={Math.random() * 100}>
	
         <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black'}}>{event.displayName}</TableRowColumn>
         <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black'}}>{event.location.city}</TableRowColumn>
       <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black'}}><a href={event.uri}><RaisedButton style ={style.button} onClick={() => 'location.href=`${event.uri}`'}> Buy Now </RaisedButton></a></TableRowColumn>
       <TableRowColumn style={{backgroundColor:'#B0BEC5', color: 'black'}}><RaisedButton style ={style.button} onClick={() => {saveEvent( {name:event.displayName, link: event.uri, location: [event.location.city, {lat: event.location.lat, lon: event.location.lng}] } ) }}> Save </RaisedButton></TableRowColumn>
      	
      </TableRow>
		)
	})
  )
}

render () {
console.log("PROPS IN EVENTS LIST", this.props.events)	
return (
<Paper key={Math.random() * 100} style={style} zDepth={3}>
<Table>
  <TableBody displayRowCheckbox={false}>

    <TableRow key={Math.random() * 100}>
      <TableHeaderColumn style={{backgroundColor:'#009688', color: 'white'}}> Event</TableHeaderColumn>
      <TableHeaderColumn style={{backgroundColor:'#009688', color: 'white'}}> Location </TableHeaderColumn>
      <TableHeaderColumn style={{backgroundColor:'#009688', color: 'white'}}> Purchase </TableHeaderColumn>
     <TableHeaderColumn style={{backgroundColor:'#009688', color: 'white'}}> Stay Woke </TableHeaderColumn>
  </TableRow>
      {this.renderEvents()}
  </TableBody>
</Table>
</Paper>  
    );
  }
}

function saveEvent(eventData) {
  console.log("saving event")
    axios.post('/api/saveEvent', {body: eventData})
    .then((result) => {
      console.log('EVENT SAVED')
    });
  }

function mapStateToProps(state) {
  if(!state.events) {
    return {noEvent: "No events found for this artist"}
  }
  return {events: state.events};  
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetchEvents:fetchEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList); 
