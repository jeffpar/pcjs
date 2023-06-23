---
layout: page
title: "PC-SIG Diskette Library (Disk #1279)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1279/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1279"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE NAVIGATOR, DISKDUPE, AND VIRUSCHK"

    Steer your way around your hard disk with a sailor's ease.  No need to
    keep your sextant at hand -- NAVIGATOR knows how to direct you there.
    With this hard disk menu program, you'll get around without having to
    remember DOS commands.
    
    You can access programs and directories with point-and-shoot menus. The
    program lists up to 200 directories, programs, and files when you boot
    up.  Twenty-three files are displayed at a time.  To access a
    directory, or run a program, point an arrow at it and press Enter.  A
    handy command lets you instantly move to the root directory.  You can
    quickly display or erase files and empty directories.
    
    Ahoy, matey! Is that a .BAT file just above the horizon?
    
    DISKDUPE was made for folks who need to duplicate lots of programs or
    disks in various formats.
    
    It's versatile!  It copies 5.25" disks whether they are standard 360K,
    AT high-density 1.2MB disks, or even CPM/86 with eight sectors. It can
    also handle 720K and 1.4MB 3.5" disks.
    
    It's fast!  It duplicates 360K disks in less than 58 seconds.  Using
    pre-formatted disks, the time drops to less than 26 seconds.  DISKDUPE
    uses your hard disk as a buffer so you can copy high-density disks
    exceeding your RAM memory without slowing down.
    
    You can quickly format disks ahead of time, copy image files from a
    diskette onto your hard disk, and specify a list of hard disk image
    files to create or copy from.  It runs manually or with special
    auto-loader hardware available from the author.
    
    VIRUSCHK, a computer virus alarm, helps protect your system from viruses
    that can lay dormant and suddenly destroy all your files.  Days,
    weeks, or months of effort can be lost.  It detects any change to your
    files and reports this to you before the virus can do its damage.
    
    VIRUSCHK reads each file and performs a summing and encryption algorithm
    on each byte in the file.  A special data file is created containing
    this information and is used to recheck all files upon command for any
    changes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTENTS.TXT

{% raw %}
```

PC SIG:

I have enclosed the files necessary to use The NAVIGATOR.  The NAVIGATOR is
a very impressive hard disk menu program that I have written in Turbo C.
A short description of each of the files on this disk follows.

NAVMONO.COM - The version of NAVIGATOR used on monochrome systems
NAVCOLOR.COM - The version of NAVIGATOR used on color systems
INSTALL.EXE - A program that installs the appropriate version of NAVIGATOR to
              the hard disk
AUTONAV.BAT - A sample AUTOEXEC.BAT file which may be used in the installation
              process
NAVIGATE.DOC - The two page documentation for NAVIGATOR
NAVIGATE.FRM - The registration form
CONTENTS.TXT - This text file

Edward Garrett
7351 S.E. 31st
Portland, OR 97202

```
{% endraw %}

## FILE1279.TXT

