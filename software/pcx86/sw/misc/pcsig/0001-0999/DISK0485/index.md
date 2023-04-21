---
layout: page
title: "PC-SIG Diskette Library (Disk #485)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0485/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0485"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ICON MAKER & FXMATRIX"

    ICON MAKER is a menu-driven program that allows you to create graphical
    icons and cross-stitch graphics interactively in any of three graphical
    modes supported by the IBM PC family.  These three modes include the
    high resolution 640 X 200 two color, the 320 X 200 four color, and the
    160 X 100 sixteen color.  The icons you create can then be used
    directly in your program data area instead of having to be accessed as
    an outside file by your program.
    
    All icons created can be saved in an ASCII file which will than be used
    in a form that is acceptable by the macro assembler (in the form of dw
    and db statements) and can be used in the data segment of your program
    to define your shape.
    
    Are you sick and tired of printing the same old characters over and
    over again on your Epson FX or JX printer?  Or maybe you've decided to
    come up with your own alphabet.  Well, FXMATRIX can add some spice to
    your printouts.
    
    FXMATRIX is a matrix program that permits you to design user-created
    characters, store them in a file, and download them to the Epson FX and
    JX dot matrix printers.  These created characters can then be used from
    any word processor, even if your word processor resets the
    printer upon execution.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOTGRAPH.TXT

{% raw %}
```

                  SIXTEEN COLOR DOT GRAPHICS FOR THE PC

    The  PC junior is the only member of the IBM PC family  that  can 
    produce  the 16 color all points addressable 320 by 200  graphics 
    without  the  recently  announced but  scarce  enhanced  graphics 
    boards.   It seems at best that the PC will produce only a choice 
    of two sets of 4 colors in an all points addressable mode.  I was 
    working on a program that required graphics and wanted it to work 
    on  all IBM PC machines and found a compromise that I would  like 
    to share with you in this short note. 

    I  found  that the Junior has a mode that displays all 16  colors 
    in  160  by 200 resolution.  It requires 16000 bytes  of  display 
    memory  since each byte contains two 4 bit nibbles of color  data 
    to  display two such elongated dots.   In order to make  anything 
    look  well  with  that mode however,  the dots must  actually  be 
    displayed  two at a time  to produce square pixels thus  reducing 
    to  a  160  by 100 display mode of  16  colors.   With  a  little 
    experimenting  I was able to do this on the PC as well and in  so 
    doing,  utilized the same code on both without using the ROM BIOS 
    support provided on the Junior.

    It  seems  that  the only way to get 16  colors  with  the  color 
    display adapter is to be in one of the color text modes.  This is 
    the  only clue you need to proceed.   Notice that there are  some 
    special  non ASCII characters displayed with codes from 80 to  FF 
    hex.   One  of  those  codes is DE hex or 222  decimal  and  will 
    display  an  80 column character with the left half that  of  the 
    foreground  color  and  the  right  half  the  background  color.  
    Fortunately both colors are defined in the attribute byte so that 
    the  left and right halves can be  controlled  separately.   This 
    produces  a  160  by 25 display that is dot addressable  with  16 
    colors.   Notice  that we have used two bytes for  each  adjacent 
    pair so that only one fourth of the display memory is used.

    Now for the tricky part.  By getting into debug and experimenting 
    with  the 6845 video controller registers I was able to get  some 
    rather interesting effects.   I have been told that you can cause 
    damage to the video system by doing the wrong thing here so I was 
    cautious.   What I wanted was a squish in the vertical  direction 
    by a factor of four.  Therefore, after setting up for the 80 X 25 
    color graphics text mode,  I knew that something might be done to 
    the  6845 registers that controlled the vertical  characteristics 
    of  the  display  if it were to be possible at  all.   These  are 
    R4,R5,R6, and R7.  Then too there is R9 which has something to do 
    with the scan line count per character.  In the 80 character mode 
    register  4  contains 31 meaning that there is provision  for  31 
    rows  not the 25 that we might expect.   This means  simply  that 
    there  are  6  rows  to provide for the  vertical  retrace  time.  
    Register  6 contains the expected 25 and register 7  contains  28 
    which  is the vertical sync position.   This set up allows for  3 
    undisplayed rows,  25 display rows and finally 3 undisplayed rows 
    at  the bottom.   Meanwhile register 9 contains 7 which  actually 
    allocates  scans  zero to 7 for a total of 8 scan lines per  row.  
    The  total count on the scan lines is 248 with only 200  of  them 
    actually displayed.




                                    1






    Thus assign 124 to register 4, 100 to register 6, 112 to register 
    7,  and 1 to register 9.   There will be 124 rows with 12 at  the 
    top  and bottom.   Each row has two scan lines for a total of 248 
    scan  lines with only 200 of them actually displayed.   While  in 
    debug I tried this and found that all of my 80 column text showed 
    only  the top two scan lines but that I could display about  four 
    times as many of them.   So that is the  solution.   Actually,  I 
    coded  it in assembly language but to communicate  here,  I  will 
    include a short segment of basic which does the same thing.   The 
    assembly  language program is much much faster than this routine.  

    10 WIDTH "SCRN:" 80                 ' 80 COLUMN MODE
    20 SCREEN 0,1,0,0                   ' COLOR MODE
    30 OUT &H3D8,9                      ' DISABLES BLINK BIT
    40 DEF SEG = &HB800                 ' COLOR DISPLAY AREA
    50 FOR I = 0 TO 80*100*2 STEP 2     ' FILL "SCREEN"
    60 POKE I,222                       ' HALF AND HALF CHAR
    70 POKE I + 1,0                     ' BLACK ON BLACK
    80 NEXT I
    90 OUT &H3D4,4                      ' R4  SELECTED
    100 OUT &H3D5,124                   ' R4  VERTICAL TOTAL
    110 OUT &H3D4,6                     ' R6  SELECTED
    120 OUT &H3D5,100                   ' R6  VERTICAL DISPLAYED
    130 OUT &H3D4,7                     ' R7  SELECTED
    140 OUT &H3D5,112                   ' R7  VERTICAL SYNC
    150 OUT &H3D4,9                     ' R9  SELECTED
    160 OUT &H3D5,1                     ' R9  SCAN LINES (2)


    Statement  number 40 is necessary to disable the blink else color 
    codes larger than 7 produce a blinking display.  Now you have all 
    of  the screen filled with black foreground and black  background 
    "dots".   To  draw  a line of yellow dots in  column  25  without 
    changing the other dot color in column 24, write:

    1000 FOR I = 0 TO 100
    1010 A = I * 160 + (25\2) * 2 + 1    ' LOCATION OF ATTRIBUTE
    1020 N = PEEK(A)                     ' GET ATTRIBUTE BYTE
    1030 POKE A,(N AND &HF0) OR &H0E     ' CHANGE DOT TO YELLOW
    1040 NEXT I

    When  you  exit  this program you will not be able  to  read  the 
    display  messages because of being in this strange graphics mode.  
    Just set the width to 40 to see what you are doing.















                                2
```
{% endraw %}

## FILE0485.TXT

{% raw %}
```
Disk No:  485
Disk Title: Icon Maker & FXMatrix
PC-SIG Version: S2.2

Program Title: Icon Maker
Author Version: 3.352
Author Registration: $10.00.
Special Requirements: CGA and an Epson-FX printer or compatible.

ICON MAKER is a menu-driven program that allows you to create graphical
icons and cross stitch graphics interactively in any of three graphical
modes supported by the IBM PC family.  These three modes include the
high resolution 640 X 200 two color, the 320 X 200 four color, and the
160 X 100 sixteen color.  The icons you create can then be used
directly in your program data area instead of having to be accessed as
an outside file by your program.

All icons created can be saved in an ASCII file which will than be used
in a form that is acceptable by the macro assembler (in the form of dw
and db statements) and can be used in the data segment of your program
to define your shape.

Program Title: FXMatrix
Author Version: 5.816
Author Registration: $18.00
Special Requirements: Epson FX or JX printer.

Are you sick and tired of printing the same old characters over and
over again on your Epson FX or JX printer?  Or maybe you've decided to
come up with your own alphabet.  Well, FXMATRIX can add some spice to
your printouts.

FXMATRIX is a matrix program that permits you design user-created
characters, store them in a file, and download them to the Epson FX
and JX dot matrix printers.  These created characters can then be used
from any word processor, even if your word processor resets the
printer upon execution.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FXEDIT.DOC

{% raw %}
```
E













              Documentation for: FXMATRIX.COM
                                 FX.COM
                                 FXPRINT.COM

                     ***  USER SUPPORT PROGRAMS  ***

              These programs were written in Turbo Pascal by
                  J. David Sapir [Jimmy Paris Software]
                      Copyrighted 1985, 1986, 1987

              Please share these programs. They can be
              distributed freely for private use. They are
              not for commercial sale.

              If the programs are of use to you, please register
              with a donation of $18. Registered users will receive
              at least one up-date disk and notification of further
              up-dates and any new character files that have come in.
              When registering please indicate the version number and
              date listed at the start of the FXMATRIX program.
              CP/M users should indicate your computer.

                                        J. David Sapir
                                        906 Old Farm Rd.
                                        Charlottesville, VA 22903
                                       (804) 295-5496
              Revised 8.viii.88

2















          Briefly:

            FXMATRIX.COM, the main program, is a matrix program that 
          permits you design user created characters, store them in a 
          file, and download them to the Epson FX and JX dot matrix 
          printers. 

            FX.COM automatically downloads a designated character file. 

            FXPRINT.COM is a simple print driver that will print an ASCII 
          file that makes use of the flip from ROM to RAM of the FX and JX 
          printers. (CODES: <esc>%<0><0> / <esc>%<1><0>). 



            Accompanying these programs you should find ALPHA.FXF - that
          contains the default ASCII characters as described in the FX
          manual - BLOCK.FXF - a character set of block letters.
          There are other FXF files as well - that are added from time
          to time.

          FXMATRIX.COM has been modeled after the MATRIX module of VALDOC-
          2 written for the Epson QX-10 by Raising Star Industries. 
          However FXMATRIX (etc) are written to be portable to other 
          computers. There are both CP/M and MS-PC DOS versions and they 
          work the same. (The programs were originally formatted for the 
          Epson QX-10, but other CP/M versions are available - those 
          covered by the UNIFORM.COM program). 

          Versions of these programs are available for the LQ series of 24 
          pin printers [which will also work with the equivalent NEC 
          printers]. Please inquire. Untested versions exist for the 
          Okidata 92 and the Omni printers and I should be interested in 
          adapting it for other printers that permit User Defined 
          characters. Inquire. 
3

          FXMATRIX.COM

              On booting up and passing by the title page you will be 
          asked for a file name. Enter a name of up to eight letters long. 
          An extension of FXF will be added to it automatically. If you 
          wish to use your own extension you may, but it will not appear 
          in the program's directory.  In recalling a file already on the 
          disk you may see the directory of .FXF and .BAX (backups) files 
          by entering '?'or '/' after calling up an existing file or 
          starting up a new one you will move to the Main menu: 

 <E>dit         <S>tore    <N>ew           <D>irectory      down<L>oad file
 <P>rint File   Print File <#> Down<L>oad  <C>ombine files  so<R>t file
 <A>lter Highlighting                                       <Q>uit

          The current file in memory will be noted at the top of the 
          screen to the left. On the right is a listing of the keys in the 
          file that have user made characters assigned to them. 

          <E>dit (enter E) takes you to the matrix - and we'll come back 
          to that shortly. 

          Store <S> stores what is in memory. If it is an old file you 
          will be given the option of storing under a new name or using 
          its current name. If the latter the file it overwrites will be 
          converted into a backup with the extension .BAX. 


          New <N>. Either to call into memory a file from disk or to start 
          a new file. If you have changed the current file you will be 
          asked if you want save it to disk, otherwise it will be erased. 
          If you want to save it you will go through the Save routine 
          afterwhich you will be asked for a new file name with the option 
          of calling up the directory. 

          Directory <D> will bring up a directory of all files with .FXF 
          and .BAX extensions. 

          Download <L> will download the current file into the printer's 
          RAM memory. As long as the printer remains on it will print out 
          these downloaded characters. The printer resets whenever a new 
          file is brought into memory. The new file will have to be 
          downloaded if it is to be in the printer's RAM. 

          Print File <P>. This prints out the entire file giving the ASCII 
          number of each character, the character in its default and then 
          its user created form. When using the characters it is useful to 
          have this print out at hand so you can remember which characters 
          go with which keys. 

          Print File <#> Grids. This will print out the complete matrix 
          for designated  characters. You will be asked for the first 
          character to print, then the last character. If you want only 
          one character enter it twice. To print the entire file hit CR 
          twice. The ASCII number, the matrix and the character will be 
          printed. It is useful to have a matrix print out of your file in 
          case the disk is destroyed. But it is rather pokey to print, 
          taking about two minutes for eight characters. 

4
          <C>ombine files.  This will allow you to combine two files. You 
          will first be asked which file you want added to the file in 
          memory and then, after you have combined the files, whether you 
          want to change the combined file's name. 

          so<R>t file. Although a new character is automatically put in 
          its proper (ASCII) place when it is saved from the editor (cf 
          below), a file made up of two pre-existing files is unsorted. 
          Entering <R> will sort that file. 

          <A>lter Highlighting.  Allows you to adjust the high-low video 
          values (and color when available). 

          Quit <Q> to quit. If you have changed the file - edited it, 
          added to it or deleted from it - you will be asked before 
          exiting if you want to save the file. If yes, you will exit via 
          the Store routine. 


           *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

          Edit <E> - The matrix editor. On hitting 'E' you move to the 
          editor and the cursor moves to the 6 by 9 matrix to the upper 
          left and a list of options appears across the bottom of the 
          screen. 

          The cells of the matrix can be marked 'X' or left unmarked. The 
          X pattern forms to shape of the character you are designing and 
          for each column represent the printer pins to be fired. The 
          printer was nine print pins set vertically and it fires them 11 
          times for each character. There are two constraints in 
          designing. 

          1. Although there are 11 columns - spaces + lines - you may not 
          have two dots placed in adjacent columns. 2. Although there are 
          nine pins only eight can fire at one time. Thus you can either 
          mark the top row or the bottom row, but not both. 

          The menu of options looks like this:

    C -   Clear  |  CR 5 mark   dot  | E  Erase    | T  Trace   | N  Normal
    S =   Save   |  SB 0 unmark dot  | G  Get char | I  Import char
    Move: U  Up  |  D  Down | L Left | R  Right    | M  Mirror  | F  Flip
    Combine characters:       A And  | X  XOr      | O  Or      | Q  Quit
    F1    Fetch with cursor          |^D  Delete   |^X  Delete with cursor
    P + Print    |  /  ASCII/Char    | Z  print size <Small>


          The best way to learn your way around the matrix is to try it 
          out. The cursor arrows move you up - down - right - left. So do 
          the numerals: 

              8 : up         2 : down     6 : right      4 : left,
              9 : up-right   7 : up-left  3 : down-right 1 : down-left

              CR or 5             :  mark a dot with an X.
              SB (space bar) or 0 :  erase a dot.

          There are three marking modes:
              N  : mark or erase each cell as you go.
5
              T  : automatically marks a dot as you move.
              E  : automatically erases a dot as you move.

          Hitting the SB in the Trace mode will erase the dot under the 
          cursor, and hitting CR in the Erase mode will mark the dot. 


          You can move an entire character around:
              U : Up one row.
              D : Down one row.
              L : Left one column.
              R : Right one column.
              F : Flips the character over.
              M : Mirrors the character.

          P or + : to print out a sample of your character. You will be 
          asked if you want to compare it with another character. If not, 
          just hit CR. You can have this printed either normally or in 
          expanded type. Z will switch the sizes. If you want to compare 
          your characters with other user defined characters in the file 
          you must first download the file before entering the editor. 

          S : to save a character hit S. You will be asked to assign it a 
          place with either a character or an ASCII number, depending on 
          your setting. If the character is already in the file you will 
          be given the choice of assigning your character elsewhere or 
          overwriting what is already there. 

          G : to retrieve a character. When you have finished editing this 
          character you hit S and are given the option of updating the 
          character (replacing what is in the file with your new version) 
          or moving the character to a new position. 

          I : Import a character from another file.  First you will be 
          asked what character you want imported. Then you will be asked 
          which file to search. If the character is in the file it will be 
          returned to the matrix - otherwise, if the file doesn't exist or 
          the requested character is not it it - you will be returned with 
          a "nothing found message". 

          F1 : retrieve a character with the cursor.  The cursor moves to 
          the key listing in the upper right of the  screen. You move the 
          cursor with the cursor keys (or the numbers 4, 8, 6, 2). When 
          you have found the character you want hit return and it will 
          appear in the Matrix. You will need this function when in 
          combined files the same character has been used twice.  At such 
          times it is essential to reassign one of them to a new place. 
          Thus if there are, say, two a's then you fetch one of them with 
          the cursor. When it is in the matrix immediately reassign it to 
          another place with the S (save) command. 

          ^D : to delete. You will be asked which character to delete. If 
          you are toggled for ASCII then enter its number, otherwise enter 
          the character. You will be given the option of changing your 
          mind with the warning: Deleting * char *  Are you sure? <Y/N> 


          ^X : to delete with the cursor. This works like ^F, though to 
          delete rather than fetch. A delete warning will appear and a 
          chance to change your mind will be given.  This will allow you 
6
          to delete one of double character assignments that has resulted 
          from combining files. 

          C : Clears the matrix.

          / : Toggles Char/ASCII. You can change from the characters to 
          their ASCII numbers - You will know which is operating by the 
          listing of what is in the file (upper right of screen). When 
          fetching or deleting you will designate the character by either 
          the char or ASCII, one or the other, but not both. Use the ASCII 
          input for the upper ASCII numbers. 

          Q : Quit - gets you out of the matrix and back to the main menu.

          I have added one feature to the editor (inspired by FM.COM): 
          Character combinations. I am not sure how useful they are, but 
          they display a little bit of set logic. A, X, and O. By hitting 
          one of these keys you will be asked for another character to 
          combine with what you have in the matrix. 

          A (And) : combines the two with what one shares with the other.
          X (XOr) : combines the two with what they do not share.
          O (Or)  : adds the two together.

          CAUTION: The O (Or) and X (XOr) combinations violate the two 
          constraints of the matrix: adjacent columns and top and bottom 
          rows. So you must edit your O and X combinations to conform to 
          the two contraints yourself. 

           Sample matrixes:

          _____________        _____________        _____________
          |_|X|_|_|_|_|        |_|_|_|_|_|_|        |_|_|_|_|_|_|
          |_|X|_|_|_|_|        |_|_|_|_|_|_|        |_|_|_|_|_|_|
          |X|X|X|X|_|_|        |_|X|X|X|_|_|        |X|_|_|_|X|_|
          |_|X|_|_|_|_|        |_|_|_|_X_|_|        |_X_|_|_X_|_|
          |_|X|_|_|_|_|        |_X_X_X_X_|_|        |_|X|_|X|_|_|
          |_|X|_|_|_|_|        |X|_|_|_X_|_|        |_|_X_X_|_|_|
          |_|_X_X_X_|_|        |_X_X_X_|X|_|        |_|_|X|_|_|_|
          |_|_|_|_|_|_|        |_|_|_|_|_|_|        |_|_X_|_|_|_|
          |_|_|_|_|_|_|        |_|_|_|_|_|_|        |_|X|_|_|_|_|

          These three letters are default characters and are built into 
          the printer's ROM.  Note that the base line is the third row up 
          and that the top of small letters is on the third row down.  The 
          right two columns are best left free for better spacing between 
          letters. 

          The ALPHA.FXF file is made up of the default characters. If you 
          wish to alter the entire alphabet it is good to start with this 
          file. But be sure that you are working from a copy, for if you 
          save an alter ALPHA the original will first become a backup 
          (ALPHA.BAK) and then disappear.  The best way to preserve ALPHA 
          is to change its name. Do it this way: Call up ALPHA.FXF then 
          immediately hit <S>tore. You will be asked if you want to change 
          the file's name.  Reply yes <Y> and, when prompted, enter a new 
          name. You will then return to the main menu and you will notice 
          that the file in memory (the old ALPHA) appears under its new 
          name. When you come to store the altered file do it under the 
          new name and the original ALPHA will remain unaltered. 


7

          FX.COM.

          When you have developed a character set to your satisfaction you 
          can download it without booting up the main program 
          FXMATRIX.COM. You do this with FX.COM from the Command line 
          (after the A>) by entering FX followed by the name of the file 
          you want downloaded. If the extension name for the file is FXF 
          you only enter the file's main name. 

          Thus to download the file BLOCK.FXF all you do is enter FX BLOCK 
          <cr> and that will do it. To be even more efficient rename your 
          file AUTO.FXF, then all you need enter from the command line is 
          FX <cr>.  That is, if FX.COM receives nothing from the command 
          line it assumes that the requested file is AUTO.FXF. 

          You may also enter the following commands from the command line:

             T   :  narrows spacing between lines to about 1/8th of an inch
                    so graph characters will touch.

             P   :  sets the printer to proportional type.

             E   :  sets the printer to emphasized.

             0   :  sets the printer to the ROM - default - characters.
                    You will then have to change to the user characters
                    from within the document. (Cf. below on using the
                    programs.)


          These four commands may be given in any combination or in any 
          order. You needn't use Caps. They must be separated by a space 
          and they must follow the file name (if you are calling up a file 
          other than AUTO.FXF). 


         A>FX BLOCK P T gives: BLOCK.FXF with proportional and narrow
                                spacing.
         A>FX 0 E            : AUTO.FXF with default (ROM) setting and
                                emphasized type.

          I suggest putting FX.COM and your commonly used character file 
          (renamed AUTO.FXF) on your data disk to be used when needed. 

8
          *****************************************************************

          Using the programs:

          Under normal circumstances you will want to use FXMATRIX in one 
          of two ways: To replace the entire alphabet with a design of 
          your own making (as with BLOCK.FXF) or to replace a few unused 
          characters (@, |, \) with ones of your own. To work either way 
          all you need do is download the set and create your document 
          from a word processor. (If the word processor resets the printer 
          on entering you will have to download from within the program 
          (the R option in Word Star.) 

          But there are times when you will have a large set of user made 
          characters to combine with the default alphabet. The FX printer 
          permits you to do this. While printing it can shift back and 
          forth between the ROM default characters and the RAM user made 
          characters. 


          (The codes are: <esc>%<1><0> for RAM and <esc>%<0><0> for ROM.) 

          How can we make use of this feature?  That will depend on your 
          word processor. Generally, the better ones allow you to add on 
          some extra print codes. 

          For the word processors I have been able to exam here is how 
          they can setup: 

          WORD STAR 3:  WS-3 permits 4 user defined print codes that are 
          assigned to Control letters. Here you would assign the RAM code 
          to one of them and the ROM code to another. 

          WORD PERFECT (for older versions): There are two steps. First in 
          the general set-up, call up the Define Alt & Ctrl key mapping 
          option. When there, assign to an alternate key (or control key 
          if you prefer) one of the available characters, from the lower 
          32 ASCII numbers or the upper 128-255 numbers. Do this for the 
          RAM call and then again for the ROM call. When done exit WP and 
          call up the PRINTER.COM, Printer Definition, program. There go 
          to the Edit or define Fonts only option and call up the Epson FX 
          file. Then find the character that you are to assign to the ROM 
          code and edit the 'String sent to printer' option so it will 
          read <esc>%<0><0>. Do the same for the RAM key entering this 
          time <esc>%<1><0>. That should do it. 

          Then when using WP you enter the new RAM key whenever you want 
          your special characters and the ROM key whenever you want to 
          return to the default. (Make sure that the WP print driver is 
          hooked up to the Epson font file.) 

          
          PC-WRITE: With the MENUPRT program you first set up a PR.DEF 
          file for the FX. Call up MENUPRT and follow your nose. After 
          running the program you will exit to the DOS (A>) and will 
          notice, in calling the directory (DIR) that there is now a file 
          called PR.DEF (not to be confused with ED.DEF). Before sending 
          a file to the printer the PR.EXE looks for this ruler file and 
          follows its customized commands. (PC-Write 3 reads the PR.DEF 
          file when it is first called. PR.EXE has been integrated with 
9
          the main program, ED.EXE.) 

          Enter the PC editor and call up the ED.DEF. You will see lines 
          like these: 
                       #B= 2+27,69-27,70
                       #C= 6+15-18
                        .
                        .

                       #L=25+27,83,1-27,84

          #B= 2 indicates that Alternate key B has been assigned to ASCII 
          number 2. When the print driver comes across ASCII 2 it will 
          start sending codes to the printer. The first time it sees 
          ASCII 2 it will send (after the + sign) ASCII 27 (escape) then 
          ASCII 69. This will turn on the bold.  When the print driver 
          encounters 2 again in the same line it sends the codes 
          following the - sign, in this case 27 followed by 70. This 
          turns off the bold. These type of commands work for one line 
          only. If the bold is not turned off within the line, it will 
          automatically go off after the CR. 

          Now. Find an unused alternate key, say alternate R, which PC-
          Write assigns to ASCII 30. Then enter the following code line: 

          #R=30 +27,37,1,0-27,37,0,0

          and save the file with this new code.

          With this new code line in place PC-WRITE allows you to flip 
          back and forth from ROM to RAM in two different ways -

          Within a single line: - Enter Alt R and the printer will flip 
          into RAM until another Alt R or the end of the line is reached. 

          Within a text: - To set the print driver to use the RAM beyond 
          a single line you must use the  Dot Command. A dot command is 
          written in the extreme left margin and starts for with alt G 
          (Ascii #11) then with a dot. To turn on a font you use the .R: 
          dot command followed by the assigned alternate letter which in 
          our case is R. To turn it off you use instead .Q: followed by 
          R. Thus 

          .R:R

          turns on the RAM and

          .Q:R

          turns it off.

           
          PC-Write 3 allows you to enter the RAM/ROM switches directly by 
          using the Alt key along with the numeric pad. Follow the 
          instructions below for WORD. 

          Rev William Moorhead supplies the following guide for using 
          LQMATRIX with Microsoft WORD: 

          In accordance with the usual "FXMATRIX" instructions, download 
10
          your font at the DOS prompt (A> or C>) using the command:  FX 
          fontname (FX fontname 0 if you want to reset the printer 
          default ROMfont for normal printing).  The download program 
          will signal when it is completed and return you to command 
          level (the DOS prompt). 

          Load Microsoft Word as usual. 

          To toggle on the downloaded custom RAMfont, send the printer 
          control code sequence "ESC % 1."  From Word this is done by the 
          sequence "<Alt-27> % 1 0", where <Alt-27> means:  hold down the 
          Alt key while entering 2 7 on the keypad, then release the Alt 
          key; then without spaces enter the percent sign and the numeral 
          one. 

          To toggle from the custom font back to the default, enter 
          "<Alt-27> % 0 0".  This restores the printer to its built-in 
          ROMfont. 

          (The use of <Alt> and a keypad number sequence is the standard 
          way in which ASCII codes are sent to the printer from within 
          Word; that's how the extended character set and graphics 
          characters are accessed.  "27" is the ASCII code for "Esc".) 

          You may wish to create macros to toggle the printer control 
          codes; this can be done in the usual way.  See the Word 
          documentation. 

                    
          Mr. Hugh Maddoxs of Reston Virginia sends these instructions 
          for XyWrite III+: 

          Download the desired font from the command line, using the 
          FX.COM program entering the filename and 0 to set the printer 
          for the default (ROM) characters. 

          Load up XyWrite.  At the place in your text where you wish to 
          change to the user font (RAM) proceed as follows: 
          
          Hit F5 then write in PI, enter a space, then hit the esc(ape) 
          key followed % (percent key) then hit shift alternate 1, then 
          shift alternate 0 then hit return (CR). That will take you to 
          your text and you will see the funny face and a double 00. 
           [i.e. F5 PI <esc> % <alt-shf>1 <alt-shf>0 (CR)]
          When you wish to return to the default character follow the 
          same routine, except you enter shift alternate 0 two times. 
          Two double zeros 00 00 will mark then null characters 
           [i.e. F% PI <esc>% <alt-shf>0 <alt-shf>0 (CR)] 

          PI stands for 'printer insert.'

          [ I'll add more instructions as I receive information about other
          word processors. ]

          *******

          Not all word processors allow you to enter your own codes. For 
          these programs I have written (am in the process of writing) 
          FXPRINT.COM. This program will work with straightforward ASCII 
          codes: 

11
         FXPRINT.COM 

          [ Cf. ADDENDUM #3 for the Upper to Lower ASCII rerouting. ]

          **** This program is in the process of being developed.
               Suggestions would be welcome.   ****

          I have written a simple print driver to go with these user 
          defined character programs. The reason I have done this is so 
          you may make use of the FX printer's ability to switch back and 
          forth between default characters that are set in ROM and user 
          defined characters that have been down loaded into the printer's 
          Buffer (in RAM). This will become useful whenever you wish to 
          define a large number of characters and use them along with the 
          ordinary characters. 

          The FXPRINT driver prints ASCII documents and prints them 
          responding to the following codes: (There are two separate sets 
          of codes and you can take your pick: ^B,^F,^S,^W,^X or (for 
          PC_Write) Alt: B, D, F, I, U. [Attention: outside of the PC-
          Write environment the alternate keys are read respectively as 
          ^B, ^P, ^\, ^U, ^W ] 

          ^B or Alt B will toggle the Bold type on and off.

          ^W or Alt D will toggle the Wide  or Expanded type.

          ^S or Alt U will toggle the Underline.

          ^X or Alt I will toggle the Italic type. (^I is reserved for
                    TAB in WS.) -

          The Ctr keys are intended to go with Wordstar (and similiar 
          programs) that permit you to enter controls (with Wordstar ^P^B 
          enters ^B into the text. [For Word Star, be sure you are 
          creating a 'non-document' file.] 

          Finally ^F (for Funny) or Alt F. This allows you to control the 
          flip from ROM characters, the ones permanently in the printer, 
          and the user defined characters that have been down loaded into 
          the printer's buffer (RAM). 

          There are several combinations that are possible when using the 
          ^F/Alt F, control: 


         1. The ^F/A F can be used as a toggle where it works like the 
          other controls. Use it once and it changes character sets, use 
          it again and you return to the original set. This manner would 
          be useful if you wished to switch back and forth between two 
          complete character sets - the one in ROM and the other in the 
          RAM buffer. An example would be switching between the regular 
          default characters and a set like block letters or more 
          esoterically, between Roman and Cyrillic alphabets. 

          2. The ^F/A F an be used on a one character at a time basis. You 
          would use it when you have defined a limited number of 
          characters and assigned them to common (and similiar letters). 
          The flip here works only for the following letter.  Thus you 
          enter something like: 

12
              fran^Fcais

          and the printer gives the RAM (user defined) alternate for c 
          (the French cedilla in this case). All subequent letters would 
          be ordinary. 

          3. For both 1. and 2. you have the choice of setting the Default 
          at either the ROM or the RAM set.  For example, if you have 
          written a Cyrillic alphabet and wish to write something in 
          Russian with occasional references in English you make the 
          Cyrillic set, which is user defined, into the default set.  If 
          the bulk of your writing uses the Roman alphabet you would do 
          the reverse. 

          ** NB: FXMATRIX allows you to assign characters to the upper
             ASCII numbers 161-255. Since these numbers, in ROM, hold the 
          printer's Italic characters you print them by using the Italic 
          toggle (A I or ^X). Thus '~a' will give you italic 'a' and '^F ~ 
          a ' will give you whatever you have assigned to ASCII #193. 

          The main menu looks like this:

  disk   <D>irectory           <P>rint File              Change <C>odes
  Change <V>ertical margins    down<L>oad FXF file       <Q>uit
  <E>mphasized type  -  [On ]

          D - shows you the disk's directory. 


          P - takes you to the Print driver. You will be asked to enter a 
              file name to print. If it is on the disk you will then be
              asked for the number of copies to be printed. CR alone will
              indicate only one. You can abort the printing by hitting any
              key - although you have to be a bit persistent at this so as
              to catch the computer's attention!

          C - takes you to a menu that offers 3 yes/no selections. 
              1. To use the Ctl codes (indicated as <Wordstar>) or to
                 use the Alt <PC_write> codes.
              2. To toggle between ROM or RAM default.
              3. To use the ^F/A F either as a single shift to a special
                 character or as a Toggle to shift back and forth between
                 ROM and RAM. Default code will depend on the ROM/RAM
                 setting in 2.

          --- On entering the program the Default settings are given
          as: 1. Wordstar, 2. ROM, 3. Single Character.  And they are
          recorde across the bottom of the screen. ---

          V - to change the vertical margins that have the default
              setting of 6 lines Top, 5 lines Bottom and 55 lines for the
              text.

          L - allows you to download a .FXF file from within the program.
              If you download this way the name of the file will appear
              at the bottom of the scrren: [FF.FXF] has been downloaded.

          Q - to quit the program.

          E - Allows you to set (or unset) the Emphasized mode of printing.


13

          Sometimes you will want to define graphic characters, maybe, an
          entire set, allowing you to build various designs or diagrams.
          Now if you do this with the default line spacing of 1/6th of an
          inch your characters will not touch. In order to make them touch
          the spacing must be set at 7/72th of an inch. I have made it 
          possible to switch back and forth between these two settings. To 
          do this you use the Wordstar convention of placing a dot control 
          code at the extreme left margin of the page (absolute column 1). 
          Thus: 
             .L1  sets the spacing at 7/72th for the graphics.  When using
                  this be sure to double space your text, otherwise the
                  letters will run together.
             .L2  sets the spacing at the default 1/6th of an inch. When
                  you enter this program you will automatically be in this
                  setting. You will leave the program in the last setting
                  given. (The printer is NOT reset.)


          I am not too sure how useful this print driver is. Most word 
          processors that permit user entered print commands should cover 
          everything here (and a lot more). But you never can tell. 


14
          The ultimate success of these programs is the accumulation of 
          useful character files. Therefore, if you make any interesting 
          FXF files I should very much like to have copies. I will add 
          them to the distribution disk and return your disk with all 
          recent updates. 


          Acknowledgements:

          The following procedures were taken (and somewhat modified) from
          TUG Lines, the journal of the Turbo Users Group:

          Brain, Marshall             Fastwrite (an INLINE procedure in
                                      machine language that permits very
                                       fast screen writing in DOS.)
                                      #9 1985.
          Flemer, Thomas A.           CP/M Directory.   #4 1984.
          Freeman, Scott              MS-DOS Directory. #6 1985.
          Taylor, Don &
            R. L. Wulffson MD.        MONOSPFX.INC (procedures for
                                      manipulating the PC screen).
                                      #6 1985.
          Mr. H.L. Phillips of Vereinsstr. 8 / 6000 Frankfurt 60 / West 
          Germany designed these FXF fonts: SERIF, CAPS, DIGIT, GREEK, 
          RUSS, ROUND, ITALIC, GERMOD, and GERUND. 

          Mr. Jack Dodds of Aurora, Ontario created OYMPIAS.FXF that 
          emulates the Oympia wheel #787-304 for mathematical symbols. 

          
          My sincere thanks for everyone who has shown interest in this 
          program by registering for it and/or its sister, LQMATRIX. 

                                                J. David Sapir.

15

        ADDENDA

          #1

          I have added a utility program called FXCONVERT.COM. The point
          of this utility is to permit transfering character files (.FXF)
          which are written in binary form from one operating system to
          another (CP/M to DOS and the reverse). On entering the utility
          you will be given the choice of converting a binary file (.FXF)
          to an ASCII text (.FAC), or the reverse. To get from CP/M to DOS
          first convert an FXF to FAC and then (via UNIFORM, etc.) copy to
          DOS. There, in DOS, convert the FAC file back into a FXF file.
          To do this you will need FXCONVERT in both CP/M and DOS.

          FXCONVERT allows you, if you are curious, to see the byte
          numbers that get downloaded to the printer. For each line you
          will see 13 numbers. The first number is the ASCII number
          assigned to the character. The second number is the 'attribute
          byte.' This tells the printer whether it should fire the top pin
          or not (if the top pin fires, the bottom pin won't), and how
          much space to allow on either side of the character. The latter
          is for proportional writing.  The remaining 11 numbers
          determine, for each column (there are 11 columns) which pins are
          to be fired.

          It also allows you to change the byte values and hence the shape
          or locality of a character.


          #2

          I have written a version of FXMATRIX - currently called FXDEV -
          that will make characters using more than one ASCII location.
          There are five sizes: default, wide, tall, big and NLQ. Wide,
          tall and NLQ use two locations and big uses four. The FX series
          of printers permit you to redefine about 240 characters - thus
          you can develop a large set of about 60 big characters.
          Unfortunately, few of the FX clones (for example the Citizen
          printers) allow you the redefine beyond the 33-125 range.

          I have yet to finish developing a print driver for FXDEV and
          probably won't due to lack of registered interest. But I might
          with appropriate encouragement.

          #3

          At the request of Mr. H.L.Phillips: - an Upper ASCII rerouting
          that permits one to have the IBM upper ASCII locations assigned
          to accented (etc.) characters replace lower ASCII positions.
          The upper ASCII (IBM) characters that have the accents acute,
          grave, umlaut, tilde, circumflex and the Swedish circle reroute
          as follows:

          The appropriate letter is printed, the printer backspaces and
          with the Epson exc 'j' n command reverse feeds a bit. The accent
          is hit and the form returns with the esc 'J' n.  The accent is
          to be located in the RAM equivalent to the ROM accent. Umlaut is
          to be assigned to the RAM of ", the acute is to be assigned to
          the RAM of ' etc., along the Swedish circle is assigned to the
16
          RAM of {.  Only BLOCK.FXF and the default ALPHA.FXF
          has been fixed up this way. Experiment and see what happens and
          make chances when necessary.

          French cedilla reroutes to } and the German beta to |.


          #4

          Until version 5.812 of FXMATRIX the proportional spacing was
          figured incorrectly. [The spacing is stored in the 'attribute
          byte']. If you have made FXF files with earlier versions of
          FXMATRIX then the programs FIXFXF and AUTOFXF will make the
          corrections. (The former corrects file by file, while the
          latter does all of the files on the disk without prompting. In
          the absence of either of these you can make the corrections by
          loading into the editor character by character, immediately
          restoring each as you go along.


```
{% endraw %}

## IM.DOC

{% raw %}
```
                                 ICON MAKER
      
       I   wrote  this  program  as  a result of  a  frustration   that  
       I  experienced   in  trying  to put dot graphics  data  into   a  
       data segment  area  using define byte  statements.   The  colors 
       and  dots  just  did not seem to be easy  to  convert  into  the 
       desired  bytes.    Other  programs  allowed   the  creation   of 
       graphics  which  could  be  read from disc and  displayed  by  a 
       program  but  I  wanted  to  put  the  data directly  into   the  
       program data area.  Therefore,  I wrote this program to allow me 
       to do just that.

       All three of the graphics modes are supported,  the 640 X 200 two 
       color, the 320 X 200 four color, and the 160 X 100 sixteen color.  
       The first two are supported by the ROM BIOS, the later is not.  I 
       have included a file on this disk that is a reprint of an article 
       that I wrote for the North Texas IBM PC News that explains how to 
       produce graphics for this mode. 
       
       Aditionally, as I worked with this program, it occured to me that 
       it  could be used to produce patterns for needlework of the  type 
       called  counted cross stitch.   That is why I included the  print 
       option to allow those patterns to be created and edited on screen 
       and then the pattern printed. 
       
       The  save option allows the data presented on screen to be  saved 
       into  an ASCII file that can be inserted into the data segment of 
       your MASM programs to define the graphics you have created. 
       
       I  hope it will be fun for you and will help you create  graphics 
       for your programs as it did for me. 
       
       I  am  releasing  the  program to the public  domain  as  a  user 
       supported program.   If you like it and find that using it  helps 
       you  in your program generation or your needlework,  show me that 
       you  do  by providing support.   A registered  user  has  certain 
       advantages.   You  will receive notification of all updates and a 
       copy of the source code.   The registration fee is a ridiculously 
       low ten bucks.   When you register,  let me know if you want  the 
       source code so that you may alter it to suit your needs.   I will 
       send it to you for the cost of mailing which is five dollars.
        
       The   program   is written in the C language and  compiled  with  
       the  Lattice  C compiler.    There are a few  assembly  language  
       routines that  are  callable  from C.    It does not use any   C 
       library.    All  of the support graphics functions  are included  
       in the source code.    This includes the three  routines written  
       in  assembly  language that write  the  graphical  data produced 
       by the program to the screen.

       You  have heard all of the good reasons that you  should  support 
       the user supported programs so I will not repeat them.   All that 
       I  ask is that you review some of those reasons in your own  mind 
       and  that  if you do not wish to register,  copy this disc for  a 
       friend.    Maybe  that friend will support the   program.  In any
       event, have fun with it.       











                        REGISTRATION FORM



Mail to:

Sid Nolte
13858 Peyton Dr.
Dallas, Texas 75240




I liked the ICON MAKER program and want to be a registered user.


Registration fee   ($10)_______________


Send source code   ( $5)_______________


            Total       _______________







Your name _______________________________________________________________


Your Adress _____________________________________________________________


City, State, Zip ________________________________________________________




Comments:_________________________________________________________________























      
                               THE ICON MAKER 
      
                             TABLE OF CONTENTS
      
      Introduction................................................1
      The Menus ..................................................1
        Starting Menu.............................................1
        The Size Menu.............................................1
        The Graphics Mode Menu....................................2
        Read from File Menu.......................................2
        Save to File Menu.........................................2
        The Quit Menu.............................................2
      Graphics Creation...........................................3
       The Arrow Keys.............................................3
       Move.......................................................3
       Erase......................................................3
       Draw.......................................................3
       Color......................................................3
       Palette....................................................4
       Invert.....................................................4
       Save.......................................................4
       Line Printer...............................................4
       Quit.......................................................5
       Background.................................................5
       Graphics...................................................5
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      












      INTRODUCTION
      
      Icon  Maker  is a program to allow you to create graphical  icons 
      and cross stitch graphics interactively in any of three graphical 
      modes supported by the IBM PC family.   These three modes include 
      the  high  resolution 640 X 200 two color,  the 320  X  200  four 
      color,  and the 160 X 100 sixteen color.   The latter mode is not 
      supported by the ROM BIOS services. The Icon Maker will print the 
      graphics  in a form suitable for the formation of a cross  stitch 
      pattern.   The graphics produced may be saved in such a form that 
      it can be directly inserted into the source of a MASM program for 
      use in graphical programs you may produce.
      
      I have found that producing the dot by dot representation of data 
      to be included into a program is extremely tedious.   I wrote the 
      program as an aid in that process.
      
      Most of the features of the program may be accessed by  selecting 
      the  options  displayed  on the screen and by responding  to  the 
      displayed menus.   However, the following short descriptions will 
      enable you get a quick view of the capabilities of the program.
      
      Have fun.
      
      
      THE MENUS
      
      There  are a number of options available to you in the Icon Maker 
      program.  In order to reach any of these options such as the mode 
      of the graphics produced.  These menus are distinguishable by the 
      red  bordered blue boxes displayed in the 80 column  color  mode.  
      The  title screen illustrates some of the graphics that might  be 
      produced by the program.  After you have seen it and it no longer 
      is  of interest,  any key will pass you on to the main  selection 
      menu.
      
      
      THE STARTING MENU
      
      This  menu  provides for the selection of either creating  a  new 
      graphics  shape  or reading one that you have previously  created 
      for further editing.   After you have created your graphics,  you 
      will  be returned to this menu for selection of another  activity 
      or for returning to DOS.
      
      
      THE SIZE MENU
      
      If  you  have  chosen to create a new icon  shape,  you  will  be 
      requested  for the height and width of the shape  produced.   The 
      graphics  editing  is  done  on screen in a 50 high  by  60  wide 
      working area.   However, you may work on one much larger, that is 
      100 high by 120 wide.   The program will display the current 50 X 
      60 area in the display window.
      
      



                                   1




    THE GRAPHICS MODE MENU

    After selecting the size of the icon you have created,  you  will 
    be  requested to select one of the three graphics modes supported 
    by the program.  The selections presented are the high resolution 
    640  X 200 two color mode,  the medium resolution 320 X  200  two 
    color mode, or the low resolution 160 X 100 sixteen color mode.

    READ FROM FILE MENU

    In  the event that you have determined that you wish  to  perform 
    editing  on a previously defined graphics shape by selecting that 
    option from the starting menu,  this menu will appear.   You  are 
    directed to enter the name of the file.   This must be a DOS file 
    name of the file that contains your graphics shape.  In the event 
    that the named file can not be found or if you have not entered a 
    proper  file  name,  you  will be directed to either  re-enter  a 
    proper  file name or return to the starting menu by pressing  the 
    escape key.


    SAVE TO FILE MENU

    At any time in the creation of your graphics forms, you may elect 
    to save the completed or partially completed graphics.  This menu 
    is selected by simply pressing the 'S' or 's' key.   Again,  this 
    menu requests you to name a DOS file.   If a proper file name  is 
    selected, the return key will cause the graphics data to be saved 
    to the disk file named.  When the file has been written, you will 
    be returned to the starting menu.

    The file that you have saved is an ASCII file that represents the 
    graphics data.  It represents the dimensions of the shape and the 
    data that will be written to the screen to display the shape.  It 
    is  in  a form that is acceptable by the macro assembler (in  the 
    form of dw and db statements) and can be used in the data segment 
    of  your  program  to define your shape.   It is  preceded  by  a 
    comment  statement which should not be disturbed if you  plan  to 
    perform further graphics editing on this file.   The program uses 
    this comment to determine the mode of the graphics data.  Each of 
    the three graphics modes are written to the screen in a different 
    manner so that those produced in one mode can not be displayed in 
    another.


    THE QUIT MENU

    The quit menu can be selected at any time in the icon creation by 
    simply pressing the 'Q' or the 'q' key.   You will be warned that 
    the  graphics will not be saved if you quit at that  time.   This 
    menu is provided to allow you to quit the process at any time.








                                   2






      GRAPHICS CREATION

      After  you have selected the graphics mode either by  reading  an 
      old  file or by selecting the size and mode for a new  icon,  you 
      will  have  a number of options available to you at any  time  to 
      allow you to perform the creation of the graphics.  Those options 
      are displayed to you along the right edge of the screen.  Any one 
      of them is selected by pressing the single key as displayed.


      THE ARROW KEYS

      The  arrow  keys are the only active keys during icon  generation 
      that  are not on the display option.   They direct the motion  of 
      the  cursor  of course and include the four direction  arrows  as 
      well as the "corner" direction.  For instance the "page up" arrow 
      will move the cursor up and to the right.


      MOVE

      The  move option is selected by pressing the 'M' or 'm' key.   It 
      with  the  Erase and Draw option allows you to select  what  will 
      happen when you move the cursor.   The move option allows you  to 
      move  the  cursor from the current location to any  other  screen 
      location without changing any of the state of any of the graphics 
      over which you are moving.


      ERASE

      The erase option is selected by pressing the 'E' or 'e' key.   It 
      allows you to erase any area over which the cursor moves.


      DRAW

      The  draw option is selected by pressing the 'D' or 'd' key.   It 
      allows  you  to place the current active color at any  area  over 
      which the cursor moves.


      COLOR

      The color option is selected by pressing the 'C' or 'c' key.   It 
      allows  you  to select the color of the graphics to be  produced.  
      Pressing the key several times allows you to see that the  colors 
      are selected in sequence.  The current color is displayed so that 
      you  might  see  what color is active.   If the  draw  option  is 
      active,  that  color  will be left behind at each of  the  cursor 
      motions.








                                   3






      PALETTE

      The  palette  option is selected by pressing the 'P' or 'p'  key.  
      It is valid only for 320 X 200 four color mode since that is  the 
      only  graphics  mode for which a palette selection  is  utilized.  
      This  key  causes  a switch between the two  available  palettes.  
      When the data is saved to disc,  the state of the palette  switch 
      is  not  preserved with the data so that you will be required  to 
      restore the palette after recovering your data.


      INVERT

      The invert option is selected by pressing the 'I' or 'i' key.  It 
      will reveal to you three options as to how you wish to invert the 
      icon  you  have thus far produced.   The 'H' key will invert  the 
      image about the horizontal axis,  that is the top row becomes the 
      bottom and the bottom row becomes the top.   The 'V' key  inverts 
      the  image  about  the vertical axis.   The 'C' key  inverts  the 
      color.   In  the two color mode,  black becomes white  and  white 
      becomes black.  In the four color mode, all colors represented by 
      the two bit value "X" becomes the two bit value "3 - X".   In the 
      four  color  mode,  the four bit nibble representing one  of  the 
      sixteen colors "X" becomes "15 - X".


      SAVE

      The  save option is selected by pressing the 'S' or 's' key.   It 
      will cause the save menu to be displayed and it will request  the 
      file name for the file on which the icon graphics is to be saved.  
      The  file  is  an ASCII file suitable to be included  in  a  MASM 
      program  and is of the form of the dw and db statements  defining 
      the  data represented.   This not only allows you to recall  your 
      image  for  further editing but also allows for the inclusion  of 
      your graphics into your program data segment.


      LINE PRINTER

      The  line printer option is selected by pressing the 'L'  or  'l' 
      key.   Unfortunately,  it  would  be  preferable  to  select  the 
      printing  by  pressing the 'P' key but it is devoted  to  palette 
      selection.    Selecting  the  printer  option  will  produce  the 
      graphics  in two formats.   One format is in the form that may be 
      used  as a "counted cross stitch" pattern with the color  legend.  
      The other form is simply a very small dot for dot black on  white 
      image of the drawing.












                                   4
 





      QUIT

      The  quit option is selected by pressing the 'Q' or 'q' key.   It 
      allows  exit  from  the graphics production  without  saving  the 
      image.   It  allows you to start over in the event that you  have 
      decided  not to proceed with the current activity without  saving 
      it to disc.


      BACKGROUND

      The background option is selected by pressing the 'B' or 'b' key.  
      It has meaning only for the color graphics modes and then  really 
      only for the 320 X 200 graphics mode.
      
      
      GRAPHICS
      
      The graphics mode is selected by pressing the 'G' or 'g' key.  It 
      allows  you to see how the image will look when displayed in  the 
      actual  mode  selected.   Actually the images are produced  in  a 
      dimension  larger than that being produced.   This option  allows 
      you  to  see how it will look if placed into the data segment  of 
      your program and displayed in the mode selected.



































                                   5
```
{% endraw %}

## OLYMPIAS.DOC

{% raw %}
```
The file OLYMPIAS.FXF, used together with FX.COM, allow the symbol wheel of
the Olympia Compact 2 (wheel number 787-304) to be emulated on the Epson FX
printers. This allows a large report containing mathematical symbols to be
printed on the FX for proofreading, before being printed on the Olympia
(which takes forever!).

The following differences between the Olympia and the FX will exist after
OLYMPIAS.FXF is downloaded.

- The alternate character set is activated and deactivated on the Olympia by
changing type wheels; on the FX, by the ESC % 01H and ESC % 00H escape
sequences. Word processors like MS WORD can handle this with an appropriate
printer definition file.

- The Olympia has a "special symbol area" which on the symbol wheel contains
six characters, four for constructing square brackets, a dagger, and an
accent. These are not included in OLYMPIAS.FXF.

- Some of the characters on the symbol wheel are designed to be combined with
half-line roll up and roll down movements to make large symbols such as
brackets, integration signs, and the like. These won't work well on the Epson
because characters seperated vertically by one line can't be made to overlap.

Acknowledgement is due to Wheatland Design Laboratory, originators of program
WXMX80. This character set was constructed using the GREEK.CHR file included
with the program WSMX80 on PC SIG 526 as a starting point.  Most of the
characters have been modified to adapt to the FX printer.

Jack Dodds
Geo Acoustics Inc.
Box 772
Aurora Ontario Canada
L4G 4J9

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0485

     Volume in drive A has no label
     Directory of A:\

    ALPHA    FXF      1209   2-06-88   4:03p
    AUTOFXF  COM     13811   2-07-88   3:52p
    BLOCK    FXF      1196   2-07-88   3:47p
    CAPS     FXF      1222   5-30-89  12:43p
    CONTENTS FX       1035   9-23-89   4:39p
    DESCRIBE FX       1575   9-23-89   4:30p
    DIGIT    FXF      1222   5-30-89  12:46p
    DOTGRAPH TXT      6272  10-17-85   7:46p
    FILE0485 TXT      1689  12-06-89  12:01p
    FIXFXF   COM     13694   2-07-88   3:51p
    FX       COM     15208   1-09-88  10:59a
    FXASCII  COM     15100   6-07-88   9:34a
    FXEDIT   DOC     39796   6-06-89  12:23p
    FXMATRIX COM     51729   1-05-89   5:21p
    FXPRINT  COM     28128   2-07-88   3:02p
    GERMOD   FXF      1222   2-07-88   3:47p
    GERUND   FXF      1222   2-07-88   3:47p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079   9-20-89   9:51a
    GRAPH    FXF      1248   2-16-86  12:15a
    GREEK    FXF      1209   5-30-89   2:43p
    IM       DOC     17280  10-17-85   7:30p
    IM       EXE     51072  10-17-85   7:51p
    ITALIC   FXF      1222   2-07-88   3:59p
    MANUAL   BAT       147   6-08-88   3:02p
    OLYMPIAS DOC      1570   6-09-88  10:25a
    OLYMPIAS FXF      1235   5-30-89   2:58p
    ROUND    FXF      1222   5-30-89   2:49p
    RUSS     FXF      1222   5-30-89   2:39p
    SERIF    FXF      1222   5-30-89   2:50p
    SIMPLE   FXF      1222   5-30-89  12:42p
    THAI     FXF      1170   2-07-88   3:47p
           32 file(s)     277488 bytes
                           23552 bytes free
