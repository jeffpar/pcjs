---
layout: page
title: "PC-SIG Diskette Library (Disk #3164)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3164/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3164"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
README.TXT - Information on installing and using the DataShooter
             program.

Program Description:

DataShooter is a memory resident utility that pops up when you hit the
"hot key" you assign to it.  While the DataShooter is visible, you can 
use the mouse or the cursor keys to "point" to a data item.  DataShooter
will then "shoot" selected fields from the selected item into your DOS
application.

For example, you may need to send a letter to one of your sales representatives.
You could search through a file or binder for the address and then type it
into the letter and the envelope.  With DataShooter, you simply hit the 
"hot key", select the salesperson with your mouse, and "click".  DataShooter
will type the person's name and address for you - with no typing errors!

You can use DataShooter with ANY of your DOS based programs that run in 
character mode (accounting packages, wordprocessors, spreadsheets, database
programs, etc.).  This version of DataShooter is NOT compatible with the
WINDOWS graphics based operating system but DOES work quite well with 
Quarterdeck's DESQview windowing system.

DataShooter runs under DOS 3.0 or above.  A hard disk, mouse, and expanded
memory are recommended but NOT required.

Installation:

DO NOT SIMPLY COPY THE FILES TO YOUR DISK.  Place disk1 in either drive
"a" or "b" and then type:  

a:install <Enter> (for drive "a") OR
b:install <Enter> (for drive "b").

The installation program will check your hard disk(s) to make sure you have
room for DataShooter and then will guide you through the installation.  The 
default directory for DataShooter is "C:\DSHOOTER", but you can rename it if
you desire.

Documentation:

DataShooter has a comprehensive on-line Help system (just press F1 while
DataShooter is visible).  For a printed copy of this information, type the 
following at the DOS prompt:

print c:\dshooter\shooter.man

For a bound 118 page manual, simply register with Viking Systems!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3164

     Volume in drive A has no label
     Directory of A:\

    DISK_LST 2         104   7-14-92   3:01p
    DISK_LST BAK       104   7-14-92   2:43p
    SHOOTER  MAN     54564   7-14-92  12:02p
    OPTNSHOT EXE     70452   5-12-92  10:00a
    HELPSHOT EXE     60806   5-12-92  10:00a
    FILESHOT EXE    112440   5-12-92  10:00a
    GO       BAT       140   1-19-93  12:29a
    README   TXT      2018   7-14-92   2:19p
            8 file(s)     300628 bytes
                           17408 bytes free
