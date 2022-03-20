

let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
  name: String,
  displayName: String,
  author: String,
  question: String,
  startDate: Date,
  endDate: String,
  active: Boolean,
  surveyID: String
},
{
    collection: "survey"
});



module.exports = mongoose.model('Survey', surveyModel);


