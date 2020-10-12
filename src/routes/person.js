let express = require('express');

let router = express.Router();

// QueryString = query property on the request object
// localhost:3000/person?name=jay
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have resquested a person ${req.query.name}`);    
    }
    else{
        res.send('You have resquested a person');
    }    
});

// Params property on the request object
// localhost:3000/person/jay
router.get('/person/:name', (req, res) => {    
    res.send(`You have resquested a person ${req.params.name}`);
});

// Test force error - 500
router.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
});
 



module.exports = router;