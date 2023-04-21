---
layout: page
title: "PC-SIG Diskette Library (Disk #556)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0556/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0556"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORTRAN AND ASSEMBLY"

    This is a mixed collection of games, usable programs, and utilities
    that can be called from FORTRAN programs.  Included is PLTSPEC which is
    useful in analyzing spectra with broad asymmetric peaks on a sloping
    background.  DIR_ASM.ASM is a routine which lists to the console the
    names of the files in the current directory.  There are also some .PIC
    files which are ASCII files to copy to a printer.  They contain
    drawings of various figures.
    
    System Requirements:  64K, one disk drive and monochrome display.
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on ASM or FOR listings, refer to your Assembler or
    FORTRAN language manual.
    
    File Descriptions:
    
    README        Description and documentation for the files on this disk
    DIR_FOR  EXE  Compiled and linked version of above
    DIR_FOR  FOR  Example FORTRAN program using DIR_ASM
    DIR_ASM  OBJ  Assembled version of DIR_ASM
    DIR_ASM  ASM  A disk directory from FORTRAN
    KYBD_EX  FOR  Example program using DOSFUNC and DOSFN
    DOSFUNC  FOR  FORTRAN routines for use with DOSFN
    DOSFN    OBJ  Assembled version of DOSFN
    DOSFN    ASM  Gives access to DOS functions from an MS-FORTRAN program
    CHESS    FOR  Chess source code
    CHESS    DOC  Chess documentation
    CALENDAR FOR  Calendar source code
    CALENDAR CPM  Calendar source code - CP/M
    -------- ---
    EXAMPLE  DAT  Example data set for
    EFFIXSP  FOR  Detector efficiency correction of gamma-ray spectra
    PLOT2    FOR  Dump routines for PLTSPEC
    PLOT1    FOR  IDS Micro Prism printer
    EDITS    FOR  Part of PLTSPEC;           MULTI-HALO graphics library
    DAT-TIME OBJ  Assembled version of DAT-TIME
    DAT-TIME ASM  Routines for getting the date and time in FORTRAN
    MANSPT   FOR  Part of PLTSPEC;           requires MS-FORTRAN and
    PLTSPEC  FOR  Interactive processing of gamma-ray pulse height spectra
    TIME2    EXE  Compiled and linked version of above
    TIME2    FOR  Example FORTRAN routines using DAT-TIME
    EDITM    FOR  Edit program source code
    MAZE     CPM  Maze generator source code - CP/M
    LINUS    PIC  Linus portrait
    PINUP?   PIC  Pinup portraits
    OTHELLO  DOC  Othello program documentation
    OTHELLO  FOR  Othello program source code
    MAZE     FOR  Maze generator source code
    SSPLIB   FOR  Linear least squares program source code
    RND      FOR  Random numbers generator source code
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHESS.DOC

{% raw %}
```
CHESS.DOC DOCUMENTATION FOR CHESS.COM
(SOURCE CODE WRITTEN IN FORTRAN)


CHESS.COM USES ALGEBRAIC NOTATION AND A BOARD DISPLAY
SIMILAR TO MICROCHESS:

   A  B  C  D  E  F  G  H 

8  BR BN BB BQ BK BB BN BR  8
7  BP BP BP BP BP BP BP BP  7
6  -- :: -- :: -- :: -- ::  6
5  :: -- :: -- :: -- :: --  5
4  -- :: -- :: -- :: -- ::  4
3  :: -- :: -- :: -- :: --  3
2  WP WP WP WP WP WP WP WP  2
1  WR WN WB WQ WK WB WN WR  1
   A  B  C  D  E  F  G  H

THERE ARE TWO OTHER COMMANDS WHICH DISPLAY THE BOARD
AND ASK THE COMPUTER IF IT WILL ACCEPT A DRAW.  THEY
ARE "BOARD" AND "DRAW", RESPECTIVELY.

TO CASTLE KING-SIDE, TYPE IN O-O
TO CASTLE QUEEN-SIDE TYPE IN O-OO
IF YOU TRY O-O-O IT SAYS "ILLEGAL ATTEMPT TO CASTLE"

ALWAYS USE CAPITAL LETTERS, FORTRAN-CHESS DOES NOT
ACCEPT LOWER CASE.

FORTRAN-CHESS (FC) HAS BEEN COMPARED SEVERAL TIMES          
 AGAINST FIDELITY ELECTRONICS' CHESS CHALLENGER 7 (CC7)
(C) 1978 FIDELITY ELECTRONICS.  WITH FC AT LEVEL 0 (IT ONLY
HAS 0 AND 1) AND CC7 AT LEVEL 1 (CC7 HAS 6 LEVELS OF PLAY)
FC WINS.  WITH FC AT LEVEL 0 AND CC7 AT LEVEL 2 CC7 WINS.
FC'S RESPONSE TIME AT LEVEL 0 VARIES BUT IS NEVER MORE THAN
90 SECONDS.  I HAVE NOT YET CLOCKED IT AT LEVEL 1, BUT
IT HAS A SIGNIFICANTLY LONGER RESPONSE TIME (AT LEAST
AS MUCH AS SEVERAL MINUTES -- ESTIMATION).

HAVE FUN!


```
{% endraw %}

