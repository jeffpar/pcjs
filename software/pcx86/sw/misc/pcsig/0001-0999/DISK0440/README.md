---
layout: page
title: "PC-SIG Diskette Library (Disk #440)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0440/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0440"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUSINESS SAMPLER #6"

    A mixture of BASIC and Pascal programs that perform a variety of
    personal and business tasks.
    
    The Printed Circuit Board (PCBD.BAS) assists in estimating the
    production cost of double-sided printed circuit boards.  The Restaurant
    House Charge Billing System (GBILL) lets you record each of your
    guest's house charges and produce mail-ready bills and stubs.  The
    bills that the system produces provide your "open account" customers
    with year-to-date account totals, and helps your account management.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $28.00 for GBILL.
    
    File Descriptions:
    
    AMORT    ABS  Abstract of the AMORT.BAS program.
    AMORT    BAS  Calculates Loan Amortization - results to the printer.
    AMRTMENU ABS  Abstract of the AMRTMENU.BAS program.
    AMRTMENU BAS  Program that selects AMORT.BAS or SCRNAMRT.BAS.
    AUTOEXEC BAT  Boot file.
    CAPSLOCK COM  Program to set Caps Lock to on. Place in Autoexec.bat.
    CLEAR    EXE  Program to clear screen.
    COMMENT  MEM  Memory file used in Disk-File.
    FILEFIX  ABS  Abstract of the FILEFIX.BAS program.
    FILEFIX  ASC  ASCII text file of the Basic source code.
    FILEFIX  BAS  Prepares ASCII text files with CR/LF delimiters for import
    FILEFIX  DOC  Documentation file (2K).
    FILEFIX  PAS  Source file.
    FILEFIX  COM  Main program for FILEFIX.
    GBILL    DOC  Documentation (15K).
    GBILL    EXE  Main program for GBILL.
    HOLD     DAT  Data file.
    IRA      BAS  Basic program.
    IRA      DAT  Data file.
    PCBD     ABS  Abstract of the PCBD.BAS program.
    PCBD     ASC  ASCII text file of the Basic source code.
    PCBD     BAS  Source file.
    PCBD     DOC  Documentation for PCBD.BAS (4K).
    PRINT    BAS  BASIC print program.
    READ     BAT  Batch file to run DISKFILE.DOC.
    READ     ME   Explains the file extensions of the Basic programs.
    READ-ME       Notes for printing documentation and installing system.
    SCRNAMRT ABS  Abstract of the SCRNAMRT.BAS program.
    SCRNAMRT BAS  Calculates Loan Amortization - results to the screen.
    SETUP    EXE  Setup program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AMORT.BAS

{% raw %}
```bas
1000 REM SAVE "AMORT.BAS"
1010 REM THOMAS E. RADKIEWICZ
1020 REM APRIL 12, 1985
1030 REM ********************
1040 CLS
1050 CENTURY = 19
1060 DIM IR(51),A(51)
1070 PRINT:PRINT
1080 PRINT "THOMAS E. RADKIEWICZ LOAN AMORITZATION PROGRAM -- VERSION 1.0"
1090 LOCATE 6,1:INPUT "Do you want instructions (Y/N): ";ANS$
1100 IF (ANS$="Y") OR (ANS$="y") THEN GOSUB 1950
1110 CLS
1120 TOTALPYMNT = 0
1130 TOTALINTR  = 0
1140 TOTALPRIN  = 0
1150 PAGE = 0
1160 TERMCOUNT  = 0
1170 HEADER = 1
1180 PRINT:PRINT
1190 INPUT "What is your Client Name:            ";A$:PRINT
1200 INPUT "Input starting month (e.g. 6):       ";MONTH:PRINT
1210 INPUT "Input starting year  (e.g. 82)       ";YEAR:PRINT
1220 INPUT "Input beginning balance:             ";BAL:PRINT
1230 INPUT "Input monthly payment:               ";PYMNT:PRINT
1240 INPUT "Input annual interest rate (e.g. 9): ";INTR:PRINT
1250 INPUT "Input Loan term: (MONTHS)            ";TERM:PRINT
1260 INTR = INTR/100!/12!
1270 PRINT
1280 COLOR 0,7
1290 IF PYMNT =0 THEN PYMNT = BAL*INTR/(1-(1+INTR)^-TERM):                                              PRINT USING "PAYMENT IS  #######,.##";PYMNT
1300 IF TERM =0 THEN TERM  = -((LOG(1-BAL*INTR/PYMNT)/LOG(1+INTR))):                                   PRINT USING "TERM IS     #### MONTHS";TERM
1310 TERM = INT(TERM + 0.4)
1320 IF BAL =0 THEN BAL  = PYMNT * (1-(1+INTR)^-TERM)/INTR:                                           PRINT USING  "BALANCE IS  #######,.##";BAL
1330 IF INTR=0 THEN GOSUB 2170
1340 COLOR 7,0
1350 LOCATE 20,1:PRINT "Enter a '0' to quit !!!"
1360 LOCATE 21,1:INPUT "How many months do you wish to project:  ";M1
1370 IF M1=0 THEN GOTO 1110
1380 IF M1<0 THEN :LOCATE 21,1:PRINT STRING$(70," "):GOTO 1360
1390 IF M1>TERM THEN PRINT:PRINT"You can't project longer than the term (";TERM;")":LOCATE 21,1:PRINT STRING$(79," "):GOTO 1360
1400 GOSUB 1430
1410 GOTO 1600
1420 REM ********* HEADER SUBROUTINE *************
1430 LPRINT
1440 PAGE = PAGE + 1
1450 LPRINT CHR$(12)
1460 LPRINT TAB(25);"PREPARED FOR ";A$
1470 LPRINT TAB(25);DATE$;TAB(39);"PAGE: ";PAGE
1480 LPRINT
1490 LPRINT
1500 LPRINT:LPRINT
1510 LPRINT USING "Beginning Balance -----------  ########,.##";BAL
1520 LPRINT
1530 LPRINT USING "Annual Int. Rate  -----------     ######.##_%";INTR*1200
1540 LPRINT
1550 LPRINT
1560 LPRINT "Month    Year     Payment      Interest      Principal        Balance"
1570 LPRINT "-----    ----     -------      --------      ---------        -------"
1580 RETURN
1590 REM *****************************************
1600 PINTR = INTR * BAL
1610 TERMCOUNT = TERMCOUNT + 1
1620 IF (TERMCOUNT <> TERM) THEN PPRIN = PYMNT - PINTR : BAL =BAL - PPRIN ELSE          PPRIN = BAL+0.005: PYMNT = PINTR + PPRIN:BAL = 0!
1630 TOTALPYMNT = TOTALPYMNT + PYMNT
1640 TOTALINTR  = TOTALINTR  + PINTR
1650 TOTALPRIN  = TOTALPRIN  + PPRIN
1660 LPRINT USING "  ##      ##   ######,.##   #######,.##    #######,.##  #########,.##"          ;MONTH,YEAR,PYMNT,(PYMNT - PPRIN),PPRIN,BAL
1670 YI = YI + PINTR
1680 YR = YR + PPRIN
1690 YP = YP + PYMNT
1700 MONTH = MONTH + 1
1710 IF MONTH =13 THEN GOSUB 1740
1720 IF (TERMCOUNT <> M1) THEN 1600 ELSE GOTO 1850
1730 REM ****** PRINT YTD TOTALS ***********
1740 LPRINT "               ----------   -----------    -----------    -----------"
1750 LPRINT USING " YEAR   ####   ######,.##   #######,.##    #######,.##  #########,.##"          ;(CENTURY * 100) + YEAR,YP,(YP-YR),YR,BAL
1760 LPRINT:LPRINT:LPRINT:LPRINT:LPRINT
1770 YP=0
1780 YI=0
1790 YR=0
1800 MONTH = 1
1810 YEAR = YEAR + 1:IF (YEAR = 100) THEN YEAR = 0:CENTURY = CENTURY + 1
1820 HEADER = HEADER + 1:IF (HEADER > 2) THEN GOSUB 1430:HEADER = 1
1830 RETURN
1840 REM *****************************
1850 IF (MONTH <> 1) THEN GOSUB 1740
1860 LPRINT
1870 LPRINT "               ----------   -----------    -----------    -----------"
1880 LPRINT USING " GRAND TOTAL   ######,.##   #######,.##    #######,.##  #########,.##"          ;TOTALPYMNT,TOTALINTR,(TOTALPYMNT - TOTALINTR),BAL
1890 LPRINT "               ==========   ===========    ===========    ==========="
1900 LPRINT "               ==========   ===========    ===========    ==========="
1910 LPRINT CHR$(12)
1920 INPUT "Do you wish to run another amortization: (Y/N)  ",ANS$
1930 IF (ANS$="Y") OR (ANS$="y") THEN GOTO 1110 ELSE CLS:RUN "AMRTMENU.BAS"
1940 REM ****** INSTRUCTION SUBROUTINE ***********
1950 CLS
1960 PRINT:PRINT
1970 PRINT "This program computes and prints a loan amortization schedule"
1980 PRINT "showing loan payments, interest expense, reduction of principal"
1990 PRINT "and remaining balance by month.  The schedule is printed in"
2000 PRINT "workpaper format and includes yearly subtotals and a grand total"
2010 PRINT "for all columns.  You can choose to print a complete schedule,"
2020 PRINT "or to stop printing before the loan is fully amortized."
2030 PRINT
2040 PRINT "The program also can perform annuity calculations to compute"
2050 PRINT "missing variables as long as you know three of the following:"
2060 PRINT
2070 PRINT "     1) Beginning Loan Balance"
2080 PRINT "     2) Monthly Payments"
2090 PRINT "     3) Annual Interest Rate"
2100 PRINT "     4) Loan Term in Months"
2110 PRINT
2120 PRINT "Simply input a ";:COLOR 30,1:PRINT "0";:COLOR 7,0:PRINT" when you are prompted for the value of the"
2130 PRINT "unknown variable, and the program will compute the missing value."
2140 PRINT:INPUT "Key any key to continue: ",ANS$
2150 RETURN
2160 REM ***** ESTIMATE THE IMPLICIT INTEREST RATE *******
2170 IR(1) = 0.12
2180 A(1)  = BAL-PYMNT * (1-1.12^-TERM)/0.12
2190 IF A(1)=0 THEN 2300
2200 IF A(1)<0 THEN IR(2)=0.2 ELSE IR(2)=0.06
2210 A(2)=BAL - PYMNT * (1-(1+IR(2))^-TERM)/IR(2)
2220 C = 2
2230 D = ABS(A(C) - A(C-1))
2240 IR(C+1) = IR(C) - SGN(A(C)) * (ABS(A(C) / D) * ABS (IR(C) - IR(C-1)))
2250 IF IR(C+1)<=0 THEN IR(C+1)=0.005:REM **** RATE CAN'T GOTO ZERO.
2260 A(C+1) = BAL - PYMNT * (1-(1+IR(C+1))^-TERM)/IR(C+1)
2270 IF ABS(A(C+1)/BAL) < 0.00001 OR C>20 THEN 2300
2280 C = C+1
2290 GOTO 2230
2300 INTR = IR(C+1)
2310 INTR = INT(INTR * 1000000!+0.5) / 1000000!
2320 PRINT USING "INT. RATE =  #######.##_%";INTR * 1200
2330 RETURN
```
{% endraw %}

