---
layout: page
title: "PC-SIG Diskette Library (Disk #1522)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1522/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1522"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER CONTROL PROGRAM - PRINTER TEST"

    PRINT CONTROL PROGRAM (PCP) is a time saver for busy computer users.
    Memory resident, it gives your PrtScr command all the power of your
    printer with a few keystrokes.
    
    Pop it up while running any other program.  PCP menus let you send
    control codes to the printer to select print modes.  Print any
    rectangular area of the screen.  Set margins on the printed page.  The
    printed image shows underlining, high intensity, reverse video and high
    order ASCII characters - whatever your printer can support.
    
    PCP lets you type anywhere on the screen.  You can use
    this to edit or annotate displays before printing.  The original screen
    is restored when you leave PCP.
    
    PCP is a handy way to enhance reports, make documentation more
    readable, or just to get access to the full capability of your
    printer.
    
    PRN-TEST provides for testing the complete instruction sets of
    Centronics 102A printers, standard Okidata printers, or any printer
    compatible with the IBM graphics printer.  Also, makes your printer show
    you ALL the possible characters it can print!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1522.TXT

{% raw %}
```
Disk No: 1522                                                           
Disk Title: Printer Control Program - Printer Test                      
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Print Control Program                                    
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: Printer.                                          
                                                                        
PRINT CONTROL PROGRAM (PCP) is a time saver for busy computer users.    
Memory resident, it gives your PrtScr command all the power of          
your printer with a few key strokes.                                    
                                                                        
Choose to print the entire screen or any rectangular portion of it.  The
screen segment you choose to print can be enhanced with whatever        
printing options your hardware can support.  No more stopping to get out
the printer manual to reprogram printers.  No more swapping print       
definition files.                                                       
                                                                        
Hold down two keys and menus start popping up on screen.  Decision time.
Will it be compressed, near letter quality, bold or extra bold print?   
You can underline, change print size and line spacing, print in bold    
letters, print reverse-screen, change margins and anything else your    
printer can do.  You can even send control character sequences to the   
printer from within other programs.                                     
                                                                        
PCP is a handy way to enhance reports, make documentation more readable,
emphasize training material, or just send incredibly attractive memos.  
Program Title: Prntest                                                  
Author Version: 05/90                                                   
Author Registration: $15.00                                             
Special Requirements: Printer.                                          
                                                                        
PRN-TEST provides for testing the complete instruction sets of          
Centronics 102A printers, standard Okidata printers, or any printer     
compatible with the IBM graphics printer.  Also, makes your printer show
you ALL the possible characters it can print!                           
                                                                        
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
║               <<<<  Disk #1522 PRNTEST PROGRAM  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start PRINT CONTROL PROGRAM, type:  PCP (press enter)                ║
║                                                                         ║
║ To start PRNTEST, type:  PRNTEST (press enter)                          ║
║                                                                         ║
║ To print out the documentation, type:                                   ║
║              COPY PRNTEST.DOC PRN (press enter)                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1522

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   7-14-89   8:01a
    COPYRITE IFO       834   5-07-90   8:49p
    GO       TXT       960   7-09-90   2:52a
    PRNTEST  DOC     13653   5-29-90   6:12p
    PRNTEST  EXE     67621   5-29-90   4:47p
    FILE1522 TXT      3183   7-10-90   2:16p
    PCP      COM     12865   2-09-90  12:46p
    PCP      DOC     22272   2-08-90  11:08p
    PRINTER  COD       243   2-08-90   8:48p
    README   PCP      1536   2-09-90   9:49a
           10 file(s)     123205 bytes
                           34304 bytes free
