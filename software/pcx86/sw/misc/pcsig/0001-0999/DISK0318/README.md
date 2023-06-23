---
layout: page
title: "PC-SIG Diskette Library (Disk #318)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0318/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0318"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBASE II PROGRAMS"

    The programs on this disk are all for use with dBASE II.  Some knowledge
    of the language is assumed.  The first four sections shown below are
    dBASE example programs and their format, index, and data files.  The
    last section is a collection of dBASE utility programs that make life a
    little bit easier for the dBASE user.
    
    System Requirements:  Two disk drives; dBASE II or III
    
    How to Start: To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  To run dBASE programs, bring up dBASE II then load in
    the selected program file.
    
    File Descriptions:
    
    ???      PRG  Other dBase program files
    ???      FMT  Other dBase report files
    DBASE1   DOC
    DBASE1   BAT
    ADD      PRG
    MAIN     PRG
    LASTNAME NDX
    CAPITAL  DBF
    GETDATA  FMT
    DELCHECK PRG
    DELETE   PRG
    PRINT    FMT
    DIRECTOR PRG
    HELP     PRG
    EDIT     PRG
    ADD      MEM
    INIT     PRG
    MAILMEN  DOC
    MAILINP  PRG
    MAILED   PRG
    MAIL     DBF
    GETMAIL  FMT
    BIRTHDAY PRG
    REPORT   FMT
    SIGN-ON  PRG
    DATE     PRG
    LAB-SEL  PRG
    CRT-SEL  PRG
    MENU     PRG
    DUPREM   PRG
    DUPCHECK PRG
    MAINTAIN PRG
    LABEL    PRG
    DOP      DOC  Documentation for DOP2 and DOP3
    MAILSET  MEM
    XMASLAB  PRG
    PRINTROL PRG
    PRINTMEN FMT
    PRINTLAB PRG
    PRINTIND PRG
    PRINTCAT PRG
    MAILMEN  PRG
    COPYFLD  PRG  Copies fields from one file to another
    COPYFLD  DOC  Documentation for COPYFLD.PRG
    DBS      EXE  Helps create dBASE II & III screens
    COMP     NDX
    DBASEGRF CMD  Graph program for dBASE II data files
    LAST     NDX
    DBASECHG BAS  Allows field changes without changing structure file
    PROF1    NDX
    -------- ---
    PROF2    NDX
    MAILDEL  PRG
    PROF3    NDX
    MAILED   BAK
    MAILSET  PRG
    TRACK_IT PRG
    TRACK_IT DBT
    LISTDB2  PRG
    TRACKCO  NDX
    TRACKMEM FMT
    TRACKDEX PRG
    LISTDB3  PRG
    TRACK_IT DBF
    TRACKSTS NDX
    TRACKRST DBF
    TRACKRDX NDX
    TRACKPRO PRG
    TRACKPRD NDX
    TRACKNXT NDX
    TRACKNME NDX
    DOP2     PRG  Menu driven file inspect and change system for dBASE II
    DBASE2C1 COM  Puts color into dBASE programs
    DOP3     PRG  Menu driven file inspect and change system for dBASE III
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COPYFLD.DOC

{% raw %}
```

     Documentation Maintained by PC Professional Users Group
               P.O. Box 2350 Wilmington DE. 19899
FILENAME:               COPYFLD.PRG
PROGRAM NAME:           Copyfield program
VERSION NUMBER:         1.0
VERSION DATE:           00-00-00
AUTHOR (ORIGINAL):      Kenneth Eagle
" ADDRESS/PHONE:        2304 Rockwell Rd.      302-475-2763
LATEST REVISOR:         .
" ADDRESS/PHONE:        .
OBTAINED FROM:          Author
PROGRAM TYPE:           dBASEII Utility
********************** EQUIPMENT REQUIRED **********************
The dBASEII Program
********************* PURPOSE; DESCRIPTION *********************
A generalized dBASEII utility to copy a field or combination of
fields from one file to another.  It has much greater speed than
the JOIN operation, and can be used in a number of different ways.
************************* INSTRUCTIONS *************************
-Copy this program onto your dBASE working disk
-Bootup in any DOS (if not already done).
-Type DBASE <RETURN/ENTER key>
-Type DO COPYFLD <RETURN/ENTER key>
-Further instructions included in the program.
-To end program prematurely, push Esc key

************************* PECULIARITIES ************************
-There must be room on your data disk for up to 2 index files
 if your TO and FROM files are not in order.
-Some earlier versions of the dBASE program (eg CP/M) require
 that a command program of this sort have an extension of .CMD.
 If you have one of these versions, rename the program to
 COPYFLD.CMD (This utility has been tested on both an IBM-PC
 and a SUPERBRAIN II.
-The default convention for macros has been used i.e. an &
 If your dBASE has been installed with some other symbol,
 you must change all "&"s to that symbol
*********************** GENERAL COMMENTS ***********************
-Copyright 1983 by Kenneth Eagle
 This program is contributed to the public domain with the
 restriction that it may not be used for commercial purposes
 without written permission from the author.

 A dBASEII program to copy field(s) from one file to another
 Both files must contain a common 'KEY FIELD'.
 Both files must be in order of (or indexed on) 'KEYFIELD'.
   (the program will do this on a temporary basis if you like)
 FROM file must have a KEYFIELD entry for every one in the TO file.
 As presently programmed, the TO file must already be structured
 with the field to be copied into already created (filled or empty)

-I have found this utility to be useful for a number of different
 purposes.  I have used it to change identification codes using
 a cross-reference list as the FROM file.  It is very effective
 for "merging" one or two fields from one file to another without
 the complication (and slowness!) of a third file created by the
 "JOIN" operation.  Another useful feature is the ability to
 combine two or more fields into a single field "as you go".
 For example. Suppose the FROM file has two fields called
 FIRSTNAME and LASTNAME with entries of KEN and EAGLE respectively,
 and you want to combine these into a single field called NAME in
 the TO file. When the program asks for the FROM field name, you
 respond with LASTNAME-","-FIRSTNAME (using standard dBASE con-
 ventions). The answer to the TO field name question would be
 NAME. The result in the TO file's NAME field would be a single
 entry of: EAGLE,KEN .  The more I work with this utility, the
 more uses I find for it.

-An improvement would be: add a way to automatically create the
 new field in the TO file when it doesn't already exist

```
{% endraw %}

