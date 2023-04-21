---
layout: page
title: "PC-SIG Diskette Library (Disk #451)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0451/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0451"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "CAVEQUEST"

    A graphics adventure game, in the same vein as Epyx's Temple of Aphsai.
    You start as an immortal, choose your new mortal attributes, and travel
    to Earth to seek out fame, fortune, and excitement.
    
    This is a rich and complex adventure with hundreds of hours of
    first-class entertainment in store for you. Onward!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECK.TXT

{% raw %}
```
         You can test your copy of the distribution diskette, to make 
         sure the copy is accurate, by entering the command CHECK *.* 
         and the output should look like this:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  QUEST   .COM         CRC = 5A B2

--> FILE:  QUEST   .000         CRC = 65 2F

--> FILE:  MONSTER .DEF         CRC = B1 B7

--> FILE:  PLAYER  .DEF         CRC = 58 58

--> FILE:  LEVEL1  .DEF         CRC = 3A 53

--> FILE:  LEVEL2  .DEF         CRC = 4D 03

--> FILE:  LEVEL3  .DEF         CRC = 16 17

--> FILE:  LEVEL4  .DEF         CRC = D0 92

--> FILE:  LEVEL5  .DEF         CRC = BC 3E

--> FILE:  SCROLL  .USE         CRC = 7E D6

--> FILE:  SCROLL  .OLD         CRC = 28 28

--> FILE:  SCROLL  .HNT         CRC = 06 E6

--> FILE:  READ    .ME          CRC = 55 5D

--> FILE:  SUPPORT .            CRC = 36 C5

--> FILE:  CHECK   .COM         CRC = BD 22

--> FILE:  CHECK   .TXT         CRC = unknown

 ---------------------> SUM OF CRCS = unknown

DONE


         The reason why the check.txt file is unknown is because the 
         above information is added to it.  Therefore, the sum will 
         also be unknown. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0451

     Volume in drive A has no label
     Directory of A:\

    CHECK    COM      1536  10-21-82   5:50p
    CHECK    TXT      1244   9-23-85   1:32a
    LEVEL1   DEF      2040   9-07-85  12:33a
    LEVEL2   DEF      2040   9-07-85  12:34a
    LEVEL3   DEF      2040   9-07-85  12:34a
    LEVEL4   DEF      2040   9-07-85  12:34a
    LEVEL5   DEF      2040   9-07-85  12:34a
    MONSTER  DEF       640   9-20-85   2:53a
    PLAYER   DEF       768   9-20-85   4:41a
    QUEST    000     31744   9-23-85  12:21a
    QUEST    COM     40733   9-23-85  12:22a
    READ     ME       1089   9-23-85  12:28a
    SCROLL   HNT      3064   9-07-85   1:35a
    SCROLL   OLD     13395   9-07-85   1:34a
    SCROLL   USE     39294   9-23-85   1:26a
    SUPPORT           1747   9-06-85  12:26p
           16 file(s)     145454 bytes
                           12288 bytes free
