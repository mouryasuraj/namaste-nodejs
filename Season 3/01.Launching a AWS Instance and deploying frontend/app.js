// Launching a AWS Instance and deploying frontend


/*

1. Create AWS account and setup basic info and launce an instance
2. Create pem file for login
3. Give permission to the file chmod 400 secret.pem
4. enter into your instance by using command
--> ssh -i "mysecret.pem" ubuntu@ec2-13-235-83-215.ap-south-1.compute.amazonaws.com

    ssh --> Secure Shell 
    -i  --> identity file
5. Clone the UI and Backend project in the EC2 Instance


// Deploy UI

1. Go to the UI path
2. Install the dependencies - npm i
3. Build the application - npm run build
4. Install nginx
5. copy the content of dist folder to nginx http - /var/www/html
6. Enable the port 80  







// Ubuntu

cmd - sudo apt update

    1. sudo - run command as a superadmin
    2. apt - Advanced Package Tool
    3. update - update tell apt to refresh its list of available packages and their versions
    4. ✅ Why: Ensures you get the latest version of Nginx and other dependencies from the repositories.

cmd - sudo apt install nginx -y
    1. install nginx tells apt to download and install the Nginx package.
    2. -y automatically confirms "yes" to any prompts during installation.

cmd - sudo systemctl enable nginx
      sudo systemctl start nginx
      1. systemctl is a tool to control systemd services (like Nginx).
      2. enable nginx makes Nginx start automatically when the system reboots.
      3. start nginx starts the Nginx server now.
cmd - sudo systemctl status nginx
        1. This shows the current status of the Nginx service — running, stopped, failed, etc.

cmd - sudo ufw allow 'Nginx Full'
        1. ufw = Uncomplicated Firewall, a user-friendly tool to manage firewall rules.
        2. 'Nginx Full' opens port 80 (HTTP) and port 443 (HTTPS) so web traffic can reach your server.
cmd - sudo ufw status

*/

