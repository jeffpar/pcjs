---
layout: page
title: "PC-SIG Diskette Library (Disk #490)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0490/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0490"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICROCOMPUTER"

    This disk is a compilation of very useful utilities for data security
    as well as saftey when using DOS.  It was compiled by Dan Cronin who
    refers to them in his book "Microcomputer Data Security: Issues and
    Strategies."  Each of the files here listed has its own documentation
    file!!
    
    System Requirements:  64K RAM, one disk drive and monochrome display
    
    How to Start: Consult the accompanying documentation files for
    directions.  To run a program with the suffix .COM, .EXE, or .BAT,
    just type its name, i.e., for BLANK.COM, type BLANK <ENTER>.
    
    File Descriptions:
    
    PC-ZERO  153  BASIC program for PC-ZERO.EXE
    ASK      COM  Allows interactive input to a batch file
    ALTER    COM  Hide a file or subdirectory
    PC-ZERO  EXE  Security for zeroing out files before deleting the file
    NDOSEDIT COM  DOS command editor
    MOVE     COM  Hybrid of the Copy and Delete commands
    GCOPY    EXE  Selective file copy utility
    DJCRONIN DOC  A note from the autor of the book by this disk's name
    CLEAN2   COM  Disk Drive head cleaning utility
    BROWSE   COM  Allows two-way scrolling of text files
    BLANK    COM  Turns off the computer screen in 5 minutes
    VOLSER   COM  Alter or create volume lables on a disk
    VDEL     COM  Selective delete utility
    SYSTAT   COM  Enhanced version of DOS check disk (CHKDSK)
    SDIR     COM  Sorted directory
    ???????? DOC  Documentation files for programs by the same name
    WHEREIS  COM  Find a file in any subdirectory, on floppy or hard disk
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASK.DOC

{% raw %}
```
                                                   Batch
                                                   Commands

    ASK subcommand


    Purpose:    This command allows the user to set the BATCH
                environment ERRORLEVELS interactively.

    Format:     ASK [prompt line]

    Type:       Internal        External
                                  ***

    Remarks:    This command is designed to be used
                interactively. It allows the user some manual
                input into the BATCH envirionment. The 'prompt
                line' parameter is optional.

    Example:    ASK Do you want to go to PAS2 ?

                This command accepts a single character from
                the user and sets ERRORLEVEL based on whether
                Y or N was entered. Y or y will set ERRORLEVEL
                0, N or n will set ERRORLEVEL 1

                ASK

                Displays 'Press Y or N ' on the console and
                waits for a keypress.

                (Sample BATCH file)

                ASK
                IF ERRORLEVEL 1 GOTO PRESSEDNO
                ECHO You pressed Y or y.
                GOTO end
                :PRESSEDNO
                ECHO You pressed N or n
                :end

            NOTES:

                    ASK accepts only Y, y, N, or n as a
                    response in this version.


                                                     6-34a


SIG/Access:

```
{% endraw %}

## BLANK.DOC

{% raw %}
```
 
 
         Blank is a screen utility developed by John Socha and
         appeared in Softalk magazine in December of 1983.  The
         program supplied and dated 12/83 was assembled from the
         assembly file supplied with the article.
 
         This utility will turn off the screen display if no keys have
         been touched for three minutes.  When a key is pressed the
         display will return.  With continues use of the key board the
         time is continually reset and the display does not turn off.
         Probably the best key to press to regain the display after it
         has been turned off is the Scroll Lock.
 
         This utility has the advantage of saving the screen form
         damage due to continues display in one location, such as the
         bottom line or in a certain location designated by a game.
         Continues bright display in one location can cause burning of
         the phosphor and a dark spot.
 

```
{% endraw %}

## BROWSE.DOC

{% raw %}
```
                           BROWSE.COM

     Usage: At the DOS prompt, type BROWSE filespec.

     Browse is very similar to the VM/CMS browse command.  It 
allows full screen viewing of any file.  Use the arrow keys to 
scroll up, down, left and right.  Home takes you to the top left 
corner of the file, End goes to the bottom left.  Press Esc to 
exit browse.

     Note: Browse is not an editor.  It can only be used to VIEW 
a file, not change it.

```
{% endraw %}

## DJCRONIN.DOC

