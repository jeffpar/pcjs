---
layout: page
title: "PC-SIG Diskette Library (Disk #261)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0261/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0261"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUSINESS SAMPLER #1"

    Here is an organizer for the home and office.  A perfect example is
    The Personal Datebook, a menu driven program that maintains a daily
    calendar of appointments, birthdays, memos, events and anything else
    you want to record.  The Address Label System is an address data entry
    system for producing and maintaining customer files, address labels,
    and mailing lists.  It's especially useful for capturing large volumes
    of names and addresses for direct mail advertising.  The combined Cash
    and Hardcash programs are intended to track cash flow transactions.
    This is a simple general ledger which provides a convenient method for
    small businesses to record their cash transactions.
    
    System Requirements: Some programs require BASIC, 2 disk drives
    
    How to Start: Consult the .TXT and .DOC files for directions and
    documentation.  NOTE: Mailing Label program which requires BASRUN.EXE.
    To run the BASIC programs, consult the directions in GETTING STARTED
    for your configuration.  For the .EXE and .COM programs, just type its
    name, i.e., for FILEMAN.COM, type FILEMAN <ENTER>.
    
    Suggested Registration:  Personal Datebook $12.95; Flight-Plan $20.00
    
    File Descriptions:
    
    CONVERT  BAS  Converts address list for use with wordprocessors
    MANUAL   EXE  Display or print the reference manual
    MANUAL   TXT  Reference Manual for Personal Datebook
    MEMO     BAT  Runs MEMO.BAS with proper / parms
    MEMO     BAS  Personal Datebook: Appointments, Addresses, Memos etc.
    -------- ---  Personal Datebook by Lateral Programming, Inc.
    CASH     DOC  Documentation for Cashflow Programs
    HARDCASH BAS  Provides printed records
    CASH     BAS  Data entry, file maintenance, etc.
    -------- ---  Cashflow Program by Gregory N. Doudna
    CONVERT  BAT  Runs CONVERT.BAS with proper / parms
    -------- ---  Mailing Label Package   (BASRUN.EXE required)
    LABELS   EXE  Menu shell for Mailing Label Package
    NEWLAB   EXE  Generates new mailing label file
    SRTLAB   EXE  Sorts labels by ZIP code
    LABELINP EXE  Data entry program for Mailing Label Package
    LABRPT   EXE  File listing and Summary reports
    LABPRT02 EXE  Label Printing program for Mailing Label Package
    LABELS   DOC  Documentation for Mailing Label Package
    SHOWMEMO BAS  Brings up reminder notes on proper dates
    MAKEMEMO BAS  Write reminders to tickler file
    FILEMAN  COM  File Managenment System - very neat!
    -------- ---  File Managenment System
    FLITPLN3 2V   Aids in preparing flight plan (BASIC program)
    -------- ---  FLITEPLN 2.2
    -------- ---  EIGHTCRV Package
    FLITPLN3 DOC  Documentation for FLITEPLN.BAS
    EIGHTCRV SDA  Sample data file
    EIGHTCRV XXX  This description of the EIGHTCRV programs
    EIGHTCRV TXT  Documentation for EIGHTCRV.BAS
    EIGHTCRV BAS  First eight curves to data
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CASH.BAS

{% raw %}
```bas
1000 REM  *****************************************************************
1010 REM  *****************************************************************
1020 REM  **                              Author -->  Gregory N. Doudna  **
1030 REM  **   Program -->  CASH            Date -->  January 1984       **
1040 REM  **                                                             **
1050 REM  **   This program was written to track cash expenditures       **
1060 REM  **   for up to 100 items on a monthly and yearly basis.        **
1070 REM  **   Description for the expenses items are user defined.  It  **
1080 REM  **   expects the program and data to be on the same disk.      **
1090 REM  **   It will create the following files on that disk.          **
1100 REM  **                                                             **
1110 REM  **                 where MMM = month  YY = year                **
1120 REM  **   MMMYY.log     a file for each month/yr data entries       **
1130 REM  **   database.YY   a file for each years cummulative expenses  **
1140 REM  **   acctcode      1 file containing the expense items         **
1150 REM  **                                                             **
1160 REM  *****************************************************************
1170 REM  *****************************************************************
1180 SCREEN 0:KEY OFF:CLS
1190 DIM DATUM#(100,12),ACCT$(99)
1200 GOSUB 2390   'Load the account codes into memory
1210 COMMON DATUM#(),ACCT$(),SYM$
1220 BLANK$=SPACE$(80)
1230 FILL40$="\                                      \"
1240 REM START OF MENU
1250 CLS
1260 PRINT "    1.  Create a New Year's Data File":PRINT
1270 PRINT "    2.  Input Monthly Data to an Existing File":PRINT
1280 PRINT "    3.  Hardcopy Output Routines":PRINT
1290 PRINT "    4.  Edit the Expense Codes":PRINT
1300 PRINT "    5.  Exit":PRINT
1310 PRINT "Select an option number:  ";
1320 ANS$=INKEY$:ANS%=VAL(ANS$)
1330 IF ANS%=0 OR ANS%>5 THEN 1320
1340 CLS:ON ANS% GOSUB 2690,1370,1360,3320,3710
1350 GOTO 1250
1360 CHAIN "HARDCASH",1140
1370 REM START OF THE DATA ENTRY SUBROUTINE
1380 GOSUB 2530
1390 ON ERROR GOTO 2320 
1400 OPEN SYM$ FOR INPUT AS #1:ON ERROR GOTO 0
1410 PRINT:PRINT "Please wait, copying the file into memory"
1420 FOR R%=0 TO 99
1430 FOR C%=1 TO 12:INPUT #1,AMT#:DATUM#(R%,C%)=AMT#:NEXT C%
1440 NEXT R%
1450 CLOSE #1
1460 GOSUB 2860
1470 REM   I%=MONTH COLUMN, MONTH$=MONTH REQUESTED
1480 ENTRYLOG$=MONTH$+YR$+".LOG"
1490 PRINT:PRINT"Starting a New Month's entries or Updating an Existing Month?"
1500 PRINT "(New) or (O)ld:  ";
1510 ANS$=INKEY$
1520 IF ANS$="O" OR ANS$="o" THEN 1610
1530 IF ANS$="N" OR ANS$="n" THEN 1540 ELSE 1510
1540 PRINT CHR$(10);"This request will erase all data for the selected month!"
1550 PRINT"Do you wish to continue: (Y)es or (N)o ";CHR$(7)
1560 ANS$=INKEY$:IF ANS$="Y" OR ANS$="y" THEN 1590
1570 IF ANS$="N" OR ANS$="n" THEN 1610 ELSE 1560
1580 REM  ZERO THE DATA ARRAY COLUMN FOR THIS MONTH
1590 OPEN ENTRYLOG$ FOR OUTPUT AS #2:CLOSE #2
1600 FOR R%=0 TO 99:DATUM#(R%,I%)=0:NEXT R%
1610 OPEN ENTRYLOG$ FOR APPEND AS #2
1620 REM  Draw Screen for data entry
1630 GOSUB 3080
1640 LOCATE 1,1:PRINT "Current File:":LOCATE 1,16:COLOR 0,7:PRINT SYM$:COLOR 7,0
1650 LOCATE 1,30:PRINT "Current Month:":LOCATE 1,45:COLOR 0,7:PRINT MONTH$
1660 COLOR 7,0:LOCATE 3,72:PRINT "AMOUNT"
1670 FOR Y%=4 TO 8 STEP 4
1680 LOCATE Y%,68
1690 FOR X%=68 TO 79:PRINT CHR$(205);:NEXT X%
1700 NEXT Y%
1710 FOR Y%=5 TO 7
1720 LOCATE Y%,68:PRINT CHR$(186):LOCATE Y%,80:PRINT CHR$(186)
1730 NEXT Y%
1740 LOCATE 4,68:PRINT CHR$(201):LOCATE 4,80:PRINT CHR$(187)
1750 LOCATE 8,68:PRINT CHR$(200):LOCATE 8,80:PRINT CHR$(188)
1760 COLOR 0,7     'Inverse Video
1770 LOCATE 15,1:PRINT "      Code:"
1780 LOCATE 17,1:PRINT "    Amount:"
1790 LOCATE 19,1:PRINT "Payed Whom:"
1800 LOCATE 21,1:PRINT "  For What:"
1810 COLOR 15,0   'High Intensity, normal video
1820 REM start of data entry
1830 R%=0:A$="           ":C$="00  "
1840 LOCATE 15,15,1:INPUT CODE$
1850 L=LEN(CODE$):IF L=0 THEN 1940   'use last code entered
1860 IF L>3 THEN 1930
1870 FOR X% = 1 TO L:ANS%=ASC(MID$(CODE$,X%,X%))
1880 IF ANS%<48 OR ANS%>57 THEN 1930
1890 NEXT X%
1900 R%=VAL(CODE$)
1910 IF R%=999 THEN 2240  'STOP ENTRIES
1920 IF R%>=0 AND R%<=99 THEN 1950
1930 PRINT CHR$(7):GOTO 2220
1940 LOCATE 15,16:PRINT R%
1950 LOCATE 6,3:PRINT USING "##";R%
1960 DESC$=ACCT$(R%):AMT#=DATUM#(R%,I%)
1970 LOCATE 6,17:PRINT USING FILL40$;DESC$
1980 LOCATE 6,70:PRINT USING "######.##";AMT#
1990 LOCATE 17,15:INPUT AMT$
2000 L=LEN(AMT$): IF L=0 THEN 2210
2010 IF L<10 THEN 2030
2020 PRINT CHR$(7):GOTO 1990
2030 FOR X%=1 TO L:ANS%=ASC(MID$(AMT$,X%,X%))
2040 IF ANS%=45 OR ANS%=46 THEN 2070
2050 IF ANS%<48 OR ANS%>57 THEN 2210
2060 NEXT X%
2070 CASH#=VAL(AMT$):IF CASH#=0 THEN 2210
2080 AMT#=AMT#+CASH#:DATUM#(R%,I%)=AMT#
2090 LOCATE 6,70:PRINT USING "######.##";AMT#
2100 LOCATE 19,15:LINE INPUT WHO$
2110 IF LEN(WHO$)=0 THEN WHO$=" "
2120 LOCATE 21,15:LINE INPUT WHAT$
2130 IF LEN(WHAT$)=0 THEN WHAT$=" "
2135 L=LEN(CODE$):IF L=1 THEN MID$(C$,1,1)="0"
2140 MID$(C$,3-L,L)=CODE$
2150 L=LEN(AMT$):MID$(A$,12-L,L)=AMT$
2160 PRINT #2, USING"\  \";C$;:PRINT #2, USING"\         \";A$;
2170 PRINT #2,"  ";WHO$;"    ";WHAT$
2180 REM  CLEAR LAST ENTRIES AND RETURN FOR MORE
2190 LOCATE 21,15:L=LEN(WHAT$):PRINT LEFT$(BLANK$,L)
2200 LOCATE 19,15:L=LEN(WHO$):PRINT LEFT$(BLANK$,L)
2210 LOCATE 17,15:L=LEN(AMT$)+2:PRINT LEFT$(BLANK$,L)
2220 LOCATE 15,15:L=LEN(CODE$)+4:PRINT LEFT$(BLANK$,L)
2230 A$="           ":GOTO 1840
2240 REM  Finished Entries, so lets save the work array
2250 COLOR 7,0  'Normal Video
2260 CLS:LOCATE 10,1:PRINT "Please wait, saving the adjusted data.":PRINT
2270 OPEN SYM$ FOR OUTPUT AS #1
2280 FOR R%=0 TO 99
2290 FOR C%=1 TO 12:PRINT #1,DATUM#(R%,C%):NEXT C%
2300 NEXT R%
2310 CLOSE:RETURN 1250
2320 REM  file does not exist error handling
2330 PRINT:PRINT "The file you requested does not exist.  Your must create it"
2340 PRINT "before continuing.  Please run menu option #1"
2350 MID$(SYM$,10,2)="xx"
2360 FOR DELAY = 1 TO 2500:NEXT
2370 RESUME 2380
2380 RETURN 1250
2390 REM  ROUTINE TO OPEN THE ACCTCODE FILE AND COPY IT INTO MEMORY SPACE
2400 ON ERROR GOTO 2450
2410 OPEN "ACCTCODE" FOR INPUT AS #3
2420 ON ERROR GOTO 0
2430 FOR X%=0 TO 99:LINE INPUT #3,DESC$:ACCT$(X%)=DESC$:NEXT
2440 CLOSE #3:RETURN
2450 REM  FILE DOES NOT EXIST, PRINT ERROR AND CHAIN TO PROGRAM
2460 PRINT CHR$(7)
2470 PRINT:PRINT "The accounting code file does not exist.  You must create"
2480 PRINT "this file before you continue.  I will now run the required"
2490 PRINT "routine for you.":PRINT
2500 FOR DELAY=1 TO 2500:NEXT
2510 FILL40$="\                                      \"
2520 RESUME 3300
2530 REM  Subroutine to Create a New or Open  an Existing Database File
2540 CLS
2550 INPUT "What year's file do you want  ";YR$
2560 IF LEN(YR$)=2 THEN 2590
2570 PRINT:PRINT"Year entered wrong, expecting 2 Numeric characters":PRINT
2580 GOTO 2550
2590 YR1$=LEFT$(YR$,1):YR2$=RIGHT$(YR$,1)
2600 YR1=ASC(YR1$):YR2=ASC(YR2$)
2610 IF YR1<48 OR YR1>57 THEN 2630
2620 IF YR2>=48 AND YR2<=57 THEN 2650
2630 PRINT:PRINT"Expecting a value in the range 00 to 99":PRINT
2640 GOTO 2550
2650 IF MID$(SYM$,10,2)=YR$ AND ANS%=2 THEN RETURN 1460
2660 IF MID$(SYM$,10,2)=YR$ AND ANS%=1 THEN RETURN 2710
2670 SYM$="DATABASE."+YR$
2680 RETURN
2690 REM  Subroutine to Create a New Database File
2700 GOSUB 2530
2710 REM attempt to open file read only
2720 ON ERROR GOTO 2780:OPEN SYM$ FOR INPUT AS #1:ON ERROR GOTO 0:CLOSE #1
2730 PRINT "That file already exists.  Try again?  Y/N";
2740 ANS$=INKEY$:IF ANS$="y" OR ANS$="Y" THEN 2700
2750 IF ANS$="n" OR ANS$="N" THEN 2760 ELSE 2740
2760 MID$(SYM$,10,2)="xx"
2770 CLOSE #1:RETURN 1250
2780 REM  Zero the matrix and Open the file
2790 OPEN SYM$ FOR OUTPUT AS #1
2800 PRINT:PRINT "Please be patient.  I am opening and initializing your file."
2810 FOR R%=0 TO 100 'Zero the file
2820 FOR C%=0 TO 12:PRINT #1,0:DATUM#(R%,C%)=0:NEXT C%
2830 NEXT R%
2840 CLOSE #1:RESUME 2850
2850 RETURN 1250
2860 PRINT:INPUT "Which month do you want to work";MON$
2870 IF LEN(MON$)>=3 THEN 2900
2880 PRINT:PRINT "Month request incorrect, must be at least 3 characters"
2890 GOTO 2860
2900 REM  Convert all letters to uppercase
2910 MONTH$=""
2920 FOR I%=1 TO 3
2930 M$=MID$(MON$,I%,1)
2940 IF ASC(M$)>=97 AND ASC(M$)<=122 THEN 2980
2950 IF ASC(M$)>=65 AND ASC(M$)<=90  THEN 2990
2960 PRINT:PRINT"Invalid character in Month requested"
2970 GOTO 2860
2980 M=ASC(M$) - 32:M$=CHR$(M)
2990 MONTH$=MONTH$+M$
3000 NEXT I%
3010 REM check validity of the name requested
3020 MONTHS$="JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC"
3030 FOR I%=1 TO 12
3040 IF MONTH$=MID$(MONTHS$,I%*3-2,3) THEN RETURN
3050 NEXT I%
3060 PRINT:PRINT CHR$(7);"Incorrect month requested  ";MONTH$:PRINT
3070 I%=0:GOTO 2860  'WE DID NOT FIND A MATCH
3080 REM  SUBROUTINE TO DRAW BASIC SCREEN
3090 CLS:COLOR 7,0  'CHANGE TO INVERSE VIDEO
3100 LOCATE 3,2:PRINT "CODE"
3110 LOCATE 3,16:PRINT "DESCRIPTION"
3120 FOR Y%=4 TO 8 STEP 4
3130 LOCATE Y%,2
3140 FOR X%=2 TO 5:PRINT CHR$(205);:NEXT X%
3150 LOCATE Y%,16
3160 FOR X%=16 TO 59:PRINT CHR$(205);:NEXT X%
3170 NEXT Y%
3180 FOR Y%=5 TO 7
3190 LOCATE Y%,1:PRINT CHR$(186):LOCATE Y%,6:PRINT CHR$(186)
3200 LOCATE Y%,15:PRINT CHR$(186):LOCATE Y%,60:PRINT CHR$(186)
3210 NEXT Y%
3220 LOCATE 4,1:PRINT CHR$(201):LOCATE 4,6:PRINT CHR$(187)
3230 LOCATE 4,15:PRINT CHR$(201):LOCATE 4,60:PRINT CHR$(187)
3240 LOCATE 8,1:PRINT CHR$(200):LOCATE 8,6:PRINT CHR$(188)
3250 LOCATE 8,15:PRINT CHR$(200):LOCATE 8,60:PRINT CHR$(188)
3260 COLOR 7,0  'NORMAL VIDEO
3270 LOCATE 11,1: PRINT "Entering       for a Code exits this routine"
3280 COLOR 15:LOCATE 11,11:PRINT "999":COLOR 7
3290 RETURN
3300 REM   Subroutine to Create and Edit Acctcode Entries
3310 FOR X%=0 TO 99:ACCT$(X%)=" ":NEXT
3320 GOSUB 3080     'DRAW SCREEN
3330 LOCATE 15,1:PRINT "Enter a ZERO     to completely delete a description"
3340 COLOR 15:LOCATE 15,14:PRINT "(0)":COLOR 0,7
3350 LOCATE 20,9:PRINT "Code:"
3360 LOCATE 22,2:PRINT "Description:"
3370 COLOR 15,0
3380 CODE% = 0
3390 REM  Start Input Mode
3400 LOCATE 20,15:INPUT CODE$
3410 L=LEN(CODE$): IF L=0 THEN 3510
3420 IF L>3 THEN 3490
3430 FOR X% = 1 TO L:ANS%=ASC(MID$(CODE$,X%,X%))
3440 IF ANS%<48 OR ANS%>57 THEN 3490
3450 NEXT X%
3460 CODE%=VAL(CODE$)
3470 IF CODE%>=0 AND CODE%<=99 THEN 3520
3480 IF CODE%=999 THEN 3640
3490 LOCATE 20,15:PRINT MID$(BLANK$,1,L+2)
3500 PRINT CHR$(7):GOTO 3400
3510 LOCATE 20,15:PRINT CODE%
3520 LOCATE 6,3:PRINT USING "##";CODE%
3530 DESC$=ACCT$(CODE%)
3540 LOCATE 6,17:PRINT USING FILL40$;DESC$
3550 LOCATE 22,16:LINE INPUT;NEWDESC$
3560 IF LEN(NEWDESC$)=0 THEN 3610
3570 IF LEN(NEWDESC$)<>1 OR VAL(NEWDESC$)<>0 THEN 3590
3580 NEWDESC$=" "
3590 N$=NEWDESC$:ACCT$(CODE%)=N$
3600 LOCATE 6,17:PRINT USING FILL40$;N$
3610 LOCATE 20,15:PRINT LEFT$(BLANK$,10)
3620 LOCATE 22,16:L=LEN(NEWDESC$):PRINT LEFT$(BLANK$,L)
3630 GOTO 3400
3640 REM  Routine to Store the current workspace
3650 COLOR 7,0
3660 PRINT:PRINT"Storing the current codes, please wait":PRINT
3670 OPEN "acctcode" FOR OUTPUT AS #3
3680 FOR X%=0 TO 99:PRINT #3,ACCT$(X%):NEXT
3690 CLOSE #3
3700 RETURN 1250
3710 SYSTEM 
```
{% endraw %}

## CASH.DOC

{% raw %}
```













				CASH - HARDCASH

		    Programs to Track Cashflow Transactions
			 For the IBM Personal Computer










				       By

			       Gregory N. Doudna

				     Member
			Silicon Valley Computer Society










				  Version 1.0

				  August, 1984


























			       TABLE OF CONTENTS




	  TOPIC 					 PAGE #
	  --------------------------------------------	 ------

	  INTRODUCTION ...............................	    1
	  Program and File Structures ................	    1
	  File Sizes .................................	    1

	  GETTING STARTED ............................	    2
	  Creating Files .............................	    2
	  Defining Expense Codes .....................	    3
	  Entering Expense Item Descriptions .........	    3
	  Monthly Data Entry .........................	    4
	  Maximum Value Restrictions .................	    5
	  Correcting Input Errors ....................	    5

	  OBTAINING HARDCOPY .........................	    6
	  Listing the Expense Item Descriptions ......	    6
	  Producing Formatted Output of Database Files	    6
	  Listing the Entrylogs ......................	    7

	  PROGRAM MODIFICATIONS ......................	    8
	  Changing Printer Control Codes .............	    9
	  Changing Output Routines to Use 14" Paper ..      9
	  Using a Separate Data Disk .................	    9

	  PROGRAM SUPPORT AND BUG REPORTING ..........	   10

	  --------------------------------------------	 ------


















				       i














				  INTRODUCTION

	       These  programs were developed out of a desire to track
	  my personal expenditures,  identify exactly where I spent my
	  money,  and  provide	a convenient method of	recording  and
	  reporting those transactions.  The resulting set of programs
	  is a simple general ledger that provides a convenient method
	  for a small business to record their cash transactions.  The
	  program  structure is very straight forward and is therefore
	  easy to customize to individual needs.


			  PROGRAM and FILE STRUCTURES

	       This initial offering consists of 2 programs,  Cash and
	  Hardcash.   In addition to program files,  when executed the
	  Cash program will create the following files;

	       ACCTCODE       a SAF of 100  character strings that are
			      user defined expense items.
			      Maximum of 100 expense items.

	       DATABASE.yy    where "yy" is the year as in '84.  There
			      will   be  one  file  for  every	 year.
			      Again a SAF,  this file should be viewed
			      as  a matrix of 12 columns  representing
			      each month,  and 100 rows,  one for each
			      expense item.  The contents of each cell
			      is  the sum of all amount  entries  made
			      for that cell.   Each file contains 1200
			      records.

	       mmmyy.LOG      another SAF containing all entries for a
			      specific	 month	in  a  specific  year.
			      Each  entry  is made up of 4 items; code
			      number,  amount, paid to whom, for what.
			      Number  of records limited to  available
			      disk.

	       File  sizes  will vary widely due to the type  of  file
	  structures  chosen  and the fact that all data is stored  in
	  string format.  The ACCTCODE file could grow to a maximum of
	  4K  bytes,  that's 100 entries of 40 characters  each.   The
	  Database  files contain a maximum of 1200 entries  that  can
	  vary	from  1  to 10 bytes for a grand total of  12K	bytes.
	  Each	month's Entrylogs are unpredictable.   Their  size  is
	  dependent  upon the number of entries for each month and the
	  amount  of data in each entry.   Each  entry	consists of  2
	  bytes of code,  upto	10  bytes  of  dollar  amount,	and  a
	  variable  number of  bytes for  descriptions of who was paid

				       1











	  and  for what.   These files will grow to whatever  size  is
	  necessary.   No  error  checking  is	done  to  verify  that
	  sufficient room is on the data disk.

	       The  CASH  program  provides the  following  utilities;

	       *  Operator Friendly, Screen Controlled Data Entry  *
	       *  Creates Additional Years' Data Files on Request  *
	       *  Automatically Creates Monthly Data Entry Logs    *
	       *  Creation and Modification of Expense Codes	   *
	       *  Links to Hardcopy Output Routines		   *

	       The   HARDCASH  program	provides these utilities;

	       *  Formatted Output of Expense Account Codes	   *
	       *  User Specified Formatted Output of Data Files    *

	       These  programs should work with either the  Monochrome
	  or  Color  monitors.	 DOS 2.0 has been  tested,  but  other
	  DOSes  and less than 128K bytes have not.   They should work
	  with only 64K bytes as the program sizes are not that large.
	  They do require the use of ADVANCED BASIC due to the use  of
	  Return Line# statements.  The printer routines expect to see
	  either an IBM Epson printer or an Okidata 9x series with the
	  Plug&Play prom set.



				GETTING STARTED

	       The  distribution  copy	expects the program  and  data
	  files  to co-exist on the same disk.	 If a user finds  this
	  objectionable,  the  programs can be moved to another  disk,
	  but  you must change all file linkage statements to  reflect
	  which   drive   the  data  disk   is	 on.	(See   Program
	  Modifications)
	       On a single drive system, start Advanced Basic, insert
	  the program disk,  Load and Run the Cash program.  On a dual
	  drive  system place the program disk into the logged	drive,
	  call Advanced Basic from whichever drive it resides upon and
	  execute the Cash program; ie., BasicA Cash.

	  CREATING FILES

	       The user must first create the ACCTCODE file before any
	  other  program functions will perform.   You do not have  to
	  define any expense item descriptions,  but the ACCTCODE file
	  must	exist.	 On your first attempt to run this program you
	  will	be automatically forced into this routine.   Later  to
	  modify  existing or add new descriptions,  select main  menu
	  option #4.



				       2











	       Once  the  ACCTCODE  file has been  created,  you  must
	  create  a DATABASE file for each year's data.   Don't  worry
	  about  creating redundant files or erasing current files  as
	  this	option will not allow that action.   Select main  menu
	  option #1 to create new files.   Any attempt to perform data
	  entry  prior to creating the requested year's DATABASE  file
	  will result in the correct error response.
	       At  this time you are now ready to input data into  any
	  existing  DATABASE file,  but prior to doing so you may want
	  to  spend  some  time creating a complete  list  of  expense
	  codes.



	  DEFINING EXPENSE CODES

	       Prior to assigning descriptions to expense code numbers
	  a discussion of how hardcopy routines work is in order.  The
	  first rule is; all sums are algebraically performed from the
	  requested  starting code number to the final	number.   This
	  means  that  if you want a report that shows only  how  much
	  money  you  spent on insurance from month A to B,  then  you
	  must cluster all insurance items together in sequential code
	  numbers.
	       If  you	intend	to use this program  to  balance  your
	  monthly  accounts,  that means tracking cash in as  well  as
	  out.	The user must make the decision whether cash in or out
	  will	be entered as a negative number.   Remember that  this
	  program  only algebraically sums;  therefore,  the user must
	  supply the sign of the number themselves.   As a suggestion,
	  most	of you will have more expense items as	cash-out  than
	  cash-in  and	it  is	therefore easier to  enter  income  as
	  negative numbers.


	  Entering Expense Item Descriptions

	       Select main menu option #4.   The screen will be  drawn
	  and  the prompt will stop to the right of the CODE  request.
	  The  initial display will indicate no current code number or
	  associated  description.   Enter the number of the code  you
	  wish	to  describe,  that  code  number  and	its  currently
	  assigned  description  will be displayed on the  screen  and
	  the cursor will move to the description request.   To change
	  the current description enter the new data prior to carriage
	  return.  To completely delete the current description, input
	  a  Zero  (0) followed by carriage return.   To maintain  the
	  existing description without change, simply carriage return.
	  Descriptions are limited to forty (40) characters;  you  may
	  enter  more,	but  they  will be  truncated.	 All  standard
	  characters are acceptable.



				       3











		Repeat	the procedure until you are finished  entering
	  new or modifying existing descriptions.   To exit, enter 999
	  at the request for code number.   The Expense Codes will  be
	  saved to disk and the program will return to the main menu.
	       At  this  time and prior to the start of  monthly  data
	  entry,  it  would  be  very helpful to  the  operator  if  a
	  hardcopy  list of the existing Expense Codes were available.
	  At  the main menu select the HARDCOPY ROUTINES,  option  #3.
	  This	command  will chain to the HARDCASH program  and  it's
	  menu will be presented.   Select option #2 to have a copy of
	  the currently defined Expense Codes listed to your  printer.

	  MONTHLY DATA ENTRY

	       Having defined the Expense Codes you may start to build
	  your	database.   If	this is your first pass  through  this
	  routine or you wish to start a new  database file,  then you
	  must select main menu option #1 to Create a New Year's  Data
	  File.   Follow  the  screen prompts and input the  last  two
	  digits of the desired year.	Your input will be checked for
	  validity  and  whether or not a file for the requested  year
	  already  exists.   Once the new file is created you will  be
	  returned to the main menu.
	       When  the  desired data	file  already  exists,	select
	  option #2 to input data.   You will be prompted to input the
	  requested  year  and	month.	 A valid entry is  a  2  digit
	  numeric for the year and at least the first 3 characters  of
	  the month in upper or lower case.  The next question will be
	  whether  or  not you wish to work a new  month's  file.   An
	  answer  of  Yes  to this question  will  erase  the  current
	  database  file contents for the specified year and month  as
	  well as all entries in the associated month's entrylog.
	       At  this point the screen will be updated for the input
	  routine  and the cursor will be placed to the right  of  the
	  expense  CODE request.   No current  code,  description,  or
	  current  amount  will be indicated.	Input any  valid  code
	  number,  0 - 99, and the display will be updated to indicate
	  the selected code number, its currently defined description,
	  and  the  algebraic sum of all entries made for  this  item.
	  The cursor will be moved to the AMOUNT request.  You may now
	  enter a value,  or if no input is desired a carriage	return
	  without  other  entries will return the prompt to  the  CODE
	  request.
	       If  no  AMOUNT  was  input then	no  additions  to  the
	  database file or the month's entrylog will be made.  When an
	  amount  is indicated,  that value is immediately summed into
	  the  current database selected cell and the display  updated
	  to indicate the resulting change.   The prompt is then moved
	  to the PAYED WHOM request followed by the FOR WHAT  request.
	  No  entry  is  required for either of these last  two  input
	  requests,  but  all entries for each selected  code  number,
	  when the amount has been changed,  results in a record being
	  written to the entrylog that records all 4 input items.

				       4











	       After  the writing of the transaction record the prompt
	  is  returned	to  the code number request  and  the  program
	  continues.   For convenience, the last requested code number
	  is  remembered  and  a carriage return at this  prompt  will
	  recall that code number.  To terminate data input enter 999.
	  The updated database file will be copied from memory to disk
	  and  any  data  in output buffers not  yet  written  to  the
	  entrylog  file  will	be saved.   This is a  very  important
	  point;  when	posting  data  to the database	file  or  when
	  changing expense code descriptions,  never exit the  program
	  by using the BREAK key.  Doing so will result in the loss of
	  all data entered.  When the program is in any input routine,
	  all  data  is kept in memory until the programatic  exit  of
	  that routine.   In the event of a powerfailure,  during  the
	  posting of expenses, all entries except those waiting in the
	  output  buffers  can be recovered from the entrylog and  re-
	  entered.

	  Maximum Value Restrictions

	       All  mathematics  with respect to entered  amounts  are
	  performed  in double precision.   The largest number that  a
	  cell may have in this program is limited by that factor, but
	  more	so by the print using statements which are 6 positions
	  to the left of the decimal for a maximum range of $999999.99
	  to -$99999.99.  The total limit for any summed column or row
	  is  7  digits  to  the  left	of  decimal or $9999999.99  to
	  -$999999.99.	This range  should  exceed  almost  everyone's
	  requirement,	but  these  values  may be  exceeded  and  the
	  program  will still record the true  values,	but  formatted
	  output will not be correct.	The program does not check for
	  value out of range, it was felt that the operator should see
	  the error value rather than some cryptic message.

	  Correcting Input Errors

	       Operators  are always subject to data entry errors  and
	  there is more than one way to correct them.	It is strongly
	  advised that	all  corrections are made using  the  program.
	  Because the files are stored as SAFs and are edittable using
	  a  text editor,  some may be tempted to do so,  but this  is
	  definitely  the wrong choice and may result in  invalidating
	  your data.
	       Remember  that  all entries are	algebraically  summed;
	  therefore when an erroneous entry is to be corrected,  first
	  make	an  entry that is the inverse of the erroneous	entry.
	  This will remove the amount from the memory cell.   Then re-
	  enter  the  proper amount.  Later when all  corrections  are
	  finalized,  the  month's entrylog can be cleaned up  with  a
	  text	 editor   to  remove  the  error  entries  and	 their
	  corrections  without	the possibility of  invalidating  your
	  data.


				       5














			       OBTAINING HARDCOPY

	       Once  you  have defined expense codes and entered  some
	  monthly data it would be nice to produce hardcopy output  of
	  that data.   There are three basic listings most users would
	  want	 to  produce;	a  formatted  copy  of	Expense  Code
	  descriptions,  formatted  summary  reports on specific  data
	  files,  and a listing of all the entries that were made  for
	  each	months	data.	The  later is especially  useful  when
	  trying  to isolate data entry errors.   Output routines  for
	  the  first two reports are provided by the HARDCASH  program
	  and  the other is conveniently available through simple  DOS
	  commands.

	  LISTING the ACCOUNT CODE DESCRIPTIONS

	       From  the  HardCopy menu select option #2 to produce  a
	  listing of the Expense Codes.  The printer must be at top of
	  form	at the time you select this option.   A  single  sheet
	  will	be printed of all expense code numbers and  associated
	  descriptions in compressed type.   There are no other inputs
	  required.   Upon completion of the listing, you are returned
	  to the Hardcopy menu.


	  PRODUCING FORMATTED OUTPUT of DATABASE FILES

	       There  is considerable flexibility in how much of  each
	  DATABASE  file  will be presented.   To request output of  a
	  specific  DATABASE file,  request option #1.	 You  will  be
	  asked which year's data to work with.  This input is again 2
	  numeric  digits.   The  existance of the requested  file  is
	  verified  and  if the file currently exists in memory it  is
	  not  reloaded,  otherwise you must wait while the  requested
	  years data is loaded into memory.
	       The  next  input request is for the months you wish  to
	  start  and  end the report with.   As with all  other  month
	  input  requests,  you  must  enter  at  least  the  first  3
	  characters  of  the  month in  upper	or  lower  case.   The
	  requested  starting  month  may be the same  as  the	ending
	  month, but the ending month may not be prior to the starting
	  month and you may only work with a single year's data.
	       The  final  input request is for the range  of  Expense
	  Codes  to  list.   If you desire a complete range, 0	-  99,
	  enter a carriage return,  otherwise provide the starting and
	  ending code numbers as requested.   Here again,  the	ending
	  code	number	must be equal to or greater than the  starting
	  number.



				       6











	       After  all  inputs are provided, a formatted output  of
	  the data is produced.   The listing header defines the  year
	  of  the data,  the date and time of the listing  production,
	  and  the  range of requested months.	 The number  of  pages
	  produced  depends upon the amount of data requested,	it may
	  be 1 to 6 pages.
	       Months are presented as columns across the top of  each
	  page.   Expense  Codes are listed in rows from top to bottom
	  of  the  page.   The range of requested months  produces  at
	  least  one page per each 6 month period.   Additionally  for
	  each	range  of  50  codes, a new  sheet  is	produced.  For
	  example,  if	you  requested	a listing of  all  codes  from
	  January  to June,  3 sheets are produced.   The first  sheet
	  will cover codes 0 - 49,  the second codes 50 - 99,  and the
	  final  sheet	will  contain the column  summaries  for  each
	  month.   If  you requested a seven month period and  a  full
	  code	range  then 6 sheets would have  been  produced.   The
	  first  3  sheets would represent the first 6 months  in  the
	  requested  range  and  the last 3 would list	the  remaining
	  months' data and report Expense Code totals.
	       All  rows are summed across for each requested month in
	  the  range.	The final column on each page is the  sum  for
	  that	row on that page,  except when the month range exceeds
	  6,  then  the row total column after the last month  is  the
	  total  for both pages.   Column,  or month,  totals are only
	  shown on the bottom of the final page.

	  LISTING the ENTRYLOGS

	       There  is  currently  no provision  provided  by  these
	  programs  for  listing the  monthly  Entrylogs.   Convenient
	  methods were already provided by DOS.   With DOS 1.1 use the
	  Copy	utility to list these files to the system  printer  or
	  video display.   Type may also be used for video display and
	  under  DOS  2.0 or higher,  Type listings can be "piped"  or
	  redirected to the system printer.

			   COPY drive:filename LPT1:

				       or

			   TYPE drive:filename>LPT1  (DOS 2.0 only)

	       Another useful DOS utility that processes the entrylogs
	  is  the SORT utility.   When reviewing these logs to isolate
	  entry errors or see exactly how many items, and the specific
	  information on each item that cummulatively resulted in  the
	  expense  item  total,  it  is very convenient  to  have  all
	  entries  listed in expense code sequence.   The SORT utility
	  provides  this  function  and  can  sort  in	descending  or
	  ascending order.



				       7











	      SORT < drive:input filename > drive:output filename

				       or

	     SORT/R < drive:input filename > drive:output filename
		     ( for a reverse sort, codes 99 --> 0 )

	       For example, to sort June 1984's entrylogs and have the
	  resulting  sorted  data remain in the entrylog of  the  same
	  name;  when the SORT utility is on the A drive and the  data
	  files are on the B drive,  the following command sequence is
	  called for.

		    SORT < B:JUN84.LOG > B:JUN84.LOG


	       A  word	or  two  about how data  is  recorded  in  the
	  Entrylogs  may  be  of some help.   All  entrys  are	string
	  variables.   This  facilitates the use of the SORT  utility,
	  which will only sort text.   Examination of the program will
	  reveal  that	the data is right column adjusted within  each
	  field  for Code number and Amount entries.   No checking  is
	  done of amount entries to determine the number of  positions
	  right  of  the  decimal,  if any.   This means that  if  the
	  operator enters amounts with varying decimal positions  that
	  the resulting entrylog listing may resemble the below.

		    01	123456.78  payed to whom   for what
		    02	       10  "           "   "      "
		    03	  -1.0125  "           "   "      "

	       If   it	is  desired  to  have  decimal	point	column
	  adjustment,  then operator intervention is required.	 Right
	  column  field adjustment was considered desireable,  but may
	  be defeated by the user with program modifications.


			     PROGRAM MODIFICATIONS

	       This  pair of programs is distributed as a set  instead
	  of  a  single program to provide for ease  of  modification.
	  Many	of you will have specific subroutines you may wish  to
	  add  and  short,  simple  code  will	help  facilitate  this
	  operation.   As  an  example,  the author's version  of  the
	  Hardcash  program  is  considerably  larger.	  It  includes
	  specialized  reports that present information on changes  in
	  cash values of liquid investments,  a monthly flash estimate
	  of  net  worth,  and percentage changes  in  cash  equities.
	  These  routines were not distributed,  because they are only
	  valid  with the authors specific expense code  descriptions.
	  Such reports are simple to write and incorporate into  these
	  routines.


				       8











	  CHANGING PRINTER CONTROL CODES

	       For  users  with  printers that do  not	recognize  the
	  standard  IBM Epson control codes,  changing this  program's
	  control  codes  to properly control your printer  should  be
	  easy.   Line	1190  of  the Hardcash program	defines  three
	  variables   that   are   used   to   change	the    printer
	  characteristics.  The three variables are:

	       Condensed = 15:	print at 17 characters per inch.
		Expanded = 14:	print at  5 characters per inch.
		  Normal = 18:	print at 10 characters per inch.

	       To  change  these  values  to meet  the	needs  of  the
	  specific printer in use,  the user only needs to  substitute
	  the  appropriate  decimal  value  of	the  ASCII  code  that
	  commands  that printer  to print in  these  modes.   If  the
	  printer  in use cannot print in condensed or expanded  modes
	  then	delete	line 1190 and all references to the  variables
	  defined in that line.   You will be required to use 14  inch
	  wide paper or modify this program more severely yourself.

	  CHANGING OUTPUT ROUTINES TO USE 14 INCH PAPER

	       For  those  users  who have a wide printer  capable  of
	  condensed printing, a full year's data report can be printed
	  across  a single sheet and therefore reduce a total  listing
	  from six sheets to three.   The author does not have	access
	  to a wide carriage,  but believes that the following program
	  changes  will  adjust  output routines to make use  of  this
	  feature.  Modify the following lines of program Hardcash.

	  Hardcash	     1880  delete this line
			     1920  change D% to B%
			     2050  change D% to B%
			     2100  delete this line
			     2110  delete this line
			     2190  change any D% to B%
			     2210  change any D% to B%


	  USING a SEPARATE DATA DISK

	       When  it is desired to have the data disk separate from
	  the  program	disk  the  following  program  lines  must  be
	  changed.  The user in doing so designates that the data disk
	  will	forever  thereafter be located on  only  that  logical
	  disk.






				       9











	  Program:  Cash Line #'s
	  -----------------------
	  1480	change to ENTRYLOG$ = "driveletter:"+MONTH$+YR$+".LOG"

	  2410	change "ACCTCODE" to read "driveletter:ACCTCODE"

	  2670	change to SYM$ = "driveletter:DATABASE." + YR$


	  Program:  Hardcash Line #'s
	  ---------------------------
	  2460	change "ACCTCODE" to "driveletter:ACCTCODE"

	  2680	change to SYM$ = "driveletter:DATABASE." + YR$


		       PROGRAM SUPPORT and BUG REPORTING

	       This program was extensively tested and debugged by the
	  author,  but	a deliberate attempt by an operator may  still
	  identify  certain weaknesses.   A major weakness is the fact
	  that	all database file contents are loaded into memory  and
	  then	rewritten  to disk with each entry  into  the  monthly
	  data	entry routine.	 A power failure or deliberate exit of
	  the  program by other than programmatic means may result  in
	  the loss of all data.  As is always a good rule, backup your
	  data disk often.
	       If serious bugs or problems are encountered, the author
	  can be contacted on the SVCS bulliten board, user id GND, or
	  at most SVCS meetings.   I will try an resolve any  problems
	  as I can.   I will not make program modifications based upon
	  someone else's disagreement with my programming style.
	       For  those  with a real desire to use this program  and
	  lacking sufficient programming knowledge,  I may be able  to
	  make	 additions  or	modifications  to  suit  their	needs.
	  Depending  upon  the	magnitude  of  the  request  and  time
	  requirements this service may or may not be free.  Something
	  mutually satifactory will have to be agreed upon.
















				       10










```
{% endraw %}

## CONVERT.BAS

{% raw %}
```bas
1 SAVE"CONVERT
10 SCREEN 0,0,0:WIDTH 80
20 ON ERROR GOTO 60010
30 KEY OFF:CLS
40 GOSUB 3620
100 'screen prompts
110 COLOR 14,0:LOCATE 1,19:PRINT "PERSONAL DATEBOOK  FILE CONVERSION PROGRAM":COLOR 2,0
120 LOCATE 2,22:PRINT "(c) 1984 by Lateral Programming, Inc."
130 LOCATE 4,1:PRINT "This program converts the address files created by PERSONAL DATEBOOK  to a text"
140 LOCATE 5,1:PRINT "file that can be used with most word processing programs that utilize  standard"
150 LOCATE 6,1:PRINT "ASCII files. The converted address file can then be used to address letters and"
160 LOCATE 7,1:PRINT "correspondence or for other uses that may be supported by your word processor."
170 LOCATE 9,1:PRINT "The program will read data from the PERSONAL DATEBOOK ADDRESS.DAT file, extract"
180 LOCATE 10,1:PRINT "information from the  FIRST NAME,  MIDDLE NAME,  LAST NAME,  COMPANY,  ADDRESS,"
190 LOCATE 11,1:PRINT "CITY, STATE AND ZIP CODE fields and write this information to a new file called"
200 LOCATE 12,1:PRINT "ADDRESS.TXT."
210 LOCATE 14,1:PRINT "The format for the addresses in the new file is as follows:"
220 LOCATE 16,1:PRINT "@                       Notice  that  each  record begins with the @ symbol and"
230 LOCATE 17,1:PRINT "First Middle Last       ends with  the @ symbol."
240 LOCATE 18,1:PRINT "Company"
250 LOCATE 19,1:PRINT "Street Address          Your word processor probably uses different symbols  to"
260 LOCATE 20,1:PRINT "City, State  Zipcode    identify  or  delineate  records  for text insertion or"
270 LOCATE 21,1:PRINT "@                       mail merge functions. You should  use  your  word  pro-";
280 LOCATE 22,1:PRINT "                        cessor's  search  and  replace  functions to modify the"
290 LOCATE 23,1:PRINT "ADDRESS.TXT records as might be necessary. For example, to replace the @ symbol"
300 LOCATE 24,1:PRINT "with WordStar's dot commands.";
310 COLOR 14,0:LOCATE 25,27:PRINT "PRESS ANY KEY TO CONTINUE";:COLOR 2,0
320 RS$=INKEY$:IF RS$="" THEN 320
330 CLS:LOCATE 1,1:PRINT "Each line in the  ADDRESS.TXT record is terminated with the line feed (CHR$(10)"
340 LOCATE 2,1:PRINT "or hex 0A)  plus the carriage  return  (CHR$(13) or hex 0D)  symbols.  This  is"
350 LOCATE 3,1:PRINT "standard with many word processors.  If your word processor uses different line"
360 LOCATE 4,1:PRINT "end symbols,  you may have to modify this program.  The relevant line number is"
370 LOCATE 5,1:PRINT "3310. Unless you are an experienced BASIC programmer, be sure to make a back-up"
380 LOCATE 6,1:PRINT "copy before making any changes."
390 '
400 LOCATE 8,1:PRINT "Before  running this program,  make sure that the file  ADDRESS.DAT  is on this"
410 LOCATE 9,1:PRINT "disk  and  that  there  is  enough  room  for the ADDRESS.TXT file that will be"
420 LOCATE 10,1:PRINT "created. The amount of free space should be equal to the size of  the  original"
430 LOCATE 11,1:PRINT "ADDRESS.DAT file."
440 LOCATE 13,1:PRINT "So that you can monitor what is going on,  the address records for the new file"
450 LOCATE 14,1:PRINT "will be displayed on the screen as they are created."
460 LOCATE 16,1:PRINT "When you delete an address from the PERSONAL DATEBOOK  program,  a blank record"
470 LOCATE 17,1:PRINT "is left in the ADDRESS.DAT file.  This blank is later filled when you add a new"
480 LOCATE 18,1:PRINT "address.  If all of the blank records have not been filled with new  addresses,"
490 LOCATE 19,1:PRINT "corresponding blank records will be created in the new ADDRESS.TXT file.  Also,"
500 LOCATE 20,1:PRINT "PERSONAL DATEBOOK creates address records in multiples of 12.  Depending on the"
510 LOCATE 21,1:PRINT "total number of addresses,  up to 11 blank records may be created at the end of"
520 LOCATE 22,1:PRINT "the new file. This is normal.";
530 '
960 COLOR 14,0:LOCATE 25,23:PRINT "PRESS ANY KEY TO START THE PROGRAM";:COLOR 2,0
970 RS$=INKEY$:IF INKEY$="" THEN 970
980 CLS
990 'begin program
1000 CLOSE 1:OPEN "R",1,"ADDRESS.DAT",255
1010 CLOSE 2:OPEN "R",2,"ADDRESS.TXT",145
1020 FIELD #1,255 AS FR$
1030 FIELD #2,145 AS KS$
1100 FOR I=1 TO LOF(1)/255
1110 GET 1,I
3100 'subdivide and modify the ADDRESS.DAT record
3110 P$(1)=MID$(FR$,15,14) 'first name
3120 IF RIGHT$(P$(1),1)=" " THEN P$(1)=LEFT$(P$(1),LEN(P$(1))-1):GOTO 3120
3130 P$(2)=MID$(FR$,29,14) 'middle name
3140 IF RIGHT$(P$(2),1)=" " THEN P$(2)=LEFT$(P$(2),LEN(P$(2))-1):GOTO 3140
3150 P$(3)=MID$(FR$,1,14) 'last name
3160 IF RIGHT$(P$(3),1)=" " THEN P$(3)=LEFT$(P$(3),LEN(P$(3))-1):GOTO 3160
3170 P$(4)=MID$(FR$,43,26) 'company/title
3180 P$(5)=MID$(FR$,69,26) 'street
3190 P$(6)=MID$(FR$,95,26) 'city
3200 IF RIGHT$(P$(6),1)=" " THEN P$(6)=LEFT$(P$(6),LEN(P$(6))-1):GOTO 3200
3210 P$(7)=MID$(FR$,121,2) 'state
3220 P$(8)=MID$(FR$,123,5) 'zip code
3300 'arrange information for ADDRESS.TXT format
3310 ADDRESS$=CHR$(13)+CHR$(10)+CHR$(64)+CHR$(13)+CHR$(10)+P$(1)+" "+P$(2)+" "+P$(3)+CHR$(13)+CHR$(10)+P$(4)+CHR$(13)+CHR$(10)+P$(5)+CHR$(13)+CHR$(10)+P$(6)+", "+P$(7)+"  "+P$(8)+CHR$(13)+CHR$(10)+CHR$(64)+CHR$(13)+CHR$(10)
3320 'print new address record to screen
3330 PRINT CHR$(64)
3340 PRINT P$(1)+" "+P$(2)+" "+P$(3)
3350 PRINT P$(4)
3360 PRINT P$(5)
3370 PRINT P$(6)+", "+P$(7)+"  "+P$(8)
3380 PRINT CHR$(64)
3390 PRINT
3400 '
3470 LSET KS$=ADDRESS$
3480 PUT #2 'write new record
3490 NEXT I 'get next address
3500 CLS:COLOR 14,0:LOCATE 10,30:PRINT "CONVERSION COMPLETED":COLOR 2,0:END
3600 'subroutines
3610 'caution screen
3620 COLOR 14,0:LOCATE 10,17:PRINT "CAUTION:  THIS PROGRAM MUST BE CALLED WITH THE"
3630 LOCATE 11,20:PRINT "BASIC /S:255 OPTION IN ORDER TO FUNCTION":COLOR 2,0
3640 LOCATE 13,20:PRINT "Use the supplied batch file  CONVERT.BAT"
3650 LOCATE 14,18:PRINT "or start the program from the  DOS A> prompt"
3660 LOCATE 15,13:PRINT "by typing BASIC CONVERT /S:255 and then pressing <Ret>"
3670 COLOR 14,0:LOCATE 25,27:PRINT "PRESS ANY KEY TO CONTINUE";:COLOR 2,0
3680 RS$=INKEY$:IF RS$="" THEN 3680
3690 CLS:RETURN
60000 'ERROR TRAPS
60010 BEEP:BEEP:BEEP:BEEP
62000 '
62010 '
62100 '
62110 '
62200 'disk I/O error
62210 IF ERR=57 THEN CLS:LOCATE 10,23:PRINT " DEVICE I/O (INPUT/OUTPUT)  ERROR ";:LOCATE 12,8:PRINT " MIGHT BE BAD DISK:  TRY RUNNING PROGRAM AGAIN WITH BACKUP DISK ";:GOTO 62910
62300 'disk full
62310 IF ERR=61 THEN CLS:LOCATE 10,23:PRINT " DISK FULL ERROR:  CANNOT RECOVER ";:LOCATE 12,18:PRINT " DELETE UNNECESSARY FILES AND RERUN PROGRAM ";:GOTO 62910
62400 'disk write protected
62410 IF ERR=70 THEN LOCATE 10,25:PRINT " YOUR DISK IS WRITE PROTECTED ";:LOCATE 12,18:PRINT " REMOVE WRITE PROTECT TAB AND RERUN PROGRAM ";:GOTO 62910
62500 'other errors
62510 CLS:LOCATE 10,29:PRINT " UNRECOVERABLE  ERROR ";:LOCATE 12,14:PRINT "ERROR IS ERROR"ERR"AT LINE"ERL"  CONSULT BASIC MANUAL";:LOCATE 13,16:PRINT "OR CONTACT LATERAL PROGRAMMING, INC. FOR ADVICE"
62900 'time delay, end
62910 COLOR 16,0:LOCATE 18,26:PRINT "PRESS ANY KEY TO END PROGRAM":COLOR 2,0
62920 '
62930 IF INKEY$="" THEN 62930
62940 '
64000 END
```
{% endraw %}

## EIGHTCRV.BAS

