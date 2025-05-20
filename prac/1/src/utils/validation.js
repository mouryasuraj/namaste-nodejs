export const validateSignUpData = (req) =>{
    if(!req.body) {
        throw new Error("Request body is missing")
    } 

    if(Object.keys(req.body).length===0){
        throw new Error("Request body is empty")
    }

    
    


}