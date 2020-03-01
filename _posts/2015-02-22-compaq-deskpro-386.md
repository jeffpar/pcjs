---
layout: post
title: COMPAQ DeskPro 386
date: 2015-02-22 11:00:00
category: 80386
permalink: /blog/2015/02/22/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/machine.xml
---

I finally dumped the [COMPAQ DeskPro 386/16 ROMs](/devices/pcx86/rom/compaq/deskpro386/) from the motherboard I bought
on eBay last year, so I'm ready to begin adding 80386 support to PCx86.

I'd also like to locate a copy of the "COMPAQ DeskPro 386 Technical Reference Guide, Volumes 1 and 2".  It's not hard
to find COMPAQ Maintenance and Service guides online, but their Technical Reference guides are much rarer, perhaps because
they were expensive ($149) and not many were sold.  Anyway, I'm hoping to either borrow or buy a copy, and then scan and
post it.

A [COMPAQ DeskPro 386](/devices/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/) test configuration is displayed below.
The configuration doesn't run, and the debugger can't disassemble 80386-specific code yet, but this is what I will be
using to test and debug my changes over the next few months.

{% include machine.html id="deskpro386" %}

*[@jeffpar](https://jeffpar.com)*  
*February 22, 2015*
