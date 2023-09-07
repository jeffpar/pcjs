---
layout: page
title: PCjs Machine Utility
permalink: /tools/pc/
redirect_from: /machines/pcx86/modules/bin/
---

This directory contains the PCjs machine command-line utility [pc.js](pc.js), which allows you to start a "headless" machine with all TTY (eg, INT 0x10) output redirected to your console.

### Basic Usage

The format of a `pc.js` command (as `--help` will also tell you) is:

    [node] pc.js [machine file] [local directory] [DOS command] [options]

The first argument is the name of a PCjs machine configuration files, such as [ibm5160.json](ibm5160.json) or [ibm5170.xml](ibm5170.xml), and the second is the name of a folder (eg, `empty`) containing files to copy to the machine's hard disk:

	% pc.js ibm5156 empty

If your operating system doesn't automatically associate `.js` files with [Node](https://nodejs.org/en), then use:

	% node pc.js ibm5160 empty

> NOTE: On Windows, the first time you attempt to run a `.js` file from the command-line, Windows may prompt you to associate a program with it (eg, "C:\Program Files\nodejs\node.exe"), and while this will eliminate the need to type `node`, the association may not automatically pass along any command-line arguments.
> 
> If that happens, you may be able to fix it by running `REGEDIT` and appending ` %*` to the default value for `HKEY_CLASSES_ROOT\Applications\node.exe\shell\open\command`:
> 
>     "C:\Program Files\nodejs\node.exe" "%1" %*

For "bare" machine names, `pc.js` looks for a JSON or XML file in its own `/tools/pc` folder; otherwise, you can provide a full path or even the name of a file on the PCjs web server, such as:

	% pc.js https://www.pcjs.org/machines/dec/pdp11/1120/basic/debugger/machine.xml

Alternatively, you can use `--start` anywhere on the command-line to specify a machine, as in:

    % pc.js empty --start=ibm5160
    [Press CTRL-D to enter command mode]
    C>

After the machine finishes booting (about 5 seconds), you should see the familiar DOS "C>" prompt.

Besides a machine name and a directory name, you can also specify a third argument, which is an initial DOS command or program to run:

    % pc.js ibm5160 empty "dir *.*"
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
    Copyright © 2012-2023 Jeff Parsons <Jeff@pcjs.org>
    error: file(s) too large (32536576 bytes total, 10653696 bytes maximum)
    error: unable to build drive

because all the files in the `/tools/pc` folder won't fit on the 10Mb disk image that `pc.js` builds by default.  Specify a folder (or `cd` to a folder) that contains files you actually want to access from DOS.

To destroy the machine, type `QUIT` at the DOS prompt, or press CTRL-D to enter command mode and access the PCjs debugger.  From there, you can inspect the machine with a variety of debugger commands ("?" will give you a list), or you can press CTRL-C to terminate `pc.js`.

This utility is very much a "work-in-progress" and is intended for development work and testing only.  Also, since it is "headless", you will not see any output from the machine when running any software that writes directly to video memory.

### Accessing Local Files from MS-DOS

If you run [pc.js](pc.js) with the name of a DOS command or executable in your current directory; eg:

    % pc.js pkunzip.exe

it will automatically build a 10Mb MS-DOS hard disk image in the `/tools/pc/disks` folder with copies of all the files/folders in your current local directory, then start a [COMPAQ DeskPro 386](compaq386.json) machine with that disk image mounted as drive C, and then run the specified DOS command or executable.

This allows you to run console-based DOS applications on your modern operating system (eg, macOS or Windows), with IBM PC (or in this case, COMPAQ DeskPro 386) compatibility.

The experience currently comes with a number of caveats, and there are some important limitations to be aware of, such as limits on the size and number of files you can have in your current directory (the default limit is 10Mb) and the fact that only console-based DOS applications are usable in this environment.

If you modify any files on your local file system, those modifications won't show up inside the machine until you restart `pc.js`.  Similarly, any file modifications inside the machine will not show up on your local file system until you terminate `pc.js`.

### Loading Diskettes Into Machines

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

    load a: --file pkunzip

will match any file with `PKUNZIP` in the name (eg, `PKUNZIP.COM`, `PKUNZIP.EXE`), and:

    load a: --file pkunzip exe

will match any file with *both* `PKUNZIP` and `EXE` in the name (eg, `PKUNZIP.EXE`, `PKUNZIP2.EXE`).  There is no support for wildcards, since multiple search terms provide largely the same capability.

Note that the `LOAD` command is also available from `pc.js` command mode, which you access by pressing CTRL-D.  Type "help" at the `>>` command mode prompt for list of all available commands.

See "[Loading Disks](/blog/2023/07/15/#loading-disks)" for more examples of the `LOAD` command.

### Shutting Down

Another utility that `pc.js` provides is `QUIT.COM`, which makes it easy to shut down the machine.  `QUIT` also supports a switch (`/R`) to reboot the machine instead of shutting it down.

### More Information

For more discussion and examples of how to use `pc.js`, check out these blog posts:

  - [Running DOS Software from the Command-Line](/blog/2023/07/15/)
  - [Building DOS-Compatible Hard Disks](/blog/2023/08/10)
  - [Wrapping Up Support for FAT](/blog/2023/09/05/)
