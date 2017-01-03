import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  console.log('REDUCER-NEWS', action);
  switch (action.type) {
    case "NYT_NEWS":
    console.log('### News', action);
    return state.concat(action.payload.data.response.docs); //return an array with all news!
    // case "GET_NEWS":
    // return state.concat([action.payload.data]);
  }
  return state;
}