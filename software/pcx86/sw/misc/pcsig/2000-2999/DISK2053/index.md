---
layout: page
title: "PC-SIG Diskette Library (Disk #2053)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2053/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2053"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUPERMENU"

    Tired of wasting time searching through subdirectories on your hard
    drive to find the name of the program you wanted to run?   Don't want
    to spend hours and hours trying to outwit a complicated menu system?
    SUPRMENU offers a comprehensive hard drive menu system basic enough for
    those interested in using minimal DOS commands to organize their files,
    yet with capabilities advanced DOS users will appreciate.
    
    SUPRMENU offers an on-line pop-up help menu, file name search,
    subdirectory name search, a batch editor, runtime parameter ability, and
    a subdirectory menu structure.  Menu choices can be nested as deep as
    50 sub-menus down, and full support is provided for the Microsoft
    mouse.
    Both beginners and experienced hard drive owners will find SUPRMENU an
    efficient hard drive management tool.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2053.TXT

{% raw %}
```
Disk No: 2053                                                           
Disk Title: SuperMenu                                                   
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: SuperMenu                                                
Author Version: 2.10                                                    
Author Registration: $25.00                                             
Special Requirements: Color graphics (CGA,EGA,VGA) recommended.         
                                                                        
Tired of wasting time searching through subdirectories on your hard     
drive to find the name of the program you wanted to run?   Don't want to
spend hours and hours trying to outwit a complicated menu system?       
SUPRMENU offers a comprehensive hard drive menu system basic enough for 
those interested in using minimal DOS commands to organize their files, 
yet with capabilities advanced DOS users will appreciate.  SUPRMENU     
offers an online pop-up help menu, file name search, subdirectory name  
search, a batch editor, runtime parameter ability, and a subdirectory   
menu structure.  Both beginners and experienced hard drive owners will  
find SUPRMENU an efficient hard drive management tool.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SUPRMENU.DOC

{% raw %}
```









                             SuperMenu
                         Version 2.0 - 2.1


                        by Frank S. Gioffre





          A hard-disk menu program for all types of users.

               EASY to set up and use for beginners.

    VERSATILE and POWERFUL for intermediate and advanced users.





































SuperMenu
Version 2.0

                         TABLE OF CONTENTS

SHAREWARE LICENSE & COPYRIGHT..........................Page 1

INTRODUCTION ..........................................Page 2

INSTALLING SUPERMENU ..................................Page 3

THE MAIN MENU .........................................Page 4

MENU MODIFICATION .....................................Page 5

HELP !! ...............................................Page 6

TUTORIAL ..............................................Page 9

REGISTRATION ..........................................Page 11

REGISTRATION FORM .....................................Page 13

REGISTRATION SURVEY ...................................Page 14




































SuperMenu                                              Page 1
Version 2.0

                   SHAREWARE LICENSE & COPYRIGHT


              SuperMenu IS NOT public domain software.

                       SuperMenu IS NOT FREE.

SuperMenu is shareware, and as such may be distributed freely, in
its original, unmodified form.  You are allowed to copy, install,
and evaluate SuperMenu freely.  If you like SuperMenu, you are
expected to pay for it.  The modest fee is much less than the cost
of similar commercially available programs.  You are compensating
the author for the many hours of labor spent writing, testing, and
debugging the final software version that you are using.

You can think of shareware as software that you may test before
buying.  You can use it to its fullest capability.  If you decide
you don't like it, then get rid of it or give it to a friend; with
no further obligation.  If you do like it and decide to keep and
use it, simply fill in the registration form and send in the
required payment.  See registration section for further details.

SuperMenu is copyrighted with all rights belonging to COMRES and
Frank S. Gioffre.  SuperMenu may not be disassembled, recompiled,
or modified in any way without the prior express written consent of
the author.  Any breach of these statements is a violation of the
law.

WARRANTY:

If the disk is purchased from COMRES then the disk itself is
warranted to be free from defects for a period of ten years from
original purchase.  This warranty applies only to the original
purchaser and is void upon transfer.  During this period COMRES
will replace the disk for free within the first 90 days after
purchase.  After 90 days COMRES will replace the disk with program
for 50% of the current retail price of SuperMenu.

