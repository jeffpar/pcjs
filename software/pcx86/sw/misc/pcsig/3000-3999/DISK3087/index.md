---
layout: page
title: "PC-SIG Diskette Library (Disk #3087)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3087/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3087"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PROFILE.TXT

{% raw %}
```
PROGRAM DESCRIPTION:
Test your vocabulary and spatial skills. Play against the clock 
to record the highest scores. Select from three levels of play; 
Easy, Intermediate, and Expert. You can peek at answers, but it
will cost you! Save, Retrieve, or Print a game. Review previous
highest scorers. Turn sound on/off. On screen help. 

PROGRAM REQUIREMENTS:
Requires Windows 3.0 or later, 400k disk space.

PROGRAM FILES: (all are in a compressed format)
File                       Description
Setup.exe                  Installs Jumble Fever
Setup.inf                  Installation data file 
Jumble.zxe                 Jumble Fever executable file 
Jumble.zni                 Program data file
Menuhlp.zxt                Help text file
Howhlp.zxt                 Help text file
words.zhr		   Words source file


CONDITIONS UNDER WHICH THIS SOFTWARE MAY BE COPIED AND DISTRIBUTED:

Individual users may freely copy this disk and share it with friends and
family.

Nonprofit groups may distribute copies of this disk. A fee of no more than
$10.00 may be charged.

Disk distributors and dealers must have written permission before selling
copies of this disk. You may not charge more than $10.00 for a copy of this
disk, and you must identify it as Shareware in your offer to sell it.

The files on this disk may not be omitted or modified in any way.

The registration fee for this program is $10.00 plus $4.00 postage. Upon
registration, you receive the latest update plus a supply of additional
words for over 5000 different games. The additional word supply is not
Shareware and may not be distributed by anyone other than Fusion Software,
Inc. which retains all ownership of the additional words. The registrant is
given license to use the words on only one computer at any time.
```
{% endraw %}

## README.TXT

{% raw %}
```

Jumble Fever 2.0 is a program designed to run under Windows 3.0 
or later. This program cannot be run directly from DOS. The 
program files are all in a compressed format.

A program called "Setup" is provided on this disk. Setup will
install Jumble Fever on your Hard Drive (or another floppy.)
The program installation is a simple process that you can abort 
at any time, and does not require any information from you.
 
Setup will prepare and copy all required files from this program 
disk to any drive/directory you specify (C:\jumble is the default.) 
In addition, Setup will create a  Windows Group and place the 
program icon in it, so that Jumble Fever can be started from an 
icon.  

To run the Setup program:
   1.) Start Windows,
   2.) Open the Program Manager,
   3.) Put this program disk in your floppy drive,
   4.) Select Run... from the File Menu,
   5.) Enter a:setup
       (This assumes that the floppy with this program disk is the 
       A drive. If the floppy is your B drive, then enter b:setup
       instead.)

After you do the above, Setup will install Jumble Fever. Setup
will report its actions and status to you throughout the installation
process.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3087

     Volume in drive A has no label
     Directory of A:\

    SETUP    EXE     71168   4-29-92   5:31p
    SETUP    INF      1003   5-15-92   6:22p
    METER    DLL     15537   2-21-91   1:00a
    JUMBLE   ZXE     32854   5-17-92  10:28a
    HOWHLP   ZXT      1131   5-17-92  10:28a
    MENUHLP  ZXT       600   5-17-92  10:28a
    VBRUN100 ZLL    191484   5-17-92  10:29a
    WRDSHR   ZAT      4714   5-17-92  10:30a
    PROFILE  TXT      1822   5-15-92   2:24p
    README   TXT      1211   4-30-92   8:32p
    BROWSE   COM       958   6-16-91  10:19p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       693   8-31-92   4:18a
           13 file(s)     323206 bytes
                           32768 bytes free
