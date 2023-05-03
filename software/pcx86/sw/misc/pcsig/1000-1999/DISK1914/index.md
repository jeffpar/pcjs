---
layout: page
title: "PC-SIG Diskette Library (Disk #1914)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1914/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1914"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKUTILITIES AND VDOS"

    VDOS is a visual DOS interface (shell) for power-users that prefer to
    work from a command line, yet want a directory display, quick-key DOS
    commands, previous command recall, and other shell features. It
    provides direct access to all standard DOS features, plus features not
    available in standard DOS. These include a paging file directory
    display that lists all files in alphabetical order and shows their file
    attributes as well as a visual directory tree for hard drive users.
    
    VDOS provides full command-line editing, and allows recall of the last
    18 commands for entry or editing. On-line help is provided for common
    DOS operations and frequently used commands can be entered by pressing
    one of the function keys. The VDOS interface is user friendly and
    always displays the current disk drive, directory, and DOS version.
    
    Disk utilites to easily copy and format disks.
    
    ~ QFORMAT -- Quickly format and verify disks in one or more drives.
    Supports 5 1/4 and 3 1/2, 180k, 360k, 720k, and 1.4meg drives.
    
    ~ QCOPY -- A very fast disk copy program which loads to disks in the
    sequence you specify, knows what formats to use and will do so from a
    command line or during the running of the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1914.TXT

