---
layout: page
title: Microsoft Chart 2.02
permalink: /software/pcx86/app/microsoft/chart/2.02/
redirect_from: /disks/pcx86/apps/microsoft/chart/2.02/
---

Microsoft Chart 2.02
--------------------

NOTE: The Microsoft Chart 2.02 disk below is *not* an original distribution disk.

The disk image contains "SPERRY Personal Computer MS-DOS 2.11 version 1.11 Copyright 1981,82,83 Microsoft Corp."
with a COMMAND.COM dated "3-16-87".  It boots but then crashes when COMMAND.COM attempts to display the current date.

COMMAND.COM appears to be loaded too high in conventional memory, because it builds the current date string above
segment 0xA000, so when it attempts to print that string, DOS finds only garbage (0xFF bytes, and no terminating $).
This suggests that either there is a mismatch between the IBMBIO.COM, IBMDOS.COM and COMMAND.COM files on this disk,
or that there is something special about the BIOS found on a SPERRY computer that is critical to booting these files.

I'm sure with further debugging we could find out one way or the other, but let's leave that for another day.  It's not
clear it's really worth the effort.  To start, the IBMBIO.COM, IBMDOS.COM and COMMAND.COM files should be placed onto
their own MS-DOS disk image and archived appropriately.  A search for the rest of the SPERRY OEM distribution files
should also be conducted.

### Directory of MS Chart 2.02 (Modified)

	 Volume in drive A has no label

	Directory of A:\

	IBMBIO   COM      7321 07-17-84  12:00p
	IBMDOS   COM     17092 08-28-84  12:00p
	CHART    COM     43858 05-23-86  12:00p
	MC       COD     98784 05-23-86  12:00p
	MC       SYS     44848 05-23-86  12:00p
	MC       DAT     22960 05-23-86  12:00p
	MC       HLP     67628 05-23-86  12:00p
	CENSUS            1724 05-23-86  12:00p
	FONTLIST           214 05-23-86  12:00p
	CHART    PIF       369 05-23-86  12:00p
	EXAMPLE1 MC       3609 05-23-86  12:00p
	EXAMPLE2 MC       2543 05-23-86  12:00p
	EXAMPLE3 MC       4149 05-23-86  12:00p
	MC       INI       183 03-28-15  12:20p
	HP7475A  GPD      3303 03-16-87  10:14a
	COMMAND  COM     16229 03-16-87  10:14a
	PARKS             1146 03-17-87  10:06a
	       17 file(s)     335960 bytes

	Total files listed:
	       17 file(s)     335960 bytes
	                       16384 bytes free
