const authAdmin = (req,res,next) =>{
    console.log("Authenticating admin......",req.headers);
    
    const token = req.headers.token;
    const isAdminValid = token==="suraj"
    if(!isAdminValid){
        res.status(401).send("Unauthorized. Token is not valid")
    }else{
        next()
    }
}
const authUser = (req,res,next) =>{
    console.log("Authenticating user......");
    
    const token = "suraj";
    const isAdminValid = token==="suraj"
    if(!isAdminValid){
        res.status(401).send("Unauthorized. Token is not valid")
    }else{
        next()
    }
}

module.exports = {
    authAdmin,
    authUser
}