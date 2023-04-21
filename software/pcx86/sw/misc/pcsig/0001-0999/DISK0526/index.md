---
layout: page
title: "PC-SIG Diskette Library (Disk #526)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0526/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0526"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WSMX80"

    Designed to be used with Epson MX/RX/FX dot matrix printers and
    "Epson-compatible" printers, this product provides an impressive
    variety of enhancements for WordStar documents.  It should be
    especially useful to users of WordStar involved with mathematical and
    scientific notation.  Character density, size and style are all subject
    to a wide range of variation.  Any part of the document can be printed
    in italics, boldface, "doublewide" or compressed type.  Sub-scripts and
    superscripts are included.  WSMX80 prints a variety of underline styles
    and strikeovers.  WSMX80 can insert alternate character sets, such as
    the Greek alphabet included in the product, or custom character sets
    designed by the user.  There are also features for Table of Contents
    and Indexes of the document being printed.
    
    System Requirements:  WordStar 3.0 or better. Epson printer or
    compatable, 256K memory, one drive and either a color or mono display.
    
    How to Start: Consult the .TXT and .DOC files for documentation.  To
    run a program marked .EXE or .COM, just type its name, i.e., for
    WSMX.EXE, type WSMX and press <ENTER>.
    
    Suggested Registration:   $25.00
    
    File Descriptions:
    
    WSMX     EXE  Main program
    README   TXT  Notes on how to print documentation (TYPE "GO" to Display)
    DBL      CHR  Double high character code file
    DBL      TXT  Text file with examples of Double high text
    WPATCH   EXE  WORDSTAR patch
    CHRCOM   EXE  Character look-up program
    GREEK    TXT  Text file with examples of Greek text
    GREEKD   TXT  Text file with examples of Greek text for Diablo printers
    GREEK    CHR  Greek character code file
    HAPPY    PRN  Disk Backup instructions can be printed with WSMX
    OMSG     TXT  Licence information; how to register
    WSMXDOC  TXT  Instruction Manual
    GREEKD   CHR  Greek character code file for the Diablo printer
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBL.TXT

{% raw %}
```
.DM
.DM
.DM
.DM
.DM
.DM     This is a double-high character set for EPSON prin-
.DM ters.  Double-high characters will be generated when you
.DM set the line height with a ..lh 21# command, load this alternate
.DM set with the ..ac DBL.CHR command, and print two consecutive
.DM lines with the same text first in upper case and then in
.DM lower case.  See the example at the end of this file.
.DM	Provided by Stephen R. Berg, 1229 Kuuna Street, Kailua, HI 96734
.DM
..ac DBL.CHR
 2,0,0
11,0,0,0,48,112,254,0,0,0,0,0                      ! !
12,0,0,0,208,224,0,0,208,224,0,0,0                 " "
12,0,96,192,192,192,192,194,194,198,108,56,0       # #
12,0,2,6,12,24,48,96,192,254,0,0,0                 $ $
12,0,254,194,194,194,194,194,194,194,192,192,0     % %
12,0,192,192,192,192,194,198,204,216,240,224,0     & &
 2,208,224                                         ' '      
12,0,60,102,194,194,194,194,194,194,102,62,0       ( (
12,0,62,96,192,192,192,198,216,224,96,62,0         ) )
12,0,56,100,194,194,194,194,194,194,100,56,0       * *
11,0,0,2,50,14,2,14,50,2,0,0                       + +
 2,13,14                                           , ,
12,0,0,0,3,3,3,3,3,3,0,0,0                         - -
 2,6,6                                             . .
12,0,0,0,0,0,216,0,0,0,0,0,0                       / /
12,0,248,12,14,54,198,6,6,6,12,248,0               0 0
11,0,6,6,6,6,254,6,6,6,6,0                         1 1
12,0,126,198,134,134,134,134,134,134,6,6,0         2 2
12,0,12,6,6,6,6,134,134,134,204,120,0              3 3
12,0,192,192,192,192,192,192,192,254,192,192,0     4 4
12,0,140,134,134,134,134,134,134,134,204,120,0     5 5
12,0,248,140,134,134,134,134,134,134,204,120,0     6 6
12,0,0,0,126,192,128,0,0,0,0,0,0                   7 7
12,0,120,204,134,134,134,134,134,134,204,120,0     8 8
12,0,0,6,134,134,134,134,134,134,12,248,0          9 9
 4,0,56,56,0                                       : :
 4,0,56,56,0                                       ; ;
 2,0,0                                             < <
11,0,0,128,152,224,128,224,152,128,0,0             = =
 2,0,0                                             > >
12,0,96,192,192,192,194,198,198,198,108,56,0       ? ?
12,0,48,96,194,194,194,194,194,194,102,60,0        @ @
12,0,30,48,96,192,192,192,192,96,48,30,0           A A
12,0,192,254,194,194,194,194,194,194,102,60,0      B B
12,0,62,96,192,192,192,192,192,192,96,48,0         C C
12,0,192,254,192,192,192,192,192,192,96,62,0       D D
12,0,254,194,194,194,194,194,194,194,192,192,0     E E
12,0,254,194,194,194,194,194,194,194,192,192,0     F F
12,0,62,96,192,192,192,192,194,194,96,48,0         G G
12,0,254,2,2,2,2,2,2,2,2,254,0                     H H 
11,0,0,192,192,192,254,192,192,192,0,0             I I 
12,0,0,0,0,0,0,192,192,254,192,192,0               J J
12,0,254,2,2,6,12,24,48,96,192,0,0                 K K
12,0,254,0,0,0,0,0,0,0,0,0,0                       L L
11,0,254,56,14,2,0,2,14,56,254,0                   M M
11,0,254,192,48,12,2,0,0,0,254,0                   N N
12,0,62,96,192,192,192,192,192,192,96,62,0         O O
12,0,254,194,194,194,194,194,194,194,102,60,0      P P
12,0,62,96,192,192,192,192,192,192,96,62,0         Q Q
12,0,254,194,194,194,194,194,194,194,102,56,0      R R
12,0,60,102,194,194,194,194,194,194,192,96,0       S S
11,0,192,192,192,192,254,192,192,192,192,0         T T
12,0,254,0,0,0,0,0,0,0,0,254,0                     U U
11,0,252,6,0,0,0,0,0,6,252,0                       V V
11,0,254,0,0,0,0,0,0,0,254,0                       W W
12,0,128,224,56,12,2,2,12,56,224,128,0             X X
11,0,224,56,14,2,0,2,14,56,224,0                   Y Y
12,0,192,192,192,192,192,194,198,204,216,240,0     Z Z
12,0,24,12,140,140,254,140,140,140,216,112,0       [ [
11,0,0,14,56,224,128,0,0,0,0,0                     \ \
12,0,28,54,98,98,254,98,98,98,96,48,0              ] ]
12,0,62,98,194,194,194,194,194,194,96,48,0         ^ ^
12,3,3,3,3,3,3,3,3,3,3,3,3                         _ _
 8,0,128,128,64,64,64,32,32,                       ` `
12,0,254,192,192,192,192,192,192,192,192,254,0     a a
12,0,6,254,134,134,134,134,134,134,204,120,0       b b
12,0,248,12,6,6,6,6,6,6,12,24,0                    c c 
12,0,6,254,6,6,6,6,6,6,12,248,0                    d d
12,0,254,134,134,134,134,134,134,134,6,6,0         e e
12,0,254,128,128,128,128,128,128,128,0,0,0         f f
12,0,248,12,6,6,6,6,134,134,140,248,0              g g 
12,0,254,128,128,128,128,128,128,128,128,254,0     h h   
11,0,0,6,6,6,254,6,6,6,0,0                         i i      
12,0,24,12,6,6,6,6,12,248,0,0,0                    j j
12,0,254,128,128,128,192,96,48,24,12,6,0           k k
12,0,254,6,6,6,6,6,6,6,6,6,0                       l l
11,0,254,0,0,192,112,192,0,0,254,0                 m m
11,0,254,0,0,0,128,96,24,6,254,0                   n n
12,0,248,12,6,6,6,6,6,6,12,248,0                   o o
12,0,254,128,128,128,128,128,128,128,0,0,0         p p     
12,0,248,12,6,6,6,6,102,54,28,246,0                q q
12,0,254,128,128,128,192,224,176,152,12,6,0        r r
12,0,12,6,134,134,134,134,134,134,204,120,0        ss
11,0,0,0,0,0,254,0,0,0,0,0                         t t
12,0,248,12,6,6,6,6,6,6,12,248,0                   u u
11,0,0,128,224,56,14,56,224,128,0,0                v v
11,0,224,56,14,56,224,56,14,56,224,0               w w
12,0,2,14,56,224,128,128,224,56,14,2,0             x x
11,0,0,0,0,192,126,192,0,0,0,0                     y y
12,0,14,30,54,102,198,134,6,6,6,6,0                z z
12,204,0,50,0,204,0,50,0,204,0,50,0                { {
11,0,0,0,0,0,6,28,112,192,0,0                      | |
12,102,0,152,0,102,0,152,0,102,0,152,0             } }
12,0,0,0,0,0,0,0,0,0,0,0,0                         ~ ~       
 1,0

..lh 21#
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
 
])!#@$%^&*(:   "
[0123456789;,.- 
```
{% endraw %}

## FILES526.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  526  WSMX80  Version 4.1                                   v1 DS2
---------------------------------------------------------------------------
WSMX80 is a printer supplement for WORDSTAR.  Designed to be used with 
Epson MX/RX/FX dot matrix printers and "Epson-compatible" printers, this 
product provides an impressive variety of enhancements for WORDSTAR 
documents.  It should be especially useful to users of WORDSTAR involved 
with mathematical and scientific notation.  
 
Character density, size and style are all subject to a wide range of 
variation.  Any part of the document can be printed in italics, boldface, 
"doublewide" or compressed type.  Sub-scripts and superscripts are 
included.  WSMX80 prints a variety of underline styles and strikeovers.  
WSMX80 can insert alternate character sets, such as the Greek alphabet 
included in the product, or custom character sets designed by the user. 
There are also features for Table of Contents and Indexes of the document 
being printed.  
 
 
README   TXT  Notes on how to print documentation (TYPE "GO" to Display)
WSMX     EXE  Main program
CHRCOM   EXE  Character look-up program
WPATCH   EXE  WORDSTAR patch
DBL      TXT  Text file with examples of Double high text
DBL      CHR  Double high character code file
GREEK    TXT  Text file with examples of Greek text
GREEK    CHR  Greek character code file
GREEKD   TXT  Text file with examples of Greek text for the Diablo printer
GREEKD   CHR  Greek character code file for the Diablo printer
WSMXDOC  TXT  Instruction Manual
OMSG     TXT  Licence information; how to register
HAPPY    PRN  Disc Backup and Manual instructions can be printed with WSMX
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## GREEK.TXT

