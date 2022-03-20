//Group Name : Modern Developers


let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET about page. */
router.get('/about', indexController.about);

/* GET services page. */
// router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);



module.exports = router;
