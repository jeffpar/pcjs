---
layout: page
title: "PC-SIG Diskette Library (Disk #1699)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1699/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1699"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAFX"

    The GRAFX library consists of over 50 FORTRAN 77 callable routines,
    which allow FORTRAN programs access to the PC's graphic and other
    capabilities.  The graphic routines find application where emphasis is
    on ease of implementation and rapid presentation of numerical data.
    Three levels of capability are included.  The top level requires no
    knowledge of the PC or computer graphics, and is suitable for
    pedagogical applications such as numerical methods instruction,
    quick-look analysis of computational progress, and for the professional
    who is not primarily a programmer.  The middle level operates in problem
    space and suports display of points, lines, circles, ellipses, boxes,
    etc. to allow creation of custom displays such as map projections,
    multiple graphic windows, and 3D displays.  The lowest level consists of
    primitives implemented in assembly language which operate in display
    space to directly access display memory and access to selected DOS and
    BIOS functions.
    
    Many miscellaneous routines are included in the library.  These provide
    bit level access, shift, and logical (AND, OR, NOT, EOR) operations
    required by some applications.  A standard pseudo-random number
    generator, routines to get time-of-day, time in seconds, and date are
    included.  A vector clipping routine is included which can be used to
    clip a problem space vector before drawing lines.  If you really want to
    get down to the bits and bytes, PEEK & POKE routines are included to
    access any location in the 8086 address space.
    
    In addition several illustrative example FORTRAN 77 programs are
    included to demonstrate usage.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1699

     Volume in drive A has no label
     Directory of A:\

    ACLS     COM         8   5-19-88  12:19p
    CSAT     FOR      2419   3-21-89   9:15a
    EXAMPLE  FOR      1168   1-23-89  10:15a
    F77L     LIB     32768   3-13-89  11:21a
    FILE1699 TXT      2961  12-11-89   5:42p
    GLNK     BAT        56   1-17-89  11:28a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-12-89   2:13p
    GRAFCOM  ICL       759   2-05-89  10:02a
    GRAFX    DOC     19268   5-09-89   1:12p
    LINES    FOR      1226   3-14-89  10:24a
    LP77     LIB     37376   3-13-89  11:14a
    NOTES    DOC     20283   3-21-89   9:12a
    PHYSCON  ICL       948   1-10-89  10:07a
    README            3667   5-06-89   1:06p
    SFIT     FOR      1953   3-21-89   9:17a
    SMOTH    FOR      1870   3-14-89  10:16a
    STAT     FOR      1084   3-14-89  10:18a
    VIEW9    FOR      4308   3-14-89  10:21a
    WORM     FOR      1519   3-14-89  10:23a
           20 file(s)     134219 bytes
                           20992 bytes free
