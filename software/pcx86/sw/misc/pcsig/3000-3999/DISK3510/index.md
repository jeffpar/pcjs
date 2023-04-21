---
layout: page
title: "PC-SIG Diskette Library (Disk #3510)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3510/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3510"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ACFM.DOC

{% raw %}
```







        
        
        
        
        
        
        
        
                                  USER'S GUIDE
        
        
        
                                       for
        
        
        
                                      ACFM
        
        
        
        
                      AUTOEXEC.BAT CONFIG.SYS FILE MANAGER
        
        
        
        
        
        
        
        
        
        
                             REXL Shareware Program
        
        
        
        
        
        
        
        
                                   Version 1.0
                                (c) Copyright 1993
                                   H. S. Aurand
                               All rights reserved.
        
        
        
        
        
        
        
        
                                                        ACFM.DOC  3-16-93      
        




                                   QUICK START
        
        Place the distribution diskette in a floppy drive.  Be sure the 
        door or handle of the drive is closed.  Change to the drive in 
        which you placed the diskette.  Type <INSTAC> <Enter>.  
        
        If the INSTAC.EXE file is missing from your distribution disk, 
        type <ACFMLHA path> <Enter>, where path is the drive and 
        directory where you want the ACFM files placed.  For instance, 
        <ACFMLHA C:\ACFM> <Enter>.  This will extract all the ACFM files 
        into the C:\ACFM directory including INSTAC.EXE which can then be 
        replaced on the distribution disk.
        
        
                                   DESCRIPTION
        
        There are many times that a PC user needs to change the 
        configuration of his machine.  Many programs have different 
        requirements that must be met by having different AUTOEXEC.BAT 
        and CONFIG.SYS files.  For instance most defragmenters require 
        that all terminate and stay resident (TSR) programs must be 
        removed from RAM.  Also some programs require so much RAM that 
        TSR's must be removed.  Others have requirements for particular 
        drivers etc.  The need is to save the different AUTOEXEC.BAT and 
        CONFIG.SYS files in a way that they can be safely, reliably and 
        easily identified and easily copied to the root directory for 
        rebooting.
        
        ACFM, an acronym for Autoexec.bat - Config.sys File Manger, does 
        just that by allowing the user to save and edit up to 25 files of 
        each type.  Each file has its own label of up to 76 characters.  
        AUTOEXEC.BAT and CONFIG.SYS files can be copied to and from the 
        root directory.  For safety and reliability, the user must boot 
        manually, and confirmation prompts are used at critical points in 
        the program's execution.  ACFM is not ram resident and is 
        executed only when needed.
        
        ACFM makes it easy to store several different versions of 
        AUTOEXEC.BAT and CONFIG.SYS files and copy them when needed to 
        the root directory of the C Drive if a hard disk is installed.  
        If only two floppy drives are available, the A Drive is accessed.  
        The next time you reboot they become effective.  Since ACFM does 
        not execute every time you boot, you are not bothered by being 
        forced to make a choice every time, but only when you need to 
        change configuration.
        
        ACFM also includes the ability to add, delete, edit and view 
        stored files as well as to copy files to and from the root 
        directory.  It also permits shelling out to DOS to accomplish 
        more general tasks. 




                                      1
        




                                 INCLUDED FILES
        
        The distribution disk should contain two files, INSTAC.EXE and 
        ACFMLHA.EXE.  The former is used for installation.  The latter is 
        a self-extracting LHA archive file which contains all of the ACFM 
        programs as follows:
        
                ACFM.EXE          Program file
                ACFM.DEF          Defaults used by program file
                INSTAC.EXE        ACFM installation program.  Also
                                    included on distribution disk
                ACFM.DOC          User's Guide
                VENDOR.DOC        Information for vendors, BBS's, etc.
                README.DOC        Shareware and registration information
                FILE_ID.DIZ       Catalog information for BBS's, etc. 
        
        
                                  INSTALLATION                       
        
        If the INSTAC.EXE file is missing from the distribution disk for 
        some reason, see the QUICK START section, above for a minimal 
        installation.  After extraction of the ACFM programs, INSTAC.EXE 
        can be run, if necessary, providing the archive file, ACFMLHA.EXE 
        has been copied to the same path containing the INSTAC.EXE file.
        
        For normal and the easiest installation, place the distribution 
        diskette in a floppy drive.  Be sure the door or handle of the 
        drive is closed.  Change to the drive in which you placed the 
        diskette.  Type <INSTAC> <Enter>.  
        
        Alternately, from any current drive and directory, place the 
        distribution diskette in a drive, be sure the drive door is 
        closed and type <d:INSTAC> <Enter> where d is the letter of the 
        drive in which you placed the diskette.
        
        You may also install from a hard disk.  In this case it is 
        assumed that both distribution files have been copied to a 
        directory on a hard disk.  This could have been accomplished by 
        copying a diskette containing the distribution files or by 
        downloading from a BBS.
        
        As in the case using a floppy disk, change to the drive and 
        directory containing the distribution files and type <INSTAC> 
        <Enter>.  Or from any drive and directory type <D:\d\INSTAC> 
        <Enter> where D is the drive and d the directory where the 
        distribution files are located. 
        
        The install program will ascertain the drive and directory in 
        which you wish to install ACFM files.  The default is C:\ACFM.  
        Another may be selected.




                                      2
        




        On completion of the installation program your current working 
        directory will be the drive and directory in which you installed 
        the ACFM files.  At this point you can execute ACFM by typing 
        <ACFM> <Enter>.
        
        
                                    OPERATION
        
        To run the program be sure you are at a DOS prompt and in a 
        directory containing the ACFM filed then type <ACFM> <Enter>.  A 
        notice screen is displayed first. If you have not registered your 
        copy of ACFM, please read this screen.  After removing it by 
        pressing any key, the Main Menu will appear.  If the display is 
        not completely legible, go to the Utility Menu by pressing "U" 
        which will permit you to change the display attributes.  These 
        may be changed and saved so that the displays and their menu bars 
        are completely legible no matter what kind of a video system is 
        being used.  How this is done is described below.
        
        Menu items can be selected by pressing the highlighted character 
        key.  Alternately selection can be accomplished by using the 
        Home, End, Page Up, Page Down, up arrow and down arrow keys to 
        position the selection bar.  For some items just doing this will 
        select the item.  For others it is necessary to press the <Enter> 
        key or the highlighted character key.  
        
        If you are using ACFM for the first time, a good way to start is 
        to copy the AUTOEXEC.BAT and CONFIG.SYS files from the root 
        directory to the AA and CA files and again to AB and CB.  Edit 
        the latter to make desired alternatives.  Be sure to enter (edit) 
        the descriptions of each file so that they can readily remembered 
        and identified.
        
        If you ever need the alternatives, use ACFM to copy them to the 
        AUTOEXEC.BAT and/or CONFIG.SYS files of the root directory.  
        Reboot.  Then if you need to go back to your original boot files, 
        copy AA and CA to the root directory and reboot. 
        
        
        MAIN MENU
        
        Saved file names in ACFM consist of only two alphabetic 
        characters.  The first is A or C indicating whether or not the 
        file is an AUTOEXEC.BAT or CONFIG.SYS type of file.  The second 
        is a sequence letter that varies from A to Y inclusively.  There 
        cannot be a gap in this sequence. Therefore, to add a file, the 
        next larger sequence letter than the last shown is used.
        
        The options are as follows:





                                      3
        




        "Quit" exits to DOS.  Esc will also do this from this menu.  If 
        you have copied files to either the root directory AUTOEXEC.BAT 
        or CONFIG.SYS files, when you quit, you will be reminded of the 
        fact and asked for confirmation of whether you wanted to do this 
        or not.  In case you did not, you will be returned to the Main 
        Menu where you can get the files in the condition that you want 
        them.
        
        "Select file menu" changes to that menu and is the simplest way 
        to select the different saved files.  Other methods are described 
        below under ADVANCED FEATURES.  The file designation and 
        description of the selected file are also shown in the header of 
        the Main Menu.
        
        "Type file toggle" changes operations between AUTOEXEC.BAT type 
        files and CONFIG.SYS types.
        
        "Command line for editor" permits editing the DOS command line 
        used by the "edit File" and "Add File" options.  These options 
        shell out to an editor used for the selected AUTOEXEC.BAT or 
        CONFIG.SYS type files.  The default editor is "EDLIN".  If you 
        use another editor, be sure to use its non-document mode. 
        
        "View" permits the viewing of the C:\AUTOEXEC.BAT file or the 
        C:\CONFIG.SYS file in the root directory depending on which type 
        has been selected by the "Type file toggle".  (If no hard disk is 
        available, the A Drive is accessed).
        
        "vIew" permits the viewing of the selected file.
        
        "Edit description" permits the editing of a 76 character line 
        that is attached to each saved file.  The description of the 
        selected file is displayed at the top of the Main Menu, and all 
        descriptions are displayed on the Select File Menu.
        
        "edit File" edits the selected file using the editor invoked by 
        the "Command line for editor" option.
        
        "Delete file" deletes the selected file and its description.  
        Files further down the list are not deleted, but their file names 
        are changed so that they maintain an alphabetical sequence.
        
        "cOpy" copies the selected file to C:\AUTOEXEC.BAT or 
        C:\CONFIG.SYS as appropriate.  (If no hard disk is available the 
        A Drive is accessed.)  A file name consists of only two 
        alphabetic characters.  The first is A or C and the second is a 
        sequence letter that varies from A to Y inclusively.  There 
        cannot be a gap in this sequence.






                                      4
        




        "coPy" inverts "cOpy" by copying C:\AUTOEXEC.BAT or C:\CONFIG.SYS 
        as appropriate to the next file beyond the last one saved.  (If 
        no hard disk is available the A Drive is accessed.)  If the full 
        complement of 25 files has been saved, copying will then be to 
        the 25th file which will be written over.
        
        "copY" copies the selected file to the next file beyond the last 
        one saved.  As with the "coPy" option, if the full complement of 
        25 files has been saved, copying will then be to the 25th file 
        which will be written over.
        
        "sHell" permits the execution of an 80 character DOS command line 
        with subsequent return to the Main Menu.  This option provides a 
        completely flexible way of manipulating files particularly if 
        they reside in a directory other than the one selected at 
        installation for the saved files.
        
        
        SELECT MENU
        
        This menu lists the current set of files stored in the directory 
        selected for ACFM files at installation.  These files are 
        designated by two letters, as indicated above, the first is A or 
        C indicating whether the file is an AUTOEXEC.BAT type or a 
        CONFIG.SYS type.  The second letter is the sequence letter for 
        the file.  There are no gaps in the sequence.  The saved 
        AUTOEXEC.BAT or CONFIG.SYS file has no extension, but the 
        description for this file is stored in a file with the same name, 
        but with an extension of DES.
        
        In this menu if the sequence letter of a listed file or <Enter> 
        is pressed, the file is selected and the Main Menu appears 
        immediately. 
        
        If there are 24 files saved, the menu will be truncated by 
        omitting the "1 Go to main menu" option.  However, the "1" key 
        will still be active.  If there are 25 files saved, only the list 
        of the 25 will appear, so that a maximum of 25 files of one type 
        may be used.
        
        Pressing <Esc> will return you to the Main Menu.
        
        
        UTILITY MENU
        
        The options are as follows:
        
        "Quit" operates the same as in the Main Menu.
        
        "Return to main menu" displays the Main Menu.  <Esc> will also do 
        the same.
        
        "Go to select file menu" displays the Select File Menu.

                                      5
        




        "Type of file toggle" is identical to the same option in the Main 
        Menu.
        
        "Save items below as defaults" saves the command line for the 
        editor and the display attributes to a file named ACFM.DEF.
        This file is read each time the ACFM program is executed.
        
        "Command line for editor" is identical to the same option in the 
        Main Menu.
        
        "Background attribute > 7 toggle" changes between Foreground 
        blink and Intense background.  This can only be observed if the 
        background byte of a display attribute is greater than 7.
        
        In the remaining options the byte indicated is incremented by 
        one.  The effects of changing the different bytes can be noted in 
        the display of the byte value in hexadecimal form immediately to 
        the right of the option.  
        
        If your computer has an MDA video adapter card, the complete 
        range of attributes are not available as they are using a color 
        video adapter.  Combining the background and foreground values, 
        the only valid hexadecimal attributes for MDA are: 00, 01, 07, 
        09, 0F, 70, 87, 8F and F0.  87 and 8F are not available using 
        some video boards.  Other values will work, but will default to  
        one of these nine (or seven).
        
        
        ADVANCED FEATURES
        
        For users with large numbers of stored files who use this program 
        more than occasionally, some short cuts are provided in both the 
        Main Menu and the Utility Menu.
        
        In the Main Menu, files may be selected without going to the 
        Select Menu by the use of keys that are not shown on the display.  
        The plus key will shift the selected file to the next in the 
        sequence wrapping to the first when the last is reached.  The 
        minus key does just the opposite.  In addition a file can be 
        selected by holding the Alt key down and then pressing the key 
        corresponding to the sequence letter of the file desired for 
        selection.  
        
        In the Utility Menu when the selection bar is on one of the last 
        nine options, i. e., those that select display attributes by 
        incrementation, if a plus key is pressed the attribute will be 
        incremented by one value.  If a minus key is pressed it will be 
        decremented.  In addition if the Alt key is held down and then a 
        digit or letter from A to F is pressed, the digit or letter will 
        be interpreted as a hexadecimal number and be used as the value 
        for the attribute.



                                      6
        




                               SYSTEM REQUIREMENTS  
        
        Any PC compatible with the IBM PC, XT, AT or beyond.
        Hard disk or 2 floppies
        256K of installed RAM
        Any video adapter card MDA, CGA, EGA, VGA, SVGA etc.
        Color or Black and White monitor
        DOS v. 2.0 or higher
        
        
                                  REGISTRATION
        
        To register this software, send a check or money order denominated 
        in U. S. currency (no COD's) for $10 (California residents add 
        76 sales tax) to:
        
                              REXL
                              734 Camino Catalina 
                              Solana Beach, CA 92075
        
        On registration telephone support and new product information and 
        upgrade service will be provided.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

                                      7
        



```
{% endraw %}

