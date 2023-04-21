---
layout: page
title: "PC-SIG Diskette Library (Disk #1537)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1537/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1537"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROCON UTILITIES"

    PROCON UTILITIES is a handy collection of memory resident utilities
    from Down Under -- Australia that is!
    
    ~ BLANKS -- Automatically blanks the screen after 1 to 9 minutes
    of no keyboard or screen activity to preserve your monitor.  Works with
    Mono/Hercules and CGA.
    
    ~ HERCULES -- Permits CGA graphics on a PC with a Hercules card.
    Works with many programs, including PC-PAINT, PRINTMASTER, and FLIGHT
    SIMULATOR (minus the Esc screen)!
    
    ~ CLOCKON -- A memory resident on-screen clock that works in all
    CGA modes and can be turned on and off from the key board.
    
    ~ CLOCKSET, CLOCKGET, SETCLOCK -- Quick fixes for the Real Time
    Clock bugs of the MM58167 RTC (leap year and year counter) chip
    and its interface with the system clock in your PC!  Use to
    replace Timer.Com.
    
    ~ SWAP, SCREEN, DUALS -- Programs for PCs with two display
    cards and monitors.  SWAP will toggle the active display and
    SCREENS will ensure both displays are initialized at boot-up.
    DUALS permits dual screen functioning from GWBASIC and is very
    useful for graphics demonstrations and debugging.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BLANKS.DOC

{% raw %}
```

BLANK Screen by P.E.King

This program automatically blanks the screen after 1 to 9 minutes 
of  no keyboard or screen activity.   This will save your  screen 
since  displays  will often become permanently  etched  into  the 
screen  if they remain for long periods of time.   The time delay 
may be set by using 'BLANKS /n' on the command line,  where n may 
be 1 for one minute to 9 for nine minutes.   If '/n' is not given 
the time defaults to three minutes.   Pressing any key, including 
the Alt or Shift keys will restore the screen - without affecting 
the  executing  program.   This  program is memory  resident  and 
should only be invoked ONCE.   It can be included in the AUTOEXEC 
file.

The  program works with both the MONO/HERCULES cards and the  CGA 
card and blanks the entire screen - including the border!

(C) 1988, Procon Software, Box 43, Essendon, 3040, AUSTRALIA.


```
{% endraw %}

## CLOCK.DOC

{% raw %}
```
REAL TIME CLOCK ROUTINES
========================

The  files  CLOCKSET.COM,  CLOCKGET.COM and SETCLOCK.BAT were  developed  to 
overcome  some of the limitations of the Real Time Clock(RTC) programs  that 
utilize the MM58167 RTC chip.   This chip unfortunately does not have a YEAR 
counter  and does not correct for leap years (i.e.  the 29th of Feb does not 
exist).   The above programs allow the RTC to be set from the system  clock, 
it automatically rolls over the year counter (the program TIMER has this bug 
in  it)  and it automatically adjusts for leap years.   A feature  of  these 
programs  is that they automatically search all the commonly used  addresses 
of the RTC until one is found.   e.g.  These programs work with the  Persyst 
Time Spectum card and most of the cheap RTC cards available.


SETTING THE REAL-TIME CLOCK
---------------------------

Enter SETCLOCK and press RETURN.  You will be asked to set the systems date
and  then time.   The CLOCKSET.COM program will automatically set your  Real 
Time Clock (RTC) - if you have one!


SETTING THE SYSTEM TIME/DATE AUTOMATICALLY
------------------------------------------

You may already have an AUTOEXEC.BAT file on your System disk, if not create
one using the COPY command or Editor (i.e. EDLIN).  Insert the word CLOCKGET
into the file, this will automatically set the systems time/date to the Real
Time  Clocks when you start-up the system.   If you already have an AUTOEXEC 
file then delete DATE and TIME and insert CLOCKGET.  You will no longer need
to set the time and date AND it will always be correct when you power up.


SPECIAL NOTE
------------

The  RTC  may  need to be re-adjusted again for DAY-LIGHT  SAVING  time  and 
occationally  when  it is corrupted if the system crashes.   Simply run  the 
SETCLOCK Batch(BAT) program again to reset it.   If your time and date  from 
the RTC is corrupted often, try changing the cards address.


SYSTEM FILES
============

The   CLOCK.SYS  device  driver  is  provided  to  allow  the  DATE  to   be 
incremented   when  the  TIME clocks over to 00:00:00.00.    This   is  done  
already in DOS version 3 but not in version 2.    It is also useful  in  DOS 
version 3 because some  programs  (i.e.   on-screen clocks  etc) may 'steal' 
the timer flag indicating that the clock has passed 24 hours.   Also,  since 
this driver monitors the system timer  continually,   date increments cannot 
be  lost when the time is  not  read for 24 hours.    To install the  driver  
simply   copy CLOCK.SYS  to  your boot disk and include DEVICE =   CLOCK.SYS  
in your CONFIG.SYS file.  If one does not exist then copy the one on 
this disk to your boot disk.


(C) COPYRIGHT 1988, PROCON SOFTWARE, P.O. BOX 43, ESSENDON, AUSTRALIA.

```
{% endraw %}

