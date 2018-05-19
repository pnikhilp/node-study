var express = require('express');
var router = express.Router();
var user = require('./users.controller')

router.get('/',user.getUsers)
router.post('/add_user',user.addUser)
router.delete(`/delete/:id`,user.deleteUser)

module.exports = router;