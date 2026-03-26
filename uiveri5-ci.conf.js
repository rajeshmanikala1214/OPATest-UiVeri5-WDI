exports.config = {
    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: process.env.CHROME_BIN || '/ms-playwright/chromium-1208/chrome-linux/chrome',
            args: [
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    },

    framework: 'mocha',
    specs: ['webapp/test/e2e/*.js']
};