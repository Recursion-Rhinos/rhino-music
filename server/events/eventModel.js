const knex = require('../database/schema.knex.js');

let getAllEvents = () => {
	return knex('Events');
};

let getEventsById = (id) => {
	return knex('Events').where('id', id);
};

let saveEvent = (event) => {
  return knex('Events').insert({
    event: event
  }); 
};

let addEventToEventsUsers = (EventsId, UserId) => {
  return knex('EventsUsers').insert({
    EventsId: EventsId,
    UserId: UserId
  }); 
};

let deleteUserEvent = (eventId, userId) => {
  return knex('EventsUsers').where({
    EventsId: eventId,
    UserId: userId
  })
  .del();
}


let getEventsByUserId = (UserId) => {
return knex('EventsUsers').where({
    UserId: UserId
  }).then((data) => {
    return data;
  });
};

let getEventsUsersByEventsId = (EventsId) => {
  return knex('EventsUsers').where({
    EventsId: EventsId
  });
};

module.exports = {
	getAllEvents:getAllEvents,
	getEventsById: getEventsById,
	saveEvent: saveEvent,
	addEventToEventsUsers: addEventToEventsUsers,
	getEventsByUserId: getEventsByUserId,
	getEventsUsersByEventsId: getEventsUsersByEventsId,
  removeUserEvent: deleteUserEvent
};