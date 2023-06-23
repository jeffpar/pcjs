---
layout: page
title: "PC-SIG Diskette Library (Disk #1926)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1926/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1926"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPH FOR FORTRAN"

    This collection of FORTRAN subroutines will make it simple for you to
    plot high quality scientific and engineering graphs on dot matrix
    printers which have the ability to print graphics.  These subroutines
    can be incorporated easily into any FORTRAN program, so that your own
    programs can automatically print high resolution graphs as part of the
    program output.
    
    Also included is a sample program to illustrate the use of the
    subroutines.  This sample program works as a stand-alone graph plotter
    for plotting graphs from a data file.  As an alternative to
    incorporating the graph plotting subroutines into your own programs, you
    could instead get your program to write a data file to disk for later
    plotting using the sample program supplied.
    
    Features include resolution options, vertical or horizontal plotting,
    linear or logarithmic axes, labelling of axes, overlaying grid lines on
    the graph, joining points with straight lines or a cubic spline,
    plotting user-defined functions, passing a list of parameters to the
    user-defined functions, and placing text on the graph.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1926.TXT

{% raw %}
```
Disk No: 1926                                                           
Disk Title: Graph For Fortran                                           
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Graph For Fortran                                        
Author Version: 2.0                                                     
Author Registration: $30.00                                             
Special Requirements: FORTRAN 77 compiler, and a dot matrix printer w/ 8
                                                                        
This collection of FORTRAN subroutines will make it simple for you to   
plot high quality scientific and engineering graphs on dot matrix       
printers which have the ability to print graphics.  These subroutines   
can be incorporated easily into any FORTRAN program, so that your own   
programs can automatically print high resolution graphs as part of the  
program output.                                                         
                                                                        
Also included is a sample program to illustrate the use of the          
subroutines.  This sample program works as a stand-alone graph plotter  
for plotting graphs from a data file.  As an alternative to             
incorporating the graph plotting subroutines into your own programs, you
could instead get your program to write a data file to disk for later   
plotting using the sample program supplied.                             
                                                                        
Features include resolution options, vertical or horizontal plotting,   
linear or logarithmic axes, labelling of axes, overlaying grid lines on 
the graph, joining points with straight lines or a cubic spline,        
plotting user-defined functions, passing a list of parameters to the    
user-defined functions, and placing text on the graph.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #1926  GRAPHS FOR FORTRAN   >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To read documentation,  type: BROWSE GRAPH.DOC                          ║
║ To print documentation, type: COPY GRAPH.DOC PRN                        ║
╚═════════════════════════════════════════════════════════════════════════╝

 To read any document or source code files, type..
 --------------------------------------------------
 browse *.*


 Suggested installation procedure (from floppy drive A: to hard drive C:)
 ------------------------------------------------------------------------
 copy a:browse.* c:\    copy BROWSE to root directory on hard disk
 mkdir c:\graph         make a sub-directory for Graph files
 copy a:*.* c:\graph    copy all files to C:\GRAPH
 c:                     change to drive C:
 cd c:\graph            change to sub-directory C:\GRAPH

```
{% endraw %}

## GRAPH.DOC

