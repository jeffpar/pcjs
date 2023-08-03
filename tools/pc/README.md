---
layout: page
title: PCjs Machine Utility
permalink: /tools/pc/
redirect_from: /machines/pcx86/modules/bin/
---

This directory contains the PCjs machine command-line utility [pc.js](pc.js), which allows you to start a "headless" machine with all TTY (eg, INT 0x10) output redirected to your console.

### Starting Machines from the Command-Line

Load a JSON machine configuration file, such as [ibm5150.json](ibm5150.json) or [compaq386.json](compaq386.json), with the utility's `load` command, either interactively or with the `--load` command-line argument.

For example:

	pc.js --load=ibm5150

or, if your operating system doesn't automatically associate `.js` files with [Node](https://nodejs.org/en):

	node pc.js --load=ibm5150

> NOTE: On Windows, the first time you attempt to run a `.js` file from the command-line, Windows may prompt you to associate a program with it (eg, "C:\Program Files\nodejs\node.exe"), and while this will eliminate the need to type `node`, the association may not automatically pass along any command-line arguments.
> 
> If that happens, you may be able to fix it by running `REGEDIT` and appending ` %*` to the default value for `HKEY_CLASSES_ROOT\Applications\node.exe\shell\open\command`:
> 
>     "C:\Program Files\nodejs\node.exe" "%1" %*

If you don't include a full path to the JSON file, `pc.js` will look for the JSON file in the `/tools/pc` folder.  You can also omit the `--load=` option if the name of the JSON file doesn't conflict with another command or program name:

	pc.js ibm5150

Loading [ibm5150.json](ibm5150.json) should produce the following output:

    pc.js v3.00
    Copyright © 2012-2023 Jeff Parsons <Jeff@pcjs.org>
    Options: --load=ibm5150
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

After the machine finishes booting (about 10 seconds), you should see the following output:

    Current date is Tue  1-01-1980
    Enter new date: 

You can begin interacting with the machine OR you can press CTRL-D to enter the PCjs debugger.  For example, if you'd like to dump the machine's video buffer, press CTRL-D and type `D B000:0`:

    Enter new date: stopped (326282712 cycles, 68534 ms, 4760888 hz)
    AX=0091 BX=0165 CX=0586 DX=007F SP=0BAA BP=0535 SI=0140 DI=01AA 
    SS=00DB DS=0070 ES=00DB PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0070:0125 CB               RETF    
    >> D B000:0  
    &B000:0000  43 07 75 07 72 07 72 07-65 07 6E 07 74 07 20 07  C.u.r.r.e.n.t. .
    &B000:0010  64 07 61 07 74 07 65 07-20 07 69 07 73 07 20 07  d.a.t.e. .i.s. .
    &B000:0020  54 07 75 07 65 07 20 07-20 07 31 07 2D 07 30 07  T.u.e. . .1.-.0.
    &B000:0030  31 07 2D 07 31 07 39 07-38 07 30 07 20 07 20 07  1.-.1.9.8.0. . .
    &B000:0040  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0050  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0060  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    &B000:0070  20 07 20 07 20 07 20 07-20 07 20 07 20 07 20 07   . . . . . . . .
    >> 

To destroy the machine, type `quit` (or press CTRL-C) at the debugger prompt.

