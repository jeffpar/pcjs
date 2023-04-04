---
layout: page
title: "PC-SIG Library Disk #184"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0184/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0184"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 9"

    Among this disk's collection are programs that allow you to copy
    "protected" disks, generate a listing of directories, alter file
    attributes, clean your disk drives, purge files, fix DOS 1.1 bugs, and
    other miscellaneous utilities.  The remainder is a group of early
    devices for removing copy protection schemes from your software.
    
    NOTE: CAREFULLY EXAMINE THE UNPROTECT FILES TO BE SURE THAT YOUR
    VERSION IS HERE.
    
    Special Requirements:  Some programs require color and others
    require BASIC.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:
    
    File Descriptions:
    
    (READ    ME)  Part of COVER.COM.
    123STAR  UNP  How to unprotect LOTUS 123.
    ALTER    COM  Alter file attributes.
    ALTER    DOC  Documentation.
    BASIC    UNP  How to unprotect BASIC compiler.
    CHMOD    BAS  Change file attributes.
    CHMOD    DOC  Documentation.
    CLEAN2   COM  Update to disk drive cleaning utility.
    CLEAN2   DOC  Documentation.
    CO???    ASM  Source code for COVER.COM modules (7 files)..
    CO???    OBJ  Object modules for COVER.COM (7 files).
    COFIX    BAT  Batch file..
    COLINK        Part of COVER.COM.
    COPY40   COM  Copy utility that breaks some protected items.
    COPY40   DOC  Documentation.
    COPYALL  COM  Copy utility that breaks some protected items.
    COVER    ASM  Part of COVER.COM.
    COVER    COM  Create listing of a directory to put into disk envelope.
    COVER    DOC  Part of COVER.COM (13K).
    COVER    TXT  Documentation for COVER.COM.
    COVERPRO ASM  Source for COVERPRO.COM.
    COVERPRO COM  C.Itoh Prowriter version of COVER.COM.
    CV       COM  Changes disk labels  (DOS 1.1, 2.0, 2.1).
    CV       DOC  Documentation.
    DCOPY    COM  Copies some protected items.
    DFORMAT  COM  Format utility  (Buggy).
    DOSBUG   DOC  Fix DOS 1.1 bugs.
    EASYWR11 UNP  How to unprotect EASYWRITER.
    FLTSIM   UNP  How to unprotect FLIGHT SIMULATOR.
    LOTUS1A  UNP  How to unprotect LOTUS 123 1A.
    MEMSHIFT UNP  How to unprotect MEMORY SHIFT.
    MINIPRT  DOC  Prints directory in small shape for disk envelopes.
    MS2      UNP  How to unprotect MEMORY SHIFT.
    NEW123   UNP  How to unprotect LOTUS 123.
    PFSFILE  UNP  How to unprotect PFS File.
    PURGE    COM  Deletes selected files.
    PURGE    DOC  Documentation.
    RAMDSK16 COM  160KB RAM disk.
    RAMDSK18 COM  180KB RAM disk.
    RAMDSK32 COM  320KB RAM disk.
    RAMDSK36 COM  360KB RAM disk.
    RM18     ASM  Assembler source for RAM disks.
    SPEEDUP2 DOC  DOS 2.0 disk drive speed up utility.
    VISICALC UNP  How to unprotect VISICALC.
    WORD     UNP  How to unprotect WORD.
    WORDNEW  UNP  How to unprotect WORD.
    ZORK3    UNP  How to unprotect ZORK.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHMOD.BAS

