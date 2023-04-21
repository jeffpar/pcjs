---
layout: page
title: "PC-SIG Diskette Library (Disk #1896)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1896/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1896"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VEGAS JOHNNY'S DRAW POKER"

    VEGAS JOHNNY'S DRAW POKER is a detailed simulation of a draw poker game.
    It plays all the other hands, gives you playing tips in plain English
    like "don't throw away good money -- fold!"  It will show you the odds
    of winning at any given time -- makes play fun for the poker novice or
    pro.  It works on all popular display adapters; a color monitor is
    optional, as is a mouse.  Its features include:
    
    ~ Bet limits, blind and ante amounts are user selectable
    
    ~ Six levels of competition -- user selectable
    
    ~ Variable playing speed -- user selectable
    
    ~ On-line betting and drawing advice
    
    ~ On-line odds and statistics
    
    ~ On-line help with "what beats what"
    
    ~ Scoreboard file to log big winners
    
    ~ User interface allows fast and easy play.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1896.TXT

{% raw %}
```
Disk No: 1896                                                           
Disk Title: Vegas Johnny's Draw Poker                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Vegas Johnny's Draw Poker                                
Author Version: 1.1                                                     
Author Registration: $7.00                                              
Special Requirements: None.                                             
                                                                        
VEGAS JOHNNY'S DRAW POKER is a detailed simulation of a draw poker game.
It plays all the other hands, gives you playing tips in plain English   
like ``don't throw away good money--fold!'' It will show you the odds of
winning at any given time--makes play fun for the poker novice or pro.  
Great graphics in HGC, CGA, EGA, or VGA make this game a pleasure.  It's
feature packed and fun to play.  Works great with or without a mouse.   
It's features include:                                                  
                                                                        
~ Bet limits, blind and ante amounts are user selectable.               
                                                                        
~ Six levels of competition - User selectable.                          
                                                                        
~ Variable playing speed - User selectable.                             
                                                                        
~ On-line betting and drawing advice.                                   
                                                                        
~ On-Line Odds and Statistics.                                          
                                                                        
~ On-line help with "what beats what".                                  
                                                                        
~ Scoreboard file to log big winners.                                   
                                                                        
~ User interface allows fast and easy play.                             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## POKER.DOC

{% raw %}
```






















                      Vegas Johnny's Draw Poker
       Copyright (c) 1989 by John Comeau - All rights Reserved
















"Vegas Johnny" is a trademark of Top Score Software.








			
                        Table of Contents


        Introduction . . . . . . . . . . . . . . . . . . . . .  2
        Equipment  . . . . . . . . . . . . . . . . . . . . . .  2
        Before you begin . . . . . . . . . . . . . . . . . . .  2
           Warranty Information  . . . . . . . . . . . . . . .  2
           Shareware Registration  . . . . . . . . . . . . . .  2
           Legal Stuff . . . . . . . . . . . . . . . . . . . .  3
           If the program doesn't work . . . . . . . . . . . .  3
        Program Operation  . . . . . . . . . . . . . . . . . .  3
           The Master Disk . . . . . . . . . . . . . . . . . .  3
           Running from Floppy disk  . . . . . . . . . . . . .  4
           Running from Hard disk  . . . . . . . . . . . . . .  4
           Installing onto a hard or floppy disk . . . . . . .  4
           Your display adapter/monitor  . . . . . . . . . . .  5
           Using your Mouse  . . . . . . . . . . . . . . . . .  5
        User Interface . . . . . . . . . . . . . . . . . . . .  6
           Choice menus: General Info  . . . . . . . . . . . .  7
              End of hand choices  . . . . . . . . . . . . . .  7
              Ubiquitous choices . . . . . . . . . . . . . . .  8
              Bet choices  . . . . . . . . . . . . . . . . . .  9
              Param choices  . . . . . . . . . . . . . . . . . 10
              Draw choices . . . . . . . . . . . . . . . . . . 10
        Screens  . . . . . . . . . . . . . . . . . . . . . . . 11
           The Main screen . . . . . . . . . . . . . . . . . . 11
           The Hands screen  . . . . . . . . . . . . . . . . . 12
           The Scores screen . . . . . . . . . . . . . . . . . 12
           The Version/Title screen  . . . . . . . . . . . . . 12
           The Rules screen  . . . . . . . . . . . . . . . . . 12
           The Players screen  . . . . . . . . . . . . . . . . 13
           The TSS products screens  . . . . . . . . . . . . . 13
           The Statistics screens  . . . . . . . . . . . . . . 13
           The Odds Screen . . . . . . . . . . . . . . . . . . 14
        Draw poker . . . . . . . . . . . . . . . . . . . . . . 15
           The Showdown  . . . . . . . . . . . . . . . . . . . 15
        Command line arguments/SWITCH.TSS file . . . . . . . . 15
        Rules  . . . . . . . . . . . . . . . . . . . . . . . . 17
           Each player ante  . . . . . . . . . . . . . . . . . 17
           Blind bet . . . . . . . . . . . . . . . . . . . . . 17
           Maximum bet . . . . . . . . . . . . . . . . . . . . 18
           Minimum bet . . . . . . . . . . . . . . . . . . . . 18
           Raise limit . . . . . . . . . . . . . . . . . . . . 18
           Check-raising . . . . . . . . . . . . . . . . . . . 18
           How many players  . . . . . . . . . . . . . . . . . 18
           Draw open req . . . . . . . . . . . . . . . . . . . 19
           Competition . . . . . . . . . . . . . . . . . . . . 19
              Casual Competition . . . . . . . . . . . . . . . 19
              Casual-Average . . . . . . . . . . . . . . . . . 19
              Average  . . . . . . . . . . . . . . . . . . . . 19
              Mixed  . . . . . . . . . . . . . . . . . . . . . 19
              Average-Strong . . . . . . . . . . . . . . . . . 19



                                  i



              Strong . . . . . . . . . . . . . . . . . . . . . 20
           Play speed  . . . . . . . . . . . . . . . . . . . . 20
           Alt Play speed  . . . . . . . . . . . . . . . . . . 20
           Upcard sorting  . . . . . . . . . . . . . . . . . . 20
        Hand rankings  . . . . . . . . . . . . . . . . . . . . 21
        Different styles of players  . . . . . . . . . . . . . 22
           Casual players  . . . . . . . . . . . . . . . . . . 23
           Strong players  . . . . . . . . . . . . . . . . . . 23
           Average players . . . . . . . . . . . . . . . . . . 23
           Human players . . . . . . . . . . . . . . . . . . . 23
        Topics of General Interest . . . . . . . . . . . . . . 23
           Odds  . . . . . . . . . . . . . . . . . . . . . . . 23
           Recommended Poker Books . . . . . . . . . . . . . . 25
        Computer players / Human players . . . . . . . . . . . 26
        Top Score Software . . . . . . . . . . . . . . . . . . 26
           Dealer's Choice . . . . . . . . . . . . . . . . . . 27
           Vegas Johnny's Hold'em Poker  . . . . . . . . . . . 28
           Vegas Johnny's Draw Poker . . . . . . . . . . . . . 29










































                                  ii


Introduction

Vegas Johnny's Draw  Poker  is  a  detailed simulation of a draw poker
game. It's features include:

     o Bet limits, blind and ante amounts are user selectable
     o Six levels of competition - User selectable
     o Variable playing speed - User selectable
     o On-line betting and drawing advice
     o On-Line Odds and  Statistics
     o On-line help with "what beats what"
     o Scoreboard file to log big winners
     o User interface allows fast and easy play
     o and many more

It's feature packed, it's fun to play. It's from Top Score Software!


Equipment

The  IBM  PC version of Vegas Johnny's  Draw  Poker  requires  an  IBM
PC/XT/AT or compatible  with  256k  of  memory, and DOS version 2.0 or
later. It can be run from floppy disk or installed onto and run from a
hard disk. A mouse is optional.


Before you begin

Warranty Information

This software is supplied "as-is" with no warranty whatsoever.

It is the  sole  responsibility  of  the  purchaser  to  determine the
suitability and fitness of this product for any  purpose.  Neither Top
Score  software, nor any dealer or  distributor  makes  any  warranty,
expressed   or   implied,  concerning  this   software's      quality,
performance, or fitness for any purpose.

Top  Score  Software  is not liable for direct, indirect or incidental
damages including damage to equipment, interruption  of  service, loss
of  business  resulting  from any defect or omission in this software,
manual or media.

Shareware Registration

Vegas  Johnny's  Draw  Poker  is   a   commercial   software  product,
distributed via Shareware. If you like Vegas Johnny's  Draw  Poker and
are  keeping  a copy for your personal  use,  please  send  the  $7.00
registration fee to the address below. If you would like a  fresh copy
on floppy disk,  add  $2.95  (total  $9.95) and specify 5 1/4 or 3 1/2
inch  media. Either way, the benefits of registration are simple:

   1.  Support for the program by mail or phone.
   2.  Our sincere thanks you for your support and honesty.







                                - 2 -



Whether you register or not, we encourage you to make copies  of Vegas
Johnny's Draw  Poker for any friends, acquaintances and associates you
feel may enjoy the program -  but  only if the executable and document
files have not been  modified  in any way. TOP SCORE SOFTWARE RESERVES
ALL RIGHTS ASSOCIATED WITH DERIVATIVE WORKS.

Please  include  both  the  executable  and the document files on  any
copies you make. That will help insure future users of  Vegas Johnny's
Draw Poker can get maximum enjoyment from our product.

                          Top Score Software
                             P.O. Box 541
                          Townsend, MA  01469
                            (508) 597-8020


Legal Stuff

Vegas Johnny's Draw Poker program  and document are Copyright (c) 1989
by John Comeau. All rights reserved.

"Vegas Johnny" is a trademark of Top Score Software.

IBM  PC, XT, and AT are registered  trademarks  of  the  International
Business Machines Corporation.

If the program doesn't work

If you have trouble getting this program to run  properly,  check  the
document. Chances are you will find information to help you  there. If
you  can't  find  the solution to your problem in the document and you
are a Registered user, please contact us at  the  address/phone number
below. We  are  a  small  company but our policy is to support what we
sell as best we can.

Note:  Please  mention  your  program's  registration  number  in  all
correspondence.

                          Top Score Software
                             P.O. Box 541
                          Townsend, MA  01469
                            (508) 597-8020


Program Operation

The sections below describe  how  to install load and run this program
on your system.

The Master Disk

As supplied by Top Score Software this program comes on a standard DOS
format floppy disk. Files on this disk include:

       File                  Description

     POKER.EXE   The executable file. - The program itself.




                                - 3 -



     POKER.DOC   The document file.  This write-up in machine readable
                 form.


     README.TXT   This file contains the  latest  information  on  the
                 program   and   document.   May   contain   important
                 information  that  is  not   in   the   document,  or
                 corrections/changes to the document.

     QUICKS.TXT  The text  of  your "Yellow sheet". A brief summary of
                 several important operating procedures.

Running from Floppy disk

To run Vegas Johnny's Draw Poker from floppy disk, take  the following
steps:

     1. Boot DOS (version 2.0 or later) on your system.
     2. Put the Vegas Johnny Master disk into drive A.
     3. Logon to drive A: by typing:  "A:"
     4. Type:  POKER

The  floppy drive should start up, and within  10  seconds  the  title
screen, which contains program revision information, should  appear on
your monitor screen. Vegas Johnny's Draw Poker is up and running!

Users of DOS versions 3.00 or  later  can  replace steps 3 and 4 above
with a single step
     3. Type: A:POKER


Running from Hard disk

Before you can  run  this  from  hard  disk you must first install it.
Installing is simply a  matter  of copying the POKER.EXE file onto the
hard disk. Once installed on hard disk you  can  run  it  by following
these steps:

     1. Boot DOS (version 2.0 or later) on your system.
     2. Use the CD command to go into the directory that  this program
        was installed into. If the directory is mentioned in   the DOS
        system PATH string, you don't need to do this step.
     3. Type:  POKER

The hard drive should start up, and within a few seconds  the programs
title  screen,  which contains program  revision  information,  should
appear on your  monitor  screen.  Vegas  Johnny's Draw Poker is up and
running!


Installing onto a hard or floppy disk

Use the DOS "COPY" command to move the "POKER.EXE" file onto your hard
disk(or  floppy  disk).  For example: "COPY A:POKER.EXE  C:" copys the
POKER.EXE file from the floppy disk in drive "A:" onto hard disk "C:".
That's how simple installing can be!





                                - 4 -



If you copied Vegas  Johnny's  Draw poker into a subdirectory you also
may want to edit your DOS system's PATH specification to  include that
subdirectory.  On  most  systems this involves editing  a  file  named
'AUTOEXEC.BAT' in the  root  directory.  The  line  that  needs  to be
changed begins with 'PATH='. If you  are  not sure what to do, consult
your DOS reference manual.

Or  don't even worry about changing the  PATH  specification!  If  you
don't change the path it just means that you may have  to  use  the CD
command to go into the  directory containing Vegas Johnny's Draw Poker
before you run it. Try it and see.

After you have installed the program  onto  your hard disk, be sure to
put  the  original  Vegas Johnny Master Disk in a safe  place.  For  a
diskette a "safe" place  means  someplace  that  is free from magnetic
fields, dust, moisture, and extreme temperatures.


Your display adapter/monitor

This  program  is  compatible  with  all  popular   display  adapters,
including  MDA, HGA, CGA, EGA, and VGA. It  supports  both  color  and
monochrome monitors. If the display looks OK when  the  program begins
running you can skip the rest of this section.

Vegas Johnny's  Draw Poker uses character graphics suitable for either
color  or  monochrome.  Its output was tested compatible with DOS text
modes 2, 3 and 7. All commonly used display adapters support  at least
one  of  these  modes. On start-up the program assumes it  has  a  CGA
compatible adapter with monochrome monitor unless the  current display
mode is 7, 3, or 1.

     Mode       Assumes
     ----      ----------------
      7        MDA - Monochrome
      3        CGA - Color
      1        CGA - Color
     other     CGA - Monochrome

You can explicitly tell this program what kind of monitor you  have by
adding  either  the  MONO or the COLOR switch to the command line that
starts this program. For example:

     A:POKER COLOR       Starts  this  program and at  the  same  time
                         tells  it  that  you  have  a  color  monitor
                         connected  to  your  CGA  compatible  display
                         adapter.

These and other switches  are  described later in this document in the
section titled: Command line arguments.


Using your Mouse

Although  not  required,  a mouse can be used with this program if you
have DOS 3.0 or later. The rightmost mouse button, like  the keyboards
'ENTER' key, selects(or changes) the item that is  highlighted  on the
screen.  The  leftmost  mouse button, like the  keyboards  'ESC'  key,



                                - 5 -



causes you to exit from a screen. Moving the mouse, like the keyboards
arrow keys, causes the highlight on the screen  to  move  in  the same
direction as the mouse.

Note: To use a  mouse  you also need appropriate mouse driver software
installed. If you routinely use your mouse with  other  software, then
either you know how to install the mouse driver software or it's being
installed automatically when you boot your system.

If you are unsure if you have the right driver software installed:

  1. Try the mouse and see what happens. It can't hurt anything and if
     it works, you're all set.

  2. Ask  your favorite computer 'guru', 'power-user', or  programmer.
     They are usually very eager for a chance to  show  their  awesome
     computer-savvy and can straighten out your mouse problem in about
     3 minutes. If not, get a new guru!

  3. If(only if) you are reasonably familiar  the  DOS - Try to fix it
     yourself. First make sure your version of DOS is 3.0 or later. Do
     this by typing  in  "VER"  at  the DOS command prompt. DOS should
     respond with its version number.  Any version number 1.xx or 2.xx
     means you are out of luck - Vegas Johnny Poker cannot use a mouse
     with these old DOS versions. Otherwise look in the root directory
     for a mouse driver  program  called  "MOUSE.SYS"  or "MOUSE.COM".
     Either one will do, you don't need both. If you can't find either
     of these files in your root directory, you'll need to copy one in
     from somewhere. In all likelihood one or both  of  these programs
     was supplied on a floppy disk that came with your mouse.  So find
     that disk and copy  one  the files into your root directory. Once
     you have a  mouse  driver  file  in your root directory, the next
     step is to modify your systems boot-up procedure  to  include the
     drivers   automatic   installation   on   boot-up.  If  you  have
     "MOUSE.SYS" add the following  line  to  the "CONFIG.SYS" file in
     your  root  directory:    "device=mouse.sys".      If   you  have
     "MOUSE.COM" add the following line to  file  named "AUTOEXEC.BAT"
     in your root  directory:  "mouse". Either way, reboot your system
     and try out the mouse. Good luck.


User Interface

The  user  interface  was designed to allow fast easy play. The way it
works is:

     1. The program prints a small menu of choices. One of the choices
        is highlighted.

     2. You move the highlight left/right/up/down with the  arrow keys
        (or with the mouse) onto the choice you want.

     3. You press the ENTER key(or left mouse button)  to  select  the
        highlighted choice.

Pressing certain keys have a consistent predictable result. These keys
are:




                                - 6 -



     ESC      Pressing the key marked  ESC,  called  'the  escape key'
              usually means, 'get me out of this screen'.

     ENTER    Pressing the ENTER key(usually a tall  dark  colored key
              marked with an arrow pointing left) means 'select/change
              the highlighted item'.

     ARROWS   Pressing the arrow  keys  on  the right hand side of the
              keyboard means 'move the highlight over in the direction
              of the arrow'.

     F2       In the Rules  screens  pressing F2 means 'save the rules
              I'm looking at in a file'. The rules are saved in a file
              called 'RULES.SAV'.

     F3       In  the rules screen, pressing F3  means  'set  all  the
              rules to the  default  values. By default values here we
              mean  the  values  as they were the very first time this
              program was run, not  the  default  values  saved later.
              Because changing the  rules  while a hand is in progress
              could affect the outcome of the hand, F3 will do nothing
              if a hand is in progress.

     F4       In the Rules screen, pressing  F4  means  'restore   the
              rules  from  the RULES.SAV file.  Because  changing  the
              rules  while  a  hand is in progress  could  affect  the
              outcome of the hand, F4 will do nothing if a hand  is in
              progress.

Choice menus: General Info

Whenever  it  is  your  turn  to  do  something, your turn to bet  for
instance, the program  will  display  a  menu of choices in the bottom
center of the screen. This is your Choice menu box. One of the choices
listed in the box is always highlighted. The highlighted choice is the
one  that will be selected when you press the ENTER key. If you prefer
one of the other choices you must move the highlight to that choice by
using the arrow keys. Another way to move  the  highlight  onto  a new
choice is to  type  in  that  choice's  first letter. You will see the
highlight jump immediately to  the  choice.  When you have highlighted
the correct choice, press the ENTER key to select it.

If  your system has a mouse, you can move the highlight from choice to
choice by moving the  mouse.  You can select the highlighted choice by
pressing the leftmost mouse button.

The  sections  below  describe the meaning of various choices that may
appear in various choice menus.

End of hand choices

The following choices will  appear  in the choice menu that appears at
the end of each hand.

     Deal    Select this one and  the  program  will begin dealing the
             next hand. If you have any money left, you will  be dealt
             in.  Otherwise  the  Computer  players  will  play  among
             themselves.



                                - 7 -



     Save    Select this one to save a  game that you want to continue
             playing later.  The  games rules,  statistics,  and money
             totals are stored in disk  files,  and  the  program will
             exit to DOS. The  files  created by saving a game will be
             created in  the  same  directory  as  the  POKER.EXE file
             resides in. So, if you are running from  floppy  disk and
             want  to  save  the  game  your  diskette  must be  write
             enabled.

     Quit    Select  this one only if you  are  finished  playing  and
             don't want to continue at  a later time. The program will
             display the scoreboard and exit to DOS.

     Watch   If you  select this one the program will continue playing
             without you. When you want to rejoin the game you  can do
             so  by  pressing  any  key on the keyboard. At the end of
             the next hand you  will  return to the end of hand choice
             menu.

Ubiquitous choices

The  following  choices  are not unique to any particular choice menu.
Most  appear in all of the choice menus  the  program  displays.  They
generally appear in the bottom half of the menu.

     Odds    Select this to go  to  the  Odds  screen. The Odds screen
             contains helpful information the current pot odds and the
             odds of your hand being improved by the next card(s).

     Stats   Select this to go to a series of  statistics  screens. On
             the first statistics screen you will  see  information on
             how often your opponents  are  staying  in  vs. dropping.
             Other  statistics screens  diaplay  information  on  what
             types of hands have  appeared  in  the showdown, and what
             type of hand usually wins in the game you are playing.

     TSS     Select  this  and  you get to see Information on this and
             other Top Score Software products.

     Ask     Select  this to get betting/drawing/flipping advice  from
             Vegas Johnny. His advice will appear in a  window  at the
             top of the screen. After  you have seen the advice, press
             any key and the advice goes away.

             Note: Vegas Johnny is one of the stronger players. But he
             has no special knowledge  about  the  outcome of the game
             such as what cards will be dealt next or what  cards your
             opponents hold.  Though  he  gives  mostly  good  advice,
             sometimes he is wrong. But he always has  an  opinion and
             will be happy to tell you what it is.

     Param   Select this  item to enter the secondary choice menu. The
             secondary choice menu contains items for:

               o Seeing/changing the house rules
               o Seeing what rank of hand beats what
               o Seeing program revision information




                                - 8 -



               o Seeing information on players
               o Seeing the scoreboard

             Pressing ESC  returns you from the secondary menu back to
             the original choice menu.

Bet choices

The following choices are unique to the menu that is displayed when it
is your turn to bet.

     Call    When this item appears in a choice menu it means  you owe
             money to the pot. If you select 'Call' it means  you want
             to pay the money you owe and not a penny more. Paying the
             money you owe buys you  the  privilege  of  continuing to
             play your hand.

     Fold    When this item appears in a choice menu it means  you owe
             money to the pot. If you select 'Fold' it  means  you  do
             not want to pay what you owe. If you don't pay, you don't
             play. You're out of the game for the rest of the hand and
             cannot win any of the money in the pot.

     Check   This  item  only  appears in a choice menu when you don't
             owe any money to  the  pot.  Selecting 'Check' means that
             you do not want  bet  any money. If a rule against check-
             raising is in effect and you check it also means that you
             can cannot raise the pot  later in the betting round. You
             must either Call(match their bet) or Fold(pay nothing and
             wait for the next deal).

     Bet     This  item  only  appears in a choice menu when you don't
             owe any money to the pot. Select 'Bet' if you want to pay
             money into the pot(Bet).  Whatever  money  you  bet, your
             opponents will have to  either  pay  that amount into the
             pot(Call) or drop out of the hand(Fold).

             Note: When this item appears in a choice  menu  it always
             appears twice. Use the top  'Bet' to make a maximum sized
             bet, Use the bottom 'Bet' to make a minimum sized bet. If
             the minimum and maximum  limits  are  the same amount, it
             doesn't matter which 'Bet' you select.

     Raise   When this item appears in the choice menu  it  means that
             owe money to the pot. Select 'Raise' if you want pay what
             you owe plus bet  money  over and above what you owe into
             the pot. Whenever you Raise, your opponents are forced to
             either pay an equal amount into the pot(Call) or drop out
             of the hand(Fold).

             Note: When this item appears in a choice  menu  it always
             appears  twice. Use the top 'Raise'  to  make  a  maximum
             sized raise, Use the bottom  'Raise'  to  make  a minimum
             sized raise. If the  minimum  and  maximum bet limits are
             the same amount,  it  doesn't  matter  which  'Raise' you
             select.





                                - 9 -



Param choices

The following choices are  unique  to  the  secondary choice menu that
appears whenever menu choice 'Param' is selected.

     Player  Puts you into  the  Players screen. In the Players screen
             you  will  see  the names of all players currently in the
             game classified by playing style. You also  can highlight
             any players name  and  get  more  information  about that
             player.

     Rules   Puts you into the Rules screen. In the  Rules  screen you
             can examine/change the  house  rules  in  effect.  If you
             enter  the  Rules  screen while a hand is in progress you
             may not be able to change any rules that will  affect the
             hand in progress.  If  you enter the Rules screen between
             hands, you can change practically every house rule.

     Hands   Puts you into the  Hands  screen.  The hands screen shows
             the standard ranking  of hands in High poker with no wild
             cards.  You  can  highlight any hand rank and get a short
             explanation of what combination of cards it consists of.

     Scores  Puts you  into the Scores screen. The Scores screen shows
             the scoreboard of all-time high scores including any high
             scores for the game in progress.

     Version Puts you into the title screen where you can see  program
             revision information. It also  has  Top  Score Software's
             address and phone number in case you want to get in touch
             with us.


