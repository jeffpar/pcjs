---
layout: page
title: "PC-SIG Diskette Library (Disk #2382)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2382/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2382"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREE SPEECH BBS"

    Free Speech is a streamlined BBS designed for high message throughput.
    Installed in seconds and supports up to three languages (English and
    French text provided), with full foreign-character translation. Can be
    run as a stand-alone BBS, a front-end, or as a door. Like all Pinnacle
    BBS products, Free Speech is a zero maintenance system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2382.TXT

{% raw %}
```
Disk No: 2382                                                           
Disk Title: Free Speech BBS                                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Free Speech BBS                                          
Author Version: 3.10A                                                   
Author Registration: $25.00                                             
Special Requirements: A Modem.                                          
                                                                        
Free Speech is a streamlined BBS designed for high message throughput.  
Installs in seconds.  Supports up to three languages (English and French
text provided), with full foreign-character translation.  Can be run as 
stand-alone BBS, a front-end, or as a door.  Like all Pinnacle BBS      
products, Free Speech is a Zero Maintenance system.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## DIALOG.TXT

{% raw %}
```
This is the first message on your Free Speech BBS.  It's here to inform you
that you've installed the BBS successfully.  The staff of Pinnacle Software
thank you for taking the time to try Free Speech and we hope that you enjoy
this exciting approach to free communication.

;K Inf
The program itself, however, is not free.   If you continue to use it after
21 days, it must be legally registered.  Registration is only $25.

When you register your copy of Free Speech,  you will be entitled to a copy
of the LATEST VERSION.  What's more,  we'll give you a  free  one-year sub-
scription to  Pinnacle  News,  so you can stay up-to-date on all the latest
developments of Free Speech and our many other fine products.

;K Hlp
For more details, write to us at:

Pinnacle Software, PO Box 386, Town of Mount Royal, Quebec, Canada, H3P 3C6

;K Inf
Or give us a call today, by calling us at 514-345-9578.

Is your computer IBM-PC compatible?   (N y)~~
Can your monitor display in colour?   (N y)~~
Lines per screen?  (0-continuous, or 10-50)~~
To repeat last search, press Enter.
Find:~~
Searching (spacebar to quit) ...
Not found.
~LINE~
First line is~
Enter ? for help.
Five lines left.
Out of room.
Out of time.
Last line is~
>~
CONSOLE
BAUD~
SUN       MON       TUE       WED       THU       FRI       SAT       SUN
/:YNFR|■  Date & time delim, Yes, No, Forward, Reverse, Local, Colour
Password:~~
KDRQMark lines with K (Keep), D (Delete), R (Retype) or Q (Quit).
Edit mode off.
Would you like an explanation of how this board works?  (Y n)~~

End of text.
Top of text.
Found at line~
Search cancelled at line~
Last line viewed at console was~
That was line~
~FROM~
SEARCH~
""  Open and close quotations
~WPM
~DEV
|:|:|:|:|:|
Reached "Five Lines Left" limit for users.
MORE...
Continuing what you were doing...
Your text...
EFS       Up to 3 languages; if only one letter, won't ask; first is default
FRE SIL   File extension for language 2 & 3; TXT is default; Use 3-char exten
Press E for English.  Appuyez F pour francais.  Press S for Silly.  (E f s)~~
```
{% endraw %}

## F-BYE.TXT

{% raw %}
```
;K Inf
Thank-you for stopping by!
```
{% endraw %}

## F-HELP.TXT

{% raw %}
```

;C KB
This is Free Speech
;K Inf

When you see the  MORE...  prompt,  hit Enter to proceed to the next screen.
Additional details will be given later.


;C KB
List of Commands

;K Inf
What to do when you see the  >  prompt:

;U  ITEM ~~~IF ENTERED ON > LINE BY ITSELF
;L
number   Reads from that line # onwards
  S      Searches backwards for text
  O      Off
;L

;K Hlp
EVERYTHING ELSE  you type is  RECORDED!


;7
;C KB
Text Search Note

;K Inf
The text search  (S)  command will help you find your place when  you return to
this BBS.   It searches  backwards from the last line  so you can, for example,
look for where you signed your name, or scan for the date or day-of-the-week.

;L
A search for "XYZ" matches on any case.  A search for "Xyz" matches only "Xyz".
;L


;8
;C KB
Reading Text
;K Inf

What to do when  reading text  or  when you see the  MORE...  prompt:

;U  PRESS  ~~ACTION TAKEN
;L
Spacebar  Stop print:  back to > prompt
   P      Pauses; any key  will restart
   R      Rewind to last message
   F      Forward to next message
;L


;8
;C KB
Entering Text

;K Inf
;U PRESS~~~~IF PRESSED WHILE ENTERING TEXT
;L
CTL-X    Cancels the line you're typing
CTL-H    Erases the previous character
CTL-A    Erases the previous word
CTL-B    Erases current sentence
Enter    Saves the line (permanently)
;L


;6
;C KB
Disclaimer
;K Woe

The system operator assumes absolutely no responsibility for any statements 
expressed by anybody via this service.  This is a FREE SPEECH board with an 
absolute  minimum  of control.   If you are someone who is EASILY OFFENDED, 
please hang up now.  All opinions are tolerated here.


;4
;C KB
Everything Explained in Two Sentences
;K Hlp

When you next see the > prompt, you can enter a line number, enter a one-letter
command,  or type in message text.   If you wish to disconnect, press  O  on an
empty line, then press Enter.
```
{% endraw %}

## F-HELP2.TXT

{% raw %}
```
;* This file is displayed if the user seems to be floundering:
;*
;* - Hits CR at first prompt
;* - Hits 3 CRs in a row
;* - Types lots of lines, each of which are 8 or less characters
;*
;K Inf
This BBS is unlike  any  other  BBS.  In fact, it is more like a tape recorder
than a  traditional  BBS.   Whatever you type at the  >  prompt  is  recorded,
unless it's a command letter.

;K Hlp
Some examples follow.  Note the > prompt.

;L
> Hello.    <-- This would be saved
> 1         <-- This would list from that line number (i.e. line #1) onwards
> ?         <-- This would display a quick overview of commands
> Hi there. <-- This would be saved, since it's not a command
> S         <-- This is the Search command
;L

;K Inf
If you've used other BBS's before,  you may expect to find bulletins and menus
and message bases;  this system has  none  of those things.  It simply records
what you (and other people) type and lets you search through it all.  Think of
it as a text editor program used by the whole community.

;K Hlp
If you require further information, enter  ?  at the  >  prompt.

```
{% endraw %}

## F-LOGO.TXT

{% raw %}
```
;U FREE SPEECH~~~Type ? for help
```
{% endraw %}

## F-SAMPLE.TXT

{% raw %}
```
;*
;*  This is file demonstrates how to use the BBS Display Codes;
;*
;*  First of all, the ;* control marks a line as a comment.
;*
;U This file uses BBS Display Codes

This is regular text.  It is displayed, as is, in the colour.

;S
The ;S control starts slow-typing.  This is useful for getting people's
attention, though you have to be careful not to over-use it, since it is
fairly annoying.  This control can be typed in only at the console.
;S

;U The ;U control underlines things -- or makes them inverse if you have colour

When you have a list of things, you can make the list easier to read by using
the ;L control...

;*
;* Notice how we use the ~ character to indicate what not to underline.
;*
;U Product~~~~Description of Product
;L
SAPPHIRE   The Zero-Maintenance BBS.  Now anybody can be a sysop!
PYROTO     A BBS integrated with a game.  Runs as a door or a stand-alone.
VARITALE   A multiple-path writing system that runs as a "door".
SPACEINV   Arcade game for any display -- mono or color
WEED       Cleans up log files downloaded from BBS's
PHONEMEM   Memory tutorial
LOVEFIRE   Interactive adventure for women only!
HLRB       Handy Little Reference Books from your printer
PINNARTX   Amazing character-graphic pictures
SV         This program, just in case a newer one comes out
SECURE     A bogus security system for fooling burgulars
PRESERVE   A backup system that you won't mind using often
MEGADIII   Very wierd game that programmers may enjoy.
LW         Easy-to-learn label printing program.
;L

Finally, you can change the colour of individual lines by using the ;C control.

;C BA    Blue on black <-- It helps to have comments
Blue on black background
;C EH    Red on LightGray
Green on LightGray

Inverse effects can be useful for making things stand out.
;C HA    LightGray on Black

The colours codes are:

A - Black    F - Magenta     K - LightGreen     P - White
B - Blue     G - Brown       L - LightCyan
C - Green    H - LightGray   M - LightRed
D - Cyan     I - DarkGray    N - LightMagenta
E - Red      J - LightBlue   O - Yellow

;C LA
BBS Display Codes are an alternative to ANSI displays.  You may find that
they makes it easier for you to give your BBS a consistant appearance.

Of course, you can use all line-drawing characters.  For example:

;C EH
┌─────────────────┐
│                 │
│  THIS IS A BOX  │
│                 │
└─────────────────┘
;C LA

People who do not have IBM characters will see a translated version of the
line-drawing characters.

Every method used in this file can be used either in messages or in the
various F-*.TXT files located in the BBS directory.

;E  This marks the end of the file

You can keep other material down here, after the ;E control.
```
{% endraw %}

## F-SYSOPC.TXT

{% raw %}
```
;C NA LightMagenta on Black
The sysop is breaking in for a chat.

To return to what you were doing, enter E on an empty line.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






                                 FREE SPEECH





                                Release: 3.10






                           System Operator's Manual








                      P I N N A C L E   S O F T W A R E

                      P.O. Box 386, Town of Mount Royal
                      Montreal, Quebec, Canada  H3P 3C6

                                (514) 345-9578






































                                  IMPORTANT



           You can EARN MONEY just by passing this software around.

            Two minutes' work could bring you hundreds of dollars.



                         See Appendix B for details.



























































                                   NOTICES


The present version  of Free Speech is distributed as  shareware ("Try before
you buy").  You may try out Free Speech for 21 days (three weeks) at no cost.
If you  continue to  use it  after that  time, you  are required  to pay  the
registration fee (see HELPME program for details).



Copyrights and Trademarks



Free Speech is Copyright (C) 1990 by Pinnacle Software.  Its appearance, look
and feel and operational concepts  are property of Pinnacle Software and  any
product bearing substantial similarity will be considered an infringement  of
copyright.  Should any portion of  these provisions be found to be  inoperat-
ive, the remaining portions shall remain in effect.

The original  SASSy design specification  and research reports  are copyright
(C) 1986, 1987, 1988, 1989 by Pinnacle Software.

The original SASSy program is copyright (C) 1986 by Pinnacle Software and Ord
Millar.

The following products were used in the development of Free Speech.

Turbo Pascal is a Trademark of Borland International.
TechnoJocks Turbo Tools, Copyright (C) 1986-1989 TechnoJock Software, Inc.



Support for Unregistered Sysops



If you  are  an unregistered  Free  Speech operator,  you may  call  Pinnacle
Software's  Customer Support  Service  for  free assistance  if  you can  not
complete  the basic  installation successfully,  or  if you  have operational
difficulties during the evaluation period.








ii












Support for Registered Sysops



The Free Speech release number follows this pattern:

                    Version Number   Upgrade Level     
                                 |   |                 
                                 3 . 1 0 A             
                                      /   \            
                     Correction Level       Internal ID

A  registered Free Speech  owner is entitled  to operate any  release of Free
Speech with the  same Version and  Upgrade Level, and  the same or  different
Internal  ID or Correction  Level.   Thus, corrections  to the  program ("bug
fixes") may be operated at no additional cost.

Upgrades (e.g. from Version 3.00 to 3.10) are available for a  nominal fee of
$12.  If you  had previously ordered the source code, it  will be included at
no extra charge.  The $12 fee simply covers our time and material.

Technical support via phone is available at competitive rates.



Credits



Design ......................... Timothy Campbell

Programming .................... Timothy Campbell

Additional design .............. Ord Millar and James Ludwick

Design studies ................. Ord Millar and Timothy Campbell

Help in design studies ......... Marc Branchaud, Steve Mitchell, Paul Renault

Marketing ...................... James Ludwick

System Operator's Manual ....... Natasha Mirage

Invaluable assistance from ..... L. Wilson, P. Katt, T. Toc

Social-impact study courtesy ... Dr. Lord, S.P.M. U.E.M.  (Project FBBS)


Extra-special thanks to DP, who made Project FBBS possible.


Last but not least, a warm thank-you to all the SASSyites.

                                                                          iii












TABLE OF CONTENTSTABLE OF CONTENTS



NOTICES . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    ii
     Copyrights and Trademarks
     Support for Unregistered Sysops
     Support for Registered Sysops
     Credits

INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1
     Prerequisites
     What is Free Speech?
     Features

INSTALLATION  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
     Quick-Install
     Detailed Installation
          Configuration Items; Shut-Down Hour

TROUBLE-SHOOTING GUIDE  . . . . . . . . . . . . . . . . . . . . . . . . .   7
     Modem Problems
     Other Problems

OPERATION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   9
     Maintenance
     Sysop Functions
     The Status Line
     The Message Header
     Translate Tables
     Customization
          DIALOG.TXT; F-*.TXT; Alternate Language Support

Commands Summary  . . . . . . . . . . . . . . . . . . . . . . . . . . .    14
     ?  Help
     S  Search
     O  Off
     |  Chat
     -  Ultramode
     B  BBS

MISCELLANEOUS NOTES . . . . . . . . . . . . . . . . . . . . . . . . . .    16
     Color
     EGA and VGA Support
     19200 Baud
     Gear Shift
     Disk Caches

HISTORY . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    18
     Design Rationale
     Message-Handling Technique
     Two-Month Report

                                      ii












     Two-Year Report
     Conclusion

FREE SPEECH NEWS  . . . . . . . . . . . . . . . . . . . . . . . . . . .    24
     Version 3.10

APPENDIX A -- Operational Modes . . . . . . . . . . . . . . . . . . . .    25
     Mode 1 -- Stand-Alone BBS
     Mode 2 -- Announcer Board
     Mode 3 -- BBS front-end
     Mode 4 -- Modem-handler
     Mode 5 -- Night-time Alternate
     Mode 6 -- Door Operation

APPENDIX B -- How to Become a Free Speech Distributor . . . . . . . . .    30

INDEX . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    31




































                                     iii












INTRODUCTIONINTRODUCTION



Prerequisites



In order  to understand  this manual  and operate  Free Speech,  you must  be
familiar with BBSing  terms such as modem  and sysop.  You must  also have an
IBM-PC compatible computer with a modem.

If  you are not  familiar with BBS's  (Bulletin Board Systems),  refer to the
documentation for either  our Sapphire or Pyroto BBS products.   Both manuals
contain helpful introductions to BBSing.

It is also  assumed that you have  a working knowledge of  DOS operations and
are familiar with such terms as drive and directory.  If these are unfamiliar
to you, most computer stores can  provide you with a tutorial text that  will
quickly cover the basic skills required to install and operate Free Speech.

The Free Speech BBS  will appeal to people who wish to explore  a new kind of
BBSing.   A Free Speech BBS is  unlike any other BBS.   By granting the users
total free speech, it can be both infuriating and enlightening.

Free Speech  is also  an ideal  first BBS, since  it installs  in only  a few
seconds.  New  sysops who would prefer a more traditional BBS should consider
Pinnacle  Software's Sapphire BBS,  which is also  easy to install  (10 to 15
minutes).



What is Free Speech?



Free Speech is a BBS and utility that can operate in many modes:

(1)  As a stand-alone BBS with a very unusual design
(2)  As an "announcer" board
(3)  As a front-end to other BBS's
(4)  As a modem-handler for doors
(5)  As a "night-time alternate"
(6)  As a "door"

All modes are  discussed in "Appendix A  - Operational Modes".   However, the
majority of this manual covers the first mode -- the stand-alone BBS.

Free Speech is perhaps the most unusual BBS available today.  And when we say
that, we are including our own unique Pyroto Mountain BBS software.



                                      1












Free Speech appears to be an extremely simple BBS.  Yet during a design study
that lasted nearly two years, an early version of Free Speech proved to be an
extremely valuable asset to the local BBSing community.  In fact, more than a
year after the design study was closed  down, people were still asking for it
to be reinstated.

It is because of this demand for Free Speech that we decided to go ahead with
its creation, knowing  full well that such a rule-breaking  design was likely
to be  misunderstood -- though certainly not by  the people who used it daily
for two years.

Because Free Speech  is so very unusual,  we feel obliged to  cover the back-
ground of the designer.  By understanding his background, you will understand
that Free Speech  is a serious exploration  into the ways that  computers can
help us communicate.   The designer has been working on computers and related
communications systems  for about 16 years.  Over  the years, he has partici-
pated in many projects.  Here is a partial list:

1975:  Co-promoted a popular public conferencing system.

1980:  Wrote Montreal's first computer-hobbyist "broadcast" program (BBS).

1981:  Became involved with Montreal's fledgling BBS community.

1982:  Designed a computer-hobbyist telecomputing system.

1984:  Started Canada's first coast-to-coast consumer telecomputing service.

1986:  Wrote the Pyroto Mountain Gaming BBS.  Installations throughout the
       world.

       Designed the SASSy BBS Experiment, which led to Free Speech.

       Participated in design of experimental BBS systems ITS & Infinity.

1988:  Wrote Sapphire, the first truly Zero-Maintenance BBS.  Installations
       throughout the world.

Over the years, the designer has also created numerous shareware products not
mentioned  here, and  in so  doing  made Pinnacle  Software one  of  the most
prolific producers of shareware.

We wish,  therefore, to stress  that the designer  strongly believes  in Free
Speech  -- not to  mention free speech as  a concept.   (The designer has for
several years  been an activitist  in the struggle  to restore the  rights of
Quebec's English-speaking minority.  In Quebec, it is against the law  to put
up a commercial sign in English.)

Free Speech may not  be what you expected,  but do not dismiss it  because of
its simplicity.   Free Speech is a very carefully designed BBS.  The simplic-
ity is the very thing that makes it so powerful.


                                      2













Features



Free Speech is designed for conversation.  Its streamlined design can provide
a far higher  throughput of conversation than any  other single-line interac-
tive BBS.  As such, it provides the following capabilities:

-- Read  public text
-- Write public text
-- Write private text for system operator

These are conducted in the simplest way  possible, ensuring that the user can
read, write, then log off.  No time is wasted.

Free Speech is  also potentially anonymous.   Each user is instantly  able to
post messages a few seconds after connecting.  It is up to the user to decide
if his or her  identity is relevant.  By providing this  ability to be anony-
mous, Free Speech  guarantees the right to  Free Speech and the  freedom from
fear that sometimes compromises one's ability to talk openly.
































                                      3












INSTALLATIONINSTALLATION



Quick-Install



If you  have a 2400-baud  Hayes-compatible modem on  COM1, you can  have Free
Speech up and running in about a minute by following these steps:

1.  Copy the files into a directory named C:\FREE
2.  Type FREE
3.  Pick a message-file size
4.  Your BBS is now online.

If you have problems, try the Detailed Installation (described next), or skip
ahead to the Trouble-Shooting guide.



Detailed Installation



If you do not have the hardware described above, or if you run into problems,
you can do a more detailed installation as follows:

1.  Copy the files into a directory
2.  Type FREE SETUP
3.  Answer the configuration questions
4.  Type FREE
5.  Pick a message-file size.
6.  Your BBS is now online.



Configuration ItemsConfiguration Items___________________


The following items can be configured:


1.   Communications port (i.e. COM1 or COM2)

2.   Modem initialization string

3.   Maximum baud-rate of the modem (300, 1200, 2400, 9600, 19200 etc.)

4.   Shut-down hour (see explanation below)

5.   Maximum number of lines that may be posted per visit

                                      4












6.   Maximum number of minutes per visit


7.   Command letters;  we strongly urge that these be  left the way they are,
     in order that all Free Speech systems work the same way, but non-English
     installations may find the suggested letters inappropriate.

     In order of appearance, the commands are:  

     ? = Help   S = Search   O = Off   | = Chat request   - = Ultramode

     The sixth  command, at  installation time,  is a semi-colon  (;), but  a
     semi-colon is a  special "non-command" character.  The  sixth command is
     used to jump from  Free Speech to another  BBS.  For details, see  "Mode
     2 -- Front-End".

8.   Control password.   This is the password  used to enter Ultramode.   See
     Commands Summary for details.

9.   Keyclick.  With Keyclick on, you can hear people typing.  When a visitor
     to Free Speech types, you'll hear it.  When you type, you'll hear  that,
     too.

     In our  experience, most established  sysops like the idea  of Keyclick.
     Computer neophytes (who already expect screens to make clicking sounds!)
     also react favourably to Keyclick.

     However, most veteran BBSers and  computer experts find the idea totally
     absurd!

     Keyclick is one of  those ideas that you either love or  hate.  For this
     reason, it has been made configurable;  you can turn it off if you  want
     to.

     We  know that  from a  purely "logical"  point of  view,  Keyclick seems
     silly; computer screens don't have to click.  But don't wonder about it;
     try it.  We think you may like it.



Shut-Down HourShut-Down Hour______________


If you are not already running a BBS, you can skip this section.


You may find that, like  many sysops, you like Free  Speech but also wish  to
run a  more traditional BBS.  In  such case, you can program  your BBS to run
Free Speech  as an  "Event".   (For an  explanation of  Events, see  Pinnacle
Software's Sapphire installation manual)



                                      5












In this mode, your regular BBS would shut  down at a specified hour -- say, 1
in  the afternoon, and  run Free Speech until  a specified hour  -- say, 7 at
night.

When specifying the shutdown hour, express the time on a 24-hour  clock.  For
example:

          6:00 AM = 6    Noon = 12    11:00 PM = 23    Midnight = 0













































                                      6












TROUBLE-SHOOTING GUIDETROUBLE-SHOOTING GUIDE



If your installation went smoothly, you can skip this section.



Modem Problems



1.   If you had  the problem while running  in LOCAL mode, then  your problem
     wasn't the modem; skip this section.

2.   If  you  have  an older  Hayes-compatible  modem,  with Hayes-compatible
     switches, make sure your switches are set this way:

     Switch 1 UP:   Computer should use the Data Terminal Ready (DTR) line
     Switch 2 UP:   Result codes sent as words
     Switch 3 DOWN: Result codes are sent to the computer
     Switch 4 UP:   Echo incoming characters
     Switch 5 DOWN: Don't answer incoming calls
     Switch 6 UP:   Computer should use the Carrier Detect (CD) line

     The positions of switches 7 and 8  are variable, depending on your phone
     type and your  modem brand.   Consult your modem's  manual to  determine
     what should be done with these switches.

     Newer modems  don't have DIP switches;  you have to configure  the modem
     using commands.  In this case, you will have to accomplish with commands
     what  we were  trying  to do  with the  switches.   For Hayes-compatible
     modems, these commands  are preceded by the "&"  character (&C1&D2 being
     the usual values).

3.   If you  have an external modem, are you sure that pins 8 and 20 are con-
     nected from one end of the cable to the other?  These are, respectively,
     the Carrier Detect and  Data Terminal Ready signals.  Are  you sure that
     pins 2 and 3 lead  to socket 2 and 3  on the other end?  On  some cables
     (known as Null Modem cables), these two are reversed, which will prevent
     the BBS from being able to talk to the modem.

4.   Be sure to carefully check  the modem initialization string specified by
     the command  FREE  SETUP.   The X3  may have  to  be replaced  by X4  or
     something to that effect.  Refer to your modem's manual for details.

5.   Some computers and  modems just can't survive running 24  hours per day.
     If your system  occasionally crashes, try turning  it off for an  hour a
     day.  It may be necessary to install  a cooling fan in the computer unit
     and remove the back panel of the modem.



                                      7












6.   Never overlook the obvious.  Check your cables and so on.  Is everything
     plugged in solidly?

7.   If you have any other devices that  use a serial port, such as a  mouse,
     make  sure that you are not both trying  to use the same serial address.
     A typical installation places the BBS on COM1 and the mouse on COM2.  If
     you try to put both on COM1, neither will work reliably.

8.   When  all else  fails, try borrowing  a modem  from somebody.   This can
     sometimes shed light on the source of the problem.



Other Problems



Please  refer to  the "Notices" section  at the  front of  this manual  for a
description  of support  procedures  for  both  registered  and  unregistered
sysops.

































                                      8












OPERATIONOPERATION



Maintenance



The Free Speech  program is completely maintenance-free.   Once you start  it
up, it can be left alone indefinitely.

At least  once after installation, it  is a good  idea to run a  disk defrag-
menter program  to ensure  that the message  file is  contiguous.   This will
improve performance.



Sysop Functions



The following functions are available to the sysop:


FUNCTION
  KEY      DESCRIPTION OF FUNCTION
--------   -----------------------------------------------------------------
  F1       Display function key help
  F3       Decrease user's online time by 10 minutes
  F4       Increase user's online time by 10 minutes
  F6       Break in to "chat" with the user; enter E on a null line to quit
  F10      Turn on or off sound-effects
ALT-F1     Turn on or off printer
ALT-F2     Turn on or off communications to "hide" actions from caller
ALT-F5     No posting; display only sign-on logo (F-LOGO.TXT) then disconnect
ALT-F6     Bias message analyser to reject the message currently being typed
ALT-F9     Shut down BBS when user is finished
ALT-F10    Shut down BBS as soon as user hits Enter


The ALT-F2 key is included mostly because it is  part of our serial routines.
Pinnacle Software has  designed a "shell" that is appropriate to most BBS and
door applications.  Write  for details... We can't think of  a use for ALT-F2
on Free Speech, but if you need it, you've got it!

ALT-F5 was included against our better judgement.  As of this  writing, we've
been test-running the  current version of Free Speech for  around two months,
and we  have never  used ALT-F5  (except to  ensure that  it works).   As  we
explain in the appendices, it is impossible to apply effective  censorship to
a Free Speech  board, since it simply  encourages certain types of  people to
redouble their efforts to post something that annoys you.


                                      9














The Status Line



When somebody  is connected  to Free  Speech, the  upper line  of the  screen
provides some information about the system.  

At the left of this line appear  the words "Time Left", followed by a number.
This is the number of minutes the user has remaining for this  call.  You can
alter this number with F3 (Remove time) and F4 (Add more time).

On the right side of  the status line are "status icons".   These are charac-
ters that reflect the current state of the system.  These are as follows:

Infinity Sign:     The current user is in Ultramode ("dash" command)
Double-note:       Sound-effects are enabled (disable with F10 key)
Two-headed arrow:  Communications is enabled (toggle with ALT-F2)
Down-arrow:        The BBS will close when this user gets off (ALT-F9)
Down-triangle:     The BBS is being shut down immediately (ALT-F10)
The letter P:      All input and output is being printed (ALT-F1)
The letter R:      The current message will be rejected (ALT-F6)



The Message Header



Messages are preceded with  some basic information, such as the  line number,
and  the time and date when they were  written.  (The last two are omitted if
you are running Free Speech as a door, in order to enhance the anonymity.)

If you  are connecting  from the  console, however,  you see some  additional
information:  

1.   The user's baud-rate

2.   Whether color was selected (a little box appears after baud-rate) 

3.   Whether the computer type "PC" was selected (PC appears if so)

4.   The lines per screen

5.   The line from which he started reading (if a number was typed)

6.   The first "Search Text" he typed, if any

7.   WPM (Words Per Minute) and DEV (Speed Deviation) statistics



                                      10












WPM is the speed at which the user  types.  DEV shows how constant his typing
speed was.   DEV is actually the  difference between the highest  (or lowest)
value and the average speed.  Thus, if somebody types one of his lines with a
macro  key, you might see something like WPM 50  DEV 350.  This is not to say
that he typed  at 350 words  per minute, but that  on a least one  line, this
speed was attained.



Translate Tables



Free  Speech provides  "translate tables"  that  allow IBM-PC  users to  post
special characters and  have these translated intelligibly for  those who use
non-IBM-PC computers.   This enables IBM-PC users  to use Free Speech  in any
language that  uses accents, while retaining compatibility  with all terminal
programs that use  standard ASCII.  Graphics characters,  too, are translated
in a reasonable manner.

For example, if  an IBM-PC user transmits the character for a diacritical "e"
(characters decimal 136, 137 and 138 are examples), a non-IBM-PC machine will
receive an ordinary "e" character (decimal 101).

Similarly,  the IBM line-drawing  characters are  translated into  dashes and
colons.



Customization



Text  that the users might see is contained  in the various TXT files.  There
are  two kinds of files:  the DIALOG.TXT  file and the F-*.TXT files.  All of
these files can be modified with a text editor, such as EDLIN,  or a program-
mer's editor, or your word-processor in "DOS Text" (non-document) mode.



DIALOG.TXTDIALOG.TXT__________


This is a  list of all  the prompts and short  bits of text that  Free Speech
presents to the user.   It can be modified with a  standard text editor, such
as a programmer's editor, or  a word-processor in "DOS Text" mode.   The text
of individual lines can be changed, but you must not insert extra lines.

Here is a list of some of the critical lines in DIALOG.TXT:




                                      11












LINE      DESCRIPTION
----      -----------
  41      Yes, No, Forward, Reverse characters
  43      Ultramode command characters
  58      Graphic frill used for message header during door operation
  63      Alternate language control
  64      Alternate language control
  65      Alternate language control

The other lines in the file are self-explanatory.

The regular command letters are changed via FREE SETUP.



F-*.TXTF-*.TXT_______


These are known as the Display Files.  They are called at various points in a
Free Speech session.  When this happens, you will see the file name displayed
on the right-hand side of the screen.

Display Files give you quite extensive control  of color.  A demonstration of
the display codes is provided in the file F-SAMPLE.TXT.



Alternate Language SupportAlternate Language Support__________________________



As shipped,  Free Speech comes  with three "languages":   English, French and
"Silly".   These can  be used  as is, or  may serve  to demonstrate  how Free
Speech can offer the user a choice of three languages.

For regular operation, Free Speech text  is contained in files with the  .TXT
extension.   However, if  the user selects  French, Free Speech  will get its
text from  a .FRE file  whenever possible  and use the  .TXT file only  if it
can't find a .FRE file.

The operation of  this feature is  controlled by lines 63,  64 and 65  of the
DIALOG.TXT file.

Line 63 indicates  how many languages there  are, and the character  the user
must press to select a given language.   As shipped, the line starts with the
letters "EFS", for "English, French & Silly".  You can eliminate  the "Silly"
option by changing it to read "EF", or support English-only by changing it to
read "E"  only.  (If only one letter is specified, the user will not be asked
to choose a language.)




                                      12












Line 64  specifies the file extensions  for choices #2  and #3.   As shipped,
these  are FRE (for  French) and SIL  (for "Silly").  The  extensions must be
three characters long and start in columns 1 and 5 respectively.

Line 65 is the prompt that the user will see when he logs on.

If you  translate the various text files, we  would appreciate having a copy.
If the language you supply is not already in our collection, you will  obtain
a  free upgrade of  Free Speech.  Please  take great care  to ensure that the
translation is grammatically correct.











































                                      13












Commands SummaryCommands Summary



?  Help


This  command displays  the article  in the  file F-HELP.TXT.   This  usually
provides people with sufficient information to use Free Speech.

However, if Free Speech  sees the user  floundering (repeated blank lines  or
incorrect commands), it  will offer him or her another article by asking, "Do
you want an explanation of how this system works?"  The text of this tutorial
is found in F-HELP2.TXT.

Both text files may be modified by a text editor.


S  Search


This  command lets  the user  search backwards  from the  last line.    If he
searches for his  distinctive sign-off (e.g. "Bye-bye from  Rabbit!"), he can
easily return to where he left  off reading (assuming he posted something  on
their last call).

Some  users, when they're not up to  typing a whole message, leave a one-line
comment known as  a "Bookmark".  A bookmark  does not add much in  the way of
content, but it does enable the others to see who has dropped by, and enables
that caller to find his or her place on returning to Free Speech.


O  Off


This command disconnects the user and starts up the message analyser.  Unlike
the  message analyser  in  Pinnacle's "Pyroto  Mountain"  software, the  Free
Speech analyser  does not judge  the quality of what  is written --  just its
intelligibility.   If  the message  is judged to  be incomprehensible,  it is
rejected.

Since the  analyser is not  content-oriented, its algorithms  should function
successfully with most languages that can be represented in ASCII.


|  Chat


This command  buzzes at the  console to let  you know that somebody  wants to
type to  you.  For the peace of mind of  the sysop, if the user tries to buzz
you more than 3 times per call, he or she will be disconnected.


                                      14













-  Ultramode


The "Ultramode"  command ("-") allows you to  delete or change text.   To get
into Ultramode, enter  a dash at the  > prompt, then type your  control pass-
word.  When you first install Free Speech,  this password is PINNSOFT, but we
strongly  urge you  to change  it immediately,  to protect  your system  from
unauthorized tampering.   (The password may  be changed  by starting up  Free
Speech with the command FREE SETUP.)

Ultramode should  be used  not only  with discretion but  even with  caution:
during our two-year design  study, we discovered that  if offensive text  was
erased,  it brought  about  even more  offensive text.    We understand  that
different  sysops  have  different  levels  of  tolerance  for  nonsense  and
scatology, but in our experience, it has been far preferable to let people be
their own censors by skipping messages that  offend them.  Surely we can only
encourage  free speech  by letting  people take  the responsibility  for free
listening!

There is a sysop-oriented privilege that can be attained only at the console:
the  ability to  type the  vertical-bar  character (ASCII  124 HEX  7C).   By
including the "Verty-Bar" in your message, you  can prove that you are indeed
the sysop!


B  BBS


The sixth command in the command-list (as seen by FREE SETUP) is normally set
to a semi-colon (;), which prevents it  from being used.  (Any command can be
eliminated in this way.  For example, you could use this method to remove the
chat command.)

The B command terminates Free Speech and  exits with an error code correspon-
ding to the baud rate.  For more information about this feature, see Appendix
A "Mode 1 -- Front End".

In  Door mode (Mode 6), the  B command (if available)  simply acts like the O
(Off) command.













                                      15












MISCELLANEOUS NOTESMISCELLANEOUS NOTES



Color



If  you have  a color adaptor  and monochrome  display, you may  have trouble
seeing some of the characters.  You can tell Free Speech (and other programs)
that you can't display color by using this DOS command:

     MODE BW80



EGA and VGA Support



Free Speech  has been tested briefly in 43- and 50- line mode, but we did not
install it in  this version.  If  you have a  video-setting program (such  as
Pinnacle Software's SV program),  you can put your screen into  this mode and
run Free Speech.  It should perform properly.



19200 Baud



This  version of Free Speech has not been  tested at 19200 baud.  If you find
it has problems  at this speed, or require some additional programming for it
to  function  with your  modem, please  drop  us a  line, giving  us  as much
technical information about your modem as possible.



Gear Shift



Users can  alter output speed by  pressing a digit key.   1 is slowest,  9 is
very fast, and 0 is top speed.  This feature is not  documented in the online
help.








                                      16












Disk Caches



Free Speech seems  to have problems  with at least  one disk cache  software,
known as CACHE-AT.   If you find that Free Speech terminates with a "Run Time
Error 202", and you're using a disk cache, try running it without the cache.

In general,  if you have  strange problems with  any program, you  should try
running it without any TSR's (i.e. pop-ups), caches and spoolers.











































                                      17












HISTORYHISTORY



Free Speech is based on a Pinnacle Software design study for "an unusual BBS-
like service" known as "The SASSy" (Stark And Simple System).

The design of The  SASSy has already been discussed in  detail elsewhere, and
it  is not our intention  to cover it again.   However, the various documents
relating to The SASSy contain some comments that are worth repeating.



Design Rationale



(From "Technical Specification for The SASSy", August 1986)


Why Simple?

While the sparse design of the SASSy  does place the burden of record-keeping
upon the  user, it DOES guarantee ABSOLUTE ANONYMITY.  People are free to ex-
press themselves in total security.  The results are guaranteed to  be rather
startling, if not sometimes shocking.

You  can expect  childishness, impersonations, rage, impotent threats  and --
most important -- a completely open forum for opinions.

Since there is no validation required, your job  as Sysop is easy.   You need
only sit back and enjoy the show.


Why Stark?

In itself,  the SASSy has absolutely no "personality" as a program.  It is so
low-key in doing its job that the user will never think about it.

Thus, the landscape becomes decorated  with the people and whatever fantastic
personae they happen to dream up.   Experience  has shown that   people  make
a  better  background than  a   program   does.     If you  can't immediately
understand this, perhaps the SASSy will serve to show you this principle.

To quote Marshall  McLuhan:  "The medium is the message".  By de-frilling the
medium, we may be able to learn something about the message.







                                      18












Message-Handling Technique



(From "Technical Specification for The SASSy", August 1986)



The user does not actually type into the line-storage area but into temporary
line memory of twenty lines, in order to facilitate some garbage processing:


1)  Repeated blank lines are stored in temp line memory as one blank line.

2)  Single- and double-character lines are not stored in temp line memory.

3)  When the user logs off, calculate the average line-length.  If it is
    more than 7 (less than that implying deliberate noise), copy temp
    line memory into the permanent line-memory (on disk) which is usually
    a relative-record type random-access file.  You may wish to also keep
    the last hundred or so lines in memory, to improve performance.

4)  If you copied in the lines, update the "last line" pointer, and save
    that information on disk, also.

