---
layout: page
title: "PC-SIG Diskette Library (Disk #143)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0143/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0143"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #7"

    This disk contains many different kinds and flavors of utilities.  CMP
    compares files (either ASCII or binary) of different lengths and
    reports differences, good for archiving or updating text files. COPYFLD
    is a dBASE II tool to cut and paste from different dBASE files.  D and
    PC-ZAP both work on individual disk sectors, tracks, and sides for low
    level disk data manipulation and display.  RUSQ performs the inverse
    function of SQ, whichs squeezes files, but it does it in a different
    way than the public domain version of UNSQ, helpful if UNSQ doesnt
    work.  Lastly, SCRIPT is a XTALK utility used to set up a menu driven
    environment within XTALK.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: Enter PRINT *.DOC at the DOS prompt (A:), the
    instructions for running programs are in their respective text files.
    
    File Descriptions:
    
    COPYFLD  DOC  Documentation for COPYFLD.PRG
    COPYFLD  PRG  dBASE II program to copy fields from one file to another
    CMP      DOC  Documentation for CMP.COM
    CMP      COM  Intelligent file compare - works on binary files
    SCRIPT   DOC  A Crosstalk script for menu-driven operation
    RUSQ     EXE  Another (different) file unsqueezer - as last resort!
    PROJECTS DAT  Sample database for PROJECTS.BAS
    PROJECTS BAS  Home projects database manager
    PC-ZAP   DOC  Documentation for PC-ZAP.EXE
    D        EXE  Display selected disk sides/sectors/tracks
    PC-ZAP   EXE  Apply patches to disk(ette) - supports auto-patch files
    D        DOC  Documentation for D.EXE
    READ     ME   Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CMP.DOC

{% raw %}
```

DOCUMENTAION FOR CMP.COM  version 0.2  Dec. 2, 1982
BY Jack Gersbach
 
CMP.COM is a file comparison utility program that has the power
to perceive added and deleted sections of a file as well as changes.
 
The files to be compared may be specified on the same line with the
calling command. If they are not included, you will be prompted for
the file specifications. This gives you a chance to change disks before
the compare operation begins. If the file specifications are included
on the command line, it is assumed that the disk that contains CMP.COM
is conveniently mounted and you will not get the question "Compare
more files ?" before exiting to DOS.
The first specification must have a file name.
If a drive is not specified, the default drive is assumed. If the second
specification does not contain a file name, it is assummed to be the
same name as the first. If there is no second specification, the default
drive is assumed. If the file specifications are the same or if the
second defaults to the first, then the file will be compared to itself
and a warning message is issued. This is a handy way to check for disk
errors.
 
The output is displayed in chronological order.
Data unique to the most recent version of the file is listed first and
labeled "Ins". Following that, data unique to the older version is
displayed and labeled "Del". There may be only 1 file with unique data.
If neither files have unique data, then they are identical.
 
The display shows the offset within the file of the leftmost byte
in hexidecimal notation. This is always aligned to a paragraph
boundary making the low nibble zero. All data shown in the hex area
is unique. A double period is displayed if the byte is not unique to
the file. The dash separates bytes 7 and 8.
 
The ASCII representation appears on the right. A dash is displayed if
the byte is not unique. A period is displayed for non ASCII characters.
 
               Data unique to  A:FILE1.COM
 
Ins:00030  .. .. .. 4E 65 77 .. ..-.. .. .. .. .. .. .. .. [---New----------]
Ins:00140  .. .. .. .. 69 .. .. ..-.. BA .. .. 43 .. .. .. [----i----.--C---]
 
               Data unique to  B:FILE1.COM
 
Del:00140  .. 61 .. .. .. .. 58 ..-.. 00 .. .. .. .. .. .. [-a----X--.------]
 
In the above example the format is independent of the order in
which the file names were entered. The file on drive "A" is listed
first because it was found to be the most recent. I'ts data is there-
for labeled "Inserted". Data unique to the earlier file on drive "B"
was evidently "Deleted" and is labeled accordingly. The changes would
be perceived by the person who made them to be the added word "New"
and later in the file, 3 bytes whose value have been change but occupy
the same positions relative to the data surrounding them.
 
Compare does a reasonably good job of deducing differences between
files that have just a few changes. Some difficulty arises when there
is a high difference density. This is especially true when a few
changed bytes are intermixed with added or deleted data. In these cases
it may be difficult to interpret CMP.COM's output, but at a minimum it
will let you know that there is a difference of some kind.
 
The algorithm implemented in CMP.COM involves 2 basic parameters.
a. The maximum scan range or number of bytes to be scanned and
b. The minimum match length that is considered to be a valid compare.
The default values are 256 and 16, respectively.
 
The procedure is as follows :
 
	1. Scan ahead for matching bytes on the assumption that no
	   data has been inserted or deleted until matching bytes are
	   encountered. Save the distance to the matching bytes. The
           maximum range is scanned.
 
	2. Scan ahead for matching bytes on the assumption that data
	   has been added to the later file. Save the distance to the
	   matching bytes. The scan range in the earliest file is
           twice the minimum match length. The later file is scanned
	   to the max range.
 
	3. Repeat step 2 with the roles of the files reversed.
 
	4. If steps 2 and 3 did not produce a match, repeat them using
	   the maximum scan range in both files.
 
	5. Select the minimum of the above 3 lengths and report all
	   bytes within that distance to be unique to the appropriate
	   files. In case 1 the data in both files is reported. In case
	   2 data in the later file is reported and in case 3 data in
	   the earlier file is reported. If no match was found, report
	   16 bytes of both files as unique.
 
	6. Load more file data from disk to memory, if appropriate, 
           and go back to step 1.
 
As data is reported, it is bypassed by the scan pointers and the scan
resumes at the new pointer positions. The data then need not be at the
same offset in each file to produce a match, since the pointers can move
independently. For difficult files, i.e. files with many insertions,
deletions and/or changes, the maximum range and minimum match length
parameters may be modified by the user but only after the prompt message
appears on the screen. Hence the file names must not be included on the
command line that calls CMP.COM. Both parameters must be specified.
The syntax is:
 
            /max scan range/min match length [,filespec]
 
Any combination of numbers may be used but the max scan range must be
more than twice the min match length and the range connot exceed half the
available memory. i.e. the memory space allocated to one of the files.
Otherwise the "improper number(s)" message appears and the parameters
are not accepted.
 
Examples of commands entered while still under DOS's control.
		CMP FILE1.TXT	FILE2.TEXT
		CMP A:FILE1.TXT,B:
 		CMP A:FILE1.TXT
 
Examples of commands entered while under CMP.COM's control.
		FILE1.TXT FILE2.TEXT
		A:FILE1.TXT B:
 		A:FILE1.TXT
		/150/12 a:file1.txt,b:file1.txt
		/30/6
 
 
Prompting messages:
 
        Enter the files to be compared or new parameters
 
This is the prompt message to type in the file specifications or
new parameters for the scan algorithm. They must be on the same
line separated by tab, space or comma. The parameters, if present,
must preceed the file names. If file specifications have been
entered previously, it is only necessary to press enter to repeat 
the comparison.
 
              Compare more files (Y/N) ?
 
This message only appears if CMP.COM was called without trailing
parameters specifying the files. The assumption is made that the
disk containing CMP.COM was removed from the drive.
If another compare operation is desired, enter "Y", otherwise
enter "N" and control is returned to DOS (the command processor).
 
 
 
Informative messages:
 
 
                 Comparing file to itself
 
The file specifications refer to the same file. It is being compared
to itself to verify the integrity of the disk data.
 
                   Files are identical
 
The files contain identical data and are the same length. The date
and time might be different.
 
 
 
Error messages:
 
                   FILESPEC is empty
 
There is no data in the indicated file.
 
                  FILESPEC not found
 
The indicated file could not be found on the specified drive.
 
            Invalid drive or file specification
 
DOS found the drive, file name or file extention to be invalid.
 
                  Improper number(s)
 
The max range was either less than or equal to twice the min match
length, or greater than half the available memory space, or only one
parameter was specified.
 


ice the min match
```
{% endraw %}

## COPYFLD.DOC

