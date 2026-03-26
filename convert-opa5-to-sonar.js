const fs = require('fs');

if (!fs.existsSync('opa5-report.json')) {
  console.log("OPA5 report not found");
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync('opa5-report.json'));

let xml = '<testExecutions version="1">';

(data.tests || []).forEach(test => {
  xml += '<file path="OPA5">';
  xml += `<testCase name="${test.name}" duration="${test.duration || 1}">`;

  if (test.status !== 'passed') {
    xml += '<failure message="failed"/>';
  }

  xml += '</testCase></file>';
});

xml += '</testExecutions>';

fs.writeFileSync('opa5-sonar.xml', xml);
console.log("OPA5 Sonar XML generated");