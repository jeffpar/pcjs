---
layout: page
title: "PC-SIG Library Disk #569"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0569/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0569"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "PC-CODE3 AND PC-CODE4"

    PC-CODE3 is a simplified version of PC-CODE2 (V1.53); it is a code
    analysis program.  PC-CODE4 is a simplified version of PC-CODE1 (V1.53)
    and likewise is intended for encoding files as opposed to text.
    
    PC-STAT3 is a simple statistical program by which the user may do
    simple analysis of either a Plain Text FILE or a Coded FILE.
    Basically, it does frequency counts that were previously embedded
    features of PC-CODE1 & 2.
    
    PC-CODE3 and PC-CODE4 are Portable Versions Specifically for Generic
    MS-DOS and Xenix 5.  They are written in a strictly portable Microsoft
    FORTRAN-77 V3.30.  The Object code on these diskette(s) is compatiable
    with both MS-DOS and Microsoft Xenix; meaning these program need NO
    recompiling - they only needed to LINKED to the respective libraries.
    
    System Requirements:  64K RAM, two disk drives and a monochrome
    display; MS-DOS or Xenix 5 are operating system options.
    
    How to Start:  After loading DOS, enter PC-CODE.DOC for a review of
    the documentation.  Note that you must run INSTALL3 before you can run
    either PC-CODE3 or 4.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    PC-CODE  DOC  Documentation and Notes on PC-CODE3 & PC-CODE4
    PC-STAT3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-STAT3 EXE  A Analysis program to check codes/texts
    INSTALL3 EXE  A program configurator that sets options/defaults
    PC-CODE4 EXE  Cluster Oriented Block Semi-binary version PC-CODE3
    PC-CODE3 EXE  Combination 8086(88) and 8087 version (works on both)
    INSTALL3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-CODE3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-CODE4 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    INSTALL3 FOR  FORTRAN77 Source Code for Installer program
    PC-CODE3 FOR  FORTRAN77 Source Code for PC-CODE3.EXE (8088/8087)
    PC-CODE4 FOR  FORTRAN77 Source Code for PC-CODE4.EXE (8088/8087)
    PC-STAT3 FOR  FORTRAN77 Source Code for PC-STAT.EXE
    CONFIG   PC3  The Configuration file used by PC-CODE3 & INSTALL3
    SECRET3  MSG  Test file for Encoding using PC-CODE3
    SECRET3  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE3
    SECRET3  COD  Test code from encoding "SECRET.MSG" using PC-CODE3
    EXAMPLE  DOC  This Execution Log or printout of sample run
    CRC      TXT  This is the Check Bit Sums for the Entire Disk
    CRC      COM  Does Check Bit sums to verify NO alterations of files
    SECRET4  TXT  Result of decoding SECRET.COD using PC-CODE4
    SECRET4  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE4
    SECRET4  COD  Test code from encoding "SECRET.MSG" using PC-CODE4
    SECRET4  MSG  Test file for Encoding using PC-CODE4
    SECRET3  TXT  Result of decoding SECRET.COD using PC-CODE3
    README        Notes on programs
    COPYRIGH T    Copyright notice
    DIR      TXT  Listing of included files
    ???      DOC  Notes on programs

### Directory of PC-SIG Library Disk 0569

     Volume in drive A has no label
     Directory of A:\

    FILES    DOC      1844   4-06-86  11:57a
    CONFIG   PC3       472   4-06-86  11:11a
    COPYRIGH T        1228   4-06-86  11:11a
    CRC      COM      1536   4-06-86  11:11a
    CRC      TXT      1432   4-06-86  11:58a
    DIR      TXT      1335   4-06-86  11:58a
    EXAMPLE  DOC      4671   4-06-86  11:55a
    INSTALL3 EXE     36350   4-06-86  11:11a
    INSTALL3 FOR      5661   4-06-86  11:11a
    INSTALL3 OBJ      7799   4-06-86  11:11a
    KEYS     DOC       859   4-06-86  12:37p
    PC-CODE  DOC      8061   4-06-86  11:11a
    PC-CODE3 EXE     58552   4-06-86  11:11a
    PC-CODE3 FOR     16186   4-06-86  11:11a
    PC-CODE3 OBJ     14158   4-06-86  11:11a
    PC-CODE4 EXE     56940   4-06-86  11:11a
    PC-CODE4 FOR     16538   4-06-86  11:11a
    PC-CODE4 OBJ     13240   4-06-86  11:11a
    PC-STAT3 EXE     32646   4-06-86  11:11a
    PC-STAT3 FOR      2053   4-06-86  11:11a
    PC-STAT3 OBJ      2735   4-06-86  11:11a
    README             422   4-06-86  12:16p
    SECRET3  COD      4018   4-06-86  11:11a
    SECRET3  KEY       174   4-06-86  11:11a
    SECRET3  MSG      3702   4-06-86  11:11a
    SECRET3  TXT      3714   4-06-86  11:11a
    SECRET4  COD      4608   4-06-86  11:11a
    SECRET4  KEY       174   4-06-86  11:11a
    SECRET4  MSG      3702   4-06-86  11:11a
    SECRET4  TXT      4608   4-06-86  11:11a
    GO       BAT       770   6-20-86   1:22p
    NOTES569 TXT      1512   6-20-86   1:26p
    FILES569 TXT      2154   6-20-86   1:25p
           33 file(s)     313854 bytes
                           32768 bytes free
