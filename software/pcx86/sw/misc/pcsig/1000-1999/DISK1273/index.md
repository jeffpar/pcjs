---
layout: page
title: "PC-SIG Diskette Library (Disk #1273)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1273/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1273"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VDE -- VISUAL DISPLAY EDITOR"

    BLACKJACK! is a tour de force in beating the casino dealer that might
    help you line your pockets with green.  Long overdue, it teaches you a
    basic blackjack strategy, adds an effective card counting system to it,
    and drills you on both the strategy and your counting ability.  You play
    against world famous casinos or customize the rules the dealer follows.
    It's fun, quickly played, and could fatten your wallet on your next trip
    to Nevada, New Jersey, or Monte Carlo.
    
    BLACKJACK! is a joy because you can alter the number of decks in the
    shoe and practice your count in the most difficult of circumstances.
    The rules on doubling down automatically change as you switch from
    single to multiple decks.  You can play head on or add up to three
    players to your table.  You watch your bank rise and sink with your luck
    and you can get instant advice on how to alter your betting strategy.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARCOPY.DOC

{% raw %}
```

                                  ARCOPY.DOC
                                  ----------
                         Instructions for ARCOPY.COM
                            Version 1.4 (12/4/89)

                             (c)1988-89 E. Meyer


     ARCOPY (ARchive COPY) is a small, fast disk file copy utility for all 
MSDOS (2.x and above) systems.  Its features are geared toward the tasks of 
backing up (archiving) files, and maintaining multiple copies of files; but it 
can also make ordinary file copying, moving, and renaming easier.
     ARCOPY is geared toward command line aficionados who want to be able to 
do as much as possible at one DOS prompt.  It can copy different groups of 
files at once; backup files by time stamp or archive flag; select files to 
copy by existence on destination directory, or user prompt; move files easily 
from one directory to another; do sophisticated renaming; and more.


                                 USING ARCOPY
                                 ------------

SYNTAX:   A>ARCOPY {source{,source2,...} {dest} {/options}}      "{}"=optional

         Like DOS COPY, ARCOPY expects two arguments: a source and a 
      destination filespec.  However, the source may be a list of files
      as well, delimited with commas or semicolons.
         Either filespec may be ambiguous; destination name defaults 
      to same as source.  Subdirectories are supported.  If not 
      specified, drive and directory default to the current values.  
      Common device names (CON,PRN...) are also accepted.

     If NO arguments are given, ARCOPY loads into memory and gives a prompt 
"-".  You can then enter one pair of arguments after another, and can remove 
the disk containing ARCOPY if needed.  To exit, just press RETURN or ^C.

     If the source is a list, a comma separator means that the previous item's 
drive/directory is assumed (unless the current item begins with a drive or 
root directory); a semicolon means not.  Thus the second item in the list 
"\WORK\FILE1,FILE2" is taken to be "\WORK\FILE2", while in "\WORK\FILE1;FILE2" 
it is merely in the default directory, and in "\WORK\FILE1,\FILE2" it is in 
the root directory.

     For ambiguous (group) copying, ARCOPY alphabetically lists each file 
being processed; you may abort at any time by typing ^C.  If the destination 
names are different, both names are shown: OLDFILE.NAM -> NEWFILE.NAM.


                                   OPTIONS

         "Options" must be preceded by one slash "/"; separating 
      spaces, and further slashes, are optional.  Several (A,M,P) 
      are identical to DOS XCOPY utility options; several (R,W,Z) 
      correspond to options of CP/M PIP.  (Anyone remember that?)

/? -  display help message

/A -  only files with the ARCHIVE attribute will be copied.  (See "Incremental 
    Backup" below for further explanation.)
/B -  only files with time stamp BEFORE specified date/time (MMDDYY:HHMM) will 
    be copied.  (If not specified, defaults are today, 0000 hours.)
/E -  only those files that already EXIST on the destination directory will be 
    copied.  (Note that the destination filename is the one tested here.)
/L -  only files with time stamp LATER than specified date/time (MMDDYY:HHMM) 
    will be copied.  (If not specified, defaults are today, 0000 hours.)
/M - only files with the Archive attribute are copied, and then MARKED by 
    having their Archive attribute removed.  (See "Incremental Backup" below.)
/N -  only those files that are NEW (do NOT already exist on the destination 
    directory) will be copied.
/P -  you will be PROMPTED "y/n?" for each file about to be processed.  Press 
    "Y" to copy the file, or "N" to skip it.
/R -  Hidden and System files, normally ignored, will be READ and copied along 
    with normal files.
/T -  whenever a file already exists on the destination directory, it will 
    only be overwritten if the source copy has a more recent TIMESTAMP.
/W -  copying may WRITE over or delete Read/Only files.  (Normally, any 
    attempt to do this will cause a DOS R/O error.)
/X -  files will be TRANSFERRED: if on the same drive, by renaming; if on 
    different drives, by deleting the original after copying.
/Z -  the high (parity) bit will be ZEROED on all output data, which converts 
    nonstandard data (like WordStar text) into standard ASCII form.


                              INCREMENTAL BACKUP

     It's important to maintain backup copies of important data, but this can 
be a tedious task.  Fortunately you don't need to remember exactly which files 
have been modified recently; there are two automatic ways to update disks by 
selecting and copying just those files that need it ("incremental backup").

(1) THE ARCHIVE ATTRIBUTE
     MSDOS maintains a file attribute called Archive.  Whenever a disk file is 
modified, this attribute is set.  Consequently, if this attribute was cleared 
in the past (the last time you did a backup), the files which now have it set 
are those you have created or changed since, and need to back up now.
     ARCOPY can copy just those modified files, and (if you want) clear their 
attribute again to indicate they have been archived.  So all you have to type 
each time you want to back up the contents of a directory is:
                             ARCOPY *.* B: /M
In conjunction with this, when you are first setting up your disks, you may 
find a use for a utility that can manually set or clear the Archive attribute 
on groups of files, such as my DTA.COM.
     (DOS 3.x users should look up the ATTRIB and XCOPY utilities in their 
manual for an alternative approach to the task.)

(2) THE TIMESTAMP
     If your computer has a clock, the MSDOS file timestamp can also be used 
to determine whether one copy of a file has been modified more recently than 
another.  Thus, you can also back up files by typing:
                             ARCOPY *.* B: /T
Any file that already exists on the destination directory will be replaced 
only if the source copy is more recent.
     This method is the simplest; I now use it all the time.
     (DOS 3.x XCOPY has an option to copy files changed since a given date, 
but this comparison is more reliable for backup purposes.)


                            COPYING BY TIME STAMPS

     With the /B and /L options, you can choose to copy only files dated 
before or after a given date or time.  (You can even use both together, to 
copy files dated between two date/times.)
     In either case, the date/time should follow the option letter.  Dates 
must be given as six digits in the form MMDDYY; the date "000000" may be used 
for a blank time stamp, otherwise YY must be 80 or above.  You may also type a 
colon, followed by a four-digit (24-hour) time in the form HHMM.  Given a date 
with no time, the time defaults to 0000 hrs; given a time with no date (note 
the leading colon is necessary), the date defaults to today.  If time/date are 
omitted altogether, the default is today, 0000 hrs.


                             MOVING AND RENAMING

     The /X option has powerful moving and renaming features, depending on the 
circumstances of its use.  If copying onto another drive, files are copied and 
then deleted.  If copying into another directory on the same drive, files are 
efficiently moved into the new directory.  If copying into the same directory, 
files are simply renamed!

                                MASS RENAMING

     Copying multiple files to different names can get confusing.  If the 
wildcards match exactly (as in *.DOC to *.BAK) it's straightforward enough.  
But (unlike COPY or XCOPY) ARCOPY also lets you do more complex renaming, 
which may or may not work depending on the specific filenames encountered.  
Suppose you have three files on drive A:  GORT.TXT, KLAATU.DOC, NIKTO.  You 
want to create some extra backups on drive B.  You might type:
                             A>ARCOPY *.* B:*.BAK
Despite the fact that other utilities would refuse this request, it's 
perfectly clear what you want, and ARCOPY will do it:
   A:GORT.TXT, KLAATU.DOC, NIKTO  --->  B:GORT.BAK, KLAATU.BAK, NIKTO.BAK

     But suppose there had been a fourth file A:GORT.NOT.  Because both it and 
GORT.TXT would get copied to the same destination B:GORT.BAK, which is likely 
to be a bad idea, in this case ARCOPY would refuse the (same!) copy request.  
Rather than give up at first, ARCOPY looks ahead at what the actual results of 
copying would be: only if two filenames would be identical, or an illegal 
filename result, does ARCOPY quit with an error message.


                                ABOUT DEVICES

     MSDOS provides a number of "device names" which may be used in place of a 
filename, as either source or destination.  ARCOPY fully supports these: AUX, 
COM1-2, CON, LPT1-2, LST, NUL, PRN.  The most useful are:
              CON - the console (keyboard input, screen output)
              PRN - printer output
Console input is terminated with ^Z, RETURN.
     Ambiguous filenames and options /A,D,E,M,N,P,T are not allowed.


                                USAGE EXAMPLES

A>arcopy b:\wrk\*.doc;apr\*.not c:
      All files B:\WRK\*.DOC and A:APR\*.NOT will be copied to drive C:.
A>arcopy b:\wrk\*.doc,apr\*.not c:
      All files B:\WRK\*.DOC and B:\WRK\APR\*.NOT will be copied to drive C:.

A>arcopy \ws\*.doc *.txt /z/p
      Each file of type ".DOC" on directory A:\WS will be copied to the 
    current directory, with the same name but type ".TXT" instead of ".DOC".  
    In the process, the high bit will be zeroed out to convert to standard 
    ASCII.  You will be prompted to confirm each item to copy individually.

A>arcopy b:gort /x/w
      B:GORT will be copied to drive A:, and the original deleted, even if R/O.

A>arcopy *.mac \prog /x
      Every file *.MAC will get moved to directory \PROG.

A>arcopy *.mac f*.mac /x
      Every file *.MAC will have the first letter of its name changed to F.

A>arcopy *.* c: /l010189/b:1200
      Every file on A: with a date since 1/1/89, but before noon today, will 
    be copied to drive C:.

A>arcopy c:*.* b: /a
      All files on C: which have been modified will be copied to drive B:, but 
    they remain marked as unArchived (probably for further use with /M).

A>arcopy c:*.* b: /m/e
      All files on C: which have been modified, and of which copies already 
    exist on drive B:, will be copied to B: and marked as Archived.  (Thus 
    you can backup a single directory onto more than one floppy disk.)
A>arcopy c:*.* b: /t/e
      This does much the same thing, except it selects files that need to be 
    backed up by their more recent timestamps instead.

A>arcopy b:*.exe /n
      All files B:*.EXE which do not already exist on drive A: will be copied 
    there from drive B:.

A>arcopy *.sys b: /r
      All files A:*.SYS, including System and/or Hidden files, will be copied 
    to drive B:.

A>arcopy my.doc con /z
      The file MY.DOC will be typed on screen, with the high bit zeroed out.  
    An easy way to view WordStar text without funny graphics.


                                ERROR MESSAGES

  <Bad argument>  Missing or invalid argument; think (read?) and try again
     <No memory>  You don't have enough free memory; or, too many files
                     (You might try a more restrictive source filename)
     <Overwrite>  A destination filename would have been the same as a source
      <Conflict>  Two source files would have copied to the same destination
       <Illegal>  A file with an illegal name would have been constructed
    <Read error>  DOS error opening or reading source file
   <Write error>  DOS error on output: full disk, read/only file, etc.


                                   HISTORY

     ARCOPY 1.0 (3/88) was the first MSDOS release, an 8086 adaptation of the 
previous CP/M program ARCOPY 2.1.
    v1.01 (4/88) - Fixed bug in parsing of options with no second filename.
     1.02 (5/88) - Preserves original file time/date.
     1.1  (7/88) - New options /T, /?.  Improved parsing.
     1.2  (4/89) - Comma-delimited source lists; small fixes.
     1.3 (10/89) - More efficient copies, moves; /X replaces /D; small fixes.
     1.4 (12/89) - New options /B, /L.  Semicolon/comma file delimiters.

     ARCOPY and its documentation are (c)1988-89 E.Meyer, all rights reserved.  
They may be freely distributed, but not modified or sold for profit without my 
written consent.  The user takes full responsibility for any damages resulting 
from the use of this program.

                 Eric Meyer
           401 12th Avenue SE, #139            CompuServe [74415,1305]
            Norman, OK  73071  USA

```
{% endraw %}

## DIRCMP.DOC

{% raw %}
```

                                  DIRCMP.DOC
                                  ----------
                         Instructions for DIRCMP.COM
                            Version 1.2 (2/20/90)

                            (c)1989-90 Eric Meyer


     DIRCMP (DIRectory CoMPare) is a small, fast directory utility for all 
MSDOS (2.x and above) systems.  For various reasons -- including backing up 
files -- one often needs to reconcile two directories: to detect differing 
versions of a file, or to see which files are in one directory but not the 
other.  You could always run two DIR commands, read the lists, and try to 
match them up... but DIRCMP makes it much easier.


SYNTAX:        C>dircmp dir1 {dir2} {/o}         "{}"=optional

           Two arguments are expected: each may consist of an MSDOS 
      directory name and/or an ambiguous filename.  If the second is 
      omitted, it is assumed to be the current directory, *.*.

      In addition, you can specify the option:
              /P = pause display every 25 lines
      You can also choose one of these options to restrict the display:
              /E = files EXISTING in both directories only
              /N = files NOT existing in both directories only
              /M = files MODIFIED only
      Otherwise, by default, the complete set of listings will be produced.


EXAMPLES:     C>dircmp a:
              C>dircmp a:\work /mp
              C>dircmp \prg\*.asm a: /n


     DIRCMP will normally give three alphabetical file listings:
              1. files common to both directories;
              2. files present in the first but not the second;
              3. files present in the second but not the first.
In each case the number of files, and their total size (to the nearest K), is 
also reported.
     Note: nonidentical versions of files (same name, different timestamps) 
will appear in the lists of DIFFERING files.  The newer version will be 
flagged with a "+" sign before the filename, the older version with a "-".

     You can also select a more restricted display: the /E option gives only 
the first listing (common files).  The /N option gives only the second and 
third (differing files).  The /M option gives a single listing, of modified 
versions of files with the same name only.


                                ERROR MESSAGES

  <Bad argument>  Missing or invalid argument; think (read?) and try again.
     <No memory>  You don't have enough free memory (about 45k required).
      <Too many>  Too many files to compare (maximum is 1024 in each dir);
                 try a more restrictive filespec, e.g. *.DOC instead of *.*.


                                   HISTORY

     DIRCMP 1.0 (4/89) - first release of this program.
            1.1 (5/89) - added Modified file options, pagination.
            1.2 (2/90) - 2nd argument defaults to current dir, *.*;
                        file maximum increased to 1024.

     DIRCMP and its documentation are (c)1989-90 Eric Meyer, all rights 
reserved.  They may be freely distributed, but not modified or sold for profit 
without my written consent.  The user takes full responsibility for any 
damages resulting from the use of this program.  Please report any problems 
encountered.

                 Eric Meyer
            401 12th Ave SE, #139            CompuServe [74415,1305]
            Norman, OK  73071  USA

```
{% endraw %}

## DLT.DOC

{% raw %}
```

                                   DLT.DOC
                                   -------
                           Instructions for DLT.COM
                            Version 1.0 (3/20/90)

                               (c)1990 E. Meyer


     DLT is an enhanced file deletion utility for all MSDOS (2.x and above) 
systems.  It is geared toward command line aficionados who want to be able to 
do as much as possible at one DOS prompt.  Unlike the MSDOS "DEL" command, it 
can delete lists or groups of files (in different directories) with a single 
command, displaying the number deleted.  In addition, options allow: display 
and user confirmation before deletion; delete all except specified files; 
selection of files by time/date; inclusion of hidden, system, or read/only 
files.


                                  USING DLT
                                  ---------

SYNTAX:   A>DLT filespec {,filespec2,...} {/options}      "{}"=optional

         The target may be either a single (ambiguous) filespec, or 
         a list of them delimited with spaces, commas or semicolons.  
         Subdirectories are supported.  If not specified, drive and 
         directory default to the current values.

     You can get a help message by typing "DLT" alone.

     If the target is a list, a space or comma separator means that the 
previous item's drive/directory is assumed (unless the current item begins 
with a drive or root directory); a semicolon means not.  Thus the second item 
in the list "\WORK\FILE1,FILE2" is taken to be "\WORK\FILE2", while in 
"\WORK\FILE1;FILE2" FILE2 is merely in the default directory, and in 
"\WORK\FILE1,\FILE2" it is in the root directory.


                                   OPTIONS

            "Options" must be preceded by one slash "/"; separating 
         spaces, and further slashes, are optional.

              CAUTION!  Use care when deleting groups of files; 
         recovering accidentally deleted files requires special 
         utilities, and can be difficult.
              While you are learning to use DLT and its various 
         options, always use the "/P" option: you will be shown the 
         selected files, and can choose NOT to delete them!
              In the future, any time you are the least bit 
         uncertain as to your selection of files (especially with 
         the "/X,E,L" options), use "/P"!

/P -  PROMPT to confirm.  You will be shown the files and asked "Delete? (y/n)"

/H -  HIDDEN and System files (otherwise not found) will be included as well.
/R -  READ/ONLY files may be deleted as well (otherwise an error results).

/E -  Only files EARLIER than specified date/time (MMDDYY:HHMM) are deleted.
/L -  Only files LATER than specified date/time are deleted.

/X -  All files EXCEPT those specified will be deleted.  (Be careful!)

     The /X option cannot be used with a list of files in more than one 
directory.  Also, /X cannot be used together with /E or /L.

     With the /E and /L options, you can choose to delete only files dated 
before or after a given date or time.  (You can even use both together, to 
delete files dated between two date/times.)
     With /E or /L, the date/time should follow the option letter.  Dates must 
be given as six digits in the form MMDDYY; the date "000000" may be used for a 
blank time stamp, otherwise YY must be 80 or above.  You may also type a 
colon, followed by a four-digit (24-hour) time in the form HHMM.  Given a date 
with no time, the time defaults to 0000 hrs; given a time with no date (note 
the leading colon is necessary), the date defaults to today.  If time/date are 
omitted altogether, the default is today, 0000 hrs.  Examples:
              /l                  since today 0:00   
              /e:1300             before today 13:00
              /l020190:1300       since 2/1/90 13:00
              /l120189 /e010190   since 12/1/89 0:00, and before 1/1/90 0:00


                                USAGE EXAMPLES

A>dlt *.bak read.me todo

A>dlt *.*
      (Doesn't give the annoying confirmation prompt that DOS does.)

A>dlt b:\wrk\*.doc;apr\*.not
      Deletes all files B:\WRK\*.DOC and A:APR\*.NOT.

A>dlt b:\wrk\*.doc,apr\*.not
      Deletes all files B:\WRK\*.DOC and B:\WRK\APR\*.NOT.

A>dlt *.doc *.not /x
      Deletes all files other than *.DOC and *.NOT.

A>dlt \*.sys /p/rh
      All files *.SYS in the root directory (including hidden files like 
    MSDOS.SYS) will be deleted, after you are prompted to confirm this.

A>dlt *.bak /e010189
      Every file *.BAK dated earlier than 1/1/89 is deleted.

A>dlt *.* /l/e:1200
      Every file dated today before noon is deleted.


                                ERROR MESSAGES

  <Bad argument>  Missing or invalid argument; think (read?) and try again
     <No memory>  You don't have enough free memory; or, too many files
                     (You might try a more restrictive filespec)
     <R/O Error>  DOS error deleting file (is it read/only?)
       <Aborted>  You pressed ^C



     DLT and its documentation are (c)1990 E.Meyer, all rights reserved.  
They may be freely distributed, but not modified or sold for profit without my 
written consent.  The user takes full responsibility for any damages resulting 
from the use of this program.

                 Eric Meyer
           401 12th Avenue SE, #139            CompuServe [74415,1305]
            Norman, OK  73071  USA

```
{% endraw %}

## DTA.DOC

{% raw %}
```

                                   DTA.DOC
                                   -------
                           Instructions for DTA.COM
                              Version 1.3 (9/89)

                             (c)1987-89 E. Meyer


     DTA.COM is a super directory utility that will run on any PC/MSDOS system 
(version 2 or higher).  "DTA" stands for Directory-Tree-Attributes; it is a 
replacement for the DIR, TREE, and ATTRIB commands of DOS, as well as a 
WHEREIS utility.  DTA is written entirely in 8086 assembler, and has many 
advantages including:

    *  alphabetized directory with file sizes and free space
    *  default compact display; optionally include attributes and time/date
    *  select items by file attributes or time/date
    *  change any file attributes or time/date
    *  treat directories separately or together with files
    *  alphabetized compact subdirectory tree; optionally include sizes
    *  search entire directory tree for files


                                  USING DTA
                                  ---------

SYNTAX:    A>dta {filespec} {/options}           ("{}"=optional)

        where  "filespec" may include a drive, path, or wildcards;
               "/" is the delimiter for option letters.

     If the drive or path is omitted, the defaults are the active ones.  If 
the filespec is omitted it defaults to "*.*".  If it is a directory name, the 
contents of the directory are displayed.
     Options are discussed in detail below.  If none are specified, you will 
get a compact, informative directory display.

     You can pause or abort during operation of DTA by typing ^S or ^C.  
Output can be directed to a file or other device in the standard fashion:
                A>DTA FILESPEC /OPTIONS >DEVICE.


                                 DTA OPTIONS
                                 -----------

     By default, DTA will display a list of all files specified, along with 
their sizes, and some disk space information.  You can modify this consid- 
erably with a variety of options.  One "/" must precede any options; further 
slashes may be used or not as desired.

     /? = help.  Gives a brief summary of DTA usage and options.

There are options to scan the directory tree, instead of the current dir:
     /T = tree: show it, starting at specified or current directory.
     /G = global: search for specified files throughout the tree.

Then there are options affecting the appearance of the display:
     /F = full: for files, show attributes and time/date also.
                  (automatically selected for single file display)
                for directory tree, show total size of contents.
     /V = version: include the DTA version message.
     /W = wide: just like DIR /W, five columns with no file sizes.
     /N = narrow: use only half the usual number of columns.
     /P = paginate: pause every 24 lines for a keystroke.

Then there are options to select what items are chosen for display:
     /D = directories: look at directories instead of files.
     /U = universal: look at both directories and files.
     /E = earlier: select files earlier than specified time: MMDDYY:HHMM.
     /L = later: files later than (or equal to) specified time: MMDDYY:HHMM.
     /A,H,R,S = select only items with the specified attributes:
                 Archive; Hidden; Read/only; System.
     /a,h,r,s = select only items WITHOUT these attributes.

Finally, you can specify:
     /@ = set time stamp on items, in format: MMDDYY:HHMM.
     /C = change items to have the following specified attributes.

     Be careful with these options, because they actually CHANGE the DOS time 
stamp and attributes for files!  Time stamps, in particular, provide valuable 
information about the age and revision of a file, and should not be changed 
unwisely.

     Dates must be given as six digits in the form MMDDYY; the date "000000" 
may be used for a blank time stamp, otherwise YY must be 80 or above.  You may 
also type a colon, followed by a four-digit (24-hour) time in the form HHMM.  
Given a date with no time, the time defaults to 0000 hrs; given a time with no 
date (note the leading colon is necessary), the date defaults to today.  If 
time/date are omitted altogether, /E and /L default to today, 0000 hrs; /@ 
defaults to today, now.

     Note that the file attributes are case sensitive (uppercase=set, 
lower=clear).  Those listed alone, or before the "C" option letter, are used 
for file selection; those after it, represent changes to be made.  The /C 
option can also be used alone, with NO following attributes, simply to cause 
attributes to display instead of file sizes (no attributes will be changed).

     The best way to make DTA usage clear will be by a series of examples.


                           EXAMPLES: DIRECTORY TREE
C>dta \ /tp
  Show the directory tree starting from C:\, pausing after each screenful.
C>dta *.bak /g
  Find all directories on drive C: containing files *.BAK.

                       EXAMPLES: FILES and DIRECTORIES
C>dta a:\*.sys
  Show all files *.SYS in the root directory on A:.  (System, etc included.)
C>dta a:\*.sys /f
  Same thing, but with "full" display including attributes and time/date.
C>dta /d
  Show all subdirectories in the current directory.
C>dta \work /u
  Show all files AND subdirectories in C:\WORK.

                             EXAMPLES: TIMESTAMPS
C>dta \work /l
  Show only files in directory C:\WORK created or modified since... today.
C>dta /e090189
  Show only files in current directory dated earlier than 9/1/89.
C>dta *.doc /l/e:1700
  Show only files *.DOC dated today earlier than 5:00pm.
C>dta log /@090189:1320
  Modify the file LOG to have the time/date 9/1/89, 1:20pm.

                             EXAMPLES: ATTRIBUTES
C>dta /c
  Show all files in current directory with their attributes.
C>dta /A
  Show all files in current directory marked with the Archive attribute.
C>dta a: /SH
  Show all files in current directory on A: which are System and Hidden.
C>dta a:*.sys /Hca
  Select all Hidden files *.SYS on A: and clear their Archive attribute.

                                     QUIZ

     All right, can you decide what the following commands would accomplish:
              A>dta /vfn >prn           B>dta a: /u /c /p
              A>dta *.syz /smAca        C\SUE\WORK>dta \ /f/d/H
              C\SUE\WORK>dta .. /tf     B>dta /e/@
(Sorry if this seems cryptic at first; you'll catch on.  Nobody will force you 
to use all these fool options; many exist only to allow you to get hard copy 
exactly the way you want it.  Again, you can always type "DTA /?" for help.)


                           INTERPRETING THE DISPLAY
                           ------------------------

     File SIZES are displayed to the nearest kilobyte (or "k"; 1k is 1024 
bytes).  The "used/free" space shown by DTA is for the entire drive.  The 
"items use" amount is only for the specific files listed.  Because allocation 
clusters on a disk can vary from 128 bytes (on a RAMdisk) to 4k or more (on a 
hard disk), the space actually "used" can be several K more or a fraction of a 
K less than a file's actual size.

     File ATTRIBUTES, when displayed, show as a letter ("A,H,R,S") if set, or 
as "." if clear.  The Archive attribute indicates to a backup utility that a 
file has been changed recently, and needs to be backed up; the bit is cleared 
by the utility when it does so.  (Simple backup utilities that work well with 
DTA include the DOS XCOPY command, and my own ARCOPY.COM.)
     The Read/only attribute prevents a file from being changed or deleted, 
though it can be read and copied.  The Hidden and System attributes both 
exclude a file from normal searches: such files cannot be accessed at all by 
ordinary MSDOS file commands.  Ordinarily only the DOS boot files MSDOS.SYS 
and IO.SYS have these attributes.  (If you do NOT want to see hidden or system 
files, use "/sh".)

     DTA can display up to 1000 files, 64 MB total size.  If any file exceeds 
999k, its size won't display properly, but other statistics will be correct.


                            COMMON ERROR MESSAGES

     "0 items" - No such file (or directory) was found.  (If you expected 
there to be some, check your arguments again...)

     "<invalid argument>" - You guessed it.  Invalid option, bad path, illegal 
character in filename, that sort of thing.  Think and try again.  (Note some 
arguments conflict: you can't specify /ud, or /Aa.)


                                   HISTORY

     DA version 1.0 (9/87) was loosely based on my earlier program DA.COM for 
CP/M systems, a directory utility that could also display & change attributes.
     DA 1.1 (7/88) - better argument parsing; attributes can now be both 
selected on and changed, eg: "/HcS"; several new options.
     DTA 1.2 (10/88) - added "/T" option: a TREE that fits on the screen!
     DTA 1.3 (9/89) - added "/G" search, "/E,L,@" options to select or set 
time/date.  (Note /L replaces the previous "/M" option for "modified today".)

     DTA and its documentation are (c)1987-89 Eric Meyer, all rights reserved.  
They may be freely distributed, but not modified or sold for profit without my 
written consent.  The user takes full responsibility for any damages resulting 
from the use (or misuse) of this program.  Please report any problems 
encountered.

                 Eric Meyer
            401 12th Ave SE, #139            CompuServe [74415,1305]
              Norman, OK  73071

```
{% endraw %}

