---
layout: post
title: The Joys of Old ARC and ZIP Files
date: 2023-03-07 10:00:00
permalink: /blog/2023/03/07/
preview: /blog/images/pkarc-1988-04.jpg
---

File compression became quite popular in the 1980s.  People who used dial-up "BBS" bulletin board systems could transfer compressed data in less time, and people like me could squeeze more data onto 360K diskettes.

For IBM PC users, a popular compression solution was a "shareware" program named **ARC** written by [Thom Henderson](http://www.esva.net/thom.html) in 1985 and sold by his company, System Enhancement Associates ("SEA").  **ARC** was written entirely in C, using the Computer Innovations [C86 Compiler](http://www.clipshop.ca/c86/compilers.htm), and the [source code](https://usenet.trashworldnews.com/?thread=115167) was available on request (note that the source code was copyrighted with "all rights reserved"; more on that later).

We take easy-to-use compression utilities for granted these days, but **ARC** was something of a novelty at the time.  I probably used **ARC** version 5.12 to produce many of my early `.ARC` files:

	ARC - Archive utility, Version 5.12, created on 02/05/86 at 22:22:01
	(C) COPYRIGHT 1985,86 by System Enhancement Associates; ALL RIGHTS RESERVED

	Please refer all inquiries to:

	       System Enhancement Associates
	       21 New Street, Wayne NJ 07470

	You may copy and distribute this program freely, provided that:
	    1)   No fee is charged for such copying and distribution, and
	    2)   It is distributed ONLY in its original, unmodified state.

	If you like this program, and find it of use, then your contribution will
	be appreciated.  You may not use this product in a commercial environment
	or a governmental organization without paying a license fee of $35.  Site
	licenses and commercial distribution licenses are available.  A program
	disk and printed documentation are available for $50.

	If you fail to abide by the terms of this license,  then your conscience
	will haunt you for the rest of your life.

	Usage: ARC {amufdxerplvtc}[bswn][g<password>] <archive> [<filename> . . .]
	Where:   a   = add files to archive
	         m   = move files to archive
	         u   = update files in archive
	         f   = freshen files in archive
	         d   = delete files from archive
	         x,e = extract files from archive
	         r   = run files from archive
	         p   = copy files from archive to standard output
	         l   = list files in archive
	         v   = verbose listing of files in archive
	         t   = test archive integrity
	         c   = convert entry to new packing method
	         b   = retain backup copy of archive
	         s   = suppress compression (store only)
	         w   = suppress warning messages
	         n   = suppress notes and comments
	         g   = Encrypt/decrypt archive entry

	Please refer to the program documentation for complete instructions.

Here's how you would use it to, for example, archive your entire MS-DOS 3.20 directory:

	C:\> ARC A DOS.ARC C:\DOS\*.*
	Creating new archive: DOS.ARC
	Adding file:   ANSI.SYS       analyzing, packing, done.
	Adding file:   APPEND.COM     analyzing, crunching, done.
	Adding file:   ASSIGN.COM     analyzing, crunching, done.
	Adding file:   ATTRIB.EXE     analyzing, crunching, done.
	Adding file:   BACKUP.EXE     analyzing, crunching, done.
	Adding file:   CHKDSK.EXE     analyzing, crunching, done.
	Adding file:   COMMAND.COM    analyzing, squeezing, done.
	Adding file:   DEBUG.EXE      analyzing, squeezing, done.
	Adding file:   DISKCOMP.EXE   analyzing, crunching, done.
	Adding file:   DISKCOPY.EXE   analyzing, crunching, done.
	Adding file:   DRIVER.SYS     analyzing, crunching, done.
	Adding file:   EDLIN.EXE      analyzing, crunching, done.
	Adding file:   EXE2BIN.EXE    analyzing, crunching, done.
	Adding file:   FC.EXE         analyzing, crunching, done.
	Adding file:   FDISK.EXE      analyzing, crunching, done.
	Adding file:   FIND.EXE       analyzing, crunching, done.
	Adding file:   FORMAT.EXE     analyzing, crunching, done.
	Adding file:   GRAFTABL.EXE   analyzing, crunching, done.
	Adding file:   GRAPHICS.EXE   analyzing, crunching, done.
	Adding file:   GWBASIC.EXE    analyzing, squeezing, done.
	Adding file:   JOIN.EXE       analyzing, crunching, done.
	Adding file:   KEYBDV.EXE     analyzing, crunching, done.
	Adding file:   KEYBFR.EXE     analyzing, crunching, done.
	Adding file:   KEYBGR.EXE     analyzing, crunching, done.
	Adding file:   KEYBIT.EXE     analyzing, crunching, done.
	Adding file:   KEYBSP.EXE     analyzing, crunching, done.
	Adding file:   KEYBUK.EXE     analyzing, crunching, done.
	Adding file:   LABEL.EXE      analyzing, crunching, done.
	Adding file:   LINK.EXE       analyzing, crunching, done.
	Adding file:   MODE.EXE       analyzing, crunching, done.
	Adding file:   MORE.COM       analyzing, crunching, done.
	Adding file:   PRINT.EXE      analyzing, crunching, done.
	Adding file:   RAMDRIVE.SYS   analyzing, crunching, done.
	Adding file:   RECOVER.EXE    analyzing, crunching, done.
	Adding file:   REPLACE.EXE    analyzing, crunching, done.
	Adding file:   RESTORE.EXE    analyzing, crunching, done.
	Adding file:   SHARE.EXE      analyzing, crunching, done.
	Adding file:   SORT.EXE       analyzing, packing, done.
	Adding file:   SUBST.EXE      analyzing, crunching, done.
	Adding file:   SYS.COM        analyzing, crunching, done.
	Adding file:   TREE.EXE       analyzing, crunching, done.
	Adding file:   XCOPY.EXE      analyzing, crunching, done.

    C:\>DIR DOS.ARC

	 Volume in drive C is PCJS ORG   
	 Directory of  C:\

	DOS      ARC   338459   7-07-86  12:00p

