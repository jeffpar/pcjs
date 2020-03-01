---
layout: page
title: '"Lite-Brite" Demo'
permalink: /machines/led/litebrite/
redirect_from: /devices/leds/litebrite/
machines:
  - id: lbDemo
    type: led
    name: Lite-Brite Demo
    config: /configs/led/litebrite.json
    layout: /_includes/led/litebrite.html
---

The [Lite-Brite](https://en.wikipedia.org/wiki/Lite-Brite) concept was invented by Joseph M. Burck at
[Marvin Glass & Associates](https://en.wikipedia.org/wiki/Marvin_Glass_and_Associates) and first marketed as a toy
in 1967 by [Hasbro](https://en.wikipedia.org/wiki/Hasbro).  See our "[50th Anniversary of Lite-Brite](/blog/2017/12/10/)"
blog post for more on the history of Lite-Brite.

The original Lite-Brite design used a pair of matching black panels punctured with a series of evenly spaced holes
arranged in a grid of 39 rows, which alternated between 44 and 45 holes per row, resulting in a hexagonal ("honeycomb")
layout containing 1735 holes.  A piece of black paper containing a pre-printed pattern would be sandwiched between
the panels, and then your job was to insert any of the (blue, green, violet, red, orange, pink, yellow, or white)
colored pegs into the appropriately marked holes.

This simulation takes the "Lite-Brite" concept a bit farther, allowing you to add counters to each of the colored LEDs,
making it possible to create a variety of "blinking" and "color-cycling" animations.

Any of the [Original Lite-Brite Images](images/) can be turned on
underneath the grid, to help you recreate them with LEDs.  However, it's difficult to find decent high-quality images
of those original 1967 patterns, and tricky to get them to line up properly, so a little "artistic interpretation" is
required.

Eventually, we'd also like to add recreations of the original black-and-white patterns, using the original Lite-Brite
color codes (B, G, V, R, O, P, Y, and W).

{% include machine.html id="lbDemo" %}
