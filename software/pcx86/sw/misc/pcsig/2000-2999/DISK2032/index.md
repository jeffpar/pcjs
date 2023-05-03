---
layout: page
title: "PC-SIG Diskette Library (Disk #2032)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2032/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2032"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MPLUS GRAPHIC INTERFACE LIBRARY"

    MPLUS is a graphic interface library for Microsoft C version 5.0 and up.
    If your application generates business or scientific plots, or if you
    need to wrap an interface around an art program or your favorite fractal
    generator, MPLUS will simplify your task.
    
    It provides four basic tools.  The first is a graphic window which can
    display both text and graphics.  The second tool provides three dialogue
    boxes to display a general message, a warning message, and an error
    message.  The third tool is a bar menu with pull down windows.
    Functions and menu titles are easily plugged in.  The bar menu also
    recognizes input from either the mouse or the keyboard. Finally, there
    is mouse support.  These mouse routines are not purely a rehash of the
    mouse interrupt, 33H.  You'll also find an event handler and a function
    which retrieves input from the keyboard and mouse.  The documentation is
    80 pages long and provides a complete reference to all of the functions
    provided.
    
    MPLUS is a user-supported program.  The shareware version contains only
    the small model library, but registration provides the medium, compact,
    and large models, a laser printed manual (double sided and in a Times
    Roman font), two free upgrades, and support via U.S. mail, Compuserve
    and voice mail.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2032.TXT