## DBASE1.DOC

{% raw %}
```
DBASE1 - DBASE PROGRAMS - 10/01/83 - FROM CLUB86 DISKETTE

FILE NAME  TYPE  DESCRIPTION

DBASE1     DOC   This file
CAPITAL    DBF   Test Capital PC member data base
LASTNAME   NDX    Index based on last name
MAIN       PRG   Main Capital PC user database program
ADD        PRG    Called by MAIN
GETDATA    FMT        Used by ADD & EDIT
DELCHECK   PRG    ...
DELETE     PRG    ...
DIRECTOR   PRG    ...
PRINT      FMT        Used by DIRECTOR, PRINTER & ROSTER
EDIT       PRG    ...
HELP       PRG    ...
INIT       PRG    ...
ADD        MEM        Used by INIT
LABEL      PRG    ...
MAINTAIN   PRG    ...
DUPCHECK   PRG        Called by MAINTAIN
DUPREM     PRG            Called by DUPCHECK
TWOSHOW    FMT                Used by DUPREM
PURGE      PRG        ...
INDEX      PRG            Called by PURGE
VERIFDEL   PRG        ...
SAYDATA    FMT            Used by VERIFDEL, VERIFNEW & MAIN
VERIFNEW   PRG        ...
MAINTAIN   FMT        Used by MAINTAIN
PRINTER    PRG    ...
ROSTER     PRG    ...
SEARCH     PRG    ...
MENU       PRG   Label printing program for database
CRT-SEL    PRG    Called by MENU
LAB-SEL    PRG    ...
DBASECHG   BAS   Alter fields without reload
DBASEGRF   CMD   DBASE graphics
DATE       PRG   Stand alone program to set date
SIGN-ON    PRG   Stand alone program to set sign on
REPORT     FMT   Undetermined use
MAILMEN    DOC   "FREEWARE" mailing and telephone listing
MAIL       DBF    ...
GETMAIL    FMT    ...
PRINTMEN   FMT    ...
MAILSET    MEM    ...
COMP       NDX    ...
LAST       NDX    ...
PROF1      NDX    ...
PROF2      NDX    ...
PROF3      NDX    ...
BIRTHDAY   PRG    ...
MAILDEL    PRG    ...
MAILED     PRG    ...
MAILINP    PRG    ...
MAILMEN    PRG    ...
MAILSET    PRG    ...
PRINTCAT   PRG    ...
PRINTIND   PRG    ...
PRINTLAB   PRG    ...
PRINTROL   PRG    ...
XMASLAB    PRG    ...

```
{% endraw %}

## DBASECHG.BAS

