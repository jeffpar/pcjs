---
layout: page
title: IBM PC 47Mb Hard Drives
permalink: /machines/pcx86/ibm/hdc/47mb/
redirect_from:
  - /disks/pcx86/drives/47mb/
  - /configs/pcx86/hdc/47mb/
  - /machines/pcx86/hdc/47mb/
---

PCjs includes unformatted 47Mb Type 5 drives in selected IBM PC AT and COMPAQ DeskPro machines,
because the drive parameters are identical in both types of machines:

    940 cylinders
    6 heads
    17 sectors/track

yielding a capacity of 49,090,560 bytes (940 * 6 * 17 * 512), or approximately 46.82Mb (since PCjs considers 1 megabyte
to be 1,048,576 bytes).

For example:

  - [COMPAQ DeskPro 386](/machines/pcx86/compaq/deskpro386/ega/2048kb/machine.xml)
  - [IBM PC AT (Model 5170) with Enhanced Color Display](/machines/pcx86/ibm/5170/ega/640kb/rev1/enhanced/machine.xml)

Note that in order to use an unformatted fixed disk with DOS, it must first be partitioned using `FDISK`
and then formatted using `FORMAT`.  Moreover, you should use DOS 3.30 or newer if you want to make full use
of the disk; DOS 3.30 was still limited to 32Mb partitions, but it was the first version that allowed you
to create both "Primary" and "Extended" DOS partitions.

However, when you install [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) using their `FASTART` utility,
it will report "Format complete" after formatting 939 cylinders (0-938), presumably reserving the final cylinder
for diagnostic purposes and/or "head parking".  It will then report "48,834,560 bytes available on disk" and
display the disk as having "49.0 Megabytes", so drive manufacturers were already treating "megabyte" as 1,000,000
bytes.

After installation, `CHKDSK` reports:

     48916480 bytes total disk space
        55296 bytes in 2 hidden files
         4096 bytes in 1 directories
      1359872 bytes in 80 user files
     47497216 bytes available on disk
    
       655360 bytes total memory
       593440 bytes free

displaying yet another total disk space value: 48,916,480 bytes.  Which is actually the most useful value,
because it reports the amount of *usable* disk space for the volume, by multiplying total available clusters (23885)
by the cluster size (2Kb).

How do we know the number of available clusters and the cluster size?  Alas, MS-DOS 3.31 doesn't tell us that,
but newer versions of `CHKDSK` do:

	   48,916,480 bytes total disk space
	       55,296 bytes in 2 hidden files
	        4,096 bytes in 1 directories
	    1,359,872 bytes in 80 user files
	   47,497,216 bytes available on disk

	        2,048 bytes in each allocation unit
	       23,885 total allocation units on disk
	       23,192 available allocation units on disk

We can use `DEBUG` to inspect the hard disk's Master Boot Record (MBR):

	C:\>debug
	-a
	1309:0100 mov ax,201
	1309:0103 mov bx,1000
	1309:0106 mov cx,1
	1309:0109 mov dx,80
	1309:010C int 13
	1309:010E int 3
	1309:010F 
	-g

	AX=0050  BX=1000  CX=0001  DX=0080  SP=FFEE  BP=0000  SI=0000  DI=0000  
	DS=1309  ES=1309  SS=1309  CS=1309  IP=010E   NV UP EI PL NZ NA PO NC 
	1309:010E CC            INT     3                                  
	-d1000 l200
	1309:1000  FA 33 C0 8E D0 BC 00 7C-8B F4 50 07 50 1F FB FC   .3.....|..P.P...
	1309:1010  BF 00 06 B9 00 01 F2 A5-EA 1D 06 00 00 BE BE 07   ................
	1309:1020  B3 04 80 3C 80 74 0E 80-3C 00 75 1C 83 C6 10 FE   ...<.t..<.u.....
	1309:1030  CB 75 EF CD 18 8B 14 8B-4C 02 8B EE 83 C6 10 FE   .u......L.......
	1309:1040  CB 74 1A 80 3C 00 74 F4-BE 8B 06 AC 3C 00 74 0B   .t..<.t.....<.t.
	1309:1050  56 BB 07 00 B4 0E CD 10-5E EB F0 EB FE BF 05 00   V.......^.......
	1309:1060  BB 00 7C B8 01 02 57 CD-13 5F 73 0C 33 C0 CD 13   ..|...W.._s.3...
	1309:1070  4F 75 ED BE A3 06 EB D3-BE C2 06 BF FE 7D 81 3D   Ou...........}.=
	1309:1080  55 AA 75 C7 8B F5 EA 00-7C 00 00 49 6E 76 61 6C   U.u.....|..Inval
	1309:1090  69 64 20 70 61 72 74 69-74 69 6F 6E 20 74 61 62   id partition tab
	1309:10A0  6C 65 00 45 72 72 6F 72-20 6C 6F 61 64 69 6E 67   le.Error loading
	1309:10B0  20 6F 70 65 72 61 74 69-6E 67 20 73 79 73 74 65    operating syste
	1309:10C0  6D 00 4D 69 73 73 69 6E-67 20 6F 70 65 72 61 74   m.Missing operat
	1309:10D0  69 6E 67 20 73 79 73 74-65 6D 00 00 00 00 00 00   ing system......
	1309:10E0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:10F0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1100  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1110  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1120  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1130  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1140  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1150  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1160  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1170  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1180  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:1190  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:11A0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:11B0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 80 01   ................
	1309:11C0  01 00 06 05 D1 AA 11 00-00 00 11 76 01 00 00 00   ...........v....
	1309:11D0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:11E0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	1309:11F0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 55 AA   ..............U.

