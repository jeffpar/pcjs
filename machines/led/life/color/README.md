---
layout: page
title: Game of Life
permalink: /machines/led/life/color/
redirect_from: /devices/leds/life/colors/
machines:
  - id: lifeColorDemo
    type: led
    name: Game of Life
    config: /configs/led/life-color.json
    layout: /_includes/led/life-color.html
---

Here's a simple demo of
[John Conway's](http://www.conwaylife.com/wiki/John_Horton_Conway)
"[Game of Life](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life)", using a grid of simulated multi-colored LEDs.

Any LED color can be specified in the URL, such as [Red](?color=red&pattern=gliderGun#lifeDemo) or 
[Blue](?color=blue&pattern=gliderGun#lifeDemo).

{% include machine.html id="lifeColorDemo" %}
