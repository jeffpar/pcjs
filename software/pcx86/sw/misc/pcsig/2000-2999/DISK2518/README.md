---
layout: page
title: "PC-SIG Diskette Library (Disk #2518)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2518/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2518"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ARCE.DOC

{% raw %}
```


  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989


  Purpose:  Use ARCE to extract files from an ARC archive file.

  Format:

        ARCE  [d:][path]filename.ext  [filespecs...] [d:outpath]
                                      [/R]
                                      [/Q]
                                      [/P]
                                      [/T]
|                                     [/5]
                                      [/Gpassword]

  Remarks:

        The drive and path names are optional.  If omitted, the  current
        drive and path name is used.

        The filename must be  supplied.  The extension defaults  to ARC.
        All files matching the supplied filename are processed.  The ARC
        filename may contain the * and ? wildcard characters.

        If  no  filespecs  are   supplied,  all  files  are   extracted.
        Otherwise, only those ARC members  which match one of the  up to
        16 filespecs are extracted.

        The extracted files  may be placed  on another drive,  and/or in
        another subdirectory by following the optional filespecs with  a
        drive designator and/or path name.

        If  the  file  being  extracted  already  exists,  you are asked
        whether or not you want to over-write it.  You may use the |  /R
        option to bypass this prompt.  Use a Y followed by the |  return
        key to over-write the file.

        Use the /Q option to suppress alarm sounds, beeps, and bells.

        Use  the  /P  option  to  write  the  extracted files to the DOS
        standard output  file.  With  /P, you  may pipe  or redirect the
        output.  An initial line feed  is added to the beginning  of the
        output file.

        Use the /T option to test the archive's integrity. No files will
        be extracted.

        If the file was encrypted, use the /G option to supply the  same
        password as was used to create the file, e.g. /GSECRET.

|       Use the /5 option to stop ARCE from creating the subdirectories
|       for files created with the ARC /Z subdirectory option.


        ARCE 4.0c, Copyright (c) 1986-89, Wayne Chin and Vernon D. Buerg.
        ALL RIGHTS RESERVED.



  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989



                        Examples
                        --------

        o  Extract all file from TEST.ARC onto the current drive:

              ARCE TEST

        o  Extract only file with  an extension of .ASM from the archive
           SOURCE.ARC on drive B and in subdirectory SAVE:

              ARCE B:\SAVE\SOURCE *.ASM

        o  Extract  all  files  from  all  ARC files in the subdirectory
           called TEST on drive C:

              ARCE C:\TEST\*

        o  Extract  all  files  from  PROGA.ARC  and  place the files in
           subdirectory OLD on drive B:

              ARCE PROGA.ARC B:\OLD

        o  Extract all files with an extension of .COM and .EXE from the
           archive PROGS.ARC in directory NEW\WORK on drive B, and place
           the  them  in  subdirectory  SAVE\TEST  on  drive  A; replace
           existing file:

              ARCE B:\NEW\WORK\PROGS *.COM *.EXE A:\SAVE\TEST /R

        o  Extract  the  file  READ.ME  from  the  archive GIZMO.ARC and
           display it on the console instead of writing it to a file:

              ARCE GIZMO READ.ME /P

        o  Same as above, except  pass the extracted READ.ME file to the
           LIST file viewer:

              ARCE GIZMO READ.ME /P | LIST /S

















  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages
                        --------------

      'filename - premature EOF reading '

        Data  is  missing  from  the  archive  file.   The  program   is
        terminated.


      'filename - unable to set file datestamp'

        The file datestamp is set to the current date and time, and  the
        next archive member is processed.


      'filename - WARNING: file CRC does not match!'

        The extracted member  is left on  the output disk,  and the next
        archive member is processed.   The file is probably  invalid but
        is left on the disk for your examination.


      'Invalid filespec(s)'

        The filespec syntax is incorrect.  The filename part may be from
        1  to  eight  characters,  and  may  include the ? or * wildcard
        characters.  The extension may be none to three characters,  and
        may  include  wildcards.   There  is  a  maximum of 16 filespecs
        allowed.  The program terminates.


      'filename - file already exists. Overwrite it? (y/N) '

        The member being extracted already  exists.  If you are using  a
        data  path  utility,  the  file  may  not  actually  be  in  the
        subdirectory be used for output.   Respond with the letter Y  to
        over-write the existing  file, or respond  with the letter  N to
        skip this member and continue to the next.


      'Abort: Stack overflow'

        The member  being extracted  has invalid  data.  The  program is
        terminated.


      'filename - invalid decode tree count'

        The member  being extracted  has invalid  data.  The  program is
        terminated.







  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages (cont'd)
                        --------------


      'filename - new archive format 7 not yet supported'

        Format 7 is a special file compression method used internally by
        SEA,  the  authors  of  ARC.  Processing continues with the next
        archive member.


      'Unable to open archive > arcname'

        The  specified  ARC   archive  file  was   not  found,  or   was
        inaccessible.  The program terminates.


      'CREATE failed > filename'

        There was insufficient directory  space, or a failure  accessing
        the output disk.  The program terminates.


        'Invalid archive format!'

        The archive file data is invalid.  The program terminates.


      'Incorrect DOS version'

        Version  2.0  or  later  of  PC  DOS  must be used.  The program
        terminates


      'Not enough memory.'

        A minimum  of 112k  bytes of  memory is  required.  The  program
        terminates.


      'I/O error reading from arcname'

        An incorrectable error occurred attempting to read data from the
        archive file.  The program terminates.


      'I/O error writing or disk full > filename'

        There was not  enough disk space  to write the  complete archive
        member.   The  partially  extracted  file  is  scratched and the
        program terminates.






  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Error Messages (cont'd)
                        --------------


      'No matching file(s) found'

        No archive files were  found that matched the  supplied filename
        specifications.  The program terminates.



      'filename - ERROR: invalid file codes'

        An error was detected while attempting to decode a crunched
        file. Either some data bytes are invalid, there are extra
        bytes, or there are bytes missing. The archive is invalid.









































  ARCE Command                                          Version 4.0c
  ------------                                          Mar  3, 1989

                        Version history
                        ---------------

        1.1 - 1/13/86   -initial release

        2.00, 04/08/86  - fine tuning of I/O buffering

        2.01-2.05, 4-20 thru 9/9/86
                        - improve unsq, correct disk full message
        2.06, 9/17/86   - release from testing
        2.07, from 9/19 - not released
        2.08, 12/31/86 - added /P, /Q; fixed /R with redirection
        2.09, 1/5/87   - correct closing of output if /P used; require return
                         (enter key) for over-write prompt
                       - add more validity checking of member headers
        2.10, 1/6/87   - correct use out output file specification
        2.11, 1/24/87  - some cosmetics, wrong banner version and date

        3.0a, 3/16/87  - added /G for password encryption
                       - added /T for integrity checking only
                       - correct loop in command line parsing
                       - internal optimization
                       - make intergity checking more robust

        3.0c, 3/23/87  - improve extracting with file selection
                       - minor fixes and cosmetic changes

        3.0d, 3/29/87  - correction to unsqueeze

        3.0e, 4/02/87  - correct loop with invalid archives
                       - insure errorlevel non-zero if any errors
                       - correct loop in command line processing

        3.0f, 5/31/87  - correct false 'disk full' error message when
                         using /p (piping) option
                       - correct failure to extract all files from a
                         garbled (/g) archive

        3.1a, 9/10/87  - cosmetic changes

        3.1b, 9/16/87  - unsquashing version released

        3.1c, 2/06/88  - lessen memory requirement to 50k

|       4.0a, 2/06/89  - add subdirectory support via /Z option

|       4.0b, 2/28/89  - change meaning of /Z to /5;
|                        correct name used for /Z output directories

|       4.0c, 3/03/89  - correct mkdir error without /5







   ARCE Command                                          Version 4.0c
   ------------                                          Mar  3, 1989



                        Notices
                        -------

        ARCE (c) Copyright 1986-1989 by Wayne Chin and Vernon D. Buerg
        ALL RIGHTS RESERVED.

        ARCE is free, but it is a copyrighted work and may be distributed only
        pursuant to this license.

        Permission is hereby granted to reproduce and disseminate ARCE so long
        as:

           (1)  No remuneration of any kind is received in exchange; and

           (2)  Distribution is without ANY modification to the contents of
                ARCE.COM and all accompanying documentation and/or support
                files, including the copyright notice and this license.

        No copy of ARCE may be distributed without including a copy of this
        license.

        Any other use is prohibited without express, written permission in
        advance.



                Vernon D. Buerg
                139 White Oak Circle
                Petaluma, CA  94952

                CompuServe: 70007,1212
                Data/BBS:   707-778-8944
                            707-778-8841



        For use by corporations, institutions, or for profit, contact
        System Enhancement Associates for licensing information.

                   System Enhancement Associates
                   21 New Street
                   Wayne, NJ 07470













```
{% endraw %}

## FILE2518.TXT

