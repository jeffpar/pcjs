---
layout: page
title: "PC-SIG Diskette Library (Disk #2474)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2474/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2474"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLIGHT PLAN SYSTEM"

    Whether you fly a prop plane or a jet, FLIGHT PLAN SYSTEM lets you
    create a printed flight log with up to 1,023 route entries. Each entry
    includes a location identifier, name, latitude, longitude, magnetic
    variation, and site elevation. Information on locations can be added,
    but the program includes this information on most VORS and major
    airports in the 48 United States.
    
    FLIGHT PLAN SYSTEM lets you save different routes for the same trip.
    Then the route can be used over and over with minimal changes.
    
    By entering performance parameters for your aircraft, your flight plan
    can include minimum fuel burn, minimum flight time, and optimum flight
    altitude. An added feature lets you try "what-ifs" by experimenting
    with winds aloft, aircraft performance, and other factors. Complete
    documentation and lots of help screens make this program easy to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2474.TXT

{% raw %}
```
Disk No: 2474                                                           
Disk Title: Flight Plan System                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Flight Plan System                                       
Author Version: 3.10                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Whether you fly a prop plane or a jet, FLIGHT PLAN SYSTEM lets you      
create a printed flight log with up to 1,023 route entries.  Each entry 
includes a location identifier, name, latitude, longitude, magnetic     
variation, and site elevation.  Information on locations can be added,  
but the program includes this information on most VORS and major        
airports in the 48 United States.                                       
                                                                        
FLIGHT PLAN SYSTEM lets you save different routes for the same trip.    
Then the route can be used over and over with minimal changes.          
                                                                        
By entering performance parameters for your aircraft, your flight plan  
can include minimum fuel burn, minimum flight time, and optimum flight  
altitude.  An added feature lets you try "what-ifs" by experimenting    
with winds aloft, aircraft performance, and other factors.  Complete    
documentation and lots of help screens make this program easy to use.   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FPINTRO3.TXT

{% raw %}
```
            GENERAL AVIATION FLIGHT PLAN SYSTEM -- RELEASE 3.10-PC

                   (C) Copyright 1988-1990 Charles L. Pack

******* W A R N I N G ! ******* W A R N I N G ! ******* W A R N I N G ! *******

IMPROPER USE OF THIS PROGRAM, OR USE OF THIS PROGRAM WITH INCORRECT OR OUT-OF-
DATE DATA, MAY RESULT IN PROPERTY DAMAGE, PERSONAL INJURY OR EVEN LOSS OF LIFE!

THE AUTHOR HAS MADE REASONABLE EFFORTS TO INSURE THE FLIGHT PLAN SYSTEM WILL
OPERATE CORRECTLY WHEN GIVEN PROPER AND VALID INPUTS.  HOWEVER, THE FLIGHT PLAN
SYSTEM (OR ANY OTHER COMPUTER PROGRAM) COULD STILL POSSIBLY HAVE "BUGS" - SO BE
CAREFUL!  "FLIGHT PLAN SYSTEM" INCLUDES ALL FILES AND DATA THAT ARE NORMALLY
INCLUDED WITH IT ON THE SAME DISKETTE(S).

FAR 91.3 STATES THAT "THE PILOT IN COMMAND OF AN AIRCRAFT IS DIRECTLY RESPON-
SIBLE FOR, AND IS THE FINAL AUTHORITY AS TO, THE OPERATION OF THAT AIRCRAFT".

THE AUTHOR MAKES NO WARRANTIES OR GUARANTEES - EXPRESS OR IMPLIED - AS TO THE
OPERATION OF THIS PROGRAM OR ANY INCLUDED DATA, OR TO THEIR SUITABILITY FOR USE
WITH ANY PARTICULAR TYPE OF AIRCRAFT OR FOR ANY OTHER PURPOSE.  THIS PROGRAM IS
NOT APPROVED OR ENDORSED BY THE F.A.A. OR ANY OTHER REGULATORY AGENCY.

After you finish reading this screen press Enter to continue or Esc to cancel.
            GENERAL AVIATION FLIGHT PLAN SYSTEM -- RELEASE 3.10-PC

                   (C) Copyright 1988-1990 Charles L. Pack
           QuickBASIC Compiler (C) Copyright 1982-87 Microsoft Corp.

Permission is granted for personal use of this software, to make backup copies,
and to copy and share this software with other individuals at no cost to them.
The author reserves the SOLE and EXCLUSIVE right to distribute this software to
clubs, user groups, bulletin board systems and other institutions - write for
information.  The author makes no warranties or guarantees, express or implied.

This is "user-supported" (NOT public domain) software.  If you are using this
software and find it to be of value, please send $25 directly to the author and
mention the identifier FP3.10-PC.  This will make you a registered owner, and
you will be notified of later versions of this and other related software when
it is released.  You will also receive additional documentation and support.

                         Written by:  Charles L. Pack
            25303 La Loma Drive, Los Altos Hills, Calif. 94022, USA
               Phone: (415) 949-0887 (no collect calls accepted)

