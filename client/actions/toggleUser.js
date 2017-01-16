import { TOGGLE_USER } from '../constants/ActionTypes';

export default function toggleUser() {
  console.log("TOGGLE_USER Action Creator => event")
   let toggleSetting = () => {
   	console.log('SHOW THE FUCKING FORM')
    this.setState({active: 'block'});
  }
  return {
    type: "TOGGLE_USER",
    payload: toggleSetting	
  };
}
