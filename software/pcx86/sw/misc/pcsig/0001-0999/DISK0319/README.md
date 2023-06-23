---
layout: page
title: "PC-SIG Diskette Library (Disk #319)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0319/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0319"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 16"

    This collection has a bit of something for every DOS user.  Find files
    lost in a hard disk subdirectory or in a big pile of floppies.  List
    BASIC and WordStar files without having to go into either program first.
    Develop a visual DOS shell, remove hidden directories, manage your
    memory, increase the speed of your disk drives, create a disk catalog,
    print diskette labels and much more.  If you've ever been frustrated by
    the design of DOS commands, this is a library you will use often.
    File Descriptions:
    
    SCAVEN   DOC  Documentation for SCAVEN.
    DRVTEST  BAS  Simple disk test.
    DISKORAY EXE  Check diskette for rotation speed and seek test.
    COVER2   COM  Prints compressed directory for diskette envelopes.
    COVER    DOC  Documentation for cover2.
    KNEW     DOC  Documentation for KNEW.EXE.
    HIDE_RD  COM  Remove a hidden directory.
    HIDE_MD  COM  Make a hidden directory.
    HIDE_CD  COM  Access a hidden directory.
    HIDE     DOC  Documentation for HIDE, a simple security system.
    FDATE    DOC  Documentation for FDATE.
    FDATE    COM  Change date and time stamp of a disk file.
    FASTDISK COM  Part of SPEEDUP.
    SCAVEN   COM  Protect blocks from being deallocated by CHKDSK.
    RENDIR   COM  Rename directories.
    READBAS5 EXE  List a non-ASCII basic program without loading BASIC.
    PFM      COM  Visual shell for DOS commands.
    PC-DISK  COM  Catalogs your floppy diskettes.
    MOVE     DOC  Documentation for MOVE2.
    MOVE     COM  Copy files to new dir and verify copy, erase old copy.
    LISTPAST COM  List all files created before today.
    LISTARCH COM  List all archive files.
    KNEW     EXE  Copy *.* but only new files with more recent date stamp.
    LIST---- DOC  Documentation for LIST2DAY,LISTPAST,LISTARCH.
    LABEL    LBR  Part of COVER2.
    LIST52   HLP  Part of LIST52.
    LIST52   DOC  Documentation for LIST52.
    LIST52   COM  Scroll up and down through files using editor keys.
    LIST2DAY COM  List all files with today's date stamp.
    SDIR26   COM  List directories in 4 columns with file name and size.
    SDIR50   COM  Visual shell for executing DOS programs.
    SDL      COM  List directories sorted by various means.
    SDISK2   DOC  Documentation for SDISK2.
    SDISK2   COM  Sorts disk directory so dir will list files in order.
    SDIR50   DOC  Documentation for SDIR50.
    SHOWDIR  COM  List subdirectories in a given directory.
    SDL      DOC  Documentation for SDL.
    SORTF    EXE  Sorts ASCII data files.
    SORTF    DOC  Documentation for SORTF.
    SPEEDUP  DOC  Documentation on SPEEDUP.
    SPEEDUP  COM  Make your floppy disk run faster.
    TD13     DOC  Documentation on TD13.
    TD13     COM  Combines DOS TREE and DIR commands; makes a better tree.
    ST       DOC  Documentation for ST.COM.
    ST       COM  List WORDSTAR files one screen at a time.
    TREE2    COM  Tree showing only subdirectory names without file names.
    UNIQCOPY BAT  Same as copy *.* but only new files not on target disk.
    UNIQCOPY DOC  Documentation for UNIQCOPY.
    VFILER   EXE  Visual interface for maintaining files and subdirectories.
    VFILER   DOC  Documentation for VFILER.
    Z        EXE  Visual shell lets you look at your directories.
    WHEREII  DOC  Documentation for WHEREII.
    WHEREII  COM  Finds directory path for all copies of a file on a disk.
    READ     ME   Notes on DB Screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DRVTEST.BAS

{% raw %}
```bas


10  'DISK DRIVE TEST
20  'JOE McDERMOTT - DECEMBER 1982
25  'NORTH JERSEY IBM PC CLUB
30  '
40  'THE PROGRAM CREATES A SERIES OF SEQUENTIAL FILES
50  'IT WRITES DATA TO THEM AND READS IT BACK FOR VERIFICATION
60  'FINALLY THE TEST FILES ARE ERASED/
70  'THE FILES ARE OF THE FORM "XXX.TST" WHERE "XXX" ARE THREE LETTERS
80  'CHOSEN AT RANDOM, E.G. "EBG.TST","CXU.TST"
90  '
100  NUMFILES=40        'NUMBER OF FILES THAT WILL BE CREATED
110  DIM FS$(NUMFILES)  'ARRAY FOR STORING FILESPECS
120  FTYPE$=".TST"      'FILE EXTENSION USED IN THE TEST
130  INPUT"DRIVE TO BE TESTED ";DD$
140  DD$=DD$+":"
150  '
160  INPUT"*** INSERT DISK AND PRESS `ENTER' ***",Z$
170  '
180  '   ---------- CREATE FILES ----------
190  FOR I=1 TO NUMFILES
200    FILENAME$ = CHR$(RND*26+64)+CHR$(RND*26+64)+CHR$(RND*26+64)
205    FS$(I)=DD$+FILENAME$+FTYPE$
210    PRINT"CREATING: ";FS$(I);" #";I
220    OPEN "O",1,FS$(I)           'CREATE DIRECTORY ENTRY
230    PRINT#1,STRING$(255,"*")    'WRITE DATA TO FILE
240    PRINT#1,STRING$(255,"*")
250    PRINT#1,STRING$(255,"*")
260    CLOSE 1
270  NEXT I
280  '   ---------- READ BACK FILES -----------
290  FOR I=1 TO NUMFILES
300    PRINT"READING: ";FS$(I);" #";I
310    OPEN "I",1,FS$(I)
320    INPUT#1,L$:PRINT LEFT$(L$,75)
330    INPUT#1,L$:PRINT LEFT$(L$,75)
335    INPUT#1,L$:PRINT LEFT$(L$,75)
340    CLOSE 1
350  NEXT I
360  '   ---------- ERASE FILES ----------
370  FOR I=1 TO NUMFILES
380    PRINT"ERASING: ";FS$(I)
390    KILL FS$(I)
400  NEXT I
410  END  'OF PROGRAM

