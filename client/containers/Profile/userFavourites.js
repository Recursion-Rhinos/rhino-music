import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllPlaylists  from '../../actions/getPlaylists';
import getEvents  from '../../actions/profileEvents';
import removeEvent from '../../actions/removeEvent';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
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
 }

componentWillMount() {
  this.props.getAllPlaylists();
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
      console.log("PLAYLISTS", el);
        return (
        <TableRow key={el.Name}>
          <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{idx}</p></TableRowColumn>
          <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{el.Name}</p></TableRowColumn>
          <TableRowColumn><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '20px' }}>{el.songCount}</p></TableRowColumn>
        </TableRow>
        );
      }); 
    }
  }

  render () {
   return (
    <div style={styles.propContainer} >
      <div className="playlists">
      <Paper 
        style={styles.div} 
        zDepth={5}>
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
     <TableHeaderColumn colSpan="3" tooltip="PLAYLISTS" style={{textAlign: 'center'}}>
       <p style={{ color: '#311B92', fontFamily: 'VT323, cursive', fontSize: '38px' }}>PLAYLISTS</p>
     </TableHeaderColumn>
     </TableRow>
     <TableRow>
       <TableHeaderColumn tooltip="Playlist ID"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>ID</p></TableHeaderColumn>
       <TableHeaderColumn tooltip="Playlist Name"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Name</p></TableHeaderColumn>
       <TableHeaderColumn tooltip="Track Count"><p style={{ color: '#311B92', fontFamily: 'Teko, cursive', fontSize: '28px' }}>Songs</p></TableHeaderColumn>
     </TableRow>
     </TableHeader>
     <TableBody
       showRowHover={this.state.showRowHover}
       displayRowCheckbox={this.state.showCheckboxes}
       deselectOnClickaway={this.state.deselectOnClickaway}
       stripedRows={this.state.stripedRows}
     >
     {this.renderPlaylists(this.props.playlists)}
     </TableBody> 
     </Table> 
     </Paper>  
     </div>
    </div>   
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.getAllPlaylists
  }
}

export default connect(mapStateToProps, { getAllPlaylists })(Favourites);


