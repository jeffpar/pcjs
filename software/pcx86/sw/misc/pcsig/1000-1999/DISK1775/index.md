---
layout: page
title: "PC-SIG Diskette Library (Disk #1775)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1775/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1775"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XPORT"

    This utility uses the serial communication adapters (serial ports) in
    your PCs to transfer files from one machine to another.  Serial
    transfer is much easier and faster than copying files from machine to
    disk to machine again.  XPORT will allow you to transfer files
    between: a 5.25" disk drive on one machine and a 3.5" drive on
    another; or directly from one hard drive to another (regardless of file
    size); or between two drives that can't seem to read from each other's
    disks (common between 360K and 1.2MB drives).
    
    Many full-blown communication packages will do this job.  But if you
    just want a simple, inexpensive method of getting the files from one
    system into another with a minimum of fuss and as conveniently as
    possible, use XPORT.
    
    Not sure about serial port parameters and how to set them?  Forget it.
    The transporter sets them up the way it needs them.  More than one port
    in your machine, but you're not sure which is COM1, COM2, COM3, and
    COM4?  Don't worry.  The transporter automatically detects which port
    you've got the cable plugged into.
    
    XPORT also includes XCLONE.  Because the XPORT program must be on both
    computers to operate, you may need a way to get the XPORT program file
    installed on another computer with incompatible disk drives. XCLONE is
    a nifty little utility that copies XPORT to the other computer without
    the use of the disk drives.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1775

     Volume in drive A has no label
     Directory of A:\

    FILE1775 TXT      4293  12-19-89   3:36p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694  12-20-89  12:39p
    READ     ME       2560   7-31-89  10:49p
    XCLONE   COM      3624   7-25-89  10:16p
    XCLONE   DOC      3200   7-25-89  10:25p
    XPORT    DOC     32768   7-31-89   2:48p
    XPORT    EXE     14393   7-31-89   2:44p
            8 file(s)      61570 bytes
                           96256 bytes free
