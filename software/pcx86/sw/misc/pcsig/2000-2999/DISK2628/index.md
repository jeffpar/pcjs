---
layout: page
title: "PC-SIG Diskette Library (Disk #2628)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2628/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2628"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2628.TXT

{% raw %}
```
Disk No: 2628
Disk Title: LessIsMore
PC-SIG Version: S1

Program Title: LessIsMore
Author Version: 1.01
Author Registration: $20.00
Special Requirements: Windows 3.0.

Windows multitasking can be a bit intimidating.  But with LESSISMORE,
even the unsophisticated can handle multitasking without much problem.
This program manages simplicity of setup and use, and now anyone can do
it.  Switching between applications is done with Alt-Tab.  Windows
functions such as cut and paste are fully supported so that moving text,
data, and graphics from screen to screen across applications is a
breeze.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```




                LessIsMore Registration and Instructions
      ═══════════════════════════════════════════════════════════



          LessIsMore is NOT a public domain program. LessIsMore
      is copyrighted by R*D Applied Technologies, and retains all
      rights pertaining to LessIsMore. R*D Applied Technologies
      grants a restricted permission to users to make and
      distribute copies of LessIsMore.

          If you continue to regularly use LessIsMore, you are
      expected to register with R*D Applied Technologies  using
      the form provided below.

          If LessIsMore is used for business purposes, or for
      gain, then a copy of LessIsMore must be purchased for each
      computer it is to be used on.

          Private individuals and computer clubs are granted
      permission to copy and distribute LessIsMore for evaluation
      by others on the following conditions:
          
          • You may NOT sell, rent or lease the disk for profit.
            Doing so is a violation of R*D Applied Technologies
            copyright.
   
          • You may NOT charge anything for LessIsMore (except for
            authorized user groups, which may charge a cost based
            fee (not to exceed $10) to cover disks and handling).
   
          • You may NOT copy the printed documentation in any
            manner or form.
   
          • You may NOT copy the graphics used in LessIsMore in any
            manner or form.
   
          • You may NOT bundle LessIsMore with any other product.

          • You may NOT distribute versions of LessIsMore which
            have been modified in any way.
   
          • You must include ALL of the files which are distributed
            with LessIsMore. These files must be ARCHIVED together
            if you place them on an electronic bulletin board.


          R*D Applied Technologies provides quantity discounts
      for LessIsMore. The discount schedule is:


             QUANTITY       DISCOUNT       PRICE PER COPY

               1-10            0%              $20
              10-50           10%              $18
              50-100          20%              $16
           SITE LICENSE       ---           $1,000 
               




      ╔═══════════════════════════════════════════════════════╗
      ║              LessIsMore Registration Form             ║
      ╟───────────────────────────────────────────────────────╢
      ║                                                       ║
      ║    NAME_________________________________________      ║
      ║                                                       ║
      ║    COMPANY NAME_________________________________      ║
      ║                                                       ║
      ║    STREET ADDRESS_______________________________      ║
      ║                                                       ║
      ║    CITY__________________________STATE__________      ║
      ║                                                       ║
      ║    ZIP CODE_____________________________________      ║
      ║                                                       ║
      ║    DISK SIZE:    5¼"___     3½"___                    ║
      ║                                                       ║
      ╚═══════════════════════════════════════════════════════╝



          LessIsMore is distributed as ShareWare and is
      completely supported by user registrations. You may
      register your copy of LessIsMore by filling out the form
      provided and mailing it along with a check or money order
      for $23.00 ($20.00 + $3 s/h) to:


                    R*D Applied Technologies, Inc.
                          3209 Barkley Drive
                          Fairfax, Va. 22031

          You will receive the latest version of LessIsMore which
      is Windows 3.0 compatible, and includes additional graphic 
      background selections. You will also be placed on our update list 
      to receive automatic notification of LessIsMore updates, new graphic
      backgrounds, and new software releases from R*D Applied
      Technologies.

          R*D Applied Technologies staff members include highly
      talented graphics artists that can create or enhance a
      graphic background for use with LessIsMore. They are also
      able to quickly replicate a company logo, and incorporate
      it in a unique graphic to customize the look of LessIsMore
      for business environments. Rates for these services are
      reasonable, and available upon request at (703) 641-0107 or
      at the address above.


      INSTALLING LessIsMore

          LessIsMore is an office automation utility program that
      currently runs under Microsoft Windows V.286, 386 and 3.0 real mode.
      The upgrade to run LessIsMore in V.3.0 protected mode is expected to
      be shipped in December 1990. Registered users will automatically 
      receive this upgrade. LessIsMore can be installed such that it:

               • Runs automatically upon turning on your computer

               • Runs automaticaly upon starting Windows

               • Can be opened, along with Windows, from the DOS 
                 command line

               • Can be opened from within Windows.

          The following paragraphs address installation and configuration 
      for each of these options.

      OPTION 1. Runs automatically upon turning on your computer.

          • Copy the following LessIsMore files into the Windows 
            directory on your hard drive: LIM.EXE, LIMSETUP.EXE, 
            LIMCNFG.TXT. If you use a CGA monitor, copy CGALIM.EXE 
            instead of LIM.EXE and CGASETUP.EXE instead of LIMSETUP.EXE.
            LIM.EXE and LIMSETUP.EXE will work with all other monitor
            types, including VGA, EGA, Hercules, and Super VGA.

          • Open Windows and enter the Windows directory. Select WIN.INI 
            and open by double clicking on the file name with your mouse, 
            or by pressing the <enter/return> key.

          • Find the line,"run= ", and type LIM.EXE (or CGALIM.EXE if 
            you use a CGA monitor) after the <=> symbol.

          • Save the file using the Save command in the pull down 
            File Menu.

          • Without closing the Notepad utility currently containing 
            WIN.INI, again use the pull down File Menu to Open your 
            AUTOEXEC.BAT file by typing C:\AUTOEXEC.BAT when the File 
            Name dialog box opens.

          • Insert the Windows directory into the path statement, 
            e.g. PATH=C:\;C:\DOS;C:\DBASE;C:\WINDOWS;

                      OR, if there is no path statement

            Add the following path statement: PATH=[D]:\ [D]:\[WINDOWS 
            DIRECTORY], where:

                 [D] is the letter of the hard drive or hard drive 
                 partition containing the Windows program and files, and

                 [WINDOWS DIRECTORY] is the name of the directory 
                 containing the windows program, e.g. WINDOWS.

          • Add a line at the end of your AUTOEXEC.BAT file with the 
            single word "WIN" (don't type the quotes).

          • Save the file

          • Exit Notepad

          • Exit Windows

          • Reboot your computer. The computer will now open with 
            LessIsMore running under Windows.

      OPTION 2: Run automatically upon starting Windows.

          • Perform all the steps described for OPTION 1, only leave 
            out the added AUTOEXEC.BAT line, "WIN". When you reboot 
            your computer, you will be at the C: prompt. Type WIN. 
            Windows will open with LessIsMore running as an application.

      OPTION 3: To open LessIsMore and Windows from the DOS command line.

          • Perform all the steps described for OPTION 2, only this time 
            leave out the change to <run=> in the WIN.INI file. 
            To open Notepad to modify the AUTOEXEC.BAT file, pull down 
            the System Menu by clicking on the square button in the 
            upper left corner of the Notepad window. Select Run. 
            When the Run dialog box opens, type "Notepad". After 
            saving the new version of your AUTOEXEC.BAT file, 
            close Notepad and then close Windows. Reboot your computer. 
            At the C: prompt, type WIN LIM. Windows will open with 
            LessIsMore running as an application.

      OPTION 4: To open LessIsMore from inside Windows.

          • Perform the same steps as in OPTION 3. At the C: prompt, 
            type WIN. Windows will open. Either select LIM.EXE with 
            your mouse, or pull down the System Menu, select Run, 
            and type LIM.EXE. Double click or press the <enter/return> 
            key to open LessIsMore.


      USING LIMSETUP.EXE

          LessIsMore has been designed to use generic application names 
      in its Program Selection Menu. That is, instead of naming the 
      Word Processor that is accessed by LessIsMore by its commercial 
      product name, e.g. WordPerfect, MultiMate, MS-Word, etc., only 
      "Word Processor" is used. The advantage of this approach is that 
      it results in interface consistency regardless of the mix of 
      application and utility software. The approach, however, requires 
      the use of a configuration file (LIMCNFG.TXT) that instructs 
      LessIsMore which application programs to use, and where to find 
      them on the hard disk. The utility program LIMSETUP.EXE (CGASETUP.
      EXE for CGA monitors) is used to create the configuration file. 

          LIMSETUP.EXE is a small Windows-based application program that 
      simplifies the writing of the LIMCNFG.TXT file. You can open 
      LIMSETUP.EXE in any of the following ways:

          • At the DOS command line, type WIN LIMSETUP, then press the 
            <enter/return> key

          • After opening Windows, select Run from the System Menu, and 
            type LIMSETUP.EXE

          • Double click on LIMSETUP.EXE in the MS-DOS window in Windows

          • Within LessIsMore, select Run in the File Menu and type 
            LIMSETUP.EXE.

          LIMSETUP.EXE displays a form on the screen. You need to replace 
      the "*.*" entries with the names and, in some instances, the paths 
      of the programs, or PIF (Program Information File) files that will 
      be accessed through LessIsMore. PIF files are used to open 
      non-Windows programs. MS-Windows V2.x and 3.0 provide many PIF files
      for popular application programs. These PIFs can be used and 
      customized depending on your particular hardware configuration.
      In addition, you can refer to your Windows Users Guide for 
      instructions for creating PIF files using PIFEDIT.EXE. A sample, 
      text-only set of entries is provided below, and can be used as a 
      model for your own LIMSETUP entries.

          Word Processor        WORD.PIF
          Spreadsheet           D:\EXCEL\EXCEL.EXE
          Database              DBASE.PIF
          Draw                  DESIGNER.EXE
          Paint                 PBRUSH.EXE
          Publish               WRITE.EXE
          Project               PS4.PIF
          Communications        BITCOM.PIF
          Calendar              CALENDAR.EXE
          Clock                 CLOCK.EXE
          Card File             CARDFILE.EXE

      In this example, all of the PIF files and all of the Windows-based 
      programs, with the exception of Excel, should reside in the Windows
      directory. If your programs and PIF files do not reside in the 
      Windows root directory, then you must either provide the path 
      information in your LIMSETUP entry (as shown in the case of the
      Windows application Designer), or else include the path information
      in your AUTOEXEC.BAT file.

      NOTE: If you don't have a program in your computer that corresponds 
      to one of the named applications or utilities, leave the "*.*" in 
      the text entry box for that selection. Failure to do so can result 
      in a system error.

          After you have completed your entries using LIMSETUP.EXE, click on 
      the screen's OK button. This action will automatically save your 
      entries in the LIMCNFG.TXT file, making them immediately available
      for selection by LessIsMore. The LIMCNFG.TXT file can be updated 
      at any time using LIMSETUP.EXE, or the Windows Notepad utility. 


      OPENING APPLICATIONS FOR THE FIRST TIME

          Depending on how you have your computer configured for Windows 
      and LessIsMore, open LessIsMore. LessIsMore will open with the 
      Program Selection menu highlighted. Use the mouse, <tab> key, or 
      <cursor> keys to point to the application or utility program in 
      the menu that you wish to run. After pointing, click the left mouse 
      button, or use the <spacebar> to  select the program. Repeat these 
      steps for each program you wish to run in the same session. (Note: 
      Pressing the mouse button, or the <spacebar> a second time will 
      deselect your choice.) After all the programs have been selected, 
      use the mouse to click on the OK button in the Program Selection Menu, 
      or press the <enter/return> key. Either of these actions will create 
      program selection icons that will line up, left-to-right, along the 
      bottom of the Windows screen. Non-Windows programs will not actually 
      run until they are launched from the icon line. Windows applications, 
      however, will launch and run as soon as the OK button or <enter/return> 
      key is utilized. Some Windows application programs will open in full 
      screen mode. When this happens, you can iconize the program by 
      selecting Minimize from within the Windows application's File drop 
      down menu, or by clicking on the downward pointing arrow in the upper 
      right corner of the Windows screen. 


      RUNNING NON-WINDOWS APPLICATIONS

          The following steps are required to launch and run non-Windows 
      application programs from the icon line. Programs such as WordPerfect, 
      Lotus 1-2-3, dBase III+/IV, Harvard Graphics are examples of non-
      Windows programs that are launched from icons. Icons that have been 
      placed by LessIsMore on the icon line can be easily accessed using 
      either the mouse or the keyboard. These procedures are discussed below.


      Using the Mouse:  Place the arrow cursor over the icon belonging to 
      the program to be launched. Click once with the left mouse button to 
      expand the Windows pop-up menu. Select and click once on Restore or 
      Maximize to launch the program. Alternatively, place the arrow cursor 
      over the icon and double click. This action will also launch the 
      program. 


      Using the Keyboard:  Press the <alt> and <tab> keys simultaneously. 
      This will cause one of the icons to highlight its program name. 
      Continue to press and release the <tab> key while holding down the 
      <alt> key. This will cycle the Windows focus from one icon to the 
      next and then across the LessIsMore screen and Program Selection Menu. 
      Removing your finger from the <alt> key will launch whichever program 
      is highlighted at the time.


      RUNNING WINDOWS APPLICATIONS

          As mentioned earlier, Windows application programs are launched 
      when the OK button or the <enter/return> key is used after program 
      selection. Because programs that are launched utilize precious computer 
      memory even when they are not in use, it is good practice not to 
      select Windows programs until they are actually needed. It is easy 
      to return to the Program Selection Menu to select and launch a Windows 
      program when it is needed. This and other related procedures are 
      addressed in the section which follows.


      SWITCHING AMONG PROGRAMS
 
          Using the steps described above, let's assume that we have 
      selected a word processor (WordPerfect), a spreadsheet (Lotus 1-2-3), 
      and a database management system (dBase III+). We next use the 
      <alt><tab> key combination to launch and run WordPerfect. After a 
      few seconds for Windows to store away in a temporary disk file 
      information concerning the status of the computer, the opening 
      WordPerfect screens will appear on your monitor. You will find that
      the program behaves the same as always, only now Windows has added a 
      few, important new capabilities to WordPerfect that allows WordPerfect 
      to share text and data on your monitor's screen with other programs, 
      and vice versa. These capabilities will be addressed in some detail
      in the section on cutting and pasting between application programs.
      For now, we are primarily interested in moving among application
      programs. To do this we use the same <alt><tab> keys we used to
      initially launch and run WordPerfect.

          Now, while you are still in WordPerfect, hold the <alt> key down 
      and tap the <tab> key once or twice. Notice that a menu bar appears at 
      the top of the WordPerfect screen, and that the names of the Application 
      Programs that you selected earlier, as well as LessIsMore and the 
      Program Selection Menu also appear in succession in the menu bar. 
      When you find the program that you want to run, lift your finger from 
      the <alt> key. This will launch and run a new program, or will reactivate
      a program that has already run, such as LessIsMore. Choosing the Program 
      Selection Menu when it appears in the menu bar will allow you to use 
      LessIsMore to select and launch additional programs at any time during 
      your computer session. Once a new program comes to the screen as an 
      icon or as a running program, you can return to WordPerfect by again 
      using the <alt><tab> key combination method. If the current running 
      program is not a character-based program such as WordPerfect or 
      Lotus 1-2-3, i.e. it is a Windows-based GUI program, there will be no 
      menu bar. Instead, selection icons will be placed on the screen. On the 
      other hand, if a Windows program is selected that was running prior to 
      program switching, a window showing the last state of that Windows 
      program will be brought to the forground for inspection and possible 
      selection.

          Additional information concerning the use of Windows for program 
      switching can be found in the Windows User's Guide that comes with the 
      Windows program.


      CUTTING AND PASTING BETWEEN APPLICATION PROGRAMS (Windows 2.x)

          MS-Windows provides a clipboard for transfering data, text and
      graphics between application software program files. Even in 
      programs that do not normally use a mouse, the mouse can be
      activated for marking areas on the screen prior to copying (writing)
      and pasting (reading) the data into a file in another application 
      program. The typical sequence of steps when using the clipboard is to:

             • Mark the area to be copied to the clipboard

             • Copy the highlighted area to the clipboard

             • Switch to another application program (using 
               <alt-tab> key combination)

             • Paste the contents of the clipboard into the 
               current file.

          The clipboard is accessed using the Clipboard menu which is 
      displayed using the keyboard by holding down the <alt> key and
      pressing the <spacebar>. Once the menu has been displayed, there
      are several items in the menu that can be selected, and other
      items that are not active. The selections that are used to transfer
      data between application programs are:

             • Mark: This selection is made when you want to select
               an area of data, text or graphics for copying to the
               clipboard.

             • Copy: This selection is made when you want to copy the
               marked data, text or graphic to the clipboard.

             • Paste: This selection is made when you want to paste
               the contents of the clipboard into the current file
               displayed on the screen.

          Transfering requires that the items to be copied must first
      be selected, or marked. This is done by bringing up the Clipboard
      menu and selecting Mark on the menu. Either a mouse can be used
      to make the selection, or pressing the <K> key will also cause 
      Mark to be selected. The next step is to identify the area that
      is to be marked, holding the left mouse button down, and 
      dragging the mouse over the area until all the data, text or
      graphic is highlighted. It is also possible to use the cursor
      keys to Mark an area on the screen for copying to the
      clipboard. Use the cursor keys to move the cursor to the 
      beginning of the information that you want to copy. Hold 
      down the <shift> key and then use the cursor keys to highlight
      the selected information. To cancel the selection, press <escape>.
      Once the area has been marked, the next step is to redisplay 
      the Clipboard menu and select Copy on the menu either with the
      mouse or by pressing the <Y> key. This action causes the 
      highlighted area to be written to the Clipboard, which makes
      the information available for pasting into another application
      program file. Next, either start or switch to the application
      program that is to receive the data that is in the Clipboard.
      Position the cursor where you want the data to be placed. Pasting
      the contents of the Clipboard is done by displaying the Clipboard
      menu and selecting Paste. The data previously copied into the
      Clipboard will be written to the screen starting at the 
      current position of the cursor.

          Review the Windows Users Guide for additional information and
      tips on how to use the powerful Clipboard feature of MS-Windows.       

           
      CLOSING PROGRAMS

          Windows and, hence, LessIsMore will not let you close non-Windows 
      programs from inside Windows. You must first return to the Application, 
      and then close your program in the normal manner. In this fashion, you 
      are always assured of the opportunity to save the latest version of 
      whatever file you are working on, as well as any configuration 
      information that may have changed during the latest session with the 
      program. On the other hand, Windows programs may be closed in any one 
      of three ways. First, you may close the program from within, just as 
      you would close a non-windows program. Second, you may select to close 
      the program from its icon. Windows programs will ask you if you want to 
      save your latest changes before closing without actually reopening the 
      program. Last, you can close your Windows session. Windows will again 
      ask you if you want to save changes made to each and every Windows 
      program that has run and not been closed prior to closing itself.

          It is important to close programs thoughtfully rather than by using 
      quick and dirty methods, such as rebooting your computer, or simply 
      turning the power off when you have completed a session. Failure to do 
      so will leave large temporary Windows files on your designated or 
      default hard drive. These files are typically hundreds of thousands 
      of bytes long, and will probably need to be cleared out prior to 
      initiating another LessIsMore work session. In any event, it is good 
      practice to check the Windows temporary file directory periodically to 
      clear out file residue that may have accumulated over time. The Windows 
      User's Guide describes how to configure and manage temporary files and 
      the temporary file directory.


      EXITING LessIsMore

          To exit from LessIsMore, pull down the File Menu and select Exit. 
      This action will put you in the Windows MS-DOS directory that contains 
      LessIsMore. To exit Windows entirely, either simultaneously depress 
      the <alt><F4> keys, or select Close from the System Menu. Press the 
      <enter/return> or click on the OK button to respond to the Windows 
      dialog box asking if you are sure you want to leave Windows. This action 
      will return you to DOS.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2628

     Volume in drive A has no label
     Directory of A:\

    CGALIM   EXE     21776  10-01-90  10:08a
    README   TXT     25203  10-02-90   4:03p
    LIM      EXE     21776   8-10-90   2:35p
    LIMSETUP EXE     12480   8-10-90   2:59p
    CGASETUP EXE     12480  10-01-90  11:07a
    GO       BAT        38   6-21-91   2:37a
    GO       TXT       771   7-22-91   2:54a
    FILE2628 TXT       718   7-22-91   3:01a
            8 file(s)      95242 bytes
                           62464 bytes free
