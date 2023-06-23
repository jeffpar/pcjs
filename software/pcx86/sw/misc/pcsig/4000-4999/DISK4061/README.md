---
layout: page
title: "PC-SIG Diskette Library (Disk #4061)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4061/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4061"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DESCRIPT.TXT

{% raw %}
```
Medical Terminology Tutor is a self-paced educational program which teaches 
the basis of medical terminology as required in University and other school
endeavors. Meditutor will remember the progress of multiple students, and
allow them to each restart their lessons anytime later at the point where the
student left off. Each new student name creates a 60 byte file for recalling
the restart information.
  
The areas of studies range from medical stems, prefixes, suffixes, and 
thirteen areas of physical disorders. The last area of study, Abbreviations,
is supplied with registration of the program. 
 
Medical Terminology Tutor will run on any IBM compatible pc, with mono or
CGA, or VGA screen, using less than 100kb of memory. 
 
The price for registration is $30US.

```
{% endraw %}

## FILES.TXT

{% raw %}
```
             File                        Description

	d1.dat through d13.dat          Data for 'Disorders'
	Abbrev.dat			Data for 'Abbreviations'
	Prfixes.dat			Data for 'Prefixes'
	Stems.dat			Data for 'Stems'
	Suffixs.dat			Data for 'Suffixes'
	Medical.exe			Meditutor executable
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4061

     Volume in drive A has no label
     Directory of A:\

    MEDICAL  EXE     84478   7-24-93   8:31a
    D1       DAT      6218   4-14-87  10:32p
    D10      DAT      6685   4-14-87  12:35a
    D11      DAT      3024   4-14-87  12:17a
    D12      DAT      5029   4-14-87  12:25a
    D13      DAT      9694   4-14-87   1:48a
    D2       DAT      9777   4-14-87   1:12a
    D3       DAT     12297   4-14-87  12:58a
    D4       DAT      8575   4-14-87  12:39a
    D5       DAT     13670   4-14-87   3:12a
    D6       DAT     13429   4-14-87   1:20a
    D7       DAT     12518   4-14-87   8:57p
    D8       DAT      6055   4-14-87   1:29a
    D9       DAT      7493   4-14-87   6:53a
    ABBREV   DAT       109   7-10-93   5:38a
    PRFIXES  DAT      9102   4-14-87   1:31a
    STEMS    DAT      8223   4-14-87   4:34a
    SUFFIXS  DAT     10663   4-14-87   2:06a
    FILES    TXT       292   7-19-93   7:54a
    DESCRIPT TXT       793   7-24-93   9:23a
    GO       BAT        10   9-10-93   2:25p
           21 file(s)     228134 bytes
                           81920 bytes free
