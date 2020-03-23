---
layout: page
title: IBM PC DOS 1.10 with PCjs Debugger
permalink: /software/pcx86/sys/dos/ibm/1.10/debugger/
redirect_from: /disks/pcx86/dos/ibm/1.10/
machines:
  - id: ibm5150-256k
    type: pcx86
    config: /configs/pcx86/xml/machine/5150/mda/256kb/debugger/machine.xml
    floppyDrives: '[{heads:2},{heads:2}]'
    autoMount:
      A:
        name: PC DOS 1.10
      B:
        name: None
    autoType: $date\r$time\r
---

{% include machine.html id="ibm5150-256k" %}

### PC DOS 1.10 Boot Sector

The boot sector of the PC DOS 1.10 disk image contains the following bytes:

	00000000  eb 27 90 08 00 14 00 00  00 00 00 00 00 00 00 00  |.'..............|
	00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	00000020  00 00 00 00 00 00 00 cd  19 fa 8c c8 8e d8 33 d2  |..............3.|
	00000030  8e d2 bc 00 7c fb b8 60  00 8e d8 8e c0 33 d2 8b  |....|..`.....3..|
	00000040  c2 cd 13 72 69 e8 85 00  72 dd 2e 83 3e 03 7c 08  |...ri...r...>.|.|
	00000050  74 06 2e c6 06 64 7d 02  bb 00 00 2e 8b 0e 03 7c  |t....d}........||
	00000060  51 b0 09 2a c1 b4 00 8b  f0 56 33 d2 33 c0 8a c5  |Q..*.....V3.3...|
	00000070  2e f6 36 64 7d 8a e8 8a  f4 8b c6 b4 02 cd 13 72  |..6d}..........r|
	00000080  2d 5e 59 2e 29 36 05 7c  74 1f 8b c6 2e f7 26 65  |-^Y.)6.|t.....&e|
	00000090  7d 03 d8 fe c5 b1 01 51  be 08 00 2e 3b 36 05 7c  |}......Q....;6.||
	000000a0  7c 05 2e 8b 36 05 7c eb  c0 ea 00 00 60 00 be 67  ||...6.|.....`..g|
	000000b0  7d e8 02 00 eb fe 32 ff  2e ac 24 7f 74 0b 56 b4  |}.....2...$.t.V.|
	000000c0  0e bb 07 00 cd 10 5e eb  ef c3 e9 33 ff bb 00 00  |......^....3....|
	000000d0  b9 04 00 b8 01 02 cd 13  1e 72 33 8c c8 8e d8 bf  |.........r3.....|
	000000e0  00 00 b9 0b 00 26 80 0d  20 26 80 4d 20 20 47 e2  |.....&.. &.M  G.|
	000000f0  f4 bf 00 00 be 8b 7d b9  0b 00 fc f3 a6 75 0f bf  |......}......u..|
	00000100  20 00 be 97 7d b9 0b 00  f3 a6 75 02 1f c3 be 1b  | ...}.....u.....|
	00000110  7d e8 a2 ff b4 00 cd 16  1f f9 c3 0d 0a 4e 6f 6e  |}............Non|
	00000120  2d 53 79 73 74 65 6d 20  64 69 73 6b 20 6f 72 20  |-System disk or |
	00000130  64 69 73 6b 20 65 72 72  6f 72 0d 0a 52 65 70 6c  |disk error..Repl|
	00000140  61 63 65 20 61 6e 64 20  73 74 72 69 6b 65 20 61  |ace and strike a|
	00000150  6e 79 20 6b 65 79 20 77  68 65 6e 20 72 65 61 64  |ny key when read|
	00000160  79 0d 0a 00 01 00 02 0d  0a 44 69 73 6b 20 42 6f  |y........Disk Bo|
	00000170  6f 74 20 66 61 69 6c 75  72 65 0d 0a 00 4d 69 63  |ot failure...Mic|
	00000180  72 6f 73 6f 66 74 2c 49  6e 63 20 69 62 6d 62 69  |rosoft,Inc ibmbi|
	00000190  6f 20 20 63 6f 6d 30 69  62 6d 64 6f 73 20 20 63  |o  com0ibmdos  c|
	000001a0  6f 6d 30 05 c6 06 77 2f  ff 83 7e fc 00 75 0b 80  |om0...w/..~..u..|
	000001b0  7e f7 3b 75 05 c6 06 76  2f ff 89 ec 5d ca 04 00  |~.;u...v/...]...|
	000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001e0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|

