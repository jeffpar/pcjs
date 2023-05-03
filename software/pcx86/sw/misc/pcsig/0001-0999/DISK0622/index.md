---
layout: page
title: "PC-SIG Diskette Library (Disk #622)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0622/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0622"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RBBS-PC 4 OF 5 (212,334,621,2092)"

    The RBBS is the bulletin board system of choice for many IBM PC
    bulletin boards. It's a large system on four disks and supports the
    PC-SIG LIBRARY ON CD ROM.
    
    RBBS-PC's internal structure is modularized and structured. The
    program includes a File Management System for directories, additional
    file exchange protocols, support for managing subscriptions,
    configurable command letters, multiple uploads on a single command
    line, new A)nswer and V)erbose ARC list commands, and
    context-sensitive help. It also can run as a local application on a
    network, use any field or define a new field to identify callers, and
    individualize callers having the same ID. The source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0622.TXT

{% raw %}
```
Disk No:  622                                                           
Disk Title: RBBS-PC 4 of 5 (212,334,621,2092)            
PC-SIG Version: S8.3                                                    
                                                                        
Program Title: RBBS-PC                                                  
Author Version: 17.3                                                    
Author Registration: $35.00.                                            
Special Requirements: A hard drive and modem.                           
                                                                        
The RBBS is the bulletin board system of choice for many IBM PC         
bulletin boards. It is a large system on four disks and                 
supports the PC-SIG LIBRARY ON CD ROM.                                  
                                                                        
RBBS-PC's internal structure continued to become significantly more     
modularized and structured.  Major enhancements included a File         
Management System for directories, additional file exchange protocols,  
support for managing subscriptions, the ability to run as a local       
application on a network, configurable command letters, the ability to  
use any field or to define a new field to identify callers, the ability 
to individuate callers having the same ID, multiple uploads on a single 
command line, new A)nswer and V)erbose ARC list commands, and context   
sensitive help. Source code is included.                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #622 RBBS-PC Disk 4 of 5  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Please note that the contents of this disk are in archived form.        ║
║ In order to access any of the files on them, you must un-archive them   ║
║ first.  Use the un-archiving program provided on this disk.  The best   ║
║ way to do this is to make a subdirectory on your hard disk and then     ║
║ copy the contents of all four disks into it.  Once this is done         ║
║ you can then go to your hard disk, get into your subdirectory and then  ║
║ type PKUNZIP *.ZIP (press enter).                                       ║
║                                                                         ║
║ Make sure that you read all of the documentation for RBBS-PC,           ║
║ this will answer most of your questions about this system.              ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## 173-CHG.DOC

{% raw %}
```
Summary of Changes in RBBS 17.3
by Ken Goosens and Doug Azzarito
11 February 1990

Because of the MAJOR changes to the code, you MUST download the entire
source - no .MRG files will be made available.

Upgrading:

Persons running 17.2 need only

(1)    replace RBBS-PC.EXE and CONFIG.EXE

(2)    If you want file a)ll to list multiple physical directory
       files (as opposed to say just the FMS master file), then
       you must set up RBBS differently (see LISTALL.DOC for
       details).

(3)    Macros and SmartText have been significantly improved in 17.3.
       You no longer need to include a "{ST" at the end of macros and
       will probably want to omit it.   You may want to enhance your
       menus as well.   See SMARTTXT.DOC and MACROS.DOC.

(4)    You may want to make file searches faster and reduce the
       wear on your hard disk by installing the fast file search
       system.   See FFS.DOC.   To install this fast file search
       you will need to get a new utility program provided in
       RBBS-UTL.ZIP.

(5)    WARNING: you may find that your uploads and download are no
       longer being counted!!    This can occur if you turned on
       restricting downloads but exempted a security level.   Some
       sysops do this to get RBBS to track bytes up and down loaded,
       rather than to restict downloading.   To get RBBS to operate
       equivalently, you MUST CHANGE the PASSWRDS file.   If your
       RATIO, which is the 3rd parameter from the RIGHT, is 0 or
       nothing (",0," or ",,"), then you must change it to -1 in
       order for the code to work equivalently.   A ratio of 0 will not
       count any downloads.   This allows "free" periods of
       downloading to be specified, such as between 1 a.m. and 6 a.m.

(6)    Help has been restructured and you should replace the help files
       with those in the new RBBS-TXT.ZIP.   There are also new menus
       which you may want to consider using.   However, be careful NOT
       to replace your customized UPCAT.HLP.

Summary of Major Changes

(1)    ALL VARIABLES in RBBS-PC source has been changed.  This is
       the first step in an effort to make the RBBS-PC code more
       programmer friendly and to exploit the growing power of
       MicroSoft BASIC.  The file RBBS.REN gives a cross listing
       of old and new names.

(2)    Over 60 bugs/problems have been fixed.  The most
       significant are:

       (a) RBBS-PC can finally handle the midnight rollover.
           New functions are available that effortlessly handle
           any time calculation.

       (b) User record in memory was sometimes "lost"

       (c) Restricting session time for an external net mail
           event was lost after a door

       (d) Board would sometimes hang when message quoted had
           to be reformatted to fit the margins

       (e) Archive view function no longer hangs under QB 4.5.

(3)    Code was rewritten to be faster and generally smaller

(4)    Over 20 enhancements were added, of which the most significant
       are:

       (a) Search for a file's exitence on upload and download has
           been vastly speeded up.  Based on an indexed binary search
           of a sorted list of file names.   New utilities for
           installing this are included in RBBS-UTL.ZIP.

       (b) Data base function to forward search (jump to a line
           containing a particular string and continue from there)
           was added for all file and text displays

       (c) NEWS facility that automatically displays news since
           last on to callers

       (d) callers can now stack commands to virtually any depth, and
           stacking is consistently supported everywhere.

       (e) modem commands can be selected based on modem model.

       (f) Users may now FORWARD their mail to another user.  Sysops
           or users having sufficient security to edit a message
           can forward it to anyone as well as change anything in the
           message header.   See FWDMAIL.DOC for details.

       (g) The MSG header Security change now allows the sysop to change
           ANY field in the header.

       (h) When reading mail, the SYSOP can instantly edit the USER
           record of the message sender, then return to reading.

Bugs Fixed

(1)   Occasional untrapped error after quoting a message.

(2)   Page length was reverting to configuration default after
      being set

(3)   Basic routine for viewing ARCed files was trying to view
      some non-ARC files

(4)   Unpredictable results when using more than 13 work variables
      in macros

(5)   Work variables in 1st line of macro template not being substituted

(6)   Macro invoked inside a questionnaire was waiting for Enter to be
      pressed, with no prompt, when macro was not found

(7)   Time locks on downloading were reapplied after dooring

(8)   Not pausing on W)ho command when screen full

(9)   Occasional string space corrupts when passing command line arguments
      to RBBS

(10)  Protocol reported not always right

(11)  New bulletin check never finding bulletin 1 to be new

(12)  Internal archive viewer hanging when compiled under QB 4.5

(13)  Auto-logoff not working when doored to external protocol

(14)  Record of user sometimes blanked out

(15)  Macro commands not executed when inside stacked command

(16)  # of lines used on VGA sometimes not right

(17)  0 days in registration period sometimes not treated as unlimited
      registration

(18)  Up/download counts in conferences sometimes reset to values in
      main logon user record

(19)  Highlighting in message read getting into quoted message

(20)  Personal directory listing not interruptable

(21)  Upload occasionally treated as complete before it really is,
      when had a timeout

(22)  SmartText for file name (FI) not working

(23)  Can get security violation on a disabled command

(24)  Unable to read messages based on string with an embedded blank

(25)  Not limiting session time for a net mail event after exiting
      to a door

(26)  Status line updated right after a download so sysop can see
      what file was previously downloaded

(27)  Caller not always thanked for the upload.

(28)  Turbo logon into conference not working when in lower case.

(29)  Conference V)iew not working sometimes after sysop function 5

(30)  Macos that passed commands to rbbs but continuing with same
      macro afterward could get strange untrapped errors.

(31)  Once browse a conference, remain in browse when join others.

(32)  Wildcard searching in non-FMS directories did not work.

(33)  The /G switch is now ignored on UPLOADS.

(34)  Line noise or other INVALID keys now flush all user input.

(35)  Names in Smart Text are now in proper case instead of CAPS.

(36)  Stated ratios remaining not correct after a download, when
      limiting downloads by ratios.

(37)  Modem could stop re-initializing.

(38)  Autopage not working for new users.

(39)  Threading updated last message read when shouldn't have

(40)  Msg recovery command not supporting stacked commands

(41)  Request for "my" mail persisting after the msg read

(42)  Wrapped word in msg entry sometimes not displayed

(43)  File n)ew not working with a)ll dirs for non-FMS system

(44)  Never asking for password on door return when in doors.def

(45)  Person welcomed back may fail to be last caller

(46)  Personal mail scan sometimes reporting mail not to/from caller.

(47)  Thread sometimes matching mail not in the thread.

(48)  Sometime hanging after a recycle.

(49)  Unable to download files with 2 character names.

(50)  Uploads no longer accepted with extensions longer than 3 characters.

(51)  NS (non-stop) sometimes not causing to display continuously.

(52)  Not logging caller off immediately after inactivity time out.

(53)  Batch import in msg not supporting stacked command.

(54)  Thread not working on messages with subjects longer than 22 chars.

(55)  Get errors if let caller unjoin logon user file.

(56)  Not logging off immediately after a sleep disconnect (timeout for
      inactivity).

(57)  Conference view could report # of new msgs incorrectly for the
      conference currently in.

(58)  Conference welcome in conferences not a subboard will recognize
      graphics versions.

(59)  Echoing command twice when type very fast remotely.

(60)  On a batch download, is possible to exceed download restrictions

(61)  Sysop's last msg read could get reset back to old value after doing
      user maintenance.

(62)  Possible to get new mail waiting and messages left in conference
      v)iew scan, in a conference you were just in and got "no new mail".

(63)  Turbo keys not supported in prompt for listing users.

(64)  Message read prompt can sometimes be in turbo key mode.

(65)  Can get untrapped error when try to join a conference.

(66)  Possible not be able to kill msg you created, and to kill msg
      neither to nor from you.

(67)  Count of bytes downloaded in user's record included only
      the last file in a batch download.

(68)  Download ratios and limits work more exactly and consistently.

(69)  Not changing msg to received status when caller read who had
      sysop privileges but wasn't using remote sysop name.

(70)  Unable to entire valid port addresses for IBM PS/2.

Enhancements Added

(1)   When have insufficient time to download all the files requested,
      RBBS will inform you of the files omitted but try to download
      what there is time for instead of cancelling the entire download
      request.

(2)   Timelock message now shows minutes & seconds left in time lock.

(3)   Command stacking now supported consistently and to virtually
      any depth

(4)   Autopage message less stiff and formal when caller notified that
      sysop wanted to know caller logged on.

(5)   Chat time given back when sysop initiates chat and no longer counts
      against session time

(6)   Conference name added to message header

(7)   Support for new ZIP imploded compression

(8)   NEWS facility added.  Special bulletin displayed automatically
      on logon when updated since user last on.

(9)   Message quoting first gives the edit command prompt but
      tells how to continue adding to a reply.

(10)  Default extension automatically added to uploads and downloads
      when no extension is specified

(11)  Forward search added to all directory displays and text file
      displays

(12)  Delays and embedded returns can be put into modem control
      strings.

(13)  Caller shown on welcome line if connection is reliable

(14)  SmartText can control whether substituted value is inserted
      or overlaid

(15)  SmartText can control whether substituted value is trimmed
      of leading and trailing spaces first

(16)  Caller is informed when session time is shortened because of
      an external net mail event.

(17)  Can use "s" for since last listed on file N)ew command (e.g.
      "n s u" for list new files since last on in upload directory).

(18)  When replying to a message, will automatically continue if
      person sending mail to is not in the user's file, rather than
      asking the user whether wants to reenter name or continue.

(19)  Macro questions can have edits forcing answer to be one of a
      list or between two values.

(20)  Protocols to be used to download and upload can be specified
      anywhere in stacked command line rather than just on end.

(21)  File searches on up and downloads have been vastly speeded up.
      Makes a huge different on slow devices like CD-ROMs.  Also,
      have ability to trigger OFF LINE processing for files elsewhere.
      See UPDOWN.DOC.

(22)  Config gives option to set modem commands based on modem
      model.   Uses external file MODEMS.SET in default drive/path.
      Makes RBBS much easier to set up.

(23)  Sysops can now track UL/DL's and have a "free download" period.

(24)  Sysops can now explain exactly what a REGISTRATION EXPIRES
      means.  The HELP file RGXPIRE.HLP is seen when a user is warned,
      and RGXPIRD.HLP is seen when RBBS-PC reduces a caller's access.

(25)  Support for 38,400 baud, only thru Fossil driver.

(26)  Can have multiple extensions searched when trying to detect
      duplicate on upload (new config parm 169).


Chronological Summary of Individual Changes

-------------------------------------------------------------------
RBBS-PC.EXE         08-06/89 10:00 PM EST  Release of CPC17-2B/0806
--------------------------------------------------------------------

                             Summary

EXE   MOD       Short Description
---- --------   -----------------
RBBS  KG021003  Sometimes protocol prompt not shown, just "?"
RBBS  KG021002  Commands carrying over to main prompt from msg scan
RBBS  KG021001  Subject wrong sometimes when L)ist in a comment to sysop
CNFG  KG020907  Copyright said 1989 instead in 1990
RBBS  KG020906  Halting after try to insert in a full msg
RBBS  KG020905  Not always properly updating message as received
RBBS  KG020904  Screen sometimes hard to read with external protocol
RBBS  KG020903  Registration questionnaire sometimes asked again in conference
RBBS  KG020902  Security level not set right when join subboard
RBBS  KG020901  Variable names have misspellings
RBBS  KG020802  Insufficent time not cancelling autologoff
CNFG  KG020801  Allow port address to be 3 or 4 digits
CNFG  DA020301  Allow partial paths to be specified in config
RBBS  KG020205  Temp. password changes not applied to initial dwnld credits
RBBS  KG020204  Download ratios not reported right and not applied right
RBBS  KG020203  Sometimes warned msg to yourself when comment to sysop
CNFG  KG020201  Config using "ARC" when should use generic "archive"
RBBS  KG020101  Ratios not being reported properly
CNFG  KG013103  Default extension being set to none rather than ZIP
CNFG  KG013102  Make default category code "UNC" rather than "UC"
RBBS  KG013101  Not reporting ASCII downloads to speech synthesizer
RBBS  KG013001  Reduce overwrites on screen when shelling to external proto
RBBS  KG012804  Number of bytes downloaded not recorded right when dooring
CNFG  KG012803  Default remote sysop name should be "CPC173" not "CPC172A"
RBBS  KG012802  Line numbers out of order - interfers with merging
RBBS  KG012801  Help not working right for global or sysop commands
RBBS  KG012701  Not updating sysop's user record on goodbye after dooring
RBBS  ML012102  External protocol sometimes destroys status line
RBBS  DA012502  SmartText variable sometimes not substituted for
RBBS  DA012501  Occasional overflow when answering phone
RBBS  KG012604  Autologoff not canceled if press Enter when file does not exist
RBBS  KG012603  Untrapped error on join conference
RBBS  KG012602  Make library extension default extension if unknown compressor
RBBS  KG012601  Shared array passed as argument when should be local variable
RBBS  AC012601  Getting time out errors with CD-ROM's sometimes on networks
RBBS  KG012401  Test for who can kill a message not right
RBBS  JM122203  Possible for config def file to be misinterpreted as subboard
RBBS  JM122202  Possible for recyle method to be changed in a subboard
RBBS  JM122201  38400 baud not working properly
RBBS  AC100201  Shell in library not right when using Fossil and in local mode
RBBS  AC100101  Extension reported in library system not always right
RBBS  KG012201  Possible for mail waiting to be set on msg to all
RBBS  KG011904  Library wrongly reporting that file is always an ARC
RBBS  KG011903  Shortens code
RBBS  KG011902  Security level for new users in subboard not right
RBBS  KG011901  New user questionnaire in subboard not invoked for new users
RBBS  KG011801  Possible to get endless loop in Crc Xmodem download
RBBS  KG011702  Turbo keys sometimes used where should never be
RBBS  KG011701  Turbo keys not invoked where should be
RBBS  KG011601  Sometimes resetting colors when shouldn't
RBBS  KG011503  Code reformatted for clarity and sylistic consistency
RBBS  KG011502  FMS entry with sec to view truncating a char off description
RBBS  KG011501  Conf mail scan made to recognize USERS as MAIN
RBBS  KG011409  Last msg read should cover deleted final messages
RBBS  KG011408  Sysop losing last msg read after doing user edit
RBBS  KG011407  Code reformatted for clarity and stylistic consistency
RBBS  KG011406  News file wrongly being shown non-stop sometimes
RBBS  KG011405  Giving back double time on sysop initiated chat
RBBS  KG011404  Wrong variable used (though code worked right)
CNFG  KG011403  Option to set new parms should not ask exit ques at end
CNFG  KG011402  Shortened prompt for what dirs "all" lists
CNFG  KG011401  Two new config parms not in list of new options
RBBS  KG011103  Stacked carriage returns on remote not echoing properly
RBBS  KG011102  Echoing dots instead of what typed now handled consistently
RBBS  KG011101  Download/upload speeded up
RBBS  KG011005  In config, non-numeric answers accepted as if "0"
RBBS  KG011004  Welcome file for conference not subboard not using graphic ver
RBBS  KG011003  Get errors if using Fossil but operating in local mode
RBBS  KG011002  Batch download able to violate download restrictions
RBBS  KG011001  Strings shortened
RBBS  KG010901  # new msgs wrong for current conference in V)iew conf
RBBS  KG010808  Time out not logging off but waiting again
RBBS  KG010807  Not rejoining main when time limit exceeded in conference
RBBS  KG010806  Stacked download not immediately canceled when pick None proto
RBBS  KG010805  Canceling batch download if last file not found and none given
CNFG  KG010804  Not properly saving parms for default ext/additional ext
CNFG  KG010803  Parameters made to use "<none>" consistently
CNFG  KG010802  Clarify significance of additional extensions
CNFG  KG010801  Utility function to set new parms corrected
RBBS  KG010706  Corrects internal documentation in code
RBBS  KG010705  Time out not logging off but waiting again
RBBS  KG010704  Request for CrxXmodem causing FMS to go into continuous
RBBS  KG010703  Batch import in msg edit not supporting stacked command
RBBS  KG010702  Stacked commands sometimes not working after turbo logon
RBBS  KG010701  Thread not working on msgs with subjects longer than 22 chars
RBBS  KG010601  Getting errors if let unjoin from logon user base
RBBS  KG010504  NS in FMS dir does not cause to go "non-stop"
RBBS  KG010503  "V C" pausing after do a "J M"
RBBS  KG010502  Code shortened
RBBS  KG010501  Not accepting spaces properly in answer to Last Name
RBBS  KG010405  Accepts upload names with too long an extension
RBBS  KG010404  Unable to download some files in FMS with short name
CNFG  KG010403  Config made to work properly for 38,400 baud
RBBS  KG010402  Clean up of internal documentation inside code
RBBS  KG010401  Stacked commands carried over rather than cancelled on error
RBBS  RK010402  Sometimes endless looping (hanging) after a recycle
RBBS  RK010401  Support 38,400 baud if using FOSSIL driver
RBBS  KG010302  Code shortened (but equivalent)
RBBS  KG010301  FMS wildcard search not working on entries with view security
CNFG  RS010101  Corrects spelling in text
RBBS  KG010102  Sysop function to chng #/bytes downloaded today not working
RBBS  KG010101  Not logging downloads when not counting agst ratios
RBBS  KG123102  Last date did directory listing not being updated
RBBS  KG123101  Strings shortened
RBBS  KG123005  Quoted message may be empty
RBBS  KG123004  Natural filenames in stack for download being rejected
RBBS  KG123003  Thread matching too frequently
RBBS  KG123002  Code shortened (but logically equivalent)
RBBS  KG123001  Personal mail scan sometimes reporting mail not caller's
RBBS  KG122604  Ratio restriction reported when exempted but counted
RBBS  KG122603  Config library dir path not being used for library dirs
RBBS  KG122602  Never asking for password on return from door in DOORS.DEF
RBBS  KG122601  Welcome back msg sometimes given when wasn't last caller
RBBS  KG122502  A)ll option not working in file N)ew command
RBBS  KG122501  Untapped error possible in msg read/scan
RBBS  DA122203  Code generalized to allow 1st n lines of msg to be locked
RBBS  DA122202  Reformats line of code to keep with 80 columns
RBBS  DA121901  Time elapsed set incorrectly on g)oodbye from a conference
RBBS  RK122304  Execution "hangs" sometimes when carrier drops under Desqview
RBBS  RK122303  Stated download balance remaining is not correct
RBBS  RK122302  Modem ceasing to work properly without hardware reset
RBBS  RK122301  Subboard def's changing some communication parameters
RBBS  KG122203  Msg recovery command not supporting stacked commands
RBBS  KG122202  Not discarding stacked commands when interrupts
RBBS  KG122201  In msg entry, wrapped word sometimes not displayed
RBBS  KG121902  Autopage not working for new users
RBBS  KG121901  Sometimes exiting for all external events at midnight
RBBS  KG121808  Autologoff is immediate when asks for protocol
RBBS  KG121807  Threading forward updates last msg read when didn't find any
RBBS  KG121806  Request for mail to/from you persists on later reads
RBBS  KG121805  Expiration date displayed for subscription not right
RBBS  KG121804  Logging user record number before name in callers log
RBBS  KG121803  Internal documentation not right for subprogram SetExpert
RBBS  KG121802  Getting non-stop in FMS download when using protocol "C"
RBBS  KG121801  Msg re-read (=) not working after forwarding mail
RBBS  FD121601  Not dropping to DOS at right time
RBBS  DA121102  Margin line not diplayed after quote in a reply
RBBS  DA121001  Time remaining not right after a door
RBBS  DA120901  Who message to not always right
RBBS  DA120801  Don't let forwarder omit or change tag header in msg
RBBS  DA120701  Allow forwarder to edit msg
RBBS  DA120501  Change variable names so not same as subprogram name
RBBS  ML120501  Routine to display a file made to have single exit
RBBS  ML120402  Variable changed from global to local
RBBS  ML120401  Consolidate subprograms.  Do not change logon time when doors.
RBBS  ML111903  Not returning right from sysop function 5
RBBS  ML111902  Initialization of variables made more consistent
RBBS  KG121304  After reply, go to msg edit rather than msg entry
RBBS  KG121303  Allow "c" to be stacked in join and download
RBBS  KG121302  Relisting body of msg after reply or forwarding
RBBS  KG121301  Code shortened
RBBS  KG121202  Tag line on forwarding not always right
RBBS  KG121201  Less confusing msg when can't edit a line
RBBS  KG120301  Code shortened
RBBS  KG120105  Prevent out of string space problems in call answer
RBBS  KG120104  Spelling corrected in a text message
RBBS  KG120103  Reply made to go to msg edit rather than msg continue
RBBS  KG120102  Carry over of stacked command into msg forwarding
RBBS  KG120101  Restrictions added to Msg F)orwarding 
RBBS  KG112701  Prohibition agst leaving msg to self made warning & generalized
RBBS  AC082901  Refuses to accept correct passwords on logon
RBBS  LP112601  Won't compile under QB 4.5 because variables/subpgms same name
RBBS  KG112205  Undoes ML050201.  Not asked to see new files if can't view new.
RBBS  KG112204  Code shortened.   Informative msg on header edit changed.
RBBS  KG112203  Forwarding no longer changes who msg is from
RBBS  KG112202  Undoes DA090903.  Auto logoff left universal and bugs fixed.
RBBS  KG112201  Explanation added: Enter leaves unchanged on sysop X)fer edit
RBBS  KG112001  Mutiple personal downloads causing untrapped error
RBBS  DA111801  Added FlushKeys SUB (flush ALL user input) on illegal key entry.
RBBS  DA111802  Added help for REGISTRATION EXPIRING and REG EXPIRED.
RBBS  DA111803  Logoff msg not correct if user doored.
RBBS  DA111804  Added several Smart Text variables.
RBBS  DA111805  No /G allowed when doing UPLOAD.
RBBS  DA111601  Code reduction
RBBS  DA111501  Fixed Misspelled variable.
RBBS  DA111401  Added MSG FORWARD function.
RBBS  DA111101  Rewrote to reduce code
RBBS  DA111102  Removed DROP TO DOS restriction at 11:59 PM.
RBBS  DA111103  Changed TIME REMAINING to Minutes Remaining (secs never used!)
RBBS  DA111103  Changed TCA! to SecondsUsedSession! (that's what it means!)
RBBS  DA111105  CheckTime now sets SubParm so you can see if timer expired.
RBBS  DA111106  Added sub NameCaps to put a string in Proper Case.
RBBS  KG110501  Personal downloads not working with fast file search
RBBS  KG110502  Shorten code
RBBS  KG110503  Search volatile file areas first and static second
RBBS  KG110504  Support non-blank character on end of LIDX.DEF
RBBS  DA110301  Cleaned up TIME LOCK display
RBBS  DA110302  Made use of new CheckTime routine
RBBS  DA110303  Made use of INT where possible instead of REAL.
RBBS  DA110304  Removed unneeded FINDTIME function.
RBBS  DA110305  Removed unused code.
RBBS  KG110201  Process macro when download file not found
RBBS  KG110202  Do not require "." on end of download when no extension
CNFG  KG103101  Support setting modem strings based on modem model
RBBS  KG102501  Wildcard searches not working for non-FMS dirs
RBBS  KG102502  Password in logon macro taken as 1st name when name not found
RBBS  KG102503  In non-FMS dirs, inconsistently displaying what searching for
CNFG  KG102504  Default Extension for macros changed to empty string
RBBS  KG102505  Possible to get macro invoked from prior prompt
RBBS  KG102201  Enhanced:  very fast search for file's existence
RBBS  KG102101  Macro case not working right when SmartText symbol not "{"
RBBS  KG101901  At prompt for a directory, "L;L" makes infinite loop
RBBS  KG101801  Improve conference mail scan message
RBBS  KG101801  Stay in browse after once browsing
RBBS  KG101802  Improve conference mail scan message
RBBS  KG101701  Couldn't stack "C" as a protocol
RBBS  KG101601  Macros that don't pass anything to RBBS sit waiting for input
RBBS  KG101602  Stacked "Q C" ignoring stacked "C"
RBBS  KG101603  Upload/download enhanced to accept protocol any position
RBBS  KG101604  Files on download getting misinterpreted as a macro
RBBS  KG101401  File stacked command "L L" not working
RBBS  KG101301  Allow macro to work at section prompt but not inside
RBBS  KG101302  Macros enhanced to verify answer is ok
RBBS  KG101201  Varied errors when send rbbs commands inside macros
RBBS  KG101202  Changes how determine what dirs listed for "A)ll"
RBBS  KG100701  Use more neutral term when shorten time for external event
RBBS  KG100702  Add assign work variable command to macros
RBBS  KG100703  Stacked commands in a macro not executing properly
RBBS  KG100704  Leading spaces not ignored at main command in a stack
RBBS   <none>   Wrapped word in msg entry not displayed (rare)
RBBS  BK100401  Sysop sometimes unable to v)iew conf after sysop maint.
RBBS  KG100401  In reply to a msg, automatically continue if user not found
RBBS  BK100402  Turbo logon into conf. not working when lower case
RBBS  KG100402  Shorten code to reduce size
RBBS  KG100403  Basic code for viewing arc files was disabled
RBBS  KG100404  Can get insufficient time on personal download
RBBS  KG100301  Unable to read msgs based on string with embedded blank
RBBS  ML100301  Add XFER counter update to menu
RBBS  KG100302  Continuous option carrying over as a command
RBBS  ML100302  ZAP the B$ array (some code doesn't look at ANS.INDEX)
RBBS  KG100303  Not limiting session time from netevent after a door
RBBS  KG100304  Reporting 0 new bulletins when back from a door
RBBS  KG100305  Omit debugging code reporting node index when dooring
RBBS  KG100306  Not informing caller when time shortened for netmail event
CNFG  KG100307  Misleading description of netmail parameter
RBBS  KG100308  Support stacking "S" for "since last on" in file N)ew
RBBS  KG100309  Not properly parsing out "S" in a stacked command
RBBS  KG100310  Showing dir of dir's even when stack an answer
RBBS  KG100101  Not always updating date last listed a directory
RBBS  KG100101  Checking new bulletins when shouldn't
RBBS  KG100102  Block display in macros not working
RBBS  KG092801  SmartText sometimes missing a substitution
RBBS  KG092601  String space corrupts while reading bulletins
RBBS  KG092602  Can get security violation on disabled command
RBBS  KG092501  Occasionally misinterpretes upload as complete when not
RBBS  KG092502  Smart Text for file name (FI) not working
RBBS  KG092503  Get error when try to do basic open at 38400
RBBS  KG092401  Msg read could get in endless loop.   Fix to a fix.
RBBS  KG092402  Not always thanking uploader
RBBS  KG092403  Personal directory listings are double spacing
RBBS  KG092301  F)ile search cutting out after 1st hit in extended desc
RBBS  KG092302  Jump not working when stack command with it
RBBS  KG092303  Highlighting for search getting into quoted msg of reply
RBBS  KG092304  Prompt to v)iew in FMS list should vary with expert status
RBBS  KG092305  Make personal dir listing interrupted.  Elim unnecessary code
RBBS  KG092201  Support embedded returns and delays in modem strings
RBBS  KG092202  Show caller in welcome if connection is reliable
RBBS  KG092203  Support stacked commands in msg block delete
RBBS  KG092001  Eliminate unused variable
RBBS  KG092002  Try to eliminate string space corrupts in bulletins
RBBS  KG092003  Display extension when added for a download
RBBS  KG091901  Stacked commands misintpreted when get security violation
RBBS  KG091902  Personal downloads not adding default extension
RBBS  KG091801  Logon macro interpreted as command on turbo logon in conf
RBBS  KG091701  Dir of directories shown for novice, even when stack
RBBS  KG091702  Who's on not correctly reporting 38,400 baud callers
RBBS  KG091601  Directory search not working for non-FMS directories
RBBS  KG091501  Getting string space corrupts at "More..." in bulletins
RBBS  KG091401  Supported added to Jump inside text display
RBBS   <none>   Upload counted as successful before over
RBBS   <none>   Uploads/downloads reset to 0 when drop carrier in door
RBBS   <none>   Upload to main FMS when in subboard and dooring to protocol
RBBS  KG091301  0 days in registration period not treated as infinite
RBBS  KG091001  Add default extension to upload if none specified
RBBS  KG091002  Unable to download file "xyz" with "xyz."
RBBS  DA090901  Add '$' as "turbo logon" character - skips WELCOME file
RBBS  KG090901  Carry over to command prompt from questionnaire
RBBS  ML090901  Add caller info to external xfer bat file
RBBS  DA090902  Save FUNCTION.KEY so we know what kind of logoff this is.
RBBS  KG090902  News file should be interruptable but is not
RBBS  ML090902  Enhance chg MSG sec so ENTIRE MSG HDR can be changed
RBBS  DA090903  Make sure AUTO LOGOFF on download always works.
RBBS  DA090904  Remind user he'll be auto-logged off.
RBBS  DA090907  Make Bulletin read (S)ince match msg read
RBBS  DA090908  Allow REPLY of password msg's to keep password
RBBS  CS090801  Up/download being reset in conference to what in main
RBBS  KG090701  After msg quote, put into msg entry on next line
RBBS  KG090702  Add default extension to download if no extension used
RBBS  KG090703  # of lines on screen on VGA not right
RBBS  KG090704  Skipping 1st name prompt if prelog more than 1 page
RBBS  KG090705  Not canceling stacked downloads when pick None as protocol
RBBS  KG090706  Enter not terminating at personal download prompt
RBBS  KG090601  Unknown command and message save carrying over commands
RBBS  KG090501  Support NEWS file in list of "bulletins" to check
RBBS  KG090502  Turbo logon can carry over as command
RBBS  KG090401  Programmable user interface not working
RBBS  KG090402  Could store "parsed" value in wrong place
RBBS  KG090403  Macro commands substituted in stack could be ignored
RBBS  KG090404  NEWS facility added
RBBS  KG090405  Possible for last name to carry over as a command
RBBS  KG090201  Not properly processing 38400 baud
RBBS  KG090202  Possible to get blank record (no name, too high security)
CNFG  KG090203  String for deleted user check not set right
RBBS  KG090204  Unneeded extra operation in code
RBBS  KG090205  Endless loop when asks for directory
RBBS  JM090206  Internal arc view not recognizing imploded compression
RBBS  KG090101  Macro commands not executed at right time
RBBS  KG090102  Support baud rates greater than 19,200
RBBS  KG083101  Macros not getting substituted inside stacked commands
RBBS  KG083102  Internal blanks in integer expressions not terminating #
RBBS  KG083103  Correct documentation inside code
RBBS  KG083104  Support substitution in questionnaire security commands
RBBS  DA083001  Misintepreted commands when no personal directory exists
RBBS  KG083001  Adds conference/subboard name to message header
RBBS  ML083001  Don't record downloads if ratio is 0:0
RBBS  DA083002  Auto-logoff not surviving exit to door
RBBS  KG083002  "ALL" option for directory choice not working right
RBBS  KG083003  Redundant lines of code eliminated
RBBS  KG082901  Message read re-starting
RBBS  JM082801  Internal archive viewer hanging under QB 4.5
RBBS  KG082701  Give back chat time the sysop initiates
RBBS  KG082702  Erroneous file names when download at end list on logon
RBBS  KG082703  Line 25 not properly updated after a download
RBBS  KG082601  Batch downloading not working for P)ersonal downloading
RBBS  DA082602  Use ANS.INDEX in B$ array
RBBS  KG082602  Last name of who msg to being take as message subject
RBBS  KG082603  Auto logoff not working right with download command
RBBS  KG082501  L)ist not working right for conference menu
RBBS  KG082502  Endless looping when can't find a msg file in subboard
RBBS  KG082503  Conference mail scan not alligning report properly
RBBS  KG082504  Threading in messages not working
RBBS  KG082505  Read Since sometimes restart reading
RBBS  KG082506  Multi-word subject in msg can cause unknow command later
RBBS  KG082507  Untrapped error when no time for files on batch transfer
RBBS  CS082301  New bulletin check never finding bulletin 1 to be new
RBBS  KG082301  Not applying first protocol to all others in file list
RBBS  TC082301  External control file for new bulletin check not working
RBBS  KG081601  Show seconds remaining on a timelock
RBBS  KG081501  Better message for autopage
RBBS  LP081501  Report number of new bulletins on turbo logon
RBBS  KG081502  Don't cancel entire download when insufficient time
RBBS  KG081401  Protocol that is reported not always right
RBBS  KG081201  Command stacking inconsistent and does not always work
RBBS  KG081202  Code shortened
RBBS  KG081203  String space corrupts possible when pass cmnd line parms
RBBS  KG081101  Question. macro execute waits for Enter when macro not found
RBBS  KG081001  Questionnaire code made clearer, smaller, faster
RBBS  KG081002  When not using assembler, tries to view non-ARC files
RBBS  KG081003  Replace routine to trim trailing chars with faster one
RBBS  KG081004  Documentation inside code is wrong
RBBS  KG081005  Unpredictable results when macro uses work var > 13
RBBS  KG081006  Work variables not substituted in 1st line of macro template
RBBS  BK080901  Not pausing when screen full on W)ho command
RBBS  KG080801  Page Length reverting to config default
RBBS  KG080701  Occasional untrapped error after a quote
RBBS  ML073003  Delay just before kicking a user off.
RBBS  CS062301  Give smart text ability to overlay rather than insert
RBBS  KP061804  Time locks on download reapplied after a door
RBBS  ML052301  Reset comm port after returning from door.
RBBS  DA051202  Don't let users reply to their own message
RBBS  DA051102  Maintain DEFAULT.EXTENSION$ variable for compatibility
RBBS  DA051103  Don't "dot-echo" spaces when user logs on.
RBBS  ML050201  Allow user to download at logon correctly
RBBS  DA050202  Shorten MORE prompt so additional parm can be added.
RBBS  ML050202  Add MSG READ function to allow modifying user record.
RBBS  DA050203  Add DL/UL ratio change to SYSOP option 5
RBBS  ML050203  Return from USER EDIT to MSG READ properly.
RBBS  ML050205  Reset color for LINE 25 display
CNFG  DA050206  Add list of extensions to check for duplicates.
RBBS  DA050207  enable END key as "friendly" kick-off (CTRL-END is nasty one).
RBBS  DA050208  Code reduction
RBBS  DA050209  Set MSG security of reply to same as original msg

--[ There fixes were released as RBBS 17.2B/0806 ]--

RBBS  KG080501  Documentation of subprograms incomplete or unclear
RBBS  KG080401  Get wrong user record after reply when browsing
RBBS  KG080302  Data base form not displaying properly
RBBS  KG080301  Time limit from DOORS.DEF not passed in right units
RBBS  KG080202  DOORS.DEF limit on door time not getting applied
RBBS  RH080201  Timed event reexecuted after a door
RBBS  KG073101  Untrapped error when reply to msg when browsing

(problems below are left over that were not solved in 17.2B)

RBBS  -none-    Download ratios being applied when shouldn't be
RBBS  -none-    Get parts of prompt in msg when entering it (very rare)

Contributors include:

    DA - Doug Azzarito
    TC - Tom Collins
    FD - Francis Dorer
    KG - Ken Goosens
    RH - Ray Horton
    RK - Ronald Koridon
    BK - Blaine Korcel
    ML - Mark Lautenschlager
    AC - Jon Martin
    JM - Jon Martin
    JM - John Morris
    LP - Lee Pollard
    CS - Carl Slaughter
    RS - Randy Sun

```
{% endraw %}

## FFS.DOC

{% raw %}
```
Supplemental Documenation for RBBS 17.3
Fast File Search
by Ken Goosens, 10-22-89

RBBS 17.3 has a signficant enhancement to the way searches for a requested
file are done in and upload and download.   This enhancement has two
big improvements:

