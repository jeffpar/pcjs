---
layout: page
title: "PC-SIG Diskette Library (Disk #277)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0277/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0277"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINDFILE"

    FINDFILE is a utility which no hard-disk user should be without.
    Menu- driven, it searches through subdirectories to find a file you
    may have lost.  It includes a host of support routines to help you
    manage your files.  Besides this support, it provides improved TREE
    display, single or multiple file operations.
    
    Features:
    
    ~ Menu driven
    ~ Improved TREE display
    ~ Single or multiple file operations.
    
    System Requirements:  Hard disk, ASCII printer, BASIC
    
    How to Start:  Enter TYPE TYPE.ME for installation instructions.
    
    Suggested Registration:  FINDFILE $5.00
    
    File Descriptions:
    
    TYPE     ME   Tells you to LISTER file COVER
    BUG           Bug report form, send to author
    COVER         A letter to the user about installation
    LISTER   EXE  Used to print BUG, COVER, DOC and ORDER
    ORDER         Order form for On-Disk Software
    DSKLABEL      A correct disk label
    DOC           The documentaion
    MOVEXE   BAT  Moves FindFile to disk - EXE version
    MOVBAS   BAT  Moves FindFile to disk - BAS version
    MENU     BAT  Executes the menu program
    MOVLIB   BAT  Moves FindFile to disk - for people with BASRUN.EXE
    $$DOEXBA BAT  Setup batch file
    FINDFILE BAT  Finds a file
    FFILE    BAS  Finds any file or group of files
    COMSEP   BAS  Makes $$TREE into $$TREE.CSV for other programs to use
    $$MENU   BAS  Gives you the menu of options
    $$NEWTRE BAT  Setup batch file
    FFILEBIG BAS  Use FFILE except on more than about 1,000 files
    MAPTREE  BAS  Converts TREE output to something useful
    SAMECHK  BAS  Checks for duplicate files
    *        LIB  Compiled version to be used with BASRUN.EXE (6 files)
    SETDRV   BAS  Resets the drive FindFile is using
    FFILEMEN DAT  The data which defines your menu
    *        EXE  Faster compiled versions of BASIC programs (6 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## $$MENU.BAS

```bas
10 REM Program $$Menu: On-Disk Software, 1984
20 REM See documentation for copying guidelines
30 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
40 DEFINT A-Z: DIG$="0123456789"
50 OPEN "KYBD:" FOR INPUT AS #2: OPEN "SCRN:" FOR OUTPUT AS #1: DIM MENU$(50,2)
60 WHILE MENU$(J,1)<>"EOF MENU":J=J+1:INPUT MENU$(J,1),MENU$(J,2):WEND
70 MENU$(J,1)="Return to DOS.": MENU$(J,2)="EXIT"
80 CLS:FOR I=1 TO 3: PRINT #1, MENU$(I,1): NEXT
90 LOCATE 5,1,1: FOR I=4 TO J: PRINT #1, TAB(10) STR$(I-3) TAB(15) MENU$(I,1): NEXT
100 PRINT #1,: PRINT #1, SPACE$(20) "Choose 1 to" STR$(J-3)": ";
110 A$=INPUT$(1,2):PRINT #1,A$;:L=INSTR(DIG$,A$): IF L=0 THEN GOTO 80 ELSE K=L-1
120 IF J-3<10 OR K>1 THEN GOTO 160
130 A$=INPUT$(1,2): PRINT #1,A$;:L=INSTR(DIG$+CHR$(13),A$): IF L=0 GOTO 80
140 IF L>10 GOTO 160 ELSE K=K*10 +L-1
150 IF K<1 OR K>J-3 THEN GOTO 80
160 CLOSE #1: OPEN "T.bat" FOR OUTPUT AS #1: PRINT #1, "echo off": PRINT #1, "set $$parm=xxxxxxxxxx"
170 IF K<J-3 THEN PRINT #1, "Command /c " MENU$(K+3,2): PRINT #1, "menu" ELSE PRINT #1, "EXIT"
180 CLOSE: SYSTEM
```

## COMSEP.BAS

```bas
1 REM Program ComSep: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 PRINT "Converting $$TREE file information into comma separated values in $$TREE.CSV."
5 DEFINT A-Z: NUL$=CHR$(0): OPEN "$$TREE" FOR INPUT AS #1: OPEN "$$TREE.CSV" FOR OUTPUT AS #2
6 I=VARPTR(#1):A1=PEEK(21+I):A2=PEEK(22+I):DA=A1 MOD 32:MO=A1\32+(A2 MOD 2)*8:YR=1980+A2\2
7 PRINT:PRINT "$$TREE file was created on " STR$(MO) STR$(-DA) STR$(-YR) ". Today is " DATE$
8 WHILE NOT EOF(1): LINE INPUT #1,IN$: B$=LEFT$(IN$,12)
9    IF INSTR(A$,NUL$) GOTO 15 ELSE IF B$=STRING$(12,245) GOTO 14
10    A$=LEFT$(IN$,8): GOSUB 16: FIL$=B$: A$=MID$(IN$,10,3): GOSUB 16: EXT$=B$
11    A$=MID$(IN$,15,2): GOSUB 16: DRV$=B$
12    L=LEN(IN$): IF L>16 THEN A$=RIGHT$(IN$,L-17): GOSUB 16: PTH$=B$: ELSE PTH$=""
13    WRITE #2,DRV$,PTH$,FIL$,EXT$
14 WEND
15 CLOSE:SYSTEM
16 J=LEN(A$):FOR K=J TO 1 STEP -1: IF MID$(A$,K,1)<>" " THEN J=K: K=0
17 NEXT: IF J>0 THEN B$=LEFT$(A$,J) ELSE B$=""
18 RETURN
```

## FFILE.BAS

```bas
1 REM Program Ffile: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 REM $Title:'FFILE: find file in tree structure.': rem $Subtitle:' Version 1.0'
5 DEFINT A-Z: DIM FILNAM$(3000), EXT$(3000), PATH$(3000):TRUE=-1: FALSE=0: CR$=CHR$(13): LF$=CHR$(10)
6 PRINT "On-Disk Software: Public Domain Program FFILE: Donation $5.00 for use."; 
7 PRINT "Box 661, Lincoln, MA 01773, USA          To order disk: $15.00";
8 OPEN "$$tree" FOR INPUT AS #1:I=VARPTR(#1):A1=PEEK(21+I):A2=PEEK(22+I):DA=A1 MOD 32:MO=A1\32+(A2 MOD 2)*8:YR=1980+A2\2
9 PRINT:PRINT "$$TREE file was created on " STR$(MO) STR$(-DA) STR$(-YR) ". Today is " DATE$
10 REM
11 WHILE NOT EOF(1):LINE INPUT #1,IN$:IF EOF(1) OR LEFT$(IN$,3)="   " THEN DOSW=FALSE ELSE DOSW=TRUE
12   WHILE DOSW:DOSW=FALSE:NOF=NOF+1:A$=LEFT$(IN$,8):GOSUB 39:FILNAM$(NOF)=B$
13   A$=MID$(IN$,10,3):GOSUB 39:EXT$(NOF)=B$:PATH$(NOF)=RIGHT$(IN$,LEN(IN$)-14):WEND:WEND
14 REM
15 SFIL$="xx":WHILE SFIL$<>"":NOHITS=0:GOSUB 23:IF SFIL$="" AND SEXT$="" GOTO 21
16   FOR FCHK=1 TO NOF:C2$=FILNAM$(FCHK):C1$=SFIL$:GOSUB 32:IF NOT EQUAL GOTO 19
17     C2$=EXT$(FCHK):C1$=SEXT$:GOSUB 32:IF NOT EQUAL GOTO 19
18     NOHITS=NOHITS+1:PRINT FILNAM$(FCHK) "." EXT$(FCHK) TAB(14) "is in " PATH$(FCHK)
19   NEXT
20   PRINT NOF" data files were checked, " NOHITS " matches found.":PRINT
21 WEND:CLOSE:SYSTEM
22 REM ------- SUBROUTINES -------
23 PRINT:INPUT "File name for search: ",A$:IF A$="" THEN SFIL$="": SEXT$="":RETURN
24 I=INSTR(A$,"."):IF I=0 THEN AL$=A$:AR$="*" ELSE GOSUB 46
25 A$=AL$:GOSUB 29:SFIL$=A$:A$=AR$:GOSUB 29:SEXT$=A$:IF LEN(SFIL$)>8 THEN SFIL$=LEFT$(SFIL$,8):PRINT "Filename truncated."
26 IF LEN(SEXT$)>3 THEN SEXT$=LEFT$(SEXT$,3):PRINT "Extension truncated."
27 PRINT "Searching " F$ " for " SFIL$ "." SEXT$:RETURN
28 REM
29 REM upper case, trim leading and trailing blanks
30 GOSUB 39:A$=B$:GOSUB 41:A$=B$:GOSUB 43:A$=B$:RETURN
31 REM
32 'check c1$ against c2$ using * ? wildcards
33 EQUAL=TRUE:IF C1$="*" THEN RETURN
34 FOR I=1 TO 8:T1$=MID$(C1$,I,1):T2$=MID$(C2$,I,1): IF T1$="*" THEN I=99:GOTO 37
35   IF T1$="?" THEN GOTO 37
36   IF T1$<>T2$ THEN I=99:EQUAL=FALSE
37 NEXT:RETURN
38 REM
39 B$=A$:WHILE RIGHT$(B$,1)=" ":B$=LEFT$(B$,LEN(B$)-1):WEND:RETURN
40 REM
41 WHILE LEFT$(A$,1)=" ":A$=RIGHT$(A$,LEN(A$)-1):WEND:RETURN
42 REM
43 B$="":FOR I=1 TO LEN(A$):J=ASC(MID$(A$,I,1)):IF J>96 AND J<123 THEN J=J-32
44 B$=B$+CHR$(J):NEXT:RETURN
45 REM
46 AL$="":AR$="":J=LEN(A$):IF I<=0 THEN AR$=A$:RETURN ELSE IF I>J THEN AL$=A$:RETURN
47 IF I>1 THEN AL$=LEFT$(A$,I-1)
48 IF I<J THEN AR$=RIGHT$(A$,J-I)
49 A$=AL$+AR$:RETURN
```

## FFILEBIG.BAS

```bas
1 REM Program Ffile: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 REM $Title:'FFILE: find file in tree structure.': rem $Subtitle:' Version 1.0'
5 DEFINT A-Z: TRUE=-1: FALSE=0: CR$=CHR$(13): LF$=CHR$(10)
6 PRINT "On-Disk Software: Public Domain Program FFILE: Donation $5.00 for use."; 
7 PRINT "Box 661, Lincoln, MA 01773, USA          To order disk: $15.00";
8 OPEN "$$tree" FOR INPUT AS #1:I=VARPTR(#1):A1=PEEK(21+I):A2=PEEK(22+I):DA=A1 MOD 32:MO=A1\32+(A2 MOD 2)*8:YR=1980+A2\2
9 PRINT:PRINT "$$TREE file was created on " STR$(MO) STR$(-DA) STR$(-YR) ". Today is " DATE$
10  SFIL$="xx":WHILE SFIL$<>"":NOHITS=0:GOSUB 20:IF SFIL$="" AND SEXT$="" GOTO 18
11   WHILE NOT EOF(1):LINE INPUT #1,IN$:IF EOF(1) OR LEFT$(IN$,3)="   " THEN DOSW=FALSE ELSE DOSW=TRUE
12     WHILE DOSW:NOF=NOF+1:DOSW=FALSE:A$=LEFT$(IN$,8):GOSUB 33:FILNAM$=B$
13       A$=MID$(IN$,10,3):GOSUB 33:EXT$=B$:PATH$=RIGHT$(IN$,LEN(IN$)-14)
14       C2$=FILNAM$:C1$=SFIL$:GOSUB 27:IF NOT EQUAL GOTO 16
15       NOHITS=NOHITS+1:PRINT FILNAM$ "." EXT$ TAB(14) "is in " PATH$
16   WEND: WEND: CLOSE #1: OPEN "$$tree" FOR INPUT AS #1
17   PRINT NOF" data files were checked, " NOHITS " matches found.":PRINT
18 WEND:CLOSE:SYSTEM
19 REM ------- SUBROUTINES -------
20 PRINT:INPUT "File name for search: ",A$:IF A$="" THEN SFIL$="": SEXT$="":RETURN
21 I=INSTR(A$,"."):IF I=0 THEN AL$=A$:AR$="*" ELSE GOSUB 37
22 A$=AL$:GOSUB 25:SFIL$=A$:A$=AR$:GOSUB 25:SEXT$=A$:IF LEN(SFIL$)>8 THEN SFIL$=LEFT$(SFIL$,8):PRINT "Filename truncated."
23 IF LEN(SEXT$)>3 THEN SEXT$=LEFT$(SEXT$,3):PRINT "Extension truncated."
24 PRINT "Searching " F$ " for " SFIL$ "." SEXT$:RETURN
25 REM upper case, trim leading and trailing blanks
26 GOSUB 33:A$=B$:GOSUB 34:A$=B$:GOSUB 35:A$=B$:RETURN
27 'check c1$ against c2$ using * ? wildcards
28 EQUAL=TRUE:IF C1$="*" THEN RETURN
29 FOR I=1 TO 8:T1$=MID$(C1$,I,1):T2$=MID$(C2$,I,1): IF T1$="*" THEN I=99:GOTO 32
30 IF T1$="?" THEN GOTO 32
31 IF T1$<>T2$ THEN I=99:EQUAL=FALSE
32 NEXT:RETURN
33 B$=A$:WHILE RIGHT$(B$,1)=" ":B$=LEFT$(B$,LEN(B$)-1):WEND:RETURN
34 WHILE LEFT$(A$,1)=" ":A$=RIGHT$(A$,LEN(A$)-1):WEND:RETURN
35 B$="":FOR I=1 TO LEN(A$):J=ASC(MID$(A$,I,1)):IF J>96 AND J<123 THEN J=J-32
36 B$=B$+CHR$(J):NEXT:RETURN
37 AL$="":AR$="":J=LEN(A$):IF I<=0 THEN AR$=A$:RETURN ELSE IF I>J THEN AL$=A$:RETURN
38 IF I>1 THEN AL$=LEFT$(A$,I-1)
39 IF I<J THEN AR$=RIGHT$(A$,J-I)
40 A$=AL$+AR$:RETURN
```

## MAPTREE.BAS

```bas
1 REM Program Maptree: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 DEFINT A-Z
5 OPEN "scrn:" FOR OUTPUT AS #1: OPEN "$$tree" FOR OUTPUT AS #2:OPEN "%tree" FOR INPUT AS #3
6 PRINT #1,"On-Disk Software: FindFile System: Program MAPTREE: Donation $5.00 for use.";
7 PRINT #1,"Box 661, Lincoln, MA 01773, USA                       To order disk: $15.00";
8 PRINT #1,:PRINT #1,:PRINT #1,"   Directories:": PRINT #1,:PRINT #2, STRING$(18,254) " IBM bug": SW=0
9 WHILE NOT SW
10   LINE INPUT #3, IN$: IF EOF(3) THEN GOTO 20 ELSE IF LEN(IN$)<7 THEN GOTO 19
11   IF LEFT$(IN$,6)="Volume" THEN GOTO 19
12   IF MID$(IN$,11,3)="byt" THEN SW=-1: GOTO 19
13   IF LEFT$(IN$,3)= "Dir" THEN PRINT #1, RIGHT$(IN$,LEN(IN$)-10): NODIR=NODIR+1: GOTO 19
14  NOFILES=NOFILES+1: IN$=RIGHT$(IN$,LEN(IN$)-6): LENIN=LEN(IN$): J=LENIN
15  I=INSTR (IN$,"."): IF I>0 THEN J=I-1 ELSE I=LENIN+1
16  WHILE MID$(IN$,J,1) <> "\": J=J-1: WEND: PATH$=LEFT$(IN$,J-1): J=J+1
17  FILNAM$ = MID$(IN$,J,I-J): IF I=LENIN+1 THEN EXT$="" ELSE EXT$=MID$(IN$,I+1,LENIN-I)
18  PRINT #2,FILNAM$ TAB(10) EXT$ TAB(15) PATH$
19 WEND
20 PRINT#1,: PRINT #1,"You have" STR$(NODIR) " directories which use" STR$(NODIR*3-3) " files for directory information."
21 PRINT #1, NOFILES " data files were found.": PRINT#1,:PRINT #1,: CLOSE: SYSTEM
```

## SAMECHK.BAS

```bas
1 REM Program SameChk: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 REM SAMECHK.BAS from On-Disk Software
5 DEFINT A-Z:T=-1:F=0:NUL$=CHR$(0):OPEN "$$TREE" FOR INPUT AS #1: FR=-1
6 I=VARPTR(#1):A1=PEEK(21+I):A2=PEEK(22+I):DA=A1 MOD 32:MO=A1\32+(A2 MOD 2)*8:YR=1980+A2\2
7 PRINT:PRINT "$$TREE file was created on " STR$(MO) STR$(-DA) STR$(-YR) ". Today is " DATE$:
8 WHILE NOT EOF(1):LINE INPUT #1,A$:B$=LEFT$(A$,12):IF INSTR(A$,NUL$) GOTO 15
9 IF FR THEN FR=0 ELSE IF B$=STRING$(12,254) GOTO 15
10 IF B$>C$ THEN C$=B$:NEWR=T:GOTO 14
11 IF B$<C$ THEN PRINT"$$TREE must be sorted by file name before checking duplicate file names.":GOTO 16
12 IF NEWR THEN PRINT:PRINT O$;:NEWR=F:M=M+1
13 PRINT ", " RIGHT$(A$,LEN(A$)-12);
14 O$=A$:WEND
15 PRINT:PRINT:PRINT M" duplicate file names found."
16 CLOSE:SYSTEM
```

## SETDRV.BAS

```bas
1 REM Program SetDrv: On-Disk Software, 1984
2 REM See documentation for copying guidelines
3 REM For more information, write to P.O. Box 661, Lincoln, MA, 01773
4 REM setdrv.bas sets the environment drive parameter using t.bat
5 OPEN "t.bat" FOR INPUT AS #1: DIM IN$(100)
6 WHILE NOT EOF(1): LINE INPUT #1, IN$(J+1): J=J+1: WEND
7 CLOSE #1: LOCATE ,,1
8 OPEN "T.bat" FOR OUTPUT AS #1
9 CLS: PRINT "Enter new drive letter: ";: A$=INPUT$(1): PRINT A$ ":";
10 PRINT: PRINT: PRINT "Is this correct? ";: B$=INPUT$(1): PRINT B$
11 IF INSTR("Yy",B$)=0 GOTO 9
12 A$="set drive="+ A$+ ":"
13 FOR I=1 TO J: IF I=J THEN PRINT #1, A$
14 PRINT #1, IN$(I): NEXT
15 CLOSE: SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0277

     Volume in drive A has no label
     Directory of A:\

    TYPE     ME        743  10-08-84  11:52a
    BUG               1885   9-19-84   1:45a
    COVER             3736   1-31-85   5:56p
    DOC              50930   1-31-85   8:43p
    DSKLABEL           171   1-26-85   6:43p
    ORDER             4139   1-01-85  12:14p
    LISTER   EXE     20608   1-30-85  11:14p
    MOVBAS   BAT       278   1-31-85   2:53p
    MOVEXE   BAT       276   1-31-85   2:54p
    MOVLIB   BAT       341   1-31-85   2:52p
    ________ ___         0   2-01-85   1:20p
    MENU     BAT        49   1-30-85  10:46p
    FINDFILE BAT      1120   1-31-85   2:30p
    $$DOEXBA BAT       394   1-31-85   2:24p
    $$NEWTRE BAT       427   1-31-85   2:27p
    $$MENU   BAS       898   2-01-85   1:20p
    COMSEP   BAS       901   2-01-85   1:21p
    FFILE    BAS      2290   2-01-85   1:21p
    FFILEBIG BAS      2133   2-01-85   1:21p
    MAPTREE  BAS      1207   2-01-85   1:21p
    SAMECHK  BAS       774   2-01-85   1:21p
    SETDRV   BAS       578   2-01-85   1:21p
    COMSEP   LIB      2048   1-30-85  11:12p
    FFILE    LIB      3456   1-30-85  11:07p
    FFILEBIG LIB      3200   1-31-85   2:15p
    MAPTREE  LIB      2432   1-31-85   2:13p
    SAMECHK  LIB      1920   1-30-85  11:09p
    SETDRV   LIB      1792   1-30-85  11:10p
    COMSEP   EXE     19712   1-30-85  11:12p
    FFILE    EXE     22016   1-30-85  11:07p
    FFILEBIG EXE     21760   1-31-85   2:14p
    MAPTREE  EXE     20096   1-31-85   2:13p
    SETDRV   EXE     19072   1-30-85  11:10p
    SAMECHK  EXE     19456   1-30-85  11:09p
    FFILEMEN DAT       722   1-30-85  10:33p
           35 file(s)     231560 bytes
                           72704 bytes free
