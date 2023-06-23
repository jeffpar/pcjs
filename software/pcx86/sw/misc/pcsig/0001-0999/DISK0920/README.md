---
layout: page
title: "PC-SIG Diskette Library (Disk #920)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0920/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0920"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAPTAB WORLD CULTURE DATABASE"

    MAPTAB is a menu-driven data-management program that lets you search for
    data on different cultures -- their beliefs, practices, and religions
    across the world.
    
    This version of MAPTAB has a partial but useful sample of the
    ethnographic data on 186 societies worldwide.  177 variables pertaining
    to these cultures are provided, including kinship, social structure,
    incidence of aggression, climatic information, and types of marriage
    customs.  In addition to these items, the documented societies range in
    time from 1750 B.C. to the present.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES920.TXT

{% raw %}
```
Disk No:  920
Program Title:  MAPTAB WORLD CULTURE DATABASE DEMO
PC-SIG version: 1.3

MAPTAB is a complex data-management program which allows you to search
for data concerning different cultures, their beliefs, practices, and
their region across the world.

This version of MAPTAB is a partial but useful sample of the program
that contains ethnographic data on 186 societies worldwide. 177
variables pertaining to these cultures are provided, including kinship
relations, social stratification, incidence of aggression, climactic
information, and types of marriage customs.  In addition to these items,
the documented societies range in time from 1750 B.C. to present.

In order to use the program, the codes for ethnographic variables and
societies must be printed out.  Then they can be entered to get
correlational data for a particular variable between any number of the
given societies.  In addition, two variables can be cross-tabulated.
For example, one could find the degree of aggression associated with
monogamous vs. polygamous societies.  The program can generate a world
map that presents the code for a particular variable in its appropriate
geographic location.

Usage:  Research Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

3#2           Data file.
AGREMTPC SIG  Text file.
BROWSE   COM  File viewing utility.
BROWSE   INS  Data file for BROWSE.COM.
C1            Data files.
C2            Data files.
C3            Data files.
C4            Data files.
C5            Data files.
C6            Data files.
C7            Data files.
C8            Data files.
C9            Data files.
CDIV???? ???  Data files (7 files).
COORD    DAT  Data file.
GETYN    ASM  Source code for GETYN.COM.
GETYN    COM  Program accessed by batch files.
GETYN    DOC  Manual for GETYN.COM.
GO       BAT  Batch file to start program.
KEY-FAKE COM  Sub-program.
LOGO3         Data file.
MAP117        Data file.
MAP177        Data file.
MAPBASE       Data file.
MAPTAB   DIR  Data file.
MAPTAB   EXE  Main program.
MAPTAB   INS  Instructions for using MAPTAB.
PATCHES  CRD  Data file.
READ     BAT  Documentation screen presentation file.
READER   EXE  Sub-program.
SN            Data file.
STDSAMP? ???  Data files (11 files).

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GETYN.ASM

{% raw %}
```

;Get y/n response, return as errorlevel 0 (n), 1 (y)
;Released to public domain by Bob Wallace, Quicksoft.  No rights reserved.

locode  segment public 'CODE'
        assume  cs:locode,ds:locode,es:locode,ss:locode 
        org     100h            ;for com file
getgo:  mov     bl,128          ;param loc
        xor     bh,bh           ;index
        mov     bl,0[bx]        ;param len
        mov     word ptr 129[bx],'( ' ;terminate
        mov     word ptr 131[bx],'/y' ;terminate
        mov     word ptr 133[bx],')n' ;terminate
        mov     word ptr 135[bx],'$ ' ;terminate
        mov     dx,130          ;point to parm
        mov     ah,9            ;print string
        int     33              ;give prompt
        mov     ah,0Dh          ;disk reset
        int     33              ;dos
getyn:  mov     ah,1            ;get a key
        int     33              ;dos
        xor     ah,ah           ;return for 'n'
        cmp     al,'n'          ;'n'?
        je      getok           ;yes
        cmp     al,'N'          ;'N'?
        je      getok           ;yes
        inc     ah              ;return for 'y'
        cmp     al,'y'          ;'y'?
        je      getok           ;yes
        cmp     al,'Y'          ;'Y'?
        je      getok           ;yes
        cmp     al,13           ;enter?
        je      getgo           ;yes
        mov     dl,8            ;backspace
        mov     ah,2            ;put a char
        int     33              ;dos
        jmp     getyn           ;no
getok:  push    ax              ;save
        mov     dl,13           ;carriage return
        mov     ah,2            ;put a char
        int     33              ;dos
        mov     dl,10           ;line feed
        mov     ah,2            ;put a char
        int     33              ;dos
        pop     ax              ;back
        mov     al,4Ch          ;terminate
        xchg    ah,al           ;setup
        int     33              ;dos
locode  ends
        end     getgo
```
{% endraw %}

## GETYN.DOC

{% raw %}
```
                                  GETYN

