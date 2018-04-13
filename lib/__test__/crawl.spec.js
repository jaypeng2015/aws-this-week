const crawl = require('../crawl');

describe('lib/crawl', () => {
  it('should get the latest video link', async () => {
    const video = await crawl();
    expect(video.match(/https:\/\/www\.youtube\.com\/watch\?v=\w{11}&&list=PLI1_CQcV71RmeydXo-5K7DAxLsUX6SVhL/));
  });
});
