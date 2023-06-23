---
layout: page
title: "PC-SIG Diskette Library (Disk #2092)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2092/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2092"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RBBS-PC 5 OF 5 (212,334,621,622)"

    The RBBS is the bulletin board system of choice for many IBM PC
    bulletin boards. It's a large system on four disks and supports the
    PC-SIG LIBRARY ON CD ROM.
    
    RBBS-PC's internal structure is modularized and structured. The
    program includes a File Management System for directories, additional
    file exchange protocols, support for managing subscriptions,
    configurable command letters, multiple uploads on a single command
    line, new A)nswer and V)erbose ARC list commands, and
    context-sensitive help. It also can run as a local application on a
    network, use any field or define a new field to identify callers, and
    individualize callers having the same ID. The source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MITESIZE.DOC

{% raw %}
```
Mite-Size
A Set of Merges to Minimize Code Size
for RBBS 17.3

by Ken Goosens (data line 703-978-6360)

                 What These Merges Do

These merges allow you select what functions to eliminate
from RBBS in order to reduce the size of the compiled program
and reduce the amount of memory needed.

WARNING!!!  These merges must be applied to the UNMODIFIED
source code to RBBS 17.3.  The merges substitute code for
code in RBBS, and therefore may destroy other changes you
have made to RBBS.   If you have fixes, you may want first to
reduce the code, then add in the fixes.

                   History of Changes

01-10-90. Lit code rewritten to conform to "periodless" base code.
          END SUB written into line containing omitted subroutine
          for uniformity, and to save a few extra ASCII bytes.
          Most subroutine descriptions and 'SUBTITLEs' removed
          when subs .lit-ted out.

08-06-89.  Problem fixed when omitting fossil driver.
 
07-30.     Incorporated changes made in 17.2B.

05-22.     More variables added.  Recommend using BLED 2.2,
        since 2.1 had a bug that would cause erroneous warnings.

12-27-88.  Corrections to doc.  Should only use BLED 2.1.
        Variables added.  More code removeable.

12-13.     Two variables left out of 12-11 release of SETLIT.INC:
        DOORRTN, and ASMFREESP.  Added.

        Three LIT files added:  ASMANSI (omits ANSI.OBJ) by using only
           Basic screen writes.   CONFERENCE (no conferences).  And
           DOORS (no doors).
        
        Documentation (this file) corrected:  base should use is
           17.2A, and QB 4.5 added as possible compiler.

01-09   Updated all .LIT files to recognize line numbers at the beginning
        of every subroutine.  (These were made available in the Base dated
        01/09/88.

01-09   Corrected SUB4LIT.MRG to correctly identify NOVIEW.LIT.  Also
        created the file (NOVIEW.LIT) since it was not in the archive.
 
01-09   Added reference to DOORS.LIT to RBBSLIT.MRG.

01-09   Added reference to DOORS3.LIT to SUB3LIT.MRG.

01-09   Corrected CORVUS.LIT to use BRKFNAME as was being done in the
        original code.

01-09   Created SUB5HDR.LIT so that we are consistant.

01-09   All SUBxHDR.LIT files were updated to identify that it is part
        of a MITE SIZE program list.

01-09   Standardized headings of each LIT file.

01-15   Line should have been omitted for PCNET.  Doors code reduction
        corrected.

01-16   Four new LIT variables added.

              Why Code Reduction May be Needed

In the absence of an overlay linker or optimizing compiler for
BASIC, RBBS has gotten steadily larger in code size as new functions
have been added, and will continue to do so rather than not add
new functions.  The increase in code size causes a problem on
systems that wish to run 2 nodes within 640K of memory, or
otherwise has only a restricted amount of memory to use.

These merges allow sysops with a supported BASIC compiler to
reduce code size.  This is achieved by eliminating the code
for unused functions, redundant code (typically doing the same
thing in both BASIC and assembler), and functions which the
sysop is willing to sacrifice.

RBBS can then continue to grow while still supporting sysops
with limited memory.


               How to Apply the Merges

1st, you need a copy of the unmodifed source code for 17.2A.
Put this in a separate subdirectory (e.g. 172A)

2nd, in the subdirectory where you normally recompile RBBS,
copy all the files in this application.

3rd, modify the file MAKELIT.BAT by putting in the drive/path
for the original code (the first parm to BLED).  The lines
you should modify all begin with "*$", which is the default
for a BLED metacommand.   The lines beginning with "* " are
BLED comments, which are ignored in a merge.

4th, get BLED version 2.2 or higher.  The latest is 2.2.
Earlier versions lack the necessary features.
Either put BLED in with the merges or in your
path.  The new BLED functions are documented in BLED.DOC.

5th, use your favorite text editor to modify the file
SETLIT.INC.   Directions are right in the file.   Here is where
you specify what options use are using and which you don't
want.   This is the fundamental "driver" used.   The typical
way you remove code is by setting a variable to the value
"OFF", e.g. BAUD450 to "OFF" to save code by not supporting
changing 300 baud to 450, or LIBRARY to "OFF" if not using the
Library section.

6th, execute the MAKELIT.BAT, which will generate the code
needed to support your application (a new RBBS-PC.BAS,
RBBSSUB2.BAS, and RBBSSUB3.BAS).  The version will say
"17.2A Mite-Sized".  You should get no BLED warnings.

7th, recompile.  Hint:  QB 3 produces the largest code.
QB 2.01 is smaller, and QB 1.02 is the smallest.   QB 4.5
works but produces the largest code of all.
Also when removing certain routines it is possible to
further reduce the size of the resulting .EXE file by
removing the associated .OBJ from the link step. i.e.
If you specify MULTNODE = NETBIOS then you can remove
BDRIVEC2.OBJ, PCNET.OBJ, RBBSML.OBJ, 10NET.OBJ and
RBBSDV.OBJ from the link parameters.

Never use the /E option in linking.  You should
get no errors when recompiling.

8th, reconfigure RBBS for the reduced code, if needed.  For example,
disable the commands for functions you remove, such as taking out
the 'A' command if you turn questionnaires off.


                   What the Files Mean

SETLIT.INC - An file shared by all merges, which sets the
options the sysop wants and does not want.  Basically
defines BLED metavariables.

RBBSLIT.MRG, SUB1LIT.MRG,SUB2LIT.MRG, SUB3LIT.MRG, SUB4LIT.MRG,
SUB5LIT.MRG.

The fundamental BLED merges for rbbs-pc.bas, rbbssub1.bas,
rbbssub2.bas, rbbssub3.bas, rbbssub4.bas and rbbssub5.bas
respectively.  Each reads in (includes) SETLIT.INC to set
the metavariables, then uses the values to determines what
merges to process in the run.

*.LIT.  Files that reduce the code.


You are welcome to enhance these merges with further code reduction.
Please report any problems to Ken Goosens, data # 703-978-6360.
Realize that there is no way I can test the many different
environments or all the combinations of choices.
```
{% endraw %}

## FFS.DOC

{% raw %}
```
Supplemental Documenation for RBBS 17.3
Fast File Search
by Ken Goosens, 10-22-89

RBBS 17.3 has a signficant enhancement to the way searches for a requested
file are done in and upload and download.   This enhancement has two
big improvements:

(a)  File searches are much faster.  In the case of very slow devices like
     a CD-ROM, this can be the difference between sub-second response and
     a 45 second response.   File searches are now virtually instantaneous.

(b)  File not stored on this system can trigger macros.   This allows
     requests for files stored elsewhere, either off line on backups,
     or on other cooperating systems, to trigger later processing.


Fast File Searching

For directories DOS uses chained "buckets" in multiple locations, 
searched sequentially.   This results in very slow performance when
the number of files to search gets into the thousands.   RBBS now
supports a fast file search than more than compensates for the
inefficent operation in DOS.

The basis for the fast file search is a file, configuration
parameter 267, which is a sorted list of file names available for
downloading.    The default name is FIDX.DEF.

The format of this file is:

columns 1-12:  file name
columns 13-16: location index (1, 2, 3, ...)
columns 17-18: carriage return line feed.

All data is stored as character data and the file is editable.   The file
names must be stored with no internal spaces and a period separating the
prefix from the extension.   The list of file names MUST BE SORTED BY
FILE NAME in order for the fast file search to work.

The location index is the record number (line number) of the locator file,
whose default name is LIDX.DEF, and has the following layout:

columns 1-63:  location of file
column  64:    any character.  MAKEFIDX puts in a period.
columns 65-66: carriage return line feed.

This file is all character data and is editable.   Essentially, the location
index points to a record in the location file.   E.g. if FIDX.DEF has

RBBS-BAS.ZIP   2
HARPIE.ARC     3

and LIDX.DEF has

C:\DOWN1\
C:\DOWN2\
C:\UP\

Then RBBS-BAS.ZIP is located in directory C:\DOWN2 (2nd record) and 
HARPIE.ARC is located in C:\UP (3rd record).

The location field should be a drive/path terminating with a "\" if
any path is given, and file must be filled with blanks through column
63 if the path is shorter.  You must put some character in column 64.
Many editors delete trailing blanks, so you should probably put in
a non-blank.  A period is a suitable choice.

RBBS will use a binary search on the first 12 characters in FIDX.DEF.
This binary search can be significantly speeded by provided "tabs" for
this file, indicating the record at which the first file is that begins
with the symbols "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".   This is like
the "tabs" you see on dictionaries, so you can directly turn to the B's,
for example.   A tab file has the same prefix as the file name file,
except that it adds a "T".  For "FIDX.DEF", the tab file would be
"FIDXT.DEF".   RBBS will automatically detect and use a tab file if
available.   The tab has 72 characters in it.   Each 2 bytes represents
a binary integer whose value is the record number in FIDX.DEF where the
first file occurs that begins with the respective symbols above.  Thus
bytes 3-4 show where files begin with "1" and bytes 69-70 where files
begin with "Y".

Two utilities with source code are provided for setting up the fast file
searches.   The source, for compiling under QB 4.5, is included.

MAKEFIDX will create both the file name list (FIDX.DEF) and the
location file (LIDX.DEF), from a list of directories (see MAKEFIDX.CFG)
or a list of file names, or both.

You must next sort FIDX.DEF by file name.  A good shareware utility for
this is QSORT (QSORT FIDX.DEF /1:12).

MAKETABS will create a tab file (FIDXT.DEF) from the sorted file list
FIDX.DEF.

The batch file I use for recreating my fast file system is MAKEFFS.BAT.
It uses MAKEFIDX.EXE, QSORT.EXE, MAKETABS.EXE, and configuration file
MAKEFIDX.KG.   You need only edit MAKEFIDX.KG to change the filespecs
(/FileSpec=) to match where your files are, and where to write the
index files.


Reconfiguring to Take Maximal Advantage of Fast File Searches

The fast file search is virtually instantaneous on an 8088 with a tab
file for 5000 file entries.   The savings on wear and tear on the hard
disk can be very significant as well.   And the time it takes to set up
the fast file search is only a few minutes.  Most sysops, therefore, will
want to implment fast file searching, whether or not they have a slow
device like a CD-ROM.

RBBS will first search through the drive/paths specified in config
to be available for downloading, as it always did.   Files not found
there will then be searched using the fast file search system.
The way the fast file search works is that a file found in its list is
looked for only in the designated location.  Nothing else is searched.

The optimal way to implement fast file searching is to reconfigure the
drive/pathes available for downloading down to at most the upload
directory, and let the fast file search handle everything else.   That
way, files will be searched first in the upload area, and those not found
at first will then be searched using the fast file search system.
Note that every file in the fast file search list is considered
to be available for downloading whether or not its drive/path
is listed in the configuration program as a downloadable area.   Note
that you can have separate fast file search systems available for each
subboard, if desired.   You can also use the fast file search for common
files and have a separate download area for the subboards.

Note:  whenever you relocate files, you must re-create the fast file
search system.   This is not hard since it takes little time and can be
automated.


```
{% endraw %}

## MAKEFIDX.BAS