5)  Make the SASSy ready for the next call.



Two-Month Report



(From "Report on The SASSy" -- January 1987)



Before releasing the spec for SASSy,  we wanted to be sure  that the idea was
workable.  We've beta-tested the concept in  Montreal,   and we can now state
that SASSy is a marvelous addition to any BBS community.

NOTE:   While Ord Millar was running this test, he very seldom wrote anything
on the board, himself.   This is as it  should   be,  since he didn't want to
"colour" the results by invoking the authority of the Sysop.


Throughput

Ord Millar brought up SASSy on Nov. 1st,  1986.   One month later, he counted
11,000 lines  of text.  On a typical bulletin board, that's like 40 bulletins
per day.


                                      19












We achieved  this respectable throughput largely because  SASSy is so simple.
There's no  sign-on procedure  and there are no  message headers,  logon bul-
letins, sub-section switching, operator page,  and all the other baggage that
makes people spend time on a BBS.

The nemesis  of any BBS  is the type of person who just reads and contributes
nothing.  On SASSy,  the problem is  minimized.  Once the person has read all
the new text, there's  nothing left to do.   He simply  logs off and lets the
next person get on.

There were a few things with which we had to deal...


Uploading

Within a few days,   Ord realized that he'd have to  do something to  prevent
automated uploading  of text.   Some  rascal  had set  up his  communications
program to call, over and over again, to upload the same file.

