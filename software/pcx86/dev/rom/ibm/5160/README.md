---
layout: page
title: IBM PC XT (Model 5160) BIOS Sources
permalink: /software/pcx86/dev/rom/ibm/5160/
redirect_from: /disks/pcx86/roms/ibm/5160/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    debugger: true
    config: /machines/pcx86/ibm/5160/ega/640kb/debugger/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: IBM PC XT BIOS Source (V1)
    autoStart: true
---

PCjs has created and archived a collection IBM PC XT ROM BIOS diskettes.  Their contents are thanks to the [PC DOS Retro](https://pcdosretro.github.io) website.  [Directory Listings](#directory-of-ibm-pc-xt-bios-source-v1) and [Version Notes](#5160v1-notes-from-pc-dos-retro) are provided below.

{% include machine.html id="ibm5160-msdos320" %}

### Directory of IBM PC XT BIOS Sources (V1)

     Volume in drive A is 5160V1
     Directory of A:\

    5160V1   TXT       980   3-27-20   3:00p
    README   TXT      3460   3-27-20   3:00p
    VERSIONS TXT      8490   3-27-20   3:00p
    XTBIOS   ASM    184626   3-27-20   3:00p
            4 file(s)     197556 bytes
                          122880 bytes free

### Directory of IBM PC XT BIOS Sources (V2)

     Volume in drive A is 5160V2
     Directory of A:\

    5160V2   TXT       542   3-27-20   3:00p
    BIOS1    ASM      9426   3-27-20   3:00p
    DSEG     INC      8182   3-27-20   3:00p
    DSKETTE  ASM     85367   3-27-20   3:00p
    EXE2BIN             81   3-27-20   3:00p
    FILL     ASM       123   3-27-20   3:00p
    HEADER   ASM      3633   3-27-20   3:00p
    KEYBRD   ASM     31888   3-27-20   3:00p
    POST     ASM     87861   3-27-20   3:00p
    POSTEQU  INC      9421   3-27-20   3:00p
    PRT      ASM      5498   3-27-20   3:00p
    README   TXT      3460   3-27-20   3:00p
    RS232    ASM      7834   3-27-20   3:00p
    VERSIONS TXT      8490   3-27-20   3:00p
    VIDEO    ASM     66334   3-27-20   3:00p
    XTLINK              79   3-27-20   3:00p
           16 file(s)     328219 bytes
                           24576 bytes free

### Directory of IBM PC XT BIOS Sources (V3)

     Volume in drive A is 5160V3
     Directory of A:\

    5160V3   TXT       563   3-27-20   3:00p
    BIOS1    ASM      9426   3-27-20   3:00p
    DSEG     INC      8182   3-27-20   3:00p
    DSKETTE  ASM     85323   3-27-20   3:00p
    EXE2BIN             81   3-27-20   3:00p
    FILL     ASM       123   3-27-20   3:00p
    HEADER   ASM      3624   3-27-20   3:00p
    KEYBRD   ASM     32034   3-27-20   3:00p
    POST     ASM     87457   3-27-20   3:00p
    POSTEQU  INC      9421   3-27-20   3:00p
    PRT      ASM      5498   3-27-20   3:00p
    README   TXT      3460   3-27-20   3:00p
    RS232    ASM      7834   3-27-20   3:00p
    VERSIONS TXT      8490   3-27-20   3:00p
    VIDEO    ASM     66337   3-27-20   3:00p
    XTLINK              79   3-27-20   3:00p
           16 file(s)     327932 bytes
                           24576 bytes free

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
