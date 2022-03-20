

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



let answerController = require('../controllers/answer');


/* GET Route for displaying the view page - CREATE Operation */
router.get('/', answerController.displayAnswer);


/* GET Route for displaying the create page - CREATE Operation */
router.get('/answer/:id', answerController.displayAnswerPage);  


/* POST Route for processing the create page - CREATE Operation */
router.post('/answer/:id',  answerController.processAnswerPage);
    

/* GET Route for displaying the update page - UPDATE Operation */
//router.get('/update/:id', answerController.displayUpdatePage);
     

/* POST Route for processing the update page - UPDATE Operation */
//router.post('/update/:id', answerController.processUpdatePage);


module.exports = router;
