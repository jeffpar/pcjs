---
layout: page
title: "PC-SIG Diskette Library (Disk #2445)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2445/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2445"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BACKREM"

    Do you back up your hard drive as often as you should?  Like most
    computer users, you've probably been putting it off for months and would
    face heavy losses if your hard drive should crash tomorrow.  You need a
    way to keep on your back-up schedule.
    
    BACKREM reminds you when it's time to do a back-up, and then it runs the
    program.  Just tell BACKREM how often you want the back-up to occur
    (e.g., every 5 days) and place it in your autoexec.bat file.  On days
    you don't have to do a back-up, a message lets you know how many days
    have gone by since the last one.  On the actual back-up day, BACKREM
    gives you the choice of doing the back-up or waiting until next time.
    If you need to do a back-up off schedule, you can make BACKREM run at
    any time. For those who need several copies to secure sensitive data,
    BACKREM allows up to five copies of the same back-up to be created at a
    time. BACKREM is a must for people who want to be sure to keep their
    data safe.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BACKREM.DOC

{% raw %}
```



















                                             BackRem 2.0 - User's Manual
            ------------------------------------------------------------

                          Copyright (C) 1989, Matrix Computer Consulting
                                       Copyright (C) 1989, Stuart Morris
                                                     All Rights Reserved

                                                          November, 1989













                            Matrix Computer Consulting, 1-406 Baxter St.
                                      Whitehorse, Yukon, Canada  Y1A 2T5



                                             BackRem 2.0 User Manual - 1
            ------------------------------------------------------------


            TABLE OF CONTENTS

                 Table of Contents.................................1

                 Copyright Information.............................2

                 Introduction......................................2
                      How BackRem Works............................3
                      Backups and Your Hard Disk...................3

                 Installing BackRem................................5

                 Configuring BackRem...............................5
                      The Configuration File Name..................6
                      The Backup Program...........................6
                      Number of Backups............................6
                      Number of Days Between Backups...............6

                 Running BackRem...................................6

                 Batch Files.......................................6

                 Special Backups...................................7

                 Forcing Backreq to Activate.......................7

                 Using a Different Configuration File..............7

                 Options When BackRem is Active....................8

                 Editing Configuration Files.......................9



                                             BackRem 2.0 User Manual - 2
            ------------------------------------------------------------

            COPYRIGHT INFORMATION

                 Although this program is copyrighted and is NOT in the
                 public domain, it can be copied and used by any person
                 for personal, private use as long as the following
                 conditions are met:

                 -    The program and/or its files be unchanged;

                 -    The program and/or its files must not be included
                      or bundled with any other product, especially
                      other software, without the written permission of
                      Matrix Computer Consulting;

                 -    No fee may be charged for the program and/or its
                      files, or for the service of providing the program
                      and or its files (other than legitimate connection
                      charges to computer bulletin board services)
                      without the written permission of Matrix Computer
                      Consulting;

                 -    BackRem may ONLY be used by individuals for
                      personal use. Organizations and/or companies
                      wishing to use BackRem on a site license basis are
                      required to make licensing arrangements with
                      Matrix Computer Consulting.

                 If you like this program and feel like supporting the
                 author, a registration fee of $10 would be greatly
                 appreciated. Cheques should be made out to Matrix
                 Computer Consulting, and sent to 1-406 Baxter St.,
                 Whitehorse, Yukon, Canada, Y1A 2T5.

            INTRODUCTION

                 Getting someone (including yourself) to do regular
                 backups can be a near-impossible task. When the user
                 and/or computer system is new, backups are done
                 regularly with enthusiasm. However, several months of
                 backups without the reward of a hard disk crash is
                 enough to rob even this task of its considerable charm.
                 Longer and longer periods go by between backups, until
                 the inevitable loss of several months worth of data.

                 BackRem (BACKup REMinder) is designed to be a reminder
                 from the system itself that it's time to do a backup.
                 The program calls up whatever backup program that you
                 use, and remembers the time and date of the backup. It
                 can also manage a cyclical backup system for sensitive
                 data.



                                             BackRem 2.0 User Manual - 3
            ------------------------------------------------------------

                 IMPORTANT - BackRem does NOT and CANNOT do backups
                 itself. It isn't a backup program. Instead, it calls
                 other programs that you specify to do the backup. It's
                 up to you to make sure that the backup program that you
                 use is reliable and will do the job properly.

                 HOW BACKREM WORKS

                 When BackRem is run, it reads a configuration file that
                 contains information about the name and location of
                 your backup program, how often you want to do backups,
                 and the number of discrete backups you have in your
                 system.

                 If you've told BackRem that you want a certain number
                 of days to pass between backups, it checks the system
                 clock for today's date, and then compares that with the
                 date of the last backup. If the number of elapsed days
                 have exceeded the safety limit, and pops up with a
                 reminder.

                 If you have a cyclical backup system, BackRem remembers
                 which backup was done last time, and can prompt you for
                 the appropriate backup.

                 BACKUPS AND YOUR HARD DISK

                 Before going any further, a note about backups and your
                 hard disk. Doing backups is a pain. Anything that you
                 can do to make the experience less tedious will pay off
                 in more frequent backups. Try these steps toward a more
                 fulfilling backup experience.

                 -    Get a good backup program. Floppy disk-based
                      backup systems are getting cheaper and faster all
                      the time. The less time you spend shuffling disks
                      in and out of your drives the better. A tape based
                      backup system is slower and more expensive, but
                      you don't have to do the floppy disk shuffle.

                 -    You seldom need to back up your entire hard disk.
                      Most of the occupied bytes on your hard disk are
                      programs, and you already have those on floppy
                      disk, right? Then why spend 80% of your backup
                      time copying them to floppy disk again? If you
                      have a hard disk crash, you'll have to spend some
                      time re-configuring and installing, but the time
                      you'll save during the backup itself pays for
                      itself a hundred times over.



                                             BackRem 2.0 User Manual - 4
            ------------------------------------------------------------

                 -    If you still feel that you have to back up your
                      entire hard disk, create two backups: A volatile
                      data backup done frequently, and a second system-
                      wide backup done less frequently. BackRem can
                      handle multiple backups with ease.

                 -    Arrange your hard disk properly so that backups
                      can be done to entire branches of subdirectories.
                      For example, if you have a lot of word processing
                      and database files that need backing up, put them
                      into a subdirectory system something like this:

                      ROOT +----- APP  +-----      (application programs
                           |           +-----       here - no volatile
                           |           +-----       data)
                           |
                           +----- DATA +----- PROJECT    (all user data
                           |           +----- DATABASE    goes in this
                           |           +----- GRAPHICS    area)
                           |           +----- ETC
                           |
                           (etc)

                      This keeps things simple: all your volatile data
                      is stored in the same branch. All you have to do
                      is tell your backup program to back up \DATA and
                      all its subdirectories.

                 -    Use multiple backup cycles for sensitive data.
                      Suppose you're doing a backup of your critical
                      accounting data, and a power surge flattens both
                      your hard disk AND your backup? What then? Or what
                      if your hard disk crashes, you go to restore your
                      carefully backed up data, and you find that the
                      disks are bad? Not good.

                      The solution is to do a multiple backup cycle.
                      EG - do three separate backups of the same data.
                      You do backup "A" on Monday, backup "B" on
                      Tuesday, backup "C" on Wednesday, and backup "A"
                      on Thursday. You use more disks, but it's easy and
                      it's safe. It also has the additional advantage of
                      allowing you access to data from several backups.
                      If you've ever corrupted a database, gone to the
                      backup and found that also corrupted, you'll see
                      the advantage of this feature.



                                             BackRem 2.0 User Manual - 5
            ------------------------------------------------------------

            INSTALLING BACKREM

                 All the BackRem files should be in the same
                 subdirectory (BACKREM.EXE, BRCONFIG.EXE, and *.BRC
                 files). The backup program that you use does NOT have
                 to be in the subdirectory, but you have to tell BackRem
                 where the backup program is. The BackRem files can be
                 on any drive, but it's strongly recommended that they
                 be installed on a hard disk.

                 If BackRem and BRConfig are placed in a directory on
                 the DOS Path, then they can be called simply by typing
                 their names. Otherwise they have to be called by typing
                 in their full path and filename.

                 If BackRem and BRConfig are being used under DOS 3.0 or
                 higher, they can find their configuration files
                 themself by searching the directory that their program
                 files are stored in.

            CONFIGURING BACKREM

                 Before BackRem can be used, it has to be configured
                 first. This is done using the BRCONFIG program (Backup
                 Reminder CONFIGuration). BRConfig allows you to create
                 and edit the BackRem configuration files, letting it
                 know things like the name and location of your backup
                 program, how often you'd like a reminder to back up,
                 and the number of backup cycles that you intend to use.

                 To run BRConfig, type in its name on the command line,
                 followed (optionally) by the name of the configuration
                 file that you're going to work with.

                 BRConfig will ask you for four pieces of information:

                 -    the name of the configuration file to work with;

                 -    the name and location of your backup program;

                 -    the number of backups in your backup cycle; and

                 -    the number of days that should elapse before a
                      backup reminder.



                                             BackRem 2.0 User Manual - 6
            ------------------------------------------------------------

                 THE CONFIGURATION FILE NAME

                 When you call BackRem without specifying a
                 configuration file name, it looks for its default
                 configuration file BACKREM.BRC. If you only do one type
                 of backup on your system, this is the file you want to
                 configure.

                 If you tell BRConfig that you want to edit a
                 configuration file that doesn't exist, it'll ask you if
                 you want to create a file of that name.

                 THE BACKUP PROGRAM

                 When telling BRConfig the name of your backup program,
                 you should specify the full pathname, the filename
                 extension (.EXE, .COM. or .BAT), and include any
                 command line parameters. After pressing ENTER, BRConfig
                 will make sure that the file exists. If it doesn't,
                 it'll let you know.

                 NUMBER OF BACKUPS

                 If you use a multiple backup cycle, enter the number of
                 backups that you use in this field. BackRem can handle
                 up to 5 backups in a cycle, and it labels them A to E.

                 NUMBER OF DAYS BETWEEN BACKUPS

                 If you want BackRem to pop up every time it's called,
                 this field should contain "0".

                 However, if you're calling BackRem from a batch file
                 (like the Autoexec.bat file), you should set this to
                 the number of days that you feel it's safe to pass
                 between backups. If you want to perform a backup every
                 week, enter "6" in this field. This way, every seventh
                 day, BackRem will pop up when you turn on your system.

            RUNNING BACKREM

                 BATCH FILES

                 BackRem is really designed to be called from a batch
                 file, particularly from the Autoexec.bat file. For
                 example, if you have BackRem configured to be activated
                 after 3 days have elapsed without a backup, and BackRem
                 is called by your Autoexec.bat file, BackRem will check
                 the system date every time you turn on or boot your
                 system. If three days or less have elapsed, you'll just



                                             BackRem 2.0 User Manual - 7
            ------------------------------------------------------------

                 get a message on your screen indicating the number of
                 days since your last backup.

                 After the specified number of days is exceeded, the
                 full BackRem screen will pop up and ask you if you want
                 to do a backup. If there isn't time to do a backup, you
                 can tell it to shut up, and it will, but it'll pop up
                 again the next time you boot.

                 Once a backup is done, it'll go dormant again until the
                 number of days since the last backup has been exceeded.

                 SPECIAL BACKUPS

                 If you want BackRem to be run every time you run your
                 accounting program, you should tie BackRem into the
                 batch file that you use to call the program. For
                 example, if you were using an accounting package called
                 "ACCOUNT.EXE", you might have a batch file along these
                 lines:

                      CD \DATA\ACC_DATA
                      \UTIL\BACKREM
                      \APP\ACC\ACCOUNT
                      CD \

                 This way, every time the accounting program is run,
                 BackRem checks to see when the last backup of the
                 accounting data was done.

            FORCING BACKREM TO ACTIVATE

                 Sometimes you may wish BackRem to activate no matter
                 how many days have elapsed since the last backup
                 (before testing some potentially disk-damaging
                 software, for example). Simply call BackRem with a "/F"
                 on the command line. For example, if you had BackRem in
                 a subdirectory called \UTIL, you could force it to
                 activate by typing:

                      \UTIL\BACKREM /F

            USING A DIFFERENT CONFIGURATION FILE

                 Suppose that you wanted to use BackRem for two separate
                 backups? For example, if you did a regular backup of
                 your volatile data, but also did a complete system
                 backup once per month, you could set up a separate
                 configuration file for the system backup called
                 SYSTEM.BRC. Then, in your Autoexec.bat file, you could
                 have the following two lines:



                                             BackRem 2.0 User Manual - 8
            ------------------------------------------------------------

                      \UTIL\BACKREM
                      \UTIL\BACKREM SYSTEM

                 The first line calls BackRem without specifying a
                 configuration file. This makes it use its default
                 configuration file BACKREM.BRC.

                 The second line calls BackRem, but tells it to use the
                 information in a configuration file called SYSTEM.BRC.

                 Note that unless a subdirectory name is included with
                 the configuration filename, BackRem will look for the
                 configuration file in the same subdirectory as the
                 BACKREM.EXE file, NOT the current subdirectory.

            OPTIONS WHEN BACKREM IS ACTIVE

                 When BackRem has been activated, it displays a window
                 in the centre of the screen showing the times and dates
                 of the last five backups. If you're on a multiple
                 backup cycle, it'll also show the letters of the
                 backups (A, B, C, etc).

                 In a window near the bottom of the screen, it'll tell
                 you how many days have elapsed since the last backup,
                 and asks if it should do one now. At this point you
                 should type "Y" for Yes, "N" for No, or "R" for Re-do
                 the last backup.

                 If you respond with "N" for no, BackRem will simply
                 terminate. If you respond with "Y" for yes, BackRem
                 will tell you to prepare your backup before continuing.
                 You can press the ESC key at this point to back up, or
                 any other key to proceed with the backup.

                 At this point, BackRem runs the backup program that
                 you've specified. Once it has finished, control of the
                 computer returns to BackRem, and the configuration file
                 is updated.

                 IMPORTANT - BackRem has no way of knowing whether the
                 backup was successful or not. If the backup is messed
                 up for some reason, run BackRem with the a "/F" on the
                 command line (see above) and choose "R" to re-do the
                 backup. It's also strongly recommended that you test
                 your backup on a regular basis to ensure that your
                 backup program is working properly and that the data
                 being backed up is valid.



                                             BackRem 2.0 User Manual - 9
            ------------------------------------------------------------

            EDITING CONFIGURATION FILES

                 BackRem's configuration files can be re-edited at any
                 point using BRCONFIG. Dates and times of backups will
                 be retained, even if the number of days between backups
                 or number of backups in a cycle is changed.
```
{% endraw %}

## FILE2445.TXT

{% raw %}
```
Disk No: 2445                                                           
Disk Title: BackRem                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: BackRem                                                  
Author Version: 2.03                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Do you back up your disks as often as you should?  When the user and/or 
computer system is new, back-ups are done regularly with enthusiasm.    
However, several months of back-ups without the event of a hard disk    
crash fosters a false sense of security.  Longer and longer periods go  
by between back-ups, until ...the loss of several months' worth of      
valuable data.                                                          
                                                                        
BACKREM reminds you when it's time to do a back-up, and then it runs the
program.  Just tell BACKREM how often you want the back-up to occur     
(e.g. every 5 days) and place it in your autoexec.bat file.  On days you
don't have to do a back-up, a message displays letting you know how many
days have gone by since the last one.  On the actual back-up day,       
BACKREM gives you the choice of doing the back-up or waiting until next 
time.  If you need to do a back-up off schedule, you can make BACKREM   
run at any time.  For those who need several copies to secure sensitive 
data, BACKREM allows up to five copies of the same back-up to be created
at a time.                                                              
                                                                        
BACKREM is a must for people who want to be sure to keep their data safe
************************END*************************                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2445

     Volume in drive A has no label
     Directory of A:\

    BACKREM  EXE     50837  11-20-89  11:26a
    BRCONFIG EXE     54575  11-20-89  11:22a
    READ     ME        885  12-15-89   4:13p
    BACKREM  DOC     21386  12-15-89   4:20p
    FILE2445 TXT      2591  10-23-90   6:00p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1079  10-24-90  12:14a
            7 file(s)     131393 bytes
                           26624 bytes free