## DAT-TIME.ASM

{% raw %}
```
NAME    DAVID

;    DAVID'S MS-FORTRAN Runtime DOS INTERFACE.
;
;    MACRO DEFINITIONS
SET_DTA MACRO  BUFFER
        MOV     DX,OFFSET DGROUP:BUFFER
        MOV     AH,1AH
        INT     33
        ENDM
SEARCH_FIRST MACRO  FCB
             MOV  DX,OFFSET DGROUP:FCB
             MOV  AH,11H
             INT  33
             ENDM
DISPLAY  MACRO  STRING
         MOV  DX,OFFSET DGROUP:STRING
         MOV  AH,09H
         INT  33
         ENDM
SEARCH_NEXT MACRO FCB
            MOV  DX,OFFSET DGROUP:FCB
            MOV  AH,12H
            INT  33
            ENDM
CONVERT  MACRO   VALUE,BASE,DEST
         LOCAL  TABLE,START
         JMP   START
TABLE    DB  "0123456789ABCDEF"
START:   MOV  AL,VALUE
         XOR  AH,AH
         XOR  BX,BX
         DIV  BASE
         MOV  BL,AL
         MOV  AL,CS:TABLE[BX]
         MOV  DEST,AL
         MOV  BL,AH
         MOV  AL,CS:TABLE[BX]
         MOV  DEST[1],AL
         ENDM
GET_TIME MACRO
         MOV AH,2CH
         INT 33
         ENDM
GET_DATE MACRO
         MOV  AH,2AH
         INT  33
         ENDM
PAGE +
;
;       DGROUP, DATA   segment    class DATA
;
DATA    SEGMENT PUBLIC 'DATA'
    TIME  DB  "00:00:00.00",13,10,"$"
    TEN   DB  10
DATA    ENDS

DGROUP  GROUP   DATA
CODE    SEGMENT 'CODE'
        ASSUME  CS:CODE,DS:DGROUP,SS:DGROUP
PUBLIC  SHWTIM,GHOURS,GMINUT,GSECON,G100S,GDAYOW,GMONTH,GETDAY
;DOSFN:  Call DOS Operating System
;
GHOURS  PROC    FAR
        PUSH    BP
        GET_TIME
        XOR  AH,AH
        MOV  AL,CH
        POP  BP
        RET  4
GHOURS  ENDP
;
GMINUT  PROC   FAR
        PUSH    BP
        GET_TIME
        XOR   AH,AH
        MOV   AL,CL
        POP   BP
        RET   4
GMINUT  ENDP
;
GSECON  PROC    FAR
        PUSH    BP
        GET_TIME
        XOR  AH,AH
        MOV  AL,DH
        POP   BP
        RET   4
GSECON  ENDP
;
G100S   PROC   FAR
        PUSH    BP
        GET_TIME
        XOR     AH,AH
        MOV     AL,DL
        POP     BP
        RET     4
G100S   ENDP
;
SHWTIM  PROC    FAR
        PUSH    BP
        GET_TIME
        CONVERT  CH,DS:TEN,DS:TIME
        CONVERT  CL,DS:TEN,DS:TIME[3]
        CONVERT  DH,DS:TEN,DS:TIME[6]
        CONVERT  DL,DS:TEN,DS:TIME[9]
        DISPLAY  TIME
        POP     BP
        RET
SHWTIM  ENDP
;
;
;
GMONTH  PROC   FAR
        PUSH    BP
        GET_DATE
        XOR    AH,AH
        MOV    AL,DH
        POP    BP
        RET    4
GMONTH  ENDP
;
GETDAY  PROC   FAR
        PUSH    BP
        GET_DATE
        XOR    AH,AH
        MOV    AL,DL
        POP    BP
        RET    4
GETDAY  ENDP
;
GDAYOW  PROC  FAR
        PUSH  BP
        GET_DATE
        XOR   AH,AH
        POP   BP
        RET   4
GDAYOW  ENDP
;
 CODE    ENDS

END
```
{% endraw %}

## DIR_ASM.ASM

{% raw %}
```
NAME    DAVID

;    DAVID'S MS-FORTRAN Runtime DOS INTERFACE.
;
;    MACRO DEFINITIONS
SET_DTA MACRO  BUFFER
        MOV     DX,OFFSET DGROUP:BUFFER
        MOV     AH,1AH
        INT     33
        ENDM
SEARCH_FIRST MACRO  FCB
             MOV  DX,OFFSET DGROUP:FCB
             MOV  AH,11H
             INT  33
             ENDM
DISPLAY  MACRO  STRING
         MOV  DX,OFFSET DGROUP:STRING
         MOV  AH,09H
         INT  33
         ENDM
SEARCH_NEXT MACRO FCB
            MOV  DX,OFFSET DGROUP:FCB
            MOV  AH,12H
            INT  33
            ENDM
PAGE +
;
;       DGROUP, DATA   segment    class DATA
;
DATA    SEGMENT PUBLIC 'DATA'
        FCB2    DB  0,"???????????"
                DB  25 DUP(?)
        STRING  DB  14 DUP(?)
         CRLF   DB  13,10,'$'
        BUFFER  DB  128 DUP(?)
DATA    ENDS

DGROUP  GROUP   DATA
CODE    SEGMENT 'CODE'
        ASSUME  CS:CODE,DS:DGROUP,SS:DGROUP
PUBLIC  DIRFOR

;DOSFN:  Call DOS Operating System
;
DIRFOR  PROC    FAR
        POP     SI           ;get ret address
        POP     DI
        POP     BX
        POP     ES         ;ES,BX := addr of 2nd param
        MOV     AX,ES:[BX]
        MOV    DS:FCB2[0],AL          ;must be in high half
        PUSH    DI           ;save ret address
        PUSH    SI
        PUSH    BP
        SET_DTA BUFFER
   SEARCH_FIRST FCB2
        CMP     AL,0FFH
        JE      ALL_DONE
        MOV     AL,DS:BUFFER[11]
        MOV     DS:BUFFER[12],AL
        MOV     AL,DS:BUFFER[10]
        MOV     DS:BUFFER[11],AL
        MOV     AL,DS:BUFFER[9]
        MOV     DS:BUFFER[10],AL
        MOV     AL,20H
        MOV     DS:BUFFER[9],AL
        MOV     AL,"$"
        MOV     DS:BUFFER[13],AL
        DISPLAY BUFFER[1]
        DISPLAY CRLF
;
GET_IT:
    SEARCH_NEXT FCB2
        CMP     AL,0FFH
        JE      ALL_DONE
        MOV     AL,DS:BUFFER[11]
        MOV     DS:BUFFER[12],AL
        MOV     AL,DS:BUFFER[10]
        MOV     DS:BUFFER[11],AL
        MOV     AL,DS:BUFFER[9]
        MOV     DS:BUFFER[10],AL
        MOV     AL,20H
        MOV     DS:BUFFER[9],AL
        MOV     AL,"$"
        MOV     DS:BUFFER[13],AL
        DISPLAY BUFFER[1]
        DISPLAY CRLF
        JMP GET_IT
;
 ALL_DONE:
;
        DISPLAY CRLF
        POP     BP             ;restore frame pointer
        RET
DIRFOR   ENDP
 CODE    ENDS

END
```
{% endraw %}

## DOSFN.ASM

{% raw %}
```
NAME    DAVID

;    DAVID'S MS-FORTRAN Runtime DOS INTERFACE.

;       DGROUP, DATA   segment    class DATA
;
DATA    SEGMENT PUBLIC 'DATA'
DATA    ENDS

DGROUP  GROUP  DATA
CODE    SEGMENT 'CODE'
        ASSUME  CS:CODE,DS:DGROUP,SS:DGROUP
PUBLIC  DOSFN

;DOSFN:  Call DOS Operating System
;
DOSFN   PROC    FAR
        POP     SI
        POP     DI
        POP     BX
        POP     ES             ;ES,BX := addr of 2nd param
        MOV     DX,ES:[BX]
        POP     BX
        POP     ES
        MOV     AX,ES:[BX]
        MOV     AH,AL          ;must be in high half
        PUSH    DI
        PUSH    SI
        PUSH    BP             ;have to save this one
        INT     33             ;onward to DOS
        ;
        ; Carry will be set if dos error.
        ;
        AND     AX,00FFH
        POP     BP             ;restore frame pointer
        RET                    ;return (DOS ret in AX)
        DOSFN   ENDP
        CODE    ENDS

END
```
{% endraw %}

