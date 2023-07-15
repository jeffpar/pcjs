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

The first example is a simple use case that doesn't involve any disks, just running some BASIC commands from the original IBM PC's built-in BASIC interpreter.

    $ cd tools/pc
    $ pc.js ibm5150 --nofloppy
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
    pc.js commands:
      cd [directory]
      build [command]
      load [machine] or [drive] [search terms]
      quit
    type "?" for a list of debugger commands (eg, "g" to continue running)
    >> quit
    $

Now let's dive into a much more interesting example.  Imagine we have small collection of DOS files and programs that we'd like to run.  There's a PCjs hard disk image we can use for this demonstration, so let's download and extract it using the PCjs [diskimage.js](/tools/diskimage/) utility:

    $ ../diskimage/diskimage.js --disk https://harddisks.pcjs.org/pcx86/10mb/MSDOS320-C400.json --extract
    DiskImage v3.00
    Copyright © 2012-2023 Jeff Parsons <Jeff@pcjs.org>
    Options: --disk https://harddisks.pcjs.org/pcx86/10mb/MSDOS320-C400.json --extract
    processing: MSDOS320-C400 (10653696 bytes, checksum 3014829503, hash none)
    extracting: CONFIG.SYS
    extracting: COMMAND.COM
    extracting: AUTOEXEC.BAT
    extracting: DOS/ANSI.SYS
    extracting: DOS/APPEND.COM
    extracting: DOS/ASSIGN.COM
    extracting: DOS/ATTRIB.EXE
    extracting: DOS/CHKDSK.EXE
    ...

All the files and folders are extracted into a directory with the same name as the disk image, so let's change to that directory now:

    $ cd MSDOS320-C400
    $ ls
    AUTOEXEC.BAT  COMMAND.COM  CONFIG.SYS  DOS  PUZZLED  TMP  TOOLS
    $ 

To run a program from that folder, such as the DOS `CHKDSK` utility, just run `pc.js` with name of the program, including any arguments it might need:

    $ ../pc.js chkdsk
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    C>ECHO OFF
    Volume PCJS        created Sep 27, 1989 3:00a

     10592256 bytes total disk space
        77824 bytes in 6 hidden files
        86016 bytes in 21 directories
      4341760 bytes in 244 user files
      6086656 bytes available on disk

       655360 bytes total memory
       588672 bytes free

    C:\>

If the DOS command you want to run includes wildcards (eg, `DIR *.*`), put it in quotes to prevent your shell from expanding them:

    $ ../pc.js "dir *.*"
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    C>ECHO OFF

    Volume in drive C is PCJS       
    Directory of  C:\

    AUTOEXEC BAT      193   7-15-23   9:44a
    CONFIG   SYS       58   1-01-80  12:03a
    DOS          <DIR>      7-15-23   9:23a
    PUZZLED      <DIR>      7-15-23   9:23a
    TMP          <DIR>      1-01-80  12:13a
    TOOLS        <DIR>      7-15-23   9:23a
            6 File(s)   6086656 bytes free

    C:\>

This collection of files also includes a Microsoft C Compiler, so we can try compiling and running some C demo programs:

    C:\>cd tools

    C:\TOOLS>dir

    Volume in drive C is PCJS       
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

    Volume in drive C is PCJS       
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

    Volume in drive C is PCJS       
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

    C:\TOOLS\C4DEMO>return
    $

That last command, `return`, runs a special program that `pc.js` automatically includes with the machine, to gracefully return to your own operating system.

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

`pc.js` includes another special program with the machine (`load`) which makes it easy for you to load any diskette image from the PCjs diskette library into your machine.  The syntax of the `load` command is:

    load [drive] [search terms]

Let's say we want to load "PC-SIG Library Disk #1234" into the machine's A: drive.  Start `pc.js` with any DOS command to automatically build and start a machine (I used the DOS `ver` command this time) and then type `load a: pc-sig 1234` to load the matching diskette into drive A:

    $ ../pc.js ver
    Press CTRL-D to enter command mode, CTRL-C to terminate pc.js

    C>ECHO OFF

    MS-DOS Version 3.20

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

If your search terms match more than one diskette in the library, a numbered list of matches is displayed, and then you can load the desired diskette by number:

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

You can also search for files by *filename*.  For example, if you want load a diskette containing a file named `RATBAS`, you can use the `--file` search option to find diskettes containing such a file:

    C:\>load a: --file ratbas
    1: RATBAS  213       NaN 2017-06-17  "RatBas (1982)"
    2: RATBAS.LBR      68096 1984-11-23  "PC User Group Disk #3002"
    3: RATBAS.TXT      30080 1982-08-13  "RatBas (1982)"
    4: RATBAS.UM        9856 1982-08-09  "RatBas (1982)"
    enter "load a: #" to load diskette by number

    C:\>load a: 4
    1: RATBAS.UM        9856 1982-08-09  "RatBas (1982)"
    2: RATBAS.UM        9856 1982-08-10  "PC-SIG Library Disk #0003"
    enter "load a: #" to load diskette by number
    multiple disks with identical file (use "load a: 1" to load original selection)

    C:\>load a: 2
    loading "PC-SIG Library Disk #0003" in drive A:

In the above example, there were multiple diskettes with an *identical* version of the file `RATBAS.UM`, so only the first matching diskette was displayed in the first list, and then once we selected a diskette, a list of all the *other* diskettes containing that *same* version was displayed next.

Any files you're interested in can be copied to the C: drive, and when you type `return`, those files should be automatically transferred to your current directory.

### More To Come

There's a lot more to cover with the new `pc.js` utility, which is still a "work-in-progress", but hopefully this is enough to get the ball rolling.

Only text-based "standard I/O" DOS programs are usable in this environment, so if you run a program that switches to graphics mode or writes directly to video memory, don't expect to see anything.

There are currently no options to change the default drive type (10Mb) but it is possible to specify alternate machine configurations *and* alternate operating systems to install on the drive.  Run `pc.js --help` from the command-line for some quick guidance, and check the [PC.js](/tools/pc/) page for more detailed information -- both will be updated as the utility evolves.
