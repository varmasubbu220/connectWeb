const schema=require('../schemas/schema')
const {registerAuthSchema}=require('../schemas/joischema')
const Register=async(req,res)=>{
    let user=req.body;

  try{
    const joiValidation= await registerAuthSchema.validateAsync(req.body)
    if(joiValidation){
    var isuser= await schema.findOne({
      $or: [{ email:user.email }, { mobile:user.mobile }],
    })
  }else{
    await res.status(401).json({msg:"client err"})
  }
    if(isuser){
      await  res.status(409).json({ error: 'User already exists' });
    }
    else{
      const obj= new schema({
        username:user.username,
        email:user.email,
        password:user.password,
        mobile:user.mobile,
        wallet:0
      });
      obj.save()
      await res.status(201).json({msg:"data inserted"})
    }
  }catch(err){
    await res.status(401).json({msg:"client err"})
  }
  
    

 
}
module.exports=Register;