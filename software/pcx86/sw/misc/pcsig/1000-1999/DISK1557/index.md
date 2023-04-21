---
layout: page
title: "PC-SIG Diskette Library (Disk #1557)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1557/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1557"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SPEEDY MAILER"

    Have you ever wondered how those credit agencies, schools, and other
    businesses get the carbon envelope message mailers produced?  Well
    wonder no more because it's easier than you might think.
    
    PC-SPEEDY MAILER is a self-prompting menu-driven program which supports
    the development, printing, and addressing of continuous feed message
    mailers measuring 5 1/2" x 8 1/2".  With PC-SPEEDY MAILER you may
    create
    a mailer message consisting of up to thirteen lines consisting of 60
    characters.  This message may be edited, saved to a disk file, and be
    recalled at a later time for editing or printing.
    
    With PC-SPEEDY MAILER, businesses can recognize a significant saving in
    mail costs when communicating with clients.  In a matter of minutes a
    message can be typed and printed for mailing.  There is no need for art
    work production, printing, and envelope stuffing.  The cost of labor and
    materials savings can be significant.
    
    PC-SPEEDY MAILER was designed as a companion program to PC-POSTCARD.
    During printing, the user may merge address files developed with this
    program.
    
    PC-MAILER was designed for use by the inexperienced because little is
    required of the new user.  It makes liberal use of
    information and help screens, is menu-based, and is interactive with the
    user.
    
    With PC-MAILER, your computer will become a powerful tool for
    maintaining contacts with friends, clients, and business associates.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1557.TXT

{% raw %}
```
Disk No: 1557                                                           
Disk Title: PC-Speedy Mailer                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Speedy Mailer                                         
Author Version: 2.6S                                                    
Author Registration: $30.00                                             
Special Requirements: IBM or compatible printer.                        
                                                                        
Have you ever wondered how those credit agencies, schools, and other    
businesses get the carbon envelope message mailers produced?  Well      
wonder no more because it's easier than you might think.                
                                                                        
PC-SPEEDY MAILER is a self-prompting menu-driven program which supports 
the development, printing, and addressing of continuous feed message    
mailers measuring 5 1/2" x 8 1/2".  With PC-SPEEDY MAILER you may create
a mailer message consisting of up to thirteen lines consisting of 60    
characters.  This message may be edited, saved to a disk file, and be   
recalled at a later time for editing or printing.                       
                                                                        
With PC-SPEEDY MAILER, businesses can recognize a significant saving in 
mail costs when communicating with clients.  In a matter of minutes a   
message can be typed and printed for mailing.  There is no need for art 
work production, printing, and envelope stuffing.  The cost of labor and
materials savings can be significant.                                   
                                                                        
PC-SPEEDY MAILER was designed as a companion program to PC-POSTCARD.    
During printing, the user may merge addresses files developed with this 
program.                                                                
                                                                        
PC-MAILER was designed for use by the inexperienced because little      
inservice is required of the new user.  It makes liberal use of         
information and help screens, is menu-based, and is interactive with the
user.                                                                   
                                                                        
WITH PC-MAILER, YOUR COMPUTER WILL BECOME A POWERFUL TOOL FOR MAINTAINING
CONTACTS WITH FRIENDS, CLIENTS, AND BUSINESS ASSOCIATES.                
                                                                        
File Descriptions:                                                      
                                                                        
BRUN20   EXE  Run-time program, must accompany main program.            
CONFIG   DRV  Configuration file.                                       
CONFILE  EXE  Used to enter user info into intro screen.                
CONFILE  PAK  Confile library pack.                                     
GO       BAT  Start-up information.                                     
INSTALLR BAT  Initiates the registration program.                       
MAIL     BAT  PC-MAILER start-up.                                       
MAILER   EXE  Main program.                                             
MAILER   PAK  Screen library pack.                                      
MANUAL   DOC  Installation documentation.                               
MESSAGE3 EXE  Program to create mailer message.                         
PERMIT3  EXE  Program to create permit stamp.                           
PRINT03  EXE  Printing program.                                         
PRTDOC   BAT  Prints manual.                                            
PRTREG   BAT  Prints registration form.                                 
REGFORM  DOC  Registration form.                                        
SHOWDOC  BAT  Displays manual on screen.                                
SPEEDSCR COM  Resident screen management module.                        
TREE     MSS  Sample message.                                           
TREE     RPL  Sample permit stamp.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```









                                PC-SPEEDY MAILER 2.6S

                                         BY

                                   CARL F. MIESCKE


                      COPYRIGHT 1987,1988,1989 - CARL F. MIESCKE










                             DOCUMENTATION MANUAL





                                TABLE OF CONTENTS

                 INTRODUCTION....................................... 1.
                 PROGRAM FEATURES................................... 2.
                 LICENSE AGREEMENT.................................. 5.
                 MULTI-USER PACKAGES................................ 6.
                 TECHNICAL SUPPORT.................................. 6.
                 SYSTEM REQUIREMENTS................................ 7.
                 THE PC-SPEEDY MAILER DISK.......................... 8.
                 REGISTRATION....................................... 9.
                 INSTALLATION OF PC-SPEEDY MAILER...................10.
                        TWO DISK DRIVE SYSTEM.......................10.
                        HARD DISK SYSTEM............................13.
                 START-UP OF PC-SPEEDY MAILER.......................14.
                 TUTORIAL - USING PC-SPEEDY MAILER 2.6..............15.
                        ADDRESSING DATA FILES.......................15.
                        ENTERING THE MAILER MESSAGE.................15.
                        ENTERING THE RETURN ADDRESS/STAMP IMAGE.....16.
                        PRINTING THE MAILER.........................17.
                        EXITING PC-SPEEDY MAILER....................18.
                 CREDITS............................................18.





             FOTO 64, INC. - PO BOX 2130 - SARATOGA, CA 95070-2130



                       THIS IS A "SHAREWARE" PROGRAM


         *************************************************************
         *                 PC-SPEEDY MAILER  2.6S                    *
         *                                                           *
         *    PC-MAILER 2.6S IS DISTRIBUTED UNDER THE SHAREWARE      *
         *    CONCEPT.  IT IS A FULLY OPERATIONAL AND COPYRIGHTED    *
         *    PROGRAM WHICH YOU ARE ABLE TO TRY BEFORE BUYING..      *
         *                                                           *
         *    .....IT IS NOT PUBLIC DOMAIN OR FREEWARE..........     *
         *                                                           *
         *    USERS HAVE A RESPONSIBILITY TO REGISTER SPEEDY MAILER  *
         *    IF IT IS USED AS A PART OF THEIR COMPUTER OPERATION.   *
         *                                                           *
         *************************************************************

           Register your copy of PC-SPEEDY MAILER now.  Your 
           support makes possible the continued development of PC-
           SPEEDY MAILER and of other shareware programs - without 
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


          THE MAILER DEVELOPER/PRINTER MANAGER FOR BUSINESS AND HOME.

            ...TESTED AND PROVED IN A BUSINESS ENVIRONMENT...

         PC-SPEEDY MAILER is a self-prompting, menu-driven program 
         which supports the development, printing, and addressing 
         of continuous feed message mailers measuring 5 1/2" x 8 
         1/2". With PC-SPEEDY MAILER, you may create a mailer 
         message consisting of up to thirteen lines consisting of 
         60 characters.  This message may be edited, saved to a 
         disk file, and be recalled at a later time for editing or 
         printing. 

         PC-SPEEDY MAILER allows entering a return address and 
         designing a mailing permit stamp which also may be saved 
         to a disk file or printed with the message.  If no permit 
         stamp design is developed, the program provides alternate 
         stamp design or will print a generic stamp image. 

         PC-SPEEDY MAILER was designed as a companion program to 
         PC-MAIL and PC-POSTCARD.  During printing, the user may 
         merge address files developed with both of these programs. 

             PC-SPEEDY MAILER 2.6 REQUIRES THE AVAILABILITY OF DATA FILES
             DEVELOPED WITH PC-MAIL OR PC-POSTCARD....

         With PC-SPEEDY MAILER, businesses can recognize a 
         significant saving in mail costs when communicating with 
         clients.  In a matter of minutes a message can be typed 
         and printed for mailing. There is no need for art work 
         production, printing, and envelope stuffing.  The cost of 
         labor and materials savings can be significant. 

         A hard copy of every mailer will be printed.


                                                                  2.

         PC-SPEEDY MAILER was designed for use by the 
         inexperienced.  Little in-service is required of the new 
         user.  It makes liberal use of information and help 
         screens, is menu based, and is interactive with the user. 


         WITH PC-SPEEDY MAILER, YOUR COMPUTER WILL BECOME A 
         POWERFUL TOOL FOR MAINTAINING CONTACTS WITH FRIENDS, 
         CLIENTS, AND BUSINESS ASSOCIATES. 



                           PROGRAM FEATURES


                        ** FEATURES OF PC-SPEEDY MAILER 2.6 **

                           ** GENERAL OPERATIONS **

        PC-SPEEDY MAILER ROUTINE
                This routine is the controlling routine and 
                contains the main operations menu.  All program 
                operations are initiated from this routine.  Access 
                to the message, permit, print, and path utilities 
                are entered by high-lighting the appropiate window. 

                When PC-SPEEDY MAILER is initiated, a configuration 
                file is read and the program data address is 
                automatically set.  This data configuration may be 
                reset from this routine, and if desired, the new 
                data address may be saved to the configuration 
                file.  The next time PC-SPEEDY MAILER is started, 
                the new confiuration will be read. 

         MESSAGE ROUTINE
                This routine permits the creation, editing, saving, 
                and recalling of the mailer messages.  Developed 
                messages may contain up to 13 lines of 60 
                characters each. 

                                                                     3.
                The message input may be printed, saved to a disk
                file, or recalled at a later date for editing or
                printing.  All messages are saved, printed, and
                recalled in the same format as it appeared on the
                screen when developed.

                     WHAT YOU SEE IS WHAT YOU GET

                All message data printed by the print routine of 
                PC-SPEEDY MAILER must be entered or recalled within 
                this routine.  Entered message data will be 
                transferred to the print routine automatically and 
                then printed in the same format as developed. 


         RETURN ADDRESS
                The header routine supports the creation and 
                editing of the return address and stamp.  Like the 
                mailer message routine, the developed data may be 
                saved to and retrieved from a disk file. 

                The input of the stamp image allows the user to 
                design and print a stamp image with a special 
                message, such as a permit stamp for bulk mailing. 

                Header data entered into memory in the header 
                routine will be automatically transferred to the 
                mailer print routine. 

          PRINTER UTILITIES
                he printer routine reads the message and header 
                data in memory, prints the document, and addresses 
                the mailer by merging address data merged from 
                files developed with PC-MAIL and PC-POSTCARD.  Six 
                print modes are available for mailer printing.  
                This allows the user to select what components of 
                the mailer will be printed.  Thus enabling the user 
                to adapt to various mailers and printing needs. 

                                                                   4.
                All modes printing the return address allow the 
                user to modify or input return address data.  Data 
                entered from this routine may be saved only by the 
                header routine. 

                As in the return address, the stamp image may be 
                modified.  PC-SPEEDY MAILER contains a generic 
                stamp image which may be selected instead of one 
                being entered in the header routine, or the mailer 
                may be printed with no stamp image at all.  This 
                later option does not modify the customized stamp 
                image placed in memory while in the header routine. 

               GENERAL FEATURES TO BE REMEMBERED.

         A data file address (Drive and Directory) may be saved to a
           configuration file.
         PC-SPEEDY MAILER on initiation will read the configuration file
           and set the data address automatically.
         The data file address may be changed during a working
           session with out changing the configuration file.
         Permits data drive designation of A through N.
         Validates the presence and readiness of drive selected.
         Directory may be changed, created, and removed without
           exiting the program.
         Multiple level directories are supported.
         On-screen help is available on input routines.


                                                                    5.

                              LICENSE AGREEMENT


         PC-SPEEDY MAILER was copyrighted in 1987, 1988, and 1989 
         and is protected by the copyright laws of the United 
         States of America.  The original and all copies of PC-
         SPEEDY MAILER shall remain the property of Foto 64, Inc. 
         and the author. 

         Your use of PC-SPEEDY MAILER constitutes your agreement 
         with the following conditions. 

             This copy of PC-SPEEDY MAILER and all backup copies 
             are the property of the author. 

             Registered users are licensed to operate PC-SPEEDY 
             MAILER on one computer in a single user environment. 

             You may make back up copies of PC-SPEEDY MAILER as 
             necessary for use on a single computer system, and to 
             assure security of the original disk. 

             You may make disk copies of the original PC-SPEEDY 
             MAILER disks for distribution or to share with other 
             computer users.  You may not charge for this service. 

             You may not share your registration access code or 
             registration number with other computer users when 
             sharing disk copies with others. 

             You will not modify, reorganize, transfer, 
             disassemble, or remove from operation any PC-SPEEDY 
             MAILER files, documentation, credits, or routines. 

         Deviation from the above conditions shall be constituted a 
         violation of your license agreement.  Under such 
         conditions, FOTO 64, Inc. and/or the author may declare 
         the agreement null and void and require the return of the 
         original PC-SPEEDY MAILER disk and all backup and working 
         copies. 

                                                                   6.

         Disclaimer:  Every effort has been made to provide an 
         operating program which is free from operational defects. 
         PC-SPEEDY MAILER is licensed on an as-is basis and neither 
         FOTO 64, Inc. or the author can be held liable for lost 
         data, lost time, or computer incompatibility. 

                             MULTI-USER PACKAGES

         If PC-SPEEDY MAILER 2.6(c)is to be used on a network, 
         multi-user system, or on more than one computer, contact 
         the author for a multi-user licensing agreement. 

                              TECHNICAL SUPPORT

         Technical support is available to registered users only.  
         To assure support, please complete the registration form 
         fully and return it to Foto 64, Inc. with your check for 
         $30.00. You will receive by return mail your registration 
         package within two weeks. 


                                                                   7.

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

         PRINTER                   IBM OR COMPATIBLE GRAPHICS OR TEXT
                                   PRINTER.

         OPERATING SYSTEM          PC OR MS DOS 2.1 OR LATER.

         PC-SPEEDY MAILER was programed on and designed for 
         operation on true IBM compatible machines.  Unfortunately, 
         some compatibles are not 100% IBM equivalents.  Every 
         effort has been made to assure PC-SPEEDY MAILER will be 
         free from difficulties when operated on compatible 
         equipment, however, problems may occassionally be 
         encountered on such machines - should you encounter a 
         problem, please drop a note to FOTO 64, Inc. describing 
         the difficulty and your equipment configuration.  This 
         feedback will assist in the development of future versions 
         of PC-SPEEDY MAILER. 

         Assistance will be given to registered users to correct or
         circumvent the compatibility difficulty.


                                                                   8.

                          THE PC-SPEEDY MAILER DISK

               FILE           FUNCTION
         -----------------------------------------------------------

         MAILER.EXE.............PC-SPEEDY MAILER controlling routine.
         PERMIT3.EXE............Enter, edit, and save the return
                                address, permit stamp, and return
                                mail back addresses.
         MESSAGE3.EXE...........Enter, edit, and save the MAILER
                                message.
         PRINT03.EXE............Prints the message, return address,
                                and permit stamp in memory.  Merges
                                and prints mailing addresses from
                                PC-MAIL address files.
         CONFILE.EXE............Enter serial and user code into the
                                introductory screen.
         COLOR.EXE..............Software switch - switches from
                                monographic system to the color
                                graphics system.
         CONFIG.DRV.............Configuration file read by PC-
                                MAILER.EXE to set the default data
                                address.  Address is currently set
                                for drive B.
         MAILER.PAK.............Screen Library pack.
         CONFILE.PAK............Confile library pack.
         SPEEDSCR.COM...........Resident screen management module.
                                (Software Bottling Company of N.Y.)
         MANUAl.DOC.............Installation documentation.
         REGFORM.DOC............Registration form.
         MAIL.BAT...............PC-SPEEDY MAILER start-up from CGA board.
                                Loads resident screen program and
                                initiates PC-SPEEDY MAILER.
         MAILD.BAT..............PC-SPEEDY MAILER start-up from MGA board,
                                transfers control to CGA board,
                                loads resident screen program, and
                                initiates PC-SPEEDY MAILER.

                                                                   9.

         SHOWDOC.BAT............Displays MANUAL.DOC on screen.
         PRTDOC.BAT.............Prints hard copy of MANUAL.DOC.
         INSTALLR.BAT...........Initiates the registration program
                                and CONFILE.EXE.
         TEST.MSS...............A sample message file which may be
                                recalled by the message routine.
         TEST.PRL...............A sample header file which may be
                                recalled by the header routine.
                .


                          REGISTRATION

         Register your copy of PC-SPEEDY MAILER(c) by filling out 
         the registration form and returning it with your check for 
         $30.00.  This will establish your eligibility for 
         technical assistance by both telephone and mail.  In 
         return you will receive the following: 

             The registration/license number and access code for your
             copy of PC-SPEEDY MAILER.

             Future upgrades of PC-SPEEDY MAILER at a reduced cost.

             Instructions for securing technical support and a
             technical support service number.




                                                                   10.
                      INSTALLATION OF PC-SPEEDY MAILER


         The installation of PC-SPEEDY MAILER is simple.  In fact, 
         it may be operated directly from the master PC-MANUAL disk 
         with no alterations, however, this is not recommended.  
         The following steps are recommended for making your master 
         working disk. 

                    5 1/4" or 3 1/2" DISK DRIVES

             1. Place a DOS system disk in drive A: and an 
                unformatted disk in drive B:.  Enter at the A: 
                prompt the following:  A>format B:/V.  Enter the 
                return key to initiate the format procedure.  
                Follow the system instructions.  When the 
                formatting is complete, a prompt will request the 
                entry of the volume label. Enter MAILER26.  DOS 
                will validate the format and return to the system 
                prompt.  Do not format another disk. 

             2. Remove the disk from drive B: and label it PC-
                SPEEDY MAILER SYSTEM MASTER.  Set it aside for now. 

             3. Place a new blank disk in drive B: and format 
                another disk without the /S command.  Enter at the 
                A: prompt the following:  A>FORMAT B:/V.  Follow 
                the same process used in step #1. 

             4. Remove this disk from drive B: and label it PC-
                SPEEDY MAILER DATA MASTER. 

             5. Place the PC-SPEEDY MAILER SYSTEM MASTER WORKING 
                DISK in drive B:. 



                                                                   11.
             6. Copy COMMAND.COM to the master working disk.  Enter:

                           A>COPY COMMAND.COM B:

             7. Place the master PC-SPEEDY MAILER SYSTEM DISK in 
                drive A: and COPY all files to the SYSTEM working 
                disk in drive B:. Enter: 

                              A>COPY *.* B:

             8. This completes the first stage of the PC-SPEEDY 
                MAILER installation. 

         PC-SPEEDY MAILER may now be operated, but the final instal- 
         lation step cannot be completed until the registration 
         card has been returned to FOTO 64, INC. and your 
         registration/license number and access code have been 
         received.  When completed, the registrant's name and 
         registration number will appear on the introductory 
         screen. 

             9. Complete and return the registration card to FOTO 
                64. If you have not received the access code, go to 
                the start-up procedure. 

         When you receive your registration/license number and the 
         access code, proceed with steps 10 through 13. 

            10. Place the working master PC-SPEEDY MAILER disk in 
                drive A:. 

            11. Enter the following command:  A>INSTALLR and 
                return. 

            12. The PC-SPEEDY MAILER install screen will be 
                displayed. You will be directed to enter a name or 
                message, the registration number, and the access 
                code. 


                                                                   12.

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

            13. Return the master disk to a secure location.  Do 
                not lose the access code as it will be necessary 
                should you need to modify the introductory message. 

                This copy is licensed for use on a SINGLE MACHINE 
                only.  Copies may not be shared with other computer 
                users. 

                DO NOT SHARE THE ACCESS CODE.

                Should the access code be lost, it may be 
                reconstructed by FOTO 64, Inc from the registration 
                number.  Call for help. 


                                                                   13.
                                 HARD DRIVES

         To install PC-SPEEDY MAILER on a hard drive, observe the 
         following steps: 

             14. Place your master PC-SPEEDY MAILER master SYSTEM disk in A:

             15. Change the system default to the drive on which
                 PC-SPEEDY MAILER is to be located.  If drive C:, then enter
                 A>C:

             15. Make a directory called MAILER by entering
                 C>MD MAILER.

             16. Change to the MAILER directory by entering C>CD\MAILER.

             17. Copy the master disk to the directory MAILER.
                 Enter C>COPY A:*.*

             18. Complete and return the registration card enclosed in
                 the PC-SPEEDY MAILER packet.

             19. PC-SPEEDY MAILER will now operate from the hard drive,
                 but the installation procedure is not complete.

         When you receive your registration/license number and the 
         access code, complete the installation procedure by 
         running the configuration program located on your working 
         system disk of PC-SPEEDY MAILER.  Just enter: C>INSTALLR 

         Maintaining the data files in the same directory as the 
         PC-SPEEDY MAILER operation files is not recommended.  The 
         data files work best if placed in their own directory or 
         directories. PC-MAIL, PC-POSTCARD, and PC-SPEEDY MAILER 
         data storage may be filed on the same data ADDRESS.  PC-
         SPEEDY MAILER will recognize all formats and will display 
         appropriate files.  This will reduce the need to exchange 
         data addresses when printing the mailer. 


                                                                14.
         Data directories may be created, erased, and changed by 
         entering HOME from the main PC-SPEEDY MAILER menu. 

                        START-UP OF PC-SPEEDY MAILER

         The program start-up sequence is critical to the proper 
         operation of PC-SPEEDY MAILER.  To simplify this start-up, 
         two batch files have been included on the master disk.  If 
         you are starting the program from a monographic or 
         colorgraphic system, enter at the drive prompt MAIL 
         (C>MAIL).  If you have a dual color/bw system, enter MAILD 
         at the drive prompt (C>MAILD) while in the monographic 
         system.  These start-up sequences must be followed. 

         During start-up, the PC-SPEEDY MAILER screen driver must 
         be loaded before any other program.  This includes 
         residential programs such as SIDEKICK or XTREE.  If you 
         encounter difficulties with program conflicts, try 
         operating PC-SPEEDY MAILER without other residential 
         programs.  If you still have difficulties, contact FOTO 
         64, Inc. 

         FAILURE TO OBSERVE THIS START-UP PROCEDURE WILL RESULT IN 
         AN UNREADABLE SCREEN!! 

         After loading the support resident programs, PC-SPEEDY 
         MAILER will display the introductory screen and the status 
         of the program registration.  The PC-SPEEDY MAILER menu 
         screen will be displayed with the path of the PC-SPEEDY 
         MAILER data drive.  If the configuration file is missing, 
         you will be asked to re-enter the path data and PC-SPEEDY 
         MAILER will create a new file.  If this should happen, it 
         will be necessary for you to re-enter the registration 
         data using the CONFILE program provided on the disk.  To 
         do this you will need the registration data and your 
         access code. 


                                                                15.
                                   TUTORIAL

                        USING PC-SPEEDY MAILER 2.6(c)

         If you are experiencing difficulty using PC-SPEEDY MAILER, 
         perhaps the following information and directions will 
         assist you. 

                         DATA FILE ADDRESSES

         PC-SPEEDY MAILER data files may be located in the same 
         directory as those of PC-MAIL and PC-POSTCARD.  PC-SPEEDY 
         MAILER will recognize the file types and will display only 
         the files requested.  Having all files to be accessed in 
         the same directory reduces the need to change the PC-
         SPEEDY MAILER default data address before entering the 
         printer routine. 

         NOTE:  The default data address may be changed within the 
         program with out changing the configuration driver. 

                     ENTERING THE MAILER MESSAGE

         1. From the main PC-SPEEDY MAILER menu, go to the enter 
         message routine.  Enter the card message and the message 
         input screen will be displayed.  Enter "ALT + H" and 
         acquaint yourself with the input routine edit keys. 

         Enter "ESC" and return to the input screen.  Enter your 
         message exactly the way you want it to appear when 
         printed. 

            REMEMBER, WHAT YOU SEE IS WHAT YOU WILL GET.

         When you have completed your message, you will be asked 
         for approval.  At this time, you may return to the start 
         of the message for further editing by entering "N". 


                                                                16.

         2. If you approve the message, the enter message menu will 
         be displayed.  If the message is to be saved, enter the 
         save file option.  If you wish to recall a previously 
         saved message, it may be done at this time. 

         NOTE: PC-SPEEDY MAILER WILL AUTOMATICALLY TRANSFER THE 
         CURRENT MESSAGE IN MEMORY TO THE PRINT ROUTINE FOR 
         PRINTING. 

         3. Return to the main PC-SPEEDY MAILER menu. 

                     ENTERING THE RETURN ADDRESS AND STAMP

         1. Enter the header routine and the Header menu will be 
         displayed.  If you have previously developed a header, it 
         may be loaded at this time.  If you wish to develop a new 
         header, using the arrow keys, indicate the header 
         development needed and enter return.  The header input 
         screen will be displayed.  As in the message routine, 
         enter "ALT + H" and review the edit keys.  This routine's 
         continuity will be slightly different from the message 
         editing. 

         2. Enter "ESC" and return to the input screen.  Enter the 
         return address desired.  If you are entering a full 
         header, PC-SPEEDY MAILER will go to the stamp input.  
         Enter the desired stamp data at the left edge of the 
         input.  When you have entered all stamp data, PC-SPEEDY 
         MAILER will automatically center each line.  Review the 
         data input.  The header data will be printed as it appears 
         on the screen. 

                   WHAT YOU SEE IS WHAT YOU GET

         If the data is correct, enter "Y" and the header menu will 
         be displayed.  The header may be saved to a disk file at 
         this time. 


                                                                17.
         NOTE:  PC-SPEEDY MAILER WILL AUTOMATICALLY TRANSFER THE 
         CURRENT HEADER IN MEMORY TO THE PRINT ROUTINE FOR 
         PRINTING. 

         3. Return to the main PC-SPEEDY MAILER menu.

                PRINTING AND ADDRESSING THE MAILER.

         1. Be sure that the PC-SPEEDY MAILER default data drive is 
         set to locate the PC-MAIL data files.  If it is not, enter 
         the "HOME" key and do so.  If your PC-SPEEDY MAILER files 
         are not located with the PC-MAIL files, do not save the 
         new configuration when prompted. 

         2. When the print routine is entered, a menu screen will 
         be offering six printing modes.  Enter the printing 
         configuration which meets the user's printing needs.  Once 
         the selection is made, PC-SPEEDY MAILER will display each 
         component to be printed. If merging address files, PC-
         SPEEDY MAILER will request the file name and will display 
         the print sort options for printing. 

         3. For example, if mode #1 is entered, the message in 
         memory will be displayed.  Confirm the message, if 
         correct, and the return address will be displayed.  You 
         may modify or enter a new return address at this time.  
         Any changes made to the return address will also be made 
         to the return address currently in memory.  If correct, 
         enter "1" and the non permit stamp image will be 
         displayed.  If you wish the custom stamp image entered, 
         enter "4" and it will be shown.  If you wish no stamp 
         printed, enter "3."  If you wish to create a new stamp 
         image or message. enter "2".  The new stamp image entered 
         will not replace the one currently in memory. 

         4. If the stamp image is correct, enter "1" and the 
         available PC-MAIL data files will be displayed.  Enter the 
         file name and PC-MAIL will load it into memory and display 
         the print option menu. 

                                                                  18.
         5. Ready the printer with the blank mailer forms.  To 
         check the alignment, enter option "8" on the menu and 
         enter record "1" and number "1".  If the alignment is 
         correct, then enter the option choice for printing. 

         6. When printing is complete, PC-SPEEDY MAILER will return 
         to the main menu. 

                          EXITING PC-SPEEDY MAILER


         ALWAYS EXIT PC-SPEEDY MAILER BY ENTERING THE EXIT COMMAND.

         This assures a proper shut down of the routine and unloads 
         the associated residence program and the screen libraries. 


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

## MANUALS.DOC

{% raw %}
```









                                PC-SPEEDY MAILER 2.6S

                                         BY

                                   CARL F. MIESCKE


                      COPYRIGHT 1987,1988,1989 - CARL F. MIESCKE










                             DOCUMENTATION MANUAL





                                TABLE OF CONTENTS

                 INTRODUCTION....................................... 1.
                 PROGRAM FEATURES................................... 2.
                 LICENSE AGREEMENT.................................. 5.
                 MULTI-USER PACKAGES................................ 6.
                 TECHNICAL SUPPORT.................................. 6.
                 SYSTEM REQUIREMENTS................................ 7.
                 THE PC-SPEEDY MAILER DISK.......................... 8.
                 REGISTRATION....................................... 9.
                 INSTALLATION OF PC-SPEEDY MAILER...................10.
                        TWO DISK DRIVE SYSTEM.......................10.
                        HARD DISK SYSTEM............................13.
                 START-UP OF PC-SPEEDY MAILER.......................14.
                 TUTORIAL - USING PC-SPEEDY MAILER 2.6..............15.
                        ADDRESSING DATA FILES.......................15.
                        ENTERING THE MAILER MESSAGE.................15.
                        ENTERING THE RETURN ADDRESS/STAMP IMAGE.....16.
                        PRINTING THE MAILER.........................17.
                        EXITING PC-SPEEDY MAILER....................18.
                 CREDITS............................................18.





             FOTO 64, INC. - PO BOX 2130 - SARATOGA, CA 95070-2130



                       THIS IS A "SHAREWARE" PROGRAM


         *************************************************************
         *                 PC-SPEEDY MAILER  2.6S                    *
         *                                                           *
         *    PC-MAILER 2.6S IS DISTRIBUTED UNDER THE SHAREWARE      *
         *    CONCEPT.  IT IS A FULLY OPERATIONAL AND COPYRIGHTED    *
         *    PROGRAM WHICH YOU ARE ABLE TO TRY BEFORE BUYING..      *
         *                                                           *
         *    .....IT IS NOT PUBLIC DOMAIN OR FREEWARE..........     *
         *                                                           *
         *    USERS HAVE A RESPONSIBILITY TO REGISTER PC-MAILER      *
         *    IF IT IS USED AS A PART OF THEIR COMPUTER OPERATION.   *
         *                                                           *
         *************************************************************

           Register your copy of PC-SPEEDY MAILER now.  Your 
           support makes possible the continued development of PC-
           SPEEDY MAILER and of other shareware programs - without 
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


          THE MAILER DEVELOPER/PRINTER MANAGER FOR BUSINESS AND HOME.

            ...TESTED AND PROVED IN A BUSINESS ENVIRONMENT...

         PC-SPEEDY MAILER is a self-prompting, menu-driven program 
         which supports the development, printing, and addressing 
         of continuous feed message mailers measuring 5 1/2" x 8 
         1/2". With PC-SPEEDY MAILER, you may create a mailer 
         message consisting of up to thirteen lines consisting of 
         60 characters.  This message may be edited, saved to a 
         disk file, and be recalled at a later time for editing or 
         printing. 

         PC-SPEEDY MAILER allows entering a return address and 
         designing a mailing permit stamp which also may be saved 
         to a disk file or printed with the message.  If no permit 
         stamp design is developed, the program provides alternate 
         stamp design or will print a generic stamp image. 

         PC-SPEEDY MAILER was designed as a companion program to 
         PC-MAIL and PC-POSTCARD.  During printing, the user may 
         merge address files developed with both of these programs. 

             PC-SPEEDY MAILER 2.6 REQUIRES THE AVAILABILITY OF DATA FILES
             DEVELOPED WITH PC-MAIL OR PC-POSTCARD....

         With PC-SPEEDY MAILER, businesses can recognize a 
         significant saving in mail costs when communicating with 
         clients.  In a matter of minutes a message can be typed 
         and printed for mailing. There is no need for art work 
         production, printing, and envelope stuffing.  The cost of 
         labor and materials savings can be significant. 

         A hard copy of every mailer will be printed.


                                                                  2.

         PC-SPEEDY MAILER was designed for use by the 
         inexperienced.  Little in-service is required of the new 
         user.  It makes liberal use of information and help 
         screens, is menu based, and is interactive with the user. 


         WITH PC-SPEEDY MAILER, YOUR COMPUTER WILL BECOME A 
         POWERFUL TOOL FOR MAINTAINING CONTACTS WITH FRIENDS, 
         CLIENTS, AND BUSINESS ASSOCIATES. 



                           PROGRAM FEATURES


                        ** FEATURES OF PC-SPEEDY MAILER 2.6 **

                           ** GENERAL OPERATIONS **

        PC-SPEEDY MAILER ROUTINE
                This routine is the controlling routine and 
                contains the main operations menu.  All program 
                operations are initiated from this routine.  Access 
                to the message, permit, print, and path utilities 
                are entered by high-lighting the appropiate window. 

                When PC-SPEEDY MAILER is initiated, a configuration 
                file is read and the program data address is 
                automatically set.  This data configuration may be 
                reset from this routine, and if desired, the new 
                data address may be saved to the configuration 
                file.  The next time PC-SPEEDY MAILER is started, 
                the new confiuration will be read. 

         MESSAGE ROUTINE
                This routine permits the creation, editing, saving, 
                and recalling of the mailer messages.  Developed 
                messages may contain up to 13 lines of 60 
                characters each. 

                                                                     3.
                The message input may be printed, saved to a disk
                file, or recalled at a later date for editing or
                printing.  All messages are saved, printed, and
                recalled in the same format as it appeared on the
                screen when developed.

                     WHAT YOU SEE IS WHAT YOU GET

                All message data printed by the print routine of 
                PC-SPEEDY MAILER must be entered or recalled within 
                this routine.  Entered message data will be 
                transferred to the print routine automatically and 
                then printed in the same format as developed. 


         RETURN ADDRESS
                The header routine supports the creation and 
                editing of the return address and stamp.  Like the 
                mailer message routine, the developed data may be 
                saved to and retrieved from a disk file. 

                The input of the stamp image allows the user to 
                design and print a stamp image with a special 
                message, such as a permit stamp for bulk mailing. 

                Header data entered into memory in the header 
                routine will be automatically transferred to the 
                mailer print routine. 

          PRINTER UTILITIES
                he printer routine reads the message and header 
                data in memory, prints the document, and addresses 
                the mailer by merging address data merged from 
                files developed with PC-MAIL and PC-POSTCARD.  Six 
                print modes are available for mailer printing.  
                This allows the user to select what components of 
                the mailer will be printed.  Thus enabling the user 
                to adapt to various mailers and printing needs. 

                                                                   4.
                All modes printing the return address allow the 
                user to modify or input return address data.  Data 
                entered from this routine may be saved only by the 
                header routine. 

                As in the return address, the stamp image may be 
                modified.  PC-SPEEDY MAILER contains a generic 
                stamp image which may be selected instead of one 
                being entered in the header routine, or the mailer 
                may be printed with no stamp image at all.  This 
                later option does not modify the customized stamp 
                image placed in memory while in the header routine. 

               GENERAL FEATURES TO BE REMEMBERED.

         A data file address (Drive and Directory) may be saved to a
           configuration file.
         PC-SPEEDY MAILER on initiation will read the configuration file
           and set the data address automatically.
         The data file address may be changed during a working
           session with out changing the configuration file.
         Permits data drive designation of A through N.
         Validates the presence and readiness of drive selected.
         Directory may be changed, created, and removed without
           exiting the program.
         Multiple level directories are supported.
         On-screen help is available on input routines.


                                                                    5.

                              LICENSE AGREEMENT


         PC-SPEEDY MAILER was copyrighted in 1987, 1988, and 1989 
         and is protected by the copyright laws of the United 
         States of America.  The original and all copies of PC-
         SPEEDY MAILER shall remain the property of Foto 64, Inc. 
         and the author. 

         Your use of PC-SPEEDY MAILER constitutes your agreement 
         with the following conditions. 

             This copy of PC-SPEEDY MAILER and all backup copies 
             are the property of the author. 

             Registered users are licensed to operate PC-SPEEDY 
             MAILER on one computer in a single user environment. 

             You may make back up copies of PC-SPEEDY MAILER as 
             necessary for use on a single computer system, and to 
             assure security of the original disk. 

             You may make disk copies of the original PC-SPEEDY 
             MAILER disks for distribution or to share with other 
             computer users.  You may not charge for this service. 

             You may not share your registration access code or 
             registration number with other computer users when 
             sharing disk copies with others. 

             You will not modify, reorganize, transfer, 
             disassemble, or remove from operation any PC-SPEEDY 
             MAILER files, documentation, credits, or routines. 

         Deviation from the above conditions shall be constituted a 
         violation of your license agreement.  Under such 
         conditions, FOTO 64, Inc. and/or the author may declare 
         the agreement null and void and require the return of the 
         original PC-SPEEDY MAILER disk and all backup and working 
         copies. 

                                                                   6.

         Disclaimer:  Every effort has been made to provide an 
         operating program which is free from operational defects. 
         PC-SPEEDY MAILER is licensed on an as-is basis and neither 
         FOTO 64, Inc. or the author can be held liable for lost 
         data, lost time, or computer incompatibility. 

                             MULTI-USER PACKAGES

         If PC-SPEEDY MAILER 2.6(c)is to be used on a network, 
         multi-user system, or on more than one computer, contact 
         the author for a multi-user licensing agreement. 

                              TECHNICAL SUPPORT

         Technical support is available to registered users only.  
         To assure support, please complete the registration form 
         fully and return it to Foto 64, Inc. with your check for 
         $30.00. You will receive by return mail your registration 
         package within two weeks. 


                                                                   7.

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

         PRINTER                   IBM OR COMPATIBLE GRAPHICS OR TEXT
                                   PRINTER.

         OPERATING SYSTEM          PC OR MS DOS 2.1 OR LATER.

         PC-SPEEDY MAILER was programed on and designed for 
         operation on true IBM compatible machines.  Unfortunately, 
         some compatibles are not 100% IBM equivalents.  Every 
         effort has been made to assure PC-SPEEDY MAILER will be 
         free from difficulties when operated on compatible 
         equipment, however, problems may occassionally be 
         encountered on such machines - should you encounter a 
         problem, please drop a note to FOTO 64, Inc. describing 
         the difficulty and your equipment configuration.  This 
         feedback will assist in the development of future versions 
         of PC-SPEEDY MAILER. 

         Assistance will be given to registered users to correct or
         circumvent the compatibility difficulty.


                                                                   8.

                          THE PC-SPEEDY MAILER DISK

               FILE           FUNCTION
         -----------------------------------------------------------

         MAILER.EXE.............PC-SPEEDY MAILER controlling routine.
         PERMIT3.EXE............Enter, edit, and save the return
                                address, permit stamp, and return
                                mail back addresses.
         MESSAGE3.EXE...........Enter, edit, and save the MAILER
                                message.
         PRINT03.EXE............Prints the message, return address,
                                and permit stamp in memory.  Merges
                                and prints mailing addresses from
                                PC-MAIL address files.
         CONFILE.EXE............Enter serial and user code into the
                                introductory screen.
         COLOR.EXE..............Software switch - switches from
                                monographic system to the color
                                graphics system.
         CONFIG.DRV.............Configuration file read by PC-
                                MAILER.EXE to set the default data
                                address.  Address is currently set
                                for drive B.
         MAILER.PAK.............Screen Library pack.
         CONFILE.PAK............Confile library pack.
         SPEEDSCR.COM...........Resident screen management module.
                                (Software Bottling Company of N.Y.)
         MANUAl.DOC.............Installation documentation.
         REGFORM.DOC............Registration form.
         MAIL.BAT...............PC-SPEEDY MAILER start-up from CGA board.
                                Loads resident screen program and
                                initiates PC-SPEEDY MAILER.
         MAILD.BAT..............PC-SPEEDY MAILER start-up from MGA board,
                                transfers control to CGA board,
                                loads resident screen program, and
                                initiates PC-SPEEDY MAILER.

                                                                   9.

         SHOWDOC.BAT............Displays MANUAL.DOC on screen.
         PRTDOC.BAT.............Prints hard copy of MANUAL.DOC.
         INSTALLR.BAT...........Initiates the registration program
                                and CONFILE.EXE.
         TEST.MSS...............A sample message file which may be
                                recalled by the message routine.
         TEST.PRL...............A sample header file which may be
                                recalled by the header routine.
                .


                          REGISTRATION

         Register your copy of PC-SPEEDY MAILER(c) by filling out 
         the registration form and returning it with your check for 
         $30.00.  This will establish your eligibility for 
         technical assistance by both telephone and mail.  In 
         return you will receive the following: 

             The registration/license number and access code for your
             copy of PC-SPEEDY MAILER.

             Future upgrades of PC-SPEEDY MAILER at a reduced cost.

             Instructions for securing technical support and a
             technical support service number.




                                                                   10.
                      INSTALLATION OF PC-SPEEDY MAILER


         The installation of PC-SPEEDY MAILER is simple.  In fact, 
         it may be operated directly from the master PC-MANUAL disk 
         with no alterations, however, this is not recommended.  
         The following steps are recommended for making your master 
         working disk. 

                    5 1/4" or 3 1/2" DISK DRIVES

             1. Place a DOS system disk in drive A: and an 
                unformatted disk in drive B:.  Enter at the A: 
                prompt the following:  A>format B:/V.  Enter the 
                return key to initiate the format procedure.  
                Follow the system instructions.  When the 
                formatting is complete, a prompt will request the 
                entry of the volume label. Enter MAILER26.  DOS 
                will validate the format and return to the system 
                prompt.  Do not format another disk. 

             2. Remove the disk from drive B: and label it PC-
                SPEEDY MAILER SYSTEM MASTER.  Set it aside for now. 

             3. Place a new blank disk in drive B: and format 
                another disk without the /S command.  Enter at the 
                A: prompt the following:  A>FORMAT B:/V.  Follow 
                the same process used in step #1. 

             4. Remove this disk from drive B: and label it PC-
                SPEEDY MAILER DATA MASTER. 

             5. Place the PC-SPEEDY MAILER SYSTEM MASTER WORKING 
                DISK in drive B:. 



                                                                   11.
             6. Copy COMMAND.COM to the master working disk.  Enter:

                           A>COPY COMMAND.COM B:

             7. Place the master PC-SPEEDY MAILER SYSTEM DISK in 
                drive A: and COPY all files to the SYSTEM working 
                disk in drive B:. Enter: 

                              A>COPY *.* B:

             8. This completes the first stage of the PC-SPEEDY 
                MAILER installation. 

         PC-SPEEDY MAILER may now be operated, but the complete 
         installation cannot be completed until the registration 
         card has been returned to FOTO 64, INC. and your 
         registration/license number and access code have been 
         received.  When completed, the registrant's name and 
         registration number will appear on the introductory 
         screen. 

             9. Complete and return the registration card to FOTO 
                64. If you have not received the access code, go to 
                the start-up procedure. 

         When you receive your registration/license number and the 
         access code, proceed with steps 10 through 13. 

            10. Place the working master PC-SPEEDY MAILER disk in 
                drive A:. 

            11. Enter the following command:  A>INSTALLR and 
                return. 

            12. The PC-SPEEDY MAILER install screen will be 
                displayed. You will be directed to enter a name or 
                message, the registration number, and the access 
                code. 


                                                                   12.

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

            13. Return the master disk to a secure location.  Do 
                not lose the access code as it will be necessary 
                should you need to modify the introductory message. 

                This copy is licensed for use on a SINGLE MACHINE 
                only.  Copies may not be shared with other computer 
                users. 

                DO NOT SHARE THE ACCESS CODE.

                Should the access code be lost, it may be 
                reconstructed by FOTO 64, Inc from the registration 
                number.  Call for help. 


                                                                   13.
                                 HARD DRIVES

         To install PC-SPEEDY MAILER on a hard drive, observe the 
         following steps: 

             14. Place your master PC-SPEEDY MAILER master SYSTEM disk in A:

             15. Change the system default to the drive on which
                 PC-SPEEDY MAILER is to be located.  If drive C:, then enter
                 A>C:

             15. Make a directory called MAILER by entering
                 C>MD MAILER.

             16. Change to the MAILER directory by entering C>CD\MAILER.

             17. Copy the master disk to the directory MAILER.
                 Enter C>COPY A:*.*

             18. Complete and return the registration card enclosed in
                 the PC-SPEEDY MAILER packet.

             19. PC-SPEEDY MAILER will now operate from the hard drive,
                 but the installation procedure is not complete.

         When you receive your registration/license number and the 
         access code, complete the installation procedure by 
         running the configuration program located on your working 
         system disk of PC-SPEEDY MAILER.  Just enter: C>INSTALLR 

         Maintaining the data files in the same directory as the 
         PC-SPEEDY MAILER operation files is not recommended.  The 
         data files work best if placed in their own directory or 
         directories. PC-MAIL, PC-POSTCARD, and PC-SPEEDY MAILER 
         data storage may be filed on the same data ADDRESS.  PC-
         SPEEDY MAILER will recognize all formats and will display 
         appropriate files.  This will reduce the need to exchange 
         data addresses when printing the mailer. 


                                                                14.
         Data directories may be created, erased, and changed by 
         entering HOME from the main PC-SPEEDY MAILER menu. 

                        START-UP OF PC-SPEEDY MAILER

         The program start-up sequence is critical to the proper 
         operation of PC-SPEEDY MAILER.  To simplify this start-up, 
         two batch files have been included on the master disk.  If 
         you are starting the program from a monographic or 
         colorgraphic system, enter at the drive prompt MAIL 
         (C>MAIL).  If you have a dual color/bw system, enter MAILD 
         at the drive prompt (C>MAILD) while in the monographic 
         system.  These start-up sequences must be followed. 

         During start-up, the PC-SPEEDY MAILER screen driver must 
         be loaded before any other program.  This includes 
         residential programs such as SIDEKICK or XTREE.  If you 
         encounter difficulties with program conflicts, try 
         operating PC-SPEEDY MAILER without other residential 
         programs.  If you still have difficulties, contact FOTO 
         64, Inc. 

         FAILURE TO OBSERVE THIS START-UP PROCEDURE WILL RESULT IN 
         AN UNREADABLE SCREEN!! 

         After loading the support resident programs, PC-SPEEDY 
         MAILER will display the introductory screen and the status 
         of the program registration.  The PC-SPEEDY MAILER menu 
         screen will be displayed with the path of the PC-SPEEDY 
         MAILER data drive.  If the configuration file is missing, 
         you will be asked to re-enter the path data and PC-SPEEDY 
         MAILER will create a new file.  If this should happen, it 
         will be necessary for you to re-enter the registration 
         data using the CONFILE program provided on the disk.  To 
         do this you will need the registration data and your 
         access code. 


                                                                15.
                                   TUTORIAL

                        USING PC-SPEEDY MAILER 2.6(c)

         If you are experiencing difficulty using PC-SPEEDY MAILER, 
         perhaps the following information and directions will 
         assist you. 

                         DATA FILE ADDRESSES

         PC-SPEEDY MAILER data files may be located in the same 
         directory as those of PC-MAIL and PC-POSTCARD.  PC-SPEEDY 
         MAILER will recognize the file types and will display only 
         the files requested.  Having all files to be accessed in 
         the same directory reduces the need to change the PC-
         SPEEDY MAILER default data address before entering the 
         printer routine. 

         NOTE:  The default data address may be changed within the 
         program with out changing the configuration driver. 

                     ENTERING THE MAILER MESSAGE

         1. From the main PC-SPEEDY MAILER menu, go to the enter 
         message routine.  Enter the card message and the message 
         input screen will be displayed.  Enter "ALT + H" and 
         acquaint yourself with the input routine edit keys. 

         Enter "ESC" and return to the input screen.  Enter your 
         message exactly the way you want it to appear when 
         printed. 

            REMEMBER, WHAT YOU SEE IS WHAT YOU WILL GET.

         When you have completed your message, you will be asked 
         for approval.  At this time, you may return to the start 
         of the message for further editing by entering "N". 


                                                                16.

         2. If you approve the message, the enter message menu will 
         be displayed.  If the message is to be saved, enter the 
         save file option.  If you wish to recall a previously 
         saved message, it may be done at this time. 

         NOTE: PC-SPEEDY MAILER WILL AUTOMATICALLY TRANSFER THE 
         CURRENT MESSAGE IN MEMORY TO THE PRINT ROUTINE FOR 
         PRINTING. 

         3. Return to the main PC-SPEEDY MAILER menu. 

                     ENTERING THE RETURN ADDRESS AND STAMP

         1. Enter the header routine and the Header menu will be 
         displayed.  If you have previously developed a header, it 
         may be loaded at this time.  If you wish to develop a new 
         header, using the arrow keys, indicate the header 
         development needed and enter return.  The header input 
         screen will be displayed.  As in the message routine, 
         enter "ALT + H" and review the edit keys.  This routine's 
         continuity will be slightly different from the message 
         editing. 

         2. Enter "ESC" and return to the input screen.  Enter the 
         return address desired.  If you are entering a full 
         header, PC-SPEEDY MAILER will go to the stamp input.  
         Enter the desired stamp data at the left edge of the 
         input.  When you have entered all stamp data, PC-SPEEDY 
         MAILER will automatically center each line.  Review the 
         data input.  The header data will be printed as it appears 
         on the screen. 

                   WHAT YOU SEE IS WHAT YOU GET

         If the data is correct, enter "Y" and the header menu will 
         be displayed.  The header may be saved to a disk file at 
         this time. 


                                                                17.
         NOTE:  PC-SPEEDY MAILER WILL AUTOMATICALLY TRANSFER THE 
         CURRENT HEADER IN MEMORY TO THE PRINT ROUTINE FOR 
         PRINTING. 

         3. Return to the main PC-SPEEDY MAILER menu.

                PRINTING AND ADDRESSING THE MAILER.

         1. Be sure that the PC-SPEEDY MAILER default data drive is 
         set to locate the PC-MAIL data files.  If it is not, enter 
         the "HOME" key and do so.  If your PC-SPEEDY MAILER files 
         are not located with the PC-MAIL files, do not save the 
         new configuration when prompted. 

         2. When the print routine is entered, a menu screen will 
         be offering six printing modes.  Enter the printing 
         configuration which meets the user's printing needs.  Once 
         the selection is made, PC-SPEEDY MAILER will display each 
         component to be printed. If merging address files, PC-
         SPEEDY MAILER will request the file name and will display 
         the print sort options for printing. 

         3. For example, if mode #1 is entered, the message in 
         memory will be displayed.  Confirm the message, if 
         correct, and the return address will be displayed.  You 
         may modify or enter a new return address at this time.  
         Any changes made to the return address will also be made 
         to the return address currently in memory.  If correct, 
         enter "1" and the non permit stamp image will be 
         displayed.  If you wish the custom stamp image entered, 
         enter "4" and it will be shown.  If you wish no stamp 
         printed, enter "3."  If you wish to create a new stamp 
         image or message. enter "2".  The new stamp image entered 
         will not replace the one currently in memory. 

         4. If the stamp image is correct, enter "1" and the 
         available PC-MAIL data files will be displayed.  Enter the 
         file name and PC-MAIL will load it into memory and display 
         the print option menu. 

                                                                  18.
         5. Ready the printer with the blank mailer forms.  To 
         check the alignment, enter option "8" on the menu and 
         enter record "1" and number "1".  If the alignment is 
         correct, then enter the option choice for printing. 

         6. When printing is complete, PC-SPEEDY MAILER will return 
         to the main menu. 

                          EXITING PC-SPEEDY MAILER


         ALWAYS EXIT PC-SPEEDY MAILER BY ENTERING THE EXIT COMMAND.

         This assures a proper shut down of the routine and unloads 
         the associated residence program and the screen libraries. 


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

## PCSIG.TXT

{% raw %}
```


                         START UP OF PC-MAILER 2.6S(C)

        READ THE DOCUMENTATION FILE "MANUAL.DOC" LOCATED ON THE  
        SYSTEM DISK.  THIS FILE CONTAINS INFORMATION WHICH WILL 
        BETTER ASSIST YOU IN UNDERSTANDING PC-MAILER, AS WELL AS, 
        SPECIFIC INSTALLATION AND START UP INSTRUCTIONS. 

        PC-MAILER  2.6S MUST BE SET UP IN ACCORDANCE WITH THESE 
        INSTRUCTIONS. 

        THE FILE MANUAL.DOC IS LOCATED ON THE PROGRAM SYSTEM DISK.
        PLACE THAT DISK IN THIS DRIVE AND ENTER THE FOLLOWING:

                A>SHOWDOC - THIS WILL DISPLAY README.DOC ON THE 
                           SCREEN.

                A<PRTDOC  - THIS WILL DIRECT THE PRINTER TO PRINT 
                            A HARD COPY OF README.DOC.

        STRIKE ANY KEY TO EXIT THIS ROUTINE..........

```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                    REGISTRATION FORM - PC MAILer 2.6S (C)
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
                      
      FOTO 64, INC.  SOFTWARE REGISTRATON   PO BOX 2130  SARATOGA, CA  95070
                           PC-MAIL (C) FOTO 64, INC.
          
      THANK YOU FOR YOUR SUPPORT OF PC-MAIL. Your support will further the 
      development of user supported software....    

                                

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1557

     Volume in drive A has no label
     Directory of A:\

    BRUN20   EXE     69454   1-16-87  11:44a
    CONFIG   DRV         7   8-25-89   7:19a
    CONFILE  EXE      5697   9-18-89   4:21p
    CONFILE  PAK      2790   8-26-89  10:41a
    FILE1557 TXT      4886  10-18-89   1:49p
    GO       BAT        38  10-12-89  12:13p
    GO       TXT       540  10-18-89   1:51p
    INSTALLR BAT        57   2-10-89  10:29a
    INTAL    MSG         1   9-25-88   6:58p
    INTAL    MSS         1   9-25-88   6:57p
    INTAL    RPL         1   9-25-88   6:59p
    MAIL     BAT        61   8-31-89   8:38p
    MAILER   EXE     15168   9-02-89   5:46a
    MAILER   PAK     38605   9-18-89   4:08p
    MANUAL   DOC     35439   9-18-89   4:33p
    MANUALS  DOC     35435   9-17-89   7:53a
    MESSAGE3 EXE     16865   8-27-89   5:23p
    PCSIG    TXT       837   8-27-89   4:14p
    PERMIT3  EXE     21760   9-06-89   9:11a
    PRINT03  EXE     23760   9-06-89   9:26a
    PRTDOC   BAT       109   8-25-89  10:20a
    PRTREG   BAT       209   8-22-87   8:04a
    REGFORM  DOC      1576   8-27-89   4:06p
    SHOWDOC  BAT        17   8-25-89  10:19a
    SPEEDSCR COM      5333  10-01-86  12:00p
           25 file(s)     278646 bytes
                           27648 bytes free
