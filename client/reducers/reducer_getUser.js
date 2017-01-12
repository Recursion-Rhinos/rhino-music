export default function(state=[], action) {
  console.log("GET USER REDUCER", action);	
  if (action.type === 'GET_USER') {
    return action.payload.data;
  }
  return state;
}