## README.DOC

{% raw %}
```







        
        
        
        
        
        
        
                                      ACFM
        
        
        
        
                      AUTOEXEC.BAT CONFIG.SYS FILE MANAGER
        
        
        
        
        
        
        
        
        
        
                             REXL Shareware Program
        
        
        
        
        
        
        
        
        
        
        
                                   Version 1.0
                                (c) Copyright 1993
                                   H. S. Aurand
                               All rights reserved.
        
        
        
        
        
        
        
        
        
        
        Vendors and BBS Sysops please also see VENDOR.DOC and FILE_ID.DIZ
        
        For installation and other instructions, view ACFM.DOC                 
        
                                                        README.DOC 3-2-93      
        




                              SHAREWARE INFORMATION
        
        This software, while copyrighted, is shareware. This has two 
        advantages for the user. First, price is minimized by drastically 
        reducing advertising and distribution costs, and second, 
        shareware is offered on a try-before-buy basis.
        
        This means that the software may be tried without paying for a 
        license. Trying means installing and using the program for a 
        week. If the program is used more than this, the user must 
        register the software with the developer and pay an affordable 
        amount for a license to use the program.
        
        This program is produced by a member of the Association of 
        Shareware Professionals (ASP). ASP wants to make sure that the 
        shareware principle works for you. If you are unable to resolve a 
        shareware-related problem with an ASP member by contacting the 
        member directly, ASP may be able to help. The ASP Ombudsman can 
        help you resolve a dispute or problem with an ASP member, but 
        does not provide technical support for members' products. Please 
        write to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442 
        or send a CompuServe message via CompuServe Mail to ASP Ombudsman 
        70007,3536.
        
        
        The definition of shareware promulgated by the ASP that is 
        applicable to this shareware follows:
        
        "Shareware distribution gives users a chance to try software 
        before buying it. If you try a Shareware program and continue 
        using it, you are expected to register. Individual programs 
        differ on details -- some request registration while others 
        require it, some specify a maximum trial period. With 
        registration, you get anything from the simple right to continue 
        using the software to an updated program with printed manual.
        
        "Copyright laws apply to both Shareware and commercial software, 
        and the copyright holder retains all rights, with a few specific 
        exceptions as stated below. Shareware authors are accomplished 
        programmers, just like commercial authors, and the programs are 
        of comparable quality. (In both cases, there are good programs 
        and bad ones!) The main difference is in the method of 
        distribution. The author specifically grants the right to copy 
        and distribute the software, either to all and sundry or to a 
        specific group. For example, some authors require written 
        permission before a commercial disk vendor may copy their 
        Shareware.
        
        "Shareware is a distribution method, not a type of software. You 
        should find software that suits your needs and pocketbook, 
        whether it's commercial or Shareware. The Shareware system makes 
        fitting your needs easier, because you can try before you buy. 


                                      1
        




        And because the overhead is low, prices are low also. Shareware 
        has the ultimate money-back guarantee -- if you don't use the 
        product, you don't pay for it.
        
        
        "DISCLAIMER - AGREEMENT
        
        "Users of this program, ACFM, must accept this disclaimer of 
        warranty:
        
        "ACFM is supplied as is.  The author disclaims all warranties, 
        expressed or implied, including, without limitation, the 
        warranties of merchantability and of fitness for any purpose.  
        The author assumes no liability for damages, direct or 
        consequential, which may result from the use of ACFM.
        
        "ACFM is `shareware' and is provided at no charge to the user for 
        evaluation.  Feel free to share with your friends, but please do 
        not give it away altered or as part of another system.  The 
        essence of `user-supported' software is to provide personal 
        computer users with quality software without high prices, and yet 
        to provide incentive for programmers to continue to develop new 
        products.  If you find this program useful and find that you are 
        using ACFM and continue to use it after a reasonable trial 
        period, you must register it as described below.
        
        "The registration fee will license one copy for use on any one 
        computer at any one time.  You must treat this software just like 
        a book.  An example is that this software may be used by any 
        number of people and may be freely moved from one computer 
        location to another, so long as there is no possibility of it 
        being used at one location while it's being used at another. Just 
        as a book cannot be read by two different persons at the same 
        time.
        
        "Anyone distributing ACFM for any kind of remuneration must first 
        contact the author at the address below for authorization.  
        Authorization is hereby automatically granted to distributors 
        recognized by the ASP as adhering to its guidelines for shareware 
        distributors, and such distributors may begin offering ACFM 
        immediately (However the author must still be advised so that the 
        distributor can be kept up-to-date with the latest version of 
        ACFM.)
        
        "You are encouraged to pass a copy of ACFM along to your friends 
        for evaluation.  Please encourage them to register their copy if 
        they find that they can use it.  All registered users will 
        receive a copy of the latest version of the ACFM system."






                                      2
        




        This software includes the following files:
        
                INSTAC.EXE          Installation program
                ACFMLHA.EXE         Self-extracting archive file
                                    Contains all ACFM files as follows:
        
                      ACFM.EXE            The program
                      ACFM.DEF            Default values used in the 
                                              program
                      INSTAC.EXE          Installation program
                      ACFM.DOC            Manual of Instructions
                      README.DOC          Shareware and registration 
                                              information.
                      VENDOR.DOC          Information for vendors
                      FILE_ID.DIZ         Information for BBS sysops 
        
        
        As mentioned above users are encouraged to copy this software and 
        share it with the following restrictions: 
        
            No commercial use is permitted nor may any fees be     
            charged for printed material or for software other than as
            described above.
        
            No alteration may be made to any of the above files.
        
            Printed documents produced from the README.DOC, VENDOR.DOC 
            or ACFM.DOC files may not be reproduced.
        
            If the registered and licensed software is to be used on     
            a network, one copy for each station using the software     
            must be registered. Or inquire about site licensing.     
            Special educational rates are available if the 
            intellectual property rights of the author can be shown
            to be protected. Telephone number is 619-481-0781.       
        
        
        
                                   DESCRIPTION
        
        ACFM, an acronym for Autoexec.bat - Config.sys File Manger, 
        allows the user to save and edit up to 25 files of each of type 
        of file.  A selected file can be copied to the root directory so 
        that it may be used the next time the system is rebooted.  The 
        program is only executed when needed.  It is not ram resident.
        
        ACFM makes it easy to store several different versions of 
        AUTOEXEC.BAT and CONFIG.SYS files and copy them when needed to 
        the root directory of the C Drive (A Drive if no hard disk 
        available).  The next time you reboot they become effective.  
        Since ACFM does not execute every time you boot, you are not 
        bothered by being forced to make a choice every time, but only 
        when you want to change configuration.

                                      3
        





        ACFM also includes the ability to add, delete, edit and view 
        stored files as well as to copy selected files to the root 
        directory.  It also permits shelling out to DOS to accomplish 
        more general tasks. 
        
        
                               SYSTEM REQUIREMENTS  
        
        
        Any PC compatible with the IBM PC, XT, AT or beyond.
        256K of installed RAM
        Hard disk or 2 floppies
        Any video adapter card MDA, CGA, EGA, VGA, SVGA etc.
        Color or Black and White monitor
        DOS v. 2.0 or higher
        
        
        
                                  REGISTRATION
        
        
        To register this software, send a check or money order denominated 
        in U. S. currency (no COD's) for $10 (California residents add 
        76 sales tax) to:
        
                              REXL
                              734 Camino Catalina 
                              Solana Beach, CA 92075
        
        On registration telephone support and new product information and 
        upgrade service will be provided.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                      4

        




```
{% endraw %}