GETYN can be used in a batch file to get a yes/no response.  It echoes its
command line to the screen, followed by "(y/n)", then waits for a keystroke.
A response of N or n sets ERRORLEVEL to 0, a response of Y or y sets it to 1.
No other response is accepted.

For example, the batch file sequence:

    GETYN Do you have a color monitor?  Press N if unsure
    IF ERRORLEVEL 1 ECHO %%C >> %1ed.def

will prompt the user as follows:

    Do you have a color monitor?  Press N if unsure (y/n)

and if the user presses Y or y, appends the line "%C" to the end of the file
named ED.DEF.  Note by the way that:
  1. ECHO's output can be re-directed.
  2. The >> redirection appends the line to the end of the file.
  3. The % must be doubled to %%, to get a single % to echo.

I wrote GETYN, and hereby release it into the public domain.

Bob Wallace, Quicksoft.

```
{% endraw %}

## STDSAMPL.TXT

{% raw %}
```
The Standard Sample: Introduction

     The Standard Cross-Cultural Sample (Murdock and White 1969, ETHNOLOGY 8: 
329-369) consists of 186 societies, each pinpointed to a particular time and 
place for purposes of coding.  By society we mean a specific local population 
which reproduces a way of life, the description of which may vary depending on 
which of many possible foci is chosen for study, within some larger unit.  No 
attempt is made to generalize the descriptions of these individualized ways of 
life to an entire "society" in terms of the largest groups that might be 
included under the ethnic or national designations of the particular units.

     This sample is designed for testing propositions about human societies, 
cultures, and behaviors.  The order in which the societies are listed below 
corresponds to the order of the records in the datafiles with descriptive 
variables on these societies.  The numbers running from 1 to 186 traverse the 
societies from the southern tip of Africa up through Europe, on through Asia 
and the Pacific, into North America and down to the tip of South America.  The 
dates are the focal date, which is often the earliest reliable ethnographic 
description.  The sample will be listed under the following headings:

 No. Societal Name   Date
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0920

     Volume in drive A has no label
     Directory of A:\

    3#2                338   2-19-89   8:23a
    AGREMTPC SIG      2957   4-22-88   6:52p
    BROWSE   COM       960   4-16-86   6:48a
    BROWSE   INS       814   8-13-87  12:21p
    C1                9302   6-11-87  11:38a
    C2                9302   6-11-87  11:39a
    C3                5166   8-11-87   7:05p
    C4                8930   6-11-87  11:39a
    C5                5166   8-11-87   7:06p
    C6                5166   8-11-87   7:07p
    C7                5166   8-11-87   7:08p
    C8                5166   8-11-87   7:09p
    C9                2234   6-11-87  11:41a
    CDIVBIBL           120   9-18-88   8:49a
    CDIVCDBK            52   4-17-88   7:58a
    CDIVERS1 COD     51640   2-19-89   6:16p
    CDIVERS2 COD     28968   8-20-88  11:05p
    CDIVERSE           511   2-15-89   9:38a
    CDIVERSE C         511   2-19-89   9:15a
    CDIVVARS           629   2-19-89   9:37a
    COORD    DAT      3348   4-19-87   9:18a
    GETYN    ASM      2050  10-26-88   4:52a
    GETYN    COM        97  10-02-86   9:47p
    GETYN    DOC       928  10-21-88   5:50a
    GO       BAT       419   2-19-89   2:47p
    KEY-FAKE COM       536   4-06-86   3:25p
    LOGO3             1264  10-03-88   5:22a
    MAP117            7928   2-19-89   7:53a
    MAP177            3405   2-19-89  12:43p
    MAPBASE           2073   4-15-88   4:51p
    MAPTAB   DIR       643   2-19-89   9:18a
    MAPTAB   EXE    114223   2-19-89  10:49a
    MAPTAB   INS      1222   2-19-89   8:37a
    PATCHES  CRD       283   4-22-88   6:55p
    READ     BAT       864   8-13-87   3:00p
    READER   EXE     24867   5-03-87   6:08a
    SN                4836   4-08-88  10:54a
    STDSAMPL          2998   2-15-89   9:29a
    STDSAMPL SAM       466   2-19-89  10:26a
    STDSAMPL TXT      1323   4-22-88   6:51p
    STDSMPLE AFR       167   9-10-87   8:39a
    STDSMPLE EUA       193   9-10-87   8:57a
    STDSMPLE EVN       412   7-27-87  10:24a
    STDSMPLE INP       137   9-10-87   9:18a
    STDSMPLE MRE       500   1-02-89   7:38a
    STDSMPLE NOA       170   9-10-87   9:16a
    STDSMPLE ODD       410   7-27-87   9:08a
    STDSMPLE SOA       155   9-10-87  10:30a
    FILES920 TXT      2490   3-09-89   1:00p
           49 file(s)     321505 bytes
                            9216 bytes free