So, he kept track of the timing between characters.   It  is impossible for a
typist to   type at a  perfectly  steady rate,  so if  all the characters are
received with inter-character delays that are within a few  milliseconds   of
each other, then you know it's a program.  If more than 75%  of the lines ex-
hibit this timing characteristic, Ord's SASSy simply ignores the message.

This does mean that people can't upload  prepared messages,  but  our experi-
ience with  another system  (the original Pyroto Mountain BBS/Game) suggested
that people don't do this very often, anyway.

Of course,  a clever  person could   create  a program  that can  upload with
random  delays,   but clever people   usually  have better things  to do than
harass
a BBS.


Parrots

Some people also called up  to type the same few lines,  over and over.  This
problem  is largely self-correcting, since it is  very labour-intensive.  But
Ord included a backwards scan to check for duplication.

Ord maintains  a  buffer of  recent lines.   Since most people only go back a
few dozen lines,  this technique speeds  up SASSy considerably.   This buffer
can also be used for an efficient backwards scan.


Pranksters

A few people did the inevitable:  they posted phone  numbers and asked people
to make prank calls.    This trend  died out quickly  (although  there is one
person who is still trying).


                                      20












The reason that the pranksters fail is three-fold.


(1)  Most people aren't by nature prank callers.

(2)  The SASSop (SASSy Operator) and some of the users mention, from time to
     time, that no phone-numbers or names can be believed.  This can be made
     more compelling by mentioning that somebody  might be trying to get you
     to "prank" the local police station!

(3)  This kind of "indirect" pranking accomplishes nothing.   We pointed out
     to the pranksters that, if they wanted to prank the number,  why didn't
     they simply do it, themselves?

Still, it is possible that in some communities  (particularly those without a
reasonably  mature base of users) that SASSy could cause  some problems.  But
we were astounded to discover that it  caused  no problems whatsoever  in our
field trial, simply  because the act [of  posting phone numbers] is  so self-
evidently   ineffective.   The users don't  CARE about pranking somebody they
don't know.  (It's a fact that most prank calls are NOT made by strangers.)


Obscenity

We expected it.   We got it.   What we  DIDN'T  expect is that we  didn't get
MUCH of it.    A few people had fun showing us their repetory of risque voca-
bulary, but they quickly  realized that NOBODY GAVE A HOOT!   Again, there is
one person  (yes, the same  one)  who  hasn't gotten the  point,  but  he has
become part of the  landscape.  As  one user pointed out,  "You can't have  a
picnic without ants!"


Threats

We haven't seen any.   Perhaps  it's hard to  threaten  somebody  when you're
not even sure if he is who he's claiming to be.


Confusion

Some users get confused.   Not many  and   not for long.   If you can operate
a tape recorder, you can probably operate SASSy.


Impersonations

People had a great time, pretending to be somebody else.  However, since  the
whole SASSy community  operates in a state of disbelief, it doesn't amount to
much.  I myself was imitated many times,  but nobody believed I would say all
those things.   Eventually,  the mimic DID manage to convince  people that he
was me  by posting messages that not only LOOKED like mine,  but BEHAVED like
mine.  I thanked him for saving me the effort of posting, and that was that.

                                      21













