---
layout: page
title: "PC-SIG Diskette Library (Disk #517)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0517/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0517"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IMAGEPRINT 1 OF 2 (ALSO 2062)"

    IMAGEPRINT lets you produce high-quality characters on a dot matrix
    printer. IMAGEPRINT produces the IBM Graphics Printer's character set,
    which matches the IBM-PC's character set, in letter quality. Text input
    to IMAGEPRINT can come either directly from the keyboard (typewriter
    mode) or from a disk file. The text input can contain embedded
    backslash (``\'') commands, which select bold, underlining, double
    width, italics, superscript, subscript, half high, ten or twelve
    characters per inch, compressed, proportional spacing, etc. Text can be
    formatted (left and right micro-justification, hard and soft hyphens,
    margins, headers and footers, etc.) with IMAGEPRINT's built-in
    formatting capabilities.
    
    File Descriptions:
    
    CONTROL  DAT  Utility data.
    CONTROL  EXE  Utility file.
    DEMODATA      Data file for FONTDEMO.EXE.
    ENHANCE  EXE  Utility file.
    FONT1         Cubic font (the default font).
    FONTDEMO EXE  Program used for a demonstration of other fonts.
    IP       EXE  Main program.
    IPV3     DOC  Documentation.
    ORDER    FRM  Order form
    README        Introduction, directions.
    REM-CTRL EXE  Removes CONTROL.EXE from memory.
    SAMPLE   DAT  Example text substitutions.
    TUTOR_1  TXT  Simple IMAGEPRINT demonstration.
    TUTOR_2  TXT  Detailed IMAGEPRINT demonstration.
    UTILS    DOC  Documentation for CONTROL and ENHANCE.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0517.TXT

