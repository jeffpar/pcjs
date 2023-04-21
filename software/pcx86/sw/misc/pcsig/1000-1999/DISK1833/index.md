---
layout: page
title: "PC-SIG Diskette Library (Disk #1833)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1833/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1833"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SAPPHIRE"

    Each brand of BBS suits a different kind of sysop. SAPPHIRE is
    specifically designed for stores, computer consultants, customer support
    lines, people who have never run a BBS before, and people who have run a
    BBS before and found it too much work.
    
    SAPPHIRE is very easy to set up and maintain. A moderately experienced
    computer user will set it up in less than an hour and spend
    approximately one hour per week performing the various duties required
    of a sysop.
    
    SAPPHIRE's design is quite flexible, so you can modify it to look the
    way you want. Multi-line systems are not supported by Sapphire. This
    is in keeping with the "install-and-forget" design of the system, but it
    does mean that Sapphire won't suit everyone.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1833.TXT

{% raw %}
```
Disk No: 1833                                                           
Disk Title: Sapphire                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sapphire                                                 
Author Version: 1.1                                                     
Special Requirements: 512K RAM, two floppy drives or a hard drive, and a
                                                                        
Each brand of BBS suits a different kind of sysop.  SAPPHIRE is         
specifically designed for stores, computer consultants, customer support
lines, people who have never run a BBS before, and people who have run a
BBS before and found it too much work.                                  
                                                                        
SAPPHIRE is very easy to set up and maintain.  A moderately experienced 
computer user will set it up in less than an hour and spend             
approximately one hour per week performing the various duties required  
of a sysop.                                                             
                                                                        
SAPPHIRE's design is quite flexible, so you can modify it to look the   
way you want.  Multi-line systems are not supported by Sapphire.  This  
is in keeping with the "install-and-forget" design of the system, but it
does mean that Sapphire won't suit everybody.                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```








                                S A P P H I R E



                        A COMPUTER BULLETIN BOARD SYSTEM





                                 Release: 1.10






                               Operator's Manual








                       P I N N A C L E   S O F T W A R E

                       P.O. Box 386, Town of Mount Royal
                       Montreal, Quebec, Canada  H3P 3C6

                                 (514) 345-9578


































                                    NOTICES

This publication could include technical  inaccuracies or typographical errors.
Changes are  periodically made to the information herein; these changes will be
incorporated in new editions of this publication.

Version 1.x of  Sapphire is distributed as  shareware.  Shareware terms  do not
extend to the  source code of Sapphire, nor to later versions, nor accessories,
unless they are declared as shareware by Pinnacle Software.

You may try  out Sapphire for 30  days.  If you  continue to use it  after that
time, you must register it.  ($45)

Sapphire is Copyright (C) 1988 by Pinnacle Software.
Turbo Pascal is a Trademark of Borland International.
DSZ is a Trademark of Omen Technology.
ARC is a Trademark of System Enhancement Associates.



Support for Registered Sysops



The Sapphire release number follows this pattern:

                    Version Number   Upgrade Level     
                                 |   |                 
                                 1 . 1 0 A             
                                      /   \            
                     Correction Level       Internal ID

A registered Sapphire owner is entitled to operate any release of Sapphire with
the same  Version and Upgrade Level, and  the same or different  Internal ID or
Correction  Level.   Thus,  corrections to  the  program ("bug  fixes") can  be
obtained at no cost.

Additional benefits of registration are described by the REGISTER program.



Support for Unregistered Sysops



If you  are an unregistered  Sapphire operator, you may  call Pinnacle Software
for assistance if  you can  not complete the  basic installation  successfully.
But  you may be  able to save  yourself long-distance charges:   experience has
shown us that  95% of  all installation problems  can be solved  by the  advice
given in the trouble-shooting section of this manual.



ii












Credits



The following people have contributed to the Sapphire project:

Programming and Design ................... Tim Campbell
Marketing and Design ..................... James Ludwick
Beta-testing ............................. Yves Lacombe, Steve Mitchell

Thanks also to staff members for dedication above and beyond the call of duty:

Secretarial Services ..................... Lily Wilson
Mail Room ................................ T. Toc
Software Librarian ....................... P. Katt






































                                                                            iii












TABLE OF CONTENTS



NOTICES . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  ii
     Support for Registered Sysops
     Support for Unregistered Sysops

INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1
     What is Sapphire?
     What Isn't Sapphire?

INSTALLING SAPPHIRE . . . . . . . . . . . . . . . . . . . . . . . . . . . .   3
     What You Need
          Hard and Floppy Disk Considerations
     Basic Steps
     STEP 1.  Make a Copy of the Packaged Diskettes
     STEP 2.  Prepare a Place for the Files to Go
     STEP 3.  Put the Files Where They Belong
     STEP 4.  Updating the CONFIG.SYS File
     STEP 5.  Customize Sapphire According to Your Needs
          Saving Time on the Customization Step
     STEP 6.  Run a Local Test
          Extra Step for Floppy Diskette Users
     STEP 7.  Run a Remote Test

TROUBLE-SHOOTING  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   8
     Problem 1.  Installer Error
     Problem 2.  Modem Configuration
     Problem 3.  File Problem
     Problem 4.  Sapphire Bug
     Problem 5.  Incompatible Hardware and Software

SYSTEM OPERATION  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
     Duties of the System Operator
     Signing On Locally
     Signing on as SYSOP
     Function Keys
     Backups
     User File Maintenance
     Message File Maintenance
     Library Maintenance
     Files Maintenance

MISCELLANEOUS OPERATIONAL NOTES . . . . . . . . . . . . . . . . . . . . . .  18
     Gear Shift
     Customization
          SLOGO.TXT; Other .TXT Files; Command Levels
     Password Changes
     The Status Line
     Online Validation and Banishment
     Yoo-Hoo and Rename

                                       ii













MEMBER PRIVILEGES . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
     Level 1:  Non-member
     Level 2:  Basic Member
     Level 3:  Special Member
     Level 4:  Top Notch Member
     Level 5:  Inner Circle Member
     Level 6:  Aide-de-Sysop
     Level 7:  Co-Sysop
     Level 8:  Sysop

DOORS AND EVENTS  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  26
     Definitions
     Applications for Event Processing
     Applications for Doors Processing
     Coding Your Batch Files
          How EXTERNAL.BAT Works; Batch Templates
     Writing Door and Event Programs

FILE TRANSFER . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  30
     What is File Transfer?
     Installing File Transfer
     Adding Software Locally
     Adding Software Remotely
     How Online Documentation Works
     Transfer Protocols

APPENDIX A -- ORDERING INFORMATION  . . . . . . . . . . . . . . . . . . . .  33
     Additional Products from Pinnacle Software

APPENDIX B -- SAPPHIRE DESIGNER NOTES . . . . . . . . . . . . . . . . . . .  35
     Some Background
     Why Sapphire was Written
     Notes About the Design Philosophy
          Commands;  Maintenance;  40  Column  Text; The  Cool  Reception;
          Conclusion

APPENDIX C -- Versions 1.1 and 2.x  . . . . . . . . . . . . . . . . . . . .  40
     Thank-You

INDEX . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  41












                                      iii












INTRODUCTION



What is Sapphire?



Sapphire is a computer bulletin-board system.  You can use it to transform your
computer into  a kind  of "answering  machine", so  that  people equipped  with
modems can dial up your computer,  read and send messages, browse through  text
files, and exchange software.

There are countless BBS's (bulletin board systems) throughout the world.   Many
are run  by businesses; most  are run by computer  hobbyists who like  to share
with others the enjoyment they derive from their hobby.

All  you need to  become a "sysop"  (system operator) is an  IBM-PC computer or
compatible, a modem, and a phone line dedicated to the BBS.

There are many different brands of BBS software available; Sapphire is just one
example.   Each brand  of BBS suits  a different  kind of  sysop.  Sapphire  is
specifically designed for:

     -- Stores
     -- Computer consultants
     -- Customer support lines
     -- People who have never run a BBS before
     -- People who have run a BBS before and found it too much work

Sapphire  is  very easy  to  set up  and  maintain.   A  moderately experienced
computer user will set it up in  less than an hour and spend approximately  one
hour per week performing the various duties required of a sysop.

There are many ways to design a BBS.  This system has been designed in the form
of a  "conversation club".  Thus, instead of  having "users", a Sapphire system
has "members".

Nevertheless, Sapphire's design is quite flexible, so you can modify it to look
the way you  want.  If you  don't like the "club"  image, you can change  it to
something else.












                                       1












What Isn't Sapphire?



That might  sound like  a strange  question, but  we've already discussed  what
Sapphire can  do, so let's take  a moment to discuss  what it won't  do.  Maybe
this will save a few hours of your time!

But before we go further, let me ask you to think about this question:

                         Why do you want to run a BBS?

