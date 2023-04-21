---
layout: page
title: "PC-SIG Diskette Library (Disk #52)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0052/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 1"

    An updated version of the FREE1 RAM-disk package for electronic disk
    fans.  Use this collection of file handling utilities to insert
    carriage returns, strip high-order characters from a text file, and to
    hide a file from prying eyes.  Also included is a text-search routine,
    and a binary to hex converter.
    
    System Requirements:  Some programs run under DOS 1.x ONLY; BASIC
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  FREE4 $15.00; FREE5 $10.00
    
    File Descriptions:
    
    BEEP     COM  Generates beep sound - useful for match files
    CRETURN  BAS  Adds carriage returns to downloaded files
    FILTER   BAS  Removes control and non-ASCII characters from disk files
    DISRTN   EXE  File directory utility
    FIXDEL   EXE  Disk file utility
    DSKPGM2  BAS  Creates batch file for copying files
    FIXIT    BAS  Creates PRINTFIX.COM
    FREE4    COM  160K electronic disk drive - update to FREE1
    FREE5    COM  New reset program - update to FREE3
    FREE4    DOC  Documentation for FREE4.COM
    FREE5    DOC  Documentation for FREE5.COM
    HIDEFILE BAS  Modifies a file's directory status
    HEX      BAS  Convert binary files to and from hex format for download
    PR256    ASM  Printer patch
    POKEPEEK DOC  Memory locations in ROM BIOS accessible from BASIC
    PATCH256 ASC  Patches various printers into PR256
    PARTCOPY EXE  Copies files from a double-sided to 2 single-sided disks
    UTSCAN   BAS  Scans text files for specified string and prints
    TUNE     COM  Plays tune
    SHIFTIBM COM  Converts backslash key back to IBM standard configuration
    SHIFTBS  COM  Converts backslash key into left shift key
    FILEMOD  ASC  Part of DISRTN.EXE program
    ABSTRACT DOC  Documentation for utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABSTRACT.DOC

{% raw %}
```


BEEP.ABS

PROGRAM NAME: BEEP.COM
AUTHOR: J. P. Garbers, 890e Clubhouse Circle West, Decatur, GA 30032
ABSTRACT: Just a little command to play a beep.  Useful in batch files to
signal the end of a long process.
REQUIRES: IBM Personal Computer with DOS operating system.
INSTRUCTIONS: Just type the command BEEP <cr> from DOS, or insert a line
containing the command BEEP into your batch file.


CRETURN.ABS

PROGRAM NAME: CRETURN.BAS
AUTHOR: R  Schinnell
ABSTRACT: Sometimes, when you download a file from a remote computer system,
and then try to list or load it, you find that the whole program prints out
on one line - without a single line feed.  This program repairs such a file
by inserting line feeds at the end of each line (where the carriage returns
are).
REQUIRES: IBM BASIC
INSTRUCTIONS: From BASIC type run"creturn.bas"<cr> and answer the questions
on file names etc.


DISRTN.ABS

PROGRAM NAME: DISRTN.EXE
AUTHOR: William Bailey
ABSTRACT: This program contains the following five disk utility routines:
        1. List file names in a directory
        2. List the sectors upon which a file resides.
        3. Recover the first sector of an erased file.
        4. Uncover a hidden file.
        5. Hide a normal file.
The program is menu driven, and contains a description and help selection
REQUIRES: IBM PC with DOS operating system, and at least one disk drive.
INSTRUCTIONS: From DOS, type DISRTN<cr>


DSKPGM2.ABS

PROGRAM NAME: DSKPGM2.BAS
AUTHOR: Rich Schinnell, Capital PC User's Group
ABSTRACT: This a BASIC program that creates a batch file.  This batch file
contains the commands necessary to copy files from one disk to another -
but in alphabetical order.
REQUIRES: IBM BASIC, DOS, and at least one disk drive.
INSTRUCTIONS: From BASIC, type run "dskpgm2.bas"<cr> and answer the questions
on desired disk drive etc.  When the program has finished operating, there will
be a new batch file on your disk, which you can then execute by typing it's
name from DOS.


FILTER.ABS

PROGRAM NAME: FILTER.BAS
AUTHOR: Richard Steck
ABSTRACT: This is a BASIC program that can be used to remove control and non-
ASCII (garbage) characters from files that you have downloaded from remote
systems. Useful for removing the nulls at the beginning of each line which are
inserted by some systems.
REQUIRES: IBM BASIC, and a messed up file to work on.( You may not have any)
INSTRUCTIONS: From BASIC, type RUN" FILTER.BAS"<cr>. You will be asked the 
name of you original file, the new file to be created, etc.


HEX.ABS

PROGRAM NAME: HEX.BAS
AUTHOR: JP GARBERS
ABSTRACT: This program converts binary files to hex and back again, for the
purpose of sending com or exe files over the phone.
REQUIRES: IBM BASIC
INSTRUCTIONS: From BASIC, type run"hex <cr>
Program operation is menu driven and simple.


SHIFTBS.ABS

PROGRAM NAME: SHIFTBS.COM and SHIFTIBM.COM
AUTHOR: Walt Rauser
ABSTRACT: SHIFTBS converts the backslash key (\) into a left shift key for
those of you with short fingers.  SHIFTIBM converts this key back to its
normat definition.  The program modifies the BIOS code for the
keyboard interrupt INT 09 function so that the make and break scan
key codes for the backslash key are converted to those for the
left shift key. (sorry)
REQUIRES: IBM DOS
INSTRUCTIONS: From DOS, just type SHIFTBS<cr>. or SHIFTIBM<cr>. 


TUNE.ABS

PROGRAM NAME: TUNE.COM
AUTHOR: JP Garbers
ABSTRACT: This a DOS command to play one of several little tunes.  Useful for
signalling the end of a batch job.
REQUIRES: IBM DOS
INSTRUCTIONS: SEE the file GUMUP.DOC


UTSCAN.ABS

PROGRAM NAME: UTSCAN.BAS
ABSTRACT: This program scans a specified text file for a specified character
string, and then prints the lines containing that string on the printer.
UTSCAN is to be used with as ASCII saved BASIC program file, or an ASCII
text file.
REQUIRES: IBM BASIC, and printer. EPSON MX-80 is assumed, but other printers
can be used.
INSTRUCTIONS: FROM BASIC, type run"utscan<cr>
M BASIC, and 
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #52, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ABSTRACT.DOC         CRC = 5F 3D

--> FILE:  BEEP    .COM         CRC = 00 00

--> FILE:  POKEPEEK.DOC         CRC = C7 31

--> FILE:  DISRTN  .EXE         CRC = 39 0B

--> FILE:  SHIFTBS .COM         CRC = 00 00

--> FILE:  SHIFTIBM.COM         CRC = 00 00

--> FILE:  TUNE    .COM         CRC = 57 62

--> FILE:  UTSCAN  .BAS         CRC = 2B 6C

--> FILE:  CRETURN .BAS         CRC = 96 B2

--> FILE:  DSKPGM2 .BAS         CRC = 82 AD

--> FILE:  FILTER  .BAS         CRC = B9 5B

--> FILE:  HEX     .BAS         CRC = CA 57

--> FILE:  FIXIT   .BAS         CRC = F1 05

--> FILE:  FREE4   .DOC         CRC = D9 60

--> FILE:  FREE5   .DOC         CRC = 30 96

--> FILE:  PR256   .ASM         CRC = 4A EC

--> FILE:  PATCH256.ASC         CRC = 94 3F

--> FILE:  HIDEFILE.BAS         CRC = 28 7A

--> FILE:  FILEMOD .ASC         CRC = 98 52

--> FILE:  FIXDEL  .EXE         CRC = 39 0B

--> FILE:  PARTCOPY.EXE         CRC = 01 C6

--> FILE:  FREE5   .COM         CRC = 93 CA

--> FILE:  FREE4   .COM         CRC = A0 DF

 ---------------------> SUM OF CRCS = 89 C4

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CRETURN.BAS

{% raw %}
```bas
2 INPUT"INPUT THE FILENAME THAT WAS DOWNLOADED WITHOUT CR (d:filename)  ",A$
4 INPUT"INPUT THE NEW NAME FOR THE DOWNLOADED FILE (d:filename)  ",B$
5 ' CHANGE THE INPUT AND OUTPUT NAMES TO THE NAMES OF THE FILES YOU WANT AS
6 ' INPUT AND OUTPUT  PRIMARILY USED TO COPY FILES WITH NO CARRIAGE RETURNS
7 ' IN THEM SO THAT YOU CAN EDLIN THEM   CONTRIBUTED BY DON WITHROW
10 OPEN A$ FOR INPUT AS #1
20 OPEN B$ FOR OUTPUT AS #2
30 IF EOF(1) THEN 100 ELSE LINE INPUT #1, THELIN$
40 PRINT #2, THELIN$
50 GOTO 30
100 CLOSE:END
120 'This program will add Carriage Returns to a downloaded file that does
130 'not appear to have them when you try to list it using the DOS TYPE
140 'command. The file has to be a basic program, patch or subroutine.
150 'After adding CRs to the file you can then use EDLIN to remove direct
160 'statements from the file.
```
{% endraw %}

## DSKPGM2.BAS

{% raw %}
```bas
10 ' *DISKPGM2.BAS     PROGRAM TO SORT ALL FILES ON A DISK AND CREATE A FILE
20 ' CALLED COPYHHMM.BAT FOR EXECUTION AND COPY IN ALPHABETICAL SEQUENCE
30 CLS
40 PRINT "(C) Copyright 1982,, Richard Schinnell,Rockville, MD. 20853 (301) 949-8848
50 PRINT:LOCATE 10,1,1
60 COLOR 7,0:PRINT" WHICH DISK DRIVE DO YOU WANT TO CHECK> A OR B :":COLOR 7,0
70 RICH$=INKEY$:IF LEN(RICH$)<>1 THEN 70
80 IF LEFT$(RICH$,1)="A" OR LEFT$(RICH$,1) ="B" THEN DRIV$=LEFT$(RICH$,1)+":" ELSE 60
90 ON ERROR GOTO 630
100 KEY OFF
110 FALSE=0:TRUE=NOT FALSE:DEFINT A-Z:L=0:CLS:CODE=43:DIM F$(75)
120 DIM F1$(75)
130 X=0:O=1
140 FILES DRIV$+"*.*"
150 CLINE1 = CSRLIN
160 D=0
170 LOCATE 1,1,1
180 FOR I = 1 TO CLINE1
190 FOR B = 1 TO 66 STEP 13
200 D=D+1
210 FOR N = 0 TO 11
220 T = SCREEN(I,(B+N)):F$(D)=F$(D)+CHR$(T)
230 NEXT N
240 IF LEFT$(F$(D),1)=" " THEN D=D-1 :GOTO 270
250 NEXT B
260 NEXT I
270 G$= DRIV$+"COPY"+MID$(TIME$,1,2)+MID$(TIME$,4,2)+".BAT"
280 LOCATE 15,1:COLOR 26,0:PRINT "ALPHABETIZING THE FILE NAMES ":COLOR 7,0
290 ' THIS ALPHABETIZES THE ARRAY
300 FOR X=1 TO D-1:FOR Y=X+1 TO D:IF F$(Y)<F$(X) THEN SWAP F$(X),F$(Y)
310 NEXT Y:NEXT X
320 FOR I=1 TO D
330 FOR E = 1 TO LEN(F$(I))
340 L$= MID$(F$(I),E,1)
350 IF ASC(L$)<>32 THEN U$=U$+L$
360 NEXT E
370 F$(I)=U$
380 U$=""
390 NEXT I
400 CLS:LOCATE 12,25:COLOR 28,0:PRINT " WRITING FILE  ";G$:COLOR 7,0
410 OPEN  G$ FOR APPEND AS #1
420 PRINT #1,"REM  THIS PGM WILL AUTOMATICALLY COPY A TO B SORTED
430 PRINT #1, "PAUSE
440 FOR I = 1 TO D
450 PRINT #1,"COPY ";F$(I);" B:"
460 NEXT I
470 CLOSE #1
480 CLS:X=1:O=1
490 OPEN G$ FOR INPUT AS #1
500 FOR I = 1 TO D
510 IF I > 23 THEN X = I-23:O=30
520 IF I > 46 THEN X = I-46:O=60
530 X = X +1
540 LOCATE X,O,1
550 LINE INPUT #1,F$(I)
560 PRINT F$(I);
570 NEXT I
580 CLOSE #1
590 LOCATE 25,1,1:COLOR 28,0:PRINT" HIT ANY KEY TO CLEAR SCREEN AND CONTINUE":COLOR 7,0
600 RICHA$=INKEY$:IF RICHA$="" THEN 600
610 CLS
620 END
630 PRINT "ERROR ";ERR;" HAS OCCURED IN LINE # ";ERL
640 END
```
{% endraw %}

## FILTER.BAS

{% raw %}
```bas
10 '    FILTERS  NON-ASCII CHARACTERS FROM A FILE
20 '    USEFUL FOR CLEANING UP NULLS AND CONTROL CHARACTERS FROM A
30 '    TRANSMITTED FILE.
40 '                                       RICHARD STECK  820511
50 '
60 '
70 CLOSE
80 DEFINT A-Z
90 ON ERR GOTO 470
100 KEY OFF
110 CLS:WIDTH 80: LOCATE 12,,1
120 INPUT "   ENTER NAME OF FILE TO BE FILTERED  "; F1$
130 PRINT
140 INPUT "   ENTER DESTINATION FILE NAME        "; F2$
150 IF F1$ = F2$ THEN GOTO 110
160 PRINT: PRINT
170 PRINT TAB(10), "Source file name is: "; TAB(33); F1$
180 PRINT
190 PRINT TAB(10), "Destination file name is: ";TAB(33); F2$
200 PRINT
210 INPUT " Is that correct(Y/N/Q)?  "; ANS$
220 IF (LEFT$(ANS$,1) = "Q") OR (LEFT$(ANS$,1) = "q" )  THEN STOP
230 IF NOT ((LEFT$(ANS$,1) = "Y") OR (LEFT$(ANS$,1) = "y") ) THEN GOTO 160
240 OPEN F1$ FOR INPUT AS #1
250 OPEN F2$ FOR OUTPUT AS #2
260 '
270 WHILE NOT EOF(1)
280    LINE INPUT #1,A$
290 '
300 PRINT  A$ :  '  DISPLAY STRING
310    GOSUB 370
320    PRINT #2,A$
330 WEND
340 CLOSE 1,2
350 STOP
360 '
370 '  FILTER OUT NULLS FROM A$
380 AA$= STRING$(255," ")
390 J = 1
400 FOR I = 1 TO LEN(A$)
410 TEST = ASC(MID$(A$,I,1))
420 IF TEST < 32 AND (TEST < 7 OR TEST > 13) THEN GOTO 430 ELSE MID$(AA$,J,1) =  MID$(A$,I,1) : J = J + 1
430 NEXT I
440 A$ = LEFT$(AA$,J-1)
450 RETURN
460 '
470 PRINT : PRINT "ERROR CONDITION  "; ERR; "  IN LINE NO. "; ERL: PRINT : STOP
```
{% endraw %}

## FIXIT.BAS

{% raw %}
```bas
10 CHECK=0
20 FOR I=1 TO 112
30 READ BYTE
40 CHECK=CHECK >= BYTE
50 NEXT I
60 IF CHECK=242 THEN 100
70 PRINT "ONE OF THE DATA STATEMENTS MAY BE WRONG"
80 PRINT "CHECK LINES 1000-1130, THEN RUN AGAIN"
90 STOP
100 OPEN "PRINTFIX.COM" AS #1 LEN=1
110 FIELD #1,1 AS BYTE$
120 RESTORE
130 FOR I=1 TO 112
140 READ BYTE : LSET BYTE$=CHR$(BYTE) : PUT #1
150 NEXT I
160 CLOSE
170 PRINT "PRINTFIX.COM CREATED"
180 END
1000 DATA 186,112,1,184,0,0,142,216
1010 DATA 184,21,1,163,92,0,140,200
1020 DATA 163,94,0,205,39,251,30,82
1030 DATA 86,190,64,0,142,222,139,242
1040 DATA 209,230,139,148,8,0,11,210
1050 DATA 116,12,10,228,116,12,254,204
1060 DATA 116,44,254,204,116,20,94,90
1070 DATA 31,207,80,238,66,236,168,128
1080 DATA 116,251,176,13,66,238,176,12
1090 DATA 238,88,80,139,148,8,0,66
1100 DATA 236,138,224,128,228,248,90,138
1110 DATA 194,128,244,72,235,216,80,131
1120 DATA 194,2,176,8,238,184,232,3
1130 DATA 72,117,253,176,12,238,235,219
```
{% endraw %}

## FREE4.DOC

{% raw %}
```
		  FREE4.COM - 160K Electronic Disk Drive


