import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  
  switch (action.type) {
    case "NYT_NEWS":
    return state.concat([ action.payload.data ]);
    case "GET_NEWS":
    console.log('REDUCER-NEWS', action.type);
    return state.concat([action.payload.data]);
  }
  return state;
}