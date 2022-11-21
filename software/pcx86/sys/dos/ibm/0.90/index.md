---
layout: page
title: IBM PC DOS 0.90
permalink: /software/pcx86/sys/dos/ibm/0.90/
redirect_from: /disks/pcx86/dos/ibm/0.90/
machines:
  - id: ibm5150-pcdos090
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    autoMount:
      A:
        name: PC DOS 0.90
      B:
        name: None
---

There was no PC DOS 0.90 product *per se*.  It has been dubbed version 0.90 simply because it predates
[PC DOS 1.00](../1.00/) by several months.  More information about this preliminary version of PC DOS can
be found at the [OS/2 Museum](http://www.os2museum.com/wp/pc-dos-1-0-but-not-quite/).

Below is an IBM PC (Model 5150) with an original IBM ROM BIOS and Color (CGA) Display that will boot PC DOS 0.90.
The machine is configured to run at 4.77Mhz, so the ROM BIOS memory test has been disabled, since a PC with 256Kb
was rather slow to boot.  A similar configuration with [Monochrome Display and Debugger](debugger/) is also available.

PC DOS 0.90 files were distributed on one single-sided (160Kb) diskette.  A [Directory Listing](#directory-of-pc-dos-090)
of the disk is provided below.

{% include machine.html id="ibm5150-pcdos090" %}

### Directory of PC DOS 0.90

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*     2560   5-29-81  12:00a
    IBMDOS   COM*     5566   5-29-81  12:00a
    COMMAND  COM      2576   5-29-81  12:00a
    DEBUG    COM      5450   5-27-81  12:00a
    TIME     COM       243   5-19-81  12:00a
    DATE     COM       245   5-20-81  12:00a
    ASM      COM      6389   5-15-81  12:00a
    FORMAT   COM      2048   5-29-81  12:00a
    HEX2BIN  COM       483   5-07-81  12:00a
    BASIC    COM     11008   6-04-81  12:00a
    CHKDSK   COM      1224   5-30-81  12:00a
    EDLIN    COM      2231   5-29-81  12:00a
    MODE     COM       675   1-01-80  12:00a
    COMMENTS          3561   6-05-81  12:00a
    MOVBAS   COM       128   4-23-81  12:00a
    BAS18    COM     11008   6-04-81  12:00a
    BASICA   COM     14976   6-04-81  12:00a
    AUTOEXEC BAK        24   1-01-80  12:00a
    SYS      COM       896   6-03-81  12:00a
    BAS18A   COM     14976   6-04-81  12:00a
    COMMENTS BAK      3560   6-05-81  12:00a
    FCOMP    COM      1408   4-13-81  12:00a
    DISKCOPY COM      1211   6-04-81  12:00a
    CONVERT  COM      3200   4-15-81  12:00a
    COMP     COM       256   4-15-81  12:00a
    KILO     BAS       768   4-23-81  12:00a
    20HAL    COM      1792   4-24-81  12:00a
    SPCWAR   BAS      5120   5-22-81  12:00a
    TTY      ASC      2432   5-22-81  12:00a
    VCOPY    BAT        26   4-24-81  12:00a
    SHIPS    MAC      1792   6-01-81  12:00a
    CIRCLE   MAC       384   6-01-81  12:00a
    RBAS     COM     32768   4-25-81  12:00a
    THREED   BAS      3072   1-01-80  12:00a
    CUBE     DAT       402   4-30-81  12:00a
           35 file(s)     144458 bytes
                            8192 bytes free

### PC DOS 0.90 Boot Sector

The boot sector of the original PC DOS 0.90 disk image contained the following bytes:

	00000000  eb 2f 14 00 00 00 60 00  20 37 2d 4d 61 79 2d 38  |./....`. 7-May-8|
	00000010  31 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |1...............|
	00000020  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	00000030  00 fa 8c c8 8e d8 ba 00  00 8e d2 bc 00 7c fb a1  |.............|..|
	00000040  06 7c 8e d8 8e c0 ba 00  00 8b c2 cd 13 72 41 e8  |.|...........rA.|
	00000050  58 00 72 fb 2e 8b 0e 02  7c 51 bb 00 00 33 d2 b9  |X.r.....|Q...3..|
	00000060  08 00 be 01 00 56 b0 01  b4 02 cd 13 72 22 5e 58  |.....V......r"^X|
	00000070  e8 e7 00 2b c6 74 14 fe  c5 b1 01 be 08 00 3b c6  |...+.t........;.|
	00000080  73 04 8b f0 eb 01 96 56  50 eb dd 2e ff 2e 04 7c  |s......VP......||
	00000090  be 44 7d b8 42 7d 50 32  ff ac 24 7f 74 0b 56 b4  |.D}.B}P2..$.t.V.|
	000000a0  0e bb 07 00 cd 10 5e eb  f0 c3 bb 00 00 b9 04 00  |......^.........|
	000000b0  b8 01 02 cd 13 1e 72 34  8c c8 8e d8 bf 00 00 b9  |......r4........|
	000000c0  0b 00 26 80 0d 20 26 80  8d 20 00 20 47 e2 f3 bf  |..&.. &.. . G...|
	000000d0  00 00 be 76 7d b9 0b 00  fc f3 a6 75 0f bf 20 00  |...v}......u.. .|
	000000e0  be 82 7d b9 0b 00 f3 a6  75 02 1f c3 be f9 7c e8  |..}.....u.....|.|
	000000f0  a5 ff b4 00 cd 16 1f f9  c3 0d 0a 4e 6f 6e 2d 53  |...........Non-S|
	00000100  79 73 74 65 6d 20 64 69  73 6b 20 6f 72 20 64 69  |ystem disk or di|
	00000110  73 6b 20 65 72 72 6f f2  0d 0a 52 65 70 6c 61 63  |sk erro...Replac|
	00000120  65 20 61 6e 64 20 73 74  72 69 6b 65 20 61 6e 79  |e and strike any|
	00000130  20 6b 65 79 20 77 68 65  6e 20 72 65 61 64 f9 0d  | key when read..|
	00000140  0a 00 cd 18 0d 0a 44 69  73 6b 20 42 6f 6f 74 20  |......Disk Boot |
	00000150  66 61 69 6c 75 72 e5 0d  0a 00 50 52 8b c6 bf 00  |failur....PR....|
	00000160  02 f7 e7 03 d8 5a 58 c3  52 6f 62 65 72 74 20 4f  |.....ZX.Robert O|
	00000170  27 52 65 61 72 20 69 62  6d 62 69 6f 20 20 63 6f  |'Rear ibmbio  co|
	00000180  6d b0 69 62 6d 64 6f 73  20 20 63 6f 6d b0 c9 00  |m.ibmdos  com...|
	00000190  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001a0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001b0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001e0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|

Note that if you download the disk image from the PCjs website (using the "Save" button on a PCjs machine),
the following boot sector bytes will differ:

	00000000  eb 2f 14 00 00 00 60 00  20 37 2d 00 02 01 01 00  |./....`. 7-.....|
	00000010  02 40 00 40 01 fe 01 00  08 00 01 00 00 00 00 00  |.@.@............|

This is simply a side-effect of the [DiskDump]({{ site.github.pages }}/tools/old/diskdump/) utility that's used to prepare disk images for the
PCjs website.  It automatically adds a BPB to the boot sector if the BPB is missing or incorrect, making it easier for
modern operating systems to mount the disk image.
