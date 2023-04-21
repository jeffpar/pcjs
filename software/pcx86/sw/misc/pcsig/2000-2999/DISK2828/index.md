---
layout: page
title: "PC-SIG Diskette Library (Disk #2828)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2828/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2828"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2828.TXT

{% raw %}
```
Disk No: 2828                                                           
Disk Title: Stock Charting System 3/3 (#246 & 1354)                     
PC-SIG Version: 3.11                                                    
                                                                        
Program Title: Stock Charting System                                    
Author Version: 3.11                                                    
Author Registration: $50.00.                                            
Special Requirements: A graphics card and two floppy drives.            
                                                                        
The STOCK CHARTING SYSTEM draws or prints "volume/high/low/close"       
charts for any stock, bond, commodity, or security that has a           
high/low/close price.  Short- and long-term moving averages can be      
included on the chart and temporarily changed for "what-if"             
calculations.  The STOCK CHARTING SYSTEM is menu-driven and comes with a
complete set of context-sensitive help screens.                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NEWUSER.DOC

{% raw %}
```
     STOCK CHARTING SYSTEM - RELEASE 3.1 (SHAREWARE VERSION)      PAGE 1 OF 8

                     INSTALLATION GUIDE - FOR NEW USERS ONLY

           (C)  Copyright 1988-91 Charles L. Pack - All Rights Reserved
                           WRITTEN BY: Charles L. Pack
                 25303 La Loma Drive, Los Altos Hills, CA. 94022
                 Phone: (415) 949-0887 (no collect calls please)

     Permission is granted to try out this software, to make backup copies,
     and to copy and share it with others.  License for use is granted ONLY
     to individual persons who have registered directly with the author.
     Clubs, user groups and other institutions are authorized to distribute
     this software COMPLETE and UN-ALTERED for a "disk fee" not to exceed
     $25.00.  The author makes no warranties or guarantees, express or im-
     plied, and makes no recommendations to buy or sell any security.

     Suggestions and comments are welcome, and may be submitted directly to
     the author at the above address.

     NOTE:  This document pertains ONLY to NEW USERS.  For those who are UP-
     GRADING from an earlier version which has already been in use, print or
     display the document UPGRADE.DOC and follow those instructions instead.

                         HARDWARE/SOFTWARE REQUIREMENTS

     The hardware requirements include an IBM or other "fully compatible"
     personal computer with either TWO floppy drives or one floppy drive and
     a hard disk drive, and 256K or more memory.  A color graphics adapter
     (CGA, EGA or VGA) or equivalent is required for displaying or printing
     bar and line charts.  The IBM PS/1 and PS/2, and some other computers
     with VGA graphics, will require a color monitor.  An Epson-compatible
     graphics printer is required for printing the charts.  IBM DOS or PC-DOS
     version 2.0 or later versions are supported.

     This program is compatible with the Personal Portfolio Analyzer, Release
     2.12 or later.  Data files for both programs can exist in the same dir-
     ectory, and both programs can use the same catalog (list of securities).
     Therefore any security that exists in one program can automatically exist
     in the other.  WARNING: If you have an earlier version of the Personal
     Portfolio Analyzer, you MUST upgrade to Release 2.12.  See page 8 for
     more information.

                   SPECIAL INFORMATION ABOUT HERCULES GRAPHICS

     If you are using a computer equipped with a Hercules or equivalent
     "monographics" display, you MUST have a special software simulator to
     display the bar charts.  That software is NOT a part of the Stock
     Charting System.  The author recommends a product called HGCIBM.COM,
     which is available as user-supported software from many "shareware"
     distributors.  The instructions for use with HGCIBM.COM are not inclu-
     ded in this document, but they will come with that product, and you
     should follow those instructions for installation. 

     NOTE: The HGCIBM.COM program must be installed - with the required
     software switch settings - BEFORE starting the Stock Charting System.
     It makes no difference whether it is installed before or after GRAPHICS
     is loaded.  Also, it should be un-installed after you are finished,
     if you are running other programs that use Hercules graphics directly.







     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 2 OF 8

         HOW TO GET THE STOCK CHARTING SYSTEM RUNNING AS SOON AS POSSIBLE

     In this document, abbreviations are used to denote certain actions.  The
     < > symbols indicate a particular key to be pressed, for example <Enter>
     means "press the Enter key".  The Enter key is used to indicate you are
     finished entering a command or a data item.  <Enter> need not be pre-
     ceeded by a space even though it is done in this document for clarity.

     Some keys, such as the Esc (escape) and Ctrl (control) keys, may be in
     different positions on different keyboards.  You may have to look, or
     consult your computer operations manual to find them.  The Enter key has
     a funny hooked arrow on it.  The Ctrl key is usually near the left side.
     The Esc key is usually in or near the top row.  It can be used to get
     out of virtually any situation you don't want to be in.

     Commands typed into DOS may be in uppercase (CAPITAL letters) or lower-
     case; for example COPY, Copy and copy are all interpreted in the same
     way.  In this document, commands will be shown in uppercase.

     The Stock Charting System may use the DOS system date as a default param-
     eter, and also to compute trading periods when adding a new security.
     Therefore, it is important to enter the corrrect date when the computer
     is started.  From the DOS prompt A> or C>, type DATE <Enter>.  If the
     date is incorrect, type in a new date in the format mm/dd/yy, for exam-
     ple 12/15/90 <Enter>.

     If you have a hard disk, you must install your program on the hard disk
     before running it.  Instructions for hard disk installation begin on
     page 5.  Be sure also to read about portfolio management features on
     page 8, for some important information.           

                         OPERATION FROM FLOPPY DISKETTES

     The first and most important thing for you to do is to MAKE A WORKING
     COPY.  The original copy of the Stock Charting System has (or, should
     have!) write-protect tabs on it to prevent accidentally writing over it.
     DO NOT try to use the original copy - keep that for backup!  Make at
     least one working copy of the Stock Charting System and then put the
     original in a safe place other than where your computer is.  This place
     should be free of magnetic fields generated by vacuum cleaners, etc.

     You will need a working copy diskette for each original STARTUP or
     PROGRAM diskette you have received, plus one more for a DATA diskette.

     Make a working copy of each STARTUP and PROGRAM diskette.  Normally you
     can use the DISKCOPY program in DOS.  However if the two diskettes have
     different capacities you will have to use FORMAT and then COPY.  Make
     sure all diskettes are labelled correctly, and then skip to the last
     heading on page 3 (you need this in order to print graphs).

     Beginning at the top of the next page are more detailed instructions on
     how to format and copy diskettes, using commands already on your DOS
     diskette.











     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 3 OF 8

                             HOW TO FORMAT DISKETTES

     Insert your DOS diskette in drive A and make sure the A> prompt is visi-
     ble.  Insert a diskette to be formatted in drive B. This can be either a
     new diskette, or one that doesn't have any data you want to keep.  Now
     type the following command:

                                FORMAT B: <Enter>

     You will get a message telling you to insert a diskette in drive B.
     WARNING:  Any data on the diskette in drive B is about to be erased!
     Reply Y <Enter> to begin formatting.  When formatting has completed,
     you will be asked if you want to format another diskette.  Repeat the
     process until you have all the newly formatted diskettes you will need.
     Then reply N <Enter> to return to the DOS prompt.

     *** WARNING! ***  NEVER use FORMAT by itself.  That will format your
     DOS diskette, and wipe out your DOS!


                     HOW TO COPY FROM ONE DISKETTE TO ANOTHER


     Make sure the DOS prompt A> is visible.  Remove your DOS diskette from
     drive A and insert the source diskette (the one you wish to copy) in
     drive A.  Insert the target diskette (the newly formatted diskette you
     are copying TO) in drive B.  Then type the following command:

                               COPY *.* B: <Enter>

     This copies all of the individual files from the diskette in the default
     drive (drive A) onto the working diskette in drive B.  Make sure your
     working diskette is properly labelled, and repeat the above process for
     each original STARTUP or PROGRAM diskette you have received.  Do not put
     write-protect tabs on either the working copies of the STARTUP and
     PROGRAM diskettes or on any data diskettes you plan to use.


                     YOU NEED THIS IN ORDER TO PRINT GRAPHS!


     Insert your DOS diskette in Drive A and make sure the prompt A> is visi-
     ble.  Insert the WORKING COPY of your STARTUP diskette in Drive B.  (The
     STARTUP diskette has the files SM3.EXE and BRUN30.EXE on it).  This
     special program, which should be on your DOS diskette, is required in
     order to print bar and line charts.  Issue the following command from
     the keyboard:

                            COPY GRAPHICS.* B: <Enter>

     Note: In some versions of DOS - especially those from Tandy and Zenith -
     the graphics print program may be called by another name.  Refer to your
     DOS manual, or consult with your dealer's service department.     











     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 4 OF 8

                   OPERATION FROM FLOPPY DISKETTES (continued)

     If you want to print bar and line graphs, you must run the GRAPHICS pro-
     gram BEFORE starting the Stock Charting System.  From the DOS prompt A>,
     with your DOS diskette in drive A, type GRAPHICS <Enter>.  This loads
     into memory the program that will be used by the Stock Charting System
     to print graphs.  The prompt A> will return quickly.

     Now remove any diskette in drive A and insert a WORKING COPY of the
     STARTUP diskette (the one with SM3.EXE and BRUN30.EXE on it).  If there
     is only one diskette, insert that one.  Do NOT try to start with any
     other diskette.  Type SM3 <Enter>.  In just a moment the introductory
     screen will appear!

     If you have not used these programs before, press the H (for HELP) key
     for further information on how to use the system in general.  Then press
     the Enter key to continue.  If you began with the STARTUP diskette, the
     program will prompt you to insert a PROGRAM diskette when it is needed.
     Insert PROGRAM #1 for stock charting or PROGRAM #2 for portfolio manage-
     ment if you have both.  You should now see the Master Menu screen!

     INPORTANT: If you want to use the portfolio manager feature, insert
     PROGRAM #2 FIRST, if you have two program diskettes.

     Once the system is running, all instructions on how to operate it are
     available from within the system itself.  Note that you can press the H
     (for HELP) key to get instructions from any screen that has a menu.
     Please read the HELP screens; they will answer most of your questions.

     There should be some demonstration data files on the STARTUP diskette.
     To work with these files, insert the STARTUP diskette in drive B (if you
     don't have a separate STARTUP diskette, ignore that step and leave your
     startup/program diskette in drive A).  Then press S from the Master Menu
     to go to the Stock Select screen and try out the various menu functions.
     NOTE: You may first have to tell the program what drive your data files
     are on.  Press P and then B: <Enter> to do that; see below also.

     In general you MUST keep your data files (all files with names ending in
     .POR or .SMP) on a separate DATA diskette. To start a new data diskette,
     insert a newly formatted diskette in drive B.  If necessary, from the
     Master Menu screen type P.  When you are asked to enter the path (disk
     drive and/or sub-directory) for data files, type B: <Enter>.  After a
     moment, the prompt "Are you starting a new data disk (Y=Yes, N=No)?"
     will appear; reply Y.  The program has recognized the empty diskette in
     drive B and will automatically start asking you for information about
     the first stock (or other type of security).  For more information at
     that time, press Esc and then press H for HELP.

     The program always remembers the previous path for data files, so that
     in the future, just insert your data diskette in drive B.  Right after
     the introductory screen, the program will go directly to the Master
     Menu and show you what the current path is.  You can change it any time.
     WARNING: Do NOT switch data disks unless you see the Master Menu or you
     are otherwise prompted to do so.










     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 5 OF 8

                           INSTALLATION ON A HARD DISK

     Installation is the process of transferring the original of a program
     onto a hard disk, and setting it up to operate with your particular
     computer.  Installation on a hard disk drive usually consists of three
     steps:  First, making a sub-directory; second, copying the required
     files; and third, creating a batch file.  The last step is optional but
     still very desirable.

     The Stock Charting System programs should reside in their own dedicated
     sub-directory. This sub-directory may be called \SM or \STOCKS or \CHART
     or whatever you want, up to 8 characters, but for explanatory purposes
     here it will be called \SM3PROG (for Stock Market Release 3 Programs).
     (See page 7 for information on sub-directories and how to make one).
     Now make this the current sub-directory by typing CD \SM3PROG <Enter>.
     This completes the first step.

     Insert an original Stock Charting System diskette in Drive A.  Copy all
     the files to the hard disk by typing  COPY  A:*.*  /V <Enter>.  If your
     version of the Stock Charting System was received on more than one disk-
     ette, copy all files on EACH of them (in any order) to the hard disk.  
     You can omit the README and .DOC files.  This completes the second step.

     Getting the Stock Charting System to run will require several commands.
     The next thing to do is to create a batch file to start the Stock Chart-
     ing system.  A batch file contains one or more DOS commands and has the
     extension .BAT. When you type the name of a batch file, all the commands
     in that batch file are executed, just as if you had typed them individu-
     ally from the keyboard.

     A batch file should reside in the root directory; so switch back there
     by entering the command CD \ <Enter>.  A file can be created by copying
     directly from the keyboard (CON:) to that file on disk.  Type the fol-
     lowing commands:
                            COPY CON: SM3.BAT <Enter>
                            CD \SM3PROG <Enter>
                            GRAPHICS <Enter>
                            SM3 <Enter>
                            CD \ <Enter>
                            <F6> <Enter>

     Leave out CD \ if you don't wish to return to the root directory upon
     termination of the Stock Charting System.  <F6> means press the F6 key
     (this is a function key on the left side or the top of your keyboard).
     You should see the message "1 file(s) copied" and the DOS prompt C>\.
     The Stock Charting System can now be started from the root directory
     with the single command SM3 <Enter>.

     If GRAPHICS.COM is not found, you will get a "command not found" message
     when trying to load it.  It should be in the same directory as your DOS.
     Your AUTOEXEC.BAT file should contain a PATH statement such as the fol-
     lowing:  PATH  C:\DOS; C:\. If not, you will have to either add the PATH
     statement to the AUTOEXEC.BAT file, or copy the GRAPHICS.COM file to the
     \SM3PROG directory.  If GRAPHICS.COM is not loaded BEFORE you run the
     Stock Charting System, the bar graphs will not be printed correctly; you
     will get letters and numbers but no lines.








     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 6 OF 8

                           OPERATION FROM A HARD DISK

     NOTE:  In some Heath, Zenith and Tandy versions of DOS, the graphics
     print program may have a different name, depending on the type of
     printer you are using.  Check your DOS manual, or see your dealer.

     From your root directory, begin operation of the Stock Charting System
     with the command SM3 <Enter>.  In just a moment, the introductory screen
     should appear!  If you have not used these programs before, press the H
     (for HELP) key for further instructions on how to use the system in gen-
     eral.  Then, press the Enter key to continue on to the Master Menu.

     Some demonstration data files should be in the program sub-directory.
     To work with these files, the path for data files should be the default
     directory.  If it isn't, press P and then <Enter> from the Master Menu.
     Then press S to go to the Stock Select screen, and try out the various
     functions.

     Once the Stock Charting System is running, all instructions on how to
     operate it are available from within the system itself.  Note that you
     can press the H (for HELP) key to get instructions from any screen that
     has a menu.  Please read the HELP screens; they will answer most of your
     questions.

     You should keep your data files (CATALOG.POR and all files with names
     ending in .SMP) in their own sub-directory, to facilitate directory
     management.  It will be assumed here that data files are to reside in
     a sub-directory called \SMDATA\.  You can have up to 127 different
     securities in each sub-directory, and you can have as many sub-direct-
     ories as your disk drive has the space for!

     From the Master Menu screen, press P (for PATH).  When asked to enter
     the path for data files, type \SMDATA\ <Enter>.  Then use the S function
     from the Master Menu to go to the Stock Select screen.

     A "path" is a disk drive letter and/or sub-directory name, for example
     B: or \SMDATA\ or C:\SM\FUNDS\.  If you specify an invalid or non-
     existing path, you will get an error message so you can try again.
     Note:  This is not related to the PATH command in DOS.

     Since the new sub-directory doesn't have a catalog (file CATALOG.POR),
     you will be asked, "Are you starting a new data disk (Y=Yes, N=No)?". 
     Reply Y and the program will create the catalog and automatically start
     asking you for information about the first stock (or other type of secur-
     ity).  For more information at that time, press Esc and then press H
     for HELP. 

     The program always remembers the previously entered path for data files.
     So, right after the introductory screen the program will continue dir-
     ectly to the Master Menu.  You can change the path for data files at any
     time by using the P function.  













     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 7 OF 8

                  WHAT IS A "SUB-DIRECTORY", AND HOW TO MAKE ONE

     A hard disk can contain hundreds of files, which could make management
     of its directory very difficult.  Therefore a hard disk usually contains
     a "root" directory and a number of "sub-directories", organized in a
     "tree" structure. The root directory is the main directory and is always
     present.  It is like the trunk of a tree, and can contain any number of
     sub-directories, which are like branches of a tree.  Also, sub-direc-
     tories can contain other sub-directories, up to many different levels
     just like the many branches of a tree.

     Another way to look at it is, the root directory on a disk is like the
     master index to a big book, and the sub-directory is like the index to
     an individual chapter. It is recommended to keep the directory structure
     simple, with only one sub-directory level if possible.  Floppy diskettes
     can also have sub-directories but usually they don't - while hard disks,
     with their larger capacity, usually do.

     Usually, sub-directories contain individual categories of programs or
     other files.  For example word processing programs can be in one sub-
     directory, documents in another, spreadsheets in another, etc.  Ideally,
     the root directory should contain only sub-directories, batch files and
     certain other system files; DOS usually resides in its own sub-directory
     with the appropriate name of \DOS\.

     The Stock Charting System programs should reside in their own dedicated
     sub-directory.  To make a sub-directory, first make the root directory
     active by typing CD \ <Enter>. Note the back-slash (\) is different from
     the regular forward slash (/).  Sub-directory names are just like any
     other file names except they always start with the back-slash (\).  The
     root directory has no name and is just called \.

     Sub-directory names must be unique within the directory that contains
     them.  To look at sub-directory names, use DIR /W <Enter>.  Sub-direc-
     tories are identified by the caption <DIR>.  It is permissible for a
     sub-directory name to be the same as a file name, for example SM3 can
     exist as a directory and again as a batch file such as SM3.BAT.

     Now enter the DOS command to "Make a Directory". Type in MD \xxx <Enter>
     where xxx denotes a name 1 to 8 characters in length - for example type
     MD \SM3PROG <Enter>. For best results, use only letters and/or numerals.
     If no error message appears and the DOS prompt C> re-appears, the sub-
     directory now exists.  While you are at it, you can make another sub-
     directory for data files, for example type MD \SMDATA <Enter>.  To make
     the program sub-directory active, type CD \SM3PROG <Enter>.

     WARNING: If you are not in the ROOT directory when you make a sub-direc-
     tory, that sub-directory will be under the CURRENT directory that is
     active at that time.  For example, if the current directory is \SM3PROG
     and you make a sub-directory called \SMDATA, you will have to enter the
     entire path name \SM3PROG\SMDATA\ in order to get to it.  It's usually
     better to keep things as simple as possible.

     If you can't find your data sub-directory, it may have been placed acci-
     dentally in another sub-directory rather than in the root directory.









     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 8 OF 8

                           PORTFOLIO ANALYSIS FEATURES

     This release of the Stock Charting System contains a built-in portfolio
     "manager".  The author also has another software product known as the
     Personal Portfolio Analyzer.  The two products have some common features
     such as the ability to manage any number of different portfolios and a
     similar user interface for adding securities and for buying and selling.

     The differences are: the portfolio manager in the Stock Charting System
     takes security prices directly from the stock charts and is designed
     specifically to calculate portfolio total return over any time period
     for which market values are available.  The Personal Portfolio Analyzer
     requires user data entry of current prices; but it has income and tax
     analysis and budgeting features which the Stock Charting System doesn't
     have.  Thus, it is a stand-alone program, fully functional in itself.

     If you don't have the Personal Portfolio Analyzer, you can get more
     information about it directly from the author.  The rest of the informa-
     tion on this page will not apply to you.

     If you are using the Personal Portfolio Analyzer, this version of the
     Stock Charting System can read and use its catalog file.  The reverse
     is also true; the Portfolio Analyzer can read and use the Stock Charting
     System's catalog file.  Thus, a high degree of integration can be main-
     tained between the two program products.

     For this to happen, two conditions MUST be met:  First, all DATA files
     for BOTH systems must be in the SAME directory (or on the same disk-
     ette); and second, you MUST have Release 2.12 or a later version of the
     Personal Portfolio Analyzer.  If you have Release 2.04, 2,10 or 2.11,
     you MUST upgrade because those versions have a "gremlin" that may des-
     troy certain data items the Stock Charting System uses from the catalog.
     This upgrade is FREE to REGISTERED users of both program products - just
     ask for it if you don't already have it.

     Once those two conditions are met, any security you add in the Stock
     Charting System will automatically appear in the Personal Portfolio
     Analyzer, and vice versa.  There are a few data items (such as taxabil-
     ity and earnings) that are used in only one of the programs, and you may
     have to switch to the other program product to enter those items.

     If you have TWO catalog files in separate directories, there is no way
     at the present time to have the computer combine them into a single cat-
     alog.  It is recommended to use the one from the Stock Charting System
     and then manually type in any missing entries from the other catalog.
     Also, copy your portfolios into the Stock Charting System's directory.

     The maximum number of catalog entries is limited to 127.  If that isn't
     enough, you can have any number of separate catalogs in different direc-
     tories.  Thus you could have a separate catalog (in a different direc-
     tory) for municipal bonds, treasury bills and other securities for which
     you don't want to maintain price history files.
```
{% endraw %}

## README.DOC

{% raw %}
```
                       STOCK CHARTING SYSTEM - RELEASE 3

To obtain directions on how to get these programs running, first make sure you
are in DOS.  You should see the prompt A> (or C> if you are on a hard disk).
Remove your DOS diskette and insert the Stock Charting System STARTUP diskette
in drive A.  Turn on your printer and make sure it is ready to print.  Most
printers have a ready light, and it should be on.  Then type one of the follow-
ing commands:

   COPY A:NEWUSER.DOC LPT1:   (if you are a new user)

   COPY A:UPGRADE.DOC LPT1:   (if you are upgrading from any previous
                               version which you have been using)

   COPY A:INSTALL.DOC LPT1:   (if none of the above files are on your disk)

and press the ENTER key.  Eight pages of information will be printed, and the
output will be paginated with pages numbered.  All other user documentation
is available from within the Stock Charting System itself, in the form of
context-sensitive HELP screens.
```
{% endraw %}

## UPGRADE.DOC

{% raw %}
```
     STOCK CHARTING SYSTEM - RELEASE 3.1 (SHAREWARE VERSION)      PAGE 1 OF 8

           INSTALLATION GUIDE FOR UPDATING FROM A PREVIOUS VERSION ONLY    

           (C)  Copyright 1988-91 Charles L. Pack - All Rights Reserved
                           WRITTEN BY: Charles L. Pack
                 25303 La Loma Drive, Los Altos Hills, CA. 94022
                 Phone: (415) 949-0887 (no collect calls please)

     Permission is granted to try out this software, to make backup copies,
     and to copy and share it with others.  License for use is granted ONLY
     to individual persons who have registered directly with the author.
     Clubs, user groups and other institutions are authorized to distribute
     this software COMPLETE and UN-ALTERED for a "disk fee" not to exceed
     $25.00.  The author makes no warranties or guarantees, express or im-
     plied, and makes no recommendations to buy or sell any security.                                               

     Suggestions and comments are welcome, and may be submitted directly to
     the author at the above address.

     NOTE:  This document pertains ONLY to those who are UPGRADING from an
     earlier version which has already been in use.  For NEW USERS, print or
     display the document NEWUSER.DOC and follow those instructions instead.

                         HARDWARE/SOFTWARE REQUIREMENTS

     This version of the Stock Charting System requires either TWO floppy
     drives or one floppy drive AND a hard drive.  A color graphics adapter
     (CGA, EGA or VGA) or equivalent is required for displaying or printing
     bar and line charts.  The IBM PS/1 and PS/2, and some other computers
     with VGA graphics, will require a color monitor.  An Epson-compatible
     graphics printer is required for printing the charts.  IBM DOS or PC-DOS
     version 2.0 or later versions are supported.

     This program is compatible with the Personal Portfolio Analyzer, Release
     2.12 or later.  Data files for BOTH programs may exist on the same dir-
     ectory, and both programs can use the same catalog (list of securities).
     Therefore any security that exists in one program can automatically exist
     in the other.  WARNING: If you have an earlier version of the Personal
     Portfolio Analyzer, you MUST upgrade to Release 2.12.  See page 8 for
     more information.

                   SPECIAL INFORMATION ABOUT HERCULES GRAPHICS

     If you are using a computer equipped with a Hercules or equivalent
     "monographics" display, you MUST have a special software simulator to
     display the bar charts.  That software is NOT a part of the Stock
     Charting System.  The author recommends a product called HGCIBM.COM,
     which is available as user-supported software from many "shareware"
     distributors.  The instructions for use with HGCIBM.COM are not inclu-
     ded in this document, but they will come with that product, and you
     should follow those instructions for installation. 

     NOTE: The HGCIBM.COM program must be installed - with the required
     software switch settings - BEFORE starting the Stock Charting System.
     It makes no difference whether it is installed before or after GRAPHICS
     is loaded.  Also, it should be "un-installed" after you are finished,
     if you are running other programs that use Hercules graphics directly.








     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 2 OF 8

         HOW TO GET THE STOCK CHARTING SYSTEM RUNNING AS SOON AS POSSIBLE

     In this document, abbreviations are used to denote certain actions.  The
     < > symbols indicate a particular key to be pressed, for example <Enter>
     means "press the Enter key".  The Enter key is used to indicate you are
     finished entering a command or a data item.  <Enter> need not be pre-
     ceeded by a space even though it is done in this document for clarity.

     Some keys, such as the Esc (escape) and Ctrl (control) keys, may be in
     different positions on different keyboards.  You may have to look, or
     consult your computer operations manual to find them.  The Enter key has
     a funny hooked arrow on it.  The Ctrl key is usually near the left side.
     The Esc key is usually in or near the top row.  It can be used to get
     out of virtually any situation you don't want to be in.

     Commands typed into DOS may be in uppercase (CAPITAL letters) or lower-
     case; for example COPY, Copy and copy are all interpreted in the same
     way.  In this document, commands will be shown in uppercase.

     The Stock Charting System may use the DOS system date as a default param-
     eter, and also to compute trading periods when adding a new security.
     Therefore, it is important to enter the correct date when the computer
     is started.  From the DOS prompt A> or C>, type DATE <Enter>.  If the
     date is incorrect, type in a new date in the format mm/dd/yy, for exam-
     ple 12/15/90 <Enter>.  

     If you have a hard disk, you must install your program on the hard disk
     before running it.  Instructions for hard disk installation begin on
     page 5.           


                         OPERATION FROM FLOPPY DISKETTES

     The first and most important thing for you to do is to MAKE A WORKING
     COPY.  The original copy of the Stock Charting System has (or, should
     have!) write-protect tabs on it to prevent accidentally writing over it.
     DO NOT try to use the original copy - keep that for backup!  Make at
     least one working copy of the Stock Charting System and then put the
     original in a safe place other than where your computer is.  This place
     should be free of magnetic fields generated by vacuum cleaners, etc.

     You will need a working copy diskette for each original STARTUP or
     PROGRAM diskette you have received.

     Make a working copy of each STARTUP and PROGRAM diskette.  Normally you
     can use the DISKCOPY program in DOS.  However if the two diskettes have
     different capacities you will have to use FORMAT and then COPY.  Make
     sure all diskettes are labelled correctly, and then skip to the last
     heading on page 3 (you need this in order to print graphs).

     Beginning at the top of the next page are more detailed instructions on
     how to format and copy diskettes, using commands already on your DOS
     diskette.











     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 3 OF 8

                             HOW TO FORMAT DISKETTES

     Insert your DOS diskette in drive A and make sure the A> prompt is visi-
     ble.  Insert a diskette to be formatted in drive B. This can be either a
     new diskette, or one that doesn't have any data you want to keep.  Now
     type the following command:

                                FORMAT B: <Enter>

     You will get a message telling you to insert a diskette in drive B.
     WARNING:  Any data on the diskette in drive B is about to be erased!
     Reply Y <Enter> to begin formatting.  When formatting has completed,
     you will be asked if you want to format another diskette.  Repeat the
     process until you have all the newly formatted diskettes you will need.
     Then reply N <Enter> to return to the DOS prompt.

     *** WARNING! ***  NEVER use FORMAT by itself.  That will format your
     DOS diskette, and wipe out your DOS!


                     HOW TO COPY FROM ONE DISKETTE TO ANOTHER


     Make sure the DOS prompt A> is visible.  Remove your DOS diskette from
     drive A and insert the source diskette (the one you wish to copy) in
     drive A.  Insert the target diskette (the newly formatted diskette you
     are copying TO) in drive B.  Then type the following command:

                               COPY *.* B: <Enter>

     This copies all of the individual files from the diskette in the default
     drive (drive A) onto the working diskette in drive B.  Make sure your
     working diskette is properly labelled, and repeat the above process for
     each original STARTUP or PROGRAM diskette you have received.  DO not put
     write-protect tabs on either the working copies of the STARTUP and
     PROGRAM diskettes or on any data diskettes you plan to use.


                     YOU NEED THIS IN ORDER TO PRINT GRAPHS!


     Insert your DOS diskette in drive A and make sure the prompt A> is visi-
     ble.  Insert the WORKING COPY of your STARTUP diskette in drive B.  (The
     STARTUP diskette has the files SM3.EXE and BRUN30.EXE on it).  This
     special program, which should be on your DOS diskette, is required in
     order to print bar and line charts.  Issue the following command from
     the keyboard:

                            COPY GRAPHICS.* B: <Enter>

     Note: In some versions of DOS - especially those from Tandy and Zenith -
     the graphics print program may be called by another name.  Refer to your
     DOS manual, or consult with your dealer's service department.











     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 4 OF 8

                   OPERATION FROM FLOPPY DISKETTES (continued)

     If you want to print bar and line graphs, you must run the GRAPHICS pro-
     gram BEFORE starting the Stock Charting System.  From the DOS prompt A>,
     with your DOS diskette in drive A, type GRAPHICS <Enter>.  This loads
     into memory the program that will be used by the Stock Charting System
     to print graphs.  The prompt A> will return quickly.

     Now remove any diskette in drive A and insert a WORKING COPY of the
     STARTUP diskette (the one with SM3.EXE and BRUN30.EXE on it).  If there
     is only one diskette, insert that one.  Do NOT try to start with any
     other diskette.  Type SM3 <Enter>.  In just a moment the introductory
     screen will appear!

     Press the Enter key to get out of the introductory screen.  The program
     will automatically prompt you to insert a PROGRAM diskette when it is
     needed; insert PROGRAM #1 for stock charting or PROGRAM #2 for portfolio
     management if you have both.  You should now see the Master Menu screen!

     Important:  If you plan to use the portfolio analysis feature, insert
     PROGRAM #2 first, if you have two program diskettes.

     Once the system is running, all instructions on how to operate it are
     available from within the system itself.  Note that you can press the H
     (for HELP) key to get instructions from any screen that has a menu.
     Please read the HELP screens; they will answer most of your questions
     and explain all of the new features of the system.

     There should be some demonstration data files on the STARTUP diskette.
     To work with these files, insert the STARTUP diskette in drive B (if you
     don't have a separate STARTUP diskette, ignore that step and leave your
     startup/program diskette in drive A).  Then press S from the Master Menu
     to go to the Stock Select screen and try out the various menu functions.
     NOTE: You may first have to tell the program what drive your data files
     are on.  Press P and then B: <Enter> to do that; see below also.

     In the Stock Charting System, Release 3.0 and later, generally you MUST
     keep your data files (all files with names ending in .SMX, .SMP or .POR)
     on a separate DATA diskette.  You can use your old price history files
     from any previous version of the system.  To do this, first make sure
     you are in the Master Menu; do NOT switch data diskettes at any other
     time unless prompted to do so.  Insert your old DATA diskette in drive
     B.  If necessary, press P and then B: <enter> to tell the system where
     your data is.  Now press S, and momentarily the Stock Select screen
     should appear.

     Turn to Page 7 of this document now for information on using your old
     existing data files.
















     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 5 OF 8

                 UPGRADING FROM AN OLDER VERSION ON A HARD DISK

     This assumes you want to replace your old copy of the Stock Charting
     System with the new version. If you want to keep the old version intact,
     install the new one in a separate sub-directory such as \SM3PROG.  You
     would then skip this next step, which will delete the old program files.

     Get into DOS, as indicated by the prompt C>. Make the sub-directory that
     contains the Stock Charting System PROGRAMS the currently active direc-
     tory.  For example use the command CD \SM <Enter>.  Use the DIR command
     to make sure you are in the correct directory.  Now type in the follow-
     ing commands:

                   ERASE *.BAT   <Enter>  (old batch files)
                   ERASE *.DOC   <Enter>  (old documentation) 
                   ERASE SM*.CTL <Enter>  (setup files)
                   ERASE SM*.BAS <Enter>  (2.3 & earlier programs)
                   ERASE SM*.EXE <Enter>  (2.40 & later programs)
                   ERASE SM*.H*  <Enter>  (old HELP screens)
                   ERASE RELEASE*.* <Enter>  (old release number)

     Note: the .CTL file may be absent if you were using a version earlier
     than 1.7.  Re-check with the DIR command to make sure you deleted the
     correct files. Do NOT delete any old data files you want to keep, but
     MAKE SURE THEY ARE BACKED UP.  (Data files include all files with the
     extensions .POR, .SMP or .SMX).

     Now, insert the original copy of the Stock Charting System (Release 3.1)
     in drive A.  You will need to copy some, but not all, of the files onto
     your hard disk.  Type in the following commands:

                           COPY A:SM*.CTL /V <Enter>
                           COPY A:SM*.EXE /V <Enter>
                           COPY A:SM*.HLP /V <Enter>
                           COPY A:RELEASE*.* /V <Enter>

     If you received the Stock Charting System on more than one diskette,
     repeat the above procedure for EACH diskette; it doesn't matter which
     one is copied first.  Some files may be duplicated on more than one
     diskette.  This was done to facilitate operation without a hard disk
     and will not affect the installation procedure.

     Note: an old copy of SMSETUP3.CTL will not work with the new version of
     the program.  If you try to use the old SMSETUP3.CTL, you will get an
     error message saying the file is defective, and the program won't run. 

     Don't copy any of the sample data files (CATALOG.POR and files with the
     extension .SMP).  This will wipe out existing data files you may want
     to keep.















     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 6 OF 8

            UPGRADING FROM AN OLDER VERSION ON A HARD DISK (continued)

     If you are upgrading from Release 2.55 or earlier, you will have to mod-
     ify the batch (.BAT) file which starts the program.  It is suggested you
     call it SM3.BAT.  For best results, it should be located in the root
     directory of your hard disk (C:\) and not in a sub-directory.  To create
     a new batch file, enter the following commands (substitute the correct
     path for \SM):

                              COPY CON: SM3.BAT <enter>
                              CD \SM <enter>
                              GRAPHICS <enter>
                              SM3 <enter>
                              CD \ <enter>
                              <F6> <enter>

     <F6> means "press the function key labelled F6".  It is on the left side
     or in the top row of your keyboard.

     If you want to print bar or line graphs, you must run the GRAPHICS pro-
     gram - which should be in your DOS directory - BEFORE starting the Stock
     Charting System.  This loads into memory the program that is used by the
     Stock Charting System to print graphics.  In the above example you must
     either have a copy of GRAPHICS in the Stock Charting System PROGRAM dir-
     ectory, or have an entry in a PATH statement in your batch (.BAT) file,
     or otherwise supply the path to where GRAPHICS is.

     If the above batch file doesn't give you correct printed graphics (some
     letters and numbers but no lines) - and you don't understand the prev-
     ious paragraph, proceed as follows:  First, find out where GRAPHICS is
     located.  Usually, when you buy a computer with a hard disk, the dealer
     sets it up for you.  Look for a directory called \DOS; the GRAPHICS pro-
     gram should be in that directory.  If \DOS doesn't exist, GRAPHICS may
     be in the root directory, or perhaps in a directory called \UTIL.  You
     should find an entry named GRAPHICS.EXE or GRAPHICS.COM.

     Once you find GRAPHICS, note what directory it's in.  Let's say it's in
     a directory called \DOS which you get to by typing CD \DOS from the root
     directory.  (The root directory is C:\ - it has no name).  Now you need
     to alter the batch file in the example above so that GRAPHICS is quali-
     fied by the correct path - for example \DOS\GRAPHICS.  Now it should
     work!

     If your printer gives you a lot of unrecognizable gibberish, there is a
     compatibility problem.  Your printer should have a mode that emulates
     the Epson command set.  Most printers have such a mode. If you are using
     a Hewlett-Packard DeskJet printer, it will need a special plug-in car-
     tridge.  Your printer dealer should be able to help resolve almost any
     compatibility problem.















     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 7 OF 8

            USING YOUR OLD ALREADY-EXISTING DATA FILES (STOCK CHARTS)

     In Release 3.0 and later versions of the Stock Charting System, normally
     you MUST keep your data files (all files with names ending in .SMX, .SMP
     or .POR) in a separate directory or on a separate diskette from your
     programs.  You CAN use your old price history files (files with names
     ending in .SMP) from any previous version of the Stock Charting System.

     If you are upgrading from Release 2.5 or earlier, you CANNOT use the
     list of stocks (file INDEXFIL.SMX).  You will have to start a new cata-
     log and re-add all of your securities.  (Registered users get a feature
     that can automatically convert the list of stocks to the new CATALOG.POR
     file format.)

     To start a new catalog, first make sure you are in the Master Menu.
     If you are running from floppy diskettes, insert your existing DATA
     diskette in drive B:.  Do NOT switch data diskettes at any other time
     unless prompted to do so.  If not already done earlier, press P and then
     enter the path for your data - for example  B: <Enter>  or  \SMDATA\
     <Enter>.  If no catalog is found in that directory (even if .SMX and
     .SMP files already exist), the program will ask if you wish to start a
     new data disk.  Reply Y for Yes.  A Stock Select screen will appear and
     you can start adding securities.

     Release 3.0 and later versions of the Stock Charting System will use and
     maintain CATALOG.POR but will ignore INDEXFIL.SMX.  Release 2.5 and old-
     er versions use INDEXFIL.SMX but will ignore CATALOG.POR.  You can still
     run the old stock charting system if you wish.

     The index file (INDEXFIL.SMX) and the catalog file (CATALOG.POR) each
     serve the same purpose - they contain the list of securities which you
     see on the Stock Select screen.  But the catalog file contains more in-
     formation, and affords compatibility with portfolio analysis features.
     Those features need some information (such as security type) which the
     older stock charting programs don't use.  See Page 8 of this document
     for more information.




























     STOCK CHARTING SYSTEM - RELEASE 3.1                          PAGE 8 OF 8

                           PORTFOLIO ANALYSIS FEATURES

     This release of the Stock Charting System contains a built-in portfolio
     "manager".  The author also has another software product known as the
     Personal Portfolio Analyzer.  The two products have some common features
     such as the ability to manage any number of different portfolios and a
     similar user interface for adding securities and for buying and selling.

     The differences are: the portfolio manager in the Stock Charting System
     takes security prices directly from the stock charts and is designed
     specifically to calculate portfolio total return over any time period
     for which market values are available.  The Personal Portfolio Analyzer
     requires user data entry of current prices; but it has income and tax
     analysis and budgeting features which the Stock Charting System doesn't
     have.  Thus, it is a stand-alone program, fully functional in itself.

     If you don't have the Personal Portfolio Analyzer, you can get more
     information about it directly from the author.  The rest of the informa-
     tion on this page will not apply to you.

     If you are using the Personal Portfolio Analyzer, this version of the
     Stock Charting System can read and use its catalog file.  The reverse
     is also true; the Portfolio Analyzer can read and use the Stock Charting
     System's catalog file.  Thus, a high degree of integration can be main-
     tained between the two program products.

     For this to happen, two conditions MUST be met:  First, all DATA files
     for BOTH systems must be in the SAME directory (or on the same disk-
     ette); and second, you MUST have Release 2.12 or a later version of the
     Personal Portfolio Analyzer.  If you have Release 2.04, 2,10 or 2.11,
     you MUST upgrade because those versions have a "gremlin" that may des-
     troy certain data items the Stock Charting System uses from the catalog.
     This upgrade is FREE to REGISTERED users of both program products - just
     ask for it if you don't already have it.

     Once those two conditions are met, any security you add in the Stock
     Charting System will automatically appear in the Personal Portfolio
     Analyzer, and vice versa.  There are a few data items (such as taxabil-
     ity and earnings) that are used in only one of the programs, and you may
     have to switch to the other program product to enter those items.

     If you have TWO catalog files in separate directories, there is no way
     at the present time to have the computer combine them into a single cat-
     alog.  It is suggested to use the catalog file from the Stock Charting
     System.  Any missing entries that are in the other catalog can be added
     again.  Move your portfolio files into the Stock Charting System's data
     directory.

     The maximum number of catalog entries is limited to 127.  If that isn't
     enough, you can have any number of separate catalogs in different direc-
     tories.  Thus you could have a separate catalog (in a different direc-
     tory) for municipal bonds, treasury bills and other securities for which
     you don't want to maintain price history files.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2828

     Volume in drive A has no label
     Directory of A:\

    SMSETUP3 CTL       128   7-15-91
    CATALOG  POR     16384   7-15-91
    DEMOFILE POR     16384   7-15-91
    DABT     SMP     10240   7-15-91
    DDJIND   SMP     10240   7-15-91
    DEK      SMP     10240   7-15-91
    DSCE     SMP     10240   7-15-91
    WABT     SMP      4096   7-15-91
    WDJIND   SMP      4096   7-15-91
    WEK      SMP      4096   7-15-91
    WSCE     SMP      4096   7-15-91
    SM3      EXE     17889   7-15-91
    BRUN30   EXE     70680   4-07-87  10:48a
    SMSTART3 HLP      7709   7-15-91
    SMPINFO3 HLP      4959   7-15-91
    NEWUSER  DOC     26299   7-15-91
    UPGRADE  DOC     23721   7-15-91
    README   DOC      1013   7-15-91
    RELEASE3 11        182   7-15-91
    GO       BAT        32   8-28-91  11:30p
    FILE2828 TXT      1555   9-10-91   1:03p
           21 file(s)     244279 bytes
                           71680 bytes free
