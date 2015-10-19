var lifxObj = require('lifx-api');
var config = require('./config');

var lifx = new lifxObj(config.access_token);

module.exports = lifx;
