var express = require('express');
var router = express.Router();

var consts = require('../constants');
var auth = require('../middlewares/auth')

/* GET books listing. */
router.get('/',auth.isAuthenticated, function(req, res) {
    res.json({Apis: [
        {users: consts.getURL(req)+'/library'},
        {students: consts.getURL(req)+'/user'}
    ]});  
});

router.use('/library',auth.isAuthenticated, require('../routes/library'));
router.use('/user',auth.isAuthenticated, require('../routes/user'));
router.use('/bear',auth.isAuthenticated, require('../routes/bears'));


module.exports = router;
