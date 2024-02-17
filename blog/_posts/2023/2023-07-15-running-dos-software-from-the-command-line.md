---
layout: post
title: Running DOS Software from the Command-Line
date: 2023-07-15 10:00:00
permalink: /blog/2023/07/15/
---

Recently, I've been working on a command-line utility that uses PCjs machines to run DOS software on modern operating systems, and it's called, aptly enough, `pc.js`.

Let's run through a few examples.  All you need to get started is:

  1. Install [Node and NPM](https://nodejs.org)
  2. Clone the [pcjs](https://github.com/jeffpar/pcjs) repository (eg, `git clone https://github.com/jeffpar/pcjs.git`)
  3. CD into `pcjs` and run `npm install`

For the examples below, I'm using Ubuntu Linux (hence the `$` prompt), but I've also tested `pc.js` on **macOS** and **Windows**.  If you run into issues, take a look at the [pc.js](/tools/pc/) page on the [PCjs](https://www.pcjs.org) website.

I also recommend adding the "pcjs/tools/pc" and "pcjs/tools/diskimage" directories to your PATH, so that you can run `pc.js` and `diskimage.js` from any location.  Alternatively, you can always use relative paths, like I've used in the examples.

The first example uses an original IBM PC (Model 5150), which didn't support hard disks, and since we've also disabled booting from a floppy with `--boot=none`, all we can do is run some BASIC commands from the machine's built-in BASIC interpreter:

    $ cd tools/pc
    $ pc.js ibm5150 --boot=none
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    1LIST   2RUN←   3LOAD"  4SAVE"  5CONT←  6,"LPT1 7TRON←  8TROFF← 9KEY    0SCREEN 
    The IBM Personal Computer Basic 
    Version C1.00 Copyright IBM Corp 1981 
    61404 Bytes free
    Ok 
    print 2+2
    4 
    Ok 
    10 for i=1 to 10:print "hello world";i:next i
    list
    10 FOR I=1 TO 10:PRINT "hello world";I:NEXT I                                   
    Ok 
    run
    hello world 1 
    hello world 2 
    hello world 3 
    hello world 4 
    hello world 5 
    hello world 6 
    hello world 7 
    hello world 8 
    hello world 9 
    hello world 10 
    Ok 

So what just happened?  BASICally, `pc.js` started an IBM PC Model 5150 with ROM BASIC, routing all text output to your terminal window and converting all text input into IBM PC keyboard presses, providing a reasonably seamless experience.  That first line of output:

    1LIST   2RUN←   3LOAD"  4SAVE"  5CONT←  6,"LPT1 7TRON←  8TROFF← 9KEY    0SCREEN 

is a list of supported function keys that would *normally* appear on the bottom (25th) row of an IBM PC monitor, but `pc.js` makes no attempt to render characters at specific screen locations -- it simply outputs characters in the same order that the machine displays them.

As for the **Press CTRL-D to enter command mode** message at the beginning, `pc.js` is just letting you know that CTRL-D will allow you to stop the machine and enter what it calls "command mode".  If the machine also includes the PCjs debugger, command mode gives you access to all PCjs debugger commands, too.

From command mode, you can also press **CTRL-C to terminate pc.js** (or use the "quit" command).  If you're not in command mode, then **CTRL-C** just does whatever it's supposed to do inside the machine.  To exit command mode and continue running the machine, use the "g" (go) command.

Getting back to the first example above, let's press CTRL-D for the `pc.js` command mode prompt, and then use the `quit` command to get back to the operating system prompt.

    stopped (1027856675 cycles, 215793 ms, 4763160 hz)
    AX=0000 BX=003A CX=0008 DX=008A SP=F9E8 BP=00A0 SI=0074 DI=0075 
    SS=0060 DS=0040 ES=0060 PS=F046 V0 D0 I0 T0 S0 Z1 A0 P1 C0 
    &F000:E850 74F3             JZ       E845 (romBIOS+0x0845)
    >> help
    internal commands:

    abort   terminate without saving
    build   build disk for specified drive type
    exec    execute a local command
    fetch   read disk image and extract to directory
    load    load drive with specified diskette
    save    save disk to directory or as disk image
    select  select a new machine (eg, ibm5170)
    start   start new machine
    stop    stop current machine (does not save)
    quit    save all changed files and terminate

    type "?" for a list of debugger commands (eg, "g" to continue running)
    >> quit
    $

### Working With Files

Now let's dive into a much more interesting example.  Imagine we have a small collection of DOS files and programs.  There's a PCjs hard disk image we can use for this demonstration, so we'll start by running `pc.js` in interactive mode (`--commands`) and then use the `fetch`, `build` and `start` commands to extract all the files from that hard disk image, build a local hard disk image from those files, and then boot from that disk image using our default machine (a COMPAQ DeskPro 386):

    $ pc.js --commands
    pc.js v3.00
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    Options: --commands
    [Type help for list of commands, CTRL-C to terminate]
    >> fetch https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json disks/msdos
    >> build disks/msdos chkdsk
    reading files: /Users/jeff/Sites/pcjs/tools/pc/disks/msdos/
    building drive: /Users/jeff/Sites/pcjs/tools/pc/disks/msdos.json
    >> start
    loading machine: compaq386.json
    >> [Press CTRL-D to enter command mode]
    Volume MSDOS       created Jun 26, 2023 10:05a

     10588160 bytes total disk space
       106496 bytes in 9 hidden files
        86016 bytes in 21 directories
      4575232 bytes in 252 user files
      5820416 bytes available on disk

       655360 bytes total memory
       586256 bytes free

To run a program from the `disks/msdos` folder, such as the DOS `CHKDSK` utility, just run `pc.js` with name of the program, including any arguments it might need:

    $ pc.js disks/msdos chkdsk
    [Press CTRL-D to enter command mode]
    Volume MSDOS       created Jun 26, 2023 10:15a

     10588160 bytes total disk space
       106496 bytes in 9 hidden files
        86016 bytes in 21 directories
      4575232 bytes in 252 user files
      5820416 bytes available on disk

       655360 bytes total memory
       586256 bytes free

If the DOS command you want to run includes wildcards (eg, `DIR *.*`), put it in quotes to prevent your shell from expanding them:

    $ pc.js disks/msdos "dir *.*"
    [Press CTRL-D to enter command mode]

     Volume in drive C is MSDOS      
     Directory of  C:\

    AUTOEXEC BAT      194   6-26-23  10:18a
    CONFIG   SYS       22   1-01-80  12:03a
    DOS          <DIR>      6-26-23  10:05a
    PUZZLED      <DIR>      6-26-23  10:05a
    TMP          <DIR>      1-01-80  12:13a
    TOOLS        <DIR>      6-26-23  10:05a
            6 File(s)   5820416 bytes free

This collection of files also includes a Microsoft C Compiler, so we can try compiling and running some C demo programs:

    C:\>cd tools

    C:\TOOLS>dir

    Volume in drive C is MSDOS      
    Directory of  C:\TOOLS

    .            <DIR>      7-15-23   9:23a
    ..           <DIR>      7-15-23   9:23a
    BIN          <DIR>      7-15-23   9:23a
    BINB         <DIR>      1-01-80  12:11a
    C4BIN        <DIR>      7-15-23   9:23a
    C4CV         <DIR>      7-15-23   9:23a
    C4DEMO       <DIR>      7-15-23   9:23a
    C4INC        <DIR>      7-15-23   9:23a
    C4LIB        <DIR>      7-15-23   9:23a
    C4START      <DIR>      7-15-23   9:23a
    C4WIN        <DIR>      7-15-23   9:23a
    MASM4        <DIR>      7-15-23   9:23a
    TOOLS    DIS      944   9-27-86  11:33a
    TOOLS    INI     2725   1-01-80  12:06a
    Z        TXT    72235  11-05-86  10:53a
        15 File(s)   6086656 bytes free

    C:\TOOLS>cd c4demo

    C:\TOOLS\C4DEMO>dir

    Volume in drive C is MSDOS      
    Directory of  C:\TOOLS\C4DEMO

    .            <DIR>      7-15-23   9:23a
    ..           <DIR>      7-15-23   9:23a
    DEMO     C        419   6-27-86   4:00a
    SIEVE    C        788   6-27-86   4:00a
            4 File(s)   6086656 bytes free

    C:\TOOLS\C4DEMO>cl demo.c
    Microsoft (R) C Compiler  Version 4.00
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    demo.c
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Object Modules [.OBJ]: DEMO.OBJ 
    Run File [DEMO.EXE]: DEMO.EXE/NOI
    List File [NUL.MAP]: NUL
    Libraries [.LIB]: ;

    C:\TOOLS\C4DEMO>demo
    C:\TOOLS\C4DEMO\DEMO.EXE
    COMSPEC=C:\COMMAND.COM
    PROMPT=$P$G
    PATH=C:\;C:\TOOLS\C4BIN;C:\TOOLS\MASM4;C:\TOOLS\BIN;C:\TOOLS\BINB;C:\DOS
    INCLUDE=C:\TOOLS\C4INC
    LIB=C:\TOOLS\C4LIB
    TMP=C:\TMP
    USER=C:\TOOLS

    C:\TOOLS\C4DEMO>cl sieve.c
    Microsoft (R) C Compiler  Version 4.00
    Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.

    sieve.c
    Microsoft (R) Overlay Linker  Version 3.51
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.

    Object Modules [.OBJ]: SIEVE.OBJ 
    Run File [SIEVE.EXE]: SIEVE.EXE/NOI
    List File [NUL.MAP]: NUL
    Libraries [.LIB]: ;

    C:\TOOLS\C4DEMO>sieve
    150 iterations: 1027 primes

    C:\TOOLS\C4DEMO>dir

    Volume in drive C is MSDOS      
    Directory of  C:\TOOLS\C4DEMO

    .            <DIR>      7-15-23   9:23a
    ..           <DIR>      7-15-23   9:23a
    DEMO     C        419   6-27-86   4:00a
    SIEVE    C        788   6-27-86   4:00a
    DEMO     OBJ      391   7-15-23   9:50a
    DEMO     EXE     6402   7-15-23   9:50a
    SIEVE    OBJ      494   7-15-23   9:50a
    SIEVE    EXE    14662   7-15-23   9:50a
            8 File(s)   6053888 bytes free

    C:\TOOLS\C4DEMO>quit
    $

That last command, `quit`, runs a special program that `pc.js` automatically includes with the machine, to gracefully return to your own operating system.

And, if you take a peek inside the folder that corresponds to `C:\TOOLS\C4DEMO`, you'll see that all the files created by the Microsoft C Compiler, such as `DEMO.EXE` and `SIEVE.EXE` have been preserved:

    $ ls -l TOOLS/C4DEMO
    total 40
    -rw-rw-r-- 1    419 Jun 27  1986 DEMO.C
    -rw-rw-r-- 1   6402 Jul 15 09:50 DEMO.EXE
    -rw-rw-r-- 1    391 Jul 15 09:50 DEMO.OBJ
    -rw-rw-r-- 1    788 Jun 27  1986 SIEVE.C
    -rw-rw-r-- 1  14662 Jul 15 09:50 SIEVE.EXE
    -rw-rw-r-- 1    494 Jul 15 09:50 SIEVE.OBJ

Whenever you run `pc.js` with a DOS command or program name, it automatically builds a 10Mb hard disk image containing all the files and folder from your current directory, and runs that command or program.  And whenever you terminate `pc.js`, it automatically creates/deletes/updates any files in your current directory that were modified on the 10Mb hard disk.

### Loading Diskettes

`pc.js` includes another special program with the machine, `load`, which makes it easy for you to load any diskette image from the PCjs diskette library into your machine.  The syntax of the `load` command is:

    load [drive] [search options]

Let's say we want to load "PC-SIG Library Disk #1234" into the machine's A: drive.  Start `pc.js` with any DOS command to automatically build and start a machine (I used the DOS `ver` command this time) and then type `load a: pc-sig 1234` to load the matching diskette into drive A:

    $ pc.js disks/msdos ver
    [Press CTRL-D to enter command mode]

    MS-DOS Version 3.30    

    C:\>load a: pc-sig 1234
    loading "PC-SIG Library Disk #1234" in drive A:

    C:\>dir a:

    Volume in drive A has no label
    Directory of  A:\

    CHINA    HTX     8561   7-30-89   1:00p
    CHINAVOC HTX     2927   7-17-88  12:05p
    FILE1234 TXT     2480  11-30-89   4:19p
    FIRST    HTX      405   9-16-89   2:39a
    GO       BAT       15   9-17-89  11:34a
    GO       HTX      511   9-17-89  11:33a
    HELLO    EXE     8949   1-23-88  12:18p
    HYTDOC   EXE    35282  10-01-89  12:59p
    HYTDOC   HTF    35245  10-01-89  12:59p
    HYTDOC   HTX    34936   9-17-89  11:18a
    HYTEST   EXE    33528  10-01-89  12:58p
    HYTEXT   EXE    42172  10-01-89   1:32p
    HYTFAST  EXE    15753  10-01-89  12:57p
    LOG      COM    10894   3-05-89  12:05p
    LOG      DOC      920  11-03-88   5:06p
    MSDOS    HTX    16129   6-17-88   7:55p
    PLANETS  HTS     6248   3-31-89   8:10p
    README           6596   9-28-89   8:55p
    VERSION          2246   9-16-89  11:15p
        19 File(s)     48128 bytes free

If your search criteria matches more than one diskette in the library, a numbered list of matches is displayed, and then you can load the desired diskette by number:

    C:\>load a: pc-sig #123
    1: PC-SIG Library Disk #1230
    2: PC-SIG Library Disk #1231
    3: PC-SIG Library Disk #1232
    4: PC-SIG Library Disk #1233
    5: PC-SIG Library Disk #1234
    6: PC-SIG Library Disk #1235
    7: PC-SIG Library Disk #1236
    8: PC-SIG Library Disk #1237
    9: PC-SIG Library Disk #1238
    10: PC-SIG Library Disk #1239
    enter "load a: #" to load diskette by number

    C:\>load a: 6
    loading "PC-SIG Library Disk #1235" in drive A:

    C:\>dir a:

    Volume in drive A has no label
    Directory of  A:\

    EDBEGIN  HLP    24539   6-19-89  12:04p
    EDQUICK  HLP    37793   6-19-89  12:04p
    FILEMAN  COM      932   4-01-86  11:24p
    GETYN    COM      806   9-25-89   5:18p
    GO       BAT       12   5-18-86   8:32p
    MANUAL1  CRN    30164  11-07-88  10:49p
    MANUAL2  CRN   122155  11-07-88  10:50p
    PRINTMAN COM      913  10-26-88   6:23a
    QUICK-OR DER     1021   5-04-89   4:23p
    READ     ME      1001   9-29-89  12:48p
    REFENCE  DIR     1249   9-29-89  12:50p
    STORY            1148  12-24-86  11:11a
    TYPEMAN  COM      947  10-28-88   3:38a
    WORDS    EXE    16536  10-02-86   9:41p
    WORDS    MAS   110428   9-19-89   6:41p
    WORDS    NUL       12  10-26-88  11:10a
    WORKUTIL BAT     5086   9-25-89   4:30p
        17 File(s)      1024 bytes free

You can also search for files by *filename*.  For example, if you want to find and load a diskette with a program containing `ARC` in the name, use the `--file` search option.  You can even use regular expressions, but you will need to quote them if you use any characters (such as `|`) that are also parsed by the DOS command interpreter:

    C:\>load a: --file="arc\.(com|exe)"
      1: ARC.EXE         32128 1979-11-30  "PC-SIG Library Disk #4198"
      2: ARC.EXE         29824 1985-08-22  "PC-SIG Library Disk #0539"
      3: ARC.EXE         32051 1986-01-31  "PC-SIG Library Disk #0976"
      4: ARC.EXE         32429 1986-02-05  "PC-SIG Library Disk #0685"
      5: ARC.EXE         32256 1986-02-21  "PC-SIG Library Disk #0612"
      6: ARC.EXE         32181 1986-03-05  "PC-SIG Library Disk #0417"
      7: ARC.EXE         32512 1986-04-08  "PC-SIG Library Disk #0879"
      8: ARC.EXE         32384 1986-06-15  "PC-SIG Library Disk #0666"
      9: CONVARC.EXE      5056 1989-07-24  "PC-SIG Library Disk #1571"
     10: DARC.EXE        34429 1990-06-09  "PC-SIG Library Disk #1861"
     11: DEARC.COM       10240 1986-12-28  "PC-SIG Library Disk #0148"
     12: EIGHTARC.COM    51968 1989-06-21  "PC-SIG Library Disk #1574"
     13: ELECARC.EXE     97669 1990-05-15  "PC-SIG Library Disk #2219"
     14: EPARC.COM       26316 1990-01-19  "PC-SIG Library Disk #1082"
     15: HELPARC.EXE    267704 1991-08-05  "Norton Utilities 6.01 (Utility 4)"
     16: ICONARC.EXE     16944 1991-08-05  "Norton Utilities 6.01 (Install)"
     17: LHARC.EXE       27498 1989-03-04  "PC-SIG Library Disk #1550"
     18: LHARC.EXE       30470 1989-05-04  "PC-SIG Library Disk #2018"
     19: LHARC.EXE       31256 1989-05-31  "PC-SIG Library Disk #1948"
     20: LHARC.EXE       30912 1990-03-28  "PC-SIG Library Disk #1927"
     21: LHARC.EXE       20874 1990-06-15  "PC-SIG Library Disk #1145"
     22: LHARC.EXE       30440 1990-07-28  "PC-SIG Library Disk #2729"
     23: LHARC.EXE       20874 1990-08-07  "PC-SIG Library Disk #2322"
     24: LHARC.EXE       20475 1990-08-08  "PC-SIG Library Disk #2597"
     25: NDOSARC.EXE     39190 1991-08-05  "Norton Utilities 6.01 (Utility 5)"
     26: OBJUNARC.EXE   125440 1993-08-13  "OBJASM 2.0 (Bin)"
     27: PASARC.EXE     102889 1990-05-10  "PC-SIG Library Disk #2221"
     28: PGMSARC.EXE    120567 1990-07-24  "PC-SIG Library Disk #1481"
     29: PKARC.COM       16440 1986-10-23  "PC-SIG Library Disk #0386"
     30: PKARC.COM       17456 1986-12-15  "PC-SIG Library Disk #1138"
     31: PKXARC.COM       9984 1986-09-12  "PC-SIG Library Disk #0599"
     32: PKXARC.COM      10318 1986-10-23  "PC-SIG Library Disk #0386"
     33: PKXARC.COM      11482 1986-12-15  "PC-SIG Library Disk #0651"
     34: PKXARC.COM      12242 1987-03-01  "PC-SIG Library Disk #1080"
     35: PKXARC.COM      12242 1987-04-27  "PC-SIG Library Disk #1564"
     36: PKXARC.COM      10368 1987-08-25  "PC-SIG Library Disk #2388"
     37: PKXARC.COM      11648 1987-10-08  "PC-SIG Library Disk #1138"
     38: PKXARC.COM      12288 1988-02-19  "PC-SIG Library Disk #1063"
     39: PKXARC.COM       9296 1990-03-26  "PC-SIG Library Disk #2822"
     40: PKXARC.EXE      15126 1988-06-01  "PC-SIG Library Disk #1206"
     41: POSIARC.EXE    133618 1990-05-15  "PC-SIG Library Disk #2219"
     42: QUOTARC.EXE    226289 1990-01-26  "PC-SIG Library Disk #1575"
     43: RINGARC.EXE     84235 1989-12-29  "PC-SIG Library Disk #1293"
     44: SANDARC.EXE    188632 1992-12-02  "PC-SIG Library Disk #3555"
     45: SHZIPARC.EXE   256492 1990-12-26  "PC-SIG Library Disk #2614"
     46: SMITHARC.EXE   305210 1992-06-28  "PC-SIG Library Disk #3125"
     47: SPORTARC.EXE    36592 1992-09-30  "PC-SIG Library Disk #3454"
     48: TD1ARC.EXE     247060 1989-12-31  "PC-SIG Library Disk #1353"
     49: UNARC.COM       12242 1987-04-27  "PC-SIG Library Disk #3008"
     50: XARC.COM        12242 1987-04-27  "PC-SIG Library Disk #2096"
     51: XARC.COM        11482 1987-06-17  "PC-SIG Library Disk #3494"
     52: XXSRARC.EXE    275219 1992-09-18  "PC-SIG Library Disk #3222"
    enter "load a: #" to load diskette by number

To help you zero in on the particular `ARC` program you're interested in, `pc.js` initially lists only *unique* instances of each file.  Let's say you're only interested in files named `ARC.EXE`, and you want to load a diskette with the version of `ARC.EXE` dated `1985-08-22`, so you type `load a: 2`:

    C:\>load a: 2
      1: ARC.EXE         29824 1985-08-22  "PC-SIG Library Disk #0539"
      2: ARC.EXE         29824 1985-08-22  "PC-SIG Library Disk #0420"
      3: ARC.EXE         29824 1985-08-22  "PC-SIG Library Disk #0568"
    enter "load a: #" to load diskette by number
    multiple disks with identical file (use "load a: 1" to load original selection)

At this point, `pc.js` shows you all the *other* disks (if any) with the same exact file.  The other files may not have the same date or even the same name, but they *will* all have the same contents.  Your original selection is always listed first.  In this example, we're going to load the second disk, named "PC-SIG Library Disk #0420":

    C:\>load a: 2
    loading "PC-SIG Library Disk #0420" in drive A:

    C:\>dir a:

    Volume in drive A has no label
    Directory of  A:\

    BACKSTAT EXE    13312   1-17-85   2:20p
    GCOPY2   EXE    14592   3-15-85   3:18p
    GCOPY2   TXT     2048   3-15-85   3:18p
    L6       COM     3072   4-09-85   9:41a
    LC       COM     1280  12-07-84   1:10p
    LF       COM      512   6-08-84   3:20p
    LQTYPE   COM    12160   4-01-85  11:14a
    UNDEL    COM     2176   3-19-85   6:57a
    UNSQ     COM     8064   3-17-85   2:53p
    FILTERS  LBR    41600   4-04-85  10:16a
    FILTERS  TXT      507   4-04-85   6:03p
    VIEWDISK EXE    16384   3-15-85   8:36a
    VIEWDISK DOC     4736   3-15-85   8:38a
    COPYPC   COM     1792   4-25-85   1:52p
    COPYPC   DOC     1920   4-25-85   1:52p
    SORT-IT  COM    17280   4-03-85  10:17a
    SORT-IT  DOC     1024   4-03-85  10:18a
    NIB      EXE    48412   5-02-85   4:42p
    LOCK     COM      384   8-22-85  12:51a
    UNLOCK   COM      384   8-22-85  12:51a
    UN-LOCK  DOC     2432   8-22-85  12:52a
    ARC      EXE    29824   8-22-85  12:50a
    ARC      DOC    10880   5-06-85  10:14a
    FCOMPARE EXE    12288   5-02-85  12:03a
    FCOMPARE C      13056   5-02-85  12:03a
    FCOMPARE DOC     2304   5-02-85  12:03a
    SEARCH   COM      640   5-08-85   6:58p
    SEARCH   DOC     2048   5-08-85   6:58p
    READONLY COM      128   6-03-85  10:15p
    READONLY DOC      256   6-03-85  10:15p
    READWRIT COM      128   6-03-85  10:15p
    READWRIT DOC      128   6-03-85  10:15p
    DISKUNSQ COM     3712   6-04-85  12:19p
    DISKSQ   COM     3584   6-04-85  12:20p
    TREED    COM     1920   5-10-85   9:37p
    TCOUNT   COM    17273   7-29-85   9:30a
    TCOUNT   DOC     7168   7-28-85   8:05a
    FILES420 TXT     2088   4-12-86   5:50p
    LU       DOC     6144   3-25-84   1:50a
    LU       EXE    22528   3-25-84   1:48a
        40 File(s)     16384 bytes free

Any files you're interested in can be copied to the machine's C: drive, and when you type `quit`, those files should be automatically transferred to your current directory.

### More To Come

There's a lot more to cover with the new `pc.js` utility, which is still a "work-in-progress", but hopefully this is enough to get the ball rolling.

Only text-based "standard I/O" DOS programs are usable in this environment, so if you run a program that switches to graphics mode or writes directly to video memory, don't expect to see anything.

There are currently no options to change the default drive type (10Mb) but it is possible to specify alternate machine configurations *and* alternate operating systems to install on the drive.  Run `pc.js --help` from the command-line for some quick guidance, and check the [PC.js](/tools/pc/) page for more detailed information -- both will be updated as the utility evolves.
