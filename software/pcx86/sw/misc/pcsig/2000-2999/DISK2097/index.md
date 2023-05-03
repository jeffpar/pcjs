---
layout: page
title: "PC-SIG Diskette Library (Disk #2097)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2097/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2097"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FONTED DISK 2 OF 2 (ALSO 2096)"

    Want to change the fonts that are normally displayed on your EGA or VGA
    screen?  FONTED lets you change the size and shape of
    characters to suit your taste; create foreign language fonts like
    Russian, Hebrew or Arabic; or make custom fonts to suit other special
    uses.
    
    You can reduce the size of a screen font to increase the number of text
    lines displayed on the screen.  You can also save custom screen fonts in
    an executable COM file and recall them later.  And custom fonts can be
    made "sticky" with an installation procedure so you can use the fonts
    with your favorite application such as a wordprocessor.  Works great
    with or without a mouse.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2097.TXT

{% raw %}
```
Disk No: 2097                                                           
Disk Title: FONTED Disk 2 of 2 (also 2096)                              
PC-SIG Version: 1.44                                                    
                                                                        
Program Title: FONTED                                                   
Author Version: 1.44                                                    
Author Registration: $15.00                                             
Special Requirements: EGA or VGA, Hard Drive recommended                
                                                                        
Want to change the fonts that are normally displayed on your EGA or VGA 
screen?  FONTED enables you change the size and shape of the characters 
to suit your taste, or create foreign language fonts like Russian,      
Hebrew or Arabic, or make custom fonts to suit other special uses.      
                                                                        
For example, by reducing the size of a screen font you can increase the 
number of text lines on the screen.  You can save these custom screen   
fonts in an executable COM file and recall them later.  The custom fonts
have the unique ability to be made "sticky" with an installation        
procedure so you can use the fonts with your favorite application, for  
example, a word processor.  FONTED supports a mouse, but does not       
require one.                                                            
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 2097 FONTED        >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║                                                                         ║
║                                                                         ║
║ To intall program insert disk 2096 and type : HDI                       ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## EGAHERC.DOC

{% raw %}
```
			      EGAHERC.EXE

EGAHERC converts between  14 byte EGA  and 16 byte  HERCULES+/VGA fonts.
Its behaviour is controlled by a command line switch:

EGAHERC font1.bin font2.bin /E_H

		reads font1.bin, pads every 14-byte-group out with two
		null bytes and writes the 16 bytes to disk

EGAHERC font1.bin font2.bin /H_E

		reads font1.bin, truncates every 16-byte-group by two
		bytes and writes the 14-byte-groups to disk.



```
{% endraw %}

## FONT8.DOC

{% raw %}
```

			       FONT8.EXE

With FONT8.EXE we supply a simple, but powerful editor for 4KByte screen
fonts that  can be  used in  connection with  a HERCULES+  or VGA  card.
FONT8.EXE works exactly the same way as FONTED does, but simpler in  its
overall structure.   There is no  need for a  configuration file, widths
and types are ignored, as are all the commands pertaining to them.   The
editing power  of the  program and  its "LOOK  AND FEEL"  are the  same,
however.  Be careful with deleting/undefining characters!  Output is  to
a string that is n * 16 bytes long, where n is the number of  characters
defined.   Deleting a  character thus  results in  the other characters'
being shifted to lower memory addresses automatically.

			      EGAHERC.EXE

EGAHERC  converts  EGA	14  fonts  (14 byte characters) to HERCULES+/VGA
fonts (16 byte characters) and vice versa.

Invoke:

EGAHERC font1.ega font1.hv /E_H

or:

EGAHERC font1.hv font1.ega /H_E

```
{% endraw %}

## FONTASM.DOC

{% raw %}
```
			      FONTASM.EXE

FONTASM  reads	a  font  file  (arbitrary  binary  file)  and writes its
contents to disk, converted  to .ASM "DB "  statements, so that you  can
fit any given  font into an  assembly language sorce  file that you  are
writing.

```
{% endraw %}

## FONTBRK.DOC

{% raw %}
```
			      FONTBRK.EXE

FONTBREAK reads an arbitrary  binary file (preferably a  48KByte RAMfont
file) and writes its  contents in 4 KByte  tranches to disk.   Thus, you
can feed a RAMfont file to the	FONT8 font editor, edit it and build  it
together again.  FONTBRK  uses the filename of	the large font file  and
sets the  extensions of  the 4	KByte files  to '$n',  where n denotes a
number between 1 and 99.

```
{% endraw %}

## FONTCONV.DOC

{% raw %}
```

Program to produce an assembly language source segment of a font file in
screen format. The characters are converted and stored by the rows.
The matrix is extracted, beginning at the top left corner of the characters.
Use /y=n and /x=n to adjust the size of the letters produced:
/y=  Number of rows (in y-direction)
/x=  Number of columns (in x-direction)

TO ACHIEVE BEST RESULTS, USE "DOUBLE_ALLOWED=Y" and /N with FONTED.

Make sure, all characters reside in the rectangle that is to be chosen for
extraction.
This utility is provided to make the building of screen fonts from existing
printer fonts a bit easier. Use FONT8 to edit screen fonts.
You will need an assembler and a linker to actually use the screen fonts.


Suggested usage:
1)   Produce/edit/optimize an appropriate PRINTER FONT
2)   Store the font, save it for reference
3)   Edit the entire font, scale the characters down, squeeze them
     in the top left corner of the edit matrix
4)   Convert your font to screen format
5)   Using your assembler, produce a routine that loads your font
     to your computer's display memory


NOTA BENE: The FONTCONV program reads FONTED.CNF as FONTED does!


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2097

     Volume in drive A has no label
     Directory of A:\

    FILE2097 TXT      2147   3-23-90  12:21p
    FONTS    ARC     29474   3-06-90  10:21a
    FONTTEST ARC       509   3-03-90   4:06p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       848   1-01-80   3:00a
    HD2      BAT       314   3-07-90   2:26a
    PROGS    ARC    272698   3-05-90  10:21a
    SCRFONTS ARC      4954   3-06-90   2:25p
    XARC     COM     12242   4-27-87   1:00p
            9 file(s)     323224 bytes
                           34816 bytes free
