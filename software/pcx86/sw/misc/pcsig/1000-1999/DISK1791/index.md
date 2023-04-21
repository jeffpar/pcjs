---
layout: page
title: "PC-SIG Diskette Library (Disk #1791)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1791/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1791"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MATCH-MAKER AND DOORS"

    If you need to find duplicate files on you hard disk then MATCH-MAKER
    is for you. It locates duplicate files across as many drives as you
    specify and, if you wish, MATCH-MAKER will delete them for you. This
    may yield more space on your hard disk.
    
    One unique feature of MATCH-MAKER is the use of match attributes. Files
    can be considered duplicates if they match on one or more of several
    attributes -- file name, file size, file's time, and file's date.
    Select the match attributes before starting the search for duplicate
    files. Once you designate the drive or drives of your choice,
    MATCH-MAKER will perform an exhaustive search of all directories and
    produce a list of duplicate files.
    
    MATCH-MAKER offers four distinct delete options. You can simply view
    (or print) the duplicate file list, selectively delete files from the
    list, delete one of the duplicate files or delete both of the duplicate
    files.
    
    MATCH-MAKER provides a disk storage option to free up RAM in the event
    that the list of duplicate files is too large. It also has a file
    tolerance feature which lets you match two files that differ by a couple
    of bytes in size.
    
    Let MATCH-MAKER do your hard disk housekeeping chores for you.
    
    MDTS is a database program for any church or non-profit
    organization to track members (mailing labels and telephone
    directories) and the pledges and actual donations by those
    members (member tax statements and internal analysis reports).
    It features numerous reports (A thru Z menu with some sub-menus),
    many of which (including mailing labels) permit user-defined
    selection criteria.  Has 99 user-defined donation categories
    (Christmas toy drive, Building Mtce, any name you define)
    and up to ONE BILLION transactions.  Bonus program (in a ZIP
    file) to extract data from any DBF file to an ASCII file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISK.TXT

{% raw %}
```
MM.EXE -- Locates and optionally deletes duplicate files on some or all drives.
MM.DOC -- Instructions for Match-Maker (MM.EXE).
DISK.TXT -- This file!
```
{% endraw %}

## FILE1791.TXT

{% raw %}
```
Disk No: 1791                                                           
Disk Title: Match-Maker and Doors                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Match-Maker                                              
Author Version: 1.04                                                    
Author Registration: Appropriate amount.                                
Special Requirements: None.                                             
                                                                        
MATCH-MAKER - a utility that finds new space on your hard disk drives by
locating and deleting duplicate files.  Locate duplicate files across as
many drives as you specify and, if you wish, MATCH-MAKER will delete    
them for you.                                                           
                                                                        
One unique feature of MATCH-MAKER is the use of match attributes.  Files
can be considered duplicates if they match on one or more of several    
attributes - file name, file size, file's time and file's date.  Select 
the match attributes before starting the search for duplicate files.    
Once you designate the drive or drives of your choice, MATCH-MAKER will 
perform an exhaustive search of all directories and produce a list of   
duplicate files.                                                        
                                                                        
MATCH-MAKER offers four distinct Delete options.  You can simply view   
(or print) the duplicate file list, selectively delete files from the   
list, delete one of the duplicate files or delete both of the duplicate 
files.                                                                  
                                                                        
MATCH-MAKER provides a disk storage option to free up RAM in the event  
that the list of duplicate files is too large.  It also has a file      
tolerance feature which lets you match two files that differ by a couple
of bytes in size.                                                       
                                                                        
Let MATCH-MAKER do your hard disk housekeeping chores for you.          
Program Title: Door                                                     
Author Version: 1.1C                                                    
Author Registration: $45.00                                             
Special Requirements: None.                                             
                                                                        
The DOOR program is designed for the busy Shareware author or dealer who
wants to help users find and read the text files on a disk.  The        
author/dealer may customize this text viewing program to provide up to  
26 menu/info choices.  The program starts with the picture of a "door", 
and a customer touches a key to begin a tour of the disk product.       
                                                                        
The DOOR display program (D-D.EXE) is written in C for speed and small  
size -- meaning more space on the disk for the actual program being     
distributed.  The D-FIX program, which may be used to change the        
DOORDATA file if the author/dealer does not have ready access to a text 
editor, is compiled Basic.                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MM.DOC

{% raw %}
```
                                MATCH-MAKER

                             November 25, 1988


