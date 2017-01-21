import { NYT_NEWS }  from '../constants/ActionTypes';

export default function (state=[], action) {
  
  switch (action.type) {
    case "NYT_NEWS":
    // state = []; //try to fixed this in the container
    return action.payload.data.response.docs.concat(state); //return an array with all news!
  }
  return state;
}