Draw choices

After the first betting round of Draw poker, all players in  turn have
the opportunity to draw  cards.  A player drawing cards can throw away
up to 3  cards  and get new ones to replace them. When it is your turn
to  draw  the program displays an expanded  choice  menu  -  one  that
includes the display of the cards  in  your hand. You will notice that
this choice menu is slightly different from most others in that  a box
is used instead of a highlight. You can move this  box  from choice to
choice  using  the  arrow keys or mouse. To select a card for drawing,
move  the  box around it and press the ENTER key. You  will  see  that
card's color darken from  its  normal white. The dark color shows that
that card is selected for drawing(replacement). A selected card can be
deselected in the same manner: box it and  press  the  ENTER  key, the
card will turn  normal  white  again.  When  you have selected up to 3
cards to draw,  move the box to the DRAW choice and select it with the
ENTER key. The  cards  you  selected  to draw will disappear from your
hand and replacements will be dealt to you.

The following choices are unique to the menu that  is  displayed  when
you are playing draw poker and it is your turn to draw cards.







                                - 10 -



     Draw    When you Select 'Draw'  it  means  that  you want to draw
             replacements for the cards  you  have  selected.  True to
             common poker  convention, you will not be allowed to draw
             more than 3 cards. Anytime more than 3 cards are selected
             for replacement, the selection  of  'Draw'  will  have no
             effect. You will have  to  deselect  one  or more of your
             cards and then select  'Draw'.  If  no cards are selected
             when you select 'Draw' it means you don't want to replace
             any of your cards. Keeping  all  your  cards  is commonly
             called 'Standing pat'.

             Note: When a card is  selected,  its  color  darkens. The
             exact  color  of  the  darkened  cards  depends  on  your
             monitor. If you have color  display  then  selected cards
             are  yellow,  brown  or  red.  If you have  a  monochrome
             display, selected cards are black.


Screens

When the game begins you are put into the Main screen. The Main screen
shows all the players and their hands. You can stay in the Main screen
for the entire game if you want. There are however other  screens that
you can  go  to  that  contain  helpful  information. You get to these
screens by selecting them from the Choice menu when it is your turn to
bet. After you exit from one of these screens you  will  return to the
main screen where the game will continue.

One or more of  these  screens may be automatically entered when Vegas
Johnny's Draw Poker  begins  running(before the game begins). Once the
game  begins all of these screens are  accessible  via  menu  choices.
They're all described in the sections following.


The Main screen

The Main screen displays a picture  of  the poker table. In the center
of the Main  screen is a dollar amount. This is the pot. All bets made
by players during the game go into the pot. Positioned around  the pot
are all the player's hands. Near each hand  is  the  players  name and
money total. Often a description of the player's hand also  appears. A
description of the player's  entire  hand  always appears at showdown.
Before  the  showdown  a  description  will appear only if a  player's
upcards show a pair or better. Your Name,  hand  and  money  total are
displayed in the  center  of  the  screen directly below the pot. Your
hand  is  always  displayed in full. Any description displayed will be
that of your entire  hand.  Although your entire hand is displayed for
you  to  see, your opponents cannot see  your  hole  cards  until  the
showdown.
In  the bottom left hand side of the main screen is information on the
hand in progress. Information such  as who's dealing, and what's going
on at the moment. At  the end of the hand the name of the winner(s) is
displayed here also.








                                - 11 -



The Hands screen

In  the  center of the hands screen is a list of  the  standard  ranks
possible poker hands. The higher on the list a hand  is  the better it
is.  One  of  these  hands   is  highlighted.  A  description  of  the
highlighted hand always  appears  the  window  at  the  bottom  of the
screen. To get a description of  a  different hand, use the arrow keys
to  move  the  highlight onto the name of the hand you want described.
After you have gotten all the information on hand ranks that you want,
press ESC to exit from the Hands screen.

Note: When you exit the  Hands  screen  you  will  return  not  to the
secondary choice menu, but to the original choice menu.

The Scores screen

The  Scores  screen   contains   a  scoreboard  listing  the  10  best
performances by players in past games. Both computer players and human
players are eligible go onto the scoreboard after any  game  in  which
they have played at least 20  hands.  The 'score' is calculated  based
on amount of money won, number of hands,  and  adjusted  based  on the
ante, blind bet, maximum bet size and competition level. If you change
the ante, blind bet or maximum  bet  sizes during a session, the score
is based that size that results in the lowest scores.

Note:  When  you  exit the Scores screen you will return  not  to  the
secondary choice menu, but to the original choice menu.

The Version/Title screen

The  Version screen tells you what version of  this  program  you  are
running. There are no parameters to change on this  screen.  You  exit
the Version screen by pressing the ESC key.

Note:  If  you  entered the Version  screen  via  a  choice  from  the
secondary menu, when you exit the  Version  screen you will go back to
the original choice menu not to the secondary choice menu.

The Rules screen

The Rules screen lists all the 'House rules' currently in  effect. One
of these rules in  this  screen is always highlighted. A more detailed
explanation  of  the  highlighted  rule  appears in the window at  the
bottom of the screen. To get  a  more detailed explanation of any rule
on this screen, move the highlight onto that rule using the arrow keys
or the mouse. Then that rules explanation of  it  will  appear  in the
window at the bottom of the screen.

Whenever you are in the rules screen you can change  at  least some of
the rules. Pressing ENTER changes  the  highlighted  rule.  Whenever a
rule  changes in response to the ENTER key,  the  explanation  in  the
window  may  also change to reflect the  new  rule.  Before  the  game
begins, you can change any rule on this screen. After the  game begins
there are a few restrictions on changing rules. If you enter the rules
screen while a hand is in progress, the program will only allow you to
change the 'Speed', 'Sort'  and  'Sound' rules. If you enter the rules
screen  between  hands  you can change all rules. However changing the
'Competition level' and 'Number of  Players' rules will have no effect



                                - 12 -



on the game already  in  progress. Changing any other rule will affect
the game  in  progress.  The  new rule will go into effect on the very
next hand.
You can  exit  from  the  rules screen at any time by pressing the ESC
key.

Note: If you entered the Rules screen via a choice from  the secondary
menu, when you exit the  Rules  screen  you  will  return  not  to the
secondary choice menu, but to the original choice menu.


The Players screen

In  the  center  of the Players screen are the names  of  all  players
currently  in  the  game. Players are  listed  in  one  of  4  columns
depending on their playing  strength.  The  Strong  players constantly
base their play on, the number of players in the game, their position,
the odds offered by  the  pot, and their estimation of their opponents
hand values and their own hands chance of winning. The  casual players
are generally unaware of the pot odds and the various  possible values
of their opponents hands.  They  depend  almost  entirely on 'rules of
thumb' such as:

     "With a pair, or a possible straight, stay in for the draw."

Average  players  lie  somewhere between these two  extremes.  And  of
course Human players are TOTALLY unpredictable.

Note:  If  you  entered the Players  screen  via  a  choice  from  the
secondary menu, when you  exit  the Players screen you will return not
to the secondary choice menu, but to the original choice menu.

The TSS products screens

These screens contain descriptions,  prices  and  ordering information
for various poker-related products from  Top  Score  Software.  To get
from one screen to the next, press  any  key.  To  exit  from  the TSS
product screens press the ESC key.

Note:  If  you  entered the TSS screen via a choice from the secondary
menu,  when  you  exit the TSS screen  you  will  return  not  to  the
secondary choice menu, but to the original choice menu.

The Statistics screens

There are 2 statistics screens. When viewing a statistics screen press
any key(except ESC) to  view  the next statistics screen. Press ESC to
exit all statistics screens and return to the original choice menu.

The first statistics screen  shows  what  percentage  of the time each
player  has been in the game after the first betting round, and at the
showdown. It may be interesting to compare your figures with  those of
players  of  different  skill  levels.  The  most  common  mistake  of
inexperienced  poker  players  is to stay in the pot too often. It can
also be a mistake  to  drop too much, but inexperienced players rarely
make this mistake.





                                - 13 -