{% raw %}
```

     Documentation Maintained by PC Professional Users Group
               P.O. Box 2350 Wilmington DE. 19899
FILENAME:               COPYFLD.PRG
PROGRAM NAME:           Copyfield program
VERSION NUMBER:         1.0
VERSION DATE:           00-00-00
AUTHOR (ORIGINAL):      Kenneth Eagle
" ADDRESS/PHONE:        2304 Rockwell Rd.      302-475-2763
LATEST REVISOR:         .
" ADDRESS/PHONE:        .
OBTAINED FROM:          Author
PROGRAM TYPE:           dBASEII Utility
********************** EQUIPMENT REQUIRED **********************
The dBASEII Program
********************* PURPOSE; DESCRIPTION *********************
A generalized dBASEII utility to copy a field or combination of
fields from one file to another.  It has much greater speed than
the JOIN operation, and can be used in a number of different ways.
************************* INSTRUCTIONS *************************
-Copy this program onto your dBASE working disk
-Bootup in any DOS (if not already done).
-Type DBASE <RETURN/ENTER key>
-Type DO COPYFLD <RETURN/ENTER key>
-Further instructions included in the program.
-To end program prematurely, push Esc key

************************* PECULIARITIES ************************
-There must be room on your data disk for up to 2 index files
 if your TO and FROM files are not in order.
-Some earlier versions of the dBASE program (eg CP/M) require
 that a command program of this sort have an extension of .CMD.
 If you have one of these versions, rename the program to
 COPYFLD.CMD (This utility has been tested on both an IBM-PC
 and a SUPERBRAIN II.
-The default convention for macros has been used i.e. an &
 If your dBASE has been installed with some other symbol,
 you must change all "&"s to that symbol
*********************** GENERAL COMMENTS ***********************
-Copyright 1983 by Kenneth Eagle
 This program is contributed to the public domain with the
 restriction that it may not be used for commercial purposes
 without written permission from the author.

 A dBASEII program to copy field(s) from one file to another
 Both files must contain a common 'KEY FIELD'.
 Both files must be in order of (or indexed on) 'KEYFIELD'.
   (the program will do this on a temporary basis if you like)
 FROM file must have a KEYFIELD entry for every one in the TO file.
 As presently programmed, the TO file must already be structured
 with the field to be copied into already created (filled or empty)

-I have found this utility to be useful for a number of different
 purposes.  I have used it to change identification codes using
 a cross-reference list as the FROM file.  It is very effective
 for "merging" one or two fields from one file to another without
 the complication (and slowness!) of a third file created by the
 "JOIN" operation.  Another useful feature is the ability to
 combine two or more fields into a single field "as you go".
 For example. Suppose the FROM file has two fields called
 FIRSTNAME and LASTNAME with entries of KEN and EAGLE respectively,
 and you want to combine these into a single field called NAME in
 the TO file. When the program asks for the FROM field name, you
 respond with LASTNAME-","-FIRSTNAME (using standard dBASE con-
 ventions). The answer to the TO field name question would be
 NAME. The result in the TO file's NAME field would be a single
 entry of: EAGLE,KEN .  The more I work with this utility, the
 more uses I find for it.

-An improvement would be: add a way to automatically create the
 new field in the TO file when it doesn't already exist

```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #143, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PC-ZAP  .DOC         CRC = F4 94

--> FILE:  PC-ZAP  .EXE         CRC = 65 69

--> FILE:  D       .EXE         CRC = 5F BA

--> FILE:  D       .DOC         CRC = 3F 3C

--> FILE:  SCRIPT  .DOC         CRC = 5D 9E

--> FILE:  PROJECTS.BAS         CRC = D7 32

--> FILE:  PROJECTS.DAT         CRC = D5 32

--> FILE:  COPYFLD .DOC         CRC = FB DA

--> FILE:  COPYFLD .PRG         CRC = 9C 12

--> FILE:  CMP     .COM         CRC = AE B1

--> FILE:  CMP     .DOC         CRC = 11 08

--> FILE:  RUSQ    .EXE         CRC = F3 35

--> FILE:  READ    .ME          CRC = AA DC

 ---------------------> SUM OF CRCS = F8 AB

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## D.DOC

{% raw %}
```

"D" is a program to display the contents of a diskette, by side, sector,
and display the data in hex and decimal.  It was written by Ed Lejman of
Raleigh, NC and is placed in the public domain with his permission.

While not as fancy as the Norton Utilities, it does have one distinct
advantage....it's free!!!

The program consists of three files: D.DOC - This file
                                     D.ASM - As written
                                     D.EXE - Executable file

D will run with DOS 1.1 or 2.0, but hasn't been checked with the various
other versions of DOS.  Comments are welcome, if you have suggestions,
or problems feel free to contact me on this BBS.

                                         Hogan Hogan
                                         February 3, 1984





```
{% endraw %}

## PROJECTS.BAS

{% raw %}
```bas

10 DIM P$(100),PRIORITY(100),HOURS(100),COST(100),CUMCOST(100),CUMHOURS(100)
20 CLS : OPEN "I",#1,"PROJECTS.DAT"
30 FOR I=1 TO 100 : INPUT #1,N,P$(N),PRIORITY(N),HOURS(N),COST(N),CUMCOST(N),CUMHOURS(N) : NEXT I : CLOSE #1
40 CLS:N=0:COLOR 13,0,0:LOCATE 1,29:PRINT "HOUSEHOLD PROJECTS DATA BASE"
50 COLOR 3,0,0 : LOCATE 3,37 : PRINT "M E N U" : COLOR 4,0,0
60  LOCATE 6,1 :PRINT "E      ENTER DATA"
70  LOCATE 10,1 :PRINT "D      DISPLAY DATA"
80  LOCATE 12,1 :PRINT "P      PRINT REPORT"
90  LOCATE  8,1 :PRINT "U      UPDATE DATA BASE"
100  LOCATE 14,1 :PRINT "S      SORT DATA BASE"
110  LOCATE 16,1 :PRINT "Q      EXIT TO BASIC MODE"
120  LOCATE 18,1 :PRINT "X      EXIT TO DOS"
130 LOCATE 21,1:COLOR 22,0,0:PRINT "E N T E R   C O M M A N D ":COLOR 2,0,0
140 LOCATE 4,60 :COLOR 9,0,0: PRINT DATE$
150 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$:IF Z$ = "" THEN 150
160 COLOR 2,0,0:IF Z$ = "E" OR Z$ = "e" THEN 240
170 IF Z$ = "D" OR Z$ = "d" THEN 770
180 IF Z$ = "S" OR Z$ = "s" THEN 930
190 IF Z$ = "U" OR Z$ = "u" THEN 1090
200 IF Z$ = "P" OR Z$ = "p" THEN 1120
210 IF Z$ = "Q" OR Z$ = "q" THEN 1540
220 IF Z$ = "X" OR Z$ = "x" THEN 1530
230 PRINT "INVALID RESPONSE * PLEASE RETRY" : GOTO 140
240 CLS : N=0 : COLOR 13,0,0 : LOCATE 1,33 : PRINT "PROJECTS DATA BASE"
250 COLOR 12,0,0 : LOCATE 12,5 : PRINT "HIT ENTER KEY TO DISPLAY MENU"
260 COLOR 2,0,0 : LOCATE 4,1 : PRINT "PROJECT NUMBER"
270 PRINT "PROJECT"
280 PRINT "PRIORITY"
290 PRINT "ESTIMATED COST"
300 PRINT "ESTIMATED HOURS"
310 LOCATE 4,1:INPUT "PROJECT NUMBER ";N:IF N=0 THEN 750
320 FOR I=15 TO 23:LOCATE I,1:PRINT "                                   ":NEXT I
330 IF P$(N) = "" THEN 450
340 LOCATE 15,1 : COLOR 14,0,0 : PRINT "CURRENT CONTENTS OF INTERSECTION"
350 LOCATE 22,1 : COLOR 1,0,0 : PRINT "OPTIONS"
360 LOCATE 22,10 : COLOR 3,0,0 : PRINT "<RET> NO CHANGE TO CURRENT LINE"
370 LOCATE 23,10 : COLOR 3,0,0 : PRINT "  =   NO CHANGE TO THIS PROJECT"
380 LOCATE 24,10 : COLOR 3,0,0 : PRINT "  #   REMOVE THIS PROJECT";
390 LOCATE 17,15: PRINT "                                                     "
395 LOCATE 17,1 : COLOR 6,0,0
400 PRINT "PROJECT        ";P$(N)
410 PRINT "PRIORITY       ";PRIORITY(N)
420 PRINT "ESTIMATED COST ";COST(N)
430 PRINT "ESTIMATED HOURS";HOURS(N)
440 GOTO 460
450 LOCATE 19,1:COLOR 14,0,0:PRINT "CURRENT INTERSECTION EMPTY":COLOR 2,0,0
460 LOCATE 5,1 : COLOR 2,0,0 : X$=P$(N)
470 INPUT "PROJECT        ";P$(N)
480 LOCATE 23,10 : PRINT "                                               "
490 LOCATE 24,10 : PRINT "                                               ";
500 IF P$(N) <> "" THEN 550
510 P$(N)=X$
520 LOCATE 15,1 : COLOR 13,0,0  : PRINT "CURRENT PROJECT NAME NOT CHANGED" : COLOR 2,0,0
530 LOCATE 6,1 : COLOR 2,0,0
540 GOTO 630
550 IF P$(N) <> "=" THEN 590
560 P$(N)=X$
570 LOCATE 15,1 : COLOR 13,0,0  : PRINT "CURRENT INTERSECTION NOT CHANGED" : COLOR 2,0,0
580 GOTO 700
590 IF P$(N) <> "#" THEN 630
600 PRIORITY(N)=0 : COST(N)=0 : HOURS(N)=0 : P$(N)=""
610 LOCATE 15,1:COLOR 13,0,0:PRINT "CURRENT INTERSECTION REMOVED   ":COLOR 2,0,0
620 GOTO 700
630 HOLD=PRIORITY(N):LOCATE 6,1:COLOR 2,0,0:INPUT "PRIORITY       ";PRIORITY(N)
640 IF PRIORITY(N) = 0 THEN PRIORITY(N)=HOLD
650 HOLD=COST(N) : INPUT "ESTIMATED COST ";COST(N)
660 IF COST(N) = 0 THEN COST(N)=HOLD
670 HOLD=HOURS(N) : INPUT "ESTIMATED HOURS";HOURS(N)
680 IF HOURS(N) = 0 THEN HOURS(N)=HOLD
690 PRINT " "
700 I=4
710 LOCATE I,16 : PRINT "                                        "
720 I=I+1
730 IF I<9 THEN 710
740 GOTO 310
750 N=0 : CUMCOST(1)=COST(1) : CUMHOURS(1)=HOURS(1)
760 FOR I=2 TO 100:J=I-1:CUMCOST(I)=CUMCOST(J)+COST(I):CUMHOURS(I)=CUMHOURS(J)+HOURS(I):NEXT I:GOTO 40
770 CLS : COUNT=0
780 COLOR 9,0,0 : PRINT "  #  PRORITY  PROJECT                               HOURS     COST     CUM-COST" : COLOR 2,0,0
790 PRINT  " "
800 N=N+1 : COUNT=COUNT+1
810 PRINT USING "###     ";N;
820 PRINT USING "###   ";PRIORITY(N);
830 PRINT USING "\                                \";P$(N);
840 PRINT USING "######## ";HOURS(N);
850 PRINT USING "######.## ";COST(N);
860 PRINT USING "########.##";CUMCOST(N)
870 IF COUNT = 20 THEN 890
880 GOTO 800
890 COLOR 20,0,0 : PRINT "PRESS ANY KEY TO CONTINUE" : COLOR 2,0,0
900 A$=INKEY$: IF A$="" THEN 900
910 IF (CUMCOST(N) = CUMCOST(N+1)) AND (CUMHOURS(N) = CUMHOURS(N+1)) THEN 40
920 IF N < 100 THEN 770 ELSE 40
930 LOCATE 21,1 : COLOR 28,0,0 : PRINT "       S O R T I N G                  "
940 FOR I=1 TO 100
950 IF PRIORITY(I) = 0 THEN PRIORITY(I)=999
960 NEXT I
970 FOR ISORT=1 TO 99
980 LOCATE 4,60:COLOR 9,0,0:PRINT DATE$:LOCATE 6,60:COLOR 6,0,0:PRINT TIME$
990 FOR JSORT = ISORT TO 100
1000 IF PRIORITY(ISORT) <= PRIORITY(JSORT) THEN 1020
1010 SWAP P$(ISORT), P$(JSORT)       : SWAP PRIORITY(ISORT), PRIORITY(JSORT) :       SWAP HOURS(ISORT), HOURS(JSORT) : SWAP COST(ISORT), COST(JSORT)
1020 NEXT JSORT
1030 NEXT ISORT
1040 FOR I=1 TO 100
1050 IF PRIORITY(I) = 999 THEN PRIORITY(I) = 0 ELSE PRIORITY(I) = I
1060 NEXT I
1070 N=0 : CUMCOST(1)=COST(1) : CUMHOURS(1)=HOURS(1)
1080 FOR I=2 TO 100 : J=I-1 : CUMCOST(I)=CUMCOST(J)+COST(I) : CUMHOURS(I)=CUMHOURS(J)+HOURS(I) : NEXT I : GOTO 40
1090 LOCATE 21,1 : COLOR 22,0,0 : PRINT "F I L E   B E I N G   W R I T T E N   T O   D I S K" : COLOR 2,0,0 : OPEN "O",#2,"A:PROJECTS.DAT"
1100 FOR N=1 TO 100 : WRITE #2,N,P$(N),PRIORITY(N),HOURS(N),COST(N),CUMCOST(N),CUMHOURS(N) : NEXT N
1110 CLOSE #2 : GOTO 40
1120 COLOR 11,0,0:LOCATE 12,40:PRINT "P R I N T   O P T I O N S"
1130 LOCATE 14,40:PRINT "F     FORMAL REPORT"
1140 LOCATE 16,40:PRINT "W     WORK REPORT"
1150 LOCATE 18,40:PRINT "C     COMPRESSED WORK REPORT"
1160 LOCATE 21,1:COLOR 22,0,0:PRINT "E N T E R   P R I N T   O P T I O N   ":COLOR 2,0,0
1170 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$: IF Z$="" THEN 1170
1180 IF Z$ = "F" OR Z$ = "f" THEN 1190 ELSE 1200
1190 LPRINT CHR$(27)"G" : LPRINT CHR$(27)"E" : GOTO 1220
1200 IF Z$ = "C" OR Z$ = "c" THEN 1210 ELSE 1220
1210 LPRINT CHR$(15)
1220 LOCATE 21,1:COLOR 28,0,0:PRINT "SET PRINTER AND PRESS ENTER KEY TO START"
1230 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$: IF Z$="" THEN 1230
1240 LOCATE 21,1:COLOR 28,0,0:PRINT "P R I N T I N G   A T   P R I N T E R   "
1250 LOCATE 14,40:PRINT "                   "
1260 LOCATE 16,40:PRINT "                 "
1270 LOCATE 18,40:PRINT "                            "
1280 LOCATE 12,40:PRINT "                         "
1290 WIDTH "LPT1:",132:N=1
1300 LPRINT " "
1310 LPRINT CHR$(27)"W"CHR$(1) "                 HOUSEHOLD PROJECTS PRIORITY LIST" ; CHR$(27)"W"CHR$(0)
1320 LPRINT " "
1330 LPRINT " "
1340 LPRINT " "
1350 LPRINT "  JOB   PRIORITY    PROJECT                                                   HOURS    CUMHOURS         COST       CUMCOST"
1360 LPRINT "  ---   --------    -------------------------------------------------------   -----    --------        -----       -------"
1370 LPRINT " "
1380 FOR I=N TO N+49
1385 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$
1390 LPRINT USING " ###    ";I;
1400 LPRINT USING "####        ";PRIORITY(I);
1410 LPRINT USING "\                                                   \";P$(I);
1420 LPRINT USING "##########  ";HOURS(I);
1430 LPRINT USING "##########  ";CUMHOURS(I);
1440 LPRINT USING "#########.## ";COST(I);
1450 LPRINT USING "#########.##";CUMCOST(I)
1460 NEXT I
1470 FOR J=1 TO 7
1480 LPRINT " "
1490 NEXT J
1500 IF (CUMCOST(50) = CUMCOST(51)) AND (CUMHOURS(50) = CUMHOURS(51)) THEN 1520
1510 IF N = 51 THEN 1520 ELSE N=51 : GOTO 1300
1520 LPRINT CHR$(27)"H"; CHR$(18); CHR$(27)"F" : WIDTH "LPT1:",80 : GOTO 40
1530 CLS : COLOR 2,0,0 : PRINT " EXITING TO DOS " : SYSTEM
1540 CLS : COLOR 2,0,0 : END




```
{% endraw %}

## SCRIPT.DOC

{% raw %}
```
ICapture Buffer Transfer
No error detection/correction

Opening capture buffer...
                        Crosstalk Script files

The following is a rather lenghty procedure to set up a menu processing system
for Crosstalk.  Included are procedures to perform automatic logon and capture
to the IBMSIG which may be extracted and used as standalone Xtalk scripts.

The script and menu files were written by Steven Greenberg, who seems to know
everything there is to know about script files, and this document put together
by Don Watkins, who knows nothing about script files.  Steve has donated these
scripts to the SIG and hopes they'll be of some help and use to members.

The Menu facility is composed of two files:
                        AUTOEXEC.BAT - Contains the command XTALK MENU
                                       which brings up XTALK on power-up or
                                       or reset and executes the file MENU.XTK
                        MENU.XTS     - Contains the menu text and key trapping
                                       script code.
Contents of MENU.XTS (editors note.... the CROSSTALK - XVI were done very
nicely in with ASCII characters 205 (top) and 186(sides) they have been
changed as CIS will not accept them):

SCREEN TERMINAL
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                        Information Services Available:


                                1)   CompuServe

                                2)   Dow Jones

                                3)   The Source

                                4)   Home Banking


                                5)   Exit to DOS


.
LABEL ASKSERVICE
ASK Please choose one of the above (1,2,3,4,5):
IF -012345 JUMP ASKSERVICE
JUMP DO-@
LABEL DO-1
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   CompuServe
.
LABEL CSSIG-YN
ASK Do you wish to automaticaly capture the latest info on the IBM SIG (Y,N):
IF -YN JUMP CSSIG-YN
IF N JUMP CSSIG-N
MESSAGE

                          IBM PC Special Intrest Group
.
LABEL CSSPEED1
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP CSSPEED1
IF 1 SPEED 1200
IF 3 JUMP CSSPEED1-3
MESSAGE

                                   1200 baud







.
JUMP CSCONFIRM1
LABEL CSSPEED1-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL CSCONFIRM1
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP CSCONFIRM1
IF N RWIND
LO CSIBMSIG
LABEL CSSIG-N
MESSAGE

                                Standard Log-On
.
LABEL CSSPEED2
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP CSSPEED2
IF 1 SPEED 1200
IF 3 JUMP CSSPEED2-3
MESSAGE

                                   1200 baud







.
JUMP CSCONFIRM2
LABEL CSSPEED2-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL CSCONFIRM2
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP CSCONFIRM2
IF N RWIND
LO CSERVE
ABORT
LABEL DO-2
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   Dow Jones
.
LABEL DJ1
MESSAGE

                                Standard Log-On
.
LABEL DJSPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP DJSPEED
IF 1 SPEED 1200
IF 3 JUMP DJSPEED3
MESSAGE

                                   1200 baud







.
JUMP DJCONFIRM
LABEL DJSPEED3
SPEED 300
MESSAGE

                                   300 baud







.
LABEL DJCONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP DJCONFIRM
IF N RWIND
LO DOWJONES
ABORT
LABEL DO-3
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   The Source
.
LABEL TS1
MESSAGE

                                 Standard Log-On
.
LABEL TSSPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP TSSPEED
IF 1 SPEED 1200
IF 3 JUMP TSSPEED-3
MESSAGE

                                   1200 baud







.
JUMP TSCONFIRM
LABEL TSSPEED-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL TSCONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP TSCONFIRM
IF N RWIND
LO SOURCE
ABORT
LABEL DO-4
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                         Bank of America - Home Banking
.
LABEL BA1
MESSAGE

                                 Standard Log-On
.
LABEL BASPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP BASPEED
IF 1 SPEED 1200
IF 3 JUMP BASPEED-3
MESSAGE

                                   1200 baud







.
JUMP BACONFIRM
LABEL BASPEED-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL BACONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP BACONFIRM
IF N RWIND
LO HOMEBANK
ABORT
LABEL DO-5
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                         < < <   W A R N I N G   > > >


                                  Exit to DOS











.
ALERT
LABEL XDCONFIRM
ASK Please confirm that the above choice is correct (Y,N):
IF -YN JUMP XDCONFIRM
IF N RWIND
XD
LABEL DO-0
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                         < < <   W A R N I N G   > > >


                             Exit to CROSSTALK XVI











.
ALERT
LABEL XCCONFIRM
ASK Please confirm that the above choice is correct (Y,N):
IF -YN JUMP XCCONFIRM
IF N RWIND
SCREEN STATUS
CLEAR
ABORT

MENU script ends with ABORT

As you will note there are many options available with the menu, however all
the script files will not be included here as they may not be of interest to
all members. The CIS and CIS/IBMSIG logon scripts will be included and
will hopefully serve as models for script files that serve your needs.
The CIS logon script is composed of two files:
                        CSERVE.XTK - The standard Xtalk .XTK file with slight
                                     modifications. You can, of course, alter
                                     the function keys to suit your needs.
                        CSERVE.XTS - The logon script file
CSERVE.XTK follows:
NAme     CompuServe Information Service
NUmber   nnn-nnnn
ACcept   Everything
ANswback On
ATten    Esc
BReak    End
SWitch   Home
CWait    None
LWait    None
DEbug    Off
DPrefix  ATDT
DSuffix  |
EMulate  None
INfilter On
LFauto   Off
MOde     Call
POrt     1
PWord
TImer    On
TUrnarnd Enter
BKsize   1
CApture  Off
COmmand  ETX (^C)
DAta     8
DUplex   Full
OUtfiltr On
PArity   None
PRinter  Off
STop     1
TAbex    Off
BLankex  Off
UConly   Off
FK 1 ""
FK 2 ""
FK 3 ""
FK 4 "CROSSTALK - XVI "
FK 5 "@CApture /|"
FK 6 "@PRinter /|"
FK 7 "@TYpe|"
FK 8 "@CApture <24|"
FK 9 "@SNap|"
FK 10 "@SNap 24|"
FK S1 ""
FK S2 ""
FK S3 ""
FK S4 ""
FK S5 ""
FK S6 ""
FK S7 ""
FK S8 ""
FK S9 ""
FK S10 ""
FK C1 ""
FK C2 ""
FK C3 ""
FK C4 ""
FK C5 ""
FK C6 ""
FK C7 ""
FK C8 ""
FK C9 ""
FK C10 ""
FK A1 ""
FK A2 ""
FK A3 ""
FK A4 ""
FK A5 ""
FK A6 ""
FK A7 ""
FK A8 ""
FK A9 ""
FK A10 ""
GO q30/30

CSERVE.XTK ends with GO q30/30
CSERVE.XTS follows:

MESSAGE
Logging onto CompuServe . . . please wait a moment . . .
.
; Log onto CompuServe, give ID and Password.
WAIT QUIET 20
REPLY ^C
WAIT STRING "ID:"
REPLY 12345,678|
WAIT STRING "Password:"
REPLY MYWORD!|

CSERVE.XTS ends with REPLY MYWORD!|
In order to make CSERVE.??? function you will have to add you local CIS node
number as well as your ppn (user id) and password (sorry, no free lunch). This
script also assumes that you are calling in through a direct CIS node and
bypassing Telenet and Tymnet.

To execute the logon and capture all messages to disk you will need two files:
                        CSIBMSIG.XTK - Standard Xtalk .XTK file with slight
                                       modification. Same as CSERVE.XTK so
                                       just COPY as CSIBMSIG.XTK.
                        CSIBMSIG.XTS - Script file for CIS login, transfer to
                                       IBMSIG and retrevial of all messages.

CSIGMSIG.XTS follows:
MESSAGE
Logging onto CompuServe . . . please wait a moment . . .
.
; Log onto CompuServe, give ID and Password.
WAIT QUIET 20
REPLY ^C
WAIT STRING "ID:"
REPLY 12345,678|
WAIT STRING "Password:"
REPLY MYWORD!|
WAIT QUIET 15
REPLY |
; Wait for system prompt and then goto IBM PC SIG.
WAIT CHAR "!"
REPLY GO PCS-131|
; Start capture, wait for prompt, start info dump.
CAPTURE B:CSTEMP.TXT
WAIT STRING "FUNCTION:"
REPLY RTN|
; Watch for first FUNCTION: prompt.
WHEN "FUNCTION:" REPLY | : DO
WAIT MANUAL
; Watch for second FUNCTION: prompt.
WAIT MANUAL
; Watch for prompt and then log-off.
WHEN -
WAIT STRING "FUNCTION:"
REPLY BY|
WAIT STRING "time"
WAIT DELAY 35
BY
; Save file and exit program.
DO MENU

CSIBMSIG.XTS ends with DO MENU
                              WARNING!!
This script assumes you have no messages waiting, if so it would hand on the
pending message, and if left unattended would leaving you hanging at the
"reply, delete, continue" prompt forever (or something close to it).

To use the script files contained in this documentent just extract out each
file with a good text editor or word processor. Each module should run as a
standalone script with using the MENU if you're so inclined.

These files were provided to be helpful hints on Xtalk script writing as well
be actual working script files.  If they cause your machine to blow up or
result in you incurring 182 hours of CIS connect time, the author assumes no
libaility. Altho these scripts are used on a daily basis you should, as with
any new program or procedure, use them with a cautious eye for the first
several times of use.

Having said that.....ENJOY!!

Thanks and a tip of the hat to Steve Greenberg for the use and distribution of
his files.
                        Don Watkins 76003,252
                        2/14/84
Capture buffer closed.



[76003,252]
SCRIPT.DOC     14-Feb-84 12400        87

Disposition:

<R D T):

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0143

     Volume in drive A has no label
     Directory of A:\

    PC-ZAP   DOC    153728   3-29-84   6:00p
    PC-ZAP   EXE     42112   3-29-84   3:04p
    D        EXE      2560   4-09-84  11:15a
    D        DOC       896   4-09-84  11:14a
    SCRIPT   DOC     12672   3-09-84  10:28p
    PROJECTS BAS      7808   4-09-84  11:19a
    PROJECTS DAT      2944   4-09-84  11:19a
    COPYFLD  DOC      3712   4-09-84  11:22a
    COPYFLD  PRG      4480   4-09-84  11:22a
    CMP      COM      2176   4-08-84  11:45p
    CMP      DOC      7680   4-08-84  11:46p
    RUSQ     EXE     16512   4-09-84  12:18a
    READ     ME        955   4-09-84  11:41a
    CRC      TXT      1170  11-13-84   2:51p
    CRCK4    COM      1536  10-21-82   7:54p
           15 file(s)     260941 bytes
                           53248 bytes free
