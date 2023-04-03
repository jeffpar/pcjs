---
layout: page
title: "PC-SIG Library Disk #309"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0309/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0309"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY UTILITIES NO 3"

    A variety of Assembly language programs gathered for the convenience of
    the programmer. Source code is in Assembly language. Many routines
    improve handling of screens, disks and printers.  See file descriptions
    for a real appreciation of the breadth of this collection.
    File Descriptions:
    
    ASM      TXT  2 tips from Boca Raton.
    BEEP     ASM  Sound effect generator.
    CLEAR    ASM  Sample clear screen routine from CHASM.
    CLOCK    ASM  Print date and time on screen.
    CLOCK    DOC  Documentation for CLOCK.
    CO       DOC  Documentation for COENDP and COPRNT.
    COENDP   ASM  Part of program to list disk contents.
    COPRNT   ASM  Part of program to list disk contents.
    DISASM   BAS  A BASIC program that disassembles assembly programs.
    DISKDIRL ASM  Part of program to list disk contents.
    DISPTEXT ASM  Displays a line on screen without BIOS.
    DOS-EDIT ASM  Assembly language text editor.
    DOSERROR DOC  Lists error return codes.
    DSK      ASM  Returns the number of free sectors on a disk.
    FREE     ASM  Shows available free space on a disk.
    FREE     DOC  Documentation for FREE.
    GETSP    ASM  Lists free space on disk.
    INIT     ASM  Assembly Source Code..
    INITMEM  ASM  Initializes memory between 544k and 576k.
    LIB      EXE  Sub-program.
    LIST80   ASM  Lists the first 80 characters in a line of ASCII text.
    MEMDRV   ASM  Faster bootup and use ALL of your available memory.
    MEMDRV   DOC  Documents MEMDRV.
    MORERAM  ASM  Use all of available RAM.
    NOLF     ASM  Deletes extra linefeeds from some printer files.
    OBJSNOOP COM  Displays label references in object files.
    OPCODE   DOC  Used by DISASM.BAS.
    OPCODE   TXT  Used by DISASM.BAS.
    PAGE     ASM  Demonstrates multiple screen pages.
    PARTBIOS LIS  Partial listing of BIOS low memory.
    PASSWORD ASM  Password protection of system.
    PRTPATH  ASM  Prints current directory path.
    PUT_DEC  ASM  Puts decimal point in ASCII string.
    PUT_DEC  OBJ  Object code for PUT_DEC.
    ROMBIOS  ASM  ROM BIOS information.
    SCRN     ASM  A variable time screen saver.
    SCRN     DOC  Documentation for SCRN.ASM.
    SCROLL10 ASM  Tests DISPTEXT.
    SKELETON ASM  Skeleton of a minimal Assembly language program.
    SL       ASM  Tests program that scrolls screen.
    SPEDUPDK ASM  Changes some disk drive parameters.
    TABS     ASM  Replaces blanks with tabs in ASCII text files.
    TALK1    ASM  Dumb terminal for IBM PC.
    TEXT     DOC  Documentation for TEXT.EXE.
    TEXT     EXE  Several text conversion options.
    UPDIR    ASM  Moves the user up one directory level.
    UPPATCH  ASM  Patch of another program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISASM.BAS

