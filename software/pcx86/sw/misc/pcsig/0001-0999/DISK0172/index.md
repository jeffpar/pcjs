---
layout: page
title: "PC-SIG Library Disk #172"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0172/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0172"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "STEVE'S UTILITIES"

    This is a very nice collection of utilities that would make a
    worthwhile addition to almost anyone's system.  Included are routines
    to: let you change the beep tone of your PC to suit yourself, clear
    your display screen, several different programs to let you determine
    status of your machines ports, rework your keyboard arrangement, and
    much more.  The source code is included along with most of these
    programs.  Those of you so inclined may use this to make changes, or
    simply examine it to find out how other programmers do things.  This
    is an excellent way to enhance your machines capabilities, as well as
    your own.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    consult your DIS maunala.  For instructions on ASM or PAS listings,
    refer to your Assembler or Pascal manual.  To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    BEEP     ASM  Source code for BEEP.EXE
    BEEP     DOC  Documentation for BEEP program
    BEEP     COM  Program to produce "tone" on speaker
    DSKTEST  BAS  Examines the status byte from the floppy controller
    CLS      DOC  Documentation for CLS.ASM
    CLS      ASM  Source code for routine to clear screen
    BEEP     EXE  Program to produce "tone" on speaker
    EDIT-MOD PAS  Source code for part of editor
    DSKTEST  DOC  Documentation for DSKTEST.BAS
    EDT-MAIN PAS  Source code for main editor module
    EDITOR   DOC  Documentation for editor written in Pascal
    INPORT   DOC  Documentation for INPORT.ASM
    INPORT   ASM  Routine to interrogate requested port
    PAS-BEEP DOC  How to create a beep in Pascal
    MSBEDIT  EXE  Compiled version of editor written in Pascal
    LOCATE   DOC  Documentation for LOCATE.ASM
    LOCATE   ASM  Routine to locate curser position
    PORTS    DOC  Documentation for PORTS.EXE
    PORTS    EXE  Program to examine I/O ports
    PORTS    PAS  Source code for PORTS.EXE
    PRNSTATS DOC  Documentation for PRNSTATS.BAS
    PRNSTATS BAS  Program to examine status of lineprinter port
    RAMDISK  COM  Virtual disk driver from DOS 2.0 manual
    SETKEY   DOC  Documentation for SETKEY.BAS
    SETKEY   BAS  Keyboard reassignment program  (Requires DOS 2.0 up)
    RAMDISK  DOC  Documentation for RAMDISK.COM
    DIRECT   BAT  Prints out directory listing
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DSKTEST.BAS

```bas
100 CLS:KEY OFF
110 KEY 15, CHR$(&H4)+CHR$(70)
120 TRUE=1:FALSE=NOT TRUE
130 ON KEY (10) GOSUB 690
140 KEY (10) ON
150 ON KEY (15) GOSUB 710:
160 KEY (15) ON
170 'Dynamic printer test procedure  status
180 '
190 DIM BIT(8):DIM PSB(8)           'number of bits in a byte
200 FOR I=0 TO 7:BIT(I+1)=2^(7-I):NEXT
210 LOCATE 23,1:PRINT "Interrogating FDC and FDD board";
220 LOCATE 24,1:COLOR 15:PRINT "F10  -> SYSTEM";:COLOR 7
230 LOCATE 1,1:PRINT "CTRLR:    Status on:  "; TIME$; "  ";DATE$;TAB(50);"Bytes Free =";FRE(0);"  (";HEX$(FRE(0));"H)";:PRINT:PRINT
240 PRINT "DEVICE:   : STATUS FROM PORT &H3F2  ";"=                     ":PRINT
250 PRINT "DRIVE--------------------->"
260 PRINT "SELECTED------------------>"
270 PRINT "NOT FDC RESET------------->"
280 PRINT "ENABLE INT & DMA REQUESTS->"
290 PRINT "DRIVE A MOTOR ENABLE------>"
300 PRINT "DRIVE B MOTOR ENABLE------>"
310 PRINT "DRIVE C MOTOR ENABLE------>"
320 PRINT "DRIVE D MOTOR ENABLE------>"
330 RAWSTATUS = INP(&H3F2)
340 '
350 ' invert lines for:  BUSY, ACKNOWLEGE and ERROR (fault)
360 '
370 STATUS=RAWSTATUS >= 213
380 '
390 'examine each bit and print the result
400 '
410 FOR I=1 TO 8
420 LOCATE 4+I,34:
430 IF (STATUS AND BIT(I)) <> 0 THEN PRINT "HIGH" ELSE PRINT "LOW "
440 NEXT
450 LOCATE 3,42:PRINT HEX$(RAWSTATUS); "H   (";RAWSTATUS")"
460 '
470 'wait for some change and recalc
480 '
490 FOR I=1 TO 8:PSB(I)=(BIT(I) AND STATUS):
500 IF PSB(I) > 0 THEN PSB(I)=1
510 NEXT
520 LOCATE 15,20:PRINT "Status byte= ";:FOR I=1 TO 8:PRINT HEX$(PSB(I));:NEXT
530 IF PSB(1)=0 AND PSB(2)=0 THEN LOCATE 5,45:PRINT "Drive A selected, active";:GOTO 560 ELSE IF PSB(1)=1 AND PSB(2)=0 THEN LOCATE 5,45:PRINT "Drive B selected, active";:GOTO 560
540 IF (PSB(1)=0 AND PSB(2)=1) THEN LOCATE 5,45:PRINT "Drive C selected, active";:GOTO 560
550 IF (PSB(1)=1 AND PSB(2)=1) THEN LOCATE 5,45:PRINT "Drive D selected, active";ELSE LOCATE 5,45:PRINT "Unknown device reports active on FDC";
560 IF PSB(3)=1 THEN LOCATE 7,45:PRINT "FDC reset affirmative"; ELSE LOCATE 7,45:PRINT "Drive not reset by FDC";
570 LOCATE 8,45:IF PSB(4)=1 THEN PRINT "INT & DMA requests enabled";ELSE PRINT "INT & DMA requests DISABLED";
580 LOCATE 9,45:IF PSB(5)=1 THEN PRINT "Drive A is active"; ELSE PRINT "Drive A not on line";
590 LOCATE 10,45:IF PSB(6)=1 THEN PRINT "Drive B is active"; ELSE PRINT "Drive B not on line";
600 LOCATE 11,45:IF PSB(7)=1 THEN PRINT "Drive C is active";ELSE PRINT "Drive C not on line";
610 LOCATE 12,45:IF PSB(8)=1 THEN PRINT "Drive D is active";ELSE PRINT "Drive D not on line";
620 COLOR 15
630 LOCATE 3,10:IF NOT PSB(1) AND NOT PSB(2) THEN PRINT "A" ELSE IF PSB(1) AND NOT PSB(2) THEN PRINT "B" ELSE IF NOT PSB(1) AND PSB(2) THEN PRINT "C" ELSE IF PSB(1) AND PSB(2) THEN PRINT  "D" ELSE PRINT "?"
640 COLOR 7
650 LOCATE 25,1:PRINT "Any key to rescan, or F10 to return to system";
660 ON KEY (15) GOSUB 710
670 A$=INKEY$:IF LEN(A$)=0 THEN 670
680 LOCATE 25,1:PRINT SPACE$(70);:GOTO 210
690 ' routine to return to system
700 CLS:SYSTEM:RETURN
710 FOR I=1 TO 3:LOCATE 23+I-1,1:PRINT SPACE$(70);:NEXT
720 LOCATE 23,1:PRINT "Ctrl-Break sequence trapped";
730 LOCATE 24,1:PRINT "Valid escape is System reset, or return to system";
740 LOCATE 25,1:PRINT "Strike any key to resume";
750 A$=INKEY$:IF A$="" THEN 750
760 FOR I=1 TO 3:LOCATE 23+I-1,1:PRINT SPACE$(70);:NEXT
770 RETURN
```

