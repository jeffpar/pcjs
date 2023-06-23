---
layout: page
title: "PC-SIG Diskette Library (Disk #366)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0366/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0366"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #6"

    Collection of files and routines written in Turbo Pascal for the IBM-PC.
    The files on this disk include a good array of communication routines
    which include, a Hayes modem dialer, serial communication routine, and
    a file opener with error handling.  These files can help users
    construct their own communications software.
    
    System Requirements:  Turbo Pascal
    
    How to Start:  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    ARGLIST2 PAS  Get command line parameters (argument list) -- classy
    2DIR     PAS  Sorted directory
    DIALER   PAS  Dials HAYES SmartModem
    COMMCALL PAS  Serial communications routines
    COLORDEM PAS  Demonstrates TURBO color modes
    CLIMB    PAS  Climb around the directory tree -- compiled only
    DIRSRCH  PAS  Directory search
    FILEIO   INC  File IO routines, w/o explanation
    INUSE    PAS  Password demonstration
    INKEYGET PAS  Program to receive ANY keypress from keyboard
    INKEY    INC  Routine to get char from keyboard -- like BASIC INKEY$
    INDEX    PAS  Index, view, delete, or print files on disk
    LU       PAS  Library Utility -- needs modification for IBM & TURBO
    JFYDIR   PAS  Writes directory of default drive
    LU-2     PAS  Included file
    LU-1     PAS  Included file
    PASCAL   LIB  Various routines
    OPENFILE INC  Opens a file, with protection agains error crashes
    LU       DOC  Documentation
    SENDASCI INC  Routine to send ASCII chars ???
    READDATE INC  Function accepts and returns a valid data (oo/oo/oo)
    PRINTUSG PAS  Demonstration
    PRINTUSG INC  Print according to "mask", like BASIC PRINT USING
    TYPES    INC  Type declarations used by other files
    SCREEN   INC  Routines to accept valid data of various types
    FREESPAC INC  Routine to get amount of free space on disk
    DRAWBOX  INC  Draw a box (one style) and use window inside it
    DIR      PAS  Get directory -- incomplete???
    BLANK    INC  Routines to create string of blanks, center string
    -------- ---  The following five files are incomplete in some way
    XREFT    PAS  TURBO cross-reference & lister -- $Include files, too
    XLIST    PAS  TURBO cross-reference & lister
    UTIL     INC  Fifty-Two utility routines (!!!)
    TXREF    COM  Compiled version
    TXREF    PAS  TURBO cross-reference & lister -- needs TURBO TOOLBOX
    TOOLKIT  INC  Routines for interactive programs -- NOT TURBO
    STRIPTAB PAS  Strips TABs from a file -- replaces with one space
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 159:  TURBO PASCAL/5 (programs and utilities -- various authors)

This is a DOUBLE-SIDED diskette.

Index   Name           Description

