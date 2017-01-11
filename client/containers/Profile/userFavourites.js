import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import getAllPlaylists  from '../../actions/getPlaylists';
import getEvents  from '../../actions/profileEvents';
import removeEvent from '../../actions/removeEvent';


const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  }
};


class Favourites extends Component {
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
      if (typeof ele.event === "string") {
      ele.event = JSON.parse(ele.event);
      }
    })
     console.log("DATAAAAAAAAAAA", data)
    return data.map((el, idx) =>{
      console.log("+++++++++++++++++++++++++++", el)
      return (
      <TableRow  key={el + (idx + Math.random())} >
        <TableRowColumn >{ idx }</TableRowColumn>
        <TableRowColumn>{el.event.name}</TableRowColumn>
        <TableRowColumn>{el.event.location[0]}</TableRowColumn>
        <TableRowColumn><button onClick={() => {this.props.removeEvent(el.id); this.props.getEvents()}}>Remove</button></TableRowColumn> 
      </TableRow>
      )  
    });
  }
   //NEED STYLING!!!
  render () {
    console.log("SVETDaVeT Playlist", this.props)
   return (
    // <div>
    //   <div>
    //    <table>
    //    <tr>
    //     <th>Playlists</th> 
    //       <tr>{this.renderPlaylists(this.props.playlists)}</tr>
    //    </tr>
    //    </table> 
    //   </div>
    <div>
    <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      selectable={this.state.selectable}
      multiSelectable={this.state.multiSelectable}
    >
    <TableHeader
      displaySelectAll={this.state.showCheckboxes}
      adjustForCheckbox={this.state.showCheckboxes}
      enableSelectAll={this.state.enableSelectAll}
    >
    <TableRow>
    <TableHeaderColumn colSpan="3" tooltip="EVENTS" style={{textAlign: 'center'}}>
      EVENTS
    </TableHeaderColumn>
    </TableRow>
    <TableRow>
      <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
      <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
      <TableHeaderColumn tooltip="The Location">Location</TableHeaderColumn>
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
    </Table>   
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