Sapphire  is (according to a survey  I've conducted) by far  the easiest BBS to
install  and operate.   This makes  it ideal  for the people  mentioned earlier
(store managers, consultants, new or over-worked sysops, etc.), but there are a
few things that could make this system inappropriate to your needs.

First of all, Sapphire  is very different from other  BBS's.  If you are  a new
sysop, you may  feel that you should  run a BBS that  looks like all the  other
ones.  If that's the case, I ask you to try Sapphire for a month.  Find out how
easy it is for both you and your users.  Then ask somebody who runs another BBS
how much  time he or she spends every week  "maintaining" his or her system, or
how many  users have mastered every function of the BBS.  I believe you'll find
this experiment informative.

For  a  discussion of  Sapphire's  revolutionary  design, refer  to  Appendix B
(Designer Notes).

There  is one kind of  sysop who will  not want to  run Sapphire.   That is the
power-sysop.

The power-sysop is somebody who runs  either a multi-line system (which is  not
supported by  Sapphire) or  a BBS supporting  hundreds of  users and  dozens of
message-base  areas.   Sapphire  simply  does  not address  the  needs  of such
systems.   This  is  in keeping  with  the "install-and-forget"  design of  the
system, but it does mean that Sapphire doesn't suit everybody.

















                                       2












INSTALLING SAPPHIRE



What You Need



To run Sapphire, you need a PC-compatible computer with at least 512K of RAM, 2
floppy disk drives  (or a  hard disk  -- which  is recommended)  and a  "smart"
modem.  If you don't have a smart modem, you can still run Sapphire  in "local"
mode.

Sapphire will run on MS- or PC-DOS Version 2.00 and higher.


Hard and Floppy Disk Considerations


If you install on floppies, the maximum size of a message will be 27 lines, and
the upload/download function (whereby your computer can receive and send files)
will not be available.   If you install on a hard disk (i.e.  no Sapphire files
are on the A: or B: drives), messages may have up to 50 lines. 



Basic Steps



What follows is a brief description.  More details are given later.

To get Sapphire running on your system, you must follow these steps:

1.   Make a backup copy of the original diskette.

2.   Prepare a destination for the Sapphire files.

     A.   If using a hard disk, this  means creating a directory, usually named
          Sapphire.

     B.   If using floppies,  this means formatting  two diskettes -- one  with
          DOS and one without.

3.   Copy the necessary files from the original diskettes to their proper place
     (on a hard disk or a floppy).

4.   Prepare your system for Sapphire  by placing a FILES=20 statement  in your
     CONFIG.SYS file.

5.   Configure Sapphire to work according to your wants and needs.  The SCONFIG
     program helps you do this.

                                       3













6.   Run a local test.  The  SAPPHIRE LOCAL  command will do this.

7.   Run a remote (modem) test.  The  SAPPHIRE  command does this.



STEP 1.  Make a Copy of the Packaged Diskettes



1.   Insert  the SAPPH111 diskette  into your A:  drive.  Insert  a blank, for-
     matted diskette into your B: drive.

2.   Enter the following DOS command:

          COPY A:*.* B:*.*

3.   Prepare a label, reading BACKUP OF SAPPH111 and affix this to the diskette
     from the B: drive.

4.   Repeat steps 1 to 3 for the SAPPH112 diskette.



STEP 2.  Prepare a Place for the Files to Go



FLOPPY DISK USER

     1.   Format a diskette with DOS and label this Sapphire A.

     2.   Format a diskette without DOS and label this Sapphire B.

HARD DISK USER

     1.   Change to the root directory of your hard disk.

     2.   Enter the command  MD Sapphire  to create a directory. 













                                       4












STEP 3.  Put the Files Where They Belong



FLOPPY DISK USER

     1.   Copy all files from the SAPPH111 diskette to the Sapphire A diskette.

     2.   Put the Sapphire A disk in drive A: and the Sapphire B disk in the B:
          drive.

HARD DISK USER

     1.   With the SAPPH111 diskette  in the A:  drive, change to the  Sapphire
          directory of your hard disk.

     2.   Enter the following DOS command:

          COPY A:*.*

     3.   Insert the SAPPH112 diskette into the A: drive.

     4.   Enter the following DOS command:

          COPY A:*.*



STEP 4.  Updating the CONFIG.SYS File



Sapphire keeps quite a few  files open at once, so you will have  to use a text
editor (such as the  Turbo Pascal editor, or Wordstar in  non-document mode) to
modify or create a file called CONFIG.SYS.

FLOPPY DISK USER:  The file will go on your  Sapphire A  diskette.

HARD DISK USER:    The file will go in your root directory (C:\ usually).

The file should contain the following lines:

     FILES=20  
     BUFFERS=20

In order for  the CONFIG.SYS information to  take effect, you must  boot from a
disk containing that file.  Remember:  the file is read only when you  power up
your  system.  Sapphire won't work if you  boot ("power up") from a floppy that
doesn't have the proper CONFIG.SYS file.

For more information about CONFIG.SYS, see your DOS manual.


                                       5














STEP 5.  Customize Sapphire According to Your Needs



At the DOS prompt, enter this command:  SCONFIG

This command  will take  you through  all the  steps needed  to configure  your
system.  Select  the "First-timers" checklist on  the menu.  After  you've read
through that, select the "Total Configuration" option.  This must be run in its
entirety before you try to run Sapphire.


Saving Time on the Customization Step


Initially, the system is set up as a "conversation service" named "The Pinnacle
Club".  If this is appropriate to your requirements, feel free to use the  name
and the text files.  However, if you have other plans for your Sapphire system,
you can modify the various TXT files to conform to your needs.



STEP 6.  Run a Local Test



Make sure your time and date are set correctly, then enter this command:

     SAPPHIRE LOCAL

This runs Sapphire without any reference to the modem.

The first time you run Sapphire, it will create some data files.  This can take
a while --  especially on floppy-based systems.   Once that is  done (hopefully
without severe errors) you  will see the words "Awaiting Visitor".   This means
everything is functioning properly.

If you'd like to  sign on now, refer to the "System  Operation" section of this
manual.    If you  want  to move  to  the  remote test,  press  the ALT-F9  key
(explained later) to shut down Sapphire.

If  you had  any  problems, refer  to the  "Trouble-Shooting"  section of  this
manual.








                                       6












Extra Step for Floppy Diskette Users


Once you're  satisfied that the program basically works (although you might see
some messages about missing files), you can delete the SCONFIG.EXE file to make
room on the Sapphire A diskette.  Don't delete  it if it's your only copy!  You
should have made a spare  copy in Step 1.  Once you've done this,  you can copy
all the files from SAPPH112 onto the Sapphire A diskette.



STEP 7.  Run a Remote Test



You can start up Sapphire with full modem support by typing the command:

     SAPPHIRE

If this gives you any problems, refer to the "Trouble-Shooting" section of this
manual.
































                                       7












TROUBLE-SHOOTING



In order of likelihood, the most common problems are:

     1.   You omitted a step or misunderstood the instructions.
     2.   The modem isn't configured right.
     3.   There is a file problem of some kind.
     4.   Sapphire has a bug.
     5.   The hardware is incompatible.



Problem 1.  Installer Error



I  apologize  for  listing you  as  the  most probable  cause  of  the problem.
However,  the fact  is:   most installation problems  arise because  the person
doing the  installation has  either skipped  a step  or  didn't understand  the
instructions.

Please review what you have done, or ask somebody else to re-read the  instruc-
tions.  Statistically,  this really does  give you the  best chance of  solving
your problem.



Problem 2.  Modem Configuration



If  you had a problem running Sapphire in  LOCAL mode, then your problem wasn't
the modem; skip this section.

If you have a Hayes-compatible modem, with Hayes-compatible switches, make sure
your switches are set this way:

     Switch 1 UP:   Computer should use the Data Terminal Ready (DTR) line
     Switch 2 UP:   Result codes sent as words
     Switch 3 DOWN: Result codes are sent to the computer
     Switch 4 UP:   Echo incoming characters
     Switch 5 DOWN: Don't answer incoming calls
     Switch 6 UP:   Computer should use the Carrier Detect (CD) line

The positions  of switches 7 and 8  are variable, depending on  your phone type
and your modem  brand.  Consult your modem's manual to determine what should be
done with these switches.




                                       8












Some modems don't  have DIP  switches; you  have to configure  the modem  using
commands.  In this case, you will have to accomplish with commands what we were
trying to do with  the switches.  You will find that your modem has commands to
perform the  important functions  of  switches.   For Hayes-compatible  modems,
these  commands  are preceded  by the  "&"  character (&C1&D2  being  the usual
values).

If you have an  external modem, are you sure  that pins 8 and 20  are connected
from one end of the cable  to the other?  These are, respectively,  the Carrier
Detect and Data Terminal  Ready signals.  Sapphire can operate  without the DTR
signal  (see the  SCONFIG  program) but  it's  best to  have  it available,  if
possible.

When Sapphire talks to the modem, you should see something like this:

Modem:  ATS0=1                              Response:  OK

If you see something like this:

Modem:  ///////                             Response:  <TIME-OUT>

...it means Sapphire can't see your modem.  Check in SCONFIG to  make sure that
you specified the write COM port.  Or if you have an internal modem, check that
it's really on the COM port you think it's on.

If you see something like this:

Modem:  ///////                             Response:  OK

It means  that your  modem is  seeing the  command and  accepting  it, but  not
echoing back the characters.  Check your modem set-up  string to make sure that
you've told  the  modem to  echo.   (Since  the first  command sets  the  echo,
sometimes it will be displayed as slashes; this is normal.)

If you see nothing whatsover  -- not even "Modem:" -- it means  that your modem
has  the  CD (Carrier  Detect) line  locked  on.   Sapphire  won't try  to send
commands to a modem that supposedly has a carrier there, since a carrier  means
there's a caller  at the other end.   If your modem has  dip-switches, set them
correctly (described above).  If your modem  uses & commands, you will have  to
get into a terminal  program (such as ProComm, Boyan, QModem,  Telix, etc.) and
type the command to unlock the CD line.  This command is typically AT&C1.

Some other kinds of modem problems can be fixed by experimenting with the modem
settings configured by the SCONFIG program.

By the way, some  computers and modems just can't survive  running 24 hours per
day.   If your system occasionally  crashes, try turning  it off for an  hour a
day.   It may be necessary  to install a cooling  fan in the  computer unit and
remove the back panel of the modem.

Never  overlook the obvious.   If you  have strange modem  problems, check your
cables and so on.  Is everything plugged in solidly?

                                       9















Problem 3.  File Problem



If you suspect  you have some  kind of file  problem, ask yourself these  ques-
tions:

1.   Did you put FILES=20 in your CONFIG.SYS  file?  If you did this, you  must
     re-boot your system for this new value to take effect.

2.   Are all the required files are available to Sapphire?  Did you specify the
     correct drive  and/or directory when providing the file path data with the
     SCONFIG program?

3.   If you're using  floppies, do you have  the right floppies in  the drives?
     Neither should have a write-protect tab.

4.   Is it possible you  inadvertently deleted a file?   If you did, get  a new
     copy from the installation disk.

If  you get I/O errors, you can look them up  in a copy of the manual for Turbo
Pascal Version 4.0.  This might help you solve difficult problems.



Problem 4.  Sapphire Bug



If you think you've spotted a bug in Sapphire, send us a letter describing  the
problem.   The most  important thing you  can do is  make it happen  on demand.
That is to say, before  you report a problem, try to understand  it well enough
to make it happen on purpose.

To assess  a problem,  I appreciate  getting as  much information as  possible.
Send us information such as:

1.   What do you think causes the problem?
2.   How often does it happen?
3.   Does it happen to everybody or just certain people?
4.   Did it start just recently or has it always happened?
5.   If it just started, what changed just before it started?
6.   What have you done to try to solve the problem?

Print-outs and screen-dumps can be helpful in assessing a problem.

IMPORTANT:     It may  be over-stating  the case,  but if  you are  reporting a
               problem, you really do have a better chance  of getting a useful
               answer if you provide us with answers to the numbered questions,

                                       10












               above.  Take a moment to note down the answers before calling us
               or writing to us.  It'll save time in the end.



Problem 5.  Incompatible Hardware and Software



Sapphire  has  run problem-free  on  a  wide variety  of  computers, with  many
different brands  of modem.   I've heard  very few complaints  about incompati-
bility.    However, it  is possible  that certain  types of  modems (especially
internal modems) might  not behave properly.   If you  suspect your modem,  try
borrowing another brand for a while.

There can also be  problems with multi-tasking software.   The Sapphire  serial
routines are poll-driven rather than interrupt-driven.  What this means is that
if you're running multi-tasking  software, your users may lose  characters when
they type.   I plan to  address this drawback  in a later version  of Sapphire.
For the vast majority of systems, however, this is not a problem.

If you let me know  what is going wrong, I'll try to fix  Sapphire to work with
your hardware.






























                                       11












SYSTEM OPERATION



Duties of the System Operator



The user-name for the  System Operator is:  SYSOP.   You can also sign  up with
your real name and give yourself permanent sysop authority.

As the  sysop,  your main  task  is to  "validate"  (grant membership  to)  new
members.  You do this with the VALIDATE command.

You should  also backup  your files  from time  to time,  using the  DOS BACKUP
command, or a similar product.

If you have run other BBS's before,  you may be expecting that there are  other
duties to perform, such as maintaining upload/download lists, compressing files
and so on.

But you don't have to do  any of that.  Sapphire handles everything  automatic-
ally.   Your only tasks are Validation  and Backups.  And as  you'll see later,
even the Validation task is far easier than for other BBS's.



Signing On Locally



When Sapphire  is waiting for  a caller, press  any key.   This will  "wake up"
Sapphire and freeze out the modem by putting it "off-hook".  You can then  sign
on as if you'd dialed up.

If you don't  want your phone  off the hook,   you can start  up Sapphire in  a
non-modem mode.  At the DOS prompt, type:

   SAPPHIRE LOCAL 

This completely ignores anything to do with the modem.












                                       12












Signing on as SYSOP



The information presented below is based  on the default set-up.  For  security
reasons, the  password shown here  should be  modified (using the  BYE PASSWORD
command) as soon as possible.

1.   Wait until Sapphire is waiting for a visitor.
2.   Press a key to wake it up.
3.   When asked for your name, press Space-bar, then Return.
4.   When you're asked for the password,  type  SYSOP  then Return.



Function Keys



The function keys  are active whenever somebody is connected.  Here's what they
do:


REGULAR FUNCTION KEYS 

F 1  Function-key help.

F 2  Enable Yoo-Hoo.  Makes a noise when a specified person shows up.

F 3  Removes 10 minutes online-time from whoever is connected. 

F 4  Adds on 10 minutes online-time  to  whoever is connected. 

F 5  Enable/Disable the type-to-sysop (CHAT) command.

F 6  Break in to chat with the person who is currently online.

F 7  Not used.

F 8  Not used.

F 9  Modify number-of-hours-between-calls

F10  Sound effects on/off.









                                       13













ALT FUNCTION KEYS

F 1  Turn printer on and off (uses LPT1).

F 2  Freeze out the  person on the modem.   You do this if you want  to enter a
     few quick commands on  his behalf but don't  want him to see what  you are
     typing.  Press ALT-F2 to restore communication.

F 3  Subtract 1 from the membership level of the person who is signed on.

F 4  Add 1 to the membership level of the person who is signed on.

F 5  Announce  mode on/off.   In announce  mode, nobody can log  on.   All
     people get to see is your sign-on logo.  Handy for announcements.

F 6  Send file.  This is used to transmit a text file -- usually while chatting
     with  a remote user.   This  function duplicates  exactly the  normal file
     transmission, so you can't use it while the user is already reading a file
     or a message.

F 7  Changes the name  of the visitor  to one that you  specify.  The  new
     name is checked to prevent duplication.

F 8  Instant banishment.  Removes visitor from valid caller list.

F 9  Shut-down.   If nobody is signed  on, Sapphire ends immediately.   If
     somebody is logged on, Sapphire will end when he or she logs off.

F10  Turn Ultra-Mode on  or off.   Ultra-Mode is a  kind of  "Super-Sysop"
     mode.  While in this mode, a user may...

     Execute commands of any level
     Send any number of messages (usual limit is Level + 3 SENDs per visit)
     Use the CHANGE command on somebody else's message
     Read private messages
     Call back in less than the usual time (Level 6+ can always do this)
     Skip around a devalidation message at signon and proceed normally

     The user named SYSOP is automatically in  Ultra-mode.  Other users -- even
     other Level 8  users -- must have  it turned on explicitly  by the ALT-F10
     key.  When ALT-F10 is pressed, a long, raucous sound is emitted  from your
     computer's speaker.   This tends to discourage people from hitting the key
     "by accident".

     Do not get the  impression that the existence of Ultra-Mode  allows you to
     give out Sysop (Level 8) authority lightly.  You should reserve that level
     for  yourself only.   However,  if you  would  prefer to  respect people's
     privacy, you could sign up with your real name, then use the ALT-F4 key to
     bring  yourself up  to Level  8.  Ultra-Mode  can then  be used  only when
     absolutely necessary.


                                       14














Backups



Perhaps the most  important thing a  sysop can  do is make  backups!  The  most
important file, which should be backed up on a regular basis, is the user file,
which is named:

                                   SUSER.DAT


When  making backups,  it's a good  idea to  have a "father"  and "grandfather"
copy.   You can do this easily with a batch (.BAT) file.  Here's a sample batch
file for backing up the user list:

          ECHO OFF 
          ECHO Backing up Sapphire User List file to A: drive
          DEL A:USERBAKC.DAT
          RENAME A:USERBAKB.DAT A:USERBAKC.DAT
          RENAME A:USERBAKA.DAT A:USERBAKB.DAT
          COPY C:\SAPPHIRE\USERLIST.DAT A:USERBAKA.DAT 
          DIR A:USERBAK*.DAT

You may also wish to backup the messages, but this is not as critical.  (If you
have the time, it is still  a wise move.)  If you decide to do  this, the files
to be backed up are:

          -- The message-pointer file SNEXT.DAT
          -- The message-index file STIME.DAT
          -- The B* files in the message directory (e.g. B001)



User File Maintenance



The user file does not require maintenance.  It will hold up to 350 user names,
which has proven to be more than enough for a lively BBS.  

NOTE:     If you require a  larger user base, please contact  Pinnacle Software
          for a special edition of Sapphire (priced separately).

When a new user signs up, Sapphire looks for  an inactive user to replace.  The
higher the level of the  member, the longer it takes  for him to be  considered
inactive.  Here are the required call-back times:





                                       15












               Level   Time-Out (Days)  Member Level Description
                 1           10         Non-Member
                 2           50         Basic Member
                 3           60         Special Member
                 4           70         Top Notch Member
                 5           80         Inner Circle Member
                 6           90         Aide-de-Sysop
                 7          100         Co-Sysop
                 8          110         Sysop

Note that this is only the time after which a user is eligible for replacement.
If there are no  new sign-ups to replace his name on  the list, his user-record
can remain valid forever.

The user named SYSOP is never eligible for replacement.



Message File Maintenance



The message files do  not require maintenance.  Sapphire maintains  225 message
files.   When  the last  one is  used up,  the first  one is  replaced, thereby
"deleting" the oldest one.

All  messages share  the same space.   There  is no  way to preserve  a message
permanently.  If you have something you want to keep available for a long time,
insert it into the library directory as a .TXT file and tell the members to use
the LIBRARY command to review it.

If you really must get rid of  a message, use Sapphire's ERASE command.   There
is no need to use DOS DEL or ERASE.



Library Maintenance



The Sapphire Library does not require maintenance.

Any .TXT file that  appears in the Library directory will appear on the Library
list.   The 39-character description  of each article  is taken from  the first
line of each file.

Thus, you can add to the Library simply by copying text files into the  Library
directory, and remove  articles using the DOS  DEL command.  For  your members'
convenience,  you  might sort  the  directory  in reverse-date  order,  using a
utility such as Norton's DS command.



                                       16













Files Maintenance



The files (upload/download) collection does not require maintenance.

Sapphire maintains a list of 500 uploads.  When the list is  full, programs are
dropped  from the  list and  deleted  from the  file directory  according  to a
formula based on:

          (A)  Number of times the file has been downloaded
          (B)  How many days have elapsed since the last request
          (C)  How many days the file has been on the list

In other words, Sapphire will identify and replace the least popular file.

NOTE:  For more information, see the "File Transfer" section of this manual.



































                                       17












MISCELLANEOUS OPERATIONAL NOTES



Gear Shift



Sapphire supports adjustable output speed.  During output, a user can press one
of the number keys to "shift gears"  for a comfortable reading speed.  The keys
run from  1 (slow) to  9 (fast).   The 0 key  is the "top  gear" key.   It sets
output speed to maximum.

When the main command prompt comes up, output is reset to full speed.  This has
proven to  be  a convenient  arrangement.   However,  the  user can  reset  his
"default gear", via the  SPECS command.  Certain  types of line-noise  problems
have been solved by selecting a lower output speed.



Customization



There are  several files that  you can modify  to your  taste.  If  you're just
beginning, you  can skip this  -- but  come back to  this section after  you've
finished your initial experimenting.

To modify these files, you will need a text editor.  The  standard EDLIN editor
is an example of a  text editor.  You can also use the  Turbo Pascal editor, or
Wordstar in non-document mode.  Most word processors have a "Text" or "DOS Text
File" mode.

In technical terms, a text editor is any editor that marks  separate lines with
a "Carriage Return" character and marks the end of a file with a "Control Z".  


