import { VIDEO_PLAYLIST } from '../actions/index';
import lodash from 'lodash';

export default function(state = [], action) { 
  switch (action.type) {
  case "VIDEO_PLAYLIST":
    state = [];
    let songIds = [];
	  action.payload.forEach((objects) => {
		  objects.items.forEach((object) => {
			  songIds.push(object.id.videoId);
		  })
	  })
    return songIds;
  }
  return state;
}
