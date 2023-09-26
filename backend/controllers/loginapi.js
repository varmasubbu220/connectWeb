const schema = require('../schemas/schema');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const {loginAuthSchema}=require('../schemas/joischema')
var bcrypt = require('bcryptjs');
const Login = async (req, res) => {   
   const email = req.body.email; 
    const password = req.body.password;
   
       
    try {
        const joiValidation= await loginAuthSchema.validateAsync(req.body)
        if(joiValidation){
            const isuser = await schema.findOne({ $or: [{ email: email }, { mobile: email }] });
            
           let status=isuser?await bcrypt.compare(password,isuser.password):""
    
            if (status && isuser) {
                const secretkey = process.env.JWT_KEY;
                const token = jwt.sign({ id: isuser._id }, secretkey, { expiresIn: '10h' }); 
                 res.status(200).json({ status: 200, msg: 'ok', token: token });
            } else {
                res.status(200).json({ status: 401, msg: "unauthorized" });
            }
        }else{
            res.status(400).json({ status: 401, msg: "client error" }); 
        }
   
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
    }
};

module.exports = Login;