## FILES556.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  556  FORTRAN & A LITTLE ASSEMBLY                          v1  DS2
---------------------------------------------------------------------------
This disk contains another collection of miscellaneous FORTRAN and ASSEMBLY
programs.  See the individual file descriptions below to see what is there.
 
README        Description and documentation for the files on this disk
DOSFN    ASM  Gives access to DOS functions from an MS-FORTRAN program
DOSFN    OBJ  Assembled version of DOSFN
DOSFUNC  FOR  FORTRAN routines for use with DOSFN
KYBD_EX  FOR  Example program using DOSFUNC and DOSFN
DIR_ASM  ASM  A disk directory from FORTRAN
DIR_ASM  OBJ  Assembled version of DIR_ASM
DIR_FOR  FOR  Example FORTRAN program using DIR_ASM
DIR_FOR  EXE  Compiled and linked version of above
DAT-TIME ASM  Routines for getting the date and time in FORTRAN
DAT-TIME OBJ  Assembled version of DAT-TIME
TIME2    FOR  Example FORTRAN routines using DAT-TIME
TIME2    EXE  Compiled and linked version of above
PLTSPEC  FOR  Interactive processing of gamma-ray pulse height spectra
MANSPT   FOR  Part of PLTSPEC;           requires MS-FORTRAN and
EDITS    FOR  Part of PLTSPEC;           MULTI-HALO graphics library
PLOT1    FOR  IDS Micro Prism printer
PLOT2    FOR  Dump routines for PLTSPEC
EFFIXSP  FOR  Detector efficiency correction of gamma-ray spectra
EXAMPLE  DAT  Example data set for PLTSPEC
------------
CALENDAR CPM  Calendar source code - CP/M
CALENDAR FOR  Calendar source code
CHESS    DOC  Chess documentation
CHESS    FOR  Chess source code
EDITM    FOR  Edit program source code
LINUS    PIC  Linus portrait
MAZE     CPM  Maze generator source code - CP/M
MAZE     FOR  Maze generator source code
OTHELLO  FOR  Othello program source code
OTHELLO  DOC  Othello program documentation
PINUP?   PIC  Pinup portraits
RND      FOR  Random numbers generator source code
SSPLIB   FOR  Linear least squares program source code
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## NOTES556.TXT

{% raw %}
```
Program name:       FORTRAN & A Little Assembly

Author name:        various

Address:            none given

Telephone Number:   none given

Suggested Donation: none
 
Program Description: 

This is a mixed collection of games, usable programs, and utilities that can 
be called from FORTRAN programs.  There are also some .PIC files which are 
ASCII files to copy to a printer.  They contain drawings of various figures.

No system requirements are given.  These should run on any IBM PC or 
compatible system that will support a FORTRAN compiler.
```
{% endraw %}

## OTHELLO.DOC

{% raw %}
```
***********************************************************************
***********************************************************************
**                                                                   **
**       *****   *****   *   *   *****   *       *       *****       **
**       *   *     *     *   *   *       *       *       *   *       **
**       *   *     *     *   *   *       *       *       *   *       **
**       *   *     *     *****   ***     *       *       *   *       **
**       *   *     *     *   *   *       *       *       *   *       **
**       *   *     *     *   *   *       *       *       *   *       **
**       *****     *     *   *   *****   *****   *****   *****       **
**                                                                   **
***********************************************************************
***********************************************************************


	OTHELLO IS ONE OF THE MOST POPULAR GAMES AROUND TODAY.
THE EXCITEMENT IS CERTAINLY JUSTIFIED, SINCE OTHELLO IS AN EXCELLENT
GAME. OTHELLO SWEPT JAPAN AND IS NOW MAKING A COMMERCIAL SWEEP HERE.
HOWEVER, THE BASIC CONCEPTS OF THE GAME HAVE BEEN AROUND SINCE THE
VICTORIAN TIMES IN ENGLAND WHERE IT WAS CALLED REVERSI. 
	THE GAME OTHELLO / REVERSI IS A VERY SIMPLE, ELEGANT ONE,
WHICH PERMITS MUCH OPPORTUNITY FOR STRATEGY. THE GAME IS PLAYED ON AN
8 BY 8 MATRIX, AND EACH PLAYER HAS 32 PLAYING DISKS, WHICH ARE WHITE
ON ONE SIDE AND BLACK ON THE OTHER (REPRESENTED IN THE COMPUTER
VERSION BY 'X' AND 'O' RESPECTIVELY). ONE PLAYER PLAYS 'O' (COMPUTER)
AND THE OTHER PLAYS 'X' (HUMAN). FOUR STARTER PIECES ARE PLACED IN
THE CENTER OF THE BOARD TO BEGIN PLAY (EXCEPT WHEN A HANDICAP IS
GIVEN BY EITHER YOU OR THE COMPUTER. IN THIS CASE THE CORNER SPACES
ARE GIVEN TO THE PERSON RECEIVING THE HANDICAP [ BUT BEWARE!!! THERE
IS A 25% PROBABILITY THAT ANY ONE HANDICAP PIECE MAY BE PLACED
RANDOMLY ON THE BOARD]. FOR EXAMPLE, IF YOU GIVE THE COMPUTER A
HANDICAP OF 3 [WHICH WOULD BE DONE BY ENTERING A RANK OF 8, RANK 5
IS DEAD EVEN] , THREE CORNERS WOULD BECOME'O''S AT THE START OF THE
GAME.). EACH PLAYER IN TURN PLACES ONE DISC ON THE BOARD [BY ENTERING
Y,X TO 'YOUR MOVE'] AND MUST OUTFLANK THE OPPOSITION BY SURROUNDING
ONE OR MORE ROWS OF HIS OPPONENT'S DISCS [THERE CAN BE ONE DISK IN A
ROW] WITH ONE OF HIS OWN. AFTER DOING SO THE ENTIRE ROW BECOMES HIS.
THE WINNER IS THE PLAYER WITH THE MOST DISCS OF HIS COLOR ON THE 
BOARD WHEN ALL DISCS HAVE BEEN PLAYED. THE STRATEGY COMES IN PLANNING
WHERE TO OUTFLANK TO GAIN THE MOST DISCS OR TO MANEUVER PIECES TO
THE STRONGEST POWER POSITIONS ON THE BOARD.
	THIS COMPUTER VERSION WAS DESIGNED NOT ONLY TO PLAY A REASONABLE
GAME WITH A HUMAN OPPONENT, BUT ALSO TO AID IN PERFECTING OUR GAME.
THE FOLLOWING LISTING WAS WRITTEN IN BASIC-E A DISK BASED MICROCOMPUTER
LANGUAGE SUPPORTED BY IMSAI AND OTHERS. IT WILL RUN ON ANY CP/M BASED
8080/Z80 SYSTEM. THE GAME IS AVAILABLE FROM THE MEMORY MERCHANTS ON
DISK OR AS A NON-DISK VERSION FOR TDL'S EXTENDED BASIC. THE LISTING CAN
BE MODIFIED TO SUIT MOST ANY BASIC BY DELETING THE DISK ACCESS ROUTINES,
INCLUDING LINE NUMBERS AND SHORTENING SOME OF THE VARIABLE NAMES [BASIC
-E IS FREE FORMATTED AND ONLY REQUIRES LINE NUMBERS FOR GOTO'S AND GOSUB
'S AND ALSO ALLOWS VARIABLE NAMES UP TO 31 CHARACTERS].
	THIS VERSION HAS ELEVEN OPTIONS AVAILABLE TO THE USER. THEY
ARE IMPLEMENTED BY RESPONDING TO 'YOUR MOVE' WITH A 0,# ,WHERE '#'
IS A NUMBER FROM 0-10. COMMANDS 0,0 AND 0,5 ALLOW YOU TO SAVE THE
CURRENT GAME ON THE DISK [0,5 SAVES IT WITH THE NAME DESIGNATED AT
THE BEGINING OF THE GAME. 0,0 ALLOWS YOU TO CHANGE THE NAME OF THE
DISK FILE]. IN THE EVENT YOU HAVE NO LEGAL MOVES, YOU MAY FORFEIT
A MOVE AND LET YOUR OPPONENT TAKE AN EXTRA MOVE.  THIS IS DONE BY
THE COMMAND 0,1 [IF YOU USE THIS COMMAND AND THERE ARE LEGAL MOVES
A LIST OF YOUR LEGAL MOVES WILL APPEAR]. COMMANDS 0,2 AND 0,3 ARE
COMPLIMENTARY, COMMAND 0,3 EXCHANGES THE PIECES AND LETS YOU PLAY
THE COMPUTERS CURRENT POSITION, AND, COMMAND 0,2 EXCHANGES THE
PIECES BUT ALSO SWITCHES THE PLAY TO THE COMPUTER TO RETAIN THE
PROPER CONTINUITY. COMMAND 0,4 ENDS THE GAME [FOR CHICKENS!!].
COMMAND 0,6 PITS THE COMPUTER AGAINST ITSELF [AUTO COMMAND].
COMMANDS 0,7  0,8 AND 0,9 ARE USED TO SET UP THE BOARD, MOVE A 
PIECE AND DELETE A PIECE RESPECTIVELY. TRY THEM THEY ARE SELF
EXPLANATORY. FINALLY COMMAND 0,10 LISTS THE AVAILABLE COMMANDS IN CASE
YOUR MEMORY BANK HAS A GLITCH.
************************** GOOD LUCK **********************************



```
{% endraw %}

