---
layout: page
title: "PC-SIG Diskette Library (Disk #2652)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2652/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2652"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2652.TXT

{% raw %}
```
Disk No: 2652                                                           
Disk Title: Painless Event Processor                                    
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Painless Event Processor                                 
Author Version: 3/91                                                    
Author Registration: $45.00                                             
Special Requirements: None.                                             
                                                                        
The PAINLESS EVENT PROCESSOR allows your PC to work 24 hours a day! You 
simply tell the event processor when to execute programs, batch files,  
tasks, utilities, etc., and at the specified time the keystrokes will be
entered into your computer as if you were sitting at the keyboard       
yourself.                                                               
                                                                        
The PAINLESS EVENT PROCESSOR sits in memory (using only 10K) waiting for
the real-time clock to trigger a pre-programmed command. At that time,  
the PAINLESS EVENT PROCESSOR recalls your instructions and enters the   
data directly into your PC, just as if you were there.                  
                                                                        
No matter if your task is a one-time, daily, weekly, monthly, annual, or
even an erratic event, the PAINLESS EVENT PROCESSOR will handle it.     
Specify a delay from 1 second to 255 minutes, or have the PAINLESS EVENT
PROCESSOR perform a reboot on your system.                              
                                                                        
If you think remembering all the keystrokes you need to perform a task  
might be tedious, you're right! Included is a feature we called the Key 
Stroke Memory.  It allows you to go into an application and then        
activate the PAINLESS EVENT PROCESSOR to start remembering your         
keystrokes. When you've finished the task, the keystrokes are saved.    
                                                                        
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
║        <<<<  PC-SIG Disk #2652  PAINLESS EVENT PROCESSOR  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the installation instructions, type:                           ║
║                   COPY README.1ST PRN  (press Enter)                    ║
║                                                                         ║
║ To print the manual, type:  COPY MANUAL.TXT PRN  (press Enter)          ║
║                                                                         ║
║ To print the registration form, type:  COPY REGISTER.TXT PRN  (Enter)   ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
          ════════════════════════════════════════════════════════════
                  Painless Event Processor Table of Contents
          ════════════════════════════════════════════════════════════

          Definition of Shareware....................................1
          Disclaimer-Agreement.......................................1
          Ordering...................................................2
          Support....................................................2
          System Requirements........................................3
          Installation...............................................3

          I.  Edit Keyboard Scripts..................................3
                A.  Files............................................3
                        1.  New......................................3
                        2.  Open.....................................4
                        3.  Save.....................................4
                        4.  Save As..................................4

                B.  Edit.............................................4
                        1.  Append...................................4
                        2.  Browse...................................4
                        3.  Insert...................................4
                        4.  Delete...................................4

                C.  Special..........................................5
                        1.   Seconds Delay...........................5
                        2.   Minutes Delay...........................5
                        3.   Int 19 Boot.............................5
                        4.   Warm Boot...............................5
                        5.   Cold Boot...............................5
                        6.   Alt-F10.................................5
                        7.   Flush Keyboard..........................5
                        8.   Lock States.............................5
                        9.   Shift States............................5
                        10.  Hold States.............................6
                        11.  Print Screen............................6

         II.  Edit Keyboard Events...................................6
                A.  Files............................................6
                        1.  New......................................6
                        2.  Open.....................................6
                        3.  Save.....................................6
                        4.  Save As..................................7

                B.  Edit.............................................7
                        1.  Immediate Event..........................7
                        2.  One Time Event...........................7
                        3.  Daily Event..............................7
                        4.  Weekly Event.............................8
                        5.  Monthly Event............................8
                        6.  Annual Event.............................8
                        7.  Edit an Event............................9
                        8.  Clear an Event...........................9

        III.  Exit to PEScheduler....................................9

         IV.  Exit to PERecorder.....................................9
                A.  Begin Script.....................................9
                B.  End Script......................................10
                C.  Flush Script....................................10
                D.  Save Script.....................................10
                E.  Unload Recorder.................................10


         DEFINITION OF SHAREWARE

         Shareware distribution gives users a chance to try software
         before buying it.  If you try a Shareware program and
         continue using it, you are expected to register.  Individual
         programs differ on details.  Some request registration while
         others require it, some specify a maximum trial period.  With
         registration, you get anything from the simple right to
         continue using the software to an updated program with
         printed manual.

         Copyright laws apply to both Shareware and commercial
         software, and the copyright holder retains all rights, with a
         few specific exceptions as stated below.  Shareware authors
         are accomplished programmers, just like commercial authors,
         and the programs are of comparable quality.  (In both cases,
         there are good programs and bad ones!)  The main difference
         is in the method of distribution.  The author specifically
         grants the right to copy and distribute the software, either
         to all and sundry or to a specific group.  For example, some
         authors require written permission before a commercial disk
         vendor may copy their Shareware.

         Shareware is a distribution method, not a type of software.
         You should find software that suits your needs and
         pocketbook, whether it's commercial or Shareware.  The
         Shareware system makes fitting your needs easier, because you
         can try before you buy.  A nd because the overhead is low,
         prices are low also.  Shareware has the ultimate money-back
         guarantee -- if you don't use the product, you don't pay for
         it.

         DISCLAIMER - AGREEMENT

         Users of Painless Event Processor must accept this disclaimer
         of warranty:  "Painless Event Processor is supplied as is.
         The author disclaims all warranties, expressed or implied,
         including, without limitation, the warranties of
         merchantability and of fitness for any purpose.  The author
         assumes no liability for damages, direct or consequential,
         which may result from the use of Painless Event Processor."

         Painless Event Processor is a "shareware program" and is
         provided at no charge to the user for evaluation.  Feel free
         to share it with your friends, but please do not give it away
         altered or as part of another system.  The essence of
         "user-supported" software is to provide personal computer
         users with quality software without high prices, and yet to
         provide incentive for programmers to continue to develop new
         products.

         If you find this program useful and find that you are using
         Painless Event Processor and continue to use Painless Event
         Processor after a reasonable trial period, you must make a
         registration payment of $45.00 to Painless Accounting.  The
         $45.00 registration fee will license one copy for use on any
         one computer at any one time, and you will receive a printed
         manual.
                                PAGE 1


         You must treat this software just like a book.  An example is
         that this software may be used by any number of people and
         may be freely moved from one computer location to another, so
         long as there is no possibility of it being used at one
         location while it's being used at another.  Just as a book
         cannot be read by two different persons at the same time.

         Commercial users of Painless Event Processor must register
         and pay for their copies of Painless Event Processor within
         30 days of first use or their license is withdrawn.
         Site-License arrangements may be made by contacting Painless
         Accountng.

         Anyone distributing Painless Event Processor for any kind of
         remuneration must first contact Painless Accounting at the
         address below for authorization.  This authorization will be
         automatically granted to distributors recognized by the (ASP)
         as adhering to its guidelines for shareware distributors, and
         such distributors may begin offering Painless Event Processor
         immediately (However Painless Accounting must still be
         advised so that the distributor can be kept up-to-date with
         the latest version of Painless Event Processor).

         You are encouraged to pass a copy of Painless Event Processor
         along to your friends for evaluation.  Please encourage them
         to register their copy if they find that they can use it.
         All registered users will receive a copy of the latest
         version of the Painless Event Processor system, and a
         printed manual.

         Painless Accounting
         4401 Birdsong
         Plano, TX 75093

         ORDERING

         If you wish to register Painless Event Processor simply print
         the file REGISTER.TXT and fill in the requested information,
         or call (214)596-9164 anytime.  We can send your program COD
         and we also accept Credit Cards.

         As soon as your registration is received you will be sent the
         latest copy of Painless Event Processor, and a printed
         manual.  You will also be notified of any future releases of
         Painless Event Processor, and any new products.

         SUPPORT

         Telephone Support:
         We provide full technical support for all of our products.
         You may call us Monday thru Thursday at (214)596-9164 from
         7pm to 9pm CST.

         BBS Support:
         You can also leave a message on our support BBS, RBBS-PC
         Rbase-5000, operating 24 hours, 7 days a week at
         (214)881-0313.  Minimum baud is 2400, maximum is 38,400 (USR

                                PAGE 2


         Dual Standard 9600 HST).  When you call you will
         automcatically have full access, and there is no charge for
         this system.  This BBS also has a forum for interaction
         between our users.  Please note if you wish to leave a
         message to be answered by Painless Accounting, you must
         address your message to KENDALL PIERCE.  Kendall Pierce can
         also be reached on CompuServe at User ID 70337,3337.

         SYSTEM REQUIREMENTS

         This program requires an IBM PC or IBM compatible computer
         with 256K.

         INSTALLATION

         This program is contained on one disk.  This disk contains
         all the program files.

         The first thing you need to do is make a copy of the original
         disk.  Once this is done, use the working copy that you made.
         Store the original disk in a safe place.

         To install Painless Event Processor, simply put the disk in
         Drive A and perform the following steps:

                           1)  C:
                           2)  MD\PEP
                           3)  CD\PEP
                           4)  COPY A:*.*

         NOTE:  The subdirectory name PEP must be used in order for
         the sample events to run properly.  Otherwise, any directory
         and drive can be used.

         Once this is done you are ready to use Painless Event
         Processor.  To start the program you must change into the
         subdirectory you created through the install process, the
         default is PEP.  The command to change to this default
         subdirectory is CD\PEP.  Once you are in the subdirectory
         type in PEP, this will bring you up to the Main menu.  Once
         at the main menu use the arrow keys to move up and down the
         menu or use the mouse to make your selection.

         I. Edit Keyboard Scripts

         Select this option to create or edit keyboard scripts.
         Keyboard scripts are keystrokes saved in a file that can be
         replayed at any time.  Keystrokes captured through the
         Painless Event Recorder option can also be edited with this
         option.  The default extension for KeyBoard Scripts is KBS.

         A. Files

         1. New

         Select this option to create new keyboard scripts.  This will
         clear the current keyboard script displayed.  You may then
         begin to enter keystrokes for a new keyboard script.

                                PAGE 3


         2. Open

         Select this option to open an existing keyboard script for
         editing.  You will be prompted to enter the keyboard script
         file name.  The default extension used for keyboard scripts
         is KBS.  If the script exist it will be displayed on the
         screen for editing.  Otherwise, a message will be displayed
         indicating there was an error trying to open the script name
         entered.

         3. Save

         Select this option to save the current keyboard script.  This
         does not prompt you for a script name, it will just update
         the current keyboard script file.

         4. Save As

         Select this option to save the keyboard script to a new file.
         You will then be prompted to enter the new script name.  The
         default extension is KBS for KeyBoard Script.  This is useful
         in creating a backup of the current script, and then
         experimenting with making changes to the script.  Then if
         the changes were incorrect you can open the backup file and
         try again.

         B. Edit

         This is used for appending, browsing, deleting, or inserting
         keystrokes in the script file.

         1. Append

         Select this option to append keystrokes to the end of the
         current script displayed.

         2. Browse

         Select this option to browse the keystrokes.  This does not
         allow any editing.  You may page up and down or arrow up and
         down to look at the keystrokes.

         3. Insert

         Select this option to insert keystrokes to the current script
         displayed.  You must then arrow to the position where you
         need to add keystrokes and press enter.  You can then begin
         to insert new keystrokes.  To add more keystrokes to the end
         of the current script select the append option.

         4. Delete

         Select this option to delete keystrokes from the current
         script.  You can then arrow to the keystrokes you need to
         delete and press the delete key.  This will remove the
         highlighted keystroke from the current script.  To add more
         keystrokes after deleting unwanted keystrokes select insert
         or append.


                                PAGE 4


         C. Special

         This option allows you to put special types of keystroke
         combinations, delays, and the abililty to reset your
         computer.

         1. Seconds Delay

         Select this option to enter a delay between keystrokes.  You
         will be prompted to enter the time of the delay in seconds.
         You can have a delay up to 255 seconds.

         2. Minutes Delay

         Select this option to enter a delay between keystrokes.  You
         will be prompted to enter the time of the delay in minutes.
         You can have a delay up to 255 minutes.

         3. Int 19 Boot

         Select this option to cause the system to do a Interrupt 19
         boot.  Make sure you exit out of any programs properly before
         rebooting your machine.

         4. Warm Boot

         Select this option to enter a warm boot of the system.  This
         is like pressing the CTRL+ALT+DEL keys simultaneously.  Make
         sure you exit out of any programs properly before rebooting
         your machine.

         5. Cold Boot

         Select this option to enter a cold boot of the system.  This
         is like turning off the system and then turning it back on.
         Make sure you exit out of any programs properly before
         rebooting your machine.

         6. Alt-F10

         Select this option to enter the ALT+F10 sequence of
         keystrokes into the displayed keystrokes.

         7. Flush Keyboard

         Select this option to flush any keys from the keyboard input.

         8. Lock States

         Select this option to toggle on and off the Caps Lock, Number
         Lock, Insert key, and Scroll Lock.

         9. Shift States

         Select this option to generate any keystroke combination of
         the Left and Right Shift, Ctrl, and Alt Keys.  Highlight each
         key to be entered into the keystroke event and press enter or

                                PAGE 5


         left mouse button.  This will be indicated by a double box.
         The keystrokes will be stored by an X indicating each
         keystroke to be replayed.

         For example, if the Left Shift and Left Ctrl keys along with
         the Right Alt and Right Ctrl keys were to be saved.  It would
         display XXoXXo, indicating the first two keys, the Left Shift
         and Ctrl keys were pressed.  The next key, the Left Alt key
         was not, so it has an 'o'.  Then the next two keys, the
         Right Alt and Right Ctrl were pressed and the Right Shift was
         not.  To save the desired key combination, press the F3 key.

         10.  Hold States

         Select this option to select hold states for SysRq, Scroll
         Lock, Num Lock, Caps Lock, and Insert.  Highlight the desired
         keystrokes to be replayed, and toggle them on and off with
         the enter key or the left mouse button.  The double box
         indicates the keys are selected for playback.  To save the
         keystrokes press F3.

         11.  Print screen

         Select this option to enter a print screen in your keystroke
         script.

         II.  Edit Keyboard Events

         Select this option to create or edit keyboard events.
         Keyboard events contain up to eight keyboard scripts that can
         be executed at any time.  The default extension used for
         keyboard events is KEL.

         A. Files

         1. New

         Select this option to create a new schedule of events.  This
         will clear the current schedule of events displayed.  You can
         then start adding keyboard scripts to a new event.

         2. Open

         Select this option to open a schedule of events file for
         editing.  You will be prompted to enter the schedule of
         events file name.  The default extension is KEL for Keyboard
         Event List.

         3. Save

         Select this option to save the current schedule of events.
         It will not prompt for a file name it will simply update the
         current schedule of events file.



                                PAGE 6


         4. Save As

         Select this option to save the current schedule of events to
         a new file.  This is good to create backup copies of the
         Keyboard Event List.  You must then enter the new file name.
         The default extension is KEL for Keyboard Event List.

         B. Edit

         1. Immediate Event

         Select this option to enter a keyboard script, as an
         Immediate event, to the current schedule of events.  You will
         then be prompted to enter an event name.  This is any 15
         characters to describe the keyboard script.  You must then
         enter the script file name.  This is the file name the
         keyboard script was saved into.  Press F3 to save the event.

         The event name will then be listed on the screen along with
         the Frequency and Keyboard script file name.  No time will be
         displayed because it is an immediate event.

         2. One Time Event

         Select this option to enter a keyboard script, as an one time
         event, to the current schedule of events.  You will then be
         prompted to enter an event name.  This is any 15 characters
         to describe the keyboard script.  You must then enter the
         script file name. This is the file name the keyboard script
         was saved into.  Next you will enter the time and date the
         keyboard script is to be executed.  Enter the time in the
         format of hh:mm:ss.  For example, if the script was to be run
         at 3:10 pm, you would enter 15:10:00 as the time.  Press F3
         to save the event or Escape to exit without saving.

         The event name will then be listed on the screen along with
         the Frequency, Time to be run, and Keyboard script file name.

         3. Daily Event

         Select this option to enter a keyboard script, as a Daily
         event, to the current schedule of events.  You will then be
         prompted to enter an event name.  This is any 15 characters
         to describe the keyboard script.  You must then enter the
         script file name.  This is the file name the keyboard script
         was saved into.  Next you will enter the time the keyboard
         script is to be executed each day.  Enter the time in the
         format of hh:mm:ss.  For example, if the script was to be run
         at 3:10 pm, you would enter 15:10:00 as the time.  Press F3
         to save the event or Escape to exit without saving any
         changes made.

         The event name will then be listed on the screen along with
         the Frequency, Time to be run, and Keyboard script file name.


                                PAGE 7


         4. Weekly Event

         Select this option to enter a keyboard script, as a Weekly
         event, to the current schedule of events.  You will then be
         prompted to enter an event name.  This is any 15 characters
         to describe the keyboard script.  You must then enter the
         script file name.  This is the file name the keyboard script
         was saved into.  Next you will enter the time and days the
         keyboard script is to be run.  Enter the time in the format
         hh:mm:ss.  For example, if the script was to be run at 3:10
         pm, you would enter 15:10:00 as the time.  Then you must
         indicate which days of the week the script is to be run on.
         Enter Y in the days the script is to be run.  Press F3 to
         save or Escape to exit without saving.

         The event name will then be listed on the screen along with
         the Frequency, Time to be run, and Keyboard script file name.

         5. Monthly Event

         Select this option to enter a keyboard script, as a Monthly
         event, to the current schedule of events.  You will then be
         prompted to enter an event name.  This is any 15 characters
         to describe the keyboard script.  You must then enter the
         script file name.  This is the file name the keyboard script
         was saved into.  Next you will enter the time and days the
         keyboard script is to be executed.  Enter the time in the
         format of hh:mm:ss.  For example, if the script was to be run
         at 3:10 pm, you would enter 15:10:00 as the time.  Next
         indicate which days of the month the script is to be run by
         putting a Y under the day.  Press F3 to save or Escape to
         exit without saving.

         The event name will then be listed on the screen along with
         the Frequency, Time to be run, and Keyboard script file name.

         6. Annual Event

         Select this option to enter a keyboard script, as an Annual
         event, to the current schedule of events.  You will then be
         prompted to enter an event name.  This is any 15 characters
         to describe the keyboard script.  You must then enter the
         script file name.  This is the file name the script was saved
         into.  Next enter the time and days the keyboard script will
         be executed.  Enter the time in the format hh:mm:ss.  For
         example, if the script was to be run at 3:10 pm, you would
         enter 15:10:00 as the time.  Next indicate which day the
         script is to be run by putting a Y in the corresponding box
         of the days and months the script is to be run.  Press F3 to
         save and escape to exit without saving.

         The event name will then be listed on the screen along with
         the Frequency, Time to be run, and Keyboard script file name.


                                PAGE 8


         7. Edit an Event

         Select this option to edit a keyboard script in the schedule
         of events.  You must highlight the script and press enter.
         This will allow the editing features for each specific
         frequency type.

         8. Clear an Event

         Select this option to remove a script from the schedule of
         events.  You must highlight the script and press enter.  The
         script will then be removed from the schedule.

         III.  Exit to PEScheduler

         After selecting to exit to the PEScheduler you will be
         prompted to enter a Keyboard Event List file to load.  This
         will be loaded and all keyboard scripts contained in the
         Event list be will executed when the time occurs as setup in
         the event list.

         Any prior Keyboard Event List loaded will now be unloaded and
         replaced with the file given.  The Keyboard scripts contained
         in the event list given will be listed along with the
         frequency and next date and time to be executed.  Up to eight
         scripts can be contained in one event list.  The Event
         Scheduler may also be loaded from your PEP prompt by entering
         the following:

                              PES filename

         The filename will use the default extension of KEL.  You may
         also unload the schedular from your PEP prompt by typing the
         following:

                              PEP -R

         IV.  Exit to PERecorder

         After selecting to exit to the PERecorder you can activate
         the Recorder by pressing CTRL+ESC.  Then you have the option
         to Begin, End, Flush, or Save a keyboard script.  You also
         have the option to unload the Recorder from memory.  You will
         be able to get the recorder menu options by pressing CTRL+ESC
         until you unload the Recorder from memory.

         The Recorder may also be loaded from your DOS prompt by
         entering the following:

                              PER

         A. Begin Script

         Selecting this option will tell the recorder to start saving
         all keystrokes entered.  You should get to the point you want
         to start capturing keystrokes and then activate the recorder
         and begin the script.

                                PAGE 9


         B. End Script

         Selecting this option will tell the recorder to quit
         capturing anymore keystrokes.  You should then save the
         script or you may want to flush the script and begin a new
         one.

         C. Flush Script

         This will flush all keystrokes captured and you may start the
         capturing over again from step one.

         D. Save Script

         This option will allow you to save the keystrokes that you
         have been capturing.  The keystrokes will be saved in a file
         named PER.KBS.  This is the default file name.  You may then
         edit the keyboard script through the edit keyboard scripts
         option and use the Save As option to rename it to another
         name.

         E. Unload Recorder

         This option will unload the recorder from memory.  You will
         no longer be able to activate the recorder with CTRL+ESC.
         You must reload it with PER.  You may also unload the
         Recorder by typing the following at your PEP directory:

                              PER -R








                                PAGE 10
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
                                  INVOICE
   Remit to:                                     From:
                                                 __________________________
   Painless Accounting
   Kendall B. Pierce                             __________________________
   4401 Birdsong
   Plano, TX 75093                               __________________________
                                                 Phone: (   )    -

   Qty                                                  Unit Price    Total
   ___     Painless Accounting Version 5.0/Registration  $125.00      _____
             (includes printed manual and 3 ring binder)

   ___     Painless Payroll/Registration                 $ 75.00      _____
             (includes printed manual and 3 ring binder)

   ___     Painless Accounting/Payroll Companion/Reg.    $ 45.00      _____
            A custom graph/report/export generating program
            for use with Painless Accounting and Payroll
             (includes printed manual)

   ___     Painless Menu Manager- A HardDisk Menu System $ 20.00      _____
             (includes printed manual)

   ___     Painless Accounting Home Version/Registration $ 64.95      _____
             (includes printed manual)

   ___     Painless Accounting Version 5.0/Shareware     $ 10.00      _____

   ___     Painless Payroll/Shareware                    $ 10.00      _____

   ___     Painless Accounting/Payroll Companion/Share   $  7.50      _____

   ___     Painless Accounting Home Version/Shareware    $  7.50      _____

   ___     Registration for Painless Accounting/Painless
           Payroll and Painless Companion                $200.00      _____
           (includes printed manuals and 3 ring binders)

   ___     Painless Event Scheduler/Registration         $ 45.00      _____
             (includes printed manual)

   ___     Painless Event Scheduler/Shareware            $  5.00      _____
                                                        SubTotal      _____

                        (On Registered Products Only)   Shipping       5.00
                        (Outside USA please add $5.00)
                            Texas Residents please add sales tax      _____

                                                           Total      _____
   ___Check ___Money Order ___Cashier Check ___M/C ___Visa ___Amex
   ___Dinners Club ___Carte Blanche
   Card Holder: _______________________________________________________
   Card Number: _______________________________ Exp: _____/_____
   DISCOUNT INFORMATION: Upload a shareware copy of the program your are
   registering to any BBS that does not currently have a copy, and
   take a 5% discount on your order.
   BBS Name:_________________  BBS Number: (___)_____-_________
   All sales are final. Thank you for your order.

```
{% endraw %}

