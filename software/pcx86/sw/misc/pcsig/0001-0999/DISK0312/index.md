---
layout: page
title: "PC-SIG Diskette Library (Disk #312)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0312/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0312"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN DESIGN AID"

    The two programs here are for designing your screen and your output.
    
    Screen Design Aid (SDA) is for designing display screens for data
    input use in other programs; these screens will be callable from
    Assembler, BASIC, or other high-level programs.  SDA includes
    specifications for blinking, high-intensity, underscoring, and
    reverse-video options, as well as a full range of color foreground and
    background options.  It permits the definition of a "screen" utilizing
    any combination of the 254 displayable characters and saves it in a
    highly compressed form.
    
    The second program is the FORMS program for forms generation and
    management.  It allows you to generate and edit master forms tailored
    to your individual application which can then be recalled, filled out,
    and stored as completed forms.  FORMS supports IBM/Epson/compatible
    dot matrix as well as Daisy wheel printers.
    
    How to Start: Consult the FORMS.DOC, BASSCR.DOC and SDA.DOC for
    documentation and instructions.  To run either, enter program name and
    press <ENTER>.
    
    Suggested Registration: $25.00 SDA; $30.00 FORMS (includes full
    manual, latest updates and program revisions)
    
    File Descriptions:
    
    -------- ---  Screen Design Aid
    $SDA     OBJ  Screen Design Aid, object code
    SDA      EXE  Screen Design Aid, Version 3.0
    BASMEN   OBJ  Object file for BASSCR
    BASSCR   ASM  BASIC Interface for SDA, Assembler
    BASSCR   OBJ  BASIC Interface for SDA, object code
    $FIELD   MAC  Macros for Screen Design Aid
    BUGREPT  FRM  Bug report form to report FORMS problems
    REGISTER FRM  Registration form for FORMS users
    FORMS    DOC  Forms program documentation (10 pages)
    FORMS    COM  Forms generation and management program
    -------- ---  Form Generator
    ANSISCR  EXE  Screen driver
    BASSCR   DOC  BASIC-SDA Interface manual (2 pages)
    SDA      DOC  Screen Design Aid manual (32 pages)
    DEMO     BAS  ASCII description of DEMO.EXE source code
    DEMO     EXE  SDA demo program, color monitor, 1 screen
    BONUS    DOC  Notes on included programs
    READ     ME   Listing of files that are a part of FORMS
    SDA      EXE  SDA comptession utility
    IMAGE    DOC  Documentation on SDA.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.BAS

```bas
	REM
	REM	THIS BASIC PROGRAM DEMONSTRATES	THE SCREEN DESIGN AID
	REM

	DEF SEG=&H40
	POKE &H10,(PEEK(&H10) AND &H0CF) OR &H10
	DEF SEG
	SCREEN	0,1,0,0
	WIDTH 40
	LOCATE	1,1,1,6,7
100	CMD%=0:FLD%=1:PRM$="       "
	GOSUB 200
	FLD%=1
	CMD%=2
	GOSUB 200
	FLD%=ASC(LEFT$(PRM$,1))-48
	IF FLD%	<0 OR FLD% >3 THEN 100
	IF FLD%=0 THEN 1000
	FLD%=FLD%+1
	CMD%=0
	GOSUB 200
	FLD%=1
	CMD%=2
	GOSUB 200
	GOTO 100

200	CALL	BASSCR(CMD%,FLD%,PRM$)
	RETURN

1000	SCREEN 0,0
	END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0312

     Volume in drive A has no label
     Directory of A:\

    $SDA     OBJ       876   3-01-83  11:02a
    $FIELD   MAC      3487   3-07-83   7:17p
    BASSCR   OBJ      1271   8-26-86   4:18p
    BASSCR   ASM     12494   8-26-86   4:17p
    DEMO     EXE     21120   3-06-83   4:46p
    DEMO     BAS       495   3-06-83   1:40p
    SDA      DOC     81468   3-05-83   5:02p
    BASSCR   DOC      3840   3-07-83  10:45a
    (READ    ME)      1476   8-03-85  12:50p
    FORMS    COM     56480   3-07-85   9:02p
    FORMS    DOC     18944   3-10-85  10:42a
    REGISTER FRM      3456   3-10-85  10:37a
    BUGREPT  FRM      5376   3-09-85   4:03p
    READ     ME        256   3-10-85   9:14p
    FILES312 TXT      1940   1-31-87   4:13p
    IMAGE    DOC      5504   1-26-85  12:33a
    SDA      EXE     26324   4-17-86  12:33p
    BASMEN   OBJ      2648   2-16-85   9:18a
    BONUS    DOC      1498   4-25-86  10:07p
    ANSISCR  EXE      8622   4-20-86   9:49p
           20 file(s)     257575 bytes
                           54272 bytes free
