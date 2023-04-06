---
layout: page
title: "PC-SIG Diskette Library (Disk #594)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0594/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0594"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "NOTES FOR GENEOLOGY ON DISPLAY"

    NOTES AND SOURCES ON DISPLAY is an extension of the GENEALOGY ON DISPLAY
    program (PC-SIG disk #90) and uses the "persons" file from that
    program.  Enhance and organize the search for your ancestral past by
    saving notes on each new find.  Keep track of your sources of
    information, the types of information you use, the event date, the
    research date and finally, the contents of the "note" itself.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APPENDIX.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 DASHES$ = "+"+STRING$(54,45)+"+"
240 TRIM.LINE$ = "(Trim-line)"
250 REM Program begins here
260 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
270 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
280 GOSUB 920  'For trim line and heading space
290 FOR I = 1 TO 6 : LPRINT : NEXT I
300 LPRINT BOLD.ON$;     'Set Emphasized mode
310 LPRINT EXPAND.ON$;   'Set Expanded Print
320 LPRINT TAB(TAB.POS-5);TITLE$
330 LPRINT EXPAND.OFF$;  'Return to normal
340 LPRINT BOLD.OFF$;    'Return to normal
350 FOR I = 1 TO 3 : LPRINT : NEXT I
360 LPRINT BOLD.ON$;     'Set Emphasized mode
370 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
380 LPRINT BOLD.OFF$;    'Return to normal
390 LPRINT : LPRINT : LPRINT
400 LPRINT TAB(TAB.POS+11);"Version 1.1"
410 FOR I = 1 TO 11 : LPRINT : NEXT I
420 LPRINT TAB(TAB.POS+10); DOC.NAME$
430 LINE.NO = LINE.NO + 27
440 '
450 READ REPLY$
460 REM First, change tildes to quotes
470 FOR Q = 1 TO LEN(REPLY$)
480  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
490 NEXT Q
500 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1270: GOTO 450
510 IF LINE.NO > 44 THEN GOSUB 1030
520 REM Print the line if not a command
530 LPRINT TAB(TAB.POS);REPLY$
540 LINE.NO = LINE.NO + 1
550 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
560 GOTO 450
570 DATA ".pa"
580 REM   Data for the Copyright Page
590 DATA "Anyone may request a copy of Notes and"
600 DATA "Sources ON DISPLAY, for trial, by sending"
610 DATA "an unformatted, double-sided, double-"
620 DATA "density, 5-1/4 inch diskette to the"
630 DATA "author of the programs."
640 DATA ".sp"
650 DATA "An addressed, postage-paid return"
660 DATA "mailer must accompany the diskette (no"
670 DATA "exceptions, please).
680 DATA ".sp"
690 DATA "A copy of the programs with documenta-"
700 DATA "tion will be sent by return mail."
710 DATA ".vt 2"
720 DATA "Users are encouraged to copy and share"
730 DATA "the programs with others."
740 DATA ".vt 2"
750 DATA "If you are using this program, you are"
760 DATA "expected to become a Registered User,"
770 DATA "by making a contribution to the author"
780 DATA "of the program ($30.00 suggested for"
790 DATA "Registered Users of Genealogy ON DIS-"
800 DATA "PLAY, otherwise, $45.00 suggested)."
810 DATA ".sp"
820 DATA "Melvin O. Duke"
830 DATA "P. O. Box 20836"
840 DATA "San Jose, CA  95160"
850 DATA "(408) 268-6637"
860 DATA ".vt 3"
870 DATA "Copyright (c) 1986, by:"
880 DATA "Melvin O. Duke."
890 DATA ".sp"
900 DATA "All rights reserved."
910 '
920 REM Top of each page routine
930 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
940 LPRINT
950 LPRINT TAB(30); TRIM.LINE$
960 LPRINT DASHES$ 'Dashes
970 FOR I = 1 TO 6
980  LPRINT
990 NEXT I
1000 LINE.NO = LINE.NO + 6
1010 RETURN
1020 '
1030 REM Bottom of each page Routine
1040 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1160
1050 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1060 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1070 IF PAGE.NO MOD 2 = 1 THEN 1110
1080 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1090 LPRINT TAB(TAB.POS+27);"User's Manual"
1100 GOTO 1160
1110 LPRINT TAB(TAB.POS); "User's Manual";
1120 IF PAGE.NO < 10 THEN DELTA = 34
1130 IF PAGE.NO >  9 THEN DELTA = 33
1140 IF PAGE.NO > 99 THEN DELTA = 32
1150 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1160 LPRINT : LPRINT : LPRINT
1170 LPRINT DASHES$ 'dashes after 51
1180 LPRINT TAB(30); TRIM.LINE$
1190 LPRINT FORM.FEED$;
1200 PAGE.NO = PAGE.NO + 1
1210 LINE.NO = 1
1220 IF REPLY$ = ".eof" THEN 1240  'Bypass after last page
1230 GOSUB 920  'For top of next page
1240 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1250 RETURN
1260 '
1270 REM Command Processor
1280 IF LEFT$(REPLY$,3) = ".h1" THEN 1390
1290 IF LEFT$(REPLY$,3) = ".h2" THEN 1550
1300 IF LEFT$(REPLY$,3) = ".h3" THEN 1660
1310 IF LEFT$(REPLY$,3) = ".sp" THEN 1770
1320 IF LEFT$(REPLY$,4) = ".eof" THEN 1820
1330 IF LEFT$(REPLY$,3) = ".pa" THEN 1850
1340 IF LEFT$(REPLY$,3) = ".pn" THEN PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3)) : RETURN
1350 IF LEFT$(REPLY$,3) = ".vt" THEN 1920
1360 IF LEFT$(REPLY$,3) = ".pk" THEN 2030
1370 IF LEFT$(REPLY$,3) = ".in" THEN 2160
1380 STOP
1390 REM Head 1 Processor
1400 FOR I = LINE.NO TO 44
1410  LPRINT
1420 NEXT I
1430 GOSUB 1030  'Bottom of page Routine
1440 'IF PAGE.NO MOD 2 = 0 THEN GOSUB 1860  'For h1 on Odd pages
1450 LPRINT BOLD.ON$;     'Set emphasized print
1460 LPRINT EXPAND.ON$;   'Set expanded print
1470 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1480 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1490 LPRINT EXPAND.OFF$;  'Return to normal
1500 LPRINT BOLD.OFF$;    'Return to non-bold
1510 LINE.NO = LINE.NO+1
1520 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1530 RETURN
1540 '
1550 REM Head 2 Processor
1560 IF LINE.NO = 7 THEN 1580 'skip spacing if at top of page
1570 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1580 LPRINT BOLD.ON$;  'Set emphasized print
1590 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1600 LPRINT BOLD.OFF$; 'Return to normal
1610 LPRINT
1620 LINE.NO = LINE.NO + 2
1630 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1640 RETURN
1650 '
1660 REM Head 3 Processor
1670 IF LINE.NO = 7 THEN 1690 'skip spacing if at top of page
1680 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1690 LPRINT BOLD.ON$;  'Set emphasized print
1700 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1710 LPRINT BOLD.OFF$; 'Return to normal
1720 LPRINT
1730 LINE.NO = LINE.NO + 2
1740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1750 RETURN
1760 '
1770 REM Single Space Processor
1780 IF LINE.NO = 7 THEN 1800
1790 IF LINE.NO > 44 THEN GOSUB 1850 ELSE LPRINT : LINE.NO = LINE.NO + 1
1800 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1810 RETURN
1820 REM End of File Processor
1830 GOSUB 1850 'Bottom of Page
1840 GOTO 5190
1850 REM Page Eject Processor
1860 FOR I = LINE.NO TO 44
1870  LPRINT
1880  LINE.NO = LINE.NO + 1
1890 NEXT I
1900 GOSUB 1030  'Bottom of Page Processing
1910 RETURN
1920 REM Vertical Tab Processor
1930 IF LINE.NO = 7 THEN 2020
1940 IF LINE.NO > 44 THEN GOSUB 1030  'End of page
1950 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1960 FOR I = 1 TO QTY
1970  LPRINT
1980  LINE.NO = LINE.NO + 1
1990  IF LINE.NO > 44 THEN I = QTY
2000 NEXT I
2010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2020 RETURN
2030 REM Pack Processor
2040 IF LINE.NO > 44 THEN GOSUB 1030
2050 IF TAB.POS = 8 THEN ADJUST = 4
2060 IF TAB.POS = 13 THEN ADJUST = 7
2070 TAB.POS = TAB.POS + ADJUST + INDENT
2080 WIDTH "lpt1:", 132 'set condensed width
2090 LPRINT COMPR.ON$;  'Packed printing
2100 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2110 LPRINT COMPR.OFF$; 'Return to normal
2120 WIDTH "lpt1:", 80  'return to normal
2130 LINE.NO = LINE.NO + 1
2140 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2150 RETURN
2160 REM Indent Processor
2170 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2180 RETURN
3000 REM APPENDIX
3010 DATA ".h1 A.  MESSAGES"
3020 DATA ".pn 67"
3030 DATA ".h2 START-UP MESSAGES"
3040 DATA "The initial System Message, when the"
3050 DATA "system is turned on, is:"
3060 DATA ".sp"
3070 DATA ".pk Current date is Tue 1-01-1980"
3080 DATA ".pk Enter new date:"
3090 DATA ".sp"
3100 DATA "The user is expected to respond with an"
3110 DATA "appropriate date."
3120 DATA ".sp"
3130 DATA "The next system message is:"
3140 DATA ".sp"
3150 DATA ".pk Current time is 0:00:52.17"
3160 DATA ".pk Enter new time:"
3170 DATA ".sp"
3180 DATA "The user is expected to respond with"
3190 DATA "the correct time."
3200 DATA ".sp"
3210 DATA "The System then responds:"
3220 DATA ".sp"
3230 DATA ".pk The IBM Personal Computer DOS"
3240 DATA ".pk Version 2.10 (C) Copyright IBM Corp 1981, 1982, 1983"
3250 DATA ".sp"
3260 DATA "When starting BASIC, the message"
3270 DATA "in response to:"
3280 DATA ".sp"
3290 DATA ".pk basic/s:256"
3300 DATA ".sp"
3310 DATA "is similar to:"
3320 DATA ".sp"
3330 DATA ".pk IBM Personal Computer Basic"
3340 DATA ".pk Version D2.00 Copyright IBM Corp. 1981, 1982, 1983"
3350 DATA ".pk 61118 Bytes Free"
3360 DATA ".h1 B.  HINTS
3370 DATA ".h2 DATES"
3380 DATA "The program expects dates in the form"
3390 DATA "dd Mmm yyyy, such as: 19 Jun 1928."
3400 DATA "Partial dates, or approximate dates,"
3410 DATA "may be entered.  They will be moved as"
3420 DATA "far to the right as possible.  How-"
3430 DATA "ever, there is only space for 11 char-"
3440 DATA "acters in any date."
3450 DATA ".h2 Replacing Information"
3460 DATA "When personalizing, or when using the"
3470 DATA "entry/update function, information"
3480 DATA "(with the exception of the note-"
3490 DATA "number) can be replaced by entering"
3500 DATA "the new information.  The new infor-"
3510 DATA "mation simply replaces the old."
3520 DATA ".h2 Removing a Note."
3530 DATA "In the event that a user wishes to re-"
3540 DATA "move a Note, he may do so by changing"
3550 DATA "the note-number to the same number"
3560 DATA "preceded by a minus-sign.  This will"
3570 DATA "cause the note to be cleared, and it"
3580 DATA "may then be 'saved'."
3590 DATA ".h1 C.  MODIFICATIONS"
3600 DATA ".h2 Making Changes"
3610 DATA "In all of the following examples, the"
3620 DATA "~notesand.bas~ program has to be load-"
3630 DATA "ed, edited, and then saved."
3640 DATA ".sp"
3650 DATA "Since ~notesand.bas~ is a BASIC"
3660 DATA "program, you will need to use the"
3670 DATA "BASIC Editor (see the BASIC Manual"
3680 DATA "for details) to make the changes."
3690 DATA ".h2 Color Considerations"
3700 DATA "Line 260 in the ~notesand.bas~ program"
3710 DATA "establishes color, through the use of"
3720 DATA "a SCREEN Statement, which is:"
3730 DATA ".sp"
3740 DATA "  SCREEN S1,S2,S3,S4
3750 DATA ".sp"
3760 DATA "For many display screens, color can be"
3770 DATA "disabled by editing the definition of"
3780 DATA "S2 in Line 220 of the ~notesand.bas~"
3790 DATA "program.  It can be changed from"
3800 DATA "S2 = 1, to S2 = 0."
3810 DATA ".pa"
3820 DATA ".h2 Color Definitions"
3830 DATA "Lines 310 through 380 of the program"
3840 DATA "establish color for a number of"
3850 DATA "variables, which are then used by"
3860 DATA "the ~notesand.bas~ program."
3870 DATA ".sp"
3880 DATA "Color can be disabled, or it can be"
3890 DATA "changed, by changing the numbers for"
3900 DATA "the variables.  For example, color"
3910 DATA "can be disabled by changing each of"
3920 DATA "the numbers which is not a zero (0)"
3930 DATA "to a seven (7)."
3940 DATA ".h2 Changing the Number of Persons"
3950 DATA "The program, as distributed, provides"
3960 DATA "for 500 persons in the Genealogy ON"
3970 DATA "DISPLAY Persons File."
3980 DATA ".sp"
3990 DATA "If your Persons File has some other"
4000 DATA "number, it will be necessary to change"
4010 DATA "the 500 in the ~notesand.bas~ program"
4020 DATA "to the same number that is in your"
4030 DATA "Genealogy ON DISPLAY ~menu~ program."
4040 DATA ".sp"
4050 DATA "This can be done in the following way:"
4060 DATA ".sp"
4070 DATA "In the ~notesand.bas~ program:"
4080 DATA ".sp"
4090 DATA "Line-number:   610"
4100 DATA "Old-value:     MAX.PER = 500"
4110 DATA "New-value:     Same as Genealogy ON"
4120 DATA "               DISPLAY"
4130 DATA ".pa"
4140 DATA ".h2 Repositioning the Files"
4150 DATA "As released, all files are located on"
4160 DATA "drive a:.  In order to change this to"
4170 DATA "another drive, the letter which iden-"
4180 DATA "tifies the drive must be changed."
4190 DATA ".sp"
4200 DATA "In the ~notesand.bas~ program, these"
4210 DATA "drive-letters are located in line"
4220 DATA "numbers 410-460.  They are:"
4230 DATA ".sp"
4240 DATA "Name       Ltr.    Reference"
4250 DATA "---------------    ------------------"
4260 DATA "DD.VERI$ = ~a:~    'Verify /s:256 File"
4270 DATA "DD.NOTE$ = ~a:~    'The Note File"
4280 DATA "DD.PERS$ = ~a:~    'The Persons File"
4290 DATA "DD.SOUR$ = ~a:~    'The Sources File"
4300 DATA "DD.TYPE$ = ~a:~    'The Types File"
4310 DATA "DD.HIGH$ = ~a:~    'Highest Notes"
4320 DATA ".sp"
4330 DATA "The disk drive-letter for any of the"
4340 DATA "above files may be changed by chang-"
4350 DATA "ing each a: to the desired drive-"
4360 DATA "letter, such as b:"
4370 DATA ".sp"
4380 DATA "In the event you are using a hard-disk"
4390 DATA "with sub-directories, you will need to"
4400 DATA "to change each a: to its path, such as:"
4410 DATA ".sp"
4420 DATA "DD.NOTE$ = ~c:\notesand\~"
4430 DATA ".pa"
4440 DATA ".h2 Utilizing other Printers"
4450 DATA "As designed, an IBM Matrix Printer,"
4460 DATA "an IBM Proprinter, or some equivalent"
4470 DATA "printer is assumed."
4480 DATA ".sp"
4490 DATA "Control for Form-feeding (move the"
4500 DATA "paper to the top of the next page) is"
4510 DATA "provided in the ~notesand.bas~ program,"
4520 DATA "in line 510."
4530 DATA ".sp"
4540 DATA "The variable name, and its purpose,"
4550 DATA "is as follows:"
4560 DATA ".sp"
4570 DATA "Name:           Purpose"
4580 DATA "-------------   -----------------------"
4590 DATA "FORM.FEED$      To Top of the Next Page"
4600 DATA ".sp"
4610 DATA "For the above, change the definition to"
4620 DATA "that of your printer."
4630 DATA ".h1 D. TERMS & CONDITIONS"
4640 DATA ".h2 Terms"
4650 DATA "If you are using this program, you are"
4660 DATA "expected to become a Registered User,"
4670 DATA "by making a contribution to the author"
4680 DATA "of the program ($30.00 suggested for"
4690 DATA "Registered Users of Genealogy ON DIS-"
4700 DATA "PLAY, otherwise, $45.00 suggested)."
4710 DATA ".sp"
4720 DATA "     Melvin O. Duke"
4730 DATA "     P. O. Box 20836"
4740 DATA "     San Jose, CA  95160"
4750 DATA "     (408) 268-6637"
4760 DATA ".vt 3"
4770 DATA "Anyone may request a copy of Notes and"
4780 DATA "Sources ON DISPLAY, for trial, by send-"
4790 DATA "ing an unformatted, double-sided,"
4800 DATA "double-density, 5-1/4 inch diskette to"
4810 DATA "the author of the programs."
4820 DATA ".sp"
4830 DATA "A self-addressed, postage-paid return"
4840 DATA "diskette-mailer must accompany the"
4850 DATA "diskette (no exceptions, please)."
4860 DATA ".sp"
4870 DATA "A copy of the programs with documenta-"
4880 DATA "tion will be sent by return mail."
4890 DATA ".pa"
4900 DATA ".h2 Conditions"
4910 DATA "A limited license is granted to all users"
4920 DATA "of these programs, to make copies of"
4930 DATA "them, and distribute them to other users,"
4940 DATA "on the following conditions:"
4950 DATA ".sp"
4960 DATA "1.  The Notes and Sources ON DISPLAY pro-"
4970 DATA "    grams are not to be distributed to"
4980 DATA "    others in a modified form."
4990 DATA ".sp"
5000 DATA "2.  No fee (or other consideration) is"
5010 DATA "    is to be charged for copying or dis-"
5020 DATA "    tributing the Notes and Sources ON"
5030 DATA "    DISPLAY programs."
5040 DATA ".sp"
5050 DATA "3.  The notices displayed at program"
5060 DATA "    start-up are not to be bypassed,"
5070 DATA "    altered, or removed."
5080 DATA ".h2 Disclaimer"
5090 DATA "In no event will the Author be liable to"
5100 DATA "you for any damages, including any lost"
5110 DATA "profits, lost savings or other inciden-"
5120 DATA "tal or consequential damages arising out"
5130 DATA "of the use of or inability to use these"
5140 DATA "programs, even if the Author has been"
5150 DATA "advised of the possibility of such"
5160 DATA "damages, or for any claim by any other"
5170 DATA "party."
5180 DATA ".eof"
5190 END
```

## DIRECTOR.BAS

```bas
100 REM Program Directory for the Notes and Sources ON DISPLAY Program
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA Program Directory
150 DATA -1
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 REM Program begins here
240 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
250 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
260 GOSUB 900  'For trim line and heading space
270 FOR I = 1 TO 6 : LPRINT : NEXT I
280 LPRINT BOLD.ON$;    'Set Emphasized Print
290 LPRINT EXPAND.ON$;  'Set Expanded Print
300 LPRINT TAB(TAB.POS-5);TITLE$
310 LPRINT EXPAND.OFF$;  'Return to normal
320 LPRINT BOLD.OFF$;    'Return to normal
330 FOR I = 1 TO 3 : LPRINT : NEXT I
340 LPRINT BOLD.ON$; 'Set Emphasized mode
350 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
360 LPRINT BOLD.OFF$; 'Return to normal
370 LPRINT : LPRINT : LPRINT
380 LPRINT TAB(TAB.POS+11);"Version 1.1"
390 FOR I = 1 TO 11 : LPRINT : NEXT I
400 LPRINT TAB(TAB.POS+8); DOC.NAME$
410 LINE.NO = LINE.NO + 27
420 '
430 READ REPLY$
440 REM First, change tildes to quotes
450 FOR Q = 1 TO LEN(REPLY$)
460  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
470 NEXT Q
480 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1250: GOTO 430
490 IF LINE.NO > 44 THEN GOSUB 1010
500 REM Print the line if not a command
510 LPRINT TAB(TAB.POS);REPLY$
520 LINE.NO = LINE.NO + 1
530 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
540 GOTO 430
550 DATA ".pa"
560 REM   Data for the Copyright Page
570 DATA "Anyone may request a copy of Notes and"
580 DATA "Sources ON DISPLAY, for trial, by sending"
590 DATA "an unformatted, double-sided, double-"
600 DATA "density, 5-1/4 inch diskette to the"
610 DATA "author of the programs."
620 DATA ".sp"
630 DATA "An addressed, postage-paid return"
640 DATA "mailer must accompany the diskette (no"
650 DATA "exceptions, please).
660 DATA ".sp"
670 DATA "A copy of the programs with documenta-"
680 DATA "tion will be sent by return mail."
690 DATA ".vt 2"
700 DATA "Users are encouraged to copy and share"
710 DATA "the programs with others."
720 DATA ".vt 2"
730 DATA "If you are using this program, you are"
740 DATA "expected to become a Registered User,"
750 DATA "by making a contribution to the author"
760 DATA "of the program ($30.00 suggested for"
770 DATA "Registered Users of Genealogy ON DIS-"
780 DATA "PLAY, otherwise, $45.00 suggested)."
790 DATA ".sp"
800 DATA "Melvin O. Duke"
810 DATA "P. O. Box 20836"
820 DATA "San Jose, CA  95160"
830 DATA "(408) 268-6637"
840 DATA ".vt 3"
850 DATA "Copyright (c) 1986, by:"
860 DATA "Melvin O. Duke."
870 DATA ".sp"
880 DATA "All rights reserved."
890 '
900 REM Top of each page routine
910 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
920 LPRINT
930 LPRINT TAB(30); "(Trim-line)"
940 LPRINT "+"+STRING$(54,45)+"+" 'Dashes
950 FOR I = 1 TO 6
960  LPRINT
970 NEXT I
980 LINE.NO = LINE.NO + 6
990 RETURN
1000 '
1010 REM Bottom of each page Routine
1020 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1140
1030 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1040 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1050 IF PAGE.NO MOD 2 = 1 THEN 1090
1060 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1070 LPRINT TAB(TAB.POS+23);"Program Directory"
1080 GOTO 1140
1090 LPRINT TAB(TAB.POS); "Program Directory";
1100 IF PAGE.NO < 10 THEN DELTA = 34
1110 IF PAGE.NO >  9 THEN DELTA = 33
1120 IF PAGE.NO > 99 THEN DELTA = 32
1130 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1140 LPRINT : LPRINT : LPRINT
1150 LPRINT "+"+STRING$(54,45)+"+" 'dashes after 51
1160 LPRINT TAB(30); "(Trim-line)"
1170 LPRINT FORM.FEED$;
1180 PAGE.NO = PAGE.NO + 1
1190 LINE.NO = 1
1200 IF REPLY$ = ".eof" THEN 1220  'Bypass after last page
1210 GOSUB 900  'For top of next page
1220 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1230 RETURN
1240 '
1250 REM Command Processor
1260 IF LEFT$(REPLY$,3) = ".h1" THEN 1360
1270 IF LEFT$(REPLY$,3) = ".h2" THEN 1520
1280 IF LEFT$(REPLY$,3) = ".h3" THEN 1630
1290 IF LEFT$(REPLY$,3) = ".sp" THEN 1740
1300 IF LEFT$(REPLY$,4) = ".eof" THEN 1790
1310 IF LEFT$(REPLY$,3) = ".pa" THEN 1820
1320 IF LEFT$(REPLY$,3) = ".vt" THEN 1890
1330 IF LEFT$(REPLY$,3) = ".pk" THEN 1990
1340 IF LEFT$(REPLY$,3) = ".in" THEN 2120
1350 STOP
1360 REM Head 1 Processor
1370 FOR I = LINE.NO TO 44
1380  LPRINT
1390 NEXT I
1400 GOSUB 1010  'Bottom of page Routine
1410 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1820  'For h1 on Odd pages
1420 LPRINT BOLD.ON$;     'Set Emphasized Printing
1430 LPRINT EXPAND.ON$;   'Set expanded print
1440 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1450 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1460 LPRINT EXPAND.OFF$;  'Return to normal
1470 LPRINT BOLD.OFF$;    'Return to non-bold
1480 LINE.NO = LINE.NO+1
1490 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1500 RETURN
1510 '
1520 REM Head 2 Processor
1530 IF LINE.NO = 7 THEN 1550 'skip spacing if at top of page
1540 IF LINE.NO > 43 THEN GOSUB 1820 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1550 LPRINT BOLD.ON$;    'Set emphasized print
1560 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1570 LPRINT BOLD.OFF$;   'Return to normal
1580 LPRINT
1590 LINE.NO = LINE.NO + 2
1600 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1610 RETURN
1620 '
1630 REM Head 3 Processor
1640 IF LINE.NO = 7 THEN 1660 'skip spacing if at top of page
1650 IF LINE.NO > 43 THEN GOSUB 1820 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1660 LPRINT BOLD.ON$;    'Set emphasized print
1670 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1680 LPRINT BOLD.OFF$;   'Return to normal
1690 LPRINT
1700 LINE.NO = LINE.NO + 2
1710 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1720 RETURN
1730 '
1740 REM Single Space Processor
1750 IF LINE.NO = 7 THEN 1770
1760 IF LINE.NO > 44 THEN GOSUB 1820 ELSE LPRINT : LINE.NO = LINE.NO + 1
1770 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1780 RETURN
1790 REM End of File Processor
1800 GOSUB 1820 'Bottom of Page
1810 GOTO 5860 'end
1820 REM Page Eject Processor
1830 FOR I = LINE.NO TO 44
1840  LPRINT
1850  LINE.NO = LINE.NO + 1
1860 NEXT I
1870 GOSUB 1010  'Bottom of Page Processing
1880 RETURN
1890 REM Vertical Tab Processor
1900 IF LINE.NO = 7 THEN 1980
1910 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1920 FOR I = 1 TO QTY
1930  LPRINT
1940  LINE.NO = LINE.NO + 1
1950  IF LINE.NO > 44 THEN I = QTY
1960 NEXT I
1970 IF LINE.NO > 44 THEN GOSUB 1010  'End of page
1980 RETURN
1990 REM Pack Processor
2000 IF LINE.NO > 44 THEN GOSUB 1010
2010 IF TAB.POS = 8 THEN ADJUST = 4
2020 IF TAB.POS = 13 THEN ADJUST = 7
2030 TAB.POS = TAB.POS + ADJUST + INDENT
2040 WIDTH "lpt1:", 132  'set condensed width
2050 LPRINT COMPR.ON$;   'Packed printing
2060 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2070 LPRINT COMPR.OFF$;  'Return to normal
2080 WIDTH "lpt1:", 80   'return to normal
2090 LINE.NO = LINE.NO + 1
2100 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2110 RETURN
2120 REM Indent Processor
2130 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2140 RETURN
3000 REM DIRECTOR
3010 DATA ".h1 INTRODUCTION"
3020 DATA ".h2 OVERVIEW"
3030 DATA "This Program Directory contains the"
3040 DATA "information about the contents of the"
3050 DATA "Distribution Diskette for the Notes and"
3060 DATA "Sources ON DISPLAY programs and docu-"
3070 DATA "tation."
3080 DATA ".h2 CONTENT"
3090 DATA "The Distribution Diskette contains the"
3100 DATA "following Documentation Programs:"
3110 DATA ".sp"
3120 DATA "  Program    Program      Program"
3130 DATA "  Name       Language        Size"
3140 DATA "  --------   --------   ---------"
3150 DATA "  runfirst   basic          1,328"
3160 DATA "  printers   basic          1,352"
3170 DATA "  director   basic         15,719"
3180 DATA "  tableofc   basic         11,607"
3190 DATA "  introduc   basic         13,749"
3200 DATA "  general    basic         20,767"
3210 DATA "  usingthe   basic         31,800"
3220 DATA "  referenc   basic         21,450"
3230 DATA "  appendix   basic         13,982"
3240 DATA ".pa"
3250 DATA "The Distribution Diskette contains the"
3260 DATA "following Notes and Sources Program:"
3270 DATA ".sp"
3280 DATA "  Program    Program      Program"
3290 DATA "  Name       Language        Size"
3300 DATA "  --------   --------   ---------"
3310 DATA "  notesand   basic         35,979"
3320 DATA ".vt 2"
3330 DATA "The Distribution Diskette contains the"
3340 DATA "following Data Files:"
3350 DATA ".sp"
3360 DATA "  Data File             Data File"
3370 DATA "  Name                       Size"
3380 DATA "  --------              ---------"
3390 DATA "  verifile                    256"
3400 DATA "  sourfile                    795"
3410 DATA "  typefile                    891"
3420 DATA "  high                         11"
3430 DATA ".vt 2"
3440 DATA "The Distribution Diskette contains the"
3450 DATA "following Batch File:"
3460 DATA ".sp"
3470 DATA "  Batch File           Batch File"
3480 DATA "  Name                       Size"
3490 DATA "  --------              ---------"
3500 DATA "  cleandoc                    199"
3510 DATA ".pa"
3520 DATA "The Distribution Diskette contains the"
3530 DATA "following Overview File:"
3540 DATA ".sp"
3550 DATA "  File                       File"
3560 DATA "  Name                       Size"
3570 DATA "  ------------              -----"
3580 DATA "  overview.bas              8,388"
3590 DATA ".vt 2"
3600 DATA ".h2 REQUIREMENTS"
3610 DATA ".h3 Hardware Requirements"
3620 DATA "IBM PCjr, PC, PC/XT or PC/AT with:"
3630 DATA ".sp"
3640 DATA "   One double-sided Diskette Drive."
3650 DATA ".sp"
3660 DATA "   Either the IBM Matrix Printer, the"
3670 DATA "   IBM Proprinter (or equivalents)."
3680 DATA ".sp"
3690 DATA "   At least 96 K of Memory (128 K is"
3700 DATA "   recommended)."
3710 DATA ".sp"
3720 DATA "   Either the IBM Color Display,"
3730 DATA "   the IBM Monochrome Display (or"
3740 DATA "   equivalents)."
3750 DATA ".pa"
3760 DATA ".h2 Software Requirements."
3770 DATA "IBM PC-DOS.
3780 DATA "  Version 2.1 or later (or Version"
3790 DATA "    2.0 on the other members of the"
3800 DATA "    IBM PC Family of Computers)."
3810 DATA ".sp"
3820 DATA "BASIC"
3830 DATA "  (on Cartridge or Diskette)."
3840 DATA ".h1 GENERAL INFORMATION"
3850 DATA ".h2 DOCUMENTATION PROGRAMS"
3860 DATA "Nine documentation programs are included"
3870 DATA "on the Distribution Diskette.  These are"
3880 DATA "BASIC programs, which can be 'run'."
3890 DATA ".sp"
3900 DATA "The documentation programs contain their"
3910 DATA "own formatting capability, as well as"
3920 DATA "the content of the documents which they"
3930 DATA "will produce."
3940 DATA ".sp"
3950 DATA "By 'running' each of the documentation"
3960 DATA "programs, the user is able to obtain one"
3970 DATA "or more copies of each chapter of the"
3980 DATA "documentation as he desires."
3990 DATA ".vt 2"
4000 DATA "These documentation programs are:"
4010 DATA ".sp
4020 DATA "  1.  runfirst  (causes a display of the"
4030 DATA "      cover letter, showing how to get"
4040 DATA "      started.)"
4050 DATA ".sp"
4060 DATA "  2.  printers  (shows the changes to"
4070 DATA "      the documentation programs for"
4080 DATA "      printing on other printers.)"
4090 DATA ".pa"
4100 DATA "  3.  director  (documentation of the"
4110 DATA "      content of the Distribution"
4120 DATA "      Diskette)."
4130 DATA ".sp"
4140 DATA "      Produces this document."
4150 DATA ".vt 2"
4160 DATA "  4 through 9.  Documentation for the"
4170 DATA "      Notes and Sources ON DISPLAY Program."
4180 DATA ".sp"
4190 DATA "      Produces a 74 Page User's Manual"
4200 DATA "      for use with the Notes and Sources"
4210 DATA "      ON DISPLAY Program."
4220 DATA ".sp"
4230 DATA "  4.  tableofc  (table of contents for"
4240 DATA "      the User's Manual)."
4250 DATA ".sp"
4260 DATA "  5.  introduc  (introduction for the"
4270 DATA "      User's Manual)."
4280 DATA ".sp"
4290 DATA "  6.  general  (general information for"
4300 DATA "      the User's Manual)."
4310 DATA ".sp"
4320 DATA "  7.  usingthe  (using the programs, for"
4330 DATA "      the User's Manual)."
4340 DATA ".sp"
4350 DATA "  8.  referenc  (reference material for"
4360 DATA "      the User's Manual)."
4370 DATA ".sp"
4380 DATA "  9.  appendix  (appendixes for the"
4390 DATA "      User's Manual)."
4400 DATA ".pa"
4410 DATA ".h2 NOTES AND SOURCES PROGRAM"
4420 DATA "One Notes and Sources program is"
4430 DATA "included on the Distribution"
4440 DATA "Diskette.  It is:"
4450 DATA ".sp"
4460 DATA "  1.  notesand"
4470 DATA ".sp"
4480 DATA "      Program for Making Entries of"
4490 DATA "      Notes; for Personalizing both the"
4500 DATA "      Sources used and the document"
4510 DATA "      Types; and for Inquiring into"
4520 DATA "      those Notes, for either Display-"
4530 DATA "      ing on the Screen, or Printing"
4540 DATA "      on the Printer."
4550 DATA ".h2 DATA FILES"
4560 DATA "Four data files are included on the"
4570 DATA "Distribution Diskette.  They are:"
4580 DATA ".sp"
4590 DATA "  1.  verifile"
4600 DATA ".sp"
4610 DATA "Its purpose is to verify that BASIC was"
4620 DATA "brought up with the /s:256 parameter."
4630 DATA ".vt 2"
4640 DATA "  2.  sourfile"
4650 DATA ".sp"
4660 DATA "This file contains the current des-"
4670 DATA "cription of the Sources involved"
4680 DATA "in the issuance of documents, etc."
4690 DATA "The content of this file may be"
4700 DATA "personalized by a user."
4710 DATA ".pa"
4720 DATA "  3.  typefile"
4730 DATA ".sp"
4740 DATA "This file contains the current des-"
4750 DATA "cription of the types of documents,"
4760 DATA "which contain information about the"
4770 DATA "selected persons.  This file may be"
4780 DATA "personalized by a user."
4790 DATA ".vt 2"
4800 DATA "  4.  high"
4810 DATA ".sp"
4820 DATA "This file contains definitions of the"
4830 DATA "highest note-number formatted, and the"
4840 DATA "highest note-number used."
4850 DATA ".sp"
4860 DATA "It is changed whenever additional"
4870 DATA "note-records are formatted, and when"
4880 DATA "a new note-record is saved which has"
4890 DATA "a note-number higher than one pre-"
4900 DATA "viously saved."
4910 DATA ".h2 BATCH FILE"
4920 DATA "One batch file is included on the"
4930 DATA "Distribution Diskette.  It is:"
4940 DATA ".sp"
4950 DATA "  1.  cleandoc.bat"
4960 DATA ".sp"
4970 DATA "Its purpose is to erase the documenta-"
4980 DATA "tion from a new Notes Diskette, after"
4990 DATA "that diskette has been copied from the"
5000 DATA "Distribution Diskette."
5010 DATA ".pa"
5020 DATA ".h2 OVERVIEW PROGRAM"
5030 DATA "One overview program is included on"
5040 DATA "the Distribution Diskette.  It is:"
5050 DATA ".sp"
5060 DATA "  1.  overview.bas"
5070 DATA ".sp"
5080 DATA "This program is provided, so that you"
5090 DATA "may show your friends just what Notes"
5100 DATA "and Sources ON DISPLAY is all about."
5110 DATA "The overview program may also be used"
5120 DATA "for presentations, such as Association"
5130 DATA "or Club Meetings."
5140 DATA ".sp"
5150 DATA "It is suitable for use on either a"
5160 DATA "color or monochrome monitor."
5170 DATA ".sp"
5180 DATA "In order to use this program, type:"
5190 DATA ".sp"
5200 DATA "  run ~overview~"
5210 DATA ".sp"
5220 DATA "and press the 'enter' key."
5230 DATA ".pa"
5240 DATA "(This page is intentionally blank)"
5250 DATA ".h1 USING THE PROGRAMS"
5260 DATA ".h2 FIRST TIME USAGE"
5270 DATA "The following steps are necessary when"
5280 DATA "a new user receives the Distribution"
5290 DATA "Diskette.  (Details of the steps are"
5300 DATA "shown in the User's Manual.)"
5310 DATA ".sp"
5320 DATA "1.  Copy the Distribution Diskette,"
5330 DATA "to a new diskette, for your Notes."
5340 DATA ".sp"
5350 DATA "2.  Erase the Documentation, through"
5360 DATA "the use of ~cleandoc.bat~."
5370 DATA ".sp"
5380 DATA "3.  Erase ~cleandoc.bat~, through the"
5390 DATA "use of the DOS ~erase~ command."
5400 DATA ".sp"
5410 DATA "4.  Obtain access to the Genealogy ON"
5420 DATA "DISPLAY Persons File.  If you have a"
5430 DATA "one-drive system, you will have to copy"
5440 DATA "the Persons File to your new diskette."
5450 DATA "Otherwise, you will have to identify"
5460 DATA "the location of the Persons File in"
5470 DATA "~notesand.bas~, through the use of the"
5480 DATA "BASIC Editor."
5490 DATA ".pa"
5500 DATA ".h2 GETTING STARTED"
5510 DATA "The user should perform the following"
5520 DATA "steps in starting the Notes and Sources"
5530 DATA "ON DISPLAY program.  (Note:  The steps"
5540 DATA "essentially provide for making BASIC"
5550 DATA "available, and starting the Program.)"
5560 DATA ".sp"
5570 DATA "1.  Insert the PC DOS diskette into"
5580 DATA "    Drive 'a:'."
5590 DATA ".sp"
5600 DATA "2.  If using the PCjr, insert the"
5610 DATA "    BASIC Cartridge into either slot."
5620 DATA ".sp"
5630 DATA "3.  Turn the Printer On."
5640 DATA ".sp"
5650 DATA "4.  Turn the System On."
5660 DATA ".sp"
5670 DATA "5.  Type today's date if the system"
5680 DATA "    asks the user to Enter today's date."
5690 DATA ".sp"
5700 DATA "6.  Type the correct time if the system"
5710 DATA "    asks the user to Enter the time."
5720 DATA ".sp"
5730 DATA "7.  Type: basic/s:256"
5740 DATA "          and press the 'enter' key."
5750 DATA ".pa"
5760 DATA "8.  Replace the DOS Diskette with the"
5770 DATA "    Notes and Sources ON DISPLAY disk-"
5780 DATA "    ette in Drive 'a:'."
5790 DATA ".sp"
5800 DATA "9.  Type:  run ~notesand~"
5810 DATA "            and press the 'enter' key."
5820 DATA ".sp"
5830 DATA "10.  Follow any instructions which appear"
5840 DATA "     at the bottom of each screen."
5850 DATA ".eof"
5860 END
```

## GENERAL.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 DASHES$ = "+"+STRING$(54,45)+"+"
240 TRIM.LINE$ = "(Trim-line)"
250 REM Program begins here
260 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
270 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
280 GOSUB 920  'For trim line and heading space
290 FOR I = 1 TO 6 : LPRINT : NEXT I
300 LPRINT BOLD.ON$;     'Set Emphasized mode
310 LPRINT EXPAND.ON$;   'Set Expanded Print
320 LPRINT TAB(TAB.POS-5);TITLE$
330 LPRINT EXPAND.OFF$;  'Return to normal
340 LPRINT BOLD.OFF$;    'Return to normal
350 FOR I = 1 TO 3 : LPRINT : NEXT I
360 LPRINT BOLD.ON$;     'Set Emphasized mode
370 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
380 LPRINT BOLD.OFF$;    'Return to normal
390 LPRINT : LPRINT : LPRINT
400 LPRINT TAB(TAB.POS+11);"Version 1.1"
410 FOR I = 1 TO 11 : LPRINT : NEXT I
420 LPRINT TAB(TAB.POS+10); DOC.NAME$
430 LINE.NO = LINE.NO + 27
440 '
450 READ REPLY$
460 REM First, change tildes to quotes
470 FOR Q = 1 TO LEN(REPLY$)
480  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
490 NEXT Q
500 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1270: GOTO 450
510 IF LINE.NO > 44 THEN GOSUB 1030
520 REM Print the line if not a command
530 LPRINT TAB(TAB.POS);REPLY$
540 LINE.NO = LINE.NO + 1
550 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
560 GOTO 450
570 DATA ".pa"
580 REM   Data for the Copyright Page
590 DATA "Anyone may request a copy of Notes and"
600 DATA "Sources ON DISPLAY, for trial, by sending"
610 DATA "an unformatted, double-sided, double-"
620 DATA "density, 5-1/4 inch diskette to the"
630 DATA "author of the programs."
640 DATA ".sp"
650 DATA "An addressed, postage-paid return"
660 DATA "mailer must accompany the diskette (no"
670 DATA "exceptions, please).
680 DATA ".sp"
690 DATA "A copy of the programs with documenta-"
700 DATA "tion will be sent by return mail."
710 DATA ".vt 2"
720 DATA "Users are encouraged to copy and share"
730 DATA "the programs with others."
740 DATA ".vt 2"
750 DATA "If you are using this program, you are"
760 DATA "expected to become a Registered User,"
770 DATA "by making a contribution to the author"
780 DATA "of the program ($30.00 suggested for"
790 DATA "Registered Users of Genealogy ON DIS-"
800 DATA "PLAY, otherwise, $45.00 suggested)."
810 DATA ".sp"
820 DATA "Melvin O. Duke"
830 DATA "P. O. Box 20836"
840 DATA "San Jose, CA  95160"
850 DATA "(408) 268-6637"
860 DATA ".vt 3"
870 DATA "Copyright (c) 1986, by:"
880 DATA "Melvin O. Duke."
890 DATA ".sp"
900 DATA "All rights reserved."
910 '
920 REM Top of each page routine
930 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
940 LPRINT
950 LPRINT TAB(30); TRIM.LINE$
960 LPRINT DASHES$ 'Dashes
970 FOR I = 1 TO 6
980  LPRINT
990 NEXT I
1000 LINE.NO = LINE.NO + 6
1010 RETURN
1020 '
1030 REM Bottom of each page Routine
1040 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1160
1050 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1060 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1070 IF PAGE.NO MOD 2 = 1 THEN 1110
1080 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1090 LPRINT TAB(TAB.POS+27);"User's Manual"
1100 GOTO 1160
1110 LPRINT TAB(TAB.POS); "User's Manual";
1120 IF PAGE.NO < 10 THEN DELTA = 34
1130 IF PAGE.NO >  9 THEN DELTA = 33
1140 IF PAGE.NO > 99 THEN DELTA = 32
1150 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1160 LPRINT : LPRINT : LPRINT
1170 LPRINT DASHES$ 'dashes after 51
1180 LPRINT TAB(30); TRIM.LINE$
1190 LPRINT FORM.FEED$;
1200 PAGE.NO = PAGE.NO + 1
1210 LINE.NO = 1
1220 IF REPLY$ = ".eof" THEN 1240  'Bypass after last page
1230 GOSUB 920  'For top of next page
1240 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1250 RETURN
1260 '
1270 REM Command Processor
1280 IF LEFT$(REPLY$,3) = ".h1" THEN 1390
1290 IF LEFT$(REPLY$,3) = ".h2" THEN 1550
1300 IF LEFT$(REPLY$,3) = ".h3" THEN 1660
1310 IF LEFT$(REPLY$,3) = ".sp" THEN 1770
1320 IF LEFT$(REPLY$,4) = ".eof" THEN 1820
1330 IF LEFT$(REPLY$,3) = ".pa" THEN 1850
1340 IF LEFT$(REPLY$,3) = ".pn" THEN PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3)) : RETURN
1350 IF LEFT$(REPLY$,3) = ".vt" THEN 1920
1360 IF LEFT$(REPLY$,3) = ".pk" THEN 2030
1370 IF LEFT$(REPLY$,3) = ".in" THEN 2160
1380 STOP
1390 REM Head 1 Processor
1400 FOR I = LINE.NO TO 44
1410  LPRINT
1420 NEXT I
1430 GOSUB 1030  'Bottom of page Routine
1440 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1850  'For h1 on Odd pages
1450 LPRINT BOLD.ON$;     'Set emphasized print
1460 LPRINT EXPAND.ON$;   'Set expanded print
1470 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1480 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1490 LPRINT EXPAND.OFF$;  'Return to normal
1500 LPRINT BOLD.OFF$;    'Return to non-bold
1510 LINE.NO = LINE.NO+1
1520 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1530 RETURN
1540 '
1550 REM Head 2 Processor
1560 IF LINE.NO = 7 THEN 1580 'skip spacing if at top of page
1570 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1580 LPRINT BOLD.ON$;  'Set emphasized print
1590 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1600 LPRINT BOLD.OFF$; 'Return to normal
1610 LPRINT
1620 LINE.NO = LINE.NO + 2
1630 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1640 RETURN
1650 '
1660 REM Head 3 Processor
1670 IF LINE.NO = 7 THEN 1690 'skip spacing if at top of page
1680 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1690 LPRINT BOLD.ON$;  'Set emphasized print
1700 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1710 LPRINT BOLD.OFF$; 'Return to normal
1720 LPRINT
1730 LINE.NO = LINE.NO + 2
1740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1750 RETURN
1760 '
1770 REM Single Space Processor
1780 IF LINE.NO = 7 THEN 1800
1790 IF LINE.NO > 44 THEN GOSUB 1850 ELSE LPRINT : LINE.NO = LINE.NO + 1
1800 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1810 RETURN
1820 REM End of File Processor
1830 GOSUB 1850 'Bottom of Page
1840 GOTO 6930
1850 REM Page Eject Processor
1860 FOR I = LINE.NO TO 44
1870  LPRINT
1880  LINE.NO = LINE.NO + 1
1890 NEXT I
1900 GOSUB 1030  'Bottom of Page Processing
1910 RETURN
1920 REM Vertical Tab Processor
1930 IF LINE.NO = 7 THEN 2020
1940 IF LINE.NO > 44 THEN GOSUB 1030  'End of page
1950 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1960 FOR I = 1 TO QTY
1970  LPRINT
1980  LINE.NO = LINE.NO + 1
1990  IF LINE.NO > 44 THEN I = QTY
2000 NEXT I
2010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2020 RETURN
2030 REM Pack Processor
2040 IF LINE.NO > 44 THEN GOSUB 1030
2050 IF TAB.POS = 8 THEN ADJUST = 4
2060 IF TAB.POS = 13 THEN ADJUST = 7
2070 TAB.POS = TAB.POS + ADJUST + INDENT
2080 WIDTH "lpt1:", 132 'set condensed width
2090 LPRINT COMPR.ON$;  'Packed printing
2100 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2110 LPRINT COMPR.OFF$; 'Return to normal
2120 WIDTH "lpt1:", 80  'return to normal
2130 LINE.NO = LINE.NO + 1
2140 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2150 RETURN
2160 REM Indent Processor
2170 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2180 RETURN
3000 DATA ".h1 GENERAL INFORMATION"
3010 DATA ".pn 9"
3020 DATA ".h2 DATA ACCESS REQUIREMENT"
3030 DATA "All of the data files used by Notes and"
3040 DATA "Sources ON DISPLAY must be available to"
3050 DATA "the program when it is running.  This"
3060 DATA "includes the Persons File from Genealogy"
3070 DATA "ON DISPLAY.  In addition, no file can be"
3080 DATA "split across different drives."
3090 DATA ".h2 DESCRIPTION OF FUNCTIONS"
3100 DATA ".h3 Formatting the Note File."
3110 DATA "Two functions within the program are"
3120 DATA "provided to permit the user to format"
3130 DATA "the Note File.  The first function de-"
3140 DATA "letes any existing Note File, and for-"
3150 DATA "mats 100 new records, with numbers"
3160 DATA "where numbers should be, and letters"
3170 DATA "where letters should be."
3180 DATA ".sp"
3190 DATA "The second function within the program"
3200 DATA "extends the Note File by 100 (and anoth-"
3210 DATA "er 100, and another 100, etc.) records,"
3220 DATA "as the user needs them."
3230 DATA ".pa"
3240 DATA ".h3 Personalization of Files."
3250 DATA "Two functions within the program provide"
3260 DATA "for personalization of the user's files."
3270 DATA "The first provides for personalization"
3280 DATA "of the Sources which he is using, and"
3290 DATA "the second provides for personalization"
3300 DATA "of the Types of notes he is keeping."
3310 DATA ".sp"
3320 DATA "Up to 252 Sources, and 252 Types of data"
3330 DATA "can be described by a user.  (The 252"
3340 DATA "represents 21 Screen-lists of 12 values"
3350 DATA "each.)  In addition, the program limits"
3360 DATA "the size of each Source or Type thus"
3370 DATA "defined to 32 characters each (to fit"
3380 DATA "nicely on the screen)."
3390 DATA ".sp"
3400 DATA "If these two files are not already full,"
3410 DATA "the user may extend his descriptions (up"
3420 DATA "to the 252 limit) at any time.  Thus, if"
3430 DATA "the user decides to define additional"
3440 DATA "Sources or Types, he may do so."
3450 DATA ".h2 Data Entry and Update"
3460 DATA "One function within the program provides"
3470 DATA "the ability to enter or update his notes."
3480 DATA "When he does, he enters that information"
3490 DATA "that is unique (e.g. Dates, and the Note"
3500 DATA "itself), and chooses the other informa-"
3510 DATA "tion for his Note-record from the list"
3520 DATA "of Persons from his Persons File, and"
3530 DATA "from his personalized lists of Sources"
3540 DATA "and Types."
3550 DATA ".pa"
3560 DATA ".h2 Inquiry for Display or Printing"
3570 DATA "One function within the program provides"
3580 DATA "the ability to make inquiries into the"
3590 DATA "user's Note File.  Once again, using the"
3600 DATA "same lists that were used when entering"
3610 DATA "data, the user is able to choose either"
3620 DATA "one (or all) Person(s), one (or all)"
3630 DATA "Source(s), and one (or all) Type(s)."
3640 DATA ".sp"
3650 DATA "Having made the selection, the user may"
3660 DATA "then ask that the results of the inquiry"
3670 DATA "be displayed on the screen, or printed"
3680 DATA "on the printer."
3690 DATA ".pa"
3700 DATA ".h2 DEFINITION OF TERMS"
3710 DATA ".h3 Sources"
3720 DATA "Sources are those places where records"
3730 DATA "may be found, which can verify informa-"
3740 DATA "tion.  This includes, but is not limit-"
3750 DATA "ed to, Governmental Agencies, Churches,"
3760 DATA "Cemeteries, Educational Institutions,"
3770 DATA "Books, Newspapers, etc., etc."
3780 DATA ".sp"
3790 DATA "This also includes Personal Knowledge,"
3800 DATA "Family Traditions, etc."
3810 DATA ".h3 Types"
3820 DATA "Types of information include Birth"
3830 DATA "Records, Death Records, Burial Records,"
3840 DATA "Census Records, Deeds, Wills, Probates,"
3850 DATA "etc., etc."
3860 DATA ".sp"
3870 DATA "Any record (usually written), which"
3880 DATA "shows information about one or more"
3890 DATA "persons, can be thought of as a Type"
3900 DATA "of information."
3910 DATA ".pa"
3920 DATA ".h3 Notes"
3930 DATA "Notes contain information that you want"
3940 DATA "to keep about a Person.  They can"
3950 DATA "identify where the information was"
3960 DATA "obtained, such as on a specific line"
3970 DATA "on a specific page of an identified"
3980 DATA "record book.  They may contain just a"
3990 DATA "Number, such as a Military Service"
4000 DATA "Number, or they may contain other"
4010 DATA "information."
4020 DATA ".sp"
4030 DATA "They may also be more personal comments,"
4040 DATA "such as the Color of Hair, favorite"
4050 DATA "food, Name of a Pet.  They are simply"
4060 DATA "the information that you want to keep."
4070 DATA ".h3 Lists"
4080 DATA "Three lists are used by Notes and"
4090 DATA "Sources ON DISPLAY, to assist in your"
4100 DATA "record-keeping.  The first is the list"
4110 DATA "of Persons from your Genealogy ON"
4120 DATA "DISPLAY Persons File.  The second is"
4130 DATA "your own (personalized) list of your"
4140 DATA "Sources.  The third is your own"
4150 DATA "(personalized) list of your Types."
4160 DATA ".sp"
4170 DATA "Portions of these lists are often shown"
4180 DATA "on the display screen whenever you are"
4190 DATA "entering information, or whenever you"
4200 DATA "are making inquiries."
4210 DATA ".pa"
4220 DATA ".h3 Data Entry or Update"
4230 DATA "Data Entry or Update is when you are"
4240 DATA "entering information about some person."
4250 DATA "For each note that you want to keep,"
4260 DATA "this means that you are choosing a"
4270 DATA "Person, choosing a Source, choosing a"
4280 DATA "Type, entering dates, and entering"
4290 DATA "the note itself."
4300 DATA ".h3 Inquiry for Display or Printing"
4310 DATA "When you are making an inquiry, you are"
4320 DATA "identifying the characteristics of the"
4330 DATA "information that you want to recall."
4340 DATA ".sp"
4350 DATA "This includes identifying either one"
4360 DATA "specific person or all persons, one"
4370 DATA "specific source, or all sources, one"
4380 DATA "specific type, or all types.  It also"
4390 DATA "includes identifying whether you want"
4400 DATA "the information presented on your"
4410 DATA "display screen, or printed or your"
4420 DATA "printer."
4430 DATA ".pa"
4440 DATA ".h2 EXPLANATION OF GENERAL CONCEPTS"
4450 DATA "Genealogical Notes and Sources are the"
4460 DATA "details, which provide not only the"
4470 DATA "'proof' that an event occurred, but"
4480 DATA "identify precisely where that informa-"
4490 DATA "tion was found.  This permits others"
4500 DATA "to verify that the information is"
4510 DATA "correct, without having to re-do the"
4520 DATA "original research themselves."
4530 DATA ".sp"
4540 DATA "Notes and Sources are much more than"
4550 DATA "proofs, however.  They may (and often"
4560 DATA "do) contain much more personal infor-"
4570 DATA "mation about individuals.  They may"
4580 DATA "indicate physical characteristics, such"
4590 DATA "as the color of the person's hair."
4600 DATA "They may indicate where a person lived,"
4610 DATA "what he accomplished, what his hobbies"
4620 DATA "were, what education he had received,"
4630 DATA "etc.  Thus, it is information that"
4640 DATA "shows the person to be a living,"
4650 DATA "breathing, human-being."
4660 DATA ".h3 Notes and Sources ON DISPLAY"
4670 DATA "Notes and Sources ON DISPLAY assists"
4680 DATA "in keeping track of information by"
4690 DATA "helping to form Note Records of most"
4700 DATA "of the user's important information."
4710 DATA ".pa"
4720 DATA "In addition to permitting a user to"
4730 DATA "enter specific information, Notes"
4740 DATA "and Sources ON DISPLAY presents the"
4750 DATA "user with personalized lists of his"
4760 DATA "own Sources and Types, to go with his"
4770 DATA "list of Persons from Genealogy ON"
4780 DATA "DISPLAY."
4790 DATA ".sp"
4800 DATA "Since much of the information in any"
4810 DATA "note may be repeated elsewhere, any"
4820 DATA "information that is not unique to the"
4830 DATA "note itself is separated from that in-"
4840 DATA "formation which is truly unique, and"
4850 DATA "carried in the note as a number, which"
4860 DATA "'points' to the non-unique information."
4870 DATA ".sp"
4880 DATA "Thus, a Type, such as 'Birth Record',"
4890 DATA "may be identified by a number, such as"
4900 DATA "1, rather than requiring a user to"
4910 DATA "type 'Birth Record' for every record"
4920 DATA "of birth that he wants to keep."
4930 DATA ".sp"
4940 DATA "In essence, wherever possible, Notes"
4950 DATA "and Sources ON DISPLAY separates the"
4960 DATA "information, and keeps the non-unique"
4970 DATA "information in lists, while retaining"
4980 DATA "the unique information with the note"
4990 DATA "itself."
5000 DATA ".sp"
5010 DATA "These lists can then be used during both"
5020 DATA "Data Entry, and Inquiry, to present the"
5030 DATA "user with exactly the same information"
5040 DATA "whatever task the user is performing."
5050 DATA ".pa"
5060 DATA "Using numbers, rather than actual data"
5070 DATA "in the note-records, wherever possible,"
5080 DATA "reduces the size of each note-record, so"
5090 DATA "that hundreds and hundreds of notes may"
5100 DATA "be kept on a single diskette."
5110 DATA ".sp"
5120 DATA "The use of Personalized Lists makes the"
5130 DATA "program extremely easy to use, since the"
5140 DATA "information is always consistent, and"
5150 DATA "the user does not have to type all re-"
5160 DATA "petitive information over and over"
5170 DATA "again.  The spellings are ALWAYS the"
5180 DATA "same, whether it be in Persons' names,"
5190 DATA "Sources, or Types of information."
5200 DATA ".pa"
5210 DATA ".h3 The Notefile"
5220 DATA "The notefile contains the actual notes"
5230 DATA "and dates.  It also contains the Note-"
5240 DATA "number, the identification of the Per-"
5250 DATA "son, the identification of the Source,"
5260 DATA "and the identification of the Type."
5270 DATA ".sp"
5280 DATA "Its format and content are:"
5290 DATA ".sp"
5300 DATA "Size  Content"
5310 DATA "----  --------------------------"
5320 DATA "  8   Note Number"
5330 DATA "  2   Person Number"
5340 DATA "  2   Source Number"
5350 DATA "  2   Type Number"
5360 DATA " 11   Event Date"
5370 DATA " 11   Research Date"
5380 DATA " 72   Content of the Note"
5390 DATA ".sp"
5400 DATA "The length of the note itself, at 72"
5410 DATA "characters, was specifically chosen to"
5420 DATA "to permit it to be shown as one line on"
5430 DATA "a display screen, or on one line on a"
5440 DATA "printed page."
5450 DATA ".pa"
5460 DATA ".h3 The Sources File"
5470 DATA "The Sources File provides the user with"
5480 DATA "the ability to identify up to 252 dif-"
5490 DATA "ferent sources where his information"
5500 DATA "was found.  The content of this file"
5510 DATA "may be (and probably always will be)"
5520 DATA "personalized by each user, to coincide"
5530 DATA "with his own sources."
5540 DATA ".sp"
5550 DATA "Each source may be up to 32 characters"
5560 DATA "in length (to let it fit nicely on the"
5570 DATA "display screen)."
5580 DATA ".h3 The Types File"
5590 DATA "The Types File provides the user with"
5600 DATA "the ability to identify up to 252 dif-"
5610 DATA "ferent types of data which he wants to"
5620 DATA "use.  The content of this file may be"
5630 DATA "(and probably always will be) personal-"
5640 DATA "ized by each user, to coincide with the"
5650 DATA "types of data that he wants to keep."
5660 DATA ".sp"
5670 DATA "Each type may be up to 32 characters in"
5680 DATA "length (to let it fit nicely on the"
5690 DATA "display screen)."
5700 DATA ".pa"
5710 DATA ".h2 BEFORE YOU START"
5720 DATA ".h3 Introduction to Personalization"
5730 DATA "When Notes and Sources ON DISPLAY is"
5740 DATA "shipped, it contains a file of Sources"
5750 DATA "and a file of Types.  These are pro-"
5760 DATA "vided to illustrate what the content"
5770 DATA "of the files should be like.  However,"
5780 DATA "you will probably want to change them,"
5790 DATA "to use your own Sources and your own"
5800 DATA "Types of Information."
5810 DATA ".sp"
5820 DATA "To make your own, personalized lists,"
5830 DATA "you should do the following:"
5840 DATA ".h3 List of Note Types"
5850 DATA "Begin by making a list which contains"
5860 DATA "the Types of notes which you wish to"
5870 DATA "keep."
5880 DATA ".sp"
5890 DATA "While you may wish to arrange your list"
5900 DATA "in alphabetical order, it is better to"
5910 DATA "arrange it so that the types of notes"
5920 DATA "that you will use the most are at the"
5930 DATA "top of the list."
5940 DATA ".sp"
5950 DATA "When you begin entering data and making"
5960 DATA "inquiries, you will see that the first"
5970 DATA "entries on your list are often shown,"
5980 DATA "so that you may make your selection."
5990 DATA ".pa"
6000 DATA "Of course, you may see other parts of"
6010 DATA "your list, but it will take more time"
6020 DATA "to do so.  Thus, it is better to have"
6030 DATA "your list arranged with those notes"
6040 DATA "which you will use the most at the top"
6050 DATA "of the list."
6060 DATA ".sp"
6070 DATA "After arranging the list, it may look"
6080 DATA "somewhat like the following:"
6090 DATA ".sp"
6100 DATA "No.  Note Type"
6110 DATA "---  --------------------"
6120 DATA "  1  Birth Records"
6130 DATA "  2  Marriage Records"
6140 DATA "  3  Census Records"
6150 DATA "  4  Deeds"
6160 DATA "  5  Land Records"
6170 DATA "  6  Wills"
6180 DATA "  7  Probates"
6190 DATA "  8  Death Records"
6200 DATA "  9  Obituaries"
6210 DATA " 10  Funeral Records"
6220 DATA " 11  Burial Records"
6230 DATA " 12  Cemeteries"
6240 DATA " 13  Awards"
6250 DATA " 14  Bar Mitzvahs"
6260 DATA " 15  Business Trips"
6270 DATA " 16  Circumcision"
6280 DATA " 17  Clothing"
6290 DATA " 18  Communion (First)"
6300 DATA " 19  Degrees and Diplomas"
6310 DATA " 20  Diseases"
6320 DATA " 21  Military Rank"
6330 DATA " 22  Newspaper Articles"
6340 DATA " 23  Passports"
6350 DATA " 24  Pets"
6360 DATA " 25  Promotions"
6370 DATA " 26  Publications"
6380 DATA " 27  Residences"
6390 DATA " 28  Ship Manifests"
6400 DATA " 29  Traditions (Family)"
6410 DATA " 30  Transportation"
6420 DATA " 31  Town Meetings"
6430 DATA " 32  Trophies"
6440 DATA " 33  Vacations"
6450 DATA ".pa"
6460 DATA ".h3 List of Sources"
6470 DATA "Make a second list which contains the"
6480 DATA "Sources of information for the notes"
6490 DATA "which you wish to keep."
6500 DATA ".sp"
6510 DATA "While you may wish to arrange your list"
6520 DATA "in alphabetical order, it is better to"
6530 DATA "arrange it so that the types of sources"
6540 DATA "that you will use the most, are at the"
6550 DATA "top of the list."
6560 DATA ".sp"
6570 DATA "When you begin entering data and making"
6580 DATA "inquiries, you will see that the first"
6590 DATA "entries on your list are often shown,"
6600 DATA "so that you may make your selection."
6610 DATA "Of course, you may see other parts of"
6620 DATA "your list, but it will take more time"
6630 DATA "to do so.  Thus, it is better to have"
6640 DATA "your list arranged with those sources"
6650 DATA "which you will use the most at the top"
6660 DATA "of the list."
6670 DATA ".sp"
6680 DATA "After arranging the list, it may look"
6690 DATA "somewhat like the following:"
6700 DATA ".sp"
6710 DATA "  1  Church"
6720 DATA "  2  State of California"
6730 DATA "  3  State of New York"
6740 DATA "  4  State of Ohio"
6750 DATA "  5  State of Utah"
6760 DATA "  6  State of Virginia"
6770 DATA "  7  Albany County, New York"
6780 DATA "  8  Salt Lake County, Utah"
6790 DATA "  9  Wasatch County, Utah"
6800 DATA " 10  United States"
6810 DATA " 11  England"
6820 DATA " 12  Germany"
6830 DATA " 13  Denmark"
6840 DATA " 14  City of San Jose"
6850 DATA " 15  Employers"
6860 DATA " 16  Fraternal Organizations"
6870 DATA " 17  High School"
6880 DATA " 18  Medical/Dental"
6890 DATA " 19  Personal"
6900 DATA " 20  Sports League"
6910 DATA " 21  University"
6920 DATA ".eof"
6930 END
```

## INTRODUC.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 DASHES$ = "+"+STRING$(54,45)+"+"
240 TRIM.LINE$ = "(Trim-line)"
250 REM Program begins here
260 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
270 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
280 GOSUB 920  'For trim line and heading space
290 FOR I = 1 TO 6 : LPRINT : NEXT I
300 LPRINT BOLD.ON$;     'Set Emphasized mode
310 LPRINT EXPAND.ON$;   'Set Expanded Print
320 LPRINT TAB(TAB.POS-5);TITLE$
330 LPRINT EXPAND.OFF$;  'Return to normal
340 LPRINT BOLD.OFF$;    'Return to normal
350 FOR I = 1 TO 3 : LPRINT : NEXT I
360 LPRINT BOLD.ON$;     'Set Emphasized mode
370 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
380 LPRINT BOLD.OFF$;    'Return to normal
390 LPRINT : LPRINT : LPRINT
400 LPRINT TAB(TAB.POS+11);"Version 1.1"
410 FOR I = 1 TO 11 : LPRINT : NEXT I
420 LPRINT TAB(TAB.POS+10); DOC.NAME$
430 LINE.NO = LINE.NO + 27
440 '
450 READ REPLY$
460 REM First, change tildes to quotes
470 FOR Q = 1 TO LEN(REPLY$)
480  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
490 NEXT Q
500 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1270: GOTO 450
510 IF LINE.NO > 44 THEN GOSUB 1030
520 REM Print the line if not a command
530 LPRINT TAB(TAB.POS);REPLY$
540 LINE.NO = LINE.NO + 1
550 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
560 GOTO 450
570 DATA ".pa"
580 REM   Data for the Copyright Page
590 DATA "Anyone may request a copy of Notes and"
600 DATA "Sources ON DISPLAY, for trial, by sending"
610 DATA "an unformatted, double-sided, double-"
620 DATA "density, 5-1/4 inch diskette to the"
630 DATA "author of the programs."
640 DATA ".sp"
650 DATA "An addressed, postage-paid return"
660 DATA "mailer must accompany the diskette (no"
670 DATA "exceptions, please).
680 DATA ".sp"
690 DATA "A copy of the programs with documenta-"
700 DATA "tion will be sent by return mail."
710 DATA ".vt 2"
720 DATA "Users are encouraged to copy and share"
730 DATA "the programs with others."
740 DATA ".vt 2"
750 DATA "If you are using this program, you are"
760 DATA "expected to become a Registered User,"
770 DATA "by making a contribution to the author"
780 DATA "of the program ($30.00 suggested for"
790 DATA "Registered Users of Genealogy ON DIS-"
800 DATA "PLAY, otherwise, $45.00 suggested)."
810 DATA ".sp"
820 DATA "Melvin O. Duke"
830 DATA "P. O. Box 20836"
840 DATA "San Jose, CA  95160"
850 DATA "(408) 268-6637"
860 DATA ".vt 3"
870 DATA "Copyright (c) 1986, by:"
880 DATA "Melvin O. Duke."
890 DATA ".sp"
900 DATA "All rights reserved."
910 '
920 REM Top of each page routine
930 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
940 LPRINT
950 LPRINT TAB(30); TRIM.LINE$
960 LPRINT DASHES$ 'Dashes
970 FOR I = 1 TO 6
980  LPRINT
990 NEXT I
1000 LINE.NO = LINE.NO + 6
1010 RETURN
1020 '
1030 REM Bottom of each page Routine
1040 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1160
1050 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1060 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1070 IF PAGE.NO MOD 2 = 1 THEN 1110
1080 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1090 LPRINT TAB(TAB.POS+27);"User's Manual"
1100 GOTO 1160
1110 LPRINT TAB(TAB.POS); "User's Manual";
1120 IF PAGE.NO < 10 THEN DELTA = 34
1130 IF PAGE.NO >  9 THEN DELTA = 33
1140 IF PAGE.NO > 99 THEN DELTA = 32
1150 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1160 LPRINT : LPRINT : LPRINT
1170 LPRINT DASHES$ 'dashes after 51
1180 LPRINT TAB(30); TRIM.LINE$
1190 LPRINT FORM.FEED$;
1200 PAGE.NO = PAGE.NO + 1
1210 LINE.NO = 1
1220 IF REPLY$ = ".eof" THEN 1240  'Bypass after last page
1230 GOSUB 920  'For top of next page
1240 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1250 RETURN
1260 '
1270 REM Command Processor
1280 IF LEFT$(REPLY$,3) = ".h1" THEN 1390
1290 IF LEFT$(REPLY$,3) = ".h2" THEN 1550
1300 IF LEFT$(REPLY$,3) = ".h3" THEN 1660
1310 IF LEFT$(REPLY$,3) = ".sp" THEN 1770
1320 IF LEFT$(REPLY$,4) = ".eof" THEN 1820
1330 IF LEFT$(REPLY$,3) = ".pa" THEN 1850
1340 IF LEFT$(REPLY$,3) = ".pn" THEN PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3)) : RETURN
1350 IF LEFT$(REPLY$,3) = ".vt" THEN 1920
1360 IF LEFT$(REPLY$,3) = ".pk" THEN 2030
1370 IF LEFT$(REPLY$,3) = ".in" THEN 2160
1380 STOP
1390 REM Head 1 Processor
1400 FOR I = LINE.NO TO 44
1410  LPRINT
1420 NEXT I
1430 GOSUB 1030  'Bottom of page Routine
1440 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1850  'For h1 on Odd pages
1450 LPRINT BOLD.ON$;     'Set emphasized print
1460 LPRINT EXPAND.ON$;   'Set expanded print
1470 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1480 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1490 LPRINT EXPAND.OFF$;  'Return to normal
1500 LPRINT BOLD.OFF$;    'Return to non-bold
1510 LINE.NO = LINE.NO+1
1520 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1530 RETURN
1540 '
1550 REM Head 2 Processor
1560 IF LINE.NO = 7 THEN 1580 'skip spacing if at top of page
1570 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1580 LPRINT BOLD.ON$;  'Set emphasized print
1590 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1600 LPRINT BOLD.OFF$; 'Return to normal
1610 LPRINT
1620 LINE.NO = LINE.NO + 2
1630 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1640 RETURN
1650 '
1660 REM Head 3 Processor
1670 IF LINE.NO = 7 THEN 1690 'skip spacing if at top of page
1680 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1690 LPRINT BOLD.ON$;  'Set emphasized print
1700 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1710 LPRINT BOLD.OFF$; 'Return to normal
1720 LPRINT
1730 LINE.NO = LINE.NO + 2
1740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1750 RETURN
1760 '
1770 REM Single Space Processor
1780 IF LINE.NO = 7 THEN 1800
1790 IF LINE.NO > 44 THEN GOSUB 1850 ELSE LPRINT : LINE.NO = LINE.NO + 1
1800 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1810 RETURN
1820 REM End of File Processor
1830 GOSUB 1850 'Bottom of Page
1840 GOTO 4970
1850 REM Page Eject Processor
1860 FOR I = LINE.NO TO 44
1870  LPRINT
1880  LINE.NO = LINE.NO + 1
1890 NEXT I
1900 GOSUB 1030  'Bottom of Page Processing
1910 RETURN
1920 REM Vertical Tab Processor
1930 IF LINE.NO = 7 THEN 2020
1940 IF LINE.NO > 44 THEN GOSUB 1030  'End of page
1950 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1960 FOR I = 1 TO QTY
1970  LPRINT
1980  LINE.NO = LINE.NO + 1
1990  IF LINE.NO > 44 THEN I = QTY
2000 NEXT I
2010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2020 RETURN
2030 REM Pack Processor
2040 IF LINE.NO > 44 THEN GOSUB 1030
2050 IF TAB.POS = 8 THEN ADJUST = 4
2060 IF TAB.POS = 13 THEN ADJUST = 7
2070 TAB.POS = TAB.POS + ADJUST + INDENT
2080 WIDTH "lpt1:", 132 'set condensed width
2090 LPRINT COMPR.ON$;  'Packed printing
2100 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2110 LPRINT COMPR.OFF$; 'Return to normal
2120 WIDTH "lpt1:", 80  'return to normal
2130 LINE.NO = LINE.NO + 1
2140 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2150 RETURN
2160 REM Indent Processor
2170 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2180 RETURN
3000 DATA ".h1 INTRODUCTION"
3010 DATA ".pn 1"
3020 DATA ".h2 OVERVIEW"
3030 DATA "The Notes and Sources ON DISPLAY pro-"
3040 DATA "gram lets you enter your Genealogical"
3050 DATA "Notes, and the Sources of your informa-"
3060 DATA "tion, and to make inquiries into those"
3070 DATA "notes for displaying on your screen or"
3080 DATA "for printing on your printer."
3090 DATA ".h2 Personalized Information"
3100 DATA "With Notes and Sources ON DISPLAY, you"
3110 DATA "are able to use your own names for the"
3120 DATA "types of information which you are keep-"
3130 DATA "ing, and the sources from whence they"
3140 DATA "came (e.g. Birth Certificate from the"
3150 DATA "State of New York)."
3160 DATA ".h2 Integrated Approach"
3170 DATA "Notes and Sources ON DISPLAY not only"
3180 DATA "lets you enter data, but it lets you"
3190 DATA "make inquiries about the notes that are"
3200 DATA "already stored.  You can inquire about"
3210 DATA "one Person, one Type of data, or one"
3220 DATA "Source.  Your inquiries can contain"
3230 DATA "mixtures, such as one person AND one"
3240 DATA "Type of Data AND one Source, etc."
3250 DATA ".pa"
3260 DATA ".h2 Multiple-Choices"
3270 DATA "When you are entering data, you select"
3280 DATA "from multiple-choice lists of personal-"
3290 DATA "ized information, by picking the number"
3300 DATA "of one Person, one Source, and one Type"
3310 DATA "of data.  You do not have to type all of"
3320 DATA "the information over and over again."
3330 DATA "You just make a series of choices."
3340 DATA ".sp"
3350 DATA "Similarly, when you make an inquiry, you"
3360 DATA "again select from multiple-choice lists"
3370 DATA "of information, picking the number of"
3380 DATA "one Person, one Source, and one Type of"
3390 DATA "Information (or you can pick ~all~ from"
3400 DATA "any of the lists).  Again, you do not"
3410 DATA "have to type the information, just pick"
3420 DATA "its number."
3430 DATA ".sp"
3440 DATA "When you make an inquiry, you can see"
3450 DATA "your infomation on the display screen,"
3460 DATA "or you can have it printed on your"
3470 DATA "printer.  The choice is up to you."
3480 DATA ".sp"
3490 DATA "With this multiple-choice approach, you"
3500 DATA "do not have to type the same informa-"
3510 DATA "tion over and over again.  You pick a"
3520 DATA "number, rather than typing the words"
3530 DATA "for Persons, Sources, and Types of In-"
3540 DATA "formation."
3550 DATA ".pa"
3560 DATA ".h2 CAPABILITIES"
3570 DATA "Following are the capabilities of the"
3580 DATA "Notes and Sources ON DISPLAY Program."
3590 DATA ".sp"
3600 DATA ".h3 Format a Note File."
3610 DATA "A new ~NOTEFILE~, for your Notes and"
3620 DATA "Sources, may be created, by selecting"
3630 DATA "this function from the menu.  This pre-"
3640 DATA "pares a file of 100 empty notes, with"
3650 DATA "numbers where numbers should be, and"
3660 DATA "with letters where letters should be."
3670 DATA "Each of these note-records is then"
3680 DATA "available for your use, to record"
3690 DATA "your own information."
3700 DATA ".h3 Extend the Note File."
3710 DATA "Your file of note-records may be exten-"
3720 DATA "ded at any time (by another 100 note-"
3730 DATA "records).  You may do this over and"
3740 DATA "again, whenever you wish."
3750 DATA ".sp"
3760 DATA "In this way, your file of notes can"
3770 DATA "grow as you require it, without being"
3780 DATA "larger than you need it.  By having"
3790 DATA "a file of notes only as large as you"
3800 DATA "need it, the time to search through"
3810 DATA "your notes can be minimized."
3820 DATA ".pa"
3830 DATA ".h3 Personalize the Sources."
3840 DATA "You can personalize your sources of"
3850 DATA "information, so that wherever your"
3860 DATA "research takes you, you can identify"
3870 DATA "those sources, in your own list."
3880 DATA ".sp"
3890 DATA "You can add to your list of sources"
3900 DATA "whenever you uncover another source, or"
3910 DATA "whenever you want to keep track of some"
3920 DATA "other kind of information (e.g. Medical"
3930 DATA "and Dental Information, Personal Char-"
3940 DATA "acteristics, etc.)."
3950 DATA ".h3 Personalize the Types of Data."
3960 DATA "You can personalize the types of data"
3970 DATA "that you are keeping, to meet your own"
3980 DATA "needs."
3990 DATA ".sp"
4000 DATA "You may also add to your list of types,"
4010 DATA "whenever you want, in order to keep"
4020 DATA "track of some other types of informa-"
4030 DATA "tion (e.g. Education, Diseases, Awards,"
4040 DATA "Businesss Trips, etc.)."
4050 DATA ".h3 Enter or Update Notes."
4060 DATA "You may enter your notes whenever you"
4070 DATA "desire, choosing the person from your"
4080 DATA "Genealogy ON DISPLAY Persons File,"
4090 DATA "choosing a Source from your personalized"
4100 DATA "list of sources, and choosing a Type,
4110 DATA "from your personalized list of types."
4120 DATA ".pa"
4130 DATA "You may also enter the date that the in-"
4140 DATA "formation was researched, and the date"
4150 DATA "of the event itself."
4160 DATA ".sp"
4170 DATA "Then, you enter the content of the note"
4180 DATA "(up to 72 characters)."
4190 DATA ".h3 Inquiry for Display or Printing."
4200 DATA "Whenever you want, you can inquire into"
4210 DATA "your notes, for some specific informa-"
4220 DATA "tion that you want.  For example you"
4230 DATA "may want to inquire into all Birth Rec-"
4240 DATA "ords that you have found in the State"
4250 DATA "of Ohio."
4260 DATA ".sp"
4270 DATA "You may want all of the information"
4280 DATA "about one person.  You may want all of"
4290 DATA "the Cemetary Records that you have ever"
4300 DATA "found, no matter where those cemetaries"
4310 DATA "were located, or who was buried there."
4320 DATA ".sp"
4330 DATA "With the inquiry capability, you can"
4340 DATA "decide on the spur of the moment just"
4350 DATA "what information you would like to see."
4360 DATA ".pa"
4370 DATA ".h2 BENEFITS/ADVANTAGES"
4380 DATA "The Notes and Sources ON DISPLAY pro-"
4390 DATA "gram provides an organized and cohesive"
4400 DATA "approach to permit users to create"
4410 DATA "their own personalized set of notes,"
4420 DATA "and to inquire into those notes when-"
4430 DATA "ever the user desires."
4440 DATA ".sp"
4450 DATA "A major advantage of the approach is"
4460 DATA "that common information, such as indi-"
4470 DATA "vidual sources, types, and persons'"
4480 DATA "names do not have to be typed over and"
4490 DATA "over again."
4500 DATA ".sp"
4510 DATA "A user operates from his own persona-"
4520 DATA "lized lists, which he enters only"
4530 DATA "once.  Thus, the names of sources and"
4540 DATA "types are always the same, without"
4550 DATA "differences in spellings."
4560 DATA ".sp"
4570 DATA "Since the Persons File from the Gene-"
4580 DATA "alogy ON DISPLAY programs is used, the"
4590 DATA "names of individuals are always the"
4600 DATA "same, as well."
4610 DATA ".h2 RESULTS"
4620 DATA "The final result is a well organized"
4630 DATA "set of notes, which permit a user to"
4640 DATA "keep track of whatever information"
4650 DATA "that he desires, using his personal-"
4660 DATA "izied lists of sources and types,"
4670 DATA "together with the names (and birth-"
4680 DATA "dates) of persons from his Genealogy"
4690 DATA "ON DISPLAY Persons File."
4700 DATA ".h2 REQUIREMENTS"
4710 DATA ".h3 Hardware Requirements."
4720 DATA ".sp"
4730 DATA "IBM PCjr, PC, PC/XT or PC/AT with:"
4740 DATA ".sp"
4750 DATA "  One Double-sided Diskette Drive."
4760 DATA ".sp"
4770 DATA "  Either the IBM Matrix Printer, the"
4780 DATA "  IBM Proprinter (or equivalents)."
4790 DATA ".sp"
4800 DATA "  At least 96K of Memory (128 K is"
4810 DATA "  recommended)."
4820 DATA ".sp"
4830 DATA "  Either the IBM Color Display,"
4840 DATA "  the IBM Monochrome Display (or"
4850 DATA "  equivalents)."
4860 DATA ".pa"
4870 DATA ".h3 Software Requirements."
4880 DATA ".sp"
4890 DATA "IBM PC-DOS."
4900 DATA "  Version 2.1 or later (or Version"
4910 DATA "    2.0 on the other members of the"
4920 DATA "    IBM PC Family of Computers)."
4930 DATA ".sp"
4940 DATA "BASIC"
4950 DATA "  (on Cartridge or Diskette)."
4960 DATA ".eof"
4970 END
```

## NOTESAND.BAS

```bas
100 REM NOTESAND Program
110 REM Notes and Sources ON DISPLAY
120 REM By: Melvin O. Duke.    Last Updated 23 June 1986
200 REM Screen Definitions
210 S1 = 0      'Set Text Mode
220 S2 = 1      'Enable Color
230 S3 = 0      'Active Page
240 S4 = 0      'Visual Page
250 WIDTH "scrn:",80
260 SCREEN S1, S2, S3, S4
300 REM Color Definitions
310 K = 0       'blacK
320 N = 1       'blue (Navy or uNderline)
330 G = 2       'Green
340 B = 3       'cyan (light Blue)
350 RED = 4     'Red
360 P = 5       'magenta (Purple)
370 O = 6       'brown (Orange)
380 W = 7       'white
400 REM Disk Definitions
410 DD.VERI$ = "a:"     'Verify /s:256
420 DD.NOTE$ = "a:"     'Note File
430 DD.PERS$ = "a:"     'Persons File
440 DD.SOUR$ = "a:"     'Sources
450 DD.TYPE$ = "a:"     'Types
460 DD.HIGH$ = "a:"     'Highest Note-record
500 REM Printer Definitions
510 PAGE.EJECT$ = CHR$(12)        'Skip to Top of Next Page
600 REM Maximums
610 MAX.PER = 500   'Same as Genealogy ON DISPLAY Persons File
620 LDIM = 0
630 UDIM = 12
640 VSCR = 21
650 PSCR = INT(MAX.PER/12)+1
700 REM Titles
710 TITLE$ = "Notes and Sources ON DISPLAY"
720 VERSION$ = "Version 1.1"
730 COPY1$ = "Copyright (c) 1986,"
740 COPY2$ = "by: Melvin O. Duke"
750 COPY3$ = "All Rights Reserved"
800 REM Make sure that BASIC was invoked with /s:256
810 ON ERROR GOTO 870
820 OPEN DD.VERI$+"verifile" AS #2 LEN = 256
830 ON ERROR GOTO 0
840 FIELD 2, 128 AS DUMY1$, 128 AS DUMY2$
850 CLOSE #2
860 GOTO 1000
870 IF ERR = 5 THEN 880 ELSE ON ERROR GOTO 0 : GOTO 820
880 REM File Buffer less than 256 bytes
890 KEY ON : CLS : LOCATE 10,1 : COLOR R,B
900 PRINT "BASIC must be brought up with /s:256, for Genealogy Records."
910 PRINT "Program has been Terminated."
920 PRINT "Enter CONT to return to DOS"
930 COLOR W,K : STOP
940 CLOSE #1
950 SYSTEM
1000 REM Dimension Statements for Messages and Vectors
1010 DIM MSG$(39)
1020 DIM VECT2$(UDIM*VSCR), VECT3$(UDIM*VSCR)
1100 REM Messages
1110 MSG$(1) = "Persons"
1120 MSG$(2) = "Types"
1130 MSG$(5) = "Sources"
1140 MSG$(6) = "Researched :"
1150 MSG$(7) = "Person     :"
1160 MSG$(10) = "Source     :"
1170 MSG$(12) = "Type       :"
1180 MSG$(13) = "Event Date :"
1190 MSG$(15) = "Note:"
1200 MSG$(16) = "Notes and Sources"
1210 MSG$(18) = "Research"
1220 MSG$(19) = "Persons"
1230 MSG$(20) = "Source"
1240 MSG$(22) = "Type"
1250 MSG$(23) = "Event Date"
1260 MSG$(24) = "Note"
1270 MSG$(25) = "Event"
1280 MSG$(29) = "Are "
1290 MSG$(30) = "Source is "
1300 MSG$(31) = "Person is "
1310 MSG$(33) = "Type is "
1320 MSG$(34) = "Person: "
1330 MSG$(35) = "Source: "
1340 MSG$(37) = "Type  : "
1350 MSG$(38) = "Note : "
1400 REM Produce the first screen
1410 KEY OFF : CLS
1420 REM Draw the outer double box
1430 R1 = 1 : C1 = 1 : R2 = 24 : C2 = 79 : GOSUB 12030
1440 REM Find the title location
1450 TITLE.POS = 40 - INT(LEN(TITLE$)/2)
1460 REM Draw the title box
1470 R1=2:C1=TITLE.POS-2:R2=5:C2=TITLE.POS+LEN(TITLE$)+1:GOSUB 12200
1480 REM Print the Program Title and Version
1490 LOCATE 3,TITLE.POS : PRINT TITLE$
1500 LOCATE 4,39-INT(LEN(VERSION$)/2) :  PRINT VERSION$;
1510 '
1520 REM Draw the Box to Identify the Collection of Programs
1530 R1 = 6 : C1 =  5 : R2 = 18 : C2 = 75 : GOSUB 12030
1540 REM Fill in the Box with Descriptions
1550 LOCATE  8,10
1560 PRINT " If you are using this program, you are expected to become a"
1570 LOCATE  9,10
1580 PRINT "Registered User, by making a contribution to the author of the"
1590 LOCATE 10,10
1600 PRINT "program ($30.00 suggested for Registered Users of Genealogy ON"
1610 LOCATE 11,10
1620 PRINT "           DISPLAY, otherwise, $45.00 suggested)."
1630 REM Draw the Box to Identify the Use, and Fill it in
1640 R1 = 12 : C1 = 28 : R2 = 17 : C2 = 52 : GOSUB 12200
1650 LOCATE 13,33 : PRINT "Melvin O. Duke"
1660 LOCATE 14,33 : PRINT "P.O. Box 20836"
1670 LOCATE 15,31 : PRINT "San Jose, CA  95160"
1680 LOCATE 16,33 : PRINT "(408) 268-6637"
1690 '
1700 REM Draw the Copyright box
1710 R1 = 19 : C1 = 24 : R2 = 23 : C2 = 56 : GOSUB 12030
1720 REM Print the Copyright
1730 LOCATE 20,40-INT(LEN(COPY1$)/2) :  PRINT COPY1$;
1740 LOCATE 21,40-INT(LEN(COPY2$)/2) :  PRINT COPY2$;
1750 LOCATE 22,40-INT(LEN(COPY3$)/2) :  PRINT COPY3$;
1760 '
1770 REM ask user to press a key to continue
1780 LOCATE 25,1
1790 PRINT "Press any key to continue.";
1800 K$ = INKEY$ : IF K$ = "" THEN 1800
1810 '
1820 REM Establish the Data File and its Appearance
1830 GOSUB 1850  'To Open the File and Set the Field
1840 GOTO 1880
1850 OPEN DD.NOTE$+"notefile" AS #1 LEN = 108
1860 FIELD 1, 8 AS F1$, 2 AS F2$, 2 AS F5$, 2 AS F7$, 11 AS F8$, 11 AS F10$, 72 AS F11$
1870 RETURN
1880 CLOSE #1
1890 '
1900 KEY ON : CLS : KEY OFF
1910 LOCATE 23,1
1920 '
1930 REM Access the Persons File
1940 PRINT "Preparing ";MSG$(1)
1950 GOSUB 1960 : GOTO 1990
1960 OPEN DD.PERS$+"persfile" AS #2 LEN = 256
1970 FIELD 2, 5 AS P1$, 20 AS P2$, 30 AS P3$, 2 AS P4$, 5 AS P5$, 5 AS P6$, 5 AS P7$, 11 AS P8$, 18 AS P9$, 16 AS P10$, 16 AS P11$, 11 AS P12$, 18 AS P13$, 16 AS P14$, 16 AS P15$, 11 AS P16$, 18 AS P17$, 16 AS P18$, 16 AS P19$
1980 RETURN
1990 CLOSE #2
2000 '
2010 REM Obtain The Record Types
2020 PRINT "Preparing ";MSG$(2)
2030 OPEN DD.TYPE$+"typefile" FOR INPUT AS #2
2040 FOR CT = LDIM TO VSCR*UDIM
2050  LINE INPUT #2, VECT3$(CT)
2060 NEXT CT
2070 CLOSE #2
2080 '
2090 REM Obtain The Sources
2100 PRINT "Preparing ";MSG$(5)
2110 OPEN DD.SOUR$+"sourfile" FOR INPUT AS #2
2120 FOR CT = LDIM TO VSCR*UDIM
2130  LINE INPUT #2, VECT2$(CT)
2140 NEXT CT
2150 CLOSE #2
2160 '
2170 PRINT "Preparing Current Limits of Records"
2180 OPEN DD.HIGH$+"high" FOR INPUT AS #3
2190  INPUT #3, MAX.REC
2200  INPUT #3, HIGH.REC
2210 CLOSE #3
2220 '
2230 REM Draw the Menu of available user actions.
2240 KEY ON : CLS : KEY OFF
2250 REM Draw the Outer Double Box.
2260 R1 = 1 : C1 = 1 : R2 = 19 : C2 = 79 : GOSUB 12030
2270 REM Draw the Heading Separator.
2280 R1 = 3 : C1 = 1 : R2 = 3 : C2 = 79 : GOSUB 12470
2290 REM Draw the Vertical Separators.
2300 R1 = 1 : C1 = 6 : R2 = 19 : C2 = 6 : GOSUB 12670
2310 REM Attach the intersections
2320 COLOR P,K
2330 LOCATE 3, 6 : PRINT CHR$(197);
2340 '
2350 REM Print the content of the menu.
2360 COLOR K,W
2370 LOCATE 2,3 : PRINT "No";
2380 LOCATE 2,8 : PRINT "Available Functions in " + TITLE$
2390 COLOR K,W : LOCATE  5,3 : PRINT " 1"; : COLOR RED,K
2400 LOCATE  5,  8 : PRINT "Create a New ";MSG$(24);" File.";
2410 COLOR K,W : LOCATE  7,3 : PRINT " 2"; : COLOR RED,K
2420 LOCATE  7,  8 : PRINT "Extend the ";MSG$(24);" File by 100 records.";
2430 COLOR K,W : LOCATE  9,3 : PRINT " 3"; : COLOR G,K
2440 LOCATE  9,  8 : PRINT "Personalize or Redefine the ";MSG$(5);
2450 COLOR K,W : LOCATE 11,3 : PRINT " 4"; : COLOR G,K
2460 LOCATE 11,  8 : PRINT "Personalize or Redefine the ";MSG$(2);
2470 COLOR K,W : LOCATE 13,3 : PRINT " 5"; : COLOR O,K
2480 LOCATE 13,  8 : PRINT "Enter or Update ";MSG$(24);" Information."
2490 COLOR K,W : LOCATE 15,3 : PRINT " 6"; : COLOR O,K
2500 LOCATE 15,  8 : PRINT "Inquiry for Display or Printing."
2510 COLOR K,W : LOCATE 17,3 : PRINT " 7"; : COLOR W,K
2520 LOCATE 17, 8 : PRINT "Menu of Functions in " + TITLE$ + " (This screen)."
2530 '
2540 REM Now obtain User Response
2550 LOCATE 23,1
2560 LINE INPUT "Type a Function Number (0 to quit), and press the 'enter' key: ", REPLY$
2570 IF REPLY$ = "0" THEN 12770
2580 REPLY = VAL(REPLY$)
2590 IF REPLY > 0 AND REPLY < 8 THEN 2680
2600 LOCATE 22,1 : PRINT "Function Number is Out of Range";
2610 LOCATE 25,1 : PRINT "Press any key to continue";
2620 A$ = INKEY$ : IF A$ = "" THEN 2620
2630 GOSUB 12830
2640 GOSUB 12840
2650 GOSUB 12850
2660 GOSUB 12860
2670 GOTO 2540
2680 IF REPLY =  1 THEN 2770  'Create a New File
2690 IF REPLY =  2 THEN 3400  'Extend the File by 100 Records
2700 IF REPLY =  3 THEN 7970  'Update Sources
2710 IF REPLY =  4 THEN 7540  'Update Types
2720 IF REPLY =  5 THEN 3530  'Update the Note Records
2730 IF REPLY =  6 THEN 8400  'Inquiry Routine
2740 IF REPLY =  7 THEN 2230  'Re-draw the Menu
2750 LOCATE 22,1 : PRINT "Function Number must be a whole number"; : GOTO 2610
2760 '
2770 REM Routine to Write a New File
2780 REM First, produce a Warning Message before writing new file.
2790 KEY ON : CLS : KEY OFF
2800 REM Draw the outer double box
2810 R1 = 1 : C1 = 1 : R2 = 21 : C2 = 79 : GOSUB 12030
2820 COLOR RED,K
2830 LOCATE 8,10
2840 PRINT "          ***  WARNING ***"
2850 LOCATE 10,3
2860 PRINT "This function creates a new ";MSG$(24);" File by completely"
2870 LOCATE 11,3
2880 PRINT "removing the old file (if one exists), and by writing 100 new,"
2890 LOCATE 12,3
2900 PRINT "empty records.  Only the new file will now exist."
2910 COLOR G,K
2920 LOCATE 14,3
2930 PRINT "If this is REALLY what you want to do,"
2940 LOCATE 15,3
2950 PRINT "type y (yes), and press the 'enter' key."
2960 LOCATE 17,3
2970 PRINT "Otherwise, type n (no), and press the 'enter' key."
2980 COLOR W,K
2990 LOCATE 23,1
3000 LINE INPUT "Enter your desired action: ",REPLY$
3010 IF LEFT$(REPLY$,1) = "y" THEN 3100
3020 IF LEFT$(REPLY$,1) = "Y" THEN 3100
3030 PRINT
3040 PRINT "File was NOT Created."
3050 PRINT
3060 PRINT "Press any key to continue"
3070 A$ = INKEY$ : IF A$ = "" THEN 3070
3080 GOTO 2230  'return to the menu
3090 '
3100 REM Routine to Create a Data File
3110 KILL DD.NOTE$+"notefile"  'Get rid of any old file that exists
3120 GOSUB 1850  'To Open the File and Set the Field
3130 LOCATE 23,1 : PRINT SPACE$(79)
3140 LOCATE 23,1 : PRINT "Writing Record Number:";
3150 MAX.REC = 100  'Set size of new Data File
3160 GOSUB 3210     'To write 100 Records
3170 HIGH.REC = 0   'Set new Highest Record used
3180 GOSUB 12880    'To file the new maximums
3190 GOTO 2230      'Return to the Main Menu
3200 '
3210 REM Routine to Write 100 new Data Records
3220 FOR I = MAX.REC - 99 TO MAX.REC
3230  TEMP = -I
3240  TEMP$ = MKD$(TEMP)
3250  LSET F1$ = TEMP$       'record number
3260  TEMP$ = " "
3270  TEMP = 0
3280  LSET F2$ = MKI$(TEMP)  'Person Number
3290  LSET F5$ = MKI$(TEMP)  'Source Number
3300  LSET F7$ = MKI$(TEMP)  'Type Number
3310  LSET F8$ = TEMP$       'Event Date
3320  LSET F10$ = TEMP$      'Research Date
3330  LSET F11$ = TEMP$      'Description
3340  LOCATE 23,24 : PRINT I;
3350  PUT #1, I
3360 NEXT I
3370 CLOSE #1
3380 RETURN
3390 '
3400 REM Routine to Extend the Data File by Another 100 Records
3410 IF HIGH.REC >=0 THEN 3450
3420 KEY ON : CLS : KEY OFF
3430 LOCATE 21,1 : PRINT "Cannot Extend a File that Has not Yet Been Created.";
3440 GOTO 3580
3450 GOSUB 1850  'To Open the File and Set the Field
3460 GOSUB 12840
3470 LOCATE 23,1 : PRINT "Writing Record Number:";
3480 MAX.REC = MAX.REC + 100
3490 GOSUB 3210   'To write 100 more records
3500 GOSUB 12880  'To file the new maximums
3510 GOTO 2230    'Return to the Main Menu
3520 '
3530 REM Routine to Enter or Update Data File Records
3540 REM Test to see that the File has been Created
3550 IF HIGH.REC >=0 THEN 3630
3560 KEY ON : CLS : KEY OFF
3570 LOCATE 21,1 : PRINT "Cannot Update a File that Has not Yet Been Created.";
3580 LOCATE 22,1 : PRINT "Select the Creation of a New File from the Menu.";
3590 LOCATE 24,1 : PRINT "Press any key to continue";
3600 A$ = INKEY$ : IF A$ = "" THEN 3600
3610 GOTO 2230  'Main menu
3620 '
3630 REM Open the File and draw the Screen
3640 Q1 = 0 : Q2$ = ""
3650 Q3$ = "" : Q8$ = ""
3660 GOSUB 1850  'To Open the File and Set the Field
3670 REC.NO = 1 : Q1 = 0
3680 KEY ON : CLS : KEY OFF  'Screen Refresh returns here
3690 REM Reset all Variables
3700 T1 = 0 : TQ1 = 0 : TQ2$ = " " : TQ3$ = " " : TQ8$ = " "
3710 GOSUB 3720 : GOTO 3810
3720 REM Draw the Outer Box
3730 R1 = 1 : C1 = 1 : R2 = 21 : C2 = 79 : GOSUB 12030
3740 REM Draw the Heading Separator
3750 R1 = 3 : C1 = 1 : R2 = 3 : C2 = 79 : GOSUB 12370
3760 REM Draw the Vertical Separator
3770 R1 = 3 : C1 = 40 : R2 = 17 : C2 = 40 : GOSUB 12570
3780 R1 = 17 : C1 = 1 : R2 = 17 : C2 = 40 : GOSUB 12370
3790 COLOR P,K : LOCATE 17,40 : PRINT CHR$(188); : COLOR W,K
3800 RETURN
3810 LOCATE 2,3 : PRINT MSG$(24) + " Entry or Update";
3820 LOCATE 23,1
3830 LINE INPUT "Enter Note Number to Update (0 to quit, ? next available): ",REPLY$
3840 REM test for validity of record number
3850 IF REPLY$ = "?" THEN 3870 ELSE 4190
3860 '
3870 REM Routine to Locate an Empty Record
3880 SWITCH = 0
3890 FOR LOOK = REC.NO TO MAX.REC
3900  LOCATE 22,1 : PRINT "Searching Note Record"; LOOK;
3910  REM Obtain the Next Record
3920  GET #1, LOOK
3930  REM Extract the Data
3940  T1 = CVD(F1$)
3950  IF T1 > 0 THEN 4000  'Bypass if Positive
3960  GOSUB 6980  'to Extract the pertinent data
3970  REM If Negative, then found an empty
3980  IF T1 < 0 THEN REC.NO = LOOK : LOOK = MAX.REC : GOTO 4130
3990  '
4000  REM Test for Top-of-file condition
4010  IF LOOK < MAX.REC THEN 4130
4020  IF LOOK = MAX.REC AND T1 > 0 THEN 4030 ELSE 4130
4030  SWITCH = 1
4040  GOSUB 12830 : LOCATE 22,1
4050  PRINT "No empty notes at the top of the file.";
4060  GOSUB 12840 : LOCATE 23,1
4070  PRINT "File must be extended.";
4080  GOSUB 12850 : LOCATE 24,1
4090  PRINT "Select #2, Extend the File, from the main menu.";
4100  GOSUB 12860 : LOCATE 25,1
4110  PRINT "Press any key to continue.";
4120  A$ = INKEY$ : IF A$ = "" THEN 4120
4130 NEXT LOOK
4140 '
4150 REM Test if no records available
4160 IF SWITCH = 1 THEN CLOSE #1 : GOTO 2230  'Return to menu
4170 GOTO 4240
4180 '
4190 REM Test Validity of User-specified Record-number
4200 IF REPLY$ = "0" THEN CLOSE #1 : GOTO 2230  'Return to main menu
4210 REC.NO = VAL(REPLY$)
4220 IF REC.NO < 1 OR REC.NO > MAX.REC THEN 6670 ELSE 4240
4230 '
4240 REM obtain the record
4250 GET #1, REC.NO
4260 GOSUB 6980  'to Extract the pertinent data
4270 GOSUB 4300  'to draw the right half of the screen
4280 GOTO 4770  'to continue the program
4290 '
4300 REM Routine to Draw the Right Half of the Screen
4310 LOCATE  2,67 : PRINT "Note:";
4320 LOCATE  2,74 : PRINT SPACE$(5);
4330 LOCATE  2,74 : PRINT T1;
4340 LOCATE  4,55 : COLOR K,W : PRINT "Descriptions";
4350 LOCATE  6,42 : COLOR O,K : PRINT MSG$(6);
4360 LOCATE  6,55 : PRINT SPACE$(23);
4370 LOCATE  6,55 : COLOR G,K : PRINT T10$;
4380 LOCATE  8,42 : COLOR O,K : PRINT MSG$(7);
4390 LOCATE  8,55 : PRINT SPACE$(5);
4400 IF T2 = 0 THEN NM$ = " " : GOTO 4500
4410 GOSUB 1960 'Open
4420 GET #2, T2
4430 TQ1  = CVS(P1$)
4440 TQ2$ = P2$
4450 RTRM$ = TQ2$ : GOSUB 12950 : TQ2$ = RTRM$
4460 TQ3$ = P3$
4470 RTRM$ = TQ3$ : GOSUB 12950 : TQ3$ = RTRM$
4480 TQ8$ = P8$
4490 CLOSE #2
4500 LOCATE  8,55 : COLOR G,K : PRINT TQ1;
4510 LOCATE  9,46 : PRINT SPACE$(30);
4520 LOCATE  9,46 : COLOR G,K : PRINT LEFT$(TQ3$,30);
4530 LOCATE 10,46 : PRINT SPACE$(20);
4540 LOCATE 10,46 : COLOR G,K : PRINT LEFT$(TQ2$,20);
4550 LOCATE 11,46 : PRINT SPACE$(11);
4560 LOCATE 11,46 : COLOR G,K : PRINT LEFT$(TQ8$,11);
4570 LOCATE 13,42 : COLOR O,K : PRINT MSG$(10);
4580 LOCATE 13,55 : PRINT SPACE$(6);
4590 LOCATE 13,55 : COLOR G,K : PRINT T5;
4600 LOCATE 14,46 : PRINT SPACE$(32);
4610 LOCATE 14,46 : COLOR G,K : PRINT VECT2$(T5);
4620 LOCATE 15,42 : COLOR O,K : PRINT MSG$(12);
4630 LOCATE 15,55 : PRINT SPACE$(6);
4640 LOCATE 15,55 : COLOR G,K : PRINT T7;
4650 LOCATE 16,46 : PRINT SPACE$(32);
4660 LOCATE 16,46 : COLOR G,K : PRINT VECT3$(T7);
4670 LOCATE 17,42 : COLOR O,K : PRINT MSG$(13);
4680 LOCATE 17,55 : PRINT SPACE$(23);
4690 LOCATE 17,55 : COLOR G,K : PRINT T8$;
4700 LOCATE 18,3  : PRINT SPACE$(15);
4710 LOCATE 18,3  : COLOR O,K : PRINT MSG$(38);
4720 LOCATE 20,3  : PRINT SPACE$(72);
4730 LOCATE 20,3  : COLOR G,K : PRINT LEFT$(T11$,72);
4740 COLOR W,K
4750 RETURN
4760 '
4770 REM Obtain User Input
4780 REM blank the left-side of the screen
4790 FOR R = LDIM TO UDIM
4800  LOCATE 4+R,3 : PRINT SPACE$(37);
4810 NEXT R
4820 LOCATE 24,1 : PRINT "('enter' to leave alone, '/ enter' to end description,)";
4830 LOCATE 25,1 : PRINT "(or reply as shown.)";
4840 REM Obtain the Note Number
4850 GOSUB 12830
4860 GOSUB 12840 : LOCATE 23,1
4870 LINE INPUT "Enter the Note Number: ", REPLY$
4880 TT1 = VAL(REPLY$)
4890 IF ABS(TT1) = ABS(T1) THEN 5000
4900 '
4910 REM Validate the Note-number
4920 IF REPLY$ = "" AND T1 > 0 THEN 5000
4930 IF REPLY$ = "/" THEN 5000
4940 LOCATE 23,1 : PRINT "Cannot Change the Note Number Value, or leave negative.";
4950 GOSUB 12860
4960 LOCATE 25,1 : PRINT "Press any key to continue";
4970 A$ = INKEY$ : IF A$ = "" THEN 4970
4980 GOTO 3670   'Data File Update
4990 '
5000 REM Accept the Note Number
5010 IF REPLY$ = "" THEN 5150
5020 IF REPLY$ = "/" THEN 6360
5030 IF TT1 >= 0 THEN 5120  'To continue
5040 '
5050 REM Blank Note with Negative Number
5060 T1 = TT1 : T2 = 0 : T5 = 0 : T6 = 0 : T7 = 0
5070 T8$ = " " : T10$ = " " : T11$ = " "
5080 TQ1 = 0 : TQ2$ = " " : TQ3$ = " " : TQ8$ = " "
5090 GOSUB 4300  'to reprint
5100 GOTO 6360  'for save, more, or forget
5110 '
5120 T1 = TT1
5130 GOSUB 4300  'to reprint
5140 '
5150 REM Obtain the Researched Date
5160 GOSUB 12840 : LOCATE 23,1
5170 PRINT "Enter the ";MSG$(18);" date as: 18 Nov 1986, or t (for today): ";
5180 LINE INPUT "", REPLY$
5190 IF REPLY$ = CHR$(34)+" "+CHR$(34) THEN REPLY$ = " "
5200 IF REPLY$ = "" THEN 5260
5210 IF REPLY$ = "/" THEN 6360
5220 IF REPLY$ = "t" THEN GOSUB 6790 : REPLY$ = C$
5230 IF REPLY$ = "T" THEN GOSUB 6790 : REPLY$ = C$
5240 T10$ = SPACE$(11) : RSET T10$ = REPLY$
5250 GOSUB 4300  'to reprint
5260 '
5270 REM Obtain Vector 1 Number
5280 VT = 1 : VSCR = PSCR
5290 MESSV$ = MSG$(19)
5300 GOSUB 5330
5310 IF REPLY$ = "/" THEN CLOSE #2 : GOTO 6360
5320 GOTO 5940 'After Vectors
5330 REM Obtain any Vector Number
5340 LOCATE 4,8 : COLOR K,W : PRINT "Choices"; : COLOR W,K
5350 ADJUST = -UDIM : GOTO 5600
5360 GOSUB 1960  'Open the Persons File
5370 FOR R = LDIM + 1 TO UDIM
5380  IF R+ADJUST > MAX.PER THEN R = UDIM : GOTO 5580
5390  LOCATE 4+R, 3 : PRINT SPACE$(37);
5400  NMBR$ = SPACE$(4)
5410  COLOR K,W
5420  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),4)
5430  LOCATE 4+R,3 : PRINT NMBR$;
5440  COLOR G,K
5450  PRINT " ";
5460  IF VT = 1 THEN 5470 ELSE 5560
5470  REM Get a Person from the Genealogy File
5480  GET #2, R+ADJUST
5490  Q2$ = P2$
5500  RTRM$ = Q2$ : GOSUB 12950 : Q2$ = RTRM$
5510  Q3$ = P3$
5520  RTRM$ = Q3$ : GOSUB 12950 : Q3$ = RTRM$
5530  NM$ = Q3$+" "+Q2$
5540  NM$ = LEFT$(NM$,32)
5550  PRINT NM$
5560  IF VT = 2 THEN PRINT VECT2$(R+ADJUST);
5570  IF VT = 3 THEN PRINT VECT3$(R+ADJUST);
5580 NEXT R
5590 CLOSE #2
5600 COLOR W,K
5610 GOSUB 12830 : GOSUB 12860
5620 IF ADJUST >= (VSCR-1)*UDIM THEN LOCATE 25,1:PRINT "(or reply as shown.)";
5630 IF ADJUST >= (VSCR-1)*UDIM THEN 5650 'bypass last one
5640 LOCATE 25,1 : PRINT "('\ enter' for partial list, or reply as shown.)";
5650 GOSUB 12840 : LOCATE 23,1
5660 PRINT "Enter the ";MESSV$;" Number: ";
5670 LINE INPUT "", REPLY$
5680 IF REPLY$ = "" THEN 5910
5690 IF REPLY$ = "/" THEN 5910
5700 IF REPLY$ <> "\" THEN 5740
5710 ADJUST = ADJUST + UDIM
5720 IF ADJUST >= VSCR * UDIM THEN REPLY$ = "" : GOTO 5910
5730 GOTO 5360 'For more choices
5740 TX = VAL(REPLY$)
5750 '
5760 REM Validate the User Response
5770 IF TX > MAX.PER THEN 5790
5780 IF TX >  LDIM AND TX <= VSCR*UDIM THEN 5860
5790 LOCATE 22,1 : PRINT "Error in Reply";
5800 GOSUB 12860 : LOCATE 25,1 : PRINT "Press any key to continue";
5810 A$ = INKEY$ : IF A$ = "" THEN 5810
5820 IF VT = 1 THEN T2 = 0
5830 IF VT = 2 THEN T5 = 0
5840 IF VT = 3 THEN T7 = 0
5850 GOTO 5610   'for better reply
5860 REM Store the Values
5870 IF VT = 1 THEN T2 = TX
5880 IF VT = 2 THEN T5 = TX
5890 IF VT = 3 THEN T7 = TX
5900 GOSUB 4300  'to reprint
5910 LOCATE 25,1 : PRINT SPACE$(79);
5920 RETURN
5930 '
5940 REM after Vectors
5950 '
5960 REM Obtain Source Number
5970 VT = 2 : VSCR = 21
5980 MESSV$ = MSG$(20)
5990 GOSUB 6100 : GOSUB 5330
6000 IF REPLY$ = "/" THEN 6360
6010 '
6020 REM Obtain Note Number
6030 VT = 3 : VSCR = 21
6040 MESSV$ = MSG$(22)
6050 GOSUB 6100 : GOSUB 5330
6060 IF REPLY$ = "/" THEN 6360
6070 '
6080 REM Obtain the Event Date
6090 GOSUB 6100 : GOTO 6140
6100 FOR R = LDIM +1 TO UDIM
6110  LOCATE 4+R, 3 : PRINT SPACE$(37);
6120 NEXT R
6130 RETURN
6140 LOCATE 25,1 : PRINT "(or reply as shown.)";
6150 GOSUB 12840 : LOCATE 23,1
6160 PRINT "Enter the ";MSG$(23);" as: 11 Nov 1948 (or 't' for today): ";
6170 LINE INPUT "", REPLY$
6180 IF REPLY$ = CHR$(34)+" "+CHR$(34) THEN REPLY$ = " "
6190 IF REPLY$ = "" THEN 6260
6200 IF REPLY$ = "/" THEN 6360
6210 IF REPLY$ = "t" THEN GOSUB 6790 : REPLY$ = C$
6220 IF REPLY$ = "T" THEN GOSUB 6790 : REPLY$ = C$
6230 RSET T8$= REPLY$
6240 GOSUB 4300  'to reprint
6250 '
6260 '
6270 REM Obtain the Note
6280 GOSUB 12840 : LOCATE 23,1
6290 LINE INPUT "Note: ", REPLY$
6300 IF REPLY$ = CHR$(34)+" "+CHR$(34) THEN REPLY$ = " "
6310 IF REPLY$ = "" THEN 6360
6320 IF REPLY$ = "/" THEN 6360
6330 T11$= LEFT$(REPLY$,72)
6340 GOSUB 4300  'to reprint
6350 '
6360 REM Let User decide whether to save, ignore, or do some more
6370 GOSUB 12830
6380 GOSUB 12850 : GOSUB 12860
6390 GOSUB 12840 : LOCATE 23,1
6400 LINE INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key: ", REPLY$
6410 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 12840 : GOTO 4770
6420 IF LEFT$(REPLY$,1) = "M" THEN GOSUB 12840 : GOTO 4770
6430 IF LEFT$(REPLY$,1) = "f" THEN REC.NO = ABS(T1) : GOTO 3680
6440 IF LEFT$(REPLY$,1) = "F" THEN REC.NO = ABS(T1) : GOTO 3680
6450 IF LEFT$(REPLY$,1) = "s" THEN GOSUB 12840 : GOTO 6500
6460 IF LEFT$(REPLY$,1) = "S" THEN GOSUB 12840 : GOTO 6500
6470 LOCATE 22,1 : PRINT "Error in Reply"
6480 GOTO 6380  'For better reply
6490 '
6500 REM Save has been indicated
6510  REC.NO = ABS(T1)
6520  LSET F1$  = MKD$(T1)  'Note Number
6530  LSET F2$  = MKI$(T2)  'Person Number
6540  LSET F5$  = MKI$(T5)  'Source Number
6550  LSET F7$  = MKI$(T7)  'Type Number
6560  RSET F8$  = T8$       'Event Date
6570  RSET F10$ = T10$      'Research Date
6580  LSET F11$ = T11$      'Description
6590  PUT #1, ABS(T1)
6600 IF T1 <= HIGH.REC THEN 6650
6610 '
6620 REM File the new Maximums
6630 HIGH.REC = T1
6640 GOSUB 12880  'To File the Maximums
6650 GOTO 3680  'for next record
6660 '
6670 REM Error in User-specified Note Number
6680 LOCATE 22,1 : PRINT "Note Number is out of range";
6690 LOCATE 24,1 : PRINT "Press any key to continue";
6700 A$ = INKEY$ : IF A$ = "" THEN 6700
6710 GOTO 3670  'for screen refresh
6720 '
6730 REM Subroutines Follow
6740 REM Routine to establish user action
6750 LOCATE 24,1 : PRINT "('enter to leave alone, '/ enter' to end description,)';
6760 LOCATE 25,1 : PRINT "('\ enter' to continue list, or reply as shown.)';
6770 RETURN
6780 '
6790 REM Routine to change the System Date to a Genealogical Date
6800 B$ = DATE$
6810 C$ = MID$(B$,4,2) + " "
6820 IF LEFT$(B$,2) = "01" THEN C$ = C$ + "Jan "
6830 IF LEFT$(B$,2) = "02" THEN C$ = C$ + "Feb "
6840 IF LEFT$(B$,2) = "03" THEN C$ = C$ + "Mar "
6850 IF LEFT$(B$,2) = "04" THEN C$ = C$ + "Apr "
6860 IF LEFT$(B$,2) = "05" THEN C$ = C$ + "May "
6870 IF LEFT$(B$,2) = "06" THEN C$ = C$ + "Jun "
6880 IF LEFT$(B$,2) = "07" THEN C$ = C$ + "Jul "
6890 IF LEFT$(B$,2) = "08" THEN C$ = C$ + "Aug "
6900 IF LEFT$(B$,2) = "09" THEN C$ = C$ + "Sep "
6910 IF LEFT$(B$,2) = "10" THEN C$ = C$ + "Oct "
6920 IF LEFT$(B$,2) = "11" THEN C$ = C$ + "Nov "
6930 IF LEFT$(B$,2) = "12" THEN C$ = C$ + "Dec "
6940 C$ = C$ + RIGHT$(B$,4)
6950 IF LEFT$(C$,1) = "0" THEN MID$(C$,1,1) = " "
6960 RETURN
6970 '
6980 REM Routine to Extract Data from a Data Record
6990 T1 = CVD(F1$)  'Note Number
7000 T2 = CVI(F2$)  'Person Number
7010 T5 = CVI(F5$)  'Source Number
7020 T7 = CVI(F7$)  'Type Number
7030 T8$ = F8$      'Event Date
7040 T10$ = F10$    'Research Date
7050 T11$ = F11$    'Description
7060 RETURN
7070 '
7080 REM Personalization Occurs Here
7090 FOR ISC = 0 TO NSCR-1
7100  LOW = LDIM+1 : TOP = UDIM
7110  GOSUB 7130  'to Print
7120  GOTO 7270  'to Obtain User Input
7130  FOR JSC = LOW TO TOP
7140   THISONE = (ISC*UDIM)+JSC
7150   LOCATE 4+JSC,3 : PRINT SPACE$(37);
7160   NMBR$ = SPACE$(3)
7170   COLOR K,W
7180   RSET NMBR$ = RIGHT$(STR$(THISONE),3)
7190   LOCATE 4+JSC,3 : PRINT NMBR$;
7200   COLOR G,K
7210   PRINT " ";
7220   IF VT = 2 THEN PRINT VECT2$(THISONE);
7230   IF VT = 3 THEN PRINT VECT3$(THISONE);
7240  NEXT JSC
7250  COLOR W,K
7260  RETURN
7270  FOR KSC = LDIM+1 TO UDIM
7280   THATONE = (ISC*UDIM)+KSC
7290   GOSUB 12840 : LOCATE 23,1
7300   PRINT "Enter the ";MESSB$;THATONE;"Description: ";
7310   LINE INPUT "", REPLY$
7320   IF REPLY$ = CHR$(34)+" "+CHR$(34) THEN REPLY$ = " "
7330   REPLY$ = LEFT$(REPLY$,32)
7340   IF REPLY$ = "/" THEN KSC = UDIM : ISC = NSCR-1 : GOTO 7400
7350   IF REPLY$ = "\" THEN KSC = UDIM : GOTO 7400
7360   IF REPLY$ = "" THEN 7390
7370   IF VT = 2 THEN VECT2$(THATONE) = REPLY$
7380   IF VT = 3 THEN VECT3$(THATONE) = REPLY$
7390   LOW = (KSC +1 MOD UDIM) -1 : TOP = LOW : GOSUB 7130  'to Print
7400  NEXT KSC
7410 NEXT ISC
7420 RETURN
7430 '
7440 REM
7450 REM Draw the Form
7460 GOSUB 3720
7470 LOCATE 2,3 : PRINT "Update the ";MESSB$;" Descriptions";
7480 COLOR K,W : LOCATE 4, 7 : PRINT MESSB$;" Descriptions";
7490 COLOR W,K
7500 LOCATE 24,1 : PRINT "('enter' to leave alone, '/ enter' to end description,)";
7510 LOCATE 25,1 : PRINT "('\ enter' for partial list, or reply as shown.)";
7520 RETURN
7530 '
7540 REM Routine to Update Vector3
7550 KEY ON : CLS : KEY OFF
7560 MESSA$ = MSG$(2) : MESSB$ = MSG$(22)
7570 GOSUB 7450 'To draw the boxes
7580 VT = 3 : AR = 0 : NSCR = VSCR
7590 GOSUB 7080  'For Personalization
7600 GOTO 7620
7610 '
7620 REM Let User decide whether to save, ignore, or do some more
7630 GOSUB 12830
7640 GOSUB 12850 : GOSUB 12860
7650 GOSUB 12840 : LOCATE 23,1
7660 LINE INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key: ", REPLY$
7670 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7490 : GOTO 7580
7680 IF LEFT$(REPLY$,1) = "M" THEN GOSUB 7490 : GOTO 7580
7690 IF LEFT$(REPLY$,1) = "f" THEN 7760
7700 IF LEFT$(REPLY$,1) = "F" THEN 7760
7710 IF LEFT$(REPLY$,1) = "s" THEN 7860
7720 IF LEFT$(REPLY$,1) = "S" THEN 7860
7730 LOCATE 22,1 : PRINT "Error in Reply"
7740 GOTO 7640  'For better Response
7750 '
7760 REM User wants to Forget
7770 REM Refresh the File
7780 OPEN DD.TYPE$+"typefile" FOR INPUT AS #2
7790 FOR R = LDIM TO VSCR*UDIM
7800  LOCATE 22,1 : PRINT "Refreshing the ";MESSB$;R;"description.";
7810  LINE INPUT #2, VECT3$(R)
7820 NEXT R
7830 CLOSE #2
7840 GOTO 7940  'to complete types
7850 '
7860 REM the User Wants the new Types Saved
7870 OPEN DD.TYPE$+"typefile" FOR OUTPUT AS #2
7880 FOR R = LDIM TO VSCR*UDIM
7890  LOCATE 22,1 : PRINT "Saving the ";MESSB$;R;"description.";
7900  PRINT #2, VECT3$(R)
7910 NEXT R
7920 CLOSE #2
7930 '
7940 REM Completed Types Update.
7950 GOTO 2230  'Return to Main Menu
7960 '
7970 REM Routine to Update the Sources
7980 KEY ON : CLS : KEY OFF
7990 MESSA$ = MSG$(5) : MESSB$ = MSG$(20)
8000 GOSUB 7450 'To draw the boxes
8010 VT = 2 : AR = 0 : NSCR = VSCR
8020 GOSUB 7080  'For Personalization
8030 GOTO 8050
8040 '
8050 REM Let User decide whether to save, ignore, or do some more
8060 GOSUB 12830
8070 GOSUB 12850 : GOSUB 12860
8080 GOSUB 12840 : LOCATE 23,1
8090 LINE INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key: ", REPLY$
8100 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7490 : GOTO 8010
8110 IF LEFT$(REPLY$,1) = "M" THEN GOSUB 7490 : GOTO 8010
8120 IF LEFT$(REPLY$,1) = "f" THEN 8190
8130 IF LEFT$(REPLY$,1) = "F" THEN 8190
8140 IF LEFT$(REPLY$,1) = "s" THEN 8290
8150 IF LEFT$(REPLY$,1) = "S" THEN 8290
8160 LOCATE 22,1 : PRINT "Error in Reply"
8170 GOTO 8070  'for better reply
8180 '
8190 REM User wants to Forget
8200 REM Refresh the File
8210 OPEN DD.SOUR$+"sourfile" FOR INPUT AS #2
8220 FOR R = LDIM TO VSCR*UDIM
8230  LOCATE 22,1 : PRINT "Refreshing the ";MESSB$;R;"description.";
8240  LINE INPUT #2, VECT2$(R)
8250 NEXT R
8260 CLOSE #2
8270 GOTO 8370  'to complete Sources
8280 '
8290 REM the User Wants the new Sources Saved
8300 OPEN DD.SOUR$+"sourfile" FOR OUTPUT AS #2
8310 FOR R = LDIM TO VSCR*UDIM
8320  LOCATE 22,1 : PRINT "Saving the ";MESSB$;R;"description.";
8330  PRINT #2, VECT2$(R)
8340 NEXT R
8350 CLOSE #2
8360 '
8370 REM Completed Sources Update.
8380 GOTO 2230  'Return to Main Menu
8390 '
8400 REM Routine to Obtain the Inquiry from the User
8410 KEY ON : CLS : KEY OFF
8420 REM Draw the Form
8430 GOSUB 3720
8440 LOCATE 2,3 : PRINT "Request for Notes to be Displayed or Printed";
8450 '
8460 REM Establish all inquiry selections as a -1
8470 SHOW0 = -1 : SHOW1 = -1 : SHOW2 = -1
8480 SHOW3 = -1 : SHOW4 = -1 : SHOW5 = -1
8490 Q1  = 0  : Q2$ = ""
8500 Q3$ = "" : Q8$ = ""
8510 '
8520 REM Determine whether to print all of select
8530 COLOR K,W : LOCATE 4, 42 : PRINT "Choices" : COLOR W,K
8540 GOSUB 12840 : LOCATE 23,1
8550 LINE INPUT "Type a (all) or s (some) notes, and press the 'enter' key: ",REPLY$
8560 IF LEFT$(REPLY$,1) = "a" THEN 8630
8570 IF LEFT$(REPLY$,1) = "A" THEN 8630
8580 IF LEFT$(REPLY$,1) = "s" THEN 8680
8590 IF LEFT$(REPLY$,1) = "S" THEN 8680
8600 LOCATE 22,1 : PRINT "Error in Reply";
8610 GOTO 8540  'for better reply
8620 '
8630 REM User wants all Records.
8640 LOCATE 5,42 : PRINT SPACE$(36);
8650 LOCATE 5,42 : PRINT "Choose all notes.";
8660 GOTO 8740  'rejoin
8670 '
8680 REM user wants only Some records.
8690 LOCATE 5,42 : PRINT SPACE$(36);
8700 LOCATE 5,42 : PRINT "Choose all notes,";
8710 LOCATE 6,44 : PRINT SPACE$(34);
8720 LOCATE 6,44 : PRINT "Where:";
8730 SHOW0 = 0
8740 GOSUB 12830
8750 GOSUB 12840 : GOSUB 12850 : GOSUB 12860
8760 '
8770 REM Now find out just which selection is wanted.
8780 COLOR O,K
8790 LOCATE 8,42 : PRINT MSG$(7);
8800 COLOR G,K
8810 IF SHOW0 = -1 THEN LOCATE 8,55 : PRINT "(all)"; : GOTO 9560
8820 '
8830 REM Select Person Record
8840 VT = 1 : ROW = 8 : VSCR = PSCR
8850 MESS$ = MSG$(1)
8860 GOSUB 9040
8870 IF REPLY$ = "" THEN 9030
8880 SHOW1 = SHOWS
8890 COLOR G,K
8900 GOSUB 1960 'Open
8910 GET #2, SHOW1
8920 Q1  = CVS(P1$)
8930 Q2$ = P2$
8940 RTRM$ = Q2$ : GOSUB 12950 : Q2$ = RTRM$
8950 Q3$ = P3$
8960 RTRM$ = Q3$ : GOSUB 12950 : Q3$ = RTRM$
8970 Q8$ = P8$  'Birthdate
8980 CLOSE #2
8990 LOCATE ROW+0,55 : PRINT Q1;
9000 LOCATE ROW+1,46 : PRINT Q3$;
9010 LOCATE ROW+2,46 : PRINT Q2$;
9020 LOCATE ROW+3,46 : PRINT Q8$;
9030 GOTO 9560
9040 REM Show the Choices of Persons
9050 LOCATE 4,3 : PRINT SPACE$(37);
9060 COLOR K,W : LOCATE 4,8 : PRINT MESS$;" Descriptions"; : COLOR W,K
9070 ADJUST = -UDIM : GOSUB 6100 : GOTO 9340
9080 '
9090 REM Now list the current descriptions
9100 GOSUB 1960 'Open
9110 FOR R = LDIM + 1 TO UDIM
9120  IF R+ADJUST > MAX.PER THEN R = UDIM : GOTO 9310
9130  LOCATE 4+R,3 : PRINT SPACE$(37);
9140  NMBR$ = SPACE$(4)
9150  COLOR K,W
9160  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),4)
9170  LOCATE 4+R,3 : PRINT NMBR$;
9180  COLOR G,K
9190  PRINT " ";
9200  IF VT = 1 THEN 9210 ELSE 9290
9210  REM Get a Record from the Persons File
9220  GET #2, R+ADJUST
9230  Q1  = CVS(P1$)
9240  Q2$ = P2$
9250  RTRM$ = Q2$ : GOSUB 12950 : Q2$ = RTRM$
9260  Q3$ = P3$
9270  RTRM$ = Q3$ : GOSUB 12950 : Q3$ = RTRM$
9280  PRINT LEFT$(Q3$+" "+Q2$,32);
9290  IF VT = 2 THEN PRINT VECT2$(R+ADJUST);
9300  IF VT = 3 THEN PRINT VECT3$(R+ADJUST);
9310 NEXT R
9320 CLOSE #2
9330 COLOR W,K
9340 GOSUB 12830
9350 GOSUB 12840 : GOSUB 12850
9360 GOSUB 12860
9370 REM Obtain User Selection of vector
9380 LOCATE 24,1 : PRINT "('enter' for (all),";
9390 IF ADJUST >= (VSCR-1)*UDIM THEN PRINT ")"; : GOTO 9410
9400 PRINT " '\ enter' for partial list,)";
9410 LOCATE 25,1 : PRINT "(or reply as shown.)";
9420 LOCATE 23,1 : PRINT "Enter the ";MESS$;" Number: ";
9430 LINE INPUT "", REPLY$
9440 IF REPLY$ = "" THEN COLOR G,K : LOCATE ROW,55 : PRINT "(all)" : COLOR W,K : GOTO 9540
9450 IF REPLY$ <> "\" THEN 9490
9460 ADJUST = ADJUST + UDIM
9470 IF ADJUST >= VSCR*UDIM THEN 9490
9480 GOTO 9090  'For more choices
9490 SHOWS = VAL(REPLY$)
9500 IF VT = 1 AND SHOWS > MAX.PER THEN 9520
9510 IF SHOWS < LDIM +1 OR SHOWS > VSCR*UDIM THEN 9520 ELSE 9540
9520 LOCATE 22,1 : PRINT "Number";SHOWS;"is out of range";
9530 GOTO 9070  'for better reply
9540 RETURN
9550 '
9560 REM continue after transfer
9570 '
9580 REM Obtain Source Selection
9590 GOSUB 12830
9600 GOSUB 12840
9610 GOSUB 12860
9620 REM Now find out just which selection is wanted.
9630 COLOR O,K
9640 LOCATE 13,42 : PRINT SPACE$(36);
9650 LOCATE 13,42 : PRINT MSG$(10);
9660 COLOR G,K
9670 IF SHOW0 = -1 THEN LOCATE 13,55 : PRINT "(all)"; : GOTO 9870
9680 REM Show the Choices
9690 LOCATE 4,3 : PRINT SPACE$(37);
9700 COLOR K,W : LOCATE 4, 8 : PRINT MSG$(5);" Descriptions"; : COLOR W,K
9710 ADJUST = -UDIM : GOSUB 6100
9720 '
9730 REM Now list the current descriptions
9740 REM Select Sources
9750 VT = 2 : ROW = 13 : VSCR = 21
9760 MESS$ = MSG$(20)
9770 GOSUB 9340
9780 IF REPLY$ = "" THEN 9850
9790 SHOW4 = SHOWS
9800 COLOR G,K
9810 LOCATE ROW,55 : PRINT SPACE$(6);
9820 LOCATE ROW,55 : PRINT SHOW4;
9830 LOCATE ROW+1,46 : PRINT SPACE$(32);
9840 LOCATE ROW+1,46 : PRINT VECT2$(SHOW4);
9850 GOTO 9870
9860 '
9870 REM Obtain Type Selection
9880 GOSUB 12830
9890 GOSUB 12840
9900 GOSUB 12860
9910 REM Now find out just which selection is wanted.
9920 COLOR O,K
9930 LOCATE 15,42 : PRINT SPACE$(36);
9940 LOCATE 15,42 : PRINT MSG$(12);
9950 COLOR G,K
9960 IF SHOW0 = -1 THEN LOCATE 15,55 : PRINT "(all)"; : GOTO 10150
9970 REM Show the Choices
9980 LOCATE 4,3 : PRINT SPACE$(37);
9990 COLOR K,W : LOCATE 4, 8 : PRINT MSG$(2);" Descriptions"; : COLOR W,K
10000 ADJUST = -UDIM : GOSUB 6100
10010 REM Now list the current Types
10020 REM Select Vector 3
10030 VT = 3 : ROW = 15 : VSCR = 21
10040 MESS$ = MSG$(22)
10050 GOSUB 9340
10060 IF REPLY$ = "" THEN 10130
10070 SHOW5 = SHOWS
10080 COLOR G,K
10090 LOCATE ROW,55 : PRINT SPACE$(6);
10100 LOCATE ROW,55 : PRINT SHOW5;
10110 LOCATE ROW+1,46 : PRINT SPACE$(32);
10120 LOCATE ROW+1,46 : PRINT VECT3$(SHOW5);
10130 GOTO 10150
10140 '
10150 REM Blank the left side of the screen
10160 COLOR W,K
10170 FOR R = LDIM TO UDIM
10180  LOCATE 4+R,3 : PRINT SPACE$(37);
10190 NEXT R
10200 '
10210 REM Now determine location of output
10220 GOSUB 12830
10230 GOSUB 12840
10240 GOSUB 12850
10250 GOSUB 12860
10260 LOCATE 24,1 : PRINT "and press the 'enter' key"; : LOCATE 23,1
10270 LINE INPUT "Type d (display), p (print), m (more), f (forget): ", REPLY$
10280 IF LEFT$(REPLY$,1) = "f" THEN 2230  'Return to main menu
10290 IF LEFT$(REPLY$,1) = "F" THEN 2230  'Return to main menu
10300 IF LEFT$(REPLY$,1) = "m" THEN 8400  'Reform the entire inquiry
10310 IF LEFT$(REPLY$,1) = "M" THEN 8400  'Reform the entire inquiry
10320 IF LEFT$(REPLY$,1) = "p" THEN OPEN "lpt1:" FOR OUTPUT AS #3 : WHERE.SHOW = 2 : GOTO 10390
10330 IF LEFT$(REPLY$,1) = "P" THEN OPEN "lpt1:" FOR OUTPUT AS #3 : WHERE.SHOW = 2 : GOTO 10390
10340 IF LEFT$(REPLY$,1) = "d" THEN OPEN "scrn:" FOR OUTPUT AS #3 : WHERE.SHOW = 1 : GOTO 10390
10350 IF LEFT$(REPLY$,1) = "D" THEN OPEN "scrn:" FOR OUTPUT AS #3 : WHERE.SHOW = 1 : GOTO 10390
10360 LOCATE 22,1 : PRINT "Error in Reply";
10370 GOTO 10230
10380 '
10390 REM Routine to read the records and select those whose criteria match
10400 GOSUB 1850  'To Open the File and Set the Field
10410 IF WHERE.SHOW = 1 THEN KEY ON : CLS : KEY OFF
10420 '
10430 REM Constants
10440 SHOWN = 0 : PRINTED = 0
10450 PAGE.NO = 1 : SCREEN.NO = 1
10460 '
10470 REM Begin Output
10480 GOSUB 10790  'to Print the Titles
10490 FOR RR = 1 TO HIGH.REC
10500  GET #1, RR
10510  T1 = CVD(F1$)
10520  IF WHERE.SHOW = 2 THEN 10530 ELSE 10550
10530  GOSUB 12840 : GOSUB 12850
10540  LOCATE 23,1 : PRINT "Searching Record: "; RR;
10550  IF T1 < 0 THEN 11690
10560  '
10570  REM Now do the selection
10580  IF SHOW0 = -1 THEN 10750  'bypass testing.  Want everything.
10590  '
10600  REM Test Persons
10610  IF SHOW1 = -1 THEN 10650  'any
10620  T2 = CVI(F2$)
10630  IF SHOW1 = T2 THEN 10650 ELSE 11690
10640  '
10650  REM Test Sources
10660  IF SHOW4 = -1 THEN 10700
10670  T5 = CVI(F5$)
10680  IF SHOW4 = T5 THEN 10700 ELSE 11690
10690  '
10700  REM Test Types
10710  IF SHOW5 = -1 THEN 10750
10720  T7 = CVI(F7$)
10730  IF SHOW5 = T7 THEN 10750 ELSE 11690
10740  '
10750  REM Have Satisfied the Test Requirements, so Print
10760  GOSUB 6980
10770  GOTO 11070  'to continue
10780  '
10790  REM Routine to print the Sreeen titles
10800  PRINT #3, TITLE$ + "      ";DATE$;"     ";TIME$;
10810  IF WHERE.SHOW = 1 THEN PRINT #3, "     Screen ";SCREEN.NO
10820  IF WHERE.SHOW = 2 THEN PRINT #3, "     Page ";PAGE.NO
10830  IF WHERE.SHOW = 1 THEN PRINT #3, "Display all notes";
10840  IF WHERE.SHOW = 2 THEN PRINT #3, "Print all notes";
10850  IF WHERE.SHOW = 2 THEN LOCATE 25,1 : PRINT "Press 'Esc' to quit at end of record.";
10860  PRINT #3, " containing items whose:"
10870  COLOR O,K : PRINT #3, MSG$(31); : COLOR G,K
10880  IF SHOW1 <> -1 THEN 10890 ELSE PRINT #3, "(all)" : GOTO 11000
10890 GOSUB 1960 'Open
10900 GET #2, SHOW1
10910 Q1  = CVS(P1$)
10920 Q2$ = P2$
10930  RTRM$ = Q2$ : GOSUB 12950 : Q2$ = RTRM$
10940 Q3$ = P3$
10950  RTRM$ = Q3$ : GOSUB 12950 : Q3$ = RTRM$
10960 Q8$ = P8$
10970 CLOSE #2 : COLOR G,K : PRINT #3, LEFT$(Q3$+" "+Q2$,48);
10980 COLOR O,K : PRINT #3, TAB(60); "Birth: ";
10990 COLOR G,K : PRINT #3, Q8$
11000  COLOR O,K: PRINT #3, MSG$(30);: COLOR G,K
11010  IF SHOW4 <> -1 THEN PRINT #3, VECT2$(SHOW4) ELSE PRINT #3,"(all)"
11020  COLOR O,K : PRINT #3, MSG$(33);: COLOR G,K
11030  IF SHOW5 <> -1 THEN PRINT #3, VECT3$(SHOW5) ELSE PRINT #3,"(all)"
11040  COLOR P,K : PRINT #3, STRING$(79,"=") : COLOR W,K
11050  RETURN
11060  '
11070  REM Display or Print the Selected Records
11080  REM Print the First Line of the Selected Record
11090  COLOR O,K : PRINT #3, "Note Number: ";
11100  COLOR K,W : PRINT #3, T1;
11110  COLOR O,K : PRINT #3, TAB(23); MSG$(25);" Date: ";
11120  COLOR G,K : PRINT #3, T8$;
11130  COLOR O,K : PRINT #3, TAB(52); MSG$(18);" Date: ";
11140  COLOR G,K : PRINT #3, T10$
11150  '
11160  REM Print the Second Line
11170  COLOR O,K : PRINT #3, MSG$(34);
11180 GOSUB 1960 'Open
11190 IF T2 >= 1 THEN 11220
11200 Q1 = 0 : Q2$ = "" : Q3$ = "" : Q8$ = ""
11210 GOTO 11290
11220 GET #2, T2
11230 Q1  = CVS(P1$)
11240 Q2$ = P2$
11250 RTRM$ = Q2$ : GOSUB 12950 : Q2$ = RTRM$
11260 Q3$ = P3$
11270 RTRM$ = Q3$ : GOSUB 12950 : Q3$ = RTRM$
11280 Q8$ = P8$
11290 CLOSE #2
11300  COLOR G,K : PRINT #3, LEFT$(Q3$+" "+Q2$,50);
11310  COLOR O,K : PRINT #3, TAB(60);"Birth: ";
11320  COLOR G,K : PRINT #3, Q8$
11330  '
11340  REM Print the Third Line
11350  COLOR O,K : PRINT #3, MSG$(35);
11360  COLOR G,K : PRINT #3, VECT2$(T5)
11370  '
11380  REM Print the Fourth Line
11390  COLOR O,K : PRINT #3, MSG$(37);
11400  COLOR G,K : PRINT #3, VECT3$(T7)
11410  '
11420  REM Print the Fifth Line
11430  COLOR O,K : PRINT #3, MSG$(38);
11440  COLOR G,K : PRINT #3, T11$
11450  '
11460  REM print a separator
11470  COLOR P,K : PRINT #3, STRING$(79,"=");
11480  COLOR W,K
11490 '
11500  REM reset the parameters
11510  Q1 = 0 : Q2$ = ""
11520  Q3$ = "" : Q8$ = ""
11530  '
11540  REM Update the Number or records displayed or printed
11550  SHOWN = SHOWN + 1
11560  PRINTED = PRINTED + 1
11570  IF SHOWN MOD 3 = 0 AND WHERE.SHOW = 1 THEN 11600
11580  IF PRINTED MOD 8 = 0 AND WHERE.SHOW = 2 THEN 11660 ELSE 11680
11590  '
11600  REM Bottom of Page Routine
11610  LOCATE 25,1 : PRINT "Press 'Esc' to quit, or press any other key to continue";
11620  A$ = INKEY$ : IF A$ = CHR$(27)  THEN RR = HIGH.REC : GOTO 11690
11630  IF A$ = "" THEN 11620
11640  IF WHERE.SHOW = 1 THEN SCREEN.NO = SCREEN.NO + 1 : PRINT #3,
11650  KEY ON : CLS : KEY OFF
11660  IF WHERE.SHOW = 2 THEN PAGE.NO = PAGE.NO + 1 : PRINT #3, PAGE.EJECT$;
11670  GOSUB 10790  'for Screen Titles
11680  A$ = INKEY$ : IF A$ = CHR$(27) THEN RR = HIGH.REC
11690 NEXT RR
11700 IF WHERE.SHOW = 1 THEN PRINT : PRINT "Search Completed."
11710 '
11720 REM Display or Print the Summarization
11730 IF WHERE.SHOW = 1 THEN 11860  ' for Display
11740 REM Print the Summarization
11750 PAGE.NO = PAGE.NO + 1 : LPRINT CHR$(12);
11760 FOR WAIT4 = 1 TO 2000 : NEXT WAIT4
11770 GOSUB 10790  ' To Print the Page Titles
11780  COLOR W,K : PRINT #3, "Summary of the Results of the Inquiry"
11790  COLOR O,K : PRINT #3, "Number of Notes Meeting the Criteria = ";
11800  COLOR G,K : PRINT #3, PRINTED
11810  COLOR W,K
11820 '
11830 REM Printing, so do a page-eject
11840 PRINT #3, PAGE.EJECT$; : GOTO 11990 'to close the files
11850 '
11860 REM Displaying, so pause at end of the search.
11870 GOSUB 12860
11880 LOCATE 25,1 : PRINT "Press any key to continue";
11890 A$ = INKEY$ : IF A$ = "" THEN 11890
11900 '
11910 REM Display the Totals
11920  SCREEN.NO = SCREEN.NO + 1 : CLS : GOSUB 10790  'For Titles
11930  COLOR W,K : PRINT #3, "Summary of the Results of the Inquiry"
11940  COLOR O,K : PRINT #3, "Number of Notes Meeting the Criteria = ";
11950  COLOR G,K : PRINT #3, SHOWN
11960  COLOR W,K
11970 LOCATE 25,1 : PRINT "Press any key to continue";
11980 A$ = INKEY$ : IF A$ = "" THEN 11980
11990 CLOSE #3
12000 CLOSE #1
12010 GOTO 2230  'Return to Main Menu
12020 '
12030 REM Routine to draw a double box
12040 COLOR P,K
12050 FOR I = R1 + 1 TO R2 - 1
12060  LOCATE I, C1 : PRINT CHR$(186);
12070  LOCATE I, C2 : PRINT CHR$(186);
12080 NEXT I
12090 FOR J = C1 + 1 TO C2 - 1
12100  LOCATE R1, J : PRINT CHR$(205);
12110  LOCATE R2, J : PRINT CHR$(205);
12120 NEXT J
12130  LOCATE R1, C1 : PRINT CHR$(201);
12140  LOCATE R1, C2 : PRINT CHR$(187);
12150  LOCATE R2, C1 : PRINT CHR$(200);
12160  LOCATE R2, C2 : PRINT CHR$(188);
12170 COLOR W,K
12180 RETURN
12190 '
12200 REM Routine to draw a single box
12210 COLOR P,K
12220 FOR I = R1 + 1 TO R2 - 1
12230  LOCATE I, C1 : PRINT CHR$(179);
12240  LOCATE I, C2 : PRINT CHR$(179);
12250 NEXT I
12260 FOR J = C1 + 1 TO C2 - 1
12270  LOCATE R1, J : PRINT CHR$(196);
12280  LOCATE R2, J : PRINT CHR$(196);
12290 NEXT J
12300  LOCATE R1, C1 : PRINT CHR$(218);
12310  LOCATE R1, C2 : PRINT CHR$(191);
12320  LOCATE R2, C1 : PRINT CHR$(192);
12330  LOCATE R2, C2 : PRINT CHR$(217);
12340 COLOR W,K
12350 RETURN
12360 '
12370 REM Routine to draw a double horizontal line.  Attach to double.
12380 COLOR P,K
12390 FOR J = C1 + 1 TO C2 - 1
12400  LOCATE R1,J : PRINT CHR$(205);
12410 NEXT J
12420 LOCATE R1,C1 : PRINT CHR$(204);
12430 LOCATE R1,C2 : PRINT CHR$(185);
12440 COLOR W,K
12450 RETURN
12460 '
12470 REM Routine to draw a single horizontal line.  Attach to double.
12480 COLOR P,K
12490 FOR J = C1 + 1 TO C2 - 1
12500  LOCATE R1,J : PRINT CHR$(196);
12510 NEXT J
12520 LOCATE R1,C1 : PRINT CHR$(199);
12530 LOCATE R1,C2 : PRINT CHR$(182);
12540 COLOR W,K
12550 RETURN
12560 '
12570 REM Routine to draw a double vertical line.  Attach to double.
12580 COLOR P,K
12590 FOR I = R1 + 1 TO R2 - 1
12600  LOCATE I,C1 : PRINT CHR$(186);
12610 NEXT I
12620 LOCATE R1,C1 : PRINT CHR$(203);
12630 LOCATE R2,C1 : PRINT CHR$(202);
12640 COLOR W,K
12650 RETURN
12660 '
12670 REM Routine to draw a single vertical line.  Attach to double.
12680 COLOR P,K
12690 FOR I = R1 + 1 TO R2 - 1
12700  LOCATE I,C1 : PRINT CHR$(179);
12710 NEXT I
12720 LOCATE R1,C1 : PRINT CHR$(209);
12730 LOCATE R2,C1 : PRINT CHR$(207);
12740 COLOR W,K
12750 RETURN
12760 '
12770 REM Program Wrapup
12780 KEY ON : CLS : KEY OFF : LOCATE 21,1
12790 PRINT "End of Program"
12800 GOTO 13040
12810 '
12820 REM Cleaning of Bottom Lines
12830 LOCATE 22,1 : PRINT SPACE$(79); : RETURN
12840 LOCATE 23,1 : PRINT SPACE$(79); : RETURN
12850 LOCATE 24,1 : PRINT SPACE$(79); : RETURN
12860 LOCATE 25,1 : PRINT SPACE$(79); : RETURN
12870 '
12880 REM Routine to File the new Maximums
12890 OPEN DD.HIGH$+"high" FOR OUTPUT AS #3
12900  PRINT #3, MAX.REC
12910  PRINT #3, HIGH.REC
12920 CLOSE #3
12930 RETURN
12940 '
12950 REM Generalized Right-trim routine
12960 ANY = 0  'Test value if empty
12970 FOR TRIM = LEN(RTRM$) TO 1 STEP -1
12980  IF MID$(RTRM$,TRIM,1) = " " THEN 13010
12990  RTRM$ = LEFT$(RTRM$,TRIM)
13000  ANY = 1 : TRIM = 1
13010 NEXT TRIM
13020 IF ANY = 0 THEN RTRM$ = ""
13030 RETURN
13040 END
```

## OVERVIEW.BAS

```bas
100 REM Overview Program for Notes and Sources ON DISPLAY
110 REM By:  Melvin O. Duke.  Last Updated 20 June 1986
120 KEY OFF
130 SCREEN 0,1,0,0
140 SCREEN 1 : COLOR 1 : CLS
150 LOCATE  4, 6 : PRINT "Notes and Sources ON DISPLAY";
160 LOCATE  6,14 : PRINT "Version 1.1";
170 LOCATE 10, 8 : PRINT "A User-Supported Program";
180 LOCATE 14,10 : PRINT "By:  Melvin O. Duke";
190 LOCATE 16,12 : PRINT "P.O. Box 20836";
200 LOCATE 18,10 : PRINT "San Jose, CA  95160";
210 LOCATE 20,12 : PRINT "(408) 268-6637";
220 LOCATE 23, 1 : PRINT "Press the escape key (Esc) to end, or";
230 LOCATE 24, 1 : PRINT "Press any key to continue at each pause";
240 GOSUB 2760 'pause
250 CLS
260 LOCATE  1,10 : PRINT "CAPABILITIES";
270 LOCATE  4, 2 : PRINT "ENTER NOTES";
280 LOCATE  7,10 : PRINT "Your Persons";
290 LOCATE  9,15 : PRINT "From Genealogy ON DISPLAY";
300 LOCATE 12,10 : PRINT "Your Sources";
310 LOCATE 14,15 : PRINT "You Personalize";
320 LOCATE 17,10 : PRINT "Your Types";
330 LOCATE 19,15 : PRINT "You Personalize";
340 GOSUB 2760 'pause
350 CLS
360 LOCATE  1,10 : PRINT "CAPABILITIES, Cont.";
370 LOCATE  4, 2 : PRINT "ENTER NOTES, Cont.";
380 LOCATE  7,10 : PRINT "Enter Dates";
390 LOCATE  9,15 : PRINT "Date of Research";
400 LOCATE 11,15 : PRINT "Date of Event";
410 LOCATE 14,10 : PRINT "Enter the Note";
420 LOCATE 16,15 : PRINT "One line per note";
430 GOSUB 2760 'pause
440 CLS
450 LOCATE  1,10 : PRINT "CAPABILITIES, Cont.";
460 LOCATE  4, 2 : PRINT "INQUIRE INTO NOTES";
470 LOCATE  7,10 : PRINT "Select a Person, or (all)";
480 LOCATE  9,10 : PRINT "Select a Source, or (all)";
490 LOCATE 11,10 : PRINT "Select a Type, or (all)";
500 GOSUB 2760 'pause
510 LOCATE 14, 2 : PRINT "OUTPUT";
520 LOCATE 16,10 : PRINT "On the Display Screen";
530 LOCATE 18,10 : PRINT "On the Printer";
540 GOSUB 2760 'pause
550 LOCATE 21, 2 : PRINT "SUMMARY";
560 LOCATE 23,10 : PRINT "Notes Meeting Criteria";
570 GOSUB 2760 'pause
580 CLS
590 LOCATE  2,10 : PRINT "PRINCIPLES";
600 LOCATE  6, 2 : PRINT "Separate Unique from non-Unique";
610 LOCATE  8, 4 : PRINT "Information.";
620 GOSUB 2760 'pause
630 LOCATE 13, 2 : PRINT "Unique information to be parts of";
640 LOCATE 15, 4 : PRINT "Note Records.";
650 GOSUB 2760 'pause
660 LOCATE 20, 2 : PRINT "Non-unique information to be in";
670 LOCATE 22, 4 : PRINT "Separate Files.";
680 GOSUB 2760 'pause
690 CLS
700 LOCATE  2,10 : PRINT "FILES:";
710 LOCATE  6, 2 : PRINT "NOTE FILE";
720 LOCATE  8,10 : PRINT "Format 100 Records at a time";
730 LOCATE 10,10 : PRINT "As Many as Disk Space";
740 LOCATE 12,10 : PRINT "Can use Multiple Disks";
750 GOSUB 2760 'pause
760 LOCATE 16, 2 : PRINT "HIGH FILE";
770 LOCATE 18,10 : PRINT "Keeps Track of Notes Used";
780 GOSUB 2760 'pause
790 CLS
800 LOCATE  2,10 : PRINT "LISTS:";
810 LOCATE  5, 2 : PRINT "List of Persons";
820 LOCATE  7,10 : PRINT "From Genealogy ON DISPLAY";
830 GOSUB 2760 'pause
840 LOCATE 11, 2 : PRINT "List of Sources";
850 LOCATE 13,10 : PRINT "Your own list";
860 GOSUB 2760 'pause
870 LOCATE 17, 2 : PRINT "List of Types";
880 LOCATE 19,10 : PRINT "Your own list";
890 GOSUB 2760 'pause
900 CLS
910 LOCATE  2,10 : PRINT "FILES";
920 LOCATE  6, 2 : PRINT "Records in the Note File";
930 R1 = 7 : C1 =  1 : R2 = 9 : C2 = 40 : GOSUB 2860 'box
940 R1 = 7 : C1 =  5 : R2 = 9 : C2 =  5 : GOSUB 2910 'line
950 R1 = 7 : C1 =  9 : R2 = 9 : C2 =  9 : GOSUB 2860 'line
960 R1 = 7 : C1 = 13 : R2 = 9 : C2 = 13 : GOSUB 2860 'line
970 R1 = 7 : C1 = 17 : R2 = 9 : C2 = 17 : GOSUB 2860 'line
980 R1 = 7 : C1 = 21 : R2 = 9 : C2 = 21 : GOSUB 2860 'line
990 R1 = 7 : C1 = 25 : R2 = 9 : C2 = 25 : GOSUB 2860 'line
1000 LOCATE  8, 2 : PRINT "No.";
1010 LOCATE  8, 6 : PRINT "Per";
1020 LOCATE  8,10 : PRINT "Sou";
1030 LOCATE  8,14 : PRINT "Typ";
1040 LOCATE  8,18 : PRINT "EDt";
1050 LOCATE  8,22 : PRINT "RDt";
1060 LOCATE  8,26 : PRINT "Note Content";
1070 GOSUB 2760 'pause
1080 LOCATE 12, 2 : PRINT "No.     Note Number";
1090 LOCATE 14, 2 : PRINT "Per     Person Number";
1100 LOCATE 16, 2 : PRINT "Sou     Source Number";
1110 LOCATE 18, 2 : PRINT "Typ     Type Number";
1120 LOCATE 20, 2 : PRINT "EDt     Date of Event";
1130 LOCATE 22, 2 : PRINT "RDt     Date of Research";
1140 GOSUB 2760 'pause
1150 CLS
1160 LOCATE  2,10 : PRINT "FILES, Cont.";
1170 LOCATE  5, 2 : PRINT "Sources File";
1180 LOCATE  7,10 : PRINT "252 Different Sources"
1190 LOCATE  9,15 : PRINT "Each is 32 Chars.";
1200 LOCATE 11,10 : PRINT "You Personalize";
1210 GOSUB 2760 'pause
1220 LOCATE 15, 2 : PRINT "Types File"
1230 LOCATE 17,10 : PRINT "252 Different Types"
1240 LOCATE 19,15 : PRINT "Each is 32 Chars.";
1250 LOCATE 21,10 : PRINT "You Personalize";
1260 GOSUB 2760 'pause
1270 CLS
1280 LOCATE  2,10 : PRINT "GETTING STARTED";
1290 LOCATE  8, 2 : PRINT "List of Sources";
1300 LOCATE 12, 2 : PRINT "List of Types";
1310 LOCATE 16, 2 : PRINT "Diskette (for Notes)";
1320 GOSUB 2760 'pause
1330 CLS
1340 LOCATE  2,10 : PRINT "LIST OF SOURCES";
1350 LOCATE  5, 2 : PRINT "Number  Source";
1360 LOCATE  7, 2 : PRINT "  1";
1370 LOCATE  9, 2 : PRINT "  2";
1380 LOCATE 11, 2 : PRINT "  3";
1390 LOCATE 13, 2 : PRINT "  4";
1400 LOCATE 15, 2 : PRINT "  5";
1410 LOCATE 17, 2 : PRINT "  6";
1420 LOCATE 19, 2 : PRINT "  7";
1430 LOCATE 21, 2 : PRINT "  8";
1440 GOSUB 2760 'pause
1450 LOCATE  7,10 : PRINT "State of Ohio";
1460 GOSUB 2760 'pause
1470 LOCATE  9,10 : PRINT "Springfield Cemetery";
1480 GOSUB 2760 'pause
1490 LOCATE 11,10 : PRINT "Church of England";
1500 GOSUB 2760 'pause
1510 CLS
1520 LOCATE  2,10 : PRINT "LIST OF TYPES";
1530 LOCATE  5, 2 : PRINT "Number  Type";
1540 LOCATE  7, 2 : PRINT "  1";
1550 LOCATE  9, 2 : PRINT "  2";
1560 LOCATE 11, 2 : PRINT "  3";
1570 LOCATE 13, 2 : PRINT "  4";
1580 LOCATE 15, 2 : PRINT "  5";
1590 LOCATE 17, 2 : PRINT "  6";
1600 LOCATE 19, 2 : PRINT "  7";
1610 LOCATE 21, 2 : PRINT "  8";
1620 GOSUB 2760 'pause
1630 LOCATE  7,10 : PRINT "Birth Certificate";
1640 GOSUB 2760 'pause
1650 LOCATE  9,10 : PRINT "Death Certificate";
1660 GOSUB 2760 'pause
1670 LOCATE 11,10 : PRINT "Headstone";
1680 GOSUB 2760 'pause
1690 CLS
1700 LOCATE 10,10 : PRINT "LET'S GET STARTED";
1710 GOSUB 2760 'pause
1720 CLS
1730 LOCATE  3, 6 : PRINT "PREPARE YOUR NOTES DISKETTE";
1740 LOCATE  7, 2 : PRINT "FORMAT a Diskette for your data";
1750 LOCATE  9, 6 : PRINT "(Without the System on it)";
1760 LOCATE 11, 6 : PRINT "(Give it a Label if you want to)";
1770 GOSUB 2760 'pause
1780 LOCATE 15, 2 : PRINT "Copy the Distribution Diskette to it";
1790 GOSUB 2760 'pause
1800 LOCATE 19, 2 : PRINT "Erase the Documentation";
1810 GOSUB 2760 'pause
1820 LOCATE 23, 2 : PRINT "Copy the Persons File to it";
1830 GOSUB 2760 'pause
1840 CLS
1850 LOCATE  2,10 : PRINT "BRING UP BASIC";
1860 LOCATE  7, 2 : PRINT "Type:   basic/s:256";
1870 LOCATE  9, 4 : PRINT "and press the 'enter' key.";
1880 LOCATE 13, 4 : PRINT "(Need a 256 byte file buffer"
1890 LOCATE 15, 4 : PRINT " for the Genealogy Records)"
1900 GOSUB 2760 'pause
1910 CLS
1920 LOCATE  2,10 : PRINT "RUN THE NOTESAND PROGRAM";
1930 LOCATE  7, 2 : PRINT "Type:  run ";CHR$(34);"notesand";CHR$(34);
1940 LOCATE  9, 4 : PRINT "and press the 'enter' key.";
1950 GOSUB 2760 'pause
1960 CLS
1970 LOCATE  2,10 : PRINT "CREATE A NOTES FILE";
1980 LOCATE  5, 2 : PRINT "Select Function 1";
1990 GOSUB 2760 'pause
2000 LOCATE  9,10 : PRINT "PERSONALIZE THE SOURCES";
2010 LOCATE 11, 2 : PRINT "Select Function 3";
2020 LOCATE 13, 4 : PRINT "Enter Your Sources";
2030 GOSUB 2760 'pause
2040 LOCATE 17,10 : PRINT "PERSONALIZE THE TYPES";
2050 LOCATE 19, 2 : PRINT "Select Function 4";
2060 LOCATE 21, 4 : PRINT "Enter Your Types";
2070 GOSUB 2760 'pause
2080 CLS
2090 LOCATE 11,10 : PRINT "ENTER YOUR NOTES";
2100 GOSUB 2760 'pause
2110 CLS
2120 LOCATE  2,10 : PRINT "FORM YOUR NOTES";
2130 LOCATE  5, 2 : PRINT "Select Function 5";
2140 GOSUB 2760 'pause
2150 LOCATE  7, 5 : PRINT "Select a Note to Use";
2160 GOSUB 2760 'pause
2170 LOCATE  9, 8 : PRINT "Enter the Note Number";
2180 GOSUB 2760 'pause
2190 LOCATE 11, 8 : PRINT "Enter the Research Date";
2200 GOSUB 2760 'pause
2210 LOCATE 13, 8 : PRINT "Choose a Person";
2220 GOSUB 2760 'pause
2230 LOCATE 15, 8 : PRINT "Choose a Source";
2240 GOSUB 2760 'pause
2250 LOCATE 17, 8 : PRINT "Choose a Type";
2260 GOSUB 2760 'pause
2270 LOCATE 19, 8 : PRINT "Enter the Event Date";
2280 GOSUB 2760 'pause
2290 LOCATE 21, 8 : PRINT "Enter the Note Itself";
2300 GOSUB 2760 'pause
2310 LOCATE 23, 5 : PRINT "Save the Completed Note";
2320 GOSUB 2760 'pause
2330 CLS
2340 LOCATE 11,10 : PRINT "Enter more Notes";
2350 GOSUB 2760 'pause
2360 LOCATE 15,10 : PRINT "When Finished,";
2370 LOCATE 17,12 : PRINT "Choose Note 0";
2380 GOSUB 2760 'pause
2390 CLS
2400 LOCATE 11,10 : PRINT "NOW THE FUN BEGINS";
2410 GOSUB 2760 'pause
2420 CLS
2430 LOCATE  2,10 : PRINT "FORM AN INQUIRY";
2440 LOCATE  5, 2 : PRINT "Select Function 6";
2450 GOSUB 2760 'pause
2460 LOCATE  8, 4 : PRINT "Choose a Person, or";
2470 LOCATE 10, 6 : PRINT "Choose (all) Persons";
2480 GOSUB 2760 'pause
2490 LOCATE 13, 4 : PRINT "Choose a Source, or";
2500 LOCATE 15, 6 : PRINT "Choose (all) Sources";
2510 GOSUB 2760 'pause
2520 LOCATE 18, 4 : PRINT "Choose a Type, or";
2530 LOCATE 20, 6 : PRINT "Choose (all) Types";
2540 GOSUB 2760 'pause
2550 CLS
2560 LOCATE  2,10 : PRINT "SELECT OUTPUT LOCATION";
2570 LOCATE  6, 2 : PRINT "On the Display Screen";
2580 LOCATE  8, 4 : PRINT "3 Notes per Screen";
2590 LOCATE 12, 2 : PRINT "On the Printer";
2600 LOCATE 14, 4 : PRINT "8 Notes per Page";
2610 GOSUB 2760 'pause
2620 CLS
2630 LOCATE 12, 9 : PRINT "SEE THE INQUIRY RESULTS";
2640 GOSUB 2760 'pause
2650 CLS
2660 LOCATE  4, 6 : PRINT "Notes and Sources ON DISPLAY";
2670 LOCATE  6,14 : PRINT "Version 1.1";
2680 LOCATE 10, 8 : PRINT "A User-Supported Program";
2690 LOCATE 14,10 : PRINT "By:  Melvin O. Duke";
2700 LOCATE 16,12 : PRINT "P.O. Box 20836";
2710 LOCATE 18,10 : PRINT "San Jose, CA  95160";
2720 LOCATE 20,12 : PRINT "(408) 268-6637";
2730 LOCATE 23, 1
2740 GOSUB 2760 'pause
2750 GOTO 2790
2760 REM Generalized Pause Routine
2770 A$ = INKEY$
2780 IF A$ = CHR$(27) THEN 2790 ELSE 2830
2790 CLS
2800 SCREEN 0,0,0,0
2810 WIDTH "scrn:",80
2820 GOTO 2960
2830 IF A$ = "" THEN 2770
2840 RETURN
2850 '
2860 REM Generalized Box Routine
2870 REM Entry is R1, C1, R2, C2
2880 LINE (8*C1-4,8*R1-4)-(8*C2-4,8*R2-4),,B
2890 RETURN
2900 '
2910 REM Generalized Line Routine
2920 REM Entry is R1, C1, R2, C2
2930 LINE (8*C1-4,8*R1-4)-(8*C2-4,8*R2-4)
2940 RETURN
2950 '
2960 KEY ON : END
```

## PRINTERS.BAS

```bas
100 LPRINT TAB(10);"Changes to Documentation Programs to support Other Printers."
110 LPRINT
120 LPRINT TAB(10);"Each of the documentation programs contains its own text"
130 LPRINT TAB(10);"processor.  There is a determination of whether each line"
140 LPRINT TAB(10);"is a command (begun with a period) or is normal text."
150 LPRINT TAB(10);"If it is a command, then additional processing is done,"
160 LPRINT TAB(10);"including the use of some of the characterists of the"
170 LPRINT TAB(10);"printer."
180 LPRINT
190 LPRINT TAB(10);"The definitions for the characters which control the"
200 LPRINT TAB(10);"printer are found in lines 180 to 220 in each of the"
210 LPRINT TAB(10);"documentation programs.  They are:"
220 LPRINT
230 LPRINT TAB(10);"Variable Name    Purpose"
240 LPRINT TAB(10);"--------------   -------------------------------"
250 LPRINT TAB(10);"FORM.FEED$       Moves Paper to Top of Next Page"
260 LPRINT TAB(10);"COMPR.ON$        Sets Compressed Printing On"
270 LPRINT TAB(10);"COMPR.OFF$       Sets Compressed Printing Off"
280 LPRINT TAB(10);"BOLD.ON$         Sets Emphasized Printing On"
290 LPRINT TAB(10);"BOLD.OFF$        Sets Emphasized Printing Off"
300 LPRINT TAB(10);"EXPAND.ON$       Sets Expanded Printing On"
310 LPRINT TAB(10);"EXPAND.OFF$      Sets Expanded Printing Off"
320 LPRINT
330 LPRINT TAB(10);"The definitions in the lines of the programs should be"
340 LPRINT TAB(10);"changed to the definitions for the printer which you"
350 LPRINT TAB(10);"will be using."
360 FOR I = 1 TO 40 : LPRINT : NEXT I
370 END
```

## REFERENC.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 DASHES$ = "+"+STRING$(54,45)+"+"
240 TRIM.LINE$ = "(Trim-line)"
250 REM Program begins here
260 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
270 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
280 GOSUB 920  'For trim line and heading space
290 FOR I = 1 TO 6 : LPRINT : NEXT I
300 LPRINT BOLD.ON$;     'Set Emphasized mode
310 LPRINT EXPAND.ON$;   'Set Expanded Print
320 LPRINT TAB(TAB.POS-5);TITLE$
330 LPRINT EXPAND.OFF$;  'Return to normal
340 LPRINT BOLD.OFF$;    'Return to normal
350 FOR I = 1 TO 3 : LPRINT : NEXT I
360 LPRINT BOLD.ON$;     'Set Emphasized mode
370 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
380 LPRINT BOLD.OFF$;    'Return to normal
390 LPRINT : LPRINT : LPRINT
400 LPRINT TAB(TAB.POS+11);"Version 1.1"
410 FOR I = 1 TO 11 : LPRINT : NEXT I
420 LPRINT TAB(TAB.POS+10); DOC.NAME$
430 LINE.NO = LINE.NO + 27
440 '
450 READ REPLY$
460 REM First, change tildes to quotes
470 FOR Q = 1 TO LEN(REPLY$)
480  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
490 NEXT Q
500 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1270: GOTO 450
510 IF LINE.NO > 44 THEN GOSUB 1030
520 REM Print the line if not a command
530 LPRINT TAB(TAB.POS);REPLY$
540 LINE.NO = LINE.NO + 1
550 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
560 GOTO 450
570 DATA ".pa"
580 REM   Data for the Copyright Page
590 DATA "Anyone may request a copy of Notes and"
600 DATA "Sources ON DISPLAY, for trial, by sending"
610 DATA "an unformatted, double-sided, double-"
620 DATA "density, 5-1/4 inch diskette to the"
630 DATA "author of the programs."
640 DATA ".sp"
650 DATA "An addressed, postage-paid return"
660 DATA "mailer must accompany the diskette (no"
670 DATA "exceptions, please).
680 DATA ".sp"
690 DATA "A copy of the programs with documenta-"
700 DATA "tion will be sent by return mail."
710 DATA ".vt 2"
720 DATA "Users are encouraged to copy and share"
730 DATA "the programs with others."
740 DATA ".vt 2"
750 DATA "If you are using this program, you are"
760 DATA "expected to become a Registered User,"
770 DATA "by making a contribution to the author"
780 DATA "of the program ($30.00 suggested for"
790 DATA "Registered Users of Genealogy ON DIS-"
800 DATA "PLAY, otherwise, $45.00 suggested)."
810 DATA ".sp"
820 DATA "Melvin O. Duke"
830 DATA "P. O. Box 20836"
840 DATA "San Jose, CA  95160"
850 DATA "(408) 268-6637"
860 DATA ".vt 3"
870 DATA "Copyright (c) 1986, by:"
880 DATA "Melvin O. Duke."
890 DATA ".sp"
900 DATA "All rights reserved."
910 '
920 REM Top of each page routine
930 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
940 LPRINT
950 LPRINT TAB(30); TRIM.LINE$
960 LPRINT DASHES$ 'Dashes
970 FOR I = 1 TO 6
980  LPRINT
990 NEXT I
1000 LINE.NO = LINE.NO + 6
1010 RETURN
1020 '
1030 REM Bottom of each page Routine
1040 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1160
1050 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1060 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1070 IF PAGE.NO MOD 2 = 1 THEN 1110
1080 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1090 LPRINT TAB(TAB.POS+27);"User's Manual"
1100 GOTO 1160
1110 LPRINT TAB(TAB.POS); "User's Manual";
1120 IF PAGE.NO < 10 THEN DELTA = 34
1130 IF PAGE.NO >  9 THEN DELTA = 33
1140 IF PAGE.NO > 99 THEN DELTA = 32
1150 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1160 LPRINT : LPRINT : LPRINT
1170 LPRINT DASHES$ 'dashes after 51
1180 LPRINT TAB(30); TRIM.LINE$
1190 LPRINT FORM.FEED$;
1200 PAGE.NO = PAGE.NO + 1
1210 LINE.NO = 1
1220 IF REPLY$ = ".eof" THEN 1240  'Bypass after last page
1230 GOSUB 920  'For top of next page
1240 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1250 RETURN
1260 '
1270 REM Command Processor
1280 IF LEFT$(REPLY$,3) = ".h1" THEN 1390
1290 IF LEFT$(REPLY$,3) = ".h2" THEN 1550
1300 IF LEFT$(REPLY$,3) = ".h3" THEN 1660
1310 IF LEFT$(REPLY$,3) = ".sp" THEN 1770
1320 IF LEFT$(REPLY$,4) = ".eof" THEN 1820
1330 IF LEFT$(REPLY$,3) = ".pa" THEN 1850
1340 IF LEFT$(REPLY$,3) = ".pn" THEN PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3)) : RETURN
1350 IF LEFT$(REPLY$,3) = ".vt" THEN 1920
1360 IF LEFT$(REPLY$,3) = ".pk" THEN 2030
1370 IF LEFT$(REPLY$,3) = ".in" THEN 2160
1380 STOP
1390 REM Head 1 Processor
1400 FOR I = LINE.NO TO 44
1410  LPRINT
1420 NEXT I
1430 GOSUB 1030  'Bottom of page Routine
1440 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1850  'For h1 on Odd pages
1450 LPRINT BOLD.ON$;     'Set emphasized print
1460 LPRINT EXPAND.ON$;   'Set expanded print
1470 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1480 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1490 LPRINT EXPAND.OFF$;  'Return to normal
1500 LPRINT BOLD.OFF$;    'Return to non-bold
1510 LINE.NO = LINE.NO+1
1520 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1530 RETURN
1540 '
1550 REM Head 2 Processor
1560 IF LINE.NO = 7 THEN 1580 'skip spacing if at top of page
1570 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1580 LPRINT BOLD.ON$;  'Set emphasized print
1590 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1600 LPRINT BOLD.OFF$; 'Return to normal
1610 LPRINT
1620 LINE.NO = LINE.NO + 2
1630 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1640 RETURN
1650 '
1660 REM Head 3 Processor
1670 IF LINE.NO = 7 THEN 1690 'skip spacing if at top of page
1680 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1690 LPRINT BOLD.ON$;  'Set emphasized print
1700 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1710 LPRINT BOLD.OFF$; 'Return to normal
1720 LPRINT
1730 LINE.NO = LINE.NO + 2
1740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1750 RETURN
1760 '
1770 REM Single Space Processor
1780 IF LINE.NO = 7 THEN 1800
1790 IF LINE.NO > 44 THEN GOSUB 1850 ELSE LPRINT : LINE.NO = LINE.NO + 1
1800 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1810 RETURN
1820 REM End of File Processor
1830 GOSUB 1850 'Bottom of Page
1840 GOTO 7160
1850 REM Page Eject Processor
1860 FOR I = LINE.NO TO 44
1870  LPRINT
1880  LINE.NO = LINE.NO + 1
1890 NEXT I
1900 GOSUB 1030  'Bottom of Page Processing
1910 RETURN
1920 REM Vertical Tab Processor
1930 IF LINE.NO = 7 THEN 2020
1940 IF LINE.NO > 44 THEN GOSUB 1030  'End of page
1950 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1960 FOR I = 1 TO QTY
1970  LPRINT
1980  LINE.NO = LINE.NO + 1
1990  IF LINE.NO > 44 THEN I = QTY
2000 NEXT I
2010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2020 RETURN
2030 REM Pack Processor
2040 IF LINE.NO > 44 THEN GOSUB 1030
2050 IF TAB.POS = 8 THEN ADJUST = 4
2060 IF TAB.POS = 13 THEN ADJUST = 7
2070 TAB.POS = TAB.POS + ADJUST + INDENT
2080 WIDTH "lpt1:", 132 'set condensed width
2090 LPRINT COMPR.ON$;  'Packed printing
2100 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2110 LPRINT COMPR.OFF$; 'Return to normal
2120 WIDTH "lpt1:", 80  'return to normal
2130 LINE.NO = LINE.NO + 1
2140 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2150 RETURN
2160 REM Indent Processor
2170 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2180 RETURN
3000 DATA ".h1 REFERENCE MATERIAL"
3010 DATA ".pn 51"
3020 DATA ".h2 SAMPLE SCREENS AND PROMPTING MESSAGES"
3030 DATA "The following is a sample session, where"
3040 DATA "the user is just beginning, and wants to"
3050 DATA "Create a Note File, and to Personalize"
3060 DATA "his Sources and Types, then he wants to"
3070 DATA "enter Notes, and finally, to Inquire into"
3080 DATA "those notes."
3090 DATA ".vt 2"
3100 DATA "He begins in the normal manner.  He"
3110 DATA "has the DOS Diskette in place, and has"
3120 DATA "Cartridge BASIC in place if he is using"
3130 DATA "a PCjr."
3140 DATA ".sp"
3150 DATA "He turns the system on, and responds to"
3160 DATA "any messages which ask for date and time."
3170 DATA ".sp"
3180 DATA "He then requests BASIC by typing:"
3190 DATA ".sp"
3200 DATA "   basic/s:256"
3210 DATA "       and presses the 'enter' key."
3220 DATA ".sp"
3230 DATA "He replaces the DOS Diskette with the"
3240 DATA "Notes and Sources ON DISPLAY Program"
3250 DATA "Diskette."
3260 DATA ".sp"
3270 DATA "He then starts Notes and Sources ON"
3280 DATA "DISPLAY by typing:"
3290 DATA ".sp"
3300 DATA "   run ~notesand~"
3310 DATA "       and presses the 'enter' key."
3320 DATA ".pa"
3330 DATA "The display screen then appears as:"
3340 DATA ".vt 2"
3350 DATA ".pk                   Notes and Sources ON DISPLAY"
3360 DATA ".pk                           Version 1.1"
3370 DATA ".vt 3"
3380 DATA ".pk    If you are using this program, you are expected to become a"
3390 DATA ".pk   Registered User, by making a contribution to the author of the"
3400 DATA ".pk   program ($30.00 suggested for Registered Users of Genealogy ON"
3410 DATA ".pk              DISPLAY, otherwise, $45.00 suggested)."
3420 DATA ".sp"
3430 DATA ".pk                          Melvin O. Duke"
3440 DATA ".pk                          P. O. Box 20836"
3450 DATA ".pk                        San Jose, CA  95160"
3460 DATA ".pk                          (408) 268-6637"
3470 DATA ".vt 3"
3480 DATA ".pk                        Copyright (c) 1986,"
3490 DATA ".pk                        by: Melvin O. Duke."
3500 DATA ".pk                       All Rights Reserved."
3510 DATA ".vt 2"
3520 DATA ".pk Press any key to continue."
3530 DATA ".vt 2"
3540 DATA "After any key is pressed, the screen is"
3550 DATA "cleared, and four brief messages appear."
3560 DATA "They indicate that four files are being"
3570 DATA "prepared for use."
3580 DATA ".pa"
3590 DATA "The Menu screen now appears, which shows"
3600 DATA "the available functions.  It appears as:"
3610 DATA ".vt 3"
3620 DATA ".in -3"
3630 DATA ".pk No   Available Functions in Notes and Sources ON DISPLAY"
3640 DATA ".vt 2"
3650 DATA ".pk  1   Create a New Note File."
3660 DATA ".sp"
3670 DATA ".pk  2   Extend the Note File by 100 records."
3680 DATA ".sp"
3690 DATA ".pk  3   Personalize or Redefine the Sources"
3700 DATA ".sp"
3710 DATA ".pk  4   Personalize or Redefine the Types"
3720 DATA ".sp"
3730 DATA ".pk  5   Enter or Update Note Information."
3740 DATA ".sp"
3750 DATA ".pk  6   Inquiry for Display or Printing."
3760 DATA ".sp"
3770 DATA ".pk  7   Menu of Functions in: Notes and Sources ON DISPLAY (This screen)."
3780 DATA ".vt 4"
3790 DATA ".pk Type a Function Number (0 to quit), and press the 'enter' key:"
3800 DATA ".in 0"
3810 DATA ".vt 2"
3820 DATA "The user chooses function 1, by typing:"
3830 DATA ".sp"
3840 DATA "   1"
3850 DATA "     and pressing the 'enter' key."
3860 DATA ".pa"
3870 DATA "The user then sees a warning message,"
3880 DATA "letting him know that if he types a y,"
3890 DATA "any existing Note File will no longer"
3900 DATA "exist, as:"
3910 DATA ".vt 3"
3920 DATA ".pk                 ***  WARNING  ***"
3930 DATA ".sp"
3940 DATA ".pk This function creates a new Note File by completely"
3950 DATA ".pk removing the old file (if one exists), and by writing 100 new,"
3960 DATA ".pk empty records.  Only the new file will then exist."
3970 DATA ".sp"
3980 DATA ".pk If this is REALLY what you want to do,"
3990 DATA ".pk type y (yes), and press the 'enter' key."
4000 DATA ".sp"
4010 DATA ".pk Otherwise, type n (no), and press the 'enter' key."
4020 DATA ".vt 4"
4030 DATA ".pk Enter your desired action:"
4040 DATA ".vt 2"
4050 DATA "Since the user is just starting out, and"
4060 DATA "wants a new file created, he types"
4070 DATA ".sp"
4080 DATA "  y"
4090 DATA "    and presses the 'enter' key."
4100 DATA ".sp"
4110 DATA "He then watches, as the program writes"
4120 DATA "a new file of 100 records, and the Menu"
4130 DATA "is re-displayed."
4140 DATA ".pa"
4150 DATA "The user then wants to personalize the"
4160 DATA "Sources, so he types:"
4170 DATA ".sp"
4180 DATA "  3"
4190 DATA "    and presses the 'enter' key."
4200 DATA ".sp"
4210 DATA "He sees:"
4220 DATA ".vt 2"
4230 DATA ".pk Update the Source Descriptions"
4240 DATA ".sp"
4250 DATA ".pk      Source Descriptions"
4260 DATA ".pk    1 Church"
4270 DATA ".pk    2 State of California"
4280 DATA ".pk    3 State of New York"
4290 DATA ".pk    4 State of Ohio"
4300 DATA ".pk    5 State of Utah"
4310 DATA ".pk    6 State of Virginia"
4320 DATA ".pk    7 Albany County, New York"
4330 DATA ".pk    8 Salt Lake County, Utah"
4340 DATA ".pk    9 Wasatch County, Utah"
4350 DATA ".pk   10 United States"
4360 DATA ".pk   11 England"
4370 DATA ".pk   12 Germany"
4380 DATA ".vt 4"
4390 DATA ".pk Enter the Source 1 Description.?"
4400 DATA ".pk ('enter' to leave alone, '/ enter' to end descriptions,)"
4410 DATA ".pk ('\ enter' for partial list, or reply as shown.)"
4420 DATA ".vt 2"
4430 DATA "He then enters his own descriptions of"
4440 DATA "the Sources, and when finished, asks"
4450 DATA "that they be saved."
4460 DATA ".pa"
4470 DATA "The user then wants to personalize the"
4480 DATA "Types, so he types:"
4490 DATA ".sp"
4500 DATA "  4"
4510 DATA "    and presses the 'enter' key."
4520 DATA ".sp"
4530 DATA "He sees:"
4540 DATA ".vt 2"
4550 DATA ".pk Update the Type Descriptions"
4560 DATA ".sp"
4570 DATA ".pk      Type Descriptions"
4580 DATA ".sp"
4590 DATA ".pk    1 Birth Records"
4600 DATA ".pk    2 Marriage Records"
4610 DATA ".pk    3 Census Records"
4620 DATA ".pk    4 Deeds"
4630 DATA ".pk    5 Land Records"
4640 DATA ".pk    6 Wills"
4650 DATA ".pk    7 Probates"
4660 DATA ".pk    8 Death Records"
4670 DATA ".pk    9 Obituaries"
4680 DATA ".pk   10 Funeral Records"
4690 DATA ".pk   11 Burial Records"
4700 DATA ".pk   12 Cemeteries"
4710 DATA ".vt 4"
4720 DATA ".pk Enter the Type 1 Description.?"
4730 DATA ".pk ('enter' to leave alone, '/ enter' to end descriptions,)"
4740 DATA ".pk ('\ enter' for partial list, or reply as shown.)"
4750 DATA ".vt 2"
4760 DATA "He then enters his own descriptions of"
4770 DATA "the Types, and when finished, asks"
4780 DATA "that they be saved."
4790 DATA ".pa"
4800 DATA "Now that a Note File has been created,"
4810 DATA "and Personalization is complete, the"
4820 DATA "user can begin to enter his notes.  He"
4830 DATA "types:"
4840 DATA ".sp"
4850 DATA "  5"
4860 DATA "    and presses the 'enter' key."
4870 DATA ".sp"
4880 DATA "He sees:"
4890 DATA ".vt 2"
4900 DATA ".pk   Note Entry or Update"
4910 DATA ".vt 15"
4920 DATA ".pk Enter Note Number to Update (0 to quit, ? next available):"
4930 DATA ".pa"
4940 DATA "He knows that he is beginning, so he"
4950 DATA "chooses Note number 1, and presses"
4960 DATA "the 'enter' key.  Otherwise, he would"
4970 DATA "probably have typed a question-mark,"
4980 DATA "and pressed the 'enter' key, to let"
4990 DATA "the program search for an unused"
5000 DATA "Note-record."
5010 DATA ".sp"
5020 DATA "He sees:"
5030 DATA ".vt 2"
5040 DATA ".pk Note Entry or Update                                    Note:    -1"
5050 DATA ".sp"
5060 DATA ".pk      Choices                                        Descriptions"
5070 DATA ".pk                                        Researched :"
5080 DATA ".sp"
5090 DATA ".pk                                        Person     :  0"
5100 DATA ".vt 4"
5110 DATA ".pk                                        Source     :  0"
5120 DATA ".sp"
5130 DATA ".pk                                        Type       :  0"
5140 DATA ".sp"
5150 DATA ".pk                                        Event Date :"
5160 DATA ".sp"
5170 DATA ".pk Note:"
5180 DATA ".vt 3"
5190 DATA ".pk Enter the Note Number:"
5200 DATA ".pk ('enter' to leave alone, '/ enter' to end descriptions,)"
5210 DATA ".pk ('\ enter' for partial list, or reply as shown.)"
5220 DATA ".pa"
5230 DATA "After entering the Note Number and the"
5240 DATA "Researched Date, through the use of the"
5250 DATA "`\ enter', he is then presented with"
5260 DATA "a list of the first 12 names from his"
5270 DATA "Genealogy ON DISPLAY Persons File."
5280 DATA ".sp"
5290 DATA "He sees:"
5300 DATA ".vt 2"
5310 DATA ".pk Note Entry or Update                                    Note:     1"
5320 DATA ".sp"
5330 DATA ".pk      Choices                                        Descriptions"
5340 DATA ".pk    1 Melvin Otto ABLE                  Researched : 22 Mar 1986"
5350 DATA ".pk    2 Helen Lillian LOVELY
5360 DATA ".pk    3 Melvin Kent ABLE                  Person     :  0"
5370 DATA ".pk    4 Ronald Robert ABLE"
5380 DATA ".pk    5 Carolyn Elizabeth ABLE"
5390 DATA ".pk    6 LINDA Ann ABLE"
5400 DATA ".pk    7 Otto ABLE"
5410 DATA ".pk    8 Beatrice BAKER                    Source     :  0"
5420 DATA ".pk    9 Keith ABLE"
5430 DATA ".pk   10 Barbara ABLE                      Type       :  0"
5440 DATA ".pk   11 Beatrice ABLE"
5450 DATA ".pk   12 James ABLE                        Event Date :"
5460 DATA ".sp"
5470 DATA ".pk Note:"
5480 DATA ".vt 3"
5490 DATA ".pk Enter the Persons Number:"
5500 DATA ".pk ('enter' to leave alone, '/ enter' to end descriptions,)"
5510 DATA ".pk ('\ enter' for partial list, or reply as shown.)"
5520 DATA ".vt 2"
5530 DATA "He chooses Person 1, by typing:"
5540 DATA ".sp"
5550 DATA "  1"
5560 DATA "    and pressing the 'enter' key."
5570 DATA ".pa"
5580 DATA "He then chooses a Source and a Type"
5590 DATA "from the same kind of lists.  He enters"
5600 DATA "an Event Date, and he enters his Note."
5610 DATA ".sp"
5620 DATA "He then sees:"
5630 DATA ".vt 3"
5640 DATA ".pk Note Entry or Update                                    Note:     1"
5650 DATA ".sp"
5660 DATA ".pk                                                     Descriptions"
5670 DATA ".pk                                        Researched : 22 Mar 1986"
5680 DATA ".pk
5690 DATA ".pk                                        Person     :  1"
5700 DATA ".pk                                            Melvin Otto"
5710 DATA ".pk                                            ABLE"
5720 DATA ".pk                                             5 Oct 1925"
5730 DATA ".sp"
5740 DATA ".pk                                        Source     :  5"
5750 DATA ".pk                                            State of Utah"
5760 DATA ".pk                                        Type       :  1"
5770 DATA ".pk                                            Birth Record"
5780 DATA ".pk                                        Event Date :  5 Oct 1925"
5790 DATA ".pk Note:"
5800 DATA ".sp"
5810 DATA ".pk Birth Certificate 12345, Book 55, Page 27, Line 4."
5820 DATA ".vt 2"
5830 DATA ".pk Type s (save), m (more), or f (forget), and press the 'enter' key:"
5840 DATA ".vt 2"
5850 DATA "The user saves the Note record."
5860 DATA ".sp"
5870 DATA "After entering as many more notes as he"
5880 DATA "desires, he chooses Note 0, to finish"
5890 DATA "his entries."
5900 DATA ".pa"
5910 DATA "The user now wants to inquire into his"
5920 DATA "data.  He types:"
5930 DATA ".sp"
5940 DATA "  6"
5950 DATA "    and presses the 'enter' key."
5960 DATA ".sp"
5970 DATA "He sees:"
5980 DATA ".vt 3"
5990 DATA ".pk Request for Notes to be Displayed or Printed"
6000 DATA ".sp"
6010 DATA ".pk                                        Choices"
6020 DATA ".vt 15"
6030 DATA ".pk Type a (all) or s (some) notes, and press the 'enter' key:"
6040 DATA ".pa"
6050 DATA "The user wants to see some of his notes,"
6060 DATA "so he types:"
6070 DATA ".sp"
6080 DATA "  s"
6090 DATA "    and presses the 'enter' key."
6100 DATA ".vt 3"
6110 DATA "He can be presented with a list of"
6120 DATA "persons from his Persons File, and he"
6130 DATA "chooses either one person, or all"
6140 DATA "persons."
6150 DATA ".vt 3"
6160 DATA "Next, he can be presented with a list"
6170 DATA "of Sources, and he chooses either one"
6180 DATA "source, or all sources."
6190 DATA ".vt 3"
6200 DATA "Finally, he can be presented with a"
6210 DATA "list of Types, and he chooses either"
6220 DATA "one type, or all types."
6230 DATA ".pa"
6240 DATA "After making his choices, he sees:"
6250 DATA ".vt 3"
6260 DATA ".pk Request for Notes to be Displayed or Printed"
6270 DATA ".sp"
6280 DATA ".pk                                        Choices"
6290 DATA ".pk                                        Choose all notes,"
6300 DATA ".pk                                          Where:"
6310 DATA ".sp"
6320 DATA ".pk                                        Person     :  1"
6330 DATA ".pk                                            Melvin Otto"
6340 DATA ".pk                                            ABLE"
6350 DATA ".pk                                             5 Oct 1925"
6360 DATA ".sp"
6370 DATA ".pk                                        Source     :  5"
6380 DATA ".pk                                            State of Utah"
6390 DATA ".pk                                        Type       :  1"
6400 DATA ".pk                                            Birth Record"
6410 DATA ".vt 4"
6420 DATA ".pk Type d (display), p (print), m (more), f (forget):"
6430 DATA ".pk and press the 'enter' key."
6440 DATA ".pa"
6450 DATA "The user decides to display the results"
6460 DATA "of his inquiry, so types:"
6470 DATA ".sp"
6480 DATA "  d"
6490 DATA "    and presses the 'enter' key."
6500 DATA ".sp"
6510 DATA "He sees:"
6520 DATA ".in -3"
6530 DATA ".vt 3"
6540 DATA ".pk Notes and Sources ON DISPLAY      03-20-1987    10:09:57     Screen 1 "
6550 DATA ".pk Display all notes containing items whose:"
6560 DATA ".pk Person is Melvin Otto ABLE                                Birth:  5 Oct 1925"
6570 DATA ".pk Source is State of Utah"
6580 DATA ".pk Type is Birth Record"
6590 DATA ".pk ============================================================================"
6600 DATA ".pk Note Number:  1       Event Date:  5 Oct 1925     Research Date: 22 Mar 1986"
6610 DATA ".pk Person: Melvin Otto ABLE                                  Birth:  5 Oct 1925"
6620 DATA ".pk Source: State of Utah"
6630 DATA ".pk Type  : Birth Record"
6640 DATA ".pk Note : Birth Certificate 12345.  Book 55, Page 27, Line 4."
6650 DATA ".pk ============================================================================"
6660 DATA ".pk Search Completed"
6670 DATA ".vt 4"
6680 DATA ".pk Press any key to continue"
6690 DATA ".in 0"
6700 DATA ".pa"
6710 DATA "The user presses any key, and sees"
6720 DATA "summary information, as:"
6730 DATA ".in -3"
6740 DATA ".vt 3"
6750 DATA ".pk Notes and Sources ON DISPLAY      03-20-1987    10:09:57     Screen 2 "
6760 DATA ".pk Display all notes containing items whose:"
6770 DATA ".pk Person is Melvin Otto ABLE                                Birth:  5 Oct 1925"
6780 DATA ".pk Source is State of Utah"
6790 DATA ".pk Type is Birth Record"
6800 DATA ".pk ============================================================================"
6810 DATA ".pk Summary of the Results of the Inquiry"
6820 DATA ".pk Number of Notes Meeting the Criteria =  1"
6830 DATA ".vt 10"
6840 DATA ".pk Press any key to continue"
6850 DATA ".in 0"
6860 DATA ".vt 2"
6870 DATA "The user presses any key, and once"
6880 DATA "again sees the Menu.  He chooses 0,"
6890 DATA "presses the 'enter' key, and ends"
6900 DATA "his session."
6910 DATA ".pa"
6920 DATA ".h2 COMMANDS USED."
6930 DATA ".h3 basic/s:256"
6940 DATA ".sp"
6950 DATA "The basic command is used in order to"
6960 DATA "load the BASIC processor from either"
6970 DATA "the PCjr's BASIC Cartridge, from the"
6980 DATA "DOS diskette, into storage, and to"
6990 DATA "establish a buffer size for the data"
7000 DATA "files."
7010 DATA ".h3 load (or the F3 function-key)"
7020 DATA ".sp"
7030 DATA "The load command is used in order to"
7040 DATA "load the ~notesand.bas~ program from"
7050 DATA "the Program Diskette into storage."
7060 DATA ".h3 run"
7070 DATA ".sp"
7080 DATA "The run command is used to cause any"
7090 DATA "of the Notes and Sources ON DISPLAY"
7100 DATA "documentation programs to begin."
7110 DATA ".sp"
7120 DATA "It is also used to cause the ~notesand~"
7130 DATA "program to be run, and to cause the"
7140 DATA "menu itself to appear on the screen."
7150 DATA ".eof"
7160 END
```

## RUNFIRST.BAS

```bas
100 REM RUNFIRST Program to show new users how to start
110 PRINT
120 PRINT "The Notes and Sources ON DISPLAY Programs and the Documentation are all"
130 PRINT "on this Distribution Diskette."
140 PRINT
150 PRINT "To begin, bring up IBM PC DOS (Version 2.0 or later), and BASIC."
160 PRINT
170 PRINT "(Note:  If you are using a printer other than the IBM Proprinter, or the IBM"
180 PRINT "Matrix Printer, you may need to modify the documentation to fit your"
190 PRINT "printer.  Run the BASIC program 'printers.bas' for more information.)"
200 PRINT
210 PRINT "Make sure that the printer is on, and then LOAD and RUN the BASIC program"
220 PRINT "'director.bas' from this Distribution Diskette.  This will print a Program"
230 PRINT "Directory, which contains information about the rest of the documentation,"
240 PRINT "and about the Notes and Sources ON DISPLAY program."
250 PRINT
260 PRINT "Following the instructions in the Program Directory, LOAD and RUN the other"
270 PRINT "six documentation programs, each of which will print a section of the User's"
280 PRINT "Manual.    (Have plenty of paper ready, since the User's Manual is many, many"
290 PRINT "pages long.)  If you want, you can trim the pages of the User's Manual to"
300 PRINT "5-1/2 x 8-1/2 inches."
310 PRINT
320 PRINT "The User's Manual explains the functions of the Notes and Sources"
330 PRINT "ON DISPLAY program, and how to use it."
340 END
```

## TABLEOFC.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 REM Program begins here
240 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
250 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
260 GOSUB 900  'For trim line and heading space
270 FOR I = 1 TO 6 : LPRINT : NEXT I
280 LPRINT BOLD.ON$;    'Set Emphasized Print
290 LPRINT EXPAND.ON$;  'Set Expanded Print
300 LPRINT TAB(TAB.POS-5);TITLE$
310 LPRINT EXPAND.OFF$;  'Return to normal
320 LPRINT BOLD.OFF$;    'Return to normal
330 FOR I = 1 TO 3 : LPRINT : NEXT I
340 LPRINT BOLD.ON$; 'Set Emphasized mode
350 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
360 LPRINT BOLD.OFF$; 'Return to normal
370 LPRINT : LPRINT : LPRINT
380 LPRINT TAB(TAB.POS+11);"Version 1.1"
390 FOR I = 1 TO 11 : LPRINT : NEXT I
400 LPRINT TAB(TAB.POS+8); DOC.NAME$
410 LINE.NO = LINE.NO + 27
420 '
430 READ REPLY$
440 REM First, change tildes to quotes
450 FOR Q = 1 TO LEN(REPLY$)
460  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
470 NEXT Q
480 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1250: GOTO 430
490 IF LINE.NO > 44 THEN GOSUB 1010
500 REM Print the line if not a command
510 LPRINT TAB(TAB.POS);REPLY$
520 LINE.NO = LINE.NO + 1
530 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
540 GOTO 430
550 DATA ".pa"
560 REM   Data for the Copyright Page
570 DATA "Anyone may request a copy of Notes and"
580 DATA "Sources ON DISPLAY, for trial, by sending"
590 DATA "an unformatted, double-sided, double-"
600 DATA "density, 5-1/4 inch diskette to the"
610 DATA "author of the programs."
620 DATA ".sp"
630 DATA "An addressed, postage-paid return"
640 DATA "mailer must accompany the diskette (no"
650 DATA "exceptions, please).
660 DATA ".sp"
670 DATA "A copy of the programs with documenta-"
680 DATA "tion will be sent by return mail."
690 DATA ".vt 2"
700 DATA "Users are encouraged to copy and share"
710 DATA "the programs with others."
720 DATA ".vt 2"
730 DATA "If you are using this program, you are"
740 DATA "expected to become a Registered User,"
750 DATA "by making a contribution to the author"
760 DATA "of the program ($30.00 suggested for"
770 DATA "Registered Users of Genealogy ON DIS-"
780 DATA "PLAY, otherwise, $45.00 suggested)."
790 DATA ".sp"
800 DATA "Melvin O. Duke"
810 DATA "P. O. Box 20836"
820 DATA "San Jose, CA  95160"
830 DATA "(408) 268-6637"
840 DATA ".vt 3"
850 DATA "Copyright (c) 1986, by:"
860 DATA "Melvin O. Duke."
870 DATA ".sp"
880 DATA "All rights reserved."
890 '
900 REM Top of each page routine
910 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
920 LPRINT
930 LPRINT TAB(30); "(Trim-line)"
940 LPRINT "+"+STRING$(54,45)+"+" 'Dashes
950 FOR I = 1 TO 6
960  LPRINT
970 NEXT I
980 LINE.NO = LINE.NO + 6
990 RETURN
1000 '
1010 REM Bottom of each page Routine
1020 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1140
1030 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1040 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1050 IF PAGE.NO MOD 2 = 1 THEN 1090
1060 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1070 LPRINT TAB(TAB.POS+27);"User's Manual"
1080 GOTO 1140
1090 LPRINT TAB(TAB.POS); "User's Manual";
1100 IF PAGE.NO < 10 THEN DELTA = 34
1110 IF PAGE.NO >  9 THEN DELTA = 33
1120 IF PAGE.NO > 99 THEN DELTA = 32
1130 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1140 LPRINT : LPRINT : LPRINT
1150 LPRINT "+"+STRING$(54,45)+"+" 'dashes after 51
1160 LPRINT TAB(30); "(Trim-line)"
1170 LPRINT FORM.FEED$;
1180 PAGE.NO = PAGE.NO + 1
1190 LINE.NO = 1
1200 IF REPLY$ = ".eof" THEN 1220  'Bypass after last page
1210 GOSUB 900  'For top of next page
1220 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1230 RETURN
1240 '
1250 REM Command Processor
1260 IF LEFT$(REPLY$,3) = ".h1" THEN 1360
1270 IF LEFT$(REPLY$,3) = ".h2" THEN 1520
1280 IF LEFT$(REPLY$,3) = ".h3" THEN 1630
1290 IF LEFT$(REPLY$,3) = ".sp" THEN 1740
1300 IF LEFT$(REPLY$,4) = ".eof" THEN 1790
1310 IF LEFT$(REPLY$,3) = ".pa" THEN 1820
1320 IF LEFT$(REPLY$,3) = ".vt" THEN 1890
1330 IF LEFT$(REPLY$,3) = ".pk" THEN 1990
1340 IF LEFT$(REPLY$,3) = ".in" THEN 2120
1350 STOP
1360 REM Head 1 Processor
1370 FOR I = LINE.NO TO 44
1380  LPRINT
1390 NEXT I
1400 GOSUB 1010  'Bottom of page Routine
1410 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1820  'For h1 on Odd pages
1420 LPRINT BOLD.ON$;     'Set Emphasized Printing
1430 LPRINT EXPAND.ON$;   'Set expanded print
1440 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1450 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1460 LPRINT EXPAND.OFF$;  'Return to normal
1470 LPRINT BOLD.OFF$;    'Return to non-bold
1480 LINE.NO = LINE.NO+1
1490 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1500 RETURN
1510 '
1520 REM Head 2 Processor
1530 IF LINE.NO = 7 THEN 1550 'skip spacing if at top of page
1540 IF LINE.NO > 43 THEN GOSUB 1820 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1550 LPRINT BOLD.ON$;    'Set emphasized print
1560 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1570 LPRINT BOLD.OFF$;   'Return to normal
1580 LPRINT
1590 LINE.NO = LINE.NO + 2
1600 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1610 RETURN
1620 '
1630 REM Head 3 Processor
1640 IF LINE.NO = 7 THEN 1660 'skip spacing if at top of page
1650 IF LINE.NO > 43 THEN GOSUB 1820 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1660 LPRINT BOLD.ON$;    'Set emphasized print
1670 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1680 LPRINT BOLD.OFF$;   'Return to normal
1690 LPRINT
1700 LINE.NO = LINE.NO + 2
1710 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1720 RETURN
1730 '
1740 REM Single Space Processor
1750 IF LINE.NO = 7 THEN 1770
1760 IF LINE.NO > 44 THEN GOSUB 1820 ELSE LPRINT : LINE.NO = LINE.NO + 1
1770 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1780 RETURN
1790 REM End of File Processor
1800 GOSUB 1820 'Bottom of Page
1810 GOTO 4190 'end
1820 REM Page Eject Processor
1830 FOR I = LINE.NO TO 44
1840  LPRINT
1850  LINE.NO = LINE.NO + 1
1860 NEXT I
1870 GOSUB 1010  'Bottom of Page Processing
1880 RETURN
1890 REM Vertical Tab Processor
1900 IF LINE.NO = 7 THEN 1980
1910 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1920 FOR I = 1 TO QTY
1930  LPRINT
1940  LINE.NO = LINE.NO + 1
1950  IF LINE.NO > 44 THEN I = QTY
1960 NEXT I
1970 IF LINE.NO > 44 THEN GOSUB 1010  'End of page
1980 RETURN
1990 REM Pack Processor
2000 IF LINE.NO > 44 THEN GOSUB 1010
2010 IF TAB.POS = 8 THEN ADJUST = 4
2020 IF TAB.POS = 13 THEN ADJUST = 7
2030 TAB.POS = TAB.POS + ADJUST + INDENT
2040 WIDTH "lpt1:", 132  'set condensed width
2050 LPRINT COMPR.ON$;   'Packed printing
2060 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2070 LPRINT COMPR.OFF$;  'Return to normal
2080 WIDTH "lpt1:", 80   'return to normal
2090 LINE.NO = LINE.NO + 1
2100 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2110 RETURN
2120 REM Indent Processor
2130 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2140 RETURN
3000 DATA ".h1 TABLE OF CONTENTS"
3010 DATA ".sp"
3020 DATA "INTRODUCTION - - - - - - - - - - - -   1"
3030 DATA "  OVERVIEW - - - - - - - - - - - - -   1"
3040 DATA "    Personalized Information - - - -   1"
3050 DATA "    Integrated Approach  - - - - - -   1"
3060 DATA "    Multiple Choices - - - - - - - -   2"
3070 DATA "  CAPABILITIES - - - - - - - - - - -   3"
3080 DATA "    Format a Note File - - - - - - -   3"
3090 DATA "    Extend the Note File - - - - - -   3"
3100 DATA "    Personalize the Sources  - - - -   4"
3110 DATA "    Personalize the Types of Data  -   4"
3120 DATA "    Enter or Update Notes  - - - - -   4"
3130 DATA "    Inquiry for Display or Printing    5"
3140 DATA "  BENEFITS/ADVANTAGES  - - - - - - -   6"
3150 DATA "  RESULTS  - - - - - - - - - - - - -   6"
3160 DATA "  REQUIREMENTS - - - - - - - - - - -   7"
3170 DATA "    Hardware Requirements  - - - - -   7"
3180 DATA "    Software Requirements  - - - - -   8"
3190 DATA ".sp"
3200 DATA "GENERAL INFORMATION  - - - - - - - -   9"
3210 DATA "  DATA ACCESS REQUIREMENTS - - - - -   9"
3220 DATA "  DESCRIPTION OF FUNCTIONS - - - - -   9"
3230 DATA "    Formatting the Note File - - - -   9"
3240 DATA "    Personalization of Files - - - -  10"
3250 DATA "    Data Entry and Update  - - - - -  10"
3260 DATA "    Inquiry for Display or Printing   11"
3270 DATA "  DEFINITION OF TERMS  - - - - - - -  12"
3280 DATA "    Sources  - - - - - - - - - - - -  12"
3290 DATA "    Types  - - - - - - - - - - - - -  12"
3300 DATA "    Notes  - - - - - - - - - - - - -  13"
3310 DATA "    Lists  - - - - - - - - - - - - -  13"
3320 DATA "    Data Entry or Update - - - - - -  14"
3330 DATA "    Inquiry for Display or Printing   14"
3340 DATA ".pa"
3350 DATA "  EXPLANATION OF GENERAL CONCEPTS  -  15"
3360 DATA "    Notes and Sources ON DISPLAY - -  15"
3370 DATA "    The Notefile - - - - - - - - - -  18"
3380 DATA "    The Sources File - - - - - - - -  19"
3390 DATA "    The Types File - - - - - - - - -  19"
3400 DATA "  BEFORE YOU START - - - - - - - - -  20"
3410 DATA "    Introduction to Personalization   20"
3420 DATA "    List of Note Types - - - - - - -  20"
3430 DATA "    List of Sources  - - - - - - - -  23"
3440 DATA ".sp"
3450 DATA "USING THE PROGRAMS - - - - - - - - -  25"
3460 DATA "  FIRST TIME USAGE - - - - - - - - -  25"
3470 DATA "    Backing up the Diskettes - - - -  25"
3480 DATA "    Preparing a New Notes Diskette -  25"
3490 DATA "      Copy the Distribution Diskette  26"
3500 DATA "      Delete the Documentation - - -  27"
3510 DATA "  CONVENTIONS  - - - - - - - - - - -  29"
3520 DATA "    Standard Screen Information  - -  29"
3530 DATA "    Screen Appearance  - - - - - - -  30"
3540 DATA "    Use of the Enter Key - - - - - -  31"
3550 DATA "    Use of / Enter - - - - - - - - -  31"
3560 DATA "    Use of \ Enter - - - - - - - - -  32"
3570 DATA "    Abbreviated Responses  - - - - -  32"
3580 DATA "    Correcting Typing Mistakes - - -  33"
3590 DATA "    Replacing with Blanks  - - - - -  33"
3600 DATA "    Use of the Question Mark - - - -  33"
3610 DATA "  GETTING STARTED  - - - - - - - - -  34"
3620 DATA "  HOW TO OPERATE - - - - - - - - - -  36"
3630 DATA "    Selecting a Function - - - - - -  36"
3640 DATA "      Create (Format) a Notes File -  37"
3650 DATA "      Extend the Notes file  - - - -  38"
3660 DATA "      Personalize the Sources  - - -  39"
3670 DATA "      Personalize the Types  - - - -  39"
3680 DATA "      Data Entry of Notes  - - - - -  40"
3690 DATA "      Inquiry into Notes - - - - - -  42"
3700 DATA ".pa"
3710 DATA "  HOW TO STOP  - - - - - - - - - - -  45"
3720 DATA "    Stopping From the Menu - - - - -  45"
3730 DATA "    Stopping Personalization - - - -  46"
3740 DATA "    Stopping Data Entry  - - - - - -  47"
3750 DATA "    Stopping Inquiry - - - - - - - -  48"
3760 DATA ".sp"
3770 DATA "REFERENCE MATERIAL - - - - - - - - -  51"
3780 DATA "  SAMPLE SCREENS AND PROMPTING"
3790 DATA "      MESSAGES - - - - - - - - - - -  51"
3800 DATA "    Program Logo - - - - - - - - - -  52"
3810 DATA "    Menu of Functions  - - - - - - -  53"
3820 DATA "    Warning Screen - - - - - - - - -  54"
3830 DATA "    Update the Sources - - - - - - -  55"
3840 DATA "    Update the Types - - - - - - - -  56"
3850 DATA "    Data Entry (request for number)   57"
3860 DATA "    Data Entry (empty note)  - - - -  58"
3870 DATA "    Data Entry (persons shown) - - -  59"
3880 DATA "    Data Entry (completed) - - - - -  60"
3890 DATA "    Inquiry (empty)  - - - - - - - -  61"
3900 DATA "    Inquiry (completed)  - - - - - -  63"
3910 DATA "    Inquiry output (detailed)  - - -  64"
3920 DATA "    Inquiry output (summary) - - - -  65"
3930 DATA "  COMMANDS USED  - - - - - - - - - -  66"
3940 DATA "    Basic Command  - - - - - - - - -  66"
3950 DATA "    Load Command - - - - - - - - - -  66"
3960 DATA "    Run Command  - - - - - - - - - -  66"
3970 DATA ".sp"
3980 DATA "APPENDIX A.  MESSAGES  - - - - - - -  67"
3990 DATA "  Start-up Messages  - - - - - - - -  67"
4000 DATA ".sp"
4010 DATA "APPENDIX B. HINTS  - - - - - - - - -  68"
4020 DATA "  Dates  - - - - - - - - - - - - - -  68"
4030 DATA "  Replacing Information  - - - - - -  68"
4040 DATA "  Removing a Record  - - - - - - - -  68"
4050 DATA ".pa"
4060 DATA "APPENDIX C.  MODIFICATIONS - - - - -  69"
4070 DATA "  Making Changes - - - - - - - - - -  69"
4080 DATA "  Color Considerations - - - - - - -  69"
4090 DATA "  Color Definitions  - - - - - - - -  70"
4100 DATA "  Changing the Number of Persons - -  70"
4110 DATA "  Repositioning the Files  - - - - -  71"
4120 DATA "  Utilizing Other Printers - - - - -  72"
4130 DATA ".sp"
4140 DATA "APPENDIX D.  TERMS & CONDITIONS  - -  73"
4150 DATA "  Terms  - - - - - - - - - - - - - -  73"
4160 DATA "  Conditions - - - - - - - - - - - -  74"
4170 DATA "  Disclaimer - - - - - - - - - - - -  74"
4180 DATA ".eof"
4190 END
```

