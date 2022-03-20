
let mongoose = require('mongoose');
mongoose.Schema.Types.Boolean.convertToFalse.add('');

//create a model class
let  questionsModel = mongoose.Schema({
  
  //question: String,
  question: String,
  questionType: Boolean  ,
  surveyID: String,
  author: String,
  questionsAnswer: String
},
{
    collection: "questions"
});



module.exports = mongoose.model('Questions',   questionsModel);


