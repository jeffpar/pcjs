---
layout: page
title: "PC-SIG Diskette Library (Disk #2012)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2012/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2012"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VBUG"

    VBUG is a visual debug program interface for all users of the debug
    program, providing an improved "screen oriented" interface using
    standard debug commands.  VBUG provides full command line editing
    features, including recall of the last 10 commands for entry or editing.
    On-line help is provided for all commands, and frequently used commands
    (such as trace and proceed) can be entered by pressing a function key.
    VBUG provides "paging" dump and unassemble commands and always shows the
    file currently being debugged.  VBUG also allows saving the file size
    via function key and later resetting the file size, also by a function
    key.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2012.TXT

{% raw %}
```
Disk No: 2012                                                           
Disk Title: VBUG                                                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: VBug                                                     
Author Version: 1.2                                                     
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
VBUG is a visual debug program interface for all users of the debug     
program, providing an improved "screen oriented" interface using        
standard debug commands.  VBUG provides full command line editing       
features, including recall of the last 10 commands for entry or editing.
On-line help is provided for all commands, and frequently used commands 
(such as trace and proceed) can be entered by pressing a function key.  
VBUG provides "paging" dump and unassemble commands and always shows the
file currently being debugged.  VBUG also allows saving the file size   
via function key and later resetting the file size, also by a function  
key.                                                                    
                                                                        
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
║                      <<<<  Disk #2012  VBUG  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start program, type:  VBUG  (press enter)                          ║
║                                                                         ║
║   To print documentation, type:  COPY VBUG.DOC PRN  (press enter)       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## VBUG.DOC

{% raw %}
```





                        VBUG Users Manual V1.2
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       

                                VBUG
                     Visual DOS DEBUG Interface Program







                             Users Manual











                 Copyright 1989 by Advantage Systems
                            1 November, 1989

                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       




                                  1









                        VBUG Users Manual V1.2
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                          Table of Contents                                
                                                                           
                                                                           
                                                                           
                                                                           
                I.   Introduction and Overview          Page               
                                                                           
                        A. Purpose                        3                
                        B. Installation                   3                
                        C. System Requirements            3                
                        D. Overview of Features           3
                        E. Concept of Operation           4                
                                                                           
                II.  Description of Features                               
                                                                           
                        A. VBUG Editing Features          5                
                        B. VBUG Display Features          5                
                        C. Function Key Useage            5                
                        D. Command Help                   6                
                        E. Prior Commands                 7                
                        F. Dump/Unassemble Features       7                
                        G. Listing Code to Printer        7                
                                                                           
                III. Administration                                        
                                                                           
                        A. Warranty                       8                
                        B. Support                        8                
                        C. Future Enhancements            8                
                                                                           
                IV.  Registration Form                    9                
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           




                                  2









                        VBUG Users Manual V1.2

                     I. INTRODUCTION and OVERVIEW

                            A. Purpose

             VBUG is a visual interface to the DOS Debug program.
        It provides a continuous display of the CPU registers and
        allows function key input for common commands.  VBUG also
        provides you with complete editing capability for all input
        as well as recall of prior commands.  VBUG also provides
        command help and paging displays to provide a friendly
        visual interface for debugging without having to go to a
        memory intensive program such as CodeView.

             VBUG is provided for your use without charge.  However,
        if you find that VBUG improves your productivity, and that
        you use it on a regular basis, a contribution of $19.95 is
        suggested to allow for development of future enhancements.
        Contributions should be sent directly to the author at:
                                                                        
                        Advantage Systems                               
                        1981 NE Brogden Ct.                             
                        Hillsboro, Oregon 97124
                                                                        
             All users of VBUG are granted permission to copy and       
        distribute copies of the program and documentation to others    
        providing no charges are involved.  Distribution costs may      
        be charged recipients provided they do not exceed $7 per copy.  
                                                                        
                                                                        
                           B. Installation                              
                                                                        
             VBUG should be invoked from the DOS command line by simply 
        typing: VBUG and hitting enter.   VBUG may also be invoked      
        with a file to be debugged by following VBUG with the full      
        filename to be debugged, as follows: VBUG filename (then enter).
        Path names may be included with the filename, if desired.

                        C. System Requirements

             VBUG is an extension to the DOS debug program and will use
        approximately 22k of memory to produce its features.  It        
        will function with all types of video adapters and with all     
        versions of DOS (except DOS 1.x).                               
                                                                        

                                                                        
                                                                        
                                                                        
                                                                        




                                  3









                        VBUG Users Manual  V1.2
                                                                           
                                                                           
                        D. Overview of Features                            
                                                                           
             VBUG is a visual interface to the DOS debug program           
        providing a screen oriented visual debugging enviornment.          
        The following features are provided:                               
                                                                           
                1. Full editing of all command input as well as            
        recall and display for editing of 10 prior commands.               
                                                                           
                2. Constant display of all CPU registers as well           
        as the current file being edited (and its size if saved).          
                                                                           
                3. Utilization of the Function keys to assist in           
        common command input with a display of function key useage.        
                                                                           
                4. A help display of the syntax of all debug commands
        is available for quick review at any time.                         
                                                                           
                5. Dump and Unassemble commands provide paging displays    
        for ease of use, and unassembled code can be listed on the printer.
                                                                           
                6. File size can be saved on entry via a function key      
        and then reset via a function key prior to storing the edited file.
                                                                           
                7. Full use of color is provided throughout all            
        displays to enhance the visual interface concept.                  
                                                                           
                       E. Concept of Operation                             
                                                                           
             VBUG operates as an enhancement to your current debug         
        program which interfaces to the debug programs request for an      
        input string.   Other interfaces to debug are also provided        
        to allow correct operation of all debug operations.                
                                                                           
             Since it incorporates a modified version of debug,            
        users are cautioned that they must be the owners of a              
        valid version of debug prior to use of the VBUG program.           
        However, since debug is a standard issue with all versions         
        of DOS, users will have no problem meeting this requirement.
                                                                           
        NOTE:  Users of CGA cards and monochrome monitors can modify       
        the program to display correctly by using debug as follows:        
                        DEBUG VBUG.COM                                     
                        E 30E0 1                                           
                        W                                                  
                        Q                                                  
        This will force the program to always display in one color.        
                                                                           




                                  4









                        VBUG Users Manual  V1.2
                                                                  
                      II. DESCRIPTION OF FEATURES                 
                                                                  
                        A. VBUG Editing Features                  
                                                                  
             VBUG provides the full range of editing features for 
        use in  'creating' your  command string.  In addition to  
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
                                                                  
                         B. VBUG Display Features                 
                                                                  
             The VBUG display is a visual display of the internal 
        CPU registers of your computer.  Shown on the left side   
        of the display are the general registers on the top and   
        the special registers in their normal association on the  
        bottom.  Shown on the right side is the flag register on  
        the top in both a boolean display and the normal debug    
        type of display.  The current code at CS:IP is shown on   
        the bottom right of the display.                          
             The top of the display shows the current file name   
        in use, and if used also shows the file sizes as they     
        are stored.  Finally, the F-key line displays the setup   
        of the F-keys.  These keys are described below.           
                                                                  
                           C. Function Key Useage                 
                                                                  
             The function keys are used to invoke VDBUG features  
        as well as to provide input assistance.  Each key and its 
        useage is described below:                                
                                                                  
                F1:     The F1 key invokes the VBUG command syntax
                        help screen.  This screen is designed to  
                        provide you with a quick reference to the 
                        debug command syntax.  After viewing the  
                        help screen, you can restore the register 
                        display by simply hitting the enter key.  
                                                                  





                                  5









                        VBUG Users Manual  V1.2
                                                                          
                F2:     The F2 key recalls a screenful of your prior      
                        command entries.  These prior commands can        
                        be 'selected' by moving the cursor down           
                        (or up) keys to the appropriate command.          
                        The command can then be edited as desired         
                        prior to 'inputting' it to VBUG.  The Escape      
                        key is used to return you to normal entry.        
                                                                          
                F3:     Allows tracing of a single line of code.          
                        After execution of the code line, the             
                        register display is updated.                      
                                                                          
                F4:     Allows program execution from the current         
                        CS:IP setting.                                    
                                                                          
                F5:     Allows tracing of a single line of code           
                        'calls' or 'interrupts'.  Registers are updated.
                                                                          
                F6:     Saves the current BX/CX registers.  Upon          
                        'loading' a file these show the file size.        
                                                                          
                F7:     Unassembles a page starting at CS:IP.  More       
                        'pages' can be displayed with the F9 key.         
                                                                          
                F8:     Restores the BX/CX registers to the values        
                        stored by the F6 key.  If changed by debugging,   
                        these values must be reset prior to writing       
                        the file to disk as they are used to control      
                        the actual file size for writing operations.      
                                                                          
                F9:     Used to display another 'page' of code.           
                                                                          
                F10:    Exits from VBUG without saving the current        
                        file being debugged.                              
                                                                          
                             D. Command Help                              
                                                                          
             As described above, the F1 key provides a summary of the     
        syntax of debug commands.  The display is arranged to allow you   
        to quickly view the syntax for all debug commands.
                                                                          
             In addition to the command sytax displayed, the help screen  
        also indicates the default parameters assumed by the debug        
        program and defines the parameters used by all debug commands.    
                                                                          
                                                                          
                                                                          
                                                                          
                                                                          




                                  6









                        VBUG Users Manual  V1.2
                                                                          
                           E. Prior Commands                              
                                                                          
             The F2 key provides for recall of a screenful of your        
        prior 'commands'.  Any of these entries can be 'selected'         
        simply by using the Up/Down cursor key to move to the             
        desired selection.  That selection is then automatically          
        transferred to the 'command window' for editing.  If you          
        simply wish to re-enter that command, just hit the Enter          
        key and you are done.  However, the commands can still be         
        'edited' prior to submission to DOS.  This feature is very        
        useful in tracing thru loops as you can stop in the middle        
        of a loop, trace down one line, then restart at that point        
        and stop on the prior line.  The next time through the            
        loop you simply recall these commands and re-execute them!        
                                                                          
                       F. Paging Features                                 
                                                                          
             To facilitate viewing, the Dump command and the              
        Unassembe commands provide paging features.  Once invoked,        
        the dump command (without any length parameters) will             
        automatically present a 'page' of data.  The PgDn key will        
        then present the next page of data, and the PgUp key will
        also present the previous page.  This allows you to quickly       
        'scroll' through your data.                                       
                                                                          
             In addition, the Unassemble command will also 'page'.        
        You may unassemble a page of code by entering the unassemble      
        command and a starting address.  The next 'page' of code can      
        be displayed by simply hitting the F9 key.  Thus code can be      
        quickly displayed in visual pages.  If you wish to view the       
        code at CS:IP, use the F7 key to display a page of code from      
        CS:IP on.  F9 will then continue the paged display.               
                                                                          
             Note that the F2 key displays prior commands and these       
        can be selected with the Up and Down cursor keys.  Thus           
        each display 'mode' has its own navigation keys: Unassembe        
        uses the F7 and F9 keys; Dump uses the PgDn and PgUp keys;        
        and prior commands use the Up and Down cursor keys.               
                                                                          
                        G. Listing Code to Printer                        

             Code can be listed to the printer with the 'K' command.
        The syntax for this new command is: K Range, where Range can
        be either a Start-Address followed by an Ending Offset, or
        a Start-Address L Bytes to unassemble.  The unassembled listing
        will be of the form:  Offset Inst Operands   ;.  This allows
        'comments' to be conveniently added and allows 'labels' to be
        indicated by adding H(Offset): or by highligting that instruction.
        This 'Kopy' command allows sections of code to be listed to the
        printer to aid in debugging, thus the listed code is very similar
        in form to the actual assembler code to make comparisons easy.


                                  7









                        VBUG Users Manual  V1.2

                          III. ADMINISTRATION

                             A. Warranty

             As distributed, VBUG is supplied without warranty.  Use of
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
        enhancements to VBUG are planned.  You can assist in this        
        development by registering with the author and indicating        
        your preferred priority for any(or all) of these enhancements.   
        Comments concerning other desired features is encouraged.        
                                                                         
                1. Allow 'watchpoints' via a View command.  These
        data areas will automatically be displayed after each Trace,
        Proceed, or stop command.

                2. Allow a selection of the type of 'breakpoint' after
        each Trace or Proceed to include:  Pause before redisplaying
        registers, shift to graphics mode then pause, or addon display
        of numeric coprocessor registers.

                3. Adjust the seach command to dump a screenful of
        data around each match.
















                                  8









                        VBUG Users Manual  V1.2

                         IV. REGISTRATION FORM

        Please register me as a user/supporter of the VBUG program.
        Enclosed is $19.95 in check or money order payable to:
                                                                   
                        ADVANTAGE SYSTEMS                          
                        1981 NE Brogden Ct.                        
                        Hillsboro, Or. 97124                       



        NAME______________________________________________________

        ADDRESS___________________________________________________

               ___________________________________________________

               ___________________________________________________

                                                                   
                                                                   
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
                                                                   
                                                                   
                                                                   
                                                                   
                                                                   








                                  9





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2012

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    VBUG     DOC     29074  12-26-89  10:47p
    GO       TXT       729   7-12-90  12:22a
    VBUG     COM     22389  10-25-89  11:07p
    FILE2012 TXT      1851   7-13-90  11:32a
            5 file(s)      54081 bytes
                          104960 bytes free