## CLOCKON.DOC

{% raw %}
```

CLOCK ON-screen by P.E.King

This  program  provides  an on-screen clock display  in  the  top 
right-hand corner.  It will work in all MONOCHROME and CGA screen 
modes  and  may be toggled on and off by pressing the  Shift-ALT-
Caps  Lock keys.   The blinking colon also provides  confirmation 
that  interrupts are on and the computer has not  crashed!   This 
program is memory resident and should only be invoked  once.   It 
can be included in the AUTOEXEC file.

(C) 1988, Procon Software, Box 43, Essendon, 3040, AUSTRALIA.


```
{% endraw %}

## DUALS.DOC

{% raw %}
```


DUAL SCREEN PROGRAMS
====================

The programs SWAP.COM,  SCREEN.COM and DUALS.COM are intended for 
use  with a dual screen system.   That is a system that has  BOTH 
the  mono (or mono-graphics) card and the color graphics  adapter 
(CGA)  card  installed.   You may wonder why one should do  this?  
Well  ...  for someone like myself,  who's constantly  developing 
programs  for the IBM-PC,  it allows me to test programs  written 
for  the  different video interfaces simply by  swapping  screens 
using the SWAP command.  Some programs have even been written for 
dual screen use.  One, which is useful to me, is Microsoft's CODE 
VIEW.   I  can now debug a graphics program,  with  it's  display 
being  on  the  color monitor whilst CODE VIEW displays  all  the 
program  lines  and  register contents  etc.  on  the  monochrome 
screen.   Other programs, such as AUTOCAD, can do the same thing.  
Graphics  can  be displayed on the color screen  whilst  text  is 
entered on the mono screen.

One  of the problems encounted with the standard IBM-PC system is 
that it does not initialize both screens when  powering-up.   The 
SCREEN  program  can  be inserted in your  AUTOEXEC.BAT  file  to 
provide  this  initialization and blanking of screens  (including 
turning off the blinking cursor) automatically.

The SWAP command allows you to swap from one screen to the other.  
This  command automatically determines what screen is being  used 
and  swaps to the other.   The originating screen is cleared  and 
its  cursor is blanked,  whilst the destination screen is cleared 
and  its cursor turned on.   i.e.  You always know  which  screen 
you're on by the blinking cursor!

The DUALS program was written to allow the two screens to be used 
from  a  GWBASIC  or BASICA program as no  programming  langauage 
(that I'm aware of) supports dual screen operation.   DUALS is  a 
memory resident program that should only be executed ONCE.  After 
it  has been executed,  invoke GWBASIC and you will find that you 
can simply swap from one screen to the other by selecting  either 
the text mode (0),  black & white (0) for the the mono screen and 
text  mode  (0),  color enabled (1) for the color  screen.   e.g. 
execute SCREEN 0,0 for mono and SCREEN 0,1 for color.  By-the-way 
selecting  any graphics mode (1 or 2) switches  automatically  to 
the  color graphics screen.   The destination screen is  blanked.  
This  allows information to be written to one screen then you can 
change to the other and write more information (allowing text  on 
one  screen and graphics on the other for example).

One  important  feature of DUALS is that it has been designed  to 
allow  you  to 'fool' GWBASIC into believing that it  is  in  the 
graphics  mode  whilst  text i/o is being conducted on  the  mono 
screen.   Simply invoke the graphics mode required (i.e.  1 or 2) 
then execute SHELL "SWAP" (make sure command.com and swap.com are 
available).   The  graphics screen will be blanked and  then  the 
cursor  will  re-appear  on the monoscreen.   You can  now  enter 
graphics commands directly and watch what they do on the graphics 
screen  (without  annoying  text  appearing).   It's  great  from 
demonstrating  and  experimenting with the graphics  commands  in 
BASIC.

(C) COPYRIGHT 1988,PROCON SOFTWARE,BOX 43,ESSENDON 3040,AUSTRALIA


```
{% endraw %}

