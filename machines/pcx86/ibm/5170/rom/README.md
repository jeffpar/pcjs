---
layout: page
title: IBM PC AT (Model 5170) ROMs
permalink: /machines/pcx86/ibm/5170/rom/
redirect_from: /devices/pcx86/rom/5170/
---

There were three ROM BIOS revisions for the IBM PC AT:

- [Model 5170: Jan 10, 1984 (Rev 1)](#ibm-pc-at-rom-bios-rev-1)
- [Model 5170: Jun 10, 1985 (Rev 2)](#ibm-pc-at-rom-bios-rev-2)
- [Model 5170: Nov 15, 1985 (Rev 3)](#ibm-pc-at-rom-bios-rev-3)

Each revision was used with a corresponding motherboard type (**Type 1**, **Type 2**, and **Type 3**, respectively),
which in turn were used with corresponding 5170 models ([Models 68 and 99](/machines/pcx86/ibm/5170/#models-68-and-99),
[Model 239](/machines/pcx86/ibm/5170/#model-239), and [Models 319 and 339](/machines/pcx86/ibm/5170/#models-319-and-339),
respectively).  All revisions included [IBM BASIC C1.10](/machines/pcx86/ibm/5150/rom/basic/).

### IBM PC AT ROM BIOS (Rev 1)

[ATBIOS-REV1](bios/1984-01-10/ATBIOS-REV1.json5) contains the original IBM PC AT BIOS, dated January 10, 1984
("01/10/84").  It was produced for [5170 Models 68 and 99](/machines/pcx86/ibm/5170/#models-68-and-99),
announced August 14, 1984.

Do we really think this PC AT BIOS was "finalized" a full 7 months before the PC AT was even announced, let alone
available?  I doubt it.  I suspect the BIOS date string was simply never updated to reflect the date of the final
change(s).

From [http://minuszerodegrees.net/bios/BIOS_5170_10JAN84_6MHZ.zip](http://minuszerodegrees.net/bios/):

	This is the first BIOS for the IBM 5170.
	It is dated 10JAN84.
	It is found in type 1 motherboards running at 6 Mhz.
	
	U27 has the IBM part number of 6181028, and is 32K in size
	U47 has the IBM part number of 6181029, and is 32K in size
	
	8 bit checksum of 6181028 = 36
	8 bit checksum of 6181029 = CA
	                            --
	                    added = 00
	
	There are two BIN files in this ZIP file:
	
	1. BIOS_5170_10JAN84_U27_6181028_27256_6MHZ.BIN  --> Use this to create a U27 using a 27256 EPROM (rated at 150nS or faster)
	2. BIOS_5170_10JAN84_U47_6181029_27256_6MHZ.BIN  --> Use this to create a U47 using a 27256 EPROM (rated at 150nS or faster)

The JSON-encoded ROM image that PCjs uses was created using the [FileImage](/tools/fileimage/) command-line *merge* option:

	fileimage --file=/machines/pcx86/ibm/5170/rom/bios/1984-01-10/BIOS_5170_10JAN84_U27_6181028_27256_6MHZ.BIN --merge=/machines/pcx86/ibm/5170/rom/bios/1984-01-10/BIOS_5170_10JAN84_U47_6181029_27256_6MHZ.BIN --output=ATBIOS-REV1.json5 --overwrite
	
Since a MAP file ([bios/ATBIOS-REV1.map](bios/1984-01-10/ATBIOS-REV1.map)) exists as well, it is automatically appended to the JSON file
([ATBIOS-REV1](bios/1984-01-10/ATBIOS-REV1.json5)) when using a ROM input file (or JSON output file) with a matching filename.

It is also possible to create a merged binary ROM image ([ATBIOS-REV1.rom](bios/1984-01-10/ATBIOS-REV1.rom))
by adding *--format=rom* to the command-line (the default is *--format=json*).

### IBM PC AT ROM BIOS (Rev 2)

[ATBIOS-REV2](bios/1985-06-10/ATBIOS-REV2.json5) contains the second IBM PC AT BIOS, dated June 10, 1985.

This BIOS was produced for [5170 Model 239](/machines/pcx86/ibm/5170/#model-239), announced October 10,
1985.  It increased the number of supported hard disk types from 15 to 23, fixed some bugs, and added support for 720Kb
3.5-inch floppy diskette drives.

From [http://minuszerodegrees.net/bios/BIOS_5170_10JUN85_6MHZ.zip](http://minuszerodegrees.net/bios/):

	This is the second BIOS for the IBM 5170.
	It is dated 10JUN85.
	It is found in type 2 motherboards running at 6 Mhz.
	
	U27 has the IBM part number of 6480090, and is 32K in size
	U47 has the IBM part number of 6480091, and is 32K in size
	
	8 bit checksum of 6480090 = 71
	8 bit checksum of 6480091 = 8F
	                            --
	                    added = 00
	
	There are two BIN files in this ZIP file:
	
	1. BIOS_5170_10JUN85_U27_6480090_27256.BIN  --> Use this to create a U27 using a 27256 EPROM (rated at 150nS or faster)
	2. BIOS_5170_10JUN85_U47_6480091_27256.BIN  --> Use this to create a U47 using a 27256 EPROM (rated at 150nS or faster)

The JSON-encoded ROM image that PCjs uses was created using the [FileImage](/tools/fileimage/) command-line *merge* option:

	fileimage --file=/machines/pcx86/ibm/5170/rom/bios/1985-06-10/BIOS_5170_10JUN85_U27_6480090_27256.BIN --merge=/machines/pcx86/ibm/5170/rom/bios/1985-06-10/BIOS_5170_10JUN85_U47_6480091_27256.BIN --output=ATBIOS-REV2.json5 --overwrite

### IBM PC AT ROM BIOS (Rev 3)

[ATBIOS-REV3](bios/1985-11-15/ATBIOS-REV3.json5) contains the third (and last) IBM PC AT BIOS, dated November 15, 1985.

This BIOS was produced for [5170 Models 319 and 339](/machines/pcx86/ibm/5170/#models-319-and-339),
announced April 2, 1986.  It added support for 101-key keyboards and 1.44Mb 3.5-inch floppy diskette drives.

Note that, although minuszerodegrees.net says this revision was found in "type 2 motherboards running at 8 Mhz",
the [Vintage Computer Federation](http://www.vcfed.org/forum/showthread.php?26480) refers to the 8Mhz motherboards as
"Type 3".

From [http://minuszerodegrees.net/bios/BIOS_5170_15NOV85_8MHZ_VARIATION_2.zip](http://minuszerodegrees.net/bios/):

	This is the third BIOS for the IBM 5170.
	It is dated 15NOV85.
	It is found in type 2 motherboards running at 8 Mhz.
	
	U27 has the IBM part number of 61X9266, and is 32K in size
	U47 has the IBM part number of 61X9265, and is 32K in size
	
	8 bit checksum of 61X9266 = 10
	8 bit checksum of 61X9265 = F0
	                            --
	                    added = 00
	
	There are two BIN files in this ZIP file:
	
	1. BIOS_5170_15NOV85_U27_61X9266_27256.BIN  --> Use this to create a U27 using a 27256 EPROM (rated at 150nS or faster)
	2. BIOS_5170_15NOV85_U47_61X9265_27256.BIN  --> Use this to create a U47 using a 27256 EPROM (rated at 150nS or faster)

The JSON-encoded ROM image that PCjs uses was created using the [FileImage](/tools/fileimage/) command-line *merge* option:

	fileimage --file=/machines/pcx86/ibm/5170/rom/bios/1985-11-15/BIOS_5170_15NOV85_U27_61X9266_27256.BIN --merge=/machines/pcx86/ibm/5170/rom/bios/1985-11-15/BIOS_5170_15NOV85_U47_61X9265_27256.BIN --output=ATBIOS-REV3.json5 --overwrite
