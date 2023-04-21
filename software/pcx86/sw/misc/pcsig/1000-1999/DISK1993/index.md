---
layout: page
title: "PC-SIG Diskette Library (Disk #1993)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1993/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1993"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE-SAFE"

    You know you should back up your files regularly, but you never seem to
    get around to it.  FILE-SAFE will help you remember.  Loaded in your
    autoexec.bat, it will tell you what files need backing up according to
    how often you told it to remind you.
    
    You pre-select directories/files to be backed up and frequencies for
    each.  When this backup program is included in the autoexec.bat file,
    the system automatically scans a master file of backup schedules and
    presents only those items needing backup.  If no backups are needed, the
    program returns directly to DOS.
    
    Entries needing backup are presented in menu form with single key
    selection of backup parameters along with information about previous
    backups.  Parameters are saved with each backup and offered as the
    default selection on successive backup runs until changed.  At any time,
    the program can be forced to display, for backup action, all
    directories/files in its master configuration file.
    
    Results of every backup attempt are saved in a history file containing
    date and time of activity, results (successful, or if not, why not),
    and, for successful backups, the label of the backup disk.  You also
    have full control over maintaining your backups and restoration.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1993.TXT

{% raw %}
```
Disk No: 1993                                                           
Disk Title: File-Safe                                                   
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: File-Safe                                                
Author Version: 3.00                                                    
Author Registration: $50.00                                             
Special Requirements: Hard drive is recommended.                        
                                                                        
You know you should back up your files regularly, but you never seem to 
get around to it.  FILE/SAVER will help you remember.  Loaded in your   
autoexec.bat, it will tell you what files need backing up according to  
how often you told it to remind you.                                    
                                                                        
You pre-select directories/files to be backed up and frequencies for    
each.  When this backup program is included in the autoexec.bat file,   
the system automatically scans a master file of backup schedules and    
presents only those items needing backup.  If no backups are needed, the
program returns directly to DOS.                                        
                                                                        
Entries needing backup are presented in menu form with single key       
selection of backup parameters along with information about previous    
backups.  Parameters are saved with each backup and offered as the      
default selection on successive backup runs until changed.  At any time,
the program can be forced to display, for backup action, all            
directories/files in its master configuration file.                     
                                                                        
Results of every backup attempt are saved in a history file containing  
date and time of activity, results (successful, or if not, why not),    
and, for successful backups, the label of the backup disk.  You also    
have full control over maintaining your backups and restoration.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INTRO.DOC

{% raw %}
```







                                    INTRODUCTION


          Thank you for considering File-Safe.  We hope you find it useful.
          As you  will see  in the  license, you are acquiring the right to
          use this  product; you  do not  own it.   Since  this program  is
          offered as  a shareware  program, you need to register  your copy
          of the  system in  order to  become a fully supported, registered
          user.   When you register your copy of File-Safe by remitting the
          registration fee  of $50  ($52  outside  the  continental  United
          States), we  will  send  you  a  printed  copy  of  the  complete
          documentation and  will add  you to our list of registered users.
          Add $4.00  for shipping/handling;  Indiana residents add 5% sales
          tax -  $2.50.  You will then be entitled to telephone support for
          any problems  or questions  that may  arise.  We will also notify
          you as new releases become available.  We welcome suggestions for
          additions   and    improvements   to    the   File-Safe   system.
          Correspondence and registration fees should be sent to:

                            Marcor Enterprises
                            8857 Commerce Park Place,
                            Suite D
                            Indianapolis, IN 46268

          After you  have installed  File-Safe, there will be a file called
          LICENSE.DOC which  contains the  license  agreement  and  a  file
          called FORM.DOC  containing a  form which may be used to register
          your copy  of File-Safe.   Just  print the  file,  fill  out  the
          registration form, and send it in with your fee.


          "Packing List"


          The files  on the  distribution disk  and their  contents are  as
          follows:

          FILESAFE.EXE   Self-extracting  compressed file containing the
                         programs, documentation,  and other files that are
                         extracted to the installation drive/directory.
          FIS.MRE        Serial number file.
          INSTALL.BAT    Batch file for installation procedure.
          INTRO.DOC      "This file" containing an Introduction to File-
                         Safe including this listing of files on the
                         distribution disk.
          README.BAT     Introductory file explaining compressed files
          README2.BAT    Preliminary instructions on how to install File-
                         Safe.



          Page 2



          The files included in FILESAFE.EXE and their contents are:

          FI.EXE         File-Safe backup program.
          FICS.EXE       Program for moving serial number to installation
                         location.
          FILESAFE.MRE   Startup master file with initial configuration
                         data and one sample entry.
          FIM.EXE        Main program for all File-Safe functions.
          FORM.DOC       Registration form.
          HDINST2.BAT    Batch file used during installation.
          INSTBAT.BAT    Batch file for creating user batch files.
          LICENSE.DOC    License agreement.
          SUMMARY.DOC    A summary description of File-Safe.
          UPDATE.DOC     Last minute information about the system.
          USER.DOC       File-Safe documentation.


          GETTING STARTED

          File-Safe may  be installed on your hard disk using the automatic
          installation procedure  provided -  INSTALL.BAT.  It assumes that
          your hard  disk is  drive C:  and will  install the  system in  a
          directory called  FILESAFE.   IT GIVES  YOU  THE  OPPORTUNITY  TO
          OVERRIDE THESE  PARAMETERS IF  YOU WISH.  It will also create two
          batch files  in the  root directory  of drive C:, but again, will
          give you  the opportunity  to override this.  IT WILL NOT INSTALL
          ANY OF THESE FILES IF ANY ONE OF THEM ALREADY EXISTS.

          For complete  step by  step instructions on installing File-Safe,
          refer to page 6 of the Reference Guide.


          ADDITIONAL PRODUCTS FROM MARCOR ENTERPRISES:


          FILE/ARCHIVE:

          Automatically scan  your hard  disk for  old unused files using a
          variety of selection parameters.  View the data and decide if you
          still need  the file. You can then either delete it or archive it
          to a  diskette and thus free up valuable space on your hard disk.
          The archived  file is  then recorded  in a  catalog available for
          instant recall.   The catalog tells you every file which has been
          archived, its  date and time, where it was archived from, when it
          was archived,  and the name of the disk where it now resides.  To
          recall it,  just put the archive disk in the disk drive and press
          a key.   It's that simple.  You can also recall the file to a new
          destination or you can "copy" it, thus leaving it in the archive.
          You can have File/Archive scan your data automatically and on any
          schedule you  wish.   If  nothing meets the criteria for possible
          archiving, File/Archive  automatically returns you to DOS and you



          Page 3


          don't even  realize it  has been  run.   It's an extremely useful
          tool for  keeping your  hard disk from becoming so cluttered that
          you can't keep track of it all.

          Price: $50


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

### Directory of PC-SIG Library Disk #1993

     Volume in drive A has no label
     Directory of A:\

    FILESAFE EXE    304436   6-04-90  12:40p
    FIS      MRE        32  10-27-89   1:42p
    INSTALL  BAT      3921   2-12-90   4:25p
    INTRO    DOC      8287   2-12-90   4:00p
    README   BAT       847   2-12-90   4:11p
    README2  BAT      1869   2-12-90   4:05p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       652   1-01-80   8:18a
    FILE1993 TXT      2739   7-13-90  11:35p
            9 file(s)     322821 bytes
                           34816 bytes free
