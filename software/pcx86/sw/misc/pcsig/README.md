---
layout: page
title: "PC-SIG Diskette Library: The (Almost) Complete Collection"
permalink: /software/pcx86/sw/misc/pcsig/
preview: /software/pcx86/sw/misc/pcsig/CD-ROM.jpg
redirect_from:
  - /software/pcx86/sw/misc/pcsig08/
  - /disks/pcx86/shareware/pcsig08/
machines:
  - id: pcsig
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/512kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A: None
      B: "PC-SIG Library Disk #0001"
    autoType: DATE $date\rTIME $time\rDIR B:\r
modules:
  - import DiskSearch from "/tools/modules/web/disksearch.js";
  - new DiskSearch("https://pcsigdisks.pcjs.org/pcx86/diskettes.json", "diskSearch", "diskResults", "pcsig");
---

The PC Software Interest Group, aka PC-SIG, began distributing public domain software and shareware on 5.25-inch diskettes
in the early 1980s, and over the next 10 years or so, the [PC-SIG Library](/blog/2023/04/06/) grew to thousands of diskettes.

To search the collection, try the new [Search](#search-the-pc-sig-collection) feature below.

{% include machine.html id="pcsig" %}

### Search the PC-SIG Collection

You can search this entire PC-SIG collection for a filename or a keyword, using the *very* simplistic search function provided below.
Our PC-SIG "database" doesn't include descriptions of all the diskettes yet, so results will be incomplete.  Stay tuned.

{% include web/search.html input="diskSearch" output="diskResults" %}

### Notes Regarding This Collection

{% comment %}
You can browse the collection by diskette:

- [0001-0999](0001-0999/)
- [1000-1999](1000-1999/)
- [2000-2999](2000-2999/)
- [3000-3999](3000-3999/)
- [4000-4999](4000-4999/)
{% endcomment %}
Disks 1-2485 were initially populated from the PC-SIG Library [9th Edition CD-ROM (December 1990)](https://archive.org/details/the-pc-sig-library-on-cd-rom-ninth-edition).  Note that while the face of the CD-ROM says "April 1990", the contents are actually circa December 1990.

Some of the diskettes had issues:

  - DISK0411.ZIP: invalid archive (empty file)
  - DISK0442.ZIP/SPAWN.DOC: decompression failure (6)
  - DISK0442.ZIP/PWARN.EXE: decompression failure (6)
  - DISK0442.ZIP/PWARN.PAS: decompression failure (6)
  - DISK0442.ZIP/PWARN.WAR: decompression failure (6)
  - DISK0442.ZIP/CK.DOC: decompression failure (6)
  - DISK0941.ZIP: invalid archive (empty file)
  - DISK1322.ZIP/NCRISK.BRD: decompression failure (6)
  - DISK2307 and DISK2389: missing

Also, the following diskettes were apparently "double-zipped":

  - DISK0186.ZIP contained DISK0186.ZIP
  - DISK0316.ZIP contained DISKO316.ZIP ('O' instead of '0')
  - DISK0912.ZIP contained DISK0912.ZIP

The following diskettes were then "back-filled" from the [8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig08/0001/), spanning diskettes 1-2121, since they had been removed from the 9th Edition:

  - DISK0126,     DISK0232,     DISK0395,     DISK0601,     DISK0623,     **DISK0624**, **DISK0626**,   DISK0712
  - DISK0757,     DISK0758,     DISK0792,     **DISK0914**, DISK0969,     DISK1024,     **DISK1036**,   DISK1061
  - **DISK1119**, **DISK1137**, **DISK1185**, DISK1195,     DISK1213,     DISK1257,     DISK1272,       DISK1355
  - DISK1363,     DISK1413,     DISK1414,     **DISK1493**, DISK1555,     DISK1583,     **DISK1608**,   DISK1649
  - DISK1707,     DISK1708,     DISK1710,     DISK1752,     DISK1780,     DISK1813,     DISK1863,       DISK1908
  - **DISK1915**, DISK1916,     DISK1969,     DISK1979,     DISK1980,     DISK1981,     DISK2000,       DISK2030,       DISK2063

Why didn't we simply start with the [8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig08/0001/) and then fill in additions from subsequent editions?  Because the 8th Edition did not preserve the diskettes as well as later editions; the 9th and later editions used ZIP files to preserve diskettes, whereas the 8th Edition only did so in a few cases (eg, if filenames used characters that weren't allowed on CD-ROM); those cases are **highlighted** above.

Disks 2486-2804 were populated from the [10th Edition CD-ROM (September 1991)](https://archive.org/details/The_PC-Sig_Library_Shareware_for_the_IBM_PC_and_Compatibles_PC-SIG_Tenth_Edition).

Disks 2805-3404 were populated from the [12th Edition CD-ROM (March 1993)](https://archive.org/details/PC-Sig_Library_12th_Edition_PC-SIG_1993), which was missing the following diskettes:

  - DISK2814, DISK2820, DISK2840, DISK2841, DISK2842, DISK2868, DISK2869, DISK2897
  - DISK2898, DISK2915, DISK2923, DISK2934, DISK2993, DISK3112, DISK3128, DISK3169
  - DISK3196, DISK3206, DISK3278, DISK3351, DISK3352, DISK3353, DISK3354, DISK3355
  - DISK3371, DISK3372, DISK3375, DISK3388, DISK3393

Disks 3405-4313 were populated from the [13th Edition CD-ROM (March 1994)](https://archive.org/details/PC-Sig_Library_13th_Edition_PC-SIG_1994) -- the last known CD-ROM edition.  It was missing the following diskettes:

  - DISK3423, DISK3425, DISK3462, DISK3503, DISK3553, DISK3554, DISK3560, DISK3562
  - DISK3614, DISK3617, DISK3680, DISK3724, DISK3757, DISK3761, DISK3762, DISK3766
  - DISK3767, DISK3786, DISK3863, DISK3879, DISK3885, DISK3897, DISK3933, DISK3993
  - DISK3994, DISK4000, DISK4002, DISK4005, DISK4006, DISK4007, DISK4011, DISK4012
  - DISK4013, DISK4014, DISK4015, DISK4016, DISK4017, DISK4018, DISK4019, DISK4020
  - DISK4056, DISK4060, DISK4062, DISK4063, DISK4064, DISK4065, DISK4066, DISK4067
  - DISK4068, DISK4069, DISK4098, DISK4146, DISK4204, DISK4205, DISK4206, DISK4207
  - DISK4208, DISK4209, DISK4210, DISK4211, DISK4212, DISK4213, DISK4214, DISK4215
  - DISK4216, DISK4217, DISK4218, DISK4219, DISK4220, DISK4221, DISK4222, DISK4223
  - DISK4224, DISK4225, DISK4226, DISK4227, DISK4228, DISK4229, DISK4230, DISK4231
  - DISK4232, DISK4233, DISK4234, DISK4235, DISK4236, DISK4237, DISK4238, DISK4239
  - DISK4240, DISK4241, DISK4242, DISK4243, DISK4244, DISK4245, DISK4246, DISK4247
  - DISK4248, DISK4249, DISK4250, DISK4251, DISK4252, DISK4253, DISK4254, DISK4255
  - DISK4256, DISK4257, DISK4258, DISK4259, DISK4260, DISK4261, DISK4262, DISK4263
  - DISK4264, DISK4265, DISK4266, DISK4267, DISK4268, DISK4269, DISK4270, DISK4271
  - DISK4272, DISK4273, DISK4274, DISK4275, DISK4276, DISK4277, DISK4278, DISK4279
  - DISK4280, DISK4281, DISK4282, DISK4283, DISK4284, DISK4294, DISK4295, DISK4296
  - DISK4297, DISK4298, DISK4299, DISK4300, DISK4301, DISK4311, DISK4312

Last but not least, a small number of *original* PC-SIG diskettes have been located, so those have replaced the CD-ROM versions, since that's how the library was originally distributed.  Those diskettes include:

  - [DISK0147](0001-0999/DISK0147/), [DISK0287](0001-0999/DISK0287/), [DISK0288](0001-0999/DISK0288/), [DISK0825](0001-0999/DISK0825/), [DISK0830](0001-0999/DISK0830/), [DISK0904](0001-0999/DISK0904/), [DISK0905](0001-0999/DISK0905/), [DISK0918](0001-0999/DISK0918/)
  - [DISK1287](1000-1999/DISK1287/), [DISK1288](1000-1999/DISK1288/), [DISK1364](1000-1999/DISK1364/), [DISK1643](1000-1999/DISK1643/), [DISK1665](1000-1999/DISK1665/), [DISK1933](1000-1999/DISK1933/), [DISK2018](2000-2999/DISK2018/), [DISK2029](2000-2999/DISK2029/)
  - [DISK2151](2000-2999/DISK2151/), [DISK2510](2000-2999/DISK2510/), [DISK2533](2000-2999/DISK2533/), [DISK2537](2000-2999/DISK2537/), [DISK2555](2000-2999/DISK2555/), [DISK2565](2000-2999/DISK2565/), [DISK2602](2000-2999/DISK2602/), [DISK2603](2000-2999/DISK2603/)
  - [DISK2638](2000-2999/DISK2638/), [DISK2646](2000-2999/DISK2646/), [DISK2650](2000-2999/DISK2650/), [DISK2672](2000-2999/DISK2672/)

Unfortunately, an "original" PC-SIG diskette comes with a big caveat, because PC-SIG routinely updated the contents of its diskettes as software authors released updates.  For example, the first versions of [DISK0287](0001-0999/DISK0287/) and [DISK0288](0001-0999/DISK0288/) would have been created in the mid-1980s, but the diskettes in our collection were updated in 1991 with a newer version of "File Express".

So another challenge in creating a truly complete PC-SIG diskette collection would be collecting *every* version (or at least every *first* version) of every diskette that PC-SIG ever released -- a challenge that seems impossible at this point.

A potentially achievable intermediate step would be locating copies of all diskettes that were later removed from the collection.  Here is a list of all diskettes explicitly marked as "withdrawn":

  - DISK0005, DISK0032, DISK0063, DISK0068, DISK0076, DISK0094, DISK0129, DISK0137
  - DISK0164, DISK0166, DISK0213, DISK0250, DISK0333, DISK0357, DISK0418, DISK0449
  - DISK0458, DISK0463, DISK0464, DISK0467, DISK0480, DISK0492, DISK0497, DISK0505
  - DISK0508, DISK0509, DISK0516, DISK0518, DISK0522, DISK0529, DISK0541, DISK0552
  - DISK0559, DISK0560, DISK0561, DISK0576, DISK0602, DISK0603, DISK0620, DISK0630
  - DISK0634, DISK0645, DISK0653, DISK0689, DISK0699, DISK0726, DISK0727, DISK0728
  - DISK0729, DISK0730, DISK0734, DISK0773, DISK0787, DISK0788, DISK0801, DISK0803
  - DISK0822, DISK0824, DISK0826, DISK0831, DISK0836, DISK0838, DISK0887, DISK0894
  - DISK0924, DISK0986, DISK0998, DISK1015, DISK1066, DISK1086, DISK1089, DISK1110
  - DISK1112, DISK1116, DISK1117, DISK1123, DISK1135, DISK1142, DISK1149, DISK1157
  - DISK1169, DISK1197, DISK1203, DISK1236, DISK1237, DISK1238, DISK1263, DISK1264
  - DISK1265, DISK1308, DISK1350, DISK1401, DISK1440, DISK1441, DISK1442, DISK1443
  - DISK1444, DISK1445, DISK1446, DISK1447, DISK1448, DISK1567, DISK1601, DISK1602
  - DISK1603, DISK1628, DISK1672, DISK1732, DISK1749, DISK1754, DISK1830, DISK1846
  - DISK2136, DISK2137, DISK2218, DISK2317, DISK2562, DISK2563, DISK2577, DISK2578
  - DISK2643, DISK2681, DISK2694, DISK2704, DISK2785, DISK2789

However, this list is incomplete, because it doesn't include any diskettes implicitly withdrawn by simply being "erased" from the collection (eg, any diskettes noted above as missing from the 12th and 13th Edition CD-ROMs).

Locating an original PC-SIG CD-ROM from 1986 or 1987, like the one shown below in "[The PC-SIG Library 4th Edition (March 1987)](https://archive.org/details/pc-sig-library-4th-edition-1987-03)", would be a great first step toward getting more "original" diskette contents.

[![PC-SIG Library 4th Edition, Page 424](/blog/images/PC-SIG_Library_4th_Edition_P424.jpg)](/blog/2023/04/06/)

### PC-SIG CD-ROM from April 1988

A number of withdrawn diskettes have been identified on a PC-SIG CD-ROM from April 1988 that was recently shared with me, so I have created diskette images for them.  Some of the diskettes were preserved using ARC files, so in those cases, I created diskette images directly from the contents of the archives, using the `--arc` option in [diskimage.js](/tools/diskimage).  That option eliminates the need to extract the files to a local file system first and run the risk of the local operating system altering timestamps, mangling filenames, or failing to decompress out-dated compression formats.

See [Building PCjs Disk Images from ZIP (and ARC) files](/tools/diskimage#building-pcjs-disk-images-from-zip-and-arc-files) for more details.

    diskimage.js --dir="/Volumes/PC-SIG 1988-04/001_100/DISK0005" --output=DISK0005.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/001_100/DISK0076" --output=DISK0076.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/101_200/DISK0129/DISK0129.ARC" --output=DISK0129.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/101_200/DISK0164" --output=DISK0164.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/401_500/DISK0418/DISK0418.ARC" --output=DISK0418.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/401_500/DISK0458" --output=DISK0458.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/401_500/DISK0464" --output=DISK0464.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/401_500/DISK0480" --output=DISK0480.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/501_600/DISK0505" --output=DISK0505.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/501_600/DISK0559" --output=DISK0559.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/501_600/DISK0560" --output=DISK0560.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/501_600/DISK0576" --output=DISK0576.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/601_700/DISK0689" --output=DISK0689.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/701_800/DISK0726/DISK0726.ARC" --output=DISK0726.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0727" --output=DISK0727.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0728" --output=DISK0728.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0729" --output=DISK0729.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0730" --output=DISK0730.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0734" --output=DISK0734.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0773" --output=DISK0773.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/701_800/DISK0787" --output=DISK0787.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/701_800/DISK0788/DISK0788.ARC" --output=DISK0788.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0801/DISK0801.ARC" --output=DISK0801.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/801_900/DISK0803" --output=DISK0803.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/801_900/DISK0822" --output=DISK0822.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0824/DISK0824.ARC" --output=DISK0824.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0826/DISK0826.ARC" --output=DISK0826.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0831/DISK0831.ARC" --output=DISK0831.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/801_900/DISK0836" --output=DISK0836.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0838/DISK0838.ARC" --output=DISK0838.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0887/DISK0887.ARC" --output=DISK0887.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/801_900/DISK0894/DISK0894.ARC" --output=DISK0894.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/901_1000/DISK0924" --output=DISK0924.json
    diskimage.js --arc="/Volumes/PC-SIG 1988-04/901_1000/DISK0986/DISK0986.ARC" --output=DISK0986.json
    diskimage.js --dir="/Volumes/PC-SIG 1988-04/901_1000/DISK0998" --output=DISK0998.json
