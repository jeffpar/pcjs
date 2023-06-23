---
layout: page
title: "PC-SIG Diskette Library (Disk #1904)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1904/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1904"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EVALUATE/KYM-DISK UTILITY"

    EVALUATE fills a niche in the computer mathematical analysis market.
    Although there are many calculator emulators, there are not many
    programs that allow you to enter complex equations as they are
    written and then, by hitting the return key, get them solved.  In fact,
    EVALUATE solves as you write, providing intermediate results whenever
    there are enough logical operators entered.
    
    EVALUATE will solve problems such as pi^2*sin(log(tan(x1)))
    if you enter them as written.  This can be accomplished via a dialogue
    box or simply by entering the formulae at the command line.  A very
    wide variety of operations are supported, including sophisticated date
    and statistical functions.  It can operate in terminate and stay
    resident (TSR) pop-up mode, and can print its results.
    
    KYM-DISK is a collection of utilities, including a copy program, a
    directory deleter, a file mover, a hard disk access time checker, and a
    program to display DOS's internal disk parameter table. Source files
    (Turbo 2.0) are included.
    
    ~ MOVE enables you to move files and subdirectories from one directory
    to another. It does not copy physically, but rearranges the disk
    directory tree structure in a suitable manner.
    
    ~ YCOPY, a DOS XCOPY-like copy utility, with which files and whole
    directory structures can be copied.
    
    ~ KILLDIR erases a directory and its complete contents.
    
    ~ HD-SPEED measures your hard disk's average cylinder access time.
    
    ~ DISKPARA displays DOS' internal disk parameter table.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.DOC

{% raw %}
```

  Program EVALUATE: list of files
  ===============================

  eval    .exe     -    the ultimate evaluator/calculator

  eval    .doc     -    manual - read first

  whatsnew.doc     -    describes what is new in this version of EVALUATE

  files   .doc     -    this file

```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

       Program EVALUATE - What is new in this release ?
       ================================================

v1.33 dated June 11, 1990
-------------------------
- printer supported (see manual)
- variable hotkey
- new command line options /h and /?
- some major and minor bugs fixed

v1.2 dated Oct 22, 1989
-----------------------
- memory resident mode (TSR). Command line options:
  /tsr      (install program memory resident)
  /kill     (remove previously installed program from memory)
  See detailed description in manual.

- 4 new functions:
  --  random x     returns a random number between 1 and x
  --  ticks()      returns seconds since 0:00 h
  --  sound x      turns speaker on at specified frequency, returns x
  --  nosound()    turns speaker off, returns zero


v1.12 dated Oct 07, 1989
------------------------
- bug fixed:
  plus operator was misinterpreted in some cases: 123.+4 resulted in 123.04
  instead of 127.


v1.1 dated Oct 02, 1989
-----------------------

- percent calculation (see manual).

- variable x in addition to x1 to x9
  x always holds the previous evaluated result.

- in command line mode the output is not poked on the screen directly
  anymore. It is sent to stdout instead, which means that it can be
  redirected into a file.

- besides the F1 help menu, the help screens can be accessed directly
  by SHIFT-F1 to SHIFT-F10.

- parameter 'color set' added to setup menu/misc.parameters. LCD-users
  can fix black&white color set. See manual.

- well-defined return codes (see manual).

- some bugs of prior version fixed:
  --  0*1 resulted into underflow, while 1*0 was correct
  --  -1e307-1e307 caused a program termination, while 1e307+1e307 gave
      an overflow error message correctly
  --  1e20! caused a program termination


v1.02 dated Feb 26, 1989
------------------------
- better performance


v1.0 dated Feb 07, 1989
-----------------------
- first version ever released
```
{% endraw %}

## FILE1904.TXT

{% raw %}
```
Disk No: 1904                                                           
Disk Title: Evaluate/Kym-Disk Utility                                   
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Evaluate                                                 
Author Version: 1.33                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
EVALUATE fills a niche in the computer mathematical analysis market.    
Although there are many calculator emulators, there are not many        
programs that allow you to enter complex equations as they are          
written and then, by hitting the return key, get them solved.  In fact, 
EVALUATE solves as you write, providing intermediate results whenever   
there are enough logical operators entered.                             
                                                                        
EVALUATE will solve problems such as pi^2*sin(*log(tan(x1)))            
if you enter them as written.  This can be accomplished via a dialog    
box or simply by entering the formulae at the command line.  A very     
wide variety of operations are supported, including sophisticated       
date and statistical functions.  Source files (Turbo C 2.0) are also    
provided.                                                               
Program Title: KYM-Disk Utility                                         
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
KYM-DISK is a collection of utilties, including a copy program, a       
directory deleter, a file mover, a hard disk access time checker,       
and a program to display DOS's internal disk parameter table.           
                                                                        
~ MOVE enables you to move files and subdirectories from one directory  
to another.  It does not copy physically, but rearranges the disk       
directory tree structure in a suitable manner.                          
                                                                        
~ YCOPY, a DOS XCOPY-like copy utility, with which files and whole      
directory structures can be copied.                                     
                                                                        
~ KILLDIR erases a directory and its complete contents.                 
                                                                        
~ HD-SPEED measures your hard disk's average cylinder access time.      
                                                                        
~ DISKPARA displays DOS' internal disk parameter table.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.DOC

{% raw %}
```

FILES.DOC:   (List of files)
============================

README   DOC      809            read this file first (general information)

FILES    DOC     1019            you are just reading this file

MOVE     EXE    19840            MOVE v1.0  		   program
MOVE     DOC    10053            MOVE v1.0  		   documentation

YCOPY    EXE    16534            YCOPY v1.0  		   program
YCOPY    DOC     5689            YCOPY v1.0  		   documentation

KILLDIR  EXE    12658            KILLDIR v1.0  		   program
KILLDIR  DOC     2804            KILLDIR v1.0              documentation

DISKPARA EXE     8230            DISKPARA                  program
DISKPARA DOC      690            DISKPARA                  documentation

HD_SPEED COM     7568            HD_SPEED                  program
HD_SPEED DOC      903		 HD_SPEED                  documentation

KYM_SRC  COM    40322            self extracting archive file,
				 containing source of above programs

(all programs are public domain)

```
{% endraw %}

## FILES~1.DOC

{% raw %}
```

  Program EVALUATE: list of files
  ===============================

  eval    .exe     -    the ultimate evaluator/calculator

  eval    .doc     -    manual - read first

  whatsnew.doc     -    describes what is new in this version of EVALUATE

  files   .doc     -    this file

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #1904  EVALUATE/KYM_DISK UTILITIES  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program EVAL, type: EVALUATE\EVAL  (press enter)               ║
║ To print documentation, type: COPY EVALUATE\EVAL.DOC PRN                ║
║                                                                         ║
║ To start program MOVE, type: KYM_DISK\MOVE  (press enter)               ║
║ To print documentation, type: COPY KYM_DISK\MOVE.DOC PRN                ║
║                                                                         ║
║ To start program DISKPARA, type: KYM_DISK\DISKPARA  (press enter)       ║
║ To print documentation, type: COPY KYM_DISK\DISKPARA.DOC PRN            ║  
║                                                                         ║
║ To start program HD_SPEED, type: KYM_DISK\HD_SPEED  (press enter)       ║
║ To print documentation, type: COPY KYM_DISK\HD_SPEED.DOC PRN            ║
║                                                                         ║
║ To start program YCOPY, type: KYM_DISK\YCOPY  (press enter)             ║
║ To print documentation, type: COPY KYM_DISK\YCOPY.DOC PRN               ║
║                                                                         ║
║ To start program KILLDIR, type: KYM_DISK\KILLDIR  (press enter)         ║
║ To print documentation, type: COPY KYM_DISK\KILLDIR.DOC PRN             ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## KILLDIR.DOC

{% raw %}
```

		   K I L L D I R  v1.0        (public domain)
		   ===================

Contents:     1. Overview
	      2. Syntax of command line, options
	      3. Programmablauf
	      4. Examples
	      5. Program exit codes
	      6. Technical Background
	      7. Author
	      8. Compiler


1. Overview
===========

   Killdir erases a directory and it's complete contents.


2. Syntax of command line, options
==================================

   KILLDIR  [<device>:][<path>\\]<directoryname.ext>[\]    [<options>]

	    - if no device given, current drive will be used
	    - if no path given, current path will be used

	    - if a backslash follows the directory name
		 only the contents of the directory is erased,
		 the directory itself remains (but is empty)

   - Options:
     ---------
     /B     batch mode  (no keyboard input necessary while program runs)


3. Programmablauf
=================

   Before beginning the erase procedure of the specified directory,
   KILLDIR will display
     - quantity, total size and occupied disk space of the files
       which are to be erased
     - quantity of the directories which are to be erased
   and will request a confirmation from keyboard to start erasing.

   If option /B is active, KILLDIR won't display those numbers and won't
   request confirmation.

   Then the erase procedure will begin. It can only be stopped by pressing
   CONTROL-C or the BREAK key.
   KILLDIR will erase all files in the specified directory, including those
   which have the READ-ONLY attribute or any other attribute.
   Beside this all subdirectories and their contents will be erased and
   removed in the same way recursively.

   At last the specified directory itself will be removed - if there is no
   backslash following the directory name in the command line.


4. Examples
===========

   1) Killdir C:\TEXTS\BACKUP   ( BACKUP will be erased and removed )

   2) Killdir C:\TEXTS\BACKUP\  ( BACKUP will be erased but remains empty )

   3) Killdir C:\               ( the root directory - the whole disk
				  in fact - will be erased )

5. Program exit codes
=====================

   0 : no error occured
   1 : one or more files or directories could not be erased / removed

   The program exit code can be used, for example, inside batch files
   by using IF ERRORLEVEL.


6. Technical background
=======================
   YCOPY uses only standard DOS functions to access disk.
   Therefore YCOPY is likely to run under future DOS-Versions without
   restrictions.


7. Author
=========
   Dirk Heydtmann; Dorfstr.46; D-2381 Nuebel; West Germany
   ( Please drop me some comments )

8. Compiler
===========
   Borland Turbo C 2.0   (Model COMPACT)

```
{% endraw %}

## FILES.DOC

{% raw %}
```

FILES.DOC:   (List of files)
============================

README   DOC      809            read this file first (general information)

FILES    DOC     1019            you are just reading this file

MOVE     EXE    19840            MOVE v1.0  		   program
MOVE     DOC    10053            MOVE v1.0  		   documentation

YCOPY    EXE    16534            YCOPY v1.0  		   program
YCOPY    DOC     5689            YCOPY v1.0  		   documentation

KILLDIR  EXE    12658            KILLDIR v1.0  		   program
KILLDIR  DOC     2804            KILLDIR v1.0              documentation

DISKPARA EXE     8230            DISKPARA                  program
DISKPARA DOC      690            DISKPARA                  documentation

HD_SPEED COM     7568            HD_SPEED                  program
HD_SPEED DOC      903		 HD_SPEED                  documentation

KYM_SRC  COM    40322            self extracting archive file,
				 containing source of above programs

(all programs are public domain)

```
{% endraw %}

## KILLDIR.DOC

{% raw %}
```

		   K I L L D I R  v1.0        (public domain)
		   ===================

Contents:     1. Overview
	      2. Syntax of command line, options
	      3. Programmablauf
	      4. Examples
	      5. Program exit codes
	      6. Technical Background
	      7. Author
	      8. Compiler


1. Overview
===========

   Killdir erases a directory and it's complete contents.


2. Syntax of command line, options
==================================

   KILLDIR  [<device>:][<path>\\]<directoryname.ext>[\]    [<options>]

	    - if no device given, current drive will be used
	    - if no path given, current path will be used

	    - if a backslash follows the directory name
		 only the contents of the directory is erased,
		 the directory itself remains (but is empty)

   - Options:
     ---------
     /B     batch mode  (no keyboard input necessary while program runs)