## SITE.DOC

{% raw %}
```


    Site License information for the Painless Event Processor. Site
    License includes one diskette and printed manual.

      4 to   9 computers @ $38 each    # of computers ___x 38   ______
     10 to  24 computers @ $34 each    # of computers ___x 34   ______
     25 to  49 computers @ $28 each    # of computers ___x 28   ______
     50 to  99 computers @ $25 each    # of computers ___x 25   ______
    100 or more computers @ $2500 one time fee                  ______

    Extra program and diskettes available for $2.00 per copy, with
    each site license purchase.


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```





            P A I N L E S S  E V E N T  S C H E D U L E R
            ---------------------------------------------


               V E N D O R    I N F O R M A T I O N
              --------------------------------------


             Copyright (c) 1990 by Painless Accounting.
                       All Rights Reserved.


                  Last updated:  February, 1991


This file provides information for Shareware Distributors, Disk
Vendors and Computer Clubs who wish to distribute the
Painless Event Processor package.

Individual and Company Users:  Please refer to REGISTER.TXT for
information.

-----------------------------------------------------------------
                        Table of Contents
-----------------------------------------------------------------

Part 1:  Program Information:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   Program Name, Category, Keywords ........................... 2
   Short Description .......................................... 2
   Long Description ........................................... 2
   Quotes from Reviews, Articles and Users .................... 2
   Registration Information ................................... 2
   Author/Publisher Information ............................... 3

