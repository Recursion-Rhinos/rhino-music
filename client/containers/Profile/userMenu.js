import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleUser from '../../actions/toggleUser';
import Setting from './userSettings';
import changeSelected  from '../../actions/changeSelected';
import getUser from '../../actions/currentUser';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import Account from 'material-ui/svg-icons/action/account-circle';
import Settings from 'material-ui/svg-icons/action/settings';
import Playlist from 'material-ui/svg-icons/av/playlist-play';
import Events from 'material-ui/svg-icons/action/record-voice-over';
import MenuItem from 'material-ui/MenuItem';
import Exit from 'material-ui/svg-icons/action/exit-to-app';

const style = {
  div: {
    margin: '19px 32px 16px 10px',
    paddingLeft: 20,
    lineHeight: 2.5,
    float: 'left'
  }
};

class Profile extends Component {
  constructor(props) {
  super(props);
  this.props.getUser();
}	

render () { 
    return (
      <Paper style={style.div} zDepth={5}>
      <div>
      <Menu>
        <MenuItem primaryText={this.props.userInfo.username} leftIcon={<Account />} />
        <MenuItem primaryText="Basic Details" onClick={() => this.props.changeSelected('settings')} leftIcon={<Settings />} />
        <MenuItem primaryText="Playlists" onClick={() => this.props.changeSelected('playlists')} leftIcon={<Playlist />} />
        <MenuItem primaryText="Events" onClick={() => this.props.changeSelected('events')} leftIcon={<Events />} />
        <MenuItem leftIcon={<Exit />}> <a style={{color:'black'}} href='/logout'> Exit </a></MenuItem>
      </Menu>
      </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({toogleUser, getUser}, dispatch);  
}

export default connect(mapStateToProps, { changeSelected, getUser })(Profile);

