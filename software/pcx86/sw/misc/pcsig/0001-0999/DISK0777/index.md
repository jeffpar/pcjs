---
layout: page
title: "PC-SIG Diskette Library (Disk #777)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0777/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0777"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PSEUDOSAM CROSS ASSEMBLER 48 AND 51"

    PSEUDOSAM 48 and 51 are machine language cross-assembler programs
    forthe INTEL 8748 and INTEL 8751 microprocessors.  These programs let
    you construct 8748 and 8751 code on your IBM PC, to be
    transferred to an 8748- or 8751-based system for use.
    
    The PSEUDOSAM (Pseudo brand Symbolic AsseMbler) assemblers conform to
    common syntax, based on the UNIX System V assembler syntax.  The opcode
    and addressing syntax is compatible with the manufacturer's, but label,
    directive, and expression operator syntax will differ.
    
    The author of PSEUDOSAM chose this syntax because of UNIX's popularity,
    and to avoid the problem of maintaining compatibility with the many OEM
    assemblers.  The documentation is well organized and easy to understand,
    although no attempt is made to teach 8748 or 8751 programming.  You
    should have a good understanding of machine language programming and
    also be familiar with basic DOS functions.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0777

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-16-87   2:26p
    GO       TXT      1268   7-06-90   2:45a
    FILE0777 TXT      2295   7-10-90  11:26a
    A48      EXE     63408   1-29-90   7:32p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      2623  12-08-89  10:01a
    LEVELI   DOC     23780   3-22-90   6:29a
    MNEM41   ASM      9230   1-23-90   9:38a
    MNEMTEST ASM      9610  12-19-87  12:57p
    READI    ME       1465   2-07-90   3:39p
    A51      EXE     65760   1-29-90   7:33p
    BROCH~1  PC      27838   2-05-90  10:44a
    EXAMPL~1 ASM      2658   3-07-90   2:51p
    LEVELI~1 DOC     23780   3-22-90   6:29a
    MNEMTE~1 ASM     15931   1-30-90   2:03p
    READI~1  ME       1465   2-07-90   3:39p
           16 file(s)     278987 bytes
                           32768 bytes free
