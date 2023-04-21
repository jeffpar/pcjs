---
layout: page
title: "PC-SIG Diskette Library (Disk #3487)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3487/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3487"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## E_BFW.DOC

{% raw %}
```


                        E_BFW.exe

         Engineering-Beam Formulas for MS Windows
   
                     User Reference  
      

 System Requirements:

 Hardware:
  * An IBM or compatible computer. 
  * A monitor/graphics card supported by Windows.
  * A mouse supported by Windows.
  * A printer supported by Windows.    

 Software:
  * MS DOS or PC DOS 3.1 or later. 
  * MS Windows 3.0 or later.

 
 Copyright (C) 1992 A. Hallahan.

 Engineering formulas used in this program are taken from:
 Formulas for Stress and Strain 4th Edition R.J. Roark,
 Mechanical Engineering Design 3rd Edition J.E. Shigley, and
 Design of Weldments O.W. Blodgett.  

 The results this program have been thoroughly tested and to
 the best knowledge of the author are completely accurate.
 However, the author assumes no responsibility for errors,
 misuse, or damage caused by the use of this program.     

*
*
*

 IBM and PC DOS are registered trademarks of International
 Business Machines Inc.
 MS DOS and Windows are registered trademarks of
 Microsoft, Inc.
 
*
*
*
*
*
*

 Installation:

 No special installation is required for this program.
 E_bfw consists of a single .exe file which can be copied
 to any convenient hard disk directory.

 From within Windows, e_bfw can be started like any other
 Windows application, i.e., by entering its filename in the
 Run window of Progam Manager, or by double clicking its
 filename in File Manager.

 From DOS, e_bfw can be started from the DOS command line
 as "win drive:\path\e_bfw".
      
 If desired, the e_bfw icon can be added to the "Windows
 Applications" window.  Refer to the Windows Setup program
 instructions to do this.
 
Description:
 
 E_bfw is a Mechanical Engineering application written
 to run under MS Windows Version 3.0 or later.
 
 This program was designed to be a small, fast, and easy
 to use beam formula solver.  In its present form the 
 program will solve 12 of the most common loading/support
 cases.  Program outputs include end reactions, shears,
 moments, and deflections.      
  
 The program consists of 2 main windows.  The e_bfw opening
 window provides control of the System and local menus, and 
 allows selection of a particular beam case.  Once a selection
 is made, a pop-up dialog box gathers inputs and calculates
 outputs.  Details of each window's operation are given on 
 the following pages.

 Although the program is fully functional through the keyboard,
 the use of a mouse increases its efficiency.
 
 Planned updates for this program include:
 1) expanding the number of loading/support cases.
 2) expanding the number of outputs.
 3) dynamic re-plotting of the beam curves.  

*
*
*
*
*
*

 E_BFW Main Window

 Instructions:

 Mouse:
  Single click beam icon for selection.
  Double click selected icon to open its dialog box.

 Keyboard:
  Use the cursor arrow keys (UP-DOWN-LEFT-RIGHT) to select icon.
  <ENTER> to open its dialog box.
      
*
*
*
*
*
*

 E_BFW Dialog Box

 Edit Controls:

 Edit controls are provided for inputting parameters:
  P[lb], w[lb/in], L[in], a[in], b[in], x[in], E[psi], I[in^4], S[in^3]
 
 Edit controls filled with 0's are inactive in context with the
 selected beam.

 Active edit controls are initially filled with default values:
  
  P:    100.0   [lb]  
  w:    100.0   [lb/in]
  L     100.0   [in]
  a:     10.0   [in]
  b:     10.0   [in]
  x:      0.0   [in]
  E:   30e6.0   [psi]  
  I:     10.0   [in^4] 
  S:      5.0   [in^3]
   
 The maximum value for any edit control input is 40e6.  Inputs
 consisting of non-numeric or alphabetic strings will be read
 up to the first non-numeric character.

 Edit control spin buttons (mouse only) will increment @ the 
 following steps when single clicked:
  
  P,w:      1.0    [lb,lb/in]  (for inputs < 10000.0 lb,lb/in ) 
  L,a,b,x:  0.0625 [in]        (for inputs <  1000.0 in)  
  I:        0.1    [in^4]      (for inputs <  1000.0 in^4) 
  S:        0.1    [in^3]      (for inputs <  1000.0 in^3)  
         
 Input value errors will cause the program functions
 to return zero (0) outputs for all results.  For example,
 an [x] value of 120.0" for an [L] value-beam length
 of 100.0" will 0 all outputs.
  
 Note that edit controls for beam Modulus of Elasticity (E),
 Moment of Inertia (I), and Section Modulus (S) need not
 hold any values for the program functions to still return
 results for reactions and moments.      

Output Displays:
 
 Output Displays are provided for:
  R1[lb], R2[lb], V1[lb], V2[lb], Vx[lb], M1[in-lb], M2[in-lb],
  Mmax[in-lb], Mx[in-lb], DefMax[in], Defx[in], DefCL[in], StrMax[psi]

 As with edit controls, some output displays are inactive in context
 with the selected beam.  For example, a cantilever beam will display 
 reactions for a single end (R1,V1) only.

 All forces and reactions act in the directions shown.  Output signs
 follow Roark conventions, i.e., V upward is positive, M upward is
 positive, and Defl upward is positive.

 Location points for beam maximum shear, maximum moment, and maximum
 deflection are shown along with the beam curves on the e_bfw main 
 window.  The beam curves themselves are representative of the selected
 loading case and are for reference only. 

 At the present time, deflections for uniformly loaded-partial span
 simply supported or fixed end beams are only returned for beams
 1000.0" (83'-4") long or shorter.                 

Dialog Controls: 

 There are 4 pushbutton controls for the dialog box:
 
 [Close]   - Closes the dialog box.

 [Calc]    - Forces a calculation/re-calculation of program outputs.
 
 [Clear]   - Clears (0's) all active edit controls and all outputs.
 
 [StoPrnt] - Saves to memory all current inputs and outputs.
        
*
*
*
*
*
*

 Printer Operation:

 Description:
  
  Printing operations are directed by Windows Print Manager using
  Windows "default" printer.

  E_bfw was originally written for Windows 3.0 and printing commands
  sent to Print Manager used Windows System font for text information.
  This is the font Windows uses for displaying text in caption bars,
  menus, etc.  Transfer of the bitmap images requires the printer be
  capable of bit-block transfer (BitBlt and/or StretchBlt) operations.

  At the present time e_bfw does not display a "Cancel Printout" box
  during printing operations.  If necessary, printing can be halted
  by pausing operations from within Print Manager, and closing Print
  Manager's window.
      
 Controls:
  
  As noted before, the e_bfw dialog box StoPrnt button is used to
  store data for later printout.  Data for 1 to 5 dialog boxes (beams) 
  are saved in the form of a printer "queue".    
   
  Two menu choices are available through the e_bfw main window Printer
  pull-down menu.  "Start Printer" will send the printer queue
  (1 to 5 beams) to Print Manager.  "Clear Printer" will clear the
  queue and dump all existing data.  Any data left in the queue when
  the program is terminated are lost.

 Note:

  E_bfw uses screen capture to save the beam schematic, curves, and
  maximum shear/moment/deflection location information for the printer.
  Because of this, any window (including the e_bfw dialog box) overlaying
  some or all of this information at the time that the StoPrnt button
  is pushed will "hide" that region of the image from the printer.
  Prior to using the StoPrnt button, the e_bfw dialog box or any other
  nearby windows should be positioned clear of the noted region.
        
*
*
*
*
*
*


                        E_BFW REGISTRATION FORM

 REGISTRATION FEE: $15.00

 MAIL TO:

      ANDREW N. HALLAHAN
      c/o HERR-VOSS CORP.
      130 MAIN ST.
      P.O. BOX AB
      CALLERY, PA. 16024 


 NAME:     ______________________________
 
 COMPANY:  ______________________________

 ADDRESS:  ______________________________
 
 CITY:     ______________________________ 
 
 STATE:    ______________________________

 ZIP:      ___________


 COMMENTS/SUGGESTIONS:
      
           ______________________________ 

           ______________________________

           ______________________________

           ______________________________

           ______________________________
            





```
{% endraw %}

