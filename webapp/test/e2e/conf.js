exports.config = {
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: process.env.CHROME_BIN,   
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    }
  },

  specs: ['./specs/*.js'],

  framework: 'jasmine'
};