## USINGTHE.BAS

```bas
100 REM Documentation for the Genealogy ON DISPLAY Programs
110 REM All data is in the form of DATA statements.
120 REM By:  Melvin O. Duke.  Updated June 1986.
130 DATA Notes and Sources
140 DATA User's Manual
150 DATA -5
160 DATA 1
170 INDENT = 0
180 REM Printer Definitions
190 FORM.FEED$  = CHR$(12)
200 COMPR.OFF$  = CHR$(18)     : COMPR.ON$ = CHR$(15)
210 BOLD.OFF$   = CHR$(27)+"F" : BOLD.ON$ = CHR$(27)+"E"
220 EXPAND.OFF$ = CHR$(18)     : EXPAND.ON$ = CHR$(14)
230 DASHES$ = "+"+STRING$(54,45)+"+"
240 TRIM.LINE$ = "(Trim-line)"
250 REM Program begins here
260 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
270 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
280 GOSUB 920  'For trim line and heading space
290 FOR I = 1 TO 6 : LPRINT : NEXT I
300 LPRINT BOLD.ON$;     'Set Emphasized mode
310 LPRINT EXPAND.ON$;   'Set Expanded Print
320 LPRINT TAB(TAB.POS-5);TITLE$
330 LPRINT EXPAND.OFF$;  'Return to normal
340 LPRINT BOLD.OFF$;    'Return to normal
350 FOR I = 1 TO 3 : LPRINT : NEXT I
360 LPRINT BOLD.ON$;     'Set Emphasized mode
370 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
380 LPRINT BOLD.OFF$;    'Return to normal
390 LPRINT : LPRINT : LPRINT
400 LPRINT TAB(TAB.POS+11);"Version 1.1"
410 FOR I = 1 TO 11 : LPRINT : NEXT I
420 LPRINT TAB(TAB.POS+10); DOC.NAME$
430 LINE.NO = LINE.NO + 27
440 '
450 READ REPLY$
460 REM First, change tildes to quotes
470 FOR Q = 1 TO LEN(REPLY$)
480  IF MID$(REPLY$,Q,1)="~"THEN MID$(REPLY$,Q,1)=CHR$(34)
490 NEXT Q
500 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1270: GOTO 450
510 IF LINE.NO > 44 THEN GOSUB 1030
520 REM Print the line if not a command
530 LPRINT TAB(TAB.POS);REPLY$
540 LINE.NO = LINE.NO + 1
550 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
560 GOTO 450
570 DATA ".pa"
580 REM   Data for the Copyright Page
590 DATA "Anyone may request a copy of Notes and"
600 DATA "Sources ON DISPLAY, for trial, by sending"
610 DATA "an unformatted, double-sided, double-"
620 DATA "density, 5-1/4 inch diskette to the"
630 DATA "author of the programs."
640 DATA ".sp"
650 DATA "An addressed, postage-paid return"
660 DATA "mailer must accompany the diskette (no"
670 DATA "exceptions, please).
680 DATA ".sp"
690 DATA "A copy of the programs with documenta-"
700 DATA "tion will be sent by return mail."
710 DATA ".vt 2"
720 DATA "Users are encouraged to copy and share"
730 DATA "the programs with others."
740 DATA ".vt 2"
750 DATA "If you are using this program, you are"
760 DATA "expected to become a Registered User,"
770 DATA "by making a contribution to the author"
780 DATA "of the program ($30.00 suggested for"
790 DATA "Registered Users of Genealogy ON DIS-"
800 DATA "PLAY, otherwise, $45.00 suggested)."
810 DATA ".sp"
820 DATA "Melvin O. Duke"
830 DATA "P. O. Box 20836"
840 DATA "San Jose, CA  95160"
850 DATA "(408) 268-6637"
860 DATA ".vt 3"
870 DATA "Copyright (c) 1986, by:"
880 DATA "Melvin O. Duke."
890 DATA ".sp"
900 DATA "All rights reserved."
910 '
920 REM Top of each page routine
930 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
940 LPRINT
950 LPRINT TAB(30); TRIM.LINE$
960 LPRINT DASHES$ 'Dashes
970 FOR I = 1 TO 6
980  LPRINT
990 NEXT I
1000 LINE.NO = LINE.NO + 6
1010 RETURN
1020 '
1030 REM Bottom of each page Routine
1040 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1160
1050 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
1060 LPRINT TAB(TAB.POS+0); TITLE$+" ON DISPLAY.  Vers. 1.1" 'on line 47
1070 IF PAGE.NO MOD 2 = 1 THEN 1110
1080 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1090 LPRINT TAB(TAB.POS+27);"User's Manual"
1100 GOTO 1160
1110 LPRINT TAB(TAB.POS); "User's Manual";
1120 IF PAGE.NO < 10 THEN DELTA = 34
1130 IF PAGE.NO >  9 THEN DELTA = 33
1140 IF PAGE.NO > 99 THEN DELTA = 32
1150 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1160 LPRINT : LPRINT : LPRINT
1170 LPRINT DASHES$ 'dashes after 51
1180 LPRINT TAB(30); TRIM.LINE$
1190 LPRINT FORM.FEED$;
1200 PAGE.NO = PAGE.NO + 1
1210 LINE.NO = 1
1220 IF REPLY$ = ".eof" THEN 1240  'Bypass after last page
1230 GOSUB 920  'For top of next page
1240 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1250 RETURN
1260 '
1270 REM Command Processor
1280 IF LEFT$(REPLY$,3) = ".h1" THEN 1390
1290 IF LEFT$(REPLY$,3) = ".h2" THEN 1550
1300 IF LEFT$(REPLY$,3) = ".h3" THEN 1660
1310 IF LEFT$(REPLY$,3) = ".sp" THEN 1770
1320 IF LEFT$(REPLY$,4) = ".eof" THEN 1820
1330 IF LEFT$(REPLY$,3) = ".pa" THEN 1850
1340 IF LEFT$(REPLY$,3) = ".pn" THEN PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3)) : RETURN
1350 IF LEFT$(REPLY$,3) = ".vt" THEN 1920
1360 IF LEFT$(REPLY$,3) = ".pk" THEN 2030
1370 IF LEFT$(REPLY$,3) = ".in" THEN 2160
1380 STOP
1390 REM Head 1 Processor
1400 FOR I = LINE.NO TO 44
1410  LPRINT
1420 NEXT I
1430 GOSUB 1030  'Bottom of page Routine
1440 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1850  'For h1 on Odd pages
1450 LPRINT BOLD.ON$;     'Set emphasized print
1460 LPRINT EXPAND.ON$;   'Set expanded print
1470 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -2 ELSE ADJUST = -5
1480 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1490 LPRINT EXPAND.OFF$;  'Return to normal
1500 LPRINT BOLD.OFF$;    'Return to non-bold
1510 LINE.NO = LINE.NO+1
1520 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1530 RETURN
1540 '
1550 REM Head 2 Processor
1560 IF LINE.NO = 7 THEN 1580 'skip spacing if at top of page
1570 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1580 LPRINT BOLD.ON$;  'Set emphasized print
1590 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1600 LPRINT BOLD.OFF$; 'Return to normal
1610 LPRINT
1620 LINE.NO = LINE.NO + 2
1630 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1640 RETURN
1650 '
1660 REM Head 3 Processor
1670 IF LINE.NO = 7 THEN 1690 'skip spacing if at top of page
1680 IF LINE.NO > 43 THEN GOSUB 1850 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1690 LPRINT BOLD.ON$;  'Set emphasized print
1700 LPRINT TAB(TAB.POS+1); RIGHT$(REPLY$,LEN(REPLY$)-4)
1710 LPRINT BOLD.OFF$; 'Return to normal
1720 LPRINT
1730 LINE.NO = LINE.NO + 2
1740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1750 RETURN
1760 '
1770 REM Single Space Processor
1780 IF LINE.NO = 7 THEN 1800
1790 IF LINE.NO > 44 THEN GOSUB 1850 ELSE LPRINT : LINE.NO = LINE.NO + 1
1800 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1810 RETURN
1820 REM End of File Processor
1830 GOSUB 1850 'Bottom of Page
1840 GOTO 9850
1850 REM Page Eject Processor
1860 FOR I = LINE.NO TO 44
1870  LPRINT
1880  LINE.NO = LINE.NO + 1
1890 NEXT I
1900 GOSUB 1030  'Bottom of Page Processing
1910 RETURN
1920 REM Vertical Tab Processor
1930 IF LINE.NO = 7 THEN 2020
1940 IF LINE.NO > 44 THEN GOSUB 1030  'End of page
1950 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1960 FOR I = 1 TO QTY
1970  LPRINT
1980  LINE.NO = LINE.NO + 1
1990  IF LINE.NO > 44 THEN I = QTY
2000 NEXT I
2010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2020 RETURN
2030 REM Pack Processor
2040 IF LINE.NO > 44 THEN GOSUB 1030
2050 IF TAB.POS = 8 THEN ADJUST = 4
2060 IF TAB.POS = 13 THEN ADJUST = 7
2070 TAB.POS = TAB.POS + ADJUST + INDENT
2080 WIDTH "lpt1:", 132 'set condensed width
2090 LPRINT COMPR.ON$;  'Packed printing
2100 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2110 LPRINT COMPR.OFF$; 'Return to normal
2120 WIDTH "lpt1:", 80  'return to normal
2130 LINE.NO = LINE.NO + 1
2140 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2150 RETURN
2160 REM Indent Processor
2170 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2180 RETURN
3000 DATA ".h1 USING THE PROGRAMS"
3010 DATA ".pn 25"
3020 DATA ".h2 FIRST TIME USAGE"
3030 DATA ".h3 Backing up the Diskettes"
3040 DATA "Good procedures indicate that upon"
3050 DATA "receipt of any program or programs, it"
3060 DATA "is highly desirable for you to make"
3070 DATA "back-up copies for your own protection."
3080 DATA "Such is surely the case with the Notes"
3090 DATA "and Sources ON DISPLAY diskette."
3100 DATA ".sp"
3110 DATA "Once you have entered your notes into"
3120 DATA "your Notes diskette (see below), you"
3130 DATA "will also want to back up that diskette"
3140 DATA "from time to time."
3150 DATA ".h3 Preparing a New Notes Diskette"
3160 DATA "Begin with a formatted diskette, which"
3170 DATA "was formatted without including DOS"
3180 DATA "(no /s).
3190 DATA ".sp"
3200 DATA "If you do not have one available, it"
3210 DATA "will be necessary to format one."
3220 DATA "Refer to FORMAT Command in the DOS"
3230 DATA "Manual."
3240 DATA ".pa"
3250 DATA ".h3 Copy the Distribution Diskette"
3260 DATA "The entire contents of the Distribution"
3270 DATA "diskette should be copied to your new"
3280 DATA "Notes diskette."
3290 DATA ".sp"
3300 DATA "1.  Bring up DOS (but not BASIC)."
3310 DATA ".sp"
3320 DATA "2.  Insert the Distribution Diskette in"
3330 DATA "      drive 'a:' (and the Notes Diskette"
3340 DATA "      in drive 'b:' if you have one)."
3350 DATA ".sp"
3360 DATA "3.  Type:  copy a:*.* b:"
3370 DATA "      and press the 'enter' key."
3380 DATA ".sp"
3390 DATA "4.  On a one-drive system, replace the"
3400 DATA "      Distribution Diskette with the"
3410 DATA "      Notes Diskette when asked to do"
3420 DATA "      so, and press the 'enter' key."
3430 DATA ".pa"
3440 DATA ".h3 Delete the Documentation"
3450 DATA "The documentation should be removed from"
3460 DATA "your Notes diskette, to provide more"
3470 DATA "space for your notes themselves."
3480 DATA ".sp"
3490 DATA "With your Notes diskette in Drive a:,"
3500 DATA "(while you are still in DOS), do the"
3510 DATA "following:"
3520 DATA ".sp"
3530 DATA "1.  Type:  cleandoc"
3540 DATA "           and press the `enter' key."
3550 DATA ".sp"
3560 DATA "This batch file will cause all of the"
3570 DATA "documentation programs to be erased."
3580 DATA ".sp"
3590 DATA "2.  Type:  erase cleandoc.bat"
3600 DATA "           and press the 'enter' key."
3610 DATA ".sp"
3620 DATA "This erases the batch file which you"
3630 DATA "just used to remove the documentation."
3640 DATA ".sp"
3650 DATA "3.  If you are using a single-drive"
3660 DATA "    system, your Genealogy ON DISPLAY"
3670 DATA "    Persons File must be copied to"
3680 DATA "    your Notes diskette.  To do this,"
3690 DATA "    have the Data Diskette (with the"
3700 DATA "    the Persons File in drive b:."
3710 DATA ".sp"
3720 DATA "    Type:  copy b:persfile a:"
3730 DATA "           and press the 'enter' key."
3740 DATA ".sp"
3750 DATA "This will copy the Persons File from"
3760 DATA "Genealogy ON DISPLAY to the diskette"
3770 DATA "which will contain your notes."
3780 DATA ".sp"
3790 DATA "If you are using a System where you can"
3800 DATA "access your Persons File from Genealogy"
3810 DATA "ON DISPLAY, such as a two-drive system,"
3820 DATA "or a hard-disk system, you need to make"
3830 DATA "a change in the ~notesand.bas~ program,"
3840 DATA "to indicate where your Persons File is"
3850 DATA "located."
3860 DATA ".sp"
3870 DATA "To do this, bring up DOS and BASIC, and"
3880 DATA "do the following:"
3890 DATA ".sp"
3900 DATA "1.  load ~notesand.bas~"
3910 DATA ".sp"
3920 DATA "2.  type: edit 430"
3930 DATA "          and press the 'enter' key."
3940 DATA ".sp"
3950 DATA "You will see a line which reads:"
3960 DATA ".sp"
3970 DATA "  430 DD.PERS$ = ~a:~    'Persons File"
3980 DATA ".sp"
3990 DATA "Using the cursor keys, move the cursor"
4000 DATA "to the a, and change it to the drive-"
4010 DATA "location where you Persons File will"
4020 DATA "actually be located when you run the"
4030 DATA "program.  For example, if you expect"
4040 DATA "the Persons File to be on the b:-drive,"
4050 DATA "change the line to read:"
4060 DATA ".sp"
4070 DATA "  430 DD.PERS$ = ~b:~    'Persons File"
4080 DATA ".sp"
4090 DATA "    and press the 'enter' key."
4100 DATA ".sp"
4110 DATA "3.  Save the changed program."
4120 DATA ".sp"
4130 DATA "    Type: save ~notesand.bas~"
4140 DATA "          and press the 'enter' key."
4150 DATA ".sp"
4160 DATA "Your Notes Diskette is now ready for"
4170 DATA "you to use."
4180 DATA ".pa"
4190 DATA ".h2 CONVENTIONS"
4200 DATA ".h3 Standard Screen Information"
4210 DATA "Once you begin to use Notes and Sources"
4220 DATA "ON DISPLAY, you will quickly learn that"
4230 DATA "certain information always appears in"
4240 DATA "the same place on each screen.  For ex-"
4250 DATA "ample, line 23 is always the line where"
4260 DATA "your input is entered.  Line 2 is the"
4270 DATA "Title Line.  Line 22 is where any errors"
4280 DATA "will be shown, etc."
4290 DATA ".sp"
4300 DATA "In addition, the left side of the screen"
4310 DATA "shows what choices you have available,"
4320 DATA "while the right side of the screen shows"
4330 DATA "the choices which you have already made."
4340 DATA ".sp"
4350 DATA "Following is a diagram which more clear-"
4360 DATA "ly shows you where to look for things on"
4370 DATA "the screen."
4380 DATA ".sp"
4390 DATA "Not all information will appear on all"
4400 DATA "screens, but when you see something,"
4410 DATA "it will always be in the same place."
4420 DATA ".pa"
4430 DATA ".h3 Screen Appearance"
4440 DATA ".pk Line   Line"
4450 DATA ".pk No.    Usage"
4460 DATA ".pk  1  +- Top Border -------------------------------------------+"
4470 DATA ".pk  2  |  Title Line                               Note No.     |"
4480 DATA ".pk  3  +- Separator ---------------+----------------------------+"
4490 DATA ".pk  4  |  No.  Description         |   Choices Made             |"
4500 DATA ".pk  5  |   1   1st Description     |                            |"
4510 DATA ".pk  6  |   2   2nd Description     |   Researched: Date         |"
4520 DATA ".pk  7  |   3   3rd Description     |                            |"
4530 DATA ".pk  8  |   4   4th Description     |   Person    : No.          |"
4540 DATA ".pk  9  |   5   5th Description     |     Given Names            |"
4550 DATA ".pk 10  |   6   6th Description     |     Surname                |"
4560 DATA ".pk 11  |   7   7th Description     |     Birthdate              |"
4570 DATA ".pk 12  |   8   8th Description     |                            |"
4580 DATA ".pk 13  |   9   5th Description     |   Source    : No.          |"
4590 DATA ".pk 14  |  10  10th Description     |     Selected Source        |"
4600 DATA ".pk 15  |  11  11th Description     |   Type      : No.          |"
4610 DATA ".pk 16  |  12  12th Description     |     Selected Type          |"
4620 DATA ".pk 17  +- Separator ---------------+   Event Date: Date         |"
4630 DATA ".pk 18  | Note:                                                  |"
4640 DATA ".pk 19  |                                                        |"
4650 DATA ".pk 20  | Content of an individual note.                         |"
4660 DATA ".pk 21  +- Bottom Border ----------------------------------------+"
4670 DATA ".pk 22   Error Message Line"
4680 DATA ".pk 23   Your Input Line"
4690 DATA ".pk 24   First Informational Message Line"
4700 DATA ".pk 25   Second Informational Message Line"
4710 DATA ".pa"
4720 DATA ".h3 Use of the Enter Key"
4730 DATA "Pressing the 'enter' key (by itself)"
4740 DATA "indicates that you do not want to change"
4750 DATA "the item requested.  It is bypassed, and"
4760 DATA "the next item is requested from you."
4770 DATA ".sp"
4780 DATA "When making an inquiry, it is assumed"
4790 DATA "that you want (all).  If you press the"
4800 DATA "'enter' key, without choosing any item,"
4810 DATA "you choice is assumed to be (all)."
4820 DATA ".h3 Use of / Enter (Slash Enter)"
4830 DATA "Typing a / (slash), followed by pressing"
4840 DATA "the 'enter' key, indicates that you are"
4850 DATA "finished with whatever it was that you"
4860 DATA "were doing at the time."
4870 DATA ".sp"
4880 DATA "If you were personalizing a list, it"
4890 DATA "means that you have finished your per-"
4900 DATA "sonalization, and are now ready to save"
4910 DATA "your new personalized list (or forget"
4920 DATA "it, etc.)."
4930 DATA ".sp"
4940 DATA "If you were entering or updating a Note"
4950 DATA "record, it means that you have finished"
4960 DATA "with your entry or update, and that you"
4970 DATA "are now ready to save the Note record"
4980 DATA "(or forget it, etc.)"
4990 DATA ".pa"
5000 DATA ".h3 Use of \ Enter (Backslash Enter)"
5010 DATA "Typing a \ (backslash), followed by"
5020 DATA "pressing the 'enter' key, indicates that"
5030 DATA "you want to see a portion of the list"
5040 DATA "that can be shown on the left side of"
5050 DATA "the display screen.  This facility"
5060 DATA "allows you to go through an entire list,"
5070 DATA "one section at a time, if you want to."
5080 DATA ".h3 Abbreviated Responses"
5090 DATA "Many of your responses may be abbrevia-"
5100 DATA "ted.  This means that you do not have"
5110 DATA "to type out the entire word, but just"
5120 DATA "the first letter of the word."
5130 DATA ".sp"
5140 DATA "In addition, if you want to enter"
5150 DATA "today's date, simply type a t, and"
5160 DATA "then press the 'enter' key."
5170 DATA ".sp"
5180 DATA "Words which may be abbreviated are:"
5190 DATA ".sp"
5200 DATA "  a  -  All"
5210 DATA "  d  -  Display"
5220 DATA "  f  -  Forget"
5230 DATA "  m  -  More"
5240 DATA "  p  -  Print"
5250 DATA "  s  -  Save"
5260 DATA "  s  -  Some"
5270 DATA "  t  -  Today's Date"
5280 DATA "  y  -  Yes"
5290 DATA ".sp"
5300 DATA "You may respond with either lower-case"
5310 DATA "or upper-case letters."
5320 DATA ".pa"
5330 DATA ".h3 Correcting Typing Mistakes"
5340 DATA "Sometimes you will make a mistake while"
5350 DATA "you are typing.  You may use the 'back-"
5360 DATA "space' key to back up, erasing the"
5370 DATA "errors, and then you can type the cor-"
5380 DATA "rect information."
5390 DATA ".h3 Replacing with Blanks"
5400 DATA "Occasionally, you might want to change"
5410 DATA "something from its present value to"
5420 DATA "blanks.  Since the 'enter' key has other"
5430 DATA "meanings, it will be necessary for you"
5440 DATA "to type a blank which has quotes around"
5450 DATA "it.  This is done by typing a quote,"
5460 DATA "then a space, then another quote, and"
5470 DATA "finally by pressing the 'enter' key."
5480 DATA ".sp"
5490 DATA "Such as:      ~ ~      (Must be exact)"
5500 DATA ".h3 Use of the Question-Mark"
5510 DATA "The question-mark is used to let you"
5520 DATA "search for an unused Note record, when"
5530 DATA "you are entering or updating those"
5540 DATA "Note records."
5550 DATA ".sp"
5560 DATA "If you are just starting the program,"
5570 DATA "searching will start from Note record"
5580 DATA "1.  If you have updated any Note, and"
5590 DATA "then type a question-mark in place of"
5600 DATA "the number of a Note record, searching"
5610 DATA "will begin at the last number that you"
5620 DATA "have used."
5630 DATA ".pa"
5640 DATA ".h2 GETTING STARTED"
5650 DATA "The user should perform the following"
5660 DATA "steps in starting the Notes and Source"
5670 DATA "ON DISPLAY programs.  (Note: The steps"
5680 DATA "essentially provide for making BASIC"
5690 DATA "and the Persons File from Genealogy ON"
5700 DATA "DISPLAY available, and starting the"
5710 DATA "program.)"
5720 DATA ".sp
5730 DATA " 1. Insert the PC DOS diskette into"
5740 DATA "    Drive 'a:'."
5750 DATA ".sp
5760 DATA " 2. If using the PCjr, insert the"
5770 DATA "    BASIC Cartridge into either slot."
5780 DATA ".sp
5790 DATA " 3. Turn the Printer On."
5800 DATA ".sp"
5810 DATA " 4. Turn the System On."
5820 DATA ".sp"
5830 DATA " 5. Type today's date if the system"
5840 DATA "    asks the user to Enter today's date."
5850 DATA "    (This is important, since it may be"
5860 DATA "    used by the program.)"
5870 DATA ".sp"
5880 DATA " 6. Type the correct time if the system"
5890 DATA "    asks the user to Enter the time."
5900 DATA ".sp"
5910 DATA "Note:  Make sure that your latest copy"
5920 DATA "of the Persons File from Genealogy ON"
5930 DATA "DISPLAY is available.  If you are using"
5940 DATA "a single-drive system, you will need to"
5950 DATA "copy the latest version to your Notes"
5960 DATA "diskette at this time.  This is done"
5970 DATA "with the COPY Command of DOS, as:"
5980 DATA ".pa"
5990 DATA "With the Notes Diskette in drive a:,"
6000 DATA "and the diskette with the Genealogy ON"
6010 DATA "DISPLAY Persons File in drive b:,"
6020 DATA ".sp"
6030 DATA " 7. Type: copy b:persfile a:"
6040 DATA "          and press the 'enter' key."
6050 DATA ".sp"
6060 DATA "Next, with the DOS Diskette in drive a:,"
6070 DATA ".sp"
6080 DATA " 8. Type: basic/s:256"
6090 DATA "          and press the 'enter' key."
6100 DATA ".sp"
6110 DATA "Note:  The /s:256 is essential, in order"
6120 DATA "to use files whose records are as long"
6130 DATA "as those in the Persons File of Gene-"
6140 DATA "alogy ON DISPLAY."
6150 DATA ".sp"
6160 DATA "Without the /s:256 the ~notesand.bas~"
6170 DATA "program gives an error message when it"
6180 DATA "tries to use the verifile (which has"
6190 DATA "one record which is 256 characters long)."
6200 DATA "The program is terminated, and it is"
6210 DATA "necessary for you to go back to DOS, and"
6220 DATA "bring up BASIC again, but with /s:256."
6230 DATA ".sp"
6240 DATA " 9. Replace the DOS Diskette with your"
6250 DATA "    Notes diskette in drive a:."
6260 DATA ".sp"
6270 DATA "10. Type: run ~notesand.bas~"
6280 DATA "           and press the 'enter' key."
6290 DATA ".sp"
6300 DATA "11.  Follow any instructions which"
6310 DATA "     appear at the bottom of each"
6320 DATA "     screen."
6330 DATA ".pa"
6340 DATA ".h2 HOW TO OPERATE."
6350 DATA ".h3 Selecting a Function"
6360 DATA "After you have typed:"
6370 DATA ".sp"
6380 DATA "   run ~notesand.bas~"
6390 DATA "       and pressed the 'enter' key,"
6400 DATA ".sp"
6410 DATA "you will see a Title Screen, and a"
6420 DATA "message to:
6430 DATA ".sp"
6440 DATA "  ~Press any key to continue.~"
6450 DATA ".sp"
6460 DATA "After pressing any key, you will see"
6470 DATA "a screen showing how four data files"
6480 DATA "are being prepared for your use."
6490 DATA ".sp"
6500 DATA "Next, you will see a menu, listing the"
6510 DATA "functions of Notes and Sources ON"
6520 DATA "DISPLAY, and asking you to type the num-"
6530 DATA "ber of one of the functions, and then to"
6540 DATA "press the 'enter' key."
6550 DATA ".sp"
6560 DATA "You may then select the function that"
6570 DATA "you desire."
6580 DATA ".pa"
6590 DATA ".h3 Create (Format) a Notes File"
6600 DATA "Usually, you will only select Function 1"
6610 DATA "once (in your lifetime).  This function"
6620 DATA "completely erases any Note file that"
6630 DATA "currently exists.  Then it creates a"
6640 DATA "new Note file, by writing 100 new, empty"
6650 DATA "records, with numbers where numbers"
6660 DATA "should be, and letters where letters"
6670 DATA "should be."
6680 DATA ".sp"
6690 DATA "After selecting Function 1, you are"
6700 DATA "given a second chance.  If you really"
6710 DATA "want to destroy an old file, and start"
6720 DATA "a new one, you may do so."
6730 DATA ".sp"
6740 DATA "  Type: y"
6750 DATA "        and press the 'enter' key."
6760 DATA ".sp"
6770 DATA "If this is really what you want to do,"
6780 DATA "the program will then KILL the old file,"
6790 DATA "and write 100 new records."
6800 DATA ".pa"
6810 DATA ".h3 Extend the Notes File"
6820 DATA "You may extend your Notes file at any"
6830 DATA "time, by selecting Function 2 from the"
6840 DATA "Menu."
6850 DATA ".sp"
6860 DATA "  Type: 2"
6870 DATA "    and press the 'enter' key."
6880 DATA ".sp"
6890 DATA "It is usually good practice to have only"
6900 DATA "as many empty Note records available as"
6910 DATA "you need at the present time, but not a"
6920 DATA "lot of additional records.  The reason"
6930 DATA "for this is that the program will only"
6940 DATA "search for a record up to the one with"
6950 DATA "the highest record number that has been"
6960 DATA "used, and never for one which has never"
6970 DATA "been formatted."
6980 DATA ".sp"
6990 DATA "After selecting Function 2, the program"
7000 DATA "formats an additional 100 records, and"
7010 DATA "returns to the Menu."
7020 DATA ".pa"
7030 DATA ".h3 Personalize the Sources"
7040 DATA "By selecting Function 3 from the Menu,"
7050 DATA "the user is able to enter or to change"
7060 DATA "the definitions of the Sources.  He is"
7070 DATA "able to do this at any time that the"
7080 DATA "Menu is shown."
7090 DATA ".sp"
7100 DATA "You will probably do this once when you"
7110 DATA "first start to use Notes and Sources ON"
7120 DATA "DISPLAY.  You may also do this to extend"
7130 DATA "your definitions at some later time."
7140 DATA "However, you should not rearrange this"
7150 DATA "list once you have entered Note records,"
7160 DATA "since doing so changes the content of"
7170 DATA "those Note records, as well."
7180 DATA ".h3 Personalize the Types"
7190 DATA "By selecting Function 4 from the Menu,"
7200 DATA "the user is able to enter or to change"
7210 DATA "the definitions of the Types.  He is"
7220 DATA "able to do this at any time that the"
7230 DATA "Menu is shown."
7240 DATA ".sp"
7250 DATA "You will probably do this once when you"
7260 DATA "first start to use Notes and Sources ON"
7270 DATA "DISPLAY.  You may also do this to extend"
7280 DATA "your definitions at some later time."
7290 DATA "However, you should not rearrange this"
7300 DATA "list once you have entered Note records,"
7310 DATA "since doing so changes the content of"
7320 DATA "those Note records, as well."
7330 DATA ".pa"
7340 DATA ".h3 Data Entry of Notes"
7350 DATA "By selecting Function 5, the user is"
7360 DATA "able to enter his Genealogical Notes."
7370 DATA ".sp"
7380 DATA "If you know the number of the Note that"
7390 DATA "you want to enter or change, you may"
7400 DATA "choose that Note record by typing its"
7410 DATA "number, and pressing the 'enter' key."
7420 DATA ".sp"
7430 DATA "If it is a new note, and you want the"
7440 DATA "program to find an empty Note record to"
7450 DATA "use, you may type a Question-mark, and"
7460 DATA "press the 'enter' key.  The program will"
7470 DATA "then search until it finds an empty Note"
7480 DATA "Record (or until it reaches the top of"
7490 DATA "those formatted).  It will then display"
7500 DATA "the contents of the Note, and ask you"
7510 DATA "to enter its Note number."
7520 DATA ".sp"
7530 DATA "At this point you should enter the Note"
7540 DATA "number (which will presently be shown"
7550 DATA "at the top of the screen, on the right,"
7560 DATA "but will have a minus-sign in front of"
7570 DATA "it).  Entering this number without the"
7580 DATA "minus-sign, makes it a real Note, not"
7590 DATA "just one that is unused."
7600 DATA ".sp"
7610 DATA "You should then follow the instructions"
7620 DATA "at the bottom of the screen, which will"
7630 DATA "lead you through the process of enter-"
7640 DATA "ing all of the information in the Note."
7650 DATA ".pa"
7660 DATA "You may use (\ enter) to see the next"
7670 DATA "12 Descriptions in any list, and do"
7680 DATA "it over and over again, if necessary,"
7690 DATA "until you find the one that you want."
7700 DATA ".sp"
7710 DATA "When you are through with your entry,"
7720 DATA "you may then s (save) the Note, if you"
7730 DATA "want to, or you may f (forget) it.  You"
7740 DATA "may also re-do part of it, by request-"
7750 DATA "ing m (more), which will take you back"
7760 DATA "to the top of the screen, so that you"
7770 DATA "may change any information within the"
7780 DATA "Note."
7790 DATA ".pa"
7800 DATA ".h3 Inquiry into Notes"
7810 DATA "By selecting Function 6, you are able"
7820 DATA "to make inquiries into your Notes, and"
7830 DATA "have the results of those inquiries"
7840 DATA "either displayed on your display screen,"
7850 DATA "or printed on your printer."
7860 DATA ".sp"
7870 DATA "First of all, you will be requested to"
7880 DATA "choose between showing a (all) of your"
7890 DATA "notes, or just s (some) of them.  Most"
7900 DATA "of the time you will want to just look"
7910 DATA "at some of them."
7920 DATA ".sp"
7930 DATA "If you have selected s (some) records,"
7940 DATA "you can then be presented with a list"
7950 DATA "of the first 12 persons from your"
7960 DATA "Genealogy ON DISPLAY Persons File,"
7970 DATA "through the use of '\ enter', and be"
7980 DATA "asked to choose one of them.  If the"
7990 DATA "person is not shown, you may use the"
8000 DATA "'\ enter' to see the next 12 persons."
8010 DATA "You may continue to go through the"
8020 DATA "names in your Persons File, until you"
8030 DATA "find the person that you want.  (If"
8040 DATA "you already know the number assigned"
8050 DATA "to the Person, you may enter it, with-"
8060 DATA "out scrolling through your Persons"
8070 DATA "File.)"
8080 DATA ".sp"
8090 DATA "You may also choose (all) of the per-"
8100 DATA "sons from your Persons file, by just"
8110 DATA "pressing the 'enter' key."
8120 DATA ".pa"
8130 DATA "After choosing one Person, or all of the"
8140 DATA "persons from your Persons file, you will"
8150 DATA "then be asked to select from your per-"
8160 DATA "sonalized list of Sources.  If you al-"
8170 DATA "ready know the number of the Source, you"
8180 DATA "may enter it without looking for it in"
8190 DATA "the list."
8200 DATA ".sp"
8210 DATA "You may use (\ enter) to see the next 12"
8220 DATA "Descriptions in your list, and do it"
8230 DATA "over and over again, if necessary, until"
8240 DATA "you find the one that you want."
8250 DATA ".sp"
8260 DATA "You may choose to enter the number of"
8270 DATA "the Source.  You may also choose (all)"
8280 DATA "sources by just pressing the 'enter'"
8290 DATA "key."
8300 DATA ".sp"
8310 DATA "After choosing one Source, or all of the"
8320 DATA "sources from your list of Sources, you"
8330 DATA "will then be asked to select from your"
8340 DATA "personalized list of Types.  If you"
8350 DATA "already know the number of the Type, you"
8360 DATA "may enter it without looking for it in"
8370 DATA "the list."
8380 DATA ".sp"
8390 DATA "You may use (\ enter) to see the next 12"
8400 DATA "Descriptions in your list, and do it"
8410 DATA "over and over again, if necessary, until"
8420 DATA "you find the one that you want."
8430 DATA ".sp"
8440 DATA "You may choose to enter the number of"
8450 DATA "the Type.  You may also choose (all)"
8460 DATA "types by just pressing the 'enter'"
8470 DATA "key."
8480 DATA ".pa"
8490 DATA "After you have made all of the selec-"
8500 DATA "tions, you are presented with four"
8510 DATA "choices.  You may d (display) the"
8520 DATA "results of your inquiry.  You may"
8530 DATA "p (print) the results of your inquiry."
8540 DATA "You may do m (more), meaning that you"
8550 DATA "want to re-form your inquiry.  Or,"
8560 DATA "finally, you may f (forget) the in-"
8570 DATA "quiry altogether."
8580 DATA ".sp"
8590 DATA "If you request printing, the results of"
8600 DATA "the inquiry will be printed on your"
8610 DATA "printer, eight records to a page.  If"
8620 DATA "you request display, the results of"
8630 DATA "the inquiry will be displayed on your"
8640 DATA "screen, three records to a screen."
8650 DATA ".sp"
8660 DATA "Doing more takes you back to the start"
8670 DATA "of the inquiry.  Forgetting takes you"
8680 DATA "back to the menu."
8690 DATA ".pa"
8700 DATA ".h2 HOW TO STOP."
8710 DATA "The user may stop at any time, by"
8720 DATA "pressing (and holding down) the Function"
8730 DATA "(FN) key, and then pressing the Break"
8740 DATA "(B) key on the PCjr."
8750 DATA ".sp"
8760 DATA "The user may stop at any time, by"
8770 DATA "pressing (and holding down) the control"
8780 DATA "(Ctrl) key, and then pressing the Break"
8790 DATA "key on the PC, the PC/XT, or the PC/AT."
8800 DATA ".h3 Stopping From the Menu."
8810 DATA "Whenever the Menu is shown, the program"
8820 DATA "can be ended by selecting Function"
8830 DATA "Number 0."
8840 DATA ".sp"
8850 DATA "Type:  0"
8860 DATA "       and press the 'enter' key."
8870 DATA ".pa"
8880 DATA ".h3 Stopping Personalization."
8890 DATA "Whenever the user is requested to enter"
8900 DATA "a description, he is also given the"
8910 DATA "choice of typing a (/ enter), to end"
8920 DATA "his descriptions.  At this point,"
8930 DATA ".sp"
8940 DATA "Type:  /"
8950 DATA "       and press the 'enter key."
8960 DATA ".sp"
8970 DATA "This completes the definitions, and the"
8980 DATA "user is requested to indicate whether"
8990 DATA "he wants the new definitions saved, or"
9000 DATA "whether they should be forgotten.  At"
9010 DATA "this point, either:"
9020 DATA ".sp"
9030 DATA "Type:  s"
9040 DATA "       and press the 'enter' key, or"
9050 DATA ".sp"
9060 DATA "Type:  f"
9070 DATA "       and press the 'enter key."
9080 DATA ".pa"
9090 DATA ".h3 Stopping Data Entry."
9100 DATA "Whenever the user is requested to choose"
9110 DATA "from one of the lists, he is also given"
9120 DATA "the choice of typing '/ enter', to end"
9130 DATA "his data entry.  At this point,"
9140 DATA ".sp"
9150 DATA "Type:  /"
9160 DATA "and press the 'enter' key."
9170 DATA ".sp"
9180 DATA "This completes the data entry, and the"
9190 DATA "user is requested to indicate whether"
9200 DATA "he wants the new Note to be saved, or"
9210 DATA "whether it should be forgotten.  At this"
9220 DATA "point, either:"
9230 DATA ".sp"
9240 DATA "Type:  s"
9250 DATA "       and press the 'enter' key, or"
9260 DATA ".sp"
9270 DATA "Type:  f"
9280 DATA "       and press the 'enter' key."
9290 DATA ".sp"
9300 DATA "This returns the user to the screen"
9310 DATA "where he is requested to enter the"
9320 DATA "number of the Note to be used for data"
9330 DATA "entry or update.  At this point,"
9340 DATA ".sp"
9350 DATA "Type:  0"
9360 DATA "       and press the 'enter' key."
9370 DATA ".sp"
9380 DATA "This returns the user to the menu, where"
9390 DATA "he may select function 0, and press the"
9400 DATA "'enter' key, to end the program."
9410 DATA ".pa"
9420 DATA ".h3 Stopping Inquiry."
9430 DATA "The user may stop during an inqiry, by"
9440 DATA "first completing the selection of a"
9450 DATA "person, a source, and a type (or all,"
9460 DATA "for any of these).  Selecting (all), by"
9470 DATA "pressing the 'enter' key is probably"
9480 DATA "the simplest way."
9490 DATA ".sp"
9500 DATA "After each has been selected, the user"
9510 DATA "is presented with a choice of what he"
9520 DATA "wants to do next.  By selecting to"
9530 DATA "f (forget), the program returns to the"
9540 DATA "menu.  He can then select function 0,"
9550 DATA "and press the 'enter' key, to end the"
9560 DATA "program."
9570 DATA ".sp"
9580 DATA "If the inquiry has been completed, and"
9590 DATA "the results of the inquiry are being"
9600 DATA "displayed or printed, the user may"
9610 DATA "press the Esc (escape) key.  This will"
9620 DATA "cause the inquiry to stop after com-"
9630 DATA "pletion of the output of the next"
9640 DATA "record which meets the requirements"
9650 DATA "specified in the inquiry."
9660 DATA ".sp"
9670 DATA "The user will receive a message which"
9680 DATA "shows that the search is complete, and"
9690 DATA "be asked to press any key to continue."
9700 DATA "He should do so."
9710 DATA ".sp"
9720 DATA "The user will then see the summary of"
9730 DATA "the records which met the criteria of"
9740 DATA "the inquiry, and again, be asked to"
9750 DATA "press any key to continue.  He should"
9760 DATA "do so."
9770 DATA ".pa"
9780 DATA "The Menu is then displayed, and the"
9790 DATA "user may end the program by selecting"
9800 DATA "function 0, and pressing the 'enter"
9810 DATA "key."
9820 DATA ".pa"
9830 DATA "(This page is intentionally blank.)"
9840 DATA ".eof"
9850 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0594

     Volume in drive A has no label
     Directory of A:\

    APPENDIX BAS     13982   6-23-86   8:22a
    CLEANDOC BAT       199   4-14-86   6:23a
    DIRECTOR BAS     15719   6-23-86   8:25a
    FILES594 TXT      1866   1-27-87   3:42p
    GENERAL  BAS     20767   6-23-86   8:14a
    HIGH                11   3-29-86   7:15a
    INTRODUC BAS     13749   6-20-86   2:39p
    NOTES594 TXT      1792   7-17-86   3:12p
    NOTESAND BAS     35979   6-23-86   6:32a
    OVERVIEW BAS      8388   6-22-86   5:42p
    PRINTERS BAS      1352   3-14-86   2:24p
    REFERENC BAS     21450   6-23-86   6:43a
    RUNFIRST BAS      1328   4-05-86   9:16a
    SOURFILE           795   3-27-86   7:41p
    TABLEOFC BAS     11607   6-20-86   4:30p
    TYPEFILE           892   6-20-86   2:27p
    USINGTHE BAS     31800   6-23-86   8:20a
    VERIFILE           256   1-15-86   9:22a
           18 file(s)     181932 bytes
                          130048 bytes free