COMRES provides no other warranty of any kind for this product,
either express or implied.  Neither COMRES nor the author shall be
held liable for any damages, whether consequential or
inconsequential.  Such damages include but are not limited to loss
of use, business, profits, data or other intangible items.  Some
states do not allow  the exclusion or limitation of consequential
or inconsequential damages, therefore the above limitations may not
apply to you.











SuperMenu                                              Page 2
Version 2.0


                            INTRODUCTION


     SuperMenu is a hard-disk menu program designed to isolate the
user from the cryptic and quite unfriendly DOS (Disk Operating
System) commands.  SuperMenu does this by allowing you to run any
program on your hard drive with as little as one keypress.  Many
DOS commands can also be executed directly from SuperMenu.

     Beginners will like SuperMenu because it is easy to install
and configure.  It also allows beginners to do almost any DOS task
without having to remember those complex command structures.  Of
course, even a program as simple as SuperMenu may at times be
confusing to beginners; so SuperMenu allows you to access and view
this manual at any time while using SuperMenu.

     Advanced users who have no problems dealing with DOS will also
like SuperMenu because it will speed up their operation.  Once set
up, SuperMenu allows any task to be accomplished with just a few
keypresses from the menu screens.  No more having to remember what
subdirectory a program is in, or exactly what its name is.

     Overall, SuperMenu should allow any user to accomplish their
task in a more efficient and pleasant manner.
































SuperMenu                                              Page 3
Version 2.0


                        INSTALLING SUPERMENU


     Installation is made simple by a program on the distribution
diskette.

BEGINNERS: Please consult your computer users' guide on details of
           starting up the computer and using the floppy disk
           drives.

     Put the SuperMenu diskette in your A: drive and type in
A:INSTALL .  This runs a small program which will create a
subdirectory on your C: drive, and copy the SuperMenu program over
to it.  It also creates some files which SuperMenu needs to
function properly.  SuperMenu WILL NOT WORK if you do not use the
INSTALL program!

     Optionally the INSTALL program will modify and/or create your
AUTOEXEC.BAT file to allow SuperMenu to come up whenever you reboot
your computer.
__________________________________________________________________
BEGINNERS:  You should answer both of INSTALL's questions with a Y.
            This will allow you to be totally isolated from DOS.
__________________________________________________________________
ADVANCED:   The two questions that the INSTALL program ask
            determine whether or not it should modify your
            autoexec.bat file.  The first question asks whether to
            modify your PATH statement.  If answered with a Y then
            SuperMenu will either create or modify your PATH
            statement to include the C: drive root directory.  This
            is necessary in order to be able to run SuperMenu from
            any directory on your hard drive.  The second question
            asks if you would like SuperMenu to run each time you
            reboot your computer.  If answered with a Y then
            SuperMenu will append the command SM to the last line
            of your AUTOEXEC.BAT file.  SM calls the batch file
            which runs SuperMenu.
__________________________________________________________________

     If you are currently using some other menu program, you must
first make sure that it does not get run by your AUTOEXEC.BAT file.
Consult the documentation of the other program for details.

    Upon successful installation, simply reboot your computer to
make the aforementioned changes effective.  Those who chose to have
SuperMenu come up every time will now see the Main Menu.  Others
will simply be at the DOS prompt.  For those at the DOS prompt, you
may run SuperMenu by typing SM .








SuperMenu                                              Page 4
Version 2.0


                           THE MAIN MENU


     When you first start up SuperMenu, you will see the Main Menu
Screen.  Being that you have not yet entered any data, you will see
"NO CHOICES AVAILABLE".  Before we enter any data let's get
familiar with the Main Menu Screen.

     The top left hand corner tells you which version of SuperMenu
you have.  The box at the top center of the screen outlines the
name of the screen you are currently on.  In the very center of the
screen is the menu from which you will be making all your
selections.  On the bottom line of the screen are the other keys
which have some meaning.

     The function keys listed at the bottom of the Main Menu Screen
are:

<ESC> Exit SuperMenu and return to DOS.

<F1>  Help brings this manual up on the screen.  You can scroll
      through the manual to find whatever you may need.

<F4>  Modify Menu : This is the choice you will be using to change
      the menu selections.

<F5>  DOS Shell: SuperMenu exits to DOS but remains resident in
      memory.  Useful when you need to get out to DOS to do one or
      two quick things.  The benefit of DOS Shell is that SuperMenu
      will pop right back up when you type EXIT at the DOS prompt.
      The disadvantage is that a chunk of memory is taken up by
      SuperMenu, so you should not be running other applications
      from the DOS Shell.

    The Main Menu allows you to pick any selection you want to run
in two ways.  First, you may type the letter of the choice you
desire.  Secondly, you may highlight the choice you desire by using
the up and down arrow keys and then hitting the <ENTER> key.
Either method gives the same results.

MOUSE USERS:
    To pick a selection on the Main Menu or any other menu, simply
move the mouse cursor to the desired selection and click once with
the left button.  You may also click on the bottom line of the
screen to activate the listed choices (Quit, Modify Menu, Help or
DOS Shell).  Simply move the mouse cursor to the desired choice and
click once with the left button.









SuperMenu                                              Page 5
Version 2.0

                         Menu Modification

    You modify the menu structure and choices in the Menu
Modification screen.  You get to this screen by hitting <F4> while
on a normal menu screen.  The menu modification screen has a
similar layout to the other screens in that most of the available
options are listed on the last line of the display.  The choices
immediately visible are:

<ESC> Return to the Main Menu.

<F2>  Delete Choice :  Allows you to delete a selection from the
                       list.

<F1>  Help:  Brings up the help screen.

You may also use the <INSERT> key to toggle between INSERT and
OVERTYPE mode.  In INSERT mode any text you type will be inserted
at the current location (nothing disappears).  In OVERTYPE mode any
text you type will write over the text that was previously in that
location.

    In modifying any menu you may add choices which are either
programs that you wish to run, or you may add SUB-MENUS which
contain programs of a certain type or group.  SUB-MENUS allow you
to structure your SuperMenu in an efficient and orderly manner.
There is a limit of 100 total sub-menus in SuperMenu.  At 15
choices per menu that means that you can have SuperMenu keep track
of over 1400 individual programs on your hard drive(s).  Take note
that SUB-MENUS may be created within other SUB-MENUS, which allows
you to create a complex tree structure.  This is quite different
than many other Menu products which only allow one level of SUB-
MENUS.

    The 4 columns on the menu-modification screen are where you
enter the data for any program or SUB-MENU.  You may move from one
column to the next with the <TAB> key.  The <SHIFT><TAB> key moves
you in the reverse direction.  You may move sideways inside a
column by using the right and left arrow keys.  You may move up and
down in a column by using the up and down arrow keys.  Note that
SuperMenu will not let you move to a location where there is no
text.

MOUSE USERS:
    Simply move the mouse cursor to the column and row position you
desire and click on the left button.

The first column is where you type in the application or SUB-MENU
name.  Pick any name which accurately describes that selection.








SuperMenu                                              Page 6
Version 2.0

    The second column contains the drive letter on which that
application resides.  Most of the time that will be C.  If you are
creating a SUB-MENU, put an asterisk (*) in this column.  SuperMenu
will create the SUB-MENU with the name you chose.  Note that the
third and fourth columns are not applicable for a SUB-MENU.

    The third column contains the directory in which the program
resides.  You may either type in the full directory name or use the
SuperMenu DirecTree feature.  The DirecTree is activated by
pressing the <F4> key while in the third column.  It will bring up
a screen with all the directories on the drive specified.  You may
scroll through the list if it is bigger than the screen.  To pick a
directory, simply move the highlight bar to that choice and press
the <ENTER> key.  This will switch you to that directory and show
you any subdirectories.  When you are in the directory you desire,
simply press <ENTER> on the first line of the listing.  If you need
to go back one directory simply press <ENTER> on the ".." listing,
which when present is on the second line.  When you pick a choice,
it will be pasted back onto the Menu Modification screen.  HINT: To
pick a directory without going to the its subdirectories, simply
hit the <ENTER> key twice.