Part 2:  Distribution Requirements:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   Limited Distribution License ............................... 4
   ASP Associate (Disk Vendor) Member Information ............. 6
   Other (Non-ASP) Disk Vendor Information .................... 7
   Computer Clubs ............................................. 8
   Disk-of-the-Month (or Subscription) Distribution ........... 8
   CD-ROM and Other Collections ............................... 8
   Please Help Us Serve You Better ............................ 9



Vendor/Distributor Information                       Page 1 of  9


          - Painless Event Scheduler          - Vendor.DOC -


-----------------------------------------------------------------
                  Part 1:  Program Information:
-----------------------------------------------------------------


Program Name, Category, Keywords:
---------------------------------
   PAINLESS EVENT SCHEDULER - Disk/Utilities

   SCHEDULER, EVENT, PROCESSOR, TASKS, AUTOMATIC, TIMED, KEYBOARD,
   KEYSTROKES, MOUSE, HELP, ASP


Short Description:
------------------


   PAINLESS EVENT SCHEDULER - The Painless Event Scheduler is a
   revolutionary concept in computer software. The Painless Event
   Processor allows your PC to work 24 hours a day. You simply tell
   the event processor when to execute programs, batch files, tasks,
   utilities, etc. and at the specified time the keystrokes will be
   entered into your computer as if you were sitting at the keyboard
   yourself. The Painless Event Processor sits in memory (using only
   10K), waiting for the real-time clock to trigger an event.
   You can schedule upto eight events at one time. The Painless Event
   Scheduler also comes with a Keystroke Caputuring System. So, you can
   simply load the keystroke caputuring program and start running your
   tasks. When your tasks are complete the keystrokes are automatically
   saved to a file, ready to be scheduleed at anytime. Includes context
   sensitive help, and mouse support. Registration is $45.00, which     
   includes a printed manual.



