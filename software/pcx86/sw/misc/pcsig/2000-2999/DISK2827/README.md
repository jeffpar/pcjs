---
layout: page
title: "PC-SIG Diskette Library (Disk #2827)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2827/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2827"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2827.TXT

{% raw %}
```
Disk No: 2827                                                           
Disk Title: *Metrocate                                                  
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Metrocate                                                
Author Version: 1.3                                                     
Author Registration: $33.00                                             
Special Requirements: No special requirements.                          
                                                                        
METROCATE performs all common (and many not so common) measurement unit 
conversions using a file of about 560 (and growing) measurement units.  
Provision is made for the user to add or change any of the provided     
conversions to meet any special purpose. There are over twenty unit     
types presently available:                                              
                                                                        
~ Length       ~ Pressure, stress                ~ eg Radian /cm        
~ Mass         ~ Energy, work, quantity of heat  ~ Angular velocity     
~ Time         ~ J/unit area, surface tension    ~ Angular acceleration 
~ Plane angle  ~ Density, mass density           ~ Power, radiant flux  
~ Temperature  ~ Moment of force, torque         ~ Newton               
~ Area         ~ Speed, velocity                 ~ Luminance            
~ Volume       ~ Acceleration                    ~ Illuminance          
~ Solid angle  ~ Volume rate                                            
                                                                        
And to add a little unique variety, currency was added to the list! In  
summary, here's a pretty handy reference tool for just about everyone,  
and especially students, teachers, researchers, scientists, and         
engineers.                                                              
                                                                        
                                                                        
                                                                        
                                                                        
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
║                <<<<  PC-SIG Disk #2827  METROCATE  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To view the program documentation, type:  L6 METROCAT.DOC  (press Enter)║
║                                                                         ║
║ To print the documentation, type:  COPY METROCAT.DOC PRN  (Enter)       ║
║                                                                         ║
║ To begin METROCATE, type:  METROCAT  (press Enter)                      ║
║                                                                         ║
║ NOTE: Program ordering information can be found within METROCATE.       ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## METROCAT.DOC

{% raw %}
```


		   METROCATE: Units Conversion
			  Version 1.3


METROCATE is simple to use - a little experimentation should solve problems.


NUMBER FORMATTING

Floating point numbers can be input in decimal or exponential notation.
   eg   Decimal          Exponential (e followed by power of 10)
	123000           1.23e5
	0.000078         7.8e-5
	523.98           5.2398e2

Generally the British standard is used for display but exponential notation
is used for small or large numbers.
These can be inspected using 'List to Screen'.

SIGNIFICANT FIGURES IN OUTPUT

The significant figures available in conversion factors is used to control
the number of significant figures in the output. The number of significant
figures output is 1 less than the least precise conversion factor.

UNIT DISPLAY PAGING

Fast or slow paging through conversion lists is available.
Slow paging uses the up and down arrow keys.
Fast paging uses the PgUp, PgDn, Prev or Next keys.

ALTERING CONVERSION FACTOR

Conversion factors are presented in alphabetical order of name.
Therefore a name change may result in a changed position in the list.

DESCRIPTION OF UNIT

To avoid inappropriate conversions (eg length to seconds), all conversion
factors are classified and assigned a 'Type' according to classification.
Only legitimate conversions are presented at the 'Convert Units' Option.
Standard SI symbols are combined to form a 'Type' in the form normally used
for SI units but modified to overcome problems with display on a VDU.
Multiplication of symbols is indicated by display with a gap (eg N m).
Division of symbols is expressed by a solidus - '/' (eg m/s).
Powers are indicated by a number in brackets to the right of the symbol it
refers to. (eg m(3)/s refers to cubic metres per second and
kg/m(3) refers to kilogram per cubic metre).

CURRENCY CONVERSIONS

Currency conversions are included to broaden the use of METROCATE.
Conversion factors should be brought up to date using the Alter option
before use.  All conversion factors provided are related to the United
States dollar (factor = 1) but any base can be used provided all conversion
factors used relate to that same base.

RESTRICTIONS

Copyright 1990  John Mayes, Box 14-419, Wellington, New Zealand.

Permission is given to copy and distribute METROCATE
in its original and unaltered form only.
If your copy is not registered with me, and you like METROCATE,
please order the latest version. An order form facility is built
into the programme.

LIMITATIONS

Please Note: Care has been taken to ensure that conversions are as accurate
as possible but some errors and differences of opinion are inevitable.
There are differences of opinion among professionals and historians
about the exact values and meanings of some units.

The author accepts no responsibility for the accuracy or the results of
application of conversions obtained using METROCATE.

Any feedback on conversion factors is very welcome and substantial
apdopted suggestions will be recognised by supplying the next update
free of charge.

FUTURE DEVELOPMENT

I plan to develop METROCATE into a major measurements unit reference.
New units and facilities will be added regularly.  Registered users
will be offered updates at reduced prices and will receive the 'C'
source code.

To become a registered user please use the order form built into the
programme.




	 John Mayes
	 Box 14-419
	 Wellington,
	 NEW ZEALAND.

	 5/11/90

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2827

     Volume in drive A has no label
     Directory of A:\

    METROCAT EXE     79204  11-04-90  12:57p
    CONVERT  DAT     28800  11-04-90  12:44p
    DESCRIP  DAT      1740  10-16-90   8:58p
    METROCAT DOC      3542  11-04-90   2:03p
    L6       COM      4224  10-02-85  10:07a
    L        DOC      3072   8-19-85   8:51p
    FILE2827 TXT      2739   8-27-91   9:49a
    GO       TXT      1155   8-27-91   1:47a
    GO       BAT        38   1-31-91  12:58a
            9 file(s)     124514 bytes
                           33280 bytes free
