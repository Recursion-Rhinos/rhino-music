module.exports = {
  spotifyAuth: {
    clientId: '795ea7dee98e48698dffc0d37aa13017',
    clientSecret: '3c989ca8e1dd4411a65f808cd70a3c44',
    scope: 'user-read-private user-read-email',
    callbackURL: 'https://rhino-music.herokuapp.com/auth/spotify/callback'
  },
  googleAuth: {
    clientID: '948319285413-gufr44vs8vsqkb8hlnj3os8t5p18p3ci.apps.googleusercontent.com',
    clientSecret: '392UkfT2FyGAxl_vXA09CECQ',
    callbackURL: "https://rhino-music.herokuapp.com/auth/google/callback"
  },
  facebookAuth: {
    clientID: '1296092313746575',
    clientSecret: 'a812d1bcd8d1c6de0afb0eb848573fcb', 
    callbackURL: "https://rhino-music.herokuapp.com"
  }
};

