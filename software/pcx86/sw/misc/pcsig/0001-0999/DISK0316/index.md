---
layout: page
title: "PC-SIG Diskette Library (Disk #316)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0316/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0316"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION UTILTIES #1"

    This disk contains a collection of popular, public domain communication
    utilities and a list of IBM-PC oriented BBS's.  Most are oriented to
    the Hayes Smartmodem command set.  HC.COM is a Hex File converter which
    converts to and from HEX format.  It can automatically provide a COM or
    EXE extension.  NUSQ-11.COM is a utility for expanding squeezed files
    to their original uncompressed state.  Two separate versions of NUSQ
    are available, one for CP/M-86 and one for the MS-DOS operating system.
    PCTERM.ASM is a simple terminal program which uses interrupt driven
    buffered communications.  The program can thus operated at 9600 baud
    without losing data.
    
    System Requirements: Serial port, modem
    
    How to Start: Review documentation in the .DOC and .TXT files.  To run
    any program with the suffix .COM or .EXE, just type its filename,
    i.e., for SQPC.EXE type SQPC and press <ENTER>.  To run the BASIC
    programs follow the GETTING STARTED instructions for your
    configuration.
    
    File Descriptions:
    
    ADDCRS   BAS  Copies files without carriage returns & adds them
    AREACODE EXE  Displays geographic location of telephone area codes
    APPLECOM BAS  Allows keyboard input to flow out to com port & file
    MODEM7PC COM  Christensen's XMODEM7 (IBM-PC Main Serial Port version)
    LYNC     DOC  Brief documentation of LYNC.COM
    IBMPCBBS LST  Text file containing directory of IBM-PC bulletin boards
    HC       DOC  Text file : documentation for HC.COM program
    HC       COM  Hex file convertor  HEX <--> COM or EXE or BIN
    HAYESTST BAS  Tests and reports the switch settings on Hayes Smartmodem
    HAYES    TXT  Text file of handy POKES to be used with Hayes Micromodem
    FILTER   BAS  Filters non-ASCII characters from a transmitted file
    CVTBIN   COM  Converts binary files
    NSQ-201  EXE  Advanced file squeezer
    NUSQ-11  COM  File un-squeeze utility
    NUSQ-11  DOC  Text file documentation of NUSQ-11.COM
    SQPC     EXE  File squeezer
    SQ       EXE  Advanced file squeezer
    PCTERM   DOC  Text file description of PCTERM.ASM
    PCTERM   ASM  Dumb-terminal using interupt driven buffered commun.
    UNWS     EXE  Remove high-order bits from WORDSTAR files
    TYPESQ   EXE  Type a squeezed file
    XMODEM   DOC  Text file of Christensen's Modem Protocol overview
    WARGAMES BAS  Automatic sequence dialer; seeks carrier signal;HayesModem
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDCRS.BAS

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

## APPLECOM.BAS

{% raw %}
```bas
10 DEFINT A-Z
15 FALSE=0:TRUE= NOT FALSE
20 KEY OFF:CLS:CLOSE
30 OPEN "COM1:300,E,7" AS 1
40 B$=INKEY$: IF B$<> "" AND B$ <>"\"      THEN PRINT#1,B$;
50 IF B$="\" THEN PRINT #1,CHR$(19);:       GOTO 500
60 IF EOF(1) THEN 40
70 IF LOC(1)>128 THEN PRINT #1,CHR$(19) ;:   PAUSE=TRUE
80 A$=INPUT$(LOC(1),#1)
90 PRINT A$;
100 IF FLG THEN PRINT #2,A$;
110 IF LOC(1)>0 THEN GOTO 70
120 IF PAUSE THEN PAUSE=FALSE:PRINT #1,     CHR$(17);
130 GOTO 40
500 PRINT "1 OPEN FILE"
510 PRINT "2 CLOSE FILE"
520 PRINT "3 END SESSION"
530 INPUT "OPTION ",OPT
540 ON OPT GOTO 600,700,800
590 REM OPEN FILE
600 INPUT "FILE NAME.EXT ",F$
610 OPEN F$ FOR OUTPUT AS #2
620 PRINT #1,CHR$(17);
625 FLG=TRUE
630 GOTO 40
690 REM CLOSE FILE
700 CLOSE #2
710 PRINT #1,CHR$(17);
715 FLG=FALSE
720 GOTO 40
790 REM END
800 CLOSE
810 END
```
{% endraw %}

## FILES316.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 316     COMMUNICATIONS UTILITIES                        v1   DS
------------------------------------------------------------------------
 
A collection of some of  he most popular, well-known communication
utilities programs in the public domain.  A list of IBM-PC oriented BBS's
Most are oriented to the Hayes Smartmodem command set
 
ADDCRS   BAS  Copies files without carriage returns & adds them
APPLECOM BAS  Allows keyboard input to flow out to com port & file
AREACODE EXE  Displays geographic location of telephone area codes
CVTBIN   COM  Converts binary files
FILTER   BAS  Filters non-ASCII characters from a transmitted file
HAYES    TXT  Text file of handy POKES to be used with Hayes Micromodem
HAYESTST BAS  Tests and reports the switch settings on Hayes Smartmodem
HC       COM  Hex file convertor  HEX <--> COM or EXE or BIN
HC       DOC  Text file : documentation for HC.COM program
IBMPCBBS LST  Text file containing directory of IBM-PC bulletin boards
LYNC     COM  Links two computers together; runs DOS-friendly pgms remotely
LYNC     DOC  Brief documentation of LYNC.COM
MODEM7PC COM  Christensen's XMODEM7 (IBM-PC Main Serial Port version)
NSQ-201  EXE  Advanced file squeezer
NUSQ-11  COM  File un-squeeze utility
NUSQ-11  DOC  Text file documentation of NUSQ-11.COM
PCTERM   ASM  Dumb-terminal program using interupt driven buffered commun.
PCTERM   DOC  Text file description of PCTERM.ASM
SQ       EXE  Advanced file squeezer
SQPC     EXE  File squeezer
TYPESQ   EXE  Type a squeezed file
UNWS     EXE  Remove high-order bits from WORDSTAR files
WARGAMES BAS  Automatic sequence dialer; seeks carrier signal; Hayes Modem
XMODEM   DOC  Text file of Christensen's Modem Protocol overview
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
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
288    LINE INPUT #1,A$
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

## HAYES.TXT

{% raw %}
```


 
*    HERE ARE SOME HANDY POKES TO BE
  USED WITH THE D.C. HAYES MICROMODEM.
  THEY ARE (ALTHOUGH NOT VERY WELL)
  DOCUMENTED IN THE BOOK.
 
  POKE 1915,0   SETS HALF DUPLEX
  POKE 1915,128 SETS FULL DUPLEX
  POKE 1915,16  SETS LINE FEEDS ON
  POKE 1915,8   SETS TERMINAL MODE ON
  POKE 1915,4   SETS TRANSPARENCY ON
  POKE 1915,2   SETS KEYBRD ENABLE ON
  POKE 1531,DLY INSERTS A DELAY BE-
     TWEEN EACH LINE FEED.  DLY
     MAY BE ANY VALUE BETWEEN 3-255
     USE THE CHART AT THE BEGINNING
     OF NETWORKS WHEN IT ASKS YOU
     FOR NULLS FOR DLY'S = TIME.
 
  TO USE JUST PICK OUT THE FEATURES
  THAT YOU WANT AND ADD UP THE VALUES
  OF THE FEATURES.  THEN POKE THE SUM
  INTO 1915 AND YOU WILL HAVE IT.
 
  NOTE-POKE 1915 ASSUMES THE MICROMODEM
  IN SLOT 3 USE 1912+SLOT AND 1528+SLOT
  IF ANYWHERE ELSE.

* THERE IS AN APPLICATION NOTE THAT
  EXPLAINS IN DETAIL MODIFICATIONS
  NEEDED TO ALLOW YOU TO USE THE
  D.C. HAYES MICROMODEM II WITH THE
  MICROSOFT 'SOFTCARD'. ASK YOUR
  DEALER. HE MAY HAVE A COPY.
```
{% endraw %}

## HAYESTST.BAS

{% raw %}
```bas
10 CLS
20 PRINT "Hayes SMARTMODEM Switch Test"
30  PRINT "(C) Copyright 1984, Sally A. Gaer"
50 PRINT
55 GOSUB 960
60 PRINT "MODEM test started.  Test will take about 15 seconds ..";
70 ON ERROR GOTO 890
80 DIM A$(20)
90 S1$="?": S2$="?": S3$="?": S4$="?": S5$="?": S6$="?"
100 S7$="?": S8$="?"
110 OPEN "com1:300,e,7,2" AS #1
120 S6$="D"
130 '
140 '
150 '------------Reset Modem------------
160 '
170 PRINT "..";
180 FOR I=1 TO 2000
190 NEXT I
200 PRINT#1,"+++";
210 FOR I=1 TO 2000
220 NEXT I
230 PRINT#1,"ATZ"
240 FOR I=1 TO 2000
250 NEXT I
260 PRINT "..";
270 '
280 '
290 '-------Reset modem again and check for return code and echo-----
300 '
310 GOSUB 830
320 A=INSTR(1,A$,"OK"): IF A>0 THEN S3$="D": S2$="U": GOTO 360
330 A=1
340 A=INSTR(A,A$,"0"): IF A>0 THEN S3$="D": S2$="D": GOTO 360
350 S3$="U"
360 PRINT#1,"ATZ"
370 FOR I=1 TO 2000: NEXT I
380 PRINT "..";
390 GOSUB 830
400 '
410 '-------Check for echo---------
420 '
430 IF LEFT$(A$,3)="ATZ" THEN S4$="U": GOTO 440 ELSE S4$="D"
440 IF LEFT$(A$,1)="0" THEN S2$="D": GOSUB 670: STOP
450 GOSUB 500: GOTO 600
460 '
470 '
480 '-------CheCk Modem Status Registers for switch settings ------
490 '
500 PRINT#1,"AT S13? S14? S15?"
510 FOR I=1 TO 4000: NEXT I
520 GOSUB 830
530 IF S4$="U" THEN A$=MID$(A$,19,255)
540 S13=VAL(LEFT$(A$,3)): S14=VAL(MID$(A$,5,3)): S15=VAL(MID$(A$,9,3))
550 IF S13=0 AND S14=0 AND S15=0 THEN S8$="U" ELSE S8$="D"
560 RETURN
570 '
580 '
590 '
600 S5$=MID$(A$,7,1): IF S5$="1" OR S5$="3" OR S5$="5" OR S5$="7" THEN S5$="U" ELSE S5$="D"
610 IF S8$="U" THEN S5$="?": S2$="?": S3$="?"
620 GOSUB 670
630 C$=S1$+S2$+S3$+S4$+S5$+S6$+S7$+S8$
640 IF C$="?UDUDD?D" THEN PRINT "MODEM switch settings are correct": BEEP: END
650 PRINT "MODEM switch settings are incorrect"
660 STOP
670 PRINT "Modem switch settings"
680 PRINT "Switch 1 = ";S1$
690 PRINT "Switch 2 = ";
700 IF S2$="U" THEN PRINT S2$: GOTO 710 ELSE COLOR 31: PRINT S2$: COLOR 15
710 PRINT "Switch 3 = ";
720 IF S3$="D" THEN PRINT S3$: GOTO 730 ELSE COLOR 31: PRINT S3$: COLOR 15
730 PRINT "Switch 4 = ";
740 IF S4$="U" THEN PRINT S4$: GOTO 750 ELSE COLOR 31: PRINT S4$: COLOR 15
750 PRINT "Switch 5 = ";
760 IF S5$="D" THEN PRINT S5$: GOTO 770 ELSE COLOR 31: PRINT S5$: COLOR 15
770 PRINT "Switch 6 = ";
780 IF S6$="D" THEN PRINT S6$: GOTO 790 ELSE COLOR 31: PRINT S6$: COLOR 15
790 PRINT "Switch 7 = ";
800 IF S7$="?" THEN PRINT S7$: GOTO 810 ELSE COLOR 31: PRINT S7$: COLOR 15
810 PRINT "Switch 8 = ";S8$
820 RETURN
830 A$=""
840 WHILE NOT EOF(1)
850 PRINT ".";
860 A$=A$+INPUT$(LOC(1),#1)
870 WEND
880 RETURN
890 IF ERR=24 THEN S6$="U": GOSUB 670: STOP
900 PRINT "Unknown error "
910 RESUME
960 PRINT : PRINT "Turn your modem power switch off and then on"
970 PRINT "Press enter when you have done this"
980 A$=""
990 A$=INKEY$: IF A$="" THEN GOTO 990
1000 RETURN
1010 RETURN
```
{% endraw %}

## LYNC.DOC

{% raw %}
```
The program LYNC.COM has been removed from this disk because it is a
copyrighted program. We have been informed that the commercial version is
available for approximately $195. If you are interested in this product,
you may send a letter or call the folks listed below.
 
      Norton-Lambert Corporation
      P.O. Box 4085
      Santa Barbara, CA 93140
      (805) 687-8896
 
                           Happy communicating
                           PC-SIG

```
{% endraw %}

## NUSQ-11.DOC

{% raw %}
```
 
 
 
                  NUSQ - File unsqueeze utility
 
              Documentation for CP/M-86 and MS-DOS
         versions 1.11 (CP/M-86), 1.10 & 1.10D (MS-DOS)
                 Cliff Sharp   October 21, 1984
 
                       DOCUMENTATION TOPICS
 
        OVERVIEW                        IN CASE OF TROUBLE
        COMMAND MODE                    PROGRAM MESSAGES
        INTERACTIVE MODE                ANNOUNCEMENT
        INSTALLATION                    HISTORY
 
 
 
                            OVERVIEW
 
     NUSQ  is  a  utility for expanding squeezed files  to  their
original uncompressed state.   Two separate versions of NUSQ  are
available,  one  for  CP/M-86  and one for the  MS-DOS  operating
system.
 
     NUSQ has two operating modes.  In the command mode, a single
instruction to NUSQ is passed from the command line which invokes
NUSQ.  The command mode requires less effort to use when you have
only  one file to unsqueeze,  or when the names of the files  you
wish  to unsqueeze can all be specified by one  "wildcard"  name.
However,  when  you  have more than one file to unsqueeze  and  a
"wildcard" won't do the job right,  or when the files you want to
unsqueeze are on more than one disk,  the interactive mode allows
you to specify only those files which you want processed, without
reloading the program every time.   In the interactive mode, NUSQ
executes one command, then waits for another.
 
     MS-DOS versions of NUSQ including and subsequent to 1.10 can
use date and time information encoded in files squeezed with NSQ.
This  means  that  a file squeezed with NSQ, 'modemed' to another
location, and unsqueezed with NUSQ  (version  1.10D  or  greater)
will  retain  the date and time of ORIGIN instead of DESTINATION.
NSQ encodes this information at the END of the squeezed file,  so
such files retain compatibility with earlier unsqueeze programs.
 
     See the installation section of this document for details on
how  to  implement this feature in NUSQ.  Any files squeezed with
NSQ (versions 2.01 or higher) will have the  necessary  date  and
time information encoded in them.
 
 
                          COMMAND MODE
 
     To unsqueeze only one file, the command mode invocation
 
                        A>nusq nerts.aqm
 
will unsqueeze the file NERTS.AQM.  You don't need to specify the
name of the output file (in fact, you can't); the name was stored
within  the file at the time it was squeezed,  and that name will
be  used  to  create  the new file.   (If you  want  to  name  it
differently after you have unsqueezed it,  use the REName command
when NUSQ is finished.)
 
     You  can  unsqueeze all squeezed files on a single  disk  by
issuing the command
 
                          A>nusq *.?q?
 
Theoretically at least,  all file squeezers create an output file
whose name is the same as that of the original file,  except that
the  filename extension field is modified by changing the  middle
letter to a "Q".  (If a file has no filetype, a 'QQQ' is appended
for  the file type for the encoded file.   When a file  has  been
renamed  after  being  squeezed,  this  might not  be  the  case;
hopefully,  the  person who renamed it remembered the "Q".)   The
"wildcard" file specification shown above tells NUSQ to unsqueeze
any  file it finds (on the default disk) which has a "Q"  in  the
filename  extension;  that  should  get NUSQ to  unsqueeze  every
squeezed  file on the disk.   NUSQ will display the name of  each
file it finds, and the name of the output file it produces, as it
proceeds:
 
                  NERTS.AQM -> NERTS.ASM
                  ORGPLOTZ.DQC -> ORGPLOTZ.DOC
 
     Because  NUSQ checks the first two bytes of each input  file
for a valid Squeeze Signature (0FF76 hex), it is possible to say:
 
                            nusq *.*
 
and  get the same results as with "nusq *.?q?".   It  is  faster,
however,  to use the *.?q? method, as that will preclude a lot of
unnecessary file openings.
 
    NUSQ  will also accept more than one filename on the  command
line:
 
              A>nusq nerts.aqm orgplotz.dqc frop.cq
 
     To  use a different disk for output than for input,  end the
command line with just the drive designation. Example:
 
                      A>nusq giggle.tqt b:
 
will  write the output file (ostensibly GIGGLE.TXT) on drive  B:.
You will find that NUSQ is very forgiving, as:
 
                      A>nusq b: giggle.tqt
 
will accomplish the same thing.  (Note the space between 'b:' and
'giggle'!)
 
 
 
                         INTERACTIVE MODE
 
     Let's  suppose now that you have a large number of  squeezed
files on your disk,  and you only want to unsqueeze some of them.
Unless  you  can specify only those files by using  a  "wildcard"
name,  you'll  probably  find it easier to achieve your  goal  by
using  the interactive mode of NUSQ.   Another instance where  it
would  be easier to use interactive mode is one where  the  files
you wish to unsqueeze are on more than one disk, in more than one
drive.  The command
 
                             A>nusq
 
displays the startup message, then prompts for command input with
an asterisk ("*").
 
NUSQ  Version x.xx
Dave Rand, Paul Homchick and Cliff Sharp  xx/xx/xx
Use: NUSQ afn [afn afn ...] [destination drive:]
*_
 
(The underline shows the cursor position; my name appears only in
the  MS-DOS  version.)   At the asterisk,  you  type  a  filename
("wildcards"  are allowed here,  too).   NUSQ will unsqueeze  the
file,  then  print  the asterisk prompt again and wait  for  more
commands.   When  you're finished and want to exit NUSQ,  a blank
line or ^C will return you to the operating system.
 
     As  distributed,  NUSQ  won't write over  an  existing  file
without  the user confirming the operation.   Something very like
the following will happen:
 
          A>nusq foo.bqr
 
          nusq: FOO.BQR -> FOO.BAR already exists,
                Overwrite <Y>es, <N>o? overwriting...
 
In this case the user answered "Y" at the question mark, and NUSQ
went  ahead  with the operation.   If "N" is  the  response,  the
unsqueeze  operation is aborted,  and the program goes on to  the
next item in the list (or exits, if the list is empty).
 
 
 
                          INSTALLATION
 
Two user-configurable options are provided:  Confirm Before Over-
write, and Select Date Option.
 
As  distributed,  NUSQ  v1.04 will ask  for  confirmation  before
overwriting  a file,  and will use the current date and time when
creating the output file.
 
If  you  would rather have NUSQ write over  existing  files  with
wanton abandon,  without pausing and asking for confirmation, use
DEBUG.COM to patch location 0103H to be 00H instead of 0FFH.   An
example of this patch:
 
                  A>debug b:nusq.com
                  -e103
                  xxxx:0103 FF.00
                  -w
                  Writing YYYY bytes
                  -q
 
                  A>
 
 
Select Date Option allows you four choices for the way the output
file is dated.  As distributed, NUSQ will date the output file in
the same manner as most other programs do, i.e. the date and time
shown  in  directory displays will be the date and time at  which
you unsqueezed the file.   You may change this option by changing
the  byte  at  location  0104H (which you can  do  by  using  the
instructions above and the values you will see in a moment, using
the  instructions  shown  above  but  substituting  104  for  103
wherever  103  appears).   Copies of NUSQ patched in this  manner
will display a 'D' after the version number,  signifying that the
input file date option has been enabled, i.e. "1.10D".
 
The available options are:
 
     0) Leave it to DOS
     1) Output file gets the same date/time as the input file
     2) If the squeezed file contains the special date/time
          signature inserted by NSQ at squeeze time, use the
          date/time contained in that signature: otherwise,
          use the current date/time
     3) If the squeezed file contains the special date/time
          signature inserted by NSQ at squeeze time, use the
          date/time contained in that signature: otherwise,
          use the same date/time as the input file
 
 
If you would like the unsqueezed file to retain the same date and
time  shown for the input file (option 1),  patch 0104H  to  0FH.
For option 2,  patch 0104H to 0F0H;  for option 3, patch 0104H to
0FFH.
 
Following is a table that trys to explain these options:
 
option   value    use current   use input file    use encoded
 
0.        00         yes             -               -
1.        0F          -             yes              -
2.        F0          -              -              yes
3.        FF          -        do this second   try this first
 
There  is  a reason for our distributing NUSQ with the  date/time
options  disabled.   If  you have a backup utility (usually  this
applies  to  a "hard" disk) that uses the file date and  time  to
determine  whether  or  not a file should be  backed  up,  it  is
possible  that  using the input file date could cause loss  of  a
file  by  having  an 'old' date on a 'new'  file,  and  losing  a
backup.  If you are unsure whether this applies to you, leave the
date/time options unchanged until you can find out.
 
 
 
                       IN CASE OF TROUBLE
 
     First,  no  matter HOW sure you are that you're doing things
correctly,  try another method of using NUSQ.   If you tried com-
mand mode without luck,  try the interactive mode; if you were in
the interactive mode when it bombed, try command mode.  Make sure
you try at least one command that is just like one shown in  this
document  (but,  of course,  use the name of your file instead of
NERTS or ORGPLOTZ) before you conclude that things are awry.
 
     Occasionally,  for one reason or another,  it's possible  to
get a bad copy of a program or file; transmission errors and disk
errors  have  been  known to cause many problems.   (If  you  can
successfully unsqueeze at least one squeezed file,  you  probably
have  a good copy of the program;  if so,  your copy of the  file
you're  trying to unsqueeze may be the culprit.)  The best way to
tell  if  this is the case is to use a utility like CRCK  on  the
original copy of the offending file/program, and on your copy; if
the numbers you get don't match,  you most likely have a bad copy
of the file/program you checked and should obtain another copy of
it.  (Check the new copy, too, when you get it.)
 
     This  may sound silly,  but do you have the correct  version
for your operating system?  If you try to run the CP/M-86 version
under  MS-DOS,  strange things may happen;  same for  the  MS-DOS
version under CP/M-86.  Also, try using TYPE to actually type the
executable  file  on  your screen;  you'll most  likely  see  the
author's  name.   (See the history later in this document to  see
who wrote what.)
 
     If all that checks out,  the logical next step is to compare
notes  with someone locally to see if anyone else is experiencing
problems.  The system operator ("sysop") of the system from which
you obtained the software can usually be of help if you tell  him
which  version  you're using (CP/M-86 or MS-DOS) and the name  of
the file you're trying unsuccessfully to unsqueeze.  Alternative-
ly,  you  can  leave  a message addressed to  "ALL"  on  a  local
bulletin  board;  usually  some helpful person will jump in  with
suggestions.   Remember, there are no silly questions, only silly
mistakes.
 
     If you've tried all this,  and you're still sure you have  a
problem,  then it's last-resort time.  Contact the author of your
version of the program.   His name,  and a way to contact him, is
in the very beginning of the NUSQ.COM file; TYPE NUSQ.COM and you
should see it.   (If that doesn't work,  use DDT,  SID or DEBUG.)
This  is  by far the slowest method of  resolving  problems,  and
people  who contact program authors with problems caused by oper-
ator error are usually looked upon unfavorably,  so do this  only
if  all  else fails.   Be sure to include the name of the  system
where  you  got your copy of the program,  the name of  the  file
you're trying to unsqueeze and the place where you got the  file,
and  a description of what went wrong.   It might also be nice to
know the names of any people who have tried to help you with your
problem so far.
 
 
 
                        PROGRAM MESSAGES
 
Output drive = x:
 
     You  selected a disk drive different from the one containing
the original file for the output file to be created on.
 
 
No file(s) found.
 
     No  files meeting the filename specification you  gave  were
found on the disk you indicated they would be on.  Try reentering
the file specification,  or check to make sure you are specifying
the correct drive and/or disk.   Also,  if you are using wildcard
characters ('*',  '?') in the specification,  make sure the usage
is correct.
 
 
Out of memory. Use more specific filenames.
 
     NUSQ  is operating in a small workspace,  and  the  wildcard
file  specification  you gave has found a large number of  files.
The  storage  for  all these filenames has  eaten  away  so  much
workspace that NUSQ has no room left in which to unsqueeze any of
the files.   Give NUSQ a filename specification which will find a
smaller  number of files,  so that more unsqueezing workspace  is
available.   (Users  with 96K or more memory will probably  never
see this message.)
 
 
xxxxxxxx.xxx is not a squeezed file.
 
     Squeezed  files  are marked with a  particular  "signature":
(FF76), NUSQ did not find this signature. Either the beginning of
this file has been damaged,  somebody is being cute and is trying
to invent new "standards", or this file is really not a  squeezed
file.
 
 
xxxxxxxx.xxx already exists,
      Overwrite <Y>es, <N>o?
 
     A  file already exists which has the same name as that given
in  the  squeezed  file for creating  the  output  file.   A  'Y'
response  will cause NUSQ to overwrite the existing file;  a  'N'
answer  will cause NUSQ not to unsqueeze this file.   If you want
to unsqueeze this file without destroying the old, existing file,
rename the existing file before running NUSQ again.
     This  message  will  not  appear if  NUSQ  was  modified  to
overwrite with wanton abandon (see DEBUG instructions preceding).
 
 
Cannot create output file. Aborting.
 
     Either  this disk has so many files on it that there  is  no
room  left  for  a  new directory  entry,  or  (with  MS-DOS  2.x
versions) a subdirectory exists with the same name that NUSQ must
use for the output file.  In any event, you will probably need to
use  a different disk for the output file.   (See  the  preceding
instructions.)
 
 
File has illegal decode size. Aborting.
 
     Something  is  wrong with the input file;  either it is  not
really a squeezed file,  or it has been modified or  damaged,  or
(less  likely) the squeezer which created it did something wrong.
This file cannot be unsqueezed; try a new copy.
 
 
Close failed...
 
     NUSQ  was unable to close the output file.   This is a  VERY
unlikely  error,  and may mean either that your copy of  NUSQ  is
damaged  or the copy of the operating system currently in  memory
has  been corrupted somehow.   Try booting from a different disk,
or try another copy of NUSQ.  If these fail, contact the author.
 
 
ERROR - Checksums don't match in file xxxxxxxx.xxx
 
     Something is wrong with the input file;  either it has  been
modified or damaged,  or (less likely) the squeezer which created
it  did something wrong.   This file cannot be unsqueezed;  try a
new copy.
 
 
Disk full. Aborting and deleting output file.
 
     The  disk  on  which the output file is  being  written  has
become full; there is no more disk space to contain the remainder
of the file.  Create the output file on a different disk.
 
 
Premature EOF on file... aborted.
 
     NUSQ has not found the special end-of-file (EOF) mark  which
is present in every squeezed file.  Most likely, the last part of
this file is missing.  This file cannot be unsqueezed.
 
 
 
                          ANNOUNCEMENT
 
     A look at the signon message in interactive mode will reveal
that NUSQ is the result of committee action.   Said committee was
unable to agree on whether the source code should be  distributed
as  public  domain  code;   consequently,   source  code  is  not
available.
 
 
 
                             HISTORY
 
 
     NUSQ is a file unsqueezer utility written entirely in assem-
bly  language.   The  first file squeezer and unsqueezer  in  the
public domain were written by Richard Greenlaw, in the C program-
ming language.   A Z80 assembly language version was done by Gail
Zacharias  at MIT in the Spring of 1983.   In late '83 Dave  Rand
wrote  an  8080  version,  which went through  several  versions,
culminating  in USQ120.COM.   Paul Homchick assumed the  task  of
converting  Dave's  efforts  to 8086/8088 assembly  language  for
execution  under CP/M-86 in early 1984,  and I  converted  Paul's
version to run under MS-DOS a bit later.
 
 
                          CP/M VERSIONS
 
        1.08    January  28,  1984.   First released version
                uploaded to Compuserve.
 
        1.09c   March  24,  1984.   Carriage Return on empty
                line exits program.   Optimized  tree-walker
                adapted  from   MS-DOS  version resulting in
                15%  speed  increase.
 
        1.10    June  22,  1984.   Prior tree-walker was not
                as optimized as we thought.  Further optimi-
                zation borrowed from MS-DOS version, result-
                ing in another 25% increase in speed.
 
        1.11    October 15, 1984.  Version 1.10 introduced a
                bug  that  would  cause   a  'Premature EOF'
                message  to  be  displayed  if  a legitimate
                squeezed  file  used  every byte in the last
                sector.  Now fixed.
 
 
                         MS-DOS VERSIONS
 
        1.00M   March 21, 1984.  Original version uploaded to
                Compuserve.  Had  serious bug that  sometimes
                resulted in short files with no warning.
 
        1.01M   March  31,  1984.   Carriage return on  empty
                line at Command prompt ("*"),  now returns to
                DOS  instead of giving another  prompt  line.
                Short File BUG still in this version!
 
        1.02M   April 12,  1984. Fixed Random Block Write DOS
                calls.  Files now unsqueeze to exact  length,
                instead  of  128-byte multiples as  in  prior
                versions.   Buffer  flush code fixed to elim-
                inate short file bug.
 
        1.03 and 1.03D   June 22,  1984.  Decode routines re-
                written  for a 30-percent increase in  speed.
                Version 1.03D uses date and time of the input
                file when creating output file; 1.03 does not
                do so.  This date feature can be user config-
                ured  by changing a byte at offset +4 in  the
                .com  file.   See 'Installation,' above,  for
                details.   Versions prior to this one  always
                appended   a  1A  hex  to  the  end  of   the
                unsqueezed  file.   This CP/M anachronism has
                been removed in this version.
 
        1.04 and 1.04D   September 1, 1984.  Filename parsing
                routine  changed to use MS-DOS "parse"  func-
                tion call.  Prompt "No directory space" which
                used  to appear when a file  create  function
                failed  changed to read "Cannot create output
                file",  because  MS-DOS 2.xx and  later  will
                reject  the create request if a directory  by
                the same name exists.
 
        1.10 and 1.10D   October  21,   1984.   "Bug"  fixed;
                squeezed  files  which  were  100%   utilized
                (i.e.,every last byte had  significant data),
                and  which  were a multiple of 128 in length,
                would  give a "Premature EOF"  error.   Added
                date/time  handling  for  NSQ-created  files.
                Also  changed  input file handling to  handle
                file lengths more accurately.
 
CP/M and CP/M-86 are trademarks of Digital Research, Inc.
MS (as in MS-DOS) is a trademark of Microsoft, Inc.

```
{% endraw %}

## PCTERM.ASM

{% raw %}
```
;--------------------------------------------------------------------
;                             DUMBTERM
;  Original author is CJ Dunford 09/12/83, modified by Jeff Firestone
;  on 01/15/84.  This program sets up the interrupt for COM1.  It uses
;  buffered communications.  The program is based upon PC Tech Journal
;  Jan '84, p144-186.
;---------------------------------------------------------------------

bufsize      equ     4096            ;4K Buffer

LF           equ     0Ah
CR           equ     0Dh
ESC          equ     1Bh

; ------- BIOS calls

RS232        equ     14h            ;RS232 service
kbd_io       equ     16h            ;Keyboard service

; ------- INS8250 registers

THR          equ     3F8h           ;Trans holding register (write)
RBR          equ     3F8h           ;Recieve buffer register (read)
IER          equ     3F9h           ;Interrupt inable register
LCR          equ     3FBh           ;Line control register
                                    ;  Bit 7 of LCR is "DLAB". DLAB must
                                    ;  be zero to access THR, RBR, IER.
MCR         equ      3FCh           ;Modem control register
LSR         equ      3FDh           ;Line status register
MSR         equ      3FEh           ;Modem status register

; ------- Comm parameter definition
; Refer to IBM Tech Ref manual page A-20
; See PROC INIT for usage.
; ---------------------------------------
commparm   record baud:3, parity:2, stopbits:1, wordbits:2

; Buad rates
B110        equ      000b
B150        equ      001b
B300        equ      010b
B600        equ      011b
B1200       equ      100b
B2400       equ      101b
B4800       equ      110b
B9600       equ      111b

; Parity
no_parity    equ     00b
odd_parity   equ     01b
even_parity  equ     11b

; Stop bits
stop1        equ     0
stop2        equ     1

; Data bits
data7        equ     10b
data8        equ     11b


;*****************************
;         MACROS
;*****************************

@bioscall MACRO call_num, parm
;; Generates an 'INT call_num', with parm in AH
            IFNB     <parm>
              mov    ah,parm
            ENDIF
            int      call_num
            ENDM


@doscall MACRO function, parm
;; Generates a DOS function call with parm in AH
            IFNB     <parm>
              mov    al,parm
            ENDIF
            @bioscall 21h,function
            ENDM


;******************************
;    DATA & STACK SEGMENTS
;******************************

data segment para public 'data'

; ----- The string section
sgreeting      db      '--- ONLINE -0--',cr,lf,'$'
sgoodbye       db      cr,lf,'--- OFFLINE ---',cr,lf,'$'
serr1          db      '<R>$'          ;RS232 receive error
serr2          db      '<S>$'          ;RS232 send error
serr3          db      '<B>$'          ;Receive buffer overflow error

; ----- Flags
brcv_err       db     0                ;Nonzero on RS232 receive error
boverflow      db     0                ;Nonzero on buffer overflow
bdoneflag      db     0                ;Nonzero after ESC from kbd

; ----- Receive data buffer and associated pointers
; >> Buffer is empty if head point4er = tail pointer
wbufhead       dw     buffer           ;Pointer to head of buffer
wbuftail       dw     buffer           ;Pointer to tail of buffer
buffer         db     BUFSIZE dup (?)
bufend         equ    $
data ends

; ----- Stack
stack segment para stack 'stack'
              db      256 dup (?)
stack ends


;* * * * * * * * * * * * * * * * *
;         PROGRAM BODY
;* * * * * * * * * * * * * * * * *

code segment para public 'code'
             assume cs:code, ds:data, ss:stack

main         proc     far

; ------ Initialize
             push     ds                ;Set up long return to DOS
             sub      ax,ax
             push     ax
             call     init              ;Rest of initialization

; ------ Main program loop
M100:        call     buffer_check      ;Check RS232 buffer, display if char
             call     kb_check          ;Check kbd, Send to RS232.
             test     bdoneflag,0FFh    ;Non-zero if done
             jz       M100              ;Loop till ESC received

; ------ ESC received.  Clean up interrupt & exit
             call     cleanup
             ret                        ;Return to DOS
main         endp

;* * * * * * * * * * * * * * * * * * * *
;         PRIMARY BLOCKS
;* * * * * * * * * * * * * * * * * * * *

; ------ Init ---------------------------------
;Program initialization
;  set up RS232
;  set up vector for RS232 interrupt (INT 0Ch)
;  Enable IRQ4
;  Enable RS232 interrupt on data ready
; --------------------------------------------

init         proc     near

; ----- Initialize RS232 300,8,N,1
             mov      dx,0
             mov      al,commparm <B9600,even_Parity,stop1,data7>
             @bioscall RS232,0

; ----- Set up INT '0C' for IRQ4
            cli                               ;Interrupts off during setup
            push      ds                      ;Save DS
            mov       dx,offset ISR           ;Point to RS232 ISR in DS:DX
            push      cs
            pop       ds
            @doscall 25h,0Ch                  ;Set vector intr for IRQ4
            pop       ds                      ;Restore DS

; ------ Enable IRQ4 on 8259 interrupt controller
            in        al,21h                  ;Get current mask
            and       al,11101111b            ;Reset IRQ4 mask
            out       21h,al                  ;restore to IMR

; ------ Enable 8250 data ready interrupt
            mov      dx,LCR                   ;DX <== LCR
            in       al,dx                    ;reset DLAB for IER access
            and      al,01111111b
            out      dx,al
            mov      dx,IER                   ;address IER
            mov      al,00000001b             ;Enable data-ready interrupt
            out      dx,al

; ------ Enable OUT2 on 8250
            mov      dx,MCR                   ;Address MCR
            mov      al,00001000b             ;Enable OUT2
            out      dx,al
            sti

; ------ Display greeting & return
            mov      ax,data                  ;Establish data seg address
            mov      ds,ax
            mov      dx,offset sgreeting      ;Point to greeting
            call     strdisp                  ;Display it
            ret
init endp

; ------ Buffer Check ------------------
; RS232 buffer check
;
; This block checks the received data buffer.
; It functions as follows:
;
; If the RS232 input buffer is not empty
;   Get the first character
;   Display the character
;   Update buffer pointer
; If the RS232 receive error flag is nonzero
;   Display an error indicator
;
; Entry:
;   No requirement
; Exit
;   AX, BX, DX destroyed
; --------------------------------------


buffer_check proc near

; ------ Check buffer status
          mov      bx,wbufhead               ;buffer head pointer
          cmp      bx,wbuftail               ;buffer empty if head = tail
          je       BC100

; ------ Something in buffer--get 1st char, fix pointers
          mov      al,[bx]                   ;get the char
          call     incptr                    ;Bump buffer head pointer
          mov      wbufhead,bx

; ------ Display character received. Filter CR/LF
          cmp    al,LF                       ;Is it a line feed
          je     BC100                       ;Skip display if yes
          call   chdisp                      ;Display if no
          cmp    al,CR
          jne    BC100
          mov    al,LF
          call   chdisp

; ------ Test RS232 receive status; display errors
BC100:    Test   brcv_err,0FFh               ;Flag nonzero if errors
          jz     BC200                       ;Jump if no errors
          mov    dx,offset serr1             ;Point to error msg
          call   strdisp
          mov    brcv_err,0                  ;Clear error flag

; ----- Test for buffer overflow; display errors
BC200:
         test    boverflow, 0FFh
         jz      BC300
         mov     boverflow,0                 ;Clear the flag
         mov     dx,offset serr3             ;Point to error msg
         call    strdisp

BC300:   ret
buffer_check endp

; ----- KB_CHECK -----------------------------------
; Check the keyboard.  Functions as follows
;
; Check the keyboard status
; If a characteris available
;   If the character is ESC
;     set the done flag
;   ELSE
;     send it to RS232 and watch for errors
;
;  This routine does not echo the characters to the display.
;
; Entry:
;   No requirement
; Exit
;   AX, DX destroyed
; --------------------------------------

kb_check proc near

; ----- Poll keyboard, check chars received
         call    kb_poll                 ;Poll the keyboard
         jz      KBC900                  ;Kbd clear, exit
         cmp     al,ESC                  ;Escape?
         jne     KBC100
         mov     bdoneflag,0FFh          ;Yes, set terminate flag
         jmp     short KBC900

; ----- Send the received char, watch for errors
KBC100:  Call    RS232_out               ;Send it
         test    ah,80h                  ;Time out?
         jz      KBC900
         mov     dx,offset serr2         ;Point to error msg
         call    strdisp                 ; and display

KBC900:  ret
kb_check endp

; ----- ISR ------------------------------------------------------
; This is the RS232 interrupt service routine.  It is entered
; whenever the RS232 port interrupts on a 'data ready'
; condition.  The routine simply reads the data from the asynch
; chip and stuffs it in the buffer.  Note that the process of reading
; the received data register in the 8250 clears IRQ4.  However, the
; 8259 must be told specifically that the interrupt service is complete.
;
; This replaces the function 2 of BIOS interrupt 14h (receive a character
; over the comm line).  Since it cannot return errors in a register, it
; puts the error marker in memory at 'brcv_err'.  The error flag is
; sticky -- a successful read will not clear a prior error indication.
; This allows the program mainline to examine the error status at its
; leisure.  Error bits are the same as in RS232OUT, above, except that
; ONLY the error bits are set, and bit 7 is not used (always 0).  In
; other words, brcv_err is nonzero only on an error.  Timeout errors
; are not possible here.
;
; The ISR will set the overflow flag if the buffer should overflow.
; This shouldn't happen.
; --------------------------------------------------------------------

ISR      proc   near
         sti                      ;Allow other interrupts
         push   ax                ;Save all regs used
         push   bx
         push   dx
         push   si
         push   ds

; ---- Establish data addressability
         mov    ax,data
         mov    ds,ax

; ---- Get error bits
         mov    dx,LSR            ;Save address of RS232
         in     al,dx             ;Get status
         and    al,00011110b      ;Mask non-error bits
         jz     ISR010            ;Skip error set if OK
         mov    brcv_err,al       ;Set error indicator

; ---- Get incoming character and buffer it
ISR010:  mov    dx,RBR            ;Receive buffer
         in     al,dx             ;Get input buffer
         mov    bx,wbuftail       ;Buffer input pointer
         mov    si,bx             ;Set pointer before increment
         call   incptr            ;Bump input pointer
         cmp    bx,wbufhead       ;Overflow if head = tail
         je     ISR020            ;Overflow
         mov    [si],al           ;No overflow, save char in buf
         mov    wbuftail,bx       ;And new input pointer
         jmp short ISR999

ISR020:  mov    boverflow, 0FFh   ;Set overflow flag

; ---- Signal end of interrupt to 8259
ISR999:  cli
         mov    al,20h            ;Non-specific EOI
         out    20h,al            ;Send it

; ---- Restore regs & return.  IRET reenables interrupts
         pop    ds
         pop    si
         pop    dx
         pop    bx
         pop    ax
         iret
ISR endp

; ---- CLEANUP --------------------
; End of program housekeeping
;   -- Disable IRQ4
;   -- Disable 8250 interrupts
;   -- Disable OUT2
;   -- Display offline message
; ---------------------------------

cleanup proc near

; ---- Disable IRQ4 on 8259
         cli
         in      al,21h                ;IMR
         or      al,00010000b          ;Mask bit 4 -- IRQ4
         out     21h,al

; ---- Disable 8250 data ready interrupt
         mov     dx, LCR               ;DX <=== LCR
         in      al,dx                 ;Reset DLAB for IER access
         and     al,01111111b
         out     dx,al
         mov     dx,IER                ;Address IER
         mov     al,0                  ;Disable all 8250 interrupts
         out     dx,al

; ---- Disable OUT2 on 8250
       mov      dx,MCR                ;Address MCR
       mov      al,0                  ;Disable OUT2
       out      dx,al
       sti

; ---- Display bye-bye
       mov     dx,offset  sgoodbye
       call    strdisp
cleanup endp


; * * * * * * * * * * * * * *
;   I/O & General Subroutines
; * * * * * * * * * * * * * *

; ---- KB_POLL ------------------------------
; Set/reset Z flag on keyboard buffer status.
;
; Entry:
;   No requirements
; Exit:
;   Z = 1 if nothing available
;   Z = 0 if char available from kbd
;   IF Z = 0
;     AL = char
;     AH = scan code
;   Other regs preserved
; ---------------------------------------------

kb_poll proc near
        @bioscall  kbd_io,1             ;Poll KB. Sets Z flag if KB bfr empty
        jz         KB999                ;Nothing there
        pushf                           ;Save flag status
        @bioscall  kbd_io,0             ;Something there; get it
        popf
KB999:
        ret
kb_poll endp

; -- RS232_OUT ----------------------------------------
; RS232 output routine
;
; This routine sends one character to the RS232 port.
; It replaces function 1 of BIOS int 14K.  This is
; necessary because BIOS will disable the RS232
; interrupt (by disabling OUT2) every time it is
; called.
;
; Entry:
;   AL = character to be transmitted
; Exit:
;   AH = send status
;     Bit 7 = 1 if RS232 timeout occurred
;     If bit 7 = 0
;       bit 6: trans shift register empty
;       bit 5: trans holding register empty
;       bit 4: break detect
;       bit 3: framing error
;       bit 2: parity error
;       bit 1: overrun error
;       bit 0: data ready
;  Other regs preserved.
; -------------------------------------------------------

RS232_out proc near
          push   bx             ;Save regs used
          push   cs
          push   dx

; ----- Set up RS232
          mov    bl,al          ;Save char to bl temporarily
          mov    dx,MCR         ;Modem Control Register
          mov    al,00001011b   ; OUT2, DTR, RTS
          out    dx,al
          sub    cx,cx          ;Initialize timeout count
          mov    dx,MSR         ;Modem Status Register

; ----- Wait for DSR
RS100:
          in     al,dx
          test   al,20h         ;Data set ready?
          jnz    RS150          ;Yes
          loop   RS100          ;No, retry till timeout
          mov    ah,80h         ;Set timeout
          jmp    short RSXIT    ;and quit

; ----- Wait for CTS
RS150:
          sub    cx,cx          ;Another timeout count
RS200:
          in     al,dx
          test   al,10h         ;Clear to send?
          jnz    RS250          ;Yes
          loop   RS200          ;No, loop till timeout
          mov    ah,80h         ;TImeout,set flag
          jmp short RSXIT       ;And quit

; ----- Wait for THRE
RS250:
          mov    dx,LSR         ;Line Status Register
          sub    cx,cx          ;Yes another timeout count
RS300:
          in     al,dx          ;LSR status
          test   al,20h         ;Transmit holding reg empty?
          jnz    RS350          ;Yes
          loop   RS300          ;No, loop till timeout
          mov    ah,80h         ;Timeout, set flag
          jmp short RSXIT

; ------ Get line status, send char
RS350:
          mov    ah,al          ;Get line status for return
          and    ah,01111111b   ;Mask out bit 7
          mov    al,bl          ;Restore char to AL
          mov    dx,THR         ;Transmit holding register
          out    dx,al          ;Output it to RS232
RSXIT:
          pop    dx
          pop    cx
          pop    bx
          ret
RS232_out endp


; ---- CHDISP ----------------------------------
; Display the character in AL on the CRT
; Entry:
;   AL = char
; Exit:
;   All regs restored
; ----------------------------------------------

chdisp proc near
       push   ax
       push   dx
       mov    dl,al
       @doscall 2
       pop    dx
       pop    ax
       ret
chdisp endp


; ---- STRDISP ----------------------------
; Display the string at DS:DX on the CRT
; Entry:
;   DS:DX ==> string
; Exit:
;   All regs restored
; -----------------------------------------

strdisp proc near
        push      ax
        @doscall 9
        pop       ax
        ret
strdisp endp


; ----- INCPTR ------------------------------
; Increments the buffer pointer in reg BX.
; If the pointer goes beyond the end of the
; buffer, wrap around to start.
;
; Entry:
;   BX = buffer pointer
; Exit
;   BX = advanced buffer pointer
;   Other regs restored
; --------------------------------------------

incptr proc near
       inc     bx                            ; Bump pointer
       cmp     bx,offset bufend              ; Past end?
       jne     IP100                         ; Jump if not
       mov     bx,offset buffer              ; Else point to start
IP100:
       ret
incptr endp
code   ends
       end  main
```
{% endraw %}

