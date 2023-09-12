---
layout: page
title: "PC-SIG Diskette Library (Disk #2018)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2018/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/2000-2999/DISK2018/DISK2018.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2018"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LHARC AND UTILITIES"

    This collection of archive utilities can make you the tightest, most
    effective archiver on your block. LHARC compresses tighter than any of
    the more common compression programs. It does take a little longer, but
    sometimes space is far more important than speed. Included on this disk
    is 2LZH which converts ARC, PKARC, and ZIP files to LHARC format. LHDIR
    is a companion program for viewing and identifying compressed LHARC
    files and self-extracting LHARC.
    
    And if LHARC isn't all you need, the utility MAD (Mike's Archive
    Directory) can show you the contents of every popular archive type
    available and their self-extracting-executable (SFX) files. MAD
    currently supports ARC, PAK, ZIP, ZOO, LZS, DWC and LZH archives and all
    self-extracting .COM and .EXE files created by SEA ARC, PK-ARC, PAK, PK-
    ZIP, SEZ (zoo), LARC (lzs), DWC and LHARC (lzh).
    
    ZIPNOTE rounds out the collection as a better way to attach comments to
    ZIP files. This can be especially useful for BBS sysops who want to
    mark their ZIP files for free advertising. The flexibility in ZIPNOTE
    is that it allows a comment to be typed from the keyboard, copied from
    an existing text file, or stored in a configuration file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 2LZH.DOC

```
2LZH is a small program that takes care of converting ZIP, ARC,
or PAK files to lzarc format.

Lzarc is rapiedly gaining a cult following due to its VERY tiny
archives.

2LZH.EXE uses the following programs and they should be found in
one of your Dos path directories.

Pkxarc.exe(or com) : Used to extract all *.Arc files.
Pak.exe            : Used to extract all *.PAK files.
Pkunzip.exe        : Used to extract all *.Zip files.
Lharc.exe          : Used to place extracted files in LZH format.

We release this program for public use. We do not howevery,
except any responsablity for loss of files, drive damage (well
not bloody likely but never can be to safe), or anything else.
You use it at your own risk.

Nothing special about running 2lzh. Just log into the directory
you want to convert and type "2lzh" press return and watch it
work.

If your running Lynx, you'll find another handy little program
included in this archive caller flipper.exe. It's used to
convert your files.qbs listing over so that all programs that
end with .pak, .arc, or .zip so they will have a NEW extension
of .lzh. After you run 2LZH in one of your download directories,
follow it up with a run of flipper. Makes for converting your
BBS to the newer archive format a breeze.

To run Flipper, you need to give it two command line switchs.

The first is the name of your file list, in most cases
Files.qbs

The second is the name of the extension you want to convert to,
ie LZH

Example: Flipper files.qbs Lzh

or

Flipper IBMTXT.QBS LZH, if you happen to be using logical file
areas.


Enjoy and I hope Lharc will save you a TON of diskspace.

M. Bryeans, Micro TECH Systems (CBIS Number 1-314-334-6359)
```

## 2LZH.DOC

```
2LZH is a small program that takes care of converting ZIP, ARC,
or PAK files to lzarc format.

Lzarc is rapiedly gaining a cult following due to its VERY tiny
archives.

2LZH.EXE uses the following programs and they should be found in
one of your Dos path directories.

Pkxarc.exe(or com) : Used to extract all *.Arc files.
Pak.exe            : Used to extract all *.PAK files.
Pkunzip.exe        : Used to extract all *.Zip files.
Lharc.exe          : Used to place extracted files in LZH format.

We release this program for public use. We do not howevery,
except any responsablity for loss of files, drive damage (well
not bloody likely but never can be to safe), or anything else.
You use it at your own risk.

Nothing special about running 2lzh. Just log into the directory
you want to convert and type "2lzh" press return and watch it
work.

If your running Lynx, you'll find another handy little program
included in this archive caller flipper.exe. It's used to
convert your files.qbs listing over so that all programs that
end with .pak, .arc, or .zip so they will have a NEW extension
of .lzh. After you run 2LZH in one of your download directories,
follow it up with a run of flipper. Makes for converting your
BBS to the newer archive format a breeze.

To run Flipper, you need to give it two command line switchs.

The first is the name of your file list, in most cases
Files.qbs

The second is the name of the extension you want to convert to,
ie LZH

Example: Flipper files.qbs Lzh

or

Flipper IBMTXT.QBS LZH, if you happen to be using logical file
areas.


Enjoy and I hope Lharc will save you a TON of diskspace.

M. Bryeans, Micro TECH Systems (CBIS Number 1-314-334-6359)
```