{% raw %}
```
This diskette contains a powerful assortment of public domain programs
that are cited in my forthcoming book, "Microcomputer Data Security:
Issues and Strategies", Brady Communications Company, Simon & Schuster
General Reference Books.   I'd like to thank Mr. Richard Peterson of
PC-SIG Software Interest Group for making this arrangement possible.

The programs and utilities are indexed by chapter, and in the order in
which they appear in the book.   Three of the programs listed below are
too august in size to fit on this diskette, such as DISKCAT, and are
referenced by diskette number.



Chapter 6

DISKCAT                           Catalog management system (Complete disk #106)
CLEAN2.COM                        Drive head cleaning utility
GCOPY.COM                         Global COPY command
VOLSER                            Changes diskette volume label


Chapter 7

VDEL.COM                          Global DELETE command
ULTRA-FILE
ULTRA-FORMAT                      Disk Formatting tools  (Complete disk #133)
ULTRA-ZAP                         File zap tools         (Complete disk #133)
PC-ZERO                           Purge file tools       (Complete disk #133)
ASK.COM                           Batch command for PRFORMAT.BAT
ALTER.COM                         File and subdirectory HIDE
SYSTAT.COM                        Replaces DOS CHKDSK command
BROWSE.COM                        Replaces DOS TYPE command
MOVE.COM                          Hybrid of COPY and DELETE commands
NDOSEDIT.COM                      DOS command editor
SDIR.COM                          Sorted directory utility
BLANK.COM                         Darkens screen
WHEREIS.COM                       Searches files in subdirectories


Chapter 11

QSYS by Dennis Lee                Security system        (Complete Disk #118)



```
{% endraw %}

## FILES490.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  490  Microcomputer Data Security - by Dan Cronin           V1 DS2
---------------------------------------------------------------------------
 
This disk is a compilation of very useful utilities for data security as
well as saftey when using DOS.  It was compiled by Dan Cronin who refers
to them in his book "Microcomputer Data Security: Issues and Strategies".
 
ALTER    COM  Hide a file or subdirectory
ASK      COM  Allows interactive input to a batch file
BLANK    COM  Turns off the computer screen in 5 minutes if the keyboard
BROWSE   COM  Allows two-way scrolling of text files
CLEAN2   COM  Disk Drive head cleaning utility
DJCRONIN DOC  A note from the autor of the book by this disk's name
GCOPY    EXE  Selective file copy utility
MOVE     COM  Hybrid of the Copy and Delete commands
NDOSEDIT COM  DOS command editor
PC-ZERO  EXE  Security for zeroing out files before deleting the file
SDIR     COM  Sorted directory
SYSTAT   COM  Enhanced version of DOS check disk (CHKDSK)
VDEL     COM  Selective delete utility
VOLSER   COM  Alter or create volume lables on a disk
WHEREIS  COM  Find a file in any subdirectory, on floppy or hard disk
???????? DOC  Documentation files for programs by the same name
```
{% endraw %}

## MOVE.DOC

{% raw %}
```
The purpose of the MOVE command is to use DOS function call 56H to
rename a file across directories. This provides for the effective
movement of a file between directories without having to actually copy
the data. If the to and from paths are the same, this command acts
as a straight RENAME.

The Syntax of the MOVE command is:

      MOVE  \path\name.ext \path\name.ext

   where:the first operand is the from path\name, and the second
         operand is the to path\name.
There are no other options.

Restrictions:
The data is not physically moved, therefore, a 'move' can only be done
between datasets on the SAME drive.

The MOVE command is for DOS 2.0 ONLY. It is not supported by DOS 1.1.

Author: Original by Mike Turner, modified by Brian Pierce


SIG/Access:

```
{% endraw %}

## PC-ZERO.DOC

{% raw %}
```

 P C - Z E R O


 PC-ZERO is a Security feature for zeroing files before Deleting them.   
 It must be remembered in MS-DOS or PC-DOS that Erasing a file DOES NOT
 ERASE THE DATA on a diskette or hard disk - it merely removes the file 
 from the active directory. Files that are Erased or Deleted with PC-DOS or 
 MS-DOS leave the actual DATA of the file untouched and intact. Anyone
 with a disk utility like the Norton Utilities can still read sensitive 
 data you thought you Deleted or Erased.
  
 PC-ZERO erases all the data in a file as well as deleting it. Each
 character of such a file will be filled with hexadecimal X'FF' bytes
 [ or CHR$(255) ] before it is deleted thru DOS. 
  

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

## SYSTAT.DOC