MOUSE USERS:
    Simply point to the directory you desire and click on the left
button.  Scroll through list by clicking on the up and down arrows
on the bottom line of the screen.

    The fourth column contains the file name.  This must be a file
which can be run from DOS (either .EXE, .COM, or .BAT).  You may
type in the name (without extension) yourself or you may use the
SuperMenu File Search feature.  You may use File Search by pressing
the <F5> key while in the fourth column.  This will bring up a list
of all the valid file names from the drive and directory specified.
You can scroll through the list with the up and down arrow keys.
You pick any selection by moving the highlight bar to that
selection and pressing the <ENTER> key.  The selection name is
immediately pasted to the Menu Modification screen.

    When you are done editing the menu, press the <ESC> key.  If
any changes were made, SuperMenu will ask you if you want to keep
the changes.  Press the Y key if you are satisfied with your
changes.  Pressing the N key will result in a loss to any and all
changes that were just made.

    The procedure in modifying a SUB-MENU is exactly the same.  You
first create the SUB-MENU by naming it and putting an asterisk in
the second column as outlined above.  You then exit the menu
modification screen and pick that SUB-MENU.  You will see the SUB-
MENU screen with "NO CHOICES AVAILABLE".  You now press the <F4>
key to modify that SUB-MENU.







SuperMenu                                              Page 7
Version 2.0

_________________________________________________________________
ADVANCED USERS:
    While in the fourth column you may also choose to create or
modify a listed batch file.  This feature allows you to edit small
batch files without having to use DOS.  Simply hit the <F3> key.
The file will be displayed if it exists, or it will be created if
it does not exist.  You may then edit it to your satisfaction.  Be
cautioned that:

    1.  This feature is only for small batch files.  Editing very
        large batch files will cause them to be truncated.
    2.  If you create a batch file with the same name as a program
        file, it may cause SuperMenu difficulty.  This is a
        peculiarity of DOS that does not allow running of batch
        files with the same name as a program file.

    Another advanced feature is that of passable parameters.  Again
while in the 4th column, you may put a percent sign (%) anywhere
after the program name.  SuperMenu will interpret this as a request
for run-time passable parameter.  When you then choose that
application from the menu SuperMenu will stop and allow you to
enter a parameter.  That parameter will then be inserted in the
command line and passed to the application.

    As an example, if you were to use Microsoft Word as your word
processor, the fourth column might look like:  WORD %
This would then allow you to enter the name of the document you
want to edit whenever you call up Word.
_________________________________________________________________
BEGINNERS:
    It is strongly advised that you go through the short tutorial
session in this manual before modifying menus on your own.  The
tutorial takes you through a menu modification from start to
finish.  Not only will it acquaint you with this process, but it
will give you a working SUB-MENU of DOS utilities which you will
use most frequently.
_________________________________________________________________




















SuperMenu                                              Page 8
Version 2.0

                              HELP !!

    No matter how simple a program is to use, someone may always
need help in a certain area.  That is why SuperMenu provides you
with on-line context-sensitive help.  This means that you can
request help by pressing the <F1> key at any point in SuperMenu.
By doing this, you will pop up a window in which you can view this
entire manual.  The manual will initially be on the page
corresponding to the area of the program which you are currently
at.  This usually means not having to scroll though a lot of text
to get to what you need.  In the case that you need help in another
area, the Table of Contents is one keypress away (just press the T
key).  Similarly, the first 9 pages of this manual can be accessed
directly by pressing the associated number key (1-9).  You may also
move around by using the <PAGE UP>, <PAGE DOWN>, up arrow, and down
arrow keys.  With all these controls, any help you need shouldn't
be more than a few keystrokes away.

    But what if after reading everything in the manual, you are
still confused?  Simple:

