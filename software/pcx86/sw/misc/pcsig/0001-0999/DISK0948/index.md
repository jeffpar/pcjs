---
layout: page
title: "PC-SIG Diskette Library (Disk #948)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0948/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0948"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORA COMMUNICATIONS SOFTWARE"

    FORA is a multi-user chat BBS system.  It lets up to 17 people
    communicate simultaneously at up to 2400 baud, chatting as a group or
    privately with each other.
    
    Use FORA to set up your own bulletin board or use it as a service for
    your business.  It requires at least eight phone lines installed where
    it is used and can be located in an area where many people can dial in
    toll-free.  FORA has extensive documentation with guidelines on finding
    a location for your system, purchasing the hardware needed, and
    installing it into your system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES948.TXT

{% raw %}
```
Disk No  948
Program Title: FORA version 1.0
PC-SIG version 1
 
    FORA is a multiuser chat system. It supports up to 17 people
simultaneously communicating at up to 2400bps, chatting as a group and
privately with each other. You can use FORA to set up your own bulletin
board or it as a service for your business. FORA requires at least 8 phone
lines installed where it is used, and it should be located in an area where
many people can dial in toll-free. It also requires a multiport RS232 card,
some modems, cables, and a power strip. More external power strips are
needed if external modems are used, a modem chassis if you use a modem
rack.
 
Usage: Communications
 
System Requirements: 640K memory and two disk drives
 
How to Start: Type: COPY FORA.DOC PRN (press enter).
 
Suggested Registration: $1.00 and up
 
File Descriptions:
 
FORA     DOC  Documentation.
FORA     EXE  Main program.
FBASE    DAT  FORA database.
FURECS   DAT  FORA people-base records.
FCONFIG  SYS  FORA system configuration file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## FORA.DOC

{% raw %}
```
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
* * *                                                                     * * *
* * *                                                                     * * *
* * *                                FORA                                 * * *
* * *                                                                     * * *
* * *                            Version 1.00                             * * *
* * *                                                                     * * *
* * *                           Copyright 1987                            * * *
* * *                                                                     * * *
* * *                      TeleComputing Associates                       * * *
* * *                                                                     * * *
* * *                A multiuser chat system for the IBM PC               * * *
* * *                                                                     * * *
* * *                             Written by                              * * *
* * *                                                                     * * *
* * *                             Jim Bowery                              * * *
* * *                                                                     * * *
* * *                                                                     * * *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *      


This documentation is copyrighted 1987 TeleComputing Associates.
See License section of documentation for full details of your License.

TeleComputing Associates is a consulting firm specializing in wide
area networking and distributed processing.  Contact:

TeleComputing Associates
PO Box 1981
La Jolla, CA 92038

PHONE:  619/295-8868


LICENSE

TELECOMPUTING ASSOCIATES hereby grants to User a non-exclusive, non-
transferable license to use this FORA software and documentation (hereafter
referred to as software) only in accordance with the following terms and
conditions:

1.  COPYING.  User may make and distribute unlimited copies of this software,
provided, however, that User may not sell, lease or otherwise transfer
title or posession for consideration of any copies of this software. 
Unauthorized modification of this software or the transfer of copies of 
this software except as permitted above will automatically terminate
this License.  User's further use, copying or distribution of this software
following termination of this License may constitute both civil and criminal
offenses for which User may be liable for fines, damages and attorney's fees.
The provisions of this License which protect the proprietary rights of
TELECOMPUTING ASSOCIATES shall continue in full force and effect after
termination of this License.

2.  PROPRIETARY RIGHTS OF TELECOMPUTING ASSOCIATES.  TELECOMPUTING
ASSOCIATES' trademarks, service marks and software, are either patented,
trademarked, copyrighted, or trade secrets and/or proprietary information.
User agrees not to remove or deface any product identification or 
notices of such proprietary restrictions from the software.  TELECOMPUTING
ASSOCIATES retains ownership of the software, including both printed
materials and programs.  All techniques, algorithms, and processes 
contained in the software or any modification or extraction thereof
constitute trade secrets and/or proprietary information which User agrees
not to disclose to others.

3.  WARRANTY DISCLAIMER.  THIS SOFTWARE IS DISTRIBUTED AND LICENSED
"AS IS."  ALL WARRANTIES, EITHER EXPRESSED OR IMPLIED, ARE DISCLAIMED
AS TO THE SOFTWARE AND ITS QUALITY, PERFORMANCE, MERCHANTABILITY, OR
FITNESS FOR ANY PARTICULAR PURPOSE.  USER BEARS THE ENTIRE RISK RELATING
TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE.  IN NO EVENT WILL 
TELECOMPUTING ASSOCIATES BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL OR
CONSEQUENTIAL DAMAGES RESULTING FROM ANY DEFECT IN THE SOFTWARE.  IF 
THE SOFTWARE PROVES TO HAVE DEFECTS, USER, AND NOT TELECOMPUTING 
ASSOCIATES, ASSUMES THE COST OF ANY NECESSARY SERVICING OR REPAIRS.  SOME
STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF IMPLIED WARRANTIES OR
LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION
OR EXCLUSION MAY NOT APPLY TO YOU.

4.  MISCELLANEOUS.  This License is the only agreement between TELECOMPUTING
ASSOCIATES and User and supersedes any prior or contemporaneous oral or
written agreements.  No modification or amendment to this License shall be
effective unless made in writing signed by both parties.  When entered
into in the United States, this License shall be interpreted in accordance
with the laws of the State of California.  Otherwise, this License shall
be interpreted in accordance with the laws of the United States or such
other law as may be required to protect the legitimate interestes of
TELECOMPUTING ASSOCIATES.


This document contains 3 major sections:

I)  What is FORA?
II)  How to go about setting up your FORA system.
III)  How to manage your FORA system as a business.
IV)  Acknowlegements
V)  Errata


I.  WHAT IS FORA?

FORA is a multiuser chat system for the IBM PC and compatibles.  It supports 
up to 17 people simultaneously communicating at up to 2400bps, chatting as a
group and privately with each other.  FORA 1.00 uses no special, single 
sourced, hardware components, and the FORA 1.00 system software is available 
free on a user supported basis.  Copyright is retained by Jim Bowery DBA
TeleComputing Associates and contributions are solicited from end users
to support the local systems as well as further enhancement of the system
software.

Experience with chat systems on the national information services, as well
as the consumer oriented chat systems in France, have demonstrated that
people like chat services a lot -- enough that they will pay money to use
them.  The market for chat services is large and growing rapidly.  FORA is 
the most cost-effective way to address the chat market.

A test of the FORA service in San Diego demonstrates that a reasonably well 
managed FORA system can support itself financially.  Shortly after a
prototype FORA service was set up in San Diego, it became, by far, the most 
used computer bulletin board system in that region.  This was accomplished 
with a small amount of capital (about $5000) and without spending any 
money on advertising or marketing.  Most FORA users who have used a wide 
variety of chat systems, claim FORA is the best chat system they have yet 
seen.

You can set up and manage your own FORA system.

Here's how...


II.  HOW TO GO ABOUT SETTING UP YOUR FORA SYSTEM.

A FORA system consists of 3 components:

1) FORA Facility
2) FORA Hardware
3) FORA Software

You must find a facility to install the hardware.  The software is then
installed on the hardware and, BINGO, you have a FORA chat system!

Once you get all three set up, you can add the final, and most important,
component of your FORA service:  Your people-base.  Setting up and managing 
your people-base is the most work and it is also the most fun.  That
task will be addressed in section III.  For now, we'll stick with the
technology.


II.1.  THE FORA FACILITY

Before you can do anything, you must have some place to do it.  To set 
up a FORA service, you need a FORA facility.  It may be in your home or 
apartment, or at your office or in a location that you rent or borrow 
specifically for this purpose.  A FORA facility is a place with a few
important characteristics:

A)  It must be centrally located (many people can dial in toll-free).
B)  It must be possible to install at least 8 phone lines there.
C)  It must provide at least the space of a desk-top for the FORA hardware.
D)  It must be low cost (less than $150 per month to rent the desk-top space).


