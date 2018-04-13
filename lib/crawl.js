const cheerio = require('cheerio');
const request = require('request-promise-native');

const YOUTUBE_LINK = 'https://www.youtube.com/playlist?list=PLI1_CQcV71RmeydXo-5K7DAxLsUX6SVhL';

module.exports = async () => {
  try {
    const html = await request.get(YOUTUBE_LINK, { timeout: 5000 });
    const $ = cheerio.load(html);
    const latest = $('#pl-load-more-destination').children()[0].attribs['data-video-id'];
    return `https://www.youtube.com/watch?v=${latest}&&list=PLI1_CQcV71RmeydXo-5K7DAxLsUX6SVhL`;
  } catch (err) {
    console.log('Error fetching link', { err });
    return 'Failed to get the video for this week';
  }
};