{% raw %}
```
Disk No: 1914                                                           
Disk Title: DiskUtilities and VDOS                                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: VDOS                                                     
Author Version: 1.2                                                     
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
VDOS is a visual DOS interface (shell) for power-users that prefer to   
work from a command line, yet want a directory display, quick key DOS   
commands, previous command recall, and other shell features.  It        
provides direct access to all standard DOS features, plus features not  
available in standard DOS such as a paging file directory display that  
lists all files in alphabetical order and shows their file attributes.  
                                                                        
VDOS provides full command line editing, and allows recall of the last  
18 commands for entry or editing.  On-line help is provided for common  
DOS operations, and frequently used commands can be entered by pressing 
one of the function keys.  The VDOS interface is user friendly and      
always displays the current disk drive, directory, and DOS version.     
Program Title: Disk Utilities                                           
Author Version: 3.1                                                     
Author Registration: $15.00                                             
Special Requirements: Hard drive or RAM disk.                           
                                                                        
DiskUtilites to easily copy and format disks.                           
                                                                        
~ QFORMAT - Quickly format and verify disks in one or more drives.      
Supports 5 1/4 and 3 1/2, 180k, 360k, 720k, and 1.4meg drives.          
                                                                        
~ QCOPY - A very fast disk copy program which loads to disks in the     
sequence you specify, knows what formats to use and will do so from a   
command line or during the running of the program                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
DISKUTILITIES v3.0:

DU       DOC      2137 17.02.90   21.14   General information
QCOPY    EXE     77472 17.02.90   21.34   Diskcopy program
QCOPY    DOC     12814 17.02.90   20.29   Documentation
QFORMAT  EXE     45488 17.02.90   21.27   Diskformatting program
QFORMAT  DOC      5451 17.02.90   20.24   Documentation
720KA    COM       724 17.02.90   21.47   720K in 5¼" drive (drive A:)
720KB    COM       724 17.02.90   21.47   720K in 5¼" drive (drive B:)
720K     DOC       407 17.02.90   21.43   Documentation
        8 files
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1914  Disk Utilities and VDOS  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start using the programs, type:  COPY *.DOC PRN  (press enter)     ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## VDOS.DOC

{% raw %}
```




                        VDOS Users Manual V1.2




                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                VDOS                                       
                     Visual DOS Interface System
                                                                           
                                                                           





                             Users Manual











                 Copyright 1989 by Advantage Systems
                            1 October, 1989












                                  1











                        VDOS Users Manual V1.2







                          Table of Contents
                                                                           
                                                                           
                                                                           
                                                                           
                I.   Introduction and Overview          Page               
                                                                           
                        A. Purpose                        3                
                        B. Installation                   3
                        C. System Requirements            3                
                        D. Overview of Features           3                
                        E. Concept of Operation           4                

                II.  Description of Features

                        A. VDOS Editing Features          5
                        B. VDOS Display Features          5
                        C. Function Key Useage            5
                        D. Command Help                   6
                        E. Prior Commands                 7
                        F. File Directory Feature         7
                        G. Tree Directory Feature         8
                        H. Listings to Printer            8
                        I. Changing colors and F-keys     9

                III. Administration

                        A. Warranty                      10
                        B. Support                       10
                        C. Future Enhancements           10

                IV.  Registration Form                   11



                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                  2











                        VDOS Users Manual V1.2

                     I. INTRODUCTION and OVERVIEW

                            A. Purpose

             VDOS is a visual interface to DOS.  It replaces the
        standard DOS prompt with a visual screen that controls the
        input to DOS.  VDOS provides you with complete editing
        features for standard DOS input and supplements this with
        other features that provide an integrated visual interface
        to DOS that is easy to use and will quickly increase your
        productivity.

             VDOS is provided for your use without charge.  However,
        if you find that VDOS improves your interface to DOS and
        you use it on a regular basis, a contribution of $19.95 is
        suggested to allow for development of future enhancements.
        Contributions should be sent directly to the author at:       
                                                                      
                        Advantage Systems
                        1981 NE Brogden Ct.                           
                        Hillsboro, Oregon 97124                       
                                                                      
             All users of VDOS are granted permission to copy and     
        distribute copies of the program and documentation to others  
        providing no charges are involved.  Distribution costs may    
        be charged recipients provided they do not exceed $7 per copy.
                                                                      
                                                                      
                           B. Installation                            
                                                                      
             VDOS should be invoked from the command line by simply   
        typing: VDOS and hitting enter.  No other input is required.  
        The file VDOS.SCR must be in the same directory as VDOS.COM   
        or no screen display will appear.  Once installed, VDOS will
        always replace the standard DOS prompt until you exit from
        VDOS.  If you use a monochrome monitor with a color card,
        you can invoke the mono mode by adding '/M' to the VDOS
        command line (ie, VDOS /M and then enter).


                        C. System Requirements

             VDOS is a memory resident utility that will utilize
        approximately 24k of memory to produce its features.  It
        will function with all types of video adapters and with all
        versions of DOS (except DOS 1.x).






                                  3











                        VDOS Users Manual  V1.2
                                                                    
                                                                    
                        D. Overview of Features                     
                                                                    
             VDOS is a visual interface to DOS providing a visual   
        'enviornment' for the user.  In addition to a complete input
        editing capability for standard DOS input, the following    
        additional features are provided:                           
                                                                    
                1. Constant display of the DOS version in use as    
        well as the current disk drive and DOS directory.           
                                                                    
                2. Utilization of the Function keys to assist in    
        standard DOS input and a visual display of F-key functions. 
                                                                    
                3. A help display of the syntax of most DOS commands
        is available for quick review at any time.                  
                                                                    
                4. Your last 18 DOS commands are avaliable on call  
        for input or editing to create new input.
                                                                    
                5. The file directory of the current directory is   
        available for review (without scrolling!).  This display
        shows all files and their attributes sorted in alphabetic
        order by file name.

                6. A visual Tree display of the a disk structure.

                7. Full use of color is provided throughout all
        displays to enhance the visual interface concept.

                       E. Concept of Operation                      
                                                                    
             VDOS operates as a TSR (Terminate and Stay Resident)   
        program which intercepts COMMAND.COM's requests for an      
        input string.  The program puts DOS 'on hold' while it      
        provides you, the user, with the features of VDOS.  When    
        you hit enter, VDOS supplies your input to DOS and then     
        remains dormant in memory until the next time DOS requests  
        user input.                                                 
                                                                    
             Since it is a TSR, the standard disclaimer must be
        made that it may not be completely compatible with the
        myriad of other TSR's even though it was designed to be
        as inconspicuous as possible.  You must experiment with
        your own favorite TSR's to test their compatiability.

             In addition, since it was designed to function with
        DOS, VDOS will be of no use inside batch files.  The only
        appropriate batch file useage is in your AUTOEXEC.BAT file
        where VDOS can be initially 'installed' into memory.


                                  4











                        VDOS Users Manual  V1.2
                                                                  
                      II. DESCRIPTION OF FEATURES                 
                                                                  
                        A. VDOS Editing Features                  
                                                                  
             VDOS provides the full range of editing features for 
        use in 'creating' your DOS input string.  In addition to  
        normal keystroke editing and the use of the Backspace key 
        to 'rubout' as you backspace, the cursor keys allow you   
        to move to any portion of your input string for 'editing'.
        The Home key moves you to the start of the input string,  
        and the End key moves you to the end of your string.  In  
        addition, for long input strings, you may 'tab' forward   
        with the Tab key and 'tab' backwards with the shift key   
        and the Tab key.  And finally, input may be done in the   
        standard 'Insert' mode which inserts keystrokes between
        existing characters, or in the 'replacement' mode which   
        overwrites existing characters.  The current mode is      
        always displayed, and the mode can be changed by hitting  
        the Ins key.                                              
                                                                  
                         B. VDOS Display Features                 
                                                                  
             The VDOS display is rewritten each time you enter    
        your DOS command in case DOS 'scrolls' the VDOS display   
        off the screen with long output or an application uses    
        the entire screen.  The top part of the display always    
        shows the current version of DOS (even if you change it)  
        as well as the current drive/directory combination (again 
        even if you change it).  The 'help line' gives you some   
        quick help to assist you with your current operating mode 
        and also displays the Ins/Repl status for editing.  The   
        next two lines provide space for you to 'build' your DOS  
        input string.  And finally, the F-key line displays the   
        current useage of the F-keys.  These keys are described   
        next.  The remainder of the screen is used for DOS output.

                           C. Function Key Useage

             The function keys are used to invoke VDOS features
        as well as to provide input assistance.  Each key and its
        useage is described below:

                F1:     The F1 key invokes the DOS command syntax
                        help screen.  This screen is designed to
                        provide you with a quick reference to the
                        many DOS commands available.  The help
                        screen is divided into categories to help
                        you in quickly locating a command.




                                  5











                        VDOS Users Manual  V1.2

                F2:     The F2 key recalls a screenful of your prior
                        DOS command entries.  These prior commands
                        can be 'selected' by moving the cursor down
                        (or up) keys to the appropriate command.
                        The command can then be edited as desired
                        prior to 'inputting' it to DOS.  The Escape
                        key is used to return you to normal DOS
                        input editing.

                F3-F9:  These keys (except for F6 and F8 below)
                        provide input assistance by typing the
                        text shown with that key into the command
                        window.  The input string can then be added
                        to or otherwise modified as desired before
                        it is released to DOS.

                F6:     This key provides a visual tree display of
                        the current disk.  Viewing is by 'pages' using
                        the PgDn and PgUp keys.  Space is provided
                        for 300 branches with 200 directories per branch.

                F8:     This key provides a directory listing of the
                        current directory.  The listing is sorted in
                        alphabetic order and can be viewed in 'pages'
                        with the use of the PgDn and PgUp keys.
                        Space is provided in VDOS to sort up to 500
                        files per directory.

                F10:    This key allows you to exit from VDOS back
                        to the standard DOS prompt and releases all
                        memory previously allocated to VDOS.

                             D. Command Help

             As described above, the F1 key provides a summary of the
        syntax of DOS commands.  The display is arranged to allow you
        to quickly find your DOS command and to show the syntax for
        that command, with all the 'switches' available.  It is setup
        around DOS 2.x with DOS 3.x additions shown separately.

             Because of the number of DOS commands and the differences
        between versions, all commands are not on the screen.  If you
        find that the help display does not suit your needs, it can be
        modified as desired through the use of any screen editor (such
        as PC Magazines PAINT program - Jan 26, 88).  The text and
        colors are contained in the separate file VDOS.SCR specifically
        for this purpose.  Have at it!





                                  6











                        VDOS Users Manual  V1.2
                                                                     
                           E. Prior Commands                         
                                                                     
             The F2 key provides for recall of a screenful of your   
        prior 'commands'.  Any of these entries can be 'selected'    
        simply by using the Up/Down cursor key to move to the        
        desired selection.  That selection is then automatically     
        transferred to the 'command window' for editing.  If you     
        simply wish to re-enter that command, just hit the Enter     
        key and you are done.  However, the commands can still be    
        'edited' prior to submission to DOS.  This feature is very   
        useful in copying same-names files with different extensions.
        Just 'pop-up' the last copy, and cursor to the extension,    
        and replace the extension only.                              
                                                                     
                       F. File Directory Feature

             Because of the extensive use of the file directory
        display, a 'paging' file display is provided for you by
        VDOS.  To see a directory listing of the current directory,
        simply hit the F8 key.  The first 'page' of the sorted
        directory listing will then appear.  Other 'pages' can
        then be displayed with the use of the PgDn and PgUp keys,
        with each key moving a 'page' of the display.

             The display is in normal DOS format, except that it
        is sorted alphabetically and displays all files (including
        hidden files).  The 'attribute' of the file is also shown.
        Files are 'marked' by DOS as Read-Only (Meaning they can     
        only be read and cannot be overwritten), System (Meaning     
        it is used by the system) and Hidden (Meaning it is not      
        shown on the normal directory display).  In addition, the    
        DOS Backup command also 'blanks out' the Archive bit each    
        time the file is backed up using that command.  When a       
        file is changed after it has been 'backed up', then the      
        Arhive bit is set to tell Backup that this file has been     
        changed and needs to be backed up again.                     
                                                                     
             VDOS is arranged to provide room for 500 files which
        can be sorted and displayed by page.  Directories with
        more than this number of files will not be displayed
        correctly.

             The VDIR command can also be entered with a 'command-
        tail' specifying a specific drive, path, and/or files to
        be searched for and displayed (similar to the DOS DIR
        command).  'Wild cards' are supported, but all paths
        entered must end with a '\'.  VDOS will display the
        actual search string at the top so you will always know
        what is being displayed.  VDIR will also show the total
        actual space and number of all files found.


                                  7











                        VDOS Users Manual  V1.2

                H. Visual Tree Directory Feature

             For users of hard disks with an extensive tree structure
        composed of many subdirectories, a visual display of this
        tree structure can be displayed.  For the current disk the
        tree structure can be displayed directly with the F8 key.
        The tree display will show the actual size of all files in
        each 'branch' along with the number of files in that 'branch'.
        The total number of directories found will also be shown.
        If the tree is greater than one 'page' in length, all of it
        can be shown by using the PgDn and PgUp keys to cycle through
        the display.

             VDOS is setup to allow trees of up to 300 'branches' with
        a maximum of 200 'sub-branches' per branch.  In addition, the
        message 'Scanning Disk' will be displayed as VDOS builds the
        directory tree for display.

             The VTREE command can also be entered with a 'command-
        tail' (just like VDIR) specifying another disk.  This is
        done for disk D: by typing VTREE D: on the command line and
        then hitting enter.  Any valid disk can be requested.


                        H. Listing to Printer

             Both the Directory and Tree displays (using VDIR or
        VTREE) can be listed on your printer by simply using the
        key combination CTRL-L (This means simultaneously holding
        down both the Control key -CTRL- and also the L key).  The
        listings will be displayed on your printer by 'pages' using
        a page length of 66 lines per page (normal print using 8 1/2
        by 11 paper).  Each 'page' will have a heading describing
        the printed listing and showing the date printed for page one
        and the page number for subsequent pages.

             To assist in controlling the printer, VDOS also allows
        you to send Formfeeds (jump to a new page) and NewLine
        (go to the next line) sequences to your printer.  A Formfeed
        can be sent to your printer by pressing the CTRL-F combination.
        A Newline can be sent by pressing the CTRL-N combination.
        These extra key combinations will allow you to create listings
        of your directories and disk structure as you want them on the
        printed page without having to manually control the printer.








                                  8











                        VDOS Users Manual  V1.2

                     I. Changing Colors and F-Keys

             The DOS DEBUG program can be used to change certain
        colors used in the program.  First, the 'color' for user
        command input may not suit your monitor or your tastes.
        Colors are stored internally as background/foreground
        Hex digits according to the table given below.  The default
        value for user input is: 7Fh which is 'high white' on a
        grey background (as shown in the table).  This value is
        stored internally at hex location 1F13h.  To change this
        'color' to another 'color' (say black on grey), you would
        use the following DEBUG commands:

                     DEBUG VDOS.COM
                     E 1F13 70
                     W
                     Q

                                CAUTION!
        Be sure to do this with a copy of VDOS.COM and not with your
        original in case of error.  The result of the above DEBUG
        session will be a 'modified' version of VDOS.COM on disk.

        COLOR TABLE:    Hex     Color           Hex     Color
                         0      Black            8      Grey
                         1      Blue             9      Bright Blue
                         2      Green            A      Bright Green
                         3      Cyan             B      Bright Cyan
                         4      Red              C      Bright Red
                         5      Magenta          D      Bright Magenta
                         6      Brown            E      Yellow
                         7      White/Grey(Bkg)  F      Bright White
                Note:    For the Background, only the values
                         0-7 are allowed.

        In addition to the 'Input color' shown above the following
        additonal colors can also be 'modified' as described above:

        LOCATION     DEFAULT    DESCRIPTION
         1F16h         1Fh      Standard User Window Color
         1F17h         4Eh      Highlighting Window Color
         1F18h         1Eh      File Description Heading Color
         1F19h         1Fh      File Name Display Color
         1F1Ah         1Eh      File Attribute Display Color
         1F1Bh         1Ah      File Size Display Color
         1F1Ch         1Bh      File Date Display Color
         1F1Dh         1Eh      File Time Display Color

        To change any of these 'colors', simply follow the above
        DEBUG commands but replacing the 1F13 location with the
        correct location from the above table.

                                  9











                        VDOS Users Manual  V1.2

             Similarly, the actual text entered by the F-keys F3
        to F9 is stored in a 'table' beginning at 1F9Ah.  Each
        key is given 32 bytes for 'text' to be entered, and each
        entry must end with the hex value 00h (creating what is
        called an 'ASCIIZ' string).  These values can be changed
        by DEBUG to any string you wish.  For example, if you
        wish the F3 key to 'type' the string 'BACKUP *.* A:',
        then you would use the following DEBUG commands:

                     DEBUG VDOS.COM
                     E 1F9A 'BACKUP *.* A:',0
                     W
                     Q

        The table of modifiable strings is given below:
               FKEY    LOCATION
                F3      1F9Ah
                F4      1FBAh
                F5      1FDAh
                F7      201Ah
                F9      205Ah

        This changes the strings input, but does not change the
        F-key display at the top of the VDOS screen.  This screen
        is located in the file VDOS.SCR and can be modified with
        DEBUG or any screen editor.

                             CAUTION!
        As with changing colors, never use DEBUG on your original
        VDOS.COM program in case of errors.  The DEBUG session will
        create a 'modified' version of your VDOS.COM so to 'be safe'
        always use a copy of your original program.

        Finally, the lines per page value used by the listing
        procedures can also be changed.  This value is lacated at
        568h and is now set to 52 lines (34h).  It can be changed
        using DEBUG to any value you wish based on your printer setup.

                               NOTE!
        The authors program VBUG can also be used in place of DEBUG
        and will give a visual DEBUG display similar to the VDOS
        screen.  Try it, you'll like it!










                                  10











                        VDOS Users Manual  V1.2

                          III. ADMINISTRATION                            
                                                                         
                             A. Warranty                                 
                                                                         
             As distributed, VDOS is supplied without warranty.  Use of  
        this program is entirely voluntary and all risk is borne by the  
        user.  There is no warranty, implied or expressed, by the use    
        of this product.  In no event will the designer of this product  
        be liable for any damages arising out of the use of this product.
        Useage of this product is agreement to the above limitations.    
                                                                         
                              B. Support                                 
                                                                         
             Because of the method of distribution, no direct support    
        can be provided to end users.  However, all questions, comments,
        or inquiries will be addressed given the time and resources
        available to the author.

                         C. Future Enhancements

             Given any support by the user community, the following
        enhancements to VDOS are planned.  You can assist in this
        development by registering with the author and indicating
        your preferred priority for any(or all) of these enhancements.
        Comments concerning other desired features is encouraged.

                1. Allow easy setup of desired F-key text 'macros'.

                2. Allow easy setup of colors used by VDOS.

                3. Provide an expanded command help feature giving
        a full help explanation for each DOS command.

                4. Provide a paging menu capability.

                5. Allow side-by-side comparison of two directories.

                6. Provide a paging file typing capability.

                7. Provide mouse support.

                8. Add Date and Time displays as well as Caps/Num on/off
        displays to the VDOS interface screen.









                                  11











                        VDOS Users Manual  V1.22

                         IV. REGISTRATION FORM

        Please register me as a user/supporter of the VDOS program.
        Enclosed is $19.95 in check or money order payable to:

                        ADVANTAGE SYSTEMS
                        1981 NE Brogden Ct.
                        Hillsboro, Or. 97124



        NAME______________________________________________________ 

        ADDRESS___________________________________________________

               ___________________________________________________

               ___________________________________________________


        VERSION__________


        COMMENTS__________________________________________________ 
                                                                   
                __________________________________________________ 
                                                                   
                __________________________________________________ 
                                                                   
                __________________________________________________ 
                                                                   
                __________________________________________________ 
                                                                   
                __________________________________________________ 
                                                                   
                __________________________________________________

                __________________________________________________

                __________________________________________________

                __________________________________________________










                                  12








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1914

     Volume in drive A has no label
     Directory of A:\

    VDOS     DOC     31231  12-26-89  10:49p
    VDOS     COM     27588   6-11-90  10:36a
    VDOS     SCR      4000   6-03-90   1:42p
    720K     DOC       407   2-17-90   9:43p
    720KA    COM       724   2-17-90   9:47p
    720KB    COM       724   2-17-90   9:47p
    DU       DOC      2137   3-03-90   7:48p
    FILES    TXT       545   2-17-90  10:15p
    QCOPY    DOC     12343   3-03-90   8:50p
    QCOPY    EXE     77040   3-03-90   7:25p
    QFORMAT  DOC      5510   3-03-90   8:01p
    QFORMAT  EXE     43664   3-03-90   7:41p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   7-12-90  12:32a
    FILE1914 TXT      2961   7-13-90  11:35a
           15 file(s)     209487 bytes
                          105472 bytes free
