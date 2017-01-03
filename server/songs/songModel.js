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


module.exports = {
  addSong: addSong,
  removeSong: removeSong
};




