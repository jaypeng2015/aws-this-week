const request = require('request-promise-native');

module.exports = text =>
  request.post({
    url: process.env.WEBHOOK_URL,
    json: true,
    body: { text },
  });