{% raw %}
```




                     Graph for Fortran v2.0


              Graph plotting on dot matrix printers
             =======================================








********************************************************************

      SHAREWARE NOTICE            Copyright (C) D.I. Hoyer, 1990.
     ==================

     If you find these Fortran subroutines useful, please register
     by sending US$30-00 or Aus$40-00 to the address below :-

                    David I Hoyer
                    31 Rossian Place
                    Cherrybrook  NSW 2120
                    AUSTRALIA

     This subroutine library is a shareware product. Copies of the 
     original unmodified programs and manual on disk may be made 
     and distributed, as long as they are not charged for. You may 
     not modify the source code or manual except for your personal 
     use. Registrants will receive a free update.


*******************************************************************

     No responsibility is accepted for any errors in this software, 
     or for any loss or damage resulting from using it.  

*******************************************************************
                                                               Page 2


                            C O N T E N T S
                           =================

                                                               Page

    Shareware notice   .  .  .  .  .  .  .  .  .  .  .  .  .  .  1

1.  Introduction .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  3

2.  Description of disk contents   .  .  .  .  .  .  .  .  .  .  4

3.  Some quick demonstrations   .  .  .  .  .  .  .  .  .  .  .  5

4.  Using GRAPH to plot graphs from a data file   .  .  .  .  .  6
      a)  Plotting the demo graphs supplied .  .  .  .  .  .  .  6
      b)  Plotting your own graphs    .  .  .  .  .  .  .  .  .  6
      c)  Data file specifications for GRAPH.for  .  .  .  .  .  7

5.  Using the GRAPHLIB subroutines to get your own   .  .  .  .  8
      programs to plot graphs 

6.  Limitations  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  9
      a)  Graph size & Memory   .  .  .  .  .  .  .  .  .  .  .  9
      b)  Function parameters   .  .  .  .  .  .  .  .  .  .  .  9



Appendix A.  Definition of Fortran names used  .  .  .  .  .  .  10

Appendix B.  Symbols and line types.  .  .  .  .  .  .  .  .  .  12

Appendix C.  Sample list of standard user-defined functions   .  13

Appendix D.  A sample data file for use with GRAPH   .  .  .  .  16

                                                               Page 3

                 Graph plotting on dot matrix printers
                =======================================

1.  Introduction
=================

     Print out this manual by typing:
     copy graph.doc prn

     This collection of Fortran subroutines will make it simple for 
     you to plot high quality scientific and engineering graphs on 
     dot matrix printers which have the ability to print graphics. 
     These subroutines can easily be incorporated into any Fortran 
     program, so that your own programs can automatically print 
     high resolution graphs as part of the program output. Also 
     included is a sample main program to illustrate the use of the 
     subroutines. This sample program works as a stand-alone graph 
     plotter for plotting graphs from a data file. So, as an 
     alternative  to incorporating the graph plotting subroutines 
     into your own programs, you could instead get your program to 
     simply write a suitable data file to disk for plotting out 
     later, using the sample main program supplied (GRAPH.for).

     Some of the features available are :

     * high or low resolution options,
     * graph can be plotted vertically or horizontally on the page,
     * linear or logarithmic axes, with labelling of axes,
     * overlaying grid lines on the graph, in various line styles,
     * drawing lines in different styles (solid, dotted etc.),
     * plotting points, with a large range of symbols to choose from,
     * joining points with straight lines or a cubic spline,
     * plotting user-defined functions,
     * passing a list of parameters to the user-defined functions,
     * placing text of different sizes and orientations on the graph,
     * clearing an area of the graph, with optional border
     * automatic generation of legend tables to describe each curve.

     Read through this manual and print out all the demonstration 
     graphs before using the programs for your own applications. 
     That way you will be more familiar with the capabilities of 
     the programs.

                                                               Page 4

2.  Description of disk contents
=================================

     Your disk should contain the following files :-

     BROWSE  .exe    Program for browsing through documents & manuals.

     BROWSE  .hlp    Help file used by browse.exe

     README  .doc    Text document with a description of the overall
                     use of the programs, plus a brief description of
                     each file.

     GRF     .bat    Sample batch file for executing GRAPH with a
                     data file.

     GRAPH   .doc    User's manual.

     GRAPH   .for    Sample main program for plotting graphs on dot
                     matrix printers, from data files.

     GRAPHLIB.for    Subroutine library of graph plotting
                     procedures for plotting on dot matrix printers.

     GRAPHFNS.for    Function segment containing user-defined
                     functions.

     GRAPH   .nnn    Sample data files to use with GRF.bat
                     (nnn is a number 001 to 999) :-

          GRAPH.001  General graph demo (vertical and Hi-res).
          GRAPH.002  Same as .001, but horizontal and Lo-res format.
          GRAPH.003  Graph of several standard functions.
          GRAPH.004  Demo of text, graph symbols and line styles.
                                                               Page 5


3.  Some quick demonstrations
==============================

     For a quick and easy demonstration of some of the graph
     plotting capabilities of the programs follow the steps listed
     below. You need a Fortran 77 compiler to compile the program.
     The Fortran programs should be usable on any computer which
     has a Fortran 77 compiler and a suitable dot matrix printer,
     though this section assumes you are using an MS-Dos or PC-Dos
     operating system (for the GRF.bat batch file).

     The graphs should print correctly on printers such as the IBM
     Proprinter, and most Epson and Star dot matrix printers. If
     you have a different printer, try this procedure first. If the
     graph does not print correctly then you will have to modify
     subroutine PRTGRF in disk file GRAPHLIB.for. If you have less
     than 310 kBytes of available RAM, you may have to change the
     DIMENSION statement in the sample main program GRAPH.for; and
     you may not have enough memory to print some the demonstration
     graphs.

     To print out GRAPH.001:
     -----------------------

     a)   Insert the disk containing the GRAPH programs into the 
          default disk drive, or if you have a hard disk then copy 
          them to the hard disk.

     b)   Compile the program GRAPH.for using your Fortran 77 
          compiler. An executable file called GRAPH.exe should be 
          created by the compiler.

     c)   Make sure the dot matrix printer is connected and 
          switched on.

     d)   At the Dos command line type :
          grf 001

     e)   Wait a minute or two while the graph is 'plotted' in the 
          computer's memory, after which it will be directed to the 
          printer and printed in high resolution.

     The above procedure uses the supplied batch file GRF.bat to
     print out the graph defined in the demonstration file
     GRAPH.001. Several other graph demonstration files are
     supplied on disk; these are named GRAPH.nnn, where nnn is a
     number. Just type   grf nnn   to print graph GRAPH.nnn
     (assuming that you have already compiled the sample main
     program GRAPH.for).
                                                               Page 6

4.  Using GRAPH to plot graphs from a data file
================================================

     The simplest way to plot graphs on a dot matrix printer is to
     create a data file, and use the GRF.bat batch file to execute
     it. Remember to compile the GRAPH.for program before you try
     to execute it, using a Fortran 77 compiler (as described in
     Section 3).

     The data file can be created using a word processor in non-
     document mode, or it can be written by one of your own
     programs as a simple ASCII data file. If you know how to
     program in Fortran it should be a simple matter to tailor
     GRAPH.for to your own requirements if necessary.

     A graph data file is created for input to the program. The
     program then 'plots' the graph in memory, as a matrix of
     points, before directing it to the printer. The maximum size
     graph which can be plotted from the program GRAPH.for is 20 x
     25 cm, but this can easily be changed by changing the
     DIMENSION statement in GRAPH.for. The program is rather memory
     intensive - for example the 20 x 25 cm size requires at least
     310 kBytes of RAM for Hi-res plotting (though only about 80
     kBytes for Lo-res).


     a)  Plotting the demo graphs supplied
     --------------------------------------

     To get started, try plotting some or all of the demonstration
     graphs supplied with the programs after you have compiled the
     program GRAPH.for with your Fortran 77 compiler. The demo
     graphs are named GRAPH.nnn, where the nnn refers to a number
     from 000 to 999. For example, to plot the graph described by
     file GRAPH.001, type :

     grf 001

     Make sure the printer is switched on. The graph will be
     'plotted' in memory first, which could take a minute or two,
     before being directed to the printer. Repeat this for all the
     graph demos, so that you will have an idea of the capabilities
     of the subroutines.

     b)  Plotting your own graphs
     -----------------------------

     To plot you own graphs from program GRAPH you will need to
     create data files similar to the demo files described above.
     Have a look at some of the demo files, and you will see that
     they are simply lists of numbers and text. These provide the
     program with information on the size and style of the graph,
     and the data to be plotted. The program GRAPH.for reads the
     data file, and passes the appropriate parameters to the
     subroutines which do the plotting. It has been written very
     simply, to make it easy for you to re-write to your own
     requirements if you need to. As a result, the data
     file is expected to be in a rigid format, so if you are going
     to use the original GRAPH.for program, your data file must
     conform to the specifications given in (c) below.
                                                               Page 7

     c)  Data file specifications for GRAPH.for :
     --------------------------------------------

     The data file to be read by the supplied sample main program
     GRAPH.for must conform to the specifications listed below. A
     detailed discussion of the demonstration data file GRAPH.001
     is given in Appendix D. You can always re-write the main
     program to put the data entry into a more convenient form for
     your own applications. If you plan to use GRAPH.for for
     plotting your own graphs then the data file you write must
     conform to the following specifications:-

     1. Maximum 80 characters per line (standard Fortran input).
     2. All numbers must be within fields of width 10 columns.
     3. Text occupies rest of line to column 80.
     4. If more than 8 numbers are required, use as many lines as
        necessary. (eg. for entering more than 8 function parameters)


     The names used are defined in Appendix A. Once you have read
     through them, most of them will be self-explanatory.

line 1 : igrprt, xl, yl, glabel.       {print axes, x & y-axis lengths,
                                        heading}

line 2 : xmin, xmax, ymin, ymax.       {min & max values for plotting}

line 3 : ndivx, nsdivx, ndpx, xlabel.  {x-axis specs, divisions & label}
         (ndivx = 0 for log. scales)

line 4 : ndivy, nsdivy, ndpy, ylabel.  {y-axis specs, divisions & label}
         (ndivy = 0 for log. scales)

line 5 : ivh, lohi, ioff, igrid, nsets, legpos.  {graph style & data sets}


For each of the NSETS sets of data add the following lines...

line a : npts, ltyp, mark, msize, legend.

line b : if npts>0     [Plot a series of npts data points]
                   enter --- x, y     (1 line for each data pair)

         if npts=0     [Plot user-defined function number ifn]
                   enter --- 1st line:  ifn, nparms, x1, x2
                             2nd line:  p(i) for i=1 to nparms

         if npts=-1    [ Write a text string starting at (x,y)    ]
                       [ (x,y) defines the centre of upper case X ]
                   enter --- 1st line:  iori, itxsiz, x, y
                             2nd line:  strng

         if npts=-2    [ Clear a rectangular area of the graph  ]
                       [ (x1,y1)=top left, (x2,y2)=bottom right ]
                   enter --- 1st line:  x1, y1, x2, y2
                                                               Page 8

5.  Using the GRAPHLIB subroutines to plot graphs from your own programs
========================================================================

     It is a simple matter to get your own Fortran programs to
     print graphs on dot matrix printers which have plotting
     facilities. Read through sections 3 and 4 first to get an idea
     of how the sample main program works. For you own program you
     simply need to assign values to the variables described in the
     above section (ie. the variables which are read from a data 
     file in the sample main program supplied). You also need to 
     DIMENSION the arrays IGRAPH and P in your main program 
     according to the maximum size graph you will be printing out,
     and the maximum number of parameters to be passed to the user-
     defined functions. Details are in the source code file 
     GRAPH.for. If you want to add your own user-defined functions, 
     you can do this by modifying the file GRAPHFNS.for. Then your 
     program calls the following subroutines :

      PREP(... to prepare axis sizes, scaling factors, and other 
               details.

      AXES(... to plot axes for the graph (optional).

      PLOTD(...for each set of data to be plotted. A 'set of data'
               is defined as a string of text, a user-defined 
               function plotted between specified values on the x-
               axis, or a set of data points (which may be 
               connected by a line or smooth curve).

     If your program is to plot more than one graph, remember to 
     clear the previous graph before starting to plot the next one, 
     using :-

      CLRGRF(...

     Finally, you will also need to include the subroutine library 
     and function segment with the statements:

      INCLUDE 'GRAPHLIB.for'
      INCLUDE 'GRAPHFNS.for'


     For more advanced programming or plotting, you may want to 
     call some of the other subroutines in the library, or you may 
     want to modify them for your personal use. The subroutines
     should have sufficient comment lines to enable you to do this 
     if you are reasonably familiar with programming in Fortran.
                                                               Page 9

6.  Limitations
================

a)  Graph size & Memory
------------------------

     The size of graph which you can plot is limited only by the 
     paper size on your printer, and the amount of memory (RAM) 
     available in your computer. The maximum size is set by the 
     DIMENSION statement for array IGRAPH in the main program. For 
     a graph of 20 x 25 cm (8" x 10"), about 310 kBytes of RAM is 
     required for Hi-res, and about 80 kB for Lo-res.

     If the x- or y-axis lengths specified are too long for the 
     DIMENSION'ed size of IGRAPH, the program will terminate with 
     an error. 


b)  Function parameters
------------------------

     The maximum number of parameters which can be passed to the 
     user-defined functions in FUNCTION FGRAPH is specified by the 
     DIMENSION of array P() in the main program.

                                                               Page 10

Appendix A.  Definition of Fortran names used
==============================================

glabel = Graph heading.

igrprt = 1 to print axes,
         0 to suppress printing of axes.

ifn    = Function number (pre-compiled in GRAPHFNS.for) to plot if npts=0.

igrid  = 0 to print axes without grid lines,
         1 to n for grid lines of type ltyp (try igrid=2).

ioff   = Offset. This is the number of blank spaces printed 
         between the left margin and the graph on the page, so 
         that the horizontal position can be set.

iori   = Orientation for text plotting. 
         1=normal, 2=vertical bott-top, 3=upside down, 4=top-bott.

itxsiz = Size of text to be plotted (2 = normal).

ivh    = 1 for vertical (portrait) printout, 
         2 for horizontal (landscape).

legend = Text to describe each data set in the legend table. 
         Blank to omit this data set from the legend table.

legpos = Position of legend table. [default = 1]
         1=top left,     to 4=top right,
         5=bottom left,  to 8=bottom right.  

lohi   = 1 for low-resolution plot (plots at 4x speed), 
         2 for hi-res (much higher quality).
         Hi-res is 120 dots per inch (dpi) across, by 144 dpi down,
         printed as interleaved rows 1/144" apart. 
         Lo-res is 60 by 72 dpi.

ltyp   = Line type for joining points, 1-5. 
         (see table in Appendix B).
 
mark   = Symbol to be plotted at each point. 
         1 to 12 for special symbols, 32 to 126 for ASCII character.
         (see table in Appendix B).

msize  = Size of mark (1,2,3,...). Try 2 or 3 to start. 

ndivx  = Number of main divisions along x-axis. Axis values are 
         printed between main divisions.
         Set ndivx = 0 to specify logarithmic x-axis scale.

ndivy  = Number of main divisions along y-axis. Axis values are 
         printed between main divisions.
         Set ndivy = 0 to specify logarithmic y-axis scale.

ndpx   = Number of decimal places to be printed after decimal point,
         for x-axis values. Ignored for log. scales.
                                                               Page 11

ndpy   = Number of decimal places to be printed after decimal point,
         for y-axis values. Ignored for log. scales.

nparms = Number of parameters to be passed to function ifn.

npts   = Number of data points for this plot.
         Set npts = 0 to plot a function curve,
                  = -1 to indicate plotting a string of text.
                  = -2 to indicate clearing an area of the graph.

nsdivx = Number of secondary divisions along x-axis (between main
         divisions). Set nsdivx = 1 or 9 for log scales.

nsdivy = Number of secondary divisions along y-axis (between other
         divisions). Set nsdivy = 1 or 9 for log scales.

nsets  = Number of sets of data to be plotted. A set of data is 
         defined here as a string of text, a user-defined 
         function, or a set of points.

p(i)   = Up to 20 parameters to be passed to function ifn. The 
         maximum number of parameters can be changed by modifying 
         the DIMENSION statement for P() in the main program 
         segment.

strng  = A string of text to be printed on the graph.

x1,x2  = Start and end values of x for plotting function ifn.

xl     = Length of x-axis, cm.

xlabel = x-axis heading.

xmin,xmax = Minimum & maximum x values to define edges of plotting 
            area.

yl     = Length of y-axis, cm.

ylabel = y-axis heading.

ymin,ymax = Minimum & maximum y values to define edges of plotting 
            area.

                                                               Page 12

Appendix B.  Symbols and line types
====================================


     When a set of data points is to be plotted, a symbol from 
     Table B1 is plotted at the position of each point. When points 
     are to be joined with lines, the type of line specified by 
     ltyp is shown below in Table B2. The symbols and lines can 
     best be seen by printing out the demonstration graph GRAPH.004 
     (see sections 3 and 4 for how to do this).


       Table B1 : Symbols           Table B2 : Line Types (approx)      
      --------------------         --------------------------------
        mark:-                       ltyp:-
        1 = point                    1 =  continuous line
        2 = open octagon             2 =  .................
        3 = filled  "                3 =  . . . . . . . . .
        4 = open square              4 =  - - - - - - - - -
        5 = filled  "                5 =  -- . -- . -- . --
        6 = open triangle
        7 = filled  "
        8 = cross
        9 = plus
       10 = star
       11 = open diamond
       12 = filled  "
       32 to 126 = point plus ASCII character, defined below:




        ASCII Characters
       ==================

                    50  2       70  F       90  Z       110  n
                    51  3       71  G       91  [       111  o
        32          52  4       72  H       92  \       112  p
        33  !       53  5       73  I       93  ]       113  q
        34  "       54  6       74  J       94  ^       114  r
        35  #       55  7       75  K       95  _       115  s
        36  $       56  8       76  L       96  `       116  t
        37  %       57  9       77  M       97  a       117  u
        38  &       58  :       78  N       98  b       118  v
        39  '       59  ;       79  O       99  c       119  w
        40  (       60  <       80  P      100  d       120  x
        41  )       61  =       81  Q      101  e       121  y
        42  *       62  >       82  R      102  f       122  z
        43  +       63  ?       83  S      103  g       123  {
        44  ,       64  @       84  T      104  h       124  |
        45  -       65  A       85  U      105  i       125  }
        46  .       66  B       86  V      106  j       126  ~
        47  /       67  C       87  W      107  k
        48  0       68  D       88  X      108  l
        49  1       69  E       89  Y      109  m
                                                               Page 13

