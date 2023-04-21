---
layout: page
title: "PC-SIG Diskette Library (Disk #1059)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1059/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1059"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATAPLOT"

    Here's a useful two-dimensional plotting system for scientific and
    engineering data which is powerful enough to produce publication
    quality graphs.
    
    Capabilities include:
    
    ~ Polar and linear plots
    
    ~ Menu-driven operation
    
    ~ Full-function graph setup editor
    
    ~ Support for a variety of graph types, axis and plot styles
    
    ~ Spline curve smoothing
    
    ~ Linear and single-cycle/multiple-cycle log plots
    
    ~ User definable graph types, axes styles, grid scales, data legends
    
    ~ Plot up to 25 curves with unlimited data points
    
    ~ Plot graphs can be saved to disk or sent to dot matrix or laser
    printer or HPGL compatible plotters
    
    ~ Supports CGA, EGA, VGA and Hercules displays
    
    ~ Supports optional mouse and math coprocessor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDUM.TXT

{% raw %}
```

**************************************************************************
* SEPTEMBER, 1989                                                        *
*                                                                        *
* DATAPLOT V1.10 SUPPLEMENTAL DOCUMENT TO DATAPLOT.DOC                   *
*                                                                        *
* Note: This document provides additional information related to         *
*       version 1.10 of DATAPLOT program. Along with DATAPLOT.DOC 1.00,  *
*       you should be able to evaluate all functions of DATAPLOT.        *
*       Registered users will receive our latest printed detail          *
*       manual with figures and illustrations. Additional utilities      *
*       are provided to registered users to enhance DATAPLOT usage.      *
*                                                                        *
**************************************************************************

NEW FEATURES AVAILABLE IN DATAPLOT V1.10 :

(1) Support polar coordinate including radian & degree data format;
    linear or logarithm axes can be plotted; 

(2) Spline curver smoothing function;

(3) Build in printers support in non registered or registered versions;

(4) Full display/plotter/printer devices installation routine;

(5) Complete menu driven procedures in setup files selection or data
    loading;

(6) Support IBM VGA and compatible display adaptors;

(7) Plot up to 36 curves on a single graph

(8) Fully compatible with DATAPLOT V1.00.



ADDITIONAL DISTRIBUTION FILES
-----------------------------

        PRNDRV.EXE          printer driver program
        INSTALL.EXE         DATAPLOT installation program



NEW INSTALLATION ROUTINE
------------------------

An installation program is now included in the non-registered
distribution of DATAPLOT. Dataplot is initially configured without
printer driver. You can use the install program anytime to change
printer driver and/or plotter parameters. Note that these program
files: DATAPLOT.EXE, PRNDRV.EXE, and INSTALL.EXE must be in current
directory during installation procedure. Simply run the program
INSTALL from DOS command prompt.



USING POLAR COORDINATE SYSTEM
-----------------------------

DATAPLOT V1.10 now supports polar cooridinate plotting. The input data
format is the same as the other datafiles (see DATA FILE FORMAT in
the manual). However, you must specify whether the radial data is in
degree or radian format. This can be done in the DEFINE PLOT function.
 
To use the polar function, simply select the graph type as polar and input
all the required data into the setup sheet. Samples of polar coordinate
setups are included.

The polar setup also accepts negative magnitide values and logarithmic
scale. You can also display the axis in clockwise or counter-clockwise
direction or orient your axis in any direction to generate the desired
graphic output. All other features applicable to rectangular plotting can
also be used in the polar plotting (ie, solid grid, needle , color
selection, etc). All axis specifications are available in the Define Axes
section.


SPLINE SMOOTHING FUNCTION
-------------------------

Spline smoothing is now available to produce better looking graphs. To use
this function, simply select SPLINE in the data smoothing selection when
you are defining a plot. The spline smoothing technique in DATAPLOT is
based on cubic spline interpolation algorithm. Additional smoothing
and curve fitting functions will be available in the future update.


PRINTERS SUPPORT
----------------

DATAPLOT V1.10 now allows you to print or plot your graphs from within the
program.  We currently support HP7475 or HP7550 plotters, HP Laserjet II
printer, Epson FX/LQ series printers. All printer output can be in draft
or quality mode. Please make sure you install the correct device before
sending the output to print.

The printer support assumes output to PRN: device. You may redirect this
with the DOS MODE command to other output ports.


MENU DRIVEN SETUP FILES SELECTION AND DATA LOADING
---------------------------------------------------

You can now select all DATAPLOT setup files or load data from the datafile
simply using the cursor or mouse without further typing. This procedure
enhances smooth operation and provides more friendly interface.

FULLY COMPATIBLE WITH DATAPLOT V1.00
------------------------------------

If you have used DATAPLOT V1.0 to create any graphs setup, you can be sure
the new DATAPLOT v1.1 will be fully compatible with the old data files.
There is no conversion of any kind to do and you should be able to load
any setups and datafiles previouly used.


REGISTRATION AND SUPPORT
------------------------

We continue to distribute DATAPLOT under user support software concept.
Please read the terms and conditions specified in DATAPLOT.DOC. We
strongly support our product and provide quality software and services
to our registered users.

All registered users will receive a complete printed manual with drawings
and illustrations. An additional printing program is also provided for
multiple printing of the generated plot files without using DATAPLOT.

A 24 hours online BBS system is also provided for our product support.
You may call our 1200/2400 baud BBS line (403) 547-0166 for product
information, comments, suggestions. You may also use our 24 hours FAX
line at (403) 239-5226.


CURRENT REGISTERED USERS
------------------------

To show appreciation of supports from our current version 1.00 registered
users, this new version 1.10 is available to you at no charge. All
registered users will receive a complete update version automatically.
If you are a registered user and have not yet received an update,
Please notified us immediately.






                     ComPlus Professional Services

            P.O.Box 173, Station G, Calgary, AB, Canada  T3A 2G2


                          Tel.  (403) 239-5226
						  
                      (Automatic Voice and FAX line)




```
{% endraw %}

