const fs = require('fs');

let report = { tests: [] };

if (fs.existsSync('opa5-report.json')) {
    report = JSON.parse(fs.readFileSync('opa5-report.json', 'utf8'));
}

let xml = `<testExecutions version="1">\n`;

(report.tests || []).forEach((test, i) => {
    xml += `
    <file path="opa5/test${i}.js">
        <testCase name="${test.name || 'test'}" duration="1"/>
    </file>`;
});

xml += `\n</testExecutions>`;

fs.writeFileSync('opa5-sonar.xml', xml);

console.log("OPA5 Sonar XML generated");