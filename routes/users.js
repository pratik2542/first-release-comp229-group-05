// Group Name: Modern Developers
// Student Name - Student ID
// 1. Meetkumar Patel - 301220141
// 2. Prit Patel - 301219548
// 3. Kinjalkumari Dhimmar - 301239901
// 4. Pratiksinh Makwana - 301219863
// 5. Sohyeon Song - 301145311

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')


router.get('/', userController.user);


//user
router.get('/pratik', userController.pratik);


// login
router.get('/login', userController.renderlogin);
router.post('/login', userController.login);

// register
router.get('/register', userController.renderregister);
router.post('/register', userController.register);


router.get('/ContactList', userController.ContactList);



//  logout
router.get('/logout', userController.logout);

module.exports = router;