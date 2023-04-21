---
layout: page
title: "PC-SIG Diskette Library (Disk #3233)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3233/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3233"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HELP.DOC

{% raw %}
```
         


       ******************* HOW TO USE QBPaint VERSION 1.0 ***************** 



       ====================================================================
          
                                   CONTENTS 
                                                         Page
       QBPaint's Tile Design Screen                       1 
       Getting Started: Entering Colors                   2 
       How Many Rows?                                     3 
       Painting the Display Circle                        4 
       Examples of Paint Tile Patterns                    5 
       Printing the Tile Formula                          6 
       Using Paint Tiles in Your Own Program              7, 8 

       ====================================================================


       QBPaint's TILE DESIGN SCREEN

           The screen on which you create a new paint tile has five 
       components: 
           
           (i) In the DIALOGUE BOX in the center of the screen, you 
       are prompted for information about the tile.  Type the
       appropriate response to each question and press the Enter key.
       "Yes/no" answers can be given as "y/n" if you wish. 

           (ii) The PALETTE at the top displays the 15 colors that can be 
       used in a paint tile. 

           (iii) The TILE ENLARGEMENT grid on the left gives an enlarged 
       view of the tile you are creating. Each box of the grid represents 
       one screen pixel (one point on the screen), so that a completed 
       design grid gives a greatly magnified view of a graphic unit that 
       will be 8 pixels wide and a maximum of 16 rows tall.  

           (iv) After you complete each row of the tile enlargement, the 
       PAINT TILE DISPLAY circle on the lower right is painted with the 
       current form of the tile in its true size.  This is the same 
       display a PAINT statement in your own program will give in screen
       mode 9. 
        
           (v) The TO CREATE A TILE box in the upper right screen 
       follows your progress through the process of tile creation by 
       highlighting your current stage.                                                           

       ******************************************************************** 
           HELP!!  Get on-line help during tile creation by pressing the 
       <F1>  key. 
       ******************************************************************** 

                                                                Help : 2

       GETTING STARTED: ENTERING COLORS 

           In the  dialogue box,  QBPaint  prompts you for a color with 
       which  to color each of the eight boxes (i.e., pixels) of row A 
       (A1, A2,...,A8) of the  tile enlargement grid.  

       ******************************************************************** 
       From the PALETTE choose a color 1 through 15, type its number 
       next to the A1 prompt, and press the <Enter> key.  
       ********************************************************************
        
       Supply a number for each of the other boxes of row A in the same 
       manner. 


           To save time, use this shortcut whenever possible:

       ********************************************************************
       To repeat a color, just press <Enter>.  Hint: You can fill a row 
       whose boxes all need the same color very, very quickly by  just 
       holding down the <Enter> key!
       ********************************************************************

       For example, if you press <Enter> when you are prompted for a color
       for box A7, the color given to A6 will also be assigned to A7.  
       Pressing <Enter> at the prompt for box D1 assigns the color of  box 
       C8 to box D1.  If you are prompted for a color for box F8 and enter 
       "B" repeatedly to back up until you reach box F3, then press 
       <Enter>, the  color assigned  to box F2 will  be assigned to box F3.    
       

           This brings us to the third possible response to the prompt for 
       a box color: 
        
       ******************************************************************** 
       To go back to a previously colored box on the tile enlargement
       grid, enter "B" instead of a palette color.
       ********************************************************************

       The "B" feature erases the color from the previous box, and prompts
       you for a new color for that box.  You can back up along the current
       tile row  as far as needed,  erasing all box colors along the way.
       However, you cannot back up onto the previous row.  In other words,
       entering a color for box 8 of a row "locks in" all color entries  for
       that row.

                                                                HELP : 3

       HOW MANY ROWS?

           At the end of each row, QBPaint queries whether to begin a new 
       row.  A response of "no" signals the program that the tile design 
       is complete, and you will be given the option to print the tile 
       formula.  

       ******************************************************************** 
           A paint tile can consist of as little as one row of pixels or be 
       as tall as 16 rows.  It is always 8 pixels wide. 
       ******************************************************************** 

       (The earlier versions of BASIC may accept tiles of up to only
       8 rows.) 

                                                                Help : 4

       PAINTING THE DISPLAY CIRCLE 
       
       ******************************************************************** 
           After you supply a color for box 8 of each row, QBPaint paints 
       the display circle (in screen mode 9) with the current form of the
       tile you are  creating. 
       ******************************************************************** 

       The appearance of the tile pattern when your own program displays  
       it  will vary  somewhat  depending on which EGA/VGA screen mode is 
       used.  QBPaint shows the appearance of your paint tile in screen 
       mode 9.

           With each successive row of colors that you add to the tile 
       enlargement grid, the tiny tiles in the display circle "grow."  
       For your first few tile patterns, it will be much easier to see the 
       relationship between the single tile shown in the tile enlargement  
       grid and the repetition of the pattern in the tile display circle, 
       if the pattern is bold and simple.  For example, try a two- or 
       three-color tile consisting of large diamonds on a solid back-
       ground, perhaps with a single dot in the center of the diamond.
       As the tile grows in height on the enlargement grid, you can pick 
       out the tiny individual tiles lined up in the tile display circle.

           If  your tile design is complex, the appearance of the finished 
       paint tile in  the  display circle  may be different  than  you 
       anticipate.  While the design of strictly  geometrical  patterns  
       is straightforward,  constructing a textured or shadowy effect 
       from  component  colors is complicated.  Rapid experimentation  
       will probably  show  you more  quickly how adjacent colors blend 
       than  would  an   inordinate   amount of time  planning. 
       Typographical errors made   while  entering  color choices  often 
       result in an interesting effect  difficult  to plan or anticipate. 

           Upon registering your ownership of QBPaint, you will receive 
       Version 2.0, in which you can make an unlimited number of revisions 
       on your paint tile.  By  observing  the effects created by  color 
       changes,  corrections, additions, and deletions on your tile pattern  
       which  is  shown in the paint tile display circle,  you can quickly 
       find the subtle  touches  needed  to  enhance  your first try  at a 
       particular design. 

           The  revision  capabilities of  Version 2.0,  also  make the 
       conversion  to and saving of  one tile pattern in different color 
       schemes  nearly   instantaneous.  This is illustrated in the demo, 
       "A Look at QBPaint  Version 2.0." 



                                                                 Help : 5

       EXAMPLES OF PAINT TILE PATTERNS
 
           EXAMPLE: Create vertical stripes by supplying the colors for 
       just one row.  Suppose you assign these palette values to the eight 
       boxes of row A: [ 4 - 4 - 4 - 4 - 15 - 15 - 15 - 15 ].  This colors 
       boxes A1 to A4 of the enlargement grid red, and boxes A5 to A8 white.  
       When this design is repeated vertically (and horizontally) on the 
       screen by a PAINT command in your program, the result will be evenly 
       spaced red and white vertical stripes. Pixels in a painted section of 
       the screen would be colored thusly:

       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15
       4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15 4  4  4  4 15 15 15 15

       (A simple variation:  [ 4 - 4 - 15 - 15 - 15 - 15 - 15 - 15 ].  This 
       creates a pattern of narrow red stripes and wide white stripes.) 

           HINT: If the screen area to be painted is small, say less than
       an inch wide, a tile pattern composed of many narrow stripes may 
       look better than a pattern  of just two wide stripes.  For example, 
       try these colors:  [ 4 - 2 - 3 - 1 - 2 - 5 - 3 - 2 ].


           EXAMPLE: Fill two rows of the design grid by alternating two 
       colors This produces a solid color whose hue is between those of 
       the two component colors. 

           EXPERIMENT: By including more rows in your pattern, you can 
       create more complex geometric designs, interesting color 
       highlights, and textured and shadowed effects.  Try creating some 
       tiles that are 6 or so rows tall with random color choices to get 
       an idea of the wide range of possible effects. 


           EXAMPLE: The "TileEq.BAS" file of QBPaint contains the formula 
       of a paint tile called Leaf11$. To see its pattern  displayed on 
       screen, select "Sample Paint Tiles for Your Own Program" from the 
       Main Menu of QBPaint.  These are the palette values used to color 
       the tile enlargement grid of Leaf11$:

       Row A:   2  -  2  -  2  - 10  -   2  -   2  -   2  -   2
       Row B:   2  -  2  - 10  - 10  -  10  -   2  -   2  -   2
       Row C:   2  -  2  - 10  -  2  -   3  -  10  -   2  -   2
       Row D:   2  -  2  - 10  -  3  -   2  -  10  -  10  -  10
       Row E:   2  - 10  - 10  -  2  -   2  -   2  -   3  -  10



                                                                Help : 6

       PRINTING THE TILE FORMULA

           After you signal that no more rows are to be added to the tile 
       pattern,  QBPaint  queries on whether you want  to print the tile 
       formula.  In Version 1.0 you save the formula for future use by 
       printing it  on the printer,  or by printing it  on screen and 
       hand-copying it. (Note: QBPaint does not report an unsuccessful 
       attempt to print on the printer.  Be sure to verify  that you have 
       printed  a copy  of the paint tile equation  before skipping the 
       option to print on screen.)

       ******************************************************************** 
       In QBPaint Version 1.0, IF YOU CHOOSE NOT TO PRINT THE PAINT TILE 
       FORMULA,  YOUR PAINT TILE  WILL NOT BE SAVED IN ANY FORM. 
       ******************************************************************** 

       You supply the tile name, following the normal guidelines for 
       naming strings (it must end with the symbol $).  QBPaint adds the
       string symbol $ to the tile name if it is omitted. Sample paint tile 
       names are tile$, brick$, greentexture1$, redblend$. A descriptive 
       name will help you to recall its appearance. 

           Rather than naming each tile uniquely, it is often convenient 
       to make it a numbered member of a collection, such as 
       greentexture1$, or VertStripe7$. 

           The registered users' Version 2.0 has several new  features 
       related to saving the tile.  Most importantly, it can save the paint 
       tile name and formula on disk in a .BAS file, like the TileEq.BAS 
       file included on the QBPaint Version 1.0 disk.  You can   then 
       electronically copy it to your own program using the copy/paste 
       feature of the QuickBASIC editor -- no typing necessary.  

           Secondly, along with the tile name, you can save remarks about 
       the  tile, possibly a description of it or ideas for its future use. 

           Finally, all tiles that you save are automatically stored in a
       file similar to the "Sample Paint Tiles..." section of Version 1.0, 
       so that you can later display on screen any or all tiles labeled by 
       name to recall their appearances. The saved tile pattern can also be 
       loaded into QBPaint for further revision.

                                                               Help : 7

       USING PAINT TILES IN YOUR OWN PROGRAM 

           Two steps are necessary to use a paint tile in your program 
       after it has been created and saved: 

       1.  Insert its formula into the program at a point prior to its 
           use in a PAINT statement. This can be done either as an 
           equation(s) or as data that is read in. 

       2.  Insert the name of the tile in the PAINT statement in place 
           of a numeric color value.  

           INSERT AS EQUATION(S): The most straightforward way of 
       inserting the formula into your program is to type it as a one-
       line equation.                                               
       __________________________________________________________________ 
       Coding Example: 

         'Set EGA graphics mode:
              SCREEN 9 
         
         'Insert tile equation:
              PaintTile$ = CHR$(250) + CHR$(120) + CHR$(2) + ... + CHR$(55) 
         
         'Draw circle w/ radius 100 at screen coords. 200,100 in clr 8:
              CIRCLE (200, 100), 100, 8 
         
         'Begin painting at screen coords. 200,100 with tile pattern
         'PaintTile$, until border color 8 is reached:
              PAINT (200, 100), PaintTile$, 8 
       ___________________________________________________________________
        
           Note that when QBPaint prints the tile formula on the printer 
       or on  screen, it has  for clarity  been broken into several lines.  
       As you type  the formula  into your program, you should, of course, 
       join them to make a single line.

           EQUATIONS FOR AN .EXE FILE: If the file is to be made 
       executable, an error will be generated during compile time if the 
       equation contains more than twelve CHR$() elements (each row of a 
       tile contributes four CHR$() elements).  Because of this, a long 
       equation must be divided into smaller equations.   The file 
       TileEq.BAS on the Version 1.0 disk contains examples of paint tile 
       equations that have been broken into component equations of 12 or 
       fewer elements  each.  The final equation is a concatenation of 
       the component equations.  
           Thus, for an .EXE file the tile equation line of the coding 
       example above might need to be replaced by something like: 

       ------------------------------------------------------------------

        PaintTileA$ = CHR$(250) + CHR$(120) + CHR$(2) + ... + CHR$(225)  
        PaintTileB$ = CHR$(15) + CHR$(125) + CHR$(185) + ... + CHR$(155) 
        PaintTileC$ = CHR$(250) + CHR$(35) + CHR$(190) + ... + CHR$(55) 
        PaintTile$ = PaintTileA$ + PaintTileB$ + PaintTileC$         

       -----------------------------------------------------------------

                                                                Help : 8
       
           INSERT AS DATA: An alternative to using equations is to read 
       in values for each of the CHR$() elements through a loop. 

       __________________________________________________________________ 
       Coding Example: 

         READ num%                        'read number of elements in eq. 
         
         For i% = 1 to num%
            READ info%                    'read equation values 
            tile$ = tile$ + CHR$(info%)   'build formula 
         NEXT i%
         
         CIRCLE (200, 100), 100, 8        'draw a circle
         PAINT (200, 100), tile$, 8       'paint the circle
          . 
          . 
          .
         END
        
         'Values for num% and the CHR$() elements:
         DATA  20
         DATA  255, 255, 0, 4, 120, 180, 140, 100, 100, 225, 185, 15 
         DATA  200, 135, 155, 0, 160, 55, 255, 170  
       _________________________________________________________________ 

           As with any PAINT command, the coordinates of the area to be 
       painted must lie within the border, not on it, and the area must 
       be totally enclosed by a boundary of one color, or the "paint" 
       will flood the screen.  

           NOTE: QuickBASIC's LINE, CIRCLE, and DRAW commands do not 
       accept a paint tile string as the color parameter.  Hence, the 
       border of the graphic must be drawn by one of the usual colors 
       numbered 0 to 15. 

           To use the formulas of tiles created by QBPaint Version 1.0, 
       you will need to enter the formula into your program via the 
       keyboard.  

           As previously noted, the registered users' Version 2.0, saves 
       the tile formula in a .BAS file like TileEq.BAS which is included 
       on the QBPaint Version 1.0 disk.  TileEq.BAS contains the formulas 
       of two paint tiles shown in the "Sample Paint Tiles..."  section.  
       To copy and use them in your BASIC program, load  TileEq.BAS into 
       the BASIC environment  on your computer,  and use the copy/paste 
       feature of the editor.   (More detailed instructions  for copying 
       are given in  TileEq.BAS.) 


                                ---   END  ---            


```
{% endraw %}

## INTRO.DOC

{% raw %}
```


       ************* INTRODUCTION TO PAINT TILES AND QBPaint ************ 


           QBPaint Version 1.0 is the shareware edition of QBPaint.  It 
       may be copied and distributed freely as long as these restrictions 
       are met:

           1. No part of the program is deleted or changed in any way.

           2. The charge, if any, for a copy of this shareware version
              of QBPaint is within the normal range of current market 
              prices for shareware.
           
           The copyright of QBPaint Version 1.0 is intended primarily
       to establish authorship and reserve revision rights, and does
       not limit the right to make copies of this version.

           QBPaint is a graphics utilities software package for 
       programmers using QuickBASIC, QBASIC, BASIC 7.0 Professional 
       Development System,  or earlier versions of the BASIC programming 
       language beginning with 2.0.  The paint tiles created can be 
       displayed by the PAINT statement in BASIC programs that use EGA 
       and VGA screen modes. 
           
           In QBPaint the user designs background and fill patterns known 
       as "paint tiles" on screen.  The formula representing each tile is 
       automatically calculated, and provided for transfer to BASIC 
       programs.    
           
           Whether you are a beginner or advanced programmer, if you know 
       how to use the PAINT command in your program, you can create and 
       paint with paint tiles with the help of QBPaint. 
           
           A paint tile is a small rectangular graphic unit which is used 
       repeatedly to cover an enclosed area of the screen in the same way 
       that a building's wall might be covered with identical ceramic 
       tiles. Upon execution of the PAINT command, QuickBASIC floods the 
       area with the tile pattern, in the same manner that it PAINTS with 
       one of the standard colors numbered 0 to 15.                                                               
           
           Using paint tiles makes possible a great variety of effects:  
       highlights and shading, interesting patterns and textured effects,  
       geometric patterns, and intermediate shades of color not available 
       in the standard numeric palette. QBPaint Version 1.0 displays a 
       number of examples of paint tiles on its opening screens, in 
       "Sample Paint Tiles...," and in the demonstration entitled, "Paint 
       Tiles in Action." 

                                                                Intro : 2

           Without the help of software such as QBPaint, creating paint 
       tiles to use in EGA and VGA screen modes (modes 7 and above) is 
       very complicated and very tedious.  This shareware version of 
       QBPaint enables the user to try out the rudimentary process of 
       designing a tile on screen and printing its formula.  If you 
       intend to continue designing paint tiles it is recommended that 
       you register with the author and receive a free copy of QBPaint 
       Version 2.0.   

           Version 2.0 allows unlimited on-screen corrections and 
       revisions as you design a tile.  It saves the tile's formula on 
       disk in a .BAS file so that no retyping of lengthy formulas into 
       your own program is necessary.  It also stores all patterns in a 
       graphics file, so that you can later view any or all of the paint 
       tiles that you have created and saved (to select one either for 
       use in a program or for further revision).  

           The QBPaint Version 1.0 package includes: 
  
       QBPaint.EXE        by running this you can:
                          -construct a paint tile and print its formula; 
                          -print Intro.DOC, Help.DOC, and  Register.DOC
                              on screen or printer;
                          -see a demo showing a screen before and after 
                              painting with paint tiles; 
                          -see a demo of QBPaint Version 2.0; 
                          -see "Sample Paint Tiles for Your Own Program" 

       Intro.DOC          the present document (2 pp.)

       Help.DOC           how to construct, save, and use a paint tile (8 pp.)

       Register.DOC       how to register QBPaint and the benefits of 
                          doing so (1 p.)

       TileEq.BAS         paint tile formulas that you can copy to your
                          own BASIC program by loading the file into a 
                          BASIC environment.  Their patterns are 
                          displayed in "Sample Paint Tiles..." which is 
                          accessed from the Main Menu of QBPaint.EXE 

       The .DOC files can also be printed from the DOS level.

       TECHNICAL INFORMATION

           QBPaint Version 1.0 was written entirely using QuickBASIC 4.5 
       with the exception of the .DOC files (which were written with a 
       word-processing program).
                                            
       LEGAL NOTICE 
                               
           QuickBASIC, QBASIC, and BASIC 7.0 Professional Development 
       System are trademarks of Microsoft Corporation. 


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


       ********************** REGISTERING QBPAINT **********************
                                                                      
           I hope you enjoy looking over this shareware version of    
       QBPaint.  Comments regarding it are most welcome. 

           The beauty of QBPaint is that it is a timesaver. Version 1.0
       has saved you the trouble of designing a tile on paper  and 
       working through a lot of complicated math to figure its formula 
       (without really knowing how the pattern will look on screen). 

           QBPaint Version 2.0 picks up where Version 1.0 leaves off. 
       If you have a tile pattern that you like, it lets you save the 
       formula in a .BAS file so you can insert it into your program 
       more quickly and accurately than you could by typing.  If you 
       want the same pattern in a different color, just use the 
       Exchange Color option.  Correct typos and try changing a pixel 
       here and there on your original design without having to start 
       over. Rotate the tile or add entire row of colors with quick 
       two-letter commands. Browse through a slide show of your tile 
       patterns to select one for further revision or for use in a 
       program.   Faster, easier. 

           Anticipated features of forthcoming versions of QBPaint 
       include the ability to color the boxes of an empty tile 
       enlargement grid in any sequence, optional mouse support, 
       and larger paint tiles. 
       
           Register your ownership of QBPaint if you have found it 
       useful. Upon receipt of your registration, a copy of QBPaint 
       Version 2.0 (or a later version if available) will be sent to 
       you.  The program is available on both 5.25" and 3.5" disks; 
       the 5.25" disk will be sent if no preference is indicated. 

       SUPPORT THE SHAREWARE MARKETING CONCEPT.  IF YOU CONTINUE 
       TO USE ANY PART OF THIS SOFTWARE, PLEASE REGISTER WITH THE 
       AUTHOR.  THANK YOU. 

       ***************************************************************** 
           To register and receive a copy of the latest version 
       of QBPaint, send a check for $15.00 to
                        
                        P. Oliva 
                        P.O. Box 39
                        Commack, NY  11725
       
       July 1992 
       ***************************************************************** 


```
{% endraw %}