## PRNSTATS.BAS

```bas
100 KEY OFF
110 REM   PRNSTATS.BASTROFF
120 REM   PRNSTATS.BAS:
130 REM   Program to dynamically test the status port of the line printer.
140 REM   Accomplished throught the monochrome/printer adapter card.  If you
150 REM   use a TV or color/graphics monitor you will have to modify the port
160 REM   number. Look it up in the Technical reference manual under color/
170 REM   graphics adapter section.  Under I/O Ports.
180 REM
190 REM  Ctrl-break has been disabled, as well as Ctrl-Alt-Del system reset.
200 REM  Use this as an example, use only the examination code to determine
210 REM  whether or not the printer is ready for data before your program
220 REM  requests it.  This will prevent termination by BASIC or BASICA because
230 REM  a device time-out.   Otherwise, this code will poll the port infinitely.
240 REM  Use as a subroutine.  Display the produced screen only in the event
250 REM  that the program found something wrong with the printer.
260 REM
270 REM   Steve Leoce
280 REM   201 Delaware Avenue
290 REM   Kingston, New York  12401
300 REM   (914)-338-4593
310 REM
320 REM   Last update=21-may-1984
330 REM
340 REM
350 REM
360 KEY 15,CHR$(&H4)+CHR$(70)
370 KEY 16,CHR$(&H4+&H8)+CHR$(83)
380 ON KEY (16) GOSUB 950
390 ON KEY (10) GOSUB 1020
400 ON KEY (1) GOSUB 1070
410 KEY(10) ON:KEY(15) ON:KEY(16) ON:KEY (1) ON
420 'Dynamic printer test procedure  status
430 '
440 DIM BIT(8):DIM PSB(8)           'number of bits in a byte
450 FOR I=0 TO 7:BIT(I+1)=2^(7-I):NEXT
460 CLS:KEY(10) ON:KEY(15) ON:KEY (16) ON
470 KEY (1) ON:LOCATE 23,1:PRINT "F1   -> REFRESH";
480 LOCATE 24,1:PRINT "F10  -> SYSTEM";
490 LOCATE 1,1:PRINT "LPRINTER:   Status on:  "; TIME$; "  ";DATE$;TAB(50);"Bytes Free =";FRE(0);"  (";HEX$(FRE(0));"H)";:PRINT:PRINT
500 PRINT "LPT1:       STATUS FROM PORT 957 (";HEX$(957);"H)";" =                     ":PRINT
510 PRINT "BUSY--------------->"
520 PRINT "ACKNOWLEDGE-------->"
530 PRINT "OUT OF FORMS------->"
540 PRINT "SELECTED----------->"
550 PRINT "WRITE FAULT-------->"
560 PRINT "UNUSED------------->"
570 PRINT "UNUSED------------->"
580 PRINT "TIME OUT----------->"
590 RAWSTATUS = INP(957)
600 '
610 ' invert lines for:  BUSY, ACKNOWLEGE and ERROR (fault)
620 '
630 STATUS=RAWSTATUS >= 200
640 '
650 'examine each bit and print the result
660 '
670 FOR I=1 TO 8
680 LOCATE 4+I,24:
690 IF (STATUS AND BIT(I)) <> 0 THEN PRINT "HIGH" ELSE PRINT "LOW "
700 NEXT
710 LOCATE 3,42:PRINT HEX$(RAWSTATUS); "H   (";RAWSTATUS")"
720 '
730 'wait for some change and recalc
740 '
750 FOR I=1 TO 8:PSB(I)=(BIT(I) AND STATUS):
760 IF PSB(I) > 0 THEN PSB(I)=1
770 NEXT
780 LOCATE 14,20:PRINT "LPT1:   Status byte=";
790 FOR I=1 TO 8:PRINT HEX$(PSB(I));:NEXT
800 IF (PSB(1)+PSB(2)+PSB(3)+PSB(5))=0 THEN LOCATE 15,20:PRINT "LPT1:   WAITING FOR WORK           " ELSE COLOR 15:LOCATE 15,20:BEEP:PRINT "LPT1:   *INTERVENTION REQUIRED      ":COLOR 7
810 IF PSB(1)=1 AND PSB(5)=1 THEN LOCATE 5,40:PRINT "LPRINTER not communicating with system"; ELSE LOCATE 5,40:PRINT SPACE$(39);
820 IF PSB(4)=0  THEN LOCATE 8,40:PRINT "Electrical energy not applied"; ELSE LOCATE 8,40:PRINT SPACE$(39);
830 IF PSB(5)=1 THEN LOCATE 9,40:PRINT "LPT1:  Off line - Write fault";ELSE LOCATE 9,40:PRINT SPACE$(39);
840 IF PSB(3)=1 THEN LOCATE 7,40:PRINT "Printer out of forms"; ELSE LOCATE 7,40:PRINT SPACE$(39);
850 IF PSB(8)=0 THEN LOCATE 12,40:PRINT "Device (LPT1) time out; no retry"; ELSE LOCATE 12,40:PRINT SPACE$(39);
860 IF PSB(2)=1 OR  PSB(4)=0 OR PSB(1)=1 OR PSB(3)=1 OR PSB(8)=0 THEN LOCATE 6,40:PRINT "NAK from device LPT1:"; ELSE LOCATE 6,40:PRINT "ACK from device LPT1:";
870 IF RAWSTATUS=INP(957) GOTO 870
880 GOTO 490
890 LOCATE 24,1:PRINT "Ctrl-Break  Disabled";
900 LOCATE 25,1:PRINT "Strike any key to resume scan";
910 ZZ$=INKEY$:IF ZZ$="" THEN 910
920 LOCATE 24,1:PRINT SPACE$(79);:
930 LOCATE 25,1:PRINT SPACE$(79);:
940 KEY (15) ON:RETURN 470
950 LOCATE 24,1:PRINT "System reset DISABLED";
960 LOCATE 25,1:PRINT "Strike any key to resume scan";
970 ZZ$=INKEY$:IF ZZ$="" THEN 970
980 LOCATE 24,1:PRINT SPACE$(79);
990 LOCATE 25,1:PRINT SPACE$(79);
1000 KEY (16) ON
1010 RETURN 470
1020 ' return to system requested
1030 LOCATE 25,1 :PRINT "Strike any key when COMMAND.COM is in device A:";
1040 ZZ$=INKEY$:IF ZZ$="" THEN 1040
1050 CLS:SYSTEM:RETURN
1060 ' returned
1070 'routine to refresh screen with time and date
1080 CLS:GOTO 470:RETURN
1090 ' refreshed
1100 ON KEY(15) GOSUB 890
```

