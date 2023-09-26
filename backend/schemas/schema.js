const mongoose=require('mongoose')
const newSchema = new mongoose.Schema({
  username:{
    type:String,
    required: true,
  },
   email: {
      type: String,
      required: true,
    },
    password:{
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      default:"",
      required :true,
    },
    wallet:{
 type:Number,
 default:0,
  },  
    
  });
  module.exports=mongoose.model('schema',newSchema)