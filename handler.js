const crawl = require('./lib/crawl');
const post = require('./lib/post');

module.exports.handler = async () => {
  const video = await crawl();
  return post(video);
};
