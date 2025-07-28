/*



// Sending Emails using Amazon SES

1. First go to IAM(Identity Access Management) in AWS account
--> This give you permissions to use AWS services
2. We are creating a user because this user will need to use Amazon Simple Email Service(SES)
--> Step to create user
    --> Go to AWS account and search IAM
    --> Go to user --> Click on create user
    --> Give a user name
    --> Give access to a particular service like Amazon SES
3. After creating user, goto Amazon SES and create an Identity 
--> 1. Verify by providing the domain
    2. Wait until its verified
    3. Add CNAME to your domain registrar like cloudflare 
    4. Initially, you are using sandbox which is limited, request for production
4. Create access key to use in writing code




*/