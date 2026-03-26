exports.config = {
    profile: 'integration',
    baseUrl: 'http://localhost:8080/index.html',

    reporters: [
        {
            name: 'junit',
            reportDir: 'target/report',
            reportName: 'uiveri5-results'
        }
    ],

    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            binary: process.env.CHROME_BIN || '/ms-playwright/chromium-1145/chrome-linux/chrome',
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }],

    specs: [ './webapp/test/e2e/*.spec.js' ],
};