{% raw %}
```bas
DECLARE SUB TRIM (TRIM.PARM$)
DECLARE SUB BRKFNAME (FILENAME$, DRVPATH$, PREFIX$, EXTENSION$, FOR.JOINING%)
DECLARE SUB TRIMTRAIL (TRIM.PARM$, TRIM.THIS$)
DECLARE SUB FINDLAST (LOOK.IN$, LOOK.FOR$, WHERE.FOUND%, NUM.FINDS%)
DEFINT A-Z
DIM FileSpec$(255)
DIM FileDir$(255)
DIM LocationIndex$(999)
TRUE = -1
FALSE = 0
WriteMode$ = "Replace"
NameFile$ = "FIDX.DEF"
LocationFile$ = "LIDX.DEF"
SHARING = FALSE
NumLocations = 0
NumFileSpecs = 0
NumFileDirs = 0
ConfigFile$ = "MAKEFIDX.CFG"
PassedArguments$ = COMMAND$
PassedArguments$ = UCASE$(PassedArguments$) 
X = INSTR(PassedArguments$,"/B")
RunBatch = (X > 0)
IF RunBatch THEN 
   PassedArguments$ = LEFT$(PassedArguments$, X-1) + RIGHT$(PassedArguments$,Len(PassedArguments$)-X-1)
END IF
IF PassedArguments$ <> "" THEN
   ConfigFile$ = PassedArguments$
END IF

ON ERROR GOTO 40000
IF SHARING THEN
   OPEN ConfigFile$ FOR INPUT SHARED AS #1
ELSE
   OPEN ConfigFile$ FOR INPUT AS #1
END IF
ON ERROR GOTO 0
WHILE NOT EOF(1)
   LINE INPUT #1, A$
   X$ = LEFT$(A$, 1)
   IF X$ <> "" AND X$ <> "*" THEN
      A$ = UCASE$(A$) 
      IF LEFT$(A$,11) = "/WRITEMODE=" THEN
         WriteMode$ = MID$(A$,12)
         CALL TRIM (WriteMode$)
      END IF
      IF LEFT$(A$, 10) = "/NAMEFILE=" THEN
         NameFile$ = MID$(A$, 11)
         CALL TRIM(NameFile$)
      END IF
      IF LEFT$(A$, 14) = "/LOCATIONFILE=" THEN
         LocationFile$ = MID$(A$, 15)
         CALL TRIM(LocationFile$)
      END IF
      IF LEFT$(A$, 10) = "/FILESPEC=" THEN
         X$ = MID$(A$, 11)
         CALL TRIM(X$)
         NumFileSpecs = NumFileSpecs + 1
         FileSpec$(NumFileSpecs) = X$
      END IF
      IF LEFT$(A$, 9) = "/FILEDIR=" THEN
         X$ = MID$(A$, 10)
         CALL TRIM(X$)
         NumFileDirs = NumFileDirs + 1
         FileDir$(NumFileDirs) = X$
      END IF
   END IF
WEND
CLOSE 1

Replacing = (LEFT$(WriteMode$, 1) = "R")

PRINT "MAKEFIDX version 1.0 copyright (c) 1989 by Ken Goosens"
PRINT "an RBBS utility to make files for fast directory searches"
PRINT
PRINT "On this run"
IF Replacing THEN
   PRINT "Overwriting data files"
ELSE
   PRINT "Adding to data files"
END IF
PRINT "Configuration file used ....... ";ConfigFile$
PRINT "Name of list of files ......... "; NameFile$
PRINT "Name of list of locations ..... "; LocationFile$
PRINT "# of DOS directories to process"; NumFileSpecs
PRINT "# of file lists to process ...."; NumFileDirs
PRINT
IF NOT RunBatch THEN
   INPUT "A to abort, anything else runs"; ANS$
   ANS$ = UCASE$(ANS$)
   IF ANS$ = "A" THEN END
END IF

'NumFileSpecs = 2
'FileSpec$(1) = "C:\TEMP\"
'FileSpec$(2) = "C:\UTILS\"
IF Replacing THEN
   ON ERROR GOTO 40100
   KILL NameFile$
   KILL LocationFile$
   ON ERROR GOTO 0
ELSE
   IF SHARING THEN
      OPEN LocationFile$ FOR INPUT SHARED AS #1
   ELSE
      OPEN LocationFile$ FOR INPUT AS #1
   END IF
   PRINT "Loading existing locations..."
   WHILE NOT EOF(1)
      LINE INPUT #1, A$
      CALL TRIM(A$)
      NumLocations = NumLocations + 1
      LocationIndex$(NumLocations) = A$
   WEND
   CLOSE 1
   PRINT STR$(NumLocations); " locations loaded"
END IF

IF SHARING THEN
   OPEN NameFile$ FOR RANDOM SHARED AS #2 LEN = 18
   OPEN LocationFile$ FOR RANDOM SHARED AS #3 LEN = 66
ELSE
   OPEN NameFile$ FOR RANDOM AS #2 LEN = 18
   OPEN LocationFile$ FOR RANDOM AS #3 LEN = 66
END IF
FIELD 2, 18 AS NameRec$
FIELD 3, 66 AS LocationRec$
MID$(NameRec$, 17, 2) = CHR$(13) + CHR$(10)
MID$(LocationRec$, 64, 3) = "." + CHR$(13) + CHR$(10)
NumRecsNameFile = LOF(2) / 18
NumRecsLocationFile = LOF(3) / 66

InFile$ = "IDX.$$$"
FOR ix = 1 TO NumFileSpecs
   SHELL "DIR " + FileSpec$(ix) + " > IDX.$$$"
   PRINT "Processing filespec "; FileSpec$(ix)
   GOSUB ProcessFile
NEXT

FOR ix = 1 TO NumFileDirs
   InFile$ = FileDir$(ix)
   PRINT "Processing file list "; FileDir$(ix)
   GOSUB ProcessFile
NEXT

END

ProcessFile:

   IF SHARING THEN
      OPEN InFile$ FOR INPUT SHARED AS #1
   ELSE
      OPEN InFile$ FOR INPUT AS #1
   END IF
   WHILE NOT EOF(1)
      LINE INPUT #1, A$
      X = INSTR(A$, "Directory of ")
      IF X > 0 THEN
         DrivePath$ = MID$(A$, X + 12)
         CALL TRIM(DrivePath$)
         IF INSTR(DrivePath$, "\") > 0 THEN
            IF RIGHT$(DrivePath$, 1) <> "\" THEN
               DrivePath$ = DrivePath$ + "\"
            END IF
         END IF
         CurrentDrivePath$ = DrivePath$
         GOSUB SetLocIndex
         GOTO DoneEntry
      END IF
      IF INSTR(" .", LEFT$(A$, 1)) > 0 THEN
         GOTO DoneEntry
      END IF
      X = INSTR(A$, " ")
      IF X < 13 THEN
         FILENAME$ = LEFT$(A$, 12)
         IF INSTR(FILENAME$, ".") = 0 AND MID$(FILENAME$, 9, 1) = " " AND MID$(FILENAME$, 10, 1) <> " " THEN
            MID$(FILENAME$, X) = "." + MID$(FILENAME$, 10) + SPACE$(9 - X)
         ELSE
            FILENAME$ = LEFT$(A$, X - 1)
         END IF
         GOSUB AddFileName
         GOTO DoneEntry
      END IF
      FILENAME$ = LEFT$(A$, X - 1)
      GOSUB AddFileName
DoneEntry:
   WEND
   CLOSE 1
RETURN

SetPathName:

   CALL BRKFNAME(FILENAME$, FileDrivePath$, FilePrefix$, FileExt$, TRUE)
   IF FileDrivePath$ <> "" THEN
      CurrentDrivePath$ = FileDrivePath$
      GOSUB SetLocIndex
      FILENAME$ = FilePrefix$ + FileExt$
   ELSE
      CurrentDrivePath$ = DrivePath$
   END IF

RETURN

AddFileName:

   GOSUB SetPathName
   MID$(NameRec$, 1, 16) = SPACE$(16)
   MID$(NameRec$, 1, 12) = FILENAME$
   X$ = MID$(STR$(Location), 2)
   X$ = SPACE$(4 - LEN(X$)) + X$
   MID$(NameRec$, 13, 4) = X$
   NumRecsNameFile = NumRecsNameFile + 1
   PUT 2, NumRecsNameFile

RETURN

SetLocIndex:

   IF CurrentDrivePath$ = LocationIndex$(Location) THEN RETURN
   LocationIndex$(NumRecsLocationFile + 1) = CurrentDrivePath$
   Location = 1
   WHILE CurrentDrivePath$ <> LocationIndex$(Location)
      Location = Location + 1
   WEND
   IF Location > NumRecsLocationFile THEN
      NumRecsLocationFile = Location
      MID$(LocationRec$, 1, 63) = SPACE$(63)
      MID$(LocationRec$, 1, 63) = CurrentDrivePath$
      PUT 3, NumRecsLocationFile
   END IF

RETURN

40000 PRINT "Missing configuration file "; ConfigFile$
      END

40100 RESUME NEXT

      SUB BRKFNAME (FILENAME$, DRVPATH$, PREFIX$, EXTENSION$, FOR.JOINING) STATIC
      FILENAME$ = UCASE$(FILENAME$)
      DRVPATH$ = ""
      PREFIX$ = ""
      EXTENSION$ = ""
      CALL TRIMTRAIL(FILENAME$, "\")
      L = LEN(FILENAME$)
      IF L < 1 THEN EXIT SUB
      CALL FINDLAST(FILENAME$, "\", X, Y)
      IF X < 1 THEN
         IF MID$(FILENAME$, 2, 1) = ":" THEN
            DRVPATH$ = LEFT$(FILENAME$, 1)
            S = 3
         ELSE
            S = 1
         END IF
      ELSE
         DRVPATH$ = LEFT$(FILENAME$, X - 1)
         S = X + 1
         IF Y = 1 THEN
            DRVPATH$ =  DRVPATH$ + "\"
         END IF
      END IF
      X = INSTR(FILENAME$ + ".", ".")
      IF X < L THEN
         EXTENSION$ = MID$(FILENAME$, X + 1, 3)
      END IF
      IF S <= L THEN
         IF X >= S THEN
            PREFIX$ = MID$(FILENAME$, S, X - S)
         END IF
      END IF
      IF NOT FOR.JOINING THEN EXIT SUB
      IF LEN(DRVPATH$) = 1 THEN
         IF DRVPATH$ <> "\" THEN
            DRVPATH$ = DRVPATH$ + ":"
         END IF
      END IF
      IF INSTR(DRVPATH$, "\") > 0 AND RIGHT$(DRVPATH$, 1) <> "\" THEN DRVPATH$ = DRVPATH$ + "\"
      IF LEN(EXTENSION$) > 0 THEN EXTENSION$ = "." + EXTENSION$
      END SUB

      SUB FINDLAST (LOOK.IN$, LOOK.FOR$, WHERE.FOUND, NUM.FINDS) STATIC
      WHERE.FOUND = INSTR(LOOK.IN$, LOOK.FOR$)
      NUM.FINDS = -(WHERE.FOUND > 0)
      NEXT.FOUND = INSTR(WHERE.FOUND + 1, LOOK.IN$, LOOK.FOR$)
      WHILE NEXT.FOUND > 0
         NUM.FINDS = NUM.FINDS + 1
         WHERE.FOUND = NEXT.FOUND
         NEXT.FOUND = INSTR(WHERE.FOUND + 1, LOOK.IN$, LOOK.FOR$)
      WEND
      END SUB

      SUB TRIM (TRIM.PARM$) STATIC
      L = INSTR(TRIM.PARM$, " ")
      IF L < 1 THEN EXIT SUB
      IF L = 1 THEN
         WHILE LEFT$(TRIM.PARM$, 1) = " "
            TRIM.PARM$ = RIGHT$(TRIM.PARM$, LEN(TRIM.PARM$) - 1)
         WEND
      END IF
      CALL TRIMTRAIL(TRIM.PARM$, " ")
      END SUB

      SUB TRIMTRAIL (TRIM.PARM$, TRIM.THIS$) STATIC
      IF RIGHT$(TRIM.PARM$, 1) <> TRIM.THIS$ THEN EXIT SUB                                                             ' KG081003
      J = LEN(TRIM.PARM$) - 1                                        ' KG081003
108   IF J > 0 THEN
         IF MID$(TRIM.PARM$, J, 1) = TRIM.THIS$ THEN
            J = J - 1
            GOTO 108
         END IF
      END IF
      TRIM.PARM$ = LEFT$(TRIM.PARM$, J)                              ' KG081003
      END SUB

```
{% endraw %}

## MAKETABS.BAS

{% raw %}
```bas
DEFINT A-Z
PassedArguments$ = COMMAND$ + " "
X = INSTR(" H h ? ", PassedArguments$)
IF X > 0 THEN
   CLS
   PRINT "MAKETABS version 1.0 Copyright (c) 1989 by Ken Goosens"
   PRINT "an RBBS utility to make an index tab for sorted file list"
   PRINT
   PRINT "Format:      MAKETABS <options>    where options are:"
   PRINT
   PRINT "/IN=<input file>                       Default:  FIDX.DEF"
   PRINT "/OUT=<output file>                     Default:  LIDX.DEF"
   PRINT "/B  (run batch)                        Default:  (no)"
   PRINT "/INDEXPOS=<column position to index>   Default:  1"
   IF X > 1 THEN END
END IF

' Initialize

InFile$ = "FIDX.DEF"
OutFile$ = "FIDXT.DEF"
IndexPos = 1
TRUE = -1
FALSE = 0
RunBatch = FALSE

' Process Command Line

PassedArguments$ = UCASE$(PassedArguments$)
X = INSTR(PassedArguments$, "/INDEXPOS=")
IF X > 0 THEN
   IndexPos = VAL(MID$(PassedArguments$, X + 10))
END IF
X = INSTR(PassedArguments$, "/IN=")
IF X > 0 THEN
   Y = INSTR(X, PassedArguments$, " ")
   InFile$ = MID$(PassedArguments$, X + 4, Y - X - 4)
END IF
X = INSTR(PassedArguments$, "/OUT=")
IF X > 0 THEN
   Y = INSTR(X, PassedArguments$, " ")
   OutFile$ = MID$(PassedArguments$, X + 5, Y - X - 5)
END IF
RunBatch = (INSTR(PassedArguments$, "/B ") > 0)

PRINT
PRINT "File to Create Tabs for .. "; InFile$
PRINT "TAB file to make ......... "; OutFile$
PRINT "Position to index ........ "; IndexPos
PRINT
IF NOT RunBatch THEN
   INPUT "A to abort, anything else runs"; ANS$
   ANS$ = UCASE$(ANS$)
   IF ANS$ = "A" THEN END
END IF

DIM StartPos(36)
CharsCounted$ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
OPEN InFile$ FOR INPUT AS #1
FOR i = 1 TO 36
   StartPos(i) = 0
NEXT
LinesRead = 0
PRINT "Processing file "; InFile$; " ";
ColPos = POS(0)
WHILE NOT EOF(1)
   LINE INPUT #1, A$
   LinesRead = LinesRead + 1
   LOCATE , ColPos
   PRINT LinesRead;
   IndexChar$ = MID$(A$, IndexPos, 1)
   Position = INSTR(CharsCounted$, IndexChar$)
   IF Position > 0 THEN
      IF StartPos(Position) = 0 THEN
         StartPos(Position) = LinesRead
      END IF
   END IF
WEND
CLOSE 1

OPEN OutFile$ FOR RANDOM AS #1 LEN = 72
FIELD #1, 72 AS OutRec$
PrevValue = 0
' put 1 in for leading 0's
i = 1
WHILE i < 37 AND StartPos (i) = 0
   StartPos (i) = 1
   i = i + 1
WEND
' find last non-zero value
i = 36
WHILE i > 0 AND StartPos(i) = 0
   i = i - 1
WEND
StartPos(36) = StartPos(i)
' propagate high values to left over 0's
FOR i = 36 TO 1 STEP -1
   IF StartPos(i) = 0 THEN
      CurrentValue = 1
      IF PrevValue > CurrentValue THEN
         CurrentValue = PrevValue
      END IF
   ELSE
      CurrentValue = StartPos(i)
   END IF
   StartPos(i) = CurrentValue
   PrevValue = CurrentValue
NEXT
FOR i = 1 TO 36
   MID$(OutRec$, 1 + 2 * (i - 1), 2) = MKI$(StartPos(i))
NEXT
PUT 1, 1
CLOSE 1
PRINT
PRINT "Created TAB file "; OutFile$
'FOR i = 1 TO 36
'   PRINT MID$(CharsCounted$, i, 1); StartPos(i); ". ";
'NEXT
END

```
{% endraw %}

## MU-EDIT.DOC

{% raw %}
```
Doc file for  MU-EDIT v0.22  30 May 87


Sysop,
 MU-EDIT is a prototype of a program which I'm developing. The reason for 
  releasing it in this form, is to invite opinions, and suggestions. Also, in 
  it's current form it has lot of features that SysOp's can make use of.  I 
  and at least 3 other SysOp's use this program for various reason.  As 
  delivered, it is believed to be as reliable as a production version would 
  be.

 Please keep in mind that this program has lots of rought edges !!!.  It was 
 intended that several features function the same as in RBBS.  This is true in 
 most cases. There are places where this editor doesn't function as RBBS does.




Program Load
------------
 From the commandline specify ...
MU-EDIT [msg filespec] [/first name to scan for] [/second name to scan for] 

 ex.
 MU-EDIT mainm.def /sysop/kim wells

 The names SYSOP and Kim Wells will be flagged if the program detects msgs 
 have been written or are waiting for those names. The name in the first 
 switch will be the name used in the  NAME FROM  when repling to msgs.


Global commands
---------------
 These commands can be used with those functions in which one would possible 
do multiple times. 
 A        Do the the specified function to  ALL  messages
 M        Do the the specified function to  MY   messages 
 F        Do the the specified function to  MSGS FROM  me
 T        Do the the specified function to  MSGS TO   me
 -        From the Specifed msg backwards
 +        From the Specifed msg forwards
 *        From the last msg read forwards


Menu commands
-------------
D)oors    - Allows you to run and external program (not one written in BASIC)
             If no program was specifed SYSOP will simply drop to DOS.
             Ex.    D;C:\DOS\DISKCOPY a: b:

E)nter    - Brings up the message editor

G)oodbye  - Terminates the program
 
H)elp     - Display a summary of what the commands are

J)oin     - Allows you to join a conference. The function works just the 
             commandline on program load. The conference file name must be a 
             full DOS FILESPEC. If you want the program to scan the message 
             base for a name, you can specify which names by adding them to 
             the join command.
             Ex.    J;H:MAINM.DEF /SYSOP/Kim Wells

K)ill     - Kills a message
            Ex.     K;4570

P)ersonal - Scans the current file for your messages.

Q)uick    - Display message subjects like that in RBBS
             Ex.   Q;4571
 
R)ead     - Allows you to read the specified messages.
             Ex.   R;1299;2194

           When reading msgs, a new menu will be shown that allows the 
            following commands:

            C)opy      - Copy the current msg to a new conference
            F)ile      - Copy the current msg to a file called RBBS.MSG
            H)eader    - Modify the msgs header,  FROM, TO, SUBJ.
            K)ill      - Kill the current msgs
            M)ove      - Move the current msg to a new conference
            P)rint     - Print the current msg
            Q)uit      - Quit reading msgs
            R)eply     - Reply to the current msg


S)can     - Display the message header like in RBBS
             Ex.   S;3019

V)eiw     - Not functioning

W)ho      - Not functioning

3         - Recovers messages that were killed
             Ex.   3;t

8         - File message(S) to a file called RBBS.MSG located on the drive 
             that the current conference file is.
             Ex.

9         - Print message(s) to the default printer
             Ex.   9;t

10        - Not functioning

11        - Not functioning

12        - Not functioning

13        - Not functioning

14        - Diplay the comtent of the checkpoint record

15        - Diplay message(s) headers
             Ex.  15;3465;1985 

16        - Inport a file to the message base. Suggest that the file be 
             formatted to have less then 72 characters per line.

17        - Re-edit a message

18        - Move message(s) to a different conference.
             Ex.  18;t;4325;9847

19        - Copy message(s) to a different conference
             Ex.  19;f;2341;8759



Notes...
 The commands K,Q,R,S,3,8,9,10,14,15,16,17,18,19  will take multiple 
  message numbers and global commands which are separated by semi-colons.

 The commands that are listed as   !! DO NOT USE !! are currently undergoing 
 work.

 Additional features of; msg and user file purging and resizing, and user file
 editing are to be added.

 Kim Wells
D:301-350-1299
V:301-350-4570

```
{% endraw %}

## MU-PURGE.DOC

{% raw %}
```


















                                   MU-PURGE   v3.0
                           for the  RBBS-PC message system
                                 v  CPC12-3B  &  up
                            (C)  Copyright  1985, 86, 87





                                    Kim E. Wells
                                1206 Pickering Circle
                              Upper Marlboro, MD, 20772
                           D:301-350-1299  V:301-350-4570
                              SEAdog / FidoNet 109/652































                                        1








     -- RBBS Compatibility --

          This program has been tested with all versions of the RBBS-PC
     conference and user files from CPC12.3B to CPC15.1A



     -- Introduction --

          MU-PURGE.EXE in conjunction with its .DOC file is a program to purge
     the RBBS-PC conference and user type files of killed msgs and old or
     inactive users independently of CONFIG.EXE.  In doing so, MU-PURGE
     simplifies system maintenance since it can be used as a free standing
     program or executed via a batch file.

          It was originally conceived to solve two different problems:

          1.  To fix a message file which contained blank records for Dave
     William's Amateur Radio RBBS in Billings Montana(406-656-8124)

          2.  To be able to have the message file on my RBBS purged while I was
     out of town for several days at a time.

          Prior to the release of RBBS Version CPC 12-3A, message file purging
     code was contained in RBBS-PC.EXE, then removed and placed into CONFIG.EXE.
     Since CONFIG.EXE can not be executed via modem, remote sysops can not purge
     the message file as they once could when the code was included in RBBS-PC.

          MU-PURGE has been in use on my 24 hour, 60 call a day RBBS and
     executed from an "EBL" (Extended Batch Language) batch file since it was
     first written in early May 1985.



     -- Implementation --

          MU-PURGE can be used as a free standing program to purge the message
     and user files or it can used in a DOS or EBL batch file.   Execution via
     either method is the same.  On the command line you supply the name MU-
     PURGE and the name of the message or user file you want purged.If necessary
     you may need to supply the drive and the file extension if appropriate.
     You must supply a valid filespec in order for MU-PURGE to work.  This
     program is so written not to make any assumptions.

          To execute MU-PURGE.EXE one need only specify the following at the DOS
     Prompt:

          For Message files:

          A:MU-PURGE MESSAGES /MSG:        or
          A:MU-PURGE E:Messages /MSG:      or
          A:MU-PURGE E:CHESSM.DEF /MSG:





                                        2








          For User files:

          A:MU-PURGE USERS /USR:           or
          A:MU-PURGE E:USERS /USR:         or
          A:MU-PURGE E:CHESSU.DEF /USR:

          For CONTROL-FILES:

          A:MU-PURGE C:\RBBS\DAILY.CTL

          Earlier versions of this program required you to have at least the
     same amount of free space on the disk as the size of the message or user
     file you are purging.  Not so with this version.  Several new options have
     been and are implemented with a command line switch.  The most significant
     option is the ability to "PACK IN PLACE" (PIP) any message or user type
     file.  This feature simply shuffles active message records towards the
     beginning of the file by overwriting previously killed messages.  In the
     case of a user file, deleted users records are overwritten with a blank
     record.  Using this method to purge the message file does not leave you
     with a backup file.

          Immediately after the first backslash on the commandline, MSG: or USR:
     must be specified.  This tells MU-PURGE what type of file it is.

          A complete list of the optional parameters for msg files is as
     follows;

          Commands to be placed in  Switch 1;

          D###             Purge Msgs over ### days old
          IN               Initialize Node Records
          K                Kill (delete) the back-up file .OLD
          LOG              Log program operations to MU-PURGE.LOG
          NO               No, don't default to PIP
          PIP              Pack-In-Place the  FILESPEC  file
          REMOTE           Send screen output to current DOS console

          Commands to be placed in Switch 2;

          EF$....$         Exclude from purging a File of To: / From: name(s)
          EF#....#         Exclude from purging a File of Mgs Numbers
          EL$....$         Exclude from purging a To: / From: name(s) listed on
     the commandline
          EL#....#         Exclude from purging a Msg number listed on the
     commandline
          CHR$(#)          Character in subject field that signifies exclusion

          Commands to be placed in Switch 3;

          NF(....)         Compare NAME FROM in a msg to a selected user file
          NT  "            Compare NAME TO   in a msg to a selected user file
          O   "            Check to see if this message has been read by the
     receiver




                                        3








          A complete list of the optional parameters for user files is as
     follows;

          Commands in Switch 1;

          D###             Purge Inactive Users over ### days old
          K                Kill (delete) the back-up file .OLD
          LOG              Log program operations to MU-PURGE.LOG
          NO               No, don't default to PIP
          PIP              Pack-In-Place the  FILESPEC  file
          REMOTE           Same as above.

          Commands in Switch 2;

          ###              Minimum Logon Security level
          Same as CONFIG.EXE parameter #101

          Commands in Switch 3;

          ###              Security Level Exempt From Purging
          Same as CONFIG.EXE parameter #117

          (msg file spec)  A compatible message file checkpoint record can be
     updated to reflect the current number of users in a user file

          Explanation of available commands

          D###             Purge Msgs over ### days old"

          K                Kill (delete) the back-up file .OLD

          Then purging the selected message file in a NON-PIP mode a backup
     message file is created.  You can kill that file with this command.

          IN               Initialize Node Records"

          Adding the letters "IN" to the first commandline switch
     willreinitialize all of the NODE records in the message file.  This feature
     was added to help those SYSOP's who have had trouble with RBBS doing
     strange things when the node records have been corrupted.

          This feature will save them the trouble of having to make a new
     message file or attempt to correct the problem manually.

          NO               No, don't default to PIP

          If the PIP mode of purging wasn't selected, MU-PURGE will check to see
     if enough free disk space is available to purge by creating a new message
     file.  If enough free disk disk space isn't available the program will
     terminate if NO was specified or it will default back to purging via the
     PIP mode.






                                        4








          PIP              Pack-In-Place the  FILESPEC  file

          Pack-In-Place is purging by rewriting Active Msgs over Killed Msgs.
     This method is rather fast in that MU-PURGE scans the message file looking
     for the first killed msg and THEN starts rewriting over the killed
     messages.

          REMOTE           Send screen output to current DOS console

          IBM BASIC sends its' screen output directly to screen memory.  By
     specifying on the command REMOTE all output that would normally be written
     to the users local screen will now be written to the current DOS console.
     While MU-PURGE could have been executed after using RBBS SYSOP function 7,
     now they'll be able to see what's happening also.

          Dots represent user supplied information

          EF$.............$ EXCLUDE a file of NAMES
          EF#.............# EXCLUDE a file of NUMBERS

          Between the two dollar and or number signs, you can provide the
     filespec of an ASCII file that contains names or msgs numbers that are to
     be excluded from purging.  A separate file must be used for numbers and
     names.

          EL$.............$
          EL#.............#

          Similarly you and do the same thing on the commandline with names or
     numbers.  A semicolon is used as a delimiter.  When using the D###
     function to delete msgs that where over ### days old, a way was needed to
     retain certain msgs.  By adding an "EL# or EL$" to the commandline switch
     you can exclude certain messages from purging by either specifying a msg
     number(s) or a name(s) as used in the TO / FROM block  or you specify both
     ways.  Implementation of this function is a little tricky.  Study the
     examples in APPENDIX B.  When using the same exclusion commands in a
     control file, those commands aren't reloaded.  That is, if the first
     message file your purged read a file of names to exclude and the next
     message file is to use the same file of names, that file has been loaded
     once and won't be reread.

          CHR$(#)          Character Exclusion

          Exclude from purging a To: / From: name(s) listed on the commandline
     or in a file, IF AND ONLY IF the characters "" CHR$(#) "" with some number
     of an ASCII character between the parans, are located in SWITCH2 and that
     equates to the ASCII value of the first character in the subject field.

          NF(....)         Compare NAME FROM in a msg to a selected user file
     Message will be purged if the sender isn't in the selected USER file.  A
     msg on the screen will display that the msg was purged, why it was purged
     (RNR ... Receiver Not Registered) and the intended receivers name.





                                        5








          NT  "            Compare NAME TO   in a msg to a selected user file
     Message will be purged if the receiver isn't in the selected USER file. A
     msg on the screen will display that the msg was purged, why it was purged
     (SNR ... Sender Not Registered) and the senders name.

          O   "            Check to see if this message has been read by the
     receiver. Message will be purged if and only if the receiver has read the
     message and it is protected.  A msg on the screen will display that the msg
     was purged, why it was purged, (RRM ... Receiver Read Mail) and the
     receivers name and high msg read.

          When purging messages that are compared to a users file, the user
     should beware that the SYSOP's real name is rarely, if ever, entered in the
     users files.  Therefore, the SYSOP's real name should always be excluded
     from an automatic purge operation.  The statistics that are displayed at
     the programs end show active and purged messages as well as used and unused
     message records.  The numbers that are displayed may be different then what
     RBBS reports due to RBBS considering node records as message records.  A
     similar situation will appear when purging a USERS file.  MU-PURGE shows
     the totals of active, exempt, and locked-out users which when combined will
     total what RBBS calls the current amount of active users.

          Appropriate error messages are generated for abnormal conditions.



     -- Control files --

          MU-PURGE can read a list of user and message files that are to be
     purged from a ASCII file that properly contains a list of those files and
     all the required parameters.  All entries in that file are similar in
     structure to those that can be entered on a DOS commandline.  A CONTROL-
     FILE must have a file name extension of ".CTL".  It must not contain any
     blank lines.

          SEE APPENDIX B for command parameter examples.

          MU-PURGE can be used in a normal DOS batch file, but since DOS batch
     files can't count, an additional program is required to count the number of
     times the batch file has been executed.  See appendix A for a sample batch
     file and program to count execution times.  "EBL" batch files run much
     faster than DOS Batch files.  The advantage to  using "EBL" over DOS batch
     files is not only speed of execution but you no longer need a separate to
     count the number of times the file has executed.  That ability and many
     others are included with "EBL".

          It should be noted that familiarity with "EBL" is essential in order
     to correctly drive your RBBS with this type of batch file and "EBL" only
     works with PC-DOS and the IBM Personal Computer or true compatiables.  See
     appendix A for a sample EBL batch file.







                                        6








     -- Program Limitations: --

          1.  ALL the limitations that accompany the use of the Microsoft
     QuickBASIC compiler  version 3.0

          2.  MU-PURGE is not medicine to fix a message file that for some
     reason is in an ill state of format.  It is requested that you send me a
     copy of your bad message file on diskette or via upload to my bbs so that I
     can include code in future releases of this program, to fix similar
     problems.



     -- Future Releases --

          Future Releases are at irregular intervals as the need arises.  You
     can always get the latest version from my RBBS.  (301-350-1299)



     -- Programming and Compilation --

          MU-PURGE was compiled using the Microsoft QuickBASIC Compiler v3.0.
     Several ASM routines from ADVBAS.LIB  by Thomas Hanlin and

          Super BASIC LIB by Marilyn Fleming were used to overcome limitations

          of BASIC.



     -- Limited License --

          This software is copyrighted but a limited license is granted and you
     are free to use and share it under the following conditions:

          1.  MU-PURGE v3.0 is not distributed in modified form,

          2.  No fee or other consideration is charged for MU-PURGE itself, and

          3.  Reference to the copyright and author is retained.

          4.  Use of this program to maintain a subscription BBS is prohibited
     without the express permission of the author.













                                        7








     -- Warranty --

          MU-PURGE is provided "AS IS" without warranty of any kind, either
     expressed or implied, including, but not limited to the implied warranties
     of merchantability and fitness for a particular purpose.  The entire risk
     as to the quality and performance of this program is with the user and
     should the program prove defective, the user and not the author will assume
     the entire cost of all necessary remedies.  The author does not warrant
     that the functions contained in the program will meet any users
     requirements or that the operation of the program will be uninterrupted or
     error free.














































                                        8








     -- Acknowledgements --

          RBBS-PC  (C)
          D. Thomas Mack
          Address Below

          ADVBAS  (C)
          Thomas Hanlin
          Address Below

          EXTENDED BAT LANGUAGE  (BAT)   (C)
          Frank Canova
          Seaware Corp   P.O. Box 1656  Delray Beach, Florida 33444
          305-276-5072

          IBM
          International Business Machines Inc.
          P.O. Box 1328-S  Boca Raton, Florida  33432

          QuickBASIC  (C)
          Microsoft Corp
          16011 NE 36th Way  Box 97017  Redmond, WA. 98073-9717

          SuperBASIC (C)
          Fleming Software  PO Box 528  Oakton, Va. 22124

          

          "Special Thanks" for their ideas and assistance in the preparation and
     testing of this program and its' documentation to:

          Roger Fajman     21 Bannister Court, Gaithersburg, Md, 20879

          Phil Grier      3375 Sudlerville South, Laurel, Md,  20707

          Thomas Hanlin III    6812 Syndenstricken Rd, Springfield, VA. 22152

          Tom Mack    10210 Oxfordshire Road, Great Falls, Virginia 22066

          Data: 703-759-5049 & 703-759-9659

          Tanya Metaska   6112 Thomas Drive, Springfield, Va,  22150

          Data: 703-971-4491

          Richard Moreland    345 Raven Wing Drive, Porter, Texas, 77365

          William Silva    14103 Dub Drive, Laurel, Maryland. 20708

          Lori Wells     1206 Pickering Circle, Upper Marlboro, Md.  20772

          Dave Williams     11 Gatewood Drive, Billings, Mt, 59102





                                        9








     -- APPENDIX A --    Batch File Information

          *** In order for MU-PURGE to be executed from a batch file, Parameter
     #123 in the RBBS-PC Configuration Program "CONFIG.EXE" must have been
     previously set to "SYSTEM" recycle.

          Sample DOS Batch file drive RBBS with MU-PURGE

          (code for WATCHDOG.COM included)

          IF NOT EXIST A:RCTTY.BAT GOTO LOCAL
          A:WATCHDG1 OFF
          DEL A:RCTTY.BAT
          :LOCAL
          IF EXIST BATCH.CTL GOTO SYSTEM
          A:MU-PURGE MESSAGES
          :SYSTEM
          A:BASICA COUNTER    ( *** or   COUNTER.EXE  *** )
          A:RBBS-PC
          IF EXIST A:RCTTY.BAT GOTO REMOTE
          A:RBBS.BAT
          :REMOTE
          A:WATCHDG1 ON
          A:RCTTY.BAT

          Sample BASIC Program to count the passes thru a DOS batch file.

          1   ON ERROR GOTO 13
          2   OPEN "BATCH.CTL" AS 2
          3   NAME "COUNTER.DAT AS "KIM" :NAME "KIM" AS "COUNTER.DAT"
          5   OPEN "COUNTER.DAT" AS 1 LEN = 4
          6   FIELD 1,2 AS C1$, 2 AS C2$
          7   C1 = VAL(C1$) :C2$ = VAL(C2$)
          8   IF C1 >= C2 THEN CLOSE 2 :KILL "BATCH.CTL"
          9   C1 = C1 + 1
          10  RSET C1$ = STR(C1) :PUT 1,1
          12  SYSTEM
          13  IF ERR = 53 AND ERL = 3 THEN OPEN "COUNTER.DAT" AS 1
          14  FIELD 1, 2 AS C1$, 2 AS C2$
          15  RESET C1$ = "0" :RESET C2$ = "3" :PUT 1,1
          17  RESUME 7
















                                        10








          Sample EXTENDED LANGUAGE BATCH FILE

          BAT
          bat %I = 0
          bat -start.over
          bat stateof A:RCCTY.BAT    | if %r = 0  call -sub.local
          RBBS-PC
          BAT
          bat stateof A:RCTTY.BAT    | if %r = 0  goto -sub.remote
          bat %I = %I + 1| if %I =20  call -sub.purge
          bat goto -start.over

          bat -sub.purge
          MU-PURGE MESSAGES /K
          MU-PURGE CHESSM.DEF /K
          BAT
          bat %I = 0 | return

          bat sub-local
          WATCHDG1 OFF
          Del RCTTY.BAT
          BAT
          bat return

          bat -sub.remote
          WATCHDG1 ON
          RCTTY






























                                        11








     -- APPENDIX B --    Command Examples

          The general command structure is as follows;

          At the DOS prompt type:

          MU-PURGE message.filespec /MSG: [option(s)/option(s)/option(s)]"
          where the message.filespec is

               [drive:] [path] filename [.filename extension]

          

          At the DOS prompt type ......

          A>MU-PURGE C:MESSAGES /MSG:PIPD45 /EL#1111;2222;3333;4444#

          The above command will call MU-PURGE from the default drive A:, purge
     the message file called MESSAGES on the C: drive, invoke a PACK in PLACE
     mode of operation, purge all messages over 45 days old and exclude from
     purging messages 1111, 2222, 3333, 4444 unless anyone of them had been
     previously killed in RBBS.

          The syntax for msg pruging exclusion requires that the message
     number(s) must be enclosed with the number sign (#) and the entire list of
     number(s) must be prefaced with an "EL".  Additionally the same applies for
     a list of name(s) which must be enclosed with a dollar sign ($).  To
     implement both functions simply list both on the commandline.

          A>MU-PURGE C:MSGS /MSG:PIPD45 /EL#1111#EL$Kim Wells;Dave Willaims$

          The above command will do all of the previous example and exclude from
     purging the names Kim Wells and Dave Willaims.  MU-PURGE will convert any
     lower case to UPPER CASE.  A maximum of 100 names and / or  50 numbers can
     be used.

          A>MU-PURGE C:MESSAGES /MSG:PIPD45 /EL$Kim Wells$ /NTNFO(H:USERS)

          The above command will purge all messages over 45 days old, exclude
     any msg with the name KIM WELLS in it from being purged, and then compare
     msg SENDER'S, RECEIVERS to those names in the selected user file and delete
     the msg(s) if a sender or receiver wasn't found.  Additionally, if a
     receiver had read their protected mail, that msg will be deleted.

          A>MU-PURGE C:USERS  /USR:D45 /5 /11 (C:MESSAGES)

          The above command will purge the selected users file of anyone who
     hasn't logged on in the last 45 days and update checkpoint record in the
     file C:MESSAGES's to reflect the new user file totals.  Those users who
     have a security level of 5 (locked-out) will be retained as well as those
     with a security level of 11 or greater (purge exempt). Those values for
     your system can be found in CONFIG.EXE parameters numbers #### and ####.





                                        12








          A>MU-PURGE C:DAILY.CTL

          The above command will load into memory all the commands found in
     thecontrol file DAILY.CTL

          The Following are examples of the two control files that I use. One is
     for daily purging and the second is for monthly purging.

          Ex. 1  Daily

          H:MESSAGES  /MSG:PIP
          H:TESTM.DEF /MSG:PIP
          H:USERS    /USR:D45 LOG /5 /11 (H:MESSAGES)
          H:MESSAGES /MSG:D45 LOG PIP /EL$KIM WELLS;SYSOP$ /NTO(H:USERS)

          **  ALL  MU-PURGE  commands can be stacked after the first slash when
     placed in their proper switch positions.








































                                        13





     Ex. 2  Monthly


     -- APPENDIX C --    Revision Information

          Version 3.0   12 Nov 86

          1.  Program was completely rewritten

          2.  Features to have certain message(s) excluded from purging were
     added.  The user can specify a list of names or numbers on the commandline
     or from a file or both.

          3.  Code to purge a user file(s) was added

          Version 2.0    8 March 86

          1.  Program code was rewritten in the general format that RBBS-PC is
     written in.

          2.  Command line switches were added which adds the ability to Pack in
     Place any message type file, eliminating the need for extra disk space;
     Buffering all read/write operations as this  program purges the msg file
     with either type purging mode; deleting messages that are to old based on
     their age in days; and finally  the option of a small opening screen was
     added.

          Version 1.2    1 December 85

          1.  Each message header is now checked for a valid message number and
     a minimum number of records per message in addition to a valid active /
     killed status flag.  If any of the above are not present or not in proper
     form, the message header and following records are purged until a good
     message header is found.

          2.  A possible bug was fixed which could have over written node
     records.

          3.  Sample DOS and EBL batch files and the counter program in the
     main doc file were updated.

          4.  Program code was made smaller.

          Version 1.1   20 October 85

          1.  First release

          Version 1.0  --------------

          1.  If you've got it........I didn't write it.

          Kim Wells

          *****  End of MU-PURGE  Documentation  *****






                                        14


```
{% endraw %}

