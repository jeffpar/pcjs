---
layout: page
title: "RK03 Unix v5 Disk"
permalink: /software/dec/pdp11/disks/rk03/unixv5/
redirect_from: /disks/dec/rk03/unixv5/
---

### Boot

To boot the RK03 "Unix v5" disk, start a [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) with an
[RK11 Disk Controller](/machines/dec/pdp11/rk11/), select the "Unix v5" disk from the list of disks
available for drive "RK0", click **Load**, and wait for the message:

	Mounted disk "Unix v5" in drive RK0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0

	BOOT>

At the prompt, type "BOOT RK0".  Then type "unix" at the "@" prompt, followed by "root" for the login:

	@unix
	
	<ESC>;<BEL>login: root
	# ls -l
	total 60
	drwxr-xr-x  2 bin       944 Nov 26 18:13 bin
	drwxr-xr-x  2 bin        80 Nov 26 18:13 dev
	drwxr-xr-x  2 bin       240 Mar 21 12:07 etc
	drwxr-xr-x  2 bin       224 Nov 26 18:13 lib
	drwxr-xr-x  2 bin        32 Nov 26 18:13 mnt
	drwxrwxrwx  2 bin        32 Nov 26 18:13 tmp
	-rwxrwxrwx  1 bin     25802 Mar 21 12:07 unix
	drwxr-xr-x 14 bin       224 Nov 26 18:13 usr
	# 
