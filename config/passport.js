const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '752554154251-5c85on9rk0glimkt9j88ner6lapgddbq.apps.googleusercontent.com',
    clientSecret: 'zdoxMj-avU0CyVPSx9CBRE2s',
    callbackURL: 'http://localhost:8000/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
  }));
  
  // serialize user when saving to session
  passport.serializeUser((user, serialize) => {
    serialize(null, user);
  });
  
  // deserialize user when reading from session
  passport.deserializeUser((obj, deserialize) => {
    deserialize(null, obj);
  });