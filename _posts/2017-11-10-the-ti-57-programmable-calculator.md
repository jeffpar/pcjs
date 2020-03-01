---
layout: post
title: The TI-57 Programmable Calculator
date: 2017-11-10 15:00:00
permalink: /blog/2017/11/10/
machines:
  - id: ti57
    type: ti57
    name: TI-57 Programmable Calculator
    config: /configs/ti57/ti57-rev0.json
---

The new [TI-57 Programmable Calculator](/machines/ti/ti57/) emulator, shown below, is the latest addition to the
PCjs Machines collection.  It emulates a TMS-1501 chip at the register level, and uses an original
[TI-57 ROM](/machines/ti/ti57/rom/), providing about as perfect a simulation as you can get.

Even though it's my smallest JavaScript-based emulator to date, it's still packed with goodies:

- Faithful speed and LED simulation
- Built-in disassembler and "mini-debugger"
- Works on desktop and mobile devices
- Saves and restores state automatically

Since it saves your calculator's state whenever the web page is closed, and restores that state when the page
is reopened, you shouldn't lose your work.  However, just like a real calculator, if you turn it off and on again
(using the **Power** button), then everything will be reset.

The "mini-debugger" is connected to the Diagnostics window, so you can type commands there as well.
As the "?" command will tell you, available commands include:

	b[c]        	break on condition c
	bl          	list break conditions
	g [addr]    	run (to addr)
	h           	halt
	r[a]        	dump (all) registers
	t [n]           step (n instructions)
	u [addr] [n]    disassemble (at addr)

Clicking the **Halt** button is equivalent to the "h" command, the **Run** button is equivalent to "g", and the
**Step** button is equivalent to "t".  The **Reset** button has no equivalent; it's just a shortcut for cycling the
**Power** button.  If you use the "t" command to step through a large number of instructions, the **Step** button
becomes a **Stop** button, allowing you to terminate the step operation.

In addition to supporting *touch* and *mouse* events, *keyboard* shortcuts are supported, too.  The set
of shortcuts is configurable, based on the button *map* passed to the emulator.  The default *map* looks like
this:

	"map": [
	    ["2nd",  "inv",  "lnx",  "\\b",  "clr"],
	    ["lrn",  "xchg", "sq",   "sqrt", "rcp"],
	    ["sst",  "sto",  "rcl",  "sum",  "exp"],
	    ["bst",  "ee",   "(",    ")",    "/"],
	    ["gto",  "7",    "8",    "9",    "*"],
	    ["sbr",  "4",    "5",    "6",    "-"],
	    ["rst",  "1",    "2",    "3",    "+"],
	    ["r/s",  "0",    ".",    "+/-",  "=|\\r"]
	]

Any button that corresponds to a single character can be triggered by typing that character (eg, "+" for the **Add**
button).  Escape sequences are allowed, too; for example, `\\b` represents Backspace, which will trigger the **CE**
button.  Buttons can have multiple mappings, too; for example, the **Equals** button can be triggered by typing either
"=" *or* the **Enter** key.

The LED display is configurable as well.  The default JSON properties for the LED Device look like this:

	"display": {
	    "class": "LED",
	    "type": 3,
	    "cols": 12,
	    "rows": 1,
	    "color": "red",
	    "bindings": {
	      "container": "displayTI57"
	    },
        "overrides": ["color","backgroundColor"]
	}

So if you prefer *green* or *blue* digits, change the *color* property.  A *backgroundColor* property is supported,
too, but if it's omitted, a transparent background is used.

Even for configurations that have already been created, like the [TI-57](#pcjs-ti-57-emulator) on this page, any
property listed in a device's *overrides* can be overridden with a URL parameter.  For example:

	https://www.pcjs.org/machines/ti/ti57/?color=lime

Currently, the following properties may be overridden, within the given minimums and maximums:

- *cyclesPerSecond* (default speed is 650000; minimum is 100000 and maximum is 1600000)
- *yieldsPerSecond* (default is 60; minimum is 30 and maximum is 120)
- *yieldsPerUpdate* (default is 30; minimum is 1 and maximum is *yieldsPerSecond*)
- *color* (default LED digit color is red)
- *backgroundColor* (default LED digit background color is none, for a transparent background)
- *colorROM* (default ROM activity LED color is green)
- *backgroundColorROM* (default ROM activity background color is black)

So, if you want a [TI-57 with Bright Green LEDs](?color=lime#pcjs-ti-57-emulator), you've got it!

Check out our [TI-57 Tips and Tricks](/machines/ti/ti57/tips/) for more information on
[PCjs TI-57 Overrides](/machines/ti/ti57/tips/#overriding-pcjs-ti-57-settings).

Since this emulator is still "hot off the press", don't be surprised if there are still a few lingering
bugs.  If you run into any, or you have a browser or device where it doesn't work as expected,
[send me a note](mailto:Jeff@pcjs.org).  If your web browser is "old" though, please try a newer browser first.

## PCjs TI-57 Emulator

{% include machine.html id="ti57-rev0" layout="machine/ti57-diag" %}
