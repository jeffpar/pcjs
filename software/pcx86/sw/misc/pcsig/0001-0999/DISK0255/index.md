---
layout: page
title: "PC-SIG Library Disk #255"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0255/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0255"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 14"

    This entry in our DOS utility series includes a comprehensive collection
    of tools for handling files, configuring some system options (NEWBELL,
    and SCRNCOLR), cleaning up directories (OLDER and PURGEDUP), and
    finding lost files (WHEREIS).  Some very nice BASIC routines are
    included.  For instance, SCREEN is an input-verify routine and DOCUFILE
    helps you generate custom help screens.
    
    How to Start: To run a COM program simply type its name and press
    <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running BASIC
    programs, please refer to the GETTING STARTED section in this catalog.
    To read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  DOCUFILE  $10.00
    
    File Descriptions:
    
    NEWBELL  ASM  Source for NEWBELL.COM
    NEWBELL  COM  Run once to shorten DOS (not BASIC) bell tone
    BATQUES  COM  Prompts for character returned as error level
    HERMREAD ME   Notes on BATQUES, SCRNCOLR, Compaq video, and FORMAT
    BATQUES  ASM  Source for BATQUES.COM
    BATQUES  DOC  Documents BATQUES.COM  (2K)
    BAT-CD   ASM  Source for BATCD.COM
    KBD_FIX  ASM  Source for KEY_FIX.COM  (See Softalk PC, Nov 83-Jan 84)
    BAT-CD   DOC  Documents BATCD.COM
    BAT-CD   COM  Changes working directory based on standard input
    DOS-SIZE DOC  Reference table, size of various DOS versions
    SCRNCOLR COM  Intercepts screen writes to change colors
    SCRNCOLR ASM  Source for SCRNCOLR.COM
    SCRNCOLR DOC  Documents SCRNCOLR.COM  (2K)
    KBD_FIX  COM  Expands DOS typeahead buffer to 160 characters
    KBFIX    DOC  Documentation for KBFIX.COM
    KBFIX    ASM  Source for KBFIX.COM
    KBFIX    COM  CAPS, NUM & SCROLL flags plus a 127 byte kybd buffer
    L4       ASM  Source for L4.COM
    L4       DOC  Documentation for L4.COM  (4K)
    L4       COM  Displays file w/ up/down paging, horz scroll, find
    WHEREIS  COM  Searches subdirectories for filename
    WHEREIS  ASM  Source for WHEREIS.COM
    OLDER    ASM  Source for OLDER.COM
    OLDER    COM  Returns information on relative age of two files
    SCREEN   BAS  Utility for data input and verification
    LABEL    DOC  Documentation for LABEL.EXE
    LABEL    C    Source for LABEL.EXE
    LABEL    EXE  Change/Create Volume Labels - command line input
    SCREEN   DOC  Documentation for SCREEN.BAS  (3.6K)
    TIMER    EXE  Provides continuous time of day clock on screen
    MORSE    BAS  Morse code practice program
    PURGEDUP COM  Compares DIRs & erases = fnams with <= date/time
    DOSEDIT  COM  Provides re-executable history file of DOS commands
    PURGEDUP DOC  Documentation for PURGEDUP.COM
    DOCUFILE BAS  Generates BASIC program Help screens from text file
    DOSEDIT  DOC  Documentation for DOSEDIT.COM  (3.2K)
    DOCUFDOC BAS  Sample made using DOCUFILE.BAS and DOCUFILE.DOC
    DOCUFILE DOC  Documentation for DOCUFILE.BAS  (3.6K)
    SDIR     DOC  Documentation for SDIR.COM
    SDIR     COM  Sorted Directory with numerous options - best to date
    BYE      BAS  Protects screen, provides date & time on idle system
    CHN      PAS  Provides command line execution of Turbo .CHN files
    SPEED    ASM  Source for SPEED.COM, easily modified to your taste
    SPEED    COM  Modifies disk parameter table
    PX       DOC  Documentation for PX.COM  (14K)
    PX       COM  Procedure Cross Referencer for ASM and MASM
    CRYPTO   BAS  Aids in solving cryptograms
    LIST     DOC  Documentation for LIST.COM  (2.1K)
    LIST     COM  ASCII file lister, viable alternative to TYPE/MORE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BYE.BAS

```bas
5 'BYE - DOESN'T BURN SCREEN IN ONE PLACE AND KEEP DATE ACCURATE
10 WHILE T$=TIME$:IF INKEY$<>"" THEN CLS:SYSTEM
15 WEND
20 KEY OFF:SCREEN 0,0,0:COLOR 7,0,0:CLS
30 LOCATE 1+VAL(MID$(TIME$,7,2)) MOD 25,1+VAL(MID$(TIME$,4,2)):PRINT TIME$;"  ";DATE$;
40 T$=TIME$
50 GOTO 10
```

## CRYPTO.BAS

```bas
100 'crypto - aids in solving crytograms
200 ' (C) 1984  by Hal Sampson (408) 866-9472
250 TLF$=CHR$(&HA)+CHR$(&HA)+CHR$(&HA)
300 KEY OFF:CLS:DEFINT A-Z
400 DIM C(30)
500 PRINT "Type Cryptogram on the next three lines (using all editing keys)","Press ENTER when you are sure it's correct:"
600 LINE INPUT C$
700 C$=""
800 FOR R=3 TO 6
900 FOR C=1 TO 80
910 C$=C$+CHR$(SCREEN(R,C)):IF RIGHT$(C$,2)="  " THEN C$=LEFT$(C$,LEN(C$)-1)
920 NEXT C:NEXT R
1000 FOR K=79 TO LEN(C$) STEP 79
1100 M=K
1200 FOR M=K TO K-78 STEP -1
1300 IF MID$(C$,M,1)=" " THEN C$=LEFT$(C$,M-1)+TLF$+MID$(C$,M+1):GOTO 1500
1400 NEXT M
1500 NEXT K
1600 O$=C$
1700 FOR I=1 TO LEN(C$):M=ASC(MID$(C$,I,1))
1800 IF M >= 65 THEN P=M OR 96:MID$(C$,I,1)=CHR$(P):C(P-96)=C(P-96)+1:MID$(O$,I,1)=" "
1900 NEXT I
2000 CLS
2100 ' calculate letter frequency distribution
2200 ' sort
2300 DIM S(30)
2400 FOR I=1 TO 26:S(I)=I:NEXT I
2500 FOR I=1 TO 25
2600 FOR J=I+1 TO 26
2700 IF C(S(I))<C(S(J)) THEN SWAP S(J),S(I)
2800 NEXT J:NEXT I
2900 FOR I=1 TO 26
3000 IF C(S(I))>0 THEN PRINT"  ";CHR$(S(I)+96);
3100 NEXT I
3200 PRINT
3300 FOR I=1 TO 26
3400 IF C(S(I)) > 0 THEN PRINT USING "###";C(S(I));
3500 NEXT I
3600 LOCATE 4,1
3700 PRINT"  e  t  a  o  i  n  s  h  r  d  l  u  c  m  f  w  y  p"
3800 LOCATE 6,1:PRINT C$
3900 LOCATE 7,1:PRINT O$
4000 LOCATE 18,1:PRINT"Substitute for ";
4100 I=ASC(INKEY$+" "):IF I=32 THEN 4100
4200 S$=CHR$(I)
4300 PRINT S$;
4400 PRINT" with ";
4500 I=ASC(INKEY$+"@"):IF I=64 THEN 4500
4600 W$=CHR$(I)
4700 IF W$>= "a" THEN W$=CHR$(ASC(W$) AND &H5F)
4800 PRINTW$;
4900 S$=CHR$(ASC(S$) OR 96)
5000 L=1
5100 M=INSTR(L,O$,W$):IF M= 0 THEN 5400
5200   MID$(O$,M,1)=" ":L=M+1
5300 GOTO 5100
5400 '
5500 L=1
5600 M=INSTR(L,C$,S$):IF M= 0 THEN 5900
5700   MID$(O$,M,1)=W$:L=M+1
5800 GOTO 5600
5900 '
6000 LOCATE 3,1
6100 S=ASC(S$)-96
6200 FOR I= 1 TO 26
6400 IF SCREEN(3,I*3)=ASC(W$) THEN LOCATE 3,I*3:PRINT" ";
6600 IF S(I)=S THEN LOCATE 3, I*3:PRINT W$;
6650 IF SCREEN(4,I*3)=ASC(W$)+32 THEN LOCATE 4,I*3:PRINT W$;
6700 NEXT I
6800 GOTO 3900
```

## DOCUFDOC.BAS

