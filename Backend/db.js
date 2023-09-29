const mongoose = require('mongoose');


const mongoURL="mongodb://127.0.0.1:27017/tourism";     //get tourism database

const connectToMango= ()=>{
    let connect=  mongoose.connect(mongoURL);

     connect.then(()=>{console.log("Connected to mangoose successfully ");}).catch(()=>{console.log('DB is not connected');})
   
}

module.exports= connectToMango;