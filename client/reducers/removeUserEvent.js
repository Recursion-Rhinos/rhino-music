export default function(state=null, action) {
  switch(action.type) {
    case "REMOVE_USER_EVENT":
    return action.payload
  }
  return state
}