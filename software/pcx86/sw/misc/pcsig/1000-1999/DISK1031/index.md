---
layout: page
title: "PC-SIG Diskette Library (Disk #1031)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1031/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1031"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ONE-TO-ONE"

    ONE-TO-ONE (121) is a unique, easy-to-use telecommunications program
    designed for interactive communications between two people (as opposed
    to calling a bulletin board service).  Type messages back and forth by
    modem (chat) during file transfers.  Separate windows of text are
    provided for both incoming and outgoing messages and each window can be
    scrolled by either user.
    
    Other features include pull-down menus and a thorough series of easily
    accessible help screens.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 121.DOC

{% raw %}
```
@CB





     
     
     
     
     
     
     
                            O N E    T O    O N E (tm)
                                         
                         Personal Communications Software
                                         
                                   Version 2.3
     
     
     
     
     
     
     
     
     
                        R E F E R E N C E     M A N U A L
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
                                 Digital Transit
                                 3360 Towneship Road
                                 Antioch, TN  37013
     
     
     
     










     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                2


     WARRANTY
     
     
     A lot of time and effort have gone into making ONE TO ONE a unique and
     efficient communications program. Comments from current users indicate
     that the program works and works well. However, on the off chance that
     something unfortunate does occur we must state the following:
     
     
     Digital Transit makes no warranty of any kind, express or implied,
     including without limitation, any warranties of merchantability and/or
     fitness for a particular purpose.  Digital Transit shall not be liable
     for any damages, whether direct, indirect, special or consequential
     arising from a failure of this program to operate in the manner desired
     by the user.  Digital Transit shall not be liable for any damage to data
     or property which may be caused directly or indirectly by the use of the
     program.
     
     IN NO EVENT WILL DIGITAL TRANSIT BE LIABLE TO YOU FOR ANY DAMAGES,
     INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR
     CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR INABILITY TO USE THE
     PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.
     
     Digital Transit is making ONE TO ONE available through the User
     Supported concept of software distribution.  IF THIS PROGRAM DOESN'T FIT
     YOUR NEEDS ... DON'T BUY IT.  However, if you do use this program and
     then find that it doesn't work as claimed, let us know. We should be
     able to fix most anything within 48 hours. We don't expect to receive
     your money UNTIL you are satisfied!




























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                3


     TRADEMARKS
     
     
     ONE TO ONE is a trademark of Digital Transit
     
     Microsoft, Microsoft C, MS, and MS-DOS are registered trademarks of
     Microsoft Corporation.
     
     IBM and PC-DOS are registered trademarks of International Business
     Machines Corporation.
     
     Hayes is a trademark of Hayes Microcomputer Products, Inc.
     
     Touch Tone and AT&T are trademarks of American Telephone & Telegraph
     Company.
     
     COMPAQ is a registered trademark of COMPAQ Computer Corporation
     
     ARC is a trademark of System Enhancement Associates
     
     The  Greenleaf Comm Library and The Greenleaf Functions are trademarks
     of Greenleaf Software, Inc.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                4


     TABLE OF CONTENTS
     
     
     WARRANTY.....................................................   2
     TRADEMARKS...................................................   3
     WHAT IS ONE TO ONE? .........................................   5
     SHAREWARE NOTES .............................................   6
     ACKNOWLEDGMENTS .............................................   8
     CONVENTIONS USED IN THIS MANUAL .............................   9
     SYSTEM REQUIREMENTS .........................................  10
     ONE TO ONE SYSTEM FILES .....................................  11
     GETTING STARTED .............................................  13
     STARTUP OPTIONS .............................................  15
     PRIMARY SCREEN DISPLAY ......................................  16
     TERMINAL & MENU MODES .......................................  17
     TERMINAL MODE KEYSTROKE COMMANDS ............................  19
     Alt-A: Answer The Phone .....................................  19
     Alt-C: Clear The Screen .....................................  19
     Alt-D: Dialing Directory ....................................  19
     Alt-H: Hang Up The Phone ....................................  19
     Alt-M: Modem Echo ...........................................  20
     Alt-P: Change Parameters ....................................  20
     Alt-R: Redial The Last Number ...............................  20
     Alt-T: Chat Mode ............................................  20
     Alt-X: Exit To DOS ..........................................  21
     Alt-Z: Visit DOS (Shell) ....................................  21
     PgUp: Upload (Send) A File ..................................  21
     PgDn: Download (Receive) A File .............................  22
     Ctrl-Enter: End of Message Indicator ........................  22
     Ctrl-Home: Capture Keystrokes ...............................  22
     Ctrl-Keystroke: Send CTRLTEXT Messages ......................  22
     Home or F1: Help ............................................  22
     Esc or `+': Switch From Terminal To Menus ...................  22
     MENU MODE ...................................................  23
     MENU DESCRIPTIONS
          THE INFO MENU............................................ 24
          THE FILES MENU .......................................... 24
          THE MODEM MENU .......................................... 27
          THE PHONE MENU .......................................... 28
          THE TOGGLES MENU ........................................ 30
          THE SCREEN MENU ......................................... 32
          THE KEYS MENU ........................................... 33
     TIPS AND TRICKS .............................................  34
     FINAL REMARKS ...............................................  36
     
     APPENDIX I   ORDER FORM .....................................  37
     APPENDIX II  ONE TO ONE AND XMODEM ..........................  38
     APPENDIX III PHONE DIRECTORY STRUCTURE ......................  39
     APPENDIX IV  OPTIONS.121 STRUCTURE ..........................  40
     APPENDIX V   COMMUNICATIONS PORT ADDRESSES ..................  41
     APPENDIX VI  ONE TO ONE PROGRAMMING TRIVIA ..................  42






     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                5


     WHAT IS ONE TO ONE?
     
     
     ONE TO ONE is a telecommunications package designed for those of us who
     sometimes call friends with computers. The many sophisticated programs
     that are currently available do a great job for accessing bulletin
     boards, information services, etc. HOWEVER, they are less than desirable
     when it comes to two human beings trying to communicate over the phone
     lines via modem.
     
     ONE TO ONE is the first communications program available that attempts
     to address the special needs of people sharing data with other people.
     
     What does ONE TO ONE offer that the others don't?  With ONE TO ONE, you
     and your friends can:
     
     o Type messages to each other while a file transfer is in progress!
     
     o Never worry about garbled text caused by two people typing at the same
     time.  Incoming and Outgoing text appear in separate windows on screen.
     
     o "Share" a text file.  You and a friend can be looking at the same text
     file simultaneously.  Both of you will have control over scrolling the
     files contents in a window.  At any time, you can pause and type notes
     to each other about the file that you are sharing.
     
     o Best of all ... the price is right!  A suggested contribution of $15-
     $20 is cheap at twice the price.
     
     ONE TO ONE is an excellent communications program designed with the
     `friend to friend' computer network in mind.  With a little practice you
     will find it to be a very useful, interactive and entertaining file
     transfer utility.
























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                6


     SHAREWARE NOTES
     
     
     A Computer without software is like a toaster without bread. Without
     software, our computers are useless so we buy the programs that put
     expensive hardware to work. Unfortunately, computer software is very
     expensive which makes it tough to get EVERYTHING we need.
     
     What's even worse is that very few commercial software dealers allow us
     to open their package, try it out and return it if we don't like it.
     Those that do always charge an outrageous re-stocking fee.
     
     Then along comes User Supported software. The basic idea is that you,
     the user, should have the right to "try before you buy". If you test the
     software and decide that you like it, you send the author the money to
     pay for it. Since the author doesn't have the high marketing overhead he
     can charge much less than the big boys.
     
     Advantages:
               o Try before you buy. If you don't like it, don't buy it!
               
               o The price is right. You don't pay for marketing overhead.
               
               o The quality is right. Most software is written by
               professional programmers that know what they're doing. If the
               quality isn't there, you'll know it BEFORE you spend any
               money.
               
               o Updates are more frequent. The programmers are frequently in
               close contact with the users and modify the programs based on
               user input. The programs are then distributed via modem not
               dealer/distributor networks. The documentation is a file on
               the program disk. No waiting for a new and expensive
               reprinting of the manual.
     
     Disadvantages:
               o Telephone support is hard to come by. (I've never needed any
               from a User Supported product.)
               
               o Latest figures indicate that less than 10% of the users
               actually pay the author for the program.
               
               o This is the reason for the first disadvantage. It's hard for
               someone to give up a PAYING job as a professional programmer
               to support NON-PAYING users.
     
     There are several packages I like but think the author is asking too
     much so I've stopped using them. Perhaps I should have sent the author
     what I think the program is worth and risk hurting his/her feelings.
     
     Anyway, you know where I stand. A suggested price of $15-$20 is a
     bargain considering the quality of the product. If in your opinion you
     think it's only worth $5, SEND IT IN. However, if you send less than




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                7


     $15.00 please send a note letting us know what we can do to make ONE TO
     ONE more valuable.
     
     Clearly, the User Supported concept is advantageous for us all. But we
     must take it more seriously if it's going to work. Cast your vote for
     the User Supported concept by paying for the programs you use.
     
     Before I put the soap box away...
     
     ONE TO ONE is a professional-quality software package that is being
     distributed through electronic rather than traditional marketing
     channels. It is NOT free software. If you find this program to be of
     use, you are urged to send a small contribution (in the $15 - $20 range)
     to the author at the address below.
     
     Make checks payable to:
     
                                   Digital Transit
                                   3360 Towneship Road
                                   Antioch, TN  37013
     
     
     Whether you decide to use ONE TO ONE or not, thanks for taking the time
     to try it out. You are ENCOURAGED to distribute this software in any way
     that you see fit, providing the following conditions are met:
     
               o You must receive NO COMPENSATION for distributing ONE TO
               ONE. (Compensated Electronic Distribution Services such as
               BBS's, Compuserve, Genie, etc., can distribute ONE TO ONE
               legally.)
               
               o The program and documentation must be distributed together.
               
               o The program and documentation must be unmodified.
               
               o ONE TO ONE may not be distributed in association with any
               other product or service unless an arrangement has been
               negotiated with Digital Transit.
     
     Distributors of Public Domain and User Supported software may not
     distribute ONE TO ONE without written permission from Digital Transit.
     You will most likely get permission, but written permission is REQUIRED.
     
     Anyone interested in a site license, or in bundling ONE TO ONE with
     another product, please contact the author at the above address.












     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                8


     ACKNOWLEDGEMENTS
     
     
     Thanks, Jan and Chris, for your patience.
     
     Thanks, Microsoft, for Microsoft C - the BEST MS-DOS C COMPILER.
     
     Thanks again, Microsoft, for the MASM Assembler (ver. 5.1)
     
     Thanks, Greenleaf Software, for saving me from a lot of grunt work.
     
     Thank-you beta testers, for your encouragement and design feedback.
     
     Thanks Eric Hawkins, for your good judgement and advice.
     
     Thanks Dean Carothers for your enthusiasm, knowledge and friendship for
     the past 9 years.
     
     Thank you, Steve Bell, for your expert help in editing the documentation
     of ONE TO ONE.
     
     Thanks to all of the registered users of ONE TO ONE.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                9


     CONVENTIONS USED IN THIS MANUAL
     
     
     The IBM keyboard is programmable.  That is, the keyboard isn't locked
     into any particular mode of operation.  We can redefine the keyboard to
     suit our needs.  To this end, IBM has added several interesting keys
     that operate much like the SHIFT keys on a typewriter.  We are only
     concerned with the use of the "Ctrl" and "Alt" keys right now.
     
     Whenever you see "Alt-Something" it means to press and HOLD the "Alt"
     key and THEN press the "Something" key ... at the same time.
     
     EXAMPLE:  Alt-X ... Press "X" WHILE the "Alt" key is depressed.
     
     Also, whenever you see "Ctrl-something" it means to press and HOLD the
     "Ctrl" key while you press the "something" key at the same time.
     
     EXAMPLE:  Ctrl-X    ... Press "X" WHILE the "Ctrl" key is depressed.
     
     There are keys we'll use that aren't found on typewriters.   One is the
     "Esc" key which is toward the upper left corner of the keyboard if you
     have an older computer or toward the upper right corner if you have a
     newer model.  (Why they switched it is beyond me.)  The "Numeric Keypad"
     generally found on the right side of the keyboard is also important.
     
     Depending on the state of the Num Lock (numeric lock) key, the numeric
     keypad is either in the numeric mode or the direction mode. (The Num
     Lock key behaves like the CAPS LOCK key.) In numeric mode, the keys
     generate numbers much like a calculator. In the direction mode, the
     other markings that appear on the keys are active. For instance 8, 2, 4
     and 6 move the cursor UP, DOWN, LEFT and RIGHT respectively (these keys
     are marked with arrows). Keys 7, 1, 9 and 3 are used for HOME, END, PAGE
     UP and PAGE DOWN cursor movement. Most keyboards have the PAGE UP and
     PAGE DOWN keys abbreviated. They are referred to in this manual as PgUp
     and PgDn.
     
     The RETURN key is known as the ENTER key in IBM manuals. It is located
     on the right side of the keyboard and marked with a crooked arrow
     pointing to the left. For consistency it is referred to as the ENTER
     key.

















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                10


     SYSTEM REQUIREMENTS
     
     
     ONE TO ONE requires the following:
     
     o IBM Compatible Computer
     o PC-DOS Or MS-DOS (Version 2.1 or later)
     o One Floppy Disk Drive (hard disk not required)
     o 192k Of RAM minimum
     o One RS-232 Serial Port
     o HAYES COMPATIBLE modem (supporting the Hayes AT command set)
     o An operating telephone line.
     o Someone To Call
     
     ONE TO ONE works with Monochrome as well as Color video cards. If you
     have an EGA or VGA display card, ONE TO ONE will use the CGA mode.
     
     When you install ONE TO ONE, you will be asked whether you have Touch
     Tone or Pulse phone service. ONE TO ONE will work with either.






































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                11


     ONE TO ONE SYSTEM FILES
     
     
     ONE TO ONE Version 2.3 is distributed in an archived form. The "ARC"
     archiving utility by System Enhancement Associates was used to compress
     the files to keep downloading time to a minimum. ARC has become the
     standard file compression program used for electronic software
     distribution.
     
     You should have no problem obtaining a copy of the latest version of ARC
     from your friendly neighborhood bulletin board.  Please remember that
     ARC is not free!  It saves money in the long run so why not go ahead and
     pay for it?
     
     The name of the archived file is 121-V23.ARC. After "un-arching" this
     file you will see the files listed below:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes on improvements in the current version.
     
     The only file required to start ONE TO ONE is 121.EXE.  When you run the
     program for the first time ONE TO ONE looks for other files and creates
     them if they are not found.  Those files are:
     
     OPTIONS.121
     
     OPTIONS.121 is the file that holds the current configuration parameters
     for your system. If the file OPTIONS.121 is not found it will be created
     automatically after asking you several questions. Floppy users should
     remove the write protect tab before startup.
     
     PHONEDIR.121
     
     The phone directory file is named PHONEDIR.121. When you access the
     dialing directory, PHONEDIR.121 is read from disk. If ONE TO ONE can't
     find the directory, it creates a blank one and writes it back to disk.
     
     CTRLTEXT.121
     
     Beginning with Version 2.2 you have the ability to assign phrases to
     Ctrl-characters.  For example, you could assign Ctrl-S the phrase "I'm
     Sending The File In 10 Seconds, OK?".  When Ctrl-S is pressed  this
     message would be sent automatically as though you had typed it by hand.
     It is sent quickly with no typos!  The messages associated with Ctrl-
     characters are stored in a file called CTRLTEXT.121.  This file is
     created when ONE TO ONE is executed for the first time.







     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                12


     Listed below is a brief summary of all files associated with ONE TO ONE
     Version 2.3:
     
     121-V23.ARC - The archived distribution form of ONE TO ONE.
     
     After un-archiving:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes describing improvements in release 2.0.
     
     After running ONE TO ONE for the first time:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes describing improvements in release 2.0.
     OPTIONS.121  - The System Configuration File.
     PHONEDIR.121 - The Phone Directory.
     CTRLTEXT.121 - Messages attached to Ctrl-characters.
































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                13


     GETTING STARTED
     
     
     The FIRST time you start ONE TO ONE, type 121 and press ENTER. After a
     few moments you will be told that ONE TO ONE couldn't find the file
     OPTIONS.121. You are then asked to answer several questions so that a
     configuration file can be created for your particular system. Each
     question is discussed below.
     
     o Which Communications Port? (1/2/3/4):
     
     Enter the port number, 1 through 4 to reflect the serial port you use.
     If you enter the wrong number, ONE TO ONE will not be able to initialize
     the serial port and prints a message to that effect.  If that occurs use
     the Alt-P key to Change Parameters.  Anything changed with Alt-P is not
     permanent unless you save the parameters with the menu choice called
     `Save OPTIONS.121' which is found in the FILES MENU.  (More about that
     later.)
     
     o What Baud Rate? (300/1200/2400/4800/9600):
     
     Type the number representing the speed of your modem and press ENTER.
     ONE TO ONE always uses 8 data bits, 1 stop bit and No parity. You will
     not be prompted for these parameters.
     
     o Key-Clicks On Incoming Text? (Y/N):
     
     If you type `Y' in response to this question,  ONE TO ONE will cause a
     "click" to occur on each incoming character.  This can be a useful
     feature because you will always know when someone is "typing at you".
     
     o Touch Tone or Pulse Dialing? (T/P):
     
     If you have pulse dialing, you should enter a `P'.  Anything else
     defaults to Touch Tone service.
     
     o Default Modem Initialization String? (Y/N):
     
     The default modem initialization string performs the following commands:
     ... Wait 1.5 seconds ... Take the modem off-line ... Wait another 1.5
     seconds ... issue the ATZ command to reset the modem ... Wait another
     1.5 seconds ... issue the ATV1 command to set the modem result codes to
     WORDS instead of DIGITS ... and finally, issue the ATE0 command to
     disable the modem from echoing your keystrokes into the receive buffer.
     
     Ninety-nine percent of you can probably just answer `Y' accepting the
     defaults and go with it.  However, the ability to create a custom modem
     initialization string is available.









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                14


     
     To change the default setting type `N' and press ENTER.  An on-screen
     explanation of the special characters that can be imbedded in the
     initialization string is then displayed.  They are:
     
     { = The ENTER key. ~ = 0.5 second delay. ^ = Next character is
     interpreted as a control code.
     
     Enter the customized modem initialization string and press ENTER. Faster
     modems may take advantage of the extended result codes by using the ATX1
     command.  When connected the modem will detect the caller's baud rate
     and send a message to the monitor.  That way, if you're at 1200 baud and
     someone calls at 300 just use Alt-P to change parameters and establish a
     connection at the caller's rate.
     
     o What Type Of Screen Do you Have? (1/2/3):
     
     1 = Monochrome.  No colors or shades of grey.
     2 = Color.  I have a color monitor.
     3 = Monochrome, but I get nice shades of grey.
     
     ENTER `1' if you have an IBM green-screen monitor or a Monochrome
     Display Adapter card.
     
     ENTER `2' for color monitors.  In color, ONE TO ONE has white text on a
     blue background.  The pull-down menus are red with white text. Sounds
     sort of corny and patriotic, doesn't it? It looks good and it's easy on
     the eyes.
     
     ENTER `3' for monitors that display shades of grey when colors are
     represented.  Compaq and AT&T computers are known to work well like
     this. Try it if you aren't sure.  If the text on the screen is barely
     readable then this option is not for you.  Re-install ONE TO ONE by
     erasing OPTIONS.121 and then select choice number `1' for NO COLORS.
     
     After all of these questions have been answered, ONE TO ONE will create
     the OPTIONS.121 file and write it to disk for future reference.
     
     If you make mistakes while answering these questions, don't worry. The
     parameters can be changed and saved via the `pull-down' menus while
     running ONE TO ONE.
     
     Congratulations!  You now have a working copy of ONE TO ONE!  Make
     backups of these files and store in a safe place.













     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                15


     STARTUP OPTIONS
     
     
     THE 121PATH ENVIRONMENT VARIABLE
     
     ONE TO ONE can run from any directory on a hard disk and the
     configuration files will automatically be found. That's good news for
     Local Area Networks! Keep one copy of ONE TO ONE in a public directory
     and each user can set their 121PATH variable to point to his/her own
     private configuration files.
     
     This is possible because ONE TO ONE now has the ability to examine the
     environment variable table maintained by DOS. The environment variable
     is called 121PATH. To use it, modify your AUTOEXEC.BAT file to include:
     
     PATH=\PATHNAME1
     SET 121PATH=\PATHNAME2
     
     where PATHNAME1 leads to the 121.EXE directory and PATHNAME2 leads to
     the configuration file.   Reboot and these changes take effect.
     
     Now, whenever ONE TO ONE is started DOS will find 121.EXE because the
     PATH variable is set to "point" to it. Next, ONE TO ONE looks for the
     environment variable 121PATH. If it is `SET' ONE TO ONE will load
     OPTIONS.121, PHONEDIR.121 and CTRLTEXT.121 from the directory PATHNAME2
     leads to. If the files are NOT found they will be created in the
     directory pointed to by 121PATH=.  Otherwise, the files default to the
     current or PATHNAME1 directory.
     
     You can be anywhere on the hard disk and your files will be found! Move
     to the directory where you will be downloading files and run ONE TO ONE
     from there.  No need for typing long Drive/Path/File names since you are
     in the default directory for downloading.
     
     Please note that THIS IS NOT REQUIRED to run ONE TO ONE.  You may
     continue to use it without the 121PATH environment variable as you have
     in the past. However, it is a very convenient feature.
     
     STARTUP WITH AUTO-DIAL/AUTO-ANSWER
     
     ONE TO ONE will immediately dial a directory listing with the following
     startup command:
     
     121 D <ENTER>
     
     where D is a Dialing Directory Entry.











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                16


     
     121 A <ENTER>
     
     ONE TO ONE is executed and then issues the Hayes ATS0=1 command to put
     the modem in Auto-Answer mode. The phone is answered on the first ring.
     
     Both choices skip the title screen moving directly to TERMINAL MODE.
     
     
     PRIMARY SCREEN DISPLAY
     
     
     Each time ONE TO ONE is executed the title screen is displayed. It
     describes the program; warns that this is not free software; begs for
     compensation; tells who wrote it and ... waits for a keystroke. Just
     your typical User Supported software title screen. Press any key to
     clear it, automatically send the modem initialization string, enter
     TERMINAL MODE and the primary screen display. The exceptions to this are
     the `121 A' and `121 D' startup commands which skip the title screen and
     go directly to TERMINAL MODE.
     
     The primary screen is divided into four discrete sections.   They are:
     
     o The top section of the screen contains the names of all of the pull-
     down menus.  This line is referred to as the Menu Bar.
     
     o The middle section of the screen is divided by a reverse video bar
     called the Dividing Bar. INCOMING TEXT, or characters that are typed to
     us, will appear in the upper "window" of this section. OUTGOING TEXT, or
     characters that we type, will appear in the lower window.
     
     o Below the OUTGOING TEXT window there is an area set aside for the
     current communication port settings.  This area is also used for
     messages from ONE TO ONE to us. The message that you will see most
     frequently in the area is, "Press `Home' For Help".  Have you tried it
     yet?
     
     o The bottom line is the program title and copyright notice.



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                17


     TERMINAL AND MENU MODES
     
     
     When the title screen is cleared with a keystroke you enter TERMINAL
     MODE. This is where most of your ONE TO ONE life is spent. Each key
     pressed is sent out the comm port to whoever is out there.
     
     ONE TO ONE has somewhat of a split personality. You are in TERMINAL MODE
     when waiting for the phone to ring, typing messages to a friend,
     downloading or uploading files. You are in MENU MODE while pulling down
     menus and making selections from them.
     
     All of the vital choices from the menus are mapped to the keyboard. You
     can call or be called; establish a connection; type messages; send and
     receive files or hang up without once using a menu.  On the other hand,
     some operations must be carried out from the appropriate pull-down menu.
     An example is adjusting the Dividing Bar that separates the incoming
     from the outgoing text.  This option is available only from the "Screen"
     pull-down in MENU MODE.
     
     `Toggle' between TERMINAL MODE and MENU MODE by pressing either the
     `Esc' (escape) key or the `+' (grey plus) key.  Press Esc (or grey plus)
     and notice the changes.  Press it again to return.
     
     When you "toggle into" the MENU MODE you will notice two changes:
     
     o The MENU MODE is flashing to let you know that key strokes will not be
     sent over the phone lines.
     
     o The word "Info" will be highlighted on the "Menu Bar". Pressing ENTER
     (or the Down Arrow key) activates the menu.
     
     Press ENTER and the menu unfolds or is `pulled down'. The INFO MENU
     contains no choices.  It simply displays the program title, version
     number, and gives the address of the author.
     
     To remove a pull-down menu from the screen without making a change press
     `Esc' or grey plus.  Pressing the Up Arrow key until the menu goes past
     the top choice will accomplish the same thing.
     
     Make a menu selection so you can see how it's done.  If you are still in
     the Info pull-down menu remove it by one of the methods described above.
     Now press the right arrow key a few times.  Each time you press the
     right arrow the Menu choice to the right is highlighted.  When a Menu
     selection is highlighted it is ready to become active.
     
     Keep pressing the right arrow key until the SCREEN MENU is highlighted.
     Now press ENTER or the Down Arrow.  The menu will drop down and the
     first selection "Clear Both Screens" will be highlighted.
     
     IMPORTANT:  You could have pressed "S" to automatically pull down the
     SCREEN MENU.  All menus can be selected by pressing the key
     corresponding to its first letter.
     



     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                18


     
     Selecting a choice WITHIN a Menu is handled the same way. Pull-down a
     Menu as described above. Then either ...
     
     o Press the key that corresponds to it's first letter.  OR ...
     
     o Use the Up or Down arrows to highlight a choice and press ENTER.
     
     Pull-Down the SCREEN MENU and use the Down Arrow to highlight "Clear
     Outgoing Screen" and press ENTER.  Any text that was in the outgoing
     text window (the bottom half of the screen) has been cleared. (If the
     Outgoing Text window was empty you will not notice that anything
     happened. It did.)
     
     Return to TERMINAL MODE by pressing Esc twice if you are in a menu or
     once if on the Menu Selection Bar.
     
     TO RECAP ... use either of two methods to make menu selections:
     
     ARROW/ENTER METHOD - Use the arrow keys to highlight a title on the Menu
     Bar or a choice within a menu and then press ENTER.     OR ...
     
     KEYSTROKE METHOD - Press the key corresponding to the first letter of
     the menu to pull down (e.g. `M' for MODEM, etc.).  Then press the key
     that corresponds to the first letter of your choice.    Finish the
     selection by pressing ENTER.
     
     You now have all of the knowledge needed to make ONE TO ONE work for
     you. At this point you are encouraged to experiment. Call up the Help
     Screen by pressing either the key marked `Home' on the numeric keypad or
     F1. You will find a help screen for TERMINAL MODE and a separate help
     screen for MENU MODE.
     
     ONE TO ONE is very easy to use.  A lot of effort went into making the
     "user-interface" of ONE TO ONE simple and powerful.  Making menu
     selections and toggling between MENU MODE and TERMINAL MODE will become
     second nature after a little practice.
     



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                19


     TERMINAL MODE KEYSTROKE COMMANDS
     
     
     When in TERMINAL MODE you have access to most menu choices without
     switching to MENU MODE.  Certain keystrokes have been assigned the most
     frequently used menu selections.  A Keystroke Command will perform as if
     you had toggled into the MENU MODE, made a choice and toggled back into
     TERMINAL MODE.  Most keystrokes require that you hold down the `Alt' key
     while pressing the appropriate character. What follows is a listing of
     all Keystroke Commands and a description of each.
     
     Alt-A: Answer The Phone
     
     Alt-A sends the Hayes ATA command to the modem. The ATA command tells
     the modem to answer the phone. Before you press Alt-A the word RING
     should appear in the Incoming Text window. This indicates that the phone
     line attached to the modem is ringing. If a connection is established
     the word CONNECT appear in the Incoming Text window, otherwise, the
     message NO CARRIER appears. If you should press Alt-A when the phone
     isn't ringing just press any key and the modem will stop trying for a
     connection.
     
     Alt-C: Clear The Screen
     
     Alt-C clears the Incoming Text, Outgoing Text, and Dividing Bar windows
     of their current contents.
     
     Alt-D: Dialing Directory
     
     Alt-D creates a screen display of the Dialing Directory. The directory
     can contain up to 100 entries. At the bottom of the display are several
     options:
     
               PgUp)Previous List   - PREVIOUS 10 Directory Entries.
               PgDn)Next List       - NEXT 10 Directory Entries.
               D)ial an Entry       - Asks "Which Entry?" then dials it.
               P)rint Listing       - Print Directory Listing.
               R)evise an Entry     - Add/Revise names and numbers.
               M)anual Dial         - Dial a number from the keyboard.
               E)rase an Entry      - Delete an existing entry.
               Q)uit                - Returns to TERMINAL MODE.
     
     After a number is dialed you are returned to TERMINAL MODE. CONNECT will
     appear in the Incoming Text window indicating that the call was
     successful. Otherwise, no connection was established and the message NO
     CARRIER appears.
     
     Alt-H: Hang Up The Phone
     
     Alt-H sends the Hayes ATH command to hang up the phone. NO CARRIER will
     appear in the Incoming Text window if you were online when the Alt-H
     command was issued.
     




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                20


     Alt-M: Modem Echo
     
     Alt-M `toggles' Modem Echo between ON and OFF.  Modem Echo ON causes
     keyboard input to appear in the Outgoing Text window AND `echo' to the
     Incoming Text window as well.
     
     Alt-P: Change Parameters
     
     Alt-P opens the parameters window permitting changes in baud rate,
     communications port or both.  The Parameters window is divided into two
     sections.  Keys 1-4 are used to select which communications port is
     desired.  Keys 5-9 are used to select the appropriate baud rate. Press a
     key from each category (if needed) and then press ENTER. To accept the
     current setting without making any changes, press ENTER without
     indicating a number.
     
     EXAMPLE: Someone calls at 300 baud and your modem default setting is
     1200.  Press Alt-P ... select the appropriate 300 baud setting by
     pressing the `5' key and press ENTER.  That's all there is to it.
     
     IMPORTANT: ONE TO ONE always uses 8 data bits, 1 stop bit, and NO
     parity. This is not an option.
     
     Alt-P changes are not permanent!  The OPTIONS.121 file is not
     automatically modified.  The parameters will default to the most
     recently saved OPTIONS.121 configuration for the next session.
     
     Alt-R: Redial The Last Number
     
     Alt-R redials the most recent Dialing Directory number called. If no
     number has been dialed the message "There is No Number to Redial" is
     displayed.
     
     Alt-T: Chat Mode
     
     When typing messages every keystroke is transmitted immediately ...
     mistakes, corrections, misspellings ... everything. This is not amusing
     for long.
     
     There is a better way and it's called Chat Mode. Alt-T creates a buffer
     that captures all keystrokes until you press ENTER. The edited message
     is then transmitted. No one will ever know how bad a typist you really
     are! Neither the Incoming Text window nor incoming messages are
     affected.
     
     The only indication that anything is different is the message on the
     Dividing Bar, "Chat Mode - Press `Esc' to return to normal mode". Chat
     Mode locks out all other menu choices. Press `Esc' to return to TERMINAL
     MODE.
     







     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                21


     Alt-X: Exit To DOS
     
     Alt-X exits ONE TO ONE and returns to the DOS prompt. You are first told
     that you are "Exiting to DOS" and then asked for verification "Are you
     sure?". Press `Y' and return to DOS. Any other keystroke returns to
     TERMINAL MODE with no harm done.
     
     Alt-Z: Visit DOS (Shell)
     
     Alt-Z puts ONE TO ONE "on hold" and drops back to DOS. You may then
     change directories, format disks, use a text editor, etc. Type EXIT and
     press ENTER to return to ONE TO ONE. It's as though you never left! This
     feature does have two requirements:
     
     o Your computer must have enough memory to run both ONE TO ONE and your
     `other' program at the same time.
     
     o ONE TO ONE must be able to find the COMMAND.COM file somewhere in the
     system. ONE TO ONE needs the second copy of COMMAND.COM to create a "DOS
     shell". If it is not located a message appears saying that it failed to
     load the second copy of COMMAND.COM and then returns to ONE TO ONE.
     
     Experiment to see if this will work on your system. Hard disk user's
     should have no problem. However, floppy users will have to copy
     COMMAND.COM from their "boot disk" onto their ONE TO ONE disk for Alt-Z
     to work properly. Give it a try.
     
     PgUp: Upload (Send) A File
     
     Press PgUp on the numeric keypad to upload (send) a file. You are
     prompted for the filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the receiving party to acknowledge that it is ready to receive.
     At this point file transfer begins automatically.
     
     Once file transfer has begun sit back and relax if you like. BUT, if the
     other person is also using ONE TO ONE you can continue to type messages
     while the file transfer takes place! In either case you will see a
     status report of the transfer displayed on the Dividing Bar. A beeping
     sound will indicate when transfer is complete.
     
     File transfer can be aborted anytime by pressing Ctrl-X and you will
     exit gracefully. Your screen will say "Aborted by User" and you will
     hear the beeps letting you know that the transfer is finished. Your
     friend's screen will display a similar cancelation message.
     











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                22


     PgDn: Download (Receive) A File
     
     When you are ready to download (receive) a file press PgDn. You are
     prompted for a filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the sending party to begin uploading the file.
     
     The features available with file Uploading apply here. Either sit back
     or type messages ... no matter ... you will be notified when file
     transfer is complete.
     
     Ctrl-Enter: End of Message Indicator
     
     To indicate that you've finished a thought, press CTRL-ENTER which sends
     a "space", a smiley face and a Carriage Return. This IS OPTIONAL!
     Consider using it to show that something you've typed was meant to be
     said with a grin (e.g. <GRIN>).
     
     Ctrl-Home: Capture Keystrokes
     
     Ctrl-Home allows ONE TO ONE to capture all incoming keystrokes. When
     Ctrl-Home is executed "Capture is ON" appears on screen.  All incoming
     characters will be saved to a file named CAPTURE.121. To terminate
     capture press Ctrl-Home again and "Capture is OFF" will appear.
     
     If CAPTURE.121 is not found, it is created. Thereafter CAPTURE.121 is
     opened in the APPEND mode. This means that you can toggle Capture ON and
     OFF as often as you like without overwriting previously saved
     characters.
     
     Ctrl-`User Defined Key': Send CTRLTEXT Messages
     
     With the KEYS pull-down menu you can create personalized Keystroke
     Commands. For instance, Ctrl-T could be defined as "Transfer the file in
     10 seconds, Ok?". Now, when Ctrl-T is pressed this message is
     automatically transmitted. This is a convenient and error-free way to
     send commonly typed phrases and is limited only by your imagination.
     
     When you press `Ctrl' and another character simultaneously you will send
     the message that is attached to that keystroke. See the KEYS MENU
     discussion on page 33 for more details.
     
     Home or F1: Help
     
     Pressing the `Home' or F1 key displays a "help screen". Press any key to
     remove it. There are two help screens, one for TERMINAL MODE and another
     for MENU MODE. The help screen that appears corresponds to the current
     active mode.
     
     Esc or `+': Switch Between TERMINAL MODE and MENU MODE
     
     You can press either `Esc' or the `+' key to `toggle between' TERMINAL
     MODE and MENU MODE.




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                23


     MENU MODE
     
     
     Most functions can be controlled in TERMINAL MODE with Keystroke
     Commands. However some procedures must be accessed through the MENU
     MODE. Toggle into MENU MODE with either Esc or the `+' key. "Menu Mode"
     will be begin flashing on the Dividing Bar and no messages or TERMINAL
     MODE activities are possible.
     
     All menus are activated using either of the following methods:
     
     ARROW/ENTER METHOD - Use the Right or Left Arrow keys to highlight the
     desired menu title on the Menu Bar. Press the Down Arrow or ENTER key to
     pull-down the menu.
     
     KEYSTROKE METHOD - Press the key corresponding to the first letter of
     the selection you want. (e.g. `M' for Modem, etc.)
     
     When the appropriate menu is pulled down activating a specific entry is
     just as easy. To highlight your choice use either the Up/Down arrows or
     press the key corresponding to its' first letter. Then press ENTER.
     
     That's all there is to it! You simply use the arrow keys to point to
     what you want and press ENTER ... OR ... press the key that represents
     the first letter of the desired choice and press ENTER.
     
     If you need to exit a menu without making a choice just "escape out"
     with any of the following:
     
               o Press the `Esc' key - OR
               o Press the `+' key - OR
               o Press the Up Arrow until you pass the top selection.
     
     A number of menu choices will return you to TERMINAL MODE. Others leave
     you in MENU MODE.  This may seem inconsistent but it makes sense when
     the menu choice is considered. In the following menu descriptions you
     are told which selections take you back to TERMINAL MODE and which
     selections leave you in the MENU MODE.
     


















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                24


     MENU DESCRIPTIONS
     
     
     THE INFO MENU
     
     The INFO MENU is not truly a menu because it contains no selections. It
     simply displays the program title, version number, lists the address of
     the author, and displays the copyright notice. Press any key and return
     to MENU MODE.
     
     
     THE FILES MENU
     
     The FILES MENU contains choices that relate to acquiring or inspecting
     disk files.
     
     o DOWNLOAD A FILE - When you are ready to DOWNLOAD (receive) a file
     select this option (or the PgDn Keystroke Command, page 22). You are
     prompted for a filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the sending party to begin uploading the file.
     
     Once file transfer has begun sit back and relax if you like. BUT, if the
     other person is also using ONE TO ONE you can continue to type messages
     while the file transfer takes place! In either case you will see a
     status report of the file transfer displayed on the Dividing Bar. A
     beeping sound will indicate that the transfer is complete.
     
     File transfer can be aborted anytime by pressing Ctrl-X and you will
     exit gracefully. Your screen will say "Aborted by User" and you will
     hear beeps letting you know that the transfer is finished. Your friend's
     screen will display a similar cancelation message.
     
     This selection returns you to TERMINAL MODE.
     
     o UPLOAD A FILE - When you are ready to upload (send) a file select this
     option (or the PgUp Keystroke Command, page 21). You are prompted for
     the filename which can be prefixed with a valid drive and path
     combination. After entering the file name ONE TO ONE will patiently wait
     for the receiving party to acknowledge that it is ready to receive. At
     this point file transfer begins automatically.
     
     The features available with file downloading apply here. Either sit back
     or type messages ... no matter ... you will be notified when file
     transfer is complete.
     
     This selection returns you to TERMINAL MODE.
     









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                25


     o VIEW A FILE - This selection acts like the TYPE command in DOS. It
     allows you to view a text file from within ONE TO ONE. A very handy
     feature indeed.  When you choose VIEW A FILE you are prompted for a
     filename which can include any valid drive or path. You are not limited
     to the current directory. After you enter the file name the screen
     "opens up" in the middle to create an 80-column viewing area.
     Instructions are displayed near the bottom of the screen. Scrolling is
     controlled with Ctrl-S or you may Abort by pressing `Esc'. After the
     file has been displayed you are prompted to press any key to continue.
     
     This selection returns you to TERMINAL MODE.
     
     o SHARE A FILE - This is a nifty feature! SHARE A FILE gives you the
     ability to share a text file with a friend. One of you acts as the
     Sender and the other as the Receiver. BOTH USERS MUST BE USING ONE TO
     ONE FOR THIS FEATURE TO WORK PROPERLY.
     
     When you and a friend share a file, your screen opens up a window at the
     top two-thirds of the display. The bottom portion of the screen is split
     into 2 sections so that you may continue to type while sharing the file.
     
     It works like this. The Sender enters the name of the text file to share
     while the `downloader' tells ONE TO ONE that he will act as the
     Receiver. Immediately both screens change to the viewing screen
     described above. The text file is then displayed, line by line, in the
     viewing area of both screens. Both parties have control of when to pause
     or abort the viewing of the file. Press Ctrl-S to pause. Then start
     typing messages to each other about what you are seeing on the screen.
     This is a convenient feature that other communication programs don't
     offer.
     
     When the entire file has been displayed (or aborted with Esc) you will
     be prompted to press a key to continue.
     
     When you press a key you will be returned to TERMINAL MODE.
     
     o DIRECTORY - This is EXACTLY like the DOS DIR command. You will be
     prompted for a file specification that could contain a Drive
     Letter/Directory/Filename or Wildcards. Enter your choice as though you
     had typed "DIR " in front of your file specification.
     
     EXAMPLE: A:\LETTER\FRED.* is sent to DOS as DIR A:\LETTER\FRED.*
     producing a directory listing of Drive A:, Directory LETTER, File
     everything related to FRED.
     
     DIRECTORY requires that ONE TO ONE be able to access COMMAND.COM on your
     program disk. Hard disk users should have no problems. Floppy users must
     copy COMMAND.COM to the ONE TO ONE program disk.
     
     This selection leaves you in MENU MODE.
     






     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                26


     o SAVE OPTIONS.121 - The OPTIONS.121 file contains the operating
     parameters for ONE TO ONE. SAVE OPTIONS.121 will save changes made
     during a session and have them active the next time ONE TO ONE is
     executed. The parameters saved are ... position of the Dividing Bar,
     Baud Rate and Communications Port, Monitor type, etc.  In short,
     everything.
     
     o VISIT DOS (SHELL) - This selection behaves exactly like the Alt-Z
     Keystroke Command discussed on page 21 earlier.
     
     This selection returns you to MENU MODE.
     
     o EXIT TO DOS - When you select this choice, you will be asked to
     confirm your request. If, in response to the "Are you sure?" question,
     you press the `Y' key, you will be taken back to the DOS prompt. If any
     other key is pressed you will return to MENU MODE.









































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                27


     THE MODEM MENU
     
     The Modem menu contains choices that relate to both the Modem and the
     Communications port.
     
     o RESET MODEM - Issues the same Modem Initialization String created
     during installation. After the initialization string has been sent to
     the modem you are returned to TERMINAL MODE.
     
     o GO TO ONLINE STATE - ONLINE sends the Hayes ATO command to the modem
     returning you to the Online status. Use this command only if the OFFLINE
     command (described below) was issued. After the ATO command is sent you
     are returned to TERMINAL MODE.
     
     o GO TO OFFLINE STATE - OFFLINE sends the Hayes `+++' command to the
     modem dropping you out of the `online' state to issue modem commands.
     This feature will rarely, if ever, be used. It is available for the so
     called `Power User'. The ONLINE option above resumes normal operation.
     
     This selection keeps you in the MENU MODE.
     
     o CHANGE PARAMETERS - This selection is used to change baud rates or
     communication ports while ONE TO ONE is running. It behaves exactly like
     the Alt-P Keystroke Command discussed on page 20.
     
     This selection returns you to TERMINAL MODE.
     
     o EDIT MODEM INITIALIZATION - You may want to change the modem
     initialization string at some point in the future. You could have
     installed ONE TO ONE a long time ago and selected the default
     initialization string. Now you are a true "power user" and have decided
     to alter some of the default S registers, etc. This menu choice allows
     you to change the way that the modem is configured when ONE TO ONE
     starts.
     
     When you select this option you will see the current modem
     initialization string displayed. You may edit the string using your
     modem commands. Embedded command characters are shown below the editing
     line. They are:
     
               ~ = 0.5 seconds of delay for each ~ that is encountered.
               { = Simulates pressing the ENTER key.
               ^ = Treats the following character as a Ctrl-character.
     
     Press `Esc' at any time and no changes will be saved to disk. Otherwise,
     when you finish editing press ENTER and the changes will be saved for
     future use.
     
     This selection returns you to TERMINAL MODE.








     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                28


     THE PHONE MENU
     
     o DIAL THE PHONE - Select this option to activate and display the
     Dialing Directory. The directory can contain up to 100 entries.  DIAL
     THE PHONE behaves exactly like the Alt-D KeyStroke Command in TERMINAL
     MODE. The options available are:
     
               PgUp)Previous List  - PREVIOUS 10 Directory Entries.
               PgDn)Next List      - NEXT 10 Directory Entries.
               D)ial an Entry      - Asks "Which Entry?" then dials it.
               P)rint Listing      - Print Directory Listing.
               R)evise an Entry    - Add/Revise names and numbers.
               M)anual Dial        - Dial a number from the keyboard.
               E)rase an Entry     - Delete an existing entry.
               Q)uit               - Returns to TERMINAL MODE.
               
     After a number is dialed you are returned to TERMINAL MODE. CONNECT will
     appear in the Incoming Text window indicating that the call was
     successful. Otherwise, you see NO CARRIER and a connection could not be
     established.
     
     o HANG UP (Disconnect) - This command sends the Hayes ATH command to
     hang up the phone. The message NO CARRIER appears if you were online.
     HANG UP is identical to the Alt-H Keystroke Command discussed on page 19
     and returns you to TERMINAL MODE.
     
     o ANSWER THE PHONE NOW - This choice sends the Hayes ATA command telling
     the modem to answer the phone now, without waiting for a ring. Before
     selecting ANSWER THE PHONE make certain the word RING appears in the
     Incoming Text window indicating a caller. When a connection is
     established the word CONNECT appears in the Incoming Text window.
     Otherwise, the message NO CARRIER will appear. If this selection is made
     when the phone isn't ringing press any key and the modem will stop
     trying for a connection.
     
     This selection returns you to TERMINAL MODE.
     
     o TAKE PHONE OFF HOOK - This selection issues the Hayes ATH1 command
     telling the modem to take the phone off the hook. Incoming calls will
     get a busy signal. TAKE PHONE OFF HOOK will NOT put the modem into
     command mode (e.g. `+++' is not sent). It must already be in command
     mode for this to work.
     
     This selection returns you to TERMINAL MODE.
     
     o PUT PHONE ON HOOK - This selection issues the Hayes ATH0 command
     telling the modem to put the phone back on the hook. ON HOOK does NOT
     put the modem into command mode, it simply puts the phone `back on the
     hook' after TAKE PHONE OFF HOOK is issued. ON HOOK will send the ATH0
     command out the comm port if you are `online'. The modem must be in
     command mode for this feature to work.
     
     This selection returns you to TERMINAL MODE.
     



     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                29


     o GO FROM VOICE TO DATA - This feature allows a `voice' call to be
     converted into a `data' call without re-dialing the number. It will work
     ONLY if BOTH phones and BOTH modems are active at the same time. If
     either phone must be unplugged to use the modem this feature will not
     work.
     
     VOICE TO DATA takes a little cooperation but it's really quite easy.
     Just follow these steps:
     
     1) Both parties select VOICE TO DATA from the PHONE MENU.
     2) Decide who will be the CALLER and who will be the ANSWERER.
     3) Then the CALLER presses `C' and the ANSWERER presses `A'.
     4) Hang up the phones and let the computers take over!
     
     CONNECT should appear in the Incoming Text window. Otherwise, something
     went wrong. Redial via computer.  Note: not all modems will allow you to
     do this.  I have heard from a few users that can't get this feature to
     work with their modems.  Only experimentation will tell you whether or
     not you can use this option with your modem.
     
     When the ANSWERER pressed `A' the Hayes ATA command was sent to the
     modem. When the CALLER pressed `C' the Hayes ATD command was sent.
     These commands could have been typed in TERMINAL MODE but that takes all
     of the mystery out of it, doesn't it?
     
     This selection returns you to TERMINAL MODE.
     
     o GO FROM DATA TO VOICE - This feature allows a `data' call to be
     converted into a `voice' call without re-dialing the number. It will
     work ONLY if BOTH phones and BOTH modems are active at the same time. If
     either modem must be unplugged to use the phone this feature will not
     work.
     
     DATA TO VOICE takes a little cooperation but it's really quite easy.
     Just follow these steps:
     
     1) Both parties agree to `switch' to a voice call.
     2) Both parties highlight DATA TO VOICE in the PHONE MENU.
     3) Both parties pick up the phone and THEN press ENTER.
     4) The computers hang up and the humans take over!
     
     Picking up the receiver and pressing ALT-H will accomplish the same
     thing and is much easier. DATA TO VOICE is included in the menu for the
     sake of completeness.
     
     This selection returns you to TERMINAL MODE.
     
     o SELECT DIALING MODE - This feature is great for people using data
     communications in different locations (traveling salesmen?). SELECT
     DIALING MODE permits changing between Touch Tone and Pulse dialing
     without `restarting' ONE TO ONE. The new dialing mode will be written to
     disk saving it with your other parameters.
     This selection returns you to the TERMINAL MODE.




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                30


     THE TOGGLES MENU
     
     THE TOGGLES MENU contains choices that are turned ON or OFF. Selections
     that are ON will be displayed with an asterisk. The choice is OFF when
     there is no asterisk.
     
     EXAMPLE:
                 Chat (Wait for CR)
               * Capture Keystrokes
               * Auto-Answer
     
     In this example Chat mode is OFF but the others are active.
     
     o CHAT (Wait for CR) - When CHAT MODE is active (ON) your keystrokes are
     saved to a buffer until ENTER is pressed. Then all of your typing is
     sent at once. Your friend will never see your mistakes.
     
     Text will still appear in the Incoming Text window as usual. The only
     indication that anything is different is the message on the Dividing
     Bar, "Chat Mode - Press `Esc' to return to normal mode". CHAT MODE
     active keeps you in MENU MODE and prevents any other menu selections.
     Press `Esc' to return to exit.
     
     o CAPTURE SESSION - This selection behaves exactly like the Ctrl-Home
     Keystroke Command in TERMINAL MODE discussed on page 22. CAPTURE SESSION
     active (ON) allows ONE TO ONE to store all incoming keystrokes in a file
     named CAPTURE.121. If CAPTURE.121 is not found it is created. Thereafter
     it is opened in the APPEND MODE to avoid overwriting previously saved
     keystrokes.
     
     This selection returns you to TERMINAL MODE.
     
     o AUTO-ANSWER - This issues the Hayes ATS0=1 command to put the modem in
     Auto-Answer mode. The phone will now be answered on the first ring.
     Making this selection again issues the Hayes ATS0=0 command to tell the
     modem not to answer the phone at all.
     
     The phone MUST NOT BE RINGING when AUTO-ANSWER is invoked. If the phone
     is ringing choose ANSWER THE PHONE NOW from MENU MODE or Alt-A in
     TERMINAL MODE.
     
     This selection returns you to TERMINAL MODE.
     
     o MODEM ECHO - MODEM ECHO determines whether the modem should echo every
     character typed. If MODEM ECHO is ON, every keystroke you press will
     appear in both the Incoming Text AND Outgoing Text windows. This is
     rarely necessary. It does come in handy for checking to see whether your
     modem is hanging in there. It could also allow you to talk to yourself
     if you can't find anyone else at home. (Make sure nobody sees you.)
     
     This selection returns you to TERMINAL MODE.
     





     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                31


     o INCOMING KEY-CLICKS - When this option is active a faint "clicking"
     sound is heard with each incoming character. This can be handy. You may
     not be paying attention to the Incoming Text window but the "clicks"
     will alert you to an incoming message. As expected, choosing INCOMING
     KEY-CLICKS again will turn the "clicks" OFF so as not to disturb you.
     
     The initial status of INCOMING KEY-CLICKS is determined when ONE TO ONE
     is first installed. You can save all of the current parameters
     (including Key-Click status) by selecting `Save OPTIONS.121' in the
     FILES MENU.
     
     This selection returns you to TERMINAL MODE.
     












































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                32


     THE SCREEN MENU
     
     o CLEAR BOTH SCREENS - This selection will cause the Incoming Text,
     Outgoing Text, and Dividing Bar to be cleared of their current contents.
     
     This selection returns you to TERMINAL MODE.
     
     o CLEAR INCOMING SCREEN - This selection will cause the Incoming Text
     window to be cleared of its contents. The Outgoing Text window will
     remain unchanged.
     
     This selection returns you to TERMINAL MODE.
     
     o CLEAR OUTGOING SCREEN - This selection will cause the Outgoing Text
     window to be cleared of its contents. The Incoming Text window will
     remain unchanged.
     
     This selection returns you to TERMINAL MODE.
     
     o ADJUST DIVIDING BAR - The Dividing Bar separates the Incoming from the
     Outgoing Text. ADJUST DIVIDING BAR allows you to position the Dividing
     Bar to suit your tastes. Select this option then use the Up and Down
     Arrows to move the bar up or down. Press `Esc' when you are satisfied
     with the Dividing Bar's position.
     
     This selection returns you to TERMINAL MODE.
     
     o CHANGE MONITOR TYPES - This choice allows you to adapt ONE TO ONE to
     the type of monitor in use. Choose between:
     
               1) Monochrome
               2) Color
               3) Monochrome with shades of grey.
     
     Press `Esc' and nothing will be changed. A selection will save the
     parameters to disk and the screen resets to reflect your choice.
     
     This selection returns you to TERMINAL MODE.



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                33


     THE KEYS MENU
     
     o EDIT CTRLKeys - Messages can be attached to Ctrl-Keystrokes. Hold down
     `Ctrl' then press a letter to send the message attached to that
     character. EDIT CTRLKeys defines the messages attached to the Ctrl-
     characters.
     
     This selection will prompt you to press the Ctrl-Keystroke to edit. Any
     letter from A-Z can be assigned to a Ctrl-Keystroke with four
     exceptions. You CANNOT use:
     
               H - because Ctrl-H is the same as a backspace.
               J - because Ctrl-J is the same as a Line-Feed.
               M - because Ctrl-M is the same as the ENTER key.
               X - because Ctrl-X is reserved for file transfer aborts.
     
     Any other key is acceptable. Select any other letter and then enter or
     edit the phrase to be attached to this Keystroke.
     
     There are two special symbols that can be embedded in your message:
     
               1) ^ = Causes a BEEP to be sent.
               2) { = Causes a Carriage Return (ENTER key) to be sent.
     
     When the message is complete press ENTER. Define more keys the same way
     or press `Esc' to quit. You will be asked "Save The Changes To Disk?".
     Press "Y" and the CTRLTEXT.121 file is created (or updated).
     
     o SHOW CTRLKeys - This selection will scroll the messages attached to
     Ctrl-Keystrokes in a screen window. Press `Ctrl-S' to Start and Stop the
     scrolling. Press `Ctrl- X' to abort. This handy feature is a great
     `memory jogger'.
     
     o Print CTRLKeys - This selection will print the currently defined Ctrl-
     Keystrokes and their attached messages. This is highly recommended! If
     you define all of your keys and keep the list posted beside your
     computer, your life will be much fuller and you will magically obtain
     great wealth!  Your children will behave, your car will get better
     mileage, and your mortgage will be paid off by an unknown benefactor.
     (Just kidding, of course.  Cliff Batson's comments should not be
     considered as investment advice.)
















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                34


     TIPS AND TRICKS
     
     
     CTRL-KEYSTROKE MESSAGES.
     
     The Ctrl-Keystroke feature was added as a convenience. I realized that
     messages were often repeated during a "conversation". ONE TO ONE Version
     2.2 incorporated Ctrl-Keystroke to eliminate this repetition and add a
     little `flavor'. This is a very handy feature! Some suggestions for
     messages to use are listed below.
     
               Ctrl-C: "Call me back, voice. OK?"
               Ctrl-G: "Greetings. Take me to Bill Gates."
               Ctrl-I: "^Interrupt..."
               Ctrl-N: "Nobody talks about my mama!"
               Ctrl-P: "Pick up the phone now. OK?"
               Ctrl-Q: "Quit Interrupting!"
               Ctrl-T: "Let's transfer the file in 10 seconds. OK?"
               Ctrl-W: "What do you mean?"
     
     You get the idea. Use your imagination. (A friend has attached insults
     to his Ctrl-Keystrokes.) This is a fun feature!
     
     CALL WAITING PROBLEMS
     
     Call Waiting can cause problems with telecommunications. Turning it off
     is very easy. Use the appropriate method listed below.
     
     Touch Tone Dialing Service: Prefix the phone number with *70. (e.g. *70
     404 555 1212)
     
     Pulse Dialing Service: Prefix the phone number with 1170. (e.g. 1170 404
     555 1212)
     
     This disables Call-Waiting for the duration of this one call only.
     
     GO FROM DATA TO VOICE.
     
     When you're through transferring files and want to go back to voice do
     the following:
     
     Type a message to your friend telling him/her to "Pick up the phone and
     then press Alt-H".
     
     Perform step above now. (practice what you preach.)
     
     In a few seconds you should hear the modems disconnect and you will be
     able to talk to each other again.









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                35


     SAVING OPTIONS.121
     
     In the old days (version 1.0) OPTIONS.121 was erased and ONE TO ONE
     restarted just to change a parameter. Version 2.2 changed all that with
     the addition of SAVE OPTIONS.121 in the FILES MENU. The current
     parameters are saved to disk with this new menu choice. The next time
     ONE TO ONE is started these changes take effect automatically.
     
     Something you should be aware of ... whenever the parameters are saved,
     ALL of the parameters are saved. Be cautious! Make certain they are set
     to your satisfaction BEFORE saving OPTIONS.121 to disk. For example,
     let's say you changed baud rates to talk to a friend with a slower modem
     (Are you saying it?) and then decided to adjust the dividing bar.     Wh
     en you finish adjusting the dividing bar you are prompted "Save Changes
     To Disk?". If you answer 'Y' (yes) then ALL of your parameters will be
     saved to disk. The next time you run ONE TO ONE, it will put your modem
     in the slower baud rate automatically.
     
     Be aware of this and you can avoid a mysterious hassle.
     
     If you have any tips or tricks using ONE TO ONE, send them in! Write me
     at the address below...
     
     
     
                              Cliff Batson
                              C/O:  Digital Transit
                              3360 Towneship Road Antioch, TN
                              37013
     
     
     
     The latest version of ONE TO ONE is always available on:
     
     Cumberland BBS 1-615-526-3347
     
     SYSOPS: Dean Carothers & Del Robinson




















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                36


     FINAL REMARKS
     
     
     ONE TO ONE was released nearly two years ago. This new version (2.3)
     represents some "tweaking" of version 2.2. In a way, I'm a little
     embarrassed by ONE TO ONE. I've learned so much more about programming
     and "slickness" in the last couple of years that I'd love to just sit
     down and rewrite ONE TO ONE from scratch. Maybe if Ed McMahon calls me
     telling me that I've won the Publisher's Clearing House Sweepstakes,
     I'll throw away the old code and start anew.
     
     I'm grateful for those that have taken the time to become registered
     users.
     
     Enjoy this new version of ONE TO ONE!  It was written with ALL of us in
     mind.  Friends computing with friends.
     
     If you've used ONE TO ONE for two weeks ... you're probably hooked! Go
     ahead. Become a registered user! We need your support!
     
     If you are basically an honest person but keep "putting off" paying for
     your "ShareWare" programs ... do what I do ... write the name, address
     and amount down on a piece of paper and throw it in the pile of bills to
     pay. Treat them like the power bill. Payment due for SERVICES RENDERED.
     
     Send in your payment if you like the product.
     
     If you have suggestions please drop me a note. If you prefer to leave a
     message on my answering machine call 615-361-3655 during WORK HOURS
     (8:00 a.m. - 5:00 p.m. Central Time Zone). You'll notice that these are
     NORMAL work hours - NOT programmer's work hours.


























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                37


     APPENDIX I
     
                             ONE TO ONE  Version 2.3
               ----------------------------------------------------
                                REGISTRATION FORM
     
     Please Print
     
     Date:__/__ /__
     
     Name:____________________________________________________________
     
     Company:_________________________________________________________
     
     Title:___________________________________________________________
     
     Address:_________________________________________________________
     
           :__________________________________________________________
     
           :__________________________________________________________
     
     Phone#:__________________________________________________________
     
     =================================================================
     
     COMMENTS/SUGGESTIONS:____________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     Please Register Me For #_____ Copies Of ONE TO ONE
     
     (Suggested Contribution:  $15.00 - $20.00 per copy) Enclosed is my check
     or Money Order for $__________
     
                             Make Checks Payable To:
                                         
                                 Digital Transit
                                 3360 Towneship Road
                                 Antioch, TN   37013











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                38


     APPENDIX II
     
     
     ONE TO ONE & XMODEM
     
     ONE TO ONE uses the XMODEM file transfer protocol. XMODEM, developed by
     Ward Christensen and others in the late 1970's, has become a standard
     for transferring files over phone lines.
     
     When a file is transferred via XMODEM it is broken into 128 character
     data blocks.  Each block is sent sequentially. Actually, more than 128
     characters are sent in each block. The format of an XMODEM block is
     listed below:
     
               OFFSET INTO BLOCK      CHARACTERS
               -----------------      -----------------------------
                               0      Start Of Header
                     (ASCII 1) 1      Block Number (starts with #1)
                               2      One's Compliment of Block Number
                         3 - 130      128 Bytes Of File Being Transferred
                             131      Checksum.
               -----------------
                      Total: 132 Characters Per Block
     
     ONE TO ONE allows you to type during file transfers by exchanging
     keystroke data between blocks. At 1200 baud, a block is sent
     approximately every 1.3 seconds. This means that you will see the
     incoming messages updated every 1.3 seconds. Although it may appear to
     be a little "jerky", it beats the heck out of twiddling your thumbs
     while you wait for your file transfer to be completed! Of course, at
     2400 baud it's half as jerky. Now THERE'S a good excuse to rush out and
     buy a new modem. "But Honey, my keystrokes will be less jerky now that
     I've spent our pension on some new hardware!". Maybe YOUR spouse will
     understand.























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                39


     APPENDIX III
     
     
     PHONE DIRECTORY STRUCTURE
     
     For Programmers: The phone directory entries are held in an array of 100
     structures. The structure definition is shown below:
     
     struct dial_info         /* Each entry is stored in a copy of this */
          {
          int in_use;         /* Whether this number is in use        */
          char name[31];      /* The name of the person to call       */
          char number[21];    /* The phone number to dial (ascii)     */
          int baud;           /* Baud rate for this phone number      */
          char parity;        /* Always set to 'N' for NONE           */
          int databits;       /* Always set to EIGHT                  */
          int stopbits;       /* Always set to ONE                    */
          };
     
     Note: There is a small utility program called 121SORT.EXE that is
     included with ONE TO ONE. 121SORT sorts the phone directory
     alphabetically.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                40


     APPENDIX IV
     
     
     OPTIONS.121 STRUCTURE
     
     For Programmers: OPTIONS.121 is the configuration file for ONE TO ONE.
     If this file is not found when ONE TO ONE is run the program will prompt
     you to "answer a few questions..." then create it.
     
     The file OPTIONS.121 is stored on disk as a binary file. The contents of
     the structure below are written to disk 1) when the program can't find
     an existing copy of OPTIONS.121 ... or 2) whenever you tell ONE TO ONE
     to save changes made with the pull-down menus.
     
     
     
     struct config  /* configuration structure for ONE TO ONE */
          {    
          int version;             /* Version number of this file (2) */
          int port;                /* Com port -1                     */
          int baud;                /* Baud rate to initialize port    */
          int databits;            /* Always set to EIGHT             */
          char parity;             /* Always set to 'N' for NONE      */
          int stopbits;            /* Always set to ONE               */
          int sound;               /* 1 Key-Clicks ON, 0 Key-Clicks OFF */
          int screencolor;         /* Attribute of full screen color  */
          int pldncolor;           /* Attribute of pull-down menus    */
          int msgcolor;            /* Attribute of pop-up messages    */
          int divide_row;          /* Row for the dividing bar to appear */
          int tone_or_pulse;       /* 0 = Touch-Tone, 1 = Pulse       */
          char modeminit[241];     /* Modem initialization string     */
          };
     
























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                41


     APPENDIX V
     
     
     COMMUNICATIONS PORT ADDRESSES
     
     ONE TO ONE allows you to use 4 comm ports; COM1:, COM2:, COM3:, and
     COM4:. Each of these 4 ports has 2 unique pieces of information that let
     the computer know how to communicate with it.  These 2 items are 1)Port
     Address and 2) Interrupt Request Lines (IRQ).
     
     The following table shows the port address and IRQ for all 4 comm ports
     supported by ONE TO ONE...
     
                         Port      Address   IRQ
                         ----      -------   ---
                         COM1         3F8H    4
                         COM2         2F8H    3
                         COM3         3E8H    4
                         COM4         2E8H    3
     
     
     The data for COM1 and COM2 are standards in the PC world.  COM3 and COM4
     data is sometimes different than what is shown here, although it is rare
     to find a difference.
     
     































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                42


     APPENDIX VI
     
     
     
     ONE TO ONE PROGRAMMING TRIVIA
     
     Programming Information
     
     This information is included for the terminally curious (pun intended).
     
     Equipment:
               o AT&T PC 6300 (640k, Hard Disk, Qubie' modem)
               o Compaq Portable (with Null Modem Cable)
               o IMS AT-Clone (42m Hard Disk, Qubie' 2400 modem)
               o NEC MultiSpeed EL laptop
     
     Languages:
               o The C programming language and 808x Assembler.
               o C Compiler: Microsoft C Compiler (version 5.0)
               o Assembler: Microsoft Macro Assembler (version 5.1)
     
     Other:
               o Greenleaf Function Library (version 3.03)
               o Greenleaf Comm Library (version 2.03)
     
     When:
               o Late August, 1986 - Mid December, 1986 (Version 1.0)
               o Mid January, 1987 - Mid February, 1987 (Versions 2.0 - 2.2)
               o Mid July, 1988 (Version 2.3)
               
     Where:
               o Antioch, TN (Suburb of Nashville)

























     Copyright (C) 1986, 1987, 1988 by Digital Transit
```
{% endraw %}

## 121SORT.DOC

{% raw %}
```
121SORT.DOC - Documentation for the 121SORT utility           May 23rd, 1988

Author: Cliff Batson

The 121SORT.EXE program is a simple utility to sort the dialing directory
of the One To One(tm) communications program.  It sorts the names in the 
dialing directory in alphabetical order.

Usage:  121SORT DIRECTORY_NAME

Where DIRECTORY_NAME is the full name of the One To One dialing directory.

Note: This utility sorts One To One version 2.x directories only.  If you 
      try to sort any other file with 121SORT you will get an error message.
      Any users still using One To One version 1.0 should upgrade to the
      latest version which can always be found on the following BBS...

                            The Cumberland BBS
                           Dean Carothers, SYSOP
                              Cookeville, TN
                              (615) 526-3347

    Copyright (C) 1986, 1987, 1988 Digital Transit.  All Rights Reserved.
```
{% endraw %}

## 121.DOC

{% raw %}
```
@CB





     
     
     
     
     
     
     
                            O N E    T O    O N E (tm)
                                         
                         Personal Communications Software
                                         
                                   Version 2.3
     
     
     
     
     
     
     
     
     
                        R E F E R E N C E     M A N U A L
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
                                 Digital Transit
                                 3360 Towneship Road
                                 Antioch, TN  37013
     
     
     
     










     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                2


     WARRANTY
     
     
     A lot of time and effort have gone into making ONE TO ONE a unique and
     efficient communications program. Comments from current users indicate
     that the program works and works well. However, on the off chance that
     something unfortunate does occur we must state the following:
     
     
     Digital Transit makes no warranty of any kind, express or implied,
     including without limitation, any warranties of merchantability and/or
     fitness for a particular purpose.  Digital Transit shall not be liable
     for any damages, whether direct, indirect, special or consequential
     arising from a failure of this program to operate in the manner desired
     by the user.  Digital Transit shall not be liable for any damage to data
     or property which may be caused directly or indirectly by the use of the
     program.
     
     IN NO EVENT WILL DIGITAL TRANSIT BE LIABLE TO YOU FOR ANY DAMAGES,
     INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR
     CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR INABILITY TO USE THE
     PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.
     
     Digital Transit is making ONE TO ONE available through the User
     Supported concept of software distribution.  IF THIS PROGRAM DOESN'T FIT
     YOUR NEEDS ... DON'T BUY IT.  However, if you do use this program and
     then find that it doesn't work as claimed, let us know. We should be
     able to fix most anything within 48 hours. We don't expect to receive
     your money UNTIL you are satisfied!




























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                3


     TRADEMARKS
     
     
     ONE TO ONE is a trademark of Digital Transit
     
     Microsoft, Microsoft C, MS, and MS-DOS are registered trademarks of
     Microsoft Corporation.
     
     IBM and PC-DOS are registered trademarks of International Business
     Machines Corporation.
     
     Hayes is a trademark of Hayes Microcomputer Products, Inc.
     
     Touch Tone and AT&T are trademarks of American Telephone & Telegraph
     Company.
     
     COMPAQ is a registered trademark of COMPAQ Computer Corporation
     
     ARC is a trademark of System Enhancement Associates
     
     The  Greenleaf Comm Library and The Greenleaf Functions are trademarks
     of Greenleaf Software, Inc.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                4


     TABLE OF CONTENTS
     
     
     WARRANTY.....................................................   2
     TRADEMARKS...................................................   3
     WHAT IS ONE TO ONE? .........................................   5
     SHAREWARE NOTES .............................................   6
     ACKNOWLEDGMENTS .............................................   8
     CONVENTIONS USED IN THIS MANUAL .............................   9
     SYSTEM REQUIREMENTS .........................................  10
     ONE TO ONE SYSTEM FILES .....................................  11
     GETTING STARTED .............................................  13
     STARTUP OPTIONS .............................................  15
     PRIMARY SCREEN DISPLAY ......................................  16
     TERMINAL & MENU MODES .......................................  17
     TERMINAL MODE KEYSTROKE COMMANDS ............................  19
     Alt-A: Answer The Phone .....................................  19
     Alt-C: Clear The Screen .....................................  19
     Alt-D: Dialing Directory ....................................  19
     Alt-H: Hang Up The Phone ....................................  19
     Alt-M: Modem Echo ...........................................  20
     Alt-P: Change Parameters ....................................  20
     Alt-R: Redial The Last Number ...............................  20
     Alt-T: Chat Mode ............................................  20
     Alt-X: Exit To DOS ..........................................  21
     Alt-Z: Visit DOS (Shell) ....................................  21
     PgUp: Upload (Send) A File ..................................  21
     PgDn: Download (Receive) A File .............................  22
     Ctrl-Enter: End of Message Indicator ........................  22
     Ctrl-Home: Capture Keystrokes ...............................  22
     Ctrl-Keystroke: Send CTRLTEXT Messages ......................  22
     Home or F1: Help ............................................  22
     Esc or `+': Switch From Terminal To Menus ...................  22
     MENU MODE ...................................................  23
     MENU DESCRIPTIONS
          THE INFO MENU............................................ 24
          THE FILES MENU .......................................... 24
          THE MODEM MENU .......................................... 27
          THE PHONE MENU .......................................... 28
          THE TOGGLES MENU ........................................ 30
          THE SCREEN MENU ......................................... 32
          THE KEYS MENU ........................................... 33
     TIPS AND TRICKS .............................................  34
     FINAL REMARKS ...............................................  36
     
     APPENDIX I   ORDER FORM .....................................  37
     APPENDIX II  ONE TO ONE AND XMODEM ..........................  38
     APPENDIX III PHONE DIRECTORY STRUCTURE ......................  39
     APPENDIX IV  OPTIONS.121 STRUCTURE ..........................  40
     APPENDIX V   COMMUNICATIONS PORT ADDRESSES ..................  41
     APPENDIX VI  ONE TO ONE PROGRAMMING TRIVIA ..................  42






     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                5


     WHAT IS ONE TO ONE?
     
     
     ONE TO ONE is a telecommunications package designed for those of us who
     sometimes call friends with computers. The many sophisticated programs
     that are currently available do a great job for accessing bulletin
     boards, information services, etc. HOWEVER, they are less than desirable
     when it comes to two human beings trying to communicate over the phone
     lines via modem.
     
     ONE TO ONE is the first communications program available that attempts
     to address the special needs of people sharing data with other people.
     
     What does ONE TO ONE offer that the others don't?  With ONE TO ONE, you
     and your friends can:
     
     o Type messages to each other while a file transfer is in progress!
     
     o Never worry about garbled text caused by two people typing at the same
     time.  Incoming and Outgoing text appear in separate windows on screen.
     
     o "Share" a text file.  You and a friend can be looking at the same text
     file simultaneously.  Both of you will have control over scrolling the
     files contents in a window.  At any time, you can pause and type notes
     to each other about the file that you are sharing.
     
     o Best of all ... the price is right!  A suggested contribution of $15-
     $20 is cheap at twice the price.
     
     ONE TO ONE is an excellent communications program designed with the
     `friend to friend' computer network in mind.  With a little practice you
     will find it to be a very useful, interactive and entertaining file
     transfer utility.
























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                6


     SHAREWARE NOTES
     
     
     A Computer without software is like a toaster without bread. Without
     software, our computers are useless so we buy the programs that put
     expensive hardware to work. Unfortunately, computer software is very
     expensive which makes it tough to get EVERYTHING we need.
     
     What's even worse is that very few commercial software dealers allow us
     to open their package, try it out and return it if we don't like it.
     Those that do always charge an outrageous re-stocking fee.
     
     Then along comes User Supported software. The basic idea is that you,
     the user, should have the right to "try before you buy". If you test the
     software and decide that you like it, you send the author the money to
     pay for it. Since the author doesn't have the high marketing overhead he
     can charge much less than the big boys.
     
     Advantages:
               o Try before you buy. If you don't like it, don't buy it!
               
               o The price is right. You don't pay for marketing overhead.
               
               o The quality is right. Most software is written by
               professional programmers that know what they're doing. If the
               quality isn't there, you'll know it BEFORE you spend any
               money.
               
               o Updates are more frequent. The programmers are frequently in
               close contact with the users and modify the programs based on
               user input. The programs are then distributed via modem not
               dealer/distributor networks. The documentation is a file on
               the program disk. No waiting for a new and expensive
               reprinting of the manual.
     
     Disadvantages:
               o Telephone support is hard to come by. (I've never needed any
               from a User Supported product.)
               
               o Latest figures indicate that less than 10% of the users
               actually pay the author for the program.
               
               o This is the reason for the first disadvantage. It's hard for
               someone to give up a PAYING job as a professional programmer
               to support NON-PAYING users.
     
     There are several packages I like but think the author is asking too
     much so I've stopped using them. Perhaps I should have sent the author
     what I think the program is worth and risk hurting his/her feelings.
     
     Anyway, you know where I stand. A suggested price of $15-$20 is a
     bargain considering the quality of the product. If in your opinion you
     think it's only worth $5, SEND IT IN. However, if you send less than




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                7


     $15.00 please send a note letting us know what we can do to make ONE TO
     ONE more valuable.
     
     Clearly, the User Supported concept is advantageous for us all. But we
     must take it more seriously if it's going to work. Cast your vote for
     the User Supported concept by paying for the programs you use.
     
     Before I put the soap box away...
     
     ONE TO ONE is a professional-quality software package that is being
     distributed through electronic rather than traditional marketing
     channels. It is NOT free software. If you find this program to be of
     use, you are urged to send a small contribution (in the $15 - $20 range)
     to the author at the address below.
     
     Make checks payable to:
     
                                   Digital Transit
                                   3360 Towneship Road
                                   Antioch, TN  37013
     
     
     Whether you decide to use ONE TO ONE or not, thanks for taking the time
     to try it out. You are ENCOURAGED to distribute this software in any way
     that you see fit, providing the following conditions are met:
     
               o You must receive NO COMPENSATION for distributing ONE TO
               ONE. (Compensated Electronic Distribution Services such as
               BBS's, Compuserve, Genie, etc., can distribute ONE TO ONE
               legally.)
               
               o The program and documentation must be distributed together.
               
               o The program and documentation must be unmodified.
               
               o ONE TO ONE may not be distributed in association with any
               other product or service unless an arrangement has been
               negotiated with Digital Transit.
     
     Distributors of Public Domain and User Supported software may not
     distribute ONE TO ONE without written permission from Digital Transit.
     You will most likely get permission, but written permission is REQUIRED.
     
     Anyone interested in a site license, or in bundling ONE TO ONE with
     another product, please contact the author at the above address.












     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                8


     ACKNOWLEDGEMENTS
     
     
     Thanks, Jan and Chris, for your patience.
     
     Thanks, Microsoft, for Microsoft C - the BEST MS-DOS C COMPILER.
     
     Thanks again, Microsoft, for the MASM Assembler (ver. 5.1)
     
     Thanks, Greenleaf Software, for saving me from a lot of grunt work.
     
     Thank-you beta testers, for your encouragement and design feedback.
     
     Thanks Eric Hawkins, for your good judgement and advice.
     
     Thanks Dean Carothers for your enthusiasm, knowledge and friendship for
     the past 9 years.
     
     Thank you, Steve Bell, for your expert help in editing the documentation
     of ONE TO ONE.
     
     Thanks to all of the registered users of ONE TO ONE.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                9


     CONVENTIONS USED IN THIS MANUAL
     
     
     The IBM keyboard is programmable.  That is, the keyboard isn't locked
     into any particular mode of operation.  We can redefine the keyboard to
     suit our needs.  To this end, IBM has added several interesting keys
     that operate much like the SHIFT keys on a typewriter.  We are only
     concerned with the use of the "Ctrl" and "Alt" keys right now.
     
     Whenever you see "Alt-Something" it means to press and HOLD the "Alt"
     key and THEN press the "Something" key ... at the same time.
     
     EXAMPLE:  Alt-X ... Press "X" WHILE the "Alt" key is depressed.
     
     Also, whenever you see "Ctrl-something" it means to press and HOLD the
     "Ctrl" key while you press the "something" key at the same time.
     
     EXAMPLE:  Ctrl-X    ... Press "X" WHILE the "Ctrl" key is depressed.
     
     There are keys we'll use that aren't found on typewriters.   One is the
     "Esc" key which is toward the upper left corner of the keyboard if you
     have an older computer or toward the upper right corner if you have a
     newer model.  (Why they switched it is beyond me.)  The "Numeric Keypad"
     generally found on the right side of the keyboard is also important.
     
     Depending on the state of the Num Lock (numeric lock) key, the numeric
     keypad is either in the numeric mode or the direction mode. (The Num
     Lock key behaves like the CAPS LOCK key.) In numeric mode, the keys
     generate numbers much like a calculator. In the direction mode, the
     other markings that appear on the keys are active. For instance 8, 2, 4
     and 6 move the cursor UP, DOWN, LEFT and RIGHT respectively (these keys
     are marked with arrows). Keys 7, 1, 9 and 3 are used for HOME, END, PAGE
     UP and PAGE DOWN cursor movement. Most keyboards have the PAGE UP and
     PAGE DOWN keys abbreviated. They are referred to in this manual as PgUp
     and PgDn.
     
     The RETURN key is known as the ENTER key in IBM manuals. It is located
     on the right side of the keyboard and marked with a crooked arrow
     pointing to the left. For consistency it is referred to as the ENTER
     key.

















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                10


     SYSTEM REQUIREMENTS
     
     
     ONE TO ONE requires the following:
     
     o IBM Compatible Computer
     o PC-DOS Or MS-DOS (Version 2.1 or later)
     o One Floppy Disk Drive (hard disk not required)
     o 192k Of RAM minimum
     o One RS-232 Serial Port
     o HAYES COMPATIBLE modem (supporting the Hayes AT command set)
     o An operating telephone line.
     o Someone To Call
     
     ONE TO ONE works with Monochrome as well as Color video cards. If you
     have an EGA or VGA display card, ONE TO ONE will use the CGA mode.
     
     When you install ONE TO ONE, you will be asked whether you have Touch
     Tone or Pulse phone service. ONE TO ONE will work with either.






































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                11


     ONE TO ONE SYSTEM FILES
     
     
     ONE TO ONE Version 2.3 is distributed in an archived form. The "ARC"
     archiving utility by System Enhancement Associates was used to compress
     the files to keep downloading time to a minimum. ARC has become the
     standard file compression program used for electronic software
     distribution.
     
     You should have no problem obtaining a copy of the latest version of ARC
     from your friendly neighborhood bulletin board.  Please remember that
     ARC is not free!  It saves money in the long run so why not go ahead and
     pay for it?
     
     The name of the archived file is 121-V23.ARC. After "un-arching" this
     file you will see the files listed below:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes on improvements in the current version.
     
     The only file required to start ONE TO ONE is 121.EXE.  When you run the
     program for the first time ONE TO ONE looks for other files and creates
     them if they are not found.  Those files are:
     
     OPTIONS.121
     
     OPTIONS.121 is the file that holds the current configuration parameters
     for your system. If the file OPTIONS.121 is not found it will be created
     automatically after asking you several questions. Floppy users should
     remove the write protect tab before startup.
     
     PHONEDIR.121
     
     The phone directory file is named PHONEDIR.121. When you access the
     dialing directory, PHONEDIR.121 is read from disk. If ONE TO ONE can't
     find the directory, it creates a blank one and writes it back to disk.
     
     CTRLTEXT.121
     
     Beginning with Version 2.2 you have the ability to assign phrases to
     Ctrl-characters.  For example, you could assign Ctrl-S the phrase "I'm
     Sending The File In 10 Seconds, OK?".  When Ctrl-S is pressed  this
     message would be sent automatically as though you had typed it by hand.
     It is sent quickly with no typos!  The messages associated with Ctrl-
     characters are stored in a file called CTRLTEXT.121.  This file is
     created when ONE TO ONE is executed for the first time.







     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                12


     Listed below is a brief summary of all files associated with ONE TO ONE
     Version 2.3:
     
     121-V23.ARC - The archived distribution form of ONE TO ONE.
     
     After un-archiving:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes describing improvements in release 2.0.
     
     After running ONE TO ONE for the first time:
     
     121.EXE      - The program.
     121.DOC      - The documentation for the program.
     121SORT.EXE  - A utility to sort a ONE TO ONE phone directory.
     121SORT.DOC  - The documentation for 121SORT.EXE.
     121READ.ME   - Notes reflecting any last minute changes or tips.
     WHATSNEW.121 - Notes describing improvements in release 2.0.
     OPTIONS.121  - The System Configuration File.
     PHONEDIR.121 - The Phone Directory.
     CTRLTEXT.121 - Messages attached to Ctrl-characters.
































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                13


     GETTING STARTED
     
     
     The FIRST time you start ONE TO ONE, type 121 and press ENTER. After a
     few moments you will be told that ONE TO ONE couldn't find the file
     OPTIONS.121. You are then asked to answer several questions so that a
     configuration file can be created for your particular system. Each
     question is discussed below.
     
     o Which Communications Port? (1/2/3/4):
     
     Enter the port number, 1 through 4 to reflect the serial port you use.
     If you enter the wrong number, ONE TO ONE will not be able to initialize
     the serial port and prints a message to that effect.  If that occurs use
     the Alt-P key to Change Parameters.  Anything changed with Alt-P is not
     permanent unless you save the parameters with the menu choice called
     `Save OPTIONS.121' which is found in the FILES MENU.  (More about that
     later.)
     
     o What Baud Rate? (300/1200/2400/4800/9600):
     
     Type the number representing the speed of your modem and press ENTER.
     ONE TO ONE always uses 8 data bits, 1 stop bit and No parity. You will
     not be prompted for these parameters.
     
     o Key-Clicks On Incoming Text? (Y/N):
     
     If you type `Y' in response to this question,  ONE TO ONE will cause a
     "click" to occur on each incoming character.  This can be a useful
     feature because you will always know when someone is "typing at you".
     
     o Touch Tone or Pulse Dialing? (T/P):
     
     If you have pulse dialing, you should enter a `P'.  Anything else
     defaults to Touch Tone service.
     
     o Default Modem Initialization String? (Y/N):
     
     The default modem initialization string performs the following commands:
     ... Wait 1.5 seconds ... Take the modem off-line ... Wait another 1.5
     seconds ... issue the ATZ command to reset the modem ... Wait another
     1.5 seconds ... issue the ATV1 command to set the modem result codes to
     WORDS instead of DIGITS ... and finally, issue the ATE0 command to
     disable the modem from echoing your keystrokes into the receive buffer.
     
     Ninety-nine percent of you can probably just answer `Y' accepting the
     defaults and go with it.  However, the ability to create a custom modem
     initialization string is available.









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                14


     
     To change the default setting type `N' and press ENTER.  An on-screen
     explanation of the special characters that can be imbedded in the
     initialization string is then displayed.  They are:
     
     { = The ENTER key. ~ = 0.5 second delay. ^ = Next character is
     interpreted as a control code.
     
     Enter the customized modem initialization string and press ENTER. Faster
     modems may take advantage of the extended result codes by using the ATX1
     command.  When connected the modem will detect the caller's baud rate
     and send a message to the monitor.  That way, if you're at 1200 baud and
     someone calls at 300 just use Alt-P to change parameters and establish a
     connection at the caller's rate.
     
     o What Type Of Screen Do you Have? (1/2/3):
     
     1 = Monochrome.  No colors or shades of grey.
     2 = Color.  I have a color monitor.
     3 = Monochrome, but I get nice shades of grey.
     
     ENTER `1' if you have an IBM green-screen monitor or a Monochrome
     Display Adapter card.
     
     ENTER `2' for color monitors.  In color, ONE TO ONE has white text on a
     blue background.  The pull-down menus are red with white text. Sounds
     sort of corny and patriotic, doesn't it? It looks good and it's easy on
     the eyes.
     
     ENTER `3' for monitors that display shades of grey when colors are
     represented.  Compaq and AT&T computers are known to work well like
     this. Try it if you aren't sure.  If the text on the screen is barely
     readable then this option is not for you.  Re-install ONE TO ONE by
     erasing OPTIONS.121 and then select choice number `1' for NO COLORS.
     
     After all of these questions have been answered, ONE TO ONE will create
     the OPTIONS.121 file and write it to disk for future reference.
     
     If you make mistakes while answering these questions, don't worry. The
     parameters can be changed and saved via the `pull-down' menus while
     running ONE TO ONE.
     
     Congratulations!  You now have a working copy of ONE TO ONE!  Make
     backups of these files and store in a safe place.













     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                15


     STARTUP OPTIONS
     
     
     THE 121PATH ENVIRONMENT VARIABLE
     
     ONE TO ONE can run from any directory on a hard disk and the
     configuration files will automatically be found. That's good news for
     Local Area Networks! Keep one copy of ONE TO ONE in a public directory
     and each user can set their 121PATH variable to point to his/her own
     private configuration files.
     
     This is possible because ONE TO ONE now has the ability to examine the
     environment variable table maintained by DOS. The environment variable
     is called 121PATH. To use it, modify your AUTOEXEC.BAT file to include:
     
     PATH=\PATHNAME1
     SET 121PATH=\PATHNAME2
     
     where PATHNAME1 leads to the 121.EXE directory and PATHNAME2 leads to
     the configuration file.   Reboot and these changes take effect.
     
     Now, whenever ONE TO ONE is started DOS will find 121.EXE because the
     PATH variable is set to "point" to it. Next, ONE TO ONE looks for the
     environment variable 121PATH. If it is `SET' ONE TO ONE will load
     OPTIONS.121, PHONEDIR.121 and CTRLTEXT.121 from the directory PATHNAME2
     leads to. If the files are NOT found they will be created in the
     directory pointed to by 121PATH=.  Otherwise, the files default to the
     current or PATHNAME1 directory.
     
     You can be anywhere on the hard disk and your files will be found! Move
     to the directory where you will be downloading files and run ONE TO ONE
     from there.  No need for typing long Drive/Path/File names since you are
     in the default directory for downloading.
     
     Please note that THIS IS NOT REQUIRED to run ONE TO ONE.  You may
     continue to use it without the 121PATH environment variable as you have
     in the past. However, it is a very convenient feature.
     
     STARTUP WITH AUTO-DIAL/AUTO-ANSWER
     
     ONE TO ONE will immediately dial a directory listing with the following
     startup command:
     
     121 D <ENTER>
     
     where D is a Dialing Directory Entry.











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                16


     
     121 A <ENTER>
     
     ONE TO ONE is executed and then issues the Hayes ATS0=1 command to put
     the modem in Auto-Answer mode. The phone is answered on the first ring.
     
     Both choices skip the title screen moving directly to TERMINAL MODE.
     
     
     PRIMARY SCREEN DISPLAY
     
     
     Each time ONE TO ONE is executed the title screen is displayed. It
     describes the program; warns that this is not free software; begs for
     compensation; tells who wrote it and ... waits for a keystroke. Just
     your typical User Supported software title screen. Press any key to
     clear it, automatically send the modem initialization string, enter
     TERMINAL MODE and the primary screen display. The exceptions to this are
     the `121 A' and `121 D' startup commands which skip the title screen and
     go directly to TERMINAL MODE.
     
     The primary screen is divided into four discrete sections.   They are:
     
     o The top section of the screen contains the names of all of the pull-
     down menus.  This line is referred to as the Menu Bar.
     
     o The middle section of the screen is divided by a reverse video bar
     called the Dividing Bar. INCOMING TEXT, or characters that are typed to
     us, will appear in the upper "window" of this section. OUTGOING TEXT, or
     characters that we type, will appear in the lower window.
     
     o Below the OUTGOING TEXT window there is an area set aside for the
     current communication port settings.  This area is also used for
     messages from ONE TO ONE to us. The message that you will see most
     frequently in the area is, "Press `Home' For Help".  Have you tried it
     yet?
     
     o The bottom line is the program title and copyright notice.



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                17


     TERMINAL AND MENU MODES
     
     
     When the title screen is cleared with a keystroke you enter TERMINAL
     MODE. This is where most of your ONE TO ONE life is spent. Each key
     pressed is sent out the comm port to whoever is out there.
     
     ONE TO ONE has somewhat of a split personality. You are in TERMINAL MODE
     when waiting for the phone to ring, typing messages to a friend,
     downloading or uploading files. You are in MENU MODE while pulling down
     menus and making selections from them.
     
     All of the vital choices from the menus are mapped to the keyboard. You
     can call or be called; establish a connection; type messages; send and
     receive files or hang up without once using a menu.  On the other hand,
     some operations must be carried out from the appropriate pull-down menu.
     An example is adjusting the Dividing Bar that separates the incoming
     from the outgoing text.  This option is available only from the "Screen"
     pull-down in MENU MODE.
     
     `Toggle' between TERMINAL MODE and MENU MODE by pressing either the
     `Esc' (escape) key or the `+' (grey plus) key.  Press Esc (or grey plus)
     and notice the changes.  Press it again to return.
     
     When you "toggle into" the MENU MODE you will notice two changes:
     
     o The MENU MODE is flashing to let you know that key strokes will not be
     sent over the phone lines.
     
     o The word "Info" will be highlighted on the "Menu Bar". Pressing ENTER
     (or the Down Arrow key) activates the menu.
     
     Press ENTER and the menu unfolds or is `pulled down'. The INFO MENU
     contains no choices.  It simply displays the program title, version
     number, and gives the address of the author.
     
     To remove a pull-down menu from the screen without making a change press
     `Esc' or grey plus.  Pressing the Up Arrow key until the menu goes past
     the top choice will accomplish the same thing.
     
     Make a menu selection so you can see how it's done.  If you are still in
     the Info pull-down menu remove it by one of the methods described above.
     Now press the right arrow key a few times.  Each time you press the
     right arrow the Menu choice to the right is highlighted.  When a Menu
     selection is highlighted it is ready to become active.
     
     Keep pressing the right arrow key until the SCREEN MENU is highlighted.
     Now press ENTER or the Down Arrow.  The menu will drop down and the
     first selection "Clear Both Screens" will be highlighted.
     
     IMPORTANT:  You could have pressed "S" to automatically pull down the
     SCREEN MENU.  All menus can be selected by pressing the key
     corresponding to its first letter.
     



     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                18


     
     Selecting a choice WITHIN a Menu is handled the same way. Pull-down a
     Menu as described above. Then either ...
     
     o Press the key that corresponds to it's first letter.  OR ...
     
     o Use the Up or Down arrows to highlight a choice and press ENTER.
     
     Pull-Down the SCREEN MENU and use the Down Arrow to highlight "Clear
     Outgoing Screen" and press ENTER.  Any text that was in the outgoing
     text window (the bottom half of the screen) has been cleared. (If the
     Outgoing Text window was empty you will not notice that anything
     happened. It did.)
     
     Return to TERMINAL MODE by pressing Esc twice if you are in a menu or
     once if on the Menu Selection Bar.
     
     TO RECAP ... use either of two methods to make menu selections:
     
     ARROW/ENTER METHOD - Use the arrow keys to highlight a title on the Menu
     Bar or a choice within a menu and then press ENTER.     OR ...
     
     KEYSTROKE METHOD - Press the key corresponding to the first letter of
     the menu to pull down (e.g. `M' for MODEM, etc.).  Then press the key
     that corresponds to the first letter of your choice.    Finish the
     selection by pressing ENTER.
     
     You now have all of the knowledge needed to make ONE TO ONE work for
     you. At this point you are encouraged to experiment. Call up the Help
     Screen by pressing either the key marked `Home' on the numeric keypad or
     F1. You will find a help screen for TERMINAL MODE and a separate help
     screen for MENU MODE.
     
     ONE TO ONE is very easy to use.  A lot of effort went into making the
     "user-interface" of ONE TO ONE simple and powerful.  Making menu
     selections and toggling between MENU MODE and TERMINAL MODE will become
     second nature after a little practice.
     



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                19


     TERMINAL MODE KEYSTROKE COMMANDS
     
     
     When in TERMINAL MODE you have access to most menu choices without
     switching to MENU MODE.  Certain keystrokes have been assigned the most
     frequently used menu selections.  A Keystroke Command will perform as if
     you had toggled into the MENU MODE, made a choice and toggled back into
     TERMINAL MODE.  Most keystrokes require that you hold down the `Alt' key
     while pressing the appropriate character. What follows is a listing of
     all Keystroke Commands and a description of each.
     
     Alt-A: Answer The Phone
     
     Alt-A sends the Hayes ATA command to the modem. The ATA command tells
     the modem to answer the phone. Before you press Alt-A the word RING
     should appear in the Incoming Text window. This indicates that the phone
     line attached to the modem is ringing. If a connection is established
     the word CONNECT appear in the Incoming Text window, otherwise, the
     message NO CARRIER appears. If you should press Alt-A when the phone
     isn't ringing just press any key and the modem will stop trying for a
     connection.
     
     Alt-C: Clear The Screen
     
     Alt-C clears the Incoming Text, Outgoing Text, and Dividing Bar windows
     of their current contents.
     
     Alt-D: Dialing Directory
     
     Alt-D creates a screen display of the Dialing Directory. The directory
     can contain up to 100 entries. At the bottom of the display are several
     options:
     
               PgUp)Previous List   - PREVIOUS 10 Directory Entries.
               PgDn)Next List       - NEXT 10 Directory Entries.
               D)ial an Entry       - Asks "Which Entry?" then dials it.
               P)rint Listing       - Print Directory Listing.
               R)evise an Entry     - Add/Revise names and numbers.
               M)anual Dial         - Dial a number from the keyboard.
               E)rase an Entry      - Delete an existing entry.
               Q)uit                - Returns to TERMINAL MODE.
     
     After a number is dialed you are returned to TERMINAL MODE. CONNECT will
     appear in the Incoming Text window indicating that the call was
     successful. Otherwise, no connection was established and the message NO
     CARRIER appears.
     
     Alt-H: Hang Up The Phone
     
     Alt-H sends the Hayes ATH command to hang up the phone. NO CARRIER will
     appear in the Incoming Text window if you were online when the Alt-H
     command was issued.
     




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                20


     Alt-M: Modem Echo
     
     Alt-M `toggles' Modem Echo between ON and OFF.  Modem Echo ON causes
     keyboard input to appear in the Outgoing Text window AND `echo' to the
     Incoming Text window as well.
     
     Alt-P: Change Parameters
     
     Alt-P opens the parameters window permitting changes in baud rate,
     communications port or both.  The Parameters window is divided into two
     sections.  Keys 1-4 are used to select which communications port is
     desired.  Keys 5-9 are used to select the appropriate baud rate. Press a
     key from each category (if needed) and then press ENTER. To accept the
     current setting without making any changes, press ENTER without
     indicating a number.
     
     EXAMPLE: Someone calls at 300 baud and your modem default setting is
     1200.  Press Alt-P ... select the appropriate 300 baud setting by
     pressing the `5' key and press ENTER.  That's all there is to it.
     
     IMPORTANT: ONE TO ONE always uses 8 data bits, 1 stop bit, and NO
     parity. This is not an option.
     
     Alt-P changes are not permanent!  The OPTIONS.121 file is not
     automatically modified.  The parameters will default to the most
     recently saved OPTIONS.121 configuration for the next session.
     
     Alt-R: Redial The Last Number
     
     Alt-R redials the most recent Dialing Directory number called. If no
     number has been dialed the message "There is No Number to Redial" is
     displayed.
     
     Alt-T: Chat Mode
     
     When typing messages every keystroke is transmitted immediately ...
     mistakes, corrections, misspellings ... everything. This is not amusing
     for long.
     
     There is a better way and it's called Chat Mode. Alt-T creates a buffer
     that captures all keystrokes until you press ENTER. The edited message
     is then transmitted. No one will ever know how bad a typist you really
     are! Neither the Incoming Text window nor incoming messages are
     affected.
     
     The only indication that anything is different is the message on the
     Dividing Bar, "Chat Mode - Press `Esc' to return to normal mode". Chat
     Mode locks out all other menu choices. Press `Esc' to return to TERMINAL
     MODE.
     







     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                21


     Alt-X: Exit To DOS
     
     Alt-X exits ONE TO ONE and returns to the DOS prompt. You are first told
     that you are "Exiting to DOS" and then asked for verification "Are you
     sure?". Press `Y' and return to DOS. Any other keystroke returns to
     TERMINAL MODE with no harm done.
     
     Alt-Z: Visit DOS (Shell)
     
     Alt-Z puts ONE TO ONE "on hold" and drops back to DOS. You may then
     change directories, format disks, use a text editor, etc. Type EXIT and
     press ENTER to return to ONE TO ONE. It's as though you never left! This
     feature does have two requirements:
     
     o Your computer must have enough memory to run both ONE TO ONE and your
     `other' program at the same time.
     
     o ONE TO ONE must be able to find the COMMAND.COM file somewhere in the
     system. ONE TO ONE needs the second copy of COMMAND.COM to create a "DOS
     shell". If it is not located a message appears saying that it failed to
     load the second copy of COMMAND.COM and then returns to ONE TO ONE.
     
     Experiment to see if this will work on your system. Hard disk user's
     should have no problem. However, floppy users will have to copy
     COMMAND.COM from their "boot disk" onto their ONE TO ONE disk for Alt-Z
     to work properly. Give it a try.
     
     PgUp: Upload (Send) A File
     
     Press PgUp on the numeric keypad to upload (send) a file. You are
     prompted for the filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the receiving party to acknowledge that it is ready to receive.
     At this point file transfer begins automatically.
     
     Once file transfer has begun sit back and relax if you like. BUT, if the
     other person is also using ONE TO ONE you can continue to type messages
     while the file transfer takes place! In either case you will see a
     status report of the transfer displayed on the Dividing Bar. A beeping
     sound will indicate when transfer is complete.
     
     File transfer can be aborted anytime by pressing Ctrl-X and you will
     exit gracefully. Your screen will say "Aborted by User" and you will
     hear the beeps letting you know that the transfer is finished. Your
     friend's screen will display a similar cancelation message.
     











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                22


     PgDn: Download (Receive) A File
     
     When you are ready to download (receive) a file press PgDn. You are
     prompted for a filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the sending party to begin uploading the file.
     
     The features available with file Uploading apply here. Either sit back
     or type messages ... no matter ... you will be notified when file
     transfer is complete.
     
     Ctrl-Enter: End of Message Indicator
     
     To indicate that you've finished a thought, press CTRL-ENTER which sends
     a "space", a smiley face and a Carriage Return. This IS OPTIONAL!
     Consider using it to show that something you've typed was meant to be
     said with a grin (e.g. <GRIN>).
     
     Ctrl-Home: Capture Keystrokes
     
     Ctrl-Home allows ONE TO ONE to capture all incoming keystrokes. When
     Ctrl-Home is executed "Capture is ON" appears on screen.  All incoming
     characters will be saved to a file named CAPTURE.121. To terminate
     capture press Ctrl-Home again and "Capture is OFF" will appear.
     
     If CAPTURE.121 is not found, it is created. Thereafter CAPTURE.121 is
     opened in the APPEND mode. This means that you can toggle Capture ON and
     OFF as often as you like without overwriting previously saved
     characters.
     
     Ctrl-`User Defined Key': Send CTRLTEXT Messages
     
     With the KEYS pull-down menu you can create personalized Keystroke
     Commands. For instance, Ctrl-T could be defined as "Transfer the file in
     10 seconds, Ok?". Now, when Ctrl-T is pressed this message is
     automatically transmitted. This is a convenient and error-free way to
     send commonly typed phrases and is limited only by your imagination.
     
     When you press `Ctrl' and another character simultaneously you will send
     the message that is attached to that keystroke. See the KEYS MENU
     discussion on page 33 for more details.
     
     Home or F1: Help
     
     Pressing the `Home' or F1 key displays a "help screen". Press any key to
     remove it. There are two help screens, one for TERMINAL MODE and another
     for MENU MODE. The help screen that appears corresponds to the current
     active mode.
     
     Esc or `+': Switch Between TERMINAL MODE and MENU MODE
     
     You can press either `Esc' or the `+' key to `toggle between' TERMINAL
     MODE and MENU MODE.




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                23


     MENU MODE
     
     
     Most functions can be controlled in TERMINAL MODE with Keystroke
     Commands. However some procedures must be accessed through the MENU
     MODE. Toggle into MENU MODE with either Esc or the `+' key. "Menu Mode"
     will be begin flashing on the Dividing Bar and no messages or TERMINAL
     MODE activities are possible.
     
     All menus are activated using either of the following methods:
     
     ARROW/ENTER METHOD - Use the Right or Left Arrow keys to highlight the
     desired menu title on the Menu Bar. Press the Down Arrow or ENTER key to
     pull-down the menu.
     
     KEYSTROKE METHOD - Press the key corresponding to the first letter of
     the selection you want. (e.g. `M' for Modem, etc.)
     
     When the appropriate menu is pulled down activating a specific entry is
     just as easy. To highlight your choice use either the Up/Down arrows or
     press the key corresponding to its' first letter. Then press ENTER.
     
     That's all there is to it! You simply use the arrow keys to point to
     what you want and press ENTER ... OR ... press the key that represents
     the first letter of the desired choice and press ENTER.
     
     If you need to exit a menu without making a choice just "escape out"
     with any of the following:
     
               o Press the `Esc' key - OR
               o Press the `+' key - OR
               o Press the Up Arrow until you pass the top selection.
     
     A number of menu choices will return you to TERMINAL MODE. Others leave
     you in MENU MODE.  This may seem inconsistent but it makes sense when
     the menu choice is considered. In the following menu descriptions you
     are told which selections take you back to TERMINAL MODE and which
     selections leave you in the MENU MODE.
     


















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                24


     MENU DESCRIPTIONS
     
     
     THE INFO MENU
     
     The INFO MENU is not truly a menu because it contains no selections. It
     simply displays the program title, version number, lists the address of
     the author, and displays the copyright notice. Press any key and return
     to MENU MODE.
     
     
     THE FILES MENU
     
     The FILES MENU contains choices that relate to acquiring or inspecting
     disk files.
     
     o DOWNLOAD A FILE - When you are ready to DOWNLOAD (receive) a file
     select this option (or the PgDn Keystroke Command, page 22). You are
     prompted for a filename which can be prefixed with a valid drive and
     path combination. After entering the file name ONE TO ONE will patiently
     wait for the sending party to begin uploading the file.
     
     Once file transfer has begun sit back and relax if you like. BUT, if the
     other person is also using ONE TO ONE you can continue to type messages
     while the file transfer takes place! In either case you will see a
     status report of the file transfer displayed on the Dividing Bar. A
     beeping sound will indicate that the transfer is complete.
     
     File transfer can be aborted anytime by pressing Ctrl-X and you will
     exit gracefully. Your screen will say "Aborted by User" and you will
     hear beeps letting you know that the transfer is finished. Your friend's
     screen will display a similar cancelation message.
     
     This selection returns you to TERMINAL MODE.
     
     o UPLOAD A FILE - When you are ready to upload (send) a file select this
     option (or the PgUp Keystroke Command, page 21). You are prompted for
     the filename which can be prefixed with a valid drive and path
     combination. After entering the file name ONE TO ONE will patiently wait
     for the receiving party to acknowledge that it is ready to receive. At
     this point file transfer begins automatically.
     
     The features available with file downloading apply here. Either sit back
     or type messages ... no matter ... you will be notified when file
     transfer is complete.
     
     This selection returns you to TERMINAL MODE.
     









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                25


     o VIEW A FILE - This selection acts like the TYPE command in DOS. It
     allows you to view a text file from within ONE TO ONE. A very handy
     feature indeed.  When you choose VIEW A FILE you are prompted for a
     filename which can include any valid drive or path. You are not limited
     to the current directory. After you enter the file name the screen
     "opens up" in the middle to create an 80-column viewing area.
     Instructions are displayed near the bottom of the screen. Scrolling is
     controlled with Ctrl-S or you may Abort by pressing `Esc'. After the
     file has been displayed you are prompted to press any key to continue.
     
     This selection returns you to TERMINAL MODE.
     
     o SHARE A FILE - This is a nifty feature! SHARE A FILE gives you the
     ability to share a text file with a friend. One of you acts as the
     Sender and the other as the Receiver. BOTH USERS MUST BE USING ONE TO
     ONE FOR THIS FEATURE TO WORK PROPERLY.
     
     When you and a friend share a file, your screen opens up a window at the
     top two-thirds of the display. The bottom portion of the screen is split
     into 2 sections so that you may continue to type while sharing the file.
     
     It works like this. The Sender enters the name of the text file to share
     while the `downloader' tells ONE TO ONE that he will act as the
     Receiver. Immediately both screens change to the viewing screen
     described above. The text file is then displayed, line by line, in the
     viewing area of both screens. Both parties have control of when to pause
     or abort the viewing of the file. Press Ctrl-S to pause. Then start
     typing messages to each other about what you are seeing on the screen.
     This is a convenient feature that other communication programs don't
     offer.
     
     When the entire file has been displayed (or aborted with Esc) you will
     be prompted to press a key to continue.
     
     When you press a key you will be returned to TERMINAL MODE.
     
     o DIRECTORY - This is EXACTLY like the DOS DIR command. You will be
     prompted for a file specification that could contain a Drive
     Letter/Directory/Filename or Wildcards. Enter your choice as though you
     had typed "DIR " in front of your file specification.
     
     EXAMPLE: A:\LETTER\FRED.* is sent to DOS as DIR A:\LETTER\FRED.*
     producing a directory listing of Drive A:, Directory LETTER, File
     everything related to FRED.
     
     DIRECTORY requires that ONE TO ONE be able to access COMMAND.COM on your
     program disk. Hard disk users should have no problems. Floppy users must
     copy COMMAND.COM to the ONE TO ONE program disk.
     
     This selection leaves you in MENU MODE.
     






     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                26


     o SAVE OPTIONS.121 - The OPTIONS.121 file contains the operating
     parameters for ONE TO ONE. SAVE OPTIONS.121 will save changes made
     during a session and have them active the next time ONE TO ONE is
     executed. The parameters saved are ... position of the Dividing Bar,
     Baud Rate and Communications Port, Monitor type, etc.  In short,
     everything.
     
     o VISIT DOS (SHELL) - This selection behaves exactly like the Alt-Z
     Keystroke Command discussed on page 21 earlier.
     
     This selection returns you to MENU MODE.
     
     o EXIT TO DOS - When you select this choice, you will be asked to
     confirm your request. If, in response to the "Are you sure?" question,
     you press the `Y' key, you will be taken back to the DOS prompt. If any
     other key is pressed you will return to MENU MODE.









































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                27


     THE MODEM MENU
     
     The Modem menu contains choices that relate to both the Modem and the
     Communications port.
     
     o RESET MODEM - Issues the same Modem Initialization String created
     during installation. After the initialization string has been sent to
     the modem you are returned to TERMINAL MODE.
     
     o GO TO ONLINE STATE - ONLINE sends the Hayes ATO command to the modem
     returning you to the Online status. Use this command only if the OFFLINE
     command (described below) was issued. After the ATO command is sent you
     are returned to TERMINAL MODE.
     
     o GO TO OFFLINE STATE - OFFLINE sends the Hayes `+++' command to the
     modem dropping you out of the `online' state to issue modem commands.
     This feature will rarely, if ever, be used. It is available for the so
     called `Power User'. The ONLINE option above resumes normal operation.
     
     This selection keeps you in the MENU MODE.
     
     o CHANGE PARAMETERS - This selection is used to change baud rates or
     communication ports while ONE TO ONE is running. It behaves exactly like
     the Alt-P Keystroke Command discussed on page 20.
     
     This selection returns you to TERMINAL MODE.
     
     o EDIT MODEM INITIALIZATION - You may want to change the modem
     initialization string at some point in the future. You could have
     installed ONE TO ONE a long time ago and selected the default
     initialization string. Now you are a true "power user" and have decided
     to alter some of the default S registers, etc. This menu choice allows
     you to change the way that the modem is configured when ONE TO ONE
     starts.
     
     When you select this option you will see the current modem
     initialization string displayed. You may edit the string using your
     modem commands. Embedded command characters are shown below the editing
     line. They are:
     
               ~ = 0.5 seconds of delay for each ~ that is encountered.
               { = Simulates pressing the ENTER key.
               ^ = Treats the following character as a Ctrl-character.
     
     Press `Esc' at any time and no changes will be saved to disk. Otherwise,
     when you finish editing press ENTER and the changes will be saved for
     future use.
     
     This selection returns you to TERMINAL MODE.








     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                28


     THE PHONE MENU
     
     o DIAL THE PHONE - Select this option to activate and display the
     Dialing Directory. The directory can contain up to 100 entries.  DIAL
     THE PHONE behaves exactly like the Alt-D KeyStroke Command in TERMINAL
     MODE. The options available are:
     
               PgUp)Previous List  - PREVIOUS 10 Directory Entries.
               PgDn)Next List      - NEXT 10 Directory Entries.
               D)ial an Entry      - Asks "Which Entry?" then dials it.
               P)rint Listing      - Print Directory Listing.
               R)evise an Entry    - Add/Revise names and numbers.
               M)anual Dial        - Dial a number from the keyboard.
               E)rase an Entry     - Delete an existing entry.
               Q)uit               - Returns to TERMINAL MODE.
               
     After a number is dialed you are returned to TERMINAL MODE. CONNECT will
     appear in the Incoming Text window indicating that the call was
     successful. Otherwise, you see NO CARRIER and a connection could not be
     established.
     
     o HANG UP (Disconnect) - This command sends the Hayes ATH command to
     hang up the phone. The message NO CARRIER appears if you were online.
     HANG UP is identical to the Alt-H Keystroke Command discussed on page 19
     and returns you to TERMINAL MODE.
     
     o ANSWER THE PHONE NOW - This choice sends the Hayes ATA command telling
     the modem to answer the phone now, without waiting for a ring. Before
     selecting ANSWER THE PHONE make certain the word RING appears in the
     Incoming Text window indicating a caller. When a connection is
     established the word CONNECT appears in the Incoming Text window.
     Otherwise, the message NO CARRIER will appear. If this selection is made
     when the phone isn't ringing press any key and the modem will stop
     trying for a connection.
     
     This selection returns you to TERMINAL MODE.
     
     o TAKE PHONE OFF HOOK - This selection issues the Hayes ATH1 command
     telling the modem to take the phone off the hook. Incoming calls will
     get a busy signal. TAKE PHONE OFF HOOK will NOT put the modem into
     command mode (e.g. `+++' is not sent). It must already be in command
     mode for this to work.
     
     This selection returns you to TERMINAL MODE.
     
     o PUT PHONE ON HOOK - This selection issues the Hayes ATH0 command
     telling the modem to put the phone back on the hook. ON HOOK does NOT
     put the modem into command mode, it simply puts the phone `back on the
     hook' after TAKE PHONE OFF HOOK is issued. ON HOOK will send the ATH0
     command out the comm port if you are `online'. The modem must be in
     command mode for this feature to work.
     
     This selection returns you to TERMINAL MODE.
     



     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                29


     o GO FROM VOICE TO DATA - This feature allows a `voice' call to be
     converted into a `data' call without re-dialing the number. It will work
     ONLY if BOTH phones and BOTH modems are active at the same time. If
     either phone must be unplugged to use the modem this feature will not
     work.
     
     VOICE TO DATA takes a little cooperation but it's really quite easy.
     Just follow these steps:
     
     1) Both parties select VOICE TO DATA from the PHONE MENU.
     2) Decide who will be the CALLER and who will be the ANSWERER.
     3) Then the CALLER presses `C' and the ANSWERER presses `A'.
     4) Hang up the phones and let the computers take over!
     
     CONNECT should appear in the Incoming Text window. Otherwise, something
     went wrong. Redial via computer.  Note: not all modems will allow you to
     do this.  I have heard from a few users that can't get this feature to
     work with their modems.  Only experimentation will tell you whether or
     not you can use this option with your modem.
     
     When the ANSWERER pressed `A' the Hayes ATA command was sent to the
     modem. When the CALLER pressed `C' the Hayes ATD command was sent.
     These commands could have been typed in TERMINAL MODE but that takes all
     of the mystery out of it, doesn't it?
     
     This selection returns you to TERMINAL MODE.
     
     o GO FROM DATA TO VOICE - This feature allows a `data' call to be
     converted into a `voice' call without re-dialing the number. It will
     work ONLY if BOTH phones and BOTH modems are active at the same time. If
     either modem must be unplugged to use the phone this feature will not
     work.
     
     DATA TO VOICE takes a little cooperation but it's really quite easy.
     Just follow these steps:
     
     1) Both parties agree to `switch' to a voice call.
     2) Both parties highlight DATA TO VOICE in the PHONE MENU.
     3) Both parties pick up the phone and THEN press ENTER.
     4) The computers hang up and the humans take over!
     
     Picking up the receiver and pressing ALT-H will accomplish the same
     thing and is much easier. DATA TO VOICE is included in the menu for the
     sake of completeness.
     
     This selection returns you to TERMINAL MODE.
     
     o SELECT DIALING MODE - This feature is great for people using data
     communications in different locations (traveling salesmen?). SELECT
     DIALING MODE permits changing between Touch Tone and Pulse dialing
     without `restarting' ONE TO ONE. The new dialing mode will be written to
     disk saving it with your other parameters.
     This selection returns you to the TERMINAL MODE.




     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                30


     THE TOGGLES MENU
     
     THE TOGGLES MENU contains choices that are turned ON or OFF. Selections
     that are ON will be displayed with an asterisk. The choice is OFF when
     there is no asterisk.
     
     EXAMPLE:
                 Chat (Wait for CR)
               * Capture Keystrokes
               * Auto-Answer
     
     In this example Chat mode is OFF but the others are active.
     
     o CHAT (Wait for CR) - When CHAT MODE is active (ON) your keystrokes are
     saved to a buffer until ENTER is pressed. Then all of your typing is
     sent at once. Your friend will never see your mistakes.
     
     Text will still appear in the Incoming Text window as usual. The only
     indication that anything is different is the message on the Dividing
     Bar, "Chat Mode - Press `Esc' to return to normal mode". CHAT MODE
     active keeps you in MENU MODE and prevents any other menu selections.
     Press `Esc' to return to exit.
     
     o CAPTURE SESSION - This selection behaves exactly like the Ctrl-Home
     Keystroke Command in TERMINAL MODE discussed on page 22. CAPTURE SESSION
     active (ON) allows ONE TO ONE to store all incoming keystrokes in a file
     named CAPTURE.121. If CAPTURE.121 is not found it is created. Thereafter
     it is opened in the APPEND MODE to avoid overwriting previously saved
     keystrokes.
     
     This selection returns you to TERMINAL MODE.
     
     o AUTO-ANSWER - This issues the Hayes ATS0=1 command to put the modem in
     Auto-Answer mode. The phone will now be answered on the first ring.
     Making this selection again issues the Hayes ATS0=0 command to tell the
     modem not to answer the phone at all.
     
     The phone MUST NOT BE RINGING when AUTO-ANSWER is invoked. If the phone
     is ringing choose ANSWER THE PHONE NOW from MENU MODE or Alt-A in
     TERMINAL MODE.
     
     This selection returns you to TERMINAL MODE.
     
     o MODEM ECHO - MODEM ECHO determines whether the modem should echo every
     character typed. If MODEM ECHO is ON, every keystroke you press will
     appear in both the Incoming Text AND Outgoing Text windows. This is
     rarely necessary. It does come in handy for checking to see whether your
     modem is hanging in there. It could also allow you to talk to yourself
     if you can't find anyone else at home. (Make sure nobody sees you.)
     
     This selection returns you to TERMINAL MODE.
     





     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                31


     o INCOMING KEY-CLICKS - When this option is active a faint "clicking"
     sound is heard with each incoming character. This can be handy. You may
     not be paying attention to the Incoming Text window but the "clicks"
     will alert you to an incoming message. As expected, choosing INCOMING
     KEY-CLICKS again will turn the "clicks" OFF so as not to disturb you.
     
     The initial status of INCOMING KEY-CLICKS is determined when ONE TO ONE
     is first installed. You can save all of the current parameters
     (including Key-Click status) by selecting `Save OPTIONS.121' in the
     FILES MENU.
     
     This selection returns you to TERMINAL MODE.
     












































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                32


     THE SCREEN MENU
     
     o CLEAR BOTH SCREENS - This selection will cause the Incoming Text,
     Outgoing Text, and Dividing Bar to be cleared of their current contents.
     
     This selection returns you to TERMINAL MODE.
     
     o CLEAR INCOMING SCREEN - This selection will cause the Incoming Text
     window to be cleared of its contents. The Outgoing Text window will
     remain unchanged.
     
     This selection returns you to TERMINAL MODE.
     
     o CLEAR OUTGOING SCREEN - This selection will cause the Outgoing Text
     window to be cleared of its contents. The Incoming Text window will
     remain unchanged.
     
     This selection returns you to TERMINAL MODE.
     
     o ADJUST DIVIDING BAR - The Dividing Bar separates the Incoming from the
     Outgoing Text. ADJUST DIVIDING BAR allows you to position the Dividing
     Bar to suit your tastes. Select this option then use the Up and Down
     Arrows to move the bar up or down. Press `Esc' when you are satisfied
     with the Dividing Bar's position.
     
     This selection returns you to TERMINAL MODE.
     
     o CHANGE MONITOR TYPES - This choice allows you to adapt ONE TO ONE to
     the type of monitor in use. Choose between:
     
               1) Monochrome
               2) Color
               3) Monochrome with shades of grey.
     
     Press `Esc' and nothing will be changed. A selection will save the
     parameters to disk and the screen resets to reflect your choice.
     
     This selection returns you to TERMINAL MODE.



















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                33


     THE KEYS MENU
     
     o EDIT CTRLKeys - Messages can be attached to Ctrl-Keystrokes. Hold down
     `Ctrl' then press a letter to send the message attached to that
     character. EDIT CTRLKeys defines the messages attached to the Ctrl-
     characters.
     
     This selection will prompt you to press the Ctrl-Keystroke to edit. Any
     letter from A-Z can be assigned to a Ctrl-Keystroke with four
     exceptions. You CANNOT use:
     
               H - because Ctrl-H is the same as a backspace.
               J - because Ctrl-J is the same as a Line-Feed.
               M - because Ctrl-M is the same as the ENTER key.
               X - because Ctrl-X is reserved for file transfer aborts.
     
     Any other key is acceptable. Select any other letter and then enter or
     edit the phrase to be attached to this Keystroke.
     
     There are two special symbols that can be embedded in your message:
     
               1) ^ = Causes a BEEP to be sent.
               2) { = Causes a Carriage Return (ENTER key) to be sent.
     
     When the message is complete press ENTER. Define more keys the same way
     or press `Esc' to quit. You will be asked "Save The Changes To Disk?".
     Press "Y" and the CTRLTEXT.121 file is created (or updated).
     
     o SHOW CTRLKeys - This selection will scroll the messages attached to
     Ctrl-Keystrokes in a screen window. Press `Ctrl-S' to Start and Stop the
     scrolling. Press `Ctrl- X' to abort. This handy feature is a great
     `memory jogger'.
     
     o Print CTRLKeys - This selection will print the currently defined Ctrl-
     Keystrokes and their attached messages. This is highly recommended! If
     you define all of your keys and keep the list posted beside your
     computer, your life will be much fuller and you will magically obtain
     great wealth!  Your children will behave, your car will get better
     mileage, and your mortgage will be paid off by an unknown benefactor.
     (Just kidding, of course.  Cliff Batson's comments should not be
     considered as investment advice.)
















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                34


     TIPS AND TRICKS
     
     
     CTRL-KEYSTROKE MESSAGES.
     
     The Ctrl-Keystroke feature was added as a convenience. I realized that
     messages were often repeated during a "conversation". ONE TO ONE Version
     2.2 incorporated Ctrl-Keystroke to eliminate this repetition and add a
     little `flavor'. This is a very handy feature! Some suggestions for
     messages to use are listed below.
     
               Ctrl-C: "Call me back, voice. OK?"
               Ctrl-G: "Greetings. Take me to Bill Gates."
               Ctrl-I: "^Interrupt..."
               Ctrl-N: "Nobody talks about my mama!"
               Ctrl-P: "Pick up the phone now. OK?"
               Ctrl-Q: "Quit Interrupting!"
               Ctrl-T: "Let's transfer the file in 10 seconds. OK?"
               Ctrl-W: "What do you mean?"
     
     You get the idea. Use your imagination. (A friend has attached insults
     to his Ctrl-Keystrokes.) This is a fun feature!
     
     CALL WAITING PROBLEMS
     
     Call Waiting can cause problems with telecommunications. Turning it off
     is very easy. Use the appropriate method listed below.
     
     Touch Tone Dialing Service: Prefix the phone number with *70. (e.g. *70
     404 555 1212)
     
     Pulse Dialing Service: Prefix the phone number with 1170. (e.g. 1170 404
     555 1212)
     
     This disables Call-Waiting for the duration of this one call only.
     
     GO FROM DATA TO VOICE.
     
     When you're through transferring files and want to go back to voice do
     the following:
     
     Type a message to your friend telling him/her to "Pick up the phone and
     then press Alt-H".
     
     Perform step above now. (practice what you preach.)
     
     In a few seconds you should hear the modems disconnect and you will be
     able to talk to each other again.









     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                35


     SAVING OPTIONS.121
     
     In the old days (version 1.0) OPTIONS.121 was erased and ONE TO ONE
     restarted just to change a parameter. Version 2.2 changed all that with
     the addition of SAVE OPTIONS.121 in the FILES MENU. The current
     parameters are saved to disk with this new menu choice. The next time
     ONE TO ONE is started these changes take effect automatically.
     
     Something you should be aware of ... whenever the parameters are saved,
     ALL of the parameters are saved. Be cautious! Make certain they are set
     to your satisfaction BEFORE saving OPTIONS.121 to disk. For example,
     let's say you changed baud rates to talk to a friend with a slower modem
     (Are you saying it?) and then decided to adjust the dividing bar.     Wh
     en you finish adjusting the dividing bar you are prompted "Save Changes
     To Disk?". If you answer 'Y' (yes) then ALL of your parameters will be
     saved to disk. The next time you run ONE TO ONE, it will put your modem
     in the slower baud rate automatically.
     
     Be aware of this and you can avoid a mysterious hassle.
     
     If you have any tips or tricks using ONE TO ONE, send them in! Write me
     at the address below...
     
     
     
                              Cliff Batson
                              C/O:  Digital Transit
                              3360 Towneship Road Antioch, TN
                              37013
     
     
     
     The latest version of ONE TO ONE is always available on:
     
     Cumberland BBS 1-615-526-3347
     
     SYSOPS: Dean Carothers & Del Robinson




















     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                36


     FINAL REMARKS
     
     
     ONE TO ONE was released nearly two years ago. This new version (2.3)
     represents some "tweaking" of version 2.2. In a way, I'm a little
     embarrassed by ONE TO ONE. I've learned so much more about programming
     and "slickness" in the last couple of years that I'd love to just sit
     down and rewrite ONE TO ONE from scratch. Maybe if Ed McMahon calls me
     telling me that I've won the Publisher's Clearing House Sweepstakes,
     I'll throw away the old code and start anew.
     
     I'm grateful for those that have taken the time to become registered
     users.
     
     Enjoy this new version of ONE TO ONE!  It was written with ALL of us in
     mind.  Friends computing with friends.
     
     If you've used ONE TO ONE for two weeks ... you're probably hooked! Go
     ahead. Become a registered user! We need your support!
     
     If you are basically an honest person but keep "putting off" paying for
     your "ShareWare" programs ... do what I do ... write the name, address
     and amount down on a piece of paper and throw it in the pile of bills to
     pay. Treat them like the power bill. Payment due for SERVICES RENDERED.
     
     Send in your payment if you like the product.
     
     If you have suggestions please drop me a note. If you prefer to leave a
     message on my answering machine call 615-361-3655 during WORK HOURS
     (8:00 a.m. - 5:00 p.m. Central Time Zone). You'll notice that these are
     NORMAL work hours - NOT programmer's work hours.


























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                37


     APPENDIX I
     
                             ONE TO ONE  Version 2.3
               ----------------------------------------------------
                                REGISTRATION FORM
     
     Please Print
     
     Date:__/__ /__
     
     Name:____________________________________________________________
     
     Company:_________________________________________________________
     
     Title:___________________________________________________________
     
     Address:_________________________________________________________
     
           :__________________________________________________________
     
           :__________________________________________________________
     
     Phone#:__________________________________________________________
     
     =================================================================
     
     COMMENTS/SUGGESTIONS:____________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     _________________________________________________________________
     
     Please Register Me For #_____ Copies Of ONE TO ONE
     
     (Suggested Contribution:  $15.00 - $20.00 per copy) Enclosed is my check
     or Money Order for $__________
     
                             Make Checks Payable To:
                                         
                                 Digital Transit
                                 3360 Towneship Road
                                 Antioch, TN   37013











     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                38


     APPENDIX II
     
     
     ONE TO ONE & XMODEM
     
     ONE TO ONE uses the XMODEM file transfer protocol. XMODEM, developed by
     Ward Christensen and others in the late 1970's, has become a standard
     for transferring files over phone lines.
     
     When a file is transferred via XMODEM it is broken into 128 character
     data blocks.  Each block is sent sequentially. Actually, more than 128
     characters are sent in each block. The format of an XMODEM block is
     listed below:
     
               OFFSET INTO BLOCK      CHARACTERS
               -----------------      -----------------------------
                               0      Start Of Header
                     (ASCII 1) 1      Block Number (starts with #1)
                               2      One's Compliment of Block Number
                         3 - 130      128 Bytes Of File Being Transferred
                             131      Checksum.
               -----------------
                      Total: 132 Characters Per Block
     
     ONE TO ONE allows you to type during file transfers by exchanging
     keystroke data between blocks. At 1200 baud, a block is sent
     approximately every 1.3 seconds. This means that you will see the
     incoming messages updated every 1.3 seconds. Although it may appear to
     be a little "jerky", it beats the heck out of twiddling your thumbs
     while you wait for your file transfer to be completed! Of course, at
     2400 baud it's half as jerky. Now THERE'S a good excuse to rush out and
     buy a new modem. "But Honey, my keystrokes will be less jerky now that
     I've spent our pension on some new hardware!". Maybe YOUR spouse will
     understand.























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                39


     APPENDIX III
     
     
     PHONE DIRECTORY STRUCTURE
     
     For Programmers: The phone directory entries are held in an array of 100
     structures. The structure definition is shown below:
     
     struct dial_info         /* Each entry is stored in a copy of this */
          {
          int in_use;         /* Whether this number is in use        */
          char name[31];      /* The name of the person to call       */
          char number[21];    /* The phone number to dial (ascii)     */
          int baud;           /* Baud rate for this phone number      */
          char parity;        /* Always set to 'N' for NONE           */
          int databits;       /* Always set to EIGHT                  */
          int stopbits;       /* Always set to ONE                    */
          };
     
     Note: There is a small utility program called 121SORT.EXE that is
     included with ONE TO ONE. 121SORT sorts the phone directory
     alphabetically.



































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                40


     APPENDIX IV
     
     
     OPTIONS.121 STRUCTURE
     
     For Programmers: OPTIONS.121 is the configuration file for ONE TO ONE.
     If this file is not found when ONE TO ONE is run the program will prompt
     you to "answer a few questions..." then create it.
     
     The file OPTIONS.121 is stored on disk as a binary file. The contents of
     the structure below are written to disk 1) when the program can't find
     an existing copy of OPTIONS.121 ... or 2) whenever you tell ONE TO ONE
     to save changes made with the pull-down menus.
     
     
     
     struct config  /* configuration structure for ONE TO ONE */
          {    
          int version;             /* Version number of this file (2) */
          int port;                /* Com port -1                     */
          int baud;                /* Baud rate to initialize port    */
          int databits;            /* Always set to EIGHT             */
          char parity;             /* Always set to 'N' for NONE      */
          int stopbits;            /* Always set to ONE               */
          int sound;               /* 1 Key-Clicks ON, 0 Key-Clicks OFF */
          int screencolor;         /* Attribute of full screen color  */
          int pldncolor;           /* Attribute of pull-down menus    */
          int msgcolor;            /* Attribute of pop-up messages    */
          int divide_row;          /* Row for the dividing bar to appear */
          int tone_or_pulse;       /* 0 = Touch-Tone, 1 = Pulse       */
          char modeminit[241];     /* Modem initialization string     */
          };
     
























     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                41


     APPENDIX V
     
     
     COMMUNICATIONS PORT ADDRESSES
     
     ONE TO ONE allows you to use 4 comm ports; COM1:, COM2:, COM3:, and
     COM4:. Each of these 4 ports has 2 unique pieces of information that let
     the computer know how to communicate with it.  These 2 items are 1)Port
     Address and 2) Interrupt Request Lines (IRQ).
     
     The following table shows the port address and IRQ for all 4 comm ports
     supported by ONE TO ONE...
     
                         Port      Address   IRQ
                         ----      -------   ---
                         COM1         3F8H    4
                         COM2         2F8H    3
                         COM3         3E8H    4
                         COM4         2E8H    3
     
     
     The data for COM1 and COM2 are standards in the PC world.  COM3 and COM4
     data is sometimes different than what is shown here, although it is rare
     to find a difference.
     
     































     Copyright (C) 1986, 1987, 1988 by Digital Transit


     ONE TO ONE - Reference Manual                                42


     APPENDIX VI
     
     
     
     ONE TO ONE PROGRAMMING TRIVIA
     
     Programming Information
     
     This information is included for the terminally curious (pun intended).
     
     Equipment:
               o AT&T PC 6300 (640k, Hard Disk, Qubie' modem)
               o Compaq Portable (with Null Modem Cable)
               o IMS AT-Clone (42m Hard Disk, Qubie' 2400 modem)
               o NEC MultiSpeed EL laptop
     
     Languages:
               o The C programming language and 808x Assembler.
               o C Compiler: Microsoft C Compiler (version 5.0)
               o Assembler: Microsoft Macro Assembler (version 5.1)
     
     Other:
               o Greenleaf Function Library (version 3.03)
               o Greenleaf Comm Library (version 2.03)
     
     When:
               o Late August, 1986 - Mid December, 1986 (Version 1.0)
               o Mid January, 1987 - Mid February, 1987 (Versions 2.0 - 2.2)
               o Mid July, 1988 (Version 2.3)
               
     Where:
               o Antioch, TN (Suburb of Nashville)

























     Copyright (C) 1986, 1987, 1988 by Digital Transit
```
{% endraw %}

## 121SORT.DOC

{% raw %}
```
121SORT.DOC - Documentation for the 121SORT utility           May 23rd, 1988

Author: Cliff Batson

The 121SORT.EXE program is a simple utility to sort the dialing directory
of the One To One(tm) communications program.  It sorts the names in the 
dialing directory in alphabetical order.

Usage:  121SORT DIRECTORY_NAME

Where DIRECTORY_NAME is the full name of the One To One dialing directory.

Note: This utility sorts One To One version 2.x directories only.  If you 
      try to sort any other file with 121SORT you will get an error message.
      Any users still using One To One version 1.0 should upgrade to the
      latest version which can always be found on the following BBS...

                            The Cumberland BBS
                           Dean Carothers, SYSOP
                              Cookeville, TN
                              (615) 526-3347

    Copyright (C) 1986, 1987, 1988 Digital Transit.  All Rights Reserved.
```
{% endraw %}

## FILE1031.TXT

{% raw %}
```
Disk No  1031
Program Title: ONE TO ONE version 2.3
PC-SIG version 1.1
 
ONE-TO-ONE (121) is a unique, easy-to-use telecommunications program
designed for interactive communications between two people (as opposed to
calling a bulletin board service).  Now, type messages back and forth by
modem (chat) during file transfers.  Separate windows of text are provided
for both incoming and outgoing messages, and each window can be scrolled
by either user.
 
Other features include quick pull-down menus, and a thorough series of
help screens that are accessible by simply pointing to a menu choice and
pressing HOME.
 
Usage:  Communications
 
System Requirements:  A modem.
 
How to Start:  Type 121 (press enter)
 
Suggested Registration:  $20.00
 
File Descriptions:
 
121READ  ME   Message from the author.
121      DOC  Documentation file to be printed (34 pages).
121      EXE  Main program.
121-V23  ARC  Contains a backup of all files.
121SORT  DOC  Documentation file
121SORT  EXE  Sorts dialing directory
WHATSNEW 121  Outline of update changes
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1031

     Volume in drive A has no label
     Directory of A:\

    121-V23  ARC    102775   6-28-88   9:29a
    121      DOC     86478   6-28-88   9:29a
    121      EXE     66233   6-28-88   9:13a
    121READ  ME       1123   6-28-88   8:01a
    121SORT  DOC       979   5-23-88  10:40p
    121SORT  EXE      9209   5-23-88  10:27p
    WHATSNEW 121      6727   6-28-88   8:30a
    FILE1031 TXT      1194   8-25-88   2:18p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       540   4-19-88   8:56a
    MANUAL   BAT       147   4-19-88   8:56a
    ┌─┬─┬─┐              0
    │T│G│S│              0
    │Y│O│T│              0
    │P│                  0
    │E│T│R│              0
    │                    0
    └─┴─┴─┘              0
           18 file(s)     275443 bytes
                           40960 bytes free
