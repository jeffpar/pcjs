---
layout: page
title: "PC-SIG Diskette Library (Disk #1192)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1192/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1192"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DISK LABEL II"

    PC-DISK LABEL prints out disk labels for 3.5" and 5.25" disks and saves
    them for later reference or reprinting.
    
    PC-DISK LABEL (PCDL) is a simple program that can help organize a
    computer user's disk collection and, at the very least, make every disk
    label legible to the untrained eye. On each label, PCDL can print four
    lines of 22 characters and a fifth line of 74 characters in compressed
    mode. PCDL can even print multiple copies, invaluable for those who
    need to back up their hard disks often or the professional distributing
    software.
    
    Labels can be produced in three sizes for 3.5" disks and three sizes
    for 5.25" disks. A routine is included which prints labels to match 25
    stock label dimensions. PCDL is easy to use and works with IBM, Epson,
    Okidata, and Hewlett Packard printers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1192.TXT

{% raw %}
```
Disk No: 1192                                                           
Disk Title: PC-Disk Label II                                            
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: PC-Disk Label II                                         
Author Version: 3.0C                                                    
Author Registration: $25.00                                             
Special Requirements: Printer                                           
                                                                        
PC-DISK LABEL prints out disk labels for 3.5 inch and 5.25 inch disks   
and saves them for later reference or reprinting.                       
                                                                        
PC-DISK LABEL (PCDL) is a simple program that can help organize a       
computer user's disk collection and, at the very least, make every disk 
label legible to the untrained eye.  On each label PCDL can print four  
lines of 22 characters and a fifth line of 74 characters in compressed  
mode.  PCDL can print multiple copies, which is invaluable for those who
need to back up their hard disks often or the professional distributing 
software.                                                               
                                                                        
Labels can be produced in three sizes for 3.5 inch disks and three sizes
for 5.25 inch disks.  A routine is included which prints labels to match
25 stock label dimensions.  PCDL is easy to use and works with IBM,     
Epson, Okidata, and Hewlett Packard printers.                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```









                                PC-DISK LABEL II 3.0S

                                         BY

                                   CARL F. MIESCKE


                      COPYRIGHT 1987,1988,1989 - CARL F. MIESCKE










                             DOCUMENTATION MANUAL





                                TABLE OF CONTENTS

                 INTRODUCTION....................................... 1.
                 DATA ENTRY/PRINTING PROCESS........................ 3.
                 PROGRAM CONFIGURATION.............................. 3.
                 REGISTRATION MESSAGE............................... 3.
                 DATA ADDRESS/PATH DESIGNATION...................... 3.
                 PRINTER CONFIGURATION.............................. 4.
                 PROGRAM FEATURES................................... 5.
                 LICENSE AGREEMENT.................................. 7.
                 MULTI-USER PACKAGES................................ 8.
                 TECHNICAL SUPPORT.................................. 8.
                 SYSTEM REQUIREMENTS................................ 9.
                 THE PC-DISK LABEL DISK.............................10.
                 REGISTRATION.......................................11.
                 INSTALLATION OF PC-DISK LABEL......................12.
                        TWO DISK DRIVE SYSTEM.......................12.
                        HARD DISK SYSTEM............................15.
                 START-UP OF PC-DISK LABEL..........................16.
                 TUTORIAL - USING PC-DISK LABEL 2.6.................17.
                 EXITING PC-DISK LABEL..............................18.
                 CREDITS............................................19.





             FOTO 64, INC. - PO BOX 2130 - SARATOGA, CA 95070-2130



                       THIS IS A "SHAREWARE" PROGRAM


         *************************************************************
         *                    PC-DISK LABEL  3.0S                    *
         *                                                           *
         *    PC-DISK LABEL 3.0C IS DISTRIBUTED UNDER THE SHAREWARE  *
         *    CONCEPT.  IT IS A FULLY OPERATIONAL AND COPYRIGHTED    *
         *    PROGRAM WHICH YOU ARE ABLE TO TRY BEFORE BUYING..      *
         *                                                           *
         *    .....IT IS NOT PUBLIC DOMAIN OR FREEWARE..........     *
         *                                                           *
         *    USERS HAVE A RESPONSIBILITY TO REGISTER PC-DISK LABEL  *
         *    IF IT IS USED AS A PART OF THEIR COMPUTER OPERATION.   *
         *                                                           *
         *************************************************************

           Register your copy of PC-DISK LABEL II now.......  Your 
           support makes possible the continued development of PC-
           DISK LABEL 3.0 and of other shareware programs - without 
           your support the shareware concept will fail and high 
           quality low cost programs will cease to exist.  Send the 
           completed registration with your check for $30.00 to 
           FOTO 64, INC. P.O. BOX 2130, SARATOGA, CA 95070-2130. 

           YOUR SUPPORT WILL HELP MEET THE COSTS INCURRED DURING THE
           DEVELOPMENT AND TESTING OF THIS PROGRAM.................

                Shareware authors have faith in your integrity.

                  "There is no better buy than shareware."



           FOR A COPY OF THE REGISTRATION FORM, RUN THE PROGRAM PRTREG
           ON THE OPERATIONS DISK.


                                                                     1.
                                 INTRODUCTION


              THE LABEL MAKER FOR ALL DISK AND SOFTWARE STORAGE.
                                                                                                                                
            ...TESTED AND PROVED IN A BUSINESS ENVIRONMENT...



                               PC-DISK LABEL II
                                  VERSION 3.0 

                   COPYRIGHT CARL F. MIESCKE .. 1986 - 1989
                              ALL RIGHTS RESERVED 


        PC-DISK LABEL has been developed to support the labelling of 
        software  storage devices. It consists of seven routines, all of 
        which are accessible from a main PC-DISK LABEL menu. They 
        consist of three label editing/printing routine, two support 
        utilities, and a help/informational program.               

        The program is designed to be interactive with the user, is 100% 
        menu driven, and makes liberal use of text screens which guide 
        the user through the program operations........Like all programs 
        by the author, They are supported by extensive error routines 
        which  will protect the data from most user errors.  

        Every effort has been made to provide a program which will 
        provide trouble free operation. Should you encounter any 
        difficulties a note to FOTO 64, INC. would be appreciated, and 
        assure correction in future versions of PC-DISK LABEL. The 
        author and FOTO 64, INC. assumes no responsibility for lost data 
        resulting from the use of this program. It is sold on an as is 
        basis. 

                                                                        2.

        PC-DISK LABEL was developed for and use on the IBM PC/XT/AT  and 
        true compatible machines. Occasional difficulties may be 
        experienced when operation this program on machines which are 
        not truly compatible with the IBM system. Should you encounter 
        problems contact FOTO 64, Inc at 408-243-6848. 

        If you have not already done so, please return the your 
        registration. A copy may be obtained by running PRTREG.BAT 
        located on the PC-DISK LABEL disk.This will allow Foto 64 to set 
        up your tech file. This will enable the best service to be 
        provided to you, and will assure that you will receive 
        information on PC-DISK LABEL up dates , as well as information on 
        other programs by the author and Foto 64. 
         
        Three label editing/printing routines may be accessed from the 
        main menu.  Two of these are designed to utilized predesignated 
        label widths. The labels designed for the 3 1/2" disks measure 2 
        3/4" wide while those for the 5 1/4 in floppy disks measure 5" 
        in length. In both of these routines a variety of label heights 
        may be designated. In the Multi-format routine the user may 
        select from a variety 25 label dimensions ranging from 1/2" x 2 
        1/2" to 2" x 5". This diversity of selections accommodates a 
        variety label format requirements. With these three routines the 
        user has the ability to label any data storage devices or 
        hardware used. 
        
        Entered data may be printed, saved to a disk file, and/or 
        recalled for editing and printing at a later session. All data 
        will be printed, saved, and recalled in the format entered on 
        the screen. WHAT YOU SEE IS WHAT YOU GET... 

                                                                        3.

                       THE DATA ENTER & PRINTING PROCESS 
        
        The label development process is essentially the same for all 
        three label routines. The user selects the routine from the main 
        menu, selects the label size being used from the routine menu , 
        enters/edits the label data, and prints the labels required. In 
        all cases the entered data may be saved to a disk file, and 
        recalled from storage at a later session. In all cases storage 
        access is from the routine menu. Exiting the routine to the main 
        menu erases all data in memory. 
        

        
                             PROGRAM CONFIGURATION
        
        When PC-DISK LABEL is initiated files the configuration files 
        CONFIG.DRV an PR.DEF are read and operational system is set to 
        those specifications. These specifications and their 
        modification are discussed in the following paragraphs.. 

                             REGISTRATION MESSAGE
        
        The registration message and number appearing on the 
        introductory screen may be changed by entering "ALT + R" at the 
        main menu. NOTE..This is only possible if the  access code sent 
        with the registration is available. With out the proper access 
        code a nonregistered notice will be displayed. 
        
                         DATA ADDRESS/PATH DESIGNATION 
        
        The data drive/directory path may be changed by entering the 
        "HOME" key at the main menu. The program will prompt of the new 
        data drive. After entering the new drive the directory of that 

                                                                        4.

        selection will be displayed.  Options for creating a new 
        directory, erasing a directory, and changing a directory will be 
        available. When completed enter selection for the main menu. The 
        program will provide the opportunity to rewrite or not to 
        rewrite the data configuration file. The data path may be 
        changed during the session with out modifying the configuration 
        file. 
        
                             PRINTER CONFIGURATION 
        
        PC-DISK LABEL 3.0 has be delivered with the printer configuration 
        is set for printer port "LPT1" and for printer type "IBM GRAPHIC 
        PRINTER". If this configuration is not compatible with the 
        printer being used this may be changed by entering "ALT + P" at 
        the main PC-DISK LABEL MENU. Output ports "LPT1", "LPT2", "LPT3", 
        "COM1", "COM2", and "COM3" may be designated. Compatible 
        selections are provided for "IBM", "OKIDATA", "EPSON", and 
        "Hewlett Packard" dot matrix printers. If a COM port is selection 
        a list of designated options may be entered. 

                                                                        5.

                           PROGRAM FEATURES


                        ** FEATURES OF PC-DISK LABEL 3.0 **

                           ** GENERAL OPERATIONS **

                          PC-DISK LABEL (LABEL) ROUTINE
                
                This routine is the controlling routine and contains the 
                main operations menu.  All program operations are 
                initiated from this routine.  Access to the three 
                editing, printing, and disk operations routines are 
                entered by highlighting the appropriate window. 

                When PC-DISK LABEL is initiated, two configuration files 
                are read and the program data address and the output 
                configuration is automatically set.  These  
                configuration files may be modified from this routine, 
                and if desired, the new data address may be saved to the 
                configuration file.  The next time PC-DISK LABEL is 
                started, the new configuration will be read. 

                            LABEL EDIT/PRINT ROUTINES

                These routines permit the creation, editing, saving, 
                and recalling of the disk label data. The 3 1/2" and 
                5 1/4" disk label routines are specifically designed to 
                develop labels for these formats. The Multi-format 
                routine permits selecting one of 25 label formats to 
                meet the format of data storage devices being used.                                                                   

                                                                        6.

                          WHAT YOU SEE IS WHAT YOU GET
                
                All label data printed by the print routine of PC-DISK 
                LABEL must be entered or recalled within these routines.  
                Entered message data will be printed, save, and recalled 
                in the same format as developed. 
                                     
                      GENERAL FEATURES TO BE REMEMBERED.

         A data file address (Drive and Directory) may be saved to a
           configuration file.
         PC-DISK LABEL on initiation will read the configuration file
           and set the data address automatically.
         The data file address may be changed during a working
           session with out changing the configuration file.
         Permits data drive designation of A through N.
         Validates the presence and readiness of drive selected.
         A Directory may be changed, created, and removed without
           exiting the program.
         Multiple level directories are supported.
         On-screen help is available on input routines.
         Output and printer configurations may be set for most 
         printers and computer output ports.

                                                                        7.

                              LICENSE AGREEMENT
                
         PC-DISK LABEL was copyrighted in 1987, 1988, and 1989 and is 
         protected by the copyright laws of the United States of 
         America.  The original and all copies of PC-DISK LABEL shall 
         remain the property of Foto 64, Inc. and the author. 

         Your use of PC-DISK LABEL constitutes your agreement with the 
         following conditions. 

             This copy of PC-DISK LABEL and all backup copies 
             are the property of the author. 

             Registered users are licensed to operate PC-DISK 
             LABEL on one computer in a single user environment. 

             You may make back up copies of PC-DISK LABEL as 
             necessary for use on a single computer system, and to 
             assure security of the original disk. 

             You may make disk copies of the original PC-DISK 
             LABEL disks for distribution or to share with other 
             computer users.  You may not charge for this service. 

             You may not share your registration access code or 
             registration number with other computer users when 
             sharing disk copies with others. 

             You will not modify, reorganize, transfer, 
             disassemble, or remove from operation any PC-DISK 
             LABEL files, documentation, credits, or routines. 

                                                                        8.

         Deviation from the above conditions shall be constituted a 
         violation of your license agreement.  Under such conditions, 
         FOTO 64, Inc. and/or the author may declare the agreement null 
         and void and require the return of the original PC-DISK LABEL 
         disk and all backup and working copies. 
                                                          
         Disclaimer:  Every effort has been made to provide an operating 
         program which is free from operational defects. PC-DISK LABEL 
         is licensed on an as-is basis and neither FOTO 64, Inc. or the 
         author can be held liable for lost data, lost time, or computer 
         incompatibility. 

                             MULTI-USER PACKAGES

         If PC-DISK LABEL 3.0(c)is to be used on a network, multi-user 
         system, or on more than one computer, contact the author for a 
         multi-user licensing agreement. 

                              TECHNICAL SUPPORT

         Technical support is available to registered users only.  To 
         assure support, please complete the registration form fully and 
         return it to Foto 64, Inc. with your check for $25.00. You will 
         receive by return mail your registration package within two 
         weeks. 

                                                                        9.

                             SYSTEM REQUIREMENTS

         COMPUTER:                 IBM PC/XT/AT OR TRUE COMPATIBLE
                                   MACHINES

         AVAILABLE RAM             RECOMMENDED MINIMUM 128K
                                   ONE 5 1/4" FLOPPY DRIVE PLUS A

         DISK DRIVES               SECOND DRIVE OF ANY CONFIGURATION.

         GRAPHICS ADAPTER          IBM MGA AND/OR CGA OR TRUE COMPATIBLE.
                                   HERCULES MGA ONLY.

         MONITOR                   IBM MONO GRAPHIC OR COLOR GRAPHIC
                                   MONITOR OR EQUIVALENT.  MONO
                                   MONITORS DRIVEN WITH A COMPOSITE
                                   INPUT FROM A COLOR GRAPHICS
                                   ADAPTER NOT ADVISED.

         PRINTER                   ANY COMPATIBLE GRAPHICS OR TEXT
                                   PRINTER.(IBM, Epson, H.P., and 
                                   Okidata formats recognized.)

         OPERATING SYSTEM          PC OR MS DOS 2.1 OR LATER.

         PC-DISK LABEL was programed on and designed for operation on 
         true IBM compatible machines.  Unfortunately, some compatibles 
         are not 100% IBM equivalents.  Every effort has been made to 
         assure PC-DISK LABEL will be free from difficulties when 
         operated on compatible equipment, however, problems may 
         occasionally be encountered on such machines - should you 
         encounter a problem, please drop a note to FOTO 64, Inc. 
         describing the difficulty and your equipment configuration.  
         This feedback will assist in the development of future versions 
         of PC-DISK LABEL. 

                                                                        10.

         Assistance will be given to registered users to correct or 
         circumvent the compatibility difficulty. 
                  
                          THE PC-DISK LABEL DISK

               FILE           FUNCTION
         -----------------------------------------------------------

         LABEL.EXE..............PC-DISK LABEL controlling routine.
         LABEL10.EXE............Multi-format label routine.
                                Enter, edit, print and save the label
                                data. 
         LABEL20.EXE............3 1/2" disk label routine.
                                Enter, edit, print and save the label
                                data. 
         LABEL30.EXE............5 1/4" disk label routine.
                                Enter, edit, print and save the label
                                data. 
         CONFILE.EXE............Enter serial and user code into the
                                introductory screen.                                            
         COLOR.EXE..............Software switch - switches from
                                monographic system to the color
                                graphics system.
         CONFIG.EXE.............Develops the printer configuration file.
         CONFIG.DRV.............Configuration file read by PC-
                                DISK LABEL.EXE to set the default data
                                address.  
         PCDL.PAK...............Screen Library pack.
         PCO.PAK................Screen Library pack.
         HELP.PAK...............Help screen library pack.
         SPEEDSCR.COM...........Resident screen management module.
                                (Software Bottling Company of N.Y.)
         MANUAl.DOC.............Installation documentation.

                                                                        11.

         REGFORM.DOC............Registration form.
         PCDL.BAT...............PC-DISK LABEL start-up from CGA board.
                                Loads resident screen program and
                                initiates PC-DISK LABEL.
         PCDLD.BAT..............PC-DISK LABEL start-up from MGA board,
                                transfers control to CGA board,
                                loads resident screen program, and
                                initiates PC-DISK LABEL.                                                        
         SHOWDOC.BAT............Displays MANUAL.DOC on screen.
         PRTDOC.BAT.............Prints hard copy of MANUAL.DOC.
         PR.DEF.................Printer configuration file.
         *.DEF..................Printer configuration selection files.
         TEST.LB1...............Multi-format sample label
         TEST.LB2...............3 1/2" disk sample label
         TEST.LB3...............5 1/4" disk sample label


                          REGISTRATION

         Register your copy of PC-DISK LABEL(c) by filling out the 
         registration form and returning it with your check for $30.00.  
         This will establish your eligibility for technical assistance 
         by both telephone and mail.  In return you will receive the 
         following: 

             The registration/license number and access code for your
             copy of PC-DISK LABEL.

             Future upgrades of PC-DISK LABEL at a reduced cost.

             Instructions for securing technical support and a
             technical support service number.
                

                                                                        12.

                          INSTALLATION OF PC-DISK LABEL


         The installation of PC-DISK LABEL is simple.  In fact, it may 
         be operated directly from the master PC-DISK LABEL disk with no 
         alterations, however, this is not recommended.  The following 
         steps are recommended for making your master working disk. 

                    5 1/4" or 3 1/2" DISK DRIVES

             1. Place a DOS system disk in drive A: and an 
                unformatted disk in drive B:.  Enter at the A: 
                prompt the following:  A>format B:/V.  Enter the 
                return key to initiate the format procedure.  
                Follow the system instructions.  When the 
                formatting is complete, a prompt will request the 
                entry of the volume label. Enter PCDL30S.  DOS 
                will validate the format and return to the system 
                prompt.  Do not format another disk. 

             2. Remove the disk from drive B: and label it PC-
                DISK LABEL SYSTEM MASTER.  Set it aside for now. 

             3. Place a new blank disk in drive B: and format 
                another disk without the /S command.  Enter at the 
                A: prompt the following:  A>FORMAT B:/V.  Follow 
                the same process used in step #1. 

             4. Remove this disk from drive B: and label it PC-
                DISK LABEL DATA MASTER. 

                                                                        13.

             5. Place the PC-DISK LABEL SYSTEM MASTER WORKING 
                DISK in drive B:. 
                                       
             6. Copy COMMAND.COM to the master working disk.  Enter:

                           A>COPY COMMAND.COM B:

             7. Place the master PC-DISK LABEL SYSTEM DISK in 
                drive A: and COPY all files to the SYSTEM working 
                disk in drive B:. Enter: 

                              A>COPY *.* B:

             8. This completes the first stage of the PC-DISK 
                LABEL installation. 

         PC-DISK LABEL may now be operated, but the complete 
         installation cannot be finished until the registration has 
         been returned to FOTO 64, INC. and your registration/license 
         number and access code have been received.  When completed, the 
         registrant's name and registration number will appear on the 
         introductory screen. 

             9. Complete and return the registration card to FOTO 
                64. If you have not received the access code, go to 
                the start-up procedure. 

                                                                        14.

         When you receive your registration/license number and the 
         access code, proceed with steps 10 through 13. 

            10. Place the working master PC-DISK LABEL disk in 
                drive A:, initiate by entering PCDL (A>PCDL), and
                proceed to the main menu. 

            11. Enter ALT+R.    

            12. The PC-DISK LABEL install screen will be 
                displayed. You will be directed to enter a name or 
                message, the registration number, and the access 
                code. 
                  
                The message may be up to 32 characters and may 
                consist of the registrant's name or any message 
                such as, "REGISTERED TO JOHN DOE." 

                The registration/license number must be entered 
                exactly as received. 

                The access code must be entered exactly as 
                received, taking care to use the upper and lower 
                case letters as indicated.  Failure to do so will 
                result in an error message.  If the error message 
                is ignored and the installation is continued, the 
                introductory screen will display an unregistered 
                copy notice. 

                Complete this installation procedure for all 
                working copies.  When backup copies of the working 
                disk are made in the future, it will not be 
                necessary to complete steps 10 through 13 of the 
                installation procedure. 

                                                                        15.

            13. Return the master disk to a secure location.  Do 
                not lose the access code as it will be necessary 
                should you need to modify the introductory message. 

                
                DO NOT SHARE THE ACCESS CODE.

                Should the access code be lost, it may be 
                reconstructed by FOTO 64, Inc from the registration 
                number.  Call for help.       

                                 HARD DRIVES

         To install PC-DISK LABEL on a hard drive, observe the following 
         steps: 

             14. Place your master PC-DISK LABEL master SYSTEM disk in A:

             15. Change the system default to the drive on which
                 PC-DISK LABEL is to be located.  If drive C:, then enter
                 A>C:

             15. Make a directory called PCDL2 by entering
                 C>MD PCDL2.

             16. Change to the PCDL2 directory by entering C>CD\PCDL2.

             17. Copy the master disk to the directory PCDL2.
                 Enter C>COPY A:*.*

             18. Complete and return the registration included on the 
                 PC-DISK LABEL system disk. To obtain a copy run the 
                 PRTREG.BAT program. (A>PRTREG)

                                                                        16.

             19. PC-DISK LABEL will now operate from the hard drive,
                 but the installation procedure is not complete.

         When you receive your registration/license number and the 
         access code, complete the installation procedure by running the 
         configuration program. Just enter "ALT+R" at the main PC-DISK 
         LABEL menu.
              
         Maintaining the data files in the same directory as the PC-DISK 
         LABEL operation files is not recommended.  The data files work 
         best if placed in their own directory or directories. PC-MAIL, 
         PC-POSTCARD, and PC-DISK LABEL data storage may be filed on the 
         same data ADDRESS.  PC-DISK LABEL will recognize all formats 
         and will display appropriate files.  This will reduce the need 
         to exchange data addresses when printing the mailer.  Data 
         directories may be created, erased, and changed by entering 
         HOME from the main PC-DISK LABEL menu. 

                        START-UP OF PC-DISK LABEL

         The program start-up sequence is critical to the proper 
         operation of PC-DISK LABEL.  To simplify this start-up, two 
         batch files have been included on the master disk.  If you are 
         starting the program from a monographic or colorgraphic system, 
         enter at the drive prompt PCDL (C>PCDL).  If you have a dual 
         color/bw system, enter PCDLD at the drive prompt (C>PCDLD) 
         while in the monographic system.  These start-up sequences must 
         be followed. 

         During start-up, the PC-DISK LABEL screen driver must be loaded 
         before any other program.  This includes residential programs 
         such as SIDEKICK or XTREE.  If you encounter difficulties with 

                                                                        17.

         program conflicts, try operating PC-DISK LABEL without other 
         residential programs.  If you still have difficulties, contact 
         FOTO 64, Inc. 

         FAILURE TO OBSERVE THIS START-UP PROCEDURE WILL RESULT IN AN 
         UNREADABLE SCREEN!! 

         After loading the support resident programs, PC-DISK LABEL will 
         display the introductory screen and the status of the program 
         registration.  The PC-DISK LABEL menu screen will be displayed 
         with the path of the PC-DISK LABEL data drive.  If the 
         configuration file is missing, you will be asked to reenter 
         the path data and PC-DISK LABEL will create a new file.  If 
         this should happen, it will be necessary for you to reenter 
         the registration data by entering ALT+R at the opening PC-DISK 
         LABEL menu. To do this you will need the registration data and 
         your access code. 

                                   TUTORIAL

                        USING PC-DISK LABEL 3.0(c)

         If you are experiencing difficulty using PC-DISK LABEL, perhaps 
         the following information and directions will assist you. 

                         DATA FILE ADDRESSES

         PC-DISK LABEL data files may be located in the same directory 
         as those of PC-MAIL, PC-POSTCARD,and PC-MAILER. PC-DISK 
         LABEL will recognize the file types and will display only the 
         files requested. 

                                                                        18.

         NOTE:  The default data address may be changed within the 
         program with out changing the configuration driver. 

                     ENTERING THE LABEL DATA.

         Enter the HELP ROUTINE from the PC-DISK LABEL main menu
         by entering "ALT+H". A portion of the help program is designed
         to serve as tutorial. Its review is recommended.                     
         
         
                          EXITING PC-DISK LABEL                                                  

         ALWAYS EXIT PC-DISK LABEL FROM THE MAIN MENU  BY ENTERING THE 
         EXIT COMMAND. 

         This assures a proper shut down of the routine and unloads 
         the associated residence program and the screen libraries. 


                                                                        19.
                             SUPPORT CREDITS

         Listing of Credits For Individual and Institutional 
         Assistance During The Developmental Phases And For 
         Continuing Support Of.. 

         Program Development -- IBM Basic 3.0 *
                             -- Microsoft Quick Basic 2.0, 3.0, 4.0 **
         Program Compiler ----- Microsoft Quick Basic 2.0 **
         Screen Development --- Flash Up, Speed Screen, and Soft Code ***
         Oper. Screen Support - Speed Screen ***
         Machine Support ------ IBM Personal Computer*
         **** Corvus Systems, Incorporated
         Consultation &
           Consistent Support - John Spitzer & Authors's Wife & Family.

         *    International Business Machines Corporation - IBM(R)
         **   Microsoft Corporation
         ***  Software Bottling Company of New York






```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                    REGISTRATION FORM - PC DISK LABEL 3.0S (C)
         PC-MAIL (C) COPYRIGHT 1989 FOTO 64, INC. ALL RIGHTS RESERVED


      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY PCDL SCREEN_____________

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
                      
      FOTO 64, INC.  SOFTWARE REGISTRATON   PO BOX 2130  SARATOGA, CA  95070
                           PC-MAIL (C) FOTO 64, INC.
          
      THANK YOU FOR YOUR SUPPORT OF PC-DISK LABLE. Your support will further 
      the development of user supported software....    

                                

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1192

     Volume in drive A has no label
     Directory of A:\

    LABEL    EXE     18512  12-11-89  10:08p
    LABEL10  EXE     31408  11-27-89  11:18p
    LABEL20  EXE     30160  11-29-89   1:48p
    LABEL30  EXE     26208  11-27-89  11:34p
    CONFILE  EXE      6720  11-06-89   5:48a
    CONFIG   EXE      8064  11-18-89  11:23p
    HELP     EXE      7760  11-20-89  11:00p
    BRUN20   EXE     69454   1-16-87  11:44a
    PCDL     PAK     39803  12-11-89   9:13p
    HELP     PAK     29096  12-11-89  11:21p
    SPEEDSCR COM      5333  10-01-86  12:00p
    INTAL                1   6-04-90   2:38a
    S1       DEF        28  11-05-89   3:41p
    PR       DEF        70   6-04-90   2:41a
    S2       DEF        28  11-05-89   3:42p
    EP       DEF        60  11-05-89   3:46p
    ST       DEF        57  11-05-89   3:49p
    PA       DEF        53  11-05-89   3:56p
    TA       DEF        58  12-11-89  10:33p
    EE       DEF        58  11-05-89   3:57p
    CZ       DEF        53  11-05-89   3:58p
    OK       DEF        45  11-05-89   3:31p
    IG       DEF        48  11-05-89   3:39p
    IE       DEF        49  11-05-89   4:00p
    IP       DEF        48  11-05-89   3:40p
    TO       DEF        48  11-05-89   4:01p
    HP       DEF        69  11-27-89   9:00p
    OP       DEF        52  11-05-89   3:34p
    GO       COM      2048   6-04-90   2:20a
    CONFIG   DRV         7  11-05-89   4:08p
    PCDL     BAT        65  11-06-89   5:28a
    PCDLD    BAT        65  11-06-89   5:30a
    COLOR    EXE       640   1-01-80  12:31a
    SHOWDOC  BAT        17   8-25-89  10:19a
    PRTDOC   BAT       109   8-25-89  10:20a
    PRTREG   BAT       209   8-22-87   8:04a
    MANUAL   DOC     33271  12-06-89   2:39p
    REGFORM  DOC      1586  12-06-89   2:42p
    TEST     LB1       473  11-21-89   9:03p
    TEST     LB2       303  11-21-89   9:11p
    TEST     LB3       179  11-21-89   9:15p
    INTAL    LB2         1   6-04-90   2:38a
    FILE1192 TXT      2221   9-06-90   8:05a
           43 file(s)     314537 bytes
                           15360 bytes free
