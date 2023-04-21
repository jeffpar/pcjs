---
layout: page
title: "PC-SIG Diskette Library (Disk #8)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0008/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0008"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CROSSREF"

    Here's an excellent Shareware BASIC programming tool that provides a
    cross-referenced listing of variables referenced in the construction of
    a BASIC program. Listing shows what and where the variable has been
    used in the source code.
    
    The cross-referenced package is put into text file format which the
    programmer can either punch up on the screen or print out for future
    reference. Crossref is one of those "glad-to-have" tools that save the
    programmer from re-inventing the wheel with each project.
    
    How to Start: Read and then print the file CROSSREF.DOC.  The
    directions to run the programs are on that file.
    
    File Descriptions:
    
    CROSSREF DOC  Documentation file
    CRMAIL   EXE  Generates a reply/contribution letter to the author
    CROSSREF EXE  Extensive cross-reference generator for BASIC programs
    MONITOR  DOC  Documentation file
    MONITOR  BAS  BASIC subroutines for formatted screen displays
    CROSSOPT      Options file
    CROSSWDS DAT  Data file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #8, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  MONITOR .DOC         CRC = B2 50

--> FILE:  CROSSREF.DOC         CRC = 53 ED

--> FILE:  CROSSWDS.DAT         CRC = 8F 1A

--> FILE:  CROSSREF.EXE         CRC = E6 AB

--> FILE:  CRMAIL  .EXE         CRC = C0 A3

--> FILE:  MONITOR .BAS         CRC = D9 B4

--> FILE:  CROSSOPT.            CRC = 9D C1

 ---------------------> SUM OF CRCS = B4 1A

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CROSSREF.DOC

{% raw %}
```







                            Computerenergy's CROSSREF

                             Cross Reference Utility






                                   Version 1.0


























                               Proprietary Notice

CROSSREF is  a  proprietary   product  developed  by  Richard  C.    Bemis  and
distributed by Computerenergy Corporation, Denver, Colorado.  

Copyright 1982 by Richard C.  Bemis and Computerenergy Corporation.  All rights
reserved except those expressly granted to the user within this document.  

Computerenergy Corporation,  PO  Box  6267,  Denver,  CO  80206  (303) 233-9118
Source: ST6070 







                                      - i -
                                TABLE OF CONTENTS

Section                                                                    Page



CHAPTER 1  CROSSREF DISTRIBUTION NOTICE ...................................   1

CHAPTER 2  INTRODUCTION ...................................................   2

CHAPTER 3  SYSTEM SETUP ...................................................   3
   3.1  Copying CROSSREF ..................................................   3
   3.2  Program Setup - Final Installation ................................   3

CHAPTER 4  OPERATION ......................................................   4
   4.1  Execution .........................................................   4
   4.2  Entering Responses ................................................   4
   4.3  Maillist/Donation Assistance ......................................   4
   4.4  Program Entry .....................................................   4

CHAPTER 5  OTHER INFORMATION ..............................................   6
   5.1  Distribution Disk Contents ........................................   6
   5.2  System Requirements ...............................................   6
   5.3  Disclaimer ........................................................   6

CHAPTER 6  SUGGESTIONS, FEEDBACK, AND BUG REPORTS .........................   7

































CROSSREF                             - ii -          Computerenergy Corporation
                                    CHAPTER 1

                          CROSSREF DISTRIBUTION NOTICE

CROSSREF is being  distributed using the "Freeware"* approach.  To those of you
unfamiliar with  this  approach, it  works like  this.   You may send either  a
preformatted  single-sided  disk (or  a prepaid  contribution  for our disk and
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






CROSSREF                             - 1 -           Computerenergy Corporation
                                    CHAPTER 2

                                  INTRODUCTION


Computerenergy's Cross   Reference   was   created  to   make  programming  and
maintenance jobs  easier.   We  feel  that  a computer  should  help as much as
possible in  its own  development efforts.  CROSSREF is a  tool that produces a
cross-reference  for  each reference  to a  variable or a line number  within a
program.  



After you have  setup the  system and read the Operation  chapter, we recommend
that you  try  CROSSREF  on some  of your  own  programs.  If you are  going to
"wing-it"  without   reading  further,  then  SAVE  the  Basic  program  to  be
cross-referenced in  ASCII (true  wingers understand this), type CROSSREF,  and
good luck!  









































CROSSREF                             - 2 -           Computerenergy Corporation
                                    CHAPTER 3

                                  SYSTEM SETUP


The Cross  Reference  distribution disk  contains a  version  of the program in
compiled  formats  along  with its  Syntax file.   Compiled  versions are being
distributed as they execute much faster.  

3.1  Copying CROSSREF

     There is a batch file which copies the entire distribution disk for backup
     or distribution purposes.  We highly recommend making a backup copy before
     proceeding as it is safer and the mails can be slow.  

     Place the Cross  Reference distribution  disk in Drive A: and  a formatted
     disk without  DOS on it in Drive B:.  While in DOS, type CRCOPY and follow
     any instructions.  

3.2  Program Setup - Final Installation

     We recommend that a  copy of CROSSREF and its  control file, CROSSWDS.DAT,
     be placed  on a Basic Program Development DOS System disk if possible.  If
     this is  your first  run-through, do not perform this  step yet - use your
     copy of the distribution disk and proceed to the Operation Chapter.  

     1. Copy CROSSREF.EXE to the System disk.  

             A Sample COPY command might be:

                            COPY B:CROSSREF.EXE A:

     2. Copy  the CROSSWDS.DAT  file  to  the  same  disk.  This  file  must be
        available any time CROSSREF program is used.  

             A sample COPY command might be:

                            COPY B:CROSSWDS.DAT A:





















CROSSREF                             - 3 -           Computerenergy Corporation
                                    CHAPTER 4

                                    OPERATION

4.1  Execution

     Starting Cross  Reference is  simply a  matter of entering DOS and  typing
     CROSSREF followed by the Enter key.  

4.2  Entering Responses

     You will quickly  notice that all input requested by Cross Reference is at
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
     prompt.  Normally, you will press the Enter key to start CROSSREF.  If you
     press the space bar, a program will run which will help you print a letter
     that you  can  send  to us  to be  sure  you are placed on  our maillist -
     particularly important  if you did not receive your copy directly from us.
     Amazingly enough, the letter will even assist you in making a contribution
     but that is not required (nice though).  

     Note: The assistance program  - CRMAIL - is contained  on the distribution
     disk and  its copies but should not be copied to your DOS development disk
     as it  is  large,  not required,  and a  waste  of disk space.  CRMAIL  is
     chained  from CROSSREF  as it  resides on the distribution disk  or may be
     executed directly from the distribution disk by typing CRMAIL.  

4.4  Program Entry

     Up to 25 programs  may be specified to be  listed in sequence at one time.
     NOTE: Each program must be previously saved in ASCII format using the ",A"
     option of the Save command in Basic.  Example: 

                    SAVE "B:progname.S",A

     We use the  .S  extension  for  "Source"  to differentiate  between  Basic

CROSSREF                             - 4 -           Computerenergy Corporation
                                                           CHAPTER 4: OPERATION


     encoded programs  and those saved in ASCII.  This approach also provides 2
     copies of  each program  as it is developed -  a sort of automatic backup.
     Any program extension may be used.  

     If a program is  read by CROSSREF that has  accidentally not been saved in
     ASCII, CROSSREF will display an ERR=62 message and return to DOS.  

     For each program to be listed, CROSSREF asks for 3 pieces of information -
     program name, beginning  line number to start listing,  ending line number
     to end listing.  Each program name may be entered without an extension and
     CROSSREF will  append the a default Program Name Extension = ".S".  If the
     program is entered  with an extension, then the  entered extension will be
     used.  

     Each line  number field  is pre-loaded  with a default value which  may be
     changed  most easily  by pressing  the ESC key and keying  a new number or
     backspacing and  re-keying the  number.  The default value is  selected by
     pressing the Enter key.  






































CROSSREF                             - 5 -           Computerenergy Corporation
                                    CHAPTER 5

                                OTHER INFORMATION

5.1  Distribution Disk Contents


          File Name       Description
          ------------    --------------------------------------

          CROSSREF.EXE    Compiled CROSSREF
          CROSSREF.DOC    Documentation
          CROSSWDS.DAT    Basic Syntax File
          CRMAIL.EXE      Maillist/Donation Assistance
          CRCOPY.BAT      Copies Distribution Disk - both CROSSREF and MONITOR


5.2  System Requirements

     CROSSREF requires an IBM  PC with 64K, DOS 1.1,  and at least 1 disk drive
     (2 disks highly recommended for development machines).  


5.3  Disclaimer

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



















CROSSREF                             - 6 -           Computerenergy Corporation
                                    CHAPTER 6

                     SUGGESTIONS, FEEDBACK, AND BUG REPORTS

     If you  can  spare  the  time,  we  would  appreciate  your  feedback  and
     suggestions to  help us  to improve CROSSREF.  As an  added inducement, we
     will also send  a free CROSSREF (corrected) to  the first person reporting
     each bug.   Immediate family  members of Computerenergy employees are  NOT
     eligible.    If   possible,   each   bug   reported   should   include   a
     short-as-possible  printout  of  the reference  situation with explanatory
     notes.   Our unprejudiced  judging panel  will make "Bug Awards" when  the
     spirit moves them and, of course, their decisions are final.  

     We are also  aware of  some esthetic errors when operating  with the color
     video interface.  Those still remaining should be corrected soon, but we'd
     still like to hear about any you find.  

     Please address  correspondence  to  the address  on the  title  page.  (If
     you've lost  your title page, just send us a note and we'll send you a new
     one.) 







































CROSSREF                             - 7 -           Computerenergy Corporation






















CROSSREF          
```
{% endraw %}

## MONITOR.BAS

{% raw %}
```bas
10 REM MONITOR
15 ZTITLE$="Program Title Here"
20 GOTO 30
25 END:REM Put Program Exit Here
30 ZHELPSW%=1:ZCSW%=0:ZW%=78
35 SCREEN 0,0,0:WIDTH 80:CLS:OPTION BASE 1
40 KEY OFF
45 ZB1$=STRING$(3,219):ZB2$=STRING$(79,219)
75 ZTOF$=CHR$(12):ZENT$="("+CHR$(17)+ZSHL$+ZSLR$+")":ZTFAC=425
80 DIM ZMENU$(15),ZMLEN%(15)
85 ZE$=" Not Available at this Point":ZDT$=DATE$:ZDT$=LEFT$(ZDT$,2)+"/"+MID$(ZDT$,4,2)+"/"+RIGHT$(ZDT$,2)
90 Z=6:GOSUB 100:GOTO 10000
95 REM Branch Table
100 LOCATE ,,0:ON Z GOSUB 115,675,740,750,785,805,830,850,860,880,905,915,925,935,945,975,985,1000,1015,1040,1050,1060,1070,1085,1095,1105,1120,1125,1135
105 RETURN
110 REM  ZIN
115 ZD$="":ZN=0:GOSUB 1120:GOSUB 1125:ZR%=1:ZLEN%=VAL(ZFLD2$):ZTYPE%=VAL(MID$(Z$,ZPTR2%+1)):ZLEND%=LEN(ZFLD1$)
120 LOCATE 23,1:PRINT TAB(79);" ":LOCATE 23,1
125 PRINT ZFLD1$;" [";
130 IF ZPL$="" THEN 150
135 REM Pre-loaded input
140 PRINT ZPL$;STRING$(ZLEN%-LEN(ZPL$),".");"]":ZD$=ZPL$:ZCT%=LEN(ZPL$):LOCATE 23,ZLEND%+3+ZCT%,1:ZCPTR%=ZCT%+1:GOTO 170
145 REM No Preload
150 PRINT STRING$(ZLEN%,".");"]":LOCATE 23,ZLEND%+3,1
155 ZCT%=0:ZCPTR%=1
160 REM  ZIN Inkey
165 LOCATE ,,1
170 ZCH$=INKEY$:IF ZCH$="" THEN 170
175 Z%=ASC(ZCH$):ZL%=LEN(ZCH$):IF Z%>126 THEN 170
180 REM  Exten'd or Edit Char. Trap
185 IF ZL%>1 THEN 425
190 REM  Control Char. Trap
195 IF Z%<32 THEN 285
200 REM Test Overstrike
205 IF ZINS%=1 THEN 265
210 IF ZCPTR%-1<ZCT% THEN 640
215 REM  Test GT max
220 ZCT%=ZCT%+1:IF ZCT%>ZLEN% THEN ZCT%=ZCT%-1:GOTO 1140
225 ZCPTR%=ZCT%+1
230 IF ZCT%=1 THEN 240 ELSE 265
235 REM Special First Char.
240 IF (ZHELPSW%=1) AND (ZCH$="?") THEN ZR%=5:PRINT ZCH$;:GOTO 660
245 IF ZCH$="?" THEN PRINT ZCH$:Z=26:GOSUB 100:GOTO 115
250 IF ZCH$="+" THEN ZR%=2:PRINT ZCH$;:GOTO 660
255 GOTO 265
260 REM  Normal Process
265 IF (Z%>96) AND (Z%<123) AND (ZCSW%=1) THEN ZCH$=CHR$(Z%-32)
270 IF ZINS%=1 THEN 550
275 PRINT ZCH$;:ZD$=ZD$+ZCH$:GOTO 170
280 REM  Proc. Ctrl Char.
285 ZCTL%=Z%
290 REM ESC=abort
295 IF ZCTL%=27 THEN ZPL$="":GOTO 115
300 IF ZCTL%=3 THEN STOP:GOTO 115
305 IF ZCTL%=9 THEN 630
310 IF ZCTL%<>13 THEN 375
315 REM  Proc. c/r
320 IF ZCT%=0 THEN ZR%=3:GOTO 660
325 IF ZTYPE%=1 THEN 665
330 IF ZD$="0" THEN 665
335 IF ZTYPE%=2 THEN 340 ELSE 350
340 ZT=VAL(ZD$):IF ZT=0 THEN 355
345 ZN=VAL(ZD$):IF ZN<> INT(ZN) THEN 355 ELSE 665
350 ZN=VAL(ZD$):IF ZN=0 THEN 360 ELSE 665
355 Z=21:GOTO 365
360 Z=22
365 ZSAVE$=Z$:GOSUB 100:Z$=ZSAVE$:GOTO 115
370 REM  proc. B/U
375 IF ZCTL%=24 THEN ZR%=2:GOTO 660
380 REM  Proc. BS
385 IF ZCTL%=8 THEN 395 ELSE 415
390 REM  Short BS
395 IF ZCT%=0 THEN 1140
400 IF ZCPTR%-1<ZCT% THEN 575
405 ZCT%=ZCT%-1:ZCPTR%=ZCPTR%-1:LOCATE 23,ZLEND%+3+ZCT%:PRINT ".";:LOCATE 23,ZLEND%+3+ZCT%:ZD$=LEFT$(ZD$,LEN(ZD$)-1):GOTO 170
410 REM  Pass Control Character
415 ZR%=4:ZN=ZCTL%:ZD$=" ":GOTO 665
420 REM Proc Ext'd Char.
425 ZXT%=ASC(MID$(ZCH$,2)):IF ZXT%=72 THEN ZR%=2:GOTO 660
430 REM ZIN Inner-field Editing
435 LOCATE ,,0:ZBR%=ZXT%-74:IF ZBR%<=0 THEN 445
440 ON ZBR% GOTO 470,445,485,445,500,445,445,530,575
445 GOSUB 1165:IF ZXT%=15 THEN 600
450 IF ZXT%=117 THEN 610
455 IF (ZXT%>58) AND (ZXT%<69) THEN 620
460 GOTO 170
465 REM Curs left
470 IF ZCPTR%=1 THEN 1140
475 GOSUB 1165:ZCPTR%=ZCPTR%-1:GOTO 1145
480 REM Curs right
485 IF ZCPTR%=ZCT%+1 THEN 1140
490 GOSUB 1165:ZCPTR%=ZCPTR%+1:GOTO 1145
495 REM END Key
500 Z%=23:Z=11:GOSUB 100:LOCATE 23,1:PRINT "Press END key again to End, space bar to continue [.]":LOCATE 23,52
505 ZCH9$=INKEY$:IF ZCH9$="" THEN 505
510 ZL%=LEN(ZCH9$):IF ZL%<2 THEN 115
515 ZXT%=ASC(MID$(ZCH9$,2)):IF ZXT%=79 THEN Z=15:GOSUB 100
520 GOTO 115
525 REM INS Toggle
530 IF ZCT%=ZLEN%-1 THEN 1140
535 IF ZINS%=0 THEN GOSUB 1155 ELSE GOSUB 1165
540 GOTO 170
545 REM INS Char.
550 IF ZCT%=ZLEN% THEN 1140
555 ZDL$=LEFT$(ZD$,ZCPTR%-1):ZDR$=MID$(ZD$,ZCPTR%):ZDR$=ZCH$+ZDR$
560 ZD$=ZDL$+ZDR$:ZCT%=ZCT%+1:ZCPTR%=ZCPTR%+1
565 PRINT ZDR$;STRING$(ZLEN%-LEN(ZD$),".");"]":GOTO 1145
570 REM Delete Char
575 IF ZCT%=ZCPTR%-1 THEN 1140
580 GOSUB 1165:ZDL$=LEFT$(ZD$,ZCPTR%-1):ZDR$=MID$(ZD$,ZCPTR%+1)
585 ZD$=ZDL$+ZDR$:ZCT%=ZCT%-1:PRINT ZDR$;".":GOTO 1145
590 GOTO 170
595 REM Back Tab
600 GOSUB 1165:ZCPTR%=1:GOTO 1145
605 REM Ctrl-End
610 GOSUB 1165:ZCT%=ZCPTR%-1:ZD$=LEFT$(ZD$,ZCT%):LOCATE 23,ZLEND%+2+ZCPTR%:PRINT STRING$(ZLEN%-LEN(ZD$),".");"]":GOTO 1145
615 REM Pass Function Keys
620 ZCTL%=ZXT%:GOTO 415
625 REM Forw'd Tab
630 GOSUB 1165:ZCPTR%=ZCT%+1:GOTO 1145
635 REM Overstrike
640 ZDL$=LEFT$(ZD$,ZCPTR%-1):IF ZCPTR%-1=0 THEN ZDL$=""
645 ZDR$=MID$(ZD$,ZCPTR%+1):IF ZCPTR%-1=ZCT% THEN ZDR$=""
650 ZD$=ZDL$+ZCH$+ZDR$:PRINT ZCH$;:ZCPTR%=ZCPTR%+1:GOTO 170
655 REM Common End
660 ZD$=" ":ZN=0:ZINS%=0
665 GOSUB 1165:ZPL$="":RETURN
670 REM ZMENU
675 GOSUB 1120:ZROWX%=VAL(ZFLD1$):GOSUB 1125:ZCOL%=VAL(ZFLD2$):LOCATE ZROWX%,ZCOL%:ZLTST%=LEN(Z$)
680 FOR ZMNO%=1 TO 15:ZPTR1%=ZPTR2%:IF ZPTR2%=0 THEN 705
685 IF ZPTR2%>=ZLTST% THEN 705
690 GOSUB 1125
695 IF ZMNO%<10 THEN ZPD$=" " ELSE ZPD$=""
700 PRINT TAB(ZCOL%);ZPD$;ZMNO%;"- ";ZFLD2$:NEXT ZMNO%
705 PRINT:IF ZMNO%>9 THEN ZX$="2" ELSE ZX$="1"
710 ZSAVE$=Z$:Z$="     Enter Selection,"+ZX$+",2":Z=1:GOSUB 100:ON ZR% GOTO 715,730,730,730,730
715 ZL=1:ZH=ZMNO%-1:Z$=ZSAVE$:Z=10:GOSUB 100
720 ON ZV% GOTO 730,725,725
725 ZSAVE$=Z$:ZD$=STR$(ZN):Z=20:GOSUB 100:Z$=ZSAVE$:GOTO 675
730 RETURN
735 REM ZTCLR
740 FOR Z%=1 TO 15:ZMENU$(Z%)="":NEXT Z%:RETURN
745 REM ZTMENU
750 ZPTR2%=0:ZPDL$=STRING$(((78-ZW%)/2)," "):ZPR%=(78-ZW%)/2:LOCATE ZROW%,1:FOR ZMNO%=1 TO 15:ZFLD$=ZMENU$(ZMNO%):IF ZPTR2%=LEN(Z$) THEN 775
755 ZPTR1%=ZPTR2%:GOSUB 1125:ZMD$=ZFLD2$:ZPTR1%=ZPTR2%:GOSUB 1125
760 ZTYPE%=VAL(ZFLD2$):ZMLEN%(ZMNO%)=ZTYPE%:IF ZFLD$="" THEN ZFLD$="["+STRING$(ZTYPE%,".")+"]"
765 ZCOL%=LEN(ZFLD$):IF ZMNO%<10 THEN ZPD$=" " ELSE ZPD$=""
770 PRINT ZPDL$;ZPD$;STR$(ZMNO%)+". ";ZMD$;TAB(80-ZCOL%-2-ZPR%);ZFLD$:NEXT ZMNO%
775 RETURN
780 REM ZUPTMENU
785 ZPTR1%=ZMLEN%(ZY%):ZPR%=(78-ZW%)/2:LOCATE (ZROW%+ZY%-1),(80-ZPTR1%-4-ZPR%):PRINT TAB(79)
790 ZMENU$(ZY%)=ZD$
795 ZCOL%=LEN(ZMENU$(ZY%)):LOCATE (ZROW%+ZY%-1),(80-ZCOL%-2-ZPR%):PRINT ZMENU$(ZY%);TAB(79):RETURN
800 REM  ZBOX
805 PRINT ZB2$:PRINT ZB1$;CHR$(221);TAB(76);CHR$(222);ZB1$
810 PRINT ZB1$;CHR$(221);TAB(41-(LEN(ZTITLE$)/2));ZTITLE$;TAB(76);CHR$(222);ZB1$
815 PRINT ZB1$;CHR$(221);TAB(76);CHR$(222);ZB1$:PRINT ZB2$:PRINT
820 RETURN
825 REM  ZLINE
830 LOCATE 1,1:COLOR 1
835 PRINT ZTITLE$;TAB(72);ZDT$:COLOR 7
840 RETURN
845 REM ZAOK
850 Z=13:GOSUB 100:Z$="All ok? Y or N,1,1":Z=1:GOSUB 100:Z=9:GOSUB 100:Z=14:GOSUB 100:RETURN
855 REM ZTESTYN
860 ZV%=3:IF (ZD$="Y") OR (ZD$="y") THEN ZV%=1
865 IF (ZD$="N") OR (ZD$="n") THEN ZV%=2
870 RETURN
875 REM ZNLIMIT
880 ZV%=1:IF ZL>ZN THEN ZV%=2
885 IF ZH<ZN THEN ZV%=3
890 IF (ZCTL%<>0) AND (ZR%>3) THEN ZV%=4
895 RETURN
900 REM  ZSCREEN
905 FOR Z%=Z% TO 24:LOCATE Z%,1:PRINT TAB(80);:NEXT Z%:RETURN
910 REM  ZBEEP
915 SOUND 50,3:RETURN
920 REM ZUP
925 ZCSW%=1:RETURN
930 REM ZMIX
935 ZCSW%=0:RETURN
940 REM  ZEND
945 CLS:Z=6:GOSUB 100
950 LOCATE 10,32,0:PRINT "┌";STRING$(17,"─");"┐"
955 LOCATE ,32:PRINT "│";"   End Program   ";"│"
960 LOCATE ,32:PRINT "└";STRING$(17,"─");"┘"
965 LOCATE 21,1,0:GOTO 25
970 REM  ZCTR
975 GOSUB 1030:GOTO 1025
980 REM  ZCTRR
985 GOSUB 1030
990 COLOR 8,7:GOTO 1025
995 REM  ZCTRB
1000 GOSUB 1030
1005 COLOR 23:GOTO 1025
1010 REM  ZCTRU
1015 GOSUB 1030
1020 COLOR 1
1025 PRINT ZFLD2$;:COLOR 7:PRINT TAB(79);:RETURN
1030 LOCATE 23,1:PRINT:GOSUB 1120:ZFLD2$=MID$(Z$,ZPTR1%+1):Z%=VAL(ZFLD1$):LOCATE Z%,,0:PRINT TAB((80-LEN(ZFLD2$))/2);:RETURN
1035 REM ZERRINV
1040 Z$="24,"+ZD$+" Is Invalid":GOTO 1110
1045 REM ZERRINT
1050 Z$="24,"+ZD$+" Is Not an Integer Number":GOTO 1110
1055 REM ZERRNUM
1060 Z$="24,"+ZD$+" Is Not Numeric":GOTO 1110
1065 REM ZERRCTRL
1070 IF ZCTL%>26 THEN ZDS2%=ZCTL%-58:ZDS$="F"+MID$(STR$(ZDS2%),2) ELSE ZDS$="Control "+CHR$(ZCTL%+64)
1075 Z$="24,Function Key = "+ZDS$+ZE$:GOTO 1110
1080 REM ZERRENT
1085 Z$="24,ENTER-Only Entry "+ZE$:GOTO 1110
1090 REM ZERRBACK
1095 Z$="24,Field Backup Entry "+ZE$:GOTO 1110
1100 REM ZERRHELP
1105 Z$="24,HELP "+ZE$
1110 Z=17:GOSUB 100:Z=12:GOSUB 100:ZY=2:Z=29:GOSUB 100:Z%=24:Z=11:GOSUB 100:RETURN
1115 REM Routines
1120 ZPTR1%=INSTR(1,Z$,","):ZFLD1$=LEFT$(Z$,ZPTR1%-1):RETURN
1125 ZPTR2%=INSTR(ZPTR1%+1,Z$,","):ZFLD2$=MID$(Z$,ZPTR1%+1,ZPTR2%-ZPTR1%-1):RETURN
1130 REM ZDELAY
1135 FOR ZX=1 TO ZY*ZTFAC:NEXT ZX:RETURN
1140 Z=12:GOSUB 100:GOTO 165
1145 LOCATE 23,ZLEND%+2+ZCPTR%,1:GOTO 170
1150 REM INS On
1155 ZINS%=1:LOCATE ,,,4,12:RETURN
1160 REM INS Off
1165 ZINS%=0:LOCATE ,,,11,12:RETURN
9000 REM Save Program
9010 ZPROG$="program name"
9020 PRINT "Saving B:"+ZPROG$+".BAS"
9030 SAVE "B:"+ZPROG$
9040 PRINT "Saving B:"+ZPROG$+".S"
9050 SAVE "B:"+ZPROG$+".S",A
9060 RETURN
9090 REM Memory Display
9100 CLS:LOCATE 10,1,0:PRINT TAB(32);"Memory Statistics":PRINT:PRINT TAB(27);"Remaining Memory:  ";FRE(0):PRINT:PRINT TAB(27);"Program Length:    ";61529.-FRE(0):RETURN
10000 REM Begin Program Here
```
{% endraw %}

