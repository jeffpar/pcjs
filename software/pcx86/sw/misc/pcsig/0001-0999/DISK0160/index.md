---
layout: page
title: "PC-SIG Library Disk #160"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0160/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0160"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC FIRING ISSUE #2"

    This is the second issue of PC Firing Line, with the magazine's official
    title.  It has been positioned as the underground newspaper for the IBM
    user.  You will be presented with the untold tales and in-depth
    programming aids.  Some of the articles are ADA, Assembly routines,
    LISP, Fortran, and items not written about by IBM.  It also contains
    many sample program listings with accompanying documentation.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $12.00
    
    File Descriptions:
    
    ???      TXT  Various information and reviews (22 files).
    ADABOOK  REV  Book reviews on 6 different ADA books.
    GRABBAG  C    Source code for USQ.C.
    ITOP     LSP  Routine converts infix to prefix mathematical expressions.
    LISP1    TXT  Various mathematical utilities.
    LIST1    ADA  Various mathematical utilities
    LIST1    ASM  Various mathematical utilities.
    LIST1    BAS  Various mathematical utilities
    LIST1    C    Various mathematical utilities
    LIST1    FOR  Various mathematical utilities.
    PCFL     EXE  PC-Firing Line main program.
    PRETTY1  COM  Printer interface routine.
    READISCO PE   Documentation for READISCOPE program.
    SPLITA   BAT  Splits this diskette for side sided copying.
    WRITERS  GDE  Text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LIST1.BAS

```bas
1 '**                    SIMPMAZE.BAS
2 '**     Generic Maze Generator by Dan Rollins, 04/05/83
3 '**  Generates a simple maze.  Uses standard Microsoft BASIC.
10 DEFINT A-Z
20 DIM T(5), MZ(100,100)   '** maze array (may be expanded to memory size)
30 DIM YD(3),XD(3)  :YD(0)=-1 :XD(1)=1 :YD(2)=1	:XD(3)=-1
40 DIM PWR2(3)	    :PWR2(0)=1 :PWR2(1)=2 :PWR2(2)=4 :PWR2(3)=8
50 RANDOMIZE  VAL(RIGHT$(TIME$,2))  '** get a random seed
60 CLS
90 PRINT"       SIMPMAZE ... Generic Maze generation program"
95 PRINT"   Public domain program written by Dan Rollins 04/05/83
97 PRINT
100 INPUT "horizontal size (26 fits on screen)";H
110 INPUT "vertical size (11 fits on screen) ";V
115 PRINT "calculating maze... please be patient"
120 H=H-1 :V=V-1		'** figure-in 0th elements
130 X=INT(RND*H) :Y=INT(RND*V)	'** random starting point
140 GOSUB 1000			'** generate the maze
150 MZ(0,0)=MZ(0,0)+1		'** open a North door for maze entrance
160 GOSUB 2000			'** print the maze
165 INPUT "press enter to generate next maze",A$
170 GOTO 100
996 '**       ---- Maze generation subroutine ----
997 '** expects: TR=total rooms, H=horizontal max, V=vertical max
998 '**          XD(dir), YD(dir) = motion vectors, PWR2() = powers of 2
999 '**
1000 FOR J=0 TO	H :FOR K=0 TO V	:MZ(J,K)=0 :NEXT :NEXT '** "close" all doors
1010 RC=0 :TR=(H+1)*(V+1)-1	  '** initialize Room Count, Total Rooms
1019 '** ---- Main maze generation loop ---- **
1020 Q=0 :IF RC	= TR THEN RETURN   '** if Room Count = Total Rooms then done
1030   IF Y>0 THEN IF MZ(X,Y-1)=0 THEN Q=Q+1 :T(Q)=0	    '** North
1040   IF X<H THEN IF MZ(X+1,Y)=0 THEN Q=Q+1 :T(Q)=1	    '** East
1050   IF Y<V THEN IF MZ(X,Y+1)=0 THEN Q=Q+1 :T(Q)=2	    '** South
1060   IF X>0 THEN IF MZ(X-1,Y)=0 THEN Q=Q+1 :T(Q)=3	    '** West
1090   IF Q=0 GOTO 1200					    '** no move
1098   '** open the doors and move into new room
1099   '**
1100   D=INT(RND*Q)+1 :DIR=T(D)		       '** choose randomly from list
1110   MZ(X,Y)=MZ(X,Y) + PWR2(DIR)	       '** add door in current room
1120   Y=Y+YD(DIR) :X=X+XD(DIR)		       '** move to new room
1130   ND=DIR-2	:IF ND<0 THEN ND=4+ND	       '** opposite DIR for New Dir
1140   MZ(X,Y)=MZ(X,Y) + PWR2(ND)	       '** add door in new room
1150   RC=RC+1				       '** update Room Count
1160 GOTO 1020
1199   '** Trapped! Scan for an unvisited room.
1200   Y=Y+1 :IF Y>V THEN Y=0 :X=X+1 :IF X>H THEN X=0
1210   IF MZ(X,Y)=0 THEN 1200	     '** if empty keep scanning, else....
1220 GOTO 1020			     '** see if neighbor has been visited
1996 '**   ---- subroutine prints the maze ----
1997 '**   only checks for North and West doors
1998 '** change all PRINTs to LPRINTs for hardcopy
2000 CLS
2010 FOR Y=0 TO	V
2020   FOR X=0 TO H
2030	 IF INT(MZ(X,Y)/2)=MZ(X,Y)/2 THEN PRINT	"+--"; :GOTO 2050
2040	 PRINT "+  ";                           '** must have a North door
2050   NEXT X  :PRINT "+"
2060   FOR X=0 TO H
2070	 IF MZ(X,Y) > 7	THEN PRINT"   "; :GOTO 2090   '** must be a West door
2080	 PRINT"I  ";
2090   NEXT X  :PRINT "I"
2100 NEXT Y
2110 FOR X=0 TO	H-1	   '** add the bottom line
2120   PRINT"+--";
2130 NEXT X :PRINT "+  +"  '** maze exit in Southwest corner
2140 RETURN




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	list1.bas   ██	│
		     └──────────────────────────────────┘
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0160

     Volume in drive A has no label
     Directory of A:\

    ADA1     TXT     16278   5-15-84  12:33a
    ADABOOK  REV     12973   5-15-84  12:17a
    ASM1     TXT     21162   5-15-84  12:14a
    ASM2     TXT     19749   5-15-84  12:06a
    BASIC1   TXT      9178   5-15-84  12:18a
    C1       TXT     15815   5-15-84  12:41a
    CHANGES  TXT      5494   5-15-84  12:58a
    CPYRIGHT TXT      1306   5-15-84  12:57a
    DOS1     TXT     13882   5-15-84  12:18a
    DOS2     TXT      6440   5-15-84  12:19a
    EDITOR   TXT      4183   5-15-84  12:19a
    FILES160 TXT      1489   1-26-89   4:19p
    FORT1    TXT      7980   5-15-84  12:19a
    FORTH1   TXT     15235   5-15-84  12:43a
    FORTH2   TXT     16422   5-15-84  12:45a
    FORTH3   TXT      3366   5-15-84  12:17a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   4:26p
    GRABBAG  C       10321   5-15-84  12:27a
    ITOP     LSP      3740   5-15-84  12:52a
    KEDIT    TXT     22062   5-15-84  12:01a
    LISP1    TXT      9141   5-15-84  12:52a
    LIST1    ADA      2295   5-15-84  12:57a
    LIST1    ASM     16092   5-15-84  12:57a
    LIST1    BAS      3351   5-15-84  12:41a
    LIST1    C         881   5-15-84  12:42a
    LIST1    FOR      5561   5-15-84  12:20a
    MASTHEAD TXT      5240   5-15-84  12:08a
    PAS1     TXT     14621   5-15-84  12:55a
    PCFL     EXE      8576   5-15-84  12:12a
    PCUGINTR TXT      2863   5-15-84  12:56a
    PRETTY1  COM       223   1-01-80   3:07a
    READISCO PE      13126   5-15-84  12:20a
    SPLITA   BAT      1165   5-15-84  12:56a
    SPONSORS TXT      2220   5-15-84  12:59a
    TOC      TXT      7581   5-15-84  12:06a
    WRITERS  GDE      2518   5-15-84  12:59a
           37 file(s)     303261 bytes
                           38912 bytes free
