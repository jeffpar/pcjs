---
layout: page
title: "PC-SIG Diskette Library (Disk #3494)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3494/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3494"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DOWNLOAD.DOC

{% raw %}
```

                      Downloading Soft Fonts To A LaserJet



                                     SUMMARY

        DOWNLOAD.EXE  is  an  IBM PC utility  program  that  manages  the 
        process  of downloading soft fonts to a LaserJet printer.   DOWN-
        LOAD can send a font to any MS-DOS device or to a disk file.  You 
        have optional control over the ID number of the font, whether  it 
        is permanent or temporary, and whether it is a primary or second-
        ary font.


                              FONT CHARACTERISTICS

        All  soft fonts have three characteristics associated with  them.  
        Each  font must have a unique ID number, 0 - 15.  This  lets  you 
        select  a  soft font through software or the front panel  of  the 
        printer. Each font must be defined as either temporary or perman-
        ent.  Temporary fonts are deleted whenever the LaserJet is reset.  
        Most  software that controls the LaserJet sends a  reset  command 
        out  first, thus deleting all temporary fonts.  Finally,  a  font 
        may  be defined as either primary or secondary.  (Note that  only 
        one  primary and one secondary font can exist at one time.)   The 
        LaserJet lets you switch between primary and secondary fonts with 
        simple control characters.  Control-N selects the secondary font, 
        while control-O selects the primary font.  Embedding these  char-
        acters in you text file lets you switch between fonts.


                                RUNNING DOWNLOAD

        First,  if you forget how to run DOWNLOAD, or need  help,  simply 
        type  DOWNLOAD followed by a carriage return.  The  program  will 
        print  a  help list for you.  To run download you must  at  least 
        specify  the name of the soft font to send to your printer.   You 
        can  optionally  specify the device to send the  file  to,  LPT1, 
        LPT2, LPT3, COM1, or COM2.  In addition, you can optionally  con-
        trol the three font attributes specified above.  To invoke  DOWN-
        LOAD type:


        download fontname [device id perm prim]

        where  the arguments between the two braces are optional and  the 
        arguments are as defined below:

        fontname = the full name of the file to download
        device   = optional printer port: LPT1, LPT2, LPT3, COM1, COM2, 
                   or a disk file name
        id       = optional unique soft font ID number (0 - 15)
        perm     = optional make font Permanent or Temporary (P/T)
        prim     = optional make font Primary or Secondary (P/S)


                      Downloading Soft Fonts To A LaserJet



        The  DOWNLOAD program defaults to printer port LPT1, and  assigns 
        the soft font ID 0, and permanent - primary status.  Thus:

        download tr100rpn.usp

        sends  the Times Roman 10 point regular font, (tr100rpn.usp),  to 
        the LaserJet as font id 0, and makes it permanent and the primary 
        font.

        download tr100bpn.usp lpt1 1 p s

        sends  the bold faced Times Roman font to the LaserJet  via  LPT1 
        and assigns it font id 1, permanent and secondary status.


                                   DISTRIBUTION

        This program is provided free of charge to all who are interested 
        in  it.  It may be freely exchanged as long as no fee is  charged 
        for it.  Please distribute this package with BOTH this documenta-
        tion file and the executable program.  This program and  documen-
        tation  are copyright 1987 by Gary Elfring.  All rights  are  re-
        served.  Commercial use is strictly prohibited.

        An enhanced version of this program, which lets you use wildcards 
        for  the  font names or supply a list of fonts  to  download,  is 
        supplied free of charge with all fonts libraries I sell.  Or  you 
        can purchase the enhanced downloader and source code (written  in 
        C),  for  a small fee separately.  I offer a  number  of  special 
        downloadable fonts including computer symbols, pi characters  and 
        dingbats,  credit  cards,  and families  of  Roman,  Script,  and
        Helvetica like fonts.   For free information on these inexpensive 
        downloadable soft fonts for you LaserJet  contact:

        Gary Elfring
        P.O. Box 61
        Wasco, Illinois  60183-0061

        7/28/87

```
{% endraw %}

## FILES.DOC

{% raw %}
```

****************************************************************************
PC PLUS CONSULTING  # 327      HP Laserjet Fonts
****************************************************************************

This disk contains over 30 fonts which can be downloaded to the HP Laserjet
printer.  The disk contains over 600,000 bytes of data compressed into
five archives.  The programs to extract the data is included on this 
volume.


Name          Length    Stowage    SF   Size now  Date       Time    CRC
============  ========  ========  ====  ========  =========  ======  ====
CEN08RB0.USP      7556  Crunched   43%      4338  21 Jul 87   1:15p  31F8
CEN10BB5.USP     10677  Crunched   46%      5771  21 Jul 87   1:16p  5190
CEN10IB0.USP     12878  Crunched   47%      6836  21 Jul 87   1:17p  B3CF
CEN10RB0.USP     10462  Crunched   45%      5762  21 Jul 87   1:15p  AC3C
CEN12BB5.USP     13975  Crunched   47%      7463  21 Jul 87   1:19p  49CF
CEN12IB0.USP     17054  Crunched   50%      8660  21 Jul 87   1:18p  7FD6
CEN12RB0.USP     13666  Crunched   46%      7397  21 Jul 87   1:19p  A54A
CEN18RB0.USP     25359  Crunched   53%     12014  21 Jul 87   1:21p  CEA8
CEN24RB0.USP     41718  Crunched   59%     17343  21 Jul 87   1:22p  AFF1
READ.ME           2883  Crunched   42%      1679   6 Aug 87  12:24p  D5EA
        ====  ========            ====  ========
Total     10    156228             51%     77263


Name          Length    Stowage    SF   Size now  Date       Time    CRC
============  ========  ========  ====  ========  =========  ======  ====
GAR12BB5.USP     13073  Crunched   49%      6728  27 Jul 87   7:39a  FFDE
GAR12IB0.USP     15567  Crunched   50%      7803  27 Jul 87   7:35a  2D0B
GAR12RB0.USP     12464  Crunched   48%      6584  27 Jul 87   7:28a  B579
GAR18RB0.USP     22863  Crunched   53%     10962  27 Jul 87   7:29a  8D00
GAR24RB0.USP     37345  Crunched   59%     15628  27 Jul 87   7:30a  C704
GAR30RB0.USP     58104  Crunched   65%     20443  27 Jul 87   7:32a  C3BF
READ.ME           2966  Crunched   43%      1708  28 Jul 87   8:02a  5556
        ====  ========            ====  ========
Total      7    162382             57%     69856


Name          Length    Stowage    SF   Size now  Date       Time    CRC
============  ========  ========  ====  ========  =========  ======  ====
OPT10BB5.USP      9688  Crunched   49%      4962  21 Jul 87   1:07p  672D
OPT10IB0.USP     11747  Crunched   49%      6026  21 Jul 87   1:07p  B457
OPT10RB0.USP      9500  Crunched   49%      4875  21 Jul 87  12:55p  6B4D
OPT12BB5.USP     12396  Crunched   51%      6132  21 Jul 87   1:02p  B711
OPT12IB0.USP     15279  Crunched   53%      7307  21 Jul 87   1:01p  495D
OPT12RB0.USP     12056  Crunched   51%      6018  21 Jul 87  12:56p  70B6
OPT18RB0.USP     21963  Crunched   54%     10142  21 Jul 87  12:57p  0A6A
OPT24RB0.USP     36074  Crunched   60%     14655  21 Jul 87  12:58p  A230
READ.ME           2883  Crunched   42%      1679   6 Aug 87  12:29p  046E
        ====  ========            ====  ========
Total      9    131586             54%     61796


Name          Length    Stowage    SF   Size now  Date       Time    CRC
============  ========  ========  ====  ========  =========  ======  ====
RB12.FNT         14673  Crunched   51%      7214  27 Jun 87   0:31a  852D
RBI12.FNT        18667  Crunched   56%      8275  27 Jun 87   0:32a  BA6F
RBX12.FNT        19774  Crunched   59%      8233  27 Jun 87   0:33a  A802
RM12.FNT         13327  Crunched   46%      7200  27 Jun 87   0:28a  2ECC
RMI12.FNT        17187  Crunched   53%      8226  27 Jun 87   0:29a  DEB2
        ====  ========            ====  ========
Total      5     83628             54%     39148

This archive contains the program to download the fonts and the necessary
instructions


Name          Length    Stowage    SF   Size now  Date       Time    CRC
============  ========  ========  ====  ========  =========  ======  ====
DOCUMENT.BAT       140  Crunched   25%       105   6 Oct 87  10:22p  C1FF
DOWNLOAD.DOC      4565  Crunched   51%      2270  28 Jul 87  10:38p  1017
DOWNLOAD.EXE     15172  Crunched   22%     11933  15 Apr 87  10:29a  5C70
GARAMOND.DOC      2161  Crunched   42%      1255   6 Oct 87  10:21p  45EE
GARFIX10.USP     10377  Crunched   47%      5580   6 Oct 87   9:35p  A446
GARFXB10.USP     10804  Crunched   47%      5819   6 Oct 87   9:43p  C17C
GARFXI10.USP     11002  Crunched   45%      6063   6 Oct 87   9:58p  63A4
README.1ST         541  Crunched   31%       378   6 Oct 87  10:08p  2D5F
        ====  ========            ====  ========
Total      8     54762             40%     33403

```
{% endraw %}

