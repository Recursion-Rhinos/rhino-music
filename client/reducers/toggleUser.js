import { TOGGLE_USER }  from '../constants/ActionTypes';

export default function (state=null, action) {
  console.log("TOOGLE USER REDUCER")  
  switch (action.type) {
    case "TOGGLE_USER":
    console.log('### TOGGLE USER => ', action);
    // state = []; 
      return action.payload;
  }
  return state;
}