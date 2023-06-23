---
layout: page
title: "PC-SIG Diskette Library (Disk #641)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0641/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0641"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAHJONG"

    Run programs requiring a CGA card on a Hercules Graphics adapter.  This
    emulator allows such programs as PC-Paint, Printmaster, Flight
    Simulator and many others to run with no visible difference.
    
    MAHJONG is a Chinese gambling game which arrived in the West in the
    early 1920's.  The origin of the game is unclear but its development has
    touched on astrology, chess, gambling and, oddest of all, the Earth's
    magnetic field.
    
    It is a fast moving, dynamic game that becomes addictive with its
    excitement and intrigue.  The basic premise is a card game with 136
    cards (or "tiles" as they are called in MAHJONG) requiring both skill
    and luck.  Four players receive 13 tiles each and then pick up and
    discard tiles as they try to obtain four complete sets and a single pair
    of tiles.
    
    The game is interesting because of the many combinations possible and
    the skill required to increase your score.  To add further excitement,
    the fast pace provides little chance for contemplation -- thus
    developing an "instinct" rarely seen in other games.  Three levels of
    play are provided: beginner, advanced and professional.  An entertaining
    game for the whole family.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## C1987.DOC

{% raw %}
```

IBM-PC MAHJONG Version 2.12B  1/1/1989

Copyright (C) Peter E. King, 1986-1989

ADDRESS:       PROCON SOFTWARE
               P.O. Box 43
               Essendon
               Victoria, 3040
               AUSTRALIA.    


Requirements:

IBM-PC  or  compatible (100%) with  DOS version  2.0  or  higher.  
128K  bytes of memory,   one disk drive and graphics card  - CGA,  
EGA or Hercules graphics card.


Copying and distribution:

PROCON's MAHJONG  may be copied and distributed  as  a  SHAREWARE 
program.    That   is   the   disk  may  be  copied  as  is*  and  
distributed   to  others   provided  that  ALL  files   on   this  
disk  are   copied unmodified.    It  may only be distributed  on 
BBS  if all files* are downloaded in ONE transfer (see Jim Button 
for  details).   The program may NOT  be used  as  a value  added 
product and NO fee can be charged  except for a disk and handling 
charge of up to $10 Australian or $6 U.S.

*NO  ALTERATIONS  TO  THE  DISK  MAY  BE  MADE  WITHOUT   WRITTEN 
PERMISSION.   IT MAY NOT BE DISTRIBUTED ALONG WITH OTHER PROGRAMS 
WITHOUT PERMISSION.  YOU HAVE BEEN WARNED!

The copyright notices are to preserve my options,  and to protect 
you  from  the  untoward modifications  of  others.   It  is  NOT 
intended   to   prevent  the public distribution  of  the  IBM-PC 
MAHJONG disk, subject to the above limitations.

If  you are a subscriber (Bless your little hearts),  I'll gradly 
answer any questions that you may have.   If NOT (Oh Dear!)  then 
please send a stamped S.A.E. and I'll try to get back to you.  

Please  note,  HERCULES.COM may be separated from  disk  provided 
that  HERCULES.DOC accompanies it.   It may be used by other P.D. 
programmers BUT MUST NOT BE USED FOR COMMERCIAL OR  INSTITUTIONAL 
(GOVERNMENT) PURPOSES WITHOUT WRITTEN CONSENT.

(C) 1989, ProCon Software, P.O. Box 43, Essendon, 3040, AUSTRALIA

```
{% endraw %}

## FILES641.TXT

