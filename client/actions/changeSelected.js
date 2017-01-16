import { CHANGE_SELECTED } from '../constants/ActionTypes';

export default function changeSelected (selected) => {
  return {  
    type: 'CHANGE_SELECTED',
    payload: selected
  }
}