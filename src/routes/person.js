let express = require('express');

let router = express.Router();

router.get('/person', (req, res) => {
    res.send('You have resquested a person');

});

module.exports = router;