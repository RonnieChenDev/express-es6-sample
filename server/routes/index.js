import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'My Student ID is 22278096. Welcome to Express!',
  });
});

export default router;
