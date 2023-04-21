---
layout: page
title: "PC-SIG Diskette Library (Disk #2287)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2287/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2287"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE/ARCHIVE"

    At last, a self-activating utility for analyzing and archiving files on
    a hard disk. Using criteria set by the user, the system looks for files
    which may no longer be active and offers the user the opportunity to
    either remove them completely or archive (move) them from their current
    location. Technically a hard disk is not required, but the system's
    value is in its ability to scan large amounts of data and automatically
    select data needing attention.
    
    To use the system, pre-select directories to be periodically analyzed.
    A master configuration record tells FILE/ARCHIVE how often to look at
    directory entries to see whether they should be analyzed. By including
    the proper command in the AUTOEXEC.BAT file, the system can be made
    totally automatic. The only thing it will not do automatically is
    actually archive files -- it merely presents the files that meet the
    selection criteria in a menu and asks if you would like to archive or
    delete any of them. Any files that are selected are then moved to a
    designated archive location, usually a floppy disk.
    
    Customize several parameters such as a variety of default values,
    specify whether to include system or hidden files in the analysis
    (although it won't allow you to archive such files as long as they have
    those attributes), specify whether or not to use DOS' Write
    Verify feature, assign your own function keys, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2287.TXT

{% raw %}
```
Disk No: 2287                                                           
Disk Title: File/Archive                                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: FILE/ARCHIVE                                             
Author Version: 1.50                                                    
Author Registration: $50.00                                             
Special Requirements: Hard drive recommended.                           
                                                                        
                                                                        
This is a self-activating utility for analyzing and archiving files on a
hard disk. Utilizing a variety of criteria set by the user, the system  
looks for files which may no longer be active and offers the            
opportunity to either remove them completely or archive (move) them     
from their current location. Technically a hard disk is not required,   
but the system's value is in its ability to scan large amounts of data  
and automatically select data needing attention.                        
                                                                        
To use the system, pre-select directories to be periodically analyzed.  
A master configuration record tells FILE/ARCHIVE how often to look at   
directory entries to see whether they should be analyzed.  By including 
the proper command in the autoexec.bat file, the system can be made     
totally automatic.  The only thing the system will not do automatically 
is actually archive files - it merely presents the files that meet the  
selection criteria in a menu and asks if you would like to archive or   
delete any of them.  Any files that are selected are then moved to a    
designated archive location, usually a floppy disk.                     
                                                                        
You can customize several parameters such as a variety of default       
values, specify whether to include system or hidden files in its        
analysis (although it won't allow you to archive such files as long as  
they have those attributes), specify whether or not to use DOS' write   
verify feature, assign your own function keys, etc. You can also select 
any combination of colors.                                              
                                                                        
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


          Thank you  for considering  File/Archive. We  hope  you  find  it
          useful.   As you  will see  in the license, you are acquiring the
          right to use this product; you do not own it.  Since this program
          is offered  as a  shareware program,  you need  to  register your
          copy of  the  system  in  order  to  become  a  fully  supported,
          registered user.   When you register your copy of File/Archive by
          remitting the  registration fee  of  $50,  we  will  send  you  a
          registered copy  of the programs containing the latest updates, a
          printed copy  of the  complete documentation,  and add you to our
          list of  registered users.  (Indiana residents add 5% sales tax -
          $2.50.)   You will  then be entitled to telephone support for any
          problems or questions that may arise.  We will also notify you as
          new releases  become available.   Several additional enhancements
          are already  under development.   We also welcome suggestions for
          additions  and   improvements   to   the   File/Archive   system.
          Correspondence and registration fees should be sent to:

                                 Marcor Enterprises
                              8857 Commerce Park Place
                                       Suite D
                               Indianapolis, IN 46268

          After you  have installed  File/Archive, there  will  be  a  file
          called LICENSE.DOC  which contains  the license  agreement and  a
          file called  FORM.DOC containing  a form  which may  be  used  to
          register your  copy of  File/Archive.   Just print the file, fill
          out the registration form, and send it in with your fee.


          "Packing List"


          The files  on the  distribution disk  and their  contents are  as
          follows:

          FILARC10.EXE      Self-extracting  compressed   file   containing
                            programs/files  that   are  extracted   to  the
                            installation drive/directory.
          FAS.MRE           Serial number file.
          HDINST.BAT        Procedure for installing File/Archive.
          INTRO.BAT         Batch file for viewing INTRO.TXT.
          INTRO.TXT         Introduction to  File/Archive,  including  this
                            list of files.
          PBS-VIEW.COM      Program for  viewing  any  ASCII  file  (Public
                            Brand Software, Inc.).
          README.BAT        Introductory file explaining compressed files
          README2.BAT       File giving initial installation instructions.
          USERDOC.EXE       File/Archive documentation in a self-extracting
                            compressed file.



          Page 2




          The files included in FILARC10.EXE and their contents are:

          BRUN45.EXE        Program support module supplied by Microsoft.
          FA.EXE            File/Archive startup program.
          FA0.EXE           Main program for all File/Archive functions.
          FAX.EXE           File/Archive analysis and archiving program.
          FACS.EXE          Program   for    moving   serial    number   to
                            installation location.
          FILARC.MRE        Startup master  file with initial configuration
                            data and one sample entry.
          HDINST2.BAT       Batch file used in installation.
          INSTBAT.BAT       Batch file for creating user batch files.
          INSTBAT.TXT            "        "     "         "
          INSTBAT2.TXT           "        "     "         "


          The files included in USER.EXE and their contents are:

          FORM.DOC          Registration form.
          LICENSE.DOC       License agreement.
          SUMMARY.BAT       Batch file for viewing SUMMARY.TXT.
          SUMMARY.TXT       A brief description of File/Archive.
          UPDATE.BAT        Batch file for viewing UPDATE.TXT.
          UPDATE.TXT        Last minute information about the system.
          USER.DOC          File/Archive reference manual.


          GETTING STARTED

          File/Archive may  be  installed  on  your  hard  disk  using  the
          automatic installation  procedure provided.  It assumes that your
          hard disk  is drive C: and will install the system in a directory
          called FILARC.   IT  GIVES YOU  THE OPPORTUNITY TO OVERRIDE THESE
          PARAMETERS IF  YOU WISH.   It will also create two batch files in
          the root  directory of  drive C:,  but again,  will give  you the
          opportunity to  override this.   IT WILL NOT INSTALL ANY OF THESE
          FILES IF ANY ONE OF THEM ALREADY EXISTS.

          If you  don't want  to use  the installation  procedure provided,
          establish a  directory where  you want the system installed; make
          that directory  current; type  A:FILARC10 and  press enter;  type
          A:USER and press enter; run program FACS.  If you want the system
          to  create   the  batch  files,  run  INSTBAT  according  to  the
          instructions in that file.



          Page 3



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


          THE GUARDIAN:

          The Guardian  is a  security system designed to protect an entire
          disk (either a hard disk or a diskette) against unauthorized use.
          Individual files  on a  disk may  or may  not be  protected by  a
          password mechanism  or an  encryption routine.  The Guardian uses
          an algorithm  that logically  "locks" a  disk so  that NO  files,
          programs or directories on the disk may be accessed regardless of
          whether they  are otherwise secured.  Although designed primarily
          to protect  a hard  disk, it can just as easily be used to lock a
          diskette -  a very useful feature for a disk that isn't locked up
          in a safe every day.

          The Guardian presents a sign-on  menu every time you turn on your
          computer and, if you don't properly identify yourself, it "locks"
          the disk,  making all  files untouchable.  Only you have the tool
          to unlock  it.   In case  someone knows  that you have a security
          system, you  might fear  that they will boot your computer from a
          diskette and  then go roaming through your hard disk.  To prevent
          this, just  call up  The Guardian  and tell  it to lock your disk
          before you leave - you're immediately  protected.  When your disk
          is locked,  no one  can access  your files or even see what files
          are there.   It takes less than a second to lock or unlock a hard
          disk and just a little bit longer for diskettes.

          In addition  to the  sign-on program,  the system  comes  with  a
          program for  setting colors,  setting or  changing up  to six (6)
          passwords, and  selectively locking  or unlocking  any disk.   To



          Page 4


          unlock a  disk, you  must know  the master  password that  was in
          effect when the disk was originally locked.

          Price: $40

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

### Directory of PC-SIG Library Disk #2287

     Volume in drive A has no label
     Directory of A:\

    FAS      MRE        32  12-26-89   1:59p
    FILARC10 EXE    246720   1-31-90  12:46p
    HDINST   BAT      3897   9-13-89  12:29p
    INTRO    BAT        48   6-12-89  10:29a
    INTRO    TXT      9173   1-31-90  10:01a
    PBS-VIEW COM      2432   5-06-87   1:24a
    README   BAT      1673   6-27-89   3:28p
    README2  BAT      1867   9-13-89  11:52a
    USERDOC  EXE     49245   1-31-90  12:49p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       671   1-01-80   8:25a
    FILE2287 TXT      2961   7-17-90   3:58p
           12 file(s)     318759 bytes
                           37888 bytes free
