---
layout: page
title: "PC-SIG Diskette Library (Disk #7)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0007/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0007"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXPLIST"

    Here are four of our earliest user-supported programming aids. EXPLIST
    (for Expanding Lister) is the most powerful, giving a structured code
    look to BASIC listings.  It does this by adding blank lines between
    specific keywords (GOTO, NEXT, etc); FOR...NEXTs and WHILE...WENDs are
    indented; and nested loops are indented even more.  REMarks are
    highlighted in several ways. PRINT works with EXPLIST to print the
    listings with title headings and page numbers.
    
    BIHEX converts any file to ASCII (7 bit) for modem transfer or printing.
    LF prints a directory alphabetically with the post script on the right
    of the list, and all names associated with that post script grouped to
    the left of the list.
    
    System Requirements: 64K, one disk drive and monochrome display.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for LF.EXE, type LF and
    press <ENTER>.
    
    Suggested Registration: EXPLIST $15.00
    
    File Descriptions:
    
    EXPMAIL  EXE  Generates a reply/contribution letter to author
    EXPLIST  EXE  Expanding lister for BASIC programs
    PRINT    BAS  Prints ASCII files with title banner and page #'s
    LF       COM  Directory list sorted alphabetically by extent & name
    EXPLIST  DOC  Documentation file for Expanding Lister
    EXPLISTR EXE  Expanding lister requiring compiler runtime library
    PRINTNEC BAS  Same as "print" for NEC 8023/C.Itoh 8510 printers
    BIHEX    BAS  Converts binary files to ASCII hex and back again
    EXPOPT        Options file - EXPLIST.EXE
    EXPOPT        Options file - EXPLIST.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIHEX.BAS

{% raw %}
```bas
100 '
101 ' Binary-to-hex-and-back-again conversion program for the IBM PC
102 '
103 ' Copyright (C) 1982 J. P. Garbers.  All rights reserved.
104 '
105 '
110 LN$="\"+SPACE$(78)+"\"
120 DEF SEG = 64 : KSTATE = PEEK(23) : POKE 23,32 : DEF SEG  ' set NUM LOCK state, saving current state for later
130 TROFF : ON ERROR GOTO 10000
140 DEF FNA(X$) = 40 - LEN(X$)/2
150 DIM PRO$(6)
170 EXPERT = 0 ' rem expert 1 needs no CR after menu choice, expert 0 wants CR
199 GOTO 210   ' bypass startup b.s.   TDH
200 GOSUB 2000 ' do the ego module
210 WHILE NOT DONE : GOSUB 3000 : WEND  ' process menu requests
220 GOTO 9900 ' end stuff
2000 ' ego module
2010 COLOR 7,0 : KEY OFF : CLS : LOCATE 12,1 : COLOR 0,7
2020 PRINT " The following program is brought to you by a grant from Userview Corporation.  ";
2025 COLOR 7,0
2030 FOR TIME = 1 TO 1500 : IF INKEY$<>"" THEN TIME = 1500
2040 NEXT TIME : IF EXPERT THEN RETURN ELSE GOSUB 2300 ' title line and cls
2050 INPUT "Would you like instructions";INST$: IF INST$="" THEN INST$="N"
2060 IF LEFT$(INST$,1)<>"Y" AND LEFT$(INST$,1)<>"y" THEN RETURN
2070 LOCATE 8,1
2080 PRINT "This program allows you to convert binary files from one format to"
2085 PRINT "another.   HEX format files may be easily  transmitted over  phone"
2090 PRINT "lines  and  information  services since  they consist  entirely of"
2095 PRINT "readable characters, but they cannot be used directly as commands."
2100 PRINT "COM  and EXE files may be used  directly as DOS commands,  but are"
2105 PRINT "difficult to send and receive without special software."
2110 PRINT
2115 PRINT "    You can use this program  to convert COM and EXE files to HEX"
2120 PRINT "format files to send your files to someone else, and also use"
2125 PRINT "it to convert HEX files you've received to executable format."
2130 PRINT : CV = CSRLIN : GOSUB 2200 : LOCATE CV, 1
2135 PRINT "You'll tell this program what you want to do by selecting choices"
2140 PRINT "from menus.  To make a selection, press the numbered key corres-"
2145 PRINT "ponding to your choice and it will light up.  You may change your"
2150 PRINT "mind by pressing a different number, and the new choice will light"
2155 PRINT "up.  When the correct choice is lit up, press ENTER.  You may also"
2160 PRINT "press ESC to return to the previous menu."
2165 PRINT
2170 PRINT "As you get used to the program, you may wish to use 'expert mode'."
2175 PRINT "In expert mode you don't have to press ENTER after making your"
2180 PRINT "numbered choice, so make sure you press the right key the first"
2185 PRINT "time.":PRINT
2190 GOSUB 2200 : RETURN
2200 ' wait for keypress
2210 LOCATE 24,4:COLOR 0,7
2220 PRINT "Press the SPACE BAR to continue, or ESC to stop using this program.";
2225 PAUSE$=""
2230 WHILE PAUSE$="": PAUSE$=INKEY$: WEND: COLOR 7,0
2235 IF ASC(PAUSE$)=27 THEN 9900 ' stopped in the middle
2240 LOCATE 24,1:PRINT SPACE$(79);: RETURN
2300 ' title line
2310 CLS : IF QUIET THEN RETURN ELSE COLOR 0,7 : PRINT
2320 PRINT USING LN$; "      Binary-to-hex-and-back-again conversion program for the IBM PC";
2330 PRINT USING LN$; "          Copyright (C) 1982 J. P. Garbers.  All rights reserved.";
2340 PRINT: COLOR 7,0 : RETURN
2400 ' convert cap$ to caps
2410 FOR I = 1 TO LEN(CAP$):E$=MID$(CAP$,I,1):IF E$>="a" AND E$<="z" THEN MID$(CAP$,I,1) = CHR$(ASC(E$)-32)
2420 NEXT I : RETURN
3000 '
3001 ' Main menu
3002 '
3020 NC = 5 : TITLE$="Main Menu"
3030 PRO$(1) = "Convert to COM or EXE format (make command file)"
3035 PRO$(2) = "Convert to HEX format (make transmittable file)"
3040 PRO$(3) = "List the files on your diskette"
3045 IF EXPERT THEN PRO$(4)="Turn expert mode OFF" ELSE PRO$(4) = "Turn expert mode ON"
3047 PRO$(5) = "Stop using this program"
3050 GOSUB 8000 : IF CHOICE = 69 THEN 9900
3060 ON CHOICE GOSUB 4000, 5000, 6000, 7000, 7500
3070 RETURN
4000 '
4001 ' Convert to binary format
4002 '
4010 GOSUB 2300
4020 PRINT : PRINT "Enter name of file to convert to executable format.  If you do not specify an"
4025 PRINT "extension, .HEX will be assumed."
4030 PRINT "-> "; : LINE INPUT INFILE$
4040 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+".HEX"
4050 OPEN "I", 1, INFILE$ ' open it up
4060 CAP$=LEFT$(INFILE$, INSTR(INFILE$,".")-1)+".COM":GOSUB 2400:OUTFILE$=CAP$
4070 PRINT "Enter full name of output file (press ENTER alone to use "; OUTFILE$;")"
4080 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
4085 CAP$=OUTFILE$:GOSUB 2400:OUTFILE$=CAP$
4090 LOCATE CSRLIN-1,4 : PRINT OUTFILE$
4100 OPEN "R", 2, OUTFILE$, 1 : FIELD 2, 1 AS O$
4110 NBYTES = 0 : CKSUM = 0 : PRINT : PRINT "Working";
4120 WHILE NOT EOF(1)
4125 LINE INPUT #1, IN$ : IF LEN(IN$)=0 THEN 4180
4130 IF ASC(IN$)=59 THEN GOSUB 4250: GOTO 4180 ' remark handler
4140 FOR I = 1 TO LEN(IN$) STEP 2 : BT = VAL("&H"+MID$(IN$,I,2))
4150 NBYTES = NBYTES + 1 : CKSUM = (CKSUM + BT) MOD 2048 : IF NBYTES MOD 32 = 0 THEN PRINT ".";
4160 LSET O$= CHR$(BT) : PUT 2 : NEXT I
4180 WEND
4190 CLOSE : PRINT : PRINT : PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
4200 GOSUB 2200 : RETURN
4250 ' handle imbedded remarks
4255 IF LEFT$(IN$, 9) <> ";checksum" THEN 4270
4258 PRINT:PRINT :PRINT "Checksum mark found... ";
4260 CK = VAL(RIGHT$(IN$,LEN(IN$)-9))
4265 IF CK = CKSUM THEN PRINT "Checksum verified." ELSE PRINT "Checksum incorrect."
4270 RETURN
4290 RETURN ' go back to the wend
5000 '
5001 ' Convert to hex format
5002 '
5010 GOSUB 2300
5020 PRINT : PRINT "Enter full name of file to convert to .HEX format, including the extension."
5030 PRINT "-> "; : LINE INPUT INFILE$
5040 OPEN "I", 1, INFILE$ : CLOSE 1 ' test to see if it's there
5045 OPEN "R", 1, INFILE$, 1 : FIELD 1, 1 AS I$
5050 NBYTES = 0 : CKSUM = 0
5060 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+"."
5070 CAP$=LEFT$(INFILE$,INSTR(INFILE$,".")-1)+".HEX":GOSUB 2400:OUTFILE$=CAP$
5080 PRINT "Enter full name of output HEX file (press ENTER alone to use "; OUTFILE$;")"
5090 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
5095 LOCATE CSRLIN-1, 4 : PRINT OUTFILE$
5100 OPEN "O", 2, OUTFILE$
5105 PRINT : PRINT "Working";
5110 GET 1
5120 WHILE NOT EOF(1)
5130 PRINT #2, RIGHT$("0"+HEX$(ASC(I$)), 2);
5135 CKSUM = (CKSUM + ASC(I$)) MOD 2048 ' keep checksum running
5140 NBYTES = NBYTES + 1 : IF NBYTES MOD 32 = 0 THEN PRINT #2,:PRINT ".";
5150 GET 1 : WEND  : PRINT #2,
5155 PRINT #2, ";checksum "; CKSUM
5160 CLOSE : PRINT :PRINT: PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
5990 GOSUB 2200 : RETURN
6000 '
6001 ' files listing
6002 '
6020 NC = 3 : TITLE$="Diskette file listing"
6030 PRO$(1) = "List files on drive A" : PRO$(2) = "List files on drive B"
6035 PRO$(3) = "Return to main menu"
6040 GOSUB 8000 : IF CHOICE = 69 OR CHOICE = 3 THEN RETURN
6050 GOSUB 2300 : PRINT
6060 INPUT "What sort of files (i.e. COM, EXE, HEX)?  Press ENTER alone for all files"; EXT$
6065 IF LEN(EXT$)=0 THEN EXT$="*" ELSE IF LEN(EXT$)>3 THEN EXT$=LEFT$(EXT$,3)
6070 CAP$=EXT$ : GOSUB 2400 : EXT$=CAP$
6075 PRINT: IF EXT$="*" THEN PRINT "Files"; ELSE PRINT ".";EXT$;" files:";
6080 PRINT " on drive "; CHR$(64+CHOICE); ":" : PRINT
6190 FILES CHR$(64+CHOICE)+":*."+EXT$
6200 GOSUB 2200 : GOTO 6000
7000 '
7001 ' swap expert mode
7002 '
7010 EXPERT = 1 - EXPERT
7020 LOCATE 23, 10:PRINT "Expert mode is now "; : IF EXPERT THEN PRINT "on." ELSE PRINT "off."
7030 FOR I = 1 TO 1000: NEXT I : RETURN
7500 '
7501 ' end of program
7502 '
7510 CLOSE : DONE = -1: RETURN
8000 '
8001 ' menu processor
8010 GOSUB 2300 : LOCATE 7, FNA(TITLE$) : COLOR 1,7 : PRINT TITLE$ : COLOR 7,0
8020 LONGEST = 0 : FOR I = 1 TO NC : IF LEN(PRO$(I))>LONGEST THEN LONGEST = LEN(PRO$(I))
8030 NEXT I : CHOICE = 0 : XP = 38-LONGEST/2
8040 FOR I = 1 TO NC : LOCATE 8+I*2, XP :IF CHOICE = I THEN COLOR 8,1 ELSE COLOR 7,0
8050 PRINT CHR$(48+I);". "; PRO$(I) : NEXT I : COLOR 7,0
8085 LOCATE 21, 5: IF EXPERT THEN PRINT "EXPERT MODE: Press "; ELSE PRINT "Press ";
8090 IF NC = 2 THEN PRINT "1 or 2 "; ELSE FOR I = 1 TO NC-1 : PRINT CHR$(48+I);", "; : NEXT I : PRINT "or"; NC;
8095 IF EXPERT THEN PRINT "to make your choice." ELSE PRINT "to light up your choice, then press ENTER."
8100 COLOR 7,0: CM$="" : WHILE CM$="" : CM$=INKEY$ : WEND
8105 IF ASC(CM$)=27 THEN CHOICE = 69 : RETURN
8110 CM = ASC(CM$) - ASC("0") :IF CM >=1 AND CM <=NC THEN CHOICE = CM
8115 IF (EXPERT OR CM$=CHR$(13)) AND (CHOICE>0) THEN RETURN ELSE 8040
9900 '
9901 ' closing frame
9902 '
9910 'CLS     TDH
9920 LOCATE 12,8:PRINT "End of program.  Press the key marked 'F2' to run it again."
9925 KEY 2, "RUN"+CHR$(13) : KEY ON ' make sure that boast holds
9930 LOCATE 22,1 : DEF SEG = 64 : POKE 23, KSTATE 'recover former KB state
9940 'END         TDH
9950 CLS : SYSTEM : END   '   TDH
10000 '
10001 ' error handling stuff
10002 '
10010 IF ERL = 6190 THEN LOCATE CSRLIN-2, 1 : PRINT "No ."; EXT$; " files on this diskette.": RESUME NEXT
10020 IF ERL = 5040 OR ERL = 4050 THEN PRINT : PRINT "Unable to open input file." : CLOSE : RESUME 2200
10030 IF ERL = 5100 OR ERL = 4100 THEN PRINT : PRINT "Unable to open output file." : CLOSE : RESUME 2200
10999 CLS : LOCATE 12, 10: PRINT "Unexpected error #"; ERR; "at line"; ERL: ON ERROR GOTO : END
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #7, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  EXPLIST .EXE         CRC = D5 86

--> FILE:  EXPLISTR.EXE         CRC = 83 3E

--> FILE:  EXPOPT  .            CRC = 36 67

--> FILE:  EXPMAIL .EXE         CRC = 21 6D

--> FILE:  EXPLIST .DOC         CRC = 7A 00

--> FILE:  PRINT   .BAS         CRC = 39 2A

--> FILE:  PRINTNEC.BAS         CRC = 1F CF

--> FILE:  BIHEX   .BAS         CRC = 4D BD

--> FILE:  LF      .COM         CRC = 3F 90

 ---------------------> SUM OF CRCS = 10 DE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## EXPLIST.DOC

{% raw %}
```







                        Computerenergy's Expanding Lister






                                   Version 1.0




























                               Proprietary Notice

Expanding Lister is  a proprietary  product developed by Richard C.   Bemis and
distributed by Computerenergy Corporation, Denver, Colorado.  

Copyright 1982 by Richard C.  Bemis and Computerenergy Corporation.  All rights
reserved except those expressly granted to the user within this document.  

Computerenergy Corporation,  PO  Box  6267,  Denver,  CO  80206  (303) 233-9118
Source: ST6070 







                                      - i -
                                TABLE OF CONTENTS