## SETKEY.BAS

```bas
190 Z$="["
200 BL!=190
210 KEY OFF:CLS
220 ON ERROR GOTO 360                   'the error routine
230 FOR I=4 TO 10 : KEY I, "":NEXT      'erase the existing keys, except edit
240 DIM A$(20)                  'name of redefinded key
250 DIM B$(20)                  'string to be assigned to key
260 DIM C$(20)                  'string written to dos file
270 DIM E$(132)                 'extended ascii code sequence identifier
280 GOSUB 1270                  'see if config.sys already present
290 GOSUB 920                  'load extended keys into e$
300 GOSUB 410                  'get filename and input assignments from it
310 GOSUB 490                  'display existing assignments
320 GOSUB 620                  'ask for new key assignment or exit
330 GOSUB 1120
340 LOCATE 23,1:PRINT "Finished.":END
350 '
360 'error handler
370 '
380 IF ERL=440 AND ERR=53 THEN RESUME 470
390 IF ERL=1320 AND ERR=53 THEN RESUME 1340 ELSE END
400 '
410 'open key file and ready to accept definitions
420 '
430 INPUT "Enter name of file: ",F$:CLS
440 OPEN "I",#1,F$
450 I=1:WHILE NOT EOF(1):LINE INPUT #1,C$(I):I=I+1:WEND
460 CLOSE
470 RETURN
480 '
490 'display current definitions
500 '
510 CLS:LOCATE 1,1:PRINT "Filename:  ";:COLOR 15:PRINT F$;TAB(30);:COLOR 7:PRINT"Carriage return = ";:COLOR 15:PRINT Z$;:COLOR 7
520 R=0:I=1:WHILE C$(I)<>""
530 GOSUB 800
540 R=R+LEN(B$(I))+L1
550 LOCATE I+2,5:PRINT A$(I),B$(I);
560 I=I+1:WEND
570 LOCATE 25,1:PRINT SPACE$(60);
580 LOCATE 25,1:PRINT "Press key to be redefined.  Or <ENTER> to QUIT";
590 LOCATE 1,60:PRINT "Bytes left: =";:COLOR 15:PRINT BL!-R-I+1;:COLOR 7
600 RETURN
610 '
620 'redefine the requested key
630 '
640 I$=INKEY$:IF I$="" THEN 640 ELSE IF I$=CHR$(13) THEN RETURN
650 IF LEN(I$)=1 THEN A$(I)=I$:M$=CHR$(27)+"["+MID$(STR$(ASC(A$(I))),2,3)
660 IF ASC(I$)=32 THEN A$(I)="Space bar"
670 IF LEN(I$)<>2 THEN 700
680 A$(I)=E$(ASC(RIGHT$(I$,1)))
690 M$=CHR$(27)+"[0;"+MID$(STR$(ASC(RIGHT$(I$,1))),2)
700 FOR J=1 TO 20:IF A$(J)=A$(I) THEN I=J: J=20
710 NEXT J
720 LOCATE 25,1:PRINT SPACE$(78);:LOCATE 25,1:N$="p"
730 PRINT "Enter new string for key ";A$(I);":  ";:LINE INPUT;B$(I)
740 IF B$(I)="" THEN GOSUB 1210:GOTO 770    ' kill a definition
750 IF INSTR(B$(I),Z$)<>0 THEN B$(I)=LEFT$(B$(I),INSTR(B$(I),Z$)-1):N$=";13p"
760 C$(I)=M$+";"+CHR$(34)+B$(I)+CHR$(34)+N$
770 GOSUB 490
780 RETURN 320
790 '
800 'get key name and previous definition
810 '
820 IF MID$(C$(I),3,1)="0" THEN L1=2:GOTO 860
830 L1=1:A$(I)=CHR$(VAL(MID$(C$(I),3,INSTR(C$(I),";")-3)))
840 IF MID$(C$(I),3,2)="32" THEN A$(I)="Space bar"
850 GOTO 870
860 A$(I)=E$(VAL(MID$(C$(I),5,INSTR(5,C$(I),";")-5)))     'extended key defn
870 B1=INSTR(C$(I),CHR$(34))+1       'first char after quote delimiter
880 B$(I)=MID$(C$(I),B1,INSTR(B1,C$(I),CHR$(34))-B1)
890 IF INSTR(C$(I),";13p")<>0 THEN B$(I)=B$(I)+Z$
900 RETURN
910 '
920 'fill e$ array with extended codes
930 '
940 E$(15)="Shift Tab"
950 GOSUB 1100:DATA 16,25, Alt-Q,Alt-W,Alt-E,Alt-R,Alt-T,Alt-Y,Alt-U,Alt-I
960 DATA Alt-O,Alt-P
970 GOSUB 1100:DATA 30,38, Alt-A,Alt-S,Alt-D,Alt-F,Alt-G,Alt-H,Alt-J,Alt-K,Alt-L
980 GOSUB 1100:DATA 44,50, Alt-Z,Alt-X,Alt-C,Alt-V,Alt-B,Alt-N,Alt-M
990 GOSUB 1100:DATA 59,68, F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
1000 GOSUB 1100:DATA 71,83, Home,CsrUp,PgUp,0,CsrLeft,0,CsrRt,0,End
1010 DATA CsrDn,PgDn,Ins,Del
1020 GOSUB 1100:DATA 84,93,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10
1030 GOSUB 1100:DATA 94,103, C1,C2,C3,C4,C5,C6,C7,C8,C9,C10
1040 GOSUB 1100:DATA 104,113, A1,A2,A3,A4,A5,A6,A7,A8,A9,A10
1050 GOSUB 1100:DATA 114,119, Ctrl-PrtSc,Ctrl-CsrLeft,Ctrl-CsrRt,Ctrl-End
1060 DATA Ctrl-PgDn,"Ctrl-Home"
1070 GOSUB 1100:DATA 120,132,"Alt-1","Alt-2","Alt-3","Alt-4","Alt-5","Alt-6"
1071 DATA "Alt-7","Alt-8"
1080 DATA "Alt-9","Alt-0","Alt-","Alt=","Ctrl-PgUp"
1090 RETURN
1100 READ J1,J2: FOR J=J1 TO J2:READ E$(J):NEXT:RETURN
1110 '
1120 'save to disk and close
1130 '
1140 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT "Writing to file "; F$;
1150 OPEN "O",#1,F$
1160 I=1:WHILE C$(I)<>""
1170 PRINT #1,C$(I)
1180 I=I+1:WEND
1190 CLOSE:RETURN
1200 '
1210 'delete a requested entry
1220 '
1230 A$(I)=""
1240 WHILE C$(I+1)<>"":C$(I)=C$(I+1):I=I+1:WEND
1250 C$(I)="":RETURN
1260 '
1270 'create file config.sys if necessary
1280 '
1290 CLS:PRINT"Insert disk to receive key reassignment file"
1300 PRINT "Strike any key to continue"
1310 I$=INKEY$:IF I$="" THEN 1310
1320 OPEN "I",#2,"CONFIG.SYS"           'write the file if required
1330 CLOSE 2 : GOTO 1370
1340 OPEN "O",#2,"CONFIG.SYS"
1350 PRINT #2,"DEVICE=ANSI.SYS";
1360 CLOSE 2
1370 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0172

     Volume in drive A has no label
     Directory of A:\

    BEEP     ASM      2200   5-23-84  10:38p
    BEEP     COM        54   5-23-84   7:19p
    BEEP     DOC      1669   5-23-84   9:22p
    BEEP     EXE       768   5-23-84  10:40p
    CLS      ASM       720   5-21-84  11:43a
    CLS      DOC       878   5-22-84   6:47p
    DIRECT   BAT        35   5-23-84   9:02p
    DSKTEST  BAS      2742   5-21-84  12:30p
    DSKTEST  DOC      1618   5-21-84  11:36a
    EDIT-MOD PAS     21192   5-19-84  12:46a
    EDITOR   DOC     11813   5-23-84  10:14a
    EDT-MAIN PAS     24882   5-23-84   9:45p
    INPORT   ASM       936   5-22-84   4:14p
    INPORT   DOC       606   5-22-84   6:41p
    LOCATE   ASM       688   5-16-84   9:14a
    LOCATE   DOC       936   5-22-84   6:36p
    MSBEDIT  EXE     54784   5-19-84   1:02a
    PAS-BEEP DOC       422   5-23-84   8:46p
    PORTS    DOC      1840   5-22-84   8:00p
    PORTS    EXE     26112   5-22-84   6:07p
    PORTS    PAS      2634   5-22-84   6:24p
    PRNSTATS BAS      3770   5-21-84  12:43p
    PRNSTATS DOC      1717   5-20-84  12:35a
    RAMDISK  COM       672   5-18-84  11:31a
    RAMDISK  DOC       716   5-23-84  10:23a
    SETKEY   BAS      3911   5-23-84  12:40a
    SETKEY   DOC      1707   5-23-84  12:25a
    CRC      TXT      1828  11-15-84   6:46a
    CRCK4    COM      1536  10-21-82   7:54p
           29 file(s)     173386 bytes
                          137216 bytes free