```bas
10 CLS:PRINT"This basic program was created by CONVERT.BAS":KEY OFF:DEFINT A-Z:FALSE=0:TRUE=NOT FALSE
20 PRINT"Copyright 1983 ,Rich Schinnell Rockville,MD. Not for Sale."
30 PRINT "This program will create  you a program named CHMOD.COM":PRINT
40 ON ERROR GOTO 5000
50 INPUT "PLACE the disk to write the file TO in Drive A: Press <ENTER> "; CAPITAL$
90 CLS:LOCATE 12,5:PRINT "Now writing file named CHMOD.COM standby please  "
100 RESTORE
110 OPEN "R", #1,"CHMOD.COM",1
120 FIELD #1, 1 AS N$
130 READ N:LL=(N/28)+1
140 FOR I = 1 TO N
150 READ X$,CHECK:FOR C=1 TO LEN(X$) STEP 2:CC$="&H"+MID$(X$,C,2):IF CHECK=9999 THEN 170
155 LSET N$=CHR$(VAL(CC$)):PUT #1:CHECK=CHECK-VAL(CC$):NEXT C:IF CHECK<>0 THEN 5000
160 LOCATE 14,5:PRINT TIME$;" Reading data line #";(1000+I);" lines left=";LL-I;:NEXT I:CLOSE
170 LOCATE 16,5:PRINT "CHMOD.COM CREATED * *":GOTO 5010
1000 DATA  258
1001 DATA FC33ED8A0E800032EDB020BF8100F3AE83F90074658D55FFF2AE7557,3750
1002 DATA C645FF00F3AE8D5DFF880E8000803E8000007C298A073C20741CB910,2771
1003 DATA 00BF8301F2AE750D81EF8401B90400D3E503EFEB05BA9301EB2B43FE,3414
1004 DATA 0E8000EBD0B801438BCDCD21730F3D02007505BAC201EB03BAD401EB,2987
1005 DATA 0CEB05BAAC01EB05EB07BAAC01B409CD21CD20303132333435363738,2584
1006 DATA 3941424344444707496C6C6567616C20484558206368617261637465,2287
1007 DATA 720A0D2407546F6F2066657720706172616D65746572730A0D240746,2084
1008 DATA 696C65206E6F7420666F756E640A0D24074163636573732064656E69,2363
1009 DATA 6564202D2070726F6261626C7920696C6C6567616C20617474726962,2609
1010 DATA 7574650A0D24,393
1011 DATA 000000,9999
5000 PRINT "* * ERROR VERIFY FOLLOWING DATA * * * "
5005 PRINT X$;",";CHECK
5010 KEY ON:CLOSE:END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0184

     Volume in drive A has no label
     Directory of A:\

    (READ    ME)      1525   2-13-85  11:46a
    123STAR  UNP      1024   1-01-80   1:00a
    ALTER    COM      1024  12-26-83  12:51a
    ALTER    DOC      2688  12-26-83  12:50a
    BASIC    UNP       896   1-01-80  12:17a
    CHMOD    BAS      1698   1-01-84   2:13a
    CHMOD    DOC       768   1-01-84   1:27a
    CLEAN2   COM       640  12-17-83   1:40a
    CLEAN2   DOC      2944  12-17-83   1:42a
    COENDP   ASM       289  11-01-84   9:35a
    COENDP   OBJ        73  11-01-84   9:38a
    COFIX    BAT        74   6-14-83   1:30p
    COFREE   ASM      2300  11-01-84  10:42a
    COFREE   OBJ       292  11-01-84  10:42a
    COLINK              68   6-15-83  11:56p
    COPRNT   ASM      4110  11-01-84  12:09p
    COPRNT   OBJ       765  11-01-84  12:03p
    COPY40   COM      3584   4-22-84  11:59a
    COPY40   DOC       256   4-29-84   5:19p
    COPYALL  COM      3584  12-03-83   3:24p
    COSCAN   ASM      1718  11-01-84  12:25p
    COSCAN   OBJ       267  11-01-84  12:26p
    COSORT   ASM      1157   8-21-84  11:49a
    COSORT   OBJ       171   8-21-84  11:52a
    COTITL   ASM      1900  11-01-84  10:22a
    COTITL   OBJ       473  11-01-84  10:22a
    COVER    ASM      2367  11-01-84  12:42p
    COVER    COM      1228  11-01-84  12:42p
    COVER    DOC     13312   6-16-83  10:23a
    COVER    OBJ       482  11-01-84  12:42p
    CV       COM       256  12-04-83   5:20a
    CV       DOC       768  12-04-83   5:21a
    DCOPY    COM      3199   2-09-82   5:38p
    DFORMAT  COM      2688   2-09-82   5:40p
    DOSBUG   DOC      2048  12-09-83   2:53a
    EASYWR11 UNP      4480   1-01-80  12:19a
    FLTSIM   UNP      1024   1-01-80  12:20a
    LOTUS1A  UNP       256   1-01-80  12:20a
    MEMSHIFT UNP       512   1-01-80  12:21a
    MINIPRT  DOC      2048  12-09-83   2:37a
    MS2      UNP      1024   1-01-80  12:57a
    NEW123   UNP      1152   1-01-80  12:22a
    PFSFILE  UNP      1408   1-01-80  12:23a
    PURGE    COM      1152   1-01-84   4:46a
    PURGE    DOC      3712   1-01-84  12:17a
    RAMDSK16 COM       672   5-29-83  11:13p
    RAMDSK18 COM       672   5-12-83   2:52p
    RAMDSK32 COM       672   5-29-83  11:00p
    RAMDSK36 COM       672   5-12-83   6:37p
    RM18     ASM     17152   8-05-83   8:28p
    SPEEDUP2 DOC      2816  12-04-83   5:22a
    VISICALC UNP      2432   1-01-80  12:24a
    WORD     UNP      2304   1-01-80  12:59a
    WORDNEW  UNP      2688   1-01-80  12:58a
    ZORK3    UNP       768   1-01-80  12:25a
    COVERPRO ASM      3692   1-13-84   1:24p
    COVERPRO COM      1170   1-13-84   1:26p
    GO       BAT        38   1-11-89   1:55p
    FILES184 TXT      2824   1-27-89   8:51a
    COVER    TXT     18560   2-13-85  12:26p
    GO       TXT      1079   1-25-89  12:10p
           61 file(s)     135615 bytes
                            9728 bytes free
