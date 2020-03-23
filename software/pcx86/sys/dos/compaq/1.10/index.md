---
layout: page
title: COMPAQ MS-DOS 1.10
permalink: /software/pcx86/sys/dos/compaq/1.10/
redirect_from: /disks/pcx86/dos/compaq/1.10/
machines:
  - id: compaq-portable-128kb
    type: pcx86
    config: /configs/pcx86/xml/machine/compaq/portable/vdu/128kb/machine.xml
    autoType: \r\r$20demo\r
---

Released in 1983 by COMPAQ Computer Corp, this version of MS-DOS reports itself as:

	The COMPAQ Personal Computer DOS
	Version 1.10
	
	
	(C) Copyright COMPAQ Computer Corp. 1982
	(C) Copyright Microsoft 1981, 82

[Wikipedia](https://en.wikipedia.org/wiki/Compaq_Portable), as of September 2018, claimed that:

    The first Portables used Compaq DOS 1.13, essentially identical to PC DOS 1.10 except for having a
    standalone BASIC that did not require the IBM PC's ROM Cassette BASIC....

but all the evidence we have suggests that COMPAQ MS-DOS 1.10 was the first version of MS-DOS
that COMPAQ shipped.  In fact, we have never seen a copy of COMPAQ MS-DOS 1.13.  The only other 1.xx releases
from COMPAQ we are aware of are [1.11](../1.11/) and [1.12](../1.12/).

To learn more about this double-sided 320Kb diskette, see the
[Directory Listing](#directory-of-compaq-ms-dos-110-rev-b) and [Boot Sector](#compaq-ms-dos-110-boot-sector) below.
We also have copies of the original [COMPAQ MS-DOS 1.10 Documentation](#documents).

{% include machine.html id="compaq-portable-128kb" %}

### Directory of COMPAQ MS-DOS 1.10 Rev B

	 Volume in drive A has no label

	Directory of A:\

	IOSYS    COM      1998 01-20-83  12:00p
	MSDOS    COM      6136 01-20-83  12:00p
	COMMAND  COM      4959 01-20-83  12:00p
	LINK     EXE     41856 01-20-83  12:00p
	EDLIN    COM      2432 01-20-83  12:00p
	SYS      COM       645 01-20-83  12:00p
	DEBUG    COM      6619 01-20-83  12:00p
	BASIC    COM       502 01-20-83  12:00p
	BASICA   COM       500 01-20-83  12:00p
	FORMAT   COM      3296 01-20-83  12:00p
	EXE2BIN  EXE      1280 01-20-83  12:00p
	DISKCOPY COM      1812 01-20-83  12:00p
	DISKCOMP COM      1291 01-20-83  12:00p
	MODE     COM      1800 01-20-83  12:00p
	CHKDSK   COM      1720 01-20-83  12:00p
	COMP     COM      1484 01-20-83  12:00p
	WORDS             1242 01-20-83  12:00p
	DEMO     BAT        14 01-20-83  12:00p
	DEMO     BAS      5888 01-20-83  12:00p
	DEMO1    BAS     15872 01-20-83  12:00p
	DEMO2    BAS     17536 01-20-83  12:00p
	DEMO3    BAS     21632 01-20-83  12:00p
	DEMO4    BAS      7424 01-20-83  12:00p
	JUGGLER  DAT     16128 01-20-83  12:00p
	USA      DAT     16128 01-20-83  12:00p
	BASICA   EXE     53760 02-08-83  12:00p
	TEST     EXE     18560 01-20-83  12:00p
	       27 file(s)     252514 bytes

	Total files listed:
	       27 file(s)     252514 bytes
	                       56320 bytes free

![COMPAQ MS-DOS 1.10B Diskette]({{ site.software.diskettes.server }}/pcx86/sys/dos/compaq/1.10/COMPAQ-DOS110B.jpg)

One curiosity regarding this disk are the BASIC files.  **BASIC.COM** and **BASICA.COM** are nothing more than
tiny programs to load **BASICA.EXE**, a stand-alone version of BASIC that doesn't require any BASIC ROMs.  And
**BASICA.EXE** reports a version number that differs from the DOS version: 

	The COMPAQ Personal Computer BASIC
	Version 1.12
	(C) Copyright COMPAQ Computer Corp. 1982

### COMPAQ MS-DOS 1.10 Boot Sector

The boot sector of the COMPAQ MS-DOS 1.10 disk image contains the following bytes:

	00000000  fa bc e7 01 b8 c0 07 8e  d0 fb 8e d8 8e c0 33 c0  |..............3.|
	00000010  cd 13 b8 01 02 bb 00 02  b9 04 00 33 d2 e8 8b 00  |...........3....|
	00000020  eb 1c bb da 00 8a 07 3c  24 74 0c 53 b4 0e bb 07  |.......<$t.S....|
	00000030  00 cd 10 5b 43 eb ee 33  c0 cd 16 eb c3 c3 fc 8b  |...[C..3........|
	00000040  f3 bf c4 00 b9 0b 00 f3  a6 75 d7 83 c6 15 b9 0b  |.........u......|
	00000050  00 f3 a6 75 cd b8 01 02  bb 00 02 b9 02 00 33 d2  |...u..........3.|
	00000060  e8 48 00 8a 27 80 fc fe  be 26 01 74 0a 80 fc ff  |.H..'....&.t....|
	00000070  74 02 eb ae be 3c 01 b8  60 00 50 07 8b 04 33 db  |t....<..`.P...3.|
	00000080  8b 4c 02 8b 54 04 e8 22  00 8b 44 06 03 5c 08 8b  |.L..T.."..D..\..|
	00000090  4c 0a 8b 54 0c e8 13 00  8b 44 0e 03 5c 10 8b 4c  |L..T.....D..\..L|
	000000a0  12 8b 54 14 e8 04 00 ff  2e 52 01 bf 05 00 57 50  |..T......R....WP|
	000000b0  cd 13 72 03 58 58 c3 33  c0 cd 13 58 5f 4f 75 ee  |..r.XX.3...X_Ou.|
	000000c0  58 e9 5e ff 49 4f 53 59  53 20 20 20 43 4f 4d 4d  |X.^.IOSYS   COMM|
	000000d0  53 44 4f 53 20 20 20 43  4f 4d 0a 0d 4e 6f 6e 2d  |SDOS   COM..Non-|
	000000e0  53 79 73 74 65 6d 20 64  69 73 6b 20 6f 72 20 64  |System disk or d|
	000000f0  69 73 6b 20 65 72 72 6f  72 0a 0d 52 65 70 6c 61  |isk error..Repla|
	00000100  63 65 20 61 6e 64 20 73  74 72 69 6b 65 20 61 6e  |ce and strike an|
	00000110  79 20 6b 65 79 20 77 68  65 6e 20 72 65 61 64 79  |y key when ready|
	00000120  0a 0d 24 47 41 53 01 02  08 00 00 00 08 02 00 02  |..$GAS..........|
	00000130  01 01 00 00 08 02 00 10  01 02 00 00 06 02 03 00  |................|
	00000140  00 01 08 02 00 0c 01 01  00 00 03 02 00 10 01 01  |................|
	00000150  00 01 00 00 60 00 28 43  29 43 6f 70 79 72 69 67  |....`.(C)Copyrig|
	00000160  68 74 20 43 4f 4d 50 41  51 20 43 6f 6d 70 75 74  |ht COMPAQ Comput|
	00000170  65 72 20 43 6f 72 70 6f  72 61 74 69 6f 6e 20 31  |er Corporation 1|
	00000180  39 38 32 00 00 00 00 00  00 00 00 00 00 00 00 00  |982.............|
	00000190  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001a0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001b0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001e0  00 00 00 00 00 00 00 e7  01 00 00 00 00 00 00 00  |................|
	000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|

Unlike most DOS boot sectors, this boot sector doesn't start with an Intel x86 JMP instruction.
Let's take a look at the code, using the PCjs Debugger to stop at the first instruction:

	>> bp 0:7c00
	bp &0000:7C00 set
	>> g
	bp &0000:7C00 hit
	stopped (5153504 opcodes, 42808074 cycles, 9014 ms, 4749065 hz)
	AX=0000 BX=7C00 CX=0004 DX=0000 SP=0100 BP=E4B7 SI=0000 DI=0044 
	SS=0030 DS=0040 ES=0000 PS=F296 V0 D0 I1 T0 S1 Z0 A1 P1 C0 
	&0000:7C00 FA              CLI     
	>> u 7c00
	&0000:7C00 FA              CLI     
	&0000:7C01 BCE701          MOV      SP,01E7
	&0000:7C04 B8C007          MOV      AX,07C0
	&0000:7C07 8ED0            MOV      SS,AX
	&0000:7C09 FB              STI
	
At this point, the stack has been set to an unused region INSIDE the boot sector, because
07C0:01E7 is the same as 0000:7C00+01E7 or 0000:7DE7.  This puts a fairly low limit on stack
usage: as more stack is used, the COMPAQ copyright string will be trashed first, then boot
sector data, then boot sector code.

Curiously, the value 01E7 is also stored at 07C0:01E7.  Also curious is the choice of an ODD
address for the stack (although, for the 8088, this presumably didn't affect performance).

After the next two instructions, all of DS:0, ES:0, and SS:0 point to the beginning of the
boot sector (just like CS:7C00):

	&0000:7C0A 8ED8            MOV      DS,AX
	&0000:7C0C 8EC0            MOV      ES,AX

This resets the drive:

	&0000:7C0E 33C0            XOR      AX,AX           ; perform a drive reset
	&0000:7C10 CD13            INT      13

Next, read 1 sector (the 4th sector, which is the first sector of the directory) into memory
immediately above the boot sector (07C0:0200):

	&0000:7C12 B80102          MOV      AX,0201
	&0000:7C15 BB0002          MOV      BX,0200
	&0000:7C18 B90400          MOV      CX,0004
	&0000:7C1B 33D2            XOR      DX,DX
	&0000:7C1D E88B00          CALL     7CAB            ; read the disk
	&0000:7C20 EB1C            JMP      7C3E

Next, the error handler and restart sequence:

	&0000:7C22 BBDA00          MOV      BX,00DA
	&0000:7C25 8A07            MOV      AL,[BX]
	&0000:7C27 3C24            CMP      AL,24
	&0000:7C29 740C            JZ       7C37
	&0000:7C2B 53              PUSH     BX
	&0000:7C2C B40E            MOV      AH,0E
	&0000:7C2E BB0700          MOV      BX,0007
	&0000:7C31 CD10            INT      10
	&0000:7C33 5B              POP      BX
	&0000:7C34 43              INC      BX
	&0000:7C35 EBEE            JMP      7C25
	&0000:7C37 33C0            XOR      AX,AX
	&0000:7C39 CD16            INT      16
	&0000:7C3B EBC3            JMP      7C00            ; start over
	&0000:7C3D C3              RET                      ; unreachable RET?
	     
Here's the error message (setting DS:BX to 07C0:00DA references the same memory as CS:7CDA):

	>> db cs:7cda cs:7d22
	&0000:7CDA  0A 0D 4E 6F 6E 2D 53 79-73 74 65 6D 20 64 69 73  ..Non-System dis
	&0000:7CEA  6B 20 6F 72 20 64 69 73-6B 20 65 72 72 6F 72 0A  k or disk error.
	&0000:7CFA  0D 52 65 70 6C 61 63 65-20 61 6E 64 20 73 74 72  .Replace and str
	&0000:7D0A  69 6B 65 20 61 6E 79 20-6B 65 79 20 77 68 65 6E  ike any key when
	&0000:7D1A  20 72 65 61 64 79 0A 0D-24                        ready..$

Next, we have the code to validate the directory contents:

	&0000:7C3E FC              CLD     
	&0000:7C3F 8BF3            MOV      SI,BX
	&0000:7C41 BFC400          MOV      DI,00C4         ; ES:DI -> 7C0:C4 (aka 0:7CC4)
	&0000:7C44 B90B00          MOV      CX,000B
	&0000:7C47 F3              REPZ    
	&0000:7C48 A6              CMPSB   
	&0000:7C49 75D7            JNZ      7C22            ; if first DIRENTRY was not "IOSYS.COM", jump to error handler
	&0000:7C4B 83C615          ADD      SI,0015
	&0000:7C4E B90B00          MOV      CX,000B
	&0000:7C51 F3              REPZ    
	&0000:7C52 A6              CMPSB   
	&0000:7C53 75CD            JNZ      7C22            ; if second DIRENTRY was not "IOSYS.COM", jump to error handler
	&0000:7C55 B80102          MOV      AX,0201
	&0000:7C58 BB0002          MOV      BX,0200
	&0000:7C5B B90200          MOV      CX,0002
	&0000:7C5E 33D2            XOR      DX,DX
	&0000:7C60 E84800          CALL     7CAB            ; read 1st FAT sector

At this point, the directory sector is gone, and all this code did with it was verify the names of
the first two entries.  It did not examine or record their starting cluster numbers.  And in the FAT
sector just read, only one byte (the first byte) will be examined next: the media ID byte. 

Further reading will rely on on two hard-coded tables inside the boot sector: one table at DS:126 (CS:7D26)
if the FAT media ID byte is 0xFE (160Kb diskette), or another table at DS:13C (CS:7D3C) if the FAT media ID
byte is 0xFF (320Kb diskette).  If the FAT media ID byte is neither, off to the error handler we go.

Here's the table for the 160Kb diskette:

	>> dw cs:7d26 l11.
	&0000:7D26  0201  0008  0000  0208  0200  0101  0000  0208   ................
	&0000:7D36  1000  0201  0000                                 ......

and here's the table for the 320Kb diskette:

	>> dw cs:7d3c l11.
	&0000:7D3C  0206  0003  0100  0208  0C00  0101  0000  0203   ................
	&0000:7D4C  1000  0101  0100                                 ......

These tables are then followed by a DWORD jump address:

	>> dw cs:7d52 l2
	&0000:7D52  0000  0060                                       ..`.

which means that the "JMP FAR [0152]" instruction will jump to 60:0 after the reads are complete.

	&0000:7C63 8A27            MOV      AH,[BX]
	&0000:7C65 80FCFE          CMP      AH,FE
	&0000:7C68 BE2601          MOV      SI,0126
	&0000:7C6B 740A            JZ       7C77
	&0000:7C6D 80FCFF          CMP      AH,FF
	&0000:7C70 7402            JZ       7C74
	&0000:7C72 EBAE            JMP      7C22
	&0000:7C74 BE3C01          MOV      SI,013C
	&0000:7C77 B86000          MOV      AX,0060
	&0000:7C7A 50              PUSH     AX
	&0000:7C7B 07              POP      ES
	&0000:7C7C 8B04            MOV      AX,[SI]
	&0000:7C7E 33DB            XOR      BX,BX
	&0000:7C80 8B4C02          MOV      CX,[SI+02]
	&0000:7C83 8B5404          MOV      DX,[SI+04]
	&0000:7C86 E82200          CALL     7CAB
	&0000:7C89 8B4406          MOV      AX,[SI+06]
	&0000:7C8C 035C08          ADD      BX,[SI+08]
	&0000:7C8F 8B4C0A          MOV      CX,[SI+0A]
	&0000:7C92 8B540C          MOV      DX,[SI+0C]
	&0000:7C95 E81300          CALL     7CAB
	&0000:7C98 8B440E          MOV      AX,[SI+0E]
	&0000:7C9B 035C10          ADD      BX,[SI+10]
	&0000:7C9E 8B4C12          MOV      CX,[SI+12]
	&0000:7CA1 8B5414          MOV      DX,[SI+14]
	&0000:7CA4 E80400          CALL     7CAB
	&0000:7CA7 FF2E5201        JMP      FAR [0152]

The final chunk of code is the disk read interface, which reads AL sector(s) identified by the CHS values in CX:DX
into ES:BX, using DI as a retry counter:

	&0000:7CAB BF0500          MOV      DI,0005
	&0000:7CAE 57              PUSH     DI
	&0000:7CAF 50              PUSH     AX
	&0000:7CB0 CD13            INT      13
	&0000:7CB2 7203            JC       7CB7
	&0000:7CB4 58              POP      AX
	&0000:7CB5 58              POP      AX
	&0000:7CB6 C3              RET     
	&0000:7CB7 33C0            XOR      AX,AX
	&0000:7CB9 CD13            INT      13
	&0000:7CBB 58              POP      AX
	&0000:7CBC 5F              POP      DI
	&0000:7CBD 4F              DEC      DI
	&0000:7CBE 75EE            JNZ      7CAE                                            
	&0000:7CC0 58              POP      AX              ; retry count exhausted
	&0000:7CC1 E95EFF          JMP      7C22            ; jump to PRINT function

And then we have the assorted strings and tables:

	>> db 7cc4 l13c
	&7CC4  49 4F 53 59 53 20 20 20-43 4F 4D 4D 53 44 4F 53  IOSYS   COMMSDOS
	&7CD4  20 20 20 43 4F 4D 0A 0D-4E 6F 6E 2D 53 79 73 74     COM..Non-Syst
	&7CE4  65 6D 20 64 69 73 6B 20-6F 72 20 64 69 73 6B 20  em disk or disk 
	&7CF4  65 72 72 6F 72 0A 0D 52-65 70 6C 61 63 65 20 61  error..Replace a
	&7D04  6E 64 20 73 74 72 69 6B-65 20 61 6E 79 20 6B 65  nd strike any ke
	&7D14  79 20 77 68 65 6E 20 72-65 61 64 79 0A 0D 24 47  y when ready..$G
	&7D24  41 53 01 02 08 00 00 00-08 02 00 02 01 01 00 00  AS..............
	&7D34  08 02 00 10 01 02 00 00-06 02 03 00 00 01 08 02  ................
	&7D44  00 0C 01 01 00 00 03 02-00 10 01 01 00 01 00 00  ................
	&7D54  60 00 28 43 29 43 6F 70-79 72 69 67 68 74 20 43  `.(C)Copyright C
	&7D64  4F 4D 50 41 51 20 43 6F-6D 70 75 74 65 72 20 43  OMPAQ Computer C
	&7D74  6F 72 70 6F 72 61 74 69-6F 6E 20 31 39 38 32 00  orporation 1982.
	&7D84  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7D94  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DA4  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DB4  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DC4  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DD4  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DE4  00 00 00 E7 01 00 00 00-00 00 00 00 00 00 00 00  ................
	&7DF4  00 00 00 00 00 00 00 00-00 00 00 00

In terms of raw code (90 instructions), it's shorter than both the
[PC DOS 1.00 Boot Sector](/software/pcx86/sys/dos/ibm/1.00/debugger/#pc-dos-100-boot-sector) (99 instructions) and
[PC DOS 1.10 Boot Sector](/software/pcx86/sys/dos/ibm/1.10/debugger/#pc-dos-110-boot-sector) (116 instructions),
because it uses tables to describe both the different disk formats *and* the discrete read operations,
relieving the code from dealing with head and track size calculations.

It's arguably an improvement over the [PC DOS 1.10 Boot Sector](/software/pcx86/sys/dos/ibm/1.10/debugger/#pc-dos-110-boot-sector),
because it didn't need to be altered to support both 160Kb and 320Kb diskettes.  On the other hand, that flexibility
also makes it slightly slower to boot, because it must read the first FAT sector to determine the diskette format.

Finally, notice the letters `GAS` in the boot sector at offset 0x7D23.  Presumably, they're the initials of
author, and somewhat less conspicuous and more modest than the `Robert O'Rear` signature in the
[PC DOS 1.00 Boot Sector](/software/pcx86/sys/dos/ibm/1.00/debugger/#pc-dos-100-boot-sector).

### Mounting the COMPAQ MS-DOS 1.10 Diskette

Note that the disk cannot be mounted by a modern operating system (e.g., macOS), because it lacks a proper
BPB at offset 0x000B.

To resolve the mounting problem, one solution is to use the [DiskDump]({{ site.github.pages }}/tools/diskdump/) utility's *--forceBPB*
option, which creates a mountable disk image by making the following boot sector modifications:

	00000000  eb fe 90 50 43 4a 53 2e  4f 52 47 00 02 02 01 00  |...PCJS.ORG.....|
	00000010  02 70 00 80 02 ff 01 00  08 00 02 00 00 00 00 00  |.p..............|
	00000020  00 00 00 00 00 8a 07 3c  24 74 0c 53 b4 0e bb 07  |.......<$t.S....|

The following (hex) byte ranges are modified:

- 0000-0002: 2-byte Intel x86 JMP instruction followed by 1-byte x86 NOP
- 0003-000A: 8-byte OEM signature string (we use the fake "PCJS.ORG" OEM signature)
- 000B-001D: 19-byte BPB describing a 320Kb diskette image with 8 sectors/track and 2 heads

Ordinarily, only the 19-byte BPB would be required, but it turns out that macOS won't mount the disk image
unless the boot sector *also* begins with an Intel x86 JMP instruction.  So the *--forceBPB* option updates all
30 bytes at the beginning of the boot sector, making the disk image mountable, but also rendering it unbootable --
which is OK if all you want to do is mount the image and copy files from it.

One common misconception is that the last word of a mountable boot sector must also contain 0xAA55 (ie, the low
byte at offset 0x1FE must be 0x55 and the high byte at offset 0x1FF must be 0xAA).  This claim is often backed up
by pointing out that some (newer) ROMs will not boot from a disk if that signature is missing.

However, those ROMs check only *hard disk* boot sectors for the 0xAA55 signature, not diskettes, and hard disk support
didn't exist until DOS version 2.0, when BPBs and the 0xAA55 boot sector signature were introduced.

Here's how you can use [DiskDump]({{ site.github.pages }}/tools/diskdump/) to a mountable disk.  Note that *two* DiskDump commands are
required, because BPB modification only happens when converting an IMG file to a JSON file; the second DiskDump command
converts the modified JSON back into an IMG file.

	diskdump --disk=archive/COMPAQ-DOS110B-ORIG.img --format=json --forceBPB --output=COMPAQ-DOS110B.json
	warning: BPB has been updated
	327680-byte disk image saved to COMPAQ-DOS110B-BPB.json
	
	diskdump --disk=COMPAQ-DOS110B.json --format=img --output=archive/COMPAQ-DOS110B.img
	327680-byte disk image saved to COMPAQ-DOS110B-BPB.img

The next series of commands make the image read-only (otherwise, macOS may create hidden files inside the image after
mounting it), mount the image as `/Volumes/Untitled`, and then copy the contents of the image to a folder named `Disk`:

	chmod -w archive/COMPAQ-DOS110B.img
	open archive/COMPAQ-DOS110B.img
	cp -pr /Volumes/Untitled Disk

{% include gallery/documents.html %}
