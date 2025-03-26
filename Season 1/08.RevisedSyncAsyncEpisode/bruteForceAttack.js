const crypto = require("crypto")


const passwordToGuess = ["123456", "786786", "password", "admin", "09876543"]

const targetHash = crypto.createHash('sha256').update("admin").update("suraj").digest("hex")

console.log("tying to hack the password");


for(let i=0; i<passwordToGuess.length; i++){
    let hash = crypto.createHash('sha256').update(passwordToGuess[i]).update("suraj").digest("hex")

    if(hash===targetHash){
        console.log("Password found", passwordToGuess[i]);
        break
    }else{
        console.log("Not matched");
    }
}