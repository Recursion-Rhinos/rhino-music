import axios from 'axios';

const removeEvent = (eventId) => {
  let request = axios.post('/api/removeUserEvent', {eventId: eventId});
  return {
    type: "REMOVE_USER_EVENT",
    payload: request
  }
}

export default removeEvent;