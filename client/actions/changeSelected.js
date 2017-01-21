import { CHANGE_SELECTED } from '../constants/ActionTypes';

const changeSelected = (selected) => {
  return {  
  type: 'CHANGE_SELECTED',
  payload: selected
  }
}

export default changeSelected;