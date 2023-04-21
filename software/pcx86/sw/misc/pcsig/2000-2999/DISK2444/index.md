---
layout: page
title: "PC-SIG Diskette Library (Disk #2444)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2444/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2444"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYSTEM GUARDIAN PACKAGE"

    SYSTEM GUARDIAN PACKAGE consists of SYSGUARD, ATTRIB, and EXECHECK,
    three programs which help keep your files safe from disaster.
    
    Activate SYSGUARD and these potentially destructive
    commands cannot be performed: 1) disk format (including
    diskcopy); 2) disk write which bypasses DOS; 3) removal of a files
    read-only attribute; and 4) write to a read-only file.  If any of these
    actions are attempted, a message is displayed and the operation is
    prevented from taking place.  A simple command deactivates SYSGUARD and
    you again have access to any of the above actions.  SYSGUARD is an
    efficient terminate-stay-resident program using only 1K of RAM and can
    be used alongside other TSR programs.
    
    ATTRIB allows you to change the attribute of your files to read only,
    hidden, system, or archive.  ATTRIB is similar to the DOS ATTRIB command
    but includes the capability to change attributes to hidden or system.
    Use ATTRIB to make your program files read only, so SYSGUARD can keep
    them safe from sabotage.
    
    EXECHECK, available only to registered users, searches for .EXE programs
    that may have been patched or contaminated with a virus.  If discovered,
    EXECHECK can attempt removal of the virus.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ATTRIB.DOC

{% raw %}
```
		ATTRIB Version 1.10
	Copyright (C) EJC & Associates 1990.

ATTRIB.COM is a program to list or change the attributes of a file
or group of files. This is one of the programs in our SYSTEM
GUARDIAN Package. The other program SYSGUARD.COM is also contained
on this disk with its documentation in SYSGUARD.DOC.

Entering ATTRIB on its own, with no parameters, returns a help
screen similar to the following:

Usage: ATTRIB [options][drive:][path]filename
Options: [+R | -R] [+H | -H] [+S | -S] [+A | -A]
Where '+' adds and '-' removes the chosen attributes:
R	Read only.		H	Hidden.
S	System.			A	Archive.


If no option, list matching files with attributes. This even
includes files that are hidden or system, that you wouldn't see if
entering a normal DIR command.


Examples of use

If we want a directory listing of files on drive b: , simply enter
the following:

	ATTRIB B:*.*

To make all '.EXE' files in the root directory of drive C: read
only, enter the following:

	ATTRIB +R C:\*.EXE

This prevents them from being written to or deleted, by standard
DOS commands. If SYSGUARD is resident and active, this will also
stop read only files from being written or deleted by any means. 
We recommend that you make all your programs read only. i.e. all
files with the extension '.COM' and '.EXE'. 
See SYSGUARD.DOC for more details.

Any of the above options can be combined into a single command.
Lets say you want to hide all '.COM' files in the sub directory
A:\PROGS and also make them read only and system, you would enter
the following:

	ATTRIB +R +H +S A:\PROGS\*.COM

This is how the Dos System files are stored in the directory of a
boot disk.

The archive attribute also has its uses. DOS automatically sets it
when ever a file is written to. The XCOPY command, available with
some versions of MS/DOS, has an option of copying only those files 
having the archive bit in their attribute set. i.e. This is really
a request to copy only those files that are new or updated. This
can greatly simplify disk copying.

If you reset the archive bit on all your files, and at a later
date, see a file with its archive bit set, then that file is either
new or has been modified from an earlier version. This turns out to
be a useful check against attack by trojan programs. To reset the
archive bit for files in the root directory on drive A:, enter the
following command:

	ATTRIB -A A:\*.*

The setting or resetting of various bits in a files attribute, is,
I hope you'll agree straight forward and has many uses.

Please examine the READ.ME file for registration details etc.

```
{% endraw %}

## FILE2444.TXT