```
{% endraw %}

## FILES319.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 319  Utilities                                               v1.1
------------------------------------------------------------------------
From programs to find files lost in a hard disk subdirectory or in a big
pile of floppies to programs that list BASIC and WordStar files, this disk
has the programs to make your use of the IBM PC more productive. Along with
visual DOS shells and disk catalog programs this is one diskette that evey DOS
user should have.
 
COVER    DOC  Documentation for cover2
COVER2   COM  Prints compressed directory for diskette envelopes
DISKORAY EXE  Check diskette for rotation speed and seek test
DRVTEST  BAS  Simple disk test
FASTDISK COM  Part of speedup
FDATE    COM  Change date and time stamp of a disk file
FDATE    DOC  Documentation for FDATE
HIDE     DOC  Documentation for HIDE, a simple security system
HIDE_CD  COM  Access a hidden directory
HIDE_MD  COM  Make a hidden directory
HIDE_RD  COM  Remove a hidden directory
KNEW     DOC  Documentation for KNEW.EXE
KNEW     EXE  Copy *.* but only copies files with more recent date
LABEL    LBR  Part of COVER2
LIST---- DOC  Documentation for LIST2DAY,LISTPAST,LISTARCH
LIST2DAY COM  List all files with todays date
LIST52   COM  Scroll up and down through files using editor keys
LIST52   DOC  Documentation for LIST52
LIST52   HLP  Part of LIST52
LISTARCH COM  List all archive files
LISTPAST COM  List all files created before today
MOVE     COM  Copies files to new dir verifies new copy then erases old copy
MOVE     DOC  Documentation for MOVE.COM
PC-DISK  COM  Catalogs your floppy diskettes
PFM      COM  Visual shell for DOS commands
READBAS5 EXE  List a non-ASCII basic program without loading basic
RENDIR   COM  Rename directories
SCAVEN   COM  Protect blocks from being deallocated by CHKDSK
SCAVEN   DOC  Documentation for SCAVEN
SDIR26   COM  List directories in 4 columns with just file name and size
SDIR50   COM  Visual shell for executing DOS programs
SDIR50   DOC  Documentation for SDIR50
SDISK2   COM  Sorts disk directory so dir will always list files in order
SDISK2   DOC  Documentation for SDISK2
SDL      COM  List directories sorted by various means
SDL      DOC  Documentation for SDL
SHOWDIR  COM  List subdirectories in a given directory
SORTF    DOC  Documentation for SORTF
SORTF    EXE  Sorts ASCII data files
SPEEDUP  COM  Make your floppy disk run faster
SPEEDUP  DOC  Documentation on SPEEDUP
ST       COM  List WordStar files one screen at a time
TD13     COM  Combines DOS TREE and DIR commands to make a more usefull tree
TD13     DOC  Documentation on TD13
TREE2    COM  Tree showing only subdirectory names without file names
UNIQCOPY BAT  Same as copy *.* but dos not copy files that are already on
UNIQCOPY DOC  target disk. Documentation for uniqcopy
VFILER   DOC  Documentation for VFILER
VFILER   EXE  Visual interface for maintaining files and subdirectories
WHEREII  COM  Finds directory path for all copies of a file on a disk
WHEREII  DOC  Documentation for WHEREII
Z        EXE  Visual shell lets you look at your directories
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## HIDE.DOC

{% raw %}
```
NOTE:  the names of the files referred to in this documentation
were changed by the software librarian in order to keep them
together on a disk with other files. These were the name changes:
                  from:              to:
              MDSECRET.COM       HIDE_MD.COM
              CDSECRET.COM       HIDE_CD.COM
              RDSECRET.COM       HIDE_RD.COM
              HIDDEN.DOC         HIDE.DOC
 
 
 
   The three files MDSECRET.COM,  CDSECRET.COM,  and RDSECRET.COM
are  trivial  programs  in  size  and  in  complexity,  but  they
illustrate  a technique for utilizing a form of file  protection:
locking   out  sub-directories  from  all  but   the   determined
knowledgeable user.
 
   The  technique involves creating a subdirectory which has  the
ASCII  DELETE  character  (07FH)  as  the  first  letter  of  the
subdirectory's   name,   followed  by  up  to  7   user-specified
characters.   MDSECRET (MakeDirectorySECRET) then sets the hidden
flag for the directory entry through the DOS CHMOD function call.
The  directory can only be set as the current directory by  using
CDSECRET (ChangeDirectorySECRET) and can only be deleted by using
RDSECRET (RemoveDirectorySECRET).
 
   Of  course,  any  super-directory program which  shows  hidden
files   will  display  the  subdirectory  names  created  through
MDSECRET,  and a determined user could then use the knowledge  of
the  directory  name  to  write a program which  can  access  the
subdirectory (just like CDSECRET and RDSECRET do).   Without such
a  program,  the  user  will  not  even  know  the  name  of  the
subdirectory,  or even that it exists.   If the DELETE  character
were  not included in the file,  the user might try random  names
with  the CHDIR command,  eventually finding one and successfully
accessing it.   (Note that a hidden file is just as accessible as
a  visible one,  if you know its name!)  By including the  DELETE
character,  however,  the  user  will  not be  able  to  randomly
generate  the subdirectory name from the keyboard,  and will  not
even  be  able to issue the CHDIR command from the  keyboard  for
this subdirectory name.
 
   One important point on the use of the DOS CHMOD function :  It
