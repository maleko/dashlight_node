var dash_button = require('node-dash-button');
var config = require('./config');
var lifx = require('./lifx');

var dashes = dash_button(Object.keys(config.lights));


dashes.on("detected", function (dash_id){
  var label = config.lights[dash_id].label;

  console.info(config.lights[dash_id].dash);

  var light = lifx.light(label);


  if (light != false) {
    light.getState(function(error, data) {
      if (data.power == 0) {
        light.on(20);
      } else {
        light.off(20);
      }
    });
  }

});