{% raw %}
```
Disk No: 2518
Disk Title: PrintSelector
PC-SIG Version: S1

Program Title: PRINT SELECTOR
Author Version: 05/90
Author Registration: $25.00
Special Requirements: Hard drive.

With the many different fonts, type sizes, and print attributes most
printers support, why are you using that same old default typeface?
PRINTSELECTOR is a printer control program the lets you select printer
options (character set/size, margins, page lengths, etc.) either from
easy-to-use menus or by embedding printer codes inside your documents.
By embedding printer codes within documents you can expand the
capabilities of word processors, spreadsheets, accounting programs, or
any program that creates its output as a file.  This lets you add bold
type or underline -- anywhere on a document -- as long as your printer
supports it.

PRINTSELECTOR comes with printer information installed for a large
number of standard printers and has a menu driven program that lets you
easily customize it for any printer.  Standard printers included are
Citizen, Epson, HP Laser/DeskJet, Okidata, NEC, Star, and Toshiba.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989-1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  DISK #2518 PRINTSELECTOR  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To unarchive the files to your hard drive.  First make a subdirectory,  ║
║ then type; ARCE *.AR X:\SUBDIR  (where X:\SUBDIR is your drive and      ║
║                                  the subdirectory you created)          ║
║                                                                         ║
║ Once the files have been unarchived.                                    ║
║ To print instructions, type: COPY READ1ST.DOC PRN                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1991, PC-SIG Inc.
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                  PRINTSELECTOR
        
        
        
        
                                  USER'S MANUAL
        
        






        
        
                       LICENSE
        
        
        
             The PRINTSELECTOR software package and this manual are 
        protected by United States Copyright Law.  This shareware distri-
        bution copy is meant for demonstration use only.  It may be 
        freely distributed by electronic or magnetic media.  HOWEVER IT 
        IS ONLY MEANT FOR DEMONSTRATION PURPOSES.  ANY CONTINUED USE IS 
        STRICTLY PROHIBITED.  
        
             No telephone or mail support is provided for non-registered 
        users.
        
             A single use license and the most recent version of PRINTSE-
        LECTOR will be sent when you become a registered user.
        
             You may register your PRINTSELECTOR program by sending 
        $25.00 + $4.00 shipping and handling to:
        
                  Brook King Systems    
                  10064-7 Larwin Av.    
                  Chatsworth, CA.  91311
        
        California Residents must include $1.69 state sales tax.
        Registration from outside the United States must include $10.00 
        Shipping and handling.  Checks must be in U.S. dollars drawn on a 
        U.S bank.  You may send currency at your own risk.
        
        
        Brook King Systems    
        10064-7 Larwin Av.    
        Chatsworth, CA.  91311
        (818) 882 8451
        
        
        
        






        
        
        
        
                     WARRANTY:
        
        
        BROOK KING SYSTEMS SPECIFICALLY DISCLAIMS ANY  WARRANTIES EX-
        PRESSED OR IMPLIED INCLUDING BUT NOT LIMITED TO THE PURPOSE TO 
        WHICH THE PRODUCT IS APPLIED AND ANY DAMAGE THAT MAY RESULT TO 
        EQUIPMENT OR DATA THROUGH THE USE OF THE PRODUCT. 
        
        
        
        Trademarks:
        
        Within this manual references are made to several excellent 
        products:
        Wordstar is a trademark of MicroPro Inc.
        The Word is a trademark of Microsoft Inc.
        MSDOS is a trademark of Microsoft Inc.
        Lotus 1-2-3 is a trademark of the Lotus Development Co.
        Supercalc is a trademark of Sorcim Corp.
        dBase II and dBase III are trademarks of Ashton Tate Inc.
        Printselector is a trademark of Brook King Systems
        
        
                        COPYRIGHT       
        
        Manual and software copyright 1990 Brook King Systems:
        
        Brook King Systems
        10064 -7 Larwin Av.
        Chatsworth, Ca., 91311
        (818) 882 8451
        






                                IMPORTANT NOTICE 
        
        (very important to the program author)
        
        
        PRINTSELECTOR IS A SHAREWARE PRODUCT.  IT IS NOT FREE SOFTWARE.  
        COPYRIGHTS FOR PRINTSELECTOR PROGRAMS AND MANUALS ARE OWNED BY 
        BROOK KING SYSTEMS.  
        
        THE SHAREWARE VERSION OF PRINTSELECTOR IS DISTRIBUTED FREELY AS A 
        DEMONSTRATION COPY ONLY.  EVEN IF YOU PAID SOMEONE OTHER THAN 
        BROOK KING SYSTEMS FOR YOUR SHAREWARE COPY, YOU MUST OBTAIN A 
        REGISTERED COPY IF YOU CONTINUE TO USE THE PROGRAM.  A REGISTERED 
        COPY CAN BE OBTAINED BY SENDING $25.00 + $4.00 SHIPPING AND 
        HANDLING TO 
        
                  Brook King Systems    
                  10064-7 Larwin Av.    
                  Chatsworth, CA. 91311
        
        CALIFORNIA RESIDENTS MUST INCLUDE $1.69 STATE SALES TAX.
        REGISTRATION FORM OUTSIDE THE UNITED STATES MUST INCLUDE $10.00 
        SHIPPING AND HANDLING. (RATHER THAN THE $4.00 FROM INSIDE THE 
        UNITED STATES).  CHECKS MUST BE IN U.S. DOLLARS DRAWN ON A U.S 
        BANK.  YOU  MAY SEND CURRENCY AT YOUR OWN RISK.
        
        
             We worked hard to make this a good program and we'll contin-
        ue to improve it.  Please don't rip us off.  Register your copy!  
        Thanks.
        






        TABLE OF CONTENTS
        
        CHAPTER 1: AN INTRODUCTION TO PRINTSELECTOR                 1
             1.1  What is Printselector?                            1
             1.2  How does PRINTSELECTOR work?                      2
             1.3  Using PRINTSELECTOR to control your CRT           4
             1.4  Getting started and using this Manual             4
        
        CHAPTER 2:  PRINTSELECTOR INSTALLATION                      5
             2.1  Working Directory or Disks                        5
             2.2  Required Archive Files                            5
             2.3  Installation for hard disk systems                7
             2.4  Installation for floppy disk systems              8
        
        CHAPTER 3:   USING PRINTMEN IN THE MENU MODE TO CONTROL YOUR 
        PRINTER                                                     11
             3.1 Starting PRINTMEN                                  11
             3.2 Using PRINTMEN                                     12
             3.3  Exiting PRINTMEN                                  14
             3.4 Saving and automatically using a printer 
                 configuration                                      16
             3.5  Using PRINTMEN to control your CRT screen         17   
        
        CHAPTER 4: MAKING YOUR OWN PRINTER OVERLAY FILES            19
             4.1  Introduction                                      19
             4.2  Screen and overlay file formats                   20
             4.3  Entering Data                                     27
             4.4  Creating an overlay file for the first time       28
             4.5  Editing overlay files                             30
             4.6  Displaying an overlay file                        35
             4.7  Backup Files                                      36
        
        CHAPTER 5:  USING THE INSERTION MODE TO PLACE PRINTER CONTROL 
        COMMANDS IN A DOCUMENT                                      37
             5.1  Introduction                                      37
             5.2  Generating a source file                          37
             5.3  Using the SETTEMP program                         38
             5.4  Using the PRINTIT program                         39
             5.5  Standard Template Files                           43
             5.6  Using PRINTSELECTOR'S Insertion Mode with 
                  Application Programs                              43
        






        CHAPTER 6:  MAKING A  TEMPLATE FILE USING MAKETEMP          47
             6.1  Introduction                                      47
             6.2  Invoking MAKETEMP to edit or create a 
                  template file                                     47
             6.3  Creating new template and description files       49
             6.4  Editing template and description files with
                  the MAKETEMP program                              54
        
        APPENDIX A: DATA FILE FORMATS                               60
             A.1  Format of Overlay files                           62
             A.2  Format of Template files                          63
        
        APPENDIX B: HEXADECIMAL ARITHMETIC                          66
        
        APPENDIX C:  USE OF THE TRANSL UTILITY                      69
        
        
        






        CHAPTER 1: AN INTRODUCTION  TO PRINTSELECTOR
        
        
        
        1.1  What is Printselector? 
        
             PRINTSELECTOR is a set of five programs designed to give you 
        greater control of your printer.  It has two modes of operation.  
        The first is the "menu mode" using the program PRINTMEN.  In this 
        mode, a menu of printer options is placed on your CRT screen.  
        Selections from this menu are passed to your printer.  For in-
        stance, if you should want all letters printed at twice their 
        normal size, you could simply run the PRINTMEN program and select 
        the "double width option" that is available from most dot matrix 
        printers.  Other common PRINTMEN options are: 
        
             print size
             fonts
             bold or double strike printing
             amount of space between lines
             amount of space between characters 
             horizontal tab positions
             letter quality
             right and left margin positions 
        
        
        The  exact  options available depend on the  capability  of  your 
        printer. 
        
             The second PRINTSELECTOR mode is the "insertion mode."  It 
        allows you to insert special printer control commands in the 
        middle of any document.  In this mode of operation a special 
        sequence of characters will be translated into printer commands.  
        The special sequence is called a "key code."  A key code contains 
        three characters.  The first two characters are #& and the third 
        character is chosen by you to represent the printer commands that 
        you wish to insert.  As an example if you wanted to print a 
        phrase double size, you could begin it with the key code "#&D "  
        (to start double width printing) and end it with the key code 
        "#&N"  (to return to normal printing  width) , i.e. 
             
             #&Dthis phrase is printed at double width#&N 
        
        
                                        1
        
        






        
             A file called the template file contains the table that 
        translates "key codes" to their assigned printer commands.
        
             The insertion mode may be  implemented by either the program 
        SETTEMP or the program PRINTIT.  SETTEMP is a memory resident 
        program that monitors everything your computer sends to its 
        printer.  When SETTEMP detects a key code sequence it automati-
        cally replaces it with the printer control commands specified by 
        the resident template file.  
        
             PRINTIT is not a memory resident program.  It must be called 
        separately.  When it is called, PRINTIT reads the  original file 
        and generates a new file with the print commands replacing the 
        "key codes".  This new file (called a "PRN" file) is then sent  
        to your printer and a copy is saved.    
        
             In the insertion mode you may turn on and off all the func-
        tions that are selectable by the PRINTMEN program as well as 
        inserting special types of characters (such as Greek or special 
        mathematical symbols). 
        
             A very special capability of PRINTSELECTOR is that it allows 
        you to define your own printer menus and "key codes".  You can 
        start from scratch or modify the prototypes that are included.  
        Using the "make" features of the PRINTSELECTOR package you can 
        customize your printer commands to your own needs and if neces-
        sary adapt PRINTSELECTOR to new or different printer versions. 
        
             The program MAKEMENU creates or modifies "over lay files" 
        that define menus and the program MAKETEMP creates or modifies 
        the template files that assign printer control functions to key 
        codes.  Both programs are menu driven and very easy to use.  
        
        
        1.2  How does PRINTSELECTOR work? 
        
             Printers are usually controlled by "escape sequences" that 
        are sent by the controlling computer.  The logic behind the name 
        is that most of these sequences are preceded by a nonprintable 
        computer character called "escape."  Most application programs 
        
        
                                        2
        
        






        such as word processors and spread sheets generate special print-
        er functions by sending these "escape sequences."  Different 
        printers require different control sequences.  Even printers 
        that emulate "standard" printers such as Epson or IBM have fea-
        tures that are not available when in the emulation mode. 
        
             PRINTSELECTOR programs generate the "escape sequences" 
        needed by your printer.  In the menu mode these escape sequences 
        and the menus that select them are stored in "overlay files."   
        Overlay files can be identified by the extension (the part of the 
        file name after the period) ".OVL".  For instance EPS286E.OVL is 
        the overlay file for controlling an EPSON 286e printer.  
        
             In the insertion mode, "key codes" have corresponding escape 
        sequences that are stored in "template files".  The template 
        files can be identified by the extension ".TMP".  Template files 
        are used by both the SETTEMP and PRINTIT programs.  SETTEMP 
        intercepts "key codes" as they are sent to the printer.  PRINTIT 
        generates a new file with the escape sequences replacing the "key 
        codes".  This new file is referred to as a "PRN" file.  It will 
        have the same name as the original source file except that origi-
        nal program's extension field will be replaced by the ".PRN" 
        extension.
        
             Template file can be customized for your application by 
        using the menu driven MAKETEMP pro gram.  This program in turn 
        also uses the  overlay files that are used by the menu program.  
        
             Besides generating a template file, the MAKETEMP program 
        generates a "description file" that provides a description of the 
        functions performed by the template file's key codes.   If MAKE-
        TEMP is used to generate the template file:  TEMPLATE.TMP, the 
        corresponding description file will have the name TEMPLATE.DIS. 
        
             To get you started we have provided overlay and template 
        files for many popular printers.   In fact these programs may be 
        all that you ever need to use.  However, don't be intimidated by 
        the prospect of having to make up your own control programs.  
        
             It's  easy! 
        
             A good deal of effort has gone into simplifying the develop-
        ment of customized control files. Everything is menu driven and 
        easy to understand. 
        
        
                                        3
        
        






        
         1.3  Using PRINTSELECTOR to control your CRT
        
             While PRINTSELECTOR has been designed primarily to control 
        printers, it can also direct customized escape sequences to other 
        computer peripherals.  In particular, the MS DOS driver ANSI.SYS 
        accepts escape sequences directed to the CRT (the logical unit 
        CON: - this will be discussed later).  When this driver is in-
        stalled PRINTMEN can be used to set such screen control functions 
        as:
        
             foreground color
             background color
             resolution
             number of lines per screen
             redefine key functions 
             enable and disable automatic word wrap.  
        
        
             Overlay and Template files have been provided for EGA and 
        CGA graphics cards.  The use of these files and the proper in-
        stallation of ANSI.SYS are described in chapter 3.
        
             Further template files can be used to place these functions 
        in files that are to be displayed on the screen.  By specifying 
        other logical units and by developing custom menus and screens, 
        control sequences can be sent to other peripheral elements such 
        as custom Input Output devices or Modems.  
        
         
        1.4  Getting started and using this Manual 
        
             The first thing to do is to install the PRINTSELECTOR pro-
        grams.  This simple procedure is described in chapter 2.  If 
        overlay and template files are already available for your printer 
        you can use PRINTSELECTOR right away. 
        
             The use of the PRINTSELECTOR menu mode is described in 
        detail in chapter 3 while chapter 4 describes how to make your 
        own menus.  The insertion mode is described in chapter 5 and 
        chapter 6 describes how to make your own template files. 
        
             With the easy to use menu format you can start using the 
        menu mode as soon as you have completed the installation process.  
        
        
                                        4
        






        CHAPTER 2:  PRINTSELECTOR INSTALLATION
        
        2.1  Working Directory or Disks
        
        
        The purpose of this chapter is to explain how to obtain a working 
        PRINTSELECTOR directory or disk from the archived distribution 
        files of the PRINTSELECTOR demonstration version.  It is assumed 
        that if you have a hard disk system you will wish to have a 
        working directory dedicated to PRINTSELECTOR though this is by no 
        means necessary and you can place your PRINTSELECTOR programs 
        anywhere you like.  If you do not have a hard disk system, this 
        chapter will explain how to create a dedicated PRINTSELECTOR 
        working disk.  
        
             No matter which system you plan to use, it is always a good 
        idea to make a backup disk to preserve your original archived 
        files.
        
        2.2  Required Archive Files
        
             To properly use PRINTSELECTOR you will require three archive 
        files.  These are:
        
             PSLPG1.ARC
        
             This file contains the basic PRINTSELECTOR working files.  
        Specifically it contains:
             PRINTMEN.EXE:  Provides a selectable menu of 
                       printer functions.
        
             SETTEMP.EXE:  A memory resident  program that 
                       allows printer functions to be called from other 
                       programs.
        
             PRINTIT.EXE:  A non-memory resident program 
                       that inserts printer commands in files that it 
                       sends to the system printer.
        
             MAKEMENU.EXE:  A program for customizing your 
                       own printer menus.
        
        
                                        5
        
        






             MAKETEMP.EXE:  A program that allows you to 
                       customize the printer commands used by SETTEMP and 
                       PRINTIT.
        
             TRANSL.EXE:  A translation utility that may 
                       be helpful in examining printer escape sequences.
        
         
             PSLDT1.ARC
        
             This archive file contains the overlay (.ovl), template 
        (.tmp) and description (.dis) data files that are available for 
        standard printers.  
        
             PSLDOC.ARC
        
             This archive file contains documentation for the PRINTSELEC-
        TOR program.  Specifically it contains:
        
             PM.DOC :  This is the PRINTSELECTOR demon-
                       stration version manual.
        
             PRINTFIL.DOC:  This lists the standard print-
                       er data files that currently available for 
                       PRINTSELECTOR.
        
             READ.ME:  This contains additions or correc-
                       tions to the PRINTSELECTOR manual as well as 
                       additional helpful hints in using PRINTSELECTOR.
        
             READ1ST.DOC:  This is a short file that gives a quick sum-
                       mary of what files are required for a complete 
                       demonstration copy of PRINTSELECTOR and a summary 
                       discription of how they are used.  This file 
                       should allow you to start using PRINTSELECTOR 
                       without having to wade through the rather lengthy 
                       manual.  
        
        In addition to the PRINTSELECTOR archive files you will need a 
        copy of ARC-E.COM to allow extraction of the working and data 
        files from the archives.
        
        
                                        6
        
        






        2.3  Installation for hard disk systems
        
        
             If you have a hard disk system it is suggested that you 
        first create a PRINTSELECTOR working directory.  You can do this 
        with the command:
        
             MKDIR PRINTSEL
             CD PRINTSEL
        
        
        These commands will first create the directory PRINTSEL and then 
        place you in this new directory. Now you are ready to set up the 
        PRINTSELECTOR files.
        
             First copy ARC-E.COM to your PRINTSEL directory (this is the 
        file that allows you to extract the PRINTSELECT programs and 
        data).  Next copy PSLPG1.ARC (the archive file containing the 
        PRINTSELECTOR programs) to PRINTSEL directory.  Now type the 
        command:
        
             ARC-E E PSLPG1 *.*
        
             This will place the PRINTSELECTOR programs in your working 
        directory (you may now want to issue the command: 
        
             ERASE PSLPG1.ARC
        
        to erase the PSLPG1.ARC file and clear some space on your disk).
        
             Next copy PSLDT1.ARC to your working directory.  From Table 
        2 (or more accurately from PRINTFIL.DOC) look up your printer and 
        unarchive the corresponding .OVL, .TMP and .DIS files to your 
        working directory.  As an example, if your printer is a Hewlett 
        Packard Laserjet Plus, you would issue the commands:
        
             ARC-E E PSLDT1 LASERII.OVL
             ARC-E E PSLDT1 LASERII.TMP
             ARC-E E PSLDT1 LASERII.DIS
        
        
        
                                        7
        
        






             You should unarchive all of the data files corresponding to 
        all of the printers you are likely to use.  Then you might wish 
        to erase PSLDT1.ARC i.e.
             
             ERASE PSLDT1.ARC
        
        to save room on your disk.
        
             PRINTSELECTOR recognizes default files which are identified 
        by FPRINT.XXX.  Consequently you should copy the data files of 
        the printer you will use most often to these default values.  As 
        an example, if your primary printer is the LASERJET II you should 
        issue the commands:
        
             COPY LASERII.OVL = FPRINT.OVL
             COPY LASERII.TMP = FPRINT.TMP
             COPY LASERII.DIS = FPRINT.DIS
        
             This completes the hard disk installation of PRINTSELECTOR.
        
        2.4   Installation for floppy disk systems
        
        
             This section will describe how you can make a PRINTSELECTOR 
        working floppy disk.  A complication that arises here is that the 
        archive files and their contents cannot both fit on a double 
        density floppy disk.  The instructions that follow will help you 
        work around this if you have a dual floppy disk system.  
        
             First place the ARC-E.com program and the archive file 
        PSLPG1.ARC on one floppy disk and place it in drive a:. Next place 
        a blank formatted floppy in drive B: (This will become your 
        PRINTSELECTOR working floppy.  While in Drive A:  Issue the 
        command:
        
             A: ARC-E E PSLPG1 *.* B:
        
             This will copy all of the PRINTSELCTOR working programs on 
        disk B.  (You may wish to transfer MAKEMENU.EXE and MAKETEMP.EXE 
        to another disk as these programs will not be used as often as 
        PRINTMENU.EXE, PRINTIT.EXE and SETTEMP.EXE).  
        
        
                                        8
        






        
             Next copy PSLDT1.ARC to disk A (you should probably erase 
        PSLPG1.ARC from disk A to assure adequate space.  Then replace 
        your working disk  in the DISK B drive.   From Table 2 (or more 
        accurately from PRINTFIL.DOC) look up your printer and unarchive 
        the corresponding .OVL, .TMP and .DIS files to your working disk.  
        As an example, if your printer is a Hewlett Packard Laserjet 
        Plus, you would issue the commands:
        
             A: ARC-E E PSLDT1 LASERII.OVL B:
             A: ARC-E E PSLDT1 LASERII.TMP B:
             A: ARC-E E PSLDT1 LASERII.DIS B:
        
             You should unarchive all of the data files corresponding to 
        all of the printers you are likely to use.  
        
             PRINTSELECTOR recognizes default files which are identified 
        by PRINTFIL.XXX.  Consequently you should copy the data files of 
        the printer you will use most often to these default values.  As 
        an example, if your primary printer is the LASERJET II you should 
        issue the commands:
        
             B: COPY LASERII.OVL = FPRINT.OVL
             B: COPY LASERII.TMP = FPRINT.TMP
             B: COPY LASERII.DIS = FPRINT.DIS
        
             This completes the creation of a PRINTSELECTOR working disk.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                        9
        






         TABLE 2.1 AVAILABLE CONTROL FILES FOR PRINTSELECTOR
         
        PRINTER FILE                 OVERLAY FILE      TEMPLATE
         
         CITIZEN MSP-10              CIT10.OVL         CIT10.TMP
         CITIZEN MSP-15              CIT10.OVL         CIT10.TMP
         CITOH 8510                  CITOH.OVL         CITOH.TMP
         CRT DISPLAY CONTROL         SCREEN.OVL        SCREEN.TMP
         EPSON FX85                  EPSFX85.OVL       EPSFX85.TMP
         EPSON FX185                 EPSFX85.OVL       EPSFX85.TMP
         EPSON FX (OLD MODEL)        EPSFX.OVL         EPSFX.TMP 
         EPSON FX (old model with    EPSFXLW.OVL       EPSFXLW.TMP
         "Letter Writer" extension)
         EPSON 286                   EPS286.OVL        EPS286.TMP
         EPSON 286E                  EPS286E.OVL       EPS286E.TM 
         EPSON LQ500                 EPSLQ.OVL         EPSLQ.TMP
         EPSON LQ1000E               ESLQ.OVL          EPSLQ.TMP
         HP DESKJET                  DESKJET.OVL       DESKJET.TMP
         HP DESKJET with soft fonts  DSKJSF.OVL        DESKJET.TMP
         HP DESKJET with cartridges  DJABCM.OVL        DESKJET.TMP 
          HP22706A,B,C,M
         HP DESKJET with cartridges  DJTMSRM.OVL       DESKJET.TMP 
          HP22706D,E,F 
         HP DESKJET with cartridges  DJHELV.OVL        DESKJET.TMP 
          HP22706G,H,J
         HP DESKJET with Epson       DESKEPS.OVL       DESKEPS.TMP 
          fx emulation cartridge               
         HP DESKJET PLUS             DESKJETP.OVL      DESKJET.TMP
         HP DESKJET PLUS             DSKJPSF.OVL       DESKJET.TMP
          with soft fonts
         HP DESKJET PLUS             DJPABCM.OVL       DESKJET.TMP 
          with cartridges       
          HP22706A,B,C,M
         HP DESKJET PLUS             DJPTMSRM.OVL      DESKJET.TMP 
          with cartridges
          HP22706D,E,F 
         HP DESKJET PLUS             DJPHELV.OVL        DESKJET.TMP 
          with cartridges
          HP22706G,H,J
         HP DESKJET PLUS             DESKEPS.OVL       DESKEPS.TMP 
          with fx emulation cartridge
         HP LASERJET                 LASER.OVL.        LASER.TMP
         HP LASERJET PLUS            LASER.OVL         LASER.TMP
         HP LASERJET with math       LASMATHE.OVL      LASMATHE.TMP 
          elite module
         HP LASERJET II              LASJETII.OVL      LASJETII.TMP
        






         IBM PROWRITER               IBM.OVL           IBM.TMP
         OKIDATA 92                  OKI92.OVL         OKI92.TMP
         OKIDATA 93                  OKI92.OVL         OKI92.TMP
         OKIDATA 192,193 (STD)       OKI19X.OVL        OKI19X.TMP
         OKIDATA 292,293,294 STD     OKI29X.OVL        OKI29X.TMP
         OKIDATA 393 STD             OKI39X.OVL        OKI39X.TMP  
         NEC 8023                    CITOH.OVL         CITOH.TMP
         STAR NX1000                 STAR1000.OVL      STAR1000.TMP
         TEKTRONIX 4696              TEK4696.OVL       TEK4696.TMP
         TOSCHIBA P321SL             TP321.OVL         TP321.TMP
         TOSCHIBA P341SL             TP321.OVL         TP321.TMP
        
        
        






        CHAPTER 3:   USING PRINTMEN IN THE MENU MODE TO CONTROL YOUR 
        PRINTER 
        
        
        
             Because of its natural menu structure, PRINTMEN is very easy 
        to use.   All of the descriptive material in this chapter assumes 
        that you are operating in either your PRINTSELECTOR working disk 
        or directory. 
        
        3.1  Starting PRINTMEN
        
             PRINTMEN may be started in two ways.  If a default file has 
        been installed (see chapter 2) you need only type PRINTMEN fol-
        lowed by the ENTER key, and PRINTSELECTOR's menu mode will begin 
        to operate.  
        
             If you have not installed a default file or if you wish to 
        control a printer other than the one chosen in chapter 2 as your 
        default printer, you must type PRINTMEN followed by a space and 
        the name of the overlay file corresponding to your printer.  The 
        overlay file name is followed by the ENTER key.  Examples of 
        legal calling sequences are:
        
        PRINTMEN
        
             "Invokes the PRINTMEN program using the default file 
             fprint.ovl.
        
        PRINTMEN EPS286E
        
             "Invokes the PRINTMEN program using the EPS286E.OVL overlay 
             file.
        
             Overlay files and their corresponding printers are listed in 
        table 2.1 of chapter 2.  An updated listing is found on 
        your .CP2distribution disk in file PRINTFIL.DOC.  After reading 
        chapter 4 you will also be able to make your own customized over-
        lay files. 
        
        
                                       11
        
        






        3.2  Using PRINTMEN
        
             PRINTMEN may be started in two ways.  If a default file has 
        been installed (see chapter 2) you need only type PRINTMEN fol-
        lowed by the ENTER key, and PRINTSELECTOR's menu mode will begin 
        to operate.  
        
             If you have not installed a default file or if you wish to 
        control a printer other than the one chosen in chapter 2 as your 
        default printer, you must type PRINTMEN followed by a space and 
        the name of the overlay file corresponding to your printer.  The 
        overlay file name is followed by the ENTER key.  Examples of 
        legal calling sequences are:
        
        PRINTMEN
        
             Invokes the PRINTMEN program using the default file 
             fprint.ovl.
        
        PRINTMEN EPS286E
        
             Invokes the PRINTMEN program using the EPS286E.OVL overlay 
             file.
        
             Overlay files and their corresponding printers are listed in 
        table 2.1 of chapter 2.  An updated listing is found on your 
        distribution disk in file PRINTFIL.DOC.  After reading chapter 4 
        you will also be able to make your own customized overlay files. 
        
             PRINTMEN displays are organized as screens.  Each screen is 
        a single display frame of your CRT.  Figure 3.1 is a typical 
        PRINTMEN display screen.  Screens generally correspond to a 
        particular category of printer function.  For instance, it is 
        common to dedicate a screen to font selection and a separate 
        screen to margin settings. 
        
             As seen in Fig 3.1, each screen has a title at the top 
        identifying the kind of control functions described in this  
        particular screen.  The title is followed by a list of control 
        items and these .cp 10
        
        
        
                                       12
        






        
             GENERAL OR MISCELLANEOUS COMMANDS                           
                                                                         
                                                                         
             1.  Bold print select                                       
             2.  Bold print clear                                        
             3.  Underline all characters                                
             4.  Stop the underlining of all characters                  
                                                                         
                                                                         
             please input one of the following followed by 'enter'       
             f to go forward one screen      b to go back one screen     
             q to quit and output escape sequences                       
             command number to be sent to output unit                    
                                                                         
        
        
        
        
        FIGURE 3.1 PRINTMEN WORKING DISPLAY SCREEN
        
        
        
        are in turn followed by a list of instructions on how to use the 
        screen.   
        
             The control items are identified by numbers.  Typing the 
        number adjacent to a given item will select the corresponding 
        control function and place it in a queue of functions to be sent 
        to the printer.  
        
             Control functions are not sent to the printer until you exit 
        from PRINTMEN and there are several opportunities to abort the 
        PRINTMEN operation before this happens.  
        
             You may exit from PRINTMEN without sending any control 
        signals by simultaneous depression of the "CTRL" key and the "C" 
        key. 
        
        
        
                                       13
        
        






             Some control items require the further input of numerical 
        data.  For example a "Set left margin" command will have to 
        request that you input the column position of the new left mar-
        gin. 
         
        
             Once you select a control item that requires further input, 
        the CRT display will clear and a question will appear asking for 
        the appropriate information. After you have entered the required 
        data you will be returned to your original control screen. 
        
             As Figure 3.1 shows, the bottom of the screen is a set of 
        commands for proceeding through the program.  To advance to the 
        next screen you need only enter "f" followed by the ENTER key.  
        
        To display the previous screen, you need only enter "b" followed 
        by the ENTER command. 
        
        
        3.3  Exiting PRINTMEN
        
             After you have selected one or several printer commands, you 
        may send them to your printer and leave the PRINTMEN program, 
        simply by pressing the "q" key followed by ENTER. 
        
             Before leaving PRINTMEN the termination screen is displayed. 
        This is shown in Figure 3.2.  
        
             The top of the termination screen lists the printer control 
        functions that you have selected.  In most cases you will simply 
        type "g" followed by ENTER to exit and send the selected control 
        commands to your printer.  If you wish to exit without sending a 
        control string to the printer you may type ENTER twice.  (Actual-
        ly to exit PRINTMEN without sending a control string you may type 
        any character other than "g", "G", "c", or "C" followed by 
        ENTER). 
        
             The termination screen gives you one other option.  MSDOS 
        and PCDOS define structures called "logical units to which pe-
        ripheral elements such as printers are attached.  These struc-
        tures allow you to simultaneously connect several peripheral 
        elements to your computer.  The "logical unit" is really a name 
        that identifies external pieces of equipment for inputting
        
        
                                       14
        






        
             You have input the following commands 
        
         
             Bold print select 
             pica pitch (10 cpi) 
             ASCII characters 
        
         
             if you wish to send these commands to output type g
             if you wish to change output logical unit from lpt1:  type c
             if you wish to exit without output type any other key
        
        
        
        
        
        FIGURE 3.2  PRINTMEN TERMINATION SCREEN
        
        
        
        and outputting data.  Usually your printer is assigned to "LPT1:" 
        (which is a legal logical unit name).  Other legal logical unit 
        names are "LPT2:" , "LPT3;, ", "COM1:" and "COM2":.    
        
             The termination screen gives you the option of changing from 
        the default logical unit to another.   
        
             If you type "c" or "C" (followed by ENTER) in the termina-
        tion screen you will be told what the default logical unit is and 
        asked if you wish to continue in changing the logical unit.  If 
        you wish to continue type "y" or "Y" if not type "n" or "N".  If 
        you elect to continue and change the logical unit you will be 
        given a numbered list of all the legal logical units.  Selecting 
        the appropriate number followed by ENTER will select the corre-
        sponding logical unit and return you to the termination screen.
        
        
                                       15
        
        






        
        3.4  Saving and automatically using a printer configuration
        
             The PRINTMEN program works by generating a file "PTRANS.FIL" 
        that contains  the control sequences that are sent to the print-
        er.  When you exit PRINTMEN this file is automatically transmit-
        ted to the logical unit specified in the overlay file.  However, 
        PTRANS.FIL is not erased.  If you wish to reestablish the control 
        you need only retransmit the control file to your printer.  
        Assuming your printer is assigned to the logical unit LPT1: this 
        can be accomplished by the command:
        
             COPY PTRANS.FIL = LPT1:
        
             Whenever PRINTMEN is invoked it produces a new version of 
        PTRANS.FIL, consequently if there are several common printer 
        configurations that you like to use, you should rename PTRANS.FIL 
        after these have been defined by PRINTMEN and transfer the new 
        configuration files to the printer when you wish to use them 
        (using the copy instruction shown above).
        
             If there is a standard printer configuration that you like 
        to use most of the time, you can place it in your AUTOEXEC.BAT 
        file so that it is invoked whenever you turn on you computer.  It 
        is recommended that you do not use PTRANS.FIL but rename it for 
        use in your AUTOEXEC.BAT file.  
        
             For instance if you have defined a printer configuration 
        that you like you may rename it by the command:
         
             COPY PTRANS.FIL = \PRINTER.CFG
        
        you may then add the statement:
        
             COPY PRINTER.CFG = LPT1:
        
        to your AUTOEXEC.BAT file in your root directory.
        
        
        
                                       16
        






        3.5  Using PRINTMEN to control your CRT screen
        
             PRINTSELECTOR programs can also be used to control your CRT 
        screen.  This can be done in conjunction with the MSDOS driver 
        ANSI.SYS.  This driver accepts control escape sequences in the 
        same way that a printer does.  However ANSI.SYS must be enabled.  
        This is accomplished by including the command:
        
             DEVICE=ANSI.SYS
        
        in the CONFIG.SYS file in your root directory.  In addition to 
        this command, ANSI.SYS must also be present in your root directo-
        ry.  Alternatively, ANSI.SYS's home directory must be specified.  
        For instance, ANSI.SYS and similar drivers and utilities are 
        often stored in a special directory named DOS.  In this case, the 
        command:
        
             DEVICE=\DOS\ANSI.SYS
        
        must be included in your CONFIG.SYS file.  
        
             When ANSI.SYS is properly installed, escape sequences will 
        be treated as screen control symbols if they are directed to the 
        "CON:" logical device.  The overlay file "SCREEN.OVL" has been 
        included in your PRINTSELECTOR package and it can be used by 
        PRINTMEN to set up screen commands.  
        
             PRINTMEN generates screen commands in the same way it gener-
        ates printer commands.  It creates a file PTRANS.FIL which is 
        saved and copied to the appropriate logical device (in the case 
        of screen control this logical device is "CON:").  To establish a 
        screen control configuration that is invoked when ever the com-
        puter is turned on, you need only rename the PTRANS.FIL file and 
        copy it to CON: in your AUTOEXEC.BAT file.  In other words, if 
        you generated your favorite screen configuration setting and 
        renamed its PTRANS.FIL file by:
        
             COPY PTRANS.FIL = \SCREEN.CFG
        
        
        
                                       17
        
        






        (placing the new file SCREEN.CFG in your root directory. You 
        could then automatically invoke this screen configuration by 
        placing the statement:
        
             COPY SCREEN.CFG = CON:
        
        in your AUTOEXEC.BAT file.  
        
             
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       18
        
         






        CHAPTER 4: MAKING YOUR OWN PRINTER OVERLAY FILES USING 
        MAKEMENU
        
        
        
        
        4.1  Introduction 
        
             While at first it might appear to be a difficult and in-
        volved task, making your own customized overlay files is actually 
        quite easy.  The discussion in this chapter is a bit detailed.  
        We recommend that after reading the first two sections you exper-
        iment with a scrap overlay file.  For the most part, the menu 
        functions are self explanatory.
        
              DO NOT USE AN EXISTING OVERLAY FILE.  
        
             For instance, if you type the commands 
        
        COPY FPRINT.OVL = SCRAP.OVL (followed by ENTER) 
        
        
        You will have created a new overlay file: SCRAP.OVL that you can 
        experiment with in complete safety. 
        
             PRINTSELECTOR allows you to create, edit or display an 
        overlay file through the use of the MAKEMENU program.  The legal 
        calling sequence for the MAKEMENU program is:  MAKEMENU followed 
        by the name of the overlay file to be created, edited or dis-
        played.  The ".OVL" extension for the overlay file is not neces-
        sary.  Examples of legal calling sequences are: 
        
        MAKEMENU SCRAP.OVL
             
             creates,edits or displays SCRAP.OVL
        
        MAKEMENU SCRAP
             
             creates,edits or displays  SCRAP.OVL
        
                                       19
        
        






        MAKEMENU
        
             the program will ask for the name of an overlay file with 
             which to work
        
             Once you have entered the correct calling sequence for 
        MAKEMENU,  you will be asked if you wish to: 
        
             1   create a new overlay file
        
             2   edit an existing overlay file
        
             3   display all of the properties of an existing overlay 
             file.
        
        An option is selected by selecting one of the appropriate num-
        bers. 
        
             Depending on how you entered the MAKEMENU program, you will 
        either be asked for a new overlay file file name or if you wish 
        to continue to operate with the overlay file that you have al-
        ready specified. 
        
             We will describe the options and menus available in MAKEME-
        NU, but first it would be helpful to describe the format of the 
        screens that will be presented to you.    
        
        4.2  Screen and overlay file formats
        
             As we discussed in Chapter 3, PRINTMEN displays a series of 
        "screens" each of which contains a number of control items which 
        can be selected to generate a series of control "escape se-
        quences" that are sent to the printer.  Sometimes a numerical 
        variable must be added.  For instance, the column position of one 
        of the margins , or the number of inches separating lines of 
        print may be requested.  
        
             Because MAKEMENU presents more item data than just the 
        titles displayed by PRINTMEN, a full PRINTMEN screen may not fit 
        on a MAKEMENU CRT display screen.   When .CP 10
        
        
                                       20
        
        






             SCREEN  1 GENERAL COMMANDS                                                                
                                                                                                       
             Menu item  1                                                                              
             Line 1  reset most commands to default values                                             
             Line 2  number of arguments = 0                                                           
             Line 3  1b  45                                                                            
                                                                                                       
             Menu item  2                                                                              
             Line 1  Set top margin                                                                    
             Line 2  number of arguments = 1                                                           
             Line 3  Please input the number of lines at top of page                                   
             Line 4  1b  26  6c  #1  45  1b  26  61  30  52                                            
                                                                                                       
             ENTER
             f for forward one frame in screen  b for back one frame in screen           
             u for forward one screen      r for back one screen                    
             q to stop                                                                                 
             d to delete an item           i to insert an item                      
             s to insert a screen               x to delete a screen                     
             t to edit title                                                                           
             the item number to edit                                                                   
        
        
        
        
        
        
        FIGURE 4.1  A TYPICAL MAKEMENU DISPLAY SCREEN
        
        
        
        this is the case the display screen is broken into screen frames 
        which display control items.  
        
             Each overlay file contains up to 14 screens.  Each screen 
        contains up to 14 control items.  The process of making an over-
        lay file is basically the process of filling in the blanks in the 
        screen and item data structures.  
        
                                       21
        






             Figure 4.1 shows the first frame of a typical screen.  Each 
        screen contains a title block (which is a phrase or sentence 
        describing the functions in the screen) and a number of control 
        items.  (If more than one frame is contained in a screen, frames 
        after the first do not display the screen title). 
        
             Menu item  2
             Line 1  Set top margin
             Line 2  number of arguments = 1
             Line 3  Please input the number of lines at top of page
             Line 4  1b  26  6c  #1  45  1b  26  61  30  52 
        
             please enter the line number you wish to change
             enter return to make no changes
        
        
        
        
        FIGURE 4.2  DISPLAY OF AN EDIT ITEM SCREEN 
        
        
        
             Figure 4.2 shows the form of a control item.  As seen in the 
        figure, the item contains the following data elements: 
        
         item title:    (line one in the figure)
        
        
        
        
        
             This is the phrase or sentence that is displayed in PRINTMEN 
             to describe the function to be selected. 
        
         number of arguments:   (line two in the figure) 
        
             This is the number of arguments that will be asked for by 
             the item if it is selected.  The number of arguments must be 
                  less then or equal to 5.  If no arguments are required then 
             this number is set to zero.  
        
        request for arguments:   (line 3 in the figure)
        
        
                                       22
        






             Menu item  2
             Line 1  Set top margin
             Line 2  number of arguments = 1
             Line 3  Please input the number of lines at top of page
             Line 4  1b  26  6c  #1  45  1b  26  61  30  52 
        
             please enter the line number you wish to change
             enter return to make no changes
        
        
        
        
        FIGURE 4.2  DISPLAY OF AN EDIT ITEM SCREEN 
        
        
        
             These are the phrases or sentences that are used by PRINTMEN 
             to identify and request the input of arguments
        
         escape sequence:   (line 4 in the figure)
             
             These are the actual escape characters that are sent to the 
             printer.  Up to 40 escape characters per item are allowed.  
             The .format for the display of escape sequences is described 
             below.
        
             All overlay screens have the same structure except for the 
        first which is screen 0.  This screen contains only one data 
        element, the default logical unit.  This is automatically set to 
        "LPT1": but can be set to any other legal logical unit. 
        
             The data elements that are either sentences or phrases may 
        not be over 80 characters in length.  They will be displayed 
        exactly as entered into the overlay file. 
          
             All this is pretty straight forward. However, the way in 
        which escape characters are stored will require some more expla-
        nation.  
        
        
        
        
        
                                       23
        
        






        
             The principle method of display and entry for escape charac-
        ters is hexadecimal format. (If you are not familiar with hexa-
        decimal format please see the tutorial in appendix B.)  There are 
        some exceptions however.  If a variable is to be introduced into 
        the stream of escape characters, it is identified by either a 
        "#", a "&" , or an "*" followed by an integer identifying the 
        order in which that particular variable was entered into the 
        control program.  As an example the escape sequence: 
        
             1b  02  #1  5a  *3  05  #3  &2 
        
        would be a string of escape sequences in which :
        
             the third element is variable number 1  
        
             the fifth and seventh elements are variable number 3 
        
             the last element is variable 2 
             
        
             The "#","&",and "*" symbols denote different ways in which 
        the input variables are interpreted.  The three different symbols 
        are needed because printers differ in the way in which they 
        request numerical values in their escape sequences.  Some print-
        ers want input variables represented as a string of ASCII charac-
        ters (for instance 25 would be represented in hex as 32  35) 
        while others prefer to have their input variables represented as 
        8 bit binary numbers.  (For instance 25 would be represented as 
        the hexadecimal representation 19).  Some printers use both types 
        of number representation. 
        
             In MAKEMENU a variable that is to be presented as ASCII 
        characters is identified by "#", while a variable that is to be 
        represented by the hexadecimal expression of a binary number is 
        preceded by a "&".  The "*" is used to interpret a variable as 
        the ASCII symbol corresponding to the decimal number of the 
        symbol.  This last notation is used principally in inputting 
        escape sequences to the ANSI.SYS driver that controls CRT screen 
        displays.  
        
        
                                       24
        






             Some examples might help.  
        
        #i where the ith variable is 5
        
             will introduce the ASCII character 5 (hex 35) into the 
             escape character stream.
        
        &i where the ith variable is 5
        
             will introduce the ASCII character ENQ (hex 05) into the 
                  escape character stream.
        
        *i where the ith variable is 5
        
             will introduce the ASCII character ENQ (hex 05) into the 
             escape character stream.
        
        *i where the ith variable is 16
        
             will introduce the ASCII character DLE (hex 10) into the 
             escape character stream.
        
            The "#" character can be used to introduce an set of ASCII 
        characters as well as a numerical value.  For instance if #i were 
        present in the escape character representation, and the string 
        "this is not a number" were input
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       25
        






        
        
        
        
             char no   1  1b    ESC
             char no   2  26    &
             char no   3  6c    l
             char no   4  #1
             char no   5  45    E
             char no   6  1b    ESC
             char no   7  26    &
             char no   8  61    a
             char no   9  30    0
             char no  10  52    R
        
             Please enter the number of the escape character to be changed
             To continue without a change, type return
             to insert a character type i    to delete a character type d
        
        
        
        FIGURE 4.3  THE DISPLAY OF AN EDIT ESCAPE SEQUENCE SCREEN
        
        
        
        
        
        
        
             In creating or modifying a printer specification file
             Please input the desired action 
        
             1)     Create a new printer specification file
             2)     Edit an old printer specification file
             3)     Display an old printer specification file
        
        
        
        
        FIGURE 4.4  THE INTRODUCTORY COMMAND SCREEN OF MAKEMENU 
        
                                       26
        






        when PRINTMEN asked for variable i, the ASCII characters in the 
        string would replace the variable in the escape sequence.
        
             There is an expanded mode of display for escape sequences.  
        This is shown in Figure 4.3 and is made available whenever an 
        item line containing an escape sequence is selected for editing.  
        
            As seen in Figure 4.3, in the expanded display mode the 
        escape characters are numbered and their hexadecimal description 
        is displayed.  In addition, if the character is a printable ASCII 
        character, its printed form is displayed.  If the ASCII character 
        is not printable the standard mnemonic for the character is 
        displayed.  The description column is left blank if the character 
        is an input variable.
        
             Appendix A describes the actual stored form of an overlay 
        file.  This may be useful in understanding the operation of 
        PRINTMEN but it is not needed in the menu based development or 
        editing of an overlay file. 
        
        
        4.3  Entering Data
        
        
            As we discussed earlier, entering data with the MAKEMENU 
        program is just a matter of following the menu directives.    
        Phrase and sentence inputs are typed as they should appear. 
        Completion of the input of a phrase or sentence is signaled by 
        the ENTER key. 
        
             Some special provisions have been made to simplify the input 
        of escape sequences.  Usually an escape character is entered as a 
        hexadecimal number.  However, if a printable escape character is 
        to be entered, it may be entered as its printable key stroke 
        surrounded by double quotation marks (i.e. "3" is equivalent to 
        the hexadecimal input of 33). 
        
             There is an even greater convenience:  If a string of print-
        able escape characters is to be sent to the printer, it may be . 
        input to the MAKEMENU program by placing the whole string between 
        double quotation marks.  As an example "abcd" is exactly equiva-
        lent to the hexadecimal input of 48 49 50 51. 
        
        
                                       27
        






        
        
        
        
        
             The current destination logical unit is LPT1:
        
             do you wish to change it (y or n)
        
        
        
        
        
        
        
        
        
        FIGURE 4.5  THE MAKEMENU SCREEN ASKING FOR THE DEFAULT LOGICAL 
        UNIT. 
        
        
        
        
        
        4.4  Creating an overlay file for the first time
        
             When you first enter the MAKEMENU program you will be pre-
        sented with the display in figure 4.4   You may make your selec-
        tion by typing the appropriate number.  Choosing the "create a 
        new file" option (typing number 2) will allow you to develop an 
        entirely new overlay file.  This procedure, like all of the 
        PRINTSELECTOR procedures is menu driven. 
        
             Upon first entering the create option you will be shown the 
        screen in figure 4.5.  This screen displays the name of the 
        default logical unit that will receive the printer control 
        strings.  You will be asked if you would like to change this 
        default value.  If you do not wish to change the default logical 
        unit, simply enter "n" or "N" (followed by ENTER) .   
        
        
        
                                       28
        
        






             If you do wish to change the default logical unit, enter "y" 
        or "Y" (followed by ENTER) in response to the question and you 
        will be given a list of legal logical units from which you can 
        select the new default value.  
          
             After you have completed your selection of the default 
        logical unit you will begin the creation of the main data forms 
        of the overlay files.   Creation of an overlay file is performed 
        through the creation of a number of screens.  Screens are created 
        through the input of a screen title and the creation of a number 
        of control items. 
        
             Screens are created in sequence (screen 1 being created 
        first followed by the creation of screen 2 and so on).  At the 
        beginning of each screen creation procedure you will be asked if 
        you want to continue.  If you answer no (with an "n" or an "N" 
        response), You will exit from MAKEMENU and the overlay file you 
        have created will be written to disk.    
        
             At the beginning of each control item creation procedure, 
        you will asked if you wish to continue.  If you answer no (with 
        an "n" or an "N" response) MAKEMENU will exit from the creation 
        of the current screen and ask if you wish to create the next 
        screen. 
        
             Actual creation of screens and control items are simply a 
        matter a making the appropriate responses to the menu directives.  
        In the creation of a screen you will asked to input the screen 
        title.  Next you will proceed to the creation of the items in the 
        screen. 
        
             In creating an item you will first be asked to input the 
        number of variables that will be used by the screen.  Next you 
        will be asked to input the item title.  If the item requires 
        variable arguments you will next be asked to input the argument 
        request sentences for each of the arguments. This will be fol-
        lowed by the input of the actual system escape sequences.  You 
        will be asked to input escape characters one at a time.  However, 
        if you wish to input a string of escape characters enclosed in 
        double quotations you may do so and MAKEMENU will recognize the 
        whole string and adjust the escape character count accordingly.  
        
        
        
                                       29
        






             To enter variables into the escape character string, simply 
        input "#i",*i, or "&i" (replacing i by the appropriate integer) 
        as escape characters. 
        
             When you have completed the escape sequence desired for an 
        item, press ENTER without preceding it by an escape character.  
        
             Upon receipt of the last escape character, MAKEMENU  gives 
        you the opportunity to edit the item you have just entered.  The 
        procedure follows the normal edit item method described in sec-
        tion 4.5 below.  
        
             Remember:  To exit MAKEMENU and save your overlay file, just 
        keep answering no to the MAKEMENU questions.  
        
        
        4.5  Editing overlay files
        
            The second option available to you upon entering the MAKEMENU 
        program is to edit an existing file.  This is much less work than 
        creating new file.  
        
             Upon first entering the edit option you will be informed of 
        the default logical unit that will receive the printer control 
        strings.  You will then be asked if you would like to change this 
        default value.  If you do not wish to change the default logical 
        unit, simply enter "n" or "N" and you will begin to edit the 
        first screen of your overlay file.   
        
             If you do wish to change the default logical unit  enter "y" 
        or "Y"  (followed by ENTER) in response to the question and you 
        will be given a list of legal logical units from which you can 
        select the new entry.  
        
             After you have completed your selection of the default 
        logical unit you will be shown the first frame of the first 
        screen of the overlay file being edited.  Figure 4.1 is a typical 
        example. 
        
             In Figure 4.1, the title of the screen is displayed at the 
        top.  This is followed by the exhibition of the data in several 
        control items and finally followed by a menu of possible actions. 
        
        
                                       30
        






             Menu control items are labeled by number.  Data internal to 
        control items are listed with line numbers.  The first line in a 
        control item is its title.  This is followed by the number of 
        control variables or arguments.  If there are control variables 
        required in the item, there will be a line number and a phrase 
        for each request for a control argument.  
        
             The final line displayed in an item is the escape sequence.  
        Escape characters are displayed in hexadecimal form with numeri-
        cal arguments represented by  #i, &i or *i as described in sec-
        tion 4.2. 
        
             Now going on to look at the menu of commands at the bottom 
        of Figure 4.1.
        
          The first four choices are display commands.  These are: 
        
        f for forward one frame in screen:  
        
             If an "f" followed by ENTER is typed, the next frame of the 
             current screen will be displayed.  If there are no higher 
             numbered frames, the current frame will be continue to be 
             displayed.
        
        b for back one frame in screen:
             
             If a "b" followed by ENTER is typed, the previous frame of 
             the current screen will be displayed.  If there are no lower 
             numbered frames, the current frame will continue to be 
             displayed. 
        
        u for forward one screen: 
        
             If a "u" followed by ENTER is typed, the first frame of the 
             next sequential screen will be displayed.  If there are no 
             higher numbered screens than the current screen, the cur-
             rently displayed frame and screen will not be changed.
        
        
        
        
        
        
                                       31
        






        r for back one screen: 
        
             If an "r" followed by ENTER is typed, the first frame of the 
             previous screen will be displayed.  If the current screen is 
             screen 1, entering an "r" will display the current logical 
             unit and you  will be asked if you wish to change it.   If 
             you do elect to change the current logical unit, a list of 
             legal entries will be presented.  After you choose one of 
             the legal default logical units, frame 1 of screen 1 will be 
             displayed. 
        
        The remaining inputs in the menu of Figure 4.1 are control com-
        mands.  These are: 
        
        q to  stop:   
        
             If a "q" followed by an ENTER is typed, you will stop and 
             exit the edit program. You will then be asked if you wish to 
             save your edited overlay file before exiting.
        
        d to  delete item:  
             
             If a "d" followed by an ENTER is typed, you will be asked 
             which item you wish to delete.  If you enter an item number 
             that is present, that item will be deleted and the numbering 
             of all of the other items will be adjusted accordingly. 
              
        
        i to insert an item:  
             
             If an "i" followed by an ENTER is typed, you will be asked 
             where you wish to insert a new item.  If you enter an item 
             number that is within the current range of item numbers or 
             one more then the highest item number, a new item will be 
             created and inserted at the position you have specified.  
             All of the other item numbers will be adjusted accordingly. 
             You will be asked to input the information for the new item 
             just as if you were creating it in the create menu described 
             in section 4.3. 
        
        
        
        
        
                                       32
        






        s to insert a screen:    
             
             If an "s" followed by an ENTER is typed, you will be asked 
             where you wish to insert a new screen.  If you enter a 
             screen number that is within the current range of screen 
             numbers or one more than the highest screen number, a new 
             screen will be created and inserted at the position you have 
             specified.  All of the other screen numbers will be adjusted 
             accordingly.  You will be asked to input the information for 
             the new screen just as if you were creating it in the create 
             menu described in section 4.3.  After insertion of a new 
             screen, frame 1 of screen 1 will be displayed.  
        
        x to delete a screen:  
        
             If an "x"  followed by an ENTER is typed, you will be asked 
             which screen you wish to delete.  If you enter a screen 
             number that is present, that screen will be deleted and the 
             numbering of all of the other screens will be adjusted 
             accordingly. 
        
        t to edit title: 
        
             If a "t" followed by an ENTER is typed, you will be asked to  
             input a new title for the screen presently being displayed. 
        
        the item number to edit: 
        
             If you type the number (followed by ENTER) of a control item 
             existing in the presently displayed screen (even if it is 
             not in the presently displayed frame), you will enter the 
             item edit menu for the specified item.
        
             This leads us to the menu for editing a control item.  An 
        example is shown in Figure 4.2.  The display portion is simply a 
        repeat of the control item data displayed in the previous menu. 
        You are asked to enter the line number of the data you wish to 
        change.  You can always leave this menu by typing an ENTER with 
        no line number specified. 
        
        
        
        
        
                                       33
        






             If you wish to change the menu title (line 1) or one of the 
        argument request phrases, enter the corresponding numbers (fol-
        lowed by an ENTER) and you will be asked to enter the new phrase.  
        After entering the new phrase you will be returned to the edit 
        item menu.  
        
             If you elect to change the number of variables (line 2) you 
        will be asked for the new number of arguments and then asked to 
        input new arguments for all of the variable request phrases.  
        
             If you elect to change the escape sequence, (the last line n 
        the data display), you will be sent to still another menu. this 
        is the edit escape sequence menu shown in Figure 4.3.  
        
             You may always exit the escape sequence edit menu by typing 
        ENTER without any other command. 
        
             In Figure 4.3 all of the escape characters are numbered and 
        translated.  If an escape sequence character is a printable 
        character, it's ASCII character will be printed.  If the escape 
        character is not a printable character, its standard mnemonic 
        will be listed.  Up to 40 characters are permitted in an single 
        item escape sequence. 
        
             The possible control functions are listed below the display 
        portion of the escape sequence  edit menu.  These are :  
        
         enter the number of the escape character to be changed:
        
             If you enter an escape character number followed by ENTER, 
             you will be asked to enter the new escape character.  This  
             may be any of the legal representations of an escape charac-
             ter: i.e. 
                  
                  hexadecimal constant 
        
                  #i, &i or *i where i is the number of a input variable 
                   
                  a single or sequence of printable characters surrounded 
                  by double quotes 
        
             
        
        
                                          34
        
        






        
             When a new escape character has been entered you will be 
             returned to the edit item menu. 
        
        To insert a character type i:   
        
             If you enter an "i" followed by ENTER you will be asked for 
             the position at which you wish to insert an escape charac-
             ter.  You may enter a number in the range of existing escape 
             characters or greater by one than the highest numbered 
             escape character.  You will then be asked to enter the new 
             escape character which can be by any of the legal methods 
             that have been discussed.  When this procedure is followed 
             you will have inserted the new escape character or sequence 
             of characters at the specified location.  The escape charac-
             ter previously at the location at which the new sequence was 
             inserted will now be found at the end of the newly inserted 
             sequence. 
        
             After an escape character has been inserted you will be 
             returned to the edit item menu.
        
        to  delete a character type d:
        
             If you enter a "d" followed by ENTER you will be asked which 
             escape character you wish to delete.  Upon entering the 
             number of an escape character present in the display, this 
             character will be removed and the numbering of all the other 
             characters automatically .adjusted.  After deletion of an 
             escape character you will be asked to enter the number of 
             the next escape character to be deleted.  If you do not wish 
             to delete another escape character, type "ENTER" and you 
             will be returned to the escape character editing menu.
        
        
        4.6  Displaying an overlay file 
        
              The display overlay file option is the third and last one 
        available in the MAKEMENU program.  It provides the same viewing 
        of the overlay file's screens as does the edit option except that 
        it does not provide the opportunity to change any 
        
        
        
                                       35
        






        
        
             SCREEN  1  GENERAL OR MISCELLANEOUS COMMANDS 
         
        
             Menu item  1
             Line 1  Bold print select
             Line 2  number of arguments = 0
             Line 3  1b  21 
        
             Menu item  2
             Line 1  Bold print clear
             Line 2  number of arguments = 0
             Line 3  1b  22 
            
             ENTER
        
             f for forward one frame in screen  b for back one frame in screen
             u for forward one screen      r for back one screen
             q to stop
        
        
        
        FIGURE 4.6 TYPICAL MAKEMENU DISPLAY MODE SCREEN 
        
        
        
        
        of the displayed values.  
        
             Fig 4.6 shows a typical display frame in the display option.  
        Again screens may be broken into display frames if they will  not 
        otherwise fit on a single CRT display. 
        
        4.7  Backup Files 
        
             In any case where the MAKEMENU program changes the  contents 
        of  an  existing overlay file, a back up file  is  created.   The 
        backup file will have the same name as the overlay file but  with 
        the ".OVL". extension will be replaced by a ".OBK"  extension. 
        
        
        
        
                                       36
         






        CHAPTER 5:  USING THE INSERTION MODE TO PLACE PRINTER CONTROL 
        COMMANDS IN A DOCUMENT 
        
        
        
        5.1  Introduction
        
             The  PRINTSELECTOR  insertion mode allows the  placement  of 
        special  escape  sequences inside a file.  escape  sequences  are 
        designated  by special key codes placed in the source file.   Two 
        programs are available to exercise the insertion mode.  The first 
        program is SETTEMP which is a memory resident program that  auto-
        matically  replaces key codes with escape sequences  whenever  an 
        output  is  sent to the printer.  The second program  is  PRINTIT 
        which is not memory resident and operates on files.  When PRINTIT 
        is called a source file for it to operate on must also be  speci-
        fied.   PRINTIT  will  read the source file and send  it  to  the 
        printer  after  replacing  key codes with  commanded  escape  se-
        quences.   PRINTIT will also generate a copy of the  source  file 
        with the escape sequences inserted at the designated places.
        
        5.2  Generating a Source File
        
             The first step in using the PRINTSELECTOR insertion mode  is 
        to generate a "source file".  This file contains the  information 
        to be printed with the print commands indicated by key codes.   
        
             Key  codes always begin with the two characters  "#&".   The 
        third  character defines what the printer control  sequence  will 
        be.  For instance, the key code "#&C" is often used to change  to 
        compressed type.  
        
             The  definition of the key codes is determined by a  special 
        template  file that is identified by the extension  ".TMP"  after 
        its  name. Template files are provided for standard  printers  or 
        they  can be custom made using the MAKETEMP program described  in 
        Chapter 6.  For each Template file that is created, a Description 
        file  is  also  created.  Description files are  denoted  by  the 
        extension  .DIS and describe the function of the key codes.   The 
        name  of the description file agrees with the name of its  corre-
        sponding Template file.  The only difference is in the extensions 
        (Template extension is .TMP, Description extension is .DIS).
        
        
        
        
                                       37
        






             Source  files can be produced by any program including  word 
        processors and spreadsheets.      
        
        
        5.3  Using the SETTEMP program
        
             SETTEMP is a memory resident program.  This means that  once 
        it is invoked it will remain active even when other programs  are 
        running.  For instance, if you have invoked SETTEMP and are using 
        your word processor to print an output, every time a key code  is 
        sent  to  the printer, SETTEMP will intercept it and  replace  it 
        with the appropriate escape sequences.  
        
             SETTEMP can be invoked by the calling sequence:
        
        
             SETTEMP [template file]
        
        If a template file is not specified, SETTEMP will try to  install 
        the default template file FPRINT.TMP.  Some examples are:
        
             SETTEMP EPSON.TMP
        
                  Installs the template file EPSON.TMP so that key  codes 
                  in this file will automatically be translated to escape 
                  characters sent to the printer.
        
             SETTEMP EPSON
        
                  As above 
                  
             
             SETTEMP 
        
                  Installs the template file FPRINT.TMP so that key codes 
                  in this file will automatically be translated to escape 
                  characters sent to the printer.
        
             If  you wish, a SETTEMP invoking statement may be placed  in 
        your AUTOEXEC.BAT file and SETTEMP will always be available.
        
        
        
        
                                       38
        






             Only  one  template file can be resident at  a  time.   This 
        means  that if you wish to change the template file used by  SET-
        TEMP  you  must remove SETTEMP from memory.  This can  be  accom-
        plished by the calling sequence:
        
        
             SETTEMP remove  
        
             Some caution in using SETTEMP is necessary.  MSDOS does  not 
        fully  support memory resident programs.  As a consequence  these 
        types  of programs sometimes interfere with each other.   If  you 
        experience inexplicable results with SETTEMP installed try remov-
        ing any other memory resident programs that might be present.  In 
        addition, SETTEMP reduces your amount of available memory by  64K 
        bytes.  This could interfere with the operation of some programs.  
        When  in  doubt, reset your system and use  PRINTIT  rather  than 
        SETTEMP.
        
        5.4  Using the PRINTIT program
        
             PRINTIT  is a second type of insertion mode program.  It  is 
        not memory resident and operates only when it is called.  PRINTIT 
        is  in  general a much more reliable way of  sending  escape  se-
        quences to your printer.  It can not interfere with the operation 
        of other programs.
            
             PRINTIT  operates  by reading a specified  source  file  and 
        generating  a  new file in which the source file  key  codes  are 
        replaced  by  escape sequences.   The new file is  called  a  PRN 
        file.   It  is automatically sent to the printer and  a  copy  is 
        saved.  The PRN file  has the same name as the source file except 
        that the extension is changed to ".PRN".  
        
             As an example, if our source file's name was SOURCE.TXT  the 
        PRN file produced would have the name SOURCE.PRN.  
        
             The proper calling sequence for PRINTIT is: 
        
        
             PRINTIT [template file ],source file 
        
        
        
        
        
                                       39
        






             If  the  template file name is not given, the  default  file 
        name  FPRINT.TMP  is assumed.  If a template file  name  with  no 
        extension  or with an extension other than ".TMP" is  given,  the 
        extension will automatically be changed to ".TMP". 
        
             The source file name must be given in full.  (including  its 
        extension).
        
             Once  PRINTIT is executed, it will generate and print out  a 
        PRN  file  with  the same name as the source file  but  with  the 
        extension ".PRN".  
        
             Some examples might help: 
        
        PRINTIT EPSON.TMP STORY.DOC
        
             Uses the template file EPSON.TMP
             Uses the source file STORY.DOC 
             Generates the PRN file STORY.PRN
             Prints out the file STORY.PRN
        
        PRINTIT EPSON STORY.DOC
        
             Does exactly the same functions as the previous example
        PRINTIT STORY.DOC
        
             Uses the default template file FPRINT.TMP
             Uses the source file STORY.DOT 
             Generates the PRN file STORY.PRN    
             Prints out the file STORY.PRN
        
        PRINTIT
        
             No  source file is specified so the program cannot  proceed.  
             Instead a help screen is displayed that explains the  proper 
             calling sequence for PRINTIT.
        
             PRINTIT  will  usually  send the PRN file  directly  to  the 
        printer.  However, if desired, it can be printed again. This  can 
        be  done  either by using the DOS PRINT utility or the  DOS  copy 
        utility.  Examples are shown below: 
        
        
        
        
                                       40
        






             Using COPY 
        
        
             COPY STORY.PRN = LPT1: 
        
                  (copies STORY.PRN to the printer.)
        
             Using PRINT 
        
        
             PRINT STORY.PRN 
        
        If  you  use  the PRINT utility, the PRINT.COM  program  must  be 
        present in your current directory. 
        
             As  we described earlier, the print commands and  their  key 
        codes  are  defined in a "template file" that is denoted  by  the 
        extension ".TMP".  Template files are produced by the PRINTSELEC-
        TOR program MAKETEMP. 
        
             MAKETEMP generates template files using the familiar overlay 
        files  that  contain information on the printer being  used.   In 
        addition  to generating the template files, MAKETEMP also  gener-
        ates "description files" that tell you what the key codes in  the 
        template  files  actually  do.  In a way  the  description  files 
        translate template files so that humans can understand them.  
        
        
        
        
        
                                       41
        






        
        
        DESCRIPTION OF eps286e.tmp TEMPLATE 
        
        generated from overlay file eps286e.ovl
        
        KEYNUM  KEY   DESCRIPTION 
        
           1 #&A  Proportional print
           2 #&B  Bold print select
           3 #&C  Compressed type
           4 #&D  Draft quality pica pitch
           5 #&E  Elite type
           6   New page
           7 #&H  Select Epson graphics character mode (defines
                  ASCII characters > 127)
           8 #&I  Italic font
           9 #&J  Unidirectional Print Mode
          10 #&K  Bidirectional Print mode (normal default)
          11 #&L  Near Letter quality pica pitch (Roman type)
          12 #&N  Normal width (or narrow width)
          13 #&P  Pica type
          14 #&R  Reset most functions
          15 #&U  Superscript
          16 #&V  Subscript
          17 #&W  Double width print
          18 #&1  Cancel proportional type mode
          19 #&2  Cancel bold print
          20 #&3  Cancel Compressed type
          21 #&4  Cancel Italic mode
          22 #&5  Cancel Superscript
          23 #&6  Cancel Subscript
          24 #&a  Greek character case alpha
          25 #&b  Greek character case beta
          26 #&d  Greek character case delta
          27 #&e  Greek character case epsilon
          28 #&f  Greek character case theta
          29 #&g  Greek character capital gamma
          30 #&m  Greek character case mu
          31 #&o  Greek character capital omega
        
        FIGURE 5.1 TYPICAL DESCRIPTION FILE
        
        
                                       42
        






             Description files have the same name as their  corresponding 
        template files but with the extension ".DIS".  In other words, if 
        a template file EPSON.TMP existed, there would also be a descrip-
        tion  file EPSON.DIS that would describe its functions.   Several 
        standard template files and description files have been  included 
        with your PRINTSELECTOR package.  It would be instructive to  see 
        the  format  of  a typical description file.  This  is  shown  in 
        Figure 5.1, but you are encouraged to look at an actual file.
          
        
        5.5  Standard Template Files
        
             The MAKETEMP program is very easy to use and is designed  to 
        give  a  good  deal of flexibility in the use  of  your  printer.  
        Nonetheless, a number of "standard" template files have also been 
        included  for  your convenience.  While the exact  content  of  a 
        template  file is dependent upon the printer being used  and  the 
        application,  some key code conventions have been adopted in  the 
        included  files.  You might find it less confusing to  adhere  to 
        these  conventions  whenever  you make your  own  template  files 
        (though  you can certainly depart from them whenever  it  strikes 
        your fancy to do so).  Another advantage to adapting some  stand-
        ard  in key codes is that it allows you to print the same  source 
        text  on  several  different printers.  The  suggested  key  code 
        conventions are shown in  Figure 5.2.
        
        5.6   Using PRINTSELECTOR'S Insertion Mode with Application  Pro-
        grams
        
             PRINTIT  transfers the  PRN file to the printer through  the 
        normal DOS facilities.  Specifically the COPY program is used  to 
        transfer  the PRN file to the logical unit specified in the  TEM-
        PLATE  file.   However, many application programs including  word 
        processors,  spreadsheets  and data base report  generators  have 
        their  own  internal print procedures.  These  internal  programs 
        interpret  the  files processed by the  application  program  and 
        often  generate printer escape sequences of their  own.   SETTEMP 
        works  directly with these internal procedures and usually  oper-
        ates quite well.  However, some difficulty may arise when  appli-
        cation generated escape sequences interfere with those  generated 
        by  SETTEMP or when the application program bypasses  the  normal 
        MSDOS printer interfaces.    
        
        
        
                                       43
        
        






        FIGURE 5.2  LIST OF PREFERRED TEMPLATE SYMBOLS
        
        
        
        A              Proportional print select
        B              Bold print select
        C              Compressed type 
        D              Draft quality (pica pitch)
        E              Elite pitch
        F              New page
        G              Greek font
        H              Graphics font
        I              Italic font
        J              Unidirectional print mode
        K              Bidirectional print mode
        L              Near Letter/Letter quality mode (pica pitch)
        N              Normal width (or narrow width)
        P              Pica pitch
        R              Reset most functions 
        U              Superscript
        V              Subscript
        W              Double width print
        X              Backspace
        Y              Portrait orientation
        Z              Landscape orientation
        1              Cancel proportional type mode
        2              Cancel bold type mode
        3              Cancel compressed type mode
        4              Cancel Italic mode
        5              Cancel Superscript
        6              Cancel Subscript
        






        a              Greek character case alpha
        b              Greek character case beta
        c              Greek character case/capital gamma
        d              Greek character case delta
        e              Greek character case epsilon
        f              Greek character case theta/zeta
        g              Greek character capital lambda
        i              Greek character case iota
        k              Greek character case kappa
        l              Greek character case lambda
        m              Greek character case mu
        n              Greek character case nu
        o              Greek character case/capital omega
        p              Greek character case pi
        q              Greek character case phi
        r              Greek character case rho
        t              Greek character case tau
        x              Greek character case xi
        %              mathematical sign for infinity
        (              integral sign or upper portion of integral sign
        )              lower portion of integral sign
        \              Nth root of
        /              square root of
        {              summation sign              
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       45
        






        
        
             Fortunately,  most application programs have the  option  of 
        generating  a disk image of the information that they would  nor-
        mally  send to the printer.  If you encounter difficulty  in  the 
        use of SETTEMP with an a applications program you might try using 
        PRINTIT  with  disk image files.  If you continue  to  experience 
        difficulty,  try to disable as many of the  application  programs 
        print  control functions and replace them with PRINTSELECTOR  key 
        codes.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       46
        






        CHAPTER 6:  MAKING A  TEMPLATE FILE USING MAKETEMP
        
        
        
        
        6.1   Introduction
        
             This  chapter  will describe the way in which  the  MAKETEMP 
        program  can  be used to generate template files.  It is  a  very 
        boring  chapter.  The best way to get familiar with the  MAKETEMP 
        program  is to use it.  Like all of the  PRINTSELECTOR  programs, 
        MAKETEMP is menu driven and easy to use.  There is no way it  can 
        damage your equipment. 
        
             Section  6.2 describes the calling sequences  for  MAKETEMP.  
        Once you understand how these work, the best learning approach is 
        to  try  to generate your own template files.  If  you  run  into 
        trouble refer back to the rest of this chapter.  
        
        6.2   Invoking MAKETEMP to edit or create a template file 
        
             Template  files are created and edited by the MAKETEMP  pro-
        gram.   escape  sequences are obtained from a  specified  overlay 
        file or may be entered directly.  The MAKETEMP program  generates 
        both template and description files.  Template files are used  by 
        the SETTEMP and PRINTIT programs as described in chapter 5.   The 
        description  files  explain what functions are performed  in  the 
        template file in a human readable format. 
        
             The proper calling sequence for MAKETEMP is: 
        
                  MAKETEMP [template file] [overlay file] 
        
        In this calling sequence: 
        template file
        
             
             is  the name of the template file being created  or  edited.  
             The  template  file will always have a ".TMP"  extension  no 
             matter what extension is specified.   
        
        
        
        
                                       47
        






         overlay file 
        
             is  the name of the overlay file that contains  the  printer 
                  commands that will be used in making the template file.  Its 
             default value is FPRINT.OVL.  A ".OVL" extension will always 
             be selected for the overlay file no matter what extension is 
             specified. 
        
             If only one file name is specified, it is assumed to be  the 
        template  file  name  and the default name  (FPRINT.OVL)  of  the 
        overlay file will be assumed.  If no file names are specified the 
        proper MAKETEMP calling format will be shown.  
        
             A  display file is automatically generated by MAKETEMP.   If 
        the  template file has the name NAME.TMP, the display  file  name 
        will be NAME.DIS.  
        
             If  template and display files with names specified  in  the 
        MAKETEMP  calling  sequence already exist, backup files  will  be 
        produced  automatically.   If  the template  file  has  the  name 
        NAME.TMP  the  old  file of this name will be  copied  over  into 
        NAME.TBK.  The old display file NAME.DIS will be copied over into 
        NAME.DBK.  
        
             Some examples are shown below: 
        
        MAKETEMP GREEK CITOH  
        
             Creates or edits the template file GREEK.TMP and the display 
             file  GREEK.DIS.  If files with these names  existed  before 
             MAKETEMP  was called, they will be saved in  GREEK.TBK  (for 
             GREEK.TMP)  and in GREEK.DBK (for GREEK.DIS).   The  overlay 
             file GREEK.OVL will be used.
        
        MAKETEMP GREEK 
        
             Creates or edits the template file GREEK.TMP and the display 
             file  GREEK.DIS   If files with these names  existed  before 
             MAKETEMP  was called, they will be saved in  GREEK.TBK  (for 
             GREEK.TMP)  and in GREEK.DBK (for GREEK.DIS).   The  default 
             overlay file FPRINT.OVL will be used. 
        
        
        
        
                                       48
        






         MAKETEMP 
        
             Displays  a description of the proper calling  sequence  for 
             MAKETEMP. 
        
             MAKETEMP has two modes, the creation of a new template and 
        display file or the editing of an existing template and display 
        file.   If the specified template file already exists, you will 
        be asked if you wish to edit the existing file or make a new one.  
        Entering "e" or "E" followed by the ENTER key will place you in 
        the edit mode.  Entering an "n" or "N" will begin the creation of 
        a new template file.  
        
             The creation of new files will be described in section 6.3 
        and the editing of existing files will be discussed in section 
        6.4. 
        
        6.3  Creating new template and description files 
        
             This section discusses the creation mode of the MAKETEMP 
        program.  This mode may be entered by specifying a new template 
        file name or if an existing name is specified by answering "n" or 
        "N" to the question: 
        
             Do you wish to edit or form a new file? (enter e or n). 
        
             Figure 6.1 shows the first screen that will be displayed 
        when the creation mode is entered.  It first asks if the user 
        wishes to continue and demands an answer of "y" or "n" for yes or 
        no.  If an "n" or "N" is typed followed by the ENTER key, the 
        program exits.  If a "y" is typed followed by depression of the 
        ENTER key, the user is asked for the key character he wishes to 
        define (the question appears under the question asking if you 
        wish to continue as shown in figure 6.2). 
        
        
        
        
        
        
        
        
        
                                       49
        






        
        
        
             Inputting index variable number  1 
             The string #&x where x is the input character will be used
             to insert a set of control characters in a printer output file
             
             
             
             Do you wish to continue? (Please input y or n)
             A 'n' input will terminate this program and complete the
             template file
        
        
        
        
        FIGURE 6.1 THE FIRST CONTROL SCREEN OF MAKETEMP 
        
        
        
        
        
             Inputting index variable number  1 
             The string #&x where x is the input character will be used 
             to insert a set of control characters in a printer output file
             
             
             
             Do you wish to continue? (Please input y or n)
             A 'n'input will terminate this program and complete the
             template file
        
             y
        
             Please enter the index character you desire 
             if you wish to enter a function name in the description file,
             please enter it now.  Otherwise please hit the ENTER key
        
        
        
        FIGURE 6.2  PROGRESSION OF  THE FIRST MAKETEMP CONTROL SCREEN 
        WHEN A Y IS ENTERED TO CONTINUE THE CREATION OF A TEMPLATE FILE. 
        
        
        
                                       50
        






        
        
             Inputting index variable number  1
             The string #&x where x is the input character will be used
             to insert a set of control characters in a printer output 
             file 
        
                  
             Do you wish to continue? (Please input y or n)
             A 'n' input will terminate this program and complete the 
             template file
                  
              y
        
             Please enter the index character you desire 
                  a
        
             If you wish to enter a function name in the description file,
             please  enter it now.  Otherwise please hit  the  ENTER 
             key function name
        
        
        
        
        FIGURE  6.3   COMPLETION OF  THE  FIRST  CREATION 
        SCREEN OF MAKETEMP 
        
        
        
             The key character may be any printable character.  It is 
        case dependent.  The key character is the third (and only user 
        selectable) character in the key code that is entered into the 
        source file.  The key character is entered by depressing the key 
        corresponding to the desired character and then depressing the 
        ENTER key. 
        
             Once the key character has been entered the MAKETEMP program 
        asks for a descriptive phrase. (as shown in figure 6.3).  This 
        must be less than 80 characters long.  It is only used in the 
        description file and is provided to allow the user to remember 
        the purpose of a particular key code.  
        
        
        
                                       51
        






           
             
             
             GENERAL COMMANDS 
             
             
             1.  reset most commands to default values 
             2.  skip over perforations 
             3.  set bottom margin
             4.  Set page length in lines
             5.  Set page length in inches
             
             
             please input one of the following followed by 'enter' 
             f to go forward one screen      b to go back one screen
             q to quit and output escape sequences
             a to add a customized escape sequence     
             command number to be added to the string for #&C 
        
        
        
        
        FIGURE 6.4  ESCAPE SEQUENCE ENTRY SCREEN IN THE MAKETEMP PROGRAM
        
             
             
             
             
             
         You have input the following commands for string #&C 
             
         
         Condensed type (17.16 char/in for pica) valid pica,elite,italic 
             
             
         if you wish to send these commands to output type g
         if you wish to start over with string number  1 type any other key
        
        
        
        FIGURE 6.5  OUTPUT SCREEN THAT COMPLETES  THE 
        DEFINITION OF A NEW TEMPLATE KEY CODE 
        
        
                                       52
        






             If no descriptive phrase is desired, simply depress the 
        ENTER key.  Otherwise, type the descriptive phrase exactly as it 
        should appear in the description file and then depress the ENTER 
        key.  You are encouraged to enter some form of description.  It 
        is very easy to forget the meaning of a key code.
        
             At this point a number of control overlay screens will 
        appear.  These are screens that look exactly like PRINTMEN menu 
        screens.  Progression from screen to screen proceeds just as it 
        does in the  PRINTMEN program and as is defined at the bottom of 
        the menu screens.  There is however one difference.  In the 
        MAKETEMP program the user is given the option of entering a 
        custom escape sequence.  Selection of this option allows the 
        creation of a custom escape sequence in the same way as is used 
        in the MAKEMENU program.  Figure 6.4 shows a typical MAKETEMP 
        escape sequence entry screen.  
        
             To select control sequences or commands for the template 
        file, the user selects item numbers from the escape sequence 
        entry screens.  Items from different screens can be mixed in any 
        order, just as they can in the  PRINTMEN program. 
        
             When the user has selected all of the desired control func-
        tions for a key code, he can proceed to the output screen by 
        depressing the letter "q" followed by the ENTER key.  Figure 6.5 
        shows the output screen. 
        
             In the output screen, all of the item names of the selected  
        control functions are displayed.  If the user wishes to place 
        these in the template file he depresses the "g" key followed by 
        the ENTER key.  If the user wishes to change the definition of 
        the key code just generated he can depress any key other than "g" 
        or "G".  A control screen will be generated and the control 
        function selection will start over. 
        
             If the "g" key is depressed followed by the ENTER key, the 
        first screen will appear again.  The user will be asked if he 
        wishes to continue.  If a "y" is entered the key code definition 
        cycle will begin again.  If a "n" is entered MAKEMENU will be 
        exited and the template and display files will be complete.  
        
        
        
        
        
                                       53
        






             When more than one key code is being defined, the last 
        viewed escape sequence entry screen is displayed at the beginning 
        of control function definition.   This is more convenient than 
        returning to the first escape sequence entry screen and having to 
        page forward a number of screens.  However, it can cause confu-
        sion if the user doesn't remember that he can move both forward 
        and backward in the selection screens.  
        
            Figure 5.1 shows a typical description file.  It begins by 
        giving the name of the overlay file that was used in its genera-
        tion.  This is followed by the selected logical unit to which 
        information should be directed for printing.  Next there is a 
        listing of the key codes.  
        
             Key codes are assigned function numbers (key numbers) based 
        on the order in which they were defined.  Following the "key" 
        number is the descriptive phrase that was entered in the MAKETEMP 
        program.  
        
             On the next line is the definition of the key code.  The 
        following lines show the item names of the control functions that 
        are to be substituted for the key codes in the source document. 
        
        6.4  Editing template and description files with the MAKETEMP 
        program 
        
             This section discusses the edit mode of the MAKETEMP pro 
        gram.  This mode may be entered by specifying an existing tem-
        plate file name when invoking the MAKETEMP program.  When an 
        existing template file name is specified, you will be asked: 
        
             Do you wish to edit or form a new file? (enter e or n). 
        
        Answering "e" or "E" will invoke MAKETEMP's edit mode.  
        
             Once the edit mode is invoked a series of display frames 
        such as the one in figure 6.6 will be presented.   These frames 
        consist of a series of contiguously numbered key codes descrip-
        tions.  Each description element contains: 
        
        
        
        
        
                                       54
        






        
             The key code number followed by an equal sign followed by 
             the identifying key code character
        
             The phrase that describes the function of the key code
             
             A list of the control items that make up the key code. 
        
             keynum #  1 = B 
             Bold print select 
             Prestige bold Roman 8 
             1b  26  6c  30  4f  1b  28  38  55  1b  28  73 
             30  70  31  32  68  31  30  76  30  73  33  62  38
             54 
             keynum #  2 = C 
             Compressed type 
             Portrait compressed font- laserjet+ (16.66 char/in, 6 lines/in)
             1b  26  6c  30  4f  1b  28  38  55  1b  28  73 
             30  70  31  36  2e  36  36  68  38  2e  35  76  30
             73  30  62  30  5
             
             
             type f to advance one frame   type b to go back one frame
             type d to delete a keynum          type a to add a keynum
             enter the number of the keynum to edit
             type q to stop editing
        
        
        
        FIGURE 6.6  TYPICAL KEY CODE LISTING DISPLAY OF MAKETEMP EDIT 
        MODE 
        
        
        
        
        
        
        
        
        
        
        
        
                                       55
        






             
             
             EDITING KEYCODE NUMBER 17
             Line  1:  Keycode key character = a
             Line  2:  Greek character case alpha
             Line  3:  Prestige elite Math 8
             Line  4:  1b  26  6c  30  4f  1b  28  38  4d  1b  28  73
             30  70  31  32  68  31  30  76  30  73  30  62  38
             54 
             Line  5:  "a"
             Line  6:  61
             Line  7:  Prestige elite Roman-8
             Line  8:  1b  26  6c  30  4f  1b  28  38  55  1b  28  73
             30  70  31  32  68  31  30  76  30  73  30  62  38
             54
        
        
        
             Please input the line number you wish to edit
             enter a to add an item            enter d to delete an item
             Press ENTER to exit without editing
        
        
        
        
        FIGURE 6.7  TYPICAL KEYCODE EDITING DISPLAY OF MAKETEMP EDIT MODE
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       56
        






        
        
        
                  These are derived from the overlay file used to create 
                  the template file or some set of custom escape se-
                  quences. Each control item will contain a descriptive 
                  phrase on one line followed by the hexadecimal repre-
                  sentation of the escape sequences on the next line.  
                  Several lines of hexadecimally represented escape 
                  characters may be present.
        
             Frames are designed to display as many key codes as will 
        fit.  
             At  the bottom of the screen are a series of  instructions.   As 
        seen in figure 6.6, the following options are allowed: 
        
        f  to advance one frame 
        
             Displays the next screen of key codes. 
        
         b  to go back one frame 
        
              Displays the previous frame of key codes.
        
         d to delete a key number 
        
             Asks for the key number to be deleted.  If the number of a 
             key code is entered after the question, this key code will 
             be deleted from the template file and the other key codes 
             will be renumbered to fill the hole.     
        
        a  to add a key code number
        
             If  a number is entered, a key code is added at this posi-
             tion.  In adding a key code, a series of screens identical 
             to those used in the MAKETEMP create mode are presented.  
             When the key code has been finally completed through the 
             screen shown in figure 6.5, you are returned to the edit 
             control screen described in figure 6.6.  When a new key code 
             is entered , the key code previously at that position and 
             all later key codes are renumbered.  
        
        
        
                                       57
        






        enter the number of the key number to edit
        
             When the number of an existing key code is entered (it need 
             not be in the present display frame), the key code editing 
             display is shown.  Figure 6.7 is an example.  This display 
             lists all of the key code information shown in the initial 
             display frame except that line numbers are assigned.
              
             As shown in figure 6.7 when editing a key code number the 
             following options are available:
             
                   Enter a line number
                  
                  Entering the appropriate line number will generate cues 
                  for editing that line.  Line 1 will identify the key 
                  code character and line 2 will provide a descriptive  
                  phrase for the key code.  Subsequent line numbers will 
                  occur in pairs that define control items. 
        
             d  to delete a control item
        
                  To delete a control item type "d" followed by ENTER and 
                  you will be shown an item display similar to figure 
                  6.7.  It identifies control items and asks which one 
                  you wish to delete.  Entering a control item to be 
                  deleted will remove that control item from the key code 
                  and automatically renumber the other items.  
        
             a to add a control item
                  
                  To add a control item type "a" followed by ENTER.  This 
                  will again display the control items as shown in figure 
                  6.8.  However you will now be asked where you wish to 
                  position the new item.  After entering an item number 
                  you will be presented by an item creation menu much 
                  like that used in the creation mode of MAKETEMP.  
                  However, after entering only one item you will be 
                  returned to the edit key code display screen.
        
        
        
        
        
                                       58
        






             ADDING AN ITEM IN KEYCODE NUMBER 17
        
             Keycode key character = a
             Greek character case alpha
             Item  1:  Prestige elite Math 8
             1b  26  6c  30  4f  1b  28  38  4d  1b  28  73
             30  70  31  32  68  31  30  76  30  73  30  62  38
             54 
             Item  2:  "a" 
             61
             Item  3:  Prestige elite Roman-8
             1b  26  6c  30  4f  1b  28  38  55  1b  28  73
             30  70  31  32  68  31  30  76  30  73  30  62  38
             54
        
        
        
             Please input the item number to be added  Other items
             will be automatically repositioned
             Press ENTER to exit without adding a new item
        
        
        
        FIGURE 6.8 TYPE ITEM ADD SCREEN FOR MAKETEMP EDIT MODE 
        
        
        
        
        
                   q to stop editing.  
        
                  To end the editing session type "q" followed by ENTER.  
                  You will then be asked if you wish to save your 
                  changes.  If you answer "y" or "Y" a new template and 
                  description file will be produced.  If you answer "n" 
                  or "N" you exit the edit program with no changes made 
                  in any of your existing template or description files.  
             In several of the display menus there will not be enough 
        room on the CRT screen to display all of the information avail 
        able.  When this happens a scroll option will be presented that 
        allows you scroll portions of the display either up or down.  The 
        scroll option appears only when there is data to be scrolled.
         
        
                                       59
        






        APPENDIX A: DATA FILE FORMATS
        
        
             At times it may be convenient for you to use your word 
        processor program to modify overlay or template files.  In order 
        to simplify this process, formats for these two files are de-
        scribed in this appendix.  Figure A.1 shows a typical segment of 
        an overlay file and Figure A.2 shows a typical segment of a 
        template file. 
        
             Both the overlay and template files have the same method for 
        portraying escape sequences.  A typical sequence would be: 
        
          27    40    45    501    602    55    -1 
        
             The first element in the representation is preceded by two 
        spaces and subsequent character representations are separated by 
        four spaces.  
        
             Hexadecimal escape characters are expressed as decimal 
        values.  Consequently, normal characters will be decimal numbers 
        less than 256.  For instance the "ESC" ASCII symbol has the 
        hexadecimal value of 1b but would be represented by its decimal 
        value of 27 in the overlay and template files.  In the example 
        the values of 40 and 45 represent the ASCII characters of "("  
        and "-".
        
             Also in the example are the representations 501 and 602.  
        These are used as place holders for variable entries that are 
        entered from the PRINTMEN program.  When variable arguments are 
        represented either 500 + the variable number or 600 + the varia-
        ble number are present.  The 500 offset indicates that the varia-
        ble is to be interpreted as an ASCII value while the 600 implies 
        the  value assigned to the variable is to be inserted as a binary 
        number.  The notation 500 + i corresponds to #i while 600 + i 
        corresponds to &i in the MAKEMENU program.  
        
             The end of an escape sequence is designated by a "-1". This 
        representation of escape sequences is common to both the overlay 
        (".OVL") and template (".TMP") files, though variable arguments 
        are not present in template files.  
        
        
        
                                       60
        






        
        
        #&c
        lpt1:
        1
        GENERAL OR MISCELLANEOUS COMMANDS
        4
        0
        Bold print select
        27    33    -1
        5
        Input up to 5 tab stops
        Please input first tab stop (must be 3 digit number i.e. 005)
        Please input second tab stop (must be 3 digit number i.e.005)
        Please input third tab stop (must be 3 digit number i.e.005)
        Please input fourth tab stop (must be 3 digit number i.e. 005)
        Please input fifth tab stop (must be 3 digit number i.e. 005)
        27    48    27    40   501    44   502    44 503    44   504    
        44   505    46    -1
        0
        Underline all characters
        27    88    -1 
        0
        Stop the underlining of all characters
        27    89    -1 
        2
        TYPE FONTS 
        6
        0
        
        
        
        
        
        FIGURE A.1  FRAGMENT OF A TYPICAL OVERLAY FILE
        
        
        
        
        
        
        
        
        
        
                                       61
        






        
             Now we move on to the specific formats of the two types of 
        data files. 
        
        
        A.1  Format of Overlay files  
        
             Figure A.1 shows a fragment of a typical overlay file.  It 
        is best understood on a line by line basis.  
        
        1   The first line is the logical unit destination that PRINTMEN 
        takes as the default destination of information sent to the 
        printer.  
        
             The rest of the overlay file is arranged by screens. 
        
        2.  The second line in the figure is the screen number (in this 
        case 1). 
        
        3.  The third line in the figure is the screen title. 
        
        4.  The fourth line in the figure is the number items in the 
        screen (in this case four). 
        
             Next follows the description of the four control items in 
        the screen.  Each control item occupies at least three lines.  
        
        5.  The fifth line shows the number of variables in the first 
        control item of the screen ( in this case 0). 
        
        6.  The sixth line shows the name of the control item. 
        
        7.  The seventh line shows the escape sequence that is generated 
        by selection of the control item to be described. 
        
        8.  The eight line is the number of variables to be entered in 
        the next control item (in this case five).  
        
        9.  The ninth line displays the name to be displayed to identify 
        the control item. 
        
        
        
        
                                       62
        






        
        10  - 14.  These lines display the requests for the 5 required 
        variables. 
        
        15. This line displays the escape sequence command by the selec-
        tion of this particular item. 
        
             The rest of the sequence for the overlay file can be deduced 
        from the figure.  All of the control items in a screen are dis-
        played.  Then a new screen is started with the number of control 
        items and the screen title followed by the all the items that 
        constitute the screen.   
        
             There is no special character to indicate the end of the 
        overlay file. 
        
        
        A.2  Format of Template files
        
             Figure A.2 shows a fragment of a typical template file.  
        Again we describe it on a line by line basis.
        
        1.  Line one identifies the overlay file used
        
        2.  Line two identifies the logical unit to which data will be 
        sent.
        
        All subsequent lines identify key codes.  Key code identifica-
        tions are separated by two blank lines.
        
        3.  Line three is the identifying phrase for the key code 
        
        4.  Line four is the key code character ( in this case "A").  
        
        5.  Line 5 is the number of control sequences that constitute the 
        key code (in this case 1) 
        
        6.  Line 6 is the identifying sequence for the control sequence. 
        
        7.  Line 7 is the escape sequence to be inserted by the control 
        item.  
        
        
        
                                       63
        






        8.  Line is the blank line skipped between key codes 
        
        9.  Line 9 is the identifying phrase for the next key code. 
        
        10  Line 10 is the key code character. 
        
        11. Line 11 is the number of control sequences in the key code ( 
        in this case 2) 
        
             Lines 12 and 13 identify the first control item for the key 
        code, Lines 14 and 15 identify the second control item.  The 
        format of the rest of the template file follows directly from the 
        above examples.   
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       64
        






        
        formed from overlay file CITOH.ovl
        lpt1:
        Proportional print
        A
        1
        hex 92
        27     80     -1
        
        Bold print
        B
        2
        bold print select
        27     33     -1
        custom escape sequence
        27     43     -1
        
        Compressed type
        C
        1
        Compressed type
        27     81     -1
        
        Elite type
        E
        1
        elite pitch (12 cpi)
        27     69     -1
        
        New page
        F
        1
        form feed character is 0C
        12     -1
        
        
        
        FIGURE A.2  FRAGMENT OF A TYPICAL TEMPLATE FILE
        
        
        
        
        
        
        
        
                                       65
        






        
        APPENDIX B: HEXADECIMAL ARITHMETIC
        
        
        
        
             Hexadecimal Arithmetic is a method for representing numbers 
        that has become quite popular with people working with computers.  
        While it might at first seem confusing, Hexadecimal arithmetic is 
        quite simple. 
        
             In describing how Hexadecimal arithmetic works, it is in-
        structive to recall how our normal number system works.  
        
             Normally we describe numbers in a base 10 representation.  
        This means, for example, if we see a number of the sort 125 we 
        know that: 
        
             the last digit (left most) is the 5 and represents a count 
             of 5 in the "one"s place". 
              
             the second digit is the 2 and it represents a count of 20 in 
             "ten's place". 
        
             the third digit is a the 1 and it represents a count of 100 
             in the "hundred's place". 
        
             In our normal decimal system, our counting is based on the 
        number 10.   Our digits go up to 9 (ten minus one) and the place 
        they are in represents the power of 10 they are multiplied by.  
        
             In hexadecimal arithmetic, our counting is based on the 
        number 16 (instead of 10).  This means that our "digits go up to 
        a value of 15 (sixteen minus one) and each position represents a 
        different power of 16.  The hexadecimal digits are shown in Table 
        B.1.  Up to the character of 9, hexadecimal and decimal digits 
        characters are the same and have the same weight.  At and above 
        the value of 10, new characters must be made up for the hexadeci-
        mal digits.  As seen the letters A through F are chosen for the 
        new hexadecimal characters.  
        
        
        
        
                                       66
        






             In evaluating a hexadecimal number, the "one's place" re-
        mains pretty the same.  The next position to the right is no 
        longer the "tens place" however.  It becomes the "sixteen's 
        place".  Similarly, the next position to the right becomes the 
        "sixty-four's place" and the next position becomes the "4096's 
        place."   
        
             An example might help.  
        
             In hexadecimal notation the number A23 is 
        
        
             10*4096 + 2*64 + 3 = 41091 (in decimal arithmetic). 
        
             In this manual and in the use of the PRINTSELECTOR programs, 
        only two digit hexadecimal numbers will be used.  Some more  
        examples are shown below: 
        
             A2 = 10*16 + 2 = 162
             23 = 2*16 + 3 = 35
             FF = 15*16 + 15 = 255
             2C = 2*16 + 12 = 44
        
             Hexadecimal arithmetic is used in most computer systems 
        because hardware construction usually uses devices in four bit 
        blocks.  A four bit block  can represent up to 16 states.  This 
        leads to the desirability of a number system based on 16.  
        
             The rationale is not important to us.  It is however impor-
        tant to understand the meaning of numbers represented in hexadec-
        imal arithmetic 
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       67
        






        
        
        TABLE B1:  HEXADECIMAL DIGITS
        
        DECIMAL VALUE       HEXADECIMAL DIGIT
        
        1                   1
        2                   2
        3                   3
        4                   4
        5                   5
        6                   6
        7                   7
        8                   8
        9                   9
        10                  A
        11                  B
        12                  C
        13                  D
        14                  E
        15                  F
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       68
        






        APPENDIX C:  USE OF THE TRANSL UTILITY
        
        
        
        
             The TRANSL program is included as a utility to help trouble 
        shoot some PRINTIT  and PRINTMEN functions.  Both of these pro-
        grams generate files that are transmitted to the printer.  As 
        described in Chapter 5, PRINTIT generates a PRN file which has 
        the same name as the specified source file and the extension 
        ".PRN".  (for instance the command string PRINTIT EPSON286 
        TEST.TXT would generate the PRN file TEST.PRN).  The PRINTMEN 
        file generates the file PTRANS.FIL  Both of these files are 
        automatically transmitted to the printer, but they are not 
        erased.  Consequently, if the printer does not behave as expect-
        ed, the PRN file or PTRANS.FIL may be inspected to see what 
        actually was transmitted to the printer.  
        
             Unfortunately the printer output files cannot be inspected 
        directly.  A number of the characters that are transmitted to the 
        printer are not displayable.  This perhaps needs some explana-
        tion.  
        
             Characters that are sent in control strings to the printer 
        are actually single bytes that represent binary numbers between 0 
        and 255.  When these bytes are displayed on a CRT screen they are 
        displayed not as numbers but as particular display characters.  
        When displayed on an IBM PC compatible CRT screen numbers from 0 
        to 127 are interpreted as standard ASCII characters while numbers 
        above 127 are displayed as special IBM screen characters.  Not 
        all of the possible numbers have a display interpretation and in 
        fact some are non displayable control characters that can do 
        remarkably strange things to a computer that tries to display 
        them.  For instance it is possible to completely lock out your 
        keyboard by displaying the wrong control character.  
        
             The TRANSL utility is a translation program that allows the 
        display of all of the characters in PTRANS.FIL or in a PRN file.  
        TRANSL works by generating a new "TRS" file that translates all 
        of the characters in a file into a displayable format.
        
        
        
        
                                       69
        






             TRANSL is invoked with the sequence:
        
        TRANSL [file to be translated]
        
             The TRS file produced will have the same name as the file 
        specified in the calling sequence, except that the TRS file will 
        have the extension "TRS".  
        
             Examples are:
        
        TRANSL TEST.PRN  
        
             will produce the readable file TEST.TRS
        
        TRANSL PTRANS.FIL 
        
             will produce the readable file PTRANS.TRS
        
             In generating a readable file, TRANSL uses the following 
        rules:
        
        
             1.  If a character is a printable character, leave it un-
        changed.
        
             2.  If a character is a control character, replace it with 
        its ASCII abbreviation surrounded by brackets.  For instance the 
        character with value 4 would be replaced with [EOT].  
        
             3.  If a character has a value of 128 or greater precede it 
        with a "+" and then interpret its ASCII value with 128 subtract-
        ed.  For instance the value 132 would be represented as +[EOT].
        
             4.  The character LF itself is interpreted by first actually 
        printing a line feed and then by printing out [LF].
        
             Table C.1 shows the way character values are translated by 
        TRANSL.  The table only shows the first 128 values.  The table 
        repeats with a "+" sign in front of each character for the next 
        128 values.  
        
        
        
        
        
                                       70
        






        
             Some words of caution are appropriate.  Because the TRANSL 
        program translates single character values with multiple charac-
        ter strings, the length of a display line in a TRS program is 
        almost always longer than the actual line in the source program.  
        This may cause some difficulty in displaying a TRS program.  
        
             We have found TRANSL to be particularly helpful when working 
        with word processor output files where printer control sequences 
        are generated both by the word processor and PRINTIT.  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                       71
        






     FIGURE C.1  CHARACTERS AS TRANSLATED BY 
     TRANSL.  
     (DECIMAL   VALUES   ABOVE  127  REPEAT   THE   LOWER   VALUES 
     WITH A + SIGN.  FOR INSTANCE THE CORRESPONDING  CHARAC-
     TER TO DECIMAL VALUE 232 IS +T)
     
     0    [NUL]     33   !    65   A    97   a    
     1    [SOH]     34   "    66   B    98   b    
     2    [STX]     35   #    67   C    99   c    
     3    [ETX]     36   $    68   D    100  d    
     4    [EOT]     37   %    69   E    101  e    
     5    [ENQ]     38   &    70   F    102  f    
     6    [ACK]     39   '    71   G    103  g    
     7    [BEL]     40   (    72   H    104  h    
     8    [BS]      41   )    73   I    105  i    
     9    [HT]      42   *    74   J    106  j    
     10   [LF]      43   +    75   K    107  k    
     11   [VT]      44   ,    76   L    108  l    
     12   [FF]      45   -    77   M    109  m    
     13   [CR]      46   .    78   N    110  n    
     14   [SO]      47   /    79   O    111  o    
     15   [SI]      48   0    80   P    112  p    
     16   [DLE]     49   1    81   Q    113  q    
     17   [DC1]     50   2    82   R    114  r    
     18   [DC2]     51   3    83   S    115  s    
     19   [DC3]     52   4    84   T    116  t    
     20   [DC4]     53   5    85   U    117  u    
     21   [NAK]     54   6    86   V    118  v    
     22   [SYN]     55   7    87   W    119  w    
     23   [ETB]     56   8    88   X    120  x    
     24   [CAN]     57   9    89   Y    121  y    
     25   [EM]      58   :    90   Z    122  z    
     26   [SUB]     59   ;    91   [    123  {    
     27   [ESC]     60   <    92   \    124  |    
     28   [FS]      61   =    93   ]    125  }    
     29   [GS]      62   >    94   ^    126  ~    
     30   [RS]      63   ?    95   _    127  [DEL]
     31   [US]      64   @    96   `
     32   SPACE




```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```



        
                               PRINTSELECTOR ORDER FORM
        
        
             _________ COPIES OF PRINTSELECTOR @ $25.00/EA $___________

                       SHIPPING/HANDLING INSIDE U.S $4.00  $___________ 
                       SHIPPING/HANDLING IF OUTSIDE U.S 
                                                $10.00     $___________
                       SALES TAX IF WITHIN STATE OF 
                                 CALIFORNIA     $1.69/EA   $___________
        
        
                                 TOTAL ENCLOSED            $___________ 
        
        
             Send Latest PRINTSELECTOR copy and manual to
        
             
             Name:     _____________________________________________
        
             Address   _____________________________________________
        
                       ______________________________________________
        
                       ______________________________________________
        
             It is not required, but it would be helpful if you included
             your phone number in case there is any difficulty with your 
             order:
        
                  ______   ______ _______________
        
             Please send this order form and your check or money order to
        
             Brook King Systems 
             10064-7 Larwin Av.
             Chatsworth, CA.
             91311
        
             Please make check payable to BROOK KING SYSTEMS
        
             Our phone number, should you wish to contact us is 
        
             818 882 8451
        
         



```
{% endraw %}

## PRINTFIL.DOC

{% raw %}
```



        TABLE 2.1 AVAILABLE CONTROL FILES FOR PRINTSELECTOR
        
        PRINTER FILE         OVERLAY FILE      TEMPLATE
        
        
        CITIZEN MSP-10              CIT10.OVL         CIT10.TMP
        CITIZEN MSP-15              CIT10.OVL         CIT10.TMP
        CITOH 8510                  CITOH.OVL         CITOH.TMP
        CRT DISPLAY CONTROL         SCREEN.OVL        SCREEN.TMP
        EPSON FX85                  EPSFX85.OVL       EPSFX85.TMP
        EPSON FX185                 EPSFX85.OVL       EPSFX85.TMP
        EPSON FX (OLD MODEL)        EPSFX.OVL         EPSFX.TMP 
        EPSON FX (old model with    EPSFXLW.OVL       EPSFXLW.TMP
        "Letter Writer" extension)
        EPSON 286                   EPS286.OVL        EPS286.TMP
        EPSON 286E                  EPS286E.OVL       EPS286E.TM 
        EPSON LQ500                 EPSLQ.OVL         EPSLQ.TMP
        EPSON LQ1000E               ESLQ.OVL          EPSLQ.TMP
        HP DESKJET                  DESKJET.OVL       DESKJET.TMP
        HP DESKJET with soft fonts  DSKJSF.OVL        DESKJET.TMP
	HP DESKJET with cartridges  DJABCM.OVL        DESKJET.TMP 
	HP22706A,B,C,M
	HP DESKJET with cartridges  DJTMSRM.OVL       DESKJET.TMP 
        HP22706D,E,F 
	HP DESKJET with cartridges  DJHELV.OVL        DESKJET.TMP 
	HP22706G,H,J
        HP DESKJET with Epson       DESKEPS.OVL       DESKEPS.TMP 
        fx emulation cartridge               
        HP DESKJET PLUS             DESKJETP.OVL      DESKJET.TMP
        HP DESKJET PLUS             DSKJPSF.OVL       DESKJET.TMP
	with soft fonts
	HP DESKJET PLUS             DJPABCM.OVL       DESKJET.TMP 
	with cartridges	
        HP22706A,B,C,M
	HP DESKJET PLUS             DJPTMSRM.OVL      DESKJET.TMP 
	with cartridges
        HP22706D,E,F 
	HP DESKJET PLUS             DJPHELV.OVL        DESKJET.TMP 
	with cartridges
	HP22706G,H,J
        HP DESKJET PLUS             DESKEPS.OVL       DESKEPS.TMP 
        with fx emulation 
	cartridge               
        HP LASERJET                 LASER.OVL.        LASER.TMP
        HP LASERJET PLUS            LASER.OVL         LASER.TMP
        HP LASERJET with math       LASMATHE.OVL      LASMATHE.TMP 
        elite module
        HP LASERJET II              LASJETII.OVL      LASJETII.TMP
        IBM PROWRITER               IBM.OVL           IBM.TMP
        OKIDATA 92                  OKI92.OVL         OKI92.TMP
        OKIDATA 93                  OKI92.OVL         OKI92.TMP
        OKIDATA 192,193 (STD)       OKI19X.OVL        OKI19X.TMP
        OKIDATA 292,293,294 STD     OKI29X.OVL        OKI29X.TMP
	OKIDATA 393 STD		    OKI39X.OVL        OKI39X.TMP  
        NEC 8023                    CITOH.OVL         CITOH.TMP
        STAR NX1000                 STAR1000.OVL      STAR1000.TMP
	TEKTRONIX 4696              TEK4696.OVL       TEK4696.TMP
        TOSCHIBA P321SL             TP321.OVL         TP321.TMP
        TOSCHIBA P341SL             TP321.OVL         TP321.TMP



