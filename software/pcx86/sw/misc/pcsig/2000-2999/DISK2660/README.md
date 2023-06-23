---
layout: page
title: "PC-SIG Diskette Library (Disk #2660)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2660/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2660"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PP.DOC

{% raw %}
```



















                               PrintPartner v1.1
                           Printer Graphics Program
                   (C) Copyright 1990, Acropolis Software

                               Robert Bequette
                             Acropolis Software
                               P.O. Box 5037
                            Fair Oaks, CA  95628





     THE LEGAL STUFF


      PrintPartner is provided on an "as is" basis without warranty of
      any kind expressed or implied. In no event will Acropolis Software
      be liable to you for any damages, including any lost profits, lost
      savings or other incidental or consequential damages arising out
      of the use of or inability to use the program, even if Acropolis
      Software has been advised of the possibility of such damages, or for
      any claim by any other party.

      PrintPartner is copyrighted by Acropolis Software.  You're encouraged
      to give copies to your friends and upload it to bulletin boards,
      however sale of the program for profit by anyone except Acropolis
      Software is strictly prohibited.  With the exception of a small fee
      for duplication.  That fee does not register you as a user of
      PrintPartner.  If you like PrintPartner and find it useful you are
      asked to register as a user with Acropolis Software.


     FILE LIST

       PrintPartner comes with the following files:

          PP.EXE             The PrintPartner Program.
          PP.DOC             This manual.
          PP11.NEW           What's new to this version.
          PMTOPP.EXE         PrintMaster+ to PrintPartner converter.

          STANDARD.GPH       Standard graphics file.
          DINO.GPH           An extra graphics file.

          ARTNOUV.FON        Font files.
          BASEL.FON
          CIRCUS.FON
          CMBX10.FON
          GREENBAY.FON
          HOUSTON.FON
          MALIBU.FON
          MCCLOUD.FON
          PADOVA.FON
          SANDIEGO.FON
          SCAN.FON

          APPLEIMG.PDR       Printer driver files.
          CITMSP.PDR
          EPSON.PDR
          MOST24.PDR
          LASERJET.PDR

       If you give copies of this program away you MUST include all the
       files in their original form.  Distribution with one or more of
       the files missing or altered in anyway is strictly prohibited.



     TABLE OF CONTENTS

       Overview          ...................................... 1

       Installation      ...................................... 2

         Hard Drive      ...................................... 2

         Floppy Drive    ...................................... 2

       Main Menu         ...................................... 3

         Configuration   ...................................... 3

         Banners         ...................................... 5

         Signs           ...................................... 8

         Calendars       ...................................... 12

         Picture Editor  ...................................... 14

       PMtoPP Utility    ...................................... 18

       Random Notes      ...................................... 19

       Registration      ...................................... 20

       Questionnaire     ...................................... 22

                                                                   Page 1


     OVERVIEW

      PrintPartner is a program to allow you to make printed banners,
      signs, and calendars.

      Banners can have a graphic on either end and use any font you select.
      Additionally PrintPartner attempts to smooth the text and graphics to
      make them look better.

      Signs may have any number of two different graphics you select and may
      be placed anywhere on the page you wish.  Each line of text can be of
      a different font and may be sized to your specifications.

      Calendars can be for any month in any year from 1980 to 2098, with the
      month name in any font you select.

      You can edit pictures and create new one.


      The printers that PrintPartner is known to support are:

        Apple Imagewriter    Epson FX-850           Star NX-10
        Citizen MSP-10/15    Epson RX-80            Star NX-2400
        Citizen MSP-20/25    IBM Proprinter X24     Generic 8/9 pin
        Citizen MSP-50/55    Microline 190 Series   Generic 24
        Epson FX-80/85       NEC P5/P5xl            HP LaserJet III
        Epson LQ-2500        NEC P6/P7              HP LaserJet II's
        Epson LQ-510         Panasonic KX-P1124

      Those are not necessarily the only printers supported by PrintPartner
      but they are the ones that I know the drivers work with.  If you have
      a printer different than the ones listed here there is a good chance
      that one of them will work with it.  If you do have a different printer
      that works with one of the driver please let me know what printer you
      are using and which driver you are using with it so that I can update
      the list and make it easier for other.

      PrintPartner needs at least 384K of RAM to run.
                                                                   Page 2


     INSTALLATION

       Installation of PrintPartner is easy.


       HARD DRIVE SYSTEM

         Create a subdirectory on your hard drive for PrintPartner.
         I recommend PP.

           C:\> MD PP

         Now change to the new directory and copy the files from the
         PrintPartner disk into it.  The following example is for the
         PrintPartner disk drive A: if you have the disk in drive B:
         replace the A:*.* in the example with B:*.*

           C:\> CD PP
           C:\PP> COPY A:*.*

        If you also have the disk of extra fonts and graphics replace
        the PrintPartner disk with the extras disk and repeat the copy
        command above.

        You now have PrintPartner installed on your hard drive.
        To start up PrintPartner just make sure you are in the PP
        directory, type PP and press the <RETURN> key.



       FLOPPY ONLY SYSTEM

        With a floppy drive system make a copy of the PrintPartner disk
        and the disk of extra fonts and graphics if you have it.  Now
        put away your original disks in a safe place and use your copy.

        To use PrintPartner on a floppy only system you should place
        the PrintPartner disk in the floppy drive and type PP.

                                                                   Page 3


     MAIN MENU

       At the main menu you are presented with the following choices:

          BANNER MAKER                To create and print a banner
          SIGN PAINTER                To create and print a sign
          CALENDAR MAKER              To create and print a calendar
          PICTURE MAKER               To edit and create pictures
          CONFIGURATION               To configure your printer
          EXIT PRINTPARTNER           To quit PrintPartner

      At this and any of the other menus you use the cursor arrow keys
      to move the lighted bar around the menu and press the <RETURN>
      key to select the highlighted item.


     CONFIGURATION

       The configuration section of PrintPartner allows you to select
       the printer that you wish it to use.  You will be presented with
       the following menu items:

             SELECT A PRINTER
             SELECT PRINTER PORT
             ADD LINE FEED
             NO LINE FEED
             TEST PRINTER
             EXIT


       SELECT A PRINTER

        Choosing this menu item will bring up an alphabetical list
        of supported printers.  At the top of the screen you will
        also see the name of the currently selected printer if one
        has been selected before.

        Use the arrow keys to move around the listing to select your
        printer or one that is compatible with your printer. Press
        the <RETURN> key when you have it highlighted.


       SELECT PRINTER PORT

        Allows you to select the printer port PrintPartner should output
        to.  The currently supported ports are LPT1, LPT2, and LPT3.


       ADD LINE FEED
       NO LINE FEED

        Not all printers are created equal.  Even with two printers
        of the same model things might be configured differently.
        Since people configure their printers differently depending on
        what applications they use PrintPartner allows you to set it up
        so that it will either send line feeds after each line or not.

                                                                   Page 4


       TEST PRINTER

        Choosing this option will cause PrintPartner to try and print
        a test picture on your printer.  If the picture prints properly
        then you're in luck and have selected the right driver for your
        printer (if your printer was listed and that driver does not
        work with it please notify me and enclose a sample of what is
        being printed).  If your printer isn't listed, one of the other
        drivers may work with it.  Most printer use the same set of
        control codes.

        If the printed picture doesn't look right check this list:

         1) If it is not an intelligible image you may have the wrong
            printer selected.
         2) If there are blank lines select the NO LINE FEED option and
            and try the test again.
         3) If the pictures prints all on a single line select the
            ADD LINE FEED option and try the test again.
         4) If you have tried all the printers and none of them work,
            your printer just may not be supported at this time.



       EXIT

        Exits the configuration menu and returns you to the main menu.
        Additionally the configuration you have selected will be saved
        to the file PP.CFG.  If you are using a floppy disk setup you
        can look at the configuration file with the MSDOS "TYPE" command
        and see which printer driver file it is using for your printer.
        You can then delete the others to make more room on the disk
        for saving your work or adding extra fonts or pictures to your
        working copy of the PrintPartner disk.
                                                                   Page 5



     BANNERS

       The banner section of PrintPartner allows you to print banners for
       any occasion.  Each banner can be done with any font you like and
       can also have a graphic at either end.
       The banner section presents you with the following menu items:

         NEW BANNER              Clear the current banner from memory.
         FIRST GRAPHIC           Select graphic for the start of the banner.
         SECOND GRAPHIC          Select graphic for the end of the banner.
         BANNER FONT             Select the font to print the banner in.
         BANNER TEXT             Enter the text for the banner.
         BANNER HEIGHT           Select the height for the banner.
         PRINT BANNER            Print the current banner.
         LOAD BANNER             Load an old banner from disk.
         SAVE BANNER             Save the current banner to disk.
         EXIT BANNER             Exit banner and return to the main menu.


      NEW BANNER

       This selection will clear out the settings for the current banner
       (one you have loaded or decided to start again from scratch).


      FIRST GRAPHIC
      SECOND GRAPHIC

       These two selections allow you to select the graphics to place at
       the ends of the banner.  "FIRST" is the graphic that comes before
       the text and "SECOND" is the graphic that comes after the text.
       After selecting one of these options, you will be presented with
       a list of the graphics files on the disk.  As with all the other
       menus, use the up and down arrows to highlight the selection you
       want and press the <RETURN> key.  If you are using PrintPartner
       on a floppy disk only system and want to use the graphics from
       another disk (such as the extras disk) remove the PrintPartner
       disk from the floppy drive and replace it with the other disk
       before selecting one of these options.

       After you have selected one of the graphics files you will be
       presented with a list of the pictures in that file, use the four
       arrow keys to move around the menu.  You will notice that the
       picture on the right hand side of the screen changes to the
       picture for the current selection.  If there are more pictures
       then will fit on the menu there will be a selection at the end
       of the list "NEXT PAGE".  This option will move you to the next
       page of pictures to choose from.  Once you find the picture you
       want press the <RETURN> key.

                                                                   Page 6


      BANNER FONT

       This selection will allow you to select the font to print the
       banner in.  After selecting it a screen will appear showing a
       list of the fonts and a picture of each of them.  As you use
       the arrow keys to move around the list the picture on the right
       hand side of the screen will change to show the font currently
       highlighted.  If there are more fonts than can be listed on one
       screen a choice of "NEXT PAGE" at the end of the menu.  Selecting
       it will take you to the next screen full of fonts to choose from.
       If you are using PrintPartner on a floppy disk only system and
       want to use the fonts from another disk (such as the extras disk)
       remove the PrintPartner disk from the floppy drive and replace it
       with the other disk before selecting this option.

       Once you have the font you wish to use highlighted press the
       <RETURN> key to select it.


      BANNER TEXT

       This selection will allow you to enter the text for the banner.
       A window will pop up for you to type the text into.  You can
       enter up to 255 characters for the text of the banner.  If you
       had already entered text or loaded an old banner from disk, the
       text that was already entered will be in the window for editing.


      BANNER HEIGHT

       This selection will allow you to select the height of the banner.
       The choices are Full height, 2/3 Height, and 1/2 Height.  You
       select which one you want using the up and down arrow keys and
       pressing ENTER when you are on the choice you want.  The height
       of the banner effects the length of the banner.  The taller
       the banner the longer it will be.  Use this option to scale down
       the size of the banner when the default full height size is too
       large for the situation.


      PRINT BANNER

       This selection will print the banner that you have entered.
       If you wish to stop the printing before the banner is finished
       press the <ESC> key.  You will be asked if you want to abort the
       printing or not.  Answering <Y>es will stop the printing and force
       the printer to the beginning of the next page.  Answering <N>o will
       cause PrintPartner to continue the printing where it left off.


      LOAD BANNER

       Load in a saved banner.  You will be presented with a menu of the
       banner files on the disk, if there are no banner files on the disk
       you will be told so.
       If you are using PrintPartner on a floppy only system and wish to
       load a banner from a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.
                                                                   Page 7


      SAVE BANNER

       Save the current banner you are working on.  You will be prompted
       for a file name to save the banner to.  Enter it and press the
       <RETURN> key.  If you enter a bad file name or there is trouble
       saving the banner file PrintPartner will inform you of it.
       If you are using PrintPartner on a floppy only system and wish to
       save a banner to a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.



      EXIT BANNER

       Exit the banner maker function of PrintPartner and return to the
       main menu.
                                                                   Page 8


      SIGNS

       The sign section of PrintPartner allows you to print signs to
       announce any event, happening or information you wish to display.
       Each sign can be done with any font you like and may have
       different fonts on each line.  Additionally you can select up to
       two graphics and place them anywhere on the page in as many
       different places as you like.
       The sign section presents you with the following menu items:

         NEW SIGN                Clear the current sign from memory.
         ENTER TEXT              Enter the text for the sign.
         GRAPHIC 1               Select the first graphic for the sign.
         GRAPHIC 2               Select the second graphic for the sign.
         PRINT SIGN              Print the current sign.
         LOAD SIGN               Load an old sign from disk.
         SAVE SIGN               Save the current sign to disk.
         EXIT SIGN               Exit sign and return to the main menu.


      NEW SIGN

       This selection will clear out the settings of the current sign
       (one you have loaded or decided to start again from scratch).


      ENTER TEXT

        Selecting this option will allow you to enter the text for the
        sign.  When you first select this option you will be presented
        with a list of the available fonts to choose from.  If you are
        using PrintPartner on a floppy only system and want to use the
        fonts from a different disk remove the PrintPartner disk and
        replace it with the other disk before selecting this option.

        Once you select the font for the sign you will be presented
        with a screen to enter the text of the sign on.  At the bottom
        of the screen of the screen is a menu area separated from the
        upper part of the screen by a line.  It lists the function keys
        you can use to effect the each line of text.  Above that is the
        text entry area.  Along the left hand side of the screen is the
        information area.  The formatting information for each line is
        shown in this area.  First is the font name, followed by the
        line formatting CNTR (Centered), LEFT (Left justified), and RGHT
        (Right justified).  Following that is the scaling for the line
        *1 means normal size, *2 means two times the normal size, and *3
        means three times the normal size for the font.

        You can use the up and down arrow keys to move from line to line
        in the sign and type in your text.  PrintPartner will only allow
        you to enter as much text as will fit on the line, so if you
        type in more text that can be printed with the font of the
        current size it will simply stop allowing text to be entered.
        You can press <RETURN> to move to the next line or use the
        down or up arrow to move to a different line.
                                                                   Page 9



        When you are on a line you can use the function keys to affect
        that line.  From the list of commands at the bottom of the
        screen you can do the following to each line:

          F1   : Change font
                  This option will bring up the font selection screen
                  again and allow you to select a different font to use
                  for this line of the sign.

          F2   : Change size
                  This option will change the scaling size of the font.
                  Pressing it will increase the size from normal size,
                  to two times normal, to three times normal.  Pressing
                  it again will return to normal size.  If increasing
                  the size of the font will not allow all of the text
                  on the line to printed the end of the text will be
                  cropped until it will fit on the line.

          F5   : Clear line
                  This option will erase all the text on the current
                  line.

          F6   : Center/Left/Line
                  This option will change the justification of the line.
                  Pressing it will cycle from Center to Left to Right and
                  then back to Center again.

          F7   : Delete line
                  This option will delete the current line from the sign.
                  In the process the lines below the current line will
                  be moved up.

          F8   : Insert line
                  This option will insert a new blank line into the sign
                  just below the current line.  The new line will have
                  the same format setting (font, size, justification) as
                  the current line.


       Once you have the text entered to your satisfaction press the
       <ESC> key to return to the main sign painter menu.
                                                                   Page 10


      GRAPHIC 1 and GRAPHIC 2

       These option allow you to select and position pictures on your sign.
       You can select up to two different graphics.  Selecting "GRAPHIC 1"
       or "GRAPHIC 2" and position them freehand anywhere on the sign.

       After selecting one of these options, you will see a list of the
       graphics files.  Just like with all the other menus, use the up and
       down arrows to select the file you want and press RETURN.  If you
       are using a floppy disk system and want to use the graphics from
       another disk remove the PrintPartner disk from the drive and replace
       it with the other disk before selecting one of these options.

       After you have selected one of the graphics files you will see a list
       of the pictures in that file, use the four arrow keys to move around
       the menu.  Notice that the picture on the screen changes to the picture
       for the current selection.  If there are more pictures then will fit on
       the menu there will be a selection at the end of the list "NEXT PAGE".
       This option will move you to the next page of pictures to choose from.
       Once you find the picture you want press the RETURN key.

       Now that you have the graphic selected you will be presented with a
       new menu that allows you to select the scaling for the graphic.  On
       the left hand side of the screen will be the menu and on the right
       hand side there is a picture that shows the size of the graphic at the
       different scaling factors in relationship to the printed page.  Use
       the arrow keys to select one of the options and press the RETURN key.

       Next you will be presented with the positioning screen.  On the left
       hand side of the screen is a list of the keys you can use in
       positioning your graphic.  To the right is a representation of the
       page with a flashing box in it.  The box represents your graphic.
       Additionally, there may be other boxes in on the right side of the
       screen.  Boxes with made of dashed lines represent the placement of
       the other graphics on the page (GRAPHIC 1 if you are positioning
       graphic 2 or GRAPHIC 2 if you are positioning graphic 1).  Boxes
       (typically rectangles) made of dotted lines represent the text you
       have entered as it will be placed on the page.  You can use the arrow
       keys to move the graphic around the page.  Use the arrow keys by
       themselves to move the graphic slowly and use <SHIFT> key with the
       arrow keys to move it around quickly.

       The SHIFT-ARROW keys do not seem to work on all machines so there is
       another option to select from: [F]ast mode.  Pressing the "F" key
       will toggle fast mode off and on.  When fast mode is on the normal
       arrow keys will move the box quickly just as if you were holding the
       SHIFT key down.

       Once you have the graphic where you want it press the <RETURN> key
       and a box will be placed there.  The flashing box will return to the
       center of the screen.  You can now move the box around and place
       another copy of the graphic on the screen.  Keep doing so until you
       have all the graphics positioned where you want them.

       By selecting the other menu option you can select and position a
       second graphic on the screen.  The process is the same as it was for
       the first, but when you get to the positioning screen you will notice
       boxes made out of dashed lines.  These boxes represent the positioning
       of the other graphic that you have selected and positioned.
                                                                   Page 11



      PRINT SIGN

       This selection will print the sign that you have entered.  If
       you wish to stop the printing before the sign is finished you
       can press the <ESC> key.  You will be asked if you want to abort
       the printing or not.  Answering <Y>es will stop the printing and
       force the printer to the beginning of the next page.  Answering
       <N>o will cause PrintPartner to continue the printing where it
       left off.


      LOAD SIGN

       Load in a saved sign.  You will be presented with a menu of the
       sign files on the disk, if there are no sign files on the disk
       you will be told so.
       If you are using PrintPartner on a floppy only system and wish to
       load a sign from a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.


      SAVE SIGN

       Save the current sign you are working on.  You will be prompted
       for a file name to save the sign to.  Enter it and press the
       <RETURN> key.  If you enter a bad file name or there is trouble
       saving the sign file PrintPartner will inform you of it.
       If you are using PrintPartner on a floppy only system and wish to
       save a sign to a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.



      EXIT SIGN

       Exit the sign painter function of PrintPartner and return to the
       main menu.

                                                                   Page 12


     CALENDARS

       The calendar section of PrintPartner allows you to print calendars
       for any month from January 1980 to December 2098!  You can select
       any font to be used to print the calendar.
       The calendar section presents you with the following menu items:

         SELECT MONTH            Select the month for the calendar.
         SELECT YEAR             Select the year for the calendar.
         SELECT FONT             Select the font to print the calendar in.
         PRINT CALENDAR          Print the current calendar.
         LOAD CALENDAR           Load an old calendar from disk.
         SAVE CALENDAR           Save the current calendar to disk.
         EXIT CALENDAR           Exit calendar and return to the main menu.


      SELECT MONTH

       This selection will bring up a menu listing all the months of the
       year.  Use the arrow keys to highlight the month you want the
       calendar for and press the <RETURN> key to select it.


      SELECT YEAR

       This selection will bring up a menu listing all the years that
       PrintPartner will allow you to print, from 1980 to 2098.  Use
       the arrow keys to highlight the year you want the calendar for
       and press the <RETURN> key to select it.


      SELECT FONT

       This selection will allow you to pick the font to print the
       calendar's heading in.  After selecting it a screen will appear
       showing a list of the fonts and a picture of each of them.  As
       you use the arrow keys to move around the list the picture on
       the right hand side of the screen will change to show the font
       currently highlighted.  If there are more font than can be listed
       on one screen at the end of the menu there will be a choice of
       "NEXT PAGE" selecting it will take you to the next screen full
       of fonts to select.

       If you are using PrintPartner on a floppy disk only system and
       want to use the fonts from another disk (such as the extras disk)
       remove the PrintPartner disk from the floppy drive and replace it
       with the other disk before selecting this option.

       Once you have the font you wish to use highlighted press the
       <RETURN> key to select it.
                                                                   Page 13


      PRINT CALENDAR

       This selection will print the calendar that you have entered.  If
       you wish to stop the printing before the calendar is finished you
       can press the <ESC> key.  You will be asked if you want to abort
       the printing or not.  Answering <Y>es will stop the printing and
       force the printer to the beginning of the next page.  Answering
       <N>o will cause PrintPartner to continue the printing where it
       left off.



      LOAD CALENDAR

       Load in a saved calendar.  You will be presented with a menu of the
       calendar files on the disk, if there are no calendar files on the
       disk you will be told so.
       If you are using PrintPartner on a floppy only system and wish to
       load a calendar from a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.


      SAVE CALENDAR

       Save the current calendar you are working on.  You will be prompted
       for a file name to save the calendar to.  Enter it and press the
       <RETURN> key.  If you enter a bad file name or there is trouble
       saving the calendar file PrintPartner will inform you of it.
       If you are using PrintPartner on a floppy only system and wish to
       save a calendar to a different disk, remove the PrintPartner disk
       and replace it with the data disk before selecting this option.



      EXIT CALENDAR

       Exit the calendar maker function of PrintPartner and return the
       the main menu.

                                                                   Page 14


    PICTURE EDITOR

      The Picture Maker section of PrintPartner allows you to edit
      existing pictures and create new ones.

      The Picture Maker section presents you with the following menu:

         NEW PICTURE        Clear the current picture.
         EDIT PICTURE       Start editing the current picture.
         LOAD PICTURE       Load a picture to be edited.
         SAVE PICTURE       Save the current picture.
         DELETE PICTURE     Delete a picture from a graphics file.
         EXIT               Exit picture maker and return to the main menu.


      NEW PICTURE

       This clears the current picture from the drawing area, giving you
       a blank slate to start working from.  You will first be asked if
       you want to erase the picture.  This is to prevent you from
       accidentally erasing a picture that you did not want to erase.


      EDIT PICTURE

       This command allows you to do the actual editing of a picture.

       When you select this command the menu on the left side of the
       screen will be replaced with a list of keys that you can use
       in editing the picture.

         The Arrow keys, the Shifted Arrow keys.
         Draw mode: [M]ove, [I]nvert, [B]lack, [W]hite.
         [F]ast to toggle the fast move mode on and off.
         [S]ave to revert buffer.
         [R]evert to saved image.
         [SPACE] to place a black dot.
         [ESC] to stop editing.


       When you first start editing there will be a blinking dot at the
       upper left side of the drawing area.  That is were any of the
       drawing mode functions will take effect.  You can use the arrow keys
       and the shifted arrow keys to move the dot around the drawing area.
       On some systems the shifted arrow keys do not seem to work.  You can
       instead use the [F]ast toggle function to speed up the movement.
       When the fast mode is on the normal (un-shifted) arrow keys will move
       the dot around quickly just as if the shift key as pressed.  You can
       slow the movement down again by toggling the fast mode off again
       with the "F" key.
                                                                   Page 15


       Depending on which drawing mode you are in, moving the dot
       will cause different things to happen.

         [M]ove   : The dot is just moved without effecting the
                    drawing area.
         [I]nvert : The area the dot moves over will be inverted.
                    Meaning that the black dots under it will
                    turn white and white dots will turn black.
         [B]lack  : The area the dot travels over will turn black.
         [W]hite  : The area the dot travels over will turn white.

       The drawing mode can be changed at anytime by pressing the first
       letter of the mode you want to be in M, I, B, or W.


       Pressing the spacebar [SPACE] will place a black dot where the dot
       is currently blinking.  This makes drawing diagonal lines easier.
       When you are in the move drawing move you can place a dot move the
       current dot, place a dot, move the current dot and so on.


       [S]ave to revert buffer saves the current picture in the drawing
       area to a buffer.  You can then used the [R]evert command later to
       restore the picture in the drawing area to the one just saved.


       [R]evert to saved image.  This will take the image saved in the
       revert buffer with the [S]ave command and replace the one in the
       drawing area with it.  You will be asked if your really want to
       revert to the old image before the picture is actually replaced.

       When you revert to an a saved image the saved image will be placed
       in the drawing area and the current dot will be moved to the upper
       left corner of the area.  Additionally, you will be placed back into
       the move mode.  If you had not saved an image in the revert buffer
       the saved image is the picture as it was when you first entered the
       EDIT PICTURE function.


       Pressing the [ESC] key will take you out of the picture editing
       mode and return you to the main picture maker menu.
                                                                   Page 16


      LOAD PICTURE

       This command loads a picture from a graphic file into the drawing
       area.  It works just like all the other graphic selection
       commands.  You will be presented with a list of graphic (.GPH)
       files to choose from.  Use the up and down arrow keys to select
       the one you want and press the RETURN key.  You will then be
       presented with a list of picture names.  Use the arrow keys to
       move around the list.  As you move you will see the highlighted
       picture on the right side of the screen.  If there is a NEXT PAGE
       at the end of the list you can select it to move to the next
       screen full of pictures to choose from.  When you find the picture
       you want, press the RETURN key to select it.

       The picture will be loaded into the drawing area on the right side
       of the screen.  You can now use the EDIT PICTURE, and SAVE PICTURE
       commands to do things with it.


      SAVE PICTURE

       This command allows you to save the picture in the drawing area
       (even a blank picture) to a graphics (.GPH) file.  When you
       select this option you will be presented with a list of the
       graphics files on the disk.  Additionally, there will be an
       item at the top of the list "New File".  If you select one
       of the files the picture will be placed in that file.  If you
       select the New File option you will be prompted for the name
       of the file to make.  Once you enter a good file name it will
       be created and the picture will be added to that file.

       Now that you have selected the file to place the picture in you
       will be prompted from the name to give the picture.  You can
       use any typable characters you want in the picture name, and it
       may be up to twenty (20) characters long.  When you are finished
       typing in the name press the RETURN key.

       The picture will be added to the graphics file you selected.
       If there is already a picture with the same name as the name you
       entered for this picture you will be told so and asked if you want
       to replace the existing picture with the new one.  By responding
       yes the old picture will be deleted and the new one added to the
       file.  If you respond no the save operation will be aborted and you
       will be returned to the main picture maker menu.
                                                                   Page 17


      DELETE PICTURE

       This command allows you to select a picture in a graphics file
       to be deleted.

       It works just like all the other graphic selection commands.
       You will be presented with a list of graphic (.GPH) files to
       choose from.  Use the up and down arrow keys to select the one
       you want and press the RETURN key.  You will then be presented
       with a list of picture names.  Use the arrow keys to move around
       the list.  As you move you will see the highlighted picture on
       the right side of the screen.  If there is a NEXT PAGE at the end
       of the list you and select it to move to the next screen full of
       pictures to choose from.  When you find the picture you want press
       the RETURN key to select it.

       You will then be prompted to make sure that you really want to
       delete that picture from the file.  If you respond with a Yes,
       the picture will be deleted from the file.  If you respond No,
       you will be returned to the main picture maker menu.


      EXIT

       Exit the picture maker section of PrintPartner and return to
       the main menu.

                                                                   Page 18


    PMTOPP UTILITY

    The file PMTOPP.EXE included with PrintPartner is a utility that
    will allow you to convert your PrintMaster+ graphic files to
    PrintPartner format.

    To use the utility place it with the .SDR and .SHP files from the
    PrintMaster+ graphics file you wish to convert.  At the MSDOS
    command prompt type PMTOPP filename.  Where "filename" is the name
    of the graphics file to covert.  As an example if you wanted to
    convert the graphics in the PrintMaster+ files ULIB.SDR and ULIB.SHP
    you would type:

    C:\> PMTOPP ulib

    PMtoPP will look for the .SDR and .SHP files and if it finds them
    it will create a file with the same name containing the pictures
    in PrintPartner format.  From this example a file named ULIB.GPH
    would have been created.

    As PMtoPP converts the graphics file it will display the name of
    each of the graphics being converted.  If it cannot find either
    the .SDR or .SHP file it will inform you of the fact and which
    one it was that could not be found.

                                                                   Page 19


   RANDOM NOTES

    Font Selection:
      For banners the larger the font you select the better it will
      look since less scaling has to take place.  Also because of
      the method used for scaling, fonts without a lot of curves or
      diagonal lines look better when printed that large.

    Graphic Selection:
      For banners the same holds true for graphics as well.  The
      larger the graphic is to begin with the better it will look
      when it is printed.

    Smoothing faults:
      If you have printed some banners with graphics you will notice
      one of the slight problems with the smoothing of the graphics
      and fonts when used with banners.  There is a tendency for
      the smoothed fonts to be "rounded".  You'll notice it the most
      on the fonts with sharp corners.  The corners will get rounded
      and not be sharp.

   Screen Graphics:
     Due to the varying aspect ratio on the large number of different
     display card and monitor combinations for MSDOS machines the
     graphics and fonts shown on the screen may not always look like
     they will on the printer.  They may look stretched or shrunk either
     horizontally or vertically.

   Disk Space:
     If you are using PrintPartner on a floppy only system and wish
     to make room on your working copy of the PrintPartner disk you
     can delete the PP.DOC file and the PMTOPP.EXE file.  Once you
     have run PrintPartner and configured if for your printer you
     can look at the contents of the PP.CFG file and find which
     printer driver it is using for your printer.  Delete the other
     driver files (those files ending with the .PDR extension) to make
     more room.

   Laser Printing:
     Due to the 1 to 1 aspect ratio used by laser printers items printed
     on them will be slightly compressed horizontally.

   Loading Saved:
     Saved signs are not always compatible between printers.  If you
     create a sign, it may not print properly if you start using a
     different printer driver.  If the printer drivers have the same
     horizontal and vertical resolution it will look alright.  Otherwise
     you would be better off remaking the sign.  But then how often do
     you change printers?
                                                                   Page 20

    REGISTRATION

    PrintPartner is a shareware product.  This is not a demo or
    crippled version, but a full working version.  If you use
    PrintPartner, I ask you to send $20 to Acropolis Software to
    register your copy in return you will receive a disk containing
    the latest version and an extra sampler disk of extra graphics
    and fonts.  When you register your copy of PrintPartner, please
    use the order form below. If you do not use the form, please specify
    that you are registering PrintPartner and indicate your preferred
    disk format (5 1/4" or 3 1/2").

    Purchases of 10 or more copies will receive a discount making each
    copy of PrintPartner only $10.00 a piece.


    _______________________________________________________________________

                           Registration / Order Form


    Name       : __________________________
    Company    : __________________________
    Address    : __________________________
                 __________________________
    City/State : __________________________
    Zip Code   : __________________________

    (Optional)
    Phone      : __________________________



    Basic registration (less than 10 copies)      : $20 x ___ = $ ______
    Site license registration (10 or more copies) : $10 x ___ = $ ______
    *** California residents please add sales tax. ***

    Disk Format:    5 1/4" ___    3 1/2"  ___

    The product being registered is PrintPartner v1.1.
    You will receive the latest version of PrintPartner
    and a sampler disk of extra graphics and fonts.


      Send check or money order in US funds to:

            Acropolis Software
            P.O. Box 5037
            Fair Oaks, CA 95628
                                                                   Page 21

                     Optional Questionnaire

    If you have the time could you please fill out the following
    questionnaire to help in directing the future of PrintPartner?

    Please rate how important the following features are to you on a
    scale from 1 to 10 (with 1 being of little importance and 10 being
    of great importance).  Any other information or comments you have
    will of course be welcome.


    ___ Color support                  ___ Scaleable (smooth) fonts

    ___ Mailing labels                 ___ Wide carriage printer support

    ___ Greeting Cards                 ___ Font editor/creator

    ___ Graphic conversion program     --- Gift wrapping paper printing

    ___ More printers  (Specify:  Brand __________  Model _____________)


    Comments:


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2660

     Volume in drive A has no label
     Directory of A:\

    PP       DOC     45842   1-14-91   5:58p
    PMTOPP   EXE      3750   1-14-91   5:27p
    PP       EXE     66253   1-14-91   7:43p
    ARTNOUV  FON      9489  10-30-90  12:11a
    BASEL    FON     10474  10-30-90  12:21a
    CIRCUS   FON      7920  10-30-90  12:23a
    CMBX10   FON     15825  10-30-90  12:12a
    GREENBAY FON      8201  10-30-90  12:34a
    HOUSTON  FON      7702  10-30-90  12:24a
    MALIBU   FON     10591  10-30-90  12:39a
    MCCLOUD  FON     14495  10-30-90  12:32a
    PADOVA   FON      7401  10-30-90  12:26a
    SANDIEGO FON     11351  10-30-90  12:18a
    SCAN     FON      6761  10-30-90  12:33a
    DINO     GPH     13255   3-12-90   9:08p
    STANDARD GPH    105905   1-14-91   5:30p
    PP11     NEW      1508   1-14-91   5:53p
    APPLEIMG PDR       163   1-12-91  12:59p
    CITMSP   PDR       233   1-12-91  12:59p
    EPSON    PDR       257   1-12-91  12:59p
    LASERJET PDR       205   1-12-91  12:59p
    MOST24   PDR       321   1-12-91  12:59p
    GO       BAT      1000   5-30-91   2:33a
           23 file(s)     348902 bytes
                               0 bytes free
