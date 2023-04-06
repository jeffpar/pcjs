---
layout: page
title: "PC-SIG Diskette Library (Disk #20)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0020/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0020"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DRAW"

    Besides the four games on this disk, most of the programs on this disk
    have something to do with either drawing or displaying a picture on
    your screen.  Some are games which are visually displayed, while the
    DRAW program allows you to, as the name implies, draw pictures with
    your computer.  Two other programs are for the BASIC programmer.
    CROSSREF is a cross-referencing utility, and B-SIMPLE is an aid for
    structured BASIC programming.
    
    System Requirements:  Some programs require color graphics.
    
    How to Start:  From BASIC, type LOAD BASMENU, and press <ENTER>.
    
    File Descriptions:
    
    CHSONG   BAS  Music - Christmas songs  ('Tis the Season!)
    WORM1    BAS  Watch him tunnel through the ground
    CONTROL  BAS  Lets this diskette run under PCS
    SCOPE    BAS  Display symmetric random patterns
    BASMENU  BAS  AUTOMATIC MENU FOR BASIC PROGRAMS (See Disk No 14)
    CROSSREF SCR  Documentation for CROSSREF  (SCRIPT source)
    EDIT     BAT  Utility to invoke RV-EDIT from DOS (See Disk No 19)
    DRAW     BAS  Program to draw pictures on color screen
    CROSSREF EXE  Utility cross-reference program for BASIC programs
    BLACKJCK BAS  Upgraded to use color monitor if on
    HANGMAN  BAS  Color version of HANGMAN
    B-SIMPLE BAS  Utility aid to create & structure BASIC programs
    YAHTZEE  BAS  Upgraded to use color monitor if on
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## B-SIMPLE.BAS

```bas
0 GOTO 65005 :'B-SIMPLE has not yet been initialized
2 '  **************************************************************************
3 '  *     Basic Structured IMPLEmentation (B-SIMPLE PROGRAMMERS AID)         *
4 '  *   B-SIMPLE  VERSION  1.0     2/28/82  Ira Glickstein  8-622-4202       *
5 '  *   (modification of MPAK 1.1 1/30/82 by Kurt Carpenter 8-272-5229)      *
6 '  **************************************************************************
7 '
8 '
9 '
10 GOTO 20010:' to initialization of program
11 '
12 '
13 '
14 '  ***********************************************************************
15 '  *    When B-SIMPLE is initialized, your program name, version, date,  *
16 '  *       your name, address, phone, etc. will appear here              *
17 '  ***********************************************************************
18 '
19 '
20001 'INITIALIZATION                    Init #200
20010 '     (start code here)
20099 '                              end Init #200
20100 '
20101 '                                  Init #201
20200 '                                  Init #202
20300 '                                  Init #203
20400 '                                  Init #204
20500 '                                  Init #205
20600 '                                  Init #206
20700 '                                  Init #207
20800 '                                  Init #208
20900 '                                  Init #209
20999 '  end of INIT
21000 '
21001 'MAIN LINE PROGRAM                 Main #210
21010 '     (start code here)
21099 '                              end Main #210
21100 '
21101 '                                  Main #211
21200 '                                  Main #212
21300 '                                  Main #213
21400 '                                  Main #214
21500 '                                  Main #215
21600 '                                  Main #216
21700 '                                  Main #217
21800 '                                  Main #218
21900 '                                  Main #219
21999  END: 'end of MAIN LINE PROGRAM
22000 '
40000 ' ********************************************************************            *        MODULE # | NAME OF MODULE            * B-SIMPLE DIRECTORY *            ********************************************************************
40001 ' *          1-199  | SUBROUTINES           <START HERE              *
40010 ' *                 |                                                *
40100 ' *                 |                                                *
40199 ' ********************************************************************
40200 ' *        200-209  | INITIALIZATION        <STARTS HERE             *
40210 ' *        210-219  | MAIN LINE PROGRAM     <STARTS HERE             *
40220 ' ********************************************************************
41200 COLOR 0,7:PRINT " INITIALIZATION        ": COLOR 7,0 : LIST 20000-20100
41201 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20100-20200
41202 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20200-20300
41203 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20300-20400
41204 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20400-20500
41205 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20500-20600
41206 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20600-20700
41207 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20700-20800
41208 COLOR 0,7:PRINT " INITIALIZATION cont'd ": COLOR 7,0 : LIST 20800-20900
41209 COLOR 0,7:PRINT " INITIALIZATION done   ": COLOR 7,0 : LIST 20900-21000
41210 COLOR 0,7:PRINT " MAIN LINE PROGRAM     ": COLOR 7,0 : LIST 21000-21100
41211 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21100-21200
41212 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21200-21300
41213 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21300-21400
41214 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21400-21500
41215 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21500-21600
41216 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21600-21700
41217 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21700-21800
41218 COLOR 0,7:PRINT " MAIN LINE PROGRAM  ctd": COLOR 7,0 : LIST 21800-21900
41219 COLOR 0,7:PRINT " MAIN LINE PROGRAM: END": COLOR 7,0 : LIST 21900-22000
50000 '
50001 ' instructions
50010 CLS:KEY OFF
50020 MS$=" B-SIMPLE = Basic Structured IMPLEmentation (PROGRAMMER'S AID)  ":GOSUB 61110:PRINT
50030 COLOR 15,0:PRINT "  B-SIMPLE";:COLOR 7,0:PRINT" helps you write good top-down, modular programs in Basic. You don't":PRINT"have to be a programmer to use it.  Your programs should";
50033 COLOR 15,0:PRINT " be simple ";:COLOR 7,0:PRINT"to write,";:COLOR 15,0:PRINT"be simple ";:COLOR 7,0:PRINT"to debug, and";:COLOR 15,0:PRINT" be simple ";:COLOR 7,0:PRINT"to change later."
50035 PRINT:PRINT "  The Pet User Club of Berkley put an earlier version, MPAK, into the public    domain. Kurt Carpenter, IBM Westlake, 8-272-5229, modified it for the IBM PC.   This version is by Ira Glickstein, IBM Owego, 8-662-4202."
50040 PRINT:MS$="  HOW TO USE IT: RUN "+CHR$(34)+"B-SIMPLE  ":GOSUB 61110:PRINT
50050 PRINT "  B-SIMPLE is menu driven.  When RUN, it establishes a skeleton for your        program, using Blocks of 100 line numbers.  You can have up to 199 modules for  SUBROUTINES, plus ten for INITIALIZATION, and ten for MAIN LINE PROGRAM.":PRINT
50060 PRINT "  B-SIMPLE helps you add, list, renumber, or delete modules. It keeps a         directory and puts in module names, etc. to make your listing easier to         understand. When you are done, you can delete B-SIMPLE (quite simply)."
50090 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50110 CLS
50120 MS$="  A BLOCK IS 100 LINE NUMBERS  ":GOSUB 61110:PRINT
50130 PRINT "  Each module has a reserved block of 100 line numbers. Up to 22 lines may be   used for the module (a screen's worth). B-SIMPLE uses four of those lines for   module name, RETURN, etc. You can use up to 18 lines.":PRINT
50135 PRINT "  Keeping modules short is good programming!":PRINT
50140 PRINT "  SUBROUTINES are put from line #100 to line #20000. From the menu you can:":PRINT:PRINT  "1 or A=ADD a new module (and enter code using AUTO)":PRINT "2 or L=LIST an old module (and edit if desired)"
50143 PRINT"3 or R=RENUMBER & LIST an old module (and edit if desired)"
50145 PRINT "4=DELETE an old module, or":PRINT"5=DIRECTORY (display a list of all modules)":PRINT
50150 PRINT "  INITIALIZATION and the MAIN LINE PROGRAM are between lines #20000 and #22000. From the menu you can:":PRINT:PRINT"6=LIST Blocks of INITIALIZATION or MAIN LINE PROGRAM, or"
50153 PRINT"7=REINITIALIZE Your Program Information"
50190 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50210 CLS
50220 MS$="  Menu -- 1 or A=ADD a new module  ":GOSUB 61110:PRINT
50230 PRINT "  B-SIMPLE asks for module number, MN (1 thru 199), and name (up to 20          characters.) It then prints out 7 lines of information, and asks you to HIT     RETURN 7 TIMES.":PRINT
50240 PRINT "  This puts your module's name in the directory, and in a remark on line MN01 ofthe block. RETURN is put on line MN99. A blank remark is placed above your      module (on line MN00) and below your module, to make the listing look good.":PRINT
50260 PRINT "  AUTO line numbering starts at line MN10 of your block, with steps of 5 lines. Your code can go from line MN10 (always the first line of code) thru line MN95. RETURN is always line MN99 of the block.":PRINT
50265 PRINT "  You can stop AUTO line numbering with CTRL-BREAK. Type RUN (or hit F2) to get back to the B-SIMPLE menu.":PRINT
50270 PRINT "  You call this subroutine, from another subroutine, or the MAIN LINE PROGRAM,  with a line that says: GOSUB MN00 (or GOSUB MN10 if speed is critical)."
50290 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50310 CLS
50320 MS$="  Menu -- 2 or L=LIST a module (and edit if desired)  ":GOSUB 61110:PRINT
50330 PRINT "  B-SIMPLE asks for module number, MN (1 thru 199), and lists the module.":PRINT
50340 PRINT "  You can add lines, change lines, etc., using normal BASIC editing.":PRINT
50350 PRINT "  You can get back to the B-SIMPLE menu by typing RUN (or hitting F2). If you   have inserted code on lines that don't end in 0 or 5, you should go back to the B-SIMPLE menu and select 3 -- RENUMBER.":PRINT
50390 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50410 CLS
50420 MS$="  Menu -- 3 or R=RENUMBER & LIST (and edit if desired)  ":GOSUB 61110:PRINT
50430 PRINT "  B-SIMPLE asks for module number, MN (1 thru 199), renumbers, and then lists   the module.":PRINT
50440 PRINT "  You can add lines, change lines, etc., using normal BASIC editing.":PRINT
50450 PRINT "  You can get back to the B-SIMPLE menu by typing RUN (or hitting F2). If you   have inserted code on lines that don't end in 0 or 5, you should go back to the B-SIMPLE menu and select 3 -- RENUMBER.":PRINT
50490 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50510 CLS
50520 MS$="  Menu -- 4=DELETE an old module  ":GOSUB 61110:PRINT
50530 PRINT "  B-SIMPLE asks for module number, MN (1 thru 199), and prints out the line     numbers it uses. It asks you to HIT RETURN a sufficient number of times to      delete the lines.":PRINT
50540 PRINT "  This removes the subroutine and it's entry in the B-SIMPLE directory.":PRINT
50550 PRINT "  You can get back to the B-SIMPLE menu by typing RUN (or hitting F2).":PRINT
50560 PRINT "  (By the way, if you try to DELETE a non-existent module, or one that has no   code on line MN10, you'll get an error  message, but no harm will be done.)":PRINT
50590 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50610 CLS
50620 MS$="  Menu -- 5=DIRECTORY of modules  ":GOSUB 61110:PRINT
50630 PRINT "  B-SIMPLE lists the directory.  If there are over 20 entries, CTRL-NUM LOCK    will make the listing pause.":PRINT
50650 PRINT "  You can get back to the B-SIMPLE menu by typing RUN (or hitting F2).":PRINT
50690 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50710 CLS
50720 MS$="  Menu -- 6=LIST INITIALIZATION or MAIN LINE PROGRAM blocks  ":GOSUB 61110:PRINT
50730 PRINT "  B-SIMPLE tells you where they are and asks for a block number. It then lists  the block you want.":PRINT
50740 PRINT "  You can add lines, change lines, etc., using normal BASIC editing.":PRINT
50750 PRINT "  You can get back to the B-SIMPLE menu by typing RUN (or hitting F2).":PRINT
50790 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50810 CLS
50820 MS$="  Menu -- 7=REINITIALIZE Your Program Information":GOSUB 61110:PRINT
50830 PRINT "  B-SIMPLE allows you to change the way your name, address, program name,       version number, date, etc. appear in title block":PRINT
50840 PRINT "  You'll be prompted to enter your name, address, phone, program name, version, date, etc. B-SIMPLE will then print several lines of information, and ask you toHIT RETURN 4 TIMES.":PRINT
50850 PRINT "  This will update the title block, and send you back to the B-SIMPLE menu.":PRINT
50890 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50910 CLS
50920 MS$="  TO RUN YOUR PROGRAM ":GOSUB 61110:PRINT
50930 PRINT "  Any time you see Ok and a flashing cursor, you can type RUN 10 (or hit F10)   and YOUR program will run.":PRINT:PRINT:PRINT
50960 MS$="  TO DELETE B-SIMPLE (quite simply)  ":GOSUB 61110:PRINT
50970 PRINT "  When your program is done, and you don't need B-SIMPLE anymore, just:":PRINT:PRINT"DELETE 0-9":PRINT"DELETE 41000-65100  (if you want to keep the B-SIMPLE directory), or":PRINT"DELETE 40000-65100  (if you don't want the directory)."
50980 PRINT:PRINT"  Then you can run YOUR program by simply typing RUN.":PRINT
50990 LOCATE 25,20:PRINT "Hit RETURN";:LOCATE 25,10:INPUT "Ready";X$
50999 RETURN:'from instructions
60000 '
60001 'SIMPLE goes from here to line 65100
61100 '
61101 'message sr
61110 COLOR 0,7 : PRINT " "MS$" ": COLOR 7,0
61199 RETURN:'from message sr
61200 '
61201 'compute c sr
61210 C = L + 4
61215 F = 1 : P = PEEK (C) : IF ( P = 137 OR P = 141 OR P = 205 OR P=140 OR P=142 OR P=161 OR P=168 ) AND PEEK (C+1) = 32 THEN C = C + 2  ELSE GOTO  61295
61220 IF P = 141 THEN F = 0
61225 GOSUB 61310 : IF C > N - 1 THEN 61299
61230 IF P = 137 OR P = 141 THEN 61215
61235 IF P = 13 OR P = 14 GOTO 61240 ELSE GOTO 61295
61240 IF P = 13 GOTO 61260
61245 C = C + 1 : FOR E = 1 TO A : IF FNR (C) = L (E) THEN 61255
61250 NEXT E : IF F = 1 THEN MS$ = "WARNING MODULE JUMPS TO ANOTHER MODULE " : GOSUB 61110 : GOTO 61260 ELSE GOTO 61260
61255 POKE C+1 , FNM (E) : POKE C , FNL (E) - ( FNM (E) * 256 )
61260 C = C + 2 : GOSUB 61310 : IF C > N-1 THEN 61299
61265 IF PEEK (C) = 44 THEN C = C + 1 : GOTO 61225 ELSE GOTO 61295
61295 C = C + 1 : IF C < = N - 1 THEN 61215
61299 RETURN:'from compute c sr
61300 '
61301 'figure c sr
61310 FOR I = C TO N- 1 : IF PEEK (I) = 32 THEN C = C + 1 ELSE I = N
61320 NEXT I : P = PEEK (C)
61399 RETURN :'from figure c sr
61400 '
61401 'mess sr (add, list, renumber, delete)
61410 ON C GOSUB 61435,64610,61425,61415:GOTO 61490
61415 GOSUB 61510: CLS : LOCATE 3,1,0 : PRINT 41000.+M:PRINT 40000.+M:PRINT 100*M+1
61420 FOR I = 1 TO A : PRINT L(I) : NEXT I :PRINT M*100+99: LOCATE 1,1:MS$="HIT ENTER KEY "+STR$(4+A)+" TIMES":GOSUB 61110:RETURN:'within module
61425 GOSUB 61510 : IF FNL (A) >= R THEN MS$ = "CAN'T RESEQUENCE - TOO MANY LINES IN MODULE." : GOSUB 61110 :C=9: RETURN:'within module                             61430 N = LO : FOR B = 1 TO A : GOSUB 61610 : GOSUB 61210 : NEXT B : return:'within module
61430 N = LO : FOR B = 1 TO A : GOSUB 61610 : GOSUB 61210 : NEXT B : GOTO 61490
61435 PRINT:INPUT "MODULE NAME (UP TO 20 CHAR) "; N$ : IF LEN(N$) > 20 THEN MS$ = "MODULE NAME TOO LONG" : GOSUB 61110 : GOTO 61435
61440 CLS : LOCATE 3,1,0
61445 PRINT 41000.+M TAB(8);"color 0,7:PRINT "; CHR$(34)"                      " CHR$(34)": color 7,0 : LIST "; Q-10 ; -R-5
61450 LOCATE 3,26,0:PRINT N$
61455 PRINT 40000.+M;"' *"SPC(13+(M>9)+(M>99));M;" | ";N$;:LOCATE 4,77:PRINT"*"
61460 PRINT Q-10;"'":PRINT Q-9;"'   "N$:PRINT Q+89;" RETURN : 'from "N$:PRINT Q+90;"'"
61470 PRINT "MS$="+CHR$(34)+"CTRL-BREAK ends AUTO entry"+CHR$(34)+":GOSUB 61110 :AUTO"Q","S
61475 LOCATE 1,1 : MS$ = "HIT ENTER KEY 7 TIMES"  : GOSUB 61110 : RETURN :'within module
61490 IF K=3 THEN C=2:GOTO 61410
61499 END :'from mess sr
61500 '
61501 'def sr
61510 DEF FNR (X) = PEEK (X) + 256 * PEEK (X+1) : DEF FNL (X) = S * (X-1) + T : N = FNR (48) : DEF FNM (X) = INT( FNL (X) / 256 )
61520 L = N : N = FNR (L) : X = FNR (L+2) : LO = L : IF X < Q THEN 61520
61530 A = A + 1 : L(A) = X : L = N : N = FNR (L) : X = FNR (L+2) : IF X < = R THEN 61530
61540 IF L(1) > R AND  C = 3 THEN MS$ = "CAN'T RENUMBER A NULL MODULE" : GOSUB 61110 : GOTO 61599
61550 N=LO:GOTO 61599
61599 RETURN :'from def sr
61601 'l n sr
61610 L = N : N = FNR (L) : POKE L + 3 , FNM (B) : POKE  L+2  , FNL (B) - 256 * FNM (B)
61699 RETURN :'from l n sr
61700 '
64100 '
64101 'your choice sr
64110 L=-200:SOUND 370,1
64120 COLOR 18+16*(L<0),7:LOCATE Y,2:PRINT " YOUR CHOICE - "+F$+" - ? ";:COLOR 0,7
64130 X$=INKEY$:DEF SEG:POKE 106,0:IF X$<>"" THEN 64150
64132 L=L+1:IF L<1 THEN 64120
64140 SOUND L*37,1:SOUND 32767,14:GOTO 64120
64150 LOCATE Y,2:FOR L=1 TO LEN(F$)+20:PRINT " ";:NEXT:'x$ contains key hit
64180 COLOR 7,0
64199 RETURN :'from your choice sr
64200 '
64201 'quick menu
64210 KEY OFF:COLOR 15,4:CLS:LOCATE 1,2:PRINT "       SELECT BY NUMBER          B-SIMPLE (Basic Structured IMPLEmentation)              (OR LETTER)             Version 1.0 2-82 Ira Glickstein 8-662-4202"
64221 LOCATE 5,2:PRINT"1 or A -- ADD a module and enter code"
64222 LOCATE 7,2:PRINT"2 or L -- LIST a module (and edit if desired)"
64223 LOCATE 9,2:PRINT"3 or R -- RENUMBER a module, then list it"
64224 LOCATE 11,2:PRINT"4 -- DELETE a module"
64225 LOCATE 13,2:PRINT"5 -- DIRECTORY display of modules"
64226 LOCATE 15,2:PRINT"6 -- List/Edit INITIALIZATION or MAIN LINE PROGRAM Blocks"
64227 LOCATE 17,2:PRINT "7 -- REINITIALIZE your program information"
64228 LOCATE 19,2:PRINT"8 -- INSTRUCTIONS"
64229 LOCATE 21,2:PRINT"9 -- QUIT and exit program"
64230 LOCATE 24,34:PRINT G$;:LOCATE 25,34:PRINT P$;
64250 Y=23:GOSUB 64110 CHOICE:K=ASC(X$):K=-1*(49*(K=65 OR K=97)+50*(K=76 OR K=108)+51*(K=82 OR K=114)+K*(K>47 AND K<58))-48:PRINT K:IF K>0 AND K<10 THEN 64290 ELSE 64250
64290 KEY ON
64299 RETURN :'from menu sr
64500 '
64501 'directory sr
64510 CLS
64520 LIST 40000-40399
64599    RETURN : 'from directory sr
64600 '
64601 'LIST SR
64610 CLS :ON ERROR GOTO 64680
64615 ON M GOSUB 41001,41002,41003,41004,41005,41006,41007,41008,41009
64620 ON M-9 GOSUB 41010,41011,41012,41013,41014,41015,41016,41017,41018,41019,41020,41021,41022,41023,41024,41025,41026,41027,41028,41029,41030,41031,41032,41033,41034,41035,41036,41037,41038,41039,41040,41041,41042,41043,41044,41045,41046,41047,41048
64630 ON M-48 GOSUB 41049,41050,41051,41052,41053,41054,41055,41056,41057,41058,41059,41060,41061,41062,41063,41064,41065,41066,41067,41068,41069,41070,41071,41072,41073,41074,41075,41076,41077,41078,41079,41080,41081,41082,41083,41084,41085,41086,41087
64640 ON M-87 GOSUB 41088,41089,41090,41091,41092,41093,41094,41095,41096,41097,41098,41099,41100
64650 ON M-100 GOSUB 41101,41102,41103,41104,41105,41106,41107,41108,41109
64660 ON M-109 GOSUB 41110,41111,41112,41113,41114,41115,41116,41117,41118,41119,41120,41121,41122,41123,41124,41125,41126,41127,41128,41129,41130,41131,41132,41133,41134,41135,41136,41137,41138,41139,41140,41141,41142,41143,41144,41145,41146,41147,41148
64670 ON M-148 GOSUB 41149,41150,41151,41152,41153,41154,41155,41156,41157,41158,41159,41160,41161,41162,41163,41164,41165,41166,41167,41168,41169,41170,41171,41172,41173,41174,41175,41176,41177,41178,41179,41180,41181,41182,41183,41184,41185,41186,41187
64675 ON M-187 GOSUB 41188,41189,41190,41191,41192,41193,41194,41195,41196,41197,41198,41199
64677 ON M-199 GOSUB 41200,41201,41202,41203,41204,41205,41206,41207,41208,41209,41210,41211,41212,41213,41214,41215,41216,41217,41218,41219
64680 IF ERR=8 THEN PRINT "NO SUCH MODULE"
64690 ON ERROR GOTO 0
64699    RETURN : 'from LIST SR
64700 '
64701 'list init & main sr
64710 CLS:PRINT "INITIALIZATION utilizes blocks #200 thru 209":PRINT
64720 PRINT"MAIN LINE PROGRAM utilizes blocks #210 thru 219":PRINT
64730 INPUT "ENTER BLOCK NUMBER (200 - 219): ",M:IF M<200 OR M>219 THEN 64710
64740 GOSUB 64610
64799  RETURN :'from list init & main sr
64800 '
64900 '
64910 CLS:PRINT"B-SIMPLE Version 1.0 2-82 Ira Glickstein 8-662-4202"
64920 PRINT:PRINT:PRINT"TO GET STARTED I'LL NEED A BIT OF PERSONAL INFORMATION"
64930 LOCATE 10,1:PRINT "Please enter your name, address, phone, etc. (up to 40 characters)                                         <-------------------------------------->              PROGRAMMERS IDENTITY:     ";P$
64935 LOCATE 12,1:INPUT " PROGRAMMERS IDENTITY:   ";P$:P$=LEFT$(P$,40)
64940 LOCATE 14,1:PRINT "Please enter your program's name, version, date, etc. (up to 40 characters)                                <-------------------------------------->              PROGRAM IDENTIFICATION:   ";G$
64945 LOCATE 16,1:INPUT " PROGRAM IDENTIFICATION: ";G$:G$=LEFT$(G$,40)
64950 CLS:LOCATE 3,1:PRINT"0 GOTO 65010 :'To delete B-SIMPLE, just DELETE 0-9, DELETE 41000-65100":LOCATE 4,1:PRINT"15 '  * "G$;:LOCATE 5,1:PRINT"16 '  * "P$;:LOCATE 4,50:PRINT"* I used B-SIMPLE 1.0 2-82 *";:LOCATE 5,50:PRINT"* by Glickstein 8-662-4202 *
64955 LOCATE 6,1:PRINT"65015 G$="+CHR$(34)+G$+CHR$(34) : PRINT "65016 P$="+CHR$(34)+P$+CHR$(34) :PRINT"RUN"
64960 LOCATE 1,1:MS$=" HIT ENTER KEY 6 TIMES ":GOSUB 61110:END
64999  RETURN :'from initializaton sr
65000 '
65001 'main line program -- simple
65005 GOSUB 64910 : 'initialization of B-SIMPLE
65010 CLEAR:CLS:POKE 106,0:KEY 10,"run 10"+CHR$(13)
65020 GOSUB 64210 :'menu sr (K is choice: 1=add, 2=list, 3=renumber, 4=delete, 5=directory, 6=list init,main,data, 7=reinit your info, 8=instructions, 9=quit)
65030 IF K=5 OR K=6 OR K=7 OR K=8 THEN 65070
65033 IF K=5 THEN 65060
65035 IF K=9 THEN 65099
65040 IF K=5 THEN 65070
65050 IF K=9 THEN 65099
65060 CLS:PRINT:INPUT "MODULE NUMBER (1-199) "; M : Q = M * 100+10 : R = Q + 85 : S = 5: T = Q: U = 700 + M - 100 * (M>39) - 100 * (M>69) : IF M < 1 OR M > 199 THEN 65010 ELSE DIM L (40)
65070 CLS:PRINT"I'm working on it!":C=K:ON K GOSUB 61410,64610,61410,61410,64510,64710,64910,50010
65080 IF K=3 AND C<>9 THEN GOSUB 64610
65090 GOTO 65010
65099 END :'of simple
65100 '
```

## BASMENU.BAS

```bas
0 KEY(2) ON:ON KEY(2) GOSUB 65140
10 DIM PROG$(64)
20 SCREEN 0:KEY OFF:KEY 1,"run"+CHR$(34)+"basmenu"+CHR$(13)
30 CLS:WIDTH 80:COLOR 0,0:FILES "*.bas"
40 FOR DR%=1 TO 24
50 FOR DC%=0 TO 65 STEP 13
60 IF CHR$(SCREEN(DR%,DC%+1)) = " " THEN 130
70 AR%=AR%+1
80 FOR L%=1 TO 8
90 PROG$(AR%)=PROG$(AR%)+CHR$(SCREEN(DR%,DC%+L%))
100 NEXT L%
110 NEXT DC%
120 NEXT DR%
130 P=0:I%=0:CLS:WIDTH 40:LOCATE 1,4:COLOR 14,0
135 PRINT "BASIC programs on this diskette:"
140 FOR DC%=1 TO 27 STEP 13
150 FOR DR%=3 TO 23
160 I%=I%+1
170 IF PROG$(I%)="" THEN 200 ELSE LOCATE DR%,DC%
175 COLOR 0,7:PRINT USING "##";I%;
176 COLOR 7,0:PRINT " ";PROG$(I%)
180 NEXT DR%
190 NEXT DC%
200 LOCATE 25,1:INPUT "Enter number of program desired: ",P
210 IF P < 1 OR P >= I% THEN 130
220 WIDTH 80:CLS:PRINT "Press F1 to return to menu when finished":RUN PROG$(P)
65130 E=ERR:RESUME NEXT
65140 ON ERROR GOTO 65130
65145 'RUN"menu
65150 'IF E<>71 THEN RUN"control
65160 RUN"A:TRANSFER
65170 SYSTEM
```

## BLACKJCK.BAS

```bas
0 GOTO 65000
1 '
1000 REM  ** CCII BLACKJACK - JAN 3,78 - JESSEN **
1010 REM ADAPTED TO PC BY PATRICK LEABO--TUSCON
1011 REM COLOR MODIFICATIONS BY BOB VOLLMER - SAN JOSE, Sept '82
1015 REM
1020 SCREEN 0:COLOR 7,2:WIDTH 80:KEY OFF:LOCATE ,,0
1025 SND = 1:KEY 10,"":ON KEY (10) GOSUB 3800 :KEY (10) ON
1030 COMMON MENU:RANDOMIZE VAL(RIGHT$(TIME$,2))
1040 CLS:GOSUB 3440:Z7= RND (1):GOSUB 3250:Y= 1:COLOR 14
1050 LOCATE 7,7:PRINT "WELCOME TO...";:PRINT "BLACKJACK!":COLOR 0
1060 K= 0:W1= 0:R= RND (1):N= INT (1945* RND (1)+ 1):X= INT (10* RND (1))
1070 DIM D(52),E(5),V(5),T(5),W(5),T$(34),Q(52):WS$=""
1080 FOR A= 1TO 52:D(A)= 0:NEXT 
1090 FOR A= 0TO 39STEP 13:FOR C= 1TO 13:Q(A+ C)= C:NEXT C,A
1100 K= K+ 1:FOR P= 1TO 5:E(P)= 0:V(P)= 0:T(P)= 0:NEXT :V(3)= 1
1110 LOCATE 9,2:GOSUB 3580
1120 LOCATE 23,54:PRINT STRING$(26," ")
1130 LOCATE 21,54:PRINT STRING$(26," ")
1140 LOCATE 9,3:PRINT STRING$(50," ")
1150 LOCATE 21,54:IF W1= 0 THEN GOSUB 3110
1160 IF W1> 0THEN GOSUB 3090
1170 IF W1< 0THEN GOSUB 3100
1180 GOSUB 3640:LOCATE 22,55:PRINT"WAGER ";:COLOR 14:PRINT "$";
1190 LOCATE 22,62:LINE INPUT;W$:P=1:COLOR 0
1200 IF LEFT$(W$,3)= "END" OR LEFT$(W$,3)="end" THEN GOTO 65200  :ELSE IF W$="" THEN W$=WS$ ELSE WS$=W$
1210 W= VAL (W$):LOCATE 1,1
1220 IF W< = 500 THEN 1240:REM
1230 LOCATE 23,55:PRINT "HOUSE LIMIT IS $500";:GOSUB 3610:GOTO 1110
1240 IF W> 0THEN 1260
1250 LOCATE 23,58:PRINT "BE SERIOUS";:GOSUB 3220:GOTO 1110
1260 IF W< 1THEN 1290
1270 HP= HP+ 1
1280 GOTO 1320
1290 LOCATE 23,58
1300 PRINT "CHEAPSKATE";
1310 GOSUB 3610:GOTO 1110
1320 Q3= W
1330 IF Q3< 250THEN 1350
1340 Q3= INT (Q3/ 10)
1350 FOR A4= 1TO Q3:X= RND (1):NEXT :W(2)= W:W(3)= W:GOTO 1380
1360 TE= 0:NT= 0:LOCATE 9,14:PRINT "*I AM RESHUFFLING*":GOSUB 3220:GOTO 1110
1370 LOCATE 9,2:PRINT "HOUSE LIMIT IS $500":GOSUB 3610:GOTO 1110
1380 E(5)= 1:GOSUB 3510:GOSUB 2090:IF E(1)= 0THEN 1400
1390 V(4)= 1
1400 V(5)= 1:E(5)= 2:GOSUB 3510:GOSUB 2090:M= X:P= 3:V(3)= 1
1410 GOSUB 3510:GOSUB 2090:G= X
1420 GOSUB 3690
1430 V(3)= V(3)+ 1
1440 GOSUB 3510:GOSUB 2090:IF V(2)> 0THEN 1670
1450 S= X
1460 IF V(3)> 2THEN 1670
1470 IF T(P)< 21THEN 1570
1480 IF E(P)< 2THEN 1500
1490 E(P)= E(P)- 1:T(P)= T(P)- 10:GOTO 1570
1500 LOCATE (Y9+ 2),(X9+ 8):PRINT "*BLACKJACK*"
1510 LOCATE 9,10:PRINT "I DEALT WRONG AGAIN!"
1520 E(5)= 2:P= 1:X9= 8:Y9= 3:X= M:GOSUB 2280
1530 IF V(3)< 5THEN 1550
1540 W1= W1+ 2* W:GOTO 1560
1550 W1= W1+ 1.5* W
1560 GOTO 3000
1570 IF V(4)= 0THEN 1670
1580 LOCATE 9,15:PRINT SPC( 22);""
1590 LOCATE 9,15:GOSUB 3640:PRINT "INSURANCE ";:COLOR 31:PRINT"?";:COLOR 0:GOSUB 3660:PRINT
1600 LOCATE 9,3:PRINT STRING$(50," ")
1610 KS$=LEFT$ (I$,1):IF KS$< > "Y" AND KS$<>"y" THEN 1670
1620 IF T(1)< 21THEN 1650
1630 W1= W1+ W:PRINT 
1640 LOCATE 9,8:PRINT "YOU WIN $";W/ 2;" ON INSURANCE":GOTO 1670
1650 W1= W1- W/ 2:PRINT 
1660 LOCATE 9,8:PRINT "YOU LOST $";W/ 2;" ON INSURANCE"
1670 IF T(1)< 21THEN 1720
1680 IF E(1)< 2THEN 1700
1690 E(1)= E(1)- 1:T(1)= T(1)- 10:GOTO 1720
1700 LOCATE 9,22:PRINT "**I HAVE BLACKJACK**"
1710 X9= 8:Y9= 3:E(5)= 2:P= 1:X= M:GOSUB 2280:P= 3:GOTO 2910
1720 IF T(P)< = 21THEN 1780
1730 IF E(P)> 0THEN 1770
1740 LOCATE 9,16:PRINT "**YOU BUST**"
1750 GOSUB 3560:C1= T(P)- 5* (INT (T(P)/ 5)):IF V(2)= 1THEN 1990
1760 GOTO 2690
1770 E(P)= E(P)- 1:T(P)= T(P)- 10
1780 IF V(1)= 2THEN 1750
1790 IF V(3)> 4THEN 1810
1800 GOTO 1820
1810 IF T(P)< 21THEN 3230
1820 LOCATE (Y9+ 2),(X9+ 8):GOSUB 3640:COLOR 31:PRINT "PLAY ";:COLOR 0:GOSUB 3660
1830 V(1)= 0
1840 KS$= LEFT$ (I$,1):IF KS$= "H" OR KS$="h" THEN V(1)= 1:GOTO 1870
1850 IF KS$= "D" OR KS$="d" THEN V(1)= 2:GOTO 1870
1860 IF KS$= "S" OR KS$="s" THEN V(1)= 3:GOTO 1870
1865 IF KS$ <> "0" THEN BEEP :GOTO 1820
1870 LOCATE (Y9+ 2),(X9+ 8):PRINT "      "
1880 IF V(1)< 3THEN 2030
1890 IF V(2)> 0THEN 2020
1900 IF V(3)> 2THEN 2020
1910 IF Q(G)= Q(S)THEN 1940
1920 LOCATE 9,22:PRINT "THAT'S NO PAIR":GOSUB 3610
1930 LOCATE 9,22:PRINT "                        ":GOTO 1820
1940 V(2)= 1:IF Q(G)< 1THEN 1960
1950 V(1)= 0
1960 T(3)= 0:T(2)= 0:P= 2:X9= 2:Y9= 19:GOSUB 3550
1970 X= S:GOSUB 2280:GOSUB 1980:P= 3:W(3)= W:X= G:GOSUB 1980:GOTO 1440
1980 GOSUB 2230:V(3)= 2:T(P)= C:RETURN 
1990 P= 2:V(2)= 2:V(3)= 2:IF Q(G)< 1THEN 2010
2000 V(1)= 0
2010 GOTO 1440
2020 LOCATE 9,22:PRINT "NO SPLITS NOW     ":GOSUB 3610:LOCATE 9,22:PRINT"               ":GOTO 1820
2030 IF V(1)< 2THEN 2070
2040 IF V(3)= 2THEN 2060
2050 LOCATE 9,22:PRINT "TOO LATE TO DOUBLE":GOSUB 3610:LOCATE 9,22:PRINT"                      ":GOTO 1820
2060 W(P)= 2* W(P)
2070 IF V(1)> 0THEN 1430
2080 GOTO 1750
2090 GOSUB 2120:T(P)= T(P)+ C:IF V(5)= 0THEN 2110
2100 V(5)= 0:RETURN 
2110 GOSUB 2280:RETURN 
2120 IF R> = 50THEN 2170
2130 X= INT (53* RND (Y))
2140 IF X= 0THEN 2130
2150 IF D(X)= 0THEN 2210
2160 R= R+ 1:IF R< 50THEN 2120
2170 FOR A= 1 TO 52:IF D(A)= K THEN 2190
2180 D(A)= 0
2190 NEXT 
2200 TE= 0:NT= 0:R= 0:LOCATE 9,18:PRINT "*I RESHUFFLED*":GOSUB 3610:LOCATE 9,18:PRINT"                 ":GOTO 2120
2210 R= 0
2220 D(X)= K
2230 IF Q(X)> 1THEN 2250
2240 C= 11:E(P)= E(P)+ 1:RETURN 
2250 IF Q(X)> 10THEN 2270
2260 C= Q(X):RETURN 
2270 C= 10:RETURN 
2280 GOSUB 2290:RETURN 
2290 FOR I= 0 TO 34:T$(I)=  " ":NEXT
2300 IF X> 39 THEN U$=CHR$ (5):CCC=0:GOTO 2340
2310 IF X> 26 THEN U$= CHR$ (3):CCC=4:GOTO 2340
2320 IF X> 13 THEN U$= CHR$(4):CCC=4:GOTO 2340
2330 U$= CHR$ (6):CCC=0
2340 COLOR CCC,7
2350 ON Q(X) GOTO 2540,2530,2520,2510,2490,2470,2460,2450,2440,2420,2380,2370
2360 T$(17)= "K":GOTO 2390
2370 T$(17)= "Q":GOTO 2390
2380 T$(17)= "J"
2390 T$(8)= U$:T$(7)= U$:T$(6)= U$:T$(11)= U$:T$(16)= U$
2400 T$(21)= U$:T$(26)= U$:T$(27)= U$:T$(28)= U$:T$(23)= U$
2410 T$(18)= U$:T$(13)= U$:GOTO 2550
2420 T$(6)= U$:T$(8)= U$:T$(16)= U$:T$(18)= U$:T$(26)= U$
2430 T$(28)= U$:GOTO 2510
2440 T$(7)= U$:T$(27)= U$:GOTO 2460
2450 T$(12)= U$:T$(22)= U$:GOTO 2470
2460 T$(17)= U$
2470 T$(6)= U$:T$(8)= U$:T$(16)= U$:T$(18)= U$:T$(26)= U$
2480 T$(28)= U$:GOTO 2550
2490 T$(6)= U$:T$(8)= U$:T$(17)= U$:T$(26)= U$:T$(28)= U$
2500 GOTO 2550
2510 T$(11)= U$:T$(13)= U$:T$(21)= U$:T$(23)= U$:GOTO 2550
2520 T$(7)= U$:T$(17)= U$:T$(27)= U$:GOTO 2550
2530 T$(12)= U$:T$(22)= U$:GOTO 2550
2540 T$(17)= U$
2550 IF Q(X)> 1AND Q(X)< 11THEN T$= RIGHT$ (STR$ (Q(X)),1)
2560 IF Q(X)= 11THEN T$= "J"
2570 IF Q(X)= 12THEN T$= "Q"
2580 IF Q(X)= 13THEN T$= "K"
2590 IF Q(X)= 1THEN T$= "A"
2600 IF X> 13 AND X< 40 THEN T$= T$
2610 IF Q(X)< > 10GOTO 2640
2620 T$= LEFT$(U$,1):M$= RIGHT$ (STR$ (0),1):N$= RIGHT$ (STR$ (1),1)
2630 T$(0)= N$:T$(1)= M$:T$(33)= T$(0):T$(34)= T$(1):GOTO 2650
2640 T$(0)= T$:T$(34)= T$
2650 Z9= Y9+ 5:X1= X9:Y1= Y9:REM GOSUB 64000:GOSUB 3000
2660 NT= NT+ 1:IF Q(X)> 9THEN TE= TE+ 1
2670 COLOR CCC:FOR I= 0 TO 30 STEP 5:LOCATE Z9-I/5,X9+2:FOR J= 0 TO 4:PRINT T$(I+ J);:NEXT J
2680 NEXT I:COLOR 0,2:RETURN
2690 P= 3:X= M:X9= 8:Y9= 3:GOSUB 2290
2700 IF T(3)< 22 THEN 2730
2710 IF V(2)= 0THEN 2910
2720 GOTO 2910
2730 P= 1
2740 IF T(1)< 17THEN 3020
2750 IF T(1)> 17THEN 2770
2760 IF E(1)> 0THEN 3020
2770 IF T(1)> 21THEN 3030
2780 P= 3
2790 LOCATE 5,(X9+ 7):PRINT "TOTAL":LOCATE 7,(X9+ 7):PRINT T(1);
2800 IF T(P)> 21THEN 2840
2810 IF T(1)> 21THEN 2840
2820 IF T(1)> T(P)THEN 2910
2830 IF T(1)= T(P)THEN 2980
2840 W1= W1+ W(P):PRINT :LOCATE 9,2
2850 FOR J= 1 TO 50:PRINT " ";:NEXT :PRINT :LOCATE 9,12
2860 IF C1> 3THEN 3120
2870 IF C1> 2THEN 3130
2880 IF C1> 1THEN 3140
2890 IF C1> 0THEN 3150
2900 GOTO 3160
2910 W1= W1- W(P):PRINT :LOCATE 9,2
2920 FOR J= 1 TO 50:PRINT " ";:NEXT :PRINT :LOCATE 9,12
2930 IF C1> 3THEN 3170
2940 IF C1> 2THEN 3180
2950 IF C1> 1THEN 3190
2960 IF C1> 0THEN 3200
2970 GOTO 3210
2980 LOCATE 9,24:PRINT "WE PUSH"
2990 IF V(2)> 0THEN 3010
3000 GOSUB 3060:GOSUB 3610:GOTO 1100
3010 P= 3:V(2)= 0:GOTO 2800
3020 E(5)= E(5)+ 1:P= 1:GOSUB 3510:GOSUB 2090:GOTO 2730
3030 IF E(1)= 0THEN 3050
3040 E(1)= E(1)- 1:T(1)= T(1)- 10:GOTO 2730
3050 LOCATE 6,(X9+ 13):PRINT "*I BUST*":GOTO 2780
3060 LOCATE 9,25:RETURN
3070 IF W1< 0THEN 3100
3080 IF W1= 0THEN 3110
3090 PRINT "YOU'RE AHEAD $";W1;:RETURN
3100 PRINT "YOU'RE BEHIND $";- W1;:RETURN
3110 PRINT "YOU'RE EVEN           ";:RETURN 
3120 'PRINT "I MUST HAVE DEALT WRONG":GOTO 2990
3130 'PRINT "YOU'RE LUCKY AGAIN":GOTO 2990
3140 'PRINT "YOU MUST HAVE BEEN PEEKING":GOTO 2990
3150 'PRINT "I COULD LOSE MY JOB THIS WAY":GOTO 2990
3160 'PRINT "THE CARDS HAVE TURNED AGAINST ME":GOTO 2990
3165 PRINT "You win!":GOTO 2990
3170 'PRINT "*THE BOTTOM OF THE DECK STRIKES AGAIN*":GOTO 2990
3180 'PRINT "A VICTORY FOR US GOOD GUYS":GOTO 2990
3190 'PRINT "YOU CAN'T BEAT SKILL":GOTO 2990
3200 'PRINT "YOU CAN'T WIN THEM ALL":GOTO 2990
3210 'PRINT "THANKS!":GOTO 2990
3215 PRINT "I win!":GOTO 2990
3220 FOR M9= 1 TO 52:D(M9)= 0:NEXT :R= 0:RETURN
3230 LOCATE 9,12:PRINT "*YOU WIN WITH 5 CARDS*":PRINT :GOTO 1520
3240 REM DRAW INSTRUCTIONS
3250 COLOR 0,7
3260 FOR N=2 TO 18:LOCATE N,54:PRINT STRING$(26," "):NEXT
3270 LOCATE 2,58:PRINT "IBM PC BLACKJACK";
3280 LOCATE 3,60:PRINT"************"                                               
3290 LOCATE  4,55:PRINT"FOLLOW ALL BETS WITH"
3300 LOCATE 5,60:PRINT"RETURN KEY"
3310 LOCATE 7,55:PRINT"RESPONSES:"
3320 LOCATE 8,57:PRINT"<CR> = STAND":LOCATE 9,60:PRINT"H = HIT"
3330 LOCATE 10,60:PRINT"D = DOUBLE DOWN":LOCATE 11,60:PRINT"S = SPLIT PAIR"
3340 LOCATE 12,58:PRINT"INSURANCE:"
3350 LOCATE 13,60:PRINT"N = NO":LOCATE 14,60:PRINT"Y = YES"
3360 LOCATE 15,63:PRINT"RULES:"
3370 LOCATE 16,54:PRINT"HOUSE LIMIT IS $500.00"
3380 LOCATE 17,54:PRINT"BLACKJACK PAYS 1.5 TO 1"
3390 LOCATE 18,54:PRINT;"BET END TO QUIT";:COLOR 7,0
3400 ME$="HOUSE":FOR YP=1 TO YP+LEN(ME$):LOCATE YP+1,2:PRINT MID$(ME$,YP,1):NEXT
3410 ME$="PLAYER":FOR YP=1 TO YP+LEN(ME$):LOCATE YP+9,2:PRINT MID$(ME$,YP,1):NEXT
3420 RETURN
3430 REM DRAW FIELD
3440 LOCATE 1,1:PRINT"╒";STRING$(51,"═");"╤";STRING$(26,"═");"╕";
3450 LOCATE 2,1:FOR N=1 TO 22:PRINT"│"TAB(53);"│";TAB(80);"│";:NEXT
3460 LOCATE 24,1:PRINT"│";:LOCATE 24,53:PRINT"│";
3470 LOCATE 25,1:PRINT"╘";STRING$(51,"═");"╧";STRING$(26,"═");
3480 DEF SEG=&HB000:POKE 3998,190:POKE 3838,179:DEF SEG
3490 LOCATE 19,53:PRINT"╞══════════════════════════╡"
3500 LOCATE 1,1:RETURN
3510 ON P GOTO 3520,3530,3540
3520 X9= INT (2+ E(5)* 6- 6):Y9= 3:GOTO 3550
3530 X9= INT (2+ V(3)* 6- 6):Y9= 19:GOTO 3550
3540 X9= INT (2+ V(3)* 6- 6):Y9= 11
3550 RETURN 
3560 LOCATE (Y9+ 0),(X9+ 7):PRINT "TOTAL";
3570 LOCATE (Y9+ 3),(X9+ 7):PRINT T(P);:RETURN
3580 COLOR ,2:FOR N=1 TO 7:LOCATE N+1,3:PRINT STRING$(50," "):NEXT
3590 FOR N=0 TO 15:LOCATE N+9,3:PRINT STRING$(50," ");:NEXT
3600 RETURN
3610 FOR P1= 1 TO 1000:NEXT P1:RETURN
3620 REM   PLINK
3630 IF SND = 1 THEN PLAY "L64T200N46":REM PLINK
3635 RETURN
3640 REM   PLONK
3650 IF SND = 1 THEN PLAY "L64T200N70":REM PLONK
3655 RETURN
3660 REM   KEYSTROKE
3670 I$=INKEY$:IF I$=""THEN 3670 ELSE IF I$= CHR$(13) THEN I$= "0":RETURN
3680 RETURN
3690 REM   BACK OF CARD
3700 COLOR 1,7:CB$= "╬╬╬╬╬"
3710 GOSUB 3620
3720 X1= 10:Y1= 1:FOR NN= 7 TO 1 STEP - 1
3730 LOCATE Y1+NN,X1:PRINT CB$:NEXT :COLOR 0:RETURN
3800 REM   toggle sound on or off with F10
3810 IF SND = 1 THEN SND = 0 ELSE SND=1
3820 RETURN
65000 REM -*- program name -*-
65010 REM Version 1.00
65020 KEY(2) ON:ON KEY(2) GOSUB 65200
65025 KEY(2) ON:ON KEY(2) GOSUB 65200
65030 KEY OFF:SCREEN 0,1:COLOR 15,3,1:WIDTH 40:CLS:LOCATE 5,18:PRINT " IBM "
65040 LOCATE 7,12,0:PRINT "Personal Computer"
65050 COLOR 10,0:LOCATE 10,7,0:PRINT CHR$(213)+STRING$(25,205)+CHR$(184)
65060 LOCATE 11,7,0:PRINT CHR$(179)+"   -*-  BLACKJACK  -*-   "+CHR$(179)
65070 LOCATE 12,7,0:PRINT CHR$(179)+STRING$(25,32)+CHR$(179)
65080 LOCATE 13,7,0:PRINT CHR$(179)+"  PC Mods  by Pat Leabo  "+CHR$(179)
65085 LOCATE 14,7,0:PRINT CHR$(179)+"Color Mods by Bob Vollmer"+CHR$(179)
65090 LOCATE 15,7,0:PRINT CHR$(212)+STRING$(25,205)+CHR$(190)
65100 COLOR 15,0:LOCATE 19,5,0:PRINT "CCII BLACKJACK 03/03/78 -Jesson"
65110 COLOR 14,0:LOCATE 23,7,0:PRINT "Press space bar to continue";CHR$(7);
65120 COLOR 30:LOCATE 23,5,0:PRINT CHR$(15);:LOCATE 23,35,0:PRINT CHR$(15);
65130 COLOR 14
65140 POKE 106,0 'CLEAR KYBD BUFFER
65150 CMD$ = INKEY$
65160 IF CMD$="" THEN GOTO 65150
65170 IF CMD$ = CHR$(27) THEN GOTO 65200
65180 IF CMD$ = " " THEN GOTO 1
65190 GOTO 65140
65200 ON ERROR GOTO 65240:RUN"BASMENU
65210 IF E<>71 THEN RUN"control
65220 RUN"A:TRANSFER
65230 SYSTEM
65240 E=ERR:RESUME NEXT
```

## CHSONG.BAS

```bas
10 V$="B:CHSONG.bas 11/29/82    Shirley"
20 ON ERROR GOTO 40
30 GOTO 60
40 PRINT "ERR ERL =";ERR;ERL
50 END
60 '----------------------------------------------------
70 GOSUB 890  : GOSUB 160  ' SILENT
80 GOSUB 680  : GOSUB 160  ' NOEL
90  GOSUB 450  : GOSUB 160 ' SILVER
100 GOSUB 790  : GOSUB 160  ' JOY
110 GOSUB 570  : GOSUB 160  ' DECK
120 GOSUB 270  : GOSUB 160 ' JINGLE
130 GOSUB 370              ' MERRY
140 END
150 '----------------------------------------------------
160 FOR IWAIT=1 TO 3500 : WWWW=1 : NEXT IWAIT
170 RETURN
180 '----------------------------------------------------
190 CLS
200 FOR I= 1 TO 15 : LOCATE I,(40-I) : PRINT STRING$(2*I,CHR$(15)) : NEXT I
210 LOCATE 10,40 : PRINT STRING$(3,CHR$(1))
220 FOR I= 1 TO 4 : LOCATE 15+I,36 : PRINT STRING$(8,CHR$(15)) : NEXT I
230 PRINT S$
240 PRINT " BY SHIRLEY GASICH"
250 RETURN
260 '----------------------------------------------------
270 S$="WE WISH YOU A MERRY CHRISTMAS" : GOSUB 190
280 PLAY "MB T200 "
290 PLAY "O3 L4 CF L8 FGFE L4 DDDG L8 GAGF"
300 PLAY "L4 ECCA L8 AB-AG L4 FD L8 CC L4 DGE"
310 PLAY "l2 F L4 CFFF L2 E L4 EFED L2 C L4 CAGF"
320 PLAY "O4 L4 C O3 L4 C L8 CC L4 DGE L2 F L4 CF"
330 PLAY "L8 FGFE L4 DDDG L8 GAGF L4 ECCA L8 AB-AG"
340 PLAY "L4 FD L8 CC L4 DGE L2 F"
350 RETURN
360 '----------------------------------------------------
370 S$="JINGLE BELLS" : GOSUB 190
380 PLAY "MB T210 "
390 PLAY "O3 L4 EEE P4 EEE P4 EGCD L1 E"
400 PLAY "L4 FFFFFEE L8 EE L4 EDDE L2 D L4 G P4"
410 PLAY "O3 L4 EEE P4 EEE P4 EGCD L1 E"
420 PLAY "L4 FFFFFEE L8 EE L4 GGFD L4 C L1"
430 RETURN
440 '----------------------------------------------------
450 S$="SILVER BELLS" : GOSUB 190
460 PLAY "MB T150 "
470 PLAY "O3 L8 B-G L4 FD L8 B-G L4 FD O4 L8 DC"
480 PLAY "O3 L4 B-GG L2 G O4 L8 C O3 L8 B- L4 AFEE-F."
490 PLAY "L8 E- L4 E- L2 D L8 B-G L4 FD L8 B-G"
500 PLAY "L4 FD O4 L8 DC O3 L4 B-GG L2 G O4 L8 C"
510 PLAY "O3 L8 B- L4 AFEE-F O4 L4 C O3 L2 B-. L8 DE-"
520 PLAY "O3 L2 F L8 GA L2 B- L4 AAB- O4 L4 C O3 L4 B-AB-"
530 PLAY "L2 F L8 DE- L2 F L8 GA L2 B- "
540 PLAY "L4 AAB- O4 L4 C O3 L4 B-A L2 B-."
550 RETURN
560 '----------------------------------------------------
570 S$="DECK THE HALLS" : GOSUB 190
580 PLAY "MB T250"
590 PLAY "O3 L2 D. L4 C O2 L2 BAGABG L4 AB O3 L4 C"
600 PLAY "O2 L4 A L2 B. P4 L4 A L2 GF+G. P4 O3 D."
610 PLAY "L4 C O2 L2 BAGABG L4 AB O3 L4 C O2 L4 A "
620 PLAY "L2 B. P4 L4 A L2 GF+G. P4 A. L4 B O3 L2 C"
630 PLAY "O2 AB. O3 L4 C L2 D O2 A L4 B O3 C L2 D L4 EF+"
640 PLAY "L2 GF+ED. P4 D. L4 C O2 L2 BAGABG L4 AB O3 C O2 A"
650 PLAY "L2 B. P4 L4 A L2 GF+ L1 G"
660 RETURN
670 '----------------------------------------------------
680 S$="NOEL" : GOSUB 190
690 PLAY "MB T100"
700 PLAY "O3 L8 ED L4 C. L8 DEF L2 G L8 AB O4 L4 C"
710 PLAY "O3 BA L2 G L8 AB O4 L4 C O3 BAGAB O4 C"
720 PLAY "O3 GF L2 E L8 ED L4 C. L8 DEF L2 G L8 AB"
730 PLAY "O4 L4 C O3 BA L2 G L8 AB O4 L4 C O3 BAGAB"
740 PLAY "O4 C O3 GF L2 E L8 ED L4 C. L8 DEF L2 G O4 L8 C"
750 PLAY "O3 B L2 A L4 A L2 G. O4 L4 C O3 BAGAB O4 C O3 L4 GF"
760 PLAY "L2 E"
770 RETURN
780 '----------------------------------------------------
790 S$="JOY TO THE WORLD" : GOSUB 190
800 PLAY "MB T200"
810 PLAY "O4 L2 C O3 L4 B. L8 A L2 G. L4 F L2 EDC."
820 PLAY "L4 G L2 A. L4 A L2 B. L4 B O4 L1 C L4 C"
830 PLAY "L4 C O3 BAGG. L8 F L4 E O4 CC O3 BAGG. L8 F "
840 PLAY "L4 EEEEE L8 EF L2 G. L8 FE L4 DDD L8 DE L2 F."
850 PLAY "L8 ED L4 C O4 L2 C O3 L4 AG. L8 F L4 EF L2 ED"
860 PLAY "L1 C"
870 RETURN
880 '----------------------------------------------------
890 S$="SILENT NIGHT" : GOSUB 190
900 PLAY "MB T125"
910 PLAY "O3 L4 C. L8 D L4 C O2 L2 A. O3 L4 C. L8 D"
920 PLAY "L4 C O2 L2 A. O3 G L4 G L2 E.F L4 F L2 C."
930 PLAY "D L4 DF. L8 E L4 DC. L8 D L4 C O2 L2 A. O3 D L4 DF."
940 PLAY "L8 E L4 DC. L8 D L4 C O2 L2 A. O3 G L4 GB-. L8 G"
950 PLAY "L4 E L2 F.A. L4 FC O2 A O3 C. O2 L6 B- L4 G L2 F."
960 RETURN
```

## CONTROL.BAS

```bas
10 RUN"basmenu
```

## DRAW.BAS

```bas
0 'comment line 2000 to display instructions on the monochrome display.
10 KEY OFF
15 CLS:CURSX=0:CURSY=0:SAVEX=0:SAVEY=0:PENDOWN=0:ANGLE=0:F=0
17 DIM PICT(1),DIR(1)
18 DEF SEG
20 GOSUB 2000
30 LOCATE 1,20:COLOR 1,0
40 PRINT "COMMANDS FOR GRAPHICS ACTIONS":COLOR 7,0
60 COLOR 15,0:PRINT "F1";:COLOR 7,0:PRINT" - SAVE CURRENT POINT"
70 COLOR 15,0:PRINT "F2";:COLOR 7,0:PRINT" - DRAW LINE BETWEEN CURRENT POINT AND SAVED POINT"
80 COLOR 15,0:PRINT "F3";:COLOR 7,0:PRINT" - DRAW BOX BETWEEN SAVED POINT AND CURRENT POINT"
90 COLOR 15,0:PRINT "F4";:COLOR 7,0:PRINT" - DRAW CIRCLE USING CURRENT POINT AS CENTER AND SAVED POINT AS RADIUS"
100 COLOR 15,0:PRINT "F5";:COLOR 7,0:PRINT" - PEN DOWN MODE"
110 COLOR 15,0:PRINT "F6";:COLOR 7,0:PRINT" - PEN UP MODE"
120 COLOR 15,0:PRINT "F7";:COLOR 7,0:PRINT" - GET FROM SCREEN WITH CURRENT AND SAVED POINTS DEFINING AREA"
125 COLOR 15,0:PRINT "F8";:COLOR 7,0:PRINT" - PUT SAVED PICTURE ON SCREEN"
130 COLOR 15,0:PRINT "F9";:COLOR 7,0:PRINT" - SWITCH DRAWING COLOR"
140 COLOR 15,0:PRINT "F10";:COLOR 7,0:PRINT" - CLEAR SCREEN"
150 COLOR 15,0:PRINT CHR$(24);:COLOR 7,0:PRINT" - MOVE CROSS-HAIR UP"
160 COLOR 15,0:PRINT CHR$(27);:COLOR 7,0:PRINT" - MOVE CROSS-HAIR TO THE LEFT"
170 COLOR 15,0:PRINT CHR$(26);:COLOR 7,0:PRINT" - MOVE CROSS-HAIR TO THE RIGHT"
180 COLOR 15,0:PRINT CHR$(25);:COLOR 7,0:PRINT" - MOVE CROSS-HAIR DOWN"
185 COLOR 15,0:PRINT "PgUp";:COLOR 7,0:PRINT" - TAB UP"
186 COLOR 15,0:PRINT "PgDn";:COLOR 7,0:PRINT" - TAB DOWN"
187 COLOR 15,0:PRINT "▐"+CHR$(27);:COLOR 7,0:PRINT" - TAB LEFT"
188 COLOR 15,0:PRINT CHR$(26)+"▌";:COLOR 7,0:PRINT" - TAB RIGHT"
189 COLOR 15,0:PRINT "Home";:COLOR 7,0:PRINT" - MOVE CURSOR TO HOME POSITION"
191 COLOR 15,0:PRINT "E";:COLOR 7,0:PRINT" - ERASE SAVED POINT"
192 COLOR 15,0:PRINT "P";:COLOR 7,0:PRINT" - PAINT INSIDE OF OBJECT"
193 COLOR 15,0:PRINT "L";:COLOR 7,0:PRINT" - CHANGE PALETTE"
194 COLOR 15,0:PRINT "B";:COLOR 7,0:PRINT" - CHANGE BACKGROUND COLOR";
195 LOCATE 25,1:COLOR 15,0:PRINT "X";:COLOR 7,0:PRINT" - TERMINATE PROGRAM";
196 LOCATE 17,40:COLOR 15,0:PRINT "End";:COLOR 7,0:PRINT" - MOVE CURSOR TO END";
197 LOCATE 18,40:COLOR 15,0:PRINT "S";:COLOR 7,0:PRINT" - SAVE SCREEN TO FILE";
198 LOCATE 19,40:COLOR 15,0:PRINT "R";:COLOR 7,0:PRINT" - RESTORE FILE TO SCREEN";
199 LOCATE 20,40:COLOR 15,0:PRINT "1";:COLOR 7,0:PRINT" - DRAW CAR";
200 LOCATE 21,40:COLOR 15,0:PRINT "2";:COLOR 7,0:PRINT" - DRAW DONKEY";
201 LOCATE 22,40:COLOR 15,0:PRINT "I";:COLOR 7,0:PRINT" - INCREMENT FILE NUMBER";
202 LOCATE 23,40:COLOR 15,0:PRINT "/ AND SHIFT /";:COLOR 7,0:PRINT" - MOVE DIAGONAL TO RIGHT";
203 LOCATE 24,40:COLOR 15,0:PRINT "\ AND SHIFT \";:COLOR 7,0:PRINT" - MOVE DIAGONAL TO LEFT";
204 LOCATE 25,40:COLOR 15,0:PRINT "T";:COLOR 7,0:PRINT" - CHANGE ROTATION FOR NUMERIC PICTURES";
205 LOCATE 16,40:COLOR 15,0:PRINT "M";:COLOR 7,0:PRINT" - MOVE CURSOR TO SAVED POINT";
206 WHILE INKEY$="":WEND
208 FOR I=1 TO 14:KEY(I) ON:NEXT I
210 ON KEY(1) GOSUB 3000
220 ON KEY(2) GOSUB 4000
230 ON KEY(3) GOSUB 5000
240 ON KEY(4) GOSUB 6000
250 ON KEY(5) GOSUB 7000
260 ON KEY(6) GOSUB 8000
270 ON KEY(7) GOSUB 9000
280 ON KEY(8) GOSUB 10000
290 ON KEY(9) GOSUB 11000
300 ON KEY(10) GOSUB 12000
310 ON KEY(11) GOSUB 13000
320 ON KEY(12) GOSUB 14000
330 ON KEY(13) GOSUB 15000
340 ON KEY(14) GOSUB 16000
350 GOSUB 1000
355 GOSUB 18000
360 IF INKEY$<>"" THEN POKE 106,0:GOTO 360
370 SW=1
380 WHILE SW=1
390 IN$=INKEY$
395 IF IN$="" THEN GOTO 430
400 IF IN$="x" OR IN$="X" THEN GOSUB 17000:GOTO 430
401 IF IN$="p" OR IN$="P" THEN GOSUB 20000:GOTO 430
402 IF IN$=CHR$(9) THEN GOSUB 21000:GOTO 430
403 IF LEN(IN$)=2 AND RIGHT$(IN$,1)=CHR$(15) THEN GOSUB 22000:GOTO 430
404 IF LEN(IN$)=2 AND RIGHT$(IN$,1)=CHR$(73) THEN GOSUB 23000:GOTO 430
405 IF LEN(IN$)=2 AND RIGHT$(IN$,1)=CHR$(81) THEN GOSUB 24000:GOTO 430
406 IF IN$="l" OR IN$="L" THEN GOSUB 25000:GOTO 430
407 IF IN$="b" OR IN$="B" THEN GOSUB 26000:GOTO 430
408 IF IN$="E" OR IN$="e" THEN GOSUB 27000:GOTO 430
409 IF LEN(IN$)=2 AND RIGHT$(IN$,1)=CHR$(71) THEN GOSUB 28000:GOTO 430
410 IF LEN(IN$)=2 AND RIGHT$(IN$,1)=CHR$(79) THEN GOSUB 29000:GOTO 430
411 IF IN$="s" OR IN$="S" THEN GOSUB 30000:GOTO 430
412 IF IN$="r" OR IN$="R" THEN GOSUB 31000:GOTO 430
413 IF IN$="1" THEN GOSUB 32000:GOTO 430
414 IF IN$="2" THEN GOSUB 33000:GOTO 430
415 IF IN$="T"OR IN$="t" THEN GOSUB 34000:GOTO 430
416 IF IN$="I"OR IN$="i" THEN GOSUB 35000:GOTO 430
417 IF IN$="/" THEN DIR(0)=2:DIR(1)=2:GOSUB 36000:GOTO 430
418 IF IN$="?" THEN DIR(0)=2:DIR(1)=-2:GOSUB 36000:GOTO 430
419 IF IN$="\" THEN DIR(0)=-2:DIR(1)=2:GOSUB 36000:GOTO 430
420 IF IN$="|" THEN DIR(0)=-2:DIR(1)=-2:GOSUB 36000:GOTO 430
421 IF IN$="m" OR IN$="M" THEN GOSUB 37000:GOTO 430
428 IF IN$<>""THEN BEEP
430 WEND
440 GOSUB 2000
450 FOR I=1 TO 14:KEY(I) OFF:NEXT I
460 GOTO 65200
1000 REM switch to color/graphics adapter
1010 DEF SEG=0
1020 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
1030 DEF SEG
1040 LOCATE ,,1,6,7
1050 SCREEN 1,0
1060 RETURN
2000 GOTO 2050'REM SWITCH TO MONOCHROME ADAPTER
2010 DEF SEG=0
2020 POKE &H410,(PEEK(&H410) OR &H30)
2030 DEF SEG
2040 LOCATE ,,1,12,13
2050 SCREEN 0
2060 WIDTH 80
2070 RETURN
3000 REM SUBROUTINE FOR F1 - SAVE POINT
3010 SAVEX=CURSX
3020 SAVEY=CURSY
3022 PUT (CURSX-5,CURSY-5),XHR
3025 PSET (SAVEX,SAVEY),DCOLOR
3027 PUT (CURSX-5,CURSY-5),XHR
3030 GOSUB 19000
3040 RETURN
4000 REM SUBROUTINE FOR F2 - DRAW LINE
4005 PUT (CURSX-5,CURSY-5),XHR
4010 LINE (SAVEX,SAVEY)-(CURSX,CURSY),DCOLOR
4015 PUT (CURSX-5,CURSY-5),XHR
4020 RETURN
5000 REM SUBROUTINE FOR F3 - DRAW BOX
5005 PUT (CURSX-5,CURSY-5),XHR
5010 LINE (SAVEX,SAVEY)-(CURSX,CURSY),DCOLOR,B
5015 PUT (CURSX-5,CURSY-5),XHR
5020 RETURN
6000 REM SUBROUTINE FOR F4 - CIRCLE
6002 CX#=CURSX:CY#=CURSY:SX#=SAVEX:SY#=SAVEY
6010 DX2#=ABS(CX#-SX#)^2
6020 DY2#=ABS(CY#-SY#)^2
6030 DIST#=SQR(DX2#+DY2#)
6035 PUT (CURSX-5,CURSY-5),XHR
6040 CIRCLE (CURSX,CURSY),DIST#,DCOLOR
6045 PUT (CURSX-5,CURSY-5),XHR
6050 RETURN
7000 REM SUBROUTINE FOR F5 - PENDOWN
7005 PENDOWN=1
7006 PUT (CURSX-5,CURSY-5),XHR
7007 LINE (0,0)-(MINX,MINY),2,BF
7008 PUT (CURSX-5,CURSY-5),XHR
7010 RETURN
8000 REM SUBROUTINE FOR F6 - PEN UP
8005 PENDOWN=0
8006 PUT (CURSX-5,CURSY-5),XHR
8007 LINE (0,0)-(MINX,MINY),0,BF
8008 PUT (CURSX-5,CURSY-5),XHR
8010 RETURN
9000 REM SUBROUTINE FOR F7 - GET FROM SCREEN
9010 PUT (CURSX-5,CURSY-5),XHR
9020 DX=ABS(SAVEX-CURSX)
9030 DY=ABS(SAVEY-CURSY)
9040 DM=4+INT((DX*2+7)/8)*DY
9050 DM=45+INT(DM/4)
9060 ERASE PICT
9070 DIM PICT(DM)
9075 PRESET (SAVEX,SAVEY)
9080 GET (SAVEX,SAVEY)-(CURSX,CURSY),PICT
9090 PUT (CURSX-5,CURSY-5),XHR
9095 PSET (SAVEX,SAVEY),DCOLOR
9100 RETURN
10000 REM SUBROUTINE FOR F8 - PUT
10005 ON ERROR GOTO 10050
10010 PUT (CURSX-5,CURSY-5),XHR
10020 PUT (CURSX,CURSY),PICT
10030 PUT (CURSX-5,CURSY-5),XHR
10040 RETURN
10050 BEEP
10060 RESUME NEXT
11000 REM SUBROUTINE FOR F9 - SWITCH DRAWING COLORS
11010 DCOLOR=DCOLOR+1
11012 IF DCOLOR = 4 THEN DCOLOR=0
11014 LINE (MAXX,0)-(319,MINY),DCOLOR,BF
11020 RETURN
12000 REM SUBROUTINE FOR F10 - CLEAR SCREEN
12010 CLS
12020 GOSUB 19000
12025 LINE (MAXX,0)-(319,MINY),DCOLOR,BF
12027 IF PENDOWN=1 THEN LINE (0,0)-(MINX,MINY),2,BF
12030 PUT (CURSX-5,CURSY-5),XHR
12040 RETURN
13000 REM SUBROUTINE FOR CURSOR UP
13005 KEY(7) STOP
13010 PUT (CURSX-5,CURSY-5),XHR
13020 CURSY=CURSY-1
13030 IF CURSY<MINY THEN CURSY=MAXY
13035 IF PENDOWN=1 THEN PSET(CURSX,CURSY),DCOLOR
13040 PUT (CURSX-5,CURSY-5),XHR
13045 GOSUB 19040
13047 KEY(7) ON
13500 RETURN
14000 REM SUBROUTINE FOR CURSOR LEFT
14010 PUT (CURSX-5,CURSY-5),XHR
14020 CURSX=CURSX-1
14030 IF CURSX<MINX THEN CURSX=MAXX
14035 IF PENDOWN=1 THEN PSET(CURSX,CURSY),DCOLOR
14040 PUT (CURSX-5,CURSY-5),XHR
14045 GOSUB 19040
14050 RETURN
15000 REM SUBROUTINE FOR CURSOR RIGHT
15010 PUT (CURSX-5,CURSY-5),XHR
15020 CURSX=CURSX+1
15030 IF CURSX>MAXX THEN CURSX=MINX
15035 IF PENDOWN=1 THEN PSET(CURSX,CURSY),DCOLOR
15040 PUT (CURSX-5,CURSY-5),XHR
15045 GOSUB 19040
15050 RETURN
16000 REM SUBROUTINE FOR CURSOR DOWN
16010 PUT (CURSX-5,CURSY-5),XHR
16020 CURSY=CURSY+1
16030 IF CURSY>MAXY THEN CURSY=MINY
16035 IF PENDOWN=1 THEN PSET(CURSX,CURSY),DCOLOR
16040 PUT (CURSX-5,CURSY-5),XHR
16045 GOSUB 19040
16050 RETURN
17000 REM SUBROUTINE TO END PROGRAM
17010 SW=0
17015 ON ERROR GOTO 0
17020 RETURN
18000 REM SUBROUTINE TO INITIALIZE GRAPHICS FUNCTIONS
18010 BACKGCOLOR=8:PALETTE=0
18020 COLOR BACKGCOLOR,PALETTE
18040 DCOLOR=2
18050 LINE (5,0)-(5,10),1
18060 LINE (0,5)-(10,5),1
18070 DIM XHR(12)
18080 GET (0,0)-(10,10),XHR
18090 MINX=5:MAXX=314:MINY=5:MAXY=185
18100 CURSX=INT((MAXX-MINX)/2)
18110 CURSY=INT((MAXY-MINY)/2)
18120 CLS
18130 PUT (CURSX-5,CURSY-5),XHR
18135 LINE (MAXX,0)-(319,MINY),DCOLOR,BF
18140 GOSUB 19000
18150 RETURN
19000 REM SUBROUTINE TO PUT CURRENT AND SAVED CURSOR VALUES ON SCREEN
19030 LOCATE 25,18:PRINT "SAVED ";:PRINT USING "###_,###";SAVEX,SAVEY;
19035 LOCATE 25,32:PRINT USING "& ##";"FILE#",F;
19040 LOCATE 25,1:PRINT "CURRENT ";:LOCATE 25,9:PRINT USING "###_,###";CURSX,CURSY;
19050 RETURN
20000 REM SUBROUTINE TO DO PAINTING
20010 PUT (CURSX-5,CURSY-5),XHR
20020 PAINT (CURSX,CURSY),DCOLOR
20030 PUT (CURSX-5,CURSY-5),XHR
20040 RETURN
21000 REM SUBROUTINE FOR TAB RIGHT
21005 IF PENDOWN=1 THEN SX=CURSX:SY=CURSY
21010 PUT (CURSX-5,CURSY-5),XHR
21020 CURSX=CURSX+10
21030 IF CURSX>MAXX THEN CURSX=MINX
21035 IF PENDOWN=1 THEN LINE(SX,SY)-(CURSX,CURSY),DCOLOR
21040 PUT (CURSX-5,CURSY-5),XHR
21045 GOSUB 19040
21050 RETURN
22000 REM SUBROUTINE FOR TAB LEFT
22005 IF PENDOWN=1 THEN SX=CURSX:SY=CURSY
22010 PUT (CURSX-5,CURSY-5),XHR
22020 CURSX=CURSX-10
22030 IF CURSX<MINX THEN CURSX=MAXX
22035 IF PENDOWN=1 THEN LINE(SX,SY)-(CURSX,CURSY),DCOLOR
22040 PUT (CURSX-5,CURSY-5),XHR
22045 GOSUB 19040
22050 RETURN
23000 REM SUBROUTINE FOR TAB UP
23005 IF PENDOWN=1 THEN SX=CURSX:SY=CURSY
23010 PUT (CURSX-5,CURSY-5),XHR
23020 CURSY=CURSY-10
23030 IF CURSY<MINY THEN CURSY=MAXY
23035 IF PENDOWN=1 THEN LINE(SX,SY)-(CURSX,CURSY),DCOLOR
23040 PUT (CURSX-5,CURSY-5),XHR
23045 GOSUB 19040
23050 RETURN
24000 REM SUBROUTINE FOR TAB DOWN
24005 IF PENDOWN=1 THEN SX=CURSX:SY=CURSY
24010 PUT (CURSX-5,CURSY-5),XHR
24020 CURSY=CURSY+10
24030 IF CURSY>MAXY THEN CURSY=MINY
24035 IF PENDOWN=1 THEN LINE(SX,SY)-(CURSX,CURSY),DCOLOR
24040 PUT (CURSX-5,CURSY-5),XHR
24045 GOSUB 19040
24050 RETURN
25000 REM SUBROUTINE TO CHANGE PALETTE
25010 IF PALETTE=0 THEN PALETTE=1 ELSE PALETTE=0
25020 COLOR BACKGCOLOR,PALETTE
25030 RETURN
26000 REM SUBROUTINE TO CHANGE BACKGROUND COLOR
26010 BACKGCOLOR=BACKGCOLOR+1
26020 IF BACKGCOLOR=16 THEN BACKGCOLOR=0
26030 COLOR BACKGCOLOR,PALETTE
26040 RETURN
27000 REM SUBROUTINE TO ERASE SAVED POINT
27010 PRESET (SAVEX,SAVEY)
27020 RETURN
28000 REM SUBROUTINE TO MOVE CURSOR TO "HOME"
28005 PUT (CURSX-5,CURSY-5),XHR
28010 CURSX=MINX
28020 CURSY=MINY
28030 PUT (CURSX-5,CURSY-5),XHR
28040 GOSUB 19040
28050 RETURN
29000 REM SUBROUTINE TO MOVE CURSOR TO "END"
29005 PUT (CURSX-5,CURSY-5),XHR
29010 CURSX=MAXX
29020 CURSY=MAXY
29030 PUT (CURSX-5,CURSY-5),XHR
29040 GOSUB 19040
29050 RETURN
30000 REM SUBROUTINE TO SAVE SCREEN IN FILE
30005 PUT (CURSX-5,CURSY-5),XHR
30010 DEF SEG=&HB800
30020 BSAVE "FPICT"+CHR$(48+F)+".DAT",0,&H4000
30030 DEF SEG
30035 PUT (CURSX-5,CURSY-5),XHR
30040 RETURN
31000 REM SUBROUTINE TO RESTORE SCREEN FROM FILE
31010 DEF SEG=&HB800
31015 CLS
31020 BLOAD "FPICT"+CHR$(48+F)+".DAT",0
31025 PUT (CURSX-5,CURSY-5),XHR
31027 LINE (MAXX,0)-(319,MINY),DCOLOR,BF
31028 IF PENDOWN=1 THEN LINE (0,0)-(MINX,MINY),2,BF ELSE LINE (0,0)-(MINX,MINY),0,BF
31030 GOSUB 19000
31040 RETURN
32000 REM SUBROUTINE TO DRAW PICTURE 1 - CAR
32005 PUT (CURSX-5,CURSY-5),XHR
32010 PRESET (CURSX,CURSY)
32020 DRAW "a=ANGLE;S10C=DCOLOR;"
32030 DRAW"r3m+1,3d2R1ND2u1r2d4l2u1l1"
32040 DRAW"d7R1nd2u2r3d6l3u2l1d3m-1,1l3"
32050 DRAW"m-1,-1u3l1d2l3u6r3d2nd2r1u7l1d1l2"
32060 DRAW"u4r2d1nd2R1U2"
32070 DRAW"M+1,-3"
32080 DRAW"BD10D2R3U2M-1,-1L1M-1,1"
32090 DRAW"BD3D1R1U1L1BR2R1D1L1U1
32100 DRAW"BD2BL2D1R1U1L1BR2R1D1L1U1
32110 DRAW"BD2BL2D1R1U1L1BR2R1D1L1U1
32120 PUT (CURSX-5,CURSY-5),XHR
32130 RETURN
33000 REM SUBROUTINE TO DRAW PICTURE 2 - DONKEY
33015 PUT (CURSX-5,CURSY-5),XHR
33017 DRAW "BM=CURSX;,=CURSY;"
33030 DRAW"A=ANGLE;S15C=DCOLOR;"
33040 DRAW"M+2,-4R8M+1,-1U1M+1,+1M+2,-1
33050 DRAW"M-1,1M+1,3M-1,1M-1,-2M-1,2"
33060 DRAW"D3L1U3M-1,1D2L1U2L3D2L1U2M-1,-1"
33070 DRAW"D3L1U5M-2,3U1"
33080 PUT (CURSX-5,CURSY-5),XHR
33090 RETURN
34000 REM SUBROUTINE TO CHANGE ROTATION ON NUMERIC PICTURES
34010 ANGLE=ANGLE+1
34020 IF ANGLE=4 THEN ANGLE=0
34030 RETURN
35000 REM SUBROUTINE TO INCREMENT FILE NUMBER
35010 F=F+1
35020 IF F=5 THEN F=0
35030 GOSUB 19035
35040 RETURN
36000 REM SUBROUTINE TO MOVE DIAGONALLY
36010 PUT (CURSX-5,CURSY-5),XHR
36020 IF PENDOWN=1 THEN SX=CURSX:SY=CURSY
36030 CURSX=CURSX+DIR(0)
36040 IF DIR(0)<0 THEN IF CURSX < MINX THEN CURSX=MAXX
36050 IF DIR(0)>0 THEN IF CURSX > MAXX THEN CURSX=MINX
36060 CURSY=CURSY+DIR(1)
36070 IF DIR(1)<0 THEN IF CURSY < MINY THEN CURSY=MAXY
36080 IF DIR(1)>0 THEN IF CURSY > MAXY THEN CURSY=MINY
36090 IF PENDOWN=1 THEN LINE (SX,SY)-(CURSX,CURSY),DCOLOR
36100 PUT (CURSX-5,CURSY-5),XHR
36110 GOSUB 19040
36120 RETURN
37000 REM SUBROUTINE TO MOVE CURSOR TO SAVED POINT
37010 PUT (CURSX-5,CURSY-5),XHR
37020 CURSX=SAVEX
37030 CURSY=SAVEY
37040 PUT (CURSX-5,CURSY-5),XHR
37050 GOSUB 19040
37060 RETURN
65200 RUN"basmenu
```

## HANGMAN.BAS

```bas
0 'THIS PROGRAM USES THE COLOR GRAPHICS ADAPTOR.                                    ACTIVATE LINE 410 IF YOU WANT TO USE THE                                        MONOCHROME ADAPTOR AS WELL.
1 REM HANGMAN PROGRAM
2 REM WRITTEN BY BARRY SHIFFRIN  3/13/82
3 PLAY "mb"
10 DEF FNTM(X$)=VAL(RIGHT$(X$,2))+(60*VAL(MID$(X$,4,2)))+(120*VAL(LEFT$(X$,2)))
20 READ NUMW
30 DIM WA$(NUMW)
40 FOR I=0 TO NUMW-1:READ WA$(I):NEXT I
50 SEED=FNTM(TIME$)
60 RANDOMIZE SEED
70 PW$=WA$(RND*(NUMW-1))
80 GOSUB 340:KEY OFF
90 GOSUB 410:GOSUB 340:COLOR 8,0
100 CLS:DEF SEG=0:FAILS=0:R=0:G$=""
110 IF INKEY$<>"" THEN POKE 106,0:GOTO 110
120 G$=SPACE$(LEN(PW$))
130 LOCATE 3,15:FOR I=1 TO LEN(PW$):PRINT USING "& ";"_";:NEXT I
140 ALU$="ABCDEFGHIJKLMNOPQRSTUVWXYZ":ALL$="abcdefghijklmnopqrstuvwxyz"
150 LOCATE 22,1:FOR I=1 TO 13:PRINT USING"&  ";MID$(ALU$,I,1);:NEXT I
160 LOCATE 24,1:FOR I=14 TO 26:PRINT USING"&  ";MID$(ALU$,I,1);:NEXT I
170 A$=INKEY$:IF A$="" THEN GOTO 170
175 IF ASC(A$)>=97 THEN A$=CHR$(ASC(A$)-32)
180 FLAG=0
190 FOR I=1 TO LEN(PW$)
200 IF A$=MID$(PW$,I,1) THEN LOCATE 3,13+2*I:PRINT USING "&";A$;:FLAG=1:MID$(G$,I,1)=A$
210 NEXT I
220 IF G$=PW$ THEN LOCATE 10,1:PRINT "YOU WIN";:GOSUB 1000:GOSUB 410:GOTO 290
230 PS=INSTR(ALU$+ALL$,A$)
240 IF PS>26 THEN PS=PS-26
250 IF PS<>0 AND PS<=13 THEN LOCATE 22,1+(PS-1)*3:PRINT USING"&";" ";
260 IF PS<>0 AND PS>13 THEN LOCATE 24,1+(PS-14)*3:PRINT USING"&";" ";
270 IF FLAG=0 THEN FAILS=FAILS+1:ON FAILS GOSUB 490,530,560,590,620,660,700,730,760,790,820,850
280 IF FAILS=12 THEN LOCATE 10,1:GOSUB 2000:PRINT "SORRY - YOU LOSE";:LOCATE 11,1:PRINT "THE WORD WAS";:LOCATE 12,1:PRINT PW$;:GOSUB 410:GOTO 290 ELSE GOTO 170
290 IF INKEY$<>"" THEN POKE 106,0:GOTO 290
300 PRINT "PRESS THE X KEY TO END THE GAME"
310 PRINT "ANY OTHER KEY WILL CONTINUE WITH ANOTHER GAME"
320 ANS$=INKEY$:IF ANS$="" THEN GOTO 320
330 IF ANS$="X" OR ANS$="x" THEN GOTO 65140: ELSE GOTO 70
340 REM switch to color/graphics adapter
350 DEF SEG=0
360 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
370 DEF SEG
380 LOCATE ,,1,6,7
381 SCREEN 1,0:COLOR 8,0
390 SCREEN 1,0
400 RETURN
410 RETURN'REM SWITCH TO MONOCHROME ADAPTER
420 DEF SEG=0
430 POKE &H410,(PEEK(&H410) OR &H30)
440 DEF SEG
450 LOCATE ,,1,12,13
460 SCREEN 0
470 WIDTH 80
480 RETURN
490 REM SUBROUTINE TO DRAW GALLOWS
500 DRAW "C2BM100,150U10R100D10"
510 DRAW "BU10BL90U100R46D10"
520 RETURN
530 REM SUBROUTINE TO DRAW HEAD
540 CIRCLE (156,59),9,2
550 RETURN
560 REM SUBROUTINE TO DRAW NECK
570 DRAW "C2BM156,67D6"
580 RETURN
590 REM SUBROUTINE TO DRAW BODY
600 DRAW "C2BM148,74R16D20L16U20"
610 RETURN
620 REM SUBROUTINE TO DRAW ARM ON LEFT
630 DRAW "C2BM148,74G14"
640 CIRCLE (132,90),2,2
650 RETURN
660 REM SUBROUTINE TO DRAW ARM ON RIGHT
670 DRAW "C2BM164,74F14"
680 CIRCLE (178,90),2,2
690 RETURN
700 REM SUBROUTINE TO DRAW LEG ON LEFT
710 DRAW "C2BM150,95D20L6U2R6"
720 RETURN
730 REM SUBROUTINE TO DRAW LEG ON RIGHT
740 DRAW "C2BM162,95D20R6U2L6"
750 RETURN
760 REM SUBROUTINE TO DRAW EYE ON LEFT
770 PSET (154,57),2
780 RETURN
790 REM SUBROUTINE TO DRAW EYE ON RIGHT
800 PSET (158,57),2
810 RETURN
820 REM SUBROUTINE TO DRAW NOSE
830 PSET (156,60),2
840 RETURN
850 REM SUBROUTINE TO DRAW MOUTH
860 DRAW "BM153,63R6"
870 RETURN
1000 REM subroutine to play winning music
1010 PLAY "t230o3ao4cege6g"
1020 RETURN
2000 REM subroutine to play losing music
2010 PLAY "t170o1g.g.g8g.a#.a8a.g8g.g-8g"
2020 RETURN
5000 DATA 93                     :REM THIS IS THE NUMBER OF WORDS FOLLOWING
5010 DATA CAT,DOG,MAN,HOUSE,CAR  :REM YOU MAY HAVE AS MANY WORDS AS YOU WISH
5020 DATA HOUSE,MOUSE,PIG,ANDREA,ERICA,BARRY,RONDA       :REM BE SURE TO USE
5030 DATA IBM,HILLEL,HELLO,GOOD,FRIEND,ELEPHANT,COW      :REM ALL CAPITALS FOR
5040 DATA PENCIL,PEN,CRAYON,MARKER                       :REM THESE WORDS HERE
5050 DATA CLOCK,FAN,CAKE,PIE,MARCH,APRIL,MONDAY,TUESDAY  :REM THE PROGRAM WILL
5060 DATA WEDNESDAY,STOP,THURSDAY,FRIDAY,OUT,SATURDAY,OFF :REM ACCEPT LOWER CASE
5070 DATA JANUARY,FEBRUARY,MAY,JUNE,JULY,AUGUST,HELP,SEPTEMBER   :REM OR UPPER
5080 DATA OCTOBER,DOOR,DECEMBER,PHONE,COMPUTER,TEMPLE,SCHOOL     :REM FOR YOUR
5090 DATA BOOK,CARD,LIBRARY,SISTER,MOTHER,FATHER,BROTHER         :REM GUESSES
5100 DATA GAME,RED,BLUE,GREEN,YELLOW
5110 DATA LISTEN,PLAY,LOOK,LEARN,TOOK,BOOK,BIKE,AARDVARK
5120 DATA BECAUSE,CAUSE,GIRAFFE,MONKEY,LION,TIGER,LEOPARD
5130 DATA DATE,TODAY,STREET,ACORN,DRIVE,WORCESTER,NEWHAVEN
5140 DATA NEWYORK,MASSACHUSETTS,KNOB,COOKY,SQUARE,TRIANGLE
65140 RUN"BASMENU
```

## OTHELLO.BAS

```bas
0 GOTO 65000
1 '
1000 REM  OTHELLO -- PET VERSION -- MODIFIED BY PATRICK   LEABO
1010 REM                                        TUCSON, ARIZONA
1020 REM                                             3-82
1025 REM NOT DONE YET BUT HAVE FUN -- PLEASE ADD A GOOD ALGORITHM TO IT
1026 REM 09/13/82 Added color and 40 char layout mods. Bob Vollmer, San Jose
1030 SCREEN 0,0:COLOR 7,1:WIDTH 80:KEY OFF
1040 E$=STRING$(38," ")
1050 D$= CHR$ (11)
1060 FOR I= 1 TO 21:D$= D$+ CHR$ (10):NEXT:D$=D$+" "
1070 XL= 3:XH= 6:YL= 3:YH= 6:C(1)=1:C(2)=4
1080 DIM A(9,9),I4(7),J4(7),D$(2),P$(2):Z0= 0
1090 CLS:LOCATE 1,20:PRINT "GREETINGS FROM OTHELLO"
1100 PRINT :PRINT "OTHELLO  IS PLAYED ON AN 8 X 8 BOARD, ROWS NUMBERED"
1110 PRINT "1 TO 8  AND COLUMNS A TO H.   THE INITIAL CONFIGURATION IS"
1120 PRINT "ALL BLANK EXCEPT FOR THE CENTER FOUR SQUARES, TRY TO PLACE"
1130 PRINT "YOUR PIECE SO THAT IT OUTFLANKS YOUR  OPPONENT, CREATING "
1140 PRINT "HORIZONTAL, VERTICAL, OR DIAGONAL RUN OF OPPOSING PIECES,"
1150 PRINT "TURNING THEM INTO YOURS."
1160 PRINT
1170 PRINT:PRINT
1180 PRINT "EXAMPLE: RED OUTFLANKS BLUE, CAPTURING FOUR BLUE PIECES."
1190 PRINT "2MAKE YOUR MOVE BY ENTERING A NUMBER FOR THE ROW AND A LETTER"
1200 PRINT "FOR THE COLUMN.  "
1210 PRINT "NOTE: YOU MUST CAPTURE AT LEAST ONE OF MY PIECES IN THIS WAY "
1220 PRINT "IF IT IS POSSIBLE.  IF IT IS NOT POSSIBLE, YOU FORFEIT YOUR"
1230 PRINT "MOVE BY ENTERING 0 A FOR YOUR MOVE."
1240 PRINT :PRINT "HOW MANY PLAYERS (1 OR 2)? ";:GOSUB 3220:IF VAL (X$)= 0 OR VAL (X$)> 2 THEN 1240
1250 PRINT X$:NP= VAL (X$):PRINT 
1260 IF NP= 2 THEN PRINT "PLAYER #1 GOES FIRST WHEN THE PLAY STARTS"
1270 SOUND 3000,2:INPUT "ENTER PLAYER 1,S NAME! ";P$(1):P$(1)= P$(1)+" "
1280 SOUND 3000,2:IF NP= 2 THEN INPUT "ENTER PLAYER 2'S NAME! ";P$(2):P$(2)= P$(2)+" "
1290 IF NP= 2 THEN 1350
1300 PRINT :PRINT "SHOULD I PLAY MY BEST?";
1310 S2= 0:S4= 0:S5= 0:P$(2)= "PERCY"
1320 GOSUB 3220:IF X$= "N" THEN PRINT "NO":GOTO 1350
1330 PRINT "YES"
1340 S2= 2:S4= 1:S5= - 2
1350 B= - 1:W= 1:PT= 0
1360 D$(B+ 1)= "RED":N$(B+ 1)= "RED "
1370 D$(0+ 1)= "BLANK"
1380 D$(W+ 1)= "BLUE":N$(W+ 1)= "BLUE"
1390 FOR K= 0 TO 7
1400 READ I4(K),J4(K)
1410 NEXT
1420 FOR I= 0 TO 9:FOR J= 0 TO 9
1430 A(I,J)= 0
1440 NEXT J,I
1450 A(4,4)= B:A(5,5)= B
1460 A(4,5)= W:A(5,4)= W
1470 SC(1)= 2:SC(2)= 2:N1= 4:Z= 0
1480 C= W:H= B
1490 FOR NN= 1 TO 3000:NEXT :CLS
1500 GOSUB 3300
1510 IF NP= 2THEN 2020
1520 PRINT D$"DO YOU WANT TO GO FIRST ? ";:LOCATE ,,1,0,7
1530 PT= 1:GOSUB 3220:IF X$= "Y"THEN PRINT "YES":PT= 0:GOTO 2020
1540 PT= 1:PRINT "NO":PRINT D$E$D$"OK, I AM THINKING!"
1550 REM  COMPUTERS MOVE
1560 IF NP= 1 THEN LOCATE 23,2,0:COLOR FFF+16:PRINT "I'm Thinking";:COLOR FFF:GOTO 1600
1570 IF PT= 2THEN B1= - 1:I3= 0:J3= 0:T1= C:T2= H
1580 IF PT= 1THEN B1= - 1:I3= 0:J3= 0:T1= H:T2= C
1590 GOTO 2030
1600 PT= PT+ 1:IF PT> 2THEN PT= 1
1610 B1= - 1:I3= 0:J3= 0:T1= C:T2= H
1620 FOR I= YL TO YH:FOR J= XL TO XH
1630 IF A(I,J)< > 0 THEN 1790
1640 GOSUB 2740
1650 IF F1= Z0 THEN 1790
1660 U= - 1
1670 GOSUB 2780
1680 IF S1= Z0 THEN 1790
1690 IF (I= 1)OR (I= 8)THEN S1= S1+ S2
1700 IF (J= 1)OR (J= 8)THEN S1= S1+ S2
1710 IF (I= 2)OR (I= 7)THEN S1= S1+ S5
1720 IF (J= 2)OR (J= 7)THEN S1= S1+ S5
1730 IF (I= 3)OR (I= 6)THEN S1= S1+ S4
1740 IF (J= 3)OR (J= 6)THEN S1= S1+ S4
1750 IF S1< B1 THEN 1790
1760 IF S1> B1 THEN 1780
1770 IF RND (1)> 0.5THEN 1790
1780 B1= S1:I3= I:J3= J
1790 NEXT J,I
1795 LOCATE 23,2,0:PRINT "            "
1800 IF B1> 0THEN 1880
1810 IF S5= 0THEN 1840
1820 IF NP= 1THEN S5= 0:GOTO 1610
1830 S5= 0:GOTO 1550
1840 S5= 0:PRINT D$ E$ D$"I HAVE TO FORFEIT MY MOVE"
1850 IF Z= 1THEN 2430
1860 Z= 1
1870 GOTO 2020
1880 Z= 0
1890 PRINT D$E$D$"I WILL MOVE TO ";RIGHT$ (STR$ (I3),1)" "CHR$ (J3+ 64)
1900 GOSUB 3090REM ▬
1910 I= I3:J= J3:U= 1
1920 GOSUB 2780
1930 SC(PT)= SC(PT)+ S1+ 1
1940 OP= PT+ 1:IF OP= 3THEN OP= 1
1950 SC(OP)= SC(OP)- S1
1960 N1= N1+ 1
1970 PRINT D$E$D$"THAT GIVES ME ";
1980 PRINT S1;
1990 PRINT " OF YOUR PIECES"
2000 GOSUB 3390
2010 IF SC(OP)= 0OR N1= 64THEN 2430
2020 T1= H:T2= C
2030 PT= PT+ 1:IF PT> 2THEN PT= 1
2040 IF PT= 2THEN B1= - 1:I3= 0:J3= 0:T1= C:T2= H
2050 IF PT= 1THEN B1= - 1:I3= 0:J3= 0:T1= H:T2= C
2060 BEEP
2070 PRINT D$;E$D$;:GOSUB 5000:PRINT ", INPUT YOUR MOVE ! ";:LOCATE ,,1,0,7:GOSUB 3020
2080 IF (I< 0)OR (J< 0)OR (J> 8)OR (I> 8)THEN 2040
2090 IF I< > 0THEN 2160
2100 PRINT D$;E$D$;"ARE YOU FORFEITING YOUR TURN ? ";
2110 GOSUB 3220:IF X$< > "Y"THEN PRINT "NO":GOTO 2040
2120 PRINT "YES"
2130 IF Z= 1THEN 2430
2140 Z1= 1
2150 GOTO 1550
2160 IF A(I,J)= 0THEN 2190
2170 PRINT D$"SORRY,SQUARE OCCUPIED; TRY AGAIN"
2180 GOTO 2270
2190 GOSUB 2740
2200 IF F1= 1THEN 2230
2210 PRINT D$""E$D$"SORRY,NOT NEXT TO MY PIECES; TRY AGAIN"
2220 GOTO 2270
2230 U= - 1
2240 GOSUB 2780
2250 IF S1> 0THEN 2290
2260 PRINT D$""E$D$"SORRY,DOESN'T FLANK A ROW; TRY AGAIN"
2270 PRINT E$D$:BEEP:FOR N=1 TO 2000:NEXT
2280 GOTO 2040
2290 Z= 0:GOSUB 3150
2300 PRINT D$""E$D$""P$(PT)" THAT GIVES YOU ";
2310 PRINT S1;
2320 PRINT " PIECE";:IF S1> 1 THEN PRINT "S";
2330 PRINT :PRINT E$D$
2340 U= 1
2350 GOSUB 2780
2360 SC(PT)= SC(PT)+ S1+ 1
2370 OP= PT+ 1:IF OP= 3THEN OP= 1
2380 SC(OP)= SC(OP)- S1
2390 N1= N1+ 1
2400 GOSUB 3390
2410 IF SC(OP)= 0OR N1= 64THEN 2430
2420 GOTO 1550
2430 PRINT D$;E$:PRINT E$:PRINT E$
2440 PRINT D$;E$D$;P$(1)"  HAS "SC(1)" PIECES   ";
2450 PRINT P$(2)" HAS "SC(2)" PIECES"
2460 IF SC(1)= SC(2)THEN 2510
2470 IF NP= 2THEN 2540
2480 IF SC(1)> SC(2)THEN 2530
2490 PRINT "SORRY, I WON THAT ONE.";
2500 GOTO 2540
2510 PRINT "ITS A TIE !!";
2520 GOTO 2680
2530 PRINT "YOU WON!!!!!!";
2540 C1= SC(1)- SC(2)
2550 IF C1> 0THEN 2570
2560 C1= - C1
2570 C1= (64* C1)/ N1
2580 PRINT "THAT WAS A ";
2590 IF C1< 11THEN 2670
2600 IF C1< 25THEN 2660
2610 IF C1< 39THEN 2650
2620 IF C1< 53THEN 2640
2630 PRINT "PERFECT GAME":GOTO 2680
2640 PRINT "WALKAWAY":GOTO 2680
2650 PRINT "FIGHT":GOTO 2680
2660 PRINT "HOT GAME":GOTO 2680
2670 PRINT "SQUEAKER"
2680 PRINT 
2690 PRINT "DO YOU WANT TO PLAY ANOTHER GAME ? ";:BEEP
2700 GOSUB 3220:IF X$= "Y"THEN PRINT "YES";:RUN 1040
2710 PRINT "NO"
2720 PRINT "THANKS FOR PLAYING."
2730 RUN   "MENU.BAS"
2740 F1= Z0:FOR I1= - 1 TO 1:FOR J1= - 1 TO 1:IF A(I+ I1,J1+ J)= T2 THEN 2760
2750 NEXT J1,I1:RETURN 
2760 F1= 1:RETURN 
2770 REM  CHECK FOR COUNT & FLANKING PIECES
2780 S1= Z0:FOR K= 0TO 7
2790 S3= Z0:I5= I4(K):J5= J4(K):I6= I+ I5:J6= J+ J5
2800 IF A(I6,J6)< > T2 THEN 2910
2810 S3= S3+ 1:I6= I6+ I5:J6= J6+ J5
2820 IF A(I6,J6)= T1 THEN 2850
2830 IF A(I6,J6)= Z0 THEN 2910
2840 GOTO 2810
2850 S1= S1+ S3
2860 IF U< > 1THEN 2910
2870 I6= I:J6= J
2880 FOR K1= 0TO S3
2890 A(I6,J6)= T1:I6= I6+ I5:J6= J6+ J5
2900 NEXT K1
2910 NEXT K
2920 RETURN 
2930 REM  ¶SET SEARCH LIMITS FOR COMPUTER MOVE▬
2940 IF I= YL THEN YL= YL- 1:IF YL< 1 THEN YL= 1
2950 IF I= YH THEN YH= YH+ 1:IF YH> 8 THEN YH= 8
2960 IF J= XL THEN XL= XL- 1:IF XL< 1 THEN XL= 1
2970 IF J= XH THEN XH= XH+ 1:IF XH> 8 THEN XH= 8
2980 LOCATE 1,2
2990 RETURN 
3000 REM  INPUT SUBROUTINE5"
3010 PRINT D$E$"BAD MOVE; TRY AGAIN."
3020 I= - 1:J= - 1
3030 FOR K= 1TO 2
3040 GOSUB 3220
3050 G= ASC (X$)
3060 IF 47< G AND G< 58 THEN I= G- 48:PRINT ""X$"  ";
3070 IF 64< G AND G< 74 THEN J= G- 64:PRINT ""X$"  ";
3075 IF 96< G AND G<106 THEN J= G- 96:PRINT ""X$"  ";
3080 NEXT :PRINT :LOCATE ,,0:RETURN
3090 REM BLINK COMPUTERS MOVE5
3100 LOCATE 2* J3+ 3,4* I3+ 1,0:COLOR 20,7:PRINT CHR$(2):COLOR FFF,BBB
3110 I= I3:J= J3
3120 GOSUB 2940
3130 FOR NN= 1TO 1000:NEXT 
3140 RETURN 
3150 REM BLINK PLAYERS MOVE5
3160 IF PT= 2THEN CC= 0
3170 IF PT= 1THEN CC= 2
3180 LOCATE 2* J+ 3,4* I+ 1:COLOR C(PT)+16,7:PRINT CHR$(PT):COLOR FFF,BBB
3190 GOSUB 2940
3200 FOR NN= 1TO 500:NEXT 
3210 RETURN 
3220 REM INPUT STATEMENTS
3230 SOUND 3000,2
3240 X$=INKEY$:IF X$="" THEN 3240 ELSE IF X$=CHR$(27) THEN RUN "B:MENU" ELSE IF X$<"a" THEN RETURN:ELSE X$=CHR$(ASC(X$) AND &HDF):RETURN
3250 REM  PRINT SCORE
3260 LOCATE 5,36:COLOR 1,7:PRINT CHR$(1);:COLOR FFF,BBB:PRINT RIGHT$ ("  "+ STR$ (SC(1)),3);" ":LOCATE 19,36:COLOR 4,7:PRINT CHR$(2);:COLOR FFF,BBB:PRINT RIGHT$ ("  "+ STR$ (SC(2)),3);" ";:LOCATE 2,1
3270 RETURN
3280 REM BOARD DATA
3290 DATA 0,1,-1,1,-1,0,-1,-1,0,-1,1,-1,1,0,1,1
3300 FFF= 7:BBB=3:WIDTH 40:COLOR FFF,BBB,1
3310 CLS:COLOR 5,1:PRINT STRING$(40," "):LOCATE 1,13,0:COLOR 14,1:PRINT "O T H E L L O"
3320 COLOR 0,5:LOCATE 3,2:PRINT"   1   2   3   4   5   6   7   8  "
3330 FOR N=4 TO 20:LOCATE N,2:PRINT " ";:NEXT N:FOR N=1 TO 8:LOCATE 3+2*N,2:PRINT CHR$(N+64);:NEXT
3335 COLOR   6,7
3340 LOCATE 4,3  :PRINT"╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗":FOR N=1 TO 13 STEP 2
3350 LOCATE 4+N,3:PRINT"║   ║   ║   ║   ║   ║   ║   ║   ║"
3360 LOCATE 5+N,3:PRINT"╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣":NEXT
3370 LOCATE 4+N,3:PRINT"║   ║   ║   ║   ║   ║   ║   ║   ║"
3380 LOCATE 5+N,3:PRINT"╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝"
3390 FOR I= 1TO 8
3400 COLOR,7:FOR J= 1 TO 8:LOCATE 2* J+ 3,4* I+ 1,0:FACE= (A(I,J)+ 3)/2:IF FACE=1 THEN    COLOR 1 ELSE COLOR 4
3410 IF FACE = 1.5 THEN COLOR BBB:PRINT" " ELSE PRINT CHR$(FACE)
3420 NEXT J,I
3430 COLOR FFF,BBB:GOSUB 3250
3440 RETURN
3450 END 
5000 PRINT P$(PT);:COLOR C(PT):PRINT CHR$(PT);:COLOR FFF:RETURN
5010 X$=INKEY$:IF X$="" THEN 5010 ELSE Y=VAL(X$):RETURN
6000 LOCATE 1,1
6010 PRINT"1";
6020 PRINT"2";
65000 '
65020 KEY(2) ON:ON KEY(2) GOSUB 65200
65030 KEY OFF:SCREEN 0,1:COLOR 15,3,1:WIDTH 40:CLS:LOCATE 5,18:PRINT " IBM "
65040 LOCATE 7,12,0:PRINT "Personal Computer"
65050 COLOR 10,0:LOCATE 10,8,0:PRINT CHR$(213)+STRING$(23,205)+CHR$(184)
65060 LOCATE 11,8,0:PRINT CHR$(179)+"  -*-   OTHELLO   -*-  "+CHR$(179)
65070 LOCATE 12,8,0:PRINT CHR$(179)+STRING$(23,32)+CHR$(179)
65075 LOCATE 13,8,0:PRINT CHR$(179)+"     Author: Unknown   "+CHR$(179)
65080 LOCATE 14,8,0:PRINT CHR$(179)+" Adapted by: P. Leabo  "+CHR$(179)
65085 LOCATE 15,8,0:PRINT CHR$(179)+"Enhanced by: R. Vollmer"+CHR$(179)
65090 LOCATE 16,8,0:PRINT CHR$(212)+STRING$(23,205)+CHR$(190)
65100 COLOR  8,0:LOCATE 20,5,0:PRINT "Orig. written for: PET computer"
65105 COLOR  8,0:LOCATE 21,5,0:PRINT "     Last update: 09/14/82     "
65110 COLOR 14,0:LOCATE 23,7,0:PRINT "Press space bar to continue";CHR$(7);
65120 COLOR 30:LOCATE 23,5,0:PRINT CHR$(15);:LOCATE 23,35,0:PRINT CHR$(15);
65130 COLOR 14
65140 POKE 106,0 'CLEAR KYBD BUFFER
65150 CMD$ = INKEY$
65160 IF CMD$="" THEN GOTO 65150
65170 IF CMD$ = CHR$(27) THEN GOTO 65200
65180 IF CMD$ = " " THEN GOTO 1
65190 GOTO 65140
65200 ON ERROR GOTO 65240:RUN"BASMENU
65210 IF E<>71 THEN RUN"control
65220 RUN"A:TRANSFER
65230 SYSTEM
65240 E=ERR:RESUME NEXT
```

## SCOPE.BAS

```bas
10 ' N O T E       N O T E       N O T E       N O T E
20 '
30 ' See important comments at the end of this program.
40 '
50 KEY OFF
60 DIM SCRN%(8,4)
70 SCREEN 0,0
80 LOCATE 1,1,0
90 GOSUB 1080      'INITIALIZE ARRAY
100 GOSUB 760      'PRINT MENU ON SCREEN
110 GOSUB 1390     'GO ASK USER WHAT HE WANTS TO DO
120 GOSUB 1790     'GO SEE WHAT HE SAID TO DO
130 GOSUB 1580     'SWITCH TO COLOR DISPLAY
140 GOSUB 670
150 IF SCRN%(7,2)>1 THEN SCREEN 1,1 ELSE SCREEN 1,0
160 IF SCRN%(5,2)>1 THEN COLOR 0,CINT(RND) ELSE COLOR CINT(RND * 15),CINT(RND)
170 CLS
180 '
190 '
200 X1=(RND * 50)+1
210 X2=(RND * 50)+1
220 Y1=RND * X1
230 Y2=RND * X2
240 GOTO 360
250 '
260 IF INT(RND * 11) = 5 THEN GOSUB 670
270 CC$=INKEY$
280 IF LEN(CC$)=0 THEN 310
290 IF CC$=CHR$(27) THEN GOSUB 1680: GOTO 100
300 IF CC$=" " THEN 160
310 IF INT(RND * 250) = 125 THEN 160
320 X1=(X1+XX) MOD 110
330 Y1=(Y1+YX) MOD 110
340 X2=(X2+XY) MOD 110
350 Y2=(Y2+YY) MOD 110
360 Y1=-Y1
370 Y2=-Y2
380 GOSUB 510
390 X1=-X1
400 X2=-X2
410 GOSUB 510
420 Y1=-Y1
430 Y2=-Y2
440 GOSUB 510
450 X1=-X1
460 X2=-X2
470 GOSUB 510
480 GOTO 260
490 '
500 '
510 ON I% GOTO 520,560,590,630
520 LINE((X1+100)*35/24,Y1+100)-((X2+100)*35/24,Y2+100),CO
530 LINE((Y1+100)*35/24,X1+100)-((Y2+100)*35/24,X2+100),CO
540 RETURN
550 '
560 LINE((X1+100)*35/24,Y1+100)-((X2+100)*35/24,Y2+100),CO,B
570 RETURN
580 '
590 LINE((X1+100)*35/24,Y1+100)-((X2+100)*35/24,Y2+100),CO
600 LINE((Y1+100)*35/24,X1+100)-((Y2+100)*35/24,X2+100),CO,B
610 RETURN
620 '
630 CIRCLE (X1+150,Y1+100),ABS(X2),CO
640 RETURN
650 '
660 '
670 XX=(RND * 11)-5
680 XY=(RND * 11)-5
690 YX=(RND * 11)-5
700 YY=(RND * 11)-5
710 CO=CINT(RND *3)
720 RANDOMIZE(VAL(RIGHT$(TIME$,2)))
730 RETURN
740 '
750 '
760 VL$=CHR$(179)
770 HL$=CHR$(196)
780 UR$=CHR$(191)
790 LR$=CHR$(217)
800 UL$=CHR$(218)
810 LL$=CHR$(192)
820 CLS
830 LOCATE ,,0
840 PRINT TAB(15) "KALEIDOSCOPE"
850 LOCATE 4
860 PRINT "Foreground" TAB(15) UL$ "Lines" TAB(35) UR$
870 PRINT TAB(15) VL$ "Boxes" TAB(35) VL$
880 PRINT TAB(15) VL$ "Lines and Boxes" TAB(35) VL$
890 PRINT TAB(15) LL$ "Circles" TAB(35) LR$
900 LOCATE 10
910 PRINT "Background" TAB(15) UL$ "Random Color" TAB(32) UR$
920 PRINT TAB(15) LL$ "Black" TAB(32) LR$
930 LOCATE 14
940 PRINT "Mode" TAB(15) UL$ "Color" TAB(33) UR$
950 PRINT TAB(15) LL$ "Black & White" TAB(33) LR$
960 LOCATE 18
970 PRINT "Select one from each group"
980 PRINT "Move cursor with RETURN key"
990 PRINT "Press SPACE to execute KALEIDOSCOPE"
1000 PRINT "Press ESC to EXIT"
1010 LOCATE 24,1
1020 PRINT "While running, SPACE bar will restart";
1030 LOCATE 25,1
1040 PRINT "ESC will return to this menu";
1050 RETURN
1060 ' 
1070 '
1080 FOR I%=0 TO 3
1090 FOR J%=0 TO 7
1100 READ SCRN%(J%,I%)
1110 NEXT J%,I%
1120 RETURN
1130 '
1140 '
1150 FOR I%=0 TO 7
1160 LOCATE SCRN%(I%,0),SCRN%(I%,1)
1170 IF SCRN%(I%,2)=0 THEN PRINT " "
1180 IF SCRN%(I%,2)=1 THEN COLOR 0,7: PRINT " ": COLOR 7,0
1190 IF SCRN%(I%,2)=2 THEN COLOR 0,7: PRINT "X": COLOR 7,0
1200 IF SCRN%(I%,2)=3 THEN PRINT "X"
1210 NEXT I%
1220 RETURN
1230 '
1240 '
1250 IF SCRN%(CURS%,2)=1 THEN SCRN%(CURS%,2)=0 ELSE SCRN%(CURS%,2)=3
1260 CURS%=CURS%+1
1270 IF CURS%=8 THEN CURS%=0
1280 IF SCRN%(CURS%,2)=0 THEN SCRN%(CURS%,2)=1 ELSE SCRN%(CURS%,2)=2
1290 RETURN
1300 '
1310 '
1320 FOR I%=0 TO 7
1330 IF SCRN%(I%,3)=SCRN%(CURS%,3) THEN SCRN%(I%,2)=0
1340 NEXT I%
1350 SCRN%(CURS%,2)=2
1360 RETURN
1370 '
1380 '
1390 GOSUB 1150
1400 CC$=""
1410 WHILE LEN(CC$)<>1
1420 CC$=INKEY$
1430 WEND
1440 IF CC$=CHR$(13) THEN GOSUB 1250: GOSUB 1150
1450 IF (CC$="x") OR (CC$="X") THEN GOSUB 1320: GOSUB 1150
1460 'IF NO MONOCHROME DISPLAY, activate 1471 & comment 1470            *****
1470 'IF CC$=CHR$(27) THEN GOSUB 1680: KEY ON: LOCATE ,,1,12,13: CLS: END
1471 IF CC$=CHR$(27) THEN GOSUB 1680: LOCATE ,,1,7: CLS: RUN"BASMENU
1480 IF CC$=" " THEN RETURN
1490 GOTO 1390
1500 '
1510 '
1520 DATA 4,5,6,7,10,11,14,15
1530 DATA 22,22,32,24,29,22,22,30
1540 DATA 2,0,0,0,3,0,3,0
1550 DATA 1,1,1,1,2,2,3,3
1560 '
1570 '
1580  RETURN  'ACTIVATE THIS STATEMENT IF NO MONOCHROME DISPLAY
1590 DEF SEG=&H41
1600 POKE 0,(PEEK(0) AND &HCF) OR &H20
1610 DEF SEG
1620 SCREEN 0
1630 WIDTH 40
1640 SCREEN 1,0
1650 RETURN
1660 '
1670 '
1680  SCREEN 0,0  'ACTIVATE THIS STATEMENT IF NO MONOCHROME DISPLAT
1690  RETURN 'ACTIVATE THIS STATEMENT IF NO MONOCHROME DISPLAY
1700 DEF SEG=&H41
1710 POKE 0,(PEEK(0) OR &H30)
1720 DEF SEG
1730 SCREEN 0
1740 WIDTH 80
1750 LOCATE 1,1,0
1760 RETURN
1770 '
1780 '
1790 IF SCRN%(0,2)>1 THEN I%=1
1800 IF SCRN%(1,2)>1 THEN I%=2
1810 IF SCRN%(2,2)>1 THEN I%=3
1820 IF SCRN%(3,2)>1 THEN I%=4
1830 RETURN
1840 '         N O T E        N O T E
1850 'Activate/deactivate statements commented above depending on whether
1860 'or not you have a monochrome display. The statement numbers are
1870 'listed below in an ON statement incase someone renumbers this thing.
1880 ON I% GOTO 1460,1580,1680,1690
1890 '
1900 'If from time to time it appears that the program is not working, it may b
1910 'that it is painting with the same color as the background.
1920 '
1930 'Feel free to copy this program and pass it on to a friend, lover, etc.,
1940 'but lets see how many hands this program passes through. Before you
1950 'copy it, please add your name to the bottom of the list below.
1960 'This program written for the IBM PC by
1970 ' Bill Decker  4 Sherwood Dr. Endicott, N. Y. 13760
1980 ' Barry Shiffrin 2309 Acorn Dr. Vestal, NY  13850
1990 ' Bob Vollmer for STL PC-Club library 8-543-4866
```

## WORM1.BAS

```bas
1 WIDTH 80:CLS:CLEAR:KEY(2) ON:ON KEY(2) GOSUB 65140:KEY 2,"RUN"+CHR$(34)+"CONTROL"+CHR$(13)
5 PRINT"Which display should I worm my way into?"+CHR$(13)+"1 - Monochrome"+CHR$(13)+"2 - Color"
6 ANS$=INKEY$:IF ANS$="" THEN GOTO 6
7 IF VAL(ANS$) <1 OR VAL(ANS$) >2 THEN BEEP:GOTO 6
10 KEY OFF:WL=20:DIM W(WL,2):DIM OLD(4,4):DIM NEWX(4,4):IF VAL(ANS$)=1 THEN DEF SEG=&HB000 ELSE DEF SEG=&HB800
20 DIM NEWFROM(4):NEWFROM(1)=3:NEWFROM(2)=4:NEWFROM(3)=1:NEWFROM(4)=2
40 OLD(1,2)=200:OLD(1,3)=186:OLD(1,4)=188
50 OLD(2,1)=200:OLD(2,3)=201:OLD(2,4)=205
60 OLD(3,1)=186:OLD(3,2)=201:OLD(3,4)=187
70 OLD(4,1)=188:OLD(4,2)=205:OLD(4,3)=187
80 NEWX(1,2)=205:NEWX(1,3)=186:NEWX(1,4)=205
90 NEWX(2,1)=186:NEWX(2,3)=186:NEWX(2,4)=205
100 NEWX(3,1)=186:NEWX(3,2)=205:NEWX(3,4)=205
110 NEWX(4,1)=186:NEWX(4,2)=205:NEWX(4,3)=186
111 FOR I=0 TO 1999:POKE 2*I,219:NEXT I
120 FOR I=0 TO WL-1:POKE 2*(5*80+I),205:W(I,1)=5:W(I,2)=I:NEXT I:H=WL-1:F=4
140 ND=1+INT(RND*3.999999):WHILE ND=F:ND=1+INT(RND*3.999999):WEND:IF (ND=1 AND W(H,1)=0)OR(ND=2 AND W(H,2)=79)OR(ND=3 AND W(H,1)=24)OR(ND=4 AND W(H,2)=0)THEN GOTO 140
160 T=(H+1)MOD WL:POKE 2*(W(T,1)*80+W(T,2)),255:POKE 2*(W(H,1)*80+W(H,2)),OLD(F,ND):NH=(H+1)MOD WL:W(NH,1)=W(H,1):W(NH,2)=W(H,2):H=NH
170 POKE 2*(W(H,1)*80+W(H,2)),OLD(F,ND):NH=(H+1)MOD WL
190 IF ND=1 THEN W(H,1)=W(H,1)-1 ELSE IF ND=2 THEN W(H,2)=W(H,2)+1 ELSE IF ND=3 THEN W(H,1)=W(H,1)+1 ELSE IF ND=4 THEN W(H,2)=W(H,2)-1
230 POKE 2*(W(H,1)*80+W(H,2)),NEWX(F,ND):F=NEWFROM(ND)
240 GOTO 140
65130 E=ERR:RESUME NEXT
65140 ON ERROR GOTO 65130:RUN"BASMENU
65150 IF E<>71 THEN RUN"control
65160 RUN"A:TRANSFER
65170 SYSTEM
```

## YAHTZEE.BAS

```bas
0 GOTO 65000
1 '
1000 '     YATZEE
1010 ' ORIGINAL BY JL HELMS & MF PEZOK FOR CCII
1020 ' CORONADO, CA
1030 ' ADAPTED TO IBM PC BY PATRICK LEABO
1040 ' TUCSON, AZ
1050 '
1060 DEFINT A-Z
1070 DIM C(5):DIM K(18,7):DIM F(5):DIM A$(7)
1080 DIM S(6,5):DIM M(13),TN(6),DU(6):KEY OFF:COLOR 5,3,1:WIDTH 80
1090 SCREEN 0,1:RESTORE 1150:FOR N= 1 TO 6:READ TN(N):NEXT
1100 COMMON MENU
1110 GOSUB 5090
1120 C1= 39:C2= 63:C3= 33:C4= 56
1130 GOSUB 4660
1140 CLS:GOSUB 4430
1150 DATA 49,51,53,54,56,61
1160 GOSUB 6820:REM  draw yatzee board
1165 COLOR 7,0
1170 RANDOMIZE VAL(RIGHT$(TIME$,2))
1180 LOCATE 25,1
1190 PRINT "HOW MANY PLAYERS?  ";:LOCATE ,,1:GOSUB 2090
1200 GOSUB 7100: N=ASC(KB$)-48
1210 IF N< 1 OR N> 5 THEN 1180
1220 IF N< 5 THEN GOSUB 6000
1230 IF CC= 1THEN GOSUB 5480
1240 LOCATE 25,1:PRINT STRING$(60," ");:FOR A=1 TO N
1250 LOCATE 24,1:PRINT STRING$(60," ");:LOCATE 24,1
1260 PRINT "PLAYER NUMBER "A;" NAME PLEASE  ";
1270 GOSUB 2090:LINE INPUT;A$(A):IF A$(A)= "" THEN BEEP:GOTO 1250
1280 A$(A)=LEFT$(A$(A),9)
1290 NEXT A
1295 LOCATE 24,1:PRINT STRING$(60," ");:LOCATE 24,1
1300 IF CC= 1 THEN N= N+ 1:A$(N)= "IBM PC"
1310 LOCATE 23,1
1320 A= 0
1330 REM 
1340 REM   NEXT ROLL PRESET
1350 REM  
1360 A= A+ 1:IF A> N THEN A= 1
1370 H= 0:GOSUB 5340
1380 IF A= 0THEN 4760
1390 IF K(18,A)= 2THEN 1360
1400 LOCATE 23,1:PRINT STRING$(70," ");
1410 LOCATE 23,4* (A- 1)+ 14
1420 PRINT A$(A);
1430 REM 
1440 REM   INITIAL ROLL
1450 REM  
1460 H= H+ 1:MR= 0
1470 FOR B= 1TO 5
1480 J= B- 1:C(B)= INT (6* RND (1)+ 1)
1490 DIE= C(B):F(B)= 0
1500 GOSUB 5250
1510 GOSUB 5530
1520 NEXT B
1530 IF A* CC= N THEN 2140
1540 REM 
1550 REM  PLAYER SELECTS QTY TO ROLL
1560 REM 
1570 GOSUB 7080
1580 IF H> 2THEN 1940
1590 POKE 106,0:PRINT " HOW MANY DICE TO ROLL AGAIN? ";:LOCATE ,,1:GOSUB 2080:GOSUB 7100:F$=KB$:PRINT F$;:F=ASC(F$)-48:LOCATE ,,0
1600 IF F= - 1THEN GOSUB 35000
1610 IF F< 0OR F> 5THEN 1570
1620 IF F= 0THEN 1940
1630 IF F= 5THEN 1430
1640 REM 
1650 REM  PLAYER SELECTS DICE TO ROLL
1660 REM 
1670 H= H+ 1
1680 GOSUB 7080
1690 FOR NN= 1TO 4:F(NN)= 0:NEXT 
1700 PRINT " ROLL WHICH";F;"DICE AGAIN   ";:LOCATE ,,1
1710 GOSUB 2090:FOR ND= 1TO F:
1720 GOSUB 7100:F$=KB$::F(ND)= ASC(F$)- 48:GOSUB 2120:IF F(ND)= 0 AND  ND= 1 THEN  ND= F:GOTO 1740
1730 IF F(ND)< 1 OR  F(ND)> 5 THEN 1720
1740 PRINT F(ND);:NEXT
1750 X= 2:XF= 0
1760 FOR J= 1TO F
1770 IF F= 1THEN 1790
1780 IF F(J)= F(J+ 1)THEN X= 1
1790 IF F(1)= 0THEN XF= 1
1800 NEXT J:IF XF= 1THEN H= H- 1:GOTO 1570
1810 ON X GOTO 1680,1820
1820 REM  
1830 REM  PLAYER ROLLS DICE AGAIN
1840 REM 
1850 FOR B= 1TO 4
1860 IF F(B)= 0THEN 1920
1870 C(F(B))= INT (6* RND (1)+ 1)
1880 DIE= C(F(B)):J= F(B)- 1
1890 GOSUB 5250
1900 GOSUB 5530
1910 F(B)= 0
1920 NEXT B
1930 GOTO 1540
1940 REM 
1950 REM   PLAY BOARD NUMBER
1960 REM 
1970 GOSUB 7080
1980 PRINT " PLAY BOARD NUMBER?  ";:LOCATE ,,1:GOSUB 2080:GOSUB 7100:I$=KB$:I=ASC(I$)- 48:LOCATE ,,0:IF I> 9 THEN I= I- 7
1990 GOSUB 2120:IF I> 9 THEN PRINT CHR$ (I+ 55);:GOTO 2010
2000 PRINT I;
2010 IF I< 1OR I> 13THEN 1970
2020 IF I= 12AND K(12,A)> - 1THEN 2140
2030 IF K(I,A)= 0THEN 2140
2040 LOCATE 24,1:BEEP
2050 PRINT "NO - NO - DUMMY - - TRY AGAIN";:FOR ND=1 TO 1500:NEXT:LOCATE 24,1:PRINT STRING$(60," ");
2060 LOCATE 25,1:PRINTSTRING$(60," ");:LOCATE 25,1
2070 GOTO 1980
2080 REM  HIGH PITCH CLICK
2090 PLAY "L64T200N70":RETURN
2100 REM  GLISSANDO SOUND
2110 PLAY "MBt255MLL64O5CC#DD#EFF#GG#AA#B":RETURN
2120 ' LO PITCH CLICK
2130 PLAY "L64T200N46":RETURN
2140 REM  
2150 REM  DICE LOGIC
2160 REM  CLEAR/SET S(M,K)
2170 REM  
2180 FOR M= 0TO 6
2190 FOR K= 0TO 5
2200 S(M,K)= 0
2210 NEXT K
2220 NEXT M
2230 FOR J= 1TO 5
2240 X= C(J):S(X,0)= S(X,0)+ 1
2250 P= S(X,0):S(X,P)= J
2260 NEXT J
2270 REM  
2280 REM  SET S(0,K)=M SEQUENCE BY QTY
2290 REM  
2300 X= 0
2310 FOR J= 5TO 1STEP - 1
2320 FOR M= 6TO 1STEP - 1
2330 IF S(M,0)< > J THEN 2350
2340 S(0,X)= M:X= X+ 1
2350 NEXT M
2360 NEXT J
2370 IF A* CC= N THEN 2740
2380 IF I> 6THEN 2460
2390 REM  
2400 REM  CHECK PLAYER BOARD 1-6
2410 REM  
2420 GOSUB 6110
2430 IF X= - 1THEN 2720
2440 K(I,A)= I* S(S(0,X),0)
2450 GOTO 3980
2460 REM  
2470 REM  CHECK PLAYER BOARD 7-13
2480 REM  
2490 ON I- 6GOTO 2500,2520,2540,2560,2610,2650,2680
2500 IF S(S(0,0),0)< 3THEN 2720
2510 GOSUB 6190:GOTO 3980
2520 IF S(S(0,0),0)< 4THEN 2720
2530 GOSUB 6190:GOTO 3980
2540 IF S(S(0,0),0)< > 3OR S(S(0,1),0)< > 2THEN 2720
2550 K(9,A)= 25:GOTO 3980
2560 IF S(1,0)> 0AND S(2,0)> 0AND S(3,0)> 0AND S(4,0)> 0THEN 2600
2570 IF S(2,0)> 0AND S(3,0)> 0AND S(4,0)> 0AND S(5,0)> 0THEN 2600
2580 IF S(3,0)> 0AND S(4,0)> 0AND S(5,0)> 0AND S(6,0)> 0THEN 2600
2590 GOTO 2720
2600 K(10,A)= 30:GOTO 3980
2610 IF S(1,0)AND S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)= 1THEN 2640
2620 IF S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)AND S(6,0)= 1THEN 2640
2630 GOTO 2720
2640 K(11,A)= 40:GOTO 3980
2650 IF S(S(0,0),0)< > 5THEN 2720
2660 IF K(12,A)= 0THEN K(12,A)= 50:GOTO 3980
2670 K(12,A)= K(12,A)+ 100:GOTO 3980
2680 GOSUB 6190:GOTO 3980
2690 REM  
2700 REM  SET PLAYER INVALID
2710 REM  
2720 K(I,A)= - 1
2730 GOTO 3980
2740 REM  
2750 REM  COMPUTER CHECKS
2760 REM  
2770 I= 12
2780 IF S(S(0,0),0)= 5AND K(12,A)= 0THEN K(12,A)= 50:GOTO 3980
2790 IF S(S(0,0),0)= 5AND K(12,A)> 0THEN K(12,A)= K(12,A)+ 100:GOTO 3980
2800 I= 8
2810 IF S(S(0,0),0)= 4AND K(8,A)= 0THEN GOSUB 6190:GOTO 3980
2820 I= 9
2830 IF S(S(0,0),0)= 3AND S(S(0,1),0)= 2AND K(9,A)= 0THEN K(9,A)= 25:GOTO 3980
2840 IF K(11,A)< > 0THEN 2900
2850 I= 11
2860 IF S(1,0)AND S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)= 1THEN 2890
2870 IF S(2,0)AND S(3,0)AND S(4,0)AND S(5,0)AND S(6,0)= 1THEN 2890
2880 GOTO 2900
2890 K(11,A)= 40:GOTO 3980
2900 IF K(10,A)< > 0THEN 2970
2910 I= 10
2920 IF S(1,0)> 0AND S(2,0)> 0AND S(3,0)> 0AND S(4,0)> 0THEN 2960
2930 IF S(2,0)> 0AND S(3,0)> 0AND S(4,0)> 0AND S(5,0)> 0THEN 2960
2940 IF S(3,0)> 0AND S(4,0)> 0AND S(5,0)> 0AND S(6,0)> 0THEN 2960
2950 GOTO 2970
2960 K(10,A)= 30:GOTO 3980
2970 IF H< 3THEN 3140
2980 I= 6
2990 IF S(6,0)> 2AND K(6,A)= 0THEN K(6,A)= 6* S(6,0):GOTO 3980
3000 I= 5
3010 IF S(5,0)> 2AND K(5,A)= 0THEN K(5,A)= 5* S(5,0):GOTO 3980
3020 I= 4
3030 IF S(4,0)> 2AND K(4,A)= 0THEN K(4,A)= 4* S(4,0):GOTO 3980
3040 I= 3
3050 IF S(3,0)> 2AND K(3,A)= 0THEN K(3,A)= 3* S(3,0):GOTO 3980
3060 I= 7
3070 IF S(S(0,0),0)> 2AND K(7,A)= 0THEN GOSUB 6190:GOTO 3980
3080 I= 2
3090 IF S(2,0)> 2AND K(2,A)= 0THEN K(2,A)= 2* S(2,0):GOTO 3980
3100 I= 1
3110 IF S(1,0)> 2AND K(1,A)= 0THEN K(1,A)= S(1,0):GOTO 3980
3120 I= 13:IF K(13,A)< > 0THEN 3140
3130 IF C(1)+ C(2)+ C(3)+ C(4)+ C(5)> 19THEN GOSUB 6190:GOTO 3980
3140 REM  
3150 REM  CLEAR DICE NUMBER F(B)
3160 REM  COMPUTER
3170 REM  
3180 FOR B= 1TO 5
3190 F(B)= 0
3200 NEXT B
3210 REM  
3220 REM  GET DICE CONTROL
3230 REM  COMPUTER
3240 REM  
3250 H= H+ 1:IF H> 3THEN 3840
3260 I= M(MR):IF I< > 0THEN 3290
3270 MR= MR+ 1:IF MR> 13THEN MR= 1
3280 GOTO 3260
3290 IF I= 12AND K(12,A)> - 1THEN 3330
3300 IF K(I,A)< > 0THEN 3270
3310 IF I= 9THEN 3440
3320 IF I= 10OR I= 11THEN 3560
3330 REM  
3340 REM  GET DICE 1,2,3,4
3350 REM  COMPUTER
3360 REM  
3370 M= 0:J= 1
3380 M= M+ 1:IF M> 4THEN 3720
3390 K= S(0,M):IF K= 0THEN 3720
3400 FOR L= 1TO S(K,0)
3410 F(J)= S(K,L):J= J+ 1
3420 NEXT L
3430 GOTO 3380
3440 REM  
3450 REM  GET DICE FH
3460 REM  COMPUTER
3470 REM  
3480 M= 0:J= 1
3490 M= M+ 1:IF M> 4THEN 3720
3500 K= S(0,M):IF K= 0THEN 3720
3510 IF K> 1THEN 3490
3520 FOR L= 1TO S(K,0)
3530 F(J)= S(K,L):J= J+ 1
3540 NEXT L
3550 GOTO 3490
3560 REM  
3570 REM  GET DICE LG/SM ST
3580 REM  COMPUTER
3590 REM  
3600 M= 0:J= 1
3610 M= M+ 1:IF M> 4THEN 3680
3620 K= S(0,M):IF K= 0THEN 3680
3630 IF S(K,0)= 1THEN 3610
3640 FOR L= 1TO S(K,0)
3650 F(J)= S(K,L):J= J+ 1
3660 NEXT L
3670 GOTO 3610
3680 IF F(1)< > 0THEN 3720
3690 L= INT (2* RND (1)+ 1)
3700 F(1)= 5
3710 IF L= 1THEN F(1)= 1
3720 REM  
3730 REM  COMPUTER ROLL AGAIN
3740 REM  
3750 FOR B= 1TO 4
3760 IF F(B)< 1THEN 3810
3770 C(F(B))= INT (6* RND (1)+ 1)
3780 DIE= C(F(B)):J= F(B)- 1
3790 GOSUB 5250
3800 GOSUB 5530
3810 F(B)= 0
3820 NEXT B
3830 GOTO 2140
3840 REM  
3850 REM  COMPUTER MUST SCORE
3860 REM  
3870 MR= MR+ 1:IF MR> 13THEN MR= 1
3880 I= M(MR):IF I= 0THEN 3870
3890 IF K(I,A)< > 0THEN 3870
3900 IF I> 6THEN 3960
3910 GOSUB 6110
3920 IF X= - 1THEN 3970
3930 IF K(I,A)< > 0THEN 3870
3940 K(I,A)= S(I,0)* I
3950 IF K(I,A)< > 0THEN 3980
3960 IF I= 13AND K(13,A)= 0THEN GOSUB 6190
3970 IF K(I,A)= 0THEN K(I,A)= - 1
3980 REM  
3990 REM  GET SCOREBOARD TOTALS
4000 REM  
4010 FOR J= 14TO 17
4020 K(J,A)= 0
4030 NEXT J
4040 FOR J= 1TO 6
4050 IF K(J,A)< 0THEN 4070
4060 K(15,A)= K(15,A)+ K(J,A)
4070 NEXT J
4080 IF K(15,A)> 62THEN K(14,A)= 35
4090 FOR J= 7TO 13
4100 IF K(J,A)< 0THEN 4120
4110 K(16,A)= K(16,A)+ K(J,A)
4120 NEXT J
4130 K(17,A)= K(14,A)+ K(15,A)+ K(16,A)
4140 REM  
4150 REM  PRINT SCORE
4160 REM  
4170 GOSUB 2110
4180 COLOR 15,0
4190 FOR J= 1TO 6
4200 IF K(J,A)< 0 THEN LOCATE J+1,4* (A- 1)+ 15:PRINT "  0";:GOTO 4230
4210 IF K(J,A)< 1 THEN 4230
4220 LOCATE J+1,4* (A- 1)+ 15:PRINT  USING"###";K(J,A);
4230 NEXT J
4240 FOR J= 7TO 13
4250 IF K(J,A)< 0 THEN LOCATE J+4,4* (A- 1)+ 15:PRINT "  0":GOTO 4280
4260 IF K(J,A)< 1 THEN 4280
4270 LOCATE J+4,4* (A- 1)+ 15:PRINT USING "###";K(J,A)
4280 NEXT J
4290 LOCATE 9,4* (A- 1)+ 15:PRINT USING "###";K(15,A)
4300 LOCATE 19,4* (A- 1)+ 15:PRINT USING "###";K(16,A)
4310 LOCATE 20,4* (A- 1)+ 15:PRINT USING "###";K(14,A)
4320 LOCATE 21,4* (A- 1)+ 15:PRINT USING "###";K(17,A)
4330 COLOR 7,0
4340 IF A* CC< > N THEN 1330
4350 REM  
4360 REM  RESET M(I) COMPUTER PRIORITIES
4370 REM  
4380 FOR B= 1TO 13
4390 IF M(B)= 12THEN 4410
4400 IF M(B)= I THEN M(B)= 0
4410 NEXT B
4420 GOTO 1330
4430 REM  
4440 REM   INSTRUCTIONS
4450 REM  
4460 PRINT "            Y A H T Z E E "
4470 PRINT "THIS IS THE GAME OF YAHTZEE - "
4480 PRINT "FROM 1 TO 7 PLAYERS MAY PLAY AT THE SAME TIME"
4490 PRINT "WITH EACH PLAYERS CURRENT STATUS SHOWN ON THE"
4500 PRINT "PLAYING BOARD, INCLUDING TOTAL SCORES"
4510 PRINT 
4520 PRINT "THE ONLY DIFFERENCE BETWEEN THIS GAME AND THE"
4530 PRINT "POPULAR HOME GAME IS THAT YOU MAY GET MULTIPLE"
4540 PRINT "YAHTZEES HERE ..... THE FIRST YAHTZEE SCORES"
4550 PRINT "50 POINTS, AND EACH ADDITIONAL ONE WILL YIELD"
4560 PRINT "A BONUS OF 100 POINTS (IF THE YAHTZEE IS PUT"
4570 PRINT "INTO THE YAHTZEE BLOCK)..... IN ADDITION YOU"
4580 PRINT "WILL BE GIVEN AN EXTRA TURN AT THE END OF"
4590 PRINT "THE GAME":PRINT :PRINT 
4600 PRINT "THE WINNER WILL BE ANNOUNCED AT THE END OF"
4610 PRINT "THE GAME - - BUT I WOULDNT ADVISE ANYONE"
4620 PRINT "TO BE LAST......."
4630 PRINT:PRINT
4640 GOSUB 2090:INPUT "HIT RETURN TO CONTINUE  ";Y$:BEEP
4650 RETURN 
4660 RETURN
4670 LOCATE 10,10:PRINT "YATZEE.BAS     VER 3.2"
4680 LOCATE 12,10:PRINT "27 JUN 79"
4690 LOCATE 14,10:PRINT "DEVELOPED BY"
4700 LOCATE 15,13:PRINT "J.L. HELMS    &    M.F. PEZOK"
4710 LOCATE,16,13:PRINT "1009 LEYTE RD / 1321 SAIPAN RD"
4720 LOCATE 17,17:PRINT "CORONADO,  CA.  92118"
4730 LOCATE 18,15:PRINT "(714) 435-6992 / 437-4659"
4740 PRINTCHR$(11)
4750 RETURN 
4760 REM 
4770 REM   END - SORT WINNER
4780 REM 
4790 X= 2:IF N= 1THEN 4870
4800 FOR J= 1TO N- 1
4810 IF K(17,J)> K(17,J+ 1)THEN 4850
4820 K= K(17,J):K(17,J)= K(17,J+ 1):K(17,J+ 1)= K
4830 A$= A$(J):A$(J)= A$(J+ 1):A$(J+ 1)= A$
4840 X= 1
4850 NEXT J
4860 ON X GOTO 4760,4870
4870 REM 
4880 REM   PRINT WINNERS STANDINGS
4890 REM 
4900 RESTORE 5200
4910 FOR J= 1TO N
4920 LOCATE 25,1:PRINTSTRING$(60," ");
4930 IF J> 1 AND J= N THEN RESTORE 5240
4940 LOCATE 25,1:READ A$
4950 PRINT A$;"     ";A$(J);" ";
4960 TT= 500* (N- J+ 1):IF TT< 1500THEN TT= 1500
4970 FOR T= 1TO TT:NEXT T
4980 NEXT J
4990 LOCATE 25,1:PRINTSTRING$(60," ");
5000 LOCATE 24,1:PRINT "+++   END OF GAME   +++";
5010 FOR T= 1TO 2000:NEXT T
5020 '
5030 GOSUB 2090:LOCATE 25,1:INPUT "PLAY AGAIN?  Y/N  ";Y$
5040 IF LEFT$ (Y$,1)= "Y"THEN GOSUB 5090:GOTO 1110
5050 IF LEFT$ (Y$,1)= CHR$(27) THEN BEEP:GOTO 5070
5060 IF LEFT$ (Y$,1)< > "N"THEN BEEP:GOTO 5030
5070 GOTO 65200
5080 END 
5090 REM 
5100 REM   CLEAR MATRICES
5110 REM 
5120 FOR K= 1TO 7
5130 FOR J= 1TO 18
5140 K(J,K)= 0
5150 NEXT J
5160 A$(K)= ""
5170 NEXT K
5180 CLS
5190 RETURN 
5200 DATA "+++   THE WINNER   +++"
5210 DATA " SECOND PLACE"," THIRD PLACE "
5220 DATA " FOURTH PLACE "," FIFTH PLACE "
5230 DATA " SIXTH PLACE "
5240 DATA " DEAD LAST "
5250 REM 
5260 REM   ERASE DIE
5270 REM 
5280 COLOR 0,7:PRINT"";:
5290 LOCATE 4* J+ 1,50:PRINT"       ";
5300 LOCATE 4* J+ 2,50:PRINT"       ";
5310 LOCATE 4* J+ 3,50:PRINT"       ";
5320 COLOR 7,0
5330 RETURN 
5340 REM  
5350 REM    CHECK IF DONE
5360 REM  
5370 X= 0
5380 FOR J= 1TO N
5390 Y= 2
5400 FOR K= 1TO 13
5410 IF K(K,J)= 0THEN Y= 1
5420 NEXT K
5430 K(18,J)= Y
5440 IF Y= 2THEN X= X+ 1
5450 NEXT J
5460 IF X= > N THEN A= 0
5470 RETURN 
5480 REM  
5490 REM  COMPUTER PRIORITIES INFO
5500 REM  
5510 GOSUB 6780
5520 RETURN 
5530 REM 
5540 REM   PRINT DIE
5550 REM 
5560 COLOR 0,7:LOCATE ,,0
5570 REM 
5580 PLAY "L32T200N=TN(DIE);"
5590 ON DIE GOTO 5930,5870,5810,5750,5690,5630
5600 '
5610 '   SIX
5620 '
5630 LOCATE 4*J+1,50:PRINT "";CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);
5640 LOCATE 4*J+2,50:PRINT CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);CHR$(32);
5650 LOCATE 4*J+3,50:PRINT CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);CHR$(2);CHR$(32);:GOTO 5960
5660 '
5670 '   FIVE
5680 '
5690 LOCATE 4*J+1,50:PRINT "";CHR$(32);CHR$(2);CHR$(32);" ";CHR$(32);CHR$(2);" ";
5700 LOCATE 4*J+2,50:PRINT " ";CHR$(32);" ";CHR$(2);" ";CHR$(32);" ";
5710 LOCATE 4*J+3,50:PRINT " ";CHR$(2);" ";CHR$(32);" ";CHR$(2);" ";:GOTO 5960
5720 '
5730 '   FOUR
5740 '
5750 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"  ";CHR$(32);CHR$(2);" ";
5760 LOCATE 4*J+2,50:PRINT "   ";CHR$(32);CHR$(32);CHR$(32);
5770 LOCATE 4*J+3,50:PRINT " ";CHR$(2);"  ";CHR$(32);CHR$(2);" ";:GOTO 5960
5780 '
5790 '   THREE
5800 '
5810 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"     ";
5820 LOCATE 4*J+2,50:PRINT "   ";CHR$(2);"   ";
5830 LOCATE 4*J+3,50:PRINT "     ";CHR$(2);" ";:GOTO 5960
5840 '
5850 '   TWO
5860 '
5870 LOCATE 4*J+1,50:PRINT "";" ";CHR$(2);"     ";
5880 LOCATE 4*J+2,50:PRINT "       ";
5890 LOCATE 4*J+3,50:PRINT "     ";CHR$(2);" ";:GOTO 5960
5900 '
5910 '   ONE
5920 '
5930 LOCATE 4*J+1,50:PRINT "";"       ";
5940 LOCATE 4*J+2,50:PRINT "   ";CHR$(2);"   ";
5950 LOCATE 4*J+3,50:PRINT "       ";:GOTO 5960
5960 REM   GET OUT
5970 COLOR 7,0
5980 LOCATE 1,1
5990 RETURN 
6000 REM  
6010 REM  COMPUTER OPTION
6020 REM  
6030 CC= 0
6040 LOCATE 25,1
6050 PRINT "DO YOU WISH TO PLAY AGAINST ME?  Y/N  ";:GOSUB 2090
6060 Y$=INKEY$:IF Y$="" THEN 6060 ELSE BEEP
6070 IF Y$= "N"THEN RETURN 
6080 IF Y$< > "Y"THEN 6040
6090 CC= 1
6100 RETURN 
6110 REM  
6120 REM  CHECK FOR ACES-SIXES ANY POSITION
6130 REM  
6140 X= - 1
6150 FOR J= 0TO 4
6160 IF S(0,J)= I THEN X= J
6170 NEXT J
6180 RETURN 
6190 REM  
6200 REM  TOTAL DICE VALUE
6210 REM  
6220 FOR J= 1TO 5
6230 K(I,A)= K(I,A)+ C(J)
6240 NEXT J
6250 RETURN 
6260 REM  
6270 REM  MATRIX INFORMATION
6280 REM  
6290 REM  C(5)     CURRENT DICE
6300 REM  K(18,7)  SCOREBOARD
6310 REM           COLUMNS 1-13 BOARD NUMBER
6320 REM           COLUMN    14 BONUS UPPER
6330 REM           COLUMN    15 TOTAL UPPER
6340 REM           COLUMN    16 TOTAL LOWER
6350 REM           COLUMN    17 GRAND TOTAL
6360 REM           COLUMN    18 DONE/NOT DONE STATUS
6370 REM           ROW     1- 7 PLAYERS SCORE
6380 REM           ROW        N COMPUTERS SCORE (<7 PLAYERS)
6390 REM  
6400 REM  F(5)     DICE NUMBER TO ROLL AGAIN
6410 REM  A$(7)    PLAYERS NAMES
6420 REM  S(6,5)   COMPUTERS DICE LOGIC
6430 REM           COLUMN     0 DICE NUMBER BY QTY SEQUENCE
6440 REM           COLUMN     1 QTY/POSITION FOR ACES
6450 REM           COLUMN     2 QTY/POSITION FOR TWOS
6460 REM           COLUMN     3 QTY/POSITION FOR THREES
6470 REM           COLUMN     4 QTY/POSITION FOR FOURS
6480 REM           COLUMN     5 QTY/POSITION FOR FIVES
6490 REM           COLUMN     6 QTY/POSITION FOR SIXES
6500 REM           ROW        0 QUANTITY OF DICE
6510 REM           ROW     1- 5 POSITION OF DICE IN C(5)
6520 REM  
6530 REM  SAMPLE S(Y,X) FOR DICE OF 5,2,4,6,4
6540 REM  
6550 REM  Y/X   0  1  2  3  4  5
6560 REM  0     4  6  5  2          IN QTY/VALUE SEQUENCE
6570 REM  1                         NO DIE=1
6580 REM  2     1  2                1 TWO POSITION 2
6590 REM  3                         NO DIE=3
6600 REM  4     2  3  5             2 FOURS POSITIONS 3 AND 5
6610 REM  5     1  1                1 FIVE POSITION 1
6620 REM  6     1  4                1 SIX POSITION 4
6630 REM           +           +
6640 REM  +     +  ++++++++++++++++ SECTION FOR POSITION DATA
6650 REM  +     +------------------ COLUMN INDICATES QTY
6660 REM  +------------------------ INDEX EQUATES TO DIE VALUE
6670 REM  
6680 REM  M(13)    PRIORITY NUMBERS FOR MUST SCORE WHERE VALUE
6690 REM           REFERS TO PLAY BOARD NUMBER
6700 REM  
6710 REM  TO RUN INTERNAL CHECKS SECTION - ENTER A -1 FOR
6720 REM  PLAYING BOARD NUMBER OR QTY OF DICE TO ROLL
6730 REM  AGAIN - - DATA WILL NOT BE LOST AND SCREEN
6740 REM  WILL BE RESET WITH CURRENT DICE SHOWN - -
6750 REM  PLAYERS/COMPUTERS SCORE WILL NOT SHOW UNTIL
6760 REM  AFTER THEIR TURN
6770 REM  
6780 REM  COMPUTER PRIORIRIES
6790 RESTORE 6800
6800 DATA 11,9,12,8,1,2,3,4,5,6,10,7,13
6810 FOR Y= 1TO 13:READ M(Y):NEXT :RETURN :RETURN 
6820 REM player's board
6830 LOCATE 25,1,0:COLOR 7,0:CLS:COLOR 5,3:LOCATE 1,1:FOR Y=1 TO 22:PRINTSTRING$(80," ");:NEXT:LOCATE 1,1
6840 PRINT"             ╒═══╤═══╤═══╤═══╤═══╤═══╕
6850 PRINT"ACES........1│...│...│...│...│...│...│1"
6860 PRINT"TWOS........2│...│...│...│...│...│...│2"
6870 PRINT"THREES......3│...│...│...│...│...│...│3"
6880 PRINT"FOURS.......4│...│...│...│...│...│...│4"
6890 PRINT"FIVES.......5│...│...│...│...│...│...│5"
6900 PRINT"SIXES.......6│...│...│...│...│...│...│6"
6910 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
6920 PRINT"TOTAL UPPER..│...│...│...│...│...│...│"
6930 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
6940 PRINT"3 OF A KIND.7│...│...│...│...│...│...│7"
6950 PRINT"4 OF A KIND.8│...│...│...│...│...│...│8"
6960 PRINT"FULL HOUSE..9│...│...│...│...│...│...│9"
6970 PRINT"SM STRAIGHT.A│...│...│...│...│...│...│A"
6980 PRINT"LG STRAIGHT.B│...│...│...│...│...│...│B"
6990 PRINT"YATZEE......C│...│...│...│...│...│...│C"
7000 PRINT"CHANCE......D│...│...│...│...│...│...│D"
7010 PRINT"             ╞═══╪═══╪═══╪═══╪═══╪═══╡"
7020 PRINT"TOTAL LOWER..│...│...│...│...│...│...│"
7030 PRINT"TOP BONUS....│...│...│...│...│...│...│"
7040 PRINT"GRAND TOTAL..│...│...│...│...│...│...│"
7050 PRINT"             ╘═══╧═══╧═══╧═══╧═══╧═══╛"
7060 FOR N=1 TO 5:LOCATE N*4-2,46:PRINT N;:NEXT
7070 RETURN
7080 LOCATE 25,1:PRINT STRING$(70," ");:LOCATE 25,1:RETURN
7090 ' KB INPUT AND ESCAPE
7100 KB$="":WHILE KB$="":KB$=INKEY$:WEND
7110 IF KB$=CHR$(27) THEN 5070 ELSE RETURN
65000 REM -*- program name -*-
65010 REM Version 1.00
65020 KEY(2) ON:ON KEY(2) GOSUB 65200
65030 KEY OFF:SCREEN 0,1:COLOR 15,3,1:WIDTH 40:CLS:LOCATE 5,18:PRINT " IBM "
65040 LOCATE 7,12,0:PRINT "Personal Computer"
65050 COLOR 10,0:LOCATE 10,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
65060 LOCATE 11,9,0:PRINT CHR$(179)+" -*-   YAHTZEE   -*- "+CHR$(179)
65070 LOCATE 12,9,0:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
65080 LOCATE 13,9,0:PRINT CHR$(179)+"By: J Helms & M Pezok"+CHR$(179)
65085 LOCATE 14,9,0:PRINT CHR$(179)+"PC vsn: Patrick Leabo"+CHR$(179)
65090 LOCATE 15,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
65100 COLOR 15,0:LOCATE 19,5,0:PRINT "   Original written for CCII   "
65110 COLOR 14,0:LOCATE 23,7,0:PRINT "Press space bar to continue";CHR$(7);
65120 COLOR 30:LOCATE 23,5,0:PRINT CHR$(15);:LOCATE 23,35,0:PRINT CHR$(15);
65130 COLOR 14
65140 POKE 106,0 'CLEAR KYBD BUFFER
65150 CMD$ = INKEY$
65160 IF CMD$="" THEN GOTO 65150
65170 IF CMD$ = CHR$(27) THEN GOTO 65200
65180 IF CMD$ = " " THEN GOTO 1
65190 GOTO 65140
65200 ON ERROR GOTO 65240:RUN"BASMENU
65210 IF E<>71 THEN RUN"control
65220 RUN"A:TRANSFER
65230 SYSTEM
65240 E=ERR:RESUME NEXT
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0020

     Volume in drive A has no label
     Directory of A:\

    SCOPE    BAS      4736  12-13-82   2:08a
    YAHTZEE  BAS     16000  12-12-82   8:49p
    EDIT     BAT        76  12-04-82   4:00a
    DRAW     BAS     10752  12-13-82   4:19a
    CROSSREF SCR      9728  11-11-82   8:42p
    CROSSREF EXE     44288  11-15-82   8:56a
    B-SIMPLE BAS     17664   3-13-82
    WORM1    BAS      1408  12-13-82   4:19a
    HANGMAN  BAS      3840  12-13-82   2:41a
    CHSONG   BAS      3584  12-01-82
    OTHELLO  BAS      8320  12-12-82   8:35p
    BLACKJCK BAS      9472  12-12-82   8:35p
    BASMENU  BAS       896  10-21-82   1:23a
    CONTROL  BAS       128  10-13-82   7:04a
    CRC      TXT      1312  11-09-84   8:31a
    CRCK4    COM      1536  10-21-82   7:54p
           16 file(s)     133740 bytes
                           23040 bytes free
