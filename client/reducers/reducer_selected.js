export default function(state = 'settings', action) {
	if (action.type === 'CHANGE_SELECTED') {
		return action.payload;
	}
  return state;
}