## PCTERM.DOC

{% raw %}
```
------------------------------------------------------------------------
                             DUMBTERM
------------------------------------------------------------------------


  o   This is a simple terminal program which uses interrupt driven
      buffered communications.  The program can thus operated at
      9600 buad without lossing data.  All terminal IO is channeled
      through the COM1 serial device.

  o   The program can be used as the basis for a more complex high
      performance communication program.  For example, I have used
      it as the core of a multiple file transmission utility.

  o   The program was written by CJ Dunford with trivial modifications
      by myself (Jeff Firestone).  It appeared in the Jan '84 issue of
      PC Tech Journal, p144-186.


------------------------------------------------------------------------


```
{% endraw %}

## WARGAMES.BAS

{% raw %}
```bas

0 '===START OF FILE===
10 '*******  AUTOMATIC SEQUENCE DIALER (a la "Wargames") **********************
20 'Written for the IBM PC and HAYES SMARTMODEM by Steve Klein 9/25/83
30 'Modified (Steve wouldn't recognize it anymore) with enhancements (starting
40 'number, printer on/off option, abort/hang up) by John Siers 12/28/83
45 '**************************************************************************
50 'This program will dial numbers in sequence looking for computer carrier
60 'signals. When carrier is found, phone # is listed to printer and/or screen.
75 '**************************************************************************
100 CLEAR ,,2000:XY=2
110 KEY OFF:COLOR 0,7:CLS:LOCATE 10,25:PRINT "Wargames Dialer Program"
120 LOCATE 12,26:PRINT "Written by Steve Klein":LOCATE 14,26:PRINT "Modified by John Siers"
125 FOR I=1 TO 5000:NEXT
130 A$="":AB$="":CLS:PRINT " PLEASE ENTER PREFIX DIGITS (IF ANY), THE AREA CODE (IF ANY), AND THE":PRINT "FIRST THREE NUMBERS [hyphens may be used to separate e.g.9-1-nnn-nnn]: ":INPUT "~~~>",A$
140 INPUT "START DIALING AT # (LAST 4 DIGITS)";SN:IF SN>9999 OR SN<0 THEN 140 ELSE N1=INT(SN/1000):N2=INT((SN-(N1*1000))/100):N3=INT((SN-(N1*1000+N2*100))/10):N4=SN-(N1*1000+N2*100+N3*10)
160 PRINT "LIST COMPUTER CONNECTIONS TO <S>CREEN ONLY OR <P>RINTER AND SCREEN?"
170 PRINTON$=INKEY$:IF PRINTON$<>"S" AND PRINTON$<>"s" AND PRINTON$<>"P" AND PRINTON$<>"p" THEN 170
200 '*** Begin dialing sequence ***
205 CLS
210 FOR E=N1 TO 9:FOR B=N2 TO 9:FOR C=N3 TO 9:FOR D=N4 TO 9:N1=0:N2=0:N3=0:N4=0
220 OPEN "COM1:300,n,8,1,CS,DS" AS #1:R=32:PRINT #1,"ATDT"A$;E;B;C;D
225 DIAL=E*1000+B*100+C*10+D:DL$=STR$(DIAL):IF LEN(DL$)=2 THEN DN$="000"+RIGHT$(DL$,1) ELSE IF LEN(DL$)=3 THEN DN$="-00"+RIGHT$(DL$,2) ELSE IF LEN(DL$)=4 THEN DN$="-0"+RIGHT$(DL$,3) ELSE DN$="-"+RIGHT$(DL$,4)
230 GOSUB 500:LOCATE 25,1:PRINT "DIALING ";A$;DN$;:LOCATE 25,35:PRINT "TIME LEFT";R;"SECONDS: [A]=ABORT [H]=HANG UP ";
240 '*** Check for input to comm buffer (carrier) ***
250 A=LOC(1):IF A>(20+LEN(A$)) THEN 280
260 IF R>0 THEN 230
270 CLOSE:FOR I=1 TO 3000:NEXT:NEXT D,C,B,E
275 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "END OF DIALING SEQUENCE:";:INPUT " PRESS ENTER TO CONTINUE ---->";XX$:GOTO 130
278 '*** Found One!!! ***
280 SOUND 150,5:XY=XY+1:LOCATE XY,1:PRINT A$;DN$:IF PRINTON$="P" OR PRINTON$="p" THEN LPRINT A$;DN$
290 GOTO 270
500 '*** Countdown time and check for abort/hang up ***
510 LET R=R-1:FOR I=1 TO 1050:NEXT:AB$=INKEY$:IF AB$="A" OR AB$="a" THEN 520 ELSE IF AB$="H" OR AB$="h" THEN 530 ELSE RETURN
520 PRINT #1,"ATH":CLOSE:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:INPUT "DIALING ABORTED: PRESS ENTER TO CONTINUE ---->";XX$:GOTO 130
530 PRINT #1,"ATH":R=0:RETURN
1000 '***********************************************************************
1010 ' Another helpful program from Steve Klein
1020 ' With enhancements by John Siers (who found the original on the
1030 ' Lehigh Valley BBS, Allentown PA -- 12/83)
```
{% endraw %}

