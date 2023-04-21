---
layout: page
title: "PC-SIG Diskette Library (Disk #856)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0856/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0856"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FUNCTION KEY HELPER/FONT EDITOR/GROCERY"

    Make lists of the uses of function keys for various programs and add or
    edit a function-key template.  Many are already included on this disk --
    Lotus 1-2-3, WordStar, WordPerfect, Multimate, PROCOMM, SuperCalc, RBBS,
    Turbo Lightning, and more.
    
    Once a template is created, you may print the function-key assignments
    for quick and easy reference.  Up to eight templates may be printed on a
    page and they include the Shift, Ctrl, and Alt-function key sequences
    in addition to the normal uses.
    
    Design and display your own special font characters.  Two font editors
    have been provided: one for medium-resolution modes and the other for
    high-resolution mode.
    
    After a font file is loaded or created, the entire font set is displayed
    at the bottom of the screen (all 128 characters) and the upper-right
    corner displays the bit mapping of a single font set.  You can edit each
    bit or pixel of a certain character.  The character can be rotated,
    moved, inverted, copied, and saved for future use.
    
    The upper-left corner contains a menu of function-key commands for easy
    reference.  Once you have created a font set to your satisfaction, you
    can access and use the file with Assembler, Pascal, C, BASIC or any
    other language that allows you to load the font file into a specific
    location in memory and then program DOS to acknowledge that location.
    
    FONT EDITOR will not only help you to create your own fonts, but it can
    also help you design game graphics characters that make moving screen
    objects easier and neater to code.
    
    Save your budget and your diet. Never go into a grocery store without a
    grocery list and don't deviate from it once you're in the store. Know
    what you need, go get it, and get out while you're still in control.
    How? Use GROCERY!
    
    The marketing specialists know that if we wander around without a
    specific idea of what to buy, we're more likely to "impulse buy."
    GROCERY keeps track of grocery items bought on a regular, or irregular,
    basis. Items are stored in aisles, and the program will handle up to
    30 aisles with 36 items in each. Duplicate the floorplan and layout of
    your favorite store. Once all the data is entered, you can print out the
    entire list or only the items that you select. The printout is quick
    and organized according to aisle.
    
    A few more words of advice -- never shop hungry and don't look at the
    aisle end-caps!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0856.TXT

{% raw %}
```
Disk No:  856
Disk Title: Function Key Helper/Font Editor/Grocery
PC-SIG Version: S1.1

Program Title: Function Key Helper
Author Version: 1987
Author Registration: $20.00
Special Requirements: None.

Make lists of the uses of various function keys for various programs and
add or edit a function-key template.  Many are already included on this
disk -- Lotus 1-2-3, WordStar, WordPerfect, Multimate, PROCOMM,
SuperCalc, RBBS, Turbo Lightning, and more.

Once a template is created, you may print the function-key assignments
for quick and easy reference.  Up to eight templates may be printed on a
page and they include the Shift, Ctrl, and Alt-function key sequences
in addition to the normal uses.

Program Title: Font Editor
Author Version: 1987
Author Registration: $10.00
Special Requirements: CGA or EGA.

Design and display your own special font characters.  Two font editors
have been provided: one for medium-resolution modes and the other for
high-resolution mode.

After a font file is loaded or created, the entire font set is displayed
at the bottom of the screen (all 128 characters) and the upper-right
corner displays the bit mapping of a single font set.  You can edit each
bit or pixel of a certain character.  The character can be rotated,
moved, inverted, copied, and saved for future use.

The upper-left corner contains a menu of function-key commands for easy
reference.  Once you have created a font set to your satisfaction, you
can access and use the file with Assembler, Pascal, C, BASIC or any
other language that allows you to load the font file into a specific
location in memory and then program DOS to acknowledge that location.

FONT EDITOR will not only help you to create your own fonts, but it can
also help you design game graphics characters that make moving screen
objects easier and neater to code.

Program Title: Grocery
Author Version: 1.3
Author Registration: $10.00
Special Requirements: None.

Save your budget and your diet.  NEVER go into a grocery store without a
grocery list and don't deviate from it once you're in the store.  Know
what you need, go get it, and get out while you're still in control.
How?  Use GROCERY!

The marketing specialists know that if we wander around without a
specific idea of what to buy, we're more likely to ``impulse buy''.
GROCERY keeps track of grocery items bought on a regular, or irregular,
basis.  Items are stored in aisles, and the program will handle up to
30 aisles with 36 items in each.  Duplicate the floorplan
and layout of your favorite store.  Once all the data is entered, you
can print out the entire list or only the items that you select.  The
printout is quick and organized according to aisle.

A few more words of advice -- never shop hungry and don't look at the
aisle end-caps!

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FONTEDIT.DOC

{% raw %}
```









                    Font Editing and Printing Package

                               Version 1.2

                                -- by --

                       Synergy Software of Nebraska
                            904 Lariat Circle
                           Papillion, NE  68046


          Copyright (C) 1986,1987 by Synergy Software of Nebraska

          Synergy  Software  of Nebraska (SSoN)  is  distributing 
          FONT  EDITOR  under  the User  Support  concept.   This
          utility  may  be freely distributed to  all  interested 
          individuals  without further authorization  or  request
          from SSoN as long as the cost of distribution does  not 
          exceed $6.   However,  if you  like the utility,  we do 
          request  a $10 registration fee,  which entitles you to 
          information  on  the  latest copy  of  this  and  other 
          packages designed by SSoN.

              SYNERGY SOFTWARE OF NEBRASKA RESERVES ALL OTHER  
                         COPYRIGHT PRIVILEGES.

          All files to this package must remain intact and unmod-
          ified and the entire package cannot be sold, although a 
          distributing  fee of up to $6 may be applied.

          Since  this  utility is being distributed  without  any 
          charge  or  obligation  to  buy,  Synergy  Software  of 
          Nebraska  disclaims all warranties with respect to  the 
          contents of this package and specifically disclaims any 
          implied  warranties  of merchantability or fitness  for 
          any particular purpose.  (In other words, "Don't look a 
          gift horse in the mouth.")

          The source  code, incidentally,  is  available in  Turbo
          Pascal for $10.

            Requires IBM-PC or campatible machine with CGA video.









                                1                      Font Editor Version 1.2









                          Font Editor : Version 1.2


This package:

     One  of the great things about the IBM-PC and family of computers is  the 
ability  to  create and display your own special font  characters.  This  Font 
Editor  package not only will help you design the special characters with  the 
interactive  programs,  but  contains utilities to demonstrate the  method  by 
which the fonts can be generated on the display console.
     There  are,  unfortunately,  several restrictions placed upon this  capa-
bility.   First,  the  special  characters  can only be  displayed  using  the 
graphics modes of a Color/Graphics Adaptor (CGA) or Enhanced Graphics  Adaptor 
(EGA) emulating the CGA.   If you are using a monochrome display system,  this
program will not work.  Sorry, there is nothing that can be done about this.
     Second,  the  special  font characters are only created in  the  graphics 
modes  of the system (modes 0 through 3) which are the medium and high  resol-
ution  graphics modes.   These modes,  unlike the text modes where  the  ASCII 
character codes are stored in the display memory,  actually place the bit maps 
of  the  characters into the display memory area.   (This is why  the  special 
fonts  can  be  displayed.)  In the medium resolution  modes,  characters  are 
displayed  in 40 columns across the screen;  while in high  resolution  modes, 
characters are displayed in 80 columns.   Of course,  this is not the problem.
The  problem  is that the CGA has limited memory resources and  therefore  can
only  display  4  colors in medium res modes and 2 colors in high  res  modes.  
Refer to your hardware reference manual (or any of a thousand books on the IBM 
system hardware) for the reasons why this is so.
     Third,  only the upper 128 characters of the video codes are redefinable.  
The  lower 128 characters (called the ASCII codes) are in the system's ROM  at 
high  memory  and cannot be changed.   (You can load them into RAM and  modify 
them to your liking, though!)

     With these restrictions,  I still feel the IBM has the potential of being 
somewhat  flexible  in what it can display if the software is designed  right.
This package will help you in doing just that.


What this package includes:

     This  package  is made up of two Font Editors (one for medium  resolution 
modes  and one for high resolution modes) and a Turbo Pascal  routine  library 
that  will demonstrate how the created fonts are loaded from file,  integrated 
into  the  BIOS system of the computer,  and thus made available to  the  BIOS 
display routines.
     The  reason why there are two editors is because special font  characters 
created  in medium resolution modes look different when displayed in the  high
resolution  modes  (and vice versa).   The two editors are almost exactly  the 
same.   The medium resolution editor ("FONTED40.COM"),  however, is limited in 
the  number of characters that can be displayed on the screen  (40  characters 
across)  and thus is not as verbose as the 80 column editor.   The best way to
learn  how  to  use  the  editors  is  to  work  with  the  80  column  editor 
("FONTED80.COM")  until you feel comfortable with the questions asked and  the 
options available.



                                2                      Font Editor Version 1.2








     The  Turbo  Pascal routine library is discussed more fully in  a  section 
below.   The  following are the files and their date/time tags and sizes  that 
are included in this package.   If any of these files are missing,  or if  any 
have been altered in any way,  please contact us and we will provide you  with
the entire package.


 SCRIPT40 FNT     1024   6-14-87  10:06p - Sample font provided with pkg
 FONTED40 FNT     1024   6-06-87   9:02a - Font set used by editor
 SCRIPT80 FNT     1024   6-14-87  10:44p - Sample font provided with pkg
 FONTED80 FNT     1024   6-06-87   8:57a - Font set used by editor
 FONTEDIT DOC    19456   6-14-87  11:05p - Documentation to this package
 FONTS    LIB     8184   6-14-87  10:23p - Turbo Pascal library for access
 SAMPLE   PAS     2422   6-14-87  10:28p - Sample Program using FONTS.LIB
 FONTED40 COM    23797   6-14-87  10:48p - 40 column font editor
 FONTED80 COM    24166   6-14-87  10:48p - 80 column font editor


The Font Editors:

     Since  the  commands and keys for both editors are  the  same,  when  the
editor is mentioned, I actually mean either one.

     When  you  begin execution of the editor,  it will first ask you for  the
name of the font file to be edited.  Like a text file, or other data file, the
font  descriptions (the bit mapping of each special character font) are  saved
off  into  a file with a specific name and can be called up at  any  time  for
further editing.  Each file contains the bit mapping of a single font set (for 
the entire 128 characters).   If you do not specify a file name, "WORK.FNT" is 
loaded.   Of  course,  if  the file does not exist,  the new file  is  created 
automatically.   With new files,  all special font characters are "cleared" or
have their bits all set to "0".
     Once the font file is loaded,  the main editor screen is displayed.   The 
upper  left corner of the screen displays the main function key  options,  the 
upper middle and right screen area is used while editing a specific  character
and  will be discussed later,  and the bottom half of the screen displays  the 
state of the entire font set as it presently exists (all 128 characters).   An 
arrow character will appear at the location (0,0).

NOTE:   From this point on,  (x,y) will refer to the location within the  font 
table where "x", the first digit (from 0 to 7), is the row down the screen and
"y",  the second digit (from 0 to F [hex]),  is the column position across the 
screen.   Locations  correspond to the ASCII values of the characters in hexa-
decimal format.  That is (x,y) is associated with the ASCII character with the 
hex value of xy.   For example, the character "a" has a ASCII hex value of 61; 
therefore,  the corresponding location in the table is (6,1),  or the 7th  row 
and 2nd column.


     Moving the Arrow Pointer:

     The  arrow pointer is used to select the specific character you  wish  to 
work with.  It may be used in telling the editor which character to edit or to 
copy.   Think  of the arrow pointer as the location where activity is to  take
place.


                                3                      Font Editor Version 1.2








     The  pointer is moved using the four arrow keys on the keypad.   In addi-
tion, the <Home>, <End>, <CTRL><HOME>, and <CTRL><END> keys are supported with 
this version.   These four keys move the arrow pointer to the beginning of the 
present row, end of the present row, top left corner of the character set, and 
bottom right corner of the character set respectively.


     Loading a New File:

     The F1 key is used to load a new file from disk.  If the present font set 
has not been saved since an update has occurred,  the editor will give you the 
option to save the file before loading a new one.  When entering the file name
(after  any  of  the prompts in the program),  the file  extension  ".FNT"  is 
assumed if not entered.  (In fact, I suggest you always use the file extension 
default.   This  will  prevent any problems from occurring in  confusing  font 
files with other types of data files.)


     Saving the Font to File:

     To save the presently loaded font to file,  use the F2 key.  It is a good
idea  to get into the habit of saving the font after every 10 to 15 minutes of 
work.  This could save you from losing a lot of hard work if the power were to 
go out on your system.
     The editor will let you specify the file to save to,  though the  default 
name is the name of the font file you are presently working with.


     Copying characters:

     You  can copy character bit maps directly from one to  another  character 
through  the main menu with the F7 key;  thus eliminating having to enter  the 
editor  mode  (described below) just to perform this task.   To  copy  a  font 
character,  move the arrow to the location where the character is to be copied 
TO  and strike the F7 key.   You will then be prompted to select the character
from which to copy FROM by again moving the arrow and striking the RETURN key.  
You can abort the copy action by simply striking the ESC key at the prompt.


     Copying the entire ROM Character set:

     A feature has been provided that will allow you to copy the entire ROM'ed 
character  set  into the working table.   The F6 key performs this  operation.  
Make sure that before you make the copy,  the contents of the present font set
is saved.   Once the ROM set is loaded, you can then manipulate the characters 
in any fashion you desire and then save it to a font file, just like any other 
font created with this editor.


     Finding a Character:

     Since most of the time, you will probably be creating your own text fonts 
where  the special characters you enter are to replace existing alphanumerics,
a  function was provided to help you "jump" to the location  corresponding  to
a  specific alphanumeric.   This is particularly helpful when starting with  a


                                4                      Font Editor Version 1.2








completely  blank  table  and  you  are  only  interested  in  filling  a  few
characters, thus reducing needless searching for the right location.
     When  you strike the F8 key,  you are prompted to strike the key  of  the 
character you wish the arrow pointer to jump to.   The ASCII value is computed 
from the key you press, and the arrow pointer is relocated.


     Quiting the Editor:

     The F10 key is used to exit the program gracefully.  If you have modified
any of the characters since the last save command,  the editor will inform you 
and give you an opportunity to save to file.


     Editing a Character:

     The F5 key is used to edit a specific character:  where the arrow pointer 
is located.   Once you have entered the edit mode,  you will be working in the 
upper  half of the screen.   Notice that the function key commands change when 
you  enter the edit mode,  and a large cursor is positioned within the 8  x  8 
matrix  in  the upper middle portion of the screen.   This  matrix  represents 
individual  "bits" or "pixels" (picture elements) by which the characters  are 
made up.
     The  arrow  keys are used to move the cursor about the  matrix,  and  the 
space  bar is used to change a specific bit from "ON" to "OFF" or vice  versa.  
The <Home>, <End>, <PgUp>, and <PgDn> keys are also supported: these cause the 
cursor to move diagonally in the direction of the key.  As you change the bits 
on  the matrix,  you will notice the character to the immediate right  of  the 
matrix will also change.   This is what the character actually looks like, and 
will help you decide on which bits should be "ON" and which should be "OFF".
     Many  of  the function keys are self-explanatory and do not  need  to  be 
expanded upon.  The F3, F4, F5, <ALT> F5, and F6 rotate the character as if it 
were cylindrical (the right side attached to the left,  or the top attached to 
the  bottom).   The inversion keys F7 and F8 present the "mirror image" of the 
original  either  horizontally or vertically.   The F2 key switches  all  "ON" 
pixels  to  "OFF" and vice versa,  thus making the new character the  negative 
image of the original.
     The F1 key performs the same task as the F7 key from the main  "Selector"
mode  of  the editor.   You will be prompted to move the arrow pointer to  the 
location to copy FROM and hit RETURN or to enter ESC to abort the copy action.
     The F9 and F10 are the exit keys to return command back to the "Selector" 
mode.   The only difference is that F9 saves the changes you have made to  the 
character; F10 does not.


A few points to remember:

     There  are  two  files  included  in  this  package  ("FONTED40.FNT"  and 
"FONTED80.FNT")  which  are  fonts  designed to work  with  the  font  editors 
themselves.   I suggest you do not tamper with these fonts.   However,  on the 
chance  that  you do not like the "cursor" characters and "ON/OFF"  characters 
the  Editor  mode of the editors use,  you can redefine them  by  loading  the 
appropriate  font file and changes (0,0) through (0,3).   We recommend you  do 
not, but ...



                                5                      Font Editor Version 1.2








     Another  point to remember in using your own fonts is that it is possible 
to display characters created from a variety of font files on the same screen!  
Remember  that the characters are displayed in their bit format and not  their 
ASCII value as in text mode.   Therefore, you can load one font file, write to 
the screen, load another font file, and write to the screen, etc....  Once the 
image is computed onto the screen,  no further accesses are made to update the 
image.
     When  you look at the Turbo Pascal source code that is included  in  this 
package, you will notice that it was designed to allow you to load into RAM up 
to  three different font sets and by simply calling a single  procedure,  jump 
between the fonts as the active font.   Here is the catch: if you are familiar 
with  the  ROM BIOS routines,  you know there is a way to read the  characters 
displayed on the screen.   This routine works whether the system is in text or 
graphics mode!   In text mode, reading the character at a specific location is 
easy:  just  read the ASCII value at that memory location.   However,  in  the
graphics  mode,  the BIOS actually goes out and reads in the bit map  at  that 
location, and then goes to the bit mapping of the character font and looks for 
a match!  This is very flexible, but you need to make sure that when, or if, a
program tries to READ a character at a specific location in graphics mode, you 
have the same font set active as the one used to create the character.

     The  data files stored to disk are the EXACT image the system expects  to 
find  the  character fonts in when it access the area through  the  interrupt.  
This  means  that there are no special translations from reading the  data  to 
creating the font work area for DOS.  The result is that once you have created 
a  font  set  to  your satisfaction,  you can access and  use  the  file  with 
assembler,  Pascal,  C, BASIC, or any other language that allows you to do the 
following actions:

     a)  load the ENTIRE contents of a font file into a specific  location  in 
