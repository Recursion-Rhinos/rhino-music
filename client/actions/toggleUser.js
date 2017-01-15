import { TOGGLE_USER } from '../constants/ActionTypes';

export default toggleUser = () => {
   let toggleSetting = () => {
    this.setState({active: 'block'});
  }
  return {
    type: "TOGGLE_USER",
    payload: toggleSetting	
  };
}