FREE4 is an upgrade of FREE1.  Enhancements include simplified
installation, automatic formatting, and optional suppression of the lengthy
text message. The last two enhancements allow FREE4 to be used effectively
in the AUTOEXEC.BAT file.

FREE4 is being distributed under an experimental voluntary pay system.	If
you find the program useful, you are encouraged to send in a contribution
of $15 to:

			     B&L FREE PROGRAMS
			  7337 Northview, Suite B
			     Boise, ID	83704

Comments and criticisms are also welcome.


INSTALLATION:

You need at least 256K of ram on your system to run FREE4.  FREE4 is
installed by entering the name FREE4, like other programs:

				  A>FREE4

A modification is needed on your system disk (the one you boot with) before
FREE4 will run.  If this change is necessary, FREE4 prints a message telling
you the change is to be made, and asks you to hit a key.  FREE4 will make
the change to the diskette in Drive A, and then reset your computer.  You
will then need to run FREE4 one more time.  Be sure the diskette in Drive A
is one you can boot with. This change is a one time thing; after it is
made, you need not worry about it again, as long as you boot with the same
diskette.

NOTE 1: The system diskette may be either single sided (160K) or double
sided (320K).  (The older version, FREE1 only worked with single sided
system diskettes.)

NOTE 2:  This modification changes the system file IBMBIO.COM  This won't
be a problem unless you have other programs (like a hard disk) which also
require modifications to IBMBIO.COM.  We suggest you make a copy of your
system diskette using DISKCOPY before running FREE4.























USING THE ELECTRONIC DISK DRIVE:

Drive C is now an electronic disk drive. You may use a program such as
DISKCOPY or the COPY command to transfer files to the electronic disk. When
using DISKCOPY, DISKCOMP or FORMAT with Drive C, we recommend that you use
the /1 option (described in your DOS manual) to tell the system that drive
C is a single sided drive.

FREE4 can be used in conjunction with FREE5, the NEW RESET PROGRAM, to allow
the contents of Drive C to be maintained during a reset.  If this feature
is desired, it is recommended that FREE4 and FREE5 be included in the
AUTOEXEC.BAT file.



Although FREE4 is a very useful program, we recognize that is does have its
limitations.  B&L Computer Consultants now offers a commercial version of
the Electronic Disk call the B&L MEMORY DRIVE.	This commercial version
allows the diskette size to be varied from 4K to 320K.	It also allows the
electronic disk drive to be drive D.  In fact, you can have two electronic
diskette drives at the same time!  If you are interested in the B&L MEMORY
DRIVE, write or call for details.

```
{% endraw %}

## FREE5.DOC

{% raw %}
```
 
                    B&L FREE PROGRAMS
                    7337 Northview, Suite B
                    Boise, ID  83704
 
                 NEW RESET PROGRAM: FREE5
 
     This program is an update of FREE3.  It allows optional suppression
     of the lengthy text message.
 
     This program adds 3 new reset keys to DOS 1.1 for the IBM Personal
     Computer.  Two of the keys provide new functions; the third
     performs the same function as CTRL/ALT/DEL.  CTRL/ALT/DEL
     remains unchanged.
 
     The three new reset keys are invoked with CTRL/1, CTRL/2, and
     CTRL/3.  CTRL/3 is a mild reset which will return you to the
     DOS prompt (A> ).  CTRL/2 reloads DOS from the diskette in
     drive A but does NOT ERASE MEMORY.  Time does not have to be
     reset when CTRL/2 is used.  CTRL/2 is particularly useful
     with programs such as electronic disks in which important
     information is stored in memory.  It works very well with
     FREE4, another free program offered by B&L FREE PROGRAMS.
     CTRL/1 functions identically to CTRL/ALT/DEL.  DOS is reloaded
     from Drive A, and memory is completely erased.
 
     INSTALLATION:
     FREE5, the new reset program is a DOS program which is called
     from a DOS prompt.  For example, if the current drive is drive
     A and the FREE5 program resides on drive B, you would enter:
 
       A>B:FREE5
 
     It is strongly suggested that you include FREE5 in an
     AUTOEXEC.BAT file on the diskette you boot with (see the DOS
     manual).  This will cause the CTRL/1, CTRL/2, CTRL3 programs
     to always work.
 
 
     As stated in the prologue to the program, this program is
     distributed FREE to interested users.  Those who find the
     program useful are requested to make a $10 voluntary contribution
     to B&L FREE PROGRAMS, 7337 Northview, Boise, ID  83704.  Such
     contributions serve a twofold purpose:
 
             First, the contributions offset the cost of developing the
             program.  If the program is financially successful, you will
             see it grow and improve with time.  Furthermore, the program
             will be made available in different variations and also be
             upgraded to new releases of DOS.  This is important, since
             information concerning future releases of DOS are not made
             available to software developers such as ourselves.  Thus
             it is impossible to tell if this program will work, as is,
             when DOS 2.0 is released.  It is fairly likely that certain
             parts of the program will need to be rewritten.
 
             Second, the contributions received serve as a poll to determine
             which programs are necessary and useful and which are not.  If
             you contribute, that is a vote for the survival of the program.
             Programs which do not have adequate financial support will
             not be supported in the future.
 