II.1.A  IT MUST BE CENTRALLY LOCATED.
 
The main value of a FORA service is in the people who use it.  If no one
is using FORA, no one will want to use it.  For this reason, it must not
cost a lot of money to access FORA.  If your users are paying money to 
the phone company every minute they are connected to your system, they will 
have less money to contribute to your system and, more importantly, there will 
be fewer people for them to chat with.

Typically, the phone company divides metropolitan regions into "zones"
or calling areas.  Calls within an area and to adjacent areas are
free or far less expensive than calls to areas which are not adjacent.
You should pick a location which is in an area that can reach the largest
number of potential users at the lowest cost.  This can usually be determined
by looking at tables in the front of your telephone directory.  A call to
your phone company's sales representative might be helpful.

II.1.B.  IT MUST BE POSSIBLE TO INSTALL AT LEAST 8 PHONE LINES THERE

Once you have a candidate location which is centrally located, call
your local phone company and ask if it would be possible to install
at least 8 phone lines in that location.  They will require a specific
address, and possibly, suite number.  It is best to pick a location which
can eventually expand to about 100 lines, but that should only be a
consideration if you have two locations which appear equal in all other
respects.

When you actually order the phone lines to be installed, try to get as
many phone lines installed at once as you can afford.  IT IS RECOMMENDED
THAT A FORA SYSTEM BE SET UP WITH AT LEAST 5 PHONE LINES AND PREFERABLY
8 PHONE LINES, INITIALLY.  If you know someone who has done or is doing
phone line installations, you might ask them to help you get the lines
installed on your premises.  Involve this person BEFORE you order your
phone lines with the phone company.  CAUTION:  If you aren't SURE that 
this person has experience installing phone lines, just go ahead and
pay the phone company to install your RJ11 jacks for you (the standard
modular jacks that most phones use).

Ask for "rotary" or "hunt-group" service.  This service lets your users
call one number for all your phone lines.  When they dial that number,
the phone company hunts for the first open phone line in the group of
lines associated with that number.  If it finds none open, it gives a 
busy signal.  

Let your phone company sales representative know that these lines will be 
used for INCOMING CALLS ONLY.  Use this fact to seek a discounted service
(usually metered outgoing lines have a lower cost/month than standard
 business lines), and also try to negotiate a lower deposit for the group
of lines since they will not be used to make metered calls.

If you can, also seek to be placed on an ESS (electronic switching system)
as these lines tend to be a little less noisy.

In addition to the phone lines in the hunt group, you should order one
additional phone line, outside the hunt group, which will be used for
voice communications.  Get an answering machine ($100) for this phone line.
This is the number that people will call to request access to your system.
Do not use your home phone number for this voice line, unless you don't
mind endless phone calls from the C64 modems of 13 year old boys, who 
thought this was the data line for FORA, ringing your phone at all hours.

You can expect to pay about $75 per line plus an average of $25 per line
to wire them into modular jacks.  From then on, your monthly phone bill will 
be around $15 to $20 per phone line depending on your area, how many you 
have installed and how much outgoing calling you do from your voice phone.
Also, you will probably need to put up a substantial deposit when you
get the phone lines installed -- around $25 per line if you can negotiate
with your sales representative.

Expect to invest about $125 per phone line you install which means a total
of $625 for a 5 line system or $1000 for an 8 line system plus $125 for
the voice line.  Also, expect a monthly phone bill of around $100
for a 5 line system and around $160 for an 8 line system.

All of these amounts are approximate.

Finally, one thing you should seriously consider:

You might try setting up your system on the existing phone lines of a
business in the appropriate area and helping them subsidize their phone
bill.  Many businesses use hunt-group phone lines.  These businesses might 
only be in operation during business hours.  FORA tends to be used little 
during business hours and a lot during nonbusiness hours, unless it is being 
set up specifically for a business application.

II.1.C.  IT MUST PROVIDE AT LEAST THE SPACE OF A DESK-TOP

The desktop hardware consists of the PC and modems as well as requiring a
cache of floppy disks for backups, etc.  The desk space should also be
near a power outlet and a spot where the phone lines will be installed.
A 3 by 5 foot area is quite adequate although smaller spaces could work.

If decide to rent part of an office space, be sure you will have unlimited 
access to the physical system.  In other words, don't settle for a location 
which requires that you stay out during certain hours of the day or week -- 
get your own key and, if necessary, security combination.

II.1.D.  IT MUST BE LOW COST

The cost per month of renting the desk top or office will be one of
two major money drains.  It helps to be able put your system into a
place that is being used for other things that pay for that space
until contributions can support itself.

Keep it below $150/month.  The system in San Diego is running in a
centrally located room (12' by 14') that was previously used in a
fly-by-night telemarketing operation.  It is a dump, but the phone
wiring is all there and it only costs $125/month!

Physical security and insurance can be a problem, especially in "low
rent" districts.

You should try to keep the location of your system a SECRET.  Rent 
a post office box where people can send their contributions.  Post 
office boxes typically cost around $35/year.  When you list your
system's phone number in the directory, ask them to list the box number
instead of your actual address.  Also, install a solid door with 
deadbolt lock (key hole on BOTH sides of the deadbolt) and try 
to locate above the first story of the building, if you end up in
a "low rent" district.  If you feel you really need insurance, don't
pick a place above a restaurant!  Insurance companies like to sell you
a package deal covering theft as well as fire.  You may have trouble
getting theft insurance alone and the fire coverage can be very expensive
if you are above a restaurant.  In general, the money you spend on insurance
would be better spent taking preventative measures against fire and theft.

Be prepared to provide, up front, 3 times the monthly rent -- around $400.

II.2   HARDWARE

The FORA hardware consists of several basic components.  Essentially,
you will need a PC, a multiport RS232 card, some modems, some cables
and a power strip.  If you use a modem rack, you'll need the modem chassis
and if you use external modems you'll need a lot of power strips.

To get the hardware installed you'll have to do two things:

A) Purchase
B) Install

II.2.A. PURCHASE

Here is a list of components including typical approximate prices.

SYSTEM UNIT:
        IBM PC compatible with 2 DSDD floppy drives, 640K RAM and monitor
        7.2 or 8 Mhz is recommended
        If it comes with an RS232 port, all the better.
        $ 1000

MULTIPORT BOARDS:
4 port rs232 board		$ 350 each (from Control Systems, Minneapolis)
8 port rs232 board		$ 550 each (from Control Systems, Minneapolis)

MODEM RACK CHASSIS:
        Provides slots and power for up to 16 modems.
        $ 500

RACK MOUNTED MODEMS (full AT command set):
1200 bps modem:			$ 250 per phone line
2400 bps rack modem:            $ 400 per phone line
2400 bps rack modem with MNP:	$ 450 per phone line
(Price estimates are based on high quality rack mountable modems.)

EXTERNAL MODEMS (full AT command set):
1200 bps modem:                 $ 200 per phone line
2400 bps modem:                 $ 300 per phone line
2400 bps modem with MNP:        $ 350 per phone line

RS232 CABLES:			$  10 per phone line

SURGE PROTECTION POWER STRIP:	$  20 each


From these prices, the price of various hardware systems can be
estimated:

(MNP is Microcom Networking Protocol -- used to eliminate line errors.)
8 line rack mounted 2400bps w/MNP system      $ 5750
8 line rack mounted 2400bps system            $ 5350
8 line external 2400bps w/MNP system          $ 4510
8 line external 2400bps system                $ 4150

8 line rack mounted 1200bps system            $ 4250
8 line external 1200bps system                $ 3350

(All 5 line systems assume 1 RS232 port comes with the system unit.)
5 line rack mounted 2400bps w/MNP system      $ 4170
5 line rack mounted 2400bps system            $ 3920
5 line external 2400bps w/MNP system          $ 3170
5 line external 2400bps system                $ 2920

5 line rack mounted 1200bps system            $ 3170
5 line external 1200bps system                $ 2440


