import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import getEvents  from '../../actions/profileEvents';
import removeEvent from '../../actions/removeEvent';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';

const styles = {
  propContainer: {
    width: "75%",
    overflow: 'hidden',
    margin: '20px auto 0',
    paddingBottom: '20px'
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  margin: 12,
  div: {
    margin: '19px 32px 16px 10px',
    paddingLeft: 20,
    lineHeight: 2.5,
    float: 'left'
  }
};


class Events extends Component {
  constructor(props) {
    super(props)

     this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
    this.componentWillMount = this.componentWillMount.bind(this);
 }

componentWillMount() {
  this.props.getEvents();  
};

componentDidReceiveProps(nextProps) {
  this.forceUpdate();
};

handleToggle(event, toggled) {
  this.setState({
  [event.target.name]: toggled,
  });
};

handleChange (event) {
  this.setState({height: event.target.value});
};

  renderEvents(events) {
    const data = [];
    events.forEach((arr) => {
      arr.forEach((obj) => {
        data.push(obj);
      });
    });
    data.forEach((ele) => {
      if (typeof ele.event === "string") {
      ele.event = JSON.parse(ele.event);
      }
    })
    return data.map((el, idx) =>{
      return (
      <TableRow  key={el + (idx + Math.random())} >
        <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{ idx }</p></TableRowColumn>
        <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{el.event.name}</p></TableRowColumn>
        <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{el.event.location[0]}</p></TableRowColumn>
        <TableRowColumn><a href={el.event.link}><RaisedButton className="reserve" label="Reserve" backgroundColor="#a4c639" onClick={() => 'location.href=`${el.event.link}`'}></RaisedButton></a></TableRowColumn>
        <TableRowColumn><RaisedButton label="Remove" style={styles} backgroundColor="#ef5350" onClick={() => {this.props.removeEvent(el.id); this.props.getEvents()}}/></TableRowColumn> 
      </TableRow>
      )  
    });
  }

  render () {
   return (
    <div style={styles.propContainer} >
    <div className="events">
    <Paper style={styles.div} zDepth={5}>
    <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      selectable={this.state.selectable}
      multiSelectable={this.state.multiSelectable}
    >
    <TableHeader
      events={styles.events}
      displaySelectAll={this.state.showCheckboxes}
      adjustForCheckbox={this.state.showCheckboxes}
      enableSelectAll={this.state.enableSelectAll}
    >
    <TableRow>
    <TableHeaderColumn colSpan="5" tooltip="EVENTS" style={{textAlign: 'center'}}>
      <p style={{ color: '#311B92', fontFamily: 'VT323, cursive', fontSize: '38px' }}>EVENTS</p>
    </TableHeaderColumn>
    </TableRow>
    <TableRow>
      <TableHeaderColumn tooltip="Event ID"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>ID</p></TableHeaderColumn>
      <TableHeaderColumn tooltip="Venue Details"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Name</p></TableHeaderColumn>
      <TableHeaderColumn tooltip="Location"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Location</p></TableHeaderColumn>
      <TableHeaderColumn tooltip="Reserve Tickets"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Reserve</p></TableHeaderColumn>
      <TableHeaderColumn tooltip="Delete Event"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Delete</p></TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody
      showRowHover={this.state.showRowHover}
      displayRowCheckbox={this.state.showCheckboxes}
      deselectOnClickaway={this.state.deselectOnClickaway}
      stripedRows={this.state.stripedRows}
    >
     {this.renderEvents(this.props.allEvents)}
    </TableBody> 
    <TableFooter
      events={styles.events}
      displaySelectAll={this.state.showCheckboxes}
      adjustForCheckbox={this.state.showCheckboxes}
      enableSelectAll={this.state.enableSelectAll}
    >
    </TableFooter>
    </Table>  
    </Paper>
    </div> 
    </div>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allEvents: state.allEvents
  }
}

export default connect(mapStateToProps, {getEvents, removeEvent })(Events);


