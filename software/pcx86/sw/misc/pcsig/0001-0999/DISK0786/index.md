---
layout: page
title: "PC-SIG Diskette Library (Disk #786)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0786/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0786"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HARD DISK MANAGEMENT"

    This disk is meant to be used with the book `"Hard Disk Management with
    MS-DOS and PC-DOS," from TAB Books. The book gives you tips on how to
    run your hard drive at top efficiency. The following programs are
    included on this disk:
    
    AUTOMENU -- This is the solution to learning all the DOS commands to
    access different programs.  No longer will you have to type in a list of
    commands to find the program you are looking for.  With a single press
    of a key, almost any program can be made available.  AUTOMENU gives you
    an easy-to-read and understandable menu of options to choose from.  It
    automatically does the commands to run the program you have selected.
    AUTOMENU also lets you set up your own customized menu systems.
    
    DISK TOOL -- This program lets you look at and make changes to what is
    stored on your disks.  You can work with individual files or the disk as
    a whole, and perform operations you normally couldn't do with DOS.  In
    short, it lets you manipulate everything on your disks easily and with
    very few restrictions.
    
    PACKDISK -- You can keep your hard disk running at top performance by
    filling those empty sections on your hard drive with data from the outer
    edges of your hard disk.  PACKDISK reintegrates lost clusters (file
    allocation units) into the available space on the disk and packs the
    root directory and subdirectories.  It also has other features, such as
    an option to delete an entire subdirectory with one easy command, a
    HIDE/UNHIDE program, and a program to create a RAM disk in your
    computer's memory.  And when you get to the point where you have too
    many subdirectories on your hard drive to keep track of, use the TREED
    program to map them all out on your screen.
    
    And for that valuable information on your hard drive that you don't want
    anyone to touch, there is the LOCK program.  This protects your data
    safely from accidental (or deliberate and unauthorized) viewing or
    editing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRYPT.BAS

```bas
100 KEY OFF
110 COLOR 7,0
120 WIDTH 80
130 SCREEN 0,0,0
140 CLS
150 PRINT "A Simple File Cryption Program in BASIC"
160 PRINT "Written by Dan Gookin, Copyright (c) TAB Books"
170 PRINT
180 PRINT "Will you be <D>ecrypting or <E>ncrypting? (D or E): ";
190 B$ = INPUT$(1)
200 B$ = CHR$(ASC(B$) AND 95)
210 IF B$><"E" AND B$><"D" GOTO 190
230 PRINT B$
240 PRINT
250 LINE INPUT "Enter the INPUT file: ";FILEIN$
260 LINE INPUT "Enter the OUTPUT file: ";FILEOUT$
270 PRINT
280 LINE INPUT "Enter the keyword pattern: ";KEYWORD$
290 KEY.LEN = LEN(KEYWORD$)
300 IF KEY.LEN = 0 THEN 280
320 REM ******************************
330 REM Entryption/Decryption routines
340 REM ******************************
350 OPEN FILEIN$ FOR INPUT AS 1
360 OPEN FILEOUT$ FOR OUTPUT AS 2
370 FOR X=1 TO KEY.LEN
380     IF EOF(1) THEN 460
390     D$ = MID$(KEYWORD$,X,1)
400     A$=INPUT$(1,1)
410		ON INSTR("DE",B$) GOSUB 480,510
420     PRINT#2,C$;
430     PRINT C$;
440 NEXT X
450 GOTO 370
460 CLOSE
470 END
475 REM ******************************
480 REM Decrypt it:
490 C$ = CHR$((ASC(A$)-ASC(D$)) MOD 255)
500 RETURN
510 REM Encrypt it:
520 C$ = CHR$((ASC(A$)+ASC(D$)) MOD 255)
530 RETURN
```

## PASSWORD.BAS

```bas
1000 '=========================================================
1010 'PASSWORD.BAS (From "Softalk", March, May & July, 1984)
1020 'minor mods and color added by P. Eskildsen, July 10, 1984
1030 'other mods and color removed by Dan Gookin, March 5th, 1987
1040 'Uses BASICA 2.0 key trapping to kill Ctrl-Alt-Del,
1050 'Ctrl-C, & Ctrl-Break -- user cannot RESET
1060 '
1070 KEY OFF
1080 KEY 15,CHR$(12) + CHR$(83)                'CTRL-ALT-DEL
1090 KEY 16,CHR$(4) + CHR$(46)                 'CTRL-C
1100 KEY 17,CHR$(4) + CHR$(70)                 'CTRL-BREAK
1110 ON KEY(15) GOSUB 1520 : KEY(15) ON
1120 ON KEY(16) GOSUB 1520 : KEY(16) ON
1130 ON KEY(17) GOSUB 1520 : KEY(17) ON
1140 '
1150 'Read in password
1160 '
1170 OPEN "password.dat" FOR INPUT AS 1
1180 LINE INPUT#1,PASSWORD$
1190 CLOSE
1200 ON ERROR GOTO 1620
1210 '
1220 'Check user's password entry one char at a time, as entered:
1230 '
1240 CLS
1250 LOCATE ,,1
1260 PRINT "Please enter your password:";
1270 TRY = 0
1280 I = 0
1290 A$ = INKEY$: IF A$="" THEN 1290
1300    IF A$ = "~" THEN 1420
1310	I = I + 1
1320    IF A$ <> MID$(PASSWORD$,I,1) THEN 1350
1330    IF I = LEN(PASSWORD$) THEN 1420
1340 GOTO 1290
1350    TRY = TRY + 1
1360    IF TRY >= 3 THEN 1480
1370    PRINT "Wrong! Try again from start of password."
1380 GOTO 1280
1390 '
1400 'Access granted
1410 '
1420 PRINT
1430 PRINT TAB(30);"Welcome!"
1440 SYSTEM
1450 '
1460 'Too many attempts, lock system
1470 '
1480 CLS
1490 LOCATE 12,20
1500 PRINT "** System Locked **"
1510 GOTO 1510
1520 '
1530 'Display ignore messages
1540 '
1550 BEEP
1560 READ AH$
1570 PRINT AH$
1580 RETURN
1590 DATA "So there!", "Think you're smart?"
1600 DATA "That won't work either.", "I'm sorry"
1610 DATA "Try harder...", "Okay.  Give up now."
1620 RESTORE 1590
1630 RESUME 1560
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0786

     Volume in drive A has no label
     Directory of A:\

    ABOUT             5475   6-24-87   9:47a
    AUTOMENU ARC     86329   6-24-87   9:46a
    DISKTOOL ARC     62052   6-24-87   9:46a
    FILES786 TXT      2601   6-24-87   9:52a
    GO       BAT        38   6-24-87   9:45a
    GO       TXT       386   6-24-87   9:47a
    INSTALL  BAT       450   6-24-87   9:45a
    PACKDISK ARC     25554   6-24-87   9:46a
    PKX34A20 COM     58368   6-24-87   9:47a
    TOOLS1   ARC     53029   6-24-87   9:46a
           10 file(s)     294282 bytes
                           23552 bytes free
