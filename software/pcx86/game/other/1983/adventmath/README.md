---
layout: page
title: "Adventures in Math (1983)"
permalink: /software/pcx86/game/other/1983/adventmath/
redirect_from: /apps/pcx86/1983/adventmath/
machines:
  - id: ibm5150-adventmath
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/64kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: Adventures in Math 1.00
    autoType: $date\rB:\rA:BASICA CASTLE\r
---

To start "Adventures in Math" (if it doesn't start automatically), either press the **Reset** button or, at the DOS prompt, switch to drive B: and run "A:BASICA CASTLE".

{% include machine.html id="ibm5150-adventmath" %}

### Adventures in Archiving

The files for this game were obtained from the [Internet Archive](https://archive.org/details/msdos_Adventures_in_Math_1983).  The contents of their ZIP archive contained:

	-rwxr-xr-x@ 1 Jeff  staff  18688 Dec 24  1996 Adventur.bas
	-rwxr-xr-x@ 1 Jeff  staff      0 Dec 24  1996 Adventures in Math (1983).ba1
	-rwxr-xr-x@ 1 Jeff  staff  54277 Dec 24  1996 Basica.exe
	-rwxr-xr-x@ 1 Jeff  staff  11904 Dec 24  1996 Castle.bas
	-rwxr-xr-x@ 1 Jeff  staff   6400 Dec 24  1996 Exit.bas
	-rwxr-xr-x@ 1 Jeff  staff   4992 Dec 24  1996 Help.bas
	-rwxr-xr-x@ 1 Jeff  staff   1418 Dec 24  1996 Maze1
	-rwxr-xr-x@ 1 Jeff  staff   2179 Dec 24  1996 Maze2
	-rwxr-xr-x@ 1 Jeff  staff   3892 Dec 24  1996 Maze3
	-rwxr-xr-x@ 1 Jeff  staff  10496 Dec 24  1996 Monocode.000
	-rwxr-xr-x@ 1 Jeff  staff     15 Dec 24  1996 Run.bat
	-rwxr-xr-x@ 1 Jeff  staff     13 Dec 24  1996 Sn
	-rwxr-xr-x@ 1 Jeff  staff    369 Dec 24  1996 Topten

Unfortunately, that archive did not contain a complete dump of the original "Adventures in Math" diskette, and all the files in the archive were dated "Dec 24 1996", making their authenticity questionable.

After digging around a bit more on the Internet Archive, I discovered that [A Large Collection of DOS Collections](https://archive.org/details/large_dos_collection_2013_08) contained:

- DOS Collection v0.7/DVD1/Adventures In Math (1983)(Ibm).zip
- main torrent/1983/Adventures in Math (1983)(IBM) [Educational].zip

In the first ZIP file:

	-rw-r--r--@ 1 Jeff  staff  18688 Dec 24  1996 adventur.bas
	-rw-r--r--@ 1 Jeff  staff     16 Dec 24  1996 autoexec.bat
	-rw-r--r--@ 1 Jeff  staff  54277 Dec 24  1996 basica.exe
	-rw-r--r--@ 1 Jeff  staff  11904 Dec 24  1996 castle.bas
	-rw-r--r--@ 1 Jeff  staff   4964 Dec 24  1996 command.com
	-rw-r--r--@ 1 Jeff  staff   6400 Dec 24  1996 exit.bas
	-rw-r--r--@ 1 Jeff  staff   4992 Dec 24  1996 help.bas
	-rw-r--r--@ 1 Jeff  staff   1418 Dec 24  1996 maze1
	-rw-r--r--@ 1 Jeff  staff   2179 Dec 24  1996 maze2
	-rw-r--r--@ 1 Jeff  staff   3892 Dec 24  1996 maze3
	-rw-r--r--@ 1 Jeff  staff  10496 Dec 24  1996 monocode.000
	-rw-r--r--@ 1 Jeff  staff     13 Dec 24  1996 sn
	-rw-r--r--@ 1 Jeff  staff    369 Dec 24  1996 topten

And in the second ZIP file:

	-rw-r--r--@ 1 Jeff  staff  18688 Aug 11  1983 Adventur.bas
	-rw-r--r--@ 1 Jeff  staff  54277 Sep 17  1999 Basica.exe
	-rw-r--r--@ 1 Jeff  staff  11904 Aug 11  1983 Castle.bas
	-rw-r--r--@ 1 Jeff  staff   6400 Aug 11  1983 Exit.bas
	-rw-r--r--@ 1 Jeff  staff   4992 Aug 11  1983 Help.bas
	-rw-r--r--@ 1 Jeff  staff   1418 Aug 11  1983 Maze1
	-rw-r--r--@ 1 Jeff  staff   2179 Aug 11  1983 Maze2
	-rw-r--r--@ 1 Jeff  staff   3892 Aug 11  1983 Maze3
	-rw-r--r--@ 1 Jeff  staff  10496 Dec 19  1985 Monocode.000
	-rw-r--r--@ 1 Jeff  staff     15 Jan  4  2003 Run.bat
	-rw-r--r--@ 1 Jeff  staff     13 Aug 11  1983 Sn
	-rw-r--r--@ 1 Jeff  staff    369 Sep 17  1999 Topten
	-rw-r--r--@ 1 Jeff  staff    170 Jan 22  2011 file_id.diz

I decided to start with the contents of the second ZIP file, since the timestamps of most of the files appeared to be legitimate.

One strange file common to *all* the archives was **MONOCODE.000**.  Dumping that file revealed:

	00000c60  20 4d 4f 4e 4f 50 4f 4c  59 20 69 73 20 61 20 72  | MONOPOLY is a r|
	00000c70  65 67 69 73 74 65 72 65  64 20 74 72 61 64 65 6d  |egistered tradem|
	00000c80  61 72 6b 20 6f 66 20 50  61 72 6b 65 72 20 42 72  |ark of Parker Br|
	00000c90  6f 74 68 65 72 73 2c 20  49 6e 63 2e e8 f7 7d e8  |others, Inc...}.|
	00000ca0  a1 64 e8 d4 79 e8 d6 7d  3c 20 20 20 20 20 20 20  |.d..y..}<       |
	00000cb0  20 20 20 20 20 20 4d 53  2d 44 4f 53 20 61 64 61  |      MS-DOS ada|
	00000cc0  70 74 61 74 69 6f 6e 20  28 43 29 20 31 39 38 35  |ptation (C) 1985|
	00000cd0  20 44 6f 6e 20 50 68 69  6c 6c 69 70 20 47 69 62  | Don Phillip Gib|
	00000ce0  73 6f 6e 20 5b e8 96 7d  03 35 2e 31 b8 5d 00 50  |son [..}.5.1.].P|

