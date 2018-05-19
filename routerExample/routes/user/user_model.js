// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!"); 
// });  

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true
});


var newUserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required',
   
  },
  password: {
    type: String
  },
  name:{
    type: String, 
    unique: true
  },
  phone: {
    type: Number,
    unique: true
  },

});

newUserSchema.pre('save', function(next) {
  var user = this;
  if (user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err) }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) { return next(err) }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

newUserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err) }
    callback(null, isMatch);
  });
}

module.exports = mongoose.model('userNew', newUserSchema);
