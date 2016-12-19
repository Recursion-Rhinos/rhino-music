var knex = require('../database/schema.knex.js');

let addTo = (SongsId, UserId) => {
  return knex('Playlist').insert({
    SongsId: SongsId,
    UserId: UserId
  }); //resolves with primise in the controller
};

let remove = (SongsId, UserId) => {
  return knex('Playlist').where ({
    SongsId: SongsId,
    UserId: UserId	
  })
  .select('id')
  .del(); //resolves with primise in the controller
};




module.exports = {};