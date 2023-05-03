---
layout: page
title: "PC-SIG Diskette Library (Disk #2253)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2253/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2253"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-ECAP"

    An easy-to-use AC circuit analysis program which analyzes circuits
    consisting of resistors, capacitors, inductors, transformers,
    transistors (both bipolar and FETs), operational amplifiers and
    transconductance amplifiers. Anyone with an interest in electronics --
    hobbyists, students, HAM radio enthusiasts, teachers, electronics
    engineers or technicians will find this program useful.
    
    Totally integrated in one package, PC-ECAP contains a full-screen text
    editor for preparing analysis input, an electronic circuit analyzer
    that calculates your circuit's frequency and phase response, a high
    resolution display plotter that supports all common graphics adapters
    and a high resolution plotter for IBM/Epson compatible printers.
    
    Features:
    
    ~ Completely menu-driven -- very simple to use.
    
    ~ Analyze circuits with up to 40 nodes -- no limit on the number of
    components.
    
    ~ On-line Help function.
    
    ~ Free input format -- common abbreviations such as P, U, N, M, K, MEG,
    G are recognized.
    
    ~ Supports CGA, EGA, VGA, Hercules, and Monochrome Display Adapters.
    PC-ECAP will automatically configure itself for most adapters and
    displays.
    
    ~ All calculations are done in double precision -- 14 digits of BCD.
    
    ~ Program may be configured to send its output to LPT1, LPT2 , LPT3 or
    a disk file.
    
    ~ Bipolar transistor model-maker. Enter your transistor's operating
    parameters and PC-ECAP will create a Hybrid-Pi model.
    
    ~ Does not need a numeric coprocessor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2253.TXT

{% raw %}
```
Disk No: 2253                                                           
Disk Title: PC-ECAP                                                     
PC-SIG Version: S1.10                                                   
                                                                        
Program Title: PC-Ecap                                                  
Author Version: 1.10                                                    
Author Registration: $79.00                                             
Special Requirements: None.                                             
                                                                        
This is an easy-to-use AC circuit analysis program which analyzes       
circuits consisting of resistors, capacitors, inductors, transformers,  
transistors (both bipolar and FET's), operational amplifiers and        
transconductance amplifiers. Anyone with an interest in electronics --  
hobbyists, students, HAM radio enthusiasts, teachers, electronics       
engineers or technicians will find this program useful.                 
                                                                        
Totally integrated in one package, PC-ECAP contains a full-screen text  
editor for preparing analysis input, an electronic circuit analyzer that
calculates your circuit's frequency and phase response, a high          
resolution display plotter that supports all common graphics adapters   
and a high resolution plotter for IBM/Epson compatible printers.        
                                                                        
Features:                                                               
                                                                        
~ Completely menu-driven - very simple to use                           
                                                                        
~ Can analyze circuits with up to 40 nodes - no limit on the number of  
components                                                              
                                                                        
~ On-line help function                                                 
                                                                        
~ Free input format - common abbreviations such as P, U, N, M, K, MEG, G
are recognized.  For example, if your circuit has a 47pf capacitor, all 
you need to enter for its value is 47pf                                 
                                                                        
~ Supports CGA, EGA, VGA, Hercules and even the Monochrome Display      
Adapter. PC-ECAP will automatically configure itself for most adapters  
and displays                                                            
                                                                        
~ All calculations are done in double precision - 14 digits of BCD      
                                                                        
~ Program may be configured to send its output to LPT1, LPT2 , LPT3 or  
a disk file                                                             
                                                                        
~ Bipolar transistor model maker. Just enter your transistor's operating
parameters and PC-ECAP will create a Hybrid-Pi model for your transistor
                                                                        
~ Does not need a numeric coprocessor                                   
                                                                        
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
║                   <<<<  DISK #2253 PC-ECAP  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║    To start the program, type : INSTALL (press enter)                   ║
║                                                                         ║
║                                                                         ║
║    For documentation type : TYPE READ.ME (press enter)                  ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.


```
{% endraw %}

## PC-ECAP.DOC