If you have not used this program before, please read the HELP screens as you
go along.  Press the letter H (for HELP) to get the first directions on how to
use the program; then press Enter to start the program or Esc to return to DOS.
```
{% endraw %}

## FPVERS31.DOC

{% raw %}
```
GENERAL AVIATION FLIGHT PLAN SYSTEM - RELEASE 3.10          PAGE 1 OF 12

                 (C)  Copyright 1988-90 Charles L. Pack
   QuickBASIC Compiler  (C)  Copyright 1982-87 Microsoft Corporation

                      WRITTEN BY: Charles L. Pack
            25303 La Loma Drive, Los Altos Hills, CA. 94022
                         Phone: (415) 949-0887

The author reserves the SOLE and EXCLUSIVE right to distribute this pro-
gram to clubs, user groups, bulletin board systems and other institu-
tions.  Institutions that wish to distribute this program FREE or for a
"disk fee" not to exceed $10.00 U.S. may write directly to the author at
the address above for further information.  Suggestions and comments are
welcome, and may be addressed directly to the author. 

The author makes no warranties or guarantees, express or implied, as to
the suitability of this program or its related files for use with any
particular type of aircraft or in any particular part of the world.  The
author is not responsible for the accuracy of any data that is supplied
with the program - some of it may have been created by other persons.
Although reasonable effort has been made to insure this program and its
related files will operate correctly, it is still possible for it to
have "bugs", so be careful!

                         HARDWARE REQUIREMENTS

Hardware requirements are an IBM or other "fully compatible" personal
computer with one disk drive, 256K memory and any type of video adapter
and display (the system does not do graphics).  A printer is required
for printing the flight log and other information.  Almost any printer
that can print 80 columns should work.  IBM DOS or PC-DOS version 2.0 or
later is required.  Program modules are written in compiled BASIC with
machine-language subroutines.

     HOW TO GET THE FLIGHT PLAN SYSTEM RUNNING AS SOON AS POSSIBLE

In this document, abbreviations are used to denote certain actions.  The
< > symbols indicate a particular key to be pressed, for example <Enter>
means "press the Enter key".  The Enter key is used to indicate you are
finished entering a command or a data item.  <Enter> need not be pre-
ceeded by a space even though it is done in this document for clarity.

Some keys, such as the Esc and Ctrl keys, may be in different positions
on different keyboards.  You may have to look, or consult your computer
operations manual to find them.  The Esc key is usually in the top row,
and the Ctrl key is usually near the left side.  The Enter key has the
funny hooked arrow on it.

Commands typed into DOS may be in uppercase (CAPITAL letters) or lower-
case; for example COPY, Copy and copy are all interpreted in the same
way.  In this document, commands will be shown in uppercase.

If you have a hard disk, you must install your program on the hard disk
before running it. Instructions for hard disk installation begin on page
5.  Instructions for operation on floppy disks begin on the next page.










GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 2 OF 12

                   OPERATION FROM FLOPPY DISKETTE(S)

The first and most important thing for you to do is to MAKE A WORKING
COPY.  The original copy of the Flight Plan System has (or should have!)
a write-protect tab on it to prevent accidentally writing over it. It is
suggested that you make a couple of working copies of the Flight Plan
System diskette and then put the original copy in a safe place other
than where your computer is.  This place should be free of magnetic
fields generated by such things as vacuum cleaners.  A fireproof safe,
or even a safe deposit box, makes an excellent haven for the original.

This document assumes you have two floppy disk drives.  If you have only
one drive, such as on an IBM PC-Jr., consult your DOS manual.

To make a working copy, insert your DOS diskette in drive A and make
sure the A> prompt is visible.  Type in the following command:
                         DISKCOPY A: B: <Enter>
You will be prompted to insert the source (original) and target (working
copy) diskettes and press any key to continue.  Now remove the DOS disk-
ette from Drive A and insert the original copy of the Flight Plan
System.  Insert a blank diskette in Drive B.  WARNING: Any data on the
diskette in Drive B is about to be erased!  Now, press any key and in
about 30 seconds you will have a working copy.  Be sure to label it, but
do not put a write-protect tab on it.

If the working diskette is of a different capacity or size than the
original, DISKCOPY won't work.  To make the first working copy, format a
new diskette and use COPY instead.  Then, you can use DISKCOPY to make
additional copies.  See page 4 for more detailed instructions on how to
format diskettes and copy files.

Now you're ready to get the Flight Plan System running.  Make sure you
are in DOS, as evidenced by the A> prompt, and insert a working copy of
the Flight Plan System.  Type the command FP3 <Enter>, and in just a
moment, the introductory screens should appear!  If you have not used
these programs before, press the H (for HELP) key for further instruc-
tions on how to use the system in general.

Once the Flight Plan System is running, all instructions on how to oper-
ate it are available from within the system itself.  Note that you can
press the H (for HELP) key to get instructions from any of the menus
that appear at the bottom of the screen.  HELP screens are context-sen-
sitive; that is, each one applies to that part of the system you are
using at the moment.  Please read all the HELP screens; they will
explain how to use the system and will answer most of your questions.