Registration Information:
-------------------------

   For complete user registration information please refer to the
   REGISTER.TXT text file.





Vendor/Distributor Information                       Page 2 of  9


          - Painless Event Scheduler          - Vendor.DOC -


Author/Publisher Information:
-----------------------------

Painless Accounting is a small software company owned by Kendall B.
Pierce.

At Painless Accounting we are committed to producing quality, user
friendly software, at a reasonable price.

We have been in business since 1988.

Please feel free to contact me (Kendall B. Pierce) at any time if you
have any questions, comments or suggestions.  I can be reached by mail
at the following address:

   Kendall B. Pierce
   Painless Accounting
   4401 Birdsong
   Plano, TX 75075


I can also be reached by voice or electronically as follows:

   Phone:        (214) 596-9164
   FAX:          (214) 596-9164

   CompuServe:   70337,3337

   GEnie:        K.PIERCE7




















Vendor/Distributor Information                       Page 3 of  9


          - Painless Event Scheduler          - Vendor.DOC -


-----------------------------------------------------------------
                Part 2:  Distribution Requirements
-----------------------------------------------------------------




Limited Distribution License:
-----------------------------

As the exclusive copyright holder for Painless Event Scheduler,
Painless Accounting authorizes distribution only in accordance with
the following restrictions.  Please refer to the additional
information listed below which is specific to ASP and non-ASP
Disk Vendors, Computer Clubs, and Disk-of-the-Month style
distribution.

The Painless Event Scheduler package is defined as containing all the
material listed in the README.1ST text file.  If any files
listed in the README.1ST text file, or the README.1ST file
itself, are missing, then the package is not complete and
distribution is forbidden.  Please contact us to obtain a
complete package suitable for distribution.

    o  The Painless Event Scheduler - including all related program
       files and documentation files - CANNOT be modified in any
       way and must be distributed as a complete package, without
       exception.  The README.1ST text file contains a list of
       all files that are part of the Painless Event Scheduler.

    o  No price or other compensation may be charged for the
       Painless Event Scheduler. A distribution cost may be
       charged for the cost of the diskette, shipping and
       handling.

    o  The Painless Event Scheduler CANNOT be sold as part of some
       other inclusive package.  Nor can it be included in any
       commercial software packaging offer, without a written
       agreement from Painless Accounting.  For information on
       combining the Painless Event Scheduler with related programs
       to form a "disk-set", please refer to the information below for
       ASP or non-ASP Disk Vendors.





Vendor/Distributor Information                       Page 4 of  9


          - Painless Event Scheduler          - Vendor.DOC -


    o  The PRINTED User's Guide may not be reproduced in whole or
       in part, using any means, without the written permission
       of Painless Accounting.  In other words, the disk-based
       documentation may not be distributed in PRINTED (hardcopy)
       form.

    o  The Painless Event Scheduler cannot be "rented" or "leased"
       to others.

    o  The person receiving a copy of the Painless Event Scheduler
       MUST be made aware that each disk or copy is ONLY for
       evaluation, and that Painless Accounting has not received any
       royalties or payment for the product.  This requirement
       can be met by including the complete Painless Event Scheduler
       package, which contains any appropriate registration
       reminders.

    o  The person receiving a copy of the Painless Event Scheduler
       MUST be made aware that he or she does not become a
       registered user until Painless Accounting has received
       payment for registration of the software.  This
       requirement can be met by including the complete
       Painless Event Scheduler, which contains any appropriate
       registration reminders.

    o  Painless Accounting prohibits the distribution of outdated
       versions of the Painless Event Scheduler, without written
       permission from Painless Accounting.  If the version you have
       is over twelve (12) months old, please contact us to
       ensure that you have the most current version.  This
       version was released in February, 1991.

    o  Licensee shall not use, copy, rent, lease, sell, modify,
       decompile, disassemble, otherwise reverse engineer, or
       transfer the licensed program except as provided in this
       agreement.  Any such unauthorized use shall result in
       immediate and automatic termination of this license.

    o  U.S. Government Information:  Use, duplication, or
       disclosure by the U.S. Government of the computer software
       and documentation in this package shall be subject to the
       restricted rights applicable to commercial computer
       software as set forth in subdivision (b)(3)(ii) of the
       Rights in Technical Data and Computer Software clause at
       252.227-7013 (DFARS 52.227-7013).  The
       Contractor/manufacturer is: Painless Accounting
                                   4401 Birdsong
                                   Plano, TX 75075

