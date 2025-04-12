/*


// Authentication, JWT and Cookies

1. Login from the browser
2. Token will be created at the server side and then wrap it inside cookie and send response back to the browser and browser will store the cookie for future use
3. whenever an api called made from the application after login, this token will send and server will validated that token and if its valid then it will send the resonse back if its not the it will throw an error 401 unauthorized.
4. server sends a token inside the cookie
5. We can also set the expirty time of a cookie and if someone hit the api and cookie is expire the it will not validated and send back response that 401 or you will be redirect to login page to login


// How to create a token

1. In /login - if user is validated then we will create a token uisng JWT(JSON web token) and will add it to cookie and response back logged in successfully
2. Add cookie to response using req.cookie(name, value, options)
3. there are lots of options are there - https://expressjs.com/en/5x/api.html#res.cookie
4. options is an object {httpOnly:true, secure:true}
5. to validate the cookies use req.cookies.name but if you directly do that you will not get the cookie instead you will get undefined because we need to parsed the cookie using third party middleware cookie-parser



// JWT
1. Token is divided into three things separated by dot(.) - https://jwt.io
    1. Header - red
    2. Payload - violet
    3. Signature - blue
2. Header - In this, type of token and signing algotithm
3. payload - actual data
4. signature - This is made by secret key to make sure the token is not tampered

    ⚙️ How JWT Works?
        1. User Login karta hai (email/password).
        2. Server check karta hai credentials aur generate karta hai JWT.
        3. Token client ko milta hai (usually stored in localStorage, cookie).
        4. Agle har request ke sath client token bhejta hai.
        5. Server token verify karta hai aur request allow karta hai.
    ⚠️ Security Considerations
        1. JWT ko kabhi bhi localStorage me store na karo agar XSS ka risk ho — use HttpOnly Cookies.
        2. Use strong secret key.
        3. Token me sensitive info mat daalo (like passwords).
        4. Token expiry (exp) zarur lagao.
5. Create a auth middleware and validate the token then user and then move to request handler
6. Expire token: {expiresIn:'1h'}
7. Expire cookie: {expires:new Date(Date.now()+300000)}


//some mongoose methods
1. We can create methods in userScheman and put the logic of creating token in that
2. ex: 
    // Always assigned a normal function. Do not user arrow function because we are going to use "this" keyword inside this and "this" is undefined in arrow function

    userSchema.methods.getJwt = async function()=>{
        const user = this;
            const userPayload = {
            email: user.email,
            gender: user.gender,
            age: user.age,
            photoUrl: user.photoUrl,
        }
        const token = jwt.sign(userPayload, process.env.SECRETKEY, {expiresIn:"1d"})
        return token
    }
3. We can call it as helper function
4. We can create helper function if that logic is related to that schema




Questions:
1. What do you mean by login?
2. How authentication works inside an application?
3. Read documentation of expressjs
4. What is cookie?
    🔐 HttpOnly Cookie Kya Hai?
            HttpOnly cookie ek secure wali cookie hoti hai jo sirf server access kar sakta hai. JavaScript se ye nahi milti. Iska main kaam hota hai — XSS (Cross Site Scripting) attack se bachaav.

    🤔 Simple Language Mein:
            Agar tu client side (jaise browser) pe JavaScript se cookie read karna chahta hai, aur wo cookie HttpOnly set hai... to JavaScript bolti hai: "Bhai mujhe nahi mil sakti ye!"

    Sirf server hi is cookie ko dekh sakta hai.

    🔥 Example:
            res.cookie("token", "abc123", {
                httpOnly: true,
                secure: true,
                maxAge: 3600000 // 1 hour
            });
    🧠 Iska matlab:
        1. token naam ki cookie banayi
        2. httpOnly: true matlab JavaScript ko access nahi milega
        3.  secure: true matlab sirf HTTPS pe send hogi

    🛡️ Kyun zaroori hai?
        Maan lo kisi ne XSS attack kiya aur JS mein likha:
            console.log(document.cookie)
        Agar cookie httpOnly set nahi hoti, to attacker uska value le jaata easily.
        Agar httpOnly hoti, to browser kehta:
            "Bhai yeh tere bas ki baat nahi 😎, sirf server se hi baat hogi."

    ✅ Toh short mein:
        HttpOnly cookie ek aisi cookie hai jo sirf server side pe accessible hoti hai, JavaScript se nahi.
        Ye mostly auth tokens ya sensitive data ko secure rakhne ke liye use hoti hai.

        Agar secure authentication banana hai, to HttpOnly cookie must hai!
        Chahe JWT use karo ya session — server se bhejna, JS se mat chhedna! 😅




*/
