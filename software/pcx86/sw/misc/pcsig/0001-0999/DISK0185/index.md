---
layout: page
title: "PC-SIG Diskette Library (Disk #185)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0185/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0185"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 10"

    A variety of handy utilities to help manage your files.  Two different
    squeeze/unsqueeze programs, SQIBM/USQIBM, and ZSQ/ZUSQ save time when
    transmitting files by modem, and save disk space when archiving files.
    Several directory managers let you view/save your file listings the way
    you want, including hidden files.
    
    Special Requirements:  BASIC for some version.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  Various amounts.
    
    File Descriptions:
    
    CATALOG  COM  Sorted directory.
    DD       BAT  Directory sorted by date  (Part of DNXSD.BAT).
    SDIR     DOC  Documentation.
    SDIR     COM  Sorted directory by Ted Reuss.
    DXSAVE   BAT  Sample change in BAT to save sorted directory on disk.
    DX       BAT  Directory sorted by file extension  (Part of DNXSD.BAT).
    DS       BAT  Directory sorted by file size  (Part of DNXSD.BAT).
    DNXSD    DOC  Series of batch sorted directory utilities.
    DN       BAT  Directory sorted by filename  (Part of DNXSD.BAT).
    DIR2     BAS  Diskette sorted directory by Wes Meier, Version 2.0.
    SDIR24C  ASM  Assembler source.
    SDIR24C  DOC  Documentation.
    SDIR24C  COM  Sorted directory Version 2.4 by John Ratti.
    USQIBM   DOC  Documentation.
    USQIBM   COM  Unsquishes a squished file.
    SQIBM    DOC  Documentation.
    SQIBM    COM  Squishes a file.
    ZUSQ     EXE  Unsquishes a squished file.
    ZSQ-ZUSQ DOC  Documentation.
    ZSQ      EXE  Squishes a file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DNXSD.DOC

{% raw %}
```
                        DNXSD.DOC

	The batch files DN.BAT, DX.BAT, DS.BAT and DD.BAT write
sorted directories on the screen only. They sort on the directory
line starting with fileName, eXtension, Size or Date (mm/dd/yy).
The sorted directory can be stored by modifying the batch files,
as in the example of DXSAVE.BAT.
	These batch files have two dummy parameters: drive and
filename and extension restriction, if any. Thus, to sort the files
on drive E that satisfy the filename and extension restriction of
ABC?.*, sorting by size, one uses:
		DS E ABC?.*
The spaces between S, E and A are important.
	Note that if one sorts on a restricted set of files, such as 
with DX E *.COM, then that amounts to the same thing as DS E *.COM.

```
{% endraw %}

## FILES185.TXT

{% raw %}
```
Disk No:  185
Program Title: DOS UTILITIES no 10
PC-SIG version: 1.1

A variety of handy utilities to help manage your files.  Two different
squeeze/unsqueeze programs, SQIBM/USQIBM, and ZSQ/ZUSQ save time when
transmitting files by modem, and save disk space when archiving files.
Several directory managers let you view/save your file listings the way
you want, including hidden files.

Usage:  System Enhancement Tools.

Special Requirements:  BASIC for some version.

How to Start:  Type GO (press enter).

Suggested Registration:  Various amounts.

File Descriptions:

CATALOG  COM  Sorted directory.
DD       BAT  Directory sorted by date  (Part of DNXSD.BAT).
SDIR     DOC  Documentation.
SDIR     COM  Sorted directory by Ted Reuss.
DXSAVE   BAT  Sample change in BAT to save sorted directory on disk.
DX       BAT  Directory sorted by file extension  (Part of DNXSD.BAT).
DS       BAT  Directory sorted by file size  (Part of DNXSD.BAT).
DNXSD    DOC  Series of batch sorted directory utilities.
DN       BAT  Directory sorted by filename  (Part of DNXSD.BAT).
DIR2     BAS  Diskette sorted directory by Wes Meier, Version 2.0.
SDIR24C  ASM  Assembler source.
SDIR24C  DOC  Documentation.
SDIR24C  COM  Sorted directory Version 2.4 by John Ratti.
USQIBM   DOC  Documentation.
USQIBM   COM  Unsquishes a squished file.
SQIBM    DOC  Documentation.
SQIBM    COM  Squishes a file.
ZUSQ     EXE  Unsquishes a squished file.
ZSQ-ZUSQ DOC  Documentation.
ZSQ      EXE  Squishes a file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## SDIR.DOC

{% raw %}
```
    TITLE   SDIR - SORTED DIRECTORY COMMAND, Version 2.1
    PAGE    64,132			      ; JAN 1983