Most of these hardware prices could be reduced by 30% to 50% depending
on how hard you want to work to find bargains and how much risk
you are willing to take with the quality of the hardware you purchase.
You must make a judgement about how important rack mounting, MNP,
2400bps and many initial lines are to you in your situation.  Many
systems can get by started with 5 lines running external 1200bps modems.  
If you already have a PC available to run FORA, the hardware investment 
could be as low as, $1440 or even less if you get further discounts on 
some components.  

If you are in an area with other chat systems, you should probably make 
the investement in an 8 line system.  FORA has been proven competative 
in San Diego as there are 3 other chat systems in that area, and FORA 
is paying its own expenses.  This was starting with a 9 line system, 
however.  If there is a chat system in your area with 8 or more lines,
it isn't a good idea to set up a FORA system with fewer lines.

TeleComputing Associates will be putting together quantity purchases
of various components for FORA systems, so you may wish to purchase
some of your components through us.

NOTE:  Advanced versions of FORA are under development which will
require PC AT compatibility (80286 protected mode).  You may wish
to invest the small extra cost to get an AT compatible -- no hard
disk is necessary (or even desirable).

II.2.B.  INSTALL

The procedures to follow when installing the FORA hardware is highly
dependent on what kind of system hardware you purchased.  In general,
you will simply connect all the components in the most obvious way with
the exception of the multiport RS232 board, which isn't all that obvious.
In the case of the Hostess multiport board by Control Systems, install
the board at address 2C0 hex unless your system already has a COM2 port.  
If your system already has a COM2 port, install the board at address 
280 hex.  Leave the IRQ selection switch in its factory position (IRQ4).
Place the Hostess board in the last slot of the machine to make room for
the next Hostess board which will be placed close to the disk controller
board.  

Try to keep the phone lines, modems and RS232 ports in order with each
other.  In other words, connect the first phone line in the hunt group
to the first modem in the modem rack (or row) and connect that to the
first port on the backpanel of the Hostess board.

If you are using external modems, do NOT stack them on top of each other.
If you are using a modem rack, provide a "breathing space" both above
and below the rack so that air can pass through the cards.  

REMEMBER:  HEAT IS THE ENEMY OF ELECTRONIC HARDWARE!!  Make sure your 
system stays at a reasonable temperature at all times.  You may need
to get a fan for the window or to blow directly on the modems with
outside ventilation -- especially if you don't have air conditioning.
If you put a fan in the window, place it high in the window if you can,
seal the open space around the fan so the hot air doesn't just come
right back in, and blow the hot air up there OUT.  

The San Diego system runs with the PC system unit cover off -- its innards
exposed to the air and with convective air flow through the modems.  This 
system has run pretty much continuously for over a year without a serious 
hardware malfunction even though the office has only a window -- no air 
conditioning.  It isn't all that pretty but it is very reliable.

II.3.  SOFTWARE

To install the FORA software, you will need to have set up your hardware
as described above -- then you will proceed with the following steps:

A) Bring up the FORA system.
B) Set up the System Manager's account.
C) Set the System Manager's address.
D) Set the signon display message.
E) Set the port configuration.
F) Write the newly configured system back to disk.

II.3.A.  BRING UP THE FORA SYSTEM

The FORA software consists of 4 files:

File name        File description
   ||                  ||
   \/                  \/
FORA.EXE         The executable binary for the FORA system.
FBASE.DAT        The FORA database.
FURECS.DAT       The FORA people-base records.
FCONFIG.SYS      The FORA system configuration file.

When installing the FORA software, copy FORA.EXE to a directory which
is in the active "path" command, and copy the other three files to a
blank floppy disk.  This will be your initial FORA data disk backup.
 
To execute the FORA system, log to the drive with the FORA data disk
and type (assuming drive B:):

B>fora

FORA will then read in the data disk.  The system is running when you see:

\\\\\
TO USE FORA
ENTER   FOR
1       300BPS
5       1200BPS
9       2400BPS
/////

This prompt will repeat every 15 seconds or so, letting you know the system
is still running.  To sign on to FORA from the console, press 9 and ENTER.
This will bring up the welcome page.  At the name prompt enter "new":

\\\\\
Enter your FORA name: new
/////

At the password prompt, enter "new" again:

\\\\\
Enter your current password:
/////

The password "new" will not show up on the screen.  This keeps the 
password secure from onlookers.

You will then go directly into "chat" mode.

II.3.B SET UP THE SYSTEM MANAGER'S ACCOUNT

Press the CTRL-R key to enter the system management options.

At the name prompt, enter "new":

\\\\\
Enter the name of the user record: new
/////

Then, you will encounter a series of prompts to fill in the information
about the system manager's account:

Erase the word "new" and enter your own name.
Enter a handle for yourself, if any.
Enter the name of your system (preferably the city name or other
 geographical location).