After the introductory screens have been displayed, the program should
display the Master Menu screen.

One or more Navaid and Trip files may be included with the Flight Plan
System for demonstration purposes.  To use these files, the current disk
drive for data files should be the default drive.  If not, press P and
<Enter>.  The names of both the Navaid and Trip files used for demons-
tration purposes should be DEMOFILE so enter those names as they are
requested.

Then, press T to go to the TRIP Display screen.  Read the Help screens
and try out all the different menu functions to see how they work.






GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 3 OF 12

             OPERATION FROM FLOPPY DISKETTE(S) (Continued)

You don't have to use the files supplied with the program for demonstra-
tion purposes.  It is recommended to keep your own Navaid and Trip files
on a separate data diskette.  To start a new data diskette, insert a
newly formatted diskette in drive B.  Start the Flight Plan System as
described on the previous page, and you should see the Master Menu
screen. If the program seems to "hang up" trying to read a disk drive,
press the Esc (Escape) key.

From the Master Menu screen, press P (for PATH) to enter a new drive
letter and type B: <Enter>.  At this time, you will also be prompted to
enter names for your new navaid and trip files.  You might consider
giving them regional names such as CALSOUTH for the Navaid file and
ARIZONA for trips to Arizona, for example.  When you finish entering the
names (the program automatically supplies the extension .NAV), press N
to get to the Navaid screen.

The program will recognize the empty diskette in Drive B and will ask if
you want to start a new Navaid file; reply Y (for Yes). Or you can press
Esc or N to get back to the Master Menu screen if you made a mistake.
Once a new Navaid file has been initialized (which will happen auto-
matically), the same process will be repeated for the Trip file.  Then
you will automatically be prompted to start entering navaids.  You can
have as many different Navaid and Trip files as you want; the only limi-
tation is space on the data diskette.  Each Trip file can hold a number
of individual trips; each of those trips can have up to 16 legs.

Should you decide to keep data files on your program diskette - this may
be feasible if you have only one navaid file and a few trip files - you
can erase the .NAV and .TRP files that exist for demonstration purposes.
Do this from DOS with the ERASE *.NAV <Enter> and ERASE *.TRP <Enter>
commands.  Then start the Flight Plan System and when you see the Master
Menu screen, the current path should be the default directory.  If not,
press P and then press Enter by itself; enter navaid and trip file names
as in the previous paragraph.  Then press N to start entering Navaids.

WARNING:  DO NOT switch DATA diskettes while you are in the NAVAID or
TRIP display screens.  Press X to get into the Master Menu screen first,
and THEN switch diskettes.  Failure to heed this rule could cause data
files to be destroyed.  Always keep backup copies!

              UPGRADING FROM RELEASE 2 ON FLOPPY DISKETTE

You can copy your old navaid files onto the new program diskette (if
there is room), or you can transfer the old navaid files onto a separ-
ate, newly formatted diskette.  Do this from the A> prompt in DOS with
the NEW diskette in drive A and the diskette with your OLD navaid files
in drive B.  Then, enter the following command: COPY  B:*.NAV <Enter>.
This will copy the navaid files on Drive B to the default diskette,
which is in Drive A.

*** NOTE *** If you are upgrading from an earlier Release 2 version of
the Flight Plan System, the newer system will modify your Navaid files
so they can accomodate additional data items and features.  Once this
happens, they can no longer be used by the earlier Release 2 programs.
Therefore, make sure they are BACKED UP first!  Your old trip files
cannot be used, as trips are handled differently in Release 3.






GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 4 OF 12

                    HOW TO FORMAT AND COPY DISKETTES

There are two ways to copy a diskette: one using the DISKCOPY program;
and the other using the COPY command. The DISKCOPY program is a separate
file on your DOS diskette.  DISKCOPY copies the entire diskette all at
one time without regard to contents, and is faster.  However, the target
diskette must always be recorded at the same density and the same number
of sides as the source diskette.  You can tell the density of a diskette
by running the CHKDSK program, which is on the DOS diskette. With DOS in
Drive A, and the diskette to be tested in Drive B (it must be a format-
ted diskette), enter the command CHKDSK B: <Enter> and you will see the
capacity of the diskette in Drive B expressed as a number of bytes.  The
capacity is a measure of recording density.  A standard 5 1/4" diskette
holds about 360K bytes (K=1000); a standard 3 1/2" diskette holds 720K.

COPY copies individual files one at a time and is slower, but it is a
"resident" command (it is in memory all the time when you are in DOS) so
you don't have to have your DOS diskette in drive A to run it.  It can
copy to a target diskette that has a different capacity or number of
sides than the source diskette.

If DISKCOPY will not make a working copy of the original diskette, pro-
ceed as follows:  First, make sure your DOS diskette is in Drive A and
you have the DOS prompt A>.  Insert in Drive B a new diskette, or a
diskette that does not contain any programs or data which you want to
keep.  Now type the following command: FORMAT B: <Enter>.  WARNING: All
data on the diskette in drive B is about to be erased!  Follow the
prompts on the screen.  Press Y to respond Yes, or N to respond No.
After responding Y or N, it may or may not be necessary to <Enter>,
depending on what versions of FORMAT and DOS you are using.