{% raw %}
```
Disk No:  641
Program Title: MAHJONG version 2.12B
PC-SIG version: 2.3

MAHJONG is a Chinese game which arrived in the West in the early 1920's.
Its Chinese origin, in the game's present form, can only be traced back
to the Ching Dynasty, around 1870.  However the true origin of the game
goes back much further as it belongs to that genus of games which
includes cards, dominoes and dice.  Its historical pathway is unclear,
but its development touches upon astrology, chess, gambling, and, oddest
of all, the Earth's magnetic field.

MAHJONG is a fast moving, dynamic game that becomes addictive with its
excitement and intrigue.  It's basically a card game with 136 cards (or
TILES as they are called in Mahjong) forming a game of both skill and
luck.  The aim of Mahjong is deceptively simple with four players each
receiving 13 tiles and then picking up and discarding tiles as they try
to obtain FOUR complete sets of tiles (called PUNG, KONG and CHOW) and a
single pair.  The game is interesting because of the many hand
combinations obtainable and the skill required to gain points To add
further excitement, the fast pace provides little chance for
contemplation--thus developing an `instinct' rarely seen in other games.

Usage:  Entertainment.

Special Requirements:  CGA card, you can run the program on a HERCULES
card with the color emulation program also on this disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

C1987    DOC  Copyright Notice.
AUTOEXEC BAT  This file makes the disk self booting if MS/PC-DOS is added.
HERCULES COM  Color Graphics Emulator for Hercules Graphics Adapter.
HERCULES DOC  Documentation for HERCULES.COM.
HMAHJONG BAT  Batch file to run MAHJONG on Hercules Graphics Adapter.
MA       A    File needed by MAHJONG.
MA       B    File needed by MAHJONG.
MA       C    File needed by MAHJONG.
MA       INS  File needed by MAHJONG.
MA       P    File needed by MAHJONG.
MA       S    File needed by MAHJONG.
MAHJONG  EXE  MAHJONG for color computers.
MAORDER  DOC  Registration order form.
MAREAD   DOC  A short explanation of the program and the game of MAHJONG.
NEW      DOC  Documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #641 MAHJONG  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation type MANUAL (press enter)                    ║
║                                                                         ║
║ To start the CGA program type MAHJONG (press enter)                     ║
║                                                                         ║
║ To start the Hercules program type HMAHJONG (press enter)               ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HERCULES.DOC

{% raw %}
```

HERCULES  Version 1.00 

Copyright (C) Peter E. King, 1987


Requirements:   Hercules  or  Mono-graphics  card  with  graphics 
paging  capability  (64K  bytes RAM).   Your computer  should  be 
hardware  and software (BIOS) compatible with  the  IBM-PC.   The 
program  works  by redirecting the video interrupt (INT 10H)  and 
the timer interrupt (INT 8H) and installing a new video parameter 
list (INT 1DH).  The program maps the 640x200 CGA screen into the 
720x340 hercules screen,  thus providing a smaller display area - 
This is normal!


WARNING:

Not  all programs will be compatible with HERCULES,  try to  test 
them one at a time,  particularly other memory resident programs.  
This program will,   however,   allow many CGA colour or black  & 
white programs such as PC-PAINT,   PRINTMASTER,  PICTURES,  FIGHT  
SIMULATOR  (minus  the  Esc  screen)  and  many   PUBLIC   DOMAIN 
programs to execute with little noticeable difference.


Copying and distribution:

ProCons HERCULES may  be copied and distributed  as  a  SHAREWARE 
program.    That   is   the   program  file  may  be  copied  and  
distributed  to others    provided   that  the documentation file  
(HERCULES.DOC)  accompanies  it.     The program may NOT  be used  
as    a  value  added product and NO FEE  MAY  BE  CHARGED.    If  
distributed  along with other P.D.  software a maximum charge  of 
$10 Australian or $6 U.S. must apply for copying and handling.

The copyright notices are to preserve my options,  and to protect 
you  from  the  untoward modifications  of  others.   It  is  NOT 
intended   to   prevent the public distribution of  the  HERCULES 
program, subject to the above limitations.

If  you are a subscriber (Bless your little hearts),  I'll gradly 
answer any questions that you may have.   If NOT (Oh Dear!)  then 
please  send  a stamped S.A.E.  and I'll try to get back to  you.  

If  you  would  like the latest version of  HERCULES.COM,  it  is 
provided  only  on ProCon's MAHJONG games disk.   Please  send  a 
personal  cheque or money order for $30 U.S. ($35 Australian)  to 
the  address  shown  below.    The latest  version  now  provides 
keyboard  control  of the screen update rate and affects  program 
execution speed less.  Will work with some versions of GWBASIC.

Please  note,  HERCULES.COM  may  only  be  separated  from  disk 
provided  that HERCULES.DOC accompanies it.   It may be  used  by 
other  P.D.  programmers  BUT MUST NOT BE USED FOR COMMERCIAL  OR 
INSTITUTIONAL (GOVERNMENT) PURPOSES WITHOUT WRITTEN CONSENT.

(C) 1987, ProCon Software, P.O. Box 43, Essendon, 3040, AUSTRALIA

```
{% endraw %}