(a)  File searches are much faster.  In the case of very slow devices like
     a CD-ROM, this can be the difference between sub-second response and
     a 45 second response.   File searches are now virtually instantaneous.

(b)  File not stored on this system can trigger macros.   This allows
     requests for files stored elsewhere, either off line on backups,
     or on other cooperating systems, to trigger later processing.


Fast File Searching

For directories DOS uses chained "buckets" in multiple locations, 
searched sequentially.   This results in very slow performance when
the number of files to search gets into the thousands.   RBBS now
supports a fast file search than more than compensates for the
inefficent operation in DOS.

The basis for the fast file search is a file, configuration
parameter 267, which is a sorted list of file names available for
downloading.    The default name is FIDX.DEF.

The format of this file is:

columns 1-12:  file name
columns 13-16: location index (1, 2, 3, ...)
columns 17-18: carriage return line feed.

All data is stored as character data and the file is editable.   The file
names must be stored with no internal spaces and a period separating the
prefix from the extension.   The list of file names MUST BE SORTED BY
FILE NAME in order for the fast file search to work.

The location index is the record number (line number) of the locator file,
whose default name is LIDX.DEF, and has the following layout:

columns 1-63:  location of file
column  64:    any character.  MAKEFIDX puts in a period.
columns 65-66: carriage return line feed.

This file is all character data and is editable.   Essentially, the location
index points to a record in the location file.   E.g. if FIDX.DEF has

RBBS-BAS.ZIP   2
HARPIE.ARC     3

and LIDX.DEF has

C:\DOWN1\
C:\DOWN2\
C:\UP\

Then RBBS-BAS.ZIP is located in directory C:\DOWN2 (2nd record) and 
HARPIE.ARC is located in C:\UP (3rd record).

The location field should be a drive/path terminating with a "\" if
any path is given, and file must be filled with blanks through column
63 if the path is shorter.  You must put some character in column 64.
Many editors delete trailing blanks, so you should probably put in
a non-blank.  A period is a suitable choice.

RBBS will use a binary search on the first 12 characters in FIDX.DEF.
This binary search can be significantly speeded by provided "tabs" for
this file, indicating the record at which the first file is that begins
with the symbols "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".   This is like
the "tabs" you see on dictionaries, so you can directly turn to the B's,
for example.   A tab file has the same prefix as the file name file,
except that it adds a "T".  For "FIDX.DEF", the tab file would be
"FIDXT.DEF".   RBBS will automatically detect and use a tab file if
available.   The tab has 72 characters in it.   Each 2 bytes represents
a binary integer whose value is the record number in FIDX.DEF where the
first file occurs that begins with the respective symbols above.  Thus
bytes 3-4 show where files begin with "1" and bytes 69-70 where files
begin with "Y".

Two utilities with source code are provided for setting up the fast file
searches.   The source, for compiling under QB 4.5, is included.

MAKEFIDX will create both the file name list (FIDX.DEF) and the
location file (LIDX.DEF), from a list of directories (see MAKEFIDX.CFG)
or a list of file names, or both.

You must next sort FIDX.DEF by file name.  A good shareware utility for
this is QSORT (QSORT FIDX.DEF /1:12).

MAKETABS will create a tab file (FIDXT.DEF) from the sorted file list
FIDX.DEF.

The batch file I use for recreating my fast file system is MAKEFFS.BAT.
It uses MAKEFIDX.EXE, QSORT.EXE, MAKETABS.EXE, and configuration file
MAKEFIDX.KG.   You need only edit MAKEFIDX.KG to change the filespecs
(/FileSpec=) to match where your files are, and where to write the
index files.


Reconfiguring to Take Maximal Advantage of Fast File Searches

The fast file search is virtually instantaneous on an 8088 with a tab
file for 5000 file entries.   The savings on wear and tear on the hard
disk can be very significant as well.   And the time it takes to set up
the fast file search is only a few minutes.  Most sysops, therefore, will
want to implment fast file searching, whether or not they have a slow
device like a CD-ROM.

RBBS will first search through the drive/paths specified in config
to be available for downloading, as it always did.   Files not found
there will then be searched using the fast file search system.
The way the fast file search works is that a file found in its list is
looked for only in the designated location.  Nothing else is searched.

The optimal way to implement fast file searching is to reconfigure the
drive/pathes available for downloading down to at most the upload
directory, and let the fast file search handle everything else.   That
way, files will be searched first in the upload area, and those not found
at first will then be searched using the fast file search system.
Note that every file in the fast file search list is considered
to be available for downloading whether or not its drive/path
is listed in the configuration program as a downloadable area.   Note
that you can have separate fast file search systems available for each
subboard, if desired.   You can also use the fast file search for common
files and have a separate download area for the subboards.

Note:  whenever you relocate files, you must re-create the fast file
search system.   This is not hard since it takes little time and can be
automated.


```
{% endraw %}

## FWDMAIL.DOC

{% raw %}
```
                        Help with Message Forwarding
                        ----------------------------

Have you ever received a message which you KNOW was intended for someone
else or would be better addressed to another person?   Have you ever
wished that you could edit that message and send it on to the correct 
person?  With Message Forwarding, you can!

If you are reading a message addressed to you, or if you are reading a message
which you have left, you will see a new option on the "message read" prompt.
It will now show:

    More [Y]es,N)o,C)ont,A)bort,R)eply,T)hread,=)again,+,-,F)wd,K)ill?

Notice the "F" command next to Kill?  When you select "F", RBBS will prompt
you with the standard "message to" prompt (e.g. "To [A]ll, (S)ysop, or name").
Indicate who you wish to forward this message to.  If you enter the name of a
user not currently registered in the conference you are logged into, RBBS will
warn you, but allow you to post the message anyway, if you wish.

Let's suppose your name is JOHN DOE and that you want to forward a message
sent to you by TOM THUMB about Turbo C to your friend SALLY BORLAND.  You
would read the message from Tom and select the "F" command.   When prompted
for a user name, you'd enter "SALLY BORLAND".  RBBS verifies that
she is a user in the current conference and asks you what protection you'd
like to assign the message (the standard "public, private, or password"
prompt).  Once you answer these two questions, RBBS copies the text of the
message left to YOU into the message editor and saves the message after you
confirm you want it forwarded.

You will also notice that at the TOP of the message, RBBS has thoughtfully
provided a tag line of:

    Msg was to JOHN DOE, forwarded to you by JOHN DOE

This will avoid confusing Sally by making it clear to her that it was
forwarded, who it was to, and who referred the message to her.
This line CANNOT be edited or removed.   The forwarded is given the
opporunity to edit the forward message.   Good edits would be to reduce it
to the parts needed, or to add an additional comment.  Poor edits would
be to change the meaning or content of the message -- but remember, the
tag line at top says who forwarded the message, so alternation of the
forwarded message is traceable back to the person doing the forwarding.

If the msg being forwarded was from you, you can not only address it
to another person but fully edit the message as well.   Simply
edit the message as normal, and save it as you usually would save a message.
RBBS then re-displays the original message header, which allows you to do
whatever you wish with it (perhaps deleting the original message makes the
most sense).

SysOp's Note:  If you have sufficent security to change the mininum security
to read the message, you can forward ANY and ALL messages.

```
{% endraw %}

## JUMP.DOC

{% raw %}
```
New JUMP Feature of RBBS
by Ken Goosens

17.3 has a new "jump" feature in its display of text files (e.g.
bulletins) and file directories.   A "jump" into a file means basically
to skip forward to a point, then resume displaying as before.
A jump is basically a search based on a substring.   Whereas
the file search command reports all and only the lines containing
the search string, and jump stops as soon as it hits a line with
the substring and resumes whatever listing was in place from
that point on.   For example, if the file being searched contains

this is line 1
this is line 2
and this is line 3
but this is the next to last
and the very last

and you are positioned just above these lines, then a jump to
"and" will put you on the third line.   Whereas in a file directory,
a "search" for "this" would display only the 3rd and 4th lines.

The user is offered the option to "J)ump" whenever it is operative.
Once a jump is defined, the user also has the option to "R)ejump
based on the same text (which is displayed).

The jump feature is very valuable in bulletins.  For example, if
you list each bbs's sorted by state, the caller by jump to the top
of the listing of any state.   Or jobs, or items for sale, whatever.

The jump within file directories is most valuable when the directories
are not sorted by date.  E.g. alphabetically, or by subject.  Often
we remember the context we saw a file in, but not the name.  Jump
lets you go to any remembered context.   After a jump, the directory
listing resumes as it was before, whether just a listing, or substring
search, or new file search.   The jump applies to both FMS directories
and non-FMS.   FMS searches have the advantage that the found string
is highlighted if the user preference has highlighting on.


```
{% endraw %}

## LISTALL.DOC

{% raw %}
```
Listing A)ll File Directories
by Ken Goosens
12 October 1989

RBBS 17.3 changes how a request for A)ll directories is handled in
the F)ile N)ew, L)ist, and S)earch commands.   The setup for 17.3
must be changed if it is to run equivalently to earlier versions.
Prior to 17.3, 

o   the directory specified in config parm 218 would be searched,
    if specified

o   otherwise, the directory of directories (DIR.DIR) would be parsed
    for directory names.

17.3 changes the "otherwise" condition.   Now, by beginning config
parm 218 with "@", it will be interpreted as a list of directory names
to use, containing each name on a separate line.

Note:  if you want the "all" to go thru a list of directories, rather
than one specifically, i.e. you are NOT limiting direcrtory searches
to the FMS master directory, then you must

o   change directory parm 218 to a new file, e.g. "ALLDIR.LST", that
    has in it the directory names to use.  E.g. if you want 
    all to include directories GAMES, UTILS, and GRAPHICS, then
    the parameter value would be "@ALLDIR.LST" and file ALLDIR.LST 
    would contain the 3 lines

                         GAMES
                         UTILS
                         GRAPHICS

    Note:  directories will be listed in the order specified.


```
{% endraw %}

## MACROS.DOC

{% raw %}
```
Documentation for Macros
by Ken Goosens 17 OCTOBER 1989

Macros in 17.3 have 3 major enhancements that now let them assign
a value to a work variable, edit answers to questions, and
contrain the context in which a macro operates.


                  Macro Assignment

Work variables can be assigned a value inside a macro.  The command
to do this is ":=".  E.g. "{:= 5 OK" assigns string "OK" to work
variable 5.

                   Macro Edits

Questions in macros can now have edits on the answers:  the edits
can constrain the answer to

o    one of a list

o    a numeric value between two values

o    a character value between two values

An editing constraint must be put in front of the actual macro
question it applies to, and a contraint applies only to the next
question and does not remain operative.

The commands for these are respectively "LV" (List Verify), "NV"
(Numeric Verify), and "CV" (Character Verify).  The list verify uses
the first character after the command as a delimitor between valid
responses.  E.g. "{LV;R;A;E;" means that only "R", "A", and "E" will
be accepted as answers ("{LV/R/A/E/" would have the same effect).
Semi-colon is the best delimitor in general because it cannot be
entered as a value.

Between checks are always inclusive.  Thus "{NV 9 11" will accept only
9, 10, or 11.  The numeric value must be an integer between -32,768 and
32,767.   To accept answers B-E, the macro edit command is
"{CV B E".

Whenever an answer fails an edit, the message "Invalid answer <...>"
is given with the answer recieved between brackets, and the question
is asked again.  An example of a macro with edits is:

4
{*1 Verification macro
{*1 now checking list...
{LV;A;F;W;
{01 Enter A, F, or W
{*1 now testing numeric range...
{NV 5 15
{01 Enter a number between 5 and 15
{*1 now testing character range...
{CV D J
{01 Enter a character between D and J


                   Constraining a Macro

Macros have been revised in RBBS 17.3 to allow the macro
to be constrained where it is operative, including

o   anywhere inside a section

o   anywhere inside a command

o   only at a section and not inside.

The constraint is governed by an extra parameter to the 1st line
in a macro file.   The new format is:

              <SecLevel>/<constraint>

where <SecLevel> is the minimum security required to run the
macro, and <constraint> is the section (M for main, F for
file, U for utility, or @ for library) and command letter the
macro is confined to (use original command letter, not the
reassigned ones).   For example

                4/M

means that security level 4 is required, and the macro runs only
at or inside the main section prompt.

                5/MB

means that security level 5 is required and the macro runs only at
or inside the main section bulletin command.  Thus the macro file 1.mcr

                2/MJ
                {EN
                PCB

means that when inside the main J)oin, the macro "PCB" will be
substituted for "1".  (So "J 1" does the work of "J PCB".)  The
"{EN" means not to echo what the macro substitutes (user does
not see "PCB").

To make a macro be operative only at a section prompt and not inside,
add a " /" to the end of the section constraint.  For example,

                 4/M /

means that the macro applies only at the main section prompt.  For
example, the macro SP.MCR

                 4/M /
                 {EN
                 J SEMIPRV

will substitute "J SEMIPRV" for "SP" when at the main prompt, but NOT
for "SP" inside the message read command ("R SP L").
                 
Note:  a macro will be ignored if it's name is the same as a command
symbol.  Hence to use 1, 2, 3, etc. for macro commands, you must
disable or substitute other symbols for the sysop commands.


```
{% endraw %}

## MODEM.DOC

{% raw %}
```
Documentation on New Modem Controls
by Ken Goosens, 22 Sept 89

RBBS 17.3 gives the sysop greater control over modem strings.
The modem strings can now have two special characters:

{  for an embedded carriage return
~  for a one second delay

E.g.  "~ATZ{" will wait one second, send "A", then "T", then "Z",
then carriage return, followed by a final carriage return (all modem
commands have a final carriage return added by RBBS).

The new control strings allow the sysop to finely tune the modem
controls.   Two new types of applications are possible:

o   Speed modem processing.

RBBS has a config parameter, time to delay between modem commands,
which is an inserted delay before every modem modem command.   This
can now be set to 0, and the tilde be used to individually control
any delays.   This generally allows the delays to be reduced to
speed up recylcing.

WARNING:  modems are very sensitive to timing.  Experiment carefully
with only change at a time if you want to optimize your modem processing.

o   Prevent modem problems.

Some modems, especially US Robotics modems, including the Courier and
HST, will get into a confused state where they refuse to respond to
further modem commands, when a ring occurs right in the middle of
a modem command.   Ever so often you will find them never answering
with the wrong lights on, and you have to turn the power off and back
on to get the modem working right again.  This problem can be eliminated
by adding an extra carriage return on the end of every modem string.

WARNING:  other modems, such as some Everex modems, will not answer
the phone properly if modem strings are followed by an extra carriage
return.

```
{% endraw %}

## NETMAIL.DOC

{% raw %}
```
Documentation of Enhancements that Affect NetMail in 17.3
by Ken Goosens
03 OCT 1989

(1)  Callers are now informed when their time is shortened for
     a net mail event.   Before, caller received less time than
     normal with no explanation.

(2)  Shortened session time for net mail event now remains in
     effect even when come back from a door.   Before, caller
     back from a door received a normal allotment of time,
     sometimes causing netmail events to be missed.

(3)  Config is clearer about net mail installation.   Before,
     implied that RBBS invoked net mail.   Now, clear than net mail
     is front end that invokes RBBS.

(4)  No longer prompted to re-enter or continue when replying to a
     message and person receiving mail not found.   Automatically
     continues.   Still informs sender that caller not here and
     still prompts when entering new message.

```
{% endraw %}

## NEWS.DOC

{% raw %}
```
Supplemental Documentation for NEWS
by Ken Goosens, 5 Sept 89

NEWS is a new feature in RBBS 17.3, based on work done by Lee Pollard.

Every conference can have a news file, which is displayed
automatically on logon if the news file has been updated since
the caller was last on.   On turbo logon, the caller
is only told that news has been updated but the news is not
displayed.   News can be viewed anytime using the N)ews option in
B)ulletins.  To read all new bulletins, the command is no longer
N but instead *.   Special note:  the news bulletin will NOT be
automatically included in the scan of all new bulletins.   You can
control exactly what files are included using * by putting in a file
called BULLET.FCK, which simply lists, one to a line, what files are
checked.  The control file expects to have the bulletins named
as the caller would type them, so, for example, "1" for bulletin 1,
or "N" for the new files check.

The news file is then like a special, named bulletin, but the
name of the file is based not on the bulletin prefix but instead on
the conference name.   Where XYZ is the name of the conference,
the news file for it is XYZ.NWS.   The news file should be placed in
the same drive/path as the conference welcome file, and will be
displayed after the welcome.  If the main message base is called
MESSAGES, the news file is MAIN.NWS.   The news file supports
graphics versions (XYZC for color graphics, XYZG for ascii graphics,
and XYZ for text).

There are sysop utilities which help considerably to manage such a
news files.   A shareware product that does this very well is the
shareware product FLASH.  It will

o   let you create, store, and edit news items by conference

o   rebuild both a color graphics and text version anytime, putting
    the news items in date order.

o   formats the message very nicely, with date, header, body, and,
    if desired, emulates a "news printer" spewing out the latest
    copy on tractor fed paper.

Unfortunately, FLASH will not automatically create an ASCII version
based on the IBM display characters, only a color graphics (C) and
text version (no extension to prefix).

The news file is best used for a series of dated, short news items
about the board (on logon) or the conference.   The items should be
ordered from newest to oldest, since the file is displayed from top
to bottom.    A sample format, with date, headline, and body, is:

---[ 09-05-89    NEWS FEATURE ADDED ]---

RBBS 17.3 now supports NEWS.  The news file is displayed on logon
if the news file has been updated since the caller was last one.
To view the news anytime, go into B)ulletins, and ask for N)ews.
To view all bulletins that have changed, use the "*)all new"
command.


---[ 09-01-89    MORE POWERFUL STACKING ]---


RBBS now lets you stack virtually any command to any depth.  For example,
"J GAMES R S" will join the GAMES conference and read all new mail since
last on.   Expert users who know what prompts are coming can thus
"preanswer" the question by stacking answers on the same line and avoid
even seeing the question.  Try it!

               ----------[ END OF NEWS ]---------


```
{% endraw %}

## SMARTTXT.DOC

{% raw %}
```
Documentation for SmartText for 17.3
by Doug Azzarito
19 November 1989

The following Smart Text codes have been added to RBBS-PC 17.3

BN  - Returns the BBS name as specified in CONFIG.
FS  - Returns the SYSOP FIRST NAME in Proper Case.
LS  - Returns the SYSOP LAST NAME in Proper Case.
ND  - Returns the NODE NUMBER of the current node (1-36)
TY  - Turns TRIM ON
TN  - Turns TRIM ON
VY  - Turns oVerlay ON
VN  - Turns oVerlay OFF

TRIM:
       This option controlls the trim of leading AND trailing
       spaces from Smart Text variables.  If Trim is NOT on, and you
       use the Smart Text "Is {CT far away?", RBBS-PC would return:
          Is Yourtown, State                far away?
       If TRIM was on, it would become: Is Yourtown, State far away?
       All NAME fields (SYSOP and USER) are ALWAYS trimmed.  Remember,
       if you turn TRIM ON, it will stay on until you either recylcle the
       node, or you send a TRIM OFF command.

OVERLAY:
       This option controls if Smart Text variables should OVERLAY the
       text, or be inserted into the text.  When designing ANSI screens,
       you will usually want Smart Text to OVERLAY.  This example illustrates:
       THE TIME IS {TM   (EST)             <- original text
       THE TIME IS 11:47   (EST)           <- overlay OFF
       THE TIME IS 11:47 (EST)             <- overlay ON

       When you leave enough space for the Smart Text substitution, you
       should turn overlay ON.  Remember, with TRIM ON, you may not be able
       to determine how much space to allocate.  Turn TRIM OFF when using
       OVERLAY to be sure.  As with TRIM, The status of OVERLAY is not
       reset until you do so.  The default setting for OVERLAY is OFF.

Examples of RBBS menus that use TRIM and OVERLAY are the files MENU2
and MENU2C.  An alternative set of graphical menus with "shading" and
a status line is included as MENU2C.CS, MENU3C.CS, and MENU4C.CS.  The
code and the alternative menus were contributed by Carl Slaughter.

Note:  overlay controls whether the trim and overlay variables are
blanked out (overlay) or removed from a line of text.  The line

123{TR45

would be "123   45" if overlay is on, and "12345" if overlay were off.

```
{% endraw %}

## SGR.TXT

{% raw %}
```
[0=3h[0;1;41;37m                DOS 2.XX Set Graphics Rendition (SGR) Parameters             [0;1m
                       [0;1;5;36m ═ [0;1;33m Usage: ESC[#;#;...;#m [0;1;5;36m ═[0;1;37m 
<0> = All Attributes Off (Normal White on Black) <1> = Bold On
<4> = Underscore On (IBM Mono Display Only)      <5> = Blink On
<7> = Reverse Video On                           <8> = Cancelled On (Invisible)
╔══════════════════════════════════════════════════════════════════════════╗
║ [0mBOLD  [40mBackground=<40> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m OFF   [41mBackground=<41> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m <0>   [42mBackground=<42> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m       [43mBackground=<43> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m       [44mBackground=<44> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m       [45mBackground=<45> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m       [46mBackground=<46> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║[0m       [47mBackground=<47> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0m [0;1m║
║ BOLD  [40mBackground=<40> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║ ON    [41mBackground=<41> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║ <1>   [42mBackground=<42> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║       [43mBackground=<43> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║       [44mBackground=<44> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║       [45mBackground=<45> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║       [46mBackground=<46> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
║       [47mBackground=<47> Foreground=[30m<30> [31m<31> [32m<32> [33m<33> [34m<34> [35m<35> [36m<36> [37m<37>[0;1m ║
╚══════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ZIP.DOC

{% raw %}
```
RBBS & ZIP
by Ken Goosens
24 May 1989

RBBS 17.3 supports any file library and compression technique just as
well as ARC, provided you have enough memory to support shelling.

If you want to set up RBBS to support ZIP, do the following:

(1)  set the default extension to ZIP in config.

(2)  where you say in config to look for command.com, put in
     TZIP.BAT.  Be sure to put PKUNZIP.EXE in the path as well.
     This will verify the integrity of uploads at the time of
     upload.   The file TARC.BAT is provided as well, to verify
     that ARCed uploads are fine too.  It assumes that you
     are using PKUNPAK.EXE.

(3)  RBBS will disallow an upload not having the default extension
     if a file exists with the same prefix and the default extension.
     This should eliminate duplicates.   E.g. SORT232.ARC would be
     rejected because we have a ZIP version if ZIP is default and
     there is a file called SORT232.ZIP.

(4)  You cause uploads with extension <u-ext> to be converted to
     default extension <d-ext> by including where command.com a
     file named C<u-ext><d-ext>.BAT, which RBBS will shell to.
     The upload will be converted immediately at the time of
     upload and will be added to the directory under the converted
     name and file size.

     Included in the utilities is are 3 BAT files for converting:

     CARCZIP.BAT - convert ARC to ZIP.  Put in drive/path of
        command.com specified in Config.   Change the 4th parameter
        to the drive/path where your uploads go.  Make sure
        PKUNPAK.EXE is in your search path.

     CPAKZIP.BAT - convert PAK to ZIP.  Same directions as
        for CARCZIP.BAT.  Make sure PAK.EXE is in your drive
        path.

     CALLZ.BAT - bat file other 2 invoke.  Makes work directory
        using node name off of upload directory, extracts files
        into it, zip's all files from there into your upload
        directory, deletes old file, deletes work directory.
        Uses KDY.EXE which deletes files and directory without
        requiring confirmation.  Resets errorlevel to 0 at
        end.

The bat files take under 100K.

The BAT files assume that you have a directory C:\RBBS that it
can use as a work area.   In CPAKZIP.BAT and CARCZIP.BAT you can
edit this to whatever you wish.

(5)  RBBS will work properly with Smith's ZIPTV.EXE, which supports
     viewing not only a list of the files in a ZIP, but viewing text
     files inside the zip as well.   The new VZIP.BAT distributed
     works with ZIPTV.


```
{% endraw %}

## PRODOOR.DOC

{% raw %}
```
Extract from ProDoor documentation  

Extended Protocol Configuration
-------------------------------

  Protocol Name

     This entry is the "name" for the protocol.  It is displayed in  the
     protocol menu, and before any transfer in the protocol.

  Menu Code

     This is the menu letter used to identify the protocol.

  Trans / Recv

     Enter a "T" here if the protocol "transmits" data to the user  (i.e.
     download protocols).  Enter a "R" if the protocol  "receives" data
     from the user (i.e. upload protocols).

  File Specs

     This entry controls the number of filespecs that are allowed  with
     the protocol.  There are a few special cases to consider:

         File specs          Meaning
             1       The protocol is "non batch".  A full filename is
                     passed to the driver program.

             0       The protocol is "automatic batch".  Use this  only
                     with batch "receive" protocols that get the
                     filenames from the caller's end of the transfer.

             2..9    These numbers allow the user to specify a  variable
                     number of "filespecs".  A filespec may  contain
                     wildcards, resulting in up to 100 files in a given
                     batch.   If the protocol must have  the filenames on
                     the command-line, a value of 2  or 3 is generally the
                     limit.  Protocols that  don't specify every name may
                     use values up to 9.   See the Command Line section
                     for more  information on this.

  Estimated Efficiency

     This entry is used to estimate how efficient a given protocol is  at
     sending or receiving data.  Legal values range from 0 to  0.99.  The
     value 0.0 is a special case.  When you specify 0.0,  the door will
     allow any size transfer to START, but will hang up  on the caller
     when his time runs out.  Use this for "Zmodem  Resume", or other
     protocols where you cannot predict how long it  will take to finish a
     transfer.

  Command Line

     This entry is the "command line" used to call up the protocol
     driver.  It must be entered exactly as if you were calling up  the
     driver from a DOS prompt.   There are a few special cases on  the
     command line:

            Entry               Meaning

             $B$     This is replaced with the caller's connect  speed, or
                     baud rate.
  
             $N$     This is replaced with the COM port number in  use.
  
             $@$     This is replaced with '@c:\pcb\$door.nam', which
                     refers to a file that will list the names of the
                     individual files to be transmitted.  This  feature is
                     only valid for DSZ versions 880423 or  later.  Use
                     this to allow more than 3 filespecs  per transfer.
  
             *.*     This causes ProDoor to copy all of the selected
                     files into the "playpen" directory prior to  starting
                     the transfer.  The door then instructs  the protocol
                     driver to send "all" files from the  playpen.  Use
                     this to allow more than 3  filespecs on any
                     batch-compatible protocol.   Because of all the disk
                     activity involved in  copying the files, I recommend
                     you use this  option only if you have a RAM DISK for
                     your  playpen.
  
```
{% endraw %}

## PROTO.DOC

{% raw %}
```
Extract from RBBS-PC v17.1A  Documentation Dealing with External Protocols

21.  RBBS-PC's STANDARD INTERFACE FOR PROTOCOL DRIVERS
------------------------------------------------------

Before calling "external" protocol drivers, RBBS-PC will do the following:

    1. verify that the file exists if the file is to be downloaded.
    2. for uploads, verify that the file name requested is  valid.
    3. pass  the  communications  port  to  the  vendor's  protocol-
       handling routine with the file opened and carrier detect on.

RBBS-PC  will  call  the  external protocol drivers either  via  the  SHELL
command in BASIC or via a .BAT file.

21.1  Parameters passed to a protocol driver.
----------------------------------------------
RBBS-PC detects the installation of external file transfer protocols via an
optional  RBBS-PC system file whose default name is PROTO.DEF.  If no  such
file  exists,  all and only internal protocols will  be  available -- Ascii,
Xmodem, XmodemCRC, Ymodem.  This file may be used to rename or delete  some
or all of RBBS-PC's internal protocols.  If a PROTO.DEF file exists, all of
RBBS-PC's  internal  protocols must be specified in it as  well.   Internal
protocols are NOT automatically included when a PROTO.DEF file exists!

The  protocol definition file has thirteen (13) parameters passed for  each
external  protocols  defined  for  RBBS-PC.  Each parameter  can  be  on  a
separate  line  of  its own or all parameters can be on  a  single  line  (
separated  by commas).  The parameters passed for each  protocol  specified
are:

          Parameter       Description
          1      Protocol Name
          2      Security Level required to use protocol
          3      Method to invoke protocol
          4      Whether 8 bit connection required
          5      Whether "reliable" connection required
          6      Whether "batch" mode supported
          7      Number of bytes in a block transferred
          8      Indicate transfer always successful
          9      Factor to estimate file transfer time
         10      RBBS-PC "macro" to invoke before protocol
         11      Method for checking transfer's success
         12      Template to use for downloading
         13      Template to use for uploading

* 1      Protocol Name
Protocol  Name   --  The FIRST CHARACTER is the letter by  which  a  caller
    selects  the  protocol.     The prompt for the  selection  of  protocol
    includes  the  protocol  name.   It  is  recommended  that  the  second
    character  be ")" to resemble the rest of the prompts in RBBS-PC,  e.g.
    "Z)modem".  RBBS-PC defaults to putting each protocol on the same line,
    separated  by  a comma, until the line gets too long.  Each  SYSOP  can
    control  the  placement of the line by putting a carriage  return  line
    feed  at  the end of the protocol name.  If this is  done,  the  entire
    protocol  name  must be in parentheses.  For example,  instead  of  the
    prompt

A)scii,X)modem,C)rcXmodem,Y)modem,N)one

a SYSOP may want the prompt to be

A)scii (text files only)
X)modem checksum
C)rc Xmodem
Y)modem (1K Xmodem)
N - None (cancel)

    Then  the protocol definition file , PROTO.DEF, should  be  constructed
    using  quotes  (to include the carriage return/line feed in  the  first
    parameter) as follows:

"A)scii (text files only)
",...
"X)modem checksum
",...
"C)rc Xmodem
",...
"Y)modem (1K Xmodem)
",...
"N - None (cancel)
",...

    with the remaining 12 parameters put where "..." occurs.

* 2      Security Level required to use protocol
Security  Level  --  This is the minimum security to be  able  to  use  the
    protocol being described.

* 3      Method to invoke protocol
Method  to  Invoke Protocol -- A protocol can be invoked by  one  of  three
    methods:
             shell,
             door, or
             internal (S, D, or I).
    If  "I"  is  specified, it must be immediately  followed  by  a  letter
    specifying  what internal protocol to use, where the choices are A,  X,
    C, Y, or N respectively for Ascii, Xmodem, Xmodem CRC, Ymodem, or  None
    (cancel  transfer).  "IC" would mean to use RBBS-PC's  internal  Xmodem
    CRC.   If no protocol is specified equivalent to the  internal  "None",
    RBBS-PC will add it.  If the letter N is used for a transfer  protocol,
    another protocol must be specified that is equivalent to "None".

* 4      Whether 8 bit connection required
Whether to Require 8 Bit -- By putting "8" in this parameter, the SYSOP  is
    specifying that the protocol requires the caller to be able to send  or
    receive 8 data bits.  If 8 data bits is required and the caller is  not
    at 8 bit, RBBS-PC will prompt the caller to change to 8 bit in order to
    use the protocol.

* 5      Whether "reliable" connection required
Whether  A  Reliable  Connections Is Required -- By  putting  "R"  in  this
    parameter, the SYSOP is specifying that the protocol will not be  shown
    or  made  available to the caller unless the  connections  is  reliable
    (i.e. such as Microcom's MNP protocol that is built into many modems).

* 6      Whether "batch" mode supported
Whether  Support  Batch -- By putting "B" in this parameter, the  SYSOP  is
    indicating  that "batch" file transfers are allowed with the  protocol.
    "Batch" means a multi-file download request will be processed together.
    The  receive function in Qmodem's "batch" Ymodem attempts to write  the
    file  being  received to the same letter drive and path name as  it  is
    stored  on the sending PC.  Because it is unlikely that the PC  running
    RBBS-PC will have the same disk letters and path names as the  callers,
    it  is  recommended  that  QMODEM's "batch"  Ymodem  not  be  used  for
    receiving files via "batch" Ymodem (use DSZ's instead).  RBBS-PC enters
    an external protocol only once to do multiple file downloads.   RBBS-PC
    has been tested with such "batch" protocols as Zmodem's DSZ,  Megalink,
    and Sealink.

* 7      Number of bytes in a block transferred
Blocksize  --  This parameter indicates the number of bytes in  each  block
    transferred.   This  is only used to inform the caller  the  number  of
    blocks  to  expect when downloading.  A zero in  this  parameters  will
    cause RBBS-PC to report only the number of bytes to expect.  For Xmodem
    or  XmodemCRC this value would be 128.  For Ymodem this value would  be
    1024.

* 8      Indicate transfer always successful
Indicate Transfers Always Successful -- If there is no way for the protocol
    to  inform  RBBS-PC  if a transfer was successful, put a  "F"  in  this
    parameter.   This  means  that  all  transfers  will  be  regarded   as
    successful.

    Zmodem (DSZ) used in a multi-tasking DOS environment (i.e. where  there
    can only be a single environment) and CLINK are examples of a protocols
    that require this to be set.

* 9      Factor to estimate file transfer time
Factor to Estimate File Transfer Time -- This is the decimal number used by
    RBBS-PC to estimate the elapse time to download a file. The higher  the
    number,  the  faster  the protocol and the  lower  the  time  estimate.
    Standard equivalents in RBBS-PC are:

     Ascii .........  0.92
     Xmodem ........  0.78
     XmodemCRC .....  0.78
     Kermit ........  0.78
     Ymodem ........  0.87
     Imodem ........  0.90
     YmodemG .......  0.95
     Windowed xmodem  0.78

    If no value is specified, a default of 0.87 will be used.

* 10      RBBS-PC "macro" to invoke before protocol
RBBS-PC  "Macro" to Invoke Before Protocol -- This is the  RBBS-PC  "macro"
    (i.e. a series of standard RBBS-PC commands) to invoke before  invoking
    the protocol.  It can be used to display special messages, to delay the
    start  of the protocol, or to prompt for special information passed  to
    the protocol.

* 11      Method for checking transfer's success
Method  for  Checking  Transfer's  Success -- This  is  required  only  for
    external protocols.  This parameter indicates how RBBS-PC is to  detect
    a file transfer's failure.  The format is "x=y=z" where:

           x is which parameter tells whether the transfer was successful,
           y is the string which indicates failure, and
           z is an optional parameter telling RBBS-PC whether to write out
             information needed when DOORing to a protocol in advance of
             the file exchange.

    For  QMXFER.EXE from John Friel and the Forbin Project, this  would  be
    "4=F"  - meaning the 4th parameter indicates failure if it begins  with
    "F".

    For  Zmodem  as  implemented in DSZ from  Omen  Technologies,  the
    proper  choice  depends on whether SHELLing or  DOORing  is  used.
    For  SHELLing, put in "1=E"  to indicate that the first  parameter
    uses  "E" to indicate an error has occurred.  For DOORing, put  in
    "4=E=A"  to indicate that the fourth parameter uses "E"  an  error
    has  occured.   The "=A" means that RBBS-PC is to  do  an  advance
    write  of  the filename and protocol used.  DSZ then  appends  its
    error  report to the log file.   To the file "XFER-" plus  node  #
    plus   ".DEF"   RBBS-PC   will  write  out   a   line   containing
    "<filename>,,<protocol letter>".  Omitting an "=" causes a default
    to  "4=F".  The file checked is "XFER-" plus the node number  plus
    the extension "DEF".   On node 1 the file checked is "XFER-1.DEF".

* 12      Template to use for downloading
Template  to  Use  for Downloading -- This is required  only  for  external
    protocols.   It  tells  RBBS-PC  how to invoke  a  download.   See  the
    following section on discussion of "templates".

* 13      Template to use for uploading
Template  to  Use  for  Uploading -- This is  required  only  for  external
    protocols.  It tells RBBS-PC how to invoke an upload.

21.2  Calling external protocols using "templates"
--------------------------------------------------
A "template" is used to inform RBBS-PC how to invoke an external  protocol.
The  first  word  of the template must be the  file  name  (including  file
extension) of the program to invoke.  RBBS-PC will check to make sure  that
the file exists.  If the file does not exits, the protocol will not be made
available  to  the caller.  If the file does exists, the protocol  will  be
shown to the caller.

RBBS-PC will dynamically substitute values for pre-defined strings inside a
"template".   Each  supported string is enclosed in square  brackets.   The
strings supported include:

[n]       where  n is a positive integer.  Substitutes value in  the  array
          A$,  which can best be viewed as a work array.  Macros can  store
          prompted values in specific elements in the array.

[FILE].   Name of the file (FILE.NAME$) to be transferred.

[BAUD].   Baud rate.  Speed at which the caller dialed RBBS-PC.

[PARITY]. Parity used by the caller.

[PORT].   DOS  device name for the communications port to be used  for  the
          file transfer (COM1,COM2, etc.).

[PORT#]   Number  of  the  communications  port to be  used  for  the  file
          transfer (1,2,3, etc.).

[NODE].   Number  of  the RBBS-PC node invoking the file  transfer  (1,2,3,
          etc.).

[PROTO].  Letter of the protocol for the file transfer.

Everything else in a template will be passed intact.  If the external  file
transfer is to be invoked via a SHELL, it is recommended that the  external
file  transfer  program  be  SHELLed to directly.   If  the  external  file
transfer is to be invoked via a DOOR, it can be either

     1.)  DOORed to directly using the same template as for SHELLing, or

     2.)  DOORed to indirectly via a .BAT file with the command  parameters
          passed to it by RBBS-PC.  For example, a "door" for QMXFER  might
          have a download template of:

          "RBBSQM.BAT [FILE] [PORT] [BAUD] [PROTO]"

          and the file RBBSQM.BAT have the following in it:

          C:QMXFER.COM -s -f %1 -l %2 -c -b %3 -p %4

          DOS substitutes the passed parameters for the variables beginning
          with  the percent sign.  .BAT files are needed in doors if  there
          are  additional programs to run before or after the  actual  file
          transfer.

The  following  examples should provide some help in understanding  how  to
invoke external protocols:

Example #1:

Z)ippy,5,S,8,,,,,0.98,,,"c:\proto\zippy -s [FILE]","c:\proto\zippy -r [FILE]"

Can be interpreted to be:
     used "Z" as invoking letter,
     put "Z)ippy" in the prompt,
     the minimum security to use this protocol is 5,
     the protocol will be invoked via a SHELL command,
     an 8-bit connection is required,
     estimate the download time as 0.98 times as fast as normal,
     use normal RBBS-PC type of report to check for a successful transfer,
     invoke the protocol for downloads using the following string:
          "c:\proto\zippy -s [FILE]"
     and invoke the protocol for uploads using the following string:
          "c:\proto\zmodem -r [FILE]"
     where the file name is substituted for "[FILE]" in either case.

Example #2:

X)modem,5,IX,8,,,128,,0.8,,,,

Can be interpreted to be:
     used "X" as invoking letter,
     put "X)modem" in the prompt,
     the minimum security to use this protocol is 5,
     the protocol is an internal RBBS-PC protocol,
     an 8-bit connection is required, and
     estimate the download time as 0.8 times as fast as normal.

21.3  Parameters Returned by a Protocol Driver
----------------------------------------------
All  protocol  drivers are expected to return information  about  the  file
transfer in a file named XFER-xx.DEF where the value for xx is the node  ID
(1 to 36).  If the protocol cannot accommodate this minimal requirement, it
can still be used by telling RBBS-PC to indicate file transfers are  always
successful -- section 21.1, parameter 9.

The  one  item  of  information RBBS-PC requires to  be  returned  from  an
external protocol drive is whether or not the file transfer was successful.
The failure indicator MUST BE:

   a.)  the first character of
   b.)  any parameter

in the file XFER-xx.DEF.  To show that file transfer failures are indicated
by  the  first  parameter  and the letter  "E"  in  the  file  XFER-xx.DEF,
parameter 11 (as described in section 21.1) would be written as "1=E".   To
show that file transfer failures are indicated by the fourth parameter  and
the  letter  "F",  parameter 11 (as described in  section  21.1)  would  be
written as "4=F".

No  other information is required when SHELLing to external  file  transfer
protocols.   However, when DOORing to external file transfer protocols  the
log file for the transfer MUST HAVE the file name as the first parameter.

Protocol drivers that do not have the file name as the first parameter  can
still be used by telling RBBS-PC to write out three parameters (file  name,
an  empty parameter, and the letter of the file transfer  protocol)  before
invoking  the external file protocol.  This is done by using  parameter  11
(as described in section 21.1).  As an example, to DOOR to an external file
transfer  protocol  that  indicates a file transfer failure  by  using  the
letter "F" in the fourth parameter, but which does not return the file name
used,  parameter  11  (as described in section 21.1) would  be  written  as
"4=F=A".   The external protocol would then append its own  information  to
the log file.

21.4  The Protocol Drivers Tested With RBBS-PC
----------------------------------------------
RBBS-PC has been tested with the following protocol drivers:

CLINK -- From System Enhancement Associates.  Supports batch file transfers
    but requires that transfers always be assumed successful.

DSZ -- From Omen Technologies.  Supports Ymodem, Ymodem Batch, YmodemG, and
    Zmodem.   YmodemG  requires  a "reliable"  connection.   DSZ  logs  the
    results  of the file transfers to a file specified in  the  environment
    variable DSZLOG.  Therefore, the AUTOEXEC.BAT file for an RBBS-PC  that
    uses DSZ should specify

     "SET DSZLOG=XFER-x.DEF"

    where  x  is the node number.   DSZ seems unable to create a  log  file
    whenever a drive or path is specified.  If invoking ZMODEM via the DOOR
    mechanism,  use the "=A" option at the end of the success method  check
    so that RBBS-PC will append the information to the DSZ log it needs and
    DSZ  will then append the success report.  In a multi-user  environment
    where  a  different  environment  variable for each  node  can  not  be
    specified  (i.e. all nodes must share the same DSZ log  file),  specify
    that  a all transfers are always successful for protocols  handled  via
    DSZ.   See the discussion of parameter 11 in section 21.1  for  further
    considerations when using DSZ.

MLINK -- MEGALINK protocol supports batch file transfers but requires  that
    transfers always be assumed successful.

PC-KERMIT  --  from Columbia University.  PCKERMIT.EXE is supplied  by  The
    Source  as  a  public service and consists  of  sliding  window  KERMIT
    protocol. The development of "windowing" within the KERMIT architecture
    (i.e.  Super KERMIT) was funded by The Source and implemented by  Larry
    Jordan and Jan van der Eijk.

    Columbia  University  holds  the copyright  and  maintains  the  Kermit
    protocol. Like RBBS-PC, Columbia University allows KERMIT to be  passed
    along  to others and "ask only that profit not be your goal, credit  be
    given where it is due, and that new material be sent back to us so that
    we   can  maintain  a  definitive  and  comprehensive  set  of   KERMIT
    implementations".

    PCKERMIT.EXE  is  not  a terminal program.  It  simply  implements  the
    Kermit protocol, including the sliding window extension.  It will  work
    with  older  "Kermit Classic" implementations as  well,  via  automatic
    negotiation  between the two Kermit programs.  PCKERMIT.EXE runs  as  a
    "one-shot"  execution  then  returns to  RBBS-PC.   PCKERMIT  does  not
    establish   a  carrier  with  a  remote  system.   The  connection   is
    established  by  RBBS-PC.   File  transfers  must  always  be   assumed
    successful.

QMXFER  --  is  supplied  by The Forbin Project as  a  public  service  and
    supports   five  different  protocols  --  XMODEM  (checksum),   XMODEM
    (cyclical  redundancy check), YMODEM, YMODEMG, and IMODEM.  QMXFER  was
    implemented by John Friel III, author of QMODEM. YMODEM and YMODEMG are
    protocols designed by Chuck Frosberg.  IMODEM is a protocol designed by
    John  Friel.  The later two are designed to work when the link  between
    the two modems is "error free" (i.e. both modems have the MNP  protocol
    built  in)>  QMXFER.COM runs as a "one-shot" execution then returns  to
    RBBS-PC.   QMXFER  does not establish a carrier with a  remote  system.
    The  connection is established by RBBS-PC.  File transfer failures  are
    indicated by an "F" in the fourth parameter of the log file returned to
    RBBS-PC.

WXMODEM  --  is  supplied by The Forbin Project as  a  public  service  and
    supports the window XMODEM protocol designed by Pete Boswell.  Like all
    of  RBBS-PC's  protocol  drivers,  WXMODEM.COM  runs  as  a  "one-shot"
    execution  then  returns  to RBBS-PC.  WXMODEM  does  not  establish  a
    carrier  with a remote system.  The connection is established by  RBBS-
    PC.   File  transfer  failures are indicated by an "F"  in  the  fourth
    parameter of the log file returned to RBBS-PC.

```
{% endraw %}

## PRODUCTS.TXT

{% raw %}
```
Crater Rim Products - Updated 2/21/1989

Crater Rim Software   4028 41st Ave South   Seattle, WA. 98118 USA

Phone: 206 723-6728 voice 10am to 8pm Pacific Time
       206 725-9233 data  Underdog's MiniNet Super System 1200/2400/9600
                          MiniNet Headquarters - 24 hours - 600 megs OnLine

      --------------------------------------------------------------------
    ------------------------------------------------------------------------
  ----------------------------------------------------------------------------
  K9X - Full Professional Communications Package
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  K9X Features:

    *  Combined VT100 and ANSI BBS Terminal Emulation Including full ANSI and 
       VT100  Cursor  Positioning,   Color  and  Music  Support  utilizing  a 
       combination of internal ANSI processing and the DOS ANSI.SYS or 
       equivilant 
 
    *  Ring buffered, interrupt driven, serial I/O.

    *  Up to 45 file transfer methods

       Single file transfer protocols

         Xmodem Checksum                   (via K9X or internal SuperK)
         Xmodem CRC                        (via K9X or internal SuperK)
         Ymodem (1K Xmodem) CRC            (via K9X or internal SuperK)
         WXmodem (Windowed Xmodem) CRC     (via built in SuperK protocol)
         Underdog's ***FAST*** K9Xmodem    (via built in SuperK protocol)
         Underdog's ***FASTER*** Super8K   (via built in SuperK protocol)
         Underdog's MNP Super8K-G          (via built in SuperK protocol)
         Jmodem                            (via special Jmodem module)
         Lynx                              (via Lynx external module)
         Qmxfer Ymodem-G for RBBS systems  (via QMXFER or DSZ)
         Qmxfer Imodem for RBBS systems    (via QMXFER)
         Zmodem Single file mode           (via DSZ external module)
         PC-Kermit (Standard and Sliding Window via external module)
         Ascii with XON/XOFF

       Batch mode file transfer protocols

         Modem7 (Batch) Checksum
         Modem7 (Batch) CRC
         Telink CRC
         PC-Kermit (Standard and Sliding Window via external module)
         Xmodem Checksum                   (via built in SuperK protocol)
         Xmodem CRC                        (via built in SuperK protocol)
         Ymodem (1K Xmodem) CRC            (via built in SuperK protocol)
         WXmodem (Windowed Xmodem) CRC     (via built in SuperK protocol)
         Underdog's ***FAST*** K9Xmodem    (via built in SuperK protocol)
         Underdog's ***FASTER*** Super8K   (via built in SuperK protocol)
         Underdog's MNP Super8K-G          (via built in SuperK protocol)
         Jmodem                            (via built in SuperK protocol)
         Lynx                              (via Lynx external module)
         DSZ True Ymodem batch             (via DSZ external module)
         DSZ Ymodem-G                      (via DSZ external module)
         Zmodem                            (via DSZ external module)
         CIS/B                             (via CIS external module)
         BiModem                           (via BIMODEM external module)

       Plus up to 9 user configureable external protocols

       Plus pre-programmed keys for  Quick Download using any of the
       supported protocols

       Plus Totally Automated Downloading using special macro codes

    *  Full Function telephone dialing directory which permits list,
       manual,  name,  entry  #  dialing along with FULL edit capabilities 
       including parity, data and stop bits,  individual macro linking, 
       last  date/time  number  was  called, default protocol.

       Up to 9500 entries - user configurable, with full expansion/compression
       support

    *  Built-in PKZip File Verbose Listing

    *  User configurable Status Line on Line 26 - leaving a full 25 line 
       display for incoming text

    *  User configurable menu and text colors, modem setup and buffer sizes

    *  User configurable overwrite of duplicate files during download

    *  User configurable save aborted downloads

    *  Up to 32K memory buffer for FAST files transfers

    *  Pre-programmed command key for ASCII auto uploading of
       PreFabricated Messages

    *  Pre-programmed command key for linking to external CIS/B terminal
       emulator with CIS/B transfer protocol

    *  Pre-programmed command key for linking to external IXEC PC-Pursuit
       Interface

    *  User-configureable baud rate locking for high speed modem connects

    *  Special dialing directory prefixes for specifying special pre-dial
       commands and settings to high speed modems.

    *  Macro script language for automated logon supporting

         universal "look for/send"

         special "what if" look for/send

         auto link to CIS/B external module

         auto link to ICEX External PC-Pursuit Interface

         ability to specify multiple execution of macro lines

         ability to use/send special control characters for
            carriage return, delay, etc.

         ability to load pre-fabricated filelists for automated
            download processing

    *  Pre-programmed command key to disable universal macro "look for/send"

    *  Pre-programmed command key to disable logon macro

    *  Session logging/capture to printer and/or disk.
    
    *  Full Novice Command Gateway Menu System or Expert Alt-Key command set
       support

    *  Menu-driven commands

    *  Full display of all K9X flag settings

    *  Macro-key definition for constructing and holding  often-used  text 
       sequences.  

    *  Full Access DOS Shell without loss of carrier

    *  Default DOS Shell Command link to another application

    *  Full file finding capabilites

    *  Full file and directory display with transfer times

    *  Screen dumps to a file or printer

    *  Customizable modem support at 300/1200/2400/4800/9600/19200 bps for
       COMM 1 thru COMM 4

    *  Automatic change of baud rate with smart modems.

    *  User configureable baud locking for high speed modems

    *  Dialing session and total session elapsed time counters.

    *  Call Log including number dialed, session start, session end, elapsed
       session time, total long distance elapsed times, total downloads - both
       files and total bytes

    *  Upto 800 line internal capture buffer which may be viewed at any time.

    *  Define up to 20 dialing directory entries for  queue  dialing  upon
       startup with optional automatic session logging.  

    *  Linking with K9XEVENT for automated execution at specified times

    *  Cut and Paste feature to save selected text to file

    *  Mark and Save upto 24 filenames for automatic downloading with full
       editing, addition, deletetion, loading of pre-fabricated lists, saving
       of marked filenames to file

    *  Mark and Save upto 24 filenames for automatic uploading with full
       editing, addition, deletetion, loading of pre-fabricated lists, saving
       of marked filenames to file

    *  User defined default download path

    *  User defined default upload path

    *  Automatic upload file finding using internal system drive configuraion
       table which accepts upto 99 fully configureable drive:\paths

    *  User defined Multitasking Hook for Time Slicing while operating in a
       multitasking environment under TaskView, DesqView or TopView
       multitasking/windowing systems.

       The multitasking time slicing feature allows you to run K9X within a
       partition with a minimum of system slowdown.  K9X monitors  both the
       the comm port and local keyboard for input.  If no input is present,
       K9X will relinquish the remainder of the cpu time slice back to  the
       the multitasker. Note that this feature is only active during normal
       user  and/or  local keyboard input.  It is  NOT  active during files
       transfers.

    *  Built in BBS type message and/or Macro editor

    *  Compartmentalized setup to eliminate K9X directory clutter

    *  Hot-Key dumb terminal mode for use with BBS type doors requiring
       the use of function/cursor keys

    *  Memory requirements: a minimum of approximately 192K


  Fetch - the Dog's FileFetcher
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Fetch features:
   - Full ARC facilities - Create, Unpack,  Test,  Type,  List in LIVING 
     COLOR (or black and white) using your favorite ARCing utilities 

   - NEW FEATURE -  Side by Side  ARC List Comparison of two ARCfiles

   - Full System Backup/Restore support using user defined Utilities

   - ASCII Text File Viewer

   - Default  DOS  Command Shell to startup your favorite Text Editor or 
     other program 

   - Auxilliary DOS Command Shell to drop to DOS

   - Completely User Definable - Paths, Colors,  ARC utilities/commands, 
     etc. 

   - Stores  up to 80 drive\directory names so you NEVER have to type in 
     another path name! 

   - Two user definable search methods for SUPER FAST File Fetching

   - File Delete, File Rename and Copy features

   - Disk Drive Free Space for any drive on your system

   - Full drive\path support

   - Duplicate file  name  checking  when  renaming  files  (checks  all 
     defined   drives\directories   for   duplicate  file  names  before 
     renaming) 

   - Full Color or b&w directory displays including file transfer  times 
     at 1200 and/or 2400 and/or 9600bps 

   - Transfer times display on ALL  OR  just .ARC files - User definable

   - FULL wildcard support when entering search criteria

   - DOS  Command  line  parameter  support AND in-program prompting and 
     recycling 

   - Easy to use single key menu system for Utilities Use and setting up 
     Default Configuration 

   - User definable fast screen writes or standard display updates

   - FULL  DOS  environment  and path support facilitates usage from any 
     drive 



  PopEdit - Custom PopUp Help Screens                Price: $25.00
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  PopEdit features:
   - Create your own Memory Resident PopUp Screens

   - User Defined colors, border types, etc.

   - Two sizes with different 'trigger' keys

   - Mix and match DOS stackable so that they can be loaded and 'paged'

   - ReLoad/ReEdit existing PopUps using built in  FULL SCREEN Editor



  Dog - Files Cataloger                              Free to MiniNet users
  ~~~~~~~~~~~~~~~~~~~~~
  Dog Day-ta Base features:

   - Full Description, Security or Filename searches

   - Random Access Search and Retrieval System

   - Backward and Forward Chronological Read of Listings

   - FAST Binary Search Algorythm

   - Main Data Base Entries Sorted Alphabetically, by date, category and 
     subcategory 

   - Alphabetically sorted Filename Index file

   - Numerically sorted Category Index file

   - FAST Sort Routines for Main Data Base and Both Index Files

   - Full Edit, Install, Delete Capabilities

   - Interaction with both K9X and MiniNet

   - Monthly MiniNet Main Data Base Update capabilities

   - User Definable File Paths

   - B&W or Color

  Check `em out!!!  Download the Dog's Winning Team and give `em a try!!!


                              ORDERING INFORMATION

    Registration of K9X entitles you to:

       Use the product on a regular  basis. 
       1 year K9X priority support on Underdog's MiniNet BBS. 
       licensed use of all upgrades of K9X. 
 
    ShareWare Evaluation Disk Package
    ---------------------------------
       In  addition,  a  ShareWare  evaluation package containing the latest 
       ShareWare version of K9X is available at any time for $10.  This does 
       not include  registration.  The  fee  covers  diskette,  postage  and 
       handling.

    Registration Only
    -----------------
       For $39 dollars,  you may register the copy of K9X you already  have. 

    Registration and Disk Package
    -----------------------------
       For $49 dollars we offer a combination registration/diskette package. 
       The  diskette  includes  the  latest  Registered   version   of   the 
       communications program (K9X),  complete documentation and 1 full year 
       of K9X product support on the Underdog's MiniNet  BBS  Seattle  Node.  
       Your  first registered package and any subsequent upgrades are always 
       available for immediate download  from  the  Underdog's  MiniNet  BBS 
       Seattle Node. 

    Please  use  the enclosed order form or the enclosed Mailer when placing 
    an order.  

    ORDERS  OUTSIDE  THE  US:  Please  send  checks  drawn on US banks in US 
    dollars.  We cannot accept non-US currency.  


                 Corporate, Single Copy and Quantity Purchases

    For single unit orders, use the enclosed order form.  Crater Rim Sofware 
    will accept purchase orders in amounts over $100 only.  All other orders 
    must be prepaid.  

    Crater Rim Software offers quantity discounts and  site  licenses.  Full 
    quotes are available upon request. 

    Orders  in  quantities  of  less  than  75  units  are  handled  as bulk 
    purchases.   Crater  Rim  Software   can   provide   you   with   either 
    registration/disk  combo.  Purchases  of over 75 units may be handled as 
    quantity purchases  or  as  corporate  licensing  agreements.  Licensing 
    agreements  allow  duplication  and  distribution of specific numbers of 
    copies within the licensed institution.  Duplication of multiple  copies 
    is  not  allowed  except through execution of a licensing agreement (See 
    Site Licensing below). 

    ALL  PRICES  AND  DISCOUNTS  ARE  SUBJECT  TO  CHANGE  WITHOUT   NOTICE.  
    Discounts  are  not  cumulative.  They  apply  to  single orders of like 
    products only.  

    WARNING: YOU MAY NOT USE EITHER  VERSION  OF  K9X  ON  A  REGULAR  BASIS 
             WITHOUT A PRIOR PURCHASE OR LICENSE ARRANGEMENT. 




  Remit to:        Sal Manaro  dba  Crater Rim Softare            Order Form
               4028 41st Ave South   Seattle, Wa 98118 USA

  Please send the ShareWare Evaluation version SW80:
  -------------------------------------------------
    ____ K9X Disk (current ShareWare version) ...... @ $ 10.00 ea  $ _______

  I would like to register the copy I already have
  ------------------------------------------------
    ____ K9X Registration(s) Only .................. @ $ 39.00 ea  $ _______

  Please register and send version 8.00:
  -------------------------------------
    ____ K9X Registration(s) and Disk Combination .. @ $ 49.00 ea  $ _______

  I am a registered K9X User. Please send the latest
    
       K9X UTILITY Package:
       --------------------------------
       ____ K9XUTILS ............................... @ $ 10.00 ea  $ _______

 

    PO, Rush and COD orders add $5.00 ...........................  $ _______

                                                         Subtotal    _______

          (Washington residents please add  8%  sales tax)    Tax    _______

                                                             Total $ _______

    Payment by:   ( ) Check   ( ) Money Order   ( ) PO # ________________


       Name: ____________________________________________________________

    Company: ____________________________________________________________

    Address: ____________________________________________________________

           : ____________________________________________________________

           : ____________________________________________________________

    Day Phone: (______)_________________ Eve: (______)___________________

    ORDERS OUTSIDE THE US: Use check or money order drawn on US bank in US
    dollars.




   Updated September 01,1988
   ----------------------------------------------------------------------
                    A T T E N T I O N     A L L     U S E R S

   Underdog's  MiniNet(tm) and Crater Rim Software are proud to announce 
   that a limited number of MiniNet Franchises are available  for  those 
   individuals  and/or  businesses who are interested in becoming a part 
   of the MiniNet(tm) BBS concept. The Telecommunications Revolution! 

   Here's the perfect opportunity for:
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     *  Businesses to spotlight their product line in addition to adding
        online customer support.

     *  Individuals to get in on the  'ground floor'  in a business they
        can operate from their home.

   The franchise package offers/includes:
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     *  Complete MiniNet (tm) BBS software and support files

     *  UNLIMITED FREE MiniNet(tm) BBS software and support file updates

     *  Franchise agreement allows you to operate up to 26 nodes

     *  MultiTasking Software to facilitate MultiNode operation

     *  FULL SysOp setup and operational support

     *  400 megabytes (minimum) of PD/Shareware software

     *  Ongoing User Access PD/Shareware files updates/availability

     *  Substantial group purchase discounts on your hardware needs

     *  Additional built in profit sharing incentives

     *  Plus many other attractive features

   Interested parties...  I will be happy to discuss this  venture  with 
   you  in  detail  via  your  voice line.  Please leave me a message or 
   comment with your voice line number,  a time that you may be  reached 
   and  request  that  the  MiniNet(tm) Franchise File be put online for 
   download.  I will be happy to make it available to  you  and  discuss 
   this exciting business venture with you in detail. 

                ******  Serious Inquiries Only.  PLEASE!  ******
  ----------------------------------------------------------------------------
  ----------------------------------------------------------------------------
  MiniNet BBS Software
  ~~~~~~~~~~~~~~~~~~~~
   Be advised that the Franchise is a separate package (from the MiniNet 
   software) and is quite expensive as it includes ongoing support, full 
   MiniNet(s)  access,  unlimited  free  MiniNet  software/support files 
   updates,  a full image copy (600+ megs/1200 diskettes,  all  0  bytes 
   free  and all ARC'ed) of this system's files data base,  and a number 
   of  other  desireable  features.

   The MiniNet Software package by itself,  includes the  software,  all 
   Sysop utilities, display screens and support files (152 in all)   and
   24 hour a day online support in setup,  maintenance and operation via
   Underdog's MiniNet Headquarters Seattle, Wa.
 
   At  one  time,  MiniNet  was  fully comapatible to Fido NetMail but I 
   decided to break that connection after experiencing several  attempts 
   to  crash  the  system via NetMail.  There is a DOS Access built into 
   MiniNet...  and,  it is possible to bring up a copy  of  Fido  to  do 
   FidoNet in the alloted mail time slot..  on the same token, you could 
   configure RBBS Doorware and PCBoard Doorware to operate via  the  DOS 
   Access.  In  most  cases,  all  that  is  required is the RBBS and/or 
   PCBoard configuration files. 
 
   As I prefer to release customized versions of  MiniNet,  I  would  be 
   open  to  making  (minor)  modifications to the software to suit your 
   needs...  there are several desireable features to MiniNet that  make 
   it  worth  consideration...  Here  are only a few of the many MiniNet 
   features: 
 
   It only requires 150K to run including the DOS shell for the external 
   transfer protocols!  This allows you full access to your system  (via 
   TaskView  multitasker)  to run personal applications while the system 
   operates in the background! 
 
   Built in file locking  so  that  you  can  operate  multiple  MiniNet 
   systems under TaskView multitasker (and still have enough memory left 
   over for your personal system access!) 
 
   Extensive user security/access/accounting processes with  full  SysOp 
   intervention while user is online. 
 
   Separate  conference  areas  each  with  a separate,  private,  files 
   section (capable of 6 files sub-sections within that one section). 
 
   TOTAL System Security with extensive user monitoring  via  log  files 
   and  automatic  daily  statistics  tabulations  made at Midnight each 
   night. 
 
   24 hour DogNet Mail capabilities handled from  within  the  main  BBS 
   system (no front-end processor or Net Mail time slot required). 
 
   4  different  menu/display  modes with FULL MutilColor support at ALL 
   system prompts and displays using ANSI control "goto"  statements  to 
   speed up displays. 
 
   14 files transfer protocols - all of which are accessed from the main 
   BBS code (do not require the use of a protocol DOOR). 
 
   Automatic  Multi-File  transfer  capabilities - by keyboard input for 
   non K9X users and K9X.LST input for K9X users. 
 
   Command ganging of 7 or more commands at one system prompt  supplying 
   total efficiency for experienced users. 
 
   Sophisticated  FULL  function files data base (not simple text files) 
   that facilitates super fast searches and retievals.  With  1,000,000+ 
   entry capacity. 
 
   Sophisticated FULL function User Record Data Base that maintains both 
   ACTIVE and INACTIVE user indeces for super fast user ID retrieval and 
   unlimited User data base size. 
 
   Built  in  ARC  list member and view member features - with full user 
   account debiting. 
 
   A full set of Sysop Utilities that automate almost all of the  normal 
   SysOp functions... keeping system maintenance to a minimum. 
 
   Full  DOS directory support with super-fast filefinding capabilities.  
   Hard disk support for the DOS limit (C..Z) with  no  megabyte  limits 
   (this  MiniNet  system  operates  with 11 hard disks / 800+ megabytes 
   total). 
 
MiniNet Version 18.00 is in BETA test now...
 
Here's a breakdown of what's new:
 
   Added  9600/19200 bps support - with "Lock Init Baud" flag.  (USR HST 
   allows port init at 19200 bps and locking the port at the init  speed 
   with the modem adjusting to user connect baud rate). 
 
   Added  dialy download K limit - (so 9600 baud users don't eat you out 
   of house and home)! 
 
   Added Offline Test mode (no comm port access)  for  background  Sysop 
   maintenance under Multitasker. 
 
   Added  command  line parameter support to define operation varaibles. 
   (Comm Port, Node, Daily K, Lock Baud, Null Modem, Test Mode, etc.) 
 
   Added Null Modem Support for inter  machine  access  via  null  modem 
   cable. 
 
   Added DSZ Batch Upload/Download of upto 24 files. 
 
   Added DSZ True Ymodem Batch (same 24 files limit)
 
   Added  a new Xmodem/Ymodem/WXmodem/K9Xmodem driver which handles both 
   single file and Batch up/downloads - bringing protocol support to  14 
   (plus the K9X autodownload feature)! 
 
   Added  files  list  editor  during  Batch uploads - allows for manual 
   input or Ascii Upload of a files list.  User may use a  standard  BBS 
   type  list...  in  which  case,  MiniNet  will  extract  the name and 
   description from each line. 
 
   Added full  type-ahead  buffering  when  user  input  is  expected... 
   reverting back to C=Abort/S=Pause during system display scrolling. 
 
   Added  H)ang  Up option at all system prompts.  This gives the user a 
   quick disconnect option from anywhere on the system. 
 
   Changed the new user logon to display the APPLY text  file  and  then 
   prompt user if he/she wishes to register of hangup. 
 
   Expanded number of conferences to 9 - made number sysop defineable
 
   Optimized the code (again!) - the system only requires 140K including 
   the external protocols! 
 
   Added  special  message header formatting for color/fancy color users 
   which uses ANSI Cursor positioning rather than streaming out spaces. 
 
   Added special stationary files listings for color/fancy  color  users 
   which  uses  ANSI Cursor positioning to display file listings without 
   scrolling. 
 
   Modified the ARC list/view function so that the user may list an  ARC 
   and  view  text  files continuously without having to recall the main 
   files listing.  Additionally,  MiniNet  monitors  the  user  security 
   versus  the  file  security.  Users may view text files within an ARC 
   only if his/her security is equal to or higher than that of the file. 
 
   Changed format for Quick Scan messages so  displaying  about  12  msg 
   headers per screen as opposed to the old 3 headers per screen 
    
   Correceted a problem in the node mail feature

   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   MiniNet is perhaps the most sophisticated BBS  package  available  to 
   date.  If you haven't seen the MiniNet system in action,  I cordially
   invite you to give the Dog a call and check it out for yourself!
   
   The MiniNet Software package by itself,  includes the  software,  all 
   Sysop utilities, display screens and support files (152 in all)   and
   24 hour a day online support in setup,  maintenance and operation via
   Underdog's MiniNet Headquarters Seattle, Wa.


Canine Express (K9X) v8.xx      (C) Copyright 1985,1988 by Crater Rim Software

K9X ShareWare Licensing Agreement
---------------------------------
    For  the sake of clarity,  all references and restrictions to the use of 
    the K9X also apply to all of the associated support files INCLUDING  the 
    K9Xmodem, Super8K, SuperK and Jbatch protocols. 

    K9X, its overlays and all of its associated support files are not public 
    domain software, nor are they free software.  K9X is copyright (C) 1985, 
    1988 - the K9Xmodem,  Super8K, SuperK and JBatch protocols are copyright 
    1987, 1988 by Crater Rim. 

    Non-registered users are granted a limited license to  use  K9X  version 
    SW80  on  a  trial  basis  for  the purpose of determining whether these 
    programs are suitable for their needs.  The term of this limited license 
    is 30 days.  Use of K9X,  except  for  this  limited  purpose,  requires 
    registration.  Use  of  non-registered  copies  of  K9X  by  any person, 
    business,  corporation,  governmental agency or other entity institution 
    is strictly forbidden.  
 
    Registration  permits  you  to  use  K9X  on a regular basis on a single 
    computer.  A  registered  user  may  use  the  program  on  a  different 
    computer,  but  may not use the program on more than one computer at the 
    same time.  Registration also includes priority  support  on  Underdog's 
    MiniNet BBS.  Users need register only one version of K9X.  Registration 
    includes licensed use of all upgrades.  

    All corporate, business, government or other commercial uses of K9X must 
    be registered.  We  offer  quantity  discounts  and  Corporate  or  site 
    licensing is also available.  

    No  user  may  modify  K9X  in  any  way,  including  but not limited to 
    decompiling, disassembling or otherwise reverse engineering the program.  

    All users are granted a limited license to copy K9X  version  SW80  only 
    for  the trial use of others subject to the above limitations,  and also 
    the following: 

        K9X  version SW80 must be copied in unmodified form, complete 
        with the file containing this license information.  

        Any and all K9X documentation must be included with the copy.  
        No  fee, charge or other  compensation  may  be accepted  or 
        requested by any licensee.  

        K9X  may not be  distributed in  conjunction  with  any other 
        product without prior arrangements with Crater Rim Software. 

    Operators of electronic bulletin board systems  (Sysops)  may  post  K9X 
    version  SW80  for  downloading by their users only as long as the above 
    conditions are met.  
 
    Distributors of public domain or user supported software may  distribute 
    copies  of  K9X  version SW80 subject to the above conditions only after 
    obtaining written permission from Crater Rim Software.  Such  permission 
    usually is granted.  Please write or call for details.  




                  ShareWare Software Discalaimer and Warranty

    Crater  Rim Software makes no warranty of any kind,  express or implied, 
    including without limitation,  any warranties of merchantability  and/or 
    fitness  for  a  particular  purpose.  Crater  Rim Software shall not be 
    liable  for  any  damages,   whether  direct,   indirect,   special   or 
    consequential  arising  from a failure of this program to operate in the 
    manner desired by the user.  Crater Rim Software shall not be liable for 
    any damage  to  data  or  property  which  may  be  caused  directly  or 
    indirectly by use of the program.  

    IN  NO  EVENT WILL Crater Rim Software BE LIABLE TO YOU FOR ANY DAMAGES, 
    INCLUDING  ANY  LOST  PROFITS,  LOST  SAVINGS  OR  OTHER  INCIDENTAL  OR 
    CONSEQUENTIAL  DAMAGES  ARISING  OUT OF YOUR USE OR INABILITY TO USE THE 
    PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.  


    See the Ordering section for more information on registration,  corporate 
    licensing and similar topics.  

    WARNING:  YOU MAY NOT USE EITHER VERSION OF K9X ON A REGULAR BASIS
              WITHOUT REGISTERING THE PACKAGE.

```
{% endraw %}

## PATSTACK.DOC

{% raw %}
```
PATSTACK - Stack Value Patching utility for SUPERK.COM

    There have been reports of strange things happening with SUPERK  when 
installed in various PC environments.  In order to keep the SuperK memory 
requirements  to  a  minimum,  I  have  set the Minimum and Maximum stack 
values at a bare minumum.  Testing has proven that this may very well  be 
the  cause  of the stange transfer results experienced by some users.  By 
providing a real time patching utility - as opposed to simply  increasing 
the  stack  values  -  you can experiment with different stack values and 
(hopefully) come up with the optimum compromise between  proper  transfer 
performance and memory requirements.  To this end, PATSTACK is being made 
available so that the user may patch the Minimum and Maximum stack values 
directly within SUPERK.COM. 

   You may also startup PATSTACK with two command line parameters:

                PATSTACK x y

       where x = the new Minimum Stack value 
             y = the new Maximum Stack value


    If  no  command line parameters are specified,  PATSTACK will display 
how the stack values are figured and what the current values are.  Simply 
enter the  new  values  and  PATSTACK  will  make  the  modifications  to 
SUPERK.COM.

    IN ALL CASES,  The Mimimum Stack value should be less than or equal to 
the Maximum Stack value. 

   It should be noted that SuperK memory requirements  will  increase  as 
the  values of the stack(s) increase and that the range of 512 to 2048 is 
checked prior to patching SUPERK.COM 

   PATSTACK will work on any version of SUPERK.COM

```
{% endraw %}

## SUPERK.DOC

{% raw %}
```
SuperK v4.31  MiniNet's External Protocol Driver including
JBatch        MiniNet's Driver for Richard B. Johnson's Jmodem Protocol

Protocols Supported: Xmodem Checksum, Xmodem CRC, Ymodem (1k Xmodem)
                     Jmodem, WXmodem, K9Xmodem, Super8K and Super8K-G
                     in full Batch  or  Single File Mode.

SuperK is Copyright 12/4/1986, 1989 and JBatch is Copyright 11/01/1988, 1989
by Crater Rim Software. All Rights Reserved.

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

SuperK Licensing Agreement
--------------------------
   For the sake of clarity,  all references and restrictions to the use  of 
   the  SuperK  also apply to all of the associated support files INCLUDING 
   the K9Xmodem, Super8K and Jbatch protocols. 

   SuperK,  its overlays and all of its associated support  files  are  not 
   public domain software, nor are they free software.  SuperK is copyright 
   (C) 1985,  1989 - the K9Xmodem, Super8K, SuperK and JBatch protocols are 
   copyright 1987, 1989 by Crater Rim. 

   Non-registered users are granted a limited license to use SuperK version 
   4.xx on a trial basis for  the  purpose  of  determining  whether  these 
   programs are suitable for their needs.  The term of this limited license 
   is  30 days.  Use of SuperK,  except for this limited purpose,  requires 
   registration.  Use of non-registered copies of  SuperK  by  any  person, 
   business,  corporation,  governmental agency or other entity institution 
   is strictly forbidden.  
 
   Registration permits you to use SuperK on a regular basis  on  a  single 
   computer.  A  registered  user  may  use  the  program  on  a  different 
   computer,  but may not use the program on more than one computer at  the 
   same  time.  Registration  also  includes priority support on Underdog's 
   MiniNet  BBS.   Users  need  register  only  one  version   of   SuperK.  
   Registration includes licensed use of all upgrades.  

   All corporate,  business,  government or other commercial uses of SuperK 
   must be registered.  We offer quantity discounts and Corporate  or  site 
   licensing is also available.  

   No  user  may  modify  SuperK  in any way,  including but not limited to 
   decompiling, disassembling or otherwise reverse engineering the program.  

   All users are granted a limited license to copy SuperK version 4.xx only 
   for  the trial use of others subject to the above limitations,  and also 
   the following: 

         SuperK  version  4.xx  must  be  copied  in unmodified form, 
         complete with the file containing this license information.  

         Any and all SuperK documentation must be included  with  the 
         copy.  No fee,  charge or other compensation may be accepted 
         or requested by any licensee.  

         SuperK may not be distributed in conjunction with any  other 
         product without prior arrangements with Crater Rim Software. 

   Operators  of electronic bulletin board systems (Sysops) may post SuperK 
   version 4.xx for downloading by their users only as long  as  the  above 
   conditions are met.  
 
   Distributors  of public domain or user supported software may distribute 
   copies of SuperK version 4.xx subject to the above conditions only after 
   obtaining written permission from Crater Rim Software.  Such  permission 
   usually is granted.  Please write or call for details.  


                  ShareWare Software Discalaimer and Warranty

   Crater  Rim Software makes no warranty of any kind,  express or implied, 
   including without limitation,  any warranties of merchantability  and/or 
   fitness  for  a  particular  purpose.  Crater  Rim Software shall not be 
   liable  for  any  damages,   whether  direct,   indirect,   special   or 
   consequential  arising  from a failure of this program to operate in the 
   manner desired by the user.  Crater Rim Software shall not be liable for 
   any damage  to  data  or  property  which  may  be  caused  directly  or 
   indirectly by use of the program.  

   IN  NO  EVENT WILL Crater Rim Software BE LIABLE TO YOU FOR ANY DAMAGES, 
   INCLUDING  ANY  LOST  PROFITS,  LOST  SAVINGS  OR  OTHER  INCIDENTAL  OR 
   CONSEQUENTIAL  DAMAGES  ARISING  OUT OF YOUR USE OR INABILITY TO USE THE 
   PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.  

   See the Ordering section for more information on registration, corporate 
   licensing and similar topics.  

   WARNING:  YOU MAY NOT USE ANY VERSION OF SuperK ON A REGULAR BASIS
             WITHOUT REGISTERING THE PACKAGE. 

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
SuperK External Protocol Driver - Revision Log

V2.50  - Dated 08/22/88  Initial Release
V2.52  - Dated 09/01/88
V3.10  - Dated 11/05/88
V3.12  - Dated 12/04/88
V3.13  - Dated 12/06/88
V3.14  - Dated 12/27/88
V3.15  - Dated 01/07/89
V3.16  - Dated 01/26/89
V4.00  - Dated 02/20/89
V4.10  - Dated 03/29/89  Changes

   Modem Buffer size has been increased from 4K to 8K

   Sending  files  using  Super8K will now recognize the receipt of an XOFF 
   from the modem.  Upon receipt,  SuperK will cycle for  about  5  seconds 
   waiting for an XON from the modem or a user abort via the Esc or ^X key. 
   Please  Note  that the XOFF/XON support is ONLY for use with MNP modems.  
   The Super8K receiver software does not send the XOFF/XON. 

   It has been brought to my attention that the latest MS  Basic  compilers 
   drop the RTS line when performing a DOS shell. SuperK now checks the RTS 
   line upon startup and will raise it if it has been dropped. 

   There have also been some reports of memory errors when using SuperK  in 
   EEMS memory...  I suspect that this may have been caused by a Stack/Heap 
   collision  within SuperK.  To this end,  I have increased both the Stack 
   and Heap.  Please check the new memory requirements to be sure that  you 
   have ample memory available for SuperK to do its thing! If you are still
   experiencing problems with corrupted files, etc. unpack the SK&JPATS.ZIP
   file included in the main SK&J  package, read the  PATSTACK.DOC  and run
   the PATSTACK.COM  utility against SuperK. If the problem still persists,
   please let me know!

   The  addition  of a Work Path so that SuperK can easily access Read Only 
   files in a networking envirnment (see W - Work Path below). 

   Corrected a bug in the Overwrite check.  Under certain circumstances, an 
   I/O error would occur if too many files were rejected by the receiver.


V4.11  - Dated 04/05/89  Corrected a minor bug in the ReadOnly copy routine


V4.12  - Dated 05/04/89  Changes

   In an effort to make Super8K a little more "bullet  proof",  I  reworked
   then Super8K Error Recovery routines.

   There have been a number of users having problems with SuperK  reporting
   a run time error of F0=xxxx.  This is due to the fact that SuperK cannot
   find its overlay file, SUPERK.000. Seems there are some (antiquated) BBS
   packages  that change directories before transferring a file!  When this
   happens,  SuperK is unable to find its overalay (or the  SKA.COM  jmodem
   module for that matter).  If this is happening to you,  be sure to start
   up SuperK as   SUPERK @   and define  OVL Path  parameter  to  the  FULL
   drive:\path\  where SUPERK resides.

   There are also reports that some BBS software is unable  to  "read"  the 
   SuperK errorlevel returned upon exit. This is a problem with the calling 
   program  NOT  with SuperK as the errorlevel returned is fully recognized 
   by DOS via a batch file. 


V4.20  - Dated 06/25/89  Changes - see documentation below

   Added support for Com ports 3 and 4.
   Added support for 38400, 57600 and 115200 bps.
   Added L command line parameter to let SuperK know that the port is locked
   Added C command line parameter to enable CTS checking for locked ports
   Added U command line parameter to allow the passage of actual modem speed
           when port is locked
   Added Quick Escape from the SuperK help screen(s). Simply press the [Esc]
           key and you will be returned to DOS with an errorlevel of 1.


V4.30  - Dated 06/28/89  Changes - see documentation below

   Added a new protocol! MNP Super8K-G in single or batch mode!


V4.31  - Dated 07/04/89  Changes

   Modified the Patching of SKA.COM so that you do not have to exit  SuperK
   when  patching multiple copies of SKA.COM.  The new format requires that
   the  original  SKA.COM  be  present.  After  verification  that  SKA.COM
   exists,  SUPERK will read in the entire SKA.COM,  make its modifications
   and create a new SKA.COM with the specified node  character  substituted
   for  the A in SKA.  At no time will SUPERK make any modifications to the
   original SKA.COM file... Just be sure you are using the original SKA.COM
   as the "master"!

   Changed the way in which the transfer times are calculated...  This  has 
   no effect on the cps calculations, just the estimated transfer time. 

   Changed  the  Main  transfer log file format to conform with the DSZ log
   file in that, if the transfer fails, the first character of the log file
   line will be an  E  rather than an  R  or  S.


Memory requirements:
~~~~~~~~~~~~~~~~~~~   
   Jmodem  transfers require a minimum of 125K (128,000 bytes).  All of the 
   other protocols only require about 70K (71,680 bytes). If you don't know 
   how much memory you have available, it can be checked easily as follows: 

   1)  Copy  DOS' CHKDSK.COM  to your comm directory.

   2)  Start up your comm program and execute the comm program's DOS  shell 
       option. 

   3)  Type  CHKDSK  at the DOS prompt

   4)  CHKDSK  will display its results along with the "bytes free" figure. 
       In order to perform Jmodem transfers,  the "bytes free" must  be  at 
       least 128,000 (if you intend on using SuperK's Jmodem).

   5)  Enter "EXIT" at the DOS prompt.

   6)  Exit your comm program...


Command Line Syntax:
~~~~~~~~~~~~~~~~~~~
  SuperK Px Sbaud [Ubaud] [Nx] [C] [L] [M] [R] [E] Dprotocol{by} F fspec fspec

Command line parameters :
~~~~~~~~~~~~~~~~~~~~~~~
   Px  - Comm Port to use.

       Where x = 1, 2, 3 or 4

       The port addresses and IRQ's are standard IBM/MSDOS values:

                         Address     IRQ
                         -------     ---
               Com 1 =   03F8 hex     4
               Com 2 =   02F8 hex     3
               Com 3 =   03E8 hex     4
               Com 4 =   02E8 hex     3

       Please  note:

          Com3 and Com4 may not work on your system.  Be sure to check your 
          Async Card manual to be sure that your port addresses  and  IRQ's 
          are the same... 


   Sbaud - Port Speed.

       Where baud = 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200

                          S300     =     300 bps
                          S1200    =    1200 bps
                          S2400    =    2400 bps
                          S4800    =    4800 bps
                          S9600    =    9600 bps
                          S19200   =   19200 bps
                          S38400   =   38400 bps
                          S57600   =   57600 bps
                          S115200  =  115200 bps

       This  is  the  speed  at  which  the  comm  port  is  set at and not 
       necessarily the speed of the modem (if the port is locked that is). 

       Please  note:

         The 57600bps and 115200bps speeds,  although feasible,  require  a 
         high  speed  Async  Card  with  an  NS16550 UART and have not been 
         tested (mine is one of those non-workable systems)... 


   Ubaud - Modem Speed.

       Where baud = 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200

       This is the actual speed (according to the connection) of the modem.

       The inclusion of the U parameter is purely optional and if  present, 
       will  be  used  to  accurately  calculate  the  transfer  times  and 
       accurately report the correct baud rate in the  Transfer  Log  file.  
       If  it  is  not  specified,  SuperK  will set its value equal to the 
       actual port speed as specified via the S parameter. 


   DirectionProtocol[b][y]

       Direction of transfer. Where D = R (receive) or S (send)
          and Protocol X = Xmodem
                       C = CRC Xmodem
                       Y = Ymodem (1k Xmodem)
                       W = WXmodem
                       J = Jmodem
                       K = K9Xmodem
                       S = Super8K
                       M = MNP Super8K-G

              b = Perform  the  transfer  in  Batch  mode.  Note  that both 
                  computers MUST be using SuperK or K9X in  order  for  the 
                  Batch mode to be operational. 

              y = SuperK  allows  you to specify if you want overwriting of 
                  existing files to be performed. By including a Y with the 
                  Direction/Protocol  parameter,   the  default   overwrite 
                  setting will be reversed during the current transfer. 

          In single file mode,  the J,  X,  C,  W and Y protocols are fully 
          compatible  with  their  counterparts  used  on all/most BBS Both 
          systems must be using SuperK to invoke the  K9Xmodem  or  Super8K 
          Protocols. 

          Both  y  and b are optional.  The y overwrite reversal only works 
          in Batch mode (when the b is also present).  If the b is omitted, 
          SuperK defaults to single file mode 

  MNP Super8K-G
  ~~~~~~~~~~~~~
          A  brand  new  protocol!!!  As  is the case with the other SuperK 
          protocols,  the new MNP Super8K-G protocol itself may be executed 
          in either Batch (MB parameter) or Single File (M parameter) mode. 
          This  new protocol takes advantage of the MNP error correction of 
          the new high speed (and some lower speed)  modems.  When  called, 
          the  MNP Super8K-G automatically sets the Check-CTS flag and uses 
          the built-in Flow Control code. Also, the Port Locked parameter L 
          is not required.  Along with a much improved throughput,  the MNP 
          Super8K-G  protocol  also rounds file sizes up to the next higher 
          128 byte sector,  ala X/WXmodem,  rather than the next higher  1K 
          byte sector, ala Y/K9Xmodem. 

          MNP Super8K-G uses an 8K block and since it IS  NOT  a  windowing 
          protocol  (like  WXmodem and K9Xmodem),  the error/abort response 
          time is improved 1000 fold!  MNP Super8K-G also passes the number 
          of file sectors to the  receiving  system  so  a  file  size  and 
          transfer  time (approxomate) is displayed on both the sending and 
          receiving systems. 

          Of course,  the MNP Super8K-G protocol has its own colors  so  be 
          sure to setup SuperK before you use it!

          Since MNP Super8K-G only does a byte count update  each  8K,  the 
          tranfer  may seem to be taking a long time...  but in reality.... 
          the following SUPERK.LOG extract displays  the  preliminary  test 
          results  for  each of the SuperK protocols.  These tests were run 
          between two AT's via Null Modem cable.  Results  via  modem  will 
          probably be a little lower accross the board. 

            Size    Speed      Cps       Errors   BlkSize   Protocol
          -------------------------------------------------------------
           140414  19200 bps  1526 cps   8 errors   1024    Zmodem Batch
           140416  19200 bps  1902 cps   0 errors   8192    MNP Super8K-G
           147930  19200 bps  1020 cps  48 errors   1024    Zmodem Batch
           147968  19200 bps  1903 cps   0 errors   8192    MNP Super8K-G

  Super8K
  ~~~~~~~
          A brand new protocol!!!  As is the case  with  the  other  SuperK 
          protocols,  the Super8K protocol itself may be executed in either 
          Batch (SB parameter) or Single File  (S  parameter)  mode.  Along 
          with a much improved throughput, the Super8K protocol also rounds 
          file sizes up to the next higher 128 byte sector,  ala X/WXmodem, 
          rather than the next higher 1K byte sector, ala Y/K9Xmodem. 

          Super8K uses an 8K block with a  1K  error  fallback/restart  and 
          since it IS NOT a windowing protocol (like WXmodem and K9Xmodem), 
          the  error/abort  response  time  is improved 1000 fold!  Super8K 
          also passes the number of file sectors to the receiving system so 
          a file size and transfer time (approxomate) is displayed on  both 
          the sending and receiving systems. 

          Of course,  the Super8K protocol has its own colors so be sure to 
          setup SuperK before you use it. 

          Since Super8K only does a byte count update each 8K,  the tranfer 
          may  seem  to  be  taking a long time...  but in reality....  the 
          following  SUPERK.LOG  extract  displays  the  preliminary   test 
          results for each of the SuperK protocols and a test comparison to 
          Zmodem  and  Jmodem.  These  tests  were run between two AT's via 
          Null Modem cable.  Results via modem will probably  be  a  little 
          lower accross the board. 

            Size    Speed      Cps       Errors   BlkSize    Protocol
          --------------------------------------------------------------
           60800   9600 bps   533 cps  0 errors   0  128   Xmodem   Batch
           60800   9600 bps   769 cps  0 errors   0  128   WXmodem  Batch
           61440   9600 bps   787 cps  0 errors   0 1024   Ymodem   Batch
           61440   9600 bps   869 cps  0 errors   0 1024   K9Xmodem Batch
           60707   9600 bps   861 cps  0 errors   0 1024   Zmodem
           60800   9600 bps   965 cps  0 errors   0 8192   Super8K  Batch

           60707   2400 bps   223 cps  0 errors   0 1024   Jmodem
           60707   2400 bps   222 cps  0 errors   0 1024   Zmodem
           60800   2400 bps   262 cps  0 errors   0 8192   Super8K  Batch
          ---------------------------------------------------------------


   C   - Perform CTS checking.

       This parameter is for those of you who have your comm  ports  locked 
       at  a  higher  baud rate than the actual connection.  If this is the 
       case,  be sure to include this paramater.  The default is for no CTS 
       monitoring. Here's the result of the  ATI5  USR Modem Command"
   
                USRobotics Courier 9600 HST NRAM Settings....

                   DIAL=HUNT   M=0  X=6  F=1  B=0
                   BAUD=19200  PARITY=N  WORDLEN=8

                   &A1  &B1  &G0  &H3  &I0  &K0
                   &M4  &N0  &P0  &R2  &S1  &Y1

                   S02=043  S03=013  S04=010  S05=008
                   S06=002  S07=030  S08=002  S09=006
                   S10=007  S11=070  S12=050  S13=000
                   S15=000  S19=000  S21=010  S22=017
                   S23=019


   L   - Port Locked flag.

       In  order  for  the  Super8K protocol to work in locked port setups, 
       SuperK must  disable  its  normal  Xon/Xoff  checking  in  order  to 
       recognize  the  Xon/Xoff  sent  by  the  modem  when it has its port 
       locked.  This command line parameter is provided to let SuperK  know 
       that  the  port  is locked and MUST be present when using an USR HST 
       with the port locked. The default is port is not locked. 


   M   - Monitor Carrier,  abort if not present.

       Including this parameter allows you to use SuperK to transfer  files 
       between  systems  via  null  modem  cable.  Default  is  ON (Monitor 
       Carrier). 


   Nx  - Node Letter or Number. Where x = A to Z  or  0 to 9


   E   - The  E parameter toggles the status of the "erase" flag.

       If specified on the command line, SuperK will not erase the BATCHLST 
       file it creates when multiple filenames are specified on the command 
       line (until the next time you specify multiple filenames, that is!) 


   R   - This Command Line Parameter is for use with RBBS-PC.

       RBBS-PC  utilizes  a  true  Batch  download  with a single file mode
       upload.  During uploads, RBBS-PC includes the full path and filename
       for the f paramter.  Since SuperK Batch modes are TRUE Batch in both
       downloads and uploads,  I have added the R command  line  switch  to
       tell  SuperK  that  the  F  parameter  may  (or  may  not) include a
       filename.  When SuperK sees the R parameter,  it will look  for  the
       last  \  or :  characters and parse all characters after that,  thus
       leaving just the path...  which it then appends to any uploads.  The
       default is True (non RBBS-PC) batch uploads.

          RBBS command line for Batch Receive using K9Xmodem Batch

             SUPERK.COM p[PORT#] s[BAUD] r n[NODE] rkb f [FILE]

          RBBS command line for Batch Receive using K9Xmodem Batch

             SUPERK.COM p[PORT#] s[BAUD] r n[NODE] skb f [FILE]

          example:  RBBS-PC passes [FILE] as  C:\RBBS\99\filename.ext
                    (or your defined upload path) during uploads

          exclusion  of the  R  command  line parameter  results in an 
          invalid file specification of 

                   C:\RBBS\99\filename.ext\

          inclusion of the R command line parameter results in a valid file 
          specification of 

                   C:\RBBS\99\

          for obvious reasons, if you use the R command line parameter, you 
          must include the last \ or at least one superflous (non  \  or  : 
          character) at the end of the F specification. 

          when using the R parameter...

            valid     C:\RBBS\99\*.*       results in   C:\RBBS\99\
            valid     C:\RBBS\99\ABC.PAK   results in   C:\RBBS\99\
            valid     C:\RBBS\99\          results in   C:\RBBS\99\
            invalid   C:\RBBS\99           results in   C:\RBBS\
            no f parameter                 results in   *.*  (all files saved
                                                         in logged drive\dir)

          when using the default (non RBBS-PC)

            invalid   C:\RBBS\99\*.*       results in   C:\RBBS\99\*.*\
            invalid   C:\RBBS\99\ABC.PAK   results in   C:\RBBS\99\ABC.PAK\
            valid     C:\RBBS\99\          results in   C:\RBBS\99\
            valid     C:\RBBS\99           results in   C:\RBBS\99\
            no f parameter                 results in   *.*  (all files saved
                                                         in logged drive\dir)

   F   - Filespecs Next

       This  parameter  acts  as  a  flag  for  SuperK and denotes that ALL 
       parameters after the F are  to  be  interpreted  as  filenames.  For 
       obvious  reasons,  this  parameter  should be the last one specified 
       (before the filenames)! Each filename may contain a full path in the 
       form: 

                 [d:\path\]Filename [d:\path\]Filename   to send/receive.

                                  or

       You may also specify the use of a text file  containing  a  list  of 
       filenames.  Each filename in the list may contain a full path.  This 
       option is specified as: 

                 @drive:\path\Filelist   (of files to Batch send.

                                  or

       You may want to use the second option for  file  lists...  that  is, 
       include a second path where ALL of the files within the list reside. 
       This option is specified as: 

                 @drive:\path\listfilename@drive:\path 


   @   - Default Configuration Mode

       Modify colors/logfile name/xferfile name/overlay path/options  flags 
       Clone SUPERK.COM if changes are made 


   The port, speed and direction/protocol parameters MUST be supplied... If 
   operating in single file mode, the F parameter must be supplied.  The B, 
   E, U, L, C, Y, M, N and R parameters are optional... and the @ parameter
   is only used to  review/modify  the  default settings  (see modification
   mode below).

   The  direction R and S parameters are mutually exclusive (only one,  but 
   not both). 

   Command Line parameters may be supplied as upper or lower case,  and may 
   be  entered  in  any  order (except for the F paramter which must be the 
   last one... before any filenames). 


SK4.LOG 
~~~~~~~
   SuperK will record transfer results to  the  logfile  in  the  following 
   format: 

+--- Transfer Direction
|  +------- File Size (0 if transfer fails)
|  |      +---------- Modem Speed
|  |      |         +---------- CPS efficiency (0 if transfer fails)
|  |      |         |         +------------- Number of errors
|  |      |         |         |            +-- Dummy for DSZLOG compatability
|  |      |         |         |            | +----- Packet size in bytes
|  |      |         |         |            | |    +--- Filename
|  |      |         |         |            | |    |    Protocol ----++- Batch
|  |      |         |         |            | |    |                 ||
S  27648  1200 bps  108 cps   0 errors     0 1024 C:\DLS\SUPERK.PAK KB


XFER.TXT 
~~~~~~~~
   If  (and  only  if)  a Node character is specified OR a question mark is 
   used within the XferFile name or SuperK Log file name,  SuperK will also 
   create a Xfer Node File to show success/failure status messages. 

       This file has the following format :

                Filename
                Upload   or   Download
                Protocol      (J/X/C/Y/W/K/S/M/JB/XB/CB/YB/WB/KB/SB/MB)
                Success  or   Fail
                EOF           (^Z)

           Sample:

                SUPERK.PAK
                Download
                KB
                Success
                ^Z

   The  file  will  be created in the default directory if no drive/path is 
   specified during the command line @ parameter modification  mode.  While 
   in  batch  mode,  only the first file transfer results will be logged to 
   this file.  However,  SUPERK.LOG will contain the results of  all  files 
   transferred in the batch. 


ErrorLevel Exits 
~~~~~~~~~~~~~~~~
   For ease of use within batch files.. in all cases, SuperK will exit with 
   an ErrorLevel determined by the success of the transfer. 

   If  ALL transfers are successful,  SuperK will return an ERRORLEVEL 0 If 
   ANY ONE transfer fails, SuperK will return an ERRORLEVEL 1 


Command Line @ Parameter Modification Mode
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   Starting SuperK with the @ command line parameter will put  SuperK  into 
   its  default  modification  mode.  SuperK will first display its current 
   default settings and then prompt you for any changes  you  may  wish  to 
   make.  Note  that  entering  a  blank line (simply hitting [Enter]) will 
   leave the current setting intact.  SuperK  allows  modification  to  the 
   colors it uses,  the logfile name, the xfer file name (for BBS use), the 
   overlay path and certain operational flags. 


   C - Modifying colors:

       This one's easy!  After selecting the C option,  SuperK will display 
       the  127 color palette that it supports.  Simply select a number for 
       each of the 6  colors  used...  SuperK  will  cycle  through  all  6 
       colors,  updating  the "current settings" accordingly.  If you don't 
       want to change a current color setting,  simply hit the [Enter]  key 
       and  SuperK  will move on to the next setting.  Note:  Jmodem window 
       colors default to black text on a  white  background.  The  6  color 
       types are: 

          Xcolors for Xmodem/Xmodem CRC/WXmodem transfers
          Kcolors for K9Xmodem transfers
          Ycolors for Ymodem transfers
          Scolors for Super8K transfers
          Mcolors for Super8K-G transfers
          Ucolors for universal display of the SuperK logo and batch
                      filenames


   D - Logfile Name:

       This  is  the  filename  SuperK  uses  to  record the results of any 
       tranfers it performs.  SuperK will accept upto 40 characters so  you 
       may  include  a  full  drive:\path\  along  with  the  logfile name. 
       Additionally,  you may use a question mark (?) as one (and only one) 
       of  the  logfile  name  characters.  If  a question mark is present, 
       SuperK will substitute the Node character in its place.  If no  node 
       character  is  specified,  SuperK  will  use  the letter A as a Node 
       character.  The letter A is substituted ONLY if the question mark is 
       encountered in the logfile name.  If  you  do  not  want  SuperK  to 
       maintain a logfile, simply enter a backslash (\).. which will inform 
       SuperK  to  blank out the logfile name.  The default logfile name is 
       SK4.LOG 


   E - XferFile Name:

       This is the filename SuperK uses to record transfer results for  use 
       by  BBS  programs.  Its  format and modification is identical to the 
       Logfile Name. The default Xferfile name is XFER.TXT 


   F - OvlPath:

       Although in most cases,  you will be storing all of the SuperK files 
       in  the  same  directory  as your comm/BBS program files,  there are 
       cases where you may want to store them in a directory other than the 
       logged directory.  This option allows you to do  this.  When  SuperK 
       starts  up,  it  will  use  the  OvlPath  to locate its overlay file 
       (SUPERK.000) and Jmodem module (SKA.COM).  You must supply the  full 
       drive and path in which the SKA.COM, SUPERK.COM and SUPERK.000 files 
       reside and all SuperK files MUST reside in this area.  If no OvlPath 
       is defined,  SuperK will expect all of its files to  reside  in  the 
       logged directory.  If,  after defining a path, you decide that it is 
       NOT required,  simply enter a backslash \ for  the  new  path.  This 
       will cause SuperK to null out any existing path. 


   G - Overwrite:

       This  flag  setting  tells  SuperK  whether  or not in can overwrite 
       existing files during Batch mode transfers. The default is NO 


   H - Save Aborts:

       This flag setting tell SuperK whether or  not  it  should  keep  any 
       partial  files  which were aborted during transfer.  This flag holds 
       for any protocol - batch or single file mode. The default is YES 


   I - Write On 0:

       This flag setting tells SuperK whether or not it should  create  the 
       XferFile  when  a  transfer  is  not  successfully completed and the 
       uploaded file contains 0 bytes.  The status of this flag is the last 
       check that  SuperK  makes  before  creating  the  XferFile.  A  node 
       character  and XferFile Name must be specified before the Write On 0 
       flag comes into play. The default is YES 


   P - Patch SKA.COM

       In order to  facilitate  the  use  of  JBatch  in  a  multinode  BBS 
       environment  the  SK.COM  module  has  been  renamed  SBA.COM.  In a 
       multinode BBS environement,  SuperK  requires  the  presence  of  an 
       exclusive  copy  of  SKA.COM for each node.  Each SK module is named 
       according to the BBS node it  supports  (SKA.COM  supports  node  A, 
       SKB.COM supports node B, SK1.COM supports node 1, etc.). 

       In previous versions, there was a separate patching utility provided 
       so that you could patch SKA.COM (JBA.COM before).  SuperK v4.00  now 
       provides  an internal method of performing this modification!  After 
       selecting this option,  SuperK  will  prompt  you  for  a  new  node 
       character.

       Upon making the patch, SuperK will create a new copy of SKx.COM file
       with the specified node character substituted for the A in SKA.COM.

       SuperK will strip the last character of the filename (the A in  SKA) 
       and  insert  the  node character in its place,  renaming the the new 
       SKA.COM file to SK + node character + .COM. 

       If no node character is specified on the SuperK command line (the  n 
       parameter), SuperK will use the A character...  as you have probably 
       surmised,  SuperK appends the node character (or temporary A) to the 
       SK module (JBA, JBB, JB1, etc). 

       Caution...

       If  you  haven't any use for mutiple copies of SKA.COM,  simply copy 
       SKA.COM down into your comm directory and use  it.  The  default  is 
       SKA.COM 


   W - Work Path

       This  parameter  was  included  in order to supply a simple means of 
       transferring files which have the Read Only attribute set. Since the 
       Turbo Pascal compiler opens all files in a  Read  and  Write  state, 
       SuperK  would experience an I/O error when attempting to open a Read 
       Only file.  Since this problem is more  prevelant  in  a  networking 
       environemnt...  and I didn't particularly care to have to revamp all 
       of the SuperK file  read/write  I/O  routines...  This  option  will 
       circumvent  the compiler problem for those users who wish to use the 
       SuperK driver to send Read Only files. 

       By  specifying  a  work path here,  SuperK will create a copy of the 
       requested download in this directory and then proceed  to  send  the 
       copy.  Upon  completion  (or  abort) SuperK will erase the copy.  Of 
       course,  you may use this feature regardless of the File's Read Only 
       Attribute...  if  you  feel  insecure  at  having  SuperK access the 
       "master" file,  set up a work path and SuperK.  If a  work  path  is 
       specified,  it  MUST  be  a  complete path including a drive letter, 
       colon, backspace, directory etc...  upto a maximum of 40 characters. 
       As is the case with the SuperK support files, you may use a question 
       mark  as  a  valid  character  within  the  path  string.  If SuperK 
       encounters a question mark in the Work Path,  it will substitute the 
       node  character  specified  on  the  command  line  or,  if  none is 
       specified, SuperK will substitute an A for the question mark. 

       Valid Paths:

             Specifed                    Result

             C:\BBSWORK                  C:\BBSWORK\filename

             C:\NODE?WRK         if no node specified
                                         C:\NODEAWRK\filename
                                 if node 1 specified
                                         C:\NODE1WRK\filename

             C:\BBS\NODE?        if no node specified
                                         C:\BBS\NODEA\filename
                                 if node 1 specified
                                         C:\BBS\NODE1\filename
       InValid:

             C:\NODE?WRK?        if no node specified
                                         C:\NODEAWRK?\filename
                                 if node 1 specified
                                         C:\NODE1WRK?\filename


   [Enter] Quit:

       If  you  only wish to view the current default settings,  simply hit 
       [Enter] to exit back to DOS.  If any changes have been made,  SuperK 
       will go into its cloning mode and ask if you want to clone SuperK to 
       preserve  the  new  changes.  Note  that you MUST press the Y key in 
       order to clone SuperK.  Hitting [Enter] here will simply return  you 
       to DOS without saving your changes within the SuperK program. 


Program control keys
~~~~~~~~~~~~~~~~~~~~
   SuperK  will recognize either the [Esc] key or ^X (control X) key during 
   transfers and will abort the current transfer,  returning  you  to  DOS.  
   Note  that  the  streaming  protocols  (Wxmodem,  K9Xmodem)  may require 
   several [Esc] or ^X to abort the transfer and Jmodem/JBatch may  require 
   a ^Break to abort the transfer. 

   I  have modified the Jmodem module (SKA.COM) to eliminate as much of the 
   delays as possible... making the batch mode cycling quite "brisk"!  Note 
   however  that there is a delay if the Jmodem transfer is aborted for any 
   reason...  this is due to the fact that the buffers have to be "drained" 
   before recycling. 


Batch transfers
~~~~~~~~~~~~~~~
   SuperK is capable of sending and receiving multiple files in batch mode.  
   Since  this  protocol  driver  was  written  for use with my MiniNet BBS 
   package...  the sending of the file creation date (ala DSZ  and  Telink) 
   tends  to  drive  me  up the wall,  creating quite a bit of confusion in 
   keeeping track of newly acquired files! 

   For this reason the major difference between SuperK Batch mode and other 
   Batch modes is that SuperK Batch only sends the File Name and File  size 
   but does not send the file creation date. 

   During  Batch  mode  transfers,  SuperK  will  display  the last 3 files 
   requested under the SuperK logo so that you may have a running update of 
   what's happening.  The present transfer progress is displayed in its own 
   window alongside the SuperK logo. 

   SuperK is able to handle multiple filenames on  the  command  line.  The 
   command  syntax  remains  the  same  but  if  more  than one filename is 
   specified, SuperK will create its own BATCHLST file. If a Node character 
   is specified on the command line,  that character will be used  for  the 
   extension  of  BATCHLST.  The  default  is  "A"  if no node character is 
   specified. 

   The number of filenames that can be specified  will  depend  largely  on 
   your own particular system setup, the string length used by your calling 
   program and the individual filename lengths. 

   This   feature  is  only  active  while  in  Batch  Send  Mode  (receive 
   automatically gets filename from sender),  the command  line  paramaters 
   can be in any order,  NO WILDCARDS ARE ALLOWED,  the first filename MUST 
   be preceeded by an F (upper or lower case) and EACH filename may include 
   a full path. 

   Your command line should look like this...

         SUPERK p1 s9600 SWB f FILE1 FILE2 FILE3

   Since the BATCHLST is created internally (by SuperK),  SuperK will erase 
   the  BATCHLST  file once it is done with it...  You may override this by 
   including an E as one of the command line parameters.  The  E  parameter 
   toggles  the  status  of  the "erase" flag.  If specified on the command 
   line,  SuperK will not erase the BATCHLST file (until the next time  you 
   specify multiple filenames, that is!) 


   Receiving files in Batch mode
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      You  do  not  have to supply any filename during batch mode receives. 
      You may of  course,  include  a  full  drive:\path\  in  place  of  a 
      filename.  Use  the F command line parameter to designate the path in 
      the form:  f C:\FOO\BAR (with or  without  the  trailing  backslash).  
      And...  DO  NOT  specify  the  f  parameter if no path or filename is 
      specified. 


   Sending files in batch mode
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~   
      You  may  use  any  valid  DOS  wildcard  configuration  with  the  F 
      parameter. 

      Additionally, you may specify a list of filenames for SuperK to send.  
      The list filename is specified as 
       
              @drive\:path\listfilename

      You may also specify a full drive:\path\ to where all of the files in 
      the list reside. This is specified as 

              @drive:\path\filelist@drive:\path

      The  filenames  in the list may contain a full drive:\path\ (the same 
      or different) for each filename. 

   SuperK is capable of reading and extracting filenames from a standard  - 
   single  line  - BBS files listing.  If you use a BBS type files listing, 
   and call SuperK from the comm or BBS directory, you will have to add the 
   full drive:\path\ to each filename in the list if the files to  send  do 
   not  reside in the default directory.  There are other ways of accessing 
   files that reside in directories other than the default (default  upload 
   and download directories,  etc.),  but I won't go into this area as most 
   comm and BBS programs do this work for you (K9X does it ALL  for  you... 
   automatically!) 


Examples
~~~~~~~~
   1.  Use COM1, 1200 baud, Xmodem, Send files MYFILE.DOC and FILE.COM

        SUPERK p1 s1200 SX f MYFILE.DOC FILE.COM

   2.  Use  COM2,  19200  baud,  Ymodem Batch,  Receive file *.DOC,  do not 
       monitor carrier, override the default "do not overwrite". 

        SUPERK p2 s19200 m RYBY

       Note: The  protocol  character  must  follow  the  direction R.  The 
             second Y above is the override for the overwrite flag.  The  B 
             and  second Y may be in any order just as long as they are the 
             third and fourth characters in the Direction parameter. 

   3.  Use COM1,  9600 baud,  K9Xmodem Batch Send files in MYLIST.LST which 
       resides  in  my  C:\BBS\  directory.  The files listed in MYLIST.LST 
       reside in various directories on different drives.  Do  not  monitor 
       carrier and record success results to Node A of my BBS. 

        SUPERK p1 s9600 SKB m nA f @C:\BBS\MYLIST.LST

        C:\BBS\MYLIST.LST looks like this:

          ABC.PAK              (this one resides in the default directory)
          D:\FOO\BAR\MYGAME.EXE
          E:\LOTUS\123GRAPH.PAK

       XFER.TXT (or XFERA.TXT if ?  specified in the default xferfile name) 
       will reflect the results of the transfer.  Note that only the  first 
       filename  and  its  transfer  results  will  be present in XFER.TXT.  
       SUPERK.LOG will however, contain the results of all three files. 

   4.  Use COM2,  19200 baud,  K9Xmodem Batch Send only files containing an 
       PAK extension and residing in my C:\DLS directory, and don't monitor 
       carrier. 

        SUPERK p2 s19200 SKB m f C:\DLS\*.PAK

   5.  Use COM2,  19200 baud,  K9Xmodem Batch Receive files - store them in 
       my C:\DLS directory. 

        SUPERK p2 s19200 RKB f C:\DLS


Batch Files
~~~~~~~~~~~
   There are sample batch files included in SUPERK.PAK 

       SEND.BAT  - this batch file is set up for sending file(s) to
                   another system

       RECV.BAT  - this batch file is set up to receive file(s) from 
                   another system

   Executing any one of the batch files  without  any  parameters  (or  the 
   wrong  parameter)  will  display  a  short  message  showing the correct 
   calling procedure and parameter choices.  Since these batch files handle 
   transfers in either Send or Receive mode and single or batch  mode,  you 
   will have to supply the proper information in order to have them perform 
   correctly. 


NOTE: If you are operating a MiniNet BBS v18.00 or above... or K9X v8.xx or 
      above...  access to SuperK is handled internally and does not require 
      the use of the batch files. 

      If you are not... please read the enclosed PRODUCTS.TXT file...  It's 
      worth a look! 

      For pure BBS'ing, K9X can't be beat! 

 ------------------------------------------------------------------------------
   I  have  been using this protocol driver on Underdog's MiniNet for quite 
   some time now.  If you need more information  on  the  various  transfer 
   protocols,  please  get  a  copy of K9X (my comm program) and review the 
   K9X.DOC file contained in that package.  All suggestions are  gratefully 
   received and reviewed! Let me know... 


                   Sal Manaro  dba  Crater Rim Softare
                           4028 41st Ave South
                          Seattle, Wa 98118 USA
                          (206) 723-6728  voice

                   Underdog's MiniNet  (206) 725-9233
                1200/2400/9600  24hrs  1.2 Gigabytes of Files
                Supporting 24 files transfer protocols!

                           Enjoy,
                               Sal Manaro
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    N O T I C E    N O T I C E    N O T I C E    N O T I C E    N O T I C E

    Due  to the amount of time and money I have spent setting up SuperK for 
    use with your Comm/BBS programs,  I am  requiring  that  this  and  all 
    subsequent   versions  of  SuperK  be  registered  so  that  I  may  be 
    compensated for the many hours I have spent developing,  modifying  and 
    setting up this protocol driver. 
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

                      LET YOUR PRINTER DO ALL THE WORK!!!
          -------------------  INSTANT MAILER  ----------------------
          Please support quality shareware by registering your copies
                         We thank you for your support!

  Remit To:  Sal Manaro  dba  Crater Rim Software           SuperK Order Form
            4028  41st Ave. South
            Seattle, WA  98118 USA

  Quantity Discount Schedule (per purchase).  Each:

     1-10      $20.00        11-49     $18.00         50-99   $15.00
     100-199   $12.00        200-499   $10.00         500+    $ 8.00 

  Please send the ShareWare Evaluation version 4.00 
  -------------------------------------------------
    ____ SuperK Disk(s) without registration ...... @ $  8.00 ea. $ _______

  I would like to register the copy I already have:
  ------------------------------------------------
    ____ SuperK Registration(s) Only .............. @ $ 15.00 ea. $ _______

  Please register and send the latest version:
  -------------------------------------------
    ____ SuperK Registration(s) and Disk .......... @ $ 20.00  or $ _______


    PO, Rush and COD orders add $5.00 ........................... $ _______

                                                        Subtotal    _______

           (Washington residents please add  8%  sales tax)  Tax    _______

                                                            Total $ _______

  Payment by:  ( ) Check    ( ) Money Order    ( ) PO # ___________________
  Use address on check ( ) or mail to:

       Name: ______________________________________________________________

    Company: ______________________________________________________________

    Address: ______________________________________________________________

           : ______________________________________________________________

           : ______________________________________________________________

  Day Phone: (______)__________________ Eve: (______)______________________

  ORDERS OUTSIDE USA: Use Check or Money Order drawn on US bank in US dollars
          -------------------  INSTANT MAILER  ----------------------
                                                                                
  Fold  at  the  page break below with the printing above facing up and the 
  mailing label below folded underneath.  Staple check to the mailer,  fold 
  letter  style,  exposing the mailing address and hiding your information. 
  Fold sides along dotted line and staple or tape sides and top. 
                                                                                
                                                                              
   |_________________________________                                Place   |
   |                                                                         |
   |_________________________________                                Stamp   |
   |                                                                         |
   |_________________________________                                Here    |
   |                                                                         |
   |                                                                         |
   |                                                                         |
   |                                                                         |
   |                                                                         |
   |                                                                         |
   |                                     Crater Rim Software                 |
   |                                     4028  41st Ave South                |
   |                                     Seattle WA  98118  USA              |
   |                                                                         |
   |                                                                         |
   |                                                                         |
   |                                                                         |


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0622

     Volume in drive A has no label
     Directory of A:\

    RBBS-TXT ZIP    114169   2-13-90  11:30p
    RBBS-NEW ZIP    123059   2-13-90  11:30p
    SK&J0704 ZIP    115328   7-09-89  12:34a
    GO       BAT        38   5-12-87  11:32a
    GO       TXT      1079   3-16-90  11:52a
    FILE0622 TXT      2058   3-19-90   6:55p
            6 file(s)     355731 bytes
                            2048 bytes free
