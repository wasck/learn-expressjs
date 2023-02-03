var express = require('express');
var router = express.Router();

router
  .route('/')
  .get((req, res, next) => {
    const title = 'Welcome to expressjs test environment'
    res.render('index', { title });
  });


module.exports = router;
