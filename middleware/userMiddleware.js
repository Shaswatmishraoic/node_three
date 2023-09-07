const validate = (req,res,next)=>{
    const age = req.params.age;
    console.log(age)
    if(req.params.age>=18){
        next();
    }
    else{
        res.send({msg:"Can't logout"})
    }
}
module.exports = validate;