The  second  statistic  screens  show  the  number  of  times  various
categories of hands have appeared in the showdown, and how  often they
have won.
The categories on the second screen are:

     Runt(less than a pair)
     Pair of Twos, Threes, Fours or Fives
     Pair of Sixes Sevens, Eights, Nines or Tens
     Pair of Jacks, Queens, Kings, or Aces
     2 pair smaller then jacks over twos
     2 pair equal to or higher than jacks over twos
     3 of a kind
     Straight
     Flush
     Full House(or better)

For each category, three statistics are listed. these are:
  1. The number of times that hand has won when it has appeared in the
     showdown.
  2. The number of times that hand has appeared in the showdown.
  3. The percent of the time that hand has won when it appeared in the
     showdown.


The three columns to the left show these statistics  for  the  current
session only. The three columns to the right show these statistics for
all sessions including the current one. The rightmost  column  has the
number of times the hand has appeared in a showdown. The middle column
has  the  number  of times the hand has won. The leftmost column gives
the winning percentage. You can use  these  figures as a guide to your
own  play.  The number of players in the game has a  large  affect  on
these figures. The  more  players  in  the  game, the better a hand it
takes  to  win.  The figures given are only for games of the specified
size.  The figures will however be  fairly  consistent  regardless  of
strength of the players in the game.


The Odds Screen

The  Odds screen contains helpful information such  as  the  odds  now
being offered by the pot and the odds against you improving your hand.
At  the  top  of the odds screen  are 2 lines that tell you what Vegas
Johnny's estimation of the pot odds is. The first of these lines tells
the simple pot odds. Simple pot odds are how much is in the pot to how
much you owe. So if  there were $75 in the pot and you owed $25, since
there is three times as much money in the pot as  you  owe  the simple
pot odds would  be  3 to 1. In cases where you owe no money simple pot
odds cannot be calculated; They are infinite.
The second line lists the estimated odds to reach  showdown.  This  is
how much money will be in the pot at the showdown  to  how  much money
you  will have to pay to reach the showdown. This form of pot odds  is
more subjective since neither of these numbers used to calculate it is
known for sure. But this form of odds if often  a  more realistic form
to  use in guiding your play. As with simple pot odds if the pot  will
be split, the odds reported are halved.






                                - 14 -



Before the  draw  the  Odds  screen  will  contain a table of possible
improvements for your high  hand.  These are the hands you can improve
to when you draw cards. The table lists  hand  values  along  with the
odds against improving  to  that  hand  value,  and  the  odds against
improving to at least that hand value.

At the bottom  of the odds screen is an estimate of the odds against a
hand of the type you hold winning  in  a  showdown.  These  odds   are
calculated for  a  typical  game.  They  do  not take into account the
values of the up-cards showing or  the  strength of the betting in the
current hand.




Draw poker

Draw  poker is probably the game most people  think  about  when  they
think  of  poker. In Draw poker 5 cards are dealt face  down  to  each
player. There is a betting round. Then each  player  in  turn  has the
choice to throw away from 0 to 3 cards, which the dealer replaces with
the same number of cards. Following this is the 2nd betting round.

A common practice in real-life games is to require that the player who
opens the betting in the first betting round have a  pair  of jacks or
better. One of the rules allows you to specify  this  requirement  for
your game if you wish.

Note:  In Draw poker with 7 or more players it is possible to run  out
of cards during the draw round.  If  this happens the program will add
all cards discarded by  players   to the desk, reshuffle, and continue
the draw round.


The Showdown

If more than one player reaches the showdown, all players reveal their
hands. The player with the highest  ranked  hand gets all the money in
the pot. If  two or more players tie with the same rank high hand, all
players  with the winning high hand get an equal share of the pot. Any
odd dollars that cannot be divided, will remain  in  the  pot  for the
next hand.




Command line arguments/SWITCH.TSS file

When starting this program you can follow the program name with one or
more optional command line arguments(a.k.a switches). There  are about
a dozen recognized arguments, which  give you control over such things
as  display  and  monitor  type,  display  colors,  and initial  rules
settings.

Legal switches for command line are described immediately below. Those
switches that represent the default start-up values are marked with an
asterisk(*).




                                - 15 -



     COLOR       Color monitor attached to display.

     MONO        Monochrome  monitor attached to display. You can  use
                 this  switch to force a monochrome presentation  even
                 if you do have a color monitor.

     BLUE      * Blue   display  background.  One  of  four   optional
                 background  colors  for  color  displays.   The  four
                 options   are   provided   because   personal   color
                 preferences vary from person to person and because no
                 2 monitors are exactly alike.
                 This Blue background is  the  one  preferred  by most
                 people.

     GREEN       Green display background. The green background nicely
                 simulates the color of a green felt playing table but
                 many people find this color scheme to be a bit harsh.

     BLACK       You may prefer this Black background. Particularly if
                 you have an EGA display  adapter  and  want  to avoid
                 having a black border around a colored background.

     CYAN        Cyan display background. Most  people  seem  to agree
                 this one is UGLY. But,  if your color monitor is very
                 old, or badly in need of adjustment, this may be just
                 the thing.

     RULESOK   * Do not enter rules screen  on  program  start-up. The
                 house rules will be those specified in  the RULES.SAV
                 file.  After the game has begun  you  may  enter  the
                 rules screen in the usual manner if you wish.

     PLAYERSOK   Do not enter player screen on  program  start-up. You
                 will be called 'Stranger'  unless  you  also included
                 the  NAME  switch  on your command line  or  in  your
                 SWITCH.TXT file. After the  game  has  begun  you may
                 enter the players screen in the usual manner.

     TITLEOK     Do not pause in the title screen on program start-up.
                 The title  screen will appear for a few seconds after
                 which   it  will  disappear  and  the  program   will
                 continue. After the game has begun if need  to  get a
                 longer look  at this screen, you can enter it through
                 the usual menu selections.

     NOW         Do not pause in  the  title  screen  and do not enter
                 rules or player screens  on  program  start-up. Begin
                 the game immediately.

     RULES       Enter the rules  before  starting  the  game.  In the
                 rules screen you will be able to change all rules.

     PLAYERS   * Enter players screen before  beginning  the  game. In
                 the  players  screen  you  will   be   able   to  get
                 information about your opponents.






                                - 16 -



     TITLE     * Pause in the title screen and wait for a  key  to  be
                 pressed before starting the game. As a default you do
                 pause in the title screen, but this switch allows you
                 to  override  a  TITLEOK  or  NOW   switch   in  your
                 SWITCH.TXT file.

     NAME:<x>    Tells the program that your name is <x>.

     DIR:<x>     Look  for  scoreboard,   rules  and  games  files  in
                 directory <x>

If  there  are  conflicting  switches,  for instance MONO  and  COLOR,
appearing  on the same command line it is switch closest to the end of
the command line that take precedence.

Whenever  this  program  is  started  it  also  looks in  the  current
directory for  a file named  SWITCH.SAV.  You can create an ASCII file
named SWITCH.TXT with any text editor. Any switches that appear on the
first line of SWITCH.TXT will be recognized by the program just  as if
they were typed in  on the command line.

In the case of conflicting switches in the SWITCH.TXT file and  on the
command line, it is the command line switch that takes precedence.


Rules

On  the initial program start-up all rules  can  be  changed.  Between
hands, all rules except for  'Competition level' can be changed. While
a hand is in progress only  the  'Sound', 'Sort mode' and 'Play Speed'
rules can be changed.

You  can't  exit  from the Rules screen while Maximum bet is less than
Minimum bet.


Each player ante

In the absence of a blind bet, this is the amount each player must put
into the pot before each hand is dealt. Values for the ante range from
0  (no  ante)  to 50. If a blind bet is selected, the blind bet is the
ante and the value of this rule is moot.

Blind bet

This is the amount of the  blind  bet in Draw, Hold'em and Forty-four.
Its  value  ranges  from 0 to 100. If this value is 0, no blind bet is
selected and the  first  person  to  speak  in the first round has the
freedom to make a bet  or  not.  When  this  value is greater than 0 a
blind bet of this value is  required  of  the first person to speak in
the first round of betting. As with any other bet,  subsequent players
must call or  drop.  Unlike  any  other  bet, the player who makes the
blind bet can raise themselves. The blind bet only applies to the very
first betting round in the  hand.  If  a  blind  bet  is  selected, it
overrides  any  "jacks  needed to open" requirement. The player to the
left  of  the  dealer must make the blind bet regardless of thier hand
value.




                                - 17 -



