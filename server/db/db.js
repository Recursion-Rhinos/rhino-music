const knex = require('knex')({
  client: 'mysql',
  connection: { 
    host: '127.0.0.1',
    user: '<User Name>',
    password: '<Your password>',
    database: '<DB name>',
    charset: 'utf8'
  },
  useNullasDefault: true
});

knex.schema.hasTable('Users').then(function(exist) {
  if (!exist) {
    knex.schema.createTable('Users', function(user) {
      user.increments('id').primary();
      user.string('username');
      user.string('password'); //charset
      user.string('email');
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});




