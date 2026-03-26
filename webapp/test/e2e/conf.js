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
        // This binary path is standard for Playwright Docker images
        binary: '/usr/bin/google-chrome', 
        args: [
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    }
}],
    specs: [ './*.spec.js' ],
};