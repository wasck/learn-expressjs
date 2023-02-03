var express = require('express');
var router = express.Router();
let { getUsers, getUserById, deleteById } = require('../services/users.service.js');

/* GET users listing. */
router
  .route('/')
  .get((req, res, next) => {
    res.send(getUsers());
    // res.render('users', { users: getUsers() });
  });

router
  .route('/:userId')
  .get((req, res, next) => {
    const { userId: id } = req.params;

    res.send(getUserById(id));
  })
  .delete((req, res, next) => {
    const { userId: id } = req.params;

    const items = deleteById(id);
    res.send({ operation: req.method, id, items });
  });

module.exports = router;
