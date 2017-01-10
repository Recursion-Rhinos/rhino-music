import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUser  } from '../../actions/userSettings';
import { changePassword } from '../../actions/userSettings';
import { changeEmail } from '../../actions/userSettings';




class UserSettings extends Component {
  constructor(props) {
    super(props);

  // this.onUserFormSubmit = this.onUserFormSubmit.bind(this);     
  }

onUserFormSubmit(event) {
  event.preventDefault();
  
}

render() {
  console.log("PROPS in USERSETTING", this.props)
  return (
  	<div>
  	<form>
    <div>
      New Username:<br/>
       <input type="text" className="username" placeholder="Username"/><br/>
       <input type="submit" value="Submit" />
     </div>
     <div>
      New Password:<br/>
       <input type="text" className="password" placeholder="Password"/><br/>
       <input type="submit" value="Submit" />
     </div>
     <div>
      New Email:<br/>
       <input type="text" className="email" placeholder="Email"/><br/>
       <input type="submit" value="Submit"/>
     </div>
     </form>
     </div>
   )
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeUser, changePassword, changeEmail}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSettings);