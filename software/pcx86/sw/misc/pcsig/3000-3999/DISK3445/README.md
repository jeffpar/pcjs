---
layout: page
title: "PC-SIG Diskette Library (Disk #3445)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3445/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3445"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CONTROL.DOC

{% raw %}
```

PROCON CONTROL Version 1.0  25/11/1987

Copyright (C) Peter E. King, 1987

ADDRESS:       ProCon Software
               P.O. Box 43
               Essendon
               Victoria, 3040
               AUSTRALIA.    

               (This is a Down Under product)

Requirements:

IBM-PC  or  compatible  with  DOS version  2.0  or  higher.   One 
parallel printer port with inter-connecting hardware.  To run the 
BASIC  source programs,   BASICA,  GWBASIC or any  compiler   IBM 
BASIC compiler, QuickBASIC or Turbo-BASIC is required.


Copying and distribution:

PROCON  CONTROL  may  be copied and distributed  as  a  SHAREWARE 
program.   That  is  the  disk may be copied and  distributed  to 
others   provided  that  ALL  files  on  this  disk  are   copied 
unmodified.   It  may NOT be distributed on BBS's as NO  controls 
are  provided (This may be reviewed in future but little  returns 
have been forthcoming from BBS users!).   The program may NOT  be 
used  as  a value added product and NO fee can be charged  except 
for a disk and handling charge of up to $10 Australian or $6 U.S.

The copyright notices are to preserve my options,  and to protect 
you  from  the  untoward modifications  of  others.   It  is  NOT 
intended  to  prevent the public distribution of PROCON  CONTROL, 
subject to the above limitations.


INTRODUCTION
============

YES!   You  can  turn your IBM-PC or compatible into  a  COMPUTER 
CONTROL CENTRE.   On this disk are a number of programs which use 
any  OUTPUT port on the computer to control 8 relays.   In  fact, 
any system with a parallel printer output can be used!

To  get  started,  simply connect eight LED's via 1.5K  resistors 
from  each  data  line of your printer port (pins 2 to 9  of  the 
25  pin connector) to ground (pin 22).   Then,  when you run  the 
following programs you will be able to see what's happening.

If  you  use  PROCON CONTROL,  please support it  by  becoming  a 
registered user.   For $30 AUS ($25 U.S. from overseas), you will 
receive the lastest version on disk, complete with ALL source and 
executable code.   A circuit diagram of the necessary connections 
to control up to 12 relays from a single printer port is provided 
together with full instructions.  As a BONUS, I will also provide 
a simple logic control program which provides control of 8 inputs 
and  8  outputs on the computer in an inter-active PLC  language.  
(e.g.  AND X1,  OR X2,  OUT Y1 etc).   Ideal for controlling  all 
sorts   of  devices  and  learning  the  fundamentals  of   PLCs.  
(Programmable Logic Controller).

Suppport:

If  you are a contributor (bless your little heart!),   I'll most 
happily  help you with any difficulties encounted.   Mail is  the 
preferred  method  of exchange,  but you may also contact  me  on 
VIATEL no. 333749600 or FIDO-NET 631 node 323.

If  you are not a contributor (oh dear!),  please send a  stamped 
SAE,  and I'll try to get back to you.   Overseas letters will be 
answered but these will take a little longer.


PROBLEMS AND ENHANCEMENTS
=========================

I  am most certainly interested in any problems or bugs with  the 
programs.   And,  indeed,  if  you have any suggestions  or  have 
produced any enhancements to these programs I would be interested 
in  hearing from you.   Please READ THESE INSTRUCTIONS  CAREFULLY 
before reporting any problems.

I  am  continually improving these programs.   Your  contribution 
will  aid  the development of further  enhancements,  which  will 
include a memory resident REMOTE program - so you can continue to 
use  the computer for other things while it switches the  outputs 
ON  and OFF at selected times.   I am also working on day of week 
control  so  the  you can switch an output only  from  MONDAY  to 
FRIDAY  for example.  And random switching for burgular  deterent 
and lighting effects etc.


LIST OF FILES
=============

CLOCK.SYS      New system clock driver for DOS.

CONFIG.SYS     Configure system file for CLOCK.SYS.

CONTROL.COM    Controls relays from keyboard, memory resident.

EXAMPLE.BAS    BASIC program example of how to control relays.

STICK.BAS      BASIC program shows how to control from joystick.

REMOTE.BAS     BASIC program controls relays by DATE and TIME.

REMOTE.EXE     Compiled version of REMOTE program.

CLEAR.REM      REMOTE file to clear all settings.

TEST.REM       REMOTE file example of settings.

SHIFT.REM      REMOTE file example of shift register.

ORDER.DOC      ORDER form for contribution.

NEW.DOC        NEW products list.
     
README.DOC     This file.


SYSTEM FILES
============

The  CLOCK.SYS device driver is provided to allow the DATE to  be 
incremented  when the TIME clocks over to 00:00:00.00.   This  is 
done  already in DOS version 3 but not in version 2.   It is also 
useful  in DOS version 3 because some  programs  (i.e.  on-screen 
clocks  etc) may 'steal' the timer flag indicating that the clock 
has passed 24 hours.  Also, since this driver monitors the system 
timer  continually,  date increments cannot be lost when the time 
is  not  read for 24 hours.   To install the driver  simply  copy 
CLOCK.SYS  to  your boot disk and include DEVICE =  CLOCK.SYS  in 
your CONFIG.SYS file.  If one does not exist then copy the one on 
this disk to your boot disk.


CONTROL
=======

This  is  a  memory resident program which only needs to  be  run 
ONCE.  When installed,  the program allows the keyboard to toggle 
the eight data lines on your printer port ON and OFF.   Hold down 
the Ctrl key and press F1 to F8,  these toggle the eight outputs.  
To switch ALL outputs OFF press Ctrl-F10 and all ON by Ctrl-F9.

The  program  uses  the printer port 378.   To  change  the  port 
setting use your debug program as follows:

A>DEBUG CONTROL.COM           <execute DEBUG and load program>

-E104                         <enter into memory at 104>

XXXX:0104  78 LL  03 HH       <LL - low /HH - high port address>

-W                            <write new program>

-Q                            <quit - go back to DOS>


You may now run the program, which remains resident in memory and 
can be utilised at ANY TIME - even whilst running other programs!


BASIC PROGRAMS
==============

The  BASIC source programs show how the outputs can be controlled 
from:   1.  The computer (EXAMPLE)  2.  The joystick  (STICK) and  
3.  The system date and time (REMOTE).

To change the PORT address simply alter the line PORT=&H378.


REMOTE
======

A  compiled version of REMOTE is provided on the disk for  faster 
scanning  of the dates and times.    Execute this by entering the 
word  REMOTE then pressing Return.   You will first be asked  for 
the  printer port (if you have more than one!) which you wish  to 
use as the output.

The OPTION menu then appears:

(T)  Changes  system time and date.   And the repeat  time,  this 
     time  is  used when the (R) Reset and  execute  function  is 
     selected.

(L)  Load from file.   Allows all the 8 outputs (RL1 - RL8)  with 
     their ten settings to be loaded from disk.

(S)  Save  to file.   Allows the settings to be saved to disk for 
     later loading.

(R)  Reset  and  Execute.   This resets the time to 00:00:00  and 
     then begins execution.   This allows a timed sequence to  be 
     repeated.   When the repeat time is reached then the time is 
     again reset to zero and the sequence repeats once more.

(E)  Execute.   Begins  scanning dates and times from the current 
     setting.

(1)  Set ON/OFF dates and times for RL 1.

...  ....................................

(8)  Set ON/OFF dates and times for RL 8.


DATE AND TIME SETTINGS
======================

Each  output (RL1 to RL8) is allowed up to ten  ON/OFF  settings.  
DATE1  and  TIME1  set the ON time and DATE2 and  TIME2  the  OFF 
time.   NOTE:  ALL dates are entered in the format YYYY-MM-DD for 
comparison purposes. Times must be entered in the standard format 
HH:MM:SS  (24 hour clock).   When the ON date and time occurs the 
output  is switched ON and when the OFF date and time is  reached 
it turns OFF again.  If DATE1 is not provided then only the times 
are taken into account and the output switches ON and OFF at  the 
times set every 24 hours.


APPLICATIONS
============

This  program  may  be used to control a  sprinkler  system.   To 
switch  a radio or tape recorder ON and OFF.   Or as  a  burgular 
deterent  by  switching things ON and OFF at particular times  of 
the  night  and day.   The program could also be used  for  model 
control  such as a robot or train control by using the repeatable 
timed  sequence.  The output relays may be connected to a  remote 
control  allowing  the TV,  HI-FI etc to be controlled  from  the 
computer.  The applications are only limited by your imagination!


(C) 1987, ProCon Software, Box 43, Essendon, 3040, AUSTRLALIA.

```
{% endraw %}

## EXAMPLE.BAS

{% raw %}
```bas
10 DEFINT A-Z
20 PORT=&H378:' Set to port address
30 A=1
40 OUT PORT,A XOR &HFF:'this inverts value!
50 TIME$="00:00:00"
60 IF TIME$<"00:00:01" THEN 60
70 A=2*A
80 IF A<256 THEN 40
90 GOTO 30
```
{% endraw %}

## ORDER.DOC

{% raw %}
```

                                PROCON CONTROL
                                ==============

       If  you would like to receive the lastest version of CONTROL  and 
       the other goodies mentioned, including full USER SUPPORT write to 
       the  address shown below and include your personal check or money 
       order  for $30 Australian or $25  U.S.  (U.S.   orders   - please 
       allow 2 weeks for delivery).   This price includes packaging  and 
       handling,   worldwide!  INCREDIBLE!    NO!  ProCon   Software  is 
       committed to the  concept  of  good, cheap software being readily   
       available   and  without    copying  restrictions.    Your  money 
       will  encourage  the development  of this product and other value 
       products by ProCon.


                    Send To:     Peter E. King
                                 ProCon Software
                                 P.O. Box 43
                                 Essendon, 3040
                                 AUSTRALIA



       -----------------------------------------------------------------
                                  ORDER FORM
       -----------------------------------------------------------------

       YES,    I  like  the CONTROL disk and would like to  receive  the        
       full  source  code and instructions.    I enclose  a  check/money 
       order* of [      ] being for [   ] subscription(s).


       MY NAME:       _____________________________________


       ADDRESS:       _____________________________________

                      _____________________________________

                      _____________________________________

                      _____________________________________



       STATS:    My Computer is a  ____________________________________.

                 I run DOS version _____.  I have CONTROL version _____.

                 I obtained my copy of CONTROL from ___________________.


       * Payable to:  PROCON SOFTWARE, Box 43, Essendon 3040, AUSTRALIA.

       -----------------------------------------------------------------

```
{% endraw %}

## REMOTE.BAS

{% raw %}
```bas
100 REM *** REMOTE CONTROL PROGRAM BY P.E.KING ***
110 REM
120 REM *** DATE 11/11/1987 (C) COPYRIGHT 1987 ***
130 REM
140 DEFINT A-Z
150 PORT=&H378:'Port address
160 DIM D$(170),T$(170)
170 DN=21:'index increment
180 I=0:'all off
190 OUT PORT,I XOR &HFF:'send out
200 SCREEN 0:WIDTH 80:KEY OFF:CLS:LOCATE,,1
210 GOSUB 450:'Print sign on
220 GOSUB 1220:'get date/time entries
230 REM
240 REM *** MAIN EXECUTION LOOP ***
250 REM
260 CLS:PRINT:PRINT:PRINT"Now executing REMOTE...";
270 GOSUB 620:'scan dates & times
280 OUT PORT,I XOR &HFF:'send out
290 A$=INKEY$:IF A$=CHR$(27) THEN 400:'Escape
300 IF A$<>"" THEN 180
310 LOCATE 1,1:PRINT CT$,CD$;
320 IF RT THEN IF CT$>=RT$ THEN TIME$="00:00:00"
330 GOTO 270
340 REM
350 REM *** END OF MAIN LOOP ***
360 REM
370 REM
380 REM *** END PROGRAM ***
390 REM
400 I=0:OUT PORT,I XOR &HFF:'all off
410 CLS:PRINT:PRINT"GoodBye from REMOTE...":PRINT:END
420 REM
430 REM *** SIGN-ON MESSAGE AND WAIT ***
440 REM
450 PRINT
460 PRINT"REMOTE DATE/TIME CONTROL by P.E.King"
470 PRINT
480 PRINT"From:  ProCon Software"
490 PRINT"       P.O. Box 43"
500 PRINT"       Essendon, 3040"
510 PRINT"       AUSTRALIA"
520 PRINT
530 PRINT"       Copyright 1987"
540 PRINT
550 PRINT"PRESS any key to continue...";
560 A$=INKEY$:IF A$="" THEN 560 ELSE IF A$=CHR$(27) THEN 400:'exit
570 PRINT
580 RETURN
590 REM
600 REM *** GET DATE/TIME LOOP THOU R1 TO R8 ***
610 REM
620 N=1:M=1:R=1:GOSUB 1120:'Get current date & time
630 I=0:'all off
640 GOSUB 750:'test against date & time
650 IF EX THEN 690
660 IF ST THEN I=I OR M:GOTO 690
670 N=N+2:'next date/time
680 GOTO 640
690 R=R+DN:N=R:M=M*2:'next relay
700 IF M<256 THEN 640
710 RETURN
720 REM
730 REM *** TEST DATE/TIME AGAINST ONE SETTING ***
740 REM
750 D$=D$(N):T$=T$(N):D1$=D$(N+1):T1$=T$(N+1):EX=0
760 IF D$<>"" THEN 870:'if date included
770 IF T$="" THEN EX=1:RETURN:'exit
780 IF T$>T1$ THEN 830:'Time/No Date
790 ST=0:'turn off
800 IF CT$<T$ THEN 820
810 ST=CT$<T1$
820 RETURN
830 ST=1:'turn on
840 IF CT$<T1$ THEN 860
850 ST=CT$>=T$
860 RETURN
870 IF D$=D1$ THEN IF T$>T1$ THEN 990 ELSE 890
880 IF D$>D1$ THEN 990
890 ST=0:'turn off
900 IF CD$<D$ THEN 980
910 IF CD$>D$ THEN 930
920 IF CT$<T$ THEN 980
930 ST=1:'turn on
940 IF CD$<D1$ THEN 980
950 IF CD$>D1$ THEN 970
960 IF CT$<T1$ THEN 980
970 ST=0:'turn off
980 RETURN
990 ST=1:'turn on
1000 IF CD$<D1$ THEN 1080
1010 IF CD$>D1$ THEN 1030
1020 IF CT$<T1$ THEN 1080
1030 ST=0:'turn off
1040 IF CD$<D$ THEN 1080
1050 IF CD$>D$ THEN 1070
1060 IF CT$<T$ THEN 1080
1070 ST=1:'turn on
1080 RETURN
1090 REM
1100 REM *** GET SYSTEM DATE & TIME ***
1110 REM
1120 T$=CT$
1130 CD$=DATE$:'Get date
1140 CT$=TIME$:'Get time
1150 IF CD$<>DATE$ THEN 1130:'Has date changed?
1160 IF T$=CT$ THEN 1130:'Has time changed?
1170 CD$=RIGHT$(CD$,4)+"-"+LEFT$(CD$,5):'yyyy-mm-dd format
1180 RETURN
1190 REM
1200 REM *** MAIN OPTIONS DISPLAY ***
1210 REM
1220 CLS:RT=0
1230 PRINT:PRINT"REMOTE V1.00 CONTROL OPTIONS:"
1240 PRINT:PRINT"(T) SET TIME & DATE"
1250 PRINT"(L) LOAD FROM FILE"
1260 PRINT"(S) SAVE TO FILE"
1270 PRINT"(R) EXECUTE & RESET TIME"
1280 PRINT"(E) EXECUTE"
1290 PRINT:PRINT:PRINT"ENTER/CHANGE SETTINGS:"
1300 PRINT:PRINT"(1) RL1 OUTPUT"
1310 PRINT"(2) RL2 OUTPUT"
1320 PRINT"(3) RL3 OUTPUT"
1330 PRINT"(4) RL4 OUTPUT"
1340 PRINT"(5) RL5 OUTPUT"
1350 PRINT"(6) RL6 OUTPUT"
1360 PRINT"(7) RL7 OUTPUT"
1370 PRINT"(8) RL8 OUTPUT"
1380 PRINT:PRINT"WHICH OPTION? ";
1390 A$=INKEY$:IF A$="" THEN 1390
1400 A=ASC(A$)
1410 IF A=27 THEN 400:'Esc
1420 IF A=84 OR A=116 THEN 2390:'Set time
1430 IF A=76 OR A=108 THEN 2070:'Load
1440 IF A=83 OR A=115 THEN 2230:'Save
1450 IF A=69 OR A=101 THEN RETURN:'Execute
1460 IF A=82 OR A=114 THEN RT=RT$<>"":TIME$="00:00:00":RETURN:'Reset-Execute
1470 IF A<49 OR A>56 THEN 1390:'Invalid
1480 REM
1490 REM *** HERE TO CHANGE SETTINGS ***
1500 REM
1510 RL=A-48:N=21*RL-20:X=0
1520 Y=0
1530 B=N+2*X+Y:'Calc index
1540 CLS:GOSUB 1120:'Get date & time
1550 IF X<10 THEN GOSUB 1970:'Sort Date & Time
1560 PRINT:PRINT"ENTER/CHANGE  RL";RL;" SETTINGS       CURRENT DATE: ";CD$;"    TIME: ";CT$
1570 PRINT:PRINT:PRINT TAB(10);"--------ON---------";TAB(50);"--------OFF--------"
1580 PRINT:PRINT TAB(10);"DATE1         TIME1";TAB(50);"DATE2         TIME2"
1590 PRINT:C=1
1600 FOR A=N TO N+19 STEP 2
1610 PRINT USING"##.";C;
1620 IF D$(A)<>"" OR T$(A)<>"" THEN PRINT USING"      \        \    \      \                  \        \    \      \";D$(A),T$(A),D$(A+1),T$(A+1);
1630 PRINT
1640 C=C+1
1650 NEXT A
1660 IF X>9 THEN 1870
1670 LOCATE 25,1:PRINT" '-' TO DELETE ENTRY/ '=' TO FINISH UP/ '<' GO BACK/ 'Return' LEAVE UNCHANGED";
1680 K=0:B=N+2*X+Y:LOCATE 21,1:PRINT SPACE$(80);
1690 LOCATE 21,1:PRINT USING" ENTER/CHANGE  (##. DATE#)";X+1,Y+1;
1700 INPUT A$:IF A$="" THEN K=1:GOTO 1740
1710 IF A$="<" THEN IF Y=1 THEN 1520 ELSE 1680
1720 IF A$="=" THEN X=10:GOTO 1520:'Finished
1730 IF A$="-" THEN D$(B)="" ELSE D$(B)=A$
1740 LOCATE 21,1:PRINT SPACE$(80);
1750 LOCATE 21,1:PRINT USING" ENTER/CHANGE  (##. TIME#)";X+1,Y+1;
1760 INPUT A$:IF A$="" THEN K=K+1:GOTO 1800
1770 IF A$="<" THEN 1680
1780 IF A$="=" THEN X=10:GOTO 1520:'Finished
1790 IF A$="-" THEN T$(B)="" ELSE T$(B)=A$
1800 IF Y=0 THEN IF T$(B)="" THEN IF D$(B)="" THEN D$(B+1)="":T$(B+1)="":GOTO 1520
1810 Y=Y+1:IF Y>1 THEN Y=0:X=X+1:IF X>9 THEN 1530
1820 IF K=2 THEN 1680
1830 GOTO 1530:'Display again
1840 REM
1850 REM *** TERMINATE ENTRY ***
1860 REM
1870 LOCATE 21,1:PRINT SPACE$(80);
1880 LOCATE 21,1:PRINT" ARE YOU FINISHED (Y/N)? ";
1890 A$=INKEY$:IF A$="" THEN 1890
1900 A=ASC(A$)
1910 IF A=27 THEN 400:'Esc
1920 IF A=89 OR A=121 THEN 1220:'Yes
1930 X=0:GOTO 1520:'No
1940 REM
1950 REM *** DELETE/MOVE ENTRIES ***
1960 REM
1970 IF D$(B)<>"" OR T$(B)<>"" THEN RETURN
1980 IF D$(B+2)="" AND T$(B+2)="" THEN RETURN
1990 FOR A=B TO N+19 STEP 2
2000 D$(A)=D$(A+2):T$(A)=T$(A+2)
2010 D$(A+1)=D$(A+3):T$(A+1)=T$(A+3)
2020 NEXT A
2030 RETURN
2040 REM
2050 REM *** LOAD FROM FILE ***
2060 REM
2070 CLS
2080 PRINT:PRINT"SAVE DATE/TIMES TO FILE"
2090 PRINT:PRINT:FILES "*.REM":PRINT:PRINT
2100 INPUT "FILE NAME (XXX.REM)";A$
2110 IF A$="" THEN 1220
2120 A$=A$+".REM":'Add ext
2130 OPEN A$ FOR INPUT AS #1
2140 FOR A=1 TO 168
2150 INPUT #1,D$(A),T$(A)
2160 NEXT A
2170 INPUT #1,RT$
2180 CLOSE #1
2190 GOTO 1220
2200 REM
2210 REM *** SAVE TO FILE ***
2220 REM
2230 CLS
2240 PRINT:PRINT"SAVE DATE/TIMES TO FILE"
2250 PRINT:PRINT
2260 INPUT "FILE NAME (XXX.REM)";A$
2270 IF A$="" THEN 1220
2280 A$=A$+".REM":'Add ext
2290 OPEN A$ FOR OUTPUT AS #1
2300 FOR A=1 TO 168
2310 PRINT #1,D$(A);",";T$(A)
2320 NEXT A
2330 PRINT #1,RT$
2340 CLOSE #1
2350 GOTO 1220
2360 REM
2370 REM *** ENTER/CHANGE DATE/TIME/REPEAT TIME ***
2380 REM
2390 CLS:GOSUB 1120:'Get date & time
2400 PRINT:PRINT"CHANGE  TIME/DATE  SETTINGS        CURRENT DATE: ";CD$;"    TIME: ";CT$
2410 PRINT:PRINT:PRINT:PRINT"Enter new DATE (YYYY-MM-DD)";
2420 INPUT A$:IF A$="" THEN 2440
2430 DATE$=RIGHT$(A$,5)+"-"+LEFT$(A$,4)
2440 PRINT:PRINT"Enter new TIME (HH:MM:SS)";
2450 INPUT A$:IF A$="" THEN 2470
2460 TIME$=A$:'Set time
2470 PRINT:PRINT:PRINT"CURRENT REPEAT TIME = ";RT$
2480 PRINT:PRINT"Enter repeat TIME (HH:MM:SS)";
2490 INPUT A$:IF A$="" THEN 2510
2500 IF A$="-" THEN RT$="" ELSE RT$=A$
2510 GOTO 1220
```
{% endraw %}

## STICK.BAS

{% raw %}
```bas
100 REM *** JOYSTICK CONTROL PROGRAM ***
110 REM
120 REM *** DATE: 11/11/87
130 REM
140 DEFINT A-Z
150 PORT=&H378:' Port address of relays
160 INC=25:'Movement req'd for slow
170 IFAST=45:'Movement req'd for fast
172 XC=50:'X centre position
174 YC=50:'Y centre position
180 R10=&H1:R11=&HFE:'Relay 1 Mask
190 R20=&H2:R21=&HFD:'Relay 2
200 R30=&H4:R31=&HFB:'Relay 3
210 R40=&H8:R41=&HF7:'Relay 4
220 R50=&H10:R51=&HEF:'Relay 5
230 R60=&H20:R61=&HDF:'Relay 6
240 R70=&H40:R71=&HBF:'Relay 7
250 R80=&H80:R81=&H7F:'Relay 8
260 I=&HFF:S0=-1:STRIG ON
270 I=I OR &H7F:'Set all OFF except RL8
280 IF STRIG(5) THEN I=I AND R71:'Switch B1
290 A=STRIG(1):IF NOT A THEN S0=-1:'Switch A1
300 IF A AND S0 THEN S0=0:I=I XOR R80
310 X=STICK(0)-XC:Y=STICK(1)-YC:'Get stick position X & Y
320 SL=0:FA=0
330 IF X<-INC THEN I=I AND R11:SL=1:FA=X<-IFAST
340 IF X>INC THEN I=I AND R21:SL=1:FA=X>IFAST
350 IF Y<-INC THEN I=I AND R31:SL=1:FA=Y<-IFAST
360 IF Y>INC THEN I=I AND R41:SL=1:FA=Y>IFAST
370 IF SL THEN I=I AND R51
380 IF FA THEN I=I AND R61
390 OUT PORT,I:'Output to relays
400 GOTO 270
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3445

     Volume in drive A has no label
     Directory of A:\

    CONTROL  COM       204  11-11-87  12:46p
    CONFIG   SYS        20  11-25-87   4:03p
    CONTROL  DOC      9216  11-26-87   2:37p
    EXAMPLE  BAS       202  11-23-87  12:52a
    CLOCK    SYS       429   1-02-80   1:02a
    ORDER    DOC      2176  11-25-87   9:36p
    CLEAR    REM       506  11-24-87  12:02a
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        37   3-17-93   3:11p
    TEST     REM      1038  11-24-87  12:01a
    STICK    BAS      1108  11-23-87  12:55a
    SHIFT    REM       642  11-24-87  12:00a
    REMOTE   EXE     41263  11-24-87  12:00a
    REMOTE   BAS      7413  11-23-87  12:02a
           14 file(s)      66294 bytes
                           90112 bytes free
