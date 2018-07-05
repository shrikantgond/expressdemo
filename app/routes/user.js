var express = require('express');
var router = express.Router();

var consts = require('../constants');

router.get('/', function(req, res, next) {
    res.json({Apis: [
          {users: consts.getURL(req)+'/users'},
          {students: consts.getURL(req)+'/students/'+consts.port}
      ]});
  });

/* GET books listing. */
router.get('/users', function(req, res, next) {
  res.json({books: [
        {name: 'Applied Science 1'},
        {name: 'Applied Science 2'}
    ]});
});

router.get('/students', function(req, res, next) {
    res.json({books: [
          {name: 'Shrikant'},
          {name: 'Aarti'}
      ]});
  });

module.exports = router;
