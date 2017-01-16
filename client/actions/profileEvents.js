import axios from 'axios';
import { GET_EVENTS} from '../constants/ActionTypes';

const getEvents = () => {
  let allEvents = axios.get('/events/userid');
  return {
    type:"GET_EVENTS",
    payload: allEvents
  }	
}

export default getEvents;