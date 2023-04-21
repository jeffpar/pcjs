---
layout: page
title: "PC-SIG Diskette Library (Disk #395)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0395/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0395"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME INVENTORY"

    Keep track of everything you own; furniture, heirlooms, paintings,
    silver, collections, etc.  Know where everything is, where it came from
    and what it is worth.  Perfect for insurance coverage and claims.
    
    Use your own words or specialized expressions to describe all the data
    you record.  You can store and retrieve by various categories such as
    room or chairs or "Mother's." Record serial numbers or other
    identification.
    
    The documentation for this menu-driven program is extensive and very
    thorough.  Routines are included to print complete inventories or
    reports on specific categories.  A must for every homeowner!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES395.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 395   HOME INVENTORY SYSTEM                             v2.1
------------------------------------------------------------------------
Keeps track of everything you own (furniture, collections, etc.).  Data
can be stored and retrieved by several categories, rooms, etc.  The
documentation for the system is very complete; in fact it occupies
approximately 80% of the diskette.
 
RUNFIRST BAS  Copy of the Cover Letter.  Like a README File.
PRINTERS BAS  Modifications to use Different Printers.
 
    Documentation
    -------------------------------------------------------------------
TEXTPROC BAS  Text Processor, to produce the documentation.
DIRECTOR      The Program Directory.  What's What and How to Start.
TABLEOFC      Title, Copyright, and Table of Contents
INTRODUC      Introduction and Care of Diskettes
FIRSTIME      First Time Usage, Startup and Backup
GENINFOR      General Information
CREATFIL      Creating and Extending Data Files
INTROPER      Introduction to Personalization
PERVECT1      Personalizing the Rooms
PERVECT2      Personalizing the Owners
PERARRAY      Personalizing the General Categories
PERSUBAR      Personalizing the Specific Categories
PERVECT3      Personalizing the Colors
DATAENTR      Data Entry
RECDELET      Record Deletion
INQUIRYS      Formation of Inquiries
REDISPLA      Redisplay the Menu
STOPPING      How to Stop
TERMCOND      Terms and Conditions
 
    Main Program
    -----------------------------------------------------------------
YOURVOWN BAS  To enter, inquire, personalize and report data.
 
    Data Files
    ------------------------------------------------------------------
MESSAGES      Messages used by both the programs and documentation.
DOCHANGE      Documentation unique to YOUR VERY OWN Home Inventory.
VECTOR1       Initial Content of the Rooms
VECTOR2       Initial Content of the Owners
VECTOR3       Initial Content of the Colors
ARRAY         Initial Content of the General Categories
SUBARRAY      Initial Content of the Specific Categories
HIGH          Initial Setting of Highest Records Used.
 
    Other
    ----------------------------------------------------------------
CLEANDOC BAT  To remove the documentation programs and files from the
              Data Diskette.
 
PC-SIG
1030DE Duane, Suite
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright PC-SIG

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0395

     Volume in drive A is DISK0395
     Directory of A:\

    ARRAY              206   5-17-85   6:23a
    CLEANDOC BAT       408   5-11-85   6:24a
    CREATFIL          6560   5-17-85   6:24a
    DATAENTR         17916   5-17-85   6:25a
    DIRECTOR          8350   5-17-85   6:26a
    DOCHANGE          1261   5-17-85   6:24a
    FILES395 TXT      2480   1-27-87   3:27p
    FIRSTIME          3910   5-17-85   6:26a
    GENINFOR          7155   5-17-85   6:27a
    HIGH                11   5-17-85   6:24a
    INQUIRYS         18560   5-17-85   6:28a
    INTRODUC          5644   5-17-85   6:28a
    INTROPER          1767   5-17-85   6:29a
    MESSAGES           567   5-17-85   6:23a
    PERARRAY          3577   5-17-85   6:29a
    PERSUBAR          4549   5-17-85   6:29a
    PERVECT1          5210   5-17-85   6:30a
    PERVECT2          5219   5-17-85   6:30a
    PERVECT3          6067   5-17-85   6:31a
    PRINTERS BAS      2091   5-17-85   6:22a
    RECDELET          5893   5-17-85   6:31a
    REDISPLA          1783   5-17-85   6:32a
    RUNFIRST BAS      1068   5-17-85   6:22a
    STOPPING          3640   5-17-85   6:32a
    SUBARRAY          2375   5-17-85   6:24a
    TABLEOFC          3193   5-17-85   6:32a
    TERMCOND          1620   5-17-85   6:33a
    TEXTPROC BAS     19868   5-17-85   6:22a
    VECTOR1            654   5-17-85   6:23a
    VECTOR2            559   5-17-85   6:23a
    VECTOR3            556   5-17-85   6:23a
    YOURVOWN BAS     41735  11-22-85   5:18a
           32 file(s)     184452 bytes
                          119808 bytes free