## E_SPW.DOC

{% raw %}
```


                        E_SPW.exe

       Engineering-Section Properties for MS Windows
   
                     User Reference  
      

 System Requirements:

 Hardware:
  * An IBM or compatible computer. 
  * A monitor/graphics card supported by Windows.
  * A mouse supported by Windows.
  * A printer supported by Windows.    

 Software:
  * MS DOS or PC DOS 3.1 or later. 
  * MS Windows 3.0 or later.

 
 Copyright (C) 1992 A. Hallahan.

 Engineering formulas used in this program are taken from:
 Strength of Materials 3rd Edition J.W. Breneman,
 Design of Weldments O.W. Blodgett, and  
 Machinery's Handbook 21st Edition.

 The results this program have been thoroughly tested and to
 the best knowledge of the author are completely accurate.
 However, the author assumes no responsibility for errors,
 misuse, or damage caused by the use of this program.     

*
*
*

 IBM and PC DOS are registered trademarks of International
 Business Machines Inc.
 MS DOS and Windows are registered trademarks of
 Microsoft, Inc.

* 
*
*
*
*
*

 Installation:

 No special installation is required for this program.
 E_spw consists of a single .exe file which can be copied
 to any convenient hard disk directory.

 From within Windows, e_spw can be started like any other
 Windows application, i.e., by entering its filename in the
 Run window of Progam Manager, or by double clicking its
 filename in File Manager.

 From DOS, e_spw can be started from the DOS command line
 as "win drive:\path\e_spw".
      
 If desired, the e_spw icon can be added to the "Windows
 Applications" window.  Refer to the Windows Setup program
 instructions to do this.
 
 Description:
 
 E_spw is a Mechanical Engineering application written
 to run under MS Windows Version 3.0 or later.
 
 E_spw allows an engineer or machine designer to quickly
 size standard shaped profiles for 2D Properties: Area,
 Y-bar, Moment of Inertia, Section Modulus, Radius of Gyration.
 
 This small program operates much like a section properties 
 program for a hand-held calculator, but with a graphic 
 (point and click) Windows interface.  Although the program
 is fully functional through the keyboard, the use of a mouse
 increases its efficiency.

 The program consists of 2 main windows.  The e_spw opening
 window provides control of the System and local menus, and 
 allows selection of a particular profile.  Once a selection
 is made, a pop-up dialog box gathers inputs and calculates
 outputs.  Details of each window's operation are given on 
 the following pages.
        
 Planned updates for this program include:
 1) expanding the number of profiles.
 2) adding a module for user-drawn profiles.
         
*
*
*
*
*
*

 E_SPW Main Window

 Instructions:

 Mouse:
  Single click profile icon for selection.
  Double click selected icon to open its dialog box.

 Keyboard:
  Use the cursor arrow keys (UP-DOWN-LEFT-RIGHT) to select icon.
  <ENTER> to open its dialog box.
    
*
*
*
*
*
*

 E_SPW Dialog Box

 Edit Controls:

 Edit controls are provided for inputting size parameters:
  d[in], b[in], d1[in], t[in], t1[in]

 Edit controls filled with 0's are inactive in context with the
 selected profile.

 Active edit controls are initially filled with default values:
  d: 10.0[in]  
  b: 10.0[in]
  d1: 9.0[in]
  t:  1.0[in]
  t1: 1.0[in]
 
 The maximum value for any edit control input is 1.0e5.  Inputs
 consisting of non-numeric or alphabetic strings will be read
 up to the first non-numeric character.

 Edit control spin buttons (mouse only) will increment @ 0.0625"
 steps when single clicked. (for inputs < 1000.0")  

Dialog Controls: 

 There are 4 pushbutton controls for the dialog box:
 
 [Close]   - Closes the dialog box.

 [Calc]    - Forces a calculation/re-calculation of program outputs.
 
 [Clear]   - Clears (0's) all active edit controls and all outputs.
 
 [StoPrnt] - Saves to memory all current inputs and outputs.

*
*
*
*
*
*

 Printer Operation:

 Description:
  
  Printing operations are directed by Windows Print Manager using
  Windows "default" printer.

  E_spw was originally written for Windows 3.0 and printing commands
  sent to Print Manager used Windows System font for text information.
  This is the font Windows uses for displaying text in caption bars,
  menus, etc.  Transfer of the bitmap images requires the printer be
  capable of bit-block transfer (BitBlt and/or StretchBlt) operations.

  At the present time e_spw does not display a "Cancel Printout" box
  during printing operations.  If necessary, printing can be halted
  by pausing operations from within Print Manager, and closing Print
  Manager's window.
      
 Controls:
  
  As noted before, the e_spw dialog box StoPrnt button is used to
  store data for later printout.  Data for 1 to 5 dialog boxes (profiles) 
  are saved in the form of a printer "queue".    
   
  Two menu choices are available through the e_spw main window Printer
  pull-down menu.  "Start Printer" will send the printer queue
  (1 to 5 profiles) to Print Manager.  "Clear Printer" will clear the
  queue and dump all existing data.  Any data left in the queue when the
  program is terminated are lost.

*
*
*
*
*
*


                        E_SPW REGISTRATION FORM

 REGISTRATION FEE: $12.00

 MAIL TO:

      ANDREW N. HALLAHAN
      c/o HERR-VOSS CORP.
      130 MAIN ST.
      P.O. BOX AB
      CALLERY, PA. 16024 


 NAME:     ______________________________
 
 COMPANY:  ______________________________

 ADDRESS:  ______________________________
 
 CITY:     ______________________________ 
 
 STATE:    ______________________________

 ZIP:      ___________


 COMMENTS/SUGGESTIONS:
      
           ______________________________ 

           ______________________________

           ______________________________

           ______________________________

           ______________________________
          


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3487

     Volume in drive A has no label
     Directory of A:\

    E_SPW    EXE     53504   9-09-92   2:09p
    E_BFW    EXE     87088   9-10-92   6:51p
    E_SPW    DOC      6143   9-15-92  12:33p
    E_BFW    DOC      8503   9-15-92  12:35p
    GO       BAT        61   4-12-93   3:42p
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     157339 bytes
                            1536 bytes free
