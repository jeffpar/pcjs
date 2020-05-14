---
layout: page
title: dBASE III 1.0
permalink: /software/pcx86/app/other/dbase3/1.0/
redirect_from: /disks/pcx86/apps/other/dbase3/1.0/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/cga/512kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: dBASE III 1.0 (Disk 1)
    autoStart: true
    autoType: $date\r$time\rB:\rDBASE\r
---

The machine below is configured to run the original, unmodified, copy-protected software from
[dBASE III 1.0 (Disk 1)](#dbase-iii-disk-information).  More information on dBASE III copy-protection
is available [below](#copy-protection-information).

{% include machine.html id="ibm5160" %}

### dBASE III Disk Information

Two of the PCjs disks shown below:

- [dBASE III 1.0 (Patched)](#directory-of-dbase-iii-10-patched)
- [dBASE III 1.0 (Samples)](#directory-of-dbase-iii-10-samples)

are from our private collection and should be exact copies of the original dBASE III 1.0 distribution disks, with the
exception of `DBASE.EXE`, which was patched to eliminate copy-protection checks.  Details of that patch are available
in the [PCjs Document Archive](/documents/pcjs/programming/#dbase-iii-copy-protection),
along with this [blog post](/blog/2017/08/11/).

Also, for completeness, the original `DBASE.EXE` has been recreated by "unpatching" it and saving it on the
[Locked](#directory-of-dbase-iii-10-locked) disk image.  Even though we no longer have the original distribution disk,
we have "annotated" our disk image to simulate the same damaged sector that the original disk contained, so the original
program runs as well.

Another variation of the dBASE III disks come from the [WinWorld](https://winworldpc.com/product/dbase/iii-v10) archive:

- [dBASE III 1.0 (Disk 1)](#directory-of-dbase-iii-10-disk-1)
- [dBASE III 1.0 (Disk 2)](#directory-of-dbase-iii-10-disk-2)

and, with the exception of `DBASE.EXE`, the files on [Disk 1](#directory-of-dbase-iii-10-disk-1) match the files on our
[Patched](#directory-of-dbase-iii-10-patched) disk; the newer dates probably just reflect an update by Vault Corporation
to the copy-protection code in `DBASE.EXE`.  However, [Disk 2](#directory-of-dbase-iii-10-disk-2) contains more files
than our [Samples](#directory-of-dbase-iii-10-samples) disk, and WinWorld's README admits that:

	Some of the sample programs have been run/changed.

so overall, the disks from our private collection may be more authentic.

### Directory of dBASE III 1.0 (Patched)

     Volume in drive A has no label
     Directory of A:\

    DBASE    EXE    112720   9-28-84   3:46p
    DBASE    OVL    147456   6-26-84   5:36p
    HELP     DBS     53760   6-26-84   5:36p
    ASSIST   HLP     15223   6-26-84   5:37p
    READ     ME       4224   6-26-84   5:37p
    CONFIG   SYS        22   6-26-84   5:37p
            6 file(s)     333405 bytes
                           15360 bytes free

### Directory of dBASE III 1.0 (Samples)

     Volume in drive A has no label
     Directory of A:\

    DFORMAT  EXE     39424   6-12-84   2:56p
    DCONVERT EXE     48128   6-06-84   3:10p
    DFM      MSG     50432   6-12-84   2:46p
    DEPOSITS DBF       227   6-14-84   3:42a
    CHECKFIL DBF       355   6-14-84   3:42a
    INVGET   DBF       419   6-14-84   3:40a
    INVOICES DBF       598   6-14-84   3:43a
    BILLINGS DBF      1024   4-29-84   7:57p
    NAMES    DBF      1024   5-01-84  12:52p
    PERSON   DBF      1248   4-30-84   5:31p
    POSTFILE DBF      1339   6-05-84  10:51a
    HOLD84   DBF      1412   4-01-84  10:56p
    CLADDRES DBF      1477   4-08-84   9:01p
    PERSONNE DBF      1925   6-05-84  10:55a
    RENTALS  DBF      2560   6-15-84   2:06p
    SUPPLIER DBF      2659   4-09-84   7:40p
    COSTBASE DBF      3301   6-14-84   3:46a
    WAGES    DBF      3801   4-01-84  10:55p
    NAMES    FMT       398   4-07-84   7:38p
    KONSTANT MEM       770   5-01-84   3:58p
    COSTJOBS NDX      1024   1-01-80   1:45a
    BILLINGS NDX      1024   1-01-80   1:46a
    BILLJOBS NDX      1024   1-01-80   1:46a
    INVOICES NDX      1024   1-01-80   1:46a
    COSTNAME NDX      2048   1-01-80   1:46a
    SUPPLIER NDX      2560   3-28-84   5:55p
    INVSUBTO PRG       768   3-28-84   9:54p
    DEPPRINT PRG       896   3-28-84   9:49p
    INVUPDAT PRG       896   5-01-84   8:37a
    DEPMENU  PRG      1280   6-15-84   2:47p
    BIG      PRG      1280   6-15-84   3:26p
    ACCOUNTS PRG      1408   4-30-84   9:08a
    INVEDIT  PRG      1408   5-01-84   8:38a
    PAYMENU  PRG      1408   5-01-84   8:45a
    INDEXING PRG      1408   5-01-84  10:11a
    INVCHECK PRG      1536   5-01-84   8:38a
    PAYRECAP PRG      1536   6-15-84   4:41p
    NAMETEST PRG      1664   5-01-84   1:59p
    DEPTRANS PRG      1664   5-01-84   8:31a
    INVMENU  PRG      1792   5-01-84   8:33a
    COSTUPDA PRG      2048   6-15-84   2:45p
    COSTMENU PRG      2688   5-01-84   7:57a
    PAYEMPS  PRG      2944   6-15-84   2:43p
    DEPOSITS PRG      3584   6-15-84   2:41p
    COSTTIME PRG      3584   6-15-84   2:45p
    TIMECALC PRG      3712   6-15-84   2:50p
    CHECKSTU PRG      3712   6-15-84   5:21p
    PAYFIND  PRG      3712   6-15-84   4:42p
    INVOICES PRG      3712   6-15-84   4:53p
    COSTBILL PRG      4608   5-01-84   1:32p
    SALESTAX PRG      5376   6-15-84   5:43p
    INVPRINT PRG      5888   6-15-84   4:37p
    JOBCOSTS PRG      6016   6-15-84   2:43p
    PAYBILLS PRG      9472   6-15-84   4:44p
    PAYROLL  PRG     13056   6-15-84   4:50p
           55 file(s)     264281 bytes
                           75776 bytes free

### Directory of dBASE III 1.0 (Locked)

     Volume in drive A has no label
     Directory of A:\

    DBASE    EXE    112720   8-11-17   9:51a
    DBASE    OVL    147456   6-26-84   5:36p
    HELP     DBS     53760   6-26-84   5:36p
    ASSIST   HLP     15223   6-26-84   5:37p
    READ     ME       4224   6-26-84   5:37p
    CONFIG   SYS        22   6-26-84   5:37p
            6 file(s)     333405 bytes
                           15360 bytes free

### Directory of dBASE III 1.0 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    DBASE    EXE    112720   7-15-84   8:28a
    DBASE    OVL    147456   7-15-84   8:28a
    HELP     DBS     53760   7-15-84   8:29a
    ASSIST   HLP     15223   7-15-84   8:29a
    READ     ME       4224   7-15-84   8:29a
    CONFIG   SYS        22   7-15-84   8:29a
            6 file(s)     333405 bytes
                           10240 bytes free

### Directory of dBASE III 1.0 (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    DFORMAT  EXE     39424   6-12-84   2:56p
    DCONVERT EXE     48128   6-06-84   3:10p
    DFM      MSG     50432   6-12-84   2:46p
    DEPOSITS DBF       227   6-14-84   3:42a
    CHECKFIL DBF       355   6-14-84   3:42a
    INVGET   DBF       419   6-14-84   3:40a
    INVOICES DBF       598   6-14-84   3:43a
    BILLINGS DBF      1024   4-29-84   7:57p
    NAMES    DBF      1342  11-13-84   9:31a
    PERSON   DBF      1248   4-30-84   5:31p
    POSTFILE DBF      1339   6-05-84  10:51a
    HOLD84   DBF      1412   4-01-84  10:56p
    CLADDRES DBF      1477   4-08-84   9:01p
    PERSONNE DBF      1925   6-05-84  10:55a
    RENTALS  DBF      2560  11-12-84   4:01a
    SUPPLIER DBF      2659   4-09-84   7:40p
    COSTBASE DBF      3301   6-14-84   3:46a
    WAGES    DBF      3801   4-01-84  10:55p
    NAMES    FMT       398   4-07-84   7:38p
    KONSTANT MEM       770   5-01-84   3:58p
    COSTJOBS NDX      1024   1-01-80   1:45a
    BILLINGS NDX      1024   1-01-80   1:46a
    BILLJOBS NDX      1024   1-01-80   1:46a
    INVOICES NDX      1024   1-01-80   1:46a
    COSTNAME NDX      2048   1-01-80   1:46a
    SUPPLIER NDX      2560   3-28-84   5:55p
    CONSTANT MEM       426  11-06-84   3:04a
    DEPPRINT PRG       896   3-28-84   9:49p
    INVUPDAT PRG       896   5-01-84   8:37a
    DEPMENU  PRG      1280   6-15-84   2:47p
    BIG      PRG      1280   6-15-84   3:26p
    ACCOUNTS PRG      1408   4-30-84   9:08a
    INVEDIT  PRG      1408   5-01-84   8:38a
    PAYMENU  PRG      1408   5-01-84   8:45a
    INDEXING PRG      1408   5-01-84  10:11a
    INVCHECK PRG      1536   5-01-84   8:38a
    PAYRECAP PRG      1536   6-15-84   4:41p
    NAMETEST PRG      1664   5-01-84   1:59p
    DEPTRANS PRG      1664   5-01-84   8:31a
    INVMENU  PRG      1792   5-01-84   8:33a
    COSTUPDA PRG      2048   6-15-84   2:45p
    COSTMENU PRG      2688   5-01-84   7:57a
    PAYEMPS  PRG      2944   6-15-84   2:43p
    DEPOSITS PRG      3584   6-15-84   2:41p
    COSTTIME PRG      3584   6-15-84   2:45p
    TIMECALC PRG      3712   6-15-84   2:50p
    CHECKSTU PRG      3712   6-15-84   5:21p
    PAYFIND  PRG      3712   6-15-84   4:42p
    INVOICES PRG      3712   6-15-84   4:53p
    COSTBILL PRG      4608   5-01-84   1:32p
    SALESTAX PRG      5376   6-15-84   5:43p
    INVPRINT PRG      5888   6-15-84   4:37p
    JOBCOSTS PRG      6016   6-15-84   2:43p
    PAYBILLS PRG      9472   6-15-84   4:44p
    PAYROLL  PRG     13056   6-15-84   4:50p
    LAST     NDX      1024  11-13-84   9:22a
    INVSUBTO PRB       768   3-28-84   9:54p
    ADDRESS  NDX      1024  11-13-84   9:27a
    ZIP      NDX      1024  11-13-84   9:23a
    MONEY    NDX      1024  11-06-84   3:36a
    FULL     NDX      1024  11-06-84   3:38a
    WHO      NDX      1024  11-06-84   4:12a
    MONTH    NDX      1024  11-13-84   9:32a
    TEST     TXT       588  11-07-84  12:22p
    CHAPTER6 TXT      2414  11-07-84   1:11p
    TEST     BAK       190  11-07-84   1:09p
    TEST     PRG       223  11-07-84   1:48p
    SALES    NDX      1024  11-07-84   2:01p
    RENTS    DBF      1317  11-07-84   2:00p
    COMMISS  FRM      1990  11-07-84   2:26p
    SUMMARY  TXT      1262  11-07-84   2:19p
    STATESLS NDX      1024  11-07-84   2:39p
    PERSON   NDX      1024  11-12-84  10:38a
    NOTES    DBF       274  11-12-84   4:20a
    NOTES    DBT       512  11-12-84   4:14a
    DOCTORS  DBF       253  11-13-84  10:18a
           76 file(s)     284288 bytes
                           48128 bytes free

### Copy-Protection Information

    MFM Sector
    Sector ID:005
    Track ID:039 - Side ID:000
    Size:00512 (ID:0x02)
    DataMark:0xFB
    Head CRC:0x60C8 (Ok)
    Data CRC:0x0013 (BAD CRC!)
    Start Sector cell:44272
    Start Sector Data cell:44984
    End Sector cell:53272
    Number of cells:9000

    0000| 2C DB 06 D4 FF F8 23 03 | ,.....#.
    0008| 2E DF 0A D6 01 F1 1C F9 | ........
    0010| 24 E5 10 D4 FF E6 11 0B | $.......
    0018| 36 E5 10 C6 F1 E2 0D 01 | 6.......
    0020| 2C FD 28 C4 EF C6 F1 02 | ,.(.....
    0028| 2D 1D 48 C6 F1 A2 CD 18 | -.H.....
    0030| 43 25 50 A4 CF B6 E1 2A | C%P....*
    0038| 55 05 30 B6 E1 D2 FD 00 | U.0.....
    0040| 2B 1D 48 F4 1F 97 C2 C2 | +.H.....
    0048| ED 1E 49 36 61 93 BE B8 | ..I6a...
    0050| E3 66 91 34 5F 47 72 8A | .f.4_Gr.
    0058| B5 A6 D1 66 91 03 2E 40 | ...f...@
    0060| 6B FE 29 A5 D0 E7 12 1E | k.).....
    0068| 49 DE 09 83 AE C3 EE 67 | I......g
    0070| 92 26 51 55 80 97 C2 45 | .&QU...E
    0078| 70 06 31 B3 DE F3 1E 20 | p.1.... 
    0080| 4B DE 09 F5 20 B8 E3 9D | K... ...
    0088| C8 5F 8A 73 9E 30 5B 27 | ._.s.0['
    0090| 52 E3 0E E6 11 B9 E4 A4 | R.......
    0098| CF 50 7B 7C A7 C9 F4 16 | .P{|....
    00A0| 41 44 6F EE 19 C2 ED B4 | ADo.....
    00A8| DF 41 6C 74 9F C6 F1 36 | .Alt...6
    00B0| 61 59 84 C6 F1 22 4D 54 | aY..."MT
    00B8| 7F E9 14 DD 08 B7 E2 A9 | ........
    00C0| D4 42 6D 4B 76 F3 1E EC | .BmKv...
    00C8| 17 83 AE 8C B7 34 5F 2E | .....4_.
    00D0| 59 C7 F2 CE F9 64 8F 6C | Y....d.l
    00D8| 97 1B 46 04 2F D4 FF BE | ..F./...
    00E0| E9 6F 9A 66 91 14 3F 1C | .o.f..?.
    00E8| 47 B3 DE CC F7 54 7F 7E | G....T.~
    00F0| A9 F7 22 2F 5A A4 CF DF | .."/Z...
    00F8| 0A 4C 77 89 B4 F5 20 36 | .Lw... 6
    0100| 61 A0 CB 1E 49 B5 E0 34 | a...I..4
    0108| 5F 9C C7 24 4F BD E8 36 | _..$O..6
    0110| 61 90 BC 00 00 0C 48 00 | a.....H.
    0118| 00 00 04 10 1B 00 00 00 | ........
    0120| 00 40 82 42 04 30 0F F3 | .@.B.0..
    0128| 80 42 30 33 00 00 07 F1 | .B03....
    0130| 8C 0E 00 00 7C 00 06 13 | ....|...
    0138| E0 60 07 02 40 01 F0 00 | .`..@...
    0140| 99 10 4C 00 06 20 00 00 | ..L.. ..
    0148| 9E 10 09 00 10 66 08 00 | .....f..
    0150| 80 03 C0 00 04 3C 02 03 | .....<..
    0158| 90 84 13 02 40 81 1C 20 | ....@.. 
    0160| 04 8C 02 00 1C C9 80 02 | ........
    0168| 00 0C 42 42 30 01 FC 60 | ..BB0..`
    0170| 01 24 02 00 87 88 01 00 | .$......
    0178| 47 C1 30 00 F1 E7 88 30 | G.0....0
    0180| 09 08 41 20 06 1E 20 30 | ..A .. 0
    0188| 0E 00 99 23 00 C7 38 21 | ...#..8!
    0190| 04 00 11 21 04 4E 00 23 | ...!.N.#
    0198| 00 60 01 33 00 66 08 00 | .`.3.f..
    01A0| 64 78 00 10 0C 7E 00 03 | dx...~..
    01A8| 90 66 08 E3 80 44 33 C1 | .f...D3.
    01B0| 24 03 C0 00 41 8C 02 00 | $...A...
    01B8| 01 06 18 24 02 7C 02 00 | ...$.|..
    01C0| FE 60 07 C0 20 10 0C 00 | .`.. ...
    01C8| 78 20 06 44 32 19 E0 01 | x .D2...
    01D0| E4 C1 3C C1 24 00 79 02 | ..<.$.y.
    01D8| 70 40 3C 42 00 08 00 00 | p@<B....
    01E0| 04 01 C4 00 F9 C7 38 E0 | ......8.
    01E8| 81 20 01 8C 03 0E 40 00 | . ....@.
    01F0| 7E 48 00 70 08 06 18 00 | ~H.p....
    01F8| 18 10 C8 19 E0 CC 83 E3 | ........

    Track RPM : 300 RPM

    Bitrate : VARIABLE

    Track format :
    ISOIBM_MFM_ENCODING

    Track len : 99613 cells
    Number of side : 2

    Interface mode:
    GENERIC_SHUGART_DD_FLOPPYMODE
    Shugart Interface

The following *diskdump* command was used to reflect the above error in our "dBASE III 1.0 (Disk 1)" disk image:

    diskdump --disk=archive/DBIII-100-DISK1-KF.img --format=json --output=DBIII-100-DISK1.json --sectorError=39:0:5:272

Note that we used an IMG built from the Kryoflux stream files instead of the IMG provided by WinWorld.  However, the
only difference was in the 512-byte sector at offset 0x58400, which corresponds precisely to the bad sector at 39:0:5
(shown above).

It was initially unclear whether the original contents of the bad sector mattered to dBASE III's copy-protection logic.
During the copy-protection check, the sector is read, an error is expected, and then the sector is rewritten, read again,
and only about the first 272 (+/-10) bytes must change for the copy-protection test to pass.

Also, it seems that not all dBASE III 1.0 files/disks were the same, because in order to run the "unpatched" copy
of dBASE III that I restored onto the "dBASE III 1.0 (Locked)" disk image, sector 2 (not sector 5) on track 39 must be
the damaged sector, and the point of damage must occur at approximately byte 204 rather than 272.  So I updated that
disk image as follows:

    diskdump --disk=archive/DBIII-100-LOCKED.img --format=json --output=DBIII-100-LOCKED.json --sectorError=39:0:2:204

I didn't have the original contents of the bad sector, but since that copy of DBASE.EXE now runs, it's safe to say that
the copy-protection code doesn't actually care about the sector's initial state.

### Debugging Notes

Before running DBASE.EXE, turn on FDC messages (`m fdc on`) in the [PCjs Debugger](?debugger=true) and set an execution
breakpoint at 0626:161E (`bp 626:161E`).  When the breakpoint is hit, you'll see code that is checking a word at DS:989 [0xAAAA]
against the first word of the sector 39:0:5, which it just read back into DS:742 (`0626:0742`) after attempting to
completely rewrite the sector.

It then goes on to see how many of the 512 bytes in the sector were successfully rewritten.  If *all* of them were modified
(ie, the REPZ SCASB count in CX goes to zero), then the code is definitely unhappy.  It then goes on to verify that the number
of "unmodifiable" (ie, bad) bytes in the sector is not less than 0xE5 nor greater than 0xF9.  That exact range may vary from
disk to disk, since the midpoint of that range (0xEF) comes from a word at DS:0186, whose origins I have not yet investigated.

    >> r
    AX=AAAA BX=0742 CX=2705 DX=0001 SP=0124 BP=0010 SI=1974 DI=0942 
    SS=0626 DS=0626 ES=0626 PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0626:1625 B0AA             MOV      AL,AA
    >> tr
    AX=AAAA BX=0742 CX=2705 DX=0001 SP=0124 BP=0010 SI=1974 DI=0942 
    SS=0626 DS=0626 ES=0626 PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0626:1627 B90002           MOV      CX,0200                  ;cycles=12
    >> tr
    AX=AAAA BX=0742 CX=0200 DX=0001 SP=0124 BP=0010 SI=1974 DI=0942 
    SS=0626 DS=0626 ES=0626 PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0626:162A BF4207           MOV      DI,0742                  ;cycles=12
    >> tr
    AX=AAAA BX=0742 CX=0200 DX=0001 SP=0124 BP=0010 SI=1974 DI=0742 
    SS=0626 DS=0626 ES=0626 PS=F246 V0 D0 I1 T0 S0 Z1 A0 P1 C0 
    &0626:162D F3               REPZ    
    &0626:162E AE               SCASB                             ;cycles=12
    >> pr
    AX=AAAA BX=0742 CX=00FF DX=0001 SP=0124 BP=0010 SI=1974 DI=0843 
    SS=0626 DS=0626 ES=0626 PS=FA02 V1 D0 I1 T0 S0 Z0 A0 P0 C0 
    &0626:162F 83F900           CMP      CX,0000
    >> tr
    AX=AAAA BX=0742 CX=00FF DX=0001 SP=0124 BP=0010 SI=1974 DI=0843 
    SS=0626 DS=0626 ES=0626 PS=F206 V0 D0 I1 T0 S0 Z0 A0 P1 C0 
    &0626:1632 7502             JNZ      1636 (DBASE.EXE+0x1C45)  ;cycles=12
    >> u 1636
    DBASE.EXE+0x1C45:
    &0626:1636 A18601           MOV      AX,[0186]
    &0626:1639 2D0A00           SUB      AX,000A
    &0626:163C 3BC8             CMP      CX,AX
    &0626:163E 7247             JC       1687 (DBASE.EXE+0x1C45)
    &0626:1640 051400           ADD      AX,0014
    &0626:1643 3BC8             CMP      CX,AX
    &0626:1645 7740             JA       1687 (DBASE.EXE+0x1C45)
    ...

So, to simulate failure at just the "write" point, I added the following hard-coded logic to the *writeData()* function
in [fdc.js](/machines/pcx86/lib/fdc.js):

```js
    if (drive.sector['dataError'] && drive.ibSector >= 266) {
        break;
    }
```

Originally, I didn't allow *any* of the bytes to be written in a sector whose *dataError* property was set, and then I
decided to let exactly half (256) of the bytes to be written, and neither attempt satisified the copy-protection check.
It was only after I started debugging the dBASE III code that I discovered I was close, and that by allowing 266 bytes
to be written, the check would pass.

This hack is now generalized, by setting set the sector's *dataError* property to a number; specifically, the number of
bytes allowed to be written.
