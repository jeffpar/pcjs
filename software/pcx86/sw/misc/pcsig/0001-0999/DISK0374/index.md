---
layout: page
title: "PC-SIG Library Disk #374"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0374/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0374"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 18"

    A collection of handy DOS programs and utilities that can be used to
    improve your system.  From the simple (a screen-clock routine), to the
    sublime (give programs access to DOS path-search capabilities.  Along
    with display controllers, security programs, and others, this disk can
    become a valuable part of your everyday operations.
    
    System Requirements: Some programs require BASIC
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.
    
    File Descriptions:
    
    AUTORES  BAT  Batch file for AUTOMENU under DOS 2.0
    FK20     DOC  Documentation for FK20.COM
    FK20     COM  Function key handler for PC-DOS 1.0 and 1.1
    EXL      EXE  Allows extension of DOS commands.
    EQUIP    DOC  Documentation for EQUIP.COM
    EQUIP    COM  Display of the equiptment installed in/on the PC/XT.
    DU       COM  Displays disk/directory information.
    DPATH    DOC  Documentation for DPATH.COM
    DPATH    COM  Gives programs a directory path search capability
    CLOKATTR DOC  Instructions to change clock display
    CLCK     COM  Displays clock and key status in the upper right hand
    CGCLOCK  DOC  Documentation for CGCLOCK.COM
    CGCLOCK  COM  Real time clock display for color/graphics display.
    CAL-YR   BAS  Displays a calendar for any given year.
    BANNER2  LBR  Library of the BANNER program files.
    BANNER2  BAT  batch file to extract all the files from BANNER.LBR
    AUTORES2 BAT  Same as AUTORES.BAT
    XTMENU   BAS  Menu and utilities program.
    UPDIR    COM  Utility to go back up the directory path
    SPRINT   DOC  Documentation for SPRINT.COM
    SPRINT   COM  Speedy PRINT replacement for IBM ROM BIOS routines.
    SPOOL20  COM  Improved print spooling utility.
    FLIP     COM  Control special key status (i.e. FLIP NUM OFF).
    KEYSTAT  DOC  Documentation for KEYSTAT.COM
    KEYSTAT  COM  Displays status of CapsLock and NumLock keys.
    KEYLOC_3 EXE  Modifies operation of the Alt, Ctrl, AND Shift keys.
    KEYLOC   DOC  Documentation for KEYLOC_3.EXE
    KBFIX    FIX  Patch to quiet the bell in KBFIX.COM
    KBFIX    COM  Change DOS keyboard buffer size.
    HGC      DOC  Documentation for HGC.COM
    HGC      COM  Screen Save Program for the Hercules Graphics Card
    SPEEDKEY DOC  Documentation for SPEEDKEY.COM
    LUE      COM  Used by BANNER2.BAT
    MONOCLK2 DOC  Documentation for MONOCLK2.COM
    MONOCLK2 COM  MONOCHROME Clock display.
    NPAD     COM  A windowing notepad.
    NOLF     DOC  Documentation for NOLF.EXE
    NOLF     EXE  Allows use of RADIO SHACK printer with the IBM PC.
    NOBLINK  COM  Prevents blinking of displayed characters.
    RE-VIEW  COM  Screen scroll buffer program
    PC-WINDO COM  Public domain attempt at SIDEKICK
    PASSWORD DOC  Documentation for PASSWORD.BAS
    PASSWORD DAT  Password file
    PASSWORD BAS  Provides password protection for you system
    NPAD     DOC  Documentation for NPAD.COM
    SPEEDKEY COM  Speeds up the PC keyboard.
    SNAPSHOT COM  DOS extension saves graphics screen in a disk file.
    SEARCH   DOC  Documentation for SEARCH.COM
    SEARCH   COM  Useful replacement for the DOS PATH command.
    SCRN     DOC  Documentation for SCRN.COM
    SCRN     COM  Shuts off display when it has not been used for a time
    S-LOCK   COM  Part of RE-VIEW.COM
    RUN      DOC  Documentation for RUN.COM
    RUN      COM  Allows execution of a file in a 'HIDDEN' directory
    RE-CLS   COM  Used by RE-VIEW.COM
    RE-VIEW  DOC  Documentation for RE-VIEW.COM
    REMIND   COM  Memo keeper. Like a string around your finger.
    RECALL   DOC  Documentation for RECALL.COM
    RECALL   COM  Allows retrieval of previously issued DOS commands
    RE-UP    COM  Used by RE-VIEW.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAL-YR.BAS

```bas
10 CLS: DEFINT A-Z
20 DIM BD(28),DA(12,7,6),DM(12),M$(12)
30 FOR T=1 TO 12: READ DM(T): NEXT
40 FOR T=1 TO 28: READ BD(T-1): NEXT
50 FOR T=1 TO 12: READ M$(T): NEXT
60 INPUT "WHAT YEAR "; Y
70 X=Y-14: IF X<0 THEN 60
80 X= Y - (INT(X/28)*28 +14)
90 IF Y/4 = INT(Y/4) THEN DM(2)=29 ELSE DM(2)=28
100 C2=1:CO=BD(X)-1
110   FOR T=1 TO 12
120 C3=C3+1:CO=CO+1:DA(T,CO,C2)=C3:IF CO=7 THEN CO=0:C2=C2+1
130 IF C3<>DM(T) THEN 120 ELSE C3=0:C2=1
140   NEXT:  PRINT
150   FOR T=1 TO 12 STEP 3
160 LOCATE,10: PRINT M$(T) TAB(37) M$(T+1) TAB(63) M$(T+2): PRINT
180 PRINT "    S  M  T  W  T  F  S" TAB(29) "  S  M  T  W  T  F  S" TAB(55)        "  S  M  T  W  T  F  S"
190     FOR TR=1 TO 6
200       FOR TRR=1 TO 3
210 LOCATE ,(TRR-1)*26+2: PRINT " ";
220         FOR TT=1 TO 7
230 D=DA(T+TRR-1,TT,TR)
240 IF D=0 THEN D$="   ": GOTO 260
250 D$=RIGHT$(" "+STR$(D),3)
260 PRINT D$;
270         NEXT
280       NEXT:  PRINT
290     NEXT
300   NEXT
310 END
320 DATA 31,28,31,30,31,30,31,31,30,31,30,31,3,4,5,7,1,2,3,5,6,7,1,3,4,5,6,1,2,3,4,6,7,1,2,4,5,6,7,2," JANUARY ","FEBRUARY","  MARCH  ","  APRIL  ","  MAY  ", "  JUNE  ","  JULY  "," AUGUST ","SEPTEMBER","OCTOBER","NOVEMBER"
330 DATA "DECEMBER "
```

## PASSWORD.BAS

```bas
1000 '=========================================================================
1010 'PASSWORD.BAS (From "Softalk", March, May & July, 1984)
1015 'minor mods and color added by P. Eskildsen, July 10, 1984
1020 'Uses BASICA 2.0 key trapping to kill Ctrl-Alt-Del, Ctrl-C, & Ctrl-Break:
1030 '
1040 KEY OFF :COLOR 2,0,1
1050 KEY 15,CHR$(12) + CHR$(83)                'CTRL-ALT-DEL
1060 KEY 16,CHR$(4) + CHR$(46)                 'CTRL-C
1070 KEY 17,CHR$(4) + CHR$(70)                 'CTRL-BREAK
1080 ON KEY(15) GOSUB 1120 : KEY(15) ON
1090 ON KEY(16) GOSUB 1120 : KEY(16) ON
1100 ON KEY(17) GOSUB 1120 : KEY(17) ON
1110 GOTO 1130
1120 BEEP:COLOR 12:PRINT "So there!":COLOR 2:RETURN
1130 '
1140 '
1150 'Read in password
1160 '
1170 OPEN "password.dat" FOR INPUT AS 1
1180 LINE INPUT#1,PASSWORD$
1190 CLOSE
1200 '
1210 'Check user's password entry one char at a time, as entered:
1220 '
1230 WHILE INKEY$ <> "": WEND
1240 CLS: PRINT "Please enter your password:"
1250 TRY = 0
1260 I = 1
1270 A$ = INKEY$:IF A$ = "" THEN 1270
1280 IF A$ = "}" THEN 1330
1290 IF MID$(PASSWORD$,I,1) <> A$ THEN GOTO 1340
1300 IF I = LEN(PASSWORD$) THEN GOTO 1330
1310 I = I + 1:IF I > LEN(PASSWORD$) + 1 THEN GOTO 1340
1320 GOTO 1270
1330 PRINT:LOCATE ,30:COLOR 26:PRINT "Welcome!":COLOR 2,0,1:SYSTEM
1340 'destroy system!
1350 TRY = TRY + 1
1360 COLOR 14:IF TRY < 3 THEN PRINT "Wrong! Try again from start of password.":GOTO 1260
1370 CLS:COLOR 23,4,4:CLS
1375 LOCATE 12,20 :PRINT "- Illegal entry attempt! System killed -"
1380 DEF SEG = 0
1390 FOR I = 0 TO 32767:POKE I,0:NEXT
```

## XTMENU.BAS

```bas
10 ' ********** PGM     : XTMENU -  UTILITIES              **********
20 ' ********** AUTHOR  : DAVE ARMBRUSTER   SEPTEMBER 1984 **********
30 ' ********** VERSION : 1.2                              **********
40 '
50 SELECT = 6  'ENTER NUMBER OF SUBDIRECTORY APPLICATIONS HERE
60 KEY OFF:CLS:GOSUB 1020
70 CLS:COLOR 6,0,0
80 LOCATE 1,1,0:PRINT "   -----------------------------  ";:COLOR 7,0,0:PRINT"PRIMARY MENU";:COLOR 6,0,0:PRINT"  -----------------------------   "
90 DAY$=DATE$:COLOR 6,0,0:LOCATE 2,61,0:PRINT"DATE : ";:COLOR 0,7,0:PRINT DAY$
100 TIM$=TIME$:COLOR 6,0,0:LOCATE 4,61,0:PRINT"TIME : ";:COLOR 0,7,0:PRINT TIM$
110 COLOR 6,0,0:LOCATE 6,12,0:PRINT "F1  APPLICATION  - Select library foreground job"
120 LOCATE 7,12,0:PRINT "F2  UTILITY      - PC Utilities"
130 LOCATE 8,12,0:PRINT "F3  BASICA       - Exit to Basic Programming Language"
140 LOCATE 9,12,0:PRINT "F4  MESSAGE      - Post System Message"
150 LOCATE 10,12,0:PRINT "F5  SYSTEM       - Exit to Disk Operating System"
160 COLOR 7,0,0:LOCATE 2,4,0:PRINT"OPTION ===>>"
170 COLOR 0,7,0:SEL$=""
180 WHILE SEL$<>"1" AND SEL$<>"2" AND SEL$<>"3" AND SEL$<>"4" AND SEL$<>"5"
190 TIM$=TIME$:LOCATE 4,68,0:PRINT TIM$
200 POKE 106,0
210 SEL$=INKEY$
220 WEND:COLOR 7,0,0
230 IF SEL$="X" OR SEL$="x" THEN CLS:SYSTEM
240 X=VAL(SEL$):LOCATE 2,16,0:PRINT X
250 FOR I=1 TO 500:NEXT I
260 IF X=5 THEN CLS:SYSTEM
270 ON X GOTO 350,920,290,580
280 '
290 ' ========== SETUP PROGRAMMING ENVIRONMENT ==========
300 '
310 KEY 1,"LIST":KEY 2,"RUN":KEY 3,"CLS":KEY 4,"FILES"+CHR$(13):KEY 5,"LOCATE ":KEY 6,"COLOR "
320 KEY 7,"SYSTEM"+CHR$(13):KEY 8,"TRON":KEY 9,"TROFF":KEY 10,"KEY"
330 KEY ON:COLOR 6,0,0:CLS:NEW
340 '
350 ' ========== APPLICATION MENU ==========
360 '
370 CLS:COLOR 6,0,0
380 LOCATE 1,1,0:PRINT "   ----------------------------  ";:COLOR 7,0,0:PRINT"APPLICATION MENU";:COLOR 6,0,0:PRINT"  ----------------------------"
390 DAY$=DATE$:COLOR 6,0,0:LOCATE 2,61,0:PRINT"DATE : ";:COLOR 0,7,0:PRINT DAY$
400 TIM$=TIME$:COLOR 6,0,0:LOCATE 4,61,0:PRINT"TIME : ";:COLOR 0,7,0:PRINT TIM$
410 COLOR 6,0,0
420 FOR I=6 TO 12:LOCATE I,12,0:PRINT OPT$(I-5):NEXT I
430 COLOR 7,0,0:LOCATE 2,4,0:PRINT"PRESS OPTION LETTER ===>>"
440 COLOR 0,7,0:S$="":X=999
450 WHILE S$<>"1" AND S$<>"2" AND S$<>"3" AND S$<>"4" AND S$<>"5" AND S$<>"6" AND S$<>"7"
460 TIM$=TIME$:LOCATE 4,68,0:PRINT TIM$
470 POKE 106,0
480 S$=INKEY$
490 WEND:COLOR 7,0,0
500 IF S$="M" OR S$="m" THEN 70
510 X=VAL(S$):LOCATE 2,30,0:PRINT X
520 IF X=7 THEN 70
530 FOR I=1 TO SELECT
540 IF X=I THEN CHDIR DIR$+PATH$(I)
550 NEXT I
560 CLS:SYSTEM
570 '
580 ' ========== MESSAGE ROUTINE ==========
590 '
600 COLOR 6,0,0:CTR=8:CLS:LOCATE 1,1,0:PRINT "   ----------------------------  ";:COLOR 7,0,0:PRINT"BULLETIN BOARD";:COLOR 6,0,0:PRINT"  ----------------------------   ":COLOR 7,0,0
610 LOCATE 3,16,0:PRINT"F1 ==> READ     F2 ==> APPEND     F3 ==> CREATE"
620 COLOR 6,0,0:LOCATE 7,1,0:PRINT"....+....1....+....2....+....3....+....4....+....5....+....6....+....7....+...."
630 Q$="":WHILE Q$<>"1" AND Q$<>"2" AND Q$<>"3"
640 POKE 106,0
650 Q$=INKEY$
660 WEND:T=VAL(Q$):IF T=1 THEN 670 ELSE IF T=2 THEN 680 ELSE 690
670 OPEN "BULLETIN.XTM" FOR INPUT AS #1:GOTO 710
680 OPEN "BULLETIN.XTM" FOR APPEND AS #1:COLOR 7,0,0:GOTO 790
690 OPEN "BULLETIN.XTM" FOR OUTPUT AS #1:COLOR 7,0,0:GOTO 790
700 FOR I=8 TO 23:LOCATE I,1,0:PRINT R$:NEXT I
710 IF EOF(1) THEN CLOSE:GOTO 760
720 LINE INPUT #1,H$
730 LOCATE CTR,1,0:PRINT H$
740 CTR=CTR+1:IF CTR<21 THEN 710 ELSE CTR=8
750 LOCATE 23,53,0:INPUT"......<ENTER) to continue";ANS$:GOTO 700
760 LOCATE 23,40,0:INPUT"MESSAGE COMPLETE.....<ENTER> when ready";ANS$
770 COLOR 7,0,0:GOTO 70
780 '
790 ' ============= MESSAGE INPUT ==========
800 '
810 LOCATE 5,58,0:PRINT"Input begins, enter 'DONE' to end":GOTO 830
820 FOR I=8 TO 23:LOCATE I,1,0:PRINT R$:NEXT I
830 LOCATE CTR,1,0:INPUT"",H$
840 IF H$="DONE" OR H$="done" THEN CLOSE:GOTO 890
850 LENGTH=LEN(H$):IF LENGTH>80 THEN 830
860 PRINT#1,H$
870 CTR=CTR+1:IF CTR>=23 THEN CTR=8:GOTO 820
880 GOTO 830
890 LOCATE 23,26,0:PRINT"DATA ENTRY COMPLETE........."
900 FOR I=1 TO 2500:NEXT I
910 COLOR 7,0,0:GOTO 70
920 ' ========== INSERT UTILITIES HERE ==========
930 ' =                                         =
940 ' =                                         =
950 ' =                                         =
960 ' =                                         =
970 ' =                                         =
980 ' =                                         =
990 ' ===========================================
1000 GOTO 70
1010 '
1020 ' ========== SET SYSTEM PARMETERS ==========
1030 '
1040 DIM PATH$(SELECT):FOR I=1 TO SELECT:READ PATH$(I):NEXT I
1050 DIM OPT$(SELECT+1):FOR I=1 TO SELECT+1:READ OPT$(I):NEXT I
1060 FOR I=1 TO 10:Z$=RIGHT$(STR$(I),1):KEY I,Z$:NEXT I
1070 R$=SPACE$(78)
1080 DIR$="C:\MASTER\"  'SELECT DIRECTORY LEVELS
1090 DATA "ISPF","PASCAL","DBASE","GAMES","LOTUS","PCTALK"
1100 DATA " F1   ISPF  - Exit to Screen Productivity Facility"
1110 DATA " F2   PAS   - Pascal compiler subsystem"
1120 DATA " F3   DB    - Exit to DBASE macro language"
1130 DATA " F4   GMS   - Select GMS menu option"
1140 DATA " F5   123   - Lotus 1-2-3 spreadsheet"
1150 DATA " F6   PCT   - Begin PCTALK III communications"
1160 DATA " F7         - Exit to Menu"
1170 RETURN
1500 '
1510 '
1520 '*****************************************************************
1530 '
1540 '     This program acts as an applications control and utility
1550 ' menu. To use it in its current form you should have DOS 2.0
1560 ' or a higher release. It works by utilizing the directory
1570 ' capabilities in BASICA and a series of batch files. I use a
1580 ' program called MENU.BAT to start things rolling. This file
1590 ' is as follows :
1600 '
1610 ' echo off            <<=== turn off the echo function
1620 ' cls                 <<=== clear screen
1630 ' basica xtmenu.bas   <<=== execute the primary menu
1640 ' xtm.bat             <<=== execute application batch file in
1650 '                           directory ???
1660 '
1670 '     Each application must have its own subdirectory and files.
1675 ' The XTMENU file uses the root directory which must contain
1680 ' BASICA.COM. For instance if you are using PC-Talk then all
1690 ' of the associated files for it should be in one directory called
1700 ' PCTALK or whatever. When the program is run it changes the
1710 ' current directory using the CHDIR command and then returns
1720 ' control to the system. As shown above the system then
1730 ' executes the XTM.BAT file. The XTM.BAT file resides in each
1740 ' application directory so DOS doesnt fuss too much. A sample XTM
1750 ' file looks like this :
1760 '
1770 ' cls                 <<=== clear screen
1780 ' pc-talk.exe         <<=== execute any application
1790 ' cd\                 <<=== change to root directory
1800 ' xtmenu.bat          <<=== rerun the menu program
1810 '
1820 '     A XTM.BAT file must also reside in the root directory with
1830 ' the XTMENU file. Mine does the following on menu termination :
1840 '
1850 ' cls
1860 ' dir *.ba?
1870 '
1873 ' =====>> SETUP
1877 '
1880 '     The file MESSAGE.XTM should also be in the root directory.
1890 ' Use the CREATE option to place one there in your initial setup.
1900 '
1910 ' LINE   50 - Change the variable 'SELECT' to the number of
1920 '             applications you wish to use (UP TO 10).
1930 '
1940 ' LINE  450 - Change this to the number of selection you like plus
1950 '             one to exit back to the menu. This line could be
1960 '             changed to a loop but I leave that for you.
1970 '
1980 ' LINE  920 - The utilities I use are the Norton Utilities which
1990 '             I execute with the SHELL command in DOS 3.0. Since
2000 '             most people do not yet have this release I have
2010 '             omitted these routines to let somebody add their
2020 '             own favorites.
2030 '
2040 ' LINE 1080 - The variable DIR$ should be changed to your system
2050 '             needs. It provides the path to the application
2060 '             directories you need. All Applications should be on
2070 '             the same level . If they are not then use line
2080 '             1090 to make corrections to the proper path.
2090 '
2100 ' LINE 1090 - This line contains the names of the directories
2110 '             to be accessed for each application and should
2120 '             be changed to your system needs.
2130 '
2140 ' LINE 1100 - This group of lines is displayed for the application
2150 '             menu.
2160 '
2170 '      This program should be changed to your own needs and
2180 ' could be enhanced quite a bit. If you do have problems with
2190 ' it then leave a message on the bulletin board.
2200 '
2210 '                                     Dave Armbruster
2220 '
2230 '*****************************************************************
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0374

     Volume in drive A has no label
     Directory of A:\

    ANSIPCH  EXE      6144   3-17-84   1:28a
    AUTORES  BAT       128  10-26-86
    AUTORES2 BAT       128  10-26-18
    BANNER2  BAT       386   7-18-86   6:37p
    BANNER2  LBR     59648   3-02-85  11:04p
    CAL-YR   BAS      1280   6-16-99
    CGCLOCK  COM      1024   3-02-85  11:04p
    CGCLOCK  DOC      3584  12-16-17
    CLCK     COM       896  12-16-83
    CLOKATTR DOC       768   6-06-75
    DPATH    COM       640   7-26-08
    DPATH    DOC      3840  12-26-41
    DU       COM     13824   3-26-87
    EQUIP    COM      1664  12-26-75
    EQUIP    DOC      2176  11-26-71
    EXL      EXE     16768   3-04-27
    FILES374 TXT      3667  11-11-86   2:23p
    FK20     COM       896  12-06-03
    FK20     DOC      6912  11-16-19
    FLIP     COM       384   7-16-64
    HGC      COM       512   6-20-23
    HGC      DOC      2304   2-26-64
    KBFIX    COM      1408  12-26-11
    KBFIX    FIX       896   7-26-01
    KEYLOC   DOC      3072   7-06-65
    KEYLOC_3 EXE      1536   3-02-85  11:04p
    KEYSTAT  COM       896   3-02-85  11:04p
    KEYSTAT  DOC       128  10-16-87
    LUE      COM      1536   2-26-09
    MONOCLK2 COM       384   6-06-75
    MONOCLK2 DOC       896   3-02-85  11:04p
    NOBLINK  COM       768   3-26-91
    NOLF     DOC       128   6-26-34
    NOLF     EXE       768   6-16-91
    NPAD     COM      1152   3-02-85  11:04p
    NPAD     DOC      1664  10-26-95
    PASSWORD BAS      1664   3-26-25
    PASSWORD DAT       128  12-26-31
    PASSWORD DOC      2048   6-26-83
    PC-WINDO COM     21760  12-31-99  12:00a
    RE-CLS   COM       128   6-16-26
    RE-UP    COM       128  10-16-61
    RE-VIEW  COM      1280   3-02-85  11:04p
    RE-VIEW  DOC     10724  11-16-84   6:56p
    RECALL   COM      9216  12-26-93
    RECALL   DOC      6226  11-26-84   6:57p
    REMIND   COM     13568   7-26-31
    RUN      COM       512   6-20-91
    RUN      DOC      2048  10-20-95
    S-LOCK   COM       128  11-26-93
    SCRN     COM       512   3-16-83
    SCRN     DOC      2688  12-16-43
    SEARCH   COM      3712   3-04-53
    SEARCH   DOC      5248  11-04-83
    SNAPSHOT COM      1792  12-16-43
    SPEEDKEY COM       512   2-16-97
    SPEEDKEY DOC      1792   6-16-95
    SPOOL20  COM      2304  12-31-99  12:00a
    SPRINT   COM       640  12-31-99  12:00a
    SPRINT   DOC      1664   6-26-42
    UPDIR    COM       256   7-26-67
    XTMENU   BAS      9088  11-26-90
           62 file(s)     242571 bytes
                           49152 bytes free