MATCH-MAKER locates and, at the user's option, deletes duplicate files on
any of the user's drives selected.  The user has can choose which file
attributes qualify as a "match"--any combination of identical file names,
extensions, dates, or sizes.

NOTE:     This program is distributed on an as-is basis.  It is designed to
          delete duplicate files, a potentially hazardous task which must be
          approached with care.  While MATCH-MAKER has been tested, bugs may
          exist.  The user accepts responsibility for the possible
          consequences.


                             QUICK START LIST

1.   Run MATCH-MAKER (MM.EXE).  Display of the introductory screens may be
     truncated by hitting the space bar.

2.   Select which parameters will constitute a "match."  The 'F', 'N', 'D'
     and 'T' keys toggle selection of the FILESIZE, FILENAME, FILE'S DATE
     and FILE'S TIME attributes, respectively, as shown in the box toward
     the upper right of the screen.  A "YES" next to the attribute means
     that two files must have the same value for that attribute to qualify
     as a match.  Multiple options can be set to 'YES' to narrow the field
     of duplicates.

3.   Select which drives will be searched for duplicate files.  Press "S"
     followed by the letters of the drive(s) you want to be searched.  If
     you accidentally hit a wrong key, you can erase it from the list of
     drives by hitting the same key again.  Hit the space bar after all the
     desired drives are selected.

4.   Select the options for file operations.  Press "O" until the option you
     wish appears on the line below the [O]ptions selection.  The options
     are:

          LIST duplicates only, no files are erased

          USER is prompted for each pair before deleting

          FIRST file in pair of duplicates will be erased

          SECOND file in pair of duplicates will be erased

     CAUTION:  USING EITHER OF THE LAST TWO OPTIONS WILL AUTOMATICALLY ERASE
     SOME OF YOUR FILES.  SELECT THESE OPTIONS ONLY AFTER FULLY CONSIDERING
     THE CONSEQUENCES.

5.   Press "E" to execute the search.

6.   To interrupt the program as it searches for matches, press Control-
     Break.


                   MORE DETAILED DESCRIPTION OF COMMANDS

The following keys work in MATCH-MAKER: 

"E": Executes a search after you have selected the match parameters and the
     drive(s) to be searched, which must include at least one drive, floppy
     or hard.  Also notice that at least one of the match parameters MUST be
     set to "YES".

"Q": Quits the program without a search.  If the program is already
     searching, use the CONTROL-BREAK key combination to return to DOS.

"O": Options for erasing duplicate files are accessed by pressing "O"
     repeatedly.  The options are, in order of their appearance:

     1.   LIST duplicates only; no files are erased:

               After the search is complete, you can save a list of the
               duplicates to disk.  No files are erased.

     2.   USER is prompted for each pair before deleting:

               After searching, MATCH-MAKER will show each pair of duplicate
               files on the screen, including file names, extensions, sizes,
               dates and times.  You then have the choice of erasing (1) the
               first one, (2) the second one, (N) neither of them, or (B)
               both of them.  CAUTION:  DOS file attributes are ignored, so
               even READ ONLY files will be erased, including DOS system
               files.

     3.   FIRST file in pair of duplicates will be erased:

          1.   What is the "FIRST" File?

               After searching the drives, MATCH-MAKER will then cycle
               through each pair of matches and erase the first of the two. 
               If the files are on different drives, it will delete the file
               on the first of the 2 drives, alphabetically.  If the files
               are in different subdirectories on the same drive, the first
               file will be the one of the pair that is CLOSEST to the root
               directory.  For example--

                    C:\WORK\BOGUS.DOC would come before
                    C:\WORK\WORKFILS\BOGUS.DOC

               because the first file is one subdirectory level closer to
               the root than the second file.

               If the matching files are within the same subdirectory level
               (i.e., both in the third level down from the root), then this
               option will erase the file in the subdirectory that DOS first
               finds on the drive.  To see the order your subdirectories
               appear to DOS, use the DOS dir command.  This order can be
               changed with programs such as Norton Utilities.

          2.   What Happens if More than 2 Matching Files are Found?

               You may have more than 2 files on your drives which match the
               selected parameters.  In that case, MATCH-MAKER will
               determine that the first matching file matches the second one
               and that the first matching file matches the third one.  It
               will not determine that the second matching file found
               matches the third one.  In other words, if files A, B and C
               "match" according to the program, then the output will read
               "A matches B" and "A matches C", but "B matches C" will be
               ignored.  If you choose to automatically erase the FIRST
               file, then the A-B match will cause A to be erased.  MATCH-
               MAKER will attempt to again erase A when processing the A-C
               match, but there will be no A file on the drive to erase. 
               After the program runs, files B and C will remain as
               duplicates.  To avoid this result, you can use the option
               which erases the SECOND file found, as explained below.

     4.   SECOND file in pair of duplicates will be erased:

          1.   What is the "SECOND" File?

               This works much like the erase FIRST file option, except the
               SECOND file in the duplicate pair is erased.  If the files
               are on different drives, it will delete the file on the
               second of the 2 drives, alphabetically.  If the files are in
               different subdirectories on the same drive, the second file
               will be the one of the pair that is FURTHEST to the root
               directory.  For example--

                    C:\WORK\WORKFILS\BOGUS.DOC
                    would come after
                    C:\WORK\BOGUS.DOC

               because the first file is one subdirectory level further to
               the root than the second file.

               If the matching files are within the same subdirectory level
               (i.e., both in the third level down from the root), then this
               option will erase the file in the subdirectory that DOS finds
               second on the drive.  To see the order your subdirectories
               appear to DOS, use the DOS dir command.  This order can be
               changed with programs such as Norton Utilities.

          2.   What Happens if More than 2 Matching Files are Found?

               If MATCH-MAKER finds 3 files that all match (A, B, and C), it
               will first B and C, leaving only A.

"S": Selects which drive(s) you wish to have scanned for duplicates.  A box
     will appear telling you to select the letters representing the drives
     you want.  If you accidentally include a drive, press its letter again
     to remove it from the search list.  After you have selected all the
     drives you wish to have scanned, press the space bar.

"C": Commands are listed on the screen, with brief explanations.

"F": FILE SIZE toggles the filesize match parameter on and off, with "YES"
     meaning two files must be the same size to qualify as a match and "NO"
     meaning the sizes of the files are not considered in determining a
     match.  (See also the TOLERANCE command-line function below)

"N": FILE NAME toggles the file name match parameter on and off, with "YES"
     meaning two files must have the same name to qualify as a match and
     "NO" meaning the names of the files are not considered in determining a
     match.

"D": FILE DATE toggles the file date match parameter on and off, with "YES"
     meaning two files must have been last modified the same day to qualify
     as a match and "NO" meaning the dates of the files are not considered
     in determining a match.  Do you know how many files on your hard disk
     are dated 1-1-80?  Perhaps hundreds, particularly if your computer has
     no clock.  If you select this option, be sure to set another match
     parameter to "YES" as well.

"T": FILE TIME toggles the file time match parameter on and off, with "YES"
     meaning two files must have been last modified at the same time to
     qualify as a match and "NO" meaning the times of the files are not
     considered in determining a match.  If your computer has no operating
     clock, you may find that many files are stamped with a "time" shortly
     after midnight.  Thus, as with the date parameter, you should use this
     only if you also set another match parameter to "YES."


                          COMMAND-LINE FUNCTIONS

