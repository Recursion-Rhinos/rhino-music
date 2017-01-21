
const knex = require('../database/schema.knex.js');

let storeUser = (username, password, email, genres = 'Hip-Hop') => {
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

let getUserById = (Id) => {
  return knex('Users').where({
    id: Id
  }).first();
};

let getUserByName = (username) => {
  return knex('Users').where({
    username: username
  }).first();
};

let updatePassword = (password, userId) => {
  return knex('Users').where({
    id: userId
  }).update({
    password: password
  });
};

let updateUsername = (username, userId) => {
  return knex('Users').where({
    id: userId
  }).update({
    username: username
  });
}

let updateEmail = (email, userId) => {
  return knex('Users').where({
    id: userId
  }).update({
    email: email
  });
}

// let retrieveUserId = () => {
//   return knex('Users').where({

//   }).select('id')
// }

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
  getUserById: getUserById,
  getUserByName: getUserByName,
  deleteUser: deleteUser,
  retrieveGraphId: retrieveGraphId,
  updatePassword: updatePassword,
  updateUsername: updateUsername,
  updateEmail: updateEmail
};