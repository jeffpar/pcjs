---
layout: page
title: "PC-SIG Diskette Library (Disk #1863)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1863/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1863"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MATHPLOT"

    MATHPLOT is a set of graphics-aided programs designed to help
    scientists and engineers analyze data.  Routines are included for
    least-squares fitting polynomials to sets of data points, solving
    simultaneous linear equations, numerically integrating a curve defined
    by a set of data points, calculating simple statistical parameters for
    data sets, and for calculating the coefficients of a Fourier series for
    a periodic function described by a set of data points.
    
    Programs are also included for calculating and plotting Fourier spectra
    and Bessel functions, for plotting data sets and for plotting and
    comparing user-specified functions with data sets.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1863.TXT

{% raw %}
```
Disk No: 1863                                                           
Disk Title: Mathplot                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: MATHPLOT                                                 
Author Version: 2.2                                                     
Author Registration: $25.00                                             
Special Requirements: Graphics Adapter (Herc, CGA, EGA, VGA) Graphics Pr
                                                                        
                                                                        
MATHPLOT is a set of graphics aided programs designed to help           
scientists and engineers analyze data.  Routines are included for       
least-squares fitting polynomials to sets of data points, solving       
simultaneous linear equations, numerically integrating a curve defined  
by a set of data points, calculating simple statistical parameters for  
data sets, and for calculating the coefficients of a Fourier series     
for a periodic function described by a set of data points.              
                                                                        
Programs are also included for calculating and plotting Fourier spectra 
and Bessel functions, for plotting data sets and for plotting and       
comparing user-specified functions with data sets.  Screen graphics     
capabilities are used by most of the programs, and the host computer    
must be equipped with a graphics card and monitor (CGA, EGA, VGA, MCGA  
or Hercules).  MATHPLOT detects which graphics hardware is present and  
provides the appropriate drivers.                                       
                                                                        
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
║                 <<<<  Disk #1863  MATHPLOT  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: MATHPLOT                                        ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.TXT PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INVOICE.TXT

{% raw %}
```
                              INVOICE

        Date: ________________

        Remit to:                           From:

        J. H. McCrary                       ___________________________
        1708 Pomona Drive                   ___________________________
        Las Cruces, N. M. 88001             ___________________________
        Ph. 505-522-9327 or 522-0805        ___________________________


        Qty                           Unit price               Total

        ___   MATHPLOT                  $25.00                ______
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
 











                            - - M A T H P L O T - -

                                  Version 2.2






                          graphics aided mathematics 

                               for data analysis






















                                 J. H. McCrary
                               1708 Pomona Drive
                            Las Cruces, N. M. 88001
                            505-522-0805 or 522-9327

                                   May 1989

       




                            (C) J. H. McCrary (1989)  









                                                                mathplot 







                                  Table of Contents

                                                           page

               Introduction                                  1

               Files on distribution disk                    1

               Starting MATHPLOT                             2

               Main menu                                     3
  
               Hardcopies of graphics screens                3

               Least squares                                 4

               Simultaneous equations                        8

               Numerical integration                        10

               Matrix inversion                             12

               Fourier series                               14

               Bessel functions                             17

               Statistics                                   18

               Data plots                                   21

               Function plots                               23

               Data files                                   26




             ___________________________________________________
            
              MATHPLOT requires an IBM-PC/XT/AT (or compatible)
              computer with at least 256 kbytes of RAM,  PC-DOS
              2.0  or  higher, an  IBM  CGA, EGA, VGA  or  MCGA
              graphics card (or compatible), or a Hercules Gra-
              phics Card (or compatible) with appropriate moni-
              tor.   For printed output (text and  graphics) an
              Epson MX, FX or LQ series (or compatible) printer
              is required. 
             ___________________________________________________   
  




                                      i




                                                                mathplot



                            - - M A T H P L O T - -



            Introduction:
     
                 MATHPLOT is a set of graphics aided programs desig-
            ned to help scientists and engineers analyze data.  Rou-
            tines are included for least-squares fitting polynomials 
            to sets of data points,  solving simultaneous linear eq-
            uations,  numerically integrating a curve  defined by  a 
            set of data points, calculating simple statistical para-
            meters for  data  sets,  and for calculating the coeffi-
            cients of a Fourier series  for  a periodic function de-
            scribed by a set of data points.   Programs are also in-
            cluded for calculating and plotting Fourier  spectra and
            Bessel functions,  for plotting data sets and  for plot-
            ting and comparing  user-specified  functions with  data
            sets.  Screen graphics  capabilities are used by most of
            the programs,  and the host computer  must  be  equipped
            with a graphics card and monitor (CGA, EGA, VGA, MCGA or
            Hercules).  Mathplot detects which  graphics hardware is
            present  and provides the appropriate drivers.  The dis-
            tribution disk contains the following files:
       

                    Filename                Function

                  mathplot.exe            main system file 
                     poly2.mpd            sample data
                     poly3.mpd                 "
                     poly4.mpd                 "
                   fplsinx.mpd                 "
                   foursqr.frd                 "
                   fouramp.frd                 "
                    simeq2.sim                 "
                    simeq4.sim                 "
                    simeq6.sim                 "
                   matrix2.inv                 "
                   matrix3.inv                 "
                    manual.txt            owners manual
 

                 MATHPLOT.EXE is  compatible with  computers with or
            without a numeric co-processor.  If a numeric co-proces-
            sor is present in the  host computer, it is detected and
            utilized by  MATHPLOT in its math intensive  operations.
            The system file requires IBM-PC or MS DOS version 2.0 or
            higher.

                 The  hardware  requirements to utilize all  of  the 
            features of MATHPLOT are as follows:
   
     

                                     

                                      1




                                                                mathplot



                 *  IBM PC (or compatible) with one disk drive.
                 *  Color or monochrome graphics capability.
                 *  Epson MX or FX printer (or compatible).
                 *  numeric math co-processor (optional).
                 *  256 Kbytes of RAM.


            Starting MATHPLOT:

                 The differences  between MATHPLOT  Versions 2.2 and
            2.1 are the following: (1) the number of data points the
            programs can handle has been increased from  100 to 200,
            (2) logarithms (base e and base 10) can now be taken for
            data point coordinate  values in the  Least Squares pro-
            gram,  (3) the ESCape key can be used from any prompt in
            any program to return to the previous menu.

                 A  working disk should be prepared by  copying  the 
            appropriate MATHPLOT files to a formatted floppy disk or 
            to a directory on a fixed disk.   Such a disk should not 
            be  write  protected  since data may be  written  to  it 
            during operation.  The following procedure is suggested.

                Insert the MATHPLOT system disk in drive A. Copy the
            MATHPLOT.EXE  file to the working disk in  Drive B or to
            the working directory on the hard disk.  Copy any or all
            of  the sample  data files  and the owner's  manual text
            file as desired.  The MATHPLOT working disk is now ready 
            for use.  
            
                 With the  working files in  the default  drive type
            MATHPLOT followed by ENTER.   The introductory screen is
            displayed  until a  key is pressed  after which the Main
            Menu (next page) appears.

                 Throughout all of the  MATHPLOT  programs,  various 
            menus  and data  input prompts  are presented.  When re-
            sponding to a  menu or to a  "Yes or No"  prompt,  it is 
            necessary  only to  press a single key  without pressing 
            the ENTER key.  When entering data or other mathematical
            parameters  (order of polynomial,  number  of equations,
            etc.), the ENTER key must be pressed after  entering the
            desired number.   At any prompt in any of the  programs,
            the ESC key may be used to return to the  previous menu.
            In most of the programs an opportunity is given  to have
            a quick  look or  "preview" of the data  on the graphics
            screen immediately after it has been entered and checked.










                                      2




                                                                mathplot



            main menu                                        8:34 am

     
                            - - M A T H P L O T - -


                     Select from the following options:
       
               
                         1 - Least squares fitted polynomial:
                         2 - Solution of simultaneous equations:
                         3 - Numerical integration:
                         4 - Matrix inversion:
                         5 - Fourier series:
                         6 - Bessel functions:
                         7 - Statistics:
                         8 - Data plot:
                         9 - Function plot:
                         0 - Data files:
                       ESC - Exit to DOS:


                     Enter selection:


                 The  mathematical  functions will be  discussed  in 
            separate sections to follow.  To leave MATHPLOT  and re-
            turn to DOS simply  press the ESCape key.  Selection  of
            option 0  causes the MATHPLOT data  files on the disk in
            the  default drive  (or directory) to  be listed  on the
            screen.  These data files  will also be discussed in the
            following sections. In all of the MATHPLOT programs, the
            prompt "press any key" is used at pauses in program flow.
            If ESCape is pressed at  this prompt,  the program  does 
            not continue  and control is  returned to  the menu  for 
            that program. 



            Hardcopies of Graphics Screens:

                 Hardcopies  of  MATHPLOT  graphics screens  can  be 
            printed by Epson (or compatible printers).  In order  to
            obtain  hardcopies of graphics  screens it is  necessary
            that programs  not supplied with  MATHPLOT be run before
            MATHPLOT is started. The procedure for making hardcopies
            be described below.








                  

                                      3




                                                                mathplot



                 A.  Hercules Monochrome Graphics Card
       
                      The  utilities program entitled  HGC.COM  sup-
                 plied  with  the Hercules card must be  run  before 
                 MATHPLOT is started.  The HGC.COM file must be of a 
                 recent  version (6/17/85 or later) and must contain 
                 the  Hercules PRINT routine.   To run this program,
                 insert the Hercules disk in the default drive, turn
                 the printer ON, and type HGC PRINT <enter>.   MATH-
                 PLOT  may then  be  started,   and from  a graphics
                 screen a hardcopy may be obtained by pressing SHIFT
                 PRTSC followed by 0 (zero). The screen dump process
                 takes about two minutes after which MATHPLOT opera-
                 tions may be continued.  Screen dumps from Hercules
                 clone cards generally are not possible. The user is
                 referred to the literature accompanying that card.

                 
                 B.  IBM CGA Graphics Card             

                      The  PC-DOS program named GRAPHICS.COM must be 
                 run before MATHPLOT is started.   To run this  pro-
                 gram,  insert a DOS disk in the default drive, turn 
                 the printer ON, and type GRAPHICS <enter>. MATHPLOT 
                 may  then be started,  and from a graphics screen a 
                 hardcopy  may be obtained by pressing  SHIFT PRTSC.  
                 The  screen  dump process takes about  two  minutes 
                 after which MATHPLOT operations may be continued.
       
                 It should be pointed out that difficulties with the 
            screen  dump process may be encountered if memory  resi-
            dent  programs  such as Sidekick or Prokey are  present.  
            If the computer locks up during or just after printing a 
            graphics screen,  the problem may be due to the presence 
            of one of these utilities.   The computer  should be re-
            booted with a DOS system disk which does not load memory
            resident programs.


                                                           least squares



            1.  Using the Least Squares program:

                 Pressing 1  from the  Main Menu causes  MATHPLOT to 
            enter the  Least Squares program.   This program  fits a
            polynomial of any order between 0 and 9 to a set of data
            points. Up to 200 data points may be used. For the poly-
            nomial to be  meaningful,  its order should be much less
            than the number of data  points.  The first screen after
            the Main Menu gives a brief  description of the program.
            Press any  key to continue to the  input phase,  and the
            following Least Squares Input Menu will be displayed.



                                      4




                                                           least squares



            least squares                                    8:48 am


                     Select from the following options;

                         1 - Retrieve data from disk file.
                         2 - Enter new data.
                         3 - Return to previous menu.
       
                     Enter selection:


                 The Input Menu is self explanatory,  but some  com-
            ments are in order. Data may be retrieved from a file in
            drive or directory, new data may be entered,  or control
            may be returned to the  previous menu by pressing  1, 2,
            or 3 respectively.  

                 If 1 is selected from the Least Squares Input Menu,
            all files in the default drive whose extension  is  .MPD
            (MathPlot Data) will be  listed  on the screen, and  the
            user will be asked to type the name  of the  file  to be
            used. If no files are present on the default drive disk,
            the message  "No .MPD files:"  will appear.  Data  files
            from any disk or directory may be used by typing the ap-
            propriate drive letter, path and filename.  The filename
            may be  entered in upper  or lower case letters  with or
            without the extension (.MPD). If the filename is entered
            incorrectly,  the  message  "file not found - try again"
            will appear until  the filename  is correctly entered or
            ESC is pressed.   If none of the  listed  files is to be
            used,  pressing ENTER or ESC from the "Enter file name:"
            prompt returns control to the Input Menu.  The distribu-
            tion disk  contains three sample data files,  POLY2.MPD,
            POLY3.MPD,  and POLY5.MPD  which can  be used to  demon-
            strate the Least Squares program.

                 After the .MPD data file has been read, the X and Y 
            coordinates of all the data points are displayed sequen-
            tially,  and the following data check menu is displayed.
            
              Press C (change data), G (graphic preview), S (save)
              ENTER to continue
              
            If C (or c) is pressed, the next prompts will be  "Press
            ENTER to register number,  ESC to exit"  and  "i = ?  ".
            The user enters the value of the index for the  data po-
            int to be changed.  Prompts are then given for new X and
            Y coordinate values.  This  process continues  until the
            user presses the ENTER or ESC key at the "i = ?" prompt.
            The data may  be viewed on the graphics  screen by pres-
            sing G from the data check menu.  Pressing S provides an
            opportunity  to save the  data to  a disk file  with the
           



                                      5




                                                           least squares



            .MPD  extension.   To continue with  the program,  press
            ENTER from the data check menu.

                 If 2 is selected from the Least Squares Input Menu,
            the user is prompted for the number of data points to be
            entered.   The number must be an  integer  between 3 and
            200.   The user is then prompted for X and Y coordinates
            of each point until all data  have  been  entered.   The
            data points may be entered in any  order since  they are
            later sorted in increasing values of  X.  After the data
            have been entered,  the data  check procedure  described
            above will give the user an  opportunity to make any ne-
            cessary changes.   New or changed data may be  previewed 
            on the graphics screen and saved to a .MPD disk file.
       
                 The  user is next prompted for,  "Order  of  fitted 
            polynomial, m = ?  ".   A positive integer between 0 and
            9 must be entered.  After a short time the least squares
            fitted polynomial  coefficients are displayed.  Pressing
            any key will display the Least Squares Menu as follows:
       

                                                                
            least squares                                    9:13 am


                  Select from the following options:
       
                     1 - Display results on graphics screen.
                     2 - Calculate projected values from polynomial.     
                     3 - Print copy of polynomial and data.
                     4 - Calculate another polynomial from these data.    
                     5 - More calculations with new data.
                     6 - Modify data set (interchange X,Y; log Y).
                     7 - Check/change data.
                     8 - Exit to main menu.
               
                  Enter selection:


                 Option  1 from the Least Squares Menu displays  the 
            data  points and the fitted polynomial on  the  graphics 
            screen.  The first  prompt  after selecting option 1 is:
            "Specify axis labels and ranges ?   Y or N".   Answering
            "N", "n" or  ENTER causes a graphics  display with auto-
            matically selected  axis labels and ranges.   This range
            includes all of the data points plus  an  additional 10%
            of the range  spanned  by  these  points.  Answering the
            prompt with "Y" or "y" results in additional prompts for
            axis labels and for minimum and maximum  values of X and
            Y to be plotted.  Axis label strings may include as many
            as 18 characters.   Additional characters are truncated.
           
            



                                      6




                                                           least squares


            
            The graphics screen shows the data points as X's and the
            calculated polynomial as a dotted  curve.   Vertical and
            horizontal axes pass through the origin of the  coordin-
            ate system.   To exit the graphics mode, any key may  be
            pressed,  and control will return  to the  Least Squares
            Menu.
       
                 Option  2  from the Least Squares Menu permits  the 
            calculation of values of Y from input values of X  using 
            the least squares fitted polynomial.   Prompts are given 
            for  values  of X,  and the calculated values of  Y  are 
            displayed.   All  such  projected values are  stored  in 
            memory  and  are printed out when option 3  is  selected 
            from this menu.  Pressing ESCape at the "X = ? "  prompt 
            returns control to the Least Squares Menu.
       
                 Option  3  prompts  the user  to enter  a print-out
            header.   This may be any  combination of as many  as 70 
            characters.   It is intended to permit the user to iden-
            tify the set of calculations being printed. This is fol-
            lowed by a prompt to turn on the printer. The polynomial
            coefficients,  all input data with calculated values  of
            Y for each input value of X,  and  all projected  values
            of Y along with their corresponding values of X are then
            printed.  Control is automatically returned to the Least
            Squares Menu after printing has stopped.
       
                 Option  4  results in a prompt for a value for  the 
            order of a new polynomial to be fitted to the same data.  
            Any  value from  0 through 9 may be selected (consistent
            with the number of data points).   Results from  the new
            calculations are presented as described above.  
       
                 Option 5  from the Least Squares Menu returns  pro-
            gram control to the Least Squares Input Menu, from which
            new data may be entered and new polynomials calculated.

                 Option 6 causes the display of a menu which permits
            the user to interchange the X,Y values for all points in
            the data set or to replace data set Y values with base e
            or base 10 logarithms  of the Y values.   Non-positive Y
            values are replaced with zero.   The interchange feature
            also permits logarithms to be taken of data set X values.

                 Option  7 permits the checking and changing of cur- 
            rent data prior to calculating new results. Changed data 
            may also be saved to a disk file with a .MPD extension.
            
                 Option 8 returns control to the MATHPLOT Main Menu.
         







                                      7
       



                                                                   simeq



            2.  Using the Simultaneous Equations program:

                 Selecting  option  2 from the Main Menu leads  into 
            the Simeq program and displays its introductory  screen. 
            Simeq  solves  a system of up to 12 simultaneous  linear 
            equations through the use of the matrix algebra equation 
            A(i,j)*X(i) = B(j).  Program input consists of the  mat-
            rices  A(i,j)  and B(j).  The coefficient matrix  A(i,j) 
            must be square and the column matrix B(j) must be of the 
            same  order.   Recall that in matrix notation the  first 
            subscript is the row number and the second is the column 
            number. The kth row in the coefficient matrix is made up
            of the coefficients in the kth equation
            
             A(k,1)*X(1) + A(k,2)*X(2)  + ... + A(k,n)*X(n) = B(k)
              
            If the determinant of  A(i,j) is zero, its inverse  does
            not exist and the problem cannot be solved.

                 Press any key and the Simeq Input Menu is displayed.  
            This menu is identical with the Least Squares Input Menu 
            described in Section 1. The options are treated slightly 
            differently however due to the format of the Simeq data.

                 If 1 is selected from  the  Simeq  Input Menu,  all
            files in the default drive whose extension is .SIM  will
            be listed on the screen and the user will  be  asked  to
            type the name of the file to be  used.  If  no files are
            present on the default drive disk, the message  "No .SIM
            files:" will appear. Data files from any drive or direc-
            tory  may be used by typing the  drive letter, path  and
            filename. The filename may be typed  in  upper  or lower
            case letters  with  or  without  the  extension  (.SIM). 
            If  the  filename is  entered incorrectly,  the  message
            "file not found - try again" will appear until the file-
            name is correctly entered or ESC is pressed.  If none of
            the listed files is needed,  pressing  ENTER or ESC from
            the "Enter file name:" prompt returns control to the In-
            put Menu.   The distribution  disk contains three sample
            files,  SIMEQ2.SIM, SIMEQ4.SIM, and SIMEQ6.SIM which can
            be used for demonstrating the program.
      
                 After  the .SIM data file has been read,  the  ele-
            ments of  the A(i,j)  matrix will be  displayed, and the
            following data check menu is displayed.
            
              press C (change data), ENTER to continue
              
            If C (or c) is pressed,  the next prompt will be  "Press
            ENTER to register number, ESC to exit"  followed by "i =
            ?  ".   Enter the row number of the matrix element to be
            changed followed by ENTER. The column number of the ele-
            ment to be changed is entered after the "j = ? " prompt.




                                      8




                                                                   simeq



            The correct value of the  matrix element  A(i,j) is then
            entered.  This process  continues until the user presses
            ENTER or ESC at the "i = ? " prompt.   Press ENTER again
            to continue.  The B(j) matrix is then displayed  and may
            be changed similarly.  Pressing S from the B matrix data
            check menu provides an opportunity to save the data to a
            disk file.
                 
                 If  2 is selected from  the  Simeq  Input Menu, the
            user  is prompted for the number  of linear equations to
            be solved.   The number must be an  integer  not  larger
            than 12.   The user is then prompted for each element of
            the A(i,j) matrix until all of the  elements  have  been
            entered.  The elements of  the B(j) matrix  are then en-
            tered in  a  similar  fashion.  After the data have been
            entered,  the  data check procedure described above will
            give the user an  opportunity to  make necessary changes
            in either  matrix and  to save the  data to  a .SIM disk
            file.  
       
                 After a short period of time,  the solution  matrix 
            X(i) is displayed.  Pressing any key will  result in the
            display of the Simeq Menu as follows.

                                                                
            simeq                                            9:31 am


                     Select from the following options:

                        1 - Print copy of problem and answer.
                        2 - More calculations with new data.
                        3 - Check/change data and recalculate.
                        4 - Exit to main menu.
               
                     Enter selection:


                 Option  1  prompts the user to  enter a header line
            and to then turn on the printer. The program than prints
            the input  matrices and the solution  matrix and returns
            control to the Simeq Menu after printing has ended.

                 Option  2 from the Simeq Menu returns program  con-
            trol to the Simeq Input Menu.   New data may be entered, 
            checked and saved and new sets of equations solved.
       
                 Option  3 permits the checking and changing of cur-
            rent data  prior to re-calculating new results.  Changed
            data may also be saved to a disk file.
       
                 Option 4 returns control to the MATHPLOT Main Menu.
       
           
           
           

                                      9




                                                               integrate



            3.  Using the Numerical Integration program:
       
                 Selecting 3 from the Main Menu  causes MATHPLOT  to
            enter the Integrate program and display its introductory
            screen.  Integrate computes  the integral of a  function
            which is defined by  up to 200 unequally spaced discrete
            function values  between the minimum and maximum  values
            of the independent  variable,  X.   The method  of cubic
            splines is used,  and a sort routine precludes  the need
            for entering  the data  points in any  particular order.
            After entering and checking the data,  they may be saved
            to a disk file and viewed on  the graphics screen by re-
            sponding appropriately to the prompts.
       
                 Depress  any  key and the Integrate Input  Menu  is 
            displayed. This menu is identical with the Least Squares 
            Input  Menu  described in Section 1 and the options  are 
            treated basically the same.
       
                 If 1 is selected from the Integrate Input Menu, all
            disk files in the default drive whose  extension is .MPD
            will be listed on the screen and the  user will be asked
            to type the name of the file to be used. If no files are
            present on the default drive  disk, the message "No .MPD
            files:" will appear.  A file from any drive or directory
            may be  used by typing the  drive letter, path and file-
            name.  The filename may be typed in upper or  lower case
            letters with or  without the  extension  (.MPD).  If the
            filename is  entered  incorrectly, the message "file not
            found - try again"  will  appear until the  filename  is
            correctly entered or ESC is pressed. If none of the lis-
            ted files is needed, pressing ENTER or ESC from the "En-
            ter file name:" prompt returns control to the Input Menu.
            The distribution disk contains three sample files, POLY-
            2.MPD,  POLY3.MPD,  and POLY5.MPD  which can be used for
            demonstrating the Integrate program.

                 After the .MPD data file has been read, the X and Y 
            coordinates  of  all the  data points  representing  the
            function to be integrated will  be displayed sequential-
            ly,  and the data check menu will appear.   This menu is 
            identical to the  one shown  and described on page 5  of 
            this manual. The user may change data coordinate values, 
            view a plot of the data on the graphics screen, save da-
            ta to a disk file or continue with the program from this
            menu.
       
                 If 2 is selected from the Integrate Input Menu, the
            user is prompted for the number of data points to be en-
            tered.  The number must be an integer between 3 and 200.
            The user is then  prompted for  X and Y  coordinates  of
            each point until all data have  been  entered.  The data




            
                                     10




                                                               integrate



            points may be entered in any order since  they are later
            sorted in increasing values of X.    After the data have
            been entered,  the data check procedure  described above
            will give the user an opportunity to  make any necessary
            changes and to save the data to a .MPD disk file.  
       
                 After a  short time,  the integral of Y(x)  between
            the lower  and upper  limits of  X is  displayed on  the
            screen.   Pressing any key will result in the display of
            the Integrate Menu as follows.
       
                                                                
            integrate                                        9:34 am


                     Select from the following options:
       
                        1 - Print copy of problem and answer.
                        2 - More calculations with new data.
                        3 - Check/change data and recalculate.
                        4 - Exit to main menu.
               
                     Enter selection:


                 Option  1  prompts the user  to enter a header line
            and to turn on the printer.  The program than causes the
            input data and the  results of the numerical integration
            calculation to be printed.  Control is automatically re-
            turned to the Integrate Menu after printing has ended.

                 Option  2 from the Integrate Menu  returns  program 
            control  to the  Integrate Input Menu.  New data may  be 
            entered, checked and saved and new integrals computed.

                 Option  3 permits the checking and changing of cur- 
            rent data prior  to recalculating new results.   Changed
            data may also be saved to a disk file. 

                 Option 4 returns control to the MATHPLOT Main Menu.

















                                     11



   
                                                           invert matrix



            4.  Using the Matrix Inversion program:

                 Selecting 4 from the Main Menu results in the  dis-
            play of the introductory screen for the Matrix Inversion
            program. This program inverts a square, non-singular ma-
            trix whose order  may be as high as 12 by using a Gauss-
            Jordan reduction method with partial pivoting. The square
            matrix A(i,j) which is to be inverted must be input with
            the usual matrix notation (i is the row number and j the
            column  number).  If the  determinant of A(i,j) is zero,
            its inverse does not exist.
       
                 Press  any key and the Matrix Inversion Input  Menu 
            is  displayed.   This  menu is identical with the  Least 
            Squares Input Menu described in Section 1.   The options 
            are  treated  slightly differently however  due  to  the 
            matrix format of the input data.

                 If 1 is  selected from the  Matrix Inversion  Input
            Menu,  all files in the default drive whose extension is
            .INV will be listed on the screen and the  user will  be
            asked  to type the  name of the file to be  used.  If no
            files are present on the default drive disk, the message
            "No .INV files:" will appear. As with the other programs
            in MATHPLOT, data files in any drive or directory may be
            used by  entering the  appropriate drive  and path.  The
            filename  may be  typed in upper  or lower case  letters
            with or without the extension (.INV). If the filename is
            entered incorrectly,  the message  "file not found - try
            again"  will appear  until  the  filename  is  correctly
            entered or ESC is pressed.  If none  of the listed files
            is needed, pressing ENTER or ESC  from  the  "Enter file
            name: " prompt returns  control to  the Input Menu.  The
            distribution disk contains two sample files, MATRIX2.INV
            and  MATRIX3.INV which can be used for demonstrating the
            Matrix Inversion program.

                 After  the .INV data file has been read,  the  ele-
            ments of  the A(i,j)  matrix will be  displayed, and the
            following data check menu is displayed.
            
              press C (change data), S (save), ENTER to continue
              
            If C (or c) is pressed,  the next prompts will be "Press
            ENTER to register number, ESC to exit" and "i = ? ". En-
            ter the row number of  the matrix element  to be changed
            followed by ENTER.  The column number  of the element to
            be changed  is entered  after the "j = ?  " prompt.  The
            correct  value of the matrix  element A(i,j) is then en-
            tered. This process continues until the user presses the
            ENTER or ESC key at the "i = ?" prompt.  Pressing S from
            the data check menu  provides an opportunity to save the
            data to a disk file.  Pressing  ENTER causes the program
            to continue.
       
            

                                     12




                                                                  invert


     
                 If 2  is selected  from the Matrix  Inversion Input
            Menu,  the user is prompted for the order of  the matrix
            to be inverted.   The number must be an integer not lar-
            ger than 12.  The user is then prompted for each element
            of the input matrix until all of the  elements have been
            entered.   The data check procedure described above will
            then give the user an opportunity to make any  necessary
            changes and to save the data to a disk file.  
       
                 After a  short time,  the inverted  matrix is  dis-
            played,  or if the input matrix  A(i,j) is singular  the 
            calculation  will  not  proceed  and  an  error  message
            "A(i,j) is singular." will appear. Pressing any key will
            result in the  display of the  Matrix Inversion Menu  as
            follows.
       
                                                                
            invert matrix                                    9:52 am


                     Select from the following options:

                        1 - Print copy of problem and answer.
                        2 - More calculations with new data.
                        3 - Check/change data and recalculate.
                        4 - Exit to main menu.
               
                     Enter selection:


                 Option  1  prompts the user to  enter a header line
            and to turn on the printer.  The program than causes the
            input and the inverted matrices to be printed.   Control
            is  automatically returned  to the Matrix Inversion Menu
            after printing has ended.
       
                 Option  2  from the Matrix Inversion  Menu  returns 
            program control to the Matrix  Inversion Input Menu. New 
            data may be entered, checked and saved to .INV files and 
            new matrices inverted.
       
                 Option  3 permits the checking and changing of current 
            data  prior to  recalculating new results.  Changed data
            may also be saved to a disk file.
       
                 Option 4 returns control to the MATHPLOT Main Menu.











                                     13




                                                                 fourier


     
            5.  Using the Fourier Series program:

                 Pressing 5  from the Main  Menu causes  MATHPLOT to
            enter the Fourier program.   This program calculates co-
            efficients for a trigonometric Fourier series for an em-
            pirical periodic function  that is input in the form  of
            discrete function values distributed at  equal intervals
            over  one period of the function.  2 M + 1  such coeffi-
            cients are calculated, where M is the input order of the
            series.   M must be an integer between 1 and  10.    The
            number of values of the function,  N, must be an odd in-
            teger between 5 and 199.   The coefficients are calcula-
            ted  by  numerically  integrating  the  product  of  the 
            input  function and the appropriate trigonometric  func-
            tion over one period of the independent variable.  Accu-
            racy  in the values of the calculated  coefficients,  of 
            course,  increases  with N.  The first screen after  the 
            Main Menu displays a brief description of Fourier.   Any 
            key may be pressed to continue to the input phase of the 
            program  with  the  display of the Fourier  Input  Menu.  
            This  menu is also identical with the other input  menus 
            with the exception of the heading in the upper left hand 
            corner  of the screen.   The  "Enter new  data."  option 
            however is treated slightly differently.

                 If  1 is selected from the  Fourier Input Menu, all
            default drive  files whose  extension is  .FRD  (Fourier
            data)  will be listed on the screen  and  the user  will
            be asked to type the name of the file to  be used.   The
            filename  may be  typed in  upper or lower case  letters
            with or  without  the extension  (.FRD).  Files  may  be
            called  from any drive or directory by  using the appro-
            priate path.  If no files  are present  on  the  default 
            drive  disk,  the message "No .FRD files:" will  appear.  
            If the  filename is  entered  incorrectly,  the  message
            "file not found - try again"  will  appear.  If none  of
            the listed  files is to be used,  pressing  ENTER or ESC
            from  the "Enter file name: " prompt  returns control to
            the Input Menu. The distribution disk contains two files,
            FOURSQR.FRD and FOURAMP.FRD  which can be used to demon-
            strate the Fourier program.

                 After  the  .FRD  data file has been  read,  the  N 
            equally  spaced values of the periodic function and  the 
            corresponding values of the independent variable will be 
            displayed sequentially, and the data check menu will ap-
            pear.   This menu is identical to the one shown  and de-
            scribed on page 5  of this manual.  The user  may change 
            data  coordinate values,  view a plot of the data on the 
            graphics screen,  save data to a  disk file or  continue
            with the program from this menu.
            





                                     14




                                                                 fourier



                 If  2 is selected from the  Fourier Input Menu, the
            user is prompted for the number of data points to be en-
            tered.   The number must be an ODD integer between 5 and
            199.  The user is then prompted for the minimum and max-
            imum values of the independent variable,  X.  These must
            correspond  to the end points of  a single period in the
            periodic function.   The program then calculates the lo-
            cation of the N equally spaced points  and  prompts  for
            the corresponding function values at each location.  Af-
            ter the data have been entered, the data check procedure
            described  above will  give the user  an opportunity  to
            make necessary changes. New or changed data may be saved
            to a  .FRD disk file for future use and previewed on the
            graphics screen.

                 The user is next prompted for "Order of the series, 
            M = ?  ".   A positive integer no larger than 10 must be 
            entered.   After  a period of time,  the series  coeffi-
            cients  will be displayed.  The computation time  varies 
            rather  dramatically  with both M and N.   The  time  to 
            calculate  a  10th order series from 51 data  points  is 
            about 40 seconds  on an ordinary PC  with no coprocessor
            and about 1 or 2 seconds on a PC with an 8087.  Pressing
            any  key will result in the display of the Fourier  Menu 
            as follows.

                                                                
            fourier                                         10:12 am


                  Select from the following options:

                     1 - Display periodic function on graphics screen.
                     2 - Display Fourier spectrum on graphics screen.
                     3 - Print copy of problem and results.
                     4 - Calculate another series from these data.    
                     5 - More calculations with new data.
                     6 - Check/change data.
                     7 - Exit to main menu.
               
                  Enter selection:


                 Option  1 from the Fourier Menu displays  the  data 
            points and the calculated series on the graphics screen. 
            The first prompt after selecting option 1 asks:  "Speci-
            fy axis labels and ranges ?   Y or N".   Answering  "N",
            "n" or ENTER causes a graphics display with automatical-
            ly selected axis labels and ranges.  This range includes
            all of the  data points  plus an  additional 10%  of the
            range spanned by these points. Answering the prompt with 
            "Y" or "y" results  in  additional  prompts for axis la-
            bels and for minimum and maximum values of X and Y to be




                                     15




                                                                 fourier



            plotted.   Axis label strings  may include as many as 18
            characters.  Additional  characters are  truncated.  The
            graphics  screen shows  the data  points as  X's and the
            calculated Fourier  series  function  as a dotted curve.
            Vertical and horizontal axes  pass through the origin of
            the coordinate  system.  To exit  the graphics mode, any
            key may be pressed to return control to the Fourier Menu.
       
                 Option 2 produces a plot of the Fourier spectrum on
            the graphics screen.  The square root of the  sum of the
            squares of the calculated A and B coefficients are plot-
            ted versus the frequency.  A more detailed  spectrum may
            be obtained by specifying a larger value for M, the  or-
            der of  the series  (see p. 14).   To exit the  graphics
            mode, press any key.

                 Option 3 prompts the user to enter a header line as
            described in the Least Squares section above and to turn
            on the printer.  The Fourier series coefficients and all
            input data  are then printed.   Control is automatically
            returned to the Fourier Menu after printing has stopped.

                 Option  4  results in a prompt for a value for  the 
            order of a new Fourier series to be calculated from  the 
            same data.  Any value from 1 through 10 may be selected.  
            Results  from the new calculations are presented as des-
            cribed above.  

                 Option  5  from  the Fourier Menu  returns  program 
            control to the  Fourier Input Menu,  whence new data may
            be entered and new series calculated.

                 Option  6 permits the checking and changing of cur-
            rent data prior to calculating new results. Changed data
            may also be saved to a disk file.

                 Option 7 returns control to the MATHPLOT Main Menu.
             



















                                     16




                                                                  bessel



            6.  Using the Bessel program:

                 Selecting option 6 from the Main Menu  causes MATH-
            PLOT to enter the  Bessel program.   This program calcu-
            lates and plots  Bessel functions of the first or second
            kind.   Orders for  J(n,X) may range from -15 to +15 and
            for Y(n,X) from 0 to 15.   Any positive value may be en-
            tered for the argument X.  Both functions are calculated
            from truncated  series for values  of the  argument less
            than 20. For larger values of X an asymptotic formula is
            used.   For  X < 20, the error in both functions is less
            than 1E-6. For X > 20, the accuracy is high so long as X
            is much greater than the order.   The first screen after
            the Main Menu displays a brief description  of the  Bes-
            sel program.   Any key may be pressed to continue to the
            Bessel Menu shown below.
       

            bessel                                          10:38 am


                     Select from the following options:

                        1 - Calculate values of J(n,X).
                        2 - Plot J(n,X) vs. X.
                        3 - Calculate values of Y(n,X).
                        4 - Plot Y(n,X) vs. X.
                        5 - Print calculated values.
                        6 - Return to main menu.

                     Enter selection.


                 If 1 is selected from the Bessel Menu, the  program
            prompts for the desired order of the  Bessel function of
            the first kind.  Any number between (and including)  -15
            and +15 may be entered for the order.   The user is next
            prompted for the argument of the function.  Any POSITIVE
            number may  be entered.  The value  of the  Bessel func-
            tion for the  entered order  and argument is  then  dis-
            played. Such  calculations may  continue until the  user
            presses ESC at either prompt, whence control is returned
            to the Bessel Menu.
       
                 If 2 is selected from the Bessel Menu, the  program
            prompts  for the  order of the  Bessel  function of  the
            first kind to be plotted. Any number between -15 and +15
            may be entered.   The program then prompts (in turn) for
            the  minimum and  maximum values of the range of the ar-
            gument,  X, to be plotted.   Any positive  values may be 
            entered.  X max must, of course,  be greater than X min.
            The function plotted over the specified range  will then
            be displayed. Any key  may be pressed to exit the graph-
     



                                     17




                                                                  bessel



            ics screen and return to the Bessel Menu.
     
                 Options 3 and 4 result in calculations or plots for
            Bessel functions of the second kind. The only difference
            from the procedures described  above is that orders  for
            Y(n,X) are restricted to the range 0 through +15.

                 Option  5  prompts the user  to enter a header line 
            and to turn on the printer.  All functions calculated in
            the preceding  session are then printed,  and control is
            returned to the Bessel Menu.
             
                 Option 6 returns control to the MATHPLOT Main Menu.





                                                              statistics



            7.  Using the Statistics program:

                 Selecting 7 from the Main Menu  causes MATHPLOT  to
            enter the  Statistics program  and to display its intro-
            ductory screen.   This program prompts for the number of
            variables (1 or 2) and the number of observations (3  to
            200).  It calculates the mean and the standard deviation
            for each variable.  If two variables are used, the  cor-
            relation coefficient and linear regression  coefficients
            are also calculated.   From calculated linear regression
            coefficients, the user can find projected values  of ei-
            ther variable from entered values of the other.   In the
            graphics mode,  Statistics plots single variable  values
            versus their index number, or if two variables are used,
            the second variable, Y is plotted against the first.  In
            both cases the  mean of the variable(s) is  indicated by
            appropriate  axis lines.   Statistics  works  with  data
            files of the .MPD type and will produce hardcopy of data
            and results on the printer.  
       
                 After entering the number of variables, the Statis-
            tics  Input Menu is displayed.   This menu is  identical 
            with the Least Squares Input Menu described in Section 1 
            and the options are treated basically the same.   If one 
            variable  is  being studied,  however,  prompts will  be 
            given only for X values.
       
                 If 1  is selected from the  Statistics Input  Menu,
            all  default  drive .MPD  files  will  be listed  on the
            screen  and  the user will be asked to type the name  of 
            the file to be used.  A drive letter, path and  filename 




                                     18




                                                              statistics 



            may be  typed in  upper or  lower  case letters  with or
            without the  extension (.MPD).   If no files are present
            in the  specified  drive,  the message  "No .MPD files:"
            will appear. If the filename is entered incorrectly, the
            message  "file not found - try again"  will  appear.  If
            none of the  listed files is needed,  pressing  ENTER or
            ESC from  the "Enter file name: " prompt returns control
            to the Input Menu.  The distribution disk contains three
            sample files, POLY2.MPD,  POLY3.MPD, and POLY5.MPD which
            can be used for demonstrating the Statistics program.
       
                 After the .MPD data file has been read, the X and Y 
            values of the observations will be displayed sequential-
            ly,  and the data check menu will appear.   This menu is 
            identical to  the one shown  and described on page 5  of 
            this manual.   The user  may change  observation values,  
            view a plot of the data on the graphics screen, save the
            data to a  disk file or  continue with the program  from 
            this menu.
                       
                 If 2  is selected  from  the Statistics Input Menu,
            the  user is prompted for the number of  observations to
            be entered.   The number must be  an  integer  between 3
            and 200.  The user is then prompted for values  of  each
            observation until all data have been entered after which
            the data check procedure  described above  will give the
            user an  opportunity  to make necessary  changes and  to
            save the data to a .MPD disk file.  
       
                 After  a  short time,  the statistical results  are 
            displayed,  showing the number of variables,  the number 
            of observations, the sum, mean value and standard devia-
            tion from the mean for each variable.   If two variables
            are  being studied,  the correlation factor is also dis-
            played.  Pressing  any key will result in the display of
            the  Statistics Menu as follows.
            
            statistics                                      10:51 am


                     Select from the following options:

                        1 - Display data on graphics screen.
                        2 - Linear regression calculations.
                        3 - Print copy of data and results.
                        4 - More calculations with new data.      
                        5 - Interchange X and Y variables.
                        6 - Check/change data and recalculate.
                        7 - Exit to main menu.
               
                     Enter selection:






                                     19




                                                              statistics
    


                 Option 1 from the Statistics Menu produces a graph- 
            ical display of the data.  If a single variable is being
            used, its values are plotted vertically versus the order
            in  which  they were entered.   A horizontal axis passes
            through the mean of  their values.   The plotted area is
            not  user selectable.   If observations of two variables
            were entered, the Y values are plotted (vertically) ver-
            sus the X values for each observation.  The first prompt
            after selecting option 1 asks:  "Specify axis labels and
            ranges ?   Y or N". Answering "N", "n" or ENTER causes a
            graphics display with automatically selected axis labels
            and ranges.   This range includes all of the data points
            plus  an  additional 10% of the range spanned  by  these
            points.  Answering the prompt with "Y" or "y" results in
            additional prompts  for axis labels  and for minimum and
            maximum  values  of X and Y  to be plotted.  Axis  label
            strings may include as many as 18 characters. Additional
            characters  are truncated.   A  horizontal  axis  passes
            through the  mean value of Y and a vertical axis through
            the mean value of X.
       
                 Selecting  Option 2 causes Statistics to enter  the 
            linear regression calculation routine,  in which case it 
            is assumed that the two-variable statistical data appro-
            ximate  a straight line.   If single variable data  were 
            entered an error message appears,  otherwise the program 
            prompts  the user "Calculate Y(x) or X(y) ?   Enter Y or 
            X".   Typing Y (or y) causes the program to prompt "X  = 
            ?".   From the entered value of X the program calculates 
            the  corresponding value of Y from the linear regression 
            coefficients.   In a similar manner,  calculations of  X 
            may be made from entered values of Y.   This process may 
            be continued until ESC is pressed at the "X = ? " or  "Y
            = ? " prompt.

                 Option 3  prompts the user to turn on the  printer.  
            The  program than causes the input data,  the results of 
            the statistical calculations and the results of all lin-
            ear  regression calculations to be printed.   Control is 
            automatically  returned  to the  Statistics  Menu  after
            printing has ended.

                 Option 4 from the  Statistics Menu returns  program 
            control  to the Statistics Input Menu.   New data may be 
            entered, checked and saved and new calculations made.

                 Option 5 interchanges the X variable value with the
            corresponding Y value for each observation.  The new co-
            ordinates are sorted according to increasing values of X
            before being displayed or utilized.
 






                                     20




                                                              statistics



                 Option  6 permits the checking and changing of current 
            data  prior to  recalculating new results.   Whenever  a 
            change  is made in the data,  an opportunity is given to 
            write the changed data to disk.
       
                 Option 7 returns control to the MATHPLOT Main Menu.
       




                                                               data plot



            8.  Using the Data Plot program:
       
                 Pressing  8 from the  Main Menu causes  MATHPLOT to
            enter the Data Plot program.  This program plots  up  to
            200 data points on the graphics screen in a  user speci-
            fied region of the X,Y plane.
       
                 Press  any key and the Data Plot Input Menu is dis-
            played.   This menu is identical with the Least  Squares 
            Menu described in Section 1, and the options are treated 
            the same.
       
                 If 1 is selected from the Data Plot Input Menu, all
            disk  files whose extension is  .MPD will  be  listed on
            the screen and the user will be asked to  type  the name
            of the file to be used.  If no files are present  on the
            default drive disk,  the message  "No .MPD files:"  will
            appear. The drive letter, path and filename may be typed
            in  upper or lower case letters with or without the  ex-
            tension (.MPD).  If the filename is entered incorrectly,
            the message  "file not found  - try again"  will appear.
            If none of the listed files is to  be used, pressing EN-
            TER or ESC from the "Enter  file  name: " prompt returns
            control to the Input Menu.  Any of the .MPD files on the
            distribution  disk can be  used to demonstrate  the Data
            Plot program.
       
                 After the .MPD data file has been read, the X and Y 
            coordinates of all the data points will be displayed se-
            quentially,  and the data check menu will appear.   This 
            menu is identical to the one shown and described on page 
            5 of this manual. The user may change coordinate values,
            view a plot of the data on the graphics screen, save the
            data to a  disk file or  continue with  the program from
            this menu.

                 If 2 is selected from the Data Plot Input Menu, the
            user is prompted for the number of data points to be en-
            tered.  The number must be an integer between 3 and 200.
            The user is  then prompted for  X and Y  coordinates  of


                                     21




                                                               data plot



            each point until  all data have  been entered.  The data
            check  procedure described  above will give  the user an
            opportunity to make changes.  New or changed data may be
            saved to a .MPD disk file for future use.
       
                 Pressing 3 transfers control back to the Main Menu.

                 The user is then prompted: "Specify axis labels and 
            ranges  ?   Y or N".  Answering "N", "n" or ENTER causes
            a  graphics display  with  automatically  selected  axis
            labels and ranges.   This range includes all of the data
            points plus  an additional 10%  of the range  spanned by
            these points.   Answering the prompt with "Y" or "y" re-
            sults  in additional  prompts for  axis labels  and  for 
            minimum  and  maximum values of X and Y to  be  plotted.  
            Axis label strings may include as many as 18 characters.  
            Additional  characters are truncated.  The graphics plot 
            is then displayed.   To exit the graphics mode,  any key 
            may be pressed, and control will return to the Main Menu.
       
                 There is no interaction between the Data Plot prog-
            ram and the printer other than the graphics screen dump.  
            The *.MPD files can, however, be printed from the Integ-
            rate program.



                                                           function plot



            9.  Using the Function Plot program: 

                 Pressing 9 in the Main Menu causes  MATHPLOT to be-
            gin the Function Plot program.  In this program the user   
            may  enter any  mathematical function  of an independent
            variable X,  which can be written  from combinations  of
            the supported  functions  and operators described below.
            The program evaluates this expression at a large  number
            of points in a user specified range and plots a continu-
            ous curve depicting the entered function on the graphics
            screen.  A set of data points may also be plotted on the
            same graphics screen.   With Function Plot the  user may
            thus make graphical comparisons of data sets with mathe-
            matical  functions and obtain analytical representations
            of that data.

            The following  functions are  supported:

                 sin, cos, tan, asin, acos, atan, sinh, cosh,
                 tanh, ln, log, exp, abs, sqrt, sqr, fact, pi






                                     22




                                                           function plot



            The following operators are also supported:

                 +  -  *  / and ^ 
            
                 The independent variable in the expression  must be 
            represented by X or x.  Arguments of the supported func-
            tions must be enclosed by parentheses, brackets  or bra-
            ces.  The multiplication operator (*) may be omitted be-
            tween a number and a parentheses,  between two parenthe-
            ses and between a number and  a function name.   Numbers 
            may be entered in ordinary notation  (123.456) or in ex-
            ponential notation (-1.23456E-7).  Decimal fractions may
            be  entered without a leading zero.  Arguments of trigo-
            nometric functions must be in radians.   Following is an
            example of an acceptable function.

                 F(x) = -1.23E-1 {[sin(x)]^0.33} + pi/6
       
                 Operator precedence is as follows:
       
                       1. factorialization (fact) 
                       2. minus sign as a prefix negation operator
                       3. multiplication 
                       4. division 
                       5. exponentiation (^)
                       6. addition
                       7. subtraction       


                 Any key may  be pressed  to leave the  introductory
            screen of Function Plot.   The user  is then prompted to
            "Enter the desired function",  "F(x) =   ".   Using  the 
            information above,  the user may then complete the equa-
            tion to  be studied.  Pressing  ENTER then displays  the 
            Function Plot Menu as follows:


            function plot                                   12:34 pm


                   Select from the following options:

                      1 - Plot the function and the current data set.
                      2 - Calculate values of F(x).
                      3 - Enter a new function.
                      4 - Enter a new data set.      
                      5 - Check/change data.
                      6 - Print results.
                      7 - Exit to main menu.
               
                   Enter selection:



                                      


                                     23




                                                          function plot



                 If no data set  has been entered,  option 1  in the
            Function Plot  Menu leads to  prompts for  "X axis label
            = ?  " and  "Y axis label = ?  ".   Any string  of 18 or
            fewer characters may be entered,  or pressing ENTER from
            the  prompt(s)  will  result  in the use of the  default
            prompts "X AXIS" and "FUNCTION".  Additional prompts ap-
            pear for plotting ranges.   These must be answered  with
            consistent  values  (xmax > xmin, etc.).  After a  short
            period, dependent  upon the length  of the entered func-
            tion and hardware configuration, a plot of  the function
            will appear.  Pressing any key removes the graphics dis-
            play  which is followed  by the prompt "Plot a new func-
            tion ?  Y or N ".  Answering  positively permits the in-
            troduction of  a new  function.   Pressing  "N", "n"  or
            ENTER or ESC from  both returns control  to the Function
            Plot Menu.

                 If a data set has been entered, option 1 causes the
            prompt  "Specify axis labels and ranges ?   Y or N  " to
            appear.  A positive response leads to the axis label and
            plotting range sequence;  a negative response results in
            the use of default values for all these variables.   De-
            fault ranges  include a  10% border around the area  en-
            closing all of the data points.   On the graphics screen
            the user selected function is plotted as a dotted,  con-
            tinuous curve.  The data points are shown as X's. Press-
            ing any key from the graphics screen returns the prompts
            for more plots and new functions as described above. The
            user  may continue  to enter new  functions and  compare
            them with the data on the graphics screen until a satis-
            factory  analytical representation of the  data has been 
            developed.  The current function appears  on all  of the
            screens in the Function Plot program.   All of the  .MPD
            sample data files on the  distribution disk  may be used
            in demonstrating the Function Plot program.

                 Option 2 prompts the user to enter a  value for the  
            independent variable x.  The Function Plot  program then
            calculates the entered function for this value of x. All
            such function evaluations are retained in memory for la-
            ter printing.

                 Option 3 causes the current function to be display-
            ed and prompts for the entry of a new function.
            
                 Option 4 in the Function Plot Menu displays the In-
            put Menu described in previous programs.  This menu per-
            mits  data to be entered from the keyboard or to be read
            from  disk  files  exactly as  described  in  the  Least
            Squares program instructions (see pages 4 through 7). 

                 Option 5 permits the current data set to be checked
            and changes to be made.   The modified data set may then
            be saved and plotted. 



                                     24




                                                          function plot



                 Option  6  prompts the user to enter a  header line
            and to turn on the printer.   The  current function, the 
            data set  and all of the function  values calculated  in
            Option 3  (above) are then printed.   In addition to the
            data set coordinates, values calculated from the current
            function for the X coordinate of each data point are al-
            so printed.
       
                 Option 7 returns control to the MATHPLOT Main Menu.
       
                 If both a function  and a data set  are present  in 
            the program, the standard deviation between the data set
            Y values and the function Y values is calculated.   This
            value is presented as (Sigma = ______ )  on the Function
            Plot Menu between and to the right of menu items 3 and 4.
            Sigma is calculated as follows:

                 Sigma = SQRT((Y(func)-Y(data))^2/(n-1))

            This value of sigma is also printed by Option 6 (above).
                                                                 


                                                                   files




           10.  Data files:

                 Pressing 0 from the  Main Menu causes  MATHPLOT  to
            display the prompt  "Enter d:\path\  ".   Pressing ENTER
            from this prompt results in a display of all of the data
            files in the default drive.  If a drive and path are en-
            tered,  then the MATHPLOT  data files in that drive/path 
            are displayed.  Four types of data files are used by the
            MATHPLOT  programs.  These types  are  distinguished  by
            their extension: .MPD, .SIM, .INV and .FRD.
            
                 Least Squares, Integrate, Statistics, Data Plot and
            Function Plot use  .MPD files.   These files are  confi-
            gured to contain  pairs  of real coordinates for as many
            as 200 data points. All of these programs can be used to
            read, display, change  and write .MPD files.  Hardcopies
            of .MPD  files can be obtained  from the  Least Squares, 
            Integrate,  Statistics and  Function Plot programs.  The
            Data Plot program also uses .MPD files  but does not in-


            _____________________

            Acknowledgement:   Portions of the Function Plot program 
            utilize material from  "Super Tools Library",  published 
            by  Paragon Courseware,  4954  Sun Valley Road, Del Mar, 
            California 92014.


                                      25




                                                                   files



            teract  with  the printer  except  through  the graphics
            screen dump.  Data files of the .MPD type can be printed 
            out conveniently and quickly from the Integrate program.
       
                 The  Simeq and Matrix Inversion programs  use  .SIM 
            and  .INV files respectively.   The files are configured 
            to  contain  1 and 2 dimension arrays  of  real  numbers 
            whose  order may be as high as 12.   The .SIM files con-
            tain  1 two-dimension array A(i,j) and  1  one-dimension 
            array B(j), whereas the  .INV files contain only the two
            dimension  array  of the elements for the matrix  to  be 
            inverted.   Both programs permit the user to read,  dis-
            play,  change, write to disk and print out their respec-
            tive files.
       
                 The Fourier Series  program uses .FRD files.  These 
            files are configured like the .MPD files.  However, each 
            file  must  contain an  odd number  of coordinate  pairs
            evenly spaced along the X axis.

                 All data files are written to disk in ASCII format.  
            They  may  be viewed and edited or written with  a  word 
            processor or displayed directly from DOS with the "TYPE" 
            command.  These files were written with a text editor in
            the non-document  mode.  This format may be used in wri-
            ting other data files.  It must be noted that fractional
            numbers in  data files must  have a zero inserted before
            the decimal point.   Leading decimal points in real num-
            bers cannot be read by the program.



 
























                                      26
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1863

     Volume in drive A is DISK1863
     Directory of A:\

    BIGPOLY2 MPD      1947   5-01-89   6:30a
    FILE1863 TXT      2295  12-22-89   2:52p
    FOURAMP  FRD       768   8-05-88   6:30a
    FOURSQR  FRD       512   8-05-88   6:30a
    FPLSINX  MPD       261   4-29-89   6:30a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:16a
    INVOICE  TXT       565   6-09-89   6:30a
    MANUAL   TXT     77059   5-09-89   6:30a
    MATHPLOT EXE    133120   6-19-89   6:30a
    MATRIX2  INV       128   8-05-88   6:30a
    MATRIX3  INV       128   8-05-88   6:30a
    POLY2    MPD       128   8-05-88   6:30a
    POLY3    MPD       130   8-05-88   6:30a
    POLY5    MPD       213   8-05-88   6:30a
    SIMEQ2   SIM       128   8-05-88   6:30a
    SIMEQ4   SIM       128   8-05-88   6:30a
    SIMEQ6   SIM       109   8-05-88   6:30a
           18 file(s)     218197 bytes
                           92160 bytes free
