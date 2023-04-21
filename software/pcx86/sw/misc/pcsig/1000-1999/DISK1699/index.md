---
layout: page
title: "PC-SIG Diskette Library (Disk #1699)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1699/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1699"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAFX"

    The GRAFX library consists of over 50 FORTRAN 77 callable routines,
    which allow FORTRAN programs access to the PC's graphic and other
    capabilities.  The graphic routines find application where emphasis is
    on ease of implementation and rapid presentation of numerical data.
    Three levels of capability are included.  The top level requires no
    knowledge of the PC or computer graphics, and is suitable for
    pedagogical applications such as numerical methods instruction,
    quick-look analysis of computational progress, and for the professional
    who is not primarily a programmer.  The middle level operates in problem
    space and suports display of points, lines, circles, ellipses, boxes,
    etc. to allow creation of custom displays such as map projections,
    multiple graphic windows, and 3D displays.  The lowest level consists of
    primitives implemented in assembly language which operate in display
    space to directly access display memory and access to selected DOS and
    BIOS functions.
    
    Many miscellaneous routines are included in the library.  These provide
    bit level access, shift, and logical (AND, OR, NOT, EOR) operations
    required by some applications.  A standard pseudo-random number
    generator, routines to get time-of-day, time in seconds, and date are
    included.  A vector clipping routine is included which can be used to
    clip a problem space vector before drawing lines.  If you really want to
    get down to the bits and bytes, PEEK & POKE routines are included to
    access any location in the 8086 address space.
    
    In addition several illustrative example FORTRAN 77 programs are
    included to demonstrate usage.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1699.TXT

{% raw %}
```
Disk No: 1699                                                           
Disk Title: GRAFX                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: GRAFX - Graphic Extension Library for FORTRAN 77         
Author Version: 2.1                                                     
Author Registration: None.                                              
Special Requirements: Fortran 77 compiler and CGA.                      
                                                                        
The GRAFX library consists of over 50 FORTRAN 77 callable routines,     
which allow FORTRAN programs access to the PC's graphic and other       
capabilities.  The graphic routines find application where emphasis is  
on ease of  implementation and rapid  presentation of  numerical  data. 
Three  levels of  capability  are included. The top level requires no   
knowledge of the PC or computer  graphics and is  suitable  for         
pedagogical  applications  such  as  numerical  methods instruction,    
quick-look  analysis  of  computational  progress,  and  for  the       
professional who is not primarily a  programmer. The middle level       
operates  in problem space and suports display of points, lines,        
circles, ellipses,  boxes, etc. to allow creation  of custom displays   
such  as map projections,  multiple graphic windows,  and 3D  displays. 
The  lowest level  consists of  primitives implemented in assembly      
language  which operate in  display space to  directly access display   
memory and access to selected DOS and BIOS functions.                   
                                                                        
Many miscellaneous routines  are included in  the library. These        
provide bit level access, shift, and logical  (AND, OR, NOT, EOR)       
operations  required by some applications. A standard  pseudo-random    
number generator, routines  to get time-of-day, time  in seconds, and   
date are included.  A vector  clipping routine is included which can  be
used to clip  a problem space vector  before drawing lines. If you      
really want to get  down to the bits  and bytes PEEK  & POKE routines   
are included to access any location in the 8086 address space.          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GRAFX.DOC

{% raw %}
```






               FORTRAN GRAPHIC EXTENSION LIBRARY FOR FORTRAN 77

       (C) Copyright 1988, 1989 by Jim Farrell    All Rights Reserved.

The GRAFX library  consists of over  50 routines, which  extend ANSI  standard
FORTRAN 77 to access the PC's video display graphics capabilities and SELECTED
DOS services from  FORTRAN programs.  These routines are  used extensively  in
scientific and engineering applications, including:

         o  CARTOGRAPHY
         o  ORBITAL MECHANICS
         o  AERODYNAMICS
         o  STATISTICS
         o  OPERATIONS RESEARCH
         o  SIGNAL PROCESSING

Emphasis is on ease of use and rapid presentation of numerical data. The GRAFX
library has  proven  to of  great  value  in visual  validation  of  numerical
software algorithms and tools. Hardcopy paper plots can be made on a  graphics
printer by invoking the DOS GRAPHICS  command, then using the SHIFT and  PRINT
SCREEN keys when a copy of the screen is desired.

GRAFX is EASY to use! If you use FORTRAN, you can take advantage of your  PC's
video graphics capabilities. The top level  routines were designed to be  easy
to use  and  avoid  features  which  would  add  complexity.  No  training  or
instruction is  required  to use  GRAFX.  The library  and  included  examples
provide everything you  need to  start using your  PC's graphic  capabilities.
GRAFX's simplicity  makes it  ideal for  research &  development,  engineering
prototyping, teaching  of  numerical applications, or as  part of a  numerical
laboratory.

GRAFX is compact! While the  entire library is only  about 30K bytes, the  low
level graphic primitive routines take only about one kilobyte. Since GRAFX  is
distributed  in  library  (.LIB)  format,  only  the  required  routines   are
selectively linked with your application.

GRAFX is fast! Display memory is  directly manipulated, rather than using  the
slower DOS and BIOS calls to  light pixels. Line and shape drawing  algorithms
were selected to maximize graphic performance.

The GRAFX design includes tri-level access to the PC's graphic display. At the
highest level, no knowledge of PC hardware or graphic techniques is  required.
At the middle level, powerful routines  allow creation of custom displays.  At
the bottom level, direct access to display hardware maximizes performance. The
following sections describe each level in detail.

TOP LEVEL. At the highest level, the GRAFX library presently provides  several
routines for producing plots.  These routines are  implemented in FORTRAN  and
are hardware independent. These include:

       XYPLT - Produces a x-y plot of data. The data is  automatically
       scaled and  displayed.  The  maximum  and  minimum  values  are
       listed. X & Y are passed as real arrays. Up to three plots  may
       be displayed on the screen by successive calls with iv=1..3. Ip






       determines the display  type: ip=0, plots  points; ip=1,  plots
       histogram like  lines  from  y=minimum  to  y(i);  ip=2,  plots
       histogram like lines from y=0  to y(i); ip=3, plots from  (0,0)
       to (x,y); ip=4, plots a connected line.  A WARNING is issued if
       the data range  seems inappropriate  for the  selected ip.  The
       usage is:

         CALL XYPLT(X,Y,N,IV,IP)

       TPLOT -  Produces plots  similar to  XYPLT for  equally  spaced
       data. Only the extreme values of the x range need be  provided.
       TPLOT is useful for time series data. The usage is:

         CALL TPLOT(XMIN,XMAX,Y,N,IV,IP)

       FCNTPLT -  Produces  plots  similar to  XYPLT  for  a  function
       y=fcn(x). Only the extreme values of the x range and the number
       of points  required need  be provided.  FCNTPLT is  useful  for
       examining the shape of special functions. The function must  be
       declared intrinsic  or external  in  the calling  program.  The
       usage is:

         CALL FCNPLT(XMIN,XMAX,FCN,N,IV,IP)

         EXTERNAL FCN

            or

         INTRINSIC FCN

       MULPLT -  Sets a  problem space  window and  permits  overlayed
       display of  multiple data  sets through  successive calls.  The
       first call sets the plot limits.

         CALL MULPLT0(XMIN,YMIN,XMAX,YMAX)

       The second and successive calls pass the arrays to be  plotted,
       the number of points and specify the line style.  IP determines
       the display type  ip=0, plot  a point; ip=1,  plot a  histogram
       like line from y=minimum to  y(i); ip=2, plot a histogram  like
       line from y=0 to  y(i); ip=3, plot from  (0,0) to (x,y);  ip=4,
       plot a connected line.

         CALL MULPLT(X,Y,N,IP)

       HIST - Computes and displays  a histogram of the   distribution
       of x. The n occurrences of x are counted in 100 equally  spaced
       bins and the maximum occurrence is listed. The usage is:

         CALL HIST(X,N)

       A typical sequence for using these routines is:

         CALL GSET                       !  enter graphics mode






         CALL XYPLT(X,Y,N,0,4)           !  draw the plot
         CALL PAUSE('MESSAGE')           !  review plot
         CALL ASET                       !  return to alpha mode

As this illustrates, no knowledge of the inner workings and hidden  mechanisms
of PC graphic hardware is required. One loads data into arrays X & Y, switches
to graphic mode and invokes the routine. The call to PAUSE puts the  'message'
on the  bottom  line of  the  display and  waits  until a  key  is  depressed,
permitting time to  review the  plot(s). Returning  to alpha  mode clears  the
screen. The example  programs included on  the installation diskette  contains
examples of the usage of each of the top level routines.

