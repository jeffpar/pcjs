---
layout: page
title: "PC-SIG Diskette Library (Disk #2654)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2654/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2654"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2654.TXT

{% raw %}
```
Disk No: 2654                                                           
Disk Title: LQMatrix                                                    
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: LQMatrix                                                 
Author Version: 4.3                                                     
Author Registration: $19.50 ($24.00 overseas)                           
Special Requirements: Epson LQ 24-pin dot-matrix printer or compatible. 
                                                                        
LQMATRIX is an editor for user-made characters known as "soft fonts" for
Epson LQ 24-pin dot matrix printers and compatibles.  It comes with the 
editor, a downloader, LQ.EXE, and over 40 complete fonts including a    
wide variety of common fonts, serif, script, etc., as well as old       
English, Gothic, two Cyrillic fonts, and classical Greek.               
                                                                        
LQMATRIX and fonts are designed to use the text mode for printing       
user-made fonts.  In contrast to graphics, this mode is as fast as using
the default letters and thus is useful for printing long texts. In the  
text mode, the printers accept a `soft' font into memory and use it     
rather than the built-in `hard' font. In fact, when so instructed, it   
can switch back and forth between the two.  Thus, if you have written a 
paper in English but wish to cite examples in the Greek alphabet, you   
can `download' (send to the printer) the Greek font (greek.lqn on this  
package) and use it when necessary.                                     
                                                                        
For those who wish to use the various ready-made fonts for different    
purposes (or just for variety), all you need is the LQ.EXE program.     
With it, any of the premade fonts can be downloaded to the printer.  For
those users who wish to create their own fonts, modify those already    
supplied, or create a small number of special characters for a specific 
task, LQMATRIX.EXE provides just the environment you need.  It's an     
easy-to-use matrix program with many features that permit the user to   
create characters, store them in a file, and download them to the Epson 
LQ family of 24-dot matrix printers.  With it, you can design Draft, NLQ
(10 cpi), and proportional characters.                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.DOC

{% raw %}
```
                    INSTALLATION FOR LQMATRIX
                      [Jimmy Paris Software]

This batch file will 'unpack' all of the fonts that go with LQMATRIX, 
the best font designer available for 24 pin dot matrix printers. The
self-extracting files can be run separately. To direct them to a different
drive use the parameter: /eX:, where X is the desired drive.

If you are unpacking onto 5 inch floppies you will need two of them.
The first will receive the fonts in LQFONT.EXE and a copy of
LQ.EXE, the downloader. The second will receive the remaining fonts and
another copy of LQ.EXE.  If unpacking to a hard disk a \LQMATRIX
directory will be created.

LQMATRIX is a Shareware program and frequent users are expected to
register. It is copyrighted 1985-91 by J. David Sapir, 906 Old Farm Rd. 
Charlottesville, VA. 22903, USA (804) 295-5496. 

[The self-extracting archive program (LHarc) is copyrighted 1989 by Mr.
Haruyasu Yoshizaki.]

You can terminate the unpacking by hitting ^C (control C).


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2654

     Volume in drive A has no label
     Directory of A:\

    READ     ME        694   3-19-91   4:03p
    GO       BAT      2012   3-29-91   1:20p
    LQ       EXE     25376   3-26-91   6:05p
    LQCRC    EXE     30484   3-26-91  10:43a
    LQRNW    EXE     31285   2-11-91  10:20a
    LQREH    EXE     19694   2-11-91  10:04a
    LQFONT   EXE     61406   3-26-91  10:41a
    GO       DOC      1034   3-26-91  10:53a
    GETYN    COM       161  11-11-88   6:25p
    LQMTX43  EXE    154050   3-29-91  12:35p
    FILE2654 TXT      3035   6-26-91   4:00p
           11 file(s)     329231 bytes
                           28672 bytes free
