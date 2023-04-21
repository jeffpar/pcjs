---
layout: page
title: "PC-SIG Diskette Library (Disk #639)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0639/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0639"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUPERSTAT 2 OF 2 (ALSO 638)"

    SuperSTat Share is a shareware Statistical Package for analyzing the
    results of Market surveys and poles. The statistical analysis is very
    complete. The program is operated by choosing items from menus and
    filling in forms on the screen. This version allows 25 variables
    and 50 data columns with up to nine values to the variable.
    
    This is a two disk set that requires both to function.
    
    System Requirements:  128K, two disk drives, Hercules graphics display,
    Epson-compatible printer.
    
    How to Start:  After consulting the NOTES638.TXT and SST.DOC for
    information, initiate the program by entering SSTMENU at the DOS
    prompt.
    
    Suggested Registration:  $35.00; $20.00 for students.
    
    File Descriptions:
    The First Disk Contains:
    SCATTER  EXE  Scatter plot program
    SSTMENU  EXE  Main menu and system management program
    FREQ     EXE  Frequency distribution analysis program
    CROSS    EXE  Cross tabulate program
    SST      DEF  System configuration file
    TEST     TTL  Analysis Module
    TEST     DTA  Analysis Module
    TEST     APD  Analysis Module
    TEST     VRN  Analysis Module
    INT      APD  Analysis Module
    INT      DTA  Analysis Module
    INT      TTL  Analysis Module
    INT      VRN  Analysis Module
    
    The Second Disk Contains:
    SSTMENU  EXE  The menu and system management program
    SST      DEF  Configuration file
    DATAMAN  EXE  The data management module
    FILEMAN  EXE  The file management module
    CODEMAN  EXE  The code entry module
    SST      DOC  The short form of the SST Manual
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES639.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No  639  SST Version 1.00  (Disk 2 of 2)                      V1   DS2
----------------------------------------------------------------------------
SuperSTat Share is a two disk, shareware Statistical Package for analyzing
the results of Market surveys and poles. The statistical analysis is very
complete. The program is operated by choosing items from menus and filling in
forms on the screen. This version allows 25 variables and 50 data columns
with up to nine values to the variable.
 
SSTMENU  EXE  The menu and system management program
SST      DEF  Configuration file
DATAMAN  EXE  The data management module
CODEMAN  EXE  The code entry module
FILEMAN  EXE  The file management module
SST      DOC  The short form of the SST Manual
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## GO.TXT

{% raw %}
```
This disk contains the program: SUPERSTAT Share
 
To find out about this program: "PRINT" or "TYPE" these files:
 
SST.DOC         The user's Manual
 
to print the Manual type:  PRINT SST.DOC and press ENTER  or
                    type:  COPY SST.DOC PRT1 and press ENTER
 
To print the other documents, use the same commands with the appropriate
file name.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## NOTES639.TXT

{% raw %}
```
Program name: SST v. 1.00
 
Author name:(C) 1986 Derby Micro-Computer Services, Inc.
 
Address:             P.O. Box 220566
                     Charlotte, NC  28222
 
Telephone Number:   (704) 536-7721
 
Program Classification: Statistics for Market Surveys
 
Registration Fee: $35.00;  students $20.00
                  A full commercial version is available.
 
Program Description:  This is a two disk set.
 
Superstat Share is a shareware Statistical Package for analyzing the results
of Market surveys and other questioneers (poles). It allows weighting the
data set, encryption of your data and automating analysis by using special
batch file commands. The statistical analysis is very complete. The program
is operated by choosing items from menus and filling in forms on the screen.
 
This version allows 25 variables and 50 data columns with up to nine values
to the variable.  The commercial version allows 250 variables and 250 data
columns with up to 9 values each. Both versions handle an unlimited number
of records.
 
This version of SST runs under MS/PC/DOS 2.0 or higher on any IBM PC/XT/AT or
compatible with a color monitor, a monochrome monitor, or a Hercules
monochrome graphics card. It needs a hard disk or two floppies and an EPSON
compatible printer.
 
There are three analysis modules; FREQ, CROSS, and SCATTER. Graphics is
provided in the form of bar and scatter charts.
 
There are measures for nominal to nominal association and significance,
ordinal to ordinal association and significance, and nominal to ordinal
association and significance. Cramer's V is provided as well, along with the
degrees of freedom, N, and missing values.
 
You are also provided row, column, and total percentages and the cells counts
as well as complete information on row and column totals and missing values.
 
You are provide stats for bi-variate correlation, regression, and one-way
ANOVA, as well as descriptive stats on the individual variables.
```
{% endraw %}

## SST.DOC

{% raw %}
```
















                         SuperStat Short Documentation

                  (C) 1986 Derby Micro-Computer Services, Inc.

                                P.O. Box 220566
                             Charlotte, NC  28222
                                (704) 536-7721

         

          


                                ACKNOWLEDGEMENTS


         Dr. Gary R. Rassel,  University of North Carolina at 
         Charlotte political science department.  His comprehensive 
         and insightful knowledge of research and statistics have 
         guided the development of this software from its conception 
         to its documentation.  It is with heartfelt appreciation that 
         I thank you for all you have done.

         Dr. Theodore S. Arrington, University of North Carolina at 
         Charlotte political science department.  My senior research 
         professor, Dr. Arrington's advice has been consistently 
         excellent.  Without his guidance I am sure I would never have 
         become proficient with research or stats.

         Ray Twery, University of North Carolina at Charlotte 
         mathmatics department.  If the others have inspired me to 
         write theoretically correct research code, Mr. Twery has made 
         sure the calculations were correct.

         Sherry Hicks, Charlotte Market Research Group.  Sherry has 
         used SuperStat in all its various forms for the past two 
         years.  She has done everything from small focus group 
         tabulations to massive public opinion survey analysis with 
         the package.  She has supported a growing and deservedly very 
         busy research business with SuperStat alone when other 
         packages would have, in comparison to SuperStat's earlier 
         versions, been easier on her and done a better job.  At the 
         same time she has regularly let me know what the problems 
         were and how it SHOULD as well as could be improved.  For 
         this I am eternally grateful.  I could never have duplicated 
         the extensive real world testing she has done for me.  Due to 
         her work, the package is easier to use, more straightforward 
         in approach, and fast enough to meet tight deadlines.

         Paula Schneiderman, Charlotte Market Research Group.  For 
         trusting and believing in the product.  Paula gave me the 
         chance to put this package to work and never backed away.  

         Mike Derby    

         
                                  DISCLAIMERS

         Epson is a trademark of Epson America, Inc.

         IBM is a trademark of International Business Machines Corp.

         

                                  Introduction

         Welcome to SuperStat Share, the shareware version of 
         SuperStat 1.00.  We hope you will find this program useful.  
         If you do, we request a $35 contribution, students are asked 
         to contribute $20 and send a copy of their student ID.  This 
         version of SuperStat doubles as a demo for the larger and 
         more powerful commercial version.  When you register, you are 
         entitled to a 35$ discount on the purchase of commercial 
         SuperStat.  

         The essential difference between the two versions is this: 
         the shareware version allows 25 variables and 50 data columns 
         with up to nine values to the variable.  The commercial 
         version allows 250 variables and 250 data columns with up to 
         9 values each. Both versions handle an unlimited number of 
         records.  

         As with all shareware, you are allowed to copy and share the 
         program (in unmodified form) with anyone.  You may not charge 
         a fee for the software.  You should provide the entire 
         package of eight modules and the documentation.

         



         CONFIGURING YOUR SYSTEM 

         To start SuperStat, place your Utilities disk in the default 
         drive, type SSTMENU and press <ENTER> (or return as it is 
         also known).  The menu will allow you to configure your 
         system and call the other modules of SuperStat.  

         If you are using a color monitor, you may set colors for use 
         with all modules.  If you are using a monochrome monitor, you 
         can tell the computer it is a color monitor and use reverse 
         video or bright white as your foreground color.  If you are 
         using a Hercules monochrome graphics card, set it to DIAG and 
         use it as if it were a regular monochrome monitor, or set the 
         system to Hercules mode and all color statements will be 
         skipped.  If you are using a hard disk, you may specify drive 
         A: as the default DATA drive and use drive C: etc. as your 
         PROGRAM drive.  

         If you are using a serial printer you may specify it as 
         the default printer along with the baud rate and etc.  
         SuperStat will use any of the five print/com ports you 
         specify for output.

         SuperStat uses EPSON compatible printer commands to compress 
         print in large cross-tabulations (over 5 x 5) and also to 
         squeeze 100 x 100 scatter plots (squeezing is vertical 
         compression).  Check your printer manual for the appropriate 
         printer codes and use SSTMENU to change them if necessary.

         If you wish to change the defaults to the "factory setting," 
         a menu choice is there to reset the original defaults.  

         You may use SSTMENU to call the other modules or you may type 
         the name of the module at the DOS prompt and press <ENTER>.  
         The names are self-explanatory.  
                                
              ex.  A>SCATTER  <ENTER>

              This command will load and execute the scatter plot 
              module.

         SYSTEM REQUIREMENTS

         You need two disk drives, 256 K main memory, and an ASCII 
         compatible printer.  SuperStat uses the Epson standard 
         command set for compressing print.
         
         SSTMENU creates a file called SST.DEF.  If it is not present 
         when you run other modules, the "factory" defaults will be in 
         effect.
         



         COMPATIBLE COMPUTERS

         SuperStat has been tested successfully on a wide range of 
         compatible computers, including some piecemeal systems with 
         very obscure BIOS origins.  However, the TANDY line of 
         compatible computers produce strange results when the 
         <NUMLOCK> or function keys are pressed.  To avoid these 
         problems on TANDY computers, load DOS, press the <NUMLOCK> 
         key, then load SuperStat, and DO NOT press the <NUMLOCK> or 
         function keys again until you return to DOS. 
         

         CODEBOOK ENTRY

         Start with your codebook.  This way, you can enter the 
         codebook filename in the data entry module and it will set 
         the number of columns you need and keep track of your maximum 
         and minimum values (if you have interval level variables in 
         your data set).  

         CODEMAN is the name of the module.  It stands for codebook 
         manager.  

         FILENAME ENTRY

         It first asks you for your codebook filename.  Follow 
         standard file naming conventions (explained in your DOS 
         manual) but do not enter an extension.  Actually, SuperStat 
         won't let you use a period (.) here.  You may use directory 
         naming conventions (paths) if you need them but remember, the 
         default drive is always your filename prefix UNLESS you enter 
         one explicitly.  To do this, enter b:\dir\filename.  When the 
         second character of the filename string is a colon (:), the 
         default drive is over ridden.  This is true of all modules.  
         
         Now the menu appears.  You may now choose to enter a new 
         codebook file.  
         
         NUMBER OF VARIABLES

         You are then asked to enter the number of variables.  This is 
         the number of questions if you are analyzing a questionnaire.  
         Be careful, researchers often number the questions and then 
         alphabetize the other sub-questions.  The sub-questions count 
         as variables in SuperStat.  If you skip a variable, create a 
         one variable codebook and either merge it to the end of your 
         larger codebook, or split the larger codebook, merge the 
         single variable, and finally, merge the latter half of the 
         original codebook.  Merging and splitting is accomplished 
         with FILEMAN, which will be explained later.
         



         TITLE OF THE VARIABLE

         Now you will begin to enter the codebook.  You are first 
         prompted for the title of the variable (up to 32 characters), 
         it can be any combination of characters except the carat (^),  
         the ampersand (&), the underline (_), the tilde (~) and the 
         at sign (@).  
         
         INSERT AND DELETE

         The carat and the ampersand are reserved as additional delete 
         and insert keys respectively.  This is so because SuperStat 
         is set up to allow the use of the ten-key pad for ten-key 
         punch.  When <NUMLOCK> is not active you may use the <INS> 
         and <DEL> keys on the ten-key pad.
         
         CURSOR MOVEMENT

         The backspace key will move the cursor from the right to the 
         left one space at a time but will not erase what is there.  
         The <TAB> key moves the cursor from the left to the right one 
         space at a time.  When the <NUMLOCK> key is not active you 
         may use the <RIGHT> and <LEFT> cursor keys on the ten-key 
         pad.

         CAUTION: When you backspace over a character it is no 
         longer a part of the input string unless otherwise noted.  
         Every character from the cursor right is ignored.  The 
         character remains on the screen so you can tab back over and 
         re-include it.  


         TYPE OF VARIABLE
         
         After you enter the name of the variable you are prompted for 
         the type of variable, either nominal/(O)rdinal, (I)nterval, 
         or (M)ultiple response.  The capital letters in parentheses 
         indicate the key you press to specify the type of variable.  

         INTERVAL LEVEL VARIABLES

         If you specify an interval level variable, you are then asked 
         for the number of data columns this variable will require.  
         You may use from one to twelve columns for the variable.  
         SuperStat Share does calculations to the 32nd decimal place 
         in floating point but if you enter too many large numbers you 
         CAN cause an overflow.  
         



         MULTIPLE RESPONSE VARIABLES

         There are two types of multiple response variables (MRV), a 
         stand alone multiple response variable and a multiple 
         tabulation of a single value of other variables.  A MRV may 
         have up to nine values and use up to ten data columns with 
         its required missing value switch.  The number of columns 
         required by a MRV may be computed by adding the number of 
         values to the variable (1-9) plus one.

         If you specify a MRV you will then be prompted for the number 
         of columns the variable will require.  This is the number of 
         values to the variable plus one.

         THE MULTIPLE RESPONSE MISSING VALUE SWITCH

         Multiple response variables use the first columns of their 
         field in the data set as a missing value switch.  When the 
         first column of a MRV is a one, then the case is present.  If 
         the first column contains a zero, the case is not present and 
         is a missing value.  Missing values may be included or not 
         included in the table calculations depending upon your needs.
         However, if the first column is zero, the case will always be 
         considered a missing value, even if other columns of the 
         field contain responses.

         STAND ALONE MULTIPLE RESPONSE VARIABLES

         Stand Alone MRV's are coded one or zero only.  A one 
         indicates a response, a zero represents a non-response.  

         TAB-OF-OTHER MULTIPLE RESPONSE VARIABLES

         Tab-of-Other MRV's have a single column missing value switch 
         but may tabulate up to nine other variables and will allow 
         the tabulation of any value of the other variables in the 
         range of 1-9.  As the missing value switch is always in the 
         first column of the MRV field, and all fields in the data set 
         must be contiguous, the other variables must immediately 
         follow the switch.  

         



         MULTIPLE RESPONSE VALUE LABELS

         After you specify the number of columns, you are then 
         prompted for the value labels of the variable, in turn, one 
         at a time.  If the MRV stands alone, this is usually some 
         abbreviation of the response category.  If this MRV is a tab 
         of other variables, the labels are usually some abbreviation 
         of the other variable's titles.  
         
         As you enter the labels, you are told which column each label 
         is associated with.  Notice that the first label is 
         associated with the second column of the MRV field.

         NOMINAL-ORDINAL VARIABLES

         Nominal and ordinal (NO) variables are treated the same by 
         the analysis modules so it saves time and programming to 
         group them in the type of variable prompt.  

         If you specify a NO variable you will then be prompted for 
         the number of values to the variable.  Then you will be 
         prompted to enter the value labels, in turn, one at a time.  
         If this is an ordinal variable, be sure to enter the codes in 
         their proper order. 

         The labels may contain any combination of characters except 
         the carat and ampersand.

         LINE ENTRY

         "Any combination of characters" means any ASCII character 
         with a code between 32 and 126 except the ^, the &, the ~, 
         the _, and the @.  Periods are sometimes dis-allowed, as are 
         commas, depending upon the error prevention needs of the 
         program at a given place.  

         All data entry in SuperStat is line entry.  One piece of 
         information at a time, as it is needed, only if it is needed, 
         with no backing up.  All prompts have error checks to ensure 
         valid entries, although the program cannot, and does not 
         check for every possible error, just the most common, or the 
         only ones possible at a given place.

         Full screen editing is nice and we are sure you have a 
         favorite word processor.  Just learn the format of a 
         SuperStat codebook file and then use an ASCII word processor 
         to enter and edit the codes.  We fully expect experienced 
         users to eventually by-pass our "hand holding" entry modules.  
         Go ahead, we've made it easy for you.

         



         FORMAT OF CODEBOOK FILES

         Two files are created by CODEMAN, ".TTL" files and ".VRN" 
         files.
         
         The VRN file contains:

         Ex.  5,22,5
              | |  |
              | |  -> total variables       
              |  -> first column of next variable
              -> next variable number

         When the first and third number are equal, the codebook has 
         been completed. 

         The TTL file contains the codes.  The first line contains the 
         specifications for the variable to follow.

           ----------> Type of variable (must be in double quotes)
          |    ------> Number of first column in data field
          |   |  ----> Number of columns used by this variable
          |   | |  --> Number of labels for the variable
          |   | | |
          |   | | |
         "NO",1,1,4
         Title of the variable
         label-1
         label-2
         label-3
         label-4
         
         The format for MRV's is functionally equal.

         "MSA",2,5,4               ("MSA means stand alone)
         Title of the variable     ("MTO" means a Tab-of-Others)
         label-1
         label-2
         label-3
         label-4
         
         The format for interval variables is slightly different.

                 |-> DIFFERENCE = values always equal 2  
         "I",7,3,2
         Title of the variable
         Maximum value         (always initialized to zero)
         Minimum value         (always initialized to nines, if three
                                columns, then 3 nines)
         Ex.   "I",7,3,2
               Age of Respondent
               0
               999
         



         TAKING A BREAK

         If you want to take a break from code entry, just press 
         <ESC>ape at the title of the variable prompt.  This will 
         close the file and return you to the menu.  Information is 
         always saved after each variable is entered so you don't need 
         to worry about explicitly saving files.

         ADDING TO INCOMPLETE CODEBOOKS

         When you come back to your data entry, choose the second menu 
         item, "add to existing codebook."  The routine is the same as 
         above.

         PRINTING A CODEBOOK

         You may print your codebook to a disk or printer.  It comes 
         up on screen as you do so.  Press <CTRL> and <NUMLOCK> 
         together to slow the process down.  Press any key to resume 
         printing.  
         
         If you print to disk, you will be prompted for an output 
         filename.  Follow the same conventions as always.  Remember 
         your default drive specification is still in effect.
         
         If you print to a printer other than LPT1:, be sure to change 
         the system defaults with SSTMENU.  Any ASCII compatible 
         printer should work fine.

         EDITING A CODEBOOK 

         Press (4) when you see the CODEMAN menu.  First the variables 
         that have been entered so far are displayed.  You are then 
         prompted for the NUMBER of the VARIABLE you wish to edit.  

         After you have chosen a variable the screen clears and the 
         variable title and labels are displayed.

         A prompt line allows you to edit the titles, labels, level, 
         columns, maximum and minimum, save the changes or <ESC> to 
         the menu.  

         If you do not change anything, the program will not save the 
         codebook to disk, even if you tell it to.  You must 
         explicitly save the changes to disk at the prompt.

         If you change something and then change your mind, press 
         <ESC>ape.  This will take you back to the menu without saving 
         the changes.  All changes are lost.

         



         DATA ENTRY

         Data entry is accomplished with the DATAMAN module which,
         you might have guessed, stands for "data manager."  You may 
         call the module from the main menu or you may type the module 
         name at the DOS prompt.

         First you will be asked for a data filename.  Use standard 
         file naming conventions and remember that your default DATA 
         drive is in effect.  Next you are prompted to enter your 
         codebook filename.  The data manager will look at your VRN 
         file to determine the number of columns required, keep track 
         of maximum and minimum values of interval level variables and 
         save the changes (if any) when you leave the input routine.  
         
         The menu now appears.  Press (1) to begin the entry of a new 
         data set.  If you have not entered the codebook filename you 
         will first be prompted to specify the number of data columns 
         required.  This is the middle number of the VRN file minus 
         one.

         Next you will see a data entry record line.  It specifies the 
         record number and provides a marked field to ease data entry.
         Above it is a column counter and below it lies several help 
         statements.

         Ex.

         Column 1
         Record #1  ____+____|__





         Fill the field completely and press <ENTER>.
         Missing Values (blanks) are zero (0) for Nominal/Ordinal
         and asterisks (*) for Interval/Ratio variables.
         Press <ESC> when finished or to return to menu.
         Use (^) for delete and (&) for insert.

         INSERT AND DELETE

         The carat (^) and the ampersand (&) keys have been changed 
         respectively to delete and insert to allow full use of the 
         ten-key pad.    
         



         MISSING VALUES

         Missing Values (blanks) are zero (0) for Nominal/Ordinal and 
         asterisks (*) for Interval/Ratio variables.  No blank spaces 
         are allowed.  Missing values are always zero for 
         nominal/ordinal variables.  If you forget and enter 
         asterisks, or just prefer them, don't worry.  They are 
         functionally equivalent to zeroes in SuperStat WHERE IT 
         MATTERS.  Namely, in FREQ and CROSS.  In SCATTER, where 
         interval level variables are processed, zeroes are important 
         numbers.  Therefore, asterisks are considered missing values 
         and are automatically not included.  

         
         DATA FILES

         DATAMAN creates two files, the ".DTA" file, which holds your 
         raw data, and the ".APD" file.

         Example APD file:
                           
         250,12 
         |   |
         |    -> number of columns
          -----> number of records

         Example record in DTA file:

         67864236181298367432

         
         SAVING RECORDS

         Each record is automatically saved each time you press 
         <ENTER> and the APD file is updated.  This is done to prevent 
         any loss of data.  It will be a bit slow for you if you never 
         have records over 10 to 15 columns long.  But losing data is 
         no fun and we prefer the extra second it takes to save one 
         record and move on the next.

         Each record is saved in ASCII format so you can transfer it 
         to different programs, or from your favorite word processor 
         to SuperStat.  Just use a fixed format in the manner of 
         DATAMAN, and the analysis modules should have no trouble 
         picking it up.  
         
         CAUTION: Some word processors do not allow non-document 
         processing and inbed spaces in front of your records.  Some 
         word processors imbed characters invisible to you but 
         apparent to the computer.  These problems can cause 
         unpredictable results.  
         



         SuperStat uses fixed field format to save space on the disks 
         for large data sets.  Commas take up a lot of room.

         SuperStat writes data to the disk SEQUENTIALLY.  That is, one 
         record at a time, one after the other, from the first to the 
         last.  It reads data the same way.  Except when editing, this 
         is the faster way to manipulate the data.  

         TAKING A BREAK

         Just press <ESC>ape at the beginning of the next line and you 
         will return to the menu.  When you come back to your data 
         entry, choose menu item (2) to add more data.  DATAMAN will 
         pick up where you left off and work just as it is explained 
         above.

         PRINTING DATA

         Choose menu item (3) to print a copy of your data set.  You 
         will print to the default printer.


         EDITING DATA

         Choose menu item (4) to edit the data.  It is best to keep a 
         list of records with errors so that you can go through the 
         data set sequentially.  You can't back up so if you skip a 
         record you need to edit, you'll have to begin again.  This is 
         when sequential file manipulation gets slow.  You have to 
         organize your editing to overcome it.

         The edit routine will ask you for the record you wish to edit 
         and then load it.  It will put the old record on that 
         familiar data entry line and position the cursor at column 
         one.  You need only correct the mistake and press enter.  
         Unlike other line entry in SuperStat, this one routine allows 
         you to press <ENTER> from anywhere on the line (except column 
         one) without ignoring all characters from the cursor, right, 
         to the end of the line prompt. 
        
         



         MANAGING FILES
         
         After you have completed your codebook and data entry, there 
         may be some manipulations you would like to do to your files 
         as a whole.  The FILEMAN module provides a number of options 
         for working with your data to whittle it down or build it up.

         You may, for instance, wish to have more than one person 
         enter your data to facilitate processing.  FILEMAN will join 
         the various files together into a single whole for further 
         processing and analysis.  

         In general, you are first asked for a first source filename 
         and if needed, a second source filename.  You are then 
         prompted for a new output filename.  It is assumed that you 
         do NOT want your original data altered (except when 
         encrypting).  
         
         
         ENCRYPTING DATA

         The first menu option allows you to encrypt your data based 
         on a single letter encryption key in the range of 1-9, a-z, 
         and A-Z.  It is the ASCII code that is operative.  Therefore, 
         you have 62 possible keys.  You are also prompted for a 
         password.  The password is also encrypted so that snoops 
         cannot decipher it.  

         If you forget either your key or your password, your data is 
         lost.  The analysis modules cannot work with the encrypted 
         data and we cannot decrypt your data for you.  If you keep an 
         un-encrypted version of the data, you defeat the purpose of 
         encryption.  The source file is destroyed but could probably 
         be un-deleted with one of the utilities available on the 
         market.  Therefore, if you really wish to hide the data, 
         encryt the data, then back up the encrypted file, and 
         finally, reformat the original data disk and any backup data 
         disks.  Before you reformat, be sure any other important 
         files on the disk are backed up.  Consult your DOS disk for 
         more information on formatting diskettes.  

         APPENDING DATA FILES

         The second menu option allows you to append data files (add 
         records from one file to another).  This is useful when more 
         than two people are entering data on different machines.  The 
         records must be the same length.  The files may have 
         different numbers of records in them.  If you are working 
         with two large files,  read the data from one disk and write 
         to another.  SuperStat will write the data wherever you wish 
         so if you have three disks, you can read one file from A:, 
         another from B:, and write to C:.  If your data fills both 
         source disks, you will have no choice in this matter.
         



         Ex.  How data files are appended.

         123123123123123       1st source data file
              /|\
               |
         987987987987987       2nd source data file

         MERGING DATA AND CODEBOOK FILES

         The third menu option allows you to merge data and codebook 
         files (add variables).  If you only wish to do one or the 
         other (presumably because one set of files, either data or 
         codebook, are not yet entered), a prompt gives you that 
         option.  If you have both sets of files entered, merge them 
         at the same time.  SuperStat does most of the gritty work of 
         keeping track of specifications for you and prevents 
         mistakes if it can.  Your data files must contain the same 
         number of records to use this feature.

         Ex. How data files are merged. 

         1st source data record          2nd source data record
         123123123123123123   <------    987987987987987987

         Since you are adding variables to the data set, your codebook 
         (if it exists) must be updated to allow the analysis modules 
         to use the added data.  The second source codebook is merged 
         to the end of the first source codebook.  Don't let this 
         confuse you.  The action of the codebook merge resembles the 
         action of the data append.  This is due to the diference in 
         the structure of the data and codebook files.

         Ex. How codebook files are merged.

         "NO",1,1,2
         Variable Title                  1st source codebook
         Label 1
         Label 2
            /|\
             |
             |
         "NO",2,1,3
         Variable title
         Label 1
         Label 2
         Label 3

         FILEMAN keeps track of the number of columns you are using 
         and prevents you from creating a codebook (or data file) 
         larger than SuperStat can handle and re-numbers the merged 
         variables to reflect their new position in the new file.
         



         SPLITTING DATA AND CODEBOOK FILES

         The fourth menu option allows you to separate variables away 
         from each other in the data set.  It has an action opposite 
         to that of merging with regard to both data and codebook 
         files.  Your original file is not destroyed, two files are 
         simply created where there was only one.  Again, the program 
         keeps track of the position of the variables in the new data 
         set.


         PERMANENT RECODES

         The fifth menu option allows you to permanently recode your 
         data.  If you will be using a variable in its recoded form on 
         a regular basis throughout your analysis, it may be 
         advantageous to recode it permanently and put it, along with 
         all of the other variables, into a separate data file.  This 
         will save time and keystrokes later.  You must recode both 
         the data file and its codebook for the analysis modules to 
         operate correctly.  

         You are prompted for the number of variables you wish to 
         recode (up to ten at a time), the number of the variable 
         (each in turn), and for each variable, the number of 
         nominal/ordinal categories you wish to create.  Then you are 
         prompted for the high and low values of the variable that are 
         to fit into the new categories and in turn, the value label 
         for each new value.  
         
         You are free to recode any variable except MRV's.  You are 
         free to recode zeroes to nines and fives to threes if that is 
         what you need to do.  

         When you complete the recode specifications the new recoded 
         data set is saved to disk under a the new filename you are 
         prompted for.

         RECODES IN THE ANALYSIS MODULES 

         The operation of all other recode routines is the same with 
         one exception.  When recoding a variable in the analysis 
         modules, the recode is transient, that is, it is NOT saved.  

         PERMANENT SELECTIONS

         The sixth menu option allows you to permanently select a 
         group of records based on one value of up to nine different 
         variables.  A new data file is created which uses the 
         original codebook.  No data is changed and no variables or 
         records are lost.  You simply state your criteria for the new 
         data set and the records of the source file are searched for 
         cases that match the criteria.  The matching records are then 
         written to a new file under a filename you are prompted for.  
         



         You are allowed to make up to 9 selections.  The actual 
         selections you make are of the values to variables.  You may 
         not select values of Interval or Multiple Response variables.  
         You may, however, recode an interval level variable and then 
         select one of the new categories. 
         
         You are prompted for the operator on which to base the 
         selection.  The operators are AND, OR, and NOT.  If you 
         choose AND, all of the selections must match the 
         corresponding values of the case for the case to be selected.  
         
         Ex.  If selected value 1 = corresponding case value AND
                 selected value 2 = corresponding case value AND
                 .
                 .
                 selected value 10 = corresponding case value THEN

              select the case and write it to the new file.
            
         If you choose OR, at least one of the selections must match 
         the corresponding value of the case for the case to be 
         selected. 
         
         Ex.  If selected value 1 = corresponding case value OR 
                 selected value 2 = corresponding case value OR 
                 .
                 .
                 selected value 10 = corresponding case value THEN

              select the case and write it to the new file.
                  
          If you choose NOT, if any of the selections of 
         match the corresponding values of the case, the case will not 
         be selected.  The action for NOT is actually AND NOT.

         Ex. 
          If selected value 1 does NOT = corresponding case value AND 
             selected value 2 does NOT = corresponding case value AND
             .
             .
             selected value 10 does NOT = corresponding case value THEN

          select the case and write it to the new file.
         

         SELECTIONS IN THE ANALYSIS MODULES
         
         The operation of all other selection routines is the same with 
         one exception.  When selecting a value of a variable in the 
         analysis modules, the selection is transient, that is, it is 
         NOT saved.  
         


                  
         WEIGHTING THE DATA SET

         The seventh menu option allows you to weight the data set 
         based on the selection of three weighting criteria.  The 
         selection operator is always AND.  In other words:

         If selected value 1 = corresponding case value AND
            selected value 2 = corresponding case value AND
            selected value 3 = corresponding case value THEN

         add another identical case to the data set the number times 
         specified as the weighting factor.

         You are prompted for the weighting factor.  It can be in the 
         range of 0.1 to 9.9.  As cases are found that match the 
         weighting criteria, the case is duplicated the number of 
         times indicated by the integer part of the weighting factor.  
         The fractional parts are added together each time a match is 
         found until they are greater than or equal to 1, at which 
         time 1 is added to the weighting factor, and the fractional 
         part is reduced by one.  The addition of 1 to the weighting 
         factor is a transient addition.  You will not end up with a 
         weighting factor of 45 through repeated addition.  
         
         The weighted data set is written to a new file under a new 
         filename which you are prompted for. 
        
         



         ANALYSIS

         There are three analysis modules supplied with SuperStat 
         Share; FREQ, CROSS, and SCATTER.  You may run the programs 
         from SSTMENU or you may type the filename at the DOS prompt.

         Ex. A>FREQ

         
         FREQUENCY DISTRIBUTIONS

         The frequency distribution module is called FREQ.  It will 
         analyze from 1 to 250 variables, display a bar chart, and 
         provide:

         Value counts
         Value percentages
         Mean Ordinal Rank
         Mode
         Median
         Standard Error at 95% confidence level

         Some of you will wonder why there are no interval level 
         statistics in the module.  It is simply because it is set up 
         to handle CODES, not numbers (although the codes themselves 
         are numbers).  It is basically a nominal and ordinal level 
         variable analyzer, and based on that fact, higher level 
         statistics are simply inappropriate.  If you insist on them 
         in spite of this, use SCATTER, it is the real number 
         analyzer.

         First you are prompted for the data filename and then the 
         codebook filename.  The reason you have to enter both is 
         simple; if you ever repeat a study, you can use your old 
         codebook.  The filenames can be the same because the data 
         entry modules give them different filename extentions.  FREQ, 
         CROSS, and SCATTER can tell them apart.

         After your filenames are entered the menu appears.  If you 
         wish to make selections or recodes, do so first.  The 
         routines are identical to those in FILEMAN except that the 
         changes you make are not saved.  

         Next you may choose to run all of the frequencies or just 
         one.  Either way, all of the variables are tabulated, you 
         just have some options about which variables are to be 
         printed and where if you choose to print only one.  
         
         If you choose to tabulate a single variable, you are first 
         given a display of your variables to choose from.  Press 
         <ENTER> to skip the display or the <SPACEBAR> to see 
         subsequent pages.  You are then prompted for the NUMBER of 
         the first variable you wish to see.
         



         Either way, you are then asked for the value you wish to be 
         used to tabulate multiple responses.  If you only have 
         MSA's, this is always one (1).  If you have MTO's, your 
         choices are in the range of values common to the variables 
         you specified to be included in each MTO, ie., if the 
         variables each have 6 values, you may choose to tabulate 
         value 4.
         
         NOTE: You are only prompted for the multiple response value
         if you have one in the data set.   
                  
         Either way, you are then asked whether you want missing 
         values included in the calculations.  If you do, every 
         calculation will be affected  by the higher N.  If you do 
         not, every calculation will be affected by the lower N.  You 
         are reminded on the output what your choice was.  

         The variables are now tabulated.  As FREQ works, it checks 
         for out of range values and if it finds any, it warns you on 
         screen and sets the value to zero (0).  If you wish to get a 
         listing of the error messages, use DOS piping to redirect 
         output to a disk file and press <ESC> at the next prompt 
         (consult your DOS manual for more information on DOS piping).

         If you chose to tabulate a single variable, the variable you 
         chose is displayed first.  You are then asked where you want 
         the out put to go; the printer, a disk file, both, or 
         neither.  You may also skip a page from the prompt.  The 
         program then lets you choose again.

         If you choose the printer, the output will go to the default 
         printer.  If you choose the disk or both, you will be asked 
         for an output filename and the file is then written.  If you 
         choose both, it is also printed to the default printer.  If 
         you choose neither, you are then asked which variable you 
         wish to see next.  If none, press <ESC>.  Otherwise, type the 
         number of the variable and press <ENTER>.  

         If you chose to print all the variables, the first variable 
         is displayed and then the print prompt described above.  Its 
         operation is the same.  You are NOT asked which variable you 
         wish to next.  Each variable is displayed, in turn, as it is 
         printed.  If you wish to see all the variables but don't want 
         them printed, press (N) for neither and be ready with the 
         <CTRL><NUMLOCK> combination to slow things down.  It works so 
         fast you will need to stop it to see anything.
         



         PIPING
         
         When you have learned the prompts it will be easier for you 
         to get your work done if you use piping to redirect input.  
         Piping fools the modules such that when they look for 
         keystrokes, DOS gives them characters you have typed in a 
         file on disk.  Using this method you can fully automate the 
         analysis process.  By combining batch files and piped input 
         files, you can set your machine and it will do the work while 
         you do something else.  The modules have all been set to 
         allow this to take place and streamline the process.  You can 
         literally run thousands of frequencies, crosstabs, and 
         scatter plots on any number of data sets WHILE YOU SLEEP.  
         Just make sure you have the keystrokes correct, and enough 
         paper and disk space to handle the job.

         For purposes of piping, the following keys have functional 
         equivalents:

         <ENTER>    = tilde (~)
         <SPACEBAR> = underline (_)
         <ESC>ape   = at sign (@)

         CAUTION:  ALWAYS end your input file with the appropriate 
         "return to DOS" character.  Otherwise, the "big red button" 
         will be required to get control of the computer back (also 
         known as the "on/off" switch).


         CROSS TABULATIONS

         The crosstabs module is named CROSS.  Just as in FREQ, you 
         are first asked for your data and codebook filenames.  Then 
         you see the menu.  

         Select and recode works just as in the other modules.  You 
         can recode all the values of one variable into a single value 
         and then select that value as an independent variable.  

         You are then shown the menu again and you may then choose to 
         run a crosstab.

         You are first shown a list of all your variables.  You may 
         skip the display by pressing <ENTER> or see other pages by 
         pressing <SPACEBAR>.  You are then asked for and independent 
         and dependent variable.

         Next you must tell the system whether you want missing values 
         included in the calculations.  
         



         Now CROSS runs through the data, does the calculations and 
         displays a bar chart.  You may skip the display of the charts 
         by pressing <ENTER> or you may see the others by pressing the 
         <SPACEBAR>.  There are as many charts as there are values of
         the independent variable.

         Next you are asked if you want to print the bar charts to the 
         line printer, a file on disk, or not at all.  Press the 
         letter in parentheses that corresponds to your choice.  If 
         you choose to print to disk you will be prompted for a 
         filename.  

         Next you are asked if you want the table printed to the line 
         printer, a file on disk, or not at all.  Press the letter of 
         your choice.  You will be asked for a filename if you choose 
         to print to disk.  

         After printing you will return to the menu.

         You are provided stats for bi-variate association, 
         significance, and chi-square appropriate for nominal and 
         ordinal level variables.  

         Goodman and Kruskals Tau is provided in place of Lambda 
         because it is a more sensitive measure.  Where you can SEE 
         some association and Lambda shows none, G & K's Tau will pick 
         it up.

         There are measures for nominal to nominal association and 
         significance (G & K's Tau and Chi-Square), ordinal to ordinal 
         association and significance (Gamma and Z-Score Gamma), and 
         nominal to ordinal association and significance (Wilcoxons 
         Theta and contingency coefficient).  Cramer's V is provided 
         as well, along with the degrees of freedom, N, and missing 
         values.

         You are also provided row, column, and total percentages and 
         the cells counts as well as complete information on row and 
         column totals and missing values.  


         SCATTERPLOTS
                 
         The scatterplot module is named SCATTER.  It is structured to 
         work very much like FREQ and CROSS.  You are asked for your 
         filenames and then you see a menu.  You can select and recode 
         just as in the other modules.  

         When you choose to run a scatterplot you are shown your 
         variables and prompted for the independent and dependent 
         variables.  
         



         Next you choose to consider zero as an absolute minimum or 
         not.  If you choose to do so, the minimum value of both 
         variables becomes zeroe (0), thus making your interval level 
         variables ratio variables.

         Missing values are automatically not included because they 
         are not numbers and SCATTER only works with numbers.  
         Remember that asterisks (*) are missing values in SCATTER.  

         Next SCATTER runs through the data, does the calculations, 
         and displays a 20x50 scatterplot on the screen.  Press a key 
         to see the statistics.  
         
         After viewing the stats you are asked if you want to print a 
         30x50 scatterplot or a 100x100 scatterplot to the line 
         printer, disk, or not at all.
         
         The 30x50 scatterplot is appropriate for daisy wheel printers 
         or disk files.  The 100x100 scatterplot is appropriate for 
         dot matrix printers compatible with the Epson standard 
         command set for sqeezing and compressing print.  Both formats 
         come very close to being a square plot on their appropriate 
         mediums.
         
         You are provide stats for bi-variate correlation, regression, 
         and one-way ANOVA, as well as descriptive stats on the 
         individual variables. 

         


         
                                   REFERENCES


         Evans, James D., Invitation to Psychological Research. Holt, 
              Rinehart, and Winston.  New York.  1985

         Manheim, Jarol B. and Rich, Richard C. Empirical Political 
              Analysis, Research Methods in Political Science. 
              Prentice Hall, Inc., Englewood Cliffs, NJ. 1981.

         Watson, George and McGaw, Dickinson.  Statistical Inquiry. 
              John Wiley and Sons.  New York.  1980.

         McClave, James T. and Dietrich, Frank H., II. Statistics 
              Dellen Publishing Co.  San Francisco.  1982. 

         Welch, Susan and Comer, John C. Quantitative Methods for 
              Public Administration, Techniques and Applications.  The 
              Dorsey Press.  Homewood, IL.  1983

         Babbie, Earl R. The Practice of Social Research.  Wadsworth 
              Publishing Co.  Belmont, CA.  1979.

         Phillips, John L.  Statistical Thinking.  W.H. Freeman and 
              Co.  San Francisco.  1973.

         Freeman, Linton C.  Elementary Applied Statistics. John 
              Wiley and Sons.  New York.  1965.

         Jones, E. Terrence.  Conducting Political Research. Harper 
              and Row.  New York.  1984.  pp. 166 - 167.
             
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0639

     Volume in drive A has no label
     Directory of A:\

    CODEMAN  EXE     65946   8-23-86   5:56p
    DATAMAN  EXE     52234   8-23-86   3:30p
    FILEMAN  EXE     73898   8-23-86   3:33p
    FILES639 TXT       959   1-04-80   5:01p
    GO       BAT        28  11-27-86  12:31p
    GO       TXT       490   1-04-80   5:00p
    NOTES639 TXT      2008   1-04-80   5:04p
    SST      DEF       158   8-23-86   3:14p
    SST      DOC     49589  12-08-86  11:03a
    SSTMENU  EXE     52106   8-23-86   3:05p
           10 file(s)     297416 bytes
                           19456 bytes free