{% raw %}
```
Disk No: 1279
Program Title:  THE NAVIGATOR, DISKDUPE, VIRUSCHK version 1.12
PC-SIG version:  2

Navigate around your hard disk with a sailor's ease.  Copy and format
disks swifter than a whitewater raft.  And fight off pesky computer
viruses before they attach to your hull!  Here's an able crew to make
your computing life smooth sailing.

A hard disk menu program, NAVIGATOR helps you get around your hard disk
without having to remember DOS commands.  You access programs and
directories with point-and-shoot menus.  When you boot up, the program
lists up to 200 directories, programs, and files.  Twenty three files
are displayed at a time.  To access a directory, or run a program, point
an arrow at it and press ENTER.  A handy command lets you instantly move
to the root directory.  You can quickly display or erase files and empty
directories.

DISKDUPE was made for folks who need to duplicate lots of programs or
disks.  Versatile, it copies 5.25" diskettes whether they are standard
360K, AT high-density 1.2M disks, or even CPM/86 with eight sectors.  It
also handles 720K and 1.4M 3.5" diskettes.

It's fast!  It duplicates 360K disks in less than 58 seconds.  Using
preformatted disks, the time drops to less than 26 seconds.  DISKDUPE
uses your hard disk as a buffer so you can copy high density disks
exceeding your RAM memory without slowing down.

You can quickly format disks ahead of time, make image files from a
diskette onto your hard disk, and specify a list of hard disk image
files to create or copy from.  It runs manually, or along with special
auto-loader hardware available from the author.

VIRUSCHK is a program to detect the effects of viruses.  Viruses can
destroy days, weeks, and months of your effort.  If you know that a
virus is damaging your files, you can recover.  The real danger is when
your data files are corrupted over time so that even the backups are
invalid.

VIRUSCHK reads all the files in a subdirectory and performs a summing
and encryption algorithm on each byte of the file, then stores this data
in a special data file.  Because you can (and should) change the
algorithm, viruses can not add non-functional code to defeat the
detection.  Then, when VIRUSCHK is re-run it will compare the code
signatures to those it calculated before.  If the file is unchanged no
further action will be taken.  If the file date and time as well as
contents have changed, for example when you installed a different
driver, VIRUSCHK will announce that a change has occurred and ask if you
want to update the data file.  However, if the file contents but not the
time or date have changed, you will be warned of the possible virus
infestation.  If you made the change intentionally you can still update
the data file.

Usage:  Hard Disk Utilities.

Special Requirements:  Hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for The NAVIGATOR, $39.00 for DISKDUPE,
$10.00 for VIRUSCHK.

File Descriptions:

AUTONAV  BAT  Batch file used in installation program.
CONTENTS TXT  Describes files.
DISKDUPE DAT  Data file.
DISKDUPE DOC  User guide.
DISKDUPE EXE  Main program.
DISKDUPE OVR  Overlay file.
HELPME   EXE  Prints troubleshooting form.
INSTALL  EXE  Installs Navigator.
NAVCOLOR COM  Color screen program version.
NAVIGATE DOC  User guide.
NAVIGATE FRM  Registration form.
NAVMONO  COM  Monochrome screen program version.
DDINFO        Information about DISKDUPE.
VIRUSCHK EXE  Main program.
VIRUSCHK TXT  Documentation file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<<  Disk No 1279 THE NAVIGATOR, DISKDUPE, VIRUSCHK version 1.12  >>>> ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To install The Navigator, type:                                       ║
║                                                                         ║
║             INSTALL (press enter)                                       ║
║                                                                         ║
║   To run DISKDUPE, type:                                                ║
║                                                                         ║
║             DISKDUPE (press enter)                                      ║
║                                                                         ║
║   To run VIRUSCHK, type:                                                ║
║                                                                         ║
║             VIRUSCHK (press enter)                                      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NAVIGATE.DOC

{% raw %}
```




Guide to Using The NAVIGATOR
	       (C) Copyright 1988 Edward Garrett

Written by Edward Garrett, September 1988.


--------------------------
Becoming a Registered User
--------------------------

  The NAVIGATOR is a shareware program.  It can be copied and given to friends
  without violating the law.  However, NAVIGATOR is a copyrighted program.  It
  cannot be sold for profit by others.

  Use The NAVIGATOR for a while, and if it is helpful to you, please send a
  $10 fee.  This will make you a registered user of NAVIGATOR, and you will
  receive information on updates of the program and on other programs by the
  same person free of charge.  Being a registered user will entitle you to
  technical support by mail.  Send $10 and a completed registration form
  (This is contained in the file NAVIGATE.FRM.  Type COPY NAVIGATE.FRM PRN to
  print the form, and then it is ready to be filled out.) to:

    Edward Garrett
    7351 S.E. 31st
    Portland, Oregon 97202


----------------------
Purpose of the Program
----------------------

  The NAVIGATOR is a menu program created especially for hard disks.  It
  gives a list of directories and files which can be changed into, executed,
  displayed, and erased.  DOS commands can be executed directly from the
  program, and a quick switch into the root directory can always be made.
  Unlike some other menu programs, NAVIGATOR requires no maintenance but
  allows it through its ability to erase files and move around the disk.
  The NAVIGATOR is meant to complement, not eliminate, DOS.  NAVIGATOR is
  very useful to have when your hard disk boots.


-----------------------------------
Installing and Starting the Program
-----------------------------------

  The NAVIGATOR can be installed by changing to the drive and or directory
  on which NAVIGATOR is stored, and typing INSTALL at the DOS prompt.  All
  NAVIGATOR files are copied over to the hard disk (drive C:) to the directory
  NAVIGATE.  The AUTOEXEC.BAT file can be changed by the INSTALL program so
  so that the hard disk will boot up to NAVIGATOR.  There are two versions of
  the program: monochrome and color.  NAVIGATOR can be installed again if
  monitors are changed.

  To run NAVIGATOR from the DOS command line, type NAV.









-----------------
Using the Program
-----------------

  When NAVIGATOR is entered, the left side of the screen will show the list of
  directories and files.  Directories will come first, followed by .BAT files,
  .EXE files, .COM files, and the remaining files.  A maximum of 200 files can
  be loaded into one listing.  Twenty three files are displayed on the screen
  at a time.  More files can be seen by pressing the Up and Down Arrow Keys,
  and PgUp and PgDn.  Home and End allow easy movement between the top and
  bottom of the screen.

  ** Other Keys:

     ENTER

       If the cursor points to a directory, and ENTER is pressed, a change
       into that directory occurs.  If the cursor points to a file, and
       ENTER is pressed, the file is executed.  When the program is done, or
       if it is not an executable program, you will be returned to The
       NAVIGATOR.

     Alt-R: Change to Root Directory

       Pressing Alt-R will change to the root directory, and load its
       directories and files.  If you are deep in the directory tree, and you
       want to get to the main directory, this is quicker than pressing
       <RETURN> many times on the .. directory.

       NOTE ON SPECIAL DIRECTORIES:
	The . directory represents the current directory.  Pressing <RETURN>
	on this will reload the directories and files of the current
	directory.  The .. directory represents the directory back one step in
	the directory tree.  Pressing <RETURN> on this will load the
	directories and files in the directory one step closer to the root
	directory.

     Alt-E: Erase File

       Pressing Alt-E on a file will erase it and load a new list of
       directories and files.  Pressing Alt-E on a directory will remove
       the directory if it is empty.

     Alt-S: Show Contents of File

       This is similar to the DOS TYPE command.  Press Alt-S when the cursor
       points to a file and its contents will be displayed.  However, unlike
       the TYPE command there is a pause between each screen.  Press ESCAPE to
       return to the NAVIGATOR main screen, or press PgUp and PgDn to scroll
       through the file's contents.

     Non-command Keys:

       Pressing a key that is not a command to NAVIGATOR will be the first
       character of a DOS command.  The cursor will jump to the bottom of
       the screen, and a DOS command may be entered.  Press ENTER to execute
       the command, or ESC to return to NAVIGATOR without executing the
       command.  If a pause is desired after the command (for example,
       after a DIR command, NAVIGATOR should pause so the listing can be
       read, but after a COPY command, there is no need for a pause), the
       last character of the DOS command should be '?', the question mark.

