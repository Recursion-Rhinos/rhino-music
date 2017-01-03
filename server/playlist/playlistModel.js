var knex = require('../database/schema.knex.js');

let addToPlaylist = (PlaylistId, SongsId, UserId) => {
  return knex('PlaylistSongs').insert({
    SongsId: SongsId,
    UserId: UserId
  }).where({
    PlaylistId: PlaylistId
  }); //resolves with promise in the controller
};

let getAllPlaylistsByUserId = (UserId) => {
  return knex('Playlist').where({
    UserId: UserId
  }).first();
};

let removeFromPlaylist = (PlaylistId, SongsId, UserId) => {
  return knex('Playlist').where ({
    PlaylistId: PlaylistId,
    SongsId: SongsId,
    UserId: UserId	
  })
  .select('id')
  .del(); //resolves with promise in the controller
};

let getPlaylistByName = (Name) => {
  return knex('Playlist').where({
    Name: Name
  }).first();
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