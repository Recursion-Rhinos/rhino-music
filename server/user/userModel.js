
const knex = require('../database/schema.knex.js');

let storeUser = (username, password, email, genre = 'Hip-Hop') => {
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email,
    genres: genres
  });
};

let retrieveUser = (name, password) => {
  return knex('Users').where({
    username: name,
    password: password  
  })
.first();//resolves with promise in the controller
// .then(data => {
//   console.log('DATA', data);
//   return data;
// });
}; 

let retrieveGraphId = (userId) => {
 //not finished yet
};

let deleteUser = (name) => {
  return knex('Users').where({
    username: name
  }).select('id').del(); //resolves with promise in the controller
    // .then(deletedUser => {
    //   console.log(deletedUser);
    //   return deletedUser;
    // }); 
};


module.exports = {
  storeUser: storeUser, 
  retrieveUser: retrieveUser,
  deleteUser: deleteUser,
  retrieveGraphId: retrieveGraphId
};