Section                                                                    Page



CHAPTER 1  EXPANDING LISTER DISTRIBUTION NOTICE ...........................   1

CHAPTER 2  INTRODUCTION ...................................................   2

CHAPTER 3  SYSTEM SETUP ...................................................   3
   3.1  Copying Expanded Lister ...........................................   3
   3.2  Program Setup - Final Installation ................................   3

CHAPTER 4  OPERATION ......................................................   4
   4.1  Execution .........................................................   4
   4.2  Entering Responses ................................................   4
   4.3  Maillist/Donation Assistance ......................................   4
   4.4  Options ...........................................................   4
   4.5  Program Entry .....................................................   5

CHAPTER 5  EXPANDING LISTER FUNCTIONS .....................................   6
   5.1  Blank Lines .......................................................   6
   5.2  Loop Structures ...................................................   6
   5.3  Multi-Statement Lines .............................................   6
   5.4  Page Titles .......................................................   6
   5.5  Program Title .....................................................   6
   5.6  REMarks ...........................................................   6
      5.6.1  Standalone Remarks ...........................................   7
      5.6.2  Remarks which follow statements ..............................   7

CHAPTER 6  OPTIONS ........................................................   8
   6.1  Option Setting ....................................................   8
   6.2  Program Name Extension ............................................   8
   6.3  Beginning Program Line Number .....................................   8
   6.4  Ending Program Line Number ........................................   8
   6.5  Condensed Print On/Off ............................................   8
   6.6  Maximum Printer Line Length - Standard Print ......................   9
   6.7  Maximum Printer Line Length - Condensed Print .....................   9
   6.8  Number of Spaces to Indent per Level ..............................   9
   6.9  Number of Spaces to Indent per Multple Statement ..................   9
   6.10  Condensed Print ASCII Sequence ...................................   9

CHAPTER 7  PROGRAMMING SUGGESTIONS ........................................  10
   7.1  Standalone REMs to segment blocks of code .........................  10
   7.2  Routine Management ................................................  10
      7.2.1  Remarks after GOSUB statements to describe routines ..........  10
      7.2.2  GOSUB Library ................................................  10
   7.3  FOR ... NEXT Case structure .......................................  11
   7.4  Other Coding Recommendations for Lister Limitations ...............  11

CHAPTER 8  OTHER INFORMATION ..............................................  13
   8.1  Distribution Disk Contents ........................................  13
   8.2  System Requirements ...............................................  13
   8.3  Disclaimer ........................................................  13

CHAPTER 9  SUGGESTIONS, FEEDBACK, AND BUG REPORTS .........................  14


Expanding Lister                     - ii -          Computerenergy Corporation
                                    CHAPTER 1

                      EXPANDING LISTER DISTRIBUTION NOTICE

Expanding Lister is being distributed using the "Freeware"* approach.  To those
of you  unfamiliar with this approach, it works like this.  You may send either
a preformatted  single-sided disk  (or a prepaid contribution for  our disk and
mailer) to  us with a prepaid return mailer and we will send a complete copy of
the product.   If the product does not meet your needs, please pay nothing.  If
the product  does meet your needs, and you can use it, then we would appreciate
a  contribution of  whatever  you  feel  is  appropriate.  Naturally,  we  have
probably given  you  a clue  in several  places  as to what is  our "completely
unprejudiced opinion" of an appropriate contribution amount.  Contributions are
completely voluntary and much encouraged.  

Even if you  do not  contribute, you are encouraged to  copy and distribute the
product freely subject to the following restrictions: 

     1. Do not  distribute altered copies.  Note: You may distribute a separate
        set of modifications  to merge in if you  wish but they must be clearly
        identified  as  not originating  from Computerenergy.   If  you do make
        modifications, we  would like to see what you've done, if possible, for
        future versions.  

     2. The  product  is to  be distributed  as  a complete "distribution copy"
        produced  by the  copy  utility  provided  with  the product  for  this
        purpose.  

     3. No fee is to be charged for copying or distributing the program without
        an express written agreement with Computerenergy Corporation.  

     4. Commercial  sale of  this product  in any manner is prohibited  without
        Computerenergy's  written  permission.  Some  products will be released
        with this permission automatically given and expressly stated.  

User Groups/Clubs:  Computerenergy's  freeware  products may  be distributed by
Clubs and User Groups subject to the same restrictions.  We would ask only that
contributions to  our continuing efforts be encouraged by those performing such
distribution.  

Computer Bulletin Boards: Computerenergy's freeware products may be distributed
by  BBS's  subject  to the  same restrictions  and  contribution encouragement.
However, as the products tend to be large and consist of several files, we have
some concern as to the reliability of transmissions and length of connect time.
Perhaps disks could be mailed or just the documentation placed on the board for
browsers.  


* The  Freeware concept  was initially  developed by Andrew Fluegelman and  the
term  "FREEWARE"  is a  trademark of  The Headlands Press, Inc.  The  Headlands
Press provides  a catalog of information about Freeware products available from
multiple sources.   They may  be contacted at PO Box  862, Tiburon, CA 94920 or
Source: TCP204 or Compuserve: 71435,1235.  






Expanding Lister                     - 1 -           Computerenergy Corporation
                                    CHAPTER 2

                                  INTRODUCTION


Computerenergy's Expanding   Lister   was  created   to  make  programming  and
maintenance jobs  easier.   We  feel  that  a computer  should  help as much as
possible in its  own development efforts.  The Expanding  Lister is a tool that
performs a  number of formatting functions as a program is listed.  It provides
powerful aids to visualizing what is happening (and where) within a program.  

Expanding Lister will  do several things to help you improve the readability of
your  program  listings.   Most of  its functions  are  designed to display the
structure  of a  program without  the burden of any additional  effort from the
programmer.   However,  as  you become  more familiar  with  Expanding Lister's
capabilities, you may  wish to slightly adjust the  way you enter code in order
to take greater advantage of some of the features.  

After you have  setup the  system and read the Operation  chapter, we recommend
that you try the Lister on some of your own programs.  

If you  are  going to  "wing-it" without  reading further, then SAVE the  Basic
program to be listed in ASCII (true wingers understand this), type EXPLIST, and
good luck!  



































Expanding Lister                     - 2 -           Computerenergy Corporation
                                    CHAPTER 3

                                  SYSTEM SETUP


The Expanding Lister  distribution disk contains two versions of the program in
compiled  formats  along with  its options  file.   Compiled versions are being
distributed  as  they  execute much  faster.  The  first  is EXPLIST.EXE and is
compiled in  complete native format.  It is the fastest version, but requires a
larger amount of  disk space.  The second is  EXPLISTR.EXE which is smaller but
requires  the Basic  Compiler Run-Time  package which is not included  as it is
available only under license from IBM at $30/copy.  EXPLISTR is slightly slower
than EXPLIST and the speed difference is not noticable unless a large number of
statements are skipped over before listing begins.  

3.1  Copying Expanded Lister

     There is a batch file which copies the entire distribution disk for backup
     or distribution purposes.  We highly recommend making a backup copy before
     proceeding as it is safer and the mails can be slow.  

     Place the Expanding Lister  distribution disk in Drive A:  and a formatted
     disk without DOS on it in Drive B:.  While in DOS, type EXPCOPY and follow
     any instructions.  

3.2  Program Setup - Final Installation

     We recommend that  a copy  of the Lister and its  control file, EXPOPT, be
     placed  on a  Basic Program  Development DOS System disk if  possible.  If
     this is  your first  run-through, do not perform this  step yet - use your
     copy of the distribution disk and proceed to the Operation Chapter.  

     1. Copy the EXPLIST.EXE (or the EXPLISTR.EXE program if you have the Basic
        Run Time Module) to the System disk.  

             A Sample COPY command might be:

                            COPY B:EXPLIST.EXE A:

     2. Copy the EXPOPT file to the same disk.  This file must be available any
        time the EXPLIST(R) program is used.  

             A sample COPY command might be:

                            COPY B:EXPOPT A:














Expanding Lister                     - 3 -           Computerenergy Corporation
                                    CHAPTER 4

                                    OPERATION

4.1  Execution

     Starting the  Expanding  Lister  is simply  a matter  of  entering DOS and
     typing EXPLIST (or EXPLISTR) followed by the Enter key.  

4.2  Entering Responses

     You will quickly notice that all input requested by Expanding Lister is at
     the  bottom  of  the screen,  following a  prompt,  and contained within a
     "target".  We have found that a relatively constant area for data entry is
     superior  to  the  more  typical  design  of  "fill-in-the-blanks"  as  it
     minimizes  eye travel  and  usually  makes  for  a more  consistant  entry
     process.   All  responses  are completed  by pressing  the  Enter key.  In
     several prompts,  and on  the keyboard, the Enter key  is represented by a
     symbol roughly similar to this: (<-').  

     In addition  to  the  normal  editing  functions provided  for inner-field
     editing there are a couple of special functions available: 

               Field Erase:  Press the ESC key to erase an entry and start over
                             or to change a field that has a pre-loaded value.

               Field Backup: Press the Up-Arrow to "backup" to the previous
                             entry.  The current entry will be erased as you
                             "backup".
                             Note: You can "backup" as far as you like until
                             the very beginning of the program.

4.3  Maillist/Donation Assistance

     The first  screen you  see is  a title, information, and copyright  screen
     with a "Press Enter to continue or space for Maillist/Donation assistance"
     prompt.  Normally, you  will press the Enter key  to start the Lister.  If
     you press  the space  bar, a program will run  which will help you print a
     letter that you can send to us to be sure you are placed on our maillist -
     particularly important  if you did not receive your copy directly from us.
     Amazingly enough, the letter will even assist you in making a contribution
     but that is not required (nice though).  

     Note: The assistance  program - EXPMAIL - is contained on the distribution
     disk and  its copies but should not be copied to your DOS development disk
     as it  is  large, not  required, and  a  waste of disk space.   EXPMAIL is
     chained from the Expanded Lister as it resides on the distribution disk or
     may be executed directly from the distribution disk by typing EXPMAIL.  If
     you are using EXPLISTR, EXPMAIL must be executed standalone.  

4.4  Options

     There are a  number of options which may be changed as desired by the user
     in  order  to  tailor the  Lister to  his  configuration.  The options are
     usually changed only  for the current run but  may be permanently saved if
     desired.  As  the program is initially distributed, all options are set at
     the  most  commonly used  values.  We  would recommend that no options  be
     changed until you are more familiar with the Lister's functions.  

Expanding Lister                     - 4 -           Computerenergy Corporation
                                                           CHAPTER 4: OPERATION


4.5  Program Entry

     Up to 25 programs  may be specified to be  listed in sequence at one time.
     NOTE: Each program must be previously saved in ASCII format using the ",A"
     option of the Save command in Basic.  Example: 

                    SAVE "B:progname.S",A

     We use the  .S  extension  for  "Source"  to differentiate  between  Basic
     encoded programs  and those saved in ASCII.  This approach also provides 2
     copies of  each program  as it is developed -  a sort of automatic backup.
     Any program extension may be used.  

     If a program is read by the Lister that has accidentally not been saved in
     ASCII, the Lister will display an ERR=62 message and return to DOS.  

     For each program to be listed, the Lister asks for 3 pieces of information
     - program name, beginning line number to start listing, ending line number
     to end listing.  Each program name may be entered without an extension and
     the Lister  will append the Program Name Extension specified in the option
     list.   If  the  program is  entered with  an  extension, then the entered
     extension will be used.  

     Each line  number field  is pre-loaded  with a default value which  may be
     changed  most easily  by pressing  the ESC key and keying  a new number or
     backspacing and  re-keying the  number.  The default value is  selected by
     pressing the Enter key.  





























Expanding Lister                     - 5 -           Computerenergy Corporation
                                    CHAPTER 5

                           EXPANDING LISTER FUNCTIONS

5.1  Blank Lines

     A blank link  is  inserted  after  certain  Basic keywords  such  as GOTO,
     RETURN,  NEXT,  etc.  This  helps break  up the code visually at  probable
     control transfer or routine ending points.  

     A blank link is also inserted before each FOR and WHILE.  


5.2  Loop Structures

     Each statement within  a FOR ...  NEXT or WHILE ...  WEND loop is indented
     to indicate  that  it  is  in  control.  Nested  loops  are indicated with
     further  indentations.   The  indentations provide  a simple but effective
     visible structure to the program.  


5.3  Multi-Statement Lines

     In program  lines  that  contain  multiple  statements, each  statement is
     placed on a  separate line.  Statements 2 through  N are indented 2 spaces
     and preceeded by  colons.  This greatly enhances ledgibility  and provides
     much more space to make any necessary changes.  


5.4  Page Titles

     Each page  of the  program listing  is titled, dated, and time  stamped as
     well as paginated.  


5.5  Program Title

     A banner title is  printed at the beginning of  each program listing.  The
     title contains the name of the program being listed.  In addition, if line
     15 in a program is of the form: 

               15 ZTITLE$="Official Program Description/Title"

     then that  description  will  also be  included in  the  banner title as a
     separate line.   The  line  15  feature  maintains compatability  with  an
     upcoming product and is totally optional.  


5.6  REMarks

     Remark statements are used within a program to provide documentation about
     sections  of  the  code.   Many  programmers  provide  extra  highlighting
     statements around their  remarks to have them stand  out within a listing.
     We felt that the computer should automatically provide the highlighting.  

     For the purposes  of the Lister, there are two types of remark statements.
     The  first  is a  remark  on  its  own  statement number  which  we call a
     Standalone Remark.  The  other is a remark which  follows a statement or a

Expanding Lister                     - 6 -           Computerenergy Corporation
                                          CHAPTER 5: EXPANDING LISTER FUNCTIONS


     series of statements on a line.  Each has a separate type of highlighting.


5.6.1  Standalone Remarks

     Remarks which are  placed on  a separate line are printed  and highlighted
     with a  blank  line,  a  full  line of  asterisks,  the remark - centered,
     another full  line of  asterisks, and another blank line.   The remark may
     begin  with either  REM or  the single quote abbreviation.  If  there is a
     series of remarks, they will be included within a single highlight.  


5.6.2  Remarks which follow statements

     Remarks which follow  statements are  treated in one of two  ways.  If the
     remark uses the  single quote, then the remark  will be right-justified on
     the line  containing the last statement.  If the remark is a REM statement
     as the last  statement on the line following  one or more statements, then
     no highlighting will occur.  





































Expanding Lister                     - 7 -           Computerenergy Corporation
                                    CHAPTER 6

                                     OPTIONS

6.1  Option Setting

     As the Expanding  Lister begins its execution, it will display the current
     setting of all  of its options and ask  if you wish to change any of them.
     Any  changes  that are  made will  be effective for the current  run only.
     However, after the  changes are made, the Lister  asks if you wish to make
     them permanent.   If you respond "Y" then the current settings will become
     the automatic option  values from then on.  Of  course, you may change any
     option on any  run and then make the  new settings permanent as many times
     as you desire.  


6.2  Program Name Extension

     The Program Name Extension option is used by the Lister to concatenante to
     any  program  name that  is entered  without an extension.  We use  .S for
     "Source"  to  differentiate from  Basic encoded programs extensions (.BAS)
     but any extension is acceptable.  

     If a program name is entered with an extension, this option is ignored.  


6.3  Beginning Program Line Number

     The beginning program  line number option establishes a value that will be
     preloaded into the  Beginning Line Number prompt request  for each program
     to  be  listed.  The  value may  be changed at entry time  for any and all
     programs, if desired.  

     We tend to place  a significant number of commonly  used routines at lines
     10 -  9999 and therefore do not wish to list these routines over and over.
     The  beginning  value  we use  is  10000  but  any  valid line  number  is
     acceptable.  


6.4  Ending Program Line Number

     The ending  program line  number option  establishes a value that will  be
     preloaded into the  Ending Line Number prompt request  for each program to
     be  listed.  The  value  may  be  changed  at entry  time  for any and all
     programs, if desired.  

     The value we  use is  65529, which is the highest  valid line number for a
     Basic  program  and therefore  will list  to the end of the  program.  Any
     valid line number is acceptable.  


6.5  Condensed Print On/Off

     The Condensed Print On/Off  option is a "toggle" option.   When you select
     it, it  will reverse status from ON to OFF or OFF to ON.  This option will
     generate condensed or compressed print on Epson printers and thereby allow
     more levels  of indentation than would be otherwise available.  Titles and
     Remark highlighting are adjusted for condensed print.  

Expanding Lister                     - 8 -           Computerenergy Corporation
                                                             CHAPTER 6: OPTIONS


     The option is effective for all programs listed during the current run.  


6.6  Maximum Printer Line Length - Standard Print

     For standard (ie.   not condensed) print, this option contains the maximum
     print line  length available.  This value is used by the Lister in a Width
     statement.  


6.7  Maximum Printer Line Length - Condensed Print

     For condensed print,  this option  contains the maximum print line  length
     available.  This value is used by the Lister in a Width statement.  


6.8  Number of Spaces to Indent per Level

     The number of spaces  to indent per level option  contains the incremental
     "tab  value"  of spaces  that  is  used  for  each loop  control  level of
     indentation.  This  value is added to the indentation as each FOR or WHILE
     loop is encountered  and subtracted from the indentation  for each NEXT or
     WEND.  

     We recommend a  number of around 5 unless there is deep nesting of program
     loop levels.  


6.9  Number of Spaces to Indent per Multple Statement

     The number of  spaces to  indent per multiple statement is  the additional
     amount  of  indentation to  be added  to the current level for  the second
     through the last statement on a line as the statements are printed.  

     We recommend the standard value of 3 be maintained, if possible.  


6.10  Condensed Print ASCII Sequence

     The condensed print  ASCII sequence is a series of up to 5 3-digit decimal
     ASCII codes.   These codes  will be sent to your  printer if the condensed
     print option is  "ON".  Each code must contain  3 digits which may include
     leading zeroes if  necessary.  No embedded blanks or  other separators are
     allowed.  Enter as many codes as needed.  

     As distributed, this code contains the sequence for IBM/Epson printers.  










Expanding Lister                     - 9 -           Computerenergy Corporation
                                    CHAPTER 7

                             PROGRAMMING SUGGESTIONS

7.1  Standalone REMs to segment blocks of code

     In order  to   visually  segment  your  routines,  we  suggest  that  each
     subroutine be  titled with one (or more) standalone Remarks.  Depending on
     your  style, you  may also  wish to group your subroutines  in one area of
     your program.  With the Expanding Lister, it becomes much easier to locate
     routines.  

     There is an  ongoing debate about whether it is good practice to branch to
     Remark  statements.   If you  do,  it  is  easier  to insert  code  at the
     beginning  of  the routine.   However, some compression programs eliminate
     Remark  statements entirely  thus creating invalid line number references.
     The Basic  Compiler must also save some space for the REM statement if you
     branch to it.   Our feeling is that it  is better not to branch to Remarks
     if possible.  


7.2  Routine Management

7.2.1  Remarks after GOSUB statements to describe routines

     One of the more difficult aspects of using IBM's Basic for larger programs
     is  that  routines  are identified  solely with  line  numbers rather than
     labels or  names.  That's  not all bad until you  renumber the program and
     the numbers all change.  

     To assist your debugging  and make your program more  readable, we suggest
     placing a  remark  on  the  line  with each  significant  GOSUB statement.
     Example: 

               12100  GOSUB 22000  'Read Input

     Now, no matter  what 22000 is renumbered to, the comment will identify the
     routine.  The Expanding  Lister will move these remarks  over to the right
     side of  the page for easier reading.  Note: this can only be done for the
     last statement  on a multiple statement line as everything following the "
     ' " sign will be ignored.  


7.2.2  GOSUB Library

     Also for larger programs, we suggest placing a routine or GOSUB library at
     the end  of your program to help identify routine locations and functions.
     The form might be: 

               60000 REM Routine Library
               60010 GOSUB 22000  REM Read Input
               60020 GOSUB 11130  REM Process Calculations
               60030 GOSUB 32312  REM Output Line
                etc. - 1 per statement

     This code is  never executed,  but will automatically show the  effects of
     any renumbering.   After renumbering,  if you wish to GOSUB  to a routine,
     you can  easily determine  its new line number from  this list rather than

Expanding Lister                     - 10 -          Computerenergy Corporation
                                             CHAPTER 7: PROGRAMMING SUGGESTIONS


     searching through pages of code.  

     Note: the  use  of GOSUBs  in the  library is recommended rather than  the
     shorter GOTO  as the Expanding Lister will insert a blank line after every
     GOTO and  the library will not be as compact.  The word REM instead of the
     shorter " ' " is used as otherwise the Remark will be shifted to the right
     of the page and be more difficult to read.  


7.3  FOR ... NEXT Case structure

     Dr. Willard A.  Brown writes about a nifty method of adding some structure
     to  Basic  programs in  the September  issue of Personal Computer Age  (p.
     51-52  Vol 1.6  -  not  a  bad  magazine, by  the  way).  Essentially, his
     recommendation  is  an implementation  of SELECT  ...   CASE using FOR ...
     NEXT.  We've  tried it,  it works and when combined  with loop indentation
     provides a good visual structure.  Our variation (changes DO to CASEn%) of
     his recommendation: 

               FOR CASE1% (truth statement) TO -1
                    statement
                    statement
                    NEXT CASE1%

     Quoting from Dr.  Brown: "First a few words about truth statements for the
     beginners among you.   In IBM BASIC, a true  statement takes on a value of
     -1, while false statements are indicated with a 0." 

     "Here are a couple of simple examples of truth statements: 

               (Age>25) = -1 

               if age is 30.  If age age is 24, 

               (Age>25) = 0 

     "The FOR-NEXT construct  executes until the index counter (CASE1%, in this
     case) is greater  than the final value.  If  the truth statement is false,
     its already greater than the final value, and so the code section won't be
     executed.  If  the  truth  statement  is  true, the  code  section will be
     executed once.  For  more information on this, see  pages 3-22 and 4-88 in
     the BASIC manual.  For nested blocks of statements, be sure to use CASE2 ,
     CASE3 , etc.  to eliminate ambiguity." 

     That is the heart  of his suggestion, but you  might want to read the full
     article.   Be  aware that  although maintainability is improved, execution
     speed may slow, especially with the interpreter - the usual quality versus
     speed tradeoff.  (Yes, we used it in the Lister.) 

