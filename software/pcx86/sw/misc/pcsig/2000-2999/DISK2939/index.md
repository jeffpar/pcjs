---
layout: page
title: "PC-SIG Diskette Library (Disk #2939)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2939/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2939"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2939.TXT

{% raw %}
```
Disk No: 2939
Disk Title: Back & Forth Professional 5 of 5
PC-SIG Version: S2.00

Program Title: Back & Forth Professional
Author Version: 2.00
Author Registration: $69.95
Special Requirements: 512k memory, DOS 3.0+, and EMS, XMS, RAM disk or
hard disk. Refer to manual (BFP-200.DOC) for further requirements.

BACK & FORTH PROFESSIONAL is a versatile program management tool that
gives you the power to load up to 20 programs at once. Now you can
switch between your favorite word processor, database, graphics program,
and TSR utilities at will without having to exit one to open and use
another.  Its features include:

~ Delivers a flexible task management environment where up to 20
  programs may be open in memory, with each provided as much memory as
  needed.

~ Occupies only 23-40k of memory, less than 1k if loaded high.

~ Offers an easy-to-use, colorful, & customizable environment.

~ Supports CGA, EGA, Hercules, VGA, SVGA, and 1024x768 video modes.

~ Enables the use of a Microsoft-compatible mouse.

~ Uses expanded memory (EMS), extended memory, RAM disks, hard disks,
  and conventional memory to store swapped programs.

~ Permits you to select the hot keys used to pop up BACK & FORTH, other
  B&F commands, and all defined programs.

~ Accepts the definition of 50 programs for use within BACK & FORTH.

~ Provides an alternative menu list for use in defining menus and
  programs for use within BACK & FORTH.

~ Runs a selected list of programs automatically when first loaded.

~ Provides a set of desktop accessories that include an address book,
  time and event scheduler, graphics screen capture, editor, tape and
  RPN calculator.

~ Signals when specific appointments occur. Tasks can also be set to run
  at scheduled times using the Overtime! appointment handler.

~ Lets you cut text from a running program and either place it in a
  folder for later pasting, print it, or write it to a separate file.

~ Allows you to edit the contents of the cut buffer and save text.

~ Dials a number from the screen if a modem is available.

~ Assigns a sequence of keystrokes to a single macro key for  use in
  simplifying command execution within a program or DOS.

~ Replaces special abbreviations with commonly-used words, names, and
  phrases to save typing time.

~ Permits color customization where you can choose the colors that suits
  your tastes rather than someone else's. Supports all video modes
  provided by UltraVision.

~ Switches the [Ctrl] and [Caps Lock] keys.

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
║        <<<<  PC-SIG Disk #2939 BACK & FORTH PROFESSIONAL #5  >>>>       ║
║                  (also #2641, #2642, #2937, and #2938)                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive and copy all files to it.      ║
║ To create a subdirectory, go to the drive you want and type:            ║
║       MD [subdirectory name]                                            ║
║ To copy all the files to the hard drive, type:                          ║
║       COPY [source drive]:*.* [destination drive]:\subdirectory name    ║
║                                                                         ║
║ To uncompress the files, PKUNZIP must be in your path or directory.     ║
║ Go to your subdirectory and type:  PKUNZIP BNFP200A  (press Enter)      ║
║                                    PKUNZIP BNFP200B  (press Enter)      ║
║                                    PKUNZIP BNFP200C  (press Enter)      ║
║                                    PKUNZIP BNFP200D  (press Enter)      ║
║                                    PKUNZIP BNFP200E  (press Enter)      ║
║                                                                         ║
║ To print the program manual, type:  COPY BFP-200.DOC PRN  (press Enter) ║
║                                                                         ║
║ For quick start, type:  BFPSETUP  (press Enter)                         ║
║ Then type:  BNF  (press Enter)                                          ║
║                                                                         ║
║                                           Copyright 1992, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2939

     Volume in drive A has no label
     Directory of A:\

    BNFP200E ZIP    125699   1-29-92   8:33a
    GO       BAT        29   1-31-92   1:17a
    GO       TXT      1848   2-06-92  11:19a
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE2939 TXT      2678   2-06-92  12:21p
            5 file(s)     153790 bytes
                            5120 bytes free