SLOGO.TXT


You can modify the  SLOGO.TXT file to specify a 20-line  banner that your users
will see at connect time.  You can mention the name of your BBS in this banner.
The names "Pinnacle Club" and "Sapphire" do  not appear anywhere in the program
itself (except for the version and copyright notice).

However, I  strongly encourage you  to call  your system  "The Pinnacle  Club".
That way, people already familiar with  the software will know what to  expect,
and may even seek out your system because they like the way it works.

The SLOGO.TXT  file contains a helpful  collection of sign-on logos,  which you
can modify to your needs, using a text-editor program.


                                       18













Other .TXT Files


The other text files,  such as SINFO.TXT, SNEWH.TXT etc., contain straight text
for  the members to  read.   You should read  them yourself;  you'll learn what
they'll learn and  you'll spot any changes  that must be made,  such as address
and system-name information.


Command Levels


You may modify the command  levels by altering the files SCMDL.DAT with  a text
editor, or you can  delete the file to use the default settings.  Make sure you
have a backup copy before you delete it.



Password Changes



There is an undocumented feature in Sapphire which allows users to change their
passwords.  If you sign  off by typing BYE PASSWORD (no abbreviations) you will
be asked for a new password.

This  feature was  not explicitly  documented because  there has  long been  an
argument among  computer security  experts about  the wisdom  of letting  users
change (or even select) their passwords.

It might be best  to keep the BYE PASSWORD  feature secret if you give  users a
new password when you validate them.  Or perhaps you'll decide to avoid letting
them change their  password simply because they  tend to forget what  their new
password is.

Whether or not you let your users know about this feature is up to you.



The Status Line



The top  two lines  of the Sapphire  screen provide  you with  some information
about what is going on.  The top line lists  membership level, time left, state
icons (explained later), and the  last item that went in  the system log.   The
second line lists the member's sign-on name and full name, phone number.

The  state icons  are single-character indicators.   You  can think of  them as
on/off lights, if you wish.  Here's what they mean:


                                       19












Downwards-pointing triangle:  The  ALT-F9 key was pressed to put  the system in
"shutdown  mode" and  will be closed  when it  next disconnects (i.e.  when the
current visitor logs off).  Memory aid:  points downwards to mean "going down".

Infinity symbol (sideways 8):  Ultra-mode is on.  This is turned on and  off by
the ALT-F10 key.  Memory aid:  "The infinite power of Ultra-mode is available."

Diamond:  The system is waiting for somebody in particular to show up.  You can
specify a list of names by pressing the F2 key.  Memory aid:  the people in the
list are highly prized.

Happy  face:   People  who use  the  CHAT command  will be  placed  directly in
conversation,  instead of seeing an "unattended"  message.  Memory aid:  you're
in a good mood, so you'll talk to people.

Question mark:   the current  user entered the  CHAT command to  try to get  in
touch with  you.  The  CHAT spell makes  a noise if  you have sound  turned on.
Memory aid:  "Hello?  Sysop?"

Exclamation mark:  You pressed the ALT-F6  key to put the system into "announce
only"  mode.  People  will only see  the SLOGO.TXT data  before getting discon-
nected.  Memory aid:  "Hear ye, hear ye!!!"

Double-note:  Sound  is on.  Turn it  on or off with the F10  key.  Memory aid:
music is sound.

Triple-line:  Printer is active.  The printer (which should be connected to the
parallel port LPT1) is turned on or off by the ALT-F1 key.

These icons may take a while to get used to, but before long, you'll be able to
tell at a glance what's happening on your system.



Online Validation and Banishment



ALT-F7 and ALT-F8  will validate or banish  the current visitor.   However, the
ALT-F7 key does not  update the file  until the member  disconnects, so if  you
have a system crash,  the file will still reflect  the old value.  In  general,
all data  affecting a member's current session is  lost if your system crashes,
since  the members  information is  written only  "on the  way out".   For this
reason, it is not possible for somebody to banish himself!



Yoo-Hoo and Rename





                                       20












If you intend to  run a BBS  that does not tolerate  aliases, but insists  that
people use real names, the combination of F2 (Yoo-Hoo) and ALT-F7 (Rename) will
prove useful.

When you press the Yoo-Hoo key, you will be prompted to enter a list  of names,
separated by slashes.  For example, you might enter:

             Dagger Lord/The Wombat of Love/Power Petunia/Superstar

When somebody signs on under  any of the indicated names, Sapphire  will make a
distinctive noise to alert you.

You can then  break in  (using F6 --  Chat) and  tell the person  that you  are
changing his sign-on  name to his real name.  This  can be done with the Rename
key.  The Rename  function will not allow you to change the name to an existing
name.   Thus, if  you already  have a  John on  your system,  you can't  change
somebody else's name to John.




































                                       21












MEMBER PRIVILEGES



There are 8 "security levels" on Sapphire, ranging from level 1 (Non-member) to
level 8 (System Operator).

This  section describes  the original set-up  for member  privileges.   You can
change these settings by altering the SCMDL.TXT file.  These settings  are also
used if SCMDL.TXT is missing.



Level 1:  Non-member



May post in:        Non-member message base.

Commands:                COMMAND   DESCRIPTION OF COMMAND                 
                         BYE       Disconnect  from  system  (i.e. logoff)
                         HELP      Display a list of commands  you can use
                         INFO      Membership requirements for this system
                         SEND      Leave a message for other users to read
                         SPECS     Change the way things  look around here
                         VERSION   Display  software version and copyright

Comments:           Note the absence of the READ command.



Level 2:  Basic Member



May post and read:       Non-member and Basic member message bases.
May post in:          Feedback to Sysop message base.
May read:             Report from Sysop message base.















                                       22












Additional commands:     COMMAND   DESCRIPTION OF COMMAND                 
                         EXPERT    Switch  between  casual and expert mode
                         GIMMICKS  Describes various  tricks  for messages
                         GRAPHICS  Switch  graphic  characters  on and off
                         HINTS     Tricks and tips  for using  this system
                         LIBRARY   Browse and read  in our  online library
                         MESSAGES  Quick summary of messages (time & user)
                         NAMES     Specify names  for  selecting READ etc.
                         PROTOCOL  Select  method  used for  file transfer
                         READ      Read  new messages  left by other users
                         REVIEW    Inspect a single message by DATE:MINUTE
                         RUN       Run special external programs ("Doors")
                         SET       Modify the DATE:MINUTE for READ command
                         TEXT      Specify text to reduce READ output etc.
                         TIME      Display how much time is left for visit
                         USERS     Display  information  about  our  users



Level 3:  Special Member



Additional base:         Special Member.

Additional commands:     COMMAND   DESCRIPTION OF COMMAND                  
                         ACTIVITY  Display system activity for past 7 days
                         CHANGE    Modify a message you've sent previously
                         FILES     List software available for downloading
                         GET       Get some software  from our  collection
                         GIVE      Contribute software  to our  collection
                         MOVE      Move a message from one base to another



Level 4:  Top Notch Member



Additional base:         Top Notch.

Additional commands:     COMMAND   DESCRIPTION OF COMMAND                 
                         CHAT      Page system operator for a conversation
                         OBSERVE   Overview of logon/logoff activity, etc.

Comments:           Note  that  lower-level  members,  when  doing  the   USERS
                    command, see  Top Notch members  listed as "Special".   Top
                    Notch messaging is hidden from lower levels.





                                       23












Level 5:  Inner Circle Member



Additional base:         Inner Circle.

Additional commands:     None.