## DATAPLOT.DOC

{% raw %}
```











                               D A T A P L O T   (tm)



                           Scientific Data Plotting System



                                    Version 1.00







                                 Instruction Manual








                                      Feb. 1988



                              Copyright (c) 1987, 1988

                                         by

                            ComPlus Professional Services

                    P.O.Box 173, Station G, Calgary, AB, T3A 2G2

                                       Canada



                             <<< All Rights Reserved >>>










          DATAPLOT version 1.00               ComPlus Professional Services




          LICENSE AGREEMENT
          -----------------

          DATAPLOT (tm) is developed and published by ComPlus  Professional
          Services of Calgary, Alberta, Canada.

          A limited license is granted to all users of this program to make
          copies of the program files and its related  documentations,  and
          to  distribute  them  to  other  users  subject  to the following
          conditions :

              1. The program, its related files and documentations are not
                 modified in any way and all files are distributed together
                 in their original form.

              2. No fee is charged for the software and documentations,
                 except for a small distribution and media fee.

              3. The program, its related files and documentation may not
                 be package with any other software or hardware without
                 written agreement from the author.



          DISCLAIMER
          ----------

          Although extra efforts have been exercised to ensure this program
          and  its  documentation  to  be  accurate  and precise,  they are
          provided to you on an "as is" basis.  No  warranty  of  any  kind
          (direct  or  imply)  is made with respect to this program and its
          related files.  ComPlus Professional Services and the  author  of
          this  program shall not be liable for any damages,  including but
          not limit to any lost profits,  lost savings or other  incidental
          or  consequential damages arising out of the use of this program.
          The user assumes all risks with respect to the accuracy, quality,
          reliability, performance, or otherwise of such program.



          TRADEMARKS
          ----------

          DATAPLOT  - ComPlus Professional Services
          MSDOS     - Microsoft Corporation
          HPGL      - Hewett-Packard Company
          AUTOCAD   - Autodesk, Inc.
          HERCULES  - Hercules Computer Technology
          LOTUS,123,SYMPHONY - Lotus Development Corporation
          IBM, IBM PC/XT/AT  - International Business Machines Corporation

                                          1



          DATAPLOT version 1.00               ComPlus Professional Services





          INTRODUCTION
          ------------


          DATAPLOT  is  a  general  purpose  two  dimensional data plotting
          system  specially  designed  for   scientific   and   engineering
          applications.  Its simple menu driven user interface allows quick
          and  effective  method   for   scientific   data   analysis   and
          presentation,  and  yet  powerful  enough  to produce publication
          quality graphs.


          Here are some of the basic features of the plotting system :

              o  All functions and commands are menu driven.

              o  Full function graph setup editor provided to define axes,
                 grids, scales, title, labels, plot definitions.

              o  support many graph types, axis styles, plot styles.

              o  graph setup can be saved on disk for later user.

              o  graph types include linear plot, single and multiple cycle
                 logarithmic plot.

              o  plot styles include scatter, continuous, step, and needle.

              o  plot up to 10 curves on a single graph.

              o  support most common graphic adapters and HPGL compatible
                 plotters.


















                                          2



          DATAPLOT version 1.00               ComPlus Professional Services




          DISTRIBUTION FILES
          ------------------

                 DATAPLOT.EXE    main executable program
                 DATAPLOT.DOC    instruction manual (this file)
                 DATAPLOT.TXT    additional information (README file)
                 README.BAT      readme batch file for reading DATAPLOT.TXT
                 *.CNF           sample configuration files
                 *.DAT           sample data files
                                 other utility files



          SYSTEM REQUIREMENT
          ------------------


          DATAPLOT requires the followings to operate:


              o  IBM PC/XT/AT or true compatible

              o  256 K or more RAM

              o  one or more disk drive

              o  MS/PC DOS 3.0 or later

              o  one of the following supported graphic display adapters

                    - IBM Color Graphic Adapter (CGA)

                    - IBM Enhanced Graphic Adapter with 256K memory (EGA)

                    - Hercules compatible monochrome adapter (HGC)

              o  optional HPGL compatible plotter for hard copy output

              o  optional microsoft compatible mouse and driver

              o  optional math coprocessor recommended




          This program requires a minimum of 256 Kilobytes RAM to run. More
          memories  are recommended for handling large amount of plot data.
          Additional memory may require to run DOS command and some of  the
          special features.


                                          3



          DATAPLOT version 1.00               ComPlus Professional Services





          INSTALLATION AND USAGE
          ----------------------


          The  plotting system does not require any initial installation to
          start.  It was designed for simple usage.  All necessary  modules
          and  device drivers are built into a single executable file.  The
          program can automatically adapt itself to one  of  the  supported
          graphic  devices.  The  program also supports MS compatible mouse
          for menu selection. If available,  the mouse drive must be loaded
          prior to the start of the program. Please check your installation
          manual accomplish your mouse.

          DATAPLOT can be run from any directory as long as DATAPLOT.EXE is
          placed  in  directory search path.  To start the plotting system,
          simply run the program at DOS prompt, such as :

                 C:>DATAPLOT

          The program is fully menu driven and its operations are extremely
          straight forward.  All commands can be selected using the up/down
          cursor keys with the Enter key for picking the selection. In most
          cases, <Esc> key can be used to cancel a selection or command.

          If  mouse  is available,  it can simulate the cursor keys to move
          between selections.  Its left-button is used to pick a  selection
          (similar to the Enter key).  The right-button is used to cancel a
          selection (similar to the Esc key). The center button on a three-
          button mouse is not used.  Note that the mouse buttons can not be
          used if keyboard input is expected, such as file name entry.




















                                          4



          DATAPLOT version 1.00               ComPlus Professional Services




          GENERAL OVERVIEW
          ----------------


          This data plotting system provides a very simple and yet powerful
          method  for  handling  two  dimensional  data.  It  is  specially
          designed for scientific and engineering applications.  Many graph
          types such as linear,  single and multiple cycle logarithm graphs
          are supported along with various styles.

          All graph parameters,  description are stored in a special  graph
          configuration  file.  This  special  file  contains all necessary
          information,  except the data itself,  to construct a graph.  The
          necessary information includes the graph title,  graph type, grid
          style, axis scales, data plotting style and source of data,  etc.
          A  completely  menu  driven  graph  configuration setup editor is
          built into the system to speed up configuration procedure.

          After the graph parameters are defined, entire set of data can be
          loaded into memory for initial plotting. The graph parameters can
          be  changed  while  plot  data  remain  in  memory.  Graph  setup
          parameters  can  be optimized effectively for best representation
          of the actual data.  Axes  can  be  expanded  to  concentrate  at
          certain  range  of  data  or  to  get  an overview of data trend.
          Finally graph may be produced on supporting plotter devices.

          Currently the plotting system  accepts  free  format  ASCII  data
          file.  Data  file  must  be  prepared  prior to the start of data
          plotting.  Data can be entered with a  standard  text  editor  or
          generated by another program.





















                                          5



          DATAPLOT version 1.00               ComPlus Professional Services




          DATA PLOTTING PROCEDURE
          -----------------------


          The  following outlines the typical procedure required to produce
          a graph using this data plotting system.

              1. Determine the graph type, format and its layout. Also
                 determine the source of data, data format, plotting
                 method, etc.

              2. Generate and/or prepare data file for plotting. You may
                 have to invoke another program, use a favorite editor, or
                 download from a remote computer.

              3. Start DATAPLOT, create or make changes to existing graph
                 setup configuration file according to the specified
                 requirement.

              4. View and change graph setup until satisfactory.

              5. Load graph data into memory, plot graph with data on
                 screen for verification. Adjust graph setup parameters for
                 best result.

              6. When satisfied, produce graph on plotter if necessary.

              7. Save graph setup to file for later use.























                                          6



          DATAPLOT version 1.00               ComPlus Professional Services




          USING THE DATA PLOTTING SYSTEM
          ------------------------------


          To demonstrate various features of the plotting  system,  several
          configuration   files   and  data  files  are  included  in  this
          distribution.  Please check the file directory list of files  for
          their  names.  Graph  configuration  files can be identified with
          ".CNF" extension.  You are invited to plot at least some of these
          files to get acquainted with the capabilities of the system.

          The   plotting   system  contains  a  single  executable  file  :
          DATAPLOT.EXE. To start the program, simply type "DATAPLOT" at DOS
          prompt and terminate with <Enter> key.

          Initially  DATAPLOT  will  attempt  to decide the graphic adapter
          type in your system.  If your graphic adapter is not supported or
          it is not fully compatible, dataplot will assume the IBM CGA. And
          if your  graphic  adapter  supports  colors,  dataplot  will  ask
          whether you have a color monitor attached.

          The  first  menu screen will appear when the program successfully
          determined your graphic adapter. The first menu, called the "MAIN
          COMMAND" menu, provides choices of the following :


                         - EXIT TO  SYSTEM
                         - EDIT PLOT SETUP
                         - START PLOT DATA
                         - RUN DOS COMMAND


          Up/down   cursor  keys  (or  mouse)  are  used  to  move  between
          selections. Press <Enter> key selects the highlighted function.



          EXIT TO SYSTEM
          --------------

          This selection provides  the  only  proper  way  of  leaving  the
          system. Confirmation is required to avoid unwanted exit. All data
          in memory will be lost.  The program can also be stopped  at  any
          time by typing <Ctrl C> from the keyboard.







                                          7



          DATAPLOT version 1.00               ComPlus Professional Services




          EDIT PLOT SETUP
          ---------------

          This  selection  brings  up  the graph configuration editor.  The
          editor is a menu driven interactive editor completed with its own
          command menu at right side of screen. The main part of the screen
          displays some of the current configurations.


          Editor commands include :


                         - Exit Plot Setup
                         - Load-Create Setup
                         - Save Current Setup
                         - Enter Graph Title
                         - Select Graph Type
                         - Select Grid Color
                         - Define Axes
                         - Define Plots
                         - Preview Setup


          While most of these commands are self explanatory,  some  require
          brief descriptions. Various grid types are provided for different
          applications.  Sample configuration files are  provided  for  all
          grid types.  To familiarize the plotting system,  you can use the
          "Load-Create  Setup"  command  to  load  some   of   the   sample
          configuration files.


          In  "Load-Create  Setup",   only  the  file  name,   without  the
          extension, is required. Default extension ".CNF" will be added to
          the filename automatically.  When attempt to load an non-existing
          setup file,  you can select  to  create  a  new  one  in  memory.
          However,  the  new  configuration  is not explicitly saved unless
          "Save Current Setup" command is used. All files with extension of
          ".CNF"  in the current directory is displayed when no filename is
          entered.


          The "Define Axes" command provides a lower level of  editing  for
          defining the two axes.  The two axes,  horizontal (x) or vertical
          (y),  are defined independently.  The current axes configurations
          are  presented on screen,  and are organized into several fields.
          Cursor keys (up/down/left/right/Home/End) or mouse can be used to
          select a field. Field values are changed simply by entering a new
          value.  Pop up selection menu are provided for non-numeric  value
          fields when <Enter> key is pressed.  The <Esc> key can be used to
          cancel an entry before the <Enter> key is pressed.

                                          8



          DATAPLOT version 1.00               ComPlus Professional Services




          - Axis configuration data include axis label, axis type,  minimum
          and  maximum,  minor  and  major tick,  axis crossing.  Most axis
          configurations are self explanatory, however, tick marks and axis
          crossing  require  further  description.  Minor  tick size is the
          distance (in plot unit) between two small ticks.  The major  tick
          is  the  distance between two larger ticks.  Axis crossing is the
          location  where  the  other  axis   crosses   the   given   axis.
          Furthermore,  axis  minimum  does not necessary smaller than axis
          maximum, together,  they define the axis direction.  A few trials
          with the setup will clarify the convention used here.

          - Autoscaling feature is provided on either axis. If enable, axis
          minimum and maximum will be adjusted to the limits  of  the  plot
          data  values  when loaded.  Please note that tick values and axis
          crossing will be changed automatically according to  the  minimum
          and  maximum  loaded  data  values.  Autoscaling only provides an
          initial axis setting to view data, adjustment on axis settings is
          sometimes necessary to produce satisfactory result.

          -  When setting up a multiple cycle logarithm axis,  the plotting
          range (minimum and maximum) must be able to fit into the selected
          cycle.  If  in autoscaling mode,  the number of cycle (except for
          single cycle plot) is automatically adjusted to fit data range.

          - <Esc> key is used to terminate "Define Axes".  Before return to
          the  editor  command  menu,  all  axis settings are automatically
          scanned for possible error.  You can return to "Define  Axes"  if
          one or more errors are found.

          The  "Define  Plots"  command provides another sub-level menu for
          editing plot definition.  Up to 10 plots may be defined  in  each
          configuration without clutter the final graph.  Available "Define
          Plot" commands include :

                         - Exit Define Plot
                         - Create  New Plot
                         - Delete This Plot
                         - Change This Plot
                         - Select Prev Plot
                         - Select Next Plot

          - Only one plot definition can be selected to display and  modify
          on  the main screen.  One of the select plot commands can be used
          to step through  plot  definitions.  Changeable  plot  parameters
          includes  plot  name,  source  of  plot  data (filename),  x data
          column, y data column, skip data points,  plot type,  plot color,
          dot  style,  line style,  and data legend position.  "Change This
          Plot" command allows change to any of the plot parameters. Cursor
          keys  are used to select parameter to change (as in "Define Axis"
          command).

                                          9



          DATAPLOT version 1.00               ComPlus Professional Services




          - Plot name is used to identify plot data and is  drawn  as  data
          legend if necessary. Data filename is standard DOS filename, that
          contains the plot data.  Data file format  is  described  in  the
          "Data  File  Format"  section,  along  with  description  on data
          column. Plot data can be skipped to handle large data set.

          - Plot type,  plot color,  dot style,  line style and data legend
          can  be  selected  from corresponding pop up menu.  Currently the
          following plot types are provided :

                    . continuous line plot
                    . scatter point plot
                    . combine scatter point and line plot
                    . step (staircase) plot
                    . needle plot

          - Various line styles and dot styles are also provided for either
          scatter or continuous line plot. Data legend can be placed at one
          of the four corners or simply disable (not shown).

          - Two additional function keys are accepted in edit plot command.
          Function key <F9> can be used to display current directory, which
          is useful for entering data file names. Function key <F10> can be
          used to step through plot definitions.  This is particular useful
          for changing many plot definitions at the same time.


          The "Preview Setup" command in the main editor menu let you  look
          at your graph setup on screen WITHOUT plotting the data.  You can
          further modify your graph parameters as required.  The escape key
          can be used to terminate the screen plot at anytime if necessary.


          The  "Exit Plot Setup" command terminates the graph configuration
          editor and return to the main command menu screen.  However,  the
          graph  configuration  parameters  are neither saved automatically
          nor destroyed.  You can switch between main command menu and  the
          configuration editor menu without losing the configuration data.



          START PLOT DATA
          ---------------

          When  the  graph  parameters  are set,  you can select the "Start
          Plotting" command from the  main  menu  for  data  plotting.  The
          "Start  Plot  Data" consists of another set of commands specially
          for manipulating plot data. The start plot data commands that can
          be selected from the command menu include :


                                         10



          DATAPLOT version 1.00               ComPlus Professional Services




                         - Exit to Main Menu
                         - Load  New  Setup
                         - Load  Plot Data
                         - Erase Plot data
                         - Begin  Plotting
                         - Change Parameters


          The  "Load  New Setup" command allows loading of previously saved
          configuration from disk. Setup that loaded from the configuration
          editor menu is retained, and vice versa.

          The  "Load  Plot  Data"  command  is  used  to load the data into
          memory.  A summary of the  defined  plots  is  shown.  Plots  are
          selected by typing the plot number. Minimum and maximum values as
          well as total number of data  points  are  shown  when  data  are
          loaded.  Since all data must be loaded before plotting,  you must
          have enough memory to  store  all  the  required  plot  data.  If
          autoscaling  mode  is enable,  the corresponding axis limits,  as
          well as tick increment, will be adjusted automatically.

          The "Erase Plot Data" command is  used  alternatively  to  remove
          previously loaded data from memory to avoid plotting. Only loaded
          data will be plotted.

          Use "Begin Plotting" command to plot the  loaded  data.  You  can
          select plot on screen,  plot to plotter directly, or plot to file
          (in plotter command format). Again, the escape key can be used to
          stop  plotting if necessary,  before the plot is completed.  When
          plot directly to the plotter,  make  sure  the  serial  interface
          parameters  are  set  correctly,  and the plotter is ready before
          starting the plot.

          Use "Change Parameter" command for changing the  plotting  ranges
          (axes minimums and maximums) in order to examine certain range of
          data or simply to get a better view  of  data  by  expanding  the
          axes. Again, if in autoscaling mode, tick values will be adjusted
          when either minimum or maximum is changed.  You can even go  back
          to  the  configuration  editor  through  the main command menu to
          change most other settings without  affecting  the  loaded  data.
          This allows you to try several settings for the same set of data.
          Of course, you cannot change some of the plot definitions such as
          the data source file name,  otherwise, previously loaded data are
          removed automatically.  You must then re-load the plot data  from
          disk.  Please  also  note  that when autoscaling is active,  axes
          limits are changed automatically when data is reloaded again even
          the changed parameters are saved.  Autoscaling must be turned off
          to preserve changed axes parameters.



                                         11



          DATAPLOT version 1.00               ComPlus Professional Services




          RUN DOS COMMAND
          ---------------

          From the main menu,  this command execute another copy of the DOS
          command shell. COMMAND.COM must be available. You can run all DOS
          specific commands such as dir,  copy,  etc.  or execute any other
          programs  such  as data collecting or data editing programs.  You
          can return to DATAPLOT with DOS exit command.


          DATA FILE FORMAT
          ----------------

          The plotting system uses a very simple and straight forward  data
          file  format  convention.  All data files are standard text files
          (ASCII format) so a normal text editor can be used to  create  or
          edit  the  data  manually.  Many  programs  can  be configured to
          produce such data file.  Other common data file formats  will  be
          supported (see continuous enhancement section).

          The  followings  are rules and assumptions applicable to the data
          file (You can refer to the sample data files as examples) :

              -  Data file must be in standard ASCII format, line oriented,
                 with carriage return and line feed to separate lines.

              -  Line  starts  with  a  non-numeric  character  are assumed
                 comment lines. Leading spaces and tabs are ignored.  Blank
                 lines are allowed and are treated as comment lines.

              -  Maximum characters per line is 132.

              -  Each data line consists of 1 or more data fields separated
                 with at least one space or one tab character.

              -  All data are in free real number format,  Plus  and  minus
                 signs can be used, comma is not allowed.

              -  Column numbers are used to identify data field. Data field
                 number starts from 1.  Data field number 0 represents  the
                 data counter.

              -  Only  two  data  fields (x- and y-field) are used for each
                 data plot.  Many sets of plot data can share the same file
                 with different data field.

              -  Data   must  be  sorted  sequentially  in  plotting  order
                 (particular in continuous line plot) before  loading  into
                 the plotting system.


                                         12



          DATAPLOT version 1.00               ComPlus Professional Services




          OTHER UTILITIES
          ---------------

          If  you  are  using  either  Lotus  1-2-3 or Symphony,  two macro
          utilities are provided to prepare data file suitable for dataplot
          directly from your spreadsheet.



          DPLOTSYM.MLB

          This  Symphony  macro  utilities will generate an ASCII data file
          named PLOT.DAT from your worksheet.  The  following  instructions
          should be followed :


          (1) Copy DPLOTSYM.MLB into your SYMPHONY MACRO library,

          (2) Create / prepare your plot data on your Symphony worksheet,

          (3) Load the macro utility into your worksheet by typing :

                  (i) <SERVICES>AAMACROMGR.APP<CR>Q
                 (ii) <SERVICES>MLDPLOTSYM.MLB<CR>Q

          (4) Hit <Alt>D ("Alt" and "D" key together) to start the macro,

          (5) Move the cursor to the upper left corner of the plot data,

          (6) Anchor the cursor by pressing the <TAB> or "." key,

          (7) Move the cursor to highlight the desire plot data,

          (8) When finish, hit the <Return> key

          (9) A file name PLOT.DAT is created and ready for DATAPLOT.

          (10) Rename the data file if necessary.













                                         13



          DATAPLOT version 1.00               ComPlus Professional Services




          DPLOT123.WK1

          This  Lotus  1-2-3  worksheet contains a macro utility to extract
          plot data.  It also works with other 1-2-3  compatible  programs.
          Desire  plot data is created on this worksheet (you should always
          have several backups of this file).  The  following  instructions
          should be followed :


          (1) Load a copy of the worksheet DPLOT123.WK1,

          (2) Create your plot data on the worksheet,

          (3) When the plot data are ready, type <Alt>D to begin macro,

          (4) Move the cursor to the upper left corner of the plot data,

          (5) Anchor the cursor by pressing the "." key,

          (6) Move the cursor to highlight the desire plot data,

          (7) Press <Return> key to create PLOT.DAT from the plot data,

          (8) Save the worksheet with a different name if necessary,

          (9) Rename PLOT.DAT if necessary, the file is ready for DATAPLOT.

























                                         14



          DATAPLOT version 1.00               ComPlus Professional Services




          HARD COPY OUTPUT
          ----------------

          You  can  get  hard copy output through "Begin Plotting" command.
          This dataplot version is configured to  produce  HPGL  compatible
          output   either  on  asynchronous  communication  port  1  (COM1)
          directly or onto a disk file.  Direct support  for  communication
          port  2  (COM2)  is  only  available  to  registered  user  as an
          installation option.

          To use direct plotter output  through  COM1,  you  must  set  the
          communication  port's  parameters,  such as baud rate,  data bit,
          parity,  etc.,  correctly before you can send your graph  to  the
          plotter.  DOS MODE command can be used for this purpose.  An HPGL
          compatible plotter must be  connected  to  COM1  before  plotting
          begins.

          To  produce your graph output on a disk file,  you must provide a
          valid DOS filename.  The plot file  will  contain  HPGL  commands
          necessary  to construct the graph.  This file may then be send to
          another computer, and/or to the plotter later through DOS copy or
          print commands.


          CONTINUOUS ENHANCEMENT
          ----------------------

          ComPlus  Professional  Services  is  committed  to  support  this
          program continuously. The followings are some of the improvements
          and enhancements that we are working on :

                 o support for more hardware devices including printers

                 o line smoothing features and statistical functions

                 o date and time functions

                 o polar coordinates plotting

                 o ternary diagram plotting

                 o user comments and notes on graph

                 o support other input data file format (e.g. Lotus files)

                 o support other output plot format (e.g. AutoCad support)


          All  registered users are guaranteed to have access to all future
          updates.

                                         15



          DATAPLOT version 1.00               ComPlus Professional Services





          USER SUPPORT SOFTWARE
          ---------------------

          This  program  is  currently  distributed  under  "User   Support
          Software"  concept.  Anyone  may  legally  obtain  a copy of this
          program in its original form for evaluation purpose.  You may try
          this  program  for  a short period of time up to 4 weeks.  If you
          continue to use this  program  after  the  evaluation  period,  a
          mandatory registration is required (see registration and ordering
          information).  If this program is not of  any  use  to  you,  you
          should discontinue using it.  In either case,  you are encouraged
          to copy and share this program and its documentation with  others
          under   the   terms  and  conditions  of  the  license  agreement
          indicated.


          REGISTRATION AND ORDERING INFORMATION
          -------------------------------------

          All persons who found  this  program  useful  are  encouraged  to
          become registered user.  You,  as a registered user, will receive
          the latest version of this program along with all  support  files
          plus  a  printed detail manual.  In addition,  you will receive a
          special configuration program allowing you to customize  some  of
          the parameters, including graph aspect ratio, communication port,
          default display device, etc. Since not all future updates of this
          program  will  be  available to general public under user-support
          software method,  you  are  guaranteed  to  have  access  to  all
          revisions  and updates.  In most case,  only a minimal charge may
          apply to cover diskette and shipping cost.

          Whether you choose to register now or not at this stage,  you are
          cordially  invited  to  try  out  this program,  and fill out the
          enclosed  software   performance   report   with   comments   and
          suggestions.

          Please  send the order form,  the software performance report and
          any comment and suggestion or question to :




                            ComPlus Professional Services
                               P.O.Box 173, Station G
                                  Calgary, Alberta
                                   CANADA T3A 2G2




                                         16

                              ==================
                              DATAPLOT ver. 1.00
                                  ORDER FORM
                              ==================

DATE: ________________________________     +--------------------------------+
                                           |Order from :                    |
                                           |                                |
NAME: ________________________________     |  ComPlus Professional Services |
                                           |  P.O.Box 173, Station G,       |
ADDRESS:   (Please print)                  |  Calgary, Alberta, Canada      |
                                           |                                |
     _________________________________     +--------------------------------+
                                           |                                |
     _________________________________     | Computer Type: _______________ |
                                           |                                |
     _________________________________     | DOS version : ________________ |
                                           |                                |
TEL. _________________________________     +--------------------------------+

==============================================================================
QUANTITY*                ITEM                           EACH          TOTAL
------------------------------------------------------------------------------

 ________    DATAPLOT program register user version    US$68.00     _________
             (includes program disk and manual)

             Outside USA and CANADA shipping charge    US$10.00     _________
             (International order, please remit in
              money order or postal order - no cheque
              accepted).
------------------------------------------------------------------------------

 Disk Format : ___ 3 1/2"   ___ 5 1/4"                Total Amount  _________

==============================================================================

Payment Method (Please check one) :

     ___ Cheque/Money Order (Payable to ComPlus Professional Services)

     ___ Visa

     ___ MasterCard

         Card Number : __________________________________

         Expiry Date : __________________________________

         Signature   : __________________________________
                       (Credit card order must be signed)

* Note: Each registration copy of DATAPLOT is licensed to run on a single CPU
        only. Site license for 10 or more copies is available.

*******************************************************************************
**				                                             **
**			SOFTWARE PERFORMANCE REPORT    	       	       	     **
**									     **
*******************************************************************************

Name : ________________________________________     Date : ____________________

Addr : ________________________________________

       ________________________________________     Tel. ______________________
									       
User Registration Number : ____________________     Product Ver. ______________
									       
Computer Type : _______________________________________________________________
									       
DOS Version : ___________________________  Memory size : ______________________
									       
Display Hardware : ____________________________________________________________
									       
Hardcopy Device : _____________________________________________________________
									       
+-----------------------------------------------------------------------------+
| Description : 							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|               							      |
|       								      |
|       								      |
|               							      |
+-----------------------------------------------------------------------------+
| Comment :     							      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
|       								      |
+-----------------------------------------------------------------------------+
 (Attach separate sheet if necessary)
```
{% endraw %}

