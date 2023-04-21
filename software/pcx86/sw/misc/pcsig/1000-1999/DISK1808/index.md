---
layout: page
title: "PC-SIG Diskette Library (Disk #1808)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1808/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1808"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COLORSET"

    This program makes it easy for programmers to experiment with various
    background/foreground color combinations on-screen during the
    development of programs.  This terminate-and-stay-resident (TSR) program
    is set up for programmers who work in Clipper or dBase.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLORSET.DOC

{% raw %}
```



















                  ColorSet (CLIPPER (r) Programmer's Utility)



                            Copyright (c) 1989
                             by Carter Nipper

                           Nipper MicroServices
                              P. O. Box 1154
                          Milledgeville, Ga. 31061

                            All Rights Reserved




                              Legal Stuff

     This program is copyrighted material and is the property of the author.
You are authorized to use and distribute this program only under the
following conditions :

        1.  You are encouraged to share this program with
            friends, relatives, co-workers, User Group
            members, or anyone else, provided that no fees
            are charged for such distribution and that the
            program is distributed in unmodified form and
            with all documentation and copyright information
            intact.

        2.  You are authorized to use this program for a
            period not to exceed 30 days from the date of
            receipt, in order to evaluate its usefulness.
            At the end of that period you are required to
            either register your copy of this program or to
            dispose of it.  Any violation of this provision
            is a violation of U.S. Copyright Law.

        3.  This program carries NO WARRANTIES of any kind.
            I am not responsible for any damages, incidental
            or consequential, incurred through the use of
            this program.

        4.  Use of this program implies agreement with the
            foregoing conditions.



        Clipper is a registered trademark of Nantucket Corp.
        Turbo Pascal is a registered trademark of Borland International, Inc.
        SideKick is a registered trademarks of Borland International, Inc.
        MS-DOS is a registered trademark of MicroSoft Corp.
        DBase is a registered trademark of Ashton-Tate, Inc.


Whew!  Now that all that is out of the way, let's get on with the good stuff.


HARWARE REQUIREMENTS

     IBM PC, XT, or AT or compatible with Color graphics card and monitor.
DOS 2.0 or higher.  Recommended memory is 512K (ColorSet Ver. 1.0 takes up
approximately 33.3K).  This program will run on Hercules-compatible graphics
cards and monitors, but, after all, the whole point is to be able to see the
colors!






INTRODUCTION

     ColorSet is a Terminate-and-Stay-Resident (TSR) program intended for
the use of programmers who do a lot work in Clipper or DBase.  the purpose
of this program is to make it easy for you to experiment with various
color combinations in order to see the effects of the various background/
foreground color combinations on-screen during the development of your
programs.  The development of this program was suggested and encouraged by
Bill Boyd of Atlanta Microware Products, Inc. to whom I am most grateful
and indebted.

     ColorSet was written in Turbo Pascal.  Because of various factors,
it won't work if SideKick is installed before it is (actually, I don't
know this for sure, since I don't own a copy of SideKick myself, but
better not to take chances!).  Also, be wary of using the program in
conjunction with any other TSRs that may make use of the hot-key (Alt-']')
or the Unload key (^D).  I have tested this program with as many comb-
inations of resident programs and text processors as I have been able to
gain access to, but your particular arrangement will undoubtedly be unique.
If you have problems with a particular set-up, please let me know, and I'll
do what I can to fix them.

     I sure hope that you will consider registering your copy of this
program if you find it useful.  I am doing this on the side, and your
registration fee will make it possible for me to develop this program
further and also to possibly make other tools available to you in the
future.

     Registration is $20.00.  For that amount, you will receive :

        1.  The latest version of the program.
            (As of July 23, 1989, this is it!)

        2.  All the support you may need.
            (I work during the day.  Please leave a message
              if you call.  Write if it's not urgent.)

        3.  First upgrade at a nominal cost.
            (Probably around $5.00, depending on my costs.  This is
               not a guaranteed price !)

        4.  My everlasting gratitiude !


FILES INCLUDED ON THIS DISK

     COLORSET.EXE  (Main program file)
     COLORSET.DOC  (This Documentation)
     COLORSET.SCN  (File containing ColorSet's Screen Display)
     REGISTER      (Registration form)
     EVALUATE      (Product Evaluation)
     BUG     .RPT  (Bug Report)




        USING COLORSET

     To load ColorSet, just type 'Colorset' and press <Enter>.  The program
will then load itself and remain resident.  Files required for the program to
load are :

        COLORSET.EXE  (Executable program file)
        COLORSET.SCN  (Screen image file required to draw display)

If the program is not able to successfully initialize itself, it will clear
the display and display an error message.  DO NOT ATTEMPT TO LOAD A RAM-
RESIDENT PROGRAM FROM ANY SORT OF DOS SHELL !  If the program refuses to load
at first, try unloading any RAM-Resident programs that you may have installed
any re-load them in a different order.  Also, see if any of the programs that
are currently installed make use of ColorSet's Hot Key (Alt-']') or it's
Disable Key (Ctrl-'D').

     Using ColorSet is extremely easy.  The Up- and Down-Arrow keys ( )
navigate in the 'Foreground' column.  These same keys with the Shift key
depressed move the selector in the 'Background' column.  PageUp and
PageDown allow you to choose whether the colors that you are choosing
are for the colors for the main display, the colors used for the 'Enhanced'
colors (used for menu choices and selected GETS), or the colors to be used
for Unselected GETS.  The Clipper codes for the currently selected color
combinations is displayed on the lower left of the display.  Press the
Escape key to exit and remain resident or Ctrl-D to exit and terminate.
A failure to unload usually indicates that there is a RAM-Resident utility
loaded after ColorSet that will need to be unloaded before ColorSet can
safely unload itself.

CAUTION : Do not attempt to unload ColorSet while a menu program has control
  of the video and keyboard interrupts !  This can cause major problems
  with DOS's memory management and will probably hang your system.  I am
  attempting to address this problem; any suggestions will be greatly
  appreciated.

     That's all there is to it !  Please be aware that this is Version 1.0
of this program.  This indicates that there may be some latent bugs that
have not yet manifested themselves.  Please use the Bug Report Form included
(print the file called BUG.RPT) to inform me of any problems that you
encounter.  The more detail that you can provide, the better I will be able
to isolate and fix the problem.  Your patience will be appreciated.  If you
have a version of ColorSet that has a bug, I will make every effort to correct
the problem and get you a working copy as soon as I am able.  Also, please
take the time to complete and mail the evaluation form (in file EVALUATE),
even if you do not choose to register.  This will help me to further develop
this product.  If you have any ideas about other utilities that might be
useful, please let me know.

```
{% endraw %}

## FILE1808.TXT

{% raw %}
```
Disk No: 1808                                                           
Disk Title: ColorSet                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: ColorSet                                                 
Author Version: 1.0                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
This program makes it easy for programmers to experiment with various   
background/ foreground color combinations on-screen during the          
development of programs.  This Terminate-and-Stay-Resident (TSR) program
is set up for programmers who work in Clipper or DBase.  Note that this 
program does take up 33K of overhead memory.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
Files included :

        COLORSET.EXE - Main program file.
        COLORSET.DOC - Documentation.
        COLORSET.SCN - Contains Screen used by Colorset.
        REGISTER     - Registration form.
        EVALUATE     - Evaluation form.
        BUG     .RPT - Bug report form
        FILES   .TXT - This file.



Program description :

        ColorSet is a RAM-Resident utility for use by CLIPPER and/or
dBase III+ programmers.  ColorSet lets the programmer review various color
combinations and gives the programmer the codes necessary for generating
those colors within the program under development.  Registration fee is $20.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1808

     Volume in drive A has no label
     Directory of A:\

    BUG      BAK      2278   7-24-89   7:41p
    BUG      RPT      2278   7-26-89   9:11a
    COLORSET DOC      7704   7-25-89   8:52p
    COLORSET EXE     24144   7-25-89   8:40p
    COLORSET SCN      1048   7-21-89   4:15p
    EVALUATE          3954   7-26-89   9:11a
    EVALUATE BAK      3954   7-24-89   7:41p
    FILE1808 TXT      1481  12-20-89   4:21p
    FILES    TXT       650   7-24-89  10:09a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   8:01a
    REGISTER          1263   7-26-89   9:11a
    REGISTER BAK      1263   7-25-89   8:56p
           13 file(s)      50595 bytes
                          105472 bytes free