At the password prompt, erase the word "new" and enter your own password.
Press ENTER to skip past the terminal type prompt.
Press ENTER to skip past the CTRL key alternative prompt (defaults to `).
Press ENTER to skip past the privilege level (should be F).
Give yourself a large account balance, like 10000.
Press ENTER to skip past the giveaways prompt.
Give yourself a large priority like 10.

II.3.C. SET THE SYSTEM MANAGER'S ADDRESS

Press the CTRL-R key to enter the system management options.

Press CTRL-A to edit the system manager's mailing address.

Type in the mailing address you want people to use when sending in
contributions, etc.  You can enter multiple lines by pressing CTRL-L
at the end of each line of the address.

II.3.D. SET THE SIGNON DISPLAY MESSAGE

In the system management options, press CTRL-C to change the signon page
message.  Enter that message (limit of 127 characters) in a manner similar
to the system manager's mailing address.

This message typically says something like this:

\\\\\
To obtain access to FORA call VOICE xxx-xxxx.  Leave your name and number.
/////


Sometimes, you will want to add a second line (with CTRL-L) that says 
something topical for the times like:

\\\\\
***** MERRY CHRISTMAS *****
/////

II.3.E. SET THE PORT CONFIGURATION

In the system management options, press CTRL-P to change the port
configuration.  This is crucial for the proper operation of the
system.  The port configuration associates each port into the FORA
system with a specific I/O address so that the software knows where
to get and put data.  These addresses must be multiples of 8, such
as 2C0, 2C8, 2D0... but they need not be sequential addresses.

For each serial port with a modem on it, you will enter a port number
(from 0 to F) and then an address for that port.  

*** WARNING ***

MAKE SURE ALL UNUSED PORTS ARE SET TO ADDRESS 200 HEX.

II.3.F. WRITE THE NEWLY CONFIGURED SYSTEM BACK TO DISK

When you are finished configuring the system, press ESCAPE until it
asks if you wish to leave FORA.  Answer Y to leave.

At this point, you are ready to write the newly configured system
back to disk.  To do so Press the F1 key and answer Y.

When the system is done writing itself to disk, you will be returned
to the DOS prompt.

You can then restart the system from the new configuration and
you are off and running!


III.  HOW TO MANAGE YOUR FORA SYSTEM AS A BUSINESS

There are a few basic aspects to managing the FORA system as a business:

1) Maintanence
2) Marketing 
3) Policies and their enforcement
4) Legalities
5) Ethics
6) Gatherings

III.1.  MAINTANENCE

System maintanence requires ongoing effort on the part of the system
manager and other comanagers.  There are 3 basic maintanence tasks:

A) Signon maintanence
B) Daily backups
C) Message base organization

III.1.A. SIGNON MAINTANENCE

FORA has no facility for users to create their own signons.  This is
because a basic part of the FORA philosphy is that the use of real names
by everyone provides an atmosphere of greater responsibility for actions
and prevents some of the more grotesque abuses of the media.  It is the 
system manager's responsibility to give the FORA community confidence that
the names used by people on the system are real.  It is, therefore, 
the system manager's responsibility to create signons.

Users can request signons from you via phone on the voice line 
by calling you personally or by leaving a message with their name
and phone number on the answering machine.  It is best to keep a list
of signon requests on file so you can keep trying to get back to them.
See "III.3.  Policies and their enforcement" for details on validation
of new users.

To create a new signon, or to edit or delete an existing signon, enter 
the signon records editor of the system management options (CTRL-R) 
and follow the directions there.

There are 9 prompts to fill in while creating a signon:

i User name
ii) User handle
iii) User location
iv) Password
v) Terminal type
vi) CTRL key alternate
vii) Privilege level
viii) Account balance
ix) Priority

For all prompts, you can just press ENTER to leave it the same as it
is already.

III.1.A.i. USER NAME

Briefly, the prompt for the user name allows you to enter a real
name or an alias (called their "handle") which can appear in
addition to a person's real name.  Upper and lower case are treated
the same.  If there is no one with that name or handle, it asks if
you want to create a signon for that person.  However, if there is
already a person with that name or handle, it will take you into
editing that record.

You can also press CTRL-D after typing a user name to delete the
signon record with that name or handle.

If the signon already exists, or you say you wish to create a signon
for that name, you will be taken to a second user name prompt which
will allow you to correct the spelling of the user name (just
press BACKSPACE to erase any errors).

A user name may not be the same as any other user name or user handle.

III.1.A.ii. USER HANDLE

The user handle is an alias that is similar to the "handle" used by
users of CB radios to identify each other.  This handle is optional
and is mainly there for fun and to let people recognize each other
by their "bbs name" if any.

If no handle is entered, the real name will take its place.  The handle,
however, does not take the place of the real name on the user lists --
it appears along side the real name.  

A user handle may not be the same as any other user handle or user name.

III.1.A.iii.  USER LOCATION

The user location is usually the city that the person lives in.  This
is considered to be PART of the real user name in the sense that the
combination of user name and user location should be enough to distinguish
that individual from others who might have the same name but live in other
locations.  On occasion, it may make sense to make the location be some
organization or company name.

III.1.A.iv.  PASSWORD

The password is used, in combination with the user name or user handle, to 
identify the user when he signs into the system.  It is not case sensitive.

III.1.A.v.  TERMINAL TYPE

The terminal type is, at present, nothing more than an indication of
how "pages" should be turned on FORA -- how the screen should be cleared
and the cursor placed back at the upper left corner of the screen.

There are 4 clear screens provided:

Scrolling ascii (or no clear screen/home cursor)
VT100 (ANSI)
VT52
FORMFEED	(CTRL-L to clear screen/home cursor as with PC-TALK)

The "safest" setting is scrolling ascii (no clear screen/home cursor).
This setting merely inserts a blank line in the scroll whenever a new
page is to be displayed.

III.1.A.vi.  CTRL KEY ALTERNATE

Some users will have a terminal that does not support some or all of 
the CTRL keys.  When this is the case, those users can still generate
a CTRL key by using the CTRL key alternate.  The default for this
key is the ` key.  When ` is pressed, FORA responds by displaying:

\\\\\
CTRL-
/////

and waiting for the user to press another key which will be interpreted
as a CTRL key.  For example, on some terminal emulation programs, 
pressing the CTRL-P key is a way of activating the printer.  A user
who wishes to input CTRL-P to FORA can press:

\\\\\
`p
/////

This will execute the same function as pressing CTRL-P would have on
a normal ASCII terminal.

III.1.A.vii.  PRIVILEGE LEVEL

The privilege level is a hex number from 0 to F (four bits) which
tells the system what this user can and cannot do along the
lines of privileged operations on the system.

These privileges are:

U - unused
M - System managment options (CTRL-R is active)
P - Set privileges for other users (meaningful only if M=1)
K - Kick other users off the system.

Here are the hexidecimal privilege levels and their privilege bits:

HEX code   U M P K  
       0   n n n n
       1   n n n y
       2   n n y n
       3   n n y y
       4   n y n n
       5   n y n y
       6   n y y n
       7   n y y y
       8   y n n n
       9   y n n y
       A   y n y n
       B   y n y y
       C   y y n n
       D   y y n y
       E   y y y n
       F   y y y y

Normally, the only privileges used are 0, 1, D and F.  0 is for normal
users, 1 is for system monitors, D is for comanagers and F is for the 
system manager.  Comanagers cannot edit the system manager's account nor 
can they create privileged accounts.

III.1.A.viii.  ACCOUNT BALANCE

The account balance is the amount of "money" the user has in his account.
This balance is usually expressed in terms of "cents" or "pennies".  When
a user contributes $1, his balance is usually increased by 100, although
any denominations or exchange rate you like may apply.  It is highly
recommended that the "exchange rate" between "FORA pennies" and US pennies
be 1:1.

The account balance is debited as the user stays on the system when
others are being bumped (their connections dropped) to keep a free
phone line.  It is also debited when the user gives money to other
users (which is an option under CTRL-B option B).

When creating a new signon, it is usually a good idea to give the new
user enough of a balance to try out the system without being bumped
for a week or month.  This lets them become familiar with the system,
the other users and lets the other users benefit from the novelty of
new users coming and going.  In the San Diego experience, an initial
balance of 500 has proven effective.

III.1.A.ix.  PRIORITY

The user's priority is used to determine whether he is bumped when the
phone lines all go busy.  It is also the amount that his account balance
is debited when he is NOT the one bumped (assuming he is using the system
at that time).

The person with the lowest priority is the person who is bumped and that
person's balance is unaffected.

When creating a new signon, it is usually a good idea to give the new
user a default priority high enough to try out the system without being 
bumped for a week or month.  This lets them become familiar with the system,
the other users and lets the other users benefit from the novelty of
new people to chat with.  In the San Diego experience, an initial
default priority of 5 to 8 has proven effective.


III.1.B. DAILY BACKUPS

Running daily backups is important for a variety of reasons but on
FORA they are particularly important since all data is stored
in RAM throughout the day and written to disk only at day's end.  Any 
system crash will result in a loss of all changes made since the
last backup.  In a normal timesharing service, this would be totally
unacceptable due the the sensitive nature of much of the data, but
since FORA is primarily a chat system, the stored information is
of secondary importance to the cost of running a fast, and effective
chat service.  Storing all data in RAM helps FORA to support many
users at high speeds at a low cost (on a PC clone with "dumb" serial
ports, modems and phone lines).  In practice, this has proven to be
a good trade-off.  If you have particularly unreliable power in your
area, it is recommended that you spend about $500 on a UPS (uninterruptable
power supply) to ensure that there are no system crashes due to 
power fluctuations.  Most PCs, however, can keep running even after
experiencing significant power glitches.  In San Diego, for example,
there have been several cases where a power glitch that reset the
answering machine, went unnoticed by FORA users.  There have been only
4 system crashes due to power failure during the of operation.

You should usually run backups during a regular time of day when few
users are on the system, since you must take FORA down to run the
backups.

The first thing you do when preparing to run backups is send a 
notification to your users by entering chat and sending a message
to everyone that says something like:

\\\\\
*** SYSTEM GOING DOWN FOR BACKUPS IN 5 MINUTES -- BACK ONLINE AT 1:05AM ***
/////

Before you actually run backups, you may wish to download the FORA
events log if there is some reason you feel it is important to keep
an accounting trail of all charge events and potential security problems.
Keeping such an accounting trail is convenient when you wish to trace back 
what has happened on the system during the day for some reason, but it is
not essential to the operation of the system.  To download the
events log, log onto FORA from a remote terminal (dialed in or
connected into the serial port), enter system management options
and turn on your terminal program's disk logging mode -- then 
press CTRL-E for the events log.  This will send the entire events
log to your terminal and log it to disk.  Downloading the events log 
for a reasonably active day usually takes about 5 minutes at 2400bps, 
so it will be done about the time you are to take the system down.

Next send a message to all saying something like:

\\\\\
*** SYSTEM GOING DOWN FOR BACKUPS NOW -- BACK ONLINE AT 1:05AM ***
/////

Then sign off the system.

Make sure there is a disk in the currently logged drive (the same
drive that was logged when you first brought up FORA).  This disk
should be DIFFERENT from the disk you read in when you brought up
FORA and it should have a paper label on it reading something like:

-----------------------------------
| FORA DATA BACKUP		  |
| 7/4				  |
|				  |
|				  |
-----------------------------------

...or whatever today's date is.  You should keep at least 4 diskettes
in a circular backup queue... in other words, the disk you use to write
out the backup today should be the one with the oldest backup on it.
You should periodically replace these disks with new ones -- like once 
every 6 months.  A good way to tell when you should replace a disk is to
get a big mailing label for it and keep using more and more of the label
for dates (by crossing out the previous one and entering the new one) --
when the label is covered with crossed out dates, replace that diskette
with a new one.

Having warned the users that the system is about to go down for backups,
and ensured that a disk is in the currently logged drive, you can now
press the F1 key to turn FORA off, kicking everyone off the system, and
writing the system to the diskette.  If the diskette fills up (which it
will do when the message base and very full) the system will ask you to
put another disk in the drive and press ENTER to continue.  You can use
another of the backup disks for this and just change the dates on the
labels to something like "7/4a" and "7/4b" to let you know which disk
goes first and second.

When FORA is through writing the database out to disk, it will return
you to the DOS prompt.

You can then do any DOS operations as usual.  Typically, you will just
execute FORA again to bring the system back online.

You may wish to leave the most recent backup diskette in the drive
and use an AUTOEXEC.BAT file that logs the system to that drive
and executes FORA.  This set up allows FORA to bring itself back
online automatically in the event of a power failure or other system 
reboot.

III.1.C.  MESSAGE BASE ORGANIZATION

The message base is organized as an outline of arbitrary depth.  Whenever
a user writes a message, it creates a new entry in the outline.  Sometimes
messages are stored at inappropriate spots in the outline.  You can 
grab incorrectly positioned messages and transfer them to a correct 
position in the outline.

To do this, go to the message, press CTRL-G to grab it, then go to
the appropriate spot in the outline and press CTRL-T to transfer it
and all its descendants there.

Frequently, inappropriate messages need to be deleted.  If there are
no descendants to a message, and no one is reading it, you can delete
it by pressing CTRL-D while reading the message.

The current message base is a "bare-bones" implementation of a more
extensive and easier to use multiuser outline processor that is in
development for FORA 2.0.  This preliminary message base is provided with 
FORA 1.0 mainly as a way for you, the system manager, to post messages 
which users will see when they log on.  

III.2. MARKETING

Marketing is a communications problem and FORA is a communications product.
This provides some synergy in marketing strategy.

The first place you should look for users is in the community of people
who posess computers with modems.  There are three components to this
group in order of priority for startup:

A) Users of other chat systems
B) Users of computer bulletin boards
C) Readers of publications with lists of BBSs in your area
D) Friends, acquaintances and business associates of your users
E) Modem buyers

III.2.A. USERS OF OTHER CHAT SYSTEMS

Your first priority should be the notification of the users of other
chat systems.  

In San Diego, the FORA system sat around with almost no users on it for 
3 months until, within a period of one week, so many new users came onto
the system that all 9 phone lines were busy most of the time in the 
evenings.  What happened?  The user community of another chat system
found out about the FORA system and liked it so much they all descended
upon it at once.  The other chat system did cease to exist, but rumors 
that FORA put it under due to competition are probably false since
San Diego FORA currently coexists with 3 other multiuser chat systems in 
the San Diego area.  In any case, FORA does not seem to suffer in
comparison with other chat systems.  Let their users know about your
FORA system.

If you make contact with such a system in your area, you will probably 
be deluged with users and must be prepared to validate many new accounts 
very rapidly.  Your answering machine and voice line should be set up
and ready to go before you make such contact or you will lose many 
opportunities.

You may even wish to advertise the existence of other multiuser chat
systems in your area on your FORA system.  This has the advantage that
it wins the good will of other system managers and makes it more likely
that they will not censor your attempts to advertise your FORA system
on their systems.  The chat market is a "positive sum game" -- everyone
can win because it is in its growth stage.  The "shakeout" is still years
down the road.  As always, keep in mind that FORA can hold its own against
other chat systems quite well.

III.2.B. USERS OF COMPUTER BULLETIN BOARDS

To notify the users of computer bulletin boards in your area, you 
should compose a simple, one page, announcement on your word processor,
dial up all the major BBSs in your area and upload the message.
It is probably a good time to specify a TIME OF DAY when people should
try to get on to chat with each other -- sometime around 7pm to 9pm.

III.2.C. READERS OF PUBLICATIONS WITH LISTS OF BBSs IN YOUR AREA

Most metropolitan areas have a publication or two specializing in
computer related advertisements.  These publications usually have
a list of computer bulletin boards in the area.  Get your system
put on this list.

The experience in San Diego is that, once the initial run on new
accounts from existing chat systems is through, 20% to 30% of new
accounts come from listings in such publications.  

We had a rather unpleasant experience in San Diego with the local
computer advertising rag resulting in San Diego FORA being removed 
from their BBS list.  You may run across a similar circumstance.  

Here's basically what happened:  A columnist for the rag was 
a personal friend of a local computer bulletin board system
operator.  In my initial announcements about FORA, my intentions
included a networked message base system as well as the chat system.
The columnist's friend was setting up a multiuser BBS with network
capabilities at that time and, apparently, perceived FORA to be
in competition with it.  The columnist gained control of the BBS list for 
the rag, and wrote a review comparing his friend's system against FORA
back to back.  You can guess how the review read.  This created a
backlash among the, rather loyal and enthusiastic, users of the San 
Diego FORA system which then set the stage for something of a "war"
between the columnist and FORA.  Eventually, the columnist gave up
control of the BBS list but as his last shot at FORA, he removed
FORA's entry in the BBS list.  I wrote to the editor of the rag
requesting that the situation be remedied, but received no reply.
That columnist is now editor of the rag, so, of course, any further
appeals to the editor will be met with less than impartial consideration.

The good news is that FORA is strong enough in its own right to 
withstand even this kind of journalistic abuse, as long as you 
pursue the other marketing avenues open to you.  

You can minimize the likelihood of such a fiasco in your area by 
positioning your system, from the outset, as specializing in multiuser 
chat services.  In fact, as will be pointed out later, the "real username"
and "antisocial behavior" policies of the system create a different
atmosphere on FORA.  You can stay out of the way of existing chat 
services which have positioned themselves as "dating" or "sexually
oriented" BBS/chat services.  FORA could be used for such
services, of course, but the San Diego experience, as well as the
observed experience of other chat systems, is that allowing your board
to be identified as a "dating" system puts severe limitations on its 
potential.

III.2.D. FRIENDS, ACQUAINTANCES AND BUSINESS ASSOCIATES OF YOUR USERS

Whenever you get a call to create a new signon, ask the person who
they heard about FORA from.  If they can remember, and specify who
it was, credit some amount ($1 is good) to the account of the person
who referred the new user.  Advertise the fact that you are providing
this incentive to your users frequently.  As is stated later in the 
policies, care must be taken that people don't just go around getting 
all their friends to sign up with FORA, and then have their friends give 
them the "new user credits" which are intended to go toward letting the 
new user become acquainted with the system.

There are many variations on this theme.  For example, if you find
the system overburdened with males, you might provide an added
incentive for recruiting new female users.  If there aren't enough
older users on the system, you might provide an added incentive
to find more older users, etc.

Another interesting approach that worked moderately well on the San
Diego system was to reward users for recruiting contributing users.
In other words, if a user recruits someone who contributes, give
credit to the recruiter in proportion to the contributions received
during the new user's first month or so.  The drawbacks of this
approach are that it can get a little complicated to keep track of
things this way, and also that every time you add credits as
incentives, you must be sure that YOU are getting YOUR money's worth
as system manager.

III.2.E. MODEM BUYERS

Another obvious way to market FORA service is the same way many
of the national information utilities do:  Include credit for free
usage with various communications products -- specifically modems.

