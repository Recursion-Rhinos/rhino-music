export default function(state=[], action) {	
  if (action.type === 'GET_USER') {
    return action.payload.data;
  }
  return state;
}