```bas
1000 PRINT "DocuFile - Help Screen Generator         	            General Information"
1002 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1004 PRINT ""
1006 PRINT "DocuFile will take any standard text file and create a basic program to"
1008 PRINT "display the text file. This allows you to create help screens from your"
1010 PRINT "favorite text editor and then add all the PRINT statements automatically."
1012 PRINT "This is beneficial for two reasons. 1 - if you need to insert portions of text"
1014 PRINT "you do so with your text editor and then regenerate the help screens with  "
1016 PRINT "DocuFile. 2 - all the prompts for next page and previous page are added"
1018 PRINT "wherever you indicate a page break."
1020 PRINT ""
1022 PRINT "This program was developed by Global Technologies Corporation and has been "
1024 PRINT "placed in public domain for the benefit of all. If you feel this program is"
1026 PRINT "beneficial to your needs please send a check for $10.00 to Global Technologies"
1028 PRINT "P.O. Box 441000 Aurora Colorado 80044."
1030 PRINT ""
1032 PRINT "Please copy this program and give it to as many people as you want."
1034 PRINT 
1036 PRINT "N)ext page, P)revious page, or C)ancel ";
1038 A$=INKEY$:IF A$="" THEN  1038
1040 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1042 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1044 CLS
1046 PRINT "DocuFile - Help Screen Generator         	               Source Text File"
1048 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1050 PRINT ""
1052 PRINT "The source text file is the word processing file that you are going to"
1054 PRINT "convert to Basic language file code for purposes of generating easy"
1056 PRINT "to use help screens that may be called from Basic applications.             "
1058 PRINT ""
1060 PRINT "Enter the file name with a disk drive letter if it does not reside on"
1062 PRINT "the drive you are currently defaulted to. For Example [B:TEXTFILE.EXT]."
1064 PRINT ""
1066 PRINT "The source text file must be a standard ASCII file and must not contain"
1068 PRINT "special control characters single or double quotation marks a semicolons"
1070 PRINT "or commas! If you must have commas or special punctuation in the help"
1072 PRINT "screen add it after DocuFile has created the help screen program."
1074 PRINT 
1076 PRINT "N)ext page, P)revious page, or C)ancel ";
1078 A$=INKEY$:IF A$="" THEN  1078
1080 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1082 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1084 CLS
1086 PRINT "Docufile - Help Screen Generator         		    Help Screen Program"
1088 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1090 PRINT ""
1092 PRINT "The destination help screen is the Basic program file that will contain the "
1094 PRINT "text from your source file converted into Basic source code. This file "
1096 PRINT "should be named as the help program you will be running from your Basic"
1098 PRINT "application program."
1100 PRINT ""
1102 PRINT "Enter the file name with a disk drive letter if it will not reside on"
1104 PRINT "the drive you are currently defaulted to. For example [B:DESTFILE.BAS]."
1106 PRINT ""
1108 PRINT "The output code file will be generated with Basic PRINT statements and"
1110 PRINT "may be executed from any Basic application as a subroutine. The program        "
1112 PRINT "generated will contain RETURN statements on every page and at the end of"
1114 PRINT "the entire subroutine to facilitate use with other programs and appli-"
1116 PRINT "cations without modifications. If you need to run the help screen as a free"
1118 PRINT "standing program simply replace all RETURN statements with SYSTEM statements."
1120 PRINT 
1122 PRINT "N)ext page, P)revious page, or C)ancel ";
1124 A$=INKEY$:IF A$="" THEN  1124
1126 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1128 IF A$="P" OR A$="p" THEN CLS:GOTO  1046
1130 CLS
1132 PRINT "DocuFile - Help Screen Generator                                       AutoPage"
1134 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1136 PRINT ""
1138 PRINT "The AutoPage function automatically places pause/continue prompts wherever"
1140 PRINT "an [*] is found in the document text file. The asterix [*] must be in the "
1142 PRINT "first column of any line in the text file. When used a prompt will appear"
1144 PRINT "when the listing reaches that point and three options will be offered. "
1146 PRINT ""
1148 PRINT "(N)ext page (P)revious Page or C)ancel"
1150 PRINT ""
1152 PRINT "If you choose not to have AutoPage enter these features for you may"
1154 PRINT "place such prompts as you desire using whatever text editor is available."
1156 PRINT "This may be necessary if you want to chain to other programs from a help"
1158 PRINT "screen."
1160 PRINT ""
1162 PRINT "AutoPage will RETURN program control to where it was called from with the"
1164 PRINT "RETURN statement."
1166 PRINT 
1168 PRINT "N)ext page, P)revious page, or C)ancel ";
1170 A$=INKEY$:IF A$="" THEN  1170
1172 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1174 IF A$="P" OR A$="p" THEN CLS:GOTO  1086
1176 CLS
1178 SYSTEM
```