Listing the contents of `DOS.ARC` shows that the original total size of all the files was 426387, so the archive reduced that total by over 20% -- not bad for a bunch of binary files.  In 1986, that is.

    C:\> ARC L DOS.ARC
	Name          Length    Date     
	============  ========  =========
	ANSI.SYS          1651   7 Jul 86
	APPEND.COM        1725   7 Jul 86
	ASSIGN.COM        1523   7 Jul 86
	ATTRIB.EXE        8234   7 Jul 86
	BACKUP.EXE       23404   7 Jul 86
	CHKDSK.EXE        9680   7 Jul 86
	COMMAND.COM      23612   7 Jul 86
	DEBUG.EXE        15647   7 Jul 86
	DISKCOMP.EXE      3808   7 Jul 86
	DISKCOPY.EXE      4096   7 Jul 86
	DRIVER.SYS        1102   7 Jul 86
	EDLIN.EXE         7356   7 Jul 86
	EXE2BIN.EXE       3050   7 Jul 86
	FC.EXE           14558   7 Jul 86
	FDISK.EXE        16830   7 Jul 86
	FIND.EXE          6403   7 Jul 86
	FORMAT.EXE       11005   7 Jul 86
	GRAFTABL.EXE      8210   7 Jul 86
	GRAPHICS.EXE     13170   7 Jul 86
	GWBASIC.EXE      78864   7 Jul 86
	JOIN.EXE          9012   7 Jul 86
	KEYBDV.EXE        2886   7 Jul 86
	KEYBFR.EXE        2948   7 Jul 86
	KEYBGR.EXE        2940   7 Jul 86
	KEYBIT.EXE        2892   7 Jul 86
	KEYBSP.EXE        2983   7 Jul 86
	KEYBUK.EXE        2886   7 Jul 86
	LABEL.EXE         2750   7 Jul 86
	LINK.EXE         43988   7 Jul 86
	MODE.EXE         13928   7 Jul 86
	MORE.COM           282   7 Jul 86
	PRINT.EXE         8824   7 Jul 86
	RAMDRIVE.SYS      6462   7 Jul 86
	RECOVER.EXE       4145   7 Jul 86
	REPLACE.EXE       4852   7 Jul 86
	RESTORE.EXE      21750   7 Jul 86
	SHARE.EXE         8544   7 Jul 86
	SORT.EXE          1898   7 Jul 86
	SUBST.EXE         9898   7 Jul 86
	SYS.COM           4607   7 Jul 86
	TREE.EXE          8588   7 Jul 86
	XCOPY.EXE         5396   7 Jul 86
	        ====  ========
	Total     42    426387  

Fast forward 35 years later.  After reading thousands of old diskettes in storage and collecting all their contents onto my laptop, I noticed there were a lot of `.ARC` files (and even more `.ZIP` files), and since disk space was no longer a premium, I decided to expand them all.

Fortunately, the archive utility I use on my MacBook ("[The Unarchiver](https://theunarchiver.com)") has a command-line utility, `unar`, that knows how to deal with both `.ARC` and `.ZIP` files.

I wasn't expecting the hundreds of old `.ARC` and `.ZIP` archives to decompress without issues, especially because a few of them had come from diskettes with unrecoverable read errors, but there were *far* more problems than I had expected.

