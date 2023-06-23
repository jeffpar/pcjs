---
layout: page
title: "PC-SIG Diskette Library (Disk #3154)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3154/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3154"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DIRECTRI.TXT

{% raw %}
```
BABY
COMPUTER
FRUITS
MONSTERS
OFFICE
SPORTS
SWEETS
XMAS
```
{% endraw %}

## DOCUMENT.TXT

{% raw %}
```





                                   CONTENTS

   
    1.  Hard Drive Installation . . . . . . . . . . . . . . . . . . . . 1

    2.  Quick Start . . . . . . . . . . . . . . . . . . . . . . . . . . 2

    3.  Quick Reference Guide . . . . . . . . . . . . . . . . . . . . . 3

    4.  Using Word Search Puzzle Maker. . . . . . . . . . . . . . . . . 4

        Word List Directory . . . . . . . . . . . . . . . . . . . . . . 4

        Puzzle Settings . . . . . . . . . . . . . . . . . . . . . . . . 5

        Making a Puzzle . . . . . . . . . . . . . . . . . . . . . . . . 6

        Customizing Editor. . . . . . . . . . . . . . . . . . . . . . . 7

        Making a Word List. . . . . . . . . . . . . . . . . . . . . . . 9

        Editing/Appending an Existing Word List . . . . . . . . . . . . 10

        Deleting Word Lists . . . . . . . . . . . . . . . . . . . . . . 11

        Help. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12





































                                                                           1


              INSTALLING WORD SEARCH PUZZLE MAKER ON A HARD DRIVE


    Make sure the WSPM (Word Search Puzzle Maker) disk is in the appropriate 
    drive.  Type the drive letter followed by a colon.  For example, if the 
    WSPM disk is in drive A you will type A: and Press ENTER.  Now that your 
    current drive is A, type INSTALL, your hard drive letter followed by a 
    colon, and press ENTER.  For example, INSTALL C: will install WSPM on 
    drive C.  The drive letter can be a letter from C to F.






















































                                                                           2


                                  QUICK START


    To get started and see what WSPM can do, run the program by typing WSPM
    at the DOS prompt.
    
    *   WSPM will ask you to type C if you have a color monitor or M if you 
        have a monochrome monitor.
    
    *   The next prompt will ask you to give the disk drive you are using.
        Type in the drive letter where the WSPM files are located.
    
    *   When the STATUS SCREEN pops up press F3.
    
    *   Use the arrow keys to select a word list from the WORD LIST 
        DIRECTORY.  Press ENTER when the name of the list you want to hide 
        is highlighted.
    
    *   After the list is displayed on your screen, press ENTER at the 
        prompt.
    
    *   When WSPM is finished creating the puzzle, a command bar will appear
        at the bottom of your screen.  Turn your printer on,  press P, type 
        1 at the prompt, which asks for the number of copies to be printed, 
        and press ENTER.
    
    *   After your puzzle is finished being printed, you can make a printout
        of the solution.  If you press S, the random letters are replaced 
        with periods, leaving the words that were hidden exposed.  Press P, 
        type 1, and press ENTER.
    
    *   That's it.  You have just made your first word search puzzle using 
        WSPM.  Be sure and read the USING WORD SEARCH PUZZLE MAKER portion 
        of this document for full instructions on how to make and edit your 
        own word lists, how to use the CUSTOMIZING EDITOR to shape and 
        customize puzzle grids, and how to change the puzzle settings to 
        create 24 variations of word search puzzles.


























                                                                           3


                            QUICK REFERENCE GUIDE

     
    F1  will display word list names found on the active drive.
     
    F2  allows the puzzle settings to be changed.
        1st prompt allows drive to be changed.
        2nd prompt allows grid size to be changed. 
        3rd prompt allows word listing for finished puzzle to be changed.
        4th prompt allows the way words read in the grid to be changed.
     
    F3  hides a word list in a grid to create a word search puzzle.
        P  makes printouts of the puzzle.
        A  makes ASCII files of the puzzle for import or to print from DOS.
        S  displays the puzzle solution.
        C  allows the puzzle to be customized in the CUSTOMIZING EDITOR.
        H  hides the same word list in a new puzzle.
                          
                                [CUSTOMIZING EDITOR]
         
        CTRL + B  allows one of three brushes to be selected for use with 
                  CTRL + D.  CTRL + B also effects CTRL + C and CTRL + F.
        CTRL + C  displays a solution grid IF BRUSH IS SET TO DOTS OR STARS.
        CTRL + F  replaces periods and stars with a random capital letter IF 
                  BRUSH IS SET TO LETTERS.
        CTRL + P  makes printouts of the customized puzzle.
        CTRL + A  makes ASCII files of the customized puzzle.
        CTRL + T  changes the typing direction.
        CTRL + S  toggles the number of spaces the cursor moves (between 1
                  and 2).
        CTRL + D  allows the arrow keys to draw with whatever brush is 
                  active.  It can also allow the arrow keys to erase periods 
                  and stars.
        CTRL + L  allows word listing for finished customized puzzle to be 
                  changed.  Press ENTER after listing option is selected.

    F4  allows a word list to be created and saved. 
        S  saves the list as it appears on the screen.
        A  alphabetizes the list before it is saved.
        E  goes back to editing the list.
      ESC  exits without saving the list.
     
    F5  allows a saved word list to be edited and/or appended. 
        S  saves the edited list as it appears on the screen.
        A  alphabetizes the list before it is saved.
        E  goes back to editing the list.
      ESC  exits without saving the changed list.
     
    F6  allows selected lists on the active drive to be deleted.
     
    F7  contains full documentation of the WSPM program.
    
   ESC  will exit from most screens. 7 exits from the HELP mode.  When all
        else fails, press ENTER without typing anything.









                                                                           4


                         USING WORD SEARCH PUZZLE MAKER    


                                 <F1=DIRECTORY>


    F1 displays on your monitor the names of any word lists, created by
    WSPM, found on the disk in the active drive.  The active drive is the 
    one you designated at the prompt on the title screen.  A is the default 
    drive, so if you just press ENTER, A is the active drive. 
    
    *   The directory is able to hold 152 word list names.  If you copy the
        list files you create with WSPM to another disk, you must copy the
        DIRECTRI.TXT file along with all files that have the .WHL extension.
        Anytime you activate a new disk using WSPM, a DIRECTRI.TXT file is 
        automatically created.  This file holds the directory information 
        which gives you access to the word lists saved on the disk by WSPM.














































                                                                           5


                                 <F2=SETTINGS>


    F2 is one of the keys to the versatility of this program.  By changing 
    the various settings you can create 24 variations of the word search 
    puzzle. 

    *   The first prompt allows you to change drives.  If you do not wish to
        change a particular setting, simply press ENTER and the next prompt 
        will appear. 

    *   The second prompt allows you to select one of two grid sizes.  The
        default grid is the large one which allows you to hide from 1 to 30
        words, or groups of words, up to 15 characters long.  The reduced
        grid will hold from 1 to 15 words or groups of words.

    *   The third prompt allows you to select 4 different ways to list the
        words on your printout. 
         
        1.   The default option lists the words as they are filed. 
         
        2.   The second option gives the first letter of each word 
             followed by a space for each letter thereafter. 
         
        3.   The third option gives only spaces for each letter of the 
             words. 
         
        4.   The fourth option scrambles the letters of each word in the 
             list.  The words are not scrambled in the grid.
    
    *   The fourth prompt gives 3 options on how words will read in the 
        grid. 
         
        1.   The first option causes WSPM to hide words horizontally reading 
             left to right, and vertically reading top to bottom. 
         
        2.   The second option causes some of the words to read backwards. 
         
        3.   The default option causes the words to read in all directions
             including diagonally.






















                                                                           6


                               <F3=MAKE PUZZLE>

    
    Select F3 when you are ready to create a puzzle out of a word list on 
    the disk in the active drive. 
    
    *   When you select F3, WSPM will display on your monitor the names of 
        the lists found on the disk.  Use the arrow keys to highlight the 
        list you wish to hide and press ENTER. 
    
    *   The selected word list will be displayed to allow you to see if you
        have chosen the correct list.  If for any reason you do not want to
        hide the list being displayed, press ESC.  If you wish to proceed 
        with making the puzzle, press ENTER. 
    
    *   If you are creating a puzzle using the reduced grid, you will be 
        given the option of hiding the first or second column of words.  
        Each column will hold a maximum of 15 words, or groups of words. 
    
    *   Because WSPM randomly places the words one at a time in the grid, it 
        may happen that all the words in the list will not go into the grid 
        as they are being situated.  If this happens you can either press C, 
        which moves you to the CUSTOMIZING EDITOR, and place the remaining 
        words into the grid manually (use CTRL + L=LIST, discussed later, to 
        have the complete list displayed), or you can press P and print the 
        puzzle as it is, or you can have WSPM try hiding the list again by 
        pressing H.  Using too many large words in a list will make it 
        harder for WSPM to hide the list.  For best results, try and keep 
        words, or groups of words, under 10 letters and spaces long. 
  
    *   When the finished puzzle is displayed, you will have 6 options. 
         
        1.   P=PRINT.  Pressing P allows you to enter the number of copies 
             you want printed.  Type the number and press ENTER.  Press the 
             SPACE BAR to pause printing and press ENTER to resume printing 
             or ESC to quit printing. 
         
        2.   A=ASCII.  A allows you to create an ASCII file of a puzzle.  
             Even though WSPM cannot recall an ASCII file of a puzzle, the 
             ability to create an ASCII file allows you to import puzzles 
             into a word processing program to edit, work puzzles into 
             newsletters, group two or more together to make large puzzles, 
             and etc. 
         
        3.   S=SOLUTION.  S displays the solution of the puzzle.  You are 
             given all the same command options as with a puzzle.
         
        4.   H=HIDE AGAIN.  H will cause WSPM to hide the same list again,
             creating a new puzzle using the same words. 
         
        5.   C=CUSTOMIZE.  C will switch you to an editing screen where you 
             will be able to edit and customize the puzzle area displayed on
             the screen.  See below for a detailed discussion of the editor.
         
        6.   ESC=EXIT.  ESC will return you to the Hide List selection 
             screen.








                                                                           7


                               [CUSTOMIZING EDITOR]


    *   The CUSTOMIZING EDITOR allows you to be creative, and manually 
        change a grid's size, shape, add words, move words, and so on.  You 
        can also automatically or manually change the way the words are 
        listed in the puzzle being edited.  You must hold the CTRL key down 
        as you press the letter commands discussed below. 
         
        1.   CTRL + B=BRUSH.  CTRL + B gives you three brushes you can draw
             with.  Turn the drawing function on by pressing CTRL + D.  You
             will then be able to draw using the arrow keys.  The default
             brush is DOTS (periods).  Pressing CTRL + B will change BRUSH
             to STARS, and pressing it again will change BRUSH to random
             capitol LETTERS.  See the discussion on CTRL + C=CLEAR and CTRL 
             + F=FILL below to discover what effect CTRL + B has on them.
         
        2.   CTRL + C=CLEAR.  CTRL + C will display a solution grid of the
             puzzle being edited.  The hidden words will be revealed and 
             dots (periods) or stars (if the brush being used is STARS) will 
             make up the rest of the grid. 
         
        3.   CTRL + F=FILL.  CTRL + F will replace any period or star on the 
             screen with a randomly selected capital letter, if B=BRUSH is 
             turned to LETTERS.  This allows you to clear the grid exposing 
             the hidden words, shape the grid using DOTS or STARS (periods 
             are best when shaping the grid), and then let WSPM do the 
             tedious job of placing the random letters.  If you are drawing 
             with DOTS and want to get a better idea of how your grid will 
             look when it is finished, but you are not ready to have the 
             random letters placed, change BRUSH to STARS and press CTRL + 
             F; all the periods on the screen will be changed to stars.  
             When you are ready to continue editing, change BRUSH to DOTS 
             and press CTRL + F; all the stars on the screen will change 
             back to periods.  Of course you could change BRUSH to LETTERS 
             and fill in your grid without going back to DOTS, if you decide 
             you are finished after all.
         
        4.   CTRL + P=PRINT.  CTRL + P will allow you to make printouts of 
             the customized puzzle. 
         
        5.   CTRL + A=ASCII.  CTRL + A will allow you to make an ASCII file 
             of the customized puzzle. 
         
        6.   ESC=EXIT.  ESC will return you to the Hide List selection 
             screen. 
         
        7.   CTRL + T=TYPING.  CTRL + T allows you to type, in four 
             different directions.  Each time it is pressed, the typing 
             direction changes.  The arrow to the right of the T=TYPING, 
             displayed at the bottom of your screen, shows the typing 
             direction.











                                                                           8


        8.   CTRL + S=SPACE.  CTRL + S toggles the number of spaces the 
             cursor moves (between 1 and 2) as you type or use the arrow 
             keys to move or draw horizontally. 
         
        9.   CTRL + D=DRAW.  CTRL + D allows you to use the arrow keys to 
             draw with whatever the B=BRUSH is set at, or to erase periods 
             and stars.  Pressing it once turns the DRAW function on.  
             Pressing it again causes the arrow keys to erase periods and 
             stars.  Pressing it a third time turns it off.  Please note 
             that you can draw over dots and stars with LETTERS.  However, 
             you cannot draw over text with DOTS or STARS, and the ERASE 
             will only erase periods and stars.  You must erase text or 
             place periods or stars over text manually. 
        
       10.   CTRL + L=LIST.  CTRL + L & ENTER gives you the same listing 
             options for your customized puzzle as those given in the puzzle 
             settings.  Press CTRL + L, and you will see the listing options 
             change in the display box to the right of L=LIST at the bottom 
             of your screen.  When the desired option is displayed, press 
             ENTER. 
              
             a.   NORMAL, lists the words as they are filed. 
              
             b.   FIRST LETTERS, gives the first letter of each word 
                  followed by a space for each letter thereafter. 
              
             c.   SPACES, gives only spaces for each letter of the words. 
              
             d.   SCRAMBLED, scrambles the letters of each word in the list.


































                                                                           9

                                 <F4=MAKE LIST>

    
    F4 allows you to create and save a word list to be hidden in a puzzle.
    The list names already being used on the disk in the active drive will
    be displayed.  
    
    *   Give your list a descriptive name from 1 to 8 letters/numbers long.
        If you chose a name already being used in the active drive, the new
        list will copy over the old one. 
    
    *   Your list can contain from 1 to 30 words, or groups of words, up to 
        15 letters and spaces long.  If you finish your list before 30, 
        press ENTER without typing another word. 
    
    *   You will be allowed to edit or append your list by typing the number 
        of the word you want to change or space you want to fill and then 
        press ENTER.  If you want to change the name of the list, type 31, 
        press ENTER, type a different name, and press ENTER again. 
    
    *   When you are finished editing your list, just press ENTER.  A 
        command bar will appear at the bottom of your screen. 
         
        1.   Press S to save the list as it is. 
         
        2.   Press A to have the list alphabetized before it is saved. 
         
        3.   Press E to go back to editing the list. 
         
        4.   Press ESC to exit without saving the list.


































                                                                          10


                                <F5=CHANGE LIST>


    F5 allows you to edit and/or append a list that has already been saved.  
    After the names of the lists in the active drive have been listed, use 
    the arrow keys to highlight the list you want to alter and press ENTER. 
    
    *   After the words are listed and numbered, type the number of the word 
        to be altered or the space to be filled. 
    
    *   If you want to change the name of the list, type 31, press ENTER, 
        type a different name, and press ENTER again.  You will not be able 
        to change the name of an existing list to the name of another list 
        that exists in the same directory. 
    
    *   When you are finished editing your list, just press ENTER.  A 
        command bar will appear at the bottom of your screen. 
         
        1.   Press S to save the list as it is. 
         
        2.   Press A to have the list alphabetized before it is saved. 
         
        3.   Press E to go back to editing the list. 
         
        4.   Press ESC to exit without saving the changed list.






































                                                                          11


                                <F6=DELETE LIST>


    F6 allows you to remove word list files from a word list directory.
    After the word list names in the active drive are displayed on your 
    screen.  Use the arrow keys to highlight the name of the list you want 
    removed and press ENTER.  Press ESC to exit the DELETE LIST mode.
























































                                                                          12


                                   <F7=HELP>


    F7 contains the documentation which explains how to work WSPM.

    *    After you press F7, press the number of the function you want 
         explained.  Do not press the function key itself.

    *    To move to the next screen, press ENTER.  Continue pressing ENTER
         until you come to the end of the description and return to the HELP 
         SCREEN.

    *    From the HELP SCREEN, press the number 7 or ESC to exit the 
         HELP mode.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3154

     Volume in drive A has no label
     Directory of A:\

    GO       BAT      2206   3-27-92   3:27p
    INSTALL  BAT      3040   3-12-92   9:51a
    WSPM     EXE    140720   5-15-92   3:59p
    DIRECTRI TXT        64   4-15-92   5:52p
    COMPUTER WHL       246   2-07-92   2:58p
    OFFICE   WHL       278   2-07-92   2:58p
    FRUITS   WHL       265   2-07-92   2:58p
    XMAS     WHL       271   2-07-92   2:58p
    SPORTS   WHL       275   2-07-92   2:58p
    MONSTERS WHL       272   2-07-92   2:58p
    BABY     WHL       280   2-07-92   2:58p
    SWEETS   WHL       254   2-07-92   2:58p
    DOCUMENT TXT     21502   4-01-92   6:47p
           13 file(s)     169673 bytes
                          144384 bytes free