This is also the boot sector as it appears on any other single-sided 160Kb diskette formatted by PC DOS 1.10.
However, PC DOS 1.10 added supported for a second format: double-sided 320Kb diskettes.  And on those larger diskettes,
the boot sector is slightly different:

	1c1
	< 00000000  eb 27 90 08 00 14 00 00  00 00 00 00 00 00 00 00  |.'..............|
	---
	> 00000000  eb 27 90 03 01 14 00 00  00 00 00 00 00 00 00 00  |.'..............|

The bytes at offset 0x0003 (0x7C03 when the boot sector is loaded into memory) contain the initial sector
and head numbers of IBMBIO.COM.  On a 160Kb diskette, the first data sector is at sector #8 and head #0, but since
a 320Kb diskette is allocated a larger root directory (7 sectors instead of 4), that pushes the first data sector
out to sector #3 and head #1.  The total number of sectors to read (0x14) remains the same as PC DOS 1.00, but that
value is now stored at offset 0x0005 (0x7C05) instead of 0x0002 (0x7C02).

Interestingly, the [COMPAQ MS-DOS 1.10 Boot Sector](/software/pcx86/sys/dos/compaq/1.10/#compaq-ms-dos-110-boot-sector)
is completely different from all PC DOS 1.x boot sectors.  The COMPAQ boot sector supports both 160Kb and 320Kb
formats with less code and without requiring "patches", although that flexibility did require reading the first
FAT sector, which PC DOS 1.x boot sectors did not do.

Using the PCjs Debugger, we can examine the boot sector in its native environment:

	bp &0000:7C00 hit
	stopped
	AX=0000 BX=7C00 CX=0004 DX=0000 SP=0100 BP=E4B7 SI=0000 DI=0044 
	SS=0030 DS=0040 ES=0000 PS=F296 V0 D0 I1 T0 S1 Z0 A1 P1 C0 
	&0000:7C00 EB27            JMP      7C29
	
	>> db 7c00 l200
	&0000:7C00  EB 27 90 08 00 14 00 00-00 00 00 00 02 01 01 00  .'..............
	&0000:7C10  02 40 00 40 01 FE 01 00-08 00 01 00 00 00 00 00  .@.@............
	&0000:7C20  00 00 00 00 00 00 00 CD-19 FA 8C C8 8E D8 33 D2  ..............3.
	&0000:7C30  8E D2 BC 00 7C FB B8 60-00 8E D8 8E C0 33 D2 8B  ....|..`.....3..
	&0000:7C40  C2 CD 13 72 69 E8 85 00-72 DD 2E 83 3E 03 7C 08  ...ri...r...>.|.
	&0000:7C50  74 06 2E C6 06 64 7D 02-BB 00 00 2E 8B 0E 03 7C  t....d}........|
	&0000:7C60  51 B0 09 2A C1 B4 00 8B-F0 56 33 D2 33 C0 8A C5  Q..*.....V3.3...
	&0000:7C70  2E F6 36 64 7D 8A E8 8A-F4 8B C6 B4 02 CD 13 72  ..6d}..........r
	&0000:7C80  2D 5E 59 2E 29 36 05 7C-74 1F 8B C6 2E F7 26 65  -^Y.)6.|t.....&e
	&0000:7C90  7D 03 D8 FE C5 B1 01 51-BE 08 00 2E 3B 36 05 7C  }......Q....;6.|
	&0000:7CA0  7C 05 2E 8B 36 05 7C EB-C0 EA 00 00 60 00 BE 67  |...6.|.....`..g
	&0000:7CB0  7D E8 02 00 EB FE 32 FF-2E AC 24 7F 74 0B 56 B4  }.....2...$t.V.
	&0000:7CC0  0E BB 07 00 CD 10 5E EB-EF C3 E9 33 FF BB 00 00  ......^....3....
	&0000:7CD0  B9 04 00 B8 01 02 CD 13-1E 72 33 8C C8 8E D8 BF  .........r3.....
	&0000:7CE0  00 00 B9 0B 00 26 80 0D-20 26 80 4D 20 20 47 E2  .....&.. &.M  G.
	&0000:7CF0  F4 BF 00 00 BE 8B 7D B9-0B 00 FC F3 A6 75 0F BF  ......}......u..
	&0000:7D00  20 00 BE 97 7D B9 0B 00-F3 A6 75 02 1F C3 BE 1B   ...}.....u.....
	&0000:7D10  7D E8 A2 FF B4 00 CD 16-1F F9 C3 0D 0A 4E 6F 6E  }............Non
	&0000:7D20  2D 53 79 73 74 65 6D 20-64 69 73 6B 20 6F 72 20  -System disk or 
	&0000:7D30  64 69 73 6B 20 65 72 72-6F 72 0D 0A 52 65 70 6C  disk error..Repl
	&0000:7D40  61 63 65 20 61 6E 64 20-73 74 72 69 6B 65 20 61  ace and strike a
	&0000:7D50  6E 79 20 6B 65 79 20 77-68 65 6E 20 72 65 61 64  ny key when read
	&0000:7D60  79 0D 0A 00 01 00 02 0D-0A 44 69 73 6B 20 42 6F  y........Disk Bo
	&0000:7D70  6F 74 20 66 61 69 6C 75-72 65 0D 0A 00 4D 69 63  ot failure...Mic
	&0000:7D80  72 6F 73 6F 66 74 2C 49-6E 63 20 69 62 6D 62 69  rosoft,Inc ibmbi
	&0000:7D90  6F 20 20 63 6F 6D 30 69-62 6D 64 6F 73 20 20 63  o  com0ibmdos  c
	&0000:7DA0  6F 6D 30 05 C6 06 77 2F-FF 83 7E FC 00 75 0B 80  om0...w/..~..u..
	&0000:7DB0  7E F7 3B 75 05 C6 06 76-2F FF 89 EC 5D CA 04 00  ~.;u...v/...]...
	&0000:7DC0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DD0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DE0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DF0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	
