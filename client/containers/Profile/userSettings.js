import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

  this.onUserInputChange = this.onUserInputChange.bind(this);
  this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
  this.onEmailInputChange = this.onEmailInputChange.bind(this);
  // this.onUserFormSubmit = this.onUserFormSubmit.bind(this); 
  // this.onPasswordSubmit = this.onPasswordSubmit.bind(this);    
  // this.onEmailFormSubmit = this.onEmailFormSubmit.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
  console.log("PROPS in USERSETTING", this.props)
  return (
  	<form onSubmit={this.handleSubmit}>
       <TextField 
        hintText="Hint Text" 
        floatingLabelText="Username" 
        value={this.state.username}
        onChange={this.onUserInputChange} 
       /> <br />
       <br />
      <TextField 
       hintText="Hint Text" 
       floatingLabelText="Password" 
       value={this.state.password}
       onChange={this.onPasswordInputChange}
       /> <br />
       <br /> 
      <TextField 
       hintText="Hint Text" 
       floatingLabelText="Email" 
       value={this.state.email}
       onChange={this.onEmailInputChange}
       />
      <FlatButton label="Submit" primary={true} />
    </form>
   )
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeUser, changePassword, changeEmail}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSettings);