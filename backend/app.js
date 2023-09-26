const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT=process.env.PORT || 8080
const schema = require('./schemas/schema');
const ConnectToDataBase = require('./databases/databaseconnection');
const Mysql=require('./controllers/mysql')
const cors = require('cors');

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

const router=require('../backend/routes/route')
app.use('/user',router)


const Start_connection=()=>{ 
try{
  app.listen(PORT, () => {
    ConnectToDataBase(); 
    console.log(`Server running on http://localhost:${PORT}`);
    });
}catch(err){
  console.log(err)
}
}
Start_connection()
 