var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

var User = require('../models/user');

passport.use(new BasicStrategy(
  function(username, password, callback) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return callback(err); }

      if (!user) { return callback(null, false); }

      user.verifyPassword(password, function(err, isMatch) {
        
        //Error
        if (err) { return callback(err); }

        // Fail
        if (!isMatch) { return callback(null, false); }

        // Success
        return callback(null, user);
        
      });
    });
  }
));


exports.isAuthenticated = passport.authenticate('basic', { session : false });
