---
layout: page
title: "PC-SIG Diskette Library (Disk #1787)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1787/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1787"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE GUARDIAN"

    THE GUARDIAN is a security system designed to protect an entire disk
    (either a hard disk or a floppy disk) against unauthorized use.  THE
    GUARDIAN uses an algorithm that logically "locks" a disk so that NO
    files, programs, or directories on the disk may be accessed.  This can
    be an added security to files that may already be encrypted or password
    protected.
    
    Many security programs load themselves from the AUTOEXEC.BAT file.  Such
    programs are easily skirted with a floppy boot.  THE GUARDIAN keeps
    disks locked tight until the "unlock" program is run.
    
    When a disk is locked by THE GUARDIAN, the files on that disk are not
    physically altered.  Rather, what is altered is the information that
    tells DOS where those files are.  An anti-virus file check is also built
    into the system.  Under no circumstances should this program be used
    before reading the instruction manual!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1787.TXT

{% raw %}
```
Disk No: 1787                                                           
Disk Title: The Guardian                                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: The Guardian                                             
Author Version: 1.50                                                    
Author Registration: $40.00                                             
Special Requirements: None.                                             
                                                                        
THE GUARDIAN is a security system designed to protect an entire disk    
(either a hard disk or a floppy disk) against unauthorized use.  THE    
GUARDIAN uses an algorithm that logically "locks" a disk so that NO     
files, programs, or directories on the disk may be accessed.  This can  
be an added security to files that may already be encrypted or password 
protected.                                                              
                                                                        
Many security programs load themselves from the AUTOEXEC.BAT file.  Such
programs are easily skirted with a floppy boot.  THE GUARDIAN keeps     
files disks locked tight until the "unlock" program is run.             
                                                                        
When a disk is locked by THE GUARDIAN, the files on that disk are not   
physically altered.  Rather, what is altered is the information that    
tells DOS where those files are.  An anti-virus file check is also built
into the system.  Under no circumstances should this program be used    
before reading the instruction manual!                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INTRO.TXT

{% raw %}
```







                                    INTRODUCTION


          Thank you  for considering  The Guardian.  We hope  you  find  it
          useful.   As you  will see  in the license, you are acquiring the
          right to use this product; you do not own it.  Since this program
          is offered as a shareware program, you need to register your copy
          of the  system in  order to  become a fully supported, registered
          user.   When you  register your copy of The Guardian by remitting
          the registration  fee of  $40 ($42 outside the continental United
          States), we  will send  you a  registered copy  of  the  programs
          containing the  latest updates,  a printed  copy of  the complete
          documentation, and  add you to our list of registered users.  Add
          $4.00 for  shipping and  handling; Indiana residents add 5% sales
          tax -  $2.00.  You will then be entitled to telephone support for
          any problems  or questions  that may  arise.  We will also notify
          you as new releases become available.  We welcome suggestions for
          additions   and    improvements   to   all   of   our   products.
          Correspondence and registration fees should be sent to:

                                 Marcor Enterprises
                              8857 Commerce Park Place
                                       Suite D
                               Indianapolis, IN 46268

          After you  have installed  The Guardian,  there will  be  a  file
          called LICENSE.DOC  which contains  the license  agreement and  a
          file called  FORM.DOC containing  a form  which may  be  used  to
          register your  copy of  The Guardian.   Just print the file, fill
          out the registration form, and send it in with your fee.


          "Packing List"

          The files  on the  distribution disk  and their  contents are  as
          follows:

          GUARDIAN.EXE      Self-extracting compressed  file containing the
                            programs.
          GUARDIAN.MRE      Initial configuration file
          USERDOC.EXE       The Guardian documentation in a self-extracting
                            compressed file.
          PBS-VIEW.COM      Program for  viewing any  ASCII file.   (Public
                            Brand Software, Inc.).
          INTRO.BAT         Batch file for viewing INTRO.TXT.
          INTRO.TXT         "This file"; Introduction to The Guardian.
          README.BAT        Introductory file explaining compressed files.
          README2.BAT       A caution  to read documentation before running
                            programs.



                                       Page 2


          The files included in GUARDIAN.EXE and their contents are:

          DISKINFO.EXE      A utility  program for  reading and  displaying
                            selected technical information about any disk
          TG.EXE            Sign-on program
          TGM.EXE           Main support  program containing  configuration
                            settings and lock/unlock facilities


          The files contained in USERDOC.EXE and their contents are:

          FORM.DOC          Registration form
          LICENSE.DOC       License agreement
          SUMMARY.BAT       Batch file for viewing SUMMARY.TXT
          SUMMARY.TXT       A brief description of The Guardian
          UPDATE.BAT        Batch file for viewing UPDATE.TXT
          UPDATE.TXT        Last minute information about the system
          USER.DOC          Documentation for The Guardian


          ADDITIONAL PRODUCTS FROM MARCOR ENTERPRISES:


          FILE/SAVER:

          This system  automatically determines when backups should be made
          and reminds  you whenever  you turn on your computer or ask it to
          check the  status of  backups.   You  can  set  different  backup
          criteria  for   any  combination  of  directories  or  files  and
          File/Saver only  tells you  about  those  files/directories  that
          currently should  be backed up.  If nothing needs backing up when
          File/Saver checks  it, it  automatically returns you to DOS.  You
          never have to worry about the hassle of remembering to do backups
          because File/Saver  automatically tells  you.    It  maintains  a
          complete history  of backup  activity, which  disks contain which
          backed up  files, and  allows you  to review  this information on
          screen or  produce a  printed report.   The system supports color
          and lets you choose any combination of colors or black & white.

          Price: $30


          FILE/ARCHIVE:

          Automatically scan  your hard  disk for  old unused files using a
          variety of selection parameters.  View the data and decide if you
          still need  the file. You can then either delete it or archive it
          to a  diskette and thus free up valuable space on your hard disk.
          The archived  file is  then recorded  in a  catalog available for
          instant recall.   The catalog tells you every file which has been
          archived, its  date and time, where it was archived from, when it



          Page 3


          was archived,  and the name of the disk where it now resides.  To
          recall it,  just put the archive disk in the disk drive and press
          a key.   It's that simple.  You can also recall the file to a new
          destination or you can "copy" it, thus leaving it in the archive.
          You can have File/Archive scan your data automatically and on any
          schedule you  wish.   If  nothing meets the criteria for possible
          archiving, File/Archive  automatically returns you to DOS and you
          don't even  realize it  has been  run.   It's an extremely useful
          tool for  keeping your  hard disk from becoming so cluttered that
          you can't keep track of it all.

          Price: $50


          All shareware versions of programs have 100% of the features that
          are in their registered counterparts.

          Shareware versions  of any  of the  above products  are available
          from Marcor  Enterprises for $4.00 (to cover the cost of shipping
          and handling).

          Registered  versions   may  be   ordered  directly   from  Marcor
          Enterprises by  sending  the  registration  fee  plus  $4.00  for
          shipping and  handling.   Outside the  continental United States,
          add $2.00;  Indiana residents  add 5%  sales tax  (based  on  the
          registration fee).

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1787

     Volume in drive A has no label
     Directory of A:\

    GUARDIAN EXE    199151   6-04-90  12:45p
    GUARDIAN MRE       128   4-20-90   3:54p
    INTRO    BAT        48   6-12-89  10:29a
    INTRO    TXT      6851   4-20-90   4:00p
    PBS-VIEW COM      2432   5-06-87   1:24a
    README   BAT      1446   8-16-89   1:12p
    README2  BAT       597   8-15-89   2:09p
    USERDOC  EXE     33724   5-16-90   4:18p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       653   7-10-90   4:45a
    FILE1787 TXT      2295   7-10-90   2:36p
           11 file(s)     247363 bytes
                           68608 bytes free