## XMODEM.DOC

{% raw %}
```
MODEM PROTOCOL OVERVIEW  178 lines, 7.5K

1/1/82 by Ward Christensen.  I will maintain a master copy of
this.  Please pass on changes or suggestions via CBBS/Chicago
at (312) 545-8086, or by voice at (312) 849-6279.

NOTE this does not include things which I am not familiar with,
such as the CRC option implemented by John Mahr.

Last Rev: (none)

At the request of Rick Mallinak on behalf of the guys at
Standard Oil with IBM P.C.s, as well as several previous
requests, I finally decided to put my modem protocol into
writing.  It had been previously formally published only in the
AMRAD newsletter.

	Table of Contents
1. DEFINITIONS
2. TRANSMISSION MEDIUM LEVEL PROTOCOL
3. MESSAGE BLOCK LEVEL PROTOCOL
4. FILE LEVEL PROTOCOL
5. DATA FLOW EXAMPLE INCLUDING ERROR RECOVERY
6. PROGRAMMING TIPS.

-------- 1. DEFINITIONS.
<soh>	01H
<eot>	04H
<ack>	05H
<nak>	15H
<can>   18H

-------- 2. TRANSMISSION MEDIUM LEVEL PROTOCOL
Asynchronous, 8 data bits, no parity, one stop bit.

    The protocol imposes no restrictions on the contents of the
data being transmitted.  No control characters are looked for
in the 128-byte data messages.  Absolutely any kind of data may
be sent - binary, ASCII, etc.  The protocol has not formally
been adopted to a 7-bit environment for the transmission of
ASCII-only (or unpacked-hex) data , although it could be simply
by having both ends agree to AND the protocol-dependent data
with 7F hex before validating it.  I specifically am referring
to the checksum, and the block numbers and their ones-
complement.
    Those wishing to maintain compatibility of the CP/M file
structure, i.e. to allow modemming ASCII files to or from CP/M
systems should follow this data format:
  * ASCII tabs used (09H); tabs set every 8.
  * Lines terminated by CR/LF (0DH 0AH)
  * End-of-file indicated by ^Z, 1AH.  (one or more)
  * Data is variable length, i.e. should be considered a
    continuous stream of data bytes, broken into 128-byte
    chunks purely for the purpose of transmission. 
  * A CP/M "peculiarity": If the data ends exactly on a
    128-byte boundary, i.e. CR in 127, and LF in 128, a
    subsequent sector containing the ^Z EOF character(s)
    is optional, but is preferred.  Some utilities or
    user programs still do not handle EOF without ^Zs.
  * The last block sent is no different from others, i.e.
    there is no "short block".  

-------- 3. MESSAGE BLOCK LEVEL PROTOCOL
 Each block of the transfer looks like:
<SOH><blk #><255-blk #><--128 data bytes--><cksum>
    in which:
<SOH>       = 01 hex
<blk #>     = binary number, starts at 01 increments by 1, and
              wraps 0FFH to 00H (not to 01)
<255-blk #> = blk # after going thru 8080 "CMA" instr, i.e.
              each bit complemented in the 8-bit block number.
              Formally, this is the "ones complement".
<cksum>     = the sum of the data bytes only.  Toss any carry.

-------- 4. FILE LEVEL PROTOCOL

---- 4A. COMMON TO BOTH SENDER AND RECEIVER:

    All errors are retried 10 times.  For versions running with
an operator (i.e. NOT with XMODEM), a message is typed after 10
errors asking the operator whether to "retry or quit".
    Some versions of the protocol use <can>, ASCII ^X, to
cancel transmission.  This was never adopted as a standard, as
having a single "abort" character makes the transmission
susceptible to false termination due to an <ack> <nak> or <soh>
being corrupted into a <can> and canceling transmission.
    The protocol may be considered "receiver driven", that is,
the sender need not automatically re-transmit, although it does
in the current implementations.

---- 4B. RECEIVE PROGRAM CONSIDERATIONS:
    The receiver has a 10-second timeout.  It sends a <nak>
every time it times out.  The receiver's first timeout, which
sends a <nak>, signals the transmitter to start.  Optionally,
the receiver could send a <nak> immediately, in case the sender
was ready.  This would save the initial 10 second timeout. 
However, the receiver MUST continue to timeout every 10 seconds
in case the sender wasn't ready.
    Once into a receiving a block, the receiver goes into a
one-second timeout for each character and the checksum.  If the
receiver wishes to <nak> a block for any reason (invalid
header, timeout receiving data), it must wait for the line to
clear.  See "programming tips" for ideas
    Synchronizing:  If a valid block number is received, it
will be: 1) the expected one, in which case everything is fine;
or 2) a repeat of the previously received block.  This should
be considered OK, and only indicates that the receivers <ack>
got glitched, and the sender re-transmitted; 3) any other block
number indicates a fatal loss of synchronization, such as the
rare case of the sender getting a line-glitch that looked like
an <ack>.  Abort the transmission, sending a <can>

---- 4C. SENDING PROGRAM CONSIDERATIONS.

    While waiting for transmission to begin, the sender has
only a single very long timeout, say one minute.  In the
current protocol, the sender has a 10 second timeout before
retrying.  I suggest NOT doing this, and letting the protocol
be completely receiver-driven.  This will be compatible with
existing programs.
    When the sender has no more data, it sends an <eot>, and
awaits an <ack>, resending the <eot> if it doesn't get one. 
Again, the protocol could be receiver-driven, with the sender
only having the high-level 1-minute timeout to abort.


-------- 5. DATA FLOW EXAMPLE INCLUDING ERROR RECOVERY

Here is a sample of the data flow, sending a 3-block message.
It includes the two most common line hits - a garbaged block,
and an <ack> reply getting garbaged.  <xx> represents the
checksum byte.

SENDER					RECEIVER
				times out after 10 seconds,
			<---		<nak>
<soh> 01 FE -data- <xx>	--->
			<---		<ack>
<soh> 02 FD -data- xx	--->	(data gets line hit)
			<---		<nak>
<soh> 02 FD -data- xx	--->
			<---		<ack>
<soh> 03 FC -data- xx	--->
   (ack gets garbaged)	<---		<ack>
<soh> 03 FC -data- xx	--->		<ack>
<eot>			--->
			<---		<ack>

-------- 6. PROGRAMMING TIPS.

* The character-receive subroutine should be called with a
parameter specifying the number of seconds to wait.  The
receiver should first call it with a time of 10, then <nak> and
try again, 10 times.
  After receiving the <soh>, the receiver should call the
character receive subroutine with a 1-second timeout, for the
remainder of the message and the <cksum>.  Since they are sent
as a continuous stream, timing out of this implies a serious
like glitch that caused, say, 127 characters to be seen instead
of 128.

* When the receiver wishes to <nak>, it should call a "PURGE"
subroutine, to wait for the line to clear.  Recall the sender
tosses any characters in its UART buffer immediately upon
completing sending a block, to ensure no glitches were mis-
interpreted.
  The most common technique is for "PURGE" to call the
character receive subroutine, specifying a 1-second timeout,
and looping back to PURGE until a timeout occurs.  The <nak> is
then sent, ensuring the other end will see it.

* You may wish to add code recommended by Jonh Mahr to your
character receive routine - to set an error flag if the UART
shows framing error, or overrun.  This will help catch a few
more glitches - the most common of which is a hit in the high
bits of the byte in two consecutive bytes.  The <cksum> comes
out OK since counting in 1-byte produces the same result of
adding 80H + 80H as with adding 00H + 00H.

END       END  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0316

     Volume in drive A has no label
     Directory of A:\

    DISKO316 ZIP     85232   3-20-90  12:49a
            1 file(s)      85232 bytes
                           74752 bytes free