{% raw %}
```bas
10 DEFINT A-Z:FALSE=0:TRUE=NOT FALSE:DIM F$(50),T$(50),L$(50),HOLD$(5)
20 ON ERROR GOTO 930:TST$="ABCDEFG":CLS:LOCATE 10,1 'DBASECHG.BAS
30 PRINT"This program is designed to allow you to change the names
40 PRINT"of any of the fields in a dBASEII file without the struggle of
50 PRINT"exporting the file and creating a new structure, There are rules.
60 PRINT
70 PRINT"1. You can not use any unauthorized characters in a field name.
80 PRINT"2. You have  to be careful about duplicate field names.":PRINT
90 PRINT"If you end up with 2 Field names identical, Just change one back...
100 PRINT"Follow the directions and enjoy another utility by---":PRINT
110 PRINT"Rich Schinnell, Rockville, MD. (301) 949-9292
120 INPUT " Press <ENTER> to continue ";RICH$
130 KEY OFF:CLS:LOCATE 5,1,1:PRINT "Change any field name in a dBASE II file"
140 PRINT "By Rich Schinnell, Rockville,MD  FREE to all *"
150 LOCATE 14,1:PRINT "Which drive is the dBASE file located on?"
160 LOCATE 16,1,1:INPUT "ABCDEFG [Press Enter to Quit] ";A$
170 IF A$="" THEN KEY ON:CLOSE:END
180 IF ASC(A$)>72 THEN A$=CHR$(ASC(A$)-32)
190 IF INSTR(TST$,A$)<1 THEN BEEP:GOTO 130
200 A$=A$+":"
210 CLS:FILES A$+"*.DBF"
220 PRINT"Enter the File Name without the .DBF "
230 INPUT ;"Which dBASE file do you wish to change field names ";B$
240 IF LEN(B$)<1 THEN GOTO 920
250 IF INSTR(B$,".")>0 THEN GOTO 920
260 C$=A$+B$+".DBF":OPEN C$ FOR INPUT AS #1:CLOSE #1
270 OPEN C$ AS #1 LEN=128
280 FIELD #1,128 AS I$
290 'This is where the first 5 128 Char groups from the header are extracted
300 FOR I=1 TO 5
310    GET #1,I
320    HOLD$(I)=I$
330 NEXT I
340 B$=HOLD$(1):X=9:B=1
350 FOR I=1 TO 7
360    F$(B)=MID$(B$,X,10)
370    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
380    T$(B)=MID$(B$,X+11,1)
390 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740 'check for last field name
400 X=X+16:B=B+1
410 NEXT I
420 B$=RIGHT$(HOLD$(1),8)+HOLD$(2):X=1:B=8
430 FOR I=1 TO 8
440    F$(B)=MID$(B$,X,10)
450    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
460    T$(B)=MID$(B$,X+11,1)
470 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
480 X=X+16:B=B+1
490 NEXT I
500 B$=RIGHT$(HOLD$(2),8)+HOLD$(3):X=1:B=16
510 FOR I=1 TO 8
520    F$(B)=MID$(B$,X,10)
530    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
540    T$(B)=MID$(B$,X+11,1)
550 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
560 X=X+16:B=B+1
570 NEXT I
580 B$=RIGHT$(HOLD$(3),8)+HOLD$(4):X=1:B=24
590 FOR I=1 TO 8
600    F$(B)=MID$(B$,X,10)
610    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
620    T$(B)=MID$(B$,X+11,1)
630 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
640 X=X+16:B=B+1
650 NEXT I
660 B$=RIGHT$(HOLD$(4),8)+HOLD$(5):X=1:B=32
670 FOR I=1 TO 1
680    F$(B)=MID$(B$,X,10)
690    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
700    T$(B)=MID$(B$,X+11,1)
710 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
720 X=X+16:B=B+1
730 NEXT I:TOP=B-1
740 MM=ASC(MID$(HOLD$(1),4,1))  'unfold date of last update
750 DD=ASC(MID$(HOLD$(1),5,1))
760 YY=ASC(MID$(HOLD$(1),6,1))
770 LL=(ASC(MID$(HOLD$(1),8,1))*256)+ASC(MID$(HOLD$(1),7,1)) 'rec length
780 MM$=MID$(STR$(MM),2,2):DD$="-"+MID$(STR$(DD),2,2):YY$="-"+MID$(STR$(1900+YY),2,4)
790 TR=(ASC(MID$(HOLD$(1),3,1))*256)+ASC(MID$(HOLD$(1),2,1))
800 CLS  ' TR is number of records in data base.. first 8 chars is all this
810 PRINT "your data base was last updated on  ";MM$;DD$;YY$
820 PRINT "Your records are";LL;" characters long"
830 PRINT TR;" Records in Data Base ";C$
840   PRINT  "F# Field Name    Type   Size"
850 C=5:XX=1:FOR I=1 TO TOP
860   LOCATE C,XX
870   PRINT USING "## \        \   \  \   \ \  ";I;F$(I);T$(I);L$(I);
880   C=C+1:IF C>20 THEN C=5:XX=40
890 NEXT I
900 GOTO 990
910 LOCATE 23,1,1
920 CLOSE:KEY ON:END
930 ' ERROR TRAPPING ROUTINE
940 IF ERL=210 THEN PRINT "No Data Base files on Drive ";A$:SOUND 32767,36:SOUND 32767,0:RESUME 160
950 IF ERL=260 THEN CLOSE #1:PRINT
960 IF ERL=260 THEN LOCATE 12,1:PRINT "FILE ";C$;" Does not exist, try again":SOUND 750,2:SOUND 400,1:SOUND 500,2:SOUND 32767,36:SOUND 32767,1:RESUME 210
970 PRINT ERR;" has occured in line #;"ERL
980 END
990 'change the field names
1000 LOCATE 21,1:NEW1$=""
1010 INPUT "Enter the Field Number of the Field name you wish to Change";CH$
1020 IF CH$="" THEN 920
1030 A=VAL(CH$):IF A>TOP THEN PRINT "Bad field number":GOTO 920
1040 IF A<1 THEN PRINT "Bad field number":GOTO 920
1050 LOCATE 22,1:COLOR 0,7:PRINT F$(A);" Field #";A;:COLOR 7,0
1060 LOCATE 23,1:INPUT "Enter New Field Name, No Spaces (10 MAX) ";N$
1070 IF LEN(N$)>10 THEN BEEP:N$=LEFT$(N$,10)
1080 FOR I=1 TO LEN(N$):CASE=ASC(MID$(N$,I,1)):IF CASE>96 AND CASE<123 THEN CASE=CASE-32:NEW1$=NEW1$+CHR$(CASE):GOTO 1130
1090  IF CASE=58 THEN 1120
1100  IF CASE>47 AND CASE<58 THEN 1120
1110 IF (CASE<64 OR CASE>91) THEN NEW1$=NEW1$+STRING$(10-LEN(NEW1$),0):GOTO 1140
1120  NEW1$=NEW1$+CHR$(CASE)
1130 NEXT I:NEW1$=NEW1$+STRING$(10-LEN(NEW1$),0)
1140 LOCATE 23,60:COLOR 0,7:PRINT NEW1$;"   (ok Y/N)?";:COLOR 7,0:BEEP
1150 ANS$= INKEY$:IF LEN(ANS$)<1 THEN 1150 ELSE IF ANS$="Y" OR ANS$="y" THEN GOTO 1170
1160 KEY ON:CLOSE:END
1170 ' change the field names as per instructions....
1180 IF A>8 THEN 1230
1190 A1=A-1
1200 MID$(HOLD$(1),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(1):PUT #1,1
1210 IF A=8 THEN MID$(HOLD$(2),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(2):PUT #1,2
1220 GOTO 1370
1230 IF A>16 THEN 1280
1240 A1=A-9
1250 MID$(HOLD$(2),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(2):PUT #1,2
1260 IF A=16 THEN MID$(HOLD$(3),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(3):PUT #1,3
1270 GOTO 1370
1280 IF A>24 THEN 1330
1290 A1=A-17
1300 MID$(HOLD$(3),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(3):PUT #1,3
1310 IF A=24 THEN MID$(HOLD$(4),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(4):PUT #1,4
1320 GOTO 1370
1330 ' put the last one in
1340 A1=A-25
1350 MID$(HOLD$(4),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(4):PUT #1,4
1360 IF A=32 THEN MID$(HOLD$(5),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(5):PUT #1,5
1370 FOR X=21 TO 24:LOCATE X,1:PRINT SPC(79);:NEXT X
1380 LOCATE 21,1:INPUT "Another Change (Y/N) ? ";ANS$
1390 IF ANS$="Y" OR ANS$="y" THEN 300
1400 GOTO 920
1410 'Please make any changes to this program you wish
1420 'You better be careful in doing so, as you can destroy your data base file
1430 'so I recommend you always work with a copy of the dBASE file..
1440 'Rich Schinnell, 13527 Turkey Branch Parkway, Rockville, MD 20853
1450 'Voice (301) 949-9292 : Data (301) 949-8848
```
{% endraw %}