```
{% endraw %}

## READ1ST.DOC

{% raw %}
```









              PRINTSELECTOR QUICK START DESCRIPTION







































                                1








                             LICENSE


     The PRINTSELECTOR software package and this manual are 
protected by United States Copyright Law.  This shareware distri-
bution copy is meant for demonstration use only.  It may be 
freely distributed by electronic or magnetic media.  HOWEVER IT 
IS ONLY MEANT FOR DEMONSTRATION PURPOSES.  ANY CONTINUED USE IS 
STRICTLY PROHIBITED.  

     No telephone or mail support is provided for non-registered 
users.

     A single use license and the most recent version of PRINTSE-
LECTOR will be sent when you become a registered user.

     You may register your PRINTSELECTOR program by sending 
$25.00 + $4.00 shipping and handling to:

          Brook King Systems    
          10064-7 Larwin Av.    
          Chatsworth, CA.  91311

California Residents must include $1.69 state sales tax.
Registration from outside the United States must include $10.00 
Shipping and handling.  Checks must be in U.S. dollars drawn on a 
U.S bank.  You may send currency at your own risk.


Brook King Systems    
10064-7 Larwin Av.    
Chatsworth, CA.  91311
(818) 882 8451














                                   2











                            WARRANTY:

BROOK KING SYSTEMS SPECIFICALLY DISCLAIMS ANY  WARRANTIES EX-
PRESSED OR IMPLIED INCLUDING BUT NOT LIMITED TO THE PURPOSE TO 
WHICH THE PRODUCT IS APPLIED AND ANY DAMAGE THAT MAY RESULT TO 
EQUIPMENT OR DATA THROUGH THE USE OF THE PRODUCT. 


                              TRADEMARKS