## AMRTMENU.BAS

{% raw %}
```bas
1000 REM SAVE "AMRTMENU.BAS"
1010 REM THOMAS E. RADKIEWICZ
1020 REM APRIL 12, 1985
1030 REM ********************
1040 CLS
1050 LOCATE 5,20:COLOR 0,7:PRINT "AMORTIZATION MENU":COLOR 7,0
1060 LOCATE 9,20:PRINT "1) PRINT TO THE SCREEN"
1070 LOCATE 11,20:PRINT "2) PRINT TO THE PRINTER"
1080 LOCATE 13,20:PRINT "3) RETURN TO OPERATING SYSTEM"
1090 LOCATE 16,20:INPUT "ENTER DESIRED OPTION: ",CHOICE
1100 IF (CHOICE = 1) THEN RUN "SCRNAMRT.BAS"
1110 IF (CHOICE = 2) THEN RUN "AMORT.BAS"
1120 IF (CHOICE = 3) THEN SYSTEM
1130 GOTO 1040
```
{% endraw %}

## FILEFIX.BAS

{% raw %}
```bas
100 'fixfile version 1.0              2-17-1985
110 'by Bill Buoy for CE Vetco Services
120 'modifies a communications data file to be a source file for
130 'Wordplus PCjr. It keys on C/R characters and pads the remainder
140 'of the line with nulls.
150 'Wordplus .TXT files have the form :
160 'lines of text CHR$(17)(null bytes to pad remainder of 80 columns.
170 'open format line markers are CHR$(16)
180 'Release to copy and use are hereby granted provided the credits are
190 'retained and the program is not sold, either by itself or as part
200 'of a package.  All commercial rights are retained by the author.
210 WIDTH 80:CLEAR:PAD$=STRING$(80,0):COLOR 14
220 CLS:FILES:KEY OFF
230 INPUT "Enter input filename.ext"; IFILE$
240 INPUT "Enter output filename.ext"; OFILE$
250 IF IFILE$<>OFILE$ THEN 290
260 COLOR 4:BEEP:PRINT"Request denied.  You will destroy the original."
270 COLOR 12:PRINT"Input and output filenames must be different."
280 COLOR 14:PRINT" Please reselect.":GOTO 230
290 IF LEN (OFILE$)<12.1 THEN 350
300 BEEP:PRINT"filename too long ... suggest ";:A=LEN(OFILE$)
310 A$=LEFT$(OFILE$,A-4)
320 OFILE$=RIGHT$(A$,8)+".TXT":COLOR 15:PRINT OFILE$:COLOR 14
330 INPUT "is this ok (y/n) ";A$: IF A$="Y" OR A$="y" THEN 350
340 GOTO 240
350 COLOR 2:PRINT "opening disc files ... please stand by."
360 OPEN IFILE$ FOR INPUT AS 1
370 OPEN OFILE$ FOR OUTPUT AS 2
380 CC%=0:O$=""
390 WHILE NOT EOF(1)
400  V=ASC(INPUT$(1,#1)):CC%=CC%+1
410  V=V AND 127
420  IF V=64 THEN V=16
430  IF V<>13 THEN 460
440  O$=CHR$(17)+LEFT$(PAD$,(80-CC%))
450  CC%=81:GOTO 470
460  O$=CHR$(V)
470  PRINT# 2,O$;:O$=""
480  IF CC%>79 THEN CC%=0
490 WEND
500 PRINT# 2,"raw copy - not edited"+CHR$(17)+LEFT$(PAD$,59);
510 PRINT# 2,DATE$+CHR$(17)+LEFT$(PAD$,69);
520 PRINT# 2,TIME$+CHR$(17)
530 PRINT"     Job Complete - press fn 2 to run another.":KEY ON
540 COLOR 14:CLOSE:BEEP:END
```
{% endraw %}

## FILEFIX.DOC

{% raw %}
```
This program takes an ASCII text file with CR/LF delimiters and
prepares it for use with WordPlus PC or PCjr.  WordPlus expects its
.TXT files padded with nulls.  It will not successfully allow 
modification of files obtained from downloads or files generated
by EDLIN.  Three versions of these programs are on the disc.  Two
versions of the BASIC version are on the disk with the extension 
.BAS and .ASC.  These are commented internally to allow the user to
modify the program.  As written, the program replaces the '@' symbol
with the WordPlus open format marker.  This is consistent with the
files the program was originally designed to work with.  The other two 
versions, (.PAS and .COM), are the TurboPascal and Pascal object 
versions respectively.  The .COM version may be run directly from the
DOS prompt by typing FILEFIX.  There are three possible ways to run it
from DOS.  The first is to type FILEFIX at the prompt.  The program
will request a filename and extension for input.  The rootname and
drive will be extracted, then the extension '.FIX' will be appended.
The second method is to call the program with the input filename 
separated from the program call by a space.  As above, the rootname
and drive will be extracted and the extension '.FIX' will be appended.
The third method is to specify both the input and output filename from
the DOS prompt.  In any case, the two names are checked to be sure they
are different, then both files are opened and the files processed.
The '.COM' version displays each line of the file as it is processed,
but the BASIC version does not.  When the process is complete, the
console bell is sounded and the process terminates.  The Pascal source
is commented for the benefit of those who have a Pascal compiler and
wish to modify it.

```
{% endraw %}

## FILES440.TXT

{% raw %}
```
Disk No:  440
Program Title: Business Sampler #6
PC-SIG version: 1.5

A mixture of BASIC and Pascal programs that perform a variety of
personal and business tasks.

The Printed Circuit Board (PCBD.BAS) assists in estimating the
production cost of double-sided printed circuit boards.  The Restaurant
House Charge Billing System (GBILL) lets you record each of your guest's
house charges and produce mail-ready bills and stubs.  The bills that
the system produces provide your "open account" customers with
year-to-date account totals, and helps your account management.

Usage:  Business/Personal.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $28.00 for GBILL.

File Descriptions:

AMORT    ABS  Abstract of the AMORT.BAS program.
AMORT    BAS  Calculates Loan Amortization - results to the printer.
AMRTMENU ABS  Abstract of the AMRTMENU.BAS program.
AMRTMENU BAS  Program that selects AMORT.BAS or SCRNAMRT.BAS.
AUTOEXEC BAT  Boot file.
CAPSLOCK COM  Program to set Caps Lock to on. Place in Autoexec.bat.
CLEAR    EXE  Program to clear screen.
COMMENT  MEM  Memory file used in Disk-File.
FILEFIX  ABS  Abstract of the FILEFIX.BAS program.
FILEFIX  ASC  ASCII text file of the Basic source code.
FILEFIX  BAS  Prepares ASCII text files with CR/LF delimiters for import.
FILEFIX  DOC  Documentation file (2K).
FILEFIX  PAS  Source file.
FILEFIX  COM  Main program for FILEFIX.
GBILL    DOC  Documentation (15K).
GBILL    EXE  Main program for GBILL.
HOLD     DAT  Data file.
IRA      BAS  Basic program.
IRA      DAT  Data file.
PCBD     ABS  Abstract of the PCBD.BAS program.
PCBD     ASC  ASCII text file of the Basic source code.
PCBD     BAS  Source file.
PCBD     DOC  Documentation for PCBD.BAS (4K).
PRINT    BAS  BASIC print program.
READ     BAT  Batch file to run DISKFILE.DOC.
READ     ME   Explains the file extensions of the Basic programs.
READ-ME       Notes for printing documentation and installing system.
SCRNAMRT ABS  Abstract of the SCRNAMRT.BAS program.
SCRNAMRT BAS  Calculates Loan Amortization - results to the screen.
SETUP    EXE  Setup program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GBILL.DOC

{% raw %}
```





              RESTAURANT HOUSE CHARGE BILLING SYSTEM


                          VER 1.0


                 (C)Copyright Bob Dexter, 1985
                   All rights reserved.

























    Bob Dexter
    P. O. Box 17672
    Milwaukee,  WI  53217







    TABLE OF CONTENTS


         SYSTEM DESCRIPTION ......................................  1

         GETTING STARTED  ........................................  1

         THINGS YOU SHOULD KNOW  .................................  2

         THE MAIN MENU SCREEN  ...................................  2

         ADDING YOUR FIRST CUSTOMER ..............................  2

         ADDING CHARGES AND PAYMENTS .............................  2

         DELETING INFORMATION  ...................................  3

         YEAR END PROCEDURES  ....................................  3

         GROUP CODES .............................................  4

         THE SOFTWARE ............................................  5

         DISCLAIMER  .............................................  5

         PERMISSION TO COPY  .....................................  5

         THE SOURCE CODE LICENSE  ................................  5

         ORDER FORM  .............................................  6


         RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  1-

    The Restaurant House Charge Billing system allows you to easily record 
each of your guests house charges and print mail ready bills and stubs.  
The bills, that the system produces, provide your open account customers 
with year to date account totals and help you manage and collect your 
house charges.  The system has been designed to be easy to use and is 
entirely menu driven.  Preprinted forms are not required as the system 
prints a complete bill on 8 1/2 X 11 paper.  The system is so easy you 
will be using it in no time.

         EQUIPMENT REQUIREMENTS

    * IBM PCjr/PC/XT/AT or 100% PC compatible
    * 128k  memory
    * 1  360k diskette drive
    * Printer  (almost any type will due)
    * DOS 2.0 or higher

         GETTING STARTED