```
{% endraw %}

## HEX.BAS

{% raw %}
```bas
100 '
101 ' Binary-to-hex-and-back-again conversion program for the IBM PC
102 '
103 ' Copyright (C) 1982 J. P. Garbers.  All rights reserved.
104 '
105 '
110 LN$="\"+SPACE$(78)+"\"
120 DEF SEG = 64 : KSTATE = PEEK(23) : POKE 23,32 : DEF SEG  ' set NUM LOCK state, saving current state for later
130 TROFF : ON ERROR GOTO 10000
140 DEF FNA(X$) = 40 - LEN(X$)/2
150 DIM PRO$(6)
170 EXPERT = 0 ' rem expert 1 needs no CR after menu choice, expert 0 wants CR
200 GOSUB 2000 ' do the ego module
210 WHILE NOT DONE : GOSUB 3000 : WEND  ' process menu requests
220 GOTO 9900 ' end stuff
2000 ' ego module
2010 COLOR 7,0 : KEY OFF : CLS : LOCATE 12,1 : COLOR 0,7
2020 PRINT " The following program is brought to you by a grant from Userview Corporation.  ";
2025 COLOR 7,0
2030 FOR TIME = 1 TO 1500 : IF INKEY$<>"" THEN TIME = 1500
2040 NEXT TIME : IF EXPERT THEN RETURN ELSE GOSUB 2300 ' title line and cls
2050 INPUT "Would you like instructions";INST$: IF INST$="" THEN INST$="N"
2060 IF LEFT$(INST$,1)<>"Y" AND LEFT$(INST$,1)<>"y" THEN RETURN
2070 LOCATE 8,1
2080 PRINT "This program allows you to convert binary files from one format to"
2085 PRINT "another.   HEX format files may be easily  transmitted over  phone"
2090 PRINT "lines  and  information  services since  they consist  entirely of"
2095 PRINT "readable characters, but they cannot be used directly as commands."
2100 PRINT "COM  and EXE files may be used  directly as DOS commands,  but are"
2105 PRINT "difficult to send and receive without special software."
2110 PRINT
2115 PRINT "    You can use this program  to convert COM and EXE files to HEX"
2120 PRINT "format files to send your files to someone else, and also use"
2125 PRINT "it to convert HEX files you've received to executable format."
2130 PRINT : CV = CSRLIN : GOSUB 2200 : LOCATE CV, 1
2135 PRINT "You'll tell this program what you want to do by selecting choices"
2140 PRINT "from menus.  To make a selection, press the numbered key corres-"
2145 PRINT "ponding to your choice and it will light up.  You may change your"
2150 PRINT "mind by pressing a different number, and the new choice will light"
2155 PRINT "up.  When the correct choice is lit up, press ENTER.  You may also"
2160 PRINT "press ESC to return to the previous menu."
2165 PRINT
2170 PRINT "As you get used to the program, you may wish to use 'expert mode'."
2175 PRINT "In expert mode you don't have to press ENTER after making your"
2180 PRINT "numbered choice, so make sure you press the right key the first"
2185 PRINT "time.":PRINT
2190 GOSUB 2200 : RETURN
2200 ' wait for keypress
2210 LOCATE 24,4:COLOR 0,7
2220 PRINT "Press the SPACE BAR to continue, or ESC to stop using this program.";
2225 PAUSE$=""
2230 WHILE PAUSE$="": PAUSE$=INKEY$: WEND: COLOR 7,0
2235 IF ASC(PAUSE$)=27 THEN 9900 ' stopped in the middle
2240 LOCATE 24,1:PRINT SPACE$(79);: RETURN
2300 ' title line
2310 CLS : IF QUIET THEN RETURN ELSE COLOR 0,7 : PRINT
2320 PRINT USING LN$; "      Binary-to-hex-and-back-again conversion program for the IBM PC";
2330 PRINT USING LN$; "          Copyright (C) 1982 J. P. Garbers.  All rights reserved.";
2340 PRINT: COLOR 7,0 : RETURN
2400 ' convert cap$ to caps
2410 FOR I = 1 TO LEN(CAP$):E$=MID$(CAP$,I,1):IF E$>="a" AND E$<="z" THEN MID$(CAP$,I,1) = CHR$(ASC(E$)-32)
2420 NEXT I : RETURN
3000 '
3001 ' Main menu
3002 '
3020 NC = 5 : TITLE$="Main Menu"
3030 PRO$(1) = "Convert to COM or EXE format (make command file)"
3035 PRO$(2) = "Convert to HEX format (make transmittable file)"
3040 PRO$(3) = "List the files on your diskette"
3045 IF EXPERT THEN PRO$(4)="Turn expert mode OFF" ELSE PRO$(4) = "Turn expert mode ON"
3047 PRO$(5) = "Stop using this program"
3050 GOSUB 8000 : IF CHOICE = 69 THEN 9900
3060 ON CHOICE GOSUB 4000, 5000, 6000, 7000, 7500
3070 RETURN
4000 '
4001 ' Convert to binary format
4002 '
4010 GOSUB 2300
4020 PRINT : PRINT "Enter name of file to convert to executable format.  If you do not specify an"
4025 PRINT "extension, .HEX will be assumed."
4030 PRINT "-> "; : LINE INPUT INFILE$
4040 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+".HEX"
4050 OPEN "I", 1, INFILE$ ' open it up
4060 CAP$=LEFT$(INFILE$, INSTR(INFILE$,".")-1)+".COM":GOSUB 2400:OUTFILE$=CAP$
4070 PRINT "Enter full name of output file (press ENTER alone to use "; OUTFILE$;")"
4080 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
4085 CAP$=OUTFILE$:GOSUB 2400:OUTFILE$=CAP$
4090 LOCATE CSRLIN-1,4 : PRINT OUTFILE$
4100 OPEN "R", 2, OUTFILE$, 1 : FIELD 2, 1 AS O$
4110 NBYTES = 0 : CKSUM = 0 : PRINT : PRINT "Working";
4120 WHILE NOT EOF(1)
4125 LINE INPUT #1, IN$ : IF LEN(IN$)=0 THEN 4180
4130 IF ASC(IN$)=59 THEN GOSUB 4250: GOTO 4180 ' remark handler
4140 FOR I = 1 TO LEN(IN$) STEP 2 : BT = VAL("&H"+MID$(IN$,I,2))
4150 NBYTES = NBYTES + 1 : CKSUM = (CKSUM + BT) MOD 2048 : IF NBYTES MOD 32 = 0 THEN PRINT ".";
4160 LSET O$= CHR$(BT) : PUT 2 : NEXT I
4180 WEND
4190 CLOSE : PRINT : PRINT : PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
4200 GOSUB 2200 : RETURN
4250 ' handle imbedded remarks
4255 IF LEFT$(IN$, 9) <> ";checksum" THEN 4270
4258 PRINT:PRINT :PRINT "Checksum mark found... ";
4260 CK = VAL(RIGHT$(IN$,LEN(IN$)-9))
4265 IF CK = CKSUM THEN PRINT "Checksum verified." ELSE PRINT "Checksum incorrect."
4270 RETURN
4290 RETURN ' go back to the wend
5000 '
5001 ' Convert to hex format
5002 '
5010 GOSUB 2300
5020 PRINT : PRINT "Enter full name of file to convert to .HEX format, including the extension."
5030 PRINT "-> "; : LINE INPUT INFILE$
5040 OPEN "I", 1, INFILE$ : CLOSE 1 ' test to see if it's there
5045 OPEN "R", 1, INFILE$, 1 : FIELD 1, 1 AS I$
5050 NBYTES = 0 : CKSUM = 0
5060 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+"."
5070 CAP$=LEFT$(INFILE$,INSTR(INFILE$,".")-1)+".HEX":GOSUB 2400:OUTFILE$=CAP$
5080 PRINT "Enter full name of output HEX file (press ENTER alone to use "; OUTFILE$;")"
5090 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
5095 LOCATE CSRLIN-1, 4 : PRINT OUTFILE$
5100 OPEN "O", 2, OUTFILE$
5105 PRINT : PRINT "Working";
5110 GET 1
5120 WHILE NOT EOF(1)
5130 PRINT #2, RIGHT$("0"+HEX$(ASC(I$)), 2);
5135 CKSUM = (CKSUM + ASC(I$)) MOD 2048 ' keep checksum running
5140 NBYTES = NBYTES + 1 : IF NBYTES MOD 32 = 0 THEN PRINT #2,:PRINT ".";
5150 GET 1 : WEND  : PRINT #2,
5155 PRINT #2, ";checksum "; CKSUM
5160 CLOSE : PRINT :PRINT: PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
5990 GOSUB 2200 : RETURN
6000 '
6001 ' files listing
6002 '
6020 NC = 3 : TITLE$="Diskette file listing"
6030 PRO$(1) = "List files on drive A" : PRO$(2) = "List files on drive B"
6035 PRO$(3) = "Return to main menu"
6040 GOSUB 8000 : IF CHOICE = 69 OR CHOICE = 3 THEN RETURN
6050 GOSUB 2300 : PRINT
6060 INPUT "What sort of files (i.e. COM, EXE, HEX)?  Press ENTER alone for all files"; EXT$
6065 IF LEN(EXT$)=0 THEN EXT$="*" ELSE IF LEN(EXT$)>3 THEN EXT$=LEFT$(EXT$,3)
6070 CAP$=EXT$ : GOSUB 2400 : EXT$=CAP$
6075 PRINT: IF EXT$="*" THEN PRINT "Files"; ELSE PRINT ".";EXT$;" files:";
6080 PRINT " on drive "; CHR$(64+CHOICE); ":" : PRINT
6190 FILES CHR$(64+CHOICE)+":*."+EXT$
6200 GOSUB 2200 : GOTO 6000
7000 '
7001 ' swap expert mode
7002 '
7010 EXPERT = 1 - EXPERT
7020 LOCATE 23, 10:PRINT "Expert mode is now "; : IF EXPERT THEN PRINT "on." ELSE PRINT "off."
7030 FOR I = 1 TO 1000: NEXT I : RETURN
7500 '
7501 ' end of program
7502 '
7510 CLOSE : DONE = -1: RETURN
8000 '
8001 ' menu processor
8010 GOSUB 2300 : LOCATE 7, FNA(TITLE$) : COLOR 1,7 : PRINT TITLE$ : COLOR 7,0
8020 LONGEST = 0 : FOR I = 1 TO NC : IF LEN(PRO$(I))>LONGEST THEN LONGEST = LEN(PRO$(I))
8030 NEXT I : CHOICE = 0 : XP = 38-LONGEST/2
8040 FOR I = 1 TO NC : LOCATE 8+I*2, XP :IF CHOICE = I THEN COLOR 8,1 ELSE COLOR 7,0
8050 PRINT CHR$(48+I);". "; PRO$(I) : NEXT I : COLOR 7,0
8085 LOCATE 21, 5: IF EXPERT THEN PRINT "EXPERT MODE: Press "; ELSE PRINT "Press ";
8090 IF NC = 2 THEN PRINT "1 or 2 "; ELSE FOR I = 1 TO NC-1 : PRINT CHR$(48+I);", "; : NEXT I : PRINT "or"; NC;
8095 IF EXPERT THEN PRINT "to make your choice." ELSE PRINT "to light up your choice, then press ENTER."
8100 COLOR 7,0: CM$="" : WHILE CM$="" : CM$=INKEY$ : WEND
8105 IF ASC(CM$)=27 THEN CHOICE = 69 : RETURN
8110 CM = ASC(CM$) - ASC("0") :IF CM >=1 AND CM <=NC THEN CHOICE = CM
8115 IF (EXPERT OR CM$=CHR$(13)) AND (CHOICE>0) THEN RETURN ELSE 8040
9900 '
9901 ' closing frame
9902 '
9910 CLS
9920 LOCATE 12,8:PRINT "End of program.  Press the key marked 'F2' to run it again."
9925 KEY 2, "RUN"+CHR$(13) : KEY ON ' make sure that boast holds
9930 LOCATE 22,1 : DEF SEG = 64 : POKE 23, KSTATE 'recover former KB state
9940 END
10000 '
10001 ' error handling stuff
10002 '
10010 IF ERL = 6190 THEN LOCATE CSRLIN-2, 1 : PRINT "No ."; EXT$; " files on this diskette.": RESUME NEXT
10020 IF ERL = 5040 OR ERL = 4050 THEN PRINT : PRINT "Unable to open input file." : CLOSE : RESUME 2200
10030 IF ERL = 5100 OR ERL = 4100 THEN PRINT : PRINT "Unable to open output file." : CLOSE : RESUME 2200
10999 CLS : LOCATE 12, 10: PRINT "Unexpected error #"; ERR; "at line"; ERL: ON ERROR GOTO : END
```
{% endraw %}

## HIDEFILE.BAS

{% raw %}
```bas
10 REM ********************************************************************
20 REM *       HideFile 	    by		  John Vandegrift	  *
30 REM *								  *
40 REM *  This program allows the user to modify diskette files in the	  *
50 REM *  following ways.  First, the user can change a file to a normal  *
60 REM *  file, hidden file, system file or hidden/system file.  The file *
70 REM *  to be changed can be any of the above.  The second function of  *
80 REM *  this program is to allow the user to undelete files.	Although  *
90 REM *  this will undelete files, it is limited in its ability to do so.*
100 REM *  If a file is bigger than 512 bytes (1 sector), then the file    *
110 REM *  will have to be in on contiguous set of sectors, as this program*
120 REM *  doesn't know where else the sectors belonging to deleted file   *
130 REM *  were.  What this program does if a file is bigger than 512 bytes*
140 REM *  is check the sectors following the first sector of the program  *
150 REM *  to see if they are allocated.  If not, it assumes that those    *
160 REM *  sectors belong to that file and uses them.  If they are in use  *
170 REM *  then this program cannot undelete that file.  A user can also   *
180 REM *  use this to scan through the directory of a file.		   *
190 REM *								   *
200 REM *  Limitations:  If the diskette is double-sided, then this reads  *
210 REM *		 the first 64 directory entries. The diskette in   *
220 REM *		 drive A is the diskette to be read, although	   *
230 REM *		 provision is made for reading drive B if the user *
240 REM *		 wants to add the user i/o for the drive. The	   *
245 REM *		 user must have 64k memory and 1 disk drive,	   *
246 REM *		 minimum configuration. 			   *
250 REM ********************************************************************
260 CLEAR ,&H4000:KEY OFF
270 DEF SEG=0
275 GOSUB 1880
280 REM 	 Assembler Routine
290 REM
300 REM  This routine pokes a machine language subroutine into high memory.
310 REM  This subroutine reads and writes the diskette directory and FAT
320 REM  from/to the diskette to/from upper memory.
330 REM  The diskette buffer area starts at &hcc00 and is 3072 bytes.
340 REM  The subroutine is loaded at &hE000 and is 36 bytes.
350 REM
360 DATA &h55,&h06,&hb8,&h00,&h00
370 DATA &h8e,&hc0,&h8b,&hec,&h8b
380 DATA &h76,&h0a,&h8b,&h04,&h8a
390 DATA &he0,&hb0,&h06,&hbb,&h00
400 DATA &hcc,&hb9,&h02,&h00,&h8b
410 DATA &h76,&h08,&h8b,&h14,&hcd
420 DATA &h13,&h07,&h5d,&hca,&h04
430 DATA &h00
440 FOR I=1 TO 36:READ J:SUM=SUM+J:NEXT I
450 IF SUM<>3470 THEN CLS:PRINT "Sum = ";SUM;". Data Error!":STOP
460 RESTORE
470 FOR I=0 TO 35:READ J:POKE &HE000+I,J:NEXT I
480 SUBRT=&HE000
490 REM
500 REM 	Call the routine to read FAT and Directory from diskette
510 REM 	and check for single-sided format.
520 REM
530 A%=2    '2 for read or 3 for write
540 B%=0    '0 for drive A or 1 for drive B
550 CALL SUBRT (A%, B%)
560 IF PEEK(&HCC00)=&HFE THEN NOSIDES=1 ELSE NOSIDES=2
590 REM
600 REM 	Master Menu
610 REM
620 REM  The user may want to follow the options in order of occurance,
630 REM  first reading the directory, then altering it and finally
640 REM  writing it back to the diskette.
650 REM
655 GOSUB 2130
660 CLS:LOCATE 2,37:PRINT "HideFile"
662 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 670
665 PRINT "Double-sided diskette"
670 LOCATE 10,30:PRINT "1. File Directory"
680 LOCATE 11,30:PRINT "2. Alter Directory"
690 LOCATE 12,30:PRINT "3. Update Diskette"
700 LOCATE 13,30:PRINT "4. Help"
705 LOCATE 14,30:PRINT "5. Exit"
710 LOCATE 16,30:INPUT "Choice";IANS
730 ON IANS GOSUB 790,1030,750,2210,1880
735 IF IANS=5 THEN KEY ON:END
740 GOTO 660
745 REM
750 REM 	Put Directory on diskette
751 REM
752 REM    This routine takes the diskette directory and FAT images
753 REM    in upper memory and writes them to the diskette.  Here
754 REM    drive A is assumed, just as it is when data is read from
755 REM    the diskette.
756 REM
760 A%=3:B%=0
770 CALL SUBRT (A%, B%)
780 RETURN
785 REM
790 REM 	Display Files Routine
791 REM
792 REM    This is a simple directory function that reads the directory
793 REM    information from upper memory and displays to the user.  The
794 REM    user can use this to look at all of the directory entries.
795 REM    It will show what type of file is there, whether it has been
796 REM    deleted, or if the entry has never been used.
797 REM
800 CLS
810 FOR I=0 TO 2016 STEP 32
820 IF PEEK(I+&HD000)=&HE5 AND PEEK(I+&HD001)=246 THEN 1010
830 IF PEEK(I+&HD000)=&HE5 THEN DEL$="*del*" ELSE DEL$="     "
840 LOCATE ,15
850 FOR J=0 TO 7:PRINT CHR$(PEEK(J+I+&HD000));:NEXT J
860 PRINT ".";
870 FOR J=8 TO 10:PRINT CHR$(PEEK(J+I+&HD000));:NEXT J
880 A=PEEK(I+&HD00B)
890 IF A=0 THEN PRINT " Normal File       ";
900 IF A=2 THEN PRINT " Hidden File       ";
910 IF A=4 THEN PRINT " System File       ";
920 IF A=6 THEN PRINT " Hidden/System File";
930 MONTH$ = STR$((PEEK(I+&HD019) AND 1)*8 + ((PEEK(I+&HD018) AND 224)/32))
940 IF LEN(MONTH$)>2 THEN MONTH$=RIGHT$(MONTH$,2)
950 DAY$ = STR$(PEEK(I+&HD018) AND 31):IF LEN(DAY$)>2 THEN DAY$=RIGHT$(DAY$,2)
960 YEAR$ = RIGHT$(STR$((INT(PEEK(I+&HD019)/2))+1980),4)
970 THEDATE$=MONTH$+"/"+DAY$+"/"+YEAR$
980 SIZE=PEEK(I+&HD01C)+(PEEK(I+&HD01D)*256)+(PEEK(I+&HD01E)*65536.)
990 PRINT THEDATE$;" ";DEL$;" ";SIZE
995 IF ((I/32)+1) MOD 20 = 0 THEN GOSUB 1010:CLS
1000 NEXT I
1010 LOCATE 23,28:INPUT "Press return to continue",IANS
1020 RETURN
1025 REM
1030 REM	 Alter Directory Entries Routine
1031 REM
1032 REM   Allows the user to page through the entries of the diskette
1033 REM   directory.  The user can change the file attribute from
1034 REM   Normal, Hidden, System, or Hidden/System to any of the same.
1035 REM   The user can also undelete deleted files.
1036 REM   This function does not save these changes to diskette!
1037 REM
1040 I=0
1050 CLS
1060 TITLE$=""
1070 LOCATE 2,30:PRINT "Directory Entry ";I/32+1
1080 IF PEEK(I+&HD000)=&HE5 THEN IF PEEK(I+&HD001)=246 THEN TITLE$="Unused":DEL$="":GOTO 1120 ELSE DEL$="*deleted*" ELSE DEL$=""
1090 FOR J=0 TO 7:TITLE$=TITLE$+CHR$(PEEK(J+I+&HD000)):NEXT J
1100 TITLE$=TITLE$+"."
1110 FOR J=8 TO 10:TITLE$=TITLE$+CHR$(PEEK(J+I+&HD000)):NEXT J
1120 LOCATE 10,20:PRINT TITLE$;
1130 A=PEEK(I+&HD00B)
1140 IF A=0 THEN PRINT " Normal File       ";
1150 IF A=2 THEN PRINT " Hidden File       ";
1160 IF A=4 THEN PRINT " System File       ";
1170 IF A=6 THEN PRINT " Hidden/System File";
1180 PRINT " "+DEL$
1190 LOCATE 23,10:PRINT "D - Delete toggle  F - File toggle  X - eXit  ";CHR$(27);" ";CHR$(26);" - Paging"
1200 A$=INKEY$:IF A$="" THEN 1200
1210 IF A$="X" OR A$="x" THEN RETURN
1220 IF A$="f" OR A$="F" THEN GOSUB 1280:POKE (I+&HD00B),ATTRIBUTE
1230 IF A$="d" OR A$="D" THEN GOSUB 1400:POKE (I+&HD000),LETTER1
1240 IF LEN(A$)=2 THEN A$=RIGHT$(A$,1)
1250 IF A$=CHR$(75) THEN IF I>31 THEN I=I-32
1260 IF A$=CHR$(77) THEN IF I<1985 THEN I=I+32
1270 GOTO 1050
1280 REM	Get New File Attribute
1290 LOCATE 23,10:PRINT STRING$(65,32)
1300 LOCATE 14,30:PRINT "File Attribute:"
1310 LOCATE 16,30:PRINT "1. Normal file"
1320 LOCATE 17,30:PRINT "2. Hidden file"
1330 LOCATE 18,30:PRINT "3. System file"
1340 LOCATE 19,30:PRINT "4. Hidden/System file"
1350 LOCATE 20,30:PRINT "5. Exit"
1355 LOCATE 22,30:INPUT "Choice   ";IANS
1356 IF IANS=5 THEN ATTRIBUTE=PEEK(I+&HD00B):GOTO 1380
1360 IF IANS<1 OR IANS>4 THEN LOCATE 20,35:PRINT STRING$(30,32):GOTO 1280
1370 ATTRIBUTE=(IANS-1)*2
1380 FOR K=14 TO 22:LOCATE K,30:PRINT STRING$(45,32):NEXT K
1390 RETURN
1395 REM
1400 REM	Undelete File
1401 REM
1402 REM   This routine allows the user to undelete a deleted file.
1403 REM   The size of the file is obtained from the directory and the
1404 REM   necessary number of sectors are checked following the first
1405 REM   sector of the file.	If none of the sectors following the
1406 REM   the first sector are allocated, the program assumes those
1407 REM   are the sectors belonging to the deleted program.  Otherwise,
1408 REM   it will not undelete the file!
1409 REM
1410 LOCATE 23,10:PRINT STRING$(65,32)
1420 LETTER1=PEEK(I+&HD000):IF LETTER1=&HE5 THEN 1460
1430 LOCATE 15,25:INPUT "This is not a deleted file. Press return";IANS$
1450 LOCATE 15,25:PRINT STRING$(53,32):RETURN
1460 SIZE=PEEK(I+&HD01C)+(PEEK(I+&HD01D)*256)+(PEEK(I+&HD01E)*65536.)
1470 SECTORS=INT((SIZE-1)/512)+1
1480 LOCATE 20,21:PRINT "File Size is ";SIZE;" bytes,";SECTORS;" sectors."
1490 CLUSTER = PEEK(I+&HD01A)+PEEK(I+&HD01B)*256
1500 LOCATE 21,21:PRINT "Starting Cluster is ";CLUSTER
1510 GOSUB 1600
1520 IF FLAG$="yes" THEN 1530 ELSE PRINT "There are sectors allocated after cluster ";CLUSTER;"!! Press return.";:INPUT IANS:GOTO 1580
1530 LOCATE 15,25:INPUT "Do you want to undelete this file?";IANS$
1540 IF LEFT$(IANS$,1)<>"Y" AND LEFT$(IANS$,1)<>"y" THEN 1580
1550 LOCATE 16,23:INPUT "Enter first letter for filename";IANS$
1560 LETTER1=ASC(IANS$)
1562 IF LETTER1<123 AND LETTER1>96 THEN LETTER1=LETTER1-31
1565 IF LETTER1<65 OR LETTER1>90 THEN 1530
1570 GOSUB 1680
1580 LOCATE 15,25:PRINT STRING$(53,32)
1590 LOCATE 16,25:PRINT STRING$(53,32):RETURN
1595 REM
1600 REM		Cluster's Last Stand(checks clusters)
1601 REM
1602 REM   This is the routine that checks the needed number of sectors
1603 REM   immediatly following the first sector of the file being
1604 REM   undeleted!  FLAG$ contains the indicator as to the outcome
1605 REM   of the check.
1606 REM
1608 IF NOSIDES=1 THEN RANGE=SECTORS ELSE RANGE=INT((SECTORS+1)/2)
1610 FOR INC=1 TO RANGE
1620 TEMP=INT((CLUSTER+INC-1)*1.5)
1630 IF CLUSTER MOD 2 = 1 THEN NEWCLUS=((PEEK(&HCC00+TEMP) AND 240)/16)+PEEK(&HCC00+TEMP+1)*256  ELSE NEWCLUS=PEEK(&HCC00+TEMP)+((PEEK(&HCC00+TEMP+1) AND 15)*256)
1640 IF NEWCLUS<>0 THEN FLAG$="no":GOTO 1670
1650 NEXT INC
1660 FLAG$="yes"
1670 RETURN
1675 REM
1680 REM		Cluster's Last Stand(updates clusters)
1681 REM
1682 REM   This routine reallocates the sectors following the first sector.
1683 REM   Appendix C of the DOS Manual gives the technique for accessing
1684 REM   this information.
1685 REM
1688 IF NOSIDES=1 THEN RANGE=SECTORS-1 ELSE RANGE=INT((SECTORS+1)/2)-1
1690 FOR INC=1 TO RANGE
1700 TEMP=INT((CLUSTER+INC-1)*1.5)
1710 IF (CLUSTER+INC-1) MOD 2 = 1 THEN BYTE1=(PEEK(&HCC00+TEMP) AND 15) + (((CLUSTER + INC) AND 15)*16):BYTE2=INT((CLUSTER+INC)/16):GOTO 1730
1720 BYTE1=(CLUSTER+INC) AND 255:BYTE2=(PEEK(&HCC00+TEMP+1) AND 240) + INT((CLUSTER+INC)/256)
1730 POKE (&HCC00+TEMP),BYTE1:POKE (&HCE00+TEMP),BYTE1
1740 POKE (&HCC00+TEMP+1),BYTE2:POKE (&HCE00+TEMP+1),BYTE2
1750 NEXT INC
1760 REM		poke end of file
1770 TEMP=INT((CLUSTER+RANGE)*1.5)
1780 IF (CLUSTER+RANGE) MOD 2 = 1 THEN BYTE1=(PEEK(&HCC00+TEMP) AND 15) + 240:BYTE2=255:GOTO 1800
1790 BYTE1=255:BYTE2=(PEEK(&HCC00+TEMP+1) AND 240) + 15
1800 POKE (&HCC00+TEMP),BYTE1:POKE (&HCE00+TEMP),BYTE1
1810 POKE (&HCC00+TEMP+1),BYTE2:POKE (&HCE00+TEMP+1),BYTE2
1820 RETURN
1880 REM
1890 REM		Ending Routine
1895 REM
2000 CLS
2010 A$="HideFile":B$="b":C$="y":D$="John Vandegrift":COUNT=10
2020 GOSUB 2060
2030 A$="        ":B$=" ":C$=" ":D$="               ":COUNT=9
2040 GOSUB 2060
2050 LOCATE 23,1:RETURN
2060 FOR I=1 TO COUNT
2070 LOCATE I,37:PRINT A$;
2080 LOCATE 12,4*I:PRINT B$;
2090 LOCATE 12,81-(4*I):PRINT C$;
2100 LOCATE 24-I,33:PRINT D$;
2110 NEXT I
2120 RETURN
2130 REM
2140 REM		Move Header back to top
2150 REM
2160 FOR I=14 TO 13 STEP -1:LOCATE I,33:PRINT SPACE$(15);:NEXT I
2170 A$="HideFile":FOR I=12 TO 3 STEP -1
2180 LOCATE I-1,37:PRINT A$;
2190 LOCATE I,37:PRINT SPACE$(8);
2195 NEXT I
2200 RETURN
2210 REM
2220 REM		Help Routine
2230 REM
2240 CLS:LOCATE 4,10:PRINT "(1)  File Directory lists the directory of the diskette."
2250 LOCATE 7,10:PRINT "(2)  Alter Directory allows the user to change directory attributes."
2260 LOCATE 10,10:PRINT "(3)  Save Changes is the only way to write changes (2) to the diskette."
2270 LOCATE 13,10:PRINT "(4)  EXIT ALLOWS THE USER TO EXIT THE PROGRAM."
2280 LOCATE 16,10:PRINT "(5)  Help is this screen."
2290 LOCATE 19,10:INPUT "Pre
```
{% endraw %}

## POKEPEEK.DOC

{% raw %}
```
 
     Did you know that ... there is a lot of information that may be accessed 
