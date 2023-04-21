---
layout: page
title: "PC-SIG Diskette Library (Disk #580)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0580/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0580"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL TUTOR 2 OF 2 (ALSO 579)"

    PASCAL TUTOR is a text-based tutorial on programming with the Pascal
    language.  The assumption is that you know nothing about Pascal in
    particular and programming in general.
    
    It begins with the most elementary aspects of programming and takes you
    through each step from dynamic allocation to the use of linked lists.
    The program was specifically written for use with Turbo Pascal versions
    3.0, 4.0, and 5.0.  Version 5.5 is also supported through two additional
    chapters covering object oriented programming.  The Pascal source code
    used for examples throughout the tutorial is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0580.TXT

{% raw %}
```
Disk No:  580                                                           
Disk Title: Pascal Tutor 2 of 2 (579 1st disk)                          
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Pascal Tutor                                             
Author Version: 2.4                                                     
Author Registration: $15.00 to $39.95.                                  
Special Requirements: Printer.                                          
                                                                        
PASCAL TUTOR is a text-based tutorial on programming with the Pascal    
language.  The assumption is that you know nothing about Pascal in      
particular and programming in general.                                  
                                                                        
It begins with the most elementary aspects of programming and takes     
you through each step from dynamic allocation to the use of linked      
lists.  The program was specifically written for use with Turbo Pascal  
versions 3.0, 4.0, and 5.0.  The Pascal source code used for examples   
throughout the tutorial is included.                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INTDATA.TXT

{% raw %}
```
  101  102  103  104
  105  106  107  108
  109  110  111  112
  113  114  115  116
  117  118  119  120
  121  122  123  124
  125  126  127  128
  129  130  131  132
  133  134  135  136
  137  138  139  140
  141  142  143  144
  145  146  147  148
```
{% endraw %}

## OT.DOC

{% raw %}
```
    Filename OT.DOC - Oaktree Documentation   Oct 18, 1988

    The program supplied by IBM and compatible makers named
    TREE.COM is a nearly unuseable program since it really
    doesn't tell you much about your directories. Because of
    that deficiency, OT (OakTree, a more substantial tree)
    was written.  It will give you more information about
    your disk than you will ever need, but it is somewhat
    interesting to see just what is on your disk.

    OT3.PAS was written in TURBO Pascal 3.0 and was debugged
    using PC-DOS 3.1, but should work on any DOS of 2.X or
    greater.  OT4.PAS was rewritten in TURBO Pascal 4.0 and
    uses many of the extensions added to versions 4.0 and 5.0.
    Neither of these wil work with DOS 1.X since DOS 1.X does
    not support directories.

    The generalized command format is;

    C>OT [drive:] [filename.ext] [/n] [/p] [/s]

       If no drive is specified, the default drive will be
       listed.

       The tree, beginning at the current directory, will be
       listed.  If you are in the root directory, you will get
       a listing of the entire disk.

       The filename.ext can be supplied with wildcards (* and $)
       to get a listing of certain types of files.

       /n - filenames will not be listed, only the directory
            structure of the disk.

       /p - will cause a listing to be sent to the printer with
            page numbers.

       /s - will result in some extra disk statistics being in-
            cluded in the listing following the header line.

    Examples of useage;

    C>OT       The tree, starting at the current directory will
               be displayed on the monitor.

    C>OT *.PAS  All files with extension PAS will be listed in
               the current tree along with an indication of where
               they are.

    C>OT WHERE.WHO  If this filename exists on the disk, it will
               be listed along with what directory it is in.
               This is useful for finding a lost file.

    C>OT /p /s  The current tree will be listed on the monitor,
               and also printed out.  The disk statistics will be
               included in both locations.

    C>OT /n    Lists only the directories in the current tree.

    C>OT A: /p  The information concerning disk drive A will be
                listed and printed.

    C>OT /p /s  If started from the root directory, this will result
               in the maximum amount of information.  The listing is
               very useful in case of a disk crash because it will
               aid you in restoring the disk to its precrash state.
```
{% endraw %}

## REALDATA.TXT

{% raw %}
```
    1  23.6  145.45   234.8
    2  -0.4  -0.05  0.345
    3 4.0 3456.0    123.0
    4 77
    5 -0.003  0.0006  12.345
    6 1 2 3 4 5
    7   12.12        13.11               14.14
    8 2      3        4
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0580

     Volume in drive A has no label
     Directory of A:\

    ALLVAR   PAS      1141  12-01-89  12:00p
    AMORT1   PAS       789  12-01-89  12:00p
    AMORT2   PAS      1667  12-01-89  12:00p
    AMORT3   PAS      2179  12-01-89  12:00p
    AMORT4   PAS      3201  12-01-89  12:00p
    AMORT5   PAS      3825  12-01-89  12:00p
    AREAS    PAS      1539  12-01-89  12:00p
    ARRAYS   PAS      1087  12-01-89  12:00p
    ARRAYS2  PAS      2203  12-01-89  12:00p
    BIGCASE  PAS      1151  12-01-89  12:00p
    BIGREC   PAS      1432  12-01-89  12:00p
    BININ    PAS       757  12-01-89  12:00p
    BINOUT   PAS       986  12-01-89  12:00p
    BOOLMATH PAS      1472  12-01-89  12:00p
    CARTRUCK PAS      1685  12-01-89  12:00p
    CASEDEMO PAS       924  12-01-89  12:00p
    CHARDEMO PAS       455  12-01-89  12:00p
    CONSTANT PAS      1019  12-01-89  12:00p
    CONVERT  PAS      1030  12-01-89  12:00p
    DUMBCONV PAS      1006  12-01-89  12:00p
    DYNREC   PAS      1940  12-01-89  12:00p
    EMPLOYEE PAS      1396  12-01-89  12:00p
    ENCAP1   PAS      1068  12-01-89  12:00p
    ENCAP2   PAS      3110  12-01-89  12:00p
    ENTYPES  PAS      2394  12-01-89  12:00p
    FILE0580 TXT      1777   1-02-90   6:23p
    FINDCHRS PAS      1895  12-01-89  12:00p
    FORWARD  PAS      1136  12-01-89  12:00p
    FUNCTION PAS       487  12-01-89  12:00p
    FUNCTYPE PAS      1546  12-01-89  12:00p
    GARDEN   PAS      1162  12-01-89  12:00p
    GO       BAT        38   2-08-88  11:29a
    GO       TXT       463   2-08-88   2:13p
    GOODFORM PAS       603  12-01-89  12:00p
    IFDEMO   PAS      1247  12-01-89  12:00p
    INHERIT1 PAS      3699  12-01-89  12:00p
    INHERIT2 PAS      1423  12-01-89  12:00p
    INHERIT3 PAS      1767  12-01-89  12:00p
    INTDATA  TXT       265  12-01-89  12:00p
    INTMATH  PAS       996  12-01-89  12:00p
    INTVAR   PAS       437  12-01-89  12:00p
    INTVAR2  PAS       477  12-01-89  12:00p
    LABELS   PAS       844  12-01-89  12:00p
    LINKLIST PAS      2044  12-01-89  12:00p
    LIST     EXE      4800  12-01-89  12:00p
    LIST3    PAS      3684  12-01-89  12:00p
    LIST4    PAS      2961  12-01-89  12:00p
    LOOPDEMO PAS      1635  12-01-89  12:00p
    LOOPIF   PAS      1128  12-01-89  12:00p
    NEWINT4  PAS       752  12-01-89  12:00p
    NEWREAL4 PAS      1768  12-01-89  12:00p
    OT       DOC      2707  12-01-89  12:00p
    OT3      PAS     25903  12-01-89  12:00p
    OT4      PAS     22138  12-01-89  12:00p
    PASCOMS  PAS       576  12-01-89  12:00p
    PERIMS   PAS      1349  12-01-89  12:00p
    PERSON   PAS       443  12-01-89  12:00p
    POINT    PAS       745  12-01-89  12:00p
    POINT4   PAS       739  12-01-89  12:00p
    POINTERS PAS       554  12-01-89  12:00p
    PRINTALL BAT      2062  12-01-89  12:00p
    PRINTOUT PAS      1315  12-01-89  12:00p
    PROCED1  PAS       958  12-01-89  12:00p
    PROCED2  PAS      1623  12-01-89  12:00p
    PROCED3  PAS       669  12-01-89  12:00p
    PROCED4  PAS      1241  12-01-89  12:00p
    PROCED5  PAS       625  12-01-89  12:00p
    PROCTYPE PAS      1565  12-01-89  12:00p
    READ     ME       4323  12-01-89  12:00p
    READARRY PAS       427  12-01-89  12:00p
    READCHAR PAS       404  12-01-89  12:00p
    READDATA PAS       856  12-01-89  12:00p
    READDISP PAS       891  12-01-89  12:00p
    READFILE PAS       473  12-01-89  12:00p
    READINT  PAS      1027  12-01-89  12:00p
    READINTS PAS      1522  12-01-89  12:00p
    READREAL PAS       526  12-01-89  12:00p
    READSTOR PAS      1205  12-01-89  12:00p
    READSTRG PAS       408  12-01-89  12:00p
    REALDATA TXT       214  12-01-89  12:00p
    REALMATH PAS       964  12-01-89  12:00p
    RECURSON PAS       664  12-01-89  12:00p
    REPEATLP PAS       841  12-01-89  12:00p
    SETS     PAS      2200  12-01-89  12:00p
    SETTIME  PAS       763  12-01-89  12:00p
    SHAPES3  PAS      1983  12-01-89  12:00p
    SHAPES4  PAS      1739  12-01-89  12:00p
    SMALLREC PAS      1517  12-01-89  12:00p
    STRARRAY PAS       893  12-01-89  12:00p
    STRINGS  PAS       532  12-01-89  12:00p
    SUBRANGE PAS      1614  12-01-89  12:00p
    SUPERVSR PAS      2329  12-01-89  12:00p
    TEMPCONV PAS      1569  12-01-89  12:00p
    TIMEDAT4 PAS       458  12-01-89  12:00p
    TIMEDATE PAS      1451  12-01-89  12:00p
    TRIVIAL  PAS       115  12-01-89  12:00p
    TYPES    PAS       895  12-01-89  12:00p
    UGLYFORM PAS       468  12-01-89  12:00p
    VARREC   PAS      2211  12-01-89  12:00p
    VEHICLES PAS       883  12-01-89  12:00p
    VIRTUAL1 PAS      2886  12-01-89  12:00p
    VIRTUAL2 PAS      2916  12-01-89  12:00p
    VIRTUAL3 PAS      3202  12-01-89  12:00p
    WHATSTRG PAS       842  12-01-89  12:00p
    WHILELP  PAS       919  12-01-89  12:00p
    WRITELNX PAS      1445  12-01-89  12:00p
    WRITEMR  PAS       186  12-01-89  12:00p
    WRITESM  PAS       182  12-01-89  12:00p
    CH02_1   PAS       181  12-01-89  12:00p
    CH02_2A  PAS       284  12-01-89  12:00p
    CH02_2B  PAS       294  12-01-89  12:00p
    CH03_1   PAS       514  12-01-89  12:00p
    CH04_1   PAS       477  12-01-89  12:00p
    CH04_2   PAS       611  12-01-89  12:00p
    CH05_1   PAS       450  12-01-89  12:00p
    CH05_2   PAS       959  12-01-89  12:00p
    CH05_3   PAS      1690  12-01-89  12:00p
    CH06_1   PAS       736  12-01-89  12:00p
    CH06_2   PAS       897  12-01-89  12:00p
    CH06_3   PAS       719  12-01-89  12:00p
    CH07_1   PAS       502  12-01-89  12:00p
    CH08_1   PAS      1928  12-01-89  12:00p
    CH09_1   PAS      1218  12-01-89  12:00p
    CH10_1   PAS       638  12-01-89  12:00p
    CH11_1   PAS       636  12-01-89  12:00p
    CH11_2   PAS       728  12-01-89  12:00p
    CH12_1   PAS       555  12-01-89  12:00p
    CH15_1   PAS      3257  12-01-89  12:00p
    CH15_2   PAS      1795  12-01-89  12:00p
    CH16_1A  PAS      3043  12-01-89  12:00p
    CH16_1B  PAS      1775  12-01-89  12:00p
          131 file(s)     216532 bytes
                          964096 bytes free