MID-LEVEL. The middle  level GRAFX  functions are  invoked by  the high  level
routines. After setting the problem  space window and display space  viewport,
the routines are called using problem  space units. Scaling and conversion  to
the display space viewport is automatic. The mid-level routines are written in
FORTRAN. Two key mid-level routines are:

       CALL WINDOW(XPMIN,YPMIN,XPMAX,YPMAX) -  Sets the problem  space
       window. Units are the extremes of the problem at hand: altitude
       in feet, time in seconds, etc. The origin is at the lower left.
       The default range is 0.0 to 1.0 in both x and y. Another way to
       visualize these limits is: CALL WINDOW(LEFT,BOTTOM,RIGHT,TOP).

       CALL VIEW((IXDMIN,IYDMIN,IXDMAX,IYDMAX) - set the display space
       viewport. Units are pixels with  the origin at the lower  left.
       The defaults are: x ordinate, 0 to 639; y ordinate, 0 to 199.

The use  of WINDOW  and VIEW  to create  multiple displays  on the  screen  is
illustrated  by  the  example  program  VEIW9  included  on  the  distribution
diskette.

The following two  mid-level routines  convert from problem  units to  display
units and invoke low level routines to  light points and draw lines.

         CALL POINT(X,Y)                 !  DRAW A POINT
         CALL LINE(X1,Y1,X2,Y2)          !  DRAW A LINE

LINE is called  in turn by  the following geometrical  shape generators  which
work in problem units.

         CALL CIRCLE(X,Y,R)              !  DRAW A CIRCLE
         CALL ARC(X,Y,R,AB,AE)           !  DRAW AN ARC
         CALL BOX(X1,Y1,X2,Y2)           !  DRAW A BOX
         CALL ELLIPSE(X,Y,A,B,ANGLE)     !  DRAW AN ELLIPSE

Several auxiliary routines are included  to annotate and control the  display.
PAUSE, ERROR, and  WARN output a  message on the  bottom line and  wait for  a
keystroke. INFO outputs an advisory message on the bottom line and  continues.
The usages are:

         CALL CURSOR(ROW,COLUMN)         ! POSITION THE CURSOR
         CALL PUTSTR(ROW,COLUMN,'TEXT')  ! OUTPUT A STRING
         CALL PAUSE('MESSAGE')           ! WAITS FOR A KEYSTROKE






         CALL ERROR('MESSAGE')           ! WAITS FOR A KEYSTROKE
         CALL WARN('MESSAGE')            ! WAITS FOR A KEYSTROKE
         CALL INFO('MESSAGE')            ! DOES NOT WAIT FOR A KEYSTROKE

The middle level GRAFX routines provide  the tools to create custom plots  for
specific applications. Limit checking of points  and clipping of lines is  not
done. It  is assumed  that  the user  has  defined appropriate  problem  space
limits. A  clipping  routine  is  provided in  the  library  for  applications
requiring clipping.

LOW LEVEL. At the  lowest level GRAFX consists  of subroutines implemented  in
INTEL 8086/88 assembly language.  These routines provide the  FORTRAN/assembly
language interface, invoke  DOS and  BIOS services, perform  vector to  raster
conversion, and directly draw points and lines in the graphic display  memory.
These routines use sixteen bit arguments (INTEGER*2) and IBM screen coordinate
conventions. Their use requires a fairly detailed understanding of the PC.

         CALL GSET               ! enter graphic mode
         CALL GCLS               ! clear graphic memory
         CALL ASET               ! enter alpha mode
         CALL ACLS               ! clear alpha memory
         CALL PSET(X,Y)          ! turn on the pixel at x,y
         CALL PCLR(X,Y)          ! turn off the pixel at x,y
         PTST(X,Y)               ! test the pixel at x,y
         CALL PLINE(X1,Y1,X2,Y2) ! draw line
         CALL PCURSO(ROW,COLUMN) ! position the cursor
         CALL PUTCH(CH)          ! put a character
         CALL BEEP               ! beep the speaker
         CALL REPLY              ! wait for a keyboard entry
         CALL LCLR               ! clear to end of line

MISCELLANEOUS ROUTINES.  Many  miscellaneous  routines  are  included  in  the
library. These provide  bit level access,  shift, and logical  (AND, OR,  NOT,
EOR) operations required by some applications. A standard pseudo-random number
generator is included in the GRAFX  library to support the examples.  Routines
to get time-of-day, time in seconds, and date are included. A vector  clipping
routine is included which can  be used to clip  a problem space vector  before
calling LINE. If you really want to get down to the bits and bytes PEEK & POKE
routines are included to access any location in the 8086 address space.

Programmer notes provide the details on how  to use each routine in the  GRAFX
library, recommendations  on  preferred usage,  and  warnings on  pitfalls  to
avoid. GRAFX programmer notes  are in the file  NOTES.DOC on the  distribution
diskette.

COMPATIBILITY. GRAFX  uses the  IBM CGA   "high-resolution"  640 X  200  pixel
monochrome graphics (mode 6). CGA is  the most widely available graphics  mode
on the PC. While CGA graphics has several design limitations, including a non-
square pixel/aspect ratio, lack of a scalable graphic character set, and a low
vertical resolution, GRAFX compensates by generating shapes in problem  space.
The (optional)  use of  a 8087  numeric coprocessor  makes the  conversion  to
display space  efficient (about  20X faster).  Further line  drawing speed  is
achieved through the use  of assembly language routines  to perform vector  to
raster conversion and directly manipulate display memory instead of using BIOS






& DOS INT  services. These routines  have been tested  with the IBM  PC/XT/AT,
clones and compatibles with and without numeric coprocessors.

GRAFX is a  FORTRAN extension  that can  save you  time and  money in  solving
problems and  communicating results.  GRAFX is  ideal for  academic  computing
where programming  the incidental  means to  an end  (e.g. teaching  numerical
methods) and for prototyping of engineering systems. Several complete examples
are  included.  Additional  library  routines  are  available  which   support
geographic  displays,  numerical  analysis,  orbital  mechanics,and  numerical
simulations.  For  further  details,  custom  requirements,  and  source  code
availability; contact:

                                 Jim Farrell
                                Ridge Technology
                              1867 Park Road, N.W.
                             Washington, D.C. 20010
                                 (202) 232-1441








                          GRAFX DISTRIBUTION POLICY

       (C) Copyright 1988, 1989 by Jim Farrell    All Rights Reserved.

GRAFX is the property of Jim  Farrell and is distributed by RIDGE  TECHNOLOGY.
Individuals are  granted a  limited license  to  use GRAFX,  and to  copy  and
distribute it, provided that the following conditions are met:

      1) No fee may be charged, except a nominal fee to cover duplication
      and mailing costs.

      2)  The  GRAFX  library  and   documentation  files  may  ONLY   be
      distributed in their original, unmodified state.

      3) GRAFX may not be  distributed, in whole or  in part, as part  of
      any commercial or government product or service without the express
      written permission of Jim Farrell.