All REGISTERED users are encouraged to contact the author directly
for any help they may need.  Your questions will be answered
promptly and courteously.  Here is how to contact the author, in
order of preference.

1)  Electronic communication:

    The author may be left mail on the Prodigy service.  Leave all
    mail to ID XSVK12A  (Frank Gioffre).  Please specify your exact
    problem and allow 24 hours for a response.
    COMING SOON: The COMRES BBS; all registered users will be
                 notified.

2)  U.S. Mail:   Send all inquiries to: COMRES
                                        P.O. Box 1225
                                        Lakehurst, NJ  08733
    Please allow 10 days for forward and return mail times.

3)  Facsimile:  You may FAX your question to COMRES.  Simply use
                any GROUP III compatible FAX machine and dial
                (609) 567-7898.  This is an automatic machine.
                Please include your fax number for response.
                Response given within 24 hours.

4)  Telephone:  Call the author direct at (609) 567-7927.  Leave a
                message describing your problem and you will get a
                response within 24 hours.
   SUPER QUICK 1-HOUR RESPONSE SERVICE AVAILABLE FOR SLIGHT FEE.
                          CALL FOR DETAILS







SuperMenu                                              Page 9
Version 2.0

                              TUTORIAL

    In this section you will be taken through the process of
creating and implementing a SUB-MENU, step by step.

1)   Start SuperMenu either by rebooting your computer or typing in
SM and pressing the <RETURN> key at the DOS prompt.  You will now
be looking at the MAIN MENU screen.  There should be NO CHOICES
AVAILABLE for you to choose from.

2)  We want to add some choices to the menu so we press the <F4>
key.  This takes us to the MENU MODIFICATION screen.  It also
should be without any entries.  The red highlighted block should be
located in the first row, first column, directly below the words
"Application Name:".  This is where we will enter the name for the
first SUB-MENU that we will create.

3)  Type in the words DOS UTILITIES and then press the <TAB> key.
You will now be in the second column, directly under the word
"Drive:".  This is where we tell SuperMenu that "DOS UTILITIES" is
to be a SUB-MENU.  That is done by pressing the asterisk (*) key.
You will immediately see text appear in the third and fourth
columns, indicating that you have chosen to create a SUB-MENU.

4)  We now want to exit the MENU MODIFICATION screen.  Press the
<ESC> key once, and press the Y key to answer the "Keep Changes?"
question.

5)  You will now be at the MAIN MENU screen again.  Only this time
you see the choice "DOS UTILITIES".  Select "DOS UTILITIES" by
pressing the <RETURN> key.

6)  You are now at the "DOS UTILITIES" SUB-MENU.  Again there are
NO CHOICES AVAILABLE because we have yet to put them in.  We do so
by first pressing the <F4> key.

7)  You are now back at the MENU MODIFICATION screen.  Start by
typing in the words COPY DISK and press the <TAB> key.

8)  Assuming that all your DOS programs are on your C: drive type
the letter C.  Now press the <TAB> key to get to column three.

9) At this point you want to see the subdirectories on your hard
drive, so press the <F4> key.  A window will pop up with a listing
of all the subdirectories on drive C:.

10)  You must now move the highlight block to the correct choice
and hit <RETURN> twice.  The correct choice depends upon how your
hard disk was set up.  You need to know which directory contains
all your DOS programs.  Usually this is a directory called DOS, or
perhaps BIN, or sometimes SYSLIB.  After picking the correct choice






SuperMenu                                              Page 10
Version 2.0

by pressing <RETURN> twice you will see your choice pasted into the
MENU MODIFICATION screen.

11)  At this point press the <TAB> key once to get to column four.

12)  You now want to see all the files in the directory you chose.
Do this by pressing <F5>.

13)  A window will pop up with the names of all the valid program
names.  Scroll through the list with the up and down arrow keys
till you highlight a choice called DISKCOPY.COM.  Select that
choice by pressing the <ENTER> key once.

     IF YOU CAN NOT FIND THE PROGRAMS SPECIFIED IN YOUR LIST, THEN