{% raw %}
```
Disk No: 2032                                                           
Disk Title: MPLUS Graphic Interface Library                             
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: MPLUS Graphic Interface Library                          
Author Version: 1.3                                                     
Author Registration: $50.00                                             
Special Requirements: CGA, VGA, or EGA, Microsoft C version 5.0, and mou
                                                                        
MPLUS is a graphic interface library for Microsoft C version 5.0 and up.
If your application generates business or scientific plots, or if you   
need to wrap an interface around an art program or your favorite fractal
generator, MPLUS will simplify your task.                               
                                                                        
It provides four basic tools.  The first is a graphic window which can  
display both text and graphics.  The second tool provides three dialogue
boxes to display a general message, a warning message, and an error     
message.  The third tool is a bar menu with pull down windows.          
Functions and menu titles are easily plugged in.  The bar menu also     
recognizes input from either the mouse or the keyboard. Finally, there  
is mouse support.  These mouse routines are not purely a rehash of the  
mouse interrupt, 33H.  You'll also find an event handler and a function 
which retrieves input from the keyboard and mouse.  The documentation is
80 pages long and provides a complete reference to all of the functions 
provided.                                                               
                                                                        
MPLUS is a user-supported program.  The shareware version contains only 
the small model library, but registration provides the medium, compact, 
and large models, a laser printed manual (double sided and in a Times   
Roman font), two free upgrades, and support via U.S. mail, Compuserve   
and voice mail.                                                         
                                                                        
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
║     <<<<  PC-SIG Disk #2032  MPLUS Graphic Interface Library   >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To read author's "last minute notes," type:  TYPE README.DOC (Enter)    ║
║                                                                         ║
║ To print the REFERENCE GUIDE, type:  COPY MPLUS.DOC PRN (press Enter)   ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MPLUS.DOC

{% raw %}
```














                                Start of MPLUS.DOC

                  This document is approximately 100 pages long.




                    ******************************************
                    HP LaserJet Owners: set form length to 66
                    ******************************************

























































                   The  MPLUS(TM)  Graphic  Interface  Library

                                   Version 1.3
                                September 1, 1990


                                 Reference  Guide
                                   Disk Version






                                   Michael Yam
                             230 East 88th St. Apt 6B
                                New York, NY 10128

                                  (212) 996-2582

                            Compuserve ID: 76367,3040













                        Copyright 1989, 1990  Michael Yam
                               All Rights Reserved.



























































         COPYRIGHTS

         MPLUS Software Copyright 1989, 1990 by Michael Yam.  All rights
         reserved.
         This document Copyright 1989, 1990 by Michael Yam.  All rights
         reserved.



         TRADEMARKS

         MPLUS (TM) is a trademark of Michael Yam.

         Other brand and product names are trademarks or registered
         trademarks of their respective companies.









         MPLUS                                                    Contents





         CONTENTS
         --------



                  Registration


                  Introduction


                  Chapter 1.    Getting Started


                  Chapter 2.    Graphic Support


                  Chapter 3.    Graphic Windows


                  Chapter 4.    Graphic Dialogue


                  Chapter 5.    Graphic Image


                  Chapter 6.    Menu Bar


                  Chapter 7.    Mouse Support


                  Appendix A.   Function Index


                  Appendix B.   Revision History


                  Appendix C.   Library Incompatibilities


                  Appendix D.   About Source Code


                  Appendix E.   Shareware


                  Appendix F.   Obtaining Support






         Copyright 1989, 1990 by Michael Yam





         MPLUS 1.3                                           Registration




         REGISTRATION
         ------------



         LICENSE


         MPLUS is copyright (C) 1989, 1990 by Michael Yam.

         All versions of MPLUS are not free, nor are they public domain.
         MPLUS is distributed as shareware -- a concept which brings
         quality software to market at a modest price (see Appendix E).

         As a non-registered user, you may use the MPLUS small model
         library for personal and non-commercial purposes.  To this
         extent, no registration fee is required.

         You may distribute the small model library of MPLUS, and are
         encouraged to do so but with the following limitations:

             No price or other consideration may be charged.
             Distribution costs, however, may be charged for the cost of
             the disk, and shipping and handling, as long as it does not
             exceed twelve dollars ($12.00) total.

             The MPLUS library and on-disk documentation may not be
             modified in any way and must be distributed together.

             MPLUS may not be distributed or sold as part of any other
             product.

             The printed manual may not be copied or reproduced in any
             way.


         If your use of MPLUS goes beyond personal use, or should your
         needs require the MPLUS medium, compact, or large model
         libraries, or source code, you are required to register your
         copy.

         Registration grants you a license to use the MPLUS library on a
         regular basis and to distribute your programs created with the
         MPLUS library.  This license is royalty-free.  This license is
         also a single-user one; you may use MPLUS on any computer as
         long as only one person uses it at a time.

         You may not distribute the medium, compact, and large models of
         the MPLUS library.  The author reserves the exclusive right to
         distribute these libraries.

                                           (continued on next page...)



         Copyright 1989, 1990 by Michael Yam                            1





         MPLUS 1.3                                           Registration


         LICENSE (... continued from previous page)


         Source code is available under the following terms:

             You may not distribute the source code.

             The copyright notices must remain in the source code.  It is
             your responsibility to identify and document any changes you
             make to the source code.

             You may modify the source code and/or incorporate it into
             your programs provided your final product for distribution
             is not of similar nature to MPLUS.



























         DISCLAIMER OF WARRANTY

         THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT WARRANTIES
         AS TO PERFORMANCE OF MERCHANTABILITY OR ANY OTHER WARRANTIES
         WHETHER EXPRESSED OR IMPLIED.  BECAUSE OF THE VARIOUS HARDWARE
         AND SOFTWARE ENVIRONMENTS INTO WHICH THIS PROGRAM MAY BE PLACED,
         NO WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE IS OFFERED.

         GOOD DATA PROCESSING PROCEDURE DICTATES THAT ANY PROGRAM BE
         THOROUGHLY TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON IT.
         THE USER MUST ASSUME THE ENTIRE RISK OF USING THE PROGRAM.  ANY
         LIABILITY OF THE SELLER WILL BE LIMITED EXCLUSIVELY TO PRODUCT
         REPLACEMENT OR REFUND OF PURCHASE PRICE.



         Copyright 1989, 1990 by Michael Yam                            2





         MPLUS 1.3                                           Registration


         ORDER INFORMATION


         MPLUS is available in two flavors:

             1) Small model.  Documentation on disk.
             2) Registered version (includes source code).


         For personal, non-commercial use, the small model MPLUS library
         is available for twelve dollars ($12.00).  This fee covers the
         cost of materials, shipping, and handling.  You may also
         download a copy from Compuserve.  MPLUS resides in the IBMPRO
         forum under "C" (library 3).

         Registration costs fifty dollars ($50.00) per copy and provides
         the following:

             -- All source code.
             -- Small, medium, compact, and large model libraries.
             -- Laser printed manual (Times Roman font).
             -- Support via U.S. mail, Compuserve email, and voice mail.
                (see Appendix F.)
             -- Upgrades at a discount.


         A registered copy of MPLUS licenses you to use the product on a
         regular basis and to distribute your programs created with the
         MPLUS library.  The license is royalty-free and single-user.

         The success of any product depends on its customers'
         satisfaction.  Comments, good and bad, are welcome.  Note: you
         do not have to be a registered user to submit suggestions or
         complaints.

         Please use the order form on the next page.





















         Copyright 1989, 1990 by Michael Yam                            3





         MPLUS 1.3                                           Registration


         ORDER FORM

         Send check to:

             Michael Yam
             230 East 88th St.  Apt 6B
             New York, NY 10128


                            Quantity  Price Each     Total Price

         Small Model Only   _____     $12.00         $_________

         Registered Version
         with Source code   _____     $50.00         $_________

         Orders outside the U.S.,
         please add                    $5.00         $_________

                                           TOTAL:    $_________



         Disk Format (check one):  5 1/4" _____      3 1/2" _____


         Ship To:

            Name: _________________________________________

         Company: _________________________________________

         Address: _________________________________________

                : _________________________________________

            City: ____________________  State: _____   Zip: __________

         Country (if outside of U.S.): _______________________________

         Day Phone: _____________________  Compuserve id: ____________


         Where did you hear about MPLUS? _____________________________









         Domestic orders shipped via U.S. Priority Mail.



         Copyright 1989, 1990 by Michael Yam                            4





         MPLUS                                               INTRODUCTION






         INTRODUCTION
         ------------


         MPLUS is a graphic interface library for Microsoft C.  If your
         program includes business or scientific charts, fractal images,
         or just sets one pixel, MPLUS may be of use.  By providing
         menus, windows, dialogue boxes, and mouse support, MPLUS gets
         your program up to speed quickly and easily.


         Is MPLUS for you?  When designing your application...

         Remember your software's needs.  If your program deals only with
         characters, a text based windowing system may be what you need.
         If your program requires graphing, multi-tasking, dynamic data
         exchange between applications, and a real time feed to a stock
         quotation system, you may need Microsoft Windows or OS/2.  MPLUS
         is best suited for single-tasking, graphical applications.

         Remember your audience.  Will your end-user have a fast 386
         machine with 4 megabytes?  Or will your end-user own IBM's new
         286 based PS/1 for home and school?  Requiring relatively little
         memory, MPLUS will fit comfortably in both extremes.

         Remember your timetable.  If you have 5 or more years to develop
         your project, then a long term outlook is necessary.  By then,
         fast 386 machines with 4 megabytes should be commonplace and
         OS/2, Unix, or Windows may be the proper choice for a platform.
         Projects due out in less than 5 years may benefit from MPLUS.
         The venerable 286-AT class machine with 640k is today's and
         tomorrow's most popular machine.  And it won't disappear anytime
         soon (I understand there are still 8088 PCs around).

         It's evident that the application's requirements, its audience,
         and its timetable, are all critical in choosing an interface and
         environment.  From a programmer's view, MPLUS' major strengths
         are low memory requirements, a low learning curve, and an
         uncluttered look.  These qualities make MPLUS effective for
         prototyping as well as producing a finished product.  Clearly,
         MPLUS' simplicity doesn't allow it to do as much as the "big
         GUIs", and for some of you, that will be a drawback.  For
         others, simplicity is a virtue.










         Copyright 1989, 1990 by Michael Yam                            i





         MPLUS                                               INTRODUCTION


         Using the MPLUS library requires some familiarity with
         Microsoft's GRAPHICS library.

         Chapter 1 describes the contents of the distribution diskette
         and "getting started" with this package.  Also, read this
         chapter for MSC 5.0 to 6.0 migration issues.

         Chapter 2 contains two functions which must supersede
         Microsoft's versions: mpsetvideomode() and mpouttext().

         Chapter 3 introduces GWDW, a graphic window.  In GRAPHICS.LIB
         text and graphic output were separated, the former displayable
         only in text windows, the latter allowed only in graphic
         viewports.  The graphic window is a hybrid of the two, where
         both text and graphics can be presented.

         Chapter 4 discusses an extension to the graphic window: the
         dialogue box.  It presents information on the screen, and at a
         simple level, allows the user to interact with your program.

         Chapter 5 is about graphic images -- picking them up, sliding
         them across the screen, and putting them down.  Also described
         are two functions used for rubberbanding effects: xorpt() and
         xorline().

         Chapter 6 describes the menu system.  It provides a bar menu and
         up to 5 levels of submenus. Menu titles and program functions
         are easily plugged in.

         Chapter 7 provides support for the Microsoft or compatible
         mouse.  The routines here are not purely "C" interfaces to the
         mouse interrupt, 33H.  You'll also find an event handler and a
         function which retrieves input from both the mouse and the
         keyboard.























         Copyright 1989, 1990 by Michael Yam                           ii





         MPLUS                                            GETTING STARTED






         CHAPTER 1
         ---------


         SYSTEM REQUIREMENTS

             PS/2, PC/XT/AT or close compatible.
             DOS 2.0 and up.
             CGA, EGA, or VGA graphic display (EGA or VGA recommended).
             Microsoft C version 5.0, 5.1, 6.0 (with GRAPHICS.LIB).
             Microsoft or compatible mouse (optional).


         ON DISK

         The distribution disk contains the following files:


             MPLUS.DOC           MPLUS documentation.
             README.DOC          Last minute changes.
             MPDEMO.EXE          Demos MPLUS' latest features.

             SMPLUS.LIB          Small model  (medium, compact, and large
                                 models provided upon registration).

             GPLUS.H             Header file for MPLUS graphics
                                 functions.
             GSCREEN.H           Some manifest constants for screen
                                 attributes.
             MOUSER.H            Header file for mouse support.
             MPMENU.H            Header file for new menu system.

             GWDWDEMO.C          Opens three windows, plots sine and
                                 cosine waves.
             GDDEMO.C            Samples of various dialogue boxes.
             MENUDEMO.C          Illustrates new menu system.

             MPORIGIN.C          For MSC 6.0 compatibility, add this to
                                 the MPLUS library.

             BMDEMO.C            OBSOLETE: Old menu demo included just
                                 for study.
             BARMENU.H           OBSOLETE: Old menu header included just
                                 for study.


         Source code to the MPLUS library is available to registered
         users and is discussed in Appendix D.





         Copyright 1989, 1990 by Michael Yam          Getting Started 1-1





         MPLUS                                            GETTING STARTED


         USING MPLUS

         A suggested way of installing MPLUS is to copy the desired MPLUS
         library into your Microsoft C library subdirectory \MSC\LIB and
         the headers into Microsoft's \MSC\INCLUDE.

         Virtually every MPLUS function requires that you include
         Microsoft's "graph.h" header file and it must be placed before
         any of MPLUS' own header files.

         For example:

             #include <graph.h>       /* Microsoft's */
             #include <gplus.h>       /* MPLUS' */


         The application program should be linked with Microsoft's
         GRAPHICS.LIB and with the correct memory model of the MPLUS
         library.  If you have a mouse, remember to load the driver.  The
         MPLUS mouse functions will check for the presence of a mouse and
         use it if found.

         The example below builds the graphic window demo, GWDEMO.EXE, in
         the large memory model.

             cl -AL gwddemo.c -link graphics lmplus


         If you've built a combined Microsoft library, one that already
         contains GRAPHICS.LIB, then just omit the "graphics"
         specification from the command line.

         Note: There is no huge model library of MPLUS.  Huge model
         programs may be linked with the large model MPLUS library.























         Copyright 1989, 1990 by Michael Yam          Getting Started 1-2





         MPLUS                                            GETTING STARTED


         FROM MSC 5.x TO 6.0

         If you are using Microsoft C 6.0, you'll discover an unresolved
         external when linking with the MPLUS library.  MSC 6.0 renamed a
         couple of its functions, replacing 5.x's _getlogcoord() and
         _setlogorg() with _getviewcoord() and _setvieworg(),
         respectively.

         If you are a registered user, you have access to the MPLUS
         source code and can rebuild the entire system using MSC 6.0.  A
         make file for NMAKE is provided: MPLUS.NMK.  Refer to Appendix D
         for more details.

         If you don't have access to source, or don't want to rebuild the
         system, compile MPORIGIN.C (using MSC 6.0) in the model of your
         choice and add it to the appropriate MPLUS library.  The example
         below does this for the small memory model.

             cl -c -AS -Ox -Zl MPORIGIN.C
             lib SMPLUS.LIB + MPORIGIN,;


         Please note that while the MPORIGIN solution is quick and easy,
         rebuilding the MPLUS system with MSC 6.0 yields optimal code.

































         Copyright 1989, 1990 by Michael Yam          Getting Started 1-3





         MPLUS                                            GETTING STARTED


         FUNCTION SUMMARY

             Routine             Purpose
             ------------------------------------------------------------
             dev_ready           Checks the keyboard and mouse for input.
             gdclose()           Closes a dialogue box.
             gdialog()           Opens a dialogue box.
             gdprompt()          Solicits a response from the user.
             gdwrite()           Outputs text to dialogue box.
             ginrectangle()      Determines if point x,y lies in a
                                 rectangle or not.
             ginwindow()         Determines if point x,y lies in a
                                 graphic window or not.
             gpickup()           "Picks up" a rectangular object from the
                                 screen.
             gputdown()          "Puts down" a rectangular object to the
                                 screen.
             grootclose()        Closes the root window.
             grootopen()         Opens the root window using graphic
                                 coordinates.
             groottopen()        Opens the root window using text
                                 coordinates.
             gwdwclose()         Closes a graphic window.
             gwdwclr()           Clears a graphic window.
             gwdwgetactv()       Gets the active graphic window.
             gwdwgetorg()        Gets the logical origin of a graphic
                                 window.
             gwdwopen()          Opens a graphic window using graphic
                                 coordinates.
             gwdwsetactv()       Makes a graphic window active for
                                 output.
             gwdwsetorg()        Sets the logical origin of a graphic
                                 window.
             gwdwtopen()         Opens a graphic window using text
                                 coordinates.
             loghighlite()       Highlights an image specified by logical
                                 coordinates.




















         Copyright 1989, 1990 by Michael Yam          Getting Started 1-4





         MPLUS                                            GETTING STARTED


         FUNCTION SUMMARY (continued)

             Routine             Purpose
             ------------------------------------------------------------
             mb_close()          Closes the menu bar.
             mb_open()           Initializes the menu bar and displays it
                                 on screen.
             mb_run()            Runs the menu bar.
             mb_stdcolors()      Initializes menu system to default
                                 colors (EGA & VGA).
             mpgetimage()        Saves a rectangular screen image.
             mpouttext()         Outputs text in specified foreground and
                                 background colors.
             mpputimage()        Restores a rectangular image to screen.
             mpsetvideomode()    Sets the screen's video mode.
             mpwordwrap()        Enables/Disables wordwrap when using
                                 mpouttext().
             ms_cursor()         Returns the status of the cursor -- on
                                 or off.
             ms_getposition()    Gets the cursor position and the status
                                 of the mouse buttons.
             ms_getpress()       Gets the number of times the specified
                                 button was pressed.
             ms_getrelease()     Gets the number of times the specified
                                 button was released.
             ms_hidecursor()     Hides the mouse cursor.
             ms_poll()           Polls the mouse for input.
             ms_ready()          Determines if the mouse has input.
             ms_reset()          Resets the mouse driver.
             ms_setevent()       Enables/Disables mouse event checking.
             ms_setposition()    Positions the cursor at specified
                                 coordinates.
             ms_showcursor()     Displays the mouse cursor.
             ms_window()         Defines the screen region where the
                                 mouse may roam.
             physhighlite()      Highlights an image specified by
                                 physical coordinates.
             xorline()           Draws a line using the XOR operator.
             xorpt()             Draws a point using the XOR operator.


















         Copyright 1989, 1990 by Michael Yam          Getting Started 1-5





         MPLUS                                            GRAPHIC SUPPORT







         CHAPTER  2
         ----------



         GRAPHIC SUPPORT

         Two routines here are named after Microsoft's functions and are
         distiguished by an "mp" prefix instead of an underscore:
         mpouttext() and mpsetvideomode().  They behave similarly to the
         originals but have additional features.  While it is optional to
         use mpouttext() (although preferred), use of mpsetvideomode() is
         essential.  mpsetvideomode() maintains external variables which
         other MPLUS functions need to reference.  The programmer may
         also reference these variables by setting up the appropriate
         declarations (see function description).

         Pre-1.3 versions of MPLUS used the function names outtext() and
         setvideomode().  Programs using these names will still compile
         because of macros defined in "gplus.h", but it is recommended
         that you use the "mp" versions for future compatibility with
         MPLUS.






























         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-1





         MPLUS                                            GRAPHIC SUPPORT


         FUNCTION SUMMARY

             Routine                 Purpose
             ----------------------------------------------------------
             mpouttext()             Outputs text with a specified
                                     foreground color on the specified
                                     background color.
             mpsetvideomode()        Sets the screen's video mode.
             mpwordwrap()            Enables/Disables word wrap when
                                     using mpouttext().















































         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-2





         MPLUS                                                  mpouttext


         SUMMARY

         #include <gplus.h>
         #include <gscreen.h>

         void mpouttext(msg,fg,bg);
         char *text;                  null terminated string
         short fg;                    color of output text
         short bg;                    color of background


         DESCRIPTION

         The mpouttext() function outputs text in graphics mode with the
         color specified by "fg" and on a background specified by "bg".
         When writing to a graphic window (see chapter 3), set "bg" to -1
         if you want to use that window's background color.  Use of -1
         results in faster text output.

         Manifest constants for 16 colors in EGA and VGA modes are
         available in the gscreen.h.  The constants are not valid for
         _MRES256COLOR mode.

         When printing to a window established by gwdwtopen() or by
         gwdwopen(), output moves left to right and top to bottom.  Text
         will scroll automatically and will wordwrap if enabled with
         mpwordwrap().

         mpouttext() can write only to the current visual page whereas
         Microsoft's _outtext() writes to the active page, whether it is
         visual or not.


         RETURN VALUE

         None.





















         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-3





         MPLUS                                                  mpouttext


         EXAMPLE

         This example outputs text in various foreground and background
         colors.  Wordwrap and scrolling is also demonstrated.

         #include <graph.h>

         #include <gplus.h>
         #include <gscreen.h>

         main()
         {
             char buffer[51];
             int i;
             GWDW *gwptr;

             mpsetvideomode( _ERESCOLOR );
             gwptr = gwdwtopen( 5, 10, 15, 60,
                                _GBORDER, BRIGHTWHITE, BLUE );
             mpouttext( "This appears in BRIGHTWHITE on BLUE.\n",
                         BRIGHTWHITE, BLUE );
             mpouttext( "So does this.  But this is faster.\n",
                         BRIGHTWHITE, -1 );
             mpouttext( "Here's BRIGHTWHITE on GREEN.\n",
                         BRIGHTWHITE, GREEN );
             mpouttext( "BLACK on CYAN gives good contrast.\n",
                         BLACK, CYAN );

             mpouttext( "\nWordwrap is off...", BRIGHTWHITE, -1 );
             getch();
             for( i=0; i<10; ++i )
             {
                  sprintf( buffer, "The quick brown fox jumped over the
                                    lazy dog. ");
                  mpouttext( buffer, LIGHTYELLOW, -1);
             }

             mpwordwrap(1);
             mpouttext( "\nWordwrap is on...", BRIGHTWHITE, -1 );
             getch();
             for( i=0; i<10; ++i )
             {
                  sprintf( buffer, "The quick brown fox jumped over the
                                    lazy dog. ");
                  mpouttext( buffer, LIGHTYELLOW, -1);
             }
             sprintf( buffer, "\nPress a key...");
             mpouttext( buffer, LIGHTRED, -1 );
             getch();
             gwdwclose( gwptr );
             mpsetvideomode( _DEFAULTMODE );
         }





         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-4





         MPLUS                                             mpsetvideomode


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int mpsetvideomode(mode);
         short mode;                  video mode


         DESCRIPTION

         This function operates just like Microsoft's _setvideomode()
         but stores the video configuration in an external structure for
         other MPLUS functions to reference.  The application program can
         reference the structure with the following declaration:

             extern  struct  videoconfig  _videoconfig;


         The videoconfig structure is supplied by Microsoft and detailed
         in "graph.h".  While it is possible to retrieve the video
         environment with Microsoft's _getvideoconfig(), referencing an
         external structure has the advantage of greater speed and less
         overhead.

         One other difference between mpsetvideomode() and
         _setvideomode() is that mpsetvideomode() removes any defined
         viewport or text window, whereas _setvideomode() does not.

         The manifest constants defining proper video modes are defined
         in Microsoft's "graph.h."  The table below summarizes them:

             Constant       Meaning
             ----------------------------------------------------------
             _DEFAULTMODE   Hardware default mode.
             _TEXTBW40      CGA Black & White, 40 column text mode.
             _TEXTC40       CGA Color, 40 column text mode.
             _TEXTBW80      CGA Black & White, 80 column text mode.
             _TEXTC80       CGA Color, 80 column text mode.
             _MRES4COLOR    CGA 4 Color, 320x200 pixels.
             _MRESNOCOLOR   CGA Black & White, 320x200 pixels.
             _HRESBW        CGA Black & White, 640x200 pixels.
             _TEXTMONO      Monochrome, 80 column text.
             _MRES16COLOR   EGA 16 color, 320x200 pixels.
             _HRES16COLOR   EGA 16 color, 640x200 pixels.
             _ERESNOCOLOR   EGA monochrome text.
             _ERESCOLOR     EGA 64 color, 640x350 pixels.
             _VRES2COLOR    VGA 2 color, 640x480 pixels.
             _VRES16COLOR   VGA 16 color, 640x480 pixels.
             _MRES256COLOR  VGA 256 color, 320x200 pixels.







         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-5





         MPLUS                                             mpsetvideomode


         The following additional modes are supported in Microsoft C 6.0:

             Constant       Meaning
             ----------------------------------------------------------
             _MAXRESMODE    Graphics mode with highest resolution.
             _MAXCOLORMODE  Graphics mode with most colors.
             _HERCMONO      Hercules 2 color, 720x348 pixels.
             _ORESCOLOR     Olivetti 1 of 16 colors, 640x400.



         RETURN VALUE

         This function returns a nonzero int if successful, a 0 on
         failure.


         EXAMPLE

         This example illustrates access to MPLUS' external structure.

         #include <graph.h>
         #include <gplus.h>

         extern struct videoconfig _videoconfig;

         main()
         {
             mpsetvideomode( _DEFAULTMODE );

             /*      reference a structure element
              */
             printf("video memory = %d KB", _videoconfig.memory);
         }























         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-6





         MPLUS                                                 mpwordwrap


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int mpwordwrap(flag);
         char flag;                   wrap flag (0, 1, or 2)


         DESCRIPTION

         This function is used to enable or disable wordwrap when using
         mpouttext().  Normally, when text is being displayed to a
         graphic window, characters going beyond the right margin will
         wrap around and appear at the left margin on the next line.
         Enabling wordwrap will prevent a word from being split between
         margins; if there's no room on the line to display the entire
         word, the word will appear on the next line.

         A word is considered to be anything separated by spaces.

             flag           Meaning
             ----------------------------------------------------------
             0              wordwrap off (default)
             1              wordwrap on
             2              return status of wordwrap


         RETURN VALUE

         This function returns the previous setting of wordwrap.


         EXAMPLE

         See mpouttext().





















         Copyright 1989, 1990 by Michael Yam         Graphic Support  2-7





         MPLUS                                            GRAPHIC WINDOWS






         CHAPTER  3
         ----------



         GRAPHIC  WINDOWS

         In GRAPHICS.LIB text output could only appear in a "text window"
         while graphic output was restricted to the "graphic viewport."
         The MPLUS graphic window, also known as GWDW, is a hybrid object
         which can present both text and graphic output.  In addition a
         graphic window may be opened and closed, respectively saving and
         restoring the background area.

         The graphic window is achieved by overlaying a text window with
         a graphic viewport.  Note that a text window, being character
         oriented, must be byte aligned, whereas a graphic viewport can
         be pixel aligned.  Since precise overlaying is not always
         possible, the text window is always placed "inside" the graphic
         viewport.

         A graphic window is typically positioned and opened by
         specifying pixel coordinates (x,y); gwdwopen() performs this
         task.  Sometimes it may be more convenient to think and program
         in terms of text coordinates -- rows and columns -- especially
         when opening a window primarily to display text.  Use
         gwdwtopen() for those occasions; it accepts text coordinates.
         Regardless of the way a graphic window is opened, a GWDW will
         accept both text and graphic output.

         The number of graphic windows which can be opened at once
         depends upon available memory.  Graphic windows may overlap, but
         the programmer should not write to the one underneath.  Output,
         text or graphic, won't be clipped properly and will overwrite
         the contents of the upper window.  Problems also occur when
         closing the lower graphic window prior to closing the upper one:
         the lower one's background will be restored over the upper
         graphic window.  The management of overlapping windows may be
         avoided if graphic windows are arranged as tiles.

         There is one special form of graphic window known as the root
         window.  This root window behaves similarly to the standard
         graphic window, the difference being that it conserves memory by
         not saving the background area.  In effect the root window
         serves as the background screen.  Consequently, there should be
         only one root window in any given program and it must be opened
         before any graphic window is opened and closed after all graphic
         windows are closed.  Use of the root window is optional.  For
         more details, refer to the function descriptions of grootopen(),
         groottopen(), and grootclose().



         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-1





         MPLUS                                            GRAPHIC WINDOWS


         No matter how a graphic window is opened -- whether with
         gwdwopen(), gwdwtopen(), grootopen(), or groottopen() -- you
         have the option of giving it one of four basic appearances: with
         a border, without a border, raised, or sunken.  While all four
         looks are fine for displaying information, the last two, because
         of their depth, are particularly useful for simulating push
         buttons.

         The graphic window's appearance is governed by three arguments:

             "border"       border type.
             "fg"           foreground & border color.
             "bg"           background or "fill" color.


             "border" Constant        Action
             ----------------------------------------------------------
             _GFILLINTERIOR           The graphic window is opened
                                      without a border.  The interior is
                                      filled with the color specified in
                                      "bg."

             _GBORDER                 The graphic window is opened with a
                                      border.  The border is displayed
                                      with the color specified in "fg"
                                      and the interior is filled with the
                                      color specified in "bg."

             _GRAISE                  The graphic window opened appears
                                      raised.  The borders along the left
                                      and top sides are WHITE, and the
                                      borders along the right and bottom
                                      sides are BLACK.  The interior is
                                      filled with the color specified in
                                      "bg."

             _GSINK                   The graphic window opened appears
                                      sunken.  The borders along the left
                                      and top sides are BLACK, and the
                                      borders along the right and bottom
                                      side are WHITE.  The interior is
                                      filled with the color specified in
                                      "bg."


         Concerning _GRAISE and _GSINK, if you specify the background
         color as WHITE or BLACK, the border colors automatically change
         to BRIGHTWHITE and GREY to ensure contrast.  Recommended
         background colors are GREY, WHITE, or BLUE.  Bright colors tend
         to wash out the 3-D effect.







         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-2





         MPLUS                                            GRAPHIC WINDOWS


         A demo program and its source resides on the distribution disk
         as GWDWDEMO.EXE and GWDWDEMO.C, respectively.  It opens three
         windows, plots a sine and cosine wave, and finally closes all
         windows and exits.

         For an example of using a raised graphic window as a push
         button, see chapter 7, ginwindow().


         FUNCTION  SUMMARY

             Routine                  Purpose
             -----------------------------------------------------------
             grootclose()             Closes the root window.
             grootopen()              Opens the root window using graphic
                                      coordinates.
             groottopen()             Opens the root window using text
                                      coordinates.
             gwdwclose()              Closes a graphic window.
             gwdwclr()                Clears the graphic window.
             gwdwgetactv()            Gets the active graphic window.
             gwdwgetorg()             Gets the logical origin of a
                                      graphic window.
             gwdwopen()               Opens a graphic window using
                                      graphic coordinates.
             gwdwsetactv()            Makes a graphic window active.
             gwdwsetorg()             Sets the logical origin of a
                                      graphic window.
             gwdwtopen()              Opens a graphic window using text
                                      coordinates.



























         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-3





         MPLUS                                                 grootclose


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int grootclose(gwptr);
         GWDW *gwptr;                 graphic window pointer


         DESCRIPTION

         The function grootclose() closes the root window.  Windows
         opened with the gwdwopen() or gwdwtopen() functions should be
         closed before closing the root window.


         RETURN VALUE

         This function returns a 0 if the root window is successfully
         closed, a -1 on failure.





































         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-4





         MPLUS                                                  grootopen


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         GWDW *grootopen(x1,y1,x2,y2,border,fg,bg);
         short x1,y1;                 upper left corner of window
         short x2,y2;                 lower right corner of window
         short border;                border flag
         short fg;                    window's foreground (and border) color.
         short bg;                    window's background color.


         DESCRIPTION

         The function grootopen() opens a root window using graphic
         coordinates.  A root window is special form of window; to save
         on memory requirements, it does not save the screen's
         background.  There should be only one root window in a given
         application and the root window should be opened prior to
         opening any other window via gwdwopen() or gwdwtopen().

         For graphic output, the upper left corner assumes logical origin
         (0,0), with x increasing from left to right, and y increasing
         from top to bottom. For text output, the upper left corner takes
         on the text coordinate of (1,1), with rows increasing from top
         to bottom, and columns increasing from left to right.  Text
         issued with outtext() moves from left to right with automatic
         wrap, and top to bottom with automatic text scrolling.

         The argument "border" may be one of four manifest constants:

             Constant                 Action
             ----------------------------------------------------------
             _GFILLINTERIOR           The graphic window is opened
                                      without a border.
             _GBORDER                 The graphic window is opened with a
                                      border.
             _GRAISE                  The graphic window appears raised.
             _GSINK                   The graphic window appears sunken.


         For more details concerning the border, refer to the chapter
         preface.

         Manifest constants for graphic EGA/VGA foreground and background
         colors are available in gscreen.h.


         RETURN VALUE

         This functions returns a GWDW pointer to the root window.  A
         NULL is returned if the root window could not be opened.



         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-5





         MPLUS                                                 groottopen


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         GWDW *groottopen(r1,c1,r2,c2,border,fg,bg);
         short r1,c1;                 upper left corner of window
         short r2,c2;                 lower right corner of window
         short border;                border flag
         short fg;                    window's foreground (and border) color.
         short bg;                    window's background color.


         DESCRIPTION

         The function groottopen() opens a root window using text
         coordinates.  A root window is special form of window; to save
         on memory requirements, it does not save the screen's
         background.  There should be only one root window in a given
         application and the root window should be opened prior to
         opening any other window via the gwdwopen() or gwdwtopen().

         For graphic output, the upper left corner assumes logical origin
         (0,0), with x increasing from left to right, and y increasing
         from top to bottom.  For text output, the upper left corner
         takes on the text coordinate of (1,1), with rows increasing from
         top to bottom, and columns increasing from left to right.  Text
         issued with outtext() moves from left to right with automatic
         wrap, and top to bottom with automatic text scrolling.

         The argument "border" may be one of four manifest constants:

             Constant                 Action
             ----------------------------------------------------------
             _GFILLINTERIOR           The graphic window is opened
                                      without a border.
             _GBORDER                 The graphic window is opened with a
                                      border.
             _GRAISE                  The graphic window appears raised.
             _GSINK                   The graphic window appears sunken.


         For more details concerning the border, refer to the chapter
         preface.

         Manifest constants for graphic EGA/VGA foreground and background
         colors are available in gscreen.h.


         RETURN VALUE

         This functions returns a GWDW pointer to the root window.  A
         NULL is returned if the root window could not be opened.



         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-6





         MPLUS                                                  gwdwclose


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gwdwclose(gwptr);
         GWDW *gwptr;                 graphic window pointer


         DESCRIPTION

         The function gwdwclose() closes a window opened by the
         gwdwopen() or gwdwtopen() function and restores the screen's
         background.  The window may be active or inactive.  If an active
         window is closed, this function makes no assumptions about the
         next active window.  Target windows for output are undefined
         until the programmer specifies the next active window with the
         gwdwsetactv() function.


         RETURN VALUE

         This function returns a 0 if the window is successfully closed,
         a -1 on failure.

































         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-7





         MPLUS                                                    gwdwclr


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         gwdwclr(gwptr);
         GWDW *gwptr;                 graphic window pointer


         DESCRIPTION

         The function gwdwclr() clears the window specified by "gwptr"
         using the window's background attribute.

         For text output, the upper left corner takes on the text
         coordinate of (1,1), with rows increasing from top to bottom,
         and columns increasing from left to right.  For graphic output,
         any logical origin in effect (set by the gwdwsetorg() function)
         is cleared.  The upper left corner assumes logical origin (0,0),
         with x increasing from left to right, and y increasing from top
         to bottom.


         RETURN VALUE

         None.































         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-8





         MPLUS                                                gwdwgetactv


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         GWDW *gwdwgetactv(void);


         DESCRIPTION

         While several windows may be opened at once, only one can be
         active for output at any given moment.  The gwdwgetactv()
         function will get the active, or current, window.


         RETURN VALUE

         This function returns a GWDW pointer to the current window.  If
         no windows are opened, a NULL is returned.






































         Copyright 1989, 1990 by Michael Yam         Graphic Windows  3-9





         MPLUS                                                 gwdwgetorg


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         void gwdwgetorg(gwptr,x0,y0);
         GWDW *gwptr;                 graphic window pointer
         short *x0,*y0;               origin of graphic window


         DESCRIPTION

         The gwdwgetorg() gets the logical origin of the graphic window
         specified by "gwptr."  The origin is returned in the arguments
         *x and *y.  It is a logical point with gwptr() as the frame
         of reference.


         RETURN VALUE

         None.




































         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-10





         MPLUS                                                   gwdwopen


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         GWDW *gwdwopen(x1,y1,x2,y2,border,fg,bg);
         short x1,y1;                 upper left corner of window
         short x2,y2;                 lower right corner of window
         short border;                border flag
         short fg;                    foreground (and border) color
         short bg;                    background color


         DESCRIPTION

         The function gwdwopen() opens a graphic window for text and
         graphic output using graphic coordinates.  The screen's
         background is saved and will be restored when the window is
         closed with gwdwclose().

         For graphic output, the upper left corner assumes logical origin
         (0,0), with x increasing from left to right, and y increasing
         from top to bottom.  For text output, the upper left corner
         takes on the text coordinate of (1,1), with rows increasing from
         top to bottom, and columns increasing from left to right.  Text
         issued with outtext() moves from left to right with automatic
         wrap, and top to bottom with automatic text scrolling.

         The argument "border" may be one of four manifest constants:

             Constant                 Action
             ----------------------------------------------------------
             _GFILLINTERIOR           The graphic window is opened
                                      without a border.
             _GBORDER                 The graphic window is opened with a
                                      border.
             _GRAISE                  The graphic window appears raised.
             _GSINK                   The graphic window appears sunken.


         For more details concerning the border, refer to the chapter
         preface.

         Manifest constants for graphic EGA/VGA foreground and background
         colors are available in gscreen.h.











         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-11





         MPLUS                                                   gwdwopen


         The window coordinates (x1,y1) and (x2,y2) are physical ones. An
         absolute frame of reference precludes having windows opened
         inside windows opened inside windows... and that saves a
         programmer aspirin.


         RETURN VALUE

         This function returns a GWDW pointer.  A NULL is returned if the
         window could not be opened.















































         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-12





         MPLUS                                                gwdwsetactv


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gwdwsetactv(gwptr);
         GWDW *gwptr;                 graphic window pointer


         DESCRIPTION

         The function gwdwsetactv() makes the window specified by "gwptr"
         the active, or current, window.  The window will be available
         for graphic and text output.  Since each graphic window retains
         information about the location of its text and graphic cursor,
         along with its logical origin coordinates, window output resumes
         at the correct positions.


         RETURN VALUE

         This function returns a 0 if successful, a -1 on failure.



































         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-13





         MPLUS                                                 gwdwsetorg


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         void gwdwsetorg(gwptr,x0,y0);
         GWDW *gwptr;                 graphic window pointer
         short x0,y0;                 logical origin


         DESCRIPTION

         When a graphic window is opened with the function gwdwopen(),
         the logical origin (0,0) is set to its upper left corner.  This
         may be changed with the gwdwsetorg() function which moves the
         logical origin (0,0) to the logical point ("x0","y0").  "gwptr"
         is our frame of reference.


         RETURN VALUE

         None.



































         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-14





         MPLUS                                                  gwdwtopen


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         GWDW *gwdwtopen(r1,c1,r2,c2,border,fg,bg);
         short r1,c1;                 upper left corner of window
         short r2,c2;                 lower right corner of window
         short border;                border flag
         short fg;                    foreground (and border) color
         short bg;                    background color


         DESCRIPTION

         The function gwdwtopen() opens a graphic window for text and
         graphic output using text coordinates.  The screen's background
         is saved and will be restored when the window is closed with
         gwdwclose().

         For graphic output, the upper left corner assumes logical origin
         (0,0), with x increasing from left to right, and y increasing
         from top to bottom. For text output, the upper left corner takes
         on the text coordinate of (1,1), with rows increasing from top
         to bottom, and columns increasing from left to right.  Text
         issued with outtext() moves from left to right with automatic
         wrap, and top to bottom with automatic text scroll.

         The argument "border" may be one of four manifest constants:

             Constant                 Action
             ----------------------------------------------------------
             _GFILLINTERIOR           The graphic window is opened
                                      without a border.
             _GBORDER                 The graphic window is opened with a
                                      border.
             _GRAISE                  The graphic window appears raised.
             _GSINK                   The graphic window appears sunken.


         For more details concerning the border, refer to the chapter
         preface.

         Manifest constants for graphic EGA/VGA foreground and background
         colors are available in gscreen.h.

         The window coordinates (r1,c1) and (r2,c2) are physical
         ones.  An absolute frame of reference precludes having windows
         opened inside windows opened inside windows.







         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-15





         MPLUS                                                  gwdwtopen


         RETURN VALUE

         This function returns a GWDW pointer.  A NULL is returned if the
         window could not be opened.





















































         Copyright 1989, 1990 by Michael Yam        Graphic Windows  3-16





         MPLUS                                           GRAPHIC DIALOGUE







         CHAPTER  4
         ----------



         GRAPHIC  DIALOGUE

         A dialogue box presents information in a graphic window and
         solicits a response from the user.  The user response can be
         from either the mouse or keyboard.  There are three classes of
         dialogue boxes: information, warning, and error.  Any may be
         presented with the predefined prompts "Okay", "Okay/Cancel", and
         "Yes/No".

         The location of the box on screen is defined by the following
         relationships:

             row1 = _videoconfig.numtextrows / 4;
             row2 = row1 + 6;
             col1 = _videoconfig.numtextcols / 4;
             col2 = col1 * 3;

         Warning and error boxes are displayed with a title and have room
         for three rows of text.  The information box, having no title,
         can present four rows of text.  As for characters per line, high
         resolution graphics allows 40 while medium resolution graphics
         provides 20.  When writing to the dialogue box, text will wrap.
         Scrolling is not supported in a dialogue box; thus it is
         important not to exceed three rows of text in a warning or error
         box and four rows of text in an information box.

         A demo program and its source resides on the distribution disk
         as GDDEMO.EXE and GDDEMO.C, respectively.  They illustrate the
         calls to all three classes of dialogue box.

         Dialogue functions are prefixed with "gd."
















         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-1





         MPLUS                                            Graphic Dialgue




         FUNCTION  SUMMARY

             Routine                  Purpose
             ----------------------------------------------------------
             gdclose()                Closes a dialogue box.
             gdialog()                Opens a dialogue box.
             gdprompt()               Solicits a response from the user.
             gdwrite()                Outputs text to dialogue box.















































         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-2





         MPLUS                                                    gdclose


         SUMMARY

         #include <gplus.h>

         void gdclose(void);


         DESCRIPTION

         The gdclose() function closes the dialog box opened by
         gdialog().  Successful closure restores the screen's background.


         RETURN VALUE

         None.









































         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-3





         MPLUS                                                    gdialog


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gdialog(dialtype,clickoption);
         char dialtype;               dialogue type: information,
                                      warning, error
         char clickoption;            response options: "okay",
                                      "okay/cancel", "yes/no"


         DESCRIPTION

         The gdialog() function opens a window which interacts with the
         user.  Really a canned gwdwtopen() function, gdialog() opens up
         a graphic window in the middle of the screen with colors
         determined by the parameter "dialtype" and mouse clicking options
         determined by the parameter "clickoption".  The colors described
         below apply only to EGA and VGA 16 color modes.

         "dialtype" may be any one of the following manifest constants
         (defined in gplus.h):


             Constant                 Meaning
             ----------------------------------------------------------
             GDINFORM                 An information box with a blue
                                      border.  Text appears in blue on a
                                      white background.

             GDWARN                   A warning box with a yellow border.
                                      Text appears in yellow on a black
                                      background.

             GDERROR                  An error box with a red border.
                                      Text appears in red on a black
                                      background.


         "clickoption" may be any one of the following manifest constants
         (defined in gplus.h):

             Constant                 Meaning
             ----------------------------------------------------------
             GDOKAY                   A mouse clicking region of "OKAY".

             GDOKCAN                  Two mouse clicking regions, the
                                      first with "OKAY", the second with
                                      "CANCEL".

             GDYESNO                  Two mouse clicking regions, the
                                      first with "YES", the second with
                                      "NO".



         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-4





         MPLUS                                                    gdialog


         RETURN VALUE

         This function returns a 0 if the dialog window was opened
         successfully, a -1 on error.





















































         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-5





         MPLUS                                                   gdprompt


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gdprompt(void)


         DESCRIPTION

         The gdprompt() function waits for the user to select, with a
         mouse or keyboard, a prompt from the dialog box.  To select with
         the mouse, move the cursor to the clicking region and press the
         left button.  To select with the keyboard, press the key
         corresponding to the first character of the prompt.  For
         example, to select "Okay", press the letter "O".

         The keys "Enter" and "Esc" also work.  "Enter" would select
         "Yes" or "Okay", and "Esc" would select "No" or "Cancel."  If
         there were only one possible choice, "Okay", either key will
         make the selection.


         RETURN VALUE

         This function returns a 0 or 1 depending on the prompts
         available and the user response.


             Click Option Constant    Return Value   User Selection
             ----------------------------------------------------------
             GDOKAY                   0              okay

             GDOKCAN                  0              okay
                                      1              cancel

             GDYESNO                  0              yes
                                      1              no



















         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-6





         MPLUS                                                    gdwrite


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gdwrite(text);
         char *text;                  null terminated string


         DESCRIPTION

         The gdwrite() function outputs "text" to the dialogue box.  A
         warning or error dialogue box has room for three lines of text;
         an information box allows four lines of text.  Lines may be up
         to 40 characters long in high resolution graphics mode, and 20
         characters long in medium resolution.

         Text wrap is supported but scrolling is not.  Consequently, it
         is important not to exceed the number of rows allowed by a
         particular dialog box.


         RETURN VALUE

         This function returns a 0 if successful, a -1 on error.
































         Copyright 1989, 1990 by Michael Yam        Graphic Dialogue  4-7





         MPLUS                                              GRAPHIC IMAGE







         CHAPTER  5
         ----------



         GRAPHIC  IMAGE

         The functions provided here deal with images -- picking them up,
         sliding them across the screen, and putting them down.  Of
         course functions which deal with the screen correctly must make
         sure that the mouse cursor does not interfere with the image;
         these functions hide the mouse cursor before reading or updating
         the screen, and restores the mouse cursor when done.  You will
         have to manage the mouse cursor yourself when using any of
         Microsoft's output or drawing functions.

         Also described here are two functions used for rubberbanding:
         xorpt() and xorline().  Consider a line where one end point is
         anchored, and the other end point is variable and designated by
         the mouse cursor.  As the user slides the mouse around, the old
         line is erased and a new line is drawn to the new end point; all
         this happens without the destruction of the background screen.
         The effect is a line that moves, stretches, compresses, and
         pretty much behaves like a rubberband.  Rubberbanding is common
         in paint programs and computer-aided design applications.

         Microsoft C 6.0 users: a faster alternative to xorline() would
         be to use _setwritemode(_GXOR) with _moveto() and _lineto().

         Moving objects and rubberbanding are made possible with the
         "exclusive or," also known as XOR.  A wonderful little operator,
         XOR behaves as follows:

             Table 5-1
             XOR behavior
             ---------------------------
             Bit A     Bit B     A XOR B
             1         1         0
             1         0         1
             0         1         1
             0         0         0


         When an image is XORed onto the screen, it appears on the screen
         and gets combined with the background.  When the image is XORed
         onto the screen twice, the image disappears and the background
         is restored.





         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-1





         MPLUS                                              GRAPHIC IMAGE


         FUNCTION SUMMARY

             Routine                  Purpose
             ----------------------------------------------------------
             gpickup()                Allocates memory and saves a
                                      rectangular screen image to it.
             gputdown()               Restores an image to the screen and
                                      frees allocated memory.
             loghighlite()            Highlights an image specified by
                                      logical coordinates.
             mpgetimage()             Saves a rectangular screen image.
             mpputimage()             Restores an image to screen.
             physhighlite()           Highlights an image specified by
                                      physical coordinates.
             xorline()                Draws a line using the XOR
                                      operator.
             xorpt()                  Draws a point using the XOR
                                      operator.







































         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-2





         MPLUS                                                    gpickup


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         char *gpickup(x1,y1,x2,y2);
         short x1,y1;                 upper left corner of image to pickup
         short x2,y2;                 lower right corner of image to pickup


         DESCRIPTION

         The gpickup() function grabs into memory the portion of the
         video buffer specified by the rectangle with the logical
         coordinates (x1,y1) and (x2,y2).  This function is similar to
         Microsoft's _getimage() function but higher in level; the memory
         required to save the image is calculated and dynamically
         allocated.

         Use gputdown() to put down the image and free the allocated
         memory.


         RETURN VALUE

         This function returns to char pointer to an image buffer.  If
         the image could not be picked up, probably due to insufficient
         memory, the char pointer will be NULL.





























         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-3





         MPLUS                                                    gpickup


         EXAMPLE

         The example below slides a box across the screen.

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         extern struct videoconfig _videoconfig;

         main()
         {
             char *image;
             short x1, y1, x2, y2;
             short x, xwidth, xmax;

             mpsetvideomode( _ERESCOLOR );

             x1 = _videoconfig.numxpixels/2 - 10;
             y1 = _videoconfig.numypixels/2 - 10;
             x2 = _videoconfig.numxpixels/2 + 10;
             y2 = _videoconfig.numypixels/2 + 10;
             xwidth = x2-x1;

             _rectangle( _GFILLINTERIOR, x1, y1, x2, y2 );
             image = gpickup( x1, y1, x2, y2 );
             _clearscreen( _GCLEARSCREEN );

             xmax = _videoconfig.numxpixels-xwidth-1;
             for( x=0; x<xmax; ++x )
             {
                 mpputimage( x, y1, image, _GXOR );
                 mpputimage( x, y1, image, _GXOR );
             }
             gputdown( x, y1, image, _GPSET );

             printf("Press a key");
             getch();

             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }















         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-4





         MPLUS                                                   gputdown


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int gputdown(x1,y1,image,action)
         short x1,y1;                 upper left coordinate of image
         char *image;                 pointer to image buffer
         short action;                interaction with existing screen image


         DESCRIPTION

         The gputdown() function puts an image down to screen.  The image
         must have been picked up by gpickup().

         The "action" parameter determines the interaction with the
         existing screen image.  Manifest constants are defined in
         graph.h and described in the Microsoft documentation for the
         _putimage() function.  The table below summarizes the available
         logical operations:

             Constant                 Meaning
             ----------------------------------------------------------
             _GAND                    ANDs the image to screen.
             _GOR                     ORs the image to screen.
             _GPRESET                 NOTs the image to screen.
             _GPSET                   Copies the image to screen.
             _GXOR                    XORs the image to screen.


         RETURN VALUE

         This function returns a 0 if the image was put down successful,
         a -1 on failure.

         EXAMPLE

         See gpickup().


















         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-5





         MPLUS                                                loghighlite


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int loghighlite(x1,y1,x2,y2);
         short x1,y1;                 upper left corner of image to highlight
         short x2,y2;                 lower right corner of image to highlite


         DESCRIPTION

         The loghighlite() function produces a negative of the image in
         the rectangle described by the logical coordinates (x1,y1),
         (x2,y2).  To return the image to its original state, call this
         function a second time with the same parameters.  This
         effectively negates a negative image.

         Technically, all this function does is a gpickup() followed by a
         gputdown() with an "action" of _GPRESET.


         RETURN VALUE

         This function returns a 0 if successful.  A -1 is returned if
         there was insufficient memory for the gpickup() function.































         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-6





         MPLUS                                                loghighlite


         EXAMPLE

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         main()
         {
             char *string = "Demo the highlite functions\n";
             char buffer[80];
             short x1, y1, x2, y2;
             GWDW *gwptr;

             mpsetvideomode( _ERESCOLOR );
             gwptr = gwdwopen(50, 50, 350, 150, _GFILLINTERIOR, BLACK, GREEN);

             mpouttext(string, BLACK, -1);
             mpouttext("Press a key to highlite...\n", BLACK, -1);
             getch();

             loghighlite( 0, 0, 300, 100 );
             mpouttext("Press a key...\n", BLACK, GREEN);
             getch();

             physhighlite( 50, 50, 350, 150 );
             mpouttext("Press a key...\n", BLACK, GREEN);
             getch();
             gwdwclose( gwptr );
             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }


























         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-7





         MPLUS                                                 mpgetimage


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         void mpgetimage(x1,y1,x2,y2,buffer)
         short x1,y1;                 upper left corner
         short x2,y2;                 lower right corner
         char *buffer;                pointer to storage for screen image


         DESCRIPTION

         Like Microsoft's _getimage(), this function saves a rectangular
         screen image in a memory buffer.  Also like the original, the
         programmer is responsible for calculating and allocating memory
         for the image.  The difference is that this function will check
         for the presence of a mouse cursor and hide it before reading
         the screen.


         RETURN VALUE

         None.

































         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-8





         MPLUS                                                 mpgetimage


         EXAMPLE

         The example below slides a box across the screen.

         #include <malloc.h>
         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>

         extern struct videoconfig _videoconfig;

         main()
         {
             char *image;
             short x1, y1, x2, y2;
             short x, xwidth, xmax;

             mpsetvideomode( _ERESCOLOR );

             _clearscreen( _GCLEARSCREEN );
             x1 = _videoconfig.numxpixels/2 - 10;
             y1 = _videoconfig.numypixels/2 - 10;
             x2 = _videoconfig.numxpixels/2 + 10;
             y2 = _videoconfig.numypixels/2 + 10;
             xwidth = x2-x1;

             _rectangle( _GFILLINTERIOR, x1, y1, x2, y2 );
             image = (char *)malloc( (unsigned int)_imagesize(x1,y1,x2,y2) );
             mpgetimage( x1, y1, x2, y2, image );
             _clearscreen( _GCLEARSCREEN );
             xmax = _videoconfig.numxpixels-xwidth-1;
             for( x=0; x<xmax; ++x )
             {
                  mpputimage( x, y1, image, _GXOR );
                  mpputimage( x, y1, image, _GXOR );
             }

             printf("Press a key");
             getch();

             free(image);
             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }













         Copyright 1989, 1990 by Michael Yam           Graphic Image  5-9





         MPLUS                                                 mpputimage


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         void mpputimage(x1,y1,image,action)
         short x1,y1;                 upper left corner of image
         char *image;                 image storage obtained from
                                      mpgetimage()
         short action;                interaction with existing screen image


         DESCRIPTION

         Like Microsoft's _putimage(), this function transfers to the
         screen the contents of the "image" buffer.  Unlike Microsoft's
         version, mpputimage() ensures that the mouse cursor does not
         interfere with image being transferred.

         The "action" argument defines the type of interaction.  Manifest
         constants are defined in graph.h and are described in
         Microsoft's documentation of _putimage().  The table below
         summarizes the available logical operations:

             Constant                 Meaning
             ----------------------------------------------------------
             _GAND                    ANDs the image to screen.
             _GOR                     ORs the image to screen.
             _GPRESET                 NOTs the image to screen.
             _GPSET                   Copies the image to screen.
             _GXOR                    XORs the image to screen.


         RETURN VALUE

         None.


         EXAMPLE

         See mpgetimage().
















         Copyright 1989, 1990 by Michael Yam          Graphic Image  5-10





         MPLUS                                               physhighlite


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int physhighlite(x1,y1,x2,y2);
         short x1,y1;                 upper left corner of image to highlight
         short x2,y2;                 lower right corner of image to highlight


         DESCRIPTION

         The physhighlite() function produces a negative of the image in
         the rectangle described by the physical coordinates (x1,y1),
         (x2,y2).  To return the image to its original state, call this
         function a second time with the same parameters.  This
         effectively negates a negative image.

         Technically, all this function does is a gpickup() followed by a
         gputdown() with an "action" of _GPRESET.


         RETURN VALUE

         This function returns a 0 if successful.  A -1 is returned if
         there was insufficient memory for the gpickup() function.


         EXAMPLE

         See loghighlite().


























         Copyright 1989, 1990 by Michael Yam          Graphic Image  5-11





         MPLUS                                                    xorline


         SUMMARY

         #include <gplus.h>
         #include <gscreen.h>

         void xorline(x1,y1,x2,y2,fg,bg);
         short x1,y1;                 starting point for line
         short x2,y2;                 ending point for line
         short fg;                    foreground color of line
         short bg;                    current background color

         DESCRIPTION

         This routine is a non-destructive line drawing function since it
         uses the "exclusive or" (see chapter preface).  The line may be
         removed from the screen and the background restored by calling
         this function again with the same parameters.

         Manifest constants are available for EGA/VGA modes in gscreen.h
         for the foreground and background colors.

         Microsoft C 6.0 users: a faster alternative to xorline() would
         be to use _setwritemode(_GXOR) with _moveto() and _lineto().


         RETURN VALUE

         None.


         EXAMPLE

         The example below firsts opens a graphic window and outputs some
         text.  Then two xor lines criss cross the window, illustrating
         their non-destructive characteristics.

         #include <graph.h>
         #include <gplus.h>
         #include <gscreen.h>

         /*      MRES 4 color defines for palette 3
          */
         #define MBLACK          0
         #define MLIGHTCYAN      1
         #define MLIGHTMAGENTA   2
         #define MWHITE          3











         Copyright 1989, 1990 by Michael Yam          Graphic Image  5-12





         MPLUS                                                    xorline


         main()
         {
             short x, y;
             short xinc, yinc;
             GWDW *gwptr;

             mpsetvideomode( _MRES4COLOR );
             _selectpalette(3);
             gwptr = gwdwopen( 50, 50, 250, 150, _GFILLINTERIOR, MBLACK, MWHITE );
             mpouttext( "Demo of non-\ndestructive xor lines.\n", MBLACK, -1 );
             mpouttext( "Press a key to quit.\n", MBLACK, -1 );

             x=0;
             y=0;
             while(1)
             {
                 xorline( 0, y, 200, y, MLIGHTCYAN, -1);
                 xorline( x, 0, x, 100, MLIGHTMAGENTA, -1);
                 xorline( 0, y, 200, y, MLIGHTCYAN, -1);
                 xorline( x, 0, x, 100, MLIGHTMAGENTA, -1);
                 if( x >= 200 )
                     xinc = -1;
                 else if( x <= 0 )
                     xinc = 1;
                 x += xinc;

                 if( y >= 100 )
                     yinc = -1;
                 else if( y <= 0 )
                     yinc = 1;
                 y += yinc;

                 if( kbhit() )
                     break;
             }
             gwdwclose( gwptr );
             mpsetvideomode( _DEFAULTMODE );
         }



















         Copyright 1989, 1990 by Michael Yam          Graphic Image  5-13





         MPLUS                                                      xorpt


         SUMMARY

         #include <gplus.h>
         #include <gscreen.h>

         void xorpt(x,y,fg,bg);
         short x,y;                   point position
         short fg;                    color it should appear in
         short bg;                    current background color


         DESCRIPTION

         This routine is a non-destructive point plotting function since
         it uses the "exclusive or" (see chapter preface).  The point may
         be removed from the screen and the background restored by
         calling the function again with the same parameters.

         Manifest constants are available for EGA/VGA modes in gscreen.h
         for the foreground and background colors.

         This function is provided for those who need to design routines
         such as xorellipse().  Unlike MPLUS' other image functions,
         xorpt() does no cursor checking since it is very inefficient to
         examine the mouse cursor every time a point is plotted.
         Instead, when writing a routine such as xorellipse(), if the
         cursor is visible, hide it at the start of the function and
         restore it at the end of the function.


         RETURN VALUE

         None.
























         Copyright 1989, 1990 by Michael Yam          Graphic Image  5-14





         MPLUS                                                   MENU BAR







         CHAPTER  6
         ----------



         THE  MENU  BAR

         The functions described in this chapter create a horizontal bar
         menu with pull down windows.  Depending upon available memory
         and screen space, up to five levels of submenus are supported,
         although two levels should be sufficient for most applications.
         The menu also supports "greyout", a technique used to disable a
         menu choice.  Menu functions are prefixed with an "mb_".

         The mouse and keyboard are supported input devices.  To make a
         menu selection with a mouse, position the cursor in the bar,
         over a menu title.  Pressing the left button will highlight the
         menu title and open a pull-down menu. The button must be held
         down to keep pull-down menu open.  To close the pull-down menu
         and open others, keep the left button down and slide the cursor
         over to other titles along the bar.

         To select one of the options in the pull-down menu, drag the
         cursor over one of the choices and release the left button.  If
         no selection is desired, slide the cursor out of the pull-down
         menu and release the left button.

         Using a keyboard to select from the menu bar requires an "Alt"
         key combined with the first character of the desired menu title.
         This opens a pull-down menu.  The left and right cursor keys may
         be used to enter submenus (if present) or to close the current
         pull-down menu and open adjacent menus.  "Tab" and "Shift Tab"
         behave similarly, except they bypass all submenus.

         Use the up and down cursor keys to point to titles within the
         pull-down menu.  These selections may also be made by pressing
         the first character of the titles (no "Alt" this time).  If more
         than one title begins with the same character, pressing that
         character again will point to the next matching selection.
         Pressing "Return" makes the decision final while pressing "Esc"
         just closes the pull-down menu with no further action.











         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-1





         MPLUS                                                   MENU BAR


         Setting up your menus require plugging in titles and pointers to
         functions into two structures:

         struct MENU_INFO
         {
             int  exitkey;       /* quit key */
             int  (*exitfun)();  /* ptr to quit function */
             word fg0, bg0;      /* color of menu bar */
             word keycolor0;     /* color of ALT KEY */
             word greyout0;      /* color of disabled bar title */
             word border;        /* border flag */
             word fg, bg;        /* color of pull-down menu */
             word keycolor;      /* color of title's first char */
             word greyout;       /* color of disabled title */
         };

         struct MENU_ITEM
         {
             char *title;                  /* title string */
             int (*function)();            /* ptr to function */
             struct MENU_ITEM *menu_item;  /* titles for submenu */
             unsigned submenu: 1           /* bit indicates submenu */
             unsigned greyout: 1           /* bit disables title */

             /* Remaining six bits reserved for future */
         };


         The structure MENU_INFO is used to define various attributes of
         the menu, including its colors, an exit key, and an exit
         function.  Regarding colors, you may initialize them to a
         default set with the function mb_stdcolors().  See the function
         description for details.

         Defining an exit key and an exit function would save the user
         from hunting through an array of menus to find that "quit"
         function.  The exit key may be any key that has a scan and
         ascii code, but typically would be "Esc", "Ctrl Q", or "Alt X".
         The function mb_run() will watch for the assigned key and if
         detected, return a pointer to your exit function.

             Suggested Exit Keys      Scan and Ascii Code
             --------------------------------------------
             Esc                      0x011B
             Ctrl Q                   0x1011
             Alt X                    0x2D00


         The structure MENU_ITEM is used to store your menu titles,
         pointers to functions, submenu titles, and other menu
         attributes.  Examples of initializing this structure can be
         found in the function description for mb_open() and in the file
         MENUDEMO.C




         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-2





         MPLUS                                                   MENU BAR


         Pre 1.3 Versions of MPLUS.
         --------------------------

         The menu system here departs from the architecture used in
         versions of MPLUS prior to 1.3.  For this I apologize but the
         early design could not handle submenus effectively.  Migration
         isn't difficult, as a comparison of the demo routines in
         BMDEMO.C (old way) and MENUDEMO.C (new way) reveals.

         The table below lists the obsolete menu functions and their
         new (near) equivalents.

             Obsolete                 Replacements
             ---------------------------------------------------
             bm_exit()                Set in MENU_INFO structure
             bm_init()                mb_open()
             bm_run()                 mb_run()
             bm_show()                mb_open()


         The header BARMENU.H is also obsolete and should be replaced
         with MPMENU.H.


         FUNCTION SUMMARY

             Routine                  Purpose
             ----------------------------------------------------------
             mb_close()               Closes and removes menu bar.
             mb_open()                Initializes a menu bar and displays
                                      it on screen.
             mb_run()                 Runs the menu bar.
             mb_stdcolors()           Initialize menu system to a default
                                      set of colors (EGA & VGA only).























         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-3





         MPLUS                                                   mb_close


         SUMMARY

         #include <stdio.h>
         #include <graph.h>
         #include <gplus.h>
         #include <mpmenu.h>

         int mb_close(void);


         DESCRIPTION

         The mb_close() function closes the menu bar, and removes it from
         the screen, restoring the original background.


         RETURN VALUE

         This function returns a 0 if the menu bar was closed
         successfully.  A -1 is returned on failure.





































         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-4





         MPLUS                                                    mb_open


         SUMMARY

         #include <stdio.h>
         #include <graph.h>
         #include <gplus.h>
         #include <mpmenu.h>

         int mb_open(r1,c1,c2,struct MENU_INFO menu_info,
                     struct MENU_ITEM menu_item);
         short r1, c1;                starting row and col of menu bar
         short c2;                    ending col of menu bar
         struct MENU_INFO *menu_info; menu colors, etc.
         struct MENU_ITEM *menu_item; titles, function ptrs, etc.


         DESCRIPTION

         The mb_open() function initializes the menu system with the
         information provided in the structures MENU_INFO and MENU_ITEM.
         mb_open() then opens the menu bar at the row and column
         specified by the "r1" and "c1" parameters.  The bar ends at
         "c2."


         RETURN VALUE

         This function returns a 0 if successful.  A -1 is returned on
         failure.





























         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-5





         MPLUS                                                    mb_open


         FRAGMENT

         The following code fragment initializes the menu structures and
         opens a menu bar:


         #define  _ESC 0x011B

         extern int exitfun();             /* Your exit function */
         extern int dummy();               /* Just for illustration */
                  :
                  :
         struct MENU_INFO menu_info =
         {
             _ESC, exitfun,                /* Exit key & function */
             BLACK, WHITE, RED, GREY,      /* Menu bar attributes */
             _GBORDER,                     /* Border for pull-down */
             BLUE, WHITE, BLUE, GREY,      /* Pull-down attributes */
         };

         /* m0m0 submenu - called from menu 0, item 0. */

         struct MENU_ITEM m0m0[] =
         {
             "Methanol", NULL, NULL, 0,1,  /* Functions don't exist */
             "Ethanol",  NULL, NULL, 0,1,  /* Mark greyout */
             "Martini", dummy, NULL,0,0,   /* This calls dummy() */
             NULL, NULL, NULL, 0,0,        /* Terminate list */
         };

         /* m0 - Menu 0 */

         struct MENU_ITEM m0[] =           /* Main menu bar */
         {
             "Alcohols", NULL, m0m0, 1,0,  /* Mark submenu */
             NULL, NULL, NULL, 0,0,        /* Terminate list */
         };
                  :
                  :
         main()
         {
                  :
                  :
             mb_open (1, 1, 80, &menu_info, m0);
                  :
                  :
             mb_close();
                  :
                  :
         };







         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-6





         MPLUS                                                     mb_run


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>
         #include <mpmenu.h>

         int (*mb_run(void))();


         DESCRIPTION

         The mb_run() function will run the bar menu after proper
         structure initialization.  It will respond to the user's inputs
         -- mouse or keyboard -- and open and close windows accordingly.
         If there is no input, this function simply returns a NULL
         pointer.


         RETURN VALUE

         The return value depends on the user input.  If the input was
         valid, a pointer to a function is returned.  If the input was
         invalid, or there was no input, the pointer returned is NULL.

         It is up to the programmer to decide what to do with the pointer
         returned.  Normally, the function should be called.  Returning a
         pointer to the function instead of executing it from within
         mb_run() lets the programmer call the function with arguments.


         FRAGMENT

         This fragment runs the menu system as long as the exit function
         isn't called:

         extern int exitfun();
                  :
                  :
         int (*function)();           /* function pointer */
                  :
                  :
         function = NULL;
         while (function != exitfun || ret != 0)
         {
             function = mb_run();
             if (function != NULL)
                  ret = function();   /* execute.  Can pass args. */
         };
                  :
                  :






         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-7





         MPLUS                                               mb_stdcolors


         SUMMARY

         #include <graph.h>
         #include <gscreen.h>
         #include <gplus.h>
         #include <mpmenu.h>

         void mb_stdcolors(menu_info);
         struct MENU_INFO *menu_info;      structure to init


         DESCRIPTION

         The mb_stdcolors() function initializes the menu system with a
         set of default colors.  This function is provided for
         convenience and is easy to customize.  It assumes EGA and VGA 16
         color modes.


         RETURN VALUE

         None.


         FRAGMENT

         Reproduced here is the source to mb_stdcolors().  The color
         combinations look best on a grey background.  Structure elements
         suffixed with a "0" refer to the menu bar, while the remaining
         elements refer to the pull-down menu.


         void mb_stdcolors(menu_info)
         struct MENU_INFO *menu_info;
         {
             menu_info->fg0 = BLACK;
             menu_info->bg0 = WHITE;
             menu_info->keycolor0 = RED;
             menu_info->greyout0 = GREY;
             menu_info->border = _GBORDER;
             menu_info->fg = BLACK;
             menu_info->bg = WHITE;
             menu_info->keycolor = BLACK;
             menu_info->greyout = GREY;
             return;
         }











         Copyright 1989, 1990 by Michael Yam                Menu Bar  6-8





         MPLUS                                                     MOUSER







         CHAPTER  7
         ----------


         MOUSER -- with respect to the most famous mouser of them all,
                   "Sylvester the Cat."

         The routines here support a Microsoft or compatible mouse and
         provide a range of services from resetting the mouse to
         retrieving input from either the mouse or keyboard.  If no mouse
         is present, calling these functions will have no effect.

         Note that these functions are valid only in graphic video modes;
         text modes are not supported.  When using Microsoft's graphics
         output routines, remember to hide the mouse before updating or
         reading the screen.  Otherwise, the mouse will interfere with
         the screen image.  Except where indicated, all MPLUS functions
         handle the mouse automatically.

         A few routines reference a structure named "ms_status."  It is
         defined in mouser.h and has the following elements:

             struct ms_status
             {
                  unsigned int condmask;   event mask or type of activity
                  int lbtn;                left button: 0 = up, 1 = down
                  int lbpress;             the number of left button presses
                  int lbrelease;           the number of left button releases
                  int rbtn;                right button: 0 = up, 1 = down
                  int rbpress;             the number of right button presses
                  int rbrelease;           the number of right button releases
                  short x, y;              mouse cursor position
             }

         Mouse activity is returned in this structure for easy reference.
         Note that the element "condmask", currently used only by
         dev_ready(), is a mask which defines the type of mouse activity
         the user applied.  It can have one or a combination of
         the following values:

             Constant       Hex Value      Meaning
             ---------------------------------------------------
             _CSRMOVED      0x01           cursor moved
             _LBPRESSED     0x02           left button pressed
             _LBRELEASED    0x04           left button released
             _RBPRESSED     0x08           right button pressed
             _RBRELEASED    0x10           right button released





         Copyright 1989, 1990 by Michael Yam                   Mouser 7-1





         MPLUS                                                     MOUSER


         FUNCTION SUMMARY

             Routine                  Purpose
             ----------------------------------------------------------
             dev_ready()              Checks the keyboard and mouse for
                                      input.
             ginrectangle()           Determines if point x,y lies in a
                                      rectangle or not.
             ginwindow()              Determines if point x,y lies in a
                                      graphic window or not.
             ms_cursor()              Returns the status of the cursor --
                                      on or off.
             ms_getposition()         Gets the cursor position and the
                                      status of the mouse buttons.
             ms_getpress()            Retrieves the status of the
                                      specified button and the number of
                                      times it was pressed since this
                                      function was last called.
             ms_getrelease()          Retrieves the status of the
                                      specified button and the number of
                                      times it was released since this
                                      function was last called.
             ms_hidecursor()          Hides the cursor.
             ms_poll()                Polls the mouse for input.
             ms_ready()               Determines if the mouse has input.
             ms_reset()               Resets the mouse driver.
             ms_setevent()            Enables/Disables mouse event
                                      checking.
             ms_setposition()         Positions the cursor at specified
                                      coordinates.
             ms_showcursor()          Displays the cursor on the screen.
             ms_window()              Defines the screen region where the
                                      cursor may roam.
























         Copyright 1989, 1990 by Michael Yam                   Mouser 7-2





         MPLUS                                                  dev_ready


         SUMMARY

         #include <mouser.h>

         int dev_ready(ch,ms_status);
         int *ch;                     the keystroke pressed
         struct ms_status *ms_status; the mouse status


         DESCRIPTION

         The dev_ready() function checks the keyboard and the mouse for
         input, then returns the active device.  If there was a keystroke
         in the keyboard buffer, it would be retrieved and stored in
         "ch."  If the mouse was active, its status would be retrieved
         and stored in "ms_status."  If neither device was accessed by
         the user, the function would return a NULL.

         When a mouse is moved or its buttons pressed or released, an
         interrupt is generated and signals dev_ready() that there is
         mouse input.  "condmask" is a bit mask which identifies the
         mouse activity which triggered the interrupt.  Possible masks
         are defined in mouser.h and are discussed in the chapter
         preface.

         Mouse event checking must be enabled for this function to work.
         This is accomplished with:

             ms_setevent(1);


         RETURN VALUE

         Constants defining the returned devices are in mouser.h and are
         listed below.

             Constant            Meaning
             -----------------------------
             _KB                 Keyboard
             _MS                 Mouse
             NULL                No device
















         Copyright 1989, 1990 by Michael Yam                   Mouser 7-3





         MPLUS                                                  dev_ready


         EXAMPLE

         #include <graph.h>
         #include <gplus.h>
         #include <mouser.h>

         main()
         {
             int ch;
             struct ms_status ms_status;
             int device;

             ms_reset();
             ms_setevent(1);
             mpsetvideomode( _DEFAULTMODE );

             /*       Press a key or access mouse.
              */
             while( !(device = dev_ready( &ch, &ms_status )) );

             if( device == _KB )
                 printf("\nKeyboard pressed.  Code = %x hex\n", ch);
             else if( device == _MS )
                 printf("\nMouse pressed or moved.  Mask = %x hex\n",
                         ms_status.condmask);

             ms_reset();
         }





























         Copyright 1989, 1990 by Michael Yam                   Mouser 7-4





         MPLUS                                               ginrectangle


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int ginrectangle(x0,y0,x1,y1,x2,y2);
         short x0,y0;                 point to check
         short x1,y1;                 upper left coordinate
         short x2,y2;                 lower right coordinate


         DESCRIPTION

         The ginrectangle() function determines if the point described by
         (x0,y0) lies inside the rectangle described by (x1,y1,x2,y2).
         The point in question and the rectangle coordinates may be
         either physical points or logical points.  For a meaningful
         comparison, if point (x0,y0) is physical, the rectangle
         coordinates should be physical.  Likewise, if point (x0,y0) is
         logical, the rectangle coordinates should also be logical.


         RETURN VALUE

         This function returns a 1 if the point is in the rectangle.  A 0
         is returned if the point is outside the rectangle.































         Copyright 1989, 1990 by Michael Yam                   Mouser 7-5





         MPLUS                                               ginrectangle


         EXAMPLE

         #include <stdio.h>
         #include <graph.h>

         #include <gplus.h>

         main()
         {
             short x1,y1,x2,y2;

             x1 = 80;
             y1 = 50;
             x2 = 240;
             y2 = 150;

             mpsetvideomode( _MRES4COLOR );
             _rectangle( _GBORDER, x1, y1, x2, y2 );

             if( ginrectangle( 80, 50, x1, y1, x2, y2 ) )
                 printf("point 80, 50 is in the rectangle\n");
             else
                 printf("point 80, 50 is not in the rectangle\n");

             if( ginrectangle( 79, 50, x1, y1, x2, y2 ) )
                 printf("point 79, 50 is in the rectangle\n");
             else
                 printf("point 79, 50 is not in the rectangle\n");

             getch();                /* strike a key to continue */
             mpsetvideomode( _DEFAULTMODE );
         }

























         Copyright 1989, 1990 by Michael Yam                   Mouser 7-6





         MPLUS                                                  ginwindow


         SUMMARY

         #include <graph.h>
         #include <gplus.h>

         int ginwindow(gwptr,x,y);
         GWDW *gwptr;                 graphic window pointer
         short x,y;                   (x,y) coordinate to check


         DESCRIPTION

         The function ginwindow() determines whether a point lies inside
         the specified graphic window or not.  For a meaningful check,
         the point described by (x,y) must be a physical one, not a
         logical one.


         RETURN VALUE

         This function returns a 1 if the point lies inside the window, a
         0 if the point is outside the window.


         EXAMPLE

         This example creates a button which may be "pushed."  Simply
         move the cursor into the "push" button, click the left mouse
         button, and watch for a 3-D effect.


         #include <stdio.h>
         #include <graph.h>

         #include "gplus.h"
         #include "gscreen.h"
         #include "mouser.h"

         main()
         {
             int quit, ch, device;
             struct ms_status ms_status;
             GWDW *groot;
             GWDW *gwpush;
             GWDW *gwquit;

             mpsetvideomode(_ERESCOLOR);

             if(ms_reset() == 0)
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }
             ms_setevent(1);
             ms_showcursor();


         Copyright 1989, 1990 by Michael Yam                   Mouser 7-7





         MPLUS                                                  ginwindow



             groot = groottopen(10, 20, 16, 50, _GFILLINTERIOR,
                                BRIGHTWHITE, GREY);
             _settextposition(5, 1);
             mpouttext("Click left mouse button", BRIGHTWHITE, -1);

             gwpush = gwdwtopen(11, 25, 13, 32, _GRAISE, BLACK, WHITE);
             mpouttext(" PUSH", BLACK, -1);

             gwquit = gwdwtopen(11, 40, 13, 47, _GRAISE, BLACK, WHITE);
             mpouttext(" QUIT", BLACK, -1);

             quit = 0;
             while(!quit)
             {
                 device = dev_ready(&ch, &ms_status);
                 if(device == _MS)
                 {
                     if ((ms_status.condmask & _LBPRESSED) ||
                         (ms_status.condmask & _LBRELEASED))
                     {
                         if (ginwindow(gwpush, ms_status.x, ms_status.y))
                             physhighlite(gwpush->x1, gwpush->y1,
                                          gwpush->x2, gwpush->y2);
                         else if(ginwindow(gwquit, ms_status.x,
                                                   ms_status.y))
                         {
                             physhighlite(gwquit->x1, gwquit->y1,
                                          gwquit->x2, gwquit->y2);
                             quit = 1;
                         }
                     }
                 }
             }
             ms_reset();
             gwdwclose(gwpush);
             gwdwclose(gwquit);
             grootclose(groot);
             mpsetvideomode(_DEFAULTMODE);
         }

















         Copyright 1989, 1990 by Michael Yam                   Mouser 7-8





         MPLUS                                                  ms_cursor


         SUMMARY

         #include <mouser.h>

         int ms_cursor(void);


         DESCRIPTION

         The function ms_cursor() returns the status of the mouse cursor.


         RETURN VALUE

         This function returns a 1 if the cursor was on, a 0 if the
         cursor was off.


         EXAMPLE

         #include <graph.h>
         #include <mouser.h>

         main()
         {
             _clearscreen( _GCLEARSCREEN );

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }

             if( ms_cursor() == 0 )
             {
                 printf("\nCursor is off.\n");
                 printf("Press a key to turn it on.\n");
                 getch();
                 ms_showcursor();
             }

             if( ms_cursor() == 1 )
             {
                 printf("\nCursor is on.\n");
                 printf("Press a key to turn it off.\n");
                 getch();
                 ms_hidecursor();
             }
         }








         Copyright 1989, 1990 by Michael Yam                   Mouser 7-9





         MPLUS                                             ms_getposition


         SUMMARY

         #include <mouser.h>

         void ms_getposition(x,y,left,right)
         short *x,*y;                 physical x,y coordinate of cursor position
         int *left;                   status of the left button
         int *right;                  status of the right button;


         DESCRIPTION

         The ms_getposition() function gets the mouse cursor position and
         the status of its buttons.  The x,y coordinate is physical and
         will be correct for high resolution as well as medium resolution
         graphics modes.

         The "left" argument will be set to 0 if the left button is up,
         and 1 if the left button is down.

         The "right" parameter will be set to 0 if the right button is
         up, and 1 if the right button is down.


         RETURN VALUE

         None.






























         Copyright 1989, 1990 by Michael Yam                  Mouser 7-10





         MPLUS                                             ms_getposition


         EXAMPLE

         #include <graph.h>
         #include <mouser.h>
         #include <gplus.h>

         main()
         {
             short x, y;
             int left, right;

             mpsetvideomode ( _ERESCOLOR );

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }

             ms_showcursor();
             ms_getposition( &x, &y, &left, &right );
             printf("\nCursor is at %d, %d\n", x, y );
             printf("Press a key...");
             getch();

             ms_setposition( 0, 0 );
             ms_getposition( &x, &y, &left, &right );
             printf("\nCursor is at %d, %d\n", x, y );
             printf("Press a key...");
             getch();

             ms_reset();
             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }






















         Copyright 1989, 1990 by Michael Yam                  Mouser 7-11





         MPLUS                                                ms_getpress


         SUMMARY

         #include <mouser.h>

         int ms_getpress(button,bstatus,bpress,x,y);
         int button;                  button to check (left or right)
         int *bstatus;                status of the button
         int *bpress;                 number of times button was pressed
                                      since last call
         short *x,*y;                 cursor position, physical
                                      coordinate


         DESCRIPTION

         The function ms_getpress() retrieves the status of the specified
         button, the number of times it was pressed since this function
         was called, and position of the cursor at the last time the
         specified button was pressed.

         Two constants are defined in mouser.h to specify the button to
         test:

             Constant                 Meaning
             -------------------------------------
             MSLBTN                   left button
             MSRBTN                   right button

         The status returned will be 0 if the button was up, and 1 if the
         button was down.  The number of button presses can range from 0
         to 32767.  Overflow is not detected.  After the call, the value
         is set to 0.  The x,y coordinate corresponds to the cursor's
         position at the time the button was last pressed; it does not
         necessarily correspond to the cursor's current position.


         RETURN VALUE

         This function returns and integer containing the number of times
         the specified button was pressed since the last call.

















         Copyright 1989, 1990 by Michael Yam                  Mouser 7-12





         MPLUS                                                ms_getpress


         EXAMPLE

         #include <graph.h>
         #include <mouser.h>
         #include <gplus.h>

         main()
         {
             int bstatus;
             int bpress;
             int brelease;
             short x,y;

             mpsetvideomode( _ERESCOLOR );

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }
             ms_showcursor();

             printf("\nPress the left mouse button a few times.\n");
             printf("\nPress a keyboard key when done...\n");
             getch();

             ms_getpress( MSLBTN, &bstatus, &bpress, &x, &y );
             ms_getrelease( MSLBTN, &bstatus, &brelease, &x, &y );

             printf("Left button was pressed %d times.\n", bpress );
             printf("Left button was released %d times.\n", brelease );

             printf("\nPress a key...");
             getch();

             ms_reset();
             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }


















         Copyright 1989, 1990 by Michael Yam                  Mouser 7-13





         MPLUS                                              ms_getrelease


         SUMMARY

         #include <mouser.h>

         int ms_getrelease(button,bstatus,brelease,x,y);
         int button;                  button to check (left or right)
         int *bstatus;                status of the button
         int *brelease;               number of times button was released
                                      since last call
         short *x,*y;                 cursor position


         DESCRIPTION

         The function ms_getrelease() retrieves the status of the
         specified button, the number of times it was released since this
         function was called, and the position of the cursor at the last
         time the specified button was released.

         Two constants are defined in mouser.h to specify the button to
         test:

             Constant                 Meaning
             -------------------------------------
             MSLBTN                   left button
             MSRBTN                   right button

         The status returned will be 0 if the button was up, and 1 if the
         button was down.  The number of button releases can range from 0
         to 32767.  Overflow is not detected.  After the call, the value
         is set to 0.  The x,y coordinate corresponds to the cursor's
         position at the time the button was last released; it does not
         necessarily correspond to the cursor's current position.


         RETURN VALUE

         This function returns and integer containing the number of times
         the specified button was released since the last call.


         EXAMPLE

         See ms_getpress().













         Copyright 1989, 1990 by Michael Yam                  Mouser 7-14





         MPLUS                                              ms_hidecursor


         SUMMARY

         #include <mouser.h>

         void ms_hidecursor(void);


         DESCRIPTION

         The ms_hidecursor() function hides the mouse cursor.  Although
         it cannot be seen on the screen, the cursor still tracks any
         mouse motion.

         The cursor should be hidden any time the screen is read from or
         written to.


         RETURN VALUE

         None.


         EXAMPLE

         See ms_cursor().
































         Copyright 1989, 1990 by Michael Yam                  Mouser 7-15





         MPLUS                                                    ms_poll


         SUMMARY

         #include <mouser.h>

         int ms_poll(ms_status);
         struct ms_status *ms_status;


         DESCRIPTION

         The ms_poll() function polls the status of the mouse and stores
         it in the structure "ms_status." Since this function polls the
         mouse, "condmask" will be incorrect.  "condmask" is valid only
         for dev_ready().

         This function may be used in place of dev_ready() when a program
         receives input solely from a mouse (and not from the keyboard).


         RETURN VALUE

         The function returns the constant _MS.


         EXAMPLE

         #include <graph.h>
         #include <gplus.h>
         #include <mouser.h>

         main()
         {
             struct ms_status ms_status;

             mpsetvideomode( _ERESCOLOR );

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }
             printf("Press right button to quit...");

             ms_showcursor();
             while(1)
             {
                 ms_poll( &ms_status );
                 if( ms_status.rbtn )
                     break;
             }
             ms_reset();
             mpsetvideomode( _DEFAULTMODE );
             return 0;
         }



         Copyright 1989, 1990 by Michael Yam                  Mouser 7-16





         MPLUS                                                   ms_ready


         SUMMARY

         #include <mouser.h>

         unsigned int ms_ready(void);


         DESCRIPTION

         The ms_ready() function determines whether there is mouse input
         waiting or not.  Mouse event checking must be enabled with:

             ms_setevent(1);

         When the mouse is moved or any of its buttons pressed or
         released, an interrupt is generated.


         RETURN VALUE

         This function returns a 0 if no mouse activity was detected.  If
         there was any activity, a bit mask is returned.  Manifest
         constants for these masks are defined in mouser.h and described
         table 7-1 at the beginning of this chapter.

































         Copyright 1989, 1990 by Michael Yam                  Mouser 7-17





         MPLUS                                                   ms_ready


         EXAMPLE

         #include <graph.h>
         #include <gplus.h>
         #include <mouser.h>

         main()
         {
             int ch;
             struct ms_status ms_status;
             unsigned int mask;

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }
             mpsetvideomode( _DEFAULTMODE );

             ms_setevent(1);
             printf("\nMove the mouse or press its buttons...\n");
             while( !(mask=ms_ready()) );
             printf("\nMask = %u\n", mask );

             ms_setevent(0);
             printf("\nMouse response should be dead now.\n");
             printf("\nTry the mouse.  Press a keyboard key to quit...\n");
             while( !dev_ready( &ch, &ms_status ) );

             ms_reset();
         }


























         Copyright 1989, 1990 by Michael Yam                  Mouser 7-18





         MPLUS                                                   ms_reset


         SUMMARY

         #include <mouser.h>

         int ms_reset(void);


         DESCRIPTION

         The function ms_reset() resets the mouse driver as follows:

             -- cursor is positioned to screen's center
             -- the cursor is hidden
             -- MPLUS' internal cursor flag is set to 0 (0 = off, 1 = on)
             -- interrupt call mask is 0 (no interrupt subroutine
                specified)
             -- MPLUS' mouse event checking is disabled
                ( ms_setevent(0) )
             -- light pen emulation enabled
             -- horizontal mickey/pixel ratio:  8 to 8
             -- vertical mickey/pixel ratio: 16 to 8
             -- boundary for cursor is set to the screen's physical
                coordinates
             -- CRT page number is 0


         When programming the mouse, this function should be called at
         the start of your program and at the end of your program.


         RETURN VALUE

         This function returns a 0 if there is no mouse hardware or
         software installed.  If a mouse is properly installed, the
         number of buttons on the mouse is returned.


         EXAMPLE

         #include <mouser.h>

         main()
         {
             int ret;

             ret = ms_reset();

             if( ret == 0 )
                 printf("\nMouse driver not loaded.");
             else
                 printf("\nMouse has %d buttons.", ret );
         }





         Copyright 1989, 1990 by Michael Yam                  Mouser 7-19





         MPLUS                                                ms_setevent


         SUMMARY

         #include <mouser.h>

         void ms_setevent(flag);


         DESCRIPTION

         The ms_setevent() function enables or disables mouse event
         checking.  Setting "flag" to 1 enables an interrupt routine
         which allows the functions dev_ready() and ms_ready() to
         operate.

         Setting "flag" to zero diables mouse event checking in which
         case the mouse will never appear ready to dev_ready() and
         ms_ready().

         Be sure to disable checking when leaving your program.  This may
         be accomplished with either ms_setevent(0) or ms_reset().


         RETURN VALUE

         None.


         EXAMPLE

         See ms_ready().



























         Copyright 1989, 1990 by Michael Yam                  Mouser 7-20





         MPLUS                                             ms_setposition


         SUMMARY

         #include <mouser.h>

         void ms_setposition(x,y);
         short x,y;                   screen location to place the cursor


         DESCRIPTION

         The function ms_setposition() positions the cursor to the
         physical coordinate x,y.


         RETURN VALUE

         None.


         EXAMPLE

         See ms_getposition().



































         Copyright 1989, 1990 by Michael Yam                  Mouser 7-21





         MPLUS                                              ms_showcursor


         SUMMARY

         #include <mouser.h>

         void ms_showcursor(void);


         DESCRIPTION

         The function ms_showcursor() displays the mouse cursor on the
         screen.


         RETURN VALUE

         None.


         EXAMPLE

         See ms_cursor().




































         Copyright 1989, 1990 by Michael Yam                  Mouser 7-22





         MPLUS                                                  ms_window


         SUMMARY

         #include <mouser.h>

         void ms_window(x1,y1,x2,y2);
         short x1,y1;                 upper left corner
         short x2,y2;                 lower right corner

         DESCRIPTION

         The ms_window() function retricts the motion of the mouse to a
         window on a screen bounded by the rectangle "x1,y1,x2,y2."  The
         coordinates are physical ones.


         RETURN VALUE

         None.


         EXAMPLE

         #include <graph.h>
         #include <mouser.h>
         #include <gplus.h>

         main()
         {
             mpsetvideomode( _ERESCOLOR );

             if( ms_reset() == 0 )
             {
                 printf("\nMouse driver not loaded.\n");
                 exit(1);
             }
             ms_showcursor();

             _rectangle( _GBORDER, 100, 50, 400, 200 );
             ms_window( 100, 50, 400, 200 );

             _settextposition( 22, 1 );
             _outtext("Mouse motion is restricted to rectangle.\n");
             _outtext("Press a key to quit...");
             getch();

             ms_reset();
             mpsetvideomode( _DEFAULTMODE );
         }









         Copyright 1989, 1990 by Michael Yam                  Mouser 7-23





       MPLUS                                             FUNCTION INDEX







       APPENDIX A
       ----------


       FUNCTION INDEX





            dev_ready()      7-3              mb_close()          6-4
            gdclose()        4-3              mb_open()           6-5
            gdialog()        4-4              mb_run()            6-7
            gdprompt()       4-6              mb_stdcolors()      6-8
            gdwrite()        4-7              mpgetimage()        5-8
            ginrectangle()   7-5              mpouttext()         2-3
            ginwindow()      7-7              mpputimage()        5-10
            gpickup()        5-3              mpsetvideomode()    2-5
            gputdown()       5-5              mpwordwrap()        2-7
            grootclose()     3-4              ms_cursor()         7-9
            grootopen()      3-5              ms_getposition()    7-10
            groottopen()     3-6              ms_getpress()       7-12
            gwdwclose()      3-7              ms_getrelease()     7-14
            gwdwclr()        3-8              ms_hidecursor()     7-15
            gwdwgetactv()    3-9              ms_poll()           7-16
            gwdwgetorg()     3-10             ms_ready()          7-17
            gwdwopen()       3-12             ms_reset()          7-19
            gwdwsetactv()    3-13             ms_setevent()       7-20
            gwdwsetorg()     3-14             ms_setposition()    7-21
            gwdwtopen()      3-15             ms_showcursor()     7-22
            loghighlite()    5-6              ms_window()         7-23
                                              physhighlite()      5-11
                                              xorline()           5-12
                                              xorpt()             5-14


















         Copyright 1989, 1990 by Michael Yam          Function Index  A-1





         MPLUS                                           REVISION HISTORY







         APPENDIX B
         ----------


         REVISION HISTORY

         Version 1.3  September 1, 1990
         ------------------------------
         1)  Function name changes:

                  Old            New
                  -----------------------------
                  outtext()      mpouttext()
                  setvideomode() mpsetvideomode()
                  getimage()     mpgetimage()
                  putimage()     mpputimage()


             The "mp" prefix was added to avoid possible naming
             collisions when using MPLUS with other libraries.  Code
             using the old names will still compile because of the macros
             in "gplus.h", but use the new names to ensure future
             compatibility with MPLUS.

         2)  New function: mpwordwrap().  This enables or disables word
             wrap when using mpouttext().

         3)  Revamped menu system.  Now supports "greyout" and up to 5
             levels of submenus.  See Chapter 6 for details.

         4)  Text scrolling now supported for graphic windows opened with
             gwdwopen() and grootopen().


         Version 1.2  May 1, 1990
         ------------------------
         1)  Two new graphic window types were added to simulate depth:

                  _GRAISE - a raised graphic window.
                  _GSINK - a sunken graphic window.

             These constants are defined in GPLUS.H.

         2)  The prompt regions in the dialogue boxes were a wee bit
             small for the mouse to easily "home" in.  They have been
             padded out with spaces to enlarge them.

         3)  Dialogue boxes now recognize the "Enter" and "Esc" keys.




         Copyright 1989, 1990 by Michael Yam        Revision History  B-1





         MPLUS                                           REVISION HISTORY


         4)  A new bar menu function was added: bm_exit().  This gives
             the user a "hot" key to exit the bar menu.

         5)  The option to purchase source code is now available.


         Version 1.1  January 1, 1990
         ----------------------------
         1)  Improved the use of memory when opening graphic windows.  In
             version 1.0 the memory may have been actually available but
             unusable due to fragmentation.  Version 1.1 is "smart"
             enough to use that fragmented memory; now more and larger
             graphic windows may be opened at a time.

         2)  A cosmetic change was made to the bar menu function
             bm_show().  The titles in the bar used to be centered in
             logical fields, but when titles which varied greatly in
             length were displayed, the menu appeared off-balanced.  Bar
             menu titles are now left justified and separated by 4
             spaces.

         3)  The demo program MPDEMO.EXE was introduced.


         Version 1.0  September 1, 1989
         ------------------------------
         MPLUS is born.






























         Copyright 1989, 1990 by Michael Yam        Revision History  B-2





         MPLUS                                  LIBRARY INCOMPATIBILITIES







         APPENDIX C
         ----------


         LIBRARY INCOMPATIBILITIES

         Certain calls to Microsoft's GRAPHICS library can confuse MPLUS.
         The side effects of using Microsoft's _outtext() and
         _setvideomode() functions have already been discussed in Chapter
         2, "Graphic Support."  Presented here are other Microsoft
         functions you should use carefully, if at all.


         _getimage(), _putimage()
         ------------------------

         These functions do not recognize the presence of a mouse.  A
         visible cursor will interfere with the "putting" and "getting"
         of the screen image.

         If your application uses a mouse, then MPLUS' mpputimage() and
         mpgetimage() is recommended.


         _remapallpalette(), _remappalette(), _setbkcolor()
         --------------------------------------------------

         The #defines in GSCREEN.H are not universal and are valid only
         for the default palette and background.  Remapping the palette
         or setting the background color will render the #defines
         incorrect.  Consequently, you will need to write your own
         #defines which map to your new colors.

         These Microsoft functions will also alter the colors used by the
         dialogue boxes.  For now, the only way to preserve the colors is
         to avoid remapping BLUE, WHITE, BRIGHTWHITE, BLACK, RED, and
         YELLOW.

         If you simply desire a new background color instead of an
         entirely new palette, see grootopen() or use the code fragment
         below:

             _setcolor( background );
             _rectangle( _GFILLINTERIOR, 0, 0,
                         _videoconfig.numxpixels-1,
                         _videoconfig.numypixels-1 );


         This paints the entire screen with the color of your choice.



         Copyright 1989, 1990 by Michael Yam Library Incompatibilities  C-1





         MPLUS                                  LIBRARY INCOMPATIBILITIES


         _settextwindow(), _setviewport()
         --------------------------------

         These functions generally shouldn't be needed since MPLUS
         provides graphic windows (see gwdwopen() in Chapter 3).  If you
         open a graphic window and then call _setviewport() or
         _settextwindow(), you will lose the graphic window because
         you've altered the output region.

         The graphic window may be recovered by setting it active again
         with:

             gwdwsetactv( gwptr );












































         Copyright 1989, 1990 by Michael Yam Library Incompatibilities  C-2





         MPLUS                                          ABOUT SOURCE CODE







         APPENDIX D
         ----------


         ABOUT SOURCE CODE

         This section is for those interested in working with the source
         code.


         The Make Files
         --------------

             MPLUS.MAK                For MSC 5.x MAKE utility.
             MPLUS.NMK                For MSC 6.0 NMAKE uitlity.  Rename
                                      to "makefile" if you prefer.


         To build a model of the MPLUS Graphic Interface Library, you
         require the following:

             Microsoft C Compiler 5.x or 6.0.
             Microsoft Macro Assembler 4.x or Turbo Assembler 1.x.


         For simplicity, the make files provided assume that all MPLUS
         header and source files are in the current directory, and that
         all output goes to the current directory.  It also assumes you
         will be using MASM.  Customize as needed.

         The default library created will be the small model.  To specify
         other models, use the following:

             MSC 5.x
             -------
             make model=X mplus.mak

             MSC 6.0
             -------
             nmake model=X /f mplus.nmk

         where X can be S, M, C, or L.

         MPLUS will not run properly as a huge model library.
         Applications compiled in the huge model may be linked with the
         large model MPLUS library.






         Copyright 1989, 1990 by Michael Yam       About Source Code  D-1





         MPLUS                                          ABOUT SOURCE CODE


         MSC 6.0 users, please note that while NMAKE is smarter than
         MAKE, NMAKE requires more memory.  If the compiler complains
         about running out of heap space, you can use MAKE on MPLUS.MAK:

             make model=X compiler=MSC6 mplus.mak


         The C compile flags are the same for both MSC 5.x and 6.0:

             -Ox  maximum optimization.
             -Zl  don't include library-search records in object file.


         For MASM, there is only one required switch:

             /MX  mixed case.


         Likewise for TASM:

             /ml  mixed case, all symbols.


         Common Header Files
         -------------------

         These are the same header files distributed with the Shareware
         version of MPLUS.

             MPMENU.H                 for menu functions.
             GPLUS.H                  for MPLUS graphics functions.
             GSCREEN.H                contains color constants.
             MOUSER.H                 for mouse support.


         Special Header Files
         --------------------

         These headers are for the internal development of MPLUS.

             MPABORT.H                for abnormal exits.
             MPKEYS.H                 scan & ascii codes for keyboard.
             MPMEM.H                  for memory routines.


         Pre-1.3 versions also had a group of header files with names
         prefixed with an underscore.  These headers have been
         incorporated into the "common header" files and are now
         obsolete.








         Copyright 1989, 1990 by Michael Yam       About Source Code  D-2





         MPLUS                                          ABOUT SOURCE CODE


         C Source
         --------

         MPLUS 1.3 is split into 14 C modules.

             MPABORT.C                abort routine - resets the screen
                                      to the default, prints out the DOS
                                      errno, and calls abort().
             MPMENU.C                 Menu system.
             MPDIAL.C                 Dialogue Boxes.
             MPIMAGE.C                Graphic Images.
             MPLUS0.C                 mpsetvideomode() and related
                                      routines.
             MPLUS1.C                 mpouttext() and related routines.
             MPLUS2.C                 Other "core" graphics routines.
             MPGWDW0.C                Graphic windows.
             MPGWDW1.C                Code for the graphic root window.
             MPXORL.C                 xorline() and xorpt().
             MPMEM.C                  malloc() calls are routed here.
             MPMOUSE0.C               Mouse interrupt 33H.
             MPMOUSE1.C               Simple mouse routines.
             MPMOUSE2.C               Complex mouse routines.


         Asm Source
         ----------

         MPLUS 1.3 has one assembler module.

             MS_EVENT.ASM             Interrupt routine for mouse event
                                      handler.


         EXPANDED MEMORY SUPPORT

         If your application requires expanded memory support, MPMEM.C is
         the place to build it since all MPLUS malloc() calls are routed
         to this file.  If you don't have expanded memory routines yet,
         don't reinvent the wheel.  Contact Intel for a free copy of
         their EMS Toolkit:

             Intel Corporation
             Development Tools Operation
             5200 NE Elam Young Parkway
             Hillsboro, OR  97124

             1-800-538-3373

             Ask for "The EMS TOOLKIT for C Developers."








         Copyright 1989, 1990 by Michael Yam       About Source Code  D-3





         MPLUS                                                  SHAREWARE







         APPENDIX E
         ----------


         SHAREWARE

             ...is an experiment in economics and trust.


         Shareware authors, in permitting their programs to be circulated
         and readily available for you to try, can bring to market
         quality software at a modest price.  There are two advantages to
         this system:

             1) given various hardware and personal requirements, the
                user gets to try the software before buying.

             2) the author saves the expense of advertising,
                packaging, and distribution, and passes the savings
                on to the user.


         Shareware should not be confused with Public Domain or free
         software.  If you continue to use a Shareware program after
         evaluating it, you should honor the registration notice and pay
         the requested fee.  What you get in return depends on the
         author, but may include a printed manual, free updates, and
         telephone support.

         If the experiment is successful, a symbiotic relationship
         develops between you and the author; you get quality software at
         reduced prices and the author receives compensation and
         incentive to continue work on subsequent versions of the
         program.  The experiment is considered a failure if a parasitic
         relationship develops -- a situation where registration is
         ignored and the program is used nevertheless.  Should this be
         the case, the program either dies, or moves into conventional
         commercial markets to be sold at a higher price.

         The decision is yours.  Please choose to make the experiment a
         successful one.











         Copyright 1989, 1990 by Michael Yam               Shareware  E-1





         MPLUS                                          OBTAINING SUPPORT







         APPENDIX F
         ----------


         OBTAINING SUPPORT

         Support is available through U.S. mail, Compuserve electronic
         mail, and voice mail.

         Support services are provided for registered users only.  While
         I can only help registered users with technical issues,
         inquiries about MPLUS and suggestions for its improvement are
         welcome by all.

         Describe the problem as thoroughly as possible and be sure to
         include the following information:

             1) your full name and where you may be reached.
             2) the version and memory model of MPLUS you were using.
             3) the version of DOS you were using.
             4) the contents of your autoexec.bat
             5) the contents of your config.sys
             6) your video card and the video mode your program was
                running under when the problem occurred.


         Write to:

             Michael Yam
             230 East 88th St.  Apt 6B
             New York, NY  10128

         --- or ---

             Compuserve id: 76367,3040

         --- or ---

             Call (212) 996-2582, Monday thru Friday, 9am to 9pm,
             Eastern Time.

             Leave your message.  Response time is usually within 24
             hours.









         Copyright 1989, 1990 by Michael Yam       Obtaining Support  F-1


















                              Last Page of MPLUS.DOC



















