## DATAPLOT.TXT

{% raw %}
```

DATAPLOT version 1.10  - Sept 28, 1989


created and distributed by ComPlus Professional Services,
                           P.O.Box 173, Station G,
                           Calgary, Alberta, T3A 2G2
                           Canada.


Dataplot is a feasible 2 dimensional graph plotting system specifically
designed for scientific and engineering applications, although many
business applications may find this system extremely useful.

Dataplot was designed with simple and easy to use menu driven system.
Experience computer users can start using the program without
refering to the instruction manual. Several sample graph setup and 
data are provided to explore the various features and capabilities 
of dataplot.

To start dataplot, simple type

        DATAPLOT

at your DOS prompt and follow instructions. The program will automatically
adapt to many popular graphic devices. All commands are selected with
arrow keys and return key through menus. Most commands can be terminated
or cancelled with an escape key.

Instruction manual is included in DATAPLOT.DOC file. Additional information
related to the latest version is included in ADDENDUM.TXT file. Both files
can be printed on any text printer supporting tab and form feed. These 
files should be printed in 10 character/inch (cpi). DOS print, copy or
type commands can be used.


The remaining of this file  contains the latest information on DATAPLOT :

*****

DATAPLOT also works with IBM VGA display system, the following DOS command
may be required before starting DATAPLOT (use only when DATAPLOT cannot
find the graphic device) :

        MODE CO80


*****


***** End of DATAPLOT.TXT *****
```
{% endraw %}

