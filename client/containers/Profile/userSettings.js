import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';
import { toggleUser} from '../../actions/toggleUser';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {orange500} from 'material-ui/styles/colors';
import Flexbox from 'flexbox-react';


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: '#9b59b6',
  },
  floatingLabelStyle: {
    color: '#9b59b6',
  },
  floatingLabelFocusStyle: {
    color: '#9b59b6',
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
  // this.onUserFormSubmit = this.onUserFormSubmit.bind(this); 
  // this.onPasswordSubmit = this.onPasswordSubmit.bind(this);    
  // this.onEmailFormSubmit = this.onEmailFormSubmit.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  console.log("TOG", this.props)
  this.hideForm = this.props.toggleSettings;
  }



onUserInputChange(event) {
console.log('UserSettings Container onInputChange:', event.target.value);
  this.setState({
    username: event.target.value
   });  
}

onPasswordInputChange(event) {
console.log('UserSettings Container onPasswordChange:', event.target.value);
  this.setState({
    password: event.target.value
   });  
}

onEmailInputChange(event) {
console.log('UserSettings Container onEmailChange:', event.target.value);
  this.setState({
  email: event.target.value
   }); 
}

componentDidReceiveProps(nextProp) {
  console.log('NEXT PROPS !@#!@#!@#: ', nextProp);
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
  
  console.log("PROPS in USERSETTING", this.props)
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
       backgroundColor='#00B0FF'
       color="white"
       />
    </form>
    </Flexbox>
   )
 }
}

function mapStateToProps(state) {
  return (toggleSettings: state.toggleSettings)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeUser, changePassword, changeEmail}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSettings);