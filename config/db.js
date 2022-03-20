/*
 Group Name: Modern Developers
Student Name - Student ID
1. Meetkumar Patel - 301220141
2. Prit Patel - 301219548
3. Kinjalkumari Dhimmar - 301239901
4. Pratiksinh Makwana - 301219863
5. Sohyeon Song - 301145311
*/


let DB_CONNECTION = "mongodb+srv://admin:admin@group05.5btyw.mongodb.net/myFirstDatabase"

//database setup
let mongoose = require('mongoose');



module.exports = function(){
    
    //connect to DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}