## FILE2018.TXT

```
Disk No: 2018                                                           
Disk Title: LHarc and Utilities                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: LHarc & Utilities                                        
Author Version: 1.0                                                     
Author Registration: Zipnote $10.00, Mad $5.00, everything else free.   
Special Requirements: None.                                             
                                                                        
This collection of archive utilities can make you the tightest most     
effective archiver on your block.  LHARC compresses tighter than any of 
the more common compression programs.  It does take a little longer but 
sometimes space is far more important than speed.  Included on this disk
is 2LZH which converts ARC, PKARC, and ZIP files to LHARC format.  LHDIR
is a companion program for viewing and identifying compressed LHARC     
files and self-extracting LHARC.                                        
                                                                        
And if LHARC isn't all you need, the utility MAD (Mike's Archive        
Directory) can show you the contents of every popular archive type      
available and their self-extracting-executable (SFX) files.  MAD        
currently supports ARC, PAK, ZIP, ZOO, LZS, DWC and LZH archives and all
self-extracting .COM and .EXE files created by SEA ARC, PK-ARC, PAK, PK-
ZIP, SEZ (zoo), LARC (lzs), DWC and LHARC (lzh).                        
                                                                        
ZIPNOTE rounds out the collection as a better way to attach comments to 
ZIP files.  This can be especially useful for BBS sysops who want to    
mark their ZIP files for free advertising.  The flexibility in ZipNote  
is in that it allows a comment to either be typed from the keyboard,    
copied from an existing text file or a comment can be stored in a       
configuration file.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```

## GO.TXT

```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #2018  LHARC AND UTILITIES  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: 2LZH\2LZH    (press enter)                      ║
║ To print documentation, type: COPY 2LZH\2LZH.DOC PRN                    ║
║                                                                         ║
║ To start program, type: LHARC\LHARC  (press enter)                      ║
║ To print documentation, type: COPY LHARC\LHARC.DOC PRN                  ║
║                                                                         ║
║ To start program, type: LHDIR\LHDIR  (press enter)                      ║
║ To print documentation, type: COPY LHDIR\LHDIR.DOC PRN                  ║
║                                                                         ║
║ To start program, type: 2LZH\2LZH    (press enter)                      ║
║ To print documentation, type: COPY MAD\MAD.DOC PRN                      ║
║                                                                         ║
║ To start program, type: ZIPNOTE\ZIPNOTE  (press enter)                  ║
║ To print documentation, type: COPY ZIPNOTE\ZIPNOTE.DOC PRN              ║
╚═════════════════════════════════════════════════════════════════════════╝
```

## LHDIR.DOC

