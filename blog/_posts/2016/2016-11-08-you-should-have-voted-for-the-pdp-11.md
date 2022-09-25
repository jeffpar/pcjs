---
layout: post
title: You Should Have Voted For The PDP-11
date: 2016-11-08 11:00:00
permalink: /blog/2016/11/08/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    config: /machines/dec/pdp11/1170/panel/debugger/machine.xml
---

Greetings from an alternate reality where DEC's elegant PDP-11 architecture beat out Intel's gross 8086 architecture,
and DEC managed to gracefully evolve the 16-bit PDP-11 into powerful 32-bit and 64-bit successors, all while maintaining
excellent backward compatibility.
 
Unfortunately, you're stuck in your reality, so you have no idea what I'm talking about.  Basically, your ancestors voted
for the cheapest solution rather than the best solution, and now you have to live with the consequences.

The good news: [PDPjs](/machines/dec/pdp11/1170/panel/debugger/) makes it possible for you to go back in time, and for a moment at least,
and relive the PDP-11 experience.  It's still a somewhat primitive experience, but PDPjs is a work-in-progress, so hang in
there.

The latest release, v1.30.3, adds the following features:

- Functional [Front Panels](/machines/dec/pdp11/panel/1170/#front-panel-basics) (check out the demo below)
- ROMs such as DEC's [M9312 ROMs](/machines/dec/pdp11/rom/M9312/) can now be installed
- Support for DEC's [RL11 Disk Controller](/machines/dec/pdp11/rl11/) has been implemented

To test RL11 support below, then select the "XXDP+ Diagnostics" disk from the "Disk Drive Controls",
click **Load**, and wait for the message:

	Mounted disk "XXDP+ Diagnostics" in drive RL0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0
	
	BOOT> 

At the prompt, type "BOOT RL0".  The following text should appear:

	CHMDLD0 XXDP+ DL MONITOR
	BOOTED VIA UNIT 0
	28K UNIBUS SYSTEM
	
	ENTER DATE (DD-MMM-YY): 

	RESTART ADDR: 152010
	THIS IS XXDP+.  TYPE "H" OR "H/L" FOR HELP.
	
	.

And that's the extent of my testing, so if you try anything else and it doesn't work, feel free to
[open an issue](https://github.com/jeffpar/pcjs/issues).

Better yet, fork the [PCjs Project](https://github.com/jeffpar/pcjs), debug the problem yourself, test a fix,
and then send me a pull request.  :-)

Finally, another shout-out to Paul Nankervis, who not only generously gave permission
to use code from his JavaScript [PDP-11/70 Emulator (v1.4)](http://skn.noip.me/pdp11/pdp11.html), but has also patiently
answered all my questions.

I'm [@jeffpar](https://jeffpar.com) and I approve this blog post.

{% include machine.html id="test1170" %}
