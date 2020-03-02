---
layout: page
title: Game of Life Demo
permalink: /machines/led/life/
redirect_from: /devices/leds/life/
machines:
  - id: lifeDemo
    type: led
    name: Game of Life Demo
    config: /configs/led/life.json
    layout: /_includes/led/life.html
---

Here's a simple demo of
[John Conway's](http://www.conwaylife.com/wiki/John_Horton_Conway)
"[Game of Life](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life)", using a grid of simulated LEDs.

Any LED color can be specified in the URL, such as [Red](?color=red&pattern=gliderGun#lifeDemo) or 
[Blue](?color=blue&pattern=gliderGun#lifeDemo).  There is also a ["Game of Life" Color Demo](colors/) that allows
you to change LED colors.

{% include machine.html id="lifeDemo" %}