## DOP.DOC

{% raw %}
```

                           DOCUMENTATION FOR DOP.PRG
                            DBASE II  &  DBASE III

     BY: Gary C. Arey
         1030 Holland Dr.
         Garland, Texas  75040

          DOP.PRG is a front end program written to make DBASE II and
     DBASE III easy to use and effective for simple file management.  All
     options are effected from the main menu of DOP and upon completion of
     each option the user is taken back to the main menu.  Exit options are
     provided for exiting to the DBASE dot prompt or to DOS.

          The program is written in two slightly different versions one for
     DBASE II and the other for DBASE III.  The DBASE III version supports
     additional features in DBASE III such as sorting without leaving DBASE,
     obtaining a DIR of files on the default drive and some differences in
     the way the Report Forms are handled.

     Section 1:  THE MAIN MENU

          The DOP.PRG menu for DBASE II is shown below:


                          DBASE II OPERATIONS MENU
                          ========================

              The Current .DBF File Now in Use is :  ________

         1> List
         2> Browse                           <S> Save Current Data File
         3> Edit Record                      <I> Initialize Data File
         4> Search Character Field           <E> Erase Data File
         5> Search Numeric Field             <C> Create .DBF
         6> Append (Add Records)             <N> Change Database
         7> Mark to Delete                   <D> Delete (Pack)
         8> Report to Screen                 <P> Report Print
         9> View Structure                   <F> View Files
         X> Exit to DBASE . Prompt           <Q> Quit to DOS


          The DOP.PRG menu for DBASE III is as follows:


                         DBASE III OPERATIONS MENU
                         =========================

              The Current .DBF File Now in Use is :  ________

         1> List                             <C> Create .DBF
         2> Browse                           <S> Sort File
         3> Edit Record                      <E> Erase File
         4> Search Character Field           <L> DIR Files on Drive
         5> Search Numeric Field             <R> Create/Modify Report
         6> Append (Add Records)             <N> Change Database
         7> Mark to Delete                   <D> Delete (Pack)
         8> Report to Screen                 <P> Report Print
         9> View Structure                   <F> View Files
         X> Exit to DBASE . Prompt           <Q> Quit to DOS





-





     To select your option from the main menu simply enter the letter or
     number of your choice, do not enter a return, you will be taken to
     your selection by pressing the letter or number key on the main menu.

          DOP is started from inside DBASE, at the dot prompt type: DO DOP
     and you will be presented with a list of the database files on the
     default drive and asked to select one for current use.  After you make
     your selection, the main menu will appear.  When the DOP files are
     extracted from the DOP Library, they are named as follows:

              DOP.DOC - Documentation for DOP

              DOP2.PRG - The DOP Program for DBASE II

              DOP3.PRG - The DOP Program for DBASE III

          You may rename either DOP2 or DOP3 to DOP.PRG for use with the
     version of DBASE that you have.  Once that is done the program will
     start with the command:  DO DOP

     Section 2:  DOP COMMAND FUNCTIONS

          LIST:  This option is the DBASE List option; select the beginning
     record number at the prompt and your records will list in order on the
     screen until the last record in the file is listed.

          BROWSE:  Allows you to Browse the records from the beginning record
     number which you select.  You may modify and edit the records as allowed
     in DBASE and all the same DBASE commands for the BROWSE function apply.

          EDIT:  Places you in Edit mode at the beginning record number you
     select and all DBASE Edit commands apply.

          APPEND:  Allows records to be added to the database in use.

          MARK TO DELETE:  Marks the selected record number for deletion.

          DELETE:  Deletes marked records from the database.

          VIEW STRUCTURE:  Places the field information and record information
     for the current database in use on the screen.

          VIEW FILES:  Allows the names of all files of a particular type to
     be viewed on the screen.  Just select the file type such as .PRG  .DBF
     .FRM  or any other listed file type and DOP will display all files of
     the selected type that are on the default drive to the screen.

          CREATE .DBF:  Places DBASE in the Create mode to allow a new
     database to be created and then used.

          CHANGE DATABASE:  With this function you may change from the current
     database to use another .DBF file and again all .DBF files on the default
     drive are listed so the choice may be made.

          ERASE FILE:  Allows files to be erased from the default drive.





-






          EXIT TO DBASE . PROMPT:  Takes you out of DOP, closes all files
     in use and clears all memory variables and presents you with the DBASE
     dot prompt.

          QUIT TO DOS:  Takes you out of DOP, closes all files in use and
     clears all memory variables and ends the DBASE run by quitting DBASE.


     SECTION 3:  SEARCHES

          Options 4 and 5 are the Search Options in DOP.  Option 4 conducts
     a search of a CHARACTER field.  The search is a Character String Search
     and will find any stated character string.  For example, suppose your
     database used the field heading NAME and one of the records contained
     the name  GARY AREY.  You would select option 4 and DOP would ask for
     the field name you wished to search on after it showed you the field
     names in the database.  You would enter NAME for the field name and
     DOP would ask for the search characters.  You could enter  GARY,
     GARY AREY, AREY, or even ARE and DOP would find the record or records
     that match the search string.  As you can see, this search method is
     very flexible.

          DOP also searches on more than one field at a time and will print
     the results of a search if you answer the appropriate questions to
     cause that to occur.


     SECTION 4:  REPORT FUNCTIONS

          These functions vary slightly in the DBASE II and DBASE III versions
     of DOP.

          DBASE II:  Option 8  Report to Screen executes the standard Report
     function of DBASE II and allows for the creation of reports if none exist.
     Option P  Report Print will print the selected number of Report Form
     reports that have already been created by Option 8.

          DBASE III:  Option R allows the Creation or Modifying of DBASE
     Report Forms, Option 8 allows the Reports to be displayed on the screen
     and Option P provides for the printing of Reports that have been created.


     Section 5:  DBASE II OPTIONS

          Option S  Save Current Data File - saves the database in use to a
     name that you choose to give it thus allowing copies of the database
     to be made with different names.

          Option I  Initialize Data File - executes the DBASE Modify Structure
     command so that a file may be Initialized or emptied of all records.
     WARNING!!  THIS COMMAND ERASES ALL RECORDS IN A FILE; the user is warned
     of this and given an opportunity to abort the command and return to the
     main menu.  Of course the structure of a file may be modified with this
     command also but the file is nevertheless purged of all records.





-





          The above two options may be used in conjunction with each other to
     save a file of records to another name and then initialize the original
     file purging it of all records to allow for the entry of a different group
     of records into the same file.  This would provide a method of keeping
     data for different clients separate where the structure of the client
     files is the same.


     Section 6:  DBASE III OPTIONS

          Option L  DIR Files on DRIVE - this option executes the DBASE III
     DIR Command to list files on a drive as specified.

          Option S  SORT File - executes the DBASE III SORT option and sorts
     the current database in use to a temporary, copies the temporary back
     onto the original file, and erases the temporary leaving only the original
     database but in the new sorted order.  The SORT option for DBASE II was
     not placed in DOP2 since the DBASE II program DSORT under DBASE VER. 2.41
     will not execute while DBASE is running.


     SECTION 7:  MODIFICATIONS OF DOP

          I believe that DOP provides some good and useful examples of DBASE
     PROGRAM FILES and it is possible to modify DOP and add new features to
     either version.  DOP can also be used on CPM machines running DBASE II.

          I do request that anyone modifying DOP rename it with a name that
     shows it has been modified such as  DOPM____.PRG so that later versions
     may be distinguished from my originals, and further that my name and
     the heading not be removed from DOP under any circumstance.


     Section 8:  RIGHT TO USE OF DOP - PUBLIC DOMAIN

         I have written DOP to aid users of DBASE II and III by providing
                      a useful example of DBASE programming.
         I HEREBY PLACE DOP2.PRG AND DOP3.PRG IN THE PUBLIC DOMAIN AS TEXT
            FILES WHICH MAY BE USED AND PASSED ON TO OTHERS AS NECESSARY.

        If you find DOP useful or helpful any contributions you deem it
           proper to make will be accepted for expenses incurred in
                    production and distribution of DOP.

                           Gary C. Arey
                           1030 Holland Dr.
                           Garland, Tx.  75040

          September 2, 1984
y
                       
```
{% endraw %}