All rights not expressly granted here are reserved to
Painless Accounting.



Vendor/Distributor Information                       Page 5 of  9


          - Painless Event Scheduler          - Vendor.DOC -


The following additional information and restrictions are
intended for Shareware Distributors, Disk Vendors, and Computer
Clubs who wish to distribute the Painless Event Scheduler.


ASP Associate (Disk Vendor) Member Information:
-----------------------------------------------

Vendors who are ASP Associate Members in good standing are hereby
given permission to distribute the Painless Event Scheduler in
accordance with the Distribution Restrictions listed above.  ASP
Associate Members (often called "ASP Approved Vendors") in good
standing do not need to request permission to distribute this
package.

This permission is in effect until or unless we notify you
otherwise, in writing.

If your address, as listed in the ASP Vendor Catalog is
incorrect, please send us your current address so we can ensure
that you always have the most current version (mailed in a sealed
envelope).  ASP Associate Members in good standing will receive
free upgrades for all shareware products developed and
distributed by Painless Accounting.

ASP Vendor Members - Disk Sets:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ASP Vendor Members who wish to distribute the Painless Accounting
package as part of a collection (such as PsL's MegaDisk set, or a
CD-ROM package) may do so provided that all the other
restrictions listed above are met.  Please check the release date
of the version you have.  If the version is over twelve (12) months
old then please contact us to ensure that you have the most
current version.  This version was released in December, 1990.



