7.4  Other Coding Recommendations for Lister Limitations

     1. Keep REMark statements to under 65 characters unless condensed print is
        being  used.   If you  need more  room, use another remark on  the next
        line.  


Expanding Lister                     - 11 -          Computerenergy Corporation
                                             CHAPTER 7: PROGRAMMING SUGGESTIONS


     2. Always use  correct and  complete syntax.  Ex.  Do not  use PRINT "text
        (c/r) without a final quotation mark even though it works.  

     3. Use  only  a  single  NEXT per  FOR  or  a  single  WEND per  WHILE  as
        indentation  results  will  be incorrect.   The Basic Compiler requires
        this approach.  

     4. Try not to  use capital FOR, NEXT, WHILE,  WEND surrounded by blanks in
        literals as they will be treated as keywords.  

        We will  continue  to work  to remove  as many of these limitations  as
        possible.  












































Expanding Lister                     - 12 -          Computerenergy Corporation
                                    CHAPTER 8

                                OTHER INFORMATION

8.1  Distribution Disk Contents


          File Name       Description
          ------------    --------------------------------------

          EXPLIST.EXE     Fully compiled Lister
          EXPLISTR.EXE    Compiled for Compiler's Run Time Module
          EXPLIST.DOC     Documentation
          EXPOPT          Options File
          EXPMAIL.EXE     Maillist/Donation Assistance
          EXPCOPY.BAT     Copies Distribution Disk


