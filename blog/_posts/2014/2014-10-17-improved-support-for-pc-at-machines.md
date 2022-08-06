---
layout: post
title: Improved support for PC AT machines
date: 2014-10-17 11:00:00
category: Releases
permalink: /blog/2014/10/17/
---

The [8Mhz IBM PC AT](/machines/pcx86/ibm/5170/ega/1024kb/rev3/debugger/machine.xml) machine configuration
now boots in [PCjs v1.15.5](https://github.com/jeffpar/pcjs/releases/tag/v1.15.5), which includes the following fixes:

+ The BIOS expects memory refresh to occur roughly every 16us, which I've resolved by tying the state
  of the refresh bit in port 0x61 to bit 6 of the CPU cycle count (see *in8042RWReg()* in [chipset.js](/machines/pcx86/lib/chipset.js));
  the original AT BIOS was satisfied with a refresh bit that merely alternated, whereas the new AT BIOS
  is much more particular about the rate at which that bit changes, since many hard-coded delay-loops have
  now been replaced with code that waits for a specific number of refresh cycles.
+ The 8042 Keyboard Controller emulation needed a few more tweaks, mainly with respect to what happens
  when the keyboard's "clock" line is toggled (see *set8042CmdData()* in [chipset.js](/machines/pcx86/lib/chipset.js)).
+ The Floppy Drive Controller needed to add support for the "READ ID" command, in order for the BIOS
  "double-stepping" test to work (double-stepping is required on an 80-track drive when attempting to read
  a 40-track diskette).
+ The BIOS Diskette Reset function does something odd after resetting the Floppy Drive Controller: it
  issues not one but *four* "SENSE INTERRUPT STATUS" commands to the FDC, and expects each response to
  return an incrementally larger drive number.  I found this a bit mystifying, considering that IBM's
  own FDC/HDC "combo card" supports a maximum of *two* diskette drives.  But, there's no point arguing
  with a BIOS that's almost 30 years old.
+ The BIOS attempts to detect what its authors must have considered a common problem: the user's failure
  to run SETUP after installing a second hard drive.  So, when the CMOS reports only one hard drive installed,
  the BIOS probes for a second hard drive anyway, and it does so by simply writing the drive number to the ATC's
  "DRVHD" register and then immediately reading the "STATUS" register, without issuing any intervening command.
  It was an easy fix to *outATCDrvHd()* in [hdc.js](/machines/pcx86/lib/hdc.js), but I was surprised
  to discover that the ATC had this behavior, and now I'm wondering if there are any other I/O operations
  that must immediately update the "STATUS" register.

This PCjs release also fixes a problem reported by a user: if you disable **localStorage** support in your
browser, previous versions of PCjs would fault.  While every browser that supports PCjs also supports
**localStorage**, I didn't consider what might happen if a user decided to turn it off.

The only downside to turning off **localStorage** is that none of your PCjs machines will be able save/restore
their state when you leave/return to the page; they will always reboot.

Browser's don't always refer to the **localStorage** feature by its actual name, either.  For example, in
Chrome, the setting that enables/disables **localStorage** is hidden under "Advanced Settings" => "Privacy" =>
"Content Settings" => "Cookies" => "Allow local data to be set (recommended)".  Which is somewhat misleading
and a little annoying, because **localStorage** is *not* a **cookie**.

PCjs *never* sets any cookies.  Cookies are bits of data that your browser saves and then automatically sends
off to the server every time you make a request.  **localStorage** is nothing more than local storage; it is
*not* automatically sent anywhere.  Granted, a JavaScript application could abuse it and send it out just like a
cookie, but PCjs does *not* do that; the only exception is when PCjs detects a problem, and even then, you must
first agree to submit your machine's state as part of the bug report.
