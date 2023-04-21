---
layout: page
title: "PC-SIG Diskette Library (Disk #655)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0655/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0655"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "KWIKSTAT 2 OF 2 (ALSO 654)"

    KWIKSTAT is a scientific statistical analysis system complete with
    graphics.  You can import ASCII files, dBase III files or build your own
    databases.  KWIKSTAT is menu-driven, with six separate modules:
    
    ~ DATA    -- Create a database, enter and edit data.
    
    ~ REPORTS -- Export data to another program; display the structure of a
    selected database and access DOS without exiting.
    
    ~ STAT1   -- Descriptive statistics and graphical representations such
    as histograms, scatterplots and box plots.
    
    ~ STAT2   -- Explore comparative statistics with t-tests on paired or
    matched data and one way analysis of variance (ANOVA).
    
    ~ STAT3   -- Perform simple linear and multiple regression analyses.
    
    ~ STAT4   -- Deal with various methods to analyze categorical data, as
    opposed to measured data.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0655.TXT

{% raw %}
```
Disk No:  655
Program Title:  KWIKSTAT version 2.00 (Disk 2 of 2)
PC-SIG version:  2

KWIKSTAT is a graphics-oriented program for scientific statistical
analysis.  It can import ASCII files and DBF (dBase III) files, as well
as building its own databases.  It is entirely menu-controlled.  There
is a brief tutorial with the program, but it assumes knowledge of
statistics.  Full documentation is on this disk. For a more in-depth
description of the program please refer to disk #654.

Usage:  Statistical Analysis.

Special Requirements:  Two floppy disk drives.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

APPLE    IMG  Image file.
BAR1     IMG  Image file.
BAR2     IMG  Image file.
BEETLE   IMG  Image file.
CAT      IMG  Image file.
EPSON    COM  Epson printer driver.
EX       DAT  Some sample ASCII data files.
EXAMPLE  DBF  Sample database file.
HKS      BAT  Batch file to start program on system with Hercules card.
KS       BAT  Start-up batch file.
KS       DOC  Main documentation.
KS20CROS EXE  KwikStat module.
KS20LIFE EXE  KwikStat module.
KS20UTIL EXE  KwikStat module.
KWIKLOAD BAT  Used to load KwikStat to hard disk.
KWIKSTAT HLP  Help Screen.
LASERJET EXE  HP LaserJet driver.
LATENEWS DOC  Documentation.
LIFE     DBF  Sample database file.
LONGLEY  DBF  Sample database file.
ORDER         Order form.
PC       IMG  Image file.
Person   IMG  Image file.
PRINTERS DOC  Printer information.
QBHERC   COM  CGA emulator for Hercules owners.
READ     ME   Start-up information.
SCRNDUMP COM  Graphics dump utility.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## KS.DOC

{% raw %}
```






                                  KWIKSTAT 2.00

                            Condensed Manual on Disk

                            Statistical Data Analysis
                       for IBM PC and Compatible Computers

                               by Alan C. Elliott


                          TexaSoft/Mission Technologies
                                  P.O. Box 1169
                             Cedar Hill, Texas 75104
                                  214-291-2115
                                  Version 2.00

                        (C)Copyright 1989 Alan C. Elliott






     ALL RIGHTS RESERVED

     All rights reserved. Printed in the United States of America. No part
     of this book may be reproduced without prior permission. For
     information, address TexaSoft, P.O. Box 1169, Cedar Hill, Texas 75104.

     No patent liability is assumed with respect to the use of the
     information contained herein. While every precaution has been taken in
     the preparation of this publication, the publisher assumes no
     responsibility for errors or omissions. Neither is any liability
     assumed for damages resulting from the use of the information herein.
















          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        1

          KWIKSTAT 2.00
          ___________________________________________________________

                              ORDER BLANK FOR KWIKSTAT
                               DISTRIBUTOR SN:K200789W

     KWIKSTAT software package, bound manual, latest version
     registration, diskettes              ($49) x _______= $____________

     KWIKSTAT 10-PACK - Ten full copies  ($299) x _______= $____________

     KWIKSTAT Manuals                ($10 each) x _______= $____________
     (You must be a registered user to order manuals)

     Automatic KWIKSTAT update to next future version,
     disks and manual                     ($25) x _______= $____________

     Printer support disk for users with Hercules (Monographics)
     monitors and/or Laserjet/Paintjet     ($5) x _______= $____________

     Add $4 Postage & Handling or $8 if PO, COD or RUSH,   $____________
     $15 for Express Mail or add $10 if overseas.

     Texas Residents add 7% sales tax                      $____________

     TOTAL ENCLOSED                                        $
                                                            ============
     -------------------------------------------------------------------
     Specify:    ____5 1/4 inch disk or      ____ 3.5 inch disk
     -------------------------------------------------------------------
     Check one:___Check or M.O. ___MC ___VISA  ___ P.O. #___________
     -------------------------------------------------------------------

       IF CREDIT CARD:Name on card:_________________________________

       Card Number is:____________________________Exp Date__________

       Authorized Signature:________________________________________
     -------------------------------------------------------------------

       Mail order to:____________________________________________

       Address:__________________________________________________

       City, State, Zip:_________________________________________

       Phone (    )______________________________________________
     -------------------------------------------------------------------
     Mail to:TexaSoft, P.O. Box 1169, Cedar Hill, TX 75104. Thanks!
     Guaranteed satisfaction or return for a full refund. Phone Orders
     (Visa, MasterCard): Call 214-291-2115. ORDER NOW!




          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        2

          KWIKSTAT 2.00
          ___________________________________________________________

     INSTALLING KWIKSTAT

     KWIKSTAT is distributed on two diskettes, Disk 1 and Disk 2. These
     diskettes contain the KWIKSTAT programs and supporting files.

     REQUIREMENTS TO RUN KWIKSTAT

     1. An IBM PC or compatible computer.
     2. DOS 2.0 or higher.
     3. At least 320K of memory.
     4. A graphics, CGA, EGA, VGA or Hercules graphics type monitor. (If
     you have  a standard monochrome (IBM type) screen, the calculated
     results will still be  ok, but the graphics will not be displayed.)

     INSTALLING KWIKSTAT ON YOUR HARD DISK

     A hard disk is recommended for using KWIKSTAT, although individual
     programs can be run from a floppy disk. The procedure described here
     loads KWIKSTAT on the hard disk drive C:, in a subdirectory named
     C:\KWIKSTAT.

     STEP 1: Place the KWIKSTAT disk number 1 in drive A:. Make disk A: the
     default drive, by entering the command:

     C>A:

     Next, enter the command:

     A>KWIKLOAD C:

     Follow the instructions on the screen, and all necessary files will be
     loaded. If you want the program loaded on a hard disk other than C:,
     place the disk drive name (e.g. D:) in the KWIKLOAD command in place
     of the C:.

     STEP 2: In order to print a graphics plot to the printer, the DOS
     command file GRAPHICS.COM must be loaded into memory. (Hercules
     graphics may require a special print program. See information in the
     appendix of this manual.) The command GRAPHICS is in the KS.BAT file
     used to begin KWIKSTAT. In order for DOS to know where to find the
     GRAPHICS.COM command, you must place a PATH command in your
     AUTOEXEC.BAT file that points to the directory where the GRAPHICS
     command resides.

     FOR FLOPPY DISK OPERATION

     KWIKSTAT modules (.EXE) programs may be run independently, as long as
     the runtime module (BRUN40.EXE) is also on disk. If you are using a
     floppy-disk based system, you may generally put three or four KWIKSTAT
     programs on a disk. The programs are named KS20????.EXE, where ???? is
     DATA, STAT, AOV1, REG, CROS, LIFE and UTIL. Copy the most used
     programs, and the files KSMENU.INI and KWIKSTAT.HLP on a diskette
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        3

          KWIKSTAT 2.00
          ___________________________________________________________

     along with the BRUN40.EXE and copy the remaining programs on another
     diskette.

     When running KWIKSTAT on floppies, place the program disk in drive A:
     and the data disk in B:. In the UTILITIES module, set up your default
     path to B:\. This will create a file called "KSTAT.INI". From DOS,
     copy that file to your other program disk. The KSTAT.INI file tells
     KWIKSTAT where your data is stored. While running KWIKSTAT you will
     never need to change disks unless you attempt to run a program that is
     not on the default disk. When you want to run such a program, KWIKSTAT
     will prompt you to switch disks. You will not have to change the data
     disk in drive B:. Never change the data disk while a KWIKSTAT program
     is running.

     If you are using a 3.5 inch disk or a 5 1/4 inch 1.2 megabyte disk
     system, you can fit all of the KWIKSTAT programs on one disk.

     INSTRUCTIONS FOR OPERATION

     From the hard disk prompt "C", get into the KWIKSTAT directory using
     the command:

     C>CD \KWIKSTAT

     To begin KWIKSTAT, enter the command:

     C>KS

     MONITOR AND PATH SETUP

     To setup KWIKSTAT for the monitor you are using, and for the path to
     your data, select the SETUP option in the UTILITY module, and select
     the appropriate choice for the path to your data.

     LATENEWS

     Print the file LATENEWS.DOC to get the latest information on Kwikstat.
     It may include information on new features or changes not included in
     this manual.

     A KWIK TUTORIAL

     This short tutorial will give you a feeling for how to use KWIKSTAT.
     It will assume you are using KWIKSTAT on a hard disk. Begin KWIKSTAT
     with the KS command. After the intro screen, notice the menu.

     Items lettered A to I are procedures of THIS module.  Items numbered 1
     to 7 are additional modules. Items 1 to 7 will always stay the same.
     Lettered menu items change depending which module you are currently
     using.


          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        4

          KWIKSTAT 2.00
          ___________________________________________________________

     THE HELP SCREEN

     To examine the HELP menu, press the F1 function key. The HELP menu
     lists major topics, and the screen number. To look at a particular
     topic, enter the screen number you desire. For example, look at screen
     7. Type the number 7, and press Enter:

     Enter SCREEN NUMBER or Enter to Cancel:7

     KWIKSTAT displays screen 7. To move to screen number 8, press Enter.
     To go back to the menu, type the "M" key. To exit the HELP module,
     press the "Esc" key. Press the Esc key now. This takes you back to the
     main KWIKSTAT DATA module menu. Every module has the help screens
     available. The help facility is always selected from a KWIKSTAT main
     menu, by pressing F1.

     EXAMPLE OF DESCRIPTIVE STATISTICS

     This example will use data already stored in a dBASE ".DBF" file
     currently on the KWIKSTAT disk. To go to the Descriptive Statistics
     "STAT" module, type 1 at the DATA module menu. It takes a few seconds
     to swap modules. Soon, you will see an initial screen which gives a
     directory of all ".DBF" files on disk. The program prompts you to
     choose the database to use. For this example, enter the name EXAMPLE.

     KWIKSTAT will usually "remember" the last database you used, and will
     automatically read in that database when a module is begun. In this
     case, choosing a database is skipped, and you immediately go to the
     main module menu. Enter dBASE III file to use (.DBF assumed):EXAMPLE
     KWIKSTAT will load the file, and present the Descriptives Statistics
     menu. (NOTE:There are some procedures which do not require input from
     a database. By entering a blank name, you may proceeded with no
     database in use.) If KWIKSTAT does not find the EXAMPLE database, you
     may not be in the KWIKSTAT subdirectory, or you may not have loaded
     KWIKSTAT correctly. If so, return to the installation instructions and
     try again.

     From the STAT menu, press the letter B to choose Descriptive
     Statistics. The program now displays the variables available for
     analysis from the database. In the variable selection menu only the
     numeric variables are available, since it doesn't make sense to find
     the mean of a character variable.

     Enter the number 2 to select the AGE variable, and press Enter. The
     program will now perform a series of calculations on the data, and
     will produce a screen of descriptive statistics, and a box plot of the
     data.

     If you want a printed copy of this screen, MAKE SURE YOUR PRINTER IS
     TURNED ON, and is ON LINE, and HAS PAPER. Then, press Shift-Prtsc.
     Notice that this is a graphics screen, and generally takes longer to
     print than a normal screen. Any time you want a copy of the results on
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        5

          KWIKSTAT 2.00
          ___________________________________________________________

     the screen, use the Shift-Prtsc command (some versions of the PC
     keyboards have a print screen command that does not require a shift).

     IF THE SCREEN DOES NOT PRINT PROPERLY: You may not have the GRAPHICS
     command properly implemented - see installation again. Check your
     printer manual and the appendix on printers and monitors.

     To return to the main menu, press the Esc key. From the main menu, to
     end KWIKSTAT and return to DOS, press Esc. Optionally, you could have
     swapped to any other KWIKSTAT module. This ends the brief tutorial.

     IF SOMETHING GOES WRONG

     If something goes wrong, check the manual, and check your work. If you
     cannot seem to resolve the problem, please fill out the BUG REPORT in
     the appendix, and send it in right away, so that errors in the program
     can be eliminated. If you have a suggestion for how to improve
     KWIKSTAT, please fill out the USER'S BALLOT in the appendix. Thanks.

     ERROR CODES

     The KWIKSTAT program is written in QuickBASIC, a Microsoft Product.
     When error codes appear, you may often look these codes up in the
     Appendix of your IBM or Microsoft BASIC manual. Some error codes are
     given in an appendix to this manual. Sometimes an error is caused by
     something that is easy to fix, such as a full disk, or a write protect
     tab on a disk. If it looks like a program bug, PLEASE fill out a bug
     report form, and mail it in.


     KWIKSTAT DATA MODULE

     The KWIKSTAT data module (KS20DATA.EXE) is used to manage your data.
     In this module you enter data, change data, create new data fields
     from existing ones, and perform other data maintenance tasks. Once
     your data is in the KWIKSTAT (dbase III-type) database, you can access
     it from any of the other KWIKSTAT modules. Some of the KWIKSTAT
     procedures require that you have data in a file before you can do an
     analysis. Other procedures allow you to enter information from the
     keyboard at the time you request the procedure. Some procedures give
     you an option to enter data from a database, or from the keyboard.

     Compatibility With Dbase III

     A KWIKSTAT database uses the same file format as the dBASE III
     program. Therefore, data already stored in a dBASE III file may be
     read directly into all the KWIKSTAT programs.





          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        6

          KWIKSTAT 2.00
          ___________________________________________________________

     THE DATA MODULE MENU

     Details on Specific Procedures

     The following explanation describes the options within the DATA
     module.

     A) CREATE A NEW DATABASE STRUCTURE

     The CREATE option is used to create a new database.  The structure, or
     layout, of a database must be described before you enter your data.
     You need to give some thought to how your database will "look" so it
     will be in the proper format to do the analysis you desire.

     Do You Need a Grouping Variable?

     If you have information on several groups, you should have a grouping
     variable as a part of your database. A grouping variable could be
     either character (e.g. A,B,C etc) or numeric (e.g. 1,2,3, etc). If you
     may subset your database in the future, use numbers for grouping
     variables, since subsetting requires comparisons of numeric variables
     to work. See the example analyses for help in setting up your database

     Name Your Database

     When you choose the A option, the program will ask you to specify a
     name for the database. The name may be up to 8 characters in length,
     DO NOT include an extension to the name, and the name should obey DOS
     naming conventions. (Do not use blanks, commas, periods, slashes, etc.
     in the name.)

     The extension ".DBF" will be assigned to the database file name. Once
     you have named the database, you will define the fields -- names of
     the places where the data will be stored. Name your variable in such a
     way to make the name descriptive. Names may be up to 10 characters in
     length. For example, if age is one of the pieces of data you
     collected, name that variable AGE. Other example names might be
     WEIGHT, GROUP, SYSBP, etc.

     In order for you to name each field, and to tell KWIKSTAT how much
     space to allocate for storing the information, KWIKSTAT will display
     highlighted areas to enter Name, Type, Width, and number of Decimal
     places for each field in the database structure, as illustrated D.2.

     Define the Fields in Your Database

     When you first enter the definition mode, the blinking cursor will be
     in the FIELD NAME area. Enter a name, and press the ENTER key. The
     name you choose will be displayed in all capital letters, and the
     cursor will move to the next area, TYPE.

     In the TYPE area, you only need to enter the first character of the
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        7

          KWIKSTAT 2.00
          ___________________________________________________________

     type, (N, C, L or D), then press the ENTER key. If your choice is
     NUMERIC, simply press ENTER when your cursor moves to this area, as
     this is the default TYPE. The cursor moves to the WIDTH area, unless
     TYPE is Logical or Date. KWIKSTAT allows you to define Logical and
     Date variables, but it will only read and use Numeric or Character
     type variables.

     WIDTH is the number of characters reserved for the entry. Decimal is
     the number of decimal places (only relevant for numbers). The number
     of decimal places must be at least one less than the width. For
     example, if a number has the format ###.##, the width is 6 (count the
     decimal point), and the number of decimal places is 2. If DATE or
     LOGICAL is entered as type, the program will automatically assign a
     width of 8 or 1 respectively.

     Once a complete field description is entered, a next blank field
     description will appear, ready for entry. To end the creation process,
     type Control-END (^END). The End key is on the numeric pad. As long as
     you have not ended the procedure, you may use the cursor keys to back
     up, and make any corrections.

     If you mess up, end the procedure with Esc and begin again. After
     entering information, press CTRL-End (^End) to exit and save the
     created database.

     If you want to enter data from the keyboard, answer "Y" to the
     question

     ENTER DATA FROM KEYBOARD NOW (Y/N)

     Otherwise answer "N".  You can always enter the data later, or add to
     data already in a database.

     TYPES OF DATABASE FIELDS

     1. The FIELDNAME:A fieldname must be 1 to 10 characters in length and
     MUST begin with a character (a to z). Upper and lower case DO NOT
     matter, since the name is always translated into all upper case.

     2. The TYPE:Type may be

     CHARACTER - May contain any character.

     NUMERIC - Must contain numbers only.

     DATE or LOGICAL fields can be created, but KWIKSTAT will only use
     Numeric and Character fields.

     3. The WIDTH of the field: Choose a width so that the maximum number
     of characters will fit into the field.

     4. DECIMALS:Decimals are only valid for numeric fields. This specifies
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        8

          KWIKSTAT 2.00
          ___________________________________________________________

     to KWIKSTAT how many decimals to retain in the field.

     LIMITATIONS TO THE KWIKSTAT DATABASE:

     Maximum of 128 fields.
     Maximum width of a field name is 10 characters.
     Maximum width of a cell is 60 characters (15 for numbers)
     Dates are always 8 characters and logical fields are 1 characters
     wide.

     B) ENTER DATA - INPUT DATA FROM KEYBOARD OR ASCII FILE

     When you choose this option, you will be asked to specify entry from
     the keyboard or from a file (ASCII file). For most small data sets,
     you will probably enter data from the keyboard. If you choose to enter
     data from the keyboard, an entry screen will appear containing the
     fields you created in the CREATE option. Enter data in the same way
     the field descriptions were entered. If you need to go back to a
     previously entered record to edit, pressing the PgUp key will
     automatically place you into edit mode. To end keyboard entry, press
     ^End. If the number of fields is too many to be displayed on one
     screen, you may use the Up and Down arrow keys to reveal the following
     pages of entry fields.

     If you choose to enter data into a database from a file (or to append
     data to an already existing database), you will be asked the name of
     the raw data file. As will be described later in detail, the data in
     the file must match the database structure.

     The data will be entered into the database, and a count of the records
     as they are entered will be displayed. It is a good idea to go to the
     KWIKLIST procedure to look at the data to verify that it has been
     entered correctly, or print the data out using the UTILITIES module
     report option. If the data does not match the fields, refigure the
     widths of each field to make sure it matches the columns of data in
     the disk file, and try again.

     C) EDIT RECORDS IN THE DATABASE

     If there is a need to change data already in a database, you may
     choose the EDIT option. You will be asked for the name of the
     database, and the specific record number you wish to edit. Once in the
     EDIT mode, you may use the PgUp and PgDn keys to move to records
     before or past the one you are currently editing. If you are entering
     data, and press the PgUp key, the program automatically places you in
     edit mode.

     In the edit mode, you may specify that certain records are marked for
     delete. This is done by typing a ^U (CTRL-U) while you are editing a
     specific record. A **DEL** will appear on the screen of a deleted
     record. Often in procedures, specifically in REPORT, you are asked if
     you want the program to skip records marked for delete. In Edit,
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        9

          KWIKSTAT 2.00
          ___________________________________________________________

     deleted records may be recovered by pressing ^U a second time, and the
     **DEL** mark is removed. To permanently get rid of "deleted" records,
     use the Pack procedure.

     D) PACK - GET RID OF DELETED RECORDS

     In the EDIT mode, or in dBASE III, you may mark certain records for
     delete. To permanently get rid of these records from the database,
     choose the PACK procedure.

     E) DISPLAY STRUCTURE OF A DATABASE

     This option displays the structure of your database, as you created in
     the CREATE option, or that was created in dBASE III.

     F) SET MISSING VALUE CODES

     Sometimes in the collection of data there are values that are lost or
     cannot be gathered. These are called "missing values". Missing values
     are usually designated as an impossible value. For example, the
     missing values designated for the variable AGE may be -9, since it is
     impossible for the variable AGE to have the value -9. When the program
     is asked to calculate the mean of age, for example, it will ignore
     those records where AGE is -9 in that calculation if -9 has been
     specified as the missing value code.

     Once you designate a missing value code for a variable, it is up to
     you to make sure that this code gets placed into your database in the
     proper records and fields.

     A standard dBASE III file does not have a way to designate missing
     values, but KWIKSTAT allows a way for you to designate these values in
     this program. The "Set Missing Values" option in the DATA MODULE is
     used to set up these values. When this option is selected, the program
     will display an entry screen that is similar to a data entry screen.
     You may enter one missing value for each field name. The missing value
     must obey the definition of the field in terms of length and type.

     IMPORTANT NOTE:If missing values are NOT used, and there is a blank
     numeric variable in a calculation, it will be treated like the value 0
     (zero), so it is important to use missing values if your data contains
     such entries. Otherwise, the statistical calculations will be in
     error!!

     G) TRANSFORMATION - MAKE A NEW VARIABLE

     You may create a new numeric variable in a database with the
     transformation procedure. This procedure allows you to create this new
     variable as a function of old variables. For example, if you wanted a
     new variable to be the ratio of WEIGHT to HEIGHT, you could name a new
     variable RATIO, and use the transformation WEIGHT/HEIGHT as the
     expression to create the new variable.
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        10

          KWIKSTAT 2.00
          ___________________________________________________________


     CAREFUL ATTENTION must be paid to the definition to assure that the
     calculated numbers will fit into the field width specifications. If
     the calculated number is too large to fit into the field, it will be
     given the missing value code. If an illegal calculation is attempted,
     such as a division by 0, the result will be missing. If a calculation
     includes a missing value, the result will be a missing value.

     OPERATIONS ALLOWED IN A TRANSFORMATION

     Mathematical operators: Add (+), Subtract (-), Divide (/),
     Multiply (*)  and Exponentation (^).

     Following are a few examples of correct expressions, where the new
     variable is called NEW, and numerical variables in the database
     include AGE, WEIGHT, HEIGHT, and SCORE:

     NEW = AGE/HEIGHT
     NEW = SCORE^2
     NEW = SUM(AGE,WEIGHT,HEIGHT,SCORE)

     MATHEMATICAL FUNCTIONS SUPPORTED

     Name      Meaning             Example
     --------  --------            ----------
     ABS       Absolute value      ABS(SCORE)
     ACOS      Arc Cosine          ACOS(SCORE)
     ASIN      Arc Sine            ASIN(SCORE)
     ATAN      Arc Tangent         ATAN(SCORE)
     ATAN2     Arc Tanget y/x      ATAN2(y,x)
     CSC       Cosecant            CSC(SCORE)
     COS       Cosine              COS(SCORE)
     COT       Cotangent           COT(SCORE)
     EXP       Exponentiation      EXP(SCORE)
     INT       Integer             INT(SCORE)
     LN        Natural Log         LN(SCORE)
     LOG       Log base 10         LOG(SCORE)
     MAX       Maximum of list     MAX(1,T2,3)
     MIN       Minimum of list     MIN(1,T2,T3)
     MOD       MOD of number       MOD(9,2) is 9 mod 2
     PI        PI                  PI = 3.14159265358979
     RAND      Random number       number between 0 and 1
     RECNO     Record number       database record number
     ROUND     Rounds a number     ROUND(1.236,2)=1.24
     SEC       Secant              SEC(SCORE)
     SIN       Sine                SIN(SCORE)
     SQRT      Square root         SQRT(SCORE)
     SUM       Sum of list         SUM(1,2,3) = 6
     TAN       Tangent             TAN(SCORE)



          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        11

          KWIKSTAT 2.00
          ___________________________________________________________

     H) SUBSET - CREATE NEW DATABASE BY SUBSET SELECTION

     This option allows you to create a new database from an old one.

     For example, suppose you have a database with a field GROUP with
     values 1, 2, 3, 4 and 5. You want to create a database that does NOT
     include Group 5. For example, your new database might be named
     NO5.DBF. You are asked for the field name to be used in the selection
     criteria. In this case, you would choose the field named GROUP. Next
     you must enter the selection relationship. It will be described as a
     numerical expression. The conditional operators you may use are:

     =    >  <  >=  <=  <>    = and the logical operator .NOT.

     The program will prompt you with

     SELECT IF GROUP

     and you must finish the selection criteria.  For example:

     SELECT IF GROUP .NOT. = 5

     (Select records for which the variable GROUP is not equal to 5.) You
     may use any of the variables in the database in the expression, and
     you may use the functions described in the TRANSFORMATION option.

     I) LIST - KWIKLIST OF DATABASE RECORDS

     KWIKLIST allows you to look at the information in your database.
     Kwiklist produces a simple on screen report that lists the data one
     record at a time.

     DATA FROM OTHER SOURCES

     KWIKSTAT can read data from a dBASE III file. To make a dBASE III
     database appear in the KWIKSTAT directory, copy the  .DBF file from
     your dBASE III directory, or set up the path for KWIKSTAT to your
     dBASE III directory. Once you have told KWIKSTAT where your dBASE III
     files are, the module will display all ".DBF" files in the that
     directory each time you are requested to enter a filename. However,
     you may also call files from other directories using drive and path
     names.

     LOTUS PRODUCTS: WKS and DIF files to DBF

     In Lotus 1-2-3, and other LOTUS products, there is a TRANSLATE
     facility, which allows you to output data into a DBF file. The version
     A1 of 1-2-3 writes out a dBASE II file, so it would need to be
     DCONVERTed to dBASE III. Also, 1-2-3 can translate DIF files into the
     worksheet, which can then be translated to DBF files. Lotus 1-2-3 and
     other programs will output data in standard ASCII files (PRN files in
     the case of 1-2-3). Using the description below on reading data from
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        12

          KWIKSTAT 2.00
          ___________________________________________________________

     an ASCII file, you can read this data into KWIKSTAT. You may have to
     delete some blank or label lines from the files created by 1-2-3 to
     make them into nice data files.

     USING ASCII FILES

     KWIKSTAT can read data from standard ASCII text files. These kinds of
     files are usually supported by most word processing programs as well
     as most editors. Data must be in the form of column data, like this...

     A 22 3.3 WF
     A 33 4.2 BF
     B 27 3.3 WM
     :
     ETC

     Use the instructions below to prepare the KWIKSTAT (dBASE) database
     structure to be used to read in this data. ANY PROGRAM that can output
     data in a standard ASCII text format (ie PC-FILE III, FRAMEWORK,
     RBASE, etc) can be used to prepare a data file to be used by KWIKSTAT.
     ALSO NOTE that KWIKSTAT can produce an ASCII text file, so that data
     created in KWIKSTAT can be output, and read into other programs. (ie
     dBASE, SAS, SPSS, etc). See the description of SDF files in the
     UTILITY program.

     Reading ASCII file data into KWIKSTAT

     NOTE:There is a file on the distribution disk named EX.DAT, which
     contains 50 records, and can be used to illustrate entering data from
     an ASCII file.

     You must be in the DATA module to enter DATA into a KWIKSTAT dBASE III
     type database. Before Entering Data You Must Create The Database
     Structure. Create the structure of your database by selecting the
     "CREATE" option in the DATA module. (option A) You will define names
     for each variable, maximum width of the field, and type of variable.
     (Character, Numeric, Date, Logical). Memo fields are not supported.

     If you will be entering data from an ASCII file, the field widths MUST
     match the width of the columns of data on file. If there are spaces
     between columns of data, make widths wide enough to account for those
     spaces. The following data is from the file EX.DAT on disk:










          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        13

          KWIKSTAT 2.00
          ___________________________________________________________

     A  12 22.3 25.3 28.2 30.6 5
     A  11 22.8 27.5 33.3 35.8 5
     B  12 22.8 30.0 32.8 31.0 4
     A  12 18.5 26.0 29.0 27.9 5
     B   9 19.5 25.0 25.3 26.6 5
     :
     etc
     :
     B  12 22.4 27.2 31.8 35.6 4

     In this example, you would define the following fields in the CREATE
     procedure. If you are actually doing this example, call the database
     something other than "EXAMPLE" since there is already one named that -
     suggestion: use the name "EX" for this database.

     FIELD NAME     TYPE       WIDTH     DECIMALS
     -----------   --------   ---------  --------
     GROUP          C           2
     AGE            N           4          0
     TIME1          N           5          1
     TIME2          N           5          1
     TIME3          N           5          1
     TIME4          N           5          1
     STATUS         N           2

     NOTE:If there are columns in the input you want to ignore, just give
     them a dummy name, and call them character fields. Notice that the
     GROUP field is given a width of 2, even though it is only 1 character
     wide. This is to take into account the blank between the GROUP
     variable and the AGE variable.

     Once you have defined the database to match the ASCII input file,
     choose the ENTER DATA option (B) from the DATA module menu, and choose
     to read data from a file. A good check is to then use Kwiklook to
     verify that the data has been entered correctly, or to print out the
     entire database using the REPORT option in UTILITIES. As an example,
     enter the data in EX.DAT, look at it in Kwiklist (option I), then run
     some descriptives on it to see if it matches the answers given from
     the EXAMPLE database.


     PRINTED OUTPUT

     Kwikstat has several ways of providing hard copy output of results.
     Following are explanations of how each option works, and when it can
     be used:

     Screen Print of Text Information

     To capture textual results to the printer, you may press
     Shift-PrintScreen (or just Print Screen on newer keyboards) to cause a
     copy of what appears on the screen to be printed to your printer.
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        14

          KWIKSTAT 2.00
          ___________________________________________________________


     Screen Print of Graphic Information

     You may print a graphic screen with the Print Screen command in the
     same way you print a text screen. Many of the graph screens in
     KWIKSTAT have a "disappearing prompt" that allow you to get a print of
     your graphic screen without the prompt appearing. Once a graph is on
     the screen, wait about 5 seconds, and the prompt will disappear. Then,
     issue the Print Screen command. Press Esc to exit the graph.

     If you have problems getting to a graph to print, see the information
     concerning Hercules/Monochrome Graphics monitors. If you have a
     LaserJet or PaintJet printer, read the information in the Appendix
     about printers.

     Program Controlled Printing to Printer or File

     A number of the Kwikstat procedures allow you to output results to the
     printer in a formatted report form. The following procedures will
     prompt you for printing a report version of the output to a file or
     printer:

     1) Analysis of Variance Results
     2) Frequencies
     3) Crosstabulations
     4) Survival Analysis Results
     5) Report Generation in Kwikstat Utilities

     STATISTICS MODULES

     There are five (5) modules in Kwikstat that perform statistical
     analysis. These options appear on each module menu, their file names
     and descriptions are:

     1) KS20STAT.EXE - Descriptive Statistics and Graphs
     2) KS20AOV1.EXE - t-tests, ANOVA, Non-Parametric
     3) KS20REG.EXE  - Simple and Multiple Linear Regression
     4) KS20CROS.EXE - Crosstabs, Frequencies, Chi Square
     5) KS20LIFE.EXE - Survival Analysis and Life Tables

     1) DESCRIPTIVE STATISTICS AND GRAPHICS

     In the descriptive statistics module (KS20STAT.EXE), you may examine
     summary statistics of the data in the database. Graphics are used
     throughout the system to enhance understanding of certain statistical
     procedures.

     Details on Specific Procedures

     A) CHOOSE ANOTHER DATABASE TO USE


          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        15

          KWIKSTAT 2.00
          ___________________________________________________________

     B) DETAILED STATISTICS ON A SINGLE VARIABLE - Calculates mean,
     standard deviation, median, standard error of the mean, minimum,
     maximum, sum, variance, Tukey 5 number summary (0, 25th, 50th, 75th
     and 100th percentile), and displays a box plot of the 5 number
     summary. A 95% confidence interval (C.I.) about the mean is also
     displayed.

     For sample sizes less than or equal to 30, a t-statistic is used to
     calculate the interval. For sample sizes over 30, the 95% (two-sided)
     z-statistic (1.96) is used. To print results to the printer, use the
     SHIFT-PRTSC command.

     C) SUMMARY STATISTICS ON A NUMBER OF VARIABLES - In this procedure,
     you may choose a list of one or more variables from the database.
     Statistics calculated include sample size, mean, standard deviation,
     minimum, maximum, and SEM (standard error of the mean).

     GROUPING FACTOR:If you have a grouping factor in your database, you
     may request output of summary statistics by group. You are also given
     the opportunity to print results to the printer, or to output results
     to a file.

     D) P-VALUE DETERMINATION - calculates a p-value for normal (Z),
     Student's-t, F, or Chi-square statistic. In this procedure, enter the
     request by typing the distribution symbol, and value. For example:

     Enter:T(20)=2

     means that you want the two-sided p-value for a calculated t-statistic
     of 2 with 20 degrees of freedom. Other examples would be:

     Z=1.96    Normal
     F(4,8)=9.4     F-distribution (one-sided)
     X(3)=4.32      Chi-Square (one-sided)

     To end this procedure, enter the word END at the prompt.

     E) HISTOGRAM - Produces a histogram from values read from the
     database. This procedure is useful to determine if a continuous
     variable approximates a normal distribution. If the histogram has a
     peak toward the center, with both tails diminishing, the data could be
     considered close to normally distributed.

     F) SCATTERPLOT - Produces a scatterplot of two variables.

     G) TIME SERIES PLOT - Produces a time-series plot from one variable.






          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        16

          KWIKSTAT 2.00
          ___________________________________________________________

     EXAMPLE:  DESCRIPTIVE STATISTICS

     Suppose you have the following data, and you want to be able to
     perform descriptive statistics such as getting means, standard
     deviations, and drawing histograms and a scatterplot.

     AGE       WEIGHT
     23        140.0
     21        133.5
     34        200.0
     33        150.0
     40        196.5
     28        167.0
     25        175.5

     STEP 1:CREATE A DATABASE: Begin KWIKSTAT with the KS command. Select
     the option from the DATA menu to CREATE a database (Option A).

     STEP 2:DEFINE THE DATABASE STRUCTURE:You have two fields of data, AGE
     and WEIGHT. Both are numeric. The AGE field must have at least 2
     digits of width and the WEIGHT field must have 3 digits of width for
     the whole number and an additional digit for the decimal. Counting the
     decimal place, that means that the WEIGHT field must have at least a
     width of (3+1+1)=5. As you define the database, you will enter the
     following information:

     FIELD NAME     TYPE  WIDTH  DECIMALS
     -------------  ----- -----  --------
     AGE              N    2       0
     WEIGHT           N    5       1

     That is, for the first field name enter the name AGE (does not have to
     be in upper case). For TYPE enter N for Numeric. Enter 2 for the width
     and 0 for number of decimals. Then, enter the information for the
     variable name WEIGHT in a similar way. Notice that you allow 5 for the
     width of the WEIGHT field, then specify that one digit is a decimal.
     The AGE field uses no decimal places. Once you have defined the
     database structure press CTRL-E to end the creation procedure, then
     you may enter the data.

     STEP 3: You may enter data immediately after defining the database, or
     you may enter or add to the data in the database at any time using the
     "Enter Data" option in the DATA module. For this example, answer Y to
     the question:

     Enter data from keyboard now (Y/N)?

     A screen will appear that contains the names of the fields, with a
     highlighted area where you may enter your data. You enter the data one
     record at a time. In this case, you would enter the data 23 and 140.0,
     then you will go to the next screen and enter the data 21 and 133.5 an
     so on until all the data has been entered. You may end data entry two
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        17

          KWIKSTAT 2.00
          ___________________________________________________________

     ways. If you have entered these seven records, and an 8th blank record
     is on the screen waiting for you to enter data, use the ESC command to
     end the entry and NOT save the current (8th) record. If you are still
     on the 7th record, and want to end and KEEP the 7th record, use
     CTRL-END to end the entry procedure.

     After ending the entry procedure, you are ready to perform  your
     analysis of the data.

     STEP 4:Enter the Descriptives module by choosing option 1 from the
     main menu. Once in the STAT module, you may choose which options to
     use.

     2) T-TESTS, ANOVA, NON-PARAMETRICS

     The t-test, ANOVA and Non-Parametric module (KS20AOV1) performs the
     following procedures:

     t-test on independent groups
     t-test on paired or matched data
     single sample t-test
     One Way Analysis of Variance on independent groups
     One Way analysis of Variance on repeated data
     Non-Parametric one-way ANOVA (Kruskal-Wallis) and two
             group analysis (Mann-Whitney U)
     Newman-Keuls multiple comparisons at the 0.05 level for all ANOVAs
     Graphical comparison of groups using box plots.

     Details on Specific Procedures

     A) CHOOSE ANOTHER DATABASE TO USE

     B) COMPARE INDEPENDENT GROUPS ANALYSIS (t-test and ANOVA)

     Independent groups are observations taken from groups in which
     subjects in one group do not appear in another group, nor should the
     groups be related in any way. Often a large group of subjects are
     split into two or more groups in a random fashion to make the required
     number of sub-groups. This option allows you to print the results to
     the printer in report form. After the analysis is completed, you will
     be able to select output of information to the printer.

     C) COMPARE REPEATED OR PAIRED DATA (t-test and ANOVA)

     Repeated measures are observations taken on the same or related
     subjects over time or in differing circumstances. Examples would be
     weight loss, or reaction to a drug across time. Repeated measures may
     also be matched subjects. This option allows you to print the results
     to the printer in report form. After the analysis is completed, you
     will be able to select output of information to the printer.

     In this module, a t-test is performed when there are two groups (or
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        18

          KWIKSTAT 2.00
          ___________________________________________________________

     two repeated measures). For 3 to 10 groups or repeated measures, an
     Analysis of Variance (ANOVA) is performed. The ANOVA attempts to
     determine if there is a difference in the means across groups or
     repeated measures. If the p-value for the ANOVA is small (ie 0.05 or
     less), you may suspect that there is a difference. However, the ANOVA
     does not tell you directly where that difference lies. See the
     repeated measures example analysis that follows.

     D) INDEPENDENT GROUP TESTS FROM SUMMARY DATA

     This option allows you to perform a one-way ANOVA or a t-test if you
     have only the means, standard deviations and group sizes of 2 to 10
     groups. Since data is summary, no box plots can be given.

     E) SINGLE SAMPLE T-TEST

     This test allows you to choose a single variable, and test an
     hypothesis that the mean of that group of data differs from a value
     you choose (e.g. 0).

     F) INDEPENDENT GROUP - NON-PARAMETRIC ANALYSIS

     For two groups, the Kruskal-Wallis test is performed, and for 3 to 10
     groups, the Mann-Whitney U test is performed. For 3 to 10 groups, a
     multiple comparison test is also reported.

     EXAMPLE:INDEPENDENT GROUP T-TEST

     To compare two independent groups, Student's t-test for independent
     comparisons can be used. If you suspect that your data may not be
     normal, you should use non-parametric procedures. By independent
     groups, we mean that the observed information is from different
     entities - that is not the same person, plant, store etc. And that the
     entities are not related.

     The data used here are heights of plants grown using different
     fertilizers. In order to enter this data into a database, we must
     assign group numbers such as Present = Group 1 and Newer = Group 2.














          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        19

          KWIKSTAT 2.00
          ___________________________________________________________

     Data for independent group t-test
     ------------------------------------
     Present             Newer
     Fertilizer          Fertilizer             NOTE: Sizes of
     -------------       ----------             groups do not have
     46.2 cm             51.3 cm                to be equal.
     55.6                52.4
     53.3                54.6
     44.8                52.2
     55.4                64.3
     56.0                55.0
     48.9
     -----------------------------------

     A database would be created with two fields, GROUP and HEIGHT.
     Reference the descriptive statistics on how to set up a database. The
     data would be entered into the database as illustrated here:

     GROUP             HEIGHT
     1                   46.2
     1                   55.6         Notice how the grouping
     1                   53.3         variable tells
     1                   44.8         KWIKSTAT which "HEIGHT"
     1                   55.4         value belongs to which
     1                   56.0         group.
     1                   48.9
     2                   51.3
     2                   52.4
     2                   54.6
     2                   52.2
     2                   64.3
     2                   55.0

     Notice that the GROUP field is 1 if the data are from the Present
     Fertilizer group and 2 if the data are from the Newer fertilizer
     group. Once the data is in a database, use Kwikstat "AOV1" module to
     analyze the information. From the Kwikstat menu choose the option:

     B) Compare independent groups (t-test, ANOVA)

     You will be prompted by the program to indicate a grouping variable
     (GROUP) and a data variable (HEIGHT). The means for each group
     (1=Present 2=Newer) is displayed. A test for equality of variance
     tests to see if this t-test assumption is met. A p-value greater than
     0.05 indicates that you do not have a problem with this assumption. In
     this case p=.4807 (no problem with inequality of variance).

     The t-test is performed in two ways.  If the test for equality of
     variance shows no problem, use the "Equal variance" results.
     Otherwise, use the "Unequal variance" results.

     In this case, they are identical results.  The calculated t-statistic
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        20

          KWIKSTAT 2.00
          ___________________________________________________________

     is -1.32. The test is performed with 11 degrees of freedom, and the
     p-value associated with the test is 0.213. A p-value greater than 0.05
     is usually interpreted to mean that there is no significant difference
     in the means.

     EXAMPLE: PAIRED T-TEST

     To compare groups for which there are before and after measurements
     for each subject or when two different measurements are made on each
     of several subjects, a paired analysis is appropriate. Data for a
     paired Student t-test are before an after weight for 8 persons on a
     diet. Notice that in this case, both data values are taken from the
     SAME entity (patient).

     Data for paired t-test

     Patient        Before   After
     1              162       168              NOTE:"Group" size
     2              170       136              is always equal.
     3              184       147
     4              164       159
     5              172       143
     6              176       161
     7              159       143
     8              170       145

     Data are entered into a database with the BEFORE and AFTER measure in
     each record, as illustrated here:

     BEFORE   AFTER
     162       168
     170       136
     184       147
     164       159
     172       143
     176       161
     159       143
     170       145

     To perform this analysis in the t-tests and ANOVA module, choose the
     option:

     C) Compare repeated or paired data (t-test, ANOVA)

     In this case, since the p-value is small (p=0.008), you conclude that
     there is a statistically significant difference in the BEFORE mean
     when compared to the AFTER mean. Notice that in repeated measures
     there is always the same number in each group. This is because each
     measure is "matched" with another one. Whereas, in the independent
     t-test, you are not restricted to the same number in each group.


          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        21

          KWIKSTAT 2.00
          ___________________________________________________________

     3) SIMPLE AND MULTIPLE LINEAR REGRESSION

     The "REG" (KS20REG.EXE) module performs simple linear regression and
     multiple linear regression.

     Linear regression is used to examine the linear (straight line)
     relationship between two or more variables.

     Details on Specific Procedures

     A) CHOOSE ANOTHER DATABASE TO USE

     B) SIMPLE LINEAR REGRESSION ANALYSIS  - When you choose this option
     KWIKSTAT will prompt you to choose the "independent" and "dependent"
     variables to be used in the analysis. The "independent" variable is
     generally that variable that we can choose, regulate or specify (e.g.
     amount of money spent on advertising) and the "dependent" variable is
     the one you observe, and would possibly like to predict. After the two
     variables are chosen, KWIKSTAT will present the results of its
     calculations. The estimated linear equation will be displayed along
     with other results.

     The equation of the line is calculated and displayed. For example, an
     equation that describes how much sales to expect given a certain level
     of advertising could be:

     SALES = 100 + ADV * 4.5

     Therefore, you would predict sales of $100 given no advertising
     (ADV=0), and with advertising in the amount of $10, we would expect
     sales of about $145 (100+10*4.5). Care must be used in predicting only
     values which are within the limits of the original values of the
     independent variable. Outside these limits, it is only speculation
     that the linear relation continues to exists. Pearson's correlation
     coefficient: The correlation coefficient is a number between -1.0 and
     1.0, and tells us the strength of the linear relationship between the
     two variables. A correlation close to -1 or 1 means that the
     relationship is strong (negative or positive), and a correlation close
     to 0 means that a relationship is non-existent or very weak.

     T-test for significance of slope (correlation coefficient): If the
     result of the t-test is that p is small (ie less than 0.05), we can
     conclude that the linear relationship is strong (statistically
     significant), and that the slope of the relationship is not 0 (zero).

     Scatterplots of raw data and plot of residuals from linear fit are
     available, as is the ability to forecast. Plots are helpful in
     visually examining the relationship between the variables. It is
     important to verify that the relationship is indeed a straight line.
     If it is not, a pattern should emerge from the plot of the data, or
     the residuals. If the data is not linear, it could possibly be
     transformed to make it linear.
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        22

          KWIKSTAT 2.00
          ___________________________________________________________


     C) MULTIPLE LINEAR REGRESSION ANALYSIS - In the multiple regression
     procedure, you must enter a list of the independent variables (up to
     10 variables may be used at any one time), and a single dependent
     variable. A data file included on disk is named "LONGLEY". This
     economic data correlates several variables with a variable called
     total (total unemployment). The variable TOTAL is the dependent
     variable, and the other variables are the independent variables. You
     may use this database to test this procedure. Multiple linear
     regression can be complicated. Refer to a good text on the subject
     before making any conclusions about your results. Calculations
     performed and displayed include: The coefficients and intercept to the
     equation of the line are calculated and displayed. A significance test
     is performed to determine their contribution to the model.

     R-Square is calculated for the model, as well as adjusted R-Square. R
     varies from 0.0 to 1.0, with 0 meaning no relationship (model is not
     good) to 1.0, meaning the model perfectly describes the sample data.

     An ANOVA is performed to determine the overall significance of the
     model. If the ANOVA reveals a significant linear relationship, the
     model may be a good representation of the sample data.

     A plot of residuals from the fit is available. You may plot  the fit
     against any of the terms. Look for patterns in the residuals. If they
     exist, a transformation of the data may make the fit more linear.

     EXAMPLE: SIMPLE LINEAR REGRESSION

     The following data (Fisher, 1976) are Homicide Rate and Handgun
     Licenses Issued per 100,000 population for the years 1961 to 1973.

          Simple Linear Regression Data

     Year           Homicide       Handguns
                    Rate           Registered
     ----------------------------------------
     1961           08.60          178.15
     1962           08.90          156.41
     1963           08.52          198.02
     1964           08.89          222.10
     1965           13.07          301.92
     1966           14.57          391.22
     1967           21.36          665.56
     1968           28.03         1131.21
     1969           31.49          837.60
     1970           37.39          794.90
     1971           46.26          817.74
     1972           47.24          583.17
     1973           52.33          709.59

     You only need a database with these numbers, and can exclude year.
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        23

          KWIKSTAT 2.00
          ___________________________________________________________

     Thus, create a database with two fields, HOMICIDES and HANDGUNS. The
     data in the database will be from the table above, excluding the year
     column. Thus, for the first record, the data would be 8.60 and 178.15.
     The second record would be 8.9 and 146.41, and so on for 12 records.

     To analyze this data choose regression module.  You will be asked to
     choose the independent variable (field) and a dependent variable. In
     this case, the independent variable is the number of handguns
     registered (usually the variable that is set or controlled), and the
     dependent variable is homicides (usually the variable of observed
     values that you may want to predict).

     Pearson's correlation coefficient (rho) is reported (0.7263)  as well
     as R-squared (0.5275). Rho varies from -1.00 to 1.00. The further rho
     is from 0.00, the stronger the correlation. A correlation of -1.00 or
     1.00 is a perfect correlation. These are measures of how well the data
     are correlated. The equation given is a mathematical representation
     (model) of a straight (linear) line that passes through the data, and
     can be used to predict the dependent variable given a value for the
     independent variable. For example, in this case, if you wanted to
     predict the homicide rate for 300 handguns registered, you would use
     the equation:

     Homicides =  4.910512  + 0.03761144 * 300 = 16.19

     The t-test tests the statistical significance of the linear
     relationship between the independent and dependent variable. A low
     p-value (in this case 0.005) means that the two variable are
     statistically significantly correlated for this data set. Reference a
     text on regression for warnings about how to use (or not to use) this
     kind of information for prediction purposes. In addition to these
     results, you may also display a scatterplot of the data, and a
     scatterplot of residuals. These plots are helpful to determine if a
     linear fit to the data is appropriate.

     EXAMPLE: MULTIPLE LINEAR REGRESSION

     Longley introduced a data set which has often been used in comparing
     multiple linear regression procedures in the literature. The database
     used in the example is on the KWIKSTAT distribution disk. It is named
     LONGLEY.DBF.

     The Longley database consists of 7 fields, corresponding to the seven
     columns of data in the above table. "Y" is the dependent variable (the
     one to be predicted), and the other variables are independent
     variables.

     To analyze this data, choose the "Multiple Regression" option C from
     the menu in the regression module. You will be asked to first enter
     the independent variables. In this, these are fields 1 to 6, so you
     enter "1,2,3,4,5,6" at the prompt. Enter "7" (TOTAL) as the dependent
     variable.
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        24

          KWIKSTAT 2.00
          ___________________________________________________________


     A low p-value in the ANOVA suggests that the dependent variable TOTAL
     is related to the independent variables. The first part of the
     information tells you the intercept value and the coefficient values
     for each of the independent variable. These can be used to create an
     equation that represent the linear fit through the data. In this case,
     the equation would be:

     TOTAL =  -3481930.1065 + DEFLATOR*15.0161517122 + GNP*-.03579443400 +
     UNEMP*-2.0199053296 + ARMED*-1.0332049046 + POP*-.05130725587 +
     TIME*1828.99249535

     The t-value associated with each coefficient tests its significance in
     the equation. In this case, you might question the validity of having
     DEFLATOR, GNP and POP in the equation.

     In choosing the variables to have in such an equation, you also need
     to consider such questions as multicollinearity, heteroscedasticity
     and parsimony. Refer to a good text on regression.

     R-Square gives you a measure of the amount of variance explained by
     the model, and the adjusted R-Square adjusts R-Square by how many
     variables you have in the equation. The overall model is tested with
     an analysis of variance. If the p-value for this test is low, it means
     that the model (this particular selection of variables) provides a
     good linear fit model for the set of data.

     KWIKSTAT also provides an opportunity to examine residuals from the
     fit. These residuals should look like a random scatter about 0. If
     they do not, it may reveal a variable that is not a good linear
     predictor, but may need to be replaced or transformed to provide a
     better fit.

     4) CROSSTABS, FREQUENCIES, CHI SQUARE

     The "CROS" (KS20CROS.EXE) module performs analyses on categorical
     data, that is, data observed in categories rather than measurement
     data. Examples of categorical data are sex (Male, Female) and Color of
     hair (Blonde, Black, Red, Brown). Some ordered data such as
     socioeconomic status (measured as 1,2,3,4,5) is also analyzed like
     categorical data.

     Details on Specific Procedures

     A) CHOOSE ANOTHER DATABASE

     B) FREQUENCIES, PICTOGRAPH, PIE CHART: This procedure "counts"  the
     occurrence of each data value for a single variable or field. For
     example, in the EXAMPLE database included on disk, there is a field
     named "GROUP" which contains three categories, A, B, and C. KWIKSTAT
     will count the occurrence of each category, and report that there are
     11 "A's", 29 "B's" and 10 "C's". The program will prompt you to
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        25

          KWIKSTAT 2.00
          ___________________________________________________________


     Choose (A)nother analysis (P)rint (R)eturn to menu (D)raw P(I)e

     Choose the Print option. Notice that in the printed table, the top
     number for each group is the actual count from the database, and the
     second number is the percent of the total. For example, 11 is 22% of
     50.

     After calculating the frequencies of a variable, you may display a
     Pictograph (bar plot) or a Pie Chart. To select the Pictograph choose
     the (D)raw option. To choose a Pie Chart, choose (I). You will be
     asked to enter the name of the image to use (.IMG files will be
     displayed). To display a bar plot, choose either BAR1 (a thin bar) or
     BAR2 (a thick bar). Optionally, you may choose any of the other images
     whose IMG files are displayed. See KWIKSTAT UTILITIES for information
     on how to create your own images, or modify the images provided.

     C) GOODNESS-OF-FIT: A goodness-of-fit test is a test that the
     distribution of observed numbers closely matches the expected number
     of occurrences. For example, suppose according to a genetic theory,
     out of 250 peas crossbred, they should show a 9:3:3:1 ratio of Yellow
     smooth, Yellow wrinkled, Green smooth, and Green wrinkled "offspring".
     You would say that your null hypothesis (Ho:) was that you observed a
     9:3:3:1 ratio of peas.

     You would expect about (9/16) x 250 = 140.625 Yellow smooth peas, and
     by similar calculations 46.875, 46.875, and 15.625 of the three other
     varieties. After growing the plants, you observe 152 Yellow smooth,
     39, 53, and 6 of the other three varieties.

     The resulting analysis will give you a p-value of 0.031. Since it is
     very small it suggests that the experiment DID NOT support the
     theoretical ratio of 9:3:3:1. Thus, you would have evidence to reject
     the null hypothesis. This example comes from ZAR (1974) page 46.

     D) CROSSTABULATIONS, CHI-SQUARE:Crosstabulations look at two
     categorical variables at once. A two-way table is constructed that
     displays the number of counts for each pair of variables. KWIKSTAT
     allows you to enter data for a two-way table from the keyboard or from
     a database.

     When you choose to enter the two-way table from the keyboard, KWIKSTAT
     will ask you the size of the table (number of rows and columns). A
     blank table will be presented on the screen, and you will then be
     prompted to enter a number in each cell of the table. If you choose to
     enter the information from the keyboard, KWIKSTAT will prompt you to
     choose the two variables from the currently active database that you
     wish to tabulate. KWIKSTAT will read the information from the
     database, and construct the table.

     The Chi-Square statistic tests the hypothesis that one variable is
     independent of the other. A warning message that the Chi-Square test
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        26

          KWIKSTAT 2.00
          ___________________________________________________________

     may not be appropriate will be given if expected values in one or more
     cells is less than 5. If the table is 2 x 2, Fisher's Exact test and
     Chi-Square with Yates correction are given.

     LIMITATIONS: Limits to tables being displayed on the screen are 10
     columns by 7 rows. If the table is too big for the screen, only the
     test results are displayed. Tables as large as 15 columns by 100 rows
     may be printed on a line printer. More information is given on printed
     tables.

     E) 3-DIMENSIONAL BAR CHART: Data for the 3-Dimensional graph must be
     entered first in option D, either from the keyboard or from a
     database. When you choose the "3-D" option, you will be given a chance
     to pick a title for the plot, and name the axes (or field names from
     the database will be used).

     For example, after entering the crosstabulation from the EXAMPLE
     database (STATUS by GROUP), choose the 3-D option, and display the
     graph. Once the plot has been displayed on the screen, you may want
     view a slice of it at a time, ("D" option) to see any bars that may be
     hidden from view. Pressing the Space Bar will reveal a menu at the
     bottom of the screen.

     EXAMPLE: 2 x 2 CONTINGENCY TABLE

     A contingency table is a set of observations (counts) for two
     classifications. Data for the example 2 x 2 table are observations of
     the number of beetles and bugs on the upper and lower side of leaves.
     (Zar, p 292) This data will be used for performing a Chi-square
     analysis with and without Yates correction, as well as for Fisher's
     Exact Test. It should be noted, that because one of the cells produces
     an expected value less than 5, the KWIKSTAT produces a warning message
     that a Chi-square analysis for this data set may not be valid.

                    2 x 2 Contingency Table Data

                          Beetles   Bugs
                       -------------------
          Upper Leaf     |   12   |  7  |
                       -------------------
          Lower Leaf     |    2   |  8  |
                       -------------------

     Using the "Crosstabs" option, you will be asked if the information for
     the table will come from reading a database, or by you entering it
     from the keyboard. Choose to enter data from the keyboard.

     Next, you will be asked to specify the number of rows and columns. In
     this case is is 2 rows and 2 columns. A blank table will appear on the
     screen. Enter the numbers as in the table above by entering the number
     12, press enter, enter the number 7, press enter, and so on. Once you
     have entered all cells, the results of the analysis appear on the
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        27

          KWIKSTAT 2.00
          ___________________________________________________________

     screen. You may also choose to print the results to the printer.

     If you choose the (P)rinter option, the information will be printed.

     Crosstab Printout Explained

     For each cell in a crosstab printout, 5 numbers are given.  The top
     number is the count that you entered. The second number is the
     calculated expected value used to calculate the Chi-Square statistic.
     The third through fifth numbers are percentages of the observed to the
     TOTAL, ROW and COLUMN totals.

     The statistics given include Chi-Square, Yates and the Fisher Exact
     test. The p-value for each test gives you information about the
     relationship between the two categories. If the p-value is low (say
     p<=.05) then you have evidence to say that the two categories are not
     independent. In this case it appears that beetles prefer the upper
     sides of leaves and bugs are about split in their preference. In the
     case of the Yates results, this decision is marginal.

     There is a potential problem with this analysis since a normal rule of
     thumb says that if an expected value is less than 5.0, the Chi-square
     (and Yates) may not be valid. In this case, use the Fisher Exact test,
     which suggests that the two categories are not independent, since the
     Fisher p-value is 0.033.

     EXAMPLE: ENTER DATA FROM A FILE

     The previous example had you enter data from the keyboard, but you may
     also read data from a file. Using the EXAMPLE.DBF dataset on the
     KWIKSTAT distribution disks, you may create a table by choosing that
     database, and choosing to create the database from a (D)atabase
     instead of from the (K)eyboard. The way a database is set up to be
     used to create a crosstabulation is by having field names that contain
     a grouping code. For example, in the EXAMPLE database, the first few
     records are:

     A  12  22.3  25.3  28.2  30.6  5
     A  11  22.8  27.5  33.3  35.8  5
     B  12  22.8  30.0  32.8  31.0  4

     The fist column is "GROUP" and the last column is "STATUS"  GROUP has
     values of A, B or C, and STATUS has values of 1, 2, 3, 4 or 5. The
     cross-tabulation procedure counts the number of each value in each
     chosen field, and uses this information to create the table.

     5) SURVIVAL ANALYSIS AND LIFE TABLE

     Module "LIFE" KS20LIFE.EXE performs Life Table and Survival Analysis
     on a set of data. The data must be in the following form:

     A TIME variable:This variable should contain a time variables (ie
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        28

          KWIKSTAT 2.00
          ___________________________________________________________

     minutes, days, years, etc) in which the subject or component has been
     observed to be alive (not-failed).

     A CENSOR variable:This variable must take on the values 0 or 1. A 1
     means the subject has died (failed), and a 0 means the subject was
     still alive (not-failed) at the last available time period.
     Optionally, a GROUP variable:This variable may contain a grouping
     variable (numeric or character) of up to 10 groups.

     Once the data is entered into the program, a life table for each group
     is produced which includes, for each time interval, the number
     entered, withdrawn, lost, dead, exposed, proportion dead, surviving,
     cumulative surviving, hazard and density.

     A plot is given for the group or groups cumulative proportion
     surviving. If more than one group is entered, a Mantel-Haenszel test
     is performed to test the hypothesis of equal survival patterns for
     each group.

     A small version of the survival plot will appear on the screen, and if
     you choose to print a report of the session the report will include a
     larger version of the plot along with other information from the
     analysis.

     EXAMPLE: SURVIVAL ANALYSIS

     Survival analysis is used to create life tables, to examine survival
     trends over time, and to compare survival times between groups. A
     database on the KWIKSTAT distribution disks named LIFE.DBF can be used
     as an example. This data is from Prentice (1973). The first few
     records in the LIFE.DBF database are:

            72     1    1
           411     1    1
           228     1    1
            11     1    1
            25     0    1
           144     1    1
             8     1    1

     The first column is the length of survival (TIME).  The second column
     is a censor indication. A 1 means that the subject has failed (died),
     and a 0 means that the subject has not failed (still alive) at the
     last period observed.

     The third column contains a grouping variable. In this case  it is
     either 1 or 2. Group 1 may represent one treatment, while group 2
     represents another kind of treatment. The object is to compute
     survival curves to see if one treatment provides a longer average
     survival distribution than the other.

     After running a survival analysis, you will be asked if you want to
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        29

          KWIKSTAT 2.00
          ___________________________________________________________

     print the results to the printer. Life table and survival curve output
     is illustrated on the next few pages. In this example, the
     Mantel-Haenzel Chi-Square analysis produces a p-value of 0.397. This
     indicates that the two distributions are not statistically
     significantly different - thus neither treatment is superior in terms
     of survival distributions.

     KWIKSTAT UTILITIES

     The KWIKSTAT UTILITY module allows you to setup your default disk
     (path), select the kind of monitor you are using, select colors for
     your display, print out data from the database and create images for
     use in pictographs.

     Specific Program Options

     A) CHOOSE ANOTHER DATABASE

     B) OUTPUT SDF FILE: You may output the data into a  standard ASCII
     TEXT file. (SDF file- Standard Data Format file). This is useful for
     transferring your data to other programs. Along with the output of
     data, you may also output a "format" file, which describes the
     contents of the text file.

     C) PRINT REPORT TO PRINTER OR FILE: You may output a listing of the
     data in the dataset (or a selected subset of the database). In this
     procedure you may specify the following report features:

     WHICH DATA FIELDS TO OUTPUT
     OUTPUT RECORD NUMBER AS A COLUMN
     TITLE
     NUMBER OF LINES PER PAGE
     WIDTH OF PAGE (default is 80)
     OUTPUT TO A FILE OR PRINTER
     OUTPUT A SUBSET OF THE DATA (Search)

     NOTE:You may want to place a coded variable in your data set which
     will allow you to easily select a subset of data to output. Subset
     searches can be

     1) Exact: case is ignored
     2) First one or more letters in a field: (AL* matches ALLEN,
        ALBERT, etc)
     3) Keyword: match a letter pattern within a field (ie [AL] matches
        ALLEN, BALES, etc).

     The REPORT procedure is menu driven. Simply answer the questions as
     you are prompted. If the report is too wide to fit on a single width
     of the specified paper width, the report will be printed in parts.



          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        30

          KWIKSTAT 2.00
          ___________________________________________________________

     D) SETUP KSTAT.INI - MONITORS, COLORS, PATH: This option allows you to
     tell KWIKSTAT information about the kind of monitor you are using and
     where you data is stored.

     You will be asked to select between color-type monitors (CGA, EGA,
     PGA, VGA, etc) and Monochrome Graphics (Hercules) Monitors. Standard
     IBM Monochrome monitors without Hercules-type cards will NOT display
     graphics. All KWIKSTAT graphics are produced in CGA modes. However,
     standard EGA, VGA and other color monitors will emulate the CGA mode
     without problem. There are a few clone color monitors that may not be
     able to support CGA graphics; however, they are usually able to
     support monochrome graphics.

     After you choose monitor type, you will be presented with several
     color/highlight options. Choose the one you like from the list. The
     PATH question has to do with where your KWIKSTAT data will be stored.
     If you have installed KWIKSTAT on the C: drive in the \KWIKSTAT
     directory and you want all of your databases stored in this directory,
     your path would be C:\KWIKSTAT. If all of your database are stored in
     your dBASE III directory, which is on the C: drive in the directory
     \DB3, your path would be C:\DB3. If you are storing all of your data
     on a disk in the B: drive, your path would be B: or B:\ You may change
     these options at any time..

     E) IMAGE CREATION/EDITING:  The image program allows you to create new
     IMG files or edit images already created. When you begin the IMAGE
     module, you will be asked if you want to create a NEW image, or to
     edit an OLD image. If you choose to enter a NEW image, you will be
     asked the pixel size. Maximum size for an image is 40 pixels (dots)
     wide and 30 pixels high. For example, you may create an image 30 by 20
     pixels. The Pictograph routine will adjust its graph according to the
     size of the image.

     In the image editor, you may move the cursor around the grid, and
     select to fill a dot by pressing the numbers 1, 2 or 3. To unfill a
     dot, place the cursor at the dot and press the space bar or 0. You
     will see a version of the image in its correct size at the upper right
     corner of the screen. Once you have created or edited an image, choose
     the (S)ave option to write the information to disk. Names for image
     files are 1 to 8 characters in length. Do not use an extension when
     giving a name, the extension IMG is always assumed.











          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        31

          KWIKSTAT 2.00
          ___________________________________________________________

     APPENDIX I

     SAMPLE DATA SETS ON DISK

     EXAMPLE.DBF contains the fields GROUP, AGE, TIME1, TIME2, TIME3,
     TIME4, and STATUS. Data can be used to illustrate Repeated Measures
     (Use TIME variables), or Independent group ANOVA (Use GROUP as
     grouping factor). It can be used for Crosstabulation (Use GROUP and
     STATUS).

     EX.DAT is the raw data, from which a database like EXAMPLE.DBF could
     be created using the DATA module. In the DATA module, create a new
     database, with the following fields, then enter the data with the
     Enter from a file option. The format for the EX.DAT file is:

     FIELD     TYPE    WIDTH     DECIMALS
     -----     -----   -------   --------
     GROUP     CHAR      1          -
     AGE       NUM       4          0
     TIME1     NUM       5          1
     TIME2     NUM       5          1
     TIME3     NUM       5          1
     TIME4     NUM       5          1
     STATUS    NUM       2          0

     LIFE.DBF - Database for the LIFE module.  It is used in an example
     for the LIFE module.

     LONGLEY.DBF - Data from Longley (1946). This data is used in the
     Multiple Regression Procedure example. The variable TOTAL is the
     dependent variable and the rest are independent variables.





















          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        32

          KWIKSTAT 2.00
          ___________________________________________________________

     APPENDIX II

     SOME COMMON ERROR CODES

     24 - Device Timeout - Your printer may be off or disconnected.
     25 - Printer has malfunctioned
     27 - Printer is out of paper
     61 - Disk Full
     67 - Too many files on one diskette
     70 - Disk is write protected
     71 - Disk is not ready (Is drive door closed?)
     72 - Disk Media Error (Disk may be bad)

     Others: Check Appendix in BASIC manual






































          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        33

          KWIKSTAT 2.00
          ___________________________________________________________

     APPENDIX III

     USER'S BALLOT
     Please indicate your preference for improvements in KWIKSTAT. On
     a scale of 0 to 10

     0 = Very Low priority for this change
     10 = Very High priority for this change

     Vote  Proposed item of change
     ---------------------------------------------------
     ____  More "BY GROUP" capabilities
     ____  Ability to sort database
     ____  Add multi-way ANOVA
     ____  Add more Non-parametric statistical tests
     ____  Add General Linear Model
     ____  Make Report more flexible
     ____  Add stem and leaf plot
     ____  Add time series analysis
     ____  Speed up calculations
     ____  Add more graphics
     ____  _____________________________________________
     ____  _____________________________________________
     ____  _____________________________________________
     ____  _____________________________________________

     Mail to:TexaSoft, P.O. Box 1169, Cedar Hill, Texas 75104.
     Thanks.
























          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        34

          KWIKSTAT 2.00
          ___________________________________________________________

     APPENDIX IV

     Bug Report for KWIKSTAT
     --------------------------------------------------------------
     Please explain in detail the problem that occurred. If possible,
     send a print out of the results or Print Screen.
     KWIKSTAT VERSION YOU ARE USING:________________________
     KWIKSTAT MODULE where problem occurred:____________________
     YOUR COMPUTER: BRAND/Model_____________________________
     MONITOR TYPE:________AMOUNT OF MEMORY:_______________
     VERSION OF DOS YOU ARE USING:____________________________
     MEMORY RESIDENT PROGRAMS YOU USE:____________________
     PROBLEM:
























     ---------------------------------------------------------------
     Mail to:TexaSoft, P.O. Box 1169, Cedar Hill, Texas 75104. Thanks.













          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        35

          KWIKSTAT 2.00
          ___________________________________________________________

     APPENDIX V

     Hercules - Monochrome Graphics Monitors

     Hercules graphics allow standard monochrome monitors to display
     graphics.  In  order for KWIKSTAT to know that you are using a
     Hercules monitor,  you must do the following:

     1) Enter the command QBHERC before entering KWIKSTAT.  You can put
     this command in the KS.BAT file as illustrated below.

     2) In the UTILITIES module, choose the SET-UP option and tell
     KWIKSTAT  that you are using a Hercules monitor. Choose the
     save-to-disk option.

     3) If your particular Hercules setup does not support printing to
     your printer, you may have to acquire a supplemental program to
     allow you to print graphics screens to the printer.

     EXAMPLE BATCH FILES: These two batch files show how you
     might implement special printer and monitor programs into
     the KS.BAT batch file.  The first uses the command LASERJET
     to invoke a program for Laserjet printer support.  The
     second batch file uses the QBHERC command to allow KWIKSTAT
     to use graphics on a Hercules type monitor, and the command
     SCRNDMP invokes a program that allows a printscreen of
     Hercules type graphics to be printed on a dot matrix
     printer.

     LASERJET A                   QBHERC
     KS20DATA                     SCRNDMP
                                  KS20DATA

     Printers

     In order to be able to print graphics screens from KWIKSTAT, you must
     have a printer that supports graphic printing, and you must have a
     program that will drive the printer. For most common dot-matrix
     printers, the program called GRAPHIC.COM, which comes with PC-DOS is
     sufficient. However, with other printers, such as laser printers, you
     may have to acquire a special printer driver.

     For the H-P Laserjet, there is a program you may acquire from
     shareware and public domain sources. It is called LASERJET, and allows
     you to print graphic screens to your Laserjet printer. For Hercules
     graphics users with dot matrix printers, the program SCRNDMP usually
     allows your to print graphics. Refer to the sample batch files on the
     previous page to see how to place your printer support program into
     your KS.BAT file so that it will be invoked each time you begin
     KWIKSTAT. A sampling of printer support programs are on Disk 2.
     TexaSoft also can provide a disk with additional printer support
     programs. See the order form on disk for more information about the
          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        36

          KWIKSTAT 2.00
          ___________________________________________________________

     cost of this disk.

     References

     Dixon, W.J., and Massey, F.J., INTRODUCTION TO STATISTICAL ANALYSIS,
     McGraw-Hill Book Company, New York, 1969.

     Gunst, R.F. and Mason R.L., REGRESSION ANALYSIS AND ITS APPLICATIONS,
     MArcel Dekker Inc, New York, 1980.

     Longley, J.W. "An appraisal of least squares programs for the
     electronic computer from the point of view of the user." JASA, 1967,
     62, 819-831

     Neter, J. and Wasserman, W., APPLIED LINEAR STATISTICAL MODELS,
     Richard D. Irwin, Inc, 1974.

     Prentice, R. L. "Exponential survivals with censoring and explanatory
     variables. BIOMETRIKA 60, 1973, 279-288.

     Tukey, J.W., EXPLORATORY DATA ANALYSIS, Prentice Hall.

     Winer, B.J., STATISTICAL PRINCIPLES IN EXPERIMENTAL DESIGN, Second
     Edition, McGraw-Hill Book Company, 1971.

     Zar, J.H., BIOSTATISTICAL ANALYSIS, Prentice Hall. Inc, 1974

     Products mentioned: Lotus 1-2-3 is a product of Lotus  development,
     dBASE III is a product of Ashton-Tate.























          ___________________________________________________________
              Please become a registered user - send in ORDER form.
                                        37

          KWIKSTAT 2.00
          ___________________________________________________________

     KWIKSTAT PROGRAM LIMITS:

     KWIKSTAT DATABASE: 128 Variables 10 characters to a name 60 character
     maximum width for character variable

     DESCRIPTIVE STATISTICS: Detailed Statistics on a single variable:
     5,000 cases maximum. Summary statistics: No maximum. Histogram: 5000
     cases maximum Scatterplot and Time Series plot: 3,000 cases maximum.

     T-TESTS AND ANOVA: 10 groups maximum, 4,000 cases.

     REGRESSION: Simple linear: 2,000 cases maximum Multiple:10 independent
     variables, 300 cases.

     CROSSTABS: 15 by 100 table to printer, 7 by 10 to screen.

     SURVIVAL ANALYSIS: 10 groups, 1,000 cases





































                                        38


```
{% endraw %}

## LATENEWS.DOC

{% raw %}
```
6-20-89 ORIGINAL RELEASE KWIKSTAT 2.00

1. The file HKS.BAT on disk is a batch file that can be used 
for beginning KWIKSTAT on a computer with a Hercules type 
(Monochrome graphics) monitor.  It issues the QBHERC
command. You still have to use setup in the Utilities module 
to tell the program you are using a Hercules type monitor. 

If you are using a program such as SIMCGA to make your
Hercules (mono-graphics) monitor "think" it is a CGA
monitor, set up KWIKSTAT as if you were using a CGA monitor.
DO NOT tell it you are using a Hercules type monitor under
these circumstances.

2. Depending on your type computer, you may have to use DOS
3.0 or higher, else some KWIKSTAT programs will not run.

3. For those having problems printing graphics screens, or 
are using Laserjet or Paintjet, print the file PRINTERS.DOC 
on disk 2.  It contains information about some alternate 
printer routines to replace GRAPHICS.COM. 

4. If you are loading KWIKSTAT in a subdirectory that had a 
previous version of KWIKSTAT, all of your data from the old 
version will be readable by the new version with no 
problems.  To save space on your disk, erase the old 
Kwikstat programs - DATA.EXE, UTIL.EXE, LIFE.EXE and 
STAT*.EXE. 

5. KWIKSTAT programs can be run directly from within dBASE.
You need to have the KSMENU.INI and KSTAT.INI files in the
directory from which you are running dBASE.  To run a module
from dBASE, use the RUN command.  For example, to run the
Analysis of Variance module (KS20AOV1), you would use the 
command 

.RUN KS2SAOV1

at the dBASE III dot prompt.  You must have a computer 
with sufficient RAM memory to do this, or the program may 
not be able to run.

6. Although not mentioned in the manual, there are 
predictive (forecasting) routines in the simple and multiple 
linear regression modules.  These allow you to make 
predictions from the linear regression equations calculated
in the program.
```
{% endraw %}

## PRINTERS.DOC

{% raw %}
```
     
     PRINTING GRAPHICS SCREENS FROM THE PC
     
     This document discusses methods of printing graphics for a variety of
     printers.  Several printer programs are on disk to help you print
     graphics for particular printers and monitor combinations. These
     programs come from a variety of sources and have been gathered from
     public domain and shareware distributors.
     
     
     GRAPHICS.COM
     =============================
     
     This routine comes with PC-DOS, and allows you to be able to use
     printscreen to print a graphics screen to a standard Epson type dot
     matrix printer.  Simply enter the command GRAPHICS before you initiate
     a printscreen. However, it is only useful for printing CGA type
     graphics to the printer.  If you are using Hercules type (monochrome
     graphics) graphics see other options below.
     
     EPSON.COM
     =============================
     
     This is a replacement for GRAPHICS.COM, and may be used with a variety
     of dot matrix printers.  Some people like the way EPSON.COM prints out
     graphics better than GRAPHICS.COM. Try them both and decide which to
     use.
     
     Note that many printers emulate Epson type graphics, so even if your
     printer is not an Epson, this routine may still work.
     
     SCRNDUMP.COM
     =============================
     
     SCRNDUMP v 1.02 will install an enhancement to the PrtSc key which
     adds graphics printing support for Hercules Mono, Color Graphics
     Adapter (mono mode) and Enhanced Graphics Adapter (6430x350 Color).
     Printers supported are Okidata 92, Okidata 192, Epson/IBM, and C.Itoh
     Prowriter. Only the selected driver remains resident. Copyrighted by
     Hardwood Software Associates. Entered into public domain for
     non-commercial use only. Version 1.02 corrects page selection on EGA.
     
     Instructions for using SCRNDUMP
     
     Usage:  SCRNDU /g /p
     
     Where:  g = E[GA] for Enhanced Graphics(640x350 Color)
               = C[GA] for Color Graphics(640x200 Mono only)
               = H[ercules] for Herc Mono Graphics (720x348 Mono)
             p = E[PSON] for EPSON/IBM printer
               = C[ITOH] for CITOH PROWRITER/PROWRITER II printer
               = 1[92] for OKIDATA 192 printer
               = 9[2] for OKIDATA 92 printer
     
     EXAMPLE:Suppose you had a Hercules type monitor setup, and an Epson
     printer.  You would enter the following command at the DOS prompt:
     
     C>SCRNDUMP /h/e
                                        1
          

     
     The screen printing program is now resident.  Once a screen you wish
     to print is displayed on the monitor, you press the 'Shift/PrtSc' (or
     PrintScreen on Enhanced Keyboard) to activate the screen print
     program. Then...
     
     1)If the screen is a text screen, press the spacebar.
     
     2)If the screen is a graphics screen, press the number 1 on the upper
     row of number keys.
     
     If no key is pressed within 10 seconds the regular text print screen
     routine is used. Graphics printing in progress can be canceled by
     pressing 'ESC'.
     
     LASERJET.EXE and THINKJET.EXE
     =============================
     
     The LASETJET/THINKJET PRINT SCREEN utility allows you to print the
     contents of your IBM PC or PC/XT display screen using the LaserJet or
     ThinkJet printers.
     
     These instructions explain how to install and use this utility. Notice
     that there are two sets of installation instructions--one for LaserJet
     printers and one for ThinkJet printers.
     
     Now proceed to the installation instructions for your printer.
     
     
     *************************
     **LASERJET INSTALLATION**
     *************************
     
     The LaserJet printer is configured at the factory to communicate at
     9600 baud.
     
     a.  Copy the LASERJET.EXE file from to the operating system (DOS)
     disk, or to your hard disk.
     
     b.  Now, to initiate the LASERJET print screen program, you would
     enter the following command at the DOS prompt:
     
     C>LASERJET A
     
     You may want to include this command in your AUTOEXEC.BAT file or in
     the file that begins the program that creates the graphs you wish to
     print.  For example, in the KWIKSTAT program, you may want to change
     the file KS.BAT to have the following lines:
     
     LASERJET A
     KS20DTAT
     
     (The LASERJET command replaces the GRAPHICS command)
     
     If there are any commands in the AUTOEXEC.BAT file for other screen
     dump programs (such as IBM "GRAPHICS"), remove them from the file.
                                        2
          

     
     USING THE PRINT SCREEN UTILITY
     
     Once you have performed the installation procedure, to print the
     contents of the PC display, read and then perform the following
     two-step procedure:
     
     a.  Press "SHIFT-PrtSc"  (or the PrintScreen key on the enhanced
     keyboard). After a 5-second delay, your display screen will be dumped
     to the printer. Note that if the display is in Alpha mode, an "A" will
     flash in the upper left corner of the screen.  If the screen is in
     Graphics mode, a short horizontal line will appear in the upper left
     corner of the screen.
     
     b.  You may select any of the options from the list below by pressing
     the key of the desired option within 5 seconds of pressing the
     "SHIFT-PrtSc".  One option from each group (orientation, print
     positioning, or page ejection) may be selected.  Printing will begin 5
     seconds after the last key is pressed.  The Enter key may be pressed
     to terminate the 5-second delay.  NOTE:  If you select any of the
     options listed below, you do not have to select one from each
     group--those that are not specified will default automatically.
     
                             KEY              OPTION
     
     ORIENTATION            * P -- PORTRAIT ORIENTATION
                              L -- LANDSCAPE ORIENTATION
     
     PRINT POSITIONING      * T -- TOP OF PAGE (PORTRAIT MODE ONLY)
                              M -- MIDDLE OF PAGE (PORTRAIT MODE ONLY)
                              B -- BOTTOM OF PAGE (PORTRAIT MODE ONLY)
     
     PAPER EJECTION         * Y -- AUTO FORM FEED AT END OF PAGE
                              N -- NO AUTO FORM FEED AT END OF PAGE
     
                ENTER KEY -- TERMINATES 5-SECOND TIME-OUT PERIOD
     
          *  Default values
     
     EXAMPLE:  To print a page of graphics, centered on the page, press the
     "SHIFT" key and "PrtSc" key, immediately followed by pressing the "M"
     key. Your graphics will be dumped from the display and printed at the
     center of the page.
     
     NOTE: The PRINT SCREEN utility can print one graphics screen and one
     alphanumeric screen on the same page, but cannot print two graphics
     screens on the same page because of limited LaserJet memory. However,
     two graphs may be printed on the same page by printing one graph using
     the form feed option (to eject the page) and then manually feeding the
     same page through the printer to print the second page.
     
     When using some software packages, the screen will not print as
     desired.  In these cases, try the following options to enable you to
     print the screen.  Use these options only after you have already tried
     the PRINT SCREEN utility unsuccessfully.  These options are accessed
     the same way as the other options (by pressing the key associated with
                                        3
          

     the option within 5 seconds of pressing the "SHIFT", "PrtSc" keys).
     
     
            KEY             OPTION
     
             A    -- ALPHA SCREEN DUMP
             G    -- GRAPHICS SCREEN DUMP
     
             C    -- COLOR GRAPHICS
             W    -- BLACK & WHITE GRAPHICS
     
             4    -- 40 CHARACTERS/LINE ALPHA
             8    -- 80 CHARACTERS/LINE ALPHA
     
     For example, when printing a color bar chart using LOTUS 1-2-3, you
     must first press "SHIFT", "PrtSc", and then "G" and "C" (for color
     graphics).
     
     If you have difficulty printing your display screen with a particular
     software package, try the above options until the screen prints
     correctly.
     
     

































                                        4


     
     
































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0655

     Volume in drive A has no label
     Directory of A:\

    APPLE    IMG       896   7-26-89   2:00a
    BAR1     IMG       527   7-26-89   2:00a
    BAR2     IMG      1031   7-26-89   2:00a
    BEETLE   IMG       512   7-26-89   2:00a
    CAT      IMG       768   7-26-89   2:00a
    EPSON    COM      2222   7-26-89   2:00a
    EX       DAT      1451   7-26-89   2:00a
    EXAMPLE  DBF      1664   7-26-89   2:00a
    FILE0655 TXT      1744   9-07-89  12:14p
    GO       BAT        39   9-07-89  12:12p
    HKS      BAT        76   7-26-89   2:00a
    KS       BAT       128   7-26-89   2:00a
    KS       DOC     93087   7-27-89   1:30p
    KS20CROS EXE     71319   7-26-89   2:00a
    KS20LIFE EXE     51201   7-26-89   2:00a
    KS20UTIL EXE     51569   7-26-89   2:00a
    KWIKLOAD BAT      4068   7-26-89   2:00a
    KWIKSTAT HLP      7629   7-26-89   2:00a
    LASERJET EXE      2688   7-26-89   2:00a
    LATENEWS DOC      1972   7-26-89   2:00a
    LIFE     DBF      1632   7-26-89   2:00a
    LONGLEY  DBF       928   7-26-89   2:00a
    MANUAL   BAT        17   6-29-88  12:45p
    ORDER             2048   8-08-88   6:23p
    PC       IMG       384   7-26-89   2:00a
    PERSON   IMG       628   7-26-89   2:00a
    PRINTERS DOC      8832   7-26-89   2:00a
    QBHERC   COM      6704   7-26-89   2:00a
    READ     ME        218   7-26-89   2:00a
    SCRNDUMP COM     13440   7-26-89   2:00a
           30 file(s)     329422 bytes
                           17408 bytes free
