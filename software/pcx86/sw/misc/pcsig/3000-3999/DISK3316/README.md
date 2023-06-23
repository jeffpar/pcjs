---
layout: page
title: "PC-SIG Diskette Library (Disk #3316)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3316/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3316"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CSERVE.TXT

{% raw %}
```
ColorView for Windows can now be obtained from CompuServe IBMAPP forum, 
Library # 10.


ColorView for Windows can also be registered through CompuServe.
-----------------------------------------------------------------

To register the program do the following:

1. In CompuServe type GO SWREG
2. Select REGISTER SOFTWARE
3. Select name: COLORVIEW or Registration ID: 196

The registration fee charged through CompuServe is a flat $34.95. 
No additional Postage & Handling fees are charged.
```
{% endraw %}

## README.TXT

{% raw %}
```

			   ColorView for Windows
	  Copyright (c) 1992 Millennium Technologies Corporation
			   All Rights Reserved

			      Version 0.97


ColorView is a color image viewer designed for Microsoft Windows. In this
version, ColorView supports reading the following formats:

	o  JPEG (JFIF subset)
	o  GIF'87, GIF'89 (only simple images)
	o  Windows BMP files (4, 8 and 24 bit, uncompressed)

and writing the following formats:

	o  GIF'87
	o  Windows BMP files (8 and 24 bit, uncompressed)


ColorView will work with:
	o  4 bit, 16 color standard VGA boards (poor color reproduction)
	o  8 bit, 256 color display boards 
	o  15 bit, 32768 color display boards
	o  24 bit color display boards
	o  Microsoft Windows 3.0 and 3.10
	o  2 MB or more of physical memory
	o  80286, 80386-SX, 80386, 80486 processors

ColorView provides: 
	o  Floyd-Steinberg dithering
	o  Heckbert color reduction
	o  one pass Fast Quantization color reduction
	o  Gamma correction,
	o  Hue,
	o  Saturation, and
	o  Brightness controls.

Two versions of ColorView are available: ColorView '286 and ColorView '386.
The '386 version of ColorView uses Intel 80386 (and higher) instruction set 
to optimize decompression. As the result, it is twice as fast as the 
ColorView '286 in displaying JPEG images. 

	  PLEASE MAKE SURE YOU HAVE A 80386-DX or 80386-SX CPU
		BEFORE ATTEMPTING TO RUN COLORVIEW '386!


List of files provided with this package:

	README.TXT                      - this file
	UPDATE.TXT                      - changes in Version 0.97
	CVIEW.SDA                       - ColorView package description
	CVIEW286.EXE                    - ColorView for 80286 processor 
	CVIEW386.EXE                    - ColorView for 80386 and above
	CVIEW.WRI                       - documentation in Windows Write format
	TIMINGS.WRI                     - ColorView JPEG decode times 
	PALACE.JPG                      - sample JPEG image
	CSERVE.TXT                      - registration of ColorView 
	MEMBER.ASP                      - ASP membership notice
	FILE_ID.DIZ

To install, copy all of the files into a directory on your hard disk. Read the 
ColorView documentation by editing CVIEW.WRI document using Windows' Write.

To run ColorView from Microsoft Windows start CVIEW286.EXE or CVIEW386.EXE
(only on 80386-SX or better systems) and follow instructions in the
documentation.


Enjoy!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3316

     Volume in drive A has no label
     Directory of A:\

    MEMBER   ASP       371   8-16-92   6:20p
    FILE_ID  DIZ       241   8-22-92   1:16p
    CVIEW386 EXE    113600   5-11-92  11:29p
    CVIEW286 EXE    113792   5-11-92  11:28p
    PALACE   JPG     65228   5-06-92   4:13p
    TIMINGS  WRI      6400   6-20-92   2:31p
    CSERVE   TXT       507   8-16-92   4:17p
    README   TXT      2440   8-16-92   6:34p
    CVIEW    WRI     51840   7-29-92   2:46p
    GO       BAT        38  11-12-92   5:40p
    SHOW     EXE      2040   9-12-88  10:48a
           11 file(s)     356497 bytes
                               0 bytes free