WARNING: NEVER use FORMAT by itself.  That will cause it to format the
currently active diskette, and you may erase your DOS!  If you have a
hard disk drive, you could erase your entire hard disk!  Usually a
warning message is displayed, but some versions of DOS don't display
much warning and catastrophes have resulted.  This is one good reason to
keep backup copies of all programs and data!

After the formatting is completed, you will see the message "format
complete" and some statistical information, followed by a "Format
another?" prompt.  Reply N <Enter> and wait for the A> prompt to re-
appear.  Remove the DOS diskette from drive A and insert the diskette to
be copied (the source diskette) in drive A.  Now type the following
command:  COPY  *.*  B: /V <Enter>.  (Leave spaces where shown except
before <Enter>).  This will copy all files from the diskette in drive A
to the diskette in drive B.  The /V parameter causes the computer to
read back and verify everything it writes.  The diskette in drive B now
contains a working copy of the diskette in Drive A.  Be sure to label
it, but do not put a write-protect tab on it.















GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 5 OF 12

                      INSTALLATION ON A HARD DISK

Installation is the process of transferring the original of a program
onto a hard disk, and setting it up to operate with your particular
computer.  Installation on a hard disk drive usually consists of three
steps:  First, making a sub-directory; Second, copying the required
files; and Third, creating a batch file.  The last step is optional but
still very desirable.  *** NOTE *** If you are UPGRADING from an earlier
release of the Flight Plan System, skip now to page 8.

The Flight Plan System should reside in its own dedicated sub-directory.
The name of that sub-directory can be anything you want, up to 8 char-
acters, but for explanatory purposes here it will be called \FP3 (for
Flight Plan, release 3).  (See page 7 for information on sub-directories
and how to make one).  Now make this the current sub-directory by typing
CD \FP3 <Enter>.  This completes the first step.

Insert the original Flight Plan System diskette in Drive A.  The follow-
ing command will copy all the files to the hard disk:

                        COPY  A:*.*  /V <Enter>

WARNING: First make sure you are in the correct directory!  Display the
contents by typing DIR first.  The directory should not have any files.

Only the source file specification is needed above; the target is
assumed to be the current directory.  The /V parameter causes DOS to
verify everything it writes.  You can verify that all files were copied
by typing DIR /W <Enter>.  The /W (for "wide") tells DOS to display
several file names on each display line so the information won't scroll
off the top of the screen.  Now, make the root directory active by
typing CD \ <Enter>.  This completes the second step.

The next thing to do is to create a simple batch file to start the
Flight Plan System.  A batch file contains one or more DOS commands and
has the extension .BAT.  When you type the name of a batch file, all the
commands in that batch file are executed, just as if you had typed them
individually from the keyboard.

A batch file should reside in the root directory; if you haven't already
done so, switch back there now by entering the command CD \ <Enter>.  A
file can be created by copying directly from the keyboard (CON:) to that
file on disk.  We'll call the batch file FP3.BAT.  Enter the following
lines:
                       COPY CON: FP3.BAT <Enter>
                       CD \FP3 <Enter>
                       FP3 <Enter>
                       CD \ <Enter>
                       <F6> <Enter>

Leave out CD \ if you don't wish to return to the root directory upon
termination of the Flight Plan System.  <F6> means press the F6 key
(this is a function key on the left side or the top of your keyboard).
Note that F6 is "echoed" to the screen as "^z" (Ctrl-Z) - that is a
special "end-of-file" indicator.  You should see the message "1 file(s)
copied" and the DOS prompt C>. The Flight Plan System can now be started
from the root directory with the single command FP3 <Enter>.  It can
also be started from its own directory with the same command.






GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 6 OF 12

                       OPERATION FROM A HARD DISK

From your root directory, begin operation of the Flight Plan System with
the command FP3 <Enter>. In just a moment the introductory screen should
appear!  If you have not used these programs before, press the H (for
HELP) key for further instructions on how to use the system in general.

Once the Flight Plan System is running, all instructions on how to oper-
ate it are available from within the system itself.  Note that you can
press the H (for HELP) key to get instructions from any of the menus
that appear at the bottom of the screen.  HELP screens are context-sen-
sitive; that is, each one applies to the part of the system you are
using at that moment.  Please read all the HELP screens; they will
explain how to use the system and will answer most of your questions.

After the introductory screens have been displayed, the program should
display the Master Menu screen.

One or more Navaid and Trip files may be included with the Flight Plan
System for demonstration purposes.  To use these files, the current path
(disk drive and sub-directory names) for data files should be the
default directory.  If not, press P and then <Enter>.  The names of both
the Navaid and Trip files used for demonstration purposes should be
DEMOFILE so enter those names as they are requested.  Then, press T to
go to the Trip Display screen.  Read the Help screens and try out all
the different menu functions to see what the program does.

Of course you don't have to use the files provided with the program for
demonstration purposes.  It is recommended to keep your own Navaid and
Trip files in a separate sub-directory, which will be called \FP3DATA
in this document.  To create this sub-directory, get into the root dir-
ectory first, using the DOS command CD \ <Enter>.  Then create the new
sub-directory with the command CD \FP3DATA <Enter>.  (Don't specify a
disk drive letter unless data is on a different drive than programs).

Now re-start the Flight Plan System and get into the Master Menu screen.
Press P and then enter the name of the data directory \FP3DATA\ <Enter>.
Next, enter the names you want for Navaid and Trip files.  You might
consider giving them regional names such as CALSOUTH for the Navaid file
and ARIZONA for your trips to Arizona, for example. If these files don't
exist yet, the program will automatically create them for you later.
When you finish entering the names, press N to get to the Navaid screen
and start entering navaids.

If a file doesn't exist, the program will ask if you want to start a new
one.  Reply Y (for Yes).  Or you can press Esc or N to get back to the
Master Menu screen if you made a mistake.  Once a file has been initial-
ized, the program will automatically start asking you for data.  You can
have as many different Navaid and Trip files as you want; the only limi-
tation is disk space.  Each Trip file can hold a number of invividual
trips; each of those trips can have up to 16 legs (17 waypoints).













GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 7 OF 12

             WHAT IS A "SUB-DIRECTORY", AND HOW TO MAKE ONE

A hard disk can contain hundreds of files, which could make management
of its directory very difficult.  Therefore a hard disk usually contains
a "root" directory and a number of "sub-directories", organized in a
"tree" structure. The root directory is the main directory and is always
present.  It is like the trunk of a tree, and can contain any number of
sub-directories, which are like branches of a tree.  Also, sub-direc-
tories can contain other sub-directories, up to many different levels
just like the many branches of a tree.

Another way to look at it is, the root directory of a disk(ette) is like
the master index to a big book, and the sub-directory is like the index
to an individual chapter.  I recommend keeping the directory structure
simple, with only one level of sub-directories.  Floppy diskettes can
also have sub-directories but usually they don't - while hard disks,
with their large capacity, usually do.

Usually, sub-directories contain individual categories of programs or
other files.  For example word processing programs can be in one sub-
directory, documents in another, spreadsheets in another, etc.  Ideally,
the root directory should contain only sub-directories, batch files and
certain other system files; DOS should have its own sub-directory.

The Flight Plan System should reside in its own dedicated sub-directory.
To make a sub-directory, first make the root directory active by typing
CD \ <Enter>. Note the back-slash (\) is different from the regular for-
ward slash (/).  Sub-directory names are just like any other file names
except they always start with the back-slash (\).  The root directory
has no name and is just called \.

Sub-directory names must be unique within the directory that contains
them.  To look at sub-directory names, use DIR /W <Enter>.  Sub-direc-
tories are identified by the caption <DIR>.  It is permissible for a
sub-directory name to be the same as a file name, for example \FP3 can
exist as a directory and again as a batch file such as FP3.BAT.

Now enter the DOS command to "Make a Directory". Type in MD \xxx <Enter>
where xxx denotes a name 1 to 8 characters in length - for example type
MD \FP3 <Enter>.  For best results, use only letters of the alphabet.
If no error message appears and the DOS prompt C> re-appears, the sub-
directory now exists.  To make that sub-directory active, type CD \FP3
<Enter>.





















GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 8 OF 12

         UPGRADING FROM AN OLDER VERSION ON A HARD DISK SYSTEM

Get into DOS, as indicated by the prompt C>.  Make the sub-directory
which contains the Flight Plan System the currently active directory.
For example, use the command CD \FP <Enter>.  Use the DIR command to
make sure you are in the correct directory!  Now type in the following
group of commands that applies to you:

THIS IS ONLY FOR THE ** OLDER ** PROGRAM RELEASES (2_L, 2_K, 2_J, ETC.):

             ERASE FPREL*.* <Enter>  (identifies the old release)
             ERASE *.BAT    <Enter>  (deletes old BATCH files)
             ERASE FP*.CTL  <Enter>  (deletes the old SETUP file)
             ERASE FP*.BAS  <Enter>  (deletes 2_L & earlier programs)
             ERASE FP*.H*   <Enter>  (deletes all the old HELP screens)
             ERASE *.TRP    <Enter>  (deletes trip files, which cannot
                                      be used with Release 3.x)
             You can keep and use your present Navaid files.  Any files
             other than those ending with .NAV cannot be used.

THIS IS ONLY FOR THE *** NEWER *** PROGRAM RELEASES (3.00 AND LATER):

             ERASE FPINTRO*.* <Enter>  (the old introductory screen
             ERASE FPSTART*.* <Enter>   files MUST be deleted)
             ERASE *.BAT <Enter>       (deletes old BATCH files)
             ERASE FP*.CTL <Enter>     (deletes the old SETUP file)
             ERASE FP*.EXE <Enter>     (deletes the old programs)
             ERASE FP*.HLP <Enter>     (deletes the old HELP screens)
             You can keep your present Navaid and Trip files.