Appendix C.  Sample list of standard user-defined functions
============================================================

     You can plot any continuous function f(x) by calling one of 
     the functions defined in FUNCTION FGRAPH(..., supplied on disk 
     as file GRAPHFNS.for.  A number of standard functions have 
     been supplied in this file to get you started. If you need any 
     others, just program them in the same manner, and re-compile 
     your program. The maximum number of parameters which can be 
     passed is specified in the DIMENSION of the array P() in the 
     main program segment (set at 20 in the sample main program 
     GRAPH.for).

     The functions are called with a function number (to specify 
     which function you want to evaluate), a list of parameters, 
     and an x-value. It then returns the corresponding y-value. For 
     example, if you want to plot the parabola  f(x) = 1.2 + 2*x - 
     3.4*x^2,  you would specify :

       IFN  = 1      (function number 1 = polynomial)
       P(1) = 2      (polynomial of order 2)
       P(2) = 1.2    (1st coefficient of the polynomial)
       P(3) = 2      (2nd     "      )
       P(4) = 3.4    (3rd     "      )

     The file GRAPHFNS.for is printed out below for convenience. 
     The standard functions available are :-

1. Polynomial of any order   f(x) = a0 + a1.x + a2.x^2 + ... + an.x^n 

2. Exponential               f(x) = a + b.exp(c.x) 

3. Power function            f(x) = a + b*x^c

4. Logarithmic (natural)     f(x) = a + b.ln(c.x+d)

5. Logarithmic (base 10)     f(x) = a + b.log(c.x+d)

6. Inverse function          f(x) = a + b/(c+x)

7. Circle (top or bottom half)

8. Ellipse (top or bottom half)
                                                               Page 14

This is a listing of the source code for the sample user-defined 
functions supplied with the programs :-



      FUNCTION FGRAPH(IFN,P,X)
* 
* The list of functions for plotting on IGRAPH.
* This list can be added to as required.
*
* FNUM = Function number
* P    = Array of parameters to be passed to the selected function
* X    = X-value at which the function is to be evaluated
*
      DIMENSION P(*)
* To add more functions, add labels to the following statement:
      GOTO (1,2,3,4,5,6,7,8) IFN 
*
* Function 1. Polynomial (to n-th order). n+2 parameters.
*             P(1)=n,  P(2) to P(n+2) = coeffecients a0, a1, a2, ... an.
*                      [ f(x) = a0 + a1.x + a2.x^2 + ... + an.x^n ]
*
   1  N = INT(P(1)+0.5)
      POLY = P(N+2)
      DO 100 I=N+1, 2, -1
        POLY = X*POLY + P(I)
 100  CONTINUE
      FGRAPH = POLY
      RETURN
*
*  Function 2. Exponential, 3 parameters.
*              f(x) = a + b.exp(c.x)
*
   2  FGRAPH = P(1) + P(2)*EXP(P(3)*X)
      RETURN
*
*  Function 3. Power function, 3 parameters.
*              f(x) = a + b.x^c
*
   3  FGRAPH = P(1) + P(2)*X**P(3)
      RETURN
*
*  Function 4. Logarithmic, 4 parameters.
*              f(x) = a + b.ln(c.x+d)
*
   4  FGRAPH = P(1) + P(2)*ALOG(P(3)*X + P(4))
      RETURN
*
*  Function 5. Base 10 Logarithmic, 4 parameters.
*              f(x) = a + b.log(c.x+d)
*
   5  FGRAPH = P(1) + P(2)*ALOG10(P(3)*X + P(4))
      RETURN
*
*  Function 6. Inverse function, 3 parameters.
*              f(x) = a + b/(c+x)
   6  FGRAPH = P(1) + P(2)/(P(3)+X)
      RETURN
                                                               Page 15

*
*  Function 7. Circle.    4 Parameters.
*              P(1) = 1 for top half of circle, -1 for bottom half.
*              P(2) = radius.
*              P(3) = x coordinate of centre of circle.
*              P(4) = y coordinate of centre of circle.
*
   7  XXX = P(2)*P(2) - (X-P(3))**2.
      IF(XXX.LT.0) XXX = 0.
      FGRAPH = P(1)*SQRT(XXX) + P(4)
      RETURN
*
*  Function 8. Ellipse.    5 Parameters.
*              P(1) = 1 for top half of ellipse, -1 for bottom half.
*              P(2) = max radius in x direction.
*              P(3) = max radius in y direction.
*              P(4) = x coordinate of centre of ellipse.
*              P(5) = y coordinate of centre of ellipse.
*
   8  XXX = 1.- ((X-P(4))/P(2))**2.
      IF(XXX.LT.0) XXX = 0.
      FGRAPH = P(1)*P(3)*SQRT(XXX) + P(5)
      RETURN
      END

*---------------------------------------------------------------------------
                                                               Page 16

Appendix D.  A sample data file for use with GRAPH
===================================================

Several demonstration graph files are supplied with the programs.
The first one, GRAPH.001, is discussed in detail in this section
to make it easier to understand how to set up your own graph data
files for use with the sample main program GRAPH.for. The actual
data file is :-

1         16.       12.       Demonstration Graph 1
1         100       0.        10.
0         9         0         x-axis, log scale
10        4         0         y-axis, linear scale
1         2         5         2         5         1
-2        1         0         0          {clear a box for legend table}
1.03      9.8       11.       8.2
6         -1        2         2         Data 1, fitted with spline
1.33      2.1
1.67      4.4
2.67      6.3
10.       7.4
30.       8.
60.       9.2
6         1         3         2         Data 2, with straight lines
3.        .3
8.        1.
15.       .5
25.       1.5
50.       1.5
90.       4.
6         0         6         3         Data 3, points only
2.        1.5
6.        2.
10.       2.6
20.       3.7
45.       5.5
80.       9.3
0         4         1         1         y = x/10 + 1.5
1         3         1.5       90.       {function 1. Polynomial}
1         1.5       0.1

The data file is described below on a line-by-line basis :

1         16.       12.       Demonstration Graph 1
--> igrprt=1, xl=16, yl=12, glabel='Demo....
--> Print axes, x-axis 16 cm wide, y-axis 12 cm high, graph heading.

1         100       0.        10.
--> xmin=1, xmax=100, ymin=0, ymax=10
--> x = 1 to 100,  y = 0 to 10.

0         9         0         x-axis, log scale
--> ndivx=0, nsdivx=9, ndpx=0, xlabel='x-axis....
--> Log scale, 9 sub-divisions per decade, ignored, x-axis heading.

10        4         0         y-axis, linear scale
--> ndivy=10, nsdivy=4, ndpy=0, ylabel='y-axis....
--> 10 labelled divisions, 4 subdivisions between each labelled division,
    0 decimal places (ie print integers along y-axis), y-axis heading.
                                                               Page 17

1         2         5         2         5         1
--> ivh=1, lohi=2, ioff=5, igrid=2, nsets=5, legpos=1
--> vertical (portrait) format, Hi-res, Print 5 blank spaces (1/2") on
    left of graph, line style 2 for the grid, 5 sets of data, legend table
    in position 1 (top left).

    Now start the sets of data...
    Data set number 1 =

-2        1         0         0          {clear a box for legend table}
--> npts=-2, ltyp=1, (0,  0,  ignored)
--> npts=-2 means clear a rectangular area. ltyp=1 means draw a box around
    the cleared area in line style 1 (solid line)

1.03      9.8       11.       8.2
--> x1=1.03, y1=9.8, x2=11, y2=8.2
--> Coordinates of top left and bottom right of box to be cleared.

    Data set number 2 =

6         -1        2         2         Data 1, fitted with spline
--> npts=6, ltyp=-1, mark=2, msize=2, legend='Data 1....
--> 6 points for data set 1, join points with a cubic spline (smooth curve),
    place symbol 2 at each point (open octagon), size 2 for the symbol,
    description of data set 1 for the legend table.

1.33      2.1
1.67      4.4
2.67      6.3
10.       7.4
30.       8.
60.       9.2
--> The 6 data points for set 1 (x,y)

    Data set number 3 =

6         1         3         2         Data 2, fitted with straight lines
--> 6 points for data set 2, join points with straight lines, place
    symbol 3 at each point (filled octagon), size 2 for the symbol,
    description of data set 2 for the legend table.

3.        .3
8.        1.
15.       .5
25.       1.5
50.       1.5
90.       4.
--> the 6 data points for set 2 (x,y)

    Data set number 4 =

6         0         6         3         Data 3
--> 6 points for data set 3, plot points only (do not join), place symbol 6
    at each point (open triangle), size 3 for the symbol, description of
    data set 3 for the legend table.
                                                               Page 18

2.        1.5
6.        2.
10.       2.6
20.       3.7
45.       5.5
80.       9.3
--> the 6 data points for set 3 (x,y)

    Data set number 5 =

0         4         1         1         y = x/10 + 1.5
--> npts=0, ltyp=4, mark=1, msize=1, legend='y = x/10....
--> a user-defined function for set 4, line style 4 (dashed), ignored,
    ignored, description of data set 4 for the legend table.

1         3         1.5       90.       {function 1. Polynomial}
--> ifn=1, nparms=3, x1=1.5, x2=90
--> user-defined function number 1 = polynomial, 3 parameters to be passed,
    plot from x=1.5 to x=90.

1         1.5       0.1
--> The 3 parameters (-->  y = 1 + 1.5*x + 0.1*x^2 )
--> END OF FILE.

```
{% endraw %}

## README.DOC

{% raw %}
```
 Graph for Fortran v2.0 :  Graph plotting on dot matrix printers
=================================================================

The GRAPH collection of Fortran subroutines provides a simple means of
plotting high quality scientific and engineering graphs on dot matrix 
printers. The printer used must have graphics printing capability (such 
as the IBM Proprinter and most Epson and Star dot matrix printers). The 
subroutines can easily be incorporated into your own Fortran programs, 
so that they print graphs as part of the program output. A sample main
program is supplied to demonstrate the use of the subroutines. This 
sample program can be used as a stand-alone graph plotting program for 
printing graphs from an ASCII data file. Several data files are supplied 
to demonstrate the use and capabilities of the subroutines.

Features include resolution options (the highest resolution prints
interleaved rows for 120 dots per inch horizontal by 144 dpi vertical),
portrait or landscape modes, linear or logarithmic axes, labelling of
axes, overlaying grid lines on the graph, automatic generation of legend
tables, joining points with straight lines or a cubic spline, plotting
user-defined functions, passing a list of parameters to the user-defined
functions, clearing rectangular areas of the graph with optional border,
and placing text on the graph.

Usage: Fortran programming
Registration: $30.00
Special Requirements: Fortran 77 compiler,
                      Dot matrix printer with 8 pin graphics.


File Descriptions:
==================

BROWSE  .exe    Program for browsing through documents and manuals.

BROWSE  .hlp    Help file used by browse.exe

GRAPH   .doc    User's manual for the GRAPH programs and subroutines.

GRAPH   .for    Sample main program for plotting graphs from data files
                (Fortran source code).

GRAPH   .001    Graph data file - General graph demo (vertical and Hi-res).

GRAPH   .002    Graph data file - Same as .001, but horizontal and Lo-res.

GRAPH   .003    Graph data file - Graph of several continuous functions.

GRAPH   .004    Graph data file - Demo of text, graph symbols and line styles.

GRAPHFNS.for    Function segment containing user-defined functions.
                (Fortran source code).

GRAPHLIB.for    Subroutine library of graph plotting procedures for
                plotting on dot matrix printers (Fortran source code).

GRF     .bat    Sample batch file for executing GRAPH with a data file.

README  .doc    Brief description of disk contents.


To start, type GO

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1926

     Volume in drive A has no label
     Directory of A:\

    BROWSE   EXE     57808   5-04-90   4:49p
    BROWSE   HLP     20084   5-02-90   4:52p
    GO       BAT        38   3-14-90   3:37p
    GO       TXT      1023   5-05-90   3:45p
    GRAPHLIB FOR     41763   5-03-90   7:38a
    GRAPHFNS FOR      2496   5-03-90   1:07p
    GRAPH    FOR      6231   5-04-90   1:10p
    GRAPH    DOC     33049   5-04-90   4:59p
    GRAPH    001       960   5-02-90   4:55p
    GRAPH    002      1010   5-03-90   1:55p
    GRAPH    003       896   1-13-89   1:25p
    GRAPH    004      4992  12-29-88   1:28p
    GRF      BAT       384  11-23-88   1:51p
    README   DOC      2624   5-04-90   5:02p
    FILE1926 TXT      2523   5-29-90   3:59a
           15 file(s)     175881 bytes
                          140288 bytes free
