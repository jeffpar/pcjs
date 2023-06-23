---
layout: page
title: "PC-SIG Diskette Library (Disk #60)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0060/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0060"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}
{% comment %}samples_begin{% endcomment %}

## BASREF.DOC

{% raw %}
```
			BASREF 3.3 - DOCUMENTATION


     The  BASREF program is a utility program designed to help in
developping  programs  in  MICROSOFT  BASIC  on  the IBM PC.  The
program  requires  64K	of  memory  to	run,  and  a  printer for
hardcopy.  The	program  uses  a  form	length	of  66	lines, 80
characters per line.

     BASREF  produces  a  cross-reference list for every variable
and  line  number  referenced by a GOTO, GOSUB, THEN, ON...  that
appear	in  a  BASIC  program.	The program will read any type of
file,  ASCII or TOKENIZED.  You just specify the name of the file
when requested, and the program does the rest.

     The listing can be sent to the screen, printer or disk file.
An  interactive  menu  guides  the user through the program, with
help menus available. A formatted listing of the program can also
be  generated if the original file was in ASCII, i.e.  saved with
the  ",A" option.  It is not possible (in this release) to obtain
a listing of a tokenized program through BASREF.

     The  program  sends the output to the "LPT1:" port, and uses
FORM  FEED  (ASCII  12)  for  page  control. If output to file is
requested,  then the resulting text is in ASCII form in the file,
and can be printed at a later date.


     A NOTE OF CAUTION :


     The  program  does  not handle very well the use of imbedded
keywords  in  variable	names,	if  working  on  an ASCII file. A
variable  such	as DIFER will result in D and ER being recognized
as  variables,	and  listed accordingly. Other instances of bogus
variables might be encountered, but the case of imbedded reserved
words  is more critical, as you loose the reference to the actual
variable, in this case DIFER.

     I	therefore  recommend using BASREF on tokenized files, i.e
saved  without the ,A suffix.  This is a new part of the program,
and  may  still  contain some obscure bugs. Please let me know of
any difficulties.

	* B A S R E F * (C) Copyright 1983,84 -F.Boulanger

```
{% endraw %}

## COMM.BAS

{% raw %}
```bas
1 REM The IBM Personal Computer Comm
2 REM Version 1.10 (C)Copyright IBM Corp 1981, 1982
3 REM Licensed Material - Program Property of IBM
4 REM Author - M. C. Rojas
10 KEY OFF: SCREEN 0,0: WIDTH 40: COLOR 7,0: CLS:POKE 106,0
11 FOR I=1 TO 10:KEY I,"":NEXT
12 CLOSE: DEFINT A-Z: FALSE=0: TRUE=NOT FALSE: XOFF$=CHR$(19): XON$=CHR$(17):ON ERROR GOTO 460:T=0:ECH$=""
15 DEF SEG=0: IF (PEEK(&H410) AND &H30)=&H30 THEN WIDTH 80:T=20:MODE$="b":DEF SEG:GOTO 30
16 FOR I=1 TO 10:KEY I,"":NEXT
17 LOCATE 25,10+T/2:PRINT"F1 = 40 COLUMN         F2 = 80 COLUMN"
18 DEF SEG
30 WIDTH "com1:",255:DEF SEG
40 LOCATE 2: PRINT TAB(10+T) "COMMUNICATIONS MENU"
50 LOCATE 6,3+T: PRINT "Choose one of the following:"
60 LOCATE 9,10+T: PRINT "1 Description of program"
70 PRINT TAB(10+T) "2 Dow Jones/News Retrieval"
80 PRINT TAB(10+T) "3 IBM Personal Computer"
90 PRINT TAB(10+T) "4 Series/1"
100 PRINT TAB(10+T) "5 THE SOURCE"
110 PRINT TAB(10+T) "6 Other service"
115 PRINT TAB(10+T) "7 End program"
120 LOCATE 18: PRINT SPACE$(40+T): LOCATE 18,3+T,1:PRINT "choice";
122 A$=INKEY$:IF A$="" THEN 122
123 IF LEN(A$)=1 THEN LT=VAL(A$):GOTO 130
124 IF MODE$="b" THEN LT=0:GOTO 130
125 B$=MID$(A$,2,1)
126 IF ASC(B$)=59 THEN WIDTH 40:T=0:CLS:GOTO 17 ELSE IF ASC(B$)=60 THEN WIDTH 80:T=20:CLS:GOTO 17 ELSE LT=0:GOTO 130
127 GOTO 122
130 IF LT=7 THEN CLS: PRINT TAB(10+T) "- COMMUNICATION ENDED -": END ELSE IF (LT=2 OR LT=4 OR LT=5) THEN 230 ELSE IF LT=1 THEN GOSUB 530:GOTO 10:ELSE IF (LT<1 OR LT>7) THEN FL=1: PRINT: PRINT TAB(3+T) "Invalid choice, try again"
140 IF FL=1 THEN FOR I=1 TO 2500: NEXT: LOCATE 19: PRINT SPACE$(40+T):FL=0: GOTO 120
145 CLS: LOCATE 1,10+T: PRINT "USER DEFINED LINK":IF LT=3 THEN LOCATE ,3+T: PRINT "TO ANOTHER IBM PERSONAL COMPUTER"
150 LOCATE 4,3+T,1:PRINT "BAUD RATE ";:GOSUB 465: SPEED$=B$
160 LOCATE 5,3+T,1:PRINT "PARITY ";:GOSUB 465: PARITY$=B$
170 LOCATE 6,3+T,1:PRINT "NUMBER OF BITS PER CHARACTER ";:GOSUB 465:BITS$=B$
180 LOCATE 7,3+T,1:PRINT "NUMBER OF STOP BITS ";:GOSUB 465: STP$=B$
185 LOCATE 8,3+T,1:PRINT "CHARACTERS ECHOED TO SCREEN (Y/N) ";:GOSUB 465: ECH$=B$
190 LOCATE 10,3+T,1: PRINT "Data entered correctly (Y/N) ";:GOSUB 465:CR$=B$
200 IF CR$="N" OR CR$="n" THEN 145 ELSE GOSUB 480
210 LOCATE 21,3:COMFIL$="COM1:"+SPEED$+","+PARITY$+","+BITS$+","+STP$
220 OPEN COMFIL$ AS #1
230 IF LT=4 THEN NM$="Series/1":GOSUB 470:OPEN "com1:300,e,7,2" AS 1
240 IF LT=2 THEN NM$="Dow Jones News/Retrieval":GOSUB 470:OPEN "com1:300,e,7" AS 1
250 IF LT=5 THEN NM$="THE SOURCE":GOSUB 470:OPEN "com1:300,e,7" AS 1
260 OPEN "SCRN:" FOR OUTPUT AS #2
270 LOCATE ,,1
280 PAUSE=FALSE:ON ERROR GOTO 460
290 B$=INKEY$:IF B$="" THEN 320
300 IF LEN(B$)>1 THEN IF ASC(MID$(B$,2,1))=68 THEN 450 ELSE 320 ELSE IF B$=CHR$(8) THEN LOCATE ,POS(0)-1,1:PRINT " ";:LOCATE ,POS(0)-1,1
310 PRINT #1,B$;: IF ECH$="Y" OR ECH$="y" THEN PRINT#2,B$;
320 IF EOF(1) THEN 290
330 IF LOC(1)>128 THEN PAUSE=TRUE:PRINT#1,XOFF$;
340 A$=INPUT$(LOC(1),#1)
360 FOR I=1 TO LEN(A$)
370 IF (ASC(MID$(A$,I,1))<31 AND MID$(A$,I,1)<>CHR$(13)) OR MID$(A$,I,1)=CHR$(127) THEN 410
380 IF MID$(A$,I,1)=CHR$(10) THEN MID$(A$,I,1)=" "
400 PRINT MID$(A$,I,1);
410 NEXT I
420 IF LOC(1)>0 THEN 290
430 IF PAUSE THEN PAUSE=FALSE:PRINT#1,XON$;
440 GOTO 290
450 POKE 106,0: CLOSE: ON ERROR GOTO 0: GOTO 10
460 IF ERR=68 THEN CLS: LOCATE 12,8+T: PRINT "THIS PROGRAM REQUIRES THE":PRINT TAB(3+T) "ASYNCHRONOUS COMMUNICATIONS ADAPTER.": END
461 IF ERR=24 THEN CLS: LOCATE 12,,1:PRINT "A DEVICE TIMEOUT ERROR HAS OCCURRED.":PRINT "MAKE SURE THE HARDWARE IS CORRECTLY":PRINT "SET UP, THEN PRESS ENTER.";:GOSUB 465: CLS:RESUME
462 RESUME
465 A$="":B$="":CR$="": WHILE A$<>CHR$(13)
466 A$=INKEY$: IF A$="" THEN 466 ELSE IF LEN(A$)>1 THEN IF ASC(MID$(A$,2,1))=68 THEN 450 ELSE 466: ELSE IF A$<>CHR$(8) THEN PRINT A$;: ELSE LOCATE ,POS(0)-1,1:PRINT " ";:LOCATE ,POS(0)-1,1:B$=MID$(B$,1,LEN(B$)-1)
467 IF A$<>CHR$(13) AND A$<>CHR$(8) THEN B$=B$+A$
468 WEND:RETURN
470 CLS: LOCATE 1,12+T: PRINT NM$:PRINT
480 PRINT:PRINT:PRINT TAB(3+T) "- Place your call, and insert the"
490 PRINT TAB(3+T) "  phone receiver into the modem, or"
495 PRINT TAB(3+T) "  switch your data set from talk to"
500 PRINT TAB(3+T) "  data. Then press ENTER to begin.   ": PRINT: PRINT
510 PRINT TAB(3+T) "- PRESS F10 TO GO TO MENU":PRINT
512 GOSUB 465
515 RETURN
530 CLS: LOCATE 1,15+T: PRINT "DESCRIPTION"
540 LOCATE 4,3+T: PRINT "An asynchronous communication link"
550 PRINT TAB(3+T) "will be established between the"
560 PRINT TAB(3+T) "selected service and the"
570 PRINT TAB(3+T) "IBM PERSONAL COMPUTER, as follows:"
580 LOCATE 9,3+T: PRINT "Baud rate";TAB(13+T)"300"
590 PRINT TAB(3+T) "Parity";TAB(14+T)"E"
600 PRINT TAB(3+T) "Data bits";TAB(14+T);"7
610 PRINT TAB(3+T) "Stop bits";TAB(14+T);"1  Dow Jones, THE SOURCE"
620 PRINT TAB(14+T) "2  Series/1"
630 LOCATE 15,3+T: PRINT "Options 3 and 6 allow for the above"
640 PRINT TAB(3+T) "characteristics to be supplied by"
650 PRINT TAB(3+T) "the user to define a communication"
660 PRINT TAB(3+T) "link to other services or computers."
661 IF MODE$="b" THEN 670
665 LOCATE 20,3+T: PRINT "You can select 40 column display or"
666 PRINT TAB(3+T) "80 column display by pressing F1 or"
667 PRINT TAB(3+T) "F2 before selecting menu choice."
670 LOCATE 24,3+T: PRINT "PRESS ANY KEY TO GO TO MENU";
671 CR$=INKEY$:IF CR$="" THEN 671 ELSE RETURN
```
{% endraw %}

## MAKE-REF.DOC

{% raw %}
```
 
     ********************************************************
     ********************************************************
     ***                                                  ***
     ***                       MAKE                       ***
     ***   Conversion Utility for EasyWriter 1.1* Files   ***
     ***                                                  ***
     ***      A FreeStyle Software (tm) brand product     ***
     ***                                                  ***
     ***            Copyright 1982 by C. W. Uthe          ***
     ***                                                  ***
     ********************************************************
     **************************1.1***************************
      *EasyWriter 1.1 is a registered trademark of IUS, Inc.

         **********************************************
         * USER DOCUMENTATION - Quick Reference Guide *
         **********************************************
                      Copyright 1982, CWUthe
 
                  - Not for resale by retailers -
 
 
                              [more]
 
                              INDEX
 
 
       Index for this file  . . . . . . . . . . . 1 screen
 
       Introduction . . . . . . . . . . . . . . . 1 screen
 
       Overview . . . . . . . . . . . . . see MAKEDOC1.EWF
 
       Instructions . . . . . . . . . . . see MAKEDOC2.EWF
 
       Quick Reference Guide  . . . . . . . . . . 1 screen
 
 
 
 
 
 
 
 

 
      [end of Index; Introduction section is next 1 screen]
 
                    INTRODUCTION RESTATEMENT
 
     This software is NOT free "public domain" software.
The author spent a full month writing it and is eager to pay off
some of his debts.  This software is merely being distributed
through the "public domain" network of user groups on a "pay what
it's worth to you" basis.  It is not for resale by any retailer.
 
     After you have used MAKE, judge for yourself the value and
send the author a check for that amount.  $15 is suggested.
 
The author is:
                           Craig W. Uthe
 
                       c/o FreeStyle Software
                       P.O. Box 42888
                       Philadelphia, PA  19101
 
     IN NO EVENT WILL THE AUTHOR BE LIABLE TO ANY USER FOR DAMAGES 
IN EXCESS OF PAYMENTS THE AUTHOR RECEIVED FOR THIS SOFTWARE FROM
THE USER.
 
    [end of Intro restatement; Quick Reference Guide follows]
 
    ****************************************************
    **                      MAKE                      **
    **  Conversion Utility for EasyWriter 1.1* Files  **
    **     A FreeStyle Software (tm) brand product    **
    **           Copyright 1982 by C. W. Uthe         **
    ************************1.1*************************
   *EasyWriter 1.1 is a registered trademark of IUS, Inc.
 
 
                      QUICK REFERENCE GUIDE
 
                 MAKE {filespec1} filespec2 {/D}
 
Filespec1 is the source file; filespec 2 is the destination file. 
The type of conversion is determined by the extensions of the
filespecs.  There are four standard formats: .ALF, .ACR, .CR,
and .other.  One of the extensions used must be .EWF (or
alternatively, .EWP for filespec1).  The other must be from
this list of four.
     You may omit the filespec1 if it is obvious which source file
you mean.  You may use wildcards in the two-parameter form.  The
/D option deletes source files if conversion is successful.

```
{% endraw %}

## MAKECONV.DOC

{% raw %}
```
 
     ********************************************************
     ********************************************************
     ***                                                  ***
     ***                       MAKE                       ***
     ***   Conversion Utility for EasyWriter 1.1* Files   ***
     ***                                                  ***
     ***      A FreeStyle Software (tm) brand product     ***
     ***                                                  ***
     ***            Copyright 1982 by C. W. Uthe          ***
     ***                                                  ***
     ********************************************************
     **************************1.1***************************
      *EasyWriter 1.1 is a registered trademark of IUS, Inc.
 
           *******************************************
           * USER DOCUMENTATION - Conversion Summary *
           *******************************************
                      Copyright 1982, CWUthe
 
                  - Not for resale by retailers -
 
 
                              [more]
 
                    INTRODUCTION RESTATEMENT
 
     This software is NOT free "public domain" software.
The author spent a full month writing it and is eager to pay off
some of his debts.  This software is merely being distributed
through the "public domain" network of user groups on a "pay what
it's worth to you" basis.  It is not for resale by any retailer.
 
     After you have used MAKE, judge for yourself the value and
send the author a check for that amount.  $15 is suggested.
 
The author is:
 
                           Craig W. Uthe
 
                       1109 Greenhill Road
                       Flourtown, PA  19031
 
     IN NO EVENT WILL THE AUTHOR BE LIABLE TO ANY USER FOR DAMAGES 
IN EXCESS OF PAYMENTS THE AUTHOR RECEIVED FOR THIS SOFTWARE FROM
THE USER.
 
                             [more]
 
 
 
               CONVERSION OF FILES TO ASCII FORMAT

     Conversion of EasyWriter 1.1 format text files is as easy as
copying files with the COPY command.  From the system prompt (A>
or B>), type the command MAKE using the following format:
 
                 MAKE {filespec1} filespec2 {/D}
 
     The parameters in brackets are optional.  Filespec2 must
have an extention other than .ALF, .ACR, or .CR to convert to
ASCII format.  .EXE and .COM are also disallowed.  I recommend
you use either .ASC or nothing (spaces).
 
     The default drive (as indicated by the system prompt) will be 
used unless you indicate a drive letter in front of the filenames. 
Wildcards (* and ?) are supported, with certain restrictions which 
generate descriptive error messages.  The /D option enables
automatic deletion of source files if successfully converted.
 

                             [more]
 
 
 
     To convert an entire diskette in a single-drive system
without retaining the original copy, follow these steps:
 
     (1)  Ensure the diskette to be converted has room for an
          extra copy of the largest file on the diskette.
 
     (2)  Put the MAKE diskette in the diskette drive.
 
     (3)  Type "MAKE B:*.EWF B:*.ASC/D"  (you may wish to replace
          the EWF with EWP, or the ASC with spaces).
 
     (4)  When indicated on the screen, put the file diskette in
          the diskette drive and hit any key.

     (5)  Conversion will take about one minute per side.
 
     To convert an entire diskette in a single-drive system while
retaining the original copy, put a copy of MAKE on the source
diskette, type "MAKE A: B:*.ASC" and switch diskettes as requested 
by the system.
                             [more]
 
 
     To convert an entire diskette in a two-drive system, I
recommend you not use the /D switch, but rather simply:
 
     (1)  Put a copy of MAKE on the source diskette and put this
          diskette in drive A.
 
     (2)  Put a blank diskette in drive B. 
 
     (3)  Type "MAKE A:*.EWF B:*.ASC" (You may wish to replace
          EWF with EWP, or ASC with spaces.)
 
     (4)  Conversion will take about one minute per side.
 
 
 
 
 
 
 
 
 
                            (The End)
```
{% endraw %}

## MAKEDOC1.DOC

{% raw %}
```
 
     ********************************************************
     ********************************************************
     ***                                                  ***
     ***                       MAKE                       ***
     ***   Conversion Utility for EasyWriter 1.1* Files   ***
     ***                                                  ***
     ***      A FreeStyle Software (tm) brand product     ***
     ***                                                  ***
     ***            Copyright 1982 by C. W. Uthe          ***
     ***                                                  ***
     ********************************************************
     **************************1.1***************************
      *EasyWriter 1.1 is a registered trademark of IUS, Inc.
 
                *********************************
                * USER DOCUMENTATION - Overview *
                *********************************
                      Copyright 1982, CWUthe
 
                  - Not for resale by retailers -
 
 
                              [more]
 
                              INDEX
 
 
 
 
 
       Index  . . . . . . . . . . . . . . . . . . 1 screen
 
       Introduction . . . . . . . . . . . . . . . 1 screen
 
       Overview:
                  Opening statement . . . . . . . 1
                  Capabilities  . . . . . . . . . 2
                  Ease-of-Use . . . . . . . . . . 2
                  Speed . . . . . . . . . . . . . 2
                                 Overview total = 7 screens
 
       Instructions . . . . . . . . . . . see MAKEDOC2.EWF
 
       Quick Reference Guide  . . . . . . see MAKE-REF.EWF
 
 
      [end of Index; Introduction section is next 2 screens]
 
                           INTRODUCTION
 
     This software is NOT free "public domain" software.
The author spent a full month writing it and is eager to pay off
some of his debts.  This software is merely being distributed
through the "public domain" network of user groups on a "pay what
it's worth to you" basis.  It is not for resale by any retailer.
 
     After you have used MAKE, judge for yourself the value and
send the author a check for that amount.  $15 is suggested.
 
The author is:
                           Craig W. Uthe
 
                       c/o FreeStyle Software
                       P.O. Box 42888
                       Philadelphia, PA  19101
 
     IN NO EVENT WILL THE AUTHOR BE LIABLE TO ANY USER FOR DAMAGES 
IN EXCESS OF PAYMENTS THE AUTHOR RECEIVED FOR THIS SOFTWARE FROM
THE USER.
 
        [end of Introduction; next section lasts 7 screens]
 
                             OVERVIEW
 
      MAKE is a software utility for use with EasyWriter 1.1*.
MAKE performs all the functions of the TRANSFER utility that is
provided with EasyWriter* and then some.  MAKE is much more
capable, much easier to use, and much faster.  This is explained
in some detail in the next 6 screens.
 
     If you are simply interested in converting files from
EasyWriter 1.1* format to standard ASCII format (which can be read 
by WordStar and Volkswriter, among others), you may prefer to jump 
to the next file, MAKEDOC2.EWF, which describes how to use MAKE in
detail, or to MAKECONV.EWF which quickly summarizes the
instructions for conversion of EasyWriter files to ASCII format.
 
 
 
 
 
 
 
 
   [end of opening paragraph; section continues 6 more screens]
 
CAPABILITIES
 
     Both MAKE and TRANSFER convert files from EasyWriter 1.1*
format to "standard" formats, and vice versa.  However, more
"standard" formats exists than the two used by the TRANSFER
utility.  MAKE provides four, including the format that is used
by the EDLIN utility and other programs like Volkswriter and the
Macro Assembler.  Another format enables conversion of files that
contain no line-feed characters (some telecommunication files
use this carriage return-only format).
 
     While TRANSFER cannot convert files which are larger than the
largest file size supported by EasyWriter 1.1* on your system,
MAKE can convert files as large as 65,500 characters to
EasyWriter 1.1* format.  (To fit the limit of your system, MAKE
opens extra files with the same name but with one or more $'s
on the end.)
 
       MAKE allows wildcards (* and ?) so that you may convert an
entire diskette of files quickly.  TRANSFER does not support
wildcards.
 
   [sub-section continues 1 more screen; section, 5 screens]
 
     If there is not enough room on the diskette for both the
source and result versions, you may use the /D option to erase
files after conversion.  In conjunction with the wildcard
command, this will let you convert an entire diskette in just
a minute or two - automatically.
 
     Alternatively, MAKE allows the resultant files to be written
to a different diskette than the source files are read from, even
on one-drive systems.  TRANSFER requires two-drive systems for
this.
 
     When converting EasyWriter 1.1* files to other formats, MAKE
will omit any leading imbedded commands ("."-commands).  This is
because EasyWriter 1.1's* imbedded commands usually are
meaningless to other programs.
 
     For your protection, MAKE does not allow you to create files
with ".EWP" extensions.  You can, however, use such files as the
source of a conversion (and automatically delete it with the /D
option).  TRANSFER disallows the .EWP extension altogether.
 
 
     [end of sub-section; section continues 4 more screens]
 
EASE-OF-USE
 
     MAKE is about as easy to use as the PC-DOS command COPY.
You merely respond to the PC-DOS system prompt (A> or B>) with
the MAKE command.  The format of the command is:
 
                 MAKE {filespec1} filespec2 {/D}
 
The parameters in brackets are optional.  Naturally upper case and
lower case can both be used.
 
     The filespec extensions (.xxx) determine the type of
conversion.  Though this may seem limiting, it is much easier to
use the RENAME command in conjunction with MAKE than to pass
through a series of menus.  (A RENAME-MAKE-RENAME procedure could
be set up in a .BAT file to facilitate this.)
 
     The delete option is active when the /D switch is used.  This
option causes automatic deletion of the source file after (and
only if) the entire resultant file was successfully created.
 
 
    [sub-section continues 1 more screen; section, 3 screens]
 
     Lastly, whenever an execution error is encountered, the
reason for the problem will be explained by a message on the
screen.  Provided you have followed the MAKE {filespec1} filespec2
{/D} command format, any content errors will be caught.  (For
example, you can't convert an EasyWriter 1.1* file into another
EasyWriter 1.1* file).
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
      [end of sub-section; section continues 2 more screen]
 
SPEED
 
     Speed of responsiveness is often considered another ease-of-
use factor.  In contrast to TRANSFER, MAKE uses no unnecessary
time-consuming methods.
 
     Since MAKE has been reduced to machine language, there is no
need to load BASIC before conversions can be started.  (If you
don't need to use the other EasyWriter 1.1* utilities that require
BASIC, you can take BASIC off the EasyWriter 1.1* program diskette
and replace it with more useful programs.)
 
     Since EasyWriter 1.1* verifies that you are using an
authorized program diskette, MAKE doesn't duplicate this
procedure.  (TRANSFER does take the time for this step).
 
     Since MAKE is about the level of complexity of the COPY
command of PC-DOS, there is no need to pass through a series of
menus.  TRANSFER, instead, passes through a series of menus which
have little substantive content and which take time to display and
respond to.
 
         [sub-section & section continue 1 more screen]
 
     Finally, after the files are opened, MAKE performs file
reading and writing only in big chunks.  TRANSFER, on the other
hand, alternately reads and writes a tiny portion of a file.  (The
wear that this TRANSFER approach causes your diskettes and drive
is quite audible when only one drive is being used.)
 
     The result is that MAKE is from 10 to 25 times faster than
TRANSFER.  For example, translating a large file in a single-drive
system (with MAKE on the same 75%-full diskette as the file) took
MAKE only 8 seconds; TRANSFER needed 3 minutes and 20 seconds
(200 seconds) to convert the same file.
 
 
 
 
 
 
 
 
 
                [end of sub-section and section]
              [Instructions section is in MAKEDOC2]

```
{% endraw %}