## RECONFIG.BAS

{% raw %}
```bas
   DECLARE FUNCTION StrTok$(Source$,Delim$)
   DECLARE SUB box (ybox%, xbox%, boxrows%, boxcols%, style%)   'draw a box
   DECLARE SUB Line17 (HelpText$)
   DEFINT A-Z
   CLEAR
   CLS
   DIM FILES.FUNCTION(8)                         ' file menu security
   DIM GLOBAL.FUNCTION(4)                        ' Global commands security
   DIM HELP$(9)                                  ' Help file names
   DIM LIBRARY.FUNCTION(7)                       ' Library commands security
   DIM MAIN.FUNCTION(18)                         ' Main menu security
   DIM MENU$(6)                                  ' Menu file names
   DIM SYSOP.FUNCTION(7)                         ' Sysop menu security
   DIM DNLD$(99)                                 ' Download Sub-Dirs
   DIM UTILITY.FUNCTION(12)                      ' Utility menu security
   CONST FALSE = 0
   CONST TRUE = NOT FALSE
   KEY OFF
   LOCATE ,,0
   Parms = FALSE
   Ver$ = " 14.1D 15.1A 15.1B 15.1C 16.1A 17.1A 17.1B 17.1C 17.1D 17.2A 17.2B "

   IF COMMAND$ = "" THEN _
      GOTO CopyRight
   Parms = 1
   Delim$ = " "
   InputFileName$ = STRTOK$(COMMAND$,Delim$)
   IF InputFileName$ = "" THEN _
      GOTO CopyRight
   InputVersion$ = STRTOK$("",Delim$)
   IF LEN(InputVersion$) < 4 THEN GOTO CopyRight
   InputVersion$ = UCASE$ (InputVersion$)
   Version = INSTR(Ver$, " " + InputVersion$ + " ")
   IF Version = 0 THEN GOTO CopyRight
   Version = INT((Version-2)/6)+1
   OutputFileName$ = STRTOK$("",Delim$)
   IF OutputFileName$ = "" THEN _
      GOTO CopyRight
   Parms = TRUE
'
' ╔══════════════════════╗
' ║  COPYRIGHT GOES HERE ║
' ╚══════════════════════╝
'
CopyRight:
   CALL box(1,5,18,69,2)
   FOR I = 2 to 15
      LOCATE I,7
      READ Temp$
      PRINT Temp$
      NEXT
   IF Parms = FALSE THEN CALL Line17("Press any key to continue")
   IF Parms = 1 THEN
      Parms = FALSE
      CALL Line17("ERROR IN INPUT PARAMETERS -  Press any key to continue")
   END IF
120 REM
   IF Parms = FALSE THEN
      A$ = INKEY$
      IF A$="" GOTO 120 ELSE GOTO 130
   END IF
   TEMP = (VAL(RIGHT$(TIME$,2))+4) MOD 60
   WHILE VAL(RIGHT$(TIME$,2)) <> TEMP
   WEND
130 REM
   LOCATE 1,1
   FOR I = 3 to 17
      LOCATE I, 6
      PRINT SPACE$(67);
   NEXT I
   LOCATE 4,12
   PRINT "Name of INPUT FILE:"
   LOCATE 5,9
   PRINT "Version of INPUT FILE:"
   LOCATE 6,11
   PRINT "Name of OUTPUT file:"
   IF Parms = FALSE THEN GOTO 150
   LOCATE 4,32
   PRINT InputFileName$
   LOCATE 5,32
   PRINT InputVersion$
   LOCATE 6,32
   PRINT OutputFileName$
   GOTO 180
'
' ╔═════════════════════════════╗
' ║ GET THE INPUT FROM THE USER ║
' ╚═════════════════════════════╝
'
150 CALL Line17("Enter the name of your existing RBBS-PC CONFIGURATION FILE")
   LOCATE 4,32
   PRINT SPACE$(40);
   LOCATE 4,31
   INPUT " ", InputFileName$
   IF LEN(InputFileName$) < 1 THEN
      PRINT CHR$(7);
      GOTO 150
   END IF
160 CALL Line17("Valid versions: 14.1D, 15.1A/B/C, 16.1A, 17.1A/B/C/D 17.2A/B")
   LOCATE 5,32
   PRINT SPACE$(40);
   LOCATE 5,31
   INPUT " ", InputVersion$
   IF LEN(InputVersion$) <> 5 THEN
      PRINT CHR$(7);
      GOTO 160
   END IF
   InputVersion$ = UCASE$ (InputVersion$)
   Version = INSTR(Ver$, InputVersion$)
   IF Version = 0 THEN
      PRINT CHR$(7);
      GOTO 160
   END IF
   Version = INT((Version-1)/6)+1
170 CALL Line17("Enter the name of the output RBBS-PC version 17.3 FILE")
   LOCATE 6,32
   PRINT SPACE$(40);
   LOCATE 6,31
   INPUT " ", OutputFileName$
   IF LEN(OutputFileName$) < 1 THEN
      PRINT CHR$(7);
      GOTO 170
   END IF
   CALL Line17("")
180   LOCATE 8,9
   INPUT "Is everything correct (Y or N)";QUERY$
   IF UCASE$ (LEFT$(Query$,1)) <> "Y" THEN GOTO 150
   ON ERROR GOTO ErrorHandler
1000  OPEN "I",#1,InputFileName$
'
' ╔════════════════════════════════════════════════════════════╗
' ║ READ IN THE PARAMETERS FROM AN EXISTING "RBBS-PC.DEF" FILE ║
' ╚════════════════════════════════════════════════════════════╝
'
1010  LOCATE 10,9
      PRINT "READING DATA....";
'
' ╔═════════════════╗
' ║ READ INPUT FILE ║
' ╚═════════════════╝
'
ReadDef:
   IF Version >= 6 THEN INPUT #1,CONFIG.FILE.VER$
   INPUT #1,DOWNLOAD.DRIVES$, _
            SYSOP.PASSWORD.1$, _
            SYSOP.PASSWORD.2$, _
            SYSOP.FIRST.NAME$, _
            SYSOP.LAST.NAME$, _
            REQUIRED.RINGS, _
            START.OFFICE.HOURS, _
            END.OFFICE.HOURS, _
            MINUTES.PER.SESSION!, _
            MAX.ALLOWED.MSGS.FRM.DEF, _
            ACT.MNTHS.B4.DELETING, _
            UPLOAD.DIRECTORY$, _
            EXPERT.USER, _
            ACTIVE.BULLETINS, _
            PROMPT.BELL, _
            PCJR, _
            MENUS.CAN.PAUSE, _
            MENU$(1), _
            MENU$(2), _
            MENU$(3), _
            MENU$(4), _
            MENU$(5)

   IF Version >= 4 THEN INPUT #1,MENU$(6)

   INPUT #1,CONFERENCE.MENU$, _
            CONFERENCE.VIEWER.SEC.LVL, _
            WELCOME.INTERRUPTABLE, _
            REMIND.FILE.TRANSFERS, _
            PAGE.LENGTH, _
            MAX.MESSAGE.LINES, _
            DOORS.AVAILABLE, _
            MO$

   INPUT #1,MAIN.MESSAGE.FILE$, _
            MAIN.MESSAGE.BACKUP$, _
            CALLERS.FILE$, _
            COMMENTS.FILE$, _
            MAIN.USER.FILE$, _
            WELCOME.FILE$, _
            NEWUSER.FILE$, _
            DIRECTORY.EXTENTION$, _
            COM.PORT$, _
            BULLETINS.OPTIONAL, _
            USER.INIT.COMMAND$, _
            RTS$, _
            DOS.VERSION, _
            FG, _
            BG, _
            BORDER, _
            RBBS.BAT$, _
            RCTTY.BAT$

   INPUT #1,OMIT.MAIN.DIRECTORY$, _
            FIRST.NAME.PROMPT$

   IF Version = 1 THEN
      INPUT #1,HELP$(1), _
               HELP$(2), _
               HELP$(3), _
               HELP$(4), _
               HELP$(5), _
               HELP$(6), _
               HELP$(7), _
               HELP$(8), _
               HELP$(9)
   ELSE
      INPUT #1,HELP$(3), _
               HELP$(4), _
               HELP$(7), _
               HELP$(9)
   END IF

   INPUT #1,BULLETIN.MENU$, _
            BULLETIN.PREFIX$, _
            DRIVE.FOR.BULLETINS$, _
            MESSAGE.REMINDER, _
            REQUIRE.NON.ASCII, _
            ASK.EXTENDED.DESC, _
            MAXIMUM.NUMBER.OF.NODES, _
            NETWORK.TYPE, _
            RECYCLE.TO.DOS, _
            MAX.USR.FILE.SIZE.FRM.DEF, _
            MAX.MSG.FILE.SIZE.FRM.DEF!, _
            TRASHCAN.FILE$
   INPUT #1,MINIMUM.LOGON.SECURITY, _
            DEFAULT.SECURITY.LEVEL, _
            SYSOP.SECURITY.LEVEL, _
            FILESEC.FILE$, _
            SYSOP.MENU.SECURITY.LEVEL, _
            CONFMAIL.LIST$, _
            MAXIMUM.VIOLATIONS, _
            SYSOP.FUNCTION(1), _
            SYSOP.FUNCTION(2), _
            SYSOP.FUNCTION(3), _
            SYSOP.FUNCTION(4), _
            SYSOP.FUNCTION(5), _
            SYSOP.FUNCTION(6), _
            SYSOP.FUNCTION(7), _
            PASSWORD.FILE$, _
            MAXIMUM.PASSWORD.CHANGES, _
            MINIMUM.SECURITY.FOR.TEMP.PASSWORD, _
            OVERWRITE.SECURITY.LEVEL, _
            DOORS.TERMINAL.TYPE, _
            MAX.PER.DAY
   IF Version = 1 THEN GOTO READ.DEF.141D.ONLY

   INPUT #1,MAIN.FUNCTION(1), _
            MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17)

   IF Version >= 4 THEN INPUT #1,MAIN.FUNCTION(18)

   IF Version < 5 THEN
      INPUT #1,DUMMY$
   ELSE
      INPUT #1,MIN.NEWCALLER.BAUD
   END IF

   INPUT #1,WAIT.BEFORE.DISCONNECT, _
            FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4)
   IF Version >= 5 THEN INPUT #1,FILES.FUNCTION(5)

   INPUT #1,FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            FILES.FUNCTION(8), _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(2)
   IF Version >= 5 THEN INPUT #1,UTILITY.FUNCTION(3)

   INPUT #1,UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            UTILITY.FUNCTION(6), _
            UTILITY.FUNCTION(7), _
            UTILITY.FUNCTION(8), _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(12), _
            GLOBAL.FUNCTION(1), _
            GLOBAL.FUNCTION(2), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(4), _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$
   INPUT #1,TURN.PRINTER.OFF, _
            DIRECTORY.PATH$, _
            MIN.SEC.TO.VIEW, _
            LIMIT.SEARCH.TO.FMS, _
            DEFAULT.CATEGORY.CODE$, _
            DIR.CATEGORY.FILE$, _
            NEW.FILES.CHECK, _
            MAX.DESC.LEN, _
            SHOW.SECTION, _
            COMMANDS.IN.PROMPT, _
            NEWUSER.SETS.DEFAULTS, _
            HELP.PATH$, _
            HELP.EXTENSION$, _
            MAIN.COMMANDS$, _
            FILE.COMMANDS$, _
            UTIL.COMMANDS$, _
            GLOBAL.COMMANDS$, _
            SYSOP.COMMANDS$
   IF Version >= 4 THEN
      INPUT #1,RECYCLE.WAIT, _
            LIBRARY.FUNCTION(1), _
            LIBRARY.FUNCTION(2), _
            LIBRARY.FUNCTION(3), _
            LIBRARY.FUNCTION(4), _
            LIBRARY.FUNCTION(5), _
            LIBRARY.FUNCTION(6), _
            LIBRARY.FUNCTION(7), _
            LIBRARY.DRIVE$, _
            LIBRARY.DIRECTORY.PATH$, _
            LIBRARY.DIRECTORY.EXTENTION$, _
            LIBRARY.WORK.DISK.PATH$, _
            LIBRARY.MAX.DISK, _
            LIBRARY.MAX.DIRECTORY, _
            LIBRARY.MAX.SUBDIR, _
            LIBRARY.SUBDIR.PREFIX$, _
            LIBRARY.ARCHIVE.PATH$, _
            LIBRARY.ARCHIVE.PROGRAM$, _
            LIBRARY.COMMANDS$
   END IF

   INPUT #1,UPLOAD.PATH$, _
            FMS.DIRECTORY$, _
            ANS.MENU$,_
            REQUIRED.QUESTIONNAIRE$,_
            REMEMBER.NEW.USERS, _
            SURVIVE.NOUSER.ROOM, _
            PROMPT.HASH$, _
            START.HASH, _
            LEN.HASH, _
            PROMPT.INDIV$, _
            START.INDIV, _
            LEN.INDIV
   INPUT #1,BYPASS.MSGS, _
            MUSIC, _
            RESTRICT.BY.DATE, _
            DAYS.TO.WARN, _
            DAYS.IN.SUBSCRIPTION.PERIOD, _
            VOICE.TYPE, _                                            ' KG013101
            RESTRICT.VALID.CMDS, _
            NEW.USER.DEFAULT.MODE, _
            NEW.USER.LINE.FEEDS, _
            NEW.USER.NULLS, _                                        ' KG013101
            FAST.FILE.LIST$, _                                       ' KG013101
            FAST.FILE.LOCATOR$, _                                    ' KG013101
            MESSAGES.CAN.GROW, _                                     ' KG013101
            WRAP.CALLERS.FILE$, _
            REDIRECT.IO.METHOD, _
            AUTO.UPGRADE.SEC, _                                      ' KG013101
            HALT.ON.ERROR, _
            NEW.PUBLIC.MSGS.SECURITY, _
            NEW.PRIVATE.MSGS.SECURITY, _
            SECURITY.NEEDED.TO.CHANGE.MSGS, _
            SL.CATEGORIZE.UPLOADS, _
            BAUDOT, _
            TIME.TO.DROP.TO.DOS, _
            EXPIRED.SECURITY, _
            DTR.DROP.DELAY, _
            ASK.IDENTITY, _
            MAX.REG.SEC, _                                           ' KG013101
            BUFFER.SIZE, _
            MLCOM, _
            SHOOT.YOURSELF, _
            EXTENSION.LIST$, _
            NEW.USER.DEFAULT.PROTOCOL$, _
            NEW.USER.GRAPHICS$, _
            NET.MAIL$, _
            MASTER.DIRECTORY.NAME$, _
            PROTO.DEF$, _
            UPCAT.HELP$, _
            ALWAYS.STREW.TO$, _
            LAST.NAME.PROMPT$
   GOTO READ.DEF.ALL

READ.DEF.141D.ONLY:
   INPUT #1,MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(1), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            UTILITY.FUNCTION(6), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17), _
            GLOBAL.FUNCTION(4), _
            GLOBAL.FUNCTION(2), _
            DEFAULT.MACHINE.TYPE$, _
            WAIT.BEFORE.DISCONNECT

   INPUT #1,FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            DUMMY,             _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4), _
            DUMMY,             _
            FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            DUMMY,             _
            DUMMY,             _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            DUMMY,             _
            DUMMY,             _
            UTILITY.FUNCTION(7), _
            DUMMY,             _
            UTILITY.FUNCTION(8), _
            DUMMY,             _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(2), _
            UTILITY.FUNCTION(12), _
            DUMMY,             _
            DUMMY,             _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$

   INPUT #1,SYSOP.FUNCTION.KEY1$, _
            SYSOP.FUNCTION.KEY2$, _
            SYSOP.FUNCTION.KEY3$, _
            SYSOP.FUNCTION.KEY4$, _
            SYSOP.FUNCTION.KEY5$, _
            SYSOP.FUNCTION.KEY6$, _
            SYSOP.FUNCTION.KEY7$, _
            SYSOP.FUNCTION.KEY8$, _
            SYSOP.FUNCTION.KEY9$, _
            SYSOP.FUNCTION.KEY10$, _
            SYSOP.FUNCTION.KEY11$, _
            SYSOP.FUNCTION.KEY12$
READ.DEF.ALL:

   IF Version >= 5 THEN
   INPUT #1,PERSONAL.DRVPATH$, _
            PERSONAL.DIR$, _
            PERSONAL.BEGIN, _
            PERSONAL.LEN, _
            PERSONAL.PROTOCOL$, _
            PERSONAL.CONCAT, _
            PRIVATE.READ.SEC, _
            PUBLIC.READ.SEC, _
            SEC.CHANGE.MSG, _
            KEEP.INIT.BAUD, _
            MAIN.PUI$, _
            DEFAULT.ECHOER$, _
            HOST.ECHO.ON$, _
            HOST.ECHO.OFF$, _
            SWITCH.BACK, _
            DEFAULT.LINE.ACK$, _
            ALTDIR.EXTENSION$, _
            DIRECTORY.PREFIX$
   END IF

   INPUT #1,SEC.LVL.EXEMPT.FRM.PURGING, _
            MODEM.INIT.WAIT.TIME, _
            MODEM.COMMAND.DELAY.TIME, _
            TURBO.RBBS
   INPUT #1,DNLD.SUB, _
            WILL.SUBDIRS.B.USED, _
            UPLOAD.TO.SUBDIR, _
            DOWNLOAD.TO.SUBDIR, _
            UPLOAD.SUBDIR$

   IF Version < 5 THEN
   INPUT #1,RESTRICT.BAUD, _
            USE.COLOR
   ELSE
   INPUT #1,MIN.OLDCALLER.BAUD, _
            MAX.WORK.VAR                                             ' KG013101
   ENDIF

   INPUT #1,DISKFULL.GO.OFFLINE, _
            EXTENDED.LOGGING, _
            USER.RESET.COMMAND$, _
            USER.COUNT.RINGS.COMMAND$, _
            USER.ANSWER.COMMAND$, _
            USER.GO.OFFHOOK.COMMAND$, _
            DISK.FOR.DOS$, _
            DUMB.MODEM, _
            COMMENTS.AS.MESSAGES, _
            LSB, _
            MSB, _
            LINE.CONTROL.REGISTER, _
            MODEM.CONTROL.REGISTER, _
            LINE.STATUS.REGISTER, _
            MODEM.STATUS.REGISTER
   IF Version >= 5 THEN
   INPUT #1,KEEP.TIME.CREDITS, _
            XON.XOFF, _
            ALLOW.CALLER.TURBO, _
            USE.DEVICE.DRIVER$, _
            PRELOG$, _
            NEW.USER.QUESTIONNAIRE$, _
            EPILOG$, _
            REGISTRATION.PROGRAM$, _
            QUES.PATH$, _
            USER.LOCATION$, _
            USER.INITIALIZE.COMMAND$, _
            USER.FIRMWARE.CLEAR.CMND$, _
            USER.FIRMWARE.WRITE.CMND$, _
            ENFORCE.UPLOAD.DOWNLOAD.RATIOS, _
            SIZE.OF.STACK, _
            SECURITY.EXEMPT.FROM.EPILOG, _
            USE.BASIC.WRITES, _
            DOSANSI, _
            ESCAPE.INSECURE, _
            USE.DIR.ORDER, _
            ADD.DIR.SECURITY, _
            MAX.EXTENDED.LINES, _
            ORIG.COMMANDS$
   END IF

   IF Version >= 6 THEN
   INPUT #1,LOGON.MAIL.LEVEL$, _
               MACRO.DRVPATH$, _
               MACRO.EXTENSION$, _
               EMPHASIZE.ON.DEF$, _
               EMPHASIZE.OFF.DEF$, _
               FG.1.DEF$, _
               FG.2.DEF$, _
               FG.3.DEF$, _
               FG.4.DEF$, _
               SECVIO.HLP$, _
               FOSSIL, _
               MAX.CARRIER.WAIT, _
               CALLER.BKGRD, _
               SMART.TEXT, _
               TIME.LOCK, _
               WRITE.BUF.DEF, _
               SEC.KILL.ANY, _
               DOORS.DEF$, _
               SCREEN.OUT.MSG$, _
               AUTOPAGE.DEF$
   END IF
   IF DNLD.SUB < 1 OR DNLD.SUB > 99 THEN GOTO CLOSE.IN
   FOR I = 1 TO DNLD.SUB
       INPUT #1,DNLD$(I)
   NEXT
   GOTO CLOSE.IN

'
' ╔══════════════════╗
' ║ CLOSE INPUT FILE ║
' ╚══════════════════╝
'
CLOSE.IN:
      CLOSE #1
'
' ╔═════════════════════════════════════════════════╗
' ║ INITALIZE ALL VARIABLES THAT DON'T AREADY EXIST ║
' ╚═════════════════════════════════════════════════╝
'
1020  LOCATE 11,9
   PRINT "CONVERTING DATA...";
   IF INSTR(MAIN.MESSAGE.FILE$,":") THEN
      D$ = LEFT$(MAIN.MESSAGE.FILE$,INSTR(MAIN.MESSAGE.FILE$,":"))
   ELSE
      D$ = ""
   END IF

   ON Version GOTO 2000, 2100, 2200, 2300, 2400, 2500, 2500, 2500, 2500
   GOTO 2600
'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 14.1D ║
' ╚══════════════════════════════════╝
'
2000  FOR I = 1 TO 9
         IF INSTR(HELP$(I),":") THEN
            HELP$(I) = MID$(HELP$(I),INSTR(HELP$(I),":")+1)
         END IF
      NEXT
   ALWAYS.STREW.TO$           = ""
   ANS.MENU$                  = D$ + "MENUA"
   ASK.IDENTITY               = FALSE
   BAUDOT                     = 0
   BUFFER.SIZE                = 128
   BYPASS.MSGS                = FALSE                                ' KG013101
   COMMANDS.IN.PROMPT         = TRUE
   DEFAULT.CATEGORY.CODE$     = "UC "
   DAYS.IN.SUBSCRIPTION.PERIOD = 365
   DAYS.TO.WARN               = 60
   DIR.CATEGORY.FILE$         = D$ + "DIR.CAT"
   DIRECTORY.PATH$            = D$
   DTR.DROP.DELAY             = 3
   DUMMY$                     = " "
   EXPIRED.SECURITY           = DEFAULT.SECURITY.LEVEL
   FILE.COMMANDS$             = "DGLNPSUV"
   FILES.FUNCTION(8)          = FILES.FUNCTION(1)
   F7.MESSAGE$                = ""
   GLOBAL.COMMANDS$           = "H?QX"                               ' KG013101
   HELP.EXTENSION$            = "HLP"
   HELP.PATH$                 = D$
   LEN.HASH                   = 31
   LEN.INDIV                  = 0
   LIMIT.SEARCH.TO.FMS        = FALSE
   MAIN.COMMANDS$             = "ABCDEFIJKOPRSTUVW"
   MAIN.FUNCTION(1)           = DEFAULT.SECURITY.LEVEL
   MAIN.FUNCTION(18)          = 32767
   MASTER.DIRECTORY.NAME$     = ""
   MAX.DESC.LEN               = 40
   MIN.SEC.TO.VIEW            = DEFAULT.SECURITY.LEVEL
   MLCOM                      = FALSE
   MUSIC                      = FALSE
   NET.MAIL$                  = ""
   NEW.FILES.CHECK            = FALSE
   NEWUSER.SETS.DEFAULTS      = TRUE
   NEW.PUBLIC.MSGS.SECURITY   = DEFAULT.SECURITY.LEVEL
   NEW.PRIVATE.MSGS.SECURITY  = DEFAULT.SECURITY.LEVEL
   NEW.USER.DEFAULT.MODE      = 0
   NEW.USER.DEFAULT.PROTOCOL$ = ""
   NEW.USER.GRAPHICS$         = ""
   NEW.USER.LINE.FEEDS        = 0
   NEW.USER.NULLS             = 0
   NEW.USER.BELL              = 0
   NEW.USER.CASE              = 0
   NEW.USER.MARGINS           = 0
   PROMPT.HASH$               = "Name"
   PROMPT.INDIV$              = ""
   REDIRECT.IO.METHOD         = TRUE
   REMEMBER.NEW.USERS         = TRUE
   REQUIRED.QUESTIONNAIRE$    = "NONE"
   RESTRICT.BY.DATE           = FALSE
   RESTRICT.VALID.CMDS        = FALSE
   SECURITY.NEEDED.TO.CHANGE.MSGS = SYSOP.SECURITY.LEVEL
   SHOOT.YOURSELF             = FALSE
   SHOW.SECTION               = TRUE
   SL.CATEGORIZE.UPLOADS      = SYSOP.SECURITY.LEVEL
   START.HASH                 = 1
   START.INDIV                = 0
   SURVIVE.NOUSER.ROOM        = FALSE
   SYSOP.COMMANDS$            = "1234567"
   TIME.TO.DROP.TO.DOS        = 0
   TURN.PRINTER.OFF           = FALSE
   FMS.DIRECTORY$             = ""
   UPCAT.HELP$                = "UPCAT"                              ' KG013101
   UTIL.COMMANDS$             = "BCEFGLMPRSTU"
   WRAP.CALLERS.FILE$         = ""
   FOR I = 1 TO NUM.GLOBAL
     GLOBAL.FUNCTION(I) = MINIMUM.LOGON.SECURITY
   NEXT

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1A ║
' ╚══════════════════════════════════╝
'
2100  RTS$                       = "NO"

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1B ║
' ╚══════════════════════════════════╝
'

2200  LIBRARY.ARCHIVE.PATH$        = D$
   LIBRARY.ARCHIVE.PROGRAM$     = "ARCA "
   LIBRARY.COMMANDS$            = "ACDGLSV"
   LIBRARY.DIRECTORY.PATH$      = D$
   LIBRARY.DIRECTORY.EXTENTION$ = "CDR"
   LIBRARY.DRIVE$               = ""
   LIBRARY.MAX.DISK             = 705
   LIBRARY.MAX.DIRECTORY        = 7
   LIBRARY.MAX.SUBDIR           = 100
   LIBRARY.SUBDIR.PREFIX$       = "DISK"
   FOR I=1 TO 7
      LIBRARY.FUNCTION(I) = SYSOP.SECURITY.LEVEL
   NEXT
   LIBRARY.WORK.DISK.PATH$      = D$

   MAIN.COMMANDS$               = MAIN.COMMANDS$ + "@"
   MENU$(6)                   = D$ + "MENU6"
   RECYCLE.WAIT               = 0

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 15.1C ║
' ╚══════════════════════════════════╝
'

2300  ALLOW.CALLER.TURBO         = SYSOP.SECURITY.LEVEL
   ALTDIR.EXTENSION$          = ""
   DEFAULT.ECHOER$            = "R"
   DEFAULT.LINE.ACK$          = ""
   DIRECTORY.PREFIX$          = "DIR"
   DOSANSI                    = USE.COLOR
   ENFORCE.UPLOAD.DOWNLOAD.RATIOS = FALSE
   EPILOG$                    = D$ + "EPILOG.DEF"
   IF LEN(FILE.COMMANDS$) < 8 THEN
      FILE.COMMANDS$ = LEFT$(FILE.COMMANDS$,4) + "P" + _
                       RIGHT$(FILE.COMMANDS$,3)
   END IF
   FILES.FUNCTION(5)          = SYSOP.SECRUITY.LEVEL
   FIRST.NAME.PROMPT$         = "FIRST name"
   HOST.ECHO.OFF$             = ""
   HOST.ECHO.ON$              = ""
   KEEP.INIT.BAUD             = FALSE
   KEEP.TIME.CREDITS          = FALSE
   LAST.NAME.PROMPT$          = "LAST name"
   MAIN.PUI$                  = D$ + "MAIN.PUI"
   MAX.PER.DAY                = 0
   MENUS.CAN.PAUSE            = TRUE
   MIN.NEWCALLER.BAUD         = 0
   IF RESTRICT.BAUD <> 0 THEN _
      MIN.NEWCALLER.BAUD      = 1200
   MIN.OLDCALLER.BAUD         = 0
   IF RESTRICT.BAUD =TRUE THEN _
      MIN.OLDCALLER.BAUD      = 1200
   NEW.USER.QUESTIONNAIRE$    = D$ + "RBBS-REG.DEF"
   PERSONAL.BEGIN             = 1
   PERSONAL.DIR$              = "PRIV"
   PERSONAL.DRVPATH$          = D$
   PERSONAL.LEN               = 31
   PERSONAL.CONCAT            = FALSE
   PERSONAL.PROTOCOL$         = "N"
   PRELOG$                    = D$ + "PRELOG"
   PRIVATE.READ.SEC           = DEFAULT.SECURITY.LEVEL
   PUBLIC.READ.SEC            = DEFAULT.SECURITY.LEVEL
   QUES.PATH$                 = ""
   REGISTRATION.PROGRAM$      = "NONE"
   SEC.CHANGE.MSG             = SYSOP.SECURITY.LEVEL
   SECURITY.EXEMPT.FROM.EPILOG= DEFAULT.SECURITY.LEVEL + 1
   SIZE.OF.STACK              = 1024
   SWITCH.BACK                = FALSE
   USE.BASIC.WRITES           = FALSE
   USE.DEVICE.DRIVER$         = ""
   USE.EXTERNAL.YMODEM        = FALSE
   USER.FIRMWARE.CLEAR.CMND$  = "AT&F"
   USER.FIRMWARE.WRITE.CMND$  = "&W"
   USER.INITIALIZE.COMMAND$   = "AT&C1&D3B1E0V1M0S0=0&T5"
   USER.LOCATION$             = "CITY and STATE"
   IF LEN(UTIL.COMMANDS$) < 12 THEN _
   UTIL.COMMANDS$ = LEFT$(UTIL.COMMANDS$,2) + "E" + _
                    RIGHT$(UTIL.COMMANDS$,9)
   UTILITY.FUNCTION(3)        = UTILITY.FUNCTION(4)
   XON.XOFF                   = FALSE

   MAIN.COMMANDS.DEFAULTS$    = "ABCDEFIJKOPRSTUVW@"
   FILE.COMMANDS.DEFAULTS$    = "DGLNPSUV"
   UTIL.COMMANDS.DEFAULTS$    = "BCEFGLMPRSTU"
   LIBRARY.COMMANDS.DEFAULTS$   = "ACDGLSV"
   GLOBAL.COMMANDS.DEFAULTS$  = "H?QX"
   SYSOP.COMMANDS.DEFAULTS$   = "1234567"

   ORIG.COMMANDS$ = MAIN.COMMANDS.DEFAULTS$ + _
                    FILE.COMMANDS.DEFAULTS$ + _
                    UTIL.COMMANDS.DEFAULTS$ + _
                    LIBRARY.COMMANDS.DEFAULTS$ + _
                    GLOBAL.COMMANDS.DEFAULTS$ + _
                    SYSOP.COMMANDS.DEFAULTS$

'
' ╔══════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 16.1A ║
' ╚══════════════════════════════════╝
'
2400 ADD.DIR.SECURITY           = SYSOP.SECURITY.LEVEL
   ASK.EXTENDED.DESC          = SYSOP.SECURITY.LEVEL
   AUTOPAGE.DEF$              = D$ + "AUTOPAGE.DEF"
   CALLER.BKGRD               = 0
   CONFMAIL.LIST$             = D$ + "CONFMAIL.DEF"
   EMPHASIZE.OFF.DEF$         = "[27]" + "[0;40;33m"
   EMPHASIZE.ON.DEF$          = "[27]" + "[1;41;37m"
   ESCAPE.INSECURE            = FALSE
   FG.1.DEF$                  = "[1;40;32m"
   FG.2.DEF$                  = "[1;40;33m"
   FG.3.DEF$                  = "[1;40;35m"
   FG.4.DEF$                  = "[1;40;36m"
   FOSSIL                     = 0
   LOGON.MAIL.LEVEL$          = "A"
   LSB                        = 1016
   MACRO.DRVPATH$             = D$
   MACRO.EXTENSION$           = "MCR"
   MAX.CARRIER.WAIT           = 30
   MAX.EXTENDED.LINES         = 2
   PROTO.DEF$                 = D$ + "PROTO.DEF"
   SECVIO.HLP$                = D$ + "SECVIO." + HELP.EXTENSION$
   SMART.TEXT                 = 123
   TIME.LOCK                  = 0
   USE.DIR.ORDER              = TRUE
   WRITE.BUF.DEF              = 1024
'
' ╔════════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 17.1A-D ║
' ╚════════════════════════════════════╝
'
2500 AUTO.UPGRADE.SEC         = 0
   EXTENSION.LIST$            = "ZIP"
   DOORS.DEF$                 = D$ + "DOORS.DEF"
   MAX.REG.SEC                = 0
   MAX.WORK.VAR               = 30
   MESSAGES.CAN.GROW          = 0
   SCREEN.OUT.MSG$            = "SEEN-BY:"
   SEC.KILL.ANY               = SYSOP.SECURITY.LEVEL
   VOICE.TYPE                 = 0
'
' ╔════════════════════════════════════╗
' ║ INITALIZE VARIABLES NOT IN 17.2A-B ║
' ╚════════════════════════════════════╝
'
2600 VERSION.NUMBER$          = "17.3"
     FAST.FILE.LIST$          = D$ + "FIDX.DEF"
     FAST.FILE.LOCATOR$       = D$ + "LIDX.DEF"
'
' ╔═══════════════════════════════════════════════════════════════════════════╗
' ║ WRITE OUT THE "RBBS-PC.DEF" FILE WITH THE SYSOP'S SPECIFIED CONFIGURATION ║
' ╚═══════════════════════════════════════════════════════════════════════════╝
'
3000  OPEN "O",#1,OutputFileName$
   LOCATE 12,9
   PRINT "WRITING DATA...";

4000  WRITE #1,VERSION.NUMBER$, _
            DOWNLOAD.DRIVES$, _
            SYSOP.PASSWORD.1$, _
            SYSOP.PASSWORD.2$, _
            SYSOP.FIRST.NAME$, _
            SYSOP.LAST.NAME$, _
            REQUIRED.RINGS, _
            START.OFFICE.HOURS, _
            END.OFFICE.HOURS, _
            MINUTES.PER.SESSION!, _
            MAX.ALLOWED.MSGS.FRM.DEF, _
            ACT.MNTHS.B4.DELETING, _
            UPLOAD.DIRECTORY$,_
            EXPERT.USER, _
            ACTIVE.BULLETINS, _
            PROMPT.BELL, _
            PCJR, _
            MENUS.CAN.PAUSE, _
            MENU$(1), _
            MENU$(2), _
            MENU$(3), _
            MENU$(4), _
            MENU$(5), _
            MENU$(6), _
            CONFERENCE.MENU$, _
            CONFERENCE.VIEWER.SEC.LVL, _
            WELCOME.INTERRUPTABLE, _
            REMIND.FILE.TRANSFERS, _
            PAGE.LENGTH, _
            MAX.MESSAGE.LINES, _
            DOORS.AVAILABLE, _
            MO$
   IF INSTR(BULLETIN.MENU$,":") < 1 THEN _
      BULLETIN.MENU$ = DRIVE.FOR.BULLETINS$ + _
                       BULLETIN.MENU$
   IF INSTR(BULLETIN.PREFIX$,":") < 1 THEN _
      BULLETIN.PREFIX$ = DRIVE.FOR.BULLETINS$ + _
                         BULLETIN.PREFIX$
   IF GLOBAL.FUNCTION(3) > MINIMUM.LOGON.SECURITY THEN _
      GLOBAL.FUNCTION(3) = MINIMUM.LOGON.SECURITY
   IF FILES.FUNCTION(2) > MINIMUM.LOGON.SECURITY THEN _
      FILES.FUNCTION(2) = MINIMUM.LOGON.SECURITY
   IF LIBRARY.FUNCTION(4) > MINIMUM.LOGON.SECURITY THEN _
      LIBRARY.FUNCTION(4) = MINIMUM.LOGON.SECURITY
   IF LIBRARY.DRIVE$ = "" THEN _
      MAIN.FUNCTION(18) = 32767
   WRITE #1,MAIN.MESSAGE.FILE$, _
            MAIN.MESSAGE.BACKUP$, _
            CALLERS.FILE$, _
            COMMENTS.FILE$, _
            MAIN.USER.FILE$, _
            WELCOME.FILE$, _
            NEWUSER.FILE$, _
            DIRECTORY.EXTENTION$, _
            COM.PORT$, _
            BULLETINS.OPTIONAL, _
            USER.INIT.COMMAND$, _
            RTS$, _
            DOS.VERSION, _
            FG, _
            BG, _
            BORDER, _
            RBBS.BAT$, _
            RCTTY.BAT$
4200  WRITE #1,OMIT.MAIN.DIRECTORY$, _
            FIRST.NAME.PROMPT$, _
            HELP$(3), _
            HELP$(4), _
            HELP$(7), _
            HELP$(9), _
            BULLETIN.MENU$, _
            BULLETIN.PREFIX$, _
            DRIVE.FOR.BULLETINS$, _
            MESSAGE.REMINDER, _
            REQUIRE.NON.ASCII, _
            ASK.EXTENDED.DESC, _
            MAXIMUM.NUMBER.OF.NODES, _
            NETWORK.TYPE, _
            RECYCLE.TO.DOS, _
            MAX.USR.FILE.SIZE.FRM.DEF, _
            MAX.MSG.FILE.SIZE.FRM.DEF!, _
            TRASHCAN.FILE$
4300  WRITE #1,MINIMUM.LOGON.SECURITY, _
            DEFAULT.SECURITY.LEVEL, _
            SYSOP.SECURITY.LEVEL, _
            FILESEC.FILE$, _
            SYSOP.MENU.SECURITY.LEVEL, _
            CONFMAIL.LIST$, _
            MAXIMUM.VIOLATIONS, _
            SYSOP.FUNCTION(1), _
            SYSOP.FUNCTION(2), _
            SYSOP.FUNCTION(3), _
            SYSOP.FUNCTION(4), _
            SYSOP.FUNCTION(5), _
            SYSOP.FUNCTION(6), _
            SYSOP.FUNCTION(7), _
            PASSWORD.FILE$, _
            MAXIMUM.PASSWORD.CHANGES, _
            MINIMUM.SECURITY.FOR.TEMP.PASSWORD, _
            OVERWRITE.SECURITY.LEVEL, _
            DOORS.TERMINAL.TYPE, _
            MAX.PER.DAY
4400  WRITE #1,MAIN.FUNCTION(1), _
            MAIN.FUNCTION(2), _
            MAIN.FUNCTION(3), _
            MAIN.FUNCTION(4), _
            MAIN.FUNCTION(5), _
            MAIN.FUNCTION(6), _
            MAIN.FUNCTION(7), _
            MAIN.FUNCTION(8), _
            MAIN.FUNCTION(9), _
            MAIN.FUNCTION(10), _
            MAIN.FUNCTION(11), _
            MAIN.FUNCTION(12), _
            MAIN.FUNCTION(13), _
            MAIN.FUNCTION(14), _
            MAIN.FUNCTION(15), _
            MAIN.FUNCTION(16), _
            MAIN.FUNCTION(17), _
            MAIN.FUNCTION(18), _
            MIN.NEWCALLER.BAUD, _
            WAIT.BEFORE.DISCONNECT
4500  WRITE #1,FILES.FUNCTION(1), _
            FILES.FUNCTION(2), _
            FILES.FUNCTION(3), _
            FILES.FUNCTION(4), _
            FILES.FUNCTION(5), _
            FILES.FUNCTION(6), _
            FILES.FUNCTION(7), _
            FILES.FUNCTION(8), _
            UTILITY.FUNCTION(1), _
            UTILITY.FUNCTION(2), _
            UTILITY.FUNCTION(3), _
            UTILITY.FUNCTION(4), _
            UTILITY.FUNCTION(5), _
            UTILITY.FUNCTION(6), _
            UTILITY.FUNCTION(7), _
            UTILITY.FUNCTION(8), _
            UTILITY.FUNCTION(9), _
            UTILITY.FUNCTION(10), _
            UTILITY.FUNCTION(11), _
            UTILITY.FUNCTION(12), _
            GLOBAL.FUNCTION(1), _
            GLOBAL.FUNCTION(2), _
            GLOBAL.FUNCTION(3), _
            GLOBAL.FUNCTION(4), _
            UPLOAD.TIME.FACTOR!, _
            COMPUTER.TYPE, _
            REMIND.PROFILE, _
            RBBS.NAME$, _
            COMMANDS.BETWEEN.RINGS, _
            MNP.SUPPORT, _
            PAGING.PRINTER.SUPPORT$, _
            MODEM.INIT.BAUD$
4600  WRITE #1,TURN.PRINTER.OFF,_
            DIRECTORY.PATH$,_
            MIN.SEC.TO.VIEW, _
            LIMIT.SEARCH.TO.FMS, _
            DEFAULT.CATEGORY.CODE$, _
            DIR.CATEGORY.FILE$, _
            NEW.FILES.CHECK, _
            MAX.DESC.LEN, _
            SHOW.SECTION, _
            COMMANDS.IN.PROMPT, _
            NEWUSER.SETS.DEFAULTS, _
            HELP.PATH$, _
            HELP.EXTENSION$, _
            MAIN.COMMANDS$, _
            FILE.COMMANDS$, _
            UTIL.COMMANDS$, _
            GLOBAL.COMMANDS$, _
            SYSOP.COMMANDS$
4700  WRITE #1,RECYCLE.WAIT, _
            LIBRARY.FUNCTION(1), _
            LIBRARY.FUNCTION(2), _
            LIBRARY.FUNCTION(3), _
            LIBRARY.FUNCTION(4), _
            LIBRARY.FUNCTION(5), _
            LIBRARY.FUNCTION(6), _
            LIBRARY.FUNCTION(7), _
            LIBRARY.DRIVE$, _
            LIBRARY.DIRECTORY.PATH$, _
            LIBRARY.DIRECTORY.EXTENTION$, _
            LIBRARY.WORK.DISK.PATH$, _
            LIBRARY.MAX.DISK, _
            LIBRARY.MAX.DIRECTORY, _
            LIBRARY.MAX.SUBDIR, _
            LIBRARY.SUBDIR.PREFIX$, _
            LIBRARY.ARCHIVE.PATH$, _
            LIBRARY.ARCHIVE.PROGRAM$, _
            LIBRARY.COMMANDS$
4800  WRITE #1,UPLOAD.PATH$, _
            FMS.DIRECTORY$, _
            ANS.MENU$, _
            REQUIRED.QUESTIONNAIRE$, _
            REMEMBER.NEW.USERS, _
            SURVIVE.NOUSER.ROOM, _
            PROMPT.HASH$, _
            START.HASH, _
            LEN.HASH, _
            PROMPT.INDIV$, _
            START.INDIV, _
            LEN.INDIV
4850  WRITE #1,BYPASS.MSGS, _
            MUSIC, _
            RESTRICT.BY.DATE, _
            DAYS.TO.WARN, _
            DAYS.IN.SUBSCRIPTION.PERIOD, _
            VOICE.TYPE, _
            RESTRICT.VALID.CMDS, _
            NEW.USER.DEFAULT.MODE, _
            NEW.USER.LINE.FEEDS, _
            NEW.USER.NULLS, _
            FAST.FILE.LIST$, _
            FAST.FILE.LOCATOR$, _
            MESSAGES.CAN.GROW, _
            WRAP.CALLERS.FILE$, _
            REDIRECT.IO.METHOD, _
            AUTO.UPGRADE.SEC, _
            HALT.ON.ERROR, _
            NEW.PUBLIC.MSGS.SECURITY, _
            NEW.PRIVATE.MSGS.SECURITY, _
            SECURITY.NEEDED.TO.CHANGE.MSGS, _
            SL.CATEGORIZE.UPLOADS, _
            BAUDOT, _
            TIME.TO.DROP.TO.DOS, _
            EXPIRED.SECURITY, _
            DTR.DROP.DELAY, _
            ASK.IDENTITY, _
            MAX.REG.SEC, _
            BUFFER.SIZE, _
            MLCOM, _
            SHOOT.YOURSELF, _
            EXTENSION.LIST$, _
            NEW.USER.DEFAULT.PROTOCOL$, _
            NEW.USER.GRAPHICS$, _
            NET.MAIL$, _
            MASTER.DIRECTORY.NAME$, _
            PROTO.DEF$, _
            UPCAT.HELP$, _
            ALWAYS.STREW.TO$, _
            LAST.NAME.PROMPT$
      MSB = LSB + 1
      LINE.CONTROL.REGISTER = LSB + 3
      MODEM.CONTROL.REGISTER = LSB + 4
      LINE.STATUS.REGISTER = LSB + 5
      MODEM.STATUS.REGISTER = LSB + 6
4900  WRITE #1,PERSONAL.DRVPATH$, _
            PERSONAL.DIR$, _
            PERSONAL.BEGIN, _
            PERSONAL.LEN, _
            PERSONAL.PROTOCOL$, _
            PERSONAL.CONCAT, _
            PRIVATE.READ.SEC, _
            PUBLIC.READ.SEC, _
            SEC.CHANGE.MSG, _
            KEEP.INIT.BAUD, _
            MAIN.PUI$, _
            DEFAULT.ECHOER$, _
            HOST.ECHO.ON$, _
            HOST.ECHO.OFF$, _
            SWITCH.BACK, _
            DEFAULT.LINE.ACK$, _
            ALTDIR.EXTENSION$, _
            DIRECTORY.PREFIX$
4950  WRITE #1,SEC.LVL.EXEMPT.FRM.PURGING, _
            MODEM.INIT.WAIT.TIME, _
            MODEM.COMMAND.DELAY.TIME, _
            TURBO.RBBS, _
            DNLD.SUB, _
            WILL.SUBDIRS.B.USED, _
            UPLOAD.TO.SUBDIR, _
            DOWNLOAD.TO.SUBDIR, _
            UPLOAD.SUBDIR$, _
            MIN.OLDCALLER.BAUD, _
            MAX.WORK.VAR, _
            DISKFULL.GO.OFFLINE, _
            EXTENDED.LOGGING, _
            USER.RESET.COMMAND$, _
            USER.COUNT.RINGS.COMMAND$, _
            USER.ANSWER.COMMAND$, _
            USER.GO.OFFHOOK.COMMAND$, _
            DISK.FOR.DOS$, _
            DUMB.MODEM, _
            COMMENTS.AS.MESSAGES, _
            LSB, _
            MSB, _
            LINE.CONTROL.REGISTER, _
            MODEM.CONTROL.REGISTER, _
            LINE.STATUS.REGISTER, _
            MODEM.STATUS.REGISTER
4980  WRITE #1,KEEP.TIME.CREDITS, _
            XON.XOFF, _
            ALLOW.CALLER.TURBO, _
            USE.DEVICE.DRIVER$, _
            PRELOG$, _
            NEW.USER.QUESTIONNAIRE$, _
            EPILOG$, _
            REGISTRATION.PROGRAM$, _
            QUES.PATH$, _
            USER.LOCATION$, _
            USER.INITIALIZE.COMMAND$, _
            USER.FIRMWARE.CLEAR.CMND$, _
            USER.FIRMWARE.WRITE.CMND$, _
            ENFORCE.UPLOAD.DOWNLOAD.RATIOS, _
            SIZE.OF.STACK, _
            SECURITY.EXEMPT.FROM.EPILOG, _
            USE.BASIC.WRITES, _
            DOSANSI, _
            ESCAPE.INSECURE, _
            USE.DIR.ORDER, _
            ADD.DIR.SECURITY, _
            MAX.EXTENDED.LINES, _
            ORIG.COMMANDS$
      IF MACRO.EXTENSION$ <> "" AND _
         INSTR(MACRO.EXTENSION$,".") <> 1 THEN _
         MACRO.EXTENSION$ = "." + MACRO.EXTENSION$
      WRITE #1,LOGON.MAIL.LEVEL$, _
            MACRO.DRVPATH$, _
            MACRO.EXTENSION$, _
            EMPHASIZE.ON.DEF$, _
            EMPHASIZE.OFF.DEF$, _
            FG.1.DEF$, _
            FG.2.DEF$, _
            FG.3.DEF$, _
            FG.4.DEF$, _
            SECVIO.HLP$, _
            FOSSIL, _
            MAX.CARRIER.WAIT, _
            CALLER.BKGRD, _
            SMART.TEXT, _
            TIME.LOCK, _
            WRITE.BUF.DEF, _
            SEC.KILL.ANY, _
            DOORS.DEF$, _
            SCREEN.OUT.MSG$, _
            AUTOPAGE.DEF$
   IF DNLD.SUB <1 OR DNLD.SUB > 99 THEN _
      GOTO CLOSE.OUT
   FOR I = 1 TO DNLD.SUB
      WRITE #1,DNLD$(I)
   NEXT

CLOSE.OUT:
5000  CLOSE #1
   LOCATE 13,9
   PRINT "FINISHED."
   LOCATE 22,1
   END



'
' ╔══════════════════════════════════╗
' ║ ERROR EXIT - USER ABORTED PROGRAM║
' ╚══════════════════════════════════╝
'
USER.ABORT:
      LOCATE 23,1
      PRINT "User aborted program - EXECUTION CANCELLED"
      SYSTEM
'
' ╔══════════════════════════════════════════════╗
' ║ ERROR HANDLER FOR ANY OPEN/READ/WRITE ERRORS ║
' ╚══════════════════════════════════════════════╝
'
ErrorHandler:
   IF ERL = 1000 THEN
      CALL Line17("ERROR: COULD NOT OPEN INPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   IF ERL =  1010 THEN
      CALL Line17("ERROR READING FILE (Probably not version "+ MID$(Ver$,(Version-1)*6+1,5)+")")
      SYSTEM
   END IF
   IF ERL = 3000 THEN
      CALL Line17("ERROR: COULD NOT OPEN OUTPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   IF ERL >= 4000 AND ERL <= 5000 THEN
      CALL Line17("ERROR: COULD NOT WRITE OUTPUT FILE - EXECUTION CANCELLED")
      SYSTEM
   END IF
   CALL Line17("ERROR "+STR$(ERR)+" OCCURRED IN LINE "+STR$(ERL)+" - EXECUTION CANCELLED")
   SYSTEM

   DATA "           RBBS-PC VERSION 17.3 CONFIGURATION CONVERSION"
   DATA "Conceived and written by:"
   DATA "   Doug Azzarito"
   DATA "   TECHNOLOGY CONSULTANTS of the Palm Beaches, Inc."
   DATA "   VOICE: (407) 627-9767"
   DATA "    DATA: (407) 627-6969 627-6862"
   DATA ""
   DATA "A limited license is granted to all users of this program"
   DATA "to use and distribute this program, as long as:"
   DATA "   1) NO FEE is charged for copying or distributing this program."
   DATA "   2) This program is NOT distributed in modified form."
   DATA "   3) The code contained herein is NOT used for any other purpose"
   DATA "      without obtaining permission from the copyright owner of"
   DATA "      RBBS-PC"
'
' ╔═════════════════╗
' ║ STRTOK FUNCTION ║
' ╚═════════════════╝
'
FUNCTION StrTok$(Srce$,Delim$)
STATIC Start%, SaveStr$

   ' If first call, make a copy of the string.
   IF Srce$<>"" THEN
      Start%=1 : SaveStr$=Srce$
   END IF

   BegPos%=Start% : Ln%=LEN(SaveStr$)
   ' Look for start of a token (character that isn't delimiter).
   WHILE BegPos%<=Ln% AND INSTR(Delim$,MID$(SaveStr$,BegPos%,1))<>0
      BegPos%=BegPos%+1
   WEND
   ' Test for token start found.
   IF BegPos% > Ln% THEN
      StrTok$="" : EXIT FUNCTION
   END IF
   ' Find the end of the token.
   EndPos%=BegPos%
   WHILE EndPos% <= Ln% AND INSTR(Delim$,MID$(SaveStr$,EndPos%,1))=0
      EndPos%=EndPos%+1
   WEND
   StrTok$=MID$(SaveStr$,BegPos%,EndPos%-BegPos%)
   ' Set starting point for search for next token.
   Start%=EndPos%

END FUNCTION
'
' ╔═════════════════╗
' ║ BOX SUBROUTINE  ║
' ╚═════════════════╝
'
SUB box (ybox, xbox, boxrows, boxcols, style)
' ybox is the screen row of the upper left corner of the box
' xbox is the screen column of the upper left corner of the box
' boxrows is the number of rows (must be > 1) for the box
' boxcols is the number of cols (must be > 1) for the box
' style = 1  single line              2 double line
'         3  double top,single side   4  double side, single top
'
   IF style = 0 THEN EXIT SUB
   SELECT CASE style
      CASE 1
         tl$ = "┌": tr$ = "┐": bl$ = "└": br$ = "┘": hl$ = "─": vl$ = "│"
      CASE 2
         tl$ = "╔": tr$ = "╗": bl$ = "╚": br$ = "╝": hl$ = "═": vl$ = "║"
      CASE 3
         tl$ = "╒": tr$ = "╕": bl$ = "╘": br$ = "╛": hl$ = "═": vl$ = "│"
      CASE 4
         tl$ = "╓": tr$ = "╖": bl$ = "╙": br$ = "╜": hl$ = "─": vl$ = "║"
      CASE ELSE
         CLS
         PRINT "SYNTAX ERROR IN box FUNCTION: Invalid style"
         SYSTEM
      END SELECT
   LOCATE ybox, xbox, 0
   PRINT tl$ + STRING$(boxcols - 2, hl$) + tr$;
   FOR i! = ybox + 1 TO ybox + boxrows - 2
      LOCATE i!, xbox
      PRINT vl$;
      LOCATE , xbox + boxcols - 1
      PRINT vl$;
      NEXT i!
   LOCATE ybox + boxrows - 1, xbox, 0
   PRINT bl$ + STRING$(boxcols - 2, hl$) + br$;
END SUB
'
' ╔══════════════════════╗
' ║ Line 17 Help Display ║
' ╚══════════════════════╝
'
SUB Line17 (HelpText$)
   LOCATE 17,6
   PRINT SPACE$(67);
   IF LEN(HelpText$) > 67 THEN HelpText$ = LEFT$(HelpText$,67)
   LOCATE 17,40-INT((LEN(HelpText$)+1)/2)
   PRINT HelpText$;
   END SUB
```
{% endraw %}

