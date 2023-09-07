const login = (req,res) =>{
    const age = req.params.age;
    if(age>=18){
        return res.send("You can login");
    }
    res.send("You can't login")
}
const signin = (req,res) =>{
    res.send("This is sign page");
}
const logout = (req,res) =>{
    res.send("This is logout page");
}
module.exports= {login,logout,signin}