## MONITOR.DOC

{% raw %}
```










                              Computerenergy's MONITOR






                                     Version 1.0

























                                 PROPRIETARY NOTICE


     MONITOR is a  proprietary  product  developed  by  Richard C.   Bemis  and
     distributed by Computerenergy Corporation, Denver, Colorado.  

     Copyright 1982  by Richard  C.  Bemis and Computerenergy Corporation.  All
     rights  reserved except  those expressly  granted to the user within  this
     document.  

     Computerenergy Corporation,  PO Box  6267, Denver, CO 80206 (303) 233-9118
     Source: ST6070 




                                        - i -

                                  TABLE OF CONTENTS

     Section                                                               Page



     CHAPTER 1  MONITOR DISTRIBUTION NOTICE ...............................   1

     CHAPTER 2  INTRODUCTION AND SETUP ....................................   2
        2.1  Use Restrictions .............................................   2
        2.2  This Document ................................................   2
        2.3  Setup and Use ................................................   2
        2.4  Color Video Board Notes ......................................   3

     CHAPTER 3  GENERAL INSTRUCTIONS ......................................   4
        3.1  Program Interface to the Routines ............................   4
        3.2  Returned Data ................................................   5
        3.3  Return Codes .................................................   5
        3.4  Returned Values ..............................................   5
        3.5  Routine Interface Procedure ..................................   5
        3.6  Routine Names ................................................   5
        3.7  Reserved Variables ...........................................   5

     CHAPTER 4  ROUTINE SUMMARY - BY NUMBER ...............................   6

     CHAPTER 5  ROUTINE SUMMARY - BY TYPE .................................   7

     CHAPTER 6  INPUT/OUTPUT ROUTINES .....................................   8
        6.1  No. 1 - Data Entry - ZIN .....................................   8
        6.2  No. 2 - Menu & "Enter Code" - ZMENU ..........................  12
        6.3  No. 3 - Clear Target Area - ZTCLR ............................  14
        6.4  No. 4 - Menu w/Targets for Data - ZTMENU .....................  15
        6.5  No. 5 - Update Menu with Data - ZUPTMENU .....................  17
        6.6  No. 6 - Boxed Title - ZBOX ...................................  18
        6.7  No. 7 - Single-Line Page Heading - ZLINE .....................  19
        6.8  No. 8 - All ok? - ZAOK .......................................  20

     CHAPTER 7  EDIT ROUTINES .............................................  21
        7.1  No. 9 - Test for Y or N - ZTESTYN ............................  21
        7.2  No. 10 - Numeric Limit Test - ZNLIMIT ........................  22

     CHAPTER 8  OTHER ROUTINES ............................................  23
        8.1  No. 11 - Clear Screen - ZSCREEN ..............................  23
        8.2  No. 12 - Sound Quiet Beep - ZBEEP ............................  23
        8.3  No. 13 - Convert Input to Uppercase - ZUP ....................  23
        8.4  No. 14 - Convert Input to Mixed Case - ZMIX ..................  23
        8.5  No. 15 - End Program - ZEND ..................................  24
        8.6  No. 16 - Print Centered Message - ZCTR .......................  25
        8.7  No. 17 - Print Centered Message - Reverse Video - ZCTRR ......  25
        8.8  No. 18 - Print Centered Message - Blinking - ZCTRB ...........  25
        8.9  No. 19 - Print Centered Message - Underlined - ZCTRU .........  25

     CHAPTER 9  ERROR MESSAGES ............................................  26
        9.1  No. 20-26 - Error Messages - ZERRname ........................  26



                                       - ii -

                                  TABLE OF CONTENTS

     Section                                                               Page


     CHAPTER 10  MONITOR LINE USAGE MAP/SPECIAL VARIABLES .................  27
        10.1  Monitor Line Number Usage Map ...............................  27
        10.2  Special Variables ...........................................  27

     CHAPTER 11  STANDALONE ROUTINES ......................................  28
        11.1  Save Program Routine ........................................  28
        11.2  Program Memory Map ..........................................  28

     CHAPTER 12  OTHER INFORMATION ........................................  29
        12.1  Distribution Disk Contents - Monitor ........................  29
        12.2  Disclaimer ..................................................  29

     CHAPTER 13  SUGGESTIONS, FEEDBACK, AND BUG REPORTS ...................  30







































     Monitor                          - iii -        Computerenergy Corporation

                                      CHAPTER 1

                             MONITOR DISTRIBUTION NOTICE

     Monitor is being  distributed using the "Freeware"* approach.  To those of
     you  unfamiliar  with  this approach,  it works  like  this.  You may send
     either a preformatted single-sided disk (or a prepaid contribution for our
     disk  and mailer)  to us  with a prepaid return mailer  and we will send a
     complete copy  of the  product.  If the product does  not meet your needs,
     please pay  nothing.  If the product does meet your needs, and you can use
     it, then  we  would  appreciate  a  contribution of  whatever  you feel is
     appropriate.   Naturally,  we have  probably given  you  a clue in several
     places  as  to  what  is  our  "completely  unprejudiced  opinion"  of  an
     appropriate  contribution amount.   Contributions are completely voluntary
     and much encouraged.  

     Even if you do  not contribute, you are encouraged  to copy and distribute
     the product freely subject to the following restrictions: 

          1. Do  not  distribute altered  copies.  Note:  You  may distribute a
             separate  set of  modifications to  merge in if you wish  but they
             must be clearly identified as not originating from Computerenergy.
             If  you do  make modifications,  we would like to see  what you've
             done, if possible, for future versions.  

          2. The product is to be distributed as a complete "distribution copy"
             produced by  the copy  utility provided with the product  for this
             purpose.  

          3. No fee  is to  be charged for copying or  distributing the program
             without   an   express   written  agreement   with  Computerenergy
             Corporation.  

          4. Commercial sale  of  this  product  in  any manner  is  prohibited
             without  Computerenergy's written  permission.  Some products will
             be released with this permission automatically given and expressly
             stated.  

     User Groups/Clubs:  Computerenergy's freeware  products may be distributed
     by Clubs and  User Groups subject to the  same restrictions.  We would ask
     only that contributions  to our continuing efforts be  encouraged by those
     performing such distribution.  

     Computer Bulletin  Boards:   Computerenergy's  freeware  products  may  be
     distributed  by BBS's  subject to  the  same restrictions and contribution
     encouragement.  However, as  the products tend to be  large and consist of
     several files, we have some concern as to the reliability of transmissions
     and  length of  connect time.   Perhaps disks could be mailed  or just the
     documentation placed on the board for browsers.  


     * The Freeware  concept was  initially developed by Andrew Fluegelman  and
     the  term  "FREEWARE"  is a  trademark of  The  Headlands Press, Inc.  The
     Headlands Press  provides a catalog of information about Freeware products
     available  from multiple  sources.  They  may be contacted at PO  Box 862,
     Tiburon, CA 94920 or Source: TCP204 or Compuserve: 71435,1235.  

     Monitor                           - 1 -         Computerenergy Corporation

                                      CHAPTER 2

                               INTRODUCTION AND SETUP


     Computerenergy's Monitor is a series of routines that provide a consistant
     user  interface  for  application  development.   It  helps  minimize  the
     drudgery of  screen development, menus, titles, prompts, and editing input
     as  the  user  interacts with  your application.   Monitor's  routines are
     designed to be incorporated as a "front end" into application programs and
     were created to make custom application development easier.  

     Monitor has been  developed in various forms for a number of microcomputer
     basics  over  the past  several  years.   It  has  been used  for  serious
     application development for all of that time by a number of developers and
     now represents our consensus of the best standard set of useful routines. 

     However, we have  noticed that each developer has his own biases as to how
     things should  be accomplished and variations to Monitor frequently occur.
     You are  encouraged to alter Monitor in any way for your own use.  What is
     important is that you use or develop a standard set of routines so that as
     you develop  applications,  there  is  a  consistant user  appearance  and
     function.  

     2.1  Use Restrictions

          There are no restrictions  on the incorporation of Monitor  or any of
          its  routines into  any application  system or program.  There is  no
          royalty or notice  required of the source of  the routines.  The sole
          restriction is  that  the  Monitor  is  subject to  the  distribution
          requirements stated in the Distribution Notice when it is distributed
          as Monitor itself.  

     2.2  This Document

          This document  is   organized  by  routine  with  detailed  reference
          information on  each routine  in a separate section.  Several  screen
          images  have been  included as  examples and are at the  beginning of
          their sections between  lines of equal signs.  In  addition, there is
          routine  summary  information which  you may  wish  to copy for quick
          reference.  

     2.3  Setup and Use

          At first blush,  the Monitor  routines may appear complex and  overly
          large.  However, we ask that you be patient and try incorporating the
          routines as  a front  end to some of the  programs you develop.  With
          use, the  routines and their structures will become second nature and
          you  will  be  able to  develop code  faster  with substantially more
          function and a consistant user interface.  

          We would  also  recommend  that  you  run  the  Monitor  through  our
          Expanding Lister (if it is available) in order to better see what the
          code  is  doing.   The Lister  should print  around  16 pages for the
          Monitor.  File  this copy for later reference.  When you subsequently
          use  the Lister  on a  program incorporating the Monitor, start  with

     Monitor                           - 2 -         Computerenergy Corporation

                                              CHAPTER 2: INTRODUCTION AND SETUP


          line 10000 as it will save reprinting those 16 pages.  

          Before proceeding, it  is  highly  recommended  that  a copy  of  the
          distribution  disk  be  made immediately  for your  use  and that the
          original distribution disk be filed in a safe place.  

          The Monitor is  supplied in  Basic encoded source (.BAS) that  can be
          loaded into into Basic when entering entire programs.  It may also be
          convenient to  save a  version in ASCII (.S) form  that can be merged
          with any application program.  

          Monitor also contains  a significant number of single-line REMarks to
          aid in modification - these may be removed to save space if required.

          Some routines may not apply for a given program and may be deleted to
          save space.   Shorter versions of Monitor that eliminate the targeted
          menus and some of the lesser used error messages are common.  

          Monitor routines may be operated and tested in an interactive mode by
          entering the  routine-calling code  after line number 10000 and  then
          "running"  Monitor.  We  suggest you  give them a try as  you proceed
          through this document.  

     2.4  Color Video Board Notes


          If you are  going to  be using the Color Video  Interface rather than
          the Monochrome  (green) interface, you will need to change 2 lines of
          code in the Monitor as otherwise the cursor will seem to disappear.  

               Change line 1155:
                         from:  1155 ZINS%=1:LOCATE ,,,4,12:RETURN
                           to:  1155 ZINS%=1:LOCATE ,,,0,7:RETURN

               Change line 1165:
                         from:  1165 ZINS%=0:LOCATE ,,,11,12:RETURN
                           to:  1165 ZINS%=0:LOCATE ,,,6,7:RETURN

          We will add some code to make this automatic at a later time.  















     Monitor                           - 3 -         Computerenergy Corporation

                                      CHAPTER 3

                                GENERAL INSTRUCTIONS


     Video-based computer systems  have the  advantage of very quick and  quiet
     response to a user.  This allows the user to interact with the computer at
     basically  their own  speed.  Applications  can and should be designed  to
     take advantage of these characteristics.  

     The Monitor is a series of CRT-oriented routines that provide a convenient
     base for application  development.  Routines are supplied for  many of the
     most common operations in the following areas: 

                              Input
                              CRT Output
                              Data Editing
                              CRT Management
                              Error Messages
                              End Program - Common Exit

     Monitor is designed  to be  incorporated as a front-end into  each program
     that  requests  input  from a  user.  The  application  program is usually
     constructed  by  using BASIC  to  call  in  a  copy of  Monitor  (via LOAD
     "MONITOR" or LOAD "MONITOR.S") and performing the following steps: 

          1. Modify the REM at statement 10 to reflect the application
               program name.
          2. Place the application's title in the ZTITLE$= statement
          3. Modify the END at statement 25 to link to another program
               if necessary
          4. Enter the application's code (via Basic) beginning at the supplied
               statement: 10000 REM Begin Program Here
          5. Save the program with a NEW NAME


     Notes: Some  functions  use  graphic  characters  that are  not reproduced
     exactly in this manual.  

     The "ENTER" key is the large key with a "down and left" arrow on it to the
     right  of  the keyboard.   This key  will be referred to as  the ENTER key
     within this manual.  

     3.1  Program Interface to the Routines

          The program  interface  is  similar  for  all the  routines.  Several
          variables may be loaded with information to be passed to the routine,
          and the  routine is  then called by setting Z=  to the routine number
          and executing a GOSUB 100.  

          Example:

              10010 Z$="Information to be passed to the routine":Z=1:GOSUB 100


          The most  common  calling  procedure is  to first  load  any required

     Monitor                           - 4 -         Computerenergy Corporation

                                                CHAPTER 3: GENERAL INSTRUCTIONS


          variables (usually  Z$), set Z= to the routine number, and then issue
          a GOSUB 100.   Most of the time this  can be accomplished on a single
          line.  

     3.2  Returned Data

          Data, if any, is returned from a routine in two variables: 

                    ZD$ = Any alphanumeric data
                    ZN  = Any numeric data


     3.3  Return Codes

          Return codes  from  a  routine  (if  any)  are  provided  in the  ZR%
          variable.   They   are  designed  to  communicate  the  occurance  of
          different classes  of  events  to  the  programmer who  is  using the
          routine.  He may then take any appropriate action he deems necessary.


     3.4  Returned Values

          Returned Values (if  any) are returned in the ZV% variable.  Examples
          of returned values can be seen in ZTESTYN and ZAOK below.  


     3.5  Routine Interface Procedure

          To have  your   program  utilize  any  routine,  simply  follow  this
          procedure: 

               1.  Load Z-prefix variables as directed in the Routine's
                     format (usually Z$).
               2.  Set Z equal to the Routine's Number.
               3.  Execute a GOSUB 100
               4.  Test Return code with "ON ZR% GOTO ...." as appropriate.
               5.  Take action for each Return Code and/or Returned Value.
               6.  Save returned values of ZD$ or ZN in user variables
                   if appropriate.

          Many Routines will not require all of the above steps.  

     3.6  Routine Names

          For ease of communication, each Monitor Routine has been given a name
          which begins with Z as a prefix.  

     3.7  Reserved Variables

          The Monitor  uses  variables that  begin with  a  "Z".  All Variables
          beginning with  Z should  be reserved for use by  the Monitor and not
          used within the application program.  


     Monitor                           - 5 -         Computerenergy Corporation

                                      CHAPTER 4

                             ROUTINE SUMMARY - BY NUMBER

                               Monitor Quick Reference

      1   ZIN - Standard Input Routine                        
      2   ZMENU - Menu and 'Enter Selection'
      3   ZTCLR - Clear Target Data Fields
      4   ZTMENU - Display Targeted Menu
      5   ZUPTMENU - Update Targeted Menu
      6   ZBOX - Boxed Title
      7   ZLINE - Single Line Title
      8   ZAOK - All ok?
      9   ZTESTYN - Test for Y or N
     10   ZNLIMIT - Numeric Limit Test
     11   ZSCREEN - Erase to end of screen
     12   ZBEEP - Sound Beep
     13   ZUP - Convert to Uppercase
     14   ZMIX - Return to Mixed Case Input
     15   ZEND - Terminate Program
     16   ZCTR - Center Message
     17   ZCTRR - Center Mesage in Reverse Video
     18   ZCTRB - Center Message - Blinking
     19   ZCTRU - Center Message - Underlined
     20   ZERRINV - Error Message - Invalid
     21   ZERRINT - Error Message - Not Integer
     22   ZERRNUM - Error Message - Not Numeric
     23   ZERRCTRL - Error Message - Invalid Function
     24   ZERRBACK - Error Message - Invalid Backup
     25   ZERRENT - Error Message - ENTER Only
     26   ZERRHELP - Error Message - Help Unavailable
     29   ZDELAY - Time Delay
























     Monitor                           - 6 -         Computerenergy Corporation

                                      CHAPTER 5

                              ROUTINE SUMMARY - BY TYPE

     Input/Output Routines:

          1 - ZIN      = Data Entry
          2 - ZMENU    = Menu & "Enter Code"
          3 - ZTCLR    = Clear Target Data Fields
          4 - ZTMENU   = Menu with Targets for Data
          5 - ZUPTMENU = Update Menu with Data
          6 - ZBOX     = Boxed Title
          7 - ZLINE    = Single-line Page Heading
          8 - ZAOK     = All ok? Y or N
         16 - ZCTR     = Print Centered Message
         17 - ZCTRR    = Print Centered Message - reverse video
         18 - ZCTRB    = Print Centered Message - blinking
         19 - ZCTRU    = Print Centered Message - underlined

     Edit Routines:

           9 - ZTESTYN = Test for Y or N
          10 - ZNLIMIT = Numeric Limits Test

     Other Routines:

          11 - ZSCREEN = Clear Screen
          12 - ZBEEP   = Sound Beep (quiet)
          13 - ZUP     = Convert Input to Uppercase
          14 - ZMIX    = Convert Input to Mixed Case
          29 - ZDELAY  = Time Delay

     Error Message Routines:


          20 - ZERRINV  = "Is Invalid"
          21 - ZERRINT  = "Is Not Integer"
          22 - ZERRNUM  = "Is Not Numeric"
          23 - ZERRCTRL = "Funvtion Key = nn Not Available at this Point"
          24 - ZERRBACK = "Backup Entry Not Available at this Point"
          25 - ZERRENT  = "ENTER-only Entry Not Available at this Point"
          26 - ZERRHELP = "Help Not Available at this Point"

     End Program Routine:

          15 - ZEND    = End Program











     Monitor                           - 7 -         Computerenergy Corporation

                                      CHAPTER 6

                                INPUT/OUTPUT ROUTINES

     6.1  No. 1 - Data Entry - ZIN

     ==========================================================================























     Prompt Message for Entry [...............]

     ==========================================================================

     ZIN provides a  general purpose  data entry capability and is  the bedrock
     routine  in the  Monitor.  A  prompt message and a variable-length  target
     consisting of periods  surrounded by brackets are displayed  at the bottom
     left-hand  corner of  the screen  on the 23rd line.  Rudimentary  editing,
     "backup to  previous entry",  and function-key options are also  provided.
     Editing commands  within the  field during entry are also  supported.  The
     user can not enter data outside the target, and will hear a gentle buzz if
     he attempts to do so.  

     FORMAT:

          Z$ = "Prompt Message for Entry,n1,n2" : Z=1 : GOSUB 100

               n1 = Length of target field
               n2 = Type of entry edit:

                    1 = Alphanumeric
                    2 = Integer only
                    3 = Numeric

     Note: Commas are  used as information separators, and  may not be included
     in the prompt message.  

     Monitor                           - 8 -         Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     EDITS PERFORMED:

          Type 1 (Alphanumeric):

               No editing performed.  All data is accepted as valid.

          Type 2 (Integer):

               Numeric integers only  accepted as valid.  Upon non-integer data
               (ddd)  being  entered,  the  message  "ddd  Is  Not Integer"  is
               displayed below the  entry line in reverse video  and the prompt
               is redisplayed.  

          Type 3 (Numeric): 

               Numbers which may  be decimal, integer, and positive or negative
               may be  entered.   Upon  alpha  data  (aaa) being  entered,  the
               message "aaa Is  Not Numeric" is displayed below  the entry line
               in reverse video and the prompt is then redisplayed.  

     RETURNS: 

          Data is contained in:

               ZD$ for Alphanumeric      (Note: string eqs. for ZN also ret'd h
               ZN for Integer or Numeric

          Function-Key Number is contained in ZN if Function or Ctrl Keys were 

          Return Code in ZR%:

               ZR% = 1 = Normal entry
                     2 = Up-Arrow entered or Plus entered as first character
                             - Field Backup character
                     3 = ENTER key was entered as first char.
                     4 = Function Key or Control key was entered
                     5 = Help requested

          When ZR% =  2 or 3 then ZD$ is blanked and ZN is zeroed.  This allows
          an ENTER-only  response  to  be  used  to blank  out  entries without
          further code.  

     EXAMPLES:

          Alphanumeric;

               10000 Z$ = "Entry Prompt,10,1" : Z=1 : GOSUB 100
               10010 ON ZR% GOTO 10020,10030,10040,10050,10060
               10020 PRINT "Normal Entry" : STOP
               10030 PRINT "Backup Character" : STOP
               10040 PRINT "ENTER Key" : STOP
               10050 PRINT "Function Key" : STOP
               10060 PRINT "Help Requested" : STOP

     Monitor                           - 9 -         Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES



          You may also  prevent the  user from using any of  the entry types by
          merely branching  back to the prompting line with the ZR% branch.  No
          error message  will be displayed.  If you wish an error message to be
          displayed,  set Z  and GOSUB  100 to display the appropriate  message
          (see Error Messages below) before taking the branch.  

          Example: Prohibit Backup, ENTER Key, Function Key, and Help Entry 

                    10000 Z$ = "Entry Prompt,10,1" : Z=1 : GOSUB 100
                    10010 ON ZR% GOTO 10020, 10000, 10000, 10000, 10000
                    10020 PRINT "Valid Data" : STOP

          By branching  to  10000, the  user is  forced to try another type  of
          entry to continue processing.  


          Function Keys: 

               Special functions may be  entered by pressing the F1  - F10 keys
               or  holding down  the CTRL  key and then pressing a  letter key.
               These entries (referred  to as "Functions") are trapped  by ZIN.
               The corresponding number of the key pressed (A=1, B=2, C=3, etc.
               and F1 - F10 = 59-68) is returned in ZN.  ZD$ is blanked.  

               Function Key Use: 


               Example:

                         10000 Z$ = "Enter Data,10,1" : Z=1 : GOSUB 100
                         10010 ON ZR% GOTO 10020, 10030, 10040, 10050, 10000
                         10020 ... Normal Entry
                         10030 ... Backup Character
                         10040 ... ENTER Key
                         10050 IF ZN > 3 THEN 10060 ELSE 10070
                                   : REM Test for allowed range

                         10060 Z=23 : GOSUB 100 : GOTO 10000
                                   : REM Process Range Error

                         10070 ON ZN GOTO 11000,11010,11020
                         10080 STOP

                         11000 PRINT "CTRL-A was entered" : STOP
                         11010 PRINT "CTRL-B was entered" : STOP
                         11020 PRINT "CTRL-C was entered" : STOP

     INNER-FIELD EDITS:

          Left Arrow:    Cursor Left - non-destructive
          Right Arrow:   Cursor Right - non-destructive
          Backspace:     case 1: at end of field - erases 1 character

     Monitor                           - 10 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


                         case 2: in middle of field - deletes character at curs
          Backtab:       Cursor positioned to beginning of field
          Forward Tab:   Cursor positioned to end of entered characters
          INS:           Inserts blank at cursor
          DEL:           Deletes character at cursor
          ESC:           Erases input and restores target
          Ctrl-END:      Erase from cursor to end of field


     SPECIAL CHARACTERS:

          Up-arrow or +:      Field Backup (ENTER not required)

          ? in 1st character: Help requested (sets ZR% to 5)

          END:                If pressed twice in succession, will end program 
                                  a warning message is displayed between END's


     SPECIAL FUNCTIONS:

          Data Preloading:

               A target may be  partially or fully preloaded with  data for use
               with  ZIN.  Data  may be  then  manipulated with the inner-field
               edit  keys or  erased  with  ESC.   The  field to  be  loaded to
               activate the preload is ZPL$.  

               ZPL$ is cleared to null after each execution of ZIN.  

     Enable/Disable Help function: 

          The Help function  may be turned on or off with ZHELPSW% at any time.
          If the  Help function  is turned off, the 5th  ZR% branch need not be
          specified.  

          Set ZHELPSW% =  0 to turn off.  Monitor initializes the ZHELPSW% to 1
          (on) in statement 30.  
















     Monitor                           - 11 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.2  No. 2 - Menu & "Enter Code" - ZMENU


     ==========================================================================
     Example Title                                                    10/01/82





          1 - Message for Selection 1
          2 - Message for Selection 2
          3 - Message for Selection 3
          4 - Message for Selection 4
          5 - Message for Selection 5












            Enter Selection [.]


     ==========================================================================

     ZMENU provides a  menu-list display of a series of numbered options and an
     "Enter Selection"  prompt.  Standard editing for Integer-only, Up-Arrow or
     Plus-sign,   ENTER  Key,   Function  Key,   or   Help  key  is  performed.
     Range-checking for valid selection entries is automatically provided.  

     FORMAT:

          Z$ = "n1, n2, Message-1, ...,Message-n," : Z=2 : GOSUB 100

               (Notes: Trailing comma after last message is required.
                       Commas are used as separators and may not be included
                         in the message.)
               n1 = Row to begin menu
               n2 = Column to begin menu


     LIMITATIONS:  The maximum number of menu entries is 15.





     Monitor                           - 12 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     RETURNS:

          The Selection number is returned in ZN.  ZN is set to 0 if ZR% is not
          equal 1 (= Normal Entry) 

          Return Code in ZR%: 

                    ZR% = 1 = Normal Entry
                          2 = Up-Arrow entered or Plus entered as first
                               character - Backup character
                          3 = ENTER Key was entered as first character.
                          4 = Function Key was entered.
                          5 = Help - "?" entered as first character









































     Monitor                           - 13 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.3  No. 3 - Clear Target Area - ZTCLR


          ZTCLR clears   all   target  area   data  fields  (ZMENU$(1)  through
          ZMENU$(15)) used  in ZTMENU and ZUPTMENU.  Each field is cleared with
          a null (="").  

          FORMAT: 

               Z=3 : GOSUB 100












































     Monitor                           - 14 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.4  No. 4 - Menu w/Targets for Data - ZTMENU



     ==========================================================================
     Example Title                                                    10/01/82


      1. Prompt for Field 1                                        [.......]
      2. Prompt for Field 2                                 [..............]
      3. Prompt for Field 3                                             [..]
      4. Prompt for Field 4                    [...........................]
      5. Prompt for Field 5                               [................]















     ==========================================================================


     ZTMENU displays  a menu  with prompts  on the left side and  corresponding
     data   field   targets  for   entry  on   the   right.   The  approach  is
     fill-in-the-blanks with a  common entry point at the  bottom of the screen
     for each field  in turn using ZIN.  The  total centered width used for the
     display may be varied.  

     SET:

          Target data  fields  are  contained in  ZMENU$(1) through ZMENU$(15).
          These fields should be either cleared with ZTCLR or loaded with data.
          Fields which  contain data  will display the data.  Fields  which are
          empty (= "", or Null) will display targets.  

               ZROW% = 1st line available for menu.
               ZW%   = Width of display.








     Monitor                           - 15 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     FORMAT:

          Z$ = "Prompt-n1,n1, ....Prompt-n15,n15," : Z=4 : GOSUB 100

               (Note: Trailing comma after last prompt is required.)

               Prompt-n1 - Prompt-n15 = Message for prompt
               n1 - n15   = Length of target data field

     LIMITATION:

          Maximum number of items = 15


     FUNCTION SUMMARY: 

          ZTMENU is used  in  conjunction  with  ZTCLR,  ZIN, and  ZUPTMENU  to
          provide a complete  set of consistant data entry  routines.  ZTMENU's
          function  is  to display  the entire  entry screen which is used  for
          feedback to  the  user.   Each  field  in turn  is  then prompted and
          entered  with  ZIN on  line 23.   As each field is properly  entered,
          ZUPTMENU is  used to display the field in the ZTMENU area.  After all
          fields have been entered and processed, ZTCLR clears the ZTMENU entry
          fields for the next set of entries.  






























     Monitor                           - 16 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.5  No. 5 - Update Menu with Data - ZUPTMENU



     ==========================================================================
     Example Title                                                    10/10/82


      1. Prompt for Field 1                                             100
      2. Prompt for Field 2                                  [.............]
      3. Prompt for Field 3                                            [...]
      4. Prompt for Field 4                      [.........................]
      5. Prompt for Field 5                                  [.............]















     ==========================================================================




     ZUPTMENU updates a line  in a targeted menu (see  ZTMENU) with data (as in
     Line No.   1 above).  The data is displayed right-justified, replacing the
     target field.  

     SET:

          ZY%    = n1  = Number of Variable (1 - 15)
          ZROW%  = n2  = Display 1st line no. on this line
                            (usually set in ZTMENU)
          ZN or ZD$    = Data to be displayed

     FORMAT:

          ZY% = n1 : ZROW% = n2 : ZN = Data or ZD$ = Data : Z=5 : GOSUB 100

             Note:  Data  to  be  displayed is  contained in  ZD$  or ZN.  This
                    routine  will  automatically load  the ZMENU$(ZY%) variable
                    from ZD$.  



     Monitor                           - 17 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.6  No. 6 - Boxed Title - ZBOX


     ==========================================================================
     --------------------------------------------------------------------------
     |   ------------------------------------------------------------------   |
     |   |                      Example Boxed Title                       |   |
     |   ------------------------------------------------------------------   |
     --------------------------------------------------------------------------



















     ==========================================================================




     ZBOX displays a  title within  a box as a convenient  method of program or
     section identification.  It also may be used to highlight a message.  


     FORMAT:

          Z$ = "Title/Message to be displayed" : Z=6 : GOSUB 100














     Monitor                           - 18 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.7  No. 7 - Single-Line Page Heading - ZLINE


     ==========================================================================
     Example Title                                                    10/01/82























     ==========================================================================


     ZLINE provides a  compact method of titling a screen with the program name
     and  current  date.   On  the  Monochrome  interface,  the  title will  be
     underlined.  

     SET:

          ZTITLE$ = "Title to be displayed"

     FORMAT:

          Z=7 : GOSUB 100

     OUTPUT:

     Title to be Displayed                                            10/01/82








     Monitor                           - 19 -        Computerenergy Corporation

                                               CHAPTER 6: INPUT/OUTPUT ROUTINES


     6.8  No. 8 - All ok? - ZAOK


     ==========================================================================
     Example Title                                                     9/10/82




















     All ok? Y or N [.]


     ==========================================================================

     ZAOK provides  a convenient  method  of  asking  for  an "All  ok?"  after
     feedback to  the user.   A typical example would be  after a review of all
     data entered  into a record up to that point.  Either Upper or Lowercase Y
     or N is accepted.  


     FORMAT:

          Z=8 : GOSUB 100


     RETURNS:

          ZR% = 1 = Data was entered
                2 = Backup Character was entered
                3 = ENTER Key only was entered
                4 = Function key was entered
                5 = Help key was entered

          ZV% = 1 = "Y" or "y" was entered
                2 = "N" or "n" was entered
                3 = something else was entered - usually an error


     Monitor                           - 20 -        Computerenergy Corporation

                                      CHAPTER 7

                                    EDIT ROUTINES

     7.1  No. 9 - Test for Y or N - ZTESTYN


          ZTESTYN tests for  a Y or N user response (either upper or lowercase)
          to a prompt.  

          SET:

               User response in ZD$ (automatic with ZIN and others)

          FORMAT:

               Z=9 : GOSUB 100

          RETURNS:

               Value returned in ZV%:

                    ZV% = 1 = "Y" or "y"
                          2 = "N" or "n"
                          3 = something else was entered - usually an error
































     Monitor                           - 21 -        Computerenergy Corporation

                                                       CHAPTER 7: EDIT ROUTINES


     7.2  No. 10 - Numeric Limit Test - ZNLIMIT


          ZNLIMIT tests numeric  fields for values between high and low limits.
          ZNLIMIT  is usually  used following  a ZIN entry to further  validate
          numeric data.  

          SET:

               ZL = Low  limit
               ZH = High limit
               ZN = Data variable to be tested

          FORMAT:

               ZL = n1 : ZH = n2 : ZN = Test variable : Z=10 : GOSUB 100

          RETURNS:

               Value Returned in ZV%:

                    ZV% = 1 = Within limits
                          2 = Too low
                          3 = Too high






























     Monitor                           - 22 -        Computerenergy Corporation

                                      CHAPTER 8

                                   OTHER ROUTINES

     8.1  No. 11 - Clear Screen - ZSCREEN

          ZSCREEN clears  the  screen  from the  specified line  number  to the
          bottom of the screen and places the cursor to the top blanked line.  

          SET:

               Z% = First line to be cleared.

          FORMAT:

               Z% = 3 : Z=11 : GOSUB 100


     8.2  No. 12 - Sound Quiet Beep - ZBEEP


          ZBEEP provides  a  gentle  sounding warning  buzz as  opposed  to the
          rather shrill BEEP statement in Basic.  

          FORMAT:

               Z=12 : GOSUB 100


     8.3  No. 13 - Convert Input to Uppercase - ZUP

          ZUP will convert  all Alpha characters that are being entered via ZIN
          routines to uppercase  independent of the shift key  on the keyboard.
          ZUP is particularly handy for Y/N answers and the like.  

          FORMAT:

               Z=13 : GOSUB 100


     8.4  No. 14 - Convert Input to Mixed Case - ZMIX

          ZMIX will allow  ZIN routines to accept either uppercase or lowercase
          characters without conversion.  ZMIX is normally used to reset a ZUP.

          FORMAT:

               Z=14 : GOSUB 100









     Monitor                           - 23 -        Computerenergy Corporation

                                                      CHAPTER 8: OTHER ROUTINES


     8.5  No. 15 - End Program - ZEND



     ==========================================================================
     --------------------------------------------------------------------------
     |  --------------------------------------------------------------------  |
     |  |                       Example Program Title                      |  |
     |  --------------------------------------------------------------------  |
     --------------------------------------------------------------------------



                                 -----------------
                                 |  End Program  |
                                 -----------------













     ==========================================================================




     ZEND will produce a  boxed title and an "End  Program" message.  ZEND also
     provides  a common  ending  point  for  programs  by always  branching  to
     statement 25.  Should you wish to chain or link to another program instead
     of ending, modify the END statement at statement 25.  


     FORMAT:

          Z=15 : GOSUB 100


     Note: Make  sure  the  ZTITLE$  variable  still  contains  what  you  want
     displayed in the large box.  







     Monitor                           - 24 -        Computerenergy Corporation

                                                      CHAPTER 8: OTHER ROUTINES


     8.6  No. 16 - Print Centered Message - ZCTR


          ZCTR will print  a centered  message on any line on  the screen.  The
          spaces on the line before and after the message are blanked.  

          FORMAT: 

               Z$ = "n1,Message" : Z=16 : GOSUB 100

                    n1 = Line no. for message

     8.7  No. 17 - Print Centered Message - Reverse Video - ZCTRR


          ZCTRR will print a  centered message in reverse video  on any line on
          the screen.  ZCTRR  is especially useful to highlight  error messages
          or warnings.  The  Monitor error routines use ZCTRR  on line 24.  The
          spaces on the line before and after the message are blanked.  

          FORMAT:

               Z$ = "n1,Message" : Z = 17 : GOSUB 100

                    n1 = Line no. for message


     8.8  No. 18 - Print Centered Message - Blinking - ZCTRB


          See No. 17

     8.9  No. 19 - Print Centered Message - Underlined - ZCTRU


          See No. 17


















     Monitor                           - 25 -        Computerenergy Corporation

                                      CHAPTER 9

                                   ERROR MESSAGES


     9.1  No. 20-26 - Error Messages - ZERRname


          ZERRname is a convenient way to display an error message response for
          either an entry that fails a test or an invalid entry type.  

          The responses provided  are: "Invalid", "Not Integer", "Not Numeric",
          "Function  =  nn  Not  Available  at  this  Point",  "ENTER-Only  Not
          Available at this Point", "Backup Entry Not Available at this Point",
          and "Help Not Available at this Point".  

          Where appropriate,  the  value  of the  failing variable is displayed
          with  the  error messages.   The message  will  appear just below the
          entry line, centered, and in reverse video.  Each message also pauses
          for approximately 1.5 seconds.  

          SET: 

               ZD$ = Item to be shown as in error.
                         Note: Use ZCTL% for Func. Key on msg 23

          FORMAT:

               Each error routine is  called with its own number  after placing
               the offending information in ZD$ if it is not already there.  

                    Z = No.   Error Message
                    -------   ----------------------------------

                      20      "Is Invalid"
                      21      "Is Not an Integer Number"
                      22      "Is Not Numeric"
                      23      "Function Key = nn Not Available at this Point"
                      24      "Field Backup Entry Not Available at this Point"
                      25      "ENTER-Only Entry Not Available at this Point"
                      26      "HELP Not Available at this Point"

               The Format in all cases is:

                    ZD$ = N$ : Z=nn : GOSUB 100












     Monitor                           - 26 -        Computerenergy Corporation

                                     CHAPTER 10

                      MONITOR LINE USAGE MAP/SPECIAL VARIABLES



     10.1  Monitor Line Number Usage Map


           Line No.   Description
           --------   --------------------------------------------------

           10         REMark for Program Title and Date
           15         Insert User Program Title for Display
           25         Change END if required for linking
           30         ZHELPSW% - 0=off, 1=on
           35         Setup
           40         Soft Key Disable
           45-70      Setup
           75         ZTFAC Timing Factor
           80         ZTMENU DIM's
           90         Display Box Title and GOTO 10000
           95 - 9999  Reserved for Monitor and other products
           10000      REM Enter User Program beginning here.



     10.2  Special Variables


           There are  several  special  variables that  are used within Monitor
           that may be of use to you.  

           Variable   Description
           --------   ---------------------------------------------------------

           ZDT$       Stores current normalized date
           ZENT$      Carriage Return or Enter Symbol
           ZTFAC      Timing delay loop counter (change for compiled code)
           ZTOF$      Printer Top of Form

















     Monitor                           - 27 -        Computerenergy Corporation

                                     CHAPTER 11

                                 STANDALONE ROUTINES


     There are 2  standalone  routines  available  in  Monitor for  use  during
     program development.  If  memory space is a consideration,  these routines
     should be deleted from production or final versions of your programs.  


     11.1  Save Program Routine

          The Save Program  Routine will  save 2 copies of your  program with a
          simple GOSUB 9000  command.  A copy is saved  in encoded Basic format
          (.BAS extension)  and in  ASCII format (.S extension) for  use by the
          Expanding  Lister, CROSSREF,  Basic Compiler, etc.  To initialize the
          routine, enter your program name in the ZPROG$ variable at line 9010.
          Then,  to save  the copies  of your program, enter a  GOSUB 9000 from
          Basic's immediate or command mode.  

          If you forget to initialize the ZPROG$ variable with the name of your
          program, you  will simply save a copy of "PROGNAM.NAM" on your disk -
          no harm will be done.  

          However, BE AWARE,  that if  you are developing a series  of programs
          and  are  using a  copy of  Monitor from another program, the  ZPROG$
          variable may  contain the  wrong program name.  Should you  forget to
          change it,  and delete  the old program lines and  add new ones, when
          you GOSUB 9000, both copies of the original program will be destroyed
          by the new program which will be saved with the old program name.  BE
          CAREFUL!  This is an easy mistake to make (speaking from experience).


     11.2  Program Memory Map

          There is  a  standalone  routine that  will display memory statistics
          during  program  development.  It  is accessed  with  a GOSUB 9100 in
          immediate or command mode.  



















     Monitor                           - 28 -        Computerenergy Corporation

                                     CHAPTER 12

                                  OTHER INFORMATION

     12.1  Distribution Disk Contents - Monitor


               File Name       Description
               ------------    --------------------------------------

               MONITOR.BAS     MONITOR source code
               MONITOR.DOC     Documentation


     12.2  Disclaimer

          All Computerenergy  computer  programs are  distributed on an "as is"
          basis without warranty.  

          Computerenergy Corporation  and/or  any of  its program authors shall
          have no liability  or responsibility to customer or  any other person
          or  entity with  respect to  any liability, loss or damage  caused or
          alleged to be  caused directly or indirectly by  programs distributed
          in  any  manner  by  Computerenergy  Corporation,  including  but not
          limited  to   any  interruption  of  service,  loss  of  business  or
          anticipatory profits  or consequential damages resulting from the use
          or operation of such computer programs.  

          Note: Good data  processing procedure dictates that the user test the
          program,  run  and test  sample sets  of data, and run the  system in
          parallel  with  the  system previously  in use  for  a period of time
          adequate to  insure that results of operation of the computer program
          are satisfactory.  
























     Monitor                           - 29 -        Computerenergy Corporation

                                     CHAPTER 13

                       SUGGESTIONS, FEEDBACK, AND BUG REPORTS

          If you  can  spare the  time, we  would  appreciate your feedback and
          suggestions  to  help  us  to  improve  the  Monitor.   As  an  added
          inducement, we will also send a free Monitor (corrected) to the first
          person   reporting   each   bug.    Immediate   family   members   of
          Computerenergy employees are NOT eligible.  Valid bugs do not include
          obvious  architectual  limitations.   If possible,  each bug reported
          should include a  short-as-possible printout of the before  and after
          bug situation with explanatory notes.  Our unprejudiced judging panel
          will  make "Bug  Awards" when  the spirit moves them and,  of course,
          their decisions are final.  

          We are  also aware  of some  esthetic errors when operating with  the
          color  video  interface.   Those still  remaining should be corrected
          soon, but we'd still like to hear about any you find.  

          Please address correspondence  to the address on the title page.  (If
          you've lost your title page, just send us a note and we'll send you a
          new one.) 



































     Monitor                           - 30 -        Computerenergy Corporation






















     Monitor            
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0008

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       886  11-09-84   7:49a
    CRMAIL   EXE     34176  11-18-82  11:21a
    CROSSOPT           128  11-20-82  11:44a
    CROSSREF DOC     15488  11-18-82  12:11a
    CROSSREF EXE     43392  12-05-82   4:11a
    CROSSWDS DAT       902  11-26-82   4:06a
    MONITOR  BAS      7296  12-04-82   3:08a
    MONITOR  DOC     55168  12-04-82  12:59a
            8 file(s)     157436 bytes
                            1024 bytes free