STOP AND HAVE SOMEONE SET UP A DOS SUBDIRECTORY ON YOUR HARD DRIVE.
RESTART THE TUTORIAL WHEN THIS HAS BEEN DONE.

14)  You will now be back at the MENU MODIFICATION screen.  Move
the cursor to the last position on the line by pressing the left
arrow key once.  We need to type in the proper parameters for this
command.  Press the <SPACE BAR> once. If you have two floppy disk
drives then type  A: B: and hit the <TAB> key.  If you have only
one floppy disk drive then type  A: A:  and hit the <TAB> key.

15)  You have now successfully entered your first selection.  You
     may proceed in entering the selections listed below by
     repeating steps 7 through 15 for each.  Substitute the proper
     phrases as applicable.  Do not type anything for the blank
     spaces.

             STEP 7         STEP 13        STEP 14

             FORMAT DISK    FORMAT.COM     A:
             SET TIME
             SET DATE

16)  Press the <ESC> key and press Y to answer the "Keep changes?"
     question.  YOU ARE DONE MODIFYING THE MENU.

17)  You now simply pick the desired choices from the menus.
     Follow the above steps for any other application programs you
     need to run.















SuperMenu                                              Page 11
Version 2.0

                            REGISTRATION

    Each copy of SuperMenu which is used on a regular-basis must be
registered.  One copy of SuperMenu must be registered for each
computer at a specific site.  Multiple copy discounts and site
licenses are available.  The current registration cost for
SuperMenu is $25.00 (through December 31, 1990).  Please fill in
the registration form , make out a check or money order payable to
COMRES and send it to:
                       COMRES
                       P.O. Box 1225
                       Lakehurst, NJ  08733

Why register?

    Other than being a violation of the law to not pay for this
program, official registration provides you with:

1) Your own serialized copy of SuperMenu and full documentation.

2) FREE technical assistance from the author.

3) Notice to updates.

4) Updates and future revisions at a greatly discounted cost.
   ** Future versions of SuperMenu may or may not be released as
      shareware, depending on the initial success of this process.
      Protect your interests and register now! **

5) Participation in the SuperMenu Profit Sharing Plan.
   Here is how the Profit Sharing Plan works.  When you send in
   your registration form, you will receive your own serialized
   copy of SuperMenu.  Make copies of your program and distribute
   it to friends, clubs, coworkers, electronic bulletin boards, and
   whoever else you can think of.  For every person that registers
   that copy and the next 4 generations of that copy, you receive
   one dollar.  This may not seem like much at first, but it adds
   up quite quickly.  Take an example of your copy generating ONLY
   five registrations and each of those generating five, and so on.

     YOUR COPY #00
      |
     COPY 1-----COPY 2------COPY 3------COPY 4-------COPY 5
        |         |           |           |            |
     COPY 6-10  COPY 11-15  COPY 16-20  COPY 21-25   COPY 26-30
      |||||      |||||       |||||       |||||        |||||
                        C O P I E S  3 1 - 1 5 5
      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                        C O P I E S  1 5 6 - 7 8 0
      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                        C O P I E S  7 8 1 - 3 9 0 5






SuperMenu                                              Page 12
Version 2.0

    You can see how just 5 copies per copy can bring you $3,905
total.  Of course most people can find many more than just 5
friends and associates to register the program.  In any case, the
initial $25.00 can easily be recouped in no time at all.

    Participation in the Profit Sharing Program is automatic upon
registration.  Profit Sharing payments are mailed out once a month
unless the amount is less than $10.00 .  In that case the amount is
held until it reaches at least $10.00 and then mailed.


BONUS OPPORTUNITIES:

    Any registered user who sends in the completed survey WITH the
registration form receives one FREE update.

    Users are encouraged to send in suggestions for improvements to
SuperMenu at all times.  Suggestions must be in written form (FAX
or mail).  Any suggestion incorporated into SuperMenu earns the
registered user(s) one FREE SuperMenu update.

    COMRES is committed to providing you with the easiest and most
powerful disk menuing system available.  In order to achieve that
goal we look to your suggestions and comments to guide us.  We take
each comment very seriously, and any good suggestions will try to
be incorporated into future versions of SuperMenu.