## DOWNLOAD.DOC

{% raw %}
```

                      Downloading Soft Fonts To A LaserJet



                                     SUMMARY

        DOWNLOAD.EXE  is  an  IBM PC utility  program  that  manages  the 
        process  of downloading soft fonts to a LaserJet printer.   DOWN-
        LOAD can send a font to any MS-DOS device or to a disk file.  You 
        have optional control over the ID number of the font, whether  it 
        is permanent or temporary, and whether it is a primary or second-
        ary font.


                              FONT CHARACTERISTICS

        All  soft fonts have three characteristics associated with  them.  
        Each  font must have a unique ID number, 0 - 15.  This  lets  you 
        select  a  soft font through software or the front panel  of  the 
        printer. Each font must be defined as either temporary or perman-
        ent.  Temporary fonts are deleted whenever the LaserJet is reset.  
        Most  software that controls the LaserJet sends a  reset  command 
        out  first, thus deleting all temporary fonts.  Finally,  a  font 
        may  be defined as either primary or secondary.  (Note that  only 
        one  primary and one secondary font can exist at one time.)   The 
        LaserJet lets you switch between primary and secondary fonts with 
        simple control characters.  Control-N selects the secondary font, 
        while control-O selects the primary font.  Embedding these  char-
        acters in you text file lets you switch between fonts.


                                RUNNING DOWNLOAD

        First,  if you forget how to run DOWNLOAD, or need  help,  simply 
        type  DOWNLOAD followed by a carriage return.  The  program  will 
        print  a  help list for you.  To run download you must  at  least 
        specify  the name of the soft font to send to your printer.   You 
        can  optionally  specify the device to send the  file  to,  LPT1, 
        LPT2, LPT3, COM1, or COM2.  In addition, you can optionally  con-
        trol the three font attributes specified above.  To invoke  DOWN-
        LOAD type:


        download fontname [device id perm prim]

        where  the arguments between the two braces are optional and  the 
        arguments are as defined below:

        fontname = the full name of the file to download
        device   = optional printer port: LPT1, LPT2, LPT3, COM1, COM2, 
                   or a disk file name
        id       = optional unique soft font ID number (0 - 15)
        perm     = optional make font Permanent or Temporary (P/T)
        prim     = optional make font Primary or Secondary (P/S)


                      Downloading Soft Fonts To A LaserJet



        The  DOWNLOAD program defaults to printer port LPT1, and  assigns 
        the soft font ID 0, and permanent - primary status.  Thus:

        download tr100rpn.usp

        sends  the Times Roman 10 point regular font, (tr100rpn.usp),  to 
        the LaserJet as font id 0, and makes it permanent and the primary 
        font.

        download tr100bpn.usp lpt1 1 p s

        sends  the bold faced Times Roman font to the LaserJet  via  LPT1 
        and assigns it font id 1, permanent and secondary status.


                                   DISTRIBUTION

        This program is provided free of charge to all who are interested 
        in  it.  It may be freely exchanged as long as no fee is  charged 
        for it.  Please distribute this package with BOTH this documenta-
        tion file and the executable program.  This program and  documen-
        tation  are copyright 1987 by Gary Elfring.  All rights  are  re-
        served.  Commercial use is strictly prohibited.

        An enhanced version of this program, which lets you use wildcards 
        for  the  font names or supply a list of fonts  to  download,  is 
        supplied free of charge with all fonts libraries I sell.  Or  you 
        can purchase the enhanced downloader and source code (written  in 
        C),  for  a small fee separately.  I offer a  number  of  special 
        downloadable fonts including computer symbols, pi characters  and 
        dingbats,  credit  cards,  and families  of  Roman,  Script,  and
        Helvetica like fonts.   For free information on these inexpensive 
        downloadable soft fonts for you LaserJet  contact:

        Gary Elfring
        P.O. Box 61
        Wasco, Illinois  60183-0061

        7/28/87

```
{% endraw %}

## GARAMOND.DOC

