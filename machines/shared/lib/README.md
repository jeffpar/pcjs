---
layout: default
title: Shared Modules
permalink: /machines/shared/lib/
---

This folder contains a mix of shared code, with some files used only by Node (server) modules,
some used only by Browser (client) modules, and others used by both.

* [component.js](component.js)
* [debugger.js](debugger.js)
* [defines.js](defines.js)
* [diskapi.js](diskapi.js)
* [dumpapi.js](dumpapi.js)
* [embed.js](embed.js)
* [externs.js](externs.js)
* [int36.js](int36.js) (see [below](#unused-modules))
* [keys.js](keys.js)
* [netlib.js](netlib.js)
* [nodebug.js](nodebug.js)
* [private.js](private.js)
* [proclib.js](proclib.js)
* [reportapi.js](reportapi.js)
* [save.js](save.js)
* [sockets.js](sockets.js)
* [state.js](state.js)
* [sticky.js](sticky.js)
* [strlib.js](strlib.js)
* [userapi.js](userapi.js)
* [usrlib.js](usrlib.js)
* [weblib.js](weblib.js)

At the moment, only a few files are completely agnostic; eg: [strlib.js](strlib.js) and [usrlib.js](usrlib.js).
One give-away is that neither contain references to any globals (although references to each other
would be fine).

[netlib.js](netlib.js) is appropriate only for Node modules, because it contains code that relies on Node's
global *Buffer* object, as indicated by:

	/* global Buffer: false */

[weblib.js](weblib.js) is appropriate only for client modules, because it contains code that relies on the
browser's global *window* object, as indicated by:

	/* global window: true */

We declare *window* modifiable (true) so that [defines.js](defines.js) can set *global.window* to *false*
when running within Node, allowing any other code to test the existence of *window* with a simple:

	if (window) {...}
	
instead of:

	if (typeof window !== "undefined") {...}

## Unused Modules

The [Int36](int36.js) class was an early attempt to build a general-purpose 36-bit integer Math class in JavaScript,
with the thought that it would become a building block for the [PDP-10](../../pdp10/) emulation.  A Node test harness
([int36](../bin/int36)) was written as well.  There was nothing wrong with the idea, but ultimately, it was simply more
expedient to build the required functionality directly into the PDP-10's [opcode handlers](../../pdp10/lib/cpuops.js).
That decision may be worth revisiting someday.
