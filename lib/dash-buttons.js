var dash_button = require('node-dash-button');
var config = require('./config');
var lifx = require('./lifx');

var dashes = dash_button(Object.keys(config.lights));


dashes.on("detected", function (dash_id){
  var label = config.lights[dash_id].label;

  console.info(config.lights[dash_id].dash);

  var light = lifx.light(label);
  var now = new Date();

  if (light != false) {
    light.getState(function(error, data) {
      console.info(data);
      if (data == null || data.power > 0) {
        light.off(20);
      } else {
        if (now.getHours() > 18) {
          light.color(
            data.color.hue,
            data.color.saturation,
            data.color.brightness,
            3500
          );
        } else {
          light.color(
            data.color.hue,
            data.color.saturation,
            data.color.brightness,
            6500
          );
        }
        light.on(20);
      }
    });
  }

});
