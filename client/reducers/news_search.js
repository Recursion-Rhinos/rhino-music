import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  switch (action.type) {
    case "NYT_NEWS":
    // state = []
    return action.payload.data.response.docs.concat(state); 
  }
  return state;
}