NOTE: PCjs adds a BPB to the boot sector, which is why the first 32 bytes of the boot sector
appear slightly different from the original [dump](#pc-dos-110-boot-sector) above.  The addition of
a BPB makes the disk image mountable by modern operating systems and does not otherwise affect the
operation of the boot sector or any of the code below.

	>> tr
	AX=0000 BX=7C00 CX=0004 DX=0000 SP=0100 BP=E4B7 SI=0000 DI=0044 
	SS=0030 DS=0040 ES=0000 PS=F296 V0 D0 I1 T0 S1 Z0 A1 P1 C0 
	&0000:7C29 FA              CLI                          ;cycles=15
	>> u 7c2a 7d1a
	&0000:7C2A 8CC8            MOV      AX,CS
	&0000:7C2C 8ED8            MOV      DS,AX
	&0000:7C2E 33D2            XOR      DX,DX
	&0000:7C30 8ED2            MOV      SS,DX
	&0000:7C32 BC007C          MOV      SP,7C00
	&0000:7C35 FB              STI     
	&0000:7C36 B86000          MOV      AX,0060
	&0000:7C39 8ED8            MOV      DS,AX
	&0000:7C3B 8EC0            MOV      ES,AX
	&0000:7C3D 33D2            XOR      DX,DX
	&0000:7C3F 8BC2            MOV      AX,DX
	&0000:7C41 CD13            INT      13
	&0000:7C43 7269            JC       7CAE
	&0000:7C45 E88500          CALL     7CCD
	&0000:7C48 72DD            JC       7C27
	&0000:7C4A 2E              CS:     
	&0000:7C4B 833E037C08      CMP      [7C03],0008
	&0000:7C50 7406            JZ       7C58
	&0000:7C52 2E              CS:     
	&0000:7C53 C606647D02      MOV      [7D64],02
	&0000:7C58 BB0000          MOV      BX,0000
	&0000:7C5B 2E              CS:     
	&0000:7C5C 8B0E037C        MOV      CX,[7C03]
	&0000:7C60 51              PUSH     CX
	&0000:7C61 B009            MOV      AL,09
	&0000:7C63 2AC1            SUB      AL,CL
	&0000:7C65 B400            MOV      AH,00
	&0000:7C67 8BF0            MOV      SI,AX
	&0000:7C69 56              PUSH     SI
	&0000:7C6A 33D2            XOR      DX,DX
	&0000:7C6C 33C0            XOR      AX,AX
	&0000:7C6E 8AC5            MOV      AL,CH
	&0000:7C70 2E              CS:     
	&0000:7C71 F636647D        DIV      BYTE [7D64]
	&0000:7C75 8AE8            MOV      CH,AL
	&0000:7C77 8AF4            MOV      DH,AH
	&0000:7C79 8BC6            MOV      AX,SI
	&0000:7C7B B402            MOV      AH,02
	&0000:7C7D CD13            INT      13
	&0000:7C7F 722D            JC       7CAE
	&0000:7C81 5E              POP      SI
	&0000:7C82 59              POP      CX
	&0000:7C83 2E              CS:     
	&0000:7C84 2936057C        SUB      [7C05],SI
	&0000:7C88 741F            JZ       7CA9
	&0000:7C8A 8BC6            MOV      AX,SI
	&0000:7C8C 2E              CS:     
	&0000:7C8D F726657D        MUL      WORD [7D65]
	&0000:7C91 03D8            ADD      BX,AX
	&0000:7C93 FEC5            INC      CH
	&0000:7C95 B101            MOV      CL,01
	&0000:7C97 51              PUSH     CX
	&0000:7C98 BE0800          MOV      SI,0008
	&0000:7C9B 2E              CS:     
	&0000:7C9C 3B36057C        CMP      SI,[7C05]
	&0000:7CA0 7C05            JL       7CA7
	&0000:7CA2 2E              CS:     
	&0000:7CA3 8B36057C        MOV      SI,[7C05]
	&0000:7CA7 EBC0            JMP      7C69
	&0000:7CA9 EA00006000      JMP      &0060:0000
	&0000:7CAE BE677D          MOV      SI,7D67
	&0000:7CB1 E80200          CALL     7CB6
	&0000:7CB4 EBFE            JMP      7CB4
	
The next chunk of code is similar to `disk_error` in the [PC DOS 1.00 Boot Sector](/software/pcx86/sys/dos/ibm/1.00/debugger/#pc-dos-100-boot-sector):

	&0000:7CB6 32FF            XOR      BH,BH
	&0000:7CB8 2E              CS:     
	&0000:7CB9 AC              LODSB   
	&0000:7CBA 247F            AND      AL,7F
	&0000:7CBC 740B            JZ       7CC9
	&0000:7CBE 56              PUSH     SI
	&0000:7CBF B40E            MOV      AH,0E
	&0000:7CC1 BB0700          MOV      BX,0007
	&0000:7CC4 CD10            INT      10
	&0000:7CC6 5E              POP      SI
	&0000:7CC7 EBEF            JMP      7CB8
	&0000:7CC9 C3              RET     
	&0000:7CCA E933FF          JMP      7C00

The next chunk of code is identical to `check_sys_files` in the [PC DOS 1.00 Boot Sector](/software/pcx86/sys/dos/ibm/1.00/debugger/#pc-dos-100-boot-sector):

	&0000:7CCD BB0000          MOV      BX,0000
	&0000:7CD0 B90400          MOV      CX,0004
	&0000:7CD3 B80102          MOV      AX,0201
	&0000:7CD6 CD13            INT      13
	&0000:7CD8 1E              PUSH     DS
	&0000:7CD9 7233            JC       7D0E
	&0000:7CDB 8CC8            MOV      AX,CS
	&0000:7CDD 8ED8            MOV      DS,AX
	&0000:7CDF BF0000          MOV      DI,0000
	&0000:7CE2 B90B00          MOV      CX,000B
	&0000:7CE5 26              ES:     
	&0000:7CE6 800D20          OR       [DI],20
	&0000:7CE9 26              ES:     
	&0000:7CEA 804D2020        OR       [DI+20],20
	&0000:7CEE 47              INC      DI
	&0000:7CEF E2F4            LOOP     7CE5
	&0000:7CF1 BF0000          MOV      DI,0000
	&0000:7CF4 BE8B7D          MOV      SI,7D8B
	&0000:7CF7 B90B00          MOV      CX,000B
	&0000:7CFA FC              CLD     
	&0000:7CFB F3              REPZ    
	&0000:7CFC A6              CMPSB   
	&0000:7CFD 750F            JNZ      7D0E
	&0000:7CFF BF2000          MOV      DI,0020
	&0000:7D02 BE977D          MOV      SI,7D97
	&0000:7D05 B90B00          MOV      CX,000B
	&0000:7D08 F3              REPZ    
	&0000:7D09 A6              CMPSB   
	&0000:7D0A 7502            JNZ      7D0E
	&0000:7D0C 1F              POP      DS
	&0000:7D0D C3              RET
	     
	&0000:7D0E BE1B7D          MOV      SI,7D1B
	&0000:7D11 E8A2FF          CALL     7CB6
	&0000:7D14 B400            MOV      AH,00
	&0000:7D16 CD16            INT      16
	&0000:7D18 1F              POP      DS
	&0000:7D19 F9              STC     
	&0000:7D1A C3              RET     