## FILE1273.TXT

{% raw %}
```
Disk No: 1273                                                           
Disk Title: Visual Display Editor (VDE)                                 
PC-SIG Version: 1.1                                                     
                                                                        
Program Title: Visual Display Editor (VDE)                              
Author Version: 1.52                                                    
Author Registration: None.                                              
Special Requirements: Printer.                                          
                                                                        
VDE is a small (30K), fast and powerful text editor.  It can work with  
as little as 128K RAM. This makes it ideal for laptop computers with    
limited space.                                                          
                                                                        
This tough little text editor offers:                                   
                                                                        
~ Dual file editing                                                     
                                                                        
~ Wordwrap and reformat                                                 
                                                                        
~ Append to existing file                                               
                                                                        
~ Margins, tabs and spacing control                                     
                                                                        
~ Pure ASCII mode                                                       
                                                                        
~ Block operations                                                      
                                                                        
~ Find and replace                                                      
                                                                        
~ Undelete functions                                                    
                                                                        
~ Macro programs and programmable keys                                  
                                                                        
~ Full DOS utilities and subdirectory support                           
                                                                        
~ WordStar compatibility                                                
                                                                        
~ Configurable options and more                                         
                                                                        
VDE is fast.  Written in 8086 assembler, it writes directly to video RAM
and operates entirely in memory with no disk access during editing.     
Speed is a factor that more cumbersome, full-featured programs          
overlook.  Example:  finding a string near the end of a 60K nondocument 
file takes WordStar 4 about 20 seconds [8 MHz 8088]; VDE does it in half
a second.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LQCHAR.DOC

{% raw %}
```

                                  LQCHAR.DOC
                                  ----------
                         Instructions for LQCHAR.COM
                            Version 1.23 (02/04/90)

                            (c)1988-90  Eric Meyer


           Requires:   IBM PC compatible computer
                       Epson LQ compatible dot matrix printer


     LQCHAR is a small, efficient utility for designing downloaded character 
fonts for Epson LQ-compatible 24-pin dot matrix printers.  It will run on any 
MSDOS system (2.x or above) with an IBM compatible video adapter (MDA, CGA, 
EGA, VGA).  LQCHAR lets you design each character individually on screen, and 
builds up a disk file containing all the character definitions.  This file can 
then be sent to your printer anytime you wish to use the font.

    **********************************************************************
    *                                                                    *
    *      LQCHAR and its documentation are (c)1988-90 Eric Meyer,       *
    *   all rights reserved.  They may be freely distributed, but not    *
    *   modified or sold for profit without my written consent.          *
    *   (Voluntary contributions are welcome!)  The user takes full      *
    *   responsibility for any damages resulting from the use of this    *
    *   program.                                                         *
    *                                                                    *
    *                Eric Meyer                                          *
    *          401 12th Ave SE, #139      CompuServe [74415,1305]        *
    *          Norman, OK  73071  USA                                    *
    *                                                                    *
    **********************************************************************


                                 INTRODUCTION

     The ability of many dot matrix printers to accept downloaded fonts makes 
them far more versatile than formed-character (daisy wheel) printers.  You can 
change fonts in the middle of printing without touching your printer, and you 
can design any characters you like.  (Combined with the font definition 
ability of the EGA/VGA adapter, this allows word processing in a wide variety 
of typefaces, using ordinary off-the-shelf software.  Programs for this 
purpose include an excellent freeware screen font editor called CHET.ARC, from 
Mylex Corp., and also a PC Magazine utility called FONTEDIT.)

ABOUT YOUR PRINTER...

     LQCHAR should work with any 24-pin Epson LQ compatible printer... But no 
manual I've ever seen describes the design and use of downloaded fonts in a 
comprehensible fashion, and I suspect that some details may vary from one 
printer to another.  I have used it on an Alps ALQ200, and verified that it 
works on genuine Epsons as well.
     NOTE: if your printer is another Epson "compatible", it's possible that 
downloaded fonts:  * aren't supported;
                   * require extra options (eg memory);
                   * aren't implemented in a 100% compatible way.

     First let's clear up some terminology:
        QUALITY - What you select with the ESC-x command (Draft, LQ, etc).
           FONT - A set of characters designed for a given print quality.
      FONT TYPE - Whether the font includes undefined characters (see below).
          PITCH - Spacing of a given font (Pica, Elite, etc).
   PROPORTIONAL - This is a variety of PITCH, not of FONT!

     LQCHAR designs fonts in either Draft or Letter Quality (LQ) mode.  Some 
printers (such as the Alps) have a third print mode, "High density", that 
falls in between; LQCHAR does not support this mode.  Some printers have a 
third "Proportional" mode with an even wider dot pattern; LQCHAR does not 
support this either.  However, an LQ font designed with LQCHAR can be declared 
proportionally spaced!  (Don't get confused between the two.)



--------------------------  CREATING LQC FILES  ------------------------------


TYPE:                      A>lqchar FONTNAME

FONTNAME: a 1 to 8 character name for the font.  Do not specify the ".TYP" of 
    the file; LQCHAR will automatically make it ".LQC".
         * A disk or directory may precede the fontname.
         * An option may follow the fontname:
                 NO option - EDIT the font file
                        /P - send it to the PRINTER
                        /U - send to the printer and start USING it

     You can get this help message onscreen by typing simply "LQCHAR".


     If you are starting a new font from scratch, you will have to declare it 
to be either Draft or Letter quality (LQ); and you will start out with every 
character blank.  I have included two files called DRAFT.LQC and LETTER.LQC, 
containing a full plain ASCII font for each print quality.  These are often a 
good point of departure for designing modified fonts.  You can use them to get 
a feel for the program, simply by typing:

                   A>lqchar draft    OR     A>lqchar letter

     Once you are in LQCHAR, you will see a "box" on the left side of the 
screen, in which each character will appear, dot by dot.  The character matrix 
is always 24 dot rows high; its width varies according to the print quality: 9 
dot columns for Draft, 29 for Letter.  (Note: in Draft mode LQCHAR spreads out 
each dot by a factor of 3 so as not unduly to distort the aspect ratio.)  
Background shading indicates the vertical boundaries of a normal capital 
letter.  The rows above are available for accents, etc; those below, for 
lowercase descenders, etc.

     To the right you will see a header with general information about the 
font, and the cursor on a prompt that says "Character".  Below will appear a 
list of characters, with those that are already defined highlighted, for 
reference.  At this point you can do a variety of things.

MODIFYING THE ENTIRE FONT

     First, several commands can be used to modify the whole font in some way:

             <F1> -  Change PRINT QUALITY between Draft and Letter
             <F2> -  Change FONT TYPE between full and partial
             <F3> -  Change CHARACTER PITCH: pica, elite, or proportional
            <ESC> -  EXIT to Save Menu

When you use the <F1-F3> commands, you will see the information in the header 
change appropriately.  Nothing is changed on disk until you Save the font.

     PRINT QUALITY:  It is possible (with the <F1> key) to expand a Draft font 
into a sort of skeleton LQ font, or to compress an LQ font into a Draft font.  
In the first case, each character is expanded to fit the larger LQ pattern, 
leaving blank columns in between; you can enhance and fill in the gaps however 
you like.  In the second case, two rows out of every three are deleted; much 
detail will be lost, so retouching will again be necessary.
     Since changing print quality is a drastic modification which, if invoked 
accidentally, could lose valuable data, LQCHAR prompts for confirmation (Y/N) 
first.

     FONT TYPE:  The font can be stored as Full or Partial (selected with the 
<F2> key).  The only difference concerns characters that you have NOT defined: 
in a Full font, they simply won't print.  In a Partial font, the printer's 
resident font will "show through" any gaps; so a Partial font is an easy way 
to modify just a few characters.

     PITCH:  The font can be stored as Pica, Elite, or Proportional (selected 
with the <F3> key).  This choice affects only the spacing between characters, 
not the size of the characters themselves:  Pica prints 10 characters per inch 
(cpi), Elite prints a more compact 12 cpi, and Proportional is also about 12 
cpi but will vary according to the actual width of the characters.  (Some 
printers can vary the pitch of a downloaded font, and will not require the use 
of this command.  See MORE ABOUT DOWNLOADED FONTS below.)

THE DOS MENU

     When you are finished modifying the font, pressing <ESC> takes you to the 
DOS MENU, which presents several choices:
         <P>= PRINT THE FONT.  The entire range of characters will be printed, 
    with the standard font above (for comparison) and your new font below.  
    (Your printer must be online.)
         <C>= CHANGE THE NAME of the font before saving it to a disk file.
         <S>= SAVE the font to disk, then continue editing.
         <L>= LOAD A NEW FONT to work on.
         <E>= EXIT to DOS, SAVING the font to disk first.
         <Q>= QUIT to DOS, without saving the font to disk.
Pressing <ESC> at the DOS MENU will return you to editing the font.


---------------------------  DESIGNING CHARACTERS  ---------------------------

     To examine and modify individual characters, you can press:

          ARROW KEYS -  Display previous/next character
       Any character -  Display that character
            <RETURN> -  Edit the character shown

Select the standard character whose ASCII code corresponds to that of the new 
character you wish to create.  You may choose any character from hex value 21 
to 7E (33 to 126 decimal, "!" to "~").  If you pick a previously defined 
character, you will be modifying it.  For example, if you've loaded DRAFT.LQC, 
and type "A", you should see that character in the box; if you hit <RETURN>, 
you will be editing that character.

     Note that your cursor is now inside the character matrix.  You can move 
it around with your arrow keys.  The spacebar or keypad [5] key will toggle 
the pin you are pointing to ON and OFF.  Thus you can build up the pattern of 
dots that will form your character.

     There are many other special commands available in this mode, to make 
modifying characters easier; a reminder of them is visible to the right for 
reference during editing.  These are:

        <R,L,U,D>  move the whole pattern RIGHT, LEFT, UP, or DOWN.
              <C>  COPY the pattern from another defined character.
              <O>  copy pattern from character in OTHER font file.
              <B>  BLANK the whole pattern out to start over.
              <P>  PREVIEW a character in hi-res graphics. (EGA only!)
          <F1,F2>  move current COLUMN up, down.
          <F3,F4>  move current ROW left, right.
          <F5,F6>  insert, delete a COLUMN.
          <F7,F8>  insert, delete a ROW.
          <F9,F0>  ROTATE left, right.

     NOTES:  The OTHER command can be used to copy characters from another LQC 
font file (you will be asked for the font name).  This works with any other 
font, regardless of print quality, pitch, or font type.  (On limitations of 
Draft/LQ conversion, see above.)
     The PREVIEW command works ONLY on an EGA adapter.  It shows you a more 
realistic, miniature picture of the present character, using higher resolution 
graphics.  Press <P> again or <ESC> to remove this and continue editing.

     Of the remaining commands, only "rotate" is a bit tricky: this changes 
the overall slant of a character.  Be sure the character isn't too wide, and 
is roughly centered in the box, or parts of it will get truncated.  Note that 
the rotation works in increments of 2 rows; thus moving the character up or 
down one row first can give a slightly different effect.  Also, if you're 
going to rotate more than once, you should move the character up or down once 
each time in between to get the smoothest effect.  (Rotation works best on LQ 
characters; its effects are a bit drastic for Draft mode.)

     When done, you can press either:

              <RETURN> -  SAVE the character as modified
          or     <ESC> -  QUIT without saving changes

Upon saving, automatic centering causes the pattern to move to the middle of 
the box.  Note that you will not be able to save a definition that violates 
the following rule:

          --->  No two adjacent pins in any ROW may be ON!  <---

This is a physical limitation of the printhead: the pins can't fire fast 
enough to print twice in adjacent columns.  You could send such a character 
definition to the printer, but the second dot wouldn't print as intended, so 
LQCHAR warns you beforehand to avoid mistakes.



----------------------  PRINTING WITH DOWNLOADED FONTS  ---------------------- 


     The fonts designed with LQCHAR should have a filetype of ".LQC", for 
ready identification.  Typically they range in size from 1k to 5k, depending 
on how many characters are defined (also, Partial or LQ fonts are larger than 
Full or Draft fonts).  They must be loaded into your printer's font memory in 
order to be used.  This is done with the "/P" option:

                          A>lqchar fontname /p

This command can be given, for example, before you enter your word processor, 
or (hopefully) from some kind of DOS gateway within it.  (Be sure your printer 
is online.)  The font is now ready for use.  In order for this to work, your 
software MUST be installed to give the printer commands to switch to the 
downloaded font when required.  For example, in WordStar 4, you might have 
your print controls set up so that ^PA enables the downloaded (alternate) 
font, and ^PN goes back to the normal font. Thus you can alternate between two 
completely different fonts.

     If you don't have LQCHAR handy, you can also use the ordinary DOS COPY 
command to do this.  You will have to specify the filetype though; and you 
should use the /B option to make sure the LQC file is treated as binary, not 
character, data:

                          A>copy fontname.LQC prn /b

     Alternatively, you may want to be using the downloaded font alone, rather 
than switching back and forth between it and the normal font.  (This is how 
you will typically use a Partial font.)  In this case, you want the font to 
take effect immediately upon loading.  Use the "/U" option instead:

                          A>lqchar fontname /u

After loading the font, LQCHAR will enable it, so that all subsequent printing 
will be using the downloaded font.  Your word processor doesn't need to know a 
thing about it.  In order for this to work, your software MUST NOT use any 
printer commands to change the font after you've run LQCHAR.  (Check your 
"printer initialization sequence" for commands that reset the printer, select 
font or print quality, etc.)

MORE ABOUT DOWNLOADED FONTS:

     In any event, you will have to be careful that your software does not 
send commands to the printer that will cancel the font loaded with LQCHAR.  
This may include certain "global reset" commands that programs often use to 
initialize the printer.  If you can't get a downloaded font to work, try 
reloading it with the "/U" option, then printing something with a simple DOS 
command like "COPY filename PRN".  If this does work, your problem is with the 
printer initialization in your software; see your manual for how to modify it.

     Your printer can keep only one downloaded font in memory at once; if you 
load a second font it will replace the first.  After using LQCHAR, you can 
change between Draft and Letter quality, but of course the printer's resident 
font will be used in the other mode.

     Downloaded fonts do function a bit differently than the printer's 
resident font.  They should respond nicely to all the usual enhancements: 
expanded, compressed, emphasized, italics etc.  (This may depend on your 
printer.)
     Your printer may or may not allow printer commands to vary the pitch of a 
downloaded font with ESC sequences or panel switches.  (The Alps does not; I 
am told that some Epsons do.)  If it does, you can leave LQCHAR set to "pica 
pitch" and ignore the "pitch" command <F3>.  If not, your choice with the <F3> 
key determines the pitch.  (You can always create another copy of an LQC file 
in a different pitch.)
     But there is one FIRM limitation:  True super/subscripts will NOT work, 
as these miniature characters have to be defined separately, on an 18-pin high 
matrix, and LQCHAR doesn't do this.  If you need these, you may be able to 
install your software to do subscripting with platen rolls instead.


--------------------------  TECHNICAL INFORMATION  --------------------------- 

LQC FILE FORMAT:

     The output file for a full font consists of an ESC sequence to set the 
print quality (draft/LQ) and proportional print (on/off), then a long ESC 
sequence defining every ASCII character from hex 20 to 7E.  (LQCHAR defines 
20H as space, automatically.)  For a partial font, the file instead contains 
the ESC sequence to copy the resident font, then a separate ESC sequence for 
each defined character individually.
     This means that if you don't have LQCHAR handy, you can simply load LQC 
fonts with the DOS COPY command: they contain nothing but standard Epson ESC 
sequences.  However -- there too many details about the way the character 
definitions must be formatted to explain here.  I do NOT recommend that you 
try to convert font data from other sources into LQC files for use with 
LQCHAR.  There are just too many details, and LQCHAR might crash if its data 
isn't in the expected format.
     LQCHAR can, however, read LQC files created by versions prior to 1.22 
(which lack the proportional code in the leadin string), and even those 
created by the earlier CP/M version of the program (LQCHAR 1.1, 8/87).

SCREEN COLORS:

     The default screen colors in LQCHAR are chosen for visibility on the 
widest variety of display adapters.  However, if you prefer to change the 
colors using DEBUG or a similar utility to modify LQCHAR.COM, you may do so.  
There are 5 distinct colors, beginning at address 0102h:
     ADDR   DEFAULT                PURPOSE
     0102   07  (white)            Normal video
     0103   08  (grey)             Dim video (undefined/unavailable items)
     0104   0F  (bright)           Bright video    /These are all used \
     0105   70  (black on white)   Inverse video  < for highlighted text>
     0106   7F  (bright on white)  Hilight video   \and box shading    /


VERSION HISTORY:

     LQCHAR 1.0 (6/88) was developed from my earlier Z80 CP/M program of the 
same name (version 1.1, 8/87), with a number of added features.
     1.1 (1/89) - adds hi-res preview for EGA systems; small improvements.
     1.2 (4/89) - more DOS functions; LQ to Draft conversion; copy character 
                 from another font; print font; small improvements.
     1.21 (5/89) - fixed bug in <O>ther font function; small improvements.  
                 Proportional spacing of narrow characters improved.
     1.22 (10/89) - correctly recognizes more non-EGA systems; puts printer 
                 in proportional mode for prop. fonts.  (Note: to convert 
                 existing LQC files, you must load and resave them.)
     1.23 (02/90) - fixed bugs in reading older fonts, writing Partial fonts; 
                   included more font files.
                    This will be the LAST RELEASE of this program.

------------------------------------[end]-------------------------------------
```
{% endraw %}

## PI.DOC

{% raw %}
```
                                    PI.DOC
                                    ------
                           Instructions for PI.COM
                        Print Interceptor 1.2 (4/6/90)

                             (c)1988-90 E. Meyer


     PI (Print Interceptor) is a printer utility for all MSDOS systems 
(requires MS/PCDOS 2.x or higher).  When run, PI.COM becomes a memory resident 
program (TSR) that translates printer output according to a table that can be 
changed at will.  Any outgoing ASCII code can be redefined to another code, or 
string of codes, to be sent to your printer.  This is a very general approach, 
with many possible applications, including:

     * IBM extended (foreign) characters can be emulated on LQ printers
     * Single-character "Macros" can produce predefined strings
     * The same file can print differently on different printers
     * Printer output can be entirely suppressed for testing software

     PI allows you to change the current definitions in two ways: with a text 
file full of definitions that you create with an editor; or with ESC code 
sequences that can be sent from other programs.


                              1. INSTALLING PI

     The PI.COM module, once installed, remains in memory until your computer 
is reset.  There are two ways to install it.  First you may simply type:

                                 A>pi

This loads the module, but it is INACTIVE, and no redefinitions are in effect.  
You would have to define some characters, then make PI active, before printer 
output would be affected.  (See below for how to do this.)
     Second, you may invoke PI with the name of a definition file:

                                 A>pi filename

This loads the module, makes it ACTIVE, and implements any redefinitions in 
the file.  (See below for the required file format.)  This command may be 
repeated later to install a replacement set of definitions.
     NOTE: the printer must be online when loading definitions.


                             2. DEFINITION FILES

     You can quickly establish a set of redefinitions for use with PI, using 
any text editor.  Create a simple ASCII text file (say, MY.DEF), which you 
will be loading with PI (eg, A>pi my.def).
     The file may contain any number of statements like this:

                    128='C',8,',';   '@'=27,'(s0S';   ...

Numbers are always decimal; literal characters or strings are enclosed in 
single quotes; commas separate items in a definition, a semicolon ends each 
definition; blank space and carriage returns are ignored.  PI interprets the 
example shown as a request to define character 128 as the three-byte sequence 
"C", backspace, comma; character "@" as Escape, "(s0S"; and so on for each 
such statement in the file.  Any characters not mentioned will ordinarily 
print as themselves.  Finally, PI will be made ACTIVE, enabling these 
definitions for use.

     The effect of the first example is to allow the IBM character capital-C- 
sedilla to print as capital-C, backspace, comma, which is a good facsimile on 
letter quality printers.  Of course, definitions can be a single byte: 
"128=67;" would define it as capital-C alone.  And definitions can be empty: 
"128=;" would define it as nothing, that is, a non-printing character.

     Each definition may be up to 32 bytes long, and PI has 6K (about 6000) 
bytes available for all definitions.


                              3. CONTROLLING PI

     If you just type "PI" with no arguments, you will be informed of the 
current status (whether PI is active, and whether print output is enabled).  
There is also a set of commands to change status:

              A>pi /a     Make PI ACTIVE
              A>pi /i     Make PI INACTIVE

              A>pi /d     DISABLE print output
              A>pi /e     ENABLE print output

     The "/D" command temporarily disables all output to the printer.  Your 
software can operate as usual, thinking it's printing; but nothing will 
happen, in fact there need not even be a printer present.  The current 
definitions are not affected.


                              4. PROGRAMMING PI

     You may never need to do anything further to control PI.  However, if you 
do find a need, or become interested, PI responds to a set of ESC-commands, 
just like those that control your printer.  You can install these commands in 
your word processor's printer controls section; put a set of them in a disk 
file to be COPYed to the printer for use; or use them in a program of your 
own, for example, to read in translation tables in some format other than that 
expected by PI.COM itself.

     When PI is "active", it is translating printer output according to any 
currently installed definitions.  When it is "inactive", all output goes 
direct to the printer without translation.  Keep these two states in mind: 
making PI inactive and defining every character as itself are NOT the same.

     Once again, after PI.COM is installed, these codes must be sent as 
PRINTER OUTPUT to modify its behavior.  Hexadecimal notation is used 
throughout here; decimal values are often shown in parentheses.  Hex 1B is the 
ESCape code (27 decimal).

INACTIVATE PI.                 1B FF 30    (27,255,48)
         This sequence temporarily "turns PI off", if you ever need a 
      quick way to suspend translation.

ACTIVATE PI.                   1B FF 31    (27,255,49)
         This sequence "turns PI on", enabling its translation of 
      outgoing printer data according to any installed definitions.

SET STANDARD ASCII.            1B FF 32    (27,255,50)
         This sequence defines every character as itself; useful as a 
      starting point for further modifications.

MASK PARITY.                   1B FF 33    (27,255,51)
         This sequence defines ASCII 00-7F (0-127) as themselves, and 
      ASCII 80-FF (128-255) as 00-7F (0-127) also.  Effectively, this 
      would "mask off" the high, or parity, bit on outgoing data.

ERASE DEFINITIONS.             1B FF 34    (27,255,52)
         This sequence wipes out all ASCII codes, defining each as a 
      null string.  Only subsequently redefined codes will print.

REDEFINE CODE.                 1B FE aa nn b1 b2...  (27,254,aa,nn,b1...)
         This sequence redefines any ASCII code "aa", for printing 
      purposes, as a string of "nn" bytes, "b1 b2...".


                              5. ABOUT CONFLICTS

     PI itself uses just two uncommon ESC codes, which probably will not 
conflict directly with anything in your printer's command set.  A more subtle 
problem is that PI might interfere with your use of printer ESC codes by 
attempting to translate them!  PI tries to avoid this: it will never translate 
an ESC, nor a byte preceded by an ESC, so that, for example, if you use an ESC- 
E command it will not be affected by any translation of the character "E".  
But many printer sequences are longer than two bytes, and in these cases PI 
can't distinguish commands from data.

     To illustrate the problem, suppose you have been using the printer 
command ESC-r-nn, "1B 72 80" (27,114,128) to set the right margin to absolute 
column 128.  If this occurs while PI is ACTIVE, with the redefinition in the 
example above, that final "128" is going to turn into "67,8,44" or whatever, 
resulting in setting a margin at column 67, plus some garbage.  This is why 
you (may?) need to ensure that PI is INACTIVE when (some?) printer commands 
are being sent.  There are two possible approaches.

     THE FAST AND LOOSE METHOD: in general, leave PI ACTIVE and don't worry; 
you may never see a problem.  But whenever you see that your printer isn't 
being properly set up, or spot a particular command that you know will cause 
trouble (because it contains ASCII codes that you have redefined), make sure 
it is "bracketed" somehow by commands to turn off translation:
                 1B FF 30        ;make PI INACTIVE
                 1B 72 80        ;now set the margin correctly
                 1B FF 31        ;make PI ACTIVE again
