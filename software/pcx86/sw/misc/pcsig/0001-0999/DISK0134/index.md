---
layout: page
title: "PC-SIG Library Disk #134"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0134/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0134"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LISP"

    File Descriptions:
    
    8087     ASM  Assembler macros for 8087 instructions
    AUTODEX  EXE  Fantastic fullscreen directory/file manipulator
    CC       C    C source program checker, catches mismatched parens
    DOSINTS  TXT  Tells all about secret dos interrupt functions!
    DOS_ERR  TXT  Information on DOS i/o redirection bugs
    FIND     PAT  Patch to dos find command, makes it a better filter
    LOAD     COM  Load com files bigger than 64k: load <filename>
    LOAD     ASM  Source for above
    MENUMAKR BAS  Interactively create menus callable from basic
    PIL      LSP  Micro-prolog interpreter written in xlisp
    PTURTLE  LSP  Programmable logo turtle written in xlisp
    STEEPDES APL  Steepest descent equation solution in apl
    TURTLE   LSP  Interactive logo turtle programmed in xlisp
    XLISP    DOC  Documentation for xlisp interpreter
    XLISP    EXE  A lisp interpreter with object-oriented extensions
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MENUMAKR.BAS

```bas
100 ' File name is "MENUMAKR"   9-26-82
110 '
120 ' General purpose menu program.  Just alter the menu title line, and insert
130 '   your menu entries.  MENUMAKR will do the rest.  Up to 64 menu entries
140 '   may be displayed (screen space willing) in 1-4 variable width columns.
150 '
160 ' NOTICE:  Developed by Ken Mackenzie, Box 111 Greendale, Wisconsin  53129.
170 '   This program may be freely reproduced for any lawful purpose.
180 '   As a courtesy to the author, please retain this notice on all copies.
190 '
200 ' Change the following statement to change the menu title:
210     TITLE$="your menu title goes here"
220 '
230 ' Each menu entry is a data statement consisting of a pair of character
240 '   strings enclosed in quotes.
250 '   The first string of each pair names a program to be run, if chosen.
260 '   The second string of each pair is its displayable descriptive text.
270 ' Place data statements for menu entries between the starred lines.
280 '*************************
290 DATA "FRSTPROG", "First program's descriptive text"
300 DATA "PROGRAM2", "Second program's descriptive text"
310 DATA "  etc. ", "   and so forth   "
900 '*************************
901 DATA "END"     ,"end"
902 '
903 ' Menu program begins here
904 '
905 LINENUM=5:    ' # of bytes occupied by each entry number prompt
906 MAXENTRIES=65:' # of possible menu entries
907 MAXCOL=4:     ' # of possible columns of entries
908 MAXROW=18:   ' # of possible rows of entries
909 MINGAP=1:    ' smallest # of spaces between columns
910 DIM N$(MAXENTRIES):' table of program names
911 DIM T$(MAXENTRIES):' table of program text descriptions
912 DIM BEG(MAXCOL):   ' beginning screen position for each column
913 DIM WID(MAXCOL):   ' width of text for each column
914 '
915 ' Display menu title block
916 '
917 DEF SEG: POKE 106,0: KEY OFF: SCREEN 0,0: COLOR 7,0,0: CLS
918 PRINT CHR$(201) STRING$(77,205) CHR$(187)
919 PRINT CHR$(186) TAB(41-LEN(TITLE$)/2) TITLE$ TAB(79) CHR$(186)
920 PRINT CHR$(200) STRING$(77,205) CHR$(188)
921 PRINT
922 '
923 ' Store menu data.
924 '
925 FOR E = 1 TO MAXENTRIES
926   READ N$(E),T$(E)
927   IF N$(E)="END" THEN 930
928 NEXT E
929 '
930 ' Calculate screen format
931 '
932 ENTRIES=E-1
933 '    Determine # of columns as ceil(entries/maxrow)
934 COL=INT((ENTRIES+MAXROW-1)/MAXROW)
935 '    Determine # of rows as ceil(entries/col)
936 ROW=INT((ENTRIES+COL-1)/COL)
937 '    Determine width of each row & save as wid(col)
938 FOR C=1 TO COL
939   WID(C)=0
940   FOR R=1 TO ROW
941     INDEX=R+MAXROW*(C-1)
942     L=LEN(T$(INDEX))
943     IF L>WID(C) THEN WID(C)=L
944   NEXT R
945 NEXT C
946 '    Determine gap size as max(3,(screenwidth-datawidth)/(col+1))
947 DATASIZ=0
948 FOR C=1 TO COL: DATASIZ=DATASIZ+WID(C)+LINENUM: NEXT C:' datawidth
949 IF DATASIZ+GAP*(COL+1)>80 THEN PRINT "Menu is too big for the screen.":STOP
950 GAP=INT((80-DATASIZ)/(COL+1))
951 IF GAP<MINGAP THEN GAP=MINGAP
952 '    Determine column starting locations
953 NEXTCOL=81-GAP
954 FOR C=COL TO 1 STEP -1
955   BEG(C)=NEXTCOL-WID(C)-LINENUM
956   NEXTCOL=BEG(C)-GAP
957 NEXT C
958 '    Determine row starting line
959 BEGLINE=5+INT((MAXROW-ROW)/2)
960 '
961 ' Display selections
962 '
963 FOR INDEX=1 TO ENTRIES
964   C=INT((INDEX-1)/ROW)+1
965   R=INDEX-ROW*(C-1)
966   LOCATE BEGLINE+R-1,BEG(C),0
967   PRINT USING "##";INDEX;
968   PRINT " - ";T$(INDEX)
969 NEXT INDEX
970 '
971 ' Input selection
972 '
973 LOCATE 24,1: PRINT; "What selection number would you like ?    ";
974 NUM=0
975 FOR X=0 TO 1
976   LOCATE 24,40+X,1
977   A$=INKEY$: IF A$="" THEN 977
978   IF ASC(A$)=13 THEN 983 ELSE PRINT A$;:' Test for enter key
979   A=INT(VAL(A$))
980   NUM=10*NUM+A
981   IF 10*NUM>ENTRIES THEN 983
982 NEXT X
983 IF NUM>0 AND NUM<=ENTRIES THEN CLS: CHAIN N$(NUM):' Transfer to choice
984 '
985 ' Error response
986 '
987 BEEP: LOCATE 24,45: PRINT  "Pardon me?";
988 FOR P=1 TO 999: NEXT P: LOCATE 24,42: PRINT SPC(19): GOTO 973
989 END
999 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0134

     Volume in drive A has no label
     Directory of A:\

    8087     ASM      8125   2-05-84   2:01a
    AUTODEX  EXE     32000   2-20-84   3:36a
    CC       C        3544   2-20-84   2:02a
    DOSINTS  TXT      5940   2-05-84   3:15a
    DOS_ERR  TXT      3456   2-05-84   2:35a
    FIND     PAT      1024   2-20-84  12:49a
    LOAD     ASM      4637   2-05-84   2:02a
    LOAD     COM       291   2-20-84   4:40a
    MENUMAKR BAS      3796   2-05-84   2:14a
    PIL      LSP      4608   2-20-84   1:16a
    PTURTLE  LSP      4096   2-20-84   1:15a
    READ     ME       1138   2-20-84   4:46a
    STEEPDES APL      9856  12-25-83   4:03a
    TURTLE   LSP      3584   2-20-84   1:14a
    XLISP    DOC     27049   2-20-84   1:52a
    XLISP    EXE     43776   2-20-84   1:25a
           16 file(s)     156920 bytes
                             512 bytes free
