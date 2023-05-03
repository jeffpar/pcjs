---
layout: page
title: "PC-SIG Diskette Library (Disk #1947)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1947/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1947"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZWIN"

    EZWIN is a unique WYSIWYG dBase III window generator, allowing the user
    to create windows (with text) and move them anywhere on the
    screen. Change border designs and colors, and generate ready-to-run
    dBase code.
    
    EZWIN was designed to be intuitive, easy, and fast. The edit feature
    is a simple line-editor for correcting mistakes and centering lines of
    text within your window. The ability to move windows without retyping
    all the SAY lines is one of the options that makes EZWIN a delight to
    use. Reload your window in any position on the screen. The windows
    generated can be called by, or merged into, any dBase III or dBase III
    clone program you create.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZHELP.TXT

{% raw %}
```

     EZWIN Version 1.2



                
                              E Z W I N         
                                                
                             Version 1.2
                                                
                        (C) 1989 by Paul Jordan 
                
     
     EZWIN is a shareware product.  You may feel free to make copies,
     and pass them on to friends for their evaluation.  If you make
     use of this software, you are expected to pay a registration fee
     of $20 to:
         
                               Paul Jordan
                      909 Marina Village Parkway (#112)
                             Alameda, CA 94501
     
     
     *====================================================================*
                                  OVERVIEW
     *====================================================================*
     
     EZWIN is a Window Generator for dBASEIII and dBASEIII clones.
     
     Most Window Generators, or procedures,  I have seen are too
     complicated, too cumbersome, or too expensive.  EZWIN was
     designed to be intuitive, easy, and fast.  The Windows generated
     can be called by, or merged into, any dBASEIII or dBASEIII clone
     program you create.
     
     The 7 files that make up EZWIN are:
     EZWIN.BAT, EZMAIN.EXE, EZWIN.DBF, EZCLEAN.BAT, DBFAST.EXE,
     DBCLEAR.EXE and this help file, EZHELP.TXT
     
     EZWIN can be operated from the distribution diskette or copied to
     its own directory on your hard drive.  To save typing path names, I
     keep the EZWIN files in my dBASE directory.  This allows running
     EZWIN directly from the dot prompt, and seeing the results immediately.
     In either case, as with all programs, it is prudent to make a backup
     copy of the distribution diskette before doing anything else.
     
     The instructions on the help screens included within the program
     should get you started.  As a matter of fact, I suggest you start
     EZWIN and 'play around' with it for awhile before reading any
     further. Just type: EZWIN.
     
     *====================================================================*
                            MAIN MENU COMMANDS
     *====================================================================*
     
     The main menu contains the following options:
     
     (H)elp (N)ew (E)dit (D)isplay (M)ove (C)lear (A)lter (S)ave
     (L)oad (Q)uit 
     
     Detailed Instructions on each Menu Option follows:



                                       -1-


     EZWIN Version 1.2



     
     (H)elp  -  Help presents instructions for each major menu
     section.
     
     (N)ew  -  New is the first option you will use.  It creates your
     Window.  Windows are used to display instructions, warnings and
     menus. A window, should be smaller than your overall screen.     
     How small, or large, is up to you.  Experimentation is the key.  
     When you press (N)ew, a numbered inverse video line will be
     displayed on the screen.  Start typing your text. Anything will
     do for a sample.  When you have typed a few words, press <ENTER>
     and start your next line.  When you are finished, Type the '@'
     symbol on the next blank line. It is located on the upper half of
     the number 2 key.  To type it, hold down your shift key, and
     press the number 2. This signals EZWIN that you are finished with
     the text part of your window and exits (N)ew.
     
     EZWIN determines the width of your window by the longest line you
     typed, and the length by the amount of lines.  When you exit
     (N)ew by typing the '@' symbol on a blank line, the window is
     generated and automatically displayed in the center of the
     screen. The default colors are Black Text on a White background. 
     The colors, and position of the screen can be changed quickly and
     easily.  
     
     (E)dit -  This feature is a simple Line-Editor, that allows you
     to correct mistakes, and center lines of text within your window. 
     When you first enter the editor, you are in TYPEOVER mode, which
     means that anything you type, will overwrite what is on the
     screen.  To enter the INSERT mode, press the Insert Key (Ins) on
     your keyboard. In insert mode, anything you type (including
     spaces), will push whatever is on the line to the right.
     REMEMBER, that this is a line editor, and if you push characters
     off the edge of the  window, they are gone.  Not to worry though,
     EZWIN is so simple to operate, you can just re-edit and fix any
     minor goofs. If you really get into a bind and want to add more
     words than will fit, simply recreate the window.
     
     (D)isplay - The display option  will display, or re-display the
     window after clearing the screen, or repositioning
     (moving).
     
     (M)ove -  is one of the options that make EZWIN a delight to use. 
     How many times have you created a window by typing in all those
     nasty little @..SAY statements, and then decided that you didn't
     like the position it is in.  With EZWIN you can re-load your
     window and (M)ove it wherever you want.  EZWIN will take care of
     re-writing the @..SAY statements.  
     
     To (M)ove your window, use the Up, Down, Left, and Right Arrow   
     Keys. As the window moves, it will leave the original window     
     position displayed on the screen. This provides you with an aid
     to line up, or overlap other windows in a series, such as in
     several 'instruction' windows.  As you become experienced with
     EZWIN you will appreciate this feature.  When you are want to
     clean up the screen, simply press (C)lear and everything around



                                       -2-


     EZWIN Version 1.2



     the window will disappear.  When you have the window positioned  
     where you like it, Press (Q)uit and you will be returned to the  
     Main Menu. 
     
     (C)lear - clears the working area of the screen.
     
     *====================================================================*
                              ALTER MENU
     *====================================================================*
     
     (A)lter - is one of the key features of EZWIN.  It allows you to
     Alter (change), the border style, and colors of your text and
     background.
     
               The options on the (A)lter menu are:
     
               (H)elp - a quick on line help menu
     
               (S)tyle of Border - allows you to change the border
               style. For no border press 0, for a singleline border
               press 1, and for a doubleline border press 2.  Try them
               all, and when your are finished press (Q)uit to return
               to the ALTER menu.
     
               (T)ext -  This option allows you to change the color of
               the Text in your window. Just press the letter (or
               number) of the color you want. What you see is what
               you get!. For those of you with Color Cards and
               Monitors, the combinations are endless. If you have a  
               Monochrome system, your choices will be limited.       
               However, by utilizing regular and High Intensity White, 
               you will be able to produce a variety of Window        
               designs.
     
               (B)ackground - allows you to change the background
               color of your window.  The menu is similar to the text
               menu, except the color yellow is not represented.  DOS
               presents yellow as a RED when used as a background
               color, and is therefore not used.
     
     *====================================================================*
                                    SAVE
     *====================================================================*
     
     (S)ave -  When you press (S)ave, EZWIN asks if you would like to
     add Menu Choices.  If you answer (Y)es, EZWIN will ask you to
     type in the numbers (or letters) you will use for Menu Choices. 
     When EZWIN generates your program it will generate an INKEY()
     routine, fully error-trapped, to allow only your choices to pass.
     Then all you have to do is write your IF..THEN, or DO CASE
     statements to branch to other segments of your program.
     
     If you answer (N) to Menu Choices, EZWIN will ask if you would
     like a Pause generated.  A Pause is useful when you are
     presenting a series of Windows, and want the user to 'Press
     AnyKey' to move on to the next one.  If you answer (Y)es, EZWIN



                                       -3-


     EZWIN Version 1.2



     will generate an INKEY() statement that will allow the pressing
     of any key to continue in your final window.
     
     If you do not want Menu Choices, or a Pause, EZWIN will just
     generate a plain vanilla window, and it is up to your program to
     decide what to do next.
     
     EZWIN will then ask you for the filename you wish to save your
     window under. Simply type a standard DOS filename (up to eight
     characters) and press <ENTER>. You can also type in a question
     mark (?) to list the directory of window files already on disk,
     or just press <ENTER> to quit. EZWIN will warn you if you try to
     save a filename that is already on disk and present you with the
     following options:
     
               (O)verwrite -  Overwrites (erases) the old file with
               the same name.     
      
               (L)ist the Directory to see what other windows are
               present. This gives you the chance to rename your file.
     
               (Q)uit -   to return to the Main Menu.
     
     
     (L)oad -  EZWIN allows you to re-load any window files you have
     already saved. This will allow you to change the borders,
     colors, or move your window to a new position
     
     (Q)uit - From the Main Menu Returns you to DOS. From other menus,
     you are returned to the previous menu.
     
     *====================================================================*
                                 DESIGN TIP
     *====================================================================*
     
     If you wish to present several windows on the screen at the same
     time, you can see what the final lay-out will look like by doing
     the following.  As you work on your first Window, move it to the
     location desired and save it as A1.  Now create your second
     window, move it and save it as A2 or whatever.  Do the same with
     your third window, etc...etc...
     
     To see what they will look on the same screen, simply (L)oad them
     back in the same order.  Then, if you are not satisfied with   
     the screen layout, load back the offending Window and     
     reposition it.
     
     *====================================================================*
                 HOW TO USE THE WINDOWS IN YOUR PROGRAMS
     *====================================================================*
     
     There are 3 ways to use Windows in your programs.
     
     1.  Leave your Window programs exactly as generated. Then, call
     them, as you would any dBASE program, by issuing a DO command.
     Until you are satisfied with the exact wording, and location of



                                       -4-


     EZWIN Version 1.2



     your windows, this is the suggested method. 
     
     2. Using your text editor 'Merge' them into your program where
     you want them.
     
     3. Use them in PROCEDURE files.  If you choose this method, you
     must add the line: PROCEDURE FileName - (where FileName is the
     name of your window) as the first line of the window.  Once
     again, call it as you would any dBASE procedure with a DO
     FileName.
     
     
     *====================================================================*
                             TECHNICAL STUFF
     *====================================================================*
     
     EZWIN was compiled using the dbFAST compiler. The batch file EZWIN.BAT
     loads the compiler engine DBFAST, runs the program EZMAIN.EXE, and then
     unloads the compiler from memory returning the space used to your computer.
     
     EZWIN saves three files for each window with the extensions .PRG,
     .WIN, and .EZM. The .PRG file is the actual window you will
     use.  The .WIN (database) and .EZM (memory) files are working files,
     and provided to allow you to re-load your windows for further work.
     You do not need them in order to use the .PRG files. The .WIN file
     holds the textlines of the window you created, and the .EZM file holds
     the window coordinates and other variables needed for re-loading your
     window.
     
     When you are satisfied with your windows, the .WIN and .EZM files
     can be erased from your disk.  EZCLEAN.BAT is included on the
     distribution disk to allow you to do this quickly and
     easily. Simply type: EZCLEAN, and away they go to computer
     heaven.
     
     The EZWIN.DBF is needed by EZWIN to hold the textlines.  If you accidently
     trash it, the structure can be recreated using the CREATE command of
     dBASEIII or the clone version you are using.  It consists of 1 character
     field named TEXTLINE, with a length of 79 and should be empty.
     
     Structure for database: C:ezwin.dbf
     Number of data records:       0            
     Date of last update   : 08/13/89           
     Field  Field Name  Type       Width    Dec 
         1  TEXTLINE    Character     79        
     ** Total **                      80        
                                                
     
     
     *====================================================================*
          WHAT THE EZWIN GENERATED WINDOW PROGRAM FILE LOOKS LIKE
     *====================================================================*
     
     The program (.PRG) file generated by EZWIN, looks like this:
     
     * TEST.PRG generated by EZWIN (C)opywrite 1989 by Paul Jordan    



                                       -5-


     EZWIN Version 1.2



     
     SET COLOR TO N/W 
     @ 9, 24 CLEAR TO 13, 54 
     @ 9, 24 TO 13, 54 DOUBLE 
     @ 10, 26 SAY "This is a Sample Program" 
     @ 11, 26 SAY "file created with the EZWIN" 
     @ 12, 26 SAY "Program.   <Press AnyKey>" 
     SET COLOR TO W/N  
      
     * EOF TEST.PRG
     
     
     NOTE: The last line of an EZWIN generated window always resets
     colors to White Text on a Black background. This is so the EZWIN
     colors do not get passed to your program.  If you do NOT want
     White Text on a Black background, you must add a line with the
     colors of your choice.
     
     *====================================================================*
              USING THE MENUCHOICE ROUTINE WHEN CREATING MENUS
     *====================================================================*
     
     An EZWIN window program used as a menu, and generated with Menu
     Choices selected from the (S)ave option, looks like the following:
     
     * SAMPLE.PRG generated by EZWIN (C)opywrite 1989 by Paul Jordan  
      
     SET COLOR TO N/W 
     @ 6, 23 CLEAR TO 16, 55 
     @ 6, 23 TO 16, 55 DOUBLE 
     @ 7, 25 SAY "===== SAMPLE EZWIN MENU =====" 
     @ 8, 25 SAY "" 
     @ 9, 25 SAY  "    1. Add New Records"
     @ 10, 25 SAY "    2. Find/Edit Records" 
     @ 11, 25 SAY "    3. Print Invoices" 
     @ 12, 25 SAY "    4. H E L P ?" 
     @ 13, 25 SAY "    5. Quit to DOS" 
     @ 14, 25 SAY "" 
     @ 15, 25 SAY "        Press (1-5)" 
     SET COLOR TO W/N  
      
     keychoice = ' ' 
     DO WHILE .NOT. keychoice $"12345" 
        keypress = INKEY() 
        keychoice = UPPER(CHR(keypress))
     ENDDO 
      
     The characters after the $ sign in the Quotes, are those
     added using the MenuChoice feature. The program will only
     continue if the user presses one of those keys.  It is up to
     you to write your own IF..THEN or DO CASE statement to tell
     your program what to do next. To use your menu Window simply
     call it with a DO statement, and then write your CASE
     selections.  For example:
     
          DO test



                                       -6-


     EZWIN Version 1.2



          DO CASE
             CASE keychoice = "1"
                  DO procedure1
             CASE keychoice = "2"
                  DO procedure2
             CASE keychoice = "A"
                  Do procedureA
                  etc...
                  (Add additional CASE statements as needed)
          ENDCASE
     
     If you decide to use the MenuChoice or Pause feature in EZWIN,
     remember to SET TALK OFF and declare the variable 'keychoice'
     public in your main program as follows:
     
          SET TALK OFF
          PUBLIC keychoice
     
     *====================================================================*
                        USING EZWIN's PAUSE FEATURE
     *====================================================================*
     
     If you choose PAUSE when saving your EZWIN window, a simple
     inkeys routine is generated at the end of your window,
     which looks like this:
      
     keypress = 0              
     DO WHILE keypress = 0     
        keypress = INKEY()     
     ENDDO                     
      
     Any Key pressed will cause the program to continue.
     
     
     *====================================================================*
                               FUTURE GOODIES
     *====================================================================*
     
     Plans for the next version of EZWIN include:
     
         - Double Borders, with option to change Border Colors
         - Neat looking Drop Shadows, for that 'professional' look
           using the colors of your choice
         - Expansion Feature to enlarge windows (or reduce them)
         - Case Statement Generator which will allow EZWIN to be used
           as a full-blown menu generator. (You won't have to write your
           own CASE statements)
         - Any other improvements suggested by users
     
     That's All Folks! I hope you enjoy using EZWIN, and I urge you to
     pass copies to your friends, associates, and favorite Bulletin
     Boards. EZWIN is not a free program, and if you make use of it,
     you are expected to send in your registration fee of $20.
     
                                Thank you.
                                Paul Jordan



                                       -7-


     EZWIN Version 1.2



          
     
     ----------------------------------------------------------------
     
                            I N V O I C E
     
     Remit to:  Paul Jordan
                909 Marina Village Parkway, (#112)
                Alameda, CA 94501
     
     From:      __________________________________
                __________________________________
                __________________________________
                __________________________________
                __________________________________
     
     Contact:   __________________________________
                __________________________________
     
     
     QTY                                          UNIT PRICE   TOTAL
     
     _____      EZWIN Window Generator Vers 1.2     $20        ______
     
     Note that EZWIN Software has been delivered and accepted by customer.
     
     --------------------------------------------------------------------
      
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     



                                       -8-

```
{% endraw %}

