---
layout: page
title: "PC-SIG Diskette Library: The (Almost) Complete Collection"
permalink: /software/pcx86/sw/misc/pcsig/
preview: /software/pcx86/sw/misc/pcsig/CD-ROM.jpg
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/512kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoMount:
      B: "PC-SIG Library Disk #0001"
    autoType: $date\r$time\rB:\rDIR\r
module_initialization:
  - import DiskSearch from '/tools/modules/web/disksearch.js';
  - new DiskSearch('https://pcsigdisks.pcjs.org/pcx86/diskettes.json', 'diskSearch', 'diskResults');
---

The PC Software Interest Group, aka PC-SIG, began distributing public domain software and shareware on 5.25-inch diskettes
in the mid-1980s, and over the next 10 years or so, the collection grew to thousands of diskettes.

{% include machine.html id="ibm5160" %}

### Search the PC-SIG Collection

You can search this entire PC-SIG collection for a filename or a keyword, using the *very* simplistic search function provided below.

{% include web/search.html input="diskSearch" output="diskResults" %}

### Notes Regarding This Collection

Disks 1-2485 were initially populated from the [PC-SIG Library 9th Edition CD-ROM (December 1990)](https://archive.org/details/the-pc-sig-library-on-cd-rom-ninth-edition).  Note that while the face of the CD-ROM says "April 1990", the contents are actually
circa December 1990.

Some of the disks had issues:

  - DISK0411.ZIP: invalid archive (empty file)
  - DISK0442.ZIP/SPAWN.DOC: decompression failure (6)
  - DISK0442.ZIP/PWARN.EXE: decompression failure (6)
  - DISK0442.ZIP/PWARN.PAS: decompression failure (6)
  - DISK0442.ZIP/PWARN.WAR: decompression failure (6)
  - DISK0442.ZIP/CK.DOC: decompression failure (6)
  - DISK0941.ZIP: invalid archive (empty file)
  - DISK1322.ZIP/NCRISK.BRD: decompression failure (6)
  - DISK2307 and DISK2389: missing

Also, the following disks were apparently "double-zipped":

  - DISK0186.ZIP contained DISK0186.ZIP
  - DISK0316.ZIP contained DISKO316.ZIP ('O' instead of '0')
  - DISK0912.ZIP contained DISK0912.ZIP

The following disks were then "back-filled" from the [8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig08/),
spanning disks 1-2121, since they had been removed from the 9th Edition:

  - DISK0126, DISK0232, DISK0395, DISK0601, DISK0623, DISK0624, DISK0626, DISK0712
  - DISK0757, DISK0758, DISK0792, DISK0914, DISK0969, DISK1024, DISK1036, DISK1061
  - DISK1119, DISK1137, DISK1185, DISK1195, DISK1213, DISK1257, DISK1272, DISK1355
  - DISK1363, DISK1413, DISK1414, DISK1493, DISK1555, DISK1583, DISK1608, DISK1649
  - DISK1707, DISK1708, DISK1710, DISK1752, DISK1780, DISK1813, DISK1863, DISK1908
  - DISK1915, DISK1916, DISK1969, DISK1979, DISK1980, DISK1981, DISK2000, DISK2030
  - DISK2063

Why didn't we simply start with the [8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig08/)
and then fill in additions from subsequent editions?  Because the 8th Edition did not preserve the diskettes as well
as later editions; the 9th and later editions used ZIP files to preserve diskettes, whereas the 8th Edition only did
so in a few cases (eg, if filenames used characters that weren't allowed on CD-ROM).

Disks 2486-2804 were populated from the [10th Edition CD-ROM (September 1991)](https://archive.org/details/The_PC-Sig_Library_Shareware_for_the_IBM_PC_and_Compatibles_PC-SIG_Tenth_Edition).

Disks 2805-3404 were populated from the [12th Edition CD-ROM (March 1993)](https://archive.org/details/PC-Sig_Library_12th_Edition_PC-SIG_1993),
which was missing the following disks:

  - DISK2814, DISK2820, DISK2840, DISK2841, DISK2842, DISK2868, DISK2869, DISK2897
  - DISK2898, DISK2915, DISK2923, DISK2934, DISK2993, DISK3112, DISK3128, DISK3169
  - DISK3196, DISK3206, DISK3278, DISK3351, DISK3352, DISK3353, DISK3354, DISK3355
  - DISK3371, DISK3372, DISK3375, DISK3388, DISK3393

Disks 3405-4313 were populated from the [13th Edition CD-ROM (March 1994)](https://archive.org/details/PC-Sig_Library_13th_Edition_PC-SIG_1994) -- the last known CD-ROM edition.  It was missing the following disks:

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

Last but not least, a small number of *original* PC-SIG diskettes have been located, so those have replaced the CD-ROM versions,
since that's how the library was originally distributed.  Those diskettes include:

  - DISK0147, DISK0287, DISK0288, DISK0825, DISK0830, DISK0904, DISK0905, DISK0918
  - DISK1287, DISK1288, DISK1364, DISK1643, DISK1665, DISK1933, DISK2018, DISK2029
  - DISK2151, DISK2510, DISK2533, DISK2537, DISK2555, DISK2565, DISK2602, DISK2603
  - DISK2638, DISK2646, DISK2650, DISK2672
