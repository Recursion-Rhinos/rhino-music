import { TOGGLE_USER } from '../constants/ActionTypes';

const toggleUser = () => {
   let toggleSetting = () => {
    this.setState({active: 'block'});
  }
  return {
    type: "TOGGLE_USER",
    payload: toggleSetting	
  };
}

export default toggleUser;