## FILE1947.TXT

{% raw %}
```
Disk No: 1947                                                           
Disk Title: Ezwin                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: EZWIN                                                    
Author Version: 1.2                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
EZWIN is a unique ``what you see is what you get'' dBase III window     
generator utility that allows the user to create windows (with text) and
move them anywhere on the screen.  It also allows the user to change    
border designs and colors, and it generates ready-to-run dBase code.    
                                                                        
EZWIN was designed to be intuitive, easy, and fast.  The edit feature is
a simple Line-Editor, that allows you to correct mistakes, and center   
lines of text within your window.  The ability to move windows without  
retyping all the SAY lines is one of the options that make EZWIN a      
delight to use.  With EZWIN you can re-load your window in any position 
on the screen.  The Windows generated can be called by, or merged into, 
any dBASE III or dBASE III clone program you create.                    
                                                                        
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
║                    <<<<  Disk #1947  EZWIN  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: EZWIN        (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY EZHELP.TXT PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1947

     Volume in drive A has no label
     Directory of A:\

    DBCLEAR  EXE       693   6-05-89
    DBFAST   EXE     83810   5-24-88
    EZCLEAN  BAT        85   8-14-89   8:34a
    EZHELP   TXT     20475   8-16-89   5:58p
    EZMAIN   EXE     56240   8-16-89   9:01p
    EZWIN    BAT        26   8-01-89
    EZWIN    DBF        66   8-16-89   7:03p
    EZWIN12  EXE    113688   8-16-89   9:14p
    FILE1947 TXT      1999  12-29-89   9:16a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80  12:58a
    READ     ME        251   8-16-89   8:27p
           12 file(s)     277911 bytes
                           37888 bytes free
