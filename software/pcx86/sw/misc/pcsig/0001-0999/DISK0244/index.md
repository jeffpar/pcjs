---
layout: page
title: "PC-SIG Diskette Library (Disk #244)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0244/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0244"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SLIDE GENERATION"

    This program produces medium-quality slides and overhead transparencies.
    Images can be created, edited, saved, displayed, and printed using this
    program.  Overhead transparencies are produced by photocopying the
    printed output onto transparent material.  Photographic slides are
    produced by photographing the display or printed output.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES244.TXT

{% raw %}
```
Disk No  #244
Program Title: sLide version 1.0
PC-SIG version 1.1
 
sLide is a computer program which can produce high quality slides and
overhead transparencies (both referred to as sLides). A sLide can be
created, edited, saved, displayed, and printed using the sLide
program. Overhead transparencies can be produced by copying the
printed output onto transparent material. Photographic sLides can be
produced by photographing the printed output.
 
Each sLide may contain up to 18 lines of up to 40 characters each. For
photographic slides, the number of lines should be limited to 15 in
order to fit a standard 35 mm slide. Experience shows that sLides can
be read easily by an audience when the amount of material on a sLide
is kept within these limits.
 
Usage: Business application
 
System Requirements: IBM PC or close compatible with Color graphics
                     adapter, 1 disk drive, Dos 2.0 or later.
 
How to Start: type SLIDE (return)
 
Suggested Registration: $25.00
 
File Descriptions:
 
SLIDE    EXE  Master sLide program
SLIDE    SDE  Character data file
SLIDE    CTR  Control data for the sLide and sLidedoc programs
SLIDE    MAN  Squeezed manual
SLIDEDOC EXE  Program to un-squeeze and print manual
README   BAT  Program to control the display of the program description and
              instructions. Uses the batch files READ1, READ2, READ3, and
              READ4.
READ1    BAT  sLide Logo
READ2    BAT  sLide 1.0 description
READ3    BAT  Instructions to print manual and run sLide. Also announces
              the availability of the new sLide version 2.0 which is
              available for sale directly from the author.
READ4    BAT  Description of improvements of sLide 2.0 over sLide 1.0.
FILE     ASC  File descriptions
INVOICE  ASC  Invoice for contribution sLide 1.0
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG

```
{% endraw %}

## SUBMIT.DOC

{% raw %}
```
sLide                                    Suggested Donation $25


The purpose of this program is the production of medium quality
slides and overhead transparancies (both refered to as sLides). A
sLide is created, edited, saved, displayed, and printed using
this program.  Overhead transparancies are produced by copying
the printed output onto transparent material.  Photographic
slides are produced by photographing the printed output.


A single disk containing the sLide program, data files, and
documentation is available directly from the Author at a cost of
$7 to cover the disk, mailer, and mailing.

John R. Lehmann
11403 Rolling House Road
Rockville, MD 20852


                               sLide


SLIDE       .EXE        sLide Master program
SLIDE       .SDE        Character definition file
SLIDE       .CTR        Printer control code file
-README-    .BAT        Initiates the display of instructions
INSTRUCT    .ION        Instructions for printing the sLide
                          manual and running the sLide program
SLIDEDOC    .EXE        Expand and print sLide manual
SLIDE       .MAN        Sqeezed manual

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0244

     Volume in drive A has no label
     Directory of A:\

    FILE     ASC      1068   4-04-87   3:03p
    FILES244 TXT      1957   6-10-87  11:50a
    GO       BAT        38   6-10-87  11:57a
    GO       TXT       694   6-10-87  11:57a
    INVOICE  ASC       415   4-04-87   2:55p
    READ1              560  10-04-86   9:30p
    READ2              732  10-04-86  10:16p
    READ3              768  10-05-86   9:26a
    READ4              669  10-04-86   9:49p
    README   BAT       211  10-04-86   9:58p
    SLIDE    CTR       128   7-07-84  11:01p
    SLIDE    EXE     42624   7-09-84  10:19a
    SLIDE    MAN     13638   7-11-84   5:48p
    SLIDE    SDE     73472   6-27-84  10:39a
    SLIDEDOC EXE     24320   7-06-84  11:07p
    SUBMIT   DOC      1166  11-13-84  10:50p
           16 file(s)     162460 bytes
                          151552 bytes free