{% raw %}
```
Disk No: 2444                                                           
Disk Title: System Guardian Package                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: System Guardian Package                                  
Author Version: 03/90                                                   
Author Registration: $40.00                                             
Special Requirements: None.                                             
                                                                        
SYSTEM GUARDIAN PACKAGE consists of SYSGUARD, ATTRIB, and EXECHECK,     
three programs which help keep your files safe from disaster.           
                                                                        
Simply activate SYSGUARD and the following potentially destructive      
commands will not be able to be performed: 1) disk format (including    
diskcopy); 2) disk write which bypasses DOS; 3) removal of a files      
read-only attribute; and 4) write to a read-only file.  If any of these 
actions are attempted, a message is displayed and the operation is      
prevented from taking place.  A simple command deactivates SYSGUARD and 
you again have access to any of the above actions.  SYSGUARD is an      
efficient terminate-stay-resident program using only 1K of RAM and can  
be used alongside other TSR programs.                                   
                                                                        
ATTRIB allows you to change the attribute of your files to read only,   
hidden, system, or archive.  ATTRIB is similar to the DOS ATTRIB command
but includes the capability to change attributes to hidden or system.   
Use ATTRIB to make your program files read only so SYSGUARD can keep the
safe from sabotage.                                                     
                                                                        
EXECHECK searches for .EXE programs that may have been patched or       
contaminated with a virus.  If discovered, EXECHECK can attempt removal 
of the virus.  EXECHECK is available only to registered users.          
************************END*************************                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SYSGUARD.DOC

{% raw %}
```
Usage of SYSGUARD.COM


SYSGUARD

When this command is entered, followed by the enter key, the
program will respond by returning its current status to the user on
the display. This will be one of the following:-

1. Active. i.e. SYSGUARD is resident and active.

2. Inactive. i.e. SYSGUARD is resident, but not currently active.

3. No longer resident.


SYSGUARD ON

This loads SYSGUARD, if not already resident, and sets its status
to active. All dangerous operations from now on will be prevented
by SYSGUARD. A message will be displayed on the console if such an
operation is detected.


SYSGUARD OFF

This loads SYSGUARD, if not already resident, and sets its status
to inactive. Dangerous operations are now permitted. i.e. you now
have no protection. This command is usually entered, when you need
to carry out a dangerous operation, such as formatting a disk,
using SYS.COM to transfer DOS to another disk etc. Allowing such
operations to take place without any interruptions.

When you have completed such an operation you may enter:
SYSGUARD ON to regain protection.


SYSGUARD OUT

This will deinstall SYSGUARD if it is currently resident, and able
to be removed, without causing a memory allocation error. Once
removed, you again have no protection. This command should be used
with care.



Protection Mechanism

When SYSGUARD is active, it will prevent the deletion of any read
only file or program. It will also stop any writes to such files.
All write and format operations that bypass DOS will be prevented.
Thus when active, SYSGUARD can prevent a virus from spreading to a
new program, if that program is read only. The boot sector on the
disk is also used as a means of transmitting some types of virus.
However if SYSGUARD is active any direct non dos writes, including
the boot sector will be prevented.

SYSGUARD uses the presence of a read only attribute for a file to
indicate that it should be protected. (i.e. any file or program
that does not have a read only attribute, may be written to.)
Thus only files and programs with the read only attribute set are
protected. SYSGUARD will allow a read only attribute to be set, but
while active will prevent the removal of any read only attribute.
It will even prevent its companion program ATTRIB.COM, from
removing such an attribute.

You might think this is a bit extreme, or even a bug. However we
have our reasons. Suppose for example a virus infected program is
attempting to spread itself to one or more of your other programs.
If it attempted to write to a read only program, then SYSGUARD
would prevent it.

However the virus may be more intelligent, and first attempt to
remove the program files read only attribute before writting to the
file. If we allowed this to happen, SYSGUARD would see the program
as non protected and allow the virus to do its dirty work.

However, not to worry, thankfully this is not the case. When
active, SYSGUARD, will prevent any program from removing a read
only attribute. Thus our files and programs will remain safe.

