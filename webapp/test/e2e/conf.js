exports.config = {
    profile: 'integration',
    baseUrl: 'http://localhost:8080/index.html',
    reporters: [
        {
            name: 'junit',
            reportDir: './target/report',
            reportName: 'uiveri5-results'
        },
        {
            name: 'json',
            reportDir: './target/report',
            reportName: 'uiveri5-results'
        }
    ],
    specs: ['*.spec.js'],
    takeScreenshots: {
        onExpectationFailure: true,
        onExpectationSuccess: false,
        onAction: false
    }
};