## FILES318.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 318  dBASE II Programs                                  v1.1 DS2
------------------------------------------------------------------------
 
The programs on this disk are all for use with dBASE II. At least some
knowledge of the language is assumed. The first four sections shown
below are dBASE example programs and their format, index, and data
files. The last section is a collection of dBASE utility programs that
make life a little bit easier for the dBASE user.
 
------------
The programs in this section are parts of a membership listing program
used by a SIG or other users group. DBASE1.BAT copies the files in
this section. MAIN.PRG starts the program.
 
DBASE1   BAT
DBASE1   DOC
CAPITAL  DBF
LASTNAME NDX
MAIN     PRG
ADD      PRG
GETDATA  FMT
DELCHECK PRG
DELETE   PRG
DIRECTOR PRG
PRINT    FMT
EDIT     PRG
HELP     PRG
INIT     PRG
ADD      MEM
LABEL    PRG
MAINTAIN PRG
DUPCHECK PRG
DUPREM   PRG
TWOSHOW  FMT
PURGE    PRG
INDEX    PRG
VERIFDEL PRG
SAYDATA  FMT
VERIFNEW PRG
MAINTAIN FMT
PRINTER  PRG
ROSTER   PRG
SEARCH   PRG
------------
This section contains the files for a label printing program.
MENU.PRG starts this program.
 
