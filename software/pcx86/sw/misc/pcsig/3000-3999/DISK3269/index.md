---
layout: page
title: "PC-SIG Diskette Library (Disk #3269)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3269/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3269"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INTRO.TXT

{% raw %}
```
Disc Police, Version 1.2 Introduction
-------------------------------------

    Welcome to Disc Police.  This program is designed to manage shared
    disc space, typically on a network file server.  It finds "disc 
    hogs" - users who consume too much space on the shared disc.  
    
    It does this by allowing you to establish a list of shared disc 
    users, each with a certain space allotment.  These users are the 
    owners of their space and are responsible for staying within their 
    assigned space limits.  Disc Police checks the disc against the 
    list, finding users who are in violation so that action can be 
    taken.

    Disc Police is designed to resolve the disc space problem that is so
    common to DOS networks.  That is, no matter how large your network
    file server is, unless its space is managed and regularly cleaned up,
    it won't take long until all the space is consumed.  Disc Police 
    makes that disc management easy.

    Disc Police is a program written for use with Microsoft Windows.  It
    is very easy to use and requires no documentation other than Help
    messages (provided in the program).  The only operator effort 
    required is to set up the list of users.  Once this is done, Disc 
    Police does the rest just by pressing a button.

    Disc Police, Version 1.2 is designed to be used with Microsoft
    Windows Version 3.0.  In addition to Windows 3.0 support, several
    program enhancements have been made in this release.

Registration
------------

    Disc Police is a shareware program.  This keeps its cost low and
    allows you to run the program before you decide to buy it.  The
    introductory version of the program has every feature, but limits
    the number of "Slices", or disc divisions, to 10.  This is 
    normally sufficient for software evaluation purposes.

    To remove the 10 slice restriction, requires program registration.
    Two levels of registration are available:
        
        The Standard version of Disc Police software costs $79.  This
        version supports all program features:

                Unlimited number of slices.
                Multiple Slice data files.
                Slice entry and editing.
                Slice listing report.
                Slice status report.
                Crumbs report.
                Slice monitoring.
                Printer support and online help.
                Free future updates.
     
        The Limited version of Disc Police software costs $49.  This
        version supports most program features, with some limitations:

                Unlimited number of slices.
              * Only a single Slice data file.
                Slice entry and editing.
                Slice listing report.
                Slice status report.
                Crumbs report.
              * No slice monitoring.
                Printer support and online help.
                Free future updates.

    To register, please indicate which version you are registering for
    and send a check or money order to:
        
                        Douglas E. Phillips
                        12909 79th Place NE
                        Kirkland, WA  98034
                        (206) 821-3531


Copying Restrictions
--------------------

    Disc Police introductory version of the software may be freely 
    copied and provided to others as long as two conditions are met:

        1) This introductory file is copied with the software, and
        2) Registration codes are not provided with the copy.
    
Installation
------------    

    1.  Start Microsoft Windows (if it is not already running).
        Disc Police is designed for Windows Version 3.0, but it will
        run on Windows Version 2.x as well.

    2.  Create a directory for the Disc Police program and data files:
            Use File Manager, File menu item, Create Directory
            Create a new directory...  C:\POLICE             
        Note that any other directory name is acceptable.

    3.  Copy all files from the Disc Police program disc:
            Put Disc Police program disc in A: drive
            Use File Manager, Switch to A: drive icon
            Highlight all file names
            Select File Copy menu item
            Copy to C:\POLICE      (or whatever directory you created)

    4.  Change your WIN.INI file.  This file resides in your MS 
        Windows directory (normally C:\WIN3).  You can use the
        Windows Notepad program (in Accessories) to make the changes.  
        Add the following lines at the bottom of WIN.INI:

            [DISCPOLICE]
            DataPath=C:\POLICE\    (or whatever directory you created)
            Code=XXXXXXXXX         (your registration code or blank)
            SliceLimit=XXX         (any number you wish, normally 100)
        
        Make sure to include the full data path, including the last \.

        If you have not registered yet, leave Code and SliceLimit
        blank.  You will be limited to 10 slices.  When you register,
        use your registration code and enter any slice limit you wish.
        Keep in mind that each slice will take 542 bytes of memory.
        So a SliceLimit of 100 will consume about 54K memory.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3269

     Volume in drive A has no label
     Directory of A:\

    INTRO    TXT      5389  11-18-90  10:05p
    DP       EXE     29312   9-15-90   7:42p
    DP       DAT      5424  11-30-92  11:20a
    DP       HLP     31266   9-15-90   2:58p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  11-30-92   2:43p
            6 file(s)      72423 bytes
                           86016 bytes free
