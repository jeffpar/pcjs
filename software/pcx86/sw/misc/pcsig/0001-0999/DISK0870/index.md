---
layout: page
title: "PC-SIG Library Disk #870"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0870/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0870"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HGCIBM-COLOR EMULATION FOR HERCULES"

    If you're the owner of a computer with a Hercules monochrome graphics
    adapter card, and have been lusting after a nice piece of color graphic
    (CGA) software, but can't run it because of your current computer set-
    up, this software will solve your problems.
    
    HGCIBM provides owners of Hercules graphics cards with a means to run
    software written for the IBM Color Graphics Adapter.  You need no
    additional hardware to run this emulator -- HGCIBM works by ``tricking''
    programs into thinking you have a color card when you don't.
    
    With HGCIBM, a color program won't shut itself down but instead, will
    continue to send video output to your monochrome screen.  This program
    is one of the few ``must-own'' programs for all Hercules users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HGCTEST.BAS

```bas
100	' Emulation Test Program Version 2.01
102	'
105	DIM VERT%(120)
110	INPUT "Test 200x320 or 200x640 (1 or 2)";RES%
120	IF RES% <> 1 AND RES% <> 2 THEN CLS: GOTO 110 ELSE SCREEN RES%:CLS
130	ASPECT = RES% * .5
140	RES% = RES% * 320
150	KEY OFF
160	CLS
170	INPUT "enter radius (10-100)";R
180	INPUT "enter number of vertices (3-50)";V
190	CLS
200	X0=(RES%/2)+R*2*ASPECT:Y0=100
210	PSET(X0,Y0)
220	THETA=6.28319/V:N=V-1
230	FOR I=1 TO N
240		VERT%(2*I-1)=R*2*ASPECT*COS(THETA*I)+(RES%/2)
250		VERT%(2*I)=R*SIN(THETA*I)+100
260		PSET(VERT%(2*I-1),VERT%(2*I)),1
270	NEXT I
280	N0=N
290	FOR J=1 TO N
300		FOR I= 1 TO N0
310			XN=VERT%(2*I-1):YN=VERT%(2*I)
320			LINE(X0,Y0)-(XN,YN)
330		NEXT I
340		X0=XN:Y0=YN:N0=N0-1
350	NEXT J
360	LOCATE 1,1
370	INPUT "Try another (Y/N)"; A$
380	CLS
390	SCREEN 0:WIDTH 80
400	IF A$="Y" OR A$="y" GOTO 110
410	END

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0870

     Volume in drive A has no label
     Directory of A:\

    DISK     ID        128   6-19-87  10:55p
    FEATURES PRX     19712   6-19-87   7:58p
    FILES870 TXT      1108  12-01-87   1:58p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       623  11-25-87   2:04p
    HGCIB202 ARC    106046   6-21-87  10:59a
    HGCIBM   COM      6710   5-20-87   1:15a
    HGCIBM   DOC     46402   7-15-87   4:32p
    HGCTEST  BAS       896   4-08-87   9:00a
    PRINTDOC BAT       128   4-09-87  11:16a
    PRINTDOC MSG       384   4-09-87  11:15a
    QBDEMOC  EXE     82578   6-20-87   7:09a
    REGISTER          1973   6-21-87  10:59a
           13 file(s)     266726 bytes
                           48128 bytes free
