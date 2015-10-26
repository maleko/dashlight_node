//var lifx = new lifxObj(config.access_token);

var LifxClient = require('node-lifx').Client;
var lifx = new LifxClient();

lifx.init({
  lightOfflineTolerance: 3, // A light is offline if not seen for the given amount of discoveries
  messageHandlerTimeout: 45000, // in ms, if not answer in time an error is provided to get methods
  startDiscovery: false, // start discovery after initialization
  debug: false // logs all messages in console if turned on
});

module.exports = lifx;
