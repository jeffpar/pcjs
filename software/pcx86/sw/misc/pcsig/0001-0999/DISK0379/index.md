---
layout: page
title: "PC-SIG Library Disk #379"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0379/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0379"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDSTAR AIDS"

    An all-star collection of useful WordStar utilities to enhance your
    usage of this valuable word processor.  The collection includes
    keyboard redefinitions, printer patches, color, and editing features.
    Among others: WS2000.DIR gives you a full description of that versions
    keyboard defintions.  Also here is ST -- the SuperTyper program -- an
    improved version of the DOS "TYPE" command.
    
    System Requirements: WordStar
    
    How to Start: Consult the files suffixed .DOC, .KEY and .TXT for
    documentation.  To run a program with the suffix .COM or .EXE, just
    type its name, i.e., for ST.COM, type ST and hit <ENTER>.
    
    File Descriptions:
    
    MODWS1   ASM  Strips underline from WS files
    MODWS1   EXE  "
    ST       DOC  Documenatation for ST.COM
    ST       COM  Supertyper for WordStar
    WS2      KEY  Keyboard redefinition
    WS-PROKY KEY  Function key redefinitions
    WS--3-24 PAT  WS printer patches
    UNWS     EXE  Removes high-order bits from WS
    WSNUM    EXE  Numbers paragraphs in ws files
    WSMX80G  WS   Patches for MX-80G
    WSMOD    COM  Adds color to WS
    WSFXNEC  TXT  Function key redefinitions
    WSFIX3   TXT  Function key redefinitions
    WS3530   WS   Printer patches for NEC3530
    WS2KEY   DOC  Keyboard redefinition
    WS2000   DIR  Keyboard redefinition
    WSPNEC35 BAS  Patches for various printers
    WSUNNUM  EXE  Unnumbers paragraphs in WS files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## WSPNEC35.BAS