SuperMenu                                              Page 13
Version 2.1

                         REGISTRATION FORM

Name (Last, First, MI)  __________________________________________

Mailing Address:        __________________________________________
                        __________________________________________

           City:  ___________________, State: ____   Zip: ________

           Telephone #:   (_____)  _______-__________

Serial Number of your current copy: _________________________
   The serial number is found on the upper right hand corner of the
   main menu screen.
   NO ORDERS WILL BE PROCESSED WITHOUT THE SERIAL NUMBER


Best time to reach you at the above phone number: _______________

How did you obtain SuperMenu? ___________________________________

_________________________________________________________________

                         COPIES OF SUPERMENU NEEDED :   __________

                           X $25.00 PER COPY =          __________

                         NJ RESIDENTS MUST ADD 6%
                        SALES TAX  ($1.50 per copy)     __________


                                        TOTAL DUE:      __________

FORM OF PAYMENT:  ___ CHECK   ___ MONEY ORDER  ___  CREDIT CARD

PLEASE MAKE CHECK OR MONEY ORDER PAYABLE TO  COMRES

MAIL THIS FORM AND PAYMENT TO:   COMRES
                                 P.O. BOX 1225
                                 LAKEHURST, NJ  08733

PERSONAL CHECKS WILL BE HELD UNTIL CLEARED.
ALL CREDIT CARDS SHALL BE VERIFIED PRIOR TO SHIPMENT.
PLEASE ALLOW 2 WEEKS TO RECEIVE YOUR SERIALIZED COPY OF SUPERMENU.

FOR CREDIT CARD ORDERS: (ALL INFO MUST BE PROVIDED)
-------------------------------------------------------------------
Type of card:  ___ Visa  ___ MasterCard  ___ American Express

Credit Card Number: _________________________________

Expiration Date:  ________________  Total Amount: $______________

I authorize COMRES to charge the above amonut to the credit card
account shown.
                       Signature:  ______________________________

SuperMenu                                              Page 14
Version 2.1

                        REGISTRATION SURVEY

Please fill out this survey completely and return with your
registration form in order to receive one FREE update.

What factors encouraged you to register SuperMenu, in order of
importance? (e.g.. excellent program, documentation, low cost)

_________________________________________________________________
_________________________________________________________________

How would you rate yourself as a computer user?

EXPERT    ABOVE AVERAGE     AVERAGE     BELOW AVERAGE   NOVICE

Did you previously use another disk menuing package? __________

If so, which one(s): __________________________________________

How do you rate SuperMenu to the above packages? ______________
_______________________________________________________________

What features do you like most about SuperMenu? _______________
_______________________________________________________________

What features do you like least? ______________________________
_______________________________________________________________

Are there any features that could be improved or added in order to
make SuperMenu a better product? ______________________________
_______________________________________________________________
_______________________________________________________________

On a scale of 1 to 5 where 1=poor, 2=below average, 3=average
                           4=good and 5=excellent
  please rate the following SuperMenu features:

EASE OF INSTALLATION  ___________
EASE OF USE _________
HELP FEATURE  __________
DOCUMENTATION __________
SCREEN LAYOUTS __________
SCREEN COLORS __________
MOUSE CONTROL __________
SETTING UP MENUS __________
USEFULNESS __________
OVERALL SUPERMENU SOFTWARE RATING : _____________

Any comments/suggestions are greatly appreciated.  Please feel free
to write additional comments on the back of this sheet.
                                                      Thank You.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2053

     Volume in drive A has no label
     Directory of A:\

    CONFIG   EXE     52866   2-08-90   9:32a
    FILE2053 TXT      1851   3-21-90  12:49p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-24-90  12:56p
    INSTALL  EXE     49696   2-08-90   9:43a
    SUPRMENU        111098   2-06-90   2:12p
    SUPRMENU DOC     31850   2-08-90   7:56a
    WHATSNEW          4088   2-08-90   8:48a
            8 file(s)     252104 bytes
                           66560 bytes free
