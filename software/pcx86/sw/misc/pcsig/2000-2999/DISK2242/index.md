---
layout: page
title: "PC-SIG Diskette Library (Disk #2242)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2242/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2242"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GENESIS: SERIES II 1 OF 2 (2243 ALSO)"

    Turn your computer into a check-writing machine with GENESIS: SERIES
    II. It's an easy-to-use home check writing program. So simple, in fact,
    that anyone who now maintains a checkbook by hand already knows the
    basics. The display screens even look just like your checkbook --right
    down to the names on the checks.
    
    GENESIS automatically does all the calculations that you do now hand,
    but it won't make any mistakes. Balance your checkbook in a fraction of
    the usual time, and if you are out of balance, it will help you find
    and correct the error. Print your checks, configured to your specific
    printer. You don't even need special checks -- the check on the screen
    will look similar to the one you are using.
    
    Keep track of tax deductions or anything else that you want to
    categorize. Search for a check written months ago with only the barest
    of information, and then get a report on the findings. Checks that you
    write to the same companies over and over will be kept in memory, ready
    to be used at the push of a key. Tired of addressing envelopes? The
    program does it for you. To keep prying eyes out, give GENESIS a
    password and your checkbook is locked. There is also multiple
    checkbook support.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2242.TXT

{% raw %}
```
Disk No: 2242                                                           
Disk Title: GENESIS: Series II 1 of 2 (2243 also)                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Genesis:  Series II                                      
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: CGA.                                              
                                                                        
Turn your computer into a check writing machine with GENESIS: SERIES    
II.  GENESIS is a full-featured yet easy to use home check writing      
program.  GENESIS is so simple to use that anyone who now maintains a   
checkbook by hand already knows the basics.  The display screens even   
look just like your checkbook - right down to the names on the checks.  
                                                                        
GENESIS will keep your checkbook on disk.  It will automatically do     
all the calculations that you now do by hand but it won't make any      
mistakes.  It will balance your checkbook in a fraction of the usual    
time, and if you are out of balance, it will help you find and correct  
the error.  GENESIS will print your checks, configured to you specific  
printer.  You will not need special checks.  Even the check on the      
screen will look similar to the one you are using.                      
                                                                        
GENESIS will keep track of your tax deductions, or anything else that   
you want to categorize.  It will search for a check written months ago  
with only the barest of information, and then report on the findings.   
Checks that you write to the same companies over and over will be kept  
in memory, ready to be used at the push of a key.  Tired of addressing  
envelopes, GENESIS will do it for you.  Want to keep prying eyes out,   
give GENESIS a password and your checkbook is locked.  GENESIS will     
also support multiple checkbooks.                                       
                                                                        
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
║<<<<  PC-SIG Disk #2242 GENESIS: Series II PROGRAM DISK (also 2243) >>>> ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   For special instructions on installing the program, type:             ║
║                          COPY README.DOC PRN                            ║
║                                                                         ║
║   To install the program on hard drive C:, type: INSHD1 (press enter)   ║
║                                                                         ║
║   To start program once the installation is complete, type: GENESIS     ║
║                                                                         ║
║   To print documentation, type: PRINTDOC (press enter)                  ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
              MANUAL

              Before you do another thing, read the  Genesis  manual.   This
              manual can be sent to your printer by typing  PRINTDOC  at the
              A: prompt with the Help Disk in Drive A.


              STRIPDOC

              If you are going to use  Genesis  from  a  floppy drive or two
              floppy drives and not a hard disk,  it  is advisable to remove
              the manual file from the  operating  (Backup Help Disk)  disk.
              This will free up valuable  space  on this disk if it is to be
              used to hold the data files.   This  can  be  done  by  typing
              STRIPDOC from the DOS prompt with the  Help Disk  in the drive
              or simply deleting the file named  "GENASCII.V20"  if  you are
              familiar with  DOS commands.   MAKE SURE YOU HAVE REMOVED THIS
              FILE FROM THE  HELP DISK  THAT  YOU  WILL BE USING AND NOT THE
              ORIGINAL DISK AND MAKE SURE YOU  ALREADY  HAVE  ALREADY MADE A
              HARD COPY OF THE MANUAL AS  DESCRIBED  IN  THE PARAGRAPH ABOVE
              ENTITLED "MANUAL"!


              HARD DRIVE INSTALLATION

              The hard drive installation programs  (INSHD1 & INSHD2) assume
              that the  user is installing  Genesis to  Hard Drive "C"  from
              Floppy Drive "A".   If  you  are  not using this configuation,
              simply make a subdirectory of  your hard drive named "GENESIS"
              and then copy all the  files  from the supplied floppy disk to
              that subdirectory  (Refer  to  your  DOS manual if you are not
              sure how to do this).


              GENESIS PROGRAM FILES

              The list of files  in  Appendix D of the Genesis manual may be
              slightly  different  than  those  actually  shipped  on   your
              Genesis: Series II disk.    This is due to continuing improve-
              ments to the program that have been made since the manual went
              to  print.  This  will  not  affect the program's performance.


              MANUAL SECTION 3.0 - BEGINNING YOUR CHECKBOOK

              Your beginning balance must not exceed  $9,999.99.  If you are
              fortunate  enough  to be in this situation  (you obviously are
              not married or have children)  simply  enter  the  amount over
              $9,999.99  as  a  deposit to the checkbook (See Section 4.11).
      
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2242

     Volume in drive A has no label
     Directory of A:\

    ACCOUNTS DTA       131   7-13-89   4:56p
    ACCTS    DTA       131   7-13-89   4:44p
    GEN      BAT       458   2-08-90   6:14p
    GENESIS  2         256   1-10-88  12:23p
    GENESIS  BAT       458   2-08-90   6:14p
    GENV200  COM     22528   2-07-89   5:47p
    GENV201  OVL     44416   1-12-89   5:40p
    GENV202  OVL     13184   7-31-89  12:44p
    GENV203  OVL     21888   7-31-89  12:41p
    GENV204  OVL     12416   7-31-89  12:43p
    GENV205  OVL      9216   7-11-89  11:15p
    GENV206  OVL      4096   5-18-89   6:37p
    GENV207  OVL      9216   5-18-89   6:43p
    GENV208  OVL     17536   1-01-80  12:29a
    INSHD1   BAT       336   2-08-90   5:21p
    PRINTDOC BAT       430   2-08-90   5:06p
    PRINTER  1        1920  12-13-88  11:43a
    PRINTER  10       1920  11-28-88  11:52a
    PRINTER  11       1920  11-28-88  11:54a
    PRINTER  12       1920  11-28-88  11:55a
    PRINTER  13       1920  11-28-88  11:56a
    PRINTER  14       1920  11-28-88  11:58a
    PRINTER  15       1920   1-30-89   4:47p
    PRINTER  2        1920  11-28-88  11:14a
    PRINTER  3        1920  11-28-88  11:20a
    PRINTER  4        1920  11-28-88  11:23a
    PRINTER  5        1920  11-28-88  11:42a
    PRINTER  6        1920  11-28-88  11:45a
    PRINTER  7        1920  11-28-88  11:46a
    PRINTER  8        1920  11-28-88  11:48a
    PRINTER  9        1920  11-28-88  11:51a
    README   DOC      2527   2-08-90   5:55p
    REGFORM  BAT       321   2-08-90   4:16p
    FILE2242 TXT      2739   6-22-90   9:49a
    REGFORM  V20      2048  12-25-88  11:17a
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-22-90   9:46a
           37 file(s)     194247 bytes
                          114688 bytes free