Printselector is a trademark of Brook King Systems


                              COPYRIGHT

Manual and software copyright 1990 Brook King Systems:










Brook King Systems
10064 -7 Larwin Av.
Chatsworth, Ca., 91311
(818) 882 8451
















                                3







                            IMPORTANT NOTICE 

                (very important to the program author)


PRINTSELECTOR IS A SHAREWARE PRODUCT.  IT IS NOT FREE SOFTWARE.  
COPYRIGHTS FOR PRINTSELECTOR PROGRAMS AND MANUALS ARE OWNED BY 
BROOK KING SYSTEMS.  

THE SHAREWARE VERSION OF PRINTSELECTOR IS DISTRIBUTED FREELY AS A 
DEMONSTRATION COPY ONLY.  EVEN IF YOU PAID SOMEONE OTHER THAN 
BROOK KING SYSTEMS FOR YOUR SHAREWARE COPY, YOU MUST OBTAIN A 
REGISTERED COPY IF YOU CONTINUE TO USE THE PROGRAM.  A REGISTERED 
COPY CAN BE OBTAINED BY SENDING $25.00 + $4.00 SHIPPING AND 
HANDLING TO 

          Brook King Systems    
          10064-7 Larwin Av.    
          Chatsworth, CA. 91311

CALIFORNIA RESIDENTS MUST INCLUDE $1.69 STATE SALES TAX.
REGISTRATION FROM OUTSIDE THE UNITED STATES MUST INCLUDE $10.00 
SHIPPING AND HANDLING. (RATHER THAN THE $4.00 FROM INSIDE 
THE UNITED STATES).  CHECKS MUST BE IN U.S. DOLLARS DRAWN ON 
A U.S BANK.  YOU  MAY SEND CURRENCY AT YOUR OWN RISK.


     We worked hard to make this a good program and we'll contin-
ue to improve it.  Please don't rip us off.  Register your copy!  
Thanks.



















                                4







1.0 INTRODUCTION

     This file is intended to give you a quick start to using 
PRINTSELECTOR.  While a detailed manual has been provided, it is 
time consuming to print out and you will receive a printed ver-
sion when you register.  PRINTSELECTOR programs are all menu 
driven and should be easy to use once you become acquainted with 
the format.

2.0 WHAT IS PRINTSELECTOR

     Printselector is a set of 5 programs designed to give you 
complete control of your printer.  It operates in two modes.  The 
first mode is the "menu mode" which presents a menu of possible 
printer characteristics.  Selection from this menu will send 
appropriate commands to your printer.  The printer functions will 
be set by the menu commands and will remain in place until either 
new printer commands are received or the system is reset.  As an 
example if you selected italic printing as a menu command (assum-
ing your printer supports italic printing), then your printer 
would use italics until either PRINTSELECTOR or another applica-
tion program sent new commands or until the system is reset.

     The second PRINTSELECTOR mode is the insertion mode.  This 
mode inserts printer commands automatically from within a docu-
ment.  These commands can be those available from the menu mode 
or compound commands that generate special symbols or effects.  
The insertion mode is particularly valuable as it allows you to 
control special printer features even in application programs 
(such as word processors and spreadsheets) that don't normally 
support those features. An important example of where the inser-
tion mode is very useful is in controlling your printer's special 
characters or fonts.  

     The insertion mode is supported by a Terminate and Stay 