## README.DOC

{% raw %}
```

DESCRIPTION OF FILES ON THIS DISK

Name		Size	Description	

CALENDAR.CPM*	 16K	Calendar generator
CALENDAR.FOR	  4K	/
CHESS   .DOC	  2K	Chess program
CHESS   .FOR	 24K	/
EDITM   .FOR	  2K	Edit program
LINUS   .PIC	  3K	Linus portrait
MAZE    .CPM*	 20K	Maze generator
MAZE    .FOR	  5K	/
OTHELLO .FOR	 12K	Othello program
OTHELLO .DOC	  5K	/
PINUP   .PIC	  9K	Pinup portraits
PINUP1  .PIC	 18K	/
RND     .FOR	  1K	Random number generator
SSPLIB  .FOR	 12K	Linear Least Squares

The  Fortran programs contained in this catalog  require  varying
degrees  of modification prior to compilation under Fortran 77 as
offered  by  MicroSoft.  The  source programs  are  not  entirely
compatible with MicroSoft F80.

* 8080 processor support equivalent required

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0556

     Volume in drive A has no label
     Directory of A:\

    DOSFUNC  FOR      1280  10-30-85  12:25p
    KYBD_EX  FOR       640  10-30-85  12:38p
    DOSFN    OBJ       110   6-13-85  10:24a
    DOSFN    ASM      1024   6-13-85  10:22a
    PLOT1    FOR      2304  10-30-85   1:03p
    PLOT2    FOR      2560  10-30-85  10:21p
    PLTSPEC  FOR     11648  10-30-85  11:05p
    MANSPT   FOR     14464  10-30-85  11:07p
    EDITS    FOR      7808   9-18-85   3:20p
    EXAMPLE  DAT     11281  10-31-85  11:09a
    DIR_ASM  ASM      2432  11-05-85   3:27p
    EFFIXSP  FOR     11520   7-17-85   9:31a
    DIR_ASM  OBJ       426  11-05-85   3:28p
    DIR_FOR  EXE     25958  11-05-85   3:29p
    DIR_FOR  FOR       256  11-01-85   9:27a
    TIME2    EXE     24966  11-06-85   9:50a
    DAT-TIME ASM      2944  11-06-85   9:47a
    TIME2    FOR       640  11-06-85   9:48a
    DAT-TIME OBJ       677  11-06-85   9:50a
    DISK     DIR      1152  11-06-85   9:57a
    README           10368  11-06-85  11:27a
    -------              7   6-03-86   8:44a
    README   DOC       896   1-01-80  12:21a
    CALENDAR FOR      3584   5-28-82
    CALENDAR CPM     15872   6-12-82
    CHESS    FOR     24576   5-31-82
    CHESS    DOC      1408   1-01-80  12:27a
    EDITM    FOR      1664   5-31-82
    LINUS    PIC      2944   5-30-82
    MAZE     FOR      4224   5-28-82
    MAZE     CPM     19968   6-12-82
    OTHELLO  FOR     11648   5-31-82
    OTHELLO  DOC      4736   1-01-80  12:32a
    PINUP    PIC      8320   5-30-82
    PINUP1   PIC     17920   5-30-82
    RND      FOR       128   5-28-82
    SSPLIB   FOR     12288   5-31-82
    FILES556 TXT      2146   6-11-86  10:45a
    NOTES556 TXT       640   6-06-86   3:27p
           39 file(s)     267427 bytes
                           32768 bytes free
