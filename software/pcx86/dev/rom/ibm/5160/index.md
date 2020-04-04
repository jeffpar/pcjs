---
layout: page
title: IBM PC XT (Model 5160) BIOS Sources
permalink: /software/pcx86/dev/rom/ibm/5160/
redirect_from: /disks/pcx86/roms/ibm/5160/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/ibm/5160/ega/640kb/debugger/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: IBM PC XT BIOS Sources (V1)
    autoStart: true
---

PCjs has created and archived a collection IBM PC XT ROM BIOS diskettes.  Their contents are thanks to the
[PC DOS Retro](https://sites.google.com/site/pcdosretro/) website.  [Directory Listings](#directory-of-ibm-pc-xt-bios-sources-v1)
and [Version Notes](#5160v1-notes-from-pc-dos-retro) are provided below.

{% include machine.html id="ibm5160-msdos320" %}

### Directory of IBM PC XT BIOS Sources (V1)

     Volume in drive A is 5160V1     
     Directory of  A:\
    
    5160V1   TXT      980   8-01-14  10:05a
    README   TXT     3460   3-03-18   9:57a
    VERSIONS TXT     8490   3-03-18   9:59a
    XTBIOS   ASM   184626   9-01-14   5:59p
            4 File(s)    122880 bytes free

### Directory of IBM PC XT BIOS Sources (V2)

     Volume in drive A is 5160V2     
     Directory of  A:\
    
    5160V2   TXT      542   9-03-14  10:03p
    BIOS1    ASM     9426   7-30-14   5:41p
    DSEG     INC     8182   7-30-14  12:48p
    DSKETTE  ASM    85367   9-01-14   6:02p
    EXE2BIN            81   7-30-14   6:32p
    FILL     ASM      123   7-30-14   6:34p
    HEADER   ASM     3633   7-30-14   6:41p
    KEYBRD   ASM    31888   8-30-14   9:12p
    POST     ASM    87861   8-07-14   3:00p
    POSTEQU  INC     9421   7-30-14   9:57p
    PRT      ASM     5498   8-30-14   3:52p
    README   TXT     3460   3-03-18   9:57a
    RS232    ASM     7834   8-30-14   3:56p
    VERSIONS TXT     8490   3-03-18   9:59a
    VIDEO    ASM    66334   8-31-14   9:35a
    XTLINK             79   7-30-14   6:28p
           16 File(s)     24576 bytes free

### Directory of IBM PC XT BIOS Sources (V3)

     Volume in drive A is 5160V3     
     Directory of  A:\
    
    5160V3   TXT      563   9-03-14  10:03p
    BIOS1    ASM     9426   7-30-14   5:41p
    DSEG     INC     8182   7-30-14  12:48p
    DSKETTE  ASM    85323   9-01-14   6:02p
    EXE2BIN            81   8-29-14   6:43p
    FILL     ASM      123   8-29-14   1:53p
    HEADER   ASM     3624   8-29-14   1:26p
    KEYBRD   ASM    32034   8-30-14   9:12p
    POST     ASM    87457   8-29-14   9:55p
    POSTEQU  INC     9421   8-29-14   5:38p
    PRT      ASM     5498   8-30-14   3:52p
    README   TXT     3460   3-03-18   9:57a
    RS232    ASM     7834   8-30-14   3:56p
    VERSIONS TXT     8490   3-03-18   9:59a
    VIDEO    ASM    66337   8-31-14   9:35a
    XTLINK             79   8-29-14   1:19p
           16 File(s)     24576 bytes free

### 5160V1 Notes (from PC DOS Retro) 

    IBM PC XT BIOS dated 11/08/82 is 5964 lines based on the BIOS listings in the IBM PC XT Technical Reference dated April 1983.
    The BIOS was likely built using the Intel ASM86 Macro Assembler V2.0.
    
    This BIOS must be built with ASM86, several operand constructs are used which MASM does not recognize.
    
    Line 233:  CODE SEGMENT AT 0F000H
               to build with LINK remove the 'AT 0F000H'
               LINK will not generate code for 'AT address' segments
    Several lines in the listings are invalid:
    Line 937:  MOV WORD PRT(1CH*4),OFFSET BLINK_INT
    Line 3384: JMP WORD PRT CS:[SI+OFFSET M1]
    Line 4572: MOV ES:[DI+2000H ,AH]
    Line 5473: MOV DATA_AREA[OFFSET INTR_FLAG]
    
    LINK will generate an .EXE file with 1 relocation. This is due to a far jump to segment F000.
    Unfortunately EXE2BIN will not process the EXE file as it has more than 65278 bytes of code.
    
    The VECTOR segment data should be entered at FFF0 as follows:
    EA 5B E0 00 F0 31 31 2F 30 38 2F 38 32 FF FE 28

### 5160V2 Notes (from PC DOS Retro)

    IBM PC XT BIOS dated 01/10/86 based on the BIOS listings in the IBM PC XT Technical Reference dated March 1986.
    The BIOS was originally built using IBM MASM 2.0.
    
    Notes:
    - FILL.ASM was added to properly link the BIOS, this defines the area between the end of the main BIOS code and the ORGS data at E000.
    
    Additional files:
    FILL.ASM - see above
    XTLINK - linker response file
    EXE2BIN - DEBUG script to convert the EXE file to a BIN file
    
    Steps to build the PC XT BIOS:
    for %a in (*.asm) do masm %a;
    link @xtlink
    debug < exe2bin

### 5160V3 Notes (from PC DOS Retro)

    IBM PC XT BIOS dated 05/09/86 based on the BIOS listings in the IBM PC XT Technical Reference dated March 1986 and code disassembly.
    The BIOS was originally built using IBM MASM 2.0.
    
    Notes:
    - FILL.ASM was added to properly link the BIOS, this defines the area between the end of the main BIOS code and the ORGS data at E000.
    
    Additional files:
    FILL.ASM - see above
    XTLINK - linker response file
    EXE2BIN - DEBUG script to convert the EXE file to a BIN file
    
    Steps to build the PC XT BIOS:
    for %a in (*.asm) do masm %a;
    link @xtlink
    debug < exe2bin
