import { TOGGLE_USER }  from '../constants/ActionTypes';

export default function (state=null, action) {  
  switch (action.type) {
    case "TOGGLE_USER":
      return action.payload;
  }
  return state;
}