{% raw %}
```



















                                  P C - E C A P

                                   Version 1.10




                             Program Reference Manual


                      Copyright  (c)  1990  by Peter Volpa
                               All Rights Reserved












                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER



                                   Peter Volpa
                                 Circuit Systems
                                 418 Church Road
                           Sicklerville, NJ 08081-1727                                                            page 1


          License

          PC-ECAP is distributed as "shareware".  It is NOT public
          domain or free software.

          Non-registered users of this software are given the
          opportunity to evaluate the complete PC-ECAP software
          package for 30 days with no obligation.  If, after the
          evaluation period, you find PC-ECAP to be suitable for your
          needs, you must register your copy or discontinue using
          PC-ECAP.

          What we're saying is if you use this program, then you
          should pay for your copy.  That way Circuit Systems will be
          able to provide updates, support, and generally stay in
          business.

          PC-ECAP is distributed in two forms: a registered version
          and an unregistered version.  The unregistered version is a
          fully-functional program that has all the features of the
          registered version.  However, the unregistered version
          requires the user to go through an initialization procedure
          each time PC-ECAP is started.  The initialization procedure
          requires the user to enter a random 4-digit number before
          PC-ECAP will run.  The registered version does not have this
          initialization procedure.

          The REGISTERED version of PC-ECAP is LICENSED TO THE SINGLE
          PERSON WHO REGISTERED THE PROGRAM AND MAY NOT BE DISTRIBUTED
          IN ANY MANNER.

          All users are granted a limited license to copy the
          UNREGISTERED version of PC-ECAP for the trial use of others.
          This license does NOT include distribution or copying of
          this software:


               *    In conjunction with any other product or service.

               *    In general use within a company or school.

               *    For any "disk fee" other than a small (generally
                    $2.00 to $5.00) copying charge.

               *    For distribution in any modified form.  The file
                    containing this license information MUST be
                    included along with full documentation and all
                    the files that make up this software package.








           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 2


          Ordering Information

          A PC-ECAP registration licenses you to use the product on a
          regular basis.  Registration also entitles you to technical
          support, update notices, and enables you to get future
          releases of PC-ECAP at a minimal price.

          Individual registrations come in two forms.  The first,
          registration only, costs $69 (plus $2.00 shipping and
          handling).  Upon receipt of your paid registration form, we
          will send you the latest registered version of PC-ECAP with
          documentation on the disk.  We also offer PC-ECAP with a
          printed manual.  For $79 (plus $3.00 shipping and handling)
          we will send you the latest registered version of PC-ECAP
          along with a professionally printed bound manual.  New
          Jersey residents should include 7% sales tax.

          Educational institutions may apply a 35% discount to all
          prices.  PLEASE include your educational institution
          letterhead (with your title) when you order.

          Site licensing is also available.  Prices are based on the
          estimated number of users.  Please write for more
          information.

          A PC-ECAP registration form is included in the distribution
          package for your convenience.  It is in the file ORDERFRM.
          Please take time to fill it out and return it.  If you would
          like high-quality software to continue to be made available
          on a try-first basis and for a reasonable cost, it is up to
          YOU to support such programs.


          Please send your registration form, suggestions and any
          comments that you might have to:


                         Peter Volpa
                       Circuit Systems
                       418 Church Road
                 Sicklerville, NJ  08081-1727















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 3


          DISCLAIMER

          ALTHOUGH WE HAVE EXTENSIVELY TESTED PC-ECAP AND BELIEVE IT
          WILL GIVE ACCURATE RESULTS IF USED CORRECTLY, WE SUPPLY THIS
          PROGRAM AS IS.  CIRCUIT SYSTEMS DISCLAIMS ALL WARRANTIES,
          EXPRESSED OR IMPLIED, THAT THIS PROGRAM IS FIT FOR ANY
          PURPOSE.  CIRCUIT SYSTEMS ALSO ASSUMES NO LIABILITY FOR ANY
          DAMAGES EITHER DIRECT OR CONSEQUENTIAL, WHICH MAY RESULT
          FROM THE USE OF THIS PROGRAM.


          Trademarks

          MS-DOS is a registered trademark of Microsoft Corporation.

          PC-DOS, PC/AT, PC/XT, and PS/2 are registered trademarks of
                    IBM Corporation.

          Compaq is a registered trademark of Compaq Computer Corp.

          Hercules is a registered trademark of Hercules Computer
                    Technology.



          Association of Shareware Professionals

          This program is produced by a member of the Association of
          Shareware Professionals (ASP).  ASP wants to make sure that
          the shareware principle works for you. If you are unable to
          resolve a shareware-related problem with an ASP member by
          contacting the member directly, ASP may be able to help. The
          ASP Ombudsman can help you resolve a dispute or problem with
          an ASP member, but does not provide technical support for
          members' products. Please write to the ASP Ombudsman at P.O.
          Box 5786, Bellevue, WA 98006 or send a Compuserve message
          via easyplex to ASP Ombudsman 70007,3536.



















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 4


          Introduction

          PC-ECAP is an easy to use AC circuit analysis program which
          analyzes circuits consisting of resistors, capacitors,
          inductors, transformers, transistors (both bipolar and
          FET's), operational amplifiers and transconductance
          amplifiers.

          Totally integrated in one package, it contains a full screen
          text editor for preparing analysis input, an electronic
          circuit analyzer that calculates your circuit's frequency
          and phase response, a high resolution display plotter that
          supports all common graphics adapters and a high resolution
          plotter for IBM/Epson compatible printers.


          Features:


               *    Completely menu driven - very easy to use.

               *    Can analyze circuits with up to 40 nodes - no
                    limit on the number of components.

               *    Built in full screen editor with on-line help
                    function.

               *    Free input format - common abbreviations such as
                    P, U, N, M, K, MEG, G are recognized.  For
                    example if your circuit has a 47pf capacitor, all
                    you need to enter for its value is 47pf.

               *    Supports CGA, EGA, VGA, Hercules and even the
                    Monochrome Display Adapter.

               *    All calculations are done in double precision -
                    14 digits of BCD.

               *    High resolution plots on IBM/Epson compatible
                    printers.

               *    Program may be configured to send its output to
                    LPT1, LPT2, LPT3 or a disk file.

               *    Bipolar transistor model maker.  Just enter your
                    transistor's operating parameters and PC-ECAP will
                    create a Hybrid-Pi model for your transistor.

               *    Does not need a numeric coprocessor.







           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 5


          System Requirements:


               *    IBM PC, XT, AT, PS/2 or compatible.

               *    PC or MS-DOS 2.0 or later.

               *    One floppy disk drive.

               *    182K of free memory - that is, 182K in addition to
                    the operating system and any resident programs
                    that you may have loaded.

               *    A CGA, EGA, VGA or Hercules compatible graphics
                    card is recommended for best performance.  But if
                    all you have is a monochrome display adapter,
                    PC-ECAP will even graph its results on that -
                    though the resolution will be much lower.

               *    An IBM/Epson compatible printer, if hard copy is
                    desired.  Most printers used with IBM and IBM
                    compatible computers support this standard.  Be
                    sure "IBM" mode is selected (usually by means of a
                    dip switch).
































           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 6


          Before You Begin

          The very first thing that you should do before going any
          further is to make a backup copy of your distribution disk.
          To do this just use the DOS command DISKCOPY.  This will
          work whether or not you have two floppy disk drives.  It
          also doesn't matter if the diskette that you want to copy to
          is formatted or not.  DISKCOPY will format it for you.

          From the DOS prompt type this:

               DISKCOPY A: B:

          You will be asked to "Insert source diskette in drive A:"
          This should be your original PC-ECAP disk.  Continue to
          follow the directions on the screen and you will have your
          backup copy.


          Installing PC-ECAP

          We have included an "Install" program with PC-ECAP to make
          installation very easy.  The Install program will not do
          anything "funny".  It will not modify your AUTOEXEC.BAT or
          your CONFIG.SYS files.  All it will do is create a
          subdirectory on your hard drive called "\ECAP".  Then it
          will copy all the needed PC-ECAP files from your floppy
          drive to that subdirectory.  That's all.  It is strictly for
          your convenience.  The default "from" drive is drive A: and
          the default "to" drive is drive C:.  These may be changed to
          any other drives as needed.

          If you don't have a hard drive, you don't need to proceed
          any further.  Skip the rest of this section and use your
          backup copy as your working disk.

          To use the install program, insert your backup copy of
          PC-ECAP into your floppy drive and type:

                    INSTALL

          Follow the directions and before you know it, you will have
          PC-ECAP on your hard drive.













           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 7


          Quick Start

          Although there is no substitute for reading this entire
          manual, I know there are those of you who can't wait to try
          a new program.  So for those who like to try-first-read-
          later, this will give you a taste of what PC-ECAP can do.

          Start PC-ECAP by typing:

               ECAP

          at the DOS prompt.

          From the  main menu choose the "Select input file"
          selection.  Select EXAMPLE1.DAT as your input file.  The
          circuit described by EXAMPLE1.DAT is a simple RC low-pass
          filter and is shown below.


                        1        1.59K                 2
                         ------/\/\/\/\------*---------
                                             |
                                             |
               input                      ___|___  .1uf      output
                                          _______
                                             |
                                             |
                                          0  |
                         --------------------*----------


          Now from the main menu choose "Analyze circuit".  The
          analysis will begin and you will see the results as the
          program progresses.  When the analysis is complete, the
          results will be plotted on your display.  First you will see
          a plot of Magnitude vs. Frequency.  If you press any key
          other than ESC you will get a plot of Phase vs. Frequency.
          Pressing any key (other than ESC) again will show you
          Magnitude again.  When you are finished, press ESC to return
          to the main menu.

          As I said, this is a taste - for the details read on.














           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 8


          Getting Started

          PC-ECAP is started by typing the following command at the
          DOS prompt:

                    ECAP   [ options ]

          The optional command line switches should not be needed by
          99% of computers, and therefore are covered separately in
          appendix A.

          When PC-ECAP is started, you will first see the main menu.
          The program has been designed to be very easy to use, and
          the menu system plays an important part in reaching this
          goal.  All menu choices may be selected in either one of two
          ways.  First, a selection may be made by typing the first
          letter of an item.  These are highlighted so they stand out.
          Selection may also be made by using the cursor keys (up
          arrow, down arrow, home and end) to highlight a choice.
          When "ENTER" is pressed the selection is made.  The program
          will do its best to logically anticipate your next choice.
          For example, after editing a circuit description and
          returning to the main menu, the choice "Analyze circuit"
          will be highlighted - assuming that after editing, you most
          likely will want to analyze your circuit.

          MAIN MENU Descriptions

          Select input file

               This selection will display an alphabetically sorted
               list of all the circuit description files in your
               current directory.  Use the cursor keys to select a
               file to use.  If you see "more . . ." displayed at the
               beginning or end of the list, this means that there are
               additional files on another page.  You can use the PgUp
               or PgDn keys in addition to the up arrow, down arrow,
               left arrow, right arrow, home and end keys to view
               them.  Once your choice is highlighted just press ENTER
               to select it.

               If you want to select a file that is not listed (for
               example - a new circuit description that you want to
               input) press F2.  A window will appear asking for the
               filename.  Type the filename and press ENTER.  All
               filenames should be eight characters or less in length.
               If you type in more than eight, only the first eight
               will be accepted.  A file extension is optional, if it
               is omitted the extension ".DAT" will be appended to the
               filename.  If a filename has an extension other than
               ".DAT", the ".DAT" extension will be substituted in its
               place.




           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 9


          If at any time you want to abort the current operation,
          pressing the ESC key will return you one level up in the
          program.

          Edit input file

               This starts the built-in full screen editor.  The file
               that you want to edit must be selected first.  If no
               file is selected, you will be sent to the "Select input
               file" screen and then returned to the editor.

               The editor is very straight forward to use, just type
               each line followed by the ENTER key.  When in the
               editor these keys have special meaning:

               Right Arrow  - move one character to the right.

               Left Arrow   - move one character to the left.

               Home         - move to the beginning of the line.

               End          - move to the end of the line.

               Up Arrow     - move one line up.

               Down Arrow   - move one line down.

               Cntrl Home   - move to the beginning of the file.

               Cntrl End    - move to the end of the file.

               PgDn         - move 20 lines down.

               PgUp         - move 20 lines up.

               Del          - will delete the character directly above
                              the cursor.

               Backspace    - will delete the character to the left of
                              the cursor.

               Ins          - will toggle between the insert and
                              replace modes.  In the insert mode the
                              cursor will change to a block cursor and
                              any characters typed will be inserted
                              between any characters already on the
                              screen.  When in replace mode, any
                              characters typed will type over those on
                              the screen.







           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 10


               In addition to these special keys, five function keys
               have special meaning.

               F1 Help

                    One of the features that has been added to make
                    PC-ECAP easy to use is the on-line help.  When F1
                    is pressed a window will appear containing useful
                    information on items such as circuit element
                    description formats, analysis range and sweep
                    type, value types and examples.  You can move
                    through these with the PgUp and PgDn keys.  When
                    you are ready to continue editing, pressing F1
                    again or the ESC key will close the window and let
                    you edit.

               F2 Model Maker

                    The model maker allows you to more accurately
                    model bipolar transistors.  The transistor model
                    used is the Hybrid-Pi model.  Despite its
                    simplicity, this model gives quite good results
                    for analysis up to about one half of the
                    transistor's cutoff frequency (Ft).

                    When the model maker is activated, a window will
                    appear.  You will first be asked for the node
                    numbers of the transistor.  Enter these pressing
                    the ENTER key after each entry for base, emitter,
                    and collector.  You next have to answer four
                    questions.  You will be asked (and need to know)
                    the following:
                    
                    Transistor DC collector current - hopefully you
                    will know this.  If not, try your best guess.

                    Transistor current gain or Beta - since the gain
                    of bipolar transistors varies with collector
                    current, the number that you enter here should be
                    at the collector current specified above for best
                    results.  Usually it is available in the data
                    sheet for the transistor.

                    Transistor Gain-Bandwidth product (Ft) - this also
                    should be at the collector current entered above
                    (check the data sheet).

                    Transistor common base output capacitance - this
                    is just the base to collector capacitance.
                    Usually it is listed as Cobo in the transistor
                    data.  (Which means output capacitance common base
                    with the emitter open).




           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 11


                    After all the information is entered, the window
                    will close and components for the model will be
                    inserted into your circuit description after the
                    current cursor line.

               F3 Insert Line

                    Pressing F3 will insert a blank line above the
                    current cursor line and move the cursor line and
                    all lines below it down.

               F4 Delete Line

                    Pressing F4 will delete the current cursor line
                    and move all lines below it up.

               F5 Find Component

                    The Find Component feature is useful to find
                    circuit elements in your circuit description file.
                    Just press F5, enter the element to be found, and
                    the line containing the element will be
                    highlighted with the cursor positioned there.  If
                    the element does not exist, a "Component not
                    found" message will appear.

               Leaving The Editor

               When you are finished with your editing, press the ESC
               key.  If you have made any changes to the file, you
               will be asked, "Save Changes (Y/N or <CR> for Yes)?".
               Answer "Y" to save all changes, or "N" to ignore all
               changes.  A carriage return will save all changes.























           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 12


          Analyze circuit

               This choice will begin the actual analysis of the
               circuit selected.  If a file containing the circuit
               description has not been selected, you will first be
               sent to the "Select input file" screen and then
               returned to begin analysis.

               PC-ECAP will subject your circuit to a 1 volt signal at
               the selected input node and then calculate the
               magnitude and phase response at the selected output
               node.  The input signal is from an ideal AC voltage
               source and therefore it can drive any impedance.  Any
               output node selected will not be loaded by PC-ECAP.

               This analysis is repeated for each of the frequencies
               in the specified input range.  The number of
               frequencies within the input range that PC-ECAP will
               subject your circuit to, is controlled by the "Change
               the number of sample points" option under the "Change
               program settings" choice of the main menu.  Its use
               will be fully explained under that heading.  As PC-ECAP
               progresses, it will display magnitude and phase results
               on the screen.  The results of the analysis are also
               saved in a disk file.  The file will have the same name
               as the circuit description file but will have a file
               extension of ".OUT".

               When the analysis is finished, the results will be
               plotted on your display.  For all display adapters
               other than VGA, PC-ECAP will use the highest resolution
               that your display adapter supports.  VGA adapters will
               be run in EGA mode (640 x 350).  The resolution used
               will be as follows:

                         CGA          640 x 200

                         EGA          640 x 350    enhanced display

                                      640 x 350    monochrome display

                                      640 x 200    color display

                         Hercules     720 x 348

                         VGA          640 x 350    monochrome or color

                         MDA          80 x 25

               Pressing any key other than ESC will toggle between the
               display of "Magnitude vs. Frequency" and "Phase vs.
               Frequency".  Pressing ESC will return to the main menu.




           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 13


          View output data

               This selection allows you to view the results of
               circuits that have been previously analyzed.  The
               results will be listed in tabular form on the display.
               You can use the cursor keys to move through them.  The
               cursor keys that are active under this selection are
               the following:

                    Up Arrow     - scroll up one line.

                    Down Arrow   - scroll down one line.

                    PgUp         - scroll up 19 lines.

                    PgDn         - scroll down 19 lines.

                    Home         - display the first 19 lines.

                    End          - display the last 19 lines.

               The analysis results can also be plotted on the display
               by pressing the F1 function key.  Plotting works the
               same way as described in the "Analyze circuit" section.
               Pressing any key except ESC will toggle between the
               magnitude and phase displays.  Pressing ESC will return
               you to the tabular listing of the data. Press ESC again
               to return to the main menu.

          Output to printer

               This choice will normally send the results of an
               analysis to a printer selected under the "Change
               program settings" option.  If desired, the results can
               instead be sent to a disk file for printing later.  The
               file will have a filename that is the same as the file
               selected, but with a file extension of ".PRN".

               In either case the output will consist of a listing of
               the circuit description at the time of analysis, a
               tabular listing of the analysis results, and high
               resolution plots of Magnitude and Phase vs. frequency.
               It is necessary to have a printer that is IBM/Epson
               compatible if printed output is desired.  Most printers
               used with IBM compatible computers support this
               standard, although in a few cases it may be necessary
               to select this mode by means of a switch on the
               printer.








           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 14


          Change program settings

               PC-ECAP allows you to configure certain aspects of its
               operation.  The configuration information is saved in a
               disk file that is read every time the program is run.
               The name of this file is "PC-ECAP.CFG".  If this file
               is not present it will be created.  This should only be
               necessary the very first time you run PC-ECAP.  The
               file will have as defaults, 70 sample points for
               analysis and LPT1 selected as the output destination.
               Both of these may be changed by means of this menu.

               Change the number of sample points

               When an analysis is performed, the desired frequency
               range is divided into a number of sample points.  The
               number of points may be set to 35, 70, 140, 280 or 560.
               It should be noted that you must obviously make a
               choice between the high analysis resolution provided by
               selecting 560 sample points and the faster
               computational speed offered by selecting 35 points.
               The number of points you select really depends on the
               circuits that you analyze.  I have found that for most
               circuits 70 sample points works quite well.  You should
               increase the number of points if you have a circuit
               that has abrupt changes in magnitude or phase.  You may
               also want to increase the number of points if you
               analyze circuits over a very wide frequency range.

               Select output destination

               The output from PC-ECAP can be sent to a printer
               designated as LPT1, LPT2, or LPT3.  Alternately output
               may be sent to a disk file for later printing.  For
               printed output, select the port that you have your
               printer attached to (normally this will be LPT1).

               Write changes to disk

               This selection will write any changes in configuration
               to the "PC-ECAP.CFG" file.  Select this option to make
               the changes you have made carry over to the next
               session of PC-ECAP.  If the changes are not written to
               disk, they will be in effect only for your current
               session.

               Return to main menu

               Returns you to the main menu.

          Quit this program

               Ends your current session with PC-ECAP and returns you
               to DOS.


           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 15


          Analyzing a Circuit Using PC-ECAP

          The first step in analyzing any circuit is to draw the
          circuit on a piece of paper.  Next number all the nodes in
          the circuit.  A node is any connection of 2 or more
          components.  Node numbers must be non-negative integers.
          There are two rules that you must follow when numbering
          nodes, first ground or the common connection between input
          and output must always be designated as node number 0.
          Secondly, although the nodes may be numbered in any order,
          none may be skipped.  PC-ECAP has a limit of 40 nodes but no
          limit on the number of components.

          Input Format

          The input format of a PC-ECAP circuit description is easy to
          learn and remember.  Fields describing a component are of
          the free format type and are simply separated by spaces.
          Circuit element names should begin with a letter designating
          the type of circuit element and may optionally be followed
          by up to 15 additional alphanumeric characters.

          Values used to describe a circuit element may be integer
          (100), floating point (1000.45), either an integer or
          floating point number followed by an integer exponent
          (1E-3, 4.7E6) or either an integer or floating point number
          followed by one of the following scale factors:

               P=1E-12   N=1E-9    U=1E-6    M=1E-3    K=1E3

                         MEG=1E6        G=1E9

          Letters immediately following a number that are not scale
          factors are ignored, and letters immediately following a
          scale factor are ignored.  So 10, 10ohms and 10Hz all
          represent the same number, and u, uf and umhos all represent
          the same scale factor.  Note that 1000, 1000.0, 1000Hz, 1E3,
          1.0E3, 1K and 1KHz all represent the same number.


















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 16


          Circuit Element Description

          Resistors

               RXXXX N1 N2 Value

          N1 and N2 are the two element nodes.  Value is the
          resistance in ohms.

          Examples:

               R1 1 2 100

               RLOAD 12 15 1K

          Capacitors

               CXXXX N1 N2 Value

          N1 and N2 are the two element nodes.  Value is the
          capacitance in farads.

          Examples:

               C4 8 9 1uf

               COSC 2 3 22pf

          Inductors

               LXXXX N1 N2 Value

          N1 and N2 are the two element nodes.  Value is the inductor
          value in henries.

          Examples:

               L3 7 0 10mh

               LTANK 4 5 56uh

          Transformers

               TXXXX +Pri -Pri +Sec -Sec  N

          +Pri and -Pri are the nodes for the transformer primary.
          +Sec and -Sec are the nodes for the transformer secondary.
          N is the turns ratio between primary and secondary (Np/Ns).
          The + and - signs denote the phasing of the windings,
          e.g. the +Pri node will be in phase with the +Sec node.

          Example:

               T1 3 0 4 5 10turns


           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 17


          Bipolar Transistors (both NPN and PNP)

               BXXXX NB NE NC Beta Rbe

          NB, NE, and NC are the base, emitter and collector nodes
          respectively.  Beta is the Transistor current gain.  Rbe is
          the equivalent base-emitter resistance (in ohms) used in the
          Hybrid-Pi transistor model.

          Example:

               B1 9 0 11 100 1250

          Field Effect Transistors  (both JFETs and MOSFETs)

               FXXXX NG NS ND Gm

          NG, NS, and ND are the gate, source, and drain nodes
          respectively.  Gm is the FET transconductance in mhos
          (Amps/Volt).

          Example:

               F2 3 4 0 2000umhos

          Operational Amplifiers

               OXXXX N+ N- NO Gain Rout

          N+, N-, and NO are the non-inverting input, inverting input
          and output nodes respectively.  The opamp output is
          referenced to ground (node 0).  Gain is the open loop gain
          of the opamp, usually somewhere between 10,000 and 1 million
          times.  Rout is the open loop output resistance for the
          opamp.  Real opamps usually have an output resistance
          between 10 and 150 ohms.

          Example:

               O1 1 2 2 100k 75
















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 18


          Transconductance Amplifiers

               GXXXX N+ N- NO+ NO- Gm

          N+ and N- are the non-inverting input and inverting input.
          NO+ and NO- are the non-inverting output and the inverting
          output.  Please note that these outputs are floating.  In
          other words the actual output is not from either output to
          ground, but is developed between the outputs.  Either output
          (but not both) may be tied to ground if a single ended
          output is desired.  Gm is the amplifier transconductance in
          mhos (Amps/Volt).  The transconductance amplifier may be
          used in its own right or it may be used to perform a voltage
          to current conversion, sometimes useful when simulating
          other devices.

          Example:

               GXXXX 1 2 3 0 100mmhos


          A Few Words About Transconductance Amplifiers

          Although most people are familiar with bipolar transistors
          and operational amplifiers, not as many know about
          transconductance amplifiers.  These amplifiers are another
          variation of a dependent source.  The common bipolar
          transistor is a current controlled current source; A small
          current entering the base controls a much larger current
          flowing between the collector and emitter.  The opamp is a
          voltage controlled voltage source; A very small input
          voltage effectively controls a much larger voltage swing at
          the output.  With this said, a transconductance amplifier
          can be described as a voltage controlled current source; A
          small voltage difference between the two inputs controls a
          current flowing either into or out of the output.  In our
          case this current will flow from one output to the other.



















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 19


          Specifying Analysis Parameters


          Once your circuit has been described you need to determine
          how it will be analyzed.  PC-ECAP will subject your circuit
          to a 1 volt signal at the selected input node and then
          calculate the magnitude and phase response at the selected
          output node.  The frequency of the input signal can be swept
          over the specified range in either a linear or logarithmic
          fashion.

          The PLOT statement is used to tell PC-ECAP which node of
          your circuit will be used for the input, which node will be
          used for the output, the frequency range that you want to
          analyze and the sweep mode (linear or logarithmic).

          This is the format for the PLOT statement:


               PLOT NI NO Start-frequency Stop-frequency Plot-mode


          PLOT may optionally be abbreviated to P.  NI is the
          circuit's input node.  NO is the circuit's output node.
          Start-frequency is simply the beginning frequency for the
          analysis.  Stop-frequency is the upper frequency limit of
          the analysis.  Plot-mode specifies whether a linear or a
          logarithmic frequency sweep is to be performed.  This may be
          abbreviated to 3 letters (LIN or LOG) if desired.

          As an example, we might have a circuit where node 2 is the
          input and node 5 is the output.  The lowest frequency that
          we want to look at is 100 Hz and the highest frequency is
          10 KHz.  Also lets sweep this range logarithmically.

          This PLOT statement will specify all this:

               PLOT 2 5 100HZ 10KHZ LOG


















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 20


          An Example Please!

          It's about time now to look at an example circuit.  We will
          analyze a simple RC low-pass filter.  The circuit is shown
          below.


                        1        1.59K                 2
                         ------/\/\/\/\------*---------
                                             |
                                             |
               input                      ___|___  .1uf      output
                                          _______
                                             |
                                             |
                                          0  |
                         --------------------*----------


          This circuit has 3 nodes and they have been numbered.
          Notice that we have numbered the common node between the
          input and the output as node 0.  This is required.

          The next thing to do is to describe the circuit to PC-ECAP
          so that it will know just what is connected to what and the
          component values associated with each part.  The next two
          lines will completely describe this circuit:

               R 1 2 1.59K
               C 2 0 .1UF

          The first line says to PC-ECAP that a resistor is connected
          between nodes 1 and 2 and has a value of 1.59K (notice that
          you don't have to enter 1500 for the resistor value, PC-ECAP
          understands what "K" means).

          The second line reads "a capacitor is connected between
          nodes 2 and 0 and has a value of .1uf".  Now all we have to
          tell PC-ECAP is where we want to put the input signal, where
          we want to look for the output and what frequency range we
          want to cover.  This is done with the PLOT statement.  For
          this circuit we want node 1 to be our input and node 2 to be
          our output.  Also we want to sweep the input frequency from
          100Hz to 10KHz in a logarithmic fashion.  The next line will
          tell PC-ECAP all this.

               PLOT 1 2 100 10KHZ LOG

          On your distribution disk (or in the archive file if you got
          this program from a BBS) you will find EXAMPLE1.DAT.  This
          file contains the circuit description for this circuit.





           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 21


          If you haven't started PC-ECAP yet do so now.  From the
          main menu choose the "Select input file" selection.  Select
          EXAMPLE1.DAT as your input file.  Next from the main menu
          choose "Edit input file".  The editor will load EXAMPLE1.DAT
          and you will see the following:


          ; Example1.dat - RC low-pass filter with a cutoff frequency
          ;                 of 1 KHz.

          R 1 2 1.59k
          C 2 0 .1UF
          PLOT 1 2 100 10KHZ LOG

          This circuit description tells PC-ECAP all that it needs to
          know about this circuit and how you want to analyze it.

          Press ESC to get back to the main menu and now choose
          "Analyze circuit".  The analysis will begin and you will see
          the results as the program progresses.  When the analysis is
          complete, the results will be plotted on your display.
          First you will see a plot of Magnitude vs. Frequency.  If
          you press any key other than ESC you will get a plot of
          Phase vs. Frequency.  Pressing any key (other than ESC)
          again will show you Magnitude again.  If you have an EGA
          with 256K of memory or a Hercules or VGA card, both pages of
          graphics memory will be used and the change from Phase to
          Magnitude and back will be instantaneous.


          Another Example

          We have included a few other sample circuits with PC-ECAP.
          EXAMPLE2.DAT is a 75 ohm high-pass filter that can be used
          to reject television interference.  EXAMPLE3.DAT is a
          band-pass filter for use as a modem receive filter.  If
          you'd like, take a look at them and run an analysis.  You
          may want to draw them on a piece of paper first to really
          see what you are doing.

















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 22


          For our last example we're going to take a look at
          EXAMPLE4.DAT.  This circuit is a single stage transistor
          amplifier made with a 2N3904 NPN transistor.  We will
          demonstrate the use of the "Model Maker" that is part of the
          full screen editor.  Here's the circuit:


                                                   +10 volts
                                             0  |
                                                \   R4
                                                /   470 ohms
                                                \
                                                /
                                       R3       |
                                      8.2K      |  3
                                  +--\/\/\/\----*---------
                                  |             |         output
                                  |            /
                        R1        |         | /
              1        270 ohms   |   2     |/       2N3904
                -------/\/\/\/\---*---------|
                                  |         |\
          input              R2   \         | \
                            1.2K  /           _\/
                                  \             |
                                  /             |
                                  |   0         |
                ------------------*-------------*---------



          As you can see the first thing you need to do is to number
          the nodes.  Please take a look at the top of R4.  This end
          of the resistor connects to the +10 supply voltage but we
          have numbered it as node 0.  This is an important point.
          Any node that has a DC voltage connection should always be
          connected to ground.  For the sake of an AC analysis, any DC
          voltage source is the same thing as ground.

          Now that we have numbered the nodes, we can describe the
          circuit:

               R1 1 2 270
               R2 2 0 1.2K
               R3 2 3 8.2K
               R4 3 0 470

          Alright, now we are ready for the NPN transistor.  The
          transistor that we are using is a 2N3904.  We could use a
          simple one line description for this transistor, but that
          wouldn't show what happens to the transistor at high
          frequencies.  What we need is a more sophisticated
          transistor model.  One that will change its characteristics
          as the frequency changes like a real transistor.


           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 23


          PC-ECAP has the capability to create just such a model.  But
          first you need to know some information about the transistor
          that you want to model.  This is what is required:


          DC collector current -

                         For this circuit about 10 milli-amps flows
                         from the collector to emitter.

          Transistor current gain -

                         At 10 ma. this is a minimum of 100.  This is
                         the same as Beta (the current gain at DC).

          Transistor Gain-bandwidth product -

                         For the 2N3904 with a collector current of 10
                         ma. this is 300 MHz minimum.  This is also
                         known as Ft.

          Common base output capacitance -

                         This is just the capacitance from the base to
                         the collector.  For the 2N3904 it is 4 pf
                         maximum.


          Now that we have the required information we can make a
          transistor model.  Please note that it doesn't matter for an
          AC analysis whether the transistor is NPN or PNP.

          From the editor press F2.  This will start the Model Maker
          function.  A window will appear and ask first for the node
          numbers for base, emitter and collector.  You would just
          enter 2, 0, and 3.  Then you will be asked for the
          information mentioned above.  After answering all the
          questions your model will be created and inserted into your
          circuit description on the line following the cursor.

          For this circuit we might want to know just how good a
          frequency response we have, so let's sweep a frequency range
          of 1 KHz to 100 MHz.  And let's do it logarithmically.  With
          node 1 as the input and node 3 as the output, this line
          should make PC-ECAP do what we want:

                    P 1 3 1KHZ 100MEG LOG

          As you might notice, PLOT can be abbreviated to P.

          That's all there is to it.  Run an analysis and see what
          kind of amplifier we have.  You should also try changing
          some component values to see what happens.  What happens if
          you decrease R1?  Or increase it?


           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 24


          Models

          The circuit models that PC-ECAP uses for Transformers,
          Bipolar transistors, FET's, Operational Amplifiers, and
          Transconductance Amplifiers are ideal models.  If you
          desire, you can easily create models that are more complex.

          For Bipolar transistors if your need a better model just use
          the "Model Maker" feature in the editor.  As previously
          discussed, a Hybrid-Pi transistor model will be created and
          inserted into your circuit description.

          For the transformer, the addition of two inductors will make
          a transformer that is quite "real".  You can add an inductor
          in parallel with the primary to model the transformer's
          magnetizing inductance.  This inductor should be equal to
          the transformer's primary inductance.  The transformer's
          manufacturer can supply the inductor value for this or you
          can measure it yourself (the secondary should be open for
          this test).  A second inductor can be added in series with
          the primary winding (and the inductor paralleling the
          primary).  This inductor will model the transformer's
          "leakage" inductance.  This inductance is due to the
          magnetic field that does not couple the primary and
          secondary windings.  Again, the transformer's manufacturer
          can supply this or you can measure it (measure the primary
          inductance as before, but this time short out the
          secondary).  By adding these two inductors, you will create
          a transformer that has a finite bandwidth.  The parallel
          inductor affects the low frequencies and the series inductor
          will affect the high frequencies.

          For FET's, the addition of a capacitor to model the gate to
          source capacitance and a second one to model the gate to
          drain capacitance will improve accuracy at high frequencies.
          You can get the appropriate values from your transistor's
          data sheet.  Also the Siliconix Low Power Discretes data
          book is an excellent source for more information on this.

          For FET's:     Cgs = Ciss - Cgd = Ciss - Crss

                         Cgd = Crss

          Operational Amplifiers today are usually frequency
          compensated internally.  Most of the time a method called
          "dominant pole compensation" is used.  This method inserts a
          pole in the opamp's frequency response at a very low
          frequency.  This pole will dominant the response (hence the
          name) and roll off at a 20 db/decade rate.  The opamp model
          that PC-ECAP uses is not frequency dependent.  The open-loop
          gain that you ask for is the gain that you will get for all
          frequencies.  It's not that difficult to make an opamp model
          that will decrease its gain as frequency increases.  Such a
          model is included on your disk as OPAMPMOD.DAT.  Please take
          a look at it.

           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 25


          References for Modeling

          Although we have tried to give you some useful information
          to use for modeling circuit elements, a full treatment of
          the subject is beyond the scope of this manual.  For those
          of you who are interested, a good college library should
          have several books that might help.  Two references that may
          be more readily available for many people are:

          "National Semiconductor Linear Applications Handbook" from

          National Semiconductor Corporation
          2900 Semiconductor Drive
          Santa Clara, CA 95052-8090

          This handbook has an excellent paper entitled "The
          Monolithic Operational Amplifier: A Tutorial Study".  This
          paper tells you just about everything that you would want to
          know about the inner workings of opamps.

          A good reference for FET's in general is:

          "Siliconix Low Power Discretes Data Book" by

          Siliconix Incorporated
          2201 Laurelwood Rd.
          Santa Clara, CA 95054-1516

          They have several interesting application notes on the use
          of FET's.


          Parting Comments

          A considerable amount of time and effort was expended to
          develop PC-ECAP.  We sincerely hope that you feel it was all
          worth it.  We want you to know that we don't intend to stop
          here.  We have several ideas for enhancements that we would
          like to add in future releases.  But it is you that will
          make it possible.  By registering your copy of PC-ECAP, you
          will help make the possible into reality.  Thanks for your
          support.


          Revision History

          Version 1.10 - added the option of 35 sample points to the
          select number of sample points menu.  Greatly increased the
          number of plot ranges available when displaying results.
          Magnitude now spans .1 db/div to 80 db/div and Phase now
          spans 22.5 degrees/div to 720 degrees/div.

          Version 1.02 - first release widely distributed.



           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 26


                        Appendix A - Command Line Switches


          PC-ECAP will automatically determine the type of video
          display adapter that your computer uses and will set itself
          accordingly.  There are a few situations where it is not
          possible to accurately determine the adapter type.  For
          example, if a monochrome monitor is used with a CGA card,
          the program has no way of knowing that.  Also, there are
          some advanced EGA cards that will change their display mode
          to match a given program.  Since PC-ECAP is trying to change
          its mode to match the video adapter, there can be no
          guarantee as to what you will actually wind up with.

          In order to accommodate these situations (as well as others
          that may be unforeseen at this time) PC-ECAP has a series of
          optional command line switches that can be used to set the
          video display mode.

          To start PC-ECAP with a command line option, type this at
          the DOS prompt:


                    ECAP    [ option ]


          Where "option" is one of the following:


               /H        Hercules Monochrome Graphics card (or
                         compatible).

               /C        Color/Graphics Adapter with color monitor.

               /CM       Color/Graphics Adapter with monochrome
                         monitor.  For use with Compaq monochrome
                         display or computers having LCD displays.

               /E        Enhanced Graphics Adapter with EGA monitor.

               /EC       Enhanced Graphics Adapter with CGA monitor.

               /EM       Enhanced Graphics Adapter with monochrome
                         monitor.

               /M        Monochrome Display Adapter.

               /N        Non-compatible video.  PC-ECAP normally
                         writes directly to video RAM for the fastest
                         possible screen display. If the /N option is
                         specified, all screen writes will go through
                         the BIOS.  Also, any on screen plotting will
                         be done using character graphics.  Use this
                         mode only if no other mode works on your
                         machine.

           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 27


                           Appendix B - Error Messages


          ABORT -- Too many circuit nodes

               You have 1 or more circuit nodes with a number greater
               than 40, either because you actually have a circuit
               with more than 40 nodes or you have made a typo and
               have inadvertently skipped some.


          CAUTION! Conflicting transistor parameters supplied

               The data that you have entered for your transistor
               doesn't make any sense.  For example - you may have
               said that your transistor has a very high cutoff
               frequency and then specified a huge base to collector
               capacitance.  Or you may have specified a very low
               collector current and a high cutoff frequency.  Things
               that contradict each other.  Recheck your data and
               change if necessary.


          HERC.DRV is not found

               You have a Hercules or Hercules compatible graphics
               card, and the required driver HERC.DRV is missing.
               This driver is needed to display text when PC-ECAP is
               in graphics mode.  If you have DOS version 3.0 or
               greater, PC-ECAP will look for this file in the same
               directory that contains ECAP.COM.  This may be
               different than the directory that contains your circuit
               files.  Otherwise, ECAP.COM and HERC.DRV should be in
               the current directory.


          Input File Size Limit Reached

               PC-ECAP allocates a 4K buffer for its text editor.
               Your circuit description file has exceeded this amount.
               The only way this should happen is if you have filled
               your circuit description file with comments or other
               none essential information.  Remove the extra data.  If
               you really believe that 4K is insufficient, let us
               know.


          Insufficient disk space

               Well, what can we say, your disk is full.  Delete those
               files that you really don't need or get a bigger disk.





           PC-ECAP Reference Manual           (c) 1990 Circuit Systems                                                            page 28


          LPT1, LPT2 or LPT3 is not ready

               You requested PC-ECAP to print something but your
               printer isn't ready.  Check to see that your printer's
               power is turned on.  Also check to see if your
               printer's cable is connected.  You will also get this
               message if you try to print on a printer that does not
               exist.


          No files found.  Enter name of new file.

               When you tried to select an input file, PC-ECAP didn't
               find any that had the extension ".DAT".  If you
               actually believe that there should be circuit
               description files in you current directory, quit
               PC-ECAP and check to see if you are in the correct
               directory.


          Please create this file or select another

               You have asked for an analysis of a circuit that does
               not exist.  Use the text editor to create a circuit
               description file for your circuit.


          Please run an analysis or select another

               You have asked to see the results of a circuit that you
               haven't analyzed yet.  Run an analysis.


          Your copy of PC-ECAP has been illegally modified!

               Someone or something (another program perhaps) has
               changed your copy of ECAP.COM.  PC-ECAP checks itself
               every time it runs and this check has failed.
               Reinstall the program.

















           PC-ECAP Reference Manual           (c) 1990 Circuit Systems
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2253

     Volume in drive A has no label
     Directory of A:\

    GO       TXT       885  10-17-90   8:59a
    GO       BAT        29  10-04-90   5:52a
    ECAP     COM     65152   9-14-90
    HERC     DRV      5197   9-14-90
    PC-ECAP  DOC     63616   9-14-90
    READ     ME       2319   9-14-90
    ORDERFRM          2082   9-14-90
    INSTALL  EXE     21312   9-14-90
    EXAMPLE1 DAT       131   9-14-90
    EXAMPLE2 DAT       384   9-14-90
    EXAMPLE3 DAT       512   9-14-90
    EXAMPLE4 DAT       384   9-14-90
    OPAMPMOD DAT       640   9-14-90
    FILE2253 TXT      3997  10-17-90   8:45a
           14 file(s)     166640 bytes
                          147456 bytes free
