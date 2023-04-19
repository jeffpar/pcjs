---
layout: page
title: "PC-SIG Diskette Library (Disk #1933)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1933/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/1000-1999/DISK1933/DISK1933.jpg
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1933"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "OVL312"

    OVL is a powerful overlay manager system for use with Microsoft LINK.
    Overlays are portions of program code which are loaded from disk into
    memory on an "as-needed" basis.  Overlays allow a very large program to
    use a relatively small amount of memory.
    
    LINK.EXE, Microsoft's Overlay Linker, included with MS-DOS and Microsoft
    languages, versions 3.x, 5.x, and some 2.x versions, allow creation of
    overlaid programs.  However, LINK only inserts software interrupts and
    some overlay information in the program for an overlay manager to use.
    LINK doesn't provide the actual code that loads the proper overlay from
    disk and passes control to it.  That's a job for an overlay manager, and
    that's where the OVL overlay managers come in.
    
    OVL "manages" overlays.  OVL loads overlays from disk at the appropriate
    time and jumps program execution to the overlay code.  OVL managers have
    been tested with MASM 4.0 and 5.0; Turbo C 1.0, 1.5 and 2.0; QuickBASIC
    4.0 and 4.5; Microsoft's BASCOM 6.0; and Clipper (PRONK.EXE, an included
    support utility, must be used with Clipper programs).  Other languages
    that compile to standard Microsoft Overlay LINKable object modules may
    also work with OVL.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BNEST1.BAS

```bas
sub nest1(i) static
	print:print"in nest1";i;
	for j=0 to 1
		call nest2(j)
	next j
end sub
```

## BNEST2.BAS

```bas
sub nest2(i) static
	print:print"in nest2";i;
	for j=0 to 1
		call nest3(j)
	next j
end sub
```

## BNEST3.BAS

```bas
sub nest3(i) static
	print:print"in nest3";i;
	for j=0 to 1
		call nest4(j)
	next j
end sub
```

## BNEST4.BAS

```bas
common shared b

sub nest4(i) static
	print:print"in nest4";i;
	print:print "Value of b variable is "b;
	b=b+1
end sub
```

## QBNEST.BAS

```bas
common shared b

print:print "in main";

b=1

for i=0 to 1
	print:print "Value of b variable is "b;
	call nest1(i)
next
print:print fre(""),fre(0),fre(-1),fre(-2)
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1933

     Volume in drive A is OVL
     Directory of A:\

    OVL312   ARC    127888   5-10-89  12:43a
    FILE1933 TXT      2591  12-28-89   3:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:05a
            4 file(s)     131057 bytes
                          229376 bytes free

![PC-SIG Library Disk #1933]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/1000-1999/DISK1933/DISK1933.jpg)
