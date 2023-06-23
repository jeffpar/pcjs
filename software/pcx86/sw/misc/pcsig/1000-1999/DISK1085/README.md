---
layout: page
title: "PC-SIG Diskette Library (Disk #1085)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1085/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1085"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TLC TRUCK DATA SYSTEM"

    Proper management of business vehicle fleets requires good record-
    keeping. This is an area where TLC FOR TRUCKS (TLC) really shines for
    small to medium-sized fleets (999 vehicles or less).
    
    TLC makes a database that allows 19 different fields of data for each
    vehicle. A reporting function prints this data in various formats,
    making cost analysis easier.
    
    TLC is very complete and easy to use. The documentation provided is
    both ample and understandable. Source code is available separately so
    you can customize the program to suit your needs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1085.TXT

{% raw %}
```
Disk No: 1085                                                           
Disk Title: TLC Truck Data System                        
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: TLC Truck Data System                                    
Author Version: 2.1.2                                                   
Author Registration: $25.00                                             
Special Requirements: 512K RAM and a printer.                           
                                                                        
Proper management of business vehicle fleets requires good record-      
keeping.  This is an area where TLC FOR TRUCKS (TLC) really shines for  
small to medium-sized fleets (999 vehicles or less).                    
                                                                        
TLC makes a database that allows 19 different fields of data            
for each vehicle.  A  reporting function prints this                    
data in various formats, making cost analysis easier.                   
                                                                        
TLC is very complete and easy to use.  The documentation provided is    
both ample and understandable.  Source code is available separately so  
you can customize to suit your needs.                                   
                                                                        
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
║             <<<<  Disk No 1085 TLC TRUCK DATA SYSTEM  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
║                                                                         ║
║ To run the program, type: TRUCKS (press enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
                     

                          TLC TRUCK DATA SYSTEM

                  Tender Lovin' Care for your Cars and Trucks

        You should find a DEMO subdirectory that has a few records. 
        Use these files for a quick look at the operation of TLC. 
        Just copy the DEMO files to a records diskette.  Then, copy the
        .NDX index files from the /FILES subdirectory to that records 
        diskette.  Run the TLC TRUCK program; REINDEX the files and they
        are ready to use.  Look at the records for unit number 865 and
        865R. 

        HAVE TROUBLE WITH THE MODIFICATIONS OF OLDER FILES
         
        If your files for older versions do not work with TLC, there is
        a text file UPDATING.TXT included with step-by-step
        instructions for data file changes.
       
        If you are unable to convert your files, as a special 
        service to REGISTERED users of TLC, we will do this conversion 
        for $10.U.S. per diskette to cover shipping and handling costs. 

        J. H. Wilson
        TLC SOFTWARE
        Rt 2, Box 165-D
        Ashville, Alabama 35953-9647

        (205) 594-5711

        February 1989
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


        Date:________________

        To:  TLC SOFTWARE
             Rt 2 Box 165-D
             Ashville, Alabama 35953-9647

        Yes, I want to support the Shareware effort to keep software 
        prices down.  Here is my registration as a user of the TLC TRUCK 
        DATA SYSTEM.  The version I am using is:    2.1.2 
        (The version number is shown on the screen where you designate 
        the drive that contains your records.) 

        Enclosed is $25.00.  Send me the printed booklet and a new copy 
                             of version 2.1.2 with any updates

        Enclosed is $65.00.  Send me Version 3 with all those
                             expanded records and reports and the 
                             new, larger instruction booklet.

        Name: ________________________________________________________

        Title: _______________________________________________________
        
        Company Name _________________________________________________

        Address: _____________________________________________________

        City: _____________________ State/Province: _______

        Zip or mail code_________ Country: ________________
 
        Telephone: (    )____________  Diskette size: 3 1/2___5 1/4___

        Approximate number of vehicles in the fleet: ____________

        Send your check or money order for the $25.00 US funds
        registration fee.  You will be sent a copy of the printed 
        instructions along with a diskette of any bug fixes made for
        version 2.1.2.

        Your payment of $65.00 US funds will get the latest much larger
        version by return mail.  TLC is constantly being improved,
        your support makes the effort worthwhile.

        International payments must be in U.S. Dollars and payable through
        a U.S. bank.  Outside U.S., Canada and U.S. possessions, add $3.50  
        for cost of International Air Mail shipment anywhere.

        James H. Wilson   (Jim)

        (205) 594-5711



```
{% endraw %}

## UPDATING.TXT

{% raw %}
```

        TO UPDATE RECORDS USED IN TLC PRIOR TO VERSION 2.1.1

        Using older records created with TLC will require modifications 
        to the files.  The changes may be made with any program that 
        will allow changes to dBASE III type files...FOXBASE and WAMPUM 
        are just two that will work.  Instructions are for dBASE but 
        the other commands are similar.  For safety, operate from a 
        backup of your older record files, 
        
        STEP 1. 
            Using DOS commands, make a backup of your TLC data 
              files.  Use the backup for these modifications. 

        STEP 2. 
            Place your file backup in drive B:. (NOTE: these 
        instructions are for a diskette in the B: drive but apply also 
        to larger files on other drives...a special subdirectory on your 
        hard disk, drive C:, for example.)  Operating with dBASE, at the 
        "." (DOT PROMPT) issue these commands: 

               SET DEFAULT TO B:     (or C: and SET PATH TO C:\SPECIAL) 
               USE SCHEDULE          (and put you old files in C:\SPECIAL) 
               MODIFY STRUCTURE 
               Change the size of these fields:

                    Change NUMBER   from 4 to 5 Characters
                    Change the five Numeric fields from 6 digits to 7
                    ADD a field named BRAKES of type Date
                    ADD a field named EXHAUST of type Date
               Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm.
        
        STEP 3.
            Type:

               USE DESCRIP
               MODIFY STRUCTURE
               Change the type and size of field:
          
                    Change FINAL  from Character to Numeric
                            and   from 6 Digits to 7
        
               Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm.
      
        STEP 4.
            Type:

               USE REPAIRS
               MODIFY STRUCTURE
               Change the type of field:
          
                    Change MILEAGE  from Character to Numeric
        
               Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm.

                                       PAGE 2.

        STEP 5.
            After you have set up the new TLC system according to the 
        TLC instructions, use the DOS COPY command to copy your newly 
        modified old .DBF files into the new TLC record, thereby 
        replacing the blank files with your newly modified existing TLC 
        records.  Use the HOUSKEEPING menu selections to reindex your 
        files with the new .NDX type indexes.
        
        TO FLEETFAX VEHICLE RECORD SYSTEM USERS

        FLEETFAX was withdrawn from the SHAREWARE in mid 1987 field and
        is no longer supported.  TLC has many improvements and corrects
        a few errors that were discovered in the older program. 

        Although the files used by the two programs are similar, they 
        cannot be interchanged without modifications. If you have just a 
        few vehicles entered in FLEETFAX it may be easiest for you to 
        just start over and re-enter your data in TLC.  The many 
        features of TLC will make it well worth the effort. 

        If you have a larger number of entries, your FLEETFAX data files 
        can be converted to TLC by using any program that will allow 
        modification of dBASE III files.  

        MODIFICATIONS TO FLEETFAX FILES TO USE WITH TLC

        Several changes in the file structure of TLC make FLEETFAX files 
        not directly compatible.  The file names are more descriptive, a 
        few field names are changed for clarity and some field sizes are 
        changed for better data entry.  Changes to the data files can be 
        made with any program that will allow modifications of dBASE III 
        type database files.  These instructions are for dBASE III Plus 
        but will guide you with other programs. 

        STEP 1.
            Using DOS commands, make a backup of your FLEETFAX data 
              files.  Use the backup for these modifications.

        STEP 2.
            Using DOS commands, rename these files:
              from:          to:
               CARDESC.DBF    DESCRIP.DBF
               CARFILE.DBF    REPAIRS.DBF
               CARFUEL.DBF    FUELS.DBF
               PREVENT.DBF    SCHEDULE.DBF
               FILESPOT.DBF   is replaced in TLC with DRIVE.DBF
        
                                   Page 3.

        STEP 3.
            Place your file backup in drive B:. (NOTE: these 
        instructions are for a diskette in the B: drive but apply also 
        to larger files on other drives...a special subdirectory on your 
        hard disk, drive C:, for example.)  Operating with dBASE, at the
        "." (DOT PROMPT) issue these commands:

               SET DEFAULT TO B:     (or C: and SET PATH TO C:\SPECIAL)
               USE REPAIRS           (copy your FLEETFAX records to   )
               MODIFY STRUCTURE      (C:\SPECIAL)
               Place the highlight on the field MAINFILE and type CTRL U 
                 to delete the field. 
               Place the highlight on the field CO_HOURS and type CTRL U 
                 to delete the field.
               Press <ENTER> to confirm
            Then type:   
               MODIFY STRUCTURE
               Change these field names:
                 from:           to: 
                 DISTRICT       DIVIS
                 CO_NUMBER      NUMBER
                 REP_CODE       CODE
                 TOT_COST       TOTAL
                 SHOP           WHO

                Change the type of this field

                  MILEAGE from Character to Numeric

            Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm

        STEP 4.
            USE DESCRIP
            MODIFY STRUCTURE
            Change the size of these fields:
                           from:       to:
               DESCRIPT     25         33
               FR           10         12
               RR           10         12
               COLOR         6          8
               EQPMT        50         59
               LASTMILE      6          7

               Press <ENTER> to confirm
        
                                  Page 4.

            Then type:
            MODIFY STRUCTURE
            Change these field names:
              from:           to: 
               CO_NUMBER      NUMBER
               LASTMILE       FINAL
               DISTRICT       DIVIS
               DESCRIPT       DESCRIP
               TAG            LICENSE
               NEW_DATE       NEW
               AUTH_NUMB      PURCHASE
               DRIVER         OPERATOR
               FUEL_TYPE      FUEL

            Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm
          
        STEP 6.
            USE FUELS
            MODIFY STRUCTURE

              Change these field names:
                 from:        to:
                CO_NUMBER    NUMBER
                FUEL_TYPE    FUELTYPE
                STATION      SUPPLIER

               Change the size of this field:

                 NUMBER from 4 to 5

            Continue to the last field and at the prompt "Should data 
               be COPIED", answer Y.  or press <ENTER> to confirm
        
        STEP 7.
            USE SCHEDULE
            MODIFY STRUCTURE
              Change these field names:
                 from:        to:
                DISTRICT     DIVIS
                CO_NUMBER    NUMBER
                Change all mileage field sizes from 6 to 7
            Continue to the last field and at the prompt "Should data 
                be COPIED", answer Y.  or press <ENTER> to confirm
              Add a field BRAKES of type Date
              Add a field EXHAUSE of type Date 
            
        STEP 8.
            To quit dBASE, type:
            USE
            QUIT

        STEP 9.
            To delete the backup files dBASE created, at the
              DOS prompt, type
                 ERASE B:*.BAK
        
                                   Page 6.

        STEP 10.
            After you have set up the new TLC system according to the 
        TLC instructions, use the DOS COPY command to copy your newly 
        modified old FLEETFAX .DBF files into the new TLC record, thereby 
        replacing the blank files with your newly modified existing 
        FLEETFAX records.  Use the HOUSKEEPING menu selections to 
        reindex your files with the new .NDX type indexes. 
        
        HAVE TROUBLE WITH THE MODIFICATIONS
         
        If your files do not work with TLC, go back to the original 
        diskette and make another backup and try again.  Follow these 
        instructions and the system will work properly.  Still have 
        trouble? Contact your computer dealer or someone locally that 
        knows dBASE. If you are unable to convert your files, as a 
        service to registered users of TLC, we will do this conversion 
        for $10. per diskette to cover shipping and handling costs. 

        J. H. Wilson
        TLC SOFTWARE
        Rt 2, Box 165-D
        Ashville, Alabama 35953-9647

        (205) 594-5711

```
{% endraw %}

## USETLC.TXT

{% raw %}
```
---+---TL1----+-T--2----T----3--T-+----4T---+---T5----+-T--6----T----7-R-T-+--
(USETLC.TXT)


                          TLC TRUCK DATA SYSTEM

                  Tender Lovin' Care for your Cars and Trucks

                              Version 2.1.2
                       February 1989 (Rev. 02/13/90)

        An essential part of good vehicle management is maintenance 
        records.  TLC will help you keep track of your expenses and 
        maintenance schedules.  If you have just received your copy of 
        TLC, this text file will tell you what the program will do and 
        how you set it up on your computer and use it.

        You should find the following files on your TLC diskette:

             AUTOEXEC.BAT    To auto start your floppy TLC program
             CONFIG.SYS      Needed information for your system
             DEMO <DIR>      A subdirectory of sample files
             DINSTALL.BAT    To install TLC on hard drive C:
             DRIVE.DBF       To store default drive and CRT data
             FINSTALL.BAT    To install a floppy system 
             FILES <DIR>     A subdirectory of blank files
             README.TXT      How to get rolling
             TLC.BAT         To start TLC on a hard disc system
             TRUCKS.EXE      The TLC program
             UPDATING.TXT    Update older TLC files
             USETLC.TXT      The instruction text for the program
        
        A subdirectory is included with TLC TRUCK which contains a few
        records of vehicle descriptions, repairs and fuel entries.

        TLC uses six data files and nine indexes to quickly locate
        your records. 

        TLC software, including the documentation and user interface is 
        Copyright (c) 1988, 1989 by James H. Wilson. All Rights Reserved.

        ALTHOUGH WE BELEIVE TLC CAN BE VERY USEFUL TO MANAGERS OF SMALL 
        TO MEDIUM-SIZED FLEETS, IT IS OFFERED WITHOUT ANY WARRANTY OF 
        MERCHANTABILITY, FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR 
        OTHERWISE; ALL WARRANTIES ARE DISCLAIMED.  BY USING THE TLC 
        PRODUCT, YOU AGREE THAT THE AUTHOR ALONG WITH THE PERSON OR FIRM 
        THAT PROVIDED YOU WITH TLC, OR ANY RELATED PARTIES WILL NOT BE 
        LIABLE TO YOU OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO 
        USE) THIS SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER...EVEN IF WE 
        ARE APPRISED OF THE POSSIBILITY OF SUCH DAMAGES OCCURING.

        MAKING A PRINTED COPY OF THESE INSTRUCTIONS

        You can print a copy of these instructions.  The name of this 
        file is USETLC.TXT.  It is a plain ASCII file and can be viewed 
        on your CRT screen with the TYPE command or printed with the 
        PRINT command.  With this file in your drive A: and your printer 
        ready, issue the command "PRINT A:USETLC.TXT" and press <ENTER>.  
        Direct the output to the printer (usually with an <ENTER> ). 

                                         Page 2

                  HOW TO USE THE TLC TRUCK DATA SYSTEM

        TLC is an easy to use, menu driven program built around dBASE-
        like routines that were compiled with the CLIPPER compiler.  
        System requirements for a minimum configuration are: 

             An IBM type PC, XT or compatible with 512K and one floppy 
               diskette drive. 
            
             The TLC program TRUCKS.EXE

             The six data files with the .DBF extension and nine index 
               files with the .NDX extension.

             An EPSON compatible printer to do the printed reports.  A 
               wide carriage printer or one that will print condensed
               print will be needed for the wider reports.

        For maximum storage, features and speed of operation, a 
        recommended system will include: 
           
             640K of memory
         
             A CGA type color monitor (TLC displays are white leters on 
               a blue background with entry items highlighted in yellow.)
               Monochrome settings are also selectable.

             A hard disk (drive C:) or mass storage device such as a 
               Kodak or Bernoulli cartridge storage drive (as drive D:).

        USING THE DEMONSTRATION FILES

        The TLC distribution diskette includes a subdirectory of DEMO
        files.  If you are anxious to see the operation of the program, 
        place the TLC program diskette (use a BACKUP) in drive A:.

        You should find a DEMO subdirectory that has a few records.  You 
        can use these files for a quick look at the operation of TLC. 
        Just copy the DEMO files to a records diskette.  Then, copy the
        .NDX index files from the /FILES subdirectory to that records 
        diskette in drive B:.  Run the TLC TRUCK program; REINDEX the 
        files and they are ready to use. 

        Use the demo files just as described for using the floppy
        diskette system.

             There are these vheicles in the file:

             146, 146R, 482, 482R, 865 and 865R

        From the menu, locate them by number.  Make a note of the names, 
        tag number, and VIN's for them.  Then search for a driver's 
        name, tag number, etc.  Look at some of the repair entries.  
        Print some reports.

        When you are through looking, just remove the DEMO diskette 
        and go through the install routine to set up your working 
        system.

                                         Page 3

        SETTING UP YOUR FLOPPY DISKETTE SYSTEM

        The size of your stored records is limited by the storage device 
        where the records are stored.  You can get about 1500 records on 
        a single floppy diskette.  If you are limited to a floppy system 
        and you have a good many vehicles, you may want to keep your 
        records for each year or each division on separate diskettes. 

        First, using the DOS command DISKCOPY, make a backup copy of 
        the TLC diskette that was supplied to you.  Put the original 
        away in a safe place and set up your system from the backup. 

        Using your regular DOS commands, format a new system diskette
        for your program.   Place a new diskette in drive B: and issue 
        the command:
        
                  "FORMAT B:/S"
        
        Again, using the DOS commands, FORMAT a new diskette that will 
        contain your records.  Although TLC can be operated from a 
        single floppy system, let's assume that you have two floppy 
        drives, drive A: and B:.  Place your TLC backup in drive A: and 
        the newly formatted records diskette in drive B: and, from the A:_ 
        prompt, issue the following command:

             "FINSTALL"    (Don't type the quotes and, following the
                            command, press the <ENTER> or <RETURN> key.)

        Five .DBF files and nine .NDX indixes will be copied to the B: 
        diskette.  This will be your record diskette. 

        When the diskette is completed, follow the on-screen 
        instructions with your TLC backup still in drive A: and the new 
        SYSTEM diskette in drive B:, the files:
        
                AUTOEXEC.BAT    CONFIG.SYS       DRIVE.DBF 
                and TRUCKS.EXE   will be copied.

                This will be your program diskette.

        NOTE:  If you have other things in your CONFIG.SYS or your 
        AUTOEXEC.BAT Files (such as clock routines, for example) you may 
        want to add them.  If you do not understand this, seek the 
        assistance of your computer dealer or someone familiar with your 
        computer.
        
        SETTING UP YOUR SYSTEM ON A HARD DISK SYSTEM

        Both your TLC program and records can be stored on your hard 
        disk.  Operation is MUCH faster and the size of your stored 
        records is limited only by the space available on your hard 
        disk. 

                                         Page 4

        First, make a backup copy of the TLC diskette that was supplied 
        to you.  Put the original away in a safe place and set up your 
        system from the backup.

        Using your regular DOS commands, at your A>_ prompt, 
        issue the command:

              "DINSTALL"   (Again, don't type the quotes and press the
                            <ENTER> or <RETURN> key)

             The six .DBF files, nine .NDX index files and the TLC 
        programs will be copied to a VEHICLES subdirectory on your C: 
        drive.  (Version 3 allows installation on drives C thru J.)

             The CONFIG.SYS and TLC.BAT  files will be copied to the 
        root directory of your hard disk, drive C:.

            NOTE:  Your hard disk may already have a CONFIG.SYS file.  
        If it does, just be sure that it contains the information that 
        is needed for TLC.  It must include these lines:

             "FILES=20"
             "BUFFERS=15"
        
        If you do not understand this, again, seek the assistance of 
        your computer dealer or local "guru". 

        BERNOULLI DRIVE INSTALLATION

        Installation on a Bernoulli is similar to that on a hard drive.  
        After you have run DINSTALL, the files in your VEHICLES 
        subdirectory on drive C should be copied to the Bernoulli as 
        drive D: then, delete those files on drive C:.  Use the 
        commands:

           "COPY C:\VEHICLES\*.DBF D:"
           "COPY C:\VEHICLES\*.NDX D:"
           "DELETE C:\VEHICLES\*.DBF"
           "DELETE C:\VEHICLES\*.NDX"
           "COPY D:DRIVE.DBF C:\VEHICLES"

        From the C:_ prompt, run TLC and specify D as the drive for your 
        records.

        GETTING STARTED - FIRST USE OF YOUR TLC PROGRAM

        Diskette system users only, with your program diskette in drive 
        A: and your record diskette in drive B:...with either system, 
        restart your computer (reboot so it can read the new CONFIG.SYS 
        file.  Hold down the Alt key and the Ctrl key while you press the Del 
        key.)  Your PC will read the CONFIG.SYS information and execute 
        the commands in the AUTOEXEC.BAT file which starts the TLC 
        program.   Hard disk users, at the C>_ prompt,  just type TLC to
        start the program. 

                                         Page 5

        As the program begins, the screen tells you that your files are 
        expected to be in your drive A,B,C OR D:.  You can change the 
        drive designation here.  To use drive B: for your records, type 
        "B" or if it is "B" already, just press <ENTER>.  Again, hard 
        disk users type "C".
        
        There is a selection also for Color or Monochrome screen.  If 
        you change the type screen, you must quit and restart TLC for it 
        to recognise the new setting.
        
        Now you will see the main menu.  This is the "HOME" screen.  
        Most of your work will be done from this screen.  The two other 
        menu screens will return here on completion.  To choose a 
        selection from any menu, enter the first character or, using, 
        the up or down arrow keys, move the cursor to the selection and 
        press <ENTER>.  As the cursor is moved down the menu selections, 
        the selection is highlighted and a description of the function 
        is displayed at the bottom of your screen. 

        Setting up a new system involves:

               Installing the program and files,
               Entering the descriptions of your vehicles
               Telling TLC to generate your initial maintenance files

        From the main menu, choose the selection

            "HOUSKEEPING" to EDIT AND MODIFY YOUR FILES

        Then, you will see a new menu with selections for working with 
        your files.  DO NOT SELECT THE FIRST ONE UNTIL AFTER you have 
        entered the descriptions of your vehicles. 

        MAKING DESCRIPTION ENTRIES FOR YOUR VEHICLES

        The next thing you must do is enter the information about your 
        vehicles.  Before you begin, there are several things you 
        should know about your fleet.  TLC expects your vehicles to have 
        a number from 001 to 999.  You will need a description, the 
        license tag number, VIN number and other things.  You can add it 
        later but it is simple if you have all of the information at 
        hand now.
        
        To begin your entries, from the main menu, choose the selection 
        for HOUSEEEPING to work with your files. 
        
        At the HOUSEKEEPING menu, choose the selection to ADD a NEW UNIT
        description.
        
        You will be presented a screen with blanks to be filled with the 
        information for your vehicle.  Here is the information that is 
        expected to be entered:

                                         Page 6

           Unit No............ A 3 digit number such as 006,101,865 or 938
           Mfgr............... A letter; G=Gen Motors, F=Ford, etc.
           Current Mileage ... Used in several printed reports.
           Division........... A 2 character designator.  If you only 
                       have a single location, enter AA or XX for this.  
           Operator........... Show the driver's name.  Be consistent, 
               use SMITH, J for example.  Last name, comma, space, first 
               initial.  Remember, you will be looking for these names
               later; keep it simple, don't add confusion with periods 
               on some names and not on others, etc.
           Model year......... Enter 86, 87, 88, 89, or whatever
           Description........ A short description, for example
                               1988 CHEV. CELEBRITY 4DR
           Color.............. WHT, BLU, DK RED, etc.
           VIN ............... This is the Vehicle ID number.  On recent 
               vehicles, it is the 17 digit number at the lower edge of
               the windshield in front of the driver. 
           Tires, FR, RR ..... Enter the tire size.  If the rear are the
               same as the front, just enter "SAME" at the RR position.
           License tag ....... Enter the tag number.  Don't put any dashes,
               spaces or commas in the number, just run it all together
               like "65A29355", for example. 

           New Date .......... Is for when you acquired the vehicle.  Dates
               are entered as six digits.  For July 4, 1986, you enter
               "070486".  The program will handle the "/'s" and move to the
               next blank. 
           Dealer ............ Is the selling dealer's name.
           P.O.Number......... The purchase order number if you need it.
           Cost .............. This is a handy place to keep this data
           Class ............. For trucks, this is 1,2,3,6,7, etc for 
               the classes (A Chev. C7DO42 or C70 is a class 7, for example)
               For cars, you may want your own designation for the cars 
               you use.  Perhaps S for sales, E for executives, or 
               whatever is useful for you.
           GVW .............. Gross Vehicle Weight Rating; this usually
               only applies to trucks.
           Type of Fuel ..... Enter a single letter, G for gasoline, D 
               for diesel, P for propane, etc.
           Eqpmt: ........... List the equipment.  Keep it short.  For 
               example "V8,5SP,PS,PB,AC,CRU,TILT,PWIND,FM,CASS" should 
               be pretty clear.

        After the last entry, you may add other units with the same 
        sequence of selections.  Continue until you have added all of 
        your vehicles.  Don't be concerned if you do not have all of the 
        information now.  It can be added later with just a little 
        trouble. 

        Now, when all of your descriptions are entered, from the main 
        menu, select HOUSEKEEPING again and at that menu, choose the 
        FIRST item; then (C)ontinue to generate your initial MAINTENANCE 
        SCHEDULE files for the vehicles you entered into your record.  
        At the DOS prompt, you may erase the file TEMP.DBF that was used 
        in generating your preventive maintenance schedule files. 

                                         Page 7

        Your system is now ready for you to use in keeping the details 
        for your fleet.
        
        TO END THE PROGRAM

        From the main menu, choose the QUIT selection.  You will be
        asked it you are sure; select "Y" if you really want to quit
        ...an "N" will take you back to the main menu without having
        to restart TLC. 

        When you get back to the DOS prompt, A>_ type DIR B: and look at 
        the directory entries on your records diskette.  You should see
         
                      five   .DBF files and  (C:\vehicles - six)
                      Nine   .NDX indexes.
        
        Hard drive users at the C:\ prompt, type:
        
                      DIR C:\VEHICLES 
        
        These files and indexes are compatible with programs that will
        read dBASE III files.
        
        ADDING REPAIR INFORMATION

        The ADD repairs selection on the main menu brings up a repair
        information screen.  To enter the information, just fill in the
        blanks.  Press enter after an entry to move to the next field.  
        An up arrow key will move you to most previous ACTIVE fields if 
        you need to make a correction.  Control U (hold down the Ctrl 
        key while you press the U key) will move the cursor to the last 
        field of the current record.  PgDn will take you to the end of 
        the present entry screen.  This is true throughout the TLC 
        program. 

        Your first entry is for the repair code.  A selection list will 
        appear on the screen.  Although these codes are not actually 
        used by TLC, they may be extremely useful later.  If, for 
        example, you need all of the transmission repairs (TR) for say, 
        1988, this information can be collected from your file with 
        database programs that handle dBASE III type records and 
        indexes.  Entering the codes as the work is recorded assures 
        that such reports could be made from your files if needed.

        Next, you add the cost of parts for the repair followed by the 
        labor cost.  TLC will add these entries and place the total in
        the field for the total cost.  If costs are zero, just press the 
        <ENTER> key.

        The mileage entry can be up to 999999.  You don't need to enter 
        a comma and do not enter tenths of miles. 

                                         Page 8

        At the "Work done:" field, make the description of the work 
        short and descriptive.  When you display the repair history 
        later on the screen or on a printed report, the short, direct 
        descriptions will be a blessing.  Here are a few suggestions for 
        typical repairs:

           CHG OIL AND FILT
           CHASSIS LUBE
           OVERHAUL TRANSM
           REPL BRK PADS
           4 P195/75R14 AMERIWAY XT TIRES
           REPR ALTERNATOR

        GETTING MAINTENANCE HISTORY ON THE CRT

        The SHOW repair HISTORY selection presents you with a request for
        a vehicle number.  TLC will present you with the repairs from
        your record for that vehicle number.  If there are more than will
        fit on the CRT screen, you will see about 15 entries and the
        scrolling of the entries will stop.  Press a key to get the next
        screenfull.

        SEARCHES FOR A VEHICLE DESCRIPTION

        The third through sixth selections are for finding a vehicle by its 
        assigned number, license number, operator's name or the VIN number.  
        When doing a search, you must enter the search basis EXACTLY as 
        it appears in your vehicle description record.  TLC will quickly
        find the description from any of these selections.

        ADDING FUEL INFORMATION

        The FUEL DATA selection is for entering information about fuel
        added to a vehicle.  When entering fuel data, you may enter any 
        two of the items, Gallons, Price or Total.  TLC will calculate 
        the third one.  If you enter all three, however, TLC will accept 
        your numbers...even if they don't add up.  A printed report may 
        be produced that uses these entries.  The report will show each 
        entry and calculate MPG for that fillup.  At the end of the 
        report, there will be a summary of fuel used, cost, average MPG 
        and average fuel cost per mile.  These figures can only be 
        accurate if ALL of the fuel is entered for a vehicle.  Accurate 
        individual consecutive entries will accurately show the MPG 
        between fillups. 

        OTHER MENUS

        The selections for PRINT REPORTS and HOUSEKEEPING will take you
        to other menus, one for creating several printed documents and
        doing several housekeeping chores on your files.

                                         Page 9

        REVISE YOUR PREVENTIVE MAINTENANCE SCHEDULES

        This is the final selection on the menu (other than QUIT).  You
        will be presented a screen showing the present schedule for the
        vehicle you specify.  These schedules are based on mileage or 
        date. Since there is no provision for entering daily or weekly 
        mileage into the maintenance records, these schedules are 
        updated manually.  

        Updates should be made when the routine work is done.  The 
        record includes changes of oil, oil filter, transmission oil and 
        filter, chassis lube and coolant replacement.  These are the 
        regular, on-going things that are needed...usually on a mileage 
        basis.  When you change oil on an vehicle, you simply add the 
        oil change interval to the mileage at the time of the change.  
        Entries are available for brake and exhaust system inspections.  
        These are particularly useful for vehicles used in such duty as 
        police and taxi service.  Suggested intervals are shown.  You 
        can, or course, use any schedule that fits your need.  If the 
        brake and exhaust inspections are not to be used, leave the date 
        field blank for that vehicle (fill it with spacees[spacebar]).
       
        This schedule will be included in your printed report for this 
        vehicle's maintenance work.  You may also use this selection to 
        view the schedule for a vehicle on the CRT at any time. 

        ENDING THE PROGRAM

        Choose QUIT to end TLC and return your computer to the regular
        DOS prompt.  Before the program exits, you will be asked to
        confirm that you do, indeed, want to quit.  An "N" will 
        return you to the main menu without having to restart TLC.  To 
        restart, see GETTING STARTED.

        THE PRINTED REPORTS

        There are several useful printed reports that you may prepare
        from this alternate menu.

        The first selection provides a wide-paper report for the selected 
        vehicle.  It shows the vehicle description, followed by a 
        detailed listing of the repair records and ends with a listing 
        of the mileages when regular maintenance work is due.  It is 
        designed for a 15 inch printer using 10 characters per inch.  
        The reports can also be printed on some printers that will 
        accept 12 inch wide paper if you print in condensed print of 12 
        or 15 characters per inch. (135 character lines)

        When you run the printed report routines for REPAIR HISTORY or 
        FUEL USE, you will be prompted to indicate whether you want a 
        (F)ull report or a short report based on a beginning (M)ileage 
        or (D)ate.  The full report prints all of the information in 
        your file for a particular vehicle.  Either short choice will 
        prompt you for the mileage or date where you want the report to 

                                         Page 10

        begin.  Just type in your selections.  The report will show only 
        the repair or fuel information for the following period.  It 
        includes cost figures for the shorter period.  The short reports 
        avoid printing a long report when you only want to review the 
        record for a vehicle for the last two or three thousand miles; 
        of for the last month or quarter.

        The next one prints your fuel report and is also designed for a 
        15 inch wide printer but may be printed on regular letter-size 
        paper (9 1/2" fan-fold) if printed at 15 characters per inch.

        The third selection prints a handy list of your vehicles and
        drivers.  If you have several divisions and use the two character 
        designator for the division, the report will be for vehicles in 
        that division.  If you have only one and use AA for all of them, 
        your report will include all of your vehicles that are in the 
        file.

        The fourth selection produces a list of vehicles suitable for a
        sale of your used vehicles.  Before you sell a vehicle, you must
        edit the description file for that vehicle to enter it's ending 
        mileage.  Do that BEFORE you produce the sale listing.  You will 
        be presented with several options, generally, you just follow 
        the screen prompts.  The ready-to-mail report is printed on
        regular 9 1/2 x 11 or 9 1/2 x 14 paper at 10 characters per inch.

        You can print the listing directly from keyboard entries.  For a 
        short list, this works very well but if you make a mistake and 
        enter the wrong vehicle number, you have to begin again.  The 
        best way is to generate a file list of the vehicles you want to 
        sell and let the computer produce the report from that file. 

        The fifth selection produces a BILL OF SALE.  Notice that all 
        of the names, addresses, etc will be printed in upper case.  
        Only the "date of the sale" is case sensitive.  Type this in to 
        match the text of the bill....June 15, 1988...for example.

        Check this out with your attorney.  It has been used in some 
        locations. Whether it is adequate for your operation must be 
        determined by you.  It is included for whatever good it may be 
        in your own circumstance.   No assurance is made for the 
        legality of it but we do feel that it includes the necessary 
        information. 
        
        The sixth selection will produce a listing of the maintenance 
        schedule for vehicles by division.  It is a handy way for your
        fleet supervisor to review the schedule particularly when the
        vehicle odometer readings are at hand....say when monthly mileage 
        reports are made for personal use or whatever.

        Finally, selection seven prints an EXCEPTION REPORT for vehicles 
        by district.  I will list those units that are overdue for the 
        regularly scheduled work.  For this to work, you must have valid 
        entries in the maintenence schedule and you must update the file 
        with the vehicles's current mileage.  (Don't include a comma in 
        the mileage entry...just run it together [27000 not 27,000]). 
        Those units that are not overdue are not included in the report. 

                                         Page 11

        MAIN MENU HOUSEKEEPING SELECTION - WORKING WITH YOUR FILES

        The operations that you select from this menu are rather 
        sensitive.  An inexperienced operator can cause damage to your 
        files with these utilities.  Be careful.  Caution your operator 
        to be sure of the operation before using these selections.

        The first selection was used when you initially set up 
        your files.  Unless you need to start new or additional sets of 
        records, you probably will not need the selection after you 
        initially start using TLC.  The purpose is described above in 
        getting started. 

        The next three selections will rework the indexes (or indices, 
        for you purists) for your files.  Sometimes, indexes can become 
        corrupted.  This can happen in a power failure or  when you use 
        dBASE to delete a record or PACK your files.  When you look for 
        a description for a vehicle, say number 155, and you know it is 
        in the file but it is not found, the probable cause is a bad 
        index file. The second selection will rework all of the indexes 
        that are needed for the search commands on your main menu.  You 
        can use these selections any time....there is no danger to your 
        files and it only takes a short time (depends on how many 
        vehicles you have.  500 will take a couple of minutes on a hard 
        disk XT computer running at 8 MHz.) 

        The EDIT selection allows you to modify a description record.
        Use this to change a license tag number for a new tag or change
        the operator's name if the vehicle is reassigned.  You can also 
        correct errors in entries you have already made.  The index 
        files are automatically updated for any changes you make. 

        The ADD selection was used to initially enter the information for 
        your vehicles into the TLC records.  It is also used when you 
        make a new addition to your existing fleet.  It is NOT used when 
        you get a replacement for an existing vehicle.

        The next selection is used for replacement vehicles.  For this
        to work for you, there are several assumptions made about your
        fleet.

           Your vehicles are numbered from 001 thru 999
           A replacement vehicle will carry the same number as the
                vehicle it replaces but with an "R" added at the end of 
                the number.

           For example, let's say you have a vehicle number 500; a 
           replacement has been purchased for it.  The new replacement
           will be number 500 and the old 500 is now to be retired and
           later will be sold.  For now, it will be renumbered to 500R
           to indicate its new retired status.  In TLC, 500R is a
           completely different number from 500.

                                         Page 12

        The Change Status selection will present you with selections
        that will make the needed changes in your description file and
        bring up the screen for entry of the information for the new
        vehicle.

        The Purge repairs selection does a similar operation on your
        repair records.  It deletes any repairs for an OLD 500R;
        changes your now retired 500 records to 500R; and makes way
        for your forthcoming entries for repairs to the newly
        purchased 500.

        When using the two previous selections, you will be asked to
        choose whether you want to "(P)ack your file".  Packing 
        actually removes any deleted records from your file. There will 
        be no harm if you pack your file after each retirement of a 
        vecicle.  Time can be saved, however, when you have a number of 
        vehicles to retire at the same time if you select the (P)ack 
        option after you process the last one in the series...packing 
        the file for all of them at the same time. 

        The Begin Maintenance Schedule selection is used to add a
        vehicle to your maintenance schedule file.  When you set up
        your original records, you used the first HOUSKEEPING  selection 
        after you entered all of your descriptions of your vehicles.  
        That selection used the information you entered to generate the 
        files for your maintenance schedules.  If you use that selection 
        again, it will indeed generate a file with all of your vehicles 
        included but the schedules will not show the schedule updates 
        you have made.  When you add an ADDITIONAL vehicle to your 
        fleet, use this selection to ADD THAT VEHICLE NUMBER to your 
        EXISTING file. 

        The Files to Division selection will write a file to a diskette
        in drive B: for your other locations.  If you used the Division
        entry in your description and repair files to designate your
        other locations, this routine will copy the records for a 
        specified division to a file named COPYOUT.DBF in drive B:  That 
        file can be used to set up another TLC system at that location. 

        The Join selection, working in conjunction with the previous 
        selection, will handle the combining of repair records from
        those other locations into your central record system

        PROGRAM HUNG IN A LOOP

        You can get most PC's and compatibles can get out of a hang-up 
        by pressing ALT-C or Alt-Ctrl-C.  Hold down the Alt key and the 
        Ctrl key while you press the "C" key. 

        DOS ERROR - OPEN ERROR - INDEX FILES NOT FOUND

        You must have your database and index files in the correct drive 
        and subdirectory.  Be sure your records are in the proper place. 
        Do not rename the subdirectory.  TLC expects it to be VEHICLES.

                                         Page 13

        PROBLEMS FINDING RECORDS

        Be sure you use the correct numbers.  Do not confuse zero and the 
        letter O.  Also watch for interchange of a one "1" with lower case
        "l" (that's an L) or upper case "I".

        BACKING UP YOUR FILES

        Back up copies of your data records are good insurance.  You 
        will invest a considerable amount of time in generating these 
        useful records.  Accidents and equipment failures do happen.  I 
        cannot stress too strongly the need for frequent backups of these 
        data files.
        
        If you operate with your data records on diskettes, I suggest 
        that you operate with three copies.  This is much safer than 
        just two, the original and a backup.  When you first get your 
        data record diskette in service, make two backup copies of it.  
        Label them TLC DATA RECORDS 1, 2 AND 3.
        
        Begin using diskette #1 with TLC and when you have entered records 
        for a while, use your DOS diskcopy command and copy diskette 1 
        to diskette 2.

        Now use diskette 2 to continue entering your data.  Again, after 
        a while, backup #2 to #3 and use #3 for entries.  Later, backup 
        #3 to #1 etc.

        If you have trouble with a diskette, you can go back to the 
        previous copy and only lose the data you entered since you made 
        the backup.  You will find the three copy procedure is MANY 
        times safer that working with only two. 

        If your data is stored on your hard disc you should seriously 
        consider the use of a good backup program.  PC-Tools Plus by 
        Central Point Software is only one with a good hard disc backup 
        program that seems to work with any system.

        ADDING ENTRIES WITHOUT VEHICLE NUMBERS

        Entries for repairs and fuel demend upon a valid vehicle number.  
        If you fail to enter the vehicle number, the record will not be 
        entered and you will be prompted to redo the entry with a valid 
        vehicle number.  The entry of a three digit number is mandatory.  
        If a vehicle number is 22, for example, enter it as 022 (that's 
        zero two two, not oh two two)  Always use the correct number for 
        any entry, inquiry or printout.

        EDITING YOUR RECORDS

        Changes in vehicle dexcriptions and maintenance schedules are 
        made in the EDIT and REVISE SCHEDULES selections on the menus.  
        Changes in repair and fuel entries can not be made within TLC 
        TRUCK.  This is by design to maintain the security of the 
        records.  These files can be changed with any program that will 
        edit dBASE III, or IV type files. (dBASE, Foxbase and Wampum 
        just to name a few.)  We also offer TLC TOOLSET as an easy to 
        use utility for editing, deleting and sorting your maintenance 
        record files  It is $25.00 U.S. funds direct from TLC SOFTWARE.

                                         Page 14

        UPDATING TLC FILES EARLIER THAN VERSION 2.1.0

        TLC now uses a DRIVE.DBF and an index file SCHEDIV.NDX that were 
        not used in earlier versions.  Fields have been changed in 
        FUELS.DBF, SCHEDULE.DBF and DESCRIP.DBF. 

        Instructions for modifying older TLC files are included in a 
        file "UPDATING.TXT", also included on your TLC diskette.
        
        
        ****************************************************************

        TLC TRUCK DATA SYSTEM is copyright (c) 1988, 1989 by:

                         James H. Wilson

                         TLC SOFTWARE
                         Route 2 Box 165-D
                         Ashville, Alabama 35953-9647

                         Telephone (205) 594-5711

        If, after evaluation of TLC, you continue to use the program, 
        please send your name and address along with a user registration 
        fee of $25.00. for each application of TLC to the author at the 
        above address.  Be sure to state the version of TLC you are 
        using.   TLC is constantly being improved and its features 
        expanded.  Your registering does several things...

                   It compensates me for the time and expense of
                      bringing you TLC and...
        
                   I will send you the printed instruction booklet
                      along with a new diskette including any 
                      update to version 2.1.2

                   Your name is added to the registration list of
                       supported users.

                   It assures they you are kept aprised of new updates 
                      and features.    
        
        This version 2.1.2 was distributed as a commercial product 
        advertised in several national magazines.  It is now distributed 
        as SHAREWARE for users who may want to try it.  If it works for 
        you now, you may be interested in the latest commercial version.  
        It offers a number of new features not included in version 2.1.2 
        
           Printed instruction booklet with new features

           Short repair and fuel reports with a beginning AND ENDING 
             date.  Good for quarterly reports.

                                         Page 15

           Expanded descriptions for vehicles such as heavy trucks with 
             multiple axles, more equipment.
        
           Reports mileage traveled by state for interstate haulers
         
           Fuel tax decal and license tag expirations

           Parts room inventory control

           Additional user defined scheduled maintenance operations

           Vehicle numbers enlarged to six digits

           Larger cost fields for more costly vehicles and repairs

           Hourly labor rate for in-house shop calculation

           Registration fee for the latest version (as of Nov., 1989)
           is $65.00 US Funds.  Call for later revision information.

           Please indicate if you want 3 1/2" 720K diskette...
           otherwise shipped on 5 1/4 by FIRST CLASS MAIL. 
        
           Shipments outside U.S., Canada or U.S. possessions add
           $3.45 U.S. for International Air Mail.

        We would be most interested in knowing approximately how many 
        vehicles are in your record system.  For fleet users with 
        multiple locations within the same company, please register each 
        location.  For a large number of locations in the same company, 
        call for special fee structure.  For registered users, I will 
        send you notification of major updates and try to help you with 
        any problems or questions you have. 

        We are very interested in your comments and suggestions for 
        corrections or improvements to TLC.

        You are hereby granted permission to freely copy and distribute 
        the TLC TRUCK version 2.1.2 program diskette to anyone who is 
        interested provided the program is distributed in unmodified 
        form and is complete with this text file.  You may not sell TLC 
        but clubs, user groups and commercial SHAREWARE distributors  
        may charge a nominal fee (not to exceed $9.00) to cover 
        distribution cost. 
        
                   SUPPORT THE FREEWARE/SHAREWARE CONCEPT

        For TLC users with special needs, the program and files can be 
        customised for your use.  Please contact us for information and 
        the charges for this work.




                        *****************************
        
                               INDEX

        AUTOEXEC.BAT  . . . . . . . . . . . . . . . . .  1, 3
        Backups . . . . . . . . . . . . . . . . . .  3, 4, 13

        CONFIG.SYS  . . . . . . . . . . . . . . . . . . . . 4

        Description entries . . . . . . . . . . . . . . . . 5
        DOS ERROR - File not found  . . . . . . . . . . .  11 
        Edit descriptions . . . . . . . . . . . . . .  11, 13
        End the program . . . . . . . . . . . . . . . .  7, 9
        Equipment needed  . . . . . . . . . . . . . . . . . 2
        Exception report (overdue maintenance)  . . . . .  10

        File houskeeping  . . . . . . . . . . . . . . . .  11
        Files included  . . . . . . . . . . . . . . . . . . 1
        First use . . . . . . . . . . . . . . . . . . . . . 4
        Floppy disc system  . . . . . . . . . . . . . . . . 3
        Fuel records  . . . . . . . . . . . . . . . . . . . 8

        Hard disc systems . . . . . . . . . . . . . . . . . 3
        How to startup TLC  . . . . . . . . . . . . . . . . 3
        Hung in a loop  . . . . . . . . . . . . . . . . .  11
         
        Index . . . . . . . . . . . . . . . . . . . . . .  16
        
        Maintenance history . . . . . . . . . . . . . .  8, 9
        Maintenance review report . . . . . . . . . . . . . 9
        Maintenance overdue report  . . . . . . . . . . .  10
        Menu selections . . . . . . . . . . . . . . . . . . 5
        Mileage updating (in exception reporting) . . . .  10
        
        Other locations . . . . . . . . . . . . . . . . .  11

        Preventive maintenance schedules  . . . . . 9, 11, 12
        Printed copy of instructions  . . . . . . . . . . . 1
        Printed reports . . . . . . . . . . . . . . . . . . 9

        Registration  . . . . . . . . . . . . . . . . . .  14
        Reindexing  . . . . . . . . . . . . . . . . . . .  11
        Repairs . . . . . . . . . . . . . . . . . . . . . . 7
        Replacement vehicles  . . . . . . . . . . . . . .  11

        Searches  . . . . . . . . . . . . . . . . . . . . . 8

        Warranty  . . . . . . . . . . . . . . . . . . . . . 1



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1085

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT         6   3-25-88   9:53a
    CONFIG   SYS        20   3-25-88   9:52a
    DINSTALL BAT       551  11-20-88  10:38a
    DRIVE    DBF       101   2-19-89   6:39p
    README   TXT      1223   3-13-90   5:54p
    FINSTALL BAT       605  11-20-88  10:37a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   3-13-90   5:48p
    FILE1085 TXT      1910   3-13-90   6:24p
    REGISTER DOC      2083  12-04-89   7:36p
    TLC      BAT        29   3-25-88   9:54a
    TRUCKS   EXE    208768   2-19-89  12:19p
    UPDATING TXT      9831  10-23-88   5:55p
    USETLC   TXT     44362   2-13-90  10:00a
    DEMO         <DIR>    
    FILES        <DIR>    
           16 file(s)     270067 bytes

     Directory of A:\DEMO

    .            <DIR>    
    ..           <DIR>    
    BIDLIST  DBF        90   3-26-88  12:59p
    DESCRIP  DBF      2018   2-19-89   6:41p
    FUELS    DBF     16124   7-12-88   7:29a
    REPAIRS  DBF     27469   8-13-88   7:42p
    SCHEDULE DBF       640   8-14-88   2:49p
            7 file(s)      46341 bytes

     Directory of A:\FILES

    .            <DIR>    
    ..           <DIR>    
    BIDLIST  DBF        90   3-26-88  12:59p
    CREW     NDX      1024   8-14-88   4:50p
    DESCRIP  DBF      1024   8-11-88   6:28p
    FUELNO   NDX      1024   8-14-88   4:50p
    FUELS    DBF       512   8-11-88   6:27p
    LICENSE  NDX      1024   8-14-88   4:50p
    NUMBER   NDX      1024   8-14-88   4:50p
    OPERATOR NDX      1024   8-14-88   4:50p
    REPAIRS  DBF       512   8-11-88   6:28p
    REPAIRS  NDX      1024   8-14-88   4:50p
    SCHEDIV  NDX      1024   8-14-88   4:50p
    SCHEDULE DBF       322   8-14-88   4:45p
    SCHEDULE NDX      1024   8-14-88   4:50p
    VIN      NDX      1024   8-14-88   4:50p
           16 file(s)      11676 bytes

    Total files listed:
           39 file(s)     328084 bytes
                           18432 bytes free
