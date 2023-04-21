---
layout: page
title: "PC-SIG Diskette Library (Disk #1757)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1757/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1757"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DRAFT-CAD"

    PC-DRAFT-CAD is an object-oriented CAD program for drawing or drafting
    on a PC. PCD-CAD is different from most drawing packages because it
    can store drawings as basic elements (such as points and lines) in a
    database.
    
    PCD-CAD has all of the standard functions for drawing circles, lines,
    curves, ellipses, boxes, etc., with or without a mouse. PCD-CAD goes
    further with the ability to change the scale of drawings (great for
    logos!) and create keyboard macros. Pull-down menus make it easy to
    use.
    
    Drawings can be exported in .GEM or .WPG file format to be used in
    desktop publishing programs like Ventura Publisher and WordPerfect.
    Several text fonts are available, as well as a database of commonly
    used objects.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1757.TXT

{% raw %}
```
Disk No: 1757                                                           
Disk Title: PC-Draft-CAD                                                
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: PC-Draft-CAD                                             
Author Version: 3.02                                                    
Author Registration: $65.00                                             
Special Requirements: CGA, and an IBM, Epson, HP LaserJet or HP DeskJet 
                                                                        
PC-DRAFT-CAD is an object oriented CAD program for drawing or drafting  
on a PC.  PCD-CAD is different from most drawing packages in that PCD-  
CAD can store drawings as basic elements such as points and lines in a  
database.                                                               
                                                                        
Like other products PCD-CAD has built-in functions for circles, curves, 
ellipses, lines, boxes, etc.  PCD-CAD goes further with the ability to  
change the scale of drawings (great for logos!) and create keybord      
macros.  The program operates with or without a mouse and has pull-down 
menus for ease of use.  Drawings can be exported in GEM or WPG file     
format so they can be used in desktop publishing programs like Ventura  
Publisher and WordPerfect.  Several text fonts are available, as well as
a database of commonly used objects.                                    
                                                                        
PCD-CAD will satisfy most drafting and drawing needs.                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GEMCAP.DOC

{% raw %}
```















                                   GEMCAP (TM)

					4.0



                                   USER MANUAL




                            (C) Copyright 1985 - 1990
                               All Rights Reserved

                                Natural Software
                              19 South Fifth Street
                              St. Charles, IL 60174
                                 (708) 377-7320





















     LICENSE

     THE GEMCAP SOFTWARE AND MANUAL ARE COPYRIGHTED, ALL RIGHTS ARE RESE-
     RVED. YOU HAVE PURCHASED A LICENSE TO USE THIS SOFTWARE ON ONE MACHINE
     AT A TIME. YOU ARE AUTHORIZED TO MAKE COPIES OF GEMCAP FOR THE SOLE
     PURPOSE OF BACKING UP YOUR SOFTWARE AND PROTECTING YOUR INVESTMENT
     FROM LOSS.

     Note: this copy of GEMCAP is being distributed as ShareWare. This
     means that you may copy the disk just as you received it and you may
     give it to others for their trial use. You are also permitted and
     encouraged to upload this version to electronic bulletin board servic-
     es. You may not, however resell or collect any fee for the distribu-
     tion of GEMCAP without the permission of Natural Software. (This does
     not include the normal fees for using bulletin boards.) If you contin-
     ue to use GEMCAP after your trial use, you must pay the purchase price
     as detailed below.

     WARRANTY

     THIS SOFTWARE WILL PERFORM AS DESCRIBED HEREIN ONLY IF PROPERLY AP-
     PLIED. OUR LIABILITY TO YOU IS LIMITED TO REPLACING THE SOFTWARE (FOR
     REGISTERED USERS ONLY). WE HAVE NO LIABILITY TO YOU FOR ANY DAMAGE OR
     LOSS, INCLUDING SPECIAL, INCIDENTAL, OR CONSEQUENTIAL, CAUSED BY THIS
     SOFTWARE, DIRECTLY OR INDIRECTLY.

     YOU AGREE TO THE TERMS OF THIS LICENSE BY YOUR DECISION TO USE THIS
     SOFTWARE.


               _______                       This program is produced by
          ____|__     |               (tm)   a member of the Association
       --|       |    |-------------------   of Shareware Professionals
         |   ____|__  |  Association of      (AS). ASP wants to make sure
         |  |       |_|  Shareware           that the shareware principle
         |__|   o   |    Professionals       works for you. If you are
       -----|   |   |---------------------   unable to resolve a shareware
            |___|___|    MEMBER              related problem with an ASP
                                             member by contacting the member
                                             directly, ASP may be able to
     help. The ASP Ombudsman can help you resolve a dispute or problem with
     an ASP member, but does not provide technical support for members'
     products. Please write to the ASP Ombudsman at P.O. Box 5786, Belle-
     vue, WA 98006 or send a Compuserve message via easyplex to ASP Ombuds-
     man 70007,3536"







                                Table of contents

     Introduction  . . . . . . . . . . . . . . . . . . . . . . . . .      1
        ShareWare  . . . . . . . . . . . . . . . . . . . . . . . . . .    2

     Using GEMCAP  . . . . . . . . . . . . . . . . . . . . . . . . . .    3
        Starting GEMCAP  . . . . . . . . . . . . . . . . . . . . . . .    3
        The Hot Key  . . . . . . . . . . . . . . . . . . . . . . . . .    3
        Customizing the Hot Key  . . . . . . . . . . . . . . . . . . .    4
        Removing GEMCAP  . . . . . . . . . . . . . . . . . . . . . . .    5

     Text Mode Screens . . . . . . . . . . . . . . . . . . . . . . . .    6
        Text mode fonts  . . . . . . . . . . . . . . . . . . . . . . .    6
        Image Size . . . . . . . . . . . . . . . . . . . . . . . . . .    7

     Graphic Mode Screens  . . . . . . . . . . . . . . . . . . . . . .    8































                                       ii








                                  Introduction



     GEMCAP.COM is a Terminate and Stay Resident (TSR) program that cap-
     tures screen images from other programs. It saves these images in
     separate GEM .IMG files. In the case of text based screens, the text
     is converted to a bitmap. The GEM .IMG graphic file format is one of
     the several "standard" formats that many other programs can read. The
     primary use of GEMCAP is to incorporate screen images into desktop
     publishing documents. Both Ventura Publisher and WordPerfect version
     5.0 (and 5.1) can read GEM .IMG format.

     GEMCAP supports a variety of display adapters and different display
     modes:

     Monochrome   Standard IBM monochrome display adapters support text
                  modes only. GEMCAP will capture text mode displays and
                  convert them to bitmap files. To use the resulting .IMG
                  files, however you must have some type of display adapter
                  that can display graphics.

     CGA          On IBM Color Graphics Adapters (CGA), the high resolution
                  640 by 200 pixel (mode 6) is supported in addition to the
                  various text modes.

     EGA          GEMCAP can capture EGA 640 by 350 pixel 16 color (mode
                  10h) graphics screens.

     VGA          GEMCAP can capture VGA 640 by 480 pixel 16 color (mode
                  12h) graphics screens.

     Hercules     GEMCAP will not work on Hercules displays in graphics
                  mode. It will capture text mode screens from Hercules.
                  You can use your desktop publishing program to use the
                  resulting GEM .IMG files with Hercules displays.

     On EGA and VGA displays in text mode, GEMCAP uses the RAM resident
     font to convert the screen to a bitmap. This means that the resulting
     bitmap represents the captured text screen exactly as it appears on
     the screen, even if the program loads a specialized font.





     Introduction                                                         1







     ShareWare

     The GEMCAP package is being distributed as shareware. This means that
     it is not free. This means that you must pay to use it. However, you
     do not have to pay to try it, test it, and to determine if it is going
     to be useful to you. You are probably familiar with the concept by
     now. Shareware programs give you the advantage of "test driving" them.
     The advantage to the developer is a relatively inexpensive distribu-
     tion method. For this concept to work and keep working for our mutual
     advantage, you really must register and pay for the software you
     actually find useful.

     Please feel free to pass along a copy of this disk to others for their
     trial use. But please distribute it in its original unaltered state.
     The compressed arc file: GEMCAP.ZIP is intended for uploading to your
     local bulletin boards.

     To register your use of GEMCAP, send $35.00 to Natural Software at the
     address above. This entitles you to one upgrade to the next new
     release for free (please specify the version you currently have when
     registering). We will also send you a description of our other soft-
     ware offerings (including PC-Draft II which lets you to edit and
     enhance your captured images) and provide free telephone support as
     needed.

     You may use the order form provided in the file: ORDER.FRM.

     Please read the file: PRODUCTS.LST for descriptions of other products
     from Natural Software.






















     2                                                                GEMCAP








                                  Using GEMCAP


     GEMCAP is a Terminate and Stay Resident (TSR) program. When you run it
     from the DOS command line, it will announce its presence and quietly
     sink into the background and wait to be called into action (when its
     "hot key" is pressed).

     Starting GEMCAP

     When you run GEMCAP, you must provide it with the location and start-
     ing file name to use to store the screen images it captures. For
     example, you might start GEMCAP with this command:

             GEMCAP C:\SCREENS\SCREENA.IMG

     Now GEMCAP will store its screens in the SCREENS sub-directory. Note
     that the SCREENS sub-directory must already exist. The first screen it
     saves will be called SCREENA.IMG, the second will be called
     SCREENB.IMG. Each subsequent .IMG file will increment the character in
     the filename just before the extension. These files are graphic bit
     image files compatible with any program that reads GEM .IMG files,
     regardless of whether the original screen was in text mode or graphics
     mode.

     Note that this convention (of incrementing the last character in the
     filename for each file) limits you to 26 screen saves at a time. This
     is because if you start with the letter A, it will cycle through the
     alphabet until it gets to Z, then the next character in ASCII sequence
     is a "[", which is invalid for a filename. If you need more than 26
     files, you must remove GEMCAP from memory and reload it with a differ-
     ent initial filename.


     The Hot Key

     To activate GEMCAP and save the current screen to a .IMG file, you
     Press the (Alt + .) keys (that's the period key and the Alt key) togeth-
     er. You will hear a beep when GEMCAP is called. Three beeps means it
     successfully wrote an .IMG file to the specified directory. Only one
     beep means it was unable to create the file (could not find the
     directory?). Only two beeps means it created the file, but could not
     write the full screen buffer, (disk full?).



     Using GEMCAP                                                           3







     The size of the file GEMCAP creates depends on the current display
     mode. 

     GEMCAP will detect the current video mode and adjust. It converts text
     mode screens into bit mapped graphics.

     Like any other TSR, GEMCAP may have compatibility problems with other
     software, especially other TSR's. If you have trouble, try installing
     GEMCAP by itself and adding your other TSR utilities one at a time
     after you get GEMCAP to work.


     Customizing the Hot Key

     If you have a conflict with other resident programs, you may need to
     change GEMCAP's hot key. You must use DEBUG to make the change. There
     are two bytes in the GEMCAP.COM file that may be changed. The first
     byte represents the keyboard scan code and the second byte represents
     the shift key state. The following two tables show the values (in
     hexadecimal) for all the possible keyboard scan codes and shift key
     states. After consulting the tables, use DEBUG to enter the values as
     shown below (for example to change the hot key to (Ctrl+Z):

        DEBUG GEMCAP.COM
        E 0103
        xxxx:0103 34.2C    ; shows existing scan code, enter new code: 2C
                             (for 'Z')
        E 0104
        xxxx:0104 08.04    ; shows existing shift state, enter new code: 04
                             (for 'Ctrl')
        W                  ; save changes
        Q                  ; quit DEBUG



     4                                                                  GEMCAP


     This table shows keyboard scan codes for alternate hot keys:

                   Key       Hex    Key     Hex    Key       Hex
                   -----     -----  -----   -----  -----     -----
                   Esc        01    Enter    1C    PrtSc     37
                   !1         02    Ctrl     1D    Alt       38
                   @2         03    A        1E    Space     39
                   #3         04    S        1F    CapLk     3A
                   $4         05    D        20    F1        3B
                   %5         06    F        21    F2        3C
                   ^6         07    G        22    F3        3D
                   &7         08    H        23    F4        3E
                   *8         09    J        24    F5        3F
                   (9         0A    K        25    F6        40
                   )0         0B    L        26    F7        41
                   _-         0C    :;       27    F8        42
                   +=         0D    "'       28    F9        43
                   backsp     0E    ~`       29    F10       44
                   tab        0F    L Sft    2A    NumLk     45
                   Q          10    |\       2B    ScrLk     46
                   W          11    Z        2C    Home      47
                   E          12    X        2D    Up        48
                   R          13    C        2E    PgUp      49
                   T          14    V        2F    -         4A
                   Y          15    B        30    Left      4B
                   U          16    N        31    5         4C
                   I          17    M        32    Right     4D
                   O          18    <,       33    +         4E
                   P          19    >.       34    End       4F
                   {[         1A    ?/       35    Down      50
                   }]         1B    RSHFT    36    PgDn      51

     The following table shows the hexadecimal values for the possible
     shift key states:

            Shift key value |   Alt |  Ctrl  |  Left  |  Right
                            |       |        |  Shift |  Shift
            ----------------+-------+--------+--------+-------
                   0        |       |        |        |    
                   1        |       |        |        |   *
                   2        |       |        |   *    |
                   4        |       |   *    |        |
                   5        |       |   *    |        |   *
                   6        |       |   *    |   *    |
                   7        |       |   *    |   *    |   *
                   8        |   *   |        |        |
                   9        |   *   |        |        |   *
                   A        |   *   |        |   *    |
                   B        |   *   |        |   *    |   *
                   C        |   *   |   *    |        |
                   D        |   *   |   *    |        |   *
                   E        |   *   |   *    |   *    |
                   F        |   *   |   *    |   *    |   *
            ----------------+-------+--------+--------+-------

     5                                                                 GEMCAP


     Removing GEMCAP

     You can remove GEMCAP from memory by running GEMCAP with a command
     line argument: -R. for example:

          GEMCAP  -R

     GEMCAP must be the last TSR program loaded for this to work properly.
     By removing and then reloading GEMCAP you can change the filename so
     that you can save more than 26 screens.


                                Text Mode Screens


     When the screen is in text mode when GEMCAP is run, it converts each
     screen character to a bitmap. This means that when you display or
     print the resulting GEM .IMG files with your desktop publishing
     program, you will get exactly what is displayed on the screen.

     Text mode fonts

     With monochrome, CGA, or Hercules display adapters, an internal
     (within GEMCAP.COM) 8 by 8 pixel font is used.

     On EGA or VGA display adapters, the RAM resident font (on the EGA or
     VGA adapter) is used.

     GEMCAP does not produce color GEM .IMG files. It converts color
     attributes to monochrome (Black & White) as described below.

     GEMCAP converts reverse video areas of the screen appropriately. Any
     color attribute combination that results in darker characters with a
     lighter background will be converted to reverse video. The following
     color attribute combinations on the captured screen will result in
     reverse video:

        any of these background  With these foreground
        -----------------------  ---------------------
        green                    black     grey
        cyan                     blue      lt blue
        brown                    red       lt red
        white                    magenta   lt magenta

     If you wish to reverse the entire screen, for example from white on
     black to black on white, load GEMCAP with the following command line
     argument (-R) as shown below:

        GEMCAP -R C:\SCREENS\SCREENA.IMG

     GEMCAP will correctly capture different sized text mode screens. For
     example, it can handle EGA text mode screens with 43 lines and VGA
     text mode screens with 50 lines. It adjusts the internal pixel size so
     that screens with different numbers of lines will display with the
     correct aspect ratio.

     Text Mode                                                           6






     Image Size

     Note that with Ventura Publisher or WordPerfect 5.0, the size of the
     image when incorporated into your document is dependent on the size of
     the frame (VP) or figure (WP). For best results, you must adjust this
     size (within VP or WP) so that pixels are not truncated or compressed.
     You can calculate the best size for the image in your document based
     on the horizontal and vertical resolution of your printer. For example
     lets say you capture a VGA text mode screen that has 80 columns and 25
     lines. The font size in this mode is 8 by 16 pixels. This means that
     there are 400 (16 times 25) scan lines in the image and it is 640
     pixels horizontally (80 times 8). You must size the image so that the
     number of pixels in the image is evenly divisible by the printer
     resolution. Therefore, if you have a laser printer or DeskJet printer
     that prints at a resolution of 300 dots per inch (both horizontal and
     vertical), a frame size  of 2.13 inches by 1.33, or 4.27 inches by
     2.67 inches would produce non-distorted output. Note that you must
     account for the inside border space and border width when sizing
     figures in WordPerfect.




























     7                                                                 GEMCAP








                              Graphic Mode Screens


     When the screen is in a graphics mode, GEMCAP stores the image pixel
     by pixel in the GEM .IMG file. The most common high resolution graph-
     ics modes of the various display adapters are supported as follows:

             CGA  640 x 200 x 2 color (mode 06h)
             EGA  640 x 350 x 16 color (mode 10h)
             VGA  640 x 480 x 16 color (mode 12h)

     Since GEMCAP does not produce color GEM .IMG files, when EGA/VGA 16
     color modes are detected, it converts the color to monochrome (Black &
     White) as described below.

             These dark colors are converted to Black:

               Black     Gray
               Blue      Hi-intensity Blue
               Green     Hi-intensity Green
               Cyan      Hi-intensity Cyan

             These light colors are converted to White:

               Red       Hi-intensity Red
               Violet    Hi-intensity Violet
               Yellow    Hi-intensity Yellow
               White     Hi-intensity White

     The size of the GEM .IMG file will vary. GEMCAP compresses the data in
     the file as much as possible (for GEM .IMG file formats) by checking
     for duplicate scan lines in the original image. The more complex the
     image, the larger the file size.













     Graphics Mode                                                         8


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1757

     Volume in drive A has no label
     Directory of A:\

    PCDCAD1  EXE    131856   7-26-90   7:58a
    PCDCAD2  EXE    115004   7-11-90   2:38p
    PCDCAD3  EXE     74073   6-13-90   9:45a
    INSTALL  BAT      4983   4-13-90  11:33p
    ORDER    FRM      2161   7-26-90   7:57a
    GEMCAP   ZIP     13254   7-26-90  11:44p
    GO       BAT        38   1-01-80   1:37a
    READ     ME       8552   7-26-90   7:57a
    FILE1757 TXT      2221   9-05-90  10:47a
    GO       TXT       540   1-01-80   3:45a
           10 file(s)     352682 bytes
                            4096 bytes free