{% raw %}
```bas
10 REM   E I G H T  C U R V E S
11 REM
12 REM Adapted from the program Eight Curves in Basic Programs for Production
13 REM and Operations Management by Pricha Pantumsinchai, M. Zia Hassan and
14 REM Ishwar D. Gupta, Prentice Hall, Englewood Cliffs, NJ Copyright 1983
15 REM Adapted by Joseph C. Hudson 4198 Warbler Dr. Flint MI 48504
20 REM
30 REM   THIS PROGRAM PERFORMS CURVE FITTING OF TWO VARIABLES
40 REM   UP TO EIGHT TYPES OF CURVES. X = INDEPENDENT VARIABLE
50 REM   Y = DEPENDENT VARIABLE
60 REM
65 GOSUB 4360
70 DIM U(N0),V(N0),X(N0),Y(N0),P(N0),P$(N0),DATAROW(1)
80 DIM A(8),B(8),C(8),F(8),R(8),T(8),W(8),Z(12)
280 GOTO 700
310 PRINT
320 PRINT "COMMAND -->";
330 C$ = INKEY$ :  IF C$ = "" THEN 330
335 PRINT " ",C$
340 ON INSTR("ADEQCHILPRSGW*adeqchilprsgw*",C$) MOD 14 GOSUB 1090,1090,                       4810,470,4890,4630,890,1330,5030,2550,1730,700,9000
350 GOTO 310
470 KEY ON : END
700 REM INPUT DATA FROM DISK
710 PRINT
720 INPUT "What is the name of the data file" ; DATAFILE$
725 PRINT "There must be at least 3 and at most ";N0;" rows of data."
730 INPUT "How many rows of data are there" ; N
740 INPUT "How many columns of data are there"; NUMCOL
745 PRINT "Is there anything in the file after column";NUMCOL;:INPUT ANS$
747 IND = 0 : IF RIGHT$(ANS$,1) = "y" OR RIGHT$(ANS$,1) = "Y" THEN IND = 1
750 ERASE DATAROW : DIM DATAROW(NUMCOL)
760 INPUT "Which column is Y"; YCOL
770 INPUT "Which column is X"; XCOL
780 OPEN DATAFILE$ FOR INPUT AS #1
790 FOR I = 1 TO N
800   FOR J = 1 TO NUMCOL
810      INPUT #1,DATAROW(J)
820   NEXT J
830   IF IND = 1 THEN LINE INPUT #1, DUMMY$
840   X(I) = DATAROW(XCOL) : Y(I) = DATAROW(YCOL)
850 NEXT I
860 CLOSE #1
870 GOSUB 4630
880 GOTO 310
890 REM INSERT COMMAND
900 REM --------------
910 PRINT
920 PRINT "INSERT AFTER OBSERVATION NUMBER -->";
930 INPUT N1
940 IF N1 < 0 THEN 1080
950 IF N1 > N THEN 1080
960 IF N >= N0 THEN 1080
970 PRINT
980 PRINT "ENTER OBSERVATION ";N1+1;" IN THE FORM X,Y :";
990 INPUT A(1),B(1)
1000 IF N1 = N THEN 1050
1010 FOR I = N TO N1+1 STEP -1
1020 X(I+1) = X(I)
1030 Y(I+1) = Y(I)
1040 NEXT I
1050 X(N1+1) = A(1)
1060 Y(N1+1) = B(1)
1070 N = N + 1
1075 K9 = 0
1080 RETURN
1090 REM CHANGE OR DELETE COMMANDS
1100 REM -------------------------
1110 PRINT "OBSERVATION NUMBER -->";
1120 INPUT K
1130 IF K <= 0 THEN 1160
1140 IF K <= N THEN 1170
1150 PRINT "LAST OBSERVATION NUMBER IS ";N
1160 RETURN
1170 IF C$ = "DELETE" OR C$ = "delete" THEN 1240
1180 PRINT "ENTER X,Y -->";
1190 INPUT X1,Y1
1200 X(K) = X1
1210 Y(K) = Y1
1220 K9 = 0
1230 RETURN
1240 IF N = 1 THEN 470
1250 FOR I = K TO N-1
1260 X(I) = X(I+1)
1270 Y(I) = Y(I+1)
1280 NEXT I
1290 N = N-1
1300 PRINT "OBSERVATION ";K;" DELETED."
1310 K9 = 0
1320 RETURN
1330 REM LIST COMMAND  -  LIST OBSERVATIONS AND STATISTICS
1340 REM -------------------------------------------------
1350 X1 = 0
1360 X2 = 0
1370 Y1 = 0
1380 Y2 = 0
1390 X8 = E7
1400 X9 = E8
1410 Y8 = E7
1420 Y9 = E8
1430 FOR I = 1 TO N
1440 X1 = X1 + X(I)
1450 Y1 = Y1 + Y(I)
1460 X2 = X2 + X(I) * X(I)
1470 Y2 = Y2 + Y(I) * Y(I)
1480 IF X(I) >= X8 THEN 1500
1490 X8 = X(I)
1500 IF X(I) <= X9 THEN 1520
1510 X9 = X(I)
1520 IF Y(I) >= Y8 THEN 1540
1530 Y8 = Y(I)
1540 IF Y(I) <= Y9 THEN 1560
1550 Y9 = Y(I)
1560 NEXT I
1570 LPRINT
1580 LPRINT "OBSERVATION";TAB(15);"X";TAB(30);"Y"
1590 FOR I = 1 TO N
1600 LPRINT TAB(5);I;TAB(13);X(I);TAB(28);Y(I)
1610 NEXT I
1620 IF N <= 1 THEN 1720
1630 X2 = SQR((X2-X1*X1/N)/(N-1))
1640 Y2 = SQR((Y2-Y1*Y1/N)/(N-1))
1650 X1 = X1/N
1660 Y1 = Y1/N
1670 LPRINT
1680 LPRINT "   MEAN";TAB(13);X1;TAB(28);Y1
1690 LPRINT "STD DEV";TAB(13);X2;TAB(28);Y2
1700 LPRINT "MINIMUM";TAB(13);X8;TAB(28);Y8
1710 LPRINT "MAXIMUM";TAB(13);X9;TAB(28);Y9
1720 RETURN
1730 REM SOLVE COMMAND
1740 REM -------------
1750 IF K9 = 1 THEN 2250
1760 IF N >= 3 THEN 1800
1770 PRINT
1780 PRINT "NOT ENOUGH OBSERVATIONS. PLEASE ADD MORE DATA"
1790 RETURN
1800 GOSUB 3440
1810 REM
1820 REM CALCULATE COEFICIENTS FOR THE EIGHT CURVES
1830 R(1) = Z(7) - Z(1)*Z(1)/N
1840 B(1) = (W(1)-Z(1)*Z(2)/N)/R(1)
1850 A(1) = (Z(2)-B(1)*Z(1))/N
1860 T(1) = Z(8)-Z(2)*Z(2)/N
1870 IF C(2) < .5 THEN 1930
1880 R(2) = R(1)
1890 B(2) = (W(2)-Z(1)*Z(6)/N)/R(2)
1900 A(2) = (Z(6)-B(2)*Z(1))/N
1910 A(2) = EXP(A(2))
1920 T(2) = Z(12)-Z(6)*Z(6)/N
1930 IF C(3) < .5 THEN 1990
1940 R(3) = Z(11)-Z(5)*Z(5)/N
1950 B(3) = (W(3)-Z(5)*Z(6)/N)/R(3)
1960 A(3) = (Z(6)-B(3)*Z(5))/N
1970 A(3) = EXP(A(3))
1980 T(3) = T(2)
1990 IF C(4) < .5 THEN 2040
2000 R(4) = Z(9)-Z(3)*Z(3)/N
2010 B(4) = (W(4)-Z(3)*Z(2)/N)/R(4)
2020 A(4) = (Z(2)-B(4)*Z(3))/N
2030 T(4) = T(1)
2040 IF C(5) < .5 THEN 2090
2050 R(5) = R(1)
2060 B(5) = (W(5)-Z(1)*Z(4)/N)/R(5)
2070 A(5) = (Z(4)-B(5)*Z(1))/N
2080 T(5) = Z(10)-Z(4)*Z(4)/N
2090 IF C(6) < .5 THEN 2140
2100 R(6) = R(4)
2110 B(6) = (W(6)-Z(3)*Z(4)/N)/R(6)
2120 A(6) = (Z(4)-B(6)*Z(3))/N
2130 T(6) = T(5)
2140 IF C(6) < .5 THEN 2190
2150 R(7) = Z(11)-Z(5)*Z(5)/N
2160 B(7) = (W(7)-Z(5)*Z(2)/N)/R(7)
2170 A(7) = (Z(2)-B(7)*Z(5))/N
2180 T(7) = T(1)
2190 IF C(8) < .5 THEN 2240
2200 R(8) = R(4)
2210 B(8) = (W(8)-Z(6)*Z(3)/N)/R(8)
2220 A(8) = (Z(6)-B(8)*Z(3))/N
2230 T(8) = T(2)
2240 K9 = 1
2250 LPRINT
2260 LPRINT
2270 LPRINT "CURVE";TAB(8);"EQUATION";TAB(25);"A";TAB(40)"B";
2280 LPRINT TAB(55);"R SQUARED";TAB(70);"ADJ. R SQUARED"
2290 FOR J = 1 TO J0
2300 IF C(J) < .5 THEN 2350
2310 LPRINT TAB(2);J;TAB(8);Q$(J);
2315 R1 = 1
2320 IF T(J) > 0 THEN R1 = B(J) * B(J) * R(J) / T(J)
2330 R2 = 1-(1-R1)*(N-1)/(N-2)
2340 LPRINT TAB(24);A(J);TAB(39);B(J);TAB(54);R1;TAB(69);R2
2350 NEXT J
2360 LPRINT
2370 LPRINT
2380 LPRINT "A N A L Y S I S    O F    V A R I A N C E"
2390 LPRINT
2400 LPRINT "CURVE";TAB(8);"SS-REGRESSION";TAB(23);"SS-RESIDUAL";
2410 LPRINT TAB(38);"SS-TOTAL";TAB(53);"F-VALUE"
2420 FOR J = 1 TO J0
2430 IF C(J) < .5 THEN 2500
2440 S1 = B(J)*B(J)*R(J)
2450 S2 = T(J)-S1
2455 S3 = 1E+20
2460 IF S2 > 0 THEN S3 = S1 / S2 * (N-2)
2470 LPRINT TAB(3);J;TAB(7);S1;TAB(22);S2;TAB(37);T(J);TAB(52);S3
2500 NEXT J
2510 LPRINT " D.F.",1,N-2,N-1
2520 LPRINT
2530 LPRINT
2540 RETURN
2550 REM RESIDUAL COMMAND
2560 REM ----------------
2570 GOSUB 2830
2580 IF I0 > .5 THEN 2600
2590 RETURN
2600 S1 = 0
2610 S2 = 0
2620 LPRINT "OBSERVATION";TAB(15);"X";TAB(30);"Y";TAB(45);"FITTED Y";
2630 LPRINT TAB(60);"RESIDUAL";TAB(75);"% ERROR"
2640 FOR I = 1 TO N
2650 X0 = X(I)
2660 GOSUB 3140
2670 E0 = Y(I)-Y0
2680 S2 = S2 + E0*E0
2690 P1 = 999
2700 IF Y(I) = 0 THEN 2720
2710 P1 = ABS(E0/Y(I)*100)
2720 S1 = S1 + P1
2730 LPRINT TAB(5);I;TAB(14);X(I);TAB(29);Y(I);TAB(44);Y0;TAB(59);E0;TAB(74);P1
2750 NEXT I
2760 S1 = S1/N
2770 S2 = S2/N
2780 LPRINT
2790 LPRINT "MEAN ABSOLUTE % ERROR  ";S1
2800 LPRINT "MEAN SQUARE ERROR      ";S2
2810 LPRINT
2820 RETURN
2830 REM SCREENING PROCESS
2840 REM -----------------
2850 I0 = 0
2860 IF K9 > .5 THEN 2900
2870 PRINT
2880 PRINT "USE THE SOLVE COMMAND FIRST."
2890 RETURN
2900 PRINT
2910 PRINT "ENTER CURVE NUMBER -->";
2920 INPUT K0
2930 IF K0 <= 0 THEN 2990
2940 IF K0 > J0 THEN 2990
2950 IF C(K0) > .5 THEN 3020
2960 PRINT
2970 PRINT "DATA NOT ELIGABLE FOR SOLUTION OF CURVE",K0
2980 RETURN
2990 PRINT
3000 PRINT "*** INVALID CURVE NUMBER ***"
3010 RETURN
3020 I0 = 1
3030 LPRINT
3040 LPRINT
3050 LPRINT
3060 LPRINT "CURVE";TAB(8);"EQUATION";TAB(25);"A";TAB(40)"B";
3070 LPRINT TAB(55);"R SQUARED";TAB(70);"ADJ. R SQUARED"
3080 LPRINT TAB(2);K0;TAB(8);Q$(K0);
3090 R1 = B(K0)*B(K0)*R(K0)/T(K0)
3100 R2 = 1-(1-R1)*(N-1)/(N-2)
3110 LPRINT TAB(24);A(K0);TAB(39);B(K0);TAB(54);R1;TAB(69);R2
3120 LPRINT
3130 RETURN
3140 REM CALCULATE FITTED-Y VALUE ==> Y0
3150 Y0 = 0
3160 ON K0 GOTO 3230,3250,3270,3300,3330,3360,3390,3410
3230 Y0 = A(1)+B(1)*X0
3240 RETURN
3250 Y0 = A(2)*EXP(B(2)*X0)
3260 RETURN
3270 IF X0 < 0 THEN 3290
3280 Y0 = A(3)*X0^B(3)
3290 RETURN
3300 IF X0 = 0 THEN 3320
3310 Y0 = A(4)+B(4)/X0
3320 RETURN
3330 IF A(5)+B(5)*X0 = 0 THEN 3350
3340 Y0 = 1/(A(5)+B(5)*X0)
3350 RETURN
3360 IF A(6)*X0+B(6) = 0 THEN 3380
3370 Y0 = X0/(A(6)*X0+B(6))
3380 RETURN
3390 IF X0 <= 0 THEN 3410
3400 Y0 = A(7) + B(7)*LOG(X0)
3410 IF X0 = 0 THEN 3430
3420 Y0 = EXP(A(8)+B(8)/X0)
3430 RETURN
3440 REM DETERMINE ELIGIBILITY FOR CALCULATION OF EACH CURVE
3450 REM ---------------------------------------------------
3460 FOR J = 1 TO J0 : C(J) = 1 : W(J) = 0 : NEXT J
3500 X8 = 0
3510 X9 = 0
3520 Y8 = 0
3530 Y9 = 0
3540 FOR I = 1 TO N
3550 IF ABS(X(I)) > E9 THEN 3570
3560 X8 = 1
3570 IF X(I) > E9 THEN 3590
3580 X9 = 1
3590 IF ABS(Y(I)) > E9 THEN 3610
3600 Y8 = 1
3610 IF Y(I) > E9 THEN 3630
3620 Y9 = 1
3630 NEXT I
3640 IF Y9 < .5 THEN 3680
3650 C(2) = 0
3660 C(3) = 0
3670 C(8) = 0
3680 IF X9 < .5 THEN 3710
3690 C(3) = 0
3700 C(7) = 0
3710 IF Y8 < .5 THEN 3770
3720 C(2) = 0
3730 C(3) = 0
3740 C(5) = 0
3750 C(6) = 0
3760 C(8) = 0
3770 IF X8 < .5 THEN 3830
3780 C(3) = 0
3790 C(4) = 0
3800 C(6) = 0
3810 C(7) = 0
3820 C(8) = 0
3830 REM
3840 REM CALCULATE LOG(X) AND LOG(Y)
3850 IF Y9 > .5 THEN 3890
3860 FOR I = 1 TO N
3870 V(I) = LOG(Y(I))
3880 NEXT I
3890 IF X9 > .5 THEN 3930
3900 FOR I = 1 TO N
3910 U(I) = LOG(X(I))
3920 NEXT I
3930 FOR I = 1 TO 12
3940 Z(I) = 0
3950 NEXT I
3960 FOR I = 1 TO N
3970 Z(1) = Z(1) + X(I)
3980 Z(2) = Z(2) + Y(I)
3990 IF X8 > .5 THEN 4030
4000 Z0 = 1/X(I)
4010 Z(3) = Z(3) + Z0
4020 Z(9) = Z(9) + Z0*Z0
4030 IF Y8 > .5 THEN 4070
4040 Z0 = 1/Y(I)
4050 Z(4) = Z(4) +Z0
4060 Z(10) = Z(10) + Z0*Z0
4070 IF X9 > .5 THEN 4100
4080 Z(5) = Z(5) + U(I)
4090 Z(11) = Z(11) + U(I) * U(I)
4100 IF Y9 > .5 THEN 4130
4110 Z(6) = Z(6) + V(I)
4120 Z(12) = Z(12) + V(I) * V(I)
4130 Z(7) = Z(7) + X(I) * X(I)
4140 Z(8) = Z(8) + Y(I) * Y(I)
4150 NEXT I
4160 REM
4170 REM CALCULATE CROSS PRODUCT TERMS
4180 FOR I = 1 TO N
4190 W(1) = W(1) + X(I) * Y(I)
4200 IF C(2) < .5 THEN 4220
4210 W(2) = W(2) + V(I) * X(I)
4220 IF C(3) < .5 THEN 4240
4230 W(3) = W(3) + U(I) * V(I)
4240 IF C(4) < .5 THEN 4260
4250 W(4) = W(4) + Y(I) / X(I)
4260 IF C(5) < .5 THEN 4280
4270 W(5) = W(5) + X(I) / Y(I)
4280 IF C(6) < .5 THEN 4300
4290 W(6) = W(6) + 1 / ( X(I) *  Y(I) )
4300 IF C(7) < .5 THEN 4320
4310 W(7) = W(7) + Y(I) * U(I)
4320 IF C(8) < .5 THEN 4340
4330 W(8) = W(8) + V(I) / X(I)
4340 NEXT I
4350 RETURN
4360 REM I N I T I A L I Z A T I O N
4370 REM ---------------------------
4380 N = 0 : K9 = 0  : N0 = 100 : J0 = 8
4400 E9 = 1E-08
4410 E8 = -9.999999E-21
4420 E7 = 1E+20
4430 Q$(1) = "Y = A+B*X     "
4440 Q$(2) = "Y = A*EXP(B*X)"
4450 Q$(3) = "Y = A*(X^B)   "
4460 Q$(4) = "Y = A+B/X     "
4470 Q$(5) = "Y = 1/(A+B*X) "
4480 Q$(6) = "Y = X/(A*X+B) "
4490 Q$(7) = "Y = A+B*LOG(X)"
4500 Q$(8) = "Y = EXP(A+B/X)"
4590 WIDTH "LPT1:",132 : KEY OFF
4600 LPRINT CHR$(27);+"B"+CHR$(3)+CHR$(27)+"M"+CHR$(10)
4620 RETURN
4630 REM   H E L P   C O M M A N D
4640 REM   -----------------------
4650 CLS : LOCATE 3,1
4660 COLOR 31,0 : PRINT "A"; : COLOR 7,0 : PRINT "lter an observation";
4670 COLOR 31,0 : PRINT TAB(30);"D"; : COLOR 7,0
4680 PRINT "elete an observation" : PRINT : COLOR 31,0
4690 PRINT "C"; : COLOR 7,0 : PRINT "alculate a yhat value"; : COLOR 31,0
4700 PRINT TAB(30);"H"; : COLOR 7,0 : PRINT "elp" : PRINT
4710 PRINT "show "; : COLOR 31,0 : PRINT "E"; : COLOR 7,0
4720 PRINT "quation forms"; : COLOR 31,0 : PRINT TAB(30);"Q";
4730 COLOR 7,0 : PRINT "uit the program" : PRINT  : COLOR 31,0
4750 PRINT "I"; : COLOR 7,0 : PRINT "nsert an observation"; : COLOR 31,0
4760 PRINT TAB(30);"L"; : COLOR 7,0 : PRINT "ist data and summary statistics"
4770 PRINT : COLOR 31,0 : PRINT "P"; : COLOR 7,0
4774 PRINT "lot a curve and the data    print "; : COLOR 31,0
4776 PRINT "R"; : COLOR 7,0 : PRINT "esiduals" : PRINT : COLOR 31,0
4780 PRINT "S"; : COLOR 7,0 : PRINT "olve the equations" : PRINT : COLOR 31,0
4782 PRINT "G"; : COLOR 7,0 : PRINT "et data from disk"; : COLOR 31,0
4784 PRINT TAB(30);"W"; : COLOR 7,0 : PRINT "rite data to disk" : PRINT : PRINT
4800 RETURN
4810 REM   C U R V E S   C O M M A N D
4820 REM   ---------------------------
4830 LPRINT : LPRINT "CURVE";TAB(10);"EQUATION"
4840 FOR J = 1 TO J0
4850 LPRINT TAB(2);J;TAB(9);Q$(J)
4860 NEXT J
4870 LPRINT
4880 RETURN
4890 REM   F O R E C A S T   C O M M A N D
4900 REM   -------------------------------
4910 GOSUB 2830
4920 IF I0 > .5 THEN 4950
4930 RETURN
4940 PRINT
4950 PRINT "ENTER X-VALUE (OR -99999 TO RETURN) -->";
4960 INPUT X0
4970 IF X0 = -99999! THEN 5020
4980 GOSUB 3140
4990 LPRINT
5000 LPRINT "X = ";X0;"   Yhat = ";Y0
5010 GOTO 4940
5020 RETURN
5030 REM   P L O T   C O M M A N D
5040 REM   -----------------------
5050 GOSUB 2830
5060 IF I0 > .5 THEN 5080
5070 RETURN
5080 REM
5090 REM   SORT Y(I) HIGH TO LOW
5100 FOR I = 1 TO N
5110 P(I) = I
5120 NEXT I
5130 FOR I = 1 TO N-1
5140 Z0 = Y(P(I))
5150 FOR J = I+1 TO N
5160 IF Z0 >= Y(P(J)) THEN 5210
5170 Z0 = Y(P(J))
5180 SWAP P(I),P(J)
5210 NEXT J
5220 NEXT I
5230 REM
5240 REM     FIND MIN/MAX OF X(I) , Y(I)
5250 X8 = E7
5260 X9 = E8
5270 Y8 = E7
5280 Y9 = E8
5290 FOR I = 1 TO N
5300 IF X(I) >= X8 THEN 5320
5310 X8 = X(I)
5320 IF X(I) <= X9 THEN 5340
5330 X9 = X(I)
5340 IF Y(I) >= Y8 THEN 5360
5350 Y8 = Y(I)
5360 IF Y(I) <= Y9 THEN 5380
5370 Y9 = Y(I)
5380 NEXT I
5390 REM
5400 REM   DETERMINE SCALING FOR Y AXIS
5410 A0 = Y8
5420 A1 = Y9
5430 GOSUB 6810
5440 IF L5 > 0 THEN 5460
5450 RETURN
5460 Y1 = L0
5470 Y2 = U0
5480 Y3 = H0
5490 Y4 = Y3/8
5500 REM
5510 REM    DETERMINE SCALING FOR X AXIS
5520 A0 = X8
5530 A1 = X9
5540 GOSUB 6810
5550 IF L5 > 0 THEN 5570
5560 RETURN
5570 X1 = L0
5580 X2 = U0
5590 X3 = H0
5600 X4 = X3/20
5610 LPRINT
5620 LPRINT TAB(61);"X-VALUE"
5630 GOSUB 5840
5640 GOSUB 5950
5650 I = 1
5660 M = 8
5670 Y5 = Y2 - Y4/2
5680 Y6 = Y5 + Y4
5690 L0 = Y2
5700 GOSUB 6030
5710 FOR L = 1 TO 5
5720 L0 = L0 - Y3
5730 FOR M = 1 TO 8
5740 Y6 = Y5
5750 Y5 = Y6 - Y4
5760 GOSUB 6030
5770 NEXT M
5780 NEXT L
5790 GOSUB 5950
5800 GOSUB 5840
5810 LPRINT TAB(61);"X-VALUE"
5820 LPRINT
5830 RETURN
5840 REM
5850 REM PRINT AXIS LABEL
5860 H0 = X1
5870 LPRINT TAB(13);H0;
5880 FOR J = 1 TO 10
5890 H0 = H0 + X3/2
5900 LPRINT TAB(13+10*J);H0;
5910 NEXT J
5920 LPRINT
5930 RETURN
5940 REM
5950 REM   PRINT AXIS
5960 LPRINT TAB(14);"+";
5970 FOR J = 1 TO 10
5980 LPRINT "---------+";
5990 NEXT J
6000 LPRINT
6010 RETURN
6020 REM
6030 REM CALCULATE PLOT LINE
6040 FOR J = 0 TO 100
6050 P$(J) = " "
6060 NEXT J
6070 J9 = 0
6080 IF I > N THEN 6220
6090 J2 = I
6100 FOR J1 = J2 TO N
6110 IF Y(P(J1)) < Y5 THEN 6190
6120 N9 = INT((X(P(J1))-X1)/X4+.5)
6130 P$(N9) = "O"
6140 IF N9 <= J9 THEN 6160
6150 J9 = N9
6160 IF J1 <> N THEN 6210
6170 I = N + 1
6180 GOTO 6210
6190 I = J1
6200 GOTO 6240
6210 NEXT J1
6220 REM
6230 REM    CALCULATE FITTED VALUE OF X
6240 Y7 = (Y5 + Y6)/2
6250 ON K0 GOTO 6320,6350,6350,6420,6450,6480,6510,6540
6320 IF B(K0) = 0 THEN 6690
6330 X0 = (Y7-A(K0))/B(K0)
6340 GOTO 6590
6350 IF B(K0) = 0 THEN 6690
6360 IF A(K0) = 0 THEN 6690
6370 IF Y7/A(K0) <= 0 THEN 6690
6380 X0 = LOG(Y7/A(K0))/B(K0)
6390 IF K0 = 2 THEN 6590
6400 X0 = EXP(X0)
6410 GOTO 6590
6420 IF Y7 - A(K0) = 0 THEN 6690
6430 X0 = B(K0) / (Y7-A(K0))
6440 GOTO 6590
6450 IF Y7*B(K0) = 0 THEN 6690
6460 X0 = (1 - A(K0)*Y7) / (Y7*B(K0))
6470 GOTO 6590
6480 IF 1-A(K0)*Y7 = 0 THEN 6690
6490 X0 = B(K0)*Y7/(1-A(K0)*Y7)
6500 GOTO 6590
6510 IF B(K0) = 0 THEN 6690
6520 X0 = EXP((Y7-A(K0))/B(K0))
6530 GOTO 6590
6540 IF Y7 <= 0 THEN 6690
6550 X0 = LOG(Y7) - A(K0)
6560 IF X0 = 0 THEN 6690
6570 X0 = B(K0)/X0
6580 REM
6590 REM    CALCULATE FITTED PLOT POSITION
6600 IF X0 < X1 THEN 6690
6610 IF X0 > X2 THEN 6690
6620 N9 = INT((X0-X1)/X4+.5)
6630 IF P$(N9) = "O" THEN 6660
6640 P$(N9) = "*"
6650 GOTO 6670
6660 P$(N9) = "+"
6670 IF N9 <= J9 THEN 6690
6680 J9 = N9
6690 REM
6700 REM    PLOT THE LINE
6710 IF M <> 8 THEN 6750
6720 LPRINT L0; : LPRINT TAB(12);" +"; : GOTO 6760
6750 LPRINT TAB(12);" -";
6760 FOR J = 0 TO J9
6770 LPRINT P$(J);
6780 NEXT J
6790 LPRINT
6800 RETURN
6810 REM   S C A L I N G   R O U T I N E
6820 REM   -----------------------------
6830 L5 = 0
6840 A8 = A0
6850 A9 = A1
6860 A2 = (A1 - A0)/4
6870 IF A2 <= 0 THEN 7200
6880 L5 = L5 + 1
6890 A3 = LOG(A2)/LOG(10)
6900 REM
6910 REM    ROUND DOWN A3 TO A4
6920 A4 = INT(A3)
6930 IF A4 <= A3 THEN 6950
6940 A4 = A4 - 1
6950 A5 = 10^A4
6960 A6 = A2/A5
6970 REM
6980 REM    ROUND UP A6 TO A7
6990 A7 = INT(A6+1)
7000 H0 = A5 * A7
7010 REM    ROUND DOWN L0
7020 L0 = INT(A0/H0)
7030 IF L0 <= A0/H0 THEN 7050
7040 L0 = L0 - 1
7050 L0 = L0 * H0
7060 U0 = L0 + 5 * H0
7070 IF U0 >= A1 THEN 7100
7080 A1 = A1 + A2/2
7090 GOTO 6860
7100 IF L0 <= A0 THEN 7130
7110 A0 = A0 - A2/2
7120 GOTO 6860
7130 IF U0 - H0 <= A9 THEN 7160
7140 U0 = U0 - H0
7150 GOTO 7130
7160 IF L0 + H0 >= A8 THEN 7190
7170 L0 = L0 + H0
7180 GOTO 7160
7190 H0 = (U0 - L0)/5
7200 RETURN
7210 END
9000 REM   SAVE DATA TO DISK
9010 REM -------------------
9020 INPUT "File name to use";SAVEFILE$
9030 IF SAVEFILE$ = "" THEN RETURN
9040 OPEN SAVEFILE$ FOR APPEND AS #2
9050 FOR I = 1 TO N : PRINT #2,X(I);" ";Y(I) : NEXT I
9060 CLOSE #2
9070 RETURN
```
{% endraw %}

