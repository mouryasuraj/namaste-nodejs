/*



// Nginx & Backend Node App Deployment

1. Run application in background using PM2(Process Manager 2). here 2 indicates version
2. PM2 help to manage application in background, it will restart the application if it crash.
3. npm i pm2 --g and then hit the cmd - pm2 start npm -- start
4. PM2 commands:
    - pm2 logs application-name - It will show the logs of a particular application
    - pm2 flush application-name - This cmd will clear the logs
    - pm2 start app.js -	Start the app.
    - pm2 list -	List all running processes.
    - pm2 stop app -	Stop the app.
    - pm2 restart app -	Restart the app.
    - pm2 delete app -	Delete the app from PM2.
    - pm2 logs - View logs.
    - pm2 monit - Monitor CPU and memory usage.
    - pm2 startup - Setup PM2 to run on system boot.
    - pm2 save - Save current process list.


// Nginx

    1. http://3.110.48.254 - devtinder.com
    2. http://3.110.48.254:3000 - devtinder.com/api
    3. We will configure the above using nginx proxy pass
    4. configure nginx in /etc/nginx/sites-available/default
    --> server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        root /path/to/your/frontend/build;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

    5. after adding configuration restart the nginx - sudo systemctl restart nginx






 */