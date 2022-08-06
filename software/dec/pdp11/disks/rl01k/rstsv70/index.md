---
layout: page
title: "RL01K RSTS/E v7.0 Disk"
permalink: /software/dec/pdp11/disks/rl01k/rstsv70/
redirect_from: /disks/dec/rl01k/rstsv70/
---

### Boot

To boot the RL01K "RSTS/E v7.0" disk, start a [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) with an
[RL11 Disk Controller](/machines/dec/pdp11/rl11/), select the "RSTS/E v7.0" disk from the list of disks
available for drive "RL0", click **Load**, and wait for the message:

	Mounted disk "RSTS/E v7.0" in drive RL0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0
	
	BOOT>

At the prompt, type "BOOT RL0".