159.01  2DIR    .PAS   Sorted directory
159.02  ARGLIST2.PAS   Get command line parameters (argument list) -- classy
159.03  CLIMB   .PAS   Climb around the directory tree -- compiled only
159.04  COLORDEM.PAS   Demonstrates TURBO color modes
159.05  COMMCALL.PAS   Serial communications routines
159.06  DIALER  .PAS   Dials HAYES SmartModem
159.07  DIRSRCH .PAS   Directory search
159.08  FILEIO  .INC   File IO routines, w/o explanation
159.09  INDEX   .PAS   Index, view, delete, or print files on disk
159.10  INKEY   .INC   Routine to get char from keyboard -- like BASIC INKEY$
159.11  INKEYGET.PAS   Program to receive ANY keypress from keyboard
159.12  INUSE   .PAS   Password demonstration
159.13  JFYDIR  .PAS   Writes directory of default drive
159.14  LU      .PAS   Library Utility -- needs modification for IBM & TURBO
159.15  LU-1    .PAS   ^$Included file
159.16  LU-2    .PAS   ^$Included file
159.17  LU      .DOC   ^Documentation
159.18  OPENFILE.INC   Opens a file, with protection agains error crashes
159.19  PASCAL  .LIB   Various routines
159.20  PRINTUSG.INC   Print according to "mask", like BASIC PRINT USING
159.21  PRINTUSG.PAS   ^Demonstration
159.22  READDATE.INC   Function accepts and returns a valid data (oo/oo/oo)
159.23  SENDASCI.INC   Routine to send ASCII chars ???
159.24  STRIPTAB.PAS   Strips TABs from a file -- replaces with one space
159.25  TOOLKIT .INC   Routines for interactive programs -- NOT TURBO
159.26  TXREF   .PAS   TURBO cross-reference & lister -- needs TURBO TOOLBOX
159.27  TXREF   .COM   ^Compiled version
159.28  UTIL    .INC   Fifty-Two utility routines (!!!)
159.29  XLIST   .PAS   TURBO cross-reference & lister
159.30  XREFT   .PAS   TURBO cross-reference & lister -- $Include files, too
====================   The following five files are incomplete in some way
159.31  BLANK   .INC   Routines to create string of blanks, center string
159.32  DIR     .PAS   Get directory -- incomplete???
159.33  DRAWBOX .INC   Draw a box (one style) and use window inside it
159.34  FREESPAC.INC   Routine to get amount of free space on disk
159.35  SCREEN  .INC   Routines to accept valid data of various types
159.36  TYPES   .INC   Type declarations used by other files
159.37  README  .159   YOU ARE READING IT
```
{% endraw %}

## FILES366.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 366               Turbo Pascal #5                       v2   DS2
------------------------------------------------------------------------
Collection of files and routines written in Turbo Pascal for the IBM-PC.
 
2DIR     PAS  Sorted directory
ARGLIST2 PAS  Get command line parameters (argument list) -- classy
CLIMB    PAS  Climb around the directory tree -- compiled only
COLORDEM PAS  Demonstrates TURBO color modes
COMMCALL PAS  Serial communications routines
DIALER   PAS  Dials HAYES SmartModem
DIRSRCH  PAS  Directory search
FILEIO   INC  File IO routines, w/o explanation
INDEX    PAS  Index, view, delete, or print files on disk
INKEY    INC  Routine to get char from keyboard -- like BASIC INKEY$
INKEYGET PAS  Program to receive ANY keypress from keyboard
INUSE    PAS  Password demonstration
JFYDIR   PAS  Writes directory of default drive
LU       PAS  Library Utility -- needs modification for IBM & TURBO
LU-1     PAS  ^$Included file
LU-2     PAS  ^$Included file
LU       DOC  ^Documentation
OPENFILE INC  Opens a file, with protection agains error crashes
PASCAL   LIB  Various routines
PRINTUSG INC  Print according to "mask", like BASIC PRINT USING
PRINTUSG PAS  ^Demonstration
READDATE INC  Function accepts and returns a valid data (oo/oo/oo)
SENDASCI INC  Routine to send ASCII chars ???
STRIPTAB PAS  Strips TABs from a file -- replaces with one space
TOOLKIT  INC  Routines for interactive programs -- NOT TURBO
TXREF    PAS  TURBO cross-reference & lister -- needs TURBO TOOLBOX
TXREF    COM  ^Compiled version
UTIL     INC  Fifty-Two utility routines (!!!)
XLIST    PAS  TURBO cross-reference & lister
XREFT    PAS  TURBO cross-reference & lister -- $Include files, too
============  The following five files are incomplete in some way
BLANK    INC  Routines to create string of blanks, center string
DIR      PAS  Get directory -- incomplete???
DRAWBOX  INC  Draw a box (one style) and use window inside it
FREESPAC INC  Routine to get amount of free space on disk
SCREEN   INC  Routines to accept valid data of various types
TYPES    INC  Type declarations used by other files
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## LU.DOC

{% raw %}
```
        LU.PAS             MS-DOS VERSION 1.21           January 12, 1985


	NAME

	     lu - create and maintain a Novosielski library file.

	SYNOPSIS

	     lu   - all prompts for data are done by the program

	DESCRIPTION

	     Library  Utility  (Pascal)  is a program to allow  combining 
	     multilple files into one larger file.

	     Version  1.21  replaces all prior versions of Pascal coding.  
	     The  major  revisions are:   
                 revamping of the screen handling to use the graphics
		 characters in the character set.

		 making the modifications to the library more interactive
		 through the use of automatically updated directorys
		 on screen at all times, filesize and entry usage...

		 The use of a simple window scheme to keep prompts from
		 overwriting any of the screen display.

		 the addition of a status line/function key setup to
		 allow use of the function keys to control LU.PAS

	     Version 1.21 does NOT include the following LU86 4.0 
	     revisions: 
	     
		 The addition of CRC calculation and checking to improve
		 reliability,  

		 The addition of member time and date stamping,
		 
		 Support  for exact file lengths of library members.

		 Wildcards  may  MOT be used.
	     
	     Error reporting and  recovery have also been improved.


		  Prior  versions  of  16-bit LU and  LU86  would  re-use 
		  deleted directory entries when performing an add/update 
		  operation. LU.PAS 1.21 will not reuse deleted directory 
		  entries [Note 1] and requires reorganization to reclaim  
		  deleted  directory entries.    This was done to provide
		  an indication of unused space in the lbr file.
		     *
		     [Note 1]
		      Except that in the case where an added file has
		      the same name.typ as a DELETED entry,  the  DELETED 
		      entry is  intentionally  invalidated  by  LU.PAS to
		      prevent an inadvertent unerasure and duplication of
		      that entry name.),  

				  
				  
				  -1-





	LU86.EXE           MS-DOS VERSION 4.0           September 2, 1984


	LIBRARY FORMAT

	     The  entire library file and each of its members are concep-
	     tually organized into "sectors", each sector being 128 bytes 
	     long.  (From CP/M, where LU originated).  Each sector of the 
	     file  belongs to at most one library  member.   Each  member 
	     comprises  a whole number of sectors.   The last sector of a 
	     member  may,  however,  be  logically declared as  a  "Short 
	     Sector".  Although it physically contains 128 bytes, a Short 
	     Sector  contains one or more "pad" bytes at the end for  the 
	     purpose of maintaining the structure of the library file  as 
	     a whole.  A member may have as few as 0 sectors.

	     Members  may be referred to by a name of up to 8 characters, 
	     and  an extension of up to 3 characters.   The naming  rules 
	     are identical to those for the naming of CP/M-80 disk files.  
	     Members  must be uniquely named;  any given  combination  of 
	     name and extension may identify at most one member.

	     The  start and end points of each member are defined by  the  
	     pointers in a "directory entry" for the member.   There  are 
	     no embedded start or end marks separating the members.   All 
	     sectors between the start and end sectors of a member belong 
	     to that member.   The members need not appear in the library 
	     in the same order that their directory entries appear in the 
	     directory.

	     The  directory  information in an LU style library  is  con-
	     tained in the same file as the data files,  or members.  The 
	     amount  of  space to be allocated to the directory  must  be 
	     specified by the user when a new library is created, but can 
	     be  changed when the file is reorganized.  The size of  each 
	     LU directory entry is 32 bytes, which means each four direc-
	     tory  entries take up one 128-byte 'sector' of  the  library 
	     file.   The LU directory uses one entry for control informa-
	     tion  itself,  so the number of  directory 'sectors'  needed 
	     for a library of m members is (m + 1) / 4, rounded up to the 
	     next whole number.

	     The  user  need not be concerned with  this  discussion,  as 
	     directory size  is calculated by the program.  All directory 
	     sizes are  input and output in terms of entries,  each entry 
	     being a potential member file. The program adjusts directory 
	     size to an integral number of sectors.

	MISFEATURES (BUGS)











				  -2-





	LU86.EXE           MS-DOS VERSION 4.0           September 2, 1984


	ACKNOWLEDGEMENTS

	     Gary  Novosielski designed the LU format and wrote the first 
	     programs supporting 'LBR' files.   He has continued to main-
	     tain and improve the LU format by distributing a file of the 
	     offical LU format definition.   The current version of  this 
	     definition is contained in LUDEF5.DOC.  Interested users are 
	     directed  to that file for more complete information on  the 
	     LU format.

	     Large  portions of this document are excerpts from the  CP/M 
	     file  LU300.DOC,  which documents the operation of the  CP/M 
	     version  of LU (an implemenation much superior to  LU86,  by 
	     the way).  Any particulary lucid and useful sections of this 
	     document  probably  originated with Gary  Novosielski.   The 
	     Turgid Obfuscation is probably mine.

	     This program had its genesis in the UNIX progam LAR.C.   LAR 
	     was  rendered into C that mortal compilers could  understand 
	     by Tom Jennings who renamed the source to LU.C.   I used  LU 
	     as a base and have renamed the effort to LU86.

	     LU86, ver 4.0 is a 'C' program, and is compiled with version 
	     2.10B of the Computer Innovations C86 MS-Dos compiler.

	     LU.PAS was written by Steven ????, and heavily modified
	     by John Plocher.

	     This doccumant was unselfishly pilfered and palagerized from
	     the doccumentation for LU86 4.0 by the following person:

			   Paul J. Homchick
			   Chimitt Gilman Homchick, Inc.
			   One Radnor Station, Suite 300
			   Radnor, PA 19087

            LU.PAS is written to compile with Borlands Turbo Pascal,
	    and run on a Victor 9000.  It will run on an IBM PC with
	    these changes - 
		the window handling routines make 2 assumptions:
		
		1 : the text screen being used is located at $F000:0000
		    and is 2048 words (16bit) large, and
		    (the IBM PC is at E000:0000 or $E800:0000)
		2 : The terminal driver recognizes the VT 52+ screen
		    control codes to move & save cursor...
		    These are NOT the same as ANSI (IBM PC) codes!
	    
	    In addition, there is a chance that the character graphics 
	    used here will not be the same as those on the Victor.


	    The changes/additions to this program and this doccument
	    were done by:

			 John Plocher
                         17403 McIntyre
			 Detroit, MI
			 48219
			 (313) 535-7858
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0366

     Volume in drive A has no label
     Directory of A:\

    2DIR     PAS      4593   2-23-85   2:33p
    ARGLIST2 PAS      3456   2-23-85   2:33p
    TXREF    COM     18580   3-09-85   9:33a
    BLANK    INC       896   2-23-85   2:33p
    CLIMB    PAS     22016   2-23-85   2:33p
    COLORDEM PAS     12544   2-23-85   2:33p
    COMMCALL PAS      6400   2-23-85   2:28p
    DIALER   PAS      2477   2-23-85   2:33p
    DIR      PAS      1024   2-23-85   2:27p
    DIRSRCH  PAS      4736   2-23-85   2:28p
    DRAWBOX  INC       926   2-23-85   2:33p
    FILEIO   INC      1407   2-23-85   2:33p
    FREESPAC INC       678   2-23-85   2:33p
    INDEX    PAS     29256   2-23-85   2:33p
    INKEY    INC       314   2-23-85   2:33p
    INKEYGET PAS      1664   2-23-85   2:27p
    INUSE    PAS      1280   2-23-85   2:32p
    JFYDIR   PAS      2688   2-23-85   2:28p
    LU       DOC      7296   2-23-85   2:40p
    LU       PAS     17164   2-23-85   2:41p
    LU-1     PAS      3292   2-23-85   2:41p
    LU-2     PAS     10232   2-23-85   2:41p
    OPENFILE INC      2944   2-23-85   2:28p
    PASCAL   LIB     12672   2-23-85   2:28p
    PRINTUSG INC      2944   2-23-85   2:32p
    PRINTUSG PAS       640   2-23-85   2:32p
    READDATE INC      6408   2-23-85   2:33p
    SCREEN   INC     21120   2-23-85   2:33p
    SENDASCI INC      1664   2-23-85   2:27p
    STRIPTAB PAS      1664   2-23-85   2:32p
    TOOLKIT  INC      4709   2-23-85   2:29p
    TXREF    PAS     14976   2-23-85   2:34p
    TYPES    INC       512   2-23-85   2:34p
    UTIL     INC     57728   2-23-85   2:48p
    XLIST    PAS     16768   2-23-85   2:29p
    XREFT    PAS     21376   2-23-85   2:29p
    FILES    TXT      2688   3-25-85   5:01p
    FILES366 TXT      2432   5-23-85   4:06p
           38 file(s)     324164 bytes
                           20480 bytes free
