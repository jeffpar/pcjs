---
layout: page
title: "PC-SIG Diskette Library (Disk #3551)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3551/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3551"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MAKEZIP.TXT

{% raw %}
```

Dear BBS Sysop and/or Shareware Disk Vendor:

We're supplying you this disk for your library.  It contains one of our
Microsoft Windows applications.  You may do any of the following:

  -------------------------------------------------------------------------

  1) Distribute copies of this disk "as is", or xcopy the disk to a 1.2MB
     5.25" floppy.  None of our programs will fit on a 360K diskette and
     we are dropping support for the 360K format.

  -------------------------------------------------------------------------

  2) Make a ZIP file, which can be sent out on a disk, or placed on a 
     bulletin board or on-line service for download.

     THE BATCH FILE ASSUMES YOU HAVE A COPY OF PKZIP SOMEPLACE IN YOUR DOS
     PATH!!!

     To do this, simply run the MAKEZIP.BAT file which is located in the
     VENDOR subdirectory of the distribution floppy.

       Usage:  MAKEZIPS src_drive targ_drive

       This batch file is used to a ZIP file -- for from the master disk
       supplied by Wilson WindowWare.  The ZIP file will be placed in a
       subdirectory on the specified hard drive. (\WWWZIPS)

         "src_drive" is the floppy drive where the master disk is located

         "targ_drive" should be a hard drive with at least 2 Meg free disk
         space

       Example:  MAKEZIPS B: C:


     This batch file does take a little time.  It has to uncompress the files
     from our format and re-compress them in ZIP format.  If you need the files
     in some other format (LHA for example), first build the ZIP files and then
     convert the ZIP files.

  -------------------------------------------------------------------------

  Good Luck.  If you have any questions, call Customer Service at
  (206) 938-1743 and ask for Morrie.

  ;-)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3551

     Volume in drive A has no label
     Directory of A:\

    FILECMDR ZIP    214749   4-05-93  11:53a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1463   4-05-93  12:47p
            4 file(s)     245621 bytes
                           74752 bytes free
