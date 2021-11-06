// Load the libraries we need for path/filesystem manipulation
const fs = require('fs');
const { exec } = require('child_process');
const allure = require('@wdio/allure-reporter').default;
const path = require('path');

exports.config = {
    runner: 'local',
    specs: [
        './test/features/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        timeout: 100000,
        require: [
            './test/stepDefs/*'     
        ]
    },
}
