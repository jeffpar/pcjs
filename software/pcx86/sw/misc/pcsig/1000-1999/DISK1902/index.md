---
layout: page
title: "PC-SIG Diskette Library (Disk #1902)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1902/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1902"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HACKER"

    Want to write truly interactive and intelligent batch files?  HACKER
    can add a whole new dimension to batch file programming.
    
    HACKER is a multi-function utility for programmers.  It communicates
    with both the user and the system, and performs many useful tasks. Most
    HACKER functions are for use within batch files, but command line
    processing is also supported.  HACKER returns information to a batch
    file through DOS's errorlevel.
    
    HACKER functions include:
    
    ~ ASK a question from the user,
    
    ~ BOOT causes a warm or cold re-boot,
    
    ~ CLEAR clears selected portions of the screen,
    
    ~ FIX changes the shape of the cursor,
    
    ~ IS gives drive/directory control.
    
    ~ NOTE sends notes to the screen,
    
    ~ SHOW lists hidden files and directories,
    
    ~ SOUND gives ability to produce tones or music,
    
    ~ WAIT adds time delays,
    
    ~ WHAT provides information about date/time/drive/mode.
    
    HACKER also provides an extensive on-line help command that explains the
    use of each function.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1902.TXT

{% raw %}
```
Disk No: 1902                                                           
Disk Title: Hacker                                                      
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Hacker                                                   
Author Version: 1.2                                                     
Author Registration: $20.00.                                            
Special Requirements: None.                                             
                                                                        
Want to write truely interactive and intelligent Batch files?  HACKER   
can add a whole new dimension to Batch file programming.                
                                                                        
HACKER is a multi-function utility for programmers.  It communicates    
with both the user and the system, and performs many useful tasks.      
Most HACKER functions are for use within batch files, but command line  
processing is also supported.  HACKER returns information to a batch    
file through DOS's ERRORLEVEL.                                          
                                                                        
HACKER functions include, ASK a question from the user, BOOT causes a   
warm or cold re-boot, CLEAR offers cursor control, SOUND gives ability  
to produce tones or music, WHAT provides information about date/time/   
drive/mode, NOTE sends notes to the screen, WAIT adds time delays, and  
IS gives drive/directory control.  HACKER also provides an extensive    
on-line help command that explains the use of each function.            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HACKER.DOC

{% raw %}
```
0


		       .    %*%*%*%*%*%*%*%*%*%*%*%*%*%*%**%*%*%     .
                           %*%*%*%*%*%*%*%*%*%*%*%*%*%*%*%%*%*%*%
                          %*%*%*%*%*%*%*%*%*%*%*%*%*%*%*%**%*%*%*%
                         %*%*%* .                          . *%*%*%
                        %*%*%*%          H A C K E R         %*%*%*%
                       %*%*%*%*                              *%*%*%*%
                        %*%*%*%            ver 1.2           %*%*%*% 
                         %*%*%* .                          . *%*%*%
                          %*%*%*%*%*%*%*%*%*%*%*%*%*%*%*%**%*%*%*%
                           %*%*%*%*%*%*%*%*%*%*%*%*%*%*%*%%*%*%*%
                       .    %*%*%*%*%*%*%*%*%*%*%*%*%*%*%**%*%*%     .




                             H A C K E R   C O M P O N E N T S

                                         HACKER.com    
                                         HACKER.doc 
                                        HACKROUN.bat
                                          READ.me



                              S H A R E W A R E   N O T I C E 

                HACKER is distributed as shareware. You may make as many
            copies as you please,  and give them to whomever you please, 
            provided that all four files are included unmodified. 
            However, YOU MAY NOT SELL HACKER, although you may charge a 
            nominal fee for materials and handling.  Unregistered users 
            are granted a limited license to use HACKER to evaluate its 
            usefulness.  Unlicensed use is forbidden.

                If you choose to use  HACKER,   you should register by 
            completing the attached registration form and returning it 
            with your registration fee of $20 to the author:

                                       Ted Wray
                                       P.O. Box 344
                                       Narberth, PA
                                              19072-0344

                Registered users are entitled to use  HACKER  in any way 
            they  see fit,  including  incorporating it  into  their own 
            products.  Registered users will receive advance  notice  of 
            upgrades  and other products, whether released as  shareware 
            or as commercial software.




                                  D I S C L A I M E R

                The author makes absolutely no warranty of any kind with 
                respect to this program.  You use this software entirely 
                at your own risk; the author shall not be liable for any 
                incidental  or consequential losses  or damages  arising 
                directly  or indirectly from the use or non-use  of this 
                program.   By using this program,  you agree to hold the 
                author blameless with regard to any such loss.
             HACKER ver 1.2 documentation                           
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved







                             T A B L E   O F   C O N T E N T S




                         INTRODUCTION .........................  1
                         HACKER functions .....................  2
                             Ask ..............................  2
                             Boot .............................  2
                             Clear ............................  2
                             Fix ..............................  3
                             Fix Cursor........................  3
                             Fix File..........................  3
                             Help..............................  3
                             Is ...............................  4
                             Is Dir ...........................  4
                             Is Volume ........................  4
                             Note .............................  4
                             Show .............................  5
                             Show Cursor ......................  5
                             Show Hidden ......................  5
                             Sound ............................  6
                             Wait .............................  6
                             What .............................  7
                             What Date ........................  7
                             What Day .........................  7
                             What Depth .......................  7
                             What Drive .......................  7
                             What Mode ........................  7
                             What Time ........................  7
                         Notes ................................  8
                         Examples .............................  9
                         Index ................................  11
                         Acknowledgments ......................  12
                         Revision History .....................  12
                         Bug Report ...........................  13
                         Registration Form.....................  14




















             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved      
             HACKER ver 1.2 documentation                    page 1
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                        INTRODUCTION


                HACKER is a multi-function utility for programmers.  It 
            communicates with both the user and the system, and performs 
            other useful tasks.  This documentation is intended to give 
            the user an overview of HACKER and an off-line reference to 
            supplement HACKER's extensive on-line help screens.  Examples 
            of most HACKER functions are given by the demonstration 
            program HACKROUN.bat.

                  Most HACKER functions are for use within batch files, 
            but a few are more likely to be used at the command level; 
            These are:
                         ?        FIX       HELP        SHOW   

                HELP and ? are distinct help functions, FIX changes the 
            cursor and modifies files, and SHOW displays system 
            information.  Other functions are:

                      ASK         CLEAR       NOTE        WAIT
                      BOOT        IS          SOUND       WHAT
                                                            
                HACKER processes one or more commands passed to it on 
            the command line. Each command consists of a function and 
            qualifiers if the following format:

                   HACKER  function  [object]  [parameters]  [/options]

                HACKER returns information to a batch file through DOS's 
            ERRORLEVEL, but note that HACKER reverses usual practice: 
            Zero may indicate an error !

                Separate commands are separated by semicolons. Hacker 
            will accept as many commands as you can squeeze into DOS's 
            127 character command line. The errorlevel returned is the 
            errorlevel of the last function executed that sets the 
            errorlevel.

                The dual help functions HELP and ? describe the action 
            and/or syntax of the specified function, or of HACKER itself 
            if no function is specified. Compound functions require that 
            an object be specified for a complete description.  
            Specifying an object is always optional. Invalid functions 
            and objects are ignored.

                       ?     tells what a function does.
                      HELP   tells how to use a function.

                Whenever possible the two help screens have been 
            combined, so both HELP and ? produce the same screen.












             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 1
             HACKER ver 1.2 documentation                    page 2
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                      HACKER functions

                 ASK     [question] [{options}] [lines]  
                         ErrorLevel is the ordinal of the response.

                ASK displays a question for the operator upon the 
            screen, beeps, awaits a response, then clears the question 
            from the screen and, if LINES was specified, the preceding 
            LINES rows as well. Finally, the question and response are 
            displayed as standard output for use as a log entry.   All 
            parameters are optional.  The default QUESTION is "Press any 
            key..." and the default for LINES is zero. If no OPTIONS are 
            specified, any keystroke will be accepted and the ERRORLEVEL 
            will be zero. If OPTIONS are specified, the pressing of keys 
            that are neither option keys nor break keys is ignored.

                A zero ERRORLEVEL indicates that the user pressed BREAK, 
            ESCAPE, or ^C. Otherwise, an ErrorLevel of  n  indicates 
            that the  n th option was chosen.  Case is irrelevant.  
            Options may be letters or numbers.  Punctuation (/-\,) and 
            spaces are ignored.
            ------------------------------------------------------------


                BOOT   [COLD]
                       ErrorLevel does not exist !

                BOOT causes the system to re-boot itself. Unless COLD is 
            specified, a warm boot is always attempted, but if a TSR or 
            some other evil software has violated DOS for its own 
            lustful purposes, the boot will be cold (i.e.: a hardware 
            reset as opposed to a software reset).

               BOOT is useful for changing CONFIG, installing or 
            removing VDISK, purging TSR's, et c.
            ------------------------------------------------------------


                CLEAR    [lines] 
                         ErrorLevel is not changed.

                CLEAR moves the cursor up LINES rows, erasing the 
            contents of each row crossed.  If Lines is not specified, 
            the default of two lines is assumed.  A negative value for 
            lines causes clearing to procede downward.

                CLEAR erases unneeded output from the display without 
            disturbing more meaningful output;  it also provides an 
            alternative to the standard ECHO OFF / CLS sequence, in 
            which case the default is just dandy, thank you.  With 
            CLEAR, it is no longer necessary to explain that ECHO OFF    
            is not a cybernetic expletive.
            ----------------------------------------------------------










             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 2
             HACKER ver 1.2 documentation                    page 3
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                      HACKER functions       (continued)

                FIX is a compound function that takes the following objects:
                                CURSOR      changes the cursor definition.
                                FILE        transforms files.

                FIX CURSOR  [start [stop]] [/ ON | OFF ]
                            ErrorLevel is the former definition.
                            FIX CURSOR and SHOW CURSOR are identical.

                The cursor consists of several horizontal scan lines in 
            a vertical stack, some of which are illuminated. These scan 
            lines are numbered from zero at the top of the character box 
            to the bottom, which is seven on a CGA and thirteen on MDA, 
            EGA, VGA etc.  The return code is (16 * Top) + Bottom. 

                Because some systems do not initialize the BIOS cursor 
            definition, it is possible that an incorrect definition will 
            be reported prior to the first cursor modification.


                FIX FILE   [d:] [path] [name] / option
                           ErrorLevel is the number of files fixed.

                The specified files are transformed according to the 
            rule specified by the option(s), at least one of which is 
            REQUIRED. Wild-cards are permitted in file names. The 
            options are:
                     
                    ADD LFS    guarantees that each CR is followed by LF
                    ALL        causes SOFTEN CR to soften all CR's. ALL 
                               is a modifier that does nothing by itself.    
                    SOFTEN CR  for word processing.  Makes CR's within 
                               paragraphs "soft": not paragraph enders.
            -------------------------------------------------------------



                 HELP    [ function  [ object ] ]   
                         ErrorLevel is not changed.

                The dual help functions HELP and ? describes the action 
            and/or syntax of the specified function, or of HACKER itself 
            if no function is specified.  Compound functions require that 
            an object be specified for a complete description.  Specifying 
            an object is always optional. Invalid functions and objects 
            are ignored.

                       ?     tells what a function does.
                      HELP   tells how to use a function.

                Whenever possible the two help screens have been 
            combined, so both HELP and ? produce the same screen.
            ------------------------------------------------------









             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 3
             HACKER ver 1.2 documentation                    page 4
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                      HACKER functions       (continued)


                IS   object  names    
                     ErrorLevel is bitwise boolean.

                A compound function that takes the following objects:

                                DIR         identifies current directory.
                                VOLUME      identifies volumes mounted.

                The LAST name sets the low order bit; each higher order 
            bit is set by each of the names progressing toward the LEFT.

                IS DIR   name  [, name [,...]]    

                Bit is set to one if the corresponding NAME matches the 
            current directory.  Up to eight directory names may be 
            specified.  A match is determined by comparing NAME to the 
            rightmost characters of the current directory. Thus OS would 
            match DOS, THAMOS, ROLOS and \X\Y\Z\Mx\LAOS.

                IS VOLUME   [d:][label] [d2:][label2] ...

                Checks the volume label on selected drive(s) and sets 
            the error level bit by bit to one if the volume is mounted, 
            zero otherwise.  Up to eight labels may be checked at once. 
            Wild-cards are permitted in labels.  No specified label 
            matches an unlabeled volume. At least one label is always 
            checked, so if no parameter is specified, the current device 
            is checked for a volume label.
            ------------------------------------------------------------




                NOTE     [message]     
                         ErrorLevel is not changed.

                Note beeps and displays a high visibility message upon 
            the screen to facilitate distant monitoring of progress.
            ------------------------------------------------------------





















             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 4
             HACKER ver 1.2 documentation                    page 5
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                      HACKER functions       (continued)


                SHOW 
                A compound function that takes the following objects:

                                       CURSOR
                                       HIDDEN

                SHOW CURSOR  [start [stop]] [/ ON | OFF ]
                             ErrorLevel is the former definition.
                             FIX CURSOR and SHOW CURSOR are identical.

                The cursor consists of several horizontal scan lines in 
            a vertical stack, some of which are illuminated. These scan 
            lines are numbered from zero at the top of the character box 
            to the bottom, which is seven on a CGA and thirteen on MDA, 
            EGA, VGA etc.  The return code is (16 * Top) + Bottom.

                Because some systems do not initialize the BIOS cursor 
            definition, it is possible that an incorrect definition will 
            be reported prior to the first cursor modification.


                SHOW HIDDEN  [d:] [path]
                         ErrorLevel is the number of files hidden found.

                Displays the names of all hidden files or directories in 
            or within the specified drive and directory.  Defaults are 
            the current drive and ROOT directory. . and .. may be used.

            CAUTION:  Tampering with hidden files may be hazardous to 
            your box. However, if you use any MS editor, you may have 
            one or more hidden sub-directories named DELETED which 
            contain files consuming most of your capacity.  These 
            directories may be purged normally.
            ------------------------------------------------------------


























             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 5
             HACKER ver 1.2 documentation                    page 6
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved
                SOUND   object  [/CONTINUE]       
                         ErrorLevel is zero unless a key was pressed.

                SOUND is a compound function that takes the following objects:

                    ALSO    BRINDI  DALILA  DREAM   GATE    LIBERA  RIDE                
                    ALARM   CELESTE DIVE    FLUTE   GIFTS   PIPE    RUFFLE              
                    BENVEN  CHARGE  DONNA   FUR     HORN    RAYS    SIREN               

            and makes the sound of the specified OBJECT.  If CONTINUE
            is specified, the sound continues until a key is pressed. 
            Otherwise, the sound stops after one recitation or when a 
            key is pressed.  The sounds vary widely in duration and 
            complexity.

                SOUND might be used to indicate completion of a long 
            task, particularly when a screen blanker is in use. It can 
            also be used to produce audible progress reports.

                 CAUTION:  Excessive use of this function may engender 
                           violent hostility among irritated coworkers.
            -------------------------------------------------------------


                WAIT  seconds  
                      ErrorLevel is seconds NOT completed.

                Waits SECONDS seconds for a key to be pressed. Useful 
            for displaying operator instructions without risk of stop-
            ping when run unattended.  Also allows break points that 
            permit operator to stop or continue, with a default choice.
            ------------------------------------------------------------
































             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 6
             HACKER ver 1.2 documentation                    page 7
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                      HACKER functions       (continued)


                WHAT
                A compound function that takes the following objects:

                                DATE        DEPTH       MODE
                                DAY         DRIVE       TIME


                WHAT DATE       ErrorLevel is day of the month.


                WHAT DAY        ErrorLevel is day of the week.

                            0 = Sunday,         2 = Tuesday,        5 = Friday
                            1 = Monday,         3 = Wednesday,      6 = Saturday
                                                4 = Thursday


                WHAT DEPTH      ErrorLevel is directory depth.

                    The depth of the current directory in the tree structure.
                    That is, in other words, the number of directories that
                    contain the current directory, either directly or
                    indirectly.  The root directory returns zero, primary
                    sub-directories return one, and so forth.


                WHAT DRIVE      ErrorLevel is   default drive.

                        1 for A:    4 for D:    7 for G:    10 for J:
                        2 for B:    5 for E:    8 for H:    11 for K:
                        3 for C:    6 for F:    9 for I:    12 for L:  


                WHAT  MODE       ErrorLevel is video mode.

                                0, 1, 2, 3      CGA text
                                4, 5, 6         CGA graphics
                                7               Monochrome
                                8, & above      EGA / VGA


                WHAT TIME        24 hour time of day.

                        The return code is ten times the hour
                        plus completed ten minute intervals.

                        e.g.:   131 is returned at 1:12 p.m.
                -------------------------------------------------------












             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 7
             HACKER ver 1.2 documentation                    page 8
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                           NOTES

                The ENVIRONMENT.  The DOS batch processor interprets any 
            string bracketed with percent signs as an environment 
            variable and replaces it with the value of that variable. 
            HACKROUN uses this uses this property to effect local 
            variables.  However, it is easy to run OUT OF STRING SPACE ! 
            Therefor, it is strongly recommended that unneeded 
            environment strings be cleared as soon as possible.  To use 
            software that examines the environment, you may wish to 
            create a batch file that sets the requisite environment 
            strings, runs the program and then clears the strings.  The 
            same applies to paths.  Some people put a statement in their 
            autoexec files that sets a path to every directory;  Not 
            only does this consume a considerable piece of the 
            environment, it also can cause confusion when different 
            files have the same name.  Usually a path is unnecessary.  A 
            better approach is to set and clear paths with a 
            batch file, as before,

                BEEP.  Hacker includes no function or file to make a 
            beep because you can do this already.  All that is necessary 
            is to echo the beep character, ascii 7. (Many printers, also 
            will beep rather than print this character.)  Your favorite 
            editor probably has a way to enter special control 
            characters such as the beep.  Many use this technique: enter 
            7 (or 007) while holding the alt key.  Others recognize 
            Cntrl-G as the beep. Most editors display the beep as either 
            a small dot in the center of the character box, or as ^G.  A 
            sample beep is included in HACKROUN, you can use that one, 
            if you find that to be easier.  Also, see Special Characters 
            below.


                A BLANK LINE can be ECHOed by placing an invisible, non-
            blank character on the Echo line.  The two ideal candidates 
            for this are Beep and Backspace.  BACKSPACE is ascii 8 or 
            Cntrl-H.  Keep in mind that the BS must be entered the same 
            way as the Beep, as described above; every decent text 
            editor interprets a press of the Backspace key as "delete 
            the character to the left of the cursor".

                Here are the SPECIAL CHARACTERS Beep and Backspace. If 
            you are TYPEing this, you will hear the beep, but will see 
            nothing of interest.  Likewise if this is hardcopy.

                         Space       Beep          BS 
			  > <         ><          ><
                           ^           ^            ^
                One other special character worth knowing about is the 
            Form Feed, ascii 12 (decimal), (or Cntrl-L.  Which causes 
            most printers to perform a form feed (or eject) operation.











             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 8
             HACKER ver 1.2 documentation                    page 9
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                          EXAMPLES

                I.   Let us suppose that your hard disk is well 
            organized. That is, your root directory contains ONLY 
            sub-directories and configuration files.  Let us further 
            suppose that among these sub-directories is one named batch 
            and several application sub-directories for such things as 
            Word processing, spreadsheets, games, accounting, et c., 
            each of which contains its own batch sub-directory.  The 
            following might be a useful, general purpose end routine.

                END.bat
                     echo off
                     Hacker clear
                :end
                     cd ..
                     cd batch
                     Hacker is dir batch
                     if errorlevel 1 goto exit
                     Hacker what depth
                     if errorlevel 1 goto end       
                :exit
                     cls
                     type menu.txt
                -------------------------------------------------------



                II. The date and time functions of WHAT can be used in 
            AUTOEXEC to schedule regular maintenance routines.

                -------------------------------------------------------

                III. The Add lfs function of FIX FILE can be used to 
            make some captured standard output files readable by your 
            favorite editor. Some programs, such as the Norton 
            utilities, appear to over-write their own output by 
            displaying only display characters, the carriage return (or 
            new line) character, and the back space character; the line 
            feed character only rarely.  If your editor chokes on 5 k 
            lines, try adding line feeds.






















             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 9
             HACKER ver 1.2 documentation                    page 10
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                  EXAMPLES   ( continued )


                IV.   Let us suppose that you regularly review various 
            software, or occasionally use some hogware that you normally 
            keep archived on floppies.  If you wish to eradicate all the 
            hogware files and sub-directories, try this:

                DESTROY.bat
                     echo off
                     Hacker clear;sound siren
                     Hacker ask Are you SURE about this ?  { y / n }
                     if errorlevel 2 goto exit
                     if errorlevel 1 goto doit
                     goto exit
                :doit
                     cd \misc\junk\garbage\hogware
                     echo y | del . >nul
                :deeper
                     for %%a in (*.*) do echo y | del %%a>nul
                     for %%a in (*.*) do rd %%a
                     for %%a in (*.*) do cd %%a
                     for %%a in (*.*) do echo y | del %%a>nul
                     for %%a in (*.*) do rd %%a
                     for %%a in (*.*) do cd %%a
                     cd ..
                     Hacker what depth
                     if errorlevel 5 goto deeper
                :exit
                     cd \batch
                     cls
                     type menu.txt

                -------------------------------------------------------


                V.   You can use IS VOLUME in your own backup and 
            restore routines to choose among various routines based upon 
            the volume id of the diskettes mounted.
























             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 10
             HACKER ver 1.2 documentation                    page 11
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                       I N D E X

               Add lfs,   . . . .  3           Is,   . . . . . .   4   
               Ask,   . . . . . .  2             Dir,   . . . . .  4   
                                                 Volume,   . . .   4   
               Beep,   . . . . .   8                                   
               Bitwise boolean,    4           Label,   . . . . .  4   
               Blank line echo,    8           License,   . . . .  T   
               Boot,   . . . . .   2           Line feed,   . . .  9   
                 Cold Boot,   . .  2                                   
                 Hardware Reset,   2           Message,   . . . .  4   
                 Software Reset,   2           Minute,   . . . .   7   
                 Warm Boot,   . .  2           Mode,   . . . . .   7   
               Break,   . . . . .  2           Month,   . . . . .  7   
                                                                       
               Carriage return,    9           Note,   . . . . .   4   
               Clear,   . . . . .  2           Object,   . . . .   1   
               Continue,   . . .   6           Options,   . . . .  1   
               Cr,   . . . . . .   3           Parameters,   . .   1   
               Current directory,  4, 7                                
               Cursor,   . . . .   3, 5        Reset                   
                                                 Hardware Reset,   2   
               Date,   . . . . .   7             Software Reset,   2   
               Day,   . . . . . .  7           Re-boot,   . . . .  2   
               Deleted,   . . . .  5                                   
               Depth,   . . . . .  7           Scan lines,   . .   3, 5
               Dir,   . . . . . .  4           Seconds,   . . . .  6   
               Directory,   . . .  4           Semicolons,   . .   1   
               Drive,   . . . . .  4, 7        Show,   . . . . .   5   
                                                 Cursor,   . . .   5   
               Environment,   . .  8             Hidden,   . . .   5   
               ErrorLevel,   . .   1           Soften Cr,   . . .  3   
               Escape,   . . . .   2           Software reset,     2   
                                               Sound,   . . . . .  6   
               Files,   . . . . .  3                                   
               Fix,   . . . . . .  3           Time,   . . . . .   7   
                 Cursor,   . . .   3           Volume,   . . . .   4   
                 File,   . . . .   3                                   
               Form feed,   . . .  8           Wait,   . . . . .   6   
                                               Week,   . . . . .   7   
               Hardware reset,     2           What,   . . . . .   7   
               Help,   . . . . .   1, 3          Date,   . . . .   7   
               Help screens,   .   3             Day,   . . . . .  7   
               Hidden,   . . . .   5             Depth,   . . . .  7   
               Hour,   . . . . .   7             Drive,   . . . .  7   
                                                 Mode,   . . . .   7   
                                                 Time,   . . . .   7   
                                               Wild-cards,   . .   3, 4















             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 11
             HACKER ver 1.2 documentation                    page 12
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved















                           A C K N O W L E D G M E N T
            
                The author wishes to thank Paul E. Begley of the 
            Philadelphia Area Computer Society, and Paul J. Bodin of 
            Staten Island, NY, without whose efforts testing HACKER, it 
            would be much less satisfactory.  Any bugs, glitches and 
            abominations remaining are solely the responsibility of the 
            author.





















                              R E V I S I O N   H I S T O R Y


                1.0  August 1, 1989    Initial Release


                1.1  October 5, 1989   Fixes bugs relating to EGA / VGA 
                                          and 386 installation.
                                       Sounds revised and added.
                                       Internal refinements.

                1.2  December 15, 1989 Fixes bugs relating to display,
                                          and device spefication for Is
                                          and Show; Depth fixed.
                                       Sound returns error level.
                                       Clear can go downward.




             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 12
             HACKER ver 1.2 documentation                    page 13
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                                    B U G   R E P O R T


                Your registration number: _____________________________


                Report of:  Bug ____    Glitch ____   Design flaw _____


                Dos version: ______._______    MS-Dos ____  PC-Dos ____


                CPU: 8088 ____  8086 ____  186 ____  286 ____  386 ____


                Speed: _____________ mHz      Memory:  ______________ Kb


                PC make & model: ______________________________________


                BIOS name & date: _____________________  ____/____/____


                TSRs installed: ________________________________________


                ________________________________________________________


                ________________________________________________________



                Bug description: _______________________________________


                ________________________________________________________


                ________________________________________________________


                ________________________________________________________


                ________________________________________________________


                ________________________________________________________


                ________________________________________________________

                         Please continue, if appropriate.








             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 13
             HACKER ver 1.2 documentation                    page 14
             Copyright (C) 1989 by Ted Wray      
             All Rights Reserved

                             R E G I S T R A T I O N   F O R M



                 Name ______________________________________________


                 Address ___________________________________________


                ____________________________________________________



                City _______________________________________________



                State ______________   Zip _________________________



                Country ____________________________________________




                From what BBS, if any, did you obtain HACKER ?

                     BBS name          City          Phone #


                ____________________________________(    )____-_________


                ____________________________________(    )____-_________


                ____________________________________(    )____-_________


                COMMENTS:


                ____________________________________________________


                ____________________________________________________


                ____________________________________________________


                         Please continue, if appropriate.









             HACKER ver 1.2 documentation                
             Copyright (C) 1989 by Ted Wray      
                        All Rights Reserved                  page 14


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1902

     Volume in drive A has no label
     Directory of A:\

    FILE1902 TXT      2221   1-04-90   1:33p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   5:52p
    HACKER   COM     21748   1-02-80
    HACKER   DOC     40160   1-02-80
    HACKER   INF      2385  12-13-89  12:56p
    HACKER   SDA       894  12-13-89  12:57p
    HACKROUN BAT      4699   1-02-80
    READ     ME       2291   1-02-80
            9 file(s)      74976 bytes
                           82432 bytes free