from the ROM BIOS area in your IBM PC, regarding  the operating characteristics
and options found on your own IBM PC?  After careful analysis of data found
in the IBM Technical Reference manual a summary of the most useful information
and where/how it may be referenced has been  prepared. 
 
     By specifying a DEF SEG=&H40 in any BASIC program, it is possible to 
reference the following vectors (fields) in the ROM BIOS area by using a PEEK
function and the following  offsets from the current segment as defined by the
 DEF SEG  statement.
 
     &H0       -  RS232 Addresses on your IBM PC.
                  This will allow you to tell how many (up to
                  four) async cards are attached, if any.
     &H8       -  Printer Addresses on your IBM PC.
                  This will tell you what printer addresses,
                  and how many (up to four) exist. Each is
                  addressed by a two byte Hex value.
     &H10      -  Equipment Flag.
                  This field describes the setting of the
                  options switches. It describes what optional
                  devices are attached to the system. The    
                  following lists the bit-significance of this
     
             field:
                  Bit 0 - indicates that there are diskette 
                          drives on the system.
                  Bit 1 - not used.
                  Bit 2,3 - Planar Ram Size (00=16K 10=32K 01=48K
                            11=64K)
                  Bit 4,5 - Initial Video Mode (00=Unused
                                                10=40x25 Color
                                                01=80x25 Color
                                                11=80x25 Mono)
                  Bit 6,7 - Number of Diskette Drives (00=1 10=2
                            01=3 11=4) only if bit 0 = 1.
                  Bit 8   - Unused
                  Bit 9,10,11 - Number of RS232 Cards attached
                  Bit 12  - Game I/O Attached
                  Bit 13  - Not used
                  Bit 14,15   - Number of printers attached
     &H13      -  Memory Size in K bytes.
     &H15      -  I/O RAM Size in K bytes.
     &H17      -  Keyboard Flag -- the following lists the masks
                  set to describe current keyboard status:
                  Byte 1;
                  &H80 - Insert state active
                  &H40 - Caps Lock State Has been toggled
                  &H20 - Num Lock State has been toggled
                  &H10 - Scroll Lock State has been toggled
                  &H08 - Alternate Shift key depressed
                  &H04 - Control Shift key depressed
                  &H02 - Left Shift key depressed
                  &H01 - Right Shift key depressed
                  Byte 2;
                  &H80 - Insert Key is depressed
                  &H40 - Caps Lock Key is depressed
                  &H20 - Num Lock Key is depressed
                  &H10 - Scroll Lock key is depressed
                  &H08 - Suspend key has been toggled
     &H49      -  Current CRT mode
                  &H00 - 40x25 BW  
                  &H01 - 40x25 Color
                  &H02 - 80x25 BW
                  &H03 - 80x25 Color
                  &H04 - 320x200 Color
                  &H05 - 320x200 BW
                  &H06 - 640x200 BW
                  &H07 - 80x25 B&W Card -- specialized use, used
                         internal to the video routines.
     &H4A      -  Number of CRT columns
     &H50      -  Cursor Position (one of eight)
     &H60      -  Current cursor mode 
     &H6C      -  Low word of Timer count
     &H6E      -  High word of Timer count
     &H71      -  &H07 - Break key depressed
     &HFA6E    -  Beginning of character regen memory
     &HFF53    -  PRTSC routine address
                                                                             
                                                                             
                                                                             
           
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
                                                             
      
```
{% endraw %}

## PR256.ASM

{% raw %}
```

 Command ? re pr256.asm

