---
layout: page
title: "PC-SIG Library Disk #375"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0375/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0375"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "TURBO PASCAL SET #7"

    Collection of programs and utilities useful for both the Pascal
    Programmer and the casual Pascal user.  Routines include floating point
    accuracy testing, sorted directory printing, file dumping in hex and
    ASCII, file allocation table information, and a routine to read the
    internal clock.
    
    System Requirements:  Turbo Pascal
    
    How to Start: To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    BENCHMRK PAS  Program to test the accuracy of floating point functions.
    PASCAPS  PAS  Converts identifiers in a source code file to upper case
    MEMDISP  PAS  Displays the contents of memory onto the IBM PC screen
    MEM      INC  Part of TEST.PAS
    LINE     INV  Used by FRACTAL.PAS
    INFO     BAT  Information on producing book indexes
    INDEX    BAT  Formats an book index from your data
    HEXDUMP  PAS  Dump the specified file in hex and ascii
    HEAPTEST PAS  This program demonstrates a bug in Turbo's version 2
    HAL-PC   DOC  Information on HAL-PC library disk
    GETSEC   OBJ  Assembled version of GETSEC.ASM
    GETSEC   ASM  Assembly source code for direct disk access
    GETFREE  INC  Part of PRINTDIR.PAS, READFAT.PAS
    GETDIR   PAS  Get the directory by using DOS function calls
    GETDATE  INC  Part of PRINT2.PAS, PRINTDIR.PAS, READFAT.PAS
    FREE     INC  Part of TEST.PAS
    FRACTAL  PAS  Produces fractal images on the hi-res graphics screen
    FLOAT    PAS  Test range of floating point numbers
    FASTPRNT INV  Used by FRACTAL.PAS
    EQUIP    INC  Performs Bios interrupt hex 11 the equipment check
    ENTER    BAT  Enter index entries for book indexing
    DUMPHEX  INC  Part of READFAT.PAS
    DTA      INC  Part of PRINT2.PAS
    DOWN     PAS  Looks like some kind of BASIC to Pascal file conversi on?
    DOT      PAS  Program to test the speed of Bios interupt to perform
    DECBIN   INC  Part of TESTDB.PAS
    DATE     INC  Part of TEST.PAS
    COVER    DOC  Documentation for COVER.COM
    COVER    COM  Utility to print a sorted directory for a disk cover
    COMBINE  BAT  Sort/Merge book index file
    CLS      INV  Used by FRACTAL.PAS
    CHECKPSP INC  Part of PRINT2.PAS
    BIOSREAD INC  Part of PRINTDIR.PAS, READFAT.PAS
    TURBO-UT PAS  Utilities to handle data input, validation of data
    POINTERS PAS  Demo on how to use pointers & dynamic memory (Heap Space)
    POINT    INV  Used by FRACTAL.PAS
    TSIN     PAS  Test range of sin function
    TIMESTMP PAS  Reads the internal clock returning a string of the form
    PRINTDIR PAS  Print a sorted directory listing
    PRINT2   PAS  Program to print an ASCII file in a nice way
    TIME     INC  Part of TEST.PAS
    TESTDB   PAS  Test of utility funtions
    TEST     PAS  Test of utility funtions
    STRPRNT  PAS  Program for testing of Dos 2.0 print string function
    START    BAT  Begins book indexing
    READFAT  PAS  Read the File Allocation Table information
    SIDEWYTR PAS  Print the `infile' sideways on an EPSON MX-80 Printer
    READPSP1 INC  Read Program Segment Prefix information
    UT-MOD?? INC  Part of TURBO-UT.PAS (6 files)
    TSTSOUND COM  Part of TURBO-UT.PAS
    TURBO-UT DOC  Documentation for TURBO-UT.PAS
    TURBO-UT DEM  Demo file for TURBO-UT.PAS
    TURBO-UT COM  Compiled version of TURBO-UT.PAS

### Directory of PC-SIG Library Disk 0375

     Volume in drive A has no label
     Directory of A:\

    TURBO-UT DOC     27836   9-11-84   7:19p
    TURBO-UT DEM     10378   9-11-84   3:44p
    HEAPTEST PAS      1830   8-21-84   7:44p
    TIMESTMP PAS      2476   8-21-84  10:57p
    MEM      INC       331   7-13-84   6:25p
    BENCHMRK PAS       967   8-27-84  12:18p
    CLS      INV        17   5-11-84   8:46a
    TURBO-UT PAS      4101   9-11-84   3:48p
    DECBIN   INC       653   7-13-84   6:26p
    TSIN     PAS       340   7-04-84  12:53p
    FLOAT    PAS       389   7-04-84  12:54p
    DOT      PAS       712   7-04-84   9:07p
    TIME     INC       450   7-13-84   6:26p
    FREE     INC       817   7-13-84   6:26p
    DATE     INC       459   7-13-84   6:26p
    STRPRNT  PAS       819   7-04-84   9:13p
    EQUIP    INC       808   7-13-84   6:27p
    GETFREE  INC      1266   7-13-84   6:28p
    BIOSREAD INC      1443   7-13-84   6:28p
    DUMPHEX  INC       254   7-13-84   6:28p
    READPSP1 INC       323   7-13-84   6:29p
    GETDATE  INC      1997   7-13-84   6:29p
    CHECKPSP INC       721   7-13-84   6:29p
    DTA      INC      2102   7-13-84   6:30p
    UT-MOD90 INC      1379   9-11-84   3:39p
    GETDIR   PAS      2198   7-13-84   6:33p
    PRINT2   PAS      8081   7-10-84   6:15p
    READFAT  PAS      1323   7-13-84   6:32p
    UT-MOD00 INC       725   9-11-84   4:01p
    UT-MOD04 INC      2568   8-30-84   2:38p
    UT-MOD02 INC      8768   8-30-84   2:54p
    UT-MOD01 INC      4147   8-30-84   2:32p
    UT-MOD03 INC      4748   9-11-84   4:06p
    HAL-PC   DOC      2147   1-01-84  12:55a
    POINTERS PAS       547   2-11-85   9:02p
    INFO     BAT      5760   3-08-83   2:00p
    START    BAT       128   3-08-83   2:00p
    ENTER    BAT       128   3-08-83   2:00p
    COMBINE  BAT       128   3-08-83   2:00p
    INDEX    BAT       128   3-08-83   2:00p
    HEXDUMP  PAS      2347   7-17-84  11:20p
    TSTSOUND COM     10367   7-05-84   1:57p
    PASCAPS  PAS      6136   7-13-84   6:24p
    MEMDISP  PAS      3265   7-13-84   5:39p
    GETSEC   ASM      4002   5-09-84   5:34p
    TEST     PAS       139  10-02-84   3:43a
    DOWN     PAS       994   9-07-84  12:27p
    COVER    DOC      2322   4-18-84  10:27p
    FASTPRNT INV       364   9-09-84   5:46p
    TURBO-UT COM     25784   9-11-84   3:46p
    POINT    INV       263   9-06-84   2:56p
    LINE     INV       510   9-06-84   2:59p
    SIDEWYTR PAS      5607   8-28-84   6:57p
    FRACTAL  PAS      2298   9-11-84   8:23p
    GETSEC   OBJ       111   8-25-82
    TESTDB   PAS       216  10-02-84   3:43a
    PRINTDIR PAS     20237  10-02-84   3:47a
    COVER    COM      1152   3-01-84   7:04a
    FILES375 TXT      3538   7-08-85   2:37p
           59 file(s)     194044 bytes
                           93184 bytes free
