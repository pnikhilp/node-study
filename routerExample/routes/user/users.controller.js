var express = require('express');
var router = express.Router();

const User = require('./user_model');

exports.getUsers = (request, response) => {
  console.log('rerached')
  response.status(200).json({
        name:'foo'
      })
  // User.find(function(err,users){
      
  //             if(err)throw err;
      
  //             res.render('users',{users:users})
  //             res.send(users)
      
  //         })
  //response.send('hello')
}


// router.get('/', function(req, res, next) {

//   res.status(200).json({
//     name:'foo'
//   })
//   // res.send('respond with a resource');
// });

// module.exports = router;