[pc.js](https://github.com/jeffpar/pcjs/tree/master/tools/pc) is more general-purpose than its predecessor, [pcx86.js](https://github.com/jeffpar/pcjs/tree/2ac6e5e62196212bede02f360634f04a9c358ed9/machines/pcx86/bin), and can theoretically load any other machine type listed in [machines.json](/machines/machines.json), but it has only been tested with `pcx86` and `pdp11` machines so far.

This utility is very much a "work-in-progress" and is intended for development work and testing only.  Also, since it is "headless", you will not see any output from the machine when running any software that writes directly to video memory.

### Support for XML Machine Files

Limited support for XML-based machines now exists; eg:

    pc.js --load=/machines/pcx86/ibm/5170/ega/1024kb/rev3/debugger/machine.xml

loads and runs the same [machine.xml](/machines/pcx86/ibm/5170/ega/1024kb/rev3/debugger/machine.xml) that also exists on the PCjs website.

Here's another example using a `pdp11` [machine.xml](/machines/dec/pdp11/1170/panel/debugger/machine.xml):

    pc.js --load=/machines/dec/pdp11/1170/panel/debugger/machine.xml

### Accessing Local Files from MS-DOS

If you run [pc.js](pc.js) with the name of a DOS command or executable in your current directory; eg:

    pc.js pkunzip.exe

it will automatically build a 10Mb MS-DOS hard disk image in the `/tools/pc` folder with copies of all the files/folders in your current local directory, automatically start a [COMPAQ DeskPro 386](compaq386.json) machine with that disk image mounted as drive C, and then run the specified DOS command or executable.

This allows you to run console-based DOS applications on your modern operating system (eg, macOS or Windows), with excellent IBM PC (or in this case, COMPAQ DeskPro 386) compatibility.  The experience currently comes with a number of caveats, and there are some important limitations to be aware of, such as limits on the size and number of files you can have in your current directory (the overall limit is currently 10Mb) and the fact that only console-based DOS applications are usable in this environment.

If you modify any files on your local file system, those modifications won't show up inside the machine until you restart `pc.js`.  Similarly, any file modifications inside the machine will not show up on your local file system until you terminate `pc.js`.

### Loading Machines and Diskettes

Normally, when you run `pc.js`, a machine is started, either explicitly via `--load`, or implicitly by typing the name of a DOS command or program name.  Otherwise, you can start a machine from the pc.js `>>` prompt, using the "load" internal command; eg:

    >> load compaq386

Once a machine is running, you can access the `>>` prompt by typing **CTRL-D**.  That will stop the machine until you enter the "g" command.  Any command not recognized by `pc.js` is passed to the machine's built-in debugger.  Type "?" to get a list of debugger commands.

The "load" command is also used to load PCjs diskettes images into the machine's floppy drives, by including a drive letter, as in:

    >> load a: PC DOS

That command will search for all PCjs diskettes with "PC" and "DOS" in the diskette name and list them by number:

      1: COMPAQ PC DOS 3.20 Support
      2: Jeff's PC DOS 1.00 with MASM
      3: PC DOS 0.90
      4: PC DOS 1.00
      5: PC DOS 1.10
      6: PC DOS 2.00 (Disk 1)
      7: PC DOS 2.00 (Disk 2)
      8: PC DOS 2.10 (Disk 1)
      9: PC DOS 2.10 (Disk 2)
     10: PC DOS 3.00 (Disk 1)
     11: PC DOS 3.00 (Disk 2)
     12: PC DOS 3.10 (Disk 1)
     13: PC DOS 3.10 (Disk 2)
     14: PC DOS 3.10 (Patched Disk 1)
     15: PC DOS 3.20 (720K)
     16: PC DOS 3.20 (Disk 1)
     17: PC DOS 3.20 (Disk 2)
     18: PC DOS 3.30 (720K)
     19: PC DOS 3.30 (Disk 1)
     20: PC DOS 3.30 (Disk 2)
     21: PC DOS 3.30 (TechRef)
     22: PC DOS 4.00 (Disk 1)
     23: PC DOS 4.00 (Disk 2)
     24: PC DOS 4.00 (Disk 3)
     25: PC DOS 4.00 (Disk 4)
     26: PC DOS 4.00 (Disk 5)
     27: PC DOS 4.00 (TechRef)
     28: PC DOS 4.01 (Disk 1)
     29: PC DOS 4.01 (Disk 2)
     30: PC DOS 5.00 (Disk 1)
     31: PC DOS 5.00 (Disk 2)
     32: PC DOS 5.00 (Disk 3)
     33: PC DOS 5.02 (Disk 1)
     34: PC DOS 5.02 (Disk 2)
     35: PC DOS 5.02 (Disk 3)
     36: PC DOS 6.10 (Disk 1)
     37: PC DOS 6.10 (Disk 2)
     38: PC DOS 6.10 (Disk 3)
     39: PC DOS 6.10 (Disk 4)
     40: PC DOS 6.30 (Disk 1)
     41: PC DOS 6.30 (Disk 2)
     42: PC DOS 6.30 (Disk 3)
     43: PC DOS 6.30 (Disk 4)
     44: PC DOS 6.30 (Disk 5)
     45: PC DOS 7.00 (1.2M Boot)
     46: PC DOS 7.00 (1.44M Boot)
     47: PC DOS 7.00 (Disk 1)
     48: PC DOS 7.00 (Disk 2)
     49: PC DOS 7.00 (Disk 3)
     50: PC DOS 7.00 (Disk 4)
     51: PC DOS 7.00 (Disk 5)

You can then use a second "load" command to load a diskette by number.  For example, to load "PC DOS 2.00 (Disk 1)":

    >> load a: 6

You can also search for disks containing a specific file name:

    >> load a: --file pkunzip.exe

That command will display the following diskettes:

      1: PKUNZIP.EXE    19080 1980-01-01  "PC-SIG Library Disk #3165"
      2: PKUNZIP.EXE    18208 1989-03-06  "PC-SIG Library Disk #0621"
      3: PKUNZIP.EXE    21440 1989-07-21  "PC-SIG Library Disk #0687"
      4: PKUNZIP.EXE    35258 1989-07-21  "PC-SIG Library Disk #2382"
      5: PKUNZIP.EXE    22022 1989-10-01  "Small Computer Book Club (1990)"
      6: PKUNZIP.EXE    23528 1990-03-15  "Undocumented Windows"
      7: PKUNZIP.EXE    19025 1990-03-15  "PC-SIG Library Disk #2715"
      8: PKUNZIP.EXE    19041 1990-03-15  "PC-SIG Library Disk #3036"
      9: PKUNZIP.EXE    19025 1990-03-15  "PC-SIG Library Disk #3475"
     10: PKUNZIP.EXE    22540 1990-06-01  "PC-SIG Library Disk #0765"
     11: PKUNZIP.EXE    17931 1990-09-07  "PC-SIG Library Disk #1773"
     12: PKUNZIP.EXE    23536 1991-01-16  "PC-SIG Library Disk #2835"
     13: PKUNZIP.EXE    19044 1991-04-03  "PC-SIG Library Disk #2610"
     14: PKUNZIP.EXE    19025 1991-08-01  "PC-SIG Library Disk #3245"
     15: PKUNZIP.EXE    19411 1991-10-15  "PC-SIG Library Disk #3220"
     16: PKUNZIP.EXE    29371 1993-01-25  "PC-SIG Library Disk #4052"
     17: PKUNZIP.EXE    29378 1993-02-01  "PC-SIG Library Disk #3418"
     18: PKUNZIP.EXE     2750 1993-02-01  "PC-SIG Library Disk #3853"

which represent 18 different copies of PKUNZIP.EXE.  Differences are based on the file contents, not file size or timestamp.

Again, to load one of the diskettes listed, specify it by number.  For example, to load the diskette named ""Undocumented Windows", use:

    >> load a: 6

If there were other diskettes with an identical copy of that file that weren't initially listed, they will be listed next:

      1: PKUNZIP.EXE     23528 1990-03-15  "Undocumented Windows"
      2: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #1502"
      3: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2367"
      4: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2491"
      5: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2536"
      6: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2587"
    ...

If you still want your original selection, use "load a: 1".  You can always give the full diskette name as well:

    >> load a: undocumented windows

The comparison is case-insensitive and the given string need only be a subset of the desired diskette name; however, if the name is not unique, you'll be presented with another list of diskettes to choose from.

Use `--disk` and `--file` to enter a mix of search criteria.  `--disk` is assumed if there are no other criteria, and `--file` is assumed if the string looks like a filename *and* no other criteria has been specified.  For example:

    >> load a: pkunzip.exe

is equivalent to `load a: --file pkunzip.exe`, but `--file` can also be useful for casting a wider search net.  For example:

    >> load a: --file pkunzip

will match any file with `PKUNZIP` in the name (eg, `PKUNZIP.COM`, `PKUNZIP.EXE`), and:

    >> load a: --file pkunzip exe

will match any file with *both* `PKUNZIP` and `EXE` in the name (eg, `PKUNZIP.EXE`, `PKUNZIP2.EXE`).  There is no support for wildcards, since multiple search terms provide largely the same capability.

### Hard Disk Examples

`pc.js` initially built only 10Mb hard disk images, because 10Mb drives (with 306 cylinders, 4 heads, and 17 sectors/track) were fully supported by both the PC XT (as a type 3 drive) *and* the PC AT (as a type 1 drive).

However, I later decided to add support for 20Mb drives (with 615 cylinders instead of 306), even though only the PC AT and later machines natively supported such a drive.  Another minor issue with 20Mb drives is that our *buildDiskFromFiles()* function in [diskinfo.js](/machines/pcx86/modules/v3/diskinfo.js) only knows how to build FAT12 images (there's no support for building FAT16 or FAT32 images yet), which means that the resulting drive must use a rather large (8K) cluster size, instead of the more typical (2K) cluster size that PC DOS 3.x preferred.  But still, any 20Mb disk image that `pc.js` builds should work fine -- as long as you don't try to use it with a PC XT.

To test 20Mb support, I tried two scenarios:

 1. Running FDISK on a PC AT with PC DOS 3.00
 2. Running FDISK on a PC AT with PC DOS 2.00

Here's scenario #1, using the new hard drive `--capacity` option:

    ~/pcjs/tools/pc/disks % pc.js ibm5170 --capacity=20
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    Current date is Tue  8-01-2023
    Enter new date (mm-dd-yy): 
    Current time is 10:59:45.29
    Enter new time: 

    The IBM Personal Computer DOS
    Version 3.00 (C)Copyright IBM Corp 1981, 1982, 1983, 1984

    A>fdisk
    IBM Personal Computer
    Fixed Disk Setup Program Version 3.00
    (C)Copyright IBM Corp. 1983,1984
    FDISK Options
    Choose one of the following:
        1.  Create DOS partition
        2.  Change Active Partition
        3.  Delete DOS Partition
        4.  Display Partition Data
    Enter choice: []
    Press Esc to return to DOS
    
    Create DOS Partition
    Press Esc to return to FDISK Options
    Do you wish to use the entire fixed
    disk for DOS (Y/N).............?   y
    System will now restart
    Insert DOS diskette in drive A:
    Press any key when ready . . .

    Current date is Tue  8-01-2023
    Enter new date (mm-dd-yy): 
    Current time is 11:00:17.75
    Enter new time: 

    The IBM Personal Computer DOS
    Version 3.00 (C)Copyright IBM Corp 1981, 1982, 1983, 1984

    A>format c:
    WARNING, ALL DATA ON NON-REMOVABLE DISK
    DRIVE C: WILL BE LOST!
    Proceed with Format (Y/N)?y

    Formatting...Format complete

    21309440 bytes total disk space
    21309440 bytes available on disk

    A>stopped (406730230 cycles, 50885 ms, 7993126 hz)
    AX=0000 BX=0000 CX=0007 DX=007F SP=0D12 BP=0000 SI=0041 DI=0041 
    SS=017D DS=017D ES=017D PS=0216 V0 D0 I1 T0 S0 Z0 A1 P1 C0 
    &017D:6019 C3               RET     
    >> save pcdos300-empty.img
    saving drive: pcdos300-empty.img
    >> quit

Here's scenario #2.  Note that I used the `--halt` option to give me the opportunity to load "PC DOS 2.00 (Disk 1)" into drive A: before booting, but it's also possible to force that from the command-line, using the `--system=pcdos` and `--version=2.00` options:

    ~/pcjs/tools/pc/disks % pc.js ibm5170 --capacity=20 --halt
    fault messages enabled
    >> Type ? for help with PCx86 Debugger commands
    AX=0000 BX=0000 CX=0000 DX=0000 SP=0000 BP=0000 SI=0000 DI=0000 
    SS=0000 DS=0000 ES=0000 PS=0002 V0 D0 I0 T0 S0 Z0 A0 P0 C0 
    &F000:FFF0 EA5BE000F0       JMP      &F000:E05B (romBIOS+0xE05B)

    >> load a: pc dos 2.00 disk 1
    total diskettes available: 1480
    loading "PC DOS 2.00 (Disk 1)" in drive A:
    >> g
    running
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    Current date is Tue  1-01-1980
    Enter new date: 
    Current time is 11:34:03.19
    Enter new time: 

    The IBM Personal Computer DOS
    Version 2.00 (C)Copyright IBM Corp 1981, 1982, 1983

    A>fdisk
    IBM Personal Computer
    Fixed Disk Setup Program Version 1.00
    (C)Copyright IBM Corp. 1983
    FDISK Options
    Choose one of the following:
        1.  Create DOS Partition
        2.  Change Active Partition
        3.  Delete DOS Partition
        4.  Display Partition Data
    Enter choice: []
    Press Esc to return to DOS
    
    IBM Personal Computer
    Fixed Disk Setup Program Version 1.00
    (C)Copyright IBM Corp. 1983
    Create DOS Partition
    Press Esc to return to FDISK Options
    Do you wish to use the entire fixed
    disk for DOS (Y/N)................?   y
    Insert DOS diskette in drive A:
    Press any key when ready . . .
    Current date is Tue  1-01-1980
    Enter new date: 
    Current time is 11:34:19.28
    Enter new time: 

    The IBM Personal Computer DOS
    Version 2.00 (C)Copyright IBM Corp 1981, 1982, 1983

    A>format c:
    Press any key to begin formatting C: 

    Formatting...Format complete

    21331968 bytes total disk space
    21331968 bytes available on disk

    A>stopped (287899220 cycles, 35999 ms, 7997423 hz)
    AX=0001 BX=0000 CX=0007 DX=007F SP=0BB4 BP=0000 SI=004C DI=001B 
    SS=00E3 DS=00E3 ES=00E3 PS=0213 V0 D0 I1 T0 S0 Z0 A1 P0 C1 
    &00E3:3975 53               PUSH     BX
    >> save pcdos200-empty.img
    saving drive: pcdos200-empty.img
    >> quit

Now let's compare the partition tables and BPBs of the two disks.  Here are the relevant bytes from the PC DOS 3.00 disk image:

    000001e0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 80 01  |................|
    000001f0  01 00 04 03 91 65 11 00  00 00 07 a3 00 00 55 aa  |.....e........U.|
    *
    00002200  eb 2a 90 49 42 4d 20 20  33 2e 30 00 02 04 01 00  |.*.IBM  3.0.....|
    00002210  02 00 02 07 a3 f8 29 00  11 00 04 00 11 00 80 00  |......).........|
    00002220  14 00 00 00 00 0f 00 00  00 00 00 00 fa 33 c0 8e  |.............3..|

And here are the same bytes from the PC DOS 2.00 disk image:

    000001e0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 80 00  |................|
    000001f0  02 00 01 03 91 65 01 00  00 00 17 a3 00 00 55 aa  |.....e........U.|
    *
    00000200  eb 2c 90 49 42 4d 20 20  32 2e 30 00 02 10 01 00  |.,.IBM  2.0.....|
    00000210  02 00 04 17 a3 f8 08 00  11 00 04 00 01 00 80 00  |................|
    00000220  0a df 02 25 02 09 2a ff  50 f6 00 02 cd 19 fa 33  |...%..*.P......3|

The main differences are:

  - Partition type: PC DOS 3.00 uses type 4 (16-bit FAT for drives with less than 65536 sectors); PC DOS 2.00 uses type 1 (12-bit FAT)
  - Partition placement: PC DOS 3.00 skips 16 sectors (17 hidden sectors); PC DOS 2.00 skips 0 sectors (1 hidden sector)
  - Cluster size: PC DOS 3.00 allocates 4 sectors (2K) per cluster; PC DOS 2.00 allocates 16 sectors (8K) per cluster
  - FAT size: PC DOS 3.00 allocates 41 (0x29) sectors per FAT (82 sectors total); PC DOS 2.00 allocates 8 sectors per FAT (16 sectors total)
  - Root directory size: PC DOS 3.00 allocates 512 (0x200) entries for a total of 32 sectors; PC DOS 2.00 allocates 1024 (0x400) entries for a total of 64 sectors

There are 41,751 (0xA317) total sectors, which is calculated as 614 cylinders (the 615th cylinder is reserved for diagnostic use and head parking) multiplied by 4 heads multiplied by 17 sectors/track, minus 1 for the boot sector.

For PC DOS 2.00, available sectors are 41,751 - 1 - 64 - 16, or 41,670 sectors, or 2,604 total (8K) clusters, for a total of 21,331,968 bytes.

For PC DOS 3.00, available sectors are 41,751 - 17 - 32 - 82, or 41,620 sectors, or 10,405 total (2K) clusters, for a total of 21,309,440 bytes.

So, PC DOS 2.00 was able to provide a bit more space by: 1) placing the partition on the first track instead of the second track, and 2) using a smaller FAT, thanks to fewer *and* smaller (12-bit) FAT entries, even while providing a larger root directory (1024 entries instead of 512).

