import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleUser from '../../actions/toggleUser';
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
import Setting from './userSettings';
import changeSelected  from '../../actions/changeSelected';

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
  }	

//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
  // let test = toggleSetting();
  console.log("PROPS IN USER MENU", this.props)
    return (
      <div>
      <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Svetlin" leftIcon={<RemoveRedEye />} />
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
export default connect(null, { changeSelected })(Profile);

// function mapDispatchToProps(dispatch) {
// return bindActionCreators({toogleUser}, dispatch);  
// }

// function mapStateToProps(state) {
//   return {selected: state.selected}
// }

// export default connect(mapStateToProps, { toggleUser })(Profile);
// const changeSelected = (selected) => ({
//   type: 'CHANGE_SELECTED',
//   payload: selected
// });

