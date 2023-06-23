---
layout: page
title: "PC-SIG Diskette Library (Disk #1693)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1693/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1693"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AMORTIZATION CALCULATOR"

    Thinking of taking out a loan on your house, or buying a new house?  Let
    the AMORTIZATION CALCULATOR calculate and print the payment amount and
    schedule for you.
    
    Calculate loans of up to $500,000 for a term of up to 480 months (40
    years).  Taxes and insurance costs can also be entered as needed to
    calculate the total monthly payment, giving you a true monthly payment
    amount.  Since all loan information is on the main screen and is
    updated
    as you enter amounts and rates, you automatically see the results of
    your loan. This is great if you are interested in doing "what-ifs" to
    find the right loan.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1693.TXT

{% raw %}
```
Disk No: 1693                                                           
Disk Title: Amortization Calculator                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Amortization Calculation                                 
Author Version: 1.01                                                    
Author Registration: $20.00                                             
Special Requirements: 640KB                                             
                                                                        
Thinking of taking out a loan on your house, or buying a new house?  Let
the AMORTIZATION CALCULATOR calculate and print the payment amount and  
schedule for you.                                                       
                                                                        
Calculate loans of up to $500,000 for a term of up to 480 months (40    
years).  Taxes and insurance costs can also be entered as needed to     
calculate the total monthly payment, giving you a true monthly payment  
amount. Since all loan information is on the main screen and is updated 
as you enter amounts and rates, you automatically see the results of    
your loan. This is great if you are interested in doing "what-ifs" to   
find the right loan.                                                    
                                                                        
                                                                        
                                                                        
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
║          <<<<  Disk #1693  AMORTIZATION CALCULATOR  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To extract program files, type:  AMORTIZE (press enter)                 ║
║ To start program, type:  AMORT (press enter)                            ║
║                                                                         ║
║ To print documentation after extracting, type:  COPY AMORT.DOC PRN      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```

                                HOW TO INSTALL

    The main file on  this  diskette  is  called  AMORTIZE.EXE  and  is  an
    archived  file.  An  archived  file is a composite of several files and
    each file must be extracted before the Amortization Calculator  can  be
    operated.

    In  order  to  extract  the  program files, simply follow the following
    instructions :

          1    -     COPY  AMORTIZE.EXE  TO  THE  DISK  THAT  YOU  WILL  BE
                     OPERATING FROM.  PREFERRABLY A HARD DRIVE.

          2    -     AT THE DOS PROMPT, TYPE THE WORD AMORTIZE

          3     -    YOU  WILL  SEE A SERIES OF TEXT LINES APPEAR ON YOUR
                     SCREEN, THESE ARE THE FILES BEING EXTRACTED FROM THE
                     ARCHIVED FILE.

          4    -     ONCE THE EXTRACTION PROCEDURE IS COMPLETE, YOU WILL BE
                     RETURNED TO THE DOS PROMPT.

          5    -     AT THIS POINT, TYPE THE WORD VIEWAMRT TO  READ  AND/OR
                     PRINT THE DOCUMENTATION.

          6    -     TO RUN THE AMORTIZTION PROGRAM, TYPE THE WORD AMORT AT
                     THE DOS PROMPT AND FOLLOW THE DIRECTIONS. ON-LINE HELP
                     IS ACCESSED BY PRESSING <F1>.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1693

     Volume in drive A has no label
     Directory of A:\

    AMORTIZE EXE    175086   6-19-89   7:08p
    FILE1693 TXT      2073  12-11-89   6:52p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  12-12-89  12:10p
    README   DOC      1263   5-06-89   9:08p
            5 file(s)     179077 bytes
                          140288 bytes free
