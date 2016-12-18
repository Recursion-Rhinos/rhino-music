const knex = require('knex')({
  client: 'mysql',
  connection: { 
    host: '127.0.0.1',
    user: '<User Name>',
    password: '<Your password>',
    charset: 'utf8'
  }
});
