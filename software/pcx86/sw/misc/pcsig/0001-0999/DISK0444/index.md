---
layout: page
title: "PC-SIG Library Disk #444"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0444/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0444"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOTKEY, XDOS AND EZ-MENU"

    PC/CALCULATOR turns your PC into a programmable multi-function RPN
    (Reverse Polish Notation) calculator. It features 16 visible
    memories, seven function key modes, and 14 number display formats. Run
    it in stand-alone mode or keep it in RAM. Define a "pop-up" key and
    call your calculator from inside any of your other applications.
    
    You'll always be able to add things up!
    
    Show your PC who's in charge here anyway!  EZ-MENU gives you a quick and
    easy way to run your programs while ending the clutter and confusion of
    scanning through directory and file listings.  Handle 200 .EXE, .COM,
    .BAT and .BAS programs without breaking a sweat.
    
    Have your keyboard do more of the work for you.  Program specific keys
    to perform specialized functions, enter text strings or series of
    lengthy repetitive keystrokes.  Do more computing and less typing! File
    
    A handy collection of DOS enhancements that will make your life a little
    easier.
    
    ALARM is a RAM-resident alarm clock to remind you of those important
    appointments and commitments. Go ahead and work on your application.
    This clock will call you anyway.
    
    CAT is similar to the DOS DIR command with some major exceptions:
    
    ~  CAT pauses at the end of each screen of listings and waits for a
    prompt from you before proceeding
    
    ~  Files in subdirectories are automatically listed -- down to five
    levels of directories
    
    ~  All files are displayed, including system and hidden files
    
    ~  The display is more aesthetically pleasing than DOS
    
    HELP is a text file that explains and expands on the use of DOS commands
    and syntax. Exit to DOS at any time.
    
    LOCK lets you change two of a file's attributes -- locked and hidden.
    Consider using this for sensitive or confidential information.
    
    NOPRINT lets you divert data being sent to the printer and display it on
    your monitor. Helpful when developing and testing printed output without
    using a printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZ-MENU.BAS

