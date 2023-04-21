---
layout: page
title: "PC-SIG Diskette Library (Disk #2096)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2096/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2096"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FONTED DISK 1 OF 2 (ALSO 2097)"

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

## FILE2096.TXT

{% raw %}
```
Disk No: 2096                                                           
Disk Title: FONTED Disk 1 of 2 (also 2097)                              
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

## CHARCONV.DOC

{% raw %}
```

			CHARCONV Font converter
			=======================

In addition to the font editor	proper, you will find a utility  program
CHARCONV that converts a FONTED binary font file to an assembly language
source program, which can be fed directly into an assembler to produce a
self-loading .COM program from the font.  Thus, you can distribute  your
fonts more freely.  They also load slightly faster.  The resulting  font
"programs"  set  the  errorlevel  automatically,  if  the  printer   was
off-line:  This helps building more  powerful batch files.  To use  this
program, you will need an assembler, linker and a program to convert  an
.EXE file to a .COM file (EXE2BIN).



```
{% endraw %}

## SELECT.DOC

{% raw %}
```

 SELECT selects individual 16-byte-characters from different files, according to
 instructions, given in SLECT.SCR.

 SELECT.SCR    consists of lines, that start with a filename,
 a blank, comma, : or ;
 and the numbers of the characters in sequence, to be extracted.
 Empty lines or comment lines are ignored.

 Output is to the file passed as argument





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2096

     Volume in drive A has no label
     Directory of A:\

    COLLECT  ARC     51418   3-07-90  10:39p
    FILE2096 TXT      2147   3-23-90  12:20p
    FONTED   ARC    239734   3-06-90   2:16p
    FONTED   INF      2403   3-06-90   2:22p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       848   1-01-80   3:04a
    HD1      BAT       365   3-07-90   2:26a
    XARC     COM     12242   4-27-87   1:00p
            8 file(s)     309195 bytes
                            8192 bytes free
