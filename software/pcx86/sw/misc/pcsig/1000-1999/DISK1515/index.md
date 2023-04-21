---
layout: page
title: "PC-SIG Diskette Library (Disk #1515)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1515/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1515"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XYPLOT"

    XYPLOT provides you with a precise graph of your data for better
    visualizing mathematical, scientific, engineering, or business
    information.
    
    This versatile program displays and prints fully calibrated XY graphs of
    up to 1500 plotted points drawn from equations, individually inputted
    data, or imported "fixed length record" data files common to most
    spreadsheets and databases.  X versus Y plots can be produced in a
    variety of line textures.  X and Y axes may be linear or logarithmic.
    The aspect ratio of the graphs may be selected as 1.5 or 1. This
    permits complex data such as a sine versus a cosine to be displayed as a
    circle rather than an ellipse.  Display resolution can be 640 x 350
    pixels (EGA) or 640 x 200 pixels (CGA).  Mouse compatible, but not
    required.
    
    Program Limitations:  HP Laser printing, curve approximations, and bar
    graphs only available in registered version.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1515.TXT

{% raw %}
```
Disk No: 1515                                                           
Disk Title: XYPlot                                                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: XYPlot                                                   
Author Version: 1.2                                                     
Author Registration: $25.00                                             
Special Requirements: CGA and an Epson compatible printer.              
                                                                        
XYPLOT provides you with a precise graph of your data for better        
visualizing mathematical, scientific, engineering, or business          
information.                                                            
                                                                        
This versatile program displays and prints fully calibrated XY graphs of
up to 1500 plotted points drawn from equations, individually inputted   
data, or imported "fixed length records" data files common to most      
spreadsheets and databases.  X versus Y plots can be produced in a      
variety of line textures.  X and Y axes may be linear or logarithmic.   
The aspect ratio of the graphs may be selected as 1.5 or 1. This permits
complex data such as a sine versus a cosine to be displayed as a circle 
rather than an ellipse.  Display resolution can be 640 x 350 pixels     
(EGA) or 640 x 200 pixels (CGA).  Mouse compatible, but not required.   
                                                                        
Program Limitations:  HP Laser printing, curve approximations, and bar  
graphs only available in registered version.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## XYP.DOC

{% raw %}
```




                                    XYPlot 
                              XY Graphics Display

                             Shareware Version 1.2


                              (c) copyright 1990 


                                 David Arnold
                               Argonaut Systems
                      15466 Los Gatos Boulevard #109-314
                              Los Gatos, CA 95030




        XYPlot is distributed in shareware.  This is an opportunity to 
        test and evaluate software before you buy it.  You may freely 
        distribute unmodified copies of XYPlot.  

        If you are going to use XYPlot please enclose a check or money 
        order for $25.  You will receive the registered version of 
        XYPlot which will remove the shareware introduction and add your
        name to the Argonaut Systems mailing list.  This will keep you
        informed of new releases and new software. 

                        
                                    XYPlot

                               TABLE OF CONTENTS
                                        
                                                                                        
        1.0 Introduction.............................................1 


        2.0 Display description......................................3 

         2.1 Default Display.........................................3 

         2.2 Interactive Commands....................................3 

           2.2.1  Color..............................................4 

           2.2.2  Cursor.............................................5 

           2.2.3  Display............................................5 

           2.2.4  Display format.....................................6 

           2.2.5  Exit to DOS........................................7 

           2.2.6  Function keys......................................7

           2.2.7  Grid...............................................7

           2.2.8  Labels.............................................8

           2.2.9  Scales.............................................9

           2.2.10 Select data........................................9

        3.0 Files...................................................10

        4.0 License Agreement.......................................10

                                    XYPlot


        1.0  INTRODUCTION
                                                                      
        
        XYPlot is a general purpose program that may be used as a 
        stand alone program to display fully calibrated XY graphs of 
        data from any source that can generate data files in the 
        "fixed length record" format, such as database programs, 
        accounting programs, sequential files generated in BASIC, etc.  
        Data may also be input manually.  The maximum number of data 
        points is 1500.  XYPlot is a useful tool for engineering, 
        sales, marketing, etc. applications. 

        Resolutions of 640 x 350 pixels (EGA) or 640 x 200 pixels 
        (CGA) may be selected.  The high resolution color choice 
        requires the Enhanced Graphics Adapter (EGA).  The 320 x 200 
        pixel color graphics mode is not used because the resolution 
        is inadequate for useful XY graphics. 

        XYPlot displays X versus Y plots in a variety of line 
        textures.  Bar charts may also be displayed in two or three 
        dimensions.  X and Y axes may be linear or logarithmic.  B 
        spline smoothed curves and least squares straight lines may be 
        generated.  The aspect ratio of the graphs may be selected as 
        1.5 or 1.  This permits complex data such as a sine versus a 
        cosine to be displayed as a circle rather than an ellipse. 

        XYPlot supports a mouse as well as a cursor that is 
        manipulated by the arrow keys. 

        The displays of XYPlot may be printed on an Epson compatible 
        dot matrix printer or a HP LaserJet printer.

        To execute XYPlot use the following syntax: 

        XYP [[Xfilename]][[,Y1filename]][[,Y2filename]]...[[,Y5filename]]

        where:  Xfilename is the name of the X (real) axis filename; 
        alternatively, enter L for a linear X axis

        Y(n)filename are the names of up to five Y (imaginary) axis filenames

        If no arguments are entered with XYP, the screen will prompt 
        for manually entered data or for the filenames you wish to 
        display. 








                                       1

        Example 1:

                XYP L,Y1,Y2,Y3,Y4,Y5 [Enter]

        The initial display will be a monochrome continuous line XY graph 
        of the data in Y1 versus a linear X axis.  Y2 may be selected for 
        display by typing SD [Enter] 2 [Enter].  Y1 through Y5 may be 
        displayed simultaneously by typing NG [Enter] before typing SD.  
        With no grid in effect the screen is not erased and the scale is 
        not changed when succcessive Y axis data inputs are selected by 
        SD.  The line texture and/or color of each trace may be selected 
        to be unique.  The data may also be compared in side by side bars 
        or stacked bars.  The bars may be displayed in two or three 
        dimensions and in color or with patterns to distinguish each data 
        segment.  Labels may be entered at fixed locations on the display 
        or located with the cursor anywhere on the display.  Type Q 
        [Enter] to return to DOS. 

        Example 2:

                XYP SINE,COSINE [Enter]

        The initial display will be a monochrome continuous line XY graph 
        of a sine wave on the X axis versus a cosine wave on the Y axis.  
        The aspect ratio will be 1.5, thus, the display will be an 
        ellipse.  The aspect ratio may be changed to 1 by typing AR 
        [Enter].  The display will now appear as a circle.  Type Q 
        [Enter] to return to DOS. 

        Example 3:

                XYP L,SALES.TXT,FCST.TXT [Enter]

        You wish to display sales and forecast data derived from dBASE 
        versus time.  Using dBASE, copy your sales database field to file 
        SALES.TXT and your forecast database field to file FCST.TXT.  
        This is accomplished by using the SDF type option, e.g., COPY TO 
        SALES WITH SDF.  This automatically appends the .TXT extension to 
        the file.  The L argument will cause XYPlot to initially display 
        your sales versus a linear axis.  You may change the X axis 
        labels to reflect the time period of interest by typing XMIN 
        [Enter] followed by the name of the first month, week, etc. and 
        typing XMAX [Enter] followed by the name of the last month, etc.  
        Overlay the forecast data by typing NG [Enter] SD [Enter] 2 
        [Enter] C2 [Enter] D [Enter].  NG does not clear the screen 
        before displaying the next curve.  SD 2 selects the FCST.TXT 
        file.  C2 selects a dashed line and D displays all of these new 
        parameters overlayed on the original curve. 





                                       2

        2.0  DISPLAY DESCRIPTION
                       
        XYPlot provides flexibility in display format, color, scaling, 
        etc. by use of interactive commands that may be displayed on the 
        monitor when you type HELP [Enter] or press F1.  
                                                         
        The initial XYPlot header display will be replaced by a XY graph 
        display when any key is pressed.  The initial header display may 
        be bypassed on subsequent calls to XYPlot by typing SET [Enter] 
        after the XY graph and the interactive prompt appears.  The 
        screen will prompt: 

        (E)GA or (C)GA

        Responding with E will bypass the initial screen and display the 
        XY graph with 640 x 350 pixel resolution each time XYPlot is 
        called.  Likewise, typing C will bypass the initial screen and 
        display with 640 x 200 pixel resolution.  Typing any other key 
        will not change the operation of XYPlot and the initial screen 
        will be displayed. 

        
        2.1  Default Display 
                             
        The XY graph is drawn on the screen, fully calibrated with 
        default display parameters.  This default display may be modified 
        at will to change scales, labels, colors, etc. 
                                                               
        The default display is a monochrome, solid line, XY graph of the 
        X axis versus the first Y axis data that you entered as arguments 
        after typing XYP.  This display is fully calibrated with minimum 
        and maximum values displayed.  The grid displayed is open with 
        tick marks around the inside periphery of the graph frame.  Both 
        the X and Y axes scales are linearly divided into 10 units.  If 
        the data has negative values, a solid zero line will be 
        displayed.  
                                            

        2.2  Interactive Commands           
                                            
        Practically every parameter of the display may be modified with 
        the entry of interactive commands.  A small rectangle will appear 
        on the lower left corner of the monitor screen when the XY graph 
        is displayed.  This is a prompt for the interactive commands.  
        Commands may be input when this prompt is displayed and followed 
        by pressing Enter.  The interactive commands may be concatenated 
        before displaying the data because the new parameters will not be 
        displayed until the command D [Enter] is used.  Typing HELP 
        [Enter] or F1 will enable you to enter the same commands from a 
        screen display.  A few of the commands may entered with the 
        function keys.  A list of the function key commands may be 
        displayed by typing K [Enter]. 


                                       3

        2.2.1 COLOR

        The color commands are only active in the 640 x 350 pixel (EGA) 
        resolution mode. 

        CM  {color menu}--Type CM [Enter] to display a list of color 
        commands and the palette of 64 color selections.  A row of eight 
        colors are displayed in the middle of the screen with the number 
        representing the color printed directly above the color.  You can 
        observe all 64 colors eight at a time by pressing any key to 
        display each successive group of eight colors.  Press PgUp to 
        display previous group of eight colors.  Press End to exit the 
        color palette display selection.  At this time you may enter new 
        commands and return to a graphics display.  The background color 
        is black when the color menu is called. 
        
        CLB  {color labels}--Type CLB [Enter] to change color of labels 
        on the graph.  Enter the desired color number when prompted.  The 
        label color will instantly change. 
                      
        CLN  {color graph lines}--five choices of colors are available to 
        color the graph lines so overlays of data selected by SD may be 
        displayed with separate colors for each Y database.  Type CLN 
        [Enter] and enter the five desired color numbers when prompted. 
                            
        CFR  {color graph frame}--Type CFR [Enter] to color the 
        rectangular frame of the XY graph.  Enter desired color number 
        when prompted.                        

        CBK  {color background}--The background may be changed to a 
        desired color by typing CBK [Enter].  Enter a color number when 
        prompted.  The background color will instantly change. 

        CGB  {color grid background}--The background within the grid 
        frame may be colored separately from the rest of the background 
        by typing CGB [Enter] and entering the desired color number when 
        prompted.                                
                  
        CGR  {color grid}--Type CGR [Enter] to color the grid lines.  
        Enter the desired color number when prompted.  
                                                       
        COL  {color bar outline}--Type COL [Enter] to color the outline 
        of wide and stacked bar displays and the shading in 3D displays.  
        The default color is white. 









                                       4

        2.2.2 CURSOR

        CR  {cursor}--A cursor represented by + may be called by typing 
        CR [Enter].  If a mouse is present the cursor will be an arrow 
        and the mouse will be used to move the cursor.  The cursor 
        appears near the center of the screen.  Move the cursor with the 
        arrow keys or the mouse.  The + cursor will speed up if 
        continuously moved in the same direction.  Reverse directions to 
        slow the + cursor and to permit precise location of the cursor.  
        Press Home (the left button if a mouse is used) to display the X 
        and Y levels in units of the graph data across the top of the 
        graph.  You can resume movement of the cursor after pressing Home 
        to select a new location at which you wish the X and Y levels.  
        Exit the cursor routine by pressing End (the right button if a 
        mouse is used.) 

        MS  {toggle cursor}--The default cursor is an arrow which is 
        moved with the mouse if a mouse is detected by XYPlot otherwise 
        the cursor is a +.  Select use of the arrow keys and the + cursor 
        by use of the MS command.  Using MS a second time returns to the 
        mouse cursor.  MS has no effect if a mouse is not present. 


        2.2.3 DISPLAY

        D  {display}--Before any of the interactive commands except CLB 
        and CBK, actually modify the display you must press D [Enter].  
        You can enter all the desired modifications before pressing D 
        [Enter] or you can use D [Enter] after each command to observe 
        the results.                                            

        R  {restore default display}--If you wish to return to the 
        default display parameters, press R [Enter].  The display will 
        return to the original default parameters for the database record 
        presently being displayed. 

        PR  {print screen}--If is desired to print the graphics display 
        on Epson compatible dot matrix printer or HP LaserJet you may 
        type PR [Enter].  (Note: The DOS command GRAPHICS may be put in 
        your AUTOEXEC.BAT file to use Shift PrtSc to print graphics data.  
        Unfortunately, GRAPHICS.COM only supports the lower resolution 
        graphics (640 x 200).  The XYPlot printer driver will print the 
        640 x 350 graphics as well as 640 x 200 graphics.) 

        CS  {clear screen}--Type CS [Enter] to erase screen.
 
 






                                       5

        2.2.4 DISPLAY FORMAT

        C  {continuous line plot} (default)--Press C [Enter] to produce a 
        solid continuous line plot of the data as used in the default 
        display.                
                                               
        C1  {dashed line plot}--Press C1 [Enter] to produce a dashed line 
        plot of the data. 
           
        C2  {dotted line plot}--Press C2 [Enter] to produce a dotted line 
        XY graph.     
              
        C3  {dot dash dash plot}--Press C3 [Enter] to produce a dot dash 
        dash plot. 

        C4  {dash dot dot dot dot dot plot}-- Press C4 [Enter] to produce 
        dash dot etc. plot. 

        P  {point plot}--Press P [Enter] to display dots at the data 
        point locations only--no line will be displayed between or 
        connecting the data points.          
              
        B  {bar chart}--Press B [Enter] to display bars (line width) 
        drawn from the data points to the zero level. 
                                                      
        WB  {wide bar chart}--Type WB [Enter] to display bars with width 
        greater than a line.  The bar will be filled with a pattern if 
        the monochrome mode is used. If the color mode is used you will 
        be prompted on the screen to select either a pattern or a solid 
        color for the bars.  If you select color by pressing C [Enter] 
        you will enter up to five color numbers.  The X axis grid tick 
        marks will be moved to the center of the bars. 
              
        SB  {stacked bar chart}--Type SB [Enter] to display multiple bars 
        stacked  vertically.  Different patterns will fill each bar 
        segments in the monochrome mode while you have a choice of 
        filling the bar with color or patterns in the color mode.  
        Stacked bars are always displayed with zero as the base line of 
        the chart--negative values are not shown in this mode.  The X 
        axis grid tick marks will be moved to the center of the bars. 
                                                                  
        2D  {two dimensional bar display} (default)--Type 2D [Enter] to 
        display bar charts in two dimensions. 

        3D  {three dimensional bar display}--Type 3D [Enter] to display 
        bar charts in three dimensions. 
                              
        SM  {smoothed curve}--A B spline smoothed curve may be 
        overlayed on the XY graph by typing SM [Enter].  The B spline 
        curve X axis and Y axis data will automatically be saved in files 
        XSM and YSM, respectively, on your disk. 
 
 
 
                                       6
 
        LS  {least squares straight line}--A straight line that is a 
        least squares approximation of the XY graph will be overlayed on 
        the XY graph display by typing LS [Enter].  The straight line X 
        axis and Y axis data will automatically be saved in files XLS and 
        YLS, respectively, on your disk. 


        2.2.5 EXIT TO DOS

        Q  {quit}--Press Q [Enter] to exit display and return to DOS. 
              

        2.2.6 FUNCTION KEYS

        K  {function key legend}--A list of the function keys and the 
        commands invoked may be displayed by typing K [Enter].  The keys 
        are designated as follows: 

                        F1      HELP
                        F2      CM   (color menu)
                        F3      R    (restore default display)
                        F4      D    (display XY graph)
                        F5      PR   (print screen)
                        F6      AR   (toggle aspect ratio)
                        F7      NEW  (select new filenames)
                        F8      CR   (cursor)
                        F9      CS   (clear screen)
                        F10     Q    (quit)
                                               

        2.2.7 GRID

        OG  {open grid} (default)--Type OG [Enter] to achieve the default 
        display of a grid frame with calibrated tick marks around the 
        inside periphery.             
              
        FG  {full grid}--Type FG [Enter] to draw full, calibrated X and Y 
        dotted grid  lines across the graph.     
                                                       
        NG  {no grid, no erase}--Type NG [Enter] if you do not wish to 
        display a grid  or if you wish to overlay C, C1, C2 or B graph 
        formats for data comparison in- stead of using wide or stacked 
        bars, e.g., you are displaying data Y1filename with C format and 
        wish to overlay Y2filename and Y3filename data.  First type NG 
        [Enter] followed by SD [Enter] 2 [Enter] C1 [Enter] and D 
        [Enter].  The display will still be calibrated with graphs of 
        Y1filename data and Y2filename overlayed with a dashed line.  Now 
        type SD [Enter] 3 [Enter] C2 [Enter] and D [Enter].  All three 
        database graphs will be displayed--the first will have 
        continuous, solid line; the second will have dashed line; the 
        third will have a dotted line.  Each of the graphs may be 
        displayed with a separate color as well (see 2.2.1 color command 
        CLN).                                    
                
 
                                       7

        GX, GY  {grid divisions equal to number of data points}--If it is 
        desired to have the same number of grid divisions as there are 
        data points, type GX [Enter] for the X axis and GY [Enter] for 
        the Y axis, e.g., you X axis data has 12 linear digits 
        representing the 12 months of the year.  The GX command will 
        generate a calibration or tick mark at each one of these numbers 
        or months.  (Note: wide bars and stacked bars will have the tick 
        marks moved to the center of the bars.) 
                                                             
        GX10, GY10  {10 grid divisions for X and Y axes} (default)--The 
        default condition of 10 divisions for the calibration tick marks 
        may be selected by GX [Enter] for the X axis and GY10 [Enter] for 
        the Y axis.                      
                                 

        2.2.8 LABELS

        LAB  {locatable labels}--Type LAB [Enter] and you may input up to 
        40 labels that can be positioned anywhere on the screen.  A 
        prompt to enter each label appears in the upper left corner of 
        the screen.  Move the cursor to the position you want the  label 
        with the arrow keys or the mouse.  Press Enter.  You will be 
        prompted for another label.  If you have no more labels, press 
        Enter again.  You will be asked by a message at the top left of 
        the screen if you have any more labels.  If you wish to stop 
        inputting labels, press Enter again.  
                                                               
        XLAB  {X axis label}--Type XLAB [Enter] to input a label for the 
        X axis.  The   label will be displayed centered below the X axis.
                    
        YLAB  {Y axis label}--Type YLAB [Enter] to input a label for the 
        Y axis.  This  label will be displayed about the middle of the Y 
        axis beginning at the left side of the screen. 
                                                             
        GLAB  {graph label}--A graph label that appears centered below 
        the X axis label may be input by typing GLAB [Enter]. 
                                                             
        XMIN, XMAX, YMIN, YMAX  {labels in characters vice numerical data 
        levels}--The  calibrated XY graph automatically displays the 
        minimum and maximum value for both the X and Y axes.  If you 
        desire to change any or all the labels you may type XMIN [Enter], 
        XMAX [Enter], YMAX [Enter], or YMAX [Enter].                 
                   
        LEG  {bar pattern or color legend}--When using wide bar or 
        stacked bar charts it is often useful to have a legend that 
        identifies each bar or bar segment.  Type LEG [Enter] and a small 
        square for each of the colors or patterns used by the bar display 
        will appear on the left side of the screen with space for a label 
        after each square.  If the colors are changed the legend colors 
        will also changed to match.   
                                                                



                                       8

        2.2.9 SCALES

        XS, YS  {expand X and Y scales}--You may change the minimum and 
        maximum limits of both the X and Y axes by typing XS [Enter] and 
        YS [Enter], respectively, and responding to the prompts Xmin, 
        Xmax, Ymin, and Ymax.    
                                               
        LX, LY  {linear axis display} (default)--LX [Enter] and LY 
        [Enter] select a linear X and Y axis display as in the default 
        display.                          
                
        LGX, LGY  {log axis display}--LGX [Enter] and LGY [Enter] produce 
        a logarithmetic display of the data in X and Y axes respectively.  
        Of course, negative data cannot be logrithmically displayed.  The 
        grid remains calibrated  with the display. 
                    
        AR  {toggle aspect ratio}--The default aspect ratio of the XY 
        graph is 1.5.  Type AR [Enter] to toggle the display to an aspect 
        ratio of 1.  This permits of display of complex data such as a 
        sine versus a cosine to be displayed as a circle rather than an 
        ellipse.  Type AR [Enter] to return to the default aspect ratio. 


        2.2.10 SELECT DATA

        SDn  {select Y axis data}--If more than one Y axis filenames have 
        been entered you may select any of these data by typing SD 
        [Enter] followed by the number of the Y axis filename you wish to 
        display.  Press Enter after the number is typed.  Up to five 
        filenames may be selected.   

        NEW  {select new data}--Type NEW [Enter] to input new filenames 
        or manually enter data for both the X and Y axis.  The maximum 
        number of data points is 1500.  Manually entered data will be 
        stored in filenames XMAN and YMAN. 

        RS  {restore saved screen}--If you have saved a screen to a file 
        on your disk using the SV command it may be recalled by typing RS 
        [Enter] followed by the filename that you entered when saving the 
        screen.  The colors, format, etc. will be restored on the monitor 
        screen.  Return to the regular display by pressing R [Enter]. 

        SV  {save screen to file}--You may save a display to a file on 
        your disk by typing SV [Enter].  Use RS to restore the saved 
        screen to your monitor for later viewing or printing. 







                                       9

        3.0 FILES

        The files included with XYPlot are: 

        XYP.EXE         Main XYPlot program

        XYP.DOC         Instructions on the use of XYPlot

        Y1              Sample Y axis data

        Y2              Sample Y axis data

        Y3              Sample Y axis data

        Y4              Sample Y axis data

        Y5              Sample Y axis data

        SINE            Sample sine data

        COSINE          Sample cosine data




        4.0  LICENSE AGREEMENT

        XYPlot (XYP) XY graphics display software is copyrighted by 
        Argonaut Systems.  Under copyright laws there are penalties 
        for making unauthorized copies.  You may make copies of the 
        shareware version and freely distribute these copies.  Any 
        copy you make must include reproduction of the copyright 
        notice.  

        Argonaut Systems makes no express or implied warranty for the 
        software which is provided solely on an "as is" basis.  
        Argonaut Systems disclaims all conditions and warranties, 
        whether expressed or implied with regard to the software, 
        including all implied conditions or warranties of 
        merchantability and fitness for a particular purpose.  
        Argonaut Systems shall not have any liability or 
        responsibility of any kind including special, indirect or 
        consequential damages, arising out of or resulting from such 
        software or the use or modification thereof. 




































                                       9





        Argonaut Systems                                    ORDER FORM
        ______________________________________________________________

        Send me a copy of:

                [ ]  Sales Call Reports/Customer List (SCR)       $35
        
                [ ]  XYPlot (XYP) Complex data XY graphics        $25
                     display
        
                [ ]  Prospect List and Analysis (PLAN)            $89
        
                [ ]  Advertising Response Manager (ARM)           $25
        
                [ ]  Sales Commission Tracker (SCT)               $45

        (all software includes registration, online manual, additional 
        features, update and new release notification)
        
                [ ]  I need more information on_______________________

        ______________________________________________________________

        CA residents add 7% tax
        [ ]  Check or money order

                Phone (____)___________________________ext____________

                Signature_____________________________________________

        Name______________________________Title_______________M/S_____

        Company_______________________________________________________

        Address_______________________________________________________

        City___________________________________State_____Zip__________

                                (please print)

            15466 Los Gatos Boulevard #109-314  Los Gatos, CA 95030
                                (408) 867-5029

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1515

     Volume in drive A has no label
     Directory of A:\

    XYP      EXE    111448   7-13-90   8:12a
    XYP      DOC     29968   7-14-90   8:18p
    Y1                 156  12-18-88  10:09p
    Y2                 170  12-18-88  10:09p
    Y3                 170  12-18-88  10:09p
    Y4                 160  12-18-88  10:07p
    Y5                 170  12-18-88  10:08p
    SINE              3339  11-26-88  10:03p
    COSINE            3334  11-26-88  10:05p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   8-07-89   9:19a
    MANUAL   BAT       147   8-07-89   9:20a
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        39   8-07-89   9:20a
    FILE1515 TXT      2295   8-14-90   2:29p
           15 file(s)     152453 bytes
                            3072 bytes free
