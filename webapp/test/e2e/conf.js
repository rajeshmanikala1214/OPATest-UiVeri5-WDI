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
            binary: '/usr/bin/google-chrome', 
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }],
    // Correct path to your spec files
    specs: [ 'webapp/test/e2e/*.spec.js' ],
};