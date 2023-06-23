---
layout: page
title: "PC-SIG Diskette Library (Disk #193)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0193/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0193"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEWILL"

    The California Legislature approved, effective Jan. 1, 1983 the use of
    a "Fill-in-the-blanks" approach for executing a valid will in
    California.  They apparently felt this was better than having people die
    without a will or with an invalid holographic will.  Two standard will
    forms have been approved.  This diskette contains both forms (printable)
    and a copy of the California civil code that covers the forms.  The
    documentation should provide some background for deciding whether you
    should have a will, whether either of the two California statutory will
    forms can serve your needs, or whether you should obtain the services of
    a lawyer to draft your will.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    PRINTING DOC  Information on printing FREEWILL GROUP.
    FREEWILL DOC  Introduction.
    BANNER   ASC  FREEWILL LOGO.
    C2       BAT  Execute "C2" in default drive for explanation.
    TRUST         Second choice of FORMS.
    WILL          First of two FORMS for your "Do-It-Yourself" will.
    FREEWILL ASC  Explanation text.
    PAGEII   ASC  Explanation text.
    PAGEIII  ASC  Explanation text.
    PAGEIV   ASC  Explanation text.
    PAGEIX   ASC  Explanation text.
    PAGEV    ASC  Explanation text.
    PAGEVI   ASC  Explanation text.
    PAGEVII  ASC  Explanation text.
    PAGEVIII ASC  Explanation text.
    DISCLAIM      Disclaimer for Freewill program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES193.TXT

{% raw %}
```
Disk No:  193
Program Title:  FREEWILL
PC-SIG version: 1.1

The California Legislature approved, effective Jan. 1, 1983 the use of
a "Fill-in-the-blanks" approach for executing a valid will in
California.  They apparently felt this was better than having people die
without a will or with an invalid holographic will.  Two standard will
forms have been approved.  This diskette contains both forms (printable)
and a copy of the California civil code that covers the forms.  The
documentation should provide some background for deciding whether you
should have a will, whether either of the two California statutory will
forms can serve your needs, or whether you should obtain the services of
a lawyer to draft your will.

Usage:  Preparing a Personal Will in California.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

PRINTING DOC  Information on printing FREEWILL GROUP.
FREEWILL DOC  Introduction.
BANNER   ASC  FREEWILL LOGO.
C2       BAT  Execute "C2" in default drive for explanation.
TRUST         Second choice of FORMS.
WILL          First of two FORMS for your "Do-It-Yourself" will.
FREEWILL ASC  Explanation text.
PAGEII   ASC  Explanation text.
PAGEIII  ASC  Explanation text.
PAGEIV   ASC  Explanation text.
PAGEIX   ASC  Explanation text.
PAGEV    ASC  Explanation text.
PAGEVI   ASC  Explanation text.
PAGEVII  ASC  Explanation text.
PAGEVIII ASC  Explanation text.
DISCLAIM      Disclaimer for Freewill program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FREEWILL.DOC

{% raw %}
```



THE CALIFORNIA LEGISLATURE APPROVED EFFECTIVE JANUARY 1,1983
THE USE OF A "FILL-IN -THE-BLANKS" APPROACH FOR EXECUTING A
VALID WILL IN CALIFORNIA. THEY APPARENTLY FELT THIS WAS BETTER
THAN HAVING PEOPLE DIE WITHOUT A WILL OR WITH AN INVALID HOLO-
GRAPHIC WILL. TWO STANDARD WILL FORMS HAVE BEEN APPROVED. THIS
DISKETTE CONTAINS A COPY OF EACH WHICH CAN BE PRINTED TO YOU PC
PRINTER. EACH FORM IS 6 PAGES IN LENGTH AND HAS ITS OWN FILE NAME
WHICH IS USED FOR PRINTING.
THIS DISKETTE ALSO CONTAINS A COPY OF THE CALIFORNIA CIVIL CODE
WHICH ESTABLISHED THE CALIFORNIA STATUTORY WILL FORMS, IN ADDITION
TO OTHER SECTIONS WHICH SET FORTH THE MANNER IN WHICH A PERSON'S
ESTATE WILL BE DISTRIBUTED. THIS SHOULD PROVIDE SOME BACKGROUND
FOR DECIDING WHETHER YOU SHOULD HAVE A WILL, WHETHER EITHER OF THE
TWO CALIFORNIA STATUTORY WILL FORMS CAN SERVE YOUR NEEDS, OR
WHETHER YOU SHOULD OBTAIN THE SERVICES OF A LAWYER TO DRAFT YOUR
WILL. THESE CODE SECTIONS INVOLVE 30 PAGES
			  DISCLAIMER
IN NO EVENT WILL C2 BE LIABLE TO YOU FOR ANY DAMAGES, INCLUDING
ANY LOST PROFITS,LOST SAVINGS, OR OTHER DAMAGES ARISING OUT
OF THE USE OF THE MATERIAL ON THIS DISKETTE.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No: 193  Freewill  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For instructions on the text files text files on this disk, type        ║
║                              C2 (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PRINTING.DOC

{% raw %}
```
Printing instructions are given on PAGEIX.ASC.  The files TRUST, WILL and
FREEWILL.ASC contain control codes applicable to the IBM (or Epson) printer.
These codes may not be applicable to your printer in which case a few find &
replace operations with your trusty editor are advisable.

  turns on  compressed pitch
  kills 
  turns on double width characters, dies at end of line
  ????????

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0193

     Volume in drive A has no label
     Directory of A:\

    BANNER   ASC       860   1-01-80   1:29a
    C2       BAT       281  11-20-83   4:59p
    DISCLAIM          1174   1-05-84   8:39a
    FILES193 TXT      1667  12-16-88   1:55p
    FREEWILL ASC     79032   1-06-84   8:47p
    FREEWILL DOC      1176  11-20-83   3:05p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       463  12-16-88   2:14p
    PAGEII   ASC       568   1-01-80  12:04a
    PAGEIII  ASC       769   1-01-80  12:03a
    PAGEIV   ASC       816   1-01-80  12:17a
    PAGEIX   ASC       887   1-01-80  12:22a
    PAGEV    ASC      1019   1-01-80  12:44a
    PAGEVI   ASC       852   1-01-80  12:49a
    PAGEVII  ASC       555   1-01-80  12:19a
    PAGEVIII ASC       757   1-01-80  12:07a
    PRINTING DOC       407   1-06-84   8:51p
    TRUST            13707   6-07-83  12:40p
    WILL             12648   6-07-83  12:39p
           19 file(s)     117676 bytes
                           37888 bytes free