If you use this program on a regular basis register your copy. By  registering
your copy, you will:

   o  Receive a CURRENT copy of the distribution diskette
   o  Get one year of technical support - by phone or written
   o  Be notified of updates & new products
   o  Provide input and ideas to help shape future products
   o  Help to keep software prices down, by supporting a
      distribution method which doesn't rely on expensive
      advertising campaigns.

GRAFX is user supported software. This means  that you may copy it freely  and
give the  copies to  anyone you  wish, at  no cost.  They, in  turn, are  also
requested to register their copy if they decide to use it.

The user supported  software concept (often  referred to as  shareware) is  an
attempt to provide wide distribution of software at a low cost. It reduces the
cost of offering a new product, and hence permits many independent authors and
small companies to develop and promote products  to meet the many needs of  PC
owners. User supported software is a new marketing channel, where products can
be introduced at low cost.

With user supported software, everyone  benefits. The user benefits by  having
access to quality products at low cost,  and is able to "test drive"  software
thoroughly before purchasing it.  The author benefits by  being able to  enter
the commercial software arena without  first needing large sources of  venture
capital.

The method only works with  your support. Not just  for this product, but  all
user supported software. If you obtain a user supported program from a  friend
or colleague, and are still using it after a couple of weeks, it is  obviously
worth something to you, and it should be registered.








                           SITE LICENSE AGREEMENTS

Commercial and government  users must  obtain a site  license for  the use  of
GRAFX. Use  the order  form in  this manual  to obtain  a site  license.  Site
licenses are granted as of  when we receive your  payment. Enclosed is a  site
license agreement, which  should be  signed and  sent with  your payment  when
ordering a government  or commercial  site license.  A site  license does  not
include additional copies  of the  GRAFX program  disk and  the GRAFX  manual.
Instead, you make your own copies of the disk and  manual as you need them. If
you wish, you can order additional program  disks from us. See the order  form
included for more details.







                        PROGRAM SITE LICENSE AGREEMENT

Jim  Farrell  provides  this  program   and  licenses  its  use.  You   assume
responsibility for  the selection  of  the program  to achieve  your  intended
results, and  for the  installation, use  and the  results obtained  from  the
program.  The  use  of  GRAFX  in  a  commercial  environment  or   government
organization is granted under the following terms:

     1.  Payment of the license fee must be made to Jim Farrell. The  fee
     is based on the number of computers on which GRAFX will be used,  as
     follows:

              1 to  9 computers  $35 each
             10 to 24 computers  $25 each
             25 to 49 computers  $20 each
             50 to 99 computers  $15 each
             over  99 computers  $1500 one time fee

     2.  You may  use GRAFX on  the number of  computers included in  the
     license fee. If you  have paid the fee  for over 99 computers,  then
     you may  use  GRAFX  on  any  number of  computers    within    your
     organization.

     3.  You may make copies  of the program and documentation, in  their
     original, unmodified form, without  restriction. You may  distribute
     these copies without restriction.

     4.  If these  copies are distributed  outside of your  organization,
     you have no obligation to control the use of those copies which  are
     outside of your organization.

     5.  You may not  modify the program or charge  a fee for copying  or
     distributing the program or its documentation.

     6.  It is  your responsibility to make  the necessary copies and  to
     deliver them to  the computers which  they will be  used on. If  you
     wish, you can order additional GRAFX distribution diskettes.

