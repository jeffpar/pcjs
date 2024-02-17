---
layout: page
title: PCjs Machine Utility
permalink: /tools/pc/
redirect_from: /machines/pcx86/modules/bin/
modules_init:
  - import PC from "/tools/pc/pc.js";
  - new PC("terminal", "fetch https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json msdos;build msdos chkdsk;start");
---

This directory contains the PCjs machine command-line utility [pc.js](https://github.com/jeffpar/pcjs/blob/master/tools/pc/pc.js), which allows you to start a "headless" machine with all TTY (eg, INT 0x10) output redirected to your console, along with an automatically generated hard disk containing all the files in your current (or other specified) directory.

### Playground

Below is a web-based demonstration of how `pc.js` works, using a simulated command prompt and a simulated file system ([PCFS](https://github.com/jeffpar/pcjs/blob/master/machines/modules/v2/pcfs.js)).  Since it runs in a browser, it does not have access to your local files, and there is no provision for saving your work.

It automatically performs `fetch`, `build`, and `start` commands, so you can interact with this `pc.js` demo after those commands have finished and AUTOEXEC.BAT has run `CHKDSK`.

{% include web/textarea.html id="terminal" style="font-size: medium" %}

### Basic Usage

The best way to use `pc.js` is from a *real* command-line.  Here are the prerequisites:

  1. Install [Node and NPM](https://nodejs.org)
  2. Clone the [pcjs](https://github.com/jeffpar/pcjs) repository (eg, `git clone https://github.com/jeffpar/pcjs.git`)
  3. CD into `pcjs` and run `npm install`
  4. From the `pcjs` directory, CD to the `tools/pc` directory

The format of a `pc.js` command (as `--help` will also tell you) is:

    [node] pc.js [machine file] [local directory] [DOS command] [options]

Here is the complete help text:

    pc.js v3.00
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    Options: --help

    usage:
            [node] pc.js [machine file] [local directory] [DOS command] [options]

    machine options:

            --boot=[drive]          select boot drive (A, C, or none)
            --commands[=...]        execute commands, separated by semicolons
            --select=[machine]      select machine configuration file

    disk options:

            --dir=[directory]       use drive directory (default is .)
            --disk=[filename]       use drive disk image (instead of directory)
            --controller=[id]       set drive controller (XT, AT, COMPAQ, or PCJS)
            --drivetype=[value]     set drive type or C:H:S (eg, 306:4:17)
            --fat=[value(s)]        set FAT type (12 or 16), cluster size, etc
            --hidden=[number]       set hidden sectors (default is 1)
            --label=[string]        set volume label of disk image
            --maxfiles=[number]     set maximum local files (default is 1024)
            --normalize=[boolean]   convert text file encoding (default is false)
            --save=[filename]       save drive disk image and exit
            --system=[string]       set operating system type (default is msdos)
            --target=[nK|nM]        set target disk size (default is 10M)
            --version=[#.##]        set operating system version (default is 3.30)

    other options:

            --bare (-b)             omit helper binaries from disk
            --debug (-d)            enable DEBUG messages
            --floppy (-f)           build floppy instead of hard disk
            --halt (-h)             halt machine on startup
            --help (-?)             display command-line usage
            --local (-l)            use local diskette images
            --test (-t)             enable test mode (non-interactive)
            --verbose (-v)          enable verbose mode

    notes:
            --drivetype can also specify a drive geometry (eg, --drivetype=306:4:17)
            --fat can also specify cluster and root directory sizes (eg, --fat=16:2048:512)
            --hidden also disables the use of hidden sectors to work around boot sector bugs
            --system can also specify a version (eg, --system=pcdos:2.0) for convenience

            FAT values should be considered advisory, as it may not be possible to honor them.

    pc.js configuration settings are stored in pc.json5

The first argument is the name of a PCjs machine configuration files, such as [ibm5160.json](ibm5160.json) or [ibm5170.xml](ibm5170.xml), and the second is the name of a folder (eg, `disks/empty`) containing files to copy to the machine's hard disk:

	% pc.js ibm5160 disks/empty

If your operating system doesn't automatically associate `.js` files with [Node](https://nodejs.org/en), then use:

	% node pc.js ibm5160 disks/empty

> NOTE: On Windows, the first time you attempt to run a `.js` file from the command-line, Windows may prompt you to associate a program with it (eg, "C:\Program Files\nodejs\node.exe"), and while this will eliminate the need to type `node`, the association may not automatically pass along any command-line arguments.
> 
> If that happens, you may be able to fix it by running `REGEDIT` and appending ` %*` (space, percent, asterisk) to the default value for `HKEY_CLASSES_ROOT\Applications\node.exe\shell\open\command`:
> 
>     "C:\Program Files\nodejs\node.exe" "%1" %*

For "bare" machine names, `pc.js` looks for a JSON or XML file in its own `/tools/pc` folder; otherwise, you can provide a full path or even the name of a file on the PCjs web server, such as:

	% pc.js https://www.pcjs.org/machines/dec/pdp11/1120/basic/debugger/machine.xml

Alternatively, you can use `--select` anywhere on the command-line to select a machine, as in:

    % pc.js disks/empty --select=ibm5160
    [Press CTRL-D to enter command mode]
    C>

After the machine finishes booting (about 5 seconds), you should see the familiar DOS "C>" prompt.

Besides a machine name and a directory name, you can also specify a third argument, which is an initial DOS command or program to run:

    % pc.js ibm5160 disks/empty "dir *.*"
    [Press CTRL-D to enter command mode]

    Volume in drive C is EMPTY      
    Directory of  C:\

    README   TXT       30   9-07-23   9:24a
            1 File(s)  10473472 bytes free
    C>type readme.txt
    A conveniently empty folder.

    C>type autoexec.bat
    @ECHO OFF
    PATH C:\
    dir *.*

If you omit the machine name, it defaults to `compaq386` (a machine which also starts up faster because it includes a state file that bypasses the power-on tests and floppy boot sequence).  And if you omit the directory name, it defaults to the current directory -- which is why, if you run `pc.js` from the `/tools/pc` folder, you will likely see this error message:

    % pc.js
    pc.js v3.00
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    error: file(s) too large (32536576 bytes total, 10653696 bytes maximum)
    error: unable to build drive

because all the files in the `/tools/pc` folder won't fit on the 10Mb disk image that `pc.js` builds by default.  Specify a folder (or `cd` to a folder) that contains files you actually want to access from DOS.

To destroy the machine, type `quit` at the DOS prompt, or press CTRL-D to enter command mode and access the PCjs debugger.  From there, you can inspect the machine with a variety of debugger commands ("?" will give you a list), or you can press CTRL-C to terminate `pc.js`.

This utility is very much a "work-in-progress" and is intended for development work and testing only.  Also, since it is "headless", you will not see any output from the machine when running any software that writes directly to video memory.

### Customizing the Drive Type

The IBM PC XT, IBM PC AT, and COMPAQ DeskPro 386 are three examples of machines that supported hard disks, and PCjs includes built-in support for all their respective [Hard Drive Types](/machines/pcx86/ibm/hdc/).  For example, if you want your machine to be an PC AT with a Type 2 hard disk, run:

    % pc.js ibm5170 --drivetype=2 
    [Press CTRL-D to enter command mode]

    C:\>load info

    AT drive type 2, CHS 615:4:17, 20.4Mb
    16-bit FAT, 2048-byte clusters, 10398 clusters
    82 FAT sectors (x2), 64 root sectors (1024 entries)
    41752 total sectors, 41523 data sectors, 21295104 data bytes

NOTE: `load info` is a variation of the `load` command (see "Loading Diskettes from the DOS Prompt" below) that displays information about the built-in disk image.

If you don't remember your favorite PC AT drive type, you can just give `pc.js` a target size and let it search the machine's drive table for the closest match:

    % pc.js ibm5170 --target=30.6M
    warning: 62 FAT sectors allocated, but only 61 are required
    [Press CTRL-D to enter command mode]

    C:\>load info

    AT drive type 3, CHS 615:6:17, 30.6Mb
    16-bit FAT, 2048-byte clusters, 15608 clusters
    124 FAT sectors (x2), 64 root sectors (1024 entries)
    62628 total sectors, 62315 data sectors, 31965184 data bytes

Note that the drive tables of AT-class machines usually didn't define any drives smaller than 10Mb, and the smallest drive type the PC XT defined was 5Mb, so using `--target` with smaller sizes won't give you smaller drives on those machines.  To do that, you must bypass the machine's drive table by adding `--controller=pcjs` to the command-line.  For example:

    % pc.js "load info" --sys=pcdos --ver=3.0 --controller=pcjs --target=1M
    [Press CTRL-D to enter command mode]

    C>ECHO OFF

    PCJS drive type 0, CHS 61:2:17, 1.0Mb
    12-bit FAT, 1024-byte clusters, 1012 clusters
    3 FAT sectors (x2), 7 root sectors (112 entries)
    2040 total sectors, 2026 data sectors, 1036288 data bytes

`pc.js` will calculate a drive geometry that matches your target size as closely as possible (1Mb in this case), and then set up a custom `PCJS` drive type.

Finally, for complete control of a custom drive type, you can choose any drive geometry you want by passing a "cylinders:heads:sectors" (CHS) triplet to the `--drivetype` parameter, and since that implies using a `PCJS` drive, you don't need to include `--controller=pcjs`.

For example:

    % pc.js ibm5170 --drivetype=615:5:17
    [Press CTRL-D to enter command mode]
    
    C:\>load info
    
    PCJS drive type 0, CHS 615:5:17, 25.5Mb
    16-bit FAT, 2048-byte clusters, 13003 clusters
    102 FAT sectors (x2), 64 root sectors (1024 entries)
    52190 total sectors, 51921 data sectors, 26630144 data bytes

    C:\>chkdsk
    Volume TEST        created Aug 30, 2023 11:10a
    
     26630144 bytes total disk space
        90112 bytes in 9 hidden files
        45056 bytes in 22 directories
      4306944 bytes in 257 user files
     22188032 bytes available on disk
    
       655360 bytes total memory
       586256 bytes free

Custom drive types work thanks to the [Master Boot Record](https://github.com/jeffpar/pcjs/blob/master/tools/pc/mbr.asm) that I [created](https://www.pcjs.org/blog/2023/09/05/#retro-software-development) specifically for `pc.js`.  It operates exactly like a normal DOS MBR, with the additional ability to install custom drive tables.  And since this is a fully PC-compatible solution, it should work in the "real world" as well -- as long as you don't select a drive geometry that doesn't work with your actual hardware.

One example of a broken machine/drive combination would be any IBM PC XT machine attempting to boot from a drive using something other than 17 sectors/track.  The XT BIOS *does* support custom drive tables, but that support is hard-coded to disks with *only* 17 sectors/track.

### Loading Diskettes from the DOS Prompt

`pc.js` also includes a few special utilities on every disk image it builds, one of which is `LOAD.COM`, which can load PCjs diskettes images into the specified floppy drive:

    load a: PC DOS

That command searches for all PCjs diskettes with "PC" and "DOS" in the diskette name and lists them by number:

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

    load a: 6

You can also search for disks containing a specific file name:

    load a: --file pkunzip.exe

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

    load a: 6

If there were other diskettes with an identical copy of that file that weren't initially listed, they will be listed next:

      1: PKUNZIP.EXE     23528 1990-03-15  "Undocumented Windows"
      2: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #1502"
      3: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2367"
      4: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2491"
      5: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2536"
      6: PKUNZIP.EXE     23528 1990-03-15  "PC-SIG Library Disk #2587"
    ...

If you still want your original selection, use "load a: 1".  You can always give the full diskette name as well:

    load a: undocumented windows

The comparison is case-insensitive and the given string need only be a subset of the desired diskette name; however, if the name is not unique, you'll be presented with another list of diskettes to choose from.

Use `--disk` and `--file` to enter a mix of search criteria.  `--disk` is assumed if there are no other criteria, and `--file` is assumed if the string looks like a filename *and* no other criteria has been specified.  For example:

    load a: pkunzip.exe

is equivalent to `load a: --file pkunzip.exe`, but `--file` can also be useful for casting a wider search net.  For example:

    load a: --file=pkunzip

will match any file with `PKUNZIP` in the name (eg, `PKUNZIP.COM`, `PKUNZIP.EXE`), and:

    load a: --file="pkunzip.*exe"

will match any file with *both* `PKUNZIP` and `EXE` in the name (eg, `PKUNZIP.EXE`, `PKUNZIP2.EXE`), since regular expressions are used internally to perform the matching.

Another option is to load a diskette image directly, using the `--path` option; it supports both local and remote PCjs (.json) disk images and raw (.img) disk images:

    load a: --path /diskettes/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
    load a: --path https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json

and if the file name ends with a `.json` or `.img` extension, then `--path` is assumed.  Be sure to wrap the entire file name with quotes if it contains spaces; eg:

    load a: "my disk image.json"

Lastly, to *unload* a diskette drive, specify "none" as the diskette name, as in:

    load a: none

Note that the `load` command is also available from `pc.js` command mode, which you access by pressing CTRL-D.  Type "help" at the `>>` command mode prompt for list of all available commands.

See "[Loading Diskettes](https://www.pcjs.org/blog/2023/07/15/#loading-diskettes)" in this [blog post](https://www.pcjs.org/blog/2023/07/15/) for more examples of the `load` command.

### Shutting Down

Another utility that `pc.js` provides is `QUIT.COM`, which makes it easy to shut down the machine.  `QUIT.COM` also supports a switch (`/R`) to reboot the machine instead of shutting it down.

### More Information

For more discussion and examples of how to use `pc.js`, check out these other blog posts:

  - [Running DOS Software from the Command-Line](https://www.pcjs.org/blog/2023/07/15/)
  - [Building DOS-Compatible Hard Disks](https://www.pcjs.org/blog/2023/08/10)
  - [Wrapping Up Support for FAT](https://www.pcjs.org/blog/2023/09/05/)

Enjoy!