The most common problem was actually with `.ZIP` files, and whenever `unar` ran into a problem, it wasn't very helpful.  For example:

    unar -o BOXES3 PCMAG-VOL07N15/BOXES3.ZIP
    BOXES3  (384 B)... OK.
    BOXES3.C  (10496 B)... Failed! (File is not fully supported)
    BOXES3.DEF  (384 B)... OK.
    BOXES3.EXE  (5552 B)... Failed! (File is not fully supported)
    BOXES3.H  (384 B)... OK.
    BOXES3.RC  (3868 B)... Failed! (File is not fully supported)

The problem became clearer after running a vintage copy of `PKUNZIP` on the archives:

	C:\TMP>PKUNZIP -V BOXES3.ZIP

	PKUNZIP (tm)    FAST!    Extract Utility    Version 1.02    10-01-89
	Copyright 1989 PKWARE Inc.  All Rights Reserved.  PKUNZIP/h for help

	Searching ZIP: BOXES3.ZIP

	 Length  Method   Size  Ratio   Date    Time   CRC-32  Attr  Name
	 ------  ------   ----- -----   ----    ----   ------  ----  ----
	    384  Shrunk     189  51%  05-13-88  16:27  301e262c --w  BOXES3
	  10496  Reduce4   3019  72%  05-15-88  01:43  746c8158 --w  BOXES3.C
	    384  Shrunk     247  36%  05-13-88  16:27  cd620860 --w  BOXES3.DEF
	   5552  Reduce4   3827  32%  05-16-88  14:55  7dd8923c --w  BOXES3.EXE
	    384  Shrunk     207  47%  05-13-88  16:24  84b5ba7c --w  BOXES3.H
	   3868  Reduce4   1307  67%  08-01-88  04:49  b1f16a7f --w  BOXES3.RC
	 ------          ------  ---                                 -------
	  21068            8796  59%                                       6