```
{% endraw %}

## README.DOC

{% raw %}
```

Welcome to version 1.3 of the MPLUS Graphic Interface Library!


================
The Demo Program
================

For a graphical demonstration of MPLUS 1.3's capabilities, run
MPDEMO.EXE.


===========
What's New 
===========

Version 1.3  Released September 1, 1990
---------------------------------------

1)  Function name changes:
    
    Old            New
    -----------------------------
    outtext()      mpouttext()
    setvideomode() mpsetvideomode()
    getimage()     mpgetimage()
    putimage()     mpputimage()


    The "mp" prefix was added to avoid possible naming
    collisions when using MPLUS with other libraries.  Code
    using the old names will still compile because of the macros
    in "gplus.h", but use the new names to ensure future
    compatibility with MPLUS.

2)  New function: mpwordwrap().  This enables or disables word
    wrap when using mpouttext().

3)  Revamped menu system.  Now supports "greyout" and up to 5
    levels of submenus.  See Chapter 6 for details.

4)  Text scrolling now supported for graphic windows opened with
    gwdwopen() and grootopen().


=====================
Note to MSC 6.0 Users
=====================

If you are using Microsoft C 6.0, you'll discover an unresolved
external when linking with the MPLUS library.  MSC 6.0 renamed a
couple of its functions, replacing 5.x's _getlogcoord() and
_setlogorg() with _getviewcoord() and _setvieworg(),
respectively.

