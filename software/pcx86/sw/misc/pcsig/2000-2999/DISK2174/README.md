---
layout: page
title: "PC-SIG Diskette Library (Disk #2174)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2174/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2174"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOCIAL SECURITY CALCULATOR"

    Will you receive the maximum Social Security retirement benefits?  If
    you're uncertain, SOCIAL SECURITY CALCULATOR will tell you. It will
    estimate what your monthly retirement payment check will be for you and
    your dependent(s) for both retirement at age 65 and for optional
    retirement at earlier or later ages of your choice. It will also show
    the reduction in your monthly payment if you have continued earned
    income and/or if you have a pension based upon wages which were not
    subject to Social Security deductions.
    
    Although there is no manual, the program is easy to follow. Data is
    included for those born between 1917 and 1949.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2174.TXT

{% raw %}
```
Disk No: 2174                                                           
Disk Title: Social Security Calculator                                  
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Social Security Calculator                               
Author Version: 1990-                                                   
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Are you fully vested to receive Social Security retirement benefits?  If
you're uncertain SOCIAL SECURITY CALCULATOR will tell you.  It prompts  
for certain information and then calculates how many quarters you have  
paid in and how many you need, if any, to be fully vested.  It will also
estimate what your monthly retirement payment check will be.            
                                                                        
The data entry screen asks for such information as annual salary and    
annual social security contributions for every year you have worked.    
There no setup program.  Although there isn't a lengthy manual, the     
program is easy to follow.  You must have been born prior to 1949 to    
use this program.                                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PC-SIG.DOC

{% raw %}
```
         *****  SOCIAL SECURITY CALCULATOR - Version 1990  *****
 
This program uses the Average Indexed Monthly Income method used by
the Social Security Administration to calculate most Social Security
monthly payment checks.  (Your year of birth must be 1917 to 1948.)
 
It's intended use is by Financial Planners or other individuals
wishing to make an approximate estimate of Social Security monthly
payment checks.  Of special interest is the capability to show the
effect of various options for planning purposes, including:
 
	       Early / Delayed Retirement
	       Continued employment with Earned Income
	       Pensions from employment not subject to FICA withholding
	       Payments to Dependants - Children
				      - Parents
	       Family Maximum Benefits
	       Special Minimum Benefits
 
A more rigorous analysis is available from the Social Security Admin
once you reach 60 years of age.  Additionally, a periodic request to
them to review their records of your annual earnings history is
recommended, since there is a statute of limitations on making
corrections to their records.
 
This 1990 version includes escalation and related calculation
factors published by the Social Security Administration through 1989
for use in monthly payment checks beginning in January 1990.
 
The Social Security Administration normally updates these factors
during the fall of each year.  Thus, while using this program for
subsequent years will provide an approximate answer, the user must
provide his own corrections for escalation. (See later Updates info)

The program is menu driven, with frequent text screens to assist the
user in understanding the method used in the calculations.
The program is designed for use with an IBM, or compatible computer,
256K of memory, one floppy disk drive, and a monochrome monitor.

The files contained on the floppy disk are as follows:
	SSCALC.EXE	The main program.
	README.EXE	A set of instructions and list of limitations
	DEMOFILE	Each use generates an automatically saved pair
	DEMOFILE.WAG    of files. FILENAME, (which contains your
			Personal Data such as Name, locators, SS #,
			birth year, retirement date and dependent data.
			FILENAME.WAG contains your wages data.
 
			DEMOFILE and DEMOFILE.WAG are simply previous
			entries you can use for demonstration purposes.
	PC-SIG.doc      This file.
 
The program is started by Entering the command SSCALC.
 
There is no fee for using this 1990 version on an individual basis.
 
A Professional Version, which is designed for repeated rather than
individual usage, and which is updated annually with new escalation
data published by the Social Security Administration, is available
for distribution each January.  The registration fee is $25 plus $3
for shipping and handling.  (Californians add appropriate sales tax)
 
Annual Updates of this Professional Version are available for a
nominal charge to registered users.
 
Registration will provide users with:
	A copy of the current year version of the Professional program
	Free advice on installation and operation of the program
	Information on, and the right to order, annual upgrades.
 
There are no manuals since extensive documentation is available 
on the program disk.
 
Requests for Registration should be addressed to:
 
		     Income Tax Aid
		     823 Del Ganado Road
		     San Rafael, CA 94903

     *************************************************

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2174

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        24  12-18-89  10:52a
    SSCALC   EXE    126814   2-07-90  10:20a
    README   EXE     39038   5-30-90   5:18p
    PC-SIG   DOC      3508  12-10-89  11:04p
    DEMOFILE           211   5-30-90  11:29p
    DEMOFILE WAG       320  12-10-89  11:12p
    FILE2174 TXT      1925   7-13-90  11:17p
            7 file(s)     171840 bytes
                          146432 bytes free