## MAORDER.DOC

{% raw %}
```
                              MAHJONG By P.E.KING
                              ===================

       If  you  like  the  game  and would  like  to  receive  the  full 
       documentation  (details are given on game strategy,  scoring  and 
       saving/restoring  a  game) and the latest version of the  program 
       (which  provides additional help for beginners and  extra  colour 
       for  those  with  EGA  capability),   then  send  $30  U.S.  ($35 
       Australian) to the address below.   This price includes packaging 
       and  AIRMAIL  postage  to  anywhere in  the  world.   Payment  by 
       personal  check  in  your local currency is accepted   (See  your 
       newspaper  for  the  current  exchange  rate).  Payment  is  also 
       accepted  by VISA card.   Please allow two weeks for delivery  to 
       the U.S.A.  Longer for other countries.


                    Send To:     Peter E. King
                                 P.O. Box 43
                                 Essendon, 3040
                                 Melbourne
                                 AUSTRALIA


       -----------------------------------------------------------------
                                  ORDER FORM
       -----------------------------------------------------------------

       YES,   I like this MAHJONG game and would like to subscribe fully 
       with  the  author of the game.    I enclose a  check/money order* 
       Bankcard/Visa No. for $[     ], being for [    ] subscription(s).


       MY NAME:       _____________________________________


       MY ADDRESS:    _____________________________________

                      _____________________________________

                      _____________________________________


       BANKCARD/VISA: _____________________________________
       
       EXPIRY DATE:   _____________________________________


       SIGNATURE:     _____________________________________


       STATS:    My Computer is a  ____________________________________.

                 I run DOS version _____.  I have MAHJONG version 2.12B.

                 I obtained my copy of MAHJONG from ___________________.

                 I am a BEGINNER [  ], ADVANCED [  ] PRO [  ]  player.

       * Payable to:  PROCON SOFTWARE, Box 43, Essendon 3040, Australia.

       -----------------------------------------------------------------


```
{% endraw %}

## MAREAD.DOC