{% raw %}
```
..ac greek.chr
2,0,0
11,16,16,24,6,1,6,24,96,128,128,128,		! !
6,0,0,0,16,56,16,				" "
8,0,0,16,0,108,130,130,130,			# #
7,0,130,130,130,108,0,16,			$ $
9,32,2,32,2,248,2,32,2,32,			% %
11,128,0,128,0,128,0,128,0,128,0,128,		& &
8,0,16,16,16,84,16,16,16,			' '
11,128,192,224,240,216,204,198,195,193,192,192,	( (
11,1,3,7,15,27,51,99,195,131,3,3,		) )
11,204,204,0,51,51,0,204,204,0,51,51,		* *
9,60,66,153,165,165,165,129,66,60,		+ +
11,48,48,48,48,48,48,48,48,48,48,48,		, ,
11,16,0,16,0,16,0,16,0,16,0,16,			- -
9,64,128,0,128,64,32,0,32,64,			. .
9,16,32,0,32,16,8,0,8,16,			/ /
8,0,112,136,0,136,0,136,112,			0 0
7,0,0,72,0,248,0,8,				1 1
8,0,72,128,24,128,40,128,72,			2 2
8,0,0,136,160,8,224,136,48,			3 3
8,0,224,0,32,0,248,0,32,			4 4
7,0,232,0,168,0,168,144,			5 5
8,0,16,40,64,168,0,40,16,			6 6
7,0,128,136,16,160,64,128,			7 7
8,0,80,168,0,168,0,168,80,			8 8
8,0,64,160,0,168,16,160,64,			9 9
9,32,0,64,0,128,0,64,0,32,			: :
8,0,192,192,0,0,0,192,192,			; ;
9,0,16,40,68,130,16,40,68,130,			< <
11,248,248,32,112,223,159,20,22,22,29,9		= =
9,0,130,68,40,16,130,68,40,16,			> >
9,2,1,1,1,126,128,128,128,64,			? ?
11,239,255,25,25,38,96,47,31,17,241,225,	@ @
9,32,48,40,36,34,36,40,48,32,			A A
9,56,68,68,40,16,40,0,40,16,			B B
9,176,72,0,8,254,8,0,72,176,			C C
9,56,68,68,68,254,68,68,68,56,			D D
11,16,0,56,0,84,0,16,0,16,0,16,			E E
8,0,5,136,5,80,5,32,5,				F F
9,6,12,24,48,96,48,24,12,6,			G G
9,96,144,144,240,0,254,0,0,254,			H H
8,0,16,32,64,191,64,32,16,			I I
8,0,5,32,5,80,5,136,5,				J J
9,2,25,36,1,102,128,36,152,64,			K K
9,38,82,142,0,128,0,142,82,38,			L L
8,8,68,146,0,146,64,50,12,			M M
9,16,32,64,32,16,8,4,8,16,			N N
8,0,8,4,2,253,2,4,8,				O O
8,0,2,114,136,4,136,114,2,			P P
8,128,0,254,0,128,0,128,64,			Q Q
9,56,68,130,16,146,16,130,68,56,		R R
9,130,0,198,0,170,0,146,0,130,			S S
11,16,0,16,0,16,0,84,0,56,0,16,			T T
9,130,0,146,0,146,0,146,0,130,			U U
9,24,36,36,36,24,24,36,36,36,			V V
9,1,7,25,97,128,97,25,7,1,			W W
8,0,84,0,84,0,84,0,84,				X X
9,192,128,128,64,62,64,128,128,192,		Y Y
9,64,148,0,148,64,52,0,52,64,			Z Z
9,32,34,60,32,32,32,60,34,64,			[ [
9,36,36,36,36,255,36,36,36,36,			\ \
9,128,126,128,0,128,0,254,0,128,		] ]
9,32,32,32,32,255,32,32,32,32,			^ ^
11,1,0,1,0,1,0,1,0,1,0,1,			_ _
8,0,128,128,64,64,64,32,32,			` `
9,8,20,34,34,34,20,8,20,34,			a a
8,0,63,82,146,146,146,82,44,			b b
9,13,22,36,12,20,32,72,144,32,			c c
9,9,22,36,12,84,96,72,208,32,			d d
8,0,20,42,42,42,34,34,20,			e e
8,0,124,68,68,68,68,68,124,			f f	
9,134,8,144,64,32,16,8,4,2,			g g
8,32,30,32,32,32,32,32,31,			h h
7,0,0,0,30,2,2,4,				i i
9,0,40,20,66,130,162,132,120,16,		j j
8,0,62,0,8,0,20,0,34,				k k
9,12,18,2,2,28,2,2,18,12,			l l
8,0,63,0,2,0,2,4,62,				m m
9,32,16,8,4,2,4,8,16,32,			n n
8,0,28,34,0,34,0,34,28,				o o
8,0,30,33,8,32,8,40,16,				p p
8,0,32,38,17,8,17,38,64,			q q
9,24,36,82,0,146,0,148,72,48,			r r
9,0,28,34,2,32,2,60,0,32,			s s
9,32,64,64,64,60,2,32,2,36,			t t
9,0,44,82,209,2,81,2,81,2,			u u
9,34,0,20,0,8,0,20,0,34,			v v
8,0,12,82,160,18,128,82,12,			w w
8,64,65,66,36,24,20,34,65,			x x
8,32,44,50,2,0,2,68,56,				y y
8,0,24,36,197,2,65,2,1,				z z
10,0,0,0,0,127,255,192,192,96,48,		{ {
7,0,0,0,0,255,255,0,				| |
6,12,6,3,3,255,254,				} }
8,0,32,32,64,64,64,128,128,			~ ~
1,0
```
{% endraw %}

## GREEKD.TXT

{% raw %}
```
..ac greekd.chr
2,0,0,
9,0,6,24,104,136,136,104,24,6,			! !
8,0,254,146,146,146,146,146,108,		" "
8,128,0,254,0,128,0,128,64,			# #
9,1,7,25,97,128,97,25,7,1,			$ $
7,0,254,146,146,146,146,130,			% %
8,0,130,134,138,146,162,194,130,		& &
8,0,254,16,16,16,16,16,254,			' '
9,56,68,130,16,146,16,130,68,56,		( (
6,0,0,0,130,254,2,				) )
6,0,254,16,40,68,130,				* *
9,6,12,24,48,96,48,24,12,6,			+ +
8,0,254,64,32,16,32,64,254,			, ,
9,00,0,254,64,32,16,8,4,254,			- -
9,130,0,146,0,146,0,146,0,130,			. .
9,0,56,68,0,0,0,0,68,56,			/ /
9,128,126,128,0,128,0,254,0,128,		0 0
7,0,254,144,144,144,144,96,			1 1
9,130,0,198,0,170,0,146,0,130,			2 2
8,0,192,128,130,254,130,128,192,		3 3
9,192,128,128,64,62,64,128,128,192,		4 4
9,56,68,68,68,254,68,68,68,56,			5 5
8,0,130,68,40,16,40,68,130,			6 6	
9,176,72,0,8,254,8,0,72,176,			7 7
9,38,82,142,0,128,0,142,82,38,			8 8
9,130,0,198,0,170,0,146,0,130,			9 9
9,32,48,40,36,34,36,40,48,32,			: :
4,0,60,66,129,					; ;
9,0,0,0,0,0,0,129,66,60,			< <
3,255,129,129,					= =
11,0,0,0,0,0,0,0,129,129,255			> >
9,2,1,1,1,126,128,128,128,64,			? ?
8,0,12,18,50,82,82,82,36,			@ @
9,8,20,34,34,34,20,8,20,34,			A A
8,0,63,82,146,146,146,82,44,			B B
8,0,32,38,17,8,17,38,64,			C C
8,0,12,82,160,18,128,82,12,			D D
8,0,20,42,42,42,34,34,20,			E E
8,0,24,36,197,2,65,2,1,				F F
8,32,30,32,32,32,32,32,31,			G G
9,24,36,82,0,146,0,148,72,48,			H H
7,0,0,0,30,2,2,4,				I I
8,0,62,0,8,0,20,0,34,				J J
9,134,8,144,64,32,16,8,4,2,			K K
8,0,63,0,2,0,2,4,62,				L L
8,32,44,50,2,0,2,68,56,				M M
9,0,44,82,209,2,81,2,81,2,			N N
8,0,28,34,0,34,0,34,28,				O O
9,32,34,60,32,32,32,60,34,64,			P P
8,0,30,33,8,32,8,40,16,				Q Q
9,0,28,34,2,32,2,60,0,32,			R R
9,32,64,64,64,60,2,32,2,36,			S S
9,32,16,8,4,2,4,8,16,32,			T T
9,9,22,36,12,84,96,72,208,32,			U U
8,64,65,66,36,24,20,34,65,			V V
9,13,22,36,12,20,32,72,144,32,			W W
9,12,18,2,2,28,2,2,18,12,			X X
8,0,2,114,136,4,136,114,2,			Y Y
6,0,0,0,16,56,16,				Z Z
11,16,16,24,6,1,6,24,96,128,128,128,		[ [
7,0,130,130,130,108,0,16,			\ \
8,0,0,16,0,108,130,130,130,			] ]
9,00,00,00,00,2,00,00,00,00,			^ ^
11,2,0,4,0,8,0,16,0,32,0,64,			_ _
8,0,014,017,0,017,0,017,014,			` `
7,0,0,9,0,31,0,1,				a a
8,0,9,16,3,16,5,016,09,				b b
8,0,0,017,020,1,028,017,06,			c c
8,0,028,0,04,0,031,0,04,			d d
7,0,029,0,021,0,021,018,			e e
8,0,02,05,08,021,0,05,02,			f f
7,0,016,017,02,020,08,016,			g g
8,0,10,021,0,021,0,021,10,			h h
8,0,08,020,0,021,02,020,08,			i i
9,32,2,32,2,248,2,32,2,32,			j j
11,128,0,128,0,128,0,128,0,128,0,128,		k k
8,0,5,32,5,80,5,136,5,				l l
8,0,5,136,5,80,5,32,5,				m m
9,64,128,0,128,64,32,0,32,64,			n n
9,72,144,0,144,72,36,0,36,72,			o o
8,0,112,136,0,136,0,136,112,			p p
7,0,0,72,0,248,0,8,				q q
8,0,72,128,24,128,40,128,72,			r r
8,0,0,136,160,8,224,136,48,			s s
8,0,224,0,32,0,248,0,32,			t t
7,0,232,0,168,0,168,144,			u u
8,0,16,40,64,168,0,40,16,			v v
7,0,128,136,16,160,64,128,			w w
8,0,80,168,0,168,0,168,80,			x x
8,0,64,160,0,168,16,160,64,			y y
8,0,4,4,4,31,4,4,4,				z z
10,0,0,0,16,16,16,16,16,			{ {
8,0,0,0,34,20,8,20,34,				| |
10,0,0,0,16,16,124,16,16,0,0,			} }
10,0,24,36,36,36,24,36,36,36,24,		~ ~
2,0,0,
```
{% endraw %}

## NOTES526.TXT

{% raw %}
```
Program name: WSMX80  (release 4.1)
 
Author name: K. L. Ratzlaff
Address:     Wheatland Design Laboratory
             2601 BelleCrest Dr.
             Lawerance, Kansas   66046
 
Suggested Donation:  $25.00
 
Program Description:
 
     WSMX80 is a printer supplement for WORDSTAR.  Designed to be used with
Epson MX/RX/FX dot matrix printers and "Epson-compatible" printers, this
product provides an impressive variety of enhancements for WORDSTAR documents.
It should be especially useful to users of WORDSTAR involved with mathematical
and scientific notation.
 
     Character density, size and style are all subject to a wide range of
variation.  Using control characters and dot commands similar to standard
WORDSTAR print commands, WSMX80 can easily direct any part of the document
to be printed in italics, boldface, "doublewide" or compressed type.  Sub-
scripts and superscripts are included as well.
 
     In addition to character enhancement, WSMX80 prints a variety of underline
styles; single, double or wavy, and strikeovers with slashes or dashes.  WSMX80
can insert alternate character sets, such as the Greek alphabet included in the
product, or custom character sets designed by the user.
 
     There are also features which allow for redefining control characters;
setting up Table of Contents and building Indexes of the document being printed.
 
     WSMX80 enables the WORDSTAR user to produce handsome, professional docu-
ments, and it operates and presents itself in a professional, well designed
format.  It adds many features to a WORDSTAR presentation, and does so in a
simple, concise manner.
```
{% endraw %}

## OMSG.TXT

{% raw %}
```
..sl 8
                             WSMX80

 ***************************  NOTICE  ***************************
 *  A limited license is granted to all users of this program,  *
 *  to make copies of this program and distribute them to other *
 *  users, on the following conditions:                         *
 *     1. This message in the file for the manual               *
 *        is not to be altered, bypassed, or removed.           *
 *     2. The program is not to be distributed to others in     *
 *        modified form.                                        *
 *     3. No fee is to be charged (or any other consideration   *
 *        received) for copying or distributing the program     *
 *        without an express written agreement with             *
 *        Wheatland Design Laboratory, 2601 BelleCrest,         *
 *          Lawrence, Kansas  66046.                            *
 *     4. The program is not used in support of any research    *
 *        or other projects funded through the Department of    *
 *        Defense, directly or indirectly.                      *
 *                                                              *
 *  Wheatland Design Lab wishes to acknowledge that the form of *
 *  most of this notice comes from the originator of PC-TALK:   *
 *  Headlands Press, Inc., Box 862, Tiburon, CA 94920           *
 *                                                              *
 ****************************************************************

     Thi≤á prograφá wa≤ successfull• marketeΣ fo≥ severa∞á years¼ ì
botΦá througΦ ß smal∞ numbe≥ oµ dealer≤ anΣ througΦ direc⌠á mail¼ ì
fo≥á $39.95«á  Wishinτ t∩ makσ i⌠ morσ widel•á availablσá withou⌠ ì
havinτá t∩á handlσá thσ burdeε oµ marketinτ anΣá fillinτá orders¼ ì
Wheatland Design Lab is releasing it as "FREEWARE".

     Iµ yo⌡ arσ usinτ thi≤ prograφ anΣ findinτ i⌠ oµ value¼á you≥ ì
contributioεáá ($2╡á suggested⌐á wil∞á bσáá appreciated«áá  Thesσ ì
contribution≤ wil∞ hel≡ u≤ t∩ makσ morσ softwarσ availablσ iε thσ ì
nea≥á future«áá  Also¼áá fo≥á thσá benefi⌠á oµá corporatσá and/o≥ ì
universit• users¼á WheatlanΣ wil∞ suppl• ß licensσ fo≥ thσ usσ oµ ì
this program for $25; purchase orders will be accepted.

                   Wheatland Design Laboratory
                       2601 BelleCrest Dr.
                       Lawrence, KS 66046

       Yo⌡á arσá encourageΣ t∩ cop• anΣ sharσ thi≤á prograφá witΦ ì
othe≥á users¼á oε thσ condition≤ tha⌠ thσ prograφ i≤ no⌠á distriì
buteΣ iε modifieΣ form¼á tha⌠ n∩ feσ o≥ consideratioε i≤ charged¼ ì
anΣ tha⌠ thi≤ noticσ i≤ no⌠ bypasseΣ o≥ removed¼á eithe≥ froφ thσ ì
program or from the manual.

 by K. L. Ratzlaff
 Wheatland Design Laboratory
 2601 BelleCrest Dr.
 Lawrence, Kansas  66046.
..rl
```
{% endraw %}

