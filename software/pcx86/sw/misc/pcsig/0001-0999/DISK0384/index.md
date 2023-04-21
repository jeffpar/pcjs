---
layout: page
title: "PC-SIG Diskette Library (Disk #384)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0384/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0384"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "CONDEN"

    CONDEN as in "Condense" is the theme here!  On board you'll find several
    handy utilities that save you a lot of the paper or disk space often
    required by text files by removing excess blank lines, titles, etc.
    Heading in the other direction is an associated program will let you
    produce multiple page-across listings using a wide-carriage printer.
    Some other useful programs allow you to set screen colors from DOS, and
    generate a cross-reference of your program listings.
    
    How to Start:   To run an EXE program simply type its name and press
    <ENTER>. To read DOC files simply enter TYPE filename.ext and press
    <ENTER>.
    
    File Descriptions:
    
    DELO2A   BAT  BATCH file to read disks
    DELO2    DOC  Documentation for DELO2.EXE
    CONDEN   EXE  Remove blank lines, leading blanks, page titles, etc
    CONDEN   DOC  Documentation for CONDEN.EXE
    XXREF    EXE  Used to cross-reference strings in line number programs
    XXREF    DOC  Documentation for XXREF.EXE
    THREEPAG EXE  Used with CONDEN to print three page wide printer output
    THREEPAG DOC  Documentation for THREEPAG.DOC
    DELO3    EXE  Used to randomly set the color from DOS
    DELO3    DOC  Documentation for DELO3.EXE
    DELO2C   EXE  Slower version of DELO2B.EXE
    DELO2B   EXE  Checks for duplication
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONDEN.DOC

{% raw %}
```
CONDEN IS A PROGRAM THAT CAN BE USED TO COMPRESS DOCs i.e. REMOVE
BLANK LINES, LEADING BLANKS, PAGE TITLES, etc. THE PROGRAM CREATES
A COMPRESSED FILE (OPTIONAL) & USES COMPRESSED OR ORIGINAL FILE AS
OUTPUT TO THE PRINTER IN COMPRESSED TWO PAGES PER ONE 8.5x11 PAGE.
THE USER CAN CHANGE CONSTANTS CONTROLing MOST OPERATIONS. THIS CODE
IS NOT A WORD PROC. AND WILL NOT WRAP AROUND etc. THUS, IF LINES
ARE TO LONG TO FIT ON PAGE YOU NEED TO USE A WORD PROC. OR THEY WILL
BE CUT OFF. OFCOURSE MANY TIMES THIS IS OK, EVEN PREFERRED FOR SOME
DOCs.

```
{% endraw %}

## DELO2.DOC

{% raw %}
```
THE DELO2 SET OF PROGRAMS CAN BE USED TO MANAGE, ORGANIZE, AND STUDY 
A LARGE NUMBER OF FLOPPY DISKS. YOU CAN CHECK FOR DUPLICATE RECORDS,
LIST DIRs DISK BY DISK, and/or SORT BY RECORD NAME, SIZE, TIME, ETC.
YOU CAN SORT USING CONCATENATED FIELDS SUCH AS SIZE FIRST & NAME 2nd
DELO2A IS A BATCH FILE THAT READS DISK AFTER DISK AND CREATES A FILE
CONTAINING ALL DIRs FOR ALL DISKS. IF YOU CALL "DELO2A APPEND"   THE
FILE "LIST.TEM" WILL BE ADDED TO. IF YOU CALL "DELO2A"   THE PROGRAM
WILL CREATE A NEW FILE "LIST.TEM" WITH DIR, FILES, & FREE BYTES DATA

DELO2B CAN CHECK FOR DUPLICATION, LIST AND SORT THE FILE CREATED  BY
DELO2A. THIS PROGRAM WORKS IN CORE AND IS RELATIVELY FAST BUT IT  IS
LIMITED TO ABOUT 70 DISKS PER STUDY. DELO2C USES DISK READ/WRITE AND
CAN STUDY A LARGER NUMBER OF DISKS BUT IS SLOW. A RAMDISK SHOULD  BE
USED WITH DELO2C. LET ME KNOW OF ANY PROBLEM OR SUGGESTIONS AND I'LL
TRY TO MAKE IT BETTER. THE PROGRAMS ARE FREE AND CAN BE COPIED   BUT
USE THEM AT YOUR RISK, THE AUTHOR WILL NOT BE LIABLE FOR ANY LOSSES.

DELO2 PROGRAMS for disk DIRs analyses
by
R. C. DeLozier
Route 1, Jones Rd
Loudon TN 37771

```
{% endraw %}

