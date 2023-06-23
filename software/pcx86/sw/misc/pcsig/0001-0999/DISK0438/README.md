---
layout: page
title: "PC-SIG Diskette Library (Disk #438)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0438/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0438"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER UTILITIES #8"

    ATTENTION Star, Gemini, Epson and Panasonic printer owners -- Here's a
    set of utility programs to exercise some of the more popular printers
    and really take advantage of their special capabilities.  Jazz up your
    printing!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0438.TXT

{% raw %}
```
Disk No:  438                                                           
Disk Title: Printer Utilities #8                                        
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: Printer Utilities 8                                      
Author Version: 5.6                                                     
Author Registration: $13.00                                             
Special Requirements: Star, Gemini, Epson, or Panasonic printer.        
                                                                        
ATTENTION Star, Gemini, Epson and Panasonic printer owners -- Here's a  
set of utility programs to exercise some of the more popular printers   
and really take advantage of their special capabilities.  Jazz up your  
printing!                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GEM'PRTR.BAS

{% raw %}
```bas
1000 WIDTH ,255
1010 FLG = 0
1020 CLS
1030 REM  ASCII Commands for Gemini 10x Printer
1040 PRINT ,"  GEMINI-10X PRINTER SET-UP ROUTINE"
1050 PRINT "     {Copyright @ 1985: Hank Mantz / OKC,OK; Ver 2.18: 6/11/85}"
1060 PRINT "            {ENTER <@> FOR RIGHTS AND DATA STATEMENT}"
1070 PRINT
1080 PRINT "        A] PICA (10 CPI) ON             B] ELITE (12 CPI) ON"
1090 PRINT "        C] MICRON (17 CPI)ON            D] NEAR LETTER QUALITY    "
1100 PRINT "        E] ITALICS ON                   F] ITALICS OFF"
1110 PRINT "        G] DOUBLE WIDTH ON              H] DOUBLE WIDTH OFF  "
1120 PRINT "        I] DOUBLE STRIKE ON             J] DOUBLE STRIKE OFF"
1130 PRINT "        K] EMPHASIZED ON (Pica Only)    L] EMPHASIZED OFF  "
1140 PRINT "        M] UNDERLINING ON               N] UNDERLINING OFF"
1150 PRINT "        O] VARIABLE LINESPACING         P] 6 LPI SPACING"
1160 PRINT "        Q] PAGE LENGHT (Lines)          R] PAGE LENGTH (Inches)"
1170 PRINT "        S] LEFT MARGIN (Col #)          T] RIGHT MARGIN (Col #)"
1180 PRINT "        U] PERFORATION SKIP ON (Lines)  V] PERFORATION SKIP OFF  "
1190 PRINT "        W] CONTINUOUS FORMS             X] SINGLE SHEET PAPER"
1200 PRINT "        Y] SUB/SUPERSCRIPT (Set/Cancel) Z] SET TOP OF FORM (Line #)"
1210 PRINT "              ^] Send 5 Lines to Printer as a Test     "
1220 PRINT "        : : :                           : : :  "
1230 PRINT "        *] INITIALIZE PRINTER           \] FINISHED, RTN TO DOS"
1240 PRINT
1250 PRINT "        SELECTION ? {Enter single character, translation will echo}"
1260 IF FLG = 0 GOTO 1280
1270 PRINT "DEFAULTS ARE ON {PICA, 6LPI, CONT'S FORMS, MARGIN 0/80, PERF SKIP OFF, ETC.} "
1280 N$=INPUT$(1)
1290 IF N$ = "@" GOTO 3590
1300 IF N$ = "A" GOTO 1970
1310 IF N$ = "a" GOTO 1970
1320 IF N$ = "B" GOTO 2020
1330 IF N$ = "b" GOTO 2020
1340 IF N$ = "C" GOTO 2080
1350 IF N$ = "c" GOTO 2080
1360 IF N$ = "D" GOTO 3230
1370 IF N$ = "d" GOTO 3230
1380 IF N$ = "E" GOTO 2140
1390 IF N$ = "e" GOTO 2140
1400 IF N$ = "F" GOTO 2180
1410 IF N$ = "f" GOTO 2180
1420 IF N$ = "G" GOTO 2430
1430 IF N$ = "g" GOTO 2430
1440 IF N$ = "H" GOTO 2470
1450 IF N$ = "h" GOTO 2470
1460 IF N$ = "I" GOTO 2350
1470 IF N$ = "i" GOTO 2350
1480 IF N$ = "J" GOTO 2390
1490 IF N$ = "j" GOTO 2390
1500 IF N$ = "K" GOTO 2220
1510 IF N$ = "k" GOTO 2220
1520 IF N$ = "L" GOTO 2300
1530 IF N$ = "l" GOTO 2300
1540 IF N$ = "M" GOTO 2510
1550 IF N$ = "m" GOTO 2510
1560 IF N$ = "N" GOTO 2550
1570 IF N$ = "n" GOTO 2550
1580 IF N$ = "O" GOTO 2630
1590 IF N$ = "o" GOTO 2630
1600 IF N$ = "P" GOTO 2590
1610 IF N$ = "p" GOTO 2590
1620 IF N$ = "Q" GOTO 2870
1630 IF N$ = "q" GOTO 2870
1640 IF N$ = "R" GOTO 3490
1650 IF N$ = "r" GOTO 3490
1660 IF N$ = "S" GOTO 3170
1670 IF N$ = "s" GOTO 3170
1680 IF N$ = "T" GOTO 2800
1690 IF N$ = "t" GOTO 2800
1700 IF N$ = "U" GOTO 2930
1710 IF N$ = "u" GOTO 2930
1720 IF N$ = "V" GOTO 2990
1730 IF N$ = "v" GOTO 2990
1740 IF N$ = "W" GOTO 3030
1750 IF N$ = "w" GOTO 3030
1760 IF N$ = "X" GOTO 3070
1770 IF N$ = "x" GOTO 3070
1780 IF N$ = "Y" GOTO 3310
1790 IF N$ = "y" GOTO 3310
1800 IF N$ = "Z" GOTO 3110
1810 IF N$ = "z" GOTO 3110
1820 IF N$ = "*" GOTO 1900
1830 IF N$ = "\" GOTO 1870
1840 IF N$ = "!" GOTO 3710
1845 IF N$ = "^" GOTO 3800
1850 GOTO 1280
1860 REM   Z] RETURN TO DOS
1870 CLS
1880 PRINT "EXIT TO DOS"
1890 SYSTEM
1900 REM  RESET PRINTER TO DEFAULTS
1910 FLG = 1
1920 LPRINT CHR$(27);CHR$(64);
1930 LET FLG1 = 1
1940 CLS
1950 PRINT "***RESET***",
1960 GOTO 1030
1970 REM  ***** PICA ON
1980 LET FLG1 = 1
1990 LPRINT CHR$(27);CHR$(66);CHR$(1);
2000 PRINT "PICA ON",
2010 GOTO 1280
2020 REM ***** ELITE ON
2030 LET FLG1 = 0
2040 LPRINT CHR$(27);CHR$(66);CHR$(2);
2050 PRINT "ELITE ON",
2060 IF FLG2 = 1 GOTO 2310
2070 GOTO 1280
2080 REM   ***** MICRON ON
2090 LET FLG1 = 0
2100 LPRINT CHR$(27);CHR$(66);CHR$(3);
2110 PRINT "MICRON ON",
2120 IF FLG2 = 1 GOTO 2310
2130 GOTO 1280
2140 REM  ***** ITALICS ON
2150 LPRINT CHR$(27);CHR$(52);
2160 PRINT "ITALICS ON",
2170 GOTO 1280
2180 REM  ***** ITALICS OFF
2190 LPRINT CHR$(27);CHR$(53);
2200 PRINT "ITALICS OFF",
2210 GOTO 1280
2220 REM   ***** EMPHASIZE ON
2230 IF FLG1 = 1 GOTO 2260
2240 PRINT "Useable With PICA only - Request Aborted",
2250 GOTO 1280
2260 LPRINT CHR$(27);CHR$(69);
2270 FLG2 = 1 : ' FLAG SET FOR EMPH ON
2280 PRINT "EMPHASIZE ON",
2290 GOTO 1280
2300 REM  ***** EMPHASIZE OFF
2310 LPRINT CHR$(27);CHR$(70);
2320 FLG2 = 0  :' FLAG UNSET FOR EMPH OFF
2330 PRINT "EMPH. OFF",
2340 GOTO 1280
2350 REM  ***** DOUBLE STRIKE ON
2360 LPRINT CHR$(27);CHR$(71);
2370 PRINT "DBL.STK.ON",
2380 GOTO 1280
2390 REM ***** DBL STRIKE OFF
2400 LPRINT CHR$(27);CHR$(72);
2410 PRINT "DBL.STK.OFF",
2420 GOTO 1280
2430 REM  ***** DBL WIDTH ON
2440 LPRINT CHR$(27);CHR$(87);CHR$(1);
2450 PRINT "DBL.WDTH.ON",
2460 GOTO 1280
2470 REM  ***** DBL WIDTH OFF
2480 LPRINT CHR$(27);CHR$(87);CHR$(0);
2490 PRINT "DBL.WDTH.OFF",
2500 GOTO 1280
2510 REM  *****  UNDERLINE ON
2520 LPRINT CHR$(27);CHR$(45);CHR$(1);
2530 PRINT "UNDERLINE ON",
2540 GOTO 1280
2550 REM  ***** UNDERLINE OFF
2560 LPRINT CHR$(27);CHR$(45);CHR$(0);
2570 PRINT "UNDERL'N.OFF",
2580 GOTO 1280
2590 REM   ****** LINESPACE=6LPI
2600 LPRINT CHR$(27);CHR$(51);CHR$(24);
2610 PRINT "6 LPI",
2620 GOTO 1280
2630 REM  *****  VARIABLE LINESPACE
2640 PRINT "ENTER 1,2,3,4,6,8,9,or 12: ";
2650 L$ = INPUT$(2)
2660 IF L$ = "1 " GOTO 2760
2670 IF L$ = "2 " GOTO 2760
2680 IF L$="3 " GOTO 2760
2690 IF L$="4 " GOTO 2760
2700 IF L$="6 " GOTO 2760
2710 IF L$="8 " GOTO 2760
2720 IF L$="9 " GOTO 2760
2730 IF L$="12" GOTO 2760
2740 PRINT "INVALID, REQUEST ABORTED",
2750 GOTO 1280
2760 X = 144/VAL(L$)
2770 LPRINT CHR$(27);CHR$(51);CHR$(X);
2780 PRINT L$;" LPI",
2790 GOTO 1280
2800 REM  ***** COLUMN WIDTH
2810 LPRINT CHR$(27);CHR$(77);CHR$(1);
2820 PRINT "RIGHT MARGIN = ";
2830 W$ = INPUT$(3)
2840 LPRINT CHR$(27);CHR$(81);CHR$(VAL(W$));
2850 PRINT "Col ";W$,
2860 GOTO 1280
2870 REM  ****** PAGE LENTH in LINES
2880 PRINT "PG LGT (Lines) :";
2890 C$=INPUT$(2)
2900 LPRINT CHR$(27);CHR$(67);CHR$(VAL(C$));
2910 PRINT C$;" Lines",
2920 GOTO 1280
2930 REM  ***** PERFORATION SKIP ON
2940 PRINT "SKIP LINES = ";
2950 S$ = INPUT$(1)
2960 LPRINT CHR$(27);CHR$(78);CHR$(VAL(S$));
2970 PRINT S$;" Lines",
2980 GOTO 1280
2990 REM   *****  PERFORATION SKIP OFF
3000 LPRINT CHR$(27);CHR$(78);CHR$(0);
3010 PRINT "PRF.SKIP OFF",
3020 GOTO 1280
3030 REM   *****  CONTINUOUS FORMS
3040 LPRINT CHR$(27);CHR$(57);
3050 PRINT "CONT'S FORMS",
3060 GOTO 1280
3070 REM   *****  SINGLE SHEETS
3080 LPRINT CHR$(27);CHR$(56);
3090 PRINT "SINGLE SHEET",
3100 GOTO 1280
3110 REM    ****** SET FIRST PRINT LINE
3120 PRINT "BEGIN PRTG: ";
3130 P$ = INPUT$(1)
3140 LPRINT CHR$(27);CHR$(82);CHR$(VAL(P$));
3150 PRINT " Line ";P$,
3160 GOTO 1280
3170 REM   ***** SET LEFT MARGIN
3180 PRINT "LEFT MARGIN = ";
3190 M$ = INPUT$(2)
3200 LPRINT CHR$(27);CHR$(77);CHR$(VAL(M$));
3210 PRINT "Col ";M$,
3220 GOTO 1280
3230 REM   ******  NEAR LETTER QUALITY
3240 LPRINT CHR$(27);CHR$(64);:'RESET
3250 LET FLG1 = 1
3260 LPRINT CHR$(27);CHR$(71);:'DBL STRIKE
3265 GOTO 3270
3270 LPRINT CHR$(27);CHR$(69); :' EMPHASIZED ON
3280 FLG2 = 1 :' FLAG SET FOR EMPH ON
3290 PRINT "NEAR LTR QUAL {Pica/Emph/6LPI}",
3300 GOTO 1280
3310 REM   ***** SUBSCRIPT/SUPERSCRIPT/CANCEL
3320 PRINT "ENTER <_>=subscript, <^>=superscript, <#>=CANCEL: ";
3330 SCR$ = INPUT$(1)
3340 IF SCR$ = "#" GOTO 3450
3350 IF SCR$ = "_" GOTO 3390
3360 IF SCR$ = "^" GOTO 3420
3370 PRINT "INVALID REQUEST ABORTED",
3380 GOTO 1280
3390 LPRINT CHR$(27);CHR$(83);CHR$(1);
3400 PRINT "SUBSCRIPT ";"DBL STRIKE",
3410 GOTO 1280
3420 LPRINT CHR$(27);CHR$(83);CHR$(0);
3430 PRINT "SUPERSCRIPT ";"DBL STRIKE ON",
3440 GOTO 1280
3450 LPRINT CHR$(27);CHR$(84);
3460 LPRINT CHR$(27);CHR$(72);
3470 PRINT "SUB/SUPER OFF ";"DBL STRIKE OFF",
3480 GOTO 1280
3490 REM   *******  PAGE LENGTH SET IN INCHES
3500 INPUT; "PG LTH (Ins.)";P
3510 IF P > 32 GOTO 3560
3520 IF P < 1 GOTO 3560
3530 LPRINT CHR$(27);CHR$(67);CHR$(0);CHR$(P);
3540 PRINT " INCHES",
3550 GOTO 1280
3560 PRINT "ERROR "P" OUT OF LIMITS","{33>Limit>1}  ";
3570 PRINT " ***REQUEST ABORTED",
3580 GOTO 1280
3590 PRINT
3600 PRINT "RIGHTS AND DATA: This is a copyrighted package; however, uou are free to copy"
3610 PRINT "the package and provide FREE copies (except for cost of disks) to whomever"
3620 PRINT "you wish, provided the copyright legend and this text are not removed."
3630 PRINT "For those of you who received this package other than direct from the author,"
3640 PRINT "if you find the package useful, $10.00 sent to the author will put you on"
3650 PRINT "a mailing list entitling you to notification of any significant bugs or"
3660 PRINT "updates for at least one year."
3670 PRINT "                   author:  Hank Mantz"
3680 PRINT "                            2300 N.W. 120th St."
3690 PRINT "                            Oklahoma City, OK 73120"
3700 GOTO 1280
3710 LPRINT ;
3730 GOTO 1280
3800 REM  The following causes a sample to be printed on the printer
3801 PRINT "Test Sample",
3805 LPRINT "Printer Test Sample - 3 Lines Follow . . ."
3810 LPRINT "ABCDE FGHIJ KLMNO PQRST UVWXY Z"
3820 LPRINT "abcde fghij klmno pqrst uvwxy z"
3830 LPRINT "12345 67890 !@#$% ^&*() - _ + = { } [ ] ; : '<>?/|\""
3835 LPRINT ". . . Printer Test Sample Complete"
3840 GOTO 1280
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No: 438  PRINTER UTILITIES  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the manuals on this disk, type:                              ║
║                                                                         ║
║             MANUAL (press Enter)                                        ║
║                                                                         ║
║   To start the PANASONIC PRINTER SETUP UTILITIES, type:                 ║
║                                                                         ║
║             CR8CMD (press Enter)                                        ║
║                                                                         ║
║   To start the EPSON PRINTER UTILITY, type:                             ║
║                                                                         ║
║             SETE (press Enter)                                          ║
║                                                                         ║
║   To start the STAR PRINTER UTILITY, type:                              ║
║                                                                         ║
║             SETLQ (press Enter)                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## GO2.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No: 438  PRINTER UTILITIES  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start the BANNER program, type:                                    ║
║                                                                         ║
║             BANNER (press enter)                                        ║
║                                                                         ║
║   To start the BASIC PROGRAM LISTER, type:                              ║
║                                                                         ║
║             LISTASC (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## LISTASC.DOC

{% raw %}
```
                LISTASC	   VERSION 5.6	   March 30, 1990
	   Program designed and developed by SMALL & ASSOCIATES
	         (C) Copyright George Small 1985 - 1990

    LISTASC.EXE (version 5.6) is designed to list BASIC files saved with an
    .ASC or BAS extension in ASCII format.  The program will format the
    ASCII statements to a "paragraph" form using either standard or
    compressed font; line overflow is indented to provide easy reading.
    The program prints 55 lines of text per page including a filename
    heading, page number, file creation date and time stamp, and, current
    date of printing.  The listing allows for hole punching without
    interferring with source code statements.

    The C.ITOH (8510), EPSON (MX-80), OKIDATA (92), and IBM PROPRINTER are
    supported.	The program is distributed with the IBM PROPRINTER and
    compressed font default:  PFK's allow the user to select one of the
    other printers with either compressed or normal print font.

    The program is executed by entering [d:][\path] LISTASC.EXE at the DOS
    prompt.  A maximum of 60 programs may be entered at one time for
    printing; normal or compressed font may be toggled from file to file as
    well as drive allocation of the file to be printed during input.  The
    program checks whether the file(s) are in ASCII format and if the file
    is in the designated drive directory.  The file input format is as
    follows:  [d:][\path]FILENAME[/b][/n]|[/c]

    USER NOTES:
    o	 [d:][\path] drive parameter:  omission indicates filename is
	 located on the default drive and path.
    o	 FILENAME is the name of the ASCII file that is to be printed.
	 The file must have an extension of ".ASC" or ".BAS".  If the file
	 name has a ".BAS" extentsion, include the /b after the name;
	 omission of /b assumes an ".ASC" extension.
    o	 [/n]|[/c] are font parameters to control normal or compressed
	 printing of the file and are mutually exclusive parameters.
	 Omission will default to the global font displayed at the
	 bottom of the screen.
    o	 Do not leave any blank spaces between optional parameters and
	 the filename.	Do not include the filename extension.
    o	 The program uses a temporary work space on the default drive;
	 therefore the media on the default drive must not be write
	 protected.
    o	 PFK 1 will terminate printing the current file.
    o	 PFK 9 will reset "global" printer parameters.
    o	 PFK 10 will terminate program operation and return to DOS.

    If this program is useful to you, a $15 payment is requested.  This
    will entitle you to being informed of program revisions, program and
    customization services.  Please feel free to share and copy this
    program with others.  To register the program, send payment (or write)
    to:
			    SMALL & ASSOCIATES
			  4631 N. Camino Campero
			Tucson, Arizona 85715-6321
			    PHONE: 602/299-1587
    Thank you and enjoy.


```
{% endraw %}

## README.DOC

{% raw %}
```


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
THIS IS A COPYRIGHTED PROGRAM --  BE SURE TO READ THE RIGHTS AND DATA STATEMENT
-------------------------------------------------------------------------------
 MS-DOS, BASIC, AND AN IBM COMPATIBLE COMPUTER ARE REQUIRED FOR THESE PROGRAMS
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

This program was written to provide computer keyboard control over the many 
printer control options of the Star Micronics Gemini 10X or 15X printers.
The actual program is contained under the file name "GEM'PRTR.BAS" and runs 
under the BASIC program language.  Extensive instructions are provide so that
even but the most inexperience PC user can execute this program.  An
installation program is also included that will automatically create a batch
file that will allow a simple one word command to execute this program.   
...............................................................................

       A copy of the Printer Control Menu appears on the next screen
...............................................................................


         {After the "-- More --" prompt, press any key to continue} 


             GEMINI-10X PRINTER SET-UP ROUTINE                    
  {Copyright @ 1985: Hank Mantz / OKC,OK; Ver 2.18: 6/11/85}      
         {ENTER <@> FOR RIGHTS AND DATA STATEMENT}                
                                                                  
     A] PICA (10 CPI) ON             B] ELITE (12 CPI) ON         
     C] MICRON (17 CPI)ON            D] NEAR LETTER QUALITY       
     E] ITALICS ON                   F] ITALICS OFF               
     G] DOUBLE WIDTH ON              H] DOUBLE WIDTH OFF          
     I] DOUBLE STRIKE ON             J] DOUBLE STRIKE OFF         
     K] EMPHASIZED ON (Pica Only)    L] EMPHASIZED OFF            
     M] UNDERLINING ON               N] UNDERLINING OFF           
     O] VARIABLE LINESPACING         P] 6 LPI SPACING             
     Q] PAGE LENGHT (Lines)          R] PAGE LENGTH (Inches)      
     S] LEFT MARGIN (Col #)          T] RIGHT MARGIN (Col #)      
     U] PERFORATION SKIP ON (Lines)  V] PERFORATION SKIP OFF      
     W] CONTINUOUS FORMS             X] SINGLE SHEET PAPER        
     Y] SUB/SUPERSCRIPT (Set/Cancel) Z] SET TOP OF FORM (Line #)  
           ^] Send 5 Lines to Printer as a Test                   
     : : :                           : : :                        
     *] INITIALIZE PRINTER           \] FINISHED, RTN TO DOS      
                                                                  
     SELECTION ? {Enter single character, translation will echo}  

INSTRUCTIONS FOR USE **********
.............................................................................. 
     E] ITALICS ON                   F] ITALICS OFF               
         .                               .
         .     <EXCERPT FOR REFERENCE>   .
         .                               .
           ^] Send 5 Lines to Printer as a Test                   
     : : :                           : : :                        
     *] INITIALIZE PRINTER           \] FINISHED, RTN TO DOS      
                                                                  
     SELECTION ? {Enter single character, translation will echo}  
...............................................................................
>>>> BE CERTAIN YOUR PRINTER IS "ON LINE" BEFORE SELECTING FUNCTIONS OR 
     SELECTIONS WILL BE IGNORED ! <<<<

After the "SELECTION ?" prompt (as shown above) simply enter the single 
character to the left of the desired function.  For example to select the 
italic character set, press "E"; to de-select the italic character set, press
"F".  For alphabetic characters either upper or lower case letters may be used 
- symbols must be entered exactly as shown.


If you wish to reset your printer to its default conditions simply press the
"*" key.  To send a sample of printing to the printer to check your settings, 
press "^" (the symbol over the "6" key).  When you are satisfied with the  
settings, press the "\" (note this is the back-slash) and the program will 
return you to DOS.

Should any of the functions require additional data, you will be propted for
it.  In cases where additional data is restricted to certain parameters, 
the allowable parameters are specified in the prompt.  In most cases the 
parameter selections are obvious and unrestricted.   When no cursor mark 
appears after the prompt for additional data the program will automatically 
continue after receiving the correct number of digits (use the space bar to 
generate fill characters after your input if needed to cause the computer to 
continue).  If you get a cursor mark after the prompt for additional data, 
you must press the <ENTER> key to enter the parameter and continue.  

If any erroneous or illegal characters are entered they will be ignored or an 
error message will appear with further instructions.  If the message is 
"request aborted," you must reselect the function to try again.  

If a single referenced function automatically invokes additional functions, 
the additional functions will also be echoed (for example subscripting also
puts the printer in the double strike mode).









IMPORTANT REMINDER --

IF YOU TURN YOUR PRINTER OFF (OR IT SOMEHOW LOSES POWER) ALL SETTINGS WILL
BE RESET TO THE PRINTER'S DEFAULT CONDITIONS WHEN IT COMES BACK ON. 













PRELIMINARIES ****

To execute this program you must first know how to "call" or "load" or
somehow "initialize" the BASIC program language on your particular computer. 
You may have to check your computer's operating manual to get this information.
Typically this "call" is a very simple and obvious command such as "BASICA" or
"GWBASIC" or even just "BASIC".  To run a BASIC program usually the program 
name is entered after the "call" command.  Using the printer control program 
name some examples using the various "calls" are: 

                        "BASICA GEM'PRTR.BAS"                      
                        "GWBASIC GEM'PRTR.BAS"                                
                        "BASIC GEM'PRTR.BAS"      

If one of these three commands happens to work on your computer (there's a 
very good chance one will), the author has provide a very simple means to 
install a quick command scheme. After executing the following install 
procedure all that will be required to run this program will be the command
"PRT". The procedure will create a batch file that will automatically call 
BASIC your way and direct it to run the program.  






>>>> IMPORTANT NOTE ABOUT BASIC -
If at any time during this or future operations you get the following prompt:

OK      

(that's right, just an "OK") you have entered the BASIC program language 
outside of a program.  In order to return to your operating system (DOS) type
the command "SYSTEM" and enter it or reset your computer (CTRL/ALT/DELETE).
If you use the reset method all printer setting will be reset to their default
values. 







INSTALLATION PROCEDURE ***

After determining your computer's BASIC call, enter the following command:
          "INSTALL <the BASIC call>"
For example, if the computer uses "GWBASIC" as the call, enter
          "INSTALL GWBASIC"
(If you later want to move this program to another computer that has a
different BASIC call, simply re-perform the installation procedure.)                        

 >>  NOW JUST ENTER THE COMMAND  " PRT " AND THE PROGRAM WILL EXECUTE  <<

In order to get the ability to execute this program from any directory, both
files "PRT.BAT" and "GEM'PRTR.BAS" must be in the root directory or in a
directory established in a command path by the MS-DOS 2.0 "PATH" command.  If
you have any problems or questions about installing these program, the author
will be happy to advise you (of course without charge).  






...............................................................................
If you do not have a GEMINI 10X or 15X but would like to have this type of 
control over your printer, contact the author as there are versions of this
program written for other printers.
...............................................................................
RIGHTS AND DATA ********

This is a copyrighted package; however, anyone in posession of it may copy it
freely and distribute at will as long as the following requirements are met.
1. No charge can be made for these programs.  A small charge of $3.00 or less
   may be made for making the copy, the cost of the disk used for the copy, and
   any shipping costs may passed on if provided by the copier.
2. The author's copyright legend and version identification appearing at the 
   top of the menu and the rights and data statement called by " @ " from the 
   menu cannot be deleted or modified.

For a fee of $10.00, you may place yourself on a mailing list for one year to
receive notification of significant bugs or major updates from the author.

                                  Author:  Hank Mantz
                                           2300 N.W. 120th St.
                                           Oklahoma City, OK.  73120
 
```
{% endraw %}

## SET.DOC

{% raw %}
```


SET_ is a printer setup utility. It comes in Epson FX80 (SETE) and LQ (SETLQ)
versions. They differ only in the commands sent to the printer. If SETE is run
without a command tail, the following menu will appear:


        (A) Pica (10)                     (J) Cancel Italics

        (B) Elite (12)                    (K) Skip Over Perf 2 Lines

        (C) Condensed (17)                (L) Set Left Margin at 10

        (D) Unidirectional Printing       (M) Expanded Print

        (E) Emphasized                    (N) Cancel Expanded

        (F) Cancel Emphasized

        (G) Double Strike                 (P) Print Test Line

        (H) Cancel Double Strike          (Q) Quit

        (I) Italics                       (R) Reset Printer

     The commands shown can be typed in either upper or lower case. Whatever is
typed will be echoed to the screen. Any of these commands can be used in a com-
mand tail. For example, I use SETE RBLD to give me elite type, a 10 column left
margin and unidirectional printing. With a command tail, SET_ executes the legal
commands in the tail, ignores anything else, and returns to DOS. The menu does
not appear unless all of the commands in the tail are illegal, in which case it
does come up.
     You can change the commands to suit yourself by modifying the source and
reassembling. I used Microsoft's Macro Assembler 4.0 to create the .COM file.
     SETE and SETLQ are hereby placed in the public domain by Joseph C. Hudson,
4198 Warbler Dr. Flint, MI 48504. I make no promises about the performance
of the programs, impose no restrictions on their use. I hope they help you.

```
{% endraw %}

## SETE.ASM

{% raw %}
```
;         SETE.ASM is a menu or command driven printer setup program.
;         This version is for Epson FX80 and similar printers. Its really
;         intended for you to customize to your own needs.
;         A command tail can be used, using the same codes as given in the menu.
;         This program is placed in the public domain and is written by Joseph
;         C. Hudson, 4198 Warbler Dr. Flint, MI 48504. Adapted from GEMSET.ASM
;         by R. R. Jones 226 Valley Rd. Lawrenceville, Ga. 30245 MNet 70270,117

          cr     equ 0Dh
          lf     equ 0Ah
          conout equ 9
          getcon equ 7

          setp   segment byte

          assume cs:setp
          org    100h                  ;Setup as COM file
begin:    jmp    start                 ;Skip over data area
          comnd  db  ?                 ;variable to hold command
          istail db  ?                 ;dummy variable for tail
          numrem db  ?                 ;var for no of chars still in tail
          banner db  cr,lf,lf,lf,lf,lf,'       '
                 db ' (A) Pica (10)                     (J) Cancel Italics'
                 db cr,lf,lf,'       '
              db ' (B) Elite (12)                    (K) Skip Over Perf 2 Lines'
                 db cr,lf,lf,'       '
               db ' (C) Condensed (17)                (L) Set Left Margin at 10'
                 db cr,lf,lf,'       '
                 db ' (D) Unidirectional Printing       (M) Expanded Print'
                 db cr,lf,lf,'       '
                 db ' (E) Emphasized                    (N) Cancel Expanded'
                 db cr,lf,lf,'       '
                 db ' (F) Cancel Emphasized             '
                 db cr,lf,lf,'       '
                 db ' (G) Double Strike                 (P) Print Test Line'
                 db cr,lf,lf,'       '
                 db ' (H) Cancel Double Strike          (Q) Quit'
                 db cr,lf,lf,'       '
                 db ' (I) Italics                       (R) Reset Printer'
                 db cr,lf,lf,'       '
                 db '$'

;*****************************************************************************
; Here begin the definitions of the printer control strings. This is a       *
; table where each entry begins with the unique search key formed in al      *
; by the routine "highbit", is followed in memory by the actual printer      *
; control codes, and ends with a zero. When the key is found the lineprinter *
; will be sent everthing after the key, up to the -1 which is the "stopper"  *
;*****************************************************************************

          ptable db 225,27,'P',18,-1   ;A - Each code group must end in -1
                 db 226,27,'M',-1      ;B
                 db 227,15,-1          ;C
                 db 228,27,'U',1,-1    ;D
                 db 229,27,'E',-1      ;E
                 db 230,27,'F',-1      ;F
                 db 231,27,'G',-1      ;G
                 db 232,27,'H',-1      ;H
                 db 233,27,'4',-1      ;I
                 db 234,27,'5',-1      ;J
                 db 235,27,'N',2,-1    ;K
                 db 236,27,'l',10,-1   ;L
                 db 237,27,'W',1,-1    ;M
                 db 238,27,'W',0,-1    ;N
                 db 240,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNO',-1 ;P
                 db 242,,27,'@',-1     ;R
          endtable equ $
          lentbl equ endtable - ptable ;Get length of printer string table

start:    mov    istail,0              ;set tail dummy to 0
          mov    si,offset 80h         ;go to command tail
          mov    al,[si]               ;get length of command tail
          mov    numrem,al             ;put length of tail in numrem
again:    cmp    numrem,0              ;is there any tail left?
          jne    proceed               ;yes, proceed
          cmp    istail,0              ;no, was there a tail?
          je     start1                ;no, go get commands
          jmp    quit                  ;yes, all done, so quit.
proceed:  inc    si                    ;point at next character in tail
          dec    numrem                ;decrement counter
          mov    al,[si]               ;get next character from tail
          or     al,20h                ;make it lower case
          cmp    al,6fh                ;is it o?         }remove these 2 lines
          je     again                 ;yes, not command }if you add o as a
          cmp    al,60h                ;is it below a?              command.
          jle    again                 ;yes, so not a letter
          cmp    al,73h                ;no. is it above r?
          jge    again                 ;yes, so not a command
          mov    istail,1              ;no, is a command. Set dummy to 1
          jmp    chkq                  ;process the command

start1:   mov    dx,offset banner      ;point to banner
          mov    ah,conout             ;write to console function
          int    21h                   ;call DOS

keyget:   mov    ah,getcon             ;get character from keyboard
          int    21h
          or     al,20h                ;change to lower case
          mov    dl,al
          mov    ah,02h                ;write character to screen
          int    21h

; There is 1 special case - Q returns to DOS

chkq:     mov    bl,'q'                ;special handling for q
          cmp    al,bl                 ;Does he want to quit now?
          jne    highbit               ;No, not a q, check other possibilities

quit:     mov    ah,4ch                ;quit
          int    21h

highbit:  mov    comnd,al              ;save command
          or     al,10000000b          ;setup search key
          mov    di,offset ptable      ;setup to see table
          mov    cx,lentbl             ;get length of table into counter
next:     mov    ah,[di]               ;take table entry
          cmp    al,ah                 ;is this equal to search key?
          je     gotpntr               ;yes, now send string to printer
          dec    cx                    ;no, continue search , dec counter
          jcxz   keyget                ;if counter is 0 not a legal search key
          inc    di                    ;one deeper into table, please
          jmp    next                  ;and look at another table byte
gotpntr:  inc    di                    ;Bump past key
          mov    dl,[di]               ;take byte in to be sent to printer
          mov    dh,-1                 ;set up to see if end of print string
          cmp    dl,dh                 ;set zero flag if so
          je     lpfin                 ;yes, all done, finish up printer
          mov    ah,5                  ;pr inter code
          int    21h
          jmp    gotpntr               ;get next printer string byte
lpfin:    mov    al,comnd              ;get command back
          cmp    al,'p'                ;did we print test line?
          jne    nextone               ;no, continue
          call   crlf                  ;yes, send cr and lf to printer
nextone:  cmp    istail,0              ;do we have a tail?
          je     keyget                ;no, go wait for command
          jmp    again                 ;yes, continue processing tail

crlf      proc   near                  ;send cr and lf to printer
          mov    ah,5                  ;printer function number
          mov    dl,cr                 ;put cr in dl
          int    21h                   ;call DOS
          mov    ah,5
          mov    dl,lf                 ;put lf in dl
          int    21h                   ;call DOS
          ret
crlf      endp

setp      ends
end       begin
```
{% endraw %}

## SETLQ.ASM

{% raw %}
```
;         SETLQ.ASM
;         This is code for the IBM PC et al that provides a menu driven set up
;         routine for the Epson LQ-800. Alternately, a command tail can be
;         used, using the same codes as given in the menu. This program is
;         placed in the public domain and is adapted by Joseph C. Hudson,
;         4198 Warbler Dr. Flint, MI 48504. Adapted from GEMSET.ASM by
;         R.R.Jones 226 Valley Rd. Lawrenceville, Ga. 30245 MNet 70270,117

          cr     equ 0Dh
          lf     equ 0Ah
          conout equ 9
          getcon equ 7

          setp   segment byte

          assume cs:setp
          org    100h                  ;Setup as COM file
begin:    jmp    start                 ;Skip over data area
          comnd  db  ?                 ;variable to hold command
          istail db  ?                 ;dummy variable for tail
          numrem db  ?                 ;var for no of chars still in tail
          banner db  cr,lf,lf,lf,lf,lf,'       '
                 db ' (A) Pica (10)                  (K) Cancel Let Qual'
                 db cr,lf,lf,'       '
                 db ' (B) Elite (12)                 (L) Set Left Margin at 10'
                 db cr,lf,lf,'       '
                 db ' (C) Condensed (15)             (M) Set Right Margin 71'
                 db cr,lf,lf,'       '
                 db ' (D) Double Wide                (N) Cancel Dbl Wide'
                 db cr,lf,lf,'       '
                 db ' (E) Emphasized                 (O) Skip Over Perf 4 Lines'
                 db cr,lf,lf,'       '
                 db ' (F) Cancel Emphasized          (P) Print Test Line'
                 db cr,lf,lf,'       '
                 db ' (G) Double Strike              (Q) Quit'
                 db cr,lf,lf,'       '
                 db ' (H) Cancel Double Strike       (R) Reset Prn to default'
                 db cr,lf,lf,'       '
                 db ' (I) Letter Quality             (S) Sheet Feed On'
                 db cr,lf,lf,'       '
                 db ' (J) Full Justification         (T) Sheet Feeder Off'
                 db cr,lf,lf,'       '
                 db '$'

;****************************************************************************
; Here begin the definitions of the printer control strings. This is a      *
; table where each entry begins with the unique search key formed in al     *
; by the routine "highbit", is followed in memory by the actual printer     *
; control codes, and ends with a -1. When the key is found the printer      *
; will be sent everthing after the key, up to the -1 which is the "stopper".*
;****************************************************************************

          ptable db 225,27,80,-1       ;A - Each code group must end in -1
                 db 226,27,77,-1       ;B
                 db 227,27,15,-1       ;C
                 db 228,27,87,1,-1     ;D
                 db 229,27,69,-1       ;E
                 db 230,27,70,-1       ;F
                 db 231,27,71,-1       ;G
                 db 232,27,72,-1       ;H
                 db 233,27,120,1,-1    ;I
                 db 234,27,97,3,-1     ;J
                 db 235,27,120,0,-1    ;K
                 db 236,27,108,10,-1   ;L
                 db 237,27,81,10,-1    ;M
                 db 238,27,87,0,-1     ;N
                 db 239,27,78,4,-1     ;O
                 db 240,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNO',-1 ;P
                 db 242,,27,64,-1      ;R
                 db 243,27,25,4,-1     ;S
                 db 244,27,25,0,-1     ;T
          endtable equ $
          lentbl equ endtable - ptable ;Get length of printer string table

start:    mov    istail,0              ;set tail dummy to 0
          mov    si,offset 80h         ;go to command tail
          mov    al,[si]               ;get length of command tail
          mov    numrem,al             ;put length of tail in numrem
again:    cmp    numrem,0              ;is there any tail left?
          jne    proceed               ;yes, proceed
          cmp    istail,0              ;no, was there a tail?
          je     start1                ;no, go get commands
          jmp    quit                  ;yes, all done, so quit.
proceed:  inc    si                    ;point at next character in tail
          dec    numrem                ;decrement counter
          mov    al,[si]               ;get next character from tail
          or     al,20h                ;make it lower case
          cmp    al,60h                ;is it below a?
          jle    again                 ;yes, so not a letter
          cmp    al,75h                ;no. is it above t?
          jge    again                 ;yes, so not a command
          mov    istail,1              ;no, is a command. Set dummy to 1
          jmp    chkq                  ;process the command

start1:   mov    dx,offset banner      ;point to banner
          mov    ah,conout             ;write to console function
          int    21h                   ;call DOS

keyget:   mov    ah,getcon             ;get character from keyboard
          int    21h
          or     al,20h                ;change to lower case
          mov    dl,al
          mov    ah,02h                ;write character to screen
          int    21h

; There is 1 special case - Q returns to DOS

chkq:     mov    bl,'q'                ;special handling for q
          cmp    al,bl                 ;Does he want to quit now?
          jne    highbit               ;No, not a q, check other possibilities

quit:     mov    ah,4ch                ;return to DOS
          int    21h

highbit:  mov    comnd,al              ;save command
          or     al,10000000b          ;setup search key
          mov    di,offset ptable      ;setup to see table
          mov    cx,lentbl             ;get length of table into counter
next:     mov    ah,[di]               ;take table entry
          cmp    al,ah                 ;is this equal to search key?
          je     gotpntr               ;yes, now send string to printer
          dec    cx                    ;no, continue search , dec counter
          jcxz   keyget                ;if counter is 0 not a legal search key
          inc    di                    ;one deeper into table, please
          jmp    next                  ;and look at another table byte
gotpntr:  inc    di                    ;Bump past key
          mov    dl,[di]               ;take byte in to be sent to printer
          mov    dh,-1                 ;set up to see if end of print string
          cmp    dl,dh                 ;set zero flag if so
          je     lpfin                 ;yes, all done, finish up printer
          mov    ah,5                  ;pr inter code
          int    21h
          jmp    gotpntr               ;get next printer string byte
lpfin:    mov    al,comnd              ;get command back
          cmp    al,'p'                ;did we print test line?
          jne    nextone               ;no, continue
          call   crlf                  ;yes, send cr and lf to printer
nextone:  cmp    istail,0              ;do we have a tail?
          je     keyget                ;no, go wait for command
          jmp    again                 ;yes, continue processing tail

crlf      proc   near                  ;send cr and lf to printer
          mov    ah,5                  ;printer function number
          mov    dl,cr                 ;put cr in dl
          int    21h                   ;call DOS
          mov    ah,5
          mov    dl,lf                 ;put lf in dl
          int    21h                   ;call DOS
          ret
crlf      endp

setp      ends
end       begin
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0438

     Volume in drive A has no label
     Directory of A:\

    GO       BAT       121   3-30-90   4:10p
    PRINTDOC BAT        22   3-30-90   4:10p
    LISTASC  DOC      3002   3-30-90   4:10p
    LISTASC  EXE     52656   3-30-90   4:10p
    READ     ME       2038   3-30-90   4:10p
    BANNER   EXE     13312   9-04-85   4:01p
    CR8CMD   DOC      8162   6-09-85   2:25a
    CR8CMD   EXE     16384   6-05-85   1:34a
    CR8READ  ME        695   6-16-85   1:11a
    FILE1    TMP        22   8-04-85   9:10p
    FILE2    TMP        23   8-04-85   9:11p
    FILE3    TMP        21   8-04-85   9:11p
    GEM'PRTR BAS      7676   6-13-85   9:12p
    GO1      BAT        65   2-08-89  11:48a
    GO2      TXT      1033   1-01-80   6:14a
    INSTALL  BAT       663   8-06-85   8:43p
    MANUAL   BAT       147   1-19-89   9:21a
    README             281   8-29-85   2:43a
    README   BAT        24   8-04-85   4:48p
    README   DOC      9472   8-06-85   8:28p
    SET      DOC      1669   1-17-87  12:38a
    SETE     ASM      7823   1-17-87  12:25a
    SETE     COM       851   1-17-87  12:26a
    SETLQ    ASM      7846   1-16-87  11:14p
    SETLQ    COM       929   1-17-87  12:29a
    FILE0438 TXT      1407   9-05-90   1:34p
    GO1      TXT      1495   1-01-80   6:03a
           27 file(s)     137839 bytes
                           15360 bytes free
