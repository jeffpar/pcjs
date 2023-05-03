---
layout: page
title: "PC-SIG Diskette Library (Disk #1508)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1508/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1508"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "XYSEE 2 OF 2 (1507 ALSO)"

    Teachers will welcome this computer-aided instructional system when
    designing interactive tutorials and tests for high school and college
    level algebra, geometry and trigonometry.  At last, here's a method for
    time-crunched teachers and concerned parents to provide special,
    individualized help for the struggling student and enrichment for the
    advanced student!
    
    XYSEE enhances students' understanding by incorporating high resolution
    graphics to help them visualize the curve represented by a given
    equation, and the effect upon the form of the curve when parameters
    within the equation change.  Tackles such subjects as points and lines,
    intermediate quadratics and trigonometrics, and advanced parametrics and
    composites.  In addition, interactive coverage is extended to forms
    such as triangles, user defined polygons (structured spline and
    free-form), and designs utilizing artistic mathematics.
    
    XYSEE's game module challenges the student to solve puzzles consisting
    of graphic representations of standard formulae.  Imagine the
    excitement of a "Math Bee" or "College Bowl" pitting opposing teams in
    solving puzzle sets exhibiting complexities from ho-hum to horrific.
    The student's progress in solving each piece of the puzzle is displayed
    and special help is available for identifying boundaries and zeroing in
    on solutions.  Teachers will appreciate the performance reporting
    module which tracks solution attempts by the student as well as
    difficulty levels attained.
    
    The secret of this menu-driven instructional system lies in its use of
    macros which allow the instructor to formulate problems which
    demonstrate mathematical principles.  All of XYSEE's macros, data-sets,
    and puzzles may be prepared with the "smart" capabilities of its fully
    integrated application sensitive editor.  The intuitive structure and
    automatic validation abilities of the editor endow even casual users
    with the ability to quickly create scripts of any level of complexity.
    
    System features include moving window displays, function-specific
    statistics, auto-scaling, and context-sensitive help screens.  With
    progressive overlays and multiple import facility, the package offers
    plot enhancement techniques, and sound and color control.  Both graphic
    and non-graphic printers are supported.  A demonstration tutorial
    highlights program features and an extensive and well-written
    instruction manual is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1508.TXT