If you are a registered user, you have access to the MPLUS
source code and can rebuild the entire system using MSC 6.0.  A
make file for NMAKE is provided: MPLUS.NMK.  Refer to Appendix D
for more details.

If you don't have access to source, or don't want to rebuild the
system, compile MPORIGIN.C (using MSC 6.0) in the model of your
choice and add it to the appropriate MPLUS library.  The example
below does this for the small memory model.

    cl -c -AS -Ox -Zl MPORIGIN.C
    lib SMPLUS.LIB + MPORIGIN,;


Please note that while the MPORIGIN solution is quick and easy,
rebuilding the MPLUS system with MSC 6.0 yields optimal code.


=================
File Descriptions
=================

MPLUS.DOC               On disk documentation.
README.DOC              Last minute notes.
MPDEMO.EXE              Demos MPLUS 1.3 latest features.

SMPLUS.LIB              Small model library.
MMPLUS.LIB              Medium model library  (registered users).
CMPLUS.LIB              Compact model library (registered users).
LMPLUS.LIB              Large model library   (registered users).

GPLUS.H                 Header file for MPLUS graphics functions.
GSCREEN.H               Some manifest constants for screen
                        attributes.
MOUSER.H                Header file for mouse support.
MPMENU.H                Header file for new menuing system.

