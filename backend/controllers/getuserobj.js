const decodeJwt=require('../helpers/jwtdecoder')
const schema=require('../schemas/schema')
const Userdetails=async(req,res)=>{
  console.log(req.headers.authorization);
  try{
     const decodedId= await decodeJwt(req.headers.authorization)
    
     if (decodedId && decodedId.id) {
       const user = await schema.findById(decodedId.id);
        if (user) {
               
               res.status(200).json({ status: 200, msg: 'ok', user:user });
        } else {
                  res.status(404).json({ message: 'User not found' });
        }
      } else {
           res.status(401).json({ message: 'Invalid token' });
      }
     

  }catch(err){
     console.log(err)

  }

}
module.exports = Userdetails;