PAGE
PAGE 64,132
;
;
TITLE PR256 - IBM CHAR SET FOR MX100 by Tim Field
;***********************************************
;
;PR256...Copyright by Tim Field, 1982
;
;IBM CHARACTER SET - This program resides on the IBM personal
;  computer. All 256 of the characters used by the IBM will
;  be available to be printed out using the MX100 or MX80 with
;  graphics option. The nonstandard characters are printed
;  automatically by any process or program executing the IBM
;  interrupt #17H (normal print routine in BIOS).
;
;************************************************


;************************************
;
; DEFINE CONSTANTS USED BY PROGRAM
;
;************************************



INTADDR		EQU	7H * 4	;Address of interrupt vector addr
NEWINT		EQU	027H		;DOS interrupt code for "End but stay resident"
ESC_CHAR	EQU	1BH		;ASCII escape character
NUL		EQU	0		;ASCII NUL character

;
;Define mask bytes used to turn on and off SYS_MODE for each printer
;
MASK$BIT_GRAF	EQU	11111110B	;Printer in bit graphics mode
MASK$SEC_BITG	EQU	11111101B	;Next char is 2nd graf char count
MASK$FST_BITG	EQU	11111011B	;Next char is 1st graf char count
MASK$NEW_INTL	EQU	11110111B	;Next char international char defn
MASK$ESC_SING	EQU	11101111B	;Expect one more control char
MASK$ESC_NULL	EQU	11011111B	;Expect control char until NULL found
MASK$ESC_C	EQU	10111111B	;One more control char if non-zero, else 2 more
MASK$PREV_ESC	EQU	01111111B	;Next char is escape defn char

;
;Define structure used to hold each of the three possibly existing
;printers.
;
PRINTERS STRUC
	SYS_MODE	DB	0	;Stores bits pertaining to current printer mode
	GRAF_CNT	DW	0	;16 bit count of grf chars....for bit-graf mode
	FULL_INSTR	DB	0	;<0 :CR/LF mode, >0: no control codes, = 0: normal
	GRAF_PRINTER	DB	0	;=0 Printer has Epson graphisc, <>0: No
	INTLSET		DB	0	;0-7 value of current international set for Epson
PRINTERS ENDS
	


;**********************************
;
; Define a temporary stack. Required for initialization
; of program only
;	
;**********************************

STACK SEGMENT PARA STACK
	DB	10 DUP('STACK   ')
STACK ENDS

;**********************************
;
; Start code area !!
;
;**********************************

CODE SEGMENT
ASSUME CS:CODE,DS:CODE,SS:STACK,ES:NOTHING

PR256 PROC FAR
;
; Initialization code...used only once, on system startup
;
CALL INIT_CODE	;Call initialization routine
RET		;Return from initialization

;***********************************
;
;Define storage areas here
;
;***********************************

DWORD_ADDR	DW	0,0		;Save address to BIOS print routine here
TMPBYTE		DB	9		;A multiplicand
PR1		PRINTERS <>		;Set aside area for three printers
PR2		PRINTERS <>		;
PR3		PRINTERS <>		;