## DELO3.DOC

{% raw %}
```
DELO3 CAN BE CALLED TO SET THE COLOR RANDOMLY FROM DOS
```
{% endraw %}

## FILES384.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 384   Conden                                            V1 DS
------------------------------------------------------------------------
Handy utilities to reduce the amount of paper/disk space required by
text files.
 
CONDEN   DOC  Documentation for CONDEN.EXE.
CONDEN   EXE  Remove blank lines, leading blanks, page titles, etc from
               text files.
DELO2    DOC  Documentation for DELO2.EXE.
DELO2A   BAT  BATCH file to read disks.
DELO2B   EXE  Checks for duplication.
DELO2C   EXE  Slower version of DELO2B.EXE.
DELO3    DOC  Documentation for DELO3.EXE.
DELO3    EXE  Used to randomly set the color from DOS.
THREEPAG DOC  Documentation for THREEPAG.DOC.
THREEPAG EXE  Used with CONDEN to produce three page wide printer output.
XXREF    DOC  Documentation for XXREF.EXE.
XXREF    EXE  Used to cross-reference strings in line number programs.
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## THREEPAG.DOC

{% raw %}
```
THIS PROGRAM IS FOR USE WITH CONDEN. IT CAN PRODUCE THREE PAGE OUTPUT ON
A WIDE PRINTER USING 8.5 x 16 inch PAPER. THE COMPRESSED (OPTIONAL) FILE
IS BEST USED FOR THIS PURPOSE, i.e. TO GENERATE DOC. THAT TAKE UP MIN.
SPACE. SUCH AS THOSE FROM BULLETIN BOARDS, PROGRAM DOC., LISTINGS, etc.
NOTE : BEFORE USING THIS PROGRAM MAKE SURE PRINTER IS SET - FOR EXAMPLE
INPUT A>MODE LPT1:132,8 from DOS then A>THREEPAG

```
{% endraw %}

## XXREF.DOC

{% raw %}
```
THIS PROGRAM CAN BE USED TO CROSS-REFERENCE STRINGS IN LINE NUMBERED
PROGRAMS SUCH AS BASIC CODES OR DATA LISTS. THE CODE FINDS ALL STRINGS,
NUMBERS, etc. BOUNDED BY SPECIFED CHRs AS IT IS NOW DEFINED.
BUT THE USER CAN SELECT HIS OWN SET OF CONSTANTS. FOR EXAMPLE, ONLY 
ARRAYS, NO NUMBER STRINGS, NO LOWER CASE, etc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0384

     Volume in drive A has no label
     Directory of A:\

    CONDEN   DOC       553   3-09-85   3:15p
    CONDEN   EXE     31232   3-17-85   9:33p
    DELO2    DOC      1151   3-09-85   3:21p
    DELO2A   BAT       278   3-14-85   5:14p
    DELO2B   EXE     44160   2-26-85  11:28p
    DELO2C   EXE     44672   2-26-85  11:43p
    DELO3    DOC        56   2-27-85   7:47a
    DELO3    EXE     21888   3-25-85   8:41a
    FILES384 TXT      1062   7-08-85   2:41p
    THREEPAG DOC       417   3-09-85  12:03a
    THREEPAG EXE     22144   3-09-85   5:09p
    XXREF    DOC       324   3-09-85   3:08p
    XXREF    EXE     35968   3-09-85   2:45p
           13 file(s)     203905 bytes
                          109568 bytes free