I agree to abide by the terms and conditions of this license.


        _____________________________         _________________
        Signature                             Date

        _____________________________
        Name (please print or type)

        _____________________________
        Title

        _____________________________
        Company







                       ORDER FORM

        Check which items you wish to purchase:

        [] Non-commercial license for the use of GRAFX at $29.95.
        [] Commercial license for the use of GRAFX on ___ computers (see
           attached price schedule and terms).
        [] Distribution disk with documentation (only on orders of
           $50.00 or more, not counting maintenance contracts).
        [] ____ additional disks at $10.00 per disk.
        [] One year maintenance agreement at $50.00 per year.

        [] Payment of $ ____.__ is enclosed (check or money order).


        _________________________________________
        Name

        __________________________________________
        Address

        _______________________  _____  __________
        City                     State     Zip


        Mail this completed form with payment to:

           Jim Farrell
           RIDGE TECHNOLOGY
           1867 Park Road, N.W.
           Washington, D.C. 20010

        Phone: (202) 232-1441

        For  program  disk  orders  outside  the  U.S.,  please  add   an
        additional $5, and enclose  an international money order  payable
        in U.S. currency.

        For commercial site license orders, please enclose a signed  copy
        of the site license agreement.



```
{% endraw %}

## NOTES.DOC

{% raw %}
```
.-
GRAFX PROGRAMMER NOTES

(C) Copyright 1988, 1989 by Jim Farrell      All Rights Reserved.

GRAFX is a FORTRAN extension library of over 50 routines which gives
the FORTRAN user access to the PC's graphic video display and a
selection of DOS and BIOS services. GRAFX can save you time and money
in solving problems and communicating results.  Several complete
examples are included.

The following notes provide information on how to call the GRAFX
library subroutines and functions. Most usage and conventions can be
determined from studying the example programs included on the the
distribution diskette.

-----------------------------------------------------------------------
TOP LEVEL ROUTINE NOTES
-----------------------------------------------------------------------

The following routine uses the lower level routines to produce a x-y
plot display.
-----------------------------------------------------------------------
call xyplt(x,y,n,iv,ip)		!  produce x-y plots 

real x(*),y(*)

A quick look x-y plot routine (scatter plot). Up to three plots may be
displayed on the screen by calling with IV=1..3. If 1 > IV > 3 then a
full screen plot is displayed. IP determines the display type IP=0,
plot a point; IP=1, plot a histogram like line from y=minimum to y(i);
IP=2, plot a histogram like line from y=0 to y(i); IP=3, plot from
(0,0) to (x,y); IP=4, plot a connected line.  A WARNING is issued if
the data range is inappropriate for the selected IP.

-----------------------------------------------------------------------
The following routine uses the lower level routines to display equally
spaced samples (e.g. time series) display.
-----------------------------------------------------------------------
call tplot(xmn,xmx,y,n,iv,ip)		!  produce y=f(t) plots 

real y(*)

A quick look y=f(t) plot routine for equally spaced data.  Up to three
plots may be displayed on the screen by calling with IV=1..3; Any other
value of IV yields a full screen plot. IP determines the display type
IP=0, plot a point; IP=1, plot a histogram like line from y=minimum to
y(i); IP=2, plot a histogram like line from y=0 to y(i); IP=3, plot
from (0,0) to (x,y); IP=4, plot a connected line. A WARNING is issued
if the data range is inappropriate for the selected IP. See example
program for a demonstration of line drawing types.

-----------------------------------------------------------------------
The following routine uses the lower level routines to display
intrinsic or external functions.
-----------------------------------------------------------------------
call fcnplt(xmn,xmx,fcn,n,iv,ip)		!  produce y=fcn(x)

external fcn
   or
intrinsic fcn

A quick look y=fcn(x) plot routine for n points over a range of x.  Up
to three plots may be displayed on the screen by calling with IV=1..3;
Any other value of IV yields a full screen plot. IP determines the
display type IP=0, plot a point; IP=1, plot a histogram like line from
y=minimum to y(i); IP=2, plot a histogram like line from y=0 to y(i);
IP=3, plot from (0,0) to (x,y); IP=4, plot a connected line. A WARNING
is issued if the data range is inappropriate for the selected IP. See
example program for a demonstration of line drawing types.

-----------------------------------------------------------------------
The following routine uses the lower level routines to produce multiple
plot display.
-----------------------------------------------------------------------
subroutine mulplt0(xmn,ymn,xmx,ymx)

...initialize limits for multiple x-y plots

A WARNING is issued if the data range is inappropriate for the selected
IP.

subroutine mulplt(x,y,n,ip)		!  produce multiple x-y plots

real x(*),y(*)

A multiple x-y plot routine. IP determines the display type IP=0, plot
a point; IP=1, plot a histogram like line from y=minimum to y(i); IP=2,
plot a histogram like line from y=0 to y(i); IP=3, plot from (0,0) to
(x,y); IP=4, plot a connected line.

-----------------------------------------------------------------------
The following routine uses the lower level routines to support
histogram display.
-----------------------------------------------------------------------
call hist(x,n)				!  plot histogram 

real x(*)