The first partition entry is located at offset 0x1BE:

    0x00:   80          boot indicator
    0x01:   01          starting head
    0x02:   01          mask with 0x3f for starting sector, 0xc0 for starting cylinder (bits 8-9)
    0x03:   00          starting cylinder (bits 0-7)
    0x04:   06          file system ID (primary DOS partition with 16-bit FAT and large total sectors)
    0x05:   05          ending head
    0x06:   D1          mask with 0x3f for ending sector, 0xc0 for ending cylinder (bits 8-9)
    0x07:   AA          ending cylinder (bits 0-7)
    0x08:   00000011    logical starting sector of partition (relative to start of disk)
    0x0C:   00017611    total number of sectors in partition     

So, based on partition information alone, the volume contains 0x17611 or 95761 sectors, for a total of 49,029,632
bytes.  This confirms that only 939 cylinders are being used, and that only 5 tracks are being used on the first cylinder,
since the MBR has reserved the entire first 17-sector track for itself.

We can also use `DEBUG` to inspect the hard disk's BIOS Parameter Block (BPB):

    C:\>debug
	-l1000 2 0 1
	-d100b l19
	1309:1000                                   00 02 04 01 00              .....
	1309:1010  02 00 02 00 00 F8 5E 00-11 00 06 00 11 00 00 00   ......^.........
	1309:1020  11 76 01 00                                       .v..

The BPB is located at offset 0x10B:

    0x10B:  0200        bytes per sector (512)
    0x10D:  04          sectors per cluster (4: 2048-byte clusters)
    0x10E:  0001        reserved sectors (1: the boot sector containing this BPB)  
    0x110:  02          number of FATs (2)
    0x111:  0200        number of root directory entries (512)
    0x113:  0000        total sectors; if zero, refer to large total sectors at offset 0x120 (DOS 3.31 and up only)
    0x115:  F8          media ID (0xF8 indicates hard disk)
    0x116:  005E        sectors per FAT
    0x118:  0011        sectors per track
    0x11A:  0006        number of heads
    0x11C:  00000011    number of hidden sectors (2 bytes prior to DOS 3.31, 4 bytes otherwise)
    0x120:  00017611    large total sectors (used when total sectors is zero)

The FAT overhead for the volume consists of:

    DOS Boot sector: 1
    FAT sectors: 2 * 0x5E = 0xBC or 188 
    Root directory sectors: (512 * 32 bytes per entry) / 512 bytes per sector = 32

for a total of 221 sectors, leaving 95761 - 221 = 95540 sectors.  Moreover, free space is measured in clusters,
not sectors, and the volume uses 4 sectors/cluster.  Fortunately, 95540 is divisible by 4, yielding a total of 23885
clusters with no unusable fractional cluster.
 
Thus, actual free space is 23885 * 2048, or 48,916,480 bytes, which is exactly what DOS reports as the available
space.
