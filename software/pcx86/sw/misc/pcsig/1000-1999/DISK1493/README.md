---
layout: page
title: "PC-SIG Diskette Library (Disk #1493)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1493/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1493"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XY-SOLVE"

    Teachers will welcome this computer-aided instructional system for the
    design of tests and exercises for high school and college level
    Algebra, Geometry and Trigonometry.
    
    XY-Solve challenges the student to solve a puzzle consisting of
    mathematical functions.  Each piece of the puzzle represents a graphic
    solution to a standard formula.  Puzzle complexity may be varied from
    simple displays of individual points or lines to extremely complex
    combinations of quadratics, trigonometrics, parametrics, and composite
    functions.
    
    The student's progress in solving each piece of the formula is
    displayed and special help is available for identifying boundaries and
    zeroing in on solutions.  A function teachers will appreciate is the
    performance reporting module which tracks the number of solution
    attempts by the student, and difficulty levels reached.
    
    XY-SOLVE has seventeen "puzzle files" and the instructor can formulate
    additional problems by using the macro facility.  Other system features
    include moving window displays, function-sensitive statistics, and
    context-sensitive help screens.  Data can be imported in a variety of
    formats.  Selectable sound and color options add impact to the lessons.
    An extensive on-disk instruction manual is provided.
    
    See also XYSEE (PC-SIG disk number 1507 and 1508), a companion program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1493.TXT

{% raw %}
```
Disk No: 1493
Program Title:  XY-SOLVE version 1.3.1
PC-SIG version 1

Teachers will welcome this computer aided instructional system for the
design of tests and exercises for high school and college level Algebra,
Geometry and Trigonometry.

XY-Solve challenges the student to solve a puzzle consisting of
mathematical functions.  Each piece of the puzzle represents a graphic
solution to a standard formula.  Puzzle complexity may be varied from
simple displays of individual POINTS or LINES, to extremely complex
combinations of Quadratics, Trigonometrics, Parametrics, and Composite
functions.

The student's progress in solving each piece of the formula is displayed
and special help is available for identifying boundaries and zeroing in
on solutions.  A function teachers will appreciate is the performance
reporting module which tracks the number of solution attempts by the
student, and difficulty levels reached.

XY-SOLVE has seventeen "puzzle files" and the instructor can formulate
additional problems by using the macro facility.  Other system features
include moving window displays, function-sensitive statistics and
context-sensitive help screens.  Data can be imported in a variety of
formats.  Selectable sound and color options add impact to the lessons.
An extensive on-disk instruction manual is provided.

See also XYSEE, a companion program.

Synopsis: Create computerized tests and exercises for teaching high
school and college-level Algebra, Geometry and Trigonometry.

Usage:  Education/Computer Aided Instruction/Mathematics.

Special Requirements:  CGA card and a text editor.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

Author: Dean M. Thompson, Insight Advantage

File Descriptions:

FILES    BAT  File descriptions.
GO       BAT  Batch file for starting program.
README   BAT  Initial instructions.
4X6      FON  Font file.
8X8      FON  Font file.
ERROR    MSG  Error message file.
???????? PZL  Puzzle files.
MENUSOLV DTA  Data file.
SD       COM  Sorted directory program.
SETSOLVE DTA  Data file.
XYSOLVE  000  Overlay file.
XYSOLVE  001     ,,    ,,
XYSOLVE  002     ,,    ,,
XYSOLVE  003     ,,    ,,
XYSOLVE  004     ,,    ,,
XYSOLVE  005     ,,    ,,
XYSOLVE  006     ,,    ,,
XYSOLVE  COM  Main program.
INSTALL  EXE  Installation program.
XYSOLVE  DOC  Documentation.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.
```
{% endraw %}

## FILELIST.DOC

{% raw %}
```
                  == XYSolve Ver. 1.3.1 Required Files ==


   The following files are required for the program to function properly.

     XYSolve.COM   XYSolve.000   XYSolve.001   XYSolve.002   XYSolve.003
     XYSolve.004   XYSolve.005   XYSolve.006   SetSOLV.DTA   MenuSOLV.DTA
     4X6.FON       8X8.FON       ERROR.MSG

   The following documentation and utility files should also be present.

                                 XYSolve.DOC
                                 INSTALL.EXE

   The following files if used, must reside on the main program diskette.

     First.PZL     Current.PZL   Two-D.PZL     Practice.PZL  TwoLine.PZL
     ThreeLin.PZL  FourLine.PZL



   We hope you find the programs both Educational and Enjoyable...3/89

```
{% endraw %}

## README.DOC

{% raw %}
```
                == Welcome to the XY-Educational System ==


    COPY the main program diskette files to a disk which contains only
    MS/PC-DOS Ver. 2.0 (or greater) system files.
      
                  Two  disk drive example: Copy A:*.* B:
                  Hard disk drive example: Copy A:*.* C:

    To RUN the XYSolve program, merely enter XYSolve at the DOS prompt.

    A>XYSolve  {Run INSTALL before running XYSolve the first time.}

    To RUN the INSTALL program, merely enter INSTALL at the DOS prompt.

    A>INSTALL  {Reboot your computer before running XYSolve.}

    CALL FOR PUZZLES: Should you develop some interesting Puzzles, 
                      send us a copy so that we may spread the knowledge.


    See the Program Documentation for additional information...8/88

```
{% endraw %}

## XYSOLVE.DOC

{% raw %}
```



                        *******************************
                        *                             *
                        *    PROGRAM DOCUMENTATION    *
                        * = Non-Commercial Use Only = *
                        *                             *
                        *******************************

                   *****************************************
                   *                                       *
                   *            ==============             *
                   *            =  XY-Solve  =             *
                   *            ==============             *
                   *                                       *
                   *****************************************


        XY-Solve challenges the user to complete the solution of a puzzle 
        consisting of mathematic functions.  

        Each piece of the puzzle represents a graphic solution to a 
        standard formula.

        Puzzle complexity may vary from simple displays of individual 
        POINTS or LINES, to extremely complex combinations of Quadratics, 
        Trigonometrics, Parametrics, and Composite functions.

        XY-Solve contains powerful program features designed to guide the 
        user to a better understanding of mathematic concepts.

        XYSolve's advanced features include:

             DISKETTE and KEYBOARD prepared solution sets (puzzles).
             Current session STATUS may be saved and reactivated at will.
             Cross-hair CURSOR system for identifying function boundaries. 
             Plot ENHANCEMENT techniques.
             "ZOOM" capability to search for hidden function displays.
             "HELP" in determining appropriate values for variables. 
             "REPORT" tracks the users performance.
             TOLERANCE RANGE feature augments "Exact Value" solutions.
             SOUND and COLOR DOMAIN control. 
             GRAPHIC and NON-GRAPHIC PRINTER support.

        Minimum System Configuration:

             IBM-PC or true compatible with 128K RAM and one disk drive.
             PC-DOS 2.0 or truly compatible MS-DOS 2.0 or greater.
             IBM-CGA, Hercules Graphics Card or true compatible.

             Contact Insight Advantage for Hercules monochrome versions.











                                     XYSolve

                      Mathematic Functions in Graphic Form.
                      -------------------------------------

             
            Changes and modifications to this program and manual will be 
        made periodically. Consider them as additions to the information 
        supplied herein.

            Direct your requests for copies of this product to Insight
        Advantage.

            Copyright (C) 1988 by Dean M. Thompson. All rights reserved.  
        This product, the software, manual, and any other information 
        included in this package is copyrighted. Copying, duplicating, or 
        otherwise reproducing any part of this product (except where 
        explicitly mentioned in writing) is prohibited by law without the 
        express written consent of Insight Advantage.

            Voluntary or willful violations of the Copyright Law of the 
        United States can result in civil damages in addition to actual 
        occurring damages.

        IBM, MS-DOS, Hercules, WordStar, Epson, SideKick are respectively 
        trademarks of:

        International Business Machines Corp., Microsoft Corp., Hercules 
        Computer Technology, MicroPro International, Epson America Corp., 
        Borland International, Inc. 


                                Insight Advantage
                                4509 Yellowleaf Dr.
                                Fort Worth, TX 76133




                            XYSolve Table of Contents
                            =========================


            1.  Basic Menu Structure                         1

            2.  Sample Session                               2
              2.1  Backing Up Your Diskettes                 2
              2.2  Caring For Your Diskettes                 2
              2.3  The XYSolve Program Disk                  2
              2.4  Before We Start                           3
              2.5  First Steps                               3
              2.6  Conventions                               3
              2.7  Important Keys                            4
              2.8  Grand Tour                                4
              2.9  START Menu Option                         6
              2.10 Puzzle File Directory                     6
              2.11 Two Dimensional Point Math Module         6
              2.12 Main Plot Display                         7
              2.13 Numeric Value Entry                       8
              2.14 First Waiting Position                    8
              2.15 PLOT OPTIONS Menu                         8
              2.16 CURSOR Plot Option                        8
              2.17 ZOOM Plot Option                          8
              2.18 ENHANCE Plot Option                       9
              2.19 PRINTER Plot Option                       9
              2.20 HELP Plot Option                          9
              2.21 EXITING Plot Options                      9
              2.22 Second Waiting Position                  10
              2.23 REPORT Menu Option                       10
              2.24 Keyboard Puzzle Files                    10
              2.25 SAVE Menu Option                         11
              2.26 HELP Menu Option                         11
                                                            
            3.  Functional Modules                          12
              3.1  2D Point                                 12
              3.2  Line                                     12
              3.3  Circle                                   13
              3.4  Parabola                                 13
              3.5  Ellipse                                  13
              3.6  Sine                                     14
              3.7  Cosine                                   14
              3.8  Tangent                                  14
              3.9  Parametric #1                            15
              3.10 Parametric #2                            15
              3.11 Composite #1                             16
              3.12 Composite #2                             16




            4.  Advanced Procedures                         17
              4.1  Preparing Puzzle Files                   17
              4.2  TOLERANCE Value Recommendations          17
              4.3  Puzzle Filenames                         19 
              4.4  Parametric/Composite Procedures          20

            5.  Using The Printer                           21

        Appendices

            1.  Glossary                                   I-1 

            2.  ERROR Messages                            II-1
          
            3.  Demonstration Values                     III-1  

            4.  Puzzle File Syntax                        IV-1

            5.  Practice Puzzle Files                      V-1   

            6.  Index                                     VI-1                     

        Associated Documents

            1.  XY-Educational System ORDER FORM.

            2.  XY-Educational System TROUBLE REPORT.



        Page 1            XYSolve BASIC MENU STRUCTURE
                          ============================

                   
                INTRODUCTION    
                |
                |______________ SYSTEM CUSTOMIZATION
                |                   |_ Sound
                |                   |_ Color
                |
                |_ MAIN MENU
                   |  |
                   |  |_START _________________ PUZZLE SOURCE
                   |  |                              |
                   |  |_REPORT                       |_DISKETTE
                   |  |                              |
                   |  |_SAVE    {Current Status}     |_KEYBOARD
                   |  |
                   |  |_HELP    {System}        
                   |  |
                   |  |_END
           ________|_______________________________
          |             |               |          |
         _GENERAL MENU  QUAD-GEOM MENU  TRIG MENU  SPECIAL MENU
        |                       | 
        |                       |_HELP   {Menu Structure}          
        |
        |
        |___ 2D Points  Line
        |
        |
        |_ _ Circle  Parabola  Ellipse
        |
        |
        |_ _ Sine  Cosine  Tangent
        |
        |
        |_ _ Parametric #1  Parametric #2  Composite #1  Composite #2
        |
        |
        |
        |________ PLOT OPTIONS MENU
                     |
                     |_CURSOR
                     |
                     |_ZOOM    
                     |
                     |_ENHANCEMENT
                     |
                     |_PRINTER   {EPSON 0-6} 
                     |
                     |_HELP      {Variable value} 



        Page 2


                            XYSolve Sample Session
                            ======================

        Backing Up Your Diskettes:

                 Diskettes  can  be damaged or lost.  We  recommend  that 
            before  you  use  XYSolve,  you make a  copy  of  the  Master 
            Diskette.  Use the copy whenever you run the program, leaving 
            the  Master  Diskette in a safe place so it can  be  used  to 
            restore  your  copy  should it  become  necessary.   Specific 
            information on making backup copies of disks can be found  in 
            your DOS (Disk Operating System) manuals.

        Caring For Your Diskettes:

                 Handle diskettes carefully. Treat them as you would  any 
            valuable object; for, with your files on them, that's exactly 
            what they are.
          
                 Diskettes  should  be stored in an upright  position  in 
            their  protective sleeves.  They should not be  subjected  to 
            direct   sunlight,   magnetic   fields   (Vacuum    cleaners, 
            televisions,   microwave  ovens  etc.),  dust,   or   extreme 
            temperatures.

                 When  you  handle  a  diskette, try  not  to  touch  the 
            magnetic  media.   Don't  bend them or  write  on  them  with 
            anything heavier than a felt tip pen.    
            
        The XYSolve Program Disk:

                 All of the programs and files used by the XYSolve system 
            reside on a single disk.  The XYSolve program itself consumes 
            approximately  a  third  of the available  disk  space.   The 
            remainder  of the disk contains the installation program  and 
            the practice Puzzle files.  Sufficient disk space remains for 
            several  of  your  own Puzzle files.  Should  more  space  be 
            needed,  we recommend deleting the installation and  practice 
            files as well as any user developed Puzzle files that are not 
            immediately needed.



        Page 3

        Before We Start:  

                 XYSolve  does a lot of exciting things with disk  files.  
            To help it do its job efficiently, you should reserve as much 
            file capability as possible in your computer system.   You do 
            this by adding the statement "FILES=20" to what is known as a 
            CONFIG.SYS  file on your boot or system disk the  first  time 
            you use XYSolve.  If you have experience in preparing  files, 
            but are a little rusty, you can find refresher information in 
            your  DOS  (Disk  Operating System)  manuals.   If,  however, 
            you're not sure what we are talking about, an easier way  has 
            been provided to get the job done.  A special program  called 
            "INSTALL" has been included on your XYSolve master  diskette. 
            All  you have to do to make or alter a CONFIG.SYS file is  to 
            enter  the name INSTALL just as you would any  other  program 
            you  wish to run.  After INSTALL finishes, you should  REBOOT 
            or RESET your computer to enable your operating system to use 
            the instructions you have just prepared.

        First Steps:

                 Starting  the  program  is  simple,  merely  insert  the 
            XYSolve  master  diskette  into your  disk  drive  and  enter 
            XYSolve at the DOS A> prompt.  In addition to XYSolve itself, 
            your  master  diskette contains several auxiliary  files  and 
            programs  such as INSTALL.  The auxiliary files are  practice 
            Puzzles.    The  Puzzle  files  contain  the   sequences   of 
            instructions  that  comprise the individual  pieces  of  each 
            puzzle.  (more  on this later)    These auxiliary  files  are 
            there  to help you become familiar with all  the  interesting 
            capabilities of your new program.

        Conventions:

                 Before we can go any further, we need to establish  some 
            conventions  to help us as we progress.  The  first  concerns 
            keys.  When a keypress is called for, the indicated key  will 
            be written within brackets like this: <KEY TO PRESS>.  
            In  addition,  menu  selections and commands will  be  placed 
            within single quotes like this: 'MENU SELECTION'.  



        Page 4

        Important Keys:

                 ARROW (CURSOR CONTROL) KEY..

                           Indicates MENU selections.
                           Positions the PLOT CURSOR. 

                 ENTER Key..

                           Selects MENU levels.
                           Executes FUNCTION selected.
                           Indicates ACCEPTANCE of plot values.

                 ESCape Key..

                           EXITS from menu levels, plot options, and math           
                           function modules.
                           REJECTS unwanted plot parameter values.

                 NUMERIC Keys..

                           ENTER plot parameter values.

                 Just  remember,  SELECT  with  an  <ARROW>;  ENTER  with 
            <ENTER>;  DEFINE your plot value with a <NUMERIC>;  and  EXIT 
            with <ESCape>...Its that simple!

        Grand Tour:

                 After   XYSolve  starts  executing,  the   fun   begins.  
            Assuming everything goes well, XYSolve will present you  with 
            a  "SYSTEM  INTRODUCTION"  screen.  This  screen  is  just  a 
            reminder of some of the more important points in running  the 
            program,  such as how to move around within the  menus,  etc. 
            The  comments on setting your particular system's SOUND,  and 
            COLOR  parameters  are of primary importance.  This  is  your 
            opportunity  to  configure  your  program  for  a  particular 
            environment. 



        Page 5

                 Selecting  the  different parameters to change  is  done 
            with  the <ARROW> keys and <ENTER>.  Before XYSolve will  let 
            you  proceed  to the system setup module, however,  it  first 
            checks  to insure that your <ARROW> keys are active.  If  you 
            notice  a "Please press your Number Lock key" request at  the 
            bottom  of your screen, that is what's happening.  Now  let's 
            take  a  little closer look at the SETUP procedures.   We  do 
            this  by pressing <Y> for "Yes". The Setup window  will  open 
            with  the  selection  bar highlighting  the  'SOUND'  option.  
            Press  <UP> and <DOWN> a couple of times and notice  how  the 
            FUNCTION  and COMMENT windows follow.  When you stop  at  the 
            'SOUND'  selection  again, press <ENTER>.   Pressing  <ENTER> 
            will  toggle the sound capability of your system on and  off. 
            Let's set it 'ON' during this session.  Finally, press <DOWN> 
            to  select  the  'COLOR' option.  The  COLOR  option  toggles 
            between  the  single 'NORMAL' screen color, and  a  repeating 
            sequence   of   'ALTERNATE'  colors.   Just   press   <ENTER> 
            repeatedly until the desired color is active.       When  you 
            have  completed setting the environment, you can get back  to 
            the  main  stream  by pressing <ESCape>.  XYSolve  will  then  
            prepare  a  special file on your master  diskette  containing 
            your  new  settings,  and  will  automatically  use  them  as 
            defaults during future sessions.  By now you have used almost 
            all  of  the  important keys you will need  to  know  as  you 
            continue within XYSolve. Should it become necessary, you  can 
            also  review  these key assignments by accessing any  of  the 
            menu 'HELP' screens.

            Ready To Go On?

                 The next screen you will encounter as we proceed is  the 
            'MAIN  MENU'.  This screen is the gateway to the rest of  the 
            program.  From here you can select Puzzles to be solved  with 
            the START selection, obtain a status REPORT on your progress, 
            SAVE your current status for later re-activation, obtain HELP 
            and END a session.  This screen also provides access to other 
            menus with selections of their own.  

                 As you can see, the 'MAIN MENU' screen is primarily made 
            up of five windows:

                    The 'PLOT OPTIONS' window on the left.
                    The 'VALUES' window on the right. 
                    The 'FUNCTION' and 'COMMENT' windows on the bottom.
                    The PLOT DISPLAY window in the center.



        Page 6

                 You will become more familiar with this screen format as 
            we proceed.

                 As   we  have  just  arrived,  the  selection   bar   is 
            highlighting  the  'MAIN MENU' option. By  pressing  <UP>  or 
            <DOWN>;  however, you may select other options.  By  pressing 
            <LEFT> or <RIGHT>, you can move into the FUNCTION window.  Go 
            ahead and practice a bit. Notice how the selection bar  wraps 
            around  the  end of it's range just as it did  in  the  SETUP 
            window.   When  you are ready to proceed,  select  the  'MAIN 
            MENU' option once again.

        START.

                 The first step in using XYSolve is to activate a  puzzle 
            by  selecting  'START'.   Press <DOWN>,  and  you  enter  the  
            PUZZLE  PREPARATION  MENU  where you may  select  either  the 
            DISKETTE or the KEYBOARD as the source for your puzzle.   For 
            now,  we will load and activate one of the  practice  puzzles 
            provided on the XYSolve master diskette.  

        Puzzle File Directory.

                 Press  <ENTER>  or  <RIGHT>  and  <ENTER>  to  obtain  a 
            directory of all the Puzzle Files on your diskette. let's  go 
            with  an  easy one first, one covering  the  TWO  DIMENSIONAL 
            POINT. 

        Two Dimensional Point Math Module.

                 At  the  filename  prompt,  type  "TWO-D"  followed   by 
            <SPACE>.  After reading and analyzing the data from the file, 
            XYSolve  will plot the point on the display, and we  will  be 
            ready  to  proceed with our solution attempt. From  the  MAIN 
            MENU, press <RIGHT> once then <ENTER>. These steps will place 
            us  within  the  'GENERAL MENU' level.  In  addition  to  the 
            change  in  the menu name listing, an  entirely  new  set  of 
            FUNCTION  selections  has been provided.  All  of  the  lower 
            level menu screens look exactly like this with the  exception 
            of displaying their own set of appropriate functions. We  are 
            now  finally at the point where we can select a  function  to 
            solve.  Use <ARROW> and <ENTER> to select '2D Point'.  As  we 
            enter  the  module, the function we are attempting  to  solve 
            blinks  so that it can be identified among other  forms  that 
            may  be  present. Let's go over some of  the  other  changes. 
            First, we finally have some values in the 'VALUES' window  on 
            the  right. In addition, the 'OPTIONS' window has  completely 
            changed  its contents as has the 'FUNCTION' window which  now 
            displays  the 'FORMULA' for our '2D Point'.  Adjacent to  the 
            appropriate  formula,   a  variable is in a  position  to  be 
            updated.



        Page 7

                 Since  the  current  plot display is  used  so  much  by 
            XYSolve,  let's  take just a second and go over some  of  its 
            points. 

        Main Plot Display.
         
                 First,  notice  the set of rulers for the  "X"  and  "Y" 
            axis.   These  rulers define the two dimensions in  which  we 
            will  be  plotting while we are in this module.   The  normal 
            range of this particular set of rulers is +/- 10. You'll also 
            notice  that "X=0" and "Y=0" points are defined  by  vertical 
            and  horizontal  axis lines.  Using the rulers, you  can  see 
            that  the currently displayed point is located at  "X=5"  and 
            "Y=5" or (5,5) for short.

        Numeric Value Entry.

                 Our  next step is pretty clear.  As the  comment  window 
            states,  we can select a new value for the variable  "A";  or 
            simply by pressing <ENTER> accept the +0.0 that is  currently 
            assigned.   After we enter our selections for "A",  "X",  and 
            "B", XYSolve will plot the solution for us. As you enter  the 
            following values, watch the screen carefully. Several  things 
            will  be  happening in quick succession, and I  will  try  to 
            point  them  out  for you.  First, go ahead  and  accept  the 
            current +0.0 values for both "A" and "X" by pressing  <ENTER> 
            twice.  Next,  change  the value for  "B"  to  -7.5  watching 
            carefully  as  you enter each part of  the  value...  XYSolve 
            monitors  each keypress you make, trying to figure  out  what 
            you want.  When it thinks it knows for sure, it will move  to 
            complete  the entry for you.  XYSolve knows all the rules  of 
            the  game, as well as the limits for each value.   It  knows, 
            for example, that SYSTEM LIMITS for variables are set to  +/-
            99, and that only one decimal place is allowed and then  only 
            if the value is less than +10 and greater than -10.  Don't be 
            intimidated by this, XYSolve only wants to  help us keep  our 
            plots  under  control. As you entered  your  keypresses,  the 
            following sequence was taking place:
          
                  Your  first key, the "-", told XYSolve that you  didn't 
            want the currently assigned default value, so it cleared  the 
            value and displayed your "-".  Your second key, the "7",  was 
            no help to XYSolve, so it just displayed it.  Your third key, 
            the  decimal point ("."), was more helpful.  Now XYSolve  can 
            figure  out  what you are doing and set itself up  to  assist 
            you.  It knows to expect another number key (or  <ESCape>  if 
            you don't like your values) and will not allow other  keys to 
            be  accepted..except for one, <ENTER>.  If during entry of  a 
            numeric value, you press <ENTER>, XYSolve will assume you are 
            through and will complete the rest of your value, adding  any 
            appropriate decimal point or zeroes.



        Page 8

                 Your last key, the "5", was all that XYSolve needed,  so 
            it  provided the <ENTER>.  Since you now have values for  all 
            the  required  variables,  XYSolve goes  to  work.   The  "B" 
            'VALUES'  display gets updated and the plot moves to a  point 
            along the "X=0" axis as expected.

        First Waiting Position.

                 After  completing each plot, XYSolve moves to a  waiting 
            position. The 'COMMENT' window then displays key  assignments 
            that are currently active.  

        PLOT OPTIONS menu.

            Press either <UP>, <DOWN>,  <LEFT>,  or <RIGHT>  once.

                 When  you are at the waiting point, all arrow keys  lead 
            to the 'CURSOR' plot option.

            Press <ENTER>  to select the cursor.   

        'CURSOR' Plot Option.

                 While  in  the  'CURSOR' module,  you  may  use  <LEFT>, 
            <RIGHT>, <UP>, or <DOWN> to align the cross-hairs with points 
            of  interest on your plot. Go ahead and practice a bit.  When 
            you are ready to EXIT, press <ESCape>.

        'ZOOM' Plot Option.

        Press <DOWN> once more to get to the 'ZOOM' Option.

                 It  is possible within the numeric limits of XYSolve  to 
            plot  functions partially, or entirely outside the  range  of 
            the  display.   In  attempting  to  identify  these  "hidden" 
            functions, you may toggle the display between the normal  +/-
            10  range  and  +/-100.  Once identified,  functions  may  be 
            solved in the usual manner.  Let's take a quick look at ZOOM.

            Press  <ENTER>  once  to set the  'ZOOM'  option  to  +/-100.  

                 Notice that the plotted point seems to have moved toward 
            the center of the display, just as we would expect it to with 
            our scale change.

            Press <ENTER> once more to reset the 'ZOOM' option to +/-10.



        Page 9

        'ENHANCEMENT' Plot Option.

            Press <DOWN> and <ENTER>.

                 The  inversion  you are seeing is a  technique  used  to  
            more  readily identify plot features that might blend into  a 
            background.  The 'ENHANCE' option is a ON/OFF toggle like the 
            'ZOOM' option we used a minute ago.

            Press <ENTER> again to turn it off.

        'PRINTER' Plot Option.

            Press <DOWN> and <ENTER>.

                 The  'PRINTER'  selection allows you to save a  copy  of 
            your  work  on  a  printer.   Both  GRAPHIC  and  NON-GRAPHIC 
            printers are supported.  We won't copy our current plot as it  
            can take several minutes to complete a printout.
            
            Press <ESCape> to CANCEL the sequence.  

        'HELP' Plot Option.

            Press <DOWN> one last time and <ENTER>.

                 The  'HELP' module identifies variables that are out  of 
            tolerance  causing a solution to fail.  A failure may be  due 
            to  a single variable or possibly the  inter-relationship  of 
            several variables.  The 'HELP' facility allows you to  "lock-
            in" correct values while attempting to "zero-in" on incorrect 
            ones.  In establishing standard limits, XYSolve  can  augment 
            each correct value with a pre-defined tolerance. When  'HELP' 
            is  active, XYSolve compares your input with  the  "standard" 
            limits.   If  an input exceeds the limit,  the  corresponding 
            variable  is identified by a reverse color selection  bar  in 
            the  values display.  It is important to note  however,  that 
            the 'HELP' facility merely leads you to one "unique" solution 
            within  the  entire solution set for the function.   Just  as 
            there  are numerous solutions for any algebraic equation,  it 
            is   possible,  and  entirely  reasonable,  to   successfully 
            complete  the solution for a function with any one  variable, 
            or indeed all variables, exceeding the tolerance limits.

        EXITING Plot Options.

                 There are a number of ways to EXIT Plot Options.  We can 
            press  <UP> four times; press <DOWN> once to wrap around  the 
            menu range;  or just press <ESCape>.  Let's use the fast way.

            Press <ESCape> to jump to the top of the 'PLOT OPTIONS' menu.
            Press <ESCape> to EXIT from the 'PLOT OPTIONS' menu.



        Page 10

        Second WAITING Point.

                 Whenever   we  leave  the  'PLOT  OPTIONS'  window,   we 
            automatically  enter the Second WAITING POINT. From here,  we 
            may either EXIT the '2D Points' module by pressing  <ESCape>, 
            or continue to solve new plots by pressing <SPACE>. 
                 Since we turned the 'HELP' facility ON, let's enter some 
            values and see how it works.

            Press <SPACE> to continue in the '2D Point' module.
            Press  <ENTER>  three  times to accept the  values  we  setup 
            previously.   Notice  that all the variables  are  indicating 
            excessive  values.  As we would continue to refine our  input 
            values, the out-of-tolerance indicators would extinguish.

            Press <ESCape> to EXIT the '2D Point' module.
            Press <ESCape> to EXIT the GENERAL MENU.


        'REPORT' Menu Option.

                 As we have activated a puzzle, we are now able to obtain 
            a report on our progress.

            Press  <DOWN> twice and <ENTER>.

                 The REPORT module provides several pieces of information 
            that   describe  our  performance  as  well  as  define   the 
            complexity  of  each puzzle.  Take a moment  and  review  the 
            report  criteria  on the screen.  While your at it,  can  you 
            explain our miserable score? 
            
            Press <SPACE>.
            Press  <DOWN>,  <LEFT>, and <ENTER> to  select  the  KEYBOARD 
            puzzle file preparation module.

        Keyboard Puzzle Files.

                 The Keyboard Puzzle File Preparation module is extremely 
            handy  when  preparing  and activating  short  Puzzle  Files.  
            Let's prepare a quick Puzzle containing just a Circle.

            Press <3> for a Tolerance value assignment of "0.3".
            Press <3> again to select the 'Circle' module.
            Enter a value of "1.0" for the "A" variable.
            Enter a value of "3.0" for the "B" variable.
            Enter a value of "5.0" for the "R" variable.
            Press <ENTER> at the function prompt to activate the Puzzle.

                 A  more in-depth explanation of Puzzle File  Preparation 
            may be found in the Advanced Procedures section.



        Page 11

        'SAVE' Menu Option.

            Press <DOWN> three times and <ENTER>.

                 The 'SAVE' module will copy our current status onto  the 
            disk where it will remain until we wish to reactivate it.  We 
            are now free to continue to solve for the copy which is still 
            in the computer.  It is important to note however, that there 
            can  be  only ONE CURRENT STATUS file on the  diskette  at  a 
            time.  Thus the contents of any existing status file will  be 
            overwritten with each new 'SAVE'.     
                 As  you may have already noticed, XYSolve will give  you 
            the  chance to reconsider your 'SAVE' request if  it  detects 
            the presence of a previous status file.  Should you decide to 
            abort   the  attempt  by  pressing  <ESCape>,  XYSolve   will 
            reactivate your present puzzle as if nothing happened.   Just 
            for  fun, let's load the puzzle from the "CURRENT.PZL"  file.  
            Use  your  <ARROW> keys etc. to gain access to  'START',  and 
            select  the 'DISK FILE' option.  Finally, enter "CURRENT"  at 
            the filename prompt to load and activate the Puzzle.

        'HELP' Menu Option.

            Press <UP> twice and <ENTER> to select the 'MENU HELP' module.

                 As  you  have learned, XYSolve's menu system  is  multi-
            leveled.   You move from one level to another by way  of  the 
            <ARROW>,  <ENTER>,  and <ESCape> keys.  All the  menu  'HELP' 
            screens  have similar diagrams to  assist you in  determining 
            how to get from place to place. 

            Press <SPACE> to return to the 'MAIN MENU'.

                 This  just  about completes the "Grand  Tour".   There's 
            still  lots  to see and do within XYSolve, but for  now,  you 
            have a good idea of how to:

                 Move around within the menus and  modules.
                 Work the various displays.
                 EXIT back out.

                     One  last thing, to 'END' using XYSolve, you  merely 
            have to press <UP> and <ENTER>.

            That's quite a bit for one session, Let's take a break!



        Page 12

                             XYSolve Functional Modules
                             ==========================


                 XYSolve  functional  modules are designed to  provide  a 
            rich   educational  environment.   Each  function  has   been 
            provided with as much interactive flexibility as is  suitable 
            for  its form.  The following individual  explanations  cover 
            some of the more important aspects of each module such as the 
            type  of  input  expected and possible  error  messages.   In 
            addition, several of the advanced modules are covered in more 
            detail in other parts of this manual.  

        ================================================================

        Functional Module: 2D Point.

        Formula:      Y=AX+B

        Description: Plots a point on a two dimensional plane.

        Discussion:  The Two Dimensional Point module accepts one 
                     positional and two parameter values which are used 
                     to define a position on a two dimensional plane.  

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Line.

        Formula:      AX+BY+C=0 

        Description: Plots a Line with desired rotation on a two 
                     dimensional plane.

        Discussion:  The Line module accepts one positional and three 
                     parameter values which define the horizontal and 
                     vertical location of points along a line segment.  
                     The horizontal limits of the line are defined by the 
                     magnitude of the positional value.  

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero.



        Page 13
        ================================================================

        Functional Module: Circle.

        Formula:      (X-A)^2 + (Y-B)^2 = R^2

        Description: Plots a Circle on a two dimensional plane. 

        Discussion:  The circle module accepts three parameter values 
                     which define the position of the center of a circle 
                     on the plane, and it's radius.  
                     
        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "R" 
                                 variable to a negative value. This would 
                                 represent a negative radius length which 
                                 cannot exist.

        ================================================================

        Functional Module: Parabola.

        Formula:      Y=AX^2 + DX+F           

        Description: Plots a Parabola on a two dimensional plane. 

        Discussion:  The parabola module accepts three parameter values 
                     which define the position of the parabola on the 
                     plane.  
                     
        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Ellipse.       

        Formula:      (X^2/A^2)+(Y^2/B^2)=1

        Description: Plot a Vertical or Horizontal Ellipse.

        Discussion:  The Ellipse module accepts two parameter values 
                     which define the form of an ellipse at the origin.  

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "A" 
                                 variable to a value less than or equal 
                                 to zero. 
                                 A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to a value less than zero.
                                 Both of these errors represent an 
                                 invalid length specification.



        Page 14
        ================================================================

        Functional Module: Sine.

        Formula:      Y=A*Sin(BX+C)

        Description: Plot the Sine periodic function.

        Discussion:  The Sine module accepts three parameter values which 
                     define the form of the function on a two dimensional 
                     plane.  

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Cosine.

        Formula:      Y=A*Cos(BX+C)

        Description: Plot the Cosine periodic function.

        Discussion:  The Cosine module accepts three parameter values 
                     which define the form of the function on a two 
                     dimensional plane. 
                     
        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Tangent

        Formula:      Y=A*Tan(BX+C)

        Description: Plot the Tangent periodic function.

        Discussion:  The Tangent module accepts three parameter values 
                     which define the form of the function on a two 
                     dimensional plane. 
                     
        ** Warning! ** Messages: None.



        Page 15
        ================================================================

        Functional Module: Parametric #1.

        Formula:      Y=A*Sin(B*PI*T) (+) X=C*Cos(D*PI*T)

        Description: Plot a Parametric of Sine and Cosine functions.

        Discussion:  The first Parametric module accepts four parameter 
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. 
                     
        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Parametric #2.

        Formula:      Y=A*Sin((T+PI)/B) (+) X=C*Sin(DT)

        Description: Plot a Parametric of Sine functions.

        Discussion:  The second Parametric module accepts four parameter
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. 
                     
        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero which is undefined.



        Page 16
        ================================================================

        Functional Module: Composite #1.

        Formula:      Y=AX/B (+) Y=-C*Cos(DX)

        Description: Plot the Composite of a line and a Cosine function.

        Discussion:  The first Composite module accepts four parameter
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. 
                     
        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero which is undefined.

        ================================================================

        Functional Module: Composite #2.

        Formula:      Y=A*Cos(BX) (+) Y=C*Sin(DX)

        Description: Plot the Composite of Cosine and Sine functions.

        Discussion:  The second Composite module accepts four parameter 
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. 
                     
        ** Warning! ** Messages: None.



        Page 17
                             XYSolve Advanced Procedures
                             ===========================

                 XYSolve  implements advanced procedures such  as  Puzzle 
            File Preparation, and Parametric and Composite routines.   

        Preparing Puzzle Files:

                 The  format  required  by  the  Puzzle  File  system  is 
            straightforward  in  that  there  is  only  three  types   of 
            information "required" to complete a file; a TOLERANCE value, 
            Function   NAME,  and  NUMERIC  VALUES  for  any   associated 
            variables.   In addition, an optional  non-displayed  COMMENT 
            may be added to each line in the file to explain it's usage.

                 In establishing "standard" limits for variables, XYSolve 
            can  augment  the normal "exact value" solution  criteria  by 
            adding  the pre-defined tolerance value.  A single  tolerance 
            is active for each solution set, and is saved with the puzzle 
            on  diskette.   As you become more familiar with  a  solution 
            set,  you  may choose to tighten-up the tolerance  value,  or 
            even eliminate it altogether.       

        TOLERANCE VALUE Recommendations:

               "0.0"-"0.3"  Advanced level users or simple functions.
               "0.4"-"0.6"  Intermediate level users and functions.
               "0.7"-"0.9"  Novice level users or advanced functions.
           
                 The syntax requirements for the Tolerance value and  all 
            other numerics within a puzzle is the same.  Each value  must 
            occupy  it's  own  line,  contain a prefix  of  "#",  and  be 
            followed by at least one space!

            NUMERIC Examples:

               #0.1 comment recommended.
               #2.3  
               #45
               #-0.6
               #-7.8
               #-90  



        Page 18

                 Sequences  of FUNCTIONS with their associated  variables 
            follow  the tolerance value in the Puzzle file.  There is  no 
            theoretical  limit to the number of functions  (pieces)  that 
            can  make  up  an  individual puzzle;  however,  there  is  a 
            practical  limit  to the complexity of a display.   Too  many 
            pieces, poorly placed, can make a puzzle overly difficult  to 
            solve.  A full listing of available functions and  associated 
            variables can be found in the "Functional Modules" section of 
            this manual. 

                 Puzzle   function   sequences  may   be   developed   by 
            documenting  your keypresses as you go through the  steps  to 
            manually  accomplish your desired goal. Once the  steps  have 
            been  listed, you merely prepare a TEXT file containing  your 
            values.   Don't be overly concerned with this procedure.  I'm 
            sure  you  will find it significantly easier than  writing  a 
            letter  with  a common word processor. If an error  is  found 
            when  you try out the puzzle, merely re-edit your  TEXT  file 
            and try again..

                 The required syntax for puzzle functions is even simpler 
            then  that required for numerics.  Each VALID  function  name 
            must occupy it's own line, and like the numeric, be  followed 
            by at least one space!

            FUNCTION Examples:

               LINE comment recommended.
               Parabola
               circle
               SiNe  (Upper/Lower case okay.)

                 COMMENTS  are highly recommended!  An  optional  comment 
            can be added to each line in your file.  As your work becomes 
            more  sophisticated (lengthy), remembering exactly where  you 
            are  in a sequence at any particular moment may  become  more 
            and  more  challenging.  The liberal use of comments  can  do 
            much  to  alleviate this problem. Please note  however,  that 
            comments, if used, may extend only to the end of the  current 
            line.



        Page 19

        PUZZLE Filenames:

                 XYSolve  is  designed to assist you  in  managing  large 
            numbers  of Puzzle files. It does this through a unique  file 
            extension   technique.    All  Puzzle  files   are   assigned 
            extensions of ".PZL".  If you are preparing your Puzzle files 
            with  a  general  purpose  text  editor,  you  will  have  to 
            explicitly assign this extension.  If however, you are  using 
            the  system editor XY-Edit, it will assign the extension  for 
            you automatically.

            ** WARNING! **

                 Puzzle files that are mis-labeled will not be able to be 
            selected for use by XYSolve. 

                 You may obtain further examples of function and  numeric 
            variable   usage  by printing out the practice  Puzzle  files 
            that have been provided on your XYSolve master diskette.

                 In  addition, the required syntax is diagrammed  in  the 
            Appendices.



        Page 20

        Parametric/Composite Procedures.

                 The  'PARAMETRIC' and 'COMPOSITE' functional  areas  are 
            advanced modules designed to display the effects of parameter 
            changes on "systems" of related equations.  Each group solves 
            two individual equations simultaneously.  In the 'PARAMETRIC' 
            modules, the equations are related through a common parameter 
            such  as "T".  Changes due to this shared parameter  will  be 
            reflected in the contribution each formula makes to the  form 
            of  the  combined display.  In the  'COMPOSITE'  module,  the 
            individual  equations are related by their solutions for  "Y" 
            at identical values of "X".  For example, if your solution at 
            a particular "X" results in a value of "5" for "Y" when using 
            equation  #1,  and  "-5" using  equation  #2,  the  resulting 
            combination  plot  could have a value of "0".  The  plot  for 
            equation  #1  would  place a point  at  location  (X,5),  and 
            equation  #2 at (X,-5).  The combined display would have  its 
            point  placed  at (X,0).  A second major  difference  between 
            Composites and Parametrics is that the Parametrics are solved 
            using perpendicular axis, i.e. "Y=f(T)" for one equation  and 
            "X=g(T)"  for  the other.  Composite equations  however,  are 
            usually solved along a common  axis, say "(gof)(X)=g(f(X))". 

                 Composite equations are not restricted to any  arbitrary 
            type.  The equation for a line might be combined with one for 
            a  curve,  or  two curves might be  combined,  etc.   XYSolve 
            provides examples of each of these standard types.

                 Interesting examples of both Parametrics and  Composites 
            are provided in the Appendices.



        Page 21

        Using the PRINTER:

                 XYSolve has built-in support for both GRAPHIC and NON-     
            GRAPHIC printers.  All you have to do to print out a plot is:

                 1. Insure that your desired plot is on the screen.
                 2. Enter the PLOT OPTIONS MENU and proceed to the     
                    PRINTER selection.
                 3. <ENTER> the PRINTER module.
                 4. Select  an EPSON compatible printing mode.   Your         
                    printer's  manual will help in selecting the best mode 
                    for your particular system.. 
                 5. Follow the directions and insure your printer is  ON 
                    LINE and ready with paper etc., then press <SPACE>.
                
                 That's all there is to it!









                               The XYSolve Appendices
                               ======================


                 Collected here for your use are:
                      
                      1. A Glossary of terms used in this manual.
                      2. A full listing of Error Messages, their causes    
                         and recommended corrections. 
                      3. A comprehensive set of Demonstration Values for
                         each function module.
                      4. A listing of Puzzle File Syntax with examples.
                      5. A directory of Practice Puzzle files.
                      6. A topic Index.



        Page I-1

                              The XYSolve Glossary
                              ====================

                 A

        ASCII: A system which allows the representation of text without 
            the addition of "special" word processing codes.  XYSolve can 
            use Puzzle files prepared with a word processor operating in 
            ASCII Text mode.

        Asymptotes: A straight line (X=0 or Y=0 axis) which may be 
            approached but never touched by a curve.

        Axis: The horizontal X and vertical Y base lines on your display.

                 B

        Backup: Duplication of data or a program to allow recovery 
            following loss or damage to the original.

        Boot/Reset: To start an operating system on a computer. Once the 
            operating system is running, you can execute programs like 
            XYSolve.

                 C

        Command: An instruction given to the computer. 

        Comment window: The area at the bottom of a common XYSolve 
            display where helpful notes and error messages are displayed.

        Composite curve: The combining of two related functions into a 
            third function display. In XYSolve, the original functions 
            are called partials of the composite.

        Cursor: A movable set of horizontal and vertical axis lines which 
            can be used to indicate points of interest on a plot.

                 D

        Default: The response that XYSolve will assume unless a change is 
            specified by the user.

        DOS: Your Disk Operating System is a collection of procedures which 
            enables your computer to execute programs like XYSolve. 



        Page I-2

                 E

        ERROR message: A message displayed on the screen which informs 
            the user of an anomalous condition. Consult the ERROR message 
            listing in the Appendices for message specific information.

                 F

        File: A collection of related information stored on your disk. A 
            file can contain either programs or data.  Puzzle files, and 
            the INSTALL program are examples of disk files used by 
            XYSolve.

        Foci: A point whose position can define the form of an ellipse, 
            hyperbola, or parabola. It appears as the source or 
            destination of rays.

        Function: A correspondence that assigns to each element x of X a     
            unique element y of Y. NOTE: The term "Function" is used to 
            describe a particular module within the XYSolve system, 
            regardless of whether it meets this rigid definition or not.  
            That is to say, the circle is a functional module in XYSolve. 

        Functional module: See Function.

        Function window: The area at the bottom of a common XYSolve 
            display that lists menu selections, active keys, or input 
            requirements.
         
                 H

        HELP screen: A source of information about functions or tasks 
            available to the user at a given point in the program.

        Hercules: A high resolution graphics monochrome display         
            standard. Contact Insight Advantage for Hercules versions of 
            these programs. 

        Install: An auxiliary program designed to adapt your computers 
            operating environment to the needs of XYSolve.

                 L

        Lissajous: A fundamental pattern named after the 19th-century 
            French scientist. Useful in displaying relationships between 
            periodic functions. A simple example is the comparison of the 
            frequency ratio of a wave on the X-axis to one on the Y-axis.



        Page I-3

                 M

        Magnetic media: The fragile coating on a diskette which actually 
            holds your data. The openings on a diskette allow access to 
            the media for your computer. NEVER TOUCH MAGNETIC MEDIA!

        Master Diskette: The original XYSolve program diskette which was 
            provided by the manufacturer.  This diskette should never be 
            used to actually run XYSolve. Use a backup copy.

        Menu: A list of functions or tasks available to the user at a 
            given point in the program. The user selects the function 
            desired from the menu.

        Monochrome: A single color display made up of bright text or 
            graphics against a dark background.  Portions of a graphics 
            display can be inverted by XYSolve using the ENHANCE Plot 
            Option.

                 O

        Origin: An arbitrary point separating the real number system into 
            positive and negative values with a one-to-one 
            correspondence.

        Overlay: A procedure which visually places one display over 
            another. The contents of the individual displays are 
            combined.

                 P

        Parameter values: Values which either totally define a positional     
            value directly (A=X or A=Y) or which adjust its final 
            computed value (A*X or A*Y.)

        Parametric value: A value which is common between two or more 
            expressions.  Altering the parametric value would result in 
            changing all related expressions.  

        Positional values: A combination of X and Y values which 
            represent a position on the two dimensional plane. For 
            example, the set (X,Y) equal to (5,-3), would define a 
            position five units to the right and three units down from 
            the origin.



        Page I-4

        Printer: A device for producing a permanent copy of an XYSolve 
            graphic display. The quality of the printout is dependent 
            upon the graphics capabilities of the printer.

        Prompt: A symbol that appears on the screen indicating the need 
            for a typed response from the user.

                 R

        Read: Moving stored data or a program from a disk file into the 
            computer for processing. 

        Retrieve: Recovering a graphic display from a special part of 
            memory where it was "saved" by XYSolve.

                 S

        Save: Placing a graphic display into a special part of memory 
            where it will remain unchanged until "retrieved" by XYSolve. 

        Scale factor: A level of adjustment applied to data or a display 
            to insure conformity to system limits.

        System limits: A set of maximum and minimum values that define 
            the capabilities of a system. XYSolve has system numeric 
            limits of +/-99 with one decimal place accuracy.

                 W

        Waiting point: A position or step within XYSolve where the 
            program will pause waiting for a response from the user.

        Word Processor: A program which manipulates text and possibly 
            graphics in the preparation of documents.  XYSolve can use 
            Puzzle files prepared with a word processor operating in 
            ASCII Text mode.

        Write: Moving stored data or a program from the computer into a 
            disk file after processing.



        Page II-1

                             XYSolve ERROR MESSAGES
                             ======================

               This appendix is an alphabetic compilation of all the 
          error messages used within XYSolve.  Included with each message 
          is an expanded explanation of what caused the error, as well as 
          any possible remedies.


        Fatal error: Hercules compatible graphics required to run 
        XYSolve.
          XYSolve has not found a compatible graphics capability within 
        your system. Contact Insight Advantage for IBM-CGA versions of
        these programs.

        Fatal error:  Color Graphics system required to run XYSolve.
          XYSolve has not found a IBM-CGA compatible graphics capability 
        within your system. Contact Insight Advantage for Hercules 
        versions of these programs.

        File  EMPTY! . . . Select another File.
         The Puzzle file that was selected that did not contain any data.
        Select another file.

        File NOT Found...
         A Puzzle file was not found when execution was attempted. This 
        error resets automatically. Re-enter a valid filename.

        Invalid SETUP file DATA..defaults active.
         The file "SETSOLVE.DTA" is contaminated. Re-copy from the Master 
        Diskette.

        Incorrect_SEQUENCE! . . . Select another file.
         A Tolerance value was not found at the beginning of the Puzzle 
        file. Edit the Puzzle file, or select another file.

        Incorrect SETUP file VERSION..defaults active.
         The file "SETSOLVE.DTA" is from another version of XYSolve. A 
        Hercules/CGA/EGA version mix has occurred. Re-copy from the 
        Master Diskette.

        NUMERIC quantity contaminated.
         Keyboard input value failed numeric test. Select another key.

        Required DATA FILE NOT FOUND..program terminating.
         The file "MENUSOLV.DTA" was not found. Re-copy from the Master 
        Diskette.



        Page II-2

        Save ABORTED . . .
         A manual ESCape from saving the "Current Status" was detected.

        Select "START"
         There must be a Puzzle activated before attempting to solve for 
        it's pieces. 

        SETUP CONVERSION failed...color default is active.
         The Color value in the Setup file failed a validity test. 
        Re-copy "SETSOLV.DTA" from the Master Diskette.

        SETUP file NOT FOUND..defaults active.
         The file "SETSOLV.DTA" was not found. Re-copy from the Master 
        Diskette.

        SORRY! file was found EMPTY..
         A selected Puzzle file had no values in it. Edit your Puzzle 
        file.

        SORRY! . . . No <Functions> of that type are present.
         An attempt to solve for a function that was not part of the 
        currently active puzzle was detected. Analyze the display and 
        select another function.

        SORRY! . . . Nothing to report, select "START" first.
         An attempt to obtain a puzzle solution report without having 
        solved for a puzzle was detected.  Activate a puzzle.

        SORRY! . . . There are no <Function> present.
         An attempt to solve for a function that was not part of the 
        currently active puzzle was detected. Analyze the display and 
        select another function.

        SORRY!... Printer NOT READY.
         XYSolve has determined that your printer is not ready to plot. 
        Possible causes include being out of paper, not being properly 
        selected ON-LINE, or an equipment failure.  Check your printer.

        Unexpected END OF DATA..program terminating.
         The file "MENUSOLV.DTA" is contaminated. Re-copy from the Master 
        Diskette.



        Page II-3

        WARNING! . . . Invalid FUNCTION.
         A function not supported by this version of XYSolve was detected 
        in your Puzzle File.  Edit the Puzzle File or select another file.

        WARNING!..."?" must not be =< "0".
        WARNING!..."?" must not be  < "0".
        WARNING!..."?" must not be  = "0".
         An attempt was made to set a variable value to less than or 
        equal to zero.  
        This can cause several problems such as: illogical negative 
        lengths, square roots of negative numbers, division by zero, etc. 
        Select an appropriate value. 

        WARNING! . . . No current status to save.
         A puzzle must be active before a status can be saved.  

        WARNING!  "Save-Status" file exists, Replace?  (Y/N)
         This warning merely informs you that a previously saved "Status" 
        file is about to be overwritten.



        Page III-1        

                          XYSolve DEMONSTRATION VALUES
                          ============================


        FUNCTION           VALUES              EFFECT
        ----------------------------------------------------------------

        GENERAL MENU LEVEL *********************************

        2D POINT           1,  5, 0            STANDARD
                           1,  0, 5            X=0 AXIS
                           0,  5, 0            Y=0 AXIS
                           1, 10, 0            MAXIMUM + OFFSET
                           1,-10, 0            MAXIMUM - OFFSET

        LINES             -2, 3, 1, 4          + SLOPE/- OFFSET  
                          -2, 3, 1,-4          + SLOPE/+ OFFSET
                           0, 3, 1, 1          0 SLOPE/- OFFSET

        QUADRATIC-GEOMETRIC MENU LEVEL *********************************

        CIRCLES            -5, 0, 4            Y=0 AXIS
                           -5,-5, 4            3rd QUADRANT
                            0, 0, 1            ORIGIN

        PARABOLAS           2,-5, 0            PHASE SHIFT
                           -1, 0, 0            POLARITY REVERSAL
                          0.2, 0, 0            WIDE
                            7, 0,-30           NEGATIVE OFFSET

        ELLIPSES            4, 8               MAJOR AXIS VERTICAL
                            8, 4               MAJOR AXIS HORIZONTAL
                            5, 5               TRANSITION INTO CIRCLE
                            3, 2               FOCI=2.2

        TRIGONOMETRIC MENU LEVEL ***************************************

        SINE               3, 1, 0             STANDARD WAVE
                           9, 1, 0             AMPLITUDE CHANGE
                           5, 2, 0             PERIOD CHANGE
                           7, 1, 1             57.3 DEG PHASE SHIFT

        COSINE             3, 1, 0             STANDARD WAVE
                           9, 1, 0             AMPLITUDE CHANGE
                           5, 2, 0             PERIOD CHANGE
                           7, 1,-1.6           91.7 DEG PHASE SHIFT

        TANGENT            3, 1, 0             STANDARD WAVE
                           5, 1, 0             AMPLITUDE CHANGE
                           5, 5, 0             PERIOD CHANGE
                           5, 1,-1             -57.3 DEG PHASE SHIFT



        Page III-2

        SPECIAL MENU LEVEL *********************************************

        PARAMETRIC #1      8,1.6, 8,1.1        LISSAJOUS
                           8,2.4, 8,2.4        1:1 RATIO=CIRCLE
                           8,  2, 8,  4        1:2 FREQUENCY RATIO
                         4.5,  1, 6,  5        1:5 FREQUENCY RATIO
                         4.5,  5, 6,  3        5:3 FREQUENCY RATIO

        PARAMETRIC #2      9,  3, 1, 1         120 DEG PHASE SHIFT
                          -9,1.6, 3, 3         112 DEG PHASE SHIFT
                           9,  1, 6, 3         LISSAJOUS VARIATION

        COMPOSITE #1      -3, 2, 3, 1          SLOPE INVERSION
                           1, 2, 2, 6          RAMPING COSINE
                           0, 2, 6, 1          ZERO SLOPE

        COMPOSITE #2       5, 2, 4, 3          COMPLEX WAVEFORM
                           4, 1, 2, 3          COMPLEX WAVEFORM
                           5, 2, 4, 1          COMPLEX WAVEFORM



        Page IV-1 


                               XYSolve PUZZLE Syntax
                               =====================


        EXAMPLE FILENAME: C-CIRCLE.PZL


        PUZZLE FILE SYNTAX: <A><B><SPACE><C>
                            <D><SPACE><E>

                           A = '#' Numeric (TOLERANCE or Variable) prefix.
                           B = Numeric value.
                           C = Optional step comment.
                           D = Function NAME.
                           E = Optional step comment.


        EXAMPLE Statements: #0.8 Novice level Tolerance assigned.
                            Circle First Concentric circle.
                            #-1.0 Vertical offset of center.


        EXAMPLE Puzzle:  Plots four forms.
         
        #0.2  Use Advanced-level tolerances.  {Filename-FIRST.PZL}                    
        LiNe  Plot a line with a negative polarity slope.
        #1.3  "A" value-Vertical magnitude multiplier.                              
        #4.0  "X" value-Horizontal extent of the line.                              
        #1.0  "B" value-Slope polarity variable.                                    
        #0.0  "C" value-No vertical offset defined.                                 
        Circle  Plot a Circle offset from the origin.                               
        #-5.0  "X" value-Horizontal offset of the center of the circle.             
        #0.0   "Y" value-Vertical offset of the center.                             
        #4.0   "R" value-Radius of the circle.                                      
        2D-POINT  Plot a first quadrant Point.                                      
        #1.0  "A" value-Vertical magnitude multiplier.                              
        #5.0  "X" value-Horizontal offset.                                          
        #1.0  "B" value-Vertical offset.                                            
        PARA#1 Plot a Parametric with the following variable values:                
        #8.0  "A" value-Vartical magnitude of Partial #1.                           
        #2.0  "B" value-Frequency of Partial #1 set to two Hertz.                   
        #8.0  "C" value-Same vertical magnitude as Partial #1.                      
        #4.0  "D" value-Frequency of Partial #2 is double that of Partial #1.       
        SINE  Plot a Sine Wave with the following variable values:                  
        #9.0  "A" value-Vertical magnitude multiplier.                              
        #1.0  "B" value-Frequency of wave is set to one Hertz.                      
        #0.0  "C" value-There is no phase shift defined.                            



        Page V-1 

                          XYSolve Practice Puzzle Files 
                          =============================



        Files mentioned in the text:
                                                TWO-D.PZL     
                                                FIRST.PZL   
                                                CURRENT.PZL

        Specific function files:
                                                POINT.PZL
                                                LINE.PZL   
                                                CIRCLE.PZL
                                                ELLIPSE.PZL
                                                PARABOLA.PZL
                                                SINE.PZL
                                                COSINE.PZL
                                                TANGENT.PZL
                                                PARA1.PZL
                                                PARA2.PZL
                                                COMP1.PZL
                                                COMP2.PZL

        Combined Function files:
                                                FIRST.PZL
                                                TWOLINE.PZL



        Page VI-1

                                  XYSolve Index
                                  =============



            2D Point                                          12
            Advanced Procedures                               17
            Backing Up Your Diskettes                          2
            Basic Menu Structure                               1
            Before We Start                                    2
            Caring For Your Diskettes                          2
            Circle                                            13
            Composite #1                                      16
            Composite #2                                      16
            Composite Procedures                              20
            Conventions                                        3
            Cosine                                            14
            CURSOR Plot Option                                 8
            Demonstration Values                           III-1  
            Ellipse                                           13
            ENHANCE Plot Option                                9
            ERROR Messages                                  II-1         
            EXITING Plot Options                               9
            First Steps                                        3
            First Waiting Position                             8
            Functional Modules                                12
            Glossary                                         I-1 
            Grand Tour                                         4
            HELP Plot Option                                   9
            HELP Menu Option                                  11
            Important Keys                                     4
            Keyboard Puzzle Files                             10
            Line                                              12
            Puzzle Files, Preparing                           17
            Puzzle Files, Syntax                            IV-1
            Puzzle Filenames                                  19
            Practice Puzzle Files                            V-1   
            Main Plot Display                                  7



        Page VI-2


            Numeric Value Entry                                7
            Parabola                                          13
            Parametric #1                                     15
            Parametric #2                                     15
            Parametric Procedures                             20
            PLOT OPTIONS Menu                                  8
            PRINTER Plot Option                                9
            Printer, Using The                                21
            Program Disk, XYSolve                              2
            REPORT Menu Option                                10
            Sample Session                                     2
            SAVE Menu Option                                  11
            Second Waiting Position                           10
            Sine                                              14
            START Menu Option                                  6
            Tangent                                           14
            Tolerance Value Recommendations                   17


                                                          Dated:

                    XY-Educational System ORDER FORM
                    ================================



	All XY-Educational System products may be obtained directly
from Insight Advantage. Please enclose check or money order for the
CORRECT AMOUNT with your order. 

	Insight Advantage will pay shipping and handling costs within 
the United States (foreign customers: Please contact Insight Advantage.)

        
   Insight Advantage         Ship to: _________________________________
   4509 Yellowleaf Dr.                _________________________________
   Fort Worth, TX 76133               _________________________________
				      _________________________________


        (   ) Copies of XYSee   @ $30.00 each:      $ ________
        (   ) Copies of XYSolve @ $20.00 each:      $ ________
      * (   ) Copies of XY-Edit @ $15.00 each:      $ ________

                                     Subtotal:      $ ________

             TX residents add 7.00% sales tax:      $ ________

					TOTAL:      $ ________


XYSee and XYSolve are available in IBM-CGA (color) and Hercules
(monochrome) compatible graphics formats.  

             The format I am ordering is:   IBM-CGA   _____

                                            Hercules  _____


* Note: XY-Edit is included with orders for XYSee and XYSolve.  
	Please use this form for additional requirements.

	We attempt to ship all orders within 48 business hours of 
	our receipt.  


IBM and Hercules are respectively trademarks of:

	International Business Machines.
	Hercules Computer Technology.


                                                          Dated:

                      XY-Educational System TROUBLE REPORT
                      ====================================

            Although significant care has been expended to insure the 
            reliability of this program, we would like to know if you 
            experience any problems. Thank-you for your help!


        Your name:(Please print)
        Company/Organization:
        Telephone:(AC & Ext.)


        PROGRAM:  (Example: XYSee, Install, Access-System)

        NATURE OF PROBLEM:  (Example: Scrambled display, Program halted.)




        MODULE BEING RUN:  (Example: Enhance option of Sine module.)


        ALL INPUT VALUES USED:  (Example: A=3, B=2, C=9.0)


        LAST FEW KEYPRESSES:  (Example: 9.0, <ENTER>.)


        DISPLAYED ERROR CODES:  (Example: Error F0, PC=6D3F, Traceback 93FD.)

        {If  display scrambles and program seems to have  stopped,  place 
        printer on-line and press <SHIFT> and <Prt Sc> simultaneously for 
        printout of ERROR codes prior to re-booting system.}



        ENVIRONMENT:  (Example: Power fluctuation just before error.)



        ADDITIONAL COMMENTS: 







        Return to: Insight Advantage
                   4509 YellowLeaf Dr.
                   Fort Worth, TX 76133  

















































                    XYSolve Mathematic Functions in Graphic Form
                       Copyright (C)  1988, Dean M. Thompson
                               All Rights Reserved.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1493

     Volume in drive A has no label
     Directory of A:\

    FILELIST DOC       768   3-22-89  11:54p
    GO       BAT        72   3-24-89  10:17p
    README   DOC       896   8-03-88   8:16p
    4X6      FON       285   2-25-85   3:50a
    8X8      FON      2048  11-20-84   8:33p
    ERROR    MSG       569   4-04-85   7:43p
    FIRST    PZL      1646   2-27-88  10:15p
    FOURLINE PZL        95   2-07-88   5:23p
    MENUSOLV DTA      6743   7-09-88   2:22p
    SD       COM      3584   8-18-84  10:24a
    SETSOLVE DTA         6   3-25-89   8:28a
    THREELIN PZL        73   2-07-88   5:23p
    TWO-D    PZL        29   2-27-88  12:31a
    TWOLINE  PZL       295   2-24-88   9:36p
    XYSOLVE  000       256   3-22-89  11:46p
    XYSOLVE  001      6656   3-22-89  11:46p
    XYSOLVE  002     11520   3-22-89  11:47p
    XYSOLVE  003     37888   3-22-89  11:48p
    XYSOLVE  004      2304   3-22-89  11:48p
    XYSOLVE  005      2304   3-22-89  11:48p
    XYSOLVE  006      3072   3-22-89  11:48p
    XYSOLVE  COM     55471   3-22-89  11:49p
    INSTALL  EXE     12528   6-20-88   9:46p
    XYSOLVE  DOC     79360   8-07-88  10:27a
    XYEDIT   EXE     50400   2-25-89   9:51p
    PRACTICE PZL       691   3-19-89  12:15p
    FILE1493 TXT      2518   7-31-89   1:33p
           27 file(s)     282077 bytes
                           24576 bytes free