GWDWDEMO.C              Opens three windows, plots sine & cosine
                        waves.
GDDEMO.C                Samples of dialogue box.
MENUDEMO.C              Illustrates new menuing system.

MPORIGIN.C              For MSC 6.0 compatibility, add to MPLUS
                        library.

BMDEMO.C                OBSOLETE: old menu demo included just for
                        study.
BARMENU.H               OBSOLETE: old menu header included just for
                        study.


Source code is provided for registered users.  Refer to Appendix D for
details.


==========================
MPLUS is brought to you by
==========================

    Michael Yam
    230 East 88th St.  Apt 6B
    New York, NY  10128

    Phone: 212-996-2582
    Compuserve id: 76367,3040


===========
End of File
===========
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2032

     Volume in drive A has no label
     Directory of A:\

    README   DOC      3755   9-01-90
    MPLUS    DOC    150635   9-01-90
    SMPLUS   LIB     28849   9-01-90
    GPLUS    H        6932   9-01-90
    GSCREEN  H        1324   9-01-90
    MOUSER   H        2486   9-01-90
    MPMENU   H        3061   9-01-90
    MPORIGIN C        2191   9-01-90
    MPDEMO   EXE     77710   9-01-90
    GWDWDEMO C        6244   9-01-90
    GDDEMO   C        2624   9-01-90
    MENUDEMO C       16861   9-01-90
    BMDEMO   C       13796   9-01-90
    BARMENU  H        1079   9-01-90
    FILE2032 TXT      2739   9-19-90   2:26p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       771   1-01-80   5:49a
           17 file(s)     321097 bytes
                           31744 bytes free
