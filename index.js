const express = require("express");
const  route  = require("./router/user");
const app = express();
const port = 4000;
const vali= (req,res,next)=>{
   console.log("all ok here")
   next()
}
app.use(vali)
app.use("/user",route)

app.listen(port,()=>{
    try{
        console.log(`fine here:${port}`)
    }
    catch(err){
        console.log(`err:${err}`)
    }
})