```
LHdir Version 1.3    5/89
Copyright 1989 D & D Software Inc.
Written by Dennis Vallianos

Tested with all U.S. versions of LHarc through 1.13.

LHdir is a utility program to be used in conjunction with the LHarc file
compression program.  It has three purposes, depending on how its used.

1) As a directory utility.  Just like LHarc you can see the names and
sizes of files inside a LZH file.  Some example commands:
       LHDIR ABC.LZH
       LHDIR ABC
       LHDIR ABC *.TXT *.EXE

Unlike LHarc, you can also see what's inside a self-extracting COM or
EXE file created by LHarc.  This requires that the file you are looking
at be completely specified on the command line.
       LHDIR ABC.EXE
       LHDIR ABC.EXE *.TXT

2) As a converter of self-extracting to normal LZH files.  If the file
is self-extracting, you will be asked if you wish to convert it to a
normal LZH file after viewing the directory.  Answering 'Y' will create
a second file with the LZH extant and retain the original EXE or COM
file, should you wish to use it for other purposes.

3) As a scanner for self-extracting LHarc files you may have lost track
of.  If invoked as "LHDIR -S", the program will scan all EXE and COM
files in the current directory (limited to 300 COM and 300 EXE files)
and tell you which, if any, are really LHarc self-extracting files.

In the same spirit Yoshi has shown with LHarc, LHdir is free and may be
copied and distributed without fee, so long as the original copyright
notice remains intact and this doc file accompanies the program.

This program is distributed "as is" and no warranty of any kind is
expressed or implied.

Dennis Vallianos
Compuserve ID 70406,1163
```

## LHDIR.DOC

```
LHdir Version 1.3    5/89
Copyright 1989 D & D Software Inc.
Written by Dennis Vallianos

Tested with all U.S. versions of LHarc through 1.13.

LHdir is a utility program to be used in conjunction with the LHarc file
compression program.  It has three purposes, depending on how its used.

1) As a directory utility.  Just like LHarc you can see the names and
sizes of files inside a LZH file.  Some example commands:
       LHDIR ABC.LZH
       LHDIR ABC
       LHDIR ABC *.TXT *.EXE

Unlike LHarc, you can also see what's inside a self-extracting COM or
EXE file created by LHarc.  This requires that the file you are looking
at be completely specified on the command line.
       LHDIR ABC.EXE
       LHDIR ABC.EXE *.TXT

2) As a converter of self-extracting to normal LZH files.  If the file
is self-extracting, you will be asked if you wish to convert it to a
normal LZH file after viewing the directory.  Answering 'Y' will create
a second file with the LZH extant and retain the original EXE or COM
file, should you wish to use it for other purposes.

3) As a scanner for self-extracting LHarc files you may have lost track
of.  If invoked as "LHDIR -S", the program will scan all EXE and COM
files in the current directory (limited to 300 COM and 300 EXE files)
and tell you which, if any, are really LHarc self-extracting files.

In the same spirit Yoshi has shown with LHarc, LHdir is free and may be
copied and distributed without fee, so long as the original copyright
notice remains intact and this doc file accompanies the program.

This program is distributed "as is" and no warranty of any kind is
expressed or implied.

Dennis Vallianos
Compuserve ID 70406,1163
```

## ZIPNOTE.DOC