Comments:           Lower-level members,  when doing  a USERS  command, see  an
                    Inner  Circle  member  listed only  as  "Special"  (or "Top
                    Notch", in  the case  of Level  4 members).   Inner  Circle
                    messaging is hidden from lower levels.


Level 6:  Aide-de-Sysop



May post in:             Report from Sysop.

Additional commands:     COMMAND   DESCRIPTION OF COMMAND                 
                         ERASE     Remove message  (resets it to time 0:0)

Comments:           This level  of authority allows  people to keep  the system
                    tidy without having access to personal member  information,
                    such as phone numbers.



Level 7:  Co-Sysop



May read:           Feedback to Sysop.

Additional commands:     COMMAND   DESCRIPTION OF COMMAND                 
                         BANISH    Devalidate user (remove from user list)
                         DOORS     Update  your  list of  "Door"  programs
                         DOS       Shell out to DOS; type "EXIT" to return
                         DUMBTERM  Start dumb terminal  for outgoing calls
                         EVENTS    Schedule your BBS's  close-down  events
                         PROBE     Display user info  (see also USERS cmd)
                         VALIDATE  Grant a user  a higher membership level

Comments:           At  this  level,  the  USERS  command gives  more  detailed
                    information, such as password and phone number.  A co-sysop
                    can run the entire  system remotely.  He can  not, however,
                    find out the sysop's password.





                                       24












Level 8:  Sysop



May post in:        Logon Announcements.

Additional commands:     COMMAND   DESCRIPTION OF COMMAND                 
                         CLOSE     Shut down system; prevent further calls













































                                       25












DOORS AND EVENTS



The highly  technical information  presented in  this chapter  is addressed  to
experienced sysops  only.   If you are  new to the  joys of sysoping,  it would
probably be best, for the time being, to avoid the DOORS and EVENTS commands.

Sapphire will function  perfectly well without  DOORS and EVENTS installed,  so
you can safely skip this chapter and come back to it later.


Definitions



Doors and events are both instances where the Sapphire program ends and control
is returned back to DOS.  In the case  of a door, the shut-down is initiated by
a  user;  for  events, the  shut-down  happens  automatically,  according to  a
schedule you set up.



Applications for Event Processing



Consider the following batch file.  (Note that the <-- arrow and following text
are comments, not part of the batch file.)

     REM Batch File Autoback
     :START                             <-- A batch file "label"
     SRUN                               <-- The main Sapphire program
     COPY SUSER.DAT A:SUSER.DAT         <-- Copy the user list
     GOTO START                         <-- Start over again

If you could arrange  to have the BBS come  down every night at 3:00,  it could
make a spare copy of the user list on the A: drive.  This would be very useful,
although of  course you'd have  to make  sure that  the A: drive  always had  a
floppy inserted and ready to go!

Set up in  this way, you could  leave town for  a long weekend, confident  that
your user list was being backed up every day.

This is  only  a very  simple  example of  the  benefits of  event  processing.
Another  possible application  is automatic  dial-out via  your  favourite com-
munications program (to pick up mail, perhaps).  Of course, you'd have to write
a "script" (i.e. a program that your comm program understands) in order to have
it dial out, sign on, pick up the mail, then return to DOS.

One very common use for  event processing is to support network systems such as
Fido -- a very complicated topic beyond the scope of this manual.   

                                       26















Applications for Doors Processing



A door is an  external program that a user  can run from Sapphire.  (It  is, in
effect, a "door" into programs written by other people.)

There  are dozens  of  door programs  available.   One  example  is the  Pyroto
Mountain gaming  system, which was written by Pinnacle  Software.  You can call
it as  a door,  giving your members  a chance to  play this intriguing  game of
magic and politics.

Before making a door available to your members, you should review it carefully.
The quality of door software varies greatly; some may crash, thereby failing to
return to DOS and consequently taking your BBS "off the air".



Coding Your Batch Files



In an environment using doors and  events or both, everything is tied  together
with batch (.BAT) files.   (For detailed information about batch files, consult
your DOS reference manual.)

The  simplest kind  of batch file  was illustrated  in the  "automatic userlist
back-up" example shown earlier.   This was a just  a loop, executing one  func-
tion.  One problem, though ... you'll note that  there was no way to get out of
the loop!  So it wasn't a particularly useful program.

If you want  to call Sapphire  from any  directory, put a  batch file like  the
following one (which you  could call S.BAT) in  one of the directories  in your
PATH:

     ECHO OFF                      <-- Stop display of batch lines
     C:                            <-- Change to the right drive
     CD \SAPPHIRE                  <-- Change to your Sapphire directory
     SAPPHIRE %1 %2                <-- Jump to batch file SAPPHIRE.BAT











                                       27












SAPPHIRE.BAT is a batch file that comes with Sapphire.  It looks like this:

     ECHO OFF                      <-- Stop display of batch lines
     SRUN %1 %2                    <-- Start up Sapphire
     EXTERNAL                      <-- Jump to batch file EXTERNAL.BAT

This batch file must be in the directory where SRUN.EXE resides.

The %1 and %2 after the SRUN allow  you to pass parameters to Sapphire, so  you
can start up the batch file with  SAPPHIRE LOCAL  to run without a modem.


How EXTERNAL.BAT Works


Don't look for a file named EXTERNAL.BAT in the Sapphire package -- there isn't
one.  EXTERNAL.BAT is created whenever Sapphire ends.

If  Sapphire  is shutting  down  because you're  closing  it  (using the  CLOSE
command, for example),  EXTERNAL.BAT will be empty.   As a result,  you'll drop
straight through to the DOS prompt.

For  doors  and  events,  however,  Sapphire  copies  other  batch  files  into
EXTERNAL.BAT.  So whatever was in those other batch files will get executed.

But how does this get us back to Sapphire?

Sapphire  copies  the other  batch file  into  EXTERNAL.BAT, then  appends some
additional instructions, as in this example:

     C:                  <-- Switch to Sapphire's "home" drive
     CD \SAPPHIRE        <-- Switch to Sapphire's "home" directory
     SAPPHIRE            <-- Jump to the SAPPHIRE.BAT batch file

And thus, the circle is completed.

Of course, the  extra instructions may  vary, depending on  where your copy  of
SRUN.EXE resides and the way you started up Sapphire.


Batch Templates


You will use the DOORS and EVENTS commands to specify which batch files will be
copied to EXTERNAL.BAT.   We will call  these files "Batch Templates",  because
although they end in .BAT, they are never actually run directly.

You can write  the templates without regard  to what happens after  the program
ends, because that's taken care of when Sapphire copies them to EXTERNAL.BAT. 

NOTE:   A template must  not call another  batch file,  unless that batch  file
contains the code to get back to SAPPHIRE.BAT.

                                       28













Here's an example.  To call up the PYROTO door, you could write a template file
named PYROTO.BAT, which looks like this:

     C:                            <-- Make sure you're on the right drive
     CD \PYROTO                    <-- Change to the Pyroto directory
     PYROTO /DOOR                  <-- Start up the program



Writing Door and Event Programs



When Sapphire  calls a  door or event,  it always  creates a  file in the  root
directory of the drive containing Sapphire, named:

                                  SAPPHIRE.DAT

This file contains important information for doors  and events.  If you plan to
write door or event programs, you'll need access to this data.

Turbo Pascal source-code,  describing the layout of  the file, can be  found on
the SAPPH112 diskette, under the name SDOOR.INC.





























                                       29












FILE TRANSFER



The highly  technical information  presented in  this chapter  is addressed  to
experienced sysops only.  If you are a new sysop, it would be best to avoid the
PROTOCOL, GET, GIVE, FILES and DUMBTERM commands, for now.

Sapphire will function  perfectly well without file-transfer installed,  so you
can safely skip this chapter and come back to it later.



What is File Transfer?



With Sapphire's file-transfer feature  installed, you will be able  to exchange
software with  people who  dial  into your  system, using  the popular  XMODEM,
YMODEM and ZMODEM protocols.

Sapphire maintains a list of the 500  most popular programs (providing there is
enough space on your hard disk), along with statistics and documentation.

The file-transfer feature requires  a system equipped  with a hard-disk with  a
minimum of 1 Megabyte free space.



Installing File Transfer



In order to enable file-transfer (XMODEM, YMODEM  and ZMODEM), you must install
several files, as follows:

---  The file-transfer program  (DSZ.COM) must be  copied to the main  Sapphire
     directory  (usually named  C:\SAPPHIRE).   This will  enable the  DUMBTERM
     command,  even  if  the rest  of  the  file-transfer  installation is  not
     completed.   To  extract DSZ.COM  from  the DSZ  archive file,  enter  the
     command:  ARCE DSZ

---  The SAPPH archive files (SAPPH112 and  SAPPH112) and the file SAPPHIRE.S-D
     (from  SAPPH112)  must be  copied to  the  files directory  (usually named
     C:\SAPPHIRE\FILES).

Once  these files are in place, Sapphire will  create the files listing as soon
as you use GET, GIVE, PROTOCOL or FILES.





                                       30












Adding Software Locally



To add a file to the software collection while you are at the console, you must
first  place  it in  the  files  directory (usually  named  C:\SAPPHIRE\FILES).
Sapphire's DOS command comes in handy, here.

Afterwards,  use the GIVE command.   For example,  if you'd added  a file named
PYROTO.ARC, you would then enter this command:

==> GIVE PYROTO.ARC

You'd then be asked who  this file is for (everybody, sysop, etc.),  then asked
to write some documentation about the file.   (This step is described later, in
more detail.)



Adding Software Remotely


A remote user  follows essentially the  same steps as a  local user, though  he
must first upload the software using one of the available protocols.   (XModem-
Checksum, XModem-CRC, YModem, ZModem).

As  a reward for contributing software, he is granted "double-your-minutes-back
for this visit and the next".  For example,  if it took him 10 minutes, he gets
an extra  20 minutes for the current visit, plus  20 extra minutes for the next
session.



How Online Documentation Works


After contributing a file, the contributor may write up to 48 lines of documen-
tation, which other people will  be able to read before deciding whether or not
to download this file.

Online  documentation  that has  already  been written  can  be  re-used.   For
example, if you're making available a multi-file software package, you can tell
Sapphire to use one documentation file for all of the files.

Incidentally, if one of those software files is deleted, the documentation file
is retained -- as long as some other file is using it.

The documentation  step uses  the usual text  editor that  you use  for writing
messages.   No new  skills need  be learned.   In  fact, you  can even  include
private and exclusive messages in your documentation.



                                       31












The documentation  is saved in  the files  directory, in a  file with  the same
root-name as the original file.   For example, a file named VARITALE.ARC  would
have a documentation  file named VARITALE.S-D associated with  it.  (S-D stands
for Software Documentation.)   If you don't like the documentation  that a user
has written, you can copy some better documentation over the S-D file.  All S-D
files are standard text files, prepared with a text editor.

Of course, if  several files point at  the same documentation file,  they won't
all  share  its root-name.    The  SAPPH111  &  SAPPH112 files  both  the  file
SAPPHIRE.S-D.  As Sysop, you can use the  FILES comand to change which documen-
tation file a software file uses -- although this will rarely be necessary.

Proper online documentation makes any file-transfer system much more efficient,
because people won't end up spending hours downloading things they really don't
need.  Encourage your members to write enlightening documentation!



Transfer Protocols



The YModem supported by  Sapphire is proper YModem, per the  original specific-
ation.   Some  very respectable  communications programs  confuse the  protocol
XModem-1K with YModem.   If your  users complain that  YModem doesn't work  for
them, suggest they switch  their communications program from YModem  to YModem-
Batch.

This version of Sapphire does not support "batch protocols" such that users can
upload  or download  several files  with  one command.   This  feature  will be
supported in another version, if there is a demand.






















                                       32












APPENDIX A -- ORDERING INFORMATION



There are two ways to order from Pinnacle Software:


BY PHONE: Pinnacle Software accepts  Visa and MasterCard for orders  of $35 and
          more.  Call us at (514) 345-9578.  The best times are between 6:00 PM
          and 9:00 PM, Eastern Standard Time.

BY MAIL:  If making payment  by mail, it is  best to use a certified cheque  or
          money-order.  Personal cheques  are held until cleared by  your bank,
          which can introduce a delay of several weeks.


Just a reminder:  Sapphire is not a free program.

That is to say,  you are welcome to evaluate  the product free of charge  for a
month.  If you continue to use it after that, you must register your copy.

If, after a month, you decide not to register your copy, kindly  do the follow-
ing:

     (A)  Stop using the product.

     (B)  Phone us or send us  a letter, to tell us in what  ways our
          product needs to be improved before you'll register it.  An
          appropriate questionnaire and envelope  can be printed  out
          by the HELP program.

You are  encouraged  to pass  around copies  of Sapphire,  so  that others  may
evaluate it.



Additional Products from Pinnacle Software



