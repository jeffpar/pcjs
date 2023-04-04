---
layout: page
title: "PC-SIG Library Disk #427"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0427/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0427"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #9"

    This is a fascinating and useful assortment of TURBO Pascal routines
    and procedures.  There are I/O routines for the joystick, PC Mouse, and
    asynchronous communications.  Several routines provide menu
    capabilities, with stacked windows available.  TURBORUN allows the user
    to issue DOS commands from within his TURBO Pascal program.  The low-
    resolution graphics of PIBLORES is ideal for the color graphics of a
    user's game program.  Timer interrupts, Turtle graphics, "help
    facility" for Pascal, and listings of source code and cross-reference
    on the screen or the printer are just a few of these helpful programs.
    
    System Requirements: 128K, two disk drives, game port, serial
    port, monochrome or color graphics, Turbo Pascal
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run a COM program, just type its name and press
    <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    MENUX    PAS  Generate & operate a user-defined menu
    JOYSTICK PAS  Joystick control procedure & demo
    SERTST   PAS  Demo/test of SERIAL.PAS
    SERIAL   PAS  Routines for user to access COM1 & COM2
    READWKS  PAS  Print Lotus .WKS Worksheet file data
    READENV  INC  Functions to search DOS environment area
    PLIST    COM  Output Pascal source & cross-ref to printer or screen
    PIBDODOS PAS  Pascal routine to teach TURBORUN.COM
    PIBDODOS DOC  Description of TURBORUN.COM
    MOUSE    PAS  PC Mouse interface procedures
    THELP    DOC  Description of THELP.COM
    THELP    COM  TURBO Pascal resident "help facility"
    TRBOEXT  PAS  Retrieve command line parameters
    TPRO3    PAS  Draw line on screen at 13,000 pixels per second
    TPRO2    PAS  Get record fix from Borland's Turbo Toolbox
    TPRO     PAS  Very fast screen output;  screen handling
    TURBLE   TXT  Description of TURBLE.LBR
    TURBLE   LBR  Turtle graphics in LBR form ... for hard disk
    PIBMENUS PAS  Menu routines, similar to Lotus;  stacked windows
    PIBASYNC PAS  Asynchronous I/O for MS-DOS
    PIBLORES PAS  Low-resolution (160x100x16 colors) graphics
    TIMER    PAS  Timer interrupt routine for IBM PC DOS 2.0
    POWERS   PAS  Computes an integer or real power of a real number
    XREFPAS  PAS  Cross-reference generator
    TURBORUN COM  Allows DOS commands from TURBO Pascal programs
    TURBORUN ASM  Assembler source code for TURBORUN.COM
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0427

     Volume in drive A has no label
     Directory of A:\

    FILES427 TXT      2330  11-05-85   2:50p
    JOYSTICK PAS      4096   5-06-85   8:05a
    MENUX    PAS      6400   5-14-85   8:53a
    MOUSE    PAS      2944   5-09-85   8:41a
    PIBASYNC PAS     50304   6-04-85  10:53a
    PIBDODOS DOC      3454   4-15-85   5:56p
    PIBDODOS PAS     11720   4-15-85   5:54p
    PIBLORES PAS     23856   6-01-85   8:39a
    PIBMENUS PAS     51200   3-20-85   9:31a
    PLIST    COM     23638   4-03-85   8:00p
    POWERS   PAS      4224   5-28-85   9:20a
    READENV  INC      9728   4-15-85   8:40a
    READWKS  PAS      6400   5-13-85  10:11a
    SERIAL   PAS      5376   5-17-85  11:20p
    SERTST   PAS      1408   5-17-85  11:20p
    THELP    COM     30720   1-17-85  10:04a
    THELP    DOC       896   1-17-85  10:04a
    TIMER    PAS      5376   5-28-85   9:21a
    TPRO     PAS     19712   4-15-85   8:36a
    TPRO2    PAS      3072   4-15-85   8:37a
    TPRO3    PAS      3712   4-15-85   8:38a
    TRBOEXT  PAS     12544   5-07-85   9:29a
    TURBLE   LBR     34176   5-17-85   8:50a
    TURBLE   TXT       382   5-17-85  11:25p
    TURBORUN ASM     19465   4-15-85   5:54p
    TURBORUN COM       512   4-15-85   5:53p
    XREFPAS  PAS      6656   4-15-85   8:52a
           27 file(s)     344301 bytes
                            3072 bytes free
