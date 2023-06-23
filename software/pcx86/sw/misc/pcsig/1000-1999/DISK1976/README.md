---
layout: page
title: "PC-SIG Diskette Library (Disk #1976)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1976/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1976"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SUPERMENU PLUS DISK 2 OF 2 (1975 ALSO"

    SUPERMENU PLUS allows users to group programs by program functions
    rather than by the drive directories.  Special libraries may be created
    for word processing, database, finance, DOS functions, CADD, graphics,
    etc.  Up to 25 program libraries consisting of 9 programs each may be
    created and read by the SUPERMENU system.
    
    The system is designed for the inexperienced user.  It is 100%
    menu-driven and requires little instruction to set up.  SUPERMENU may be
    operated from any floppy or hard drive and can access up to 225
    programs or functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1976.TXT

{% raw %}
```
Disk No: 1976                                                           
Disk Title: PC-SuperMenu Plus Disk 2 of 2 (1975 also                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-SuperMenu Plus                                        
Author Version: 2.6S                                                    
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
SUPERMENU PLUS menu system allows users to group programs by program    
functions rather than by the drive directories.  Special libraries for  
word processing, database, finance, DOS functions, CADD, graphics, etc. 
may be created.  Up to 25 program libraries consisting of 9 programs    
each may be created with the MENUMAKER and read by the SUPERMENU system.
                                                                        
The system is designed for the inexperienced user.  It is 100%          
menu-driven and requires little instruction to set up.  SUPERMENU may be
operated from any floppy or hard drive and can access to up to 225      
programs or functions.                                                  
                                                                        
SUPERMENU consists of three routines and up to 25 program libraries,    
however, only the SUPERMENU system and its library menus need be present
to operate.  The MENUMAKER and CONFILE utilities may be located on      
another drive or floppy disk that is only loaded as needed.  A desirable
feature for users with limited disk space.                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk #1976  PC-SUPER MENU PLUS  disk 2 of 2 (1975 also)  >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program onto hard drive, type:  INSTALLR (press enter)       ║
║ To start program, type:  SM (press enter)                               ║
║                                                                         ║
║ To print documentation, insert disk 2 and type:  PRTDOC (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                  REGISTRATION FORM - PC SUPERMENU PLUS 2.6S (C)
      PC-SUPERMENU (C) COPYRIGHT 1987= 1089 FOTO 64, INC. ALL RIGHTS RESERVED


      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY SCREEN__________________

                    SUPERMENU IS BEING USED ON THE FOLLOWING SYSTEM
     
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
          
      THANK YOU FOR YOUR SUPPORT OF PC-MAIL. Your support will further the 
      development of user supported software....    

                                

```
{% endraw %}

## SUPER.DOC

{% raw %}
```







                              SUPER-MENU PLUS

                               VERSION 2.6s(c)


                           COPYRIGHT 1987, 1988, 1989

                            CARL F. MIESCKE...AUTHOR








                                 FOTO 64, Inc.
                                  AUGUST 1989




                               TABLE OF CONTENTS



          INTRODUCTION.......................................... 1.
          LICENSE AGREEMENT..................................... 2.
          MULTI-USER PACKAGES................................... 3.
          TECHNICAL SUPPORT..................................... 3.
          SUPERMENU FUNCTIONS................................... 4.
                PC-SUPERMENU ROUTINE............................ 4.
                MENUMAKER ROUTINE............................... 4.
                PROGRAM LIBRARIES............................... 5.
          SYSTEM REQUIREMENTS................................... 5.
          SUPERMENU DISK FILES.................................. 6.
          REGISTRATION.......................................... 7.
          INSTALLATION
                INSTALLATION OF THE SUPERMENU PROGRAM DISKS..... 7.
                        FLOPPY DRIVES.(5 1/4  3 1/2)............ 8.
                        HARD DRIVES.............................11.
                        OTHER HARD DRIVE OPTIONS................12.
         START-UP OF PC-SUPERMENU...............................13.
         TUTORIAL
               SUPERMENU OPERATIONS.............................14.
               CREATING/EDITING LIBRARY MENUS...................15.
               PROGRAM BATCH FILES..............................16.
               EXITING PC-SUPERMENU.............................17.
         TROUBLESHOOTING........................................
         CREDIT AND THANKS......................................18.


                       THIS IS A "SHAREWARE" PROGRAM


         *************************************************************
         *                 PC-SUPERMENU PLUS  2.6S                   *
         *                                                           *
         *    PC-SUPERMENU 2.6S IS DISTRIBUTED UNDER THE SHAREWARE   *
         *    CONCEPT.  IT IS A FULLY OPERATIONAL AND COPYRIGHTED    *
         *    PROGRAM WHICH YOU ARE ABLE TO TRY BEFORE BUYING..      *
         *                                                           *
         *    .....IT IS NOT PUBLIC DOMAIN OR FREEWARE..........     *
         *                                                           *
         *    USERS HAVE A RESPONSIBILITY TO REGISTER PC-SUPERMENU   *
         *    IF IT IS USED AS A PART OF THEIR COMPUTER OPERATION.   *
         *                                                           *
         *************************************************************

           Register your copy of PC-SUPERMENU now.  Your support makes
           possible the continued development of PC-SUPERMENU and of
           other shareware programs.  Without your support, the
           shareware concept will fail and high quality low cost
           programs will cease to exist.  Send the completed
           registration with your check for $30.00 to FOTO 64, INC.
           P.O.  BOX 2130, SARATOGA, CA 95070-2130.

           YOUR SUPPORT WILL HELP MEET THE COSTS INCURRED DURING THE
           DEVELOPMENT AND TESTING OF THIS PROGRAM..........

                Shareware authors have faith in your integrity.

                  "There is no better buy than shareware."



           FOR A COPY OF THE REGISTRATION FORM, RUN THE PROGRAM PRTREG
           ON THE OPERATIONS DISK.




                                                                1.


                      INTRODUCTIONS

          Welcome to PC-SUPERMENU PLUS version 2.6C, the comprehensive
          program manager for use on the IBM PC/XT/AT and true
          compatible machines.  With it, the user may effortlessly
          manage and have direct access to up to 225 programs and/or
          functions.

          SUPERMENU PLUS has been designed for the inexperienced
          user.  It is 100 percent menu-driven and requires little
          instruction to set up.  SUPERMENU may be operated from any
          floppy or hard drive.

          SUPERMENU consists of three routines and up to 25 program
          libraries, however, only the SUPERMENU system and its
          library menus need be present to operate.  The MENUMAKER
          and CONFILE utilities may be located on another drive
          or floppy disk that is only loaded as needed.  This
          feature reduces the amount of valuable disk space required,
          a desirable feature for users with limited disk space.

          Up to 25 program libraries consisting of 9 programs each may
          be created with the MENUMAKER and read by the SUPERMENU
          system.  This allows the user to group programs by program
          functions rather than by the drive directories.  Special
          libraries for word processing, database, finance, DOS
          functions, cadd, graphics, etc. may be created.  Only the
          creativity of the user will be a limiting factor.


         WITH PC-SUPERMENU, YOUR COMPUTER WILL BECOME A POWERFUL TOOL
         FOR MAINTAINING CONTACTS WITH FRIENDS, CLIENTS, AND BUSINESS
         ASSOCIATES.


                                                                   2.
                              LICENSE AGREEMENT


         PC-SUPERMENU was copyrighted in 1987, 1988, and 1989, and
         is protected by the copyright laws of the United States of
         America.  The original and all copies of PC-SUPERMENU shall
         remain the property of Foto 64, Inc. and the author.

         Your use of PC-SUPERMENU constitutes your agreement with the
         following conditions.

             This copy of PC-SUPERMENU and all backup copies are the
             property of the author.

             Registered users are licensed to operate PC-SUPERMENU
             on one computer in a single user environment.

             You may make backup copies of PC-SUPERMENU as necessary
             for use on a single computer system and to assure
             security of the original disk.

             You may make disk copies of the original PC-SUPERMENU
             disks for distribution or to share with other computer
             users.  You may not charge for this service.

             You may not share your registration access code or
             registration number with other computer users when
             sharing disk copies with others.

             You will not modify, reorganize, transfer, disassemble,
             or remove from operation any PC-SUPERMENU files,
             documentation, credits, or routines.

         Deviation from the above conditions shall be constituted a
         violation of your license agreement.  Under such conditions,
         FOTO 64, Inc. and/or the author may declare the agreement
         null and void and require the return of the original PC-
         SUPERMENU disk and all backup and working copies.

                                                                3.

        Disclaimer:  Every effort has been made to provide an
         operating program which is free from operational defects.
         PC-SUPERMENU is licensed on an as-is basis and neither FOTO
         64, Inc. or the author can be held liable for lost data, lost
         time, or computer incompatibility.

                             MULTI-USER PACKAGES

         If PC-SUPERMENU 2.6(c)is to be used on a network, multi-
         user system, or on more than one computer, contact the author
         for a multi-user licensing agreement.

                              TECHNICAL SUPPORT

         Technical support is available to registered users only.  To
         assure support, please complete the registration form fully
         and return it to Foto 64, Inc. with your check for $30.00.
         You will receive by return mail your registration package
         within two weeks.


                                                                4.


                          SUPERMENU FUNCTIONS


        PC-SUPERMENU ROUTINE
                This is the heart of the menu system.  With it, the
                user is able to search through up to 25 program
                libraries and search through up to 225 programs.
                By highlighting a program in the library, it may be
                initiated with the strike of a key.

                A configuration tells SUPERMENU the number of
                libraries that are to be loaded (from 1 to 25) and the
                data addresses of the library files (usually the
                same address as SUPERMENU).

                When PC-SUPERMENU is initiated, a configuration file
                is read and the program library data address is
                automatically set.  This data configuration may be
                reset from this routine (by entering ALT + C), and if
                desired, the new data address may be saved to the
                configuration file.  The next time PC-SUPERMENU is
                started, the new configuration will be read.

         MENUMAKER ROUTINE
                All program libraries are developed and edited within
                the MENUMAKER environment.

                Program library files are saved and recalled for
                editing.

                Data addresses of the program libraries may be
                modified and saved to a configuration file.

                                                                5.

                On initiation, MENUMAKER will read the configuration
                and automatically set the address to that of the
                program libraries.

        PROGRAM LIBRARIES
                Program libraries are created/edited by the MENUMAKER
                and read by the SUPERMENU system routine.

                Each library contains a library title, lists nine
                programs, and the path used by SUPERMENU to call the
                programs.

                             SYSTEM REQUIREMENTS

         COMPUTER:                 IBM PC/XT/AT OR TRUE COMPATIBLE
                                   MACHINES

         AVAILABLE RAM             RECOMMENDED MINIMUM 128K
                                   ONE 5 1/4" FLOPPY DRIVE PLUS A

         DISK DRIVES               SECOND DRIVE OF ANY CONFIGURATION.

         GRAPHICS ADAPTER          IBM MGA AND/OR CGA OR TRUE COMPATIBLE.
                                   HERCULES MGA ONLY

         MONITOR                   IBM MONOGRAPHIC OR COLOR GRAPHIC
                                   MONITOR OR EQUIVALENT. MONO
                                   MONITORS DRIVEN WITH A COMPOSITE
                                   INPUT FROM A COLOR GRAPHICS
                                   ADAPTER NOT ADVISED.

         PRINTER                   IBM OR COMPATIBLE GRAPHICS OR TEXT
                                   PRINTER

         OPERATING SYSTEM          PC OR MS DOS 2.1 OR LATER.

                                                                6.

         PC-SUPERMENU was programed on and designed for operation on
         true IBM compatible machines.  Unfortunately, some
         compatibles are not 100% IBM equivalents.  Every effort has
         been made to assure PC-SUPERMENU will be free from
         difficulties when operated on compatible equipment, however,
         problems may occasionally be encountered on such machines.
         Should you encounter a problem, please drop a note to FOTO
         64, Inc. describing the difficulty and your equipment
         configuration.  This feedback will assist in the development
         of future versions of PC-SUPERMENU.

         Assistance will be given to registered users to correct or
         circumvent the compatibility difficulty.

                              THE PC-SUPERMENU DISK

               FILE           FUNCTION
         -----------------------------------------------------------
                         PC-SUPERMENU SYSTEM DISK

         SMENU.EXE..............SUPERMENU SYSTEM Routine.
         DISPLAY.COM............Resident Screen Driver.
         SMENU.SCR..............Support Text Screen.
         SH.SCR.................Support Text Screen.
         CONFIG.DRV.............Configuration File.
         MENU*.LBR..............Program Library Menus(* = #1 to 25).
         SM.BAT.................Program Initialization File.

                   PC-SUPERMENU UTILITIES DISK

         MMENU.EXE..............Menumaker Routine.
         CONFILE2.EXE...........Installation Routine.
         SPEEDSCR.COM...........Resident Screen Library Manager.
         MMENU.PAK..............Screen Library.
         ISMP.PAK...............Screen Library.
         CONFILE.PAK............Screen Library.

                                                                7.

         CONFIG.DRV.............Configuration file.
         SUPER.DOC..............PC-SUPERMENU Documentation.
         PRTDOC.BAT.............Prints Documentation.
         SHOWDOC.BAT............Displays Documentation.

                          REGISTRATION

         Register your copy of PC-SUPERMENU(c) by filling out the
         registration form and returning it with your check for
         $30.00.  This will establish your eligibility for technical
         assistance by both telephone and mail.  In return you will
         receive the following:

             The registration/license number and access code for your
             copy of PC-SUPERMENU.

             Future upgrades of PC-SUPERMENU at a reduced cost.

             Instructions for securing technical support and a
             technical support service number.





                           INSTALLATION OF PC-SUPERMENU


         The installation of PC-SUPERMENU is simple.  In fact, it may
         be operated directly from the master PC-SUPERMENU disks with
         no alterations, however, this is not recommended.  The
         following steps are recommended for making your master
         working disk:

                                                                8.

                    5 1/4" or 3 1/2" DISK DRIVES

             1. Place DOS System disk in drive A: and an
                unformatted disk in drive B:.  Enter at the
                A:prompt the following:  A>format B:/V.  Enter
                the return key to initiate the format procedure.
                Follow the system instructions.  When the formatting
                is complete, a prompt will request the entry of the
                volume label.  Enter SMENU26.  DOS will validate the
                format and return to the system prompt.

             2. Remove the disk from drive B: and label it PC-
                SUPERMENU SYSTEM - WORK DISK.  Set it aside for now.

             3. Place a new blank disk in drive B: and format another
                disk as before.  Label this disk PC-SUPERMENU UTILITIES
                WORK DISK.

             4. Copy COMMAND.COM to the UTILITIES WORK DISK.

                           A:COPY COMMAND.COM B:

             5. Place the PC-SUPERMENU SYSTEM - WORKING DISK
                in drive B:.

             6. Copy COMMAND.COM to the master working disk.  Enter:

                           A>COPY COMMAND.COM B:

             7. Place the original PC-SUPERMENU SYSTEM DISK in drive
                A: and COPY all files to the system working disk in
                drive B:.  Enter:

                              A>COPY *.* B:

             8. Place the PC-SUPERMENU UTILITIES - WORKING DISK in
                drive B:.

                                                                9.


             9. Place the original PC-SUPERMENU UTILITIES DISK in
                drive A: and COPY all files to the utilities working
                disk in drive B:.  Enter:

                               A>COPY *.* B:

            10. Place your PC-SUPERMENU MASTER DISKS in a safe place
                and complete the following steps with the working
                disks.

                This completes the first stage of the PC-SUPERMENU
                installation.

         PC-SUPERMENU may now be operated, but the complete installation
         cannot be completed until the registration card has been
         returned to FOTO 64, INC. and your registration/license number
         and access code have been received.  When completed, the
         registrant's name and registration number will appear on the
         introductory screen.

            11. Complete and return the registration card to FOTO 64.
                If you have not received the access code, go to the
                start-up procedure.

         When you receive your registration/license number and
         the access code, proceed with steps 10 through 13.

            12. Place the PC-SUPERMENU SYSTEM - WORKING DISK in
                drive A: and place the PC-SUPERMENU UTILITIES -
                WORKING DISK in drive B:.

                Change the default drive to drive B:. Enter A>B:

            13. Enter the following command: A>INSTALLR and return.

                                                               10.

            14. The SUPERMENU install screen will be displayed.
                You will be directed to enter a name or message, the
                registration number, and the access code.

                The message may be up to 32 characters and may
                consist of the registrant's name or any message, such
                as, "REGISTERED TO JOHN DOE."

                The registration/license number must be entered
                exactly as received.

                The access code must be entered exactly as received,
                taking care to use the upper and lower case letters as
                indicated.  Failure to do so will result in an error
                message.  If the error message is ignored and the
                installation is continued, the introductory screen
                will display an unregistered copy notice.

            15. Copy the updated configuration file to the working
                system disk.  Enter the following:

                        B>COPY CONFIG.DRV A:

            16. To make backup working disks, format two additional
                disks as in steps 1 - 3.  Copy the contents of the
                master working disks to the new disks.

                This copy is licensed for use on a SINGLE MACHINE
                only.  Copies may not be shared with other computer
                users.

                DO NOT SHARE THE ACCESS CODE.

                Should the access code be lost, it may be
                reconstructed by FOTO 64, Inc from the registration
                number.  Call for help.


                                                               11.

                                 HARD DRIVES

         A number of configurations may be used in installing PC-
         SUPERMENU on your hard drive.  If space is not a
         consideration, then copy all of the SUPERMEN files directly
         to the hard drive.  You may place both the system and
         utility disk files in one directory, or they may be placed in
         separate directories.  Let's look at several options.

         To install all PC-SUPERMENU in the same directory, observe
         the following steps.

             17. Change the system default to the drive on which
                 PC-SUPERMENU is to be located.  If drive C:, then
                 enter A>C:

                 If SUPERMENU is to be located in the root directory,
                 go to step #20.

             18. Make a directory called SMENU by entering
                 C>MD SMENU.

             19. Change to the SMENU directory by entering
                 C>CD\SMENU.

             20. Copy the master disk to the directory SMENU and
                 place the PC-SUPERMENU SYSTEM DISK in drive A:.
                 Enter C>COPY A:*.*

                 Repeat this process for the PC-SUPERMENU UTILITIES
                 DISK.

             21. Complete and return the registration card enclosed in
                 the PC-SUPERMENU packet.

                                                               12.


             22. PC-SUPERMENU will now operate from the hard drive,
                 but the installation procedure is not complete.

             23. Place the master PC-SUPERMENU disks in a safe place.

         When you receive your registration/license number and
         the access code, complete the installation procedure by
         running the configuration program.  Just enter: C>INSTALLR
         and follow the procedures in outlined in steps #11 - 14.

                      OTHER HARD DISK INSTALLATION OPTIONS

         If disk space is of particular concern, only the PC-
         SUPERMENU SYSTEM FILES may be placed on the hard drive.  In
         this configuration, the utility disk would be prepared as in
         steps #1 - 10 and operated as needed from drive A:.  In this
         configuration, the final installation would be the same as in
         steps #11 - 16, with the exception that the configuration
         file would be copied to the hard drive address.

         It is also possible to install PC-SUPERMENU in different
         directories on the hard drive.  In this case, the system
         files would be located in directory SMENU and the utilities
         files would be located in directory MMENU.

         The author's installation places the PC-SUPERMENU SYSTEM in
         the root directory of drive C: and the PC-SUPERMENU UTILITIES
         in directory C:\MMENU.  This configuration works well and
         reduces the number of batch file commands required of
         programs making calls within the directory.

         Regardless of placement of SUPERMENU, access to the file
         COMMAND.COM must be available for the operations of the
         programs.


                                                                13.

                            START-UP OF PC-SUPERMENU

         The program start-up sequence is critical to the proper
         operation of PC-SUPERMENU.  To simplify this start-up, three
         batch files have been included on the master disks.  The
         batch file SM.BAT located on the system disk initiates
         PC-SUPERMENU.  Batch files MM.BAT and INSTALLR.BAT on the
         utilities disk initiate the MENUMAKER and CONFILE2.  These
         programs must be initiated with these batch files for proper
         operation.

         During start-up, the PC-SUPERMENU screen drivers must be
         loaded before any other program.  This includes residential
         programs such as SIDEKICK or XTREE.  If you encounter
         difficulties with program conflicts, try operating
         PC-SUPERMENU without other residential programs.  If you
         still have difficulties contact FOTO 64, Inc.

         FAILURE TO OBSERVE THIS START-UP PROCEDURE WILL RESULT IN
         AN UNREADABLE SCREEN!!

         After loading the support resident programs, PC-SUPERMENU
         will display the introductory screen and the status of the
         program registration.  The PC-SUPERMENU menu screen will be
         displayed with the address of the library files as well as
         the number of files that were to be loaded.  PC-SUPERMENU may
         be configured to load from 1 to 25 libraries.

         If the configuration file is missing, you will be asked to
         re-enter the path and library data, and PC-SUPERMENU will
         create a new file.  If this should happen, it will be
         necessary for you to re-enter the registration data using the
         CONFILE program provided on the disk.  To do this, you will
         need the registration data and your access code.


                                                                14.

                                   TUTORIAL

                            USING PC-SUPERMENU 2.6

         If you are experiencing difficulty using PC-SUPERMENU,
         perhaps the following information and directions will assist
         you.

                         SUPERMENU OPERATION

         With the computer set to the drive\directory containing the
         SUPERMENU SYSTEM, enter "SM" (DRIVE>SM) and the introductory
         SUPERMENU screen will be displayed.  After a few seconds, the
         program will read the configuration file and display the main
         PC-SUPERMENU screen.  The contents of library one will appear
         in the windows.

         Displayed at the bottom of the screen will be the address of
         SUPERMENU and the number of libraries that have been loaded.
         If either of these are incorrect, it may be corrected.  Enter
         "ALT + C" and the program will prompt for the drive in which
         the program is situated.  Enter only the letter and the
         program will prompt for the directory.  If the program is in
         the root directory, enter only return.  SUPERMENU will then
         prompt for the number of libraries it is to load.  Enter the
         number of libraries to load.  This number may not exceed 25,
         or the total number of libraries available for loading.

         To initiate a program, it must be highlighted using the up
         and down arrow keys and return.  SUPERMENU will read the
         path indicated in the library and initiate the called
         program.  When the called program is exited, the SUPERMENU
         screen will once again be displayed.

         Libraries may be selected using the PgUp and PgDn keys.  If
         the Ctrl key is pressed while changing libraries, it is
         possible to move through the libraries in increments of five.

                                                                15.

         Should something happen to the CONFIGURATION file, PC-
         SUPERMENU will not initiate until the configuration data is
         inputted.

         NOTE:  ALL LIBRARIES CALLED MUST BE AT THE SAME ADDRESS AS
         THE PC-SUPERMENU PROGRAM.

                       CREATING/EDITING THE LIBRARY MENUS

         To initiate the MENUMAKER, enter "MM" at the prompt of the
         drive containing the PC-SUPERMENU UTILITY files.  The
         introductory screen will be displayed followed by the
         MAKEMENU screen, not the default drive setting on the
         screen.  This must read the same as the address of the
         SUPERMENU SYSTEM.  If it does not, highlight the change drive
         window and press "return."  Enter the letter of the drive
         where the system is located.  The load screen with the
         library listing will be displayed.

         If the SUPERMENU SYSTEM is in a directory, enter the change
         directory window and then the name of the directory and press
         return.  The new directory with the MENU+NUMBER.LBR files is
         displayed.  Enter the return to menu window.  The program
         will offer the option of saving the new values to the
         configuration file.  If you save, then the next time the
         MENUMAKER is initiated, it will automatically go to that data
         address.

         Enter the load window and the available libraries will be
         displayed.  Enter the name of the menu to be edited and the
         library input/edit screen will be displayed.  Enter "ALT + H"
         and the edit keys will be displayed.  ACQUAINT yourself with
         them, then enter "ESC" and return to the edit screen.

         The first entry will be the title of the library.  If
         correct, press return and proceed to the library file name.


                                                             16.

         All library files will titled "MENU + NUM".  For example:
         MENU1, MENU@, etc.  The menu files must be in sequential
         order.  If there are six libraries, then the file names will
         be from MENU1 TO MENU6.  If there are 15 libraries, then the
         file names will extend from MENU1 TO MENU15.  There cannot be
         a break in the numbering system, and the numbering system
         must start with #1.  If the file name is correct, enter
         return and proceed to the first program to be initiated.

         Enter the name of the program, return, and enter the path to
         the program to be initiated.  The path is the instructions
         or route to be taken to accomplish the program start up.

         For example: You wish to run PCGAME which is situated in the
         directory PCG on drive C:.  The initiating file for PCGAME is
         PCG.  The Path will be C:\PCG\PCG.

         Another example: You wish to run the program "HAMURABI".  It
         is situated on drive D: in the root directory.  The path will
         be D:\HAMURABI.

         If you wish to utilize DOS' shell capabilities, the title
         would be DOS SHELL and the file call would be COMMAND.

                              PROGRAM BATCH FILES

         The paths indicated above will work on programs that do not
         call other files or routine from within the directory in
         which they are situated.  If they do, then the program will
         search for the file being called at SUPERMENU'S location.  To
         correct this problem, it is necessary to include a start-up
         batch file that will change the path to the directory in
         which the program is situated.

         Let's use PC-GAME again as an example.  PC-GAME loads screen
         libraries and chains between routines.  Unless the path is
         changed, in this case the program will seek the libraries and
         subroutines in SUPERMENU'S directory, and the program will
         fail.

                                                                17.

         To correct this difficulty, the program start-up batch file
         must have additional instructions.  The origninal start-up
         batch file (PCG) contained the following instructions.

          LOAD DRIVER............ PCG.BAT, when initiated, looked for
          PCGAME................. each step in the directory for
          UNLOAD DRIVER.......... SUPERMENU.

         The modified batch file changes the directory to that of PC-
         mail and changes it back when the program is exited.


         C:............................... Sets drive
         CD\PCG........................... Changes the directory to
                                           PCG
         LOAD DRIVER...................... Loads screen driver
         PCGAME........................... Initiates program
         UNLOAD DRIVER.................... Unloads screen driver
         CD\.............................. Sets directory back to the
                                           root directory where the
                                           menu program can take
                                           control.

         To modify the batch files, consult your DOS operations
         manual.


                         EXITING PC-SUPERMENU


         ALWAYS EXIT PC-SUPERMENU BY ENTERING THE ESC COMMAND.

         This assures a proper shut down of the routine and unloads
         the associated residence program and the screen libraries.

                                                                18.


                             SUPPORT CREDITS 

         Listing of Credits For Individual and Institutional
         Assistance During The Developmental Phases And For Continuing
         Support Of..

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


             FOTO 64, INC. - PO BOX 2130 - SARATOGA, CA 95070-2130




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1976

     Volume in drive A has no label
     Directory of A:\

    MMENU    EXE     96748   8-31-89   7:06p
    CONFILE2 EXE     40358   8-20-89  11:46p
    SPEEDSCR COM      5333  10-01-86  12:00p
    MMENU    PAK     17251   9-18-89   5:04p
    ISMP     PAK      3341   9-18-89   5:35p
    CONFILE  PAK      2807   8-21-89   7:55a
    CONFIG   DRV        57   8-20-89  11:34p
    MM       BAT        60   8-09-89   9:22p
    INSTALLR BAT        57   8-09-89   9:20p
    INTAL                1   9-18-89   5:13p
    SHOWDOC  BAT        16   9-06-89   6:41a
    PRTDOC   BAT       108   9-06-89   6:46a
    PRTREG   BAT       209   8-22-87   8:04a
    REGFORM  DOC      1592   9-06-89   6:49a
    SUPER    DOC     33555   9-25-88   6:25p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-22-90  10:06a
    FILE1976 TXT      2295   1-22-90  10:26a
           18 file(s)     204443 bytes
                          105472 bytes free