;************************************
;Start of actual print runtime code
;************************************

START_UP:		;Start of actual print routine
	PUSH	DS			;Save segment register
	PUSH	SI			;
	PUSH	BX			;
	PUSH	CX			;
	PUSH	DX			;
	PUSH	AX			;
	MOV	BX,CS			;
	MOV     DS,BX			;
	CMP	AH,0			;Is this  to print out a char?	JE	PCHAR			;Br if yes
	CALL	PR2BYTE			;Otherwise just print char
	JMP	DONE			;  and exit

PCHAR:
	MOV	BX,OFFSET PR1		;Now get offset to printer structure
	CMP	DL,0			;DX contains 0,1,2 for printer number
	JE	T1			;BR if printer 0
	ADD 	BX,5			;Move to next printer area
	CMP	DL,1			;Is it printer 1?	JE	T1			;Br if yes
	ADD 	BX,5			;Offset to printer 2 structure

T1:

	CMP GRAF_PRINTER[BX],0		;Are we talking to a printer with Epson graphics?	JNE MORE$TO$COME		;Send out char if not graphics printer
	MOV CH,SYS_MODE[BX]		;Get system mode bits
	RCR CH,1			;BIT_GRAF_MODE?	JNC NOT$BIT$MODE		;Br if not
	;
	;We are in bit-graphics mode...decrement mode count and send character
	;as is to printer.
	;
	DEC GRAF_CNT[BX]		;Decrement count of graphics characters left
	JNZ MORE$TO$COME		;Are we done with graphics mode?	AND SYS_MODE[BX],MASK$BIT_GRAF  ;If yes, clear bit to indicate done

MORE$TO$COME:

	JMP SHORT SENDCHAR		;Send out bit-graf mode character

NOT$BIT$MODE:

	CMP	FULL_INSTR[BX],1	;Are we in "Full Instr Set" mode?	JE	TO$CHKCHAR		;Br if yes...no "control char" check
	JL	NORM_MODE		;Br if normal mode
	;
	;If reach here, we are in CR/LF mode. The only "printer action"
	;codes expected here are CR (ASCII 13) and LF (ASCII 10).
	;All other ASCII values are interpreted as characters to be printed.
	;
	CMP	AL,13			;Is Carriage Return char?	JE	SENDCHAR		;Send to printer if yes
	CMP	AL,10			;Is Line Feed char?	JE	SENDCHAR		;Send to printer if yes

TO$CHKCHAR:
	JMP	CHKCHAR			;Else print character from character set
NORM_MODE:
	RCR	CH,1			;SEC_BITG_CNT?	JNC	NOT$SEC			;Br if no
	;
	;If reach here, the current character is the second count value for
	;the bit-graphics mode. It is the high order byte and must be added
	;to the low order byte which was the previous character.
	;
	MOV	(FULL_INSTR-1)[BX],AL		;Save Graf Cnt
	AND	SYS_MODE[BX],MASK$SEC_BITG	;Turn off SEC_BITG_CNT bit
	CMP 	GRAF_CNT[BX],0			;Is count equal 0?	JLE	SENDCHAR			;If yes, don't set Bit-graf mode
	OR	SYS_MODE[BX],NOT MASK$BIT_GRAF	;Indicate in Bit-graf mode
	JMP	SHORT SENDCHAR			;Send out count character
NOT$SEC:

	RCR	CH,1			;FST_BITG_CNT?	JNC	NOT$FST			;Br if not
	;
	;If this bit is set, it indicates that the last character printed out
	;was "Start Bit Graphics mode" indication. The current character is
	;to be used as the low order byte of the count of bit-graphics characters
	;to be sent. The next character is the high-order byte for the
	;count.
	;
	AND	SYS_MODE[BX],MASK$FST_BITG	;Turn off FST_BITG_CNT bit
	OR	SYS_MODE[BX],NOT MASK$SEC_BITG	;Turn on the SEC_BITG_CNT bit
	MOV 	GRAF_CNT[BX],AX			;Save low order count
	JMP	SHORT SENDCHAR			;Send count to printer

NOT$FST:
	RCR	CH,1				;NEW_INTL?	JNC	NOT$INTL			;Br if not
	;
	;If this bit is set, it indicates that we previously saw request for a
	;new "International" character set to be used. The current byte is
	;expected to be a value from 0 to 7 indicating the set to be used. If
	;an error is found, no set change is accomplished.
	;
	CMP AL,0				;Is current character less than 0?	JL	NOT$VALID			;Br if yes
	CMP	AL,7				;Is it greater than 7?	JG	NOT$VALID			;Br if yes
	;
	;If reach here,have valid set...update in memory
	;
	MOV 	INTLSET[BX],AL			;

NOT$VALID:
	AND	SYS_MODE[BX],MASK$NEW_INTL	;Clear NEW_INTL bit
	JMP	SHORT SENDCHAR			;Send out value to printer

NOT$INTL:
	RCR	CH,1				;ESC_SINGLE mode?	JNC	NOT$ESC_SING			;Br if not
	AND	SYS_MODE[BX],MASK$ESC_SING	;Turn off ESC_SINGLE mode
	JMP	SHORT SENDCHAR			;Send character to printer

NOT$ESC_SING:

	RCR	CH1S				;ESC_NULL mode?	JNC	NOT$ESC_NULL			;Br if not
	CMP	AL,NUL				;Is this a NULL character?	JNE	SENDCHAR			;If not, print out character
	AND	SYS_MODE[BX], MASK$ESC_NULL	;Otherwise turn off ESC_NULL mode first
	JMP	SHORT SENDCHAR			;

NOT$ESC_NULL:

	RCR	CH,1				;ESC_C mode?	JNC	NOT$ESC_C			;Br if not
	CMP	AL,NUL				;Is character NUL?	JNE	NOT$NUL				;Skip next if not
	OR	SYS_MODE[BX],NOT MASK$ESC_SING	;Expect one more control character

NOT$NUL:

	AND 	SYS_MODE[BX],MASK$ESC_C		;Turn off ESC_C mode

SENDCHAR:		;Print out current character and return

	CALL 	PRBYTE				;Call print routine
	JMP	DONE				;Go to end

NOT$ESC_C:

	RCR	CH,1				;PREV_ESC mode?	JNC	NOT$ESC				;Br if not
	;
	;If PREV_ESC bit is set, it indicates that the last character seen by
	;this printer was an "Escape" code. We will now look and see if it is
	;a control code that we need to remember. These are:
	;	ESC "L" - Puts printer in dual density bit graphics mode
	;	ESC "K" - Puts printer in single density bit graphics mode
	;	ESC "R" - Selects an international character set in printer
	;
	;
	;In addition to this codes that we need to remember, we have some
	;codes which set a temporary mode. These temporary modes are:
	;
	;	"ESC_SINGLE" :Expect one more control code. This is to be
	;		      sent to printer.
	;	"ESC_NULL"   :Expect control codes to continue until a NUL
	;		      character (ASCII 0) is received
	;	"ESC_C"	     :Expect one more control code. If that code is
	;		      an ASCII 0, expect one more after that.
	;
	;The escape sequences which set these modes are:
	;
	;	ESC "A"	-  ESC_SINGLE mode
	;	ESC "D"	-  ESC_NULL mode
	;	ESC "Q" -  ESC_SINGLE mode
	;	ESC "B"	-  ESC_NULL mode
	;	ESC "C"	-  ESC_C mode
	;	ESC "N"	-  ESC_SINGLE mode
	;
	AND 	SYS_MODE[BX],MASK$PREV_ESC	;Turn off PREV_ESC mode bit
	CMP 	AL,"L"				;CTRL-L?	JE	SET$BIT_GRAF			;Br if yes
	CMP	AL,"K"				;CTRL-K?	JNE	ARND$BIT_GRAF			;Br if not

SET$BIT_GRAF:

	OR 	SYS_MODE[BX],NOT MASK$FST_BITG	;Indicate that next char is FST_BITG_CNT
	JMP	SHORT SENDCHAR			;Done, send out

ARND$BIT_GRAF:

	CMP	AL,'R'				;CTRL-R?	JNE	NOT$INT				;Br if not
	OR	SYS_MODE[BX],NOT MASK$NEW_INTL	;Indicate next char is NEW_INTL bit
	JMP 	SHORT SENDCHAR			;Send out character

NOT$INT:

	CMP	AL,'A'				;ESC A?	JE	DO$ESC_SINGLE			;Br if yes
	CMP	AL,'Q'				;ESC Q?	JE	DO$ESC_SINGLE			;Br if yes
	CMP	AL,'N'				;ESC N?	JNE	NOT$SINGLE			;Br if not ESC_SINGLE mode

DO$ESC_SINGLE:			;Set ESC_SINGLE mode

	OR 	SYS_MODE[BX],NOT MASK$ESC_SING	;
	JMP	SHORT SENDCHAR			;Print out char

NOT$SINGLE:			;Check for ESC_NULL mode now

	CMP	AL,'D'				;ESC D?	JE	DO$ESC_NULL			;Br if yes
	CMP	AL,'B'				;ESC B?	JNE	NOT$NULL			;Br if not ESC_NULL mode

DO$ESC_NULL:			;Set ESC_NULL mode

	OR	SYS_MODE[BX],NOT MASK$ESC_NULL	;
	JMP 	SHORT SENDCHAR			;Print out char

NOT$NULL:			;Check for ESC_C mode now

	CMP	AL,'C'				;ESC C?	JNE	NOT$ESCC			;Br if not
	OR	SYS_MODE[BX],NOT MASK$ESC_C	;Set ESC_C mode bit

NOT$ESCC:			;Do not care what type of char this is...print it

	JMP	SHORT SENDCHAR

NOT$ESC:			;Previous character was not an ESCAPE control char
		;
		;Is this an ESCAPE code?		;

	CMP	AL,ESC_CHAR			;
	JNE NESC				;Br if not
	OR SYS_MODE[BX],NOT MASK$PREV_ESC	;Set escape found bit
	JMP	SHORT SENDCHAR			;Send out character

NESC:
	;
	;See if we have any standard control codes...ASCII 7 - 20
	;

	CMP	AL,07H				;Is char less than 7?	JL	CHKCHAR				;Br if yes, not control code
	CMP	AL,14H				;Is char less than 14H?	JLE	SENDCHAR			;If not, it is a control code...print it

CHKCHAR:
	;
	;Here we check to see if the character to be printed is in the range
	;of 20H to 7EH (ASCII value of the character to be printed.) If in
	;that range, use standard EPSON character set. Otherwise, we have
	;a special character to print.
	;

	MOV	AH,0				;Make sure nothing is in upper byte
	CMP	AX,20H				;Is character less than 20H?	JL	BIT$CHAR			;Br if yes, special character
	CMP 	AX,7EH				;
	JLE SENDCHAR				;Not a special character, just print it
	SUB	AL,7EH-20H+1			;Subtract non-special character set out

BIT$CHAR:
		;
		;See if current character is part of the Epson's international character
		;set (If its offset into BITTYP array is 0, international)
		
	PUSH BX					;Save offset to storage area
	PUSH	AX				;Save current character
	MOV 	BX,AX				;
	MOV	CL,3				;Shift count
	SHR	BL,CL				;Shift lower three bits from AL
	MOV	CH,BITTYP[BX]			;Get byte containing type bit
	SHL	BL,CL				;Move AL back to original position
	;Note: we have now lost the three lower bits from AL.
	NEG	BX				;Take 2's compliment of BL
	ADD BL,AL				;Add original contents of AL to negated
						;  value to get the three bits
	INC BL					;This is now our index to type bit
	MOV	CL,BL				;Let's use value as shift count
	MUL TMPBYTE				;Offset into array
	MOV	SI,AX				;Get index into array
	POP	AX				;Once again, get original character
	SHL	CH,CL				;Recall CH holds bit-type byte
	JC	DO$BIT_GRAF			;Carry now is type of the char
	;
	;Well, we see that the bit type was 0, so we are to specify a character
	;from the Epson international character set. To determine which, we
	;expect the first byte in BITVAL array to tell us which international
	;set to use and the second byte to tell us the character to print.
	;
	MOV	CH,BITVAL[SI]			;Get character set
	CMP	INTLSET[BX],CH			;Is this the set we are now using?	JNE	NEW$INTSET			;Br if not
	POP	BX				;Keep stack clean
	MOV	AL,BITVAL[SI][1]		;If yes, just send out character
	JMP	SENDCHAR			;