{% raw %}
```
Disk No: 1508                                                           
Disk Title: XYSee 2 of 2 (1507 also)                                    
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: XYSee                                                    
Author Version: 2.5.0                                                   
Author Registration: $30.00                                             
Special Requirements: CGA and a text editor.                            
                                                                        
This is the second disk of XYSEE.  The first disk is on #1507.  Both    
are needed to run the program.                                          
                                                                        
XYSEE allows teachers to create interactive computer tutorials for      
teaching high school and college level algebra, geometry and            
trigonometry.  At last, here's a method for the time-crunched teacher   
to be able to provide special, individualized help for the struggling   
student and enrichment for the advanced student!                        
                                                                        
XYSEE enhances students' understanding by incorporating graphics to     
help them visualize the curve represented by a given equation, and the  
effect upon the form of the curve when parameters within the equation   
change.  Tackles such subjects as points and lines, intermediate        
quadratics and trigonometrics, and advanced parametrics and             
composites.  In addition, interactive coverage is extended to forms     
such as triangles, user defined polygons (structured spline and         
free-form), and designs utilizing artistic mathematics.                 
                                                                        
The secret of this menu-driven instructional system lies in its use of  
macros which allow the instructor to formulate complex problems and     
demonstrate mathematical principles.  System features include moving    
window displays, function-sensitive statistics, and context-sensitive   
help screens.  With progressive overlays and multiple import facility,  
the package offers plot enhancement techniques, and sound and color     
control.  Both graphic and non-graphic printers are supported.  A       
demonstration tutorial and an extensive and well-written instruction    
manual are included.                                                    
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILEDISC.DOC

{% raw %}
```
.PL

        XYSee version 2.5
       
        File Descriptions: Main Program Disk

        4X6     .FON   Font File
        8X8     .FON   Font File
        ERROR   .MSG   Error Message File
        ????????.PZL   Puzzle Files
        FILELIST.DOC   File Descriptions
        GO      .BAT   Batch File for Program Information
        MENUSEE .DTA   Program Data File
        ????????.IMP   Import Files
        ????????.MA?   MACRO Files
        README  .DOC   Initialization Instructions
        SD      .COM   Sorted Directory Program
        SETSEE  .DTA   Program Data File
        XYSEE   .EXE   Main Program
        XYSEE   .OVR   Overlay File

        File Descriptions: Documentation & Utilities Disk

        ????????.PZL   Puzzle Files
        ????????.IMP   Import Files
        ????????.MA?   MACRO Files
        REGISTER.FRM   Registration Form
        SD      .COM   Sorted Directory Program
        XY_DEMO .MAM   Program Demonstration MACRO
        XYSEE   .DOC   Documentation
        FILEDISC.DOC   File Descriptions

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1508 XYSEE DOCUMENTATION  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type                         ║
║                                      COPY XYSEE.DOC PRN (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## XYSEE.DOC

{% raw %}
```
.PL



                         *******************************
                         *                             *
                         *    PROGRAM DOCUMENTATION    *
                         * = Non-Commercial Use Only = *
                         *                             *
                         *******************************

                   ******************************************
                   *                                        *
                   *               ===========              *
                   *               =  XYSee  =              *
                   *               ===========              *
                   *                                        *
                   *  Mathematic Functions in Graphic Form  * 
                   *                                        *
                   ******************************************


        Highly Interactive, Graphics Oriented  Computer-Aided-Instruction 
        Program  Covering  Mathematic  Functions  And  Forms  Within  The 
        Cartesian (rectangular) Coordinate System.

        XYSee is designed as an INSIGHT ENHANCING addition to high-school 
        and college level studies in ALGEBRA, GEOMETRY, and TRIGONOMETRY.  
        It  overcomes  the classic difficulty in  visualizing  the  curve 
        represented by a given equation, and the effect upon the form  of 
        the curve when parameters within the equation change.

        XYSee  provides full coverage of primary level subjects  such  as 
        POINTS  and  LINES,  intermediate subjects  such  as  QUADRATICS, 
        TRIGONOMETRICS,  and  advanced subjects such as  PARAMETRICS  and 
        COMPOSITES.   In  addition, Interactive coverage is  extended  to 
        forms  such  as  TRIANGLES,  user  defined  POLYGONS  (structured 
        SPLINE,   and   free-form,)  and   designs   utilizing   ARTISTIC 
        MATHEMATICS. 

        XYSee's advanced features include:

             A fully functional yet simple to implement MACRO FACILITY.
             An enigmatic puzzle game to CHALLENGE your skills.
             A LANGUAGE-SENSITIVE Macro, Import, and Puzzle file Editor.
             A multiple value free-form IMPORT facility.
             Dynamically proportioned MOVING WINDOW displays.
             Function sensitive BASIC STATISTICS.
             Plot ENHANCEMENTS and progressive OVERLAYS.
             Context sensitive HELP SCREENS.
             GRAPHIC and NON-GRAPHIC PRINTER support.

        Minimum System Configuration:

             IBM-PC or true compatible with 256K RAM and one disk drive.
             PC-DOS 2.0 or truly compatible MS-DOS 2.0 or greater.
             IBM-CGA, Hercules Graphics Card or true compatible.

             Contact Insight Advantage for Hercules monochrome version.












                                      XYSee

                      Mathematic Functions in Graphic Form.

             
            Changes and modifications to this program and manual will be 
        made periodically. Consider them as additions to the information 
        supplied herein.

            Direct your requests for copies of this product to Insight 
        Advantage. 

          Copyright (C) 1990 by Dean M. Thompson. All rights reserved.  

             This product, the software, manual, and any other 
        information included in this package is copyrighted.  Copying, 
        duplicating, or otherwise reproducing any part of this product 
        (except where explicitly mentioned in writing) is prohibited by 
        law without the express written consent of Insight Advantage.

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



                               XYSee TABLE OF CONTENTS
                               =======================
                                                           
                                                           
         XYSee BASIC MENU STRUCTURE                            1     

         XYSee SAMPLE SESSION                                  2

            Backing Up Your Diskettes                          2 
            Caring For Your Diskettes                          2 
            The XYSee Program Disk                             2 
            Before We Start                                    3 
            First Steps                                        3 
            Conventions                                        3 
            Important Keys                                     4 
            Grand Tour                                         4 
                 XYSee Registration                            6  
                 MAIN MENU Screen                              6 
                 One Dimensional Point Math Module             7 
                 Numeric Value Entry                           8 
                 First Waiting Point                           9 
                 Main Plot Display                            10 
                 PLOT OPTIONS Menu                            10 
                 CURSOR Plot Option                           11 
                 OVERLAY Plot Option                          11 
                 RETRIEVE Plot Option                         11 
                 STORE Plot Option                            11 
                 STATISTICS Plot Option                       11 
                 ENHANCE PLOT Plot Option                     12 
                 PRINT PLOT Plot Option                       12 
                 Plot HELP Plot Option                        12 
                 EXITING Plot Options                         12 
                 Second Waiting Point                         13 
                 Plot a Second Point                          13 
                 START PUZZLE Menu Option                     14
                 Puzzle File Directory                        14       
                 2D POINT Puzzle Selection                    14      
                 CURSOR Plot Option                           14 
                 ZOOM SCALE Plot Option                       15      
                 ENHANCE PLOT Plot Option                     15           
                 PRINT PUZZLE Plot Option                     15          
                 PUZZLE HELP Plot Option                      15          
                 Second Puzzle Waiting Point                  16    
                 PUZZLE REPORT Menu Option                    16      
                 Keyboard Puzzle File Preparation             16    
                 SAVE PUZZLE Menu Option                      17     
            Final Words                                       17    



        XYSee ADVANCED PROCEDURES                             18

            PARAMETRIC/COMPOSITE Procedures                   18     
                 Using The Para./Comp. Procedures             18 
            Cubic SPLINE Procedures                           19 
                 Using the SPLINE Procedures                  19 
            XYSee Printer Support                             20
                 Using The Printer                            20 
            MACRO Procedures                                  21 
                 Executing A MACRO Routine                    21      
                 Preparing MACRO Files                        22          
                 STEP DELAY Value Recommendations             22      
                 MACRO Filenames                              24 
            IMPORT Procedures                                 25 
                 Executing An IMPORT Routine                  25 
                 Preparing IMPORT Files                       26 
                 Example IMPORT File Listing                  27 
                 IMPORT Filenames                             27 
            PUZZLE Procedures                                 27
                 Preparing PUZZLE Files                       27      
                 TOLERANCE VALUE Recommendations              27      
                 NUMERIC Examples                             28      
                 FUNCTION Examples                            28      
                 PUZZLE Filenames                             29

         Editor BASIC MENU STRUCTURE                          30 

         XYSee LANGUAGE SENSITIVE EDITOR                      31

            Edit File Specifications                          31     
            Beginning the XYSee Editor Tour                   31
                 Main Edit Screen                             31
                 XYSee Editor HELP                            31
                 Main Edit Screen (continued)                 32
                 Editor Command HELP                          33
                 CURSOR Control HELP                          33
                      Right 10 spaces..TAB                    33
                      Left/Right on line..F2                  33
                      Bottom of screen..End                   34
                      Top of screen..Home                     34
                      Cursor down..Down-arrow                 34
                      Cursor right..Right-arrow               34
                      Cursor up..Up-arrow                     34
                      Cursor left..Left-arrow                 34
                      Delete character..Del                   34
                      Insert character..Ins                   35
                      Backspace/Delete..Backspace             35
                      Next screen..PgDn                       35
                      Bottom of file..F4                      35
                      Append line..RET                        35
                      Previous screen..PgUp                   35
                      Top of file..F3                         36



                      Insert line..F7                         36
                      Delete line..F8                         36
                      Restore line..F10                       36
                      Copy line from..F5  {Cut}               36
                      Copy line to..F6    {Paste}             37
                      Print edit file..F9                     37 
                      HELP..F1                                37 
                      Exit/Syntax check..ESCape               37 
                 Saving Changes                               38 
                 Continue Editing                             38
                 Edit a New File                              38 
                 Preparing a Practice Edit MACRO              39 
                 Executing the Practice Edit MACRO            40
                 Finishing up                                 40

            Editor HELP Screens                               41 
                 Edit Command HELP screen #1                  41 
                 Syntax HELP screen #2                        41 
                 Application Command HELP screen #3           42 
                
                                                                
                                                                
         Appendices                                             
                                                                
            1.  Glossary                                     I-1
                                                                
            2.  ERROR Messages                              II-1

            3.  Functional Modules (see listing below)     III-1
                                                                
            4.  Demonstration Values                        IV-1 
                                                                
            5.  MACRO Commands                               V-1
             
            6.  PUZZLE Syntax                               VI-1
                                                             
            7.  MACRO/IMPORT/PUZZLE Practice Files         VII-1  
                                                                
            8.  Index                                     VIII-1                    




         FUNCTIONAL MODULES                               III-1    

            Import Facility                               III-1    
            1D Point                                      III-2    
            2D Point                                      III-2    
            Line                                          III-3    
            Triangle                                      III-3    
            Quadratic Equation                            III-4    
            Circle                                        III-4    
            Parabola                                      III-5    
            Ellipse                                       III-5    
            Hyperbola                                     III-6    
            Conic                                         III-6    
            Sine                                          III-7    
            Cosine                                        III-7    
            Tangent                                       III-8    
            Cosecant                                      III-8    
            Secant                                        III-9    
            Cotangent                                     III-9    
            Parametric #1                                III-10   
            Parametric #2                                III-11   
            Composite #1                                 III-12   
            Composite #2                                 III-13   
            Spline                                       III-13

         
         Associated Documents

            1.  Listing of "Practice.MAM".

            2.  XYSee TROUBLE REPORT.



        Page 1             XYSee BASIC MENU STRUCTURE
                           ==========================

                           
            INTRODUCTION      
            |              
            |________________ SYSTEM CUSTOMIZATION                     
            |                      |  
            |                      |_ Sound         {ON, OFF}
            |                      |_ Color         {Special, Default}
            |                      |_ Files         {A,B,C,Default}
            |                HELP--|_ Configuration {Files=20}
            |                      |_ Registration
            MAIN MENU      
            |  |                                
            |  |___ MACRO Script {Global}       
            |  |___ Puzzle Menu _____________                         
            |  |___ File Editor ___          |       
            |  |___ Menu HELP      |         PUZZLE MENU
            |  |___ END XYSee      |              | | 
            |                      |--HELP        | |_ Start Puzzle
            |     _________________|              | |  |_ Disk File-Keyboard
            |    |      |       |                 | | 
            |    |      |       |                 | |_ Puzzle Report
            |    Macro  Import  Puzzle            | |_ Save Puzzle
            |        |                            | |_ Menu HELP
            |        |_ Ma<M>-<G>-<Q>-<T>-<A>     |
            |              |                  ____|_________________        
            |             {Editor}           |          |     |     |  
            |        HELP_______|            GEOM-MENU  QUAD  TRIG  ADVANCED
            |                                              |               |
            |                                              |_ Menu HELP    |
            |                                              |_ Example      |
         ___|___________________________________________                   |
        |          |          |          |              |                  |
        GEOM-MENU  QUAD-MENU  TRIG-MENU  ADVANCED-MENU  Import             |
        |             |                                                    |
        |             |_ MACRO Script {Local}                              |
        |             |_ Menu HELP                                         |
        |             |_ Graphic Art                                       |
        |                                        Para#1 Para#2 Comp#1 Comp#2
        |                                             |                    
        1D Points  2D Points  Line  Triangle          |_ Cursor
           |                                          |_ Zoom Scale
           PLOT OPTIONS MENU                          |_ Enhance Plot
              |                                       |_ Print Puzzle
              |_ Cursor                               |_ Puzzle HELP
              |_ Overlay Plots                                              
              |              |_ Store-Retrieve                               
              |_ Statistics                                                 
              |_ Enhance Plot                                               
              |_ Print Plot    {EPSON 0-6}                                  
              |_ Plot HELP                                                  



        Page 2


                                XYSee SAMPLE SESSION
                                ==================== 

        Backing Up Your Diskettes:

                 Diskettes  can  be damaged or lost.  We  recommend  that 
            before  you  use XYSee, you make a copy of the  Master  Disk.  
            Use the copy whenever you run the program, leaving the Master 
            Disk  in a safe place so it can be used to restore your  copy 
            should  it become necessary.  Specific information on  making 
            backup  copies  of  disks  can be found  in  your  DOS  (Disk 
            Operating System) manuals.

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
            
        The XYSee Program Disk:

                 All  of  the  program files used by XYSee  reside  on  a 
            single  diskette.  XYSee and it's various MACRO, Import,  and 
            Puzzle  files  occupy the majority of the  disk  space.   The 
            remaining   space  is  sufficient  for   several   additional 
            routines. Should more space be needed, we recommend  deleting 
            the  practice files and any user developed routines that  are 
            not currently needed.



        Page 3

        Before We Start:  

                 XYSee does a lot of exciting things with disk files.  To 
            help  it do its job efficiently, you should reserve  as  much 
            file capability as possible in your computer system.   You do 
            this by adding the statement "FILES=20" to what is known as a 
            CONFIG.SYS file on your "BOOT" or system disk the FIRST  TIME 
            you  use XYSee.  If, however, you're not quite sure  what  we 
            are  talking about, merely select the 'CONFIGURATION'  option 
            in  the  'XYSee  SETUP'  module  and  XYSee  will  enter  the 
            statement for you. After configuring your system, you  should 
            "BOOT" or RESET your computer to enable your operating system 
            to use the instructions you have just prepared.

        First Steps:

                 Starting  XYSee  is  easy,  merely  insert  the  program 
            diskette  into  your disk drive and enter XYSee  at  the  DOS 
            prompt.   In addition to XYSee itself, your program  diskette 
            contains  several auxiliary files.  The three main  types  of 
            files  are MACROs, IMPORT routines, and Puzzles.  The  MACROs 
            are  sequences of instructions that your program can  execute 
            automatically  (more on this later).   IMPORT  files  contain 
            lists  of  "X" and corresponding "Y" coordinate  values  that 
            XYSee  will plot, thus making any hidden relationship  within 
            the data clear.  The third type of file found on the  program 
            disk  is  the puzzle. XYSee's puzzles consist  of  a  graphic 
            representation of combinations of mathematic functions.   The 
            object of the exercise is to solve for the various pieces  of 
            the  puzzle  using  a minimum amount of time  and  number  of 
            attempts. We have included these auxiliary files to help  you 
            quickly become familiar with all the interesting capabilities 
            of XYSee.

        Conventions:

                 Before we can go any further,  we need to establish some 
            conventions  to help us as we progress.   The first  concerns 
            keys. When a key press is called for, the indicated key  will 
            be written within brackets like this: <KEY TO PRESS>.  
            In  addition,  menu  selections and commands will  be  placed 
            within single quotes like this: 'MENU SELECTION'.  



        Page 4

        Important Keys:

                 ARROW (CURSOR CONTROL) KEY..

                           Indicates MENU selections.
                           Positions the PLOT CURSOR. 
                           Moves the STATISTICS window.

                 ENTER Key..

                           Selects MENU levels.
                           Executes FUNCTION selected.
                           Indicates ACCEPTANCE of plot values.

                 ESCape Key..

                           EXITS from menu levels, plot options, and math           
                           function modules.
                           REJECTS unwanted plot parameter values.

                 Alt. Key..

                           Selects  an  ALTERNATE FORMULA when used  with 
                           the <F> key.
                           Selects an ALTERNATE PLOT FONT when used  with           
                           the <P> key.

                 NUMERIC Keys..

                           ENTER plot parameter values.

                 Just  remember,  SELECT  with  an  <ARROW>;  ENTER  with 
            <ENTER>;  DEFINE  your plot value with a <NUMERIC>;  and EXIT 
            with <ESCape>...Its that simple!

        Grand Tour:

                 After XYSee starts executing, the fun begins.   Assuming 
            everything  goes well, XYSee will present you with  a  "XYSee  
            PROCEDURES"  screen.  This screen is just a reminder of  some 
            of the more important points in running the program, like how 
            to move around within the menus, etc.  Notice the comments on 
            setting   your   system's   unique   'SOUND',   and   'COLOR' 
            requirements. This is your opportunity to configure XYSee for 
            a particular environment.



        Page 5
                 Selecting  the  different parameters to change  is  done 
            with the <ARROW> keys and <ENTER>. Before XYSee will let  you 
            proceed to the system setup module, however, it first  checks 
            to insure that your <ARROW> keys are active.  If you notice a 
            "Please press your Number Lock key" request at the bottom  of 
            your  screen,  that  is what's happening. Now  let's  take  a 
            little  closer look at the SETUP procedures.  

            Press <Y>es to select the 'XYSee SETUP' module.

                 The  Setup  window  will open  with  the  selection  bar 
            highlighting  the  'SOUND' option.  Press <UP> and  <DOWN>  a 
            couple  of  times  and notice how the  FUNCTION  and  COMMENT 
            windows follow.  

            Press <ARROW> and <ENTER> to select the 'SOUND' option.

                 Pressing  <ENTER>  will toggle the sound  capability  of 
            your system ON and OFF.  Set it 'ON' for this session.  

            Press <DOWN> to highlight the 'COLOR' option. 

                 The  COLOR option toggles between the  single  'DEFAULT' 
            screen  color, and a repeating sequence of 'SPECIAL'  colors.  
            Just  press  <ENTER> repeatedly until the  desired  color  is 
            active. 

            Press <DOWN> to highlight the 'FILES' option.  

                 XYSee can access MACRO, Import, and Puzzle files from  a 
            primary  disk drive 'A', a secondary drive 'B', a fixed  disk 
            drive 'C', or automatically from whatever drive and directory 
            combination is currently active 'Default'.  Use these options 
            to keep your XYSee program and data files separate.  

            Press <DOWN> to highlight the 'CONFIGURATION' option.

                 XYSee  requires  the  services  of  several  disk  files 
            simultaneously.  Your computer provides this capability  when 
            it   encounters  a  "FILES=20"  statement  in   your   system 
            configuration  file "CONFIG.SYS".  If requested,  XYSee  will 
            automatically include the statement for you.

            Press <ENTER> to select the 'CONFIGURATION' module.

                 XYSee  first  determines if your system  already  has  a 
            "CONFIG.SYS"  file,  and  if so,  whether  the  statement  is 
            present.   The  first 'SYSTEM CONFIGURATION'  window  reports 
            your  system's current status.  If desired, you may elect  to 
            have  XYSee <P>roceed with the installation, or <Q>uit if  no 
            changes   are  necessary.   Should  you   desire   additional 
            information  on this procedure, merely select <H>elp  at  the 
            prompt.   If you install the statement, be sure to "BOOT"  or 
            "RESET" (Ctrl + Alt + Del) your computer prior to continuing.



        Page 6

            Press <Q>uit to prohibit changes to your system.
            Press  <DOWN> and <ENTER> to select the 'XYSee  REGISTRATION' 
            module.

        XYSee Registration:

                 The continued development and distribution of XYSee  and 
            it's  MACRO, Import, and Puzzle files is  supported  entirely 
            through  user  registration.  Present  commercial  conditions 
            have  prevented  established companies  from  developing  and 
            marketing upper-level education programs like XYSee.  Without 
            the  active  financial  participation  of  users,   Shareware 
            programs such as XYSee will also perish.  

            Note: Your registration helps support distribution of XYSee 
                  at minimum cost to educational institutions.
          
            Press <SPACE> to continue in the 'XYSee REGISTRATION' module.

                 While  in  this module, you may print out  a  convenient 
            form to facilitate registration of your copy of XYSee.

            Press <SPACE> to view the "XYSee LIMITED LICENSE" screen.
            Press <SPACE> to exit the 'XYSee REGISTRATION' module.
            Press <ESCape> to exit the 'XYSee SETUP' module.

                 XYSee  will  prepare  a special  file  on  your  program 
            diskette containing your new settings, and will automatically 
            use them as defaults during future sessions.  

                 By  now you have used almost all of the  important  keys 
            you will need to know as you continue within XYSee. Should it 
            become  necessary, you can also review these key  assignments 
            by accessing any of the menu 'HELP' screens.

        Ready To Go On?

        'MAIN MENU' Screen:

                 This  screen is the gateway to the rest of the  program.  
            From  here  you can select mathematic functions to  plot  and 
            designs  to  display, as well as edit  and  execute  powerful 
            procedures like MACROS.  The 'MAIN MENU' screen is  primarily 
            made up of five sub-windows:

                    The Plot "OPTIONS" window on the left.
                    The "VALUES" window on the right. 
                    The "FUNCTION" and "COMMENTS" windows on the bottom.
                    The "XYSee DRAWING AREA" window in the center.

                 You will become more familiar with this screen format as 
            we proceed.



        Page 7

            Press  <UP>  or  <DOWN>  several  times  to  highlight  other 
            options.  

            Press  <LEFT>  or  <RIGHT>,  to  highlight  other  menus  and 
            options.

                 Go  ahead and practice a bit. Notice how  the  selection 
            bar wraps around the end of it's range just as it did in  the 
            'XYSee SETUP' window.

            Press <ARROW> and <ENTER> to select the 'MENU HELP' module.

                 As  you can see by the diagram, XYSee's menu  system  is 
            multi-leveled.  You move from one level to another by way  of 
            the <ARROW>, <ENTER>, and <ESCape> keys.  All the menu 'HELP' 
            screens  have similar diagrams to  assist you in  determining 
            how to get from place to place. 

            Press <SPACE> to exit the MENU HELP' module.

        One Dimensional Point Math Module:

                 Now that we know how the menu system works, let's try  a 
            math function module!  

            Press <RIGHT> and <ENTER> to select the 'GEOMETRIC MENU'. 

                 All  of the lower level menu screens look  exactly  like 
            this  with  the  exception of displaying  their  own  set  of 
            appropriate  functions. We are now at the point where we  can 
            actually  select a function to manipulate.  Let's go with  an 
            easy one first..the ONE DIMENSIONAL point. 

            Press <RIGHT> and <ENTER> to select the '1D POINT' module.

                 As  you  can  see,  this  single  dimension  display  is 
            patterned  after  the normal number line with  positive  (+X) 
            values to the right, and negative (-X) values to the left  of 
            the  origin. Let's go over some of the other changes.  First, 
            we  finally  have some values in the "VALUES" window  on  the 
            right.  In  addition,  the "OPTIONS"  window  has  completely 
            changed  its contents as has the "FUNCTION" window which  now 
            displays  the 'FORMULA' for our '1D POINT'.  Along  with  the 
            appropriate  formula,   a  variable is in a  position  to  be 
            updated.  If you were quick, you also might have noticed  the  
            small  sub-window blink on the right.  Should our  selections 
            of  values exceed the limits of the number line,  XYSee  will 
            automatically calculate a new scale factor for the plot.



        Page 8

        Numeric Value Entry:

                 As the comment window states, we can select a new  value 
            for  the variable "A"; or simply by pressing  <ENTER>  accept 
            the  +7.5  that is currently assigned.  After  we  enter  our 
            selections for both "A" and "B", XYSee will plot the  results 
            for  us. As you enter the following values, watch the  screen 
            carefully.   Several  things  will  be  happening  in   quick 
            succession, and I will try to point them out to you.   First, 
            go  ahead  and  accept  the current +7.5  value  for  "A"  by 
            pressing  <ENTER>.  You might have noticed the  "A"  'VALUES' 
            display blink as it was updated.  Next, change the value  for 
            "B" to -7.5 watching carefully as you enter each part of  the 
            value...  XYSee monitors each key press  you make, trying  to 
            figure out what you want.  When it thinks it knows for  sure, 
            it will move to complete the entry for you.  XYSee knows  all 
            the rules of the game, as well as the limits for each  value.  
            It  knows, for example, that SYSTEM LIMITS for variables  are 
            set to +/-99, and that only one decimal place is allowed  and 
            then only if the value is less than +10 and greater than -10.  
            Don't  be intimidated by this, XYSee only wants to   help  us 
            keep  our  plots  under  control. As  you  entered  your  key 
            presses, the following sequence was taking place:

                 Your first key, the "-", told XYSee that you didn't want 
            the currently assigned default value, so it cleared the value 
            and displayed your "-".  

                 Your  second key, the "7", was no help to XYSee,  so  it 
            just displayed it.

                 Your  third  key,  the decimal  point  ("."),  was  more 
            helpful.  Now XYSee can figure out what you are doing and set 
            itself  up to assist you. It knows to expect  another  number 
            key (or <ESCape> if you don't like your values) and will  not 
            allow  other  keys to be accepted..except for  one,  <ENTER>.  
            If during entry of a numeric value, you press <ENTER>,  XYSee 
            will  assume  you are through and will complete the  rest  of 
            your value, adding any appropriate decimal point or zeroes.

                 Your last key, the "5", was all that XYSee needed, so it 
            provided the <ENTER>.

                 Since   you  now  have  values  for  all  the   required 
            variables, XYSee goes to work.  The "B" 'VALUES' display gets 
            updated,  the  plot  scale factor  message  blinks,  and  the 
            plotted point moves to the "X=0" origin as expected.



        Page 9

        First Waiting Point:

                     After  completing  each plot, XYSee  moves  to  it's 
            first  waiting position. The "COMMENT" window  then  displays 
            key assignments that are currently active.  Let's exit to the 
            'MAIN  MENU'  for  now. We'll get more  practice  with  other 
            functions later.. 

            Press <ESCape> to exit the '1D POINT' module.
            Press <ESCape> to exit the 'GEOMETRIC MENU'.



        Page 10

                 The  '1D POINT' plot window is special.  The  'QUADRATIC 
            EQUATION' module is the only other math function that uses  a 
            similar display.  

            Press <RIGHT> and <ENTER> to select the 'GEOMETRIC MENU'.
            Press  <RIGHT>  twice then <ENTER> to select the  '2D  POINT' 
            module.  

                 The  '2D POINT' display is used so much that  we  better 
            take just a second and go over some of its features. 

        Main Plot Display:
         
                 First,  notice  the set of rulers for the  "X"  and  "Y" 
            axis.   These  rulers define the two dimensions in  which  we 
            will  be plotting while we are in this module.  The range  of 
            this particular set of rulers is +/- 10.  Different functions 
            may  have  different ranges so be sure to check them  as  you 
            plot.   You'll  also notice that "X=0" and "Y=0"  points  are 
            defined  by  vertical and horizontal axis lines.   Using  the 
            rulers,  you  can see that the currently displayed  point  is 
            located at "X=4" and "Y=-5" or (4,-5) for short.  The numeric 
            values  that  determined  this  location  are  shown  in  the 
            "VALUES"  window.  Just as in the '1D Point'  example,  these 
            are  the  default  assignments that are used to  give  you  a 
            consistent   starting   place  from  which   to   base   your 
            investigations.   XYSee  automatically plugged  these  values 
            into the equation shown in the "FUNCTION" window.  The  scale 
            of  our  plot indicates our default  assignments  were  small 
            enough  not to need any additional adjusting. Entering  large 
            values  will  result  in our plot being scaled  by  "X10"  or 
            greater  as  necessary.  Let's enter our own values  and  see 
            what "PLOT OPTIONS" will then be available to us. 

            ENTER the following values:

                 1.0 for "A" (XYSee provides the <ENTER>).
                 0   for "X" (you must provide the <ENTER>)
                 5.0 for "B". 

                 These  values  define  a "X" location of 0,  and  a  "Y" 
            location  of 5, i.e. (0,5) which is just where our point  is.  
            Since  we are now at the waiting point, we can make our  next 
            selection  from  the key assignment list  in  the  "FUNCTION" 
            window at the bottom of our screen.

        PLOT OPTIONS menu:

            Press <ARROW> to highlight the 'CURSOR' option.

                 When you are at the first waiting point, all arrow  keys 
            lead to the 'CURSOR' plot option.



        Page 11

        'CURSOR' Plot Option:

            Press <ENTER> to select the 'CURSOR' module.  

                 Use <LEFT>, <RIGHT>, <UP>, or <DOWN> to align the cross-
            hairs  with  points of interest on your plot.  Go  ahead  and 
            practice a bit. 

            Press <ESCape> to exit the 'CURSOR' module.

        'OVERLAY' Plot Option:

            Press <DOWN> to highlight the 'OVERLAY PLOTS' Menu.

                 The  'OVERLAY PLOTS' Menu has two options:  'STORE'  and 
            'RETRIEVE'.   We  haven't stored anything yet, but  just  for 
            fun, let's try the 'RETRIEVE' option.

        'RETRIEVE' Plot Option:

            Press <LEFT> and <ENTER> to select the 'RETRIEVE' module. 

                 The  WARNING! message is XYSee's way of informing us  of 
            an error condition. This time let's 'STORE' the point we just 
            plotted.

        'STORE' Plot Option:

            Press <RIGHT> and <ENTER> to select the 'STORE' module.

                 Even  though it appears that nothing happened,  we  have  
            successfully stored our plot and can 'RETRIEVE' it later.

        'STATISTICS' Plot Option:

            Press <DOWN> and <ENTER> to select the 'STATISTICS' module.  

                 The number and kind of statistics available varies  from 
            function to function. The '2D POINT' function we are plotting 
            has three statistics available: both "X" and "Y" offsets, and 
            a location determination aid called "X-Y offset".   Functions 
            can  have up to seven statistics, so the 'STATISTICS'  window 
            will  expand  or  contract  accordingly.  You  may  move  the 
            'STATISTICS' window around your plot with the <ARROW> keys.

            Press <ESCape> to exit the 'STATISTICS' module.



        Page 12

        'ENHANCE PLOT' Plot Option:

            Press <DOWN> and <ENTER> to select the 'ENHANCE PLOT' module.

                 The inversion you are seeing is a technique used to more 
            readily  identify  plot  features that  might  blend  into  a 
            background.   The  'ENHANCE PLOT' option is a  ON/OFF  toggle 
            like the 'SOUND' Setup we did earlier. 

            Press <ENTER> to turn the 'ENHANCE PLOT' option OFF.

        'PRINT PLOT' Plot Option:

            Press <DOWN> and <ENTER> to select the 'PRINT PLOT' module.

                 The 'PRINT PLOT' selection allows you to make a copy  of 
            your  work  on  a  printer.   Both  GRAPHIC  and  NON-GRAPHIC 
            printers are supported.  We won't copy our current plot as it  
            can take several minutes to complete a printout.
            
            Press <ESCape> to cancel the 'PRINT PLOT' sequence.  

        'PLOT HELP' Plot Option:

            Press <DOWN> and <ENTER> to select the 'PLOT HELP' module.

                 Two types  of HELP are normally provided at this  level.  
            First,  each  current variable is listed along with  a  short 
            explanation of it's effect. Second, EXAMPLE VALUES are listed 
            along  with  the plots they define.  Our  values  of  (1,0,5) 
            define a point on the "X=0" axis just as expected. 

            Press <SPACE> to exit the 'PLOT HELP' module.

        EXITING Plot Options:

                 There  is  a number of ways to get to the  Plot  Options 
            exit point.  From where we are, we can press <UP> five times; 
            press  <DOWN>  once to wrap around the menu range;   or  just 
            press <ESCape>. Let's use the fast way.

            Press <ESCape> to exit to the top of the 'PLOT OPTIONS' menu.
            Press <ESCape> to exit from the 'PLOT OPTIONS' menu.



        Page 13

        Second Waiting Point:

                 Whenever   we  leave  the  "PLOT  OPTIONS"  window,   we 
            automatically  enter the second waiting position. From  here, 
            we  may  either  exit  the  '2D  POINT'  module  by  pressing 
            <ESCape>,  or  continue  to  create  new  plots  by  pressing 
            <SPACE>.  Let's plot another point, but this time we will  go 
            a little faster since we are now familiar with the procedure.

        Plot a second point:

            Press <SPACE> to plot another point.
            Press "0" and <ENTER> for the "A" value.
            Press "5" and <ENTER> for the "X" value.
            Press "0" and <ENTER> for the "B" value.

            The values define a point on the "Y=0" axis at "X=+5".

            Press <DOWN> twice to select the 'OVERLAY PLOTS' module.
            Press <LEFT> and <ENTER> to select the 'RETRIEVE' module.

                 We  now  have  our  new  point  overlaying  the  one  we 
            previously  'SAVED' for comparison.  Since  overlaying  plots 
            may  mix  scales,  XYSee automatically switches  to  a  "UNIT 
            SCALE" for the plot window during overlaying.

            Press  <DOWN> twice and <ENTER> to select the 'ENHANCE  PLOT' 
            module.
            Press <UP> and <ENTER> to select the 'STATISTICS' module.

                 Notice  that the STATISTICS window is essentially  where 
            we  left  it the last time. As long as you  remain  within  a 
            particular  function  module, you won't have  to  continually 
            move  the  'STATISTICS' window out of the way each  time  you 
            plot.  XYSee calculates statistics only for your latest plot. 
            If  we overlay components of several previous plots,  keeping 
            track  of  each  set of  statistics  could  become  extremely 
            confusing!

               Press: <ESCape> to exit the 'STATISTICS' window.
                      <DOWN> and <ENTER> to select 'ENHANCE PLOT' module.
                      <ESCape> up to the 'CURSOR'/EXIT point.
                      <ESCape> out of the "PLOT OPTIONS" window.
                      <ESCape> out of '2D POINT'.
                      <ESCape> out of the 'GEOMETRIC MENU'.

        Whew!... Let's take a break!



        Page 14

        Ready to continue?

            Press <ARROW> and <ENTER> to select the 'PUZZLE MENU'.

                 From  the  'PUZZLE MENU' you can select  Puzzles  to  be 
            solved  with  the 'START PUZZLE' selection, obtain  a  status 
            'PUZZLE  REPORT' on your progress, save your current  puzzles 
            status  for  later re-activation with 'SAVE  PUZZLE',  obtain 
            'MENU HELP', and return to the 'MAIN MENU'. This screen  also 
            provides  access  to other menus and selections as  we  shall 
            see.  The  'PUZZLE MENU' screen also controls the  same  five 
            sub-windows with which we are already familiar.

        'START PUZZLE' Menu Option:

            Press <ARROW> to highlight the 'START PUZZLE' option.

                 The first step in solving a puzzle is to activate one by 
            selecting  'START PUZZLE'.  You may select either  the  'DISK 
            FILE'  or the 'KEYBOARD' as the source for your puzzle.   For 
            our  demonstration,  we  will load and activate  one  of  the 
            practice puzzles provided on the XYSee program diskette.  

        Puzzle File Directory:

            Press the default <ENTER> or <RIGHT> and <ENTER> to obtain  a 
            directory of all Puzzle Files on your diskette. 

            '2D POINT' Puzzle Selection.

            At  the filename prompt, type "TWO_D" and <SPACE>  to  select 
            the Puzzle File.  

                 After  reading  and analyzing the data  from  the  file, 
            XYSee will plot the point on the display.  Everything is then 
            ready for us to proceed with our solution attempt. 

            Press <RIGHT> and <ENTER> to select the 'GEOMETRIC MENU'. 

                 We are now ready to select our function to solve.

            Press <RIGHT> and <ENTER> to select the '2D POINT' module.

                 As  we enter the module, the function we are  attempting 
            to  solve  blinks so that it can be  identified  among  other 
            forms  that may be present.  Go ahead and enter  some  random 
            values so that XYSee will advance to the First Waiting Point.

        'CURSOR' Plot Option:

            Press <ARROW> to highlight the 'CURSOR' Plot Option.



        Page 15

                 The 'CURSOR' Plot Option works just like it did  before, 
            so we will ignore it for now.

        'ZOOM SCALE' Plot Option:

            Press <DOWN> to highlight the 'ZOOM SCALE' Plot Option.

                 It  is  possible within the numeric limits of  XYSee  to 
            plot functions partially or entirely outside the range of the 
            display.  In attempting to identify these "hidden" functions, 
            you  may  toggle the display scale between the  normal  +/-10 
            range and +/-100 or +/-1000.  Once identified, functions  may 
            be  solved in the usual manner.  Let's take a quick  look  at 
            the 'ZOOM SCALE' module.

            Press <ENTER> to set the 'ZOOM SCALE' to +/-100.  

                 Notice that the plotted point seems to have moved toward 
            the  center of the display, just as we would expect with  our 
            scale change.

            Press <ENTER> twice to reset the 'ZOOM SCALE' to +/-10.

        'ENHANCE PLOT' Plot Option:
        'PRINT PUZZLE' Plot Option:

                 The 'ENHANCE PLOT' and 'PRINT PUZZLE' Plot Options  work 
            just like before, so we will ignore them also.

        'PUZZLE HELP' Plot Option:

            Press  <DOWN> three times and <ENTER> to select  the  'PUZZLE 
            HELP' module.

                 The  'HELP' module identifies variables that are out  of 
            tolerance  causing a solution to fail.  A failure may be  due 
            to  a single variable or possibly the  inter-relationship  of 
            several variables.  The 'HELP' facility allows you to  "lock-
            in" correct values while attempting to "zero-in" on incorrect 
            ones. In establishing standard limits, XYSee can augment each 
            correct  value with a pre-defined tolerance. When  'HELP'  is 
            active, XYSee compares your input with the "standard" limits.  
            If an input exceeds the limit, the corresponding variable  is 
            highlighted  in the values display.  It is important to  note 
            however,  that  the 'HELP' facility merely leads you  to  one 
            "unique"  solution  within the entire solution  set  for  the 
            function.   Just  as  there are numerous  solutions  for  any 
            algebraic equation, it is possible, and entirely  reasonable, 
            to successfully complete the solution for a function with any 
            one   variable,  or  indeed  all  variables,  exceeding   the 
            tolerance limits.



        Page 16

            Press <ESCape> to jump to the top of the 'PLOT OPTIONS' menu.
            Press <ESCape> to exit from the 'PLOT OPTIONS' menu.

        Second Puzzle Waiting Point:

                 Just  as  before, when XYSee is at  the  second  waiting 
            position,  we  may  either  exit the  '2D  POINT'  module  by 
            pressing  <ESCape>,  or  continue  to  solve  the  puzzle  by 
            pressing <SPACE>. 

                 Since  we  just turned the 'PUZZLE  HELP'  facility  ON, 
            let's re-enter our random values and see how it works.

            Press <SPACE> to continue in the '2D POINT' module.
            Press <ENTER> three times to accept the previous values.

                 Notice that some or all of the variables are highlighted 
            indicating  excessive values.  As we normally would  continue 
            to  refine our input values, the out-of-tolerance  indicators 
            would extinguish until a solution was obtained.

            Press <ESCape> to exit the '2D POINT' module.
            Press <ESCape> to exit the 'GEOMETRIC MENU'.

        'PUZZLE REPORT' Menu Option:

            Press <DOWN> twice and <ENTER> to select the 'PUZZLE REPORT' 
            module.

                 The REPORT module provides several pieces of information 
            that  describe our performance as well as the  complexity  of 
            each puzzle.  You may print a copy of the report if  desired.   
            While we're at it, can you explain our miserable score? 
            
            Press <SPACE> to exit the 'PUZZLE REPORT' module.
            Press  <DOWN>, <LEFT>, and <ENTER> to select  the  'KEYBOARD' 
            puzzle file preparation module.

        Keyboard Puzzle File Preparation:

                 The Keyboard Puzzle File Preparation module is extremely 
            handy when preparing and activating short puzzle files.   For 
            this demonstration, let's prepare a quick circular puzzle.

            Press <3> for a Tolerance value assignment of "0.3".
            Press <3> again to select the 'Circle' module.
            Enter a value of "1.0" for the "A" variable.
            Enter a value of "3.0" for the "B" variable.
            Enter a value of "5.0" for the "R" variable.
            Press <ENTER> at the function prompt to activate the Puzzle.

                 A  more in-depth explanation of puzzle file  preparation 
            may be found in the ADVANCED PROCEDURES section.



        Page 17

        'SAVE PUZZLE' Menu Option:

            Press  <DOWN>  three times and <ENTER> to  select  the  'SAVE 
            PUZZLE' module.

                 The  'SAVE' module will copy our current  puzzle  status 
            onto  the  disk  where  it  will  remain  until  we  wish  to 
            reactivate it.  We are now free to continue to solve for  the 
            copy which is still in the computer.  It is important to note 
            however,  that there can be only ONE CURRENT STATUS  file  on 
            the  diskette at a time.  Thus the contents of  any  existing 
            status  file will be overwritten with each new 'SAVE  PUZZLE' 
            activation.  Should you decide to abort the save  attempt  by 
            pressing <ESCape>, XYSee will reactivate your present puzzle. 

            Press <N>o to abort the 'SAVE PUZZLE' activation.
            Press <ESCape> to exit the 'PUZZLE MENU'.

        Final words...

                 This  just  about completes the "Grand  Tour".   There's 
            still lots to see and do within XYSee, but for now, you  have 
            a good idea of how to:

                 Move around within the menus and  modules.
                 Work the various displays.
                 Prepare and solve puzzles.
                 Exit back out.



        Page 18               XYSee ADVANCED PROCEDURES
                              =========================

                 XYSee implements advanced Parametric, Composite,  Cubic- 
            Spline, and Printer Support modules.  

        PARAMETRIC/COMPOSITE Procedures:

                 The  'PARAMETRIC'  and 'COMPOSITE' functional areas  are 
            advanced modules designed to display the effects of parameter 
            changes on "systems" of related equations.  Each group solves 
            two individual equations simultaneously.  In the 'PARAMETRIC' 
            modules, the equations are related through a common parameter 
            such  as  "T".   Changes  to this common  parameter  will  be 
            reflected  in the individual plots of the separate  equations 
            as  well  as the final plot whose form is derived  through  a 
            combination  of  the  partial  plots.    In  the  'COMPOSITE' 
            modules,  the  individual  equations  are  related  by  their 
            solutions for "Y" at identical values of "X".   For  example, 
            if  your  solution at a particular "X" results in a value  of 
            "5" for "Y" when using equation #1,  and "-5" using  equation 
            #2, the resulting combination plot could have a value of "0".  
            The  plot  for  equation #1 would place a point  at  location 
            (X,5),  and equation #2 at (X,-5).   The combined plot  would 
            have  its point placed at (X,0).   A second major  difference 
            between  Composites and Parametrics is that  the  Parametrics 
            are  solved using perpendicular axis, i.e. "Y=f(T)"  for  one 
            equation  and  "X=g(T)" for the other.   Composite  equations 
            however,  are  usually  solved  along  a  common   axis.
                 Each  of the Parametric and Composite modules has  three 
            plots  to develop.   The first two,  equation #1 and equation 
            #2,  are called "Partials" since they each reflect a  partial 
            solution of the third "combined" plot.
                 Composite  equations are not restricted to any arbitrary 
            type.  The equation for a line might be combined with one for 
            a  curve,  or  two curves  might  be  combined,  etc.   XYSee 
            provides examples of each of these standard types.

        Using the 'PARAMETRIC' and 'COMPOSITE' Procedures:

                 As  you complete the normal entry of  parameters,  XYSee 
            will  first complete plots of each partial for you.   As  the 
            plotting  is  taking place,  the relevant  equation  will  be 
            displayed upon the screen.   XYSee will automatically go into 
            an  idle  mode  after plotting the partials to allow  you  to 
            study  each  of them prior to progressing  to  the  composite 
            plot.   You   indicate  your desire to continue  by  pressing 
            <SPACE>.
                 Plots  created  with  the 'PARAMETRIC'  and  'COMPOSITE' 
            modules can be very exciting as well as instructional.

                 Interesting examples of both Parametrics and  Composites 
            are provided in the Appendices.



        Page 19

        Cubic SPLINE Procedures:

                 The  Cubic Spline procedure used by XYSee is an advanced 
            curve-fitting  technique characterized by excellent speed  of 
            execution.  In essence, the Spline procedure accepts manually 
            derived  "X" and corresponding "Y" data points,  and  through 
            interpolation,  generates  a smooth curve conforming  to  the 
            trends within your data.   The benefit of the Spline solution 
            over other curve-fitting techniques is that the derived curve 
            passes  directly  through your data instead of  producing  an 
            "averaged"  solution.   Spline procedures are not true  free-
            form  solutions,  as  they place some restrictions upon  your 
            data.   The  XYSee  'SPLINE' module has  been  enhanced  with 
            unique  procedures designed specifically to overcome some  of 
            the    more   limiting   aspects   of   conventional   Spline 
            implementations.  
                 For   example,   most    Spline   implementations   have 
            difficulty manipulating end points.   This means that if  you 
            feed the procedure six points, it actually will use only four 
            of  them  to  generate  the  curve.   XYSee  overcomes   this 
            limitation through advanced algorithms designed to retain the 
            value  of all your data points.   Additionally,  conventional 
            Spline systems fail when presented with "X" values in a  non-
            ascending   sequence.   The  normal  procedure  is  for   the 
            erroneous point to be rejected, again, reducing the number of 
            points used to develop the curve.  XYSee has been "taught"  a 
            method  of  intelligent  substitution  which  in  many  cases 
            results in complete transparency while attempting to maintain 
            the integrity of your curve.

        Using the SPLINE procedures:

                 Using   the  'SPLINE'  system  is  easy.    The   actual 
            procedures  are the same as for any other XYSee module.   The 
            main  difference is that you are entering POSITIONAL  VALUES, 
            not  formula  parameters.   In order  to  develop  meaningful 
            curves, several data points must be used.  The XYSee 'SPLINE' 
            system   requires   you  to  enter  six  sets  of   "X"   and 
            corresponding  "Y"  values.    The  values  are  obtained  by 
            manually  solving any equation that can be expressed in "Y=X" 
            format.   Once you have decided upon an equation,  select six 
            values  of "X" in some ascending order.   Solve the  equation 
            using  these  "X"  values to  obtain  the  corresponding  "Y" 
            values.   After  you have defined the six sets of  positional 
            values,  merely  enter  them into XYSee in the usual  manner.       
            Example  sets of data,  along with the equations  from  which 
            they  were derived,  are listed  in the Appendices to  assist 
            you in becoming familiar with the 'SPLINE' module. 



        Page 20

        XYSee Printer Support:

                 XYSee  has  built-in support for both GRAPHIC  and  NON-     
            GRAPHIC printers.  

        Using the PRINTER:

             All you have to do to print out a plot or puzzle is:

                 1. Insure that the desired plot/puzzle is on the screen.
                 2. Enter the 'PLOT OPTIONS MENU' and press <ARROW> to 
                    highlight the 'PRINT PLOT/PUZZLE' menu option.
                 3. Press <ENTER> to select the 'PRINT PLOT/PUZZLE' module.
                 4. Select  an EPSON compatible printing mode.   Your         
                    printer's  manual will help in selecting the best mode 
                    for your particular system.. 
                 5. Follow the directions and insure your printer is  ON 
                    LINE and ready with paper etc., then press <SPACE>.
                
             That's all there is to it!

             XYSee uses the printer for the following additional tasks:

                  Print the XYSee Registration form.
                  Print the Puzzle Solution Status Report.
                  Print MACRO, IMPORT, and PUZZLE File Editor Listings.     



        Page 21               

                  XYSee  also  implements the MACRO and  Free  Form  Data 
            Import  advanced modules.  The procedures which  follow  will 
            help you understand their use.

        MACRO Procedures:

                 First,  let's talk about MACROS in general.  MACROS  are 
            lists or scripts of commands that emulate key presses.   What 
            that  means is that on your disk, you can have special  files 
            that  just  contain  key  presses that  XYSee  can  read  and 
            execute..just  as  if you were pressing  the  keys  yourself.  
            This  is a very powerful capability since it saves  you  from 
            having  to repeat sequences over and over as you  study  some 
            particular  subject.  If you are an educator, you can set  up 
            complete   testing   systems  or  routines  to   cover   some 
            particularly  challenging  subject.  MACROS may  be  prepared 
            with the XYSee language sensitive editor, or with any general 
            purpose text editor such as SideKick, or WordStar (open  with 
            a "N" instead of a "D"). Instructions on how to create simple 
            text  files can be found in the manuals for  these  programs.  
            The  format required by the MACRO system is  straightforward; 
            just  see the section on Preparing MACRO Files.  For now,  we 
            just  need  to  know how to run MACROS.   You  have  probably 
            noticed the prompts for MACROS on all the MENU screens.   You 
            may  start MACROS from any of these prompts.  XYSee  will  go 
            through  your MACRO files and sort out the correct  ones  for 
            the particular level in which you are working.  The procedure 
            for running a MACRO is as easy as running any other module in 
            XYSee  with the exception that you have to indicate which  of 
            the  available  MACROS you want to run.  Don't  worry!  XYSee 
            will  assist you and, once you have experienced the power  of 
            MACROS,  you'll  want  to use them  often.   Now,  let's  get 
            started.
          
        Executing a MACRO Routine:

            Press <ARROW> to highlight the 'MAIN MENU'.
            Press <DOWN> and <ENTER> to obtain a directory of 'MAIN MENU' 
            level MACROS.

                 At  the  prompt,  enter  SINE_2X.MAM.   Remember,  XYSee 
            constantly  monitors  the keyboard trying to help us  do  our 
            work,  so  be prepared for it to take over when  it's  ready.  
            most of the MACROS that were provided with your program  disk 
            will  end their sequences right back where they started,  but 
            that  is not a requirement. As a matter of fact,  MACROS  are 
            designed to allow you to be as creative as possible, so  feel 
            free.  You  can't break anything.  The worst thing  that  can 
            happen is that your MACRO will take XYSee off into the  woods 
            somewhere.   If that happens, just go back over  the  correct 
            key  presses  to  do  what you  want,  and  edit  your  MACRO 
            accordingly.



        Page 22

        Preparing MACRO Files:

                 The   format   required   by   the   MACRO   system   is 
            straightforward.   There  are  normally only  two  pieces  of 
            information  needed  to  make up each command  line:  a  STEP 
            DELAY,  and  a  COMMAND.   Additionally,  an  optional   non-
            displayed  comment  may  be added to  each  command  line  to 
            explain the usage of the command.  
                 The STEP DELAY value can range from 0-9 seconds, and  is 
            used  to delay the execution of the adjoining  command.   For 
            example,  a STEP DELAY value of "6" will delay the  execution 
            of  the adjoining command twice as long as if the STEP  DELAY 
            were  set to "3".  Creative use of this facility can  produce 
            some  very interesting effects.  Under normal  circumstances, 
            using  the  STEP  DELAY value settings  listed  below  should 
            provide satisfactory results.

        STEP DELAY VALUE Recommendations:

            "0"-"1" For moving between menu selections.   
            "0"     For <ENTERing> selected modules.     
            "3"-"4" For viewing plots.
            "7"-"9" For viewing HELP and Information screens.
                  
                 A  special  MACRO command "NULL" has  been  provided  to 
            allow longer automatic delays. This command does not execute, 
            but  just provides an additional STEP DELAY value.   You  may 
            use  as many NULL commands as you need to obtain your desired 
            result.  More on specific commands later...
                 STEP DELAY values affect the execution of the  adjoining 
            command.   The  action  occurs in the same sequence as it  is 
            listed.  That  is,  the delay comes first,  followed  by  the 
            execution  of  the  command.   Therefore,  if you  wanted  to 
            display  a message on the screen,  you might use  a  sequence 
            like the following:

                 0 MESSAGE (Display the following on the screen)
                 Count the points within the first quadrant.
                 9 ESCAPE (Delay, then leave the module)



        Page 23
            
                 The  second required item for each command line  is,  of 
            course, the command itself.
                 COMMANDS  follow  the STEP DELAY values on  the  command 
            line.   They are primarily designed to emulate  key  presses.  
            For example, a command of "UP" would provide the same  result 
            as  if you had pressed the <UP> arrow key. A full listing  of 
            the available commands are provided in the Appendices.  
                 Command  sequences  are developed  by  documenting  your 
            key  presses  as  you  go  through  the  steps  to   manually 
            accomplish  a desired goal. Once the steps have been  listed, 
            you merely use the XYSee editor to prepare a file  containing 
            the commands.  Don't be overly concerned with this procedure. 
            I'm sure you will find it significantly easier than writing a 
            letter  with  a  common word  processor.  Should  your  MACRO 
            sequence somehow go astray, XYSee will let you know, and turn 
            off  the remainder of the MACRO so as to limit any damage  to 
            your plot.  If XYSee is a little slow in understanding what's 
            going  on,  you  may press <ESCape> to  terminate  the  MACRO 
            sequence.  If you're not quite sure whether to terminate  the 
            MACRO  yet  or not, and would like to just  think  about  it, 
            press <SPACE> and the MACRO sequence will idle until the next 
            <SPACE>.  If an error is found, merely re-edit your TEXT file 
            and try again..
                 COMMENTS  are highly recommended!  An  optional  comment 
            can be added to each command line.  As your work becomes more 
            sophisticated (lengthy), remembering exactly where you are in 
            a sequence at any particular moment may become more and  more 
            challenging.   The  liberal use of comments can  do  much  to 
            alleviate this problem. Comments, if used, may extend only to 
            the end of the current command line.  If more room is needed, 
            just use a NULL line to extend the comment area.  
                     Comments actually come in two flavors, Displayed and 
            Non-displayed.   Displayed  comments are called  MESSAGES  by 
            XYSee. 
                 A  MESSAGE may be displayed on the screen at  any  time. 
            Messages can draw attention to significant events,  important 
            operations, or give directions, and ask questions.  There are 
            several  enhancements available to help you get the most  out 
            of   your  MESSAGES.  Manual  "<SPACE>"   and   automatically 
            generated  "WAIT" delays, as well as attention getting  sound 
            effects "BEEP", are good examples. 
                 The  MESSAGE  command is actually a two  line  sequence.  
            The  first line is the normal STEP DELAY/COMMAND set that  we 
            are now familiar with. It lets XYSee know that the  displayed 
            message  is coming.  The second line is the actual text  that 
            you want to have displayed. 



        Page 24

        MACRO Filenames:

                 As  we  have shown, the XYSee menu structure  is  multi-
            leveled.  To  accommodate this system in the  most  versatile 
            manner, XYSee uses a multi-leveled MACRO structure also.  You 
            may  write MACROS to execute within just one menu  level,  or 
            they can be written to span all menu levels.  The 'MAIN MENU' 
            screen  MACRO selection is primarily used to execute  scripts 
            that   span   several  lower  level  menu   functions.    The 
            'GEOMETRIC',  'QUADRATIC',  'TRIGONOMETRIC',  And   'ADVANCED 
            MENU' screen MACRO selections are most efficiently used  with 
            scripts that exercise functions within one menu level.   This 
            is not an absolute requirement; however, as you may exit from 
            a  lower  level  to the main menu  level  and  then  re-enter 
            another   lower  level  if  you  wish.   The  only   absolute 
            requirement is that MACROS must START from within the  proper 
            level.
                 XYSee is designed to assist you in keeping large numbers 
            of  MACROS  separated efficiently.  It does  this  through  a 
            unique  file  extension  technique.   All  MACROS  that   are 
            designed  to execute from the 'MAIN MENU' level are  assigned 
            extensions of ".MAM".  The first "MA" stands for MACRO,  with 
            the last "M" assigning it to the 'MAIN MENU' group.  The four 
            lower level file extensions are:

                 ".MAG" for the 'GEOMETRIC MENU' group.         
                 ".MAQ" for the 'QUADRATIC MENU' group.
                 ".MAT" for the 'TRIGONOMETRIC MENU' group.
                 ".MAA" for the 'ADVANCED MENU' group.

        ** WARNING! **

                 MACRO  files  that are mis-labeled will  malfunction  if 
            invoked from an incorrect menu level...

                 All  XYSee MACRO commands are listed in the  Appendices. 
            You may obtain additional examples of their usage by printing 
            out the MACRO Practice files that have been provided on  your 
            XYSee program diskette.



        Page 25

        'IMPORT' Procedures:

                 The  'IMPORT'  facility is potentially one of  the  most 
            interesting modules in XYSee.  It is designed to accept up to 
            100  "X"  and  corresponding "Y" values  from  a  disk  file, 
            automatically  determine an appropriate scale for  the  data, 
            and  create a display in either of two available fonts.  Just  
            as  in  the  other function  modules,  basic  statistics  are 
            calculated   for   your  data.   There  is   essentially   no 
            restriction placed upon your data.  Remember though that  the 
            value  of  any  plot is enhanced  by  selecting  points  that 
            amplify  important trends without swamping them within  large 
            numbers  of  irrelevant "noise".  If this is the  case,  some 
            manual sorting may help to improve your displays.  XYSee  can 
            help   in   the   sorting  task  by   providing   a   graphic 
            representation  of  your un-filtered (unsorted)  data.   From 
            this  display, you can then select points that you  feel  are 
            worth  including  in a second refined  or  filtered  'IMPORT' 
            file.  Having two files like this will allow you  to  display 
            the  effects and benefits, as well as the  traps,  associated 
            with filtering and smoothing techniques.

        Executing an 'IMPORT' Routine:

            Press <ARROW> to highlight the 'MAIN MENU'.
            Press  <LEFT> and <ENTER> to obtain a directory  of  'IMPORT' 
            files. 
              
                 XYSee will automatically go out to the disk and  collect 
            all  the IMPORT routines for us, just as it did in the  MACRO 
            example.  Let's choose one, and run it. At the prompt,  enter 
            "NORMAL.IMP".   XYSee  will still be  monitoring  things,  so 
            again, be prepared for it to take over when it's ready.
                 As  the 'IMPORT' file is being read, XYSee will keep  us 
            informed of it's progress with the 'COMMENT' line display  of 
            your values.  If everything goes well, XYSee will report  the 
            fact and then get busy and develop an appropriate plot. There 
            are  several  special routines that XYSee can use to  try  to 
            correct  any errors it finds in your data, but  remember  the 
            old  rule,  "Garbage In, Garbage Out", so take  care  as  you 
            prepare your 'IMPORT' files to help XYSee.  The plot you  see 
            has been prepared just for the current set of data. The scale 
            is  special also and won't necessarily conform to  any  other 
            'IMPORT'  plot scale, or for that matter, any other  module's 
            scale.  It's  best to not make any assumptions  about  scales 
            particularly when using the 'OVERLAY' facility.
                 The 'IMPORT' module can be under MACRO control just like 
            any other module, with one exception.  The choice of 'IMPORT' 
            file to be used must still be done manually. 



        Page 26

                 While  you are in the 'IMPORT' module, you may  use  the 
            "PLOT OPTIONS" just as you did in the other modules.
                   There  is  one  more capability that  you  might  have 
            noticed in the key press listings. The 'ALTERNATE PLOT'  font 
            is activated by pressing the <ALTernate> and <P> keys at  the 
            same  time.   This  facility  is  very  helpful  to  separate 
            overlaid  data sets.  If you have a lot of  points,  plotting 
            one  set  in each font will help you to identify  any  inter-
            relationships. The alternate plot font capability can also be 
            used just to get the best display for a particular data  set.  
            If  you have a few points, the individual points may  be  too 
            small  to provide the information you want, so  switching  to 
            the  encircled points will help.  Conversely, if you  have  a 
            large number of points, the encircled points will tend to run 
            things  together,  so selecting the discrete  points  is  the 
            thing to do.  You might want to experiment with the different 
            techniques to determine which is best for your data.  

        Preparing 'IMPORT' Files:

                 The  format  of an 'IMPORT' file  is  extremely  simple.  
            There  is only one required item for each line in  the  file.  
            One "X" or corresponding "Y" numeric value should be  entered 
            on each line followed by a space.  An optional comment can be 
            included  as long as it does not extend past the end  of  the 
            current  line.  Each "X" and following "Y" make up a  numeric 
            value pair or set, and define the position of a point  on the 
            display.  For example, entries of 3.0 and -6.5 would place  a 
            point at location (3.0,-6.5), and a second point just to  its 
            right could be defined by the values 3.1 and -6.5. 
                 XYSee  is designed to be as versatile as  possible  with 
            regard to the form of the numeric values.  Acceptable formats 
            are as follows:
                                                
                                0.1          -0.1                        
                                1            -1
                                1.2          -1.2
                               12            -12 
                               12.3          -12.3

            ** WARNING! **

                 Each point you wish to include in an IMPORT file must be 
            defined  by BOTH an "X" and a corresponding "Y"  value.   The 
            values must be on separate lines "X" before "Y", with a SPACE 
            following each.   XYSee will analyze your numeric value pairs 
            as  they  are read into the computer system and  will  reject 
            sets that do not meet these criteria.



        Page 27

        Example 'IMPORT' File Listing:

            Filename = TWO_DOT.IMP
            Syntax = <Numeric Value><Space><Optional Comment>
         
                  3.5 Value for X(1).
                 -7   Value for Y(1).
                  3.9 Value for X(2).
                  0.0 Value for Y(2).

                 You  may obtain additional examples by printing out  the 
            'IMPORT' files that have been provided on your XYSee  program 
            diskette.


        IMPORT Filenames:

                 XYSee is designed to assist you in keeping large numbers 
            of 'IMPORT' files separated just as it does MACROS.  The same 
            file  extension  system is used, but only  one  extension  is 
            necessary.  Files with extensions of ".IMP" will be collected 
            and  displayed  for  your selection  during  execution  of  a 
            'IMPORT' routine. 

        PUZZLE Procedures:

                 XYSee's  Puzzle module challenges the user  to  complete 
            the solution of puzzles composed of mathematic functions.

        Preparing Puzzle Files:

                 Only  three  types  of  information  are  "required"  to 
            complete a puzzle file; a TOLERANCE value, Function NAME, and 
            NUMERIC VALUES for any associated variables.  In addition, an 
            optional  non-displayed COMMENT may be added to each line  in 
            the file to explain it's usage.

                 In  establishing "standard" limits for variables,  XYSee 
            can  augment  the normal "exact value" solution  criteria  by 
            adding  the pre-defined tolerance value.  A single  tolerance 
            is active for each solution set, and is saved with the puzzle 
            on  diskette.   As you become more familiar with  a  solution 
            set,  you  may choose to tighten-up the tolerance  value,  or 
            even eliminate it altogether by setting it to 0.0.       

        TOLERANCE VALUE Recommendations:

               "0.0"-"0.3"  Advanced level users or simple functions.
               "0.4"-"0.6"  Intermediate level users and functions.
               "0.7"-"0.9"  Novice level users or advanced functions.



        Page 28
           
                 The  syntax requirement for the tolerance value and  all 
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
            documenting  your key presses as you go through the steps  to 
            manually solve your desired puzzle. Once the steps have  been 
            listed,  you  merely  prepare a puzzle file  with  the  XYSee 
            editor.  

                 The required syntax for puzzle functions is even simpler 
            then  that required for numerics.  Each VALID  function  name 
            must occupy it's own line, and like the numeric, be  followed 
            by at least one space!

        FUNCTION Examples:

               LINE comment recommended.
               Parabola
               circle
               SiNe  (Upper/Lower case okay.)

                 COMMENTS  are  highly recommended!  As with  MACROs  and 
            'IMPORT' data files, an optional comment can be added to each 
            line  in your file. Please remember however,  that  comments, 
            may extend only to the end of the current line.



        Page 29

        PUZZLE Filenames:

                 XYSee assists in managing large numbers of Puzzle  files 
            through  the  usual  unique file  extension  technique.   All 
            Puzzle  files are assigned extensions of ".PZL".  If you  are 
            preparing  your  Puzzle  files with a  general  purpose  text 
            editor,  you will have to explicitly assign  this  extension.  
            If  however, you are using the XYSee editor, it  will  assign 
            the extension for you automatically.

            ** WARNING! **

                 Puzzle files that are mis-labeled will not be able to be 
            selected for use by XYSee. 

                 You may obtain further examples of function and  numeric 
            variable   usage  by printing out the practice  Puzzle  files 
            that have been provided on your XYSee program diskette.

                 In  addition, the required syntax is diagrammed  in  the 
            Appendices.



        Page 30


                           Editor BASIC MENU STRUCTURE
                           ===========================

                   
                               = START Editor =
                                      |
                                      |
                                      |------------ Edit Procedures HELP
                                      |
         +-----------------> Define Edit File Type
         |                   (MACRO/Import/Puzzle)
         |                      |     |   
         |             +--------+     |
         |             |              |
         |     Define MACRO Level     |
         |        (M/G/Q/T/A)         |
         |             |              |
         |             +------------> |
         |                            |
         |                     Display Directory
         |                            |
         |                            |
         |                     Obtain Edit File
         |                            |
         |                            |--------------- Edit Command HELP
         |                            |                     |
         |                            |            +--------|
         |                            |            |        |         
         |     +-------------> Main Edit Screen    |   Syntax HELP
         |     |                      |            |        |
         |     |                      |            +--------| 
         |     |                      |            |        |
         |     |                      | <----------+-- Application HELP
         |     |                      |
         |     +---- (error) --- Check Syntax
         |     |                      |
         |     |                      |
         |     |                 Save Changes
         |     |                      |
         |     |                      |
         |     +--(yes)-- Continue Editing This File
         |                            |
         |                            |
         +--------(yes)-------- Edit a New File
                                      |
                                      |
                                = END Editor =



        Page 31

                           XYSee Language Sensitive EDITOR
                           ===============================


        Edit File specification:

                 The  XYSee  Editor is designed to  Create,  Change,  and 
            Validate  MACRO, Import, and Puzzle files.  These  files  may 
            not  all be found on the same disk.  To enable the editor  to 
            do  it's job, we must insure that the appropriate  files  are 
            accessible  to the program.  This is easily  accomplished  by 
            identifying the disk drive containing your data in the  SETUP 
            module at the beginning of XYSee.

        Beginning the XYSee Editor tour:

                 Access  to the editor is accomplished by  selecting  the 
            'FILE EDITOR' module from the 'MAIN MENU'.  

            Press <ARROW> and <ENTER> to select the 'FILE EDITOR' module.
         
        Main Edit Screen:

                 The  first screen you will encounter upon  entering  the 
            editor  is  the "Main Edit Screen".  This is where  you  will 
            begin to define the type, and if necessary, the level of file 
            you wish to edit. 

        XYSee Editor HELP:
          
            Press <F1> to select the Editor HELP screen.

                 The  Editor HELP screen serves as a quick reference  for 
            important points concerning program function, operation,  and 
            structure.   As you can see, the editing process is  actually 
            quite  simple.  We merely have to define our file type,  load 
            or create the disk file, complete our editing, save the file, 
            and exit the editor.  

            Press <Space> to exit the Editor HELP screen.

            NOTE: The next few paragraphs call out keys defining the type 
                  of  file  you wish to edit. DO NOT actually  press  the 
                  indicated keys until you have been instructed to do so!



        Page 32

        Main Edit Screen (continued):

                 We  are now ready to begin to define the  parameters  of 
            our file to the editor.  The first parameter is the Edit File 
            Type.   The  file type is necessary so that  the  editor  may 
            assist  you  in  keeping large  numbers  of  MACRO  (multiple 
            levels), Import, and Puzzle files separated efficiently.  

            Only one action is necessary to select an Import or Puzzle 
            file type, you merely press <I>mport or <P>uzzle.

            Selecting a MACRO file type however, is a two step process.

              (1) Press <M>ACRO to proceed to the MACRO Level  Definition         
                  step.
              (2) Select an appropriate menu level from the following:

                  (a) Press <M>ain Menu Level
                  (b) Press <G>eometric Menu Level
                  (c) Press <Q>uadratic Menu Level
                  (d) Press <T>rigonometric Menu Level
                  (e) Press <A>dvanced Menu Level

            ** WARNING! **

                  MACRO  files that are mis-labeled will  malfunction  if 
            invoked from an incorrect menu level within XYSee.

                 Following  your  key press, the editor  will  prepare  a 
            directory  display  of all matching files  currently  on  the 
            disk.   If  you wish to alter a file that is  listed,  merely 
            enter  the filename at the prompt.  If however, you  want  to 
            create  a new file, enter the new filename at the prompt  and 
            answer <Y>es to the 'Create File?.(Y/N).' request.

                 A  couple  important comments before we  continue.   The 
            XYSee editor is language sensitive, which among other  things 
            means it will only allow filenames conforming to the  special 
            XYSee  file extension format to be saved on the  disk.   This 
            language  sensitivity  allows  the editor to  assist  you  in 
            establishing and maintaining the validity of your files. 

                 All files used by XYSee can be prepared using a  generic 
            text editor (SideKick) or word processor (WordStar) operating 
            in  the ASCII text mode.  Use of an editor other  than  XYSee 
            however,  would require manual filename extension  assignment 
            and syntax checking.

        Ready to go on?



        Page 33

            PLEASE BEGIN PRESSING KEYS AS INDICATED IN THE FOLLOWING TEXT!

                 For the purposes of this demonstration, we will select a 
            MACRO  file  to update.  A special 'MAIN  MENU'  level  MACRO 
            possessing  the filename "PRACTICE.MAM" has been included  on 
            your  program  disk.   Now that you  are  familiar  with  the 
            initial steps in defining a file to the editor, go ahead  and 
            load the program and we will continue...

        Editor Command HELP:

                 While   actively   editing  a  file,  you   may   access 
            progressive,  multi-leveled  HELP  screens  covering   editor 
            commands,  syntax  formats, and  application  commands.   The 
            prompt  at the bottom of the screen indicates that this  HELP 
            is  available at the touch of the F1 Function key.   You  may 
            press <SPACE> to return to the main edit screen at any  time.  
            Please refer to the "HELP Screens" section of this manual for 
            additional information.

                 At   this  point,  the  highlighted  cursor  should   be 
            positioned  at the first character in the first row of  text.  
            As  we proceed, we will exercise each Cursor  Control,  Line, 
            and  Utility  command implemented by the editor.   First  the 
            Cursor Control commands.

        'CURSOR' Control Keys:

                 The   TAB,   F2,  End,  and  Home   keys   allow   rapid 
            repositioning of the cursor in relatively large increments as 
            follows.

        Right 10 spaces..TAB:

            Press <TAB> three times.

                 The  TAB  key repositions the cursor 10  spaces  to  the 
                 right  on the current line.  Successive TABing will  not 
                 wrap around on the same or subsequent lines.

        Left/Right on line..F2:
                 
            Press the <F2> key three times.

                 The F2 key repositions the cursor to the left and  right 
                 edges of the current line.  



        Page 34

            Press <TAB> once to position the cursor to column 10.
                
        Bottom of screen..End:

            Press <End> once.

                 The End key repositions the cursor to the bottom of  the 
                 currently displayed screen.  The column position of  the 
                 cursor remains unchanged.

        Top of screen..Home:

            Press <Home> once.

                 The  Home key repositions the cursor to the top  of  the 
                 currently displayed screen.  The column position of  the 
                 cursor remains unchanged.

                 The Down, Right, Up, and Left arrow keys reposition  the 
            cursor in smaller increments as follows.

        Cursor down..Down-arrow:

            Press <Down-arrow> two times.

        Cursor right..Right-arrow:

            Press <Right-arrow> two times.

        Cursor up..Up-arrow:

            Press <Up-arrow> two times.

        Cursor left..Left-arrow:

            Press <Left-arrow> two times.

                 The  Del,  Ins,  and  Backspace/Delete  keys  allow  the 
            removal, or addition of individual characters as follows.
         
        Delete character..Del:

            Press <ARROW> to place the cursor well into a line of text.
            Press the <Del> key three times.  

                 Notice  that the characters under the cursor  have  been 
                 removed as well as the space they occupied in the text.



        Page 35

        Insert character..Ins:

            Press the <Ins> key three times.  

                 We have recovered the space needed by the characters  we      
                 just  deleted.  Replace the characters by  pressing  the      
                 appropriate keys.

        Backspace/Delete..Backspace:

            Press the <Backspace/Delete> key three times.  

                 Once  again we have deleted the  associated  characters.       
                 Go ahead and replace the deleted characters as before.

                 The PgDn, F4, PgUp, and F3 keys reposition the cursor as 
            follows: 

        Next screen..PgDn:

            Press the <PgDn> key once.  

                 The  entire  page  of text will  be  replaced  with  the      
                 exception   of  enough  lines  to  help   you   maintain      
                 orientation within your work.

        Bottom of file..F4:

            Press the <F4> key once.  

                 The  cursor  will be repositioned to the bottom  of  the      
                 current file.

        Append line..RET:

            Press the <RET>urn key once.  

                 As you complete each new line of text, you use this  key      
                 to provide room for the next one.  All the files used by      
                 XYSee  are line oriented, therefore the editor knows  to      
                 remain on the current new line until you press RETurn. 

        Previous screen..PgUp:

            Press <PgUp> key once.  

                 The entire page of text will again be replaced with  the      
                 exception   of  enough  lines  to  help   you   maintain      
                 orientation within your work.



        Page 36

        Top of file..F3:

            Press the <F3> key once.  

                 The  cursor  will  be repositioned to  the  top  of  the      
                 current file.

                 The following commands affect whole lines of text at one 
            time.   First,  lets  reposition the cursor so  that  we  may 
            observe their effect.

            Press <Down-arrow> four times.

        Insert line..F7:

            Press the <F7> key.
                 
                 A blank line will be inserted just ahead of the  current           
                 line of text.  Go ahead and type <Inserted Line> on  the           
                 new line to identify it as we proceed.

        Delete line..F8:

                 Be sure the cursor is on the new line.

            Press the <F8> key to delete the line.  

        Restore line..F10:

                 Were we to have deleted the line accidentally, we  could 
                 restore it by pressing the F10 key.  

            Press the <F10> key.  

                 This  key is also handy for moving an entire  line  from      
                 one position in the text to another.  One thing to  note      
                 however  is  that only one restore is allowed  for  each      
                 delete. 

        Copy line from..F5: {Cut}

            Press the <F5> key.

                 This key will "Cut" a copy of our restored line.  You'll      
                 notice that the original line was not deleted as it  was      
                 in  the  previous  step.  Let's  reposition  the  cursor      
                 before we proceed.
                 
            Press the <Down-arrow> key three times.



        Page 37
         
        Copy line to..F6: {Paste}

            Press the <F6> key.

                 This key will "Paste" a copy of the saved line into  the      
                 text  just ahead of our current position.  Once  a  line      
                 has  been  "Cut",  you may  reposition  the  cursor  and      
                 "Paste" as many copies as you desire.  This  duplication      
                 feature  is  particularly useful  when  preparing  MACRO      
                 files containing numerous cursor key emulation commands. 

        Print edit file..F9:

                 The  Print File feature produces a permanent  record  of 
                 your  work safe from accidental erasure.   In  addition, 
                 You  may use your printout to follow your routine as  it 
                 executes within XYSee. 

                 NOTE: If  you  would like a copy of  the  "Practice.MAM" 
                       file,  press     the <F9> key and <Y>es when  your 
                       printer  is  ready.  If  not,      press  <N>o  or 
                       <ESCape> to abort the procedure. 

        HELP..F1:

            Press the <F1> key. 

                 The editor provides three screens of helpful information      
                 covering  the  functions we are currently  reviewing  as      
                 well  as syntax formats and commands of  the  individual      
                 applications.  You may either move from screen to screen      
                 with  the F1 key, or return to the main edit  screen  by      
                 pressing <SPACE>.

            Press the <SPACE> key.

        Exit/Syntax check..ESCape:
             
            Press the <ESC>ape key.

                 The  editor will exit to the syntax check  step.   Since      
            the   file  contains  "Inserted  Lines"  from  our   previous      
            work,  and  since  they don't meet the  requirements  of  the      
            editor, our syntax check fails...

            Press  <SPACE>  at the  message  "Press  Key...<ESCape>=Exit, 
            <SPACE>=Show Error".



        Page 38

                 The  editor  is designed to assist  you  in  determining 
            which line is nonstandard following a syntax check failure by 
            automatically  placing  the  cursor at  the  offending  line.      
            This  combination  of syntax checking  and  automatic  cursor 
            placement  provide  powerful assistance in  maintaining  your 
            files. When you're ready to continue, position the cursor  at 
            each  "Inserted line" in turn, and use the F8 key  to  delete 
            them.   After  deleting  the  nonstandard  lines,  press  the 
            <ESC>ape  key  and try the syntax check again.  Continue  the 
            above procedure with any additional nonstandard lines until a 
            successful check is obtained. 
                                  
        Saving Changes:

                 A  successful syntax check is indicated by  the  request 
            "Save  changes?..(Y/N)".   At this point,  you  may  prohibit 
            changes  to  your original file.  If you choose not  to  save 
            your  changes,  your  original file  will  remain  unchanged.  
            Since we may want to use our original practice file again...

            Press <N>o.

                 Immediately  following  a  file save,  the  editor  will 
            prepare  a  backup copy and write it to the  disk.   You  may 
            notice this additional disk access just prior to the keyboard 
            being  activated  for  input.  A backup copy  allows  you  to 
            recover  your  previous  work should there  be  an  equipment 
            failure during editing. 

        Continue Editing:

                 As you continue with a lengthy project, it would be wise 
            to  complete  occasional partial saves as  insurance  against 
            equipment  problems.  Alternatively, you may want  to  insure 
            that  each particular section of your work  is  syntactically 
            correct  before  continuing on.  Regardless  of  the  reason,  
            this  step  will  allow you to go back into  the  editor  and 
            continue with a currently loaded edit file. 

            Press <N>o.

        Edit a New File:

                 Should you feel particularly productive during a session 
            and  wish to edit more than one file, you may elect to do  so 
            at  this point.  If however, you landed here by ESCaping  out 
            of  the  "Obtain Edit File" step, this is your chance  to  go 
            back  and try again.  the <ESCape> could have been  necessary 
            due  to accidentally selecting a Puzzle file when you  really 
            wanted a MACRO, etc.



        Page 39

            NOTE:  This  is  your last opportunity to remain  within  the 
                   editor  as a <N>o response at this point would  return 
                   you to the 'MAIN MENU'.

        Preparing a Practice Edit MACRO:

                 Let's  take  just a moment and prepare  a  quick  little 
            MACRO to reinforce what we have learned.

            Press <Y>es to Edit a New File.
            Press <M> to prepare a MACRO file.
            Press <M> for a 'MAIN MENU' MACRO.

                 At  the  Directory  Prompt, enter  a  filename  of  your 
            choice.  Just be sure it does not already exist.

        Press <Y>es to Create the File.

                     Enter  the following data just as illustrated.   End 
            each line except the last with a <ENTER> key press as shown.

        1 Right  <ENTER>
        1 Enter  <ENTER>
        1 Right  <ENTER>
        1 Enter  <ENTER>
        1 #-5.0  <ENTER>
        1 #-3.0  <ENTER>
        1 Up     <ENTER>
        1 Down   <ENTER>
        1 Down   <ENTER>
        0 Enter  <ENTER>
        3 Escape <ENTER>
        1 Escape <ENTER>
        1 Escape <ENTER>
        1 Escape <ENTER>
        1 Escape <ENTER>
        1 Stop   

            Press <ESCape> to obtain a syntax check of your work.  

                     There  should not be a problem.  If there  is,  just 
            press  <SPACE>  to  have XYSee locate it  for  you.  You  can 
            correct the problem with the editing keys you just learned. 

            Press <Y>es to save our file.
            Press <N>o since we are through editing the file.

                     The  MACRO we have prepared is short and thus  quite 
            easy  to follow.  Be sure to include comments in your  longer 
            "real" scripts to help in locating errors etc.



        Page 40

                     You  may  obtain complete information  on  preparing 
            additional  MACRO, Import, and Puzzle files in  the  Advanced 
            Procedures section of this manual.

            Press <N>o to exit the editor and return to the 'MAIN MENU'.

        Executing the Practice Edit MACRO:

            Press <DOWN> and <ENTER> to select the 'MACRO SCRIPT' module.

                     Just for fun, let's run our practice MACRO.  At  the 
            directory  prompt, enter the filename of the MACRO and  watch 
            while  it  executes.  I hope everything goes well.   If  not, 
            just  load  up the editor again and check  your  sequence  of 
            steps.  Have fun!...

        Finishing up:

                 This completes our tour of the XYSee Language  Sensitive 
            Editor. Some of the procedures we have covered may require  a 
            little  practice before you have them down pat, but for  now, 
            you have a good idea of how to:

              1. Move around within the editor.
              2. Interpret the various displays.
              3. Reposition the cursor.
              4. Create, copy, delete, and restore lines of text.
              5. Obtain multi-level HELP.
              6. Check the syntax of your work, print, and save it.

                 By  the  way, after correctly commenting  your  practice 
            MACRO, it should look something like this... 

        1 Right   Highlight the 'GEOMETRIC' menu.
        1 Enter   Select the 'GEOMETRIC' menu.
        1 Right   Highlight the '1D Point' module.
        1 Enter   Select the '1D Point' module.
        1 #-5.0   Enter a value for variable 'A'.
        1 #-3.0   Enter a value for variable 'B'.
        1 Up      Highlight the 'CURSOR' option.
        1 Down    Highlight the 'OVERLAY PLOTS' option.
        1 Down    Highlight the 'STATISTICS' option.
        0 Enter   Select the 'STATISTICS' module.
        3 Escape  After viewing the 'STATISTICS'..exit.
        1 Escape  Jump to the top of the 'OPTIONS' menu.
        1 Escape  Exit the 'OPTIONS' menu.
        1 Escape  Exit to the 'GEOMETRIC' menu.
        1 Escape  Exit to the 'MAIN MENU'.
        1 Stop    Terminate this 'MAIN MENU' level MACRO.



        Page 41
                                 Editor HELP Screens.
                                 ====================

                 Multi-leveled  HELP  is available while in  the  editor.  
             Successive  <F1>  Key presses, following  file  designation, 
             will   provide  access  to  information   screens   covering 
             EDIT/APPLICATION  COMMANDS, and SYNTAX STRUCTURES.  You  may 
             return to the Main Edit Screen from within the HELP sequence 
             at any time by pressing <SPACE>. 

             -----------------------------------------------------------
        Edit Command HELP screen #1:

                Edit commands implement XYSee's CURSOR CONTROL, LINE, and      
             UTILITY Functions while in the editor.  

                                                                        
                               CURSOR  FUNCTIONS
               Left/Right on line .F2     Cursor up .........Up-arrow
               Right 10 spaces ...TAB     Cursor down .....Down-arrow
               Top of screen ....Home     Cursor left .....Left-arrow
               Bottom of screen ..End     Cursor right ...Right-arrow
               Previous screen ..PgUp     Insert character .......Ins
               Next screen ......PgDn     Delete character .......Del
               Top of file ........F3     Backspace/Delete .Backspace
               Bottom of file .....F4

                       LINE FUNCTIONS                    UTILITY FUNCTIONS
          Copy line from .F5    Insert line ...F7    Print edit file .......F9
          Copy line to ...F6    Delete line ...F8    HELP ..................F1
          Append line ...RET    Restore line .F10    Exit/Syntax check .ESCape
          --------------------------------------------------------------------
        Syntax HELP screen #2:

                Syntax structures define the format of XYSee's Macro, 
             Import, and Puzzle files.

              
             FILE SYNTAX:
             MACRO:
               (Line 1) <Delay><Space><Command><Space>{Comment}
               (Line 1) <Delay><Space><"Message"><Space>{Comment}
               {Line 2) <Message text>

             IMPORT:
               (Line 1) <Numeric value><Space>{Comment}

             PUZZLE:
               (Line 1) <Function type><Space>{Comment}
               (Line 2) <Parameter value #1><Space>{Comment}
               (Line n) <Parameter value #n)<Space>{Comment}

          Notation convention: <Required>, {Optional}, "Literal", (Note only)
        -----------------------------------------------------------------------



        Page 42




        Application Command HELP screen #3:

                Application commands implement the various functions 
             of XYSee's Macro, Import, and Puzzle modules. 


                 AUTOMATIC COMMANDS                     MANUAL COMMANDS
          BEEP ..............Attention Bell     ESCape Key .........Abort MACRO
          ENTER .ENTER/RETURN Key emulation     SPACE Key .Pause till SPACE Key
          ESCAPE ......ESCape Key emulation     
          FORMULA ........Alternate formula            SPECIAL COMMANDS
          MESSAGE ........Display a message       0-9 .Step DELAY Multiplier
          NULL ..........Non-executing line       # ...NUMERIC Value follows
          OFF-KEY, ON-KEY ..Lock/Unlock Kbd
          PLOT .........Alternate plot font            PUZZLE FUNCTIONS
          PRINT ...........Activate printer          2D-Point         Line
          SPACE ........Space-Bar emulation          Circle       Parabola
          STOP .............Terminate MACRO          Ellipse          Sine
          UP, DOWN .....Arrow Key emulation          Cosine        Tangent
          LEFT, RIGHT ..Arrow Key emulation          Para#1         Para#2
          WAIT ........Pause till SPACE Key          Comp#1         Comp#2












                                XYSee APPENDICES
                                ================


                 Collected here for your use are:
                      
                      1. A Glossary of terms used in this manual.
                      2. A full listing of Error Messages, their causes    
                         and recommended corrections. 
                      3. A listing of Functional Module specifications.
                      4. A comprehensive set of Demonstration Values for
                         each function module.
                      5. A full listing of MACRO Commands with examples.
                      6. A listing of Puzzle File Syntax with examples.
                      7. A directory of Practice MACRO, Import, and 
                         Puzzle files.
                      8. A topic Index.



        Page I-1

                               The XYSee Glossary
                               ==================

                 A

        Alternate Plot: A capability, limited to the IMPORT module, that 
            allows custom contrasting of plotted points.

        ASCII: A system which allows the representation of text without 
            the addition of "special" word processing codes.  XYSee can 
            use MACRO, IMPORT, and PUZZLE files prepared with a word 
            processor operating in ASCII Text mode.

        Asymptotes: A straight line (X=0 or Y=0 axis) which may be 
            approached but never touched by a curve.

        Axis: The horizontal X and vertical Y base lines on your display.

                 B

        Backup: Duplication of data or a program to allow recovery 
            following loss or damage to the original.

        Boot/Reset: To start an operating system on a computer. Once the 
            operating system is running, you can execute programs like 
            XYSee.

                 C

        CONFIG.SYS: A configuration (CONFIG) system (SYS) file used by 
            DOS to extend the capabilities and services provided to your 
            computer as it executes programs.  

        Command: An instruction given to the computer. Commands may be 
            given from the keyboard or from a MACRO file.

        Comment window: The area at the bottom of a common XYSee display 
            where helpful notes and error messages are displayed.

        Composite curve: The combining of two related functions into a 
            third function display. In XYSee, the original functions are 
            called partials of the composite.

        Cursor: A movable horizontal and vertical axis system which can 
            be used to indicate points of interest on a plot or a movable 
            indicator which defines the working position on your computer 
            screen.  XYSee's editor uses a highlighted cursor. 

        Curve fitting: A procedure for defining a smooth curve that 
            conforms to data points. The Cubic Spline procedure provides 
            this capability in XYSee.



        Page I-2


                 D

        Default: The response that XYSee will assume unless a change is 
            specified by the user.

        DOS: Your Disk Operating System is a collection of procedures which 
            enables your computer to execute programs like XYSee. 

                 E

        ERROR message: A message displayed on the screen which informs 
            the user of an anomalous condition. Consult the ERROR message 
            listing in the Appendices for message specific information.

                 F

        File: A collection of related information stored on your disk. A 
            file can contain either programs or data.  MACROS, IMPORT 
            Files, and PUZZLES are examples of disk files used by XYSee.

        Foci: A point whose position can define the form of an ellipse, 
            hyperbola, or parabola. It appears as the source or 
            destination of rays.

        Full Screen: A text editing technique whereby a full screen of 
            displayed text is accessible for alteration.  Cursor 
            positioning and editing is unlimited within the current 
            display.  Completion of editing is coincident with the saving 
            of the file to disk.

        Function: A correspondence that assigns to each element x of X a 
            unique element y of Y. NOTE: The term "Function" is used to 
            describe a particular module within the XYSee system, 
            regardless of whether it meets this rigid definition or not.  
            That is to say, the circle is a functional module in XYSee. 

        Functional module: See Function.

        Function window: The area at the bottom of a common XYSee display 
            that lists menu selections, active keys, or input 
            requirements.
         
                 H

        HELP screen: A source of information about functions or tasks 
            available to the user at a given point in the program.

        Hercules: A high resolution graphics monochrome display         
            standard. 



        Page I-3


                 I

        Import File: A collection of X and corresponding Y positional 
            values on a disk. The user derived values will be plotted by 
            XYSee.

        Installation: An auxiliary function designed to adapt your 
            computers operating environment to the needs of XYSee.

                 L

        Line Orientation: A text editing technique whereby file creation 
            and alteration is done one line at a time.  Text display and 
            cursor positioning are normally restricted to the active 
            line.  Completion of editing for each line is typically 
            signified by a carriage return.

        Lissajous: A fundamental pattern named after the 19th-century 
            French scientist. Useful in displaying relationships between 
            periodic functions. A simple example is the comparison of the 
            frequency ratio of a wave on the X-axis to one on the Y-axis.

                 M

        MACRO: A collection of commands which when invoked will 
            automatically execute their individual procedures in 
            sequence.

        Magnetic media: The fragile coating on a diskette which actually 
            holds your data. The openings on a diskette allow access to 
            the media for your computer. NEVER TOUCH MAGNETIC MEDIA!

        Master Diskette: The original XYSee program diskette which was 
            provided by the manufacturer.  This diskette should never be 
            used to actually run XYSee. Use a backup copy.

        Menu: A list of functions or tasks available to the user at a 
            given point in the program. The user selects the function 
            desired from the menu.

        Monochrome: A single color display made up of bright text or 
            graphics against a dark background.  Portions of a graphics 
            display can be inverted by XYSee using the ENHANCE Plot 
            Option.

                 O

        Origin: An arbitrary point separating the real number system into 
            positive and negative values with a one-to-one 
            correspondence.



        Page I-4


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

        Printer: A device for producing a permanent copy of an XYSee 
            graphic display. The quality of the printout is dependent 
            upon the graphics capabilities of the printer.

        Prompt: A symbol that appears on the screen indicating the need 
            for a typed response from the user.  If a MACRO is active, 
            the response will be provided by the MACRO.

                 R

        Read: Moving stored data or a program from a disk file into the 
            computer for processing. 

        Retrieve: Recovering a graphic display from a special part of 
            memory where it was "saved" by the OVERLAY system.

                 S

        Save: Placing a graphic display into a special part of memory 
            where it will remain unchanged until "retrieved" by the 
            OVERLAY system.

        Scale factor: A level of adjustment applied to data or a display 
            to insure conformity to system limits.

        Spline: A procedure which uses  given points to mathematically 
            interpolate additional points to resolve a smooth curve.  
            XYSee uses the "Cubic Spline" procedure which limits the 
            mathematics involved to 3rd degree polynomials.



        Page I-5


        Step Delay: A numeric quantity as it relates to time. In a MACRO, 
            a step delay will postpone the execution of a following 
            command.

        Syntax: A set of grammatical rules used in the implementation of 
            a programming language.  Typically, syntax rules define the 
            Commands, their Spacing, and Numeric Representations of the 
            language.  XYSee's editor can interpret all the syntactical 
            constructs used in MACRO, Import, and Puzzle files.

        System limits: A set of maximum and minimum values that define 
            the capabilities of a system. XYSee has system numeric limits 
            of +/-99 with one decimal place accuracy.

                 T

        Text Editor: A program which manipulates text and possibly 
            graphics in the preparation of program and data files.
            Text editors characteristically generate ASCII files.

                 V

        Vertices: The point on an angle around which a side rotates in 
            its path from an initial position to a terminal position, 
            i.e. a corner where the sides meet.

                 W

        Waiting point: A position or step within XYSee where the program 
            will pause waiting for a response from the user or a MACRO.

        Word Processor: A program which manipulates text and possibly 
            graphics in the preparation of documents.  XYSee can use 
            MACRO, IMPORT, and PUZZLE files prepared with a word 
            processor operating in ASCII Text mode.

        Write: Moving stored data or a program from the computer into a 
            disk file after processing.



        Page II-1

                              XYSee ERROR MESSAGES
                              ====================                   

             This appendix is a compilation of all the error messages 
        used with XYSee in alphabetical order.  Included with each error 
        message is an expanded explanation of what caused the error, and 
        possible remedies to the problem.


        ABORT!..MACRO sequence terminated..Please continue...
           1. An <ESCape> key press was detected. This is a user 
              generated action.
           2. A Error was discovered in a MACRO File quantity. Edit your 
              MACRO.

        ERROR detected in NUMERIC INPUT #,REPLACED with ZEROS.
         A value in an Import file failed a numeric test. The sequence of 
        the value is displayed. Edit your Import file.  

        ERROR! UNEVEN NUMBER of values, LAST value REMOVED.
         The Import file data failed a count test. Edit your Import file.

        Fatal error: Hercules compatible graphics required to run XYSee.
          XYSee has not found a compatible graphics capability within 
        your system. Contact your computer dealer.

        Fatal error: IBM-CGA compatible graphics required to run XYSee.
          XYSee has not found a compatible graphics capability within 
        your system. Contact your computer dealer.

        File NOT Found...
         A MACRO, Import, or Puzzle file was not found when execution
        was attempted. This error resets automatically. Re-enter a valid 
        filename.

        File NOT Found...Create File?.(Y/N)
         The file you have designated was not found on the disk. If you 
        entered the filename incorrectly, merely press <N>o and try 
        again.  Press <Y>es if you wish to create the new file.

        Incorrect_SEQUENCE! . . . Select another file.
         A Tolerance value was not found at the beginning of the Puzzle 
        file. Edit the Puzzle file, or select another file.


        Invalid SETUP file DATA..defaults active.
         The file "SETSEE.DTA" is contaminated. Re-copy from the Master 
        Diskette.



        Page II-2

        Incorrect SETUP file VERSION..defaults active.
         The file "SETSEE.DTA" is from another version of XYSee. A 
        Hercules/CGA version mix has occurred. Re-copy from the Master 
        Diskette.

        MACRO file COMMAND quantity contaminated. COMMAND/S.
         A Command failed a validity test. The first letter of the 
        commands within the failed group are listed. Edit your MACRO.

        MACRO file DELAY quantity contaminated.
         The delay variable failed a numeric test. Edit your MACRO.

        No line to RESTORE!..Press key.
         You have attempted to restore a line without having first 
        deleted one.  

        Not a Triangle.
         The three positional value pairs representing the vertices of 
        the triangle were found to be in a line.  Move one pair out of 
        line.

        NUMERIC quantity contaminated.
         Keyboard input value failed numeric test. Select another key.

        Required DATA FILE NOT FOUND..program terminating.
         The file "MENUSEE.DTA" was not found. Re-copy from the Master 
        Diskette.

        Save ABORTED . . .
         A manual ESCape from saving the "Current Status" was detected.

        Select "FROM" line first!..Press key.
         You have attempted to copy a line to a new destination without 
        having first designated which line to copy.  
         (1) Position the cursor at the line you wish to copy and press 
             <F5>.
         (2) Position the cursor at the new copy position and press <F6>.  

        Select "START"
         There must be a Puzzle activated before attempting to solve for 
        it's pieces. 

        SEQUENCING error..MACRO terminating.
         XYSee detected inappropriate requests from a MACRO File. Edit 
        your MACRO.

        SETUP file NOT FOUND..defaults active.
         The file "SETSEE.DTA" was not found. Re-copy from the Master 
        Diskette.



        Page II-3

        SORRY! file was found EMPTY..
         A selected file had no values in it. Edit your file or select a 
        new one.

        SORRY!...Incompatible Axis.
         An attempt was made to overlay two functions from incompatible 
        axis groups, such as 1D_Points and Circles. Only overlays within 
        compatible axis groups are allowed.

        SORRY! MACRO cannot CALL ITSELF.
         An attempt to execute a new MACRO from an existing active MACRO 
        was detected. The existing MACRO has been canceled. Edit your 
        MACRO.

        SORRY! . . . No <Functions> of that type are present.
         An attempt to solve for a function that was not part of the 
        currently active puzzle was detected. Analyze the display and 
        select another function.

        SORRY!...NO plot available to overlay.
         An attempt was made to restore an overlay before one was saved. 
        Save an overlay prior to attempting a restoration.

        SORRY!... No Statistics available.
         A request for statistics was detected while in the CONIC 
        module. Relevant statistics can be found in the appropriate 
        module for each conic section.

        SORRY!... No Triangle Statistics.
         A request for statistics was detected for a plot that did not 
        meet the structure requirements of a triangle. Move one 
        positional value pair out of line.

        SORRY!, not enough MEMORY to store overlays.
         XYSee has detected an insufficient amount of free memory to 
        allow overlay storage. Add memory to your system if this feature 
        is desired.

        SORRY! . . . Nothing to report, select "START" first.
         An attempt to obtain a puzzle solution report without having 
        solved for a puzzle was detected.  Activate a puzzle.

        SORRY!... Printer NOT READY..Press key.
         XYSee has determined that your printer is not responding.
        Possible causes include being out of paper, not being properly 
        selected ON-LINE, or an equipment failure.  Check your printer.



        Page II-4

        Unexpected END OF DATA..program terminating.
         The file "MENUSEE.DTA" is contaminated. Re-copy from the Master 
        Diskette.

        UNKNOWN ERROR detected, REPLACED with ZEROS.
         A error of undetermined source was discovered in a Import file. 
        Edit your Import file.

        WARNING! . . . Invalid FUNCTION.
         A function not supported by this version of XYSee was detected 
        in your Puzzle File.  Edit the Puzzle File or select another file.

        WARNING!...MACRO value contaminated.
        A variable value failed a numeric test. Edit your MACRO.

        WARNING!..MACRO value EXCEEDS LIMITS.
         A numeric value greater than +99 or less than -99 was detected 
        in a MACRO. Edit your MACRO.

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

        WARNING!...Single or multiple substitutions required to maintain 
        ascending "X" sequence...
         One or more Spline module "X" values were found to be out of 
        ascending order. Re-enter your data in the correct sequence or if 
        a MACRO is active, edit your MACRO file.

        WARNING! The syntax check has found an error.
         You have attempted to exit a session with a syntax error 
        remaining in your current edit file. Possible choices are:
         (1) Press <ESCape> if you really want to exit with the error.
         (2) Press any other key to locate the error.



        Page III-1

                              XYSee Functional Modules
                              ========================


                 XYSee  functional modules are designed to provide a rich 
            educational  environment.   Each function has  been  provided 
            with  as much interactive flexibility as is suitable for  its 
            form. The following individual explanations cover some of the 
            more  important  aspects of each module such as the  type  of 
            input  expected,  statistics  available,  and possible  error 
            messages.   In addition,  several of the advanced modules are 
            covered in more detail in other parts of this manual.  

        ================================================================

        Functional Module: Import Facility.          Puzzle function: NO.

        Main Formula:      User Defined.
        Alternate Formula: User Defined.

        Description: Plot values from a disk file.

        Discussion:  The Import module accepts positional value pairs 
                     from a disk file and plots them on a two dimensional 
                     plane.  Up to 100 "X" and corresponding "Y" values 
                     may be input.  Following any necessary scaling of 
                     values, XYSee will:
                       1. Plot the form in the correct position within 
                          the plane.
                       2. Calculate the Y MAXIMA.
                       3. Calculate the Y MINIMA.
                       4. Calculate the FUNCTION MEAN.
                       5. Calculate the VARIANCE.
                       6. Calculate the Std. DEVIATION.

        ** Warning! ** Messages: A warning message will be displayed for 
                                 the following errors:
                                   1. Incorrect Filename.
                                   2. File found empty.
                                   3. Incorrect numeric format.
                                   4. Uneven number of values.
                                      (X without Y, or Y without X)
                                   5. Error of unknown source.

        {A full set of warning messages may be found in the Appendices.}



        Page III-2
        ================================================================

        Functional Module: 1D Point.                 Puzzle function: NO.

        Main Formula:      X=A+B
        Alternate Formula: X-(A+B)=0

        Description: Plots a point on the number line.

        Discussion:  The One Dimensional Point module accepts two 
                     parameter values which define the X axis offset of 
                     the point from the origin.  Following any necessary 
                     scaling of values, XYSee will:

                       1. Plot the point in the correct position on the 
                          number line.
                       2. Calculate the HORIZONTAL OFFSET.           
                    
        ** Warning! ** Messages:  None.

        ================================================================

        Functional Module: 2D Point.                 Puzzle function: YES.

        Main Formula:      Y=AX+B
        Alternate Formula: Y-(AX+B)=0

        Description: Plots a point on a two dimensional plane.

        Discussion:  The Two Dimensional Point module accepts one 
                     positional and two parameter values which are used 
                     to define a position on a two dimensional plane.  
                     Following any necessary scaling of values, XYSee 
                     will:

                       1. Plot the point at the correct position within 
                          the plane.
                       2. Calculate the HORIZONTAL OFFSET.
                       3. Calculate the VERTICAL OFFSET.
                       4. Calculate the DIFFERENCE between the horizontal    
                          and vertical offsets.  This value is helpful in  
                          developing a broader understanding of spatial  
                          relationships, i.e. when the X-Y offset is zero,  
                          the point lies on a line equidistant from the X  
                          and Y zero axis', but it's position along the  
                          line is indeterminate.

        ** Warning! ** Messages: None.



        Page III-3
        ================================================================

        Functional Module: Line.                     Puzzle function: YES.

        Main Formula:      AX+BY+C=0 
        Alternate Formula: Y=(AX+C)/-B

        Description: Plots a Line with desired rotation on a two 
                     dimensional plane.

        Discussion:  The Line module accepts one positional and three 
                     parameter values which define the horizontal and 
                     vertical location of points along a line segment.  
                     The horizontal limits of the line are defined by the 
                     magnitude of the positional value.  Following any 
                     necessary scaling of values, XYSee will:
                       1. Plot the line at the correct position within 
                          the plane.
                       2. Calculate the maximum and minimum vertical 
                          OFFSETS.
                       3. Calculate the VERTICAL MEAN of the line.
                       4. Calculate the SLOPE of the line.
                       5. Calculate the LENGTH of the line.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero.

        ================================================================

        Functional Module: Triangle.                 Puzzle function: NO. 

        Main Formula:      User Defined Vertices.
        Alternate Formula: User Defined Vertices.

        Description: Plots a Triangle within a two dimensional plane. 

        Discussion:  The Triangle module accepts three sets of positional 
                     values defining the three corners of a triangle.  If 
                     analysis determines that the points define a 
                     triangle, XYSee will:
                       1. Plot the triangle at the correct position 
                          within the plane.
                       2. Calculate the LENGTH of all three sides.
                       3. Calculate the three ANGLES.
                       4. Calculate the triangle's TOTAL SIDE LENGTH.

        ** Warning! ** Messages: A warning will be displayed if the three 
                                 sets of positional values do not define 
                                 a triangle. This could be caused by 
                                 placing all three vertices in a line.



        Page III-4
        ================================================================

        Functional Module: Quadratic Equation.       Puzzle function: NO. 

        Main Formula:      AX^2+BX+C=0

        Alternate Formula: X=-B(+/-)Sqrt(B^2-4AC)
                             --------------------
                                     2A

        Description: Plot a solution to the Quadratic Equation.

        Discussion:  The Quadratic Equation module accepts three 
                     parameter values which define the position of the X 
                     axis offset of the roots from the origin. Following 
                     any necessary scaling of values, XYSee will:
                       1. Plot the roots at the correct positions on the 
                          number line.
                       2. Calculate the GREATER ROOT.
                       3. Calculate the LESSER ROOT.
                       4. Calculate the ROOT SEPARATION.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 the term B^2-4AC resolves to a value 
                                 less than zero. This would equate to an 
                                 attempt to take the square root of a 
                                 negative number, which is undefined.

        ================================================================

        Functional Module: Circle.                   Puzzle function: YES.

        Main Formula:      (X-A)^2 + (Y-B)^2 = R^2
        Alternate Formula: X^2+Y^2=R^2 (A=B=0)

        Description: Plots a Circle on a two dimensional plane. 

        Discussion:  The circle module accepts three parameter values 
                     which define the position of the center of a circle 
                     on the plane, and it's radius.  Following any 
                     necessary scaling of values, XYSee will:
                       1. Plot the circle at the correct position within 
                          the plane.
                       2. Calculate the circle's DIAMETER.
                       3. Calculate the circle's CIRCUMFERENCE.
                       4. Calculate the circle's AREA.
                       5. Calculate the circle's HORIZONTAL OFFSET.
                       6. Calculate the circle's VERTICAL OFFSET.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "R" 
                                 variable to a negative value. This would 
                                 represent a negative radius length which 
                                 cannot exist.



        Page III-5
        ================================================================

        Functional Module: Parabola.                 Puzzle function: YES.

        Main Formula:      Y=AX^2 + DX+F           
        Alternate Formula: Y=AX^2 (D=F=0)     

        Description: Plots a Parabola on a two dimensional plane. 

        Discussion:  The parabola module accepts three parameter values 
                     which define the position of the parabola on the 
                     plane.  Following any necessary scaling of values, 
                     XYSee will:
                       1. Plot the parabola at the correct position 
                          within the plane.
                       2. Calculate the HEIGHT of the left rim.
                       3. Calculate the HEIGHT of the right rim.
                       4. Calculate the VERTICAL OFFSET.

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Ellipse.                  Puzzle function: YES.

        Main Formula:      (X^2/A^2)+(Y^2/B^2)=1
        Alternate Formula: X^2+Y^2=1  (A=B=1) 

        Description: Plot a Vertical or Horizontal Ellipse.

        Discussion:  The Ellipse module accepts two parameter values 
                     which define the form of an ellipse at the origin.  
                     Following any necessary scaling of values, XYSee 
                     will:
                       1. Plot the ellipse at the correct position within    
                          the plane.
                       2. Calculate the MAJOR AXIS.
                       3. Calculate the MINOR AXIS.
                       4. Calculate the FOCI.
                       5. Calculate the ASPECT RATIO.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "A" 
                                 variable to a value less than or equal 
                                 to zero. 
                                 A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to a value less than zero.
                                 Both of these errors represent an 
                                 invalid length specification.



        Page III-6
        ================================================================

        Functional Module: Hyperbola                 Puzzle function: NO. 

        Main Formula:       X^2-Y^2=K^2
        Alternate Formula:  Y=(+/-)Sqrt(K^2+X^2)

        Description: Plot a Normal or Inverse Hyperbola.

        Discussion:  The Hyperbola module accepts a single parameter 
                     value which defines the form of the function on a 
                     two dimensional plane. Following any necessary 
                     scaling of values, XYSee will:
                       1. Plot the hyperbola at the correct position within    
                          the plane.
                       2. Calculate the TRANSVERSE AXIS.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "K" 
                                 variable to a value less than or equal 
                                 to zero. This represents an invalid 
                                 length specification.

        ================================================================

        Functional Module: Conic.                    Puzzle function: NO.

        Main Formula:       None.
        Alternate Formula:  None.

        Description: Display the sectioning of Right Circular Cones.

        Discussion:  A set of Right Circular Cones is sectioned to obtain 
                     CIRCULAR, ELLIPSOID, PARABOLIC, and HYPERBOLIC cut 
                     lines.


        ** Warning! ** Messages: None.



        Page III-7
        ================================================================

        Functional Module: Sine.                     Puzzle function: YES.

        Main Formula:      Y=A*Sin(BX+C)
        Alternate Formula: Sin(X)=Tan(X)*Cos(X)

        Description: Plot the Sine periodic function.

        Discussion:  The Sine module accepts three parameter values which 
                     define the form of the function on a two dimensional 
                     plane.  Following any necessary scaling of values, 
                     XYSee will:
                       1. Plot the Sine curve at the correct position 
                          within the plane.
                       2. Calculate the AMPLITUDE of the wave.
                       3. Calculate the PHASE SHIFT.
                       4. Calculate the FREQUENCY.
                       5. Calculate the PERIOD.

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Cosine.                   Puzzle function: YES.

        Main Formula:      Y=A*Cos(BX+C)
        Alternate Formula: Cos(X)=Sin(X)/Tan(X)

        Description: Plot the Cosine periodic function.

        Discussion:  The Cosine module accepts three parameter values 
                     which define the form of the function on a two 
                     dimensional plane.  Following any necessary scaling 
                     of values, XYSee will:
                       1. Plot the Cosine curve at the correct position 
                          within the plane.
                       2. Calculate the AMPLITUDE of the wave.
                       3. Calculate the PHASE SHIFT.
                       4. Calculate the FREQUENCY.
                       5. Calculate the PERIOD.

        ** Warning! ** Messages: None.



        Page III-8
        ================================================================

        Functional Module: Tangent                   Puzzle function: YES.

        Main Formula:      Y=A*Tan(BX+C)
        Alternate Formula: Tan(X)=Sin(X)/Cos(X)

        Description: Plot the Tangent periodic function.

        Discussion:  The Tangent module accepts three parameter values 
                     which define the form of the function on a two 
                     dimensional plane. Following any necessary scaling 
                     of values, XYSee will:
                       1. Plot the tangent curve at the correct position 
                          within the plane.
                       2. Calculate the AMPLITUDE of the wave.
                       3. Calculate the PHASE SHIFT.
                       4. Calculate the FREQUENCY.
                       5. Calculate the PERIOD.

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Cosecant                  Puzzle function: NO.

        Main Formula:      Y=A*Csc(X)
        Alternate Formula: Csc(X)=1/Sin(X)

        Description: Plot the Cosecant periodic function.

        Discussion:  The Cosecant module accepts a single parameter value 
                     which defines the form of the function on a two 
                     dimensional plane. Following any necessary scaling 
                     of values, XYSee will:
                       1. Plot the cosecant curve at the correct position    
                          within the plane.
                       2. Calculate the FREQUENCY.
                       3. Calculate the PERIOD.

        ** Warning! ** Messages: None.



        Page III-9
        ================================================================

        Functional Module: Secant                    Puzzle function: NO.

        Main Formula:      Y=A*Sec(X)
        Alternate Formula: Sec(X)=1/Cos(X)

        Description: Plot the Secant periodic function.

        Discussion:  The Secant module accepts a single parameter value 
                     which defines the form of the function on a two 
                     dimensional plane. Following any necessary scaling 
                     of values, XYSee will:
                       1. Plot the secant curve at the correct position       
                          within the plane.
                       2. Calculate the FREQUENCY.
                       3. Calculate the PERIOD.

        ** Warning! ** Messages: None.

        ================================================================

        Functional Module: Cotangent                 Puzzle function: NO.

        Main Formula:      Y=A*Cot(X)
        Alternate Formula: Cot(X)=Cos(X)/Sin(X)

        Description: Plot the Cotangent periodic function.

        Discussion:  The Cotangent module accepts a single parameter 
                     value which defines the form of the function on a 
                     two dimensional plane. Following any necessary 
                     scaling of values, XYSee will:
                       1. Plot the cotangent curve at the correct 
                          position within the plane.
                       2. Calculate the FREQUENCY.
                       3. Calculate the PERIOD.

        ** Warning! ** Messages: None.



        Page III-10
        ================================================================

        Functional Module: Parametric #1.            Puzzle function: YES.

        Main Formula:      Y=A*Sin(B*PI*T) (+) X=C*Cos(D*PI*T)
        Alternate Formula: None.

        Description: Plot a Parametric of Sine and Cosine functions.

        Discussion:  The first Parametric module accepts four parameter 
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. Following any necessary scaling of values, 
                     XYSee will:
                       1. Plot the parametric at the correct position 
                          within the plane.
                       2. Calculate the  VERTICAL AMPLITUDE of the first 
                          partial.
                       3. Calculate the FREQUENCY of the first partial.
                       4. Calculate the HORIZONTAL AMPLITUDE of the second
                          partial.
                       5. Calculate the  FREQUENCY of the second partial.

        ** Warning! ** Messages: None.



        Page III-11
        ================================================================

        Functional Module: Parametric #2.            Puzzle function: YES.

        Main Formula:      Y=A*Sin((T+PI)/B) (+) X=C*Sin(DT)
        Alternate Formula: None

        Description: Plot a Parametric of Sine functions.

        Discussion:  The second Parametric module accepts four parameter
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. Following any necessary scaling of values, XYSee 
                     will:
                       1. Plot the parametric at the correct position 
                          within the plane.
                       2. Calculate the  VERTICAL AMPLITUDE of the first 
                          partial.
                       3. Calculate the FREQUENCY of the first partial.
                       4. Calculate the HORIZONTAL AMPLITUDE of the second
                          partial.
                       5. Calculate the  FREQUENCY of the second partial.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero which is undefined.



        Page III-12
        ================================================================

        Functional Module: Composite #1.             Puzzle function: YES.

        Main Formula:      Y=AX/B (+) Y=-C*Cos(DX)
        Alternate Formula: None

        Description: Plot the Composite of a line and a Cosine function.

        Discussion:  The first Composite module accepts four parameter
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. Following  any necessary scaling of values, 
                     XYSee will:
                       1. Plot the composite at the correct position 
                          within the plane.
                       2. Calculate the  VERTICAL AMPLITUDE of the first 
                          partial.
                       3. Calculate the SLOPE of the first partial.
                       4. Calculate the VERTICAL AMPLITUDE of the second     
                          partial.
                       5. Calculate the  FREQUENCY of the second partial.

        ** Warning! ** Messages: A warning message will be displayed if 
                                 an attempt is made to set the "B" 
                                 variable to zero.  This would lead to 
                                 division by zero which is undefined.



        Page III-13
        ================================================================

        Functional Module: Composite #2.             Puzzle function: YES.

        Main Formula:      Y=A*Cos(BX) (+) Y=C*Sin(DX)
        Alternate Formula: None

        Description: Plot the Composite of Cosine and Sine functions.

        Discussion:  The second Composite module accepts four parameter 
                     values which define the forms of three functions.  
                     The first two forms are partials with the third 
                     being a combined display. Parameter value sets are 
                     provided to allow individual manipulation of each 
                     partial. Following  any necessary scaling of values, 
                     XYSee will:
                       1. Plot the composite at the correct position 
                          within the plane.
                       2. Calculate the  VERTICAL AMPLITUDE of the first 
                          partial.
                       3. Calculate the FREQUENCY of the first partial.
                       4. Calculate the VERTICAL AMPLITUDE of the second     
                          partial.
                       5. Calculate the  FREQUENCY of the second partial.

        ** Warning! ** Messages: None.
        ================================================================

        Functional Module: Spline.                   Puzzle function: NO.

        Main Formula:      User Defined.
        Alternate Formula: User Defined.

        Description: Plot smoothed-curve solutions to custom functions.

        Discussion:  The Cubic Spline module accepts six sets of 
                     positional values which define points on a user 
                     derived curve.  Once analysis establishes the 
                     validity of the values, a smooth curve is fit to the 
                     points. Following any necessary final scaling, XYSee 
                     will:
                       1. Plot the form at the correct position 
                          within the plane.
                       2. Calculate the MAXIMA of the display.
                       3. Calculate the MINIMA of the display.
                       4. Calculate the FUNCTION MEAN.
                       5. Calculate the APPROXIMATE X INTERCEPT.

        ** Warning! ** Messages: A warning message will be displayed and 
                                 automatic substitutions will occur if 
                                 positional value pairs do not represent 
                                 an ascending order of "X". 

        ================================================================



        Page IV-1          XYSee DEMONSTRATION VALUES
                           ==========================

        FUNCTION           VALUES              EFFECT
        ----------------------------------------------------------------

        GEOMETRIC MENU LEVEL *******************************************

        1D POINT           7,-2                STANDARD
                           0, 0                X=0 AXIS
                           6, 3                MAXIMUM + OFFSET
                         -12, 3                MAXIMUM - OFFSET

        2D POINT           1,  5, 0            STANDARD
                           1,  0, 5            X=0 AXIS
                           0,  5, 0            Y=0 AXIS
                           1, 10, 0            MAXIMUM + OFFSET
                           1,-10, 0            MAXIMUM - OFFSET

        LINES             -2, 3, 1, 4          + SLOPE/- OFFSET  
                          -2, 3, 1,-4          + SLOPE/+ OFFSET
                           0, 3, 1, 0          0 SLOPE/0 OFFSET

        TRIANGLES          3, 3                 
                           3,-3                
                          -3,-3                RIGHT TRIANGLE
                          -4,-3.5             
                           4,-3.5              
                           0, 3.5              EQUILATERAL TRIANGLE

        QUADRATIC MENU LEVEL *******************************************

        QUADRATIC EQUATION  1, 6, 0            ROOTS OF -6 AND 0
                           -1, 6, 0            ROOTS OF 6 AND 0
                            1, 0, 0            BOTH ROOTS=0

        CIRCLES            -5, 0, 4            Y=0 AXIS
                           -5,-5, 4            3rd QUADRANT
                            0, 0, 5            ORIGIN

        PARABOLAS           8,-5, 0            PHASE SHIFT
                           -7, 0, 0            POLARITY REVERSAL
                            3, 0, 0            WIDE
                            7, 0,-30           NEGATIVE OFFSET

        ELLIPSES            4, 8               MAJOR AXIS VERTICAL
                            8, 4               MAJOR AXIS HORIZONTAL
                            5, 5               TRANSITION INTO CIRCLE
                            5, 3               FOCI=4.0

        HYPERBOLAS          0.5                APPROACHING ASYMPTOTES
                            5                  NORMAL HYPERBOLA
                           90                  TRANSITION INTO LINE



        Page IV-2

        TRIGONOMETRIC MENU LEVEL ***************************************
        SINE               4, 1, 0             STANDARD WAVE
                           8, 1, 0             AMPLITUDE CHANGE
                           5, 5, 0             PERIOD CHANGE
                           5, 1, 1             57.3 DEG PHASE SHIFT

        COSINE             4, 1, 0             STANDARD WAVE
                           8, 1, 0             AMPLITUDE CHANGE
                           5, 5, 0             PERIOD CHANGE
                           5, 1,-1.6           91.7 DEG PHASE SHIFT

        TANGENT            4, 1, 0             STANDARD WAVE
                           8, 1, 0             AMPLITUDE CHANGE
                           5, 5, 0             PERIOD CHANGE
                           5, 1,-1             -57.3 DEG PHASE SHIFT

        COSECANT           4.0                 STANDARD WAVE
                           20                  AMPLITUDE CHANGE
                          -8.0                 POLARITY INVERSION

        SECANTS            4.0                 STANDARD WAVE
                           20                  AMPLITUDE CHANGE
                          -8.0                 POLARITY INVERSION

        COTANGENT          4.0                 STANDARD WAVE
                           20                  AMPLITUDE CHANGE
                          -8.0                 POLARITY INVERSION

        ADVANCED MENU LEVEL ********************************************

        PARAMETRIC #1      6,1.6, 6,1.1        LISSAJOUS
                           8,2.4, 8,2.4        1:1 RATIO=CIRCLE
                           8,  2, 8,  4        1:2 FREQUENCY RATIO
                         4.5,  1, 6,  5        1:5 FREQUENCY RATIO
                           6,  5, 8,  3        5:3 FREQUENCY RATIO

        PARAMETRIC #2      9,  3, 3, 1         120 DEG PHASE SHIFT
                          -6,1.6, 2, 3         112 DEG PHASE SHIFT
                           9,  1, 6, 3         LISSAJOUS VARIATION

        COMPOSITE #1      -1, 1, 3, 1          SLOPE INVERSION
                           1, 2, 6, 3          RAMPING COSINE
                           0, 2, 6, 3          ZERO SLOPE

        COMPOSITE #2       5, 2, 4, 3          COMPLEX WAVEFORM
                           6, 1, 3, 3          COMPLEX WAVEFORM
                           5, 3, 4, 1          COMPLEX WAVEFORM



        Page IV-3


        SPLINE             EQUATION: Y=8 Sine(X/2) {SINE WAVE}
                           X= -7.9,-4.7,-1.6,1.6, 4.7,7.9
                           Y= -8.9, 8.0,-8.0,8.0,-8.0,8.0
                           
                           EQUATION: Y=X {LINE}
                           X= -9.0,-6.0,-3.0,0.0, 4.5, 9.0
                           Y=  9.0, 6.0, 3.0,0.0,-4.5,-9.0

                           EQUATION: Y=(X/3)^2 {PARABOLA}
                           X= -9.0,-5.5,-2.0,2.0,5.5,9.0
                           Y=  9.0, 3.4, 0.4,0.4,3.4,9.0                    



        Page V-1


                                XYSee MACRO COMMANDS
                                ====================


        MANUAL COMMANDS:  ESCape Key = ABORT MACRO Sequence.
                          SPACE  Key = PAUSE till next SPACE Key.

        AUTO   COMMANDS:  BEEP = Sound Bell for attention etc.
                          ENTER = ENTER/RETURN Key emulation.
                          ESCAPE = ESCape Key emulation.
                          FORMULA = Display ALTERNATE formula.   
                          MESSAGE = Display a message.
                          NULL = Non-executing line.
                          OFF-KEY = Inactivate keyboard until ON-KEY.
                          ON-KEY = Reactivate keyboard until OFF-KEY.
                          PLOT = Display ALTERNATE plot font.
                          PRINT = Activate the printer.
                          SPACE = SPACE Bar emulation.
                          STOP = TERMINATE MACRO Sequence.
                          UP, DOWN, LEFT, RIGHT = ARROW Key emulation.
                          WAIT = PAUSE till SPACE Key.


        SPECIAL COMMANDS: 0-9  = Step DELAY Multiplier.                  
                          #    = NUMERIC Value follows.


        EXAMPLE FILENAME: PLOTPARA.MAA


        MACRO FILE SYNTAX: <A><SPACE><B><SPACE><C>

                           A = 0-9 Step delay multiplier.
                           B = Command.
                           C = Optional step comment.


        EXAMPLE COMMANDS: 2 RIGHT Move the cursor to the midpoint.
                          0 #6.5  "X" Value of point location.
                          5 Null This line just adds a 5 second delay.
                          1 EnTeR Upper/Lower case okay. 





        Page V-2



        EXAMPLE MACRO:    1 Right Go past GEOMETRIC MENU.
                          1 Right Continue past the QUADRATIC MENU.
                          1 Right Select the TRIGONOMETRIC MENU.
                          0 Enter The TRIGONOMETRIC Function area.
                          0 OFF-Key Turn keyboard off during testing.
                          1 Right Select the SINE Function.
                          0 Enter The SINE Module.
                          2 #3.6  "A" Amplitude variable value.
                          2 #2    "B" Period/Frequency variable value.
                          2 #-0.8 Give "C" a -45.8 degree phase shift.
                          1 Message Display the question.
                          What is the FREQUENCY of the wave?
                          8 Message Display the time out message below.
                          Time is up, please mark your answer booklet.
                          2 Escape EXIT out of the SINE Module.
                          0 Escape EXIT To the MAIN MENU.
                          0 ON-Key Unlock the keyboard. 
                          1 Beep  Get the proctor's attention.
                          1 Beep  One more time.
                          0 STOP  Terminate this MACRO SEQUENCE...

        {Lines following STOP}
        {may be used}     Filename = SINE_2X.MAM  MACRO designed to 
        {for comments}    execute from the MAIN MENU LEVEL.



        Page VI-1

                               XYSee PUZZLE SYNTAX
                               ===================


        EXAMPLE FILENAME: C_CIRCLE.PZL


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


        EXAMPLE Puzzle:  Plots five forms.
         
        #0.2  Use Advanced-level tolerances.  {Filename-EXAMPLE.PZL}                    
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



        Page VII-1
                       MACRO/IMPORT/PUZZLE Practice Files
                       ==================================

             These files may be found on the XYSee Main Program and 
        Documentation Disks.  If you are using a single disk drive 
        system, you may want to delete the large XY_DEMO.MAM file to make 
        room for these files on the Main Program Disk. 


        XYSee MACRO FILES: 

        MAIN MENU Level MACRO Files:

                         ANGLE.MAM           IMPRT.MAM           
                       * PRACTICE.MAM      * SINE_2X.MAM         
                         SINETEST.MAM      * XY_DEMO.MAM

        GEOMETRIC MENU Level MACRO Files:

                         EQUILAT.MAG         PARALLEL.MAG        
                         POINT1.MAG          POINT2.MAG

        QUADRATIC MENU Level MACRO Files:

                         C_CIRCLE.MAQ        CONIC.MAQ
                         ELLIPSE.MAQ         HYPERBOL.MAQ
                         PARABOLA.MAQ        ROOTS.MAQ

        TRIGONOMETRIC MENU Level MACRO Files:

                         COSAMP.MAT          COSECPOL.MAT
                         COTAMP.MAT          SECAMP.MAT
                         SINEPHASE.MAT       TANAMP.MAT

        ADVANCED MENU Level MACRO Files:
                  
                         COMP1.MAA           COMP2.MAA
                         PARA1.MAA           PARA2.MAA
                         SPLINE.MAA

        XYSee IMPORT FILES:
                  
                         DISTORT.IMP       * NORMAL.IMP           
                         SCATTER.IMP         SKEWED.IMP
                  
        XYSee PUZZLE FILES:

                ADVEX.PZL           ADVPZL1.PZL         ADVPZL2.PZL
                BASPZL1.PZL         BASPZL2.PZ          BASPZL3.PZL
              * EXAMPLE.PZL         GEOMEX.PZL          INTPZL1.PZL
                INTPZL2.PZL       * PRACTICE.PZL        QUADEX.PZL
                TRIGEX.PZL        * TWO_D.PZL           TWOLINE.PZL

        * = Files located on the XYSee Main Program Disk.



        Page VIII-1

                                   XYSee INDEX
                                   ===========

         ADVANCED PROCEDURES (XYSee)                      18
         Append line..RET                                 35
         Application Command HELP screen #3               42 
         Backing Up Your Diskettes                         2                                                    
         Backspace/Delete..Backspace                      35
         BASIC MENU STRUCTURE (Editor)                    30                                                    
         BASIC MENU STRUCTURE (XYSee)                      1     
         Before We Start                                   3 
         Beginning the XYSee Editor Tour                  31
         Bottom of file..F4                               35
         Bottom of screen..End                            34
         Caring For Your Diskettes                         2
         Circle                                        III-4    
         Composite #1                                 III-12   
         Composite #2                                 III-13   
         Conic                                         III-6    
         Cosecant                                      III-8     
         Cosine                                        III-7    
         Cotangent                                     III-9     
         Continue Editing                                 38
         Conventions                                       3 
         Copy line from..F5  {Cut}                        36
         Copy line to..F6    {Paste}                      37
         Cubic SPLINE Procedures                          19 
         CURSOR Control HELP                              33
         Cursor down..Down-arrow                          34
         Cursor left..Left-arrow                          34
         CURSOR Plot Option                            11,14
         Cursor right..Right-arrow                        34
         Cursor up..Up-arrow                              34
         Delete character..Del                            34
         Delete line..F8                                  36
         Demonstration Values                           IV-1 
         Edit a New File                                  38 
         Edit Command HELP screen #1                      41 
         Edit File Specifications                         31     
         Editor Command HELP                              33
         Editor HELP (XYSee)                              31
         Editor HELP Screens                              41 
         Ellipse                                       III-5    
         ENHANCE PLOT Plot Option                      12,15            
         ERROR Messages                                 II-1
         Example IMPORT File Listing                      27 
         Executing A MACRO Routine                        21      
         Executing An IMPORT Routine                      25 
         Executing the Practice Edit MACRO                40
         EXITING Plot Options                             12 
         Exit/Syntax check..ESCape                        37 



        Page VIII-2

         Final Words                                      17    
         Finishing up                                     40
         First Steps                                       3 
         First Waiting Point                               9   
         FUNCTION Examples                                28      
         FUNCTIONAL MODULES                            III-1    
         Glossary                                        I-1
         Grand Tour                                        4 
         HELP..F1                                         37 
         Hyperbola                                     III-6    
         Import Facility                               III-1    
         IMPORT Filenames                                 27  
         IMPORT Procedures                                25 
         Important Keys                                    4 
         Index                                        VIII-1                    
         Insert character..Ins                            35
         Insert line..F7                                  36
         Keyboard Puzzle File Preparation                 16    
         LANGUAGE SENSITIVE EDITOR (XYSee)                31
         Left/Right on line..F2                           33
         Line                                          III-3    
         MACRO Commands                                  V-1
         MACRO Filenames                                  24 
         MACRO/IMPORT/PUZZLE Practice Files            VII-1  
         MACRO Procedures                                 21 
         Main Edit Screen                              31,32
         MAIN MENU Screen                                  6 
         Main Plot Display                                10  
         Next screen..PgDn                                35
         NUMERIC Examples                                 28      
         Numeric Value Entry                               8 
         One Dimensional Point Math Module                 7 
         OVERLAY Plot Option                              11 
         Parabola                                      III-5    
         PARAMETRIC/COMPOSITE Procedures                  18     
         Parametric #1                                III-10   
         Parametric #2                                III-11   
         Plot a Second Point                              13 
         Plot HELP Plot Option                            12 
         PLOT OPTIONS Menu                                10 
         Preparing a Practice Edit MACRO                  39 
         Preparing IMPORT Files                           26 
         Preparing MACRO Files                            22          
         Preparing PUZZLE Files                           27      
         Previous screen..PgUp                            35 
         Print edit file..F9                              37 
         PRINT PLOT Plot Option                           12 
         PRINT PUZZLE Plot Option                         15          
         Printer Support (XYSee)                          20
         Program Disk (XYSee)                              2 
         Puzzle File Directory                            14       



        Page VIII-3

         PUZZLE Filenames                                 29
         PUZZLE HELP Plot Option                          15          
         PUZZLE Procedures                                27
         PUZZLE REPORT Menu Option                        16      
         PUZZLE Syntax                                  VI-1
         Quadratic Equation                            III-4    
         Registration (XYSee)                              6  
         Restore line..F10                                36
         RETRIEVE Plot Option                             11 
         Right 10 spaces..TAB                             33
         SAMPLE SESSION (XYSee)                            2
         SAVE PUZZLE Menu Option                          17     
         Saving Changes                                   38 
         Secant                                        III-9    
         Second Puzzle Waiting Point                      16    
         Second Waiting Point                             13 
         Sine                                          III-7    
         Spline                                       III-13
         START PUZZLE Menu Option                         14
         STATISTICS Plot Option                           11 
         STEP DELAY Value Recommendations                 22      
         STORE Plot Option                                11 
         Syntax HELP screen #2                            41 
         Tangent                                       III-8    
         TOLERANCE VALUE Recommendations                  27      
         Top of file..F3                                  36
         Top of screen..Home                              34
         Triangle                                      III-3    
         Using the Para./Comp. Procedures                 18 
         Using The Printer                                20 
         Using the SPLINE Procedures                      19 
         ZOOM SCALE Plot Option                           15      
         1D Point                                      III-2    
         2D Point                                      III-2    
         2D POINT Puzzle Selection                        14      



        0 Null    1                                                                 
        1 Right   2    ** Main Menu level MACRO.."Practice.MAM" **                  
        0 Null    3                                                                 
        1 Right   4 This MACRO is designed to be used with the XYSee Editor.        
        1 Right   5 It's purpose is to provide practice in the use of cursor        
        0 Enter   6 positioning commands and Syntax checking.                       
        0 Null    7                                                                 
        1 Right   8 During the "Guided Tour" portion of your manual, you will       
        0 Enter   9 insert lines that will cause the syntax check step to fail.     
        2 #3.6    10 The "Inserted Lines" will be subsequently removed              
        2 #2      11 allowing the final syntax check to pass.                       
        0 Null    12                                                                
        1 #-0.8   13 The following statements will be displayed within XYSee        
        0 Null    14 if this MACRO is inadvertantly executed.                       
        1 Message 15                                                                
        This practice MACRO is for use with the Editor only...                         
        5 Message 16 Display the statement                                          
        It is not functional within XYSee..Press ESCape.                            
        0 Beep    17 Just a reminder to press ESCape.                               
        5 Null    18 The comment sections of the following statements may be        
        1 Escape  19 changed as you see fit.                                        
        0 Escape  20                                                                
        1 Beep    21      ** Dummy MACRO Command Section **                         
        1 Right   22                                                                
        1 Right   23 Select the TRIG MENU.                                          
        0 Enter   24 The TRIGONOMETRIC Function area.                               
        1 Right   25 Select the SINE Function.                                      
        0 Enter   26 The SINE Module.                                               
        2 #3.6    27 "A" Amplitude variable value.                                  
        2 #2      28 "B" Period/Frequency variable value.                           
        2 #-0.8   29 Give "C" a -45.8 degree phase shift.                           
        1 Escape  30 EXIT out of the SINE Module.                                   
        0 Escape  31 EXIT To the MAIN MENU.                                         
        1 Beep    32 Get the proctor's attention.                                   
        1 Right   33 Continue past the QUADRATIC MENU.                              
        1 Right   34 Select the TRIG MENU.                                          
        0 Enter   35 The TRIGONOMETRIC Function area.                               
        1 Right   36 Select the SINE Function.                                      
        0 Enter   37 The SINE Module.                                               
        2 #3.6    38 "A" Amplitude variable value.                                  
        2 #2      39 "B" Period/Frequency variable value.                           
        2 #-0.8   40 Give "C" a -45.8 degree phase shift.                           
        1 Escape  41                                                                
        0 Escape  42    **  Termination of "Practice.MAM"  **                       
        0 Stop    43                                                                
        Copyright (C) 1990, Dean M. Thompson.  All rights reserved.                 



                                                          Dated:

                              XYSee TROUBLE REPORT
                              ====================             

            Although significant care has been expended to insure the 
            reliability of XYSee, we would like to know if you 
            experience any problems. Thank-you for your help!


        Your name:(Please print)
        Company/Organization:
        Telephone:(AC & Ext.)


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
















































                  XYSee Mathematic Functions in Graphic Form
                     Copyright (C) 1990 Dean M. Thompson
                             All Rights Reserved.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1508

     Volume in drive A has no label
     Directory of A:\

    ADVEX    PZL       168   8-12-89   6:23a
    ADVPZL1  PZL       187  10-12-89   8:50p
    ADVPZL2  PZL       123  10-12-89   9:25p
    ANGLE    MAM      3528  10-11-89   8:32p
    BASPZL1  PZL       315  10-11-89   6:58p
    BASPZL2  PZL        87  10-12-89   9:14p
    BASPZL3  PZL       150  10-12-89   9:41p
    COMP1    MAA       467   6-06-87   9:01p
    COMP2    MAA       437   6-06-87   8:58p
    CONIC    MAQ       787   6-08-87   8:47p
    COSAMP   MAT      1029   6-07-87   2:54p
    COSECPOL MAT       911   6-07-87   2:56p
    COTAMP   MAT       840   6-07-87   3:08p
    C_CIRCLE MAQ       955  10-09-89   9:12p
    DISTORT  IMP       323   6-07-87  12:41p
    ELLIPSE  MAQ       601   6-07-87  10:08a
    EQUILAT  MAG       886   8-16-87   4:12p
    EXAMPLE  PZL      1633  10-15-89   7:06a
    FILE1508 TXT      3183   3-21-90   4:21p
    FILEDISC DOC      1152   2-18-89   8:01p
    GEOMEX   PZL       232   8-16-89  10:00p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       463  12-12-89   3:10p
    HYPERBOL MAQ       580   6-07-87  10:12a
    IMPRT    MAM       432   5-16-87   1:00p
    INTPZL1  PZL       525  10-11-89   6:35p
    INTPZL2  PZL       241  10-11-89   7:08p
    NORMAL   IMP       417  10-15-89   7:03a
    PARA1    MAA       413   9-10-89   7:21a
    PARA2    MAA       441   6-06-87   9:06p
    PARABOLA MAQ       663   9-09-89  10:42p
    PARALLEL MAG      1427  10-09-89   8:44p
    POINT1   MAG      1411   6-07-87   9:01a
    POINT2   MAG       364   6-07-87   8:32a
    PRACTICE MAM      3712  10-08-89   4:43p
    PRACTICE PZL       698  10-15-89   7:11a
    QUADEX   PZL       274   8-10-89   9:48p
    REGISTER FRM      1664   2-18-89   4:54p
    ROOTS    MAQ      6084   6-06-88   8:21p
    SCATTER  IMP       327   6-07-87  12:29p
    SD       COM      3584   8-01-85   7:20p
    SECAMP   MAT       869   6-07-87   3:07p
    SINETEST MAM      6026  10-15-89   3:18p
    SINE_2X  MAM      1010  10-08-89   8:48p
    SINPHASE MAT      1002   6-07-87   2:26p
    SKEWED   IMP       286   6-07-87  12:33p
    SPLINE   MAA      1110   6-07-87   8:39a
    TANAMP   MAT      1070   6-07-87   2:55p
    TRIGEX   PZL       153   8-11-89   8:45p
    TWOLINE  PZL       295   2-24-88   9:36p
    TWO_D    PZL        93  10-15-89   7:07a
    XYSEE    DOC    188288   2-18-89   7:49p
    XY_DEMO  MAM     17201   2-18-89   3:48p
           53 file(s)     259155 bytes
                           33792 bytes free
