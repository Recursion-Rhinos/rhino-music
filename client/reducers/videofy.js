import { VIDEO_PLAYLIST } from '../actions/index';
import lodash from 'lodash';

export default function(state = [], action) { 


  switch (action.type) {
  case "VIDEO_PLAYLIST":
  let songIds = [];
	action.payload.forEach((objects) => {

		objects.items.forEach((object) => {
			songIds.push(object.id.videoId);
		})
	})

	console.log("THE SONG IDS", songIds)
  	 return songIds;
  }
  return state;
}


// if(Array.isArray(action.payload)) {
	// let songIds = [];
	// 	let objects = [];
	// 	Promise.all(action.payload).then((result) => {
	// 	 	console.log('Promise Rsei;ts~~~~~~~~~~~', result)
	// 	 	objects = result;
	// 	 });

	// 	console.log("OBJECTS++++++++++++++", objects)
	// 	objects.forEach((item) => {
	// 		console.log("WHAT WILL THIS GIVE USSSSSS",item.items)
	// 	})
	// } 