COMMENT |
    SDIR [d:][filename[.ext]] [options]
     [filespec] same as for DIR command

     [options] * /A - List hidden files.
	       * /E - Without screen erase.
	       * /P - Pause when screen full.
		 /X - Sort by extension.
		 /S - Sort by size.
		 /D - Sort by date/time.
		 /N - Do not sort, original order.

       Default = *.* sorted by name.ext with screen erase.
       * - Option may be combined with other options.

   Several modifications have been made.  They are:

	1. Filespecs are processed like DIR does.
	2. No sort option was added. /N
	3. Pause when screen full option added. /P
        4. Number of files found is printed.

				    Ted Reuss
				    Houston, TX


```
{% endraw %}

## SQIBM.DOC

{% raw %}
```

SQ.COM - 

The purpose of this program is to squeeze all types of files. It is 
most effective on text files and least effective on binary files such
as .EXE and .COM.

The output file name is changed so that the middle letter in the 
filetype is changed to a "Q". For example, a file called  ABC.TXT
would be called  ABC.TQT. The input file is not changed.

To run the squeezer:

SQ filename.filetype               (i.e.  SQ  ABC.TXT)

There are no messages displayed while the program is running. Make sure
you have enough disk space to handle the output file (which can be 5% to
50% smaller than the original depending on the type of file).

```
{% endraw %}

## USQIBM.DOC

{% raw %}
```


USQ.COM - 

The purpose of this program is to un-squeeze processed by  the SQ.COM
program. This program will recontruct the files to their original state
before compression.

You must specify the input and output files names (if missing, you
will be prompted for them).

To run the un-squeezer:

USQ d:filename.filetype d:newfilename.filetype   (i.e.  SQ  ABC.TQT ABC.TXT)

After specifying the file names, you will be asked if this is a text file.
Reply as appropriate. The replies are Y or N.

Make sure you have enough disk space to handle the output file which could
be up to twice the size of the input file.

```
{% endraw %}

## ZSQ-ZUSQ.DOC

{% raw %}
```

		**** ZSQ.EXE   ZUSQ.EXE ****


  The ZSQ.EXE file can be used to SQUEEZE any file to be sent
 to another computer. It uses a special coding process that
 allows large files to be compacted. These files can be stored
 on the host system using less space than a normal ASCII file.
 This process can also be used on your system to compact prog-
 grams before making back-up copies in order to save space.

  To squeeze a file before uploading it to the RBBS enter DOS
 and call the ZSQ.EXE as follows:

         ZSQ [d:]filename.ext

  where d: is the drive spec if not the same as the ZSQ's.
 The squeezed file will be written to the default drive with
 the letter 'Q' as the middle letter of the extention.

      ZSQ MYPROG.BAS-> MYPROG.BQS

  In order to reverse this process, as when a file is down-
 loaded from RBBS, use the ZUSQ.EXE program. It's operation
 is identical to the ZSQ program.

	ZUSQ [d:]filename.ext

  Once again the new UNSQUEEZED file will be written to the
 default drive. It will also have the correct extention.

	ZUSQ MYPROG.BQS-> MYPROG.BAS

**************************************************************

  This was written to run under MS-DOS on the Heath-Zenith
 Z100 system, however, it will also run on the IBM-PC.

  FILES SQUEEZED IN THIS MANNER MUST BE XFERED BY XMODEM !!!!
 
    !!!! THEY CANNOT BE TYPED WITH THE DOS COMMAND  !!!!

  All types of programs can be squeezed using this system. To
 see how well it works, try ZSQ on the Basic.com file on the
 PC. The results are very interesting!!

 Be sure to UNSQUEEZE the file before trying to run it.

  These programs are available on the Heath RBBS in TOWSON.
                 (301-661-2175)



 cat/070183						


e programs are 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0185

     Volume in drive A has no label
     Directory of A:\

    CATALOG  COM      1280   2-05-83
    DD       BAT        26   4-14-84   2:44p
    DIR2     BAS     21376  11-27-83   6:00p
    DN       BAT        22   4-14-84   2:41p
    DNXSD    DOC       752   4-16-84   3:55p
    DS       BAT        26   4-14-84   2:43p
    ZSQ      EXE     19840  11-23-83   3:08a
    DX       BAT        25   4-14-84   2:43p
    DXSAVE   BAT        34   4-16-84   3:48p
    SDIR     COM      1408   5-16-83  12:40a
    SDIR     DOC       896   5-19-83   8:38a
    SDIR24C  ASM     46848   2-07-84   1:59a
    SDIR24C  COM      2304  12-11-83   4:23a
    SDIR24C  DOC      1536  12-11-83   4:22a
    SQIBM    COM     14336   3-28-84   4:11a
    SQIBM    DOC       768   3-28-84   4:12a
    USQIBM   COM     22016   3-17-84  10:02p
    USQIBM   DOC       637   3-28-84   4:38a
    ZSQ-ZUSQ DOC      1792  11-23-83   3:12a
    ZUSQ     EXE     13696  11-23-83   3:11a
    FILES185 TXT      1648  12-15-88  10:11a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848  12-02-88   9:28a
           23 file(s)     152152 bytes
                            2048 bytes free