NEW$INTSET:		;Must temporarily set up new international set

	MOV	AL,ESC_CHAR			;Print out "Esc" char
	CALL	PRBYTE				;
	MOV	AL,'R'				;Send out new international signal
	CALL	PRBYTE				;
	MOV AL,CH				;Print out character set to use
CALL 	PRBYTE					;
	MOV	AL,BITVAL[SI][1]		;Get intl character to print
	CALL	PRBYTE				;
	MOV	AL,ESC_CHAR			;Now restore original character set
	CALL	PRBYTE				;
	MOV	AL,'R'				;
	CALL 	PRBYTE				;
	POP	BX				;Restore address to store area
	MOV	AL,INTLSET[BX]			;Set type
	CALL 	PRBYTE				;
	JMP	DONE				;We are done so exit program

DO$BIT_GRAF:	;Special bit-graphics mode

	POP	BX			;Restore to keep stack straight
	PUSH	AX				;Save current character for indexing
	MOV	AL,ESC_CHAR			;Put printer in dual density bit mode
	CALL 	PRBYTE				;
	MOV	AL,'L'				;
	CALL 	PRBYTE				;
	MOV	AL,12				;Each graphics character consists of
	CALL	PRBYTE				;  exactly nine columns of bits followed
	MOV	AL,0				;  by 3 blank columns (12 columns total)
	CALL	PRBYTE				;
	POP	AX
	CMP	AX,0B3H-(7EH-20H+1)		;See if in extended set
	JL	NON_EXTND			;Br if not
	CMP	AX,0E0H-(7EH-20H+1)		;
	JGE	NON_EXTND			;
		;
		;The character is in the "extended" set. (ASCII 176 to 223)
		;
	MOV 	AL,BITVAL[SI]			;Pre-extend first column
	CALL	PR9BYTS				;Print out character
	JMP	AROUND				;Move around non-extended set

NON_EXTND:	;Character is non-extended

	MOV	AL,0				;First column is blank
	CALL 	PR9BYTS				;Print out character
	MOV	AL,0				;Last two columns are blank

AROUND:

	CALL 	PRBYTE				;Print out last two columns
	CALL	PRBYTE				;

DONE:		;Exit program

	POP	DX				;Restore AL without disturbing  AH
	MOV	AL,DL				;
	POP	DX				;Restore registers
	POP	CX				;
	POP	BX				;
	POP	SI				;
	POP 	DS				;
	IRET					;Return from interrupt

PR256 ENDP			; Done with main routine !!!

;**************************************
;
;   PRBYTE - Clears current value AH and prints out character in AL
;
;**************************************


PRBYTE PROC NEAR

	MOV 	AH,0				;Clear out for printing w/BIOS
	CALL 	PR2BYTE				;Do actual printing of char
	RET					;Done

PRBYTE ENDP
;**************************************************
;
;   PR2BYTE - Calls IBM's BIOS print routine to print out contents of AX
;
;**************************************************

PR2BYTE PROC NEAR

	PUSH 	DS				;
	PUSH 	SI
	PUSHF					;IBM print proc expects interrupt call
	MOV	SI,SEG DWORD_ADDR		;Get segment to ROM code
	MOV	DS,SI				;
	MOV	SI,OFFSET DWORD_ADDR		;Get address to ROM code for print
	CALL 	DWORD PTR [SI]			;Call print routine
	POP 	SI
	POP	DS
	RET					;Return

PR2BYTE ENDP

;********************************************
;
;   PR9BYTS - Prints out a graphics character using BITVAL table below.
;	      On entry, AL contains byte value of first column to be printed.
;	      Next nine colums of characters are fetched from indexing thru
;	      SI (which must be initialized by calling routine) into the
;	      BITVAL table.
;
;*********************************************

PR9BYTS PROC NEAR

	CALL PRBYTE				;Print out first column
	MOV	CX,9				;Loop through 9 columns

LOOP$SEND:

	MOV	AL,BITVAL[SI]			;Get next column to print
	CALL	PRBYTE				;Print it out
	INC	SI				;Move to next column
	LOOP	LOOP$SEND			;Loop until done
	RET					;Done, return

PR9BYTS ENDP
;***********************************
;
; Define characters...9 bytes per character
;
;***********************************
.RADIX 16				;All values are in hexadecimal
BITVAL DB	000,000,000,000,000,000,000,000,000	;0 (Decimal ASCII)
	DB	03C,042,089,0A5,085,0A5,089,042,03C	;1
	DB	03C,07E,093,9BH,0FBH,9BH,093,07E,03C	;2
	DB	60,0F0,0F8,07C,07E,07C,0F8H,0F0,060	;3
	DB	000,010,038,07C,0FE,07C,038,010,000	;4
	DB	010,038,038,0D0,0EE,0D0,038,038,010	;5
	DB	000,000,030,072,0FE,072,030,000,000	;6
	DB	000,000,030,078,078,078,030,000,000	;7
	DB	0FF,0FF,0CF,087,087,087,0CF,0FF,0FF	;8
	DB	000,018,024,042,042,042,024,018,000	;9
	DB	0FF,0E7,0DBH,0BDH,0BDH,0BDH,0BH,0E7,0FF	;10
	DB	000,00C,012,012,012,0B2,0CC,0E0,000	;11
	DB	000,000,064,094,09F,094,064,000,000	;12
	DB	000,006,006,0FE,0A0,0A0,0A0,0E0,000	;13
	DB	006,006,0FE,0A0,0A0,0A0,0AC,0AC,0FC	;14
	DB	054,010,038,028,0EE,028,038,010,054	;15
	DB	000,0FE,07C,07C,038,038,010,010,000	;16
	DB	000,010,010,038,038,07C,07C,0FE,000	;17
	DB	000,000,028,06C,0FE,06C,028,000,000	;18
	DB	000,0F2,0F2,000,000,000,0F2,0F2,000	;19
	DB	060,090,090,0FE,080,080,0FE,080,080	;20
	DB	001,5DH,000,000,000,000,000,000,000	;21 * FRANCE -5D
	DB	000,03C,03C,03C,03C,03C,03C,03C,000	;22
	DB	000,001,029,6DH,0FF,6DH,029,001,000	;23
	DB	000,000,020,060,0FE,060,020,000,000	;
	DB	000,000,008,00C,0FE,00C,008,000,000	;25
	DB	000,010,010,010,010,07C,038,010,000	;26
	DB	000,010,038,07C,010,010,010,010,000	;27
	DB	000,000,038,008,008,008,008,000,000	;28
	DB	010,038,07C,010,010,010,07C,038,010	;29
	DB	000,004,00C,01C,03C,01C,00C,004,000	;30
	DB	000,020,030,038,03C,038,030,020,000	;31
	DB	000,006,00A,012,022,012,00A,006,000	;127
	DB	001,05C,000,000,000,000,000,000,000	;128 * FRANCE - 5C
	DB	002,7DH,000,000,000,000,000,000,000	;129 * GERMANY -7D
	DB	001,7BH,000,000,000,000,000,000,000	;130 * FRANCE -7B
	DB	005,7DH,000,000,000,000,000,000,000	;131 * SWEDEN -7D
	DB	002,7BH,000,000,000,000,000,000,000	;132 * GERMANY -7B
	DB	001,040,000,000,000,000,000,000,000	;133 * FRANCE -40
	DB	002,007,055,0F5,0B5,0B5,0FE,04F,001	;134
	DB	000,071,089,089,08F,088,088,050,000	;135
	DB	000,00E,05F,0D5,095,095,0D5,5DH,00C	;136
	DB	000,01C,0BE,0AA,02A,02A,0AA,0BA,01B	;137
	DB	001,7DH,000,000,000,000,000,000,000	;138 * FRANCE -7D
	DB	000,0A2,0A2,03E,01E,082,082,000,000	;139
	DB	000,052,0D2,09E,08E,0C2,042,000,000	;140
	DB	000,012,092,0DE,04E,002,002,000,000	;141
	DB	002,5BH,000,000,000,000,000,000,000	;142 * GERMANY -5B
	DB	003,047,04E,0BA,0B2,0BA,04E,047,003	;143
	DB	005,040,000,000,000,000,000,000,000	;144 * SWEDEN -40
	DB	004,7BH,000,000,000,000,000,000,000	;145 * denmark - 7B
	DB	004,5BH,000,000,000,000,000,000,000	;146 * DENMARK -5B
	DB	000,00E,05F,0D1,091,091,0D1,05F,00E	;147
	DB	002,07C,000,000,000,000,000,000,000	;148 * GERMANY -7C
	DB	000,00E,01F,091,0D1,051,011,01F,00E	;149
	DB	000,05E,0DF,081,081,0C1,05E,01F,001	;150
	DB	001,07C,000,000,000,000,000,000,000	;151 * FRANCE -7C
	DB	020,0B0,099,00F,006,00C,098,0B0,020	;152
	DB	002,05C,000,000,000,000,000,000,000	;153 * GERMANY 5C
	DB	002,5DH,000,000,000,000,000,000,000	;154 * GERMANY -5D
	DB	018,03C,066,042,0FF,0FF,042,066,024	;155
	DB	003,023,000,000,000,000,000,000,000	;156 * ENGLAND -23
	DB	000,000,094,054,03F,054,094,000,000	;157
	DB	007,023,000,000,000,000,000,000,000	;158 * SPAIN -23
	DB	000,004,012,012,07C,090,090,040,000	;159
	DB	004,00E,02A,06A,0EA,0AA,03C,01E,002	;160
	DB	000,012,012,05E,0CE,082,002,000,000	;161
	DB	000,00E,01F,011,051,0D1,091,01F,00E	;162
	DB	000,01E,01F,041,0C1,081,01E,01F,001	;163
	DB	007,07C,000,000,000,000,000,000,000	;164 * SPAIN -7C
	DB	007,05C,000,000,000,000,000,000,000	;165 * SPAIN -5C
	DB	000,012,0BA,0AA,0AA,0AA,072,07A,00A	;166
	DB	000,072,0FA,08A,08A,08A,08A,0FA,072	;167
	DB	007,5DH,000,000,000,000,000,000,000	;168 * SPAIN -5D
	DB	000,000,038,020,020,020,020,000,000	;169
	DB	000,000,020,020,020,020,038,000,000	;170
	DB	000,042,0F4,008,010,029,053,015,009	;171
	DB	000,042,0F4,008,012,026,04A,01F,002	;172
	DB	007,5BH,000,000,000,000,000,000,000	;173 * SPAIN -5B
	DB	010,038,06C,044,010,038,06C,044,000	;174
	DB	000,044,06C,038,010,044,06C,038,010	;175
	DB	000,055,000,0AA,000,055,000,0AA,000	;176
	DB	055,0AA,055,0AA,055,0AA,055,0AA,055	;177
	DB	0FF,0AA,0FF,055,0FF,0AA,0FF,055,0FF	;178
	DB	000,000,000,000,0FF,000,000,000,000	;179
	DB	008,008,008,008,0FF,000,000,000,000	;180
	DB	028,028,028,028,0FF,000,000,000,000	;181
	DB	008,008,008,0FF,000,000,0FF,000,000	;182
	DB	008,008,008,00F,008,008,00F,000,000	;183
	DB	028,028,028,028,03F,000,000,000,000	;184
	DB	028,028,028,0EF,000,000,0FF,000,000	;185
	DB	000,000,000,0FF,000,000,0FF,000,000	;186
	DB	028,028,028,02F,020,020,03F,000,000	;187
	DB	028,028,028,0E8,008,008,0F8,000,000	;188
	DB	008,008,008,0F8,008,008,0F8,000,000	;189
	DB	028,028,028,028,0F8,000,000,000,000	;190
	DB	008,008,008,008,00F,000,000,000,000	;191
	DB	000,000,000,000,0F8,008,008,008,008	;192
	DB	008,008,008,008,0F8,008,008,008,008	;193
	DB	008,008,008,008,00F,008,008,008,008	;194
	DB	000,000,000,000,0FF,008,008,008,008	;195
	DB	008,008,008,008,008,008,008,008,008	;196
	DB	008,008,008,008,0FF,008,008,008,008	;197
	DB	000,000,000,000,0FF,028,028,028,028	;198
	DB	000,000,000,0FF,000,000,0FF,008,008	;199
	DB	000,000,000,0F8,008,008,0E8,028,028	;200
	DB	000,000,000,03F,020,020,02F,028,028	;201
	DB	028,028,028,0E8,008,008,0E8,028,028	;202
	DB	028,028,028,02F,020,020,02F,028,028	;203
	DB	000,000,000,0FF,000,000,0EF,028,028	;204
	DB	028,028,028,028,028,028,028,028,028	;205
	DB	028,028,028,0EF,000,000,0EF,028,028	;206
	DB	028,028,028,0EF,000,000,0EF,028,028	;207
	DB	008,008,008,0F8,008,008,0F8,008,008	;208
	DB	028,028,028,028,02F,028,028,028,028	;209
	DB	008,008,008,00F,008,008,00F,008,008	;210
	DB	000,000,000,0F8,008,008,0F8,008,008	;211
	DB	000,000,000,000,0F8,028,028,028,028	;212
	DB	000,000,000,000,03F,028,028,028,028	;213
	DB	000,000,000,00F,008,008,00F,008,008	;214
	DB	008,008,008,0FF,008,008,0FF,008,008	;215
	DB	028,028,028,028,0FF,028,028,028,028	;216
	DB	008,008,008,008,0F8,000,000,000,000	;217
	DB	000,000,000,000,00F,008,008,008,008	;218
	DB	0FF,0FF,0FF,0FF,0FF,0FF,0FF,0FF,0FF	;219
	DB	00F,00F,00F,00F,00F,00F,00F,00F,00F	;220
	DB	0FF,0FF,0FF,0FF,0FF,000,000,000,000	;221
	DB	000,000,000,000,000,0FF,0FF,0FF,0FF	;222
	DB	0F0,0F0,0F0,0F0,0F0,0F0,0F0,0F0,0F0	;223
	DB	000,03C,042,042,042,03C,024,042,000	;224
	DB	002,07E,000,000,000,000,000,000,000	;225 * GERMANY -7E
	DB	000,07E,040,040,040,040,040,070,000	;226
	DB	000,040,07E,040,040,040,07E,040,000	;227
	DB	082,0C6,0AA,092,082,082,082,0C6,000	;228
	DB	000,03C,042,042,042,07C,040,040,040	;229
	DB	000,001,07E,004,004,004,004,078,000	;230
	DB	000,020,040,040,03E,020,040,040,000	;231
	DB	000,099,0A5,0A5,0E7,0A5,0A5,099,000	;232
	DB	000,038,054,092,092,092,054,038,000	;233
	DB	002,03A,046,080,080,080,046,03A,002	;234
	DB	000,000,04C,0B2,092,092,08C,000,000	;235
	DB	038,044,044,044,038,044,044,044,038	;236
	DB	000,03A,044,04C,054,064,044,0B8,000	;237
	DB	000,000,038,054,092,082,000,000,000	;238
	DB 	000,01E,020,040,040,040,020,01E,000	;239
	DB	000,054,054,054,054,054,054,054,000	;240
	DB	000,022,022,022,0FA,022,022,022,000	;241
	DB	000,002,08A,08A,052,052,022,022,000	;242
	DB	000,022,022,052,052,08A,08A,002,000	;243
	DB	000,000,000,000,07F,080,080,060,000	;244
	DB	000,006,001,001,0FE,000,000,000,000	;245
	DB	000,010,010,010,054,010,010,010,000	;246
	DB	000,024,048,048,024,012,012,024,000	;247
	DB	000,000,030,048,048,048,030,000,000	;248
	DB	000,000,030,078,078,078,030,000,000	;249
	DB	000,000,000,010,038,010,000,000,000	;250
	DB	010,010,010,008,004,07E,040,040,040	;251
	DB	080,070,080,080,078,000,000,000,000	;252
	DB	044,08C,094,064,000,000,000,000,000	;253
	DB	000,000,07C,07C,07C,07C,07C,000,000	;254
	DB	000,000,000,000,000,000,000,000,000	;255