...routine to plot a histogram of the distribution of x. The n
occurrences of x are counted in 100 equally spaced bins. The results are
then displayed graphically.

-----------------------------------------------------------------------
MID LEVEL ROUTINE NOTES
-----------------------------------------------------------------------
GRAFX uses two include files internally:

"physcon.icl" - physical constants

"grafcom.icl" - graphic common

These are included on the distribution diskette.

Physcon.icl contains the constant PI, conversions from radians to
degrees, and earth physical constants.

Grafcom.icl contains the named COMMON /GRAFCOM/ which contains the
information to map between display space and problem space.

-----------------------------------------------------------------------
Unless otherwise noted, GRAFX assumes that the default implicit FORTRAN
conventions are:

integer*4 and real*4.

-----------------------------------------------------------------------
A BLOCK DATA module GRAFINIT initializes the problem space window to
0.0 to 1.0 in both x and y. It initializes the display space view to 0
to 639 in the x direction and 0 to 199 in the y direction. Invocation
of either WINDOW or VIEW force the loading of GRAFINIT from the
library. If you choose to use the default problem and display space
parameters without invoking either WINDOW or VIEW, the BLOCK DATA
"GRAFINIT" must be declared "external" in your program to force loading
it from the library.

-----------------------------------------------------------------------
call window(xmn,ymn,xmx,ymx)		!  set problem space window

Set problem space window (left, bottom, right, top) in named COMMON
/GRAFCOM/. Origin is lower left. Next call view with display space
view. The defaults are 0.0 and 1.0 for bottom, left and top, right
respectfully.

-----------------------------------------------------------------------
call view(xmn,ymn,xmx,ymx)		!  set display space view
integer xmn,ymn,xmx,ymx

Set display space window view (left, bottom, right, top) in named
COMMON /GRAFCOM/.  The default is 0 to 639 for x and 0 to 199 for y.
Arguments are screen coordinates (pixels).  Note that the GRAFX
convention is for the origin in the lower left corner of the screen.
ymn is the lower coordinate and ymx is the upper.

-----------------------------------------------------------------------
-----------------------------------------------------------------------
The following routines are the mid-level problem space point, line, and
shape generators.  To compensate for the CGA non-linearities, shapes
are generated in problem space. The (optional) use of a 8087 numeric
coprocessor makes the conversion to display space efficient (about 20X
faster than with no 8087). Further line drawing speed is achieved
through the use of assembly language routines to perform vector to
raster conversion and direct manipulation display memory instead of
using BIOS & DOS INT services. Limit checking of points and clipping of
lines is not done. It is assumed that the user has defined appropriate
problem space limits. A clipping routine is provided in the library for
applications requiring clipping.

-----------------------------------------------------------------------
call point(xp,yp)		! light a pixel in problem space

Converts problem coordinates to display coordinates and calls pset to
light the pixel.

-----------------------------------------------------------------------
call color('BLACK')

Determine the color of lines. The default is 'WHITE' or on. In CGA
hi-res mode, there are only two possibilities. 'BLACK' turns off pixels
that are lit and can be used to erase lines.

-----------------------------------------------------------------------
call line(xp1,yp1,xp2,yp2)		!  draw a problem space line (P1 ->
P2)

Converts problem coordinates to display coordinates and calls pline to
draw the line.

-----------------------------------------------------------------------
call plot(x,y,ip)			!  move to problem space point P

Converts the problem coordinate to a display coordinate and moves from 
the current position to x,y. If ip = 2 a line is drawn. This routine is
included to provide compatibility with CALCOMP style calls. Tests have
shown no speed advantage over subroutine line.

-----------------------------------------------------------------------
call box(x1,y1,x2,y2)		!  draw a problem space box

Call line to draw the box. P1 is lower left. P2 is upper right.

-----------------------------------------------------------------------
call circle(x,y,r)		!  draw a problem space circle 

Uses recursive trigonometric techniques to draw a 64 line segment
circle in problem space. Only four multiplies and six additions are
inside the computational loop. X and y are the center point. R is the
radius.

-----------------------------------------------------------------------
call arc(x,y,r,ab,ae)		!  draw a problem space arc

Uses a technique similar to the circle routine to draw an arc.
Parameter ab is the arc begin angle and ae is arc end angle (in
radians). Angles are measured counter-clockwise from the positive x
axis. X and y are the center point. R is the radius.

-----------------------------------------------------------------------
call ellipse(x,y,a,b,theta)		!  draw an ellipse in problem space

Draw a a 64 line segment ellipse centered at x,y: the semi-major axis
is aligned delta radians CCW from the positive x axis.

a - semi-major axis;  b - semi-minor axis

Uses a formulation which eliminates the use of trigonometric
trancendental functions inside the loop.

-----------------------------------------------------------------------
call cursor(irow,icol)		!  position the cursor

Set A/N cursor position at (row,column). In FORTRAN, a write always
starts in column one. Cursor can be used to set the row.

