---
layout: page
title: "PC-SIG Diskette Library (Disk #225)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0225/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0225"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-FONT"

    PC-FONT enables an Epson MX (with Graftrax), RX, or FX printer to
    print 243 of the 256 ASCII characters.  These characters include
    those applicable for engineering/scientific/financial, foreign
    language characters, and miscellaneous characters.  Other
    capabilites include performing block graphic fonts and calling up
    one of 13 different fonts from the command line.  Command line
    font selection allows the casual user a wide variety of output
    styles without having to research esoteric printer control codes.
    
    System Requirements: Epson MX (with Graftrax), RX, or FX printer or
    the IBM Graphics Printer.
    
    How to Start: At the prompt enter TYPE PC-FONT2.PRN <ENTER>, this will
    print the on disk manual for the program.  To run it, enter PC-FONT2
    and press <ENTER>.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    PC-FONT2 TST  Test file
    PC-FONT2 EXE  Program to print 243 of PC's 256 characters
    PC-FONT2 PRN  Manual  (70K bytes)
    DESCRIPT TXT  Brief program description
    README        How to print manual
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #225, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PC-FONT2.EXE         CRC = 93 6D

--> FILE:  PC-FONT2.TST         CRC = 9B DF

--> FILE:  DESCRIPT.TXT         CRC = CC EB

--> FILE:  PC-FONT2.PRN         CRC = BC A9

--> FILE:  README  .            CRC = 18 8F

 ---------------------> SUM OF CRCS = D1 6F

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DESCRIPT.TXT

{% raw %}
```
EG
PC-Font Description:

I.   Major Functions:

     1. Extended character set.
H
	Allows an Epson MX (with Graftrax), RX, or FX printer to print
	243 of the 256 ASCII characters.  The remaining 13 are used by
	the program to control printer font options.  In contrast,
	only 94 characters (in the ASCII range 32-126) can currently
	be transferred from the screen to the Epson printer.  The new
	characters fall into these groups:

							      ASCII #
							      ───────
	o Engineering/Scientific/Financial characters	      224-253

	o Foreign language characters			      128-168
								173

	o Miscellaneous characters				1-7
							      16,17,19
							       21-25
							       28-31
							      169-170
							      174-175
  G
     2. Block graphic fonts.
  H
	Allows the Epson printers specified above AND the IBM Graphics
	printer to print the 49 block graphic characters consisting of
	single line, double line, and solid line fonts at twice the
	normal density.  In contrast, Epson printers cannot translate
	any of the screen graphics into print!	The greater density
	produces darker image and sharper contrast characters than
	those of the IBM Graphics printer.

							      ASCII #
							      ───────
	o Block graphic characters			      176-233
								254
  G
     3. Font selection.
  H
	Allows the printers specified above to choose one of 13
	possible fonts as a default by specifying a single parameter on
	the command line.  The ability to change fonts easily can be
	useful across a wide variety of applications.  For instance,
	compressed print can be used to print large spreadsheeet
	output, emphasized and/or double strike print for
	near-letter-quality correspondence, double wide print for
	overhead transparencies, condensed print for diskette
	directory labels, etc.	Following is a summary of the various
	font styles:



	Font		   Font 	       Characters   Lines per
	Size		  Density		per line      inch
	────		  ───────	       ──────────   ─────────
	Condensed	  Double strike 	  132	       14
	Compressed	  Standard		  132		8
	Compressed	  Double strike 	  132		8
	Standard	  Standard		   80		6
	Standard	  Double strike 	   80		6
	Standard	  Emphasized		   80		6
	Standard	  Correspondence	   80		6
	Compressed-Wide   Standard		   66		6
	Compressed-Wide   Double strike 	   66		6
	Double wide	  Standard		   40		6
	Double wide	  Double strike 	   40		6
	Double wide	  Emphasized		   40		6
	Double wide	  Correspondence	   40		6

	In addition, Epson printers can print the above fonts (except
	condensed) in italics, bringing the total number of font
	combinations to 26.

	Command line font selection allows the casual user a wide
	variety of output styles without having to research esoteric
	printer control codes.	Experienced users can still set,
	reset, and change fonts by embedding printer control codes
	within the text using an editing or word processing program.
G
     4. Automatic Skip over Perforations:
H
	Allows the printers specified above to enable or disable the
	Skip over Perforation option by a command line parameter.

	The Skip over Perforation feature is usually set on or off by
	a hardware switch inside the printer.  Word processors
	generally expect the option to be disabled.  An incorrect
	setting can cause double skipping between pages.  However,
	most editors and the DOS 2.x PRINT command expect the option
	to be enabled.	An incorrect setting here causes output to be
	printed over the entire page, including over the perforations.
	In order to maintain consistant, high quality output from
	different sources the user is forced to continually reset the
	switch.

	This sounds easy enough in theory.  However, accessing the
	switch for the first time requires partially disassembling the
	printer.  After that a tool (usually a bent paper clip) must
	be fabricated to toggle the switch on or off through a small
	access port.  The operation requires a technical
	sophistication that many business users do not desire to
	learn.	Placing this option under user control improves the
	quality of the output while decreasing the knowledge the user
	must posess to obtain it.  Experienced users can still set or
	reset this option using either hardware or software
	techniques.

G
II.  Market Segments:
H
	Segment #1 - any PC user with an Epson MX (with Graftrax),
	RX, or FX printer.  PC-Font gives this group the same
	character set as the IBM Graphics printer.  For example, a
	person using PeachText, Personal Editor, Professional Editor,
	etc.  can now print the block graphic, engineering/scientific,
	foreign language, and special characters.

	Segment #2: - any PC user with an Epson or IBM Graphics
	printer.  PC-Font allows this group to easily control and take
	advantage of printer's font styles and options.  (A majority
	of users are unaware of the printer's capabilities.)
	Advantages are high quality, professional looking output and
	the ability to use the printer for a wider variety of tasks,
	ranging from organizational charts and flow diagrams to
	overhead transparencies.

G
III. Additional Information:
H
	o All options have default values.

	o User Guide contains chapters for novice and experienced users.

	o Quick Reference page contains all font styles, sizes, and
	  associated command line parameters.

G
IV.  System Requirements:
H
	o  Hardware:
		       - IBM PC, PC/XT, PCjr, or PC compatible system with
			 a minimum of 96kb memory
		       - Diskette drive
		       - Monitor capable of displaying 80 columns
		       - One of the following printers:
			   - Epson MX (with Graftrax), RX, or FX printer
			   - IBM Graphics Printer

	o  Software:
		       - DOS Version 1.1 or higher

FH
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0225

     Volume in drive A has no label
     Directory of A:\

    PC-FONT2 EXE     40320   9-08-84   1:34p
    PC-FONT2 TST      2599   9-09-84  10:12a
    DESCRIPT TXT      5872   9-09-84   8:47a
    PC-FONT2 PRN     70786   9-08-84   2:01p
    README             381   7-21-84   8:52a
    CRC      TXT       794  11-16-84   6:50a
    CRCK4    COM      1536  10-21-82   7:54p
            7 file(s)     122288 bytes
                           36352 bytes free
