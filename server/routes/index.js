import express from 'express';

var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'World' });
// });

router.get('/', (req, res) => {
  res.type('text/plain').send('My Student ID is 22278096. Welcome to Express!');
});

export default router;
