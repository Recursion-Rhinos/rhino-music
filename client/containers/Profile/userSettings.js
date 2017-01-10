import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';




class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {username: ''};

  this.onInputChange = this.onInputChange.bind(this);
  this.onUserFormSubmit = this.onUserFormSubmit.bind(this);     
  }



onInputChange(event) {
console.log('UserSettings Container onInputChange:', event.target.value);
  this.setState({username: event.target.value});  

}

onUserFormSubmit(event) {
  console.log("+++++++++++++", event.target.value)
  event.preventDefault();
  this.props.changeUser(this.state.username);
  console.log("HURAAAAAA USEEERRRRR")
  this.setState({ username: '' });
}

render() {
  console.log("PROPS in USERSETTING", this.props)
  return (
  	<div>
  	<form onSubmit={this.onUserFormSubmit}>
    <div>
      New Username:<br/>
       <input 
       type="text" className="username" 
       placeholder="Username" 
       value={this.state.username}
       onChange={this.onInputChange} /><br/>
       <input type="submit" value="Submit" />
     </div>
     </form>
     <div>
     <form>
      New Password:<br/>
       <input type="text" className="password" placeholder="Password"/><br/>
       <input type="submit" value="Submit" />
     </form>
     </div>
     <div>
     <form>
      New Email:<br/>
       <input type="text" className="email" placeholder="Email"/><br/>
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