## RECONFIG.DOC

{% raw %}
```
 RECONFIG Version 17.3 DOCUMENTATION

  RECONFIG is a conversion utility for RBBS-PC systems.  This version is ONLY
  for  SYSOP's  of  RBBS-PC  version  14  through  17.2B who are upgrading to
  RBBS-PC version 17.3.  It should NOT be used to convert  from/to  ANY other
  versions!

  What it does:

  RECONFIG reads the RBBS-PC configuration file (RBBSnPC.DEF) and extracts as
  much  information  as  possible  in order to create a working .DEF file for
  RBBS-PC version 17.3.  Your existing version  14  through  16 DEF file WILL
  NOT WORK with version 17.3.  Instead of re-typing all your custom settings,
  run  RECONFIG  before  setting  up  your  new  17.3 system.  17.1 and  17.2
  versions will work but RECONFIG will fill in sensible values  for  the  new
  parameters in 17.3.

 How to use it:

  RECONFIG.EXE  will  prompt  you  for the necessary input, or it will accept
  input on the command line in the form:

  RECONFIG [drive:\path\]input-file version [drive:\path\]output-file

   input-file is the name of your existing RBBS-PC configuration
   version is the version of your file (14.1D, 15.1A/B/C, 16.1A,
       17.1A/B/C/D or 17.2A/B only)
   output-file is the name of your desired RBBS-PC version 17.3 file

  For example,

            RECONFIG RBBS-PC.DEF 17.1D 173-NU.DEF

  will read configuration file RBBS-PC.DEF, treat it as a 17.1D version,
  and convert it to 17.3 format, writing out file 173-NU.DEF.

  If  you  do  not  specify  an  input  file and version, and an output file,
  RECONFIG will prompt you for the proper input.   You COULD specify the same
  name for both input and output (so RECONFIG will write the new .DEF file on
  top of the old one), but this is NOT recommended!  You will be left WITHOUT
  your original .DEF file!

  If  the command line is specified correctly, you will be shown your options
  one more time to make sure.  Since RECONFIG will write the output file even
  if a  file  already exists with the same name, be careful in your choice of
  output file names!

  Once  you  run  RECONFIG,  You  should  inspect  your  new  .DEF  file with
  CONFIG.EXE for 17.3.  There are some new changes to RBBS-PC and CONFIG that
  you  will  want to know about.  Where possible, RECONFIG uses your existing
  settings to choose  values  for settings that are new to version 17.3.  You
  can view these new settings by selecting CONFIG option 190.

 NOTICE:

    This program was conceived and written by:
         Doug Azzarito
      of TECHNOLOGY CONSULTANTS of the Palm Beaches, Inc.
         P.O. Box 31024
         Palm Beach Gardens, FL.  33418
         VOICE: (407) 627-9767   DATA: (407) 627-6969 or 627-6862

  The  purpose  of  this  program is to ease the migration to RBBS-PC version
  17.3.  Since most of the code  was  taken  directly from RBBS-PC and CONFIG
  code,  PLEASE respect the RBBS-PC copyright!  You  may  use  this  program,
  distribute it  freely  in unmodified form, but do NOT accept any payment or
  other consideration for copying  or  distributing this program.  Do NOT use
  portions of this code in another program without  first  getting permission
  from the copyright owner of RBBS-PC!

  NOTE:   due  to  space  limitations,  you  may  not  receive source code to
  RECONFIG.   Source  for  17.3  of  RECONFIG  can be downloaded from  either
  RBBS-PC "home" systems:

  BBS                     Phone                   Sysop
  Your Place              202-978-6360            Ken Goosens
  Technology Consultants  407-627-6969/6862       Doug Azzarito

  Feel  free  to  call  either  system and download source to RECONFIG.  This
  version of RECONFIG was compiled with  Microsoft QuickBasic 4.5, but will
  also compile under BASCOM 7.0.

```
{% endraw %}