doesn't  make  sense to try to change the "directory" bit in  the
attribute  word in a file's directory entry.   If the bit is  on,
then  the  file  was  created  as  a  sub-directory  node  (MKDIR
function);  if the bit is off,  then the file is a standard  data
file.  That much makes good sense.  What may not be as obvious is
that  you  MUST NOT set the directory bit when calling the  CHMOD
function,   even   if  the  file  in  question  is   actually   a
subdirectory.  DOS apparently checks to see if you have requested
setting  the directory bit before it "looks" at the file,  and it
exits  with an error (#5 -- Access Denied) if you have  this  bit
set.   The only bits which you are allowed to modify (as far as I
know)  are the archive bit,  the read/only bit,  the system  file
bit, and the hidden file bit.
 
   If  you  have any questions about these files,  feel  free  to
contact me through the PCSIG or EMAIL.  I don't always access the
PCSIG often to catch messages before they roll off, and this will
get worse in the near future,  as I am due to be transferred to a
new city by my employer (God,  I hope I can still get to a PC  or
clone!).
 
-Charles Incaprera  (73105,1323)
 
 
Press ENTER to continue:

```
{% endraw %}

## KNEW.DOC

{% raw %}
```
			     KOPYNEW - Version 2.00


	Format:    KNEW
		   KNEW S: T:
		   KNEW S:FILE.NAM T:

	Flags:	   /p - do not pause for swapping of diskettes
		   /l - do not list messages
		   /s - do not list status report at end

	      KOPYNEW or KNEW copies files from the source drive
	 to the target drive if the files have a newer time and date on
	 the source or if they are new files on the source drive. The files
	 that are copied have the same date and time as they did on the
	 source directory.

	      For example, if there is a file `FILE1.NAM'  dated 10/09/84
	 on the source and a file `FILE1.NAM' on the target dated 10/08/84,
	 then `FILE1.NAM' would be copied.

	      If `FILE1.NAM' on the source is dated 10/09/84  with the time
	 09:30 am and is dated 10/09/84 on the target but with the time
	 stamp of 06:00 am, then it would be copied to the target.

	      If `FILE1.NAM' is found on the source but not on the target,
	 it would be copied.

	 NOTE: As KOPYNEW uses the time and date stamp from the directories
	 to check to see if the source drive has the newer file, the time
	 and date must be reasonably accurate. If you do not have a clock
	 calendar on you machine, you must set the time and date manually
	 or KOPYNEW will not work correctly.

	 DEFAULTS:

	      If no drive designators are given, drive C is the
	 source and drive A is the target. Otherwise drive S is
	 the source and drive T is the target. The drive designators
	 must be in the range A to F or a to f.
	 FILENAMES:

	      Standard DOS file names are acceptable for the source drive.
	 Wild card characters can be used. There is no facility to accept
	 file names for the target drive. Files are copied to the target
	 drive and are given the same name as on the source drive. If no
	 file name is given, all files are copied. That is, KNEW S: T: and
	 KNEW S:*.* T: are equivalent.

	 FLAGS:

	      Flags can be added to any of the calling formats. For
	 example, KNEW will copy all new or updated files from drive C to
	 drive A. KNEW /p will perform the same copy but it will not stop
	 and prompt you to insert the diskettes. KNEW /l would also perform
	 the same copy but the file by file listing would be omitted.


	      After KNEW is loaded from the disk, it pauses and prompts ypu
	 to put the diskettes into the drives. You then press any key to
	 continue. If the /p flag is added to the command line, the pause
	 is omitted.

	      KNEW lists the files as they are copied with a status message
	 (see below). If the /l flag is added to the status line, no
	 messages are listed. The pause is automatically skipped if the /l
	 flag is used. This flag also turns off error messages so that it
	 should be used with caution.

	      When KOPYNEW is finished, a summary of the number of files
	 copied, not copied and the total number of files is listed.  If
	 the /s flag is added to the command line, no summary is listed. As
	 the /l and /s flags are independent, the file by file listing can
	 be turned off while the summary file can be left on.

	 STATUS MESSAGES:

	      S:FILE.NAM Copied - file is newer on the source drive so
				  KNEW copied it to the target drive.

	      S:FILE.NAM Not Copied - file has the same date and time or
				  is newer on the target drive so it is not
				  copied.

	      S:FILE.NAM Deleted - file is newer on the source drive so
				  KNEW tried to copy it to the target drive.
				  The copy failed so the file is deleted
				  from the target drive. The file on the
				  source drive is intact.

	      S:FILE.NAM Created and Copied - file is on the source drive
				  but not the target drive. The file is
				  copied to the target drive.

	      S:FILE.NAM Created and Deleted - file is on the source drive
				  but not the target drive. The copy
				  failed so the file is deleted from the
				  target drive. The file on the source
				  drive is intact.

	 OTHER MESSAGES:

	      Invalid Drive Specification - Drive x
	      Drive letters from A to F are acceptable

	      where x is the invalid drive specification.

	      Drive or file information not clear

	      The information on the command line is not clear. Probably,
	 the first drive designator or the colon was omitted.

	      Open Failed for Input File
	      Open Failed for Output File

	      The input or output file could not be opened for some reason.
	 Use COPY S:FILE.NAM T: to copy the file that could not be copied
	 by KOPYNEW. There could be a problem with the file directory.

	      All other messages are the same as the Error Return Table
	 in the DOS 2.0 manual, appendix D, page D-14. If an unknown
	 error code is returned to the programme by DOS, the  message
	 `Unexpected Error' is displayed.

	 Suggested Uses:

	      KOPYNEW was originally written to be used with ram disks. I
	 develop software using a ram disk to hold my Macro Assembler, my
	 Linker, my editor and the programme source. As I write in
	 assembler, I tend to hang my computer frequently. Therefore I
	 always had to copy the programme source, the assembled
	 programme and any other files that I did not have a current copy
	 of onto a floppy just in case I hung my computer. COPY C:*.* A:
	 works but it is slow. KOPYNEW is much faster as it only
	 copies new or updated files.

	      I have also used KOPYNEW in an environment that included a
	 regular hard disk with a removable cartridge disk for backup.
	 As this was a large dBase II project with over 200 programmes and
	 database files, keeping track of which programmes and files had
	 been changed during the day become quite difficult. Copying only
	 the new or updated files using KNEW C: D: was much faster than
	 using COPY C:*.* D:.

	      I have used KOPYNEW with a Tecmar ram disk, a Tecmar 33
	 megabyte hard disk with a 5 megabyte removable cartridge and on a
	 Tallgrass 12 megabyte hard disk. I used standard DOS 2.0 function
	 calls throughout so that KNEW should work with any hard disk that
	 works with DOS 2.0 or higher. If you have any problems, please
	 contact me. See below.

	Domain:
		KOPYNEW Version 1.00 is copyrighted.

		KOPYNEW Version 2.00 is copyrighted. It is, nevertheless,
	 public domain software. If you have any comments or suggestions,
	 I can be reached through the PCanada Bulletin Board (PC1049) or
	 through the CompuServe Network (72365,301). Alternatively, my
	 telephone number is 1-416-889-1409.



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## LIST----.DOC

{% raw %}
```
LIST2DAY lists all files with a date greater than or equal to the system date
 
LISTPAST lists all files with a date less than the system date.
 
LISTARCH lists all "archive" files.

```
{% endraw %}

## LIST52.DOC

{% raw %}
```

                                                                 LIST     Page 1
 Command  LIST
 -------------

 Purpose:  To display the contents of an ASCII text file,  line by  line
           with the aid of scrolling and positioning commands.

 Format:   LIST  [d:][path]filename[.ext]

 Remarks:  An ASCII file of any size may be listed.

|          The "filename" is optional.  If omitted, you are prompted  to
|       to enter  a filename.   You may  include drive,  path, and  wild
|       cards in the file name.   The first file which matches  the name
|       is displayed until an end-of-file character is encountered.

           LIST was  designed to  display ASCII  files.  That  is, files
        which  contain  text  and  not  binary  or  control codes.  Text
        characters usually range from a value of 32 to 127.

           Characters  below  32  (a  blank)  are  replaced with a funny
        character to indicate that a non-displayable character has  been
        encountered.  This character is an upside-down question mark.

           Characters above 127 may be valid graphic characters, and may
        be displayed if  the '8' command  is in effect.   To insure that
        characters above ASCII value 127 are not displayed, use the  '7'
        command.

           The  file  is  displayed  with  one  logical  record  on each
        80-column display line.   A logical record  ends in a  linefeed.
        The maximum logical record may  be 255 characters long.  If  the
        record exceeds 80  characters, you may  view the portion  beyond
        the 80 columns  by using the  scroll right command,  or by using
        the Wrap feature.

           The Wrap  command toggles  ON or  OFF the  wrapping of  lines
        longer than 80 characters.  With Wrap on, lines are displayed in
        their  entirety,  80  characters  per  display line.  The scroll
        -left and -right functions are disabled when Wrap is ON.

           The file may  be PRINTed as  it it displayed.   The P command
        toggles  the  printer  on  or  off.   When  first entered, the P
        command causes the current screen  to be printed.  As new  lines
        are displayed, they too are printed.  Printing may be stopped by
        entering another P command.  The PrtSc key may also be used, but
        the title and prompt lines will be printed with the lines of the
        file.

 Restrictions
 ------------

           All positioning is relative to the current block in  storage.
        The size of the block depends on the amount of memory available,
        and up to 64K-bytes is allocated to the file buffer. The program
        requires at least 4K bytes.

        PC-DOS Version 2.0 or later is required.

        ANSI.SYS is NOT required.
                                                                 LIST     Page 2
 Key functions and Commands
 --------------------------

        On the COMMAND line, enter a letter or control key:

        Letter(s)       Control key     Function
        -----------     ------------    ------------------------
                        Enter           continue to next page
        Q, X            ESCape          terminate and exit to DOS
        T               HOME            restart from first block (top)
        B               END             skip to end of file (bottom)
|       D or +          PgDn            scroll down one page
|       U or -          PgUp            scroll up one page
        H or ?          F1              list commands (HELP)
        L               left arrow      scroll left 20 columns
        R               right arrow     scroll right 20 columns
                        up arrow        up one (previous) line
        N               down arrow      down one (next) line

|       W                               toggle wrap of lines over 80 chars
|       P                               toggle printer on or off

|       K                               toggle keyboard flush

|       7                               turn off high bit
|       8                               leave high bit on (default)


        /text                           find 'text'
        A               F3              find next occurance of 'text'


                        ctl-HOME        restart from CURRENT block
                        ctl-PgUp        restart from first block (TOP)
                        ctl-PgDn        skip to end of file (BOTTOM)
                        ctl-left-arrow  reset scroll to column 1


                        F1              Help
                        F3              Find next
                        F10             Exit
                                                                 LIST     Page 3

 Scanning for text
 -----------------

           To scan for a character string, type a slash (/) followed  by
        one or more (up to 32)  characters.  The scan text, but not  the
        slash,  is  displayed  on  the  command  line.  The scan is case
        sensitive.  That is, lower case scan text will only match  lower
        lower case file text.

|          While  the  program  is  searching  for  the text, the bottom
|       display line is changed to say "Scanning".

           If the text is found, the line containing it is displayed  as
        a high-intensity line.

           If the text is NOT found, the bottom line (25) is changed  to
        say '*** text not found ***', and the display remains unchanged.

 Screen attributes
 -----------------

           There are three classes  of attributes used.  One  for normal
        display lines  - lines  2 to  24 -  another for  special lines -
        lines 1 and 25, and a third for the background color.

        These attributes may be changed by using DEBUG:

|        at offset 13C = 09     ;special lines, hi-lighted or lt.blue
|        at offset 13D = 02     ;normal lines, green
|        at offset 13F = 07     ;background, black

        If these values don't match, you have a different version.
        ----------------------------------------------------------



        Written by Vernon Buerg for the  IBM PC using DOS 2.0 and  is
        supplied for public domain  use. All rights reserved. Not for
        sale or hire.

        Lines beginning with | denote changes to the latest version.

        Version 4.1, April 27, 1984.
        Version 4.15, June 2, 1984.
        Version 4.2, July 14, 1984.
        Version 5.0, August 10, 1984.
        Version 5.1, August 27, 1984.
|       Version 5.2, September 29, 1984.



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## MOVE.DOC

{% raw %}
```
		      MOVE

MOVE is sort of a cross between COPY and VDEL.
PC DOS version 2.00 or greater is required.
Options may be preceded by "/" or by " -".

Version 1.1 cleans up after a full-disk error and optionally
allow the user to change the target disk.

The following is produced by entering MOVE > MOVE.DOC --

	[MOVE Version 1.1]
	The MOVE utility is a COPY which prompts at each file.

	Syntax:
	  MOVE [SourceDir]FileSpec [TargetDir] [OptionList]

	OptionsList:
	  /Erase  -Erase  Erase each file after successful copy.
	  /Terse  -Terse  Suppress version message, instructions.
	  /Yes	  -Yes	  Automatic "Yes" response to each query.
	  /Change -Change Allow changing target disk on Full Disk.
			  [source and target disks must be different]

	Public Domain 1984,1987 by Lewis Haupt
	Box 25363, Houston, Texas  77265

Examples --
	-- Copy using full directory specifications.
	C> MOVE C:\DIRA\*.* C:\DIRB:

	[MOVE Version 1.1]
	Press Y to copy, N to skip, ESC to stop.

		Copy ABCD.DOC? Yes
		Copy EDGHI.DOC? No
		Copy JKL.DOC? Yes
		Copy MNOP.DOC? Stop

	-- Copy from A: to current disk and directory.
	-- Delete each file after it's moved.

	C> MOVE A:*.* /E
	[MOVE Version 1.1]
	Press Y to copy, N to skip, ESC to stop.

		Copy and erase ABCD.DOC? Yes
		Copy and erase EDGHI.DOC? No
		Copy and erase JKL.DOC? Yes
		Copy and erase MNOP.DOC? Stop

```
{% endraw %}

## SCAVEN.DOC

{% raw %}
```

;READS ALL SECTORS IN LOGICAL MSDOS BLOCKS
;AND MARKS THE FILE ALLOCATION TABLES SUCH
;THAT THE BLOCKS ARE PERMANENTLY ALLOCATED
;WHERE CHKDSK WILL NOT DEALLOCATE THEM.
;
;
;THIS VERSION WORKS ON ANY 2.XX MSDOS OR
;PCDOS, ON ANY MEDIA TYPE, FIXED OR REMOVABLE.
;ONE (MAJOR) LIMITATION: IT WILL NOT MAP OUT
;BLOCKS THAT ARE ALREADY ALLOCATED TO A FILE;
;IT WILL SAY "BLOCK USED", BUT WON'T TELL YOU
;WHICH FILE IT IS IN.
;
;IF SCAVENGE FINDS ANY BAD BLOCKS, IT WILL ASK
;YOU WHETHER OR NOT YOU WANT THE DISK UPDATED.
;YOU CAN SAFELY RUN IT JUST TO SEE IF THE DISK
;IS OK.

```
{% endraw %}

## SDIR50.DOC

{% raw %}
```
----------------------------------------------------------------
       SDIR -[SUPER-DIRECTORY] COMMAND, Version 5.0
----------------------------------------------------------------

	  An All-purpose Directory Utility and Command Shell for
		 the IBM Personal Computer

		 By W. Lawrence Hatt

Copyright (c) 1984 by W. Lawrence Hatt. All rights reserved.



SDIR VERSION 5.0 is currently distributed as User Supported
Software.  With a few restrictions, this allows the
program, although copyrighted, to be freely copied and
distributed.

SDIR 5.0 is a major update of the program SDIR 4.0/4.1
previously distributed free.  The update corrects existing
bugs and adds a major new feature: COMMAND MODE.  This mode
allow ready access to usual file actions such as DEL, COPY,
LOOK (list to screen), change attributes and execute
programs.  Since I find the directory a useful base of
normal operation, fast menu-like use of the directory as a
shell for these operations is very convenient.

This product must be copied and distributed as a complete
package.  This includes both the SDIR 5.0 program
(SDIR50.COM) and this documentation file (SDIR50.DOC). 
SDIR 5.0 is copyrighted and may not be distributed if
altered or modified in any way.  Finally, no fee is to be
charged for copying or distributing the programs without my
written permission.

In short, SDIR 5.0 may be copied and distributed to anyone
who wishes it as long as it is a complete unmodified
package including the program and documentation and no fee
is charged.  In turn, I am requesting a small contribution;
about $10.00 is suggested but please contribute whatever
you feel the program is worth.  Your contributions will
help offset development costs and thus assure future
updates and products.  Also, registered users of SDIR 5.0
will be placed on a mailing list for future modifications. 
Even if you don't feel that the program merits a
contribution, please continue to copy and share this
program with others.


                              W. Lawrence Hatt
                              76 Melville Drive
                              Nepean, Ontario
                              Canada, K2J 2E1


REQUIRED CONFIGURATION

   	 * IBM PC or close clone
   	 * Color Graphic or IBM Mono screen adapter
	    * DOS 2.0 or 2.1
	    * 128k or more for COMMAND MODE

USING SDIR VERSION 5.0

SDIR [d:][path][filename[.ext]] [options]                              
     [filespec] same as for DIR command
 
     [options]   /A - List hidden files.
                 /C - Single Column Commented Directory.		   
                      (see explanation below)
                 /X - Sort by extension.
                 /S - Sort by size.
                 /D - Sort by date/time.
                 /N - Do not sort, original order.

COMMAND [/] - To invoke command actions on selected
    file after the directory is up: LOOK at any ASCII or
    WORDSTAR file; Execute (GO) any COM, EXE or BAS file;
    Set or Reset Archive or Read-only file attribute; Copy
    to drive A:,B:,C:, or D:; Delete any file; Copy any
    complete directory to the default directory on the
    indicated drive.

DEFAULT	- *.* sorted by name.ext. 
  
NOTE   	- Non conflicting Options may be combined.
 	  i.e.  sdir/c/a/d is a valid option. 

 	 - It is suggested that SDIR50.COM be renamed D.COM and
 	 remain on all system diskettes or the default path
 	 directory of your hard disk.
 
/C  THE COMMENTED DIRECTORY
    	
The directory is listed in one column only; use PgUp/ PgDn
to page through any number of pages.  A file SDIR.$$$ is
either created or opened and sorted with comments appearing
beside the appropriate file.  This file is stored on the
default disk/directory no matter where the SDIR command
file resides.  The real directory is not touched of course. 
In fact, although each whole file line is stored, only the
last 40 characters are written to the screen.  Thus,
progressive updates of the same file will keep the same
comments.  The comments for deleted files will
automatically be deleted.  Unfortunately, if you change the
filename the comments are lost for that file.

Primitive edit control is available to write new comments:
            - normal upper and lower case characters
            - RTN: jump to beginning of next line
            - DEL and BKSP: distructive cursor left
            - CURSOR: control keys work normally
            - PgUp and PgDn: normal
    
SDIR50 is compatible with comment files from SDIR40,
SDIR401, SDIR41 AND SDIR411.

ESC: must use this key to return to DOS or return to normal
mode from the COMMAND mode.

[/]  THE COMMAND MODE

Command Mode is available at any time after invoking the
SDIR program by keying "/" (like 123).  When this is done a
double command line appears at the top of the screen and
individual commands are invoked by placing the cursor on
the desired action file.  The desired action is invoked by
striking the highlighted key for the desired action. 
Available actions include the following:

CHANGE ATTRIBUTE
	
	R - change file to Read-Only, or if already
	    Read-only to Read-write
	A - change the Archive bit

In either case the state of all attributes are displayed
for the file regardless of whether the /A mode was
initially selected.

GO

This is the program execute key.  Selected file must be
.COM, .EXE, or .BAS.  Your machine should have extra memory
since the SDIR program and buffers stay resident using up
about 64k of memory.

There are two other important requirements for full
function of this mode.  A copy of COMMAND.COM and
BASICA.COM must be resident on the ROOT DIRECTORY of the
default drive.  The COMMAND.COM version must be the same
as the one used at boot-up time or the system will
`hang'.  For hard disk users you probably already keep
COMMAND.COM and BASICA.COM on the `\' directory of C:; 
for floppy diskette use, I'm afraid you'll need compatible
COMMAND.COM on each diskette you are copying from---this
problem arises because the program must know exactly where
to find COMMAND.COM as we load a secondary copy to use in
the EXEC function call and the COPY command.

If you want to have some fun try repeated re-execution of
the SDIR program using GO.
 
DELETE

The selected file is deleted.  Be careful, there's no going
back.  An X is indicated on the right side of the file to
remind of action taken.

LOOK

This is a quick, screen-oriented, file lister.  Paging
control is provided but no editing.  Files are expected
to be ASCII but WordStar and other similar wordprocessing
files are handled by interpreting only the lower 7 bits of
the code and a few other extraneous WordStar characters are
removed.  "Looking" at other files may produce "junk" on
the screen.  The listing ends with the encounter of ASCII
254.  The file size is limited to the balance of the 64 k
segment occupied by SDIR; this usually amounts to about 20k
character files.

COPY

Hitting the appropriate number copies the selected file to
the indicated drive.  Appropriate error messages will
indicate any problems.  Placing the cursor on a directory
entry copies the whole directory.  As for the GO command
you must have a copy of COMMAND.COM on the ROOT DIRECTORY
of the default drive to use COPY.  The version must be the
same as the version used to boot the system.

IMPORTANT NOTE: THE OBJECT FILES POINTED TO BY THE CURSOR
MUST BE ON THE DEFAULT DRIVE/DIRECTORY.  AN ERROR NOTICE
WILL BE GIVEN FOR OTHER FILES.  THIS MEANS,FOR INSTANCE,
THAT YOU CANNOT INVOKE COMMAND ACTIONS AFTER INVOKING "SDIR
A:" FROM THE DEFAULT B: DRIVE.

Direct comments or problems to Larry Hatt on PCANADA PC1269



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## SORTF.DOC

{% raw %}
```

SORTF Command
-------------

Purpose:   This command reads data from an ASCII file, sorts the
	   records, and writes the data to another file.

Format:    SORTF [d:][path]fname[.ext] [d:][path]fname[.ext] [/R][/+nnn]

Remarks:   Records read from the input file ending with a carriage
	   return and line feed are considered logical records and may
	   be up to 255 characters in length.

	   The records are sorted into ascending ASCII character order
	   unless /R is supplied to reverse the order.

	   The key is taken from the first character position, unless
	   the /+ operand is used to specify the location of the key
	   within the records. The position may be a value from one
	   to 255. The first 12 characters at that position are used
	   as the record key.

	   For example, to sort a file in descending order with the
	   keys in position 10:

		SORTF TEST.DAT TEST.SRT /R/+10

	   Depending on the amount of memory available, up to 40000
	   records, or a file of 16-Mb, may be sorted.

	   The advantages of using SORTF instead of the SORT filter are:
		- files larger than 63K may be sorted
		- less time is required

	   For best results, place the input file on the fastest
	   available drive, e.g. RAM disk.

Notes:	   Written for the IBM PC using DOS 2.0 or later,
	   by Vernon Buerg. For public domain use.

	   Version 1.4, June 6, 1984.


```
{% endraw %}

## SPEEDUP.DOC

{% raw %}
```

			DOS 2.0 SPEED UP
			by Henry Ho
(as published in "The Personal Computer Club of Toronto Newsletter"
Volume 1, Number 6   July/August 1983)	- adapted by Jim Knopf

  If you liked "DOS 1.1 SPEED-UP" published in Volume 1 Number 2 of our
Newsletter, you'll like this one too.  I did not write that DOS 1.1
speedup, but it was so good that when I acquired DOS 2.0, I had to figure
out a way to speed it up too. (This method is borrowed from the previous
method). You will find that after the modification, the disk seek time is
much faster and the drive is much quieter.
  DOS uses a set of parameters which consist of an eleven byte table for
its diskette operations. This set of parameters is stored in the ROM BIOS
(Technical Reference Appendix A-41), and is pointed at by the Data Variable
Disk Pointer (INT 1EH).  DOS 1.0 uses also this table.	To
change any of the parameters, you can build another parameter table in the
memory and change the pointer to point at it.  DOS will first read the
parameter table each time before it reads or writes to diskettes.
  The popular DOS speedup routines all accomplish the same thing; change
the parameter table and the disk pointer.
  To modify your DOS diskette, use the DEBUG program on the DOS supplemental
program diskette.  You should work on a backup copy of your original DOS
diskette (single sided).  This modification must be applied to single sided,
9 sector/track only.  Do not use other formatted diskettes because the
locations will be different. (Do not type in the remarks).
PLease note that this modification is unsupported so use it at your own risk.
   Insert your DOS disk (to be modified) in drive A, DOS supplemental disk
in drive B, and type in the following:
A>B:DEBUG
-L 100 0 0 80	   ;Load absolute disk sectors 0 to 80H into memory
-E 121		   ;Enter command - change memory location
XXXX:0121 DF.EF    ;Change byte DF to EF, a total of 4 times
-E 1AC6
XXXX:1AC6 DF.EF
-E CC71
XXXX:CC71 DF.EF
-E EBAF
XXXX:EBAF DF.EF
-W 100 0 0 80	   ;Write memory to disk
-Q		   ;Quit DEBUG
   After you have modified your diskette, exit DEBUG to DOS.  Now you have
to reboot the disk to make the changes effective.  To carry the changes to
a new DOS system diskette, just format with the /S option.  (Jim's note:
it does not seem to be sufficient to just do the SYS command, you really
must FORMAT /S).


```
{% endraw %}

## ST.DOC

{% raw %}
```
ST -- the SuperTyper program -- an improved version of the DOS type command.

This program provides three significant enhancements to the type command:

 1) the display is paged, not scrolled, and thus is much easier to read.

 2) Previously displayed pages are saved and can be accessed by use of the
    PgUp and PgDn keys.

 3) Wordstar's 'funny' characters are converted to normal display characters.
    (as all WordStar users know, 'type'ing a WordStar file creates a strange
     display)

Directions:
Type ST for directions and to be prompted for a filename to be listed.
Type ST <filename> to list a file.
PgUp and PgDn move through the display pages in the file.
The '+' toggles the display of page number in each page.  This display
is convenient for keeping your place in big files -- especially files
that are bigger than memory and only part of the file can be kept in memory.
This display is normally off, it is toggled on when "buffer wrap-around"
occurs.  If it bugs you, hit the '+' key and turn it off.


```
{% endraw %}

## TD13.DOC

{% raw %}
```

	TREEDIR  --  Tree directory for MSDOS V2.0 and above.

	This program combines TREE and DIR to produce a directory
	of all files in each directory along with date, time and
	file size.

	usage:	TREEDIR  [directory]  [/s] [/knnn]

	If the directory is omitted, the tree starts with the root
	directory.  Use

		TREEDIR .	to start from the current directory.

	Totals are given for each directory, which includes the
	totals of any sub-directories.	 If the /s option is specified
	only the totals are displayed.

	This program was primarily written to display the actual space
	used on the hard disk for each directory, and the amount of
	space needed to copy to a diskette.  This is due to the
	allocation cluster of MSDOS: files on  diskette are allocated
	in increments of 1024 bytes while files on the hard disk (10 MB)
	are in 4096 byte chunks.  To see the space that would be taken
	by some other allocation size, use the /k option.  For example,
	to see how much hard disk space would be used by copying all
	the files from the diskette on drive a, type

	    treedir a: /k4

	The program requires DOS 2.0 or higher, since it doesn't
	make any sense otherswise.


				    Alan Losoff
				    Milwaukee, Wisconsin
END OF TRANSFER - PRESS ENTER TO RETURN TO MENU

```
{% endraw %}

## UNIQCOPY.DOC

{% raw %}
```
This neat little program came from the Dec. 25 issue of PC.
It works great. It's a time saver for updating utility disks
without duplicating the files over and over.
To use put the UNIQCOPY.BAT either on your hard disk or one
of your floppys.

to use,type  A>UNIQCOPY A B
Notice, do NOT use colons after drive names, the program
does the rest, notifying which file is copied.

Carroll Hanks

```
{% endraw %}

## VFILER.DOC

{% raw %}
```
			VFILER for MSDOS  
			   by Mike Nice
			   [73565,565]
			     08/84
		     VF150 for Z150/IBM PC
		             01/85

	This is a translation of Rich Conn's ZCPR2 utility VFILER ver 1.7.
Please see SIG/M vol 145 for the origional release and author credits.  
Translated to CP/M-86 by    H. M. Van Tassell

	Modifications to VFILER creating VF150 for the Zenith Z150 and
IBM PC by Rick Schaeffer [70120,174].

This program may NOT be sold for profits above distribution costs.

	VF150 is a screen-oriented file manipulation utility which runs
under MSDOS 1 or 2.  Following in the footsteps of SWEEP, CLEAN, and DISK,
VF150 performs the same fundamental functions, but adds screen-oriented
displays and manipulation to it, giving a more user-friendly interface.

    When VF150 is invoked, it displays a screen (up to 64) files to the
user with an "cursor" in inverse video pointing to a file.  The user may
use the Word Star cursor movement keys (^E for up, ^X for down, ^D for
right, ^S for left) to move the cursor to point to a desired file.  Typing
V will view the file on the CRT, P will print it on the printer, C will
copy it, D will delete it, etc.  ESCape and ^C may be used to exit from
mass operations.  See the command summary built into VF150.


    Special DOS 2 features:
Although support for DOS 2 has been added, DOS 1 is still fully supported.
The currently logged directory is displayed, and the Volume name if
present is also displayed.  When (L)ogging in a new directory, or 
(C)opying to another directory, full pathnames are supported.  If the
last name contains a wildcard, it is assumed to be the filespec you
wish to work with.  The file may not be copied under a different filename.
See examples below.  
     The e(X)ecute and (E)nter commands will allow you to call another
program and give you the option of returning to VF150 afterwards.  If
this is done, an approximately 12 to 15 K of additional memory will be
consumed to keep VF150 in memory.  Upon return, the origional filespec
will be used to log in the files.  This option should not be used to
run programs which terminate and remain resident (such as PSC.COM).

    The downloaded file should be named VF150.COM.  When invoking it,
the drive and filespec you wish to work with may be specified on the 
command line.  The colon on the drive name is optional if it is the only
thing on the command line
  Examples:  VF150 B:
       	     VF150 B
	     VF150 B:*.BAS
             Login DIR: E:*.ASM
             VF150 *.DOC
	     VF150
A '/W' switch may be also specified on the command line to cause VF150 to 
pause before continuing (to allow for a disk swap).  This should be the 
last part of the command line.
  Examples:  VF150 E /W
	     VF150 C:*.A?M/W
	     VF150 /W

 Pathname examples: (DOS 2 only)
             VF150 A:\BIN\MODEM\DOWNLOAD.JNK\*.?Q?
(logs in subdirectory DOWNLOAD.JNK on drive A:, all files meeting *.?q? spec.)

             VF150 ..
(logs in all files in parent directory on current disk)

             Login DIR: UTILS.ASM
(logs in subdirectory UTILS.ASM on current disk, all files)

	     Copy to DIR: B:P
(copies to subdirectory P on disk B:.  Note that a drive letter and colon
are required when using single letter subdirectories.  This is the tradeoff
for not having to specify the colon when specifying only the drive letter.)

	     Copy to DIR: \
(copies to root directory on current disk.  Must not be current directory)

In theory 64 character pathnames are allowed.  However, due to limitations on
the screen layout for the command prompt, only about 42 characters are
allowed in practice.  Also, tagging subdirectories for later operations
is not allowed.


	VF150 comes installed for the Zenith Z150 and/or IBM-PC.  When
initially run, it determines whether it is running on a color or mono-
chrome card.  If running on the color card, VF150 will set up for color
use.  There are 5 in the program which contain the colors used for the
various VF150 functions.  These locations may be CAREFULLY patched if
the colors chosen are not suitable.  

      Address   Description
      -------   -----------------------------------------------------------
	6FE	Clear-screen color.  Normally 07H (white on black).
	6FF	Standard character color.  Normally 03H (Cyan on black).
	700	Cursor color.  Normally 34H (Red on Cyan).
	701	Tagged file color.  Normally 0CH (Bright red on black).
	702	Status line color.  Normally 06H (Brown on black).

	In addition, VF150 supports the IBM keypad in that the keypad
arrow keys, and page up and page down work as you might expect.



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## WHEREII.DOC

{% raw %}
```
                   Documentation for WHEREII.COM
                   by Ted Eyrick        11/11/84
 
    Description:
 
WHEREII is an MSDOS 2.xx+ generic utility that searches all directories and
subdirectories for matching file names. This is very useful, and saves
a lot of hair pulling when you know the file is somewhere, or you suspect
duplicate files exist.
 
 
    Documentation:
 
Purpose:      Searches for specified file(s) through all DOS  2.xx+
              directories on the specified drive, listing matching files
              with their appropriate directories and sub-directories.
 
Format:       WHEREII [filespec] [filespec] [filespec] ....
 
Type:         External
 
Filespec:     The filespec consists of the drive, filename, and extension
              and has the syntax   drive:filename.ext
              for example A:DECISION.DAT
 
Drive:        The  drive:  can be omitted if the drive to be
              searched is the default drive (the one you were
              using when you issued the WHEREII command).
 
Filename.Ext: The global file characters ? and * can be used
              in both the filename and the extension.
 
 
    Operation:
 
The following example illustrates all of the features of the WHEREII
command:
 
        WHEREII *.BAT A:HA??.* b:te*.*   <enter>
 
Note: <enter> means press the Enter key
Note: Each filespec is separated from the next by a space.
 
Let us assume that the default drive is C.  Then this example first searches
all of the directories and subdirectories of drive C for all files which
have the extension .BAT.  When this search is completed then drive A is
searched for all files which have four characters in the filename and
the first two characters are HA. Then finally drive B is searched for
all files whose first two characters are TE.
 
If there are more than 23  *.BAT  files found in the first search the
screen will prompt you for  More? .  Pressing the N key will end the
search or pressing any other key will continue the search.
 
 
    History:
 
    This is the latest version of the WHERE, WHEREIS, WHEREIR series.
The original version of this series was published in Softalk, January,
1984, p. 101.  The original author is unknown.  If you have questions
suggestions or problems please write the author of this version:
                   Ted Eyrick
                   Eytek, Inc.
                   P.O. Box 160307
                   San Antonio, Texas 78280
 
 
    Tip:
 
Using the command
 
        WHEREII A:filename.ext   <enter>
 
along with the program NDOSEDIT permits rapid searching of diskettes
in drive A for the location of any  filename.ext . Pressing the Up Arrow
key of the numeric keypad causes the NODSEDIT program to repeat the
command for another diskette.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0319

     Volume in drive A has no label
     Directory of A:\

    -DIRLIST          3467  11-11-84   8:40a
    COVER    DOC      2304   3-01-84   7:03a
    COVER2   COM      1228  11-01-84  12:42p
    DISKORAY EXE      6656   3-17-83   9:48a
    DRVTEST  BAS      1664   2-23-84   6:48a
    FASTDISK COM       512   4-03-84   8:04a
    FDATE    COM      1280   2-17-84   3:06p
    FDATE    DOC      1280   2-17-84   3:07p
    HIDE     DOC      3511  12-29-84   1:58p
    HIDE_CD  COM       256  10-30-84  12:35p
    HIDE_MD  COM       256  10-30-84  12:35p
    HIDE_RD  COM       256  10-30-84  12:35p
    KNEW     DOC      7011  10-14-84   7:00p
    KNEW     EXE     23808  10-14-84   1:21a
    LABEL    LBR     10752   2-19-85   1:57p
    LIST---- DOC       188  12-30-84   1:59p
    LIST2DAY COM       242   8-31-84   4:04a
    LIST52   COM      3072   2-10-85   3:44p
    LIST52   DOC      7156  11-23-84   6:58p
    LIST52   HLP      1536   2-08-85  10:35p
    LISTARCH COM       212   8-31-84   4:19a
    LISTPAST COM       241   8-31-84   4:31a
    MOVE     COM      2499   1-15-87   3:20p
    MOVE     DOC      1405   1-15-87   3:15p
    PC-DISK  COM     33408   1-20-85   7:28a
    PFM      COM     15872   1-06-85   6:48p
    READBAS5 EXE     24704   1-27-85  11:36a
    RENDIR   COM       640  10-20-84   1:26p
    SCAVEN   COM      1238   3-19-84  10:43p
    SCAVEN   DOC       591   5-10-84   8:42p
    SDIR26   COM      3584   6-29-84   7:03a
    SDIR50   COM      6656   2-19-85   1:49p
    SDIR50   DOC      8259   2-19-85   6:59p
    SDISK2   COM      4608   5-16-84   5:23p
    SDISK2   DOC      1536   5-16-84   5:25p
    SDL      COM      2816   8-22-84  12:50a
    SDL      DOC      2048   8-22-84  12:51a
    SHOWDIR  COM      1280   5-17-84   1:10p
    SORTF    DOC      1412   6-06-84  11:47a
    SORTF    EXE      3200   6-06-84  11:58a
    SPEEDUP  COM        37   9-10-83  11:47a
    SPEEDUP  DOC      2409   9-10-83  11:24a
    ST       COM     14336   1-09-84   8:44a
    ST       DOC      1048   1-10-84  10:41a
    TD13     COM      6400   9-21-84   7:16a
    TD13     DOC      1307   9-21-84   7:15a
    TREE2    COM      1513   1-01-83   7:48p
    UNIQCOPY BAT       768  12-24-84   3:27p
    UNIQCOPY DOC       512  12-24-84   3:27p
    VFILER   DOC      5129   1-25-85   6:59p
    VFILER   EXE     12416   1-25-85  12:52p
    WHEREII  COM      1024  11-21-84  10:12p
    WHEREII  DOC      2944  11-21-84  10:12p
    Z        EXE      9728   5-03-84   5:01p
    FILES319 TXT      3308   1-30-87   9:27a
           55 file(s)     255523 bytes
                           34816 bytes free