3. Programmablauf
=================

   Before beginning the erase procedure of the specified directory,
   KILLDIR will display
     - quantity, total size and occupied disk space of the files
       which are to be erased
     - quantity of the directories which are to be erased
   and will request a confirmation from keyboard to start erasing.

   If option /B is active, KILLDIR won't display those numbers and won't
   request confirmation.

   Then the erase procedure will begin. It can only be stopped by pressing
   CONTROL-C or the BREAK key.
   KILLDIR will erase all files in the specified directory, including those
   which have the READ-ONLY attribute or any other attribute.
   Beside this all subdirectories and their contents will be erased and
   removed in the same way recursively.

   At last the specified directory itself will be removed - if there is no
   backslash following the directory name in the command line.


4. Examples
===========

   1) Killdir C:\TEXTS\BACKUP   ( BACKUP will be erased and removed )

   2) Killdir C:\TEXTS\BACKUP\  ( BACKUP will be erased but remains empty )

   3) Killdir C:\               ( the root directory - the whole disk
				  in fact - will be erased )

5. Program exit codes
=====================

   0 : no error occured
   1 : one or more files or directories could not be erased / removed

   The program exit code can be used, for example, inside batch files
   by using IF ERRORLEVEL.


6. Technical background
=======================
   YCOPY uses only standard DOS functions to access disk.
   Therefore YCOPY is likely to run under future DOS-Versions without
   restrictions.


7. Author
=========
   Dirk Heydtmann; Dorfstr.46; D-2381 Nuebel; West Germany
   ( Please drop me some comments )

8. Compiler
===========
   Borland Turbo C 2.0   (Model COMPACT)

```
{% endraw %}

## README.DOC

{% raw %}
```

		  K y m - D i s k U t i l i t y   v1.0
		  ====================================
			    - readme-file -

Name:     Kym-DiskUtility
Version:  1.0
Datum:    June 3rd, 1989
Author:   Dirk Heydtmann
kind:     public domain

Contents:
---------
   Disk-Utilities:         KILLDIR, YCOPY, MOVE
   Additional enclosed:    DISKPARA, HD_SPEED

   Turbo C 2.0 source code for all programs enclosed

Installation:
-------------
   Copy all files into a directory named UTILITY or something like that.
   Recommendation: include this directory in your PATH command in your
   AUTOEXEC.BAT (not necessary, but helpful).

   Source files:
   Copy KYM_SRC.COM into an empty directory and execute it there.
   It will self-extract the source code files.

More Information:
-----------------
   all *.DOC files

```
{% endraw %}

## YCOPY.DOC

{% raw %}
```

	       Y C O P Y  v1.0           (public domain)
	       ===============

Contents     1. Overview
	     2. Syntax of command line, options
	     3. Extensions of YCOPY with regard to XCOPY in details
	     4. Program exit codes
	     5. Technical Background
	     6. Author
	     7. Compiler


1. Overview
===========

   YCOPY is a DOS' XCOPY alike copy utility, by which files and whole direc-
   tory structures can be copied.

   Features:
   ---------
   -  XCOPY compatibel: same command line syntax, same options,
			same exit codes
   -  some extensions:
      --  copies hidden files
      --  allows changing destination disk when full
      --  keeps order of files and directories
      --  'Cyclic' copy is allowed
      --  option /o  to transfer file attributes
      --  option /t  to produce inconspicious screen output

   [Note: the XCOPY program mentioned in this document is from DOS 3.30]

2. Syntax of command line, options
==================================

   Syntax:        (XCOPY compatible)
   ------

      YCOPY  <source> <dest> [<options>]

      <source>,<dest> ::= [<device>:][<path>\][<filename.ext>]

      Options:
      --------
       /s  ( work on subdirectories too)
       /e  ( empty subdirectories too )
       /v  ( copy with verification )
       /a  ( only files with archive-flag )
       /m  ( same as /a, reset archive-flags )
       /p  ( acknowledge files )
       /w  ( wait until key pressed )
       /d:MM.DD.YY  ( files with same or later date )

      ( additional options which XCOPY does not support )

       /t  ( "inconspicuous" screen output )
       /o  ( transfer all attributes of original )

   The command line is not case sensitive.
   Multiple options need not to be separated by spaces.

   Get detailed information about command line and options from your DOS
   manual, chapter 'XCOPY'.


3. Extensions of YCOPY with regard to XCOPY in details
======================================================

   1) YCOPY copies hidden files
   ----------------------------
   The copy of a hidden file will not be hidden unless you activate option
   /o, which ensures that copied files have the same attributes as the
   source files.


   2) option /t   Inconspiciuous screen output
   -------------------------------------------
   Instead of displaying the YCOPY headline and the files being copied
   the screen will be cleared and a growing row of points and letters
   appears as the copy process proceeds.
   These points and letters have the following meaning:

   .   a file is being copied
   x   a directory is created
   D   directory error: a directory could not be created
   R   read error:      a source file could not be read properly
   W   write error:     a destination file could not be written
   O   open error:      a source file could not be opened
   C   create error:    a destination file could not be created


   3) destination disk can be changed when full
   --------------------------------------------
   The program does not abort when destination disk is full. It allows you
   to change it.
   Therefore you can back up a greater amount of data from hard disk to
   multiple disks.


   4) YCOPY copies files and directories in their original order
   -------------------------------------------------------------
   ... while XCOPY copies files at first and directories afterwards.


   5) 'Cyclic' copy is allowed
   ---------------------------
   Example:  YCOPY  C:\*.*  C:\BACKUP\  /S

   While XCOPY would say "cyclic copy not possible", YCOPY has no such
   problem. The reason is that YCOPY builds up an internal tree data
   structure of the files' and directories' names to be copied BEFORE it
   starts copying.


   6) XCOPY's question "file or directory" is abolished
   ----------------------------------------------------
   XCOPY's question

     "Does (name)
      specify a file name
      or a directory name
      on target ?"

   does not occure in YCOPY. This decision is made automatically. 'Name' is
   always considered to be a directory name, exept in this case:
   A directory 'Name' does not exist and there is only 1 file and no directory
   to be copied.

     Example:  (1 or more files on disk A, disk B is empty)

     YCOPY A: B:\BACKUP

   Because a directory BACKUP does not exist on disk B, YCOPY makes a decision
   by the number of files to be copied. If there are more than 1, a directory
   BACKUP will be created on B and the files will be copied into it.
   Otherwise (if there is exactly 1 file to be copied) BACKUP will be the
   name of the copied file. If you want to avoid this, you should have typed
   in:

     YCOPY A: B:\BACKUP\

   In this case YCOPY knows that BACKUP can't be a file's name.


4. Program exit codes
=====================
   0 :  no error occured
   1 :  no files copied
   2 :  user break
	  > by  CONTROL-C  resp. BREAK
	  > or if target disk is full and user does not insert a new one
   3 :  not all files and directories could be copied
   4 :  other error

   The program exit code can be used, for example, inside batch files
   by using IF ERRORLEVEL.


5. Technical background
=======================
   YCOPY uses only standard DOS functions to access disk.
   Therefore YCOPY is likely to run under future DOS-Versions without
   restrictions.


6. Author
=========
   Dirk Heydtmann; Dorfstr.46; D-2381 Nuebel; West Germany
   ( Please drop me some comments )

7. Compiler
===========
   Borland Turbo C 2.0   (Model COMPACT)

```
{% endraw %}

## README.DOC

{% raw %}
```

		  K y m - D i s k U t i l i t y   v1.0
		  ====================================
			    - readme-file -

Name:     Kym-DiskUtility
Version:  1.0
Datum:    June 3rd, 1989
Author:   Dirk Heydtmann
kind:     public domain

Contents:
---------
   Disk-Utilities:         KILLDIR, YCOPY, MOVE
   Additional enclosed:    DISKPARA, HD_SPEED

   Turbo C 2.0 source code for all programs enclosed

Installation:
-------------
   Copy all files into a directory named UTILITY or something like that.
   Recommendation: include this directory in your PATH command in your
   AUTOEXEC.BAT (not necessary, but helpful).

   Source files:
   Copy KYM_SRC.COM into an empty directory and execute it there.
   It will self-extract the source code files.

More Information:
-----------------
   all *.DOC files

