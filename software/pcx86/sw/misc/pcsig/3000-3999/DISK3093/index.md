---
layout: page
title: "PC-SIG Diskette Library (Disk #3093)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3093/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3093"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3093.TXT

{% raw %}
```
Disk No: 3093                                                           
Disk Title: *The Auto Doctor                                            
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: The Auto Doctor                                          
Author Version: 1.0                                                     
Author Registration: $20.00                                             
Special Requirements: Graphics card and monitor.                        
                                                                        
THE AUTO DOCTOR is for those people who repair their own car and need a 
quick and easy way to diagnose a problem.  The THE AUTO DOCTOR has a    
database of 76 symptoms and 576 causes.  The causes are listed in order 
based upon frequency of occurrence, difficulty of repair, and the cost  
of repair.  Categories addressed by THE AUTO DOCTOR include the         
following:  engine, fuel, starting system, ignition, brakes, power      
steering, cooling system, air conditioning, clutch, manual transmission 
and automatic transmission.  Even if you do not repair your own car, THE
AUTO DOCTOR will help you become more informed when you have your car   
repaired by a mechanic.                                                 
                                                                        
                                                                        
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
║             <<<<  PC-SIG Disk #3093  THE AUTO DOCTOR  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation, type:  COPY README.DOC PRN  (press Enter)  ║
║                                                                         ║
║  To start the program, type:  ADOC  (press Enter)                       ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```




                                The Auto Doctor

                                  Version 1.0





                                Copyright 1990

                              All Rights Reserved


                                  DR Software
                                7754 Skyline Drive
                             Sherrills Ford, NC  28673














































1. Introduction


The Auto Doctor is a program which diagnoses the most common car problems.
It has a database of 76 symptoms and 576 causes.

If you do your own car repairs, the auto doctor can save you time and
money. Causes for problems are listed in the most efficient order to check
them based upon frequency of occurence, difficulty of repair, and cost of
repair.

If you take your car to a mechanic for repair, The Auto Doctor can help
make you a better informed customer. It will help you to determine whether
the repairs the mechanic estimates are correct and necessary.


2. How to use the program


To diagnose a problem with The Auto Doctor, you simply select the part of
your car which has a problem and the symptoms from a set of menus.
Selections are made by pressing the key for the number or letter next to a
menu item. You can back up one level in the menus by pressing the escape
key. To exit the program, press the escape key until you have left the
first menu.

To start The Auto Doctor, type ADOC at the DOS prompt.

If you would like to print any of the problem lists, run GRAPHICS.COM
before starting The Auto Doctor and then press the print screen key to
print. GRAPHICS.COM comes with DOS so you should have it on your DOS
diskette or the DOS directory of your hard disk.


3. Technical information


The Auto Doctor runs on the IBM PC (PC, PCjr, XT, AT, PS/1, PS/2) and
compatibles. It requires a graphics display - either color or mono. The
program is designed to automatically sense the display adapter you are
using. For some systems which are not 100% IBM compatible, the program will
not be able to sense the display adapter and will provide an error message.
If this happens, rename or copy the appropriate display driver for your
system (CGA.COM, EGA.COM, VGA.COM, etc.) to MATRIX.COM.

If you want to print from The Auto Doctor, you must have a graphics capable
printer. Most dot matrix and lazer printers can print graphics, but most
daisy wheel printers cannot.


4. Feedback


If you have suggestions for improving The Auto Doctor or ideas for new
programs, please write to DR Software. We will use your comments to help
produce improved versions of our programs in the future.


5. User supported software


The Auto Doctor is distributed as a shareware program. Shareware programs
let you "try before you buy". If you find the program to be useful, you are
requested to become a registered user for $20. We ask you to help us
distribute The Auto Doctor by sharing unmodified copies with others.

Shareware provides quality software at a reasonable price. You don't pay
for the advertising and fancy packaging that inflates the price of
store-bought software. Shareware authors depend upon your support, though.
By registering your shareware programs you encourage the development of
more and better low-cost alternatives to commercial programs.


6. Registering


To order The Auto Doctor or register for continued usage, complete the
following form and submit it to DR Software with a $20 registration fee.
Registered users will be eligible for discounts on future versions of the
program.


Name:_____________________________________________________________________

Street Address:___________________________________________________________

               ___________________________________________________________

City:_____________________________ State:_______________ Zip Code:________


Quantity

______ The Auto Doctor registration           @ $20 each   _______


______ Registered copies [ ] 3.5"  [ ] 5.25"  @ $20 each   _______

                                              Total        _______

    Remit to:

              DR Software
              7754 Skyline Drive
              Sherrills Ford, NC  28673


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3093

     Volume in drive A has no label
     Directory of A:\

    ADOC     EXE    114046   9-24-90   7:32p
    README   DOC      4343   9-28-90   1:47p
    EGA      COM     39656   4-11-90   9:23a
    CGA      COM     36792   4-11-90   9:23a
    HGA      COM     37384   4-11-90   9:23a
    VGA      COM     39640   4-11-90   9:23a
    ATT6300  COM     36776   3-01-90   9:00a
    MCGA     COM     36392   3-01-90   9:00a
    GO       TXT       693   7-21-92   4:14a
    GO       BAT        38   1-31-91  12:58a
    FILE3093 TXT      1925   5-28-92  12:09p
           11 file(s)     347685 bytes
                           10240 bytes free