## FILE1537.TXT

{% raw %}
```
Disk No: 1537
Program Title:  PROCON UTILITIES version 1.10
PC-SIG version: 1

PROCON UTILITIES is a handly collection of memory resident utilities
from Down Under----Australia that is!  Hav a G'day, Mate!

o  BLANKS - Automatically blanks the screen after 1 to 9 minutes
            of no keyboard or screen activity to preserve your
            monitor.  Works with Mono/Hercules and CGA.

o  HERCULES - Permits CGA graphics on a PC with a Hercules card.
              Works with many programs, including PC-PAINT,
              PRINTMASTER, and FLIGHT SIMULATOR (minus the Esc
              screen)!

o  CLOCKON - A memory resident on screen clock that works in all
             CGA modes and can be turned on and off from the key
             board.

o  CLOCKSET, CLOCKGET, SETCLOCK - Quick fixes for the Real Time
   Clock bugs of the MM58167 RTC (leap year and year counter) chip
   and its interface with the system clock in your PC!.  Use to
   replace Timer.Com

o  SWAP, SCREEN, DUALS - Are programs for PCs with two display
   cards and monitors.  SWAP will toggle the active display and
   SCREENS will ensure both displays are initialized at boot-up.
   DUALS permits dual screen functioning from GWBASIC and is very
   useful for graphics demonstrations and debugging.

Synopsis: TSR (memory resident) programs that put a clock on your
CGA screen, lets your Hercules run color, screen saver blanks both
mono & CGA, and a fix for real time clock bugs (such as leap year).

Usage:  Utilities/CGA Emulation/Clock/Dual Screen/Screen Saver.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

Authors:  Peter E. King, ProConn Software, Australia.

File Descriptions:

BLANKS   COM  Screen saver.
CLOCKGET COM  Retrieve real time.
CLOCKON  COM  Memory resident clock.
CLOCKSET COM  Set real time.
DUALS    COM  Dual mode display.
HERCULES COM  CGA emulator for hercules.
HERCULES DOC  Documentation for hercules.
SCREEN   COM  Screen initailizer.
SWAP     COM  Switch active display.
???????  DOC  Documentation (4 files).
CLOCK    SYS  Special RTC driver.
CONFIG   SYS  Sample system configuration.
ORDER    DOC  Order form.
NEW      DOC  New programs available from PROCON
README   DOC  This file

The PC-SIG Library
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

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
This program will,  however,  allow many CGA programs such as PC-
PAINT,  PRINTMASTER,  FIGHT  SIMULATOR (minus the Esc screen) and 
many  PUBLIC  DOMAIN programs to execute without  any  noticeable 
difference.


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
Overseas letters, however, may take a bit longer.

If  you  would  like the latest version of  HERCULES.COM,  it  is 
provided  only  on ProCons MAHJONG games  disk.   Please  send  a 
personal  cheque or money order for $25 Australian ($20 U.S.)  to 
the  address  shown  below.   The later version will  allow  more 
programs to execute including;  GWBASIC, QuickBASIC and others.

Please  note,  HERCULES.COM  may  only  be  separated  from  disk 
provided  that HERCULES.DOC accompanies it.   It may be  used  by 
other  P.D.  programmers  BUT MUST NOT BE USED FOR COMMERCIAL  OR 
INSTITUTIONAL (GOVERNMENT) PURPOSES WITHOUT WRITTEN CONSENT.

(C) 1987, ProCon Software, P.O. Box 43, Essendon, 3040, AUSTRALIA

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
means  of learning this Chinese card game.   It can also help  to 
improve your speed and skill in the game.

User Comments:

'I really,  really love your game.  I've gotten a lot of pleasure 
from your program'.  Debbi Reid, Texas.

'The  wife is driving me crazy - she is well and truly hooked  on 
it (mahjong).'  J. Cairns,  New Zealand.

Cost $25 AUS ($20 U.S.), requires CGA, EGA or Hercules card.

=================================================================
HERCULES USERS!  Provided on the mahjong games disk is the latest 
version  of  'hercules.com',  this is a memory  resident  program 
which allows many C.G.A. programs to run on the Hercules graphics 
card.    Yes!    Even Flight Simulator and GWBASIC will run using 
this program.  Now you can have your cake ...
=================================================================

PROCON CONTROL Version 1.00 is a remote control program utilizing 
any  printer port you can control up to eight relays for robot or 
model control,  switch a radio or tape recorder on and off and SO 
MANY  other  things.   A memory resident program  allows  you  to 
switch these eight outputs whilst running other programs.   AND a 
BASIC program allows you to switch them at ANYTIME - night or day 
- automatically!   One  more  program allows you to operate  your 
computer as a simple Programmable Controller,  with eight  inputs 
and eight outputs,  nothing could be simpler for control purposes 
than AND X1, OR X2, OUT Y1 etc.  Cost $30 AUS ($25 U.S.)


PROCON UTILITIES Version 1.0 is a collection of useful  utilities 
with  full  SOURCE code provided.    The collection includes; on-
screen  clock  that  works in ALL CGA  modes  including  graphics 
modes.   Blank screen program that blanks the screen after 1 to 9 
minutes  (user  selected)  - it can even beep  you  automatically 
after finishing a time-consuming task (e.g. compiling a program).
Cost:  $25 AUST. ($20 U.S.)


Soon to be released:

PROCON BASICaides Version 1.0 is a collection of useful assembler 
coded routines and BASIC programs to make your BASIC  programming 
easier  and  faster.   Provides quick sort routines and  supports 
dual  screen operation  (i.e.   Pictures can be displayed on  one 
screen  whilst  text is displayed on another!   All  under  BASIC 
control).  Cost  T.B.A.

-----------------------------------------------------------------

Please note:   10% of all monies received (NOT PROFIT) go to help 
local  and  overseas  charities.   ProCon is  also  dedicated  to 
providing assistance to the physically handicapped by  developing 
programs  to make the IBM-PC more accessible.   All enquiries may 
be directed to Box 43, Essendon, 3040, AUSTRALIA.

=================================================================

ALL  PRICES INCLUDE PACKING AND POSTAGE WORLDWIDE.   ALL PROGRAMS 
PROVIDED ON 5.25 INCH DISKS ONLY.   PAYMENT BY PERSONAL CHECK  IN 
YOUR LOCAL CURRENCY IS ACCEPTABLE.   CANADIANS, PLEASE DO NOT PAY 
IN  US DOLLARS,  SIMPLY CONVERT THE PRICE TO CANADIAN DOLLARS AND 
SEND THAT AMOUNT - NO PROBLEMS!  THANKS FOR YOUR CO-OPERATION.

=================================================================

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

                                PROCON UTILITIES
                                ================

       If   you  would like to receive the lastest version of  UTILITIES 
       with all the goodies mentioned, including full USER SUPPORT write 
       to  the  address shown below and include your personal  check  or 
       money order  for $20 Australian or $20 U.S. (U.S. orders - please 
       allow 2 weeks for delivery).   This price includes packaging  and 
       handling,   worldwide!  INCREDIBLE!    NO!  ProCon   Software  is 
       committed to the  concept  of  good, cheap software being readily   
       available   and  without    copying  restrictions.    Your  money 
       will  encourage  the development  of this product and other value 
       products by ProCon.


                    Send To:     Peter E. King
                                 ProCon Software
                                 P.O. Box 43
                                 Essendon, 3040
                                 AUSTRALIA



       -----------------------------------------------------------------
                                  ORDER FORM
       -----------------------------------------------------------------

       YES,  I  like the UTILITIES disk and would like to  receive   the        
       full  source  code and instructions.    I enclose  a  check/money 
       order* of [      ] being for [   ] subscription(s).


       MY NAME:       _____________________________________


       ADDRESS:       _____________________________________

                      _____________________________________

                      _____________________________________

                      _____________________________________



       STATS:  My Computer is a  ______________________________________.

               I run DOS version _____.  I have UTILITIES version _____.

               I obtained my copy of UTILITIES from ___________________.


       * Payable to:  PROCON SOFTWARE, Box 43, Essendon 3040, AUSTRALIA.

       -----------------------------------------------------------------

```
{% endraw %}

