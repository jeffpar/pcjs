---
layout: page
title: Microport UNIX System V-AT 2.3
permalink: /software/pcx86/sys/unix/microport/system-v/2.3/
redirect_from: /disks/pcx86/unix/microport/system-v/2.3/
---

Microport's AT&amp;T UNIX System V-AT 2.3
-----------------------------------------

### Debugging Notes

The boot sector contains the following code:

	0000:7C3E B003            MOV      AL,03
	0000:7C40 B200            MOV      DL,00
	0000:7C42 B417            MOV      AH,17
	0000:7C44 CD13            INT      13
	0000:7C46 72B8            JC       7C00

For BIOSes that don't support INT 0x13, AH function 0x17, patch the JC with two NOPs; eg:

	e 0:7c46 90 90

After booting, the following code is executed:

	12E8:01D3 52              PUSH     DX                   ;history=5
	12E8:01D4 51              PUSH     CX                   ;history=4
	12E8:01D5 2BC9            SUB      CX,CX                ;history=3
	12E8:01D7 BA6400          MOV      DX,0064              ;history=2
	12E8:01DA ED              IN       AX,DX                ;history=1

For virtual machines that don't support word I/O to port 0x64, patch IN AX,DX with IN AL,DX; eg:

	e 12e8:1da ec