Vendor/Distributor Information                       Page 6 of  9


          - Painless Event Scheduler          - Vendor.DOC -


Other (Non-ASP) Disk Vendor Information:
----------------------------------------

Shareware Distributors and Disk Vendors who are not ASP Associate
Members, but who wish to distribute the Painless Event Scheduler
must comply with the following restrictions (in addition to those
listed above, beginning on page 4).

In order for us to ensure that only current versions are
distributed, we require that you request permission from us
(Painless Accounting) to distribute any of our products.

You may not list any of our products in advertisements, catalogs,
or other literature which describes our products as "FREE
SOFTWARE".  Shareware is "Try-Before-You-Buy" software, it is not
free.

When making your request please ensure that we have your correct
address and phone number, as well as the name of the person we
may contact if necessary.

Other (Non-ASP) Vendors - Disk Sets:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Vendors (non-ASP Vendor Members) who wish to distribute the
Painless Event Scheduler as part of a collection (such as PsL's
MegaDisk set, or a CD-ROM package) must obtain permission from
Painless Accounting prior to beginning such a distribution.

Applying for ASP Associate Membership:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to apply for ASP Associate Membership, simply
write to the following address and request a Vendor Application
Package:

   Executive Director
   ASP
   P.O. Box 5786
   Bellevue, WA  98006
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP
   Executive Director 71327,2051.

If you (Non-ASP Vendors) would like to be placed on our mailing
list for future upgrades to any of our products, please refer to
the "Vendor Update Program", described below.







Vendor/Distributor Information                       Page 7 of  9


          - Painless Event Scheduler          - Vendor.DOC -


