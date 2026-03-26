module.exports = { tests: [ { name: "OPA5 Tests", url: "http://localhost:8080/test/testsuite.qunit.html" } ], 
reporters: [ "default", ["json", { outputFile: "opa5-report.json" }] ] };