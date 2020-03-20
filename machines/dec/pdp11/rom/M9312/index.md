---
layout: page
title: PDP-11 M9312 ROMs
permalink: /machines/dec/pdp11/rom/M9312
redirect_from: /devices/pdp11/rom/M9312/
---

As this [PDP-11 website](http://www.pdp-11.nl/pdp11-34a/cpu/options/bootstrap-info.html) explains:

> The M9312 Bootstrap/terminator module contains a complete set of UNIBUS termination resistors and 512 words of ROM that can
be used for diagnostic routines, the console emulation routine and bootstrap programs. The module has 12 jumpers, W1 thu W12,
and five sockets to put ROMs in. One socket is used for a diagnostic ROM for the PDP-11/60 or PDP-11/70, or for a ROM that
contains the console emulation routine and diagnostics for all other PDP-11s. The other four sockets accept ROMs that contain
bootstrap programs.

### PDP-11 M9312 ROMs

An assortment of M9312 ROM images, source listings, etc, are available from Don North's [website](http://www.ak6dn.com/PDP-11/M9312/),
some of which we have reproduced here.

Initially, all we had was this [256-word ROM](M9312.json) obtained from Paul Nankervis' [website](http://skn.noip.me/pdp11/iopage.js).
Cross-referencing that ROM with Don North's [M9312 PROM Files](http://www.ak6dn.com/PDP-11/M9312/) revealed that it came from
DEC P/N [23-616F1](23-616F1.txt), "11/60,70 Diagnostic/Console", albeit with a few modifications:

	165322  022716  165320  L26:    cmp #N2,(sp)        ; 165320 changed to 000320
	...
	165332  012716  165342  L27:    mov #N3,(sp)        ; 165342 changed to 000342
	...
	165344  012746  165354          mov #N4,-(sp)       ; 165354 changed to 000354
	...
	165354  000137  165362  N4:     jmp @#N5            ; 165362 changed to 000362
	165360  000000                  halt                ; 000000 changed to 000200
	...
	165372  012737  165400  000004  mov #N6,@#4         ; 165400 changed to 000400
	...
	165406  012737  165714  000114  mov #N12,@#114      ; 165714 changed to 000714

The unmodified [23-616F1](23-616F1.txt) [ROM](23-616F1.json) is loaded at address 165000 (0xEA00) in this
[PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/), using the following configuration:

	<rom id="m9312" addr="0xEA00" size="0x200" file="/machines/dec/pdp11/rom/M9312/23-616F1.json"/>
