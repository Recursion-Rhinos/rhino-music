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
      user.string('google');
      user.string('facebook');
      // user.string('graph_id');
    

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Songs').then(exist => {
  if (!exist) {
    knex.schema.createTable('Songs', (song) => {
      song.increments('id').primary();    
      song.text('song');
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Playlist').then(exist => {
  if (!exist) {
    knex.schema.createTable('Playlist', (table) => {
      table.increments('id').primary();
      table.string('Name');
      table.integer('UserId').unsigned();
      table.foreign('UserId').references('Users.id');
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('PlaylistSongs').then(exists => {
  if(!exists) {
    knex.schema.createTable('PlaylistSongs', (table) => {
      table.increments('id').primary();
      table.integer('PlaylistId').unsigned();
      table.integer('SongId').unsigned();
      table.foreign('PlaylistId').references('Playlist.id');
      table.foreign('SongId').references('Songs.id');
    }).then(table => {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('Events').then(exist => {
  if (!exist) {
    knex.schema.createTable('Events', (table) => {
      table.increments('id').primary();
      table.string('event',1000);
    }).then(table => {
      console.log('Created Table:', table);
    });
  }
});

knex.schema.hasTable('EventsUsers').then(exists => {
  if(!exists) {
    knex.schema.createTable('EventsUsers', (table) => {
      table.increments('id').primary();
      table.integer('EventsId').unsigned();
      table.integer('UserId').unsigned();
      table.foreign('EventsId').references('Events.id');
      table.foreign('UserId').references('Users.id');
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
      message.integer('UserId').unsigned();
      message.foreign('UserId').references('Users.id');

    }).then(table => {
      console.log('Created Table', table);
    });
  }
});



module.exports = knex;