## MAKEDOC2.DOC

{% raw %}
```
 
     ********************************************************
     ********************************************************
     ***                                                  ***
     ***                       MAKE                       ***
     ***   Conversion Utility for EasyWriter 1.1* Files   ***
     ***                                                  ***
     ***      A FreeStyle Software (tm) brand product     ***
     ***                                                  ***
     ***            Copyright 1982 by C. W. Uthe          ***
     ***                                                  ***
     ********************************************************
     **************************1.1***************************
      *EasyWriter 1.1 is a registered trademark of IUS, Inc.

              *************************************
              * USER DOCUMENTATION - Instructions *
              *************************************
                      Copyright 1982, CWUthe
 
                  - Not for resale by retailers -
 
 
                              [more]
 
                              INDEX
 
 
       Index for this file  . . . . . . . . . . . 1 screen
 
       Introduction . . . . . . . . . . . . . . . 1 screen
 
       Overview . . . . . . . . . . . . . see MAKEDOC1.EWF
 
 
       Instructions:
                  Opening statement . . . . . . . 1
                  "Standard" Formats  . . . . . . 4
                  MAKE Command - two parameters . 1
                  MAKE Command - single param . . 1
                  /D Option & Wildcard Option . . 1
                  Hints . . . . . . . . . . . . . 1
                            Instructions total = 10 screens
 
       Quick Reference Guide  . . . . . . see MAKE-REF.EWF
 
 
      [end of Index; Introduction section is next 1 screen]
 
                    INTRODUCTION RESTATEMENT
 
     This software is NOT free "public domain" software.
The author spent a full month writing it and is eager to pay off
some of his debts.  This software is merely being distributed
through the "public domain" network of user groups on a "pay what
it's worth to you" basis.  It is not for resale by any retailer.
 
     After you have used MAKE, judge for yourself the value and
send the author a check for that amount.  $15 is suggested.
 
The author is:
                           Craig W. Uthe
 
                       c/o FreeStyle Software
                       P.O. Box 42888
                       Philadelphia, PA  19101
 
     IN NO EVENT WILL THE AUTHOR BE LIABLE TO ANY USER FOR DAMAGES 
IN EXCESS OF PAYMENTS THE AUTHOR RECEIVED FOR THIS SOFTWARE FROM
THE USER.
 
    [end of Intro restatement; next section lasts 10 screens]
 
                          INSTRUCTIONS
 
 
     As mentioned earlier, using MAKE is as simple as using the
COPY command.  Simply use MAKE as a command at the system
prompt:
                 MAKE {filespec1} filespec2 {/D}
 
Bracketed parameters are optional.  Either upper or lower case may
be used.
 
     Filespecs conform to the definition used by the COPY command. 
In full form, a filespec includes a diskette drive letter,
filename, and extension.  When a diskette drive is not specified,
the system assumes the current default (indicated by the system
prompt).  Since MAKE is a file itself, you will have to type a
drive letter and colon in front of it if the MAKE.COM is not
on the diskette in the default drive (ex:  B:MAKE . . .).
 
     The type of conversion is determined by the extensions of the
filespecs given.
 
    [end of opening statements; section continues 9 screens]
 
STANDARD FORMATS
 
     MAKE classifies files under four standard formats and
EasyWriter 1.1* format.  EasyWriter 1.1* format is characterized
by recording linefeed (LF) characters as the null character (00). 
This character is then used to designate the end of each line. 
EasyWriter 1.1* inserts carriage return (CR) characters only at
the end of a paragraph.  EasyWriter 1.1* also records a header of
information at the front of the file's text.
 
    The four standard formats used by MAKE can be described by
the character pattern that generally appears at the end of every
line.  The convention here is to assign extensions to files to
indicate formats:
 
           .ALF     Linefeed at end of line,
                    sometimes CR too (ex:  at end of paragraph)
           .ACR     Carriage return at end of line,
                    sometimes LF too (ex:  at end of paragraph)
           .CR      Only carriage returns
           .other   Only CR-LF sequences
                    (as used by EDLIN and Volkswriter)
      [sub-section continues 3 screens; section, 8 screens]
 
    Conversions can be made from EasyWriter 1.1* format to one of
these formats, or vice versa.  In each the .ALF and .ACR cases,
translation is perfectly bi-directional; you can perfectly
recreate the source file from the resultant file using MAKE. 
Only the margin, indent, and tab settings will be different.
 
Conversion Pattern "FROM EWF":
 
     When files are converted FROM EasyWriter 1.1* format (.EWF or
.EWP) to one of the four standard formats, the conversions are
most clearly described in a table based on the extension of the
resultant file:
                       Translation Effects
   Exten- +----------------Source Characters-----------------+
    sion   <00>   <CR,00>     <CR,00;00>      <CR,00;00;00>
    ----   ----   -------    ------------   -----------------
    .ALF   <LF>   <CR,LF>     <CR,LF;LF>      <CR,LF;LF;LF>
    .ACR   <CR>   <CR,LF>     <CR,LF;CR>      <CR,LF;CR;CR>
    .CR    <CR>    <CR>         <CR;CR>         <CR;CR;CR>
=> .other <CR,LF> <CR,LF>    <CR,LF;CR,LF> <CR,LF;CR,LF;CR,LF>
 
     Chained <CR,00> sequences will follow the <CR,00> patterns.
      [sub-section continues 2 screens; section, 7 screens]
 
     Translation from .EWF starts with the first line which is
not an imbedded command ("." command), so be sure to not have any
carriage returns or line feeds preceding imbedded commands that
you want to omit.  Conversely, precede any you want to keep with
a line beginning with any character other than a period.
 
Conversion Pattern "TO EWF":
 
     When files are being converted TO EasyWriter 1.1* (.EWF)
format, the following translations are made based on the
extension of the source file:
 
     .ALF:  LF ==> 00
 
     .ACR:  LF ==> 00
            and CR ==> 00 unless followed by a LF in the source.
 
     .CR:   CR ==> 00 unless followed by another CR (in which case
            only the trailing CR's become 00's)
 
     .other (described on next screen)
 
      [sub-section continues 1 screen; section, 6 screens]
 
     .other LF ==> 00 except where part of a CR,LF sequence which
            immediately follows another (in which case this
            trailing CR,LF is translated to a 00).
            Also, any trailing, chained CR's are converted to 00's
            since EasyWriter 1.1* was not intended to handle
            multiple CR's on a single line.
 

(Note regarding word processing programs:
 
     Text files for other word processing programs use a
different end-of-paragraph marker than used for EasyWriter 1.1*
files.  These markers will not be translated when converting
files between these formats.  If needed, these markers may be
replaced manually after translation, though you may decide not
to do this for historical files.)
 
 
 
 
 
 
        [end of sub-section; section continues 5 screens]
 
MAKE COMMAND - Two Parameter Form
 
     The most basic form of the MAKE command is the two parameter
form:
                    MAKE filespec1 filespec2
 
The last filespec must always be present and indicates where the
results should be stored.  The first filespec is present in the
basic form and indicates the source file for the conversion.
 
     The extensions are chosen from those described above.  One
of the extensions must be an .EWF (or optionally .EWP in the case
of filespec1).  The other must be taken from one of the three
extensions specified above, or any other extension that is not
.EWF, .EWP, .COM, .EXE, or .OBJ.  (Extensions .COM, .EXE, and .OBJ
are forbidden since they are normally used only with machine-
language files, not text files.)
 
     For example,   MAKE TEST.EWF TEST.CR   will create a file
with only CR's at the ends of lines from the EasyWriter 1.1*
format file TEST.EWF.
 
       [subsection continues 1 screen; section, 4 screens]
 
    MAKE TEST2.ASC TEST2.EWF   will convert the standard ASCII
file TEST2.ASC into an EasyWriter 1.1* format file with the name
TEST2.EWF.  A header will be supplied that has no tabs set, and
has a right margin set at the 80th column.  No indentation is
specified.  You will probably want to reset this from within
EasyWriter 1.1*.
     If the resultant file cannot fit into a single EasyWriter
1.1* file (limit of 14,000 or 24,000 characters, depending on
your system memory size), MAKE will automatically split the file. 
The overflow file names will be the same as the previous part
of the file, but with a $ symbol appended to the end of the name.
 
 
 
 
 
 
 
 
 
 
 
        [end of sub-section; section continues 3 screens]
 
MAKE COMMAND - Single Parameter Form
 
     The single parameter form is the same as the two parameter
form except that you can omit filespec1.  This is possible where
the two parameters would be the same except for the extension, and
the extension of the source will be that of the first file found
that (1) has the same name, (2) isn't from the same class of
extensions as the result (filespec2), and (3) doesn't have an
extension of .OBJ, .EXE, or .COM.
 
     This form was designed to save you a little effort when the
source filespec is pretty obvious.  This can be invoked in a
single-diskette or dual-diskette form:
 
     MAKE TEST.ASC   or   MAKE A: B:TEST.ASC   respectively.
 
     BE VERY CAREFUL whenever issuing a MAKE command.  As with
COPY, be sure you don't need to keep the earlier versions of the
file you name in filespec2 - it will be replaced unless MAKE
encounters an error before opening this file.
 
 
        [end of sub-section; section continues 2 screens]
 
DELETE OPTION
 
     By including the /D switch at the end of the command, you
will activate the delete option.  After (and only if) the source
file is successfully converted, the source file will then be
erased from the diskette.
 
WILDCARD OPTION
 
     The two-parameter form supports wildcards (* or ?).  For
every wildcard in the source name, there must be a wildcard in the
result file name.  Extensions cannot contain wildcards, since they
are needed to describe which type of filenames to look for.
 
     Consequently, if MAKE.COM were on an EasyWriter 1.1* test
file diskette that had about 24,000 characters of space left on
it, the entire diskette can be converted to standard ASCII
format by typing:
                       MAKE *.EWF *.ASC/D
 
This would be especially useful if all your EasyWriter 1.1* files
had to be converted for use with, say, Volkswriter.
           [sub-section and section continue 1 screen]
 
HINTS
 
     You can use MAKE to convert files between the four standard
formats by converting them to EasyWriter 1.1* format files and
then to another standard format.
 
     You can split a 24,000 character EasyWriter 1.1* format file
into 14,000 character files in a system on which EasyWriter 1.1*
supports only 14,000 character files.  Simply convert the file to
.ALF or .ACR format and then back to EasyWriter 1.1* format.  The
file will be split during the conversion back.
 
     You may wish to keep a copy of MAKE on your EasyWriter 1.1*
file and/or program diskette.  This minimizes manual disk
handling.
 
 
 
 
              [end of sub-section; end of section]
 
           [Quick Reference Guide is in MAKE-REF.EWF]

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0060

     Volume in drive A has no label
     Directory of A:\

    COMM     BAS      4352  10-20-83  12:00p
    COMM     SRC      5412   4-27-84   4:08p
    MAKE     COM      3371  11-27-82   5:39p
    UTIL     HLP     15062  11-27-83  11:59a
    UTIL     DAT     15062  11-27-83  11:59a
    DEMO1    BAT       405   5-06-83   9:18p
    TF1                144   5-09-83  10:37p
    DEMO2    BAT       796  11-17-83  10:28p
    DEMO3    BAT       721  11-17-83  10:31p
    DEMO4    BAT       660   5-09-83  11:10p
    DEMO5    BAT       390  11-17-83  10:32p
    DEMO6    BAT       727  11-17-83  10:33p
    UTIL     EXE     22016  10-28-84   1:12p
    DEMO7    BAT       410  11-17-83  10:34p
    TF2                116   6-03-83   9:56p
    DEMO8    BAT       788   6-03-83  10:25p
    MAKEDOC1 DOC      8745   8-24-83   6:42p
    MAKEDOC2 DOC     12186   8-24-83   6:42p
    MAKE-REF DOC      3546   8-24-83   6:43p
    MAKECONV DOC      4284   8-24-83   6:43p
    BASREF   DOC      2002   8-14-84  11:12p
    BASREF   EXE     45312   8-14-84  11:08p
           22 file(s)     146507 bytes
                            8704 bytes free