Apparently, the *Reduce4* compression method was short-lived, and as a result, almost no modern archive utilities support it.  See this [excellent write-up](https://www.hanshq.net/zip2.html) on legacy ZIP compression methods like *Reduce* for more details.

There were also number of `.ARC` files that had more mysterious problems.  For example, I had *three* different `.ARC` backups of an old OS/2 utility I had written in early 1988 named "Cue".  It was a handy program that saved ("queued") your OS/2 command-line history for quick recall and editing.  Unfortunately, *none* of the three `CUE.ARC` archives could be completely decompressed.  Here is what `unar` reported:

    unar -o CUE -d CUE.ARC
    CUE  (2151 B)... OK.
    CUE.C  (20157 B)... Failed! (Error on decrunching)
    CUE.DEF  (35 B)... Failed! (Wrong checksum)
    CUE.DOC  (12913 B)... Failed! (Error on decrunching)
    CUE.EXE  (16463 B)... Failed! (Data is corrupted)
    CUE.H  (11829 B)... OK.
    CUE.MAP  (13942 B)... Failed! (Error on decrunching)
    CUE.OBJ  (8456 B)... Failed! (Data is corrupted)
    CUE.SYM  (2228 B)... Failed! (Data is corrupted)
    CUE.SYS  (1405 B)... Failed! (Data is corrupted)
    CUECOMM.C  (5961 B)... OK.
    CUECOMM.OBJ  (1710 B)... OK.
    CUEFIND.C  (10264 B)... Failed! (Data is corrupted)
    CUEFIND.OBJ  (3133 B)... Failed! (Data is corrupted)
    CUEHIST.C  (7435 B)... Failed! (Data is corrupted)
    CUEHIST.OBJ  (2379 B)... Failed! (Data is corrupted)
    CUEKBD.C  (2958 B)... Failed! (Data is corrupted)
    CUEKBD.OBJ  (911 B)... Failed! (Data is corrupted)
    CUEKREG.C  (15653 B)... Failed! (Error on decrunching)
    CUEKREG.OBJ  (4108 B)... Failed! (Data is corrupted)
    CUEKSUP.C  (5623 B)... Failed! (Data is corrupted)
    CUEKSUP.OBJ  (2010 B)... Failed! (Data is corrupted)
    CUEMSE.C  (2404 B)... Failed! (Data is corrupted)
    CUEMSE.OBJ  (672 B)... Failed! (Data is corrupted)
    CUEPOP.C  (19345 B)... Failed! (Error on decrunching)
    CUEPOP.OBJ  (5421 B)... Failed! (Data is corrupted)
    CUEPROC.C  (8774 B)... Failed! (Data is corrupted)
    CUEPROC.OBJ  (2675 B)... Failed! (Data is corrupted)
    CUEREG.C  (14679 B)... Failed! (Error on decrunching)
    CUEREG.OBJ  (3655 B)... Failed! (Data is corrupted)
    CUESUBS.C  (10744 B)... Failed! (Data is corrupted)
    CUESUBS.DEF  (1452 B)... Failed! (Data is corrupted)
    CUESUBS.DLL  (33077 B)... OK.
    CUESUBS.H  (12841 B)... OK.
    CUESUBS.LIB  (3584 B)... Failed! (Data is corrupted)
    CUESUBS.LRF  (170 B)... Failed! (Data is corrupted)
    CUESUBS.MAP  (19524 B)... OK.
    CUESUBS.OBJ  (3481 B)... Failed! (Data is corrupted)
    CUESUBS.SYM  (2516 B)... OK.
    CUESUP.ASM  (49248 B)... Failed! (Error on decrunching)
    CUESUP.OBJ  (5357 B)... Failed! (Data is corrupted)
    CUESYS.ASM  (8003 B)... Failed! (Data is corrupted)
    CUESYS.DEF  (28 B)... Failed! (Wrong checksum)
    CUESYS.INC  (18064 B)... Failed! (Error on decrunching)
    CUESYS.MAP  (916 B)... Failed! (Data is corrupted)
    CUESYS.OBJ  (882 B)... Failed! (Data is corrupted)
    CUESYS.SYM  (244 B)... Failed! (Data is corrupted)
    CUESYS.SYS  (1405 B)... Failed! (Data is corrupted)
    CUETTY.C  (1967 B)... OK.
    CUETTY.OBJ  (573 B)... OK.
    CUEUTIL.C  (2624 B)... Failed! (Data is corrupted)
    CUEUTIL.OBJ  (696 B)... Failed! (Data is corrupted)
    CUEVIO.C  (7116 B)... Failed! (Data is corrupted)
    CUEVIO.OBJ  (2226 B)... Failed! (Data is corrupted)
    CUEVREG.C  (20393 B)... OK.
    CUEVREG.OBJ  (4055 B)... OK.
    DEBUG.ASM  (342 B)... Failed! (Data is corrupted)
    DEBUG.OBJ  (84 B)... Failed! (Wrong checksum)
    READ.ME  (11148 B)... Failed! (Data is corrupted)
    TOOLS.INI  (9754 B)... Failed! (Data is corrupted)

So I switched back to an IBM PC and asked the `ARC` utility to list the archive's contents:

	C:\TMP>ARC L CUE
	Name          Length    Date     
	============  ========  =========
	CUE               2151  27 Feb 89
	I don't know how to handle file CUE.C in archive CUE.ARC
	I think you need a newer version of ARC.

Well, there were newer versions of `ARC`, but no, that was not the problem.

### The Sad History of ARC Files

In 1986, Phil Katz ("PK") was a software developer who saw an opportunity to make a faster version of `ARC`, apparently by taking the original source code and rewriting key portions in assembly language.  He formed the company **PKware** and released his version as two separate programs: `PKARC` to create and update archives, and `PKXARC` to extract files from them.

And he didn't stop there.  You may have noticed in my MS-DOS 3.20 example that `ARC` chose from a variety of storage methods, such as "packing", "crunching", and "squeezing".  `ARC` would choose whichever method was appropriate for a particular file.  Katz went a step farther, and with the release of `PKARC` version 2.0 and `PKXARC` version 3.4 (both dated 12-15-86), added "squashing".

Unfortunately, "squashing" created a lot of confusion, because it meant any `.ARC` archive that contained "squashed" files was unusable by *any* version of `ARC`, as well as earlier versions of `PKARC` and `PKXARC`.  And even if there was precedent for this (if, for example, either of `ARC`'s "crunching" or "squeezing" methods had been added after `ARC`'s initial release), the large number of `.ARC` files being circulated at the time made this change *much* more problematic.

Compounding matters were questions of whether PKware had violated SEA's copyrights or trademarks, including the use of SEA's source code without permission.  PKware also started running ads, like the April 1988 PC Tech Journal ad shown below, which reportedly infuriated SEA.  A [lawsuit](http://www.bbsdocumentary.com/library/CONTROVERSY/LAWSUITS/SEA/) ensued, and while a settlement was ultimately reached, PKware simply pivoted to a different archive format (`.ZIP`) and a new set of utilities (`PKZIP` and `PKUNZIP`).  The ZIP era was born, and the ARC era gradually came to an end.

![PC Tech Journal April 1988 "ARC" Ads](/blog/images/pkarc-1988-04.jpg)

There's a good segment on YouTube from [BBS The Documentary](https://www.youtube.com/watch?v=uNXCd2EATSo) by Jason Scott that was filmed around 15 years after the controversy, if you want to learn more about it.

### Returning to the ARC of My Story

Getting back to those `CUE.ARC` archives that I couldn't decompress, `PKXARC` version 3.5 recognized all the compression methods being used, including the infamous "squash" method:

	C:\TMP>PKXARC -V CUE

	PKXARC    FAST!    Archive Extract Utility    Version 3.5    04-27-87
	Copyright (c) 1986,1987 PKWARE Inc. All Rights Reserved. PKXARC/h for help

	Searching: CUE.ARC

	Filename        Length   Method     Size   Ratio    Date      Time    CRC
	--------        ------   ------    ------  -----    ----      ----    ---
	CUE               2151  Crunched     1071   51%   02-27-89  22:19:02  F48B
	CUE.C            20157  Squashed     9802   52%   02-26-89  11:23:30  CFBE
	CUE.DEF             35   Stored        35    0%   08-29-88  23:50:22  5050
	CUE.DOC          12913  Squashed     6673   49%   04-17-88  01:02:50  814E
	CUE.EXE          16463  Crunched    12327   26%   02-26-89  12:10:58  A164
	CUE.H            11829  Crunched     5480   54%   02-28-89  21:31:00  9178
	CUE.MAP          13942  Squashed     4769   66%   02-26-89  12:10:58  2437
	CUE.OBJ           8456  Crunched     6780   20%   02-26-89  12:10:52  2EF3
	CUE.SYM           2228  Crunched     1959   13%   02-26-89  12:11:42  895B
	CUE.SYS           1405  Crunched      576   60%   01-24-89  12:02:18  F11C
	CUECOMM.C         5961  Crunched     3171   47%   02-28-89  10:03:42  F8F4
	CUECOMM.OBJ       1710  Crunched     1457   15%   02-28-89  10:04:34  2E67
	CUEFIND.C        10264  Crunched     4526   56%   10-27-88  02:05:44  CA6D
	CUEFIND.OBJ       3133  Crunched     2561   19%   01-24-89  11:51:14  4BF7
	CUEHIST.C         7435  Crunched     3698   51%   10-27-88  00:06:36  F442
	CUEHIST.OBJ       2379  Crunched     2054   14%   01-24-89  11:53:58  2760
	CUEKBD.C          2958  Crunched     1650   45%   10-25-88  00:02:50  9B67
	CUEKBD.OBJ         911  Crunched      774   16%   01-24-89  11:51:30  52D4
	CUEKREG.C        15653  Squashed     7305   54%   02-19-89  11:35:06  916C
	CUEKREG.OBJ       4108  Crunched     3359   19%   02-19-89  11:54:02  4A91
	CUEKSUP.C         5623  Crunched     2529   56%   09-25-88  23:50:28  EFEC
	CUEKSUP.OBJ       2010  Crunched     1621   20%   01-24-89  11:53:42  B135
	CUEMSE.C          2404  Crunched     1424   41%   09-30-88  13:02:00  8338
	CUEMSE.OBJ         672  Crunched      572   15%   01-24-89  11:53:28  7D07
	CUEPOP.C         19345  Squashed     8142   58%   10-30-88  12:34:18  1903
	CUEPOP.OBJ        5421  Crunched     4229   22%   01-24-89  11:50:48  0F92
	CUEPROC.C         8774  Crunched     4574   48%   09-30-88  13:47:30  0662
	CUEPROC.OBJ       2675  Crunched     2249   16%   01-24-89  11:54:18  A980
	CUEREG.C         14679  Squashed     7116   52%   02-19-89  12:44:28  A1AD
	CUEREG.OBJ        3655  Crunched     3010   18%   02-19-89  12:46:06  89D8
	CUESUBS.C        10744  Crunched     5235   52%   02-19-89  11:14:36  AABF
	CUESUBS.DEF       1452  Crunched      863   41%   02-18-89  04:38:10  4FC1
	CUESUBS.DLL      33077  Crunched    24885   25%   02-28-89  22:52:32  84A7
	CUESUBS.H        12841  Squashed     6232   52%   02-28-89  22:22:02  8C23
	CUESUBS.LIB       3584  Crunched     1294   64%   09-29-88  22:13:40  7338
	CUESUBS.LRF        170  Crunched      123   28%   02-18-89  03:51:42  89E8
	CUESUBS.MAP      19524  Squashed     6474   67%   02-28-89  22:52:30  F1AC
	CUESUBS.OBJ       3481  Crunched     2770   21%   02-19-89  11:16:08  582A
	CUESUBS.SYM       2516  Crunched     2256   11%   02-28-89  22:52:36  F010
	CUESUP.ASM       49248  Squashed    20230   59%   02-26-89  11:24:02  113F
	CUESUP.OBJ        5357  Crunched     4004   26%   02-26-89  12:11:02  8264
	CUESYS.ASM        8003  Crunched     4209   48%   10-24-88  22:41:00  4071
	CUESYS.DEF          28   Stored        28    0%   08-07-88  02:20:28  85B4
	CUESYS.INC       18064  Squashed     9382   49%   08-19-88  18:14:04  3363
	CUESYS.MAP         916  Crunched      441   52%   01-24-89  12:02:18  1852
	CUESYS.OBJ         882  Crunched      771   13%   01-24-89  12:02:14  1C38
	CUESYS.SYM         244  Crunched      186   24%   01-24-89  12:02:20  5A34
	CUESYS.SYS        1405  Crunched      576   60%   01-24-89  12:02:18  F11C
	CUETTY.C          1967  Crunched     1068   46%   02-28-89  21:27:00  65DD
	CUETTY.OBJ         573  Crunched      469   19%   02-28-89  21:46:04  EC7A
	CUEUTIL.C         2624  Crunched     1504   43%   10-27-88  02:18:58  022A
	CUEUTIL.OBJ        696  Crunched      606   13%   01-24-89  11:54:44  476A
	CUEVIO.C          7116  Crunched     3699   49%   10-27-88  15:15:54  2D88
	CUEVIO.OBJ        2226  Crunched     1772   21%   01-24-89  11:51:46  4FBF
	CUEVREG.C        20393  Squashed     8842   57%   02-28-89  22:51:14  473A
	CUEVREG.OBJ       4055  Crunched     3097   24%   02-28-89  22:52:18  1572
	DEBUG.ASM          342  Crunched      270   22%   10-25-88  00:16:26  E534
	DEBUG.OBJ           84   Stored        84    0%   01-24-89  11:48:44  9440
	READ.ME          11148  Crunched     5951   47%   01-24-89  17:09:06  BA31
	TOOLS.INI         9754  Crunched     4356   56%   02-25-89  11:36:32  E566
	-----           ------             ------  -----
	0060            441863             237170   47%

However, neither `PKXARC` 3.5 nor any other version I tried could extract all the files; an "archive integrity" test using `-t` reported the same failures, and it didn't seem to matter if the files were "squashed", "crunched", or just "stored":

	C:\TMP>PKXARC -T CUE

	PKXARC    FAST!    Archive Extract Utility    Version 3.5    04-27-87
	Copyright (c) 1986,1987 PKWARE Inc. All Rights Reserved. PKXARC/h for help

	Searching: CUE.ARC
	Testing: CUE           Ok
	Testing: CUE.C         Warning!  file CUE.C fails CRC check.
	Testing: CUE.DEF       Warning!  file CUE.DEF fails CRC check.
	Testing: CUE.DOC       Warning!  file CUE.DOC fails CRC check.
	Testing: CUE.EXE       Warning!  file CUE.EXE fails CRC check.
	Testing: CUE.H         Ok
	Testing: CUE.MAP       Warning!  file CUE.MAP fails CRC check.
	Testing: CUE.OBJ       Warning!  file CUE.OBJ fails CRC check.
	Testing: CUE.SYM       Warning!  file CUE.SYM fails CRC check.
	Testing: CUE.SYS       Warning!  file CUE.SYS fails CRC check.
	Testing: CUECOMM.C     Ok
	Testing: CUECOMM.OBJ   Ok
	Testing: CUEFIND.C     Warning!  file CUEFIND.C fails CRC check.
	Testing: CUEFIND.OBJ   Warning!  file CUEFIND.OBJ fails CRC check.
	Testing: CUEHIST.C     Warning!  file CUEHIST.C fails CRC check.
	Testing: CUEHIST.OBJ   Warning!  file CUEHIST.OBJ fails CRC check.
	Testing: CUEKBD.C      Warning!  file CUEKBD.C fails CRC check.
	Testing: CUEKBD.OBJ    Warning!  file CUEKBD.OBJ fails CRC check.
	Testing: CUEKREG.C     Warning!  file CUEKREG.C fails CRC check.
	Testing: CUEKREG.OBJ   Warning!  file CUEKREG.OBJ fails CRC check.
	Testing: CUEKSUP.C     Warning!  file CUEKSUP.C fails CRC check.
	Testing: CUEKSUP.OBJ   Warning!  file CUEKSUP.OBJ fails CRC check.
	Testing: CUEMSE.C      Warning!  file CUEMSE.C fails CRC check.
	Testing: CUEMSE.OBJ    Warning!  file CUEMSE.OBJ fails CRC check.
	Testing: CUEPOP.C      Warning!  file CUEPOP.C fails CRC check.
	Testing: CUEPOP.OBJ    Warning!  file CUEPOP.OBJ fails CRC check.
	Testing: CUEPROC.C     Warning!  file CUEPROC.C fails CRC check.
	Testing: CUEPROC.OBJ   Warning!  file CUEPROC.OBJ fails CRC check.
	Testing: CUEREG.C      Warning!  file CUEREG.C fails CRC check.
	Testing: CUEREG.OBJ    Warning!  file CUEREG.OBJ fails CRC check.
	Testing: CUESUBS.C     Warning!  file CUESUBS.C fails CRC check.
	Testing: CUESUBS.DEF   Warning!  file CUESUBS.DEF fails CRC check.
	Testing: CUESUBS.DLL   Ok
	Testing: CUESUBS.H     Ok
	Testing: CUESUBS.LIB   Warning!  file CUESUBS.LIB fails CRC check.
	Testing: CUESUBS.LRF   Warning!  file CUESUBS.LRF fails CRC check.
	Testing: CUESUBS.MAP   Ok
	Testing: CUESUBS.OBJ   Warning!  file CUESUBS.OBJ fails CRC check.
	Testing: CUESUBS.SYM   Ok
	Testing: CUESUP.ASM    Warning!  file CUESUP.ASM fails CRC check.
	Testing: CUESUP.OBJ    Warning!  file CUESUP.OBJ fails CRC check.
	Testing: CUESYS.ASM    Warning!  file CUESYS.ASM fails CRC check.
	Testing: CUESYS.DEF    Warning!  file CUESYS.DEF fails CRC check.
	Testing: CUESYS.INC    Warning!  file CUESYS.INC fails CRC check.
	Testing: CUESYS.MAP    Warning!  file CUESYS.MAP fails CRC check.
	Testing: CUESYS.OBJ    Warning!  file CUESYS.OBJ fails CRC check.
	Testing: CUESYS.SYM    Warning!  file CUESYS.SYM fails CRC check.
	Testing: CUESYS.SYS    Warning!  file CUESYS.SYS fails CRC check.
	Testing: CUETTY.C      Ok
	Testing: CUETTY.OBJ    Ok
	Testing: CUEUTIL.C     Warning!  file CUEUTIL.C fails CRC check.
	Testing: CUEUTIL.OBJ   Warning!  file CUEUTIL.OBJ fails CRC check.
	Testing: CUEVIO.C      Warning!  file CUEVIO.C fails CRC check.
	Testing: CUEVIO.OBJ    Warning!  file CUEVIO.OBJ fails CRC check.
	Testing: CUEVREG.C     Ok
	Testing: CUEVREG.OBJ   Ok
	Testing: DEBUG.ASM     Warning!  file DEBUG.ASM fails CRC check.
	Testing: DEBUG.OBJ     Warning!  file DEBUG.OBJ fails CRC check.
	Testing: READ.ME       Warning!  file READ.ME fails CRC check.
	Testing: TOOLS.INI     Warning!  file TOOLS.INI fails CRC check.

I could chalk up the errors in *one* `CUE.ARC` file to possible disk corruption, but I had *three* different `CUE.ARC` archives, made at different times, and stored on *three* different diskettes.  Why would they *all* be plagued by similar decompression errors?

### Not Corrupted, Just "Garbled"

After more digging, I found a set of *unarchived* files that had timestamps similar to those in the "corrupted" archive, and when I looked at the first two files in the archive:

	Testing: CUE           Ok
	Testing: CUE.C         Warning!  file CUE.C fails CRC check.

the unarchived copy of `CUE` was identical to the archived copy, and the unarchived copy of `CUE.C` was exactly the same size, so it was probably also identical.  So I found and tweaked a [UNIX version of ARC](https://github.com/jeffpar/arc), and then I used that to create a "good" `.ARC` with just those two files.

Then I ran `ARC` and watched it decode.

Here's the section containing the header for `CUE.C` in the "good" archive:

    00000440  47 87 23 04 5c 9d 2e 18  c1 2a 2a 00 1a 09 43 55  |G.#.\....**...CU|
    00000450  45 2e 43 00 25 25 25 25  25 25 25 4a 26 00 00 9c  |E.C.%%%%%%%J&...|
    00000460  12 ec 5a be cf bd 4e 00  00 2f 54 80 00 31 a4 4a  |..Z...N../T..1.J|

The file header began at 0x44C with marker byte 0x1A, followed by "squashed" compression type 0x09; the name of the file ("CUE.C"); the compressed file size (0x264A); date, time, and CRC words; the uncompressed file size (0x4EBD); and finally the compressed data stream at offset 0x469:

    2f 54 80 00 31 a4 4a ...

which corresponded to the first few byte of `CUE.C`:

    00000000  2f 2a 20 20 43 55 45 2e  43 0d 0a 20 2a 20 20 42  |/*  CUE.C.. *  B|
    00000010  79 20 4a 65 66 66 20 50  61 72 73 6f 6e 73 20 20  |y Jeff Parsons  |

Now here's the same section from the "corrupted" archive:

    00000440  47 87 23 04 5c 9d 2e 18  c1 2a 2a 00 1a 09 43 55  |G.#.\....**...CU|
    00000450  45 2e 43 00 25 25 25 25  25 25 00 4a 26 00 00 5a  |E.C.%%%%%%.J&..Z|
    00000460  12 ef 5a be cf bd 4e 00  00 78                    |..Z...N..x      |

The date and time words were different, but both the compressed and uncompressed sizes were the same, and even the CRC values (0xCFBE) were identical.  And yet, the compressed data streams were completely different; the "good" stream began with 0x2F, but the "corrupted" stream began with 0x78.

At this point, I stopped debugging and thought for a minute.  I had just watched `ARC` read the compressed data using this function:

```c
    getb_unp(f)
    FILE *f;
    {
        register u_int len;

        if (stdlen) {
                len = (stdlen < MYBUF) ? stdlen : MYBUF;

                len = fread(pinbuf, 1, len, f);

                if (password)
                        codebuf(pinbuf, len);
        
                stdlen -= len;
        } else
                len = 0;
        
        return (len);
    }
```

and then it hit me: what if I had used a *password* on *some* of the files in the archive?  That might explain why none of the compressed bytes looked the same.  So I took a quick look at *codebuf()*:

```c
    VOID
    codebuf(buf, len)               /* encrypt a buffer */
    reg char       *buf;
    u_int           len;
    {
            reg u_int       i;
            reg char       *pasptr = p;

            for (i = 0; i < len; i++) {
                    if (!*pasptr)
                            pasptr = password;
                    *buf++ ^= *pasptr++;
            }
            p = pasptr;
    }
```

and all it did was sequentially XOR every byte in the buffer with bytes from the password.  So I took the first byte from each compressed stream again (0x2F and 0x78), XOR'ed them, and got 0x54, or capital "W".  I repeated the process until the letters began repeating, and now I had the complete 6-letter password.  Every file that had originally reported a CRC error could now be successfully extracted with that password.

I'm still not sure why I would have bothered password-protecting *any* of the files in the archive, let alone only *some* of them.  `ARC` will clearly let you do that, but the result is a mess, because any unprotected files will appear corrupt if you supply *any* password, and any password-protected files will appear corrupt if you don't supply the *right* password.  And there's no hint in either case that you should -- or should not -- supply a password.

Here's an excerpt from the **ARC** [manual](https://raw.githubusercontent.com/hyc/arc/master/Arc521.doc) regarding this feature, known as the "Garble" option:

> This is not a particularly sophisticated means of encryption, and it is theoretically possible to crack. Still, since it is performed on the packed data, the result should be quite sufficient for casual use.
> 
> You can, if you wish, use different passwords for different files in an archive, but we advise against it.  If you are going to encrypt an archive, we suggest you use the same password for every file, and give the password whenever you do anything at all with the archive.  It is possible to list the entries in an encrypted archive using the "L" and "V" commands without giving the password, but nothing else will work properly.
> 
> We advise that you use this option sparingly, if at all.  If you should forget or mistype your password, it is highly unlikely that you will ever recover your data.

In retrospect, `ARC` probably should have had an "encrypted" indicator in each file header, so that it could simply bypass any encrypted files when no password was provided, as well as some means of verifying a compressed stream after unencrypting it (before attempting to decompress it).  `ARC` would usually halt and report a cryptic error when decoding an invalid ("garbled") data stream, but the error would be unpredictable, with no indication of what the real problem was -- not a very user-friendly result.

Anyway, to celebrate, I've added the entire contents of that weird `CUE.ARC` to a new [Cue](https://github.com/jeffpar/cue) repository, so that everyone can enjoy all that crusty, now-useless code from 1988.  **Cue** was a popular in-house OS/2 utility back in the day, but like so many other tools we used to use at Microsoft (**Z**, **WZMAIL**, etc), it's faded into oblivion.
