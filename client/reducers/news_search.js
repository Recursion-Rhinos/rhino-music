import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  
  switch (action.type) {
    case "NYT_NEWS":
    console.log('### News', action);
    state = []; //try to fixed this in the container
    return state.concat(action.payload.data.response.docs); //return an array with all news!
    // case "GET_NEWS":
    // return state.concat([action.payload.data]);
  }
  return state;
}