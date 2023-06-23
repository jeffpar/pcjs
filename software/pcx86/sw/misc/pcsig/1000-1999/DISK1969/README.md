---
layout: page
title: "PC-SIG Diskette Library (Disk #1969)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1969/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1969"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1969.TXT

{% raw %}
```
Disk No: 1969                                                           
Disk Title: Pass-Around Master Menu                                     
PC-SIG Version: S1.1
                                                                        
Program Title: Pass-Around Master Menu                                  
Author Version: 1.02                                                    
Author Registration: $15.00                                             
Special Requirements: Hard drive.                                       
                                                                        
PASSAROUND MASTER MENU is a speedy, well-written, and intuitive hard    
disk menuing system for all levels of computer users.  This program is  
as intuitive as DIRECT ACCESS at a fraction of the price and the bargain
doesn't stop there, since PAS Software has launched a new marketing     
concept called 'Passaround'.  For each user who registers the product   
and then passes it on to another who registers, they receive one dollar.
This concept is supported up to five (5) levels of distribution and     
could make for a small windfall.  However, even if you don't get rich   
supporting shareware, you will have purchased an excellent harddisk     
menuing system that supports up to sixty-four (64) password controlled  
users and an unlimited number of menus and programs which are executed  
by this menuing shell.  As a bonus, the program also allows for messages
to be created, edited, forwarded, replied to and deleted among all     
program users.  The 'key' operator is responsible for setting up all    
accounts as well as creating the program menus.  The installation       
program that accompanies this system is excellent, allowing for the on  
screen review of the documentation (you can print it too), discussion of
their 'passaround' concept in marketing (complete with a demo of how    
much money you might make by participating),and the speedy installation 
of the software from your floppydrive to the drive of your choice.  This
should be your hard disk menuing software of choice, especially if you  
are working in a multi-user environment.                                
                                                                        
An extraordinary value!                                                 
                                                                        
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
║                   <<<<  Disk #1969  MASTER MENU  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program, type: INSTALL    (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY PASMENU.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PASMENU.DOC

{% raw %}
```






                                 PASS-AROUND (tm)

                                 MASTER MENU







                                 Version 1.02















            MASTER MENU is Licensed from Olympic Businessystems Inc

            PASS-AROUND MASTER MENU Copyright (c) 1989 PAS Software

                              All Rights Reserved



        A network version is available from Olympic Businessystems Inc.




    PAS Software                                Olympic Businessystems Inc.
    P.O. Box 3679                                   720 S. 333rd Suite #203
    Federal Way, WA  98063                            Federal Way, WA 98003

    800-553-3968                                               206-874-4044
    206-838-3989


                       Pass-Around Distribution License


    U.S.  Copyright Law and international treaties prohibit duplication and
    transfer  of  copies  of  the  software  without  permission  from  PAS
    Software.   However, PAS grants to everyone permission to duplicate and
    give away, sell, or otherwise distribute copies, provided no portion of
    the software is omitted.

    Registered users are paid quarterly,  by  the  20th  of  the  following
    month,  less  a  50 cent service fee. Payments under $5.50 will be held
    until the amount due exceeds $5.50.

    PAS  Software  does  not  claim  that  any  money  will   result   from
    registration.  There are no guarantees of any kind.

    PAS  Software  reserves  the  right  to  refuse registration to anyone,
    provided the registration fee is not accepted.

    PAS  Software  reserves  the  right  to  stop paying commissions to any
    registered user that violates any  law  or  regulation  or  causes  any
    damages to PAS Software.


                                  NO WARRANTY


    PAS  Software  makes  NO  WARRANTY  of  any  kind,  express or implied,
    including without limitation, any warranties of merchantability  and/or
    fitness  for a particular purpose. PAS Software shall not be liable for
    any damages, whether direct, indirect, special or consequential arising
    from a failure of this program to operate in the manner desired by  the
    user.   IN  NO  EVENT  WILL  PAS  SOFTWARE  BE  LIABLE FOR ANY DAMAGES,
    INCLUDING ANY  LOST  PROFITS,  LOST  SAVINGS  OR  OTHER  INCIDENTAL  OR
    CONSEQUENTIAL  DAMAGES  ARISING OUT OF YOUR USE OR INABILITY TO USE THE
    PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.

    Some  states do  not allow the exclusion or limitation of incidental or
    consequential damages. So the above limitation  or  exclusion  may  not
    apply to you.















                                    PAGE 2

                                 INSTALLATION

    Installation  is  easy  .  .  .   Just  type INSTALL,  and  follow  the
    instructions in each section.

    After installation is complete, at the DOS prompt type MENU [enter].

    If  you  have  properly  installed MASTER MENU you should see main menu
    screen.


                              ASSIGNING PASSWORDS

    Now that your menu is installed, each time you turn on  your  computer,
    you  should  see the menu.  It is important to read this section before
    you begin assigning passwords.  The efficiency of your  system  can  be
    increased by arranging your passwords with the suggestions contained in
    this section.

    To  assign  passwords  press the F1 function key. You will now have the
    EDIT PASSWORDS screen.

    The Edit Password screen is where we assign  passwords  and  enter  the
    operator's  name.  There can be up to 64 separate passwords (designated
    00-63) for operators. On the screen you will see lines 00 through 15.

    NOTE: The Key Operator must be entered on the 00  line.   The  operator
          listed on the 00 line will be  the  only  person  who  will  have
          access to this screen.

    A) ADD PASSWORD - To add a new password. Use your keyboard  arrow  keys
    to  highlight  the  column you wish to add.  When you have selected the
    column, press the 'A' key for  Add.   Type  the  password  in  the  box
    provided.

    Type  the  name  of  the  operator  in the next box.  The computer will
    display any menu items entered onto MASTER MENU.  Use  the  cursor  key
    and  [enter] to highlight the items you wish this person to have access
    to.

    E) EDIT PASSWORD - To edit an existing password move the cursor to  the
    operator you wish to edit and press the 'E' key.

    D) DELETE PASSWORD - To delete an existing password move the cursor  to
    the  operator  you wish to delete and press the 'D' key.  This function
    will remove all reference to this password number from the menu items.


    P) EDIT PASSWORD (Y/N) - Press P to toggle this function  from  Yes  to
    No. If Yes is selected the operator is able to edit their own password.

    When  you are finished entering or editing passwords, press [ESC]. This
    will bring you back to the menu.


                                    PAGE 3

                                ADDING SOFTWARE

    Once  you have successfully installed MASTER MENU on the hard drive and
    have assigned passwords, then you are ready to install your application
    software into the menu. To proceed, you must  be  at  the  MASTER  MENU
    opening  menu.   If  you are not at the opening menu, please enter your
    Key Operator password.

    Now press the F2 function key to bring up the "EDIT MENU" screen.

    Use  the  arrow keys to highlight the item you wish to select.  To edit
    or add a menu item press 'E'.

    NOTE: The efficiency of MASTER MENU is enhanced by  placing  your  most
          commonly used application software programs in the first part  of
          the listing.

    After  you have pressed 'E' you will be asked to provide a MENU LETTER.
    Available menu letters are shown in the center  of  the  screen.  Press
    the letter you wish to use, then press [enter].

    At the cursor type the description of your software and press  [enter].
    The cursor will then go inside the box labelled DOS COMMANDS.

    NOTE:  In  this  box  you  have basic editing keys. (Ins),(Del),(Cursor
           keys),(PgUp),(PgDn), (Ctrl I = Insert line),(Ctrl D = Delete)

    NOTE:  If you would like help creating DOS commands use the F1 function
           key.

    When you are entering software, MASTER MENU needs to know three things:

    1) The location of the software (sub-directory and/or drive).

    2) The command (file name) to start the software.

    3) Where the computer should return to when the software application is
       finished.

    When  you  are  done  entering  the commands, press the [ESC] key.

    OPERATOR ACCESS - This screen lists the operators that you entered into
    MASTER MENU in the last section.  A blinking arrow is at the top of the
    screen.  Use the arrow keys to move the arrow cursor.   Use  the  space
    bar  to  highlight  the  operators  authorized  to  access the software
    program you are entering. If all operators are allowed access  to  this
    software, highlight the box entitled "ALL" and press [ESC].








                                    PAGE 4

                         SPECIAL MASTER MENU COMMANDS

    CM
    CHANGE  MENU  (SUB-MENUS)  -  It is possible to have unlimited software
    storage through the use of sub-menus (menus within menus).   We  create
    sub-menus  just  like  any  other entry in MASTER MENU.  For example to
    change to a sub-menu called Accounting we gave it a file name ACCT  and
    put it on the first line of the DOS COMMANDS box.

    Example in the DOS COMMANDS box enter:

    CM ACCT


    LOG OFF
    There are occasions when you should include "LOG OFF" as a step in  the
    installation of another software program. A good example of this is the
    "PARK"  program.  The  park  program  moves  the read/write arm of your
    hard-drive off and out of the way of the storage media so that when you
    transport your computer the read/write  arm  will  not  bounce  on  the
    storage  surface  and  damage a file. To run the program you run "PARK"
    and shut your computer off. If "LOG  OFF"  were  not  a  part  of  your
    instructions,  you would not log off when parking your hard-drive which
    means that the next person who turned the computer on would have access
    to your software menu.

    Example in the DOS COMMANDS box enter:

    LOG OFF
    PARK


    DOS
    EXIT  TO  DOS - Another menu choice that could be available is "EXIT TO
    DOS". When you use EXIT TO DOS and want to re-enter MASTER  MENU,  type
    MENU [enter] at the DOS PROMPT.


    []
    PASSING PARAMETERS - This function is used in the DOS COMMANDS section,
    and allows the user to input their  request  before  the  commands  are
    executed.   For  example,  some  programs allow you to run the software
    with different switches and file names  after  the  program  name,  for
    instance:

    PROGRAM [FILE NAME] [SWITCH]

    This  is handled very well with MASTER MENU by the bracket `[' command,
    for example:

    PROGRAM [What is the file you wish to load?] /A

    Whatever is in the brackets  would  be  displayed  on  the  screen  and
    replaced with the users response.

                                    PAGE 5

                               SENDING  MESSAGES

    To send a message to someone, simply press the F3 function key. At  the
    menu screen.

    Type  your message in the box and press ESC when you are finished.  The
    list of operators will appear.  Highlight the users to whom you wish to
    send  the message.  Use the arrow keys to move the cursor and the space
    bar to highlight the operator(s).

    If you would like to send a message to everyone, select ALL, then press
    [Esc].

    Once you have chosen who to send a message to and have  pressed  [ESC],
    MASTER  MENU  will  leave  a  flashing  message reminder to the message
    recipient when he/she logs on.


                               READING MESSAGES

    After an operator  logs  on,  the  MASTER  MENU  main  screen  will  be
    displayed.  If  another operator has left a message for him/her, he/she
    will see a prompt flashing in  the  lower  right  hand  corner  of  the
    screen.

    Now press the F4 key to read the message.

    As you read this screen it tells you who the message is  from  and  the
    date  and time of the message.  The message itself will be contained in
    the box near the top of the screen.

    Once the message has been read you may choose one of the options  shown
    at the bottom of the screen.

    You  may PRINT the message on the screen by pressing P.  If you wish to
    REPLY to the message, press R and type your reply  directly  under  the
    message.  You  may  DELETE the message by pressing D.  If you have more
    than one message, you can read the next message by pressing [enter]. If
    you wish to STOP dealing with messages and exit  to  the  Master  Menu,
    press S.


                                MESSAGE STATUS

    By  pressing  the F5 function key, you can see all of the messages that
    you have sent.  With the status function you can  edit  or  delete  the
    messages.   Notice  that  the first part of your message is shown after
    the time and date.


                              PRINT ALL MESSAGES

    Press  F6  to print all messages currently sent to you.  Make sure your
    printer is on before asking for a printout.

                                    PAGE 6

                                USAGE TRACKING

    The usage tracking enables the Key Operator to see what programs he/she
    has  used,  and  how  long  they  have accessed them.  Type in your Key
    Operator password. Press the F7 function  key  to  access  the  initial
    usage tracking screen.


                                LOG OFF MESSAGE

    If  the  same pattern is displayed for a long time on a video screen it
    is possible to burn a permanent image on the screen.   MASTER  MENU  is
    equipped with a screen saver.  If you leave your computer for more than
    a few minutes the computer will log off.

    To enter your screen saver message you must be at the opening  menu  of
    MASTER  MENU.  Press SHIFT ! and the message to "Log off Message:" will
    appear.

    At  the  cursor  type your message and press [enter]. The next time you
    log off, you will see your message on the screen.



                              LEAVING MASTER MENU

    When  you  are  done  with your application software, the computer will
    return you to MASTER MENU.  From there you can choose another  software
    application or you can log off.  We advise you to follow the proper log
    off  procedures  as  outlined below.  By logging off properly you close
    your account, so no  one  else  can  access  the  system  through  your
    password.  Also,  the program ties up all loose ends and makes sure all
    software is back where it belongs.

    The  most common log off procedure is to press the [ESC] key (LOG OFF).
    This will finish your session at  the  computer  and  will  return  the
    system to the Enter Password screen for the next operator.

    The  other  log  off  procedure is available for the Key Operator only.
    This procedure is call EXIT MENU and is done by pressing  the  F8  key.
    The  system will then log you off as mentioned above.  However, instead
    of returning you to the Password Screen, you will go into DOS and  will
    be given the DOS prompt.


                    Use of Pass-Around Distribution Method

    PAS Software will apply for patents  on  the  use  of  the  Pass-Around
    distribution  method  in  software  products  as  soon  as practicable.
    "Pass-Around" is a trademark  of  PAS  Software.   If  you  would  like
    permission  to  use  the Pass-Around distribution method and trademark,
    call (206) 838-3989.



                                    PAGE 7

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1969

     Volume in drive A has no label
     Directory of A:\

    FILE1969 TXT      2836   1-25-90   4:51p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-25-90   4:46p
    INSTALL  EXE     35158   8-30-89  11:19a
    PACKING  LST       281   8-10-89   8:37a
    PASMENU  DOC     14519   7-27-89  10:12a
    PASMENU  EXE     58204   7-27-89  10:12a
    PASMENU  PRO      2121   7-27-89  10:12a
    USAGE    EXE     26922   7-27-89  10:12a
            9 file(s)     140619 bytes
                           16896 bytes free