Re-check with the DIR command to make sure you deleted the correct
files.  Make sure your navaid files are backed up.  Sorry, the old trip
files (with the extension .TRP) that were used with Release 2 are not
useable in the newer Flight Plan System.  Release 3 handles trip data
in a different way.

Insert the original copy of the Flight Plan System (Release 3.xx) in
Drive A.  You will need to copy some, but not all, of the files onto
your hard disk.  Now, type in the following commands:

             COPY A:FPINTRO*.* /V <Enter>  (You MUST use corresponding
             COPY A:FPSTART*.* /V <Enter>   versions of these files)
             COPY A:FP*.CTL /V <Enter>     (SETUP file)
             COPY A:FP*.EXE /V <Enter>     (programs)
             COPY A:FP*.HLP /V <Enter>     (HELP screens)

*** NOTE *** If you are upgrading from an earlier Release 2 version of
the Flight Plan System, the newer system will modify your Navaid files
so they can accomodate additional data items and features.  Once this
happens, they can no longer be used by the earlier Release 2 programs.
Therefore, make sure they are BACKED UP first!

If you are upgrading from Release 2_L or earlier you will have to modify
the batch (.BAT) file which starts the program. It should be located in
the root directory.  Refer back to page 5 to see how to do this.









GENERAL AVIATION FLIGHT PLAN SYSTEM                         PAGE 9 OF 12

         DIFFERENCES BETWEEN THIS RELEASE AND PREVIOUS RELEASES

1.  All Release 3.0 and later versions of the Flight Plan System will be
    compiled and will run faster.  BASIC is no longer used.  The source
    code is not available, so the program can no longer be LISTed and/or
    modified by the user.

2.  The system has been simplified.  In Release 3.04 the Master Menu has
    been replaced by the SETUP screen.  In Release 3.05, the Master Menu
    has been restored and contains all of the SETUP functions.

3.  All data files are now saved automatically.  There are no longer any
    separate "Save" functions.

4.  A Navaid file can have up to 1,279 entries.  Trip files are now han-
    dled differently.  You can still have many different trip files, but
    EACH Trip file can now have up to 31 individual trips; and each trip
    can still have up to 16 legs (17 waypoints).  The program is set up
    so that you MUST display the trip you want to use for a flight plan.
    Distances and courses are ALWAYS re-computed whenever a trip is dis-
    played.  This is to insure that the latest data from the Navaid file
    will always be used in any flight plan.

5.  Trip waypoints are no longer selected by a video block.  You must
    enter the name for each waypoint.  However if you are unsure of the
    exact spelling, just enter the first few letters and the program
    will try to find it for you.  In Release 3.04 and later you can
    select waypoints by entering an identifier which is separate from
    the name (such as *LAX for Los Angeles VORTAC).

6.  In Release 3.0, performance data for up to 3 aircraft can be changed
    interactively and then stored automatically on disk.  You can switch
    aircraft from the flight plan functions without losing any data.

7.  In the Navaid screen, you can "scroll" through the data.  The system
    is set up in such a way that if you change any Navaid data, it will
    automatically be reflected in any trips that use that data.  You
    can't delete a Navaid that is used anywhere in the active trip file.
    The Navaid file can now have two NAV or COMM frequencies which can
    be shown on the flight log.

8.  Much effort has been made to make this program as "bullet-proof" as
    is reasonably possible.  BUT HEED THIS WARNING: IT ISN'T PERFECT -
    IT COULD STILL HAVE "BUGS"!

9.  The "bug" which caused inaccurate groundspeed computations in a
    direct crosswind has been fixed.

10. In this version of the program, the effects of temperature on air-
    craft performance are handled by using DENSITY altitudes for compu-
    tations, rather than using actual altitudes and applying a compensa-
    tion factor.

Many improvements have been made as a result of user feedback.  The
author always welcomes user input (positive or negative).









GENERAL AVIATION FLIGHT PLAN SYSTEM                        PAGE 10 OF 12

                          ABOUT THE DATA FILES

Your data files (those files with names ending in .NAV or .TRP) may be
kept on either the program diskette or sub-directory; or on a separate
data diskette or sub-directory.  In general, it is recommended to keep
the data separate, especially if you use more than two or three separate
data files.  This makes it easier to install newer versions of the
Flight Plan System and to make backup copies of the data.  In release
3.0, aircraft performance data (see next paragraph) is kept on file
FPSETUP3.CTL, which must be on the PROGRAM diskette or sub-directory.

WARNING:  In the Performance screen, you can keep data for up to three
different aircraft.  DO NOT use the data supplied with the program for
this screen - it is for demonstration and experimentation only.  You
MUST enter the data yourself for the individual aircraft YOU fly.  The
corresponding HELP screens give more information on how to do this.

Each time navaid or trip data is updated or changed, the associated
files are over-written on the disk(ette). Therefore it is very important
to KEEP BACKUP COPIES!  You should also keep a printed backup of the
aircraft performance data, by doing a screen dump of the the performance
screen for each aircraft.  Be sure to mark each one as to which aircraft
it applies to, as each performance screen is identified ONLY by a number
(1 of 3, 2 of 3 or 3 of 3).  (Release 3.04 and 3.05 add an aircraft
identifier and short description to the performance screen).

