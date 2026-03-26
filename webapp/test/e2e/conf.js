exports.config = {
    profile: 'integration',

    baseUrl: 'http://localhost:8080/index.html',

    reporters: [
        {
            name: 'junit',
            reportDir: '.',
            reportName: 'uiveri5-report'
        }
    ],

    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }],

    specs: ['webapp/test/e2e/*.spec.js']
};