This approach hasn't been tested in the San Diego area yet so we
will be learning how to do this along with you.  It is, however,
a rather obvious way to go.  

Here is an idea:

Contact various modem distributors and retailers in the area.  
Distributors are best since there are usually fewer of them and
they can hit most of the retailers with their modems.  Ask them
if they would like to package a coupon for your service with 
their modems.  After you have a few prospects, you can then
go to just about any printing shop and have about 500 to 1000
fliers printed (less than $100 even if you get really nice paper
and some graphics art work done).  On each flier, put a description
of your system, how to obtain an account, and a coupon for $10.
It would help to have serial numbers on the coupons, but it isn't
absolutely necessary and it does raise the cost of printing 
substantially.  Deliver these fliers to the distributors/retailers
for distribution with their modems.

A related strategy may work with communications software packages,
etc.

Come up with your own marketing ideas!

Let us know how you do!

III.3. POLICY

FORA policy is the set of "rules" that govern your management of the
user community.  For the most part, these rules are intended to avoid
the pit-falls that await you as you allow a diverse group of people
into your electronic livingroom to socialize.  

General words about threats to the community:  Like any social gathering,
you will have the occasional "obnoxious drunk" or other antisocial type
who must be dealt with.  There are those who are much more sophisticated
in the way they destroy the atmosphere of the community.  Unfortunately, 
there are even people of a criminal bent -- those who would prey upon
the user community.  Although the obviously antisocial types are most
common, they aren't the greatest threat to your community.  And while
the criminals are quite damaging, they fall under the authority of the
law enforcement agencies, so they are easily dealt with by making them
"someone else's problem".  

Of all the threats, the most destructive and most difficult group
to deal with are the sophisticated antisocial types.  They will sow seeds
of distrust, ill will and hostility among the users for their own sick
"reasons" -- and they will usually do so with some subtlety.  When you
impose and enforce the draconian measures needed to deal with them, they
will be the first to scream "Witch hunt!" and they will have a ready cadre
of followers to support them in their "righteous cause."  Usually, these
individuals are people who contribute little or no financial support
to the system.  They are at a pubescent stage of emotional/mental
development.  They feel they have some constitutional right to do 
anything they like in your electronic livingroom.  When you disallow
this behavior, they will try to convince the other users in the community
that they were acting very reasonably and that the community is in danger
of the abuse of your authority, etc.  

The key thing to remember, here, is that your FORA system is like your 
home.  The users on the FORA system are your guests and you are 
responsible, indeed, LIABLE for maintaining the environment in a reasonable 
state.  

You will be called upon to exercise authority.  You will make mistakes in 
judgement.  There will be times when you need to apologize to your user 
community.  Some individuals will capitalize on these mistakes and try to 
cripple your system.  These are simple realities of being a human in a 
position of authority and responsibility.  If you aren't prepared to handle 
them without going off the deep end, you had better let someone, who can, 
run your system.

Most important of all, when you are trying to maintain your community,
you must abide by your own rules.  Whether you like it or not, you are
an example for your users.  You should hold yourself to a standard of
conduct commensurate with your responsibilities.

There are a few major catagories of FORA policy that have served the
San Diego system well:

A) Real names
B) Dealing with antisocial behavior
C) Dealing with criminal behavior
D) Accounting
E) Meta Enforcement


III.3.A. REAL NAMES

The lynch-pin of the FORA community is the use of REAL NAMES ON THE SYSTEM.  
"Real names" are names, nicknames or other legal aliases used by individuals
in the community at large.  The real name should be sufficient, along with
the location of the individual, to allow an investigator to track down
an individual engaging in illegal conduct.  NOTE:  It does not have to be
EASY to track the individual down -- it must merely be feasible to do so
given sufficient cause.  Note also that phone numbers, addresses and other
personal information are NOT stored on the FORA system -- nor should they be
available to anyone but the system manager.  Even a law enforcement agency
should be prevented from going on a "fishing expedition" through your 
database of personal information on your users.  (In one exemplary case
of cooperation with the San Diego Police Department, I was able to have
various users volunteer to come forward with information about a murder
in the San Diego area, which they had obtained through a chat with the
murder suspect on the night of the murder.  The police department was
patient, grateful for the leads and did not impose a search warrant.
This was all done with strict confidentiality and with the informed 
consent of everyone including parents in the case of minors.)

The primary draw-back of this policy is that some women may find it
threatening to provide enough information about themselves that they
could be located.  What they must understand is that when they walk down
the sidewalk, or drive down the freeway, they are in much greater danger
of being followed home and assaulted than they are by simply communicating
with other individuals WHO ARE THEMSELVES IDENTIFIED.

In the entire year of San Diego FORA's operation, we have not had one
reported case of assault or harrassment of a female by another user as 
a result of their real name being used.  A female cosystem manager, on the
other hand, did receive some annoying phone calls from a user who found
her phone number in the phone directory.  These were calls intended to
activate her call waiting and drop her connection to the FORA system.
This is a general problem system managers and comanagers have with users 
who are kicked off the system or otherwise disciplined.  It goes with the 
territory and does not appear to be a problem for females, per se.

A justifiable cause for fear is that the individuals one is communicating
with are not using a real name that would allow them to be tracked down
if they do begin engaging in damaging behavior.  This is why the real name
policy must be enforced and that the user community must have confidence
in it.

There are a few specific ways the real name policy should be enforced:

i) User validation
ii) Giving incentive to be honest
iii) Detecting when a signon has been stolen

III.3.A.i) USER VALIDATION

When a new user requests a signon, they will typically call you on the
phone and leave a message on your answering machine with their name and
phone number where they can be reached.  When you return the call, ask
for them by the same name they gave you.  If the person hesitates, as
if they didn't know who that was before responding, raise your caution
flag.

When you have their name, ask who referred them to FORA.  If they hesitate
in giving the name of the person when you ask for their real name, or if
they give you a name you don't recognize, raise your caution flag.  If
it was from some article they read or some BBS or they just don't remember
who it was, don't raise your caution flag.

Ask what city they are from.  Try to get a specific answer.  For example,
if this is a Los Angeles area system and they live in Santa Monica, they 
should say "Santa Monica" rather than "Los Angeles".

Ask if they would like to use a handle, and make it clear to them that
their real name will always be visible to other users along with their
handle.

Ask them for a password.

If you recognize their voice, handle or their password but not their name,
raise your caution flag.

If they seem to be consulting someone else while talking to you,
raise your caution flag (ie: strange pauses before answering questions,
or whisperings in the background while you are talking to them).

Ask them for their phone number.  Do not accept a BBS number.  A work
number is acceptable or a voice number at home.  Ask them how that number
is listed in the telephone directory.

If they say their number is unlisted, and you have already raised your
caution flag, inform them that they will need to send in a photocopy of
their drivers-license, passport, military or school ID BEFORE you can
give them access to the system.  If you have NOT already raised your
caution flag, however, tell them to send in the ID within ONE WEEK,
create their signon and keep an eye on them.  You MAY wish to go so
far as to set their "location" to say "Unvalidated" until you get
their ID.

If the they give a name for the listing of the phone number, go ahead 
and let them on without demanding ID up front.

Always check for the listing with the telephone directory.  If it matches, 
then you might do a call-back to verify that person is, indeed, at that 
phone number.  If it does not match, turn off their account until you 
do a call-back verification and resolve the matter.  It is best to wait
a while before doing a call-back to ensure that the person isn't calling
from a phone that they do not have regular access to.

If they have no government issued picture ID, then ask them for the
name of their bank and their bank account number.  If they have no
back account, then they are almost certainly a minor and you should ask
them to have their parents send in a Xeroxed ID with permission for their
child to use the system.  If they are not a minor, then they are probably
lying to you or they are part of an illegal underground and you should 
deny them access.

It is not necessary or even desirable to keep user addresses.  You may,
for the purposes of future enhancements to the FORA system, choose to
ask users for their date of birth.  At present, there are no "sections"
on FORA which would require verifying that a user is of a certain age
to be admitted, although this may be the case in the future.  If you do
ask for date of birth, and have no documentation to back it up, you 
should make a note of that fact.

