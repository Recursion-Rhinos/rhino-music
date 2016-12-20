var knex = require('../database/schema.knex.js');

let addTo = (SongsId, UserId) => {
  return knex('Playlist').insert({
    SongsId: SongsId,
    UserId: UserId
  }); //resolves with promise in the controller
};

let remove = (SongsId, UserId) => {
  return knex('Playlist').where ({
    SongsId: SongsId,
    UserId: UserId	
  })
  .select('id')
  .del(); //resolves with promise in the controller
};

let getAllByUserId = (UserId) => {
  return knex('Users')
  .where('UserId', UserId)
  .first();//resolves with promise in the controller
};


module.exports = {
  addTo: addTo,
  remove: remove,
  getAllByUserId: getAllByUserId
};