import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';




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
  this.onUserFormSubmit = this.onUserFormSubmit.bind(this); 
  this.onPasswordSubmit = this.onPasswordSubmit.bind(this);    
  this.onEmailFormSubmit = this.onEmailFormSubmit.bind(this);
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

onUserFormSubmit(event) {
  console.log("+++++++++++++", event.target.value)
  event.preventDefault();
  this.props.changeUser(this.state.username);
  console.log("HURAAAAAA USEEERRRRR LETS HAVE SOME FUN")
  this.setState({ username: '' });
}

onPasswordSubmit(event) {
  event.preventDefault();
  console.log("+++++++++++++", event.target.value)
  this.props.changePassword(this.state.password);
    console.log("HURAAAAAA NEW PASSSWOOOORDDDDDDD")
  this.setState({ password: ''}); 
}

onEmailFormSubmit(event) {
  console.log("+++++++++++++", event.target.value)
  event.preventDefault();
  this.props.changeEmail(this.state.email);
  console.log("HURAAAAAA NEW EMAIL DUDE")
  this.setState({ email: '' });
}


render() {
  console.log("PROPS in USERSETTING", this.props)
  return (
  	<div>
  	<form className = 'userSetting' onSubmit={this.onUserFormSubmit}>
    <div>
      New Username:<br/>
       <input 
       type="text" className="username" 
       placeholder="Username" 
       value={this.state.username}
       onChange={this.onUserInputChange} /><br/>
       <input type="submit" value="Submit" />
     </div>
     </form>
     <form onSubmit={this.onPasswordSubmit}>
     <div>
      New Password:<br/>
       <input 
       type="text" className="password" 
       placeholder="Password"
       value={this.state.password}
       onChange={this.onPasswordInputChange}
       /><br/>
       <input type="submit" value="Submit" />
     </div> 
     </form>
     <div>
     <form onSubmit={this.onEmailFormSubmit}>
      New Email:<br/>
       <input type="text" className="email" 
       placeholder="Email"
       value={this.state.email}
       onChange={this.onEmailInputChange}
       /><br/>
       <input type="submit" value="Submit"/>
    </form>
     </div>
     </div>
   )
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeUser, changePassword, changeEmail}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSettings);