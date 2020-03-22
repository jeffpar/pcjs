---
layout: post
title: Demos of Windows/386 and Windows 3.x
date: 2016-03-12 14:00:00
permalink: /blog/2016/03/12/
---

I recently added some more demos to the PCjs Project, to showcase its ability to run old 80286-based and
80386-based software, such as [Windows/386](/disks/pcx86/windows/2.0x/), [Windows 3.0](/disks/pcx86/windows/3.00/),
[Windows 3.1](/software/pcx86/sys/windows/3.10/), and [Windows 95](/software/pcx86/sys/windows/win95/4.00.950/).

{% include gallery/begin.html %}
{% include gallery/image.html src="/disks/pcx86/windows/2.0x/thumbnail.jpg" width="200" height="120" title="COMPAQ DeskPro 386, Windows/386 2.01" link="/disks/pcx86/windows/2.0x/" %}
{% include gallery/image.html src="/disks/pcx86/windows/3.00/thumbnail.jpg" width="200" height="120" title="IBM PC AT w/EGA, Windows 3.00" link="/disks/pcx86/windows/3.00/" %}
{% include gallery/image.html src="/disks/pcx86/windows/3.10/thumbnail.jpg" width="200" height="120" title="IBM PC AT w/VGA, Windows 3.10" link="/disks/pcx86/windows/3.10/" %}
{% include gallery/image.html src="/disks/pcx86/windows/win95/4.00.950/thumbnail.jpg" width="200" height="120" title="COMPAQ DeskPro 386, Windows 95" link="/disks/pcx86/windows/win95/4.00.950/" %}
{% include gallery/end.html %}

As the [OS/2 Museum](http://www.os2museum.com/wp/windows386-2-01/) points out, [Windows/386 2.01](/disks/pcx86/windows/2.0x/)
was the first Microsoft product to specifically target the 80386.  However, not only was it *not* a 32-bit operating
system, it didn't even run Windows applications in protected-mode.  Windows apps ran in V86-mode, and even then, *only*
if you started Windows by running `WIN386.EXE`.

There may have been some incidental protection advantages to running Windows in V86-mode instead of real-mode,
but the primary advantages were the ability to simulate expanded memory (EMS) using the 80386's paging capabilities,
and the ability to run multiple DOS applications simultaneously.

Alternatively, you could start Windows/386 with `WIN86.COM`, which reverted to the older Windows 1.x memory model,
where all Windows applications ran in real-mode and only one DOS application could be run at a time. 

Strangely, unlike all previous and subsequent versions of Windows, there was no `WIN` command in Windows/386.

At least there was no `LOSE` command.

*[@jeffpar](https://jeffpar.com)*  
*March 12, 2016*
