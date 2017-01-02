import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  console.log('REDUCER-NEWS', action);
  switch (action.type) {
    case "NYT_NEWS":
    return state.concat([ action.payload.data ]);
    case "GET_NEWS":
    return state.concat([action.payload.data]);
  }
  return state;
}