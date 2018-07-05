var express = require('express');
var router = express.Router();

var bearController = require('../controllers/bear')
var handlers = require('../middlewares/req-handlers')
// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')
// create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(bearController.saveBear);

    router.get('/bears', handlers.asyncHandler(bearController.getBears));
    

    
module.exports = router;
