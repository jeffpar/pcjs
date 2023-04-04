---
layout: page
title: "PC-SIG Library Disk #2312"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2312/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2312"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCOPY & PDELETE"

    The DOS COPY command is one most used commands in DOS.  Unfortunately,
    its abilities are very limited and are not sufficient to many disk
    maintenance chores.  PCOPY is similar to the DOS COPY command in that
    it copies file data between disks and hard disk directories but PCOPY
    is greatly superior to DOS COPY in that it provides intelligent file
    selection and processing options.  PCOPY options allow you to use a
    single PCOPY command to perform a function that would require many DOS
    COPY commands and much thought.
    
    In addition to superior file copy functions, PCOPY provides a safer way
    to copy files than is provided by the DOS COPY command.  Copy only
    newer files or update a directory with the contents of another.  PCOPY
    will never overlay a file accidentally.
    
    PMOVE is an option of the PCOPY command used to move files between
    disks and directories on disks.  PMOVE combines the functions of DOS
    COPY and DELETE commands to make moving files easy.  In addition to
    moving files, PMOVE also allows selection criteria to be specified to
    better qualify the files to be moved.
    
    PMOVE automatically determines the environment the move is requested
    for and then determines if the data must be moved or if the file can be
    moved by renaming.  Moving with rename is allowed if the move is to
    another directory on the same disk device.  If a rename move can be
    done, it is much faster than moving the data, it helps to keep from
    fragmenting disk free space, and allows very large files to be moved
    between directories when they could not normally be moved with DOS COPY
    because of insufficient space.
    
    Try PCOPY, the advanced replacement for DOS COPY.
    
    PDELETE is an advanced DELETE command to be used in DOS systems.  It
    may be used in place of the DOS Erase and Delete command or instead of
    it.  Like other Patriquin utilities, PDELETE gives you more control of
    command processing and provides a much safer way to process files.
    PDELETE also provides several features not found with the standard DOS
    command.
    
    Unlike other delete utilities, PDELETE supports DOS paths and
    wildcards.  It keeps you aware of what files are being processed and
    provides an emergency stop feature just in case you have started
    something you feel is wrong.
    
    PDELETE's file selection parameters provide you with numerous options
    for specifying the files to be deleted.  You may select by directory,
    file, date, attribute, size, and even starting and ending filename.
    
    Features:
    
    ~ Advanced file selection.
    
    ~ Emergency STOP by pressing any key.
    
    ~ Delete entire directories and remove them from disk.
    
    ~ Optionally wipe file data from disk during delete to prevent it from
    being recovered by unauthorized person.
    
    ~ Optional verify feature lets you approve each file before it is
    deleted.
    
    ~ Optionally deletes HIDDEN / SYSTEM / READONLY files.
    
    ~ Delete files until specified freespace is available.
    
    ~ Advanced DOS Pattern capability.
    
    ~ Test feature allows you to try a command before actually deleting any
    files.
    
    ~ Deletes from multiple disk drives with a single
    command.
    
    ~ Accepts a list of files to be deleted.
    
    ~ Exclusion capability allows files to be protected from deletion.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2312

     Volume in drive A has no label
     Directory of A:\

    WHATSNEW TXT      1413   8-15-90   4:45p
    PDEL     EXE     77524   8-03-90  12:14a
    PDEL     DOC     45882   8-03-90   9:15a
    ORDERFRM TXT      2368   8-03-90  12:16a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       958  10-09-90   2:30p
    FILE2312 TXT      7179  10-09-90   3:36p
    ORDERFRM DOC      2377   7-03-90   9:27a
    PCOPY    DOC     77537   7-03-90   9:27a
    PCOPY    EXE    115272   7-03-90   9:27a
    PCREADME          1530   7-03-90   9:27a
    PMOVE    BAT        29   7-03-90   9:27a
    WHATSNEW          2594   7-03-90   9:27a
           13 file(s)     334691 bytes
                           20480 bytes free
