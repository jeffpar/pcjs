---
layout: page
title: "PC-SIG Diskette Library (Disk #1023)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1023/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1023"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QMODEM SST 3 OF 5 (310,1022,1483,1484)"

    A fast and powerful telecommunications program for anyone using a
    modem. Expanded memory usage, windowing, Xmodem protocol and
    auto-redial are only some of the strengths of this package.
    
    The "quick-learn" mode option is perfect for novices and further
    training is available with the context-sensitive Help function.  Read
    and write ASCII files with the integrated text editor.  X,Y and IMODEM
    protocols are fully supported as are multi-tasking environments such as
    Topview, Desqview, Taskview and Windows.  The dialing directory can be
    sorted, printed, and searched.  Terminal emulations for VT100, ANSI, TTY
    and Televideo 925 ensure further flexibility.  LOG allows you to
    maintain usage records -- who called, time called, time online and a
    Date/Time stamp for each log entry.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1023.TXT

{% raw %}
```
Disk No: 1023                                                           
Disk Title: Qmodem SST 3 of 5 (310,1022,1483,1484)  (Disk 3 of 3)       
PC-SIG Version: S4.1                                                    
                                                                        
Program Title: QMODEM SST                                               
Author Version: 4.1                                                     
Author Registration: $30.00                                             
Special Requirements: Modem.                                            
                                                                        
A fast and powerful telecommunications program for anyone using a modem.
Expanded memory usage, windowing, Xmodem protocol and auto-redial are   
only some of the strengths of this package.                             
                                                                        
The ``quick-learn'' mode option is perfect for novices and further      
training is available with the context-sensitive Help function.  Read   
and write ASCII files with the integrated text editor.  X,Y and IMODEM  
protocols are fully supported as are multi-tasking environments such as 
Topview, Desqview, Taskview and Windows.  The dialing directory can be  
sorted, printed and searched.  Terminal emulations for VT100, ANSI, TTY 
and Televideo 925 ensure further flexibility.  LOG allows you to        
maintain usage records - who called, time called, time online and a     
Date/Time stamp for each log entry.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FONZAP.DOC

{% raw %}
```

        ----------------------------------------------------------
              Qmodem SST 4.0  -  FON File Note Number Zapper
        ----------------------------------------------------------

Description:

   FONZAP is used to restore the unique Attached Note numbers to the FON
   files.  Even though the UPGRADE utility does this, other non-Forbin
   software utilities like Sort/Print utilities may destroy this numbering.


Syntax:

   FONEZAP  filename
                    
   'filename' must be a valid Qmodem FON file and can located in any
   subdirectory.


Operation:

   FONZAP  C:\QMODEM\QMODEM.FON

           This will zap the QMODEM.FON file in the C:\QMODEM
           directory.


```
{% endraw %}

## QMHOST.DOC

{% raw %}
```
         Quick-Start Host Instructions.

         You will use the following files:

            QMHOST.DOC    (You're reading it)
            PRELOG.HST    Sample Host opening file
            MENU.HST      Sample Main Menu file
            PROTS.HST     Sample Protocols available file
            LOGOFF.HST    Sample Closing message file
            QMHOST.BAT    Required file for Shell to DOS to work


Step 1.  Place these files in your Qmodem directory.


Step 2.  Verify that Alt-N has all the correct settings to answer the phone
         and hang up. (refer to the Qmodem DOCs for this)


Step 3.  Create a Host subdirectory (any name) with the MKDIR command and
         place this in Alt-N/H/D and Alt-N/H/U.  This will be where the
         Uploads and Downloads reside.  Do NOT place your HST files in
         there!


Step 4.  Verify the Alt-N/H settings.  Make sure the time online is set to
         a reasonable value.  Note: Downloads are not compared to the time
         remaining.  After a download has completed/aborted, the time
         remaining is compared and the appropriate action is taken.


Step 5.  Make sure you are positioned to the Qmodem directory.


Step 6.  Press Alt-V and edit the QMHOST.PWD file and add your name to the
         top like this:

                 JOHN FRIEL PASSWORD 1 ; The Sysop!

         The fields should be SPACE separated.  The '1' means you can
         shut the system down from remote with the 'Z' command (provided
         you remember the Shutdown Password).  All other users should
         have a level 0.  (this is planned for future growth)   If you
         have it set as an OPEN system, all new users will automatically
         get a level 0 when they are added to the file.  If you have a
         CLOSED system, then the users have to be pre-coded or it will
         deny them access.


Step 7.  Start Qmodem and press Alt-5.  You should then see the
         'Waiting for Calls' message.  Then press F1 to log in locally.
         You should be able to execute the F & G commands only (as the
         others require you to actually be 'Online').


Step 8.  Log off.  Have a friend call and test your system out while you
         watch.  Just for security sake.



Setting up the 'Shell to DOS'


Step 1.  Verify that the QMHOST.BAT file is in the current directory or in
         the PATH= statement.  This BAT file should have the following
         line in it:

         DOORWAY PORT:%3:%4 /M:60 /S:* /K:0 /G:ON /A:ON /V:D^U /C:DOS

         You can modify this BAT file to do additional commands before and
         after the Drop-to-DOS if need be.  The DOORWAY line itself
         should NOT be modified.


Thats it!  Your Qmodem Host mode should be up and running!


```
{% endraw %}

## QMML6.DOC

{% raw %}
```
The QMML6 Qmodem 4.0 / Qmail Script
--------------------------------------

QMML6.SCR, QMML6.DOC (c) John Oren, 1988, 1989

Authorization is granted to The Forbin Project to
publish this script as part of the Qmodem SST 4.0 package.

Introduction
------------

QMML6 is an interactive Qmodem-Qmail script with the following
features:

        *  It can be used as a simple log on script.

        *  It can be used to do a complete mail run including
           uploading replies, and downloading new replies.

        *  It can be used to do a simple upload of replies, or a
           simple download of waiting messages.

        *  It will remind you if you have failed to configure the
           Qmail door.

        *  It will back-up your .REP file, and delete the file that
           you have just uploaded, thereby avoiding duplicate uploads.

        *  It will also back up your latest .QWK file, and delete it
           from your download directory.

        *  It will place the .QWK file in your Qmail reader
           directory, ready to read.


QMML6 Customization and Execution
---------------------------------

Prior to using QMML6, edit the QMML6.SCR file to change the
program's default to reflect your environment:

Assign   QWKFILE   QMODEM.QWK        ; Enter the name of QWK file for system
Assign   REPFILE   QMODEM.REP        ; Enter the name of REP file for system
Assign   QWKPATH   c:\QM40\HOLD\     ; Enter DRIVE:\PATH to download directory
Assign   REPPATH   c:\QM40\HOLD\     ; Enter DRIVE:\PATH to upload directory
Assign   DOOR      7                 ; Enter the number of System QwikMail Door
Assign   XFER      F                 ; Enter the letter of the Protocol to use
Assign   QPATH     C:\QMAIL\         ; Enter the DRIVE:PATH to your reader
Assign   FNAME     TOM               ; Enter your first name
Assign   LNAME     USER              ; Enter your last name
;

TimeOut  240      ; Set Waitfor timeout to 240 seconds

When
When     "Press (Enter) to continue?"       "^M"
When     "graphics (Enter)=no?"             "Y Q^M"



----------------------------------------------------
o  The first line is the name of the .QWK file from the BBS.  In this
   case, it is the QMODEM.QWK.  Enter the name of your BBS QWK file.

o  The second line designates the name of the .REP file from the BBS.
   Again, in this example, it is the QMODEM.REP. Enter the name of your
   BBS REP file.

o  The third and fourth lines specify paths.  In the above example, the
   upload path and the download path are the same.  That may not be the
   case on your system.  Enter the path to your Qmodem upload and
   download directories.

o  The fifth line specifies the number of the Qmail door on the system
   that you are calling.  (Forbin uses #7)

o  The sixth line specifies the letter of the transfer protocol that you
   wish Qmodem to use in the transfer.

o  The seventh line is the path to your QMAIL reader.  PLEASE NOTE- When
   entering paths for the up and download directories, as well as the
   Qmail reader directory, you must end your entry with a BACKSLASH.

o  The eighth line is the entry for your first name, and the ninth line
   is the entry for your last name.  BE SURE THAT YOUR PASSWORD IS
   ENTERED IN THE QMODEM DIALING DIRECTORY. (Alt-D/R)

One last thing needs to be done.  On line 18, the WHEN statement
designates whether or not you want ANSI graphics.  The script
currently has the value of Y.  With a Y, you will receive the ANSI
graphics.  If you do not want to receive the ANSI graphics, change
the Y to N.

That's all there is to it.  Once you have entered the appropriate
information, place the script in your Qmodem script subdirectory, and
add it to the entry in the dialing directory for which it has
been customized.

When the script has finished running, you will find in your download
directory a file called QWIK.QWK.  This is the backup copy of your
latest .QWK file.  After you have uploaded messages, you will find a
file called LATEST.REP in your Qmail reader directory.  This is the
backup of your latest .REP file.  REMEMBER:  The next time you run
the script, these files will be overwritten.  The backups represent
the files obtained form the LAST running of the script ONLY.

NOTE:  This script EXPECTS your Qmail .REP to be in your Qmail reader
       directory.


I hope you find the QMML6 script useful.



John Oren
February 21, 1989

```
{% endraw %}

## SCRFIX.DOC

{% raw %}
```

        ----------------------------------------------------------
             Qmodem SST 4.0  -  Script File Conversion Utility
        ----------------------------------------------------------

Description:

    SCRFIX is a program to convert Pre-Qmodem 4.0 Script files to the new
    4.0 format.


Syntax:

   SCRFIX  filename

   'filename' can be any valid text file and is assumed to be a Script
   file.  Wildcards are allowed to mass-convert the entire Scripts
   subdirectory.


Operation:

   SCRFIX  C:\QMODEM\SCRIPTS\*.*

           This will convert all the files in the C:\QMODEM\SCRIPTS\*.*
           subdirectory.


   SCRFIX  C:\QMODEM\SCRIPTS\LOGON.SCR

           This will convert the LOGON.SCR file only.


Restrictions:

   The SCRFIX program is not a 100% conversion, but very close.  You will
   still need to manually convert all UPLOAD and DOWNLOAD script commands
   to the new format.  Refer to the Scripts section of the Doc file for
   exact command syntax.


```
{% endraw %}

## UPGRADE.DOC

{% raw %}
```

        ----------------------------------------------------------
              Qmodem SST 4.0  -  FON File Conversion Utility
        ----------------------------------------------------------

Description:

    UPGRADE is a program to convert Qmodem 3.x FON files to the new 4.0
    format.  Only 3.x versions are covered by this conversion program.  If
    you have earlier released of Qmodem FON files, the exact conversion
    utility can be downloaded from the Forbin Project BBS.


Syntax:

   UPGRADE  filename

   'filename' must be a valid Qmodem FON file and can located in any
   subdirectory.

   You will be asked to verify the conversion before you do something that
   can only be regretted later.  (meaning, make SURE you really want to.)


Operation:

   UPGRADE C:\QMODEM\QMODEM.FON

           This will convert the QMODEM.FON file in the C:\QMODEM
           directory.


   UPGRADE PCPURSUT.FON

           This will convert the PCPURSUT.FON file in the current
           directory.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1023

     Volume in drive A has no label
     Directory of A:\

    COLORS   SCR      7894   9-25-89   4:10a
    DOORWAY  DOC     88368  10-05-89   4:10a
    DOORWAY  EXE     42256  10-05-89   4:10a
    EDINSTAL EXE     23424   9-25-89   4:10a
    FONZAP   DOC       730   9-25-89   4:10a
    FONZAP   EXE      5904   9-25-89   4:10a
    FORBIN   SCR      1292   9-25-89   4:10a
    GO       BAT        38   3-24-88   4:18p
    GO       TXT       694   7-13-89   4:01p
    LOGOFF   HST       913   9-25-89   4:10a
    MENU     HST      1461   9-25-89   4:10a
    PRELOG   HST       913   9-25-89   4:10a
    PROTS    HST       989   9-25-89   4:10a
    QM-PIF   DVP       416   9-25-89   4:10a
    QMHOST   BAT       284   9-25-89   4:10a
    QMHOST   DOC      2837   9-25-89   4:10a
    QMHOST   PWD       117   9-25-89   4:10a
    QMHOSTPK EXE      8384   9-25-89   4:10a
    QMML6    DOC      4538   9-25-89   4:10a
    QMML6    SCR      6711   9-25-89   4:10a
    QMODEM   PIF       369   9-25-89   4:10a
    README            1279   9-25-89   4:10a
    SCRFIX   DOC      1035   9-25-89   4:10a
    SCRFIX   EXE      8400   9-25-89   4:10a
    UPGRADE  DOC      1045   9-25-89   4:10a
    UPGRADE  EXE     11328   9-25-89   4:10a
    FILE1023 TXT      2073   1-02-90  12:23p
           27 file(s)     223692 bytes
                           82944 bytes free
