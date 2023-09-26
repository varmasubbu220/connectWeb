
require("dotenv").config();
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
 const ConnectToDataBase= async()=>{
    try{
             await  mongoose.connect(mongoString)
         console.log("connected mongoo database")
    }catch(err){
    console.log(err)
    }
   

}
module.exports=ConnectToDataBase
