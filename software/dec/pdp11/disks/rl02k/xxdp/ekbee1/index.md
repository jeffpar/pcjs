---
layout: page
title: "EKBEE1: 11/70 MEMORY MANAGEMENT DIAGNOSTIC"
permalink: /software/dec/pdp11/disks/rl02k/xxdp/ekbee1/
redirect_from: /disks/dec/rl02k/xxdp/ekbee1/
---

From the [PDP-11 Diagnostic Handbook (1988)](/documents/manuals/dec/#pdp-11-diagnostics), p. 1-10:

	11/70 MEMORY MANAGEMENT TEST
	
	ABSTRACT:
	
	    This program was designed using a "BOTTOM UP" approach starting with the smallest segment of MEMORY
	    MANAGEMENT logic and building up to cover all the logic.  The program begins by testing some of the
	    internal CPU data and address path and address detection logic, then works outward through the MEM.
	    MANAGEMENT registers.  It is assumed that both the CPU and the CACHE have been tested, or are known
	    to be good.
	
	OPERATING PROCEDURES:
	        Set the switch register by <CONTROL P>
	    CON = xxxxxxWZ
	        (W = deposit xxxxxx into console switch register)
	        (R = read and type console switch settings / CON = R)
	        (Z = switch console terminal back to program)
	
	.R EKBEE1
	
	SWITCH SETTINGS
	    SW15 = 1 halt on error
	    SW14 = 1 loop on current test
	    SW13 = 1 inhibit all error typeouts
	    SW12 = 1 inhibit trace trapping
	    SW11 = 1 inhibit iterations
	    SW10 = 1 ring bell on error
	    SW09 = 1 loop on error
	    SW08 = 1 loop on test in SWR <06:00>
	    SW07 = 1 inhibit multiple error typeouts
	    SW06 = 1 selects subtest
	    ...

The closest we have to a source code listing of the EKBEE1 diagnostic comes from some
[scanned microfiche](/documents/manuals/dec/#pdp-11-diagnostics)
on [bitsavers.org](http://bitsavers.org/pdf/dec/pdp11/microfiche/ftp.j-hoppe.de/bw/gh/) for:

	PRODUCT CODE: AC-7975E-MC
	PRODUCT NAME: CEKBEE0 11/70 MEM MGMT
	DATE CREATED: MAY, 1980
	MAINTAINER:   DIAGNOSTIC ENGINEERING

One of the last tests within the diagnostic to pass in PDPjs was "TEST 122: KT BEND", which appears on p. 208 of
the PDF (p. 199 of the source code listing):

	;;***************************************************************
	;*TEST 122      KT BEND
	;*
	;*      THIS TEST ENSURES THAT TMCE KT BEND GOES LOW ON AN ODD
	;*      ADDRESS ERROR, SL RED, AND NEXM. THIS IS DONE BY EXECUTING
	;*      AN INSTRUCTION FOR EACH Of THESE THESE CASES THAT ALSO
	;*      CAUSES A KT ABORT. THE ABORT SHOULD NOT BE HONORED.
	;*
	;*      NOTE: ON A KB11-E OR KB11-EM THE KT ABORT SHOULD BE HONORED OVER A
	;*      NEXM TRAP.  IF THIS IS A KB11-E/EM THEN THIS FEATURE IS TESTED.
	;;***************************************************************

As noted in the *mapVirtualToPhysical()* function in [cpustate.js](/machines/dec/pdp11/lib/cpustate.js), this test
begins at PC 076060, which is exactly 0100 bytes lower than the address shown in the source code listing (076160).

This diagnostic should run in any [PDP-11/70](/machines/dec/pdp11/machine/1170/) ([Demo](/machines/dec/pdp11/1170/panel/debugger/xxdp/)).
