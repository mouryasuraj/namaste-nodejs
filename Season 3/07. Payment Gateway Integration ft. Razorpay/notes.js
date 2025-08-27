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



  Note:
    1. We have to add this script in index.html file to include razor pay ui in the application
    2. In React, use const rzp = window.Razorpay(options)
                    rzp.open()
    3. We can pass this option:
        const options = {
        key: 'YOUR_KEY_ID', // Replace with your Razorpay key_id
        amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: 'order_IluGWxBm9U8zJ8', // This is the order_id created in the backend
        callback_url: 'http://localhost:3000/payment-success', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>


*/