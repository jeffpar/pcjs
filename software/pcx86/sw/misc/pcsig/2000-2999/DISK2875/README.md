---
layout: page
title: "PC-SIG Diskette Library (Disk #2875)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2875/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2875"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EXAMPLE.BAS

{% raw %}
```bas
10 REM     This is a simple example on how to access speech from basic.
20 PRINT " GOOD AFTERNOON - WELCOME TO OUR DEMOSTRATION
30 SHELL "SW-TALK AFTERNOON WELTOOUR DEMO
40 PRINT " PRESS ENTER TO CONTINUE OR PRESS CTRL C TO EXIT
50 SHELL "SW-TALK ENTER CONTINUE OR CONTROLC EXIT
60 INPUT X
70 PRINT " PLEASE ENTER A MENU ITEM
80 SHELL " SW-TALK MENU
90 PRINT " THANK YOU FOR VISITING
100 SHELL " SW-TALK THANKYOU FORVISIT
110 PRINT " PLEASE SUPPORT THE SHAREWARE CONCEPT
120 SHELL "SW-TALK CONCEPT
130 SHELL "SW-TALK  PAUSE GOODBYE
```
{% endraw %}

## FILE2875.TXT

{% raw %}
```
Disk No: 2875                                                           
Disk Title: SW-Talk, The Voice Library                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: SW-Talk, The Voice Library                               
Author Version: 2.1                                                     
Author Registration: $25.00                                             
Special Requirements: 512K RAM. EGA/VGA and hard drive recommended.     
                                                                        
SW-TALK, THE VOICE LIBRARY is a new product for shareware authors and   
programmers. The library consists of over 100 words that can be used to 
spice up your programs and increase your registrations. Excellent voice 
quality that works through the PC speaker. The voice commands can be    
added to any batch file (*.bat) and/or added to your programs. This     
package is very easy to use; you simply need to type SW-TALK at the DOS 
prompt, followed by the words you would like to say (example: to say    
"Please register your shareware," type in "SW-talk register"). Also     
included in this package is a PCX display program that can be used to   
display pcx pictures. This will allow you to design a fancy introductory
screen for your program or give you a talking slide show capability.    
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```

                	 SW-TALK (THE VOICE LIBRARY)                 Vers 2.1
                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The VOICE LIBRARY is a NEW product for SHAREWARE AUTHORS/PROGRAMMERS.
   The library consist of over 100 words that can be used to give your
   programs a more professional touch and help increase your registrations.
   Excellent voice quality That works thru the PC speaker.  The voice 
   commands can be added to any batch file (*.bat) and/or added to your 
   programs (shell command). This package is very easy to use, you simply 
   need to type SW-TALK at the dos prompt, followed by the words you would 
   like to say (example: to say PLEASE REGISTER YOUR SHAREWARE, type in 
   "SW-TALK REGISTER").  Also included in this package is a PCX display 
   program that can be used to display pcx pictures. This will allow you
   to design a fancy intro. screen for your programs or create a TALKING
   SLIDE SHOW.


        * A VOICE LIBRARY with real HUMAN SPEECH.

        * Over 100 word/phrases on this disk.

        * PCX display capability (EGA/VGA, 640x350, 16 colors).

	* INCREASE YOU REGISTRATIONS WITH THIS PACKAGE.

        * SYSTEM REQUIREMENTS:  512K memory, one floppy
          disk and any  monitor. (harddrive recommended)

        * Designed to work on any IBM-PC Compatible.

	* Type "RUNME" to start the TUTORIAL program.

        * NOW THE PC CAN TALK.

	* Please register your shareware by sending $ 25.00 to:


			      C.S.S. Inc.
                             ORLANDO DARE
                           3005 Glenmore Ave.
			  Baltimore, MD 21214

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2875

     Volume in drive A has no label
     Directory of A:\

    RUNME    BAT       280  10-02-91   2:22p
    README   DOC      1647  10-02-91   2:22p
    SW-TALK  DOC     26867  10-02-91   2:22p
    SW-TALK  EXE     10018  10-02-91   2:22p
    TUTOR    BAT     12082  10-02-91   2:22p
    ALLWORDS BAT      1379  10-02-91   2:22p
    DISPLAY  EXE     12544  10-02-91   2:22p
    EXAMPLE  BAS       502  10-02-91   2:22p
    EXAMPLE  BAT      5685  10-02-91   2:22p
    INTRO    BAT        99  10-02-91   2:22p
    INTROSW  PCX     43924  10-02-91   2:22p
    ORDER    FRM      1366  10-02-91   2:22p
    PHONE    BAT       127  10-02-91   2:22p
    MAKE-BAT BAT       904  10-02-91   2:22p
    AFTERNOO          2048  10-02-91   2:22p
    ALARM             1536  10-02-91   2:22p
    AND               1087  10-02-91   2:22p
    ANYKEY            3966  10-02-91   2:22p
    BACKUP            7552  10-02-91   2:22p
    BYE               1152  10-02-91   2:22p
    COMEAGAI          1536  10-02-91   2:22p
    CONCEPT           6912  10-02-91   2:22p
    CONTINUE          1664  10-02-91   2:22p
    CONTROLC          4736  10-02-91   2:22p
    DEMO              2304  10-02-91   2:22p
    ENTER             4864  10-02-91   2:22p
    ESC               4224  10-02-91   2:22p
    EVALUATI         10879  10-02-91   2:22p
    EXIT              1024  10-02-91   2:22p
    FILENOT           3578  10-02-91   2:22p
    FORHELP           2560  10-02-91   2:22p
    FORUSING          3200  10-02-91   2:22p
    FORVISIT          2239  10-02-91   2:22p
    GOODBYE           1920  10-02-91   2:22p
    HELLO             1279  10-02-91   2:22p
    HI                1280  10-02-91   2:22p
    IFYOU             6144  10-02-91   2:22p
    INTROSW          12351  10-02-91   2:22p
    MAYIHELP          2304  10-02-91   2:22p
    MENU              5504  10-02-91   2:22p
    MORNING           1792  10-02-91   2:22p
    NAME              4992  10-02-91   2:22p
    NOTFREE           4992  10-02-91   2:22p
    OR                1152  10-02-91   2:22p
    PASSWORD          5760  10-02-91   2:22p
    PAUSE             1137  10-02-91   2:22p
    PHONERIN          3968  10-02-91   2:22p
    PLEASE            1599  10-02-91   2:22p
    PRESS             1024  10-02-91   2:22p
    PRESSF1           3456  10-02-91   2:22p
    PRODUCT           1792  10-02-91   2:22p
    QUIT              1280  10-02-91   2:22p
    RECEIVE           5760  10-02-91   2:22p
    REDO              1408  10-02-91   2:22p
    REGFEMAL          4416  10-02-91   2:22p
    REGISTER          6144  10-02-91   2:22p
    RETRY             1664  10-02-91   2:22p
    SUPPORT           3200  10-02-91   2:22p
    SW-IS            14653  10-02-91   2:22p
    THANKYOU          1536  10-02-91   2:22p
    THATIT            1280  10-02-91   2:22p
    TO                1024  10-02-91   2:22p
    TOPQUALI          4992  10-02-91   2:22p
    TRYBEFOR          7936  10-02-91   2:22p
    WARNING           1408  10-02-91   2:22p
    WAYTOGO           1664  10-02-91   2:22p
    WELCOME           1152  10-02-91   2:22p
    WELTOOUR          2816  10-02-91   2:22p
    WOW               1280  10-02-91   2:22p
    YESORNO           6016  10-02-91   2:22p
    YOUGOTIT          1408  10-02-91   2:22p
    GO       BAT        30  10-02-91   2:22p
    PRINTDOC BAT       264  10-02-91   2:22p
    FILE2875 TXT      2073  11-01-91   5:39p
           74 file(s)     320335 bytes
                            4096 bytes free
