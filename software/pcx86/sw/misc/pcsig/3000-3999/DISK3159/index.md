---
layout: page
title: "PC-SIG Diskette Library (Disk #3159)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3159/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3159"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

        Installing Above & Beyond 2.1 is Easy
        -------------------------------------

Summary of Steps:

1. Run a:Install
2. Add a Program Item icon
3. Start Above & Beyond
4. Access on-line Help by pressing Alt+H or F1 from Above & Beyond

Details:

The installation process allows you to select where you would like
to put Above & Beyond files. The directory you name will be created
if it doesn't already exist, and the files will be copied from the
diskette to this target directory.


Step 1: Insert the Above & Beyond diskette into drive A:. From the
Windows Program Manager, Select Run from the File pull-down menu and
type:

		A:INSTALL


Step 2:  Create a program item icon in the program group of your
choice, eg. Windows Applications. From the Program Manager, select
File, and choose New. Select Program Item. As a description, you
might type in your name, and for the command line, state the path
and program file:

	c:\ab\AB.exe

Alternatively, you can also specify a datafile name, such as:

	c:\ab\AB.exe Bill

The default extension is .PAK. When you omit the datafile name, 
the name used is TimeData.PAK. 

Step 3: Start Above & Beyond by double-clicking on the icon.




   Installing Above & Beyond for a LAN Workgroup
   ---------------------------------------------

Install Above & Beyond on each PC as described above, but designate
in the command line a data path on the server. Designate an unique  
directory for each user's data file. For example:

c:\AB\AB.exe  j:\KIM\Kim.pak

Also refer to the Above & Beyond on-line Help for additional info
on workgroup use.



Above & Beyond Technical Support from 1Soft Corp.
-------------------------------------------------
	707/987-0256 voice Mon-Fri 8:00am - 4:00pm (Pacific time)
	707/987-3150 FAX (24 hours)
	CompuServe 71240,1625
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3159

     Volume in drive A has no label
     Directory of A:\

    README   TXT      1878   1-14-93   4:22p
    INSTALL  EXE     22016  11-25-92  10:29p
    AB       EX_    152587   1-14-93   9:17a
    AB       HL_     78673   1-15-93  12:50p
    SAMPLE   NBK       549  12-16-92  10:12p
    SAMPLE   PAK      3486  11-04-92   1:18p
    WORKTOOL LST        72  12-16-92  10:24p
    NB       EX_     35892  12-20-92  10:01a
    NB       HL_     10860   1-14-93   6:03p
    COMMDLG  DL_     49076  12-18-91   2:40p
    ABWIN    LST       143  12-22-92   1:57p
    GO       BAT       791   2-10-93  12:38a
           12 file(s)     356023 bytes
                               0 bytes free