III.3.A.ii. GIVING INCENTIVE TO BE HONEST

There are two policies concerning incentives for honesty in the use
of real names:

a) Penalty for being caught using a fraudulent name
b) Reward for helping identify people using fraudulent names

III.3.A.ii.a) PENALTY FOR BEING CAUGHT USING A FRAUDULENT NAME

Here is the way I stated it to my users:

\\\\\
If you come forward with information that you have about others who
have been using FORA under an assumed name, I will not take any action
against you even if you were involved in promoting the dishonesty.

If you come forward with information that you, yourself, have been using
FORA under an assumed name, I will not take action.

Either way, the user community will be informed of the correction in
the name.
/////

Here is a related policy:

\\\\\
If a person who has been denied access to the system uses your signon,
your signon will be deactivated until you have been notified of this
fact and you have changed your password.  The second time this happens
your access will be suspended indefinitely.
/////

III.3.A.ii.b) REWARD FOR HELPING IDENTIFY PEOPLE USING FRAUDULENT NAMES

Here is the way I stated it to my users:

\\\\\
If you provide information leading to the identification of people
using fraudulent names on FORA, you will receive $5 credit, unless
you were involved in the fraudulent situation.  If the information does 
not identify who was actually using the fraudulent name, no reward is 
offered.
/////

III.3.A.iii. DETECTING WHEN A SIGNON HAS BEEN STOLEN

The events log (CTRL-E in the system management options) includes
"inuse" entries.  Whenever you see an "inuse" entry, it means that
more than one person posess the password for a signon being used on
FORA.  Unless there is a known explanation for this, the signon should
be immediately deactivated until the person who has legtimate access
to the account contacts you and is revalidated with a new password.

If they had simply given out their password to a friend to try out
FORA, inform them that trial signons are available, along with free
credit to get acquainted with the system.

III.3.B. DEALING WITH ANTISOCIAL BEHAVIOR

Since FORA 1.00 has one "room" for everyone to be in at once, and
the only person who controls who is in that room is the system manager,
there have to be some rules of etiquette to keep things from turning
into fights, obscenity, monologues and other degenerate "conversations".

In general, the simplest rule is this:  All participants must behave 
with reasonable etiquette at all times, just as though they were
together, in person, with a room full of people who they may or may not
know.

Enforcement of this rule should be particularly severe when the behavior
is offensive to women.  In cases where it is difficult to detect
because the women leave the FORA community without complaining first,
you must take particularly draconian measures -- such as permanent
account deletion of the offensive individual.  If three women make
independent complaints about a given individual, you can be pretty certain 
the individual has driven off several other women who didn't complain.
Encourage women to report such offensive behavior by letting them remain
anonymous.  This, of course, requires some good judgement on your part
to make sure that individuals aren't making capricious complaints.  This 
is usually obvious if someone is complaining about several others and no 
one else is complaining about them.

III.3.C. DEALING WITH CRIMINAL BEHAVIOR

There are various levels of criminal behavior.  The policy message
displayed to users when they signon to the FORA system states that
FORA is not a haven for criminals of any kind.  This includes such
"innocent" crimes as conspiring to violate software copyrights for
personal use.

Sometimes it is easy to see that laws are being violated.  Other times
it is difficult to judge.  It is not your job, as system manager, to
judge when laws are being violated.  If you believe that a criminal
law may have been violated, contact the police, tell them what you
think is going on and cooperate with them in every way.  In general,
if you are cooperative with the authorities, they will not demand 
information from you that they do not need.  They will be grateful
there is someone on their side of the law with ethics and will treat
you with the respect and discression that you deserve.

Unless the authorities ask that you allow the individual to continue
in their behavior so that they can gather evidence, you should delete
their account immediately upon learning that they are, indeed engaging
in illegal behavior.  Normally, if there is a question about the legality
of a person's behavior, it is a good idea to at least suspend them until
you find out for sure, and then, if it is not specifically illegal, let 
them know that traveling so close to the edge of the law is a detriment 
to your system and will not be tolerated.  

III.3.D. ACCOUNTING

The legalities of accounting will be addressed later.  Suffice it to say
you must keep records of all contributions.  These are taxable income and 
should be reported to the Internal Revenue Service.  In addition, keep 
records of who referred so you can reward folks who are pushing your system.
The system software debits accounts automatically, but you must update
the user record of each individual who contributes to reflect that 
contribution.

\\\\\
If you need pennies in your account, you can ask me, or one of the other
cosysops, to credit your account in advance of your contribution.  If you
do this, however, you are required to send in a contribution within a week.

The limit on advanced contributions is $5.

PS:  The cosysops are ... etc.
/////

If someone fails to pay within the week, suspend their access until payment
is forthcoming.  Do not accept "payment" in the form of reducing their
FORA account balance by an equivalent amount, since this encourages people
to use "emotional blackmail" against others when asking for them to give
them FORA pennies via the system (CTRL-B option B).

There are ways the incentives for new users can be abused:

\\\\\
There is scam that is against policy:

You refer a friend to FORA.
Your friend gets the 500 free pennies to get acquainted with the system.
You get the 100 pennies for referring him/her.
Your friend then gives you most or all of his/her free pennies.

The real problem here is that this rewards people to the tune of $6 for each
person they refer to FORA who will not end up using FORA.  The "fine" for
this is triple the amount you received from the new user signon.  In other 
words, if you got $1 from the new user signon, you must pay $3 to be allowed 
back on the system.
/////

III.3.E. META ENFORCEMENT

A "meta enforcement" policy is stated as follows:

\\\\\
If you are caught making it look like someone else is violating FORA policy
(including this one) in order to have them penalized, you will be permanently
deleted from the system with no chance for reinstatement.
/////

This policy is a bit tricky to enforce.  Many times there will be honest
disagreements about what constitutes violation of FORA policy.  Particularly
where there is personal animosity between some individuals, you will find it
very difficult to discern whether people are actually acting with 
premeditated dishonesty with intent to have someone else penalized.  Go 
easy on enforcing this policy if you have any doubt.

III.4. LEGALITIES

It is usually pretty easy to stay within the law when running a FORA
system.  All you have to do is set up a business and run the accounting
and paper work the way you would run any very small, low overhead, 
business:

A) Setting up a business
B) Accounting and paper work

III.4.A) SETTING UP A BUSINESS

You will most likely want to set up a sole proprietership with a
ficticious name.  You can just call up your local city government
and ask how to obtain a business license.  Usually, this involves
going down to city hall, filling out some forms, checking to make
sure no one else is using your desired ficticious name (a name for
your business other than your own), paying a small fee and then
publishing an announcement of your new business and its ficticious
name in some local newspaper for a specified period of time.

You will probably NOT need a sales tax license number (or "resale
permit") UNLESS you wish to sell modems to your users.  If you do
choose to sell modems (or other products) to your users, you must
obtain such a number from your state government.  Again, this is
a matter of contacting your state government (there is probably
an office in your town or city) and asking them what you must do.
It is usually simpler than obtaining a business license.

III.4.B. ACCOUNTING AND PAPERWORK

You will need to keep records of contributions as personal income
for tax purposes as well as the monthly bills for rent, utilities
and miscellaneous expenses.  You might even want to pay one or two
hundred dollars or so for a tax accountant at the end of the year
to go over your records.

REMEMBER THE STRICTURE ON SMALL BUSINESSES EVERYWHERE:

               "DON'T TEASE THE EAGLE"

While the cash flow through your little enterprise is likely to
be much too small for Uncle Sam to pay much attention to it, you
are not likely to get away with cheating on your taxes if and when
your system grows into a real business with many phone lines.  Start
building good habits from the start.  

III.5 ETHICS

As system manager, you must adhere to some "policies" of your own that
govern your behavior with respect to your privielges and responsibilities.
These are simple business ethics and they involve, mainly, treating your
users as respected friends:

a) Respect the privacy of your users
b) Avoid personal entanglements
c) Don't play favorites based on "friendship"
d) Choose first rate cosysops