```
ZipNote v1.0, Copyright 1989 by MJP Enterprises

ZipNote is released as Freeware. If you find the program useful, a gift of
$10 would be greatly appreciated.  If you send a check please make it
payable to "Matthew J. Palcic".

ZipNote allows easier commenting of ZIP files.  This can be especially
useful for BBS sysops who want to mark their ZIP files for free
advertising. i.e. "Downloaded from CDS On-Line (513)429-7780"

The flexibility in ZipNote is in that it allows a comment to either be
typed from the keyboard, copied from an existing text file or a comment can
be stored in a configuration file.

The syntax for ZipNote is:

        ZIPNOTE filespec [params...]

        (ALL PARAMETERS MUST BE SEPARATED BY A SPACE!)

        "filespec" is any valid ZIP name or wildcard pattern.
            i.e. "E:\UPLOADS\*.*"  (only .ZIP files are processed)

        "[params...]" must be separated by spaces and follow a "/X:data"
        format where "X" is the actual parameter and "data" is the argument.

                          /Z: is the path to PKZIP
                          /C: is the comment file to use
                          /S: is the setup file for ZipNote
                              (default is ZIPNOTE.SET)

              Examples:
                  ZipNote *.ZIP /Z:C:\UTILS\ZIP\PKZ.EXE
                  ZipNote ZMIZE130.ZIP /C:ZMIZE.ANS /S:ZMIZE.SET

             The default setup file for ZipNote is ZIPNOTE.SET and is
             searched for in both the current directory and the directory
             ZipNote resides in.  If it is not found in either place then
             an error results.

             If no comment exists in the setup file or a comment file is
             not specified then the user is prompted for a comment to add.

             If the /Z: parameter is not used PKZIP.EXE will be searched
             for in the default PATH.

Valid options for setup files:

       /Z: is the path to PKZIP
       /C: is the comment file to use
       /N: is an actual comment to use

              Examples:
                  /Z:C:\UTILS\ZIP\PKZ.EXE
                  /C:ZMIZE.ANS
                  /N:Downloaded from CDS On-Line, (513)429-7780

Options on the command line or in the configuration file are processed first
to last, so a /N: parameter will wipe out a /C: parameter found before it.

          i.e. /N:Ziptimize v1.2
               /N:Ziptimize v1.3
          results in the comment being "Ziptimize v1.3"

The primary reason for the setup file is (obviously) not because there
are so many parameters, but this allows several different ZipNote
configurations for different databases in a BBS, different categories of
ZIPs, etc.

Using ZipNote, you can create your own comment file with your favorite
editor.  ZipNote makes no effort to check the length of your comment or
the formatting of your comment. You will have to experiment to find out
what works best.  Color comments can be achieved by using an ANSI editor
(such as THEDRAW) and saving a block of the screen as a comment. This was
done with ZipNote to create the color comment you should have seen when
unZipping this program.  I don't know what the limit is on the comment
length, but it is longer than the 32 characters noted in the PKZIP manual.

If you have any questions, comments, suggestions or bug reports please
contact:
           Matthew J. Palcic
           1030 Dayton-Yellow Springs Rd.
           Xenia, Ohio  45385-9508
           (513)767-1625

A sample .SET file and a couple of comment files have been included to
give you something to build on.  If you come up with anything new using
this technique I'd love to see it.

To try the DEMO.SET type:
    ZIPNOTE *.* /S:DEMO.SET

         ----------------end-of-author's-documentation--------------
```

## ZIPNOTE.DOC

