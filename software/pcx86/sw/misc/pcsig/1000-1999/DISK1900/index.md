---
layout: page
title: "PC-SIG Diskette Library (Disk #1900)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1900/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1900"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BIG EVENT"

    BIGEVENT warns you 10 days in advance of special events on your social
    calendar such as birthdays, anniversaries and special days of the year
    such as Mother's Day.  After all, it's your memory -- not your heart --
    that needs a hand.  You enter all your special events in a text file
    according to a special program format.  Once the data is entered, every
    time you turn on your computer it will tell you which events are coming
    up soon.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BGEVNT.DOC

{% raw %}
```

                  BigEvent (c) 1989 by
               Friendsware of Friendswood

                    PROGRAM SUMMARY
                    ---------------
BigEvent is a shareware utility program designed to warn you
10 days in advance of special events on your social calendar
such as birthdays, anniversaries and special days of the
year such as Mother's Day.  Now there is no more reason to
forget to send your mother a card on Mother's Day or her birthday.


               BigEvent PROGRAM OPERATION
               --------------------------
To obtain maximum benefit from BigEvent, you need to have it run
from your  AUTOEXEC.BAT  file.  This is a file on your hard disk
or floppy which will automatically execute each time your computer
is turned on.  To have BigEvent run automatically, simply edit the
AUTOEXEC.BAT  file to add the line:

    bgevnt bgevnt.dat

In the file 'bgevnt.dat' you put your "events".  The format of
this file is shown in the   SAMPLE.DAT  file included on this
disk.  A line from that file is shown below:

column 1
|        column 10
|        |
07/14/26 b Uncle Harold Smith: 2735 39th St. Lubbock, TX 79422
        | |                   
        | |
        spaces must be in columns 9 & 11

You enter the date in mm/dd/yy form beginning in column 1,
a space, an 'event symbol' (either 'a' or 'b' or 'x') in column 10,
another space, and then the message you want to see on the screen
which corresponds to the date.  BigEvent interprets the 'a' as
anniversary, the 'b' as denoting birthday, and the 'x' as any
other big event.  Be sure to leave one space after the event
symbol since BigEvent uses this field to cancel message
notifications under certain conditions.  Your data file can
have   any  name  you  want  and be in any directory you wish.
Furthermore, you can run multiple data files by simply adding
more instances of the BigEvent invocation in your
AUTOEXEC.BAT  file.

You can make your own data file in 2 ways.  One is to use the
utility program on this disk called   MKDAT.  This will build
your data file and prompt you for each element of the data
file.  This program is not, however, a general purpose word
processor or text editor.

The second way to make your own data file is to  use an editor or
word processor which will put 'hard return' or 'hard new-line'
characters at the end of each entry.  Some editors which work this
way are EDLIN, SIDEKICK, any of the Borland language editors such
as the ones found in TURBO C, TURBO BASIC, and TURBO PASCAL and
most word processors which allow you to write or export files as
ASCII data files.  (Refer to the user's manual for your word
processor for more information on how to make files in ASCII
format.)

In its default mode, BigEvent will warn you from 10 days before
the event up through the day of the event.  Suppose you send
Uncle Harold his birthday card on the very first day the message
comes up.  Thereafter, you might not want to see that birthday
message every day for the next 10 days.  (This may depend largely
on your feelings about Uncle Harold.)  You can turn off the
warning in two ways.

* One way is to edit your data file and add a '-' character in
  column 11 immediately after the event symbol in column 10.
  For example, 07/14/26 b     is modified to become:
               07/14/26 b-    when you no longer want to see
                              Uncle Harold's birthday message.

* Another method is to set an auto-cancellation option on the
  command line for BigEvent.  To do this, you invoke BigEvent
  from the  AUTOEXEC.BAT  file with an optional argument thus:

        bgevnt bgevnt.dat c8

  In this example, the auto-cancellation feature ( denoted by the
  letter 'c') is set and the warning interval is 8 days.  Now
  when you acknowledge a notice, you can cancel further warnings by
  entering a 'c'.  Once you have passed the event date in this mode,
  the cancellation character '-' is automatically removed so that
  the event is rearmed for next year.


               AUTOEXEC.BAT FILE EXAMPLES
               --------------------------

    EXAMPLE 1:
    An XT compatible computer with no hardware clock, a monochrome
    monitor, and 2 floppy drives.  The data is in file 'mydata'
    which is normally in drive B:.  The date and time commands allow
    you to set the date so that BigEvent knows what day it is starting
    from.  Your  AUTOEXEC.BAT  would include the lines:

        echo off
        date
        time
        bgevnt b:\mydata
        echo on


    EXAMPLE 2:
    An AT compatible computer with a hard disk drive "C:",  a built-in
    hardware clock, EGA video controller and color monitor.  Make sure you
    have a  CONFIG.SYS  file in the root directory which contains the line:

        device = ansi.sys

    This is needed in order to have the color function properly.
    ANSI.SYS is a file which comes with DOS.  For this system, it is not
    necessary to have  date and time statements since the  date and time
    are automatically set from the hardware clock when the  machine is
    turned on.  If the program file is in the root directory of C:
    and the data file is in a directory called C:\DOCS then your
    AUTOEXEC.BAT  file would contain the line: 

        bgevnt c:\docs\mydata

    In order to have the auto-cancellation feature you would add a 'c'
    to the end of the line:

        bgevnt c:\docs\mydata c

    In order to cut the notification interval down to a week, you would
    modify the  line to read:

        bgevnt c:\docs\mydata c7

    If for some reason you wanted to force the messages to be monochrome
    even though you have a color monitor and controller, you would modify
    the invocation to be:

        bgevnt c:\docs\mydata c7m

The order of the characters AFTER the data file name is not important.
The program checks for the letters 'c', 'm', and an integer value.
It is only necessary that all control characters are listed together
with no intervening spaces.

               DATA FILE SUGGESTION
               --------------------
It is not necessary to sort your data file as all entries are
checked each time the program runs.  However, for your own
readability, you can build the file in any order and then run the
DOS SORT command thus: SORT < MYDATA.DAT > MYDATA.DAT to create a
sorted data file.  The 1st '<' character tells SORT that it will
get its input from the file MYDATA.DAT.  The '>' character tells
SORT to output the sorted data to a file named  MYDATA.DAT.

                   IN CLOSING
                   ----------
BigEvent(tm) is a shareware program.  Shareware is a marketing
technique which allows you to try a program before you buy it.
Therefore, you don't wind up buying programs you won't use.
If this program is of use to you, you are expected to buy it.
Buying the program entitles you to a registered version of
the program.

The registration fee for BigEvent is $10.00.  The registered
version of the program differs from the unregistered version
in that you can customize the colors used to display the event
message and you can turn off the music if you desire.  If you
have tried to run BGCNFG on the unregistered version you have
seen that it does not modify the program file BGEVNT.EXE.  It
will however, modify a registered version.

Should your registered program disk prove to be defective,
return it to Friendsware of Friendswood for replacement.

Friendsware of Friendswood offers no other warranty for this
product.

Friendsware of Friendswood specifically disclaims all other
warranties, expressed or implied, including but not limited
to implied warranties of merchantability and fitness for a
particular purpose.  In no event shall Friendsware of Friendswood
be liable for any loss of profit or any other commercial damage,
including but not limited to special, incidental, consequential
or other damages.



Please direct all inquiries concerning BigEvent to:

Friendsware of Friendswood
PO Box 1162
Friendswood, TX 77546-1162




                        ORDER FORM

BigEvent is an excellent gift for those people with computers who
are always forgetting your birthday or special day.  Consider getting
them a copy with yours.

First registered copy...................................$10.00

_______ additional registered copies @ $5.00 /each......$__________

                                       Total............$__________

All copies will be shipped together

to:

Name:_______________________________________________________

Address:____________________________________________________

City/State:___________________________________ZIP:__________


Make checks payable to: Friendsware of Friendswood.
Texas residents please add 7% sales tax.  First class mail and
all handling charges are paid by Friendsware of Friendswood.


--------------------------------------------------------------------------





           -------------------------------------
           |                                   |
           |     Friendsware of Friendswood    |
           |     PO Box 1162                   |
           |     Friendswood, TX 77546-1162    |
           |                                   |
           -------------------------------------
```
{% endraw %}

## FILE1900.TXT

{% raw %}
```
Disk No: 1900                                                           
Disk Title: Big Event                                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Big Event                                                
Author Version: 10/11                                                   
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
BIGEVENT warns you 10 days in advance of special events on your social  
calendar such as birthdays, anniversaries and special days of the year  
such as Mother's Day.  After all, it's your memory--not your heart--that
needs a hand.  You enter all your special events in a data file         
according to a special program format.  Once the data is entered, every 
time you turn on your computer it will tell you which events are comming
up soon.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1900

     Volume in drive A has no label
     Directory of A:\

    BGCNFG   EXE     10420  10-11-89   9:24p
    BGEVNT   DOC      9483  10-10-89   8:07a
    BGEVNT   EXE     13298  10-11-89   9:00p
    BGREAD   ME       1848  10-10-89   8:15a
    DEMO     BAT       742   6-13-89   8:17a
    FILE1900 TXT      1629  12-27-89   6:46p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   5:45p
    MKDAT    EXE     15970   9-22-89  11:41p
    SAMPLE   DAT       380   7-03-87   1:02p
           10 file(s)      54348 bytes
                          102912 bytes free
