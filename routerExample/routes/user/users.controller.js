var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');

const User = require("./user_model");

exports.getUsers = (request, response) => {

  console.log("rerached");
  
  response.status(200).json({
    name:'foo'
  })
  // User.find({}, function(err, users) {
 
  //   response.send(users)
  // })

};

exports.addUser = (req,res) =>{
  
  console.log('-----post----',req.body)
  
  var myData = new User(req.body);

    myData.save( (err, myData)=> {
      if (err) {
        res.status(400).send("unable to save");
      }
      res.send('Successfully added')
    });
}

exports.deleteUser = (req,res) =>{

  console.log('-----delete----',req.params.id)

  user_id = req.params.id;

  User.findById(user_id, (err, doc)=> {

    if (err) {
        res.send('Error..')
    }

    doc.remove(()=>{
      res.status(200).send('Deleted')
    }); 

 })
 
}
  
  // User.find(function(err,users){

  //             if(err)throw err;

  //             res.render('users',{users:users})
  //             res.send(users)

  //         })
  //response.send('hello')