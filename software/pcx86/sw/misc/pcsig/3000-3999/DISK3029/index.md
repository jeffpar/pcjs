---
layout: page
title: "PC-SIG Diskette Library (Disk #3029)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3029/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3029"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```

╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #3029  LAUNCH!  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the instructions, type:  COPY LAUNCH.TXT PRN  (press ENTER)   ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝

```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
What is Application Access Software?
Application Access Software is software that makes it easy for you to use other software programs. 
LAUNCH! is designed to give you the quickest, most convenient access to your Windows 3.0 or DOS 
programs when running Windows 3.0 (or higher).

LAUNCH! and File Manager
The preferred way to use LAUNCH! is in conjunction with standard Windows 3.0 File Manager. 
LAUNCH! can start up any of your programs in the current working directory as determined by File 
Manager. This is much more convenient and flexible than maintaining "program groups" under Program 
Manager.

LAUNCH! and Memory
LAUNCH! is started by double clicking the Windows 3 background and terminates immediately after 
starting the program of your choice. Therefore, it is always available for use without occupying valuable 
memory!

LAUNCH! and You
You'll find that your main active programs run faster because its easier to LAUNCH! auxiliary programs 
when you need them than to preload them into memory. You'll find yourself using many more utility 
programs because they are so accessible!

Installing Launch!
To install, put the Launch floppy disk in either the a: or b: drive. Run the launch.exe program.  On the 
system menu (the 'minus sign') select Install Launch!  Answer yes to all install questions.

Starting Launch!
Once installation is complete, double clicking anywhere on the Windows 3.0 background starts up 
Launch.

Launching applications
Just click on the program's Launch button to start it.

The first time you start Launch, command.com (the DOS command processor) will be the only program 
with a button. See "Adding applications" for information about making buttons for additional programs.

Running applications
If you want to start an application which does not have a button, use the Run/Add menu. Use the mouse 
to select the program from the listbox and click the RUN button.

Adding applications
If you wish to create a Launch button for a program, use the Run/Add menu. Use the mouse to select the 
program from the listbox and click the ADD button.

Deleting applications
If you wish to remove a program's Launch button, use the Run/Add menu. Use the mouse to select the 
program from the listbox and click the DEL button. This deletes the Launch button the next time you 
start Launch; it does not delete the program itself (use File Manager for that).

Next / Prev
These menu items are selectable only if you have more than 20 Launch buttons defined. Next/Prev then 
show you additional pages of Launch buttons. The maximum number of Launch buttons supported is 
400.

Parameters
Use the Parameters menu item or the Parameters check box in the Run/Add... dialog box if you want to 
be prompted for parameters to pass to the program being launched.

Launch directory
Launch inherits your current working directory when you start it up. This directory is shown in the title 
bar of the Launch window. This directory becomes the current working directory of any program you 
launch.

You may change Launch's current working directory (and so change the current working directory of the 
program you launch) by using the Dir menu. Use the listbox to select the desired directory and click OK.

Some Technical Details

Launch.ini file
Launch creates an initialization file called launch.ini in your windows directory. This file stores the 
names of all programs which have buttons. The ADD and  DEL functions use this file. If for some 
reason DEL doesn't seem to remove a button, you can remove buttons by editing this file (any text editor 
will do). You can also ADD buttons by typing in program names - follow the format of names which are 
already there.

What Install does and how to undo it
Install makes two modifications to your Windows 3 setup. Install renames taskman.exe to taskmgr.exe 
(modification 1). Install copies the Launch executable file, launch.exe, to the windows directory and 
names it taskman.exe. This is why Launch gets started by double clicking the Windows 3.0 background.

Install changes the system.ini file to boot File Manager (winfile.exe) instead of Program Manager 
(progman.exe) by modifying the line "shell=progman.exe" to be "shell=winfile.exe" (modification 2).

To undo installation, undo the two modifications mentioned above and delete the file launch.ini.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3029

     Volume in drive A has no label
     Directory of A:\

    LAUNCH   EXE     30720   9-23-91  10:07p
    MANUAL   TXT      4420   6-26-92  10:28p
    GO       TXT       697  10-13-92   3:58p
    GO       BAT        38   1-31-91  12:58a
            4 file(s)      35875 bytes
                          123392 bytes free