```
{% endraw %}

## VIRUSCHK.TXT

{% raw %}
```

     VIRUSCHK                          copyright 1988  C. Deneke


      I am a microbiologist and I hate viruses!  So I wrote this program to 
 detect their activities.  If we do not stop computer viruses they will 
 destroy the mutual help networks that have been a fundamental part of micro- 
 and personal- computing.

      VIRUSCHK.EXE is shareware.  Please treat this as shareware and support 
 it if you find it useful.  The license and warranty are at the end.


                               Using VIRUSCHK.EXE.

      VIRUSCHK.EXE requires MS-DOS 2 or greater and a PC compatible.

      I wrote VIRUSCHK.EXE to be easy to run so that you would run it more 
 often and detect viral activities sooner.  VIRUSCHK is designed to be run 
 from a batch file, so that it will check all the relevant directories without 
 requiring your intervention.  This program works by reading each of your 
 files in a particular directory and calculating a series of values for each 
 file.  These values are stored in a data file (VIRUSCHK.DAT) and are used to 
 determine if there have been any changes in your files.

      A batch file is a file that consists of simple text commands and whose 
 name ends with the extension or type .BAT.  Batch files essentially replace 
 the commands that you enter ("key in") from the keyboard.  They make it easy 
 to re-enter a complex sequence of commands.  For example, the AUTOEXEC.BAT is 
 a batch file that runs every time you start (or "boot") your computer from 
 the disk that contains the AUTOEXEC.BAT file.

      VIRUSCHK will accept 5 command line switches.  These are indicated by a    
 "-" (dash) and tell the program to change some of its internal defaults.  The 
 switches that affect VIRUSCHK are:

    -ipathname     This controls where VIRUSCHK will find its input, that is
         the files VIRUSCHK is to characterize.

    -opathname     This controls where VIRUSCHK is to find and to write the
         data files (VIRUSCHK.DAT and VIRUSCHK.OLD).  These files contain the 
         information calculated about the input files which describes their 
         contents.

                Both of the pathnames can include drive and directory 
         designations.  They cannot include particular file specifications.  
         All of the files in that subdirectory will be checked.  If you are 
         checking a floppy disk with out subdirectories only the only the 
         drive (eg "A:" or "B:") is needed. The output files need to be in 
         separate sub-directories because all of the output files are called 
         VIRUSCHK.DAT and the successive files would overwrite each other if 
         they were in the same directory.

    -d        This will display the values for the internal characterizations 
         of VIRUSCHK.EXE.  If you register your copy I will send you 
         these values so that you can insure the validity of your copy.

    -b##      Where ## is a number between 5 and 12.  This will change the
         number of active sub-groups used to characterize the files.  

    -m###     Where ### is a number between 200 and 900.  This will change the
         largest number used in a single sub-group.

             Changing either or both of these two numbers will both change all 
         the calculated file characterizations.  This variability will make a 
         virus work harder to escape detection even if the virus knows about 
         this program.

      Note also that the -b and -m switches change the way the data on each 
 file is calculated and consequently the values that are stored.  So if you 
 change these switch values you should delete the files VIRUSCHK.DAT and 
 VIRUSCHK.OLD as the file contents (but not the time and date stamps) would 
 appear completely different to this program.

      I think the best and easiest way to use this program is to have a floppy 
 disk with the same sub-directory structure as the hard disk (plus a /root 
 sub-directory) and keep VIRUSCHK.EXE in the true root directory along with 
 the batch file CHECK.BAT.

      For example, if I was checking a hard disk called C: that had a root 
 directory and 3 sub-directories labeled "DOS", "PROGRAMS", and "DATA", I 
 would create 4 sub-directories on a floppy disk which were named "ROOT", 
 "DOS", "PROGRAMS", and "DATA".  Assuming the floppy disk was A:, the 
 CHECK.BAT file would contain the following lines:

            VIRUSCHK -ic: -oa:\root -b11 -m817
            VIRUSCHK -ic:\dos -oa:\dos -b11 -m817
            VIRUSCHK -ic:\programs -oa:\programs -b11 -m817
            VIRUSCHK -ic:\data -oa:\data -b11 -m817

      Then when you type CHECK at the A:> prompt, each successive line will 
 give VIRUSCHK.EXE the information on where to find the files to work on, how 
 to process the information, and where to store the data.  If the input and 
 output (ie -i and -o switches) are not given the current directory will be 
 used.  Please note also that only the pathnames and not the files to check 
 are specified.  VIRUSCHK.EXE always checks all the files in the specified 
 directory.

      If you are checking a series of floppy disks in a system with two floppy 
 drives, I would recommend that you use a floppy with VIRUSCHK.EXE in the root 
 directory and a set of subdirectories with names that match the volume labels 
 on the floppies that you want to check. Then include in each subdirectory the 
 file CHECK.BAT that has the single line:

       A:\VIRUSCHK -ib: -oa:\pathname -b11 -m893

 Where a:\pathname points to the current sub-directory.  This will save your 
 having to have the VIRUSCHK.EXE program in each sub-directory but will keep 
 the data files in order.  Then if you put the floppy to check in B:, the disk 
 with the VIRUSCHK files and sub-directories in A: then enter the correct sub-
 directory and type CHECK.

      Also if the -b and -m switches are changed between runs the data 
 calculated will be different and the program will tell you that the files 
 have changed.  If you are going to change these switches you might just as 
 well erase the VIRUSCHK.DAT and VIRUSCHK.OLD files to save your self time.

      Because I wanted to make VIRUSCHK.EXE as easy to use as possible, there 
 is no need for direct user input until VIRUSCHK.EXE needs to know how you 
 want something treated.  For example, the first set of title screens will 
 pause briefly, then go on.  So you do not have to be present (until the 
 comparisons) for the program to run.

      The first time VIRUSCHK is run, once the program has read all your files 
 and performed its calculations, it will tell you that it has not been able to 
 find its data file VIRUSCHK.DAT.  The program will then ask if you want to 
 save the data just calculated in a new file called VIRUSCHK.DAT.  If you 
 enter 'Y' (or 'y'), the data will be stored for use next time.  Because no 
 comparisons can be done, the program will just show you the file names as the 
 data about them is being written. 

      If the VIRUSCHK.DAT file is found, each program name will be displayed 
 as this data file is read.  Then the individual files will be read and the 
 calculations performed.  Again each file name will be displayed so that you 
 can tell how the program is progressing. Finally, the calculated and stored 
 data will be compared.

      If the file either exists only in VIRUSCHK.DAT or is not included there, 
 you will be prompted to either include or exclude the data.  If the file 
 contents or the time and date stamps have changed, you will be told of the 
 changes and asked if you want to update the VIRUSCHK.DAT file.  You should be 
 careful of files whose contents have changed but not their date/time stamp, 
 as this could be the signature of viral activity.  As far as I know there is 
 no way to write to a file through the MS-DOS file structure without updating 
 the time and date codes.  If you changed the files yourself or changed the -b 
 or -m switches the file contents will be reported to have changed but there 
 may not be a viral infection of your files.

      In all cases, you will be told what the results are and asked what you 
 want to do.

      VIRUSCHK.EXE will not alter any of your files, it only changes or erases 
 two files: VIRUSCHK.DAT and VIRUSCHK.OLD.  So if you want to erase or delete 
 a virus contaminated file you will have to do it yourself.

      When the data file VIRUSCHK.DAT is read, it is renamed to VIRUSCHK.OLD 
 rather than being deleted.  If you need to recover the old data set, first 
 either delete VIRUSCHK.DAT or rename it to VIRUSCHK.1 for example, then 
 rename VIRUSCHK.OLD to VIRUSCHK.DAT and the program will run normally using 
 the old data.


                                    History.

      My interaction with computer viruses began at the end of the last 
 semester.   At that time I thought that computer viruses were mythical beasts 
 which, if they existed at all, were more likely the result of program bugs 
 than of malicious intent.  However, a number of our students had a semester's 
 worth of work stored on the hard disks of the departmental computers.  As 
 students will, when times got tense somebody brought in a game and loaded it 
 on several of the hard disks.  It was apparently quite popular and just 
 before the end of the semester it erased the hard disks with the students' 
 semester's work.  As with all hard disks insufficient backups had been made.  
 The students probably felt that floppy disks were too expensive, too fragile 
 and too inconvenient.  The unfortunate conclusion to the story is that they 
 had to take incompletes for the semester.  There was clearly enough guilt to 
 go around, the students for bringing in a game and playing it on computers 
 which were intended for serious projects and ours for not supervising them 
 more closely and catching the virus before it caused more harm.


                             How to detect viruses.

      So I began to consider ways to defeat viruses.  I did not think that a 
 perfect write protecting program was possible which would prevent virus 
 infection and replication but still allow normal disk usage.  I was also 
 afraid that a simple write protect could have been defeated by the game 
 carrying a virus.  A simple message like "Congratulations you have the 
 current high score! Save to disk?" would allow the operator to override and 
 thus defeat any write protect method I could devise.  After all, everybody 
 wants their best high score displayed.


                            Ways for viruses to hide.

      One way to detect a virus (or a Trojan Horse) is to examine a program's 
 code and look for instructions that could damage your computer system or 
 infect other programs.  To do this I have to explain somewhat how DOS works.  
 If you want to skip the detailed explanation in the next section, just 
 consider that a computer program consists of a series of numbers that 
 represent computer instructions.  As computers can change numbers easily, 
 programs can change themselves.  The particular damaging instructions may not 
 even exist until the virus is about to do some damage.  If you are not 
 comfortable with programming skip down to the section on "Revealing viral 
 activity".


                     Programming details of hiding a virus.

      A program tells MS-DOS what to do by a series of software interrupts.  
 Typically, values are loaded into the AX register and interrupt 21 is called.  
 In assembly language this would be abbreviated as INT 21.  The potentially 
 damaging interrupts would include: absolute disk reads (INT 25), absolute 
 disk writes (INT 26), and terminate and stay resident (TSR, INT 27).  The 
 absolute disk reads and writes refer to an actual sector of the disk, for 
 example, side 1, track 24, sector 5, rather than reading through DOS.  INT 25 
 is dangerous because a virus can hide parts of itself in the tracks of a hard 
 disk marked as unusable then read them in with an INT 25 instruction.  The 
 write to absolute sector can overwrite the boot tracks, the file allocation 
 tables, the hard disk partition information, or any program.

      INT 27 is dangerous because normally when a DOS program finishes that 
 program's memory storage area is made available and can be overwritten by the 
 next program you use.  A TSR program, however, can wait in the background 
 perhaps filtering keystrokes or waiting for another copy of COMMAND.COM to 
 infect or intercepting calls to virus detecting programs and responding by 
 printing "no virus found, everything is OK" on the screen as it erased your 
 hard disk.

      Again because a program can be self modifying, even scanning the code 
 for INT 25, INT 26 and INT 27 would not insure that they could not exist 
 under some conditions.  In pseudo- Assembly code this would be:

                    code
                    increase label by 5
                    code
                    perhaps lots of code
                    label: INT 21  ; the normal DOS services interrupt
                    code
                    decrease label by 5
                    more code

 The normal DOS services interrupt (INT 21) is present in the code until it is 
 run.  When running, however, some other part of the program (which can be 
 located anywhere in the code) increases the 21 to 26, the virus does absolute 
 disk writes, then later in the program the INT 26 is decreased to INT 21.  
 Note that the code containing the original INT 21 does not even have to be in 
 the virus code.

      Viruses can also read and write directly to the hardware.  If you used 
 DEBUG to enter values to low level format your hard disk, you were writing 
 directly to the hardware.  Direct hardware writes can also be hidden by self-
 modifying code segments and even further confused by the segmented nature of 
 the 8088 series processors.

      I could not see any way to be sure that the code was not self modifying.  
 The proper approach would have been to act like a debuger to run your 
 programs and check for a series of problem conditions.  The debuger would 
 have had to follow each code loop and I could see that a complex code section 
 could be designed to have a (nearly) infinite number of internal loops which 
 could have changing values, perhaps dependent on the timer or even a random 
 process.  This could all be present in a legitimate game or copy protected 
 software.  Even a complete run through could not guarantee that under some 
 conditions code containing INT 26 would not exist and this would probably be 
 the easiest type of virus activity to detect.


                            Revealing viral activity.

      Finally, I decided that I did not care if any given program was a virus 
 or not what I wanted to know was if it changed my files or other programs.  
 If I knew that changes were going on that were not under my direction then I 
 could deal with them from that point.  The principal danger of viruses seems 
 to me to be when you do not know what is going on. The initial problems could 
 be blamed on fluky hardware, buggy software, or operator error rather than a 
 virus.  And the longer that you wait the worse viral infections get.  If you 
 decided to erase everything and the earlier backups were also infected the 
 re-introduction of the virus would just result in chaos.  So the main goal of 
 this program is to detect changes in files so that you can determine if you 
 do have a virus.

      A simple way to detect changes is to look at the time and date stamps.  
 Unfortunately, viruses are usually not considerate enough to do this.  MS-DOS 
 (PC-DOS, DOS, IBM-DOS) is a fairly basic operating system.  It essentially 
 loads a program and gets out of the way.  The important point here is that a 
 program can not load itself, it has to be called from DOS or from the command 
 line.  So how will the virus be called or loaded?  The simplest way is to use 
 a vector program like the game in the example.  However, there has to be an 
 infection of other programs for the virus to be dangerous.  If you have a 
 program that immediately reformats your hard disk this is called either a 
 Trojan Horse or a programming bug.  In either case you know immediately that 
 a disaster has occurred and can try to overcome it.  I feel that the 
 dangerous nature of viruses is that they can work their damage before you are 
 aware of their activities.  In contrast, I understand that there was a rather 
 quick reaction when some of the Microsoft C compilers reacted rather 
 unfavorably to the Western Digital hard disk controllers.  In this case there 
 was a major loss of files and Microsoft quickly corrected the problem.

      So the question has become how do I tell if my files are changing.  The 
 simple way is to keep a duplicate set of files and do a direct byte by byte 
 comparison.  However, this requires a lot of storage space and might allow 
 virus infection of the duplicate files as well.  A more elaborate way would 
 be to do a computation such as summing the values of all the bytes in all the 
 files.  More elaborate ways are used in telecommunications to detect 
 transmission errors.  This would decrease the storage requirements but this 
 method is vulnerable to the virus deleting some of the messages to equal the 
 amount of the virus code added.  That is, if the virus added bytes of code 
 summing to 491, then it would just delete bytes of messages until it had 
 deleted bytes totaling the same value (491).


                                 Program design.

      I finally settled on a variant of this method.  The value of each byte 
 is read and then a set of computations are done.  First all the bytes are 
 summed, then bytes are divided into a set of sub-groups and the sub-groups 
 are individually summed.  To make the encryption more secure, you can change 
 the number of sub-groups (bins) used and the modulo used in the encryption 
 with the -b and -m switches.  This is just to make it harder on the virus, so 
 that even if the VIRUSCHK.DAT file is available to be read, the virus would 
 first have to determine which values to change in order for the virus to pass 
 undetected.


                          Distribution and source code.

      I now have a problem with distribution.  Shareware is fine, but how 
 could I avoid the FLUSHOT problem.  I understand the problem is that FLUSHOT1 
 through FLUSHOT3 are good but FLUSHOT4 is a buggy program, a Trojan Horse, or 
 a virus.  I have decided to send the disk of VIRUSCHK and a manual) at lowest 
 cost ($10.00) which I hope will cover mailing but this still does not give 
 you any way to be sure that the program is good and does what it is designed 
 to do and even is not a virus itself.  If you know me that's fine but if I am 
 only (at best) a Post Office box to you there is no guarantee.  Indeed, there 
 is no guarantee in shareware that the post office box was not changed 
 somewhere along the distribution process.

      If you can come up with a better method I would very much like to hear 
 it but the only solution I could think of was to be willing to sell the 
 source code itself.  This feels a little like exposing a very private thing 
 but I just can not guarantee that you will be able to understand what 
 VIRUSCHK.EXE does and customize it to your needs any other way.  If you have 
 any questions please get the source code and read it through.  I tried to 
 write this program so it would be fairly simple to understand rather than 
 cryptic but efficient C. If it meets your needs, then buy the Borland Turbo C 
 compiler (I used version 1.5) and for a total investment of less then $150 
 (which includes the cost of the Borland Turbo C 1.5 compiler) you can test 
 for viruses changing your files.  The C code was kept simple so that minimal 
 changes should be necessary when porting to other C compilers.  Also, if you 
 need VIRUSCHK.EXE to work in a non-MS-DOS environment, you will only need to 
 modify the machine specific code sections.  If you need other modifications 
 or have suggestions please write to the address below.


                                 Other Problems.

     This program does not address two virus related problems. The first is 
 the presence of virus code in the battery backed configuration memory of AT's 
 and the second is the presence of virus code in the tracks of the hard disk 
 marked as bad.  I am working on both these problems.  The easiest way to deal 
 with the configuration problem is to remove the battery if you suspect a 
 virus then reconfigure.  A modification of this detection problem should work 
 as well.  The hard disk problem might best be solved by writing over all the 
 sectors marked as bad.  Because this requires absolute disk writes and is 
 very dangerous I am not sure how to distribute such a program if I finish it.  
 If you do have any virus you should probably do the lowest level format 
 available as a precaution.

      You will have to fill out the following form before I send you the 
 source code because I do not want anyone else selling the code or developing 
 a commercial product based on my code.

      If you find any bugs in this program please report them in enough detail 
 for me to reproduce them and track them down.

                                    Thank you,

                                    C. Deneke                   


                                    WARRANTY

     There is no warranty of any kind either expressed or implied, including 
 without limitation, any warranties of merchantabiltiy and/or fitness for a 
 particular purpose.  All persons associated with this program and its 
 distribution shall not be liable for any damage, whether direct, indirect, 
 special, or consequential arising from a failure of this program to operate 
 in the manner desired by the user.  There shall be no liability for any 
 damage to data or property which may be caused directly or indirectly by use 
 of this program.  

 In no event, will the owners and/or distributors of this program be liable to 
 you for any damages, including lost profits, lost savings, or other 
 incidental or consequential damages arising out of your use or inability to 
 use the program, or for any claim by any other party.


      Registration form - Required for source code purchase only
         (but I still need your name and address if I send you anything)

    send to:   C. Deneke,  P.O. Box 6,  Old Mystic,  CT,  06372-0006

    check one    disk and registration for $10.00                  [  ]
                 source code, disk and registration for $75.00     [  ]

    Name __________________________________________________________________ 

    Company (if any) ______________________________________________________ 

    Address _______________________________________________________________ 

    Address _______________________________________________________________ 

    Address _______________________________________________________________ 

    City    _______________________________________________________________ 

    State   _____________________    Zip code   ___________________________ 
   
          I here by agree that I am responsible for the source code sold to 
 me.  I understand that this code is protected by copyright and is the 
 property of C. Deneke and that I have to take reasonable care to insure that 
 the source code is treated with due care as valuable property.

          I will not sell it to any other party nor provide it in any other 
 way. If I break this agreement in any way I will provide suitable 
 compensation covering both all legal fees and compensatory and punitive 
 damages as determined in a court of law. 

         Please sign here for source code 
 ______________________________________ 

         If you just want either to register your copy or get a new copy the 
 above does not apply to you but I do need your address.  The copyright on 
 this program still applies and this program can not be sold for commercial 
 gain.


                                     License

      This program is shareware and the copyright is maintained whether the 
 program was obtained as source code, as an executable program, or in any 
 other way.  It is not free software and it is not public domain software.  
 You are free to test this program on a trial basis.  Registered users can 
 treat the program like a book, that is only one copy can be running at one 
 time.

     No user may modify this program in any way that would violate its spirit. 


                                WARRANTY

       There is no warranty of any kind either expressed or implied, including 
 without limitation, any warranties of merchantabiltiy and/or fitness for a 
 particular purpose.  All persons associated with this program and its 
 distribution shall not be liable for any damage, whether direct, indirect, 
 special, or consequential arising from a failure of this program to operate 
 in the manner desired by the user.  There shall be no liability for any 
 damage to data or property which may be caused directly or indirectly by use 
 of this program.  

       In no event, will the owners and/or distributors of this program be 
 liable to you for any damages, including lost profits, lost savings, or other 
 incidental or consequential damages arising out of your use or inability to 
 use the program, or for any claim by any other party.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1279

     Volume in drive A has no label
     Directory of A:\

    AUTONAV  BAT        36  10-07-88  11:07p
    CONTENTS TXT       753  11-05-88  12:22a
    DDINFO             491   8-01-89   1:54p
    DISKDUPE DAT       470   8-14-89   2:40p
    DISKDUPE DOC     57439   8-11-89  10:48a
    DISKDUPE EXE     62096   8-11-89   2:11p
    DISKDUPE OVR     48699   8-11-89  10:37a
    FILE1279 TXT      3687   9-07-89   9:35a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618  12-15-88  12:37p
    HELPME   EXE     21680  11-05-88   8:01p
    INSTALL  EXE      9048  10-21-88   9:22p
    MANUAL   BAT       163  12-15-88  12:36p
    NAVCOLOR COM     15102  11-05-88  12:21p
    NAVIGATE DOC      5191  10-11-88  10:55p
    NAVIGATE FRM       765   5-04-88   8:30p
    NAVMONO  COM     14978  11-05-88  12:20p
    VIRUSCHK EXE     26272  10-02-88   1:06p
    VIRUSCHK TXT     26240  10-02-88   1:06p
           19 file(s)     294766 bytes
                           17408 bytes free
