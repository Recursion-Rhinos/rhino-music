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
      table.foreign('SongsId').references('Songs.song_id_in_songs');
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
      table.foreign('UserId').references('Users.user_id_in_users');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

module.exports = knex;