MENU     PRG
CRT-SEL  PRG
LAB-SEL  PRG
DATE     PRG
SIGN-ON  PRG
REPORT   FMT
------------
This section contains the files for a sorted mailing and telephone list.
 
BIRTHDAY PRG
GETMAIL  FMT
MAIL     DBF
MAILED   PRG
MAILINP  PRG
MAILMEN  DOC
MAILMEN  PRG
PRINTCAT PRG
PRINTIND PRG
PRINTLAB PRG
PRINTMEN FMT
PRINTROL PRG
XMASLAB  PRG
MAILSET  MEM
COMP     NDX
LAST     NDX
PROF1    NDX
PROF2    NDX
PROF3    NDX
MAILDEL  PRG
MAILSET  PRG
MAILED   BAK
------------
This section contains the files of a database and tracking system for
products and the companys that make them. The program is confusing and
may have a fatal bug.
 
TRACKCO  NDX
LISTDB2  PRG
LISTDB3  PRG
TRACKDEX PRG
TRACKMEM FMT
TRACKNME NDX
TRACKNXT NDX
TRACKPRD NDX
TRACKPRO PRG
TRACKRDX NDX
TRACKRST DBF
TRACKSTS NDX
TRACK_IT DBF
TRACK_IT DBT
TRACK_IT PRG
------------
DBASECHG BAS  Allows field changes without changing structure file
DBASEGRF CMD  Graph program for dBASE II data files
READ     ME   Documentation for DBS.EXE
DBS      EXE  Helps create dBASE II screens
COPYFLD  DOC  Documentation for COPYFLD.PRG
COPYFLD  PRG  Copies filds from one file to another
DOP      DOC  Documentation for DOP2 and DOP3
DOP2     PRG  Menu driven file inspection and change system for dBASE II
DOP3     PRG  Menu driven file inspection and change system for dBASE III
DBASE2C1 COM  Puts color into dBASE programs
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite D
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright
```
{% endraw %}

## MAILMEN.DOC

{% raw %}
```
                      THE MAILMEN PROGRAMS
                       Version 1.1 4/26/84

