import axios from 'axios';
import { GET_EVENTS} from '../constants/ActionTypes';

const getEvents = () => {
  let allEvents = axios.get('/events/userid');
  // console.log("GET-EVENTS ACTION CREATOR", allEvents)
  return {
    type:"GET_EVENTS",
    payload: allEvents
  }	
}


export default getEvents;