module.exports = {
  spotifyAuth: {
    clientId: '795ea7dee98e48698dffc0d37aa13017',
    clientSecret: '3c989ca8e1dd4411a65f808cd70a3c44',
    scope: 'user-read-private user-read-email',
    callbackURL: 'http://localhost:3005/auth/spotify/callback'
  },

  'googleAuth' : {
    'clientID'      : '948319285413-spqrjjdo0rdq4ufeq7nf8c0os2jc93ng.apps.googleusercontent.com',
    'clientSecret'  : 'JFFXT0or9839ef3rPfkWhFPM',
    'callbackURL'   : 'http://localhost:3005/auth/google/callback'
  }
};