memory,
     b)  and  access the DOS routine to change a specific  interrupt  vector's 
location to point to the location the font file was loaded.

     The  Turbo  Pascal  routine  package  provided uses  DOS  to  change  the 
interrupt  vector's address.   Although it is possible to directly change  the 
address,  it is always good programming practice to let DOS do this,  to  keep 
compatibility  with future DOS machines and to handle situations  when  inter-
rupts occur WHILE the interrupt vector is being modified.

     That  is it!   I hope you enjoy this package and I hope it comes in handy
in  developing your own fonts.   Strategically designed,  a program  can  look 
quite nice while using this feature.  In fact, this editor can help you design 
game  graphics  characters  that make manipulation of objects  on  the  screen 
faster,  easier,  and  neater to code.   Remember,  if you like this  package, 
please register with Synergy Software of Nebraska with a $10 donation.

     Thanks for using our products.



Synergy Software of Nebraska
904 Lariat Circle
Papillion, NE  68046



                                6                      Font Editor Version 1.2






```
{% endraw %}

## GROCERY.DOC

{% raw %}
```



                             Grocery Listing Program

                                   Version 1.3

                                      -by-

                                  Jim D. Hart
                           Synergy Software Solutions
                                904 Lariat Circle
                              Papillion, NE  68128


        Synergy  Software  Solutions  is distributing GROCERY  under  the 
        "User Support" concept.   This program may be freely  distributed 
        to  all  interested individuals without further authorization  or 
        request from Synergy Software Solutions.   If you are  interested 
        in  other programs  developed by SSS,  you can write to the above
        address for information.

        Since  GROCERY  is  being  distributed  without  any  charge   or
        obligation  by the user,  Synergy Software of Nebraska  disclaims
        all  responsibilities for its purpose or its effectiveness.   (In
        other words, "Don't look a gift horse in the mouth.")

        If you like and use this program,  a donation of $10 to the above
        address  would  be greatly appreciated.  I am working on  a  much
        modified  version that will be much better.   Write me and I will
        send you information as it develops.  If you would like a copy of
        the source code, the program was written in Turbo Pascal.  It can
        be  obtained with the above mentioned $10 donation plus $10  more
        for shipping and handling of a disk containing the source code.


























                                        1








        Into the fire pit:

             There  are  those who grocery shop on a regular  basis  that 
        often know precisely what they want to get, where to find it, and
        how  many (or much) to buy.   Of course,  there are  those,  like 
        myself,  who  dread the  local  Food-4-Less,  Piggly-Wiggly,  and 
        Helter-Skelter  food chains;  who make illogical and often unsup-
        ported  reasons why it is better to buy a dozen items at  the  7-
        eleven  store  just down the street for the price of the  monthly 
        car  payment rather than beat the hords of food shoppers  at  the 
        BIG ones;  and who look for building maps at the entrance in case 
        of  getting lost "somewhere" between isles 7 and 8 while  seeking 
        the location of a jar of Jif.

             Well,  despite my efforts, the day came when my wife gave me 
        the  grocery list and simply stated:  "Go to it."  It was in  the
        two  hours  after this SEE (Significantly Emotional Event), while 
        wearing  out  my  shoe soles in search of a  that  infintesimally 
        small,  but ever so important, spice that I decided to write this 
        program.

        The Program's Afoot:

             Within a day of previously described misadventure I had  the 
        workings of the program complete.   At last!  Not only did I have
        a  program  that I could use at the store,  but I  could  finally 
        prove  to my wife that a computer DOES have useful  purposes.   I 
        can  honestly  say now that having the  program  completed,  with 
        several modifications as time goes on,  for nearly a year that my 
        wife  consistently and faithfully uses it every time she goes  to 
        her favorite grocery store.

        The Inner'ds:

             Since  there  is a built-in help screen (my wife  would  not
        have  had  much  luck running the program without being  able  to
        first  find the F1 key),  this document will be short.   It  will
        only cover a general description of what the program does.

             First of all,  GROCERY is a data base program.   It contains
        the  grocery  items you buy on a regular (or even  an  irregular)
        basis,  along  with  the normal amount of each  item.   When  you
        execute GROCERY, it will display the items by isle.  You can:

             1) enter new grocery items,
             2) delete existing grocery items,
             3) select grocery items to be printed, and
             4) print the final grocery list (or entire data base).

             The  program  will handle up to 30 isles and each  isle  may
        have up to 36 items.   The display shows the items three isles at
        a time;  18 items per isle.   There are two "windows",  a top and
        bottom,  that  can be switched between which enables you to  view
        all 36 items (18 in the top window, 18 in the bottom window).



                                        2









             Items  are selected (or cleared) by placing the item  cursor
        (an inverted color window)over the item you are interested in and
        pressing  the RETURN key.   Once you have selected the items  you
        wish  to include in the grocery list,  the F3 function key  sends
        the list to the printer (LPT1:).

             Of course the difficult part about running the program is in
        having  to  enter  ALL  of the items into the data  base  at  the
        beginning.   The  nice  thing  is that once you  have  the  items
        entered (and organized in the fashion you desire),  printing  the 
        grocery  list is a snap;  and the print-out is organized by isle.  
        All you have to do is go through the grocery store,  checking the 
        items by the isle.
             Isles in the program are numbered 1 to 30;  however,  I have 
        added  a feature that allows you to change the name of the  isle.  
        Thus,  you  can  rename one of the isles  "Produce"  and  another 
        "Meats".  This also simplifies the shopping procedures.

        Key Points:

             A) The function keys

             F1: This  key  brings  up the first (of two)  help  screens.  
                 These  screens provide a synopsis of the keys  that  are 
                 available within the program.   To go to the second help 
                 screen  page,  strike the F1 key again.   Any other  key 
                 returns the main screen.

             F2: This  key  saves  the  present data base  to  the  file: 
                 GROCERY.DB.   The data saved includes the items as  well
                 as the selection settings.   Thus,  you can select items 
                 to  be printed,  save them to file,  and when you reload 
                 the program, the selection settings are still there.

             F3: This  key  prints out the final  grocery  listing.   All 
                 print-out is organized by isle and the specific sequence 
                 of items in the isles.

             F5: This key prints the entire data base.   This is good for
                 checking the data base against the grocery  store;  just 
                 print  out  the data base and take it with you the  next 
                 time you go shopping.

             F7: This key resets all selected grocery items.  It is meant 
                 primarily  to clear the selection settings so  that  you 
                 can  start from scratch with the next grocery list.   If 
                 you select this option,  GROCERY will give you one  last 
                 chance to abort the action: with the ESC key.

             F9: This  key sets the display to the TOP window.   As  men-
                 tioned above,  there are two windows required to display 
                 all 36 items for each isle:  TOP and BTM (Bottom).  This 
                 key and F10 are available to switch between the two.



                                        3








             F10:This  key  sets the display to the BTM (Bottom)  window.  
                 See the F9 key above for more information.


             B) Cursor Movement Keys

             The 4 Arrow Keys:

                  These keys are the primary keys to move the item cursor 
             around  the display area of the screen.   The item cursor is 
             used  to select or clear items for the grocery  listing,  to 
             point to items to be deleted, or to point to locations where 
             an item is to inserted in the list.
                  In addition to the F9 and F10 keys described above, the 
             arrow keys also can cause the display to switch between  the 
             TOP and BTM windows.   If the cursor is placed over the last
             item in the TOP window (and there are items that extend into 
             the  BTM window),  the down arrow will cause the program  to 
             display  the bottom window.   Likewise,  if the cursor is at 
             the  first  item  on  the BTM window and  the  up  arrow  is 
             pressed,  the program will display the top  window,  placing 
             the cursor at the end of the top window's list.
                  The  left  and right arrows "wrap" around  through  the 
             three isles displayed.  To display the next three isles, use 
             the page up and page down keys (described below).

             Home and End:

                  In  addition  the the arrow keys described  above,  the 
             Home and End keys also move the cursor.   The Home key moves 
             the  item cursor to the first item on that particular  isle.  
             If the BTM window is displayed,  the window is not switched.  
             The End key moves the cursor to the end of the list.

             C) Paging

                  GROCERY  only displays three isles of data at one time.
             Each of these three isle displays are called  pages.   Since 
             there  are 30 isles in all and three isles are displayed per 
             page,  there are a total of 10 pages.   To move from page to 
             page,  the PgUp and PgDn keys are used.   PgUp moves back to 
             the  previous  page;  PgDn moves to  the  next.   For  quick 
             "jumps",  holding the CTRL key down and striking the PgUp or 
             PgDn  key will send you to the first page or the last  page, 
             respectively.

             D) Other keys

             RETURN:  This  key is used to toggles the item pointed to by 
             the item cursor between selected and cleared.  If an item is 
             clear,  and the RETURN key is pressed,  GROCERY will ask you 
             for the quantity.   If you don't wish to change the quantity 
             as shown,  press the RETURN key again;  otherwise,  you  may 
             type in a value between 1 and 99.



                                        4








             INS:  This  key allows you to insert new items into the data 
             base.   To  insert a new item,  place the item cursor at the 
             location you wish it to be and press the INS  key.   GROCERY 
             will  ask you to enter the item.   Type in the name and  hit 
             RETURN.  The item will be inserted.

             DEL:   This key deletes an existing item from the data base.  
             Place  the  cursor over the item to be deleted and hit  DEL.  
             GROCERY will ask you to verify the delete.  If you are sure, 
             type "Y".

             CTRL-HOME:  As discussed above, it is possible to change the 
             name of the isle which,  by default, is simply numbered from
             1  to 30.   Text descriptors are often more  informative  of
             what  the  isle contains,  rather than just  a  number.   To 
             change the name, hold down the CTRL key and press Home.  The 
             item  cursor will jump to the screen location displaying the 
             isle number.  Now, just type in the name.  To clear the name 
             from the display, press CTRL-Home and hit RETURN.

             ESC:   Finally,  to  exit  the program,  use  the  ESC  key.  
             GROCERY  will ask you to verify this is what you wish to do.  
             It  is  not necessary to save the data base to  file  before
             exiting the program.   GROCERY will do this automatically if
             you have updated any of the data.


             NOTE: If you are using a color system and you don't like the
             white on  blue color settings, or you cannot get the program
             to work with  your monochrome system,  you can pass the pro-
             gram a parameter to  change it to white on black.   When you
             call the program, enter the following:

                     GROCERY /M

             This will  cause the  program to  act as if  it were a mono-
             chrome system (all black and white characters).


        That's it!   I hope you enjoy using this program.   It has been a
        great value to my family and fun to write.



        Happy hunting...


        Jim D. Hart
        Synergy Software Solutions








                                        5






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0856

     Volume in drive A has no label
     Directory of A:\

    GROCERY  EXE     26048   9-19-89   8:37p
    GROCINIT EXE      2912   9-19-89   8:37p
    READ     ME        851   9-19-89   8:37p
    GROCERY  DOC     13347   9-19-89   8:37p
    DISPLAY  SCN     12288   9-19-89   8:37p
    -------- ---         4  10-19-87   2:45p
    1        OCT       630   5-18-87   5:23p
    10       OCT       630   5-04-87   4:23p
    11       OCT       630   5-10-87  11:17a
    12       OCT       630   5-04-87   4:29p
    13       OCT       630   5-04-87   4:30p
    14       OCT       630   5-04-87   4:32p
    15       OCT       630   5-18-87   5:02p
    16       OCT       630   5-04-87   4:35p
    17       OCT       630   5-04-87   4:37p
    18       OCT       630   5-04-87   4:40p
    19       OCT       630   5-04-87   4:41p
    2        OCT       630   5-18-87   3:49p
    20       OCT       630   5-04-87   4:42p
    21       OCT       630   5-04-87   4:44p
    22       OCT       630   5-04-87   4:45p
    23       OCT       630   5-04-87   6:34p
    24       OCT       630   5-18-87   5:22p
    25       OCT       630   5-18-87   4:14p
    26       OCT       630   5-18-87   5:20p
    27       OCT       630   5-18-87   8:02p
    28       OCT       630   5-27-87   4:51p
    29       OCT       630   5-18-87   4:25p
    3        OCT       630   5-18-87   3:51p
    30       OCT       630   5-18-87   4:28p
    31       OCT       630   5-18-87   4:32p
    32       OCT       630   5-18-87   6:07p
    33       OCT       630   6-27-87   5:13p
    34       OCT       630   6-27-87   5:16p
    35       OCT       630   6-27-87   5:19p
    36       OCT       630   7-06-87   2:52p
    37       OCT       630   7-06-87   2:54p
    38       OCT       630   7-06-87   3:00p
    4        OCT       630   5-29-87   7:03p
    5        OCT       630   5-18-87   3:56p
    6        OCT       630   5-04-87   4:13p
    7        OCT       630   4-27-87   5:27p
    8        OCT       630   5-10-87  11:20a
    9        OCT       630   5-04-87   4:20p
    FKH      EXE     75186   5-27-87   7:02p
    NRECS    OCT         7   7-06-87   3:00p
    PRINTER  OCT       106   6-21-87   7:19p
    -------  ---         4  10-19-87   3:23p
    FONTED40 COM     23797   6-14-87  10:48p
    FONTED40 FNT      1024   6-06-87   9:02a
    FONTED80 COM     24166   6-14-87  10:48p
    FONTED80 FNT      1024   6-06-87   8:57a
    FONTEDIT DOC     18241   6-14-87  11:05p
    FONTS    LIB      8184   6-14-87  10:23p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1233  12-06-89   1:27p
    FILE0856 TXT      2959  12-06-89   1:38p
           57 file(s)     235359 bytes
                           62464 bytes free
