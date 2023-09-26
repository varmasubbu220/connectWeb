const schema=require('../schemas/schema')


const userdata=async(identity)=>{

   
try{
    let user = await schema.findOne({ $or: [{ email: identity },{ mobile: identity }] });

 
     if(user){
        return user;
    }else{
        return false;
    }
}
catch(err){
 return false
}
}
module.exports= userdata;