{% raw %}
```
SYSTAT.COM.......Contributed by Jeff Garber.. 10/7/82

This program when executed from DOS will display on your
screen  the capactity of each drive and the free space
on each. Also if you have placed on each disk an ASCII
file with the extension of .NAM, will display the Name
you have given the disk and a comment about the disk...


A>SYSTAT  (this is what you get when you type this)

MS-DOS Systat version 1.1       8 October 1982 4:50AM

Drive   Name      Capacity    Free  Comments
-----   ----      --------    ----  --------
 A:     AHOST         156K     12K  HOSTCOMM Master disk
 B:     BHOST         156K     69K  HOSTCOMM B drive general files
 C:     CHOST         156K      5K  HOSTCOMM C drive PC-TALK & additions
 D:     DHOST         156K     28K  HOSTCOMM D drive files


System Memory:    256K              Available memory:  212K

The Name field is the file name I placed on each disk and
each had the extension of .NAM (ie. AHOST.NAM was on drive A.)
The comments were in that file as line 1.....



```
{% endraw %}

## VDEL.DOC

{% raw %}
```
VDEL.COM
 
        VDEL is a program which allows selective deletion of files.
 
        INVOKING THE PROGRAM:  VDEL may be invoked by typing
'VDEL fname.ext' at the command prompt.  Wildcards may (and usually will)
be used, i.e. 'VDEL *.ASM'.
 
        If any matching files are found, VDEL will display the name of
the file, and ask if it should be deleted.  Pressing 'Y' or 'y' will
delete the file. Pressing ESC stops the program.  Any other key will
leave the file alone and continue asking about other matching files.
 
        I strongly encourage you to use VDEL instead of DEL or ERASE
when doing wild-card deletions.  It is too easy to accidentally delete
a file you wanted to keep when using the normal DOS commands.
 
        LIMITATIONS: VDEL should be transportable to any MS-DOS system.
 

```
{% endraw %}

## VOLSER.DOC

{% raw %}
```
                                               VOLSER
                                                   Command

            
    
    Purpose:    This command allows the user to alter/create
                volume labels.
            
    Format:     VOLSER [d:][/V]
            
    Type:       Internal        External
                                  ***
            
    Remarks:    This command is designed to be used 
                interactively. If a drive identifier is not
                specified, drive A: is assumed. The /V(ersion)
                parameter display the current version number.
                
    Example:    VOLSER

                This command line expects a disk to be labeled
                in drive A:
            
                VOLSER b:/v
            
                Displays the current version number at prompts
                the user for a volume label, and if one did not
                exist, creates it.
            
            C>VOLSER /V
            
            VOLSER Version X.XX (C)Copyright T A Davis, 1983
                
            Volume in drive B is not labeled
            
            Enter new label (11 chars) or ENTER ? AP783_
                
            Diskette label changed.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0490

     Volume in drive A has no label
     Directory of A:\

    ALTER    COM      1024  12-26-83  12:51a
    ALTER    DOC      4096   6-12-84   1:43p
    ASK      COM       256   7-31-83   4:07p
    ASK      DOC      1507   8-01-83  10:21p
    BLANK    COM       310  12-10-83  10:20p
    BLANK    DOC       987   4-02-86   2:55p
    BROWSE   COM      2848   4-09-84  10:11a
    BROWSE   DOC       466   1-01-80  12:20a
    CLEAN2   COM       640  12-17-83   1:40a
    CLEAN2   DOC      2944  12-17-83   1:42a
    DJCRONIN DOC      1866   4-02-86   7:59a
    GCOPY    DOC      1024   1-01-80  12:25a
    GCOPY    EXE     14336   1-01-80  12:25a
    MOVE     COM      2138   5-03-84   1:17a
    MOVE     DOC       795   8-01-83  10:23p
    NDOSEDIT COM      2560   6-08-84   1:13p
    NDOSEDIT DOC      5632   6-08-84   1:12p
    PC-ZERO  153       689   5-08-84   7:46p
    PC-ZERO  DOC       710   4-02-84  10:43p
    PC-ZERO  EXE     19584   5-08-84   7:47p
    SDIR     COM      3221   2-14-84   9:49a
    SDIR     DOC       896   5-19-83   8:38a
    SYSTAT   COM      1408   1-01-80  12:20a
    SYSTAT   DOC      1050  10-09-82   3:05p
    VDEL     COM       768   1-01-80  12:20a
    VDEL     DOC       824   4-02-86   2:51p
    VOLSER   COM      1152   8-08-83   7:03p
    VOLSER   DOC      1295   8-08-83   7:05p
    WHEREIS  COM       512   1-08-84   4:55a
    WHEREIS  DOC      1024   1-08-84   4:56a
    FILES490 TXT      1328   4-02-86   3:11p
           31 file(s)      77890 bytes
                           76800 bytes free
