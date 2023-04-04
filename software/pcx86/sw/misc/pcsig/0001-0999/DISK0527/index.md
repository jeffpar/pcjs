---
layout: page
title: "PC-SIG Library Disk #527"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0527/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0527"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC WINDOWING TOOLBOX FOR PROGRAMERS"

    BASIC WINDOWING TOOLBOX (B-WINDOW) is a collection of functions that
    give windowing capability to a BASIC programmer.  Windows can be opened
    over sections of the screen and, when closed, the overwritten section
    of the screen is restored.  With B-WINDOW, BASIC programs look more
    visually exciting and professional.  B-WINDOW works with both QuickBASIC
    and interpreted BASIC.  Special windowing cursor control and string
    character display, and border drawing are included.  Everything happens
    at top speed because B-WINDOW was written in C, converted to assembler,
    and hand-optimized.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BWDEMOI.BAS

```bas
100 'BWDEMOI.BAS  Interpreter B-WINDOW demo
110 '
120 '   This program demonstrates using B-WINDOW with standard
130 '   interpreted BASIC. The windowing file B-WIN20I.BIN is
140 '   BLOADed. Do not compile this program without first making
150 '   it compatible with a B-WINDOW .OBJ (object) file. See the
160 '   B-WINDOW documentation for details.
170 '
180 ' The following 2 lines initialize windowing. Do not forget
190 ' to include these lines at the beginning of your program!
200 ' And do not alter them. (If the "CLEAR" was in the subroutine
210 ' at 60060, the subroutine would never return)
215 '
220 CLEAR,&H8000        'limit BASIC to half way up segment
230 GOSUB 60060
240 '
250 ' Write on screen so window background is visible
260 '
270 S$ = "Window background   "
280 ATTRIB% = 7
290 CALL WFGCOLOR (ATTRIB%)
300 ATTRIB% = 0
310 CALL WBGCOLOR (ATTRIB%)
320 FOR I = 1 TO 88
330   CALL WWRITE (S$)
340 NEXT I
350 '
360 'Define the window
370 '
380 WID%=70 : HGT%=10 : BDR%=1 '1 = true
390 CALL WDEF (WNUM1%, WID%, HGT%, BDR%)
400 '
410 'Open the window
420 '
430 X%=4 : Y%=3 : CLR%=1 : WBGC%=0 : BTYPE%=2 : BFGC%=7 : BBGC%=0
440 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
450 '
460 'Write in the window
470 '
480 ATTRIB% = W.NORM
490 S$ = "  BWDEMOI.BAS - Demonstration of B-WINDOW in use"
500 CALL WWRITE (S$)
510 X% = 5 : Y% = 2
520 CALL WGOTOXY (X%, Y%)
530 S$ = "- Uses the B-WINI.MRG file"
540 CALL WWRITE (S$)
550 Y% = 3
560 CALL WGOTOXY (X%, Y%)
570 S$ = "- 20000 byte window buffer (B-WIN20I.BIN)"
580 CALL WWRITE (S$)
590 Y% = 4
600 CALL WGOTOXY (X%, Y%)
610 S$ = "- Uses the functions WDEF, WOPEN, WCLOSE, WGOTOXY, WWRITE"
620 CALL WWRITE (S$)
630 Y% = 5
640 CALL WGOTOXY (X%, Y%)
650 S$ = "- Demonstrates reopening windows in a different location"
660 CALL WWRITE (S$)
670 X% = 42 : Y% = 7
680 CALL WGOTOXY (X%, Y%)
690 ATTRIB% = 15
700 CALL WFGCOLOR (ATTRIB%)
710 S$="Press any key to continue"
720 CALL WWRITE (S$)
730 ATTRIB% = 7
740 CALL WFGCOLOR (ATTRIB%)
750 'Wait for a key to be pressed
760 V$=INKEY$ : IF V$="" THEN GOTO 760
770 '
780 ' Close window
790 '
800 CALL WCLOSE
810 '
820 'Reopen window at different location with a different border
830 '
840 X%=8 : Y%=12 : CLR%=0 : WBGC%=0 : BTYPE%=5 : BFGC%=7 : BBGC%=0
850 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
860 V$=INKEY$ : IF V$="" THEN GOTO 860
870 '
880 ' Close window again
890 '
900 CALL WCLOSE
910 '
920 ' Reopen window again at different location with a different border
930 '
940 X%=0 : Y%=0 : CLR%=0 : WBGC%=0 : BTYPE%=5 : BFGC%=7 : BBGC%=7
950 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
960 V$=INKEY$ : IF V$="" THEN GOTO 960
970 '
980 ' Close window for last time
990 '
1000 CALL WCLOSE
1010 '
1020 ' Use WGOTOXY on standard 80x25 screen
1030 '
1040 X%=50 : Y%=24
1050 CALL WGOTOXY (X%, Y%)
1060 S$="Press any key to continue"
1070 CALL WWRITE (S$)
1080 V$=INKEY$ : IF V$="" THEN GOTO 1080
1090 CLS
60000 '
60010 ' B-WINI.MRG - B-WINDOW merge file
60020 '
60030 ' Merge this code with BASIC programs using B-WINDOW
60040 ' functions if you are using a BASIC interpreter. DO NOT
60050 ' include this code in a compiled program. See the
60052 ' documentation for details.
60054 '
60056 CLS : STOP 'Terminate main body of BASIC program
60058 '
60060 ' <== Entry point of initialization
60070 '
60110 '
60120 'Find out value of the data segment register DS. Use
60130 'a 16 byte array that can also be used for the WINT86
60140 'function. The short assembler subroutine that is poked
60150 'into the array returns the DS segment register value
60160 '
60170 DEF SEG
60180 W.DS% = 0
60190 DIM WREGARAY%(8)
60200 WPTR = VARPTR(WREGARAY%(0)) 'pointer to start of array
60210 IF WPTR < 0 THEN WPTR = WPTR+65536!
60220 POKE WPTR,&H89:POKE WPTR+1,&HE5                    'mov  bp,sp
60230 POKE WPTR+2,&H8C:POKE WPTR+3,&HD8                  'mov  ax,ds
60240 POKE WPTR+4,&H8B:POKE WPTR+5,&H5E:POKE WPTR+6,&H4  'mov  bx,[bp+4]
60250 POKE WPTR+7,&H89:POKE WPTR+8,&H7                   'mov  [bx],ax
60260 POKE WPTR+9,&HCA:POKE WPTR+10,&H2:POKE WPTR+11,&H0 'retf 2
60270 CALL WPTR(W.DS%)
60280 '
60290 ' Set W.SEGBASE to half way up BASIC string space. The
60300 ' "CLEAR,&H8000" instruction at the beginning of the program
60310 ' created room for the BLOAD.
60320 '
60330 W.SEGBASE = W.DS%+&H800
60340 DEF SEG = W.SEGBASE
60350 '
60360 ' The BLOADed ".BIN" file has a table of entry points
60370 ' for the windowing functions. The following assignments
60380 ' are the offsets of the various functions in the table
60390 '
60400 WINIT = &H0
60410 WDEF = WINIT + 6
60420 WOPEN = WINIT + 12
60430 WCLOSE = WINIT + 18
60440 WKILL = WINIT + 24
60450 WWRITE = WINIT + 30
60460 WDSP1 = WINIT + 36
60470 WSCROLL = WINIT + 42
60480 WGETCX = WINIT + 48
60490 WGETCY = WINIT + 54
60500 WGOTOXY = WINIT + 60
60510 WBORDER = WINIT + 66
60520 WERRDISPLAYON = WINIT + 72
60530 WERRDISPLAYOFF = WINIT + 78
60540 WINT86 = WINIT + 84
60550 WLPTSELECT = WINIT + 90
60560 WLPTIMOUT = WINIT + 96
60570 WFGCOLOR = WINIT + 102
60580 WBGCOLOR = WINIT + 108
60584 WSCRNTYPE = WINIT + 114
60590 '
60680 ' Do NOT change the BLOAD offset!
60690 '
60700 BLOAD "b-win20i.bin", 0   'offset of zero
60710 '
60720 ' WINIT MUST be called before any other windowing functions
60730 '
60740 CALL WINIT (WSTATUS%)
60750 IF WSTATUS% <> 1 THEN PRINT "Windowing initialization error":STOP
60760 '
60770 RETURN 'End of windowing initialization
```