DISK STORAGE -- MM /D (" /D" after the program name):

     If you have a limited amount of RAM or a lot of files, MATCH-MAKER will
     run out of memory.  The upper right corner of the main screen displays
     the available "Free Memory."  As files and directories are read into
     memory in preparation for scanning, this number will decrease.  A
     normal 640K machine should leave over 500K free, which is enough for
     (on average, depending on how deep the paths go and how long file and
     directory names are) to scan about 12,000 files in several hundred
     directories, if you don't have too many duplicates.  If you have LOTS
     of duplicates, however, you could exceed the memory limit.

     For this purpose the disk storage feature is available to store the
     list of duplicate files on disk, freeing RAM.  If you use MATCH-MAKER
     on a huge system with the /D option and still don't have enough RAM,
     just run MATCH-MAKER several times on different combinations of drives.

     MATCH-MAKER places the list of duplicate files in a temporary file on
     one of your drives.  MATCH-MAKER checks the amount of free space on
     each of the drives selected for scanning and places the file on the
     drive that has the most free space.  A list of 500 duplicates requires
     about 100K of disk space.  The file is erased before MATCH-MAKER
     returns to DOS.


FILE SIZE TOLERANCE -- MM /T=x (x is a number of bytes):

     If you have backup files (from a word processor, for example) that
     might be saved under a different name than the original and are a
     couple of bytes different in size, the "TOLERANCE" feature might come
     in handy.  At runtime, just append a " /T=x" onto the command line,
     where "x" is the number of bytes, perhaps 10.  The words "TOLERANCE: x"
     will appear on the main screen.  If you then define FILE SIZE as a
     match parameter, MATCH-MAKER will treat as a "match" those files within
     "x" bytes of each other's size.  Note:  Even if "TOLERANCE: x" is
     visible on the main screen, you still MUST select the FILE SIZE option
     for it to have any effect.

Of course the two command-line features may be combined (see next line): 
C:\>MM /D /T=10   <-- This is okay 


                            EXITING THE PROGRAM

Before starting a search, you can exit by pressing "Q"  for quit.  While
MATCH-MAKER is looking for files and comparing them, you must press
CONTROL-BREAK instead.  The program won't exit until the next time it
displays some text, which might be a few seconds, but it will exit
gracefully without the need to reboot.  CONTROL-BREAK should work any time
to exit the program.


                              POTENTIAL BUGS

While I have tested this program, the possibility of bugs exists.  The most
likely problem would be an uninitialized pointer assignment, which would
essentially write data to a random (probably incorrect) memory location. 
The results of this would be unpredictable, but the computer could possibly
freeze up or experience an array of text and processing glitches.  Bizarre
events that seem to occur at random are probably pointer errors.  I would
appreciate hearing from you about any bugs you may encounter.  Try calling
(503) 281-8118.


                   $$$ SHAMELESS GROVELING (almost) $$$

The initial screen solicits contributions.  If you use this program and find
it valuable, please recognize the effort in its creation and send bucks to

               CHRIS WILLIAMS
               1744 N.E. CLACKAMAS STREET
               PORTLAND, OR  97232

I will respond to any interesting comments or suggestions.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1791

     Volume in drive A has no label
     Directory of A:\

    MM       EXE     30448  11-27-88  10:44p
    MM       DOC     13507  11-27-88  10:32p
    DISK     TXT       156  11-29-88  12:31a
    D-D      EXE     17832   1-23-89   7:30p
    D-FIX    EXE     47556  12-07-88   1:36p
    DOOR     BAT       448  11-23-88   7:23p
    DOORDATA          6828   3-14-89   7:48a
    READ-ME  DOR      6149   3-14-89   8:09a
    FILE1791 TXT      4071   1-03-90   6:16p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   1-01-80   2:16a
           11 file(s)     127881 bytes
                           29696 bytes free