8.2  System Requirements

     Expanding Lister requires an IBM PC with 64K, DOS 1.1, and at least 1 disk
     drive (2 disks highly recommended for development machines).  


8.3  Disclaimer

     All Computerenergy computer programs  are distributed on an "as  is" basis
     without warranty.  

     Computerenergy Corporation and/or any of its program authors shall have no
     liability or responsibility to customer or any other person or entity with
     respect to  any liability,  loss or damage caused or  alleged to be caused
     directly  or  indirectly   by  programs  distributed  in  any   manner  by
     Computerenergy Corporation,  including but not limited to any interruption
     of  service,  loss of  business or  anticipatory  profits or consequential
     damages resulting from the use or operation of such computer programs.  

     Note: Good  data  processing  procedure dictates  that the  user  test the
     program, run  and test sample sets of data, and run the system in parallel
     with the  system previously in use for a period of time adequate to insure
     that results of operation of the computer program are satisfactory.  


















Expanding Lister                     - 13 -          Computerenergy Corporation
                                    CHAPTER 9

                     SUGGESTIONS, FEEDBACK, AND BUG REPORTS

     If you  can  spare  the  time,  we  would  appreciate  your  feedback  and
     suggestions to  help us to improve the Lister.  As an added inducement, we
     will  also send  a free  Lister (corrected) to the first  person reporting
     each bug.   Immediate family  members of Computerenergy employees are  NOT
     eligible.  Valid bugs do not include obvious architectual limitations such
     as 52 indentation levels falling off the page, etc.  If possible, each bug
     reported  should include  a short-as-possible  printout  of the before and
     after  expansion  situation  with  explanatory  notes.   Our  unprejudiced
     judging panel  will make  "Bug Awards" when the spirit  moves them and, of
     course, their decisions are final.  

     We are also  aware of  some esthetic errors when operating  with the color
     video interface.  Those still remaining should be corrected soon, but we'd
     still like to hear about any you find.  

     Please address  correspondence  to  the address  on the  title  page.  (If
     you've lost  your title page, just send us a note and we'll send you a new
     one.) 





































Expanding Lister                     - 14 -          Computerenergy Corporation






