Insults and Accusations

There were plenty of these, too.  But  once again,  the nature of SASSy saved
the day.  Nobody took things too seriously.  The insults didn't go away,  but
they  began  to   resemble  "playing the dozens",  so the users enjoyed them.
Even the most  vitriolic insult  was soon turned into  farce   by our playful
SASSy users.


Conversation

To our surprise,  there was a LOT  of  high-quality   conversation  on SASSy.
People were  calling in  with their  usual nick-name  [i.e. alias,  pseudo or
handle].   They didn't  really crave  the anonymity,  but they  did like  the
streamlined  design of SASSy,   which  enabled them to   read,  write and go.
They also   liked   the way that you  could search through  previous messages
while writing.    This made it  easier to remember exactly  what somebody had
said.


News

We were  also surprised that  several items of news,  important to Montreal's
BBSing community, were first revealed on SASSy.  People seemed to  know intu-
itively what was faked and what was real.  We're still trying to figure  this
one out!


Observations

SASSy is like CB radio.  You are insulated from your listeners,   so you have
a lot of freedom.  But even the worst scoundrel will simply go  away if he is
ignored.  (Due to the  speed of the "F" function on SASSy,  it's a lot easier
to ignore somebody on SASSy than on CB radio.)

We've had some good results.  The person who was  plaguing   the system  with
uploads was asked nicely, "Since you're anonymous,  why don't you tell us why
you're doing this?"   In perfect safety,  he told us.  He must have   thought
about it, because after only one more "attack", he stopped.

Somebody once told me, "I used to love  BBSing because it was anonymous.  But
once I started associating myself with my   'alias',  I just wasn't anonymous
any more.  So I stopped calling."

SASSy preserves that thrill of being able to  express yourself in safety.  It
does not REPLACE  traditional BBS's,   but adds something by taking something
away -- your name.    A traditional BBS  might have a  "No Name"  board,  but
still, the Sysop knows who you are.

SASSy is free speech.  [From this line did we derive the name.]


                                      22













Two-Year Report



The "Wrap-Up Report on The SASSy"  (written in January, 1988) was a bit  more
critical of the experiment, citing a continued lack of social cohesiveness on
The SASSy.  However, a later experiment by the same team (in a study known as
"The FBBS Experiment") showed that the sysop can exert a tremendous influence
on  the direction  that  a board  takes  --  even in  seemingly  uncontrolled
environments such as The SASSy.

At  first, The  SASSy experiment  successfully  employed the  technique of  a
largely absentee sysop.  In the second year, however, there was an attempt to
provide a policing capability which became known as the "watchdog functions".
This turned out to be a mistake, inasmuch  as The SASSy was an ideal form for
free  speech and the "watchdog  functions" (possessed by  only a few reliable
individuals) had the  effect of taking away  the free speech; perhaps  not in
practice, but  for many  the threat  negated most  of the  attraction of  The
SASSy.



Conclusion



Further discussion  of  The SASSy,  and review  of the  logs, has  led us  to
conclude  that with  a gentle  hand, the  sysop can maintain  the free-speech
aspect of the  board while still maintaining  a forum that is  interesting in
its humanity, if not always erudite.

The FBBS  experiment lasted  only a  few months.   It was  a BBS  run in  the
complete and utter absence of a sysop from  the very first day.  No user knew
who  was running  the board,  or why.   The  BBS software  had  virtually all
character stripped away,  leaving only an empty  shell.  But while  the board
received a lot of messages, it quickly devolved into "lowest-common-denomina-
tor" traffic.