1.  Before using the system you will need to install the software on a DOS 
diskette.  To perform this step you may need to reference the section in 
your DOS manual which describes the FORMAT command.

    * * * * * *   DUAL DISKETTE SYSTEM INSTRUCTIONS  * * * * * *
    * Insert your DOS disk in drive A: and turn the power on.
    * Type  FORMAT B:/S  and press return.
    * Insert a blank diskette in disk drive B: and press return.
    * Wait for the format to complete.
    * Answer N to the more disks to format question.

2.  Next you will copy 3 programs to the disk you just created.
    * Insert the distribution disk in drive A:
    * type  COPY A:CLEAR.EXE B:  and press return
    * type  COPY A:SETUP.EXE B:  and press return
    * type  COPY A:GBILL.EXE B:  and press return
    * Remove the disk in drive A: and label it as:
         "HOUSE CHARGE BILLING MASTER"

3.  Now use the CLEAR program to create data files.
    * Insert the "HOUSE CHARGES BILLING MASTER" disk in drive A:
    * Type  CLEAR  and press return.
    * Answer the clear your data question with a  Y  press return.
    * The clear program takes over 2 min. to run so be patient.

4.  Next use the SETUP program to customize the system for yourself.
    * Answer the questions and test your printer heading alignment.

5.  You may want to put an autoexec file on the new diskette.
    * Type  COPY CON: A:AUTOEXEC.BAT and press return.
    * Type  GBILL  and press return.
    * Press function key 6 and press return.

              RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  2-


    6.  Make a copy of the "HOUSE CHARGE BILLING MASTER" disk and store 
the MASTER copy in a safe place.
         * Use the DOS diskcopy program to make a copy of the disk.
         * Label the new disk "HOUSE CHARGE BILLING 19XX".

    7.  Inform the system of the current year.
         * Insert the "HOUSE CHARGE BILLING 19XX" disk back in drive A:.
         * After the A: prompt type GBILL and press return.
         * Use selection 4 CHANGE YEAR to enter the current year.

         THINGS YOU SHOULD KNOW

    The system is set up to provide monthly billings.  Each customers 
payment and charge information is collected for an entire month.  Bills 
should be printed and mailed on the first day of the new month to minimize 
customer confusion.  At the end of the year you will need to follow an end 
of the year closing procedure which is described in detail later.  When 
you are done closing you will use a new disk to collect the next years 
information.  Save the old disk in a safe place as you may get customer 
requests for copies of old bills.

         THE MAIN MENU SCREEN

    The Main Menu screen is displayed by the system and is used to access 
all system functions.  To make a menu selection type the number of the 
desired selection and press return.  The program that displays the Main 
Menu is GBILL, so if you don't use a AUTOEXEC file to start the system you 
will need to enter GBILL and press return to get the system started.  Now 
go ahead and start the system and follow the instructions for adding a 
customer to the system.

         ADDING YOUR FIRST CUSTOMERS

    From the Main Menu use selection 3 UPDATE CUSTOMER LIST.  If this is 
your very first customer the screen will have a 1 in the upper left hand 
corner of the screen.  As you add new customers a menu of customers will 
be built.  Now add your first customer by typing the number 1 and pressing 
return.  Fill in the customer information as it is requested.  The balance 
forward field should only be used for an outstanding balance which was 
billed last year.  Don't be concerned with the GROUP CODE, just press 
return when it is requested.  If you are switching over from a manual 
system then any outstanding balance from the current year should be added 
as a charge.  When switching over from a manual system you may want to go 
back a month or 2 and create bills to get a feel for this system.

         ADDING CHARGES AND PAYMENTS

    Adding new charges and payments is very similar to adding customers.  
From the Main Menu use selection 1 CHANGE OR ADD CHARGES AND PAYMENTS.  
Next select the customer that the charges are for.  Enter the requested 
information.


   RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  3-

         DELETING INFORMATION

    To delete information from a field on the screen use the back space 
key.  To delete a customer from the system simply use Main Menu selection 
3 UPDATE CUSTOMER LIST and select the customer to be deleted.  When the 
customer name is displayed use the back space key to delete all the 
characters in the field and press return.  The best time to delete a 
customer is during your year end closing procedures, see the section on 
year end procedures for more information.


         YEAR END PROCEDURES

    At the end of the year you will need to follow this procedure.  This 
procedure will allow you to save last years billing information and 
provide an empty disk for next years bills.  The new disk will have your 
customers on it so you can start saving this years charges.  To perform 
this procedure you will need to have the following:

                 * Last years HOUSE CHARGE BILLING disk.
                 * The HOUSE CHARGE BILLING MASTER disk.
                 * A list of the Balances due.
                 * A blank diskette.

    1.  Place a protect tab on last years HOUSE CHARGE BILLING disk.
         Step 1. is very important please do not skip it.

    2.  Next make a copy of the  "HOUSE CHARGE BILLING MASTER" disk.  Use 
the DISKCOPY function to perform this step.  When the DISKCOPY is complete 
put the "HOUSE CHARGES BILLING MASTER" disk back in a safe place and label 
the new disk "HOUSE CHARGES BILLING 19XX".  The XX in the label should 
contain the new year.

    3.  Next you will copy the customer file from last years disk to the 
new years disk.
         * Insert last years HOUSE CHARGE BILLING disk in drive A.
         * Insert the new HOUSE CHARGE BILLING disk in drive B.
         * After the A prompt type COPY A:CUST.FLE B: and press return.
         * When the copy completes, store last years disk in a safe place.

    4.  Change the system year using selection number 4 CHANGE YEAR on the 
Main Menu.
         * Insert the new HOUSE CHARGE BILLING disk in drive A.
         * Start the system by typing GBILL and pressing return.
         * Use Main Menu selection 4 CHANGE YEAR to change the date.


              RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  4-

5.  Now is the time to delete the customers who are no longer charging.  
To delete an old customer use Main Menu selection 3  UPDATE CUSTOMER 
LIST.  When the customer menu displays, select a customer to delete.  Use 
the backspace key to blank out the customer name and press return.  When 
the system sees a blank customer name it deletes that customer from the 
menu.  All other customers below the one being deleted will be moved up to 
fill the hole left by the customer you deleted.

    6.  Next you will update the balance forward information for each 
customer.  Use selection 3 on the Main Menu to modify customer 
information.  Now update the balance forward amount for each customer to 
reflect the balance due as of the last day of the old year.  To reach the 
balance forward field without changing any of the other information, 
simply press return on each field you don't want to change.

    7.  You are now ready to start entering the new years charges and 
payments.  On February 1, you will be able to print bills which reflect 
the outstanding balance from last year.  The year to date balances shown 
on the bill will not reflect any balance forward amounts.


         GROUP CODES

    The use of group codes is optional.  Each customer is assigned a group 
code of "A" when the system is set up.  Group codes can be changed by 
using selection 3 UPDATE CUSTOMER LIST.  Changing a group code has no 
effect on any calculations or the contents of the bills.

         SO WHAT ARE GROUP CODES FOR?

    Group codes are used to control the printing of bills.  Main Menu 
selection number 2 PRINT BILLING allows you to print bills which are in a 
specific group.  When selecting a group to print it is important to enter 
the exact group code, "A" and "a" are different group codes.  Group codes 
can be used for many things, here are some examples:

    ** Customers with balances over 90 days past due could be placed in a 
special group.

    ** If your business is divided into multiple corporations you might 
want to assign each corporation a group code.  Then each customer could be 
assigned to it's corporation.  In this way you could produce bills for 
each corporation and determine the total accounts receivable for each 
corporation.

    ** Customers could be divided into two groups, the hand delivered 
group and the mail delivered group.  In this way you could print your 
mailed bills in one print run, and the hand delivered bills in a second 
run.



              RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  5-

         THE SOFTWARE

    The HOUSE CHARGE BILLING SYSTEM is written in PC BASICA that has been 
compiled.  The system is easy to modify and upgrade.  If you plan to run 
this system on a non IBM PC you may need to recompile it on your PC.
    This copy of the software is provided as an evaluation copy.  The 
label printing feature has been disabled in this evaluation copy of the 
software.  When you register your copy of the program you will receive a 
diskette with a complete working version of the program.


              DISCLAIMER

THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EITHER 
EXPRESSED OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.


IN NO EVENT WILL THE AUTHOR BE LIABLE TO YOU FOR ANY DAMAGES, INCLUDING 
ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL 
DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE THESE PROGRAMS, EVEN 
IF THE AUTHOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR FOR 
ANY CLAIM BY ANY OTHER PARTY.

         PERMISSION TO COPY

    Individuals are granted permission to make UNMODIFIED COPIES of this 
evaluation version of the RESTAURANT HOUSE CHARGE BILLING SYSTEM programs 
and documentation for their own use or to allow others to evaluate this 
software.

    Modifications to the programs or documentation are prohibited.

         THE SOURCE CODE LICENSE

    A single computer source code license is available for the RESTAURANT 
HOUSE CHARGE BILLING SYSTEM.  The source code license provides you with, 
and allows you to make modifications to the source code for use on one 
computer.  See the order form for prices and ordering information.

              RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  6-


   - - - - - - - - - - - -  ORDER FORM  - - - - - - - - - - - - - - - -

Bob Dexter                Your Name
P.O. Box  17672                      -----------------------------------
Milwaukee,  WI 53217        Address
                                     -----------------------------------

                                     -----------------------------------

                                     -----------------------------------
                         Your Phone
                                     -----------------------------


ITEM                                     UNIT    
DESCRIPTION                              PRICE      QTY   TOTALS
========================                 ========   ===   =======
RESTAURANT HOUSE CHARGE BILLING SYSTEM     $28.00 
(Includes production version on disk)               ---     -----


SOURCE CODE LICENSE                        $87.00
(Includes BASIC program listings on                 ---     -----
 the disk with the production version
 of the system)

                           5% sales tax
                           (Wisconsin residents)            -----

                                               TOTAL 
                                                            -----

   Please make check payable to: Bob Dexter



              SUGGESTIONS


--------------------------------------------------------------------


--------------------------------------------------------------------


--------------------------------------------------------------------


--------------------------------------------------------------------



              RESTAURANT HOUSE CHARGE BILLING SYSTEM      -PAGE  7-


         NOTES


```
{% endraw %}

## IRA.BAS

{% raw %}
```bas
10 KEY OFF:CLS
12 SCREEN 0
14 WIDTH 80
16 COLOR 15,0,0
18 PRINT" ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
20 PRINT" ░┌─────────────────────────────────────────────────────────────────┐░
22 PRINT" ░│                                                                 │░
24 PRINT" ░│ INDIVIDUAL RETIREMENT ACCOUNT * SINGLE PREMIUM DEFERRED ANNUITY │░
38 PRINT" ░│                         CALCULATIONS                            │░
40 PRINT" ░│                             FOR                                 │░
42 PRINT" ░│          FINANCIAL PLANNERS AND INSURANCE AGENCIES              │░
44 PRINT" ░│                                                                 │░
46 PRINT" ░└─────────────────────────────────────────────────────────────────┘░
48 PRINT" ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
50 PRINT" ░┌─────────────────────────────────────────────────────────────────┐░
52 PRINT" ░│               THIS IS USER SUPPORTED SOFTWARE                   │░
54 PRINT" ░│  If you use this program you are requested to send a donation   │░
56 PRINT" ░│               of $25 to the following address                   │░
57 PRINT" ░│           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░               │░
58 PRINT" ░│           ░ RONMAR, BOX 245, CROTON, OHIO 43O31 ░               │░
59 PRINT" ░│           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░               │░
60 PRINT" ░│   Registered users may send a copy of this disk to the above    │░
61 PRINT" ░│   address and the disk will be programmed with up to 3 lines    │░
62 PRINT" ░│   of your Agencie's Name, and Address on the Ledger printout    │░
63 PRINT" ░└─────────────────────────────────────────────────────────────────┘░
64 PRINT" ░   You are encouraged to make copies of this program for friends   ░
65 PRINT" ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
66 PRINT"
68 PRINT"                       PRESS ANY KEY TO CONTINUE
70 PRINT"
72 A$=INKEY$: IF A$="" THEN 72
74 WIDTH 80
76 CLS
78 COLOR 15,0,0
110 '
120 ' IRA Monthly Income Life Only Table
130 '
140 DATA .00887,.00827,.00899,.00837,.00911,.00848,.00924,.00859
150 DATA .00938,.00870,.00952,.00882,.00968,.00894,.00984,.00907
160 DATA .01001,.00921,.01019,.00936,.01039,.00952,.01060,.00969
170 DATA .01083,.00988,.01107,.01009,.01133,.01031,.01161,.01056
180 DATA .01191,.01083,.01224,.01112,.01259,.01144,.01297,.01179
190 DATA .01338,.01217,.01382,.01259,.01430,.01304,.01482,.01354
200 DATA .01539,.01409,.01600,.01469
210 '
220 ' IRA Monthly Income 10 Year Certain Table
230 '
235 PRINT"
240 DATA .00862,.00816,.00871,.00825,.00881,.00834,.00891,.00843
250 DATA .00901,.00852,.00912,.00862,.00923,.00873,.00934,.00883
260 DATA .00946,.00895,.00958,.00907,.00971,.00919,.00984,.00933
270 DATA .00998,.00947,.01011,.00961,.01026,.00976,.01040,.00992
280 DATA .01055,.01008,.01069,.01025,.01084,.01042,.01099,.01060
290 DATA .01113,.01077,.01128,.01094,.01142,.01112,.01156,.01128
300 DATA .01169,.01144,.01182,.01159
310 '
320 'SPDA Monthly Income Life Table
330 '
340 DATA 08.95568,08.40541,09.06240,08.49481,09.17355,08.58811
350 DATA 09.28945,08.68546,09.41070,08.78681,09.53771,08.89229
360 DATA 09.67127,09.00203,09.81200,09.11644,09.96095,09.23617
370 DATA 10.11879,09.36233,10.28680,09.49632,10.46627,09.64004
380 DATA 10.65825,09.79547,10.86402,09.96443,11.08475,10.14878
390 DATA 11.32195,10.35015,11.57662,10.57027,11.85073,10.81058
400 DATA 12.14565,11.07273,12.46370,11.35886,12.80688,11.67106
410 DATA 13.17766,12.01201,13.57847,12.38482,14.01286,12.79247
420 DATA 14.48331,13.23890,14.99363,13.72818
430 '
440 ' SPDA Monthly Income 10 Year Certain Table
450 '
460 DATA 08.73744,08.31504,08.82130,08.39123,08.90781,08.47013
470 DATA 08.99693,08.55176,09.08917,08.63647,09.18442,08.72433
480 DATA 09.28307,08.81562,09.38518,08.91075,09.49073,09.00998
490 DATA 09.60015,09.11386,09.71336,09.22280,09.83033,09.33724
500 DATA 09.95104,09.45761,10.07547,09.58405,10.20325,09.71666
510 DATA 10.33410,09.85542,10.46781,09.99980,10.60355,10.14961
520 DATA 10.74114,10.30407,10.87974,10.46277,11.01880,10.62462
530 DATA 11.15748,10.78853,11.29510,10.95314,11.43105,11.11704
540 DATA 11.56430,11.27815,11.69399,11.43484
550 '
700 KEY OFF: CLS: DEFDBL H: DEFINT Y
710 DEF FNUPC$(A$)=CHR$(ASC(LEFT$(A$,1))AND 95)             'uppercase function
720 OPEN "HOLD.DAT" FOR OUTPUT AS #1                        'output file
725 OPEN "IRA.DAT" FOR OUTPUT AS #2
730 PRINT"     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
732 PRINT"     ░                                                          ░
734 PRINT"     ░              IRA / SPDA ILLUSTRATION PROGRAM             ░
736 PRINT"     ░                                                          ░
738 PRINT"     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
740 DIM AV(26,2),AT(26,2),AC(26,2),AD(26,2),YR(9),PER(4),ANS#(9,4),MINC(6,2)
750 '
760 FOR I%=1 TO 26: READ AC(I%,1),AC(I%,2): NEXT I%
770 FOR I%=1 TO 26: READ AD(I%,1),AD(I%,2): NEXT I%
780 FOR I%=1 TO 26: READ AT(I%,1),AT(I%,2): NEXT I%
790 FOR I%=1 TO 26: READ AV(I%,1),AV(I%,2): NEXT I%
800 '
805 ON ERROR GOTO 7000
810 B$="": BK$="N": BY$=""                                  'initialize
820 HH=0.08333333: ER%=1: SW%=1
830 '
840 ' Main Processing Section
850 '
860 LINE INPUT " 1.  NAME? ";B$: IF BK$="Y" GOTO 1500          'name
870 INPUT " 2.  AGE";BA$:                                      'age
875 IF BA$="" THEN GOSUB 5600: GOTO 870
880 VAR$=BA$: GOSUB 6500: IF ER%=0 GOTO 870
900 BA%=VAL(BA$): IF BK$="Y" GOTO 1500
910 INPUT " 3.  SEX (M/F)";BB$                                 'sex
915 IF BB$="" THEN GOSUB 5600: GOTO 910
920 BB$=FNUPC$(BB$): IF INSTR(1,"FM",BB$)>0 GOTO 940
930 PRINT "Invalid -- please re-enter": PRINT: GOTO 910
940 IF BK$="Y" GOTO 1500
950 INPUT " 4.  IRA or SPDA (I or S)";BM$                    'IRA or SPDA
955 IF BM$="" THEN GOSUB 5600: GOTO 950
960 BM$=FNUPC$(BM$): IF INSTR(1,"IS",BM$)>0 GOTO 980
970 PRINT "Invalid -- please re-enter": PRINT: GOTO 950
980 IF BM$="S" GOTO 1080
990 PRINT:PRINT"     TYPE OF IRA ILLUSTRATION"
1000 PRINT"     Print  I  for IRA not to exceed 2000"
1010 '             PRINT"     Enter  S  for SPOUSAL IRA not to exceed 2250"
1020 '             PRINT"     Enter  C  for COUPLE IRA not to exceed 4000"
1030 PRINT"     Enter  R  for ROLLOVER with continued tax deferred interest accumulation"
1040 INPUT" 5.  ENTER YOUR SELECTION";BY$
1045 IF BY$="" THEN GOSUB 5600: GOTO 990
1050 BY$=FNUPC$(BY$): IF INSTR(1,"ISCR",BY$)>0 GOTO 1070
1060 PRINT "Invalid Selection -- Please re-enter":PRINT: GOTO 1040
1070 PRINT: IF BK$="Y" THEN GOTO 1500 ELSE GOTO 1140
1080 INPUT" 6.  ENTER AMOUNT OF SPDA";BC$: VAR$=BC$          'amt of SPDA
1082 BY$=""
1085 IF BC$="" THEN GOSUB 5600: GOTO 1080
1090 BC=VAL(BC$): GOSUB 6500: IF ER%=O THEN 1080
1110 GOSUB 5050: IF SW%=0 THEN 1080
1120 IF BC>250000! THEN PRINT"Amount greater than maximum (250000)":PRINT:GOTO 1080
1130 IF BK$="Y" GOTO 1500
1140 IF BM$="S" THEN BD$="A": BE$="N": GOTO 1300
1150 INPUT" 7.  AMOUNT OF IRA CONTRIBUTION";BC$: BC=VAL(BC$)
1152 IF BC>250000! THEN PRINT"Amount greater than maximum (250000)":PRINT:GOTO 1150
1155 IF BC$="" THEN GOSUB 5600: GOTO 1150
1160 VAR$=BC$: GOSUB 6500: IF ER%=0 GOTO 1150
1180 IF BK$="Y" GOTO 1500
1190 IF BY$="R" THEN BD$="A": BE$="N": GOTO 1300
1200 INPUT " 8.  CONTRIBUTION TO BE MADE EACH YEAR  (Y/N)";BE$   'frequency
1205 IF BE$="" THEN GOSUB 5600: GOTO 1200
1210 BE$=FNUPC$(BE$): IF INSTR(1,"YN",BE$)>0 GOTO 1230
1220 PRINT"Invalid Selection -- Please re-enter":PRINT:GOTO 1200
1230 IF BK$="Y" THEN 1500
1235 IF BE$="N" THEN BD$="A": GOTO 1280
1240 INPUT" 9.  FREQUENCY   (A/M)";BD$                          'mode
1245 IF BD$="" THEN GOSUB 5600: GOTO 1240
1250 BD$=FNUPC$(BD$): IF INSTR(1,"AM",BD$)>0 GOTO 1270
1260 PRINT"Enter A or M": GOTO 1240
1270 IF BD$="M" AND BE$="N" THEN PRINT"Monthly frequency not allowed for one time contribution: GOTO 1200
1275 IF BK$="Y" THEN 1500
1280 INPUT"10.  RATE OF TAXATION (eg. 30)";BF$: BF=VAL(BF$)    'tax rate
1285 IF BF$="" THEN GOSUB 5600: GOTO 1280
1290 VAR$=BF$: GOSUB 6500: IF ER%=0 THEN 1280
1295 IF BK$="Y" THEN 1500
1300 INPUT"11.  MATURITY AGE";BG$: BG%=VAL(BG$)               'maturity age
1305 IF BG%>70 AND BM$ ="I" THEN PRINT"Maximum maturity age is 70":PRINT: GOTO 1300
1306 IF BG%>80 THEN PRINT"Maximum maturity age is 80":PRINT: GOTO 1300
1307 IF BG$="" THEN GOSUB 5600: GOTO 1300
1310 VAR$=BG$: GOSUB 6500
1320 IF ER%=0 GOTO 1300
1340 IF BK$="Y" THEN 1500
1350 INPUT"12.  CURRENT INTEREST RATE";IR$: IR=VAL(IR$)        'interest rate
1355 IF IR$="" THEN GOSUB 5600: GOTO 1350
1360 VAR$=IR$: GOSUB 6500: IF ER%=0 GOTO 1350
1370 IF BK$="Y" THEN 1500
1380 LINE INPUT"13.  AGENT'S NAME? ";BI$                        'agent
1390 IF BK$="Y" THEN 1500
1400 LINE INPUT"14.  TODAY'S DATE? ";BJ$                        'date
1405 IF BJ$="" THEN GOSUB 5600: GOTO 1400
1410 IF BK$="Y" THEN 1500
1500 PRINT: INPUT"15.  ANY CORRECTIONS   (Y/N)";BK$
1505 IF BK$="" GOTO 1530
1510 BK$=FNUPC$(BK$): IF BK$="N" THEN BL%=0: GOTO 1560
1520 IF BK$="Y" THEN INPUT"Number of item to changed.  Type 0 to end";BL%
1530 IF BK$="Y" GOTO 1550 ELSE PRINT:PRINT"Enter Y or N": GOTO 1500
1540 IF BL%>15 OR BL%<0 THEN PRINT "Enter 1-15 only": GOTO 1520
1545 IF BL%=0 THEN GOTO 1560
1550 ON BL% GOTO 860,870,910,950,990,1080,1150,1200,1240,1280,1300,1350,1380,1400,1540
1560 IF BD$="M" AND BE$="N" THEN PRINT"Monthly frequency not available for one time contribution": BK$="Y": GOTO 1200
1565 IF BG%>70 AND BM$="I" THEN PRINT"Maximum maturity age is 70":PRINT:BK$="Y": GOTO 1300
1570 GOSUB 5050: IF SW%=0 GOTO 1500
1620 IF BD$="M" THEN GOSUB 5000
1630 C=BF/100: CA=BC*C: CB=BC-CA
1640 CC=INT((CA/CB*100)*100+0.005)/100: BH=IR/100
1650 PER(1)=1.08: PER(2)=1.1: PER(3)=1.12: PER(4)=BH+1
1655 IF BE$="N" GOTO 1890                                 'one time only contr
1660 IF BA%>=60 THEN YR(5) = 0 ELSE YR(5)=61-BA%          '# of years for m/a
1670 IF BA%>=62 THEN YR(6)=0 ELSE YR(6)=63-BA%
1680 IF BA%>=65 THEN YR(7) = 0 ELSE YR(7)=66-BA%
1690 IF BA%>=70 THEN YR(8) = 0 ELSE YR(8)=71-BA%
1700 IF BG%=60 OR BG%=62 OR BG%=65 OR BG%=70 THEN YR(9) = 0: GOTO 1710
1705 YR(9)=(BG%+1)-BA%
1710 IF BD$="A" THEN YR(1)=6 ELSE YR(1)=5
1720 IF BD$="A" THEN YR(2)=11 ELSE YR(2)=10
1730 IF BD$="A" THEN YR(3)=16 ELSE YR(3)=15
1740 IF BD$="A" THEN YR(4)=21 ELSE YR(4)=20
1750 IF BD$="M" THEN GOSUB 5500
1760 '
1770 '                     ACCUMULATION FORMULAS
1780 '
1800 IF YR(9)=0 THEN U%=8 ELSE U%=9
1810 FOR T%=1 TO U%
1820 FOR I%=1 TO 4
1830 IF YR(I%)=0 THEN 1060
1840 IF BD$="A" THEN HOLD=(((PER(I%)^YR(T%))-1)/(PER(I%)-1))-1 ELSE HOLD=(PER(I%)^YR(T%)-1)/(1-(1/PER(I%)^HH))
1845 HOLD=(INT(1000000!*(HOLD+5.000000e-7)))/1000000!
1850 ANS#(T%,I%)=INT(HOLD*BC+0.5)
1860 NEXT I%
1870 NEXT T%
1875 GOTO 3000
1880 '
1890 '                    ONE TIME ONLY FORMULAS
1900 '
1905 B%=0
1910 FOR I% = 5 TO 20 STEP 5
1920 B%=B%+1: YR(B%)=I%
1930 NEXT I%
1940 IF BA%>=60 THEN YR(5)=0 ELSE YR(5)=60-BA%
1950 IF BA%>=62 THEN YR(6)=0 ELSE YR(6)=62-BA%
1960 IF BA%>=65 THEN YR(7)=0 ELSE YR(7)=65-BA%
1970 IF BA%>=70 THEN YR(8)=0 ELSE YR(8)=70-BA%
1980 IF BG%=60 OR BG%=65 OR BG%=70 THEN YR(9)=0: GOTO 2000
1990 YR(9)=BG%-BA%
2000 IF YR(9)=0 THEN U%=8 ELSE U%=9
2010 FOR T%=1 TO U%
2020 FOR I%=1 TO 4
2030 IF YR(T%)=0 THEN 2050
2040 ANS#(T%,I%)=INT(PER(I%)^YR(T%)*BC+0.5)
2050 NEXT I%
2060 NEXT T%
2070 '
2080 '                            MONTHLY INCOME CALCULATION
3000 WRITE #1,B$,BA%,BB$,BM$,BC,BD$,BE$,BF,BG%,IR,BI$,BJ$,BY$,BZ,CA,CB,CC
3005 IF BB$="M" THEN S%=1 ELSE S%=2
3010 FOR T%=5 TO 9
3020 IF ANS#(T%,4)=0 THEN 3130
3030 IF T%=5 THEN B%=60-54
3040 IF T%=6 THEN B%=62-54
3050 IF T%=7 THEN B%=65-54
3060 IF T%=8 THEN B%=70-54
3070 IF T%=9 THEN B%=BG%-54
3080 I%=T%-4
3085 IF BM$="S" GOTO 3110
3090 MINC(I%,1)=INT(AC(B%,S%)*ANS#(T%,4)+0.5)                 'ira life only
3100 MINC(I%,2)=INT(AD(B%,S%)*ANS#(T%,4)+0.5): GOTO 3130      'ira 10 yr cert
3110 MINC(I%,1)=INT(AT(B%,S%)*ANS#(T%,4)/1000+0.5)            'spda life only
3120 MINC(I%,2)=INT(AV(B%,S%)*ANS#(T%,4)/1000+0.5)            'spda 10yr cert
3130 NEXT T%
3150 FOR I%=1 TO 9
3160 WRITE #2, ANS#(I%,1),ANS#(I%,2),ANS#(I%,3),ANS#(I%,4)
3170 NEXT I%
3180 FOR I%=1 TO 5
3190 WRITE #2, MINC(I%,1),MINC(I%,2)
3200 NEXT I%
3205 GOTO 6000
3210 '
5000 '                   SUBROUTINE FOR MONTHLY INCOME
5010 BZ=BC*12: BC=BZ: RETURN
5020 '
5030 '                   CHECK MINIMUM AND MAXIMUM AMOUNTS
5040 '
5050 SW%=1: ER%=1: IF BD$="M" THEN BYN=BC*12 ELSE BYN=BC
5055 IF BYN<300 THEN GOSUB 5230: RETURN
5060 IF BY$="I" AND BYN>2000 THEN GOSUB 5200: RETURN
5070 IF BY$="S" AND BYN>2250 THEN GOSUB 5200: RETURN
5080 IF BY$="C" AND BYN>4000 THEN GOSUB 5200: RETURN
5090 IF BY$="R" THEN RETURN
5100 IF BM$="S" AND BC<5000 THEN GOSUB 5230: RETURN
5110 RETURN
5200 ER%=1
5210 IF BM$="I" THEN PRINT"Maximum amount exceeded":PRINT:SW%=0: RETURN
5220 IF BM$="S" THEN PRINT"minimum amount for SPDA IS 5000":PRINT:SW%=0: RETURN
5230 PRINT "Amount less than minimum":PRINT: SW%=0: RETURN
5500 '
5510 BC=BC/12                                      'change amt for monthly cont.
5520 FOR I%=5 TO 9
5530 IF YR(I%)>0 THEN YR(I%)=YR(I%)-1
5540 NEXT I%
5550 '
5560 RETURN
5600 PRINT"Please re-enter": RETURN
6000 INPUT "16.  ANY MORE PROPOSALS   (Y/N)";BQ$: BQ$=FNUPC$(BQ$)
6010 IF INSTR(1,"YN",BQ$)>0 GOTO 6020 ELSE PRINT"ENTER Y OR N": PRINT: GOTO 6000
6020 IF BQ$="N" THEN CLOSE: CHAIN "a:print"                 'chain print progra
6030 INPUT "New or Keep   (N/K)";BR$: BR$=FNUPC$(BR$)
6040 IF BR$="N" GOTO 810
6050 IF BR$="K" GOTO 1500
6060 PRINT"Enter N or K ":PRINT:GOTO 6020
6070 ,
6500 SW%=1: ER%=1
6510 FOR I%=1 TO LEN(VAR$)
6520 IF MID$(VAR$,I%,1)>"9" OR MID$(VAR$,I%,1)<"." THEN ER%=0:GOSUB 6600:RETURN
6530 IF MID$(VAR$,I%,1)="/" THEN ER%=0: GOSUB 6600: RETURN
6540 NEXT I%
6550 RETURN
6600 PRINT"Non-numeric data -- please re-enter":PRINT:RETURN
6760 '
7000 PRINT "ERROR"ERR" - at line"ERL: STOP: RESUME
```
{% endraw %}

## PCBD.BAS

{% raw %}
```bas
10 REM PRINTED CIRCUIT BOARD COST ESTIMATOR
20 REM (c) 1983 BY BILL BUOY
30 REM             16319 PEBBLEGLEN
40 REM             HOUSTON, TEXAS  77095
45 REM THIS PROGRAM IS RELEASED TO THE PUBLIC DOMAIN BY THE AUTHOR
50 REM I WOULD APPRECIATE YOUR LEAVING THESE REMARKS INTACT, BUT YOU
60 REM MAY GIVE OR TRADE IT AS YOU SEE FIT.  IF YOU MAKE ANY CHANGES
61 REM OR REVISIONS, PLEASE NOTE THEM IN THIS AREA.
70 REM  ------------ ALL COMMERCIAL RIGHTS RESERVED      --------------
80 REM 5/30/85 VERSION 3 REVISION 0
90 REM TRANSLATED FROM CBM BASIC 2.0 TO HP-86 BASIC WITH ENHANCEMENT
95 REM TRANSLATED FROM HP BASIC TO IBM BASIC
100 REM BY THE ORIGINAL AUTHOR.
110 GOTO 140
120 CLS:PRINT TAB(11);"Printed Circuit Board Cost Estimator":PRINT:RETURN
130 REM PROGRAM CONSTANTS - CHANGE TO REFLECT PRICE CHANGES
140 RC=25 : CH=0.12 : MC=0.05
150 GOSUB 120
160 PRINT "ENTER YOUR NAME, PLEASE   ";: INPUT NAM$
170 PRINT "TODAYS DATE............   ";DATE$ : DA$=DATE$
180 PRINT "ENTER JOB # OR PROJECT #  ";: INPUT JOB$
190 GOSUB 120
200 PRINT "ESTIMATE FOR LAYOUT TIME, IN HOURS" : PRINT
210 PRINT "ESTIMATE FOR TOOLING AND SETUP ($)" : PRINT
220 LOCATE 3,40  : INPUT AC: AC=25*AC+RC
230 LOCATE 5,40  : INPUT TL
240 GOSUB 120
250 PRINT "NUMBER OF 14 PIN I.C.'s  " : PRINT : PRINT "NUMBER OF 16 PIN I.C.'s  " : PRINT
260 PRINT "NUMBER OF LSI DEVICES" : PRINT : LT=0
270 LOCATE 3,24  : INPUT I1
280 LOCATE 5,24  : INPUT I2
290 LOCATE 7,24 : INPUT"(0 TO CONTINUE) "; IL
300 IF IL<1 THEN 340
310 INPUT "NUMBER OF PINS " ;NP : LT=LT+IL*NP
330 GOTO 290
340 GOSUB 120
350 PRINT "NUMBER OF TRANSISTORS" : PRINT
360 PRINT "NUMBER OF DIODES" : PRINT
370 PRINT "NUMBER OF RESISTORS " : PRINT
380 PRINT "NUMBER OF CAPACITORS" : PRINT
390 PRINT "NUMBER OF POTS" : PRINT
400 PRINT "NUMBER OF CONNECTORS " : PRINT : CT=0
410 LOCATE 3,24  : INPUT Q
420 LOCATE 5,24  : INPUT D
430 LOCATE 7,24  : INPUT R
440 LOCATE 9,24  : INPUT CA
450 LOCATE 11,24  : INPUT P
460 LOCATE 13,24 : INPUT"(0 TO CONTINUE)"; NC
470 IF NC<1 THEN 490
480 INPUT "NUMBER OF PINS PER CONNECTOR";NP : CT=CT+NC*NP : GOTO 460
490 GOSUB 120
500 PRINT "NUMBER OF SWITCHES" : PRINT : SW=0
510 LOCATE 3,24:INPUT"(0 TO CONTINUE)";NS
520 IF NS<1 THEN 540
530 INPUT "NUMBER OF PINS PER SWITCH" ; NP: SW=SW+NS*NP
540 GOSUB 120
550 PRINT "NUMBER OF TRANSFORMERS" : PRINT : TT=0
560 LOCATE 3,24:INPUT"(0 TO CONTINUE)"; NT
570 IF NT<1 THEN 590
580 PRINT "NUMBER OF PINS PER TRANSFORMER" : INPUT NP: TT=TT+NT*NP : GOTO 560
590 GOSUB 120
600 PRINT "NUMBER OF MISCELLANEOUS DEVICES" : PRINT : TM=0
610 LOCATE 3,34:INPUT"(0 TO CONTINUE)" ; NM
620 IF NM<1 THEN 640
630 INPUT "NUMBER OF PINS PER DEVICE" ; NP : TM=TM+NM*NP : GOTO 610
640 GOSUB 120
650 PRINT "ENTER BOARD LENGTH";: INPUT L
660 PRINT "ENTER BOARD WIDTH";: INPUT W
670 AREA=L*W : IF AREA>0 THEN 700
680 PRINT "ENTER BOARD AREA";: INPUT AREA
690 IF AREA<0.1 THEN 640
700 PRINT "HOW MANY BOARDS WILL YOU ORDER IN THIS BATCH";: INPUT NB
710 TA=AREA*NB : MC=TA*MC
720 REM NOW CALCULATE THE TOTAL NUMBER OF HOLES NEEDED AND THE COMPONENT DENSITY
730 HT=0 : HT=14*I1 : HT=HT+16*I2 : HT=HT+LT : HT=HT+D*2
740 HT=HT+CA*2 : HT=HT+R*2 : HT=HT+Q*3 : HT=HT+P*3
750 HT=HT+CT+SW+TT : EIC=HT/16
760 DENSITY=EIC/AREA : SCHG=1 : IF DENSITY >1 THEN SCHG=DENSITY
770 CLS : LC=AC*SCHG : CPB=CH*HT
780 FMT1$="\                                  \$$,######.##"
790 FMT2$="\                                  \####.##"
800 PRINT TAB(34); "COST SUMMARY" : PRINT
810 PRINT USING FMT1$ ; "LAYOUT CHARGES";LC
820 PRINT USING FMT1$ ; "TOOLING CHARGES";TL
830 PRINT USING FMT1$ ; "MANUFACTURING COST";CPB*NB+MC
840 PRINT USING FMT1$ ; "TOTAL COST        ";CPB*NB+MC+TL+LC
850 PRINT USING FMT1$ ; "COST PER UNIT     ";(CPB*NB+MC+TL+LC)/NB
860 PRINT : PRINT : PRINT "DO YOU WANT A PRINTED COPY (Y/N)";: INPUT A$
870 IF A$<>"Y" THEN 1160
890 GOTO 910
900 PRINT "PLEASE CHECK THE PRINTER ____________ " : INPUT A$: GOTO 880
910 LPRINT CHR$ (12) : REM                 START AT TOP OF PAGE
920 FOR I=1 TO 5 : LPRINT : NEXT I
930 LPRINT TAB(10),"COST ESTIMATE FOR PC BOARDS - JOB #";JOB$
940 LPRINT USING FMT1$ ; "LAYOUT CHARGES";LC
950 LPRINT USING FMT1$ ; "TOOLING CHARGES";TL
960 LPRINT USING FMT1$ ; "MANUFACTURING COST";CPB*NB+MC
970 LPRINT USING FMT1$ ; "TOTAL COST        ";CPB*NB+MC
980 LPRINT USING FMT1$ ; "COST PER UNIT     ";(CPB*NB+MC+TL+LC)/NB
990 LPRINT : LPRINT : LPRINT "ESTIMATE PREPARED BY ";NAM$;" ON ";DA$
1000 LPRINT : LPRINT : LPRINT "RECAP OF INPUT DATA" : LPRINT : LPRINT
1010 LPRINT USING FMT1$ ; "ESTIMATE FOR LAYOUT TIME ";AC
1020 LPRINT USING FMT1$ ; "ESTIMATE FOR TOOLING     ";TL
1030 LPRINT USING FMT2$ ; "COMPONENT DENSITY IS     ";DENSITY
1040 LPRINT "14 PIN ";I1
1050 LPRINT "16 PIN ";I2
1060 LPRINT "LSI    ";IL
1070 LPRINT "NUMBER OF TRANSISTORS    ";Q
1080 LPRINT "NUMBER OF DIODES         ";D
1090 LPRINT "NUMBER OF RESISTORS      ";R
1100 LPRINT "NUMBER OF CAPACITORS     ";CA
1110 LPRINT "NUMBER OF POTS           ";P
1120 LPRINT "NUMBER OF CONNECTORS     ";NC
1130 LPRINT "NUMBER OF SWITCHES       ";NS
1140 LPRINT "NUMBER OF TRANSFORMERS   ";TT
1150 LPRINT CHR$ (12)
1160 END
```
{% endraw %}

## PCBD.DOC

{% raw %}
```
Assists in estimating the production cost of double sided printed
circuit boards.  The user need only make an estimate of the time
required to lay out the board and count the components as they are 
prompted for.  The board size and complexity are taken into account.
A variable and crossreference listing is provided below.  The user may
change the variables listed in line xyz to adjust for local pricing.
The method used is the one described to me by a local board layout and
fabrication company.  It consists of estimating the total number of
hours to actually lay out the board, and adding a surcharge based on
the board density.  The surcharge kicks in above a density of 1.0 EIC's
per square inches.  Then the total number of plated thru holes is
counted.  This is where the program helps--these totals are
automatically tracked, all you need do is count the number of ic's, 
resistors, capacitors and other components.  Then a pricing breakdown
is printed on the screen, and the total cost of producing all the 
boards is distrubuted among the number of boards you are going to make.
The program prompts for all required inputs.  The final results may be
printed on the system printer when finished.
It is up to the user to keep the board dimensions and the number of
components practical.
CREATED ON 05-26-1985 AT 21:15:33
  120              150   190   240   340   490   540   590   640 
  140              110 
  290              330 
  340              300 
  460              480 
  490              470 
  540              520 
  560              580 
  590              570 
  610              630 
  640              620   690 
  700              670 
  880              900 
  910              890 
 1160              870 
A$                 860   870   900 
AC                 220   220   220   770  1010 
AREA               670   670   680   690   710   760 
CA                 440   740  1100 
CH                 140   770 
CPB                770   830   840   850   960   970   980 
CT                 400   480   480   750 
D                  420   730  1080 
DA$                170   990 
DENSITY            760   760   760  1030 
EIC                750   760 
FMT1$              780   810   820   830   840   850   940   950 
                   960   970   980  1010  1020 
FMT2$              790  1030 
HT                 730   730   730   730   730   730   730   730 
                   740   740   740   740   740   740   740   740 
                   750   750   750   770 
I                  920   920 
I1                 270   730  1040 
I2                 280   730  1050 
IL                 290   300   310  1060 
JOB$               180   930 
L                  650   670 
LC                 770   810   840   850   940   980 
LT                 260   310   310   730 
MC                 140   710   710   830   840   850   960   970 
                   980 
NAM$               160   990 
NB                 700   710   830   840   850   850   960   970 
                   980   980 
NC                 460   470   480  1120 
NM                 610   620   630 
NP                 310   310   480   480   530   530   580   580 
                   630   630 
NS                 510   520   530  1130 
NT                 560   570   580 
P                  450   740  1110 
Q                  410   740  1070 
R                  430   740  1090 
RC                 140   220 
SCHG               760   760   770 
SW                 500   530   530   750 
TA                 710   710 
TL                 230   820   840   850   950   980  1020 
TM                 600   630   630 
TT                 550   580   580   750  1140 
W                  660   670 

```
{% endraw %}

## PRINT.BAS

{% raw %}
```bas
2000 DEFDBL A
2010 OPEN "HOLD.DAT" FOR INPUT AS 1
2030 OPEN "IRA.DAT" FOR INPUT AS 2
2050 ON ERROR GOTO 8000
2070 DIM Z$(9),A(4)
2100 DATA " 5 YEARS","10 YEARS","15 YEARS","20 YEARS","AGE 60"
2110 DATA "AGE 62","AGE 65","AGE 70"
2120 FOR I%=1 TO 8: READ Z$(I%): NEXT I%
3140 '
3150 '                     PRINT SECTION
3160 '
3170 WIDTH "LPT1:",90
3190 PPPP$="####,.##": PPP$="###,###": PP1$="###,###.##":PP$="##,###,###"
3200 Q1$="-": Q5$="-----": Q8$="--------": Q10$="----------": Q11$="-----------"
3205 INPUT #1,B$,BA%,BB$,BM$,BC,BD$,BE$,BF,BG%,IR,BI$,BJ$,BY$,BZ,CA,CB,CC
3207 IF BE$="Y" THEN MDD$="ANNUAL "
3208 Z$(9)="AGE"+STR$(BG%)
3210 IF BM$="S" THEN GOSUB 7000: GOTO 3240
3215 IF BY$="R" THEN GOSUB 7425: GOTO 3240
3219 LPRINT CHR$(31)
3220 LPRINT TAB(11);"IRA PLAN ILLUSTRATION"
3221 LPRINT CHR$(24)
3235 LPRINT
3240 LPRINT TAB(3);"PREPARED FOR   "B$;TAB(59);"AGE  ";BA%;"   SEX  ";BB$
3245 LPRINT
3260 LPRINT TAB(3);MDD$;"CONTRIBUTION OF $  ";
3270 IF BC>BZ THEN LPRINT USING PP1$;BC ELSE LPRINT USING PP1$;BZ;
3280 '            LPRINT TAB(50);"DATE ";BJ$
3290 LPRINT TAB(19+LEN(MDD$));
3295 IF BM$="S" OR BY$="R" GOTO 4000
3301 LPRINT CHR$(31)
3305 LPRINT TAB(11);"INCOME TAX BREAKDOWN"
3306 LPRINT CHR$(24)
3320 LPRINT
3330 LPRINT TAB(7);"1.  ANNUAL CONTRIBUTION (not to exceed smaller of 100% of"
3340 LPRINT TAB(11);"earned income or $2,000; or for Spousal IRA, 100% of
3350 LPRINT TAB(11);"earned income or $2,250; or for couple, both with earned"
3360 LPRINT TAB(11);"income; 100% or $4,000)";TAB(69);"$";
3370 IF BD$="A" THEN LPRINT USING PP1$;BC ELSE LPRINT USING PP1$;BZ
3380 LPRINT TAB(69);Q11$
3390 LPRINT TAB(7);"2.  YOUR CURRENT TAX RATE";TAB(79-LEN(STR$(BF)));STR$(BF);"%"
3400 LPRINT TAB(69);Q11$
3410 LPRINT TAB(7);"3.  TAX SAVINGS IN FIRST YEAR";TAB(70);:LPRINT USING PP1$;CA
3420 LPRINT TAB(69);Q11$
3430 LPRINT TAB(7);"4.  CURRENT OUT-OF-POCKET CONTRIBUTION"
3440 LPRINT TAB(11);"(line 1 - line 3)";TAB(69);"$";:LPRINT USING PP1$;CB
3445 LPRINT TAB(69);Q11$
3450 LPRINT TAB(7);"5.  TAX SAVINGS IS EQUIVALENT TO A RETURN ON OUT-OF-POCKET"
3460 LPRINT TAB(11);"CONTRIBUTION OF "
3470 LPRINT TAB(11);"(line 3 / line 4)";TAB(79-LEN(STR$(CC)));STR$(CC);"%"
3480 LPRINT TAB(69);Q11$
3490 LPRINT TAB(7);"   NOTE:  NO TAX IS PAYABLE ON INTEREST ACCUMULATIONS"
3500 LPRINT TAB(17);"WHILE YOUR CONTRIBUTIONS REMAIN IN THE PLAN."
3510 '
4000 LPRINT CHR$(31)
4001 LPRINT:LPRINT TAB(10);"ACCUMULATED CASH VALUE"
4002 LPRINT CHR$(24)
4025 LPRINT
4030 LPRINT TAB(3);"SINCE IT IS IMPOSSIBLE TO ACCURATELY PROJECT AN EARNINGS RATE INTO THE"
4040 LPRINT TAB(3);"FUTURE, WE BELIEVE THE FOLLOWING PROJECTIONS WILL BE BENEFICIAL.  THESE"
4050 LPRINT TAB(10);"PROJECTIONS ARE NOT A GUARANTEE OF FUTURE INTEREST RATES."
4060 LPRINT:LPRINT TAB(3);"THE ACCUMULATIONS SHOWN BELOW REFLECT A CONTRIBUTION OF $";
4070 LPRINT USING PP1$;BC;
4080 IF BD$="M" OR BE$="Y" THEN LPRINT" PER";:GOTO 5000
4090 LPRINT
5000 IF BD$="M" THEN LPRINT TAB(10);"MONTH ";:GOTO 5020
5010 IF BE$="Y" THEN LPRINT TAB(10);"YEAR "; ELSE LPRINT TAB(3);
5020 LPRINT"COMPOUNDED AT THE STATED INTEREST RATES TO MATURITY."
5030 LPRINT:LPRINT TAB(7);"INTEREST RATE:";TAB(31);"8%";TAB(44);"10%";TAB(58);"12%";TAB(72);STR$(IR);"%"
5040 FOR I%=1 TO 26:LPRINT" ";:NEXT I%
5050 FOR I%=1 TO 4: LPRINT Q8$;"      ";:NEXT I%
5060 FOR I%=1 TO 9
5070 LPRINT
5072 IF I%=5 THEN LPRINT
5075 T%=25
5080 INPUT #2,A(1),A(2),A(3),A(4)
5085 IF I%=9 AND A(1)=0 GOTO 5150
5090 LPRINT TAB(7);Z$(I%);TAB(T%);
5100 FOR B%=1 TO 4
5115 LPRINT USING PP$;A(B%);
5120 T%=T%+14
5130 LPRINT TAB(T%)
5140 NEXT B%
5150 NEXT I%
5160 IF BM$="S" OR BY$="R" THEN LPRINT: LPRINT: GOTO 5220
5170 LPRINT:LPRINT:LPRINT TAB(7);"Page 1 of 2";TAB(56);BJ$
5172 LPRINT CHR$(31)
5175 LPRINT CHR$(24)
5180 LPRINT CHR$(12)
5185 LPRINT:LPRINT TAB(7);"Page 2"
5189 LPRINT CHR$(31)
5192 LPRINT TAB(11);"IRA PLAN ILLUSTRATION"
5194 LPRINT CHR$(24)
5200 LPRINT:LPRINT TAB(7);B$
5210 LPRINT
5220 LPRINT
5225 LPRINT CHR$(31)
5230 LPRINT TAB(11);"MONTHLY INCOME FIGURES"
5235 LPRINT CHR$(24)
5240 LPRINT
5250 IF BM$="I" AND BY$<> "R" THEN LPRINT
5260 LPRINT TAB(24);"LIFE ONLY"TAB(50);"LIFE WITH 10 YEARS CERTAIN": LPRINT
5270 FOR I%=5 TO 9
5280 INPUT #2,A(1),A(2)
5290 IF I%=9 AND A(1)=0 THEN LPRINT: GOTO 5330
5300 LPRINT TAB(7);Z$(I%);TAB(24);:LPRINT USING PPP$;A(1);
5310 LPRINT TAB(58);:LPRINT USING PPP$;A(2)
5330 NEXT I%
5340 LPRINT:LPRINT TAB(3);"THE PROJECTIONS OF MONTHLY INCOME AMOUNTS ARE BASED ON CURRENT ANNUITY RATES"
5350 LPRINT TAB(3);"AND CURRENT INTEREST RATES.  THESE RATES ARE NOT GUARANTEED.
5390 LPRINT:LPRINT TAB(3);"THIS IS AN ILLUSTRATION NOT A CONTRACT, AND IS BASED UPON INFORMATION"
5392 LPRINT TAB(3);"PROVIDED BY ";B$;"."
5400 IF BM$="I" AND BY$<>"R" THEN GOSUB 7400
5420 LPRINT TAB(3);"PRESENTED BY:  ";BI$;TAB(56);BJ$
5425 LPRINT CHR$(31)
5435 LPRINT CHR$(24)
5450 LPRINT CHR$(12)
5460 IF ENSW$="Y" GOTO 9000
5470 GOTO 3205
5480 '
7000 LPRINT CHR$(31)
7005 LPRINT:LPRINT TAB(6);"SINGLE PREMIUM DEFERRED ANNUITY"
7008 LPRINT CHR$(24)
7010 LPRINT CHR$(24)
7020 LPRINT:LPRINT
7030 RETURN
7040 '
7400 FOR I%=1 TO 28: LPRINT: NEXT I%
7410 RETURN
7420 '
7425 LPRINT CHR$(31)
7500 LPRINT:LPRINT TAB(9);"IRA ROLLOVER ILLUSTRATION"
7505 LPRINT CHR$(24)
7520 LPRINT:LPRINT
7530 RETURN
7540 '
8000 ENSW$="Y"
8003 IF ERR = 24 THEN RESUME
8004 IF ERR = 62 THEN 9000
8010 PRINT ERR,ERL
8020 LPRINT CHR$(12)
9000 CLOSE:END
```
{% endraw %}

## SCRNAMRT.BAS

{% raw %}
```bas
1000 REM SAVE "SCRNAMRT.BAS"
1010 REM THOMAS E. RADKIEWICZ
1020 REM APRIL 12, 1985
1030 REM ********************
1040 DIM IR(51),A(51)
1050 CENTURY = 19
1060 CLS
1070 PRINT:PRINT
1080 PRINT "THOMAS RADKIEWICZ LOAN AMORITZATION PROGRAM "
1090 PRINT "      (419) 241-8800 EXT. 25":PRINT
1100 LOCATE 6,1:INPUT "Do you want instructions (Y/N): ";ANS$
1110 IF (ANS$="Y") OR (ANS$="y") THEN GOSUB 1930
1120 CLS
1130 TOTALPYMNT = 0
1140 TOTALINTR  = 0
1150 TOTALPRIN  = 0
1160 PAGE = 0
1170 TERMCOUNT  = 0
1180 HEADER = 1
1190 PRINT:PRINT
1200 INPUT "What is your Client Name:            ";A$:PRINT
1210 INPUT "Input starting month (e.g. 6):       ";MONTH:PRINT
1220 INPUT "Input starting year  (e.g. 82)       ";YEAR:PRINT
1230 INPUT "Input beginning balance:             ";BAL:PRINT
1240 INPUT "Input monthly payment:               ";PYMNT:PRINT
1250 INPUT "Input annual interest rate (e.g. 9): ";INTR:PRINT
1260 INPUT "Input Loan term: (MONTHS)            ";TERM:PRINT
1270 INTR = INTR/100!/12!
1280 PRINT
1290 COLOR 0,7
1300 IF PYMNT =0 THEN PYMNT = BAL*INTR/(1-(1+INTR)^-TERM):                                              PRINT USING "PAYMENT IS  #######,.##";PYMNT
1310 IF TERM =0 THEN TERM  = -((LOG(1-BAL*INTR/PYMNT)/LOG(1+INTR))):                                   PRINT USING "TERM IS     #### MONTHS";TERM
1320 TERM = INT(TERM + 0.4)
1330 IF BAL =0 THEN BAL  = PYMNT * (1-(1+INTR)^-TERM)/INTR:                                           PRINT USING  "BALANCE IS  #######,.##";BAL
1340 IF INTR=0 THEN GOSUB 2150
1350 COLOR 7,0
1360 LOCATE 21,1:INPUT "How many months do you wish to project:  ";M1
1370 IF M1<=0 THEN :LOCATE 21,1:PRINT STRING$(70," "):GOTO 1360
1380 IF M1>TERM THEN PRINT:PRINT"You can't project longer than the term (";TERM;")":LOCATE 21,1:PRINT STRING$(79," "):GOTO 1360
1390 GOSUB 1420
1400 GOTO 1590
1410 REM ********* HEADER SUBROUTINE *************
1420 PRINT
1430 PAGE = PAGE + 1
1440 PRINT CHR$(12)
1450 PRINT TAB(25);"PREPARED FOR ";A$
1460 PRINT TAB(25);DATE$;TAB(39);"PAGE: ";PAGE
1470 PRINT
1480 PRINT
1490 PRINT:PRINT
1500 PRINT USING "Beginning Balance -----------  ########,.##";BAL
1510 PRINT
1520 PRINT USING "Annual Int. Rate  -----------     ######.##_%";INTR*1200
1530 PRINT
1540 PRINT
1550 PRINT "Month    Year     Payment      Interest      Principal        Balance"
1560 PRINT "-----    ----     -------      --------      ---------        -------"
1570 RETURN
1580 REM *****************************************
1590 PINTR = INTR * BAL
1600 TERMCOUNT = TERMCOUNT + 1
1610 IF (TERMCOUNT <> TERM) THEN PPRIN = PYMNT - PINTR : BAL =BAL - PPRIN ELSE          PPRIN = BAL+0.005: PYMNT = PINTR + PPRIN:BAL = 0!
1620 TOTALPYMNT = TOTALPYMNT + PYMNT
1630 TOTALINTR  = TOTALINTR  + PINTR
1640 TOTALPRIN  = TOTALPRIN  + PPRIN
1650 PRINT USING "  ##      ##   ######,.##   #######,.##    #######,.##  #########,.##"          ;MONTH,YEAR,PYMNT,(PYMNT - PPRIN),PPRIN,BAL
1660 YI = YI + PINTR
1670 YR = YR + PPRIN
1680 YP = YP + PYMNT
1690 MONTH = MONTH + 1
1700 IF MONTH =13 THEN GOSUB 1730
1710 IF (TERMCOUNT <> M1) THEN 1590 ELSE GOTO 1830
1720 REM ****** PRINT YTD TOTALS ***********
1730 PRINT "               ----------   -----------    -----------    -----------"
1740 PRINT USING " YEAR   ####   ######,.##   #######,.##    #######,.##  #########,.##"          ;(CENTURY * 100)+YEAR,YP,(YP-YR),YR,BAL
1750 PRINT
1760 YP=0
1770 YI=0
1780 YR=0
1790 MONTH = 1
1800 YEAR = YEAR + 1:IF (YEAR=100) THEN YEAR = 0:CENTURY=CENTURY + 1
1810 RETURN
1820 REM *****************************
1830 IF (MONTH <>1) THEN GOSUB 1730
1840 PRINT
1850 PRINT "               ----------   -----------    -----------    -----------"
1860 PRINT USING " GRAND TOTAL   ######,.##   #######,.##    #######,.##  #########,.##"          ;TOTALPYMNT,TOTALINTR,(TOTALPYMNT - TOTALINTR),BAL
1870 PRINT "               ==========   ===========    ===========    ==========="
1880 PRINT "               ==========   ===========    ===========    ==========="
1890 PRINT
1900 INPUT "Do you wish to run another amortization: (Y/N)  ",ANS$
1910 IF (ANS$="Y") OR (ANS$="y") THEN GOTO 1120 ELSE CLS:RUN "AMRTMENU.BAS"
1920 REM ****** INSTRUCTION SUBROUTINE ***********
1930 CLS
1940 PRINT:PRINT
1950 PRINT "This program computes and prints a loan amortization schedule"
1960 PRINT "showing loan payments, interest expense, reduction of principal"
1970 PRINT "and remaining balance by month.  The schedule is printed in"
1980 PRINT "workpaper format and includes yearly subtotals and a grand total"
1990 PRINT "for all columns.  You can choose to print a complete schedule,"
2000 PRINT "or to stop printing before the loan is fully amortized."
2010 PRINT
2020 PRINT "The program also can perform annuity calculations to compute"
2030 PRINT "missing variables as long as you know three of the following:"
2040 PRINT
2050 PRINT "     1) Beginning Loan Balance"
2060 PRINT "     2) Monthly Payments"
2070 PRINT "     3) Annual Interest Rate"
2080 PRINT "     4) Loan Term in Months"
2090 PRINT
2100 PRINT "Simply input a ";:COLOR 30,1:PRINT "0";:COLOR 7,0:PRINT" when you are prompted for the value of the"
2110 PRINT "unknown variable, and the program will compute the missing value."
2120 PRINT:INPUT "Key any key to continue: ",ANS$
2130 RETURN
2140 REM ***** ESTIMATE THE IMPLICIT INTEREST RATE *******
2150 IR(1) = 0.12
2160 A(1)  = BAL-PYMNT * (1-1.12^-TERM)/0.12
2170 IF A(1)=0 THEN 2280
2180 IF A(1)<0 THEN IR(2)=0.2 ELSE IR(2)=0.06
2190 A(2)=BAL - PYMNT * (1-(1+IR(2))^-TERM)/IR(2)
2200 C = 2
2210 D = ABS(A(C) - A(C-1))
2220 IR(C+1) = IR(C) - SGN(A(C)) * (ABS(A(C) / D) * ABS (IR(C) - IR(C-1)))
2230 IF IR(C+1)<=0 THEN IR(C+1)=0.005:REM **** RATE CAN'T GOTO ZERO.
2240 A(C+1) = BAL - PYMNT * (1-(1+IR(C+1))^-TERM)/IR(C+1)
2250 IF ABS(A(C+1)/BAL) < 0.00001 OR C>20 THEN 2280
2260 C = C+1
2270 GOTO 2210
2280 INTR = IR(C+1)
2290 INTR = INT(INTR * 1000000!+0.5) / 1000000!
2300 PRINT USING "INT. RATE =  #######.##_%";INTR * 1200
2310 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0440

     Volume in drive A has no label
     Directory of A:\

    AMORT    ABS        62   7-10-85   4:01p
    AMORT    BAS      5311   7-10-85   3:53p
    AMRTMENU ABS        57   7-10-85   4:00p
    AMRTMENU BAS       433   7-10-85   3:59p
    AUTOEXEC BAT        11   3-30-86   4:04a
    CAPSLOCK COM        26   8-12-84   9:36p
    CLEAR    EXE     23040   5-04-85   5:13p
    COMMENT  MEM        69   2-02-87   9:02p
    FILES440 TXT      2298   3-09-89   9:15a
    FILEFIX  ABS       105   5-27-85   8:01p
    FILEFIX  ASC      1920   5-27-85   8:07p
    FILEFIX  BAS      1672   5-27-85   8:07p
    FILEFIX  COM     13041   5-14-85   8:09p
    FILEFIX  DOC      1818   5-27-85   8:54p
    FILEFIX  PAS      6877   5-14-85   8:04p
    GBILL    DOC     15137   5-07-85   9:52p
    GBILL    EXE     44928   5-07-85   8:35p
    GO       BAT      1519   9-14-88   3:45p
    HOLD     DAT         1   1-01-80  12:00a
    IRA      BAS     12260   1-01-80  12:01a
    IRA      DAT         1   1-01-80  12:00a
    PCBD     ABS        84   5-26-85   9:53p
    PCBD     ASC      4346   5-26-85   9:19p
    PCBD     BAS      4346   5-26-85   9:20p
    PCBD     DOC      3774   5-26-85  10:00p
    PRINT    BAS      4092   1-01-80  12:01a
    READ-ME           1152   5-09-85   6:55a
    READ     BAT        25   9-06-85   9:43p
    READ     ME        298   5-26-85   9:53p
    SCRNAMRT ABS        61   7-10-85   4:02p
    SCRNAMRT BAS      5199   7-10-85   3:54p
    SETUP    EXE     27008   5-04-85   5:15p
           32 file(s)     180971 bytes
                          120832 bytes free
