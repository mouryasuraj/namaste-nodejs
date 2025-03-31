const crypto = require("crypto");
console.log("Starting");

crypto.pbkdf2Sync("SurajMourya", "123123", 5000000, 50, "sha512");
console.log("pbkdf2 sync called");

setTimeout(() => {
    console.log("Settimeout called");
}, 0);

crypto.pbkdf2("SurajMourya", "123123", 5000000, 50, "sha512", (err, key) => {
  if (err) {
    console.log("Errr getting while hashing password");
    return;
  }
  console.log("Key is Generated successfully", key);
});


const add = (a,b)=>{
    const result = a + b;
    return result;
}
console.log("Add: ", add(2,3));
console.log("Ending");
