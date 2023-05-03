---
layout: page
title: "PC-SIG Diskette Library (Disk #2650)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2650/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/2000-2999/DISK2650/DISK2650.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2650"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2650.TXT

{% raw %}
```
Disk No: 2650                                                           
Disk Title: BLANK-IT, PIK, and BOTHSIDES                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Blank-It                                                 
Author Version: 4.1A                                                    
Author Registration: $10.00/$15.00                                      
Special Requirements: Hard drive.                                       
                                                                        
BLANK-IT is a program that will black out the computer display after a  
certain "timeout" period to prevent screen burning.  "Burn-in," not an  
uncommon problem, results from allowing a computer screen to display the
same image for long periods of time, and can ruin a monitor.            
                                                                        
As long as the computer keyboard is in use, there's no evidence that    
BLANK-IT is even running. However, if the keyboard is left untouched for
several minutes (customizeable from 1 to 59 minutes), then the screen   
will automatically blank. When the space bar is pressed, the screen will
reappear and the user will be right where he or she left off.           
                                                                        
BLANK-IT contains several advanced features, such as a quick-blank "hot 
key" (sometimes referred to as a "Boss Key"), and the ability to        
enable/disable BLANK-IT while it's loaded. It uses only 528 bytes of    
memory, works during high speed communication, and has added support for
graphics mode.                                                          
Program Title: PIK                                                      
Author Version: 1.20                                                    
Author Registration: $7.00/$15.00                                       
Special Requirements: Hard drive.                                       
                                                                        
PIK is a useful little 32K utility which allows you to pick files from  
the standard DOS "DIR" display to mark for Deleting, Copying, Moving or 
Zipping into a Zip format compressed file.                              
                                                                        
How many times have you typed "DIR" to examine the contents of a        
directory and seen several files which should be moved, deleted, or     
stored for later use in ZIP format.  Typing the commands necessary to   
accomplish the task could take some time. By typing "PIK," you can      
select the files upon which to perform the necessary operation right    
from the display left behind by the "DIR" command.  Once the files have 
been marked, you just press ENTER and you are on your way to keeping    
your files updated.                                                     
Program Title: BothSides                                                
Author Version: 3.5                                                     
Author Registration: $10.00/$15.00                                      
Special Requirements: Hard drive.                                       
                                                                        
As its name indicates, BOTHSIDES formats text files of any pagination   
method so they can be printed to both sides of your printer paper. The  
program can send your file directly to the printer. First it prints the 
odd numbered pages, then stops to let you turn the paper over and prints
the even numbered pages.                                                
                                                                        
It can also format your text files by paginating them and printing a    
footer containing title line and page number at the bottom of every     
page.  In addition, you can specify an inside margin to leave more room 
for binder holes!                                                       
                                                                        
Imagine how much paper you could save and how much thinner your         
documentation will be from all the shareware packages you print out!    
                                                                        
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
║        <<<<  PC-SIG Disk #2650  BLANK-IT, PIK, & BOTHSIDES  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  NOTE: All of the three programs have been made into self-extracting    ║
║        files for organizational and space-saving purposes. There        ║
║        is a note on the documentation of both PIK and BOTHSIDES that    ║
║        you will need PKUNZIP in order to access the files of each       ║
║        program. However, for your convenience, each of the three pro-   ║
║        grams has been changed into a form (.EXE) so that PKUNZIP is     ║
║        no longer a requirement.                                         ║
║                                                                         ║
║  BLANK-IT =                                                             ║
║        Copy BLANK-IT.EXE to [hard drive:\subdirectory].                 ║
║                                                                         ║
║        To extract the files, type:  BLANK-IT  (press Enter)             ║
║                                                                         ║
║        To print the documentation and installation instructions, type:  ║
║                  COPY BLANK-IT.DOC PRN  (press Enter)                   ║
║                  COPY README.DOC PRN    (press Enter)                   ║
║                                                                         ║
║        To print the registration form, type:  COPY REGISTER.DOC PRN     ║
║                                                                         ║
║  PIK = Copy PIK120.* to [hard drive:\subdirectory].                     ║
║                                                                         ║
║        To extract the files, type:  PIK120  (press Enter)               ║
║                                                                         ║
║        To print the documentation and installation instructions, type:  ║
║                  COPY PIK.DOC PRN  (press Enter)                        ║
║                  COPY ORDER.FRM PRN  (press Enter)                      ║
║                                                                         ║
║  BOTHSIDES =                                                            ║
║        Copy BOTH35.* to [hard drive:\subdirectory].                     ║
║                                                                         ║
║        To extract the files, type:  BOTH35  (press Enter)               ║
║                                                                         ║
║        To print the documentation and installation instructions, type:  ║
║                  COPY BOTH.DOC PRN  (press Enter)                       ║
║                  COPY ORDER.FRM PRN  (press Enter)                      ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2650

     Volume in drive A is #2650 S1.0
     Directory of A:\

    BLANK-IT EXE     70322   6-26-91  11:21a
    BOTH35   MSG      2498   4-10-91   5:00p
    PIK120   MSG       837   4-10-91   5:00p
    GO       BAT        38   1-31-91  12:58a
    BOTH35   EXE     94299   6-26-91  11:27a
    PIK120   EXE     52109   6-26-91  11:28a
    FILE2650 TXT      4885   6-26-91  12:09p
    GO       TXT      3312   6-26-91  12:12p
    PIK      DOC     13358   3-07-91   5:00p
    PIK      EXE     32283   3-07-91   5:00p
    ORDER    FRM      2760   3-07-91   5:00p
           11 file(s)     276701 bytes
                           79872 bytes free

![PC-SIG Library Disk #2650]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/2000-2999/DISK2650/DISK2650.jpg)
