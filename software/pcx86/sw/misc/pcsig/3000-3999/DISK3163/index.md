---
layout: page
title: "PC-SIG Diskette Library (Disk #3163)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3163/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3163"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DOS_HELP.TXT

{% raw %}
```
Format 360K floppy in drive A format a: /4
Format 720K floppy in drive B format b:/n:9/t:80
Format floppy in drive A      format a:
Format/name floppy in drive A format a: /v
Format floppy in drive B      format b:
Format/name floppy in Drive B format b: /v
Sort directory by date        dir | sort /+24 | MORE
Sort directory by name        dir | sort /+1 | MORE
Sort directory by size        dir | sort /+13 | MORE
```
{% endraw %}

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

### Directory of PC-SIG Library Disk #3163

     Volume in drive A has no label
     Directory of A:\

    DISK_LST 1         311   7-14-92   3:00p
    README   BAT        25   7-14-92   2:59p
    README   TXT      2018   7-14-92   2:19p
    SHOOTER  EXE    100576   7-07-92   4:20p
    SHOOTER  HLT     54716   7-07-92  12:14p
    SHOOTER  HLO      8668   7-07-92  12:14p
    SHOOTER  HLI       440   7-07-92  12:14p
    INSTALL  EXE     84574   5-23-92   2:18p
    S_FILES  LST       298   5-12-92  10:00a
    S_FILES  CFG       217   5-12-92  10:00a
    S_AGENT  EXE      5004   5-12-92  10:00a
    SPEC_CHR LST       767   5-12-92  10:00a
    SPEC_CHR CFG       170   5-12-92  10:00a
    SHOOTER  CFG       213   1-19-93  12:03a
    SALESMEN LST      1004   5-12-92  10:00a
    SALES3   CFG       784   5-12-92  10:00a
    SALES2   CFG       795   5-12-92  10:00a
    SALES1   CFG       776   5-12-92  10:00a
    DOS_HELP TXT       425   5-12-92  10:00a
    DOS_HELP CFG       219   5-12-92  10:00a
    COLRSHOT CFG       214   5-12-92  10:00a
    B_WSHOT  CFG       213   5-12-92  10:00a
    AREACODE LST     14842   5-12-92  10:00a
    AREACOD1 LST     14841   5-12-92  10:00a
    AC_STATE CFG       313   5-12-92  10:00a
    AC_CODE  CFG       312   5-12-92  10:00a
    GO       BAT       140   1-19-93  12:29a
    SHOW     EXE      2040   9-12-88  10:48a
           28 file(s)     294915 bytes
                           12288 bytes free
