const config = require('./config');
const knex = require('knex')({

  client: 'mysql',
  connection: { 
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    charset: config.charset
  },
  useNullasDefault: true
});

knex.schema.hasTable('Users').then(exist => {
  if (!exist) {
    knex.schema.createTable('Users', (user) => {
      user.increments('id').primary();
      user.string('username');
      user.string('password'); //charset
      user.string('email');
      user.string('genres');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Songs').then(exist => {
  if (!exist) {
    knex.schema.createTable('Songs', (song) => {
      song.increments('id').primary();    
      song.string('song');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Playlist').then(exist => {
  if (!exist) {
    knex.schema.createTable('Playlist', (table) => {
      table.increments('id').primary();
      table.foreign('SongsId').references('Songs.song_id_in_songs'); //or references('id').inTable(Songs);
      table.foreign('UserId').references('Users.user_id_in_users');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Messages').then(exist => {
  if (!exist) {
    knex.schema.createTable('Messages', (message) => {
      message.increments('id').primary();
      message.string('text');
      message.string('genre');
      message.foreign('UserId').references('Users.user_id_in_users');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

module.exports = knex;