## DOCUFILE.BAS

```bas
10 ' docufile
20 ' (c) 1984 by Global Technologies Corporation
30 ' author: W. French
100 CLS
110 PRINT "DocuFile - (c) 1984 by Global Technologies"
120 PRINT "------------------------------------------"
130 PRINT
140 INPUT "Enter source text file name............ ",INFILE$
150 PRINT
160 INPUT "Enter help screen program file name.... ",OUTFILE$
170 PRINT
180 INPUT "Enter starting line number............. ",L
190 PRINT
192 CLS
194 PRINT "DocuFile - (c) 1984 by Global Technologies"
196 PRINT "------------------------------------------"
198 PRINT:PRINT "Creating help screen, please stand by..."
200 ' file i/o
210 GOSUB 800:' open source file for reading...
220 GOSUB 900:' open destination file for writting...
300 ' build help screen from source file...
301 TOP=L:PTOP=L
310 IF EOF(1) THEN 350
320 INPUT #1,TEXT$
322 IF LEFT$(TEXT$,1)="*" THEN GOSUB 400:GOTO 340
325 TEXT$=STR$(L)+" print "+CHR$(34)+TEXT$+CHR$(34)
330 PRINT #2,TEXT$
335 L=L+2
340 GOTO 310
350 TEXT$=STR$(L)+" return"
360 L=L+2
370 PRINT #2,TEXT$
380 CLS                 
390 SYSTEM
400 ' page break subr...
420 TEXT$=STR$(L)+" print "         
422 L=L+2
430 PRINT #2,TEXT$
440 TEXT$=STR$(L)+" print "+CHR$(34)+"N)ext page, P)revious page, or C)ancel "+CHR$(34)+";"
442 L=L+2
450 PRINT #2,TEXT$
460 TEXT$=STR$(L)+" a$=inkey$:if a$="+CHR$(34)+CHR$(34)+" then "+STR$(L)
462 L=L+2
470 PRINT #2,TEXT$
480 TEXT$=STR$(L)+" if a$="+CHR$(34)+"C"+CHR$(34)+" or a$="+CHR$(34)+"c"+CHR$(34)+" then cls:return"
490 L=L+2
500 PRINT #2,TEXT$
510 TEXT$=STR$(L)+" if a$="+CHR$(34)+"P"+CHR$(34)+" or a$="+CHR$(34)+"p"+CHR$(34)+" then cls:goto "+STR$(PTOP)
512 L=L+2
520 PRINT #2,TEXT$
530 TEXT$=STR$(L)+" cls"
540 L=L+2
550 PRINT #2,TEXT$
555 PTOP=TOP
560 TOP=L
570 RETURN
800 ' open source file
810 OPEN INFILE$ FOR INPUT AS 1
820 RETURN
900 ' open destination file
910 OPEN OUTFILE$ FOR OUTPUT AS #2
920 RETURN
```

## MORSE.BAS

