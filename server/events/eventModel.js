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

let getEventsByUserId = (UserId) => {
return knex('EventsUsers').where({
    UserId: UserId
  }).then((data) => {
    return data;
  });
};

let getEventsByName = (name, UserId) => {
	return knex('Events').select('id')
	.where({
		name: name,
		UserId: UserId
	});
};

module.exports = {
	getAllEvents:getAllEvents,
	getEventsById: getEventsById,
	saveEvent: saveEvent,
	addEventToEventsUsers: addEventToEventsUsers,
	getEventsByUserId: getEventsByUserId,
	getEventsByName: getEventsByName
};