-----------------------------------------------------------------------
call putstr(x,y,string)		!  output a string at (x,y) on screen
integer x,y
character string*(*)

-----------------------------------------------------------------------
call pause('message')		!  put pause message at bottom of the screen
call error('message')		!  put error message at bottom of the screen
call warn('message')		!  put warning message at bottom of the screen
call info('message')		!  put advisory message at bottom of the screen

---------------------------------------------------------------------
LEVEL THREE NOTES
---------------------------------------------------------------------
GRAFX level three contains FORTRAN 77 callable primitive graphics
functions in assembler for CGA HI-RES MONO mode. The routines ASET,
GSET, ACLS, GCLS are called directly from FORTRAN applications. The
routines PSET, PLINE, and PCURSO can be call directly, but are best
used by calling the companion FORTRAN subroutines POINT, LINE, and
CURSOR.

---------------------------------------------------------------------
call gset					!  set graphic; mode = 6
call gcls					!  clear graphic display
call aset					!  set alpha; mode = 2
call acls					!  clear alpha display

---------------------------------------------------------------------
integer*2 row,column
call pset(row,column)		!  turn on a pixel at screen coordinate

Directly accesses the PCs display memory and uses a variety of rather
obscure techniques (e.g. synthetic multiplication) to compute the
address of the required byte access, form the needed bit mask, and turn
on the pixel as fast and efficiently as possible.

---------------------------------------------------------------------
integer*2 row,column
call pclr(row,column)		!  turn off a pixel at screen coordinate

Turn off the pixel.

---------------------------------------------------------------------
integer*2 ptst,row,column,k
k=ptst(row,column)		!  test a pixel at screen coordinate

Test the PCs display memory to see if a pixel is currently on. A none
zero value indicates that the pixel is on.

---------------------------------------------------------------------
integer*2 y1,x1,y2,x2		!  coordinate p1 to p2
call pline(y1,x1,y2,x2)		!  draw a line from screen coordinate p1 to p2

Implements Jack Bresenham's Fast Line Algorithm, which uses only
integer addition and subtraction operations, in 8086 assembler. This
results in the fastest possible line drawing speeds. Line color is
selected by calling COLOR or PCOLOR. The default color is white or
"on".

---------------------------------------------------------------------
integer*2 color
call pcolor(color)

Sets line color 0 = black; otherwise white. This affects all level two
routines except point and can be used to erase lines and shapes.

---------------------------------------------------------------------
FORTRAN 77 callable 16 bit logical and shift functions
--------------------------------------------------------------------
logical and function			k=land(i,j)
logical or function 			k=lor(i,j)
logical exclusive or function		k=leor(i,j)
logical not function 			j=lnot(i)
logical right shift function		j=lshr(i,nbits)
logical left shift function		j=lshl(i,nbits)

Declare these functions integer*2 in calling program. I, J, K, and
NBITS must also be integer*2

integer*2 land,lor,leor,lnot,lshr,lshl
integer*2 i,j,k,nbits

---------------------------------------------------------------------
MISCELLANEOUS ROUTINE NOTES
---------------------------------------------------------------------
character ch
integer*2 ich

ich=ichar(ch)
call putch(ich)			!  put a character at current cursor position

---------------------------------------------------------------------
integer*2 row,column

call pcurso(row,column)		!  position the cursor at row, column

---------------------------------------------------------------------
call beep					!  beep the speaker
call reply				!  wait until a key is pressed
call lclr					!  clear to end of current line

---------------------------------------------------------------------
integer*2 ich

call ckey(ich)				!  check to see if a key has been pressed

If a key has been pressed and a character is in the buffer, return with
ich = ASCII code, otherwise ich = 0.
---------------------------------------------------------------------
call fdate(id,im,iy)		!  day month year
integer id,im,iy

call fsecs(seconds)			!  return time in seconds & fraction

call delay(delt)			!  delay for "delt" seconds and return

call ftime(hh,mm,ss,fss)		!  time in hours, minutes, seconds
integer hh,mm,ss,fss		!  and hundreths of seconds

integer*2 dd,mm,yy
call adate(dd,mm,yy)		!  assembly routine to get date

integer counts
call atime(counts)			!  assembly routine to get time

COUNTS can be used to seed the supplied random number generator RAND to
obtain a different list of pseudo-random numbers each time the
application is used. Time of day in seconds is equal to counts/18.2.

---------------------------------------------------------------------
subroutine clip(x1,y1,x2,y2,nc)

Clip a vector to problem space. The vector is from (x1,y1) to (x2,y2).
variable "nc" returns -1 if unplottable or the number of clips
performed (0-4). CLIP is supplied for optional use by the programmer
in applications where vectors may extend beyond the problem space window.

---------------------------------------------------------------------
call peek(iaddr,ival)			!  get a two byte quantity fm iaddr