## EIGHTCRV.TXT

{% raw %}
```

Eight Curves

        EIGHTCRV.BAS is a program that fits 8 different curves to a set
of data. The program is written in GWBasic. The program uses a printer
for most output. The printer control codes written into the program are
Star Delta 10 codes, which should be compatible with Star Gemini and
Epson codes. Most output is in condensed type. This allows the scatter
diagram, drawn in character graphics, to be as large as possible.
        To use the program, the data set containing the dependent, Y, and
predictor, X, variables must be saved in SDA (space delimited ASCII) format
on disk. SDA format is simple and easy to use. Variables are in columns
and cases are in rows. In each row of the data file, numbers are separated
by spaces in free format. EIGHTCRV assumes all variables it reads are
numeric, so any character data in the file should appear after all numeric
variables. SDA format was chosen because it is easy to create with any
text editor, like DVED, FULLEDIT, or RV-EDIT and is readable by GWBasic,
Turbo Pascal, Minitab and SPSS, among others. It is also very compact,
taking only about 25% of the disk space that .DIF files take. The file
EIGHTCRV.SDA is an example of an SDA file.
        When the program is run, it will first read data from an SDA
file. The prompts ask for the number of rows and columns in the file.
Give the number of columns of numeric data. The next prompt asks if there
is anything in the file after column --. "Anything" refers to either
other columns of numbers or character data.
        Try running EIGHTCRV.BAS using EIGHTCRV.SDA specifing X in
column 1 and Y in column 2. There are 15 rows of data in the SDA file,
nothing in the file after column 2.
        This version of the EIGHTCRV program is adapted from the program
8CURVS in the book Basic Programs for Production and Operations Manage-
ment by Pantumsinchai, Hassan and Gupta, Prentice - Hall, 1983. Some
users may find the original version more to their liking. The entire
package of programs in this book has been modified has been extensively
modified and converted to run on the IBM PC. More information about this
package may be obtained from MicroPack, Inc., 223 W. Jackson Blvd, Suite
1110, Chicago, Illinois, 60606.
        EIGHTCRV.BAS was adapted by Joseph C. Hudson, 4198 Warbler Dr.,
Flint, MI 48504. Other than receiving the generous permission of the
authors to submit this program to PC-SIG, the adaptor has no connection
with any of the firms mentioned above.
```
{% endraw %}

## FILES261.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No 261   PC-SIG Business Sampler No 1                           v1.1
----------------------------------------------------------------------------
This disk contains several user-supported programs.
 
------------  Cashflow Program by Gregory N. Doudna
CASH     BAS  Data entry, file maintenance, etc.
HARDCASH BAS  Provides printed records
CASH     DOC  Documentation for CASH.BAS
------------  Personal Datebook by Lateral Programming, Inc.
MEMO     BAS  Personal Datebook: Appointments, Addresses, Memos etc.
MEMO     BAT  Runs MEMO.BAS with proper parameters
MANUAL   TXT  Reference Manual for Personal Datebook
MANUAL   EXE  Display or print the reference manual
CONVERT  BAS  Converts address list for use with wordprocessors
CONVERT  BAT  Runs CONVERT.BAS with proper parameters
------------  Mailing Label Package   (BASRUN.EXE required)
LABELS   EXE  Menu shell for Mailing Label Package
NEWLAB   EXE  Generates new mailing label file
LABELINP EXE  Data entry program for Mailing Label Package
SRTLAB   EXE  Sorts labels by zip code
LABRPT   EXE  File listing and summary reports
LABPRT02 EXE  Label Printing program for Mailing Label Package
LABELS   DOC  Documentation for LABEL.EXE
------------  File Managenment System
FILEMAN  COM  File Managenment System
MAKEMEMO BAS  Write reminders to tickler file
SHOWMEMO BAS  Brings up reminder notes on proper dates
------------  FLITEPLN 3.2
FLITPLN3 2VV  Aids in preparing flight plan (BASIC program)
FLITPLN3 DOC  Documentation for FLITEPLN.BAS
------------  EIGHTCRV Package
EIGHTCRV XXX  Description of the EIGHTCRV programs
EIGHTCRV SDA  Sample data file
EIGHTCRV BAS  First eight curves to data
EIGHTCRV TXT  Documentation for EIGHTCRV.BAS
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FLITPLN3.DOC

{% raw %}
```
                     Copyright (c)-1984,85,86-by D.A.Gullickson


                              PC-FLY ``FLITEPLN''
                           Version 3.2 (c) Dec. 1986
                 User-supported software.  $20 Contribution gives  
                 user enhanced, completed version & notification of
                 future updates & programs.  Copyright forbids 
                 distribution in an altered form.  Otherwise share.
                              D.A. Gullickson
                              219 Custer Street
                              Lander, Wyoming  82520
 
 
                     PC-FLY ``FLITEPLN '' DOCUMENTATION
 
PC-Fly ``FLITEPLN '' is written to be practical & useful for the busy pilot and
only requires essential information all pilots use when planning a flight.   
 
AIRCRAFT FLIGHT DATA -- permits saving pertinent information on 15 various  
airplanes!  Information readily available for flight. Hard copy printed also.
 
FLIGHT LOG -- User enters:
              1)  estimated groundspeed
              2)  fuel/hour
              3)  departure airport, checkpoints, and leg distances are ONLY
                  entered INITIALLY, then saved for future use
 
``FLITEPLN '' ---   then  calculates DISTANCE:   total & to-go, TIME:  leg,    
cumulative & total in hr. & min., FUEL:  per leg, cumulative, & total for  
flight.  It also prints hard copy as needed.  PC-FLY ``FLITEPLN''saves flight
routes in files for future use AND can be re-used with different groundspeed
and fuel rates added as needed. (OR with different airplanes without change)
 
FAA FLIGHT PLAN -- dept., route, time, dest. fuel, name, address, etc. are    
printed without re-entering.  Permanent data is stored for future use.
 
1. DISCLAIMER:  !!!!!  USE THIS PROGRAM AT YOUR OWN RISK !!!!!  There is no  
                guarantee as to the accuracy of data or calculations.  User's 
                usual method of calculating flight plan data must be done to 
                check accuracy.!!!!!!
 
2. SYSTEM USE: Program was written on an IBM-PC, MS-DOS 2.1 interpreted Basic
               and can run with 1 disc drive with 64 K RAM.  It is written  
               to run in color when available and on a standard monitor.

3. STARTUP:    Begin BASIC then type ``RUN FLITPLN3.2VV ''
                                           

4. CREATE SELF      DIRECTIONS FOR SELF BOOTING DISK ARE AS FOLLOWS:       
    BOOTING          1.  Format disk with /s  (FORMAT B:/s)                    
     DISK:           2.  Copy BASIC to your disk  (COPY BASIC.COM B:)         
                     3.  Under DOS prompt B> type :                       
                                (assuming disk in drive B:)                
                               B>COPY CON:AUTOEXEC.BAT      <CR>
                                 BASIC FLITPLN3.2VV         <CR>
                                                            <F6> <CR>

5. REGISTERED USERS:  (contributors)
               They will be sent copy of program that permits adding and
               changing aircraft data.  Space is available for 15 airplanes  
               and data.  Registered users will also be able to change FAA  
               Flight Plan data.  Others will only be able to use the Flight 
               Log portion of the program.  If one wishes to write one's own
               program to permit these changes, it obviously can be done since
               this is an unprotected program.  I can assure you that it is  
               less expensive to become a registered user if ones time is   
               worth anything.
 
6. NON-REGISTERED USERS:  (non-contributors)
           a.  AIRCRAFT FLIGHT DATA - will not work properly
           b.  FAA FLIGHT PLAN - will not permit changes
           c.  FLIGHT LOG - and remainder of the program will function
 End notes

```
{% endraw %}

## HARDCASH.BAS

{% raw %}
```bas
1000 REM  *****************************************************************
1010 REM  *****************************************************************
1020 REM  **                             Author --> Gregory N. Doudna    **
1030 REM  **   Program --> HARDCASH        Date --> January 1984         **
1040 REM  **                                                             **
1050 REM  **   This program produces hardcopy output of the database     **
1060 REM  **   created and controlled by its associated program CASH.    **
1070 REM  **   As distributed, it is configured to control an IBM or     **
1080 REM  **   Okidata printer with Plug&Play PROMs, narrow carriage.    **
1090 REM  **                                                             **
1100 REM  *****************************************************************
1110 REM  *****************************************************************
1120 SCREEN 0:KEY OFF:CLS
1130 DIM DATUM#(100,12),ACCT$(99)
1140 GOSUB 2440  'load account codes
1150 COMMON DATUM#(),ACCT$(),SYM$
1160 WIDTH "LPT1:",132
1170 FILL40$="\                                      \"
1180 NINE$="#########.##"
1190 TEN$="##########.##"
1200 CONDENSED=15:EXPANDED=14:NORMAL=18
1210 CLS
1220 PRINT "Verify that the printer is On, at Top of Form, and Ready."
1230 PRINT "Press any key to Continue";
1240 ANS$=INKEY$
1250 IF LEN(ANS$)<>0 THEN 1260 ELSE 1240
1260 CLS:LPRINT CHR$(NORMAL)
1270 PRINT "     1.  Hardcopy Output of a Specific Years Data from "
1280 PRINT "         Month A to Month B."
1290 PRINT:PRINT "     2.  Hardcopy Output of the Expense Codes."
1300 PRINT:PRINT "     3.  Return to Main Menu."
1310 PRINT:PRINT "     Your Selection:  ";
1320 ANS$=INKEY$:ANS%=VAL(ANS$)
1330 IF ANS%<1 OR ANS%>3 THEN 1320
1340 CLS:ON ANS% GOSUB 1590,1360,2770
1350 GOTO 1260
1360 REM  *** Routine to Produce a Hardcopy of the Account Codes ***
1370 LPRINT CHR$(10)
1380 LPRINT CHR$(EXPANDED);
1390 LPRINT "            EXPENSE CODES"
1400 LPRINT CHR$(CONDENSED);CHR$(10)  'RETURN TO CONDENSED PRINT
1410 LIN%=1
1420 FOR B%=0 TO 49
1430 ITEM1%=B%:ITEM2%=ITEM1%+50
1440 DESC1$=ACCT$(B%):DESC2$=ACCT$(B%+50)
1450 LPRINT TAB(6);
1460 LPRINT USING "##";ITEM1%;
1470 LPRINT TAB(11);
1480 LPRINT USING FILL40$;DESC1$;
1490 LPRINT TAB(71);
1500 LPRINT USING "##";ITEM2%;
1510 LPRINT TAB(76);
1520 LPRINT USING FILL40$;DESC2$
1530 LIN%=LIN%+1:IF LIN%<=10 THEN 1560
1540 LPRINT CHR$(10);
1550 LIN%=1
1560 NEXT B%
1570 LPRINT CHR$(12)
1580 RETURN  1260
1590 REM   *** Database Hardcopy Routines ***
1600 GOSUB 2550    'Request Year and Verify it exists'
1610 PRINT:INPUT "Starting Month:  ";MON$
1620 IF LEN(MON$)>=3 THEN 1650
1630 PRINT:PRINT "Month request incorrect, must be at least 3 characters"
1640 GOTO 1610
1650 GOSUB 2230
1660 IF I%=0 THEN 1610 ELSE A%=I%
1670 PRINT:INPUT "Ending Month:  ";MON$
1680 IF LEN(MON$)>=3 THEN 1710
1690 PRINT:PRINT"Month request incorrect, must be at least 3 characters"
1700 GOTO 1670
1710 GOSUB 2230
1720 IF I%=0 THEN 1670 ELSE B%=I%
1730 IF B%>=A% THEN 1750
1740 PRINT:PRINT CHR$(7);"Ending Month must be >= Starting Month":GOTO 1610
1750 REM   *** Request Range of Codes to print ***
1760 PRINT:INPUT"Staring code #, (CR) for all:  ";SCODE$
1770 IF SCODE$="" THEN 1840 ELSE SCODE%=VAL(SCODE$)
1780 IF SCODE%<0 AND SCODE%>99 THEN 1760
1790 PRINT:INPUT"Ending Code #:  ";ECODE%
1800 IF ECODE%<0 AND ECODE%>99 THEN 1790
1810 IF ECODE%>SCODE% THEN 1850
1820 PRINT:PRINT CHR$(7);"Ending Code number must be >= Starting Code number"
1830 GOTO 1760
1840 SCODE%=0:ECODE%=99
1850 REM   *** Zero the sum registers ***
1860 FOR R%=0 TO 100:DATUM#(R%,0)=0:NEXT
1865 FOR C%=1 TO 12:DATUM#(100,C%)=0:NEXT
1870 REM   *** Starting Month A%, Ending Month B%, and Code #'s ***
1880 IF B%-A%>5 THEN D%=A%+5 ELSE D%=B%
1890 LIN%=1:LINS%=1:GOSUB 2140
1900 FOR R%=SCODE% TO ECODE%
1910 LPRINT USING FILL40$;ACCT$(R%);
1920 FOR C%=A% TO D%
1930 LET DATUM#(100,C%)=DATUM#(100,C%) + DATUM#(R%,C%)
1940 DATUM#(R%,0)=DATUM#(R%,0)+DATUM#(R%,C%)
1950 LPRINT USING NINE$;DATUM#(R%,C%);
1960 NEXT C%
1970 LPRINT USING TEN$;DATUM#(R%,0)
1980 LIN%=LIN%+1:IF LIN%<=10 THEN 2030
1990 LPRINT CHR$(10);
2000 LIN%=1:LINS%=LINS%+1:IF LINS%<6 THEN 2030
2010 GOSUB 2140
2020 LET LINS%=1
2030 NEXT R%
2040 LPRINT CHR$(10);"                 REPORT TOTALS:         ";
2050 FOR C%=A% TO D%
2060 LPRINT USING NINE$;DATUM#(100,C%);
2070 DATUM#(100,0)=DATUM#(100,0)+DATUM#(100,C%)
2080 NEXT C%
2090 LPRINT USING TEN$;DATUM#(100,0)
2100 IF C%-1=B% THEN 2120
2110 A%=C%:D%=B%:GOTO 1890
2120 LPRINT CHR$(12)
2130 RETURN 1260
2140 REM   *** Page headers ***
2150 LPRINT CHR$(NORMAL), CHR$(12)
2160 LPRINT "SUMMARY OF FILE:  ";SYM$
2170 LPRINT DATE$,TIME$;CHR$(CONDENSED)
2180 LPRINT USING FILL40$; "EXPENSE DESCRIPTION";
2190 FOR J%=A% TO D%:MON$=MID$(MONTHS$,J%*3-2,3):LPRINT "         ";MON$;:NEXT
2200 LPRINT "       TOTALS"
2210 FOR J%=1 TO ((D%-A%)*12)+64:LPRINT "*";:NEXT
2220 LPRINT "*":RETURN
2230 REM   *** Convert all letters to uppercase ***
2240 MONTH$=""
2250 FOR I%=1 TO 3
2260 M$=MID$(MON$,I%,1)
2270 IF ASC(M$)>=97 AND ASC(M$)<=122 THEN 2310
2280 IF ASC(M$)>=65 AND ASC(M$)<=90  THEN 2320
2290 PRINT CHR$(7),"Invalid character in Month requested"
2300 I%=0:RETURN
2310 M=ASC(M$) - 32:M$=CHR$(M)
2320 MONTH$=MONTH$+M$
2330 NEXT I%
2340 REM   *** Check validity of the name requested ***
2350 MONTHS$="JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC"
2360 FOR I%=1 TO 12:IF MONTH$=MID$(MONTHS$,I%*3-2,3) THEN 2390 ELSE NEXT
2370 PRINT CHR$(7),"Incorrect month requested  ";MONTH$:PRINT
2380 I%=0  'WE DID NOT FIND A MATCH
2390 RETURN
2400 REM   *** File does not exist error handling ***
2410 PRINT:PRINT "The file you requested does not exist.":PRINT
2420 FOR DELAY = 1 TO 2500:NEXT
2430 RESUME 2560
2440 REM   *** ROUTINE TO OPEN THE ACCTCODE FILE AND COPY IT INTO MEMORY ***
2450 ON ERROR GOTO 2510
2460 OPEN "ACCTCODE" FOR INPUT AS #3
2470 ON ERROR GOTO 0
2480 REM   *** LOAD CODES INTO MEMORY ***
2490 FOR R%=0 TO 99:LINE INPUT #3,DESC$:ACCT$(R%)=DESC$:NEXT
2500 CLOSE #3:RETURN
2510 PRINT CHR$(7),"The accounting code file does not exist.  You must create"
2520 PRINT "this file before you continue. "
2530 FOR DELAY=1 TO 2500:NEXT
2540 RESUME 2770  'chain back to Cash program
2550 REM   *** Subroutine to Retrieve the Requested Database File ***
2560 CLS
2570 INPUT "Which years data are you requesting   ";YR$
2580 IF LEN(YR$)=2 THEN 2610
2590 PRINT:PRINT"Year entered wrong, expecting 2 Numeric characters":PRINT
2600 GOTO 2570
2610 YR1$=LEFT$(YR$,1):YR2$=MID$(YR$,2,1)
2620 YR1=ASC(YR1$):YR2=ASC(YR2$)
2630 IF YR1<48 OR YR1>57 THEN 2650
2640 IF YR2>=48 AND YR2<=57 THEN 2670
2650 PRINT:PRINT"Expecting a value in the range 00 to 99":PRINT
2660 GOTO 2570
2670 IF MID$(SYM$,10,2)=YR$ THEN RETURN  'we already have it in memory
2680 SYM$="DATABASE."+YR$
2690 ON ERROR GOTO 2400
2700 OPEN SYM$ FOR INPUT AS #1
2710 ON ERROR GOTO 0
2720 PRINT:PRINT "Please wait, copying the file into memory"
2730 FOR R%=0 TO 99
2740 FOR C%=1 TO 12:INPUT #1,AMT#:DATUM#(R%,C%)=AMT#:NEXT C%
2750 NEXT R%
2760 CLOSE #1:RETURN
2770 CHAIN "CASH",1200
```
{% endraw %}

## LABELS.DOC

{% raw %}
```
                              COPYRIGHT (c), 1984
                         TARGET DATA COMPUTER SERVICES
                               8 BROWNFIELD LANE
                                 PHILLIPS RANCH
                            POMONA, CALIFORNIA 91766
                                 (714) 622-7182

  THIS DOCUMENTATION MAY BE REPRODUCED ONLY IF THE ABOVE COPYRIGHT IS INCLUDED

                              ADDRESS LABEL SYSTEM

DESCRIPTION:

High speed name/address data entry system for producing and maintaining
customer files, address labels, and mailing lists.  Especially useful for
capturing large volumes of names and addresses for direct mail advertising.

The system contains 6 programs:

                      1. LABELS.EXE     - MENU
                      2. SRTLAB.EXE     - ZIP CODE SORT
                      3. LABRPT.EXE     - FILE LISTING / SUMMARY REPORTS
                      4. NEWLAB.EXE     - CREATES LABEL FILES
                      5. LABELINP.EXE   - DATA ENTRY PROGRAM
                      6. LABPRT02.EXE   - ADDRESS LABEL PRINTING

HARDWARE/SOFTWARE REQUIREMENTS:

          1.  IBM PC
          2.  COLOR MONITOR/ADAPTER
          3.  EPSON FX-100 PRINTER OR EQUIVALENT
          4.  AVERY (R) #4143 ADDRESS LABELS - OR EQUIVALENT
              (4" X 15/16" - 2 ACROSS - 9 1/2" FORM WIDTH)
          5.  TWO DISK DRIVES
          6.  BASRUN.EXE (MICROSOFT BASIC COMPILER RUN-TIME MODULE)

DOWNLOADING:

The programs are in HEX format and must be converted to BINARY with file name
changes.

      1.  Download the following programs:

          LABELS.HEX - CONVERT TO BINARY - RENAME LABELS.EXE
          SRTLAB.HEX - CONVERT TO BINARY - RENAME SRTLAB.EXE
          LABRPT.HEX - CONVERT TO BINARY - RENAME LABRPT.EXE
          NEWLAB.HEX - CONVERT TO BINARY - RENAME NEWLAB.EXE
          LABELI.HEX - CONVERT TO BINARY - RENAME LABELINP.EXE
          LABP02.HEX - CONVERT TO BINARY - RENAME LABPRT02.EXE

      2.  Copy the .EXE programs to a new diskette
      3.  Copy COMMAND.COM from your DOS diskette to the new diskette
      4.  Copy BASRUN.EXE from your Basic Compiler to the new diskette.

The new diskette will always go into your default drive - the data diskette
into your B drive.  All the programs are "hard-coded" to look for data in the
B drive. Whenever a program prompts you for a file-name - DO NOT INCLUDE THE
DRIVE. For example: Program prompts you for file-name:

                                DO ENTER     - LAB.001
                                DO NOT ENTER - B:LAB.001




                                                                      Page 2
STARTING THE SYSTEM:

       1.  Boot your computer
       2.  Insert the label programs diskette into drive A or copy them to your
           default drive
       3.  Insert a formatted blank diskette into your B drive
       4.  Type in LABELS (return)

     You should now be looking at the labels menu screen

CREATING A LABEL FILE:

     The system prompts you for everything.
     However, before you can enter data, you must create a label file, so select
     the Create new Label File option by entering 111.

       1.  When you are prompted for the file name - you can use one of 12
           names:  LAB.000 thru LAB.011...The system will ask you if you want
           to create another...and although you can have more than one label
           file per diskette, I suggest you use only one diskette per file.
           That way you can get more addresses per diskette and be better
           organized.  Once you've finished creating your file, remove the data
           diskette, and put the file-name on the exterior label (eg. LAB.008)
           and a description (eg. Los Angeles County Residents).

       2.  Re-insert the data diskette into B drive and select the appropriate
           200 option corresponding to your file-name.

       YOU'RE NOW READY FOR HIGH-SPEED INPUT


ENTERING DATA:

       Although the screen is self-explanatory..there are a few things to
       keep in mind:

            1.  Not all the keys are functional. You can enter INS all day long
                and the program will keep snoring.  This was intentional...so if
                you hit the wrong key you don't have to spend all afternoon
                putting things right..or wonder where your screen went...hit
                scroll by mistake..etc.  Also, if you enter an invalid function
                the program will wait until you put a correct one in.

            2.  The keys that do work are as follows:

                Functions 1-3  - Will turn on/off capturing the same address,
                                 city, state, zip, FROM THE PREVIOUS entry
                                 AUTOMATICALLY.
                                 Sure saves time when you're going through a
                                 reverse directory or entering Apartment numbers
                                 where only the name and apt number change.

                Function 4     - Will turn on/off phone number capture.

                TAB (right)    - Will capture the same information from the
                                 previous entry MANUALLY.

                ARROW UP,DOWN  - Up a line, Down a line
                                 (left a field, right a field)

                ARROW LEFT, RIGHT - Go Left a character, Right a character




                                                                      Page 3

                RETURN         - Next line...marks the end of line text with an
                                 asterisk (*). Note: the asterisk is used
                                 internally for aligning the address labels.

                A-Z, a-z,
                0-9, etc.      - All the normal characters.

                AND THATS IT!!!!!!!!!!!!!

     EXAMPLE:  Assuming you are in the Labels Input program....

               1.  Enter function "A"
               2.  Enter your name, address, city and zip (return at the end
                   of each field)
               3.  Enter function "F" record 1, return then Enter function "C"
               4.  Enter your last name incorrectly (return) then enter TAB
                   until you see the Status "Changed"
               5.  Now turn on functions F1, F2, F3 then repeat steps 3 and 4
                   after correcting your last name..Surprized??
               6.  Now turn off function F1 then enter function "A"
               7.  Enter a new name and Address 1..How fast can you go???

PRINTING:

                Again...you're prompted for everything.  Just make your choice
                from the labels menu.  I suggest you use 14 1/2" X 11" stock
                paper to run through it a few times before you actually use
                labels.

                If you want the labels to print sorted by zip code, then select
                the "create sorted zip file" option before printing your labels.

-------------------------------------------------------------------------------

             This system is free of charge...and may be distributed
          only when accompanied with this documentation.  If you find
       the system useful, a contribution of $30.00 would be appreciated.
                   In any case, your comments or suggestions
                           would be greatly welcomed.

       BASRUN.EXE cannot be redistributed without written permission from
                                      IBM.

If you desire, the programs can be mailed to you on a diskette, with BASRUN.EXE.
Please write to us and we will gladly mail you information regarding the
redistribution of BASRUN.EXE, explaining certain disclaimers and charges IBM
requires us to make.


  YOU ARE ENCOURAGED TO WRITE TO US REGARDING OTHER SOFTWARE WE HAVE AVAILABLE

```
{% endraw %}

## MAKEMEMO.BAS

{% raw %}
```bas
10  '   ------------------------------------------------------------
20  '   |                          MAKEMEMO                        |
30  '   |                                                          |
40  '   |               copyright 1983    Chester Gabriel          |
50  '   ------------------------------------------------------------
60 DIM MDAY(13)
70 DIM DASH(3)
80 DIM FLAG$(128) : MAXFILES = 128
90 OPEN "R", 1, "MEMOFILE"
100 FIELD 1, 128 AS F$
110 GET 1,1
120 FOR I = 1 TO 128
130    FLAG$(I) = MID$(F$,I,1)
140 NEXT
150 IF FLAG$(1) = "I" THEN GOTO 210
160    TF$ = "I" : FLAG$(1) = "I"        ' *** Initialize data file if this is
170    FOR I = 2 TO MAXFILES		 ' *** first execution of the program.
180	  TF$ = TF$ + "E" : FLAG$(I)="E" ' ***  Set first flag to "initialized"
190    NEXT				 ' *** and all others to "empty".
200    LSET F$ = TF$ : PUT 1,1
210 FIELD 1, 79 AS MEMO$, 4 AS FIRSTDATE$, 4 AS LASTDATE$, 10 AS RAWDATE$,           1 AS FREQ$, 2 AS WINNDOW$, 3 AS INTERVAL$
220 PRINT: PRINT "SELECT OPTION:"
230 PRINT "A = ADD A NEW MEMO"
240 PRINT "D = DELETE AN EXISTING MEMO"
250 PRINT "X = EXIT FROM PROGRAM": PRINT
260 LINE INPUT "OPTION =  ? "; X$
270 GOSUB  950 : OPT$ = X$    ' *** convert any lower case letters to upper
280 IF OPT$ = "A" THEN GOSUB  390 : GOTO 320
290 IF OPT$ = "D" THEN GOSUB 1330 : GOTO 320
300 IF OPT$ = "X" THEN PRINT "PROGRAM EXITED " : GOTO 320
310 PRINT " THE ONLY OPTIONS ARE A,D, AND X. PLEASE RE-ENTER": GOTO 260
320 CLOSE
330 END
340 '
350 ' ***************************************************************
360 ' *****           SUBROUTINE TO ADD A MEMO                 ******
370 ' ***************************************************************
380 '
390 FOR R = 2 TO MAXFILES
400  IF FLAG$(R) <> "E", THEN GOTO 860           ' find first empty record
410    PRINT  "MEMO (79 CHARACTERS MAX) = "
420    PRINT : LINE INPUT TMEMO$
430    PRINT : PRINT "     MEMO FREQUENCIES:"
440    PRINT "O = ONCE"
450    PRINT "A = ALWAYS"
460    PRINT "M = MONTHLY"
470    PRINT "Y = YEARLY"
480    PRINT "E = EVERY N DAYS" : PRINT
490    PRINT "X = EXIT PROGRAM" : PRINT
500    LINE INPUT "DESIRED FREQUENCY = ", X$
510    GOSUB 950	    '  ***  convert any lower case letters to upper
520    TFREQ$ = X$
530    IF TFREQ$ = "O" THEN GOTO 630
540    IF TFREQ$ = "A" THEN GOTO 710
550    IF TFREQ$ = "M" THEN GOTO 630
560    IF TFREQ$ = "Y" THEN GOTO 630
570    IF TFREQ$ = "E" THEN GOTO 600
580    IF TFREQ$ = "X" THEN GOTO 880
590    PRINT "FREQUENCY MUST BE O,A,M,Y,E,OR X" : PRINT : GOTO 500
600    PRINT:LINE INPUT "ENTER NUMBER OF DAYS BETWEEN DISPLAYS (999 MAX): "; E$
610    IF E$ = "X" OR E$ = "x" THEN GOTO 880
620    IF VAL(E$) < 0 OR VAL(E$) > 999 THEN PRINT: PRINT "INVALID INTERVAL" :           GOTO 600
630    PRINT : LINE INPUT "ENTER DATE TO DISPLAY MEMO (MM-DD-YY):  "; D$
640    IF D$ = "X" OR D$ = "x" THEN GOTO 880
650    GOSUB 1040	' *** Convert to sequential date
660    IF DATERR <> 0 THEN PRINT "ERRONEOUS DATE; RE-ENTER " : GOTO 630
670    TLASTDATE$ = MKI$(SEQDATE)
680    PRINT : LINE INPUT "NUMBER OF DAYS WHICH  MESSAGE IS TO BE DISPLAYED:  ";          TWINDOW$
690    IF TWINDOW$ = "X" OR TWINDOW$ = "x" THEN GOTO 880       ' exit
700    TFIRSTDATE$ = MKI$( CVI(TLASTDATE$) - VAL(TWINDOW$) )
710    LSET MEMO$ = TMEMO$
720    LSET FIRSTDATE$ = TFIRSTDATE$
730    LSET LASTDATE$ = TLASTDATE$
740    LSET RAWDATE$ = D$
750    LSET FREQ$ = TFREQ$
760    LSET WINNDOW$ = TWINDOW$
770    LSET INTERVAL$ = E$
780    PUT 1,R
790    FLAG$(R) = "F"
800    FIELD 1, 128 AS F$	       '   flag record "R" as being full
810    GET 1,1
820    LSET F$ = LEFT$(F$,R-1) + "F" + RIGHT$(F$, 128-R)
830    PUT 1,1
840    PRINT : LINE INPUT "ENTER ANOTHER MEMO (Y/N)? "; YN$
850    IF YN$ = "N" OR YN$ = "n" THEN GOTO 880
860 NEXT
870 IF R>MAXFILES THEN	PRINT "MAXIMUM NUMBER OF MEMOS (127) ALREADY STORED"
880 PRINT: PRINT "MEMO ADDITION COMPLETE "
890 RETURN
900 '
910 ' ***************************************************************
920 ' *****      SUBROUTINE TO CONVERT LOWER TO UPPER CASE      *****
930 ' ***************************************************************
940 '
950 L = ASC( LEFT$(X$,1) )
960 IF L >96 AND  L < 123  THEN X$ = CHR$(L - 32)
970 RETURN
980 '
990 ' ***************************************************************
1000 ' ******    SUBROUTINE TO CONVERT DATE TO SEQUENTIAL DATE    ****
1010 ' ******           Input = D$    Output = SEQDATE            ****
1020 '***************************************************************
1030 '
1040 DATA 0,0,31,59,90,120,151,181,212,243,273,304,334
1050 RESTORE  'start reading the first data item each time subroutine entered
1060 FOR I = 0 TO 12
1070	READ MDAY(I)
1080 NEXT
1090 DATERR = 0
1100 J = 1
1110 FOR I = 1 TO LEN(D$)
1120	IF MID$(D$,I,1) = "/" OR MID$(D$,I,1)= "-" THEN DASH(J) =I :J=J+1
1130 NEXT I
1140 MO = VAL(D$)
1150 DA = VAL( MID$ (D$,DASH(1)+1) )
1160 YR = VAL( MID$ (D$,DASH(2)+1) )
1170 YR$ = RIGHT$(STR$(YR),2)
1180 YR  = VAL(YR$)
1190 IF MO < 1 OR MO > 12 THEN DATERR = 1
1200 IF DA < 1 OR DA > 31 THEN DATERR = 2
1210 IF YR < 81  THEN DATERR = 3
1220 INTVAL% = YR -80
1230 LEAPYRS% = INTVAL% / 4
1240 IF INTVAL%/4 - LEAPYRS% <> 0 THEN GOTO  1260   ' branch if not a leapyear
1250 IF  MO < 3   THEN LEAPYRS% = LEAPYRS% - 1	 'don't add a day until Mar 1
1260 SEQDATE = (INTVAL% * 365) + MDAY(MO) + DA
1270 RETURN
1280 '
1290 ' ***************************************************************
1300 ' ******           SUBROUTINE TO DELETE A MEMO             ******
1310 ' ***************************************************************
1320 '
1330 FOR R = 2 TO MAXFILES
1340  IF FLAG$(R) <> "F" THEN GOTO 1520
1350    FIELD 1, 79 AS MEMO$, 4 AS FIRSTDATE$, 4 AS LASTDATE$, 10 AS RAWDATE$,           1 AS FREQ$, 2 AS WINNDOW$, 3 AS INTERVAL$
1360	GET 1,R
1370	PRINT : PRINT : PRINT MEMO$
1380    PRINT "Frequency = ", FREQ$, "Date = "; RAWDATE$, "Window = "; WINNDOW$
1390	PRINT: LINE INPUT "DELETE THE ABOVE MEMO? (Y/N): "; YN$
1400	IF YN$ = "N" OR YN$ = "n" THEN GOTO 1520
1410	IF YN$ = "X" OR YN$ = "x" THEN GOTO 1540
1420	IF YN$ <> "Y" AND YN$ <> "y" THEN PRINT "ENTER Y OR N ": GOTO 1390
1430	FIELD 1, 128 AS F$     ' flag record "R" as now being empty
1440	GET 1,1
1450	TF$ = LEFT$(F$,R-1) + "E" + RIGHT$(F$,128-R)
1460	FLAG$(R) = "E"
1470	LSET F$ = TF$
1480	PUT 1,1
1490	PRINT : LINE INPUT "DELETE ANOTHER? (Y/N)  "; YN$
1500	IF YN$ = "N" OR YN$ = "n" OR YN$ = "X" OR YN$ = "x" THEN GOTO 1540
1510	IF YN$ <> "Y" AND YN$ <> "y" THEN PRINT "ENTER Y OR N ": GOTO 1490
1520 NEXT
1530 PRINT: PRINT "ALL MEMOS DISPLAYED"
1540 PRINT "DELETIONS COMPLETE"
1550 RETURN
1560 '
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```


                 PERSONAL DATEBOOK REFERENCE MANUAL

           (c) 1984  by LATERAL PROGRAMMING, INCORPORATED
                            P.O. Box 337
                Altamonte Springs, Forida 32715-0337







NOTE:

PERSONAL DATEBOOK is a "FREEWARE" software product.  It is fully copy-
righted and it is NOT in the public domain.  However,  you  may freely
copy  and  distribute  PERSONAL DATEBOOK  and  its utility programs to
anyone without restriction.

If  you  find PERSONAL DATEBOOK useful, you are urged to register your
copy by sending $12.95 to  LATERAL PROGRAMMING, INC.  at  the  address
above.  Registered owners will receive a printed copy of this documen-
tation and notification  of  all  program updates and improvements. In
addition,  if  you  send  a blank disk with your registration fee, you
will receive the latest version of PERSONAL DATEBOOK.


By  registering  your  copy, you enable us to continue publishing high
quality software on  a  "FREEWARE"  basis.  Your  support  is  greatly
appreciated!!



I. INTRODUCTION


PERSONAL DATEBOOK  is  a  program  that  maintains a daily calendar of
appointments, birthdays, memos, events and whatever  else  you  choose
to record.  It  also  generates  a  monthly calendar and allows you to
create and maintain a personal address list.

PERSONAL DATEBOOK is equally useful in both the home and the office.

The program will work with any IBM  Personal  Computer:  (XT,  PC,  PC
Portable or PC Jr.) with either a color or monochrome display.  It may
also be used with most IBM "compatible" computers running IBM PC DOS.

You  must  have  at  least  one  disk  drive (floppy or hard) and your
display must be 80 columns wide.

If you have a printer connected to your computer,  you  will  be  able
to print a day's memos along with the current month's calendar.



II. SET UP PROCEDURE:


Your  PERSONAL  DATEBOOK  disk  is  not copy protected because we feel
that such systems should not be used on any program that will be  used
every  day  and on which you will come to depend.  Consequently,  your
first step should be to  make  a  copy  of  your  original  disk.  The
original  should  then  be  placed in a safe place and you should work
ONLY with the copy.

Your  original  distribution  disk is not "bootable" and will not work
directly on your computer because it does not contain the  DOS COMMAND
file  or the BASIC language file needed to run the program.  We cannot
include  these  files  on  your  disk because of copyright and royalty
restrictions that would greatly increase the cost of the software.

Also,  we have no way of knowing which operating system version  (1.1,
2.0, 2.1 etc.) or what type of computer  (XT, PC, PC Portable, PC Jr.,
Compaq, etc.) or disk drive (floppy or fixed) you will be using.

Therefore,  you  will have to create a "working" disk tailored to your
system.  This  is  not difficult to do and you will only have to do it
one time.  However,  you must be familiar with the operation  of  your
computer and you  must  know  how  to  use  the  "FORMAT"  and  "COPY"
utilities included with your Disk Operating System.

Note  that  you  must  use  your  DOS "FORMAT" and "COPY" utilities to
create a working copy for your operating system version.  This  cannot
be done with the  "DISKCOPY"  utility because DISKCOPY would create an
exact copy of  the  distribution  disk  that  would  not  contain  the
operating  system  COMMAND  files  and  that also might not be in your
particular version  of  DOS.  However,  once  you  have  created  your
"working" copy, DISKCOPY may be used to create additional copies.

If  all  this  sounds confusing to you, please read your DOS manual or
get help from your computer store or a knowledgeable friend.



A. EQUIPMENT AND MATERIALS


Before you begin, you must have:

        1. An  IBM  (XT, PC, PC Portable, PC Jr.)  or IBM "compatible"
           computer with an 80 column  display  monitor.  The  monitor
           may be either color or monochrome.

        2. A copy of the IBM DOS  (Disk Operating System)  and the IBM
           BASIC language.  PC Jr.  users  will  need  the  IBM  BASIC
           CARTRIDGE instead of disk BASIC.

        3. The original PERSONAL DATEBOOK disk.

        4. One or more blank disks.



B. FIXED DISK INSTALLATION


If you will be using a "fixed" or "hard" disk:

        1. Use the DOS COPY  utility  to  copy  the  files  from  your
           PERSONAL  DATEBOOK   distribution   disk  to  the  selected
           directory on your drive.

        2. Use  the  DOS  COPY  utility to copy  BASIC.COM to the same
           directory on your drive.

        NOTE:  Your  directory  should  contain the files:  BASIC.COM,
        MEMO.BAS,  MEMO.BAT,  MANUAL.EXE,  MANUAL.TXT, CONVERT.BAS and
        CONVERT.BAT  If you create another batch file the main program
        "MEMO.BAS"  must  be  called  with  the parameters "BASIC MEMO
        /S:255 /F:4" to work properly.


C. FLOPPY DISK INSTALLATION


If you will be using a floppy disk drive:

        1. FORMAT a blank disk using the "/S" option as  explained  in
           your  DOS  manual.  This will create a "bootable" disk that
           contains the DOS COMMAND file.  If you have a double  sided
           drive,  be  sure to create a double sided disk as this will
           greatly increase the amount of datebook memos and addresses
           that you can create.

        2. Use  the  DOS  COPY  command  to  copy  the files from your
           PERSONAL DATEBOOK  distribution  disk  to  your  formatted,
           blank disk.

        3. Use the DOS COPY command to  copy  the  BASIC.COM  file  to
           file to your formatted disk.  PC Jr.  users with  CARTRIDGE
           BASIC may omit this step as the BASIC language is contained
           in the cartridge.

        4. Label your completed disk  "PERSONAL DATEBOOK WORKING DISK"
           along  with  the date and any other information you wish to
           include.

        NOTE:  You  will  end  up with a  disk  containing  the  files
        COMMAND.COM,  BASIC.COM,   MEMO.BAS,   MEMO.BAT,   MANUAL.EXE,
        MANUAL.TXT, CONVERT.BAS and  CONVERT.BAT.  This is the working
        PERSONAL DATEBOOK disk that you will be using every day.

        It is suggested that you make an additional copy of this disk,
        label  it  "PERSONAL DATEBOOK MASTER",  and keep it in a  safe
        place.  Then,  when  you  wish  to create additional "working"
        disks, you can simply use your DISKCOPY utility and  you  will
        not have to go through the separate format and copy operations
        described above.



III. USING PERSONAL DATEBOOK


PERSONAL DATEBOOK  is very easy to use. All operations are prompted on
two command lines at the bottom of the screen.

Although the use of PERSONAL DATEBOOK is  fairly  straightforward  and
logical,  there  are  certain conventions that must be observed. It is
suggested  that  you  read through the following description of all of
the commands and functions of PERSONAL DATEBOOK.



A. START-UP:


To start the PERSONAL DATEBOOK program you must be at the  DOS COMMAND
level where you will see the  "A>" prompt.  You  can  get to  the  DOS
command level in several ways:

         1. If your computer  is  off,  place  your  PERSONAL DATEBOOK
            (working copy)  in  the  "default" drive (usually drive A)
            and turn the computer on.

         2. If the computer is on and you are not at the command level
            you can perform a  "warm boot"  by simultaneously pressing
            the <Ctrl>,  <Alt>  and  <Del>  keys  after  placing  your
            PERSONAL DATEBOOK disk in the default drive.

Once  you  are  at  the  DOS command level, simply type MEMO and press
<Ret> for the PERSONAL DATEBOOK program or type MANUAL and press <Ret>
for this program.

NOTE:    When you first turn on your computer or perform a  warm  boot
         you will be asked to supply the date and time.  The  PERSONAL
         DATEBOOK program uses this information.  It will simplify the
         operation of the program if it is supplied at start-up.



B. PROGRAM INITIALIZATION


When  you  call  up the PERSONAL DATEBOOK program, several things will
happen. First, the program will check to see if you are using a  color
or  monochrome  monitor and will automatically adjust the display.  If
you  happen  to have both a color and monochrome driver installed, you
will be asked which you prefer to use.

NOTE:    The program has no way of knowing if a  monitor  is  actually
         attached  to  the  display  driver  or  if  it  is turned on.
         Be careful not to switch to a nonexistant display.  Also,  if
         you  have  two  monitors , the  program will come up first on
         the monochrome display and it will return  to  the monochrome
         display when you exit the program.

Next,  the  program  will automatically test your disk to see how much
space is left. If the amount of free space is below about 20 kilobytes
a  message  will  be displayed suggesting that you start a new disk or
that you delete any unnecessary files.

NOTE:    In addition to the COMMAND.COM, BASIC.COM, MEMO.BAT, MEMO.BAS
         MANUAL.EXE,  MANUAL.TXT,  CONVERT.BAT  and  CONVERT.BAS files
         that will be on disk when you initially begin to use PERSONAL
         DATEBOOK, the program will create the following files:

         1. A  file  will  be  created  for  each month that you enter
            memos. An example is MAY1984.CAL.  These files will always
            contain  the  first  three  letters of the month name, the
            year and the suffix "CAL".

         2. Two files will also be created for your address list.  The
            first,  ADDRESS.DAT,  contains  all  of  the data for your
            address list. The second, ADDRESS.ISI, contains  an  index
            of all of the last names in the address list.

         It is suggested that you periodically delete  any  old  month
         files that you will no longer be using.  If space gets tight,
         you  can also delete the files MANUAL.BAS which contains this
         text; MANUAL.EXE which is the program to read and print  this
         manual; as well as CONVERT.BAT and CONVERT.BAS which are used
         to  convert PERSONAL DATEBOOK address lists for use with word
         processors and other programs.  If you delete the  MANUAL  or
         CONVERT programs from your working disk, be sure you retain a
         copy on another disk.

         DO NOT DELETE  any of the other files as the program will not
         work without them.

To  delete  files,  first end the program. This will return you to the
DOS command level. When you see the "A>" prompt:

         1. Type  DIR  (or DIR/W if you have a lot of files) to obtain
            a directory of all the files on the disk.

         2. Choose  the file to be deleted and type ERASE FILENAME.EXT
            where FILENAME is the name of the file and EXT is the  DOS
            file type identification. Example: ERASE MAY1984.CAL

         3. Repeat  step  two  for  each  file that you wish to erase.
            Then use the DIR command to obtain a  new  directory.  You
            will  notice  that  the erased files are gone.  There will
            also be a message at the bottom telling you how much  disk
            space is now available.

         NOTE: Your DOS manual contains complete  information  on  the
         use of the  ERASE  and DIR (Directory) functions. Please read
         it if you are unsure of any of the instructions above.



C. CHOOSE MONTH AND YEAR


Next,  the  program will draw the initial PERSONAL DATEBOOK screen and
display the following prompt at the bottom:

THE SYSTEM DATE IS (MONTH, YEAR)    DO YOU WANT THE SYSTEM DATE? (Y/N)

The  system  date  is  the  date  you  entered  when you turned on the
computer.  If the system date is the month  and  year  that  you  want
simply type a "Y" and the file for that month and year will be opened.

If  you  type a "N" you will be asked to enter another month and year.
You must type the month name and the year.  Almost any format will  do
such as: "AUGUST, 1985" or "JUNE 1983".

NOTE:   The computer is really only  interested  in  the  first  three
        letters of the month name and the last two digits of the  year
        so an entry of "AUG85" is also acceptable.

        The acceptable years are 1900 to 1999.  If you type  "1885" or
        "2085"  the  computer  will  assume you mean 1985. (Few people
        other than Time Lords will want to  schedule  appointments  in
        the  past.  However,  the  ability to list previous months and
        years might be useful if you want to determine the day of  the
        week you were born or married, etc.)



D. MAIN MENU SELECTIONS


Once  you  have  entered the desired month and year, the computer will
generate a calendar and display it in the upper left  hand  corner  of
the  screen  followed  by  a list of the month's major holidays in the
box immediately below. Then, in the two line area at the bottom of the
screen, you will see the following choices:

MAIN MENU:    <F1> PICK DAY   <F2> PICK MONTH/YEAR   <F3> ADDRESS LIST
and <F10> END PROGRAM

You must now select one of these functions.

NOTE:    <F1>, <F2>, <F3>, etc. refers to the  FUNCTION KEYS  on  your
         computer.  XT, PC, and PC Portable  users need only press one
         of the ten function keys on the  extreme  left  side  of  the
         keyboard.  PC Jr.  users must press the "Fn" key at the upper
         right  on  their  keyboard  followed  by   the   number   key
         corresponding to their choice. Also, <F10> on the  PC Jr.  is
         the "Fn" key followed by the "0" key. 

<F1> PICK DAY:  If you are in the desired month  and  year,  use  this
function  key  to choose the day of the month. You will be prompted to
enter the desired day. Enter it and press <Ret>.  If  a  memo for that
day  already  exists,  it will be displayed in the column on the right
hand side of the screen reserved for memos. If no memo exists you will
be  prompted  to  enter  one  and the cursor will be positioned at the
beginning of the first memo line.

NOTE:    To enter a memo, simply begin typing.  If you make a mistake,
         use  the  backspace   key  to  back  up  and  erase  unwanted
         characters.  Then continue typing. The limit for each line is
         40 characters.  When  you  finish a line, press the <Ret> key
         and the cursor will be placed at the beginning  of  the  next
         line.  When  you  are  finished typing memo lines,  press the
         <Ret> again.  The memo will be  recorded  and  the  MEMO MENU
         will appear at the bottom of the screen.

         If you make an error, use the  backspace  key  to  erase  the
         unwanted characters.  You can only correct  mistakes  on  the
         current  line  and  you  cannot  return to a previous line at
         this point.  However, if you do want to change something on a
         previous line or notice a mistake, do not worry. You may call
         up  a  full  range of editing functions from the EDIT MENU as
         explained later.

         The program will not allow a blank line between  memo  lines.
         If you try to enter a blank line,  the program will think you
         have finished the memo and act accordingly.  The  reason  for
         this is that blank lines use up valuable disk space.

<F2> PICK MONTH/YEAR:  Use  this  function key if you want to choose a
different month and year.  You will again be asked  if  you  want  the
system month and,  if not,  given the opportunity to enter a new month
and year.

<F3> ADDRESS LIST:  Use this function key to use the ADDRESS LIST part
of the program.  A  blank address list form will be drawn in the lower
left box on your screen and  the  "ADDRESS MENU",  as explained later,
will appear to prompt further choices.

<F10> END PROGRAM:  Use this function key to end PERSONAL DATEBOOK and
return to the DOS operating system.

NOTE:    Always  use  this  function to end the program. DO NOT simply
         turn off the computer. If you do, some of the work  you  have
         done  during  the  current  session  could be lost.  The "END
         PROGRAM" function organizes your data files  and  allows  the
         most efficient use of disk space.



E. MEMO MENU SELECTIONS


If you choose <F1> in the MAIN MENU, and either retrieve  an  existing
memo  or  create  a new memo, you will be presented with the following
choices:

MEMO MENU:    <F1> PRINT MEMO     <F2> EDIT MEMO     <F3> ADDRESS LIST
<F4> CLEAR ADDRESS BOX and <F9> MAIN MENU

<F1> PRINT MEMO:  If  you  choose  this function, you will be asked to
ready your printer and to "type any key"  to  continue.  Your  printer
will then print a duplicate of the screen.  Use  this function to take
a copy of your day's appointments with you.

NOTE:    If your printer is not on or if it is out of paper,  etc.  an
         error  will  result.  No  harm  will  be done and you will be
         returned to the MEMO MENU after a "timeout"  delay  of  about
         45 seconds or less.

<F2> EDIT MEMO:  If  you  choose this function,  you will be presented
with a list of functions  that  will  allow  you  to  make  additions,
changes,  deletions, etc. to the current day's memo. These choices are
explained later in the "EDIT MENU" section.

<F3> ADDRESS LIST:  This  function  is  identical  to the ADDRESS LIST
selection in the MAIN MENU.

<F4> CLEAR ADDRESS BOX: This function erases any data in  the  address
and holiday data box in the lower left corner when desired.

<F9> MAIN MENU: This selection returns you to the MAIN MENU choices.



F. EDIT MENU SELECTIONS


There are a complete range of memo editing functions:

EDIT MENU:     <F1> DELETE MEMO     <F2> RETYPE MEMO     <F3> ADD LINE
<F4> RETYPE LINE  <F5> DELETE LINE   <F6> INSERT LINE   <F7> MOVE LINE
and <F9> MEMO MENU

<F1> DELETE MEMO:  This selection deletes the entire memo and  removes
it from the calendar.

<F2> RETYPE MEMO:   This  selection  also  deletes  the  entire  memo.
However, it does not remove the memo notation from the calendar and it
positions the cursor for you to type in new memo lines.

NOTE:     If you chose this function and decide not  to  enter  a  new
          memo, simply press <Ret> and both the calendar and memo will
          be entirely deleted exactly as if you had  chosen  the  <F1>
          DELETE MEMO function.

<F3> ADD LINE:  This selection allows you to add a line or lines to an
existing memo.  Remember,  you  cannot  have  blank lines between memo
lines as this would waste valuable disk space.  When you are finished,
simply type an extra <Ret> and the additions will be recorded.

<F4> RETYPE LINE:  This  function  will allow you to retype a selected
line.  Notice  the numbers in the vertical column in the middle of the
screen. You will be prompted to enter the line number of the line  you
wish to retype. Enter the line number and press <Ret>. The  line  will
be erased and you may type a new line. When you finish the line, press
the <Ret> key.  You will then be  prompted  to  enter  the  number  of
another line to be retyped.  Press <F9>  when done and you will return
to the EDIT MENU.

NOTE:    You  will  receive an error message if you type a line number
         that does not contain a memo line.  Also, remember  that  you
         cannot type past the 40 character line limit.

<F5> DELETE LINE:  This selection allows you to delete a selected memo
line.  You  will  be  prompted  to  enter the number of the line to be
deleted. Then, when you press <Ret> the line will  disappear  and  the
following  lines  will  move  up.  You  will then be prompted to enter
another line number or press <F9> to QUIT and return to the EDIT MENU.
Once  again,  if  you try to type a non-valid line number you will get
an error message.

<F6> INSERT LINE:  This  function allows you to insert a new memo line
between existing memo lines.  You will be prompted for the  number  of
the  line  where  the  insertion is to be made.  When you enter a line
number and press <Ret>, the following lines will  move  down  and  the
cursor  will  be positioned for you to type the new line. Type the new
line and press <Ret>. The program will prompt for a new insertion line
number or allow you to press <F9> to quit and return to the EDIT MENU.

<F7> MOVE LINE:  This  function  allows you to move memo lines around.
First you will be prompted for the number of the  line  to  be  moved.
When you type this number and press <Ret> you will be  asked  for  the
destination line number. Enter this number,  press  <Ret> and the line
will be moved to the desired location.

NOTE:    Once  again,  because  blank lines between memo lines are not
         allowed,  the  program  won't  let  you specify a line number
         greater than the number of lines in the memo.

<F9> MEMO MENU: This selection returns you to the MEMO MENU.



G. ADDRESS MENU SELECTIONS


You can enter the ADDRESS LIST from the MAIN MENU  or  the  MEMO MENU.
In  either  case when you choose this function a blank address form is
printed in the lower left box on the screen and the following  appears
in the prompt area:

ADDRESS MENU: <F1> ADD RECORD  <F2> GET RECORD  <F3> SEARCH  <F8> MEMO
MENU and <F9> MAIN MENU

<F1> ADD RECORD:  This  function  lets you add a new name and address.
The cursor will be positioned at the first character on the  Last Name
line.  Simply  begin  typing  the information.  Press <Ret> after each
entry. Press <Ret> at the beginning of each data field if you wish  to
leave it blank.

NOTE:    Once you begin entering information, you  must  fill  in  the
         entire form before quitting.  There are 19 separate fields on
         the  form,  so  you will have to press <Ret> 19 times whether
         you enter information in a particular field or not.

         If you make a mistake while typing the current field,  simply
         use  the  backspace  key  to  remove  unwanted characters and
         retype the correct information.

         If you want to change something in a previous field, type the
         "<" character at the BEGINNING of the current field and press
         <Ret>.  This  will  place  the cursor at the beginning of the
         previous  field.  You  can back up through the entire form in
         this manner if you wish.  However,  major editing can be done
         more easily with the CHANGE function explained later.

<F2> GET RECORD:  Use  this  function to retrieve a previously entered
record from your Address file if you know the  LAST NAME.  The  cursor
will  be  positioned at the beginning of the LAST NAME field. You must
type the last name, or a portion of the  last  name,   EXACTLY  as  it
appeared in the original record.

NOTE:    You  may  type the entire last name or a portion of it as the
         search argument. For example, entering "Smith" would find all
         address records with a last name of Smith. It would not  find
         smith,  SMITH  or  SmItH.  Entering "S" would find all of the
         address records beginning with the capital S.

         There  are  several  conventions  that  must be observed when
         using the GET RECORD and SEARCH functions.  Please  refer  to
         the section  TIPS ON USING THE ADDRESS LIST.  Reading it will
         save you a lot of frustration later on.

If the requested address record is found, it will be displayed and the
following choices will appear in the prompt area:

GET RECORD:  <F1> CHANGE   <F2> NEXT   <F3> DELETE  <F4> PRINT ADDRESS
<F7> ADDRESS MENU  <F8> MEMO MENU and <F9> MAIN MENU

<F1> CHANGE:  Use this option if you wish to change any information in
the  record.  The  cursor will be placed at the beginning of the first
field. To make a change, simply retype with the  correct  information.
If  you  do  not wish to make any change in a particular field, simply
press <RET> and the cursor will move to the next field. Once you start
changing, you must go through each field and press  the  <Ret>  key  a
total  of  19 times.  When you finish you will be returned to the main
ADDRESS MENU.

<F2> NEXT:  This option will continue the search for another occurance
of  the  search  argument.  If  another  record is found,  it  will be
displayed. If no other record  is  found,  the  message  "END OF FILE"
will be displayed at the bottom of the screen.

<F3> DELETE:  Use  this  function if you wish to completely delete the
address record from the file. As a safety measure,  the  program  will
ask  "ARE YOU SURE YOU WANT TO DELETE? (Y/N)".  If  you type  "Y"  the
record  will  be  deleted.  If  you  type  "N"  the record will not be
deleted and you will be returned to the main ADDRESS MENU.

<F4> PRINT ADDRESS: This function will prepare an address  label  that
contains the FIRST NAME,  MIDDLE NAME,  LAST NAME,  COMPANY,  ADDRESS,
CITY,  STATE  and  ZIP CODE.  The  address  label is then sent to your
printer where labels, letterheads, envelopes, etc. can be printed.

NOTE:    You will be asked to specify an OFFSET  IN  SPACES  FROM  THE
         LEFT  MARGIN. You can enter a number from 0 to 50.  An offset
         of 0 will print the address at the extreme left side  of  the
         page  and  an  offset  of 50 will position the address at the
         extreme right of a standard width letter. Intermediate values
         will, of course, position the address between these extremes.

         Next you will be asked to ENTER  NUMBER  OF BLANK LINES AFTER
         ADDRESS.  This must be a number between 1 and 70.  If you are
         printing the address on standard 1 inch labels,  for example,
         you should specify 4 lines if your printer spaces 8 lines per
         inch (the address is always 4 lines long)  or 2 lines if your
         printer spaces 6 lines per inch.

         Finally you will be asked to MAKE SURE PRINTER IS READY  THEN
         PRESS ANY KEY TO PRINT ADDRESS.  Pressing  any  key will then
         send the address to the printer. If you do not have a printer
         attached to your computer, or if the printer is not turned on
         or out of paper, etc. an error will result.  After  a timeout
         delay  of  up to 45 seconds (during which you may correct the
         fault) the program will return to the MAIN ADDRESS MENU.

         After an address has been printed you will be returned to the
         program at the point from which you entered the PRINT ADDRESS
         function.

<F7> ADDRESS MENU:  This option will return you to  the  main  ADDRESS
MENU.

<F8> MEMO MENU: This returns you to the MEMO MENU in the main program.

<F9> MAIN MENU: This returns to the MAIN MENU.

NOTE:    You can enter the address list from either the  MAIN MENU  or
         the  MEMO MENU  and you can also return to either one.  It is
         possible,  for example,  to  go  to  the  ADDRESS LIST in the
         middle of entering a memo, look up an address and  return  to
         continue editing the memo. If you exit directly from a search
         operation  (with the address information still on the screen)
         and choose the MEMO MENU function, the address will remain on
         the  screen  for  reference.  However, if you choose the MAIN
         MENU function, the address will be erased.

<F3> SEARCH:  This  function  will  search  through the ENTIRE address
file for information that you supply. You can use  it  to  search  for
any  particular  piece  of  information in any field. For example, use
it to search for addresses with a  particular  zip  code  or telephone
area code.  Enter the "search string" in the prompt area at the bottom
of the screen and press <Ret>.

NOTE:   The search argument can be up to 30  characters  long.  Again,
        the  program  will  only  find  a  record if there is an EXACT
        match with the search argument.  Please read the section  TIPS
        ON USING THE ADDRESS LIST  for  a  full explanation of the GET
        RECORD and SEARCH functions.

If the search is successful, the first occurance of the record will be
displayed and you will be presented with the following choices:

SEARCH RECORD:      <F2> NEXT   <F4> PRINT ADDRESS   <F7> ADDRESS MENU
<F8> MEMO MENU  and  <F9> MAIN MENU

These options are identical to the ones described in the GET  function
above.

NOTE:    The CHANGE and DELETE functions will  not  operate  from  the
         SEARCH function. You must return to the ADDRESS MENU and then
         call up the record with the GET RECORD option in order to use
         the CHANGE and DELETE functions.



H. TIPS ON USING THE ADDRESS LIST


DATA ENTRY

The first field is labeled LAST NAME.  The ADDRESS LIST  maintains  an
index  file  called ADDRESS.ISI that contains an index of whatever you
enter in this field.  As explained later, the <F2> GET RECORD function
searches this index.

The  remaining  fields are for FIRST NAME, MIDDLE NAME, NOTE, ADDRESS,
and so on.  There are fields for two phone  numbers  (office and home)
and a generous space for comments.

NOTE:    The line immediately below the lines  for  last,  middle  and
         first  names  is labeled COMPANY.  This line is printed under
         the name when you use the PRINT ADDRESS function. You can use
         this line for an individual's title,  company or other infor-
         mation that you might want  printed  under  the  name  on  an
         address label.  If you do not want a  company, title, etc. to
         print just leave this line blank.

The data fields should be set up in a  consistent  manner.  This  will
greatly simplify retrieving information later on.


SEARCHING

There are two different ways to find an address record:

<F2> GET RECORD  is the fastest method of searching your address list.
It searches the last name index (ADDRESS.ISI) and  then  goes  to  the
main file (ADDRESS.DAT) to get the appropriate record.

NOTE:    In  order  to  find  an  address you must type the  LAST NAME
         exactly as it was typed in the original record.  If you typed
         "Smith"  and  original  was  typed  SMITH,  then  the address
         would not be found.

         As mentioned earlier, you can also search the  index  with  a
         portion of the last name.

         For example:

         Entering "Smith" will find address records for everyone named
         Smith.

         Entering "Sm" will find address records for every  last  name
         beginning with Sm.

         Entering  "S"  will  find address records for every last name
         beginning with a capital S.


<F3> SEARCH is an alternate method of finding an address. It is slower
than using the GET RECORD function, but it is much more versatile. The
SEARCH function searches the entire address file, not  just  the  LAST
NAME field. You can use it to find address records by entering what is
called a "search argument" that can be up to 30 characters in length.

An example would be looking up addresses by state  or  telephone  area
code.  The possibilities are endless.  However, as with the GET RECORD
function, there must be an exact match (including capitals, spaces and
lower case) or the address record will not be found.

Once again,  filling out the address forms in a consistent manner such
as using all capitals, etc. will make things a lot easier later on!


USING YOUR ADDRESS LIST WITH OTHER PROGRAMS

For  those  who  have  word  processors  with "mail merge" and similar
functions that can, for example, merge an address  list  into  a  form
letter, etc., a simple conversion program is provided.

This program, called CONVERT.BAS is present on your original  PERSONAL
DATEBOOK disk.  CONVERT.BAS  will  extract  information  from the file
ADDRESS.DAT and convert it to a standard ASCII text file that  can  be
used with most word processors and other programs.

CONVERT.BAS  extracts the FIRST NAME, MIDDLE NAME, LAST NAME, COMPANY,
ADDRESS,  CITY,  STATE  and ZIP CODE  and organizes it in an  "address
label" similar to the PRINT ADDRESS function. Then it creates an ASCII
text file called ADDRESS.TXT.

Addresses in the new ADDRESS.TXT file will have the following format:
 
         @
         First Middle Last
         Company
         Address
         City, State  ZipCode
         @

Unfortunately, each word processor uses different symbols to  separate
and delineate records in an address file.  WordStar, for example, uses
"dot"  commands.  We  have  no way of knowing which word processor you
will be using.  Consequently,  you will have to modify the ADDRESS.TXT
file.   You  can  use  your  word  processor's  "search  and  replace"
function  to  replace the "@" symbol that appears at the beginning and
end of addresses in the ADDRESS.TXT file with the required notation.

Each line in the ADDRESS.TXT file ends with  a  linefeed  (CHR$(10) or
hex 0A) plus a carriage return (CHR$(13) or hex 0D).  This is standard
with many word processors, but not with all.  If you require different
symbols you must modify line 3310 in the CONVERT.BAS  program.  If you
are not an experienced BASIC programmer or if you are unfamiliar  with
the requirements of your word processor,  you should seek  assistance.
At  any  rate,  make  a back-up copy of the CONVERT.BAS program before
attempting any changes. It would also be very wise to work with a COPY
of your ADDRESS.DAT file and to do the conversion on a separate disk.

If your word processor does not use ASCII text files,  you will not be
able  to  use  the  ADDRESS.TXT  file  unless you were supplied with a
program to convert ASCII files to  the  proper  format.  Quality  word
processors usually supply such a program.

To use CONVERT.BAS you should copy the files CONVERT.BAS, CONVERT.BAT,
ADDRESS.DAT and BASIC.COM to a separate disk that has  been  formatted
with  the  /S (system) option.  Consult your DOS manual if you are not
familiar with the COPY and FORMAT utilities.

If your disk contains the CONVERT.BAT batch file as suggested,  simply
"boot" the disk and type  "CONVERT"  when the DOS "A>" prompt appears.
If  you  are  not  using  the CONVERT.BAT batch file, you can call the
CONVERT.BAS program directly from BASIC.  Note,  however,  that  BASIC
must be called with the option "BASIC /s:255" which allocates a larger
than normal file size. Failure to specify this option will  result  in
an error that will terminate the program when you attempt to run it.

When  the  CONVERT.BAS  program is run, just follow the screen prompts
and the new ADDRESS.TXT file will be created automatically.

CONVERT.BAS  is supplied "as is" for the purpose of making the address
files created by PERSONAL DATEBOOK more useful. Regrettably we can not
be responsible for its use or the results you  may  obtain.  Also,  we
cannot offer technical support beyond the information supplied for the
conversion of ADDRESS.DAT files to any individual word processor.







            (c) 1984 by  LATERAL PROGRAMMING, INCORPORATED
                             P.O. Box 337
                   Altamonte Springs, FL 32715-0337
```
{% endraw %}

## MEMO.BAS

{% raw %}
```bas
1 'PERSONAL DATEBOOK
2 '(c) 1984 by LATERAL PROGRAMMING, INC. All rights reserved.
3 'P.O. Box 337, Altamonte Springs, FL 32715
4 '(305) 788-1433
5 'Version 1.01 JULY 1984
6 'Program name is "MEMO"
7 'PERSONAL DATEBOOK is a FREEWARE distribution product. You are urged to copy
8 'and distribute this program without restriction.
10 CLS:CLR=2:WIDTH 80:ON ERROR GOTO 444
11 GOSUB 443:GOSUB 430:IF MA%=2 THEN CA=0:CB=7:GOTO 15
12 IF MA%=1 THEN CA=4:CB=14:GOTO 15
13 IF MA%=3 THEN 433
14 SYSTEM
15 CLS:SCREEN 0,0,0:COLOR CLR,0:WIDTH 80:DEFINT I,J,K:YA%=1900:YB%=1999:KEY OFF:FOR I=1 TO 10:KEY I,"":NEXT:DIM LA$(12,2),MB(21),MY$(20),DA%(31),DB$(20):DIM FA$(20),HA$(20),PA$(20),RA$(20):DIM F$(19),F#(19)
16 DIM CX(19),CY(19),FL(19),TY$(19):DIM H$(30):DIM MC$(624),TA%(31):CLS:LOCATE 10,30:COLOR CA,CB:PRINT" ONE MOMENT PLEASE ";:COLOR CLR,0:GOTO 94
17 LOCATE 10,24:COLOR CA,CB:PRINT" DISK NEARLY FULL BUT OK TO USE ";:COLOR CLR,0:LOCATE 12,17:PRINT"ERASE OLD FILES OR USE NEW DISK FOR NEW MONTHS";:BEEP:BEEP:BEEP:LOCATE 14,27:PRINT"PRESS ANY KEY TO CONTINUE";:GOSUB 106
18 RS$=INKEY$:IF RS$=""THEN 18
19 ON ERROR GOTO 445
20 CLS:GOSUB 183
21 DATA JANUARY,FEBRUARY,MARCH,APRIL,MAY,JUNE,JULY,AUGUST,SEPTEMBER,OCTOBER,NOVEMBER,DECEMBER:RESTORE 21:P=VAL(LEFT$(DATE$,2)):FOR I=1 TO P:READ P$:NEXT:GOSUB 182:GOSUB 103:COLOR CA,CB
22 LOCATE 24,1:PRINT"SYSTEM MONTH IS "LEFT$(P$,3)", "RIGHT$(DATE$,4)"  DO YOU WANT SYSTEM MONTH?  (Y/N)";:GOSUB 177:IF V$="Y"THEN 24
23 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER DESIRED MONTH AND YEAR:";:COLOR CLR,0:GOTO 25
24 CH$=P$+RIGHT$(DATE$,4):COLOR CLR,0:GOTO 26
25 DEF SEG=0:POKE 1047,96:DEF SEG:GOSUB 106:ROW%=24:COL%=32:GOSUB 108:CH$=XP$
26 MY$=LEFT$(CH$,3)+", 19"+RIGHT$(CH$,2):RESTORE 27:FOR J=1 TO 12:FOR K=1 TO 2:READ LA$(J,K):NEXT:NEXT
27 DATA JAN,31,FEB,28,MAR,31,APR,30,MAY,31,JUN,30,JUL,31,AUG,31,SEP,30,OCT,31,NOV,30,DEC,31:GOSUB 117:GOSUB 124:GOSUB 129:GOSUB 135:GOSUB 189
28 GOSUB 104:GOSUB 139:GOSUB 142:IF FK%=59 GOTO 33
29 IF FK%=60 THEN 185
30 IF FK%=61 GOTO 270
31 IF FK%=68 GOTO 92
32 GOSUB 186:GOTO 28
33 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"ENTER DAY OF MONTH:";:ROW%=24:COL%=22:COLOR CLR,0:GOSUB 161:DT%=NUM%:DT$=STR$(NUM%):IF DT%<1 OR DT%>ND%THEN GOSUB 186:GOTO 33
34 IF DA%(DT%)<>0 THEN 40
35 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"NO MEMO IN FILE FOR "MO$" "DT$"   ENTER NEW MEMO OR PRESS <RET> TO QUIT";:COLOR CLR,0:COLOR CA,CB:LOCATE 1,38:PRINT"     ENTER NEW MEMO FOR "MO$" "DT$"      ";:COLOR CLR,0:GOSUB 146
36 IF L%=0 THEN GOSUB 135:GOTO 28
37 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"FILING MEMO";:COLOR CLR,0:FOR I=1 TO L%:LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,HB%+I:NEXT:GOSUB 188:DA%(DT%)=HB%+1:HB%=HB%+L%:GOSUB 135:GOTO 54
38 IF DA%(DT%)=0 GOTO 90
39 DT$=RIGHT$(STR$(DT%),2)
40 ERASE DB$:DIM DB$(20):COLOR CA,CB:LOCATE 1,38:PRINT"     MEMOS FOR "MO$" "DT$", "Y%"      ";:COLOR CLR,0:L%=0:FOR I=0 TO 19:GET#2,DA%(DT%)+I:IF TAG$<>CHR$(128)OR DAT$="KL"GOTO 43
41 IF VAL(DAT$)<>DT%THEN I=19:GOTO 43
42 DB$(I+1)=MD$:L%=L%+1:COLOR CLR,0:LOCATE I+2,39:PRINT DB$(I+1)
43 NEXT
44 GOSUB 140
45 GOSUB 142:IF FK%=59 GOTO 99
46 IF FK%=60 GOTO 54
47 IF FK%=61 GOTO 270
48 IF FK%=62 THEN GOSUB 102:GOTO 44
49 IF FK%=67 GOTO 28
50 GOSUB 186:GOTO 44
51 IF L%>19 THEN GOSUB 187:GOTO 44
52 KA=L%:GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER NEW MEMO LINE(S) OR PRESS <RET> TO QUIT";:COLOR CLR,0:GOSUB 147:FOR I=1 TO L%:LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,HB%+I:NEXT:GOSUB 160
53 GOSUB 188:DA%(DT%)=HB%+1:HB%=HB%+L%
54 GOSUB 141:GOSUB 142:IF FK%=59 THEN 88
55 IF FK%=60 THEN GOSUB 182:GOSUB 105:KA=L%:GOSUB 160:GOTO 35
56 IF FK%=61 GOTO 51
57 IF FK%=62 GOTO 63
58 IF FK%=63 GOTO 68
59 IF FK%=64 GOTO 75
60 IF FK%=65 GOTO 81
61 IF FK%=67 THEN 44
62 GOSUB 186:GOTO 54
63 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"SELECT LINE TO BE RETYPED:";:LOCATE 25,1:PRINT"<F9> QUIT/EDIT MENU";:COLOR 2,0
64 ROW%=24:COL%=28:COLOR CLR,0:GOSUB 161:IF NUM%=99 GOTO 54
65 IF NUM%=0 OR NUM%>L%THEN GOSUB 186:GOTO 63
66 LOCATE 1,38:COLOR CA,CB:PRINT"     ENTER NEW LINE."SPC(7)"MUST END HERE"CHR$(25);:COLOR CLR,0:LOCATE NUM%+1,39:PRINT SPC(40):QA%=1:HC%=L%:L%=NUM%-1:GOSUB 147:DB$(NUM%)=ME$:L%=HC%:RD%=DA%(DT%)
67 FOR I=1 TO L%:LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,RD%+I-1:NEXT:GOSUB 188:COLOR CA,CB:LOCATE 24,28:PRINT SPC(2):COLOR CLR,0:GOTO 64
68 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"SELECT LINE TO BE DELETED:";:LOCATE 25,1:PRINT"<F9> QUIT/EDIT MENU";:COLOR 2,0
69 KA=L%:ROW%=24:COL%=28:COLOR CLR,0:GOSUB 161:IF NUM%=99 GOTO 54
70 IF NUM%=0 OR NUM%>L%THEN GOSUB 186:GOTO 68
71 IF NUM%=L%THEN L%=L%-1:GOTO 73
72 L%=L%-1:FOR I=NUM%TO L%:DB$(I)=DB$(I+1):NEXT
73 GOSUB 105:FOR I=1 TO L%:COLOR CLR,0:LOCATE I+1,39:PRINT DB$(I):LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,HB%+I:NEXT:GOSUB 160:DA%(DT%)=HB%+1:HB%=HB%+L%
74 LOCATE 24,28:COLOR CA,CB:PRINT SPC(2):GOTO 69
75 IF L%+1>20 THEN GOSUB 187:GOTO 54
76 KA=L%:GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"SELECT LINE WHERE INSERT IS TO BE MADE:";:LOCATE 25,1:PRINT"<F9> QUIT/EDIT MENU";:COLOR CLR,0:ROW%=24:COL%=41:COLOR CLR,0:GOSUB 161:IF NUM%=99 THEN 54
77 IF NUM%=0 OR NUM%>L%THEN GOSUB 186:GOTO 75
78 L%=L%+1:FOR I=L%TO NUM%+1 STEP-1:DB$(I)=DB$(I-1):NEXT:GOSUB 105:COLOR CLR,0:FOR I=1 TO L%:LOCATE I+1,39:PRINT DB$(I):NEXT:LOCATE NUM%+1,39:PRINT SPC(40):LOCATE 1,38:COLOR CA,CB
79 PRINT"     ENTER NEW LINE."SPC(7)"MUST END HERE"CHR$(25);:COLOR CLR,0:HC%=L%:QA%=1:L%=NUM%-1:GOSUB 147:L%=HC%:DB$(NUM%)=ME$:FOR I=1 TO L%:LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,HB%+I:NEXT
80 GOSUB 188:GOSUB 160:DA%(DT%)=HB%+1:HB%=HB%+L%:LOCATE 24,41:COLOR CA,CB:PRINT SPC(2):GOTO 75
81 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"SELECT LINE TO BE MOVED:";:LOCATE 25,1:PRINT"<F9> QUIT/EDIT MENU";:COLOR CLR,0:ROW%=24:COL%=26:COLOR CLR,0:GOSUB 161:IF NUM%=99 GOTO 54
82 IF NUM%=0 OR NUM%>L%THEN GOSUB 186:GOTO 81
83 MF%=NUM%:HD$=DB$(MF%):COLOR 4,0:LOCATE 22,39:PRINT HD$SPC(79-POS(C));:COLOR CLR,0:FOR I=MF%TO L%-1:DB$(I)=DB$(I+1):NEXT:DB$(L%)=STRING$(40,32):FOR I=MF%TO L%:LOCATE I+1,39:PRINT DB$(I):NEXT
84 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER DESTINATION LINE NUMBER:";:COLOR CLR,0:ROW%=24:COL%=32:COLOR CLR,0:GOSUB 161:IF NUM%=0 OR NUM%>L%THEN GOSUB 186:GOTO 84
85 NA%=NUM%:IF NA%=L%THEN DB$(L%)=HD$:GOTO 87
86 FOR I=L%TO NA%+1 STEP-1:DB$(I)=DB$(I-1):NEXT:DB$(NA%)=HD$:FOR I=NA%TO L%:LOCATE I+1,39:PRINT SPC(40):NEXT
87 FOR I=NA%TO L%:LOCATE I+1,39:PRINT DB$(I):NEXT:LOCATE 22,39:PRINT SPC(40):RD%=DA%(DT%):FOR I=1 TO L%:LSET TAG$=CHR$(128):LSET DAT$=RIGHT$(DT$,2):LSET MD$=DB$(I):PUT#2,RD%+I-1:NEXT:GOTO 81
88 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"VERIFY:  DELETE MEMO?  (Y/N)";:COLOR CLR,0:GOSUB 177:GOSUB 182:IF V$="N"THEN GOSUB 140:GOTO 45
89 KA=L%:GOSUB 160:GOSUB 135:GOTO 90
90 DT%=DT%+1:IF DT%=<ND%GOTO 38
91 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"END OF MEMOS IN "MY$;:COLOR CLR,0:GOSUB 104:GOTO 28
92 LSET TAG$=CHR$(128):LSET DAT$=CHR$(27)+"Z":LSET MD$="":PUT#2,HB%+1:GOSUB 173:CLOSE:CLS:LOCATE 6,20:COLOR CA,CB:PRINT" ORGANIZING FILES BEFORE ENDING PROGRAM ":LOCATE 8,23:COLOR CLR,0:PRINT"(THIS CONSERVES SPACE ON THE DISK)
93 LOCATE 10,22:PRINT"HAVE YOU BACKED UP YOUR DISK LATELY?":GOSUB 501:GOTO 255
94 ON ERROR GOTO 97
95 SAVE"SPACETST":ON ERROR GOTO 0
96 KILL"SPACETST.BAS":GOTO 19
97 IF ERR<>61 THEN 445 ELSE RESUME 17
98 END
99 GOSUB 182:GOSUB 106:COLOR CA,CB:LOCATE 24,1:PRINT"MAKE SURE PRINTER IS READY THEN PRESS ANY KEY TO PRINT MEMO SCREEN";
100 IF INKEY$=""THEN 100
101 GOSUB 182:PB=0:PC%=VARPTR(PB):POKE PC%,205:POKE PC%+1,5:POKE PC%+2,203:CALL PC%:GOTO 44
102 FOR K=10 TO 23:LOCATE K,1:PRINT SPC(34):NEXT:RETURN
103 FOR K=2 TO 8:LOCATE K,2:PRINT SPC(33):NEXT:RETURN
104 FOR K=2 TO 23:LOCATE K,39:PRINT SPC(40):NEXT:LOCATE 1,38:COLOR CA,CB:PRINT SPC(41):COLOR CLR,0:RETURN
105 FOR K=2 TO 23:LOCATE K,39:PRINT SPC(40):NEXT:RETURN
106 DEF SEG=0:POKE 1050,PEEK(1052):DEF SEG:RETURN
107 FOR I=1 TO 4000:NEXT:RETURN
108 XP$="":GOSUB 106
109 LTR$=INKEY$:IF LTR$=""GOTO 109
110 IF LEN(LTR$)>1 GOTO 109
111 IF LEN(XP$)=0 AND LTR$=CHR$(8)GOTO 109
112 IF LTR$=CHR$(8)THEN XP$=LEFT$(XP$,LEN(XP$)-1):GOTO 115
113 IF LTR$=CHR$(13)THEN RETURN
114 XP$=XP$+LTR$:LOCATE ROW%,COL%+LEN(XP$)-1:COLOR CLR,0:PRINT LTR$;:IF LEN(XP$)>33 THEN 116 ELSE 109
115 LOCATE ROW%,COL%:PRINT XP$" ";:GOTO 109
116 COLOR CLR,0:RETURN
117 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"OPENING FILE FOR "MY$;:COLOR CLR,0:FOR I=1 TO 3:AA%=ASC(MID$(MY$,I,1)):IF AA%>96 THEN MID$(MY$,I,1)=CHR$(AA%-32)
118 NEXT:MO$=LEFT$(MY$,3):MG%=0:FOR I=1 TO 12:IF MO$=LA$(I,1)THEN MG%=I:ND%=VAL(LA$(I,2))
119 NEXT:IF MG%=0 THEN 122
120 Y$=RIGHT$(MY$,4):Y%=VAL(Y$):IF Y%<YA%OR Y%>YB%THEN 122
121 GOTO 123
122 GOSUB 186:GOTO 21
123 MY$=MO$+", "+Y$:FB$=MO$+Y$+"."+"CAL":NB=Y%*100+MG%+10:RETURN
124 ERASE DA%:DIM DA%(31):CLOSE#2:OPEN FB$ AS #2 LEN=43:FIELD #2,1 AS TAG$,2 AS DAT$,40 AS MD$:DA$="":FG%=0:FOR I=1 TO 4:GET#2,I:IF TAG$<>CHR$(128)THEN HB%=4:FG%=1:I=4:GOTO 127
125 IF I<4 THEN DA$=DA$+MD$:GOTO 127
126 DA$=DA$+LEFT$(MD$,4):HB$=MID$(MD$,5,4):HB%=VAL(HB$)
127 NEXT:IF FG%=1 THEN RETURN
128 FOR I=1 TO 31:DA%(I)=VAL(MID$(DA$,I*4-3,4)):NEXT:RETURN
129 FC%=0:IF Y%MOD 400=0 GOTO 132
130 IF Y%MOD 100=0 GOTO 133
131 IF Y%MOD 4<>0 GOTO 133
132 FC%=1:IF ND%=28 THEN ND%=29
133 YC=365*Y%+INT((Y%-1)/4)-INT(0.75*(INT((Y%-1)/100)+1)):MH=0:FOR I=1 TO MG%-1:MH=MH+VAL(LA$(I,2)):NEXT:DD=YC+MH+1:IF FC%=1 AND MG%>2 THEN DD=DD+1
134 DW%=DD+INT(-DD/7)*7+6:RETURN
135 LOCATE 1,1:COLOR CA,CB:PRINT SPC(13)MY$SPC(13):COLOR 4,0:LOCATE 2,2:COLOR 14,0:PRINT"SUN  MON  TUE  WED  THU  FRI  SAT";:COLOR 4,0:CS%=1:FOR R%=3 TO 9:FOR C%=2 TO 32 STEP 5:CD%=CS%-DW%:IF CD%<1 OR CD%>ND%GOTO 138
136 CD$=STR$(CD%):CD$=RIGHT$(CD$,LEN(CD$)-1):IF DA%(CD%)<>0 THEN COLOR 12,0
137 LOCATE R%,C%:PRINT CD$:COLOR 4,0
138 CS%=CS%+1:NEXT:NEXT:COLOR CLR,0:RETURN
139 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"MAIN MENU:"SPC(69);:LOCATE 25,1:PRINT"<F1> PICK DAY  <F2> PICK MONTH/YEAR  <F3> ADDRESS LIST        <F10> END PROGRAM";:COLOR CLR,0:RETURN
140 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"MEMO MENU:"SPC(55)"<F9> MAIN MENU";:LOCATE 25,1:PRINT"<F1> PRINT MEMO    <F2> EDIT MEMO    <F3> ADDRESS LIST   <F4> CLEAR ADDRESS BOX";:COLOR CLR,0:RETURN
141 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"EDIT MENU: <F1> DELETE MEMO  <F2> RETYPE MEMO                    <F9> MEMO MENU";:LOCATE 25,1:PRINT"<F3> ADD LINE <F4> RETYPE LINE <F5> DELETE LINE <F6> INSERT LINE <F7> MOVE LINE";:COLOR CLR,0:RETURN
142 GOSUB 106
143 FK$=INKEY$:IF FK$=""GOTO 143
144 IF LEN(FK$)=2 THEN FK%=ASC(RIGHT$(FK$,1)):RETURN
145 GOTO 143
146 ERASE DB$:DIM DB$(20):L%=0:QA%=0
147 GOSUB 106:DEF SEG=0:POKE 1047,32:DEF SEG
148 ME$="":L%=L%+1:IF L%>20 THEN GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"MEMO FULL";:BEEP:COLOR CLR,0:GOTO 159
149 LOCATE L%+1,39:PRINT STRING$(40,46):LOCATE L%+1,39,1
150 LTR$=INKEY$:IF LTR$=""GOTO 150
151 IF LEN(ME$)<>0 AND LTR$=CHR$(13)GOTO 157
152 IF LEN(ME$)=0 AND LTR$=CHR$(13)GOTO 159
153 IF LTR$=CHR$(8)AND LEN(ME$)<>0 THEN ME$=LEFT$(ME$,LEN(ME$)-1):PRINT CHR$(29)"."CHR$(29);:GOTO 150 ELSE IF LTR$=CHR$(8)GOTO 150
154 IF LEN(LTR$)=2 GOTO 150
155 IF LEN(ME$)=40 THEN BEEP:GOTO 150
156 ME$=ME$+LTR$:PRINT LTR$;:GOTO 150
157 IF QA%=1 THEN QA%=0:LOCATE,,0:RETURN
158 DB$(L%)=ME$:GOTO 148
159 L%=L%-1:LOCATE,,0:RETURN
160 RD%=DA%(DT%):FOR I=0 TO KA-1:LSET TAG$=CHR$(128):LSET DAT$="KL":LSET MD$="":PUT#2,RD%+I:NEXT:DA%(DT%)=0:RETURN
161 GOSUB 162:NUM%=VAL(XP$):RETURN
162 XP$="":GOSUB 106
163 LTR$=INKEY$:IF LTR$=""GOTO 163
164 IF LEN(LTR$)>1 AND ASC(RIGHT$(LTR$,1))=67 THEN XP$="99":RETURN
165 IF LEN(XP$)=0 AND LTR$=CHR$(8)GOTO 163
166 IF LTR$=CHR$(8)THEN XP$=LEFT$(XP$,LEN(XP$)-1):GOTO 170
167 IF LTR$=CHR$(13)THEN RETURN
168 IF ASC(LTR$)<48 OR ASC(LTR$)>57 THEN GOSUB 172:GOTO 163
169 XP$=XP$+LTR$:LOCATE ROW%,COL%+LEN(XP$)-1:COLOR CLR,0:PRINT LTR$;:IF LEN(XP$)>2 THEN 171 ELSE 163
170 LOCATE ROW%,COL%:COLOR CLR,0:PRINT XP$;:COLOR CA,CB:PRINT" ";:COLOR CLR,0:GOTO 163
171 COLOR CLR,0:RETURN
172 LOCATE 24,60:COLOR CA,CB:PRINT"INPUT ERROR";:BEEP:GOSUB 107:LOCATE 24,60:PRINT SPC(11);:COLOR CLR,0:RETURN
173 DG$="":FOR I=1 TO 10:DA$=STR$(DA%(I)+10000):DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT:LSET TAG$=CHR$(128):LSET DAT$="00":LSET MD$=DG$:PUT#2,1:DG$="":FOR I=11 TO 20:DA$=STR$(DA%(I)+10000)
174 DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT:LSET TAG$=CHR$(128):LSET DAT$="00":LSET MD$=DG$:PUT#2,2:DG$="":FOR I=21 TO 30:DA$=STR$(DA%(I)+10000):DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT
175 LSET TAG$=CHR$(128):LSET DAT$="00":LSET MD$=DG$:PUT#2,3:DG$=STR$(DA%(31)+10000):DG$=RIGHT$(DG$,4):HB$=STR$(HB%+10000):HB$=RIGHT$(HB$,4):DG$=DG$+HB$:LSET TAG$=CHR$(128):LSET DAT$="00
176 LSET MD$=DG$:PUT#2,4:RETURN
177 GOSUB 106
178 V$=INKEY$:IF V$=""GOTO 178
179 IF V$="Y"OR V$="y"THEN V$="Y":RETURN
180 IF V$="N"OR V$="n"THEN V$="N":RETURN
181 BEEP:GOTO 177
182 COLOR CA,CB:LOCATE 24,1:PRINT SPC(79);:LOCATE 25,1:PRINT SPC(79);:COLOR CLR,0:RETURN
183 FOR J=1 TO 23:LOCATE J,36:COLOR CA,CB:PRINT SPC(2):NEXT:J=1:FOR I=1 TO 20:N=N+1:J=J+1:LOCATE J,36:PRINT USING"##";N;:NEXT:LOCATE 1,1:PRINT"         PERSONAL DATEBOOK             (c) 1984 by LATERAL PROGRAMMING, INC.   ";
184 LOCATE 9,1:PRINT SPC(35):COLOR CLR,0:RETURN
185 LSET TAG$=CHR$(128):LSET DAT$=CHR$(27)+"Z":LSET MD$="":PUT#2,HB%+1:GOSUB 173:CLOSE:COLOR CA,CB:LOCATE 1,1:PRINT SPC(35):COLOR CLR,0:GOSUB 182:GOSUB 103:GOSUB 102:GOTO 21
186 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"INPUT ERROR  PLEASE CHOOSE AGAIN";:BEEP:COLOR CLR,0:GOSUB 107:RETURN
187 LOCATE 1,38:COLOR CA,CB:PRINT SPC(41):GOSUB 182:LOCATE 24,1:PRINT"MEMO FULL (LIMIT IS 20 LINES)";:COLOR CLR,0:BEEP:GOSUB 107:RETURN
188 LOCATE 1,38:COLOR CA,CB:PRINT"     MEMOS FOR "MO$" "DT$", "Y%"            ";:COLOR CLR,0:GOSUB 105:FOR I=1 TO L%:LOCATE I+1,39:PRINT DB$(I):NEXT:RETURN
189 IF LEFT$(MY$,3)="JAN"THEN M=1
190 IF LEFT$(MY$,3)="FEB"THEN M=2
191 IF LEFT$(MY$,3)="MAR"THEN M=3
192 IF LEFT$(MY$,3)="APR"THEN M=4
193 IF LEFT$(MY$,3)="MAY"THEN M=5
194 IF LEFT$(MY$,3)="JUN"THEN M=6
195 IF LEFT$(MY$,3)="JUL"THEN M=7
196 IF LEFT$(MY$,3)="AUG"THEN M=8
197 IF LEFT$(MY$,3)="SEP"THEN M=9
198 IF LEFT$(MY$,3)="OCT"THEN M=10
199 IF LEFT$(MY$,3)="NOV"THEN M=11
200 IF LEFT$(MY$,3)="DEC"THEN M=12
201 Y=1900+VAL(RIGHT$(MY$,2)):IF Y/4-INT(Y/4)=0 AND Y/100-INT(Y/100)<>0 THEN LY=1
202 D=1:M=1:GOSUB 250:H$(1)="JAN 1 : New Year's Day":H$(4)="FEB 2 : Groundhog Day":H$(5)="FEB12 : Lincoln's Birthday":M=2:ZW=2:D=1
203 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 203
204 D=D+14:H$(7)="FEB"+RIGHT$(STR$(D),2)+" : Washington's Birthday":H$(6)="FEB14 : Valentine's Day":GOSUB 225:D=D-46:IF M=4 THEN D=D+31:M=3:GOTO 207
205 IF LY=1 AND M=3 THEN D=D+29:M=2:GOTO 207
206 IF M=3 THEN D=D+28:M=2
207 IF LY=1 AND D<1 THEN D=D+29:M=3:GOTO 209
208 IF D<1 THEN D=D+28:M=2
209 GOSUB 238:H$(8)=M$+RIGHT$(STR$(D),2)+" : Ash Wednesday":H$(9)="MAR17 : Saint Patrick's Day":GOSUB 225:MX=M:DF=D-2:IF DF<1 THEN M=M-1:DF=DF-31
210 GOSUB 238:H$(10)=M$+RIGHT$(STR$(DF),2)+" : Good Friday":M=MX:H$(11)=M$+RIGHT$(STR$(D),2)+" : Easter Sunday":M=5:ZW=1:D=1
211 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 211
212 D=D+7:H$(12)="MAY"+RIGHT$(STR$(D),2)+" : Mother's Day":D=1:M=5:ZW=2
213 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 213
214 D=D+28:IF D>31 THEN D=D-7
215 H$(13)="MAY"+RIGHT$(STR$(D),2)+" : Memorial Day":H$(15)="JUN14 : Flag Day":M=6:ZW=1:D=1
216 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 216
217 D=D+14:H$(16)="JUN"+RIGHT$(STR$(D),2)+" : Father's Day":H$(17)="JUL 4 : Independence Day":M=9:ZW=2:D=1
218 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 218
219 H$(18)="SEP"+RIGHT$(STR$(D),2)+" : Labor Day":M=10:ZW=2:D=1
220 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 220
221 D=D+7:H$(19)="OCT"+RIGHT$(STR$(D),2)+" : Columbus Day":H$(20)="OCT31 : Halloween":D=D-9:IF D<2 THEN D=D+7
222 H$(21)="NOV"+RIGHT$(STR$(D),2)+" : Election Day":H$(22)="NOV11 : Veterans Day":M=11:ZW=5:D=1
223 GOSUB 251:IF Z<>ZW THEN D=D+1:GOTO 223
224 D=D+21:H$(23)="NOV"+RIGHT$(STR$(D),2)+" : Thanksgiving Day":H$(24)="DEC25 : Christmas Day":H$(25)="DEC26 : Boxing Day":H$(26)="AUGThere are no holidays in "+MY$:GOTO 252
225 N=Y-1900:A=N/19:A=19*(A-INT(A)):B=INT((7*A+1)/19):M=0:M=(11*A+4.00001-B)/29:X=M-INT(M):IF X=1 THEN 228
226 IF X<>1 THEN M=29*X
227 GOTO 229
228 M=0
229 Q=INT(N/4):W=(N+Q+31-M)/7:W=7*(W-INT(W)):W=INT(W):DE=INT(25-M-W):IF DE>0 THEN M=4
230 IF DE<0 THEN M=3
231 IF DE=0 THEN M=3:D=31
232 IF DE<-9 THEN DE=DE+9:GOTO 232
233 IF DE<0 THEN D=31-ABS(DE)
234 IF DE>0 THEN D=DE
235 IF Y=1974 OR Y=1984 THEN D=D+7
236 IF Y=1994 THEN D=D+7-31:M=4
237 RETURN
238 IF M=1 THEN M$="JAN":RETURN
239 IF M=2 THEN M$="FEB":RETURN
240 IF M=3 THEN M$="MAR":RETURN
241 IF M=4 THEN M$="APR":RETURN
242 IF M=5 THEN M$="MAY":RETURN
243 IF M=6 THEN M$="JUN":RETURN
244 IF M=7 THEN M$="JUL":RETURN
245 IF M=8 THEN M$="AUG":RETURN
246 IF M=9 THEN M$="SEP":RETURN
247 IF M=10 THEN M$="OCT":RETURN
248 IF M=11 THEN M$="NOV":RETURN
249 IF M=12 THEN M$="DEC":RETURN
250 IF HY=1 THEN 251
251 Q=M:E=D:K=INT(0.6+(1/Q)):L=Y-K:O=Q+12*K:P=L/100:Z1=INT(P/4):Z2=INT(P):Z3=INT((5*L)/4):Z4=INT(13*(O+1)/5):Z=Z4+Z3-Z2+Z1+E-1:Z=Z-(7*INT(Z/7))+1:RETURN
252 LOCATE 11,1:COLOR 4,0:PRINT"HOLIDAYS FOR "MY$" ARE:";:I=13:FOR X=1 TO 30:IF LEFT$(H$(X),3)=LEFT$((MY$),3)THEN LOCATE I,1:PRINT MID$(H$(X),4);
253 IF LEFT$(H$(X),3)<>LEFT$((MY$),3)THEN I=I ELSE I=I+1
254 NEXT:RETURN
255 IF FD$="KILLED"GOTO 269
256 DEFINT I,J:OPEN FB$ AS #2 LEN=43:FIELD #2,1 AS TAG$,2 AS DAT$,40 AS MD$:J=5:FOR DT%=1 TO ND%:TA%(DT%)=0:IF DA%(DT%)=0 GOTO 265
257 DT$=RIGHT$(STR$(DT%),2):TA%(DT%)=J:FOR I=0 TO 19:GET#2,DA%(DT%)+I:IF TAG$<>CHR$(128)GOTO 264
258 IF DAT$="KL"GOTO 264
259 IF VAL(DAT$)<1 GOTO 264
260 IF VAL(DAT$)>ND%GOTO 264
261 IF MD$=""GOTO 264
262 IF VAL(DAT$)<>DT%THEN I=19:GOTO 264
263 MC$(J)=TAG$+DAT$+MD$:J=J+1
264 NEXT
265 NEXT:HB%=J-1:CLOSE:OPEN "SAVIT" AS #2 LEN=43:FIELD #2, 43 AS NC$:FOR I=5 TO HB%:LSET NC$=MC$(I):PUT#2,I:NEXT:DG$="":FOR I=1 TO 10:DA$=STR$(TA%(I)+10000):DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT
266 LSET NC$=CHR$(128)+"00"+DG$:PUT#2,1:DG$="":FOR I=11 TO 20:DA$=STR$(TA%(I)+10000):DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT:LSET NC$=CHR$(128)+"00"+DG$:PUT#2,2:DG$="
267 FOR I=21 TO 30:DA$=STR$(TA%(I)+10000):DA$=RIGHT$(DA$,4):DG$=DG$+DA$:NEXT:LSET NC$=CHR$(128)+"00"+DG$:PUT#2,3:DG$=STR$(TA%(31)+10000):DG$=RIGHT$(DG$,4):HB$=STR$(HB%+10000)
268 HB$=RIGHT$(HB$,4):DG$=DG$+HB$:LSET NC$=CHR$(128)+"00"+DG$:PUT#2,4:LSET NC$=CHR$(128)+CHR$(27)+"Z"+STRING$(40,0):PUT#2,HB%+1:CLOSE:KILL FB$:NAME "SAVIT" AS FB$
269 GOSUB 509:SYSTEM:END
270 V1$="ADDRESS.DAT":V2$="ADDRESS.ISI":RL%=255:KL=14:T=19:HE$=CHR$(11):SA%=INT(255/(KL+6)):BA$=STRING$(79,32):RC=28:DC=31:RB$=CHR$(46)+CHR$(29):SB$=CHR$(219)+CHR$(29):BS$=CHR$(29)+CHR$(46)+CHR$(29):FF$=CHR$(140)
271 DEF FNCRT$(E1,E2)=HE$+STRING$(E2,DC)+STRING$(E1,RC):D$=CHR$(94)+STRING$(KL,32):A%=INT(255/(KL+6)):CLOSE 1:OPEN "R",1,V1$,RL%:CLOSE 4:OPEN "R",4,V2$,242:FIELD 1,RL% AS FR$:FIELD 4,242 AS KS$:GOSUB 102:FL(1)=14:CX(1)=20:CY(1)=10:TY$(1)="A
272 FL(2)=14:CX(2)=20:CY(2)=11:TY$(2)="A":FL(3)=14:CX(3)=20:CY(3)=12:TY$(3)="A":FL(4)=26:CX(4)=8:CY(4)=13:TY$(4)="A":FL(5)=26:CX(5)=8:CY(5)=14:TY$(5)="A":FL(6)=26:CX(6)=8:CY(6)=15:TY$(6)="A":FL(7)=2:CX(7)=8:CY(7)=16:TY$(7)="A
273 FL(8)=5:CX(8)=29:CY(8)=16:TY$(8)="A":FL(9)=8:CX(9)=11:CY(9)=17:TY$(9)="A":FL(10)=3:CX(10)=22:CY(10)=17:TY$(10)="A":FL(11)=3:CX(11)=26:CY(11)=17:TY$(11)="A":FL(12)=4:CX(12)=30:CY(12)=17:TY$(12)="A":FL(13)=8:CX(13)=11:CY(13)=18:TY$(13)="A
274 FL(14)=3:CX(14)=22:CY(14)=18:TY$(14)="A":FL(15)=3:CX(15)=26:CY(15)=18:TY$(15)="A":FL(16)=4:CX(16)=30:CY(16)=18:TY$(16)="A":FL(17)=24:CX(17)=10:CY(17)=19:TY$(17)="A":FL(18)=34:CX(18)=0:CY(18)=20:TY$(18)="A":FL(19)=34:CX(19)=0:CY(19)=21:TY$(19)="A
275 COLOR 4,0:ON ERROR GOTO 444
276 LOCATE 11,1:PRINT"LAST NAME:          ..............":LOCATE 12,1:PRINT"FIRST NAME:         ..............":LOCATE 13,1:PRINT"MIDDLE NAME:        ..............":LOCATE 14,1:PRINT"COMPANY:..........................
277 LOCATE 15,1:PRINT"STREET: ..........................":LOCATE 16,1:PRINT"CITY:   ..........................":LOCATE 17,1:PRINT"STATE:  ..         ZIP CODE: .....":LOCATE 18,1:PRINT"PHONE #1: (........)  ...-...-....
278 LOCATE 19,1:PRINT"PHONE #2: (........)  ...-...-....":LOCATE 20,1:PRINT"COMMENTS: ........................":LOCATE 21,1:PRINT"..................................":LOCATE 22,1:PRINT"..................................":COLOR CLR,0:UA$="
279 FOR X=1 TO T:F$(X)="":F#(X)=0:NEXT
280 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ADDRESS MENU:                                    <F8> MEMO MENU  <F9> MAIN MENU";
281 LOCATE 25,1:COLOR CA,CB:PRINT"<F1> ADD RECORD  <F2> GET RECORD  <F3> SEARCH                                  ";:COLOR CLR,0:TY$="A":FL=1:GOSUB 142:IF FK%=59 THEN 287
282 IF FK%=60 THEN UA$="YES":GOTO 382
283 IF FK%=67 THEN GOSUB 102:CLOSE 1:CLOSE 4:GOTO 28
284 IF FK%=61 THEN 370
285 IF FK%=66 THEN CLOSE 1:CLOSE 4:GOTO 44
286 GOSUB 186:GOTO 280
287 GOSUB 182:COLOR CA,CB:LOCATE 24,1:PRINT"ENTER THE '<' KEY AT BEGINNING OF FIELD TO BACK UP TO PREVIOUS FIELD";:COLOR CLR,0:LOCATE 12,1
288 PRINT FNCRT$(20,10);"";:FL=14:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 291
289 IF ASC(T$)=60 THEN 275
290 F$(1)=T$
291 F$(1)=F$(1)+STRING$(14-LEN(F$(1)),32):PRINT FNCRT$(20,10);F$(1);:K$=F$(1)
292 PRINT FNCRT$(20,11);"";:FL=14:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 295
293 IF ASC(T$)=60 THEN 288
294 F$(2)=T$
295 F$(2)=F$(2)+STRING$(14-LEN(F$(2)),32):PRINT FNCRT$(20,11);F$(2);
296 PRINT FNCRT$(20,12);"";:FL=14:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 299
297 IF ASC(T$)=60 THEN 292
298 F$(3)=T$
299 F$(3)=F$(3)+STRING$(14-LEN(F$(3)),32):PRINT FNCRT$(20,12);F$(3);
300 PRINT FNCRT$(8,13);"";:FL=26:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 303
301 IF ASC(T$)=60 THEN 296
302 F$(4)=T$
303 F$(4)=F$(4)+STRING$(26-LEN(F$(4)),32):PRINT FNCRT$(8,13);F$(4);
304 PRINT FNCRT$(8,14);"";:FL=26:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 307
305 IF ASC(T$)=60 THEN 300
306 F$(5)=T$
307 F$(5)=F$(5)+STRING$(26-LEN(F$(5)),32):PRINT FNCRT$(8,14);F$(5);
308 PRINT FNCRT$(8,15);"";:FL=26:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 311
309 IF ASC(T$)=60 THEN 304
310 F$(6)=T$
311 F$(6)=F$(6)+STRING$(26-LEN(F$(6)),32):PRINT FNCRT$(8,15);F$(6);
312 PRINT FNCRT$(8,16);"";:FL=2:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 315
313 IF ASC(T$)=60 THEN 308
314 F$(7)=T$
315 F$(7)=F$(7)+STRING$(2-LEN(F$(7)),32):PRINT FNCRT$(8,16);F$(7);
316 PRINT FNCRT$(29,16);"";:FL=5:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 319
317 IF ASC(T$)=60 THEN 312
318 F$(8)=T$
319 F$(8)=F$(8)+STRING$(5-LEN(F$(8)),32):PRINT FNCRT$(29,16);F$(8);
320 PRINT FNCRT$(11,17);"";:FL=8:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 323
321 IF ASC(T$)=60 THEN 316
322 F$(9)=T$
323 F$(9)=F$(9)+STRING$(8-LEN(F$(9)),32):PRINT FNCRT$(11,17);F$(9);:R$="
324 PRINT FNCRT$(22,17);"";:FL=3:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 327
325 IF ASC(T$)=60 THEN 320
326 F$(10)=T$
327 F$(10)=F$(10)+STRING$(3-LEN(F$(10)),32):PRINT FNCRT$(22,17);F$(10);
328 PRINT FNCRT$(26,17);"";:FL=3:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 331
329 IF ASC(T$)=60 THEN 324
330 F$(11)=T$
331 F$(11)=F$(11)+STRING$(3-LEN(F$(11)),32):PRINT FNCRT$(26,17);F$(11);
332 PRINT FNCRT$(30,17);"";:FL=4:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 335
333 IF ASC(T$)=60 THEN 328
334 F$(12)=T$
335 F$(12)=F$(12)+STRING$(4-LEN(F$(12)),32):PRINT FNCRT$(30,17);F$(12);
336 PRINT FNCRT$(11,18);"";:FL=8:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 339
337 IF ASC(T$)=60 THEN 332
338 F$(13)=T$
339 F$(13)=F$(13)+STRING$(8-LEN(F$(13)),32):PRINT FNCRT$(11,18);F$(13);
340 PRINT FNCRT$(22,18);"";:FL=3:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 343
341 IF ASC(T$)=60 THEN 336
342 F$(14)=T$
343 F$(14)=F$(14)+STRING$(3-LEN(F$(14)),32):PRINT FNCRT$(22,18);F$(14);
344 PRINT FNCRT$(26,18);"";:FL=3:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 347
345 IF ASC(T$)=60 THEN 340
346 F$(15)=T$
347 F$(15)=F$(15)+STRING$(3-LEN(F$(15)),32):PRINT FNCRT$(26,18);F$(15);
348 PRINT FNCRT$(30,18);"";:FL=4:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 351
349 IF ASC(T$)=60 THEN 344
350 F$(16)=T$
351 F$(16)=F$(16)+STRING$(4-LEN(F$(16)),32):PRINT FNCRT$(30,18);F$(16);
352 PRINT FNCRT$(10,19);"";:FL=24:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 355
353 IF ASC(T$)=60 THEN 348
354 F$(17)=T$
355 F$(17)=F$(17)+STRING$(24-LEN(F$(17)),32):PRINT FNCRT$(10,19);F$(17);
356 PRINT FNCRT$(0,20);"";:FL=34:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 359
357 IF ASC(T$)=60 THEN 352
358 F$(18)=T$
359 F$(18)=F$(18)+STRING$(34-LEN(F$(18)),32):PRINT FNCRT$(0,20);F$(18);:PRINT FNCRT$(0,21);"";:FL=34:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 362
360 IF ASC(T$)=60 THEN 356
361 F$(19)=T$
362 F$(19)=F$(19)+STRING$(34-LEN(F$(19)),32):PRINT FNCRT$(0,21);F$(19);:R$=R$+F$(1):R$=R$+F$(2):R$=R$+F$(3):R$=R$+F$(4):R$=R$+F$(5):R$=R$+F$(6):R$=R$+F$(7):R$=R$+F$(8):R$=R$+F$(9):R$=R$+F$(10):R$=R$+F$(11):R$=R$+F$(12):R$=R$+F$(13):R$=R$+F$(14)
363 R$=R$+F$(15):R$=R$+F$(16):R$=R$+F$(17):R$=R$+F$(18):R$=R$+F$(19):IF UA$="YES"THEN 369
364 X=0:IF INT(LOF(4)/240)=0 THEN 367
365 X=X+1:GET 4,X:IF INSTR(KS$,D$)<>0 THEN 368
366 IF INT(LOF(4)/240)=X THEN 367 ELSE 365
367 X=X+1:KR$="":FOR Y=1 TO A%:KR$=KR$+CHR$(94)+STRING$(KL,32):G$=STR$(INT(LOF(4)/240)*A%+Y):KR$=KR$+STRING$(5-LEN(G$),32)+G$:NEXT:LSET KS$=KR$:PUT 4,X:LSET FR$=STRING$(RL%,0):FOR Y=1 TO A%:PUT 1,(INT(LOF(4)/240)-1)*A%+Y:NEXT
368 KR$=KS$:P=INSTR(KR$,D$):KB=X
369 K$=CHR$(94)+K$:KR$=MID$(KR$,1,P-1)+K$+MID$(KR$,P+LEN(K$),LEN(KR$)):LR%=VAL(MID$(KR$,P+LEN(K$),5)):LSET FR$=R$:PUT 1,LR%:LSET KS$=KR$:PUT 4,KB:GOTO 275
370 X=0:UA$="S":GOSUB 182:LOCATE 25,1:COLOR CA,CB:LOCATE 24,1:PRINT"SEARCH FOR ? - ";:COLOR CLR,0:FL=30:TY$="A":GOSUB 404:Q$=T$:GOSUB 182:LOCATE 25,1:COLOR CA,CB:LOCATE 24,1:PRINT"PRESS ANY KEY TO STOP SEARCH ";:COLOR CLR,0:FL=1:TY$="A
371 FOR X=1 TO INT(LOF(1)/RL%):GET 1,X:IF INSTR(FR$,Q$)<>0 AND FR$<>STRING$(RL%,0)THEN 374
372 IF INKEY$<>""THEN 275
373 NEXT:GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"END OF FILE";:COLOR CLR,0:BEEP:GOSUB 107:GOTO 275
374 GOSUB 387
375 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"SEARCH FOR RECORD:            <F7> ADDRESS MENU  <F8> MEMO MENU  <F9> MAIN MENU";:LOCATE 25,1:PRINT"             <F2> NEXT               <F4> PRINT ADDRESS                        ";:COLOR 2,0
376 TY$="A":GOSUB 142:IF FK%=60 THEN 373
377 IF FK%=66 THEN CLOSE 1:CLOSE 4:GOTO 44
378 IF FK%=67 THEN GOSUB 102:CLOSE 1:CLOSE 4:GOTO 28
379 IF FK%=65 THEN 275
380 IF FK%=62 THEN GOSUB 414:GOTO 375
381 GOSUB 186:GOTO 375
382 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER LAST NAME";:COLOR CLR,0:FL=14:LOCATE 11,21:PRINT STRING$(14,46);:LOCATE 11,21:TY$="A":GOSUB 404:IF LEN(T$)=0 THEN 275
383 K$=T$:K$=CHR$(94)+K$:P=0:KB=1
384 FOR X=KB TO INT(LOF(4)/240):GET 4,X:IF INSTR(P+1,KS$,K$)=0 THEN P=0:NEXT ELSE 386
385 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"END OF FILE";:COLOR CLR,0:BEEP:GOSUB 107:GOTO 275
386 KR$=KS$:KB=X:P=INSTR(P+1,KR$,K$):LR%=VAL(MID$(KR$,P+15,5)):GET 1,LR%
387 F$(1)=MID$(FR$,1,14):F$(2)=MID$(FR$,15,14):F$(3)=MID$(FR$,29,14):F$(4)=MID$(FR$,43,26):F$(5)=MID$(FR$,69,26):F$(6)=MID$(FR$,95,26):F$(7)=MID$(FR$,121,2):F$(8)=MID$(FR$,123,5):F$(9)=MID$(FR$,128,8):F$(10)=MID$(FR$,136,3):F$(11)=MID$(FR$,139,3)
388 F$(12)=MID$(FR$,142,4):F$(13)=MID$(FR$,146,8):F$(14)=MID$(FR$,154,3):F$(15)=MID$(FR$,157,3):F$(16)=MID$(FR$,160,4):F$(17)=MID$(FR$,164,24):F$(18)=MID$(FR$,188,34):F$(19)=MID$(FR$,222,34):LOCATE 11,21:PRINT F$(1);:LOCATE 12,21:PRINT F$(2);
389 LOCATE 13,21:PRINT F$(3);:LOCATE 14,9:PRINT F$(4);:LOCATE 15,9:PRINT F$(5);:LOCATE 16,9:PRINT F$(6);:LOCATE 17,9:PRINT F$(7);:LOCATE 17,30:PRINT F$(8);:LOCATE 18,12:PRINT F$(9);:LOCATE 18,23:PRINT F$(10);:LOCATE 18,27:PRINT F$(11);
390 LOCATE 18,31:PRINT F$(12);:LOCATE 19,12:PRINT F$(13);:LOCATE 19,23:PRINT F$(14);:LOCATE 19,27:PRINT F$(15);:LOCATE 19,31:PRINT F$(16);:LOCATE 20,11:PRINT F$(17);:LOCATE 21,1:PRINT F$(18);:LOCATE 22,1:PRINT F$(19);:IF UA$="S"THEN RETURN
391 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"GET A RECORD                  <F7> ADDRESS MENU  <F8> MEMO MENU  <F9> MAIN MENU";:LOCATE 25,1:PRINT"<F1> CHANGE  <F2> NEXT  <F3> DELETE  <F4> PRINT ADDRESS                        ";:COLOR CLR,0:TY$="A
392 GOSUB 142:IF FK%=59 THEN 287
393 IF FK%=66 THEN CLOSE 1:CLOSE 4:GOTO 44
394 IF FK%=67 THEN GOSUB 102:CLOSE 1:CLOSE 4:GOTO 28
395 IF FK%=60 THEN RE$="G":GOTO 384
396 IF FK%=61 THEN 400
397 IF FK%=65 THEN 275
398 IF FK%=62 THEN GOSUB 414:GOTO 391
399 GOSUB 186:GOTO 391
400 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ARE YOU SURE YOU WANT TO DELETE (Y/N) ";:COLOR 2,0
401 GOSUB 177:IF V$="N"THEN GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"NOT DELETED";:COLOR CLR,0:GOSUB 107:GOTO 275
402 IF V$<>"Y"THEN 401
403 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"DELETED";:COLOR CLR,0:K$=MID$(D$,2,LEN(D$)):R$=STRING$(RL%,0):GOTO 369
404 COLOR CLR,0:LOCATE,,1:T$="":PX=POS(0):PY=CSRLIN
405 A$=INKEY$:IF A$=""THEN 405
406 IF LEN(T$)<FL THEN PRINT RB$;
407 IF ASC(A$)=8 AND LEN(T$)>0 THEN PRINT BS$;:T$=LEFT$(T$,LEN(T$)-1):GOTO 405
408 IF ASC(A$)=13 THEN 413
409 IF ASC(A$)<32 OR ASC(A$)>127 THEN 405
410 T$=T$+A$:IF LEN(T$)=1 THEN LOCATE PY,PX:PRINT STRING$(FL,".");:LOCATE PY,PX
411 IF LEN(T$)>FL THEN T$=MID$(T$,1,LEN(T$)-1):BEEP:GOTO 405
412 PRINT A$;:GOTO 405
413 COLOR CLR,0:LOCATE,,0:RETURN
414 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER OFFSET IN SPACES FROM LEFT MARGIN (0-50):";:COLOR CLR,0:ROW%=24:COL%=50:COLOR CLR,0:GOSUB 161:IF NUM%>50 THEN GOSUB 186:GOTO 414
415 OA%=NUM%
416 GOSUB 182:LOCATE 24,1:COLOR CA,CB:PRINT"ENTER NUMBER OF BLANK LINES AFTER ADDRESS (1-70):";:COLOR CLR,0:ROW%=24:COL%=52:COLOR CLR,0:GOSUB 161:IF NUM%<1 OR NUM%>70 THEN GOSUB 186:GOTO 416
417 SC%=NUM%:LOCATE 24,1:COLOR CA,CB:PRINT"MAKE SURE PRINTER IS READY THEN PRESS ANY KEY TO PRINT ADDRESS                 ";:COLOR CLR,0:GOSUB 106
418 IF INKEY$=""THEN 418
419 P$(1)=MID$(FR$,15,14)
420 IF RIGHT$(P$(1),1)=" "THEN P$(1)=LEFT$(P$(1),LEN(P$(1))-1):GOTO 420
421 P$(2)=MID$(FR$,29,14)
422 IF RIGHT$(P$(2),1)=" "THEN P$(2)=LEFT$(P$(2),LEN(P$(2))-1):GOTO 422
423 P$(3)=MID$(FR$,1,14)
424 IF RIGHT$(P$(3),1)=" "THEN P$(3)=LEFT$(P$(3),LEN(P$(3))-1):GOTO 424
425 P$(4)=MID$(FR$,43,26):P$(5)=MID$(FR$,69,26):P$(6)=MID$(FR$,95,26)
426 IF RIGHT$(P$(6),1)=" "THEN P$(6)=LEFT$(P$(6),LEN(P$(6))-1):GOTO 426
427 P$(7)=MID$(FR$,121,2):P$(8)=MID$(FR$,123,5):ON ERROR GOTO 429
428 LPRINT TAB(OA%);P$(1)+" "+P$(2)+" "+P$(3):LPRINT TAB(OA%);P$(4):LPRINT TAB(OA%);P$(5):LPRINT TAB(OA%);P$(6)+", "+P$(7)+"  "+P$(8):FOR I=1 TO SC%:LPRINT:NEXT:ON ERROR GOTO 444
429 RETURN
430 DEF SEG=&HB000:MA%=0:MI%=PEEK(0):POKE 0,0:MJ%=PEEK(0):POKE 0,255:IF MJ%=0 AND PEEK(0)=255 THEN MA%=2
431 POKE 0,MI%:DEF SEG=&HB800:MI%=PEEK(0):POKE 0,0:MJ%=PEEK(0):POKE 0,255:IF MJ%=0 AND PEEK(0)=255 THEN MA%=MA%+1
432 POKE 0,MI%:DEF SEG:RETURN
433 CLS:LOCATE 10,14:COLOR 4,0:PRINT"YOU HAVE BOTH COLOR AND MONOCHROME ADAPTERS INSTALLED":LOCATE 12,14:PRINT"DO YOU WANT THE COLOR (C) OR MONOCHROME (M) DISPLAY?
434 LOCATE 14,16:COLOR 12,0:PRINT"CAUTION:  If you switch to a nonexistant monitor":LOCATE 15,19:PRINT"you will have to reboot to regain display!";:COLOR CLR,0:GOSUB 106
435 RS$=INKEY$:IF RS$=""GOTO 435
436 IF RS$="C"OR RS$="c"THEN SD%=0:GOSUB 439:CA=4:CB=14:GOTO 15
437 IF RS$="M"OR RS$="m"THEN SD%=1:GOSUB 439:CA=0:CB=7:GOTO 15
438 BEEP:GOTO 435
439 IF SD%<>0 AND SD%<>1 THEN RETURN
440 IF SD%=0 THEN 442
441 KEY OFF:DEF SEG=0:SE%=PEEK(&H410):POKE &H410,SE%OR &H30:SCREEN 0,0,0:WIDTH 40:WIDTH 80:LOCATE,,1,12,13:DEF SEG:RETURN
442 DEF SEG=0:SE%=PEEK(&H410):POKE &H410,(SE%AND &HCF)OR &H20:SCREEN 0,0,0:WIDTH 40:WIDTH 80:LOCATE,,1,6,7:DEF SEG:RETURN
443 DEF SEG=&H0:POKE &H6C,&H53:POKE &H6D,&HFF:POKE &H6E,&H0:POKE &H6F,&HF0:DEF SEG:RETURN
444 REM
445 BEEP:BEEP:BEEP:BEEP:IF ERR=71 THEN CLS:COLOR CA,CB:LOCATE 10,29:PRINT" DISK NOT READY ERROR ";:COLOR CLR,0:LOCATE 12,17:PRINT"PERSONAL DATEBOOK MUST REMAIN IN DEFAULT DRIVE";:LOCATE 14,25:PRINT"INSERT DISK THEN RERUN PROGRAM";:GOTO 450
446 IF ERR=57 THEN CLS:COLOR CA,CB:LOCATE 10,23:PRINT" DEVICE I/O (INPUT/OUTPUT)  ERROR ";:COLOR CLR,0:LOCATE 12,8:PRINT" MIGHT BE BAD DISK:  TRY RUNNING PROGRAM AGAIN WITH BACKUP DISK ";:GOTO 450
447 IF ERR=61 THEN CLS:COLOR CA,CB:LOCATE 10,23:PRINT" DISK FULL ERROR:  CANNOT RECOVER ";:COLOR CLR,0:LOCATE 12,18:PRINT" DELETE UNNECESSARY FILES AND RERUN PROGRAM ";:GOTO 450
448 IF ERR=70 THEN CLOSE:CLS:COLOR CA,CB:LOCATE 10,25:PRINT" YOUR DISK IS WRITE PROTECTED ";:COLOR CLR,0:LOCATE 12,18:PRINT" REMOVE WRITE PROTECT TAB AND RERUN PROGRAM ";:GOTO 450
449 CLS:COLOR CA,CB:LOCATE 10,29:PRINT" UNRECOVERABLE  ERROR ";:COLOR CLR,0:LOCATE 12,9:PRINT" ERROR IS"ERR"/"ERL" CONTACT LATERAL PROGRAMMING FOR ADVICE ";
450 LOCATE 18,26:PRINT"PRESS ANY KEY TO END PROGRAM":GOSUB 106
451 IF INKEY$=""THEN 451
452 SYSTEM:END
500 'FREEWARE MESSAGE
501 LOCATE 13,1:COLOR 7,0:PRINT "PERSONAL DATEBOOK is a FREEWARE distribution product. You are urged to copy this"
502 LOCATE 14,1:PRINT "disk and distribute it freely. If desired, you may register your copy by sending"
503 LOCATE 15,1:PRINT "$12.95 to LATERAL PROGRAMMING, INC. at Box 337, Altamonte Springs, FL 32715."
504 LOCATE 17,1:PRINT "Registered owners will receive a printed copy of the documentation and  news  of"
505 LOCATE 18,1:PRINT "updates and revisions. Anyone sending a blank disk with their registration  will"
506 LOCATE 19,1:PRINT "also receive the latest copy of PERSONAL DATEBOOK."
507 LOCATE 21,1:PRINT "Registering  your  copy will enable us to continue publishing high quality soft-"
508 LOCATE 22,1:PRINT "ware under the FREEWARE concept. Your cooperation is sincerely appreciated!":RETURN
509 LOCATE 24,26:COLOR 11,0:PRINT "PRESS ANY KEY TO END PROGRAM";
510 RS$=INKEY$:IF RS$="" THEN GOTO 510
511 RETURN
```
{% endraw %}

## SHOWMEMO.BAS

{% raw %}
```bas
10  '   ------------------------------------------------------------
20  '   |                       SHOWMEMO                           |
30  '   |                                                          |
40  '   |           Copyright 1983   Chester Gabriel               |
50  '   ------------------------------------------------------------
60 DIM MDAY(13)
70 DIM FLAG$(128)
80 DIM DASH(3)
90 H = 0 : M = 0 : MAXFILES = 128
100 OPEN "R", 1, "MEMOFILE"
110 FIELD 1, 128 AS F$
120 GET 1,1
130 FOR I = 1 TO 128
140    FLAG$(I) = MID$(F$,I,1)        ' read in all "full/empty" flags
150 NEXT
160 D$ = DATE$ : GOSUB 760 : TODAY = SEQDATE     ' convert to sequential date
170 FIELD 1, 79 AS MEMO$, 4 AS FIRSTDATE$, 4 AS LASTDATE$, 10 AS RAWDATE$, 1 AS      FREQ$, 2 AS WINDOWW$, 3 AS INTERVAL$
180 FOR R = 2 TO MAXFILES
190    IF FLAG$(R) <> "F" GOTO 250         ' skip empty records
200    IF H=0 THEN H = H + 1 : PRINT TAB(20);"HELLO, MR. GABRIEL.  YOUR MESSAGES ARE:"
210    GET 1,R
220    IF FREQ$ = "A" THEN PRINT : PRINT  MEMO$ : M = M + 1 : GOTO 250
230    IF TODAY > CVI(LASTDATE$) THEN GOSUB 360 : GOTO 230  ' increment date
240    IF CVI(FIRSTDATE$) <= TODAY AND TODAY <= CVI(LASTDATE$) THEN PRINT :             PRINT MEMO$ : M = M+1
250 NEXT
260 CLOSE
270 PRINT: PRINT TAB(29);
280 IF M = 0 THEN PRINT " NO MESSAGES TODAY"  ELSE PRINT " END OF MESSAGES"
290 KEY ON
300 END
310 '
320 '   ************************************************************
330 '   ***    SUBROUTINE TO INCREMENT DATES OF PERIODIC MEMOS   ***
340 '   ************************************************************
350 '
360 GET 1,R
370 D$ = RAWDATE$ : GOSUB 760           ' get values of MO, DA, YR
380 IF FREQ$ <> "O" THEN GOTO 450
390    FIELD 1, 128 AS F$         ' delete one-time memo
400    GET 1,1
410    TF$ = LEFT$(F$,R-1) + "E" + RIGHT(F$, 128-R)
420    LSET F$ = TF$ : PUT 1,1
430    FIELD 1, 79 AS MEMO$, 4 AS FIRSTDATE$, 4 AS LASTDATE$, 10 AS                     RAWDATE$, 1 AS FREQ$, 2 AS WINDOWW$, 3 AS INTERVAL$
440    GOTO 690
450 IF FREQ$ <>  "E" THEN GOTO 510
460    L = CVI(LASTDATE$) + VAL(INTERVAL$)   ' increment date of "every N days"
470    F = CVI(LASTDATE$) - VAL(WINDOW$)     ' memo
480    LSET LASTDATE$ = MKI$(L)
490    LSET FIRSTDATE$ = MKI$(F)
500    GOTO 680
510 IF FREQ$ <> "M" THEN GOTO 600
520    IF MO = 12 THEN MO = 1 : YR = YR + 1 ELSE MO = MO + 1     'increment
530    R$ = STR$(MO) + "-" + STR$(DA) + "-" + STR$(YR)           ' month
540    D$ = R$ : GOSUB  760                    '  convert to sequential date
550    F = SEQDATE - VAL(WINDOWW$)
560    LSET LASTDATE$ = MKI$(SEQDATE)
570    LSET FIRSTDATE$ = MKI$(F)
580    LSET RAWDATE$ = R$
590    GOTO 680
600 IF FREQ$ <> "Y" THEN PRINT "INCORRECT FREQUENCY IN RECORD "; R : GOTO 690
610    YR = YR + 1                             ' increment year
620    R$ = STR$(MO) + "-" + STR$(DA) + "-" + STR$(YR)
630    D$ = R$ : GOSUB  760                    '  convert to sequential date
640    F = SEQDATE - VAL(WINDOWW$)
650    LSET LASTDATE$ = MKI$(SEQDATE)
660    LSET FIRSTDATE$ = MKI$(F)
670    LSET RAWDATE$ = R$
680 PUT 1,R
690 RETURN
700 '
710 ' ***************************************************************
720 ' ****      SUBROUTINE TO CONVERT DATE TO SEQUENTIAL DATE    ****
730 ' ****         Input = D$    Output = SEQDATE, MO, DA, YR    ****
740 ' ***************************************************************
750 '
760 DATA 0,0,31,59,90,120,151,181,212,243,273,304,334
770 RESTORE
780 FOR I = 0 TO 12
790    READ MDAY(I)
800 NEXT
810 DATERR = 0
820 J = 1
830 FOR I = 1 TO LEN(D$)
840    IF MID$(D$,I,1) = "/" OR MID$(D$,I,1)= "-" THEN DASH(J) =I :J=J+1
850 NEXT I
860 MO = VAL(D$)
870 DA = VAL( MID$ (D$,DASH(1)+1) )
880 YR = VAL( MID$ (D$,DASH(2)+1) )
890 YR$ = RIGHT$(STR$(YR),2)
900 YR  = VAL(YR$)
910 IF MO < 1 OR MO > 12 THEN DATERR = 1       ' DATERR can be used by calling
920 IF DA < 1 OR DA > 31 THEN DATERR = 2       '  routine to initiate various
930 IF YR < 81  THEN DATERR = 3                '  error message routines.
940 INTVAL% = YR -80
950 LEAPYRS% = INTVAL% / 4
960 IF INTVAL%/4 - LEAPYRS% <> 0 THEN GOTO  980   ' branch if not a leapyear
970 IF  MO < 3   THEN LEAPYRS% = LEAPYRS% - 1   'don't add a day until Mar 1
980 SEQDATE = (INTVAL% * 365) + MDAY(MO) + DA
990 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0261

     Volume in drive A has no label
     Directory of A:\

    CASH     BAS      9062   9-15-84   3:39p
    CASH     DOC     26667   9-15-84   3:44p
    CONVERT  BAS      6040   6-06-84   6:10p
    CONVERT  BAT        22   6-06-84  10:11p
    EIGHTCRV BAS     17536   1-22-85   9:08p
    EIGHTCRV SDA       100  11-09-84  10:16a
    EIGHTCRV TXT      2533   1-22-85   9:13p
    EIGHTCRV XXX       149  11-09-84   7:49p
    FILEMAN  COM     11776   7-18-84  11:13p
    FILES261 TXT      1917   1-28-87   1:40p
    FLITPLN3 2VV     41316  10-08-86   6:38p
    FLITPLN3 DOC      3944   1-13-87   8:38p
    GO       BAT       713   1-28-87  11:34a
    HARDCASH BAS      5914  11-16-84   6:40p
    LABELINP EXE     18688   5-20-84   8:51a
    LABELS   DOC      8022   5-19-84   2:49p
    LABELS   EXE      4345   6-04-84   9:17p
    LABPRT02 EXE      6784   5-20-84   8:56a
    LABRPT   EXE      5504   5-20-84   9:19a
    MAKEMEMO BAS      6781  11-08-83   9:54p
    MANUAL   EXE     23040   6-06-84   8:45p
    MANUAL   TXT     36116   8-21-84   9:49p
    MEMO     BAS     26731   9-21-84   2:48p
    MEMO     BAT        24   5-28-84   2:17a
    NEWLAB   EXE      2048   5-20-84   8:57a
    SHOWMEMO BAS      4378   7-30-83  10:56p
    SRTLAB   EXE      2944   5-20-84   9:21a
           27 file(s)     273094 bytes
                           34816 bytes free
