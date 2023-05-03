---
layout: page
title: "PC-SIG Diskette Library (Disk #483)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0483/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0483"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAIL MONSTER MAILING LIST PROGRAM"

    MAIL MONSTER is an extremely flexible mailing label manager for any
    sized application. You can define the categories to fit your lists of
    people and/or organizations.
    
    You can organize your mailing lists and print highly specialized
    selections.  You can add, edit, sort, and print mailing labels in many
    different configurations.  For example, print only those labels that
    need to reach a specific group -- by targeted organization, zip code
    area, etc. Also included is a mailmerge feature to merge-print letters,
    as well as a personal telephone directory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0483.TXT

{% raw %}
```
Disk No:  483                                                           
Disk Title: Mail Monster Mailing List Program                           
PC-SIG Version: S4.6                                                    
                                                                        
Program Title: Mail Monster                                             
Author Version: 3.06                                                    
Author Registration: $15.00.                                            
Special Requirements: 320K RAM and two floppy drives.                   
                                                                        
MAIL MONSTER is an extremely flexible mailing label manager for any     
sized application. You can define the categories to fit your lists of   
people and/or organizations.                                            
                                                                        
You can organize your mailing lists and print highly specialized        
selections.  You can add, edit, sort, and print mailing labels in many  
different configurations.  For example, print only those labels that    
need to reach a specific group -- by targeted organization, zip code    
area, etc. Also included is a mailmerge feature to merge-print letters, 
as well as a personal telephone directory.                              
                                                                        
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
║                   <<<<  Disk #483 Mail Monster  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type:  READ  (press Enter)                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```














                                M A I L   M O N S T E R

                                      Version 3.0



                                  Requires 384 KB RAM







                     Distributed  as  SHAREWARE software.   If you find
                     this software  useful,  you are asked  to register
                     the software  with the author.   Thanks  for  your
                     support.














                                      Peter T. Dyer
                                   138 Kuuhale Street
                                   Kailua,  HI  96734
                                   Phone 808-261-4560

                        (c) Copyrighted 1987, 1988, 1989, 1990
                                  All Rights  Reserved


   

     MAIL MONSTER MANUAL                                    Table of Contents




                                  TABLE OF CONTENTS
                                  *****************

          SECTION                                                      PAGE

              I.  SETUP ON A FLOPPY DISK SYSTEM .......................  1
             II.  SETUP ON A HARD DISK SYSTEM .........................  1
            III.  STARTING MAIL MONSTER ...............................  2
             IV.  CREATING CATEGORIES and CONFIGURING MAIL MONSTER ....  2
              V.  INDEXING THE DATA FILES .............................  3
             VI.  ADDING NAMES TO MAIL MONSTER ........................  3
            VII.  CHANGING ENTRIES IN MAIL MONSTER ....................  4
           VIII.  CHECKING FOR DUPLICATE NAMES ........................  4
             IX.  CREATING MAILING LABELS .............................  5
              X.  DELETING A SINGLE RECORD ............................  6
             XI.  PRINTING A SINGLE RECORD ............................  6
            XII.  PRINTING A TELEPHONE DIRECTORY ......................  6
           XIII.  MAIL MERGE FILE FORMAT ..............................  7
            XIV.  BACKING UP DATA FILES................................  7
             XV.  VIEWING ENTRIES ON SCREEN............................  7
            XVI.  COUNTING CATEGORIES ENTERED..........................  8
           XVII.  CREATING ROLODEX CARDS...............................  9
          XVIII.  CLOSING REMARKS and REGISTRATION.....................  9
     APPENDIX A.  CONVERSION FROM MAIL MONSTER 2.3 AND BELOW........... 10
     APPENDIX B.  TROUBLE SHOOTING .................................... 11
     APPENDIX C.  MAIL MONSTER UTILITY DISK ........................... 12
     APPENDIX D.  MAIL MONSTER AND LASER PRINTING ..................... 13

   

     MAIL MONSTER MANUAL                                               Page 1


                     INSTRUCTIONS FOR USING MAIL MONSTER 3.0

          MAIL MONSTER is designed to be used without much attention to a
     manual.  However, because some people feel a bit more comfortable with
     a manual, which explains how a software product works, this manual has
     been created.  If you feel venturesome, the only sections of the manual
     your might find useful concern SETUP of the MAIL MONSTER software,
     creating CATEGORIES and initializing INDEX files.  If you are a bit
     reluctant to start without reading a manual, it is here for you to read.


     I.   SETUP ON A FLOPPY DISK SYSTEM

          MAIL MONSTER runs best on a hard disk system.  However, if your mail
     list is less than 200 names, you can fit it on the working disk, that
     the SETUP program will create.  When you are nearing your limit MAIL
     MONSTER will warn you by flashing a warning at the top of the MENU screen.

          First, create a WORKING DISK using the DOS format procedure.
     Place DOS in drive A and a blank disk in drive B.  At the A> enter the
     following and press the enter key.

                            A> FORMAT B:   <enter>

          Format another blank disk.  This will become your DATA disk on
     which you will copy the MAIL.DBF file.  This disk will run in drive B.

          Next, remove DOS and place your MAIL MONSTER disk in drive A.
     Copy the files MAIL.ARC, PKXARC.COM, and EXTRACT.BAT to the blank disk in
     drive B.  Switch to drive B.  Enter the command EXTRACT.
                            A> B:         <enter>
                            B> EXTRACT    <enter>

     Finally, copy the program CONFIG.SYS to your MS DOS or PC DOS BOOT
     DISK.  Restart your computer with this new file on your boot disk.
     Place the the disk from drive B into drive A.  Place the data disk
     with MAIL.DBF on it in drive B.  Enter MAIL to start program.

     II.  SETUP ON A HARD DISK SYSTEM

          MAIL MONSTER runs best on a hard disk system.  Setting up MAIL
     MONSTER is quite easy on a hard disk.

          First, create a subdirectory for MAIL MONSTER.  I suggest you
     call it MAIL.  At the C> prompt, enter the following commands to create
     a subdirectory labeled MAIL.
                           C>  CD\
                           C>  MD\MAIL
                           C>  CD\MAIL
     Now, place your MAIL MONSTER disk in drive A.  Copy all the files
     on the A> driive to the C> drive by typing COPY A:*.* C:\MAIL <enter>.
     The files necessary to create a working system of MAIL MONSTER on your
     hard disk will be copied to the MAIL subdirectory.  Run the following
     command.  The program will unarchive your MAIL.EXE file.

                          C>  EXTRACT    <enter>

     Finally, copy the program CONFIG.SYS to your MS DOS or PC DOS Root
     directory.  Restart computer with this new file in your root directory.
   

     MAIL MONSTER MANUAL                                               Page 2


     III. STARTING MAIL MONSTER

          Starting up MAIL MONSTER is very easy.  If you need to use the
     floppy version, place your BOOT DOS DISK in disk drive A and boot your
     computer.  Now place your WORKING DISK in drive A.  Enter MAIL and press
     [ENTER].  For a hard disk system, after booting, change to the MAIL
     subdirectory, enter MAIL, and press [ENTER] key.

           You are first presented with the PTD logo, advising you that the
     software has been distributed as SHAREWARE.  Press the [ENTER] key
     after reading the message.  If you see (Q/A/I), press "I" twice.  Then
     be sure to reconfigure MAIL MONSTER to match your computer setup (i.e,
     be sure that you REBOOT the compter after copying CONFIG.SYS to root
     directory of hard disk or to your PC/MS DOS system boot disk.

           You are now presented with the Main Menu for MAIL MONSTER.  It
     has been designed to be self-explanatory.  The first menu item you
     ought to run, however, is the [C] CREATE CATEGORIES item (see next
     section), which will do just that and also reconfigure MAIL MONSTER.


     IV.  CREATING CATEGORIES AND CONFIGURING MAIL MONSTER

          MAIL MONSTER permits you to categorize the people, groups, or the
     organizations you place in the mailing system.  This helps you to keep
     a variety of names in the mailing list, but only to print those
     particular names you might wish to "target" in a mailing.  You have the
     freedom to define the categories.  Up to twenty-four unique categories
     may be viewed, but in actuality, you may use the entire alphabet and
     the numbers 0-9 as category identifiers for a total of 66 categories.
     Simply keep a sheet with the identifiers tied to the categories defined.

          At the MAIN MENU press the "C" entry.  You will be taken to the
     Create (or edit) categories screen.  Create any categories you may
     need.  You may remove the S = SAMPLE category by just typing over it.
     What you type in the box will appear on the screen when you ADD new
     names to your mailing list, when you edit names, and when you produce
     mailing labels.

          Here are some samples of categories you might create:

                 R = REPUBLICAN               a = ELK MEMBER
                 D = DEMOCRAT                 b = SEARS EMPLOYEE
                 I = INDEPENDENT              # = TOPPER EMPLOYEE
                 S = SENIOR CITIZEN           1 = FACULTY
                 Y = YOUTH GROUP              2 = STAFF

          The format for the categories is important.  The first digit will
     appear in the data file that you create and is used to sort the file by
     category.  A name can be given several category identifiers, if that makes
     sense to you.  The maximum number of categories a name in your mailing
     list can be tagged is 10.  You can add, delete, or edit categories at any
     time.  Just run the [C] feature.
   

     MAIL MONSTER MANUAL                                               Page 3


          Once you have finished with the categories you wish to define, you
     press the [PgDn] key to be taken to the next portion of the setup and
     configuration routine.

          You will be asked to choose a Zip Code entry format allowing numbers
     or both numbers and letters (foreign countries).  You will be asked about
     monitor type (monochrome or color).  If using a monochrome monitor, you
     enter [M].  If using color you enter [C].  For color the text will be a
     yellow shade.  If you prefer white text, enter [M] for color rather than
     [C].  Now press return.

          You must next specify whether you are using MAIL MONSTER as a
     floppy disk system or on a hard disk.  Enter [F] for floppy or [H] for
     hard disk.  Indicate if you have a [1] drive or a [2] drive system.
     Press enter to return to the Main Menu.  Configuration is finished.

     V.  INDEXING THE DATA FILES

          It is often helpful to initialize the index feature of MAIL MONSTER
     at the same time that you first configure the system.  Index files are
     transferred to your working system when you set up the system.
     However, you should also be made aware of the fact that occasionally
     you will need to reindex your data files to be sure MAIL MONSTER will
     work correctly.  Computers have a funny way of ocassionally placing an
     electronic "glitch" in a file.  Running the [I]ndex feature will "reset"
     the index files that MAIL MONSTER uses and remove those "glitches."

     VI. ADDING NAMES TO MAIL MONSTER

           At the Main Menu,choose the Add Names Option [A] and press [Enter].
     You will be presented with the first screen for entering names.  Enter
     only last and first name of the person, group, or organization you want
     to place in the mailing system.  MAIL MONSTER will then check to see if
     the name is already in the system.  This prevents you from inadvertently
     placing the name in the system twice.  If it finds the name in the
     system, it will so advise you.  If not it will take you to the next
     screen.

           You are now asked to specify the category or categories that you
     wish to assign to the name you are entering.  You'll find a list of
     categories at the bottom of the screen.  It is the list you created
     when you configured MAIL MONSTER.  Choose the single letter or digit
     identifying the category and place it in the box.  If you use more than
     one category for a name, BE SURE THAT YOU ENTER THE CATEGORIES
     CONSECUTIVELY.  Blanks between categories will cause you grief when
     sorting and printing labels.  When finished, press the [PgDn] key.

           Finally, you are asked to enter address information and phone
     number information.  Do so and press the [PgDn] key when finished.  You
     next will be asked if you wish to add another record.  If you answer [Y]
     you will be taken back to the screen asking for a name to add.  If you
     answer [N] you will be taken back to the Main Menu.
   

     MAIL MONSTER MANUAL                                               Page 4


           To move back to a field once entered, use the "Up Arrow" on the
     numeric keypad.  To move down a field, use the "Enter" key.

           If you make a mistake, you must use the MODIFY feature to correct
     it, AFTER leaving the ADD feature.

     VII. CHANGING ENTRIES IN MAIL MONSTER

          Changing entries made to MAIL MONSTER is about the same as adding
     entries.  From the Main Menu press [M] to Modify Names.  You will
     be presented with a familiar screen, asking for the name to edit.  If
     MAIL MONSTER does not find the name, it will so inform you, so be sure
     to enter the name exactly as you added it, even if it contains error.
     The MODIFY feature allows you to correct your entry errors.

           If the name you enter is found, you will be presented with another
     familiar screen.  This time you can change a name, categories, address
     data, or phone numbers.  Make your corrections; press the [PgDn] key.

           You will be asked if you to see Previous, Next, or Find another
     name.  Answer [P], [N], or [F] as appropriate.  If you answer [F] you
     will be returned to the name screen.  Enter [EX] to return to Main Menu.

     VIII. CHECKING FOR DUPLICATE NAMES

           Despite your best efforts at keeping duplicate names out of MAIL
     MONSTER, in the passage of time you may find duplicate names do get
     entered.  This is caused by the editing process.  MAIL MONSTER simply
     cannot protect you from creating a duplicate name by editing an old
     name to match another name.  Therefore, if not having duplicate labels
     is important to you, you should run the [D] Duplicates Check feature
     once in a while.

           The feature checks for duplicate NAMES or ADDRESSES, for often
     you will find that people receive duplicate mailings at different
     addresses based on a slight name difference (e.g., you include middle
     initial in one name but not the other, so MAIL MONSTER allowed you to
     add the name).

           After entering [D] you will be asked to check by [N]ame or by
     [A]ddress.  You check by one and then by the other.  MAIL MONSTER will
     find the duplicates, and give you the option of either marking one of
     the names for deletion or letting them both stay in the system.  Just
     follow the instructions on the screen that appear when a duplicate
     record is found.

           MAIL MONSTER keeps a running count of the names it has checked
     and the duplicates it has found, so the process doesn't become too
     boring for you.  If you have a large file, this process takes some time
     to complete.  Therefore, MAIL MONSTER beeps at you each time it finds a
     duplicate.  You can leave the system running, while doing other work,
     only to pay attention to it when you hear it beep at you.
   

     MAIL MONSTER MANUAL                                               Page 5


           Finding and marking duplicate records is only part of the process.
     If you wish to actually remove the names from your data files, you must
     also run the [R]emove feature from the Main Menu.  After you have
     completed the Duplicates feature, you will be returned to the Main
     Menu.  At this point you enter the [R]emove duplicate names feature and
     MAIL MONSTER will physically remove the marked names from the files and
     reindex all of the Index files.  Again, this takes a bit of time.  This
     two step approach to removing names simply affords you some protection.

     IX.  CREATING MAILING LABELS

          MAIL MONSTER was created to enable you to produce mailing labels.
     It does this function well, assuming you have entered the information
     correctly.

          First, you must purchase mailing labels.  It is recommended that
     you purchase standard 3 1/2" by 15/16" ONE-UP gummed labels, which
     work on a tractor feed printer.  You'll find the labels won't slip and
     will print with less problems, if you stick to this label size.

                 BE SURE YOU HAVE FIRST TURNED ON YOUR PRINTER!

          To print mailing labels, you must run the [P] feature.  You will
     be taken to a menu, presenting you with four choices:

          [T] TEST LABELS.  You run this to be sure that your printer will
              print labels within the gummed paper label borders.

          [A] ALL LABELS ALPHABETICALLY.  You run this if you want to print
              all your labels in the system in alphabetical order.

          [Z] ALL LABELS by ZIP CODE.  You run this if you want to print
              all your labels in the system in ZIP CODE order.

          [O] OTHER MENU.  You run this if you want to print labels by
              special categories or special Zip Codes.

          While the first three categories are really self-explanatory,
     the last category will present you with another menu.

          You must enter a response to at least one of the categories you
     will see on the screen.  If you do not, you will not print any labels.

          The first possiblity is to print labels by a zipcode group.  You
     may enter the Zip Code group and leave the rest blank.

          You may also enter categories (up to five are allowed) of names
     that you wish to group and print labels.

          You must then specify whether you wish the labels to be in Zip Code
     order (which may be redundant) or alphabetical.  Press the [Enter] key.

   

     MAIL MONSTER MANUAL                                               Page 6


          You next are presented a menu which asks whether or not you wish the
     "OR CURRENT RESIDENT" line to be printed on the label.  The default is
     to NOT have the line printed, so you must enter [Y] if you want it to
     be printed.  Most users do not, but mass mailers often do.

          Finally, you will be asked whether or not you want to print the
     labels one-up, two-up, or three-up.  Your choice depends on the type of
     gummed labels you have purchased.  One-up and two-up labels will print
     well on the standard narrow carriage printer.  Three-up can be printed
     on a narrow carriage printer only if using an IBM/EPSON compatible dot
     matrix printer.  Press the [Enter] key.  Labels will now be printed.

           IF YOUR LABELS SHOULD JAM, TAP YOUR PRINTER SELECT BUTTON.
           MAIL MONSTER WILL HOLD YOUR LABELS.   WHEN YOU HAVE FIXED
           THE PROBLEM WITH YOUR PRINTER,  HIT THE RESET BUTTON, AND
           MAIL MONSTER WILL CONTINUE WITH PRINTING LABELS.  YOU MAY
           ALSO RERUN LABELS, STARTING AT THE POINT THAT YOU JAMMED.

     X.  DELETING A SINGLE RECORD

           You can delete a name from your mailing list by running the [S]
     feature.  Enter the name exactly as it has been entered into MAIL
     MONSTER.  If the record is in the system, you will be shown the record
     before deleting it.  Follow the instructions on the screen and the
     record will be deleted.  If you are now sure that you want to delete
     the record, run option [R] to remove all records marked for deletion.

     XI.  PRINTING A SINGLE RECORD

           You can print a previously entered label by running the [O]
     feature.  Enter the name exactly as it has been entered into MAIL
     MONSTER.  If the record is in the system, you will be shown the
     record.  You can edit the information before printing the label, or
     you can simply print the label you have identified.  Follow the
     instructions on the screen and the label will be printed as many
     times as you need it to be printed.


     XII.  PRINTING A TELEPHONE DIRECTORY

           You can produce a telephone directory in much the same manner that
     you produce mailing labels.  At the Main Menu press the [T] Telephone.
     You will be presented with a menu with the following choices.

               [A]  Telephone listing of all names in system
               [C]  Telephone listing by categories (choices)
               [S]  Telephone listing by State

               BE SURE YOU HAVE FIRST TURNED ON YOUR PRINTER!

           The [A] choice is obvious and will give you names and home and
     business phone numbers.  Press the [Enter] key and your telephone list
     will be printed.  The other two choices have additional items to fill.
   

     MAIL MONSTER MANUAL                                               Page 7


           The [C] choice will bring up the familar choice screen (see
     printing mailing labels section above).  Simply enter the choice(s) of
     categories that you wish to produce in telephone listing form, and
     press the [Enter] key.  Your telephone list will be printed.

     XIII.  MAIL MERGE FILE FORMAT

            You can create a file of name and address data that can be
     used with word processing programs that have a "mail merge" feature.
     Enter choice [F] and the file will be created.  You will find the
     output file is called NAME.TXT and will be on your default drive.
     The fields are in the following order:

       SALUTE,FIRST_NAME,LAST_NAME,ADDRESS1,ADDRESS2,CITY,STATE,ZIPCODE

            You must follow the instructions in your mail merge program
     in order to use this information.  If you want to view the NAME.TXT
     file, simply enter the DOS command:  TYPE NAME.TXT and press [Enter].

            As with other features of MAIL MONSTER you can also choose to
     create a mail merge file by category, with as many as five categories
     grouped into one NAME.TXT file.  Simply follow the instructions that
     appear on the screen.

     XIV. BACKING UP DATA FILE

             MAIL MONSTER can help you to backup your data file, if you
     are using a hard disk system.  Before using this option, you should
     copy the DOS file BACKUP.COM to the subdirectory into which you have
     placed MAIL MONSTER.  The program uses the DOS BACKUP command.

             To use the Backup Data File feature, enter option [B].  You
     will be asked for information about where you are keeping MAIL MONSTER
     and simply enter the requested information.  The program will then
     compute the number of formatted floppy disks you will need to back up
     the MAIL.DBF file.  It will then ask whether you want to continue.  If
     you do not have enough formatted floppy disks, you should [T]erminate
     the session.  If you have enough disks, press [C] to continue.  The
     program will prompt you to place disks into the target drive you have
     specified.  When all of the MAIL.DBF file has been copied to floppy
     disks, you will be so advised.  You then return to the Main Menu.

             It is a good habit to back up your data file once a week, and
     rotate disks, so that you have three weeks worth of backup disks,
     before starting to reuse a set of backup floppies.

             To RESTORE the MAIL.DBF files to your hard disk, follow the
     instructions in your MS/PC DOS MANUAL for using the RESTORE command.

     XV. VIEWING ENTRIES ON THE SCREEN

             Using a technique called soundex, MAIL MONSTER will search all
     records you have entered and find the LAST names of people or organ-
     izations you have entered into the data base.  To use this feature
     press [V] at the Main Menu.  A short time will pass while the files
   

     MAIL MONSTER MANUAL                                               Page 8


     are reindexed.  When the entry screen appears, enter the name you are
     hoping to find.  It can be upper case, lower case, or any combination.
     MAIL MONSTER will search the LAST_NAME field in the data base and then
     display all names that are like the LAST NAME you entered.  If no names
     are found that come close to what you entered, MAIL MONSTER will report
     that situation.  This feature makes it easier for you to locate a
     person, when you have forgotten how you spelled the name when you first
     entered it.


     XVI.  COUNTING CATEGORIES ENTERED

             Often it is necessary to know how many labels (or organizations)
     you have in your mailing list.  MAIL MONSTER provides you a way to find
     out that information.  Simply enter [G] at the Main Menu.  You will be
     shown a screen that asks you to enter the category code for the type of
     category you wish to count.  Enter the code.  MAIL MONSTER will then
     count the entries having that code and report the number on the screen.
     If you want to know the count of ALL ENTRIES, you enter "!" in the box.
     MAIL MONSTER will then report the total number of entries (labels) in
     the MAIL.DBF data base file.

   

     MAIL MONSTER MANUAL                                               Page 9


     XVII.  CREATING ROLODEX CARDS

             You can use the data entered for creating mailing labels to make
     Rolodex type cards.  Simply enter [X] at the Main Menu. You will be
     shown a familiar screen, asking you to enter the name of the person for
     whom you wish to create a Rolodex card.  Enter the name and follow the
     instructions that appear on the screen.  This features assumes that you
     will be using the pin feed continuous form Rolodex cards that you can
     purchase at most "forms" stores or mail-order houses.  The program uses
     the standard Rolodex form.


     XVIII.  CLOSING REMARKS and REGISTRATION

             MAIL MONSTER is a powerful, yet simple to use mailing system.
     While there are even more sophisticated systems on the market (with a
     price to match), most users of mailing systems will find that MAIL
     MONSTER does all they need to do and does it well.

             MAIL MONSTER is a shareware product.  If you use the program
     you are asked to register as a user, and send a $15 registration fee
     to the author.  Use the address below.  You will be provided with
     the latest copy of MAIL MONSTER, and the author's "thanks" for your
     support of the shareware concept of software distribution.  Add $1.50
     if you wish to receive Mail Monster on a 3-1/2" diskette.

             If you would like a customized version of MAIL MONSTER, send me
     your requirements, and I'll see what I can do.  Most customized versions
     can be done for a fee of twenty-five dollars.  Several owners of MAIL
     MONSTER have requested minor changes, such as color, a new field, or a
     new report.  Enclose a check for $25 and description of your request to:

                                 Peter T. Dyer
                              138 Kuuhale Street
                               Kailua, HI 96734

                              PHONE 808-261-4560

     If I can accomplish your request I will do so and send you a customized
     version of MAIL MONSTER.  If I cannot, I will return your check to you.

     If you are going to try to call me, my number is 808 261-4560.  It is
     best to try and reach me between 6:30 and 7:30 am, Hawaiian Time.  That
     would be 2 hours difference on the West coast, and 5 hours difference on
     the East coast of the United States.
   

     MAIL MONSTER MANUAL                                              Page 10


                                  APPENDIX A

             If you are using a version of MAIL MONSTER numbered 2.3 or
     below, you will find that this new version will not work properly
     with your existing MAIL.DBF data file.  This is due to the fact that
     additional data fields were added to MAIL MONSTER beginning with
     Version 2.4 at the suggestion of several MAIL MONSTER users.

             If you have less that 50 names, you would probably be best
     advised to simply rekey the names into the new MAIL MONSTER format.
     However, if you want to convert your existing MAIL.DBF file to be
     able to use MAIL MONSTER 3.0 features, you have two choices:

             (1)  You may send your MAIL.DBF file on a disk to me and I
                  will convert it to the new file structure for you.
                  Please enclose $20 per disk to cover the costs involved in
                  the data conversion.  Send it to my address listed on
                  previous page.  Include your name, address, and phone.
                  If your data file will not fit on one disk, use the DOS
                  BACKUP COMMAND to place your data file on as many disks as
                  is required.  When I return the disks to you, I will include
                  a routine to put the data file back on your hard disk.
                  If your data file will fit on one disk, use the DOS COPY
                  command to place the MAIL.DBF file on a disk.

             (2)  You can use dBASE III/PLUS to modify the structure of the
                  file to include the fields that are in the version 2.0
                  of MAIL MONSTER but not in your version.  BE SURE YOU
                  MAKE A BACKUP COPY OF YOUR DATA FILE BEFORE DOING THIS
                  MODIFICATION.  To see the structure, run the dBASE III
                  commands as follows:

                  USE MAIL
                  LIST STRU

                  If you want a printed version you can use the following
                  commands:

                  USE MAIL
                  LIST STRU TO PRIN

                  Now use the MODIFY STRUCTURE command to modify the file
                  to reflect the new structure.  You will be adding fields
                  SALUTE (C,4), ID (C,5), and COUNTRY (C,20).

   

     MAIL MONSTER MANUAL                                              Page 11


                                  APPENDIX B


           While MAIL MONSTER is designed to run relatively free of
      "troubles" there are situations which do produce problems and
      "processing error" messages.  Here are hints that you should follow
      before writing or calling the author for help.

           If the message that appears on the top of the screen is something
      like "DOS Error 2 File not found," you probably have not placed the
      MAIL.DBF, .NTX or .LBL files on your data disk.  Be sure these files
      are on the data disk. Then reconfigure MAIL MONSTER to tell the soft-
      ware which drive (A, B, or hard disk) holds MAIL.DBF (i.e., one floppy,
      two floppy, or hard disk system).

           If the message "(Q/A/I)" appears at the top of the screen, press
      "I" twice.  That should take you to the Main Menu.  Press option [I] to
      reindex the data files.  Your problem should not reappear.  Again, be
      sure to check your configuration of MAIL MONSTER (option C) to be
      certain that MAIL MONSTER is looking at the correct disk or hard disk
      to find your index files.

           If the message continues to appear, be sure you have copied the
      CONFIG.SYS file into your root directory or placed in on your DOS BOOT
      DISK.  Then be sure to do a "warm boot" (restart your computer) in
      order to reconfigure your computer to accept the new CONFIG.SYS data.
      The items in your CONFIG.SYS file should be at least FILES=20 and
      BUFFERS=20.  See your DOS manual regarding creating CONFIG.SYS files.

           If MAIL MONSTER will not load into your computer, but runs on
      the computer next door, you probably do not have enough memory in your
      computer.  MAIL MONSTER REQUIRES AT LEAST 384 KB OF MEMORY TO WORK.

           While it is not likely you will ever need to abort MAIL MONSTER,
      you can do so by holding the [ALT] key and pressing "C" at the same
      time.  The (Q/A/I) message will appear in the top right of the screen.
      Press "Q" to Quit the operation.  You will be returned to the DOS
      prompt as soon as the software feels it is "safe" to do so (i.e.,
      no files are to be left open).

   

      MAIL MONSTER MANUAL                                              Page 12


                                  APPENDIX C

                           MAIL MONSTER UTILITY DISK

           As a result of several inquiries from users of MAIL MONSTER,
      I have developed a set of additional utilities to help users carry
      out occasional editing tasks effecting the entire MAIL.DBF data base
      file.  These tasks include the following:

       1.  Removing all names fitting a specific category code.

       2.  Removing a category code from all records having that code.

       3.  Replacing a category code with a different code for all
           records having the original code.

       4.  Removing the "TO:" in the salutation field from all records.
           (This feature has enjoyed limited interested.)

       5.  Emptying the data base of all records in order to start with a
           clean (meaning no records in the MAIL.DBF file) data base.

       6.  Resetting the index files, should the index routine become
           corrupted from within Mail Monster.

       7.  Creating a WordPerfect (4.2 and 5.0) Secondary Merge file from
           the ASCII NAME.TXT file generated by Mail Monster, permitting
           use of Mail Monster with merge printing features of WordPerfect.

       8.  Inserting a SORT CODE for records with no code in the field.  This
           feature insures that your SCAN records choice will properly scan
           records according to the sorted order you desire.

           If these utilities are necessary for your use of Mail Monster, you
      can obtain the program by sending $10 along with your name and address
      to Peter T. Dyer, 138 Kuuhale Street, Kailua, HI  96734.  Specify you
      want the MAIL MONSTER UTILITY DISK.  Add $1.50 if you want a 3-1/2" disk.

   

      MAIL MONSTER MANUAL                                              Page 12


                                  APPENDIX D

                        MAIL MONSTER AND LASER PRINTING

           Beginning with MAIL MONSTER 2.8L the use of the Hewlett-Packard
      LaserJet and Canon Laser Beam printers are supported.  Because of the
      width of the labels, the laser will print the labels in 16.66 pitch,
      a size similar to the condensed size that dot matrix printers produce.
      This size is fine with a laser printer, for it produces a clear and
      very readable print.

           It is recommended that you purchase special laser printer labels
      such as those produced by Avery.  Catalog number 5160 works best with
      the page format that is built in to MAIL MONSTER.  If you need another
      format, you will have to request custom work, which can run more than
      the standard $25 fee (labels on a laser are tricky to align, as the
      alignment is a function of the type of laser printer paper you are
      using).  Stick to the standard and we'll all be happy.

           If other laser printers are used, which do not emulate the HP
      series of laser printers, you may request custom work.  You will need
      to supply the author with the printer codes for page length, top margin,
      lines per page, symbol set, and compressed (subscript) print.  With
      such information, and a little luck, MAIL MONSTER can be modified to
      print labels on the laser printer you use.

   
```
{% endraw %}

## README.TXT

{% raw %}
```

MAIL MONSTER is a straight-forward easy to use mailing label manager. It
permits you to add, edit, sort, and print mailing labels.  You define
the categories that your list of people and/or organizations fits.  The
MAIL MONSTER organizes your mailing list, and prints only those labels
you need to target a specific group, organization, zip code area, or
whatever and whomever you need to reach.

First, make a subdirectory on your hard disk and call it MAIL.  Next,
copy all files on the floppy to your hard disk subdirectory.  Then,
run the EXTRACT.BAT program.  This will extract the large Mail Monster
program file.  Copy CONFIG.SYS file to the root directory of the hard
disk.  (See manual for setting up Mail Monster on two floppy system.)

You print the on-disk MANUAL for MAIL MONSTER by running the simple
batch program on your disk entitled PRINTDOC.BAT.  Be sure your printer
is on.

You ought first to set up your CATEGORIES and configure Mail Monster.
Next, enter individuals, organizations, businesses, and/or agencies.
It is that simple!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0483

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        21   6-23-90   5:54p
    MAIL     ARC    134190   8-10-90   4:46p
    MANUAL   TXT     36081   6-23-90   5:54p
    MM       BAT      2061   6-25-90   7:13p
    PRINTDOC BAT       347   6-23-90   5:54p
    READ     BAT        33   6-23-90   5:54p
    README   TXT      1076   6-23-90   5:54p
    EXTRACT  BAT        17   6-23-90   5:54p
    PKXARC   COM     12242   6-23-90   5:54p
    MAIL     DBF       482   6-23-90   5:54p
    FILE0483 TXT      1851   9-13-90   1:47p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       573   1-01-80   5:37a
           13 file(s)     189012 bytes
                          123904 bytes free