So at some point, unrelated "MONOPOLY" files were mingled with this game.  I deleted **MONOCODE.000**.

Another unexpected file was **BASICA.EXE** (54277 bytes) from 1999.  It seems unlikely that IBM would have distributed *any* BASIC binary with this game, because DOS was a prerequisite, and at the time, all versions of DOS included BASIC.  IBM's PC DOS shipped with **BASICA.COM** and OEM versions of DOS shipped with either **GWBASIC.EXE** or **BASIC.EXE**.

Unsurprisingly, this **BASICA.EXE** is neither from 1999 nor from IBM.  It's virtually identical to the circa 1983 **BASICA.EXE** found in [COMPAQ DOS 1.11](/software/pcx86/sys/dos/compaq/1.11/), and it's 5 bytes larger only because the string "MsDos" was appended to the file.  They both contain the following strings:

	The COMPAQ Personal Computer BASIC
	Version 1.13
	(C) Copyright COMPAQ Computer Corp. 1983

It's safe to say that IBM would not have distributed a COMPAQ binary; if IBM had distributed any BASIC binary at all, it would have been their own **BASICA.COM**.  Of course, the problem with IBM's **BASICA.COM** is that it also requires an IBM PC with ROM BASIC installed, which is why some people would have preferred the COMPAQ binary: it had no ROMdependencies.  Anyway, I deleted **BASICA.EXE**.

Finally, there was **FILE_ID.DIZ**:

	Adventures in Math (1983)(IBM) [Educational].zip
	Name:Adventures in Math
	Version:1.0
	Language/Country:English
	Flags:
	Year:1983
	Publisher:IBM
	Genre(s):Educational

and **RUN.BAT**:

	basica castle

