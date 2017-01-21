import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchEvents from '../actions/events';
import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleMap from '../components/GoogleMap';

const style = {
  height: "auto",
  width: "auto",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  button: {
    labelColor: "#00BCD4",
    fontColor: "white"
  }
};

class EventsList extends Component {
	constructor(props) {
		super(props);
		
		this.renderEvents = this.renderEvents.bind(this);
	}
  renderEvents() {
    let eventsList = [];
  	if(!this.props.events) {
      return "search for events"
    } else {
  		eventsList = this.props.events
  	}
    return (
    	eventsList.map((event) => {
    		return (
          <TableRow key={Math.random() * 100}>
            <TableRowColumn style={{backgroundColor:'#EEEEEE', color: 'black'}}><p style={{ color: '#37474F', fontFamily: 'Teko, cursive', fontSize: '26px' }}>{event.displayName}</p></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#EEEEEE', color: 'black'}}><p style={{ color: '#37474F', fontFamily: 'Teko, cursive', fontSize: '26px' }}>{event.location.city}</p></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#EEEEEE', color: 'white'}}><a href={event.uri}><RaisedButton backgroundColor="#B2FF59" style ={style.button} onClick={() => 'location.href=`${event.uri}`'}> Buy Now </RaisedButton></a></TableRowColumn>
            <TableRowColumn style={{backgroundColor:'#EEEEEE', color: 'white'}}><RaisedButton backgroundColor="#03A9F4" style ={style.button} onClick={() => {saveEvent( {name:event.displayName, link: event.uri, location: [event.location.city, {lat: event.location.lat, lon: event.location.lng}] } ) }}> Save </RaisedButton></TableRowColumn>
          </TableRow>
    		)
    	})
    )
  }

  render () {
    return (
      <Paper key={Math.random() * 100} style={style} zDepth={5}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow key={Math.random() * 100}>
              <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white'}}><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '28px' }}> Event</p></TableHeaderColumn>
              <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white'}}><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '28px' }}> Location </p></TableHeaderColumn>
              <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white'}}><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '28px' }}> Purchase </p></TableHeaderColumn>
              <TableHeaderColumn style={{backgroundColor:'#673AB7', color: 'white'}}><p style={{ color: 'white', fontFamily: 'Teko, cursive', fontSize: '28px' }}> Stay Woke </p></TableHeaderColumn>
            </TableRow>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </Paper>  
    );
  }
}

const saveEvent = (eventData) => {
  axios.post('/api/saveEvent', {body: eventData})
}

const mapStateToProps = (state) => {
  if(!state.events) {
    return {noEvent: "No events found for this artist"}
  }
  return {events: state.events};  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchEvents:fetchEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList); 
