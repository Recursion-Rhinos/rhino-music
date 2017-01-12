import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleUser from '../../actions/toggleUser';
import Setting from './userSettings';
import changeSelected  from '../../actions/changeSelected';
import getUser from '../../actions/currentUser';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import Verified from 'material-ui/svg-icons/action/verified-user';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  }
};

class Profile extends Component {
  constructor(props) {
  super(props);
  // this.User;
  this.props.getUser();
}	

//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
  // let test = toggleSetting();

  // console.log("+++++++++++++++++++++", userName)
  console.log("PROPS IN USER MENU", this.props.userInfo)
    return (
      <div>
      <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText={this.props.userInfo.username} leftIcon={<Verified />} />
        <MenuItem primaryText="Basic Details" onClick={() => this.props.changeSelected('settings')} leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Playlists" onClick={() => this.props.changeSelected('playlists')} leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Events" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Exit " leftIcon={<Download />} />
      </Menu>
      </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {userInfo: state.userInfo}
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({toogleUser, getUser}, dispatch);  
}

export default connect(mapStateToProps, { changeSelected, getUser })(Profile);

// export default connect(mapStateToProps, { toggleUser })(Profile);
// const changeSelected = (selected) => ({
//   type: 'CHANGE_SELECTED',
//   payload: selected
// });

