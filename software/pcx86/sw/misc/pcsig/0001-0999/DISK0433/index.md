---
layout: page
title: "PC-SIG Diskette Library (Disk #433)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0433/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0433"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "KERMIT ASM MODULES 1 OF 2 (ALSO 434)"

    KERMIT is a communications system that allows different types of
    computers to exchange information.  The files on this disk are used by
    smaller computers so that they may communicate with an IBM
    minicomputer or mainframe computer.
    
    System Requirements:  128K, one disk drive, and monochrome display
    
    How to Start:  To view the documentation for Disks No. 433 and 434,
    place Disk No. 433 in your disk drive and enter TYPE MSXSYS.DOC.  To
    run any program file, type its name and press <ENTER>.
    
    File Descriptions:
    The First Disk Contains:
    MSHP150  EXE  Hewlett-Packard 150
    MSGENER  EXE  Generic MS-DOS KERMIT.
    MSMKBOO  C    Four-for-Three encoder, DEC-20 specific.
    MSBOOT   FOR  Used on mainframe when downloading KERMIT.
    MSRBBOO  BAS  Used on Rainbow to download KERMIT from mainframe.
    MSRBBOO  HLP  Info on MSRBBOO.BAS.
    MSPCBOOT BAS  Used on PC to download KERMIT from mainframe.
    MSPCTRAN EXE  Compiled version of MSPCTRAN.BAS.
    MSPCTRAN BAS  Converts MSKERMIT.BOO to an executable file.
    MSRBEMAC INI  EMACS function key setup for Kermit-MS/Rainbow.
    MSXSYS   DOC  Description of system dependent modules.
    MSXRB    ASM  DEC Rainbow 100, 100+ module.
    MSXHP150 ASM  Hewlett-Packard 150 module.
    MSXGEN   ASM  Generic MS-DOS KERMIT module.
    MSRB100  EXE  DEC Rainbow 100, 100+
    
    The Second Disk Contains:
    MSAPC    HLP  Documentation for NEC APC Kermit
    MSAPC    EXE  NEC APC
    MSXTIPRO BWR  Documentation for TI Professional Kermit
    MSXAPC   ASM  NEC APC module
    MSXTEK   ASM  TI Pro Tektronix emulation module
    MSXTIPRO ASM  TI Pro module
    MSTIPRO  EXE  TI Professional
    MSYZ100  ASM  Zenith Z-100 Y-module
    MSXTIPRO BAT  TI Pro assembly/link script
    MSWANG   EXE  Wang PC
    MSXZ100  ASM  Zenith Z-100 X-module
    MSZ100   EXE  Zenith Z-100
    MSZ100   HLP  Documentation for Heath/Zenith Z-100 Kermit
    MSXWNG   ASM  Wang PC module
    MSWANG   EXE  Wang APC
    MSAPC    EXE  NEC APC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MSPCBOOT.BAS