Often this approach will be adequate, particularly if you seldom redefine any 
characters in the normal ASCII range 00-7F.

     THE CAUTIOUS METHOD: in general, make PI INACTIVE.  But in every text 
file you are going to print, embed the PI ON command (1B FF 31) at the 
beginning, and PI OFF (1B FF 30) at the end.  



                               TECHNICAL NOTES

     PI is a replacement interrupt handler.  It will intercept all normal 
printer output from programs, but not output generated by use of redirection 
or the PRN device in DOS commands.
     Because PI is a Terminate and Stay Resident (TSR) utility, once installed 
it cannot be removed without a reset.  You should not install PI from within a 
DOS shell while executing another program, as this will corrupt the DOS memory 
allocations; other uses of PI.COM (reading files, etc) cause no problems in 
this situation.

                                   HISTORY

     PI 1.0-1.1 (3/88)  Original release
            1.2 (4/90)  Added 'literal quote' option for def. file

     PI and its documentation are (c)1988-90 E.Meyer, all rights reserved.  
They may be freely distributed, but not modified or sold for profit without my 
written consent.  The user takes full responsibility for any damages resulting 
from the use of this program.

                 Eric Meyer
            401 12th Ave SE #139             CompuServe [74415,1305]
           Norman, OK  73071  USA

```
{% endraw %}

## QKRP.DOC

{% raw %}
```
                                   QKRP.DOC
                                 ------------
                          Instructions for QKRP.COM
                            version 1.2 (11/7/89)

                               (c)1989 E. Meyer


           Quick Key Repeat requires: IBM PC/XT, DOS 2.x or above.

     QKRP is a speedup program for the original IBM PC/XT keyboard.  Enhanced 
(AT) keyboards have a programmable key repeat rate; original PC's don't, so 
QKRP actually modifies the way the BIOS handles incoming keystrokes.  It 
accelerates key repeat action, yet stops instantly when the key is released.  
Furthermore, the delay before repeat action begins can be adjusted.

     QKRP roughly doubles the key auto-repeat rate on an IBM PC.  This makes 
moving the cursor, as well as typing repeated characters, faster and easier.  
At the same time, it solves a problem in the PC BIOS: when you hold down a 
key, repeat keystrokes are stored in the type-ahead buffer, whether or not 
your software is ready for them yet.  Then an annoying "overshoot" effect 
occurs as, even after you've released the key, your software is still reading 
these keystrokes from the buffer.  QKRP avoids this, by engaging auto-repeat 
only when the typeahead buffer is empty.

     QKRP does not interfere with normal keyboard operation, for example the 
use of the Alt and numeric keys to enter graphic characters.  However, it will 
only work on 100% PC compatible computers, and might conflict with other TSR 
(memory resident) software.  Test it out before installing it in your bootup 
procedure.


                                  USING QKRP

     You can install QKRP from the DOS command line.  However, since it should 
normally be installed before any other TSRs that monitor keyboard interrupts, 
it's best to place it early in your AUTOEXEC.BAT file.  Type:
         > QKRP I    to "I"nstall.

     Once QKRP is installed, you can adjust the repeat delay setting (the 
time, after pressing a key, before auto repeat begins) at will, simply by 
typing:
         > QKRP 1..5   for delay from 1 (shortest) to 5 (longest).

     A value of "3" is the default, for a moderate delay.  Different settings 
will suit different typists; experiment to find out which you like.  If you 
prefer a different value, you can specify this at the time of installation:
         > QKRP I 2   to "I"nstall with moderately short delay.

     Note: you may include option slashes if desired, eg:  > QKRP /I /2.

     QKRP consumes only about 400 bytes of memory.  It should not be installed 
more than once, as this wastes memory and complicates the keyboard interrupts.  
Consequently, QKRP tries to detect the fact that it is already resident; if 
so, it will accept a command to change the delay setting, but will refuse to 
install itself again.
     If you simply type "QKRP", with no arguments, the program will tell you 
whether it is installed.
     Note: QKRP cannot tell that it is already memory resident if another 
keyboard-intercepting TSR has been loaded since.  In this situation you can no 
longer vary the delay setting.  (Also, an installation command would result in 
a duplicate installation, which should be avoided.)


                                   HISTORY

     QKRP is based upon an elegant little TSR program called "HOTKEY version 
1.10", of January 1987.  This seems to have been the last release of the 
program, which unfortunately was circulated anonymously.

     v1.2 (11/89) - Corrected DOS 1.x program exit; added variable 
                   delay feature, multiple installation prevention.


     QKRP and its documentation are (c)1989 Eric Meyer, all rights reserved.  
They may be freely distributed, but not modified or sold for profit without my 
written consent.  (Voluntary contributions are welcome.)  The user takes full 
responsibility for any damages resulting from the use of this program.  Please 
report any problems encountered.

                 Eric Meyer
            401 12th Ave SE, #139            CompuServe [74415,1305]
            Norman, OK  73071  USA

```
{% endraw %}

## VDE.DOC

{% raw %}
```


                                   VDE.DOC
                                   -------
                    Instructions for Video Display Editor:
                             VDE 1.52 (04/03/90)

                             (c)1987-90, E. Meyer


              Requires:  Any 80x86 computer; MS/PCDOS 2.x or above.

==============================================================================


VDE is a small, fast, powerful text editor offering:

     * easy menu-bar operation OR WordStar command set
     * multiple files, windows, cut and paste
     * block copy, move, delete, read, write, zoom
     * find/replace, undo deletions, automatic save
     * keystroke macros with full programming ability
     * utilities to browse disk files, split files, compare files,
          count words, number lists automatically
     * full DOS access: subdirectories, DOS commands, shell
     * programmable function keys and many other user configurable options
     * ability to run on NON-IBM compatibles, and in limited space

But VDE is also an efficient small word processor, with:

     * wordwrap, reformat, left and right margins, variable tabs
     * center, flush right, proportional spacing
     * customizable printer drivers for special effects (bold, underline, etc)
     * printing options: headers, pagination, selective print, print to file
     * multiple file formats (plain ASCII, WordStar, WordPerfect, XyWrite)

     VDE's versatility is due to its combination of the most important word 
processing features with the simplicity of an editor designed to work with 
plain text files, making it an efficient tool for many different tasks.  VDE's 
pure ASCII mode makes it an ideal choice for a DOS file editor, or a practical 
editor to run from a shell within telecom, database, file maintenance, 
programming, and other application software.  Yet its full formatting and 
printing features also make VDE a highly WordStar-compatible word processor.

     VDE is very fast; it edits files entirely in memory, and displays text 
directly to video RAM (on IBM PCs).  Speed is a factor that commercial 
programs often overlook;  finding a string near the end of a 60k non-document 
file takes WordStar 4 about 20 seconds [8 MHz 8088], while VDE does it in half 
a second.  When you are free to move around in your file with this speed, you 
can do more of your work instantly on screen, and less on paper.

     VDE is also very small.  Taking only about 45k of disk space, and running 
in as little as 90 to 140k of RAM, it is well suited to portable computers and 
other applications with limited memory or disk space.

                                   SOURCES

     Please note that copies of VDE on disk can NOT be ordered directly from 
the author, except for purchasers of site licenses.

     Primary distribution points for VDE, as of October 1988, are:
         (1) Glendale Littera QBBS - Glendale, CA  (818)956-6164.
         (2) On CompuServe, in download libraries (DL) of the IBMAPP forum.
VDE is updated regularly, and users with access to a modem can always find the 
most recent release on these systems.
     In addition, VDE is available on a wide variety of other remote systems, 
and also on disk through several software libraries, including:
         The Public Software Library           (800)242-4775
         P.O. Box 35705, Houston TX 77235.     (ask for disk #1933)

     Any use of VDE is governed by the Usage Policy detailed below.


===============================  USAGE POLICY  ===============================


     The VDE editor and its documentation are copyright (c)1987-90 Eric Meyer, 
all rights reserved.  They may not be circulated in any incomplete or modified 
form, nor sold for profit, without written permission of the author.  The use 
or sale of VDE is subject to the following terms:

INDIVIDUAL USE:       VDE may be freely used and shared with others; there is 
----------         no required registration fee.  (If you like VDE and find it 
                   useful, please do consider sending a contribution!)

INSTITUTIONAL USE:    Any corporation or institution wishing to use VDE in the 
-------------      course of its business must purchase a SITE LICENSE.  A 
                   standard license, allowing the use of VDE on up to 20 
                   different computers, can be ordered for US $50.00; write 
                   for terms concerning larger quantities.  A disk containing 
                   the latest release of VDE will be included at no additional 
                   charge (specify 5.25" or 3.5").

COMMERCIAL SALE:      Any software dealer or library may offer VDE for sale, 
           ----    as long as the price charged for the disk containing VDE 
                   does not exceed US $5.00.  With this single exception, the 
                   sale of VDE for profit, either alone or together with other 
                   software or hardware, requires a licensing agreement provi- 
                   ding for royalty payments.  Please write for terms.


                 Eric Meyer
            401 12th Ave SE, #139          CompuServe [74415,1305]
            Norman, OK  73071  USA


     DISCLAIMER: You undertake to use VDE at your own risk.  The author 
assumes no liability for damages of any kind resulting from your use of VDE.  
"WordStar", "WordPerfect", "XyWrite" and "DesqView" are registered trademarks.

================================  CONTENTS  ==================================


1. INTRODUCTION: Installation; Command line syntax, examples; 
                 VDE operating modes (MenuBar, Command).

2. COMMAND SUMMARY: a complete brief listing of all commands:
               MenuBar choices;
               Ctrl, ^K (Block/File), ^Q (Quick), ^O (Onscreen), Alt, Esc.

3. EDITING COMMANDS, explained alphabetically by category:
       Auto indent, Auto number, Auto save, Block commands, Deleting, Files, 
    Find/replace, Graphics, Header, Hyphenation, Information, Inserting, Line 
    spacing, Margins, Matching up files, Moving around, Multiple files, 
    Pagination, Place markers, Printer codes, Printer drivers, Printing, 
    Proportional spacing, Ruler line, Run command/shell, Save/exit, Screen 
    controls, Splitting files, Tabs, Time/date, Undelete, Upper/lower case, 
    Windows, Wordwrap & reformat.

4. GENERAL INFORMATION, alphabetically by category:
       Compatibility (WordStar, WordPerfect, XyWrite), Directories, Error 
    messages, File modes, Memory, Prompts.

5. APPLICATION TIPS, alphabetically by topic:
       DesqView, Foreign ASCII files, Programming, Redirecting I/O, Spelling 
    checkers, Structured languages, Transposing text.

    [The following sections are in the companion file VINST.DOC.]

6. MACROS.  Explanation and examples of:
        Function keys, Key redefinition files, Macros, Macro keys, Macro
     programming, Recording macros.

7. RUNNING VINSTALL.  How to use VINST.COM to modify VDE.COM:
        Installing for different computers, printers; user defaults and 
     options; macro and function key defaults.

    [See the companion file VDE.UPD for version history and recent changes.]


=============================  1. INTRODUCTION  ==============================


     Most users will have an IBM compatible computer, and can begin using VDE 
straightaway.  Before long, though, you should use the VINSTALL program to 
customize the display and other options to your tastes.  (Once you have done 
this, the introductory information screen in VDE will disappear.)
     However, if your computer is not 100% IBM-compatible, you should run 
VINSTALL immediately, and perform the computer installation before using VDE.  
(In non-IBM mode, VDE will run on any MSDOS system with an ANSI.SYS driver.)
     VDE operates by default in Command mode.  If you want to get started 
using the simplified menu system, you must change this with VINSTALL.  You 
will eventually discover the settings you prefer for the many other options 
and defaults, as you become more familiar with VDE.  [See VINST.DOC for 
details.  Comments below in brackets "[]" point out various uses of VINSTALL.]

                                 RUNNING VDE

     You can just type "VDE", with no arguments; or, you may specify a list of 
up to 8 filenames.  Any filename may include a DOS directory, and/or be 
followed by a mode option.  A key definition file may also be specified at the 
end of the command line, following a semicolon ";".  All spaces are ignored.

SYNTAX:     note "{}" = optional

    C>vde {filename} {/m} {, filename2 {/m}} {,...} {;name.VDK} {;name.VDF}

EXAMPLES:   C>vde                         C>vde article.doc/w;ws4.vdf
            C>vde sample.fil              C>vde b:myfile,myfile.bak
            C>vde a:summary,\recs\sep85   C>vde prog.doc/a,prog.asm/n,errors

         "filename" - file to edit.  If no name is given, you begin a new 
    (untitled) file.  Multiple names are separated by commas; the previous 
    item's directory carries over to the next item, unless this begins 
    with a drive or root "\".  (In the example above, MYFILE.BAK is on B:.)

         "/m" or " m" - optional choice of file modes: "m" can be "A"SCII,  
    "W"ordstar, WordStar "5", Word"P"erfect, or "X"yWrite document; or 
    "N"ondocument.  Normally defaults to "/A".  Must be separated from 
    filename by a space and/or a slash.  See FILE MODES.

         "+name.VDK (or VDF)" - optional macro and/or function key definition 
    file to load.  See KEY DEFINITION FILES.

     VDE can edit different types of files: non-documents, such as program 
source code; or documents with formatted text, in either pure ASCII or formats 
compatible with WordStar, WordPerfect, XyWrite, and other word processors.  
Maximum file size is roughly 80k; if an existing file is too large to edit 
with VDE, divide it up (see SPLITTING FILES).

     VDE gives you a certain amount of information at the top of the screen 
(for details see HEADER, RULER).  At times, further information may be 
provided by various menus or error messages; press [Esc] or [Space] to remove 
these.  Any input prompts (like "New value:") may be cancelled by typing ^U.

     Hint: If you need on-line help while learning to use VDE, it's an 
excellent idea to load VDE.DOC as a second file while you work.  Then just 
switch to it and search for the help you need (for example, the word "margin").

                               OPERATING MODES

     VDE has two distinct modes of operation:
            (1) MENU-BAR mode.      (2) COMMAND mode.
If you see the message "Esc=MenuBar" at the right end of the header line, you 
are in MenuBar mode.  If this area is blank, you are in command mode.
     To switch into MenuBar mode from command mode, type Esc,?; to switch to 
command mode from MenuBar mode, select {Misc:Command mode} (Esc,M,C).

     (1) If you are new to word processing, you may find the MenuBar mode 
easiest.  Just press the [Esc] key, and a series of menu bars will guide you 
to the function you need: type a highlighted letter to select from each menu.  
Most (though not all) of VDE's features are available in this mode.  In the 
text below, MenuBar commands will be referred to in the following manner:
                          {stYle:Underline}
This designates selecting st"Y"le, then "U"nderline from the menu bar sequence 
(you actually type Esc,Y,U).

     (2) Control-key commands (WordStar compatible), although they do need to 
be memorized, are more concise, and give access to the full range of VDE 
features, including powerful macros.  If you're familiar with the popular 
WordStar command set already, you can probably start right in editing files 
with VDE.  It uses simple one- or two-key combinations, like:
                              Ctrl-Q  F
These are easily found by the touch typist without distraction, and probably 
account for the continuing popularity of WordStar, which (despite being nearly 
a decade old) is still widely used throughout the world.
     Most of these commands in VDE are identical to those in WordStar, though 
a few differ slightly.  But VDE is more than just a WordStar "clone", and has 
a number of extra Alt-key and Esc-key commands to invoke its additional 
features, such as multi-file editing.


===========================  2. COMMAND SUMMARY  =============================


     Explanation of Keys:  IBM PC special keys are indicated in [brackets], 
including arrows [^,v,<,>] for the cursor keys.  ([+] and [-] refer to the 
keypad +,- keys only.)  "Esc" means the Escape key, [Esc]; "Esc1" means 
[Esc],1.  "Alt" indicates holding down the [Alt] key: "AltD" means [Alt]+D.  
"^" indicates holding down the [Ctrl] key: "^K" means [Ctrl]+K.  Many commands 
require two-key sequences, eg ^QR = [Ctrl]+Q,R.  The prefix (^Q) displays in 
the header, and can be canceled by pressing Esc or Space.

     Synonyms:  If your keyboard lacks any of the IBM PC keys, synonyms are 
always available (eg, ^R for [PgUp]).  If you have no [Alt] key, you can still 
access the Alt-commands with a double-Esc prefix: Esc,Esc,X = AltX.  (This 
also allows use of VDE while Alt-keys have been redefined with TSR utilities.)


                                UNIVERSAL KEYS

     The following keys are active in either operating mode.  (Asterisks "*" 
mark features unique to VDE.)

  [Ret] = Carriage Return (also known as [Enter], CR, or ^M).
            New line.  In documents, marks a paragraph end.
  [BkSp] or [<-] = BackSpace (also known as BS or ^H).  [May delete.]
  [Tab] = Hard Tab mode: enter Tab.  Variable Tab mode: move to next stop.
* Shft[Tab] = backward variable Tab: move to previous stop.

     [Del] = delete character to the left.  [May instead delete right.]
*   ^[Del] = delete character in opposite direction from [Del].
     [Ins] = toggle Insert mode on and off.

     [^], [v], [>], [<] (IBM cursor keys).
     ^[>]  = move to start of next word right.
     ^[<]  = move to start of previous word (left).

     [-] = scroll back one line.
     [+] = scroll forward one line.
     [PgUp] = scroll back one screen.
     [PgDn] = scroll forward one screen.
*    ^[PgUp] = scroll both files back a screen (in split screen mode).
*    ^[PgDn] = scroll both files forward (").

     [Home] = go to top of screen.    [Home, End keys can also be set to move
     [End]  = go to bottom of screen.     to beginning, end of line instead.]
     ^[Home] = move to top of file.
     ^[End]  = move to end of file.


                                MENU-BAR MODE
                     ("Esc=MenuBar" shows at upper right)

     Press [Esc] to call up the main menu bar; select an option by typing the 
capitalized, highlighted letter.  For example, the main menu bar reads:
  ----------------------------------------------------------------------
  Delete  moVe  Text  stYle  Set  sCreen  Misc  Print  Block  File  Exit
  ----------------------------------------------------------------------
If you wanted to underline text, you would type "Y" for stYle, on which you 
would see a new menu bar listing Underline, Bold... and so on.  You can type 
[Esc] again, to back up one menu, or exit.
     The entire MenuBar set, for your reference, appears below.  For further 
explanation of commands, look them up below under their command mode 
equivalents, given in the second column.

{Delete: del Line}       ^Y            {Misc: insert Time}       AltT
         to line Start}  ^Q[Del]                     Date}       AltD
                 End}    ^QY                  file Info}         ^KI
         del to Char}    ^QT                  about VDE}         AltI
         del Block}      ^KY                  Command mode}      Esc?
         Undelete}       ^U
                                       {Print: overstrike Char}  ^PH
{moVe: Find}             ^QF                              Line}  ^PM
       Replace}          ^QA                   Formfeed}         ^PL
       rEpeat f/r}       ^L                    Tab}              ^PI
       Overview bar}     AltO                  Graphic}          AltG
       place Set}        ^PZ                   Driver}           AltV
             Go}         ^QP                   Print file}       ^KP

{Text: rUler}            ^OT           {Block: Begin}            ^KB
       set mrgn L}       ^OL                   End}              ^KK
                R}       ^OR                   Unmark}           ^KU
       Mrgn rel}         ^OX                   Copy}             ^KC
       Center}           ^OC                   Move}             ^KV
       Flush}            ^OF                   cuT}              AltC
       rEform}           ^B                    Paste}            AltP
       Autoindent}       ^OA                   Write}            ^KW
                                               Zoom}             ^KZ
{stYle: Underline}       ^PS
        Bold}            ^PB           {File: rEname work}       ^KN
        Doublestrike}    ^PD                  Dir}               ^KF
        Italic}          ^PY                  Read in}           ^KR
        Subscript}       ^PV                  Load new}          ^KL
        suPerscript}     ^PT                  Add file}          AltL
                                              Next file}         AltN
{Set: tab Set}           ^OI                  Prev}              AltB
          Clr}           ^ON
      Varitab}           ^OV           {Exit: Save to disk}      ^KS
      Double spc}        ^OS                  eXit w/save}       ^KX
      Prop spc}          ^OJ                  Quit w/o save}     ^KQ
      Hyphens}           ^OH                  Run DOS command}   AltR
      pg Length}         ^OP

{sCreen: make Top}       ^OE
         Window}         AltW
         Other win}      AltF
         Header}         ^OQ
         Blank}          ^OZ
         Preview}        ^OD
         Ega:43}         AltE
         Ati:132}        AltA


                                 COMMAND MODE
                        (Right end of header is blank)

     Many commands are identical to those in WordStar.  Equal signs ("=") mark 
those that differ significantly from their WordStar equivalents.  (See 
COMPATIBILITY, below.)  Asterisks ("*") mark additional commands unique to VDE.


HELP:  ^J = display basic help menu
           (for Alt, Esc, ^K, ^O, ^P, ^Q commands, press A,E,K,O,P,Q next)


I. CONTROL KEYS:  single keystroke commands.

     WordStar arrow-key diamond:
       ^E = up.    ^D = right.             ^F = move to start of next word.
       ^X = down.  ^S = left.              ^A = to start of previous word.

     ^W = scroll back one line.            ^R = scroll back one screen.
     ^Z = scroll forward one line.         ^C = scroll forward one screen.

     ^G = delete character to right.       ^Y = delete current line.
     ^T = delete word to right.
     ^U = undo last deletion (character, word, line, or block).

     ^V = toggle Insert mode on/off.       ^N = insert [Ret] (break line).
*    ^] = toggle Word Insert on/off.       ^P = insert control code.
*    ^_ = insert a space.                  ^PZ = insert place mark.
*                                          ^P# = insert numbering marker.

*    ^^ = toggle case (upper/lower) of character at cursor.
     ^B = reformat paragraph.              ^L = repeat last find/replace.


II. FILE AND BLOCK COMMANDS:  first press ^K, then the key shown.

*    ^KI = file/memory Information.       ^KP = Print the text.

*    ^KF = disk File browser.             ^KR = Read a file into text.
*    ^KL = Load new file(s) to edit.      ^KJ = delete a disk file.

*    ^KN = reName current work.           ^KS = Save to disk, and continue.
     ^KD = Done: save & load new file.    ^KX = eXit: save & quit to DOS.
*    ^KA = set Autosave interval.         ^KQ = Quit to DOS, abandoning file.

     ^KB = mark start of a Block.         ^KK = mark end of a block.
=    ^KU = Unmark the block.              ^KY = Delete the marked block.
     ^KC = Copy block at cursor location. ^KV = moVe block to cursor location.
