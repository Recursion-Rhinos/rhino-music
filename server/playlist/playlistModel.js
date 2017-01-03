var knex = require('../database/schema.knex.js');

let addSongToPlaylist = (PlaylistId, SongsId, UserId) => {
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
  });
};

let removeSongFromPlaylist = (PlaylistId, SongsId, UserId) => {
  return knex('Playlist').where ({
    PlaylistId: PlaylistId,
    SongsId: SongsId,
    UserId: UserId	
  })
  .select('id')
  .del(); //resolves with promise in the controller
};

let createNewPlaylist = (Name, UserId) => {
  return knex('Playlist').insert({
    Name: Name,
    UserId: UserId
  });
};

let deletePlaylist = (PlaylistId) => {
  console.log('PLAYLIST ID: ', PlaylistId)
  knex('PlaylistSongs').where({
    PlaylistId: PlaylistId
  })
  .del().then((result) => {
    console.log('DELETED Songs for PLAYLIST : ', result)
  });
  return knex('Playlist').where({
      id: PlaylistId
    })
    .del()
};

let getPlaylistIdByName = (Name, UserId) => {
  return knex('Playlist').select('id').where({
    Name: Name,
    UserId: UserId
  });
};

let getPlaylistSongsByPlaylistId = (PlaylistId) => {
  return knex('PlaylistSongs').where({
    PlaylistId: PlaylistId
  });
};

let getAllByUserId = (UserId) => {
  return knex('Users')
  .where('UserId', UserId)
  .first();//resolves with promise in the controller
};


module.exports = {
  addSongToPlaylist: addSongToPlaylist,
  removeSongFromPlaylist: removeSongFromPlaylist,
  getPlaylistIdByName: getPlaylistIdByName,
  getPlaylistSongsByPlaylistId: getPlaylistSongsByPlaylistId,
  getAllPlaylistsByUserId: getAllPlaylistsByUserId,
  deletePlaylist: deletePlaylist,
  createNewPlaylist: createNewPlaylist,
  getAllByUserId: getAllByUserId
};