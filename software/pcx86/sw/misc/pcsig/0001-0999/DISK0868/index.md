---
layout: page
title: "PC-SIG Diskette Library (Disk #868)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0868/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0868"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-MAIL 1 OF 3 (ALSO 869, 1475)"

    PC-MAIL is a menu-driven mailing list and address management program
    which will print mailing labels, keep track of addresses and allow you
    to delete the older ones.
    
    PC-MAIL's sort function alone makes it worth the money.  With this, you
    can sort on any field in a matter of seconds.  All menu routines
    provide
    a listing of the options available to the user, making the program easy
    to use.  Each program function opens with an introductory screen,
    explaining the functions provided.  Just follow the instructions on the
    screen and it will explain what to do next.
    
    The type and size of labels are user-specified.  Widths can run from
    2-1/2" to 5" and height ranges from 1" to 2-1/2."
    
    PC-MAIL is not just another mailing list program, but a
    fully-functional
    package which will greatly assist you in your home or business.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES868.TXT

{% raw %}
```
Disk No:  868                                                           
Disk Title: PC-Mail System Disk (869-1475)  (Disk 1 of 2)               
PC-SIG Version: S3.1                                                    
                                                                        
Program Title: PC-Mail                                                  
Author Version: 2.92S                                                   
Author Registration: $30.00                                             
Special Requirements: Two floppy drives and a printer.                  
                                                                        
PC-MAIL is a menu-driven mailing list and address management program    
which will print mailing labels, keep track of addresses and allow you  
to delete the older ones.                                               
                                                                        
PC-MAIL's sort function alone makes it worth the money.  With this, you 
can sort on any field in a matter of seconds.  All menu routines provide
a listing of the options available to the user, making the program easy 
to use.  Each program function opens with an introductory screen,       
explaining the functions provided.  Just follow the instructions on the 
screen and it will explain what to do next.                             
                                                                        
The type and size of labels are user-specified.  Widths can run from    
2-1/2" to 5" and height ranges from 1" to 2-1/2."                       
                                                                        
PC-MAIL is not just another mailing list program, but a fully-functional
package which will greatly assist you in your home or business.         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```














                               PC-MAIL 2.91S (C)

                                      BY

                                CARL F. MIESCKE

                                 FOTO 64, INC.

                COPYRIGHT 1986,1987,1988,1989 - CARL F. MIESCKE
      
                         **** ALL RIGHTS RESERVED ****      
      
      



      
                        
                            ** TABLE OF CONTENTS **

         INTRODUCTION....................................... 1.
         PROGRAM FEATURES................................... 2.
         LICENSE AGREEMENT.................................. 5.
         MULTI USER PACKAGES................................ 6.
         TECHNICAL SUPPORT.................................. 6.
         SYSTEM REQUIREMENTS................................ 6.
         THE PC-MAIL DISK................................... 7.
         REGISTRATION....................................... 10.
         INSTALLATION OF PC-MAIL
                5 1/4"DISK DRIVE SYSTEM..................... 12.
                INSTALLATION OF REGISTRATION NUMBER..........14.
                HARD DISK SYSTEM.............................15
.               3 1/2" DISK SYSTEM...........................16.
         START UP OF PC-MAIL.................................17.
         CREDITS.............................................18.
                  








        FOTO 64, INC. - PO BOX 2130 - SARATOGA, CA 95070-2130


                                                                1.
                               ** INTRODUCTION **

         THE ADDRESS/MAIL MANAGER FOR THE SMALL BUSINESS AND HOME.
            ...TESTED AND PROVED IN A BUSINESS ENVIRONMENT...

         PC-MAIL is a self prompting menu driven mail and address 
         management program designed for personal as well as
         business use. PC-MAIL evolved out of a small business's need 
         encountered in 1983. Since that time its design, size and 
         flexibility have grown to meet the needs of a small growing 
         corporation. 

         PC-MAIL was designed for use by the inexperienced. Little 
         inservice is required of the new user. It makes liberal use 
         of information and help screen, is menu based, and is 
         interactive with the user.
         
         WITH PC-MAIL YOUR COMPUTER WILL BECOME A POWERFUL TOOL FOR 
         MAINTAINING CONTACTS WITH FRIENDS, CLIENTS, AND BUSINESS 
         ASSOCIATES. 


                                                                    2.
                        ** FEATURES OF PC-MAIL 2.91S **                    

                           ** GENERAL OPERATIONS **
         
         DATA INPUT
             Creates new data files.
             Appends new data to existing data files.
             Accepts input on ten fields.
                Last Name    First Name      Title   Company
                Address      City            State   Zip code
                Telephone    Classification Code*
             Field lengths are preset to assure uniform output.
             Field Constant input may preset for repeating input.
             *Accepts multiple code input
        
         DATA SEARCHES
             Searches file records on all ten fields.
             Displays specified records or record series.
             Searches records using the fixed field data.
             Searches records using the variable string search.
             Searches class. code for imbedded data entries.
             Corrects record data.
             Deletes record data.
             Prints mailing labels of single records.

         DATA REORGANIZATION
             Alphabetizes on non-numeric fields.
             Numerically reorganizes numeric fields.
             Creates new files from reorganized data.
         
         OTHER FEATURES
             Backs up data files.
             Permits data drive designation of A through N.
             Validates the presence and readiness of drive selected.

                                                                    3.
                             ** FILE UTILITIES **

         Copies and renames files from one disk to another.
         Sorts records and creates new files from the sorted data.
         Combines (merges) two or more files into one file.
         Removes designated records from data file and renumber records.
         Removes empty records from data file and renumbers records.
         Renames data files.
         Erase (KILL) data files
         Searches records and permits creation of a new data files 
          from designated individual records.
           
                         ** PRINTER UTILITIES **

         PRINT MAIL LABELS
             Prints up to 16 label sizes.
             Prints two address formats.
             Prints one to five label rows.
                Each row may be the same address.
                Each label may be a different address.
             Prints multiple copies of a single label.
             Truncates data if label is to small.
                Notes truncated record numbers on screen.
             Print type may be set to:
                regular type - 10 characters per inch
                compress type - 17 characters per inch.
             Printer may be set to 8 1/2" or to 15" carriage size.
             A label/data match test determines if data will fit upon
               the label size and print type selected. Numbers of the
               truncated records will be displayed.

         PARCEL LABELS
             Design and print multiple copies of shipping/parcel labels
               with return addresses on lables up to 3" X 5".
         
         LISTING DATA
             Prints rosters and telephone listings from data files.
                 Prints listing of all record data with title, and page breaks. 
             Printer may be set for a 8 1/2" or 15" carriage.
             Type may be set to 10 or 17 characters per inch.
             A title may be entered on the first page of output.
             Page breaks set for 11". 

                                                                    4.
         ENVELOPES
             Addresses business envelopes with input return address.

         MAILER
             Permits the creation,printing and addressing of custom mailers.
                Enter messages of up to 13 lines, and over 600 characters.
                Enter and/or modify a return address.

         OTHER
             Prints individual record data on the following pin feed stock:
                 3" X 5" index card stock
                 8 1/2" X 11" sheets.
                 2 1/6" X 4 roll file cards.
                 2" X 3" name badges
          
                                 ** HELP PROGRAM **

         The help program consists of 15 screens which can be reached 
         by menu selection or can be viewed sequentially. Included are
         the following topics.
             History of PC-MAIL         Installation and credits
             Program organization       Information on routines/functions
             Operational notes          Registration/Shareware


                                                                    5.
                            ** LICENSE AGREEMENT **                         

                                                                               
         PC-MAIL 2.91(C)(Copyright 1986,1987,1988,1989) is 
         protected by the Copyright Laws of the United States of 
         America. The original and all copies of PC-MAIL shall 
         remain the property of Foto 64, Inc. and the Author.  
         
         PC-MAIL 2.91S is distributed under the shareware 
         concept. If you find this program of use to your photo 
         or computer operations it is expected that your will 
         register it with the author for $30.00. This small sum 
         will assist in defraying the cost of the development of 
         PC-MAIL and its future upgrades.

         Your use of PC-MAIL constitutes your agreement with the 
         following conditions. 
          
             This copy of PC-MAIL and all back up copies are the 
             property of the author.                                         
         
             You are here by licensed to operate PC-MAIL on one 
             computer in a single user environment. 

             You may share with other computer users unaltered
             disk copies of the original PC-MAIL disks free of
             charge.
                             
             You will not modify, reorganize, transfer, 
             disassemble, or remove from operation any PC-MAIL 
             files, documentation, credits, or routines. 
                        
         Deviation from the above conditions shall be constituted a 
         violation of your license agreement. Under such conditions 
         FOTO 64, Inc. and/or the Author may declare the agreement 
         null and void and require the return of the original PC-
         MAIL disk and all back up and working copies. 

         DISCLAIMER: Every effort has been made to provide an 
         operating program which is free from operational defects 
         PC-MAIL is licensed on as is basis and neither FOTO 64, 
         Inc. or the author can be held liable for lost data, time. 
         or computer incompatibility. 

                                                                    6.
                                                                 
                           ** MULTI USER PACKAGES **

         If PC-MAIL 2.91 is to be used on a network or multi user 
         system, please contact the author for a multi user 
         licensing agreement. 
         
                           ** TECHNICAL SUPPORT  **

         Technical support is available to registered users only. 
         To assure support please complete the registration form 
         fully and return with your $30.00 registration fee, to FOTO 
         64, Inc.. You will receive by return mail your registration 
         package, which will include your registration number and 
         access code.  

         A copy of the registration form may be obtained by 
         running the program PRTREG located on the system 
         disk or by entering "R" from the main PC-MAIL menu.

                              ** SYSTEM REQUIREMENTS **
         
         COMPUTER       IBM PC,XT,AT OR TRUE IBM COMPATIBLES
                        Adapters accepted: MONOGRAPHIC, CGA, HERCULES(MONO)
                                           VGA, OR EQUIVALENTS

         RAM            128 K minimum

         MONITOR        Black and White*, RGB Color, Composite Color
                        *Black and white composite driven monitors driven
                        from CGA board may require PC-MAIL 2.91SP. 
                        Available only with registration.

         DRIVES         Dual 5 1/4 disk drives; 3 1/2" disk drives;
                        or Hard Disk and disk drive.

         SYSTEM         IBM or MS DOS 2.1+ 

         PRINTER        IBM Graphics Printer, Okidata* 82,83,92,93 or
                        any compatible printer.  
                        * With or without the plug and play kit,

                                                                    7.

         PC-MAIL was programed on and designed for operation on true 
         IBM compatible machines. Unfortunately some compatibles are 
         not truly IBM compatibles. Every effort has been made to 
         assure PC-MAIL will be free from difficulties when operated 
         on compatible equipment, however, problems may be 
         experienced on occasional machines.. Should you encounter a 
         problem, please drop a note to FOTO 64, Inc. describing the 
         difficulty and your equipment configuration. This feed back 
         will assist in the development of future versions of PC-
         MAIL. 

         Assistance will be given to registered users to correct or 
         circumvent the compatibility difficulty. 


                            ** THE PC-MAIL DISK **

            FILE                        FUNCTION
         -----------------------------------------------------------
         

         PCMAIL.EXE.............Displays introductory screens, 
                                Reads configuration file and sets 
                                defaults for all routines.  
         
         MENUA.EXE..............Supports the main menu routine, and
                                the help program.                     
         
         ENTER.EXE..............Supports the creation of data 
                                files, and the addition of data to 
                                existing files.                                 

         SEARCH.EXE.............Supports the searching of data for 
                                specific records, and the modification 
                                and deletion of those records.

         ALPHA.EXE..............Supports the alphabetical or 
                                numerical reorganization of 
                                records. Creates new files with 
                                reorganized data.

                                                                    8.
         BACK.EXE...............Backs up new and modified data 
                                files.

         SELECTA.EXE............Supports the search of data files
                                and the creation of new files from 
                                individually identified records.

         MENUB.EXE..............Supports the menu program for the 
                                file utility routines.

         TRANS.EXE..............Supports the renaming and transfer 
                                of files between disks 

         SORT.EXE...............Supports the searching of data 
                                files, and the creation of new file
                                with common characteristics.

         MERGE.EXE..............Merges two data files.

         SCRATCH.EXE............Supports the searching of data 
                                files and the removal of records 
                                with common characteristics, and 
                                the removal of empty records.

         KILL.EXE...............Supports the removal of data files.

         NAME.EXE...............Supports the renaming of data 
                                files.

         MENUC.EXE..............Supports the menu program for the 
                                print utility routines.

         LABEL.EXE..............Prints labels on in two formats, 
                                two print sizes,and on continuous 
                                feed label stock of 16 dimensions. 
                                Supports the printing of one to 
                                five label rows. Each row may be 
                                the same label or each label may be 
                                different.

                                                                    9.
         INDEX.EXE..............Supports the printing of record data 
                                on the following:
                                   1. 3" X 5" continuous feed card 
                                      stock
                                   2. 8" X 11 1/2" continuous feed sheets.
                                   3. 2" X 4" continuous feed roll file 
                                      cards stock.
                                   4. 2" X 3" continuous feed name 
                                      tag stock.

         LIST.EXE...............Supports the printing of file 
                                rosters, telephone lists, and file 
                                data listing on 8 1/2" and 15" 
                                continuous feed paper stock.
                                                                
         MAILER.EXE.............Supports creation and printing of 
                                messages, return addresses, and 
                                merging of addresses from PC-MAIL 
                                data files. 
                                

         ENVO.EXE...............Supports the addressing of business 
                                envelopes. 

         PARCEL2.EXE............Supports the creation and printing 
                                of large sized parcel labels.

         BRUN10.EXE.............Microsoft's base run module 
                                supporting programs developed and
                                compiled with Quick Basic. It is
                                included by licensing agreement 
                                with the Microsoft Corporation.
                                                                                                          
         COLOR.EXE..............Supports the switching from the 
                                monographic to the color graphic on 
                                dual graphic systems.

         CONFILE.EXE............Supports the installation of the 
                                registration number and access 
                                code.


                                                                    10.
         SPEEDSCR.COM...........Resident screen library manager 
                                supporting screens created using 
                                programs of the Software Bottling 
                                Company of New York. It is included
                                by license from the SBC.
         PCMAIL.PAK.............Screen Library

         PCM.PAK................Screen Library

         UTILITY .PAK...........Screen Library

         HELP.PAK...............Help screen library

         CONFILE.PAK............Screen Library

         CONFIG.DRV.............Configuration file

         README.DOC.............This document

         REGFORM.DOC............Registration form

         PCM.BAT................Initiates PC-MAIL from both 
                                monographic and CGA systems. 

         PCMD.BAT...............Initiates PC-MAIL from a 
                                monographic system, and transfers
                                control to the CGA system.

         SHOWDOC.BAT............Displays README.DOC on the monitor.
                                                              
         PRTDOC.BAT.............Prints a copy of README.DOC.

         PRTREG.BAT.............Prints a copy of the registration 
                                form.
         
         INSTALLR.BAT...........Initiates the confile program to 
                                install the registration number.


                                                                    11.


                              ** REGISTRATION **

         Register your copy of PC-mail 2.91S by filling out the 
         registration form, and returning it with the registration 
         fee to Foto 64, Inc.. A copy of the registration form may 
         be obtained by running the program PRTREG which is on the 
         print utility disk. The receipt of this form and your 
         registration fee will establish your eligibility for 
         technical assistance by both telephone and mail. In return 
         you will receive the following. 
         

             The registration/license number and access code for your 
             copy of PC-MAIL 2.91S. The final installation of PC-
             MAIL requires this data.
             
             Future up grades of PC-MAIL at a reduced cost.
              
             Instructions for securing technical support and a 
             tech. service number.


                                                                    12.
                                           
                         ** INSTALLATION OF PC-MAIL **


         The installation of PC-MAIL is simple. In fact, it may be 
         operated directly from the master PC-MAIL disk with no 
         alterations, The following steps are recommended for making 
         your master working disk.        
                                          
                           ** 5 1/4" DISK DRIVES **
            
             1.Format four disks as follows. 
               
                Place DOS System disk in drive A: and an 
                unformatted disk in drive B:. Enter at the A: prompt 
                the following:
         
                              A>format B:/V/S. 
         
                Enter the return key to  initiate the format 
                procedure. Follow the system instructions. When the 
                formatting is complete a prompt will request the 
                entry of the volume label. Enter: PCMAIL291S. 
                DOS will validate the format and return  to the 
                system prompt. There can be no bad sectors on these 
                disks, as all available space will be required. 
                                     
             2. Label the disks completed in step "1" as follows:

                   PC-MAIL 2.91S - SYSTEM                                  
                   WORKING MASTER. 
         
                   PC-MAIL 2.91S - PROGRAM PRINT DISK                                  
                   WORKING MASTER.               
                   
                   PC-MAIL 2.91S - PROGRAM UTILITIES DISK                                 
                   WORKING MASTER.               
                
                   PC-MAIL 2.91S - DATA FILES                                  
                   WORKING MASTER.               


                                                                        13.
              3. WRITE PROTECT THE MASTER PC-MAIL DISKS.
         
              4. Place your DOS disk in drive A: and the blankPC-MAIL 
                 system disk in drive B: copy COMMAND.COM to it from
                 drive A: enter: 
         
                           A>COPY A:COMMAND.COM B:.
         
              5. Place the PC-MAIL Master system disk in drive A: 
                 and copy all files to drive B:. Enter:                                     
         
                                A>A:COPY *.* B:

              6. Place the blank program utility disk in drive B:,
                 and place the PC-MAIL master utility disk in 
                 drive A:. Enter: 
                                                     
                               A>A:COPY *.* B:
. 
              6A.Place the blank program print disk in drive B:,
                 and place the PC-MAIL master print disk in 
                 drive A:. Enter: 
                                                     
                               A>A:COPY *.* B:
                                                                                      
              7. Place the blank data disk in drive B:,and copy
                 sample ADDRESS file from A: to B:. Enter:

                                A>A:COPY ADDRESS B:
                   
         PC-MAIL may now be operated, but the complete installation 
         cannot be completed until the registration card has been 
         returned to FOTO 64, INC. and your registration/license 
         number and access code have been received. When completed the 
         registrants name and registration number will appear on the 
         introductory screen. 
                                                                                                
                Complete and return the registration form and fee
                to FOTO 64. If you have not received the access code 
                go to the start up procedure on page 17. 

                                                                    14.
         When you receive your registration/license number and                                      
         the access code proceeds with steps 8 to 12. 

             8. Place the PC-MAIL working system disk working disk
                in drive A:.              

             9. Enter the following command: A>INSTALLR and return.

            10. The PC-MAIL install screen will be displayed. You 
                will be directed to enter a name or message, the 
                registration number and the access code. 
         
                The message may be up to 32 characters, and may 
                consist of the registrants name or any message such
                as, "REGISTERED TO JOHN DOE".                         

                The registration/license number should be entered 
                exactly as received. 

                The access code must be entered exactly as received,
                taking care to use the upper and lower case letters as 
                indicated. Failure to do so will result in an error
                message. If the error message is ignored, the 
                installation is continued, the introductory screen
                will display an unregistered copy notice. 

                When completed the registration information will 
                have been incorporated into the configuration file.


                Complete this installation procedure for all working
                disk sets. When back up copies of the master disk are 
                made in the future it will not be necessary to complete
                steps 8 through 11 of the installation procedure.

                                                                   

                                                                    15.
            12. Return the master disks to a  secure location. Do not 
                lose the access code as it will be necessary should 
                you need to modify the introductory message. 
         
                This copy is licensed for use on a single machine 
                only. Copies may not be share with other computer 
                users.

         >>>    *** DO NOT SHARE THE ACCESS CODE WITH ANY ONE..***  <<<

         >>>   *** DISTRIBUTE ONLY DISK COPIES OF YOUR ORIGINAL *** <<<
                    NON-REGISTERED ORIGINAL PC-MAIL DISKS ......

                Should the access code be lost, it may be reconstructed 
                by FOTO 64, Inc from the registration number. Call for
                help.
          
                       ** HARD DRIVE INSTALLATION  **

         To install PC-MAIL on a hard drive complete the following 
         steps.
                 
             13. Place your master PC-MAIL SYSTEM disk in A:

             14. Change the system default to the drive on which 
                 PC-MAIL is to be located. If drive C: then enter
                 A>C:
         
             15. Make a directory called PCMAIL by entering:
         
                                  C>MD PCMAIL 
         
             16. Change to the PCMAIL directory by entering:
         
                                 C>CD\PCMAIL
         
             17. Copy the PC-MAIL master system disk to the directory 
                 PCMAIL. Enter:
             
                                C>COPY A:*.*       

                                                                   16.
             18. Place the PCMAIL master utility disk in drive A:. 
                                                                   
             19. Copy the PC-MAIL master system disk to the directory 
                 PCMAIL. Enter:
                           
                                 C>COPY A:*.*
                                                               
             20. Place the PCMAIL master print disk in drive A:. 
                                                       
             21. Copy the PC-MAIL master print disk to the 
                 directory. Enter:

                                C>COPY A:*.*

             22. Complete and return the registration form with 
                 the registration fee.
                   
             23. PC-MAIL will now operate from the hard drive, but 
                 installation procedure is not complete.


                                                                 
         When you receive your registration/license number and                                    
         the access code complete the installation procedure
         by entering:
         
                                 C>INSTALLR  

             19. Follow directions outlined in steps 10 to 12.
                                                                       
         Maintaining the data files in the same directory as the 
         PC-MAIL operation files is not recommended. The data files
         work best if placed in their own directory or directories. 
         If your data will be stored on seperate disk prepare it a 
         outlined in steps 1 through 7.

                             ** 3 1/2" DRIVES **     
            
         If creating a 3 1/2" working disk from 5 1/4" PC-MAIL disk 
         set, copy all of the two disk set to the 3 1/2" drive. 
         Operate the 3 1/2" disk as you would a hard disk.



                                                                    17.
                          ** START UP OF PC-MAIL **
                                
         The program start up sequence is critical to  the proper 
         operation of PC-MAIL. Variables are set on the start up of
         PC-MAIL which are transferred to other routine. PC-MAIL was
         designed to function as a whole unit. 

         ---- INDIVIDUAL ROUTINES WILL NOT OPERATE INDEPENDENTLY. ----
         
         To simplify this start up two batch files have been included 
         on the master disk. If you are starting the program from a 
         monographic or colorgraphic system enter at the system 
         prompt the word PCM. If you have a dual color/bw system 
         enter PCMD while in the monographic system. These start up 
         sequence must be followed. 

         During start up PC-MAIL THE screen driver must be loaded 
         before any other program. This includes residential programs 
         such as SIDEKICK or XTREE. If you encounter difficulties 
         with program conflicts try operating PC-MAIL with out other 
         residential programs. If you still have difficulties contact 
         FOTO 64, Inc.  


                                                                    18.
                             ** SUPPORT CREDITS **

         Listing of Credits For Individual and Institutional Assistance
         During The Developmental Phases And For Continuing Support Of..

                         PC-MAIL... VERSION 2.91 (C) 1989
           
         Program Development -- IBM Basic 3.0 *
                             -- Microsoft Quick Basic 2.0, 3.0, 4.0 **
         Program Compiler ----- Microsoft Quick Basic 1.0 **
         Screen Development --- Flash Up, Speed Screen, and Soft Code ***
         Oper. Screen Support - Speed Screen ***
         Machine Support ------ IBM Personal Computer*
                                Corvus Systems Hard Drive ****

         Consultation &
           Consistent Support - John Spitzer & Authors's Wife & Family.

         *    International Business Machines Corporation - IBM(R)
         **   Microsoft Corporation
         ***  Software Bottling Company of New York
         **** Corvus Systems, Incorporated



                               PC-MAIL 2.91-S (C)     
                
                       COPYRIGHT 1990 - CARL F, MIESCKE
                              ALL RIGHTS RESERVED


                              UPDATE - VERSION 2.91S

        Version 2.91 incorporated the feature known as "VARIABLE STRING 
        SEARCH" in the search/correct/delete routine. This feature 
        permitted the searching for a specific combination of characters 
        imbedded in the data records. for example, it is possible to 
        locate all last mames beginning with "MC" or "MAC" 

        The introduction of the "VARIABLE STRING SEARCH" made possible 
        the inclusion of more than one classificarion code, and the 
        searching for that code. This greatly increased the flexiblity
        of the search routine. 

        In version 2.92 this search ability has been extended to the
        classification code sorts of all print and utility routines.
        For example, if the Class Code field contains the following data.

                               "SJS/412/412A/HOME"

        If the sort criteria inputted is 412, the program will print all 
        records(addresses) containing 312 and 412A in class code field. 
        If the slash limiter is included, ie "412/", only the fields 
        containing  "412" will be printed. 

        The string search has only been extended to the classification 
        code field in the print and utilities routines.
```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                     REGISTRATION FORM - PC MAIL 2.92S (C)
         PC-MAIL (C) COPYRIGHT 1987 FOTO 64, INC. ALL RIGHTS RESERVED


      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY PCM SCREEN _____________

                    PC-MAIL IS BEING USED ON THE FOLLOWING SYSTEM
     
      COMPUTER _______________________________________ RAM _________________

      SYSTEM USED: (MONOGRAPHIC)  (CGA)  (HERCULES)  (OTHER ________________

      DISK DRIVES (1)  (2)  (3)     HARD DISK ____________________ CAPACITY

      MONITORS;  NUMBER ___ : TYPE  (COLOR)   (MONO)   (BOTH)

      TYPE OF APPLICATION OF PC-MAIL _______________________________________

      PRINTER: MAKE_________________________________ MODEL _________________

      COMMENTS WELCOMED:


      Please complete this form and mail with your check for $30.00 to the 
      following address:   
                      
      FOTO 64, INC.  SOFTWARE REGISTRATION   PO BOX 2130  SARATOGA, CA  95070
                           PC-MAIL (C) FOTO 64, INC.
          
      THANK YOU FOR YOUR SUPPORT OF PC-MAIL. Your support will further the 
      development of user supported software....    

                                

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0868

     Volume in drive A has no label
     Directory of A:\

    ADDRESS           2820   1-29-90  12:47p
    ALPHA    EXE     10705   1-01-80  12:10a
    BACK     EXE     11393   5-19-89   2:05p
    BRUN10   EXE     58388   7-17-85   1:56p
    COLOR    EXE       640   1-01-80  12:31a
    CONFILE  EXE      4193   5-20-89  12:33p
    CONFILE  PAK      2790   5-20-89  12:27p
    ENTER    EXE     17921   5-19-89   1:48p
    FILES868 TXT      2295   3-05-90   1:56p
    GO       COM      2048   1-26-90  10:58p
    GO1      BAT        39   3-05-90   1:48p
    GO1      TXT       540   3-05-90   1:48p
    HELP     PAK     31363   1-26-90  11:50a
    INSTALLR BAT        57   2-10-89  10:29a
    MENUA    EXE     15569   5-22-89   8:04a
    PCM      BAT        66   5-10-89  12:01a
    PCM      PAK     42678   1-13-90   4:58p
    PCMAIL   EXE      5009   6-28-89   7:14a
    PCMAIL   PAK      2422  12-14-89   2:41p
    PCMD     BAT        61   5-10-89  12:02a
    PRTDOC   BAT       207   5-18-89  12:01p
    PRTREG   BAT       209   8-22-87   8:04a
    README   DOC     34033   1-26-90   7:32a
    REGFORM  BAK      1576  12-14-89   2:28p
    REGFORM  DOC      1577  12-14-89   2:36p
    SEARCH   EXE     23873   1-14-90   7:59a
    SHOWDOC  BAT        17   5-18-89  12:00p
    SPEEDSCR COM      5333  10-01-86  12:00p
    UTILITY  PAK     15342   5-19-89   7:21p
           29 file(s)     293164 bytes
                           11264 bytes free