{% raw %}
```
Disk No:  517
Disk Title: ImagePrint Printer Utility
PC-SIG Version: S2

Program Title: ImagePrint Printer Utility (unsupported)
Author Version: 3.0
Author Registration: $42.95
Special Requirements: Dot matrix printer.

IMAGEPRINT lets you produce high-quality characters on a dot matrix
printer. IMAGEPRINT produces the IBM Graphics Printer's character set,
which matches the IBM-PC's character set, in letter quality. Text input
to IMAGEPRINT can come either directly from the keyboard (typewriter
mode) or from a disk file. The text input can contain embedded
backslash (``\'') commands, which select bold, underlining, double
width, italics, superscript, subscript, half high, ten or twelve
characters per inch, compressed, proportional spacing, etc. Text can be
formatted (left and right micro-justification, hard and soft hyphens,
margins, headers and footers, etc.) with IMAGEPRINT's built-in
formatting capabilities.

File Descriptions:

CONTROL  DAT  Utility data.
CONTROL  EXE  Utility file.
DEMODATA      Data file for FONTDEMO.EXE.
ENHANCE  EXE  Utility file.
FONT1         Cubic font (the default font).
FONTDEMO EXE  Program used for a demonstration of other fonts.
IP       EXE  Main program.
IPV3     DOC  Documentation.
ORDER    FRM  Order form
README        Introduction, directions.
REM-CTRL EXE  Removes CONTROL.EXE from memory.
SAMPLE   DAT  Example text substitutions.
TUTOR_1  TXT  Simple IMAGEPRINT demonstration.
TUTOR_2  TXT  Detailed IMAGEPRINT demonstration.
UTILS    DOC  Documentation for CONTROL and ENHANCE.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## IPV3.DOC

{% raw %}
```


















				  IMAGEPRINT
			    Print Quality Enhancer
				  Version  3

			      for the IBM PC and

		   IBM/Epson/Compatible dot matrix printers









				    (USA)
			    IMAGE Computer Systems
				 P.O. Box 647
			Avon, Connecticut,  USA   06001
			      Ph: (203) 678-8771














	       (C) Copyright IMAGE Computer Systems 1985-1989

			     All Rights Reserved














	IMAGEPRINT is (C) Copyright IMAGE Computer Systems 1985, 1986,
	1987, 1988, 1989. Non-registered users are granted a limited
	license to use IMAGEPRINT on a trial basis for the purpose of
	determining whether IMAGEPRINT is suitable for their needs.
	Use of IMAGEPRINT, except for this limited purpose, requires
	registration. Use of non-registered copies of IMAGEPRINT by
	any person, business, corporation, governmental agency or
	other entity or institution is strictly forbidden. This 
	notification is an abbreviation of the full license
	requirements listed in the Appendix Section "Rules and
	Regulations."

	Registration of IMAGEPRINT costs $42.95 (plus $3.00 shipping
	and handling), which gives you the latest version of
	IMAGEPRINT, a printed manual and a total of 10 fonts. See the
	Section "Registering your copy of IMAGEPRINT" and the order
	form for all details. Order by mail or phone. MasterCard and
	VISA accepted.

	You are encouraged to give unmodified copies of IMAGEPRINT
	distribution diskettes (with FONT1 only) to your friends and
	acquaintances.	We want to reach as many people as possible
	with this product.

	If you have a REGISTERED IMAGEPRINT diskette (with more than
	FONT1), you are breaking federal copyright law if you make
	a copy and give it to someone.

	The programs and the documentation on the IMAGEPRINT
	distribution diskette and the REGISTERED diskette are
	copyrighted.  No programs or documentation can be added or
	deleted or altered.  See the APPENDIX Section "Rules and
	Regulations" for details.


	ALPS/TM ALPS ELECTRIC CO., LTD.
	BROTHER/TM BROTHER U.S.A., INC.
	CANON/TM CANON U.S.A., INC.
	CITIZEN/TM CITIZEN WATCH CO., LTD.
	EPSON/TM EPSON AMERICA, INC.
	IBM, PC-DOS, PC, PC-XT, PC-AT, PCjr, PS/2 MODEL 30-50-60-70-80
	  GRAPHICS PRINTER, PROPRINTER/TM IBM CORP.
	IMAGEPRINT, METATEXT/TM IMAGE COMPUTER SYSTEMS.
	MS-DOS, MICROSOFT WORD/TM MICROSOFT CORP.
	MULTIMATE/TM MULTIMATE INTERNATIONAL CORP.
	NEC PINWRITER/TM NEC INFORMATION SYSTEMS, INC.
	OKIDATA/TM OKIDATA CORP.
	PANASONIC/TM PANASONIC INDUSTRIAL CO., INC.
	PC-WRITE/TM QUICKSOFT.
	STAR MICRONICS/TM STAR MICRONICS, INC.
	TANDY/TM TANDY CORP.
	VOLKSWRITER/TM LIFETREE SOFTWARE, INC.
	WORDPERFECT/TM WORDPERFECT CORP.
	WORDSTAR, WORDSTAR 2000/TM MICROPRO INTERNATIONAL CORP.








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


     TABLE OF CONTENTS


	   What is ImagePrint? .......................... 1
	   What does ImagePrint include? ................ 1
	   What printers does ImagePrint work with? ..... 2
	   What computers will ImagePrint run on? ....... 3
	   Files on the ImagePrint diskette ............. 3
	   Registering your copy of ImagePrint .......... 4
	   Support from IMAGE Computer Systems .......... 5
	   Installing ImagePrint ........................ 5
	   Starting ImagePrint .......................... 6
	     Using the full screen menu ................. 7
	     Using a command line ....................... 9
	     Typewriter mode ........................... 11
	   Creating a Text File to Print ............... 12
	   Backslash Commands .......................... 13
	     Fonts ..................................... 14
	     Print quality ............................. 15
	     Character attributes ...................... 15
	     Character offsets ......................... 17
	     Cancelling character attributes/offsets ... 17
	     Print density ............................. 17
	     Lines per inch ............................ 18
	     Straight-through mode ..................... 18
	     Soft Hyphens when formatting .............. 19
	     Printing a backslash ...................... 19
	     Color control ............................. 19
	   Formatting Commands ......................... 19
	     Enable formatting ......................... 21
	     Page length ............................... 22
	     Page number ............................... 22
	     Move to next page ......................... 22
	     Printing page range ....................... 22
	     Headers and footers ....................... 22
	     Set header and footer width ............... 24
	     Kill header and footer definitions ........ 24
	     Lines per inch ............................ 24
	     Line spacing .............................. 24
	     Start paragraph ........................... 24
	     Word wrap with justification .............. 25
	     No word wrap .............................. 25
	     Ragged right margin ....................... 25
	     Left margin ............................... 26
	     Right margin .............................. 26
	     Extra gutter, even pages .................. 26
	     Extra gutter, odd pages ................... 26
	     Temporary indent .......................... 26
	     Center line ............................... 26
	     Force printing ............................ 27
	     Force paper movement ...................... 27
	     Stop before printing page ................. 27
	     Immediate backslash execution ............. 27
	     Comments .................................. 27








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	 Appendix
	   ImagePrint backslash commands summary ....... 28
	   ImagePrint formatting commands summary ...... 29
	   Error messages .............................. 29
	   Technical notes ............................. 31
	   THE IMAGE PRINTING UTILITIES ................ 31
	   Rules and Regulations ....................... 33

	 ORDER FORM .................................... 35





















































					       IMAGEPRINT Version 3
     --------------------------------------------------------------


    WHAT IS IMAGEPRINT? 	

	IMAGEPRINT allows you to produce high quality printing on your
	standard IBM or Epson or compatible dot matrix printer. 

	Text input to IMAGEPRINT can come either directly from the
	keyboard (typewriter mode) or from a disk file.  The text input 
	can contain embedded backslash ("\") commands, which select
	bold, underlining, double width, italics, etc.	Text can be
	formatted (left and right justification, margins, etc.) with a
	word processor, or by using IMAGEPRINT's built-in formatting
	capabilities.


    WHAT DOES IMAGEPRINT INCLUDE?

     Characters -

	IMAGEPRINT allows you to print an IBM PC's extended character
	set in letter quality. All of the standard text characters,
	mathematical symbols, national characters and graphics
	characters are included.

     Character attributes -

	IMAGEPRINT provides all of the standard printer character
	attributes like 10 or 12 cpi (characters per inch), bold,
	underline, italic, double width, and compressed. Additional
	features provided by IMAGEPRINT include half-high, true 
	superscript and subscript, Epson JX series printer color
	control and proportional character spacing.
	
     Print Modes -

	There are four IMAGEPRINT print qualities:

	  - Draft quality using your printer's standard dot matrix
	    output.
	  - Medium quality for fast printing and proofing.
	  - High quality 3 pass printing (this is the default output).
	  - High quality 6 pass extra-dark printing.

     Fonts -

	All IMAGEPRINT font files have a standard name format: FONTxx,
	where xx is the number of the font.

	The distribution diskette contains 1 font: Cubic (FONT1).
	Registered users of IMAGEPRINT have a total of 10 fonts:




								  1








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	  Courier     : FONT0
	  Cubic:      : FONT1
	  Elite       : FONT2
	  Italic      : FONT3
	  Orator      : FONT4
	  Typewriter  : FONT5
	  Roman       : FONT6
	  Outline     : FONT7
	  OCRA	      : FONT8
	  OCRB	      : FONT9

	If you only have the Cubic font, you can get a demonstration
	of other IMAGE fonts by running the "FONTDEMO" program on the
	IMAGEPRINT diskette.
	
    Formatting -

	IMAGEPRINT recognizes "dot commands" that set margins, text
	microjustification, even and odd page gutters, automatic
	centering, headers, footers and line spacing. Backslash 
	commands, including double width, do not affect the
	formatting. See the Section "Formatting Commands" for more
	details.


    WHAT PRINTERS DOES IMAGEPRINT WORK WITH?

	IMAGEPRINT is compatible with any of the following dot matrix
	printers:

	  IBM Graphics Printer or compatibles
	  IBM Proprinter or compatibles
	  Epson DFX, EX, FX, GX, JX, LX, RX printers
	  Epson LQ printers (see note below)
	  Epson compatible printers
	  Panasonic 1080, 1091, 1092, 1093, 1095, 1592, 1595
	  Star Micronics NL/NP/NX/SD/SG series
	  Tandy DMP 130/132/430
	  Okidata 92/93 (IBM compatible versions; use "-M" option)
	  Okidata 192/193 (IBM versions), 320/321
	  Canon PW-1156A, PW-1080A, PW-1088A
	  Citizen MSP series
	  ALPS P2000, ASP1000
	  Brother M1509, M1709
	  NEC Pinwriter

	THIS IS ONLY A PARTIAL LIST. Almost all printers are IBM
	and/or Epson compatible.  If in doubt about your printer's
	suitability, check that it recognizes the following control
	sequences: (ESC = ASCII 27)



								  2








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	  ESC "3"  - set line spacing in 216ths of an inch

	  ESC "L"  - double density graphics mode (for Epson "MX" type
		     printers)
		 or
	  ESC "Z"  - quadruple density graphics mode

	* Note - Epson LQ printers and compatibles work well with
	IMAGEPRINT, but lines are slightly spread apart vertically.
	With an LQ printer, IMAGEPRINT prints at 5 lines per inch,
	instead of the usual 6 lines per inch.

	IMAGEPRINT works with printers connected to parallel port
	LPT1: (PRN:), LPT2:, or LPT3:. A printer with a serial
	interface will also work if you use the DOS "MODE" command to
	redirect output. For example:

	  MODE LPT1:=COM1:

	would redirect printer output to serial port number 1.	See
	your DOS manual for more information about the "MODE" command.
	

    WHAT COMPUTERS WILL IMAGEPRINT RUN ON?

	IMAGEPRINT works with any IBM Personal Computer, (PC, PC- XT,
	PC-AT, PCJr, PS/2, etc.) and any true compatibles or clones.
	It runs under PC-DOS or MS-DOS versions 2.0 and above.


    FILES ON THE IMAGEPRINT DISKETTE

	NOTE: There may be a "README" file on your diskette. If it
	exists, it will contain information about recent program
	changes or alterations, or explanations about additional files
	on your diskette not listed below.

	  IP.EXE	  The IMAGEPRINT program
	  IPV3.DOC	  The documentation
	  ORDER.FRM	  The order form
	  FONT1 	  Cubic font (the default font)
	  FONTDEMO.EXE	  Program for fonts demonstration
	  DEMODATA	  Data file for FONTDEMO.EXE
	  TUTOR_1.TXT	  Simple IMAGEPRINT demonstration
	  TUTOR_2.TXT	  Detailed IMAGEPRINT demonstration

	If you have a REGISTERED diskette, you will also have:

	  FONT0 	  Courier font
	  FONT2 	  Elite font
	  FONT3 	  Italic font


								  3








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	  FONT4 	  Orator font
	  FONT5 	  Typewriter font
	  FONT6 	  Roman font
	  FONT7 	  Outline font
	  FONT8 	  OCRA font
	  FONT9 	  OCRB font


    REGISTERING YOUR COPY OF IMAGEPRINT 

	IMAGEPRINT is distributed as User-Supported Software.
	Registration costs just $42.95 (plus $3.00 shipping and 
	handling) and gives you the following benefits: 

	(1) You are supporting us in our effort to release quality
	   software at a low price.

	(2) You get the latest version of IMAGEPRINT, which has no
	   opening screen with a "Press a key to continue" message.

	(3) You get the 10 fonts described in Section "What does
	   IMAGEPRINT include?" Type "FONTDEMO" to see a font
	   demonstration.

	(4) You get a printed manual.
	
	You can also order THE IMAGE PRINTING UTILITIES, which
	combines version 3 of IMAGEPRINT with the latest version of
	METATEXT.  METATEXT allows you to print directly from within
	your word processor, spreadsheet, etc., in high quality.
	Sixteen fonts are included with this package.  See the
	Appendix Section "The IMAGE Printing Utilities" for more
	details.

	Order by mail or phone.  We accept MasterCard and Visa.  If
	you order by mail, you can use the order form at the end of
	this manual, or print out the file ORDER.FRM. Our address is:
	
			  IMAGE Computer Systems
			      P. O. Box 647
			     Avon, CT  06001
			   Ph: (203) 678-8771

	We cannot accept checks that are not US funds payable from a
	United States bank. The only exceptions are international
	postal money orders made out in US funds.







								  4








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	You may also order our products from our English location.
	Their address is:

			 IMAGE Computer Systems
			     27 Cobham Road
			    Wimborne, Dorset
			    England BH21 7PE
			    Ph: 0202-876064

	Prices in England are as follows:

	  IMAGEPRINT Version 3			30 pounds
	  The IMAGE Printing Utilities		50 pounds
	  Shipping and handling for all orders	 2 pounds

	If you order by check from IMAGE Computer Systems in England,
	be sure to send payment as English funds payable from an
	English bank. Otherwise, they will have to return your order.


    SUPPORT FROM IMAGE COMPUTER SYSTEMS 

	It is our policy to provide full support to our registered
	users and to ensure complete satisfaction with our products.
	If you have a problem or question, give us a call.  Otherwise
	send a letter, clearly stating your question.  Include sample
	printouts if possible.	

	Suggestions and comments are welcome from everyone.


    INSTALLING IMAGEPRINT

      COMPUTERS WITH FLOPPY DISKS ONLY: 

	First, make a working copy of the IMAGEPRINT diskette. The
	IMAGEPRINT diskette is not copy protected, so it can be copied
	in the conventional way:

	  1) Place the IMAGEPRINT master diskette in drive A:
	  2) Place an empty formatted diskette in drive B:
	  3) Type  "COPY  A:*.*  B:"

	The DOS "COPY" command is safer than the "DISKCOPY" command
	because the diskettes can be accidentally reversed and still
	not overwrite the IMAGEPRINT diskette. Store the master 
	diskette in a safe place.

	If you are unfamiliar with this procedure, refer to your
	operating system manual.



								  5








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


      COMPUTERS WITH A HARD DISK:

	  1) Place the IMAGEPRINT diskette in drive A:
	  2) Create a directory on your hard disk for the IMAGEPRINT
	     files. For example "MD IMAGE" will create a directory
	     called IMAGE.
	  3) Change your active directory to the newly-created
	     IMAGEPRINT directory and type "COPY  A:*.*"

	All of the IMAGEPRINT files will then be copied to your hard
	disk. To be able to run IMAGEPRINT from any directory or disk
	drive:

	  1) Alter your DOS PATH to include the IMAGEPRINT directory
	     in the search for executable files. For example, if
	     IMAGEPRINT is in C:\IMAGE, and you don't already have a
	     search path, type in:

	       PATH=C:\IMAGE

	  2) IMAGEPRINT recognizes a special environment string called
	     FONTS, which allows you to specify the search path for
	     IMAGEPRINT fonts. For example, if the IMAGEPRINT fonts
	     are in C:\IMAGE, type in:

	       SET FONTS=C:\IMAGE

	  Do not include a trailing backslash. If you are unfamiliar
	  with search paths and environment strings, refer to your
	  operating system manual.


    STARTING IMAGEPRINT

	Make sure you have the Disk Operating System (DOS) prompt
	displayed, then invoke IMAGEPRINT. The two methods of starting
	IMAGEPRINT (full screen menu or command line) are described
	below.

	You can abort IMAGEPRINT by pressing CTRL-C (the CTRL key,
	plus the "C" key at the same time). If your printer is not
	ready (off-line, out of paper, etc.), then the CTRL-C key
	combination may not be recognized because the part of your
	operating system that drives your printer may be in an endless
	loop. IMAGEPRINT will not time-out. This allows you, for
	example, to take your printer off-line while on the phone, and
	to resume printing later.






								  6








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


      USING THE FULL SCREEN MENU

	The syntax for invoking IMAGEPRINT is:

	  IP<ENTER>

	The <ENTER> symbol represents pressing the ENTER key. Do not
	type anything between IP and <ENTER>, or you will be starting
	IMAGEPRINT using the command line method described below.

	After invoking IMAGEPRINT, a full screen menu will be
	displayed.

	Note: Some IMAGEPRINT options, such as Epson MX compatibility
	mode, are not available with the full screen menu.  Use the
	command line method of starting IMAGEPRINT instead.

	Press Function key F10 when you are finished making your
	selections. Press the ESC key if you want to abort IMAGEPRINT
	and return to DOS.

	Instructions about how to move between selection fields and
	how to edit the contents of the fields will appear on your
	screen. Context sensitive help will also appear near the
	bottom of your screen as you move from field to field.

	The following selection fields are displayed:

	FILE TO PRINT:

	 Enter the name of the file you wish to print with IMAGEPRINT.
	 The text file must be in "ASCII" format, containing only
	 printable characters (A...Z, 0...9, etc.) and no printer or
	 word processor control codes. See the Section "Creating a
	 Text File to Print" for more details about ASCII files.

	 The default input source is "CON:," which indicates that
	 input will come from the keyboard (CONsole). This is called
	 typewriter mode and is detailed in the Section "Typewriter
	 Mode." 

	FONT:

	 This is the font number you wish to use, and can be a one or
	 two digit number. The font name will be displayed to the
	 right of the font number. When IMAGEPRINT is invoked, FONT1
	 is the default font. FONT1, plus any other fonts you wish to
	 use, must be on the same disk or subdirectory as IMAGEPRINT,
	 unless you have set the FONTS environment string as described
	 in the Section "Installing IMAGEPRINT."



								  7








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	PRINT QUALITY:

	 Draft - With this mode, IMAGEPRINT uses your printer's 
	 standard print quality and capabilities to print a rough
	 draft of the text file.

	 Fast - This mode uses an IMAGEPRINT font and is useful for
	 printing rough drafts of a final copy which shows the font
	 shapes. Characters will look "dotty," especially in the
	 horizontal direction.

	 Quality - This is the default print mode for IMAGEPRINT. The
	 print head makes 3 passes over each line, using an IMAGEPRINT
	 font.

	 Laser - In this mode, the print head makes 6 passes over each
	 line, using an IMAGEPRINT font. This mode is useful if your
	 printer has a worn ribbon.

	CHARACTERS PER INCH:

	 Compressed 17.1 cpi - With the compressed mode enabled,
	 IMAGEPRINT compresses the current font to 17.1 characters per
	 inch, yielding 136 characters per line on a letter width
	 printer, and 233 characters per line on a wide carriage
	 printer.

	 12 cpi - Printing at 12 characters per inch density, allowing
	 96 characters per line on a letter width printer, and 163
	 characters per line on a wide carriage printer.

	 10 cpi - This is the default setting of IMAGEPRINT. It will
	 yield 80 characters per line on a letter width printer and
	 136 characters on a wide carriage printer.

	 Double width 5 cpi - Selects double width (5 characters per
	 inch) density. Each character takes up twice as much space as
	 the standard 10 cpi density.

	PRINTER:

	 Enter the number of the port to which your printer is
	 attached. This will almost always be "LPT1:," the IMAGEPRINT
	 default. Only numbers 1, 2 or 3 are valid selections.

	80 COLUMN PRINTER:

	 Set this flag to (Y)es if you are using a letter width (8
	 inch platen) printer.




								  8








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	136 COLUMN PRINTER:

	 Set this flag to (Y)es if you are using a wide carriage
	 printer.

	RESET BIT 7 OF INPUT:

	 Set this field to (Y)es if you are printing a WordStar(tm)
	 document file. This will turn off bit 7 of every character,
	 which is the standard way of "cleaning" WordStar document
	 files to make them print correctly. If you use WordStar's
	 non-document mode for editing, you don't have to enable this
	 option.

	 Resetting bit 7 limits IMAGEPRINT's range of character values
	 to the range 0...127, making the IBM PC's extended character
	 set unavailable.

	OPTIMIZE PRINT SPEED:

	 (Y)es will select print head movement optimization, which can
	 speed up printing. When enabled, IMAGEPRINT will send regular
	 10 cpi space characters to locate the print position, rather
	 than always returning the print head to the left margin
	 before each print pass. The default setting is "Y".

	 Note - It is assumed that your printer is in 10 characters
	 per inch mode if print head optimization is enabled. If your
	 printer is not at 10 cpi print density because of a software
	 command or the setting of your printer's DIP switches, text
	 will print at the wrong location.

      USING A COMMAND LINE

	This method is suitable for running IMAGEPRINT from within a
	batch file, or if you don't want to use the IMAGEPRINT full
	screen menu to select options. You must first create a text
	file to print. See the Section "Creating a Text File to Print"
	for details.

	The syntax for invoking IMAGEPRINT using the command line
	method is:

	  IP  input-file  [LPTx:]  [dash options]	 {x=1,2,3}

	The "command line" is what you type after "IP." For example,
	in the following example, "LETTER.DAT -F" is the command line:

	  IP LETTER.DAT -F

	The command line can be typed in as either upper or lower
	case.

								  9








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	The input-file is the source of input to IMAGEPRINT. This can
	be either "CON:" (typewriter mode) or a disk file in ASCII
	format. 

	Following the input-file name is the printer port
	specification. This can be LPT1:, PRN:, LPT2: or LPT3:. If you
	don't specify the printer port, it will default to LPT1:.

	Examples:

	  IP C:\LETTR\TEXTFIL	       {input from C:\LETTR\TEXTFIL}

	  IP CON:		       {input from console (keyboard)}

	The dash options are dashes ("-"), immediately followed by one
	or two characters. Each dash option must be separated by at
	least 1 space from anything else.

	These dash options correspond to options displayed when the
	full screen menu method of starting IMAGEPRINT is used. Do not
	confuse command line dash options with backslash ("\")
	commands embedded in the printed text. The dash options are:

	-M : Epson (M)X compatibility

	  IMAGEPRINT normally drives a printer in quadruple density
	  graphics mode, which earlier Epson printers don't support.
	  The "-M" option selects double density mode, which many MX
	  type printers do recognize.

	-D : (D)raft

	  Print a rough draft of the text, using only your printer's
	  built-in print modes. This corresponds to the draft printing
	  choice on the full screen menu.

	-O : (O)ptimize print speed

	  If print head movement optimization is enabled, then
	  IMAGEPRINT will send regular spaces to locate the print
	  position, rather than always returning the print head to the
	  left margin for each print pass. This corresponds to the
	  optimize print speed selection on the full screen menu.

	-F or -Q or -L : Select print quality

	  These three selections correspond to the backslash commands
	  "\F," "\Q" and "\L" that can be embedded in the input text.
	  This allows printing of text files using different print
	  qualities without having to re-edit the text file to change
	  the quality selection.


								 10








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	-00...-99 : Select font

	  Select which font to use when printing your document. The
	  default font is FONT1; Cubic. You can, of course, also
	  change fonts by using embedded backslash commands in the
	  text being printed.

	-W : Print a WordStar document file

	  All characters in the text file being printed will be 
	  "cleaned." This option corresponds to the reset bit 7 option
	  on the full screen menu.

	-# : Print to a disk file

	  This option causes IMAGEPRINT to send its output to a disk
	  file, instead of directly to your printer.  This option can
	  be useful if you have a hard disk and wish to save
	  IMAGEPRINT's output for printing later.

	  The "#" is immediately followed by the name of the file that
	  is to hold IMAGEPRINT's output. There must not be any gap
	  between the "#" and the file name. For example:

	    IP SAMPLE.TXT -#TEMP.BIN

	  would create a file called TEMP.BIN that contains
	  IMAGEPRINT's output of SAMPLE.TXT.  When you are ready to
	  print the file, you must use the "/B" option of the DOS COPY
	  command. For example:

	    COPY /B TEMP.BIN PRN:

	  The "/B" is necessary because an IMAGEPRINT output file
	  contains "binary" data.

	Command line examples:

	  IP AFILE LPT3: -O	{print to LPT3:, optimize print speed}
	  IP BFILE -D		{draft printing}
	  IP LETTER -W		{WordStar document file}
	  IP CON: -9		{Use FONT9, input from keyboard}


      TYPEWRITER MODE

	You can select typewriter mode from either the full screen
	menu method or command line method of starting IMAGEPRINT (see
	above.) Just specify the text input source as CON:, which is
	your keyboard.



								 11








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	All IMAGEPRINT backslash and dot formatting commands are
	recognized. The current line can be edited with the standard
	DOS keyboard buffer editing syntax. The most useful editing
	keys are:

	  BACKSPACE	  delete character to left of cursor.
	  TAB		  move to next tab stop.
	  FUNCTION KEY 1  display previous line 1 character at a time.
	  FUNCTION KEY 3  display entire previous line.
	  <ENTER>	  print the line that is visible on the screen.

	Each line on the screen will not print until the <ENTER> key
	is pressed, because an internal line buffer stores the
	characters.

	To exit IMAGEPRINT and return to DOS, press <ENTER>, then
	press the function key F6, and then press <ENTER> again.


      CREATING A TEXT FILE TO PRINT

	Using a text editor or word processor, create a diskette file
	you wish to print with IMAGEPRINT. Your word processor must be
	able to create standard "ASCII" files, containing only
	printable characters, to work correctly with IMAGEPRINT. There
	must be no word processor formatting information or special
	printer control codes contained in the file.
	
	You must be at the DOS prompt to use IMAGEPRINT. You cannot
	access it from within your word processor.

	Note  -  See the description of THE IMAGE PRINTING UTILITIES
	in the Appendix if you wish to print directly from your word
	processor, spreadsheet, etc. without first having to create an
	intermediate ASCII file.

	Creating an ASCII file can be accomplished as follows for the
	following common word processing programs:

	  WORDSTAR : Use the non-document mode or use IMAGEPRINT's
	  "Reset bit 7" facility to print a document file.

	  WORDSTAR 2000 : When you edit a file, use the format
	  file "UNFORM.FRM."

	  MULTIMATE : Use "TTYCRLF.PAT" as a generic printer
	  definition file. Select "print to file" from the print menu,
	  as well as draft print quality. Do not use left or top
	  margins.




								 12








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	  WORDPERFECT : Save your work as a "DOS" file using the Text
	  In/Out function, accessed by pressing CTRL-F5.

	  MICROSOFT WORD : Save as an unformatted file, or print to
	  disk using a plain vanilla printer driver.

	  VOLKSWRITER : Select plain vanilla printer driver and 
	  print to disk.

	  PC-WRITE : Default is standard ASCII. Edit the file, don't
	  use the ALT keystrokes, and save the file to disk.

	If you are using IMAGEPRINT's dot formatting commands, then
	all of your text should start at the far left margin, in
	column 1.


      BACKSLASH COMMANDS

	A backslash ("\"), NOT A SLASH ("/"), is used by IMAGEPRINT.
	Backslash commands, which select character density, width,
	etc., are standard printable characters, embedded within the
	text of a file created for printing with IMAGEPRINT. For
	example, "\I" gives you italics, and "\U" gives you
	underlining. These backslash commands are recognized as 
	IMAGEPRINT commands, and are removed from the stream of data
	sent to the printer. They are not printed. If formatting is
	enabled, backslash commands, including the double width 
	command, will not affect margin justification.

	There is no space between the backslash and the following
	character(s) that identify the command. Most backslash
	commands are made up of a backslash, plus one more alphabetic
	character. One exception is font selection, where the
	backslash can be followed by up to two numeric characters.

	There are two kinds of backslash commands: toggling and non-
	toggling. Toggling commands reverse the current state of the
	mode selected. For example, because DOUBLE WIDTH is a toggling
	command, the first "\W" encountered enables DOUBLE WIDTH mode,
	the second cancels DOUBLE WIDTH, the third enables DOUBLE
	WIDTH again, etc. You can turn off all active toggling modes
	with "\C" (cancel).

	Non-toggling commands are cancelled by selecting another
	mutually exclusive mode. For example, if "\|" is selected (12
	characters per inch), a later "\>" (10 cpi) command will
	cancel 12 cpi mode and enable 10 cpi mode.

	The backslash command mnemonics (except for the color
	commands) represent, as closely as possible, the action 
	involved. For example, superscript is "\^," subscript is "\v."

								 13








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	Backslash commands can be combined. For example:

	  \u\bThis would print as underlined bold\c

	In the following backslash summary, the command letters 
	following the backslash are shown in upper case, though lower
	case will also work.

	There are examples of backslash commands in the files
	TUTOR_1.TXT and TUTOR_2.TXT on the IMAGEPRINT diskette. 

      FONTS:

	\00 ... \99

	  Example:

	    \01This is FONT1 (Cubic), \06this is FONT6 (Roman).

	Select a different font. The font file selected must be on the
	same drive that IMAGEPRINT was started on, unless you have set
	the FONTS environment string (see the Section "Installing
	IMAGEPRINT").  Your new font choice remains in effect until
	over-ridden by another font choice.

	The numbers following the backslashes correspond to
	the font files:

	  00	 - FONT0 (Courier)
	  01	 - FONT1 (Cubic)
	  02	 - FONT2 (Elite)
	  03	 - FONT3 (Italic)
	  04	 - FONT4 (Orator)
	  05	 - FONT5 (Typewriter)
	  06	 - FONT6 (Roman)
	  07	 - FONT7 (Outline)
	  08	 - FONT8 (OCRA)
	  09	 - FONT9 (OCRB)


	The default font is FONT1, Cubic.		

	There can be up to two digits following the backslash.	The
	first character following the backslash must be a digit.  If
	the second character is also a digit, then IMAGEPRINT assumes
	that the two digits combined select a font.
	
	Examples:

	  "\0123" would use FONT1 to print "23"
	  "\06123" would use FONT6 to print "123"


								 14








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	  "\6abc" would use FONT6 to print "abc"
	  "\0023" would use FONT0 to print "23"

	Mixing different fonts on the same line slows the printing
	because of the font file disk access time.  IMAGEPRINT has
	to load each font while accumulating the line before printing,	
	and also has to load each font to print the line. Using a RAM
	memory disk or a hard disk greatly reduces the font access
	time.

      PRINT QUALITY:

	Three IMAGEPRINT print qualities are available that use 
	IMAGEPRINT fonts:

	 \F : (Fast) Medium quality 3 pass printing.

	   In this mode the print head moves at standard
	   printer speed.  The printing is more dotty than the
	   other two modes, especially in the horizontal
	   direction.  All character attributes can be used
	   except BOLD. 

	 \Q - (Quality) High quality 3 pass printing.
	
	   In this mode the print head moves at one half
	   standard printer speed.  This is the default quality of
	   IMAGEPRINT. The print quality is excellent.	

	 \L - (Laser) High quality 6 pass printing.
	
	   In this mode, the print head moves at one half
	   standard printer speed.  Use this mode for your most 
	   important printing, or if your printer ribbon is
	   getting old. On some printers, 6 passes will be too bold,
	   or dark.

	The above print qualities are distinct from selecting
	standard printer draft mode when starting IMAGEPRINT.


      CHARACTER ATTRIBUTES:

	\B : BOLD
	   Toggle bold mode.  Bold characters appear darker and 
	   thicker in appearance. Example:

	     \bThis would print in bold, \c and this would not





								 15








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	\H : HALF HIGH

	   Toggle half high mode. Half high characters are compressed
	   in the vertical direction, much like subscript or
	   superscript characters appear on a standard dot matrix
	   printer.

	     \hThis would print half high, \cand this would not

	\I : ITALIC

	   Toggle italic mode. Italic characters lean to the right.

	     \iThis would print in italic, \cand this would not

	\U : UNDERLINE

	   Toggle underline mode. Characters received after this
	   command will be underlined. A space is considered a
	   character, and will be underlined too, unless formatting
	   (".EN") and left and right justification (".WW") are 
	   enabled, in which case only printable characters can be
	   underlined.

	     \uThis would print underlined, \cand this would not

	\W : DOUBLE WIDTH

	   Toggle double width mode. One double width character takes
	   up exactly 2 normal character widths.

	   If formatting is enabled (".EN"), you must not span spaces,
	   line feeds, or tabs in double width mode. If you do, an
	   error message will be displayed. The reason for this 
	   restriction is that a line may break at any point and, if
	   double width mode is still active, then the left margin of
	   the next line may not be correctly located. Double width
	   can, however, encase a word that contains soft or hard
	   hyphens.

	   Examples:

	     \wWord AnotherWord\w	     {ERROR}
	     \wOneword\w \wAnotherWord\w     {OK}
	     \wHy\-phen\-ated\w 	     {Soft hyphens - OK}
	     \wOver-ride\w		     {Hard hyphen - OK}







								 16








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


      CHARACTER OFFSETS:

	\^ : SUPERSCRIPT

	   Select superscripted printing for the following characters.
	   Use "\N" or "\C" to exit this mode.

	\V : SUBSCRIPT

	   Select subscripted printing for the following characters.
	   Use "\N" or "\C" to exit this mode.

	\N : NORMAL OFFSET

	   Select a standard offset for the following characters. The
	   offset is the distance above or below the standard print
	   position on a line. This command ends superscript and
	   subscript mode.

	   Examples:

	     \vThis would be subscript, \^this would be superscript
	     \nnormal offset


      CANCELLING CHARACTER ATTRIBUTES/OFFSETS:

	\C : CANCEL

	   Cancel all character attributes and offsets. This command
	   is useful because keeping track of the current state of the
	   toggling commands can become difficult.  Bold, half high,
	   italic, underline, and double width are all cancelled, plus
	   any superscripting and subscripting. 

      PRINT DENSITY:

	\> : 10 CPI

	   Select 10 characters per inch mode.	IMAGEPRINT defaults to
	   this density.

	\| : 12 CPI

	   Select 12 characters per inch mode.	In this mode, 96
	   characters will print on an 8" line.  The backslash is
	   immediately followed by the vertical bar character, which
	   often has a break in the middle.





								 17








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	\< : COMPRESSED

	   Select 17.1 characters per inch mode.  In this mode, 136
	   characters will print on an 8" line. 

	\P : PROPORTIONAL

	   Select proportional inter-character spacing.  This means
	   that a "W" will take up more space than a "!," for example.
	   The number of characters that can print on a line depends
	   on the accumulated character widths. 

	   Print density examples:

	     \<This would print compressed
	     \pthis would print proportionally
	     \|this would print at 12 cpi
	     \>and this would print at 10 cpi

      LINES PER INCH:

	\S : SIX LINES PER INCH

	   Select 1/6 inches inter-line spacing.  This is the default
	   value of IMAGEPRINT.  This command is identical in action
	   to the ".LI 6" dot formatting command.

	   This is the standard vertical line spacing of a dot matrix
	   printer.

	\E : EIGHT LINES PER INCH

	   Select 1/8 inches inter-line spacing.

      STRAIGHT THROUGH MODE:

	\[ : BEGIN STRAIGHT THROUGH MODE

	   Text received after this command is printed in standard
	   printer quality. The only backslash command recognized in
	   this mode is the "END STRAIGHT THROUGH MODE" command 
	   ("\]"). All other backslash commands received are printed
	   as normal text. This mode is useful for mixing standard
	   printing and IMAGEPRINT quality printing on the same page.
	   It is also useful for sending non-printing ASCII character
	   values (values below 31 decimal, 1F hex) to your printer.

	   Standard printing and IMAGEPRINT quality printing cannot be
	   successfully mixed on the same line. The character
	   placement and paper movement will not be correct.



								 18








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	\] : END STRAIGHT THROUGH MODE

	   Characters received after this command are printed in
	   IMAGEPRINT quality. All backslash commands are enabled
	   following this command.

      SOFT HYPHENS WHEN FORMATTING:

	\- : POTENTIAL WORD BREAK

	   If formatting has been enabled (".EN"), then a line can be
	   broken any place a soft hyphen "\-" appears in a word. To
	   minimize the size of gaps between words if right
	   justification is enabled, long words can be broken up into
	   sections with the soft hyphen.

	   Soft hyphen examples:

	     for\-mat\-ting   il\-lus\-tra\-tion

      PRINTING A BACKSLASH:

	\\ : DOUBLE BACKSLASH

	   To print a single backslash character, put double backslash
	   characters in the input text, with no intervening space.

      COLOR CONTROL:

	   If you have an Epson JX color printer, or a compatible,
	   IMAGEPRINT can control each line's color. It is not
	   possible to mix different colors on the same line. If more
	   than 1 color backslash command is on a line, the left-most
	   command is the one recognized for that line. The backslash
	   commands and the corresponding colors are:

	     \!  : BLACK    \&	: YELLOW     \%  : PURPLE
	     \@  : RED	    \*	: ORANGE     \$  : BLUE
	     \=  : GREEN


    FORMATTING COMMANDS 

	IMAGEPRINT has text formatting capability using individual
	commands that specify the page length, left and right margin,
	word wrap, etc. 

	You do not need to use IMAGEPRINT formatting if your word
	processor has already formatted your text, and you can use
	IMAGEPRINT backslash commands without using the text
	formatting commands.


								 19








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	You must explicitly turn on formatting with the ENABLE
	FORMATTING command (".EN"). The ".EN" command must come before
	any other formatting command. Otherwise, all text preceding
	".EN", including formatting commands, is printed literally.

	Each formatting command is preceded by a ".", which must be
	the first printable character on a line. Leading spaces or
	tabs are ignored. Formatting commands like this, that have a
	leading ".", are called dot commands. A dot command line is
	not printed, and only one dot command can be on a line. The
	command type is made up of two characters, upper or lower
	case, following the dot, separated from it by zero or more
	spaces. There must be no space between the two command
	characters. If there is an optional trailing variable, it is
	separated from the command type characters by zero or more
	spaces. The following dot commands are equivalent:

	  .lf3
	  .   LF 3
	  . lf	   3

	Depending on the type of command, a trailing variable can
	either be a literal string, or a relative or absolute
	numerical value. An example of an absolute numerical value in
	a command is ".LM 3". Following this command, the left margin
	will be set to column 3. An example of a relative numerical
	value in a command is ".RM -10". Following this command, the
	right margin is shifted ten columns to the left.

	If the formatting command normally expects a trailing
	variable, and it is missing, the default value is assumed. The
	default values of the variable parameters are:

	  .PN 1   (page number 1)
	  .PL 66  (page length = 66 lines, or 11 inches at 6 lines/inch)
	  .LS 1   (no extra gap between lines)
	  .LM 1   (left margin = column 1)
	  .RM 80  (right margin = column 80, unless you selected a
		   wide carriage printer)

	These commands are explained in the following sections. 

	Word wrap (".WW") is initially enabled, and there are no
	default headers or footers. If you want a top and bottom
	margin, you can define blank headers and/or footers.

	The diskette file TUTOR_2.TXT shows IMAGEPRINT formatting and
	backslash commands in use and has extensive comments.

	The character positions each backslash command takes up is
	taken into account during formatting. The extra width


								 20








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	generated by the DOUBLE WIDTH command is also taken into
	account. The double width and underline backslash commands
	should not span spaces or tabs or line feeds. Each individual
	word should be "wrapped:"

	  \wwide\w  \uunderline\u  \wsemi-detached\w  \why\-phen\w

	This is because a line may be broken at any point and the
	double width mode continuing on to the next line can cause
	margin shift and the underlining mode continuing on to the
	next line can cause leading spaces to be underlined.

	Compressed, 12 characters per inch and 10 characters per inch
	cannot be mixed on a line that is to be left and right
	justified. The left and right margins shift when switching
	density. Keep the entire document in one density or use the
	FORCE PRINTING formatting command (".FP") to clear the
	formatting buffer before changing density.

	If formatting has not been enabled, IMAGEPRINT recognizes
	tabs, line feeds, and form feeds. If formatting is enabled
	(".EN"), form feed characters are ignored. If formatting, use
	the ".PA" dot command to move to the next page. 

	.EN  : ENABLE FORMATTING

	  Default: not enabled. 

	  If you are going to use IMAGEPRINT's dot command formatting
	  capabilities, include the enable command at the very top of
	  your text file, before any other dot command or printable
	  text. Once ".EN" has been sent, all of the dot commands are
	  recognized. Otherwise no scanning for dot commands takes
	  place and all text is printed literally.

	  Formatting is not initially enabled because you may have
	  already formatted your text with a word processor, or you
	  may not want formatting. Backslash commands are always
	  recognized.

	  When ".EN" is first encountered in the input text the values
	  for variable parameters are set to the default values. ".EN"
	  should only be sent once. There is no "disable formatting"
	  command. Once enabled, formatting is active until IMAGEPRINT
	  returns to DOS. You can get the effect of disabled
	  formatting if you send the ".NW" command and set the left
	  margin to 1 and the right margin to the width of your 
	  printer. If you have defined headers and footers, you can
	  cancel them with the ".KI" command.




								 21








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	.PL x  :PAGE LENGTH

	  x default: 66 lines, or 11 inches at 6 lines/in.

	  Set page length to x lines. If you don't specify headers and
	  footers, the entire page is available to you for printing
	  text. The page length command normally appears once in a
	  document, before the first printable text.

	.PN x : PAGE NUMBER

	  x default: 1

	  Set the current page number. If an "&&" string appears in a
	  header or footer, the current page number will be
	  substituted. The page number increments automatically as
	  each page is printed. 

	.PA : MOVE TO NEXT PAGE 

	  This command forces the current contents of the print buffer
	  to be sent to the printer and moves the paper to the top of
	  the next page. If you are already at the top of a new page,
	  this command will have no effect.

	.PR  : PRINTING PAGE RANGE

	  This dot command prompts you for the starting and ending
	  pages to print. The page numbers correspond to the count of
	  pages actually printed, not the page number set by the ".PN"
	  command. The ".PR" command avoids unnecessary printing,
	  especially if only one page in a long document needs
	  reprinting.

	 HEADERS AND FOOTERS:

	  A header is the text that automatically prints at the top of
	  each page and a footer is the text that automatically prints
	  at the bottom of each page. If you want top and bottom
	  margins, use blank header and footer lines.

	  IMAGEPRINT allows a variable number of header and footer
	  lines on both even and odd pages. You might have 3 even page
	  headers, 5 odd page headers, 2 even page footers and 3 odd
	  page footers. If you specify only 1 kind of header or 
	  footer, it will print on both even and odd pages.

	  Three dots "..." in a header or footer string cause
	  justification to take place:

	    .EF ...even page footer, right justified


								 22








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	    .EFeven page footer, left justified...
	    .EF ...even page footer, centered...
	    .EFleft justified...centered...right justified

	  If the header or footer is longer than the width specified
	  by the ".SW" (set width) command, it will be truncated.

	  Headers and footers do not shift if the left or right 
	  margins are altered. Shift the headers and footers with the
	  ".EE" and ".OE" commands.

	  If the header or footer string contains an "&&" string, then
	  the current page number is substituted for the "&&".

	  The header/footer storage pool holds about 950 characters.
	  This is more than most people will ever need. If you run out
	  of room by specifying a lot of headers and footers (and get
	  the error message), you may not be taking advantage of
	  "...". Headers and footers are justified and expanded as
	  they are printed and do not take up much room in storage.

	  The file TUTOR_2.TXT shows all four types of headers and
	  footers in use.

	.EH string  : EVEN PAGE HEADER

	  Default: empty

	  As an example, the following dot commands would cause a 4
	  line header to print on all even pages, and all odd pages
	  too, if no odd header had been defined. The printing header
	  line would be preceded by 2 blank lines and followed by 1
	  blank line. The first line of document text would be
	  immediately below the last header line, on line 5.

	    .EH 
	    .EH 
	    .EH ... IMAGEPRINT Demonstration page &&
	    .EH

	.OH string  : ODD PAGE HEADER

	  Default: empty

	  Same format as ".EH" above.

	.EF string  : EVEN PAGE FOOTER

	  Default: empty

	  Same format as ".EH" above.


								 23








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	.OF string  : ODD PAGE FOOTER

	  Default: empty

	  Same format as ".EH" above.

	.SW x  : SET HEADER AND FOOTER WIDTH

	  default: 80 (unless 136 column printer selected with "-+"
		       on command line) 

	  This command allows you to set the length of the headers and
	  footers and thus the header or footer right margin when
	  using justification ("..."). Headers and footers are
	  truncated if they are longer than the ".SW" value.

	.KI  : KILL HEADER AND FOOTER DEFINITIONS

	  This command cancels all header and footer definitions. Use
	  it to change or remove your headers and/or footers in the
	  middle of a document. Be sure to move to the top of a new
	  page (by using ".PA") before issuing this command. Also,
	  specify any new headers and/or footers immediately after a
	  ".KI" command.

	.LI x  : LINES PER INCH 

	  x default: 6

	  Only two values for x are recognized: 6 or 8 lines per inch.
	  All other values are ignored. Six lines per inch works well
	  with proportional, 12 and 10 cpi characters. Eight lines per
	  inch works well with compressed (17.1 cpi) characters.

	  Switching the lines per inch value in the middle of printing
	  a document can cause page alignment problems. 

	.LS x  : LINE SPACING

	  x default: 1

	  x is the number of line feeds between text lines. For 
	  example, to print on every other line, use ".LS 2".

	.PP x  : START PARAGRAPH

	  x default: 0

	  The paper will move down 1 line and the first line of the
	  new paragraph will be indented x spaces.



								 24








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	.WW  : WORD WRAP WITH JUSTIFICATION

	  Default: enabled

	  Turn on left and right justification within the boundaries
	  of the left and right margins. If the line is too short,
	  spaces are inserted into the line following punctuation
	  characters ("." ":" ";" "?" "!"). If IMAGEPRINT quality mode
	  was selected, and the line is still not left and right
	  justified, then the line is micro-justified by increasing
	  the gap between words by an equal amount. If draft mode was
	  selected when IMAGEPRINT was started, then justification is
	  accomplished by padding with spaces.

	  The soft hyphen ("\-") backslash command can be used to
	  break extra long words up into smaller segments so less
	  spaces are needed to justify a line. For example, "dynamite"
	  can be broken up into 3 sections: "dy\-na\- mite". Lines
	  will also break at hard hyphens: "semi-detached".

	  Proportionally spaced lines ("\P") cannot be right
	  justified.
	
	  This command turns off the no word wrap (".NW") and ragged
	  right (".RR") modes.

	.NW  : NO WORD WRAP

	  Default: disabled

	  Text sent after this command will be printed literally and
	  will not be right justified. This command turns off the word
	  wrap (".WW") and ragged right (".RR") modes.

	  To keep a table or chart from being automatically formatted,
	  use the ".NW" command to turn off formatting. For example:

	    .nw  disable formatting
		 Qty	 Code	 Price	 Total
		 ---	 ----	 -----	 -----
		   1	 3232	 65.95	 65.95
	    .ww  enable formatting

	.RR  : RAGGED RIGHT MARGIN

	  Default: disabled

	  Format text, printing lines between the left and right
	  margins, like ".WW", but don't right justify. This command
	  turns off the word wrap (".WW") and no word wrap (".NW")
	  modes.


								 25








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	.LM x  : LEFT MARGIN

	  x default: 1

	  Set the left margin. This is the starting column for
	  printing in both the word wrap, no word wrap and ragged
	  right modes.

	.RM x  : RIGHT MARGIN

	  x default: 80 (136 for wide carriage printers)

	  Set the right margin. No text will print beyond this column
	  if the word wrap (".WW") or ragged right (".RR") modes are
	  enabled.

	.EE x  : EXTRA GUTTER, EVEN PAGES

	  x default: 0

	  This value is added to both the left margin of your text and
	  the left margin (column 1) of the headers and footers. In
	  the case of even numbered pages, this value is often zero or
	  negative to keep the text away from the center binding of a
	  publication.

	.OE x  : EXTRA GUTTER, ODD PAGES

	  x default: 0

	  The same as ".EE" above, but for odd pages. This value is
	  often positive.

	.TI x  : TEMPORARY INDENT

	  x default: 0

	  Indent x spaces for the start of the next line. This indent
	  is added to the value of the left margin, not the left side
	  of the paper. The current contents of the print buffer will
	  be printed before the paper moves 1 line feed and the 
	  temporarily indented line is printed. 

	.CE    : CENTER LINE

	  Center the following line of text between the left and right
	  margins. The line to be centered should be at the left
	  margin, with no leading spaces.





								 26








					       IMAGEPRINT Version 3
     --------------------------------------------------------------


	.FP    : FORCE PRINTING 

	  Any characters in the print buffer will be printed, even if
	  word wrap mode is enabled and the right margin has not been
	  reached. You must use this command to empty the print buffer
	  before changing the left or right margins. Otherwise the
	  buffered text will print within the new margin settings.

	.LF x  : FORCE PAPER MOVEMENT

	  x default: 1

	  Move the paper x lines. If x is greater than the remaining
	  lines on the current page, the paper will move to the top of
	  the next page only. If you are already at the top of a new
	  page, this command will have no effect.

	.ST   : STOP BEFORE PRINTING PAGE

	  This command will cause IMAGEPRINT to pause between pages,
	  so if you are printing on single sheets of paper, you can
	  insert the next piece of paper in your printer before 
	  resuming printing. A prompt to "Press a key when ready" will
	  appear on the screen. 

	.!! \? : IMMEDIATE BACKSLASH EXECUTION

	  This command causes the following backslash command,
	  separated from ".!!" by zero or more spaces, to be acted on
	  immediately. Only a single backslash command may follow a
	  ".!!". The question mark represents the character(s)
	  following the backslash.

	  Suppose you want to print a document, including headers and
	  footers, at 17.1 (compressed) characters per inch density,
	  rather than the default 10 cpi density. Usually backslash
	  commands, embedded in a line of text, are acted on as that
	  line of text is printed. If you precede the first line of
	  text in your document with "\<", by the time the first line
	  of text prints, any headers will have already printed at 10
	  cpi. To get around this, precede any printable text with
	  ".!! \<".

	.. string : COMMENTS

	  If the dot in column 1 is followed by another dot, separated
	  from it by zero or more spaces, then the entire line is
	  considered to be a comment line, and is ignored by
	  IMAGEPRINT. For example:

	    .. This is a comment line


								 27








							   APPENDIX
     --------------------------------------------------------------


    IMAGEPRINT BACKSLASH COMMANDS SUMMARY

	\01 ... \99  = select font

	\F	     = select (F)ast mode - no bold
	\Q	     = select (Q)uality mode (3 passes)
	\L	     = select (L)aser quality mode (6 passes)

	\B	     = toggle (B)old attribute
	\H	     = toggle (H)alf-high attribute
	\I	     = toggle (I)talic attribute
	\U	     = toggle (U)nderline attribute
	\W	     = toggle double (W)idth attribute

	\N	     = (N)ormal offset
	\^	     = Superscript offset
	\V	     = Subscript offset

	\C	     = (C)ancel character attributes & offsets

	\>	     = select 10 characters per inch
	\|	     = select 12 characters per inch
	\<	     = select CONDENSED (17.1 characters per inch)
	\P	     = select (P)roportional spacing

	\S	     = (S)ix lines per inch
	\E	     = (E)ight lines per inch

	\[	     = start straight through mode
	\]	     = end straight through mode

	\\	     = "\"

	\-	     = soft hyphen (if formatting enabled with ".EN")

	****JX-80 color control****
	\!	     = black
	\@	     = red
	\$	     = blue
	\%	     = purple
	\&	     = yellow
	\*	     = orange
	\=	     = green










								 28








							   APPENDIX
     --------------------------------------------------------------


    IMAGEPRINT FORMATTING COMMANDS SUMMARY


	.EN    (EN)able formatting - This command must be received
	       before any other formatting commands are recognized.
	.PL x	       x = (P)age (L)ength
	.PN x	       x = (P)age (N)umber
	.PR	       Prompt user form (P)age (R)ange to print
	.PA	       Move to top of next (PA)ge
	.OH string     define (O)dd page (H)eader string
	.EH string     define (E)ven page (H)eader string
	.OF string     define (O)dd page (F)ooter string
	.EF string     define (E)ven page (F)ooter string
	.SW x	       x = (S)et (W)idth of headers, footers
	.KI	       (K)ill all header and footer definitions
	.LI x	       x = (L)ines per (I)nch (6 or 8 only)
	.LS x	       x = (L)ine (S)pacing
	.PP x	       x = temporary indent for new (P)aragra(P)h
	.WW	       Enable (W)ord (W)rap with justification
	.NW	       (N)o (W)ord wrap
	.RR	       (R)agged (R)ight margin
	.LM x	       x = (L)eft (M)argin
	.RM x	       x = (R)ight (M)argin
	.EE x	       x = (E)ven page (E)xtra left gutter
	.OE x	       x = (O)dd page (E)xtra left gutter
	.TI x	       x = (T)emporary (I)ndent for next line
	.CE	       (CE)nter next text line between margins
	.FP	       (F)orce (P)rinting of text buffer
	.LF x	       x = number of (L)ine (F)eeds
	.ST	       (ST)op before printing each page
	.!! \?	       Execute a backslash command immediately
	..	       Comment


    ERROR MESSAGES

      ERROR - Input text contains non-printing characters
      Aborting ImagePrint

	The text file you want to print with IMAGEPRINT is not plain
	ASCII.	It contains either hidden word processor information
	or printer control codes.  Check your word processor's
	documentation for information on how to save your work as an
	ASCII text file.

      ERROR - Font file not found or invalid: ????????

	Either the font file you specified is not on the currently
	active drive, or your FONTS environment string is incorrect
	(see Section "Installing ImagePrint") or the font file has
	been corrupted. 


								 29








							   APPENDIX
     --------------------------------------------------------------



	If you don't specify a font, FONT1 (Cubic) is the default.

      ERROR - Input file not found: ????????

	Your text input file cannot be found. Make sure you have
	spelled the name correctly and included any possible file name
	extension.

      ERROR - Invalid backslash command: '\?'

	An unrecognizable backslash command has been found. The 
	question mark above represents the erroneous character(s),
	which will be displayed on your screen. 

      ERROR - Invalid dot formatting command: ??

	A recognizable IMAGEPRINT formatting command does not follow a
	dot (".") on a line. A line contains a dot formatting command
	if the first printable character is a "."

      ERROR - Invalid command following '.!!' :  ??

	The string following ".!!" does not start with "\". Only
	backlash commands can follow the immediate execute command.

      ERROR - Double width active beyond word

	A "\W" double width backslash command must not cross a line
	feed or tab or space. Examples: 

	  \wtwo words\w 	  {Wrong. Double width crosses space}
	  \wWORD\w		  {Correct}
	  \why\-phen\-ated\w	  {Hard, soft hyphens can be in word}

      ERROR - Not enough room in Header/Footer buffer

	The header/footer buffer save area is full, or there is no
	room for the size of header/footer you are trying to add. If
	you are right justifying text with spaces use "..." to do the
	same thing. It takes up less room.

      ERROR - Invalid input
	 or
      ERROR - Value out of range

	You have entered an invalid page number in response to the
	".PR" dot formatting command.





								 30








							   APPENDIX
     --------------------------------------------------------------


      ERROR - Start greater than end

	You have entered a starting page that is greater than the
	ending page in response to the ".PR" dot formatting command.


    TECHNICAL NOTES

	The effective dot density of IMAGEPRINT is 216 dots per inch
	vertically by 240 dots per inch horizontally.

	IMAGEPRINT normally positions the print head 1/14 of an inch
	above the next print line. This is done so that unusually tall
	characters can print correctly. If you need exact paper 
	positioning, just before running IMAGEPRINT position the top
	of the page slightly lower, relative to the print head, than
	you would otherwise, because the paper will move 1/14 of an
	inch before the first line is printed.

	IMAGEPRINT works by driving a printer in dot graphics mode.
	Printing an 80 column line of text means that about 6000 bytes
	are sent to a printer. If a transmission error occurs and a
	byte or two is lost, then the graphics byte count is wrong,
	and you can end up printing a lot of garbage. If this happens,
	wait for the printer to resynchronize with IMAGEPRINT. This
	shouldn't take more than 1 print pass.

	Just as on a standard dot matrix printer, the line graphics
	characters do not print correctly in half-high mode.

	If you print in draft mode, you should avoid using backslash
	commands for which your printer has no corresponding built-in
	function. For example, if a "\P" proportional spacing command
	is detected in the input text, then IMAGEPRINT will send
	ESCAPE "p" (std. Epson escape sequence) to your printer. If
	your printer isn't capable of proportional spacing and doesn't
	recognize the command, then the letter "p" may print.


    THE IMAGE PRINTING UTILITIES

	THE IMAGE PRINTING UTILITIES includes METATEXT Version 3 and
	IMAGEPRINT Version 3, along with 16 fonts and a printed manual. 	

	Excerpts from press reviews:

	  "I use only one RAM-resident utility, The IMAGE Printing
	  Utilities, which give me near-laser-quality printing from my
	  $200 dot-matrix printer."

	       George Campbell, COMPUTE!'s PC Magazine, November '88


								 31








							   APPENDIX
     --------------------------------------------------------------


	  "Inexpensive utilities that coax startling performance out
	  of your 9-pin dot matrix printer."

	       Jonathan Matzkin, PC Magazine, July '88

	  "Metatext's characters differ from those bundled with 
	  NicePrint. They're much clearer; in fact they're as good as
	  those printed on a 24-pin printer."

	       PC Resource, December '88

	  "The IMAGE Printing Utilities from IMAGE Computer Systems
	  solves the dot matrix print quality problem. This wonderful
	  set of programs gives your dot matrix printer letter quality
	  print"

	       James L. Yacavone III, Clearwater Newspapers, Inc.

	  "I was astounded when it ran on a beat up Epson FX-100 at
	  work, and it performed almost as well on the IBM Proprinter
	  I use at home."

	       Michael J. Himowitz, Baltimore Evening Sun

	METATEXT Version 3 offers the same high quality printed output
	as IMAGEPRINT, but is much easier and simpler to use.
	METATEXT DOESN'T ALTER THE REGULAR OPERATION OF YOUR COMPUTER
	OR SOFTWARE IN ANY WAY.  Basically, all you have to do is
	load METATEXT and then use your computer as you normally
	would.	
	
	Once METATEXT has been loaded, it becomes part of your
	computer's operating system, automatically intercepting and
	enhancing data you send to your printer.  You do not have to
	exit your word processor to print, as you do with IMAGEPRINT.
	You can toggle METATEXT on and off by using a user-selectable
	"Hot-Key" combination on your keyboard.  No extra hardware is
	needed. 

	METATEXT is designed to be compatible with word processors,
	data base programs, spreadsheets, etc.	It is compatible with
	Lotus 123, Symphony, Word, WordStar, WordPerfect, Multimate,
	PC-Write etc., because it recognizes the control codes of an
	IBM or Epson printer.

	Up to 8 fonts can be loaded with METATEXT, allowing instant
	font switching.  When only one font is loaded, METATEXT takes
	up about 35K of RAM.

	The sixteen fonts that are included are: Courier, Cubic,
	Elite, Italic, Orator, Typewriter, Roman, Outline, OCRA, OCRB,


								 32








							   APPENDIX
     --------------------------------------------------------------


	Small, Pica, Block, Graphics, Spreadsheet and Clifton.	You
	can see these fonts by running the FONTDEMO program included
	on the IMAGEPRINT disk. 
	
	THE IMAGE PRINTING UTILITIES sell for $89.95, plus $3.00
	shipping and handling.


    RULES AND REGULATIONS

      EVALUATING IMAGEPRINT

	IMAGEPRINT is (C) Copyright IMAGE Computer Systems 1985, 1986,
	1987, 1988, 1989. Non-registered users are granted a limited
	license to use IMAGEPRINT on a trial basis for the purpose of
	determining whether IMAGEPRINT is suitable for their needs.
	Use of IMAGEPRINT, except for this limited purpose, requires
	registration. Use of non-registered copies of IMAGEPRINT by
	any person, business, corporation, governmental agency or
	other entity or institution is strictly forbidden.


      COPYING IMAGEPRINT

	An IMAGEPRINT distribution diskette has only one font, Cubic.	
	Individuals may make copies of the IMAGEPRINT distribution
	diskette and give it to friends or acquaintances.  There must
	be no fee involved.

	Computer clubs may also copy the diskette and give it to their
	members.  There must be no fee involved, other than a small
	fee for the cost of making a copy of the diskette.

	The IMAGEPRINT distribution diskette must be unaltered if
	copied and given away as a diskette or transmitted by any
	telecommunications link or made available on a computerized
	"bulletin board."  The programs and documentation are a 
	complete entity that must not be separated or modified in any
	way.

	REGISTERED IMAGEPRINT, with more than one font file, may not
	be copied,  except for backup purposes, by the registered
	owner.	It is a violation of federal law for anyone to use
	anything other than the distribution version of IMAGEPRINT
	without first registering with IMAGE Computer Systems.	


      DISCLAIMER

	IMAGE Computer Systems makes no representations or warranties
	with respect to IMAGEPRINT programs or documentation and


								 33








							   APPENDIX
     --------------------------------------------------------------


	specifically disclaims any implied warranties of
	merchantability or fitness for any particular purpose.	

	In no event shall IMAGE Computer Systems be liable to the
	purchaser or any user for any damages, including any
	incidental or consequential damages, expenses, lost profits,
	lost savings, or other damages arising out of the use or
	inability to use the product.					













































								 34










				  ORDER FORM
                                                        (PC-SIG Aug 89)
       ****************************************************************
			    IMAGE Computer Systems
				 P. O. Box 647
				Avon, CT 06001
			      Ph: (203) 678-8771
       ****************************************************************

	Name			    ___________________________________

	Company 		    ___________________________________

	Address 		    ___________________________________

	Address, Zip Code	    ___________________________________

	Daytime phone number	    ___________________________________


	__ ImagePrint Version 3 Registration Disk	       $42.95
	   Latest version, 10 fonts, printed manual


	__ The IMAGE Printing Utilities 		       $89.95
	   Described in appendix section of documentation.
	   Includes memory-resident Metatext, ImagePrint,
	    16 fonts, printed manual


	SHIPPING AND HANDLING FOR ALL ORDERS			$3.00


	Add $3.00 to cover cost of air mail shipping
	if you are outside of North America		    __________


						 Subtotal   __________

	           Connecticut residents add 8% sales tax   __________

					       Total	    __________


	__ Please send more information about The IMAGE Printing
	   Utilities


	Payment is by:

	__ Check (MUST be payable in US funds from a US bank)
	
	__Money order/Bank draft   __ MasterCard      __Visa

	Card number _______________________ Expiration date ___________

	Card Holder Signature _________________________________________

	Card Holder Name (Please Print) _______________________________






```
{% endraw %}

## TUTOR_1.TXT

{% raw %}
```


                            TUTOR_1.TXT
        
        This file demonstrates ImagePrint backslash commands. Copy 
        this file to your printer (COPY TUTOR_1.TXT PRN:) to see 
        the commands, or print it using ImagePrint (IP TUTOR_1.TXT) 
        to see their effect. The most common commands are: 

          The following word is \Bbold\C.

          The following word is \Uunderlined\C.

          The following word is \Iitalicized\C.

          The following words are \Hhalf high\C.

          The following words are \Wdouble width\C.

          The following word is \^superscripted\C.

          The following word is \Vsubscripted\C.

          The following word is \<COMPRESSED.\>

          The following words are \|printed at 12 characters per inch.\>

          The following words are \Pproportionally spaced.\>

        To print a backslash, double them up: "\\\\". Backslash commands 
        can be in either upper or lower case.  For example, "\\B" is 
        equivalent to "\\b".

        Backslash commands can be combined:

          \b\wBOLD DOUBLE WIDTH\c

          \<\hCOMPRESSED HALF HIGH\c\>

          \b\i\ubold italic underlined\c

        Backslash commands can be used on a character-by-character basis:

          U\hN\cE\hV\cE\hN\c vertically
        
          \wU\cN\wE\cV\wE\cN horizontally
        

                            END OF TUTOR_1.TXT






```
{% endraw %}

## TUTOR_2.TXT

{% raw %}
```
.en     Enable formatting. Once enabled, it cannot be disabled.  If
..      this was not the first command in this file then EVERYTHING
..      would print.
..
..      *************
..
..      Note  - If you want to print a "literal" copy of your file,
..      don't use ImagePrint's formatting capabilities.
..
..      *************
..
..      The next command is the IMMEDIATE ACTION command. The comm-
..      and following the ".!!" goes into  effect  immediately.  We
..      use it here to select 12 characters per inch  (cpi).  If we
..      selected  12  cpi by placing the backslash command in front
..      the first text line,  the headers on the first  page  would
..      print at 10 cpi,  the default density,  because the headers
..      are printed before the main text section is analyzed.
.!! \|
..   
..      No font backslash command is in this file,  so  the  entire
..      file will print using the default font, FONT0.
..
..      TUTOR_2.TXT - IMAGEPRINT DEMONSTRATION FILE
..
..
..      This file demonstrates many the  ImagePrint  formatting and
..      backslash commands.  Type  "IP TUTOR_2.TXT" to see the
..      printed result. Some of the  dot formatting  commands shown
..      here don't  contribute to the format of the printed output,
..      e.g. setting a parameter to the default value. 
..
..      Backslash  commands  are used  without comment because they
..      are easy to understand and the best way to learn them is to
..      see them in use. "\-" is a soft hyphen.
..
..      Any line starting with a "." is  interpreted  as a command.
..      The "."  doesn't have to be in the 1st column,  but it does
..      have to be the first printable character on a line. The two
..      following lines are equivalent:
        .PL 66
.PL 66
..
..      
..      If the next printable character is another ".", the line is
..      ignored. This allows comments to appear in the source text,
..      but not be printed. This allows private notes, etc.
..
..      The two letter command can be separated  from  the  dot  in
..      column 1 by zero or more spaces. The variable parameter (if
..      one is needed) follows the  two  letter  command, separated
..      from  it by zero or more spaces. Each letter of the command
..      can be in upper or lower  case.  A comment  can  follow the 
..      variable parameter, separated from it by at least one space.
..      The following page length formatting commands are all equiv-
..      alent:
..
.pl 60  comment - set page length to 60 lines
     .  pl60
.       PL      60      set page length to 60 lines
.pl60
.pL60
..
..
.ww     Word Wrap -  enable left and right justification within the
..      left and right margins. This is the default state.
..
..
.pl 66  Page Length is 66. This is the default value.
..
..
.pn 1   Page Number = 1.  This is the default starting page number.
..      "&&" in  the header or  footer  strings  is replaced by the
..      current page number.
..
..
.oe 5   Odd Extra -  Shift everything on odd pages 5 extra  columns
..      to the right.
.ee -5  Even Extra -  Shift  everything  on even pages 5 columns to
..      the left.
.oe     No extra spaces on odd pages.
.ee     No extra spaces on even pages.
..
..
.li 8   8 Lines per Inch (lpi). The default is 6 lpi.
.li 6   Change  back  to  6  lpi.  Do not change the inter-line gap 
..      after you have started printing a document because the paper
..      alignment will  not  be correct.
..
..
.sw 65  Set Width of headers and footers to 65  columns.  The  left
..      and  right  justification  and centering of the headers and
..      footers will occur within this range.
..
..
..      Odd page Headers
.oh
.oh...\bImagePrint formatting\b  \iPage &&\i
.oh___________________________________________________________________________
.oh
.oh
.oh
..
..      Even page Headers
.eh
.eh                   \iPage &&\i  \bImagePrint formatting\b...
.eh___________________________________________________________________________
.eh
.eh
.eh
..
..      Odd page Footers
.of
.of
.of___________________________________________________________________________
.of    ...format demonstration
.of
.of
.of
.of
..
..      Even page Footers
.ef
.ef
.ef___________________________________________________________________________
.ef                     format demonstration...
.ef
.ef
.ef
.ef
..
..
.lm 5   Left Margin - Set the left margin to the 5th column.
..
.rm 60  Right Margin - Set the right margin to the 60th column.
..
..
..      CEnter the next line.  The cancel backslash command "\C" is
..      used to cancel the bold  (\B),  underline (\U)  and  double
..      width (\W) commands.
..
.ce
\u\b\wImagePrint\w \wDemonstration\c
.ce
\u\bDot Formatting and Backslash Commands\c
..
..
.lf 2   Line Feed - Space down 2 lines.
.ti 3   Temporary Indent of 3 from left margin.
This is the demon\-str\-ation file for Image\-Print \udot\u
\ufor\-mat\-ting\u and
..
..      Here are comment lines right in the middle of the text
..
\uback\-slash\u com\-mands. This para\-graph is left and right jus\-ti\-fied
be\-cause Word Wrap mode is en\-abled. It could be dis\-abled with the ".NW"
no word wrap com\-mand.
Each
word
of
this
sen\-tence
was
typed
on
a
se\-par\-ate
line.
..
..
.fp     Force Printing of buffer.
.pp     New paragraph
..
.lm +15  Add 15 to the current Left Margin.
..
Let's demon\-strate some of the back\-slash com\-mands:
.lf
\wThe\c \bquick\c \w\hbrown\c \ifox\c jumped  \^over\c  \b\ithe\c
\wlazy\c \ucow\c. \i\uThe\c  \uquick\c  \bbrown\c  \h\ifox\c
\i\bjumped\c \h\^over\c \i\b\wthe\c \vlazy\c \i\u\w\bcow\c.
No\-tice that the space the back\-slash com\-mands take up in the file is
ac\-count\-ed for when left and right jus\-ti\-fy\-ing text. The ex\-tra width
gen\-er\-at\-ed by the doub\-le width com\-mand is al\-so ac\-count\-ed for.
..
.lf
.lm 5
.rm -15
The left mar\-gin has just been set back to the 5th co\-lumn and
the right mar\-gin has moved left 15 co\-lumns. The line spac\-ing 
.ls 2
dis\-tance has just been changed to cause the text to be printed
on every other line. If for\-mat\-ting has been en\-abled, Image\-Print feeds
the paper to the top of the next page when the end-of-file is reached.
..
.fp
.ls     Single spaced lines again
.rm +15
..
The next page has the right margin set to column 25 
and the left margin set to 1. This provides a thin 
column of text suitable for cutting & pasting into a 
multi-column newsletter.
..
.pa     Unconditionally  move  to  the next page. If the paper has
..      moved to the top of a new  page and no text has printed yet,
..      ".pa" will have no effect.
..
.rm 25
.lm 1
Text here is print\-ed in a sin\-gle nar\-row strip,
pro\-vid\-ing a ru\-di\-men\-tary desk\-top 
pub\-lish\-ing ca\-pa\-bil\-ity.
.pp
This is the end of the tu\-tor\-ial file. Be sure to 
look at TUTOR_2.TXT with your word pro\-ces\-sor 
be\-cause there are a lot of non-print\-ing com\-
ments and ex\-plan\-ations con\-tained in it...  
..
..      This is the end of the demonstration.  It was unnecessary
..      to force a page  feed  (".PA");  the paper  automatically
..      feeds to the top of the next page when ImagePrint finishes
..      if formatting had been enabled.
```
{% endraw %}

## UTILS.DOC

{% raw %}
```












                           "CONTROL"  and  "ENHANCE"


                          for IBM Personal Computers

                                      and

                   IBM/Epson/Compatible Dot Matrix Printers



























                   (C)Copyright IMAGE Computer Systems 1989

                              All Rights Reserved




















      TABLE OF CONTENTS

        CONTROL

          What is CONTROL? .............................. 1

          Files included with CONTROL ................... 1

          Loading CONTROL ............................... 1

          Configuring CONTROL ........................... 2

          CONTROL Error Messages ........................ 4

        ENHANCE

          What is ENHANCE? .............................. 5

          Loading ENHANCE ............................... 6

          ENHANCE Error Messages ........................ 7









































                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      WHAT IS CONTROL?

        CONTROL is a memory-resident program that allows you to easily 
        access the features of your printer. Simple commands, embedded 
        in your printed text, are converted into printer control 
        codes. You can also define text substitutions that allow you 
        to "boiler-plate" letters, forms, etc. 

        Configuration files allow you to specify what effect each 
        embedded command has. 

        CONTROL can be removed from memory without rebooting your 
        computer. 


      FILES INCLUDED WITH CONTROL

        The files are:

          CONTROL.EXE     The main memory-resident program.

          REM-CTRL.EXE    Removes CONTROL from memory.

          CONTROL.DAT     Sample data file for Epson or IBM printers. 
                          It contains substitution definitions that
                          select bold, double width, etc.

          SAMPLE.DAT      Sample data file for text. It contains 
                          example text substitutions.

        Both of the .DAT files are plain "ASCII" files. They contain 
        comments to help you understand their contents. 


      LOADING CONTROL

        The syntax for loading CONTROL is:

          CONTROL  [-Tx]  [configuration_file]  [printer]

        All bracketed items following CONTROL are optional.

        The "-Tx" option allows you to select an alternate trigger 
        character for the embedded commands contained in the text that 
        you are sending to your printer. The character following the 
        "T" (here shown as an "x") becomes the new trigger character. 
        The default trigger character is a backslash ("\"). A typical 
        example of an embedded command would be: 

          \BThis would print as bold, \Cand this wouldn't.



                                                                  1








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        In the above example, "\B" turns on the bold feature of your 
        printer, and "\C" turns it off. (The "\B" and "\C" commands 
        could mean something entirely different; they are used here 
        only for the purpose of showing commands embedded within 
        text.)

        The trigger character is always immediately followed by a 
        character that identifies which substitution string is to 
        replace the embedded command. Upper and lower case are 
        equivalent for the second character. For example, "\b" and 
        "\B" are the same. 

        The "configuration_file" option allows you to select an 
        alternate configuration file. The default configuration file 
        is CONTROL.DAT. To load SAMPLE.DAT instead, type:

          CONTROL SAMPLE.DAT
        
        The "printer" option allows you to use CONTROL with a printer 
        connected to a printer port other than the default LPT1: 
        (PRN:). "Printer" can be LPT1:, LPT2: or LPT3:. For example, 
        to control the printer connected to LPT2:, type:
           
          CONTROL LPT2:

        To remove CONTROL from memory, run REM-CTRL from the DOS
        prompt.


      CONFIGURING CONTROL

        The CONTROL configuration file determines what strings are 
        substituted for the embedded commands contained in your text. 
        
        The default CONTROL.DAT file contains the following 
        substitution definitions for an Epson or IBM printer: 
        
          \B    :       turns on (B)old printing
          \C    :       (C)ancels bold, underline, double width
          \E    :       turns on (E)ight lines per inch printing
          \N    :       turns off superscript and subscript
          \S    :       turns on (S)ix lines per inch printing
          \U    :       turns on (U)nderlining
          \V    :       turns on subscript ("arrow" points down)
          \W    :       turns on double (W)idth
          \^    :       turns on superscript ("arrow" points up)
          \<    :       turns on compressed mode
          \>    :       turns on 10 characters per inch mode

        Configuration files must be in "ASCII" format. The file must 
        contain only printable characters ("A...Z, 0...9"), with no 


                                                                  2








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        word processor or printer control codes. Most word processors 
        have a facility for editing and saving ASCII files. 

        You may find the following explanation of the contents of a 
        configuration file easier to understand if you first copy 
        CONTROL.DAT to your printer with the following command:

          COPY CONTROL.DAT PRN:

        The substitution definitions contained in the configuration 
        file consist of a header character, followed by a colon, 
        followed by the substitution string. For example, to define 
        the string that will be substituted for "\B": 

          B: {ESC} "E"

        In the above example, each occurence of "\B" in your text will 
        be replaced by the ESCAPE character, immediately followed by 
        an upper case E. This is the IBM or Epson command for bold 
        printing.

        Comments in a definition file are enclosed by parentheses "(" 
        and ")".

        Special control character representations recognized are:

          {ESC}   This is the escape character (decimal 27, hex 1B)
          {LF}    This is a line feed character
          {CR}    This is a carriage return
          {NL}    This is a newline (line feed, plus carriage return)
          {TAB}   This is a tab character
          {FF}    This is a form feed character

        Not all string substitutions have to be printer control commands. 
        You can define ordinary text substitutions. For example:

          A: "This is what will print if '\A' is sent to the printer"

        The parsing of the configuration file uses the following 
        rules:

          comment ::= (anything enclosed in parentheses)
          substitution definition ::= header & body
          header ::= alpha & :
          alpha ::= ASCII characters greater than 32 (hex 20)
          body ::= (string | number | control character) & separator
          string ::= "anything enclosed in double quotes"
          number ::= integer <= 255
          control character ::= {ESC} | {LF} | {CR} | {NL} | {TAB} | {FF}
          separator ::= SPACE | COMMA | TAB | LF | CR | FORMFEED



                                                                  3








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      CONTROL ERROR MESSAGES

        "ERROR - DOS version 2.0 or higher needed"

          CONTROL doesn't run under DOS versions earlier than 2.0.

        "ERROR - Printer specification bad"

          You have specified an invalid printer port. The default is
          LPT1: (PRN:). You can specify LPT2: or LPT3:.

        "ERROR - Configuration file not found: ????????"

          CONTROL defaults to reading CONTROL.DAT. You can specify
          another file on the command line when loading CONTROL. In any
          case, CONTROL is unable to find the configuration file.

          The question marks represent the configuration file name you
          tried to load.

        "DOS ERROR while reading configuration file: ????????"

          This error is being reported by DOS. Perhaps the file has
          been corrupted.

        "ERROR in configuration file: ????????
         Non-printable character on line xx"

          The configuration file must contain only ASCII text (A...Z,
          0...9, etc.). A character with an ASCII value below 32 has
          been found in the file.

        "ERROR - '{' must precede control code on line xx
         For example: '{tab}' or '{esc}'"

          CONTROL recognizes several common printer control code
          representations. {lf} represents line feed, {cr}  
          represents carriage return, etc. You must use brackets
          ("{}") around each control code.

        "ERROR - Colon must follow control character in configuration 
        file"

          Each substitution definition in the configuration file must
          start with a header character, followed by a colon (":").

        "ERROR on line xx of configuration file: ????????. Number out 
        of range"

          Numbers, which represent ASCII values, cannot exceed 255,
          the upper limit of ASCII characters.


                                                                  4








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


        "ERROR - Unbalanced comment bracketing in configuration file"

          A configuration file can contain comments, which are 
          enclosed with parentheses "()". Each start of a comment
          must be matched by an end. For example:

            (this is a properly bracketed comment)   (and so is this)

            ((this isn't; there are 2 left parens and only 1 right)

        "ERROR - Too many definitions in configuration file"

          You are limited to 70 definitions in a configuration file.

        "ERROR - Configuration buffer overflow"

          Your definitions have exceeded the allowable number of total
          characters. The maximum for all definitions combined is 
          approximately 2000 characters. 

        "ERROR - Memory-resident program not found"

          This is an error message from REM-CTRL. Either CONTROL isn't 
          in memory, or you have loaded another memory-resident program
          on top of CONTROL A third possibility is that an ill-behaved 
          program is resident in memory. 


      WHAT IS ENHANCE?

        ENHANCE is a memory-resident program that improves the 
        graphics output of standard Epson or IBM dot matrix printers. 
        This improvement comes from printing each graphics pass twice, 
        possibly shifting the second graphics pass to the right one 
        dot position.

        ENHANCE can also map high density graphics to lower density 
        graphics supported by earlier printers. 

        ENHANCE can't make a poorly scaled or crudely drawn graphic 
        attractive. By the time ENHANCE receives the graphics output, 
        the shape of the picture has already been determined. ENHANCE 
        receives the graphics picture in thin horizontal strips of dot 
        patterns, and there is no way to know how or what would 
        improve a particular picture. 

        ENHANCE is compatible with IBM or Epson printers that support 
        the following graphics commands: 





                                                                  5








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


          ESC "K"   single density graphics    
          ESC "L"   low-speed double density graphics
          ESC "Y"   high-speed double density graphics
          ESC "Z"   quadruple-density graphics

        Almost all PC printers sold since 1986 are compatible.


      LOADING ENHANCE

        The syntax for loading ENHANCE is:

          ENHANCE  [dash options]  [printer]

        All bracketed items following ENHANCE are optional.

        The dash options are:

          -R    Remove ENHANCE from memory. 

          -T    Print graphics twice. Each sweep of the print head
                will be doubled for darker, clearer graphics. This is
                the default if no dash options are used.

          -TS   Print graphics twice, shifting the second
                pass one dot position to the right. This results
                in graphics that are darker and slightly bolder.

          -L    Convert ESC "Z" quadruple density graphics to
                ESC "L" double density graphics. This option
                allows graphics to print on >some< early
                printers that only recognize double density graphics.

        Examples:

          ENHANCE -T LPT2:      {print graphics twice on printer
                                 attached to the 2nd printer port}

          ENHANCE -R            {remove ENHANCE from memory}

        ENHANCE should be loaded into memory before any other memory-
        resident software that generates graphics output. For example, 
        if you intend to do graphics screen dumps, you should first 
        load ENHANCE, and then load the DOS GRAPHICS program.









                                                                  6








                                                CONTROL and ENHANCE
     --------------------------------------------------------------


      ENHANCE ERROR MESSAGES

        "ERROR - Printer must be in range 1...3"

          You have specified an invalid printer port. The default is
          LPT1: (PRN:). You can specify LPT2: or LPT3:.

        "ERROR - DOS version 2.0 or higher needed"

          ENHANCE doesn't run under DOS versions earlier than 2.0.

        "ERROR - '-R' is invalid;
         ENHANCE not resident (or not found)"

          The "-R" command line option removes ENHANCE from memory. 
          ENHANCE isn't already in memory, or another memory-resident
          printer-controlling program has been loaded after ENHANCE. A
          third possibility is that an ill-behaved memory-resident
          program has broken the "link" to ENHANCE.

        "ERROR - '-x' not a valid command; ignored"

          The 'x' represents a dash option that ENHANCE doesn't
          recognize.





























                                                                  7









```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0517

     Volume in drive A has no label
     Directory of A:\

    README            7174   7-13-89   3:30p
    ORDER    FRM      2132   7-13-89   3:30p
    IPV3     DOC     72207   7-13-89   3:30p
    IP       EXE     46657   7-13-89   3:30p
    FONT1             9079   7-13-89   3:30p
    FONTDEMO EXE      5284   7-13-89   3:30p
    DEMODATA        103834   7-13-89   3:30p
    TUTOR_1  TXT      1466   7-13-89   3:30p
    TUTOR_2  TXT      7444   7-13-89   3:30p
    UTILS    DOC     15770   7-13-89   3:30p
    CONTROL  EXE      5467   7-13-89   3:30p
    REM-CTRL EXE       936   7-13-89   3:30p
    CONTROL  DAT      1035   7-13-89   3:30p
    SAMPLE   DAT       603   7-13-89   3:30p
    ENHANCE  EXE      5357   7-13-89   3:30p
    GO       BAT        38  11-24-87   2:18p
    FILE0517 TXT      1688  10-02-89   1:09p
    GO       TXT       617  10-21-89  12:07a
           18 file(s)     286788 bytes
                           24576 bytes free
