---
layout: page
title: "PC-SIG Diskette Library (Disk #2027)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2027/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2027"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LASER GRAPH  1 OF 2 (ALSO 2308)"

    LASER GRAPH is a group of programs, useful to engineers, for producing
    high resolution data plots using an HP LaserJet II printer.  The types
    of plots LASER GRAPH is capable of producing are: single line,
    multiple line, three dimensional surface plots, X-Y plots, and scatter
    diagrams.  The plots may be saved to a disk file; a program is
    included to review previously generated plots. It can print with a
    resolution of up to 2500 X 3000 dots (pixels), depending upon your
    printer.  LaserJet soft fonts are supported, providing a high level of
    flexibility in font choice.
    
    All of the elements of a really good data plotting system are here. It
    requires patience and diligence to become familiar with how it works but
    LASER GRAPH does produce stunning results on your laser printer.  All
    plot commands may be entered on the DOS command line. This allows a
    string of plot commands to be put in a batch file for execution without
    requiring constant user intervention.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2027.TXT

{% raw %}
```
Disk No: 2027                                                           
Disk Title: Laser Graph  1 of 2 (also 2308)                             
PC-SIG Version: S2                                                      
                                                                        
Program Title: Laser Graph                                              
Author Version: 3.4                                                     
Author Registration: $49.00                                             
Special Requirements: 512K RAM, CGA, EGA, or VGA, hard drive, and DOS 3.
                                                                        
LASER GRAPH is a group of programs, useful to engineers, for producing  
high resolution data plots using an HP LaserJet II printer.  The types  
of plots LASER GRAPH is capable of producing are: single line, multiple 
line, three dimensional perspective, X-Y plots, and scatter diagrams.  I
can print with a resolution of up to 2000 X 3000 dots (pixels),         
depending on your printers memory.                                      
                                                                        
All of the elements of a really good data plotting system are here.  It 
does require patience and diligence to become familiar with how it works
but LASER GRAPH does produce stunning results on your laser printer.    
All plot commands may be entered on the DOS command line.  This allows a
string of plot commands to be put in a batch file for execution without 
requiring constant user intervention.                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LASER_0.DOC

{% raw %}
```
                LASER GRAPHICS PROGRAM DOCUMENTATION FILE

This graphics package provides an easy means of generating data plots.  To
use this software, copy all of the files into a sub-directory on your hard
disk.  It is best to create a separate subdirectory for these programs.
Unpack the files if they are in .ZIP form (you will need something like
PKUNZIP to do this.)  Then type INSTALL and answer all questions.  The
programs will then be installed and ready to use.  Type in PLOTHELP and
read the OVERVIEW topic, and then run the demo program by typing in DEMO.
Then run some of the example plots as directed in PLOTHELP topic EXAMPLES.
Beyond this brief introduction, read the printed documentation and the help
files.

Function:             To generate plots of various types.

System requirements:  PC or compatible,
                      Graphics screen:  Color Graphics Adapter
                                        Enhanced Graphics Adapter
                                        Hercules Monochrome Graphics
                                        IBM PS/2 VGA
                      Memory:           512 K or more
                      Printer:          Epson 8 or 24 pin
                                        C. Itoh Prowriter
                                        HP Laserjet
                      Dos:              Version 3.0 or higher
                      Math Coprocessor: Not necessary, but used if present
                      Hard disk:        Required

Plot types:           Single line plots
                      Multiple line plots
                      Three dimensional perspective plots
                      X-Y plots
                      Polar Plots
                      Scatter diagrams
                      Vector diagrams

Output:               High resolution plot generation (up to approximately
                         2400 by 3000 pixels)
                      Low resolution screen dumps
                      Save screen plots to disk file
                      Plot disk files compatible with some word processors

Additional Features:  Gallery program to review previously generated plots
                      Hidden line removal on three dimensional plots
                      Optional axis auto-scaling
                      Optional user-defined axis numbering and tic marks
                      Automatic conversion to log scale
                      Automatic error bars
                      Split screens (multiple plots per page)
                      Disk paging if bit-map is too large for RAM
                      Support for Hewlett-Packard Laserjet format soft-fonts
                      Can be used as graphics driver

Advantages:           The programs are simple enough to plot a data file
                      with a single command, yet powerful enough to generate
                      extremely high-quality plots on a laser printer.

                      Virtually all plot characteristics may be user defined,
                      but default settings are included so that the user does
                      not need to bother with unnecessary details.

                      All plot commands may be entered on the DOS command line.
                      This allows a string of plot commands to be put in a
                      batch file for execution without requiring constant user
                      intervention.

Disadvanteges:        Slow operation for some plots:  For high-resolution
                      plots, the number of pixels that must be handled
                      can be tremendous.  For example, a 2000 by 2500 pixel
                      laser printer plot will have five million pixels which
                      must be accounted for.  On a basic 4.77 Mhz 8088
                      computer, handling this many pixels can take an
                      annoyingly long time.  Even for a low-resolution plot,
                      a large data file and slow disk drive will slow things
                      down.

                      Relatively steep "learning curve":  the software was
                      written to be very easy to use.  This was accomplished
                      at the expense of making it less easy to learn.  It is
                      hoped that the help files and demo will ease this
                      problem.

Liability:            The software is provided as is; the authors assume
                      no liability for any problems or expenses arising
                      from its use or misuse.

Documentation:        On-line help files
                      Printed documentation will be sent to registered users

Licensing:            Any user, registered or not, may use and distribute this
                      software at will, provided:

                         1) the software is not modified,
                         2) no part of the software is sold for a charge
                            exceeding a nominal copying charge.

                      When copying the software, please distribute only the
                      original archived files (LASER*.*).  This ensures that
                      all users will obtain a full working copy.

Registration:         If you find this software to be useful, a $49
                      contribution will be appreciated.  Users contributing
                      this amount will receive the most recent version of
                      Laser Graphics, and printed documentation (and an
                      update of the documentation when it becomes available).


                      Registration may be mailed to:

                      J. M. Baden
                      1500 Mill Creek Court
                      Marietta GA 30060


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2027

     Volume in drive A has no label
     Directory of A:\

    LASER_0  DOC      5881   5-01-90   7:41p
    LASER_1  ZIP    166185   5-02-90   6:34p
    LASER_2  ZIP    173853   5-02-90   1:25a
    GO       BAT        38   1-01-80   1:37a
    GO       BAK       652   1-01-80   8:36a
    FILE2027 TXT      2073   7-13-90  11:37p
    GO       TXT       650   7-17-90  11:03a
            7 file(s)     349332 bytes
                            9216 bytes free