```bas
10 MENU=1:COMMON MENU
20 '     Set screen conditions...
30 KEY OFF:SCREEN 0,0,0:COLOR 7,0,0:CLS:WIDTH 80
40 '     Error trapping routine...
50 ON ERROR GOTO 300
60 '    Initialize varibles...
70 DIM F$(200):P=1:SP=1
80 '    Shell into DOS and do diskette work...
90 SHELL "DIR >DIR.DIR"
100 '    Load file "DIR.DIR" into RAM and organize it...
110 OPEN "DIR.DIR" FOR INPUT AS #1
120 FOR L=1 TO 200
130 INPUT #1,F$
140 G$=MID$(F$,10,3)
150 IF G$<>"BAS" AND G$<>"EXE" AND G$<>"COM" AND G$<>"BAT" THEN GOTO 130
160 F$=LEFT$(F$,21)
170 IF F$="COMMAND  COM    22042" THEN GOTO 130
180 IF LEFT$(F$,12)="EZ-MENU  BAS" THEN GOTO 130
190 IF RIGHT$(F$,9)<>"        0" THEN F$(L)=LEFT$(F$,12) ELSE GOTO 130
200 NEXT L
210 BEEP:BEEP:PRINT "You have over TWO HUNDRED files on the default disk."
220 PRINT "EZ-MENU can only handle 200.  Copy one-half of the files into a"
230 PRINT "Sub-directory, and copy EZ-MENU as well.  Run EZ-MENU in the"
240 PRINT "directory containing the files.  If you still get this message,"
250 PRINT "do the same on the directory.  (You can see how many times you"
260 PRINT "will need to do this process by using the DIR command and divide"
270 PRINT "the number of files by 200.":BEEP:BEEP
280 COLOR 0,7:LOCATE 25,1:PRINT "Press ESC to exit."
290 A$=INPUT$(1):IF A$<>CHR$(27) THEN GOTO 290 ELSE CLS:COLOR 7,0,0:END
300 '   Trap error...
310 IF ERR=62 AND ERL=130 THEN RESUME 360
320 CLS:PRINT "-ERROR-  Press ESC to restart program."
330 A$=INPUT$(1):IF A$<>CHR$(27) THEN GOTO 330
340 RESUME 350
350 RUN
360 '   Make selection...
370 CLS:L=L-1
380 '   Display possibilites...
390 LOCATE 1,1:IF D=1 THEN LOCATE 24,1:PRINT F$(P):D=0:GOTO 450
400 IF (P-SP)+23>L THEN E=L ELSE E=(P-SP)+23
410 FOR A=P TO E
420 PRINT F$(A)
430 NEXT A
440 '   Display current selection...
450 LOCATE SP,1:COLOR 0,7:PRINT F$(P):COLOR 7,0
460 '   Get command...
470 A$=INKEY$
480 IF A$=CHR$(27) THEN RUN
490 IF A$=CHR$(13) THEN GOTO 650
500 IF A$=CHR$(0)+"H" THEN GOTO 530
510 IF A$=CHR$(0)+"P" THEN GOTO 590
520 GOTO 470
530 '   Move pointer UP
540 IF P=1 THEN GOTO 470
550 LOCATE SP,1:PRINT F$(P)
560 P=P-1:SP=SP-1
570 IF SP=0 THEN SP=1:GOTO 390
580 GOTO 450
590 '   Move pointer DOWN
600 IF P=L THEN GOTO 470
610 LOCATE SP,1:PRINT F$(P)
620 P=P+1:SP=SP+1
630 IF SP=24 THEN SP=23:D=1:GOTO 390
640 GOTO 450
650 '   Run program...
660 F$=F$(P):O=0
670 '   Update selected file name...
680 FOR A=1 TO LEN(F$):IF MID$(F$,A,1)=" " THEN O=O+1
690 NEXT A:N$=LEFT$(F$,9-O)+"."+RIGHT$(F$,3)
700 CLS
710 R3$=RIGHT$(F$,3):IF R3$="COM" OR R3$="EXE" OR R3$="BAT" THEN SHELL F$
720 IF R3$<>"BAS" THEN GOTO 750
730 CLOSE
740 CLS:CHAIN F$
750 RUN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0444

     Volume in drive A has no label
     Directory of A:\

    FILES444 TXT      2102   3-03-89   9:42a
    ALARM    COM       800   8-18-85  11:21a
    ASCII    PCL      1653   2-26-86   3:17p
    BCALC    EXE     67162  10-05-88   2:48a
    CALC     EXE     76288  10-05-88   2:37a
    CALC     HE0      1996   7-28-83
    CAT      COM      2278   7-22-85   1:46p
    CONFIG   SYS        19   4-19-85   5:00p
    EZ-MENU  BAS      2703   8-27-85   2:19p
    EZ-MENU  LST       199   8-27-85  10:37a
    EZ-MENU  TXT      4579   8-27-85  11:21a
    CALC     HE1      1996   7-28-83
    HELP     COM     18359   7-23-85   9:25p
    HOTKEY   DEF        30   4-22-85   3:27p
    HOTKEY   DOC      5277   5-14-85   1:32p
    HOTKEY   EXE     16896   5-13-85  10:36a
    CALC     HE2      1996   7-28-83
    LOCK     COM       851   7-14-85   4:33p
    CALC     HE3      1996   7-28-83
    NOPRINT  COM        81   7-24-85   8:38p
    PRINTMAN BAT       135   8-18-85  11:51a
    CALC     HE4      1996   7-28-83
    README             219   4-22-85   3:20p
    README   TXT       621   1-01-80  12:01a
    XDOS     DOC     14173   8-18-85  11:49a
    ZAP      COM      2719   7-24-85   8:22p
    CALC     HE5      1996   7-28-83
    CALC     HE6      1996   7-28-83
    MANUAL           67279
    MARKUP   PCL       815   6-25-87  10:39p
    MENU     PCL       607   1-01-80  12:01a
    MORTGAGE PCL       571   1-01-80   1:29a
    MOUSEDEM PCL      1574   1-01-80   1:26a
    READ     ME       1964   9-16-88   2:52a
    SBCALC   COM     32595  10-05-88   3:10a
    SINES    PCL       483   1-01-80   1:02a
    SQUARES  PCL       574   1-01-80   1:05a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771   3-03-89   9:49a
    MANUAL   BAT       198   3-01-89  12:37p
           40 file(s)     338585 bytes
                            6144 bytes free
