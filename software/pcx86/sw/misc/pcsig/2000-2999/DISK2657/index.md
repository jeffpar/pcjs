---
layout: page
title: "PC-SIG Diskette Library (Disk #2657)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2657/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2657"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2657.TXT

{% raw %}
```
Disk No: 2657                                                           
Disk Title: WinEdit                                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: WinEdit                                                  
Author Version: 1.1A                                                    
Author Registration: $59.95                                             
Special Requirements: Windows 3.0                                       
                                                                        
WINEDIT is an ASCII text editor designed to be first and foremost a     
programmer's editor, with features which facilitate creating and        
maintaining program source code.  With its ASCII file format, ability   
to edit files of almost unlimited size, and word processing features    
such as headers and footers, WINEDIT also serves as an effective "front 
end" for desktop publishers and word processors including PageMaker,    
Word For Windows, and Ventura Publisher.                                
                                                                        
Features:                                                               
                                                                        
~ Uses all available Windows memory to load up to 16MB of text files.   
                                                                        
~ Multiple Document Interface allows an unlimited number of document    
windows.                                                                
                                                                        
~ Run your favorite compiler or other programming tool from within      
WINEDIT, monitor the compiler's output, and allow you to review any     
warning or error messages.                                              
                                                                        
~ Regular expressions can be used in search and replace operations for  
powerful text manipulation capabilities.                                
                                                                        
~ Full access to the Windows SDK help and C 6.0 language help by        
clicking on any SDK or C language key word.  (Requires the Windows help 
file SDKWIN.HLP provided with the Microsoft SDK and Microsoft QuickHelp 
provided with Microsoft C 6.0.)                                         
                                                                        
~ Prints half sized "two-up" pages side by side in landscape mode -     
ideal for source listings or early drafts of desktop publishing         
documents.                                                              
                                                                        
~ Headers and footers.  WINEDIT can optionally place the document name, 
date, and time in the header or footer of any printout.                 
                                                                        
~ Easy to use.  Online help is always available.  All major program     
features are available through the pulldown menus and dialog boxes.     
Most-used features have accelerator keys as well for lightning fast     
operation.                                                              
                                                                        
~ Fast.  One of WINEDIT's design goals is speed in all critical         
operations.  WINEDIT loads large files quickly, updates and scrolls the 
screen instantly, and keeps up with the fastest typist.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## WINEDIT.TXT

{% raw %}
```








                                                               WinEdit 1.1A
                                                              User's Manual



                                                                  04-May-91




                                     Copyright (c) 1990,1991 Steve Schauer.
                                                       All rights reserved.







                                For IBM, PC/XT, PC/AT, PS/2 and compatibles













                                                          Wilson WindowWare
                                            2701 California Ave SW  ste 212
                                                          Seattle, WA 98116


                                                      Orders:(800) 762-8383
                                                   Support:  (206) 937-9335
                                                      Fax:   (206) 935-7129

          WinEdit 1.1A User's Manual                                Page ii


          No part of this manual may be reproduced or transmitted in any
          form or by any means, electronic or mechanical, including
          photocopying and recording, for any purpose without the express
          written permission of Wilson WindowWare.  Information in this
          document is subject to change without notice and does not
          represent a commitment by Wilson WindowWare.

          The software described herein is furnished under a license
          agreement.  It is against the law to copy this software under any
          circumstances except as provided by the license agreement.


          U.S. Government Restricted Rights

          Use, duplication, or disclosure by the Government is subject to
          restrictions as set forth in subdivision (b)(3)(ii) of the Rights
          in Technical Data and Computer Software clause at 252.227-7013.
          Contractor/manufacturer is Wilson WindowWare/2701 California Ave SW
          /suite 212/Seattle, WA 98116


          Trademarks

          IBM, PC/XT, PC/AT, and PS/2 are registered trademarks of
          International Business Machines Corporation.
          Microsoft and MS-DOS are registered trademarks of Microsoft
          Corporation.
          Windows is a trademark of Microsoft Corporation.
          PageMaker is a trademark of Aldus Corporation.
          Ventura Publisher is a trademark of Xerox Corporation.
          WinEdit is a trademark of Steve Schauer
          Command Post is a trademark of Wilson WindowWare.


          Acknowledgements

          Winedit was designed & written by Steve Schauer.
          Additional programming by Morrie Wilson and Bob Foster.
          The Control Bar was written by Dave Edson.
          Local memory routines were written by Dan Quigley.
          The regular expression routines are based on code written by
          Allen I. Holub, as published in the C Gazette.

          Our thanks to the many beta-testers for their invaluable
          comments & suggestions.

          WinEdit 1.1A User's Manual                               Page iii




                                        CONTENTS


          INTRODUCTION
             Introduction                       1
             Features                           1

          GETTING STARTED
             Installing WinEdit                 2
             Entering License Information       2
             Basic Operations                   2
             WinEdit Keys                       2

          COMMANDS
             File Menu Commands                 4
             Edit Menu Commands                 5
             Search Menu Commands               6
             Run Menu Commands                  7
             Window Menu Commands               7

          PROCEDURES
             Changing Printers                  8
             Compiling                          8
             Copying, Cutting, and Pasting      8
             Creating New Documents             8
             Deleting Text                      9
             Extended Help                      9
             Printing Documents                 9
             Printing Headers and Footers       9
             Saving Documents                  10
             Setting Display Options           10
             Setting Margins                   11
             Undo                              11
             Using Regular Expressions         11

          SOFTWARE LICENSE
             Software License                  13
             Limited Warranty                  14
             Order Form                        15





          WinEdit 1.1A User's Manual                                 Page 1



          Introduction

          WinEdit is an ASCII text editor designed to take full advantage
          of the Windows 3.0 graphical environment. WinEdit is first and
          foremost a programmer's editor, with features designed for
          creating and maintaining program source code.  With its ASCII
          file format, ability to edit files of almost unlimited size,
          and word processing features such as headers and footers,
          WinEdit also serves as an effective "front end" for
          desktop publishers and word processors including PageMaker,
          Word For Windows, and Ventura Publisher.


          Features

          *  Use all available Windows memory to load up to 16MB of text
             files.

          *  Multiple Document Interface allows an unlimited number of
             document windows.

          *  Run your favorite compiler or other programming tool from
             within WinEdit.  WinEdit will monitor the compiler's output
             and allow you to review any warning or error messages.

          *  Regular expressions can be used in search and replace
             operations for powerful text manipulation capabilities.

          *  Full access to the Windows SDK help and C 6.0 language help
             by clicking on any SDK or C language key word.  (Requires
             the Windows help file SDKWIN.HLP provided with the Microsoft
             SDK and Microsoft QuickHelp provided with Microsoft C 6.0.)

          *  Print half sized "two-up" pages side by side in landscape
             mode -  ideal for source listings or early drafts of
             desktop publishing  documents.

          *  Headers and footers.  WinEdit can optionally place
             the document name, date, and time in the header or
             footer of any printout.

          *  Easy to use.  Online help is always available.  All major
             program features are available through the pulldown menus and
             dialog boxes. Most-used features have accelerator keys as
             well for lightning fast operation.

          *  Fast.  One of WinEdit's design goals is speed in all critical
             operations.  WinEdit loads large files quickly, updates and
             scrolls the screen instantly, and keeps up with the fastest
             typist.

          WinEdit 1.1A User's Manual                                 Page 2


          GETTING STARTED


          Installing WinEdit

             Winedit requires only one file to run: WINEDIT.EXE.  Copy this
             file to a directory on your path, and you can start.  You
             should also copy the WinHelp file, WINEDIT.HLP, to the same
             directory.  If you are running Windows in 386 enhanced mode,
             you can copy the file EDTEMP.PIF to your Windows directory
             to allow WinEdit to compile from within a window.

             That's it!
             
          Entering License Information
          
             Choose this menu selection from the System Menu to enter your
             license number and ID when you register your copy of WinEdit.  
             Registering brings you wonderful benefits:

             - Gets rid of that pesky reminder window that comes up when
               you start the program.
             - Entitles you to one hour free telephone support for 90 days.
             - Gets you the latest version of WinEdit.
             - Gets you a printed User's Manual.
             - Encourages the authors of this program to continue bringing 
               you new and better products instead of breaking down and 
               getting a real job.


          Basic Operations

             WinEdit follows the standard conventions for Windows programs.
             Refer to Chapter 2 of your Microsoft Windows User's Guide for
             instructions on using menus, selecting text, working with
             dialog boxes, working with documents, and using Windows Help.


          WinEdit Keys

             Use the following keys in WinEdit:

             Moving the Insertion Point

             Key(s)              Function
             --------------------------------------
             Up Arrow            Moves up one line.
             Down Arrow          Moves down one line.
             Right Arrow         Moves right one character.
             Left Arrow          Moves left one character.
             Ctrl+Right Arrow    Moves right one word.
             Ctrl+Left Arrow     Moves left one word.
             Home                Moves to the beginning of the line.
             End                 Moves to the end of the line.
             PgUp                Moves up one window.
             PgDn                Moves down one window.
             Ctrl+Home           Moves to the beginning of the document.
             Ctrl+End            Moves to the end of the document.

          WinEdit 1.1A User's Manual                                 Page 3


             Selecting Text

             Key(s)              Function
             --------------------------------------
             Shift+Left or       Selects text one character at a time
               Right Arrow       to the left or right. Or, if the
                                 character is already selected, cancels
                                 the selection.

             Shift+Down or       Selects one line of text up or down.
               Up Arrow          Or, if the line is already selected,
                                 cancels the selection.

             Shift+Home          Selects text to the beginning of the line.

             Shift+End           Selects text to the end of the line.

             Ctrl+Shift+         Selects the previous word.
               Left Arrow

             Ctrl+Shift+         Selects the next word.
               Right Arrow

             Shift+PgUp          Selects the previous screenful.

             Shift+PgDn          Selects the next screenful.

             Ctrl+Shift+Home     Selects to the beginning of the document.

             Ctrl+Shift+End      Selects to the end of the document.
             
             Keypad +            Copies current line to clipboard if no selection,
                                 or copies current selection.

             Keypad -            Cuts current line to clipboard if no selection,
                                 or cuts current selection.



             Help Keys

             Key(s)              Function
             --------------------------------------
             F1                  WinEdit Help Index

             Shift+F1            Extended Help



          WinEdit 1.1A User's Manual                                 Page 4


          COMMANDS


          File Menu Commands

             New
             ---
             Opens a new window with a new, untitled document

             Open
             ----
             Opens a new window with an existing document.
             WinEdit can read an ASCII text file as large as
             available Windows memory.

             Save
             ----
             Saves the current document.  The window remains open.
             If the document is UNTITLED, WinEdit prompts you for
             a document name.

             Save As
             -------
             Saves a document after prompting you for a new name.

             Print
             -----
             Prints the current document using the print settings
             entered in the Page Setup dialog box.

             Page Setup
             ----------
             Allows you to set the margins, headers, footers,
             printer font, and page layout.

             Printer Setup
             -------------
             Sets printer options for WinEdit before printing.

             Preferences
             ---------------
             Allows you to choose the screen font WinEdit uses, the
             tab size, whether the Control Bar is shown, and startup
             file loading options.

             Exit
             ----
             Closes all open windows and exits WinEdit.  If there are
             any unsaved files, WinEdit prompts you before exiting.

          WinEdit 1.1A User's Manual                                 Page 5


          Edit Menu Commands

             Undo
             ----
             Restores the line the insertion point is on to the same
             state it was in when the insertion point first moved
             into it.

             Cut
             ---
             Removes the current selection from the document and
             places it on the clipboard.

             Copy
             ----
             Places a copy of the current selection on the clipboard
             without removing it from the document.

             Paste
             -----
             Pastes the text in the clipboard into the document at the
             insertion point.

             Delete
             ------
             Removes the current selection from the document without
             changing the contents of the clipboard.  If there is no
             selection, removes the character to the right of the
             insertion point.

             Select All
             ----------
             Selects all the text in the document.


          WinEdit 1.1A User's Manual                                 Page 6

          Search Menu Commands

             Find
             ----
             Searches for text in a document.

             * Find          Type the text you want to find.

             * Match case    Select this box to match the upper and
                             lower case exactly.

             * Next          Search forward starting at the insertion
                             point.

             * Previous      Search backward starting at the insertion
                             point.

             Repeat Last Find
             ----------------
             Repeats the last search using the same options, without
             opening the Find dialog box.

             Change
             ------
             Searches for text in a document and replaces the found text
             with text you specify.

             * Find              Type the text you want to find.

             * Replace with      Type the text you want to insert in
                                 place of the found text.

             * Match case        Select this box to match the upper and
                                 lower case exactly.

             * Search backwards  Search backward starting at the
                                 insertion point.

             * Confirm before    When text is found, you will be prompted
               changing          before the change takes place.

             * Change All        Start at the beginning of the document,
                                 and search the entire document.  You will
                                 be prompted before each change takes place
                                 if the Confirm before changing box is
                                 selected.

             Next Error and Prev Error
             _________________________

             If any warning or error messages have been captured from the
             output of one of the Run Menu items, these menu choices allow
             you to review the messages and the corresponding source code.

             View Compiler Output
             --------------------
             Loads the captured compiler output into a document window.

          WinEdit 1.1A User's Manual                                 Page 7


          Run Menu Commands

             The commands on this menu allow you to run other programs
             from within WinEdit.  Use the Configure... command to enter
             the necessary command to run the program.

             Select the Capture Output box and WinEdit will run the
             program you configure and save its output.  When the program
             finishes, WinEdit will allow you to review any warning or
             error messages that have occurred, along with the corresponding
             source code.

             WinEdit constructs a DOS batch file to execute when you choose
             to capture output.  For this reason, to run a Windows
             application from the Run Menu, do not choose to capture
             output.

             WinEdit Project Files
             ---------------------

             WinEdit saves the information from the Configure... dialog box
             in a private INI file with an extension of .WPJ (WinEdit
             Project File).  Choose the Save... pushbutton to save the
             contents of the dialog box in a .WPJ file.  Choose the Open...
             pushbutton to load an existing .WPJ file.


          Window Menu Commands

             Tile
             ----
             Arranges all open document windows side by side so that all
             windows are visible.

             Cascade
             -------
             Arranges all open document windows in an overlapping pattern
             so that the title bar of each window is visible.

             Arrange Icons
             -------------
             Arranges all document icons into rows.

             Close All
             ---------
             Closes all open document windows.  If a document has changes
             that need saving, you will be prompted to save the document
             before closing.

             Document Name
             -------------
             Each open window is listed on the menu by name.  Choose the
             name and that window will become the active document window.


          WinEdit 1.1A User's Manual                                 Page 8


          PROCEDURES


          Changing Printers and Printer Options

             Select Printer Setup from the File menu to change printer
             settings.

             WinEdit will make the requested changes to your printer
             settings for this editing session only.  The default Windows
             settings will not be changed. To permanently change a printer
             setting, use Control Panel.

             Select Page Setup from the File menu to change the printer
             settings for margins, header, footer, printer font, and page
             layout.  WinEdit will remember these settings from session to
             session.


          Compiling (Running other programs)

             The first five commands on the Run menu are user-configurable
             commands to execute another program.  You may configure these
             commands to execute any .EXE  or .BAT program by typing the
             command text in the appropriate Configure... edit box.

             If the program supports DOS redirection (as most compilers
             and linkers do) you can select the Capture Output box to have
             WinEdit capture the program's output in a file.  When the
             program finishes, WinEdit will allow you to review any warning
             or error messages that have occurred, along with the
             corresponding source code.

             WinEdit constructs a DOS batch file to execute when you choose
             to capture output.  For this reason, to run a Windows
             application from the Run Menu, do not choose to capture
             output.

          Copying, Cutting, and Pasting Text

             To copy and paste, or cut and paste text:

             1. Select the text.

             2. Choose Copy from the Edit menu to copy the selected text
                to the clipboard.  Or choose Cut from the Edit menu to cut
                the text to the clipboard.

             3. Move the insertion point where you want the text to appear.
                Or select text you want the pasted text to replace.

             4. Choose Paste from the Edit menu.


          Creating New Documents

             Choose New from the File menu to open a new, untitled document
             window.

          WinEdit 1.1A User's Manual                                 Page 9


          Deleting Text

             To delete text without sending it to the clipboard:

             1. Select the text.

             2. Choose Delete from the Edit menu or press the Delete key.

             If there is no selection, Delete deletes the character to the
             right of the insertion point.


          Extended Help

             Press Shift+F1 or click the Right Mouse Button on any Windows
             SDK function, message, or data structure name and WinEdit will
             access the SDKWIN.HLP topic for that item.

             If the word is not a valid Windows SDK topic, WinEdit will
             pass the word to QH.EXE (Microsoft's QuickHelp program,
             supplied with most Microsoft language products).  This will
             allow you online access to any language or library keyword
             covered in the QuickHelp database.

             For SDK Help, the WinHelp file SDKWIN.HLP must be in either
             the current directory, the Windows directory, or a directory
             listed in your PATH statement.

             For QuickHelp, QH.EXE must be in either the current directory,
             the Windows directory, or a directory listed in your PATH
             statement. In addition, you must have an environment variable
             "HELPFILES=" defined which tells QH.EXE where to look to find
             the appropriate QuickHelp database files.


          Printing Documents

             Choose Print from the File menu to send the current document
             to the printer.


          Printing Headers and Footers

             Choose Page Setup from the File menu to configure header and
             footer text.  Type the text you wish to appear at the top and
             bottom of each page.

             You can use the following special characters in headers and
             footers:

             * %f      The document name will appear.

             * %d      The file date and time will appear, unless the file has
                       been changed, in which case the current date and time
                       will appear.
                       
             * %p      The page number will appear.

          WinEdit 1.1A User's Manual                                Page 10


          Saving Documents

             Choose Save from the File menu to save a document.  Choose
             Save As to save the document with a new name, or to save an
             untitled document.


          Setting Preferences

             Choose Preferences from the File menu to choose a screen
             font, default tab size, whether or not to show the Control
             Bar, and startup file loading options.

          WinEdit 1.1A User's Manual                                Page 11


          Setting Margins

             Choose Page Setup from the File menu to change the margins
             used for printouts.  You can enter the measurements for top,
             bottom, left, and right margins.

             The margin settings are in inches or centimeters,
             corresponding to the English or Metric Measurement setting
             in Control Panel.


          Undo

             Choose Undo from the Edit menu to restore the current line
             to the state it was when the insertion point was first moved
             in to it.


          Using Regular Expressions

             A regular expression is a search or replace string that uses
             special characters to match text patterns.  WinEdit supports
             UNIX style regular expressions.

             When WinEdit conducts a search using regular expressions, it
             must check character by character in your text.  For this
             reason, searches using regular expressions are slower than
             regular searches.

             The following table describes the regular expression
             characters recognized by WinEdit.

             Expression                    Description
             --------------------------------------------------------------
              \         Escape. WinEdit will ignore any special meaning of
                        the character that follows the Escape expression.
                        Use the Escape if you need to search for a literal
                        character that matches a regular expression.

              .         Wild Card. Matches any character.  For example, the
                        expression 'X.X' will match 'XaX', 'XbX, and
                        'XcX', but not 'XaaX'.

              ^         Beginning Of Line. The expression matches only if
                        it occurs at the beginning of a line. For example,
                        '^for' matches the text 'for' only when it occurs
                        at the beginning of a line.

              $         End Of Line. The expression matches only if it
                        occurs at the end of a line.  For example,
                        '(void)$' matches the text '(void)' only when it
                        occurs at the end of a line.

          WinEdit 1.1A User's Manual                                Page 12
              []        Character Class. The expression matches any
                        character in the class specified within the
                        brackets.  Use a dash (-) to specify a range of
                        character values. For example, '[a-zA-Z0-9]'
                        matches any letter or number, and '[xyz]' matches
                        'x', 'y', or 'z'.

             [^]        Inverse Class. The expression matches any character
                        not specified in the class. For example, '[^a-zA-Z]'
                        matches any character that is not a letter.

              *         Repeat Operator. Matches zero or more occurences of
                        the character that precedes the '*'.  For example,
                        'XY*X' matches 'XX', 'XYX', and 'XYYX.

              +         Repeat Operator. Matches one or more occurences of
                        the character that precedes the '+'.  For example,
                        'XY+X' matches 'XYX' and 'XYYX, but not 'XX'.



          WinEdit 1.1A User's Manual                                Page 13

          SOFTWARE LICENSE

          WinEdit is not and has never been public domain software, nor is
          it free software.

          Non-licensed users are granted a limited license to use WinEdit
          on a 21-day trial basis for the purpose of determining whether
          WinEdit is suitable for their needs.  The use of WinEdit, except
          for the initial 21-day trial, requires registration.  The use of
          unlicensed copies of WinEdit by any person, business,
          corporation, government agency or any other entity is strictly
          prohibited.

          A single user license permits a user to use WinEdit only on a
          single computer.  Licensed users may use the program on
          different computers, but may not use the program on more than
          one computer at the same time.

          No one may modify or patch the WinEdit executable files in any
          way, including but not limited to decompiling, disassembling,
          or otherwise reverse engineering the program.

          A limited license is granted to copy and distribute WinEdit
          only for the trial use of others, subject to the above
          limitations, and also the following:

          1) WinEdit must be copied in unmodified form, complete with
             the file containing this license information.

          2) The full machine-readable WinEdit documentation must be
             included with each copy.

          3) WinEdit may not be distributed in conjunction with any
             other product without a specific license to do so from
             Wilson WindowWare.

          4) No fee, charge, or other compensation may be requested or
             accepted, except as authorized below:

             A) Operators of electronic bulletin board systems (sysops)
                may make WinEdit available for downloading only as long
                as the above conditions are met.  An overall or time-
                dependent charge for the use of the bulletin board system
                is permitted as long as there is not a specific charge
                for the download of WinEdit.

             B) Vendors of user-supported or shareware software approved
                by the ASP may distribute WinEdit, subject to the above
                conditions, without specific permission.  Non-approved
                vendors may distribute WinEdit only after obtaining
                written permission from Wilson WindowWare. Such
                permission is usually granted. Please write for details
                (enclose your catalog).  Vendors may charge a disk
                duplication and handling fee, which, when pro-rated to
                the WinEdit product, may not exceed eight dollars.

          WinEdit 1.1A User's Manual                                Page 14


          LIMITED WARRANTY

          Wilson WindowWare guarantees your satisfaction with this product
          for a period of 90 days from the date of original purchase.  If
          you are unsatisfied with WinEdit within that time period, return
          the package in saleable condition to the place of purchase for a
          full refund.

          Wilson WindowWare warrants that all disks provided are free from
          defects in material and workmanship, assuming normal use, for a
          period of 90 days from the date of purchase.

          Wilson WindowWare warrants that the program will perform in
          substantial compliance with the documentation supplied with the
          software product.  If a significant defect in the product is
          found, the Purchaser may return the product for a refund.  In
          no event will such a refund exceed the purchase price of the
          product.

          EXCEPT AS PROVIDED ABOVE, WILSON WINDOWWARE DISCLAIMS ALL
          WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
          LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
          FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE PRODUCT.  SHOULD
          THE PROGRAM PROVE DEFECTIVE, THE PURCHASER ASSUMES THE RISK OF
          PAYING THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR
          CORRECTION AND ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO
          EVENT WILL WILSON WINDOWWARE BE LIABLE FOR ANY DAMAGES
          WHATSOEVER (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
          BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
          INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
          INABILITY TO USE THIS PRODUCT EVEN IF WILSON WINDOWWARE HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

          Use of this product for any period of time constitutes your
          acceptance of this agreement and subjects you to its contents.
     
          
          Association of Shareware Professionals Ombudsman Statement

            Wilson WindowWare, the producer of WinEdit, is a
            member of the Association of Shareware Professionals
            (ASP).  ASP wants to make sure that the shareware
            principle works for you. If you are unable to resolve a
            shareware-related problem with an ASP member by contacting
            the member directly, ASP may be able to help. The ASP
            Ombudsman can help you resolve a dispute or problem with
            an ASP member, but does not provide technical support for
            members' products. Please write to the ASP Ombudsman at
            P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve
            message via easyplex to ASP Ombudsman 70007,3536

          WinEdit 1.1A User's Manual                                Page 15



          WINEDIT ORDER FORM 1.1A

 Name:    ____________________________________________________

 Company: ____________________________________________________

 Address: ____________________________________________________

          ____________________________________________________

 City:    ________________________  St:______  Zip:___________

 Phone: (______)_________________     Country:________________


         ____ WinEdit (s)             @ $59.95 :  _______.____

 Foreign air shipping (except Canada) @  $9.50 :  _______.____

                 Total: _______.____


 Disk Size(circle one)    5.25" acceptable     3.5" required

 Please enclose a check payable to Wilson WindowWare; or you
 may use Visa, MasterCharge, or EuroCard.  For credit cards,
 please enter the information below:

 Card #:__ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __

 Expiration date: ____/____

 Signature:  _________________________________________

 
 Where did you get your copy of WinEdit?


 ____________________________________________________________


 What version of WinEdit have you been evaluating?
 
 
 _____________________________________________________________
 
 
          Send to:  Wilson WindowWare
                    2701 California Ave SW #212 
                    Seattle, WA 98116 
                    USA 

          or call:  (800) 762-8383  (orders only)
                    (206) 937-9335
                    (206) 935-7129  (fax) 


           (Please allow 1 to 2 weeks for delivery) 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2657

     Volume in drive A has no label
     Directory of A:\

    GO       TXT      1331   6-12-91   4:11p
    EDTEMP   PIF       545   4-02-91  12:11a
    WINEDIT  11A        84   4-05-91  10:39a
    WINEDIT  EXE    184368   5-03-91  11:40a
    WINEDIT  HLP     29525   4-02-91  12:11a
    WINEDIT  TXT     35572   5-01-91   9:16p
    GO       BAT        28   6-12-91  11:47a
    FILE2657 TXT      4219   6-12-91   4:13p
            8 file(s)     255672 bytes
                           61440 bytes free