## WSMXDOC.TXT

{% raw %}
```
.LH 10
.OP
..sf 0


..AC GREEK.CHR
****************************************************************




=  @  =  @  =  @  =  @  =  @  =  @  =  @  =  @  =  @  =  @  =  @   


..ac dbl.chr
..sl 21#
                           W S M X * O
                           w s m x 8 o
..rl

..AC GREEK.CHR
                   A Wordstar Print Processor 
                               for 
            Epson MX/RX/FX-series Dot Matrix Printers
                  

                           Release 4.1
                       Copyright (c), 1983
                   Wheatland Design Laboratory

.HE WSMX80 Documentation               (c) Wheatland Design Lab, 1986
















..sl 8
Wheatland Design Laboratory
2601 Belle Crest
Lawrence, Kansas 66044
..rl

****************************************************************
.pa
è.fi OMSG.TXT
.pn -1
.pa
è..C╪ 3
                        TABLE OF CONTENTS
I.   Control Characters . . . . . . . . . . . . . . . . . . . .1
..SL 8
     1.   Boldface (^B) . . . . . . . . . . . . . . . . . . . .2
     2.   Double-strike (^D). . . . . . . . . . . . . . . . . .2
     3.   Boldface/Double-strike (^B^D) . . . . . . . . . . . .2
     4.   Double-wide (^A/^N) . . . . . . . . . . . . . . . . .2
     5.   Italics (^Q/^W) . . . . . . . . . . . . . . . . . . .3
     6.   Compressed (^Y) . . . . . . . . . . . . . . . . . . .3
     7.   Underline (^S). . . . . . . . . . . . . . . . . . . .3
     8.   Strikeout (^X). . . . . . . . . . . . . . . . . . . .3
     9.   Full-sized Superscripts (^T)  . . . . . . . . . . . .3
    10.   Full-sized Subscripts (^V)  . . . . . . . . . . . . .3
    11.   Half-sized Superscripts (^P)  . . . . . . . . . . . .4
    12.   Half-sized Subscripts (^E)  . . . . . . . . . . . . .4
    13.   Backspace (^H). . . . . . . . . . . . . . . . . . . .4
    14.   Alternate Character Set (^R). . . . . . . . . . . . .4
    15.   Table of Contents Entry (^G). . . . . . . . . . . . .4
    16.   Index Entry (^K)  . . . . . . . . . . . . . . . . . .4
    17.   Others  . . . . . . . . . . . . . . . . . . . . . . .5
..RL
II.  Standard Dot Commands. . . . . . . . . . . . . . . . . . .5
III. Dot Commands with Special Meanings . . . . . . . . . . . .5
..SL 8
     1.   Line Height, .LH. . . . . . . . . . . . . . . . . . .5
     2.   Subscript/Superscript Roll, .SR . . . . . . . . . . .5
     3.   Paper Length, .PL . . . . . . . . . . . . . . . . . .6
     4.   File Insert, .FI  . . . . . . . . . . . . . . . . . .6
..RL
IV.  Do⌠ Command≤ whicΦ arσ Ignored . . . . . . . . . . . . . .6
V.   Dot Commands Unique to WSMX80  . . . . . . . . . . . . . .6
..SL 8
     1.   Empty Page, ..EP  . . . . . . . . . . . . . . . . . .6
     2.   Print Empty Page, ..PE  . . . . . . . . . . . . . . .6
     3.   Save/Restore Line Height, ..SL and ..RL . . . . . . .7
     4.   Change ^X character, ..CX . . . . . . . . . . . . . .7
     5.   Load Alternate Character Set, ..AC  . . . . . . . . .7
     6.   Redefine Control Characters, ..RD . . . . . . . . . .8
     7.   Table of Contents File, ..TC  . . . . . . . . . . . .8
     8.   Index File, ..NX  . . . . . . . . . . . . . . . . . .8
     9.   Select Font, ..SF   . . . . . . . . . . . . . . . . .9
..RL
VI«  Somσ Examples« « « « « « « « « « « « « « « « « « « « « « .9
VII. Implementation of WSMX80 . . . . . . . . . . . . . . . . 10
..SL 8
     1.   Executable Versions . . . . . . . . . . . . . . . . 10
     2.   Execution Procedure . . . . . . . . . . . . . . . . 11
     3.   Command Line Execution  . . . . . . . . . . . . . . 13
     4.   Commands During Execution . . . . . . . . . . . . . 14 
     5.   Installation  . . . . . . . . . . . . . . . . . . . 15
..RL
VIII.Generation of Alternate Character Sets . . . . . . . . . 15
èIX.  In Case of Problems. . . . . . . . . . . . . . . . . . . 16
..sl 8
Appendix I.       Alternate Character Set (GREEK.CHR) . . . . 18
Appendix II.      Alternate Character Set (GREEKD.CHR). . . . 18
Appendix III.     Alternate Character Set (DBL.CHR) . . . . . 18
Appendix IV.      Control Character Assignment Summary  . . . 21
..rl
..sl 7
Ö     Throughou⌠ thi≤ manual¼á reference≤ arσ madσ t∩ CP/M¼á MP/M¼á MS-DOS¼á Graftrax¼ anΣ WordStar«  CP/Mù i≤ ß ì
registereΣ trademarδ oµ Digita∞ Research¼á anΣ MP/Mù i≤ ß trademarδ oµ Digita∞ Research«  MS-DOSù i≤ ß trademarδ ì
oµá MicroSoft«á  Graftraxùá i≤ ß registereΣ trademarδ oµ Epsoε America«á  WordStarù i≤ ß trademarδá oµá MicroPr∩ ì
International.
+, January, 1983, Wheatland Design Laboratory
..RL
.lh 10
.cp 30

.FO                                                          page #

          Introduction to WSMX80


     WSMX80ùá i≤á ß prograφ tha⌠ i≤ useΣ t∩ greatl•á enhancσá you≥ ì
acces≤á t∩ thσ capabilitie≤ oµ you≥ Epsoε printe≥ wheε yo⌡á writσ ì
document≤á witΦá WordStar«á  I⌠ i≤ designσ fo≥ usσ witΦá thσá MX-ì
series¼á RX-series¼ anΣ FX-serie≤ Epsoε printers«  I⌠ mayô operatσ ì
witΦá othe≥ printer≤ tha⌠ arσ "Epson-compatibleó dependinτ oε thσ ì
degreσ oµ compatibilit• (seσ Sectioε IX.)

     Wheεá yo⌡á preparσ ß tex⌠ filσ usinτ WordStarùá withou⌠á thi≤ ì
software¼á yo⌡á usσá thσá Pùá o≥ Mù command≤á t∩á prin⌠á i⌠á withinô ì
WordStar«á  T∩á enablσ specia∞ enhancement≤ iε thσ printing¼á yo⌡ ì
caεá patcΦ WordStarù t∩ ß limiteΣ extent¼á bu⌠ yo⌡ canno⌠á achievσ ì
al∞á oµá thσá specia∞á printinτ style≤ oµá whicΦá you≥á Epsoεá i≤ ì
capable.

     B•á separatinτá thσ printinτ functioε froφ WordStarù anΣá it≤ ì
interna∞á prin⌠ processor¼á al∞ oµ thσ interna∞ function≤ oµá thσ ì
printe≥á caε bσ useΣ t∩ ful∞ effect«á  Thi≤ prograφ ma•á als∩á bσ ì
useablσá witΦ somσ othe≥ worΣ processinτ program≤ tha⌠ caε inser⌠ ì
contro∞ characters.

     Iεá WordStar¼á tw∩á type≤ oµ command≤ fo≥á thσá printe≥á arσ ì
placeΣá iε thσ tex⌠ file«á  Contro∞ character≤ turε specia∞ mode≤ ì
ofµ anΣ on╗á do⌠ command≤ primaril• changσ thσ formattinτ f∩á thσ ì
document«á  WSMX80ùá caε bσ useΣ t∩ prin⌠ you≥ file¼á interpretinτ ì
anΣá executinτá thσ contro∞ charactger≤á anΣá do⌠á commands¼á anΣ ì
whereve≥á possible¼á followinτ thσ definition≤ oµá WordStar«á  Iε ì
additioεá t∩ standarΣ do⌠ command≤ anΣ contro∞á characters¼á man• ì
othe≥á usefu∞ function≤ werσ added«á  Becausσ thi≤ printinτá proì
cesso≥ wa≤ speciall• writteε fo≥ you≥ printer¼ i⌠ i≤ well-matcheΣ ìèt∩ it.

     Thσ firs⌠ sectioε oµ thi≤ manua∞ i≤ ß guidσ t∩ thσá preparaì
tioε oµ tex⌠ files¼ explaininτ ho≈ variou≤ command≤ arσ used«  Iε ì
followinτ sections¼ thσ implementation≤ oµ botΦ standarΣ anΣ non-ì
standarΣá do⌠ function≤ wil∞ bσ presented«á  ┴ guidσ t∩á printinτ ì
thσá tex⌠á wil∞á bσ presented¼á anΣá informatioεá fo≥á generatinτ ì
specia∞ font≤ i≤ provided.

     Thi≤á manua∞ i≤ printeΣ directl• froφ WordStarù usinτá WSMX80ù ì
rathe≥ thaε beinτ typeset«  A≤ such¼ i⌠ (1⌐ provide≤ thσ example≤ ì
oµ thσ availablσ functions¼ anΣ (2⌐ allow≤ yo⌡ t∩ prin⌠ ß cop• oµ ì
thσá manua∞á wheneve≥ yo⌡ want«

I«   Contro∞ Characters

     Thσá contro∞ (non-printing⌐ character≤ arσ entereΣ int∩á thσ ì
tex⌠ unde≥ WordStarù b• usinτ thσ contro∞ ╨ (^P⌐ prefix¼á anΣ mos⌠ ì
character≤ arσ useΣ t∩ contro∞ printinτ characteristics«á Man• oµ ì
thesσ character≤ havσ beeε assigneΣ t∩ specia∞ printe≥ functions«  ì
Iεá mos⌠ cases¼á thσ charactersº definition≤ havσ beeε choseεá t∩ ì
correlatσ witΦ thσ WordStarù definitions¼á bu⌠ man• arσá new«á  Iε ì
thi≤á section¼á thσ contro∞ characte≥ definition≤ arσá summarizeΣ ì
anΣ illustrated«  ┴ summar• i≤ provideΣ iε Appendi° II.

.cp 4
1«á   Thσ boldfaceé modeç i≤ controlleΣ b• contro∞ ┬ (^B⌐ t∩ turn≤ ì
oε anΣ ofµ thσ Epsonù "double-passó feature«  It achieve≤ ß singlσ ì
leve∞ oµ highlighting«á  EacΦ characte≥ i≤ printeΣ twicσ oε sepaì
ratσá passe≤á oµá thσ prin⌠ heaΣ witΦ thσ seconΣ pas≤á printeΣá ß ì
fractioεá belo≈á thσ first«á Thi≤ sentencσ i≤ printeΣá usinτá thσ ì
boldfacσ modeä withou⌠ double-strikσ useΣ iε mos⌠ oµ thσ manual.

..CP 3
2«á   Thσá double-strikeé modσ i≤ controlleΣ b• contro∞ ─ (^D⌐á t∩ ì
turεá oεá anΣ ofµ thσ Epsoε doublσ strikσ o≥á "emphasizedóá mode«  ì
Thi≤á documen⌠á i≤ printeΣ usinτ thσ double-strikσá modσá througΦ ì
mos⌠á oµá it«á  Fo≥ comparison¼á thi≤ sentencσá i≤á printeΣá witΦ ì
neithe≥ boldfacσ o≥ double-strike.

.C╨ 3
3«á   Usσá oµ boldfacσ anΣ double-strikσ togetherç give≤  aεá eveε ì
bolde≥ effect╗á thσ densit• oµ thσ dot≤ i≤ grea⌠ enougΦ t∩ givσ ß ì
fully-formeΣ appearance.

.C╨ 2
4«á   Thσá doublσá widσ font i≤ turneΣ oε anΣ ofµ b•á ^Aá anΣá ^N ì
respectively«á  Fo≥á doublσ wideÄ font¼á thσá WordStarùá "alternatσ ìèpitchóá synta° i≤ followed«á  NOTE║á  WordStarù canno⌠ accoun⌠ fo≥ ì
thi≤ changσ iε it≤ interna∞ justificatioε process«  Thσ linσ witΦ ì
thσá doublσ widσ character≤ extend≤ beyonΣ thσ right-hanΣá margiε ì
unles≤ thσ formatinτ i≤ donσ manually.

     Thσá followinτá arσ example≤ oµ doublσ widσ witΦ thσá doublσ ì
densit• printing:
.CP 4
   Doublσ Widσ normal;
   Doublσ Widσ witΦ ^B;
   Doublσ Widσ witΦ ^D;
   Doublσ Widσ witΦ ^┬ anΣ ^D.

.CP 3
5«á   Thσá Italicsé  fontç i≤ turneΣ oε anΣ turneΣ ofµ b• usinτ thσ ì
^Qé anΣ ^Wé pai≥ withiε thσ text«  Italic≤ ma• bσ printeΣ plain¼ iε ì
boldface¼ doublσ strike¼ doublσ wide¼ anΣ compressedù a≤ well.

.C╨ 3
6«á   Thσá compresseΣ font i≤ turneΣ ofµ anΣ oε witΦ thσ ^Y whicΦ ì
i≤ listeΣ iε WordStarù a≤ thσ ribbon-changσ function«  Thσ followì
inτ i≤ aε examplσ oµ thσ print.

Öá     Therσ arσ tw∩ limitation≤ t∩ thσ usσ oµ compresseΣ font«á  Thσ firs⌠ i≤ tha⌠ thσá WordStarùá justificatioε ì
proces≤á canno⌠á takσ thσ narro≈ character≤ int∩ account«á  Thσ seconΣ i≤ tha⌠ thσ doublσ strikσ (^D⌐á functioε ì
mus⌠á no⌠á bσ useΣ sincσ i⌠ wil∞ over-ridσ thσ compresseΣ fon⌠ commanΣ anΣ caε causσ word≤ t∩á over-prin⌠á eacΦ ì
other«  However¼ withiε thσ compresseΣ font¼ italics¼ boldface¼ anΣ doublσ wideÄ ma• stil∞ bσ used.

.cp 3
7«á   Thσá underline commanΣ employ≤ ß pai≥ oµ ^S's«á  WitΦ Grafì
trax¼ ß dasheΣ underlinσ i≤ printeΣ whilσ witΦ Graftra° Plus¼ thσ ì
linσ i≤ solid.ô  Notσ tha⌠ space≤ arσ no⌠ underlined«á  Iµ ß soliΣ ì
linσ i≤ desired¼ eveε unde≥ ß space¼ ente≥ ß contro∞ ╞ (^F¼ noteΣ ì
iεá thσ WordStarù manua∞ a≤ ß phantoφ space⌐ insteaΣ oµá ßá space«  ì
AlthougΦá WordStarùá doe≤ no⌠ sho≈ ß spacσ wheε thσ prin⌠á contro∞ ì
displa• i≤ ofµ (seσ ^O─ iε thσ manual)¼á ß sligh⌠á inconvenience¼ ì
i⌠ wil∞ forma⌠ properly¼ anΣ a≤ follows¼ itwillprintproperly«

..CX 0
.CP 2
8«á   Thσ strikeout commanΣ require≤ ß pai≥ oµ ^X's║  thi≤ phrasσ ì
i≤á strucδ b• usinτ contro∞ X«á  Thσ comment≤ regardinτ contro∞ ╞ ì
in the previous paragraph also apply here.  See also section V.5.

..C╪ 3
.cp 4
9«á  Full-sizeΣ Superscriptsç  arσ produceΣ witΦ ß  pai≥ oµá ^T's«  ì
Wheεá thσá linσ heigh⌠ i≤ to∩ smal∞ t∩ allo≈ script≤á anΣá superì
script≤ withou⌠ overlapping¼ extrß spacσ wil∞ bσ inserteΣ s∩ tha⌠ ì
the• wil∞ fi⌠ in«  Thi≤ documen⌠ i≤ printeΣ witΦ ß linσ heigh⌠ oµ ì
1-1/┤á spaces¼á s∩ extrß spacσ i≤ unnecessary«á  Enterinτá t^T2^╘ ì
print≤ t2╗á A^T*^╘ yield≤ A*«á  Thσ defaul⌠ subscript/superscrip⌠ ìèrol∞á i≤á 5/1▓ oµ thσ standarΣ linσ heigh⌠ bu⌠ caε bσ changeΣá b• ì
usinτ .S╥ command≤ (Sec«á III.2.)«á  BotΦ member≤ oµ thσ pai≥á oµ ì
^T'≤ mus⌠ bσ oε thσ samσ tex⌠ line.

.c≡ 3
10«á  Full-sizeΣá Subscriptsç  requirσ ß pai≥ oµ ^V's«á  ┴á t^V2^╓ ì
print≤á t2«á  Thσ sizσ oµ thσ rol∞ anΣ thσ spacσ alloweΣ arσá thσ ì
samσ a≤ fo≥ ^T«á  BotΦ member≤ oµ thσ pai≥ oµ ^V'≤ mus⌠ bσ oε thσ ì
samσ tex⌠ line.

.cp 3
11«á  Thσá half-sizeΣá superscriptç  i≤ switcheΣ oε anΣá ofµá witΦ ì
^P's«á  I⌠ caε onl• bσ useΣ witΦ printer≤ equippeΣ witΦ thσ Grafì
tra°á Plusùá option«á  Thσá ful∞ characte≥ se⌠ caε bσá printeΣá a⌠ ì
reduceΣ heigh⌠ a⌠ thσ to≡ oµ thσ prin⌠ line╗á n∩ carriagσ rol∞ i≤ ì
required║á  letters¼á abcdefg¼á numbers¼ 12345¼ anΣ othe≥ characì
ters¼á !"#$%&«  Italics¼ ABC¼ anΣ narro≈ width¼ GHIJK caε bσ useΣ ì
iε conjuctioε witΦ thi≤ mode«á  However¼ widσ characte≥ widtΦ anΣ ì
contro∞ ─ emphasi≤ canno⌠ bσ used«á  BotΦ member≤ oµ thσ pai≥á oµ ì
^P'≤ mus⌠ bσ oε thσ samσ tex⌠ line.

.c≡ 4
12«á  Thσ half-sizeΣ subscript i≤ switcheΣ oε anΣ ofµ witΦá ^E's«  ì
I⌠á place≤á reduceΣ heigh⌠ character≤ a⌠ thσ bottoφ oµ thσá prin⌠ ì
line¼ anΣ i≤ otherwisσ simila≥ t∩ thσ superscripts«  Fo≥ example¼ ì
thσ followinτ subscript≤ arσ printeΣ witΦ thi≤ option║  AabcBABC¼ ì
anΣ C123«á  BotΦ member≤ oµ thσ pai≥ oµ ^E'≤ mus⌠ bσ oε thσá samσ ì
tex⌠ line.

.C╨ 4
13«á   Thσ backspace commandç i≤ ^H«á  Specia∞  character≤ caεá bσ ì
printeΣ b• usinτ thσ backspacσ t∩ overprint«  Fo≥ example¼ witΦ ß ì
0^H/¼á thσá characte≥ 0» i≤ printed«á  Othe≥ example≤ arσ showε iε ì
Sectioε VI«á  Iε mos⌠ MX-80-compatiblσ printers¼ thσ printe≥ wil∞ ì
no⌠á backspacσá ove≥á character≤ produceΣá usinτá graphic≤á (^R)¼ ì
subscrip⌠ (^P⌐ o≥ superscrip⌠ (^E⌐ commands.

.C╨ 4
14«á  Thσá Alternatσ Characte≥ Setç  i≤ invokeΣ t∩ substitutσ chaì
racter≤ froφ ß user-defineΣ characte≥ set«á Iε WSMX80¼ character≤ ì
founΣ withiε ß pai≥ oµ ^R'≤ arσ substituteΣ usinτ ß separatσ filσ ì
oµá characte≥ definition≤ whicΦ caε bσ defineΣ b• thσá user«á Thσ ì
choseεá characte≥ se⌠ mus⌠ firs⌠ bσ loadeΣ froφ ß disδ filσá witΦ ì
thσá ..A├á command«á  Thσ commanΣ i≤ describeΣ iε detai∞á iεá thσ ì
sectioε unde≥ non-standarΣ do⌠ commands¼ ..A├ (Sec« V.6.).

.cp 4
è15«á  Thσá Tablσ oµ Contents commanΣ utilize≤ ß contro∞ ╟ (^G⌐ t∩ ì
indicatσ entrie≤ int∩ ß filσ fo≥ ß tablσ oµ contents«  Everythinτ ì
t∩ thσ lef⌠ i≤ writteε t∩ thi≤ file«á  Detail≤ oµ settinτ u≡ thi≤ ì
command are provided in section III.8.

.cp 3
16«á  Thσá Index commanΣ i≤ useΣ t∩ ente≥ word≤ int∩á ßá separatσ ì
filσá fo≥ aε index«á  Word≤ o≥ phrase≤ surroundeΣ b• ß contro∞á ╦ ì
(^K) are entered into a file set up as described in III.9.

.C╨ 4
17«á  Certaiεá othe≥ contro∞ character≤ arσ useΣ fo≥ non-printinτ ì
functions«  Contro∞ ╧ (^O⌐ i≤ handleΣ exactl• a≤ describeΣ iε thσ ì
WordStarùá manual«á  Thσ ^P^═ (o≥ ^╨ RETURN⌐ defineΣá iεá WordStarù ì
cannotô bσ useΣ unde≥ the CP/M version of WSMX80« 

.C╨ 7
II«  StandarΣ Do⌠ Commands

     Thσá followinτá do⌠ command≤ arσ executeΣ exactl•á a≤á docuì
menteΣ iε thσ WordStarù manual:
     .P╧     .I╟     .C╨     .FO     .F═     .H┼     .H═
     .MB     .M╘     .P┴     .O╨     .PN     .PC     .DM

.C╨ 4
III« Do⌠ Command≤ witΦ Specia∞ Meanings.

     Severa∞áá havσáá ßáá slightl•áá differen⌠áá connotatioεáá o≥ ì
restriction.

.C╨ 3
1«á   Thσá .L╚ n (Linσ Height⌐ commanΣ i≤ largel• unchangeΣ wherσ ì
..sl 6
thσ paramete≥ ε i≤ linσ heigh⌠ iε 48th≤ oµ aε inch«á  Becausσ thσ ì
..lh 10
MXùá printer≤ operatσ iε step≤ oµ 1/216û oµ aε inch¼á thσá interna∞ ì
..lh 14
conversioε require≤ that¼á fo≥ aε accuratσ translation¼á ε shoulΣ ì
..lh 18
bσá even«á  Fo≥ examplσ n=╕ mean≤ 8/48ó ╜á 36/216"«á  However¼á ß ì
..lh 22
changσá t∩ n=╣ woulΣ meaε 9/48ó ╜ 81/432ó whicΦ i≤ roundeΣ ofµ t∩ ì
40/216"╗ thσ erro≥ wil∞ seldoφ bσ observable.
..rl

     Thσá defaul⌠á linσá heigh⌠ remain≤ eight«á Iεá thσá previou≤ ì
paragraph, the line height was varied from 6 to 22 in steps of 4.

     Thσá Epsoεá printe≥á i≤ capablσ oµá vertica∞á resolutioεá oµ ì
1/216"«á  If¼á iεá thσ linσ heigh⌠ command¼á ß pounΣ sigε (#⌐á i≤ ì
appendeΣ t∩ thσ specification¼á thσ linσ heigh⌠ wil∞ bσ specifieΣ ì
iεá 1/216"«á  Fo≥á example¼á iµá yo⌡ wan⌠á consecutivσá line≤á oµ ì
character≤ t∩ toucΦ eacΦ othe≥ witΦ n∩ spacσ between¼ specif• 21ú ì
(..L╚ 21#⌐ a≤ thσ linσ heigh⌠ parameter.
è
.C╨ 3
2«   Thσ .S╥ n (Subscript/superscrip⌠ Roll⌐ commanΣ use≤ thσ samσ ì
dimension≤ a≤ thσ linσ height╗á therefore¼á i⌠ mus⌠ als∩ bσá eveε ì
fo≥á highes⌠á accuracy«á  Thσá defaul⌠á valuσ oµá n=│á  i≤á 3/48ó ì
(.0625"⌐á iε WordStarù whicΦ i≤ approximateΣ a≤ 13/216óá (.0602")╗ ì
thσ differencσ caε generall• bσ ignored.
 
.C╨ 3
3«   Thσ .P╠ n (Pape≥ Length⌐ commanΣ set≤ thσ pagσ lengtΦ t∩ n/╢ ì
inche≤ witΦ ß defaul⌠ oµ 6╢ line≤ a⌠ 1/6"«á  Thσ position≤ oµ thσ ì
pagσ break≤ ma• diffe≥ slightl• froφ thosσ showε iε thσá WordStarù ì
editor¼á sincσ thσ subscripts¼á superscripts¼ anΣ changesô iε linσ ì
heigh⌠ arσ bσ takeε int∩ accoun⌠ iε WSMX80ù bu⌠ no⌠ iε WordStar« 

.cp 3
4«á   Thσá .F╔ filename (Filσ Insert⌐ commanΣ allow≤ anothe≥ filσ ì
t∩á bσ printeΣ froφ withiε thσ filσ containinτ thσá .F╔á command«  ì
Thi≤ commanΣ emulate≤ ß MailMergσ command«á  Additiona∞ file≤ caε ì
bσ inserteΣ iε thσ inserteΣ file≤ u≡ t∩ si° level≤ deep.

.C╨ 5
IV«  WordStarù Do⌠ Command≤ whicΦ arσ Ignored.

     Thσá followinτá do⌠á command≤ werσ createΣ fo≥á dais•á whee∞ ì
printer≤ anΣ havσ n∩ meaninτ fo≥ WSMX80:
     .B╨     .U╩     .CW

.C╨ 5
V«   Do⌠ Command≤ Uniquσ t∩ WSMX80.

     Thσá followinτ do⌠ command≤ werσ createΣ t∩ realizσá certaiε ì
function≤á whicΦ werσ considereΣ usefu∞ bu⌠ werσ no⌠ includeΣá iε ì
WordStar«á  Iε orde≥ t∩ avoiΣ confusinτ WordStarù durinτ thσá edi⌠ ì
process¼ the• shoulΣ bσ precedeΣ b• ß doublσ do⌠ (..⌐ whicΦ make≤ ì
WordStarù conside≥ theφ comments.

.cp 4
1«á   Thσ Empt• Pagσ (..E╨ [string]) commanΣ i≤ ß wa• oµ creatinτ ì
aεá empt•á pagσ withiε ß documen⌠ iε whicΦ figure≤ caεá late≥á bσ ì
added«á  I⌠á differ≤ froφ thσ possiblσ usσ oµ thσ .P┴ commanΣá iε ì
tha⌠á thσ empt• pagσ wil∞ no⌠ bσ addeΣ unti∞ thσ nex⌠ pagσá breaδ ì
i≤ reached«  Thσ empt• pagσ i≤ no⌠ actuall• printeΣ unles≤ direcì
teΣ b• thσ ..P┼ commanΣ (below)«  Wheε thσ empt• pagσ isô printed¼ ì
thσá heading¼á thσá footing¼á anΣ thσ strinτ arσ printeΣá oεá it¼ ì
makinτ ß convenien⌠ methoΣ oµ enterinτ figurσ titles«  U≡ t∩ fou≥ ì
E╨ dot command≤ ma• bσ placeΣ iε an• singlσ pagσ oµ printeΣ text.

.CP 3
è2«á   Thσ Prin⌠ Empt• pagσ (..P┼ n⌐ commanΣ will¼á iµ n=1¼á allo≈ ì
thσá blanδ page≤ t∩ bσ printeΣ a≤ requesteΣ b•á ..EP╗á thσá empt• ì
pagσá wil∞á havσ thσ samσ headinτ anΣ footinτ a≤ thσ res⌠ oµá thσ ì
documen⌠ anΣ wil∞ als∩ bσ printeΣ witΦ thσ ..E╨á string«á Artworδ ì
coulΣá easil•á bσá pasteΣ u≡ oε thesσ blanδ page≤á anΣá woulΣá bσ ì
includeΣ iε thσ numbering.

     Iµá n=2¼á thσá caption≤ entereΣ b• thσ ..E╨ string≤ wil∞á bσ ì
printeΣá iε thσ bottoφ margiε betweeε thσ footinτ anΣ thσá bottoφ ì
oµ thσ pagσ iµ therσ i≤ space«á  

     Iµ n=0¼á thσ ..E╨ command≤ arσ ignored«  Thi≤ i≤ thσ defaul⌠ ì
value.

.C╨ 4
3«   Thσ Savσ Linσ heigh⌠ (..S╠ n⌐ anΣ Restorσ Linσ heigh⌠ (..RL⌐ ì
command≤á temporaril•á storσ thσ curren⌠ linσ heigh⌠ anΣ se⌠á thσ ì
linσ heigh⌠ t∩ ß ne≈ valuσ oµ n╗ thσ olΣ valuσ caε bσ restoreΣ b• ì
thσ R╠  command«á  Thσ SL/R╠ combinatioε i≤ quitσ usefu∞ wheεá aε ì
equatioεá o≥ tablσ i≤ includeΣ iε ß text╗á thσ equatioε o≥á tablσ ì
ma•á requirσ ß differen⌠ linσ heigh⌠ thaε thσ maiε text¼á anΣ thσ ì
S╠á anΣ R╠ command≤ allo≈ thσ linσ heigh⌠ t∩ bσ changeΣ fo≥á tha⌠ ì
sectioε onl• withou⌠ affectinτ thσ remainde≥ oµ thσ document.

     A≤ witΦ thσ linσ heigh⌠ commanΣ (.LH)¼ thσ S╠ commanΣ caε bσ ì
specified in units of 1/216" by appending a pound sign (#).

.C╨ 2
4«á   Thσá Changσ X characte≥ (..C╪ n⌐ commanΣ i≤ useΣ t∩á changσ ì
thσá characte≥á useΣ t∩ prin⌠ ove≥ thσ tex⌠ witΦ thσ ^╪á command«  ì
Thσ valuσ oµ ε ma• bσ 0¼á 1¼ 2¼ o≥ 3«  Thσ line≤ belo≈ illustratσ ì
thσ effect:
..C╪ 0
     n=░  Thi≤ i≤ standarΣ strikeout.
..C╪ 1
     n=1  Strikeou⌠á witΦá ßá horizonta∞á line¼áá useΣá iεá lega∞ ì
áááááááááádocuments to show revisions.
..C╪ 2
     n=▓  Doublσ underline.
..C╪ 3
     n=│  Wav• underline.

     Sincσá thσ ^┬ anΣ ^─ type≤ oµ emphasi≤ d∩ no⌠ alway≤á reproì
ducσ wel∞ oε olΣ photocopiers¼ thσ type≤ oµ emphasi≤ specifieΣ b• ì
option≤ ▓ anΣ │ arσ usually preferreΣ o≥ requesteΣ b• editors.

.C╨ 2
5«á   Thσ Alternatσ Characte≥ se⌠ (..A├ filename⌐ commanΣ i≤ useΣ ì
t∩ loaΣ aε alternatσ characte≥ se⌠ froφ ß filσ specifieΣ b• fileì
name«  Tha⌠ filσ contain≤ thσ specification≤ fo≥ 9╢ ASCI╔ characì
ter≤ iε ß do⌠ matri° oµ ╕ dot≤ higΦ b• u≡ t∩ 1▒ dot≤ wide«  
è
     Wheε ß contro∞ ╥ (^R⌐ i≤ encountereΣ iε thσ text¼á thσ charì
acter≤ whicΦ follo≈ arσ converteΣ t∩ thei≥ ASCI╔ equivalent≤ froφ ì
thσ characte≥ se⌠ filσ unti∞ anothe≥ ^╥ i≤ encountered«á  

     Therσ arσ tw∩ limitation≤ iε thσ usσ oµ thσ ^R«  First¼ botΦ ì
thσá leadinτá ^R anΣ thσ trailinτ ^R mus⌠ bσ oεá thσá samσá line«  ì
Second¼á n∩á othe≥á contro∞ function≤ shoulΣ bσ placeΣ withiεá aε ì
alternatσ characte≥ string«  Failurσ t∩ observσ thosσ limitation≤ ì
wil∞ leaΣ t∩ unpredictablσ results.

     Severa∞ alternatσ characte≥ se⌠ file≤ tha⌠ arσ provideΣá arσ ì
showε iε thσ Appendices«  GREEK.CHRù i≤ compatiblσ witΦ thσ alterì
natσá characte≥á se⌠ oµ thσ IB═ ink-je⌠ printer«á  GREEKD.CHRùá i≤ ì
compatiblσá witΦ thσ matΦ printwhee∞ oµ thσ Diabl∩ 63░á EC╙á (Exì
tendeΣá Characte≥ Set⌐ printer«á  DBL.CHRù print≤ character≤ whicΦ ì
arσ u≡ t∩ 1╕ dot≤ higΦ insteaΣ oµ thσ norma∞ nine«  WSMX80ù caε bσ ì
useΣá t∩á prin⌠ thσ content≤ oµ thσ sourcσ file≤ whicΦá havσá thσ ì
.TXTù extensions«  

     Thσ mean≤ oµ printinτ tw∩ over-sizσ character≤ wa≤á includeΣ ì
iεá GREEK.CHR║á  ß double-higΦ ?Æ anΣ ß double-higΦ S«á  Thesσ arσ ì
produceΣá b•á settinτ thσ linσ heigh⌠ t∩ 21/21╢ inche≤á witΦá thσ ì
"..sl 21#" command and printing two lines:
..sl 21# 

     ^R{^R                    {
     ^R|^R abc      prints    | abc   
     ^R}^R                    }
     

     ^R(^R                    (
     ^R)^R^Tabc^T   prints    )abc


..rl

     ThrougΦ thσ imaginativσ usσ oµ subscripts¼ superscripts¼ anΣ ì
backspaces, it should be possible to print most equations.

6«á   Thσ ReDefinσ contro∞ character≤ (..R─ a=b⌐ commanΣ allow≤ ß ì
use≥á t∩ changσ contro∞ characte≥ definitions«á  Afte≥á thi≤á do⌠ ì
commanΣá i≤á executed¼á an• timσ tha⌠ thσ contro∞ characte≥ aá i≤ ì
encountereΣ i⌠ wil∞ bσ executeΣ a≤ ß b«  Fo≥ examplσ iµ R─ X=D i≤ ì
entered¼ an• timσ ß contro∞ ╪ i≤ encountered¼ i⌠ wil∞ bσ executeΣ ì
a≤ ß contro∞ D.
è
.cp 3
7«á   Thσ Tablσ oµ Content≤ (..T├ filename⌐ commanΣ i≤ ß mean≤ oµ ì
generatinτá ß paginateΣ tablσ oµ contents«á  Thσ filenamσ fo≥ thσ ì
tablσá oµá content≤ i≤ se⌠ witΦ thi≤á do⌠á command«á  Thereafter¼ ì
wheneve≥ ß contro∞ ╟ i≤ encountereΣ iε thσ file¼á thσ tex⌠ t∩ thσ ì
lef⌠ oε tha⌠ linσ wil∞ bσ includeΣ iε thσ Tablσ oµ Content≤á filσ ì
witΦá thσ pagσ number«á  Thi≤ commanΣ caε bσ oµ grea⌠ hel≡ wheε ß ì
documen⌠á undergoe≤á regula≥ changσ whicΦ change≤á pagσá numbers«  ì
Somσá editinτá oµ thσ destinatioε filσ wil∞ usuall•á bσá requireΣ ì
beforσ i⌠ i≤ useΣ a≤ ß fina∞ tablσ oµ contents.

.cp 3
8«á   Thσ INdeX (..N╪ filename⌐ commanΣ set≤ u≡ ß filσ int∩ whicΦ ì
al∞ markeΣ word≤ arσ entereΣ (seσ sectioε I.16)«á  Afte≥ alphabeì
tizinτá anΣ editing¼á thσ inde° wil∞ bσ completσ withou⌠ thσ neeΣ ì
fo≥ searchinτ fo≥ keywords.

9«á   Thσá Selec⌠ Fon⌠ (..S╞ n⌐ commanΣ ç i≤ useΣ t∩á changσá thσ ì
font«á  Al∞ MX-80-compatiblσ printer≤ havσ ß norma∞ 10-pitcΦ fon⌠ ì
tha⌠ i≤ useΣ t∩ prin⌠ thi≤ manual╗ t∩ selec⌠ thσ 10-pitcΦ o≥ picaù ì
font, use SF 0«á  

..sf 1
     Late≥á printer≤ havσ somσ additiona∞ fonts«á  Thσ RX-8░ add≤ ì
aεá elitσ o≥ 12-pitcΦ fon⌠ tha⌠ i≤ useΣ t∩ prin⌠ thi≤á paragraph«  ì
Iµ you≥ printe≥ i≤ no⌠ aε RX-8░ o≥ FX-8░ o≥ aεá upward-compatiblσ ì
printer¼ thi≤ paragrapΦ wil∞ bσ printeΣ iε 10-pitch«  T∩ usσ thi≤ ì
font¼á yo⌡ mus⌠ havσ aε RX- o≥ FX-serie≤ printe≥ andô tha⌠ printe≥ ì
must be selected in the menu of WSMX80.  For 12-pitch, use SF 1.

..sf 2
     Thσ FX-serie≤ printer≤ als∩ havσ ß proportiona∞ fon⌠ iε ì
whicΦ eacΦ characte≥ i≤ allotteΣ onl• thσ spacσ necessar• t∩ ì
prin⌠ tha⌠ character«  Thi≤ paragrapΦ i≤ printeΣ iε thσ ì
proportiona∞ font«  T∩ usσ thi≤ font¼ yo⌡ mus⌠ havσ aε FX-serie≤ ì
o≥ compatiblσ printe≥ andô FX-8░ mus⌠ bσ selecteΣ iε thσ menu«  ì
Fo≥ proportiona∞ print¼ usσ S╞ 2.

..sf 0
     Stil∞á othe≥ font≤ caε bσ useΣ witΦ combination≤ oµ thσá ^Y¼ ì
^A¼á ^P¼ and/o≥ ^┼ fonts«  Thi≤ examplσ show≤ tha⌠ yo⌡ caε reall• ì
pacδ tex⌠ witΦ ß linσ heigh⌠ oµ ┤ anΣ thσ ^┘ anΣ ^┼ commands:

..lh 4
     WSMX80ùá i≤ ß prograφ tha⌠ i≤ useΣ t∩ greatl• enhancσ you≥ acces≤ t∩ thσ capabilitie≤ oµ you≥ Epsoεá printe≥ ì
wheεá yo⌡ writσ document≤ witΦ WordStar«á  I⌠ i≤ designeΣ fo≥ usσ witΦ thσ MX-series¼á RX-series¼á anΣ FX-serie≤ ì
Epsoεá printers«á  I⌠á mayô operatσ witΦ othe≥ printer≤ tha⌠ arσ "Epson-compatibleó dependinτ oεá thσá degreσá oµ ì
compatibilit• (seσ Sectioε IX.)

è     Wheε yo⌡ preparσ ß tex⌠ filσ usinτ WordStarù withou⌠ thi≤ software¼á yo⌡ usσ thσ Pù o≥ Mù command≤ t∩ prin⌠ i⌠ ì
withinôá WordStar«á  T∩ enablσ specia∞ enhancement≤ iε thσ printing¼á yo⌡ caε patcΦ WordStarù t∩ ß limiteΣ extent¼ ì
bu⌠ yo⌡ canno⌠ achievσ al∞ oµ thσ specia∞ printinτ style≤ oµ whicΦ you≥ Epsoε i≤ capable.

     B•á separatinτ thσ printinτ functioε froφ WordStarù anΣ it≤ interna∞ prin⌠ processor¼á al∞ oµá thσá interna∞ ì
function≤á oµá thσ printe≥ caε bσ useΣ t∩ ful∞ effect«á  Thi≤ prograφ ma• als∩ bσ useablσ witΦ somσá othe≥á worΣ ì
processinτ program≤ tha⌠ caε inser⌠ contro∞ characters.

     Iεá WordStar¼á tw∩ type≤ oµ command≤ fo≥ thσ printe≥ arσ placeΣ iε thσ tex⌠ file«á  Contro∞ character≤ turε ì
specia∞ mode≤ ofµ anΣ on╗á do⌠ command≤ primaril• changσ thσ formattinτ f∩ thσ document«á  WSMX80ù caε bσ useΣ t∩ ì
prin⌠á you≥ file¼á interpretinτ anΣ executinτ thσ contro∞ charactger≤ anΣ do⌠ commands¼á anΣ whereve≥á possible¼ ì
followinτ thσ definition≤ oµ WordStar«á  Iε additioε t∩ standarΣ do⌠ command≤ anΣ contro∞ characters¼ man• othe≥ ì
usefu∞á function≤ werσ added«á  Becausσ thi≤ printinτ processo≥ wa≤ speciall• writteε fo≥ you≥á printer¼á i⌠á i≤ ì
well-matcheΣ t∩ it.
..rl

╔á havσ ß harΣ timσ readinτ that¼á bu⌠ witΦ ßá magnifier¼á i⌠á i≤ ì
shar≡ anΣ readable.

.CP 4
VI.  Some Examples

     Thσá example≤á iεá thi≤á sectioε ma• providσá somσá hel≡á iε ì
attempt≤á t∩ producσ specia∞ equations«á  AlthougΦ some sequence≤ ì
ma•á appea≥á cumbersomσ a⌠ first¼á workinτ througΦá thσá example≤ ì
character by character might alleviate initial apprehensions.

.CP 5
   Z^H-               prints   Z-    7^H-              prints   7-
   --^H╛á             print≤á  --╛á  AB^H^H^T^R--^R^╘á print≤   AB--
   |^H▐á              print≤   |▐    ^T>^T^H╜          print≤   >╜
 ^T1^T^H^R-^R^H^V2^╓  print≤   1-2û    0^H/              prints   0/
.cp 3
^R*****************************************************************^R
prints
*****************************************************************

     Thσá alternatσá characte≥ se⌠ i≤ usefu∞ iε othe≥á way≤á thaε ì
just providing Greek characters.
     <^H^R---^R   prints    <---   ^R!^R6^H^R&^R     prints !6&

     Iεá orde≥ t∩ prin⌠ thσ equatioε below¼á thσ linσ heigh⌠á wa≤ ì
temporaril• changeΣ witΦ ß ..S╠ ╕ command¼á anΣ afterwarΣ ßá ..R╠ ì
restored the original line height.
..SL 8

.CP 7
è                     ^Ve^V-2^Ra^Rt
            ╥ ╜áá ^R----------- ÷^R t^R3^R/^Rt^R
                   (2^R[^R^Qsin^W^Rr^R)^T^R2^R^T
prints:
                     e-2at
            R =   ----------- v t3/t
                   (2[sinr)2
.rl


.CP 6
                        ^R{B^R
                    ═ ╜ ^R|^Rá ß d^Rd^R
                        ^R}^R
                        ^Pt=0^P
with the line height of 21#, prints:
..sl 21#
.cp 7

                        {B
                    M = |  a dd
                        }
                        t=0
..RL

.CP 5
VII. Implementatioε oµ WSMX80

1«á  Executablσá Versions.çá  WSMX80ù i≤ distributeΣ a≤á ßá singlσ ì
executablσá file¼á WSMX.COMù fo≥ CP/Mù anΣ WSMX.EXEù fo≥ MS-DOS¼á Z-ì
DOS¼ o≥ PC-DOS╗ thσ latte≥ threσ arσ version≤ fo≥ generiπ MS-DOS¼ ì
ZenitΦ Z-10░ anΣ IBM-PC¼á respectively«á  Thσ alternatσ characte≥ ì
se⌠á packagσ include≤ GREEK.CHR¼á GREEKD.CHR¼á anΣá DBL.CHR¼á anΣ ì
thei≥ sourcσ files¼á GREEK.TXT¼á GREEKD.TXT¼ DBL.TXT╗ ß characte≥ ì
se⌠ compiler¼á CHRCOM.COM¼á i≤ useΣ t∩ modif• existinτá alternatσ ì
characte≥á set≤ o≥ t∩ creatσ ne≈ ones«á  Aε installatioε program¼ ì
WPATCH.COM¼á i≤ useΣ t∩ se⌠ defaul⌠ parameters«á  Thi≤ documentaì
tioεá iε machine-readablσ form¼á WSMXDOC.TXTù servinτ a≤ ßá demonì
stratioε file¼ i≤ included.

.C╨ 3
2«á   Executioεá Procedure.çá  WSMX80ù i≤ executeΣá a≤á ßá prograφ ì
separatσá froφ WordStar«á  Thσ CP/Mù versioε ma• bσ activateΣ froφ ì
withiεá WordStarù witΦ thσ "Ró command╗á thσ latte≥ i≤ ofteεá morσ ì
convenient╗ thσ "Ró commanΣ canno⌠ bσ useΣ iε MS-DO╙ versions.

     WSMX80ùá caεá bσ executeΣ witΦ o≥ withou⌠ commanΣ linσá paraì
mete≥ entry«á  Iε thσ followinτ discussion¼ tex⌠ generateΣ b• thσ ì
compute≥ i≤ printeΣ iε italics¼á anΣ thσ use≥ response≤ arσ prinì
teΣá iε boldface«á  T∩ executσ WSMX80ù withoutô thσá commanΣá line¼ ì
simpl•á ente≥ thσ namσ oµ thi≤ program¼á anΣ i⌠ wil∞ responΣ witΦ ìèthσ heading similar to the following:

.cp 5
                             WSMX80
        PRINT PROCESSOR -- WordStar to Epson MX-Printers
                   Version 3.21; November, 1982 


CP/═ Version.é  Thσ upgradσ froφ thσ Graftraxù optioε t∩ thσá Grafì
tra°á Plusù optioε i≤ ß significan⌠ improvemen⌠ iε thσá efficienc• ì
oµ thσ prin⌠ operation╗ thσ prin⌠ heaΣ seek≤ thσ correc⌠ positioε ì
mucΦ morσ rapidly«á  Furthermore¼ severa∞ function≤ arσ availablσ ì
onl•á witΦá Graftra° Plus«á  Unfortunately¼á thσ ne≈ i≤ notôá comì
pletel• upwarΣ compatiblσ witΦ thσ old╗á (iε fac⌠ Graftraxù i≤ no⌠ ì
completel•á upwarΣá compatiblσ witΦ thσ plaiεá printer¼á anΣá thσ ì
Graftra°á Plusùá contain≤ wha⌠ mus⌠ bσ bug≤ tha⌠ arσá filtereΣá b• ì
thi≤ program)«  Somσ command≤ iε thσ olΣ versioε werσ lef⌠ ou⌠ oµ ì
thσá new¼á anΣ somσ ne≈ functions¼á particularl•á subscript≤á anΣ ì
superscripts¼á werσ added«á  Therefore¼á thσ prograφ mus⌠ bσ tolΣ ì
whicΦá versioε i⌠ i≤ speakinτ to«á  Consequently¼á thσá followinτ ì
promp⌠ i≤ added:

     Enter 0 for Graftrax or 1 for Graftrax+:  1

Thσá informatioεá iε thi≤ promp⌠ caε bσ permanentl• installeΣá b• ì
thσ procedurσ describeΣ later.

     Thσá dialoτ tha⌠ follow≤ request≤ thσ namσ oµ thσá filσá anΣ ì
severa∞ operatinτ parameters:

.cp 4
     Enter the file name ([x:]name.ext):  afile.doc

     Thσá filσ namσ ma• bσ entereΣ iε eithe≥ uppe≥ o≥ lowe≥ case«  ì
Iµ thσ extensioε i≤ omitted¼á i⌠ wil∞ defaul⌠ t∩ ".TXT"«á  Iµ thσ ì
filσá t∩ bσ printeΣ ha≤ n∩ extension¼á thσ do⌠ mus⌠á bσá entered╗ ì
i.e.¼á AFILEéá wil∞ cal∞ thσ filσ AFILE.TXTù whilσ AFILE.é wil∞ cal∞ ì
thσ filσ AFILEù withou⌠ extension«á  Aε invaliΣ filσ namσá return≤ ì
thσ prograφ t∩ thi≤ quer• afte≥ aε erro≥ message.

.cp 4
     Direct output to the Printer (P) or a disk File (F):  P

     Iµá thσ Printer» disδ Filσ quer• i≤ defaulteΣ witΦ simpl•á ß ì
carriagσá return¼á thσ printe≥ i≤ thσ defaul⌠ device¼á anΣ ß Pù i≤ ì
printed«á  Iµ thσ disδ Filσ optioε i≤ selected¼á thσ filσ namσ i≤ ì
requested╗á iµ thσ filσ namσ i≤ entereΣ withou⌠ aεá extension¼á ß ìèdefaul⌠ ".PRNó i≤ added«á  Thσ resultan⌠ filσ caε theε bσ printeΣ ì
directl• eithe≥ b• PI╨ o≥ witΦ ß spooler« 

.cp 4
     Wait (W) or Continue (C) at the end of each page:  C

     Thσá defaul⌠ responsσ i≤ t∩ Continue«á  Thσ Wai⌠ featurσá i≤ ì
usefu∞á iµá singlσá sheet≤ arσ t∩ bσ feΣ int∩á ßá MX-8░á FT¼á thσ ì
frictioεá feeΣá model«á  Iµ thσ Wai⌠ featurσá i≤á activated¼á thσ ì
paper-out sensor in the printer is disabled.

.cp 5
     First page printed (CR=Beginning):  3
     Final page printed (CR=End):        4

     Iµá thσ entirσ documen⌠ i≤ t∩ bσ printed¼á carriagσá return≤ ì
arσá entered«á  Wheε printinτ doe≤ no⌠ begiε a⌠ thσ beginninτá oµ ì
thσ file¼ thσ prograφ interpret≤ thσ tex⌠ exactl• a≤ iµ i⌠ wa≤ t∩ ì
bσ printeΣ unti∞ thσ beginninτ pagσ i≤ reached¼ anΣ onσ mus⌠ wai⌠ ì
until that processing is complete.ì

.CP 4
     Is the source file non-document (N) or document (D)? D

     Thσá defaul⌠ responsσ i≤ thσ Documen⌠ mode¼á bu⌠ iµ thσ Non-ì
documen⌠á modσ i≤ selecteΣ (usuall• fo≥ ß prograφá listing)¼á thσ ì
prin⌠á fon⌠á wil∞ defaul⌠ t∩ compresseΣ fon⌠ withou⌠á ßá lefthanΣ ì
margiεá anΣ thσ prograφ wil∞ asδ thσ use≥ fo≥ ß characte≥á strinτ ì
t∩á bσ includeΣ iε thσ heading«á  Typicall• tha⌠ strinτ wil∞ conì
taiε ß title¼ thσ datσ and/o≥ thσ time«  Therefore¼ thσ tex⌠ neeΣ ì
havσá n∩á do⌠á command≤ althougΦ an• tha⌠ arσá includeΣá wil∞á bσ ì
executed«  Thσ followinτ quer• i≤ made:

.CP 3
     Enter desired heading:  Date, time, message, etc.

     Thσ entirσ headinτ i≤ composeΣ oµ thσ namσ oµ thσ filσ beinτ ì
printeΣ oε thσ lef⌠ side¼á thσ pagσ numbe≥ oε thσ right¼á anΣ thσ ì
strinτ entereΣ iε responsσ t∩ thσ quer• centered.

     ┴ carriagσ returε iε responsσ t∩ thσ las⌠ quer• will¼ iε thσ ì
MS-DOSùá version¼á ente≥á thσá curren⌠á timσá anΣá datσá froφá thσ ì
operatinτ system.

.cp 5
è     Number of copies:  3

     ┴ numbe≥ betweeε ▒ anΣ ╣ ma• bσ entereΣ anΣ thσ tex⌠ wil∞ bσ ì
printeΣá tha⌠á numbe≥ oµ times«á  ┴ carriagσ returε wil∞ ente≥á ß ì
default value of one.

.cp 5
     Print an additional file at conclusion of AFILE (Y/N)?  N

     Iµá thσá repl• i≤ Y¼á thσ use≥ wil∞ bσ prompteΣ fo≥á anothe≥ ì
filσ t∩ bσ printeΣ a⌠ thσ enΣ oµ thσ first«  Thσ defaul⌠ responsσ ì
i≤ ╬ iµ ß carriagσ returε i≤ entered.

.cp 5
     I⌠á i≤ possiblσ t∩ edi⌠ response≤ b• movinτ backward≤ iε thσ ì
quer• sequence«á  Strikinτ ß backslasΦ (\⌐ iε responsσ t∩ ß quer• ì
wil∞ displa• thσ previou≤ query« 

     If¼á iε responsσ t∩ an• query¼á ß slasΦ (/⌐ i≤ entered¼á thσ ì
remainde≥ oµ thσ querie≤ wil∞ bσ skipped¼ anΣ thσ parameter≤ wil∞ ì
bσá se⌠á t∩ defaul⌠ value≤ unles≤ the• werσá alread•á se⌠á beforσ ì
backing up with backslashes.

.cp 3
PC-DO╙áá anΣá Z-DO╙á Versions.éá  Iεá thesσá versions¼áá thσá samσ ì
informatioε caε bσ entered¼á bu⌠ ß men⌡ i≤ presenteΣ whicΦ allow≤ ì
the user to change only those parameters that need be changed.

.C╨ 5
3«á  CommanΣá linσ execution.ç   Mos⌠ oµ thσ option≤ caε bσá conì
trolleΣ directl• froφ thσ commanΣ linσ whicΦ i≤ faste≥ anΣá faciì
litate≤ thσ usσ oµ SUBMI╘ files«  Thi≤ commanΣ take≤ thσ form

     A>WSMX filename[.ext▌ [/switch1/switch2/switch3...]

Thσá filenamσ include≤ thσ drivσ namσ iµ thσ defaul⌠ drivσ i≤ no⌠ ì
used«á  Thσá extension¼á iµ omitted¼á default≤ t∩á .TXT«á  Iµá aε ì
invaliΣ filσ namσ i≤ entered¼á thσ dialoτ iε sectioε 2¼ above¼ i≤ ì
entered«  

     Fivσ softwarσ switche≤ ma• optionall• bσ addeΣ whicΦ replacσ ì
mos⌠á oµá thσ dialoτ requireΣ iε thσ non-commanΣ linσá mode«á Thσ ì
entirσá documen⌠á i≤ printed«á Thσ defaul⌠ switcΦá setting≤á are║  ì
outpu⌠ t∩ thσ printer╗á documen⌠ mode¼á n∩ wai⌠ a⌠ thσ enΣ oµ thσ ì
page╗á singlσ copy╗á exi⌠ a⌠ thσ enΣ oµ thσ file«  Thesσ default≤ ì
ma• bσ changeΣ b• addinτ thσ followinτ switches:

.cp 6
è     /F=filenameá   send≤á thσ outpu⌠ t∩ thσ disδ filσá specifieΣ ì
ááááááááááááááááááááb• filename«  
     /N[=string]    specifie≤ non-documen⌠ modσ anΣ include≤á theæ ì
áááááááááááááááááááástringùá iε thσ commanΣ  linσ  a≤  par⌠ oµ thσ ì
ááááááááááááááááááááheadinτ unles≤ ß .H┼ do⌠ commanΣ i≤ founΣá iε ì
ááááááááááááááááááááthσ text.
     /W             request≤ ß wai⌠ a⌠ thσ enΣ oµ eacΦ page.
.cp 4
     /M=ncopies     Print≤á ß numbe≥ oµ copie≤ oµ thσ filσá equa∞ ì
áááááááááááááááááááát∩ ncopies.
     /Aá            Return≤á t∩ promp⌠ fo≥ aε Additiona∞ filσá a⌠ ì
ááááááááááááááááááááthσ enΣ  oµ thσ curren⌠ file.

.cp 4
4«á  Command≤ Durinτ Execution.ç  Severa∞ command≤ caε bσ entereΣ ì
during execution to abort or change parameters.

     Thσá printinτá caε bσ madσ t∩ abortô a⌠ an• linσá witΦá ßá ^Té ì
(Terminate)╗á a≤á ß precaution¼á ß quer• (Y/N⌐ i≤ madσ beforσ thσ ì
exi⌠ i≤ made« 

     Thσá printinτá caεá bσ madσ t∩ pauseôá wheεá ^Séá i≤á pressed╗ ì
pressinτ an• ke• wil∞ causσ i⌠ t∩ resume«  

     Pressinτá ^Aùá (control-A⌐á whilσ printinτ i≤á takinτá place¼ ì
lead≤ t∩ ß promp⌠ fo≥ thσ insertioε iε thσ tex⌠ characte≥á streaφ ì
oµ ß contro∞ characte≥ froφ thσ keyboard«  Thi≤ commanΣ i≤ usefu∞ ì
wheεá aε erro≥ iε editinτ leave≤ onσ oµ thσ specia∞ function≤ on¼ ì
wheε i⌠ shoulΣ havσ beeε turneΣ off«á  Fo≥ example¼ iµ ß worΣ wa≤ ì
t∩á bσá underlineΣ usinτ thσ ^╙ functioε bu⌠ thσá seconΣá ^╙á wa≤ ì
accidentall•á omitted¼á thσá remainde≥ oµ thσ documen⌠á woulΣá bσ ì
underlined«á  Iεá orde≥ t∩ speeΣ thσ printinτ oµ thσ document¼á ß ì
control-┴á followeΣá b•á ß control-╙ coulΣ bσá entereΣá froφá thσ ì
keyboard¼ anΣ thσ underlininτ woulΣ bσ aborteΣ immediately.

     Severa∞á feature≤á appl•á onl• iµ WSMX80ù i≤á operateΣá unde≥ ì
MP/M«á  First¼ ß ^─ wil∞ detacΦ thσ prograφ froφ thσ console«  Iµ ì
aεá erro≥ late≥ occur≤ durinτ execution¼á WSMX80ù wil∞ attemp⌠á t∩ ì
attacΦá t∩ thσ consolσ again¼á anΣ ß ^─ froφ thσ consolσá monito≥ ì
wil∞á restorσ thσ program╗á iµ n∩ erro≥ messagσá i≤á pending¼á aε ì
ATTAC╚ commanΣ froφ MP/Mù i≤ useΣ t∩ restorσ thσ program«á Second¼ ì
thσá prograφá wil∞ attemp⌠ t∩ takσ contro∞ oµ thσ printer╗á iµá ß ì
differen⌠á proces≤á (e.g.¼á PI╨ o≥ anothe≥á use≥á employinτá thi≤ ì
program⌐á alread•á ha≤ control¼á thσ use≥ caε commanΣá WSMX80ùá t∩ ì
eithe≥ abor⌠ o≥ wait«  Wheε waiting¼ thσ prograφ wil∞ avoiΣ tyinτ ì
u≡á thσ CP╒ b• checkinτ onl• oncσ pe≥ seconΣ t∩ determinσ iµá thσ ìèprinte≥ i≤ available«á  Iµ thσ wai⌠ optioε i≤ chosen¼á tha⌠ statσ ì
caεá eithe≥á bσá aborteΣá witΦ ß contro∞-├á o≥á detacheΣá witΦá ß ì
control-D.

.cp 4
5«á   Installation.ç  Thσ CP/Mù versioε oµ thi≤ prograφ require≤ ß ì
CP/M-80ù systeφ witΦ ß minimuφ oµ 48╦ oµ memory«á  Thσ printe≥á i≤ ì
driveε througΦ thσ CP/Mù lis⌠ (LST:⌐ device«  

     Thσ MS-DOSù versioε operate≤ iε ß minimuφ 128╦ system¼á usinτ ì
thσ "PRNó outpu⌠ device.

     Thσá MX-8░ prin⌠ switcΦ setting≤ (oε thσ circui⌠ boarΣ unde≥ ì
thσ cover⌐ caε bσ se⌠ a≤ desireΣ excep⌠ fo≥ thσ following:
     SW1-2     ON 
     SW1-3     OFF
     SW1-8     ON
     SW2       All OFF


.cp 6
VIII.  Generation of Alternate Character Sets.

     Custoφá characte≥á set≤ caε easil• bσ prepareΣ iµ needeΣá b• ì
followinτá ßá two-ste≡ process«á  Firs⌠ ß tex⌠ filσá i≤á prepareΣ ì
specifyinτá thσá characters¼á anΣ theε tha⌠ filσ i≤á compileΣá t∩ ì
producσ ß compac⌠ filσ whicΦ i≤ loadeΣ witΦ thσ .A├ command«  

     Thσá followinτá procedurσ i≤ useΣ t∩ preparσá thσá characte≥ ì
sourcσ file║á  ß filσ i≤ produceΣ iε whicΦ ß singlσ linσ contain≤ ì
thσá specificatioε fo≥ ß singlσ character║á  thσ firs⌠ numbe≥á oε ì
thσ linσ i≤ thσ numbe≥ oµ columnsô oµ dots¼á n¼ reqireΣ t∩ prin⌠ ß ì
characte≥á followeΣá b• ß commß anΣ thσ nù value≤ fo≥á thσá nùá do⌠ ì
column≤ eacΦ followeΣ b• commas«á  Thσ columε value≤ arσ produceΣ ì
b•á convertinτá ß serie≤ oµ eigh⌠ 1'≤ anΣ 0'≤ fo≥ thσ eigh⌠á posì
siblσá dot≤á iε ß columε froφ binar• t∩ ßá decima∞á number«á  Fo≥ ì
example¼á t∩ producσ thσ characte≥ [¼ thσ followinτ ╕ ° 1▒ matri° ì
wa≤ produced:

..S╠ 8
.C╨ 10
èBinar• weight▄ columε number
               ▒ ▓ │ ┤ ╡ ╢ ╖ ╕ ╣ 1011
     12╕       « « « « « « « « « « .
      6┤       « « « « « « « « ╪ « .
      3▓       ╪ ╪ ╪ ╪ ╪ ╪ ╪ ╪ « « .
      1╢       « « ╪ « « « ╪ « « « « 
       ╕       « « ╪ « « « ╪ « « « .
       ┤       « « ╪ « « « ╪ « « « .
       ▓       « X . « « « . X « « .
       ▒       « . « « « « « . « . .
..RL

.cp 2
Thσ resultinτ codσ linσ specifies ╣ column≤ a≤ follows:
     9,32,34,60,32,32,32,60,34,64,  greek pi
Notσá tha⌠á afte≥ thσ las⌠ comma¼á thσ linσ ma• bσá annotateΣá a≤ ì
desired╗á thσá characte≥á compile≥ ignore≤ everythinτá afte≥á thσ ì
strinτá oµá character≤ tha⌠ i⌠ i≤á lookinτá for«á  Thσá characte≥ ì
sourcσá filσ mus⌠ contaiε 9╢ line≤ oµ data¼á bu⌠ ma• als∩ contaiε ì
do⌠ command≤ t∩ contro∞ printinτ thi≤ characte≥ sourcσ file«  Thσ ì
disδá filσá theε contain≤ thσ specification≤á fo≥á 9╢á character≤ ì
beginninτáá witΦá thσá alternatσá fo≥á ßá spacσá (ASCI╔áá 20HEX)¼ ì
continuinτ througΦ thσ alternatσ fo≥ ASCI╔ 7FHEX«  

     Thσá characte≥á sourcσ filσ i≤ theε compileΣ witΦ ßá utilit• ì
program¼á CHRCOM«á  Thi≤ prograφ simpl• prompt≤ fo≥ thσ name≤á oµ ì
sourcσá anΣá compileΣ alternatσ characte≥ file≤ afte≥á whicΦá thσ ì
ASCI╔á filσá i≤ compileΣ int∩ ß morσ compac⌠á binar•á file«á  (Iε ì
CP/M, the name must be entered in capitals.)

.CP 4
IX« Iε Casσ oµ Problems.

     An•á error≤ encountereΣ o≥ othe≥ problem≤ witΦ thσ executioε ì
oµ thi≤ prograφ shoulΣ bσ directeΣ t∩ KennetΦ L« Ratzlaff¼ Wheatì
lanΣ Desigε Laboratory«á  Pleasσ includσ thσ erro≥ messagσ anΣá ß ì
descriptioεá oµá thσ filσ whicΦ createΣ thσ problem«á  Wσ d∩á no⌠ ì
havσ thσ resource≤ t∩ providσ hel≡ ove≥ thσ phone.

     Onσá commoε probleφ i≤ tha⌠ user≤ attemp⌠ t∩ executσá WSMX80ù ì
usinτ WordStar'≤ Ré command«  Unde≥ MS-DOS¼ thi≤ commanΣ canno⌠ bσ ì
useΣá witΦ moderate-sizeΣ file≤ havinτ thσá .EX┼á extension╗á thσ ì
prograφá wil∞á run¼á bu⌠ thσ compute≥ wil∞ crasΦ wheε contro∞á i≤ ì
returneΣ t∩ WordStar.

     Thσá MS-DO╙ version≤ havσ ß file-sizσ limi⌠ oµ 65,00░ bytes╗ ì
iµ thσ filσ i≤ larger¼á i⌠ mus⌠ bσ brokeε u≡ anΣ printeΣ witΦ thσ ìèfilσ inser⌠ do⌠ command.

     No⌠á al∞á "Epson-compatiblesó arσ reall• compatible╗á i⌠á i≤ ì
essentia∞ tha⌠ the• havσ vertica∞ carriagσ contro∞ witΦ ßá preciì
sioε oµ 1/216"╗ some¼ includinτ Sta≥ Micronics¼ onl• havσ contro∞ ì
t∩á 1/144óá and¼á wheε useΣ witΦ thi≤ program¼á wil∞á prin⌠á witΦ ì
incorrec⌠ linσ heights«á  Thσ Okidatß Microlinσ 19▓ anΣ 193¼ IBM-ì
compatiblσ versions¼ arσ reasonabl• compatiblσ witΦ thσ RX-seriesô ì
excep⌠ fo≥ thσ failurσ t∩ properl• executσ italics╗ thσ down-linσ ì
loadeΣáá font≤á canno⌠á bσá printeΣá iεá al∞á densit•á anΣá sizeΣ ì
variations« 
.PA
è
ÿAPPENDI╪ I«  ALTERNAT┼ CHARACTE╥ SE╘ (GREEK.CHR)


     !    "    #    $    %    &*   '    (*   )*   **   +
     !    "    #    $    %    &    '    (    )    *    +

     ,    -*   .    /
     ,    -    .    /

     0    1    2    3    4    5    6    7    8    9    0 
     0    1    2    3    4    5    6    7    8    9    0

     :    ;    <*   =*   >*   ?    @*
     :    ;    <    =    >    ?    @

     A    B    C    D    E    F*   G    H    I    J*   K
     A    B    C    D    E    F    G    H    I    J    K

     L    M    N    O    P    Q    R    S    T    U    V
     L    M    N    O    P    Q    R    S    T    U    V

     W    X    Y    Z
     W    X    Y    Z

     [    \*   ]    ^*   _*   `    
     [    \    ]    ^    _    `    

     a    b    c    d    e    f    g    h    i    j    k
     a    b    c    d    e    f    g    h    i    j    k

     l    m    n    o    p    q    r    s    t    u    v
     l    m    n    o    p    q    r    s    t    u    v

     w    x    y    z
     w    x    y    z

     {*   |*   }*   ~*
     {    |    }    ~

¬ Indicate≤ tha⌠ thσ characte≥ i≤ no⌠ thσ samσ a≤ useΣ b• thσ IB═ 66/4░ ink-je⌠ printer.
.cP30
èÿAPPENDI╪ II«  ALTERNAT┼ CHARACTE╥ SE╘ (GREEKD.CHR)
          (Compatible with the Diablo 630ECS math printwheel.)
..ac greekd.chr


     !    "    #    $    %    &    '    (    )    *    +
     !    "    #    $    %    &    '    (    )    *    +

     ,    -    .    /
     ,    -    .    /

     0    1    2    3    4    5    6    7    8    9    0 
     0    1    2    3    4    5    6    7    8    9    0

     :    ;    <    =    >    ?    @ 
     :    ;    <    =    >    ?    @

     A    B    C    D    E    F    G    H    I    J    K
     A    B    C    D    E    F    G    H    I    J    K

     L    M    N    O    P    Q    R    S    T    U    V
     L    M    N    O    P    Q    R    S    T    U    V

     W    X    Y    Z
     W    X    Y    Z

     [    \    ]    ^    _    `    
     [    \    ]    ^    _    `    

     a    b    c    d    e    f    g    h    i    j    k
     a    b    c    d    e    f    g    h    i    j    k

     l    m    n    o    p    q    r    s    t    u    v
     l    m    n    o    p    q    r    s    t    u    v

     w    x    y    z
     w    x    y    z

     {    |    }    ~ 
     {    |    }    ~

.cP30
èÿAPPENDI╪ III«  ALTERNAT┼ CHARACTE╥ SE╘ (DBL.CHR)
          (Usσ uppe≥ anΣ lowe≥ casσ witΦ ß linσ heigh⌠ oµ 21ú fo≥ ì
double high characters.)
..ac dbl.chr


     !    "    #    $    %    &    '    (    )    *    +
     !    "    #    $    %    &    '    (    )    *    +

     ,    -    .    /
     ,    -    .    /

     0    1    2    3    4    5    6    7    8    9    0 
     0    1    2    3    4    5    6    7    8    9    0

     :    ;    <    =    >    ?    @ 
     :    ;    <    =    >    ?    @

     A    B    C    D    E    F    G    H    I    J    K
     A    B    C    D    E    F    G    H    I    J    K

     L    M    N    O    P    Q    R    S    T    U    V
     L    M    N    O    P    Q    R    S    T    U    V

     W    X    Y    Z
     W    X    Y    Z

     [    \    ]    ^    _    `    
     [    \    ]    ^    _    `    

     a    b    c    d    e    f    g    h    i    j    k
     a    b    c    d    e    f    g    h    i    j    k

     l    m    n    o    p    q    r    s    t    u    v
     l    m    n    o    p    q    r    s    t    u    v

     w    x    y    z
     w    x    y    z

     {    |    }    ~ 
     {    |    }    ~

..sl 21#
^RABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){|]-+ :^R
^Rabcdefghijklmnopqrstuvwxyz1234567890}\[ =_:^R

èprinted at a line height of 21# yields:

ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){|]-+ :
abcdefghijklmnopqrstuvwxyz1234567890}\[ =_:
..rl 
.cP30
..lh 8

APPENDIX IV.      CONTROL CHARACTER ASSIGNMENT SUMMARY

     ^A        Turn on the wide font.
     ^B        Turn on/off the boldface mode.
     ^C        Pause while printing.
     ^D        Turn on/off the double-strike mode.
     ^E        Turn on/off the Graftrax Plus subscript.
     ^F        Treated as a space whichcanbeunderlined.
     ^G        Generates a Table of Contents entry.
     ^H        Backspace.
     ^╦        UseΣ fo≥ settinτ pagσ numbe≥ position≤ iε heading≤ 
               and footings and for making index entries.
     ^N        Turn off the wide font.
     ^P        Turn on/off the Graftrax Plus superscript.
     ^Q        Turn on the italics font.
     ^R        Turn on/off the alternate character set.
     ^S        Turn on/off the underline.
     ^T        Turn on/off the superscript.
     ^V        Turn on/off the subscript.
     ^W        Turn off the italic font.
..CX 0
     ^X        Turn on/off the strikeout:  strike. (CX=0)
..CX 1
                                           strike. (CX=1)
..CX 2
                                           strike. (CX=2)
..CX 3
                                           strike. (CX=3)
     ^Y        Turn on/off the compressed font.

..lh 8
Characteristic           ON command       OFF command

Alternate Character Set     ^R                ^R
Backspace                   ^H
Boldface                    ^B                ^B
Compressed                      ^Y                ^Y
Double-Strike               ^D                ^D
Index entry                 ^K                ^K
Italics                     ^Q                ^W
Pause while printing        ^C
..cx 0
Strikeout     (cx=0)        ^X                ^X
..cx 1
Strikeout     (cx=1)        ^X                ^X
..cx 2
Strikeout     (cx=2)        ^X                ^X
è..cx 3
Strikeout     (cx=3)        ^X                ^X
Subscript                   ^V                ^V
Subscript   (Graftrax Plus) ^E                ^E
Superscript                 ^T                ^T
Superscript (Graftrax Plus) ^P                ^P
Table of Contents           ^G
Underline                   ^S                ^S
Wide                    ^A                ^N
.op
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0526

     Volume in drive A has no label
     Directory of A:\

    CHRCOM   EXE     16512   7-13-84   9:54p
    DBL      CHR      1408   3-23-83   8:09a
    DBL      TXT      6144   3-23-83   8:26a
    FILES526 TXT      1894   1-02-80   5:56a
    GO       BAT        15   5-21-86  11:39a
    GREEK    CHR      1408   9-13-83  10:45p
    GREEK    TXT      3584  11-24-83   9:35a
    GREEKD   CHR      1408   3-21-86   9:30a
    GREEKD   TXT      3456   3-21-86   9:30a
    HAPPY    PRN      2304   5-14-86   2:48p
    NOTES526 TXT      1662   5-21-86  11:42a
    OMSG     TXT      2816   4-24-86   4:10p
    README   TXT      1792   4-24-86   3:52p
    WPATCH   EXE     20608  10-26-84   8:48a
    WSMX     EXE     58624   4-30-86   8:47a
    WSMXDOC  TXT     48640   3-25-86   9:16a
           16 file(s)     172275 bytes
                          141312 bytes free