Maximum bet

This  is  the maximum amount that a player can bet at  any  time.  Its
value can be set from 1 to 100.

Minimum bet

This is the smallest amount that  a  player  may bet. Its value can be
set from 1 to 100. In real-life poker games it is common to be able to
bet  any  amount  from  the minimum to the maximum so long as it is an
even  multiple of the minimum. However, to  keep  the  user  interface
simple, this program requires  that  all bets be either the maximum or
the minimum - no bets in between. This is no great loss in limit poker
because  it is rare that a bet other than the minimum or maximum is  a
player's  best choice. The maximum bet is often  the  best  choice  to
build a pot you expect  to win, or to drive other players out of a pot
to improve your  winning  chances.  The  minimum bet is often the best
choice to use up a raise in order to keep the  price  of  reaching the
showdown as low as possible. A bet between  them  is  rarely  the best
choice, and when it is, it is only marginally better  than  one of the
other 2 choices.
Note: You can't exit from the  Rules  screen while Maximum bet is less
than Minimum bet.


Raise limit

This is the maximum total number of  raises  that  can  be  made  in a
betting  round.  The  first bet in a round does not count against this
limit. So, for example, if the maximum bet is $25 and this rule limits
raises to 3 per round, the most a round of betting could cost is $100.
Having a limit on the number  of  raises is standard practice in fixed
limit poker. Without such a limit, two players each convinced they had
the best hand could raise each other for round  after  round,  causing
half of the players to go broke on one hand. That's against the spirit
of limit poker. A limit on the number of raises per round is important
for another reason in real-life poker. The reason is that two players,
cheating as a team, could raise round after round to break one or more
honest players in a single hand.


Check-raising

This  rule  allows you to allow or  prohibit  the  practice  known  as
"Check- raising". When a  player  checks, then later in the same round
raises the pot, that's "Check-raising".  Some  people  consider check-
raising  to  be  a  less  than polite practice. Others consider  check
raising to be just another tool in a  well  rounded  arsenal  of poker
ploys and strategies. Check  raising  is  usually permitted in casinos
and public card-houses.


How many players

This selects how  many players will be in at the start of the game. As
play  progresses  and players run out of  money,  the  game  will  get
smaller.  In general, the more players in the  game,  the  better  the
winning hands are.



                                - 18 -



Draw open req

The rule applies only to draw poker. It has two possinle settings. One
setting  "Pair of Jacks" means that a player must hold a pair of jacks
or better in order to make the first bet on the  first  round  of draw
poker.  The  other  setting   'Anything'   means   that  there  is  no
requirement,  a  player can make the first  bet  on  the  first  round
regardless of his holding.

Note: If a blind bet is selected, it overides this rule. The player to
the dealer's  left  must  make  the  blind  bet regardless of his hand
value.


Competition

This rule chooses how strong the competition will be. Before  the game
begins  you  may  choose any of six  levels:  Casual,  Casual-Average,
Average, Mixed, Average-Strong and Strong.  Changing  this  rule after
the game has begun will have no effect on the game in progress.

     Casual Competition

     This is the easiest of  the program's five levels. Your opponents
     will be the weakest ones the program can possibly give  you. This
     means  many 'Casual' players and, in a  large  game,  an  average
     player or two. No 'Strong' players allowed at this level!


     Casual-Average

     With this selection your  opponents  will  be selected in roughly
     equal numbers  from the 'Casual' and 'Average' groups. There will
     be no 'Strong' players in the game at  this  level.  So,  at this
     level your opponents will be tougher than in a 'Casual' game, but
     not so tough as in an 'Average'.

     Average

     This is the median of the program's five possible levels of play.
     With this level in effect the players selected for your game will
     be mostly 'Average'  players.  In  a  large  game  a  'Casual' or
     'Strong' player may also be selected.

     Mixed

     With  this  selection  your opponents will be  of  all  different
     playing  styles.  The  program  will  attempt to give  you  equal
     numbers of opponents from each  style.  This  usually  results in
     your competition being stronger than 'Average'.

     Average-Strong

     With this selection your  opponents  will  be selected in roughly
     equal numbers  from the 'Average' and 'Strong' groups. There will
     be no casual players at this level. Thus the game will  be harder
     than 'Average  competition'  but  a  little  easier  than 'Strong
     competition'.



                                - 19 -



     Strong

     This is the toughest of the program's five levels. It  means that
     your opponents will be the toughest ones the program can possibly
     give  you. They will be 'Strong' players with,  if  the  game  is
     large, an 'Average' player or two.

Play speed

This  allows you to select how fast the  computer  players  will  play
while you are still in the game. The higher you set it for, the faster
they will play. On the slowest  setting  '1' players will take about 2
seconds for each bet  decision.  On  the  fastest setting '10' players
will make their decisions in .2 seconds or less depending on the speed
of your PC. Also note that on slower  machines  such  as  the original
4.7mhz PC the Strong players may take up to a second for each decision
regardless of what the speed is  set  to. This Play Speed setting does
not affect the quality of the computer players play.

Alt Play speed

This  allows you to select how fast the  computer  players  will  play
after  you have dropped out of the game. The higher the number you set
it for, the faster they will play. On the slowest setting  '1' players
will  take  about 2 seconds for each  bet  decision.  On  the  fastest
setting '10' players will  make  their decisions in .2 seconds or less
depending on the speed of your  PC.  Also note that on slower machines
such  as the original 4.7mhz PC the Strong players may need to take as
long as second to make each  decision  regardless of what the speed is
set  to. The Alt Play speed setting does not affect the quality of the
computer players play.



Upcard sorting

This rule determines how players upcards are displayed.  Cards  can be
displayed  in the order in which they are dealt, with  the oldest card
on  the  left  and  the  most  recently  dealt card on the right.  The
alternative is to display cards  in sorted order. Displaying in sorted
order makes it easier  to  see pairs and sequences. Sorted order means
from left to right: pairs first in descending order, then single cards
in  descending order. These are the three  possible  settings  of  the
'Upcard sorting' rule:

     None      All players upcards  will  be displayed in the order in
               which they were dealt.

     Mine only Your  upcards  will  be  displayed  sorted  highest  to
               lowest.  The  upcards   of  computer  players  will  be
               displayed in the order in which they were dealt.

     Everyones Upcards of all players will be displayed sorted highest
               to lowest.







                                - 20 -



Hand rankings