integer*4 iaddr				!  physical address
integer*2 ival

---------------------------------------------------------------------
call poke(iaddr, ival)			!  put a two byte quantity at iaddr

integer*4 iaddr
integer*2 ival

------------------------------------------------------------
function rnd(irk)			!  pseudo-random number generator
function rand(irk)			!  pseudo-random number generator

Prime modulus linear congruential generator (Lehmer generator) of the
form f(z)=a*z mod m; where a ~=sqrt(m).  This version uses a=7**5,
m=2**31-1. Seed with an integer variable "irk" containing 1.  Meets the
minimal Lehmer standard!  See Park & Miller; "Random Number Generators:
Good Ones are Hard to Find"; Communications of the ACM; V31 N10 (1988).

WARNING: The function name RND() is used by Lahey F77L FORTRAN as a
non-standard intrinsic. When using RND with F77L declare RND external
to avoid using the non-standard intrinsic RND.

	external rnd

The function RAND is included to provide the exact same service without
such a conflict.  If a different sequence of random numbers is desired
each time you run a program use the atime routine to obtain a seed
based on the the time of day counter.

-----------------------------------------------------------------------
Portability
-----------------------------------------------------------------------
GRAFX was designed to be portable in three dimensions: one, portable to
other FORTRAN compilers; two, portable to other operating systems; and
three, portable to other computers and graphics hardware. 

GRAFX is written in US ANSI FORTRAN 77. The only non-standard feature
used is trailing comments, which will be a FORTRAN 8X standard. No
vendor specific non-standard features are used. Any FORTRAN extensions
required are implemented as primitive subroutines or functions (such as
bit manipulation) as part of the GRAFX library.

Only a minimal set of DOS/BIOS services are used. Access to these
system services is through calls to primitive assembly language
routines which isolate specific functions.

All GRAFX graphic operations are reduced to a few primitive functions,
which are common to all graphic displays.Rather than use a lot of
display hardware dependent shape generation algorithms, all shapes are
reduced to vector operations. The graphic display hardware specific
features are isolated in one small (about 1 KB object code) set of 8086
assembly language routines.

Because portability is "designed in" applications which use GRAFX can
be moved to newer PC technology, mini/mainframe, or even to a super
computer environment easily. In fact, the design of GRAFX reflects
years of experience in designing, building and maintaining applications
which must run in IBM 30XX, DEC VAX, and INTEL 8086 environments
inclusively.

---------------------------------------------------------------------
Compatibility
---------------------------------------------------------------------
The current distribution diskette contains libraries for Lahey FORTRAN
F77L V3.0 and Lahey Personal FORTRAN 77 (LP77).  The libraries were
created using the Lahey library manager (LM), supplied with F77L and
LP77.  You can use the Lahey Library Manager (LM) add to the GRAFX
library or add the GRAFX routines to your current libraries.

The primitives are compatible with MS DOS Version 3.10 and later and
CGA video mode 6.

Call for information on other versions and/or source code availability.

---------------------------------------------------------------------
Suggestions for additions and improvements are greatly appreciated.
Enhancements in final testing include a scalable vector (soft)
character set which can be positioned to the nearest pixel and
additional top level routines. Color support for 640 X 480 VGA mode is
under preparation.  Our priorities for introduction are a direct
reflection of your requests.

Additional library routines are available which support geographic
displays, date conversions, numerical analysis, numerical simulation,
orbital mechanics, radar systems analysis, and other scientific and
engineering applications.  For further details and custom requirements,
contact:

	Jim Farrell
	Ridge Technology 
	1867 Park Road, N.W. 
	Washington, D.C. 20010 
	(202) 232-1441 
.+
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1699

     Volume in drive A has no label
     Directory of A:\

    ACLS     COM         8   5-19-88  12:19p
    CSAT     FOR      2419   3-21-89   9:15a
    EXAMPLE  FOR      1168   1-23-89  10:15a
    F77L     LIB     32768   3-13-89  11:21a
    FILE1699 TXT      2961  12-11-89   5:42p
    GLNK     BAT        56   1-17-89  11:28a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-12-89   2:13p
    GRAFCOM  ICL       759   2-05-89  10:02a
    GRAFX    DOC     19268   5-09-89   1:12p
    LINES    FOR      1226   3-14-89  10:24a
    LP77     LIB     37376   3-13-89  11:14a
    NOTES    DOC     20283   3-21-89   9:12a
    PHYSCON  ICL       948   1-10-89  10:07a
    README            3667   5-06-89   1:06p
    SFIT     FOR      1953   3-21-89   9:17a
    SMOTH    FOR      1870   3-14-89  10:16a
    STAT     FOR      1084   3-14-89  10:18a
    VIEW9    FOR      4308   3-14-89  10:21a
    WORM     FOR      1519   3-14-89  10:23a
           20 file(s)     134219 bytes
                           20992 bytes free
