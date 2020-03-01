---
layout: page
title: '"Game of Life" Color Demo'
permalink: /machines/led/life/colors/
redirect_from: /devices/leds/life/colors/
machines:
  - id: lifeColorDemo
    type: led
    name: Game of Life Color Demo
    config: /configs/led/life-color.json
    layout: /_includes/led/life-color.html
---

Here's a simple demo of
[John Conway's](http://www.conwaylife.com/wiki/John_Horton_Conway)
"[Game of Life](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life)", using a grid of simulated multi-colored LEDs.

{% include machine.html id="lifeColorDemo" %}