The following  diskettes may  be  obtained from  Pinnacle Software.   They  can
greatly enhance your system.  All three diskettes may be obtained from Pinnacle
Software for $35.

SAPPHSDA: This  package  contains this  manual  in WordPerfect  format (Version
          5.0).  This enables WordPerfect users to print out  a more attractive
          manual than is possible with the generic text format that is  usually
          shipped with Sapphire.





                                       33













SAPPHSDB: This  package contains  a collection  of articles  for your  Sapphire
          library.  This includes the RULES  file (rules for Sapphire members),
          the STYLE  file (tips  for courteous  and effective  BBSing), plus  a
          sprinkling of commentaries  that will  spark discussion amongst  your
          users.

SAPPHSDC: Software grab-bag for your software collection.  (All  titles written
          by Pinnacle Software.)  Some of the programs:

          HLRB           Make Handy Little Reference Books
          LOVEFIRE       Adventure story for women only
          LW             Label Wizard label printing program
          MEGADIII       Mega-Doom -- the epitome of BASIC games
          PHONEMEM       Technique for remembering phone numbers
          PINNARTX       Amazing PC-ASCII art-work for any display
          SPACEINV       Arcade game for any display -- even monochrome
          SV             Set Video attributes for CGA, EGA, VGA, etc.
          VARITALE       BBS door program -- multi-author story-writing
          WEED           Utility to clean up text files

Also available from Pinnacle ($45 each -- includes registration) are the Pyroto
Mountain BBS/Door Adventure Gaming system and  the new Vortex Warpgate BBS/Door
Science-Fiction Battle simulation.





























                                       34












APPENDIX B -- SAPPHIRE DESIGNER NOTES



This section contains  no especially  important information.   It is  presented
here for those people  who might want to know why Sapphire was designed the way
it was.

You may  find that this section helps  you decide if Sapphire is  the right BBS
for you.

NOTE:     If you intend to run  Sapphire from a store, or as a customer support
          line, the information in this section is probably irrelevant.



Some Background



I've been involved with computers since 1971, and since those early  days spent
sweating over a 10 character-per-second Teletype,  my enduring passion has been
computer telecommunications.   I'm fascinated by the way it enables us to reach
out and grasp the  crystallized thoughts of a stranger.  We  can enter an amaz-
ing,  exciting universe.  Where  time can stand still  or flow sideways.  Where
people can flash across a continent in the blink of an eye.

Over the years,  I've worked  out countless designs  for computer  telecommuni-
cations systems.  Several of these  designs went beyond the planning stage  and
became reality.  It excites me that we basement programmers have this chance to
pioneer new methods of communication.

Some of the projects I've been involved with include:

     ACCESS:   Canada's first national consumer telecomputing service.

     PYROTO:   The BBS/Game  system (about  50,000 people  play it each  week).
               The latest version is available  from Pinnacle Software for $35.
               (Runs also as a door.)

     SASSy:    A  bizarre experiment  that  helped us  learn  what's wrong  and
               what's  right about  BBS's.   The spec and  a 2-year  report are
               available from Pinnacle Software ($10).

I also had the chance to provide some suggestions for Ron Sharp's extraordinary
INFINITy system, which  is a BBS  with a seemingly  infinite number of  message
bases.






                                       35












Why Sapphire was Written



After years of  seeing other kinds of BBS's, I had  to admit that I didn't like
the way any of them worked.  I'm  not talking about minor annoyances -- my  own
program has dozens of  quirks that I intend  to iron out.  Rather,  I'm talking
about fundamental design decisions.

To my  knowledge (and  based on  my interpretation),  every single  one of  the
existing BBS packages evolved from RBBS.   Perhaps not in actual program  code,
but  certainly in concept.   They all  share the same  general features, though
admittedly most are vastly superior to the original RBBS!

I was  never tempted  to copy RBBS,  because I'd already  written my  first BBS
program long before anybody around here knew what a  BBS was.  It wasn't a very
sophisticated program, but it did put me on my own path.

It is important to understand that there was something of a computer revolution
in Montreal  during the  mid-to-late 70's.   A large number  of hackers  set up
house  on a local school board's HP2000 mini-computer.   We evolved our own set
of idioms, so when the first "mainstream" BBS (an Apple Networks) came to town,
we said, "BBS?   What's that?   Bulletin Broadcast System?"   We really  didn't
know!

Our  user-interface  idioms found  their way  into  various programs  that were
developed  locally.   And thus  they  were found  in ACCESS,  then  PYROTO, and
finally (after considerable mutation) in Sapphire.



Notes About the Design Philosophy



Commands


Sapphire uses word  commands, rather  than single-letter commands.   I  figure:
it's easier to remember words  than mnemonics -- especially when the  mnemonics
are tortuously contrived (as in the infamous [Y]ell for chat).

Since you  don't run  out of words  the way  you run  out of letters,  Sapphire
doesn't need multiple program layers where the same commands can mean different
things (e.g. [U]tilities or [U]pload), depending where you are.

Because I use  word commands, I tend  to make Sapphire somewhat  more conversa-
tional than a letter-command system.  I should mention that some people find my
programs fairly terse.   What  I mean  to say is  that, while  Sapphire is  not
chatty, it is more like a dialogue than you're likely to find on most BBS's.



                                       36












Maintenance


