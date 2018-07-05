var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/books', function(req, res, next) {
  res.json({books: [
        {name: 'Applied Science 1'},
        {name: 'Applied Science 2'}
    ]});
});

router.get('/authors', function(req, res, next) {
    res.json({books: [
          {name: 'Shrikant'},
          {name: 'Aarti'}
      ]});
  });

module.exports = router;
