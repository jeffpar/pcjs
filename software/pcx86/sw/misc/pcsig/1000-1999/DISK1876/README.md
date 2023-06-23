---
layout: page
title: "PC-SIG Diskette Library (Disk #1876)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1876/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1876"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MASDIR"

    MASDIR takes the fumbling out of dealing with directories. You can
    display and sort your files alphabetically by name or by extension or
    size or date. You can display your files on two, four or six columns,
    allowing you to view up to 126 files on a single screen. Change the
    display with a single keystroke without returning to DOS. Page backward
    or forward through long listings. You can also print disk labels in
    small and tiny type faces and three lines of titles on disk sleeves.
    Create files of directory listings for cataloging. On-line help
    screens, a tutorial, demo, and the documentation make it easy to use. A
    setup program permits customizing all the features of this versatile
    program.
    
    The disk also contains a public domain batch file enhancer and a utility
    to allow you to automatically use the pause command when browsing
    through ASCII files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1876.TXT

{% raw %}
```
Disk No: 1876                                                           
Disk Title: Masdir                                                      
PC-SIG Version: S5                                                      
                                                                        
Program Title: MASDIR                                                   
Author Version: 5.0                                                     
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
MASDIR takes the fumbling out of dealing with directories.  You can     
display and sort your files alphabetically by name or by extension or   
size or date.  You can display your files on two, four or six columns,  
allowing you to view up to 126 files on a single screen.  The pause     
command can be automatically invoked.   You can also print disk labels  
in small and tiny type faces and three lines of titles on disk sleeves. 
                                                                        
The disk also contains a public domain batch file enhancer and a utility
to allow you to automatically use the pause command when browsing       
through ASCII files.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILELIST.DOC

{% raw %}
```
SDL Version 5   Copyright(c) 1987-90 Bob  
 Stephan Vol:MASDIR 5    07/13/90 00:07    This file was created with
/OPTS:/? More PRInt Cls titlE Hdr Fre Lb   the Print-to-file option of
l All rK Byt Wid 2 4 6 N X S D[n] - dOs    SDL. The descriptions were
            Directory of A:\               then added.
--------------------------------------- ------------------------------
Filename.ext  Bytes Atr -Last  Change-  Description of files
DEMO    .BAT   2002     06/03/89 16:43  Demonstration driver
DEMOPRN .BAT   8048     05/14/89 00:23  Demonstration overlay
DEMOSCR .COM   2048     08/08/87 13:15  Demonstration overlay
DEMOSDL .BAT  13742     06/03/89 16:20  Demonstration overlay
GO      .BAT      8     11/24/88 19:33  Main starter for instructions
INSTALL .BAT   5286     06/04/89 14:27  Installation program
LOGO    .COM   2048     07/09/90 17:04  Documentation screen
MAINSCR .COM   2048     08/08/87 17:52  Documentation screen
MASDIR  .COM   2048     11/23/88 21:59  Documentation screen
MASDIR  .DOC  24273   A 07/12/90 22:22  Main documentation file
MASDIR5 .NEW  17470   A 07/11/90 23:43  New features in Version 5
MENU    .BAT    743     07/12/90 22:49  Documentation driver
MENUSCRN.COM   2048     03/18/90 22:14  Documentation screen
ORDER   .FRM   4430   A 07/12/90 22:35  Order Form and price list
README  .BAT     61     06/03/89 16:04  Alternative startup for instructions
REGISTER.COM   2048     07/09/90 17:04  Documentation screen
SDL     .COM  12287     07/12/90 23:24  MAIN PROGRAM
SDLDEBUG.BAT   1558     07/12/90 23:24  Setup program overlay
SDLFINIS.BAT   2027     07/12/90 23:24  Setup program overlay
SDLNOTOG.BAT   7010     07/12/90 23:24  Setup program overlay
SDLPARMS.BAT   9733     07/12/90 23:24  Setup program overlay
SDLSETUP.BAT   5214     07/12/90 23:24  Main setup program driver
SDLSETUP.DOC  10299   A 07/12/90 23:24  Setup program documentation
SDL_GET .EXE   4207   A 07/12/90 23:24  Batch file enhancement utility
SDL_SHOW.EXE   2319   A 07/12/90 23:24  ASCII file viewer
SETUP   .BAT    797     06/03/89 17:04  Alternate setup program driver
TUTOR   .BAT    241     06/03/89 17:00  Alternate documentation driver
  27 Files;  155648 bytes/1Kb clusters. 

```
{% endraw %}

## MASDIR.DOC

{% raw %}
```

     SDL.COM   -  TUTORIAL  -  Copyright (c) 1987,1988,1989 Bob Stephan



     You will be able to browse through the TUTORIAL information at your
      own pace.  Just use the keys on the cursor pad to turn the pages as
      you read.  Note the reminder at the top of the screen, and remember
      that you can exit at any time by pressing Esc.

     I hope you will take a few minutes to complete this TUTORIAL which
      includes some explanation and then the DEMO.  This will help you to
      understand and make full use of SDL.

     In addition to this general documentation, be sure to read the new
      features file.  Either select it from the README menu, or just read
      the file named MASDIR5.NEW.



     (Now press the PgDn key to turn the page).



     SDL TUTOR file for SDL.COM, Sorted Directory and Disk Label Printer
      Version 5, July 1990,  Copyright (c) 1987,88,89,90 Bob Stephan

     MASDIR (pronounced 'master') is an acronym for MASter DIRectory
      System.  SDL is the main program.  To use SDL simply copy SDL.COM to
      the disk and/or directory where you keep your other DOS command files
      or utilities.  Then just use SDL in the same way you use DIR.

     This is a brief explanation of the features of SDL.COM.  After you
      become familiar with these basics, please run the demo and read any
      additional information provided to learn how to get the most out of
      SDL.

     WHAT IS SDL AND WHAT CAN IT DO?

     SDL is a Sorted Directory Listing program that is used in place of the
      DOS DIR command.  You can invoke it from the DOS prompt just like
      DIR, and it accepts the same file specifications (filespecs) that DIR
      does including paths and wild cards.

     But there the similarity ends.  SDL has these features and more:

     <>  Sorts the listing alphabetically by name, or optionally by
         extension, date, size, or (like DIR) not at all.

     <>  Presents the listing in 2, 4 or 6 columns of file names in easy to
         read format.  This permits you to see up to 126 file names on the
         screen to get a good overall view of the contents of the disk or
         directory.  SDL automatically calculates the number of columns to
         use, or you can specify the format you want.
     <>  Pauses after each screen until you are ready to continue.  At the
         pause you can make new option selections, page backward or
         forward, exit, or continue.

     <>  The options are selectable at the DOS  prompt by adding them to
         the SDL command (like you can add /P or /W to the DIR command).

     <>  Many options can also be selected from a menu that is presented at
         the bottom of the screen at the end of the listing.  This permits
         you to change your mind as often as you like, and adjust the
         listing to obtain just the right information from it without
         having to return to DOS and enter a new command.

     <>  Other useful options are available that will be explained further
         in this TUTORIAL and in the DEMO to follow.

     <>  A setup program lets you select your own defaults for the various
         options by entering single keystroke answers to a few questions.
         You can make SDL work the way you want it to.

     <>  On screen help by entering SDL /? at the DOS prompt.

     <>  Unique to SDL are some excellent printing capabilities! With a
         single keystroke you can print the directory you see on the screen
         in your choice of five print modes:

         1. Regular printing in whatever mode your printer is set for with
            no changes to your printer setting.

         2. A "sleeve insert", which is printed on your regular printer
            paper in a format that can be trimmed to a convenient size to
            slip into the diskette sleeve for future reference.

         3. A disk label which can be printed on the special labels that
            are included with the SDL system kit.  This uses compressed
            print and 8 lines per inch to fit the filenames into a small
            space.

         4. Another style of disk label printing which uses "tiny" printing
            to fit even more names onto a label.  Tiny print makes use of
            the compressed and superscript modes that are available on
            Epson compatible printers.

         5. Print-to-file to save a file copy of the directory listing.

     <>  Very useful when using the print options is the ability to enter
         up to 3 lines of titles for your sleeve inserts or labels.  Two of
         these lines can be customized with the setup program, and any or
         all of the 3 can be specialized for any individual listing.

     HOW TO USE SDL

     To use SDL simply copy SDL.COM to the disk and/or directory in which
      your other DOS commands and utilities are kept.  Then use SDL in the
      same way you use DIR.

     Be sure to back up your SDL diskette by copying everything to another
      diskette.  You will probably want to customize SDL with the setup
      program, so make a working disk or directory by copying just the
      SDL*.* files from the MASDIR disk to a working disk or directory.
      You can use the program INSTALL to help you do this.  Just enter
      INSTALL at the DOS prompt, or select it from the MASDIR menu.

     There is a full DEMOnstration available on this disk.  You will be
      given a chance to run the DEMO at the end of the SDL TUTOR program.
      To run it later by itself just enter DEMO.

     SDL is used very much like DIR.  It takes the same path and file
      specifications, but it presents a much more readable listing.  By
      using 2, 4, or 6 columns of file names instead of one, it lists many
      more files on one screen.  If the screen becomes full, it
      automatically pauses.  You can immediately shift to a different
      number of columns to see more files on the screen, exit if you have
      seen enough, or continue with the listing.

     SDL can be used in menu mode.  Enter SDL with your filespec just like
      DIR, then make your selections from the menu at the bottom of the
      screen.

     SDL also has many options that can be entered on the command line in
      the usual fashion using / as a "switch" or option indicator.  The
      command line is the line on which you enter your DOS commands at the
      DOS  prompt.  At first, SDL /? will be useful to bring up a help
      screen.  The /? option displays a reminder of the syntax and options.
      To see these help screens just enter SDL /? at the DOS prompt.  You
      will be given a chance to see this screen during the DEMO.

     Although there are quite a few options to provide the capabilities
      requested by users, you will find them to be quite intuitive and easy
      to use.  After a few minutes of experimentation you will find a few
      of them that you like to use.  This experimentation can be taken care
      of in the DEMO program to follow.

     As soon as you find the options that you like, you can customize your
      copy of SDL with the SDLSETUP program.  We have tried to configure
      SDL the way we believe most users would like it, but you might want
      to change it for your own use.  If you would like one or more of the
      defaults to work differently, run SDLSETUP.  Then it will only be
      necessary to use options occasionally when you want something
      different.  The SDL /? help screen is always available as a reminder
      at those times.  The MENU program will give you an opportunity to
      read the SDLSETUP documentation, but SDLSETUP is easy to use,
      requiring only simple answers.

     The printing capabilities of SDL are most useful and remarkably easy
      to use.  For example, to print a label for the diskette in drive A,
      just enter SDL A: /L.  Nothing could be simpler.  The /L is an option
      mnemonic for Label, and SDL will calculate how many file names it can
      fit on a label and select the print mode to do it.  Of course, if you
      want more control, and less automation, SDL will always let you make
      your own specifications.  You can print labels in either of two print
      styles, labels and sleeve inserts, in a variety of sort orders and
      columns of file names, or you can print with your own normal printer
      setting.  The 3-line title option (/E) provides a means to include
      printed explanatory information about the contents and use of the
      files on the disk.

     You now have enough information to experiment with SDL.  To display a
      directory at the DOS prompt (A>, etc.), enter SDL just as you would
      the DIR command.  This is called the "command line".  On the command
      line you may include one or more of the useful options, such as /X to
      sort the files alphabetically by their eXtensions, or /S by their
      Size.  The default is to sort alphabetically by Name.  (The DEMO will
      show you more.)

     Example: SDL B: /S /4

     will display the files on the B: drive in 4 columns sorted by size.

     The reminder line at the top of the display gives a terse list of the
      options available to use on the command line, with the key letters
      shown in CAPS.  It looks like this:

/OPTS:/? More PRInt Cls titlE Hdr Fre Lbl All rK Byt Wid 2 4 6 N X S D[n] - dOs

     Use the key letters in CAPS, or '?', or one of the numbers 2, 4, or 6,
      each preceded by the 'switch' character '/' as shown in the example.

     Start out with the different column numbers (/2 /4 or /6) and
      different sort orders (/N for name, /X for extension, /S for size, /D
      for Date, or /O for no sort at all to view the files in the same
      mixed up order that DIR would show them).  The letter options can be
      entered in either upper or lower case.  They are shown in upper case
      merely to highlight them as key characters.  After you see how easy
      it is, you can learn about the other options, or just try them to see
      what happens.

     A few experiments will quickly give you the hang of it.  The DEMO that
      follows will guide you through a few examples, then you can try it
      out on your own when you finish the DEMO.

     Try all of the options, but note that you must have a printer on line
      to use the /P or /L options.  /P will display a print options menu
      from which you can select F(ile), L(abel), I(nsert), R(egular), or
      T(iny).  For I, T and L the printer must be Epson/IBM compatible.
      (Contact me if you want to use SDL with some other printer.) The R
      option will print with any printer - just set the print mode that you
      want then use SDL.

     Important! On multi-screen displays, at the bottom of each screen or
      directory you will be presented with a prompt containing some of the
      same options you saw in the reminder line at the top.  This is
      intermediate menu.  If you select one of the options shown using the
      letter in CAPS or the number, that action to be taken immediately.
      If you press any key (including ENTER) that is NOT shown in the
      prompt, SDL will continue normally.  When it has completed the
      display of the directory you can EXIT by pressing Esc, End, space, or
      Enter(Return).  To eliminate the pausing and the menus you can use
      the /M (for More) switch on the command line.

     Just remember, if you want to display the directory AGAIN, press only
      one of the keys shown in CAPS or numbers.  If you want to exit or
      continue, press Esc, Space, End, or Enter.  For example, if you want
      to change COL's, simply press the 2, 4, or 6 key.

     By permitting you to adjust the display of the directory without
      exiting to DOS, SDL is much more useful than many other programs.
      Along with the label and sleeve insert printing capabilities, it
      should prove to be an invaluable addition to your software library.
      Don't forget to use SDLSETUP to set it up YOUR way!

     Just a note about reading documentation on the disk.  You are reading
      this file using a public domain program named SDL_SHOW.  If you want
      to use it to view the setup documentation, enter SDL_SHOW
      SDLSETUP.DOC or type README to bring up the menu.

     Use the cursor pad keys to browse, and remember that you can exit at
      any time by pressing Esc.

     Finally, there are some additional programs on this disk.  These are
      provided at no extra charge.  They are not to be sold commercially
      and are not part of the SDL package.  They are provided simply as a
      free service.  You might find some of them useful.  Most are public
      domain programs and are provided on an "as is" basis.  Each file is
      accompanied by a .DOC file explaining briefly its purpose and use.
      Any "shareware" programs will explain the concept of shareware and
      request a fee for continued use.  Use SDL to display the names of all
      of the DOC files by entering the command

     SDL *.DOC

     then take a few minutes to read them.  They are short enough to use
      TYPE, but you can use SDL_SHOW to display them, or any other file
      display program such as Verm Buerg's LIST.

     * ! ! ! ! ! ! ! ! ! ! ! I M P O R T A N T ! ! ! ! ! ! ! ! ! ! ! ! ! *
     *   MASDIR5.ARC is a complete copy of the user-supported version    *
     *   of SDL.COM and associated files.  It contains all the files     *
     *   "arc"ed into one compressed file.  Popular "arc"ing programs    *
     *   such as PKUNPAK or ARCE can restore the files in MASDIR5.ARC    *
     *   to a workable system.  DO NOT MIX THE FILES FROM MASDIR5.ARC    *
     *   WITH ANY OF THE OTHER FILES ON THE DISK!! You may, however,     *
     *   give copies of MASDIR5.ARC to your friends, donate a copy to    *
     *   your user group software library, and upload copies to          *
     *   electronic bulletin board systems.  Remember, protect your      *
     *   investment in SDL by keeping the entire system separate         *
     *   from the files in MASDIR5.ARC.  Although they have similar      *
     *   capabilities, they are incompatible with each other.            *
     * ! ! ! ! ! ! ! ! ! ! I M P O R T A N T ! ! ! ! ! ! ! ! ! ! ! ! ! ! *

     Thank you for taking these few minutes to become acquainted with a few
      of the features of SDL.  It may be slightly confusing at first, most
      powerful programs are, but your patience will be well rewarded.
      After a few more minutes in the DEMO, you will have a much clearer
      picture about what SDL can do for you.  Trying to explain it
      makes it sound much more complicated than it really is.

     Don't be hesitant to try out SDL on your own.  After you see the
      usefulness of the many features, you will want to run SDLSETUP to
      customize SDL to your own tastes.  Please let us know if you have any
      problems, questions, or suggestions.

     That concludes the TUTOR information.  We have prepared a
      demonstration program to show you how to use some of the features of
      SDL.  This would be a good time to take a look at the demo.

     In addition to this general documentation, be sure to read the new
      features file.  Either select it from the README menu, or just read
      the file named MASDIR5.NEW.

                    MASDIR - The MASter DIRectory System
                 Description of new features in Version 4.3
        ************************************************************
                   Special Offer--FREE LABELS--See Below

       The main enhancement is printing directory labels for 3.5"
      disks.  This is controlled by the 3 and 5 options--3 for 3.5"
      disks and 5 for  5.25" disks. On the command line you can enter
      either /3 or /5 to prepare SDL to print the style of label you
      want. The Print Options menu is brought up by entering either P
      or R from the menu, or /P or /R on the command line. From this
      menu you can select, or change your selection, by pressing either
      3 or 5 as appropriate. The default 3.5" disk form depth is set
      for the 2-3/4" labels that wrap around the top of the disk. The
      setup program permits setting it for the 2" labels that do not
      wrap.  The default is set for the 5.25" labels, so use the 3 or
      /3 option to get 3.5" labels, or change it with SDLSETUP.

       There is also a new W or /W option that will list the files in
      sort order across the Width of the screen vice down the columns.
      When printing a 3.5" disk label this is the only method of list-
      ing file names that is available, but for listing on the screen
      or on a 5" label you can choose by toggling with W or /W.

       Another new feature is the option to set the cluster size for
      the total bytes. Since 1.2Mb and 1.44Mb disks use 1-sector
      clusters, the default rounding up of the file size total in 1Kb
      increments is not accurate for these disks (or for hard disks).
      A new /B (for Bytes) command line option is available to adjust
      for the number of kilobytes per cluster. /B1 (the default) for 1
      Kb (2 sectors) per cluster as on 360k and 720k diskettes, /B for
      .5 Kb (1 sector) per cluster as on 1.2Mb and 1.44Mb diskettes,
      and /Bn, n=2-8 for hard disks as appropriate where n indicates
      the number of Kb per cluster. This option is only available on
      the command line, but SDLSETUP is able to set the default as
      desired. Note that /Bnothing (or /Banything other than 1-8) drops
      to 1 sector per cluster, and /B1 is the same as the current de-
      fault.  The number, if used, must immediately follow the B with
      no spaces.

      A few notes about 3.5" disk labels: (For convenience the labels
      and disks will be referred to as 3" and 5".)

      Until actual printing is started the screen display will be the
      normal display.  If 3" disk label or Insert printing is selected,
      each line of the display will be split to fit the 2-3/4" width of
      the label.  Thus, a 2 column screen display will result in a 1
      column 3" disk label, a 4 column screen display will be a 2
      column label, and a 6 column screen display will be a 3 column
      label.  The 2, 4, and 6 selections remain unchanged for either
      type of label.  To keep the file names sorted properly, the W op-
      tion will automatically be invoked during the printing of labels
      for 3" disks.

                                     -2-

      The R print option is not affected by the label setting, but the
      File option is.  You can use this to create a directory catalog
      file with space for your own comments after each file name.

      When entering titles for 3" labels, each line will be split after
      the 40th character.  The vertical bar indicates the position of
      the last character that goes on the first line of the split.  The
      next character after the bar will start the second line of the
      split.  If you need to see the effect of the split on the screen
      before printing use the File option and create a temporary file
      that can be erased later or specify the NUL output device which
      gives no output at all but does show the screen display.  Then
      "what you see is what you get".  When it is what you want you can
      select the print mode.

      FREE LABELS!  With each registration of Version 4.3 you may
      select ONE (1) FREE unit of labels from the ORDER FORM.  Just write
      FREE in the Amount column.  You must include the $2 handling fee
      with any label order, FREE or not.  This offer may be retracted
      or changed at any time.  Units are either 100 or 50 labels as
      indicated in the Quantity column of the Order Form.

         ************************************************************
              Review of new features introduced in Version 4.2

       Use of the PgUp, PgDn, Home, and End keys.  These keys can be
      very useful for paging backward and forward through large direc-
      tories.  Pressing the PgUp key will redisplay the previous
      screen.  This can also be used on the first screen to eliminate
      the header completely and display up to 144 filenames on one
      screen. B for Back will also work.  PgDn pages to the next screen
      the same as C, End ends the display the same as Esc, and Home
      returns to the first screen--similar to pressing C at the end menu,
      but Home can also be used for this purpose at the intermediate
      menu. To quickly get to the end of the listing, press the '-' key.

       Reverse sorting.  The '-' character is the symbol to sort the
      file names in descending, vice ascending order.  On the command
      line this can be /-, /a-, or /-a where a is one of the alphabetic
      characters N, X, S, or D. (There is no reverse for DOS order.)
      At either the end or the intermediate menu, pressing the "-" key
      will re-sort the names in reverse order using the same sort field.

       The third major new feature is the print-to-file capability.
      Now on the Print Options menu a "File" option appears. If you
      select F you will be prompted for a file name.  This can be any
      valid non-ambiguous file specification (no wildcards). If the
      file exists, the directory output will be appended to the end of
      the file.  Be careful not to use reserved DOS names such as COM1,
      AUX, LPT1, PRN, NUL, etc.; although you can use NUL to preview
      the printing of a disk label with no output.
 
                                     -3-

         ************************************************************
              Review of new features introduced in Version 4.1

       Control of printing is much more versatile.  The prompt line in-
      dicates whether printing is on or off (Prn=ON or Prn=OFF).  The P
      option brings up a print menu.  On the print menu Esc will turn
      printing off if it was on, or exit without turning it on.  Press-
      ing C for Cls turns on page eject (ff for form feed).  This is
      also indicated on the prompt line with (ff=ON or ff=OFF).

       Disk Free Space is no longer shown unless specifically asked for
      with the /F option on the command line, or F at the menu.  DOS
      takes a noticeable amount of time to calculate the disk free
      space, so eliminating the display of this information greatly
      speeds up the directory display.

       The calculation of the total "Bytes in xxx Files" is rounded up
      to the next exact kilobyte for each file.  (Individual file sizes
      are not.)

       SDL automatically adjusts for any number of lines of text your
      monitor is set for such as 43 line EGA, or 50 line VGA modes.

              Additional New Configuration Features in SDLSETUP

       A setup option to use the box drawing characters on the printer
      like those on the screen. (Use only if your printer supports it.)

       Suppression of the . and .. file directory entries.

       The sort orders of N for Name (the default), X for eXtension, D
      for Date, and O for Original or dOs (nO sort at all), are avail-
      able.

       SDLSETUP now has a (cr) option to select "no change" for any
      question and just move on to the next.  Pressing Esc will skip to
      the next section.

       You can adjust the number of rows that you want on labels when
      you use the Tiny option to get the maximum your printer will sup-
      port.

      ******* Now, if you want to exit, remember to press Esc. *******