{% raw %}
```

            @@    @@   @@@@   @@  @@  @@@@@@   @@@@   @@  @@   @@@@      
            @@@  @@@  @@  @@  @@  @@     @@   @@  @@  @@@ @@  @@          
            @@ @@ @@  @@@@@@  @@@@@@  @  @@   @@  @@  @@ @@@  @@  @@      
            @@    @@  @@  @@  @@  @@   @@@     @@@@   @@  @@   @@@@       
                                                                        

                     A DOWN-UNDER PRODUCT/BY PETER E. KING


       This program is distributed under the SHAREWARE concept.  You are 
       encouraged to copy and pass on this program to friends, relatives 
       and   countrymen alike [see C1987.DOC for   restrictions].   This 
       program is not a demonstration,  it is a complete working program 
       provided on a 'try before buy' basis.   I sincerely hope that you 
       enjoy  the  game,  but remember,  the Australian author  of  this 
       program   receives  absolutely nothing for writing  this  program 
       unless  you decide to register your copy.   There are benefits in 
       doing so,   however.  You will receive the latest version of  the 
       program  together with full documentation and user support.  Plus 
       you  will  be encouraging authors to write more quality  programs 
       which are not copy-protected at a price you can afford.

                           WORLD-WIDE USER COMMENTS

       Here  is  a  selection of comments about this  program  from  the 
       people  who  really count - YOU THE USER.   I hope that  it  will 
       encourage you to take the time to learn how to play MAHJONG:

       'I  purchased the program thinking it would be like the  Shanghai 
        game but I found it to be much more challenging and fun.  Thanks 
        for a good program.'  Alexandra Orazi, CA. USA.

       'It is especially exciting to see my 70-year-old mother-in-law in 
        front of the computer and having fun too!'  Linda Woo, WA. USA.

       'I've  never  played the game before,  but now I'm  hooked'   Pat 
        Clark, South Australia.

       '... the wife is driving me crazy - she is well and truly  hooked 
        on it!'  John Cairns, New Zealand.

       'Thanks for your excellent game MAHJONG.  I've become an addict!'  
        Leo Koreman, Holland.

       '... one of the best games I've come across' R.O'Brien, Australia

       INTRODUCTION

       Mahjong  is  a popular gambling game originating from  China  but 
       adapted  and modified by many people throughout the  world.   Its 
       exact origin is unclear,    however its development touches upon; 
       astrology, chess, gambling and, surprisingly, the Earths magnetic 
       field.   Wherever  the Chinese have settled around the world  you 
       will  find this game played passionately.   If you walk the  back 
       streets of Hong Kong and listen for the familiar clicking of  the 
       tiles  (the playing pieces in mahjong are called tiles) you  will 
       see  the fascination and excitement of this game.   For those  of 
       you that take the time to learn it, I hope that you will discover 
       the thrill and joy that so many have un-covered before you.


       THE TILES

       Study the various tiles carefully before playing the game.  There 
       are  three suits;   Characters,  Circles and  Bamboos.   Each  is 
       numbered  from 1 to 9.   The special tiles are the 4 winds (East, 
       South,  West and North) and the 3 dragons (White, Green and Red).  
       There are four of each tile, making a total of 136 tiles in all.

       DEFINITION OF TERMS

       CALL         A player is one tile away from declaring 'Mahjong'.

       CHOW         Is a run or sequence of three suit tiles.   Example: 
                    5-6-7 of Bamboo,  1-2-3 of Circles.

       EAST WIND    The  person  who is East Wind always  starts  first, 
                    pays  and  receives  double and  remains  East  Wind 
                    should they win the hand.

       HAND         There are 4 hands per round.  If a draw occurs, then 
                    it is called a DEAD HAND and the hand is repeated.

       KONG         A set of 4 identical tiles.   Example:   Four 1s  of 
                    Characters, four West Winds, four Red Dragons.

       PUNG         A set of 3 identical tiles.   Example:   Three 6s of 
                    Bamboo, three South Winds, three White Dragons.

       ROUND        There are four rounds per game:   East,  South, West 
                    and North (NOTE: 2 rounds only for beginners).

       HOW TO PLAY

       You  have 3 opponents;  LOWER,  OPPOSITE  and  UPPER.   You,  the 
       PLAYER,  are  given  thirteen  tiles which are displayed  at  the 
       bottom  of the screen.   Your opponents are also  given  thirteen 
       tiles  each,  however these remain hidden from you and only their 
       discarded tiles are shown on the screen.   Each player in turn is 
       given a tile and then they throw-out or discard one.   When  your 
       turn  arrives,  you will be given a tile on the right.   You  may 
       either discard this tile by pressing the SPACE BAR or keep it and 
       discard another by pressing the letters A to N.  In the beginners 
       game, you must then press the SPACE BAR.

       The aim of the game is to collect four sets of PUNG, KONG or CHOW 
       and a single PAIR of tiles,  you may then DECLARE 'Mahjong'.   To 
       declare,  you must have at least 14 tiles (four sets of three and 
       a  pair).   The  last  tile may be given to you  when  your  turn 
       arrives  (SELFDRAW) or you may CLAIM the tile from  any  discard. 
       Watch-out!  Your opponents may do the same!

       Look  at your opponents declared hands and see the SPECIAL  HANDS 
       display for valid combinations of tiles for 'Mahjong'.  A penalty 
       may be suffered if you declare on an invalid hand.


       BEGINNERS should start by collecting sets of three  only.   These 
       sets  may  be  completed within your hand and are  called  HIDDEN 
       PUNGs or CHOWs.  The third tile may also be claimed from anothers 
       discard.  These sets must be laid on the table and are EXPOSED to 
       the  other players.   Exposed tiles are shown on the bottom-right 
       of  the screen.   NOTE:   The third tile for a CHOW may  only  be 
       claimed from the UPPER player.   (The registered version actually 
       indicates the tiles that may be claimed by you).

       To CLAIM a tile, you must first press the 'Tab' key.  Then select 
       the option 'F1' to DECLARE,  'F2' for CHOW, 'F3' for PUNG or 'F4' 
       for KONG.  Should you decide not to claim the tile then press the 
       'Esc' key (above the 'Tab' key) to continue the game.

       Scoring is determined by adding up the number of points  obtained 
       and  then  doubling  this  base score.   The  number  of  doubles 
       obtained depend on whether certain tiles or combination of  tiles 
       are held in the hand.   E.g.  A pung of dragons, scores a double, 
       also an all pung hand or all chow hand.  A hand with all tiles in 
       the  one suit scores three doubles!   The total score (limited to 
       1,000  points)  is then deducted from each player (remember  East 
       pays and receives double) and given to the winner of the hand.


       PAUSE  the  game  by pressing 'F10'.   QUIT the current  game  by 
       pressing  Crtl-break or Crtl-C.   This returns to the main  menu.  
       Strict time delays control each stage of the game.   If you  fail 
       to respond within this time the game will automatically continue.

       The  challenges  of  the  game are  numerous.   You  may  try  to 
       establish a new high-score,  you may try to obtain a higher score 
       than  a friend,  you may try to come out ahead or you may  simply 
       aim  not  to  be  last!   Final  scores  of  over  9,000  at  the 
       professional level are possible.

       The  large  number  of combination of tiles,  together  with  the 
       possible  strategies and speed required,  makes Mahjong an  ever-
       increasing challenge of both skill and luck.   To illustrate this 
       challenge,  the  following  combination of 13 tiles in  one  suit 
       provides the maximum possiblility for 'Mahjong'.  Any tile from 1 
       to 9 can complete the hand!  Can you see all the PUNGs and CHOWs?

                           1-1-1-2-3-4-5-6-7-8-9-9-9


       (C) 1986-1989   PROCON SOFTWARE, BOX 43, ESSENDON 3040, AUSTRALIA

```
{% endraw %}

