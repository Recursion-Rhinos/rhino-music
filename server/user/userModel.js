const knex = require('../database/schema.knex.js');
//1 Function for saving username, password, email and genres
//1 Function for get all data back
let storeUser = (username, password, email, genre = 'HipHop') => {
  // genre = genre || 'HipHop';
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email,
    genres: genre
  });
};

let retrieveUser = (name, password) => {
  return knex('Users').where({
    username: name,
    password: password	
  }).select('id');
};

let deleteUser = (name) => {
  return knex('Users').where({
    username: name
  }).select('id').del(); 
};


module.exports = {
  storeUser: storeUser,	
  retrieveUser: retrieveUser,
  deleteUser: deleteUser
};