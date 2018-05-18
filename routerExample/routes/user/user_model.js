var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!"); 
});

var login_schema = mongoose.Schema({
    username:{ type: String, required: true },
    password:{ type: String, required: true },
    phone:{ type: Number }
  })

  var Log = mongoose.model('login',login_schema);
  module.exports=Log;