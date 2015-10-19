var dash_button = require('node-dash-button');
var config = require('./config');
var lifx = require('./lifx');

var dashes = dash_button(Object.keys(config.lights));


dashes.on("detected", function (dash_id){
  var label = config.lights[dash_id].label;

  console.info(config.lights[dash_id].dash);
  lifx.togglePower("label:" + label);
});
