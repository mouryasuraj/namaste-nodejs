/*


//Scheduling Cron Jobs

1. We will use cron job to set a time to run the code on that time example: if i have schedule to run the code at 8 AM everyday then it will run the code at 8AM every day.

2. To implement this feature we need npm package node-cron - npm i node-cron

3.  # ┌────────────── second (optional)
    # │ ┌──────────── minute
    # │ │ ┌────────── hour
    # │ │ │ ┌──────── day of month
    # │ │ │ │ ┌────── month
    # │ │ │ │ │ ┌──── day of week
    # │ │ │ │ │ │
    # * * * * * *

    1. Here * means every
    2. If i want to run a code in every second then i'll use this syntax = * * * * * *
    3. If i want to run a code in every 3 second then i'll use with forward slash = "star/3 * * * * *
    4. There is a website crontab guru to understand the syntax of cronjob
    


*/