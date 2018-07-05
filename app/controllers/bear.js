var Bear     = require('../models/bear');

module.exports.getBears = async function(req,res,next) {

    try {
        
        //const bear = await Bear.findOne({name:'Kingfisher'});
        //res.json(bear);

        const bears = await Bear.find({});
        res.json(bears);
        

    } catch (error) {
        console.log(error);
        //this will eventually be handled by your error handling middleware
        next(error) 
    }
    
}

module.exports.saveBear = function(req, res) {

    try {
        var bear = new Bear();      // create a new instance of the Bear model
            bear.name = req.body.name;  // set the bears name (comes from the request)
            bear.price = 100;
        // save the bear and check for errors
            bear.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({ message: 'Bear created!' });
                    });
    } catch (error) {
        console.log(error);
    }
        
    }