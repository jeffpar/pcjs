---
layout: page
title: "PC-SIG Diskette Library (Disk #1378)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1378/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1378"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VISION FREE SOFTWARE"

    VISION is a collection of six mathematical programs which will help ease
    the pain of certain sequential computations:
    
    ~ DTF converts a real number into a series of fractions, each more
    accurate than the preceding one until the error is less than one part
    per ten million.
    
    ~ FACT calculates the factorial for any input number and FFFF defines
    all prime factors and powers of a given factorial.
    
    ~ GCD computes the greatest common divisor for any two integers.
    
    ~ REDUCE defines a fraction as a product of prime factors and its real
    number equivalent.
    
    ~ FACTOR determines the prime factors of a given number or declares that
    number to be prime.
    
    ~ TEMPCONV converts temperatures between units Kelvin, centigrade,
    Fahrenheit, and Rankine.
    
    All of these programs can be installed and used with or without a math
    coprocessor.  Documentation is included on disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1378.TXT

{% raw %}
```
Disk No: 1378                                                           
Disk Title: Vision Freeware                                             
PC-SIG Version: S2                                                      
                                                                        
Program Title: Vision Freeware                                          
Author Version: 2.00                                                    
Author Registration: None.                                              
Special Requirements: Math coprocessor recommended.                     
                                                                        
VISION is a collection of six mathematical programs which will help ease
the pain of certain sequential computations.  DTF converts a real number
into a series of fractions, each more accurate than the preceding one   
until the error is less than one part per ten million.  FACT calculates 
the factorial for any input number and FFFF defines all prime factors   
and powers of a given factorial.  GCD computes the greatest common      
divisor for any two sets of factors.  REDUCE defines a fraction as a    
product of prime factors and its real number equivalent.  FACTOR        
determines the prime factors of a given number or declares that number  
to be prime.  All of these programs can be installed and used with or   
without a math coprocessor.  Documentation is included on disk.         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VISFW.DOC

{% raw %}
```




       VISION INFORMATION SERVICES FREE SOFTWARE DISK 1, VERSION 2.00
       --------------------------------------------------------------
                              February, 1990

    All Vision Free Software programs will give full usage  instructions if you
run them with no parameters.  For example, the command "GCD"  will give you the
purpose of the program GCD and tell you how to run it.

    To be  notified  of  any updates and other software available, send a legal
size, self-addressed, stamped envelope to

                                  VISFW1-200
                              Joel Lichtenwalner
                           1341 Country Hills Drive
                              Ogden, Utah  84403

     Updates  will be  mailed to all SASE's on hand when pertinent.  Enjoy your
software.

     Revision 2.00 made the following changes:

          1.  Programs now written in Turbo Pascal 5.5, allowing the  same
              program  to run whether you have a math coprocessor or  not;
              provides faster execution, better error handling.
          2.  The  three programs which rely on a table of  prime  numbers
              now  automatically load that table rather than  having  them
              compiled in.  This allows these programs to be 32,000  bytes
              smaller each.
          3.  We have moved.  The new address has replaced the old.
          4.  A few cosmetic changes.

     In process:

          1.  EGA   Mandelbrot   program,   including   the   accidentally
              discovered, exquisitely beautiful, "Angel Set".
          2.  Still  working on a good "Traveling Salesman"  program  with
              catalog of destinations.
          3.  Intelligent  file copy program (copies many  different  size
              programs to the minimum number of diskettes).
          4.  Further upgrade this disk.
          5.  VISFW disk # 2 will soon be out - text utilities including a
              fast sort for text files as large as will fit in memory.
          6.  Open to suggestions . . . . . .

     All except number  five, above are "vapor-ware" at this time.  You keep me
in SASE's, I'll keep you posted!

     Notes on this disk:

     ALL PROGRAMS accept three types of input.  If you place no options on  the
command line, the program will display a description of its functions and  give
instructions on how to run it.  If you put an asterisk (*) on the command line,
the  program  will go into multiple input mode where it will ask your  for  the
options/operands  and will repeat its function until you enter a blank  option.
A command line with a number of options will cause the program to evaluate each
option.

     DTF      This  program  accepts a decimal real  value  and  lists  several
fractions  (using  integer numerator and denominator)  which  approximate  that
value.  Each successive fraction is larger but closer in accuracy.  The process
stops when a fraction is found with an error of less than .1 part per  million.

     FACT     This program simply generates the factorial of the input  number.

     FACTOR   This program finds all factors of the input integer.

     FFFF     This  program  computes  the factorial of the  input  number  and
returns a list of all prime factors of the factorial and their powers.

     GCD      This program  calculates  the  greatest  common  divisor  of  two
integers.  It uses the Euclid algorithm.

     REDUCE   This program takes a denominator and a mumerator and reduces them
to exact, fully reduced fractions and give an approximate ( real ) result.  The
terms will be either printed on the printer or to the screen.   Both  numerator
and denominator may be made up of integers, factorials, or products of both.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1378

     Volume in drive A has no label
     Directory of A:\

    FILE1378 TXT      1925   3-14-90  11:33a
    GO       BAT        38   3-14-90  12:13p
    GO       TXT       540   3-14-90  12:18p
    HELP     EXE      8464   2-09-90  12:50a
    PRINT    ME       5036   2-09-90  12:01a
    PRINTME  BAT        42  11-16-88   1:10a
    READ     ME       5637   2-09-90  12:46a
    VISFW    DOC      3847   2-08-90  12:50a
    VISFW    EXE    176016   2-09-90   1:26a
            9 file(s)     201545 bytes
                          116736 bytes free