```bas
10    ' Morse Code Practice Program. Elwood Downey, WB0OEW, August, 1983.
20    ' Written for the IBM PC in Microsoft Basica, V1.1, for PC-DOS V1.1.
30    ' Revised November, 1983, to allow typing in responses.
40    '
50    CLS
60    KEY OFF
70    TYPEWAIT = 200     ' time to wait if user typing in responses
80    F = 600            ' initial tone frequency
90    '
100   GOSUB 1400         ' give directions and ask setup questions
110   '
120   ' initialize code strings.
130   ' to add more characters, such as apostrophe, increase numcodes,
140   ' add code string and character at end of current lists and add case
150   ' to main loop, below.
160   NUMCODES = 41  ' . , / ? - plus 26 + 10
170   DIM CODES$(NUMCODES-1)
180   DIM CHARS$(NUMCODES-1)
190   FOR I=0 TO NUMCODES-1
200     READ CODES$(I)
210   NEXT
220  FOR I=0 TO NUMCODES-1
230    READ CHARS$(I)
240  NEXT
250  ' code strings. in one-to-one correspondence with characters, below.
260  DATA ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "...."
270  DATA "..", ".---", "-.-", ".-..", "--"
280  DATA "-.", "---", ".--.", "--.-", ".-.", "...", "-"
290  DATA "..-", "...-", ".--", "-..-", "-.--", "--.."
300  DATA "-----", ".----", "..---", "...--", "....-", "....."
310  DATA "-....", "--...", "---..", "----."
320  DATA ".-.-.-", "--..--", "-..-.", "..--..", "-...-"
330  ' characters.
340  DATA "A", "B", "C", "D", "E", "F", "G", "H"
350  DATA "I", "J", "K", "L", "M"
360  DATA "N", "O", "P", "Q", "R", "S", "T"
370  DATA "U", "V", "W", "X", "Y", "Z"
380  DATA "0", "1", "2", "3", "4", "5"
390  DATA "6", "7", "8", "9"
400  DATA ".", ",", "/", "?", "-"
410 '
420 ' set up arrow keys to change speed and frequency.
430 PRINT CHR$(24); " "; CHR$(25); " to raise or lower tone,   ";
440 PRINT CHR$(27); " "; CHR$(26); " for slower or faster code."
450 PRINT "Ctrl-Break to quit, F9 to pause."
460 PRINT
470 ON KEY(11) GOSUB 940: KEY(11) ON
480 ON KEY(14) GOSUB 950: KEY(14) ON
490 ON KEY(12) GOSUB 990: KEY(12) ON
500 ON KEY(13) GOSUB 980: KEY(13) ON
510 ON KEY(9) GOSUB 1140: KEY(9) ON
520 '
530 ' init constants and screen.
540 SIL = 32767         ' special code for no tone
550 GOSUB 1020          ' calculate dit, dah and space lengths.
560 GOSUB 1080          ' display wpm and freq
570 '
580 ' define character type checking functions
590  DEF FNLOWER(C$) = "a"<=C$ AND C$<="z"
600  DEF FNUPPER(C$) = "A"<=C$ AND C$<="Z"
610  DEF FNDIGIT(C$) = "0"<=C$ AND C$<="9"
615  DEF FNTOUPPER$(C$) = CHR$(ASC(C$)-32)
620 '
630 ' main loop. read (or generate) each character, sound it and print it.
640  IF RANFILE THEN GOSUB 1210: ELSE C$ = INPUT$(1,#1)
650  IF " "=C$ OR C$=CHR$(13) THEN GOSUB 890: GOTO 760
660  IF "."=C$ THEN MORSE=36: GOTO 750  ' set morse to codes$ array index
670  IF ","=C$ THEN MORSE=37: GOTO 750
680  IF "/"=C$ THEN MORSE=38: GOTO 750
690  IF "?"=C$ THEN MORSE=39: GOTO 750
700  IF "-"=C$ THEN MORSE=40: GOTO 750
710  IF FNLOWER(C$) THEN C$ = FNTOUPPER$(C$)
720  IF FNUPPER(C$) THEN MORSE=ASC(C$)-ASC("A"):  GOTO 750
730  IF FNDIGIT(C$) THEN MORSE=ASC(C$)-ASC("0")+26: GOTO 750
740  GOTO 770   ' non-morse character so skip it
750  IF TYPE>0 THEN GOSUB 1260: ELSE GOSUB 800  ' wait for type in or sound now
760  PRINT C$;
770  GOTO 640
780 '
790 ' sound dit for each ".", dah for each "-" in string codes$(morse)
800 FOR I=1 TO LEN(CODES$(MORSE))
810   IF MID$(CODES$(MORSE),I,1) = "." THEN GOSUB 900 ELSE GOSUB 910
820 NEXT
830 GOSUB 880
840 RETURN
850 '
860 ' produce elemental sounds, or silences.
870  SOUND SIL,DIT: RETURN      ' element space
880 SOUND SIL,ELE*2: RETURN     ' character space, allow for previous trailing
890 SOUND SIL,ELE*6: RETURN   ' word space, allow for trailing.
900 SOUND F,DIT: GOSUB 870: RETURN        ' dit
910 SOUND F,DAH: GOSUB 870: RETURN        ' dah
920 '
930 ' change frequency of tone
940 F = F*1.104: GOSUB 1080: RETURN
950 F = F/1.104: GOSUB 1080: RETURN
960 '
970 ' change speed; update element timings.
980 WPM = WPM+1: GOSUB 1020: GOSUB 1080: RETURN
990 WPM = WPM-1: GOSUB 1020: GOSUB 1080: RETURN
1000 '
1010 ' calculate element timings. units are clock ticks, which are at 18.2hz.
1020 IF WPM<13 THEN CWPM=13 ELSE CWPM=WPM
1030 DIT = 21.84/CWPM: DAH = 3*DIT
1040 IF WPM>=13 THEN ELE=DIT ELSE ELE=DIT*((CWPM/WPM-1)*13+2)/2
1050 RETURN
1060 '
1070 ' display current speed and frequency. return cursor where it was.
1080 COL=POS(0): ROW=CSRLIN: LOCATE 1,64
1090 PRINT "wpm: "; WPM: LOCATE 2,63: PRINT "freq: "; F; "     "
1100 LOCATE ROW,COL
1110 RETURN
1120 '
1130 ' handle F9, the pause control.
1140 COL9=POS(0): ROW9=CSRLIN
1150 LOCATE 24,30: COLOR 16,7: PRINT " Press any key to continue ";
1160 X$=INKEY$: IF X$="" THEN 1160
1170 LOCATE 24,30: COLOR 2,0:  PRINT "                           ";
1180 LOCATE ROW9,COL9: RETURN
1190 '
1200 ' set c$ to random supported character.
1210 ' force a space every fifth time and a newline every 13 groups.
1220 IF NCHRS=5 THEN C$=" ": NCHRS=0: NGRPS=NGRPS+1: RETURN
1230 IF NGRPS=13 THEN C$=CHR$(13): NGRPS=0: NCHRS=0: RETURN
1240 C$ = CHARS$(RND*(NUMCODES-1)): NCHRS=NCHRS+1: RETURN
1250 '
1260 ' sound character in codes$(morse) and let user type in response.
1270 ' repeat until get it right.
1280 RIGHT=0
1290 WHILE RIGHT=0
1300   GOSUB 800       ' sound out character
1310   N=0
1320   N=N+1: X$=INKEY$: IF X$="" AND N<TYPEWAIT GOTO 1320
1330   IF FNLOWER(X$) THEN X$=FNTOUPPER$(X$)
1340   IF C$<>X$ AND X$<>"" THEN SOUND 2000,2: SOUND SIL,5
1350   IF C$=X$ THEN RIGHT=1
1360 WEND
1370 RETURN
1380  '
1390  ' give info and ask setup questions.
1400  PRINT "              Morse Code Practice Program."
1410  PRINT
1420  PRINT "This program sounds out morse code characters. The characters"
1430  PRINT "may come from a file, from the keyboard, or be generated randomly.
1440  PRINT
1450  PRINT "The program may be used in two ways."
1460  PRINT
1470  PRINT "Characters may be continuously sounded and printed on the screen."
1480  PRINT "This form is good practice for copying code by hand."
1490  PRINT
1500  PRINT "The program may also be used to sound one character at a time,"
1510  PRINT "repeating until the correct character is typed on the keyboard."
1520  PRINT "A high tone indicates an incorrect response. This form is good"
1530  PRINT "practice for typing code."
1540  PRINT
1550  PRINT "At any time while the program is running, the left and right"
1560  PRINT "arrow keys change the code speed and the up and down arrows"
1570  PRINT "change the pitch of the tone."
1580  PRINT
1590  PRINT "Type any key to continue ";
1600  X$=INKEY$: IF X$="" GOTO 1600
1610  CLS
1620  '
1630  ' select input source: either from a file, the keyboard or random.
1640  ' if input is not from keyboard, also ask if want to type in responses.
1650  PRINT "Select source of practice characters. Type:
1660  PRINT "      random    for random characters,"
1670  PRINT "      keyboard  to sound characters typed from keyboard,"
1680  PRINT "      or type a file name from which to read characters: "
1690  INPUT F$
1700  IF F$="keyboard" THEN F$="kybd:"
1710  IF F$="kybd:" THEN TYPE=0: GOTO 1750
1720    INPUT "type in each character in response to sound? (y or n) ", X$
1730    IF LEFT$(X$,1)="y" THEN TYPE=1
1740  IF F$="random" GOTO 1770
1750    RANFILE=0: OPEN F$ FOR INPUT AS #1
1760    GOTO 1780
1770    RANFILE=1: RANDOMIZE VAL(RIGHT$(TIME$,2)): NCHRS=0: NGRPS=0
1780  '
1790  ' select speed
1800  INPUT "words per minute? ", WPM
1810  '
1820  CLS
1830  RETURN
```