These are programs for a sorted mailing and telephone list written 
for DBASE 2.3D and 2.4. They are being distributed under the 
"Free Ware" concept. The total package consists of the following 
programs, written and copyrighted by Philip K. Perlman :


             MAIL     DBF     1024   4-16-84  12:57p
             MAILMEN  DOC     5632   4-01-84  12:20a
             GETMAIL  FMT     2560   4-16-84  12:52p
             PRINTMEN FMT     2048   4-26-84   1:34a
             MAILSET  MEM     1024   4-26-84   3:54a
             COMP     NDX     1024   4-10-84   3:07a
             LAST     NDX     1024   4-10-84   3:07a
             PROF1    NDX     1024   4-10-84   3:07a
             PROF2    NDX     1024   4-10-84   3:07a
             PROF3    NDX     1024   4-10-84   3:07a
             BIRTHDAY PRG      768   4-25-84  11:26p
             MAILDEL  PRG      512   4-26-84   3:59a
             MAILED   PRG     5120   4-26-84   2:34a
             MAILINP  PRG     1536   4-26-84   2:30a
             MAILMEN  PRG     1536   4-26-84   1:38a
             MAILSET  PRG     1536   4-26-84   4:05a
             PRINTCAT PRG     6656   4-26-84   3:43a
             PRINTIND PRG     1024   4-26-84   2:20a
             PRINTLAB PRG     3072   4-26-84   2:15a
             PRINTROL PRG     4096   4-26-84   2:16a
             XMASLAB  PRG     1408   4-26-84  12:59a
                 (21 Files) 

You are encouraged to copy and share this program with other users 
on the conditions that the progrms are not distributed in modified 
form, that no fee or consideration is charged, that all of the 
programs are distributed as one package, and that this program 
(MAILMEN.DOC) is not bybassed or removed. 

If you find this program is helpful your contribution ($15 sugessted) 
will be appreciated. Upon receipt of your contribution you will be 
mailed a disk containing the latest version of the program.

This program is not being distributed in Run Time version for 
several reasons:

* Run Time would add appreciably to the costs 
* Run Time would not permit you to examine the programs and improve
  on the program                                  

Any improvements on the program would be appreciated. Thank you.

		Philip K. Perlman 
		116 West 29th Street
		NYC, NY 10001


               DESCRIPTION OF PROGAM AND FUNCTIONS


<1> INSTALLATION

This progam is completely menu driven and requires little or no 
written instructions except for the following:

* If you are using a PC without hard disk drive, copy the following
  files onto the disk containing your DBASE II files (DBASE.COM, 
  DBASEOVR.COM, DBASEMSG.TXT):
        All files ending with the extension '.PRG'
        All files ending with the extension '.FMT'
        The one file called 'MEMSET.MEM'

* Your database files may be on another disk drive; that is,
  all of the files ending in '.dbf ' and  '.ndx'.

* If you are using an XT or Compaq with a hard disk copy these 
  programs and all other files onto the hard disk directory 
  where your dbaseII programs reside.

* Once the progams are resident with dbaseII either on diskette 
  or hard disk you may start the progam by:

	1. Entering dbaseII and typing "do mailmen"
	2. Typing "dbase mailmen" at your dos.prompt
	3. Creating a batch file to enter the program


<2> OPERATION   --  DATA REQUEST AND PRESENTATION SCREEN

+==============================================================+
|                ADD INFORMATION BELOW                         |
|                                                              |
|  When you are finished, check your entries carefully before  |
|                  continuing.                                 |
+==============================================================+
|  Company                                                     |
|                                                              |
|  First                       Last                            |
|  Address line 1                                              |
|  Address line 2                                              |
|  City                  State     Zip                         |
|                                                              |
|  Business tel                Home tel                        |
|                                                              |
|  Friend          Business           Birthday                 |
|                                                              |
|  Prior. 1                       Prior.2                      |
|  Prior. 3                                                    |
|                                                              |
|  Comment                                                     |
|                                                              |
+==============================================================+

  
You will be entering and retrieving information using the above 
screen. The items "Friend, Business, Birthday, Prior. 1, Prior. 2, 
Prior. 3" are those upon which the sorting will be based. 

Entering an "x" at "Friend" or "Business" will serve to separate 
business lists from lists of friends.

Entering someone's birthdate will permit you to mail cards with 
labels. We find it easy to print out a couple of times a year 
the "Birthday" list and then mail the cards or gifts as the time 
arises.

-- Prior. 1,2, 3 --

These are sorting categories for professions. You can use them 
for almost anything. We happen to also be in the construction 
business. When we enter the name of a subcontractor and/or 
individual who happens to be a carpenter, we enter "carpenter" 
in Prior 1- if this individual or company is primarily providing 
carpentry services. If he or they have other services then we 
can list them in descending priorities in prior 2 and 3. Later 
on, when we are doing a construction job and need a list of 
carpenters we call on the database to provide this. 

Print Indices to the Categories-- prints out a list of the 
various items in prior 1 through 3.


Edit/delete -- does just what it says. We also use it to search 
on screen for names and addresses if we are too lazy to do a new 
printout or can't find the old one. 

Note: In both items 1> and 2> of the Menu--"Add Names to File"
and "View / Edit / Delete Records"--you have the option at times
to delete records. These records are never actually deleted at the 
time but marked for deletion. The reason for this is that since
there are 5 index files as well as the main database file deleting
or "packing" as it is known in dbaseII can take an eternity if you
have a large number of records and so we chose to do this as a 
separate step --purge--that can be exercise while we are engaged in 
something else. Good Luck.