Expanding Lister     
```
{% endraw %}

## PRINT.BAS

{% raw %}
```bas
10 'PERSONAL COMPUTER AGE PRINTER UTILITY
20 '
30 '
40 '************************************************************************
50 '
60 DEFINT A-Z
70 CLS
80 KEY OFF
90 CLOSE
100 '
110 'DEFINE AND INTIALIZE VARIABLES USED TO PRINT BANNER
120 C =0             ' COLUMN
130 DIM CC(9)        'CHARACTER CODE FOR EACH CHARACTER IN FILE NAME
140 CP=0             'CHARACTER POSITION
150 D=0              'DOT
160 DA=0             'DOT ADDRESS
170 L = 0           ' LENGTH OF FILE NAME
180 M=0              ' MASK
190 DIM PL(131)      'PRINT LINE
200 PS=64            'SYMBOL TO PRINT (64 -@)
210 R=0              'ROW
220 '
230 'DEFINE AND INITALIZE VARIABLES USED TO PRINT THE FILE
240 LINE.CTR=0       'COUNTS LINES ON A PAGE
250 PAGE.CTR=1       'COUNTS PAGES
260 LINES.PG=66      'LINES ON A PAGE, TOTAL
270 LINES.PRT=60     'LINES ON A PAGE, PRINTED
280 FIRST.LINE=1     'FIRST LINE IN FILE TO PRINT
290 LAST.LINE=30000  ' LAST LINE IN FILE TO PRINT
300 CUR.LINE=1       'CURRENT LINE NUMBER (IN FILE) BEING PRINTED
310 '
320 'THE FOLLOWING ARE FLAGS. 1= TRUE, 0= FALSE
330 BANNER=1         'PRINT THE FILE NAME AS A BANNER
340 PRINT.COMP=0     'SET PRINTER TO COMPRESSED MODE
350 '
360 'CONSTANTS
370 FORM.FEED=&HC
380 '
390 '*************************************************************************
400 'PICK UP THE ATTRIBUTES
410 '
420 'FILE NAME
430 ON ERROR GOTO 450
440 GOTO 470             'JUMP OVER ERROR ROUTINE
450 PRINT "THAT FILE DOES NOT EXIST. PLEASE REENTER."
460 RESUME 490
470 PRINT TAB(20) "PRINTER UTILITY":PRINT
480 PRINT "THIS IS A PROGRAM TO PRINT A BANNER FOR A PROGRAM FILE LISTING":PRINT
490 PRINT:LINE INPUT "FILE NAME (INCLUDE EXTENSION): ";FILE.NAME$
500 OPEN FILE.NAME$ FOR INPUT AS #1
510 '
520 'FIRST LINE
530 ON ERROR GOTO 550
540 GOTO 580              'JUMP OVER ERROR MESSAGE
550 RESUME 560
560 PRINT "YOUR RESPONSE MUST BE A NUMBER BETWEEN 1 AND 30000."
570 PRINT "PLEASE REENTER."
580 PRINT:PRINT"FIRST LINE TO PRINT (";FIRST.LINE;"): ";
590 LINE INPUT TEMP$:FIRST.LINE = VAL(TEMP$)
600 IF FIRST.LINE =0 THEN FIRST.LINE =1
610 IF FIRST.LINE<>1 THEN BANNER=0
620 IF (FIRST.LINE <1) OR (FIRST.LINE>30000) THEN GOTO 560
630 '
640 'LAST LINE
650 ON ERROR GOTO 670
660 GOTO 700           'JUMP OVER ERROR MESSAGE
670 RESUME 680
680 PRINT "YOUR RESPONSE MUST BE A NUMBER BETWEEN 1 AND 30000 AND MUST BE"
690 PRINT "GREATER THAN THE FIRST LINE. PLEASE REENTER."
700 PRINT:PRINT "LAST LINE TO PRINT (";LAST.LINE;"): ";
710 LINE INPUT TEMP$: IF TEMP$="" THEN GOTO 730
720 LAST.LINE=VAL(TEMP$)
730 IF LAST.LINE<>30000 THEN BANNER=0
740 IF (LAST.LINE<=FIRST.LINE) OR (LAST.LINE>30000) THEN GOTO 680
750 ON ERROR GOTO 0
760 '
770 'COMPRESSED PRINTING?
780 PRINT:LINE INPUT "COMPRESSED PRINTING? (N): ";TEMP$
790 IF (TEMP$="Y") OR (TEMP$="y") THEN PRINT.COMP =1
800 '
810 'PICK UP FILE DATE
820 DEF SEG
830 DAY=PEEK(VARPTR(#1)+21)
840 YEAR=PEEK(VARPTR(#1)+22)
850 MONTH= ((YEAR AND 1)*8)+((DAY AND 224)/32)
860 MONTH$= MID$(STR$(MONTH),2)
870 YEAR =((YEAR AND 254)/2)+80
880 YEAR$=MID$(STR$(YEAR),2)
890 DAY=DAY AND 31
900 DAY$=MID$(STR$(DAY),2)
910 FILE.DATE$=MONTH$+"/"+DAY$+"/"+YEAR$
920 '
930 'PICK UP FILE NAME, STRIP DEVICE, AND CONVERT TO UPPER CASE
940 L=LEN(FILE.NAME$)
950 FOR I=1 TO LEN(FILE.NAME$)
960      TEMP=ASC(MID$(FILE.NAME$,I,1))
970      IF TEMP = ASC(".") THEN L= I-1
980      IF TEMP = ASC(":") THEN                                                           FILE.NAME$=MID$(FILE.NAME$,(I+1)):GOTO 940
990      IF TEMP > 96 THEN TEMP = TEMP -32
1000      MID$(FILE.NAME$,I,1)=CHR$(TEMP):NEXT I
1010 '
1020 'PRINT THE BANNER
1030 'RESTORE PRINTER DEFAULT CHARACTERISTICS
1040 LPRINT CHR$(20):LPRINT CHR$(27) + "F":LPRINT CHR$(27) +"H"
1050 IF BANNER=0 THEN GOTO 1380
1060 'POINT DATA SEGMENT TO ROM
1070 DEF SEG=&HF000
1080 'SET PRINTER TO COMPRESSED MODE, 132 CHARACTERS PER LINE
1090 LPRINT CHR$(15);:WIDTH "LPT1:",132
1100 'PRINT TOP BORDER
1110 LPRINT:LPRINT:LPRINT:LPRINT STRING$(131,45)
1120 FOR I=0 TO 2:LPRINT STRING$(131,"*"):NEXT I
1130 LPRINT:LPRINT:LPRINT
1140 'INITIALIZE CHARACTER MASK
1150 J=256
1160 FOR I= 1 TO 8
1170      J=J/2:M(I-1)=J
1180      IF I<=L THEN CC(I)=ASC(MID$(FILE.NAME$,I,1))
1190      NEXT I
1200 FOR R=0 TO 7
1210      FOR I= 0 TO 130:PL(I)=32:NEXT I
1220      IF L>7 THEN CP=66-(L*8) ELSE CP=66-(L*9)
1230      FOR X=1 TO L
1240            DA = &HFA6E +(CC(X)*8)
1250            FOR C=0 TO 14 STEP 2
1260                 D=PEEK(DA+R):IF (D AND M(C/2))=0 THEN GOTO 1280
1270                 PL(CP+C)=PS:PL(CP+C+1)=PS
1280                 NEXT C
1290            IF L>7 THEN CP=CP+16 ELSE CP=CP+18:NEXT X
1300      FOR I=0 TO 130:LPRINT CHR$(PL(I));:NEXT I
1310      LPRINT:NEXT R
1320 LPRINT:LPRINT
1330 FOR I=0 TO 2:LPRINT STRING$(131,"*"):NEXT I
1340 LPRINT STRING$(131,45):LPRINT CHR$(18);:WIDTH "LPT1:",80
1350 LPRINT:LPRINT "FILE: "+FILE.NAME$:LPRINT "DATE: "+FILE.DATE$
1360 LPRINT CHR$(FORM.FEED)
1370 '
1380 'PRINT THE FILE
1390 IF PRINT.COMP=1 THEN LPRINT CHR$(15);:WIDTH "LPT1:",132
1400 ON ERROR GOTO 0
1410 'PREPARE PAGE HEADER
1420 SPACES=(70-(LEN(FILE.NAME$)+LEN(FILE.DATE$)))/2
1430 IF PRINT.COMP=1 THEN SPACES =SPACES+26
1440 HEADER$=FILE.DATE$+SPACE$(SPACES)+FILE.NAME$+SPACE$(SPACES)+"PAGE "
1450 'ADVANCE TO FIRST LINE TO PRINT
1460 IF FIRT.LINE=1 THEN GOTO 1510
1470 FOR CUR.LINE=1 TO FIRST.LINE-1
1480     IF EOF(1) THEN GOTO 1640
1490     LINE INPUT #1, TEMP$:NEXT CUR.LINE
1500 '
1510 'PRINT TO LAST LINE
1520       PAGE=1
1530 ON ERROR GOTO 1620
1540 FOR CUR.LINE=FIRST.LINE TO LAST.LINE
1550     IF EOF(1) THEN GOTO 1640
1560     IF LINE.CTR=0 THEN LPRINT HEADER$;PAGE:                                           PAGE=PAGE+1:LINE.CTR = LINE.CTR +4:LPRINT:LPRINT:LPRINT
1570     LINE INPUT #1, TEMP$:LPRINT TEMP$:LINE.CTR=LINE.CTR+1
1580     IF LINE.CTR<LINES.PRT THEN GOTO 1600
1590     LPRINT CHR$(FORM.FEED):LINE.CTR=0
1600     NEXT CUR.LINE
1610  GOTO 1640                 'SKIP OVER TIMEOUT ERROR HANDLING
1620  IF ERR=24 THEN RESUME      'ERROR 24 CAUSED BY DEVICE TIMEOUT
1630  '
1640 'CLEAN UP
1650 LPRINT CHR$(FORM.FEED):LPRINT CHR$(18);:CLOSE #1:SYSTEM
```
{% endraw %}

## PRINTNEC.BAS

{% raw %}
```bas
10 'PERSONAL COMPUTER AGE PRINTER UTILITY
20 '
30 '
40 '************************************************************************
50 '
60 DIM M(255)
70 DEFINT A-Z
80 CLS
90 KEY OFF
100 CLOSE
110 '
120 'DEFINE AND INTIALIZE VARIABLES USED TO PRINT BANNER
130 C =0             ' COLUMN
140 DIM CC(9)        'CHARACTER CODE FOR EACH CHARACTER IN FILE NAME
150 CP=0             'CHARACTER POSITION
160 D=0              'DOT
170 DA=0             'DOT ADDRESS
180 L = 0           ' LENGTH OF FILE NAME
190 M=0              ' MASK
200 DIM PL(131)      'PRINT LINE
210 PS=64            'SYMBOL TO PRINT (64 -@)
220 R=0              'ROW
230 '
240 'DEFINE AND INITALIZE VARIABLES USED TO PRINT THE FILE
250 LINE.CTR=0       'COUNTS LINES ON A PAGE
260 PAGE.CTR=1       'COUNTS PAGES
270 LINES.PG=66      'LINES ON A PAGE, TOTAL
280 LINES.PRT=60     'LINES ON A PAGE, PRINTED
290 FIRST.LINE=1     'FIRST LINE IN FILE TO PRINT
300 LAST.LINE=30000  ' LAST LINE IN FILE TO PRINT
310 CUR.LINE=1       'CURRENT LINE NUMBER (IN FILE) BEING PRINTED
320 '
330 'THE FOLLOWING ARE FLAGS. 1= TRUE, 0= FALSE
340 BANNER=1         'PRINT THE FILE NAME AS A BANNER
350 PRINT.COMP=0     'SET PRINTER TO COMPRESSED MODE
360 '
370 'CONSTANTS
380 FORM.FEED=&HC
390 '
400 '*************************************************************************
410 'PICK UP THE ATTRIBUTES
420 '
430 'FILE NAME
440 ON ERROR GOTO 460
450 GOTO 480             'JUMP OVER ERROR ROUTINE
460 PRINT "THAT FILE DOES NOT EXIST. PLEASE REENTER."
470 RESUME 500
480 PRINT TAB(20) "PRINTER UTILITY":PRINT
490 PRINT "THIS IS A PROGRAM TO PRINT A BANNER FOR A PROGRAM FILE LISTING":PRINT
500 PRINT:LINE INPUT "FILE NAME (INCLUDE EXTENSION): ";FILE.NAME$
510 OPEN FILE.NAME$ FOR INPUT AS #1
520 '
530 'FIRST LINE
540 ON ERROR GOTO 560
550 GOTO 590              'JUMP OVER ERROR MESSAGE
560 RESUME 570
570 PRINT "YOUR RESPONSE MUST BE A NUMBER BETWEEN 1 AND 30000."
580 PRINT "PLEASE REENTER."
590 PRINT:PRINT"FIRST LINE TO PRINT (";FIRST.LINE;"): ";
600 LINE INPUT TEMP$:FIRST.LINE = VAL(TEMP$)
610 IF FIRST.LINE =0 THEN FIRST.LINE =1
620 IF FIRST.LINE<>1 THEN BANNER=0
630 IF (FIRST.LINE <1) OR (FIRST.LINE>30000) THEN GOTO 570
640 '
650 'LAST LINE
660 ON ERROR GOTO 680
670 GOTO 710           'JUMP OVER ERROR MESSAGE
680 RESUME 690
690 PRINT "YOUR RESPONSE MUST BE A NUMBER BETWEEN 1 AND 30000 AND MUST BE"
700 PRINT "GREATER THAN THE FIRST LINE. PLEASE REENTER."
710 PRINT:PRINT "LAST LINE TO PRINT (";LAST.LINE;"): ";
720 LINE INPUT TEMP$: IF TEMP$="" THEN GOTO 740
730 LAST.LINE=VAL(TEMP$)
740 IF LAST.LINE<>30000 THEN BANNER=0
750 IF (LAST.LINE<=FIRST.LINE) OR (LAST.LINE>30000) THEN GOTO 690
760 ON ERROR GOTO 0
770 '
780 'COMPRESSED PRINTING?
790 PRINT:LINE INPUT "COMPRESSED PRINTING? (N): ";TEMP$
800 IF (TEMP$="Y") OR (TEMP$="y") THEN PRINT.COMP =1
810 '
820 'PICK UP FILE DATE
830 DEF SEG
840 DAY=PEEK(VARPTR(#1)+21)
850 YEAR=PEEK(VARPTR(#1)+22)
860 MONTH= ((YEAR AND 1)*8)+((DAY AND 224)/32)
870 MONTH$= MID$(STR$(MONTH),2)
880 YEAR =((YEAR AND 254)/2)+80
890 YEAR$=MID$(STR$(YEAR),2)
900 DAY=DAY AND 31
910 DAY$=MID$(STR$(DAY),2)
920 FILE.DATE$=MONTH$+"/"+DAY$+"/"+YEAR$
930 '
940 'PICK UP FILE NAME, STRIP DEVICE, AND CONVERT TO UPPER CASE
950 L=LEN(FILE.NAME$)
960 FOR I=1 TO LEN(FILE.NAME$)
970      TEMP=ASC(MID$(FILE.NAME$,I,1))
980      IF TEMP = ASC(".") THEN L= I-1
990      IF TEMP = ASC(":") THEN                                                           FILE.NAME$=MID$(FILE.NAME$,(I+1)):GOTO 950
1000      IF TEMP > 96 THEN TEMP = TEMP -32
1010      MID$(FILE.NAME$,I,1)=CHR$(TEMP):NEXT I
1020 '
1030 'PRINT THE BANNER
1040 'RESTORE PRINTER DEFAULT CHARACTERISTICS
1050 LPRINT CHR$(15):LPRINT CHR$(27) + "N":LPRINT CHR$(27);CHR$(78)
1060 IF BANNER=0 THEN GOTO 1390
1070 'POINT DATA SEGMENT TO ROM
1080 DEF SEG=&HF000
1090 'SET PRINTER TO COMPRESSED MODE, 132 CHARACTERS PER LINE
1100 LPRINT CHR$(27);CHR$(81):WIDTH "LPT1:",136
1110 'PRINT TOP BORDER
1120 LPRINT:LPRINT:LPRINT:LPRINT STRING$(131,45)
1130 FOR I=0 TO 2:LPRINT STRING$(131,"*"):NEXT I
1140 LPRINT:LPRINT:LPRINT
1150 'INITIALIZE CHARACTER MASK
1160 J=256
1170 FOR I= 1 TO 8
1180      J=J/2:M(I-1)=J
1190      IF I<=L THEN CC(I)=ASC(MID$(FILE.NAME$,I,1))
1200      NEXT I
1210 FOR R=0 TO 7
1220      FOR I= 0 TO 130:PL(I)=32:NEXT I
1230      IF L>7 THEN CP=66-(L*8) ELSE CP=66-(L*9)
1240      FOR X=1 TO L
1250            DA = &HFA6E +(CC(X)*8)
1260            FOR C=0 TO 14 STEP 2
1270                 D=PEEK(DA+R):IF (D AND M(C/2))=0 THEN GOTO 1290
1280                 PL(CP+C)=PS:PL(CP+C+1)=PS
1290                 NEXT C
1300            IF L>7 THEN CP=CP+16 ELSE CP=CP+18:NEXT X
1310      FOR I=0 TO 130:LPRINT CHR$(PL(I));:NEXT I
1320      LPRINT:NEXT R
1330 LPRINT:LPRINT
1340 FOR I=0 TO 2:LPRINT STRING$(131,"*"):NEXT I
1350 LPRINT STRING$(131,45):LPRINT CHR$(27);CHR$(78):WIDTH "LPT1:",80
1360 LPRINT:LPRINT "FILE: "+FILE.NAME$:LPRINT "DATE: "+FILE.DATE$
1370 LPRINT CHR$(FORM.FEED)
1380 '
1390 'PRINT THE FILE
1400 IF PRINT.COMP=1 THEN LPRINT CHR$(27);CHR$(81):WIDTH "LPT1:",136
1410 ON ERROR GOTO 0
1420 'PREPARE PAGE HEADER
1430 SPACES=(70-(LEN(FILE.NAME$)+LEN(FILE.DATE$)))/2
1440 IF PRINT.COMP=1 THEN SPACES =SPACES+26
1450 HEADER$=FILE.DATE$+SPACE$(SPACES)+FILE.NAME$+SPACE$(SPACES)+"PAGE "
1460 'ADVANCE TO FIRST LINE TO PRINT AND SET TABS
1470 LPRINT CHR$(27);"(";"009,017,030,040,050.";
1480 IF FIRT.LINE=1 THEN GOTO 1530
1490 FOR CUR.LINE=1 TO FIRST.LINE-1
1500     IF EOF(1) THEN GOTO 1660
1510     LINE INPUT #1, TEMP$:NEXT CUR.LINE
1520 '
1530 'PRINT TO LAST LINE
1540       PAGE=1
1550 ON ERROR GOTO 1640
1560 FOR CUR.LINE=FIRST.LINE TO LAST.LINE
1570     IF EOF(1) THEN GOTO 1660
1580     IF LINE.CTR=0 THEN LPRINT HEADER$;PAGE:                                           PAGE=PAGE+1:LINE.CTR = LINE.CTR +4:LPRINT:LPRINT:LPRINT
1590     LINE INPUT #1, TEMP$:LPRINT TEMP$:LINE.CTR=LINE.CTR+1
1600     IF LINE.CTR<LINES.PRT THEN GOTO 1620
1610     LPRINT CHR$(FORM.FEED):LINE.CTR=0
1620     NEXT CUR.LINE
1630  GOTO 1660                 'SKIP OVER TIMEOUT ERROR HANDLING
1640  IF ERR=24 THEN RESUME      'ERROR 24 CAUSED BY DEVICE TIMEOUT
1650  '
1660 'CLEAN UP
1670 LPRINT CHR$(FORM.FEED):LPRINT CHR$(27);CHR$(78):CLOSE #1:SYSTEM
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0007

     Volume in drive A has no label
     Directory of A:\

    BIHEX    BAS      7808  12-24-82  12:47a
    CRC      TXT       980  11-09-84   7:46a
    CRCK4    COM      1536  10-21-82   7:54p
    EXPLIST  DOC     34176  11-12-82  12:24a
    EXPLIST  EXE     48000  11-13-82   4:30a
    EXPLISTR EXE     19584  11-13-82   4:47a
    EXPMAIL  EXE     34176  11-13-82   5:06a
    EXPOPT             128  12-23-82  11:58p
    LF       COM       896  11-17-82   1:10a
    PRINT    BAS      5504  12-22-82   3:14p
    PRINTNEC BAS      5504  12-24-82  12:40a
           11 file(s)     158292 bytes
                               0 bytes free
