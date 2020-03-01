---
layout: post
title: COMPAQ DeskPro 386 Update
date: 2015-04-16 11:00:00
category: 80386
permalink: /blog/2015/04/16/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/machine.xml
---

PCx86 can now boot the [COMPAQ DeskPro 386/16 ROM BIOS](/devices/pcx86/rom/compaq/deskpro386/).

There's still a problem with the Hard Drive Controller, which I haven't looked into yet,
but booting from a floppy works.

While working through issues with this ROM BIOS, I created some lightly-annotated
[source code](/devices/pcx86/rom/compaq/deskpro386/1988-01-28/1988-01-28.asm) that can be re-assembled
with [NASM](http://www.nasm.us/).  The initial process of creating the source code is
explained [here](/devices/pcx86/rom/compaq/deskpro386/#recreating-rom-source-code).

At the top of the source code, I explain a few important details about ROM addresses that
are worth recapping here:

> This 32Kb ROM image is ORG'ed at 0x8000, because most of its code is designed to run
at real-mode addresses F000:8000 through F000:FFFF.

> And even though the 80386 resets with CS:IP set to F000:FFF0, the physical base address
of CS is set to %FFFF0000, which means the ROM must also be mapped at physical addresses
%FFFF8000 through %FFFFFFFF.

> Additionally, DeskPro 386 systems mirror this 32Kb ROM at real-mode address F000:0000
through F000:7FFF.  Once again, that region is mirrored at physical addresses %FFFF0000
through %FFFF7FFFF.

> In other words, both 32Kb halves of the last 64Kb of both the first and last megabyte
of the 80386's 4Gb address space are physically mapped to this ROM image.

> Finally, the DeskPro 386 has a "RAM Relocation" feature that allows 128Kb of RAM at
%00FE0000 through %00FFFFFF to be mapped to %000E0000 through %000FFFFF, effectively
replacing the ROM in the first megabyte with write-protected RAM; the top 64Kb of that
RAM must first be initialized with the 64Kb at %000F0000 prior to remapping.  It's also
possible to copy external ROMs from %000C0000 through %000EFFFF into the bottom 64Kb of
that RAM, but this is only done for ROMs known to contain relocatable code; eg, a COMPAQ
Video Graphics Controller (VGC) Board.

> Every DeskPro 386 system must have a MINIMUM of 1Mb of RAM, of which either 256Kb,
512Kb, or 640Kb can be physically mapped as conventional memory (at the bottom of the
first megabyte), with the remainder (either 768Kb, 512Kb, or 384Kb) physically mapped
to the top of the 16th megabyte (ending at address %00FFFFFF), the last 128Kb of which
is used by the "RAM Relocation" feature.  The remaining memory immediately below that
128Kb (ie, below %00FE0000) can only be accessed by special system software, such as CEMM.

> COMPAQ refers to that remaining memory as "Compaq Built-in Memory".

So there you have it.  Once the ROM has relocated itself to RAM at the top of the 16th
megabyte, there are no less than THREE physical address ranges where ROM code and data
structures can be accessed:

 1. %000F0000 through %000FFFFF (aka real-mode adresses F000:0000 through F000:FFFF)
 2. %00FF0000 through %00FFFFFF (the relocated copy)
 3. %FFFF0000 through %FFFFFFFF (the physical alias of %000F0000 through %000FFFFF)

As you would expect, most of the ROM's code and data references are to first megabyte,
since most of the code is designed to run in real-mode.  But there are portions that
run in protected-mode, and those portions are much less consistent about which address
range to use -- no doubt, in part, because it makes no difference.  The ROM does
not run with paging enabled, so any physical address is as easy to access as any other.

Unless, of course, the A20 line is disabled.  In that case, only the first range is
accessible; the other two are not.

April 19, 2015 Update
---
Thanks to some sleuthing by [Michal Necasek](http://os2museum.com/), it turns out that my
assumptions about A20 management on the COMPAQ DeskPro 386 were incorrect.

He noted that, on page 398 of "DOS Internals" by Geoff Chappell, (c) 1994, the author says:

> On a machine that controls the A20 by passing the address line through an AND gate with a
signal from some bit at an I/O port, the A20MAP program should produce a map similar to:

	Memory mapping with disabled A20 line:
	
	    0MB ->  0MB
	    1MB ->  0MB
	    2MB ->  2MB
	    3MB ->  2MB
	    4MB ->  4MB
	    5MB ->  4MB
	    6MB ->  6MB
	    7MB ->  6MB

> showing wrap-around for every second megabyte. It is also possible to include other address lines
in the controlling mechanism, which may reduce the incidence of wrap-around, as with a Compaq
DeskPro:

	    0MB ->  0MB
	    1MB ->  0MB
	    2MB ->  2MB
	    3MB ->  3MB
	    4MB ->  4MB

---

This means that the DeskPro ROM BIOS can, in fact, access its own code and data at ANY of the above
three physical address ranges at any time, regardless whether A20 is disabled or not.

Which is a good thing, because I came across at least one code sequence in the ROM BIOS that enters
protected-mode with A20 disabled -- an unwise thing to do on most machines: 

	;
	;   When we arrive here, the A20 line has been disabled; on most systems, that would
	;   mean that the ROM's GDT would only be accessible at the "low" ROM address (%0F0730),
	;   not the "high" address (%FF0730).  But fortunately, A20 management on COMPAQ
	;   DeskPros affects wrap-around only from the 1st to the 2nd megabyte; no other address
	;   range is affected.
	;
	;   FYI, it seems this code doesn't do anything if bits 6 and 7 of the RAM Settings
	;   register are set to anything other than 0x40 (ie, it returns to real-mode almost
	;   immediately after entering protected-mode).
	;
	        lgdt    [cs:0x077e]     ; 0000F498  2E0F01167E07; load [gdtr_hi] into GDTR
	        mov     eax,cr0         ; 0000F49E  0F2000
	        or      ax,0x1          ; 0000F4A1  0D0100
	        mov     cr0,eax         ; 0000F4A4  0F2200
	        jmp     0x28:xf4ac      ; 0000F4A7  EAACF42800

Before fully understanding the DeskPro's unusual A20 management, PCx86 worked around it by
redirecting all A20 changes from the Bus component to the CPU component, giving the CPU first
crack at any changes to A20.  If the CPU was in real-mode, it would simply pass the A20 request
on to the Bus. However, if the CPU was in protected-mode, it would maintain the requested
"logical" A20 state but ensure that the "physical" state of A20 was always enabled.  In short,
it was no longer possible for the CPU to be in protected-mode AND for the A20 line to be disabled;
when one was enabled, the other was enabled as well.

I'm in the process of replacing that work-around with a much more compatible change, at least
on 32-bit bus configurations, which involves changing the physical address map for the 2nd megabyte
to match that of the 1st megabyte whenever A20 is disabled.  I could probably get away with remapping
only the first 64Kb of the 2nd megabyte, but until I'm actually able to run some tests on a real
DeskPro 386, I'm going to assume COMPAQ's A20 implementation affected the entire 2nd megabyte.

Here's my [COMPAQ DeskPro 386/16](/devices/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/) test
configuration.  Set a breakpoint at F000:F498 ("bp f000:f498") in the Debugger panel to see the above
code in action.  When the machine is operating in real-mode, you can use the "rp" command to dump all
the registers, including the current base and limit values loaded into the segment registers.

{% include machine.html id="deskpro386" %}

*[@jeffpar](https://jeffpar.com)*  
*April 16-19, 2015*