```
ZipNote v1.0, Copyright 1989 by MJP Enterprises

ZipNote is released as Freeware. If you find the program useful, a gift of
$10 would be greatly appreciated.  If you send a check please make it
payable to "Matthew J. Palcic".

ZipNote allows easier commenting of ZIP files.  This can be especially
useful for BBS sysops who want to mark their ZIP files for free
advertising. i.e. "Downloaded from CDS On-Line (513)429-7780"

The flexibility in ZipNote is in that it allows a comment to either be
typed from the keyboard, copied from an existing text file or a comment can
be stored in a configuration file.

The syntax for ZipNote is:

        ZIPNOTE filespec [params...]

        (ALL PARAMETERS MUST BE SEPARATED BY A SPACE!)

        "filespec" is any valid ZIP name or wildcard pattern.
            i.e. "E:\UPLOADS\*.*"  (only .ZIP files are processed)

        "[params...]" must be separated by spaces and follow a "/X:data"
        format where "X" is the actual parameter and "data" is the argument.

                          /Z: is the path to PKZIP
                          /C: is the comment file to use
                          /S: is the setup file for ZipNote
                              (default is ZIPNOTE.SET)

              Examples:
                  ZipNote *.ZIP /Z:C:\UTILS\ZIP\PKZ.EXE
                  ZipNote ZMIZE130.ZIP /C:ZMIZE.ANS /S:ZMIZE.SET

             The default setup file for ZipNote is ZIPNOTE.SET and is
             searched for in both the current directory and the directory
             ZipNote resides in.  If it is not found in either place then
             an error results.

             If no comment exists in the setup file or a comment file is
             not specified then the user is prompted for a comment to add.

             If the /Z: parameter is not used PKZIP.EXE will be searched
             for in the default PATH.

Valid options for setup files:

       /Z: is the path to PKZIP
       /C: is the comment file to use
       /N: is an actual comment to use

              Examples:
                  /Z:C:\UTILS\ZIP\PKZ.EXE
                  /C:ZMIZE.ANS
                  /N:Downloaded from CDS On-Line, (513)429-7780

Options on the command line or in the configuration file are processed first
to last, so a /N: parameter will wipe out a /C: parameter found before it.

          i.e. /N:Ziptimize v1.2
               /N:Ziptimize v1.3
          results in the comment being "Ziptimize v1.3"

The primary reason for the setup file is (obviously) not because there
are so many parameters, but this allows several different ZipNote
configurations for different databases in a BBS, different categories of
ZIPs, etc.

Using ZipNote, you can create your own comment file with your favorite
editor.  ZipNote makes no effort to check the length of your comment or
the formatting of your comment. You will have to experiment to find out
what works best.  Color comments can be achieved by using an ANSI editor
(such as THEDRAW) and saving a block of the screen as a comment. This was
done with ZipNote to create the color comment you should have seen when
unZipping this program.  I don't know what the limit is on the comment
length, but it is longer than the 32 characters noted in the PKZIP manual.

If you have any questions, comments, suggestions or bug reports please
contact:
           Matthew J. Palcic
           1030 Dayton-Yellow Springs Rd.
           Xenia, Ohio  45385-9508
           (513)767-1625

A sample .SET file and a couple of comment files have been included to
give you something to build on.  If you come up with anything new using
this technique I'd love to see it.

To try the DEMO.SET type:
    ZIPNOTE *.* /S:DEMO.SET

         ----------------end-of-author's-documentation--------------
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2018

     Volume in drive A is #2018 S1
     Directory of A:\

    LHARC        <DIR>       5-27-89   3:31a
    LHDIR        <DIR>       5-27-89   3:31a
    2LZH         <DIR>       5-27-89   3:31a
    FILE2018 TXT      2665   1-04-90  11:58a
    FV           <DIR>       5-27-89   3:31a
    MAD          <DIR>       5-27-89   3:31a
    ZIPNOTE      <DIR>       5-27-89   3:31a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1387   1-01-80   3:02a
            9 file(s)       4090 bytes

     Directory of A:\LHARC

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
    LHARC    MAN     32054   5-27-89   3:28a
    LHARC    EXE     30470   5-04-89   3:37p
            4 file(s)      62524 bytes

     Directory of A:\LHDIR

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
    LHDIR    DOC      1718   5-26-89  12:54p
    LHDIR    EXE     17239   5-26-89  11:38a
            4 file(s)      18957 bytes

     Directory of A:\2LZH

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
    2LZH     DOC      1739   5-07-89  11:01p
    2LZH     EXE     13505   5-08-89  11:06a
    FLIPPER  EXE     13021   5-07-89  11:03p
            5 file(s)      28265 bytes

     Directory of A:\FV

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
            2 file(s)          0 bytes

     Directory of A:\MAD

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
    MAD      EXE     13229   5-28-89
    README   MAD      4791   5-27-89   3:30a
            4 file(s)      18020 bytes

     Directory of A:\ZIPNOTE

    .            <DIR>       5-27-89   3:31a
    ..           <DIR>       5-27-89   3:31a
    ZIPNOTE  DOC      3881   5-27-89   3:29a
    ZIPNOTE  EXE     10480   3-20-89   9:12p
    DEMO     ANS       322   3-20-89   9:12p
    DEMO     SET        13   3-20-89   9:12p
    SAMPLE   SET        72   3-20-89   9:12p
    GARBAGE  ZIP       119   3-20-89   9:12p
            8 file(s)      14887 bytes

    Total files listed:
           36 file(s)     146743 bytes
                          199680 bytes free

![PC-SIG Library Disk #2018]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/2000-2999/DISK2018/DISK2018.jpg)