and **TOPTEN**:

	The Ultimate One,83519,LARGE,07-15-81
	MathsWhiz,78613,LARGE,01-01-80
	[z],70946,LARGE,07-13-81
	[z],56728,LARGE,04-24-80
	[z],56727,LARGE,07-25-81
	[z], 56277,LARGE,07-28-81
	[z],56157,LARGE,07-24-81
	[z],55677,LARGE,07-24-81
	[z],55197,LARGE,07-23-81
	[z],54792,LARGE,07-23-81
	^Z,07-28-81
	[z],56157,LARGE,07-24-81
	Z[z],55677,LARGE,07-24-81
	[z],55197,LARGE,07-23-81

All those files were deleted as well, leaving 8 files dated "Aug 11 1983".  Next, I used the PCjs [DiskImage](/tools/diskimage/) utility to create a disk image from a directory ("archive/ADVENTMATH-100/") containing those files:
 
	diskimage.js --dir=archive/ADVENTMATH-100/ --label=ADVEMATH100 --output=ADVENTMATH-100.json

Here's a directory listing of the resulting 160Kb disk image:

	 Volume in drive A is ADVEMATH100
	 Directory of  A:\

	ADVENTUR BAS     18688 08-11-83  12:00p
	CASTLE   BAS     11904 08-11-83  12:00p
	EXIT     BAS      6400 08-11-83  12:00p
	HELP     BAS      4992 08-11-83  12:00p
	MAZE1             1418 08-11-83  12:00p
	MAZE2             2179 08-11-83  12:00p
	MAZE3             3892 08-11-83  12:00p
	SN                  13 08-11-83  12:00p
	        8 file(s)      49486 bytes
	                      108544 bytes free

This disk has now been added to the PCjs IBM PC Disk Library as "Adventures in Math (1983)".

To run the game, I originally selected an [IBM PC (Model 5150, 64Kb) with Color Display](/machines/pcx86/ibm/5150/cga/), which boots PC DOS 2.00 by default.  However, in the course of starting the game, it crashed:

![ADVENTMATH-CRASH](images/crash.png)

It appeared to run fine with 256Kb of RAM, but these were IBM's "System Requirements" for the game:
 
> IBM Color Display, or a television

> 64Kb of memory for PC and PC XT, 128KB for PCjr

> One diskette drive

so I reconfigured the machine to boot PC DOS 1.00, which requires less RAM than PC DOS 2.00, and that worked. Note that the game was released in October 1983, well after the March 1983 release of PC DOS 2.00, so it should have been tested with PC DOS 2.00 on a 64Kb machine, but perhaps it wasn't.

The machine on this page is configured with the following "autoType" sequence:
 
	autoType: $date\rB:\rA:BASICA CASTLE\r

which translates to:

	<today's date>      [enter an arbitrary date]
	B:                  [switch to drive B:]
	A:BASICA CASTLE     [run BASICA on drive A: and load CASTLE.BAS on drive B:]

This is one of the preferred methods of demonstrating software in PCjs: loading unmodified disk images into machines that match the software's system requirements as closely as possible, powering the machine, and then automatically executing a series of commands appropriate for the hardware and software combination.

The other preferred method is to use a machine state file, which restores the machine to a state where the software is already running.  That's the quickest method for starting the software, and it's useful when the software has an involved installation process, but it takes more effort to set up.  The [VisiCalc (1981)](/software/pcx86/app/other/visicalc/1981/) demo is configured that way, but that's purely a matter of convenience -- and because it predates the "autoType" feature.

### References

  - [MobyGames](http://www.mobygames.com/game/dos/adventures-in-math)
  - [Internet Archive](https://archive.org/details/msdos_Adventures_in_Math_1983)

### Directory of Adventures in Math 1.00

     Volume in drive A is ADVEMATH100
     Directory of A:\

    ADVENTUR BAS     18688   8-11-83  12:00p
    CASTLE   BAS     11904   8-11-83  12:00p
    EXIT     BAS      6400   8-11-83  12:00p
    HELP     BAS      4992   8-11-83  12:00p
    MAZE1             1418   8-11-83  12:00p
    MAZE2             2179   8-11-83  12:00p
    MAZE3             3892   8-11-83  12:00p
    SN                  13   8-11-83  12:00p
            8 file(s)      49486 bytes
                          108544 bytes free

[[Source](https://archive.org/details/large_dos_collection_2013_08)]