III.5.a.  RESPECT THE PRIVACY OF YOUR USERS

As system manager, you will be privileged to information that must
be kept private.  Try to make clear to your users what information
is to be kept confidential and what information is to be made public.

FORA has no "snoop" option to allow the system manager to look at
private communications.  Those potential system managers who would
like to snoop on private conversations are encouraged to purchase
one of the other multiuser chat systems that are available on the
market.

III.5.b.  AVOID PERSONAL ENTANGLEMENTS

This ethic is as difficult to describe precisely as it is to abide by.
Basically, the idea is to keep your personal life separate from your
responsibilities as system manager as much as possible.  

Particularly, as a person in a privileged position, you should be aware
that you will have more options open to you than many others for social
interaction with people on the system.  If you take advantage of this
privileged position to advance yourself socially (especially if at the
expense of others) you will find yourself losing the respect of your users.



III.6 GATHERINGS

FORA is a good way for many diverse people to get together and seed
relationships of ALL kinds, business, romantic, avocational, religious,
political, etc.  But seedlings outgrow their starting pot.  Many times, 
people will choose to gather in person.  Some of these gatherings will be 
one on one and others will be groups.  Most of gatherings should be 
completely independent of the system manager and they should be encouraged.

There is, however, a need for an "official" gathering.  Experience helps
in managing such meetings.  Here's my advice:  Set up one periodic gathering
in the evening around 7pm to 8pm where you are in control.  Invite only
individuals who you know to be reasonable and polite.  Make it at a centrally
located pleasant restaurant with a bar and with moderate prices -- 
not cheap or expensive.  Notify the management that you wish to have a 
PRIVATE PARTY with right to refuse to admit anyone who might come in
from off the street.  Enforce good standards of etiquette and do not
hesitate to exclude anyone who behaves in an impolite manner.  Tip
the waiter/waitress at 20% to make sure you have a bank of good will to
draw on with the establishment.  Use it sparingly but do not hesitate to
use it when your gathering is threatened by people who you may have to
exclude for various reasons -- ie:  be friends with the bouncer.  As the
system manager, you should try to always attend or have a representative
of yours attend to collect contributions toward the support of the system.

As you might expect, this advice is based on some hard experience:

In San Diego, there grew up, quite spontaneously, a weekly gathering of all
FORA users.  I started out actively avoiding responsibility for the
gathering -- letting it just sort of "happen" according to the desires
of the user community.  We outgrew the Denny's restaurant that had been 
initially chosen, and were forced to another near by restaurant which had 
a back room that could accomodate the crowd.  The gathering rapidly grew in 
size to an attendance of almost 70 each week.  The gatherings started
to get out of hand.  Naturally, in such a large crowd, there are going to be
a few rowdies and other people who are, to put it politely, impolite.  There
appeared to be a clear division between the teens and the adults, although,
there were a few adults who managed to alienate other adults by violating
their personal space and being generally obnoxious.  Eventually, the teens
split off into another group at a near by pizza place.  Unfortunately, this
split happened at the same time that the restaurant management decided
that the income being generated by the gatherings didn't justify the use of 
the entire back room plus the incidental costs of having a crowd that drew 
in rowdy individuals.  We were refused exclusive access to the back room and 
the whole gathering moved to the pizza place which allowed a more youth-
oriented atmosphere.

By this time, the meetings had become a primary source of revenue for the
FORA system.  People found it very convenient to attend the meeting and
just pay some cash or hand over a check on the spot rather than going to
the trouble of mailing a letter.  Other FORA business could be dealt with
at the gatherings as well.  This made the gatherings a tempting target
for some very antisocial individuals who had been excluded from FORA.
Since the gatherings were not private parties, there was no basis to exclude
these individuals.  Eventually, the antisocial types began showing up and
disrupting the gatherings more and more by pushing the limits of the 
establishment just enough to drive away more reasonable FORA users (those
who are most likely to contribute) but not enough to call in the police and
be done with it.

I finally resolved to establish a reasonable gathering which I would be
in control of, based on what I had observed in the prior gatherings.  I
started by selecting a few individuals who I knew to be mature and interesting
adults, and inviting them to a centrally located restaurant/bar, making it
clear that this was an invitation-only private gathering.  The gathering
required a bit of promotion, but the idea of an "elite" gathering had a
lot of appeal and people were happy to be invited and began to attend
quite eagerly.  The gatherings started out slow, at about 5 to 10 people
for the first few weeks, but then grew rapidly.  So far there has been
only one instance where I had to tell someone they were not welcome back.

Many of those who were not invited continued to go to the pizza place,
but that gathering eventually died off due to the antisocial element.
The "Hey, dude, let's PARTY!" teens eventually established their own 
gatherings at appropriate places.

IV)  ACKNOWLEGEMENTS

Among the many people who contributed to the creation of FORA, a few
deserve special recognition:

Steve Freyder, for applying his exceptional comprehension of deep system 
work to solidifying the design of FORA's unique and highly efficient 
terminal driver;  Terry Friedrichsen for writing the initial memory 
management subroutines and for setting up a prototype FORA system at L5 
Society Headquarters in Tuscon, AZ;  Andy Cutler for being more than generous
with his advice and swift kicks to the rear during the development of
FORA policy;  the users of the San Diego test system -- especially those 
who contributed more to the supported of FORA than most, simply because they
believed in it; my family for their continuing support;  and Sylvia Kaliss 
for seeing me and this work through the most trying times.

V)  ERATTA

A number of problems are known to exist in FORA version 1.0:

1) Character drop
2) DTR reset failure on hangup
3) Console keyboard mode error
4) Console keyboard overflow

V.1.  CHARACTER DROP

Occasionally, while typing, FORA will not receive a key.  This is a
problem with the terminal driver's interface to the UART chip that is
being investigated.  It does not appear to be a conventional software
error and may, in fact, be due to an early verion of the RS232 chip
used in many RS232 ports.  Investigations are underway with a board
manufacturer to determine the precise location of the problem.  

PS:  It should be noted that the FORA terminal driver is probably the
only one of its kind ever designed.  It uses the hardware according to
specifications, but in ways that would probably uncover design errors
in the hardware not detected by other drivers.

V.2.  DTR RESET FAILURE ON HANGUP

Occasionally, a modem will not reset and will hang up with DTR off and
not respond to incoming calls.  This problem appears likely to be related
to the character drop problem.  The system will reset the modem if no
calls come in for 5 minutes on that line.  If the system is in heavy use,
it may be necessary to disconnect the phone from the modem in such a state 
until the system resets that modem.  When the DTR LED goes on, the modem is
reset.

V.3. CONSOLE KEYBOARD MODE ERROR

Occasionally, the keyboard will go into a state where it thinks the CTRL
or SHIFT key is always depressed.  To get out of this state, simply hold
down the CTRL or SHIFT key and press an alpha key.  A known solution to
this problem in the software is known and is planned for the next release.

V.4. CONSOLE KEYBOARD OVERFLOW

If the console keyboard is pounded too rapidly, thus building up a buffer
of keys, the ROM BIOS of the IBM PC attempts to beep.  Unfortunately, the
FORA terminal driver doesn't leave much time for the BIOS to execute its
timing loop for the beep and this can result in the system slowing down
or even halting until the beep is completed.  The fix for this problem is
the same as the fix for the keyboard mode error problem.  To avoid this
problem, don't pound on the console keyboard.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0948

     Volume in drive A has no label
     Directory of A:\

    FBASE    DAT       163   1-01-80   1:10a
    FCONFIG  SYS       496   1-01-80   1:10a
    FILES948 TXT      1150  12-16-87   8:58a
    FORA     DOC     77086   1-01-80  12:01a
    FORA     EXE    117872   8-15-87   9:48p
    FURECS   DAT       130   1-01-80   1:10a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-11-87  10:38a
            8 file(s)     197552 bytes
                          118784 bytes free
