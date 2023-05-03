---
layout: page
title: "PC-SIG Diskette Library (Disk #2048)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2048/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2048"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WARP-TEN AND PRINT-MATIC"

    "Cache in" on better speed and flexibility with WARP-TEN.  WARP-TEN is a
    programmable disk cache for speeding up the relatively slow I/O that
    most applications perform with disk drives.  Borrowing a technique from
    the world of mainframes and minicomputers, the basic idea is to use
    part of the PC's memory as buffers to store the more frequently used
    disk data.  Thus, when your application calls for this data, the cache
    program speedily retrieves it, increasing the speed of your programs by
    an average of 25 percent.
    
    WARP-TEN is a revolutionary product that recognizes that not all
    applications are equal in their disk access.  To better utilize
    the caching concept, the author also provides a program (Warp-Din) that
    will de-install the disk cache, allowing the PC user to either regain
    all of WARP-TEN's memory for applications that don't need caching, or to
    respecify WARP-TEN with either more or fewer RAM buffers.
    
    Warpstat, another program provided in this package, enables the user to
    check to see if the cache being used is optimal for the application that
    just ran.  All these features allow the users to tailor the use of
    caching to fit their unique requirements.
    
    PRINT-MATIC alleviates the hassle of sending setup control codes to your
    printer.  It consists of two separate utilities:  PMATIC and PMACRO.
    With PMATIC, you can press a pre-defined hot key inside any application,
    and a window pops onto the screen from which one of the 16 user-defined
    control codes may be sent to the printer.  PMATIC will work inside most
    application programs.
    
    With PMACRO, printer features that you couldn't use before become
    accessible, allowing you to embed printer control codes in a document to
    control the print output.  You can define up to 100 macros as control
    codes, each up to 25 characters long.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXAMPLE.DOC

{% raw %}
```
This document will give you an idea as to how PMACRO works and how it will
make your printer be more productive.  It is being written with an editor
that has no printer control commands.  All control codes that eventually
reach the printer will be as a result of PMACRO.  The control codes
that I will use are in the file "FX80MAC.PRN", which was created with PMACRO.
Since that file is for an Epson FX80 printer, you will have to load it into
PMACRO and redo the control codes if you have a different printer.  You would
then execute RPMACRO, passing either FX80MAC.PRN or the file you created as
a command line argument.  Once RPMACRO is resident in RAM, simply enter at the
DOS prompt "type example.doc > prn" and press the return key.  Compare the
output from the printer with this file and you will understand what PMACRO can
do for you.  Now let's show you what PMACRO can do.

It is impossible for some word processors (Wordstar, for instance) to switch
to Italics inside a document.  With PMACRO, it's as easy as this:
~italic on~This text is now being printed in italics.  Let's change back to regular
print now.~italic off~  How about some underlining??  Simply surround the descriptive
phrase that you set up in PMACRO with the trigger key, and you have
underlining! ~ul on~ And this is what you get.~ul off~  Have you ever wanted to switch to
compressed mode from within a document?  That's easy too!

~comp on~Here is an example of what that would look like.  Any mode that is supported
by your printer can be accessed.  You are no longer at the mercy of your word
processor.  Now, back to standard print.~comp off~

Printers are getting more sophisticated all the time.  New laser printers
with many different fonts are hitting the market.  However, these new features
can not be used until the word processor manufacturers support the new control
codes - until now.  PMACRO will allow you to send any control code (25 
characters in length or less) to any printer.

Note that if you put a phrase that is not in the file in your document, it
will print out normally.  Like this - ~elite on~
Also note that if you forget to include the ending trigger character, no
control codes will be sent to the printer.  Instead the text will appear
as is.  ~elite offThis should make it simple for you to debug any problems you might
encounter.  In short, if the sequence prints out, something is wrong and
your phrase is not getting translated.

```
{% endraw %}

## FILE2048.TXT

{% raw %}
```
Disk No: 2048                                                           
Disk Title: WARP-TEN and PRINT-matic                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: WARP-TEN and PRINT-matic                                 
Author Version: 2.00/                                                   
Author Registration: $20.00 each.                                       
Special Requirements: Hard drive for WARP-TEN.                          
                                                                        
Cache in on better speed and flexibility with WARP-TEN.  WARP-TEN is a  
programmable disk cache for speeding up the relatively slow I/O that    
most applications perform with disk drives.  Borrowing a technique      
from the world of mainframes and minicomputers, the basic idea is to use
part of the PC's memory as buffers to store the more frequently used    
disk data.  Thus, when your application calls for this data, the cache  
program speedily retrieves it, increasing the speed of your programs by 
an average of 25 percent.                                               
                                                                        
A separate statistics program called WARPSTAT is also included that     
gives you feedback on WARP-TEN's performance                            
                                                                        
PRINT-MATIC alleviates the hassle of sending setup control codes to your
printer.  With PRINT-MATIC, you can press a pre-defined hot key inside  
any application, and a window pops onto the screen from which one of the
16 user-defined control codes may be sent to the printer.  This same    
program also includes 100 macros that will access printer features you  
couldn't use before.  PRINT-MATIC will work inside most application     
programs.                                                               
                                                                        
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
║          <<<<  Disk #2048  WARP-TEN and PRINT-matic  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start WARP-TEN, type:  WARPTEN (press enter)                         ║
║ To start PRINT-MATIC, type:  PMATIC (press enter)                       ║
║                                                                         ║
║ To print documentation, type:  COPY MANUAL PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2048

     Volume in drive A has no label
     Directory of A:\

    CITO8510 PMC      3701  12-21-86   1:04a
    CITO8510 PMT       805  12-10-86   1:04a
    EXAMPLE  DOC      2487  12-21-86   1:04a
    FILE2048 TXT      2517   1-17-90   6:20p
    FX80     PMC      3701  12-21-86   1:04a
    FX80     PMT       805  12-16-86   1:04a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-17-90   6:30p
    MANUAL           57806   1-17-90   6:11p
    NRPMATIC EXE      7302   1-02-87   1:04a
    PMACRO   EXE     28982   3-01-87   1:04a
    PMATIC   EXE     29396   5-19-87   1:04a
    README            4475   1-04-90   1:54p
    RPMACDIN COM       269  11-30-86   1:04a
    RPMACRO  EXE      5718   1-02-87   1:04a
    RPMATDIN COM       268   2-13-88   1:04a
    RPMATIC  EXE      6926   2-14-88   1:04a
    WARPDIN  COM       267  12-28-86   2:00a
    WARPRSET COM       126   5-13-86   2:00a
    WARPSTAT EXE     14884   4-17-88   2:00a
    WARPTEN  COM      1868   4-13-88   2:00a
           21 file(s)     172958 bytes
                          138240 bytes free
