const knex = require('../database/schema.knex.js');

let addSong = (song) => {
  return knex('Songs').insert('song', song);  
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