N.B. If you need to write to one of the files you have set to read
only, then first set SYSGUARD inactive, then use ATTRIB, to remove
the read only attribute. The file may now be written to. Once this
is complete we recommend that SYSGUARD is reactivated and the file
changed again to read only. Please note that the above procedure
should be followed, if carring out modifications to a read only
file, with a word processor or editor etc. For ease of use you
might consider writting a batch file to automate this process.
(See discussion below.)

Some virus or trojan programs may attempt to format your hard and
floppy disks. If SYSGUARD is active then these operations will be
prevented.

If you need to format some disks, or do a diskcopy, or perhaps
remove a program or files read only attribute, then SYSGUARD must
first be made inactive by entering: SYSGUARD OFF
After you have completed your task, you can regain the protection
of SYSGUARD by entering: SYSGUARD ON

There are no configuration files to maintain, as required by most
other virus protection systems. This is one of the reasons why
SYSGUARD is so fast yet still effective. Yet its so simple to use,
that you should rarely need to refer to the documentation.


Recommendations

Idealy SYSGUARD should be placed in your AUTOEXEC.BAT file, and set
to active, as in the following command:	SYSGUARD ON

All your .COM and .EXE programs can be set to read only, for
maximum protection. This need only be done once. i.e. use our
ATTRIB program to accomplish this.

Write a batch file for each dangerous operation. The following
FMT.BAT is an example of such a file:-

	SYSGUARD OFF
	FORMAT %1
	SYSGUARD ON

Disks can now be formatted without having to worry about the status
of SYSGUARD by executing the following: FMT drive:
Where drive: may be replaced by any drive letter. e.g. fmt b:

The same sort of thing can be accomplished with other commands,
like diskcopy etc.

This method of operation, has a number of advantages and writting
of batch files are described in you DOS manual.

Perhaps one of you worries is that a person working in the same
office will attempt willful destruction of the programs and data
held on your PC. Well a little common sense can protect you from
most disasters:-

You could rename SYSGUARD.COM and ATTRIB.COM, to something known
only to you. You could even make it hidden using ATTRIB. This
should prevent SYSGUARD from being turned off by some unauthorised
user. You could make batch files hidden as well, and store
dangerous programs like FORMAT and SYSGUARD in secret directories. 

This reduces the likelyhood of damage caused by unauthorised use.
You could even design batch files that ask for a password to be
entered before agreeing to execute.

We could go on and on. Its really just common sense, and you are
bound to think of a sensible solution based on SYSGUARD and ATTRIB
that meets your needs.

N.B. Don,t forget to set SYSGUARD.COM and ATTRIB.COM to read only.
After all you wouldn't want these to become infected with a virus.
Then you really would have problems. Also when you copy programs to
new floppy or hard disk, Dos does not copy the attributes as well.
Thus if a read only file or program is copied from drive a: to
drive b: , it will not be read only on drive b: Thus you will need
to use ATTRIB to set this file to read only too.

It is immportant to remember that SYSGUARD can only protect your
system from attack, if it is resident and active. During a warm or
cold boot, you have no protection whatsoever until SYSGUARD ON is
executed. It is during this time that virus infection might take
place. However the only way this is likely to happen is by booting
from an unchecked floppy disk.

This floppy disk may have a virus in the boot sector, which could
be used to infect your programs or other disks.

When ever possible use COPY or XCOPY, and not DISKCOPY, to copy
files from new disks, and avoid booting from an original floppy
disk, since it may have a patched boot sector.


Please examine the READ.ME file for details of registration etc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2444

     Volume in drive A has no label
     Directory of A:\

    READ     ME       4864   3-14-90   1:17a
    SYSGUARD DOC      7296   3-14-90   1:32a
    ATTRIB   DOC      2688   3-14-90   1:21a
    SYSGUARD COM      1337   3-14-90   1:23a
    ATTRIB   COM      2670   3-14-90   1:23a
    FILE2444 TXT      2813  10-23-90   5:20p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       925   1-01-80   9:47a
            8 file(s)      22633 bytes
                          135168 bytes free
