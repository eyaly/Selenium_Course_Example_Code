module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'firefox',
  viewportWidth: Math.floor(process.env.VIEWPORT_WIDTH) || 1024,
  viewportHeight: Math.floor(process.env.VIEWPORT_HEIGHT) || 768,
  host: process.env.HOST || 'localhost',
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    platform: process.env.PLATFORM || 'Windows 7',
    browserName: process.env.BROWSER || 'internet explorer',
    version: process.env.BROWSER_VERSION || '11.0',
  },
}
