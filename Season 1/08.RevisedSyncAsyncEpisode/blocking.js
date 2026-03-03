const crypto = require("crypto");
console.log("Starting");  //1

crypto.pbkdf2Sync("SurajMourya", "123123", 5000000, 50, "sha512");
console.log("pbkdf2 sync called"); //2

setTimeout(() => {
    console.log("Settimeout called"); // 5
}, 0);

crypto.pbkdf2("SurajMourya", "123123", 5000000, 50, "sha512", (err, key) => {
  if (err) {
    console.log("Errr getting while hashing password");
    return;
  }
  console.log("Key is Generated successfully", key); // 6
});


const add = (a,b)=>{
    const result = a + b;
    return result;
}
console.log("Add: ", add(2,3)); //3
console.log("Ending"); //4
