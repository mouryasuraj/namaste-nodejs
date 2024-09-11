// Libuv and async IO

// JavaScript recap
 /*
 
 1.JS is a synchronous single threaded language
 2.Synchronous and Asynchronous in JS
 --> 
    1.Synchronous
        a. In Synchronous, the next line of code will only execute after the completion of the current line of code.
        b. This is a blocking queue.
        c. Ex: 
            const a = 1234567;
            const b = 123;
            function multiply(x,y){
                return a * b
            }
            multiply(a,b)  
        d. These task doesn't block the code
    2.Asynchronou
        a. In Asynchronous, we can execute time consuming code easily
        b. This is a non-blocking code
        c. Ex:
            https.get("https://api.fbi.com", (res) =>{
                console.log("Secret Key: ", res.secretkey)
            })

            fs.readFile("./gossip.txt", "utf8", (data)=>{
                console.log("File data", data)
            })

            setTimeout(()=>{
                console.log("wait here for 5 seconds")
            },5000)
        d. These task can take time


 
 */