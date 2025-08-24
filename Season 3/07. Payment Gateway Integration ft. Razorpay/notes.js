/*

1. Create an account on Razor Pay
2. It will take 3 to 4 days to verify you.
3. Make sure you have these legal pages in your live website
    --> 
        1. Return Policy
        2. Refund Policy
        3. Privacy Policy
        4. Disclaimer
        5. About & Contact


// Payment Gateway Integration ft. Razorpay

1. There are two major process of payment gateway
--> 
    a. Create an order - api - /createorder
    b. Payment Verification - api - /verifypayment
    note:
        1. We can't connect our UI direct to razor pay because it is a security risk instead we will connect to our backeend and let backend do its job
        2. To connect to razorpay we need a secret key which only accessible in backend
    
    1. First, we will create an order by clicking on the buy button to server.
    2. In server, it will connect to razorpay with secretkey and create an order and response back with orderid and then server will response back to the UI.
    3. then after payment completed razor pay automatically create payment id and signature and server will store the data of successfull or failed payment





*/