## VENDOR.DOC

{% raw %}
```






       
       
       
       
       
                     V E N D O R    I N F O R M A T I O N
       
                                      for                                     
       
                                     ACFM
       
                    Autoexec.bat - Config.sys File Manager
       
       
                                  Version 1.0
       
       
       
       
       
                 
                     Shareware authored and copyrighted by
                                 H. S. Aurand
                              734 Camino Catalina
                            Solana Beach, CA 92075
                                 619-481-0781
       
                                       
       
       
       
       
                 
                              Date: 16 March 1993
                         Last updated : 16 March 1993
                 
       
       
       
       
       
       
       
       
       
       
       
       
       This file, VENDOR.DOC,  provides information for Shareware 
       Distributors, Disk Vendors, Bulletin Board Operators and Computer 
       Clubs who wish to distribute the ACFM package.
                 
       Individual and company Users:  Please refer to README.DOC file 
       and ACFM.DOC for more information.

       




                           Distribution Requirements
       
       Individuals who wish to distribute the ACFM package to friends or 
       associates may do so in accordance with the restrictions outlined 
       in the README.DOC file.
                 
       Computer Clubs and User Groups wishing to add the ACFM package to 
       their disk library may do so in accordance with the Distribution 
       Restrictions listed below.
                 
       If you would like your Computer Club or User Group to be placed 
       on our mailing list for future upgrades to any of our products, 
       please contact us for complete details.  The address and phone  
       number is listed above.
                 
                         Limited Distribution License
                 
       As the exclusive copyright holder for ACFM, I, H. S. Aurand, 
       authorize distribution only in accordance with the following 
       restrictions.
                 
       ASP Approved Vendors in good standing are hereby given permission 
       to distribute ACFM package.  Non-ASP member vendors must request 
       permission prior to distributing this package.
                 
       The ACFM package is defined as containing the following files:
       
                         INSTAC.EXE     Installation program
                         ACFMLHA.EXE    Self-extracting archive program
                                          Containing:
       
                                 ACFM.EXE
                                 ACFM.DEF
                                 INSTAC.EXE
                                 ACFM.DOC
                                 VENDOR.DOC
                                 FILE_ID.DIZ
                                 README.DOC     
            
       If any of these files are missing, then the package is not 
       complete and distribution is forbidden.  Please contact us to 
       obtain a complete package suitable for distribution.
                 
       The ACFM package including all related program files and 
       documentation files CANNOT be modified in any way and must be 
       distributed as a complete package, without exception. 
                 
       Small additions to the package, such as the introductory or 
       installation batch files used by many shareware disk vendors,
       are acceptable.




                                      1
       




       No price or other compensation may be charged for the ACFM 
       package.  A distribution fee may be charged for the cost of the 
       diskette, shipping and handling as long as the total (per disk) 
       does not exceed US$8.00 in the U.S. and Canada or US$12.00 
       internationally.
       
       The ACFM package CANNOT be sold as part of some other inclusive 
       package.  Nor can it be included in any commercial software 
       packaging offer, without a written agreement from me, H. S. 
       Aurand.
                 
       ASP Approved Vendors who wish to distribute the ACFM package as 
       part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
       package) may do so provided that all the other restrictions are 
       met.
                 
       Vendors (non-ASP Vendor Members) who wish to distribute the ACFM 
       package as part of a collection (such as PsL's MegaDisk set, or a 
       CD-ROM package) must obtain permission from  me, H. S. Aurand, 
       prior to beginning such a distribution.
                 
       If you would like to distribute the ACFM package as a 
       Disk-of-the-Month, or as part of a subscription or monthly 
       service, then the following restrictions apply:
                 
       ASP Associate (Disk Vendor) Members in good standing are hereby 
       given permission to distribute the ACFM package under the 
       Disk-of-the-Month style of distribution.
                 
       Others (non-ASP Members) must contact me in advance to ensure 
       that you have the most current version of the software.
       
       You cannot use a Disk-of-the-Month distribution to use up your 
       inventory of old (out of date) disks.  Only current versions may 
       be shipped as Disk-of-the-Month disks.
                 
       PRINTED User's Guides may not be reproduced in whole or in part, 
       using any means, without the written permission of me, H. S. 
       Aurand.  In other words, the disk-based documentation may not be 
       distributed in PRINTED (hardcopy) form.
                 
       The ACFM package cannot be "rented" or "leased" to others. You 
       may not list any of our products in advertisements, catalogs, or 
       other literature which describes our products as "FREE SOFTWARE".  
       Shareware is "Try-Before-You-Buy" software, it is not free.
                 
       The distribution of outdated versions of the ACFM package without 
       my written permission is prohibited.
                 
       If the version you have is over twelve (12) months old, please           
       contact us to ensure that you have the most current version.           
       This version was released in March 1993.  Licensee shall not
       use, copy, rent, lease, sell, modify, decompile, disassemble,

                                      2
       




       otherwise reverse engineer or transfer the licensed program 
       except as provided in this agreement.  Any such unauthorized use 
       shall result in immediate and automatic termination of this 
       license.
       
       U.S. Government Information:  Use, duplication, or disclosure by 
       the U.S. Government of the computer software and documentation in 
       this package shall be subject to the restricted rights applicable 
       to commercial computer software as set forth in subdivision 
       (b)(3)(ii) of the Rights in Technical Data and Computer Software 
       clause at 252.227-7013 (DFARS 52.227-7013).  The 
       Contractor/manufacturer is H. S. Aurand, 734 Camino Catalina, 
       Solana Beach, CA 92075.
                 
       All rights not expressly granted here are reserved to H. S. 
       Aurand.
                 
                        Please Help Us Serve You Better
                 
       We would appreciate copies of anything you print regarding this 
       package. Please send us a copy of any reviews, articles, catalog 
       descriptions, or other information you print or distribute 
       regarding this package.  Thank you for your time and assistance 
       and for supporting the shareware marketing concept.
                 
                 
                       Suggested Description for Catalog
                            Contents of FILE_ID.DIZ
       
                 ACFM  v. 1.0   ASP -  A safe and reliable
                 file manager for AUTOEXEC.BAT and CONFIG.SYS
                 files. Save, edit, view etc. up to 25 files
                 each. Copying can be to and from boot files.
                 Other copies can be made. For safety, booting
                 is manual and only when needed. Program is
                 not ram resident.  256K RAM; hard disk or 2
                 floppies; DOS 2 or more; Color, B/W.  ASP $10
       
       
                              General Description
       
       There are many times that a PC user needs to change the 
       configuration of his machine.  Many programs have different 
       requirements that must be met by having different AUTOEXEC.BAT 
       and CONFIG.SYS files.  For instance most defragmenters require 
       that all terminate and stay resident (TSR) programs must be 
       removed from RAM.  Also some programs require so much RAM that 
       TSR's must be removed.  Others have requirements for particular 
       drivers etc.  The need is to save the the different AUTOEXEC.BAT 
       and CONFIG.SYS files in a way that they can be safely, reliably 
       and easily identified and easily copied to the root directory for 
       rebooting.


                                      3
       




       ACFM, an acronym for Autoexec.bat - Config.sys File Manger, does 
       just that by allowing the user to save and edit up to 25 files of 
       each type.  Each file has its own label of up to 76 characters.  
       AUTOEXEC.BAT and CONFIG.SYS files can be copied to and from the 
       root directory.  For safety and reliability, the user must boot 
       manually, and confirmation prompts are used at critical points in 
       the program's execution.  ACFM is not ram resident and is 
       executed only when needed.
       
       ACFM makes it easy to store several different versions of 
       AUTOEXEC.BAT and CONFIG.SYS files and copy them when needed to 
       the root directory of the C Drive if a hard disk is installed.  
       If only two floppy drives are available, the A Drive is accessed.  
       The next time you reboot they become effective.  Since ACFM does 
       not execute every time you boot, you are not bothered by being 
       forced to make a choice every time, but only when you need to 
       change configuration.
       
       ACFM also includes the ability to add, delete, edit and view 
       stored files as well as to copy files to and from the root 
       directory.  It also permits shelling out to DOS to accomplish 
       more general tasks. 
                 
       
       Registration fee is $10.
                 
       System Requirements:
       IBM PC, XT, AT or beyond compatible with at least 256K of RAM.
       Hard disk or 2 floppy disks
       DOS 2.0 or greater.
       Color or monochrome on almost any video adapter card.
                 
                 
                          Thank you for your support!
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       

                                      4
       
       




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3510

     Volume in drive A has no label
     Directory of A:\

    FILE_ID  DIZ       365   3-21-93   3:54p
    GO       BAT        36   3-21-93   3:56p
    ACFM     EXE    145941   3-15-93   3:30p
    ACFM     DEF        26   2-28-93   3:40p
    ACFM     DOC     18944   3-16-93   2:57p
    README   DOC     11264   3-16-93   1:42p
    VENDOR   DOC     11776   3-16-93   9:06p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     190392 bytes
                          128000 bytes free
