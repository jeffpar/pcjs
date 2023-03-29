---
layout: page
title: "PC-SIG Library Disk #324"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0324/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0324"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "TURBO PASCAL #1"

    Useful subroutine collections, hi-resolution graphics demonstrations,
    a calculator and even a game or two make this collection of source
    programs very worthwhile.  The code can be used as is in your
    programs, modified for your special purpose, or just used as a model
    for learning.
    
    System Requirements: 2 disk drives, color graphics, Turbo Pascal
    
    How to Start: Bring up Turbo Pascal, then load desired Pascal
    program into the work file area, compile and run.  To view the
    .DOC files, enter TYPE filename.DOC <ENTER>.
    
    File Descriptions:
    
    -------- ---  Graphics programs
    LINE     INV  Required by PLOT3D, PLOTFUNC, SPIN, SPOKES, WORLDMAP
    CLS      INV  Required by PLOT3D, GALEXY
    CUBE     3D   Data file for PLOT3D
    PLOT3DD  PAS  3D object display, rotation and scaling by user
    PLOT3D   PAS  3D object display, rotation and scaling demo
    POINT    INV  Required by GALEXY, RANDDOT
    SPOKES   PAS  Polyhedron ("spoke-connected wheel") hi-res graphics demo
    SPIN     PAS  Spinning box hi-res graphics demo
    RANDDOT  PAS  Graphics screen hi-speed random dot display
    PLOTFUNC PAS  Hi-res graphics 2 function plot with hidden line features
    STARS    DAT  Data file for GALEXY
    GALEXY   PAS  Travel thru the Milky Way! Best with 8087 chip.
    PYRAMID  3D   Data file for PLOT3D
    DIAMOND  3D   Data file for PLOT3D
    WORLDMAP PAS  Draws continents on hi-res graphics screen
    WORLDMAP DAT  Data file for WORLDMAP
    PTOOLENT INC  Routines to display, edit and validate data entry fields
    PTOOLDAT PAS  Demo of PTOOLDAT routines
    PTOOLDAT INC  Convert and manipulate Gregorian and Julian dates
    -------- ---  PASCAL tools
    PTOOLTIM INC  Routines to read and interpret system clock
    PDEMOENT PAS  Demo of PTOOLENT routines
    PTOOLWIN INC  Routines to create and manipulate text windows
    PTOOLTIM PAS  Demo of PTOOLTIM routines
    PTOOLWIN DOC  How to use the windowing routines in PTOOLWIN.INC
    PTOOLWIN PAS  Demo of PTOOLWIN routines
    LOADER   INC  Required by CONVRT - include in calling program
    CONVRT   PAS  Convert TURBO PASCAL chain files to callable COM pgms
    CALL     PAS  Garbage
    -------- ---  Miscellaneous
    FASTPRNT INV  TURBO PASCAL external routine
    HAL-PC   DOC  HAL-PC PASCAL disk library information
    HAT      PAS  Draw the "hat" mathematical function. Best with 8087 chip.
    INPUT2   PAS  Routines to display, edit and validate data entry fields
    HEXDUMP  PAS  HEX/ASCII listing of any disk file - continuous display
    TENKEY   PAS  4-function algebraic-notation calculator
    SIEVE    PAS  Counts primes between 1 and a max number
    SHOWCHRS PAS  Display all 256 characters on monitor
    PRINTDIR PAS  Print directory listings
    PFORMAT  DOC  How to use PFORMAT
    LIFE     PAS  Conway's game of LIFE - user defines cell coords
    PFORMAT  PAS  Change case of PASCAL source code - NO INDENTING - v1.01
    LIFETRBO PAS  Conway's game of LIFE - define cell coordinates
    TSTATTR  PAS  Display combinations of color monitor display attributes
    TEST     PAS  Garbage
    TYPEFILE PAS  Do line-oriented file I/O in TURBO PASCAL (same as NEW)
    NEW      PAS  How to do line-oriented file I/O in TURBO PASCAL
    TURBOTST PAS  Test TURBO PASCAL version 2.0 for math errors

### Directory of PC-SIG Library Disk 0324

     Volume in drive A has no label
     Directory of A:\

    HAT      PAS      2517  10-02-84   2:14a
    SIEVE    PAS       773   5-02-84  12:51a
    HAL-PC   DOC      2720   2-23-85   4:27p
    RANDDOT  PAS      1752   5-16-84   9:28p
    CUBE     3D        120   5-10-84  11:04p
    DIAMOND  3D        417   5-11-84   8:57a
    PYRAMID  3D         79   5-10-84   1:17p
    STARS    DAT      3067   5-23-84   3:33a
    WORLDMAP DAT      2560   6-05-84   2:32p
    CLS      INV        17   5-11-84   8:46a
    FASTPRNT INV       364   9-09-84   5:46p
    LINE     INV       510   9-06-84   2:59p
    POINT    INV       263   9-06-84   2:56p
    GALEXY   PAS      3654   6-12-84   3:08p
    LIFE     PAS      3219   6-12-84  11:22a
    LIFETRBO PAS      3980   6-12-84  12:41p
    PLOT3D   PAS      7369   6-12-84   3:00p
    PLOT3DD  PAS      7292   6-12-84   3:04p
    PLOTFUNC PAS      3260   6-12-84   3:11p
    SPIN     PAS       890   6-12-84   3:14p
    SPOKES   PAS       911   6-12-84   3:16p
    TYPEFILE PAS      2508   6-12-84  11:27a
    WORLDMAP PAS      1350   6-12-84   3:30p
    TSTATTR  PAS      1376   6-09-84   9:03p
    NEW      PAS      2508   6-12-84   8:21p
    HEXDUMP  PAS      2039   6-22-84   1:39p
    TURBOTST PAS      1361   7-10-84   5:02p
    TENKEY   PAS      2893   7-10-84   3:55p
    SHOWCHRS PAS       388   7-10-84   3:57p
    INPUT2   PAS     10282   7-04-84   6:26p
    PRINTDIR PAS     20237  10-02-84   3:47a
    PFORMAT  DOC      4106   2-03-85   8:18a
    PFORMAT  PAS     26707   2-03-85   8:21a
    CONVRT   PAS     12544   1-06-85  10:19p
    LOADER   INC       512   1-06-85  10:19p
    CALL     PAS       512   1-06-85  10:19p
    TEST     PAS       768   1-06-85  10:19p
    PTOOLDAT PAS      6784   2-21-85   8:14p
    PTOOLDAT INC     36352   2-21-85   8:14p
    PTOOLTIM PAS      2816   2-21-85   8:14p
    PTOOLTIM INC     12672   2-21-85   8:14p
    PTOOLWIN DOC      6264   2-21-85   7:45p
    PTOOLWIN PAS      4352   2-21-85   8:14p
    PTOOLWIN INC     11392   2-21-85   8:15p
    PDEMOENT PAS      5511   2-21-85   8:15p
    PTOOLENT INC     19717   2-21-85   8:15p
    FILES324 TXT      3584   5-23-85   1:20p
           47 file(s)     245269 bytes
                           50176 bytes free