```bas
10 'SAVE"a:wspnec35",A       PINSTALL
11 ' This program installs various printers for WordStar 3.02
12 ' MicroPro International Corporation, May 24, 1982
13 ' Revised for WordStar 3.2 - June 16, 1982
14 ' Revised for WordStar 3.21 - August 12,1982 -ewg
15 ' Revised for WordStar 3.24 - November 5,1982 -ewg
16 ' Revised for NEC 3550 Printer - December 1, 1982 - cws
17   '----------------------------------------------------------------------------------------------------------------------------
18 ' Revised on  4- 4-83 for function key settings and miscellaneous locations
19 ' Revised on  5- 1-83 for NEC 3530 printer.
20 ' By Judy Epstein,COMPTICS,3303 Dato Ave.,Highland Park, Ill.60035
21   '----------------------------------------------------------------------------------------------------------------------------
22 '    F1      ^KS ^QP         Super saver--Save and resume.  Cursor to position before this command
23 '    F2      ^QR ^QQ^B       Super reform--Cursor to beginning of file.  Reform every paragraph.
24 '                            Make sure margins and line spacing set properly.
25 '                            This removes spaces you should have put in for ^PEx, so remember to do it again (or now)
26 '    F3      ^OL <esc>       Left  margin set at cursor column.
27 '    F4      ^OR <esc>       Right margin set at cursor column.
28 '    F5      ^PS             Underline toggle
29 '    F6      ^KD P ^R <esc>  Super print--Saves file.  Then selects P to print a file with all defaults as given.
30 '                            Be sure paper is properly positioned before pressing F6.  Be careful when using this command.
31 '                            If a previous file was printed, then that is the name that will be restored with ^R, not this one.
32 '                            If no previous file was printed, then the file that was just saved will be selected with ^R.
33 '    F7      ^KB             Mark block beginning
34 '    F8      ^KK             Mark block end
35 '    F9      ^QR             Cursor to beginning of file
36 '    F10     ^QC             Cursor to end of file
37 ' ------------------------------------------------------------------------
38 ' These patches are of the form:  Address of key,# bytes,1  and then for each of # bytes,     the consecutive address,byte,1
39 ' At most, # bytes = 6  .  The values are in hex.
40 '
47   '----------------------------------------------------------------------------------------------------------------------------
48 '         characters:        ^PQ standard             ^PW remaining shifted characters
49 '         spacing:           ^PA 12 cpi proportional  ^PN turns off, back to dip switch setting
50 '         ribbon:            ^PY toggle between red and black
51 '
52 '   use ^PE for escape, followed by desired uppercase codes to printer as described in manual
53 '   ^PR not used yet
54 '
55 '
56 ' USE NEC 55xx OPTION WHEN ASKED
57 '
58 '
59   '----------------------------------------------------------------------------------------------------------------------------
1070 RESTORE 1405
1230 '
1231 '----------------------------------------------------------------------------------------------------------------------------
1240 ' Unconditional patch data.  These bytes will be patched no matter what
1250 ' printer is selected.
1260 '
1261 ' address,byte,# of bytes
1270 DATA &H7CD,&H90,2
1280 DATA &H7DD,&H90,8
1290 DATA &H2D4,&HFF,1
1300 DATA &H2D6,&HFF,1
1310 DATA &h81b,&h90,2
1320 DATA &h82d,&h90,5
1330 DATA &h83a,&h90,47
1331 'USR1   standard characters  ************************************  ^PQ **
1332 DATA &H077F,4,1,  &H0780,&H0F,1,  &H0781,  00,1,  &H0782,  00,1,  &H0783,  00,1
1336 'USR2    shifted characters  ************************************  ^PW **
1337 DATA &H0784,4,1,  &H0785,&H0E,1,  &H0786,  00,1,  &H0787,  00,1,  &H0788,  00,1
1341 'USR3  escape ***************************************************  ^PE **
1342 DATA &H0789,4,1,  &H078A,&H1B,1,  &H078B,  00,1,  &H078C,  00,1,  &H078D,  00,1
1344 'USR4  NOT USED  ************************************************  ^PR **
1345 DATA &H078E,4,1,  &H078F,&H00,1,  &H0790,  00,1,  &H0791,  00,1,  &H0792,  00,1
1350 'PALT  alternate pitch 12 cpi proportional **********************  ^PA **
1351 DATA &H076B,4,1,  &H076C,&H1B,1,  &H076D,&H48,1,  &H076E,  00,1,  &H076F,  00,1
1355 'PSTD return to setting of spacing dip switch *******************  ^PN **
1356 DATA &H0770,4,1,  &H0771,&H1B,1,  &H0772,&H49,1,  &H0773,  00,1,  &H0774,  00,1
1370 'SOCHR strike out character.  Is 2d for "-".  Put in 2f for "/" *********
1371 DATA &h07c1,&h2d,1
1372 'DEL4 Time delay   Put in 08 or 04 for shorter [was &h10] ***************
1373 DATA &H02d2,&h04,1
1374 ' Function key patches  *************************************************
1375 DATA &h0670,&h04,1,        &h0671,&h0b,1, &h0672,&h53,1, &h0673,&h11,1, &H0674,&h50,1
1376 DATA &h0679,&h05,1,        &h067a,&h11,1, &h067b,&h52,1, &h067c,&h11,1, &h067d,&h51,1, &h067e,&h02,1
1377 DATA &h0682,&h03,1,        &h0683,&h0f,1, &h0684,&h4c,1, &h0685,&h1b,1
1378 DATA &h068b,&h03,1,        &h068c,&h0f,1, &h068d,&h52,1, &h068e,&h1b,1
1379 DATA &h0694,&h02,1,        &h0695,&h10,1, &h0696,&h53,1
1380 DATA &h069d,&h05,1,        &h069e,&h0b,1, &h069f,&h44,1, &h06a0,&h50,1, &h06a1,&h12,1, &h06a2,&h1b,1
1381 DATA &h06a6,&h02,1,        &h06a7,&h0b,1, &h06a8,&h42,1
1382 DATA &h06af,&h02,1,        &h06b0,&h0b,1, &h06b1,&h4b,1
1383 DATA &h06b8,&h02,1,        &h06b9,&h11,1, &h06ba,&h52,1
1384 DATA &h06c1,&h02,1,        &h06c2,&h11,1, &h06c3,&h43,1
1385 ' ITHELP initial help level.  Can be 0,1,2,or 3 *************************
1386 DATA &h0360,&h00,1
1387 ' Hyphen help. ff for on ,00 for off ************************************
1388 DATA &h0389,&h00,1
1389 ' room here for more patches to line 1398 *******************************
1390 ' This line must be used or else a comment left here *****************
1398 DATA 0,0,0
1399 ' --------------------------------------------------------------------
1400 ' PRINTER NAME DATE AREA
1401 '
1405 DATA "NEC 3550 Spinwriter"
1410 DATA "IBM Parallel Printer"
1411 DATA "NEC 5510/5520 Spinwriter"
1412 DATA "Qume Sprint 5 Printer"
1413 DATA "C. Itoh Starwriter"
3169 'PSINIT
3170 DATA &H10, &H1B,&H34,  &H1B,&H4B,  &H1B,&H4F,  &H1B,&H40,  &H1B,&H37,  &H1B,&H3D,  &H1B,&H28, &H0D,&H0D
3179 'PSFINI
3180 DATA &H10, &H1B,&H34,  &H1B,&H4B,  &H1B,&H4F,  &H1B,&H40,  &H1B,&H37,  &H1B,&H3D,  &H1B,&H28, &H0D,&H0D
5110 RESTORE 5450       'this was restore 7460 in install.bas, a mistake!
10000 '****************************************************************************************************************************
10001 '****************************************************************************************************************************
10005 ' Oct. 5, 1982
10010 'from manual, there are two user areas that can be modified.
10020 'in ws.com , user area 1 from line 1 to 861+
10030 '                        locations 0100 to 035EEFF
10035 ' these are for user subroutines
10040 'INISUB  02A4
10050 'UNISUB  O2A7
10060 'MORPAT  02E0
10070 'PBGMEN  035C
10080 'PRINT (:F4:USER1.LST) NOOJ XREF  PAGEWIDTH (132)
10090 '
10100 'in ws.com , user area 4 from line 1 to 722+
10110 'these are where the user printer funcitons come in
10120 '
10130 'USR1    077F     DB  # of bytes
10140 '        0780     DB  byte1,byte2,byte3,byte4
10150 'USR2    0784     DB  # of bytes
10160 '                 DB  BYTE1,BYTE2,BYTE3,BYTE4
10170 'USR3    0789     DB  # of bytes
10180 '                 DB  byte1,byte2,byte3,byte4
10190 'USR4    078E     DB  # of bytes
10200 '                 DB  byte1,byte2,byte3,byte4
10210 ' examples
10220 '                 DB '='
10230 '                 DB 9        ;THIS IS DECIMAL
10240 '                 DB 0AH      ;THIS IS HEX
10250 '                 DB 177Q     ;THIS IS OCTAL , OR 177O
10260 '                 DB 13       ;THIS IS CARRIAGE RETURN
10270 'How to use the codes I have selected for WS
10271 '----------------------------------------------------------------------------------------------------------------------------
10600 '----------------------------------------------------------------------------------------------------------------------------
10610 ' When using ^PE and then another character,     make sure to insert spaces in text
10620 ' WS doesn't count ^P,^E as places in line, but does count the other characters.  Since they don't print, the line gets smaller.
10630 ' If right justifying text, insert spaces for each one used.
10635 'Also be sure to use capital letters so the proper code is sent!
10640 'When combining many options, be sure to nest them in the proper order.  If not, they are not always shut off properly.
10700 '----------------------------------------------------------------------------------------------------------------------------
10710 '     OTHER USEFUL LOCATIONS
10720 ' 0746     POSMTH  FF              printer overstrike method, =  FF if overprint by CR without LF
10730 '                                  = 0 if overprint by BS and/or CR, = 1 for daisy wheel
10760 ' 0747     BLDSTR  DB 2            # strikes for boldface. Set 3,4,5 for darker
10770 ' 0748     DBLSTR  DB 2            # strikes for double strike
10790 ' 07c1     SOCHR   DB '-'          character for strikeout
10800 ' 07c2     ULCHR   DB '_'          underscore character
10810 ' 02d8     NMOFUS  DB 1,1          # users on system
10840 ' 02dc     DEFDSK  DB 1            #  of default drive. 1=A,2=B,3=C,4=D  This drive searched if programs not on logged drive.
10850 ' 02cf     DEL1    DB 1            Screen display time delay - short
10851 ' 02d0     DEL2    DB 4                                      - med short
10852 ' 02d1     DEL3    DB 8                                      - med long
10853 ' 02d2     DEL4    DB 16           [&h10]                    - long
10854 ' 02d3     DEL5    DB 9            Full screen refresh
10860 ' 0360     ITHELP  DB 3            Initial help level. Change to 0,1,2 for help level at boot-up  ^JH3
10870 ' 0361     NITHLF  DB ffH          Initial help message.  Change to 0 for message if level is 1 or 2
10880 ' 0362     ITTOGF  DB ffH          Insert. Change to 0 for off  ^V
10890 ' 0363     ITDSDR  DB ffH          Directory display.  Change to 0 for off  ^KF, F
10900 ' 037f     ITITLM  DB 0            Initial left margin column number - 1.  Valid values are 0 to INITRM -3  ^OL1
10910 ' 0380     ITITRM  DB 40H          Initial right margin column number - 1.  Valid values are 2 to screen width - 4  ^OR65
10920 ' 0385           DB ffH          Word wrap.      0 for off.          ^OW
10921 ' 0386           DB ffH          Justify.        0 for ragged right  ^OJ
10922 ' 0387           DB ffH          Variable tabs.  0 for off.          ^OV
10923 ' 0388           DB 0            Soft hyphen.    ff for on.          ^OE
10924 ' 0389           DB ffH          Hyphen help.    0 for off.          ^OH
10925 ' 038a           DB ffH          Print control display. 0 for off.   ^OD
10926 ' 038b           DB ffH          Ruler display.  0 for off.          ^OT
10927 ' 038c           DB ffH          Page break display. 0 for off.      ^OP
10928 ' 038d           DB ffH          Page break suppress.  0 for off.    ^OP
10929 ' 038e           DB 01H          Single spacing.  Change to 2,3,..9  ^OS
10930 ' 038f           DB 00H          Column mode.    ff for on.          ^KN
10931 ' 0392           DB 00H          Document mode.  ff for non-document   N
10932 ' 0393           DB 2eH          Decimanl point  character.  Usually "."
10933 ' 0395           DB 2eH          Character that begins dot commands.  Usually "."
10934 ' 0396           DB 0fH          Non-break space character.  Usually ^O
10935 ' 039a           DB 04H          Hyphen criterion.  # columns short of right margin for hyphen help active
10940 ' 03b3           DB 20H          Soft Cr.  Line does not end paragraph.  CR at end can be moved by ^B.
10941 '                                Usually " ".  Change to "\" [5cH]
10950 ' 03b4           DB 3cH          Hard Cr.  End of line is paragraph termination.  Usually "<" Can change to " " [20H]
10951 '                                Then can use ^B to reform program source files, where each line ends in CR
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0379

     Volume in drive A has no label
     Directory of A:\

    WS--3-24 PAT     39713   6-29-83   7:44p
    WS-PROKY KEY     26752   8-05-83   8:35a
    WSMOD    COM      9344   6-11-83  12:26a
    WS2      KEY      1024   1-01-80   2:00a
    WS2KEY   DOC      2048   6-16-84   8:55p
    MODWS1   ASM      7040   1-15-84  10:57p
    MODWS1   EXE      2688   1-15-84  10:58p
    UNWS     EXE      2816  11-28-82   8:48a
    WSFIX3   TXT      6407   6-30-83   8:43a
    WSMX80G  WS       4992   8-03-82
    WS3530   WS       3840   8-02-82
    WSFXNEC  TXT      6102   6-30-83   8:14a
    WSPNEC35 BAS     12800   6-24-83   8:17a
    WS2000   DIR      5888  11-05-84  12:44p
    WSNUM    EXE     35200   9-14-84  10:46p
    WSUNNUM  EXE     33024   9-14-84  10:46p
    ST       DOC      1048   1-10-84  10:41a
    FILES379 TXT      1241   2-24-86  12:48p
    ST       COM     14336   1-09-84   8:44a
           19 file(s)     216303 bytes
                           98304 bytes free