```bas
1    'Run this program on the PC in conjunction with a Fortran program
2    '(MSBOOT.FOR) on the mainframe to download Kermit to the PC.  This
3    'program will run for about thirty minutes, depending on line speed.
4    ' Bill Catchings, June 1984 (Revised Sept 1984)
5    ' Columbia University Center for Computing Activities

10   t$ = time$				' Save the time.
20   defint a-z				' All integer to gain some speed.
30   n$ = chr$(0)
40   z = asc("0")
50   t = asc("~")-z
60   def fnuchr%(a$)=asc(a$)-z
70   open "com1:9600,s,7,1,cs,ds,cd" as #1

100  print#1,"O ,2"			' Char constants "O", " " and ","
110  input#1,f$
120  if len(f$) < 5 then goto 110	' In case the host echos the ACK.
130  input#1,n
135 print f$+" "+str$(n)
140  if n > 20 then goto 900
150  open f$ for output as #2
160  print "Outputting to "+f$
170  goto 300				' Correct version of the file.

200  gosub 1000				' Do turnaround char processing
210  print#1,"NO"			' Tell host data was incorrect.
220  goto 320

300  gosub 1000				' Do turnaround char processing
310  print#1,"OK"			' Say the line was all right.
320  input#1,x$
330  if len(x$) < 5 then goto 320	' In case the host echos ACK/NAK
340  input#1,n
345 print x$+" "+str$(n)
350  if len(x$) <> n then goto 200	' Length doesn't match, NAK it.
360  if x$ = "&&&&&&&&&&" then goto 800	' End of file?
370  y$ = ""				' Set output string to null.
380  goto 500

400  print#2,y$;			' Print the output string.
410  goto 300				' Go get another line.

500  if len(x$) = 0 goto 400		' Done with input string?
510  a = fnuchr%(x$)
520  if a = t then goto 700		' Null repeat character?
530  q$=mid$(x$,2,3)			' Get the quadruplet to decode.
540  x$=mid$(x$,5)
550  b = fnuchr%(q$)
560  q$ = mid$(q$,2)
570  c = fnuchr%(q$)
580  q$ = mid$(q$,2)
590  d = fnuchr%(q$)

600  y$ = y$ + chr$(((a * 4) + (b \ 16)) and 255) ' Decode the quad.
610  y$ = y$ + chr$(((b * 16) + (c \ 4)) and 255)
620  y$ = y$ + chr$(((c * 64) + d) and 255)
630  goto 500				' Get another quad.
	
700  x$ = mid$(x$,2)			' Expand nulls.
710  r = fnuchr%(x$)			' Get the number of nulls.
715 print " Null: ",r
720  x$ = mid$(x$,2)
730   for i=1 to r			' Loop, adding nulls to string.
740   y$ = y$ + n$
750   next
760  print#2,y$;			' Print the nulls.
770  y$ = ""				' Clear the output buffer.
780  goto 500

800  print "Processing complete, elapsed time: "+t$+" to "+time$
810  print "Output in "+f$
820  close #1,#2
830  goto 9999

900  print "?The format of the BOO file is incorrect"
910  goto 820

1000 x$ = input$(1,#1)		' Make this line RETURN for full-duplex
1010 if x$ <> chr$(17) then goto 1000	' Loop for a turn around char.
1020 return

9999 end
```

## MSPCTRAN.BAS

```bas
1    'Use this BASIC program on the PC if you have the printable file 
2    'MSKERMIT.BOO already on the PC to convert it to an executable
3    'file.  This program takes about 30 minutes to run on a PC with
4    'floppy disks.
5    ' Bill Catchings, June 1984
6    ' Columbia University Center for Computing Activities

10   t$ = time$				' Save the time.
20   defint a-z				' Integer to gain some speed.
30   n$ = chr$(0)
40   z = asc("0")
50   t = asc("~")-z
60   def fnuchr%(a$)=asc(a$)-z
70   open "MSKERMIT.BOO" for input as #1

100  input#1,f$				' Is this the right file?
110  if len(f$) > 20 then goto 900
120  open f$ for output as #2
130  print "Outputting to "+f$

200  if eof(1) then goto 800		' Exit nicely on end of file.
210  input#1,x$				' Get a line.
220  y$ = ""				' Clear the output buffer.
230  goto 400

300  print#2,y$;			' Print output buffer to file.
310  goto 200				' Get another line.

400  if len(x$) < 2 goto 300		' Is the input buffer empty?
410  a = fnuchr%(x$)
420  if a = t then goto 700		' Null repeat character?
430  if len(x$) < 3 goto 300		' Is the input buffer empty?
440  q$=mid$(x$,2,3)			' Get the quadruplet to decode.
450  x$=mid$(x$,5)
460  b = fnuchr%(q$)
470  q$ = mid$(q$,2)
480  c = fnuchr%(q$)
490  q$ = mid$(q$,2)
500  d = fnuchr%(q$)

600  y$ = y$ + chr$(((a * 4) + (b \ 16)) and 255) ' Decode the quad.
610  y$ = y$ + chr$(((b * 16) + (c \ 4)) and 255)
620  y$ = y$ + chr$(((c * 64) + d) and 255)
630  goto 400				' Get another quad.

700  x$ = mid$(x$,2)			' Expand the nulls.
710  r = fnuchr%(x$)			' Get the number of nulls.
715 print " Null: ",r
720  x$ = mid$(x$,2)
730   for i=1 to r			' Loop, adding nulls to string.
740   y$ = y$ + n$
750   next
760  print#2,y$;			' Output the nulls to the file.
770  y$ = ""				' Clear the output buffer.
780  goto 400

800  print "Processing complete, elapsed time: "+t$+" to "+time$
810  print "Output in "+f$
820  close #1,#2
830  goto 9999

900  print "?The version of the MSKERMIT.BOO file is incorrect"
910  goto 820

9999 end
```