Sapphire  is a  zero-maintenance BBS.   I  design  programs this  way partially
because I'm lazy and partially because  in the 70's most Montreal hackers  were
in a position  to get cut  off from their  programs at any time.   (Most of  us
weren't  really supposed  to be  on  that central  system.)   As  a result,  my
associates and I got into the habit of designing programs that could survive on
their own.


40 Column Text


Many people have expressed surprise at my extensive use of 40-column text.  The
obvious answer is that  there are still plenty of 40-column  screens out there;
the IBM-PC isn't the only personal computer in the world.

However, the real reason  is that when people are reading boring  text (such as
is necessary while  learning to use a BBS), they want  to scan it as quickly as
possible.  The fact is, 80-column text requires too much eye-movement  for easy
scanning; if newspapers can use narrow columns, so can I.  Why should I be held
hostage to the actual width of my screen?  No law forces us to fill each line.


The Cool Reception


The way by  which potential members are  introduced to Sapphire may  not strike
you as particularly inviting.  They are requested to send a message telling you
why they'd like to join.  A few people are so offended, they hang up immediate-
ly.

The actual  requirements for  the application  can easily  be changed,  though.
Maybe  you'll merely  ask them  to tell  you their  shoe-size.   But  if you're
running your BBS as a public service, I'd advise against it.

The vast majority of  BBS's go down within a few months  because the sysops are
appalled at the uncaring nature of the users.   But what can we expect?   Total
strangers call our boards; should we expect them to be nice to us?

You can greet them all  with open arms, but chances are, you'll  be very disap-
pointed.   These anonymous  people simply have  no particularly good  reason to
think you're special.

Far  too few novice sysops are  aware of the simple  fact that when you figura-
tively  "throw open your  doors", you can  get crumbs, bums,  free-loaders, and
jerks.  You also get some beautiful people, but it's hard to remember that when
you've got some fellow who signs on, makes a beeline for the files section, and
ties up your  line for hours as he pilfers your  software collection -- leaving
nothing in return.


                                       37












It is utterly futile to be bitter.  The best solution is to be careful.

A  sysop's worst enemy is his own good nature.  He wants to spread his arms and
hug everybody who signs up to his system.   At first, he's excited that so many
people are visiting his BBS.  But later, when he realizes how many people treat
him like a bus service for software and information, he becomes disillusioned.

Perhaps I'm  wasting my time  telling this to  new sysops, but  the experienced
sysops will be nodding  their heads, by now.   The fact is:  either  you resign
yourself to being used  as a commodity, or you learn the  very difficult art of
rejecting new applicants.

Of  course,  what percentage  you reject  depends  on the  size of  your BBSing
community.  In Montreal, we have plenty of  people calling BBS's.  As a result,
I'm easily able to reject 95% of all applicants.  Mind you, that means that for
the first  2 months, my BBS was excruciatingly dull.  After all, how lively can
a BBS be, when it has only a handful of members?

Happily, though, I stuck to  my guns.  Nowadays, The  Pinnacle Club has a  nice
mix of people, all  of whom are what most  sysops consider "ideal BBSers".   It
almost took  more patience than I possess  (since, like most sysops,  I have an
urge to let everybody on), but it was worth it.

What makes Sapphire truly a "Zero-Maintenance BBS" is that you can judge people
by their reaction to  the request that they justify their  petition for member-
ship.   You  don't even  have to phone  them up!   What  people write  in their
application usually tells the whole story.

For example,  many people  write things like,  "Hi, I'd  like to  be a  member.
Please make me a member.  Thanks."

If such a  person can't even  be bothered to  justify himself, it  is extremely
unlikely he will make an effort to be a good, contributing member.

I've had  some extraordinary experiences  with this method of  validation.  One
fellow was incensed at the impersonal approach, but he took the time to express
his  objections in detail.   Bingo!  I  made him a  member.  He  later posted a
message to  the effect that he thought he'd  "gone to BBS heaven", so impressed
was he by the quality of the messages left by members!

Sapphire can be  easily modified to be less daunting to  the new user.  I don't
want to give you the impression that Sapphire must give all new  applicants the
cold shoulder.

But if  you're a new sysop,  I hope you'll think  about the kind  of people you
want on your system  and design accordingly.  Ask a  few experienced sysops for
advice.


Conclusion



                                       38












Sapphire is not complete.   There are  numerous upgrades to be  made.  Some  of
these are summarized in Appendix C.

However, I would like to make it clear that it is not my intention for Sapphire
to be all things  to all people.  I  hope to retain the apparent  simplicity of
the design.

In  other words,  there are many  other BBS  packages out  there that  are more
grandiose in intent.  They can make your microcomputer look like a whopping big
mainframe.  But if you want a BBS that is easy for your users and easy for you,
I think you'll want to run Sapphire.










































                                       39












APPENDIX C -- Versions 1.1 and 2.x



Version 1.1 of Sapphire  is not much different from 1.0 except  for a few minor
phrasing changes to improve user understanding of Sapphire concepts.

We are currently  drawing up the  plans for Sapphire  Version 2.0.  The  design
work  is now complete, so it's time to get down to the coding.  That will start
about a week after we send this manual out.



Thank-You



During July of 1989, almost all Sapphire sysops around the world were contacted
by phone  by Pinnacle  Software, in  order to help  us plan  what will  go into
Version 2.x.   Let  us assure  you that  your opinions  have been  discussed at
length and  will have a positive effect  on upcoming versions of  Sapphire.  We
thank you for sharing your thoughts with us.































                                       40












                                     INDEX

                Can't find it here?  Try the Table of Contents.


     .BAT  27                                Crash  9, 20
     .S-D  32                                Credit Cards  33
     .TXT  16, 19                            Customization  18
     %1  28                                  Data Terminal Ready  8
     & Commands  9                           Default gear  18
     ACTIVITY  23                            Devalidation
     Aliases  20                                  Skipping  14
     ALT-F10  20                             Diamond  20
     ALT-F6  20                              DIP Switches
     ALT-F7  20                                   Modem  8
     ALT-F8  20                              Diskettes
     Announce  14, 20                             Problems  10
     ARTICLE  16                             Documentation
     Assistance  ii                               Uploaded software  31
     Awaiting Visitor  6                     DOORS  24, 26, 28
     B* files  15                            DOS  24, 26
     B001  15                                Download
     Backup  12                                   Definition  3
     Backups  15                             DSZ.COM  30
     BANISH  24                              DTR  8
          F-Key  14                          DUMBTERM  24, 30
     Banishment  20                          EDLIN  18
          Skipping  14                       ERASE  16, 24
     Basic Member  22                        EVENTS  24, 26, 28
     Batch protocols  32                     EXPERT  23
     BBS                                     EXTERNAL.BAT  28
          Brands  1                          F10  20
          Definition  1                      F2  20
     BUFFERS=  5                             F9  20
     Bugs  10                                Feedback  24
     Bulletin-board  1                       Fido  26
     BYE  22                                 File-transfer  30
          PASSWORD  19                       FILES  23, 30
     Call-back time  14                           Problems  10
     Carrier Detect  8                       Files collection  17
     CD  8                                   FILES=  5, 10
     CHANGE  14, 23                          Floppies
     CHAT  20, 23                                 Disadvantages  3
          Enable/Disable  13                 Freeze out  14
     CLOSE  25                               Function keys  13
     Club  1                                 Gear Shift  18
     Co-Sysop  24                            GET  23, 30
     Command levels  19                      GIMMICKS  23
     Compressing                             GIVE  23, 30, 31
          Not needed  12                     GRAPHICS  23
     CONFIG.SYS  5, 10                       Happy face  20
     Copyright  ii, 18                       Hayes modem  8

                                       41












     Heat  9                                 Number keys  18
     HELP  22                                OBSERVE  23
     Help!  8                                Output speed  18
     HINTS  23                               Password
     Hours-between-calls  13                      Changes  19
     I/O error  10                                SYSOP  13, 24
     I/O Errors                              Passwords  19
          Unexplained  10                    PCCONFIG  6
     IBM-PC  1                               Phone
     Icons  19                                    Off-hook  12
     Inactive user  15                       Pinnacle Club  18
     INFINITy  35                            Pinnacle Software
     INFO  22                                     Business hours  33
     Inner Circle  24                        PINNCL02
     Installation  ii                             Description  33
     Interrupt-driven  11                    PINNCL03
     Level                                        Description  34
          Description  16                    PinnClub  1
     LIBRARY  16, 23                              Design  2
          Description  16                    Poll-driven  11
     Line-noise  18                          Power-sysop  2
     LOCAL  12                               Printer  20
          Parameter  6                       Privacy
     Logo                                         Users'  14
          Sign-on  14                        Private
     LOGO.TXT  20                                 Reading  14
     LPT1  20                                PROBE  24
     Maintenance                             Problems  8
          Files collection  17               PROTOCOL  23, 30
          Library  16                        PYROTO  29, 35
          Message files  16                  RAM
          Time needed  1                          Requirements  3
          Userfile  15                       READ  23
     Member privileges  22                   REGISTER  33
     Members  1                              Registration  ii
     Membership level                        Rename  21
          Description  16                         F-Key  14
     Message                                 REVIEW  23
          Maximum size  3                    Root-name  32
     Message files  16                       RUN  23
     MESSAGES  23                            S-D
          Deleting  16                            Definition  32
          Limited number  14                 SAPPHIRE.BAT  28
          Saving  16                         SAPPHIRE.DAT  29
     Modem                                   SAPPHIRE.S-D  32
          Disabling  12                      SASSy  35
          Problems  9, 11                    SCMDL.DAT  19
     MOVE  23                                SCMDL.TXT  22
     NAMES  23                               SDOOR.INC  29
     New user  15                            Security levels  22
     Noise  13                               SEND  22
     Non-member  22                               File  14

                                       42












     Serial routines  11                          Definition  12
     SET  23                                 Validation  20
     Shareware  ii                           VERSION
     Shut-down  14, 20                            VERSION  22
     Sign-on                                 Versions  ii
          Logo  14                           Wombat  21
     Signing On  12                          Wordstar  18
     SINFO.TXT  19                           XMODEM  30
     SLOGO.TXT  18, 20                       XMODEM-1K  32
     SNEWH.TXT  19                           YMODEM  30, 32
     SNEXT.DAT  15                           Yoo-Hoo  13, 21
     Software collection  17                 Zero-maintenance
     Sound  13, 20                                Goals  1
     Special Member  23                      ZMODEM  30
     SPECS  18, 22
     SRUN  26
     Status Line  19
     STIME.DAT  15
     SUSER.DAT  15
     Switch  8
     SYSOP  12
          Definition  1
          Password  13, 24
          Sign-on  13
          Time-out  16
     System Operator  12
     TEXT  23
     Text editor
          Examples  18
     Tim  31
     TIME  23
          Add  13
          Remove  13
          Upload bonus  31
     Time-Out
          Inactive user  16
     Top lines
          Status  19
     Top Notch  23
     Total Configuration  6
     Triangle  20
     Ultra-Mode  14, 20
     Upload
          Definition  3
     Uploads
          Number of  17
     User
          Inactive  15
     User file  15
     Userfile  15
     USERS  23
     VALIDATE  24

                                       43





```
{% endraw %}

## SGIMM.TXT

{% raw %}
```
-- TIPS AND TRICKS FOR YOUR MESSAGES --

SENDING PRIVATE MESSAGES
------------------------

If you need privacy,  you can set aside
the remainder of a message,  so that it
can only be read by the people that you
list.

To declare the  remainder  of a message
as private, start your line like this:

.- - - - - - - - - - - - - - - - - - -.
: <<JOE>> The rest of this message is :
: for Joe, and only Joe can read it.  :
'- - - - - - - - - - - - - - - - - - -'

You can list  more  than one person, as
shown in this example:

.- - - - - - - - - - - - - - - - - - -.
: <<JOE><HAROLD>>  Type your message  :
: here and only Joe & Harold see it.  :
'- - - - - - - - - - - - - - - - - - -'

For example,  let's say  you've typed a
few lines for general consumption,  and
wish to set aside  the rest of the mes-
sage for FREDDY, MARIO and BERNIE.  You
would do it this way:

.- - - - - - - - - - - - - - - - - - -.
: <<FREDDY><MARIO><BERNIE>> Hello!    :
: How are you, today?  I am fine.     :
'- - - - - - - - - - - - - - - - - - -'

If you want to make sure you understand
this technique,  send a private message
that  doesn't  include your own name in
the list.   (Why should it, after all?)
Then, use the  SET command to go back a
few minutes.  Re-read your message.  If
you can't read the private section, you
got it right!

You can  use this technique  to reserve
several "Privates" in one message.


HOW TO TALK BEHIND SOMEBODY'S BACK
----------------------------------

This one's  just  for fun:  you can set
aside part of your message such that it
can read only by people who  AREN'T  in
the  list of names.  An example:  let's
say you're  planning  a surprise  party
for  JOE and HAROLD.  You'd put this in
front of the relevant text:

.- - - - - - - - - - - - - - - - - - -.
: ><JOE><HAROLD><  Say, everybody,    :
: let's give Joe & Harold a party!    :
'- - - - - - - - - - - - - - - - - - -'

...and so forth.   JOE and HAROLD would
not be able to read the following text.


WHEN YOU CAN'T FIT IT ALL ON ONE LINE
-------------------------------------

If you simply can't  fit  all the names
for a Private or an Exclusive on one 80
character line, simply stack them:

.- - - - - - - - - - - - - - - - - - -.
: <<JOE><HAROLD><MARY><KENNETH>>      :
: <<PHILBERT><ROGER><JOAN>> Okay, we  :
: launch our attack tonight at 8:00!  :
'- - - - - - - - - - - - - - - - - - -'


USING SEVERAL GIMMICKS IN ONE MESSAGE
-------------------------------------

You can freely mix  Privates and Exclu-
sives.  Here's the way you'd  type up a
short message that uses all these tech-
niques:

.- - - - - - - - - - - - - - - - - - -.
: Hello, everybody!  Nice day, eh?    :
: Now, some Privates and Exclusives:  :
:                                     :
: <<BILL><JILL><PHIL><MORRIS><BORIS>> :
: <<HARRY><MARY>>  Hey, we are going  :
: to have a party for Fred and Joe!   :
:                                     :
: <<FRED><JOE>>  Hi.  Are you two     :
: available next Saturday?            :
:                                     :
: ><FRED><JOE><  Everybody, please    :
: don't mention to Fred and Joe that  :
: we're going to give them a party!   :
'- - - - - - - - - - - - - - - - - - -'

CONCLUSION
----------

If all this  sounds complicated to you,
start by experimenting with simple pri-
vate messages to  one person.  Then try
some of the other tricks later on!
```
{% endraw %}

## SHINT.TXT

{% raw %}
```
--- TIPS AND TRICKS FOR THIS SYSTEM ---

NOTE:  This article gives some detailed
information about this system.  It will
enable you to do things faster and with
less  effort.   However,  this  article
does not cover techniques for composing
messages.   If you want to  learn  more
about that subject, please refer to the
GIMMICKS article.

In any case ... here are a few pointers
to help you use this system...


COMMAND COMPLETION
------------------    You don't have to
type  the  whole  command.   Just  type
enough  to  be  recognizable.    As  an
example:  to use the READ command,  you
only  have to type "R".


MESSAGES
--------   Messages  and  time  on this
system  are  identified  by a  DAY TIME
combination.  For example, if you wrote
a message at noon on day 1000, the mes-
sage would be known as 1000 12:00.

By the way, the DAY value is the number
of days since Jan. 1st, 1988.   We keep
track of our messages this way  because
it's a little more  meaningful  than an
arbitrary "bulletin ID number".


READING TEXT
------------    You can halt the output
of  messages  and  other text  (such as
this article) by pressing either  CTL-S
or the  P  key.  To re-start, press any
key.

Whenever you're  reading,  you can also
"gear-shift" the speed of the output by
typing  a number.   0 is  "Top  Speed",
while  1 to 9  give you speeds  between
"Slow and Fast".

You can also  cancel output  altogether
by  pressing  some other key.

When  reading  messages,  however,  the
spacebar  has a  special function:   it
will skip what you're reading, and jump
to the  next message.   For informatory
text (like this),  it will  cancel  the
print-out.

In fact, ANY text  on  this system that
runs on for a while can be skipped over
with  the spacebar.   This includes the
message you see when you first connect.


TEXT, NAMES & SET
-----------------   These powerful com-
mands enable you to  restrict  how much
text you'll  get  when you  do a  READ.
The NAMES command  can be used to limit
the messages to  only those  that  were
written by certain people.  TEXT can be
used to  limit  the  messages  to  only
those that contain certain text.  Using
all the message selection commands, you
can  greatly reduce the amount of read-
ing you must do.  For example:

==> NAMES MARY/HARRY/JOHN
==> TEXT PIANO/PIZZA/HOT DOG/CABBAGE
==> SET 150 0
==> READ B

The above  commands,  if used together,
result in the command, "Show me all the
messages in the  Basic Membership base,
in which Mary or Harry or John happened
to mention,  since midnight of day 150,
a piano, or several types of food."

In fact,  NAMES, TEXT and SET,  used in
combination,  affect  many  of the com-
mands that are available.

LEARN TO USE THEM.   They will give you
an enormous amount of control  over the
information you get from this system!
```
{% endraw %}

## SINFO.TXT

{% raw %}
```
NEW USER INFORMATION

This system is used as a private online
club.  It is  our aim  to  bring people
together for relaxed, entertaining con-
versation.   At the  same time,  we can
serve as a way to  obtain  information:
when there's  something  a member wants
to  know,  he or she  frequently  finds
that  another  member  of the club  can
help out.

=======================================

QUALIFYING FOR MEMBERSHIP

Non-members do  not  have access to the
all-important READ command.  Their list
of commands is short and simple:

BYE ........ Disconnect from the system
HELP .......... List available commands
INFO ............. Display this article
SEND .......... Let you write a message
SPECS ........... Set your screen width

You can use the SEND command to leave a
message  about yourself.   You can tell
us what  interests  you,  or state your
opinion on  something.   You can  leave
several messages, on several occasions,
if you wish.

We  regularly  read these messages from
potential members.  If we feel that you
are the sort of person  who would enjoy
our company, we'll make you a member.

In  most cases,  getting  accepted  for
membership involves SENDing only two or
three messages over the course of a few
days.  After you've introduced yourself
in this way,  call in  every couple  of
days to  check  your  membership level.
(The membership level  is  reported  at
the start  of your  visit,  right after
the announcements, if any.)

We're hoping you're just the right kind
of person for  our  conversation  club.
Good luck!

=======================================

DISCLAIMER

This service is being presented  on  an
"as is"  basis,  with  no guarantees or
warranties express or implied; the user
is hereby  informed  that the  operator
does not accept responsibility  for any
circumstances  such as may arise due to
usage of this system.

=======================================

For more  information  about this soft-
ware and other fine products, write to:

  P I N N A C L E    S O F T W A R E
  P.O. Box 386,  Town of Mount Royal
  Montreal, Quebec,  Canada  H3P 3C6

=======================================
```
{% endraw %}

## SLOGO.TXT

{% raw %}
```
   -----------------------------------------------------------------------
-=(    W E L C O M E     T O     T H E     P I N N A C L E     C L U B    )=-
   -----------------------------------------------------------------------
   |::                                                                  :|
   |.  If you're looking for  good  conversation,  great software  and   |
   |.  the best online games in town,  you've come to the right place!  .|
   |:..                                                               .::|
   -----------------------------------------------------------------------
-=(    We're online day and night, 7 days a week, at 300 to 1200 baud!    )=-
   -----------------------------------------------------------------------

   Please enter your full name.  If you're a new user, press ? then return.
?
?
?
?
?
?
?
?
----+----1----+----2----+----3----+----4----+----5----+----6----+----7----+----
   *******************************************************************
  **                                                                 **
 **    W E L C O M E    T O    T H E    P I N N A C L E    C L U B    **
**                                                                     **
 **    We're open day and night, 7 days a week!   300 & 1200 baud!    **
  **                                                                 **
   *******************************************************************

  Please enter your full name.   New users:  press  ?  then press return.

?
?
?
?
?
?
?
?
?
?
----+----1----+----2----+----3----+----4----+----5----+----6----+----7----+----
 .-------.   ---  ---   -----.    .---------------------------------------.
    //       //   //    //       /                                        /
   //       //---//    //--     /  Online 24 hrs/day @ 300 - 2400 baud   /
  //       //   //    //       /                                        /
 ---      ---  ---   ------'   '---------------------------------------'


   ------.   ---   ---.  ---   ---.  ---   ---.      .---.  ---      -----.
   //  //    //    // :  //    // :  //    // :     //   '  //       //
  //---'    //    //  : //    //  : //    //--:    //      //       //--
 //        //    //   ://    //   ://    //   :   //      //       //
---       ---   ---   ---   ---   ---   ---  ---  '---'  ------'  ------'

                                           .---.   ---     ---  --   ----.
Please sign on with your full name.       //       //      //  //    //  /
Aliases  are  not accepted  at this      //       //      //  //    //--:
BBS.  If you are a new user, please     //       //      //  //    //   :
press ? then press the return key.      '---'   ------'  '---'    ------'

?
----+----1----+----2----+----3----+----4----+----5----+----6----+----7----+----
           = = = = = = = =
   = = =   P I N N A C L E   = = = =
=  T H E   = = = = = = = =   C L U B  =
*  = = =                     = = = =  *
=          All day & night            =
          300 and 1200 baud

---------------------------------------
Pinnacle Software  also  specializes in
programming,  computer sales, training,
word processing  and  Lotus 1-2-3.  For
information, call us at (514) 331-6791.
Ask for  Tim Campbell.  The first phone
consultation is offered free of charge.

Let us get you computing!   Call today!
---------------------------------------

Please  enter  your  name.  If you need
any help,  press  ?  then press RETURN.
----+----1----+----2----+----3----+----4
=====================================
==  WELCOME TO  THE PINNACLE CLUB  ==
=====================================

Online at 300 and 1200 baud, evenings
and nights, sometimes during the day.
?
?
?
?
?
?
?
?
?
?
?
?
?
?
----+----1----+----2----+----3----+----4


LOGO FILE NOTES
---------------

You can keep several logos in this file.   A logo is a maximum of 20
lines long.

If you don't need all 20 lines, you can mark the unneeded lines with
a single  question mark;  this is demonstrated in some of the sample
logos.

You are heartily encouraged to name your BBS  "The Pinnacle Club" --
provided there isn't another BBS with that name in your area.  Think
of it like "Club Med"!  Wouldn't it be nice if,  no matter what town
you visited,  you could  quickly  get to  know  folks by looking for
their local chapter of The Pinnacle Club!

So, by all means, use the name!
```
{% endraw %}

## SNEWH.TXT

{% raw %}
```
WELCOME TO THE PINNACLE CLUB
----------------------------

The Pinnacle Club  is a  conversation
service.   You can use this system to
post messages  that  other people can
read.  If you have an opinion,  or if
you have a question  that you've been
wondering about ... The Pinnacle Club
gives you  a way  to  broadcast  your
words.

             --<=(*)=>--


We'll  be  returning  to the  sign-up
procedure  in a moment.   When you're
asked  to  type in your name,  please
type in a name  that you feel comfor-
table with.   It's  best  to  type in
your real name, but if you would feel
better  maintaining  some measure  of
anonymity, then it's all right to use
a nick-name or a made-up name.

The best name of all to use is simply
your first name.  We're all on first-
name terms, here.

If you are asked  for a password when
you enter your name, that means some-
body else has reserved that name.  So
you'll  have to  choose  a  different
name.

For example,  if your name is Richard
Smith,  and somebody is already using
that name, you could sign up as Dick,
or Richie, or Richard S.

             --<=(*)=>--

This service is brought to you by:

- - - - - - - - - - - - - - - - - - -
- P I N N A C L E   S O F T W A R E -
- P.O. Box 386, Town of Mount Royal -
- Montreal, Quebec,  Canada H3P 3C6 -
- - - - - - - - - - - - - - - - - - -
```
{% endraw %}

## SGETF.TXT

{% raw %}
```
NOTICE:  The system operator claims absolutely no responsibility whatsoever
for the presence of any software obtainable on this system, nor any respon-
sibility for damages arising from the obtaining or use of such software.
```
{% endraw %}

## SGIVE.TXT

{% raw %}
```
NOTICE:  It is entirely your responsibility to ensure that you have permission
to upload this software.  The system operator claims no responsibility for the
illegal transfer  of software,  under  any  circumstances.   By uploading this
software,  you declare the system operator free from any liability for damages
attributable thereto.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1833

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      7128   2-06-88   3:13a
    FILE1833 TXT      2073  12-22-89   2:23p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   4:00a
    INSTALL  BAT      1495   7-31-89   3:22p
    QUERY    COM       128   1-27-86   5:35a
    SAPPH111 ARC    230598   8-29-89  10:29a
    SAPPH112 ARC     93700   7-31-89   3:39p
            8 file(s)     335700 bytes
                           21504 bytes free
