---
layout: page
title: "PC-SIG Diskette Library (Disk #1072)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1072/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1072"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIFFERENTIAL EQUATIONS AND CALCULUS"

    These programs visualize and solve high-level mathematical equations,
    conveniently graphing them for you on an EGA monitor.  Great for
    students, scientists, or anyone who just enjoys math.
    
    The DIFFERENTIAL EQUATION program can solve a variety of both ordinary
    and partial differential equations.  You can also integrate factors of
    an equation, and create a graph of power series solutions.
    
    Use the CALCULUS program to find the derivatives of an expression in x
    and/or y. Other features include graphing functions of y=f(x), graphing
    first and second derivatives, solving and graphing parametric
    equations,
    finding the integral of simple functions, and finding the surface
    contour of a function z=f(x,y).  An MS-Windows version is available for
    registered users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1072.TXT

{% raw %}
```
Disk No: 1072
Program Title:  DIFFERENTIAL EQUATIONS and CALCULUS version 9
PC-SIG version 1.3

These programs visualize and solve high-level mathematical equations,
conveniently graphing them for you on an EGA monitor.  Great for
students, scientists, or anyone who just enjoys math.

The DIFFERENTIAL EQUATION program can solve a variety of both ordinary
and partial differential equations.  You can also integrate factors of
an equation, and create a graph of power series solutions.

Use the CALCULUS program to find the derivatives of an expression in x
and/or y. Other features include graphing functions of y=f(x), graphing
first and second derivatives, solving and graphing parametric equations,
finding the integral of simple functions, and finding the surface
contour of a function z=f(x,y).

Usage:  Differential Equations and Calculus.

Special Requirements:  EGA graphics (some programs need a 8087 math
chip).

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

CALCULUS COM  CALCULUS program.
DE       COM  DIFFERENTIAL EQUATIONS program.
EULER3D  EXE  Test program for 3-D extension of ODE.EXE.
LP       EXE  Uses 3-D graphics window to show graphical meaning of
              simplex method for linear programming.
ODE      EXE  Subprogram
README   BAT  Batch file to view README.DOC.
README   DOC  Documentation file.
STRING   EXE  Subprogram.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  Disk No 1072 DIFFERENTIAL EQUATIONS and CALCULUS  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start a program type, FILENAME (press enter), FILENAME is equal      ║
║ to the name of the program that you want to load. Example, if you       ║
║ wanted to load the EULER program you would type EULER (press enter).    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
        Byoung Keum,                                     October 5, 1988
        Dept. of Math.
        University of IL.
        Urbana, IL 61801.


        Welcome to Calculus and Differential Equations V 10.
        ===================================================

        This disk contains programs to help college students in
        Math, Engineering, or Science.  Some of them are already used in
        the Differential Equations classes in U. of Illinois.  More likely,
        you would not have a printer driver for EGA screen, (We used a
        program named "EGAEPSON.COM included in commercial program "MATLAB")
        and a plotter (we used IBM COLOR PLOTTER).  But even without these
        only if you have an EGA SCREEN (and preferably a math coprocessor), 
        you'll find these programs interesting.  
        This disk is a shareware (suggested registration fee is $ 30.00) 
        and for those who register I will send a diskett with latest and 
        customized versions for their particular request (if possible), 
        and some more document files.  Also, I have Microsoft Windows versions
        for most of these programs.  And smaller (and often much faster) 
        versions of programs doing only one thing (like integration menu) are
        also available for registered users upon, request. 


        *** All these require EGA (640x350, 16 Color).
        *** They are both stack and heap intensive.  (Large Memory maybe
            necessary I tested them only on 640 K machine.  For speed, I
            supressed stack-check option at compilation, except for Euler3d.)
            They will work best, at fresh boot-up, when the stack is
            almost free.


        Tips On Use
        ===========
        
        0. These are so user friendly that most of the time you may need
           help for Math, not for usage of these programs.  
        
        1. DE.COM is for Differential Equations, and CALCULUS.COM is for
           Calculus.  They are compiled in Turbo Pascal (TURBO.COM). 
           Although they are not as fast as STRING.EXE and EULER.EXE, they
           will be very convenient to use as an "Integrated Software", in
           relatively small size.

           ***************************************************************
           Warning: In DE.COM and CALCULUS.COM, when you enter new
           functions,      DON'T use SPACES.  And use multiple * instead of
           power (like x*x rather than x^2).  You don't have to do this
           for the other .exe programs.
           ****************************************************************

           When you are in the program you want (like in ODE of DE.COM), 
           just press ENTER several times to see the default setting.
           During the animation, press ESC to quit.
           Explore on your own, and if you have problems, let me know.

        2. ODE.EXE:
                This is an update of my previous program "EULER.EXE".
                It allows the user to choose between Runge-Kutta method
                and Euler's Method to get the solutions.
                This draws some solutions to the system of linear ODE
                dx/dt = F1(x,y),  dy/dt = F2(x,y), for selected initial
                points.
                Functions to Try:
                        F1 = x+y,   
                        F2 = x-y,   
                     
                        F1 = y,
                        F2 = -x-y,

                        F1 = y,
                        F2 = -sin(x),

                        F1 = y,
                        F2 = .5*(1-x^2)*y-x.

                   The default is for Runge-Kutta with step size 0.2.
                   To switch to Euler, it would be reasonable to reduce
                   the step size (down to 0.003, for example).  You will
                   be surprised to see how accurate the Runge-Kutta method is.
                   

        3. EULER3D.EXE is a test program for 3-dim extension of ODE.EXE.
                   It is very similar to ODE.EXE.  But, careful in choosing
                   functions, (they are more capricious in 3-D).  You can
                   choose xy-view or yz-view or zx-view or oblique view
                   from view menu.  The colors represent z-values. Try to
                   change window and initial conditions (try very small z
                   value like -10), without changing the function first.
                   The function set up as a default is nice.  You can try
                   F1 = 0.1, F2 = -z, F3 = y, (Circular Helix) or any of the
                   examples in 3. above as F2 and F3, letting F1 = constant
                   for interesting results.


        4. STRING.EXE
                First, press ENTER a couple of times to see the demo.
           Any time, press ENTER to interrupt the animation.  Try to change
           parameters.  Make sure (vertical step size)*(number of steps) <= 1.
           This is well known stability criterion. Try to violate it and see 
           the unstable case (well, don't carry on that too far, in fear of
           overflow).

          Initial Functions to try:
                cos(25*x)-1.
                sin(50*x).
                Use abs() to use functions with vertices.
                (Maximum length of function expression < 60.)
           In this update, you can enter the initial velocity.


        5. LP.EXE uses 3-dim graphics window to show graphical meaning of
           simplex method for linear programming.  This is a sample version
           and the full interactive version is in progress.

        Acknowledgements
        ================

        I must say I owe lots of ideas from the Mathematical environment
        of U. of IL.   
        More specifically, LP.EXE is an outcome of the Computer Geometry
        course by Professor G. Francis, in which he suggested the need and
        relevance of such a program.  Also, we had a well-known program
        "LINPROG.COM" by Professor Muller, who gave me advices, and his 
        program helped me to understand this subject.

        Also, we already had a string vibration program written by Professor
        Dornhoff using Fourier Series Method, which fascinated me so much that
        I began to explore the possibility for interactive program.  Professor
        Dornhoff's program used the Fourier Series method, for which it was
        necessary to compute beforehand and write to a file, because of the
        speed.  For an interactive program with compilable language, one
        needs a parser (formula interpreter) and much faster algorithm. So, I
        first developed a parser (which should be optimized, because it
        usually goes into a loop), and as Professor G. Francis suggested,
        tried to use Numerical Method, for speed.  And, it worked fine (of
        course there was hard work behind this program) in Microsoft C, V 5.1.

        The ODE programs use well-known Euler method, and 4-th order Runge-
        Kutta methods to show the graphical solution of linear system of 
        Ordinary Differential Equations. In U. of IL., we had a version using
        Euler's method, written in BASICA (slow, but BASICA has a built-in
        parser!). I used my super-optimized parser (compare it with my old 
        parsers used in DE.COM and CALCULUS.COM. I guess this is more than five 
        times faster, although those were already faster than the BASICA 
        version), and developed a version in Microsoft C Version 5.01.



        ADVERTISEMENT.
        =============

        I have another disk in PC-SIG:

                Disk1070: Particle Simulation.

        Also, another disk is under screening process in PC-SIG:

                Vibrating, Rotating, and Cooling Surfaces.

        Also, I submitted a Microsoft Windows programs in Differential
        Equations in WISC-WARE.

        In addition to these, I have lots of Mathematical Graphics
        programs either for IBM PC, or for Silicon Graphics Machines,
        mostly on the theme of Differential Equations and Differential
        Geometry (most of them contain my optimized parser for highest
        level of interactive environment).  Registered users will get
        informations on further developments.


        *** As of version 9, I implemented a Boolean function '&':

                Value & Limit  =  1,   if Value > Limit,
                                  0,   otherwise.

        With this '&', you can enter functions with vertices or with
        several components of different formula.
        For example, in STRING.EXE,
                     try x&.2 - 2*(x&.5) + x&.8 to use a function like

                 ____
             ___         ___
         0           ____   

             0  .2  .5   .8  1

        
         Have fun!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1072

     Volume in drive A has no label
     Directory of A:\

    CALCULUS COM     62572   9-26-88   1:16p
    DE       COM     64928   6-28-88  10:26p
    EULER3D  EXE     54760   8-11-88  11:25p
    FILE1072 TXT      1546  10-28-88   9:42a
    GO       BAT        38   5-31-88   1:16p
    GO       TXT       540  10-20-88   5:06p
    LP       EXE     40294   6-07-88   1:54a
    ODE      EXE     56486   8-15-88   1:01p
    README   BAT       222   9-26-88  11:36p
    README   DOC      9106  10-05-88  11:52p
    STRING   EXE     53472   8-12-88   1:23a
           11 file(s)     343964 bytes
                           11264 bytes free
