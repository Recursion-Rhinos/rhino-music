export default function(state=null, action) {
  switch(action.type) {
    case "REMOVE_USER_EVENT":
    console.log('REMOVE EVENT ACTION PAYLOAD');
    return action.payload
  }
  return state
}