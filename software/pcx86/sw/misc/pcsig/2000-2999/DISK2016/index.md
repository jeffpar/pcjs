---
layout: page
title: "PC-SIG Diskette Library (Disk #2016)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2016/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2016"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINANCE ANALYZER"

    This menu-driven program does loan analysis, time deposit analysis,
    annuity analysis, and interest rate conversion (APR, yield, add-on).  If
    you are comparing different options, and want to get the best return on
    your money, FINANCE ANALYZER will do the number crunching for you.  Get
    all the information you need to make a sound decision.
    
    FINANCE ANALYZER features on-line context-sensitive help that can be
    customized by the user.  Great if you want to offer special help files
    unique to your business.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FA.DOC

{% raw %}
```
                       FINANCE ANALYZER       (V 2.0)

               Copyright 1987 - Constantine Roussos


     You may use and distribute this program free of charge.  You may
not sell it, other than to charge a nominal fee for disk
preparation.  If, however, you find that this program is of some use
to you, a contribution of $25 will be greatly appreciated and give me
some incentive to produce newer and better versions.  Your contribution
is, of course, entirely voluntary.  The only direct tangible benefit to
becoming a "registered" user is that I will attempt to answer your 
correspondence in a timely manner and do my best to resolve difficulties
you may be having with your application.

       The producers and distributors of this software allow you to use
it with the understanding that we will be held blameless for any damages,
either direct or consequential which result from the use of this software. 
I may be contacted at the following address.

                    Constantine Roussos
                    Rt.1, Box 186
                    Arrington, Va. 22922



 1.  Setting up FINANCE ANALYZER

       No installation procedures are required to run FINANCE ANALYZER.

       Simply enter the command  FA  at the DOS prompt.

       However, you will probably want to at least make a backup copy of
       your original disk.

       FINANCE ANALYZER may be customized for your particular installation
       by following the directions in 3. below.


 2.  FINANCE ANALYZER files

       FINANCE ANALYZER consists of 7 files.

           i. FA.EXE
               This is the program which you actually run.  It is the only
               file required to run FINANCE ANALYZER.

          ii. FAPARMS.DAT
               This is a parameter file.  You may edit it with any text
               editor capable of producing a standard ASCII file.  This
               file controls parameters such as the colors used on a CGA
               system.  More information on the format of this file is
               given in the section on parameter customization.

         iii. FAPARMS.MNO and FAPARMS.CGA
               These are suggested parameter files for monochrome and CGA
               (color) adapters respectively.  So, for example, if you have
               a monochrome system and wish to activate FAPARMS.MNO simply
               execute the DOS command
                               COPY FAPARMS.MNO FAPARMS.DAT

          iv. FA.HLP
               FINANCE ANALYZER has on-line, context sensitive help.
               FA.HLP is the help text file.  It is a standard ASCII file
               in that one may type it, print it and even edit it to further
               customize the system.  However, one must be aware that FINANCE
               ANALYZER is expecting this file to conform to a certain (albeit
               simple) format, so unexpected results may occur if one edits the
               file without regard to the help file format.

           v. FA.DOC
               This is the file you are now reading.

          vi. READ.ME
               This file instructs you to type the files FA.DOC and FA.HLP to
               learn more about FINANCE ANALYZER.


 3.  Customizing FINANCE ANALYZER

       FINANCE ANALYZER may be customized in three ways.

       First, one may control how the program highlights data, error 
       messages, etc.

       Second, one may modify the text of the help file.

       Third, one may enable the parameter and help files to reside in a
       single directory and yet be accessed properly no matter what the
       user's default directory is when he/she runs the program.

         i. Modifying FAPARMS.DAT
               The parameter file is called FAPARMS.DAT.  This file controls
               several system parameters.  It is a standard ASCII file so it
               may be modified through the use of any text editor capable of
               reading and writing ASCII files.  The parameters are broken
               into groups - one group per line. The items in each line are
               separated by commas.  The format of the file is given below,
               line by line.

               FIRST LINE
               Normal foreground color, Normal background color, Normal border
               color.

               SECOND LINE
               Highlight foreground color, Highlight background color.

               THIRD LINE
               Alternate foreground color, Alternate background color,
               Alternate border color.

               FOURTH LINE
               Attention foreground color, Attention background color.

               FIFTH LINE
               Business name, Business address line 1, Business address line 2,
               City, State, Zip, Year


        ii. Modifying FA.HLP

               FA.HLP contains the on-line context-sensitive help text.  It
               too is a standard ASCII file in that it may be typed, printed,
               and edited.  FINANCE ANALYZER expects the file to conform to
               the following format.

               Each help topic (title) is on a line by itself and the first
               character on that line is an @.  The @ line is followed by 
               the help text for that topic.  Help topic text blocks are
               terminated by the next help topic @ line or by the end of the
               help file.  You may modify any existing help text blocks and
               you may add your own new topics and corresponding help text 
               blocks.


       iii. Accessing FINANCE ANALYZER from any directory.

               One may, of course, copy all the FA files into a single 
               directory and change directory (CD) to that directory
               when one wishes to perform financial analyses.  However,
               it is more convenient to be able to execute the program
               from any directory.  This, of course, is easily done by
               simply putting the executeable image file (FA.EXE) in a
               directory which is in the PATH.  (If you are not familiar
               with setting up a path see any good DOS manual or book.)
               Unfortunately, the program will not automatically find
               its help and parameter files if you are not in the same
               directory in which they are located.  You can tell FA
               where to look for its help and parameter files by setting
               an environment variable with the name PARMDIR to the name
               of the directory where the files reside.  For example, if
               you put the help and parameter files in a first-level
               subdirectory called PARMS on your hard drive, then execute
               the command
                               SET PARMDIR=C:\PARMS\
               (Note the final backslash - it is required.  Also note that
                there are no spaces around the = sign.)
               You will probably want to include this command in your
               AUTOEXEC.BAT file so that it will be executed automatically
               every time you "boot" your system.
```
{% endraw %}

## FILE2016.TXT

{% raw %}
```
Disk No: 2016                                                           
Disk Title: Finance Analyzer                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: Finance Analyzer                                         
Author Version: 2.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
This menu-driven program does loan analysis, time deposit analysis,     
annuity analysis, and interest rate conversion (APR, yield, add-on).  If
you are comparing different options, and want to get the best return on 
your money, FINANCE ANALYZER will do the number crunching for you.  Get 
all the information you need to make a sound decision.                  
                                                                        
FINANCE ANALYZER features on-line context-sensitive help that can be    
customized by the user.  Great if you want to offer special help files  
unique to your business.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2016

     Volume in drive A has no label
     Directory of A:\

    FA       DOC      7347   8-12-89  12:48p
    FA       EXE    143186   8-01-89   5:39p
    FA       HLP      6379   5-16-88   6:31p
    FAPARMS  CGA        87   2-01-88   9:55p
    FAPARMS  DAT        92   8-01-89   5:51p
    FAPARMS  MNO        87   1-01-80  12:28a
    FILE2016 TXT      1777   1-04-90  11:57a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:47a
    READ     ME        136   5-16-88   6:16p
           10 file(s)     159669 bytes
                          155648 bytes free