## RVAR0227.BAS

{% raw %}
```bas
' $SUBTITLE: 'Arrays passed between various components of RBBS-PC'
' $PAGE
   DEFINT A-Z
'
' The following static arrays are passed between the various subroutines
' within RBBS-PC.
'
    DIM ZHelp$(9)                      ' Help file names
    DIM ZWasLG$(12)                    ' Holds message strings
    DIM ZMenu$(7)                      ' Menu file names
    DIM ZSubDir$(99)                   ' Download Sub-Dirs
' $SUBTITLE: 'Variables passed between various components of RBBS-PC'
' $PAGE
'
' The following variables are passed between the various and
' seperately compiled subroutines used by RBBS-PC.
'
   COMMON SHARED _
          ZAbort, _
          ZAckChar$, _
          ZAcknowledge$, _
          ZActiveBulletins, _
          ZActiveFMSDir$, _
          ZActiveMenu$, _
          ZActiveMessage$, _
          ZActiveMessageFile$, _
          ZActiveUserFile$, _
          ZActiveUserName$, _
          ZAddDirSecurity, _
          ZAdjustedSecurity, _
          ZAdvanceProtoWrite, _
          ZAllOpts$, _
          ZAllowCallerTurbo, _
          ZAllwaysStrewTo$, _
          ZAltdirExtension$, _
          ZAnsIndex, _
          ZAnsMenu$, _
          ZArcWork$, _
          ZAskExtendedDesc, _
          ZAskID, _
          ZAttemptsAllowed, _
          ZAutoDownDesired, _
          ZAutoDownInProgress, _
          ZAutoDownVerified, _
          ZAutoDownYes, _
          ZAutoLogoff!, _
          ZAutoLogoffReq, _
          ZAutoPageDef$, _
          ZAutoUpgradeSec, _
          ZBackArrow$, _
          ZBackSpace$, _
          ZBatchProto, _
          ZBatchTransfer, _
          ZBaudot, _
          ZBaudParity$, _
          ZBaudRateDivisor, _
          ZBaudRates$, _
          ZBaudTest!, _
          ZBegFile, _
          ZBegLibrary, _
          ZBegMain, _
          ZBegUtil, _
          ZBellRinger$, _
          ZBG, _
          ZBlk, _
          ZBlocksInFile#, _
          ZBlockSize, _
          ZBoldText$, _
          ZBorder, _
          ZBPS, _
          ZBufferSize, _
          ZBulletinMenu$, _
          ZBulletinPrefix$, _
          ZBulletinSave$, _
          ZBulletinsOptional, _
          ZBypassMsgs, _
          ZBypassTimeCheck, _
          ZByteMethod, _
          ZBytesInFile#, _
          ZBytesToday!, _
          ZCallersFile$, _
          ZCallersFileIndex!, _
          ZCallersFilePrefix$, _
          ZCallersRecord$, _
          ZCancel$, _
          ZCanDnldFromUp, _
          ZCarriageReturn$, _
          ZCategoryCode$(1), _
          ZCategoryDesc$(1), _
          ZCategoryName$(1), _
          ZChainedDir$, _
          ZChatAvail, _
          ZCheckBulletLogon, _
          ZCheckSum, _
          ZCityState$, _
          ZCmdPrompt$, _
          ZCmdsBetweenRings, _
          ZCmdTransfer$, _
          ZCmndsInPrompt, _
          ZCmntsAsMsgs, _
          ZCmntsFile$, _
          ZColorReset$, _
          ZCommPortStack$, _
          ZComPort$, _
          ZComPort, _
          ZCompressedExt$, _
          ZComProgram, _
          ZComputerType, _
          ZConcatFIles, _
          ZConfigFileName$, _
          ZConfMailList$, _
          ZConfMenu$, _
          ZConfMode, _
          ZConfName$, _
          ZCR, _
          ZCrLf$, _
          ZCurDate$, _
          ZCurDef$, _
          ZCurDirPath$, _
          ZCurPUI$, _
          ZCursorLine, _
          ZCursorRow, _
          ZCustomPUI, _
          ZDateOrderedFMS, _
          ZDaysInRegPeriod, _
          ZDaysToWarn, _
          ZDebug, _
          ZDefaultCatCode$, _
          ZDefaultEchoer$, _
          ZDefaultExtension$, _
          ZDefaultLineACK$, _
          ZDefaultSecLevel, _
          ZDefaultXfer$, _
          ZDelay!, _
          ZDeletedMsg$, _
          ZDeleteInvalid, _
          ZDenyAccess, _
          ZDirCatFile$, _
          ZDirExtension$, _
          ZDirFile$, _
          ZDirPath$, _
          ZDirPrefix$, _
          ZDirPrompt$, _
          ZDiskForDos$, _
          ZDiskFullGoOffline, _
          ZDisplayAsUnit, _
          ZDistantTGet, _
          ZDistriHelp$, _                                            ' nc022101
          ZDistriPath$, _                                            ' nc022101
          ZDLBytes!, _
          ZDlBytes$, _
          ZDLToday!, _
          ZDnldDrives$, _
          ZDnldRecord$, _
          ZDnlds, _
          ZDoorDisplay$, _
          ZDooredTo$, _
          ZDoorsAvail, _
          ZDoorsDef$, _
          ZDoorSkipsPswd, _
          ZDoorsTermType, _
          ZDosANSI, _
          ZDosVersion, _
          ZDotFlag, _
          ZDownFiles, _
          ZDownTemplate$, _
          ZDR1$, _
          ZDR2$, _
          ZDR3$, _
          ZDR4$, _
          ZDTRDropDelay, _
          ZDumbModem, _
          ZDwnIndex, _
          ZEchoer$, _
          ZEightBit, _
          ZElapsedTime$, _
          ZElapsedTime, _
          ZEmphasizeOff$, _
          ZEmphasizeOffDef$, _
          ZEmphasizeOn$, _
          ZEmphasizeOnDef$, _
          ZEndOfficeHours, _
          ZEndTime, _
          ZEndTransmission$, _
          ZEnforceRatios, _
          ZEOL, _
          ZEpilog$, _
          ZErrCode, _
          ZEscape$, _
          ZEscapeInsecure, _
          ZExitToDoors, _
          ZExpectActiveModem, _
          ZExpertUser, _
          ZExpertUserDef, _
          ZExpirationDate$, _
          ZExpiredSec, _
          ZExtendedLogging, _
          ZExtendedOff, _
          ZF10Key, _
          ZF1Key, _
          ZF7Msg$, _
          ZFailureParm, _
          ZFailureString$, _
          ZFakeXRpt, _
          ZFalse, _
          ZFastFileList$, _
          ZFastFileLocator$, _
          ZFastFileSearch, _
          ZFastTabs$, _
          ZFF, _
          ZFG, _
          ZFG1$, _
          ZFG1Def$, _
          ZFG2$, _
          ZFG2Def$, _
          ZFG3$, _
          ZFG3Def$, _
          ZFG4$, _
          ZFG4Def$, _
          ZFileCmd$, _
          ZFileLocation$, _                                          ' KG022301
          ZFileName$, _
          ZFileNameHold$, _
          ZFileOpts$, _
          ZFileSecFile$, _
          ZFileSysParm, _
          ZFirstName$, _
          ZFirstNameEnd, _
          ZFirstNamePrompt$, _
          ZFLen, _
          ZFlowControl, _
          ZFMSDirectory$, _
          ZForceKeyboard, _
          ZFossil, _
          ZFreeSpace$, _
          ZFreeSpaceUpldFile$, _
          ZFunctionKey
COMMON SHARED _
          ZGetExtDesc, _
          ZGlobalBytesToday!, _
          ZGlobalCmnds$, _
          ZGlobalDLBytes!, _
          ZGlobalDLToday!, _
          ZGlobalDnlds, _
          ZGlobalSysop, _
          ZGlobalULBytes!, _
          ZGlobalUplds, _
          ZGSRAra$(1), _
          ZHaltOnError, _
          ZHasDoored, _
          ZHasPrivDoor, _
          ZHelp$(), _
          ZHelpExtension$, _
          ZHelpPath$, _
          ZHidden, _
          ZHiLiteOff, _
          ZHomeConf$, _
          ZHostEchoOff$, _
          ZHostEchoOn$, _
          ZHourMinToDropToDos, _
          ZInConfMenu, _
          ZInitialCredit#, _
          ZInternalEquiv$, _
          ZInternalProt$, _
          ZInterrupOn$, _
          ZInvalidFileOpts$, _
          ZInvalidLibraryOpts$, _
          ZInvalidMainOpts$, _
          ZInvalidOpts$, _
          ZInvalidSysOpts$, _
          ZInvalidUtilOpts$, _
          ZJumpLast$, _
          ZJumpSearching, _
          ZJumpSupported, _
          ZJumpTo$, _
          ZKeepInitBaud, _
          ZKeepTimeCredits, _
          ZKermitExeFile$, _
          ZKermitSupport, _
          ZKeyboardStack$, _
          ZKeyPressed$, _
          ZKeyPressed, _
          ZKillMessage, _
          ZLastCommand$, _
          ZLastDateTimeOn$, _
          ZLastDateTimeOnSave$, _
          ZLastIndex, _
          ZLastMsgRead, _
          ZLastName$, _
          ZLastNameEnd, _
          ZLastNamePrompt$, _
          ZLastSmartColor$, _
          ZLenHash, _
          ZLenIndiv, _
          ZLibArcPath$, _
          ZLibArcProgram$, _
          ZLibCmds$, _
          ZLibDir$, _
          ZLibDirExtension$, _
          ZLibDirPath$, _
          ZLibDiskChar$, _
          ZLibDrive$, _
          ZLibMaxDir, _
          ZLibMaxDisk, _
          ZLibMaxSubdir, _
          ZLibNodeID$, _
          ZLibOpts$, _
          ZLibSubdirPrefix$, _
          ZLibType, _
          ZLibWorkDiskPath$, _
          ZLimitMinsPerSession, _
          ZLimitSearchToFMS, _
          ZLine25$, _
          ZLine25Hold$, _
          ZLineCntlReg, _
          ZLineEditChk$, _
          ZLineFeed$, _
          ZLineFeeds, _
          ZLineMes$, _
          ZLinesInMsg, _
          ZLinesInMsgSave, _
          ZLinesPrinted, _
          ZLineStatusReg, _
          ZListDir, _
          ZListIndex, _
          ZListNewDate$, _
          ZLocalBksp$, _
          ZLocalUser, _
          ZLocalUserMode, _
          ZLockDrive, _
          ZLockFileName$, _
          ZLockStatus$, _
          ZLogonActive, _
          ZLogonErrorIndex, _
          ZLogonMailLevel$, _
          ZLSB
COMMON SHARED _
          ZMacroActive, _
          ZMacroDrvPath$, _
          ZMacroEcho, _
          ZMacroExtension$, _
          ZMacroMin, _
          ZMacroSave, _
          ZMacroTemplate$, _
          ZMailWaiting, _
          ZMainCmds$, _
          ZMainDirExtension$, _
          ZMainFMSDir$, _
          ZMainMsgBackup$, _
          ZMainMsgFile$, _
          ZMainOpts$, _
          ZMainPUI$, _
          ZMainUserFile$, _
          ZMainUserFileIndex, _
          ZMasterDirName$, _
          ZMaxCarrierWait, _
          ZMaxDescLen, _
          ZMaxExtendedLines, _
          ZMaxMsgLines, _
          ZMaxMsgLinesDef, _
          ZMaxNodes, _
          ZMaxPerDay,_
          ZMaxPswdChanges, _
          ZMaxRegSec, _
          ZMaxViolations, _
          ZMaxWorkVar, _
          ZMenu$(), _
          ZMenuIndex, _
          ZMenusCanPause, _
          ZMinLogonSec, _
          ZMinNewCallerBaud, _
          ZMinOldCallerBaud, _
          ZMinSecForTempPswd, _
          ZMinSecToView, _
          ZMinsPerSession, _
          ZMLCom, _
          ZMNPSupport, _
          ZModemAnswerCmd$, _
          ZModemCmdDelayTime, _
          ZModemCntlReg, _
          ZModemCountRingsCmd$, _
          ZModemGoOffHookCmd$, _
          ZModemInitBaud$, _
          ZModemInitCmd$, _
          ZModemInitWaitTime, _
          ZModemOffHook, _
          ZModemResetCmd$, _
          ZModemStatusReg, _
          ZMorePrompt$, _
          ZMSB, _
          ZMsgDim, _
          ZMsgDimIndex, _
          ZMsgDimIndexSave, _
          ZMsgFileLock, _
          ZMsgHeader$, _
          ZMsgPswd, _
          ZMsgPtr(2), _
          ZMsgRec$, _
          ZMsgReminder, _
          ZMsgsCanGrow, _
          ZMultiLinkPresent, _
          ZMusic, _
          ZNAK$, _
          ZNetBaud$, _
          ZNetMail$, _
          ZNetReliable$, _
          ZNetworkType, _
          ZNewFilesCheck, _
          ZNewMsgs, _
          ZNewPrivateMsgsSec, _
          ZNewPublicMsgsSec, _
          ZNewsFileName$, _
          ZNewUser, _
          ZNewUserDefaultMode, _
          ZNewUserDefaultProtocol$, _
          ZNewUserFile$, _
          ZNewUserGraphics$, _                                       ' nc022101
          ZNewUserMargins, _                                         ' nc022101
          ZNewUserQuestionnaire$, _
          ZNewUserSetsDefaults, _
          ZNextMsgRec, _
          ZNo, _
          ZNoAdvance, _
          ZNodeFileID$, _
          ZNodeID$, _
          ZNodeRecIndex, _
          ZNodeWorkDrvPath$, _
          ZNodeWorkFile$, _
          ZNoDoorProtect, _
          ZNonStop, _
          ZNonStopSave, _
          ZNotCTS, _
          ZNul$, _
          ZNulls, _
          ZNumCategories, _
          ZNumDnldBytes!, _
          ZNumHeaders, _
          ZOK, _
          ZOldDate$, _
          ZOmitMainDir$, _
          ZOneStop, _
          ZOptionEnd$, _
          ZOptSec(1), _
          ZOrigCallers$, _
          ZOrigCnfg$, _
          ZOrigCommands$, _
          ZOrigMsgFile$, _
          ZOrigSec, _
          ZOrigSysopFN$, _
          ZOrigSysopLN$, _
          ZOrigUserFile$, _
          ZOrigUserFileIndex, _
          ZOrigUserName$, _
          ZOutTxt$(1), _
          ZOutTxt$, _
          ZOverWriteSecLevel, _
          ZPageLength, _
          ZPageLengthDef, _
          ZPageStatus$, _
          ZPagingPtrSupport$, _
          ZParseOff, _
          ZPersonalBegin, _
          ZPersonalConcat, _
          ZPersonalDir$, _
          ZPersonalDrvPath$, _
          ZPersonalLen, _
          ZPersonalProtocol$, _
          ZPossibleMacro, _
          ZPreLog$, _
          ZPressEnter$, _
          ZPressEnterExpert$, _
          ZPressEnterNovice$, _
          ZPrevBase$, _
          ZPrevPrefix$, _
          ZPrevPUI$, _
          ZPrinter, _
          ZPrivateDoor, _
          ZPrivateReadSec, _
          ZPromptBell, _
          ZPromptBellDef, _
          ZPromptHash$, _
          ZPromptIndiv$, _
          ZProtoDef$, _
          ZProtoMacro$, _
          ZProtoMethod$, _
          ZProtoPrompt$, _
          ZPswd$, _
          ZPswdFailed, _
          ZPswdFile$, _
          ZPswdSave$, _
          ZPublicReadSec, _
          ZQuesPath$, _
          ZQuestAborted, _
          ZQuestChainStarted, _
          ZQuitList$, _
          ZQuitPromptExpert$, _
          ZQuitPromptNovice$
COMMON SHARED _
          ZRatioRestrict#, _
          ZRBBSBat$, _
          ZRBBSName$, _
          ZRCTTYBat$, _
          ZRecycleToDos, _
          ZRecycleWait, _
          ZRedirectIOMethod, _
          ZRegDate$, _
          ZRegDaysRemaining, _
          ZRegProgram$, _
          ZReliableMode, _
          ZRememberNewUsers, _
          ZRemindFileXfers, _
          ZRemindProfile, _
          ZRemoteEcho, _
          ZReply, _
          ZReq8Bit, _
          ZReqQues$, _
          ZReqQuesAnswered, _
          ZRequiredRings, _
          ZRequireNonASCII, _
          ZRestrictByDate, _
          ZRestrictValidCmds, _
          ZRet, _
          ZRetERL, _
          ZReturnLineFeed$, _
          ZRightMargin, _
          ZRTS$, _
          ZScreenOutMsg$, _
          ZSearchingAll, _
          ZSecChangeMsg, _
          ZSecExemptFromEpilog, _
          ZSecKillAny, _
          ZSecLevel$, _
          ZSecsPerSession!, _
          ZSecsUsedSession!, _
          ZSection$, _
          ZSectionOpts$, _
          ZSectionPrompt$, _
          ZSecVioHelp$, _
          ZSessionHour, _
          ZSessionMin, _
          ZSessionSec, _
          ZShareIt, _
          ZShowSection, _
          ZSizeOfStack, _
          ZSkipFilesLogon, _
          ZSLCategorizeUplds, _
          ZSleepDisconnect, _
          ZSmartTable$, _
          ZSmartTextCode$, _
          ZSmartTextCode, _
          ZSnoop, _
          ZSpeedFactor!, _
          ZStackC, _
          ZStartHash, _
          ZStartIndiv, _
          ZStartOfficeHours, _
          ZStartOfHeader$, _
          ZStartTime, _
          ZStopInterrupts, _
          ZStoreParseAt, _
          ZSubDir$(), _
          ZSubDirCount, _
          ZSubDirIndex, _
          ZSubParm, _
          ZSubSection, _
          ZSurviveNoUserRoom, _
          ZSuspendAutoLogoff, _
          ZSwitchBack, _
          ZSysop, _
          ZSysopAnnoy, _
          ZSysopAvail, _
          ZSysopCmds$, _
          ZSysopComment, _
          ZSysopFirstName$, _
          ZSysopLastName$, _
          ZSysopMenuSecLevel, _
          ZSysopNext, _
          ZSysopPswd1$, _
          ZSysopPswd2$, _
          ZSysopSecLevel, _
          ZSystemOpts$, _
          ZTalkAll, _
          ZTalkToModemAt$, _
          ZTempMaxPerDay, _
          ZTempPassword$, _
          ZTempRegPeriod, _
          ZTempSecLevel, _
          ZTempTimeAllowed, _
          ZTempTimeLock, _
          ZTestedIntValue, _
          ZTestParity, _
          ZTime$, _
          ZTimeCredits!, _
          ZTimeLock, _
          ZTimeLockSet, _
          ZTimeLoggedOn$, _
          ZTimesLoggedOn, _
          ZTimeToDropToDos!, _
          ZTodayBytes$, _
          ZTodayDl$, _
          ZToggleOnly, _
          ZTransferFunction, _
          ZTransferOption$, _
          ZTrashcanFile$, _
          ZTrue, _
          ZTurboKey, _
          ZTurboKeyUser, _
          ZTurboRBBS, _
          ZTurnPrinterOff, _
          ZULBytes!, _
          ZULBytes$, _
          ZUnitCount, _
          ZUpcatHelp$, _
          ZUpInc, _
          ZUpldDir$, _
          ZUpldDirCheck$, _
          ZUpldDriveFile$, _
          ZUpldPath$, _
          ZUpldRec$, _
          ZUplds, _
          ZUpldSubdir$, _
          ZUpldTimeFactor!, _
          ZUpldToSubdir, _
          ZUpperCase, _
          ZUpTemplate$, _
          ZUseBASICWrites, _
          ZUseDeviceDriver$, _
          ZUseDirOrder, _
          ZUseExternalXmodem, _
          ZUseExternalYmodem, _
          ZUserBlockLock, _
          ZUserDnlds$, _
          ZUserFileIndex, _
          ZUserFileLock, _
          ZUserGraphicDefault$, _
          ZUserIn$(1), _
          ZUserIn$, _
          ZUserLocation$, _
          ZUserLogonTime!, _
          ZUserName$, _
          ZUserOption$, _
          ZUserRecord$, _
          ZUserSecLevel, _
          ZUserSecSave, _
          ZUserTextColor, _
          ZUserUplds$, _
          ZUserXferDefault$, _
          ZUseTPut, _
          ZUtilCmds$, _
          ZUtilOpts$, _
          ZVerifyHigh$, _
          ZVerifying, _
          ZVerifyList$, _
          ZVerifyLow$, _
          ZVerifyNumeric, _
          ZVersionID$, _
          ZViolation$, _
          ZViolationsThisSession, _
          ZVoiceType, _
          ZWaitBeforeDisconnect, _
          ZWaitExpired, _
          ZWasA, _
          ZWasB, _
          ZWasC, _
          ZWasCC, _
          ZWasCI$, _
          ZWasCL, _
          ZWasCM, _
          ZWasCN$, _
          ZWasDF$, _
          ZWasDF, _
          ZWasEL, _
          ZWasEN$, _
          ZWasFT$, _
          ZWasGR, _
          ZWasHH, _
          ZWasLG$(), _
          ZWasLM$, _
          ZWasN$, _
          ZWasNG$, _
          ZWasQ!, _
          ZWasQ, _
          ZWasS, _
          ZWasSL, _
          ZWasSQ, _
          ZWasY$, _
          ZWasZ$, _
          ZWelcomeFile$, _
          ZWelcomeFileDrvPath$, _
          ZWelcomeInterruptable, _
          ZWorkAra$(1), _
          ZWrapCallersFile$, _
          ZWriteBufDef, _
          ZXferSupport, _
          ZXOff$, _
          ZXOffEd, _
          ZXOn$, _
          ZXOnXOff, _
          ZYes
' $SUBTITLE: 'Functions common to all components of RBBS-PC'
' $PAGE
'
' The following functions may be used by any routine in RBBS-PC
'
' FNOffOn$ returns "Off" if switch is 0, and returns "On" if
' switch is non-zero.

DEF FNOffOn$ (Switch) = MID$("OffOn", 1 - 3 * (Switch <> 0), 3)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2092

     Volume in drive A has no label
     Directory of A:\

    RBBS-UTL ZIP    249891   2-13-90  11:30p
    RBBS-LIT ZIP     75421   3-02-90  10:59p
    RFIX0227 ZIP     35460   2-28-90   8:29p
            3 file(s)     360772 bytes
                               0 bytes free
