var knex = require('../database/schema.knex.js');
//1 Function for saving username, password, email and genres
//1 Function for get all data back
//Graph => getGraphId(userId) => return GraphId!!!
var storeUser = (username, password, email, genre = 'Hip-Hop') => {
  return knex('Users').insert({ 
    username: username, 
    password: password,
    email: email,
    genres: genre
  }); //resolve with promise in the controller
   // .then(storedUser => {
   //   console.log(storedUser);
   //   return storedUser;
   // });
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