The Free  Speech software  puts together the  lessons learned from  these and
other experiments.  While it can not be predicted what precise path your Free
Speech board will take (since that turns out to depend more on the sysop than
upon the software),  it can certainly provide  you with an endless  source of
delight, frustration, points  to ponder,  and (as  long as you  keep a  free-
wheeling, positive attitude) a lot of laughter.








                                      23












FREE SPEECH NEWSFREE SPEECH NEWS



This  section of the manual is new, as  of Version 3.10.  Here, the author of
Free Speech (who also runs a Free Speech board) will comment on the upgrades,
reply to common questions, and muse about the Free Speech concept.



Version 3.10



PROPAGANDA VERSUS FREE SPEECH

Free Speech,  in one  form or  another, has  been running  in Montreal  since
Spring of 1986.   While I thought  we'd seen everything, we  recently encoun-
tered a situation that for a short time actually made me question the idea of
totally free speech.

Our board  was visited  by a  fellow who  wished to  prove that a  particular
category of human  beings were to  be despised and  even eliminated from  the
face of the Earth.  What set this apart from similar cases is that the fellow
was a storehouse of information that apparently proved what he was saying.

Although  one user  (after  much research)  came  up with  counter-arguments,
everybody was astonished that we could be so manipulated.

It occured to me that Free Speech could be used by propaganda artists to whom
deception is second nature.  It is one thing to run a board that might expose
people to spicey language or obtuse hang-ups.  It is quite another to provide
an unimpeded outlet for propaganda of any kind.

Rather than cutting off the fellow in question, I explained that his material
was generating so much related message  traffic that it appeared that my  BBS
was becoming a "One Topic Board".  I  explained to him how a narrow focus had
ruined  another BBS I had run.  Then  I asked him to terminate the subject in
two weeks.

He retains his free speech, though, because I invited  him back in 12 months,
and assured  him that at  that time I  will let him  take up his  subject for
another 30 days.  I fully intend to live up to that promise.

As I  see it,  free speech  means that  you have a  fair chance  to get  your
message across, but it does NOT mean that  you can speak whenever or wherever
you want.  An extremely zealous person could turn your Free Speech board into
his  or her  personal broadcasting system.   This  is not  fair to you  or to
anybody else.




                                      24












APPENDIX A -- Operational ModesAPPENDIX A -- Operational Modes



OVERVIEW: This chapter  describes the various ways in  which you can use Free
          Speech.



Mode 1 -- Stand-Alone BBS



This is  the mode discussed throughout  most of this  manual.  In  this mode,
Free Speech  will be running 24 hours per day.  If this is your first instal-
lation of Free  Speech, the following steps  are not necessary.   However, if
you are  changing from  one mode  (example:   Front-End) to  this mode  (i.e.
Stand-alone) it is a good idea to check your settings.


To fully configure for this mode, start up Free Speech with this command:

FREE SETUP

1.   When  asked for  the  "closing hour",  specify 25.    This means  "Never
     closes".  
2.   When presented  with the  list of command  letters, eliminate  the sixth
     command (jump to BBSing) by replacing it with a semi-colon.

     You will change it to something like this:  ?SO|-;

     Any command  can be eliminated  in this manner, by  replacing its letter
     with a semi-colon.

3.   When asked if you want to save the changes, press Y for Yes.

4.   To start up the board, type FREE


Mode 2 -- Announcer Board



In  this  mode, Free  Speech  will simply  answer  the phone,  play  back the
contents of  the file F-LOGO.TXT, and hang  up.  You could use  this to run a
"Coming Events" service.   Another application is to  explain to people  that
your regular BBS is out-of-service, perhaps due to a hard drive failure.  You
can run Announcer Mode using only a single floppy disk drive.

To start  up Free Speech  in Announcer  mode, enter FREE  at the  DOS Prompt.
Once it is  waiting for visitors, press  the ALT-F5 key.   Every caller after
that will see only the F-LOGO.TXT file.

                                      25












To  turn off  Announcer mode and  resume standard operation  (i.e. let people
enter Free Speech commands),  press ALT-F5 again, or  press ALT-F10 to  close
down the board completely.



Mode 3 -- BBS front-end



In this mode, a sysop can continue to run his traditional BBS, but offer Free
Speech as a moment's diversion before entering.

After Free Speech answers  the modem, the user  can use all the regular  Free
Speech commands.   He or she can  then enter the B command  to enter the main
BBS, or the O command to disconnect.

If you  decide to operate Free Speech  as a front-end, you  should modify the
file F-LOGO.TXT to list a menu.  For example:

     ENTER ONE OF THE FOLLOWING...
     B -- START UP BBS
     ? -- Display front-end commands

This will allow  the curious to find  out more, while ensuring  that the less
inquisitive can go directly to the standard BBS.

You must then install the B command, using FREE SETUP.  When presented with a
list  of command letters, replace  the sixth command (jump to  BBS) with a B.
Your list will look something like this:  ?SO|-B

Running Free Speech  in this mode will  not provide the same atmosphere  as a
stand-alone board, but it will still provide your users with some  entertain-
ment and variety, in the form of a "Grafitti Wall".

When  the user enters the B  command, Free Speech ends  with a DOS errorlevel
set according to the baud-rate.  The errorlevels are as follows:

     20 - Console
     25 - 300 baud
     30 - 1200 baud
     35 - 2400 baud
     40 - 4800 baud
     45 - 9600 baud
     50 - 19200 baud

You can use these errorlevels to control a batch file.  The following example
shows how you would make  Free Speech a front-end for a hypothetical BBS that
accepts this kind of information as a command-line parameter




                                      26












     ECHO OFF
     :AGAIN
     FREE
     IF ERRORLEVEL 50 GOTO X50
     IF ERRORLEVEL 45 GOTO X45
     IF ERRORLEVEL 40 GOTO X40
     .
     .
     etc.
     .
     .
     IF ERRORLEVEL 0 GOTO QUIT
     .
     .
     .
     :X50
     SUPERBBS 19200
     GOTO AGAIN
     :X45
     SUPERBBS 9600
     :X40
     SUPERBBS 4800
     .
     .
     etc.
     .
     .
     :QUIT
     ECHO Returning to DOS...

Remember to check the highest  errorlevels first, because the "IF ERRORLEVEL"
facility checks for  the specified number or higher.  See your DOS manual for
details about "IF ERRORLEVEL".

A sample front-end file is available in the file FRONT.BAT.



Mode 4 -- Modem-handler



If you have an idea for a dial-up program but would like to avoid the task of
writing modem-control routines, you can use Free Speech in a variation on its
"BBS Front-End" mode (described above).

At least one BBS  author that we know (beside the author  of Free Speech) has
stated that reliable, accomodating modem control is one of the most difficult
aspects of writing a dial-up service.




                                      27












In the  long run, it is  generally best to  integrate your own  modem control
with your dial-up program.  With Free Speech, though,  you can put aside this
time-consuming programming task and get  the beta-testing of the main program
underway first.



Mode 5 -- Night-time Alternate



HINT:     For a detailed  discussion of event-processing, with  examples, see
          Pinnacle Software's operations manual for the Sapphire BBS.

Most BBS programs allow the sysop to create "Events".   Events are tasks that
are  performed by shutting down  your BBS at a scheduled  time, and running a
another program.  When  that program ends, your BBS is  restarted.  A typical
use for "Events" is to perform maintenance chores on BBS files. 

Pinnacle Software BBS  products are Zero-Maintenance, so they  do not require
these shut-down periods.  But there are other uses for Events.  They can back
up important files or ... run a different BBS!

Free Speech is  an ideal "after midnight" BBS.  Its unstructured nature makes
it perfect  for the  kinds of  conversation that  go on  "after the  witching
hour".