```
{% endraw %}

## SDLSETUP.DOC

{% raw %}
```



     * * *
     SDLSETUP.BAT - DOCUMENTATION - Copyright(c) 1987,88,89 Bob Stephan
     * * *
     You will be able to browse through the SDLSETUP documentation
     at your own pace.  Just use the keys on the cursor pad to turn
     the pages as you read.  Note the reminder at the top of the
     screen, and remember that you can exit at any time by pressing
     Esc.
     * * *
     SDLSETUP will not modify any of your original files.  Only
     SDL.COM will be affected.  In particular, your CONFIG.SYS and
     AUTOEXEC.BAT will not be touched.
     * * *
     NOTE:  Since this documentation was prepared, a menu facility
     and more options have been added to SDLSETUP.  The operation
     remains essentially the same, and the menus and additional items
     should be self-explanatory.

    (Press the PgDn key to continue)



Documentation for SDLSETUP.BAT for SDL Version 4.3, April 1989
Copyright(c) 1987, 1988, 1989 Bob Stephan

SDLSETUP is a handy program to customize many of the options of
SDL, the Sorted Directory and disk Label printing program.  It requires
only that you answer a series of questions with single keystroke
responses and, if desired, input new titles to appear in the top 2 lines
of the display.

To run SDLSETUP establish a working disk or directory (a RAM disk will
be fastest, a directory on a hard disk next, and a floppy can be
quite slow).  Enter the following command to copy the necessary
files from the MASDIR diskette to your working area.  Assume that the
MASDIR diskette is in drive B: and the working area is the current
directory on drive C:.  Then just enter

    COPY B:SDL*.* C:

You can add the path after C: if you so desire, or just issue this
command after changing to the working disk or directory.  You can use
MAKEWORK to help you do this if you like.  Enter MAKEWORK at the DOS prompt.

All of the questions in SDLSETUP are self-explanatory and should cause
no confusion.  A few of them are explained in a little more detail
here.  If you have any questions, read on, and then if you still have
questions after running SDLSETUP please contact me.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
SDLSETUP
* * *
MESSAGE: Checking system resources. Please wait.

At this point SDLSETUP is looking for the DOS DEBUG external
command.  If it is not found you will see the message "Bad command
or file name".  This will be followed by a beep and the following:
* * *
The message "Bad command or file name" that you just saw means
that a system file is not available to SDLSETUP.
This program requires access to the DOS external command file
DEBUG.COM.  It must be in this directory on this disk or in
one of the directories on your path, which is
PATH=              (REM: your current path will be displayed here).
Please correct the problem and run SDLSETUP again.

(REM: This will be followed by an exit back to DOS for corrective action.
      But if DEBUG is found, SDLSETUP will check for the presence of other
      files.  Depending on what is found you may see some of the following
      messages.  If you don't see them, then all is well.)

(REM: One user reported a problem during this portion of the setup
      program, and it turned out that he was running a RAM resident
      program named DOSEDIT.  This appeared to interfere with the
      redirected input to DEBUG.  The solution was just to boot the
      computer without DOSEDIT temporarily while running SDLSETUP.)

Next the presence of required files will be verified. If any needed files
are not present, you will see ...
* * *
The following files must be in this current directory on this disk:
SDL.COM
SDL_GET.EXE
SDLTITLE.COM         (REM: Except for the shareware version)
SDLSETUP.BAT
SDLPARMS.BAT
SDLNOTOG.BAT
SDLFINIS.BAT
SDLDEBUG.BAT

Next the DOS version will be checked.  If it is found to be
      version 2.x you will see the following message.  Please see
      the note at the end of this DOC file.

* * *
If you have any difficulty running SDLSETUP under DOS 2.x,
please see SDLSETUP.DOC.
* * *
Setting the More or Pause default...

Pausing refers to both intermediate pauses if the directory is
more than one page (screen), and the pause at the end to allow
you to select a new option.  This is merely personal preference, but
pausing is a good idea, and it allows you to select new options.

* * *
Setting the Hdr default...

The first two lines of the header contain my copyright notice
and the reminder line, as well as the volume label.  If you use
SDL mostly for directories on the your hard disk drive, you may
have no need for the first two lines as a rule.   This permits 2
more rows of files to be shown on the screen.  The directory
name will still be shown, and you can restore the title lines
for any display with the /H option. Later during SDLSETUP you will be
given the opportunity to change the default titles in these two lines.
* * *
Additional defaults will be explained and prompted for.  They should be
self-explanatory, but if you have any questions see the rest of the
MASDIR documentation.
* * *
Setting the sleeve Insert eject default...

A half page saves paper if you print many Inserts.  Then if you
print an even number of inserts your TOF setting will not be changed,
but if you print an odd number your printer will be left at the middle
of a page.  If you prefer to always use a full page for a sleeve Insert,
you can set that here.

* * *
Installing your own default title lines...

If you answer N you are finished, and SDLSETUP will call DEBUG
to make the changes you have requested.  If you answer Y,
another program, SDLTITLE.COM, will be called to ask you for the
titles you want.  The first line title can be 44 characters long
and the second line can be 79 characters long.  If you want to
change only one, just press ENTER for the other.  Whenever you
just press ENTER, the original title will be used.  If you want
to blank out a title completely, just enter one or more spaces.
If you want to have your own titles on the first two lines you will
have to enter them both even though you may just be changing one of
them from a previous setting.

To restore the original titles, simply press ENTER at each prompt.
Setting your own titles or restoring the original titles
eliminates the highlighting of the key characters in the reminder
line and allows all lines of the directory display to be redirected
to a file if desired.

After the titles the program will run to completion.  The only problem
that can arise is no access to DEBUG.  In that case you will see the
following message.

Bad command or file name
Using the DOS DEBUG command appears to have failed!
You may not have a path to DEBUG.  Please check the
directories on your path for the existence of DEBUG.COM.
If you can establish a path to DEBUG or copy DEBUG.COM
to this working area, you can install the changes you
have made by entering SDLDEBUG.

If you see this message, please make DEBUG available from
your version of DOS and run SDLSETUP again.  In fact, if you have
gotten this far you can take a short cut and run SDLDEBUG after you
have made DEBUG available.  That will finish up the changes.

(CAUTION: Do NOT run SDLDEBUG if there has been any other error
or interruption.  In that case it is safer to start over again,
but see the NOTE below.  SDLDEBUG uses redirection and if the
input file SDLSETUP.TXT has not been completed, it can cause a
hangup that will require a reboot.)

If everything completed normally you will see the message...

SDL.COM has been modified.
Don't forget to COPY your new version of SDL.COM
to the disk and/or directory with your other DOS
commands and utilities.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
That's all there is to it, so enjoy using SDL with your own configuration.

SDLSETUP creates two working files named SDLSETUP.TXT and
SDLTITLE.TXT.  These files will be erased when SDLSETUP is
finished with its work.

NOTE:  I have run into an occasional problem running SDLSETUP
under DOS 2.1.  Generally it works fine, and I can detect no
problems under DOS 3 or later, but if you see either of the
messages "EXEC failure" or "File creation error" please let
me know.  You might try increasing the "FILES=" value in your
CONFIG.SYS file and reboot.  A remote possibility is that the
directory is full, so you might try running it on a different
drive or in a different directory.  You can also run CHKDSK to
see if there are any other conditions that might cause the error.
This seems to be caused by a problem with DOS 2.1 in the number
of open files it thinks it has.  One method that some have used
successfully to work around this is to make only one or two changes
to the defaults on each invocation of SDLSETUP.  If this works, you
will have to reboot your computer before you can run SDLSETUP again.
This may be tedious, but it is one way to use SDLSETUP with DOS 2.1.
Be sure to use the Esc key to skip the sections in which you are
not making changes.

This problem is apparently caused by a bug or deficiency in DOS
2.1, but I have included another work-around for it.  If you see
either of the above messages, AND if SDLSETUP has finished all
of its questions through the ones about changing the titles, then
reboot with Ctrl-Alt-Del and get back to the drive and directory
in which you were running SDLSETUP.  (If you are working on a RAM
disk, copy your work to a permanent disk first.) One or two of the
.TXT files named above should be in that directory (2 if you changed
titles, otherwise only the first one).  If you see SDLSETUP.TXT
you can run SDLDEBUG, the last batch file in the series.  This
should install your changes and clean up after itself.
See the CAUTION above about other types of problems.  I apologize
for any inconvenience, but it is a problem beyond my control.

As a last resort, run SDLSETUP on a machine that is running
DOS 3.0 or later.  Then copy the resulting SDL.COM to your
machine.  Good luck!

        Now, if you want to exit, remember to press Esc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1876

     Volume in drive A has no label
     Directory of A:\

    SDLDEBUG BAT      1558   7-12-90  11:24p
    SDLSETUP BAT      5214   7-12-90  11:24p
    SDLFINIS BAT      2027   7-12-90  11:24p
    SDL_SHOW EXE      2319   7-12-90  11:24p
    SDL      COM     12287   7-12-90  11:24p
    SDL_GET  EXE      4207   7-12-90  11:24p
    SDLSETUP DOC     10299   7-12-90  11:24p
    SDLNOTOG BAT      7010   7-12-90  11:24p
    SDLPARMS BAT      9733   7-12-90  11:24p
    MASDIR5  NEW     17470   7-11-90  11:43p
    ORDER    FRM      4430   7-12-90  10:35p
    DEMO     BAT      2002   6-03-89   4:43p
    MASDIR   DOC     24273   7-12-90  10:22p
    DEMOSDL  BAT     13742   6-03-89   4:20p
    SETUP    BAT       797   6-03-89   5:04p
    INSTALL  BAT      5286   6-04-89   2:27p
    TUTOR    BAT       241   6-03-89   5:00p
    DEMOSCR  COM      2048   8-08-87   1:15p
    GO       BAT         8  11-24-88   7:33p
    MAINSCR  COM      2048   8-08-87   5:52p
    MASDIR   COM      2048  11-23-88   9:59p
    MENUSCRN COM      2048   3-18-90  10:14p
    LOGO     COM      2048   7-09-90   5:04p
    README   BAT        61   6-03-89   4:04p
    DEMOPRN  BAT      8048   5-14-89  12:23a
    REGISTER COM      2048   7-09-90   5:04p
    MENU     BAT       743   7-12-90  10:49p
    FILELIST DOC      2241   7-13-90   8:50a
    FILE1876 TXT      1851   8-13-90  12:29p
           29 file(s)     148135 bytes
                            5632 bytes free
