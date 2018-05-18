var express = require('express');
var router = express.Router();
var user = require('./users.controller')

router.get('/',user.getUsers)

module.exports = router;