## TILEEQ.BAS

{% raw %}
```bas
'****************************************************************************
'*                                                                         *
'*                               TileEq.BAS                                *
'*                                                                         *
'*                               a file of                                 *
'*                           QBPaint Version 1.0                           *
'*                        copyright 1992  by P. Oliva                      *
'*                                                                         *
'*                                                                         *
'***************************************************************************

REM PLEASE DO NOT MODIFY THIS FILE!!!

REM To prevent retaining any changes to this file, DO NOT SAVE it as it
REM is being unloaded, when you exit the BASIC environment, or at any other
REM time.

REM     At the end of this program are the formulas of two tiles displayed
REM     in the "Sample Paint Tiles" section of QBPaint Version 1.0.

REM     Use TileEq.BAS within a BASIC environment such as QuickBASIC or
REM     QBASIC.

REM     Be assured that reading these instructions takes much longer
REM     than the actual copying process!

REM ********** HOW TO COPY A FORMULA TO YOUR OWN PROGRAM *******************

REM          Some versions of BASIC may not allow more than one file
REM     to be loaded at a time.  For those versions, use these steps to
REM     copy the formulas to your program:

REM  COPY:
REM       Scroll down this file to reach the formulas.
REM       Move the cursor to the beginning of the first line of
REM       the tile formula.
REM       Highlight the formula lines by pressing the down arrow key while
REM       holding down the Shift key.
REM       Store the highlighted text in the buffer by simultaneously
REM       pressing the Ctrl and Insert keys.
REM
REM  LOAD:
REM       Load your own program.
REM
REM  PASTE:
REM       Position the cursor at the beginning of the line in your program
REM       where the formula is to be inserted (before the PAINT statement).
REM       Simultaneously press the Shift and Insert keys.

REM ************************************************************************

REM          Versions of BASIC such as QuickBASIC 4.5 allow more than one
REM     program to be loaded at a time. This capability makes copying
REM     formulas or other code from one program to another a very rapid
REM     process.  It's worth learning if you haven't already:
REM
REM  LOAD:If you have not already done so, load the program which will use
REM       a paint tile, using either of the following methods.
REM       Place your program disk in the active drive, then:

REM       Either:
REM         Use Alt-F-L so that TileEq.BAS (this program) will remain loaded.
REM         (You can toggle between the two programs with the F2 key.)
REM       or:
REM         Create a split screen by pressing Alt-V-P.
REM         (You can toggle the cursor between the screen areas with the
REM            F6 key; move it to the other copy of TileEq.Bas now.)

REM         Load your own program by pressing Alt-F-L.
REM         Your program appears on the screen section showing the cursor.

REM         (Scroll the program containing the cursor with the arrow key.)
REM         (Remove split screen later by pressing Alt-V-P.)

REM       Then when both this program and your own are loaded:

REM  COPY and PASTE the formulas as described above.

REM  ***********************************************************************

REM  After registering QBPaint, it will be this easy to copy your own
REM  paint tile formulas accurately to your program.  No more typing!!

REM  ***********************************************************************
REM  ***********************************************************************

REM     (If you inadvertantly delete a formula, you might be able to
REM     restore it by simultaneously pressing the Shift and Insert keys.)

REM          If a paint tile formula is used in a program which is to be
REM     made executable, an error will be generated during compile-time
REM     if the number of CHR$() elements exceeds 12.
REM          Thus, each formula has been broken into a series of 12-element
REM     components (A), (B), etc., with a final formula which concatenates
REM     the componenent formulas.
REM          ALL component formulas AND the concatenating formula must be
REM     included in a program to produce the tile shown in "Sample Paint
REM     Tiles."

REM     *******************************************************************

REM     ABOUT YOUR OWN PROGRAM:

REM     The "Sample Paint Tiles" section of QBPaint V. 1.0 displays LEAF11$
REM     and Brickwall$ in screen mode 9.  They will appear somewhat different
REM     in your own program if it uses a different EGA or VGA screen mode.

REM     To display LEAF11$ in your own program, insert the 3 lines of its
REM     formula in the program so that they will be executed before a
REM     PAINT statement.   Then, if the program has, for example, used
REM     color 2 to draw an enclosed area, and point (200, 300) lies within
REM     that area, the following PAINT statement would fill that area
REM     with LEAF11$:

REM             PAINT (200,300), LEAF11$, 2

REM     Similarly, to display Brickwall$, insert the 5 lines of its formula,
REM     and use a PAINT statement like above, with Brickwall$ replacing
REM     LEAF11$.

REM ***********************************************************************

REM  Three copies of each formula are provided as precaution against loss.
REM  The paint tile formulas follow:

REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM Formula for paint tile LEAF11$:
LEAF11A$ = CHR$(0) + CHR$(255) + CHR$(0) + CHR$(16) + CHR$(0) + CHR$(255) + CHR$(0) + CHR$(56) + CHR$(8) + CHR$(255) + CHR$(0) + CHR$(36)
LEAF11B$ = CHR$(16) + CHR$(255) + CHR$(0) + CHR$(39) + CHR$(2) + CHR$(255) + CHR$(0) + CHR$(97)
LEAF11$ = LEAF11A$ + LEAF11B$

REM Formula for paint tile Brickwall$:
BrickwallA$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0)
BrickwallB$ = CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(213) + CHR$(255) + CHR$(0) + CHR$(128) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallC$ = CHR$(255) + CHR$(255) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(93) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(170) + CHR$(255) + CHR$(0)
BrickwallD$ = CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(90) + CHR$(255) + CHR$(0) + CHR$(8) + CHR$(173) + CHR$(255) + CHR$(0)
Brickwall$ = BrickwallA$ + BrickwallB$ + BrickwallC$ + BrickwallD$


REM ************************ End of TileEq.BAS *****************************

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3233

     Volume in drive A has no label
     Directory of A:\

    PC-SIG            1531   9-14-92   2:38p
    QBPAINT  EXE    250148   7-25-92   8:30a
    INTRO    DOC      5399   7-25-92   8:54a
    HELP     DOC     19158   7-24-92   8:52p
    REGISTER DOC      2512   7-24-92   8:55p
    TILEEQ   BAS      8987   7-23-92  10:14a
    GO       BAT        34  10-05-92   2:54p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     289809 bytes
                           28672 bytes free