## FILE1059.TXT

{% raw %}
```
Disk No: 1059
Disk Title: DataPlot
PC-SIG Version: S1.1

Program Title: DataPlot
Author Version: 1.10
Author Registration: $68.00.
Special Requirements: HPGL compatible plotter and CGA, EGA, or Hercules

Here's a useful two-dimensional plotting system for scientific and
engineering data which is powerful enough to produce publication-
quality graphs.

Capabilities include menu-driven operation; a full-function setup
editor; support for a variety of graph types, axis styles, and plot
styles; a save-to-disk capability; linear, and single-cycle/multiple-
cycle log plots; several plot styles; up to 10 curves in a single
graph; and support for most common graphic adapters and HPGL-compatible
plotters.
File Listings:

ADDENDUM TXT      6186   9-28-89
CURFIT   CNF       488   9-17-89  13:19
DATAPLOT DOC     39239   9-28-89
DATAPLOT EXE    142164   9-28-89
DATAPLOT TXT      1719   9-28-89
DECAY    CNF       788   2-07-88  12:20
DECAY    DAT      7560   5-08-89  21:03
DECAYLOG CNF       788   2-07-88  12:11
DPLOT123 WK1      1749   2-06-88  15:01
DPLOTSYM MLB       290   1-16-88  17:05
ELEV     CNF       438   5-15-89  20:50
ELEV     DAT      1617  11-12-87  11:27
FITTED   DAT      5081  12-09-87  21:28
INSTALL  EXE     34774   9-28-89
LINEAR   CNF       438   2-01-88  17:39
MULTILOG CNF       488  10-09-89  22:23
MULTILOG DAT      3273   1-30-88  15:13
OILRATE  CNF       438   2-06-88  17:44
OILRATE  DAT      1090   2-06-88  17:35
PBCORE   CNF       388   2-01-88  17:38
PBCORE   DAT      1610   1-16-87  11:42
POLAR    CNF       488   9-27-89  22:17
POLAR    DAT     10013   9-27-89  20:53
PRNDRV   EXE     34276   9-28-89
RANDOM   DAT      2491   1-02-88  12:28
README   BAT       491   2-07-88
RFTEST   CNF       438   2-01-88  17:39
RFTEST   DAT     17316  12-09-87  21:17
SINE0    DAT      1911  11-09-87  22:04
SINE1    DAT      1900   7-23-87  19:45
SPLINE   CNF       388   4-29-89  23:04
TYPECURV CNF       438  10-09-89  18:35
TYPECURV DAT       739   2-07-88  13:06

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1059

     Volume in drive A has no label
     Directory of A:\

    ADDENDUM TXT      6186   9-28-89
    CURFIT   CNF       488   9-17-89   1:19p
    DATAPLOT DOC     39239   9-28-89
    DATAPLOT EXE    142164   9-28-89
    DATAPLOT TXT      1719   9-28-89
    DECAY    CNF       788   2-07-88  12:20p
    DECAY    DAT      7560   5-08-89   9:03p
    DECAYLOG CNF       788   2-07-88  12:11p
    DPLOT123 WK1      1749   2-06-88   3:01p
    DPLOTSYM MLB       290   1-16-88   5:05p
    ELEV     CNF       438   5-15-89   8:50p
    ELEV     DAT      1617  11-12-87  11:27a
    FILE1059 TXT      2157  11-21-89   4:21p
    FITTED   DAT      5081  12-09-87   9:28p
    GO       BAT        38   5-23-88   2:27p
    GO       TXT       540   5-23-88   2:28p
    INSTALL  EXE     34774   9-28-89
    LINEAR   CNF       438   2-01-88   5:39p
    MANUAL   BAT       147   5-23-88   2:27p
    MULTILOG CNF       488  10-09-89  10:23p
    MULTILOG DAT      3273   1-30-88   3:13p
    OILRATE  CNF       438   2-06-88   5:44p
    OILRATE  DAT      1090   2-06-88   5:35p
    PBCORE   CNF       388   2-01-88   5:38p
    PBCORE   DAT      1610   1-16-87  11:42a
    POLAR    CNF       488   9-27-89  10:17p
    POLAR    DAT     10013   9-27-89   8:53p
    PRNDRV   EXE     34276   9-28-89
    RANDOM   DAT      2491   1-02-88  12:28p
    README   BAT       491   2-07-88
    RFTEST   CNF       438   2-01-88   5:39p
    RFTEST   DAT     17316  12-09-87   9:17p
    SINE0    DAT      1911  11-09-87  10:04p
    SINE1    DAT      1900   7-23-87   7:45p
    SPLINE   CNF       388   4-29-89  11:04p
    TYPECURV CNF       438  10-09-89   6:35p
    TYPECURV DAT       739   2-07-88   1:06p
           37 file(s)     324377 bytes
                           19456 bytes free
