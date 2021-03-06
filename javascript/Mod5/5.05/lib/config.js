// filename: lib/config.js
module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'firefox',
  host: process.env.HOST || 'saucelabs',
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    browserName: process.env.BROWSER_NAME || 'internet explorer',
    browserVersion: process.env.BROWSER_VERSION || '11.0',
    platformName: process.env.PLATFORM_NAME || 'Windows 7',
  },
  sauceW3C: {
    "browserName": process.env.BROWSER_NAME || 'chrome',
    "browserVersion": process.env.BROWSER_VERSION || "75.0",
    "platformName": process.env.PLATFORM_NAME || "Windows 7",
    "sauce:options": {
      "username": process.env.SAUCE_USERNAME,
      "accessKey": process.env.SAUCE_ACCESS_KEY,
      "tunnelIdentifier": process.env.SAUCE_TUNNEL,
    }
  },

}