## MSRBBOO.BAS

```bas
1 DEFINT A-Z:ZRUBOUT$=CHR$(8)+" "+CHR$(8):ZESCAPE$=CHR$(27):'Sreen utility definitions B.E.
2 ZLEADIN$=ZESCAPE$+"[":ZCLEAR$=ZLEADIN$+"J":ZHOME$=ZLEADIN$+"0;0H"
3 ZDOUBLE1$=ZESCAPE$+"#3":ZDOUBLE2$=ZESCAPE$+"#4":WIDTH 255
4 ZBOLD$=ZLEADIN$+"1m":ZBLINK$=ZLEADIN$+"5m":ZSAVE$=ZESCAPE$+"7"
5 ZREVERSE$=ZLEADIN$+"7m":ZOFF$=ZLEADIN$+"0m":ZREST$=ZESCAPE$+"8"
6 ZGRAPHON$=ZESCAPE$+"(0":ZGRAPHOFF$=ZESCAPE$+"(B":ZBACKER$=ZLEADIN$+"0K"
7 ZKEYPAD$=ZESCAPE$+"=":ZBELL$=CHR$(7):ZCLRLIN$=ZLEADIN$+"2K"
8 DEF FNXY$(ZX,ZY)=ZLEADIN$+MID$(STR$(INT(ZX)),2)+";"+MID$(STR$(INT(ZY)),2)+"H":'Cursor Adressing function (ZX=Line[1..24],ZY=Column[1..80])
9 GOTO 25:'This to be modified to GOTO Start of program <===================
10 ZSTRING$="":ZORGL=ZLENGTH:PRINT ZSAVE$+ZREVERSE$+STRING$(ZORGL,95)+ZOFF$+STRING$(ZORGL,8);:'General Input-GOSUB (Input:ZLENGTH, OUTPUT:ZLENGTH,ZSTRING,ZNUMBER,ZRANDOM)
11 ZTEMP$=INKEY$:ZRANDOM=(ZRANDOM MOD 2000)+1:IF LEN(ZTEMP$)=0 THEN 11'Wait for Char
12 IF ASC(ZTEMP$)=127 OR ASC(ZTEMP$)=8 THEN 17 ELSE IF ASC(ZTEMP$)=21 THEN PRINT ZREST$+ZBACKER$;:ZLENGTH=ZORGL:GOTO 10 ELSE PRINT ZTEMP$;'RUBOUT
13 IF ASC(ZTEMP$)=3 THEN GOTO 9999 ELSE IF ZTEMP$ >= "a" THEN ZTEMP$=CHR$(ASC(ZTEMP$)-32)'Uppercase Modify GOTO xx to Control-C intercept <=====================
14 IF ASC(ZTEMP$)=13 THEN PRINT:GOTO 16'RETURN finishes
15 ZSTRING$=ZSTRING$+ZTEMP$:ZLENGTH=ZLENGTH-1:IF ZLENGTH >0 THEN 11
16 ZLENGTH=LEN(ZSTRING$):ZNUMBER=VAL(ZSTRING$): RETURN
17 IF LEN(ZSTRING$)>0 THEN ZLENGTH=ZLENGTH +1:ZSTRING$=LEFT$(ZSTRING$,(LEN(ZSTRING$)-1)):PRINT ZRUBOUT$;:GOTO 11 ELSE PRINT ZBELL$;: GOTO 11'Cleanup after RUBOUT
18 'End of VT100 definitions *****

19	'Use this BASIC program on the CP/M side of the Rainbow (with
20	'Microsoft MBasic-86) to translate the MSRB100.BOO file on
21	'your CP/M disk to binary .EXE format, then from the MS-DOS
22	'side use RDCPM to transfer the result to the MS-DOS file
23	'system.  This program takes about 30 minutes to run on a Rainbow
24	'with floppy disks.
25	'- Bill Catchings, CU; modified for Rainbow by Bernie Eiben, DEC.
26	PRINT ZHOME$+ZCLEAR$;"Rainbow 4for3 Code Expander Version 1"
30	PRINT:PRINT: N$ = CHR$(0)
40	Z = ASC("0")
50	T = ASC("~")-Z
60	DEF FNUCHR%(A$)=ASC(A$)-Z
61	PRINT "FILE-NAME to Expand : ";:ZLENGTH=13:GOSUB 10:'Get Input
70	OPEN "I",1,ZSTRING$
100	INPUT#1,F$			' Is this the right file?
110	IF LEN(F$) > 20 THEN GOTO 900
120	OPEN "O",2,F$			' Ouput-name from file
130	PRINT "Outputting to "+F$
200	IF EOF(1) THEN GOTO 800		' Exit nicely on end of file.
210	INPUT#1,X$			' Get a line.
220	Y$ = ""				' Clear the output buffer.
230	GOTO 400
300	PRINT#2,Y$;			' Print output buffer to file.
310	GOTO 200			' Get another line.
400	IF LEN(X$) < 4 GOTO 300		' Is the input buffer empty?
410	A = FNUCHR%(X$)
420	IF A = T THEN GOTO 700		' Null repeat character?
430	Q$=MID$(X$,2,3)			' Get the quadruplet to decode.
440	X$=MID$(X$,5)
450	B = FNUCHR%(Q$)
460	Q$ = MID$(Q$,2)
470	C = FNUCHR%(Q$)
480	Q$ = MID$(Q$,2)
490	D = FNUCHR%(Q$)
500	Y$ = Y$ + CHR$(((A * 4) + (B \ 16)) AND 255) ' Decode the quad.
510	Y$ = Y$ + CHR$(((B * 16) + (C \ 4)) AND 255)
520	Y$ = Y$ + CHR$(((C * 64) + D) AND 255)
530	GOTO 400			' Get another quad.
700	X$ = MID$(X$,2)			' Expand the nulls.
710	R = FNUCHR%(X$)			' Get the number of nulls.
715	PRINT FNXY$(6,5)+ZCLRLIN$;" Null: ",R
720	X$ = MID$(X$,2)
730	FOR I=1 TO R			' Loop, adding nulls to string.
740	Y$ = Y$ + N$
750	NEXT
760	PRINT#2,Y$;			' Output the nulls to the file.
770	Y$ = ""				' Clear the output buffer.
780	GOTO 400
800	PRINT "Processing complete"
810	PRINT "Output in "+F$
820	CLOSE #1,#2
830	GOTO 9999
900	PRINT "?The FORMAT of the ",ZSTRING$," file is incorrect"
910	GOTO 820
9999	END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0433

     Volume in drive A has no label
     Directory of A:\

    FILES433 TXT      1371  11-05-85   3:08p
    MSBOOT   FOR      2152  12-08-84   1:36a
    MSGENER  EXE     36992  12-08-84   1:38p
    MSHP150  EXE     38784  12-08-84   1:40p
    MSMKBOO  C        8402  12-08-84   2:44a
    MSPCBOOT BAS      2733  12-08-84   2:45a
    MSPCTRAN BAS      2097  12-08-84  11:23a
    MSPCTRAN EXE     19274  12-08-84  12:42p
    MSRB100  EXE     73984  12-08-84   1:43p
    MSRBBOO  BAS      3760  12-08-84   2:53a
    MSRBBOO  HLP      1306  12-08-84   2:54a
    MSRBEMAC INI      1911   7-28-84   5:04a
    MSXGEN   ASM     13848  12-08-84   3:48a
    MSXHP150 ASM     10248   7-28-84   5:35a
    MSXRB    ASM     44620  12-08-84  11:07a
    MSXSYS   DOC     13731   7-28-84   5:50a
           16 file(s)     275213 bytes
                           37888 bytes free