```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

       Program EVALUATE - What is new in this release ?
       ================================================

v1.33 dated June 11, 1990
-------------------------
- printer supported (see manual)
- variable hotkey
- new command line options /h and /?
- some major and minor bugs fixed

v1.2 dated Oct 22, 1989
-----------------------
- memory resident mode (TSR). Command line options:
  /tsr      (install program memory resident)
  /kill     (remove previously installed program from memory)
  See detailed description in manual.

- 4 new functions:
  --  random x     returns a random number between 1 and x
  --  ticks()      returns seconds since 0:00 h
  --  sound x      turns speaker on at specified frequency, returns x
  --  nosound()    turns speaker off, returns zero


v1.12 dated Oct 07, 1989
------------------------
- bug fixed:
  plus operator was misinterpreted in some cases: 123.+4 resulted in 123.04
  instead of 127.


v1.1 dated Oct 02, 1989
-----------------------

- percent calculation (see manual).

- variable x in addition to x1 to x9
  x always holds the previous evaluated result.

- in command line mode the output is not poked on the screen directly
  anymore. It is sent to stdout instead, which means that it can be
  redirected into a file.

- besides the F1 help menu, the help screens can be accessed directly
  by SHIFT-F1 to SHIFT-F10.

- parameter 'color set' added to setup menu/misc.parameters. LCD-users
  can fix black&white color set. See manual.

- well-defined return codes (see manual).

- some bugs of prior version fixed:
  --  0*1 resulted into underflow, while 1*0 was correct
  --  -1e307-1e307 caused a program termination, while 1e307+1e307 gave
      an overflow error message correctly
  --  1e20! caused a program termination


v1.02 dated Feb 26, 1989
------------------------
- better performance


v1.0 dated Feb 07, 1989
-----------------------
- first version ever released
```
{% endraw %}

## YCOPY.DOC

{% raw %}
```

	       Y C O P Y  v1.0           (public domain)
	       ===============

Contents     1. Overview
	     2. Syntax of command line, options
	     3. Extensions of YCOPY with regard to XCOPY in details
	     4. Program exit codes
	     5. Technical Background
	     6. Author
	     7. Compiler


1. Overview
===========

   YCOPY is a DOS' XCOPY alike copy utility, by which files and whole direc-
   tory structures can be copied.

   Features:
   ---------
   -  XCOPY compatibel: same command line syntax, same options,
			same exit codes
   -  some extensions:
      --  copies hidden files
      --  allows changing destination disk when full
      --  keeps order of files and directories
      --  'Cyclic' copy is allowed
      --  option /o  to transfer file attributes
      --  option /t  to produce inconspicious screen output

   [Note: the XCOPY program mentioned in this document is from DOS 3.30]

2. Syntax of command line, options
==================================

   Syntax:        (XCOPY compatible)
   ------

      YCOPY  <source> <dest> [<options>]

      <source>,<dest> ::= [<device>:][<path>\][<filename.ext>]

      Options:
      --------
       /s  ( work on subdirectories too)
       /e  ( empty subdirectories too )
       /v  ( copy with verification )
       /a  ( only files with archive-flag )
       /m  ( same as /a, reset archive-flags )
       /p  ( acknowledge files )
       /w  ( wait until key pressed )
       /d:MM.DD.YY  ( files with same or later date )

      ( additional options which XCOPY does not support )

       /t  ( "inconspicuous" screen output )
       /o  ( transfer all attributes of original )

   The command line is not case sensitive.
   Multiple options need not to be separated by spaces.

   Get detailed information about command line and options from your DOS
   manual, chapter 'XCOPY'.


3. Extensions of YCOPY with regard to XCOPY in details
======================================================

   1) YCOPY copies hidden files
   ----------------------------
   The copy of a hidden file will not be hidden unless you activate option
   /o, which ensures that copied files have the same attributes as the
   source files.


   2) option /t   Inconspiciuous screen output
   -------------------------------------------
   Instead of displaying the YCOPY headline and the files being copied
   the screen will be cleared and a growing row of points and letters
   appears as the copy process proceeds.
   These points and letters have the following meaning:

   .   a file is being copied
   x   a directory is created
   D   directory error: a directory could not be created
   R   read error:      a source file could not be read properly
   W   write error:     a destination file could not be written
   O   open error:      a source file could not be opened
   C   create error:    a destination file could not be created


   3) destination disk can be changed when full
   --------------------------------------------
   The program does not abort when destination disk is full. It allows you
   to change it.
   Therefore you can back up a greater amount of data from hard disk to
   multiple disks.


   4) YCOPY copies files and directories in their original order
   -------------------------------------------------------------
   ... while XCOPY copies files at first and directories afterwards.


   5) 'Cyclic' copy is allowed
   ---------------------------
   Example:  YCOPY  C:\*.*  C:\BACKUP\  /S

   While XCOPY would say "cyclic copy not possible", YCOPY has no such
   problem. The reason is that YCOPY builds up an internal tree data
   structure of the files' and directories' names to be copied BEFORE it
   starts copying.


   6) XCOPY's question "file or directory" is abolished
   ----------------------------------------------------
   XCOPY's question

     "Does (name)
      specify a file name
      or a directory name
      on target ?"

   does not occure in YCOPY. This decision is made automatically. 'Name' is
   always considered to be a directory name, exept in this case:
   A directory 'Name' does not exist and there is only 1 file and no directory
   to be copied.

     Example:  (1 or more files on disk A, disk B is empty)

     YCOPY A: B:\BACKUP

   Because a directory BACKUP does not exist on disk B, YCOPY makes a decision
   by the number of files to be copied. If there are more than 1, a directory
   BACKUP will be created on B and the files will be copied into it.
   Otherwise (if there is exactly 1 file to be copied) BACKUP will be the
   name of the copied file. If you want to avoid this, you should have typed
   in:

     YCOPY A: B:\BACKUP\

   In this case YCOPY knows that BACKUP can't be a file's name.


4. Program exit codes
=====================
   0 :  no error occured
   1 :  no files copied
   2 :  user break
	  > by  CONTROL-C  resp. BREAK
	  > or if target disk is full and user does not insert a new one
   3 :  not all files and directories could be copied
   4 :  other error

   The program exit code can be used, for example, inside batch files
   by using IF ERRORLEVEL.


5. Technical background
=======================
   YCOPY uses only standard DOS functions to access disk.
   Therefore YCOPY is likely to run under future DOS-Versions without
   restrictions.


6. Author
=========
   Dirk Heydtmann; Dorfstr.46; D-2381 Nuebel; West Germany
   ( Please drop me some comments )

7. Compiler
===========
   Borland Turbo C 2.0   (Model COMPACT)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1904

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1655   7-12-90  12:03a
    FILE1904 TXT      3627   7-13-90  11:31a
    KYM_DISK     <DIR>    
    EVALUATE     <DIR>    
            5 file(s)       5320 bytes

     Directory of A:\KYM_DISK

    .            <DIR>    
    ..           <DIR>    
    DISKPARA DOC       690   6-03-89   1:00p
    DISKPARA EXE      8230   6-03-89   1:00p
    FILES    DOC      1019   6-03-89   1:00p
    HD_SPEED COM      7568   6-03-89   1:00p
    HD_SPEED DOC       903   6-03-89   1:00p
    KILLDIR  DOC      2804   6-03-89   1:00p
    KILLDIR  EXE     12658   6-03-89   1:00p
    KYM_SRC  COM     40322   6-03-89   1:00p
    MOVE     DOC     10053   6-03-89   1:00p
    MOVE     EXE     19840   6-03-89   1:00p
    README   DOC       828   6-03-89   1:00p
    YCOPY    DOC      5689   6-03-89   1:00p
    YCOPY    EXE     16534   6-03-89   1:00p
           15 file(s)     127138 bytes

     Directory of A:\EVALUATE

    .            <DIR>    
    ..           <DIR>    
    EVAL     DOC     26648   6-11-90   1:33p
    EVAL     EXE     57056   6-11-90   1:33p
    FILES    DOC       295   6-11-90   1:33p
    WHATSNEW DOC      2007   6-11-90   1:33p
            6 file(s)      86006 bytes

    Total files listed:
           26 file(s)     218464 bytes
                           92160 bytes free
