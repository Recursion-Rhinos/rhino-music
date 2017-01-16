import { CHANGE_SELECTED } from '../constants/ActionTypes';

export default changeSelected = (selected) => {
  return {  
    type: 'CHANGE_SELECTED',
    payload: selected
  };
}