## QBDEMO.BAS

```bas



     'QBDEMO.BAS:  Demo of compiled QuickBASIC Version 4 with B-WINDOW

     '   Compile this as "QBDEMO.OBJ"
     '   Then link to "QBV4.OBJ" (available, with source code, for $20)
     '            or
     '   Load "QBV4.QLB" when you run QuickBASIC interactively:
     '      QB QBDEMO /LQBV4.QLB


     ' windowing constants

     w.mono% = 0: w.cga% = 1: w.ega% = 2
     w.true% = 1: w.false% = 0: w.error% = 0: w.success% = 1
     ' 6 border types; no border,single line, double line, mixed 1 & 2, block
     w.nobdr% = 0: w.sngln% = 1: w.dbln% = 2:
     w.mxd1% = 3: w.mxd2% = 4: w.blkln% = 5

     ' determine if color or monochrome video card

     CALL wscrntype(stype%)
     IF stype% = w.mono% THEN
        ' set everything to white-on-black if monochrome board

        'window 1    window 2    window 3    window 4
         wbgc1% = 0: wbgc2% = 0: wbgc3% = 0: wbgc4% = 0  ' background color
         bfgc1% = 7: bfgc2% = 7: bfgc3% = 7: bfgc4% = 7  ' foreground color
         bbgc1% = 0: bbgc2% = 0: bbgc3% = 0: bbgc4% = 0  ' background color
         wtc1% = 7:  wtc2% = 7:  wtc3% = 7:  wtc4% = 7   ' window text color
         sfgc1% = 7: sbgc1% = 0                          ' string color
     ELSE
        ' color setup

        'window 1   window 2   window 3   window 4
         wbgc1% = 2: wbgc2% = 5: wbgc3% = 7: wbgc4% = 5
         bfgc1% = 5: bfgc2% = 4: bfgc3% = 1: bfgc4% = 2
         bbgc1% = 2: bbgc2% = 4: bbgc3% = 1: bbgc4% = 2
         wtc1% = 7: wtc2% = 7: wtc3% = 0: wtc4% = 14
         sfgc1% = 12: sbgc1% = 1
     END IF

     ' initialize windowing. do not forget to do this!
     CALL winit(status%)
     IF status% = w.error% THEN PRINT "initialization error": STOP

     ' draw a border on screen
     x% = 8: y% = 5: wid% = 55: hgt% = 7: btype% = w.blkln%
     CALL wborder(status%, x%, y%, wid%, hgt%, btype%)

     ' write on 1st screen
     CALL wgotoxy(18, 7)
     CALL wfgcolor(15)
     CALL wwrite("Basic Windowing Toolbox Version 2.3")
     CALL wgotoxy(15, 8)
     CALL wfgcolor(7)
     CALL wwrite("Compiled QuickBASIC Demonstration Program")
     CALL wgotoxy(12, 9)
     CALL wwrite("Source: QBDEMO.BAS        Linked with: QBV4.OBJ")
     CALL wgotoxy(50, 23)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' define 4 windows

     wid% = 75: hgt% = 15: bdr% = w.true%
     CALL wdef(wnum1%, wid%, hgt%, bdr%)
     wid% = 70: hgt% = 20
     CALL wdef(wnum2%, wid%, hgt%, bdr%)
     wid% = 55: hgt% = 20
     CALL wdef(wnum3%, wid%, hgt%, bdr%)
     wid% = 38: hgt% = 12
     CALL wdef(wnum4%, wid%, hgt%, bdr%)

     ' open window 1

     x% = 0: y% = 9: btype% = w.dbln%: clr% = w.true%
     CALL wopen(status%, wnum1%, x%, y%, clr%, wbgc1%, btype%, bfgc1%, bbgc1%)

     ' write in window 1

     CALL wfgcolor(wtc1%)
     CALL wbgcolor(wbgc1%)
     CALL wgotoxy(0, 2)
     CALL wwrite("Text can be ")
     CALL wfgcolor(wtc1% + 16)
     CALL wwrite("blinking, ")
     CALL wfgcolor(15 + 16)
     CALL wwrite("blinking bright, ")
     CALL wfgcolor(wtc1%)
     CALL wwrite("or just ")
     CALL wfgcolor(15)
     CALL wwrite("bright. ")
     CALL wfgcolor(wtc1%)
     CALL wwrite("All graphics card colors are also available. ")
     IF stype% <> w.mono% THEN
        ' display colors
        x% = 6: y% = 5
        FOR y% = 5 TO 7
           CALL wgotoxy(x%, y%)
           FOR i% = 1 TO 15
              CALL wfgcolor(i%)
              CALL wwrite("████") 'ascii 219, which has no background
           NEXT i%
        NEXT y%
     END IF
     CALL wgotoxy(24, 10)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 2

     x% = 9: y% = 1
     CALL wopen(status%, wnum2%, x%, y%, clr%, wbgc2%, btype%, bfgc2%, bbgc2%)

     ' write lots of text in window 2

     CALL wfgcolor(wtc2%)
     CALL wbgcolor(wbgc2%)
     FOR i = 1 TO 70
        CALL wwrite("Scrolling ")
        CALL wfgcolor(15 + 16)
        CALL wwrite("up ")
        CALL wfgcolor(wtc2%)
        CALL wwrite("in the window ")
     NEXT i
     dir% = 0: num% = 5
     CALL wscroll(dir%, num%)
     CALL wgotoxy(0, 17)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 3

     x% = 0: y% = 3: btype% = w.mxd1%: clr% = w.true%
     CALL wopen(status%, wnum3%, x%, y%, clr%, wbgc3%, btype%, bfgc3%, bbgc3%)

     ' write to window 3

     CALL wfgcolor(wtc3%)
     CALL wbgcolor(wbgc3%)
     CALL wgotoxy(1, 1)
     CALL wwrite("You can define and edit fields:")
     x% = 5
     CALL wgotoxy(x%, 2)
     CALL wwrite("- <CR> to finish with each field")
     CALL wgotoxy(x%, 3)
     CALL wwrite("- Arrow keys to move left and right")
     CALL wgotoxy(x%, 4)
     CALL wwrite("- HOME moves to string start")
     CALL wgotoxy(x%, 5)
     CALL wwrite("- END moves to string end")
     CALL wgotoxy(x%, 6)
     CALL wwrite("- DEL erases cursor position")
     CALL wgotoxy(x%, 7)
     CALL wwrite("- BACKSPACE deletes to left")
     CALL wgotoxy(x%, 8)
     CALL wwrite("- Auto erase if first key is text")
     ' define strings with optional initial value
     s1$ = "Kenneth Page         "
     s2$ = "59 Beech Street      "
     s3$ = "Springfield, AZ 85999"
     CALL wgotoxy(1, 10): CALL wwrite("Name:")
     CALL wgotoxy(1, 12): CALL wwrite("Addr:")
     CALL wgotoxy(1, 14): CALL wwrite("Addr:")
     ' set up string display colors
     CALL wfgcolor(sfgc1%)
     CALL wbgcolor(sbgc1%)
     CALL wgotoxy(7, 10): CALL wwrite(s1$)
     CALL wgotoxy(7, 12): CALL wwrite(s2$)
     CALL wgotoxy(7, 14): CALL wwrite(s3$)
     ' size of editing field on screen is string length-1,
     ' so have at least one extra trailing space
     s1$ = s1$ + " ": s2$ = s2$ + " ": s3$ = s3$ + " "
     CALL wgotoxy(7, 10): CALL wgetstr(s1$)
     CALL wgotoxy(7, 12): CALL wgetstr(s2$)
     CALL wgotoxy(7, 14): CALL wgetstr(s3$)
     ' get rid of trailing NULL in strings
     s1$ = LEFT$(s1$, INSTR(s1$, CHR$(0)) - 1)
     s2$ = LEFT$(s2$, INSTR(s2$, CHR$(0)) - 1)
     s3$ = LEFT$(s3$, INSTR(s3$, CHR$(0)) - 1)
     CALL wfgcolor(wtc3%)
     CALL wbgcolor(wbgc3%)
     CALL wgotoxy(20, 17)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 4

     x% = 30: y% = 6: btype% = w.blkln%: clr% = w.true%
     CALL wopen(status%, wnum4%, x%, y%, clr%, wbgc4%, btype%, bfgc4%, bbgc4%)

     ' write to window 4

     CALL wfgcolor(wtc4%)
     CALL wbgcolor(wbgc4%)
     CALL wgotoxy(0, 1)
     CALL wwrite("Type in characters.  The lines auto-")
     CALL wgotoxy(0, 2)
     CALL wwrite("matically wrap-around when the right")
     CALL wgotoxy(0, 3)
     CALL wwrite("margin is reached.  Carriage return")
     CALL wgotoxy(0, 4)
     CALL wwrite("causes scrolling. Press ")
     CALL wfgcolor(15)
     CALL wwrite("ESC ")
     CALL wfgcolor(wtc4%)
     CALL wwrite("to quit")
     CALL wgotoxy(0, 6)
     v$ = "x"
     WHILE (ASC(v$) <> 27)   '27 = ASCII value for ESCAPE character
       GOSUB keypress
       IF ASC(v$) <> 27 THEN
          ' character was <CR>? (ASCII 13)
          IF ASC(v$) <> 13 THEN
             CALL wwrite(v$)
          ELSE
             dir% = 0: num% = 1: CALL wscroll(dir%, num%)
             CALL wgetcy(y%)
             x% = 0: CALL wgotoxy(x%, y%)
          END IF
       END IF
     WEND

     ' close window 4

     CALL wclose
     GOSUB keypress

     ' close window 3

     CALL wclose
     GOSUB keypress

     ' close window 2

     CALL wclose
     GOSUB keypress

     ' reopen window 2 at a different location

     x% = 0: y% = 5: btype% = w.mxd2%: clr% = w.false%
     CALL wopen(status%, wnum2%, x%, y%, clr%, wbgc2%, btype%, bfgc2%, bbgc2%)
     GOSUB keypress

     ' close window 2 again

     CALL wclose
     GOSUB keypress

     ' close window 1

     CALL wclose
     GOSUB keypress

     ' clear screen

     CALL winit(status%)
     END

     '***************
     ' KEYPRESS
     ' subroutine that waits for the next key press
     '

keypress:
       v$ = ""
       WHILE v$ = ""
          v$ = INKEY$
       WEND
       RETURN

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0527

     Volume in drive A has no label
     Directory of A:\

    B-WIN20I BIN     26770   7-15-88   3:05p
    B-WINDOW DOC     66629   1-23-89   2:38p
    B-WINI   MRG      2567   7-15-88   3:05p
    B-WREAD  ME       3303   7-15-88   3:05p
    BWDEMOI  BAS      5655   7-15-88   3:05p
    QBDEMO   BAS      8293   7-15-88   3:05p
    QBDEMO   EXE     36593   7-15-88   3:05p
    QBV4     QLB     32397   7-15-88   3:05p
    FILES527 TXT      1257   2-08-89   1:45p
    GO       BAT        38  11-25-87  10:57a
    GO       TXT       463   2-08-89  12:23p
    MANUAL   BAT       147   1-19-89   9:21a
           12 file(s)     184112 bytes
                          130048 bytes free
