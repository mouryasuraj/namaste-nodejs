const { SESClient } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_ACCESS_KEY,
  },
});


module.exports = sesClient