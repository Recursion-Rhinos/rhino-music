const knex = require('../database/schema.knex.js');

let addSong = (song) => {
  return knex('Songs').insert({
    song: song
  }); //.then => have to use it with promise 
};

let removeSong = (song) => {
  return knex('Songs').where('song', song)
  .select('id')
  .del();  
};

let getSongById = (songId) => {
  console.log('SONG MODEL ID: ', songId);
  return knex('Songs').where({
    id: songId
  });
};

let getAllSongs = () => {
  return knex('Songs');
};

module.exports = {
  addSong: addSong,
  removeSong: removeSong,
  getSongById: getSongById,
  getAllSongs: getAllSongs
};