## SCREEN.BAS

```bas
10 ' DEMONSTRATION PROGRAM TO CALL SUBROUTINE GENIN
14 ' *********************************************************************
20 KROW%=10:KCOL%=3
30 KLEN%=30
40 KTYP$="A"
45 CLS:LOCATE KROW%,1,1:PRINT ">";
50 GOSUB 10020
60 PRINT
70 PRINT
80 PRINT ":"+INP.STR$+":";" RTRN%:";RTRN%
90 STOP:GOTO 45
95 ' AT THIS POINT YOU CAN CHANGE THE VALUES OF KROW, KLEN, KCLO, OR KTYP AND
96 ' TYPE "CONT"
99 '
10000 ' Subroutine: GENIN                 Author: Kenneth D. Crebs
10001 '
10002 ' ========== Generalized Screen Input Subroutine ===========
10005 '
10006 '  Inputs:                                 DEFAULTS
10007 '         KROW%  = Row Input Starts    -  Current Row
10008 '         KCOL%  = Column Input Starts -  Current Column
10009 '         KLEN%  = Length of Input     -  80-KCOL%
10010 '         KTYP%  = Data Type of Input  -  (A)lphanumeric
10011 '         KSIGN% = Allow Minus Sign    -  Not allowed (=0)
10012 '  Outputs:
10013 '         INP.STR$ =  Holds Data Entered (In String Format)
10014 '         INP.INT% =  If KTYP$=I,Holds Data Entered (In Integer Format)
10015 '         INP.REL! =  If KTYP$=R,Holds Data Entered (In Real Format)
10016 '         RTRN%    =  0 - Nothing Entered, <Enter> Pressed
10017 '                  =  1 - Data Entered, <Enter> Pressed
10018 '                  =  9 - <Esc> Pressed
10019 '
10020 IF KROW%<1 OR KROW%>25 THEN KROW%=CSRLIN
10030 IF KCOL%<1 OR KCOL%>80 THEN KCOL%=POS(0)
10040 IF KLEN%<1 OR KLEN%>(80-KCOL%) THEN KLEN%=80-KCOL%+1
10050 DE%=-1:SE%=1:INP.STR$=SPACE$(KLEN%):GOTO 10070
10060 ' SOUND 400,4   'BEEP when past end
10070 COLOR 15,0,0:LOCATE KROW%,KCOL%,1,0,7
10080 CS$=INKEY$:IF CS$= "" THEN 10080
10090 KPTR%=POS(0)   ' Current Cursor POSition
10095 IF KPTR%<KCOL% THEN KPTR%=KCOL%  ' This line needed in case of      <Ctrl><Break>
10100 IF CS$>CHR$(31) THEN 10160
10110 IF CS$=CHR$(13) THEN LOCATE ,,0:IF DE% THEN RTRN%=0:RETURN ELSE       RTRN%=1:GOTO 10300
10120 IF CS$=CHR$(27) THEN LOCATE ,,0:RTRN%=9:RETURN  'Esc
10130 IF CS$=CHR$(8) THEN 10250  'Backspace (Destructive)
10140 IF CS$=CHR$(0)+CHR$(75) THEN GOTO 10270  'Left Arrow (Non-Destructive)
10150 IF CS$=CHR$(0)+CHR$(77) THEN GOTO 10290  'Right Arrow (Non-Destructive)
10155 BEEP:GOTO 10080
10160 ACODE%=ASC(CS$)
10170 IF KTYP$="R" THEN IF (ACODE%<48) OR (ACODE%>57) THEN IF KSIGN% THEN IF ACODE%<45 OR ACODE%>46) THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE IF ACODE%<>46 THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE GOTO 10200
10180 IF KTYP$="I" THEN IF (ACODE%<48) OR (CODE%>57) THEN IF KSIGN% THEN IF ACODE%<>45 THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE BEEP:GOTO 10080 ELSE GOTO 10200
10190 IF (ACODE%<32 OR ACODE%>122) THEN BEEP:GOTO 10080
10200 IF DE% THEN PRINT SPACE$(KLEN%);:LOCATE KROW%,KPTR%:DE%=0
10210 PRINT CS$;:SE%=KPTR%-KCOL%+1  ' Calculate Position in INP.STR$ (SE%)
10220 MID$(INP.STR$,SE%,1)=CS$
10230 IF KPTR%>=KCOL%+KLEN%-1 THEN GOTO 10060 ELSE GOTO 10080
10240 ' Backspace (Destructive)
10250 IF KPTR%<KCOL%+1 THEN GOTO 10080 ELSE KPTR%=KPTR%-1:LOCATE , KPTR%:PRINT      " ";:SE%=KPTR%-KCOL%+1:MID$(INP.STR$,SE%,1)=" ":LOCATE  ,KPTR%:IF SE%=1 THEN       DE%=-1:GOTO 10080 ELSE GOTO 10080
10260 ' Backspace (Non-Destructive)
10270 IF KPTR%<KCOL%+1 THEN GOTO 10080 ELSE KPTR%=KPTR%-1:LOCATE      ,KPTR%:SE%=KPTR%-KCOL%+1:GOTO 10080
10280 ' Forwardspace (Non-Destructive)
10290 IF KPTR%>=KCOL%+KLEN%-1 THEN GOTO 10060 ELSE KPTR%=KPTR%+1:LOCATE ,      KPTR%:SE%=KPTR%-KCOL%+1:GOTO 10080
10300 IF KTYP$<>"I" AND KTYP$<>"R" THEN RETURN
10310 IF KTYP$="I" THEN INP.INT%=VAL(INP.STR$):RETURN
10320 INP.REL!=VAL(INP.STR$):IF INP.REL!=0 THEN INP.REL!-0
10330 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0255

     Volume in drive A has no label
     Directory of A:\

    NEWBELL  COM        92   8-14-87   9:49a
    NEWBELL  ASM      1499   8-14-87   9:49a
    HERMREAD ME       7121   8-14-87   9:49a
    BATQUES  COM        36   8-14-87   9:49a
    BATQUES  DOC      2256   8-14-87   9:49a
    BATQUES  ASM      3086   8-14-87   9:49a
    SCRNCOLR COM       236   8-14-87   9:49a
    SCRNCOLR DOC      1056   8-14-87   9:49a
    SCRNCOLR ASM      6945   8-14-87   9:49a
    DOS-SIZE DOC      1991   8-14-87   9:49a
    WHEREIS  COM       451   8-14-87   9:49a
    WHEREIS  ASM      7242   8-14-87   9:49a
    OLDER    COM       124   8-14-87   9:50a
    OLDER    ASM      2928   8-14-87   9:50a
    LABEL    EXE      1232   8-14-87   9:50a
    LABEL    C        2531   8-14-87   9:50a
    LABEL    DOC      1730   8-14-87   9:50a
    SCREEN   BAS      3669   8-14-87   9:50a
    SCREEN   DOC      3628   8-14-87   9:50a
    TIMER    EXE      1408   8-14-87   9:50a
    MORSE    BAS      6784   8-14-87   9:50a
    PURGEDUP COM     10313   8-14-87   9:50a
    PURGEDUP DOC      1160   8-14-87   9:50a
    DOSEDIT  COM      1920   8-14-87   9:50a
    DOSEDIT  DOC      3280   8-14-87   9:50a
    DOCUFILE BAS      1690   8-14-87   9:50a
    DOCUFILE DOC      3643   8-14-87   9:51a
    DOCUFDOC BAS      4692   8-14-87   9:51a
    BYE      BAS       212   8-14-87   9:51a
    SDIR     COM      3221   8-14-87   9:51a
    SDIR     DOC      1280   8-14-87   9:51a
    CRYPTO   BAS      1612   8-14-87   9:51a
    PX       COM     22912   8-14-87   9:51a
    PX       DOC     14588   8-14-87   9:51a
    SPEED    COM        23   8-14-87   9:51a
    SPEED    ASM      1480   8-14-87   9:51a
    CHN      PAS       716   8-14-87   9:51a
    L4       COM      2668   8-14-87   9:52a
    L4       DOC      4195   8-14-87   9:52a
    L4       ASM     19409   8-14-87   9:52a
    KBFIX    COM      1360   8-14-87   9:52a
    KBFIX    ASM     32991   8-14-87   9:52a
    KBFIX    DOC       413   8-14-87   9:52a
    KBD_FIX  COM       689   8-14-87   9:52a
    KBD_FIX  ASM     12594   8-14-87   9:52a
    BAT-CD   COM       127   8-14-87   9:53a
    BAT-CD   DOC      1854   8-14-87   9:53a
    BAT-CD   ASM      2959   8-14-87   9:53a
    LIST     COM      6619   9-17-86   4:48a
    LIST     ~DO       136   7-03-87  11:10a
    LIST     DOC       479   7-03-87  11:23a
    FILES255 TXT      3169   8-14-87  10:06a
    GO       BAT        38   8-14-87  10:07a
    GO       TXT       463   8-14-87  10:10a
           54 file(s)     218950 bytes
                           70656 bytes free