To make this capability possible, the Free Speech setup procedure (invoked by
typing FREE SETUP at start-up time) allows you to specify a "shut-down time".
This is the time when the Free  Speech program will end, returning control to
your regular BBS.  A 24-hour clock is used, so ...

        6 = 6:00 AM      12 = Noon      23 = One hour before midnight

Each BBS product has its own way of calling up event programs,  so we can not
give an  example that will apply to all BBS's.  The main thing to remember is
that there is a "loop" involved, in this general form:


Step 1.   The regular BBS program starts up and runs until ...

Step 2.   At  a given time (say,  1:00 AM), the BBS determines  it is time to
          run an Event that you had previously defined to it.

Step 3.   The BBS ends and/or calls up Free Speech.

Step 4.   At the "shut-down time" specified during FREE SETUP (say, 6:00 AM),
          Free Speech ends.

Step 5.   The whole process starts again at Step 1.



                                      28












Some BBS products  allow you to call  Free Speech directly and  will continue
running after the program ends.  In some other BBS products, you will have to
write a batch (.BAT) file.  The documentation for your regular BBS will guide
you here.



Mode 6 -- Door Operation



HINT:     For a  detailed discussion of  doors, with  examples, see  Pinnacle
          Software's operations manual for the Sapphire BBS.

NOTE:     Free Speech does not currently operate on multi-line systems.

You may  wish to restrict access  to Free Speech  by running it as  a "door".
This  gives people  a way  to  express their  opinions semi-anonymously,  but
allows you to control who can use the service.

In an ideal  world, Free Speech  would be  at its best  when run without  any
controls.  But  many sysops will decide  that -- for  their BBS community  --
Free Speech runs better with a bit of supervision.

Free Speech can run "underneath" another BBS, as a door.  A door is a program
that  is called  by a BBS  program, on  request by the  user.   When the door
program ends, the user is returned to the BBS.

Each  BBS product has its own way of calling  up doors, so we can not give an
example  that will apply  to all BBS's.   The main thing  to remember is that
when Free Speech  is called, it must be  informed that it is a  "door", so it
will start and end without configuring the modem.

To start up Free Speech as a door, call it this way:

     FREE DOOR

This command may  go in a batch  file, or be entered directly  into your BBS,
depending on your main BBS software.

When run  as a door, Free Speech  does not specify the time  and date of each
post (unless you have connected at the console).  This enhances the anonymity
of each user of Free Speech.










                                      29












APPENDIX B -- How to Become a Free Speech DistributorAPPENDIX B -- How to Become a Free Speech Distributor



Any registered owner of a Pinnacle Software product can order the Free Speech
distribution kit.  Others can order the kit for $12.  The kit includes:

     -- A specially marked copy of Free Speech

     -- Instructions for locating software that came from YOU

All you have to do  is pass around your specially  marked copy.  Whenever  we
get a registration via the Easy-mailer, we'll know it came from you.  We will
send you a cheque for HALF THE REGISTRATION COST.

The registration fee for Free Speech is currently $25.  So if you upload your
specially  marked  copy to  a  few bulletin  boards,  and it  results  in two
registrations, you'll receive $25 for less than 5 minutes' work!

That's like earning $300 per hour!

If you're the first  person to get  Free Speech on a  really BIG system,  who
knows how much you'll make?

Has making money ever been so easy?




























                                      30












INDEXINDEX


Can't find it here?  Check the Table of Contents.


;  5, 15                                DIALOG.TXT  11
& Commands  7                           DIP Switches
19200  16                                    Modem  7
43-line mode  16                        Directory
50-line mode  16                             C:\FREE  4
Accents  11                             Disk cache  17
Address                                 Display Files  12
     Pinnacle Software  1               Distributer  30
Announcer  25                           Door  10, 29
Anonymity  3, 18, 22                         B Command  15
Arrow  10                               DOS  1
ASCII  11                               Down-arrow  10
Assistance  ii                          DTR  7
B command  26                           EGA  16, 17, 24
Baud-rate  4                            English  2
BBS's  1                                Event  5, 28
Bookmark  14                            F-*.TXT  11
Borland  ii                             F-HELP.TXT  14
Box  10                                 F-HELP2.TXT  14
Bug fixes  iii                          F-LOGO.TXT  9, 25
Bulletin Board Systems  1               F-SAMPLE.TXT  12
BW80      16                            FBBS  iii
CACHE-AT  17                            Features     3
Canada  2                               Forward  12
Carrier Detect  7                       FRE extension  12
CD  7                                   FREE SETUP  4, 12, 15, 25
Censorship  9                           French  12
Change                                  Front End  15
     User text  15                      FRONT.BAT  27
Chat  5, 9, 14                          Front-end     26
     Removal of command  15             Front-End".   5
Closing hour  25                        Function keys  9
Color  16                               Gear Shift  16, 17, 24
COM1  4                                 Graphics  11
COM2  4                                 Hayes  4
Command letters  5, 12, 25              Hayes modem  7
Control password  5, 15                 Heat  7
Copyright  ii                           Help  5, 9, 14
Crash  7                                HELPME  ii
Data Terminal Ready  7                  History  16, 18, 24
Defragmenter  9                         Icons  10
Delete                                  Infinity  2, 10
     User text  15                      Initialization  4
Design study  2, 15                     Installation  4
DEV  10                                      Assistance  ii
Diacritical  11                         Internal ID  iii

                                      31












ITS  2                                  Sapphire  1, 2, 5
Keyclick  5                             SASSy  ii, iii, 2
Language  11, 14                             Definition  18
Line-drawing  11                        Search    5, 14
Logo  9                                 Search Text  10
Maintenance  9                          Semi-colon  5, 15
Message analyser  14                    Shareware  ii
Message-file size  4                    Shut down  9
Modem  1, 4, 7                          Shut-down hour  4, 5
Modem initialization  4                 Shut-down time  28
Modem-handler     27                    Sound-effects  9
Modes                                   Stand-Alone  25
     Summary  1                         Status  10
Money  30                               Support
Montreal  2                                  Registered Sysops  iii
Multi-line  29                               Unregistered  ii
Night-time Alternate  28                Switch  7
No  12                                  Sysop  1, 15
Nodes  29                               TechnoJocks  ii
Non-command  5                          Text editor  11, 14
Note  10                                Time Left  10
Off    5, 14                            Translate tables  11
Online time  9                          Translation  13
PC  10                                  Turbo Pascal  ii
Performance  9                          Ultramode    5, 10, 12, 15
Pinnacle Software  2                    Ultramode.   5
Port  4                                 Upgrade  iii
Printer  9                              Validation  18
Printing  10                            Version  iii
Pyroto  1, 2, 14                        Versions  ii
Quebec  2                               Vertical-bar  15
Registration  ii                        Verty-Bar  15
Reject  9, 10                           VGA  16
Release  iii                            WPM  10
Reverse  12                             Yes  12
Run-Time Error                          Zero-Maintenance  2, 9, 28
     202  17
















                                      32






```
{% endraw %}

## INSTALL.DOC

{% raw %}
```

To install Free Speech, type  INSTALL [Enter] 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2382

     Volume in drive A has no label
     Directory of A:\

    INSTALL  DOC        49   9-03-90   9:58p
    INSTALL  BAT      3333   8-31-90   2:23p
    FREE     S-D       362   8-28-90   8:04a
    PKUNZIP  EXE     35258   7-21-89   1:01a
    QUERY    COM       128   1-27-86   5:35a
    FREE     ZIP    120986   9-03-90   9:58p
    GO       BAT        24  10-03-90   1:40a
    GO       TXT       731  10-04-90   4:53a
    FILE2382 TXT      1481  10-03-90  11:13a
            9 file(s)     162352 bytes
                          153600 bytes free