## NEW.DOC

{% raw %}
```

PROCON SOFTWARE
===============

ProCon is solely owned and run by yours truly,  Peter King.  I am 
a  professional  engineer with many years experience with  micro-
computers.   New  products  are continually being  developed  and 
released, here is just a few:


MAHJONG  Version 2.24 is a games program which provides  an  easy 
means  of learning this Chinese game with complex terminology and 
scoring.  It can also improve your speed and skill in the game if 
you are an experienced player.  Cost $35 AUS ($30 U.S.), requires 
CGA, EGA or Hercules graphics card.

=================================================================
HERCULES USERS!  Provided on the mahjong games disk is the latest 
version  of  'hercules.com',  this is a memory  resident  program 
which allows many C.G.A. programs to run on the Hercules graphics 
card.    Yes!   Even GWBASIC runs using this program.  The latest 
version  provides  keyboard control of the screen update  rate  - 
so program execution speed is less affected.
=================================================================

PROCON  FORTUNE  Version  2.10 is a  program  which  provides  an 
analysis  of  personality  based on  Western  astrology,  Chinese 
astrology and numerology.   Ideal for parties and people who need 
an instant analysis based on a person's name and date  of  birth.  
Send $10 U.S. for SHAREWARE version.

PROCON CONTROL Version 1.00 is a remote control program utilizing 
any  printer port you can control up to eight relays for robot or 
model control,  switch a radio or tape recorder on and off and SO 
MANY  other  things.   A memory resident program  allows  you  to 
switch these eight outputs whilst running other programs.   AND a 
BASIC  program allows you to switch them at ANYTIME  - with  DATE 
and TIME programmed.  $10 for SHAREWARE version, $30 to register.

PROCON UTILITIES Version 1.10 is a collection of useful utilities 
with  instructions on how to use them.  Includes on-screen  clock 
(can  be turned on and off and works in all  CGA  modes),  screen 
blanking  program (works with MGA,  HGA,  CGA),  real-time  clock 
routines to replace TIMER, programs for dual-screen systems (also 
explains how to install two screens) and many more.  Send $10 for 
SHAREWARE version, $20 to register.


Soon to be released:

PROCON BASICaides Version 1.0 is a collection of useful assembler 
coded routines and BASIC programs to make your BASIC  programming 
easier and faster.   Cost:  TBA.


-----------------------------------------------------------------

Please  note:    10% of all monies received go to help local  and  
overseas  charities.    ProCon is  also  dedicated  to  providing 
assistance  to the physically handicapped by  developing programs  
to  make  the IBM-PC more accessible.    All enquiries should  be 
directed to:  Peter E. King, Box 43, Essendon, 3040, AUSTRALIA.

-----------------------------------------------------------------

PROCON  sells  WORLD-WIDE.    ProCon will  process  ANY  personal 
cheque  or money order from ANYWHERE in the  world (thanks to the 
ANZ bank).    A cheque or money order in your  local currency for 
the  equivalent in  U.S.   dollars  (check your  newspapers   for 
the  conversion  rate) is  accepted,   postage  and  handling  is 
included AND orders are processed same day,  NO DELAY!

=================================================================

ALL  PROGRAMS  PROVIDED  ON 5.25 INCH  DISKS  ONLY.   PAYMENT  BY 
PERSONAL CHEQUE IN YOUR LOCAL CURRENCY IS ACCEPTABLE.  CANADIANS, 
PLEASE  DO  NOT SEND U.S.  DOLLARS,  SIMPLY CONVERT THE PRICE  TO 
CANADIAN DOLLARS AND SEND THAT AMOUNT - NO PROBLEMS!

=================================================================


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0641

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT         7   9-26-86  12:22p
    C1987    DOC      2048   1-20-89  12:15p
    FILES641 TXT      2343   3-13-89   4:09p
    GO       BAT        38   6-11-87   9:37a
    GO       TXT       771   3-08-89   3:42p
    HERCULES COM       756  12-08-87  12:07p
    HERCULES DOC      2688   2-28-89  12:29a
    HMAHJONG BAT        17  12-08-87   5:40p
    MA       A        4800   5-20-86  12:07a
    MA       B        4800   5-20-86  12:03a
    MA       C       16384  12-08-87  12:02a
    MA       INS       404  11-19-86  12:00a
    MA       P        4800   5-20-86  12:07a
    MA       S       16384  12-08-87  12:01a
    MAHJONG  EXE     92800  12-08-57   2:27p
    MANUAL   BAT       147   3-02-89  10:00a
    MAORDER  DOC      2560   2-28-89  12:36a
    MAREAD   DOC      8832   2-28-89  12:22a
    NEW      DOC      3840   2-28-89   1:03a
           19 file(s)     164419 bytes
                          149504 bytes free