{% raw %}
```

(2X                               Garamond fonts

(1X
          This package contains three fixed width, 10 cpi versions of 
          the Garamond font, and a limited version of my standard soft 
          font download program. This document is being printed in all
          three fonts.

          This font should be compatible with any of the LaserJet 
          series of printers. It has been tested on a LaserJet II, 
          using the download program included with this package.

          The complete character set for this portrait font is shown 
          below:


(2X          Garamond 10 cpi Regular
(1X          abcdefghijklmnopqrstuvwxyz
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          1234567890 ~`!@#$%^&*()-_=+\| [{]};:'",<.>/?

(2X          Garamond 10 cpi Bold
          abcdefghijklmnopqrstuvwxyz
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          1234567890 ~`!@#$%^&*()-_=+\| [{]};:'",<.>/?

(2X          Garamond 10 cpi Italic
(3X          abcdefghijklmnopqrstuvwxyz
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          1234567890 ~`!@#$%^&*()-_=+\| [{]};:'",<.>/?


(1X          If you like these fonts and are interested in other style 
          fixed width (Roman-Times regular, bold, & italic at 8, 10,
          & 12 cpi) fonts or proportionally spaced fonts contact:

(2X               Gary Elfring
(1X               P.O. Box 61
               Wasco,  Illinois
               60183


          Copyright 1987 by Gary Elfring

          Currently available fonts include: boxed characters, pi & 
          digbat, credit cards - $35, Helv or Roman family- $50, Script
          family- $35, Roman fixed width family- $35, Title fonts- $40.
          Prices subject to change without notice.

          This package is destributed as "freeware". NO charge may be
          made for it. It may not be commercially sold. Please ensure
          that the entire package is kept together in a single archive 
          file including:  

          DOWNLOAD.DOC, DOWNLOAD.EXE, GARFIX10.USP, GARFXB10.USP, 
          GARFXB10.USP, GARAMOND.DOC, README.1ST, & DOCUMENT.BAT.

```
{% endraw %}

## PCHELP.DOC

{% raw %}
```
              HELP FOR NEW USERS & PROBLEMS YOU MIGHT HAVE 
                        FROM PC PLUS CONSULTING

     Public domain software is actually very easy to use if you are familiar
with a few basic "DOS" commands. These commands are "COPY", "DISKCOPY", "DIR",  
"TYPE", "FORMAT", & a few others.  None of the disks are "bootable", which
means that you cannot place the disk in your computer and turn it on.
     The first thing is to make a backup copy of your disk with the following
command:
     A>DISKCOPY A: B:  <enter> - (will copy all files from 'A' to 'B')
     In the event that you get some sort of error message when using "DISKCOPY",
you will then have to use the "COPY" command to make a backup of your original
disk. Place a blank FORMATTED disk in the "B" drive and enter the following
command at the "A>" prompt: 
     A>COPY *.* B:  <enter> - (will copy all files from 'A' to 'B')
     Now put the original disk away and use the working copy.  The next thing
to do is see what files are on the disk.  Place the working copy in the "A"
drive and enter the following command:
     A>DIR   <enter> - will display the filenames
     Now you will see many different filenames.  A filename consists of two
parts; the filename & the extension.  The filename will be on the left (up to
8 characters long) & the extension will be just to the right (up to 3
characters long).  You will be looking for certain extension names; which
will tell you something about that type of file.  

******************************************************************************
*      IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT     *
*----------------------------------------------------------------------------*
* EXE - a program file - type in the name & press the enter key.             *
* COM - a command file - type in the name & press the enter key.             *
* BAT - a batch file - many uses, type in the name & press enter key.        *
* BAS - a "BASIC" program. Needs GWBASIC or BASICA to run the program.       *
* ARC - a archived file - needs to be unarchived, contains many files.       *
* DQC - a compressed file - needs to be uncompressed to be readable.         *
* DOC - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
* TXT - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
******************************************************************************

     You may also see files like READ.ME or README.1ST or just README. These
are all documentation files that will tell you about the program or how to
work the program properly.

VERY IMPORTANT:  READ DOCUMENTATION FILES FIRST BEFORE RUNNING THE PROGRAM!!!

===============================================================================

     To view a documentation file on your screen, use the "TYPE" command.
With your program disk in the "A" drive enter the following command:
     A>TYPE filename.ext  (enter) - where filename would be README.DOC
            or whatever the filename is that you wish to view.
     This will display the documentation to the screen.  To stop the text
from scrolling by, press "CTRL S" (the CTRL key and "S" key at the same
time), any other key to resume scrolling. To obtain a printout of the
documentation simply replace the "TYPE" command with the "DOS" command
"COPY". Turn your printer on and enter the following command:
     A>COPY filename.ext PRN <enter> - where filename would be README.DOC or 
                                       whatever file you wish to print.

===============================================================================

     An "EXE", "COM", or "BAT" file extension means that when you  
enter the filename, the computer will do something.  For instance,
if the filename were "POKER.EXE", or "POKER.COM, or "POKER.BAT" you would
enter the following at the "A" prompt:
     A>POKER  <enter> - the poker program would now come up on the screen.

===============================================================================

     Another type of file (a little tricky to run) is a "BASIC" file. These
types have the "BAS" extension.  Any file with this extension must be run with
the "BASIC" interpreter.  That simply means that you must have a copy of
"GWBASIC.EXE" if you have a clone, or "BASICA.COM" if you have an "IBM". These
2 files (GWBASIC & the "BAS" file) must reside together or be able to find
each other.  An easy way to do this is to simply copy "GWBASIC.EXE" to the 
disk that contains the "BAS" files. When both files are together &
this disk was in the "A" drive you would enter the following command:
     A>GWBASIC POKER  <enter> - the poker program would now be "running"
                                & you would be playing the game.

===============================================================================

     Another important file is one with an "ARC" extension.  This means it is
an archived file & contains many smaller files within it. This is done so 
all the files will fit on to the disk(s) you received. You must extract the
files with a special program.  The program most commonly used is called 
"PKXARC.EXE". To extract files from a file called "TEST.ARC", enter the
following command: 
     A>PKXARC TEST B:   <enter> - this would extract all the files and place
them on a disk that was in the "B" drive.  You must have a FORMATTED blank disk
in the "B" drive when issuing this command. You could copy the "ARC" files & 
the program "PKXARC.EXE" to your hard drive & enter the following command:
     C>PKXARC TEST   <enter>  -  this will extract all the files from an
                                 archived state. Then you will see some of
                                 the different filenames mentioned above when
                                 you use the "DIR" command.

===============================================================================

     Hopefully this help sheet will enable you to understand & use your disks.
If all this still sounds like "GREEK", then we strongly suggest that you 
purchase the following disks:
        #257 - BEGINNERS - a tutorial on using public domain software
        #256 - DOS TUTORIAL - an excellent program teaching about your
                              computer & how to use "DOS" commands
        #255 - DOS HELP - on-line help screens for "DOS" commands

     If you would like individual training on your computer, our services
can be obtained for the following rates by appointment only:

        In our office - $35.00 / hour     

                                                Happy computing,

                                                PC PLUS CONSULTING
                                                14536 ROSCOE BL. # 201
                                                PANORAMA CITY, CA. 91402
                                                (818) 891-7930





     



     

```
{% endraw %}

## README.DOC

{% raw %}
```
   To display a directory of the files  within an archive type:
                   ARCDIR   (name of archive)
   example: 
          ARCDIR 123A (return)
 
  To extract the files to a working disk- first backup this disk and
  and format one disk for each of archives on the disk.

  Place the backup disk in drive A: and a blank formatted disk in another
  drive (X)
  type:     EXTRACT (name of archive) (X) letter of target drive
     example: 
           EXTRACT WKS1  B (return)
   It will take a few minutes to create a new disk in drive B: with 
  all the expanded files from the archive.
 
 If you create a subdirectory on your hard drive and change to it, then
you can extract the programs to your hard by using your HD letter in
place  of "X" in the EXTRACT command.
 --------  Use a new formatted disk for each of the archives. -------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3494

     Volume in drive A has no label
     Directory of A:\

    ARCDIR   BAT       100   1-02-80   7:41a
    CENGLX   ARC     77824  10-09-87  12:49a
    DOWNLOAD DOC      4565   7-28-87  10:38p
    EXTRACT  BAT       197   1-01-80   8:57a
    FILES    DOC      4722   1-11-88   1:21a
    GARFIX10 ARC     33664  10-09-87   1:28a
    GARGLYX  ARC     70656  10-09-87   1:20a
    OPTGLX   ARC     63488  10-09-87   1:14a
    PCHELP   DOC      7062   3-08-88   2:29p
    README   DOC       867   1-01-80   8:55a
    RMFONTS  ARC     39936  10-09-87  12:29a
    XARC     COM     11482   6-17-87   3:07p
    GO       BAT       133   4-05-93   4:29p
    SHOW     EXE      2040   9-12-88  10:48a
           14 file(s)     316736 bytes
                            1024 bytes free
