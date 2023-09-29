const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
  country: {type: String, required: true }, 
  state: {type: String , required: true},
  placeName:{type:String, required: true},
  description:{type: String , required: true},
  imgSrc:{type:String, required: true},
  
}
);




module.exports= mongoose.model('place', placeSchema);   // name is important here as in DB its stored in pural form with lowaecasw

