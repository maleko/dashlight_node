var filesystem = require('fs');

var config = JSON.parse(filesystem.readFileSync('./lights.json', 'utf8'));

module.exports = config;