*    ^KZ = Zoom into the marked block.    ^KW = Write block to a disk file.
*    ^K# = automatically number items in the block.
*    ^K",',^ = uppercase ("), lowercase ('), or switch case (^) of block text.


III.  QUICK COMMANDS:  first press ^Q, then the key shown.

     ^QS or [<] = go to start of line.    ^QE or [^] = go to top of screen.
     ^QD or [>] = go to end of line.      ^QX or [v] = go to bottom of screen.

     ^QR = go to top of file.             ^QB = go to Block start marker.
     ^QC = go to end of file.             ^QK = go to block end marker.
=    ^QZ = go to next place marker.
     ^QI = go to specified page (document) or line (non-document).
     ^QP = go to Previous position in file (before last sizable move).

     ^QF = find a string.                 ^QA = find and replace a string.

     ^QY = delete from cursor to end of current line.
     ^Q[Del] = delete from cursor to beginning of current line.
     ^QT = delete up to specified character.


IV. ONSCREEN COMMANDS:  first press ^O, then the key shown.

     ^OR = set Right margin.              ^OX = toggle Margin Release on/off.
     ^OL = set Left margin.               ^OC = Center current line.
*    ^OF = make line Flush with right margin.

*    ^OQ = header display on/off.         ^OT = ruler line display on/off.
     ^OB = hard CR display on/off.
     ^OD = preview text with no control codes or hard CRs.

*    ^OA = Auto indent on/off.            ^OH = Hyphenation on/off.
*    ^OJ = proportional spacing on/off.   ^OS = double Spacing on/off.
     ^OV = tab mode hard/Variable.
     ^OI = set variable tab stop(s).      ^ON = clear variable tab stop.

*    ^OP = set page length (0 turns off pagination).
*    ^OE or [^] = make current line top of screen.
*    ^OW = split Window to show two different portions of the file.
*    ^OZ = temporarily blank the entire screen.


V. VDE ALT-KEY COMMANDS: press Alt and the key shown.
     (These commands also work with an Esc,Esc prefix instead)

*    AltI = show VDE version Information.

*    AltL = Load an additional file.      AltB = move Back to previous file.
*    AltW = split Window with 2 files.    AltN = move forward to Next file.
*    AltF = move to other File window.

*  AltC,P = Cut and Paste a block from one place or file to another.
*    AltM = Match up the two files on screen, showing differences.
*    AltX = eXit (^KX) from all files.    AltQ = Quit (^KQ) from all files.

*    AltR = Run DOS command (or shell).   AltS = Split up a large file.

=  AltT,D = enter the current system Time or Date in the file.
*    AltG = enter an IBM Graphics character into text.
*    AltE = EGA screen (43/50 lines).     AltA = ATI screen (132 columns).

*    AltO = move with Overview bar.       AltV = change printer driVers.
*    AltU = Use (load or save) macro/function key definition file.


VI. VDE ESC-KEY COMMANDS:  first press Esc, then the key shown.

*    Esc[Tab] = variable tab forward (even in hard tab mode).
*    Esc[<],[>] = shift screen horizontally 32 columns.
*    Esc[^],[v] = shift screen vertically 1/4 screen.
     Esc? = switch to MenuBar mode.  (In macro mode: call up MenuBar.)

*    Esc[       = define a macro string of commands.
*    Esc"       = record a macro from keystrokes.
*    Esc]       = store macro on alphanumeric key for later recall.
*    Esc0...Z   = use stored key.  (In macro mode: jump label.)
*    Esc!,=,~   = jumps and loops, used in macro programming (see MACROS).
*    Esc(),+,-  = counter, used in macro programming.
*    Esc;       = brief pause, during macro execution only.
*    Esc&       = chain to another macro.


==========================  3. EDITING COMMANDS  =============================


AUTO INDENT (^OA) - This command toggles Auto Indent mode.  When ON, wordwrap 
    or the [Ret] key will cause the cursor to advance to:
         Any existing indentation on the line (if Insert mode is OFF); or,
         The same indentation as the previous line (if Insert is ON).
    Thus, once you set the indentation level, VDE will automatically maintain 
    it.  (Indentation must NOT be done with hard tabs; it can be changed with 
    space, backspace, or with variable tabs, which insert spaces.)  Useful as 
    a paragraph indent, or for outlines, structured program source code, etc.

AUTO NUMBER (^P#,^K#) - The ^P# command inserts a marker (a highlighted "#") 
    in the text to stand for a sequential number in a list, for example:
             #.  First item.
             #.  Second item...
    You can then mark the list off as a block (see BLOCK COMMANDS), and use 
    the ^K# command: VDE will insert the numbers (1, 2, etc) in place of the 
    markers.  You will be asked for the starting number; the default is of 
    course 1.  (Once this is done the markers disappear.  For frequently 
    revised lists, leave the "#" markers in the file on disk; use ^K# just 
    before printing, and do not save afterward.)

AUTO SAVE (^KA) - You can instruct VDE to save any changes you have made to 
    disk automatically, at regular intervals.  This can ensure that you don't 
    lose too much work if you make a mistake, have a power outage, etc.  The 
    ^KA command lets you set the interval (1 to 255 minutes), or turn this 
    feature off entirely (0).  Just press [Ret] to restore the default, 
    normally 0.  [This can be changed with VINSTALL.]
         Notes: will not work on untitled files; if editing multiple files, 
    will not activate until you return the cursor to a file.

BLOCK COMMANDS (^K-B,K,U,Z,Y,C,V,W,PB; ^QB,K) - A block of text is delimited 
    by two markers, which remain in memory until reset or deleted.  ^KB marks 
    the beginning of the block; ^KK marks the end.  ^KU unmarks the block, 
    removing any marker(s) set.  The block operation commands all require a 
    block to be marked:
         ^KY goes to and deletes the block (including markers).
         ^KV moves the block (including markers) to the present cursor 
    location; ^KC simply copies it, leaving the original marked.  Any place 
    markers present are not transferred.  (The cursor cannot be IN the block.)
         ^KZ "zooms into" a block: the rest of the text is hidden, and the 
    block is temporarily treated as the entire file.  This can serve a number 
    of purposes, from simply concentrating attention on one portion of a text, 
    to limiting the scope of many VDE commands (^QA, ^B, ^KI...) to that 
    portion.  Use ^KZ again to zoom back out.  In zoom mode: pagination is 
    off; you CAN use block operations, though any block markers will disappear 
    when zooming back out; if you save (^KS), VDE will automatically zoom back 
    out of the block first.
         ^KW writes the block text to a disk file; you will be asked for the 
    filename (and optional mode).  Normally this will overwrite any pre- 
    existing file; however, you can choose instead to append the text at the 
    end of the file, by typing a "+" before the filename:
                  Write to file: GORT        overwrites
                                 +GORT       appends
         The ^QB command, from wherever you are in the file, moves the cursor 
    to the block start; ^QK moves to the block end.
         ^KPB (^KP with B option) prints the block text only.  (See PRINTING.)

DELETING (^G,Del,^Del,^T,^Y; ^Q-Y,Del,T) -  ^G or ^[Del] deletes the character 
    to the right of the cursor.  Normally, as in WordStar, [Del] deletes the 
    one to the left, and [BkSp] (^H) moves left without deleting.  [BkSp/Del 
    behavior can be changed.]
         ^T deletes an entire word to the right (up to 255 characters).
         ^Y deletes the entire current line.  ^QY deletes the part of the 
    line to the right of the cursor; ^Q[Del] deletes the part to the left.
         ^QT deletes to the next occurrence of a specified character (up to 
    4095 characters).  EXAMPLE: ^QT. (period) deletes to the end of the 
    sentence.  Special case: ^QT^M ([Ret]) deletes to the next HARD CR, the 
    end of the paragraph.
         Accidentally deleted text can be recovered (see UNDELETING).

FILES (^K-L,R,J,F) - ^KL loads new file(s) to edit, REPLACING the current one.  
    (If the file has been modified, you will be prompted to confirm this.)  
    You may enter either a single filename or a list delimited with commas 
    (see SYNTAX).  If you want to load file(s) in ADDITION to the current 
    one, use AltL instead (see MULTIPLE FILES).
         ^KR reads in the contents of a disk file, inserting the text at the 
    current cursor position.
         ^KJ deletes any disk file you specify.  (If you need more complex 
    file utilities, remember that you can run any DOS command with AltR.)

         All these commands prompt for a specific filename.  If you are 
    unsure, or would rather see a directory first, you can call up the file 
    browser by pressing [Ret] alone (for *.*), or typing a filename with 
    wildcards (eg \WORK\*.BAK).  Note: if you want to begin an untitled file, 
    press ^J or ^[Ret], instead of [Ret], at the ^KL prompt.

         The file browser can also be called directly with the ^KF command.  
    You may specify a directory and/or filename mask, and the files will be 
    alphabetically listed.  (The default, if you just press [Ret], is the 
    current file's directory, and all files *.*.)  Files display in uppercase, 
    directories in lowercase.  If all items will not fit on the screen, you 
    will see "..." at the end to indicate that there were more.  [Note: 
    display of COM/EXE files can be suppressed.]
         To remove the display, press [Esc] or [Space].  But while it is on 
    screen, you may also select one of the files shown, by moving the cursor 
    to it with the arrow keys.  Then, you can press:
              [Ret] to load this file instead (see ^KL);
              ^L    to load it as an additional file (see AltL);
              ^R    to read it into the current file (see ^KR);
              ^Y    to delete this file.
    If the file you want to load/read requires a different file mode, you can 
    first press "/" and the correct mode letter (A,N,W,5,P,X, or space).
         You can also select a directory, in which case you may press:
              [Ret] to view its contents;
              ^Y    to remove it (if empty).

FIND/REPLACE (^Q-F,A; ^L) -  ^QF is the command to FIND a string.  The 
    search normally proceeds from the cursor position forward, and is case 
    (upper/lower) sensitive.  The character "^_" (Ctrl-underline) functions as 
    a wildcard: it will match any single character.  Control codes, like ^M 
    for newline, can be included (with the ^P prefix where needed).  Graphics 
    characters can be included using AltG.  Examples:
           Find: ^MLABEL       matches "LABEL" at start of line only;
           Find: 4^_^_01       matches "42201", "47401", etc;
           Find: ^_ank         matches "tank", "Bank", etc.
        ^QA is the REPLACE command.  It asks for a string to find, as above, 
    then what to change it to.  The cursor will be placed in succession on 
    each occurrence of the string, starting at the cursor location.  (You will 
    see the prompt "Chg?" in the header.)  To change this instance, press "Y";  
    anything else skips to the next.  To change all further instances without 
    being asked, press "*".  [Esc] cancels at any time.
         There are several options for find/replace.  After you enter the text 
    string(s), you will be prompted to enter any of the following:
           "B" = search Backward through the file;
           "U" = case insensitive search (ignore Upper/lower distinction);
           "G" = search Globally (from start or end of file);
    and further, for replacing:
           "A" = Align (reform) paragraphs again after each replacement;
           "N" = No query: replace all instances without asking.
    If you don't want to be prompted for options, finish entry of the find 
    string (for ^QF) or replace string (for ^QA) by typing ^J instead of 
    [Ret].  (^[Ret] is also ^J on most keyboards.)
         Notes:  The "N" option is automatically assumed whenever ^QA is used 
    in a macro.  [Uppercase can be set as your default; if so, specifying 
    "U" reverts to case sensitive search.]
         ^L repeats the last ^QF or ^QA command.  For ^QA, you will be asked 
    whether you want to replace the found string.  In both cases, the "B", 
    "U", and "A" options remain as last specified.

GRAPHICS (AltG) -  You can enter an IBM graphic character into the file text 
    with the AltG command.  You will be presented with a menu of up to 32 
    characters (labeled A-Z,1-6) to choose from; the default set contains some 
    nice box parts and other useful things, and has room free for other 
    characters that might be loaded.  [The default set can be modified.]
         Any unused menu entry can be defined on the spot.  Type "=", then the 
    code (A-5) to change.  You can then select the desired character from the 
    complete graphics set, by moving the cursor to it and pressing RETURN.  
    Alternatively, if you press any other key, you may enter the extended 
    ASCII code in either hex (2 digits 80-FF) or decimal (3 digits 128-255) 
    format.  Example: a Greek alpha can be entered either as "E0" hex or "224" 
    decimal.  Once defined in the menu, the graphic can be entered into the 
    file; its definition cannot be changed again while editing.
         NOTE: In addition to the 128 graphics characters, the code ^Z (1A, or 
    026) may only be entered as a graphic.  (In contrast, ^PZ embeds a place 
    marker.)  Furthermore, if ^P is used to embed codes 1C-1F or 7F (028-031 
    or 127) they will also appear in the graphics table.
         CAUTION: If you load a file containing many graphics (or binary data 
    that will be interpreted as graphics), VDE will try to add each character 
    to its table.  If the graphics table fills up, any further graphics will 
    be replaced by fuzzy blocks (graphic #6)!  You will see an error message, 
    and the file will become "untitled", to guard against saving to disk and 
    corrupting the file.  If you frequently work with graphics characters you 
    will want to keep your default table relatively empty to avoid this.
         Graphics are stored in disk files in accord with the current file 
    mode.  Printing of graphics depends on whether your printer is installed 
    as an IBM graphics printer [see VINST.DOC].  If so, they will print 
    directly.  If not, VDE will "emulate" them, choosing standard ASCII 
    character overstrikes that come as close as possible.  This usually works 
    well, especially for the foreign language characters.

HEADER (^OQ) -  VDE gives you an informative "header" at the top of the screen.  
    If you like, you can toggle this display on and off with the ^OQ (Quiet) 
    command.  [It can also be suppressed by default.]  Turning the header off 
    lets you see more text, and can speed up editing on slow terminals.
    ------------------------------------------------------------------------
    + VDE.DOC  /A        Pg 14   Ln 11   Cl 48   Ins   vt hy AI DS MR " ^K_
                        (OP/BZ)                 (WIn)             (PS)
    ------------------------------------------------------------------------
         "+" = Multi-file flag.  Present if other file(s) are being edited.
         "VDE.DOC /A" = Current filename and mode.  The full drive and path 
    information, along with other files being edited, can be displayed with 
    the ^KI command (see INFORMATION).
         "Pg 7, etc" = Current position in file by page (in document modes), 
    line, column.  If pagination (^OP) is off, you will see "Pg 0" (in 
    document modes), "OP" (in "N" mode), or "BZ" if ^KZ is in effect.
         "INS","WIn" = Insert mode (^V) or Word Insert (^]) on.
         "vt" = Variable Tab mode on. (^OV)
         "hy" = Hyphenation enabled. (^OH)  Doesn't display in "N" mode.
         "AI" = Auto Indent mode on. (^OA)
         "DS" = Double spacing. (^OS)
         "MR" = Margins released. (^OX)  Doesn't display in "N" mode.
         "PS" = Proportional spacing. (^OJ)  Overridden by MR.
          '"' = Quote mark appears during macro recording (Esc").
        "^K_" = WordStar key prefixes (and some prompts) display here.

HYPHENATION (^OH) -  VDE can't hyphenate automatically, but it can recognize 
    hyphens in the text, treating them as a legitimate place to break a line.  
    If you have a long word running over the margin, you can type a hyphen, 
    and wordwrap or reformat will break the word there.
         VDE also can't DE-hyphenate automatically.  If VDE is trying to 
    reformat and finds a hyphen at the end of a line, it will have to ask YOU 
    what to do: you will see the prompt "Remove?" in the header.
        Press "Y" to remove the hyphen and space, joining the word;
              "N" to leave the hyphen, but still join the word;
            "Esc" to ignore the hyphen, NOT joining the word.
    Typically you would choose "Y" for "soft" hyphens that you introduced to 
    break up a word ("intro-duction"); "N" for hard hyphens that are part of a 
    word ("vis-a-vis"); and "Esc" for punctuation (dashes -- etc).  After your 
    choice, reformatting will proceed automatically.
         You can toggle hyphenation on and off with ^OH.  If off, hyphens are 
    not recognized.  [The ^OH default can be changed.]

INFORMATION (^KI; AltI) -  ^KI displays an Information message telling you:
      - the full directory, name, and timestamp of the current file;
      - whether (Y/N) the file has been changed since last saved;
      - any print toggles (^B,D,S etc) that seem to be mispaired;
      - a WORD COUNT for documents (useful for professional writing);
      - the current size of the file in bytes or K (1k = 1024 bytes);
      - the number of bytes of memory used and free in this text segment;
      - the size (in K) of the largest block of RAM still free;
      - the names of all OTHER files being edited.
         For large files, all this may take a moment to calculate.  Note that 
    words are not counted in non-documents.
         The AltI command displays the VDE version, date, and usage policy.  
    (An uninstalled copy of VDE does this automatically on startup.)

INSERTING (^V,[Ins],^],^_,^N) -  ^V or [Ins] toggles Insert mode on/off, and 
    ^] toggles Word Insert.  When both are off, VDE is in overwrite mode: any 
    text to the right of the cursor is replaced as you type.  With Insert (^V) 
    ON, what you type is inserted; any existing text is carried to the right.
         With Word Insert ON, you can type over the letters of a word, but 
    anything you add at the end of the word (when the next character is a 
    space) is inserted; this is a handy feature for revising text.
         The ^_ (or ^-) and ^N commands (insert space, CR) are most useful 
    when Insert is off.  [The default insert status can be changed.]

LINE SPACING (^OS) -  The ^OS command toggles between single and double line 
    spacing.  In double space mode, the following functions generate double 
    carriage returns:  [Ret] (^M), Insert CR (^N), Reform (^B), Wordwrap.  You 
    can easily mix single and double spacing; the ^B command can convert 
    between the two.
         Note: a single-spaced file can also be printed out double-spaced with 
    the "D" option of the ^KP command (see PRINTING).

MARGINS (^O-R,L,X,C,F) - ^OR sets the RIGHT margin, and enables wordwrap, 
    reformatting, and centering.  At the prompt "Column:" enter the column 
    number (2-255), or just press [Ret] for the current cursor column.  If the 
    value entered conflicts with the current left margin, the left margin will 
    be removed.  There are two special values for the right margin:
      1 = all formatting is disabled (as in "N"ondocument mode files).
      0 = unlimited right margin: text can be reformatted to undo wordwrap.
         ^OL sets the LEFT margin in an identical fashion; of course, the 
    value must be less than the current right margin, so you may need to set 
    the right margin first.
         ^OX temporarily RELEASES the margins (resets them to 1), allowing you 
    to type outside them.  Use ^OX again to restore the margins.
         ^OC CENTERS the current line with respect to the margins, if set.  
         ^OF sets the current line FLUSH right, if the right margin is set.

MATCHING UP FILES (AltM) -  This command is used to locate small differences 
    between two largely similar files (perhaps an earlier and a later revision 
    of a text).  In order to use it, you must first load these two files 
    (AltL), then split the screen between them (AltW), and position the cursor 
    on corresponding lines in both files (for example, the top).
         Then press AltM.  Starting from these positions, VDE searches for any 
    difference between the files.  If there is one, VDE will stop on those 
    lines, showing the disagreeing passages side by side.  If you want to 
    continue, reposition the cursors to corresponding lines if necessary, and 
    press AltM again.  If no further differences are found, VDE will report 
    "Not Found"; the files match.

MOVING AROUND (Arrow keys; ^F,^A; ^Q-R,C,I,P; AltO) -  VDE supports two sets 
    of Arrow keys, which function interchangeably.  The first is the actual 
    IBM cursor keypad (the four arrow keys); the second is the WordStar "arrow 
    key diamond" ^E,^X,^D,^S.  These keys move the cursor up, down, right, and 
    left respectively.
         Preceded by ^Q-, any arrow key moves more Quickly: to the top or 
    bottom of the screen, to the left or right end of the line.
         There are also two word movement commands: ^F moves right, to the 
    start of the next word; ^A moves left, to the start of the last (or 
    current) word.  Both have a maximum travel of 255 characters.
         For quickly covering large distances, ^QR and ^QC move all the way to 
    the beginning and end of the file, respectively; ^QI moves directly to a 
    given page (for documents) or line (for non-documents).  ^QP returns the 
    cursor to its "previous" position -- before the last command causing a 
    large movement was executed.  (^QP can be used again to cycle between 
    these two positions in the file.)
         Finally, the AltO command displays an "overview bar" at the top of 
    the screen.  The length of the bar corresponds to the filesize, and the 
    current position is marked so you can see where you are:
            | ooo*ooooooooooooooooooooooo                      |
    You can move the place marker left or right with the arrow keys; the 
    cursor remains in the original (current) position.
            | ooo_oooooooooooo*oooooooooo                      |
    To move to the selected position, press [Ret]; press [Esc] instead to 
    cancel.  (If the file is empty or too small, AltO does not function.)

MULTIPLE FILES (AltL,B,N,X,Q,C,P) -  VDE allows you to edit several different 
    files simultaneously, if you have enough memory.  This can be done from 
    the command line, by giving the filenames separated by commas.
         Otherwise, to Load additional files, press AltL.  You may specify a 
    single filename, or a list delimited with commas (see SYNTAX); for an 
    untitled file, press ^J or ^[Ret].  You can also access the file 
    browser with [Ret] or wildcards (see FILES).  (This command will fail 
    if you run out of memory, or are already editing the maximum number, 
    or another file by that name.)
         Once multiple files are in use, AltB and AltN can be used to cycle 
    back and forth through the files being edited.  If you Quit or Exit 
    (^KQ,^KX) from one file, you will be returned to the previous one.
         AltX exits ALL files immediately, saving any changes made.  AltQ 
    quits ALL files immediately, without saving; if any of them have been 
    modified, you will be prompted once to confirm this.
         AltC Cuts a marked block of text, placing it in a buffer for later 
    recovery.  (The original remains, unless you delete it with ^KY.)  AltP 
    Pastes in the previously cut text at the cursor position.  The text in the 
    buffer remains available for further pasting.  (Cut and Paste thus allow 
    block copying and moving between files.)

PAGINATION (^OP; ^PL) -  The ^OP command sets the page length.  Enter a value 
    0 to 255 lines, or just press [Ret] to restore the default.  [Normally 56.]
         When the value is nonzero, it determines the page and line shown in 
    the document header ("Pg xx Ln xx"), and all page functions in the Print 
    routine (pagination, headers, start/stop at page) are enabled.  A formfeed 
    will be sent after printing.  [VDE does not send a formfeed before 
    printing; install one in your printer initialization if you want.]
         When the value is zero, pagination is off.  The header will say "Pg 0 
    Ln xxxx", showing you the absolute line number in the file.  Also, 
    printing occurs with no page breaks.  (This is useful for printing small 
    things right after each other on the same sheet; or, in conjunction with 
    the "*" option, to print out multiple copies of index cards, labels, etc.)
         The ^PL command embeds a formfeed (^L) in the text.  This code 
    functions as a page break: you can type ^PL at the start of a line to 
    begin a new page.  In document file modes, this will be reflected in the 
    header page/line count, use of ^QI and other page-related commands, etc; 
    it does not affect line count in "N"on-documents, or when pagination is 
    off (^OP 0).

PLACE MARKERS (^PZ; ^QZ) -  You can set any number of temporary place markers 
    in the text with ^PZ (they display as highlighted "Z").  The ^QZ command 
    moves the cursor to the next place marker in the file, cycling back to the 
    top of the file as needed.  (Place markers are NOT saved to disk.)

PRINTER CODES (^P) -  This command prefix is used to enter "control codes" in 
    the ASCII range 00-1F or 7F into the text, usually for purposes of printer 
    control.  Most codes are entered in a standard fashion: ^P@ embeds ^@, ^PA 
    embeds ^A, etc; and in documents they display as highlighted letters @, A, 
    etc.  (In non-documents they display as graphics.)  The EXCEPTIONS are:
            1A (^Z) can only be entered as a graphic via AltG (see 
         GRAPHICS), not via ^PZ (see PLACE MARKERS).  Many programs 
         treat this code as an end of file marker; use caution.
            06 (^F) displays as the marker "#" (see AUTO NUMBERING).
            1C-1F,7F (^\,^],^^,^_,Del) always display as graphics.
    The IBM extended codes 80-FF also must all be entered with AltG.
         Several common control codes produce special effects in printing:
          ^PH - backspace - overstrike previous character
            M - carriage return - enter a CR without a LF to overstrike line
            I - hard (ASCII) tab - printers respond variously to this
            L - formfeed - will cause a page break
         In addition, in place of complex "escape sequences" for effects such 
    as underlining, in document files VDE lets you enter a single marker, 
    which will be translated into the proper codes during printing.  VDE 
    supports a set of 13 codes for this purpose: seven toggles, six switches.  
    [See VINST.DOC on how to install the proper commands for your printer.  
    Without such installation, only ^PS and ^PX will work.]  The conventional 
    WordStar meanings of these codes are:
       Toggles: ^P^B  boldface        Switches: ^P^Q  (user def 1)
                  ^D  ("doublestrike")            ^W  (user 2)
                  ^S  underline                   ^E  (user 3)
                  ^Y  italic ("ribbon")           ^R  (user 4)
                  ^T  superscript                 ^A  alternate pitch
                  ^V  subscript                   ^N  standard pitch
                  ^X  strikeout [has no installation]
    but you can use them for anything you like.  "Toggles" are good for 
    features like underlining that are turned on and off; enter them twice, at 
    the beginning and end of the desired text.  "Switches" are better for 
    multi-valued parameters like character pitch; enter them once.
         EXAMPLE: using ^PS for underlining, you could type:
             This is how you get ^PSunderlined text^PS in VDE.
    If toggles are not properly paired, you will find print effects continuing 
    throughout the rest of your document.  To save time and effort, use the 
    ^KI command to check for this before printing.  (If an "S" appears under 
    the "^Check" heading, there is an unpaired ^S somewhere.)

PRINTER DRIVERS (AltV) -  Since many people use more than one kind of 
    printer, VDE accomodates two different printer drivers, a primary and an 
    alternate.  Before printing a file, you can select which one is active 
    using the AltV command.  [You can change the two drivers with VINSTALL.]

PRINTING (^KP) -  The ^KP command Prints the file from memory.  You will be 
    asked for a set of "Options:", at which point you may enter one or more of 
    the following, in any order:
       '...'  sends a string of escape commands to printer before printing.
       D      DOUBLESPACES the printout.
       B      prints only the currently marked BLOCK.
       Tnn    sets the TOP MARGIN to nn lines.      [The default margins can
       Lnn    sets the LEFT MARGIN to nn columns.    be set with VINSTALL.]
       ^      FILTERS control characters ^X so they print out as text "^X".
       *nn    prints the entire job out nn TIMES (nn=1...255).
       P      PAUSES for your keystroke before each page (sheet feed).

       N      NUMBERS pages sequentially, at top right.
       C      numbers pages at bottom CENTER.
       @nn    begins printing AT page nn.
       #nn    prints only (up to) a TOTAL of nn pages.
       O,E    prints only Odd or Even pages (print one, then run the paper 
            back through and print the other, for double-sided printing).
       =nn    MAKES the first page number show as nn.
       "..."  uses the quoted string as a HEADER.  The string will print in 
            the top right corner of each page, followed by the page number if 
            "N" was selected.  (Maximum length is 50 characters.)
              Note: you can include the current Time or Date in the header 
            simply by entering ^T or ^D, respectively.
    (The paging options (N/C,@,#,O/E,=,"") are NOT allowed if the page length 
    is set to 0 (^OP), or if 'B'lock print was chosen.  'C' cannot be used 
    together with 'N' or "".)

       (FILENAME)   redirects printer output to a disk file.  All print 
            control codes will go into the file just as they would have been 
            sent to your printer.  If you want to append the output to an 
            existing file, type a "+" before the name: "(+FILENAME)".

              EXAMPLE 1:      Options:  L12P
    will print the file with a left margin of 12, pausing before each page 
    until you press a key (other than Esc).
              EXAMPLE 2:      Options:  @6#2=21"(^T) Instructions, page"N
    will print the 6th and 7th pages, numbering them 21 and 22, with a header 
    like this:  "(3:41 PM) Instructions, page 21".
              EXAMPLE 3:      Options:  BD(+SCRATCH)
    will append the print output of the current marked Block, double spaced, 
    to the disk file SCRATCH.

         NOTES:  If you are in "W" or "5" file mode, any dot commands in the 
    file (lines beginning with ".") will not be printed.
         You can abort printing at any time by pressing Esc.

PROPORTIONAL SPACING (^OJ) -  If your printer has a proportionally spaced 
    font, you can get VDE to use it, and to format text so that it will print 
    with more appropriate margins.  With ^OJ on, your printer will be put in 
    proportional mode when printing (^KP); and all wordwrap and reformatting 
    (^B,^OC,^OF) will take advantage of a built-in table of character widths, 
    resulting in a better justified printout.
         In proportional mode, the margin settings need to be interpreted in 
    inches rather than characters; VDE assumes 10 cpi for convenience, so that 
    a right margin (^OR) of 70 means 7.0".  (Note: words will often seem to 
    extend "beyond" the right margin column on screen when editing.)
         [See VINST.DOC to install codes for proportional mode on your 
    printer, and to modify the character width table with VINSTALL.]

RULER LINE (^OT) -  To help you align text properly, ^OT displays a "ruler 
    line" above the text.  Type ^OT again to remove it.  A moving pointer 
    indicates the current column.
         In each column you will see one of several symbols: the arrow "v" is 
    the cursor column; "L,R" designate the current margins; "." indicates 
    areas outside the current margins, "-" within them.  Also, tab stops are 
    marked by either "|" (Variable) or "!" (Hard).  Examples:
        ("A" mode)      L-----|-----|--------v--|--------------R........
        ("N" mode)      !.......!.......!....v..!.......!.......!.......

RUN COMMAND/SHELL (AltR) - Typing AltR causes VDE to produce a replica of the 
    DOS prompt (eg, "C:\WORK>").  At this point you are still in VDE, 
    and all its input rules apply (press ^U to cancel, etc) -- but you can 
    execute any command just as you would under MSDOS.  You can copy or rename 
    files, or run any other program you like, and afterwards VDE will prompt 
    you to "Press Esc" (or Space), upon which you will return to your 
    undisturbed VDE editing session.  VDE leaves no disk files open, so you 
    can do anything you like with an AltR command.  (Exception: don't load new 
    memory-resident utilities; this fouls up the DOS memory allocation.)
         In addition, there is a special VDE command that can be typed at this 
    "fake DOS" prompt:  SHELL.  This lets you out into what is known as a 
    Command Shell: you are actually back IN MSDOS, and can use any number 
    of commands or move around as you like; when through, you need to type the 
    command EXIT to leave the Shell.  At this point you will be back in VDE, 
    and will see the "Press Esc" prompt to return to editing.
         NOTE 1: VDE must be able to find your command interpreter (usually 
    COMMAND.COM), and there must be enough free memory to load it and run the 
    chosen program.  VDE reads the COMSPEC environment variable; if your 
    CONFIG.SYS file doesn't include a line like SET COMSPEC=C:\COMMAND.COM, 
    you should add one.
         NOTE 2: Using the AltR command in MACROS is tricky.  Any keyboard 
    input expected by the program or shell must be typed by YOU; it will not 
    be taken from the macro.  And you must remember to include in your macro 
    the [Esc] keystroke needed to return to editing in VDE after it finishes.

SAVE/EXIT (^K-N,S,X,D,Q) - ^KN renames your work.  This allows you to change 
    the filename in the header before saving.  (Accepts mode option; you can 
    also specify a mode alone, eg "/W", simply to change the current mode.)  
    Caution: if you give the name of a file that already exists, it will be 
    overwritten
         ^KS saves your work so far: what's in memory is written to disk under 
    the filename in the header.  (You must have a filename; one will be 
    requested if necessary.)  If the file has not been modified, you will be 
    prompted to confirm whether you meant to resave it anyway.
         A copy of the existing file is preserved as a BACKUP FILE (with 
    extension ".BAK") each time you save changes.  [If you prefer not to use 
    BAK files, you can suppress their use with VINSTALL.]
         There are several different commands for finishing up:
         ^KX saves your work (if modified), and then EXITS to DOS.
         ^KD (Done) saves your work, then loads a new file to edit.
         ^KQ just QUITS, without saving to disk.  If the file has been 
    modified, you will be prompted to confirm that you meant to do this!

SCREEN CONTROLS (^W,^Z; Esc^,v,<,>; ^O-E,D,Z; AltE,A) -  VDE provides a 
    number of commands affecting the screen display:
         The ^W and ^Z commands scroll the screen up and down a line at a 
    time, without moving the cursor in the text (unless necessary).
         Preceded by Esc-, any arrow key shifts the SCREEN, leaving the cursor 
    in place: the text view moves up/down 1/4 screen, or right/left 32 
    columns.  (The cursor must be past column 32 to allow horizontal shifts.)
         Preceded by ^O-, either UP arrow key (eg, ^OE) makes the current text 
    line the top of the screen.
         The ^OD command shows you a preview of the screen with all non- 
    printing codes (markers, ^P codes, etc) hidden.  This is handy for making 
    sure that text is aligned properly.  Press [Esc] to continue editing.
         The ^OZ command temporarily "Zaps" (blanks) the entire screen; good 
    for avoiding CRT burn-in, or just protecting work from prying eyes or 
    fingers.  Restore the screen by pressing [Esc].  This is also useful if 
    some other software (like a resident utility) has messed up the screen: 
    type ^OZ,Esc and VDE will completely restore it.
         The AltE command lets you see more lines of text on screen, if you 
    have an enhanced graphics adapter.  It toggles between normal 25-line 
    mode and a compressed mode of 43 (EGA) or 50 (VGA) lines.
         The AltA command works ONLY with the ATI EGA Wonder video card; do 
    not use it otherwise.  This toggles between normal 80-column mode and ATI 
    132-column mode.  It can be used alone, or in combination with AltE to 
    provide a 43x132 screen.

SPLITTING FILES (AltS) -  If you encounter a text file that is too large for 
    VDE to load and edit, you can divide it into manageable chunks with the 
    Split command.  Suppose you have a big file HUGE.DOC.  Type AltS, then 
    answer at the prompt:
           Split file, output name (w/#):  HUGE.DOC, PIECE.#
    VDE will go through the file HUGE.DOC and write out a series of smaller 
    files PIECE.1, PIECE.2 etc, which can then be edited.  (You can tidy up 
    the transitions between them with Cut and Paste, if you like.)
         Note that the output name must be separated from the input by a 
    comma, and must contain one # sign, which will be replaced by a 1, 2, etc 
    in sequence.  (The above example could have used HUGE-#.DOC, etc.)  Make 
    sure you have enough disk space for the output files.

TABS ([Tab],Shft[Tab],Esc[Tab]; ^O-V,I,N) -  There are two Tab modes, Variable 
    and Hard; the ^OV command toggles between them.  In Hard Tab mode the Tab 
    key produces an actual ^I (ASCII TAB); whether this overwrites any 
    existing text depends on the Insert toggle.  Hard Tabs display at fixed 
    intervals of 8 screen columns.
         In Variable Tab mode, the Tab key moves the cursor to the next 
    variable tab stop.  Existing text is not overwritten; spaces are added at 
    the end of a line as needed.  Up to eight tab stops may be set with ^OI 
    and cleared with ^ON; the defaults are in columns 5, 15, 35, and 55.  
    [These are reconfigurable.]  The Shft[Tab] command tabs backwards (left), 
    useful for moving around in tables, etc.
         You can always get a Hard Tab with ^PI, or a Variable Tab with 
    Esc[Tab], no matter what tab mode you are in.
         The set/clear commands prompt for a column number, or you can press 
    [Ret] for the cursor column.  In addition, the Set command ^OI accepts 
    two further options, both of which replace all earlier tab settings:
              @nn           Set tabs every "nn" columns
              #n1,n2,...    Set tabs to columns "n1,n2,..."
    You can simply clear all variable tabs by typing "@" or "#" alone.

TIME/DATE (AltT,D) -  If your MSDOS system maintains the system clock 
    properly, VDE can read it and insert the current time and date in your 
    file automatically.  Just press AltT for the Time, or AltD for the Date.  
    The string will appear at the current cursor location, as though you had 
    typed it in yourself: for example,
              1:21 PM            [or 13:21 -- format can be selected]
              January 15, 1988   [or 1/15/88, 15 January 1988, 15.1.88]

UNDELETING (^U) -  The undelete function can be used to recover any amount of 
    text lost by the last deletion operation (whether character, word, line, 
    or block).  This includes an overstruck character.  The text will be 
    replaced at the current cursor location.

UPPER/LOWER CASE (^^; ^K",',^) -  The ^^ (Ctrl-caret or ^6) command reverses 
    the case of the character at the cursor, if it was a letter, and moves to 
    the next.
         The ^K^ (^K-caret) command reverses all text in a marked block (see 
    BLOCK COMMANDS); ^K" makes all block text uppercase, ^K' lowercase.

WINDOWS (^OW; AltW,F; ^[PgUp,Dn]) -  VDE can split the screen into two windows, 
    showing you either two parts of the same file or two different files.  
    AltF moves the cursor back and forth between the two windows.  The ^[PgUp] 
    and ^[PgDn] keys can scroll through BOTH windows in synchronization.
        The ^OW command is used in a SINGLE file; it creates a window in the 
    bottom half of the screen, duplicating the current file text.  You can 
    move to a different place in the file within this window, and continue 
    editing, with the original text still in view in the top window.  (Note: 
    any modifications made to the file will not be reflected in the inactive 
    window until you return to it.)  Typing ^OW again removes the Window.
        The AltW command splits the screen Window between two DIFFERENT files 
    being edited, showing you both at once.  (If the file you get in the 
    window isn't the one you wanted, find it by cycling through with 
    AltB/AltN.)  Typing AltW again restores fullscreen editing.

WORDWRAP & REFORMAT (^B, ^OB) -  WORDWRAP is automatic in all document modes 
    whenever the right margin is set.  Any text entered will be kept within 
    the current margin settings.  The end of a paragraph is marked by a "HARD 
    CR", which occurs when you press the [Ret] key.  (This is a CR immediately 
    following a nonspace.)  In contrast, when wordwrap occurs you get a "SOFT 
    CR" (which is actually a CR with a space before it).  You can change a 
    hard CR into a soft one, or vice versa, by deleting or adding a space at 
    the end of the line; hitting [Ret] also hardens a soft CR.  The 
    distinction between hard and soft CRs is only important when reformatting.
         ^B REFORMATS from the line the cursor is on, to the end of the para- 
    graph, according to the current margin settings and line spacing.  (Thus 
    ^B is used not only to reshape a paragraph after editing, but also to 
    change its margins and line spacing.)  If the current line is indented 
    relative to the next one, VDE interprets that as paragraph indentation.  
    To reformat an entire file (WordStar ^QQB) use a MACRO: Esc[ ^B CR Q*.
         ^OB toggles DISPLAY OF HARD CRs.  Hard CRs, otherwise invisible, are 
    normally displayed as a left-arrow character in document files.  Some may 
    find these distracting, so they can be turned off.

=========================  4. GENERAL INFORMATION  ===========================


COMPATIBILITY - VDE is "compatible", to various degrees, with several other 
    word processors, including WordStar, WordPerfect, and XyWrite, and can be 
    a useful accessory for users of these programs.  (For example, I generally 
    do all my writing in VDE, using its speed and extra features; but 
    sometimes I need to take advantage of WordStar's more sophisticated 
    printing abilities, or ability to edit larger files.)  See FILE MODES.

         WORDSTAR: Highly compatible.  /W file mode supports all WS 3-4 
    features except right justification, which it removes.  /5 file mode also 
    removes all the additional WS 5 embedded codes (formatting, fonts etc), 
    which are not supported in VDE.  With these exceptions, document files can 
    be exchanged freely between VDE and WS.
         Aside from the absence of a "No-File" menu, VDE operates very much 
    like WS, although it does lack some WS commands, and also has some new 
    ones of its own.  VDE's macro commands are completely different (they were 
    developed before WS had macros!).  Aside from that, note the following 
    differences in common commands:
                      DIFFERENCES IN COMMAND SET
        COMMON USE       WS 4.0      VDE 1.3          VDE USE
    Repeat command        ^QQ         Esc[      Macros are more powerful.
    Hide block            ^KH          ^KU      Actually unmarks block.
    Paragraph indent      ^OG          ^OA      General purpose auto-indent.
    Set Place Mark       ^K0..9        ^PZ      Not individually numbered.
    Go to Place Mark     ^Q0..9        ^QZ      Cyclic.
    Time, Date stamp     Esc!,@       AltT,D
                  DIFFERENCES IN MEANING OF COMMANDS
          COMMAND           WS USE                    VDE USE
          ^^ (^6)       Soften hard CR          Transpose upper/lowercase
           ^KN          Column block mode       Rename current work
           ^OB          Display soft spaces     Display hard CRs
           ^OF          Ruler from text         Flush right
           ^OP          Preview mode            Set page length
           ^OJ          Right justification     Proportional spacing
    Note also that VDE does not obey WS "dot commands" in text, though in /W 
    or /5 mode it will avoid printing them.  You can get a page break 
    (WordStar .PA) in VDE with the ^PL command.

         NOTE: Because VDE has no embedded margin information, files WRITTEN 
    in /P or /X mode do NOT contain any formatting codes; however, they can be 
    read (and reformatted if necessary) by WordPerfect or XyWrite.
         WORDPERFECT - Limited compatibility.  /P file mode can READ WP text; 
    it recognizes margin changes, and print codes for bold, underline, super/ 
    subscript, and overstrike.  No other formatting features are supported.
         You can also edit in VDE using a command set much like WordPerfect's, 
    by loading the WP.VDF key definition file [see VINST.DOC].  It causes the 
    [F]-keys to call up the MenuBar in a manner similar to WP's commands.
         XYWRITE - Limited compatibility.  /X mode can READ XW text; it 
    recognizes margin changes, and print codes for bold, underline, and 
    italics.  No other formatting features are supported.

DIRECTORIES -  When editing with VDE, the default directory assumed by the 
    file commands (^KL,R,N,F,J; AltL) is that of the current file; when 
    editing multiple files, this can differ from one to the next.  The 
    directory does not display in the header, but can be seen with ^KI or at 
    the ^KF prompt.
         The current DOS directory remains unchanged, and it is the default 
    when using the AltR command.  (It can be changed with CHDIR under AltR.)

ERROR MESSAGES -  Press Esc or Space to continue.  "Error" alone means the 
    command used just won't work in this situation.  (Example: a block command 
    was used with no block marked.)  More specific errors are:
      "Out of Memory" - the file, block, or key string won't fit in RAM.
        "Invalid Key" - an illegal command key sequence was pressed.
  "Invalid Name/Path" - file not read/written because path does not exist,
                          or filename is a duplicate, or illegal (COM/EXE).
          "I/O Error" - file not found, disk full, invalid drive, etc.
    "Cannot Reformat" - word too long, or margins invalid.
          "Not Found" - the object of a search was not found.
  "Graphics Overflow" - too many graphics in file to fit in table.
        "Macro Error" - programming command misused, or recording overflow.

         IMPORTANT NOTE: On DOS 2.x systems, an attempt to access an empty 
    disk drive or to print when the printer is not online can produce a 
    critical error message directly from DOS, something like:
              "Device not ready; Ignore, Retry, or Abort?"
    If this should happen, correct the situation and press "R" for Retry.  
    Pressing "I" usually has no effect.  DO NOT PRESS "A", as this will exit 
    from VDE back to DOS, losing any text in memory!
         If, after recovering from such an error, the message is still on 
    screen, you can press ^OZ,Esc to redisplay your text.

FILE MODES -  VDE has six "file modes": "A"SCII, "W"ordStar, WordStar "5", 
    Word"P"erfect, or "X"yWrite document, and "N"on-document.  In general, the 
    document modes have wordwrap, pagination, and variable tabs; non-documents 
    have hard tabs.
         The file mode option can be specified along with the filename at any 
    VDE file function prompt (such as "Read in file:"), allowing you to read 
    or write text in whatever format needed.  [The default mode is /A, but 
    this can be changed, and exceptions declared, with VINSTALL.]
         Most VDE users will select /A mode for documents (word processing) or 
    /N mode for programming and other special applications.  Both modes use 
    plain ASCII text files, which are produced or accepted by virtually all 
    software (DOS, compilers, database, telcom, etc).
         The /W, /5, and /P modes allow VDE to read and write WordStar or 
    WordPerfect files (see COMPATIBILITY).
         The /X mode uses plain ASCII text, but without CRs at the ends of 
    lines -- CRs occur only at the ends of paragraphs.  These files can be 
    exchanged with XyWrite and most other word processors that use this text- 
    stream format (see COMPATIBILITY).

         CONVERSION:  You can easily use VDE to mix text from several 
    different formats, or to convert a file from one format into another.  
    Just specify the appropriate mode with each file loaded or read in, or 
    change to the appropriate mode (with ^KN) before saving.  (Note limits on 
    supported features in each format, above.)
         Normally, you must be sure to give the correct mode for any text you 
    are reading; otherwise it may not be read in properly, and you will have 
    to delete it or quit and try again.  Exception: when you are reading a 
    WordStar file into an ASCII file, or vice versa, you need not specify 
    modes; VDE's disk input routine can automatically recognize the text and 
    translate accordingly.

MEMORY -  VDE allocates memory for a file according to need, up to a maximum 
    of 64k.  (1k = 1024 bytes.)  If you check the usage of memory (^KI) you 
    will find that VDE compresses text: a file typically occupies 20-25% less 
    memory than its actual size.  Thus the largest file that can be edited 
    with VDE in 64k is roughly 80k.
         VDE runs well with anywhere from 128k to 640k RAM; the number and 
    size of files you can edit depends on the amount of memory you have.  If 
    you are running short of memory while editing, try exiting files you no 
    longer need, or cutting (AltC) an empty block to empty the cut buffer.
         Running a DOS command requires enough free memory (beyond VDE's 
    usage) to load a copy of COMMAND.COM and any programs you intend to run 
    under it.  You may not have enough memory to do this if you are editing 
    many files with VDE, or you have lots of memory-resident software (TSRs).

PROMPTS -  First, VDE has several simple prompts requiring you to confirm an 
    action by typing "Y" or "N".  These warning messages appear on line 1 
    (though they are NOT given when a macro is running):
         "Abandon changes?" - a file you want to quit has been changed.
         "Unchanged; save?" - the file you want saved hasn't been changed.
  "File exists; overwrite?" - such a file already exists and will be lost.
 "Not recoverable; delete?" - block to delete is too big for undeletion.

    These confirmation prompts appear at the right edge of the header:
               "Chg?" - change this instance of a string? (Y/N/*)
            "Remove?" - remove this hyphen? (Y/N/Esc)
                "Rdy" - press a key to print next page (Esc quits).

    There are a number of standard prompts for either numeric or string input, 
    like "Column:" or "Find string:".  You are expected to type in a string 
    (up to 65 characters).  The following control keys operate:
         Correct error:  [BkSp] (^H)          Erase entire entry:  ^X
         Finish entry:   [Ret] (^M) or (^J)   Abort operation:     ^U
         Replay last filename:  ^R  (except in Macro strings)
    Note that to get any of these codes into the string itself, you must 
    precede it with ^P (this includes ^P).
         EXAMPLE: to find a line beginning with a "*" (find "^M,*") type
                     ^QF^P[Ret]*[Ret].
    Graphics can also be entered into strings using Alt-G.


===========================  5. APPLICATION TIPS  ============================


DESQVIEW - VDE is "DesqView aware": it cooperates with time-sharing in the 
    multitasking DV environment.  For VDE to run properly in a DV window, you 
    must identify it as a "program that writes directly to the screen".

FOREIGN ASCII FILES - If you edit an ASCII file created by other software, you 
    may find that the file is properly formatted but full of hard CRs, making 
    it impossible to REformat.  There are two easy ways to solve this problem: 
    first, you can use ^QA to find "^M"s and selectively replace them with 
    "_^M".  But the best method is to use a macro program (this is one of the 
    examples you will find under MACRO PROGRAMMING.)

PROGRAMMING.  VDE (in "N"ondocument mode) makes a fine programmer's editor.
         A growing number of languages today include their own "integrated" 
    environment editor, that guides you straight to errors detected during 
    compilation.  You can use VDE in a very similar manner, if you have a 
    compiler or assembler that generates typical error messages (such as "Line 
    1091: Type of operands must match").  After saving your source file to 
    disk, just use the AltR command to run the compiler, with the MSDOS ">" 
    option to redirect output to a disk file; for example,
                     C:\WORK>compile prog.src >listing
    Then use AltL to load the error reports in LISTING.  You can go back and 
    forth between LISTING and PROG.SRC (windowing both if desired), using the 
    ^QI command to move to each line where an error was detected.

REDIRECTING I/O.  All the standard DOS device names are supported by VDE's 
    input and output routines: CON, LST, PRN, LPTx, COMx, AUX, NUL.  You might 
    find this useful one day, though I never have.  What it means, in 
    practice, is that you should not try to edit a file with one of these 
    reserved names, as VDE will try to read or write to the device.

SPELLING CHECKERS.  VDE has no integrated support for a spelling checker.  
    However, some such programs are designed to work in a standalone mode, 
    from the DOS prompt, with a filename argument, eg:
                     C:\WPROC>spellchk my.doc
    Once you have saved your text to a disk file, you can of course run such a 
    program with VDE's AltR command, then reload the file and/or misspelling 
    list and scan for any errors flagged.

STRUCTURED LANGUAGES.  VDE's auto-indent function (^OA) is convenient for many 
    structured programming languages including C and Pascal.  However, in 
    order to use it effectively in a non-document, you must either indent with 
    the space bar rather than the tab key, or set VARIABLE TABS using the ^OV 
    and ^OI commands (see TABS).  Auto-indent can't cope with the actual 
    (hard) tab characters normally inserted in non-documents when the [Tab] 
    key is pressed.

TRANSPOSING TEXT.  Often you may need to switch the order of letters, words, 
    or lines erroneously typed.  The "undelete" feature can be exploited to 
    move text, rather like a quick-and-dirty block move.  For example, if the 
    cursor is at the start of a word, the sequence of commands ^T^F^U (which 
    of course can be assigned to a macro key) will swap that word with the one 
    following it.  Similarly, ^Y^X^U will swap two lines, while ^G^D^U 
    transposes two letters.


==============================================================================

     For further information, see accompanying files:
            - VINST.DOC for information on MACROS and the use of VINSTALL
            - VDE.UPD for version history, including recent changes

         ---  Eric Meyer, 401 12th Ave SE #139, Norman OK 73071  ---

==============================================================================
```
{% endraw %}

## VINSTALL.DOC

{% raw %}
```


                                 VINSTALL.DOC
                                 ------------ 
                         [Supplement to VDE.DOC 1.52]

                 Instructions for Macros and VINSTALL utility

                            (c)1987-90 Eric Meyer


================================  CONTENTS  ==================================
                                 (continued)

6. MACROS.  Explanation and examples of:
        Function keys, Key redefinition files, Macros, Macro keys, Macro
     programming, Recording macros.

7. RUNNING VINSTALL.  How to use VINSTALL.COM to modify VDE.COM.:

   A. INSTALLATION.  Installing for different computer hardware:
      ============   Screen size; IBM compatibility; Colors; Fonts; Snow.

   B. USER OPTIONS.  Customization of many initial VDE settings.

   C. PRINTER INSTALLATION.  Using special printer features:
                          print modes, graphics, etc.

   D. DEFAULT MACRO KEYS.  Installing a default set of macro keys.

   E. DEFAULT FUNCTION KEYS.  Installing the function keys.

   F. GRAPHICS.  Modifying the default set of graphics characters.

   G. CHARACTER WIDTHS.  Modifying the default set of character widths.

   H. RESTORE DEFAULTS.  Undoing previous modifications.




================================  6. MACROS  =================================
                             (Command mode only)

     Macros are a sophisticated and powerful tool for automating repetitive 
tasks.  A "macro" is a string of VDE commands and/or text that you can type in 
once and then have repeated automatically.  (Note: for large pieces of boiler- 
plate text, read in disk files with ^KR instead.)  A "function key" is a macro 
assigned to one of the [F1]...[F40] keys, while a "macro key" is a macro 
assigned to a key Esc0...9 or EscA...Z; these can all be defined either while 
editing, or with VINSTALL.  "Macro programming" involves the use of special 
commands allowing a macro to perform more complex operations including loops 
and conditional execution, much like a programming language.
     VDE's 76 user-definable macros allow you to customize it for any task, 
such as the formatting requirements of specialized professional writing, or 
many programming languages.  Many examples are given below.

     To create a macro, while editing, you can:
         (1) use the Esc[ command, and type the necessary keystrokes at the 
    prompt.  You may want to plan or compose the macro first, using pen and 
    paper.  Certain keystrokes, like [Ret] or ^X, are line editing commands, 
    and must be preceded by a ^P to enter them into the macro; the input line 
    has a 65-key limit.  See MACROS, PROMPTS.
         (2) use the Esc" command.  Type the desired keystrokes, exactly as 
    you would while editing: no ^P prefixes are required, and you will see the 
    results as you type.  There is a 128-key limit.  See RECORDING MACROS.

     Macros execute EXACTLY as though you had typed the given keys yourself.  
EXAMPLE: to read in a letterhead file called LETTER.HDR at the top of your 
file, you would type:
              ^QR         to get to the top of the file
              ^KR         to read in a file
              LETTER.HDR  to specify filename at the "Read file:" prompt
              [Ret]       to end the filename input
So this is exactly what you need to enter in your macro.  Note that ALL the 
input -- every keystroke, including answers to prompts, [Ret] keystrokes, and 
so on -- MUST be included.  For further details see MACROS.

     Note that the results of a macro may depend on various settings at the 
time it is run!  A problem of sorts arises with "toggles" -- commands that 
reverse a state -- since the macro doesn't know what state they were in to 
begin with.  So macros that employ ^OS, ^OV, and other similar commands must 
be used with care -- be sure everything is set properly before invoking them.
     There is one exception: the Insert toggles (^V,^]) are so much of a 
problem that VDE actually turns INSERT OFF before running any macro, so you 
can be sure that you are initially NOT in insert mode, or, that when the first 
^V or ^] is encountered in the macro, you ARE.  Thus the macro "Hello" will 
overwrite any existing text, while "^VHello" will insert -- regardless of the 
insert status when the macro is used.  The previous status is restored when 
the macro terminates.

     Once again, ordinarily macros are completely self-contained, and NEVER 
request input from the keyboard while running.  There are two exceptions:
         (1) If a reformat (^B) operation is in progress and 
      dehyphenation is required, the "Remove?" prompt will appear in 
      the header and a "Y/N" answer will be necessary to continue.  
      (This is a decision the macro can't make.)  See REFORMAT.
         (2) Using the AltR command in macros is tricky: input while 
      running a program must come from the keyboard.  (VDE resumes 
      control only when the program ends.)  See RUN COMMAND.


                                 USING MACROS

FUNCTION KEYS ([F1]...[F40]) -  Up to 40 macros can be assigned to function 
    keys; they can then be recalled and used with one keystroke.  Each of the 
    10 IBM function keys can be used with Shift, Ctrl, or Alt, to produce:
              Shift-[F1]...[F10]  =  [F11]...[F20]
               Ctrl-[F1]...[F10]  =  [F21]...[F30]
                Alt-[F1]...[F10]  =  [F31]...[F40]
    The new Extended (101-key) keyboards actually have extra keys labeled 
    [F11] and [F12]; VDE will not recognize these keys.
         Otherwise, function keys are defined (with the Esc[ or Esc] command, 
    or with VINSTALL) and used exactly like macro keys.  See MACRO KEYS.

KEY DEFINITION FILES (AltU) -  These files save sets of macro key or function 
    key definitions, and should be given file types of ".VDK" and ".VDF", 
    respectively.  You can load any key file, along with your text file(s) to 
    edit, from the command line (see SYNTAX).  In addition, they can be loaded 
    or saved with the AltU command while editing in VDE, and can also be 
    created or installed as defaults in your copy of VDE with the VINSTALL 
    program (see below).
         The AltU command will ask whether you want to "L"oad or "S"ave such a 
    file, then prompt for the name of the file.  The filetype MUST be ".VDK" 
    or ".VDF", and will determine whether MACRO or FUNCTION keys are affected.  
    If you load such a file, those definitions will replace any previous ones.  
    If you save, the current definitions will be written to the file.

MACROS (Esc[,]) -  When you are in the middle of doing something in VDE, and 
    find that you need to do something many times, it may be less tedious to 
    have it repeated automatically.  If you type Esc[ you will be asked first 
    for the string to execute; then, whether you want to Use or Store it.  (On 
    storing keys, see MACRO KEYS.)
         If you Use the macro, you will be asked for an optional "Quiet" 
    designation, then a "Repeat count".  You can speed up macro execution by 
    specifying "Quiet" mode: only the header will be updated as the macro 
    runs.  (Don't do this if the macro concludes by requesting user input -- 
    the necessary prompts would not display!)  For the repeat count, you can 
    type a number of times to repeat (0-254), or "*" for indefinitely.  You 
    will see the results as the macro executes, and you can abort it at any 
    time by pressing Esc.
         Macros also stop if an error occurs; the error message will be 
    visible, and can be cleared by pressing Esc.  Many commands (like Find or 
    Reformat) are designed to generate errors at the end of the file so that 
    an indefinite ("*") macro containing them will halt there.  Other indef- 
    inite macros may need to be aborted manually.
         Once defined, a macro can be re-used with the Esc] command, which 
    again gives you the options to Use or Store the previously defined macro.
         In order to include any input line editing characters (BS (^H), [Ret] 
    (^M), ^J, ^X, ^U, ^P) in a macro, you must prefix them with ^P.  (NOTE:  
    To make them easier to read and understand, macro listings will be given 
    here as they function, not as they are typed in.  ^P prefixes as needed 
    are NOT shown: remember that you need to add them!  Keystrokes are often 
    separated by spaces for clarity; the "_" symbol is used to represent an 
    actual space character typed.  Here are some sample macros:
         1.  Reformat an entire file (Wordstar ^QQB): after Esc[, just enter
                                  ^B
    Specify quiet and indefinite repeat as options ("Q*").
         2.  View a file by scrolling slowly through it:
                               Esc; ^C
    This will pause, then scroll down.  (Use a repeat count of "*".)
         3.  Enter a long graphics border for a box.  (This can get tedious by 
    hand.)  Assuming graphic "Y" is the horizontal bar,
                               AltG Y
    will enter one character.  You can get a line 40 characters long by giving 
    a repeat count of "40" (and the "Q"uiet option will avoid unnecessarily 
    displaying the menu).
         4.  Can you figure out what this one does, if entered with a repeat 
    count of "*"?  (Answer:  .elif eht fo dne eht ta meht fo tsil a gnikam 
    elif a fo tuo sesehtnerap ni stnemmoc ekat lliw tI)
                ^QR ^QF(^J ^G ^KB ^QF)^J ^G ^KK ^QC [Ret] ^KV
         VDE macros are very powerful tools, particularly given their program 
    ability and storage on macro Keys.

MACRO KEYS (Esc0...Z) -  Both the Esc[ and Esc] commands also give the option 
    of storing the macro definition to a MACRO KEY.  Up to 36 of these can be 
    stored on keys 0...9,A...Z; they can then be called up with two 
    keystrokes.  (40 more can be stored on IBM function keys; see FUNCTION 
    KEYS.)  Example: if stored to key 3, a macro can be reused simply by 
    typing Esc3.
         Ordinarily, macro keys operate just like the original macro:  they 
    will ask for a "Repeat count" when executed.  In many cases (boilerplate 
    text, for example), you will want a key to execute only once when invoked; 
    if so, specify "N"o-repeat when storing the definition to a key.  Or you 
    can instead specify "Q"uiet, if you also want the key to run in Quiet mode 
    (to increase speed and minimize display activity).
         There is a total of 982 bytes available for all 36 keys, and a 128 
    byte limit for any one key.  (VDE's own input line will only accept 65 
    bytes, but VINSTALL can handle up to the full 128.)  Trying to use an 
    undefined key results in an error.  You can delete a key definition by 
    entering an empty macro string (Esc[, CR) and storing it to the key.  Keys 
    defined with Esc] are of course temporary.  (VINSTALL lets you install 
    definitions permanently; see DEFAULT MACRO/FUNCTION KEYS.)

         EXAMPLES: Besides simply storing any macro, these Keys are useful for 
    storing a frequently repeated phrase; "EscW" is much more convenient than 
    "World Wide Widgets Ltd. (N.A.)".  You might also define one as a common 
    command like ^PS, for underlining; or a set of margins, like ^OR60[Ret] 
    ^OL5[Ret].  A key defined as ^QR ^N AltD ^OF would place the current date 
    at the top right of a letter.

MACRO PROGRAMMING (Esc0...Z,!,=,~,(),+,-,&,;) -  VDE has several commands that 
    operate only within a macro definition, and give you conditional control 
    over the execution of a macro, allowing real programming.
         Esc0...Z, when placed IN a macro, function simply as "labels" 0...Z.  
    They have no effect, but can be "jumped" to by other commands.
         Esc! followed by 0...Z is a "jump" instruction, causing macro 
    execution to resume with the command following that label.  Example: Esc!2 
    jumps to label 2.  As two special cases, Esc![ jumps to the beginning of 
    the macro, and Esc!] jumps to the end (aborts).
         Esc= and Esc~ perform tests on the character at the current cursor 
    position.  There are two ways to use them:
             (1) Followed by a character, then a label 0...Z (or 
        "[","]"), they are conditional jumps: they jump IF the 
        character does (or for "~", does NOT) match the one 
        specified.  Example: Esc~^M2 jumps to label 2 if the current 
        character is NOT a CR.
             (2) Followed by a character, then ">" or "<", they are 
        search loops.  They will continue to move the cursor right 
        (or for "<", left) as long as the character at the cursor 
        does (or for "~", doesn't) match, or until the beginning or 
        end of the file.  Example: Esc=_> moves right as long as the 
        current character is a space (so it stops on a NONspace).
         Several commands allow the use of a counter variable.  Esc() sets 
    the value: for example, Esc(0) initializes it to zero.  The Esc+ command 
    simply increments the value; Esc- (minus) decrements the value, then jumps 
    if it is zero to a specified label.  (In addition to a number, you may use 
    "[" or "]" for the start or end of the macro, or "@" to avoid jumping 
    entirely.)  Example: Esc-] decrements the counter, jumping to the end 
    (exiting) if it reaches zero.
         Esc&, followed by 0...Z, is used to "chain" to another macro key.  In 
    this way you can build up strings longer than the 65/128-byte limit on any 
    one key.  This is a "jump", not a "call"; there is no returning.  Example: 
    Esc&M causes key M to execute.  (You cannot chain to function keys.)
         Esc; (semicolon) gives a brief pause before execution continues, 
    presumably so the user can see what's happening on screen.
         Macro programs are stored just like any other macro string (usually 
    as No-repeat).  If you program an endless loop, you will at some point 
    have to abort by pressing Esc.  Don't make macro programs Quiet until 
    you're sure they work.

         EXAMPLE 1: here is a good macro program (best stored as a Quiet key) 
    to move the cursor to the start of the current sentence:
                 Esc~.1 ^S Esc1 Esc~.< Esc2 ^D Esc=_2 Esc=^M2
    You could write this out in programmer's pseudo-code as:
              If not "." goto label1
              Move left                 ;move left if already on period
     label1:  While not "." move left   ;move left to previous period
     label2:  Move right                ;now move back right
              If " " goto label2        ;  as long as you see a space
              If "^M" goto label2       ;  or a Return
              (all done)
         EXAMPLE 2: a macro to move to the start of the current paragraph:
                 ^QS ^S^S Esc=_[ ^D^D
         EXAMPLE 3: if you have some text that you can't reformat because 
    every line ends in HARD CRs, here is a macro that will "soften up" one 
    paragraph's worth, leaving just one HARD CR at the end:
                 ^QS ^X Esc=_] Esc=^M] ^S ^V_^V ^D Esc![
         EXAMPLE 4: a macro to match parentheses.  Many programming languages 
    use nested sets of parentheses, for example "{}" in C.  This program, when 
    the cursor is placed on an open bracket "{", will move ahead to find the 
    closed bracket "}" that matches it:
                 Esc~{] Esc(0) Esc1 Esc~{2 Esc+ Esc!3
                               Esc2 Esc~}3 Esc-]
                               Esc3 ^D Esc!1

RECORDING MACROS (Esc") - As an alternative to composing macros and using the 
    Esc[ command to type them in, you can simply record a macro from a 
    sequence of keystrokes as you go about a task.  Press Esc" to activate 
    recording; type away; then press Esc" again to conclude.  You will then be 
    asked whether to use or store it, etc (see MACROS).  No confusing ^P 
    prefixes are needed, and you can take advantage of the full 128-key length 
    limit.  While recording, a quote mark (") will be visible in the upper 
    right (prefix) area of the header, if the header is displayed.
         Notes: (1) Esc" initially turns INSERT OFF, so that your keystrokes 
    will behave as they would in the macro you are defining.  See explanation 
    above under MACROS.  (2) Function and macro key commands themselves will 
    not work while macro recording is in progress.


==========================  7. RUNNING VINSTALL  =============================


     VINSTALL is a utility that lets you customize your copy of the VDE 
editor.  A few choices will be important from the first: for example, VDE 
operates by default in Command mode, and if you prefer MenuBar mode you will 
need to change this with VINSTALL.  There are many more options that you need 
not concern yourself with at first: in the course of using VDE, you will 
discover how you want these things set.  However, there are important changes 
you will need to make to VDE before using it, if you have a computer that:
              * Is not fully IBM compatible (BIOS, video).
              * Experiences "snow" problems with programs that write
                 directly to video memory (older style CGA adapters).
     You should begin using VINSTALL soon; once you have modified VDE.COM, the 
introductory messages in VDE and VINSTALL will no longer appear.

     Your copies of the program files will be called VDE.COM and VINSTALL.COM, 
though of course you can rename them (I usually call them V.COM and VI.COM).  
To run VINSTALL simply type:
              C>vinstall              if your copy is still called "VDE.COM"
        or    C>vinstall V.COM        if it's called "V.COM" (or whatever).
     Notes: VINSTALL modifies the file VDE.COM; always keep an unmodified 
original copy of all VDE files in case problems arise!  The version numbers of 
VINSTALL and VDE (and any auxiliary key or printer files, see below) must 
agree, or you will get an error.

     VINSTALL is fully menu-driven; it will present you with a set of 
categories that corresponds to each section below, starting with Installation; 
you select the values you want to change.  The program is largely self- 
documenting, and steps you through each item individually.  If this is your 
first time, take advantage of its "Help" option before you start in, for some 
basic instructions.  You may also find a good ASCII chart helpful for 
deciphering your printer codes.  VINSTALL uses several types of data entry:
     TEXT - Just type in the character(s).
     LOGICAL - Yes/No.  Just type "Y" or "N".
     DECIMAL - Enter a number from 0 to 255.
     HEX - Enter a two-digit hex byte value 00-FF.  (Don't omit lead zeros.)
     BYTE STRINGS - fixed length: enter the required number of hex bytes.
                    variable: enter the (hex) count for the number of bytes, 
              followed by the bytes themselves.  Example:  (02)1B3D.  This 
              format is referred to below as "(#),bytes".
VINSTALL can't check for illegal values; be careful what you enter!

     At most points in VINSTALL, you can press Esc to return immediately to 
the Main Menu, or ^C to abort the program.


-----------------------------  A. INSTALLATION  ------------------------------


     VDE will not run properly on computers that are not 100% IBM compatible, 
unless you use VINSTALL to provide the necessary display information.  (Note: 
the HP Portable Plus is also supported, as a "near compatible".)
     The IBM PC installation gives the best performance, but requires an IBM 
standard BIOS and a supported video adapter (MDA,CGA,EGA,VGA).  You can 
customize the display (colors, fonts etc) to your preferences.
     The non-IBM installation will run on any system that supports ANSI 
standard screen control sequences (eg, the ANSI.SYS screen driver -- you must 
have the statement DEVICE=ANSI.SYS or equivalent in your CONFIG.SYS file).  
You must also specify the size of your screen.  This installation can of 
course also be used on IBM compatibles, in the event that direct video access 
is undesirable.  It will even work in "remote" applications, such as high- 
speed modem connections, with appropriate terminal software on the user's end.

IBM PC PARAMETERS:

Screen colors - you can select six video attribute bytes: one for normal text; 
    one for block text; one for soft CR markers; one for the header; one for 
    menus and prompts; and one for highlights (prompts, etc). Each is two hex 
    digits, for a background and foreground color.  You will see a color 
    palette displayed on screen; the color digits are:
           *0 = BLACK   4 = red      *8 = GREY       C = lt red
            1 = blue    5 = magenta   9 = lt blue    D = lt magenta
            2 = green   6 = brown     A = lt green   E = yellow
            3 = cyan   *7 = WHITE     B = lt cyan   *F = BRIGHT WHITE
    (* - All monochrome screens can display BLACK, WHITE, and BRIGHT WHITE; in 
    some cases, GREY may also be visible.)
         Any digit may be used for the the foreground, but only 0-7 for 
    background (8-F produce blinking video...  ugh).  You will probably want 
    the header and highlight attributes to have the same background.

Make cursor "D"efault,"B"lock,"U"nderline (D/B/U) - You can choose the cursor 
    type you want during editing.  Choose "D"efault to leave it whatever it 
    was before VDE was run.
Problems with CGA snow (Y/N) - Normally No.  Some older CGA cards experience 
    ugly "snow" when programs write directly to video memory.  If this happens 
    to you, select "Y", and VDE will time its video access according to 
    horizontal retrace intervals.  (Display speed will be slightly reduced.)

NON-IBM PC PARAMETERS: (automatically set for IBM PC)

Clock speed in MHz - Set this decimal value to reflect your CPU clock speed. 
    Common values are 5 (for 4.77), 8, 10, 12, etc.  Adjust the value if 
    desired to change the length of delays in VDE.  (At present this involves 
    only the "Esc;" macro command and the horizontal scroll delay.)

Terminal init - enter an optional string of code (#),bytes to be sent to the 
    screen after clearing the screen, whenever (re)entering VDE.
Terminal uninit - enter an optional string of code (#),bytes to be sent to the 
    screen upon exiting from VDE back to DOS.  (Max. lengths: 0F = 15 bytes.)

Viewable columns (80-255) - normally 80; set to the column width of your 
    display, if different.
Viewable lines (16-255) - normally 25; if you have a shorter or longer default 
    display (on entry to VDE), enter the length here.
Fast scroll supported (Y/N) - Does your computer respond to the ANSI sequences 
    for insert/delete line (Esc-[-L,M)?  If so, set this to "Y" for a faster 
    display.  (Default is "N", as MSDOS ANSI.SYS does not support these codes; 
    some enhanced console drivers, such as NANSI.SYS, do.  The display will 
    not work properly if you select "Y" with the standard ANSI.SYS.)


-----------------------------  B. USER OPTIONS  ------------------------------


     You can change a variety of default settings in your copy of VDE, 
according to your taste.  "Default" means the state assumed when VDE is first 
run, or in the absence of any user commands.

Use COMMAND mode (Y/N) - Do you want VDE to use its WordStar-compatible 
    command set?  If not, MenuBar mode is used.  See OPERATING MODES.

Autosave interval (min.) - Do you want VDE to save your work to disk auto- 
    matically at intervals?  If so, enter the interval in minutes.  A value of 
    0 turns this feature off.
Preserve BAKup files (Y/N) - Should a backup file (*.BAK) be kept when you save 
    over an existing file?  Choose "Y" to play safe, "N" to save disk space.
Use ^Z as EOF mark (Y/N) - Should an EOF marker (^Z, 1Ah) be considered the 
    end of a file?  MSDOS software should not require this, but some early 
    programs (like their CP/M predecessors) did use this convention.  Normally 
    set this to No: VDE will ignore ^Z on input, and will not add ^Z on 
    output.  If set to Yes, VDE will consider a ^Z encountered on input as the 
    end of the file, and will put ^Z at the end of each file on output.
Exclude COM/EXE files (Y/N) - Normally "Y": executable programs (files with 
    types of .COM or .EXE) will not show in the ^KF directory display (unless 
    the filetype is specified explicitly), and cannot be edited.  This is a 
    protection feature; you can damage such files by trying to edit them.  To 
    disable, set to "N".
Default file mode -  Which of the six file modes (A,W,5,P,X,N) described in 
    VDE.DOC do you want as the default?  (Originally "A".)
Auto mode select filetypes - You can specify four filetypes (or type masks, 
    using "?" wildcards) as exceptions to the above default: for example, you 
    could declare all ".ASM" files to default automatically to "N" mode, or 
    all files ".89?" to "W" mode.

Insert mode (I/W/O) - Which insert mode setting do you want to start out with: 
    Insert, Word insert, or Overstrike (insert off)?
Header on (Y/N) - Do you want the header (^OQ) to start out ON?  (Normally Yes)
Ruler on (Y/N) - Do you want the Ruler (^OT) to start out ON?  (Normally No)
HCR display on (Y/N) - Do you want Hard CR display (^OB) to start out ON when 
    editing a Document ("W,A" modes) with VDE?
Hyphenation on (Y/N) - Do you want hyphenation (^OH) to start out ON?
Case-insensitive search (Y/N) - Do you want string searches (^QF) to be case 
    insensitive by default?  Normally, No; if Yes, specifying the "U"ppercase 
    option while using ^QF will force a case SENSITIVE search.

Left and Right margin columns (1-255) - Default margin settings for "W/A" 
    modes.  Set both to 1 to disable wordwrap and reformatting entirely.
Reserve status line (Y/N) - Do you want VDE to reserve the bottom (normally 
    25th) screen line for use as a status or function key line by special 
    software?  (Normally No, VDE uses this line for text.)
Scroll overlap (0-255) - This is the number of lines overlap between screens 
    when scrolling: the smaller, the larger the scroll.  Originally set to 2, 
    for a nearly full scroll.  Keep this smaller than your screen size!

Ring bell on error (Y/N) - Do you want the bell to ring when a VDE error 
    message displays?
[BkSp] (^H) deletes to left (Y/N) - Do you want the [BackSpace] (^H) key to 
    delete characters?  Originally No - it just moves the cursor left.
[Del] deletes to right (Y/N) - Do you want the [Delete] key to remove the char- 
    acter to the right?  Originally No - it deletes to the left, as in 
    WordStar.  (NOTE: whichever you choose, Ctrl-[Del] will do the opposite.)
[Home,End] move left/right on line (Y/N) - Do you want the [Home] and [End] 
    keys to move to the start or end of the line?  Originally No -- they move 
    to the top or bottom of the screen, as in WordStar 4.

Variable tab stops -  Enter up to 8 variable tab stop columns, in ascending 
    order.  Fill unused values with 0.  Defaults: 6, 15, 35, 55.  (Note: hard 
    tabs display at intervals of 8 columns, and cannot be adjusted.)

Show time as AM/PM, not 24 hr (Y/N) - Do you want the time stamp to display in 
    12 hour format (AM/PM)?  Originally Yes.  If No, the time shows in 24 hour 
    format.  (Affects AltT command and ^T in print headers.)
European date format (day,month,yr) (Y/N) - Do you want the date to display in 
    European format?  Originally No, meaning US Format (month,day,year).  
    (Affects AltD command and ^D in print headers.)
Show date numerically (Y/N) - Do you want AltD to enter the date numerically 
    (eg 1/15/88)?  Originally No, meaning verbose (eg January 15, 1988).


-------------------------  C. PRINTER INSTALLATION  --------------------------


     Printers vary enormously.  VDE can accomodate two printer drivers, each 
of which can be installed to take advantage of your printer's special 
features.  (Within VDE, the AltV command can be used to select the driver to 
use when printing.)  The defaults installed in VDE are a standard "IBM/Epson 
FX" driver, and a "Simple" driver that can send plain text to any printer, but 
does not support any print controls other than underline and strikeout.  These 
and several other pre-defined drivers can be selected from a menu within 
VINSTALL.  In addition, you can modify either of the drivers, or create your 
own.  (To modify the Alternate driver, you must temporarily make it the 
selected one.)
     If your printer is not on the driver menu, but emulates or resembles one 
that is, start out using that driver, and refine it as needed.  Failing this, 
you must simply refer to your printer manual and install all the necessary 
codes yourself.

              NOTE: If you have to create or SIGNIFICANTLY modify a 
         driver for use with your printer, please send me the data 
         so that I can revise or add a new driver for it.  Drop me a 
         postcard, or Email your VDP file to my CompuServe ID.

     VINSTALL can use special Printer Installation files to store and retrieve 
other printer definitions.  These should have a file type of ".VDP".  You have 
the option to read in or write out such a file, as well as editing the 
following values individually.  This makes it easy to save your installation 
and to pass it along to others.

Printer ID - Identify the printer you are installing.  (16 characters)

IBM graphics printer (Y/N) - Normally No; if you can print the IBM extended 
    ASCII characters, set this to Yes.  If No, VDE will "emulate" graphics on 
    printing, choosing standard character overstrikes that come close.
Send LF after CR (Y/N) - Normally Yes.  But with some printers, which manufac- 
    ture their own LF on receiving a CR, you will want No here.

Page length (0-255) - Set the number of text lines to print on a page.  (Does 
    not include another 3 lines for a header or page number, if used.)
Top margin (0-255) - Set the number of blank lines to skip as a top margin 
    before printing each page.  This value (not included in the page length) 
    can be used to position the paper properly.  Default is 0.
Reserve space for header (Y/N) - Default is Yes; when printing without header 
    or page number, 3 blank lines will be kept clear of text on each page, so 
    that the physical page layout is the same.  If No, an additional 3 lines 
    of text will print.
Left margin (0-255) - Set the number of blank columns to skip as a left margin 
    before printing each line.  Useful if you can't set the margin on your 
    printer with an initialization string.  Default is 0.

Printer initialization - Enter an optional string of code (#),bytes to send to 
    the printer before each print job, to set default margins, print modes etc.  
    Max. length here and below is 1F = 31 bytes.  (NOTE: the ^KP command has 
    an option to specify additional codes at print time.  See PRINTING.)
Printer deinitialization - Enter another string (#),bytes to send to the 
    printer after each print job, to restore printer to desired state on exit.

Proportional printing - Enter the codes needed to set your printer for 
    proportional printing, when ^OJ is engaged, and then to turn this off.  
    Both strings are entered as (#),bytes.

Codes for toggles (on/off) - For six of the seven printer toggles (not ^X), 
    you need to tell VDE the codes to send to your printer to produce the 
    desired effect, then turn it off again.  The conventional meanings of the 
    toggles are:      ^B  boldface         ^Y  italic/ribbon
                      ^D  doublestrike     ^T  superscript
                      ^S  underline        ^V  subscript
    but you can use them for anything you want.  Example: IBM/Epson printers 
    require three-byte sequences to turn continuous underlining on and off:
           Underline on    Esc - 1     hex 1B 2D 31   dec 27 45 49
                    off    Esc - 0         1B 2D 30       27 45 48
    You would enter the hex data, starting with the byte count:
              Underline (^PS) on:  (03)1B2D31
                      ...and off:  (03)1B2D30
    You should find the necessary ASCII hex codes in your printer manual.
         (NOTES: ^PS will underline text by overstriking with "_" if you do 
    not install printer codes for it.  The ^PX toggle, for strikeout, requires 
    no installation at all.)

Codes for switches - The same idea, but for switches, which send the same 
    codes every time they are used.  WordStar calls the switches:
         ^P^Q  user1  \
           ^W  user2   \ (no standard      ^A  alternate pitch
           ^E  user3   /  meaning)         ^N  normal pitch
           ^R  user4  /
    but once again, you can use them for anything you want: fonts, etc.


--------------------------  D. DEFAULT MACRO KEYS  ---------------------------


     VDE has a set of 36 Macro Keys (available in command mode only!), corres- 
ponding to the commands Esc0...9 and EscA...Z.  The default macro definitions 
are those attached to these commands when VDE is first entered.  By changing 
them you can configure VDE to suit your own specialized writing requirements.  
(Any Keys defined with Esc] while using VDE override these defaults.)

               NOTE: If you have favorite macros or macro programs, 
         please consider sharing them with other users of VDE.  Drop 
         me a postcard, or Email your macros to my CompuServe ID.

     VINSTALL can use Key Definition files to store macro key sets.  These 
should have a file type of ".VDK", for ease of identification.  You have the 
option to read in or write out such a file, as well as editing the keys 
individually.  (VDK files can also be read or saved with VDE's AltU command, 
but only VINSTALL can display the definitions.)
     VINSTALL gives you a display much like this:
 
      Macro Keys:  (___ bytes free)      <---- note room (up to 982)
      [Esc0]<>
      [Esc1]<>                           <---- "<>" flag means empty
      [Esc2]<>
      [Esc3]^[;^C                        <---- normal macro key
      [Esc4]<>
      [Esc5]<N>World Wide Widgets Inc.   <---- "<N>" flag means no-rpt key
      [Esc6]<>
      [Esc7]<Q>^QR^KB^QC^KK^KC           <---- "<Q>" flag means quiet key
      [Esc8]<>
      [Esc9]<>

Just select the number of the Key you want to redefine, then type in the new 
definition, much as you would in VDE.  All the same rules apply (but VINSTALL 
will accept longer keys, up to 128 bytes).  If the new definition is too long 
to fit it will be rejected.
     There are several different ranges of keys, which can be displayed and 
modified in a range of 10 at a time (for example, keys 0-9, or A-J).
     VDE.ARC comes with a macro key file EXAMPLES.VDK, containing several 
macros discussed above under MACROS and MACRO PROGRAMMING:

     [Esc0]<Q>^QR^NAltD^OF                         ;put date at top right
     [Esc1]<Q>^QS^S^S^[= [^D^D                     ;move to start of paragraph
     [Esc2]<Q>^[~.1^S^[1^[~.<^[2^D^[= 2^[=^M2      ;move to start of sentence
     [Esc3]<Q>^QS^X^[=^M]^S^V ^V^D^[![             ;soften hard-CR paragraph

(Note that "Esc" displays as "^[".)


-------------------------  E. DEFAULT FUNCTION KEYS  -------------------------


     VDE also has a set of 40 Function Keys (available in command mode only!), 
corresponding to the [F1]...[F10] keys in their normal, Shift-, Ctrl-, and 
Alt- usage (sometimes referred to collectively as [F1]...[F40]).  These are 
identical in features and functions to the Macro Keys discussed above.  You 
can easily configure these to match the standard function-key configuration 
for Wordstar's key overlay, to correspond to Word Perfect function-key usage, 
or in any other way you like.
     VINSTALL can use Function Key Definition files to store function-key 
sets.  These should have a file type of ".VDF", for ease of identification.  
You have the option to read in or write out such a file, as well as editing 
the keys individually.  (VDF files can also be read or written with VDE's AltU 
command, but only VINSTALL can display the definitions.)
     VINSTALL gives you a display much like this:

      Function keys 1-10:  (___ bytes free)   <---- note room (up to 982)
      [F1]<>
      [F2]<>                                  <---- "<>" flag means empty
      [F3]<>
      [F4]<Q>^OL5^M^OR60^M                    <---- normal function key
      [F5]<>
      [F6]<>
      [F7]<>
      [F8]<>
      [F9]<Q>^PS
      [F0]<Q>^PY

This works just like the macro keys above, with four sets of 10 keys to define 
(Normal, Shift, Ctrl, Alt).
     VDE.ARC includes sample function-key files which you can read in to 
define the function keys according to the usage of WordStar or Word Perfect.  
The WordStar 4 default definitions in WS4.VDF are:

WS4.VDF      NORMAL      SHIFT        CTRL             ALT
     [F1]     ^J          ^OB          ^QF         Vertical bar graphic
     [F2]     ^U          ^OC          ^QA         Horizontal bar
     [F3]     ^V^PS^V                  ^L          Upper-left corner
     [F4]     ^V^PB^V                  ^QI         Upper-right corner
     [F5]     ^Y          ^KY          ^OL         Lower-left corner
     [F6]     ^T          ^KU          ^OR         Lower-right corner
     [F7]                 ^KV                      Upper T graphic
     [F8]                 ^KC                      Lower T
     [F9]     ^KS         ^KB          ^QS         Left T
     [F0]     ^KD         ^KK          ^QD         Right T

The WP.VDF file will not "turn VDE into Word Perfect", but it does provide a 
considerable degree of keystroke compatibility.  You can assign any other 
functions desired to unused keys (eg, [F9]).

WP.VDF       NORMAL      SHIFT        CTRL             ALT
     [F1]     ^U         Esc?Y        AltR
     [F2]     ^QF                                      ^QA
     [F3]     ^J                      Esc?C            ^OD
     [F4]    ^I^OL^M                  Esc?B           Esc?B
     [F5]     ^KF        AltD                          ^PZ
     [F6]    ^V^PB^V      ^OC                          ^OF
     [F7]    Esc?E       Esc?P
     [F8]    ^V^PS^V     Esc?T        Esc?S           Esc?S
     [F9]
     [F0]     ^KS        Esc?F        Esc[



--------------------------  F. GRAPHICS CHARACTERS  --------------------------


     VDE allows text to contain a limited, but variable, set of 32 characters 
in the range 80-FFh (on an IBM PC, these are typically graphics or foreign 
characters; see GRAPHICS).  In addition, the code ^Z (1Ah) must be treated as 
a graphics character.  VINSTALL lets you specify your own default graphics 
set.  Keep a fair amount of space free in it if you frequently work with files 
with many graphics characters, in order to avoid overflowing the table.

     You will be shown the current definitions, in the same format as the VDE 
Graphics command.  You may select any entry to redefine (A-Z, 1-5) whether 
vacant or not; furthermore, you may type "-" to clear them all.  (Graphic 6 
cannot be changed; it always remains a fuzzy block.)  In VINSTALL, new graphic 
codes must be entered by hex value, from 80 to FF (and 1A); a full list of 
graphics characters (80-FF) can be displayed for your selection if you need 
it, by typing "?".  Simply pressing [Ret] means "free" or undefined.
     Note that your Printer Installation determines how graphics will print.



---------------------------  G. CHARACTER WIDTHS  ----------------------------


     In order to judge the margins correctly when formatting, VDE's 
proportional printing feature (^OJ) needs to know how wide each character is 
when it prints.  The default width table will probably work fairly well with 
any standard ASCII font (eg, "m" is wider than "i", and so on).
     If you would like to fine-tune this table to correspond to your own 
printer instead, you can measure your own font and modify the width table as 
needed.  (You must know the character widths in 1/256"; the easiest way to get 
this is to print out a line of 64 of each character, measure the length in 
multiples of 1/16", and divide by 4.  The result is typically between 10 and 
30.)  Just type the character, then enter the width as a decimal value.
     Note that this doesn't affect how your printer operates -- just how VDE 
judges the length of each line for wordwrap, when ^OJ is on.



---------------------------  H. RESTORE DEFAULTS  ----------------------------


     This option on the VINSTALL menu is provided in the event that you want 
to undo any changes that you (or someone else) has made to your copy of VDE.  
This should return VDE to the state it was distributed in: installation for 
IBM PC, all User Options restored to their defaults, printer driver set to 
Simple, no Macro or Function Keys, original Graphics characters and Character 
widths.




------------------------------------------------------------------------------

         ---  Eric Meyer, 401 12th Ave SE #139, Norman OK 73071  ---

===================================[end]======================================
```
{% endraw %}

## WSNOTE.DOC

{% raw %}
```
 









                              INSTRUCTION MANUAL






                                           tm
                                    wsNOTE


                                note formatter
























                               (c)1989 E. Meyer
                            401 12th Ave SE, #139
                           Norman, OK  73071    USA


                                 ABOUT wsNOTE
                                 ------------


     wsNOTE is a small, fast, easily used program that enables you to produce 
numbered footnotes or endnotes with your WordStar program.  It has some 
additional formatting features as well.  wsNOTE is completely independent of 
WordStar, and requires no modifications to your present copy of it; yet wsNOTE 
can be run without ever leaving WordStar.
     Its advantages include:

* -  Simple,natural file format.  No strange embedded commands; no control 
    codes to conflict with your printer installation, or other software.
* -  Fast, one-pass operation produces either footnotes or endnotes from the 
    same source file; notes can be typed along with text or separately.
* -  Can also function as a simple numbering utility, for example, numbering 
    items in a bibliography.
* -  Figure Block feature offers space for illustrations without interrupting 
    the flow of text.
* -  Large documents may be split into separate files,which can be chained 
    together for output or processed separately.
* -  You have complete flexibility in format of note numbers and text.

     wsNOTE works on text files created with WordStar or compatible programs 
(like NewWord), including the new WordStar 4.0.  The CP/M version runs on any 
CP/M or compatible (eg, ZRDOS) computer.  The MSDOS version runs on any PCDOS 
or MSDOS computer with at least 128K RAM.




     This manual contains no special codes other than formfeeds.  It can be 
printed out, or examined onscreen with any editor.  It was written using VDE 
(Video Display Editor) 1.31, a freeware program from the same author.


                               SHAREWARE POLICY
                               ----------------


     The wsNOTE program is "shareware", user supported software.  There is no 
initial obligation: feel free to give wsNOTE a thorough trial.  But if you 
decide to keep the program and to continue using it, this usage policy 
requires that you send a modest contribution of $25 (individual user) or $50 
(corporate site license) to the author:

                                  Eric Meyer
                            401 12th Ave SE, #139
                            Norman, OK  73071  USA

                           CompuServe [74415,1305]

Mention the version of wsNOTE that you are using, and you will receive an 
update to the current version if revisions have been made.  Sorry, printed 
copies of this manual are not available from the author.


       ****************************************************************
       *****    The wsNOTE utility and its documentation are      *****
       *****       (c)1988 E. Meyer, all rights reserved.         *****
       *****   They may not be circulated in any incomplete or    *****
       *****     modified form, nor sold for profit, without      *****
       *****          written permission of the author.           *****
       ****************************************************************


     DISCLAIMER: You undertake to use wsNOTE at your own risk.  The author 
accepts no liability for any damages resulting from its use or misuse.  Direct 
problem reports and suggestions to the author; include a stamped return 
envelope for a reply if desired.





     NOTES: Please observe in what follows that "WordStar", "NewWord", and 
"Mailmerge", are trademarks of MicroPro International or NewStar Software.
     The wsNOTE program was formerly sold as a commercial product; it is now 
released as shareware by the author.


                               GETTING STARTED
                               ---------------


     The wsNOTE package should contain the following files:
          WSNOTE.EXE (or COM) - the wsNOTE program
          CONFIG.EXE (or COM) - a configuration utility
          SAMPLE.FIL - a sample text file to practice with

In addition there may be a READ.ME file, containing last-minute updates to the 
information in this Manual.  If so, TYPE or PRINT this file, or edit it with 
WordStar or VDE, to read it.  Eventually you will want to move WSNOTE, and 
possibly its CONFIG utility, onto your working WordStar disk (if there's room).

     wsNOTE is a "post-processor": it reads through a text file that you 
create with WordStar, and it creates a formatted file for you to print.  This 
means that wsNOTE consumes no memory, and will not interfere with your 
existing writing process.  The same input file may be processed to produce 
either footnotes or endnotes, as desired.  The output is a standard WordStar 
document file, and any other software (like indexing utilities) may be used on 
it prior to printing.
     You can convert existing documents for use with wsNOTE.  The easiest way 
is to replace all the note numbers with "##" signs, and collect all the notes 
in a separate ".XNT" file (see "EXTERNAL NOTE OPTION", below).


     This Manual is short; please read it thoroughly.  It covers:
        1.  How to create or modify text files for use with wsNOTE.  (You may       
           want to examine the file SAMPLE.FIL as you read this.)
        2.  How to run the WSNOTE program itself, to format and number your 
           notes, and proofread and print the output.
        3.  How to use the CONFIG program to take advantage of the many 
           formatting options of wsNOTE.

     You will need to be familiar with the use of WordStar itself on your 
computer, including the "dot commands" used by WordStar (and Mailmerge) for 
print-time formatting.  If you find yourself needing to refresh your memory on 
any of this, keep your WordStar manual handy as you proceed.
     The following instructions apply to both the MSDOS and CP/M versions of 
wsNOTE, and to the use of either WordStar or NewWord, identically.


                                 FILE FORMAT
                                 -----------


     First, you need to know how to type a note call in your text, the place 
where the note number should go.  Just type it as you always have, except that 
instead of an actual number like 17, type two or three "#" characters.  The 
number may be formatted in any way you like: in square brackets "[##]", or 
superscripted "^T##^T", etc. The "#"s will be replaced by the actual note 
number when you run WSNOTE.  Use of two "#"s gives note numbers up to 99; use 
three only if you expect you will need numbers larger than 99.
     Once you make your choices of format and number of digits, every note 
call in the file must be done the same way.  Any call that is not done exactly 
like the first will not be recognized.  (There is one exception: when you want 
the note number to reset to 1, as at the start of a new chapter, you may use 
"#1" instead of "##", or "##1" instead of "###".)

EXAMPLE:      Try the ^SwsNOTE^S^T#1^T program to format your notes.^T##^T

                            1                              2
RESULT:       Try the wsNOTE  program to format your notes.

     Second, you need to know how to type the actual notes.  They can be put 
after the end of any paragraph, either before or after their calls, though 
they should be reasonably close.  The natural place is at the end of the 
paragraph in which the calls occurred.  Keep the notes in the proper order, 
and remember not to try to put them into the middle of a text paragraph; they 
would not be recognized.
     Each note (or group of several notes) must be enclosed as a "note block" 
between the characters "{}" (curly braces), which distinguish a note block 
from a paragraph of ordinary text.  The "{" must be the first character on its 
line, and the "}" the last on its.  Neither brace will appear in the printed 
output; they are markers only.
     Each note within the block must have somewhere on its first line a number 
"##" or "###" with the same number of digits as the calls have. They may be 
formatted differently from the calls, but again all notes must be done the 
same way.  You can, for example, use "[##]" for the calls and "##." for the 
notes.  Use of "#1" and "##1" in the notes is allowed, if it helps you keep 
things straight, but is not needed, and has no effect.

EXAMPLE:      {    ##.  "wsNOTE" is a trademark of the author.
                  ##.  The program can produce either footnotes or endnotes,
              depending on your preferences.}


     EXTERNAL NOTE OPTION: Most users find note blocks integrated with the 
text to be easiest to use and keep track of.  However, if you prefer to type 
your notes in a separate file (or have already done so), wsNOTE has an 
"external note" option.  Don't put any note blocks in your text.  In the note 
file, just type in the notes as desired, with "##" in place of the numbers; 
don't use block markers ("{}").  Give the note file the same name as the text 
file, and the type ".XNT"; for "PAPER2" or "MAGAZ.ART", use "PAPER2.XNT" or 
"MAGAZ.XNT".  If an ".XNT" (external note) file is present, wsNOTE will 
automatically use it.

                                 DOT COMMANDS
                                 ------------


     When using wsNOTE, a few WordStar/Mailmerge dot commands should not 
ordinarily be used.  Others will operate somewhat differently than usual, 
because wsNOTE interprets them itself at formatting time, and may or may not 
pass them along to WordStar as well.  Also, two new ones are available.

     Dot commands that should usually not be used are: ".LH", which would 
change the vertical spacing of lines; ".PF", ".LM", and ".RM", which would 
cause print-time reformatting of text.  If wsNOTE encounters these commands, 
it will issue a warning message, but will keep going.  Thus you can use them 
if you really know what you're doing; but this is not encouraged, and page 
misalignment may result.
     (You should also avoid the formfeed character, ^PL.)

     Dot commands whose usage differs under wsNOTE are:
     ".PL", ".MT", ".MB" can each be used only once, at the beginning of your 
file, before any text, or page misalignment may result.  If used, they 
override any default set with CONFIG.
     ".CP" may not function as intended if the text it governs includes 
footnote calls, since the notes cause the page to fill sooner than expected.
     ".LS" will affect the spacing of the output text, but not the notes.  In 
particular, ".LS 2" will produce double spaced text, while the notes remain 
single spaced.  This (rather than typing with ^OS) is the recommended method.
     ".FI" should be used only at the end of a file, where it will chain to a 
new input file.  Don't specify a drive; the file will be sought on the same 
drive as the original one.  This is the easiest way to break up a large 
document.  For example, PART1.DOC might end with the line ".FI PART2.DOC".
     (Although ".LS" and ".FI" are Mailmerge commands, you don't need Mail- 
merge for them to work, because wsNOTE is processing them itself.)

     wsNOTE also has two new dot commands of its own:
     ".NN" (Note Number), sets the current note number the same way ".PN" sets 
page numbers.  This can be used to reset to 1 at the start of a chapter, or to 
synchronize numbers across multiple files.
     ".FB" (Figure Block), provides an extra feature which WordStar lacks.  
".FB nn" causes the next 'nn' lines of text (or blank space) to appear 
together on the next page, while the surrounding text continues to flow around 
normally.  Thus in contrast to ".CP", no premature page break occurs.  If you 
can't see immediately how this is useful, try it out!  This feature is used 
for printing tables intact, or setting aside space for an illustration to be 
pasted in, without interrupting the text in an unnatural way.  Figure blocks 
can be no larger than one page.
     (WordStar will of course not recognize ".NN" and ".FB" as valid dot 
commands; don't be disturbed by the "?" shown in the flag column.)


                                RUNNING wsNOTE
                                --------------


     Once you've done the work of writing your file, actually formatting it is 
easy.  You can do this either from the operating system prompt, or from within 
WordStar via the Opening (No-File) Menu "R" command.  If you've never used the 
"R" command, now is the time to discover it.  It allows you to run nearly any 
command or program, without exiting from WordStar.  At the Opening Menu, type 
"R".  WordStar asks "COMMAND?", and you simply type in the name (followed by 
any required arguments) and press <RETURN>.  When the program is finished, the 
message "Hit any key to return to WordStar" will appear; doing this brings 
back the Opening Menu.
     In either case, WSNOTE takes two arguments.  The first is your text 
filename, and is required.  Include the drive, if different from the current 
drive.  The second is an optional flag "-e", if you want endnotes; omit it if 
you want footnotes.

EXAMPLES: (from DOS, with endnotes)          A>wsnote b:sample.fil -e
          (from WordStar, with footnotes)    COMMAND? wsnote sample.fil

     There must be enough free space on the disk in use for another complete 
copy of your document.  Remember to add together the sizes of any files you 
are chaining together, and add a few extra K just to be safe.  When wsNOTE 
stops, there will be a new file on the disk, with the same name as the (first) 
input file, but the type ".PRN".  (SAMPLE.FIL will produce SAMPLE.PRN.)  This 
is the formatted output, all set to print using WordStar's "P" print command.
     It is wise to make a habit of proofreading the ".PRN" file before 
printing it, in order to check the page layout.  Edit it in "D" (document) 
mode, and scroll through it at will.  But remember, to make corrections you 
should edit your source file, then run wsNOTE again.  Make changes directly in 
the ".PRN" file only when needed to get it to print the way you want; and 
never do anything resulting in a net change of the number of lines.  This 
would cause pages to become misaligned in printing.  (Make sure WordStar's 
page break indicators agree with the wsNOTE "..page" markers.)
     If you selected endnotes ("-e"), there will be a second output file with 
the type ".NOT", containing your notes.  It is also a document file, but may 
be edited or reformatted as you like before printing.  (You may, for example, 
want to insert a ".PN" command to get the right page numbering.)



     NUMBERING OPTION: It is also possible to use wsNOTE to simply number 
items in a list, for example a bibliography.  Just enter the usual "##" (or 
"###") for the number of each item, making sure that all are formatted exactly 
the same way.  Then run WSNOTE on the file, with the option "-n":

EXAMPLE:            COMMAND? wsnote bibliog.104 -n

The numbering will proceed sequentially from 1 (unless modified with "##1" or 
the .NN command).  Other wsNOTE features (such as figure blocks) also remain 
active.  The output file will have the type ".PRN".


                                  USAGE TIPS
                                  ----------

     Make sure that you either (1) use CONFIG to set the page length, top and 
bottom margins in wsNOTE to agree with the defaults you have installed in your 
copy of WordStar, or (2) always put ".PL", ".MT", and ".MB" commands at the 
top of your file.  Otherwise wsNOTE and WordStar won't agree on the page 
format, and pages will get misaligned.

     Follow the "FILE FORMAT" instructions exactly.  If a note call or number 
is not done correctly or consistently, wsNOTE won't recognize it, and notes 
may start getting mismatched, or an error may occur.  If a note block is not 
correctly marked off, it will appear to be missing, or not to end, and an 
error will result.
     Be careful if you "block move" a note block, to be sure that it still 
stands as a paragraph: begins after, and ends with, a hard carriage return.
     If you use right justified text, don't use three "###" signs unless you 
will need numbers over 99.  The extra one will add an unnecessary space.

     wsNOTE features don't "nest": you can't put dot commands, note calls, or 
note blocks inside of other note blocks or figure blocks.

     The .LS command is the easiest way to produce double-spaced text.  The 
alternative, multiple line spacing with ^OS in WordStar, can cause problems in 
the spacing of notes, and is not recommended.  If you must use ^OS, be sure 
that only a single <RETURN> precedes and follows each note block.

     If you want a blank line between each note in your output, insert an 
extra <RETURN> after every note in the source file.  Remember to do this for 
the last note in each block, too (before the closing "}"), or some notes will 
not be spaced properly.

     There are two ways to handle a document consisting of multiple files.  
First, you can chain the files together with a ".FI" at the end of each.  This 
will produce a single ".PRN" file, with the name of the first input file.  (If 
you are using external notes, they must also be in a single ".XNT" file with 
that name.)
     Alternatively, you can process each file quite separately.  At the start 
of each file, you can use the ".PN" and ".NN" commands to synchronize the page 
and note numbers.  This is best if a single output file would be unwieldy.

     Problems can occur in printing the ".PRN" file, if a page ends while an 
alternate print mode (underlined, compressed, etc) is in effect.  For example, 
the footnotes and next page header may also print in that mode, or the text 
may fail to return to it on the next page.  In this event you will need to 
stop the printing, edit the ".PRN" file, and manually insert extra print codes 
where needed to correct the problem.  Then print out the offending pages 
again.  Be careful not to insert or delete any lines in the process, or pages 
will become misaligned.

     The smaller the capacity of your disk drive, the smaller you should keep 
your text files.  WordStar always makes temporary and backup files; this can 
quickly fill up a small floppy disk.  Delete ".BAK" files when you can, and 
".PRN" files once they're printed.

                                 USING CONFIG
                                 ------------


     The CONFIG utility offers you a number of quick, useful ways to customize 
the use of wsNOTE to suit your tastes, or the requirements of a style manual.  
Most people will only need to run CONFIG once.  If you often have to use 
different styles, you will need to either keep CONFIG on your disk with WSNOTE 
or set up several different copies of WSNOTE.
     CONFIG takes a single argument, the name of your wsNOTE program.  (In- 
clude the drive if it's not the current drive.)  Again, CONFIG may be run from 
either the system prompt or the "R" command in WordStar.

EXAMPLE:        COMMAND? config wsnote.exe
 
     You will see a menu of all the parameters you can change, which are 
described below, and their current values.  Type the menu letter of the one 
you wish to change, then enter the desired value.  When you're through, hit 
<RETURN> to save your changes, or type ^C to abort without saving.  This copy 
of WSNOTE.EXE (or COM) will be modified as you chose.
     Read this list now, to familiarize yourself with the control you have 
over the appearance of the printed output.  The choices, in order, are:


     A: note number character.  The default is "#".  If you want or need to 
use a different character to designate note numbers, you may.

     B,C: note block delimiters.  The defaults are "{}".  Again, if you 
prefer different characters you may change these.

     D,E: note line character, length.  The character to use for the note 
separator line between text and footnotes (D), and how long the line should 
be (E).  Defaults are "-", 20 characters.  You may prefer "~", "_", etc, or 
a longer line.  If you want no line, set the length to 0.

     F,G: blank lines before, after line.  These are the number of lines you 
want to skip before and after the note separator line.  Defaults are 1 line 
before (F), and 0 after (G).

     H: minimum lines for note start.  Setting this to "n" means that if 
there is not room on the page for the first "n" lines of a footnote, the 
note will be postponed to the next page.  Default is 1 (no postponement).

     I,J: printer codes for notes.  You can get your notes to automatically 
print in a different mode from the text (such as compressed), if you want.  
Enter the WordStar control code you've installed to turn on the printer mode 
desired for the notes (I), and the one to return to your text mode (J).  
These might be, for example, ^Q and ^R; type these codes in directly.
     If you use a print mode with a different character width, be sure to 
format your note blocks with appropriately adjusted margins, so their prin- 
ted width will match that of the text.
     Defaults: no codes.  (This displays as "none", and may be entered from 
the keyboard by typing <RETURN> alone.)

     K: physical page length.  This is the number of lines on a page.  Set
it to agree with whatever you have installed in WordStar.  This setting is 
overridden by the .PL command, if used.  Default: 66 lines (for ordinary 11" 
paper, 6 lines per inch).

     L,M: top, bottom margins.  Again, set these to agree with the defaults 
you have installed in WordStar.  These settings will be overridden by the 
commands .MT or .MB, if used.  Defaults: 0 lines top, 0 lines bottom.

     N: new page resets to note 1?  To change this, enter "Y" or "N".  If 
you set this to "Yes", the first note number on each page starts over again 
at 1.  Default: "No", note numbers continue to increment.

     O: notes up on short pages?  Enter "Y" or "N".  Ordinarily "No", and 
footnotes always print at the very bottom of the page.  If set to "Yes", on 
a partly filled page, notes (if present) print up right under the text.

     P: avoid widow text lines?  Enter "Y" or "N".  Ordinarily "No"; if you 
set this to "Yes", wsNOTE will avoid beginning a paragraph on the last line 
of a page (it will begin on the next page instead).

     Q: right justified text?  Enter "Y" or "N".  Ordinarily "Yes", and 
extra (soft) spaces are inserted where necessary to preserve justification 
(for example, after one-digit note numbers).  Set to "No" to avoid these 
extra spaces in unjustified text.

     R: buffer size in K.  There are four buffers in wsNOTE, each of this 
size (default: 6K).  The minimum is 2K.  If you start getting "buffer over- 
flow" error messages from wsNOTE, increase this size.  If you get "buffers 
exceed available RAM", decrease it.




                                CONFIG ERRORS

     CONFIG modifies the actual WSNOTE.EXE file.  This cannot be done if the 
disk WSNOTE is on is write-protected, or Read/Only.  In such cases, a BDOS 
Error message will appear, and the changes will not be made.
     Note that CONFIG will refuse to save if you have specified a buffer size 
below 2K, or a page length that's too small for the margins.  Correct the 
offending value(s) and try again.

     In addition, two error messages may appear when you try to run CONFIG:

"can't open input file" - The name you gave for your wsNOTE program doesn't 
  exist.  Either it's misspelled or incomplete, or it's on another drive.

"can't CONFIG that file" - The file exists, but it either isn't wsNOTE, or 
  isn't the correct version.


                                ERROR MESSAGES
                                --------------


     Every effort has been made to trap and identify errors neatly.  When an 
error causes wsNOTE to abort formatting, the output file(s) will of course be 
incomplete.  Take a look at the end of the ".PRN" file, to get an idea of 
where in your source file the problem occurred.  Then refer to this alpha- 
betical list, for some suggestions as to the likely cause.


"bad dot command argument" - The number following a dot command appears to 
  be invalid or missing.

"bad figure block" - A figure block was still being read in when the end of 
  your file was reached.  Either some of its text is missing, or you need to 
  decrease the number of lines in the ".FB" command.

"bad note block" - A note block was still being read in when the end of your 
  file was reached.  This means the note block is not terminated properly 
  with "}", <RETURN>.

"bad option specified" - The only thing allowed on the command line after 
  "WSNOTE INPUT.FIL" is "-E" or "-N".  You typed something else.

"buffers exceed available RAM" - Your computer doesn't have room for four 
  buffers of the current size.  Use CONFIG to decrease your buffer size.  
  The maximum under CP/M will be about 10K; under MSDOS, about 15K.

"can't open file" - The file specified in a ".FI" command can't be found.  
  There is an error in the filename, or you tried to specify a drive.

"can't open input file" - The file you gave on the wsNOTE command line can't 
  be found on the current (or specified) disk.  Did you misspell it, or is 
  it on a different disk?

"can't open output file" - wsNOTE can't write its output on the current (or 
  specified) disk.  Either it's read-only, or its directory is full.  (This 
  error can occur if your input file has the type ".PRN" or ".NOT", which 
  you should avoid.)

"figure block exceeds page" - A ".FB" command has requested a figure block 
  larger than the current number of free lines on a page.  Decrease the 
  header and bottom margins, or make the figure block shorter.

"figure buffer overflow" - The text of a figure block filled the available 
  buffer.  Decrease the amount of text in the block, or use CONFIG to 
  increase your buffer size.

"foot buffer overflow" - The text of footnotes already scheduled to print 
  has filled the available buffer.  Don't call so many notes from a single 
  page, or make them shorter, or use CONFIG to increase your buffer size.

"missing note block" - A note block was still being searched for when the 
  end of your file was reached.  Either some notes are missing, or there are 
  too many calls in the text.

"no file specified" - You didn't give wsNOTE the name of your text file, so 
  it couldn't even get started.

"no note in buffer" - The contents of a note block don't look like notes, 
  because there is no proper "##" number on the first line.  There is 
  probably a simple error in its format.  The same error in a subsequent 
  note in the block will cause it to become part of the preceding one.
     In external note mode (with an ".XNT" file), this message indicates 
  that there weren't enough notes in the file for all the calls in the text.

"note buffer overflow" - Your note block appears to be too long to fit in 
  the note buffer.  Probably, the block isn't terminated properly with "}", 
  <RETURN>.  Possibly you've left out some calls, and so have too many 
  notes.  If your notes are simply too large, or you've put in too many 
  before their calls, you need to increase your buffer size with CONFIG.
     In external note mode (with an ".XNT" file), this message means that 
  one single note was too large to fit in the buffer.

"page align error" - This is very unlikely.  It indicates that wsNOTE can't 
  cope with the combination of page length, header and bottom margins that 
  you have set with CONFIG, which must be pretty strange.

"source line too long" - There appears to be a line in the text file that 
  exceeds the maximum length, currently 256 characters.  You probably forgot 
  to reformat a paragraph.

"text buffer overflow" - While looking ahead to find a note block, the text 
  buffer filled up.  You need to put this note block closer to the point in 
  the text where it was called, or to increase your buffer size with CONFIG.

"[Warning: extra notes]" - This is only a warning.  wsNOTE has finished, but 
  there still seem to be unused notes.  Probably you left out a call in the 
  text, and the following notes may all be mismatched as a result.  Proof- 
  read the output carefully.
     In numbering ("-n") mode this error means that a note block was found.

"[Warning: found .XX]" - This is only a warning; formatting does not stop.  
  You have used a dot command that is not recommended, and will likely cause 
  misaligned pages in your printout.  Abort wsNOTE with ^C if this was a 
  mistake.  Proofread the output carefully.

"[Warning: multiple spacing]" - This is only a warning.  wsNOTE has found 
  text that was multiple-spaced with ^OS.  This may cause spacing problems 
  in the notes.  Proofread the output carefully.



                                    [END]

                        wsNOTE Manual Rev. 1.35 (04/89)
```
{% endraw %}

## ZIP.DOC

{% raw %}
```

                                   ZIP.DOC
                                   -------
                           Instructions for ZIP.COM
                   IBM PC Fast Serial File Transfer Utility
                           Version 1.43 (03/28/90)

                             (c)1988-90 E. Meyer


        Requires:  two IBM PC compatible computers with DOS 2.x or above;
                   appropriate serial (null modem) cable.



     ZIP is a tiny, fast utility to transfer files between two IBM compatible 
computers over an ordinary serial cable connection.  This is especially useful 
when large amounts of data are involved, and essential when the computers 
don't share a common disk size or format.
     ZIP is ideal for laptop computers: it requires only 7k of disk storage, 
and consumes no memory when not in use, yet it can transfer files or groups of 
files with a single command.


===============================  USAGE POLICY  ===============================


     The ZIP utility and its documentation are copyright (c)1988-90 Eric 
Meyer, all rights reserved.  They may not be circulated in any incomplete or 
modified form, nor sold for profit, without written permission of the author.  
The use or sale of ZIP is subject to the following terms:

INDIVIDUAL USE:       ZIP may be freely used and shared with others; there is 
----------         no required registration fee.  (If you like ZIP and find it 
                   useful, please do consider sending a contribution!)

INSTITUTIONAL USE:    Any corporation or institution wishing to use ZIP in the 
-------------      course of its business must purchase a SITE LICENSE.  A 
                   standard license, allowing the use of ZIP on up to 20 
                   different computers, can be ordered for US $50.00; write 
                   for terms concerning larger quantities.  A disk containing 
                   the latest release of ZIP will be included at no additional 
                   charge (please specify 5.25" 360k or 3.5" 720k disk).

COMMERCIAL SALE:      Any software dealer or library may offer ZIP for sale, 
           ----    as long as the price of the disk containing the program 
                   does not exceed US $5.00.  With this single exception, the 
                   sale of ZIP for profit, either alone or together with other 
                   software or hardware, requires a contract to provide for 
                   royalty payments.  Please write to the author for terms.

CUSTOMIZATION:        It is often possible to develop modified versions of ZIP 
                   for special applications.  Contact the author for details.


           Eric Meyer
           401 12th Ave SE, #139            CompuServe [74415,1305]
           Norman, OK  73071  USA


     DISCLAIMER: You undertake to use ZIP at your own risk.  The author 
assumes no liability for damages of any kind resulting from your use of ZIP.


===============================  INTRODUCTION  ===============================


     Anyone with two computers probably needs to transfer programs or data 
between them... If you have compatible disk drives, you can just swap disks, 
though this gets tedious if done frequently or with large amounts of data.  
And if you have incompatible drives, like old-style 5.25" versus the 3.5" 
drives on laptop computers, you're out of luck!

     Rather than shuffling stacks of disks, or buying expensive additional 
hardware, a simple (null modem) cable connected between serial ports can be 
used to transfer data instead -- at rates approaching 14K per second!  There 
are good commercial programs for this purpose, though they typically cost over 
$100; if you're willing to find or make your own cable, you can do the same 
job with ZIP instead.  ZIP doesn't have all the features of the fancy 
programs, but then it doesn't consume precious system memory either; it just 
transfers files when you need to, as simply as using the COPY command.

     ZIP is as fast as a serial transfer program can be, and faster than some 
free/shareware programs that claim to operate "at 115200 bps" (twice as fast 
as PCMag's ZCOPY, for example, which uses a slower I/O technique).  ZIP can 
transfer data up to 6 times faster than a telecom program over a serial 
cable... 48 times faster than typical modem transfers.
            Telecom programs: modem       2400 bps            0.3 K/sec
                            : cable      19200 bps            2.3 K/sec
            ZIP: cable                  115200 bps     up to 14.1 K/sec!
If you don't own the latest '386, ZIP will come about as close to this amazing 
throughput as your computer speed allows.  (Between an 8MHz XT clone and 
4.77MHz laptop, it reaches about 10K/sec.)  Of course, disk access also takes 
time; with any system, large amounts of data can be sent more quickly using 
hard or RAM disks, rather than (slow) floppy disk drives.


-------------------------------- I. USING ZIP --------------------------------


     Transferring files with ZIP requires a copy of ZIP.COM on both computers, 
and the correct cable connection between them.  For more on null modem cables, 
see the Technical Information section below.  If incompatible disk formats 
prevent you from getting ZIP.COM itself onto the second computer to begin 
with, you can "clone" a copy of ZIP with the ZIPDUP utility (see below).

     Transferring a file between computers with ZIP is as easy as copying it 
from one disk to another.  To transfer files, once the cable is properly 
connected to the serial ports of the two computers, from the DOS prompt:

           1.  MENU-DRIVEN OPERATION.  Simply type "ZIP" on both 
      machines; the program will step you through all the necessary 
      choices, including transferring or receiving files.
           You will also have the option to view file directories 
      and/or delete files.

           2.  Command line operation, for experienced users.  (See 
      full explanations and usage examples, below.)
              C>zip FILENAME      to send a file
              C>zip /R            to receive
              C>zip FILENAME /F   to fetch a file from serer
              C>zip /S            to enter server mode

     As each file is transferred you should see a line of "=" signs 
representing the remaining file length (if over 64k), with a blinking asterisk 
("*") at the end.
     During communications, ZIP can be aborted by pressing ^C (or Ctrl-Break):       
              (1) on either end, during initial handshaking
                    (otherwise ZIP waits as long as necessary for connection)
              (2) on sending end, during file transfer
                    (will abort once current file is finished)
              (3) at confirmation or string input prompts.


                                SENDING FILES

     In menu mode, simply select "S"end, and you will be prompted for the 
filename(s).  For command-line use, specify the name(s) of the file(s) to send:

              C>zip FILENAME

The "FILENAME" can be a single file (including directory), or a GROUP 
specified by wildcards (eg, *.BAK), or a LIST of these delimited by commas 
(FILE1,FILE2).  Each item assumes or continues the same drive/directory as the 
previous one (unless the new one begins with a drive or root directory).  Thus

              C:\WRK>zip B:\SF\GORT,LTRS\*.892,KLAATU

will send files B:\SF\GORT, B:\SF\LTRS\*.892, and B:\SF\LTRS\KLAATU.
     Any desired options may follow the filename(s).  Files will appear with 
the same filename, in the receiving directory.  Take care not to send two 
files with the same name, as one would overwrite the other.


                               RECEIVING FILES

     In menu mode, simply select "R"eceive, and you will be prompted for the 
directory to receive into.  For command-line use, specify the option "/R" for 
RECEIVE:
              C>zip /R

Each file will appear with its original filename.  Files are received into the 
current directory, unless you specify another.  In command line mode, this can 
be done in square brackets after the /R option:

              C>zip /r[DIRECTORY]

(Note: ZIP also still accepts the syntax of earlier versions, where the 
directory was specified from the command line by typing:
              C>zip DIRECTORY /r
but this tends to seem confusing, and may not continue to be supported.)


                          SELECTING THE SERIAL PORT

     IBM-compatible computers have anywhere from one to four serial (RS232) 
ports.  By default ZIP uses the COM1 port.  The standard port addresses are:
              COM1: 03F8h         COM3:03E8h
              COM2: 02F8h         COM4:02E8h
Some computers (including PS/2s!) use different port addresses for COM3 and 
COM4; to use a nonstandard port address, you must modify ZIP.COM with ZIPCFG.
     You can select any standard COM port during operation of ZIP:  in menu 
mode, just select the choice to modify "P"arameters.  In command line mode, 
specify one of the following options:

            /1-4  = Use port COM1-4.

     You will see a note in the ZIP signon message, "Port=____", giving the 
port address in use.


                         SELECTING FILES FROM A GROUP

     If you want to transfer only certain files in a group (such as *.BAK) 
with ZIP, you can request that you be prompted to confirm each file 
individually: you will be asked to hit a key (Y/N) to determine whether the 
file is to be sent.  (In menu mode, you can select "O"ptions for a help 
message describing the selective copy operations.)  After the names of files 
to be transferred, in menu or command line mode, specify this option:

              /P  = PROMPT to confirm files individually

     This option (which can be combined with others) can be specified on 
either end -- but the option on the SENDING (or active) end governs each 
transfer.  You will see a note in the ZIP signon message, "Option /P", if this 
option is in effect.


                              OVERWRITING FILES

     It is possible that a file already exists on the receiving end with the 
same name as the one being sent.  By default, ZIP doesn't care: it will 
transfer all files specified, whether or not they overwrite existing ones.  
Several options are provided to modify this behavior.  (In menu mode, you can 
select "O"ptions for a help message describing the selective copy operations.)  
After the names of files to be transferred, in menu or command line mode, 
specify one (or two) of these options:

              /N  = copy NONexisting files only
                       (cannot be used with /E or /T)
              /E  = copy EXISTING files only
              /T  = TIMESTAMP determines files sent

     The /N option will prevent all files from being overwritten.  The /T 
option will allow overwrites only when the new copy has a more recent time 
stamp.  The /ET combination is especially useful for backup purposes: it 
transfers only more recent copies of files that already exist.
     These options can be specified independently on either computer -- but 
the options on the SENDING (or active) end govern each transfer.  You will see 
a note in the ZIP signon message, "Option /_", if an option is in effect.


                                 SERVER MODE

     It would obviously be easier to transfer files if you could do all the 
typing from one keyboard -- and "server mode" lets you do just that.  In 
server mode, ZIP stays "on line" on one end, ready to send or receive files, 
or answer directory requests, from the other end automatically.  To enter 
server mode: in menu mode, just select the choice for ser"V"er.  In command 
line mode, specify the option /S for SERVER:

              C>zip /S

     ZIP will then remain ready to exchange files until such time as you press 
^C or Ctrl-Break to exit server mode.

     From the other ("active") keyboard, you can then transfer files TO the 
server; these will be received into the default directory, either the current 
one or another that you specify in square brackets:

              C>zip /s[NEWDIR]  = Server mode, default directory NEWDIR.

     In any event, when you send files to the server, you will be prompted for 
a destination directory (if desired) to override the default on the server end.  
In command-line mode, you can specify this on the command line in brackets:

              C>zip sendfile /[DESTDIR]

(Specify "/[]" if you simply want to avoid the prompt and use the default, for 
example, when running ZIP from a batch file.)

     You can also fetch files FROM the server.  In menu mode, just select the 
choice to "F"etch files.  In command line mode, specify the option:

              /F  = Fetch specified files from server.

     You must specify the directory with the filenames, if they are not in the 
default directory on the server end.  You will be prompted for a directory to 
receive the files into, unless you specify one in square brackets after the /F 
option:
              C>zip filename /f[DESTDIR]  = Fetch into directory DESTDIR.

(Again, specify "/f[]" to avoid the prompt and use the current directory.)
     A fetch request will not be completed until server mode is detected on 
the other end.


                    VIEWING DIRECTORIES and DELETING FILES

     When ZIP is in menu-driven mode, you will see choices for "D"irectory and 
d"E"lete, offering simple file maintenance from within ZIP.COM itself.
     The directory function provides an alphabetized file listing for your 
reference, and the free space left on the disk.  You will be prompted for the 
files to list.  If you just hit RETURN, ZIP lists all files (*.*) in the 
default directory.
     The delete function prompts for a filename to delete (as always, a 
directory may be included).  Note that wildcards ("*,?") are NOT allowed.

     If the other computer has ZIP running in SERVER MODE, you can also 
request a directory from it, or delete files on it.  Simply type a ">" before 
the filespec for the server.  This can be done alone, or together with a 
request on the active end:

              Directory: \WORK\*.BAK                active alone
              Directory: >B:\BACKUP                 server alone
              Directory: \WORK\*.BAK >B:\BACKUP     combined
and similarly,
              Delete: \WORK\THIS.FIL >B:\BACKUP\THAT.FIL

     A server directory or delete request will not be completed until server 
mode is detected on the other end.


                            BACKING UP A HARD DISK

     At times you may need to transfer the entire contents of a sizable disk, 
including several levels of directories.  ZIP is not specifically designed to do 
this: it does not create directories while copying, nor does it look for files 
within subdirectories.  However, it is easy enough to put the receiver in 
Server mode, then run a BAT file containing a separate command for each 
desired directory (once corresponding directories exist on both ends):
              zip \work\*.* /t[\work]
              zip \work\ed\*.* /t[\work\ed]  ...


                      USAGE EXAMPLES (Command line mode)

SENDING FILES:

C>zip b:myfile,*.doc              sends files B:MYFILE, B:*.DOC

C>zip my.* /2 /p                  sends files C:MY.* over COM2, with
                                prompts to confirm each file individually

C>zip *.* /n                      sends all files which don't already exist
                                on receiving directory

C>zip a:chapter.* /et             sends all files A:CHAPTER.* of which an
                                older version exists on the receiving end
RECEIVING FILES:

C:\WORK>zip /r                    receives files into directory C:\WORK

C:\WORK>zip /2 /r[\temp]          receives over COM2 into directory C:\TEMP

ENTERING SERVER MODE:

C>zip /s                          waits as server to send or receive files

C>zip /s[d:\]                     waits as server, with default directory D:\

EXCHANGING FILES WITH SERVER:

C>zip *.bak /[]                   sends files *.BAK to server's default dir

C>zip *.bak /[b:\recs]            sends files *.BAK to directory B:\RECS

C>zip b:\recs\my.* /f             fetches files MY.* from directory B:\RECS

C>zip b:\recs\my.* /f[\orig]      fetches files MY.* from directory B:\RECS
                                on server into directory C:\ORIG


---------------------- II. UTILITIES: ZIPDUP AND ZIPCFG ----------------------


     ZIP comes with two utility programs: ZIPDUP and ZIPCFG.  If you need to 
duplicate ZIP on your other computer in order to begin using it, you can do so 
with the ZIPDUP utility.  If you want to configure the default values in ZIP 
differently, you can use ZIPCFG.

                                 USING ZIPDUP

     In order to duplicate or "clone" ZIP itself on another computer, ZIPDUP 
runs DEBUG, remotely, to receive and write the file to disk.  This is a 
feature most people need only once, so it is not part of ZIP itself.  ZIPDUP 
will duplicate any version of ZIP (indeed, any file, though it's slow and 
cumbersome compared to ZIP itself).

     1.  Connect the cable to the desired serial ports (COM1 or COM2 only).  
The cable must have the DTR wires connected, as well as the data lines -- see 
cabling diagram under "Technical Information" below -- or ZIPDUP will not work.

     2.  Set up the receiving end:  Make sure the MSDOS utilities DEBUG and 
MODE are available (either in the current directory or accessible via PATH).
     Be certain that the last character of your DOS prompt is ">".  (Yes, this 
actually matters!)  If in doubt, type the command:
              PROMPT $P$G
     Then prepare to receive data by typing these two commands:
              MODE COM#:96,N,8,1     ("#" = 1 or 2 only)
              CTTY COM#
(The CTTY command gives control to the sending computer, via the COM# port.  
The receiving system will seem to "lock up" -- the keyboard is ignored, etc.)

     3.  Now, on the sending end, to duplicate your copy of ZIP.COM, type:
              C>zipdup FILENAME
(If you omit the filename it defaults to "ZIP.COM".)
     You will be asked to specify the COM port (1 or 2 only) that the cable is 
connected to; if the connection can be made, the transfer will proceed.  When 
ZIPDUP exits, you will find a duplicate copy of FILENAME in the current 
directory on the receiving computer.  You can transfer ZIPCFG the same way, 
but it's easier to send it using ZIP itself!

                                 USING ZIPCFG

     If you don't instruct it otherwise (via command-line options or menu 
choices), ZIP assumes its built-in "defaults" of port COM1, 115200 bps, no 
delay.  You can, however, configure your copy of ZIP.COM to change these 
defaults as you like, using ZIPCFG.COM: just type
              C>zipcfg FILENAME
(If you omit the filename it defaults to "ZIP.COM".)  You will be given the 
chance to specify any new default values you like.  They can, of course, be 
overridden by the usual means when running ZIP.

     Please DO NOT distribute modified copies of ZIP.COM; this could confuse 
other users.  They are for your personal use only.  (ZIPCFG includes an option 
to restore the original default values.)


--------------- III. TECHNICAL INFORMATION and TROUBLESHOOTING ---------------


     Like many communications programs, ZIP does full CRC (Cyclic Redundancy 
checksum) verification on the data to guarantee accurate transfer, although 
ZIP uses its own transfer protocol.  Be sure to use the SAME version of ZIP on 
both ends: the transfer protocol may have changed.  Do not disturb the cable 
when ZIP is running, as this may cause the program to stall, requiring a 
reboot of your computer(s).

     Using any communications software in a multitasking environment often 
requires special precautions.  ZIP, in particular, may need to be given a 
"non-swappable" or "foreground-operation" status, so that other tasks will not 
interfere with its operation.  You should allocate at least 96k of memory to 
run ZIP, though it will operate with as little as 48k.  You may also need to 
set a somewhat slower baud rate (see below) for ZIP to work reliably.
     Do not use ZIP while any serial ports are in use by other software.  In 
particular, potential conflicts exist between COM1 and COM3, and between COM2 
and COM4, because they use the same interrupt vectors.

                                   Cabling

     Your SERIAL CABLE should be a "null modem" cable: if you're building or 
shopping for a cable, the transmit and receive data lines should be crossed, 
the signal ground straight through.  (The pin numbers depend on whether you 
have a 9-pin DB9 or 25-pin DB25 connector, see figure.)  No other connections 
should be needed; ZIP uses no hardware handshaking lines.  (NOTE: ZIPDUP does 
require the connections between pins 20/4 and 6.)

        |--COMPUTER 1--|         |--COMPUTER 2--|
         DB9       DB25           DB25       DB9
          2 - - - - 3 - - - - - - - 2 - - - - 3   \ transmit &
          3 - - - - 2 - - - - - - - 3 - - - - 2   / receive data
          5 - - - - 7 - - - - - - - 7 - - - - 5   - signal ground

          4 - - - - 20  - - - - - - 6 - - - - 6 * \
          6 - - - - 6 - - - - - - - 20  - - - 4 *  \handshaking (optional)
          7 - - - - 4 - - - - - - - 5 - - - - 8    /(* required for ZIPDUP)
          8 - - - - 5 - - - - - - - 4 - - - - 7   /

Actually, any serial cable that doesn't work by itself, should work with a 
"null modem adapter" attached.  If possible, use a properly shielded cable; 
high speed transmissions can be especially susceptible to RF interference.  
I am not an expert on RS232 hardware: find a good book if you need further 
assistance.

                      Adjusting the Baud Rate and Delay

     BAUD RATE: ZIP normally transmits data at 115200 bps.  For some 
specialized applications, such as multitasking environments, it may be 
necessary to set a somewhat slower baud rate.  There is no run-time option for 
this; it can only be set with ZIPCFG.

     DELAY: Most users also will not need to worry about the "delay factor".  
(In fact, it will be removed from future versions unless users notify me that 
they still need it.)  In theory, due to large differences in raw CPU speed, 
when sending files from a very fast '286 or '386 AT to a very slow PC, the 
receiver might be unable to keep up, and the transfer would be aborted.  
Therefore a delay factor is provided, ranging from 0 (the default) to 9, to 
slow down the sending rate.  You can experiment with delay settings in menu 
mode (select the choice to modify "P"arameters), or make modifications with 
ZIPCFG to the copy of ZIP on the "fast" computer.
     This option can be specified on either computer -- but the setting on the 
SENDING end governs each transfer.  You will see a note in the ZIP signon 
message, "Delay=_", giving the current default.


                                ERROR MESSAGES

    <Argument error>  invalid command line argument(s).
     <Out of memory>  less than 64K free RAM available.
     <No connection>  no files transferred.  (Bad cable? Wrong version?)
         <No server>  function requires server mode on other computer.
    <Too many files>  global filespec (eg *.*) includes over 512 files.
<Conflict with NAME>  name conflicts with a directory or read/only file.
     <Cannot delete>  specified file didn't exist, was read/only, etc.
        <Disk error>  trouble writing to disk.  (Disk full?)
           <Aborted>  you pressed ^C.
             <Error>  error on other end; or, unrecoverable error.


                              PROBLEMS USING ZIP

     ZIP now works well on the vast majority of systems; please let me know if 
you encounter trouble.  Under certain software environments, particularly 
memory resident programs (TSRs) such as disk caches or multitasking, ZIP may 
fail to work; if you experience problems, do not use ZIP with that software.


                               VERSION HISTORY

ZIP 1.0  (4/88) - trial release.
    1.1  (4/88) - improved protocol; batch transfers; receive directory 
                 option; original file time/date preserved.
    1.2  (5/88) - improved error handling; patchable default port also 
                 allows use of COM3,4; small bug fixes.
    1.21 (5/88) - slower speed options; fixed bug in initializing ports.
    1.22 (8/88) - improved protocol; fixed bug in deleting temp file.
    1.23 (1/89) - menu-driven operation; detects disk-full errors.
    1.3  (4/89) - selective copy options /P,N,E,T; server mode, fetch; 
                 file directory; internal improvements.
    1.4  (9/89) - true error correction; delete file function; directory 
                 shows free space; ZIPCFG utility; small improvements.
    1.41 (11/89) - DesqView aware; multiple file arguments.
    1.42 (2/90) - minor improvements; ZIPDUP utility.
    1.43 (3/90) - simplified multiple argument syntax; corrected instructions 
                 for ZIPDUP.


(One final note -- this should be obvious but I'll say it anyway: ZIP is not 
related to the new PKZIP series of file compression utilities by Phil Katz.)

====================================[end]=====================================
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1273

     Volume in drive A has no label
     Directory of A:\

    LQCHR123 ZIP     21664   3-29-90   6:56p
    ZIP143   ZIP     18352   3-28-90   5:34p
    PI12     ZIP      5680   4-06-90   4:22p
    VDE152   ZIP     91011   4-06-90   2:16p
    READ     ME        370   3-25-90   4:25p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    DIRCMP12 ZIP      3314   3-25-90   4:28p
    ARCOPY14 ZIP      8769   3-25-90   4:30p
    DLT10    ZIP      4664   3-25-90   4:30p
    DTA13    ZIP      7726   3-25-90   4:31p
    QKRP12   ZIP      2961   3-25-90   4:33p
    WSNOT135 ZIP     30395   3-25-90   4:34p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771   4-23-90   7:51a
    FILE1273 TXT      3775   4-23-90   9:15p
           15 file(s)     220930 bytes
                           95232 bytes free
