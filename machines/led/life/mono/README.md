---
layout: page
title: Game of Life (Mono)
permalink: /machines/led/life/mono/
redirect_from: /devices/leds/life/
machines:
  - id: lifeDemo
    type: led
    name: Game of Life (Mono)
    config: /machines/led/life-mono.json
    layout: /_includes/machines/led/life-mono.html
---

Here's a simple demo of
[John Conway's](http://www.conwaylife.com/wiki/John_Horton_Conway)
"[Game of Life](http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life)", using a grid of simulated LEDs.

Any LED color can be specified in the URL, such as [Red](?color=red&pattern=gliderGun#lifeDemo) or 
[Blue](?color=blue&pattern=gliderGun#lifeDemo).

{% include machine.html id="lifeDemo" %}
