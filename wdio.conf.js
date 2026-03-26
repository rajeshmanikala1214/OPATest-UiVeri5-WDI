exports.config = {
  runner: 'local',

  specs: [
    './webapp/test/e2e/**/*.js'   // ✅ matches your structure
  ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome'
  }],

  logLevel: 'info',

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  services: ['ui5'],

  // 🔥 REQUIRED for Jenkins + Sonar
  reporters: [
    ['json', {
      outputDir: './wdi5-report'
    }]
  ]
};