Resident (TSR) program (SETTEMP) that works from within almost 
all application programs.  There is also a separate non TSR 
program (PRINTIT) that works only on files as they are sent to 
the printer.  

     PRINTSELECTOR provides menus and insertable commands for a 
number of standard printers.  In addition, menu driven, easy to 
use, programs are provided to allow you to develop menu's and 
insertable commands customized to your own needs and printer.

     Specific instructions for using these modes are presented in 
the USING PRINTSELECTOR section.

                                5









3.0 PRINTSELECTOR FILES
          
     The demonstration version of PRINTSELECTOR contains three 
archived files.  These are:

PSLPG1.ARC

          This archived file contains all of the PRINTSELECTOR 
          working files.  These are:

          PRINTMEN.EXE: provides a selectable menu of printer 
          functions.

          SETTEMP.EXE: A memory resident program that allows 
          printer functions to be called from other programs.

          PRINTIT.EXE: A non memory resident program that inserts 
          printer commands in files that it sends to the system 
          printer.

          MAKEMENU.EXE:  A program for customizing the menus used 
          by PRINTMEN.EXE

          MAKETEMP.EXE:  A program that allows you to customize 
          the printer commands that are inserted by SETTEMP.EXE 
          and PRINTIT.EXE

          TRANSL.EXE:  A translation utility that may be helpful 
          in examining printer escape sequences (this program is 
          described in APPENDIX C of the User's Manual).

 PSLDT1.ARC

          This archived file contains standard printer definition 
          files for use by the PRINTSELECTOR programs.  It con-
          tains template, overlay and description files (all of 
          which will be defined later in this file).

PSLDOC.ARC

          This archive file contains documentation  for the 
          PRINTSELECTOR programs.  Specifically it contains:

          MANUAL.DOC : This is the PRINTSELECTOR user's manual

          READ1ST.DOC: This is a short quick start file that can
          get you up and running in PRINTSELECTOR without study-
          ing the rather extensive user's manual.

                                             6 
          







          READ.ME : This contains additions or corrections to the 
          User's Manual as well as additional helpful hints in 
          using PRINTSELECTOR.

          PRINTFIL.DOC : This lists the standard printer data 
          files that are currently available for PRINTSELECTOR

          ORDERFRM.DOC:  This very important document can be used 
          to register your copy of PRINTSELECTOR


4.0 SETTING UP A PRINTSELECTOR WORKING DIRECTORY

     The User's Manual gives very detailed and specific instruc-
tions for setting up a PRINTSELECTOR working directory or disk.  
However these instructions can be summarized quite quickly for 
people used to dealing with MSDOS and archived files (the in-
structions listed assume a PRINTSELECTOR working directory on a 
hard disk:

1.  BACKUP your source copy!

2.  Make a working directory using your MSDOS mkdir command:

3.  Unarchive all of PSLPG1.ARC into your working directory.

4.  Unarchive all of PSLDOC.ARC into your working directory

5.  Referring to PRINTFIL.DOC that you have unarchived from 
PSLDOC.ARC, unarchive the .dis, .ovl and .tmp  files that 
correspond to each of the printers you plan to use from 
PSLDT1.ARC.  If this appears too complicated for a first start, 
simply unarchive all of PSLDT1.ARC into your working directory.

5.0 USING PRINTSELECTOR

     This section is a brief description of how to use the 
PRINTSELECTOR programs.  As PRINTSELECTOR relies on relatively 
self explanatory menus, the best way to learn is to experiment.  
The second best way is to read the PRINTSELECTOR user's manual. 

     Before discussing how to use the PRINTSELECTOR functional 
programs, it is convenient to first describe the data file types 
used.


                                7









5.1  PRINTSELECTOR DATA FILES

     PRINTSELECTOR utilizes three types of data files.  These 
are:

     overlay files:  identified by .ovl extension

          Example: laserii.ovl

          Overlay files are used by the PRINTSELECTOR menu mode 
          to define the menu options available for a particular 
          printer.  Overlay files are provided for many standard 
          printers.  In addition, overlay files can be created or 
          edited by the MAKEMENU.EXE  program.

     template files:  identified by the .tmp extension

          Example: laserii.tmp

          Template files define the functions that may be embed-
          ded in documents.  Template files are provided for many 
          standard printers.  In addition, template files can be 
          created or edited by the MAKETEMP.EXE program.

     description files:  identified by the .dis extension

          Example: laserii.dis

          Description files are not used by PRINTSELECTOR operat-
          ing programs.  Instead, they provide a human readable 
          description of the options offered by the corresponding 
          template file. Every template file will have a corre-
          sponding description file which will have the same name 
          as the template file but with the .dis extension.  As 
          an example the description file corresponding to 
          laserii.tmp would be laserii.dis.

          Description files are provided for all standard tem-
          plate files and are created when new template files are 
          created or edited by MAKETEMP.EXE

     The documentation file PRINTFIL.DOC provides the latest list 
of the standard overlay, template and description files available 
for use with PRINTSELECTOR.  If your exact printer is not avail-
able, try using the files for a compatible printer (for instance 
many printers are compatible with EPSON dot matrix or Hewlett 
Packard laser jet printers.).  If your exact printer is not 

                                8







listed and there are no compatible printers, try using the over-
lay, template and extension files of a printer made by the same 
manufacturer as yours.  Usually (but not always) manufacturers 
keep the same printer commands for their whole product line.

5.2 USING THE PRINTSELECTOR MENU MODE  

     The PRINTSELECTOR menu mode provides a menu of functions 
that can be preset to your printer.  For instance, if you wished 
all characters to be printed in condensed type, there will most 
likely be a menu command that will allow you instruct your print-
er to do this.

     The PRINTSELECTOR menu mode is invoked with the 
PRINTMENU.EXE command.  The syntax for this command is:

     PRINTMEN  [overlay file]

     As an example, if you have an EPSON 286 printer and wish to 
invoke the menu mode your would type:

     PRINTMEN EPS286   

     The inclusion of the overlay file extension is optional.  

     Once the menu mode is invoked by PRINTMEN you need only 
follow the menu of commands presented.

     If an overlay file is not found when PRINTMEN is called, the 
program will look for the default overlay file FPRINT.OVL.  
Consequently if you normally use a single printer, copying your 
printer's overlay file to FPRINT.OVL might be convenient for you.  

     As an example if you always use an EPSON 286 printer, you 
might issue the command:

     COPY EPS286.OVL = FPRINT.OVL

     Then simply issuing the command

     PRINTMEN

     would begin the menu mode using the default overlay file 
(which in the case of the example would be EPS286.OVL).





                                9








5.3  USING THE PRINTSELECTOR INSERTION MODE

     The PRINTSELECTOR insertion mode allows you to embed printer 
commands directly into documents.  This is accomplished by the 
use of "key codes".   A key code is an ASCII printable character 
preceded by the two characters "#&".  Examples of possible key 
code sequences are #&C , #&c, #&N, #&[ and so on.  

     To use the insertion mode you must first embed key codes 
where you wish to enter printer commands in your document. As 
discussed earlier, key codes for your printer are defined by the 
template file.  They are explained in a form that you can read in 
the description file that corresponds to the template file being 
used.  

     The insertion mode can be made operational (once the appro-
priate key codes are placed in your document) in one of two ways.  
The most convenient way is the use of the "terminate and stay 
resident" (TSR) program SETTEMP.EXE. 

     The calling sequence for SETTEMP is :

     SETTEMP [template file]

     where the template file name is the one corresponding to the 
printer you wish to use.  If no template file is specified, 
SETTEMP will look for the default template file FPRINT.TMP

     As we mentioned earlier, SETTEMP is a terminate and stay 
resident program.  A terminate and stay resident program  is one 
that once called is always active in your system.  For instance 
to use the SETTEMP method of using PRINTSELECTOR's insertion 
mode, assuming you are using an EPSON 286 printer, you would 
issue the command:

     SETTEMP EPS286

(notice that it is not necessary to include the .TMP extension in 
the template file).  Once this command is issued, your printer 
will always translate key codes defined in the template file 
(EPS286.TMP) to the defined printer commands.  This is true for 
any source file or application program including data bases, 
spread sheets and word processors. 




                                10









     If you wish to change template files when SETTEMP has al-
ready been called, you must remove the first template file.  This 
can be done with the command:

     SETTEMP remove

Once this command has been issued you may install a new template 
file with a new call to SETTEMP.  For instance, in our example, 
if we wished to change from an EPSON 286 to a Hewlett Packard 
Laserjet printer we would follow the remove command with the 
install command for the Laserjet II, i.e.

     SETTEMP laserii.  

     Terminate and Stay Resident programs do not always work.  
Sometimes the computer does not have enough memory to support 
them, sometimes they interfere with or are interfered with by 
other TSR or application programs.  If you believe you are expe-
riencing these kind of difficulties, you should use the PRINTIT 
program.  The calling sequence for PRINTIT is 

     PRINTIT [template file] data file

The data file is the file that you wish to send to your printer 
(this would be the file that contains the key codes you have 
added to define the printer functions you wish to add).  The 
template file defines the key codes for the printer you are 
using.  If you do not specify a Template file, PRINTIT will look 
for the default file FPRINT.TMP.

     YOU DO NOT NEED TO SPECIFY THE TEMPLATE FILE EXTENSION BUT 
YOU MUST ALWAYS SPECIFY THE DATA FILE EXTENSION.

     PRINTIT will generate a new file with the same name as your 
data file but with the .PRN extension.  This is the file that 
will be sent to your printer.  

     As an example of PRINTIT, if you had an EPSON 286 printer 
and wanted to send the file LETTER.TXT to your printer while 
interpreting the key codes that were already embedded in 
LETTER.TXT, you would issue the command:

     PRINTIT EPSON286 LETTER.TXT

This would form the new file LETTER.PRN with the actual printer 
commands.  LETTER.PRN would be printed by your printer if it is 
properly attached.

                                11







5.4  CREATING OR EDITING  PRINTSELECTOR OVERLAY AND TEMPLATE 
FILES

     A very unique feature of the PRINTSELECTOR set of programs 
is that they provide an easy menu driven method of creating your 
own overlay and template files.  This allows you to create menus 
and templates that meet your exact needs as well as adapting to 
new printer models as they are developed.  

     Overlay files may be created or edited with the MAKEMENU 
program.  Template files may be created or edited with the
MAKETEMP program.  Both of these programs are discussed in detail 
in the PRINTSELECTOR user's manual.  However both programs are 
menu driven and it is easiest to experiment with them once the 
calling sequence is known.  

     Whenever existing overlay and template files are edited, 
backup copies of the original files are automatically created.  
Backup files are identified by the original file name and the new 
extensions given below:

     backup overlay files : .obk
     backup template files: .tbk
     backup display files:  .dbk


5.4.1 Creating or Editing Overlay Files

     The MAKEMENU calling sequence is:

     MAKEMENU overlay file name

If you leave out the overlay file designation, MAKEMENU will ask 
you for the name of the overlay file you wish to edit or create.  

     PRINTSELECTOR menus are divided into display "screens" each 
of which contains a number of menu items that may be selected.  
In creating a new menu, MAKEMENU will prompt you for the names of 
the screens you wish to create and the names of the menu items 
you wish to create within a given screen.  Since the MAKEMENU 
program displays the escape sequence data that is sent to the 
printer as well as the item titles, a full menu screen will not 
fit on a CRT display screen in MAKEMENU.  Consequently, screens 
are broken into "frames."  A frame contains the number of screen 
items that can fit on a single MAKEMENU display screen.  

     Inside MAKEMENU, instructions are provided to allow advanc-
ing to next or last screen or the next or last frame within the 
currently displayed screen.

                              12






     When creating a new item , you will be first asked how many 
variable inputs you will desire.  (Menu items may contain up to 5 
variable inputs, each of which will also have a title).  If you 
answer "0", you will be asked to enter the escape sequence that 
identifies the item.  If you enter a number other than 0, you 
will be prompted to enter the variable titles.  When all variable 
titles are entered you than be asked to enter the escape se-
quence.  

     In editing an existing menu item, it will only be necessary 
to answer the prompts.  Remember the definitions of screens, 
frames, menu items and item variables.  

5.4.2 Creating or Editing Template Files

     The proper calling sequence for MAKETEMP is

     MAKETEMP template file [overlay file]

If neither the template file name nor the overlay file name is 
provided, MAKETEMP will list the proper calling format.  If the 
overlay file name is not provided, MAKETEMP will use the default 
overlay file (fprint.ovl) if it is available.

     Template files are simply a list of key codes.  Each key 
code is assigned a key number.  

     MAKETEMP display screens are broken up into "frames".  A 
frame in this context is the number of key codes that can fit on 
a CRT display screen.  Instructions are provided to move to the 
next or the previous frame.  In addition it is possible to ad-
vance to the particular key number you wish to edit.  

     MAKETEMP is menu driven.  It is simply a matter of following 
the directions.  The specified overlay file can be used to gener-
ate the escape sequences required for a key code, or a totally 
new escape sequence can be input.

     Whenever a template file is created or edited, a new corre-
sponding human readable display file is also created.   








                                13








6.0  SUMMARY

     This file has tried to give you a quick start in using 
PRINTSELECTOR.  In the name of brevity it is intentionally incom-
plete.  Detailed questions are hopefully answered in the much 
more extensive user's manual.  

     We hope that you find the PRINTSELECTOR programs useful and 
easy to use.  

     Remember, if you do find the PRINTSELECTOR programs useful, 
please register your copy.
































                                13













```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2518

     Volume in drive A has no label
     Directory of A:\

    PRTSLPG1 ARC    140693   5-29-90  11:46p
    PRTSLDT1 ARC    126614   7-22-90  12:38p
    PRTSLDOC ARC     68664   6-01-90  12:14a
    ARCE     COM      7517   3-03-89   4:03a
    ARCE     DOC     11887   3-03-89   4:03a
    GO       BAT        28  10-04-90   5:21a
    FILE2518 TXT      1225  10-04-90   3:20p
    GO       TXT       958  10-04-90   3:18p
            8 file(s)     357586 bytes
                               0 bytes free
