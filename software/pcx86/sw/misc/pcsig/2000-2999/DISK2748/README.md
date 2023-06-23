---
layout: page
title: "PC-SIG Diskette Library (Disk #2748)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2748/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2748"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2748.TXT

{% raw %}
```
Disk No: 2748                                                           
Disk Title: TP-ET                                                       
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: TP-ET                                                    
Author Version: 1.0                                                     
Author Registration: $19.50                                             
Special Requirements: A printer.                                        
                                                                        
Looking for a program to fill the void between the electric typewriter  
and a full-blown word processor?  Then TP-ET is the program for you.    
                                                                        
TP-ET turns your computer and printer into an electric typewriter.  All 
margins (top, bottom, left, and right) are programmable.                
                                                                        
Set tab stops.  Decide if you want an End Of Line bell.  If your printer
is IBM/EPSON-compatible, pick from six printer font/quality settings, or
enter your own printer codes.  Save a configuration file to disk to be  
read every time you start TP-ET.  Edit an entire line of text before    
sending it to the printer.                                              
                                                                        
Adjust any parameters such as tabs, margins, etc. from the 1-2-3 style  
Main Menu.  Thirteen Help screens explain all setting options.          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TP-ET.DOC

{% raw %}
```
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
                     *************************************
                     *      THUMB PRINT SOFTWARE'S       *
                     *               TP-ET               *
                     *      (Electric Typwriter)         *
                     *Copr. (C) Thumb Print Software 1989*
                     *       All Rights Reseved          *
                     *************************************

































         


         DISCLAIMER:

         These program/s are provided on an "AS IS BASIS". All risks 
         are with you the "USER". At no time will Thumb Print Software 
         or Duane J. Schnur be liable to you for any damages, including 
         any lost profits, lost savings, or other incidental or 
         consequential damages arising out of the use or inability to 
         use these programs. Even if Thumb Print Software or Duane J. 
         Schnur have been advised of the possibility of such damage. 
         You acnowledge that you have read this agreement, understand 
         it, and agree to be bound by its terms and conditions.






















































                                      (1)

         Files needed:

         Your Shareware version of TP-ET should contain the folowing 
         files:
                TP-ET.EXE
                TPET.SLB
                TP-ET.DOC
                PRINTMAN.BAT
                READ.ME (May or May Not be present. Depends on bugs
                fixed or updates not in the Manual.

         File Usage:

         TP-ET.EXE:
                  This is the program file. Bring it up from the
                  Dos Command line ie:    TP-ET    [Enter/Return]

         TPET.SLB:
                  This file MUST be on the same Drive/Path as 
                  TP-ET.EXE. This file is a binary file and contains
                  the help screens used by TP-ET.EXE. If this file
                  is missing TP-ET.EXE will display an error message
                  and return to DOS.

         TP-ET.DOC:
                  This documentation file (manual).

         PRINTMAN.BAT:
                  The Batch file used to print this manual.

         READ.ME:
                  This file may or may not be present. It is it will
                  contain any updates or bug fixes.

         WHAT IS TP-ET?

         TP-ET is an electric typewriter program. It turns your 
         computer and printer into an electric typewriter. All margins 
         are programmable. You can adjust how far from the top of a 
         page your first line of text starts. Both left and right 
         margins are adjustable. You decide how many blank lines are 
         at the bottom of each page after your last line of text.

         You set your tab stops; whether you want an end of line bell. 
         If your printer is IBM/EPSON compatible you can pick from 6 
         printer font/quality settings. If not you can input your own 
         printer codes. TP-ET will (if you choose so) save a 
         configuration file to disk. Every time you bring up TP-ET the 
         configuration file will be read. You can edit an entire line 
         of text before it is sent to the printer and disk (if you 
         chose the save option). This way you can read over a line for 
         spelling errors or syntax errors before pressing 
         Enter/Return.

         From the Main Menu (1-2-3 type) you can select Doc.Settings 
         to adjust any parameters (tabs,margins,etc). Start will use 
         the current settings and begin your document/letter. Help 
         will pull down 9 Help windows. Each window has a brief 
         explanation of the adjustable settings of the Doc.Settings 
         function. These windows are brought in from disk from the file 
         TPET.SLB. This is a special file that contains 13 help 
         screens. It is a highly compressed file.


                                      (2)
         
         It is mandatory that this file exist on the same Drive/Path 
         that TP-ET.EXE does. If it doesn't TP-ET.EXE will display an 
         error message and abort to DOS. This system of keeping Help 
         Screens was used to greatly reduce the overall size of the 
         program. If conventional methods would have been used the 
         size of the program would have been more than 30K larger than 
         the combined size of the TP-ET.EXE & TPET.SLB. When you 
         select the Start function from the Main Menu and are at the 
         work screen pressing F1 will pull down another Help Screen 
         listing all the Word Processor functions available. A second 
         Help Screen is available by pressing the Tab key. This screen 
         lists all the ALT-FKEY combinations used to draw double 
         horizontal double vertical boxes. You can call on these Help 
         Screens at any time from the work screen. Your document 
         screen will be saved in a reserved buffer. When you press the 
         ESC key your screen will be restored as it was and your cursor 
         will be right where you left off. You may program Auto Insert 
         keys. You have 4 auto insert keys to program. F2-F5 will 
         automatically insert whatever you have programmed in them. 
         Such things as your name - address - city state zip - 
         telephone number etc. F6 will automatically insert the 
         current date. Of course if you don't have a clock/cal board 
         or chip you will have to set the date at boot up. F10 ends 
         your document.
         
         Work Screen:
         
         The work screen is loaded with information. The top four 
         lines remind you of what keys to press for the auto insert. 
         It also tells you if F9 is active. In the Shareware version 
         F9 is never active. See the section of the manual that tells 
         you what you get in the Registered version that is not 
         available in the Shareware version. The fifth line is a ruler 
         line. You will see a capital L at the left margin and a 
         capital R at the right margin. As you type a moving cursor 
         will follow on the ruler line to tell you where you are on a 
         line. The next 14 lines are were you type in your 
         document/letter. When all 14 lines are full they will clear 
         and you will have 14 blank lines to use. The bottom 4 lines 
         tell you the line you are on; the page number; the documents 
         disk name if you are saving it to disk. It also tells the 
         printer font/quality in effect; how many characters in the 
         document (minus spaces); how many actual words; and how many 
         bytes of disk space the document will take. You will see how 
         many available bytes of disk space found by TP-ET when you 
         started the document. This gives you a gage to go by so you 
         don't let your document become larger than you have room to 
         save it. At the top of the screen is a real time clock in 12 
         hour format. Once again if you don't have a clock/cal board 
         chip you will have to set the actual time at DOS for this 
         clock to be accurate. If you are using a CGA/EGA color 
         board TP-ET will be in color. White on Blue. If you have a 
         Mono system TP-ET will be White on Black. Only a color board 
         is checked not the type of monitor. If you are using a Mono 
         Monitor with a color board you shouldn't have any problems 
         with White on Blue. This combination was checked with a Mono 
         Monitor and it is perfectly legible.







                                      (3)

         Minimum Requirements:

         PC/MS DOS compatible PC. 
         256K memory
         1 disk drive
         DOS 2.X or higher
         Printer (IBM/EPSON compatible to use the built in printer 
                  fonts. Or user supplied printer codes)

         
         Installation:

         TP-ET is very easy to install. Simply copy TP-ET.EXE & 
         TPET.SLB to a system disk or a sub-directory on your hard 
         drive. It is strongly suggested that before you use the 
         program you make a backup disk. DON'T use your master disk as 
         your program disk. TP-ET will run off of a formatted only 
         disk. Be aware that if you are using only 1 disk drive and 
         you run TP-ET off of a formatted only disk when you exit the 
         program DOS will look for a copy of COMMAND.COM. I suggest 
         you keep TP-ET on a system disk on a 1 drive system. To 
         create a system disk place a blank disk in drive A:
         From the DOS prompt type in:
         
         FORMAT A:/S      [ENTER/RETURN]
         
         This will make a bootable system disk. You now can copy
         TP-ET.EXE & TPET.SLB to this disk. 

         Using TP-ET:

         To load TP-ET from DOS enter the following on the command 
         line at the DOS prompt:

             TP-ET   [Enter/Return]

         As TP-ET loads it will look for the file TPET.SLB. If it 
         finds this file it will load the opening logo screen. If this 
         file is not in the same Drive/Path as TP-ET you will be 
         returned to DOS with an error message. The logo screen 
         contains the copywrite notice and registration info. By 
         pressing any key you will be at the Main Menu Screen.

         The Main Menu uses a 1-2-3 type menu. You can use the arrow 
         keys to move the Highlighted bar or press the first letter of 
         any of the 5 Menu functions.

         Doc Settings:

         Use this function to change any of the parameters of TP-ET. 
         All parameters are selected by pressing the appropriate 
         letter that appears in the front of each parameter. You can 
         use the Doc Setting function to check the parameters or 
         change them. When the parameter window opens up each 
         parameter's current setting is displayed. At the bottom of the 
         window you are asked if you want to change any settings or 
         accept the current settings. Press C to change A to accept. 
         If you elect to change a setting once you have inputted your 
         answer the bottom of the window will ask to change any other 
         parameters or quit. 




                                      (4)

         By pressing Q to quit the bottom of the window will ask if 
         you want to save these changes to disk in the file TP-ET.DEF. 
         You may answer (Y)es or (N)o to the question. Depending on 
         your answer if yes your changes will be saved to disk. If no 
         then you will be returned to the Main Menu. 

         When TP-ET first loads it looks for the file TP-ET.DEF. If it 
         finds it it uses the parameter settings from this file. If 
         the file does not exist it uses internal default settings. 
         The first time you use the program you should take a look at 
         the default settings. If they are not to your liking then you 
         should change the parameters to what you want. When you have 
         all parameters changed save the parameters to disk. From now 
         on every time you use TP-ET it will use these settings as the 
         default. 

         There may be times when you want a special set of parameters 
         for a particular document/letter. Simply change the 
         parameters you want by using the Doc Setting function. DON'T 
         save the settings to disk. When you are finished with this 
         document/letter use the Reset function from the Main Menu to 
         re-load the default settings. 

         Re-Set Function:

         The Re-Set function serves only one purpose to reload the 
         default settings. This may be from the disk file TP-ET.DEF or 
         from the internal defaults of TP-ET.DEF cannot be found.

         Help Function:

         By pressing H from the Main Menu or moving the highlighted 
         bar to Help a window will open. There are 9 Help Screens 
         available. They describe the various parameters that are 
         adjustable from the Doc Setting function of the Main Menu. 
         All of these help screens are contained in the file TPET.SLB. 
         As you press the up/down arrow keys the next or preceeding 
         help screen is loaded. If you are using a Hard Drive these 
         screens will seem to load instantly. Using a floopy drive you 
         will have about .75 of a second between screens. You should 
         study these 9 screens. They explain in detail what effect 
         changing a parameter has on the docoument/letter you are 
         working on. To return to the Main Menu press the ESC key.

         Exit Function:

         Use this function to leave TP-ET and return to DOS.

         Entering Printer Codes:

         There are two situations when you may want to enter a special 
         printer code. 
         1: If you have an IBM/EPSON or compatible printer and want to 
         use a font/quality not available from the print selection of 
         the Doc Settings function.
         2: If your printer is not IBM/EPSON compatible. 

         In either case you must follow some rigid rules of entry. 






                                      (5)

         To change fonts/quality select from the Doc Settings screen 
         the printer fonts selection. Once you do a window will open 
         up with 7 selections. The first 6 are for IBM/EPSON 
         compatible printers. The 7th selection (USER) can be used if 
         you do not know the printer codes for you printer; you know 
         the printer code your printer uses; or you want a special 
         font/quality for which you know the printer code. 

         In the first case where your printer is non IBM/EPSON 
         compatible you should select USER. Another window will open 
         up asking for the printer code. Just press Enter/Return 
         without entering a code. TP-ET will not send any printer code 
         to your printer and your printer should print in it's normal 
         turn on default state. You will be asked for a name for this 
         font. If you just pressed Enter/Return for the printer code 
         you can give any name you want ie: Normal or whatever.

         In the second and third case it is assumed you know the 
         printer codes required by your printer. For instance lets say 
         your printer manual says for condensed print you must enter a 
         code of ESC 18. ESC always 27 (CHR$ 27). Unless your printer 
         manual says different. TP-ET recognizes four different CHR$ 
         numbers directly 27 - 18 - 15 - 14.
         It is always a good idea to reset your printer to it's normal 
         turn on state before entering a new code. In an IBM/EPSON 
         printer this ESC @. This would translate to 27 @ before the 
         code in the example above. The entire entry would be 
            27/@/27/18
         Notice the slant bars (/) after each code entry. These should 
         be there. TP-ET strips all codes and recognizes the / bar as 
         a separator. 

         Now suppose you have a real strange looking code to enter. 
         This is easy to do. Suppose for the font/quality you want the 
         manual says 27 "x1" 27 CHR$(140) 27 "P"
         First of all notice the codes inside the parens. These codes 
         are entered as is. Notice the CHR$(140) this is a special 
         case. Now assuming the reset code is 27 @ the entire code 
         would be 27 @ 27 "x1" 27 chr(140) 27 "P"
         This code is purely fictional and doesn't represent any code 
         just for display purposes.
         How would we enter this code ?
            27/@/27/x1/27/HOLD THE ALT KEY DOWN AND TY[E 140 ON THE 
         KEYPAD/27/P

         As stated above the CHR$ numbers 27 18 15 14 can be entered 
         as numbers. TP-ET does not recognize CHR$(140) in the example 
         above. Therefore NOTICE the instruction for entering it.

         HOLD THE ALT KEY DOWN AND TYPE 140 ON THE KEYPAD.

         DO NOT TYPE 140 ON THE TOP ROW OF KEYS. This is not the same 
         as the Keypad.

         The "x1" and "P" were entered as is minus the quatation 
         marks. Any code in quatation marks are entered in this 
         fashion. If your manual shows lower case enter it as lower 
         case. If upper case enter it as upper case. 

         If you follow these rules you will have no problems producing 
         the effect on the printer that you want.



                                      (6)

         Whats left. Once you have changed all the parameters you want 
         changed you can save them to disk in TP-ET.DEF or not. If you 
         do save them to disk TP-ET will always use these parameters 
         when it loads from DOS provided that TP-ET.DEF is on the same 
         directory. If this is a special document and you don't want 
         these as your default settings simply answer no to the save 
         question. These settings will be in effect only for this 
         session. At any time you can reload your disk defaults by 
         using the Re-Set function from the Main Menu. 

         Start Function:

         You use this function when you are ready to start the 
         document. If you have the Append parameter set the first 
         thing TP-ET does is check the current directory for any files 
         with the .LET extention. It then looks for a matching file 
         with the extention .APN. This file contains all the parameter 
         settings you were using for this document. If it finds a 
         matching .APN file you will be able to Append to it. If not 
         and you choose this file you will receive an error message. 
         If you are not appending to an existing document TP-ET will 
         list all files with the .LET extention. This is so you can 
         see what is on your disk. If you try to name the new file the 
         same as an existing file you will receive an error message. 
         This safeguards against overwritting an existing file. Once 
         you have entered a name for the new document you will be at 
         the action screen (for lack of a better name). 

         From here it is up to you what you type. You may edit the 
         line of text you are working on until you press Enter/Return. 
         Once you do that line of text is printed and sent to disk (if 
         you have the Save parameter set). You cannot correct any text 
         once you are off a line. You will have 14 lines of text on 
         your screen before the screen clears. 

         You have a Help Screen available at any time during the text 
         entry. By pressing F1 a pop up screen will appear. The first 
         screen tells you all the editing keys available while you are 
         entering text on a line. By pressing the Tab Key a second 
         help screen will appear. This will have the keys to press to 
         draw double line boxes. There 11 box characters available. 
         You can draw as complex a box as you want. By pressing the 
         ESC Key the Help Screen will disappear and you will be back 
         to the work screen right where you left off. 

         The top and bottom of your monitor screen contains a lot of 
         information. All the auto-insert keys are shown; the current 
         time of day. The bottom of the screen tells you what page you 
         are on; what line you are on; the current printer setting; 
         the file name etc. When you are finished with your document 
         simply press F10. The document will be concluded and you will 
         return to the Main Menu. If you had been appending to a 
         existing document your parameter settings would have been re-
         set to whatever they were before you started appending to the 
         document. 

         TP-ET is very simple to use and at the same time quite 
         powerful. The best way to learn the program is to use it.






                                      (7)

         What is the difference between the Shareware version and the 
         Registered version ?

         The Shareware version does not support the Screen and Page 
         modes. These are powerful editing features. 

         Screen Mode:

         In the screen mode you may edit the 14 lines of text on your 
         screen. In other words you can move up and down among the 14 
         lines and correct or add to any line. The only thing that you 
         can't do is split a line or combine lines. Also there is no 
         word-wrap feature. The reason for this is in the Line mode 
         you may have made a mistake on a line. If there was a word-
         wrap feature you would be on the next line with no way of 
         getting back to the previous line to correct it.

         Page Mode:

         In the page mode you can scroll through the entire page and 
         make corrections or additions. For example: If your 
         parameter settings allow you 54 lines of text per page you 
         would be able to scroll from the 1st line to the 54th line. 
         This is called a virtual window. 

         In either case when you where ready to print the text you 
         would press F9. All the text would then go to the printer and 
         the disk file (if you have the Save parameter on).

         If TP-ET is accepted by you the user a word-wrap feature will 
         be added to the Screen and Page modes.

         The Registered Version also comes with a printed manual and 4 
         months of telephone support. You are also notified of any 
         updates to the program.

         You also receive a defective disk replacement form
         
         Why register TP-ET ? Mainly to have the Screen and Page 
         modes and receive DATASCAN as a bonus.



         BE ADVISED:

         The Registered Version of TP-ET now includes TPLABEL and 
         TPED plus several other utility files. See the READ.ME 
         file on disk for the latest updates.                    
                                                                 




















         TP-ET Registration form:

         Name: ____________________________________________________

         Address: _________________________________________________

         City: __________________________________

         State: _________________________________

         Zip: ___________________________________

         Tele: ________________________________________

         Date: ________________________________________

         Price: $19.50 plus $3.50 shipping
                 $2.00 Additional for 720K disk
                  Michigan residents add 4% sales tax

                   Total Amt enclosed:    $

         Personal checks will be held 14 days to clear.

         Mail to:

         Thumb Print Software
         1570 Colwood Rd.
         Caro Mich. 48723

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2748

     Volume in drive A has no label
     Directory of A:\

    TP-ET    EXE     98678   6-21-91   4:19p
    TPET     SLB      7739   7-04-90   7:38a
    TP-ET    DOC     24110   3-22-91   3:15p
    READ     ME       3197   3-10-91   3:45p
    PRINTMAN BAT       841   7-14-90   2:59p
    DEMO     EXE     39435   3-18-91   3:03p
    GO       BAT       119   8-08-91   5:10a
    PREVIEW  EXE      7347   4-18-91   1:15p
    FILE2748 TXT      2147   8-08-91   1:25p
            9 file(s)     183613 bytes
                          133120 bytes free
