const knex = require('../database/schema.knex.js');
//1 Function for saving username, password, email and genres
//1 Function for get all data back
let store = (username, password, email, genres) => {
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email,
    genres: genres
  });
};

let getAll = () => {
  
};


module.exports = {
  store: store,	
  getAll: getAll
};