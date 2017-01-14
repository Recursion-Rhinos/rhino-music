import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';
import { toggleUser} from '../../actions/toggleUser';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Flexbox from 'flexbox-react';

const styles = {
  underlineStyle: {
    borderColor: '#B7B13A',
  },
  floatingLabelStyle: {
    color: '#B7B13A',
  },
  floatingLabelFocusStyle: {
    color: '#B7B13A',
  },
  flex: {
  'alignItems': 'center',
  flexDirection: 'column'
  },
  float: 'right',
  div: {
  "margin-top": '19px 32px 16px 10px',
    paddingLeft: 20,
    lineHeight: 2.5,
  }
};


class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      active: false
    };

  this.onUserInputChange = this.onUserInputChange.bind(this);
  this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
  this.onEmailInputChange = this.onEmailInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.hideForm = this.props.toggleSettings;
  }



onUserInputChange(event) {
  this.setState({
    username: event.target.value
   });  
}

onPasswordInputChange(event) {
  this.setState({
    password: event.target.value
   });  
}

onEmailInputChange(event) {
  this.setState({
  email: event.target.value
   }); 
}

componentDidReceiveProps(nextProp) {
}

// onUserFormSubmit(event) {
//   console.log("+++++++++++++", event.target.value)
//   event.preventDefault();
//   this.props.changeUser(this.state.username);
//   console.log("HURAAAAAA USEEERRRRR LETS HAVE SOME FUN")
//   this.setState({ username: '' });
// }

// onPasswordSubmit(event) {
//   event.preventDefault();
//   console.log("+++++++++++++", event.target.value)
//   this.props.changePassword(this.state.password);
//     console.log("HURAAAAAA NEW PASSSWOOOORDDDDDDD")
//   this.setState({ password: ''}); 
// }

// onEmailFormSubmit(event) {
//   console.log("+++++++++++++", event.target.value)
//   event.preventDefault();
//   this.props.changeEmail(this.state.email);
//   console.log("HURAAAAAA NEW EMAIL DUDE")
//   this.setState({ email: '' });
// }

handleSubmit(event) {
event.preventDefault();
  let username =this.props.changeUser(this.state.username);
  let password = this.props.changePassword(this.state.password);
  let email = this.props.changeEmail(this.state.email)
  if (!username || !password || !email ) {
    return;
  }
  this.setState({username: '', password: '', email:''});
  }

render() {
  if(typeof hideForm === 'function') {
    hideForm();
  }

  return (
    <Flexbox style={styles.flex}>
    <h3> Change User Settings </h3>
  	<form style={{display: this.state.active}}  onSubmit={this.handleSubmit}>
       <TextField   
        hintText="New Username" 
        floatingLabelText="Username" 
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        value={this.state.username}
        onChange={this.onUserInputChange} 
       /> <br />
       <br />
      <TextField 
       hintText="New Password" 
       underlineFocusStyle={styles.underlineStyle}
       floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
       floatingLabelText="Password" 
       value={this.state.password}
       onChange={this.onPasswordInputChange}
       /> <br />
       
      <TextField 
       hintText="Change E-mail Address" 
       underlineFocusStyle={styles.underlineStyle}
       floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
       floatingLabelText="Email" 
       value={this.state.email}
       onChange={this.onEmailInputChange}
       /><br /> <br /> 
      <FlatButton 
       label="Submit"
       backgroundColor='#B7B13A'
       color="white"
       style={{marginBottom: "25px"}}
       />
    </form>
    </Flexbox>
   )
  }
}

const mapStateToProps = (state) => {
  return (toggleSettings: state.toggleSettings)
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeUser, changePassword, changeEmail}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSettings);