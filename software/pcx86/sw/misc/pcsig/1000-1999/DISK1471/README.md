---
layout: page
title: "PC-SIG Diskette Library (Disk #1471)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1471/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1471"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POP TRAIN"

    POP TRAIN is a trainable ram-resident help system able to display help
    screens depending on the page and field location of the cursor.  Screen
    capturing enables later display for further help system development,
    briefings, etc.  POP TRAIN is useful in employee training, telephone
    sales, general computer education, or other situations where a
    personalized help screen is needed.
    
    POP TRAIN is especially useful when screens from mainframe programs can
    be downloaded to PC's.  The problem screens that baffle many newcomers
    can be captured to disk.  POP TRAIN will let you place hidden
    explanatory help messages in each area of difficulty.  The bewildered
    beginner touches a hot key and the explanation appears at the cursor.
    Touch any other key and the message disappears.
    
    The system is also invaluable when an older application is updated or
    expanded.  Update the help system at the same time and many puzzled
    phone calls will never be made.
    
    A PC-based, customizable, pop-up help and training system.  Perfect for
    new and updated applications for PCs and mainframes.  Training for
    novices.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1471.TXT

{% raw %}
```
Disk No: 1471
Program Title:  POP TRAIN  version 1.2
PC-SIG version 1

POP TRAIN is a HELP system you can customize to train new users to your
applications.  This RAM-resident program lets you put HELP messages
exactly where needed, available at the touch of a hot key.

POP TRAIN is especially useful when screens from main frame programs can
be downloaded to PC's.  The problem screens that baffle many newcomers
can be captured to disk.  POP TRAIN will let you place hidden
explanatory HELP messages in each area of difficulty.  The bewildered
beginner touches a hot key.  The explanation appears at the cursor.
Touch any other key and the message disappears.

The system is also invaluable when an older application is updated or
expanded.  Update the HELP system at the same time and many puzzled
phone calls will never be made.

A PC-based, customizable, pop-up HELP and training system.  Perfect for
new and updated applications for PCs and main frames.  Training for
novices.

Synopsis:  A PC-based, customizable, pop-up HELP and training system. Perfect
for new and updated applications for PCs and main frames. Training for novices.

Usage:  Educational - Computer application training aid.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $49.95 - After 30-day free trial period.

File Descriptions:

DEMO     BAT  Batch file to start demo of program.
DEMO     H00  Demo file.
DEMO1111 H01  Demo file.
DEMO1111 H02  Demo file.
DEMO1111 SCR  Demo file.
DEMO2--- H01  Demo file.
DEMO2--- H02  Demo file.
DEMO2--- H03  Demo file.
DEMO2--- H04  Demo file.
DEMO2--- H05  Demo file.
DEMO2--- H06  Demo file.
DEMO2--- H07  Demo file.
DEMO2--- H08  Demo file.
DEMO2--- SCR  Demo file.
DEMOILL- H01  Demo file.
DEMOILL- H02  Demo file.
DEMOILL- H03  Demo file.
DEMOILL- H04  Demo file.
DEMOILL- H06  Demo file.
DEMOILL- H08  Demo file.
DEMOILL- SCR  Demo file.
DEMOPLAN FRM  Data file.
DIGIDOC  PRO  Data file.
FDINSTAL BAT  Installation batch file for floppy disks.
HDINSTAL BAT  Installation batch file for hard disk.
POPT12   EXE  Selfextracting Archived file.
PTAPPLIC FRM  Data file.
PTDOC    DOC  Program documentation.
PTI      EXE  Main program.
PTIL     BAT  Batch file to start program.
PTPLAN   FRM  Data file.
PTU      EXE  Utility program.
PTUL     BAT  Batch file to start utility program.
READ     ME   Info file.
YOSHI    REC  Data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.

```
{% endraw %}

## PTDOC.DOC

{% raw %}
```




             POP TRAIN Copyright (c) 1988, 1989 JOHN M. MAJKRZAK. 
                             All Rights Reserved 



                     A Trainable RAM Resident Help System.


                             - TABLE OF CONTENTS -


         INTRODUCTION .............................................  1
         OVERVIEW .................................................  1
         DISCLAIMER OF WARRANTY ...................................  2
         REGISTRATION INFORMATION .................................  2
         SYSTEM REQUIREMENTS ......................................  3
         GETTING ACQUAINTED .......................................  3
           LOADING POP TRAIN ......................................  4
           CALLING POP TRAIN TO ACTION ............................  4
           USING POP TRAIN WITH TRAINEES ..........................  4
           SAVING YOUR SCHEMA FILE ................................  4
           REMOVING POP TRAIN FROM MEMORY .........................  4
         PLANNING A HELP SYSTEM ...................................  5
           SCHEMA NAME CONSIDERATIONS .............................  5
           PAGE RECOGNITION CONSIDERATIONS ........................  5
           FIELD/CURSOR CONSIDERATIONS ............................  5
           MAKE A PLANNING SHEET ..................................  6
         UTILITIES ................................................  6
           RAM ....................................................  6
           PAGE ...................................................  6
           EDIT ...................................................  6
           MODIFY .................................................  7
         MULTIPLE APPLICATIONS ....................................  7
         RAM DRIVE USAGE ..........................................  7
         DIRECTORIES/FILES AND POP TRAIN ..........................  8
         FLOPPY DISK ONLY USERS ...................................  8
         CONFIGURATION OF POP TRAIN ...............................  9
           AUTOMATIC POP-UP .......................................  9
           AUTOMATIC REMOVAL OF PRESENTATION SCREEN ............... 10
           KEYBOARD RETURNS; K/0, K/1, K/2 ........................ 10
           DIGITAL VOICE PLAYBACK ................................. 11
           HOT/HELP KEYS .......................................... 11
         REVISION HISTORY AND NOTES ............................... 12
         PROBLEM REPORTING ........................................ 12
         CREDITS AND TRADEMARKS ................................... 12
           IBM .................................................... 12
           Borland International .................................. 13
           TesSeRact(TM) .......................................... 13
           QWIK Screen Utilities .................................. 13
           Data Compression ....................................... 13
         OTHER SOFTWARE FROM JOHN MAJKRZAK ........................ 14
         SUGGESTED READING ........................................ 14






                                    - i - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


       I N T R O D U C T I O N

         Pop Train (PT) is a trainable RAM resident help system able
         to display specific help screens depending on the page and
         field location of the cursor.  Screen capturing enables later
         redisplay by PT utility software for further help system
         development, briefings, etc.  Pop Train is useful in employee
         training, telephone sales, general computer education or other
         situations where a personalized help screen is needed.


       O V E R V I E W

         Many computer programs are just written to be used, not
         written to train someone how to use them.  Companies budget
         thousands of dollars for a training department which then
         struggles to teach new employees how to use the computer
         program required in their job.  An often used training
         technique is to stand over the shoulder of the student and
         answer even the most repetitive and basic questions.  Now
         there's a better way.

         Pop Train is a two part package containing PT Instructor
         (PTI) and PT Utilities (PTU).  Pop Train Instructor is
         available upon request during operation of another program.
         Pressing a predefined key combination (hot keys) will call
         Pop Train into action.

         After initial set up, a trainee can use PTI to display a
         specific `help' screen when the help (hot) key is pressed.
         For instance, in an order entry program the Method Of Payment
         might be a one character field entitled MOP on the Order
         Summary page.  The trainee needs to know what MOP means and
         what different types of entries might be put there.  Pop
         Train can be told how to recognize the Order Summary page and
         what help screen to display when the cursor is in the MOP
         field.  All the trainee needs to do is request help by
         pressing the help key.  When the trainee is finished reading
         the screen he or she may press any key to remove the help
         screen and return to the order entry program.  Pop Train
         performs these actions without disturbing any other programs
         that may be running on the computer.  Also, a `disable'
         feature of PTI removes options that a trainee should not
         access.

         The primary feature mentioned above is especially useful in
         many places where a personal computer can compliment a
         mainframe application.  The PC could serve as a terminal
         while keeping busy memos off the mainframe. In a computer
         training course a PT help screen could be set up to answer
         the questions that students often ask.




                                    - 1 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         Another feature of PTI is its ability to capture a screen and
         store the contents onto disk.  The Pop Train utilities
         program can be used to redisplay the screen just as it
         appeared before.  This feature is especially helpful when
         terminals are used in the primary work center but where
         training could begin on a more convenient personal computer.
         Optional configuration settings enable Pop Train to perform
         as a presentation system which cycles through everything
         automatically.  When Pop Train is combined with DIGITONE (c),
         your convention sales presentation become more convincing
         than having a VCR try to do the job.  See `Other Software
         From John Majkrzak' for information about Digitones voice
         delivery capabilities.

         Pop Train presentation (help) screens are created using the
         `edit' option included in PTU.  Presentation screen names are
         assigned by Pop Train thereby making development of your help
         system easy.  Help screens can be relocated onto a RAM drive
         for faster display.

         Pop Train is distributed for a 30 day free trial period.  If
         you like and use Pop Train then you are expected to register
         your copy with the owner.  Look for registration information
         elsewhere in this documentation.  Pop Train is Copyright (c)
         1988 John M. Majkrzak, All Rights Reserved.


       D I S C L A I M E R   O F   W A R R A N T Y

         John Majkrzak makes no warranty concerning the function or
         fitness of Pop Train, and shall have no liability or
         responsibility to any recipient with respect to liability, loss
         or damage directly or indirectly arising out of the use of
         Pop Train programs or associated routines, including, but not
         limited to, any loss of business or other incidental or
         consequential damages.

         Pop Train Copyright (c) 1988 John M. Majkrzak, All Rights
         Reserved.


       R E G I S T R A T I O N   I N F O R M A T I O N

         Pop Train is distributed for a 30 day free trial period.  The
         PT software distributed for your examination is complete.
         There are no features included in the registered version that
         you do not see here.  Every effort was made to assure the
         quality of Pop Train and your ability to judge its
         effectiveness.  If you like and use Pop Train then you are
         expected to register it with the owner in accordance with
         U.S. Copyright Laws.  In exchange for your registration
         dollars, you receive:



                                    - 2 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


           -Uninterrupted ("Registration Requested" screen removed)
            program initialization.
           -The right to use the product on up to TEN computers.
           -The latest `registered' version of Pop Train.
           -The next major revision (upgrade) sent to you free except
            for $4.00 S/H charges.
           -Minor revisions (repairs) are always free, except for S/H
            charges.
           -Answers to your questions about the product and a pledge
            of continued support.
           -A share in the experience of other registrants.
           -Gratitude.

         For $49.00 Pop Train is licensed for use on up to ten
         computers.  All computers must be owned by the same
         registrant.  Additional registrations will be required if
         more than ten computers need to run Pop Train at the same
         time.

         Amounts listed above are for 5.25 inch media, add $2.00 for
         3.5 inch disks.  Please complete the entire application form
         (PTAPPL.FRM) for registration.  Be sure to list your computer
         type.

         You are free to distribute the examination edition of PT
         provided no fee (other than a nominal fee for shipping and
         handling) is charged to the recipient.  Do not distribute
         your registered software.


       S Y S T E M   R E Q U I R E M E N T S

         Pop Train should run on any IBM-PC, XT, AT, and PS/2 or
         compatible machines with DOS 2.0 or greater.  Pop Train
         Instructor requires about 57K of system memory.  Maximum
         screen size is 132 by 43.


       G E T T I N G   A C Q U A I N T E D

         If you have a hard drive use the installation batch file
         (HDINSTAL) to make life easier.  If HDINSTAL is used, all Pop
         Train help screens and other data created will automatically
         be stored in one (C:\POPTRAIN) place.  Also, help screens
         will be copied to RAM drive `D' (if available) before PTI is
         loaded.  To get these results you must use the batch files
         (PTIL and PTUL) for loading Pop Train.

         When PTI begins running the introduction screen may be paused
         by pressing a key (quickly) prior to completion of the
         introduction message.  Unregistered Pop Train users will see
         a `Registration Requested' screen before the introduction
         screen.


                                    - 3 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         Get the feel for how a help system would work by trying out
         the DEMO.  Help may be requested when the cursor is resting
         on the first character (far left) of each data entry field.
         To display the help screen press the RIGHT shift key and the
         `?' key.  While in the C:\POPTRAIN directory at the DOS
         prompt type `DEMO' to execute the demonstration batch file.

         The demo does not perform any real data entry since you are
         actually seeing the `page' feature of the PT utilities
         program.  Press the Esc (escape) key during the demo to see
         what you can do.

       LOADING POP TRAIN
         Assuming you are in the directory where PT resides you may
         load PTI with the command `PTI HELP', where `help' represents
         the name you selected for your schema.  If the schema name is
         left off you are given a reminder.  Think of the schema file
         as the layout or design of your help system.  Pop Train
         schema files have an extension of `.H00'.  Load PT before
         getting into the application you plan to use it with.

       CALLING POP TRAIN TO ACTION
         First load PTI then load whatever application program you
         need help with.  Press <Alt> + <Left Shift> + `T' to activate
         the PTI menu.  You can pause the introduction screen to
         confirm the activation sequence.  Most of your work involves
         selection `T' for setting up the schema file.  The `help'
         screen is displayed when the <Right Shift> + `?' key
         combination is pressed.

       USING POP TRAIN WITH TRAINEES
         You may not want a trainee to have access to the PT menu
         screen.  The menu can be disabled.  Use the PTU `MODIFY'
         command or declare a DOS environment variable called PTCONFIG
         and set it equal to DISABLE.  For example, "SET PTCONFIG=
         DISABLE".  The word `disable' may appear anywhere in the
         configuration setting.  PTCONFIG also has other uses.  See
         "Configuration Of Pop Train" elsewhere in this
         documentation.

       SAVING YOUR SCHEMA FILE
         When you are ready to save the schema you have been working
         on you may do so by using the word SAVE in place of a schema
         name just as though you were trying to load PTI again.  For
         example: >PTI SAVE.

       REMOVING POP TRAIN FROM MEMORY
         Remove PTI from memory with the command: `PTI R'.  You will
         be prompted to save the file if changes were made.






                                    - 4 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


       P L A N N I N G   A   H E L P   S Y S T E M

         A planning sheet is useful in organizing your customized help
         system, but before looking at one there are some things you
         should know.

       SCHEMA NAME CONSIDERATIONS
         The help application you build uses a naming scheme that
         begins with a four character name that you assign to it.  A
         recommended technique is to use the same first two characters
         for all the help schemata created.  Use the third and fourth
         characters to identify the specific help schema.  The advan-
         tage is ease of referencing your files on disk for many of
         the DOS commands you might use.  The disadvantage is small
         since you will probably use a batch file to load the program
         anyway.

         The name decided upon is the name given on the command line
         when you load Pop Train, for example, `C>PTI HS01'.  Pop
         Train will use this name as the first four characters on
         each of the help screens you set up for your application.

       PAGE RECOGNITION CONSIDERATIONS
         Pop Train is application/page oriented.  Each screen or item
         entry page on your application must have a unique string of
         characters that can be used as an identifier.  The `unique'
         page name must be four characters in length and located at
         the same spot on each page.  Most applications will meet this
         requirement even though it was not planned.  Look over each
         page of your application carefully to find a location that
         will work.  Generally, you should start your search at the
         upper left corner of the screen or consider screen titles
         like; item entry (ITEM), customer entry (CUST), or order
         summary (ORDE), provided each page has them in the same
         location.

         The rules you should follow about the page name are simple.
         At least one of the four characters must be unique.  The
         other three characters could all be the same.  Even graphics
         characters are allowed because any character that Pop Train
         does not like will be remembered as the negation (-) symbol.

       FIELD/CURSOR CONSIDERATIONS
         Each help screen to be displayed will need to be assigned to
         it's own specific cursor location.  Usually the location
         should be the same place the cursor jumps to when it enters
         the field.

         After deciding which fields are in need of help screens, you
         should plan on assigning their locations to Pop Train in the
         same order that data is normally entered.  There are two main
         benefits in doing so; file name extensions will correspond to
         the field number, and second, field movement during the PAGE


                                    - 5 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         feature of PT utilities will match.

       MAKE A PLANNING SHEET
         See the PTPLAN.FRM file for more information about planning
         your help system.


       U T I L I T I E S

         The PT Utilities program is where the most expansion of
         capabilities is likely to occur as registered users send in
         their suggestions.  When not configured for `trainee' use,
         a menu is displayed if no command line is given.  Some
         features need to activated through the command line, for
         example: >PTU MODIFY

       RAM
         A RAM or vDisk is highly recommended for use with Pop Train.
         The RAM option offered by the PTU program is only a
         convenient alternative to setting up a batch file to do the
         same job.  Using DOS commands is actually faster (in most
         cases) than using the RAM option.  Only help files will be
         transferred.  For rapid display of page screens during use of
         the PTU PAGE feature you could use the DOS command:
           `COPY HELP*.SCR D:'.

       PAGE
         The PAGE feature will assist in familiarizing students or new
         employees with a computer application without actually having
         to run the program they are being trained on.

         Another reason for using PAGE instead of your regular
         application is the ability to teach PT to position the cursor
         in places that it may not normally go.  The potential use is
         to highlight and provide additional explanation about screen
         items that are display only, for example, the `order total'.

         To use the page feature you must first capture the PAGE using
         Pop Train Instructor.  If the system is configured for a
         trainee then the PAGE utility starts automatically since it
         is the only one available to a trainee.

       EDIT
         The file editing facilities of PTU must be used to edit all
         help screens.  To edit the help files identified within a PT
         help schema, load PTI with the schema, next load PTU without
         any command line and select the EDIT option from the main
         menu.  While using the editor you may press the escape key to
         get help.  The editor is easy to use.  Other instructions are
         given by the program.

         Avoid confusion, do not have help screens on RAM disk while
         editing them.  Only screens on the default (primary) path are


                                    - 6 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         edited.

         Editor access is also available from the PAGE routine, but
         not if PT is being used with a trainee.  Accessing the editor
         from the page routine can be much easier.

       MODIFY
         This option is activated from the command line, for example:
         >PTU MODIFY.  Default colors for the Pop Train menus and your
         help screens can be set using MODIFY.  A wider selection of
         alternate hot keys is offered through `modify' than the
         PTCONFIG (see Configuration Of Pop Train, Hot / Help Keys)
         variable allows.  A modified copy of Pop Train can be LOCKED
         for `trainee' use.  When Pop Train is locked, the DISABLE
         command (see Using Pop Train With Trainees) need not be
         given.  CAUTION, do not let the MODIFY feature write over
         your existing copy of Pop Train if it is the only one you
         have.


       M U L T I P L E   A P P L I C A T I O N S

         Most training sessions or jobs only involve one task or
         application at a time.  Likewise, PT is best when used to
         cover one application.  Should you need more applications,
         for example, both `inbound' and `outbound' sales, then just do
         everything twice.  Use a different name for each application
         and set up a batch file to load Pop Train as needed prior to
         loading whatever program you need.

         If PT is used in the daily work center and people need help
         screens across different applications then it won't hurt to
         give it a try.  Remember PT is limited to nine pages and all
         pages must have the identifier at the same screen location.


       R A M   D R I V E   U S A G E

         Pop Train will check for a RAM (vDisk) drive `D' when it gets
         loaded.  You may specify the path (or any other drive) to be
         checked.  Use the DOS `SET' command to include two path names
         in PTPATHS as explained in the `Directories And Files'
         section.

         The first path is the PT default data path.  Separate the
         first and second paths with a semicolon (like the DOS `PATH'
         command). Leave no spaces anywhere in PTPATHS, for example,
         `SET PTPATHS=C:\POPTRAIN;D:\POPTRAIN'.  Only the default
         (first) path specified is used by PT to store data.

         It is OK to specify the second path even if that drive does
         not exist.  Only the RAM utility of PTUTIL will issue an
         error message if the second path is not found.  All others


                                    - 7 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         simply revert to the first (default) path.  No RAM drive
         specification is needed if your screens are on the root
         directory of drive `D' because `D:\' is used as a default.

         For more about DOS paths, see the `PATH' command in your
         systems operations manual.


       D I R E C T O R I E S / F I L E S   A N D   P O P   T R A I N

         Pop Train will create one file on your disk for each help
         schema you create.  Usually only one schema will be needed
         for each application.  The directory Pop Train leaves its
         files in is up to you.  Prior to loading Pop Train you can
         use the DOS `SET' command to create a memo (PTPATHS) for PT
         to read.  The memo will tell PT where its file directory is
         located.  For example, `SET PTPATHS=C:\POPTRAIN', tells PT to
         look in the subdirectory \POPTRAIN on drive `C' for all its
         files.  If the PTPATHS memo is not found then PT will use the
         directory you were in when PT was loaded and you should take
         steps to always be in the same subdirectory when loading Pop
         Train.

         If you have been working on a help schema and discover the
         page identifier was not located in the proper position, you
         will need to start over.  Pop Train automatically initializes
         new files.  Therefore, to start over again you should delete
         the schema file from your disk drive after removing PT from
         the computer memory.  For example, `DEL HELP.H00', will
         enable you to start fresh.


       F L O P P Y   D I S K   O N L Y   U S E R S

         Pop Train works fine for floppy disk users, although the
         experience would be more pleasant if used with RAM drive
         software.  Details about installing RAM drive software is
         beyond the scope of this documentation but RAM drive usage
         is covered in its own section.

         To work on a floppy based system you will need enough room
         for Pop Train and whatever else needs to share the disk.  All
         you can do is try.  If you have two drives you can use
         FDINSTAL.BAT to install Pop Train onto the disk in drive B.
         If your managing with one drive then follow these
         instructions to put Pop Train onto your data disk.

                Step 1: A>B:
                Step 2: B>CD\
                Step 3: B>MD POPTRAIN
                Step 4: B>CD POPTRAIN
                Step 5: B>COPY A:PT*.* B:\POPTRAIN\*.*



                                    - 8 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         Comments for each step above.
                Note 1: Change to drive B: You will be asked to
                        install disk for drive `B', just be sure the
                        disk you want PT to be on gets put into the
                        drive now.
                     2: Let's be sure we are in the root directory.
                     3: Make directory POPTRAIN.
                     4: Change to directory POPTRAIN.
                     5: Copy Pop Train files from the disk where you
                        had it to the current directory of this disk.
                        Follow the instructions that the DOS system
                        gives you.

         Notice a copy statement (similar to step 5:) can be used to
         transfer the demonstration files to another disk.  Use the DOS
         `delete' command to get rid of the files you won't be using
         on a regular basis.

         When ready to run your application you should first load Pop
         Train with the PT (and other) data disk in the drive.  Next
         you may need to remove the data disk to install the program
         disk and load the application before reinstalling the data
         disk.


       C O N F I G U R A T I O N   O F   P O P   T R A I N

         Several options are available to customize the behavior of
         PT.  Changes are made using the DOS `SET' command to create a
         variable called `PTCONFIG', for example `SET PTCONFIG= pd/02
         rd/08 cr disable'.  Do not leave a space between the word
         `PTCONFIG' and the equal sign.  Spaces are ok after the equal
         sign.  The assignment must be done prior to loading Pop
         Train.  Upper or lower case letters and the order of your
         selections are not important.

         A mistake may go unnoticed with no error message issued.  If
         you don't get the results you're expecting check for mistakes
         like transposed letters or such.

         Once you decide what you want, place your configuration
         settings on a line in the batch file you use to load Pop
         Train.  Should you need help making batch files try one of
         the books mentioned under `Suggested Reading.'

       AUTOMATIC POP-UP
         During operation of the PTU Page feature, automatic pop-up of
         a presentation screen is possible.  A time delay of 0 to 99
         seconds can be set.  The pop-up will only occur after the
         cursor has been resting on a valid pop-up location for the
         specified period of time.




                                    - 9 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


         Use `PD/nn' in the PTCONFIG variable to indicate you want
         automatic pop-up to occure.  The nn designates the time
         delay.  Both places must be used.  Some examples:

           `pd/00' results in immediate Pop-Up.
           `pd/02' results in 2 second wait then Pop-Up.
           `pd/2'  WRONG
           `pd\02  WRONG

         Due to excessive processing time, the automatic pop-up
         feature is only available during operation of PTU PAGE.

       AUTOMATIC REMOVAL OF PRESENTATION SCREEN
         Prior to loading PTI you may add a configuration setting
         which will result in automatic removal of a presentation
         (help) screen.  The option is similar in use to the automatic
         pop-up setting, although automatic removal is not restricted
         for use only during PTU PAGE.  Some examples:

           `rd/08' results in removal after an eight second display.
           `rd/15' results in removal after fifteen second display.
           `rd/122' WRONG (12 second delay with a stray 2 remaining)
           `rd\15'  WRONG

       KEYBOARD RETURNS; K/0, K/1, K/2
         K/0
           This is the PTI default setting.  The keyboard buffer is
           cleared before returning control to your primary
           application.
         K/1
           There may be situations when you always want a carriage
           return (ENTER key) to be processed every time a
           presentation screen is removed.  Such a situation occurs
           when you want to use PTI and PTU to cycle through all your
           presentation screens automatically.

           To get the carriage return sent by PTI just include `K/1'
           in the configuration variable, for example: `SET PTCONFIG=
           RD/08 K/1' will remove the screen after eight seconds and
           send a carriage return through to your other application.

           NOTE: If the K/1 option is seen by PTU, then each time you
           are on the last field of a page, PTU will proceed to the
           next page in the sequence.  Therefore, should you not want
           the page to flip automatically, remove the K/1 from the
           PTCONFIG variable before loading PTU.
         K/2
           To cause PTI to allow the key press to pass through to your
           application place `K/2' in the configuration setting.  This
           might be helpful if you are using a PTI help screen to
           display a list of options.




                                    - 10 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


       DIGITAL VOICE PLAYBACK
         For DIGITONE (c) users only.  When using Digitone and PT
         together there is one configuration setting for Digitone (DT)
         that must be given to Pop Train.  When everything is ready
         (as per the Digitone instructions) PT will pass Digitone the
         voice file name to playback in association with the
         presentation screen on display.  Pop Train must also tell DT
         if it is to playback the voice file immediately or prompt the
         user first.  The configuration setting you need to give PT
         will cause it to tell Digitone that playback should be
         immediate.  Digitone playback defaults to prompting the user.

         Use the PTCONFIG variable to tell PT you want Digitone to
         playback without prompting the user first.  Simply include
         the identifier `dvp' along with any other configuration
         information you give Pop Train.

         For example, `SET PTCONFIG= pd/02 rd/08 k/1 disable dvp'.

       HOT/HELP KEYS
         Pop Train programs need no attention to these details unless
         you become aware of problems due to interference with similar
         settings in other programs.  Alternate selections are listed
         below.  See also, `Using Pop Train With Trainees' elsewhere
         in this documentation.

         -Pop Train Instructor menu hot key.
           Default setting is `T'.
           Alternate choices are `Z', `X', `C'.
           The <Alt> + <LShift> keys may not be changed.  Therefore,
           after changing the keyboard assignment the new hot key
           combination becomes <ALT> + <LSHIFT> + <Your choice>.

         -Pop Train Instructor Help Window hot key.
           Default setting is `?'.
           Alternate choices are `M', `,'(comma), `.'(period).
           The <RShift> key may not be changed.  After changing the
           keyboard assignment the new hot key combination becomes
           <RShift> + <Your choice>

         Example: `SET PTCONFIG=X' changed PTI menu hot key to X.
         Example: `SET PTCONFIG=Z.' changed PTI menu hot key to `Z'
                                   and help hot key to `.' (period).

         An incorrect attempt to reassign a hot key will leave the
         default setting intact with no error message issued.  If a
         conflict is detected you will be warned.








                                    - 11 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 



       R E V I S I O N   H I S T O R Y   A N D   N O T E S

         The only changes listed here are the ones of consequence to
         existing users.

           Version 1.0 dated 11/13/88.
             - First release of original Pop Train.
           Version 1.1 dated 01/11/89.
             - Schema files need to be upgraded using PTUPGRD utility
               before they will operate with v1.1 of Pop Train.
               PTUPGRD is mailed FREE to existing registrants.  It
               is possible to simply reenter all the schema inform-
               ation.
             - PTI `must' be present in memory for any feature of PTU
               to operate.
             - The MODIFY command is added to PTU.
             - Compatibility with Digitone Version 1.0 is added.
           Version 1.1 (release 2) dated 01/19/89.
             - No software changes.
             - Archive technique is changed.  Self extracting form of
               PT is no longer distributed in an effort to open up my
               market more.  BBS operators scorn the additional disk
               space required by a self extracting software package.
             - Changes to installation batch files.
           Version 1.2 dated 05/05/89.
             - Configuration options `K/n', `PD/nn', `RD/nn' and `DV/a'
               are added.
             - Digitone promotional supplement is added, see
               DIGIDOC.PRO in this archive.
             - System crash after reloading PTI for a file exchange is
               resolved.  Problem report dated 4/3/89.
           Version 1.2 (release 2) dated 05/12/89.
             - No software changes
             - Self extraction is back.  New archival software gets
               the go ahead from SYSOPS if used to produce a self
               extracting archive because it combines some much needed
               features with low low overhead.


       P R O B L E M   R E P O R T I N G

         Should you discover something wrong with Pop Train, even if
         you are not yet registered, please report the problem.
         Include information about your computer (brand, micro-
         processor and BIOS version), your DOS version, video card and
         other software you are using with Pop Train.  Send to:

           John Majkrzak                     Ph#(612)636-9761
           1880 Todd Dr.                     CIS# 76617,264
           Arden Hills, MN  55112




                                    - 12 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


       C R E D I T S   A N D   T R A D E M A R K S

       IBM
         IBM, IBM Personal Computer, IBM Personal Computer XT, IBM
         Personal Computer AT and PS/2 are registered trademarks of
         International Business Machines Corporation.

       Borland International
         Pop Train was created using Turbo Pascal, Copyright (C)
         Borland International 1987, 1988.

       TesSeRact
         This product uses the TesSeRact(TM) ram-resident library and
         supports the TesSeRact standard for  ram-resident program
         communication.  For information about TesSeRact contact the
         TesSeRact Development Team at:

              TesSeRact Development Team
              c/o Chip Rabinowitz
              2084 Woodlawn Avenue
              Glenside, PA 19038
              1-215-884-3373

              Compuserve: 70731,20
              MCIMAIL:  315-5415

         The MCIMAIL Account has been provided to the TesSeRact
         Development Team by Borland International, Inc.  The
         TesSeRact Development Team is in no way associated with
         Borland International, Inc.  TesSeRact is a trademark of the
         TesSeRact Development Team.

       QWIK Screen Utilities
         This program uses copyrighted QWIK routines from Eagle
         Performance Software which are included by permission.  For
         more information about QWIK direct video screen access
         routines please contact:

               Eagle Performance Software
               TP Products
               Attn: James H. LeMay
               P.O. Box 122237
               Ft. Worth, TX 76121

         As a note, the PT introduction routine displays 64 boxes on
         screen.  The speed was throttled down to a rate of 18 per
         second.

       Data Compression
         The archival program used to condense Pop Train is not
         software from John Majkrzak.  A separate file having the
         extension "REC" gives recognition to the author.



                                    - 13 - 







            POP TRAIN  Copyright (c) 1988, 1989  JOHN M. MAJKRZAK. 


       O T H E R   S O F T W A R E  F R O M   J O H N  M A J K R Z A K

         Digitone: Imagine a prerecorded message delivered to your
         listener automatically.  Digitone (c) can do it.  With both
         Digitone and Pop Train, you can make a complete audio/video
         presentation and more!  See DIGIDOC.PRO included with Pop
         Train.

         Public domain include files for Turbo Pascal programmers
         located in library 2 of Borland languages forum (BPROGA) on
         Compuserve include: SDEFSn.ARC, VT52.PAS, CURDLn.ARC.  Lower
         case `n' designates the version number.

         Selected routines used in PT are available to Turbo Pascal
         and Assembler programmers.  Mention your needs when
         registering.


       S U G G E S T E D   R E A D I N G

         Hoffman, P., Nicoloff, T. "The Osborne/McGraw-Hill MS-DOS
           USERS GUIDE". Berkeley, CA: Osborne/McGraw-Hill, 1984.

         Wolverton, V., "Supercharging MS DOS: The Microsoft Guide to
           High Performance Computing for the Experienced PC User".
           Redmond, WA: Microsoft Press, 1986.

         Norton, P., "Inside the IBM PC". New York, NY: Prentice Hall
           Press, 1986.


























                                    - 14 - 




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1471

     Volume in drive A has no label
     Directory of A:\

    POPT12   EXE     87281   5-12-89   2:19a
    DEMO     BAT      1028   4-22-89   6:57p
    DEMO     H00       894  12-29-88  12:59a
    DEMO1111 H01       687   5-04-89   1:38a
    DEMO1111 H02       687  11-10-88   8:45p
    DEMO1111 SCR      4007  11-10-88   8:45p
    DEMO2--- H01       687  11-10-88   8:45p
    DEMO2--- H02       687  11-10-88   8:45p
    DEMO2--- H03       687   4-22-89   6:50p
    DEMO2--- H04       687  11-10-88   8:45p
    DEMO2--- H05       687   4-22-89   4:41p
    DEMO2--- H06       687   4-22-89   6:53p
    DEMO2--- H07       687   4-22-89   6:51p
    DEMO2--- H08       687  11-10-88   8:45p
    DEMO2--- SCR      4007   4-22-89   5:53p
    DEMOILL- H01       687  11-10-88   8:45p
    DEMOILL- H02       687  11-10-88   8:45p
    DEMOILL- H03       687  11-10-88   8:45p
    DEMOILL- H04       687  11-10-88   8:45p
    DEMOILL- H06       687  11-10-88   8:45p
    DEMOILL- H08       687  11-10-88   8:45p
    DEMOILL- SCR      4007  11-10-88   8:45p
    DEMOPLAN FRM      1956  11-10-88   8:45p
    DIGIDOC  PRO      4059   5-05-89  10:25p
    FDINSTAL BAT       328   1-18-89   2:22a
    HDINSTAL BAT       402   1-18-89   2:10a
    PTAPPLIC FRM      2554   5-05-89   6:03p
    PTDOC    DOC     39953   5-12-89   2:09a
    PTI      EXE     39152   5-05-89   6:03p
    PTIL     BAT       287   5-05-89   6:03p
    PTPLAN   FRM      2317   5-05-89   6:03p
    PTU      EXE     66400   5-05-89   6:03p
    PTUL     BAT       231   5-05-89   6:03p
    READ     ME        928  11-10-88   8:45p
    YOSHI    REC       898   5-12-89   2:09a
    GO       BAT        39   7-27-89   9:19a
    FILE1471 TXT      2577   7-27-89   9:40a
           37 file(s)     274297 bytes
                           32768 bytes free