***END OF DOCUMENTATION FOR MAILMEN PROGRAMS****
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0318

     Volume in drive A has no label
     Directory of A:\

    DBASE1   BAT      1178   4-30-84   6:38p
    DBASE1   DOC      1902   4-30-84   6:37p
    CAPITAL  DBF      1024   5-17-85  10:12a
    LASTNAME NDX      1024   5-19-83   2:37p
    MAIN     PRG      2176   5-13-83   8:42p
    ADD      PRG      1664   5-13-83   8:44p
    GETDATA  FMT      1920   5-13-83   8:34p
    DELCHECK PRG       384   5-13-83   8:51p
    DELETE   PRG       256   5-13-83   8:44p
    DIRECTOR PRG      4352   5-13-83   9:14p
    PRINT    FMT      2048   5-13-83   8:39p
    EDIT     PRG      1408   5-13-83   8:46p
    HELP     PRG      1152   5-13-83   8:47p
    INIT     PRG      1152   5-13-83   8:52p
    ADD      MEM      3072   5-19-83   2:18p
    LABEL    PRG       640   5-13-83   8:49p
    MAINTAIN PRG      1024   5-13-83   8:53p
    DUPCHECK PRG      1152   5-13-83   8:54p
    DUPREM   PRG      2176   5-13-83   9:02p
    TWOSHOW  FMT      2176   5-13-83   8:37p
    PURGE    PRG      1280   5-13-83   9:03p
    INDEX    PRG       384   5-13-83   9:04p
    VERIFDEL PRG      1408   5-13-83   9:07p
    SAYDATA  FMT      1880   5-19-83   3:58p
    VERIFNEW PRG      1536   5-13-83   9:06p
    MAINTAIN FMT      1920   5-13-83   8:40p
    PRINTER  PRG      1152   5-13-83   8:50p
    ROSTER   PRG      3328   5-13-83   9:11p
    SEARCH   PRG      1280   5-13-83   8:48p
    MENU     PRG      2048   6-21-83   4:54p
    CRT-SEL  PRG       640   6-21-83   4:58p
    LAB-SEL  PRG      2048   6-21-83   5:00p
    DATE     PRG       640   6-21-83   4:59p
    SIGN-ON  PRG       512   6-21-83   4:57p
    REPORT   FMT      2048   6-21-83   4:56p
    BIRTHDAY PRG       768   9-13-84   4:22p
    GETMAIL  FMT      2560   9-13-84   4:21p
    MAIL     DBF      2560   5-17-85  10:16a
    MAILED   PRG      5120   9-13-84   4:22p
    MAILINP  PRG      1536   9-13-84   4:22p
    MAILMEN  DOC      7168   9-13-84   4:20p
    MAILMEN  PRG      1536   9-13-84   4:23p
    PRINTCAT PRG      6656   9-13-84   4:23p
    PRINTIND PRG      1024   9-13-84   4:23p
    PRINTLAB PRG      3072   9-13-84   4:23p
    PRINTMEN FMT      2048   9-13-84   4:21p
    PRINTROL PRG      4096   9-13-84   4:24p
    XMASLAB  PRG      1408   9-13-84   4:24p
    MAILSET  MEM      1024   9-13-84   4:21p
    COMP     NDX      1024   9-13-84   4:21p
    LAST     NDX      1024   9-13-84   4:21p
    PROF1    NDX      1024   9-13-84   4:21p
    PROF2    NDX      1024   9-13-84   4:22p
    PROF3    NDX      1024   9-13-84   4:22p
    MAILDEL  PRG      1024   9-13-84   4:22p
    MAILSET  PRG      1536   9-13-84   4:23p
    TRACKCO  NDX      1024   2-07-85   2:23p
    LISTDB2  PRG      2944   2-03-85   8:03a
    LISTDB3  PRG      2944   2-03-85   8:04a
    TRACKDEX PRG       591   2-07-85   1:03p
    TRACKMEM FMT       245   2-07-85  12:40p
    TRACKNME NDX      1024   2-07-85   2:23p
    TRACKNXT NDX      1024   2-07-85   2:23p
    TRACKPRD NDX      1024   2-07-85   2:23p
    TRACKPRO PRG      3894   2-07-85   3:19p
    TRACKRDX NDX      1024   2-07-85   2:23p
    TRACKRST DBF       270   2-07-85  12:52p
    TRACKSTS NDX      1024   2-07-85   2:23p
    TRACK_IT DBF       451   2-07-85   3:21p
    TRACK_IT DBT       512   2-07-85   3:21p
    TRACK_IT PRG      5211   2-07-85   2:22p
    DBASECHG BAS      5504   4-24-84   9:58p
    DBASEGRF CMD      5376   4-13-84  11:32p
    MAILED   BAK      5120   1-01-80  12:17a
    DBS      EXE     39936   7-13-86   2:39p
    READ     ME       1024   7-13-86   2:43p
    COPYFLD  DOC      3712  11-20-84   1:40a
    COPYFLD  PRG      4480  11-20-84   1:40a
    DOP      DOC     10368  12-30-84  12:56p
    DOP2     PRG      9088  12-30-84  12:56p
    DOP3     PRG     10240  12-30-84  12:56p
    DBASE2C1 COM      8448   6-11-83  12:17a
    FILES318 TXT      2834   1-04-80  12:26a
           83 file(s)     231576 bytes
                           61440 bytes free