## README.DOC

{% raw %}
```

PROCON UTILITIES Version 1.10  7/12/1988

Copyright (C) Peter E. King, 1988

ADDRESS:       ProCon Software
               P.O. Box 43
               Essendon
               Victoria, 3040
               AUSTRALIA.    

               (This is a Down Under product)


Requirements:

IBM-PC or compatible with 1 or more disk drives.  DOS version 2.1 
or  greater.   DUAL  screen  system  required  to  run  SWAP.COM, 
SCREEN.COM  and DUALS.COM.   Your system must be BIOS  compatible 
with the IBM-PC to run these programs.


Copying and distribution:

PROCON  UTILITIES may  be copied and distributed as  a  SHAREWARE 
program.   That  is  the  disk may be copied and  distributed  to 
others   provided  that  ALL  files  on  this  disk  are   copied 
unmodified (with the exception of HERCULES.COM and HERCULES.DOC).   
It   may  only be distributed on BBS provided that all files  are 
downloaded  using XMODEM.   The program may NOT  be used   as   a 
value  added product and NO fee can be charged  except for a disk 
and handling charge of up to $10 Australian or $6 U.S.

The copyright notices are to preserve my options,  and to protect 
you  from  the  untoward modifications  of  others.   It  is  NOT 
intended to prevent the public distribution of PROCON   UTILITIES 
subject to the above limitations.

These  programs may NOT be utillized for business use  (including 
government, semi-government and corporations) without the payment 
of  the prescribed fee (excepting written permission from  Procon 
Software).


INTRODUCTION
============

Contained  on  this diskette are a collection of the most  useful 
utilities  that  have  been written by  me.   Yes!   I  have  the 
original assembler source code for ALL these programs.  They have 
taken many months of work, in writing, testing and debugging.  If 
you   find  them  useful  then  a  small  contribution  would  be 
appreciated,  if you send $20 or more (Overseas subscribers  send 
$20  U.S.)  you  will receive the latest  version  of  UTILITIES, 
together  with  the  source  code for all  the  programs  (except 
HERCULES).   As  a BONUS you will receive the EXECUTIVE  DECISION 
MAKER  (EDM),  a fun pop-up program that allows you to make those 
all important YES-NO decisions with ease.   Should I go out  with 
susan?  Should I buy more Acme shares?  It's easy, It's fun!

P.S.       Although  other similar utility programs are available 
in   the   public domain,   these programs generally  should   be 
looked  upon  with  suspicion.   Many have been  written  by  in-
experienced  people who do not fully understand the operation  of 
the IBM-PC.   So,  if  your system is randomly CRASHING...   take 
a  close  look at some of the memory-resident utilities  you  are 
using!   AND DON'T LET ANY VIRUS INFECT YOUR SYSTEM!


Suppport:

If   you are a contributor ,    I'll most happily  help you  with 
any difficulties encounted.    Mail is  the preferred  method  of 
exchange,   but  you  may also contact  me by telephone  on  (03) 
3364956.  That's in AUSTRALIA folks.

If  you are not a contributor (oh dear!),  please send a  stamped 
SAE,  and I'll try to get back to you.  Remember, there's no such 
thing as a free lunch!


PROBLEMS AND ENHANCEMENTS
=========================

I  am most certainly interested in any problems or bugs with  the 
programs.   And,  indeed,  if  you have any suggestions  or  have 
produced any enhancements to these programs I would be interested 
in   hearing from you.    Please READ THE INSTRUCTIONS  CAREFULLY 
before reporting any problems.

I  am  continually improving these programs.   Your  contribution 
will  aid  the development of further programs and enhancements. 


LIST OF FILES
=============

HERCULES.COM        Memory resident CGA simulator
HERCULES.DOC        Documentation for HERCULES.COM

BLANKS.COM          Memory resident automatically blanks screen
BLANKS.DOC          Documentation for BLANKS.COM

CLOCKON.COM         Memory resident on-screen clock
CLOCKON.DOC         Documentation for CLOCKON.COM

CLOCKSET.COM        Set real-time-clock from system clock
CLOCKGET.COM        Set system clock from real-time-clock
SETCLOCK.BAT        BATch file for CLOCKSET

CLOCK.SYS           Clock system call for auto. date rollover
CONFIG.SYS          Configure system file for CLOCK.SYS

CLOCK.DOC           Documentation for CLOCK/SET/GET.COM/SYS

SWAP.COM            Swaps from one screen to the other
SCREEN.COM          Use with IBM.PC to initialize screens
DUALS.COM           Provides dual screen functioning
DUALS.DOC           Documentation for SWAP/SCREEN/DUALS.COM


NEW.DOC             New programs available from PROCON
ORDER.DOC           Order form for PROCON UTILITIES
README.DOC          This file



BLANKS.COM /BLANKS SCREEN
=========================

This program automatically blanks the screen after 1 to 9 minutes 
of  no keyboard or screen activity.   This will save your  screen 
since  displays  will often become permanently  etched  into  the 
screen  if they remain for long periods of time.   The time delay 
may be set by using 'BLANKS /n' on the command line,  where n may 
be 1 for one minute to 9 for nine minutes.   If '/n' is not given 
the time defaults to three minutes.   Pressing any key, including 
the Alt or Shift keys will restore the screen - without affecting 
the  executing  program.   This  program is memory  resident  and 
should only be invoked ONCE.   It can be included in the AUTOEXEC 
file.

The  program works with both the MONO/HERCULES cards and the  CGA 
card and blanks the entire screen - including the border!


CLOCKON.COM /CLOCK ON-SCREEN
============================

This  program  provides  an on-screen clock display  in  the  top 
right-hand corner.  It will work in all MONOCHROME and CGA screen 
modes  (including GRAPHICS modes) and  may be toggled on and  off 
by pressing the  Shift-ALT-Caps  Lock keys.    The blinking colon 
also  provides   confirmation  that  interrupts are  on  and  the 
computer has not  crashed!    This program is memory resident and 
should  only  be  invoked  once.    It can  be  included  in  the 
AUTOEXEC file.


REAL TIME CLOCK ROUTINES
========================

The   files   CLOCKSET.COM,   CLOCKGET.COM and SETCLOCK.BAT  were  
developed  to overcome  some of the limitations of the Real  Time 
Clock  (RTC) programs  that utilize the MM58167 RTC chip.    This 
chip  unfortunately  does not have a YEAR counter  and  does  not 
correct  for leap years (i.e.   the 29th of Feb does not  exist).   
The  above  programs  allow the RTC to be  set  from  the  system  
clock,  it automatically rolls over the year counter (the program 
TIMER  has a bug in  it)  and it automatically adjusts  for  leap 
years.     A   feature    of   these  programs   is   that   they 
automatically  search all the commonly used  addresses of the RTC 
until one is found.   e.g.  These programs work with the  Persyst 
Time Spectum card and most of the other RTC cards available.


SETTING THE REAL-TIME CLOCK
---------------------------

Enter  SETCLOCK and press RETURN.   You will be asked to set  the 
systems  date  and  then time.    The CLOCKSET.COM  program  will 
automatically set your  Real Time Clock (RTC) - if you have one!


SETTING THE SYSTEM TIME/DATE AUTOMATICALLY
------------------------------------------

You may already have an AUTOEXEC.BAT file on your System disk, if 
not  create  one using the COPY command or Editor  (i.e.  EDLIN).  
Insert the word CLOCKGET into the file,  this will  automatically 
set  the  systems  time/date to the Real Time   Clocks  when  you 
start-up the system.    If you already have an AUTOEXEC file then 
delete  DATE  and TIME and insert CLOCKGET.   You will no  longer 
need to set the time and date AND it will always be correct  when 
you power up.


SPECIAL NOTE
------------

The  RTC  may  need to be re-adjusted again for DAY-LIGHT  SAVING  
time   and  occationally   when  it is corrupted  if  the  system 
crashes.    Simply  run  the SETCLOCK Batch(BAT) program again to 
reset  it.    If  your time and date  from the RTC  is  corrupted 
often, try changing the cards address.


SYSTEM FILES
------------

The    CLOCK.SYS   device  driver  is  provided  to   allow   the  
DATE   to    be  incremented   when  the   TIME  clocks  over  to 
00:00:00.00.    This   is  done  already in DOS version 3 but not 
in  version  2.     It is also useful  in  DOS version 3  because 
some   programs  (i.e.    on-screen clocks  etc) may 'steal'  the 
timer flag indicating that the clock has passed 24 hours.   Also,  
since this driver monitors the system timer  continually,    date 
increments  cannot  be  lost when the time is  not  read  for  24 
hours.     To  install the  driver  simply   copy  CLOCK.SYS   to  
your  boot  disk  and  include  DEVICE  =    CLOCK.SYS   in  your 
CONFIG.SYS file.  If one does not exist then copy the one on this 
disk to your boot disk.


DUAL SCREEN PROGRAMS
====================

The programs SWAP.COM,  SCREEN.COM and DUALS.COM are intended for 
use  with a dual screen system.   That is a system that has  BOTH 
the  mono (or mono-graphics) card and the color graphics  adapter 
(CGA)  card  installed.   You may wonder why one should do  this?  
Well  ...  for someone like myself,  who's constantly  developing 
programs  for the IBM-PC,  it allows me to test programs  written 
for  the  different video interfaces simply by  swapping  screens 
using the SWAP command.  Some programs have even been written for 
dual screen use.  One, which is useful to me, is Microsoft's CODE 
VIEW.   I  can now debug a graphics program,  with  it's  display 
being  on  the  color monitor whilst CODE VIEW displays  all  the 
program  lines  and  register contents  etc.  on  the  monochrome 
screen.   Other programs, such as AUTOCAD, can do the same thing.  
Graphics  can  be displayed on the color screen  whilst  text  is 
entered on the mono screen.

One  of the problems encounted with the standard IBM-PC system is 
that it does not initialize both screens when  powering-up.   The 
SCREEN  program  can  be inserted in your  AUTOEXEC.BAT  file  to 
provide  this  initialization and blanking of screens  (including 
turning off the blinking cursor) automatically.

The SWAP command allows you to swap from one screen to the other.  
This  command automatically determines what screen is being  used 
and  swaps to the other.   The originating screen is cleared  and 
its  cursor is blanked,  whilst the destination screen is cleared 
and  its cursor turned on.   i.e.  You always know  which  screen 
you're on by the blinking cursor!

The DUALS program was written to allow the two screens to be used 
from  a  GWBASIC  or BASICA program as no  programming  langauage 
(that I'm aware of) supports dual screen operation.   DUALS is  a 
memory resident program that should only be executed ONCE.  After 
it  has been executed,  invoke GWBASIC and you will find that you 
can simply swap from one screen to the other by selecting  either 
the text mode (0),  black & white (0) for the the mono screen and 
text  mode  (0),  color enabled (1) for the color  screen.   e.g. 
execute SCREEN 0,0 for mono and SCREEN 0,1 for color.  By-the-way 
selecting  any graphics mode (1 or 2) switches  automatically  to 
the  color graphics screen.   The destination screen is  blanked.  
This  allows information to be written to one screen then you can 
change to the other and write more information (allowing text  on 
one  screen and graphics on the other for example).

One  important  feature of DUALS is that it has been designed  to 
allow  you  to 'fool' GWBASIC into believing that it  is  in  the 
graphics  mode  whilst  text i/o is being conducted on  the  mono 
screen.   Simply invoke the graphics mode required (i.e.  1 or 2) 
then execute SHELL "SWAP" (make sure command.com and swap.com are 
available).   The  graphics screen will be blanked and  then  the 
cursor  will  re-appear  on the monoscreen.   You can  now  enter 
graphics commands directly and watch what they do on the graphics 
screen  (without  annoying  text  appearing).   It's  great  from 
demonstrating  and  experimenting with the graphics  commands  in 
BASIC.

(C) COPYRIGHT 1988,PROCON SOFTWARE,BOX 43,ESSENDON 3040,AUSTRALIA


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1537

     Volume in drive A has no label
     Directory of A:\

    BLANKS   COM       516   2-05-88  11:23p
    BLANKS   DOC      1024   2-05-88   1:46a
    CLOCK    DOC      2944   1-01-80  12:58a
    CLOCK    SYS       429   1-02-80   1:02a
    CLOCKGET COM       458  12-03-87   5:58p
    CLOCKON  COM       713   2-05-88  11:13p
    CLOCKON  DOC       640   2-05-88   1:46a
    CLOCKSET COM       256  12-03-87   6:00p
    CONFIG   SYS        20  11-25-87   4:03p
    DUALS    COM       540  12-03-87  10:28p
    DUALS    DOC      3456  12-07-88   5:13p
    FILE1537 TXT      2439   8-10-89   4:48p
    GO       BAT        42   8-10-59   4:53p
    HERCULES COM       756  12-08-87  12:07p
    HERCULES DOC      2688  12-14-87   1:10p
    NEW      DOC      3712  11-17-88  10:44p
    ORDER    DOC      2176   6-25-88   2:23p
    PAGE     COM       325   1-06-87   4:21p
    README   DOC     12672  12-07-88   5:13p
    SCREEN   COM        54  10-21-77   1:54p
    SETCLOCK BAT       128   1-01-88  12:01a
    SWAP     COM       190  11-27-88   8:39p
           22 file(s)      36178 bytes
                          117760 bytes free
