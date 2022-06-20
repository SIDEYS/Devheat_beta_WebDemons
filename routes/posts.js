const express = require("express");
const route = express.Router();

//Routes


router.get('/', (req, res) => { res.send('We are on posts page');
 }); 


 module.exports = router;