;******************************************************
;	
;Set up bits to destinguish between normal graphics characters
;and those which can use the MX100 International character sets
;
;*******************************************************

.RADIX 10		;Back do decimal notation

BITTYP DB 11111111B	;ASCII 0 TO 7
	DB 11111111B	;8 - 15
	DB 11111011B	;16 - 23
	DB 11111111B	;24 - 31
	DB 10000001B	;127 - 134
	DB 11101110B	;135 - 142
	DB 10001011B	;143 - 150
	DB 01001010B	;151 - 158
	DB 11111001B	;159 - 166
	DB 10111101B	;167 - 174
	DB 11111111B	;175 - 182
	DB 11111111B	;183 - 190
	DB 11111111B	;191 - 198
	DB 11111111B	;199 - 206
	DB 11111111B	;207 - 214
	DB 11111111B	;215 - 222
	DB 11011111B	;223 - 230
	DB 11111111B	;231 - 238
	DB 11111111B	;239 - 246
	DB 11111111B	;247 - 254
	DB 10000000B	;255



LASTONE: 	;All code after this label is freed to DOS use after 
		;initialization of the program

;******************************************
;
;  Code to load and initialize the printing program...
;  sets up DOS to keep all code before "LASTONE" label
;  save from overlaying during system operation
;
;******************************************


INIT_CODE PROC NEAR

	POP	AX				;Remove return address of CALL
	;
	;After this initialization routine is finished, we wish to return
	;control to DOS and prevent DOS from overlaying the PR256 code.
	;This is done by replacing the INT X'20' command found at the front 
	;of the Program Segment Prefix control block with an INT X'27'
	;"Program end but stay resident" command. The address to this instruction
	;is placed on the front of the stack, behind the return address
	;used by this subroutine. When the initialization is finished, this
	;routine returns to its caller (the main program) which executes a
	;return to the FSP, resulting in the INT X'27' command execution.
	;
	PUSH	DS				;Move segment address to PSP onto stack
	MOV	DI,0				;Set return to first location in PSP
	PUSH DI					;
	PUSH	AX				;Restore return address
	MOV	AL,NEWINT			;Set up INT X'27' in PSP
	MOV	[DI+1],AL			;
	MOV	AX,0				;Set up address to INT 17H vector
	MOV	DS,AX				;
	MOV	BX,INTADDR			;
	LES	DI,DWORD PTR [BX]		;Load double word addr to BIOS print rtn.
	MOV	AX,SEG DWORD_ADDR		;Now set up addr to store BIOS addr
	MOV	DS,AX				;
	MOV	DWORD_ADDR,DI			;
	MOV 	AX,ES				;
	MOV	DWORD_ADDR+2,AX			;Store BIOS print routine address
	MOV	AX,SEG START_UP			;
	MOV	ES,AX				;Don't forget to save segment address
	MOV 	DI,OFFSET START_UP		;
	MOV	AX,0				;
	MOV	DS,AX				;Now, address back to INT 17H vector
	MOV	BX,INTADDR			;
	MOV	[BX],DI				;
	MOV	DI,ES				;
	MOV	[BX+2],DI			;
	MOV	DX,OFFSET LASTONE		;Save all code up to "LASTONE" label
	ADD	DX,0100H			;  from overlaying by DOS
	RET					;Return to main program

	INIT_CODE ENDP
	CODE ENDS
	END
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **


```
{% endraw %}

## UTSCAN.BAS

{% raw %}
```bas
1010 PROG$="UTSCAN.BAS":VERS$="82/08/03/2100"
1020 '
1030 ' Scans lines of an ASCII file for a given character string
1040 '
1050 DEFINT A-Z:CLS:PRINT"             U T S C A N . B A S":PRINT:PRINT
1060 PRINT "ENTER FILE NAME (MUST BE AN ASCII FILE) ";:INPUT "",N$
1070 OPEN N$ FOR INPUT AS #1
1080 PRINT:PRINT "ENTER STRING TO SEARCH FOR ";
1090 LINE INPUT ;"",A$:IF A$="" THEN 1080
1100 LA=LEN(A$)
1110 PRINT:PRINT:PRINT:PRINT "          L  O  O  K  I  N  G   .  .  .  ."
1120 LPRINT CHR$(27);"E";CHR$(27);"G  STATEMENT SCAN OF "N$" FOR '"A$;
1130 LPRINT "'";CHR$(27);"F";CHR$(27);"H":LPRINT
1140 IF EOF(1) THEN 1180 ' End the program
1150 LINE INPUT #1,F$:IF INSTR(F$,A$)>0 THEN 1160 ELSE 1140
1160 LPRINT F$ ' Found the string, so print it
1170 GOTO 1140 ' Loop back to try next line, if any
1180 LPRINT:LPRINT "   E N D   O F   F I L E"
1190 PRINT:PRINT:PRINT "  J O B   F I N I S H E D":END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0052

     Volume in drive A has no label
     Directory of A:\

    ABSTRACT DOC      4096   7-09-83   1:20p
    BEEP     COM        89   9-01-82   1:10p
    CRC      TXT      1639  11-09-84  10:50a
    CRCK4    COM      1536  10-21-82   7:54p
    CRETURN  BAS       858   1-01-80   2:07a
    DISRTN   EXE      9728   6-06-82
    DSKPGM2  BAS      2031   1-01-80   2:23a
    FILEMOD  ASC      8633   3-29-83   6:45p
    FILTER   BAS      1430   1-01-80   2:10a
    FIXDEL   EXE      9728   6-06-82
    FIXIT    BAS       896   3-06-83   5:31p
    FREE4    COM      6024   1-01-80  12:15a
    FREE4    DOC      2892   3-29-83   6:37p
    FREE5    COM      1792   3-30-83   7:59a
    FREE5    DOC      3033   3-30-83   7:53a
    HEX      BAS      9344   1-01-80  12:02a
    HIDEFILE BAS     10240   3-29-83   9:53p
    PARTCOPY EXE     20480   1-01-80  12:03a
    PATCH256 ASC      2422   3-29-83   6:46p
    POKEPEEK DOC      4352   3-30-83   7:33a
    PR256    ASM     26752   3-29-83   3:45p
    SHIFTBS  COM        96   7-20-82   2:56p
    SHIFTIBM COM        16   7-20-82   4:34p
    TUNE     COM       384  10-16-82   1:54a
    UTSCAN   BAS      1024   8-22-82   8:39a
           25 file(s)     129515 bytes
                           26624 bytes free