Computer Clubs:
---------------

Computer Clubs and User Groups wishing to add the Painless Accounting
package to their disk library may do so in accordance with the
Distribution Restrictions listed above (beginning on page 4).

If the version you have is over twelve (12) months old, please
contact us to ensure that you have the most current version.

If you would like your Computer Club or User Group to be placed
on our mailing list for future upgrades to any of our products,
please contact us for complete details.  Our address, phone
number, and CompuServe User ID number is listed above (page 3).


Disk-of-the-Month (or Subscription) Distribution:
-------------------------------------------------

If you would like to distribute the Painless Event Scheduler as a
Disk-of-the-Month, or as part of a subscription or monthly
service, then the following restrictions apply:

ASP Associate (Disk Vendor) Members in good standing are hereby
given permission to distribute the Painless Event Scheduler under
the Disk-of-the-Month style of distribution.

Others (non-ASP Members) must contact us in advance to ensure
that you have the most current version of the software.

You cannot use a Disk-of-the-Month distribution to use up your
inventory of old (out of date) disks.  Only current versions may
be shipped as Disk-of-the-Month disks.  This version was released
in December, 1990.


CD-ROM and Other Collections:
-----------------------------

If you wish to add any of our programs to a CD-ROM or other
collection, please check the release date of the version you
have.  If the version is over twelve (12) months old then please
contact us to ensure that you have the most current version.
This version was released in December, 1990.

ASP Vendor Members who wish to distribute the Painless Accounting
package as part of a collection (such as PsL's MegaDisk set, or a
CD-ROM package) may do so provided that all the other
restrictions listed above are met.




Vendor/Distributor Information                       Page 8 of  9



          - Painless Event Scheduler          - Vendor.DOC -


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding
Painless Accounting.  Please send us a copy of any reviews, articles,
catalog descriptions, or other information you print or
distribute regarding the Painless Event Scheduler.  Thank you for
your time and assistance and for supporting the shareware
marketing concept.

Please refer to page 3 for our mailing address and phone number.
Thank you for your support!









































Vendor/Distributor Information                      Page  9 of  9


```
{% endraw %}

## WARRANTY.DOC

{% raw %}
```


          ***************** IMPORTANT WARRANTY INFORMATION ****************




                    *** PLEASE READ THIS INFORMATION CAREFULLY ***
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



          TRIAL USE (SHAREWARE EVALUATION VERSION) WARRANTY:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          The Shareware evaluation (trial use) version is provided AS IS.
          Painless Accounting MAKES NO WARRANTY OF ANY KIND, EXPRESSED OR
          IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF
          MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.



          REGISTERED VERSION ONLY WARRANTY:
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Painless Accounting warrants the physical diskette(s) and
          physical documentation provided with registered versions to
          be free of defects in materials and workmanship for a period
          of sixty days from the date of registration.  If Painless
          Accounting receives notification within the warranty period
          of defects in materials or workmanship, and such
          notification is determined by Painless Accounting to be
          correct, Painless Accounting will replace the defective
          diskette(s) or documentation.

          The entire and exclusive liability and remedy for breach of
          this Limited Warranty shall be limited to replacement of
          defective diskette(s) or documentation and shall not include
          or extend to any claim for or right to recover any other
          damages, including but not limited to, loss of profit, data,
          or use of the software, or special, incidental, or
          consequential damages or other similar claims, even if
          Painless Accounting has been specifically advised of the
          possibility of such damages.  In no event will Painless
          Accounting's liability for any damages to you or any other
          person ever exceed the lower of suggested list price or
          actual price paid for the license to use the software,
          regardless of any form of the claim.

          Painless Accounting SPECIFICALLY DISCLAIMS ALL OTHER
          WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
          TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY AND/OR FITNESS
          FOR A PARTICULAR PURPOSE.


          ***************** IMPORTANT WARRANTY INFORMATION ****************


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2652

     Volume in drive A has no label
     Directory of A:\

    PEP      EXE    165924   3-16-91   9:57a
    PES      EXE     12716   2-17-91   3:02p
    PER      EXE      7878   2-17-91   3:02p
    PEP      HLP     14285   3-07-91   7:21p
    README   1ST      2499   3-12-91   6:16p
    CHKDSK   KBS        37   2-13-91   7:39a
    CHKDSK   KEL      1008   2-13-91   7:41a
    NRTON_DS KBS        39   2-13-91   7:20a
    NRTON_SD KBS        31   2-13-91   7:21a
    NITELY   KEL      1008   2-13-91   7:22a
    REGISTER TXT      2888   3-18-91  11:30p
    VENDOR   DOC     15923   2-21-91   2:05p
    WARRANTY DOC      2514  12-06-90   5:33p
    SITE     DOC       596   2-21-91   2:05p
    MANUAL   TXT     28568   3-11-91  10:49p
    FILE2652 TXT      2665   6-11-91  11:41a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1002   6-11-91  11:51a
           18 file(s)     259619 bytes
                           54272 bytes free
