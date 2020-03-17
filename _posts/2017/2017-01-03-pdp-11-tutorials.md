---
layout: post
title: PDP-11 Tutorials
date: 2017-01-03 15:00:00
permalink: /blog/2017/01/03/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /configs/pdp11/machine/1170/vt100/debugger/machine.xml
    connection: dl11->vt100.serialPort
  - id: vt100
    type: pcx80
    config: /configs/pcx80/xml/machine/vt100/machine.xml
    connection: serialPort->test1170.dl11
---

Introducing PDP-11 tutorials.  For more details, keep scrolling, and keep your eye on the VT100 below.

{% include machine.html id="vt100" %}

[PDPjs](/machines/dec/pdp11/) is able to run a variety of old DEC operating systems, such as RT-11 and RSTS/E,
and while there are manuals available online, thanks to the efforts of those who operate and contribute to websites
like [bitsavers.org](http://bitsavers.org), I suspect most people don't have a lot of interest or time to spend
reading old manuals.

In an effort to remedy that situation, I'm adding some new features to PCjs.  The first feature is what I call
"Sticky Machines", and it's really just a new feature of the PCjs website.  At the top of any PCjs webpage, in the
*machines* section, a machine can now define a *sticky* property.  For now, the only supported value is "top"; e.g.:

	machines:
	  - id: vt100
	    type: pcx80
	    config: /configs/pcx80/xml/machine/vt100/machine.xml
	    connection: serialPort->test1170.dl11
	    sticky: top

A sticky machine makes it easier to construct a tutorial page for a single machine, by preventing that machine from
scrolling off the top; it "sticks" to the top instead.  The rest of the page scrolls normally, allowing the user to
progress at their own pace through the text and/or images of an accompanying tutorial.

The second feature is a generalized method for sending commands to components within a machine.  For example, if we
want to send some serial data to a machine:

{% raw %}
	{% include machine/command.html type='button' label='Try It!' machine='test1170' component='SerialPort' command='receiveData' value='HELP\r' %}
{% endraw %}

which should translate into a control that looks like this:

	<button type="button" onclick="commandMachine('test1170','SerialPort','receiveData','HELP\r')">Try It!</button>

In fact, let's try it now. {% include machine/command.html type='button' label='Try It!' machine='test1170' component='SerialPort' command='receiveData' value='HELP\r' %}

Obviously, every component we want to control will need to be updated to export the necessary "command" functions.

So expect some PDPjs tutorials in the near future, featuring sticky machines and built-in command demos.  Some
commands will be very simple, like the data injection command shown above.  Others will perform more sophisticated
operations, such as loading and booting a particular disk, running a particular application, automatically flipping
selected Front Panel switches, and so on.

Finally, in case you're wondering why there's another machine below, well, what did you think the VT100 was talking to?
This PDP-11/70, of course.

{% include machine.html id="test1170" %}
