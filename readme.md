# Dashlight-Node

Just a hack to get the [Amazon Dash](http://www.amazon.com/dash) buttons working with [LIFX](http://www.lifx.com) bulbs.

## Installation

1. Install nodenv & nodejs
2. `npm install`
3. Run the process of [setting up your dash button](https://www.amazon.com/gp/help/customer/display.html?nodeId=201746340) according to Amazon but **don't link it up** to a product.
4. run `sudo node_modules/node-dash-button/bin/findbutton` to sniff your Amazon Dash button generating an ARP request (_my suggestion is to set it up to a temporary wifi channel that doesn't have any other devices. I had a hard time finding the right MAC Address because my wifi channel was noisy as 😓. You can always change the wifi channel again by setting up your dash button again later_)
5. Enter your MAC address id into the `lights.json` file along with the label of your light.
6. `sudo npm start`
7. Use your phone to turn on all the lights so that Node discovers all
   the lights. Turn it off after.
8. Test your buttons!

## Future enhancements

- Make the lights warm up according to the time of the day.
- Find a easy way to reduce the amount of time it takes to toggle the lights (it does take about 5-10 seconds right now) (fixed using node-lifx instead)


## Acknowledgements

Thanks to:

- [Matt Ranney](https://github.com/mranney) for [node-pcap](https://github.com/mranney/node_pcap)
- [Marius Rumpf](https://github.com/MariusRumpf/node-lifx) for [node-lifx](https://github.com/MariusRumpf/node-lifx)
- [Alex Hortin](https://github.com/hortinstein) for [node-dash-button](https://www.npmjs.com/package/node-dash-button)
- My kids. They keep turning off the lights from the mains. 😭
