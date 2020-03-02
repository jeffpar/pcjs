---
layout: post
title: Space Invaders Revisited
date: 2019-09-28 10:00:00
permalink: /blog/2019/09/28/
preview: /blog/images/space-invaders-1978.png
machines:
  - id: invaders
    type: invaders
    name: Space Invaders
    config: /configs/invaders/invaders.json
    layout: /_includes/invaders/invaders-diag.html
---

When I first started working on PCjs, JavaScript features like
[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and
[requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) weren't widely
available.  Over the next 8 or so years, things changed a lot, I learned a lot, and PCjs slowly grew to support more machines.

Unfortunately, that growth resulted in a lot of duplicated code, along with some out-dated and kludgy code.  While
I did try to factor out common chunks of logic into a set of [PCjs shared modules](/machines/shared/lib/) modules, those
efforts were limited, partly to save time, but also to minimize the risk of breaking old machines while creating new ones.
Getting a new emulator up and running is time-consuming enough without constantly testing and fixing all the others.

I decided to make a break with that code base a couple years ago, when I wrote a web-based emulation of the
[TI-57 Calculator](/machines/ti/ti57/).  I created a new set of [Machine library modules](/machines/lib/) hierarchy,
including a new time management class to "clock" all the internal devices, which could be driven either by *setTimeout()*
or *requestAnimationFrame()*, and I used simple JSON and HTML markup to define the machine configuration and layout,
instead of the older XML-based PCjs configuration scheme, which had become increasingly clunky and difficult to maintain.

## A New 8080 Emulator and Debugger

A few months ago, I decided to continue the evolution of those new classes, starting with a fairly simple machine
that I had previously emulated: the 8080-based arcade machine Space Invaders.

First, since I always like to start with an operational debugger, I took the most useful features common to
all the PCjs debuggers and packed them into a new [Debugger](/machines/lib/cpu/debugger.js) base class, which provides
most of the commands that the new [8080 Debugger](/machines/lib/cpu/dbg8080.js) needs.

Then I separated management of the browser display elements into a new [Monitor](/machines/lib/monitor.js)
base class, so that the Space Invaders [Video](/machines/arcade/invaders/video.js) device could focus on the graphics
hardware.  And the handful of machine I/O ports are implemented by a [Ports](/machines/arcade/invaders/ports.js)
device that extends a standard [Ports](/machines/lib/bus/ports.js) class, which plugs into the new [Bus](/machines/lib/bus/bus.js)
class, which implements as many buses as a machine needs (eg, memory and I/O).

And of course, beating at the heart of every machine is the CPU, and for Space Invaders, the
[8080 CPU](/machines/lib/cpu/cpu8080.js) was a straight-forward port of the [original](/machines/pcx80/lib/cpuops.js)
PCjs emulation.

One significant change in this new architecture is that every internal device is an instance of the [Device](/machines/lib/device.js)
class, which in turn builds upon a simple inheritance chain that includes all the functionality that any device might need.
If a device wants to call *printf()*, for example, it can do so by simply invoking *this.printf()*, rather than having
to first "include" (ie, *import* or *require*) the class that contains *printf()*.

I've also done away with specialized PCjs printing functions like *printMessage()* and *printMessageIO()*.  *printf()*
is the preferred method, and if a device wants to assign certain print operations to certain message groups (ie, sets of
messages that can be turned on or off through the debugger), it simply includes the MESSAGE id as the first parameter to
*printf()*.

Debugger input and output controls have been unified into a single textarea "window", there's improved breakpoint
management for setting read and write breakpoints on any valid memory or I/O address, an execution history buffer can
be enabled and dumped with the built-in dump ("d") command, and all the debugger's commands can be accessed from any
browser debug console window via a global *window.command()* function.

## Time to Kill

Now, as much as I love Space Invaders -- it was the first arcade game I became addicted to back in 1979 -- the goal here
wasn't really to make yet another clone of Space Invaders.  I just wanted to make it easier to build more web-based emulators,
fix some things that have long bugged me, make the animation smoother, improve debugging and machine configuration, and so on.

The new Space Invaders emulation should be running below.  Keys are mapped by the [Input](/machines/lib/input.js) device
to the machine's buttons using "map" data provided in the machine [configuration file](/configs/invaders/invaders.json).
Here's a summary:

- **1**: One Player
- **2**: Two Players
- **3**: Insert Coin
- **A** or **Left**: Move Left
- **D** or **Right**: Move Right
- **L** or **Space**: Fire

For touch-screen devices like the iPhone and iPad, I've implemented a quick-and-dirty mapping, where regions across
the top of the monitor correspond to first three buttons:

- Top Left: One Player
- Top Right: Two Players
- Top Center: Insert Coin

and regions across the bottom of the monitor correspond to the last three buttons:

- Left Side: Move Left and Move Right
- Right Side: Fire

This is purely experimental and may only work in portrait mode; landscape and full-screen modes will probably need
more work to make them usable.

An emulator is never really done, because an emulation can always be made just a little bit better.  But I feel like
this is a nice fresh start.

{% include machine.html id="invaders" %}
