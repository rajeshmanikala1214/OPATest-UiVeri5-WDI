exports.config = {
    profile: 'integration',
    baseUrl: 'http://localhost:8080/index.html',
    // REPORTERS ARE DEFINED HERE, NOT IN THE CLI
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
            args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
        }
    }],
    specs: ['*.spec.js']
};