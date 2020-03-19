---
layout: page
title: RK03 RT-11 v4.0 Disk
permalink: /software/dec/pdp11/disks/rk03/rt11v4/
redirect_from: /disks/dec/rk03/rt11v4/
---

### Boot

To boot the RK03 "RT-11 v4.0" disk, start a [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) with an
[RK11 Disk Controller](/configs/pdp11/rk11/), select the "RT-11 v4.0" disk from the list of disks
available for drive "RK0", click **Load**, and wait for the message:

	Mounted disk "RT-11 v4.0" in drive RK0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0

	BOOT>

At the prompt, type "BOOT RK0".  The following text should appear:

	RT-11SJ  V04.00C

	.D 56=5015

	.TYPE V4USER.TXT
	Welcome to RT-11 Version 4. RT-11 V04 provides new hardware support
	and some major enhancements over Version 3B.

	Please use the HELP command;  it describes the new options in many
	of the utilities.

	If you are using a terminal that requires fill characters,
	modify location 56 with a Deposit command before proceeding with
	system installation. LA36 DECwriter II and VT52 DECscope terminals
	do NOT require such modification.


	.D 56=0

	.

NOTE: Any RK11 disk drive (RK0-RK7) can be used.  RK0 was selected for demonstration purposes.

### Directory

The "DIR" command displays the following information:

	SWAP  .SYS    25  01-Feb-82      RT11BL.SYS    65  01-Feb-82
	RT11SJ.SYS    67  01-Feb-82      RT11FB.SYS    80  01-Feb-82
	TT    .SYS     2  01-Feb-82      DT    .SYS     3  01-Feb-82
	DP    .SYS     3  01-Feb-82      DX    .SYS     3  01-Feb-82
	DY    .SYS     4  01-Feb-82      RF    .SYS     3  01-Feb-82
	RK    .SYS     3  01-Feb-82      DL    .SYS     4  01-Feb-82
	DM    .SYS     5  01-Feb-82      DS    .SYS     3  01-Feb-82
	DD    .SYS     5  01-Feb-82      MT    .SYS     9  01-Feb-82
	MM    .SYS     9  01-Feb-82      MS    .SYS    10  01-Feb-82
	LP    .SYS     2  01-Feb-82      LS    .SYS     2  01-Feb-82
	CR    .SYS     3  01-Feb-82      NL    .SYS     2  01-Feb-82
	PC    .SYS     2  01-Feb-82      PD    .SYS     3  01-Feb-82
	CT    .SYS     6  01-Feb-82      BA    .SYS     7  01-Feb-82
	MTHD  .SYS     4  01-Feb-82      MMHD  .SYS     4  01-Feb-82
	MSHD  .SYS     5  01-Feb-82      PIP   .SAV    23  01-Feb-82
	DUP   .SAV    41  01-Feb-82      DIR   .SAV    17  01-Feb-82
	FORMAT.SAV    19  01-Feb-82      SLP   .SAV     9  01-Feb-82
	SIPP  .SAV    20  01-Feb-82      STARTS.COM     1  01-Feb-82
	STARTF.COM     1  01-Feb-82      V4USER.TXT     1  01-Feb-82
	CREF  .SAV     6  01-Feb-82      DUMP  .SAV     8  01-Feb-82
	MBOT16.BOT     1  01-Feb-82      RESORC.SAV    15  01-Feb-82
	SYSMAC.SML    42  01-Feb-82      EDIT  .SAV    19  01-Feb-82
	KED   .SAV    60  01-Feb-82      K52   .SAV    55  01-Feb-82
	TECO  .SAV    50  01-Feb-82      MACRO .SAV    51  01-Feb-82
	MAC8K .SAV    56  01-Feb-82      LINK  .SAV    41  01-Feb-82
	LIBR  .SAV    22  01-Feb-82      FILEX .SAV    18  01-Feb-82
	SRCCOM.SAV    13  01-Feb-82      BINCOM.SAV    10  01-Feb-82
	PATCH .SAV    10  01-Feb-82      PAT   .SAV     8  01-Feb-82
	HELP  .SAV   107  01-Feb-82      HELP  .EXE     7  01-Feb-82
	HELP  .MLB    98  01-Feb-82      ERROUT.SAV    17  01-Feb-82
	SYSGEN.SAV    39  01-Feb-82      SYSGEN.CND   134  01-Feb-82
	SYSTBL.CND    23  01-Feb-82      BATCH .SAV    26  01-Feb-82
	QUEMAN.SAV    13  01-Feb-82      QUEUE .REL    14  01-Feb-82
	SYSLIB.OBJ    47  01-Feb-82      MDUP  .SAV    18  01-Feb-82
	MDUP  .MM     48  01-Feb-82      MDUP  .MT     48  01-Feb-82
	MDUP  .MS     48  01-Feb-82      MBOOT .BOT     1  01-Feb-82
	MSBOOT.BOT     3  01-Feb-82      DEMOF1.FOR     2  01-Feb-82
	DEMOED.TXT     1  01-Feb-82      README.TXT    36  01-Feb-82
	VT52  .TEC     5  01-Feb-82      VEG   .TEC     4  01-Feb-82
	EDIT  .TEC     1  01-Feb-82      INSERT.TEC     2  01-Feb-82
	LOCAL .TEC     3  01-Feb-82      SORT  .TEC     3  01-Feb-82
	VTEDIT.TEC    32  01-Feb-82      TECO  .TC     23  01-Feb-82
	SEARCH.TEC     3  01-Feb-82      SQU   .TEC    13  01-Feb-82
	TYPE  .TEC    12  01-Feb-82      TECO  .INI    15  01-Feb-82
	ODT   .OBJ     9  01-Feb-82      VDT   .OBJ     9  01-Feb-82
	VTHDLR.OBJ     9  01-Feb-82      PLOT55.OBJ     3  01-Feb-82
	TEST55.FOR     5  01-Feb-82      GETSTR.FOR     2  01-Feb-82
	PUTSTR.FOR     2  01-Feb-82      SPEED .SAV     4  01-Feb-82
	SYCND .BL      3  01-Feb-82      SYSTBL.BL      4  01-Feb-82
	SYCND .DIS     5  01-Feb-82      SYCND .HD      5  01-Feb-82
	SYSTBL.DIS     4  01-Feb-82      DISMT1.COM     9  01-Feb-82
	DISMT2.COM     8  01-Feb-82      DUNGEO.COM     1  07-Jun-86
	DSAVE .DAT    10  07-Jun-86      ADVENT.DOC     4  20-Jul-85
	DUNGEO.SAV   216  07-Jun-86      DINDX .DAT    20  07-Jun-86
	DTEXT .DAT   383  07-Jun-86      ADVENT.SAV    93  20-Jul-85
	ADVENT.VAR    22  20-Jul-85      ADVTXT.TXT   125  20-Jul-85
	BOOT  .MAC    23
	 113 Files, 2784 Blocks
	 1978 Free blocks

{% include gallery/documents.html path="/machines/dec/pdp11/" width="200" height="260" tag="rt11" %}