It was also nice to see that, even though PC DOS 2.00 was designed for the PC XT (which did *not* natively support a drive as large as 20Mb), PC DOS 2.00 could run on a PC AT *and* successfully partition and format a 20Mb drive -- even though it had to use a rather unwieldy cluster size (8K).  PC DOS 2.00 had other minor limitations, such as being unaware of the PC AT's real-time clock and current date.  But on the whole, it was usable.

However, PC DOS 3.00 was obviously preferable, since it supported PC AT features like 1.2M diskette drives and the real-time clock, and it could also format disks with much smaller (2K) clusters, thanks to the "new" 16-bit FAT.  PC DOS 3.00 still supported disks using a 12-bit FAT, even disks for which it would have preferred a 16-bit FAT, as long as other criteria were met, such as an OEM signature of "**IBM  2.0**" in the disk's BPB.  That makes *some* sense, since nowhere else in the BPB is there any indication of FAT entry size, and PC DOS 2.x supported *only* 12-bit FAT entries.  But ideally, PC DOS should have just relied on the partition type (1) in the Master Boot Record (MBR) *or* defined some new field or value in the BPB to indicate the type of FAT.

### Historical Notes

One early use of the `pc.js` utility was running a set of [80386 CPU Tests](https://github.com/jeffpar/pcjs/blob/master/software/pcx86/test/cpu/80386/test386.asm) as a custom ROM image inside an [80386 Test Machine](https://github.com/jeffpar/pcjs/blob/master/tools/pc/test386.json), and then comparing the results to [output](/software/pcx86/test/cpu/80386/test386.txt) from real hardware.

The test program ([test386.asm](/software/pcx86/test/cpu/80386/test386.asm)) was carefully designed to be built as a binary (`test386.com`) that could either be run as a DOS program *or* loaded as a ROM image.  See [PCx86 CPU Tests](/software/pcx86/test/cpu/) for more information.
