const crawl = require('./lib/crawl');
const post = require('./lib/post');

module.exports.handler = async () => {
  const videoLink = await crawl();
  return post(videoLink);
};