Here is a list  of  the standard generally recognized ranking of poker
hands. Along with each is a description of that hand, and the standard
procedure for breaking ties, in case  two  hands of the same rank face
each  other at the end of a hand. The list  of  hands  is ordered from
best to worst.

  Straight flush   Five cards of the  same  suit  and in sequence. For
                   example: K-Q-J-10-9 all  the same suit ('a Straight
                   flush, king-high').
                   In case of ties the highest sequence wins, so:

                      8-7-6-5-4 beats a 6-5-4-3-2.


  Four of a kind   Four cards of the same rank. For example: 3-3-3-3-Q
                   ('Four threes').
                   In  case  of  ties the highest set of four wins. If
                   both players  have the same set of four, the player
                   with the highest unpaired card wins. So:

                    7-7-7-7-6 beats 5-5-5-5-J
                    8-8-8-8-J beats 8-8-8-8-6

  Full house       Three cards of the same rank, with a  pair  of some
                   other rank. For example: 7-7-7-4-4  ('a Full house,
                   sevens over fours')
                   In case of ties the  player with the highest set of
                   three wins. If the sets of three are the same, then
                   the player with the highest pair wins. So:

                    A-A-A-6-6 beats K-K-K-7-7
                    9-9-9-A-A beats 9-9-9-J-J

  Flush            Five cards of  the  same suit, but not in sequence.
                   For example:  K-10-5-3-2  all  the  same  suit  ('a
                   Flush,king-high').
                   In case of ties  the  player  with the highest card
                   wins. If the  highest  cards are the same rank, the
                   highest  second  card  wins.  If  still  tied,  the
                   highest third,. If still  tied,  the  highest forth
                   card, and if necessary highest the fifth card. So:

                    A-J-10-5-2 beats K-Q-10-6-3
                    A-Q-10-5-2 beats A-J-5-4-5
                    K-J-5-4-3  beats K-J-5-4-2

  Straight         Five cards in sequence, but  not  all  of  the same
                   suit.  For  example:  Q-J-10-9-8     ('a  Straight,
                   queen-high')
                   In case of ties the highest straight wins. So:

                    K-Q-J-10-9 beats Q-J-10-9-8.
                    Q-J-10-9-8 beats 7-6-5-4-3






                                - 21 -



  Three of a kind  Three   cards  of  the  same  rank.  For   example:
                   10-10-10-A-J  ('Three tens' a.k.a. 'trip tens')
                   In case of ties the  player with the highest set of
                   three wins. If the sets of three are the same, then
                   the highest unpaired card wins. If still tied, then
                   the highest final unpaired card wins. So:

                    7-7-7-Q-4 beats 5-5-5-A-7
                    8-8-8-K-3 beats 8-8-8-J-6
                    Q-Q-Q-K-7 beats Q-Q-Q-K-6

  Two pairs        Two cards of the same  rank, with two cards of some
                   other rank. For example:  J-J-9-9-2    ('Two pairs,
                   jacks over nines')
                   In case of  ties,  the player with the highest pair
                   wins. If  these pairs are the same the player whose
                   other pair is  highest  wins. If these are also the
                   same  the  player with the  highest  unpaired  card
                   wins. So:

                    A-A-4-4-10 beats K-K-J-J-A
                    K-K-7-7-9  beats K-K-7-7-4
                    A-A-7-7-Q  beats A-A-7-7-8

  One Pair         Two cards of the same rank. For example:  8-8-J-5-2
                   ('a Pair of eights')
                   In case of  ties,  the player with the highest pair
                   wins. If both pairs  are  same  the player with the
                   highest  unpaired  card wins. If  still  tied,  the
                   second  highest  unpaired card decides  it,  or  if
                   still tied, the third highest unpaired card.

  Runt             None  of  the  above. No pairs, no  sequence  of  5
                   cards, no 5 cards  of  the  same suit. For example:
                   K-J-9-5-2 in different suits ('a Runt, king-high')
                   In case of ties  the  player  with the highest card
                   wins. If the  highest  cards are the same rank, the
                   highest  second  card  wins.  If  still  tied,  the
                   highest third,. If still  tied,  the  highest forth
                   card, and if necessary highest the fifth card. So:
                    A-J-10-5-2 beats K-Q-10-6-3
                    A-Q-10-5-2 beats A-J-5-4-5
                    K-J-5-4-3  beats K-J-5-4-2


Different styles of players

The opponents you face when you begin a  new  game  are  selected from
fifteen possible computer players. There are  five  different computer
players  for each of the three playing  styles:  Casual,  Average  and
Strong. There is one human player: You.

          Casual         Average        Strong         Human
          Rocky          Kid            Greek          You
          Guido          Betty          Bret
          Dilbert        Tex            Alice
          Sarge          Jake           Roscoe
          Fingers        Doc            Fats



                                - 22 -



The following sections describe the general characteristics of each of
these styles of players.

Casual players

     The casual players are generally unaware of the pot odds  and the
     various possible values of  their  opponents  hands.  They depend
     almost entirely on 'rules of thumb' such as:

                  "Bet with a possible flush."
                              and
               "Don't drop with 2 pairs of better"


Strong players

     The Strong players constantly base their play on, their position,
     the number of players in the  game,  the odds offered by the pot,
     and their estimation of their opponents hand values and their own
     hands  chance  of  winning.  It  can be expensive to have  strong
     players in the game!

Average players

     Average players fall  between  the extremes of casual and strong.
     They have  some  awareness  of  the  pot  odds vs their chance of
     winning, and they use this information to a certain degree.

Human players

     This  is  You  for instance. Different human players can be quite
     different  in  skill and style, so I  can't  give  you  much  any
     general  information  here.  Some  of  them  are   more  cunning,
     resourceful and  inspired than the computer players when it comes
     to adjusting their play to take advantage of their opponents, and
     bluffing.


Topics of General Interest

Odds

This section is a primer on  odds,  how  to calculate them, and how to
use them to  play  better.  Experienced  players may want to skip this
section.

Pot Odds are  a ratio of reward to risk: What can I gain/how much must
I risk to gain it. For instance: it  is  your  turn  to speak, the pot
contains $75 and you owe $25. Your potential gain ($75) is three times
your potential risk ($25). In such  a  case  it is  commonly said that
'The pot is offering you 3 to 1 odds'.
In  general, the higher the odds offered by the pot are, the better it
is for you.  High  pot  odds  mean  you are risking a relatively small
amount for the chance of winning a large amount.

Improvement Odds are a  measurement  of how likely future cards are to
improve a hand.  Like all odds they are a ratio, a ratio of cards that
don't improve your hand to cards that do. A classic example:



                                - 23 -



You are playing draw poker and are dealt 5 cards.  You  have no pairs,
but 4 of the cards are spades. If you draw one card, what are the odds
against improvement to a flush? Your draw card could be any one of the
47  cards you haven't seen yet. Of these cards 9 are spades(you have 4
of the 13  leaving 9) and the other 38 cards are not spades. The cards
that  don't give you a flush are roughly four times as numerous as the
cards that  do,  so  it  can be said that the odds against you getting
your flush are 4 to 1 against. In general the  lower  the odds against
improvement are, the better it is for you.


Now let's combine the pot odds and improvement odds examples  and test
'em  out. If you played 47 hands, once for each card in the deck,  and
got a different card each time. Each time you paid $25 to get a chance
to win the $75 already in the pot.  That's  3  to  1 odds. Here's what
happens:


     9 times get flush  win  $75   9 *  75 =  675 gain
    38 times miss flush lose $25  38 *  25 =  950 lose
                                             ---------
                                     Total = $275 loss (big)

Suppose there had been $100 in  the  pot  instead of $75. The pot odds
would have been 4 to 1. We would expect this:

     9 times get flush  win $100   9 * 100 =  900 gain
    38 times miss flush lose $25  38 *  25 =  950 lose
                                             ---------
                                     Total = $ 50 loss (tiny)

Finally,  suppose  there  had been $125 in the pot instead of $75. The
pot odds would have been 5 to 1. We would expect this:

     9 times get flush  win $125   9 * 125 = 1125 gain
    38 times miss flush lose $25  38 *  25 =  950 lose
                                             ---------
                                     Total =  275 gain (big)


So what conclusions do we draw from this?

     If the pot odds are less than the odds against you winning,
                 don't pay the money - it's a bad bet

                                 and

    If the pot odds are larger than the odds against you winning,
                   pay the money - it's a good bet.

If a good player knows he is beaten, he will not  stay  in  unless the
odds  offered  by  the pot are  greater  than  the  odds  against  his
improving enough to win.








                                - 24 -



This odds discussion has  been  simplified.  It  ignores the fact that
your flush could lose(not likely, but it could). It ignores  the money
you  might gain by betting when you make  your  flush.  However  these
other factors are relatively minor adjustments to the formula and tend
to average out.


Recommended Poker Books

For anyone seriously interested  in  learning to play a better game of
poker,  this  program  is  a  good  start.  In addition  Vegas  Johnny
recommends  the following books on poker. Since  he  hasn't  bought  a
poker  book  since  the  late  seventies,  all  of  the  books on  his
recommended list is at least 10 years old. But, since(he claims) poker
hasn't changed much in the last ten years, he stands by  the following
recommendations:



Poker is the name of the game       - Walter Gibson
This  is  the  book advertised on one of those 'extra cards' that come
with  decks sold by  the U.S Playing Card Co. At(as of 1989) $2 it's a
bargain.


Sklansky on Poker Theory            - David Sklansky
This book has the real goods. If you  put  this  stuff  into practice,
you'll be very dangerous. This book is most useful for intermediate to
advanced players. Try the Gambler's Book Club in Las Vegas, NV.


Poker, a guaranteed income for life - Frank R. Wallace
The book that explains how you can use a submarine sandwich in a poker
game to win hundreds of dollars!  You  judge this one for yourself. Is
it  a  laugh-riot?  Depressing?  Worthless?  or   Valuable?   Or  some
combination?


Play poker to win             - Amarillo Slim Preston, Bill Cox
The book by that colorful guy in the cowboy hat who 10 or 15 years ago
showed up on Johnny Carson's show a couple of times after  winning the
World Series of Poker. Where is he now? "No one  knows  where the hobo
goes  when it snows." I think it's out of print, so look for this  one
in a used book place.

















                                - 25 -



Computer players / Human players

As good as  computers are at what they do, they are no match for human
beings(yet!)  when  it  comes to creative use  of  psychology,  bluff,
counter  bluff, and intuition. These can be  large  factors  in  poker
games  particularly  high  stakes  games.  Another   factor   is  your
unintentional/unconscious behavior. Things like: The way you hold your
breath as  the  final  card  that might give you a flush is dealt. The
expression on your face when you make the flush. The way you gush with
confidence as you make the big bet to bluff them  out  when you didn't
make the flush. A human opponent  can  make use of such information, a
computer  cannot(yet!).  So  when  you  play  against  real-live human
players: Be careful. But have fun!



Top Score Software

Top  Score  Software  develops,  publishes  and  markets  nontechnical
consumer-oriented software for personal computers.

Top Score Software  currently  offers the Vegas Johnny Poker programs.
The Vegas Johnny programs include inexpensive  implementations  of the
classic  games  of  Draw,  Stud  and Hold'em, plus the full-blown  no-
holds-barred "Dealer's Choice"  featuring  7 different games each in 4
different variations.

All Vegas Johnny programs work  with  most  popular  display adapters.
They require an IBM compatible PC,  and  DOS 2.0 or later and, require
256k of  memory(except Dealer's Choice requires 384k). Each comes with
a comprehensive document file, and  (as  of  late-1989)  without fancy
packaging.

  Dealer's Choice              - $44.95 postpaid (copy protected)
  Vegas Johnny's Hold'em poker - $17.95 postpaid (copy protected)
  Vegas Johnny's Draw poker    - $7 to register your copy of our
                                 shareware product. Or $9.95 postpaid
                                 for a registered copy of the latest
                                 version.

They  may be ordered using the address  below.  When  ordering  please
specify either 5 1/4 or 3 1/2 inch disks.
Massachusetts residents please add 5% sales tax when ordering.

                          Top Score Software
                              PO Box 0541
                          Townsend, MA 01469
                            (516) 597-0000


Your feedback is valuable to us. Please feel free to send us your
suggestions, complaints and comments, also to the address above.









                                - 26 -



Dealer's Choice

What would you do if you had the worlds best poker software?

     o Learn how to play/play better?
     o While having loads of fun?
     o As you win thousands of (simulated)dollars?
     o Or lose your (simulated)shirt?
     o In an intriguing contest of bluff and counter-bluff?

Dealer's Choice is  by  far  the  most  comprehensive, feature-packed,
fun-filled, computer poker simulation available anywhere. It  pits you
against  from  1  to  7  clever computerized opponents in a  realistic
dealer's choice style poker game.

You can select which game or combination of  games  is  allowed  to be
played. The games you can select are:

       o Draw poker     o Hold'em        o Forty-four
       o 5 card stud    o 6 card stud    o 7 card stud
       o Mexican stud

You can select which popular variations of each game are  allowed. The
variations you can select are:

       o High-only    o Low-only
       o High-Low     o High-Spade

You can tailor the house rules to suit YOUR preferences. Set the rules
to match those of your own  Friday  night  game if you wish. Among the
rules you can specify are:

       o number of opponents, skill level of opponents.
       o California, Kansas City or 6-4-3-2-A low evaluation
       o size of ante, blind bet, maximum bet
       o Jacks required to open in Draw poker
       o and many MORE!

From  then on its 'Dealer's Choice'. And when  the  game  begins,  the
features don't end! Anytime while the game is in progress:

       o on-line betting advice from Vegas Johnny
       o on-line help with hand rankings
       o on-line odds advice
       o on-line statistics summary.

At your command - for your enjoyment - just a few keystrokes away.

The action is fast, the stakes are high, the competition is  tough and
the challenge is real. Dealer's Choice - From Top Score Software.











                                - 27 -



Vegas Johnny's Hold'em Poker

Computerized version of Hold'em poker. Hold'em is the  game  they play
every year in Las Vegas for the world championship. In  Vegas Johnny's
version you are pitted against from 1 to 7 computerized opponents. The
money is simulated, but the fun and the action are for real!

First YOU tailor the house rules to suit your preferences:

     o Number of opponents, skill level of opponents
     o Size of ante, blind bet, maximum bet and other limits
     o Permit or Outlaw check raising
     o and many more!!

Then from the time the first card if dealt, until the end of the game,
Vegas Johnny's Hold'em poker has on-line help, on-line betting advice,
on-line odds advice and on-line statistics summary at your command.

Sure, you can find Hold'em poker programs costing quite  a  bit  more.
But you won't find a more fun, feature-packed and comprehensive one at
any price, anywhere. Except Top Score Software.








































                                - 28 -



Vegas Johnny's Draw Poker

Ever-popular Draw poker. THE classic  form  of  poker.  Vegas Johnny's
Draw poker is an exciting simulation where you are pitted against from
1 to 7 clever computerized opponents in a draw poker game.

Simulation? Well the money's simulated, but the fun is  real  and  the
action is fast!

First tailor the  house  rules  to  suit your preferences, or to match
those of the Saturday night game you play in:

     o Number of opponents, skill level of opponents
     o Size of ante, blind bet, maximum bet and other limits
     o Permit or Outlaw check raising
     o Jacks required/not required to open
     o and many more!!

Vegas Johnny's Draw  Poker  has  the  same great features as our other
poker programs. Features such as:

     o on-line help
     o on-line betting advice
     o on-line odds advice
     o on-line statistics summary
     o natural, easy to use user interface
     o card sorting - at your option
     o sound  - at your option
     o user selectable playing speed

This inexpensive shareware program has  features  and  playability far
superior  to  $35  poker programs you may have seen offered elsewhere.
Vegas Johnny's Draw poker is a program that lives up to  the shareware
ideal of inexpensive quality software.



























                                - 29 -
































































                                - 30 -
```
{% endraw %}

## QUICKS.TXT

{% raw %}
```






                      Quick-Start Instructions
                    For Vegas Johnny's Draw Poker
                           (Yellow Sheet)


  To run from Floppy disk:
     1. Boot DOS (must be version 2.0 or later) on your system if
        it isn't already running.
     2. Put the Vegas Johnny Master disk into drive A.
     3. Logon to the floppy disk by typing:  A:
     4. Start the program by typing:  POKER

  To install onto hard disk:
     1. Boot DOS (must be version 2.0 or later) if it isn't already
        running.
     2. Decide what directory you want Vegas Johnny Poker to
        reside in. Create a new directory if you wish.
     3. Use the CD command to change to the directory that you
        want to install Vegas Johnny Poker into.
     4. Put the Vegas Johnny Master disk into drive A.
     5. At DOS prompt type:  COPY A:*.*

  To print out the document file(approx 40 pages):
     1. If not running DOS, Boot DOS on your system.
     2. Turn your printer on and switch it 'on-line'.
     3. Put Vegas Johnny Master disk into drive A:
     4. At DOS prompt type: PRINT A:POKER.DOC

  Once the program is running:
     ENTER  Selects(or changes) the item highlighted on the screen,
     arrows Move the on-screen highlight to a different item,
     ESC    Returns you to the previous screen(if any).
     F1     Gets you help(except in the main screen).

  To make suggestions, report bugs, register shareware and order
  other Vegas Johnny programs:
    1. Place correspondence into empty, unused envelope.
    2. Address envelope to:  Top Score Software
                             PO Box 541
                             Townsend, MA  01469
    3. Put 25-cent stamp on envelope - place in mailbox

```
{% endraw %}

## README.TXT

{% raw %}
```
README.TXT file for Vegas Johnny's Draw Poker Rev 1.01
------------------------------------------------------

File QUICKS.TXT has brief(1 page) operating instructions.
File POKER.DOC  has complete operating instructions.

Changes since rev 1.0:
    The title screen of Rev 1.1 has our CORRECT AREA CODE (508)!
    Two bugs in Vegas Johnny's Advice were fixed.	
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1896

     Volume in drive A has no label
     Directory of A:\

    FILE1896 TXT      2887  12-27-89   5:27p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   4:50p
    POKER    DOC     76178  10-12-89   6:35p
    POKER    EXE    144962  10-20-89  12:51a
    QUICKS   TXT      1782  10-12-89   3:17a
    README   TXT       374  10-20-89  12:57a
            7 file(s)     226761 bytes
                           92160 bytes free