```bas
1 REM Program by Ross H. Cobb
2 REM 8540 SW 163 Terr
3 REM Miami, FL  33157
4 REM (305) 233-7458
10 CLEAR 32767 : DIM O$(512) : KEY OFF : CLS
15 PRINT "Loading opcodes..."
20 OPEN "A:OPCODES" FOR INPUT AS 1
25 IF EOF(1) THEN 50
30 LINE INPUT #1,O$(X) : X=X+1 : GOTO 25
50 CLOSE 1 : LINE INPUT "Source file name (HEX file only ? ";FL$
55 PRINT "Output device may be a disk file, com port or screen."
56 PRINT "Default is SCRN:"
57 LINE INPUT "Device ? ";D$
58 IF D$="" THEN D$="SCRN:"
59 OPEN D$ FOR OUTPUT AS 2
60 OPEN FL$ FOR INPUT AS 1
70 IF EOF(1) THEN 5000
80 A$=INPUT$(2,1)
85 B1$="":W1$="":W2$=""
90 Z=VAL ("&H"+A$)
95 HC$=A$
100 OP$=O$(Z)
110 W=INSTR(OP$,"@")
120 IF W THEN 500
130 B=INSTR(OP$,"#")
140 IF B THEN 2000
141 NN$=OP$:GOSUB 1000
145 AD=AD+1
150 GOTO 70
500 W1$=INPUT$(2,1):W2$=INPUT$(2,1):WW$=W2$+W1$
550 NN$=LEFT$(OP$,W-1)+WW$+RIGHT$(OP$,LEN(OP$)-W)
560 GOSUB 1000 : AD=AD+2 :GOTO 145
1000 AD$=HEX$(AD):AD$=STRING$(4-LEN(AD$),"0")+AD$
1100 IF W THEN 1200
1101 IF B THEN 1300
1102 HX$=HC$:GOTO 1400
1200 HX$=HC$+W1$+W2$:GOTO 1400
1300 HX$=HC$+B1$:GOTO 1400
1400 PRINT #2,AD$,HX$,NN$
1500 RETURN
2000 B1$=INPUT$(2,1)
2010 NN$=LEFT$(OP$,B-1)+B1$+RIGHT$(OP$,LEN(OP$)-B)
2020 GOSUB 1000 : AD=AD+1 : GOTO 145
5000 PRINT "End of file...." : CLOSE : STOP
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0309

     Volume in drive A has no label
     Directory of A:\

    DOS-EDIT ASM     62209   5-03-84   6:06p
    LIB      EXE     32128   2-18-82
    GETSP    ASM      3947   5-01-84   3:27p
    SCROLL10 ASM      6404   5-15-85   6:17p
    CLOCK    ASM     11059   5-11-85   2:12p
    CLEAR    ASM      1225   7-28-83   1:36p
    SKELETON ASM       287  12-28-83   6:11p
    INITMEM  ASM       683   5-15-85   6:26p
    INIT     ASM       439  12-26-84   4:16p
    DISPTEXT ASM      6203   5-15-85   6:19p
    PRTPATH  ASM       871   1-19-84   9:01p
    PARTBIOS LIS      2611   5-15-85   6:18p
    PAGE     ASM       767   5-15-85   6:15p
    SL       ASM      3104   5-15-85   6:23p
    DISASM   BAS      1312   7-13-84   7:16p
    OPCODE   TXT      2636   7-13-84   7:17p
    COPRNT   ASM      4096   2-21-84   7:06a
    COENDP   ASM       354   5-11-85  11:11p
    CO       DOC      2165   5-11-85   2:14a
    FREE     ASM      5104   5-11-85  10:54p
    FREE     DOC      1141   5-11-85  10:55p
    UPPATCH  ASM      6564   4-18-84  10:52p
    SCRN     ASM     12071   5-11-85   3:02a
    SCRN     DOC      2570   5-11-85   3:03a
    DSK      ASM      1367   5-11-85   3:37a
    LIST80   ASM     10644   5-11-85   4:27a
    UPDIR    ASM      2809   5-11-85   4:18a
    OPCODE   DOC        55   9-01-84  12:21p
    ROMBIOS  ASM      7509   9-23-84   6:46p
    PUT_DEC  ASM      3827  10-15-83   5:20p
    SPEDUPDK ASM      1218   5-11-85   4:47a
    TALK1    ASM      6330   5-11-85   4:54a
    MEMDRV   ASM     10335   5-11-85   5:00a
    MEMDRV   DOC      2496   5-11-85   3:56a
    MORERAM  ASM      7168   1-02-84   1:09a
    CLOCK    DOC      2626   5-11-85   2:40p
    BEEP     ASM       817   5-11-85   4:50p
    NOLF     ASM      4842   4-05-84   8:45a
    TABS     ASM     18304   5-04-84   9:01a
    PUT_DEC  OBJ       242  12-05-83   9:54p
    DISKDIRL ASM     17842   7-31-84  10:03p
    ASM      TXT       779   6-30-83   7:43p
    DOSERROR DOC       641   9-10-83  11:28a
    PASSWORD ASM      3456  10-12-84   4:30p
    TEXT     DOC      2560   2-24-85  11:11a
    TEXT     EXE      9728   2-24-85  11:11a
    OBJSNOOP COM      3072   1-01-80   3:27a
    FILES309 TXT      2923  12-15-88  10:23a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-15-88  10:23a
           50 file(s)     292118 bytes
                            5120 bytes free