I suggest the following diskette backup scheme:  Use three diskettes and
label the three envelopes C (for current, or child), F (for Father), and
G (for Grandfather).  The envelope labelled C is of course the current,
or working, diskette.  When a copy of the current diskette is made, copy
onto the Grandfather diskette, which then becomes the new Current disk-
ette.  The old Current diskette becomes the new Father; the old Father
becomes the new Grandfather.  The diskettes are simply switched in their
envelopes.  The advantage to this scheme is that each diskette is always
used in rotation so one diskette does not tend to wear out faster than
the others.  Also, there are always three generations of data.

If you are using a hard disk, you should still back up your data files.
To do this, insert a newly formatted diskette in Drive A.  Make drive C
the active drive, and make the sub-directory which contains the Flight
Plan System data files the active sub-directory.  Then, enter the fol-
following command: COPY *.* A: /V <Enter>.  This copies all files onto
a floppy disk.

It is still recommended to keep two or more backup copies!  Although
computers are usually very reliable, disk drives and disks DO wear out
over time.  A head crash or an electrical "transient" could wipe out
months of work!
















GENERAL AVIATION FLIGHT PLAN SYSTEM                        PAGE 11 OF 12

              DESCRIPTION OF THE FLIGHT PLAN SYSTEM FILES

FPINTRO3.TXT These are the introductory screen files.
FPSTART3.CTL WARNING:  If either of these two files are missing or have
             been tampered with, the Flight Plan System won't run!
             These files must correspond to the particular version of
             the Flight Plan System that is being used.

FPSETUP3.CTL is the system setup file.  This and the above two files,
             plus the .EXE files, must all be present for the system to
             operate.  All of these three files must be on the PROGRAM
             diskette or in the PROGRAM sub-directory.

             In Release 3.0, aircraft performance data (for up to three
             aircraft) is stored in file FPSETUP3.CTL, in addition to
             the file specifications for Navaid and Trip files, and
             other parameters.  FPSETUP3.CTL requires 2,048 bytes of
             disk space.

FP3.EXE      is the system Startup program. The Flight Plan System MUST
             ALWAYS be started with this program.

FPMMENU3.EXE is the Master Menu program.  It also handles all SETUP
             functions.  (This is new with Release 3.05.  In Release
             3.04 all SETUP functions were handled in FPNAVIG3 and there
             was no Master Menu).

FPNAVIG3.EXE is the Navaid and Trip file maintenance program.

FPLANNR3.EXE is the flight plan and aircraft performance program.

BRUN30.EXE   is the run-time library which is required for any of the
             Flight Plan System programs to run.  It contains routines
             which can be common to all programs.  BRUN30.EXE is a part
             of the QuickBASIC compiler which is (C) Copyrighted by
             Microsoft Corporation.

*.HLP        All files with names ending in .HLP are HELP screen files.
             These are standard text files.  They can be deleted to make
             more disk space without affecting the operation of the
             Flight Plan System, except that when you press H you will
             get the "Help screen not available" message.

FPSTART3.HLP is an overview of the Flight Plan System.

FPSETUP3.HLP is an explanation of the SETUP screen (Release 3.04).

FPMMENU3.HLP is an explanation of the Master Menu screen (Rel. 3.05).

FPNAVIG3.HLP is an explanation of the Navaid display screen and menu.

FPTRIPF3.HLP is an explanation of the Trip display screen and its menu.

FPAIRCF3.HLP is an explanation of the Aircraft Performance screen.

FPALSEL3.HLP is an explanation of the Altitude Select screen.








GENERAL AVIATION FLIGHT PLAN SYSTEM                        PAGE 12 OF 12

        DESCRIPTION OF THE FLIGHT PLAN SYSTEM FILES (Continued)

FPLANNR3.HLP is an explanation of the Flight Log screen and its menu.

FPWINDS3.HLP is an explanation of the Winds aloft screens.

FLITELOG.NAV is the flight log file.  It is created each time the Flight
             Plan function is invoked from the Trip Data screen. It will
             require a maximum of 720 bytes in Release 3.0.

*.NAV        are the Navigation aid files (except for FLITELOG.NAV which
             is a dedicated file, explained above). Navaid files contain
             the following information:  Waypoint name (up to 12 charac-
             ters), identifier (4 characters), latitude, longitude, mag-
             netic variation, site elevation and two NAV or COMM fre-
             quencies.  A Navaid file requires 32 bytes per record, plus
             1 extra header record, for a total of 40,960 bytes.

*.TRP        are the Trip files.  Each trip file can contain up to 31
             separate trips.  Each trip can have up to 16 legs (17 way-
             waypoint names). Only waypoint names are kept in trip files
             (all other data either comes from a Navaid file or is com-
             puted by the program).  A trip file requires 256 bytes per
             trip, plus one extra header record, for a total of 8,192
             bytes.

FPVERS31.DOC is the document you are reading right now.  It can be used
             with any text editor or word processor, and can also be
             printed on any printer.  It contains no control characters
             or embedded word processor commands.

  README.DOC is a short text file (1 screen) that tells you how to print
             the document you are reading right now.

    READ.ME  same as README.DOC.
  README     same as README.DOC.

Data files are not compatible with any of the popular commercial data-
base or spreadsheet software, and they cannot be read or altered with a
word processor.  When a data file is first started by the Flight Plan
System, it is initialized to its full size (1,279 records for a Navaid
file or 31 records for a Trip file).  This is to prevent running out of
disk space and possible loss of data at a later time.

If you have any problems with the documentation in this program, please
notify the author (address & phone number on the first page).  This will
help the author to make improvements and correct errors.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  PC-SIG Disk #2474  FLIGHT PLAN SYSTEM   >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print author's "getting started" instructions, type:                 ║
║                 TYPE README.DOC (press Enter)                           ║
║                 TYPE README2.DOC (press Enter)                          ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
               GENERAL AVIATION FLIGHT PLAN SYSTEM - RELEASE 3.1

To obtain directions on how to get these programs running (if you do not
already have a printed copy), first make sure you are in DOS.  You should see
the prompt A> (or C> if you are on a hard disk).  Remove your DOS diskette,
and insert the Flight Plan System diskette in drive A.  Turn on your printer
and make sure it is ready to print.  Most printers have a "ready" light, and
it should be on.  Then, enter the following command just as it appears:

                           COPY A:FPVERS31.DOC LPT1:

and press the ENTER key.  Twelve pages of information will be printed, and the
output will be paginated with all pages numbered.  All information on how to
use these programs is available from within the programs themselves, in the
form of context-sensitive HELP screens.

To get a "snapshot" printout of this screen, first make sure your printer is
ready and then press a shift key and the PrtSc key simultaneously.  The PrtSc
key on the IBM-PC keyboard is on the second row of keys up from the bottom row,
near the right-hand side under the ENTER key.  On other keyboards it may be in
a different position.  This procedure can be used to obtain a screen printout
at almost any time.
```
{% endraw %}

## README2.DOC

{% raw %}
```
  GENERAL AVIATION FLIGHT PLAN SYSTEM - RELEASE 3.1 - ADDITIONAL INFORMATION

The file DEMOFILE.NAV as supplied by the author contains all VORs in the con-
tiguous 48 United States, plus all airports that are at the centers of TCAs,
ARSAs or TRSAs, plus some additional airports.  There should be room for you to
add about 100 more navaids. The author is working on additional regional Navaid
files; write for information.  Data items are taken from Airport Facility Dir-
ectories, except for magnetic variations which are taken from recent Sectional
charts.

For airports, FREQ.1 is always the CTAF or primary tower frequency, and FREQ.2
is usually the ATIS frequency.  If there is no ATIS, FREQ.2 may be a Unicom
frequency.  For electronic navaids, FREQ.1 is the navaid frequency and FREQ.2
is a primary COMM frequency.  If FREQ.2 is 122.1 then you transmit on that fre-
quency and receive on the NAV frequency.

*** WARNING ***  This data may not be current when you receive it.  The author
does not provide a subscription service for Navaid data updates.  It is the
responsibility of the user to make sure all data used in the Flight Plan System
is current and accurate. If you received this software from a source other than
the author, it may have been changed by other persons and could be inaccurate.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2474

     Volume in drive A has no label
     Directory of A:\

    FPSTART3 CTL       128   8-01-90   4:17p
    FPSETUP3 CTL      2048   8-01-90   4:37p
    FPINTRO3 TXT      2733   8-01-90   4:15p
    FLITELOG NAV       400   5-31-90  10:11a
    DEMOFILE NAV     40960   5-19-90  11:06a
    DEMOFILE TRP      8192   5-31-90  10:16a
    FP3      EXE     10081   5-24-90   9:21a
    FPMMENU3 EXE     19905   5-24-90   9:22a
    FPNAVIG3 EXE     47873   5-24-90   9:36a
    FPLANNR3 EXE     44913   5-24-90   9:37a
    BRUN30   EXE     70680   4-07-87  10:48a
    FPSTART3 HLP      4463   4-24-90  10:41a
    FPMMENU3 HLP      6356   4-24-90  10:51a
    FPNAVIG3 HLP      7958   4-24-90  11:08a
    FPTRIPF3 HLP      8551   4-24-90  11:10a
    FPAIRCF3 HLP      8478   4-24-90  11:13a
    FPALSEL3 HLP      3497   4-24-90  11:14a
    FPLANNR3 HLP      4613   5-24-90  10:18a
    FPWINDS3 HLP      2587   4-24-90  11:24a
    FPVERS31 DOC     36424   4-24-90  12:32p
    README   DOC      1281   4-24-90  11:28a
    README2  DOC      1328   5-24-90  11:05a
    RELEASE3 10        845   4-24-90  10:30a
    FILE2474 TXT      2221  10-31-90   9:32a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       771  11-19-90   7:41a
           26 file(s)     337326 bytes
                           12288 bytes free
