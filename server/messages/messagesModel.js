const knex = require('../database/schema.knex.js');

let getByUserId = (UserId) => {
  return knex('Messages')
  .where('UserId', UserId)
  .first(); 
};

let getAll = () => {
  return knex('Messages');
};

let deleteMessage = (UserId) => {
  return knex('Messages').where('UserId', UserId)
  .select('id')
  .del();
};


module.exports = {
  getByUserId: getByUserId,
  getAll: getAll,
  deleteMessage: deleteMessage,
};

