module.exports = {
  spotifyAuth: {
    clientId: '795ea7dee98e48698dffc0d37aa13017',
    clientSecret: '3c989ca8e1dd4411a65f808cd70a3c44',
    scope: 'user-read-private user-read-email',
    callbackURL: 'http://localhost:3005/auth/spotify/callback'
  },
  googleAuth: {
    clientID: '948319285413-if84g6741rt1u3nm7dpd9ip449jq4dh2.apps.googleusercontent.com',
    clientSecret: 'CYGv1MNksTqrGABE0AZbvWk6',
    callbackURL: 'http://localhost:3005/auth/google/callback'
  },
  facebookAuth: {
    clientID: '1296092313746575',
    clientSecret: 'a812d1bcd8d1c6de0afb0eb848573fcb', 
    callbackURL: 'http://localhost:3005/auth/facebook/callback'
  }
};

