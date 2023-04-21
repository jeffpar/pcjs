---
layout: page
title: "PC-SIG Diskette Library (Disk #3440)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3440/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3440"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.DOC

{% raw %}
```

          
          
          
                                Textshot Version 2.1
          
                                      +++++++++
          
                                by McAdams Associates
          
          
          
          
          *****************************************************************
          
          
          
          
                                    **IMPORTANT**
          
           To register Textshot, see "Registering Textshot" on page 9 of 
                                    this manual.
          
          
          
          Contents                                   Page
          --------                                   ----
          
          Description................................ 2
          Hardware Requirements...................... 2
          Loading Textshot........................... 2
          Removing Textshot from Memory.............. 3
          Activating Textshot........................ 3
          Using Textshot............................. 4
          Saving a Screen............................ 5
          If There Are Problems...................... 6
          Image Editing.............................. 6
          Tips For Getting a Good Picture............ 7
          Disclaimer & Agreement..................... 8
          Registering Textshot....................... 9
          Index...................................... 10
          
          
          
          
          
          
          
          
          
          
          
          
          
              (C)Copyright 1992 by T.C. McAdams.  All Rights Reserved.
          TEXTSHOT DESCRIPTION
          --------------------
          
          Textshot is a pop-up TSR (Terminate and Stay Resident) program 
          designed to be a text screen counterpart to ZSoft's FRIEZE(tm), 
          producing output files for use in word processors and desktop 
          publishing applications.  The user loads Textshot into memory, 
          presses the hot key from within a character-based application, 
          and a menu pops up permitting entry of a filespec and a choice of 
          various file options.  When the [ENTER] key is pressed, the 
          screen is restored and is saved to disk in the form of a 
          monochrome (2-color) PC Paintbrush-format .PCX graphics file.  
          This file can be loaded into any application that accepts .PCX 
          files or into ZSoft's PC Paintbrush(tm) itself, for editing.  PC 
          Paintbrush is not needed to use Textshot.  This version of 
          Textshot also permits image "clipping" prior to writing an image 
          to disk, as well as the optional preservation of all image 
          settings "between pop-ups".  Textshot should work on any DOS 
          computer running DOS 2.11 or above.
          
          HARDWARE REQUIREMENTS
          ---------------------
          
          Textshot will work with any of the common PC video standards.  
          Specifically: MDA/Hercules, CGA, EGA and VGA.  Textshot is 
          intended to work only in text modes, not in graphics modes.
          
          Textshot will capture 80x25 screens (all standards), 80x43 
          screens (EGA and VGA) and 80x50 screens (VGA).  Screen formats of 
          other than 80 columns are not supported.
          
          Since Textshot relies on a computer's internal graphics fonts for 
          its output, the computer on which it's run must have, at minimum, 
          a complete CGA font set.  In instances where this is not the 
          case, a DOS utility called GRAFTABL must be run to supply the 
          "upper half" of the necessary font set.  EGA and VGA cards supply 
          their own complete font sets.
          
          
          LOADING TEXTSHOT
          ----------------
          
          Textshot is loaded into memory by typing
          
                          TEXTSHOT [ENTER]
          
          at the DOS command line.  If you use an expanded memory manager, 
          Textshot will function happily there, leaving your DOS memory 
          free for other things.  For example, if you use Quarterdeck's 
          QEMM, you can load Textshot into high memory by typing 
          
                          LOADHI TEXTSHOT [ENTER]
          
          When Textshot is loaded a message appears telling you so.  As 
          mentioned above, on some machines a full (256-character) ROM font 
          
          
                                          2
          set may not be available; Textshot checks to see before loading.  
          If this is the case, you are told to run the DOS GRAFTABL utility 
          before proceeding.  Screen printing is disabled while Textshot is 
          resident.
          
          REMOVING TEXTSHOT FROM MEMORY
          -----------------------------
          
          To remove Textshot from memory simply type
          
               TEXTSHOT [ENTER]
          
          from the command line, just as if you were loading it.  Note: If 
          you loaded Textshot into high memory through a memory manager, 
          don't invoke the memory manager a second time to remove Textshot; 
          just type "TEXTSHOT [ENTER]", as above.
          
          Textshot will tell you it's unloaded itself, else it will tell 
          you that it CAN'T unload itself.  There are lots of reason why a 
          TSR could be unable to remove itself from memory, but most of 
          them come down to some other program, used after Textshot was 
          loaded, altering the computer's interrupt table.  In these cases, 
          the only way to unload Textshot is to reboot.   
          
          ACTIVATING TEXTSHOT
          -------------------
          
          Textshot's hot key is [PrScr] or, on some machines, 
          [SHIFT + PrScr], which means hold down the [SHIFT] key, while 
          pressing [PrScr].  
          
          If the hot key is pressed while in a graphics mode, you'll hear 
          two beeps.  This is Textshot's way of telling you to stop doing 
          that.  You will also hear two beeps if your video adapter is in 
          other than an 80-column text mode.  In the special case of the 
          Hercules adapter, it doesn't seem to be possible to tell with 
          100% reliability when it is and isn't displaying graphics; 
          sometimes, if you press the hot key while Hercules graphics are 
          being displayed, instead of hearing beeps you'll see "splotches" 
          appear at the top of the screen.  This means that Textshot has 
          failed to accurately gauge modes and you'll see what ASCII 
          characters written to a graphics screen look like.  Solution: 
          press [ESC] to leave Textshot.  Your graphics screen will be 
          restored.
          
          Another potential problem lies with other programs that play with 
          a computer's interrupt table, particularly the keyboard 
          interrupts.  Textshot attempts to be nice to your computer's 
          interrupt table, taking over and using no more of your computer's 
          resources than it absolutely has to; but it HAS to have access to 
          some things, simply to function.  If Textshot refuses to pop up, 
          or if you have trouble typing inside Textshot, try changing the 
          loading order of any other TSR programs you might be using.  This 
          is a common cause of incompatibilities.  If you're not running 
          any other TSRs simultaneously with Textshot and it still refuses 
          
          
                                          3
          to function correctly, the problem lies (probably) with the 
          running application and there may not be much to be done about 
          it.
          
          USING TEXTSHOT
          --------------
          
          After pressing the hot key in text mode, a menu will appear at 
          the top of your screen.  On the first line is a prompt saying 
          "Enter filespec:".  This is where you type a name for your screen 
          capture file.
          
          On the second and third lines are what we might call "status 
          prompts", giving you your options: [ESC] and [F1] through [F5].  
          Here's what they do:
          
          [ESC]  Leaves the program, "pops it down".
          
          [F1]   Controls image inversion.  Textshot pops up with this 
                 option set to "OFF".  The correct setting of this toggle 
                 (called a "toggle", because when you press it, it goes to 
          its opposite state; pressing once produces "ON", pressing again 
          produces "OFF", and so on) can only be determined by examining 
          the final printed output of whatever document or file you've 
          loaded your screen image into.  Some applications will print a 
          normally-output ("OFF" setting) screen black-on-white while 
          others will print it as white-on-black.  What you want your 
          output to look like will determine the setting of this switch.  
          Try it both ways.
          
          [F2]   The state of this toggle determines whether dot patterns 
                 are used in the file to simulate, to the degree it's 
                 possible, what the background colors of a screen look 
          like.  6 of the 8 possible background colors have their own 
          pattern.  No patterns are necessary for white-on-black and black-
          on-white areas.  Whether or not it's worthwhile to use color 
          patterns will depend entirely on the nature of the screen you're 
          taking a picture of and what you want the final output to look 
          like.  Again, give it a try.  Note that this option isn't 
          available (or necessary) in monochrome modes.
          
          [F3]   On MDA/CGA equipped machines, pressing this key does 
                 nothing; CGA fonts are all there are.  On EGA/VGA-equipped 
                 machines, you can tell Textshot to use any font available 
          in your computer by pressing this toggle.  For an EGA, this means 
          CGA and EGA fonts.  For a VGA adapter, it means CGA, EGA and VGA 
          fonts.  Where you have a choice, each option represents 
          tradeoffs:  EGA or VGA fonts will give a higher-resolution 
          picture, but at the cost of increased file sizes.  CGA fonts 
          produce the smallest output files, but with the coarsest picture 
          resolution.  The resolution question must be decided by what 
          you're using the output files for, and what quality is necessary.  
          The file size issue might become important if you're loading 
          screen images into an application that already hogs most of 
          memory, when a change in font resolution could mean the 
          
          
                                          4
          difference between using or not using a file.  Also be aware that 
          .PCX file editors that don't use scroll bars may be unable to 
          load higher-resolution Textshot files.
          
          Note that Textshot pops up with the font switch set to the 
          highest possible resolution by default.  This can be changed by 
          using the [F4] key.
          
          [F4]   This key preserves all of Textshot's toggle settings 
                 between pop-ups, including the position of the clipping 
                 box (discussed next).  Filespecs are not preserved.
          
          [F5]   Pressing this key enables you to tell Textshot which areas 
                 of your screen to save.  When pressed, it causes the menu 
                 to (temporarily) disappear and a white "clipping box" to 
          appear on your screen.  The first time this key is pressed, the 
          box will be as large as your screen; changing the box's shape 
          tells Textshot which part of the screen you want saved -- those 
          parts that are covered by the box.  The clipping box is 
          "inclusive", which is to say that whatever is covered by the 
          edges of the box will be included in what is saved.  This would 
          permit, for example, collapsing the clipping box down to the size 
          of a single character, if that's what you wanted, and saving that 
          single character to a file.
          
          The clipping box is controlled by pressing the arrow keys.  When 
          [F5] is pressed and the box first appears, the arrow keys control 
          the "upper left" sides of the box.  The top and left sides.  
          Pressing [ENTER] with the box still visible "flips" the arrow 
          keys, which then control the "lower right" sides of the box.  The 
          right and bottom sides.  Pressing [ENTER] again toggles sides yet 
          again, which can be repeated as many times as necessary.
          
          Pressing [SHIFT + ARROW] accelerates the clipping box's 
          movements, allowing you to "cover more territory" quickly.
          
          After setting the clipping box, pressing [ESC] makes the box 
          disappear and the menu reappear.  
          
          If you should want to quickly restore the clipping box to its 
          default (whole screen) size without having to use the arrow keys, 
          make sure the [F4] toggle is set to "OFF", pop down Textshot, by 
          pressing [ESC] from the menu, and then pop it up again by 
          pressing [PrScr].  All toggles will be reset.
          
          SAVING A SCREEN
          ---------------
          
          Textshot doesn't care whether or not you use a .PCX file 
          extension.  If you want your files to be "real" PC Paintbrush 
          files, it's necessary for you to give them a .PCX or .PCC 
          extension.
          
          Filespecs can be as long as the available screen space.  The 
          cursor will stop automatically when you've reached the limit.  
          
          
                                          5
          
          After entering your filespec and selecting the desired options, 
          pressing [ENTER] causes Textshot to restore the screen and write 
          the file you've specified.  Since a high-resolution file might 
          take a little while to write, especially on a slower machine, 
          Textshot will beep when it's finished writing to disk.  That 
          means your picture is complete.
          
          Note: Textshot does not include the cursor in the pictures it 
          makes.  If whatever you're using the picture for requires a text 
          cursor, one can be "faked in" by loading the file into PC 
          Paintbrush (or another .PCX file editor) and drawing it.
          
          IF THERE ARE PROBLEMS
          ---------------------
          
          If Textshot has any trouble when writing the file, you'll hear 
          two beeps, a message window at the top of the screen will appear, 
          and whatever the problem might be is described.  You are then 
          asked to press any key, and the message window disappears.  Press 
          [PrScr] again to try the operation over.
          
          Make sure you've typed a correct pathname (a directory that 
          exists) and that the disk you're writing to has enough room for 
          the output file.  It's a "giveaway" if you type DIR for the disk 
          you're trying to write to and discover there are "0 bytes free"!  
          Textshot tells you specifically about most common disk problems.  
          If you see the general message "Disk error", though, it's 
          something sufficiently obscure that Textshot (and probably you) 
          can't do much about it.
          
          Finally, if there ever should be any difficulty in loading a 
          Textshot file into an application, try loading it first into PC 
          Paintbrush, or another .PCX file editor, and save it back to disk 
          with the same filename, and then try again.
          
          IMAGE EDITING
          -------------
          
          As with any other .PCX-format file, screen images produced by 
          Textshot can be loaded and edited inside PC Paintbrush.  Since 
          Textshot produces 2-color files, your copy of PC Paintbrush must 
          either be set (through PBSETUP) for any monochrome mode, or, on 
          color systems, to CGA 2-color mode.
          
          Strange as it may seem, it is possible to get VGA resolution 
          screen shots using CGA-mode files!  If, for example, you create a 
          VGA-, or EGA-resolution screen image with Textshot and load it 
          into CGA-configured PC Paintbrush, all the characters will seem 
          "elongated", to be stretched vertically.  Don't worry!  These 
          files can be edited easily enough inside PC Paintbrush.  When, 
          however, the images are imported into an application they 
          automatically assume the aspect ratio (the ratio of height to 
          width) of the "frame" into which they're "poured".  A computer's 
          video screen has an aspect ratio of about 3:4.  If the frame you 
          
          
                                          6
          pour the image into, inside your application, has this same 
          aspect ratio, the screen images will turn out looking very 
          natural.  If your Textshot images are saved using the CGA font, 
          the resulting images will appear to have a "natural" aspect ratio 
          inside PC Paintbrush to begin with, when it is configured for 
          CGA.
          
          When a Textshot image is loaded into PC Paintbrush running on a 
          Hercules adapter, the image will be smaller than the screen 
          (because it has only 640 pixels horizontal resolution), on the 
          right and possibly on the bottom, depending on the font 
          resolution of the Textshot image.  If, after editing, the file is 
          saved back to disk, those blank areas on the right and the bottom 
          will go with it.  This is something to take into account.
          
          Every word processor or desktop publishing program that I'm 
          familiar with has no trouble importing PC Paintbrush images 
          regardless of resolution or mode, and that includes Textshot 
          images; mode translation is always automatic.  Final judgements 
          regarding hardware and software compatibility, though, as with 
          any shareware product, must be yours.  Please make sure Textshot 
          works with everything you might need it to work with before 
          committing to it!
          
          TIPS FOR GETTING A GOOD PICTURE
          -------------------------------
          
          As mentioned previously, the first things to try when saving an 
          image is to use the toggle switches available when Textshot is 
          "popped up".  Image inversion, the use of color patterns and 
          changing the image resolution should make it possible to get an 
          acceptable image under most circumstances.  But what do you do if 
          none of these work?  This section has some additional ideas.
          
          If your video adapter is able, try switching to monochrome (MDA 
          or Hercules).  Most programs make their screens differently, 
          using ASCII characters and character intensity only, when running 
          in monochrome.
          
          In cases where the color patterns are unacceptably ugly, but are 
          necessary, sometimes you can solve the problem by changing the 
          patterns used by changing the top application's screen colors.  
          Since you are dealing with Textshot's color patterns, remember 
          that it doesn't matter what the colors on the screen look like, 
          whether they are pretty or ugly; all that matters is that the 
          color patterns turn out acceptably.  If all else fails, try 
          changing the application to sheer black-on-white, or vice versa.
          
          If you want to put something into a captured image that wasn't in 
          the original, or take out something that doesn't belong, you must 
          resort to PC Paintbrush, or some other .PCX file editor, for 
          editing.  There, it's also possible to add cursors and capture 
          small bits of an original file as .PCC (cutout) files.
          
          
          
          
                                          7
          DISCLAIMER & AGREEMENT
          ----------------------
          
          Users of Textshot must accept this disclaimer of warranty:
          
               "Textshot is supplied as is.  The author disclaims all 
               warranties, expressed or implied, including, without 
               limitation, the warranties of merchantability and of 
               fitness for any purpose.  The author assumes no 
               liability for damages, direct or consequential, which 
               may result from the use of Textshot."
               
          Textshot is a "shareware program" and is provided at no charge
          to the user for evaluation.  Feel free to share it with your
          friends, but please do not give it away altered or as part of
          another system.  The essence of "user-supported" software is to
          provide personal computer users with quality software without
          high prices, and yet to provide incentive for programmers to
          continue to develop new products.  If you find this program
          useful and find that you are using Textshot and continue to use
          Textshot after a reasonable trial period, you must make a 
          registration payment of $25 to McAdams Associates.  The $25 
          registration fee will license one copy for use on any one 
          computer at any one time.  You must treat this software just like 
          a book.  An example is that this software may be used by any
          number of people and may be freely moved from one computer
          location to another, so long as there is no possibility of it
          being used at one location while it's being used at another.
          Just as a book cannot be read by two different persons at the
          same time.
          
          Commercial users of Textshot must register and pay for their
          copies of Textshot within 30 days of first use or their license
          is withdrawn.  Site-License arrangements may be made by 
          contacting McAdams Associates.
          
          Anyone distributing Textshot for any kind of remuneration must
          first contact McAdams Associates at the address below for 
          authorization.  This authorization will be automatically granted 
          to distributors recognized by the ASP as adhering to its 
          guidelines for shareware distributors, and such distributors may 
          begin offering Textshot immediately (However McAdams Associates 
          must still be advised so that the distributor can be kept up-to-
          date with the latest version of Textshot.).
          
          You are encouraged to pass a copy of Textshot along to your
          friends for evaluation.  Please encourage them to register their
          copy if they find that they can use it.
          
          And since this is shareware and I am a member of the Association 
          of Shareware Professionals, please read the following:
          
               "This program is produced by a member of the 
               Association of Shareware Professionals (ASP).  ASP 
               wants to make sure that the shareware principle works 
          
          
                                          8
               for you. If you are unable to resolve a shareware-
               related problem with an ASP member by contacting the 
               member directly, ASP may be able to help. The ASP 
               Ombudsman can help you resolve a dispute or problem 
               with an ASP member, but does not provide technical 
               support for members' products. Please write to the ASP 
               Ombudsman at 545 Grover Road, Muskegon, MI 49442
               or send a CompuServe message via CompuServe Mail to ASP 
               Ombudsman 70007,3536."
               
          REGISTERING TEXTSHOT
          ---------------------
          
          Registering Textshot costs $25 and includes one year's free 
          support by phone, mail and CompuServe e-mail, free bug fixes, the 
          latest version of Textshot, plus TWO handy utility programs: 1) 
          SEARCH, a multitalented disk scanning file-finder program, and 2) 
          TO/RET, a "two-in-one" combo that work together, enabling you to 
          change to any disk/directory and return instantly to your 
          starting point.
          
          To register Textshot, simply print and fill out the file 
          REGISTER.DOC and send it, along with $25 (checks or M.O.s drawn 
          on U.S. banks only, please) to:
          
                                 McAdams Associates
                                  P.O. Box 835505 
                             Richardson, TX  75083-5505
          
                                 CIS PPN 70353,1644
          
          
          Textshot was created using QuickC and MASM, which are trademarks 
          of Microsoft Corporation.





















          
          
                                          9
          INDEX
          -----
          
          Activating Textshot, see [PrScr] key
          Beeps
               One (signifying completion), 6
               Two (disk error), 6
               Two (graphics mode error), 3
          Clipping (image), 2, 5
          Color patterns, 4, 7
          Commercial distribution, 8
          Commercial use of Textshot, 8
          Disk errors, 6
          Editing Textshot images, 6-7
          [ESC] key,  4, 5
               and Hercules "splotches", 3
          [F1] function key, see Image inversion
          [F2] function key, see Color patterns
          [F3] function key, see Fonts
          [F4] function key, see Preserve settings
          [F5] function key, see Clipping
          Fonts
               Aspect ratios of, 7
               [F3] toggle, 4-5
               File sizes using different, 4
               Hardware requirements, 2
          GRAFTABL DOS utility, 2, 3
          Graphics file format, 2
          Graphics modes, 2, 3
               Hercules (determining), 3
          Hot key, see [PrScr] key
          Image inversion, 7
               Toggle switch, 4
          Leaving Textshot, see [ESC] key
          Loading Textshot, 2-3
          Memory managers, 2, 3
          PCX file editors, 5, 6, 7
          PCX file extension, 6
          PCX file format, 2, 6-7
          Preserve settings, 5
          [PrScr] hot key, 3
          Registering Textshot, 8-9
          Software compatibility, 3-4
          Support policy, 9
          Unloading Textshot, 3
          Video
               80-column modes supported, 2
               Aspect ratio, 6-7
               Hercules & PC Paintbrush, 7
               Monochrome, 4, 7
               Standards (compatibility), 2




          
          
                                         10
```
{% endraw %}

## README.DOC

{% raw %}
```

Please read the file PACKING.LST to be sure that all the files that
should accompany Textshot are there.  Type

      TYPE PACKING.LST [ENTER]

to view the file.

Textshot's manual is 10 pages in length.  It is configured to print 
correctly to either dot matrix/daisywheel or laser/inkjet printers.
If you are using a dot matrix or daisywheel printer, adjust the paper
so that its top is between 1/2 to 3/4-inch above the spot where the
printhead contacts the paper.  The manual should then print correctly.

To print Textshot's manual, type:

      COPY MANUAL.DOC PRN [ENTER]


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```



                                 Textshot Order Form
                                 -------------------
          
          Registering Textshot costs $25 and gives you one year's free 
          support by telephone, mail and CompuServe e-mail, free bug fixes, 
          the latest version of Textshot, plus TWO handy utility programs: 
          1) SEARCH, a multitalented disk scanning file-finder program, and 
          2) TO/RET, a "two-in-one" combo that work together, enabling you 
          to change to any disk/directory and return instantly to your 
          starting point.
          
          To register Textshot, simply fill out the form below and send it, 
          along with $25 (check or M.O. drawn on a U.S. bank, please) to:
          
                                 McAdams Associates
                                   P.O. Box 835505
                             Richardson, TX  75083-5505
          
          -----------------------------------------------------------------
          
          Please send me:
          
          ___ copies of Textshot @ $25/ea. in ___5.25" ___3.5"
              format:                                            $_____.___
          
              Texas residents please add 8.25% sales tax:        $_____.___
          
              Total:                                             $_____.___
          
          -----------------------------------------------------------------
          
          Fields in parentheses are optional.
          
          Your Name:         ______________________________________________
          
          (Business Name:)   ______________________________________________
          
          Address:           ______________________________________________
          
          City:              ______________________________________________
          
          State:             ________  Zip code: _______________
          
          (Telephone No.:)   (______)______-________
          
          -----------------------------------------------------------------
          
          Comments, additional information:
```
{% endraw %}

## SYSOP.DOC

{% raw %}
```

                        Textshot v.2.1 -- SYSOP.DOC




                              T E X T S H O T
                             -----------------

                                Version 2.1
                               -------------

                      B B S    I N F O R M A T I O N
                     --------------------------------

                       Last updated:  February, 1992

This file contains information regarding the posting of the Textshot 
package, version 2.1, on Bulletin Board Systems.

NOTE:  Disk Vendors and Distributors please refer to the VENDOR.DOC text 
file.

---------------------------------------------------------------------------
Program Information:
---------------------------------------------------------------------------

File Name(s) for BBSs:
----------------------

For consistency and to help users locate the files, please use the 
following file name:

TSHOT21.ZIP

If the program is compressed using some other file compression method, then 
please use the name TSHOT21 with the appropriate extension (PAK, ARC, LZH, 
ZOO, etc.).

Keywords:
---------

TEXT SCREEN CAPTURE PCX DTP WORD PROCESSING

Category:
---------

UTILITIES

Program Name, Category, Keywords:
---------------------------------

TEXTSHOT, UTILITIES, TEXT SCREEN CAPTURE PCX DTP WORD PROCESSING 






BBS Information File                                            Page 1 of 3
                        Textshot v.2.1 -- SYSOP.DOC

Short Description:
------------------

TSR for capturing text screens to .PCX files.

Long Description:
-----------------

Textshot is a pop-up tsr program requiring 20k memory.  It saves images of 
any 80-column text screen to monochrome .PCX-format files.  Ideal for 
developers!  Textshot works with all common video standards.  There are no 
special hardware or software requirements.  Textshot features image 
clipping, switchable fonts, image inversion and color patterns.  Textshot 
is easily removed from memory by running it again, and all disk operations 
are error-protected.  McAdams Associates (ASP).

Registration Information:
-------------------------

Textshot registration is $25.  Registered users receive the latest version 
of Textshot, one year's free support by phone, mail and CompuServe e-mail, 
and TWO free disk utility programs.

For complete user registration information please refer to the REGISTER.DOC 
text file.

---------------------------------------------------------------------------
Distribution Requirements:
---------------------------------------------------------------------------

Limited Distribution License:
-----------------------------
As the exclusive copyright holder for Textshot, McAdams Associates 
authorizes on-line distribution only in accordance with the following 
restrictions.  Disk Vendors and Distributors should refer to the VENDOR.DOC 
text file for complete license information.

The Textshot package is defined as containing all the material listed in 
the PACKING.LST text file.  If any files listed in the PACKING.LST text 
file, or the PACKING.LST file itself, are missing, then the package is not 
complete and distribution is forbidden.  Please contact us to obtain a 
complete package suitable for distribution.

o    The Textshot package - including all related program files and 
     documentation files - CANNOT be modified in any way (other than that 
     mentioned in the following paragraph) and must be distributed as a 
     complete package, without exception.  The PACKING.LST text file 
     contains a list of all files that are part of the Textshot package.

o    Many BBSs customarily add a small text file (advertisement) to each 
     archived file.  This text file describes the BBS and tells people that 
     the file was downloaded from that particular BBS.  Other BBSs add a 
     small one-line message with their BBS name and phone number into the 
     compressed file, which will display when the file is uncompressed.  


BBS Information File                                            Page 2 of 3
                        Textshot v.2.1 -- SYSOP.DOC

     Either of these methods of mentioning your BBS are acceptable and may 
     be used, provided the program and documentation is otherwise 
     unmodified and complete.

o    McAdams Associates prohibits the distribution of outdated versions of 
     the Textshot package, without written permission from McAdams 
     Associates.  If the version you have obtained is over twelve (12) 
     months old, please contact us to ensure that you have the most current 
     version.

o    Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
     disassemble, otherwise reverse engineer, or transfer the licensed 
     program except as provided in this agreement.  Any such unauthorized 
     use shall result in immediate and automatic termination of this 
     license.

o    U.S. Government Information:  Use, duplication, or disclosure by the 
     U.S. Government of the computer software and documentation in this 
     package shall be subject to the restricted rights applicable to 
     commercial computer software as set forth in subdivision (b)(3)(ii) of 
     the Rights in Technical Data and Computer Software clause at 252.227-
     7013 (DFARS 52.227-7013).  The Contractor/manufacturer is McAdams 
     Associates, P.O. Box 835505 Richardson, TX  75083-5505.

All rights not expressly granted here are reserved to McAdams Associates.

Applying for ASP Associate Membership:
--------------------------------------

If you would like to apply for ASP Associate Membership (to become an ASP 
BBS member), simply write to the following address and request a BBS 
Membership Application Package:

                          ASP Executive Director
                              545 Grover Road
                         Muskegon, MI  49442-9427
                                  U.S.A.

or send a CompuServe message via CompuServe MAIL to ASP Executive Director 
72050,1433.  You may also FAX a request to the ASP Executive Director at 
616-788-2765.















BBS Information File                                            Page 3 of 3
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                       Textshot v.2.1 -- VENDOR.DOC




                              T E X T S H O T
                             -----------------

                                Version 2.1
                               -------------

                   V E N D O R    I N F O R M A T I O N
                  --------------------------------------

                       Last updated:  February, 1992


This file provides information for Shareware Distributors, Disk Vendors and 
Computer Clubs who wish to distribute the Textshot 2.1 package.  For sample 
descriptions of Textshot, please refer to SYSOP.DOC.

BBS SYSOPs:  Please refer to the SYSOP.DOC text file for information.

Individual and Company Users:  Please refer to REGISTER.DOC for 
information.

---------------------------------------------------------------------------
Distribution Requirements
---------------------------------------------------------------------------

Shareware Distributors, Disk Vendors and Computer Clubs wishing to add the 
Textshot package to their disk library may do so in accordance with the 
Distribution Restrictions listed below.

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for Textshot, McAdams Associates 
authorizes distribution only in accordance with the following restrictions.

ASP Approved Vendors in good standing are hereby given permission to 
distribute Textshot package.  Non-ASP member vendors must request 
permission prior to distributing this package.

The Textshot package is defined as containing all the material listed in 
the PACKING.LST text file.  If any files listed in the PACKING.LST text 
file, or the PACKING.LST file itself, are missing, then the package is not 
complete and distribution is forbidden.  Please contact us to obtain a 
complete package suitable for distribution.

The Textshot package - including all related program files and 
documentation files - CANNOT be modified in any way and must be distributed 
as a complete package, without exception.  The PACKING.LST text file 
contains a list of all files that are part of the Textshot package.

Small additions to the package, such as the introductory or installation 


Vendor Information File                                         Page 1 of 3
                       Textshot v.2.1 -- VENDOR.DOC

batch files used by many shareware disk vendors, are acceptable.

No price or other compensation may be charged for the Textshot package.  A 
distribution fee may be charged for the cost of the diskette, shipping and 
handling, as long as the total (per disk) does not exceed US$8.00 in the 
U.S. and Canada, or US$12.00 internationally.

Disk Sets & CD-ROMs:
--------------------
The Textshot package CANNOT be sold as part of some other inclusive 
package.  Nor can it be included in any commercial software packaging 
offer, without a written agreement from McAdams Associates.

ASP Approved Vendors who wish to distribute the Textshot package as part of 
a collection (such as PsL's MegaDisk set, or a CD-ROM package) may do so 
provided that all the other restrictions are met.

Vendors (non-ASP Vendor Members) who wish to distribute the Textshot 
package as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from McAdams Associates prior to beginning 
such a distribution.

If you wish to add any of our programs to a CD-ROM or other collection, 
please check the release date of the version you have.  If the version is 
over twelve (12) months old then please contact us to ensure that you have 
the most current version.

Disk-of-the-Month (or Subscription) Distribution: 
-------------------------------------------------

If you would like to distribute the Textshot package as a Disk-of-the-
Month, or as part of a subscription or monthly service, then the following 
restrictions apply:

ASP Associate (Disk Vendor) Members in good standing are hereby given 
permission to distribute the Textshot package under the Disk-of-the-Month 
style of distribution.

Others (non-ASP Members) must contact us in advance to ensure that you have 
the most current version of the software.

You cannot use a Disk-of-the-Month distribution to use up your inventory of 
old (out of date) disks.  Only current versions may be shipped as Disk-of-
the-Month disks.

The PRINTED User's Guide may not be reproduced in whole or in part, using 
any means, without the written permission of McAdams Associates.  In other 
words, the disk-based documentation may not be distributed in PRINTED 
(hardcopy) form.

The Textshot package cannot be "rented" or "leased" to others.

You may not list any of our products in advertisements, catalogs, or other 
literature which describes our products as "FREE SOFTWARE".  Shareware is 


Vendor Information File                                         Page 2 of 3
                       Textshot v.2.1 -- VENDOR.DOC

"Try-Before-You-Buy" software, it is not free.

McAdams Associates prohibits the distribution of outdated versions of the 
Textshot package, without written permission from McAdams Associates.  If 
the version you have is over twelve (12) months old, please contact us to 
ensure that you have the most current version.

Licensee shall not use, copy, rent, lease, sell, modify, decompile, 
disassemble, otherwise reverse engineer, or transfer the licensed program 
except as provided in this agreement.  Any such unauthorized use shall 
result in immediate and automatic termination of this license.

U.S. Government Information:  Use, duplication, or disclosure by the U.S.  
Government of the computer software and documentation in this package shall 
be subject to the restricted rights applicable to commercial computer 
software as set forth in subdivision (b)(3)(ii) of the Rights in Technical 
Data and Computer Software clause at 252.227-7013 (DFARS 52.227-7013).  The 
Contractor/manufacturer is McAdams Associates, P.O. Box 835505, Richardson, 
TX  75083-5505.

All rights not expressly granted here are reserved to McAdams Associates.

Applying for ASP Associate Membership:
--------------------------------------

If you would like to apply for ASP Associate Membership (to become an ASP 
Approved Vendor), simply write to the following address and request a 
Vendor Membership Application Package:

                          ASP Executive Director
                              545 Grover Road
                         Muskegon, MI  49442-9427
                                  U.S.A.

or send a CompuServe message via CompuServe MAIL to ASP Executive Director 
72050,1433.  You may also FAX a request to the ASP Executive Director at 
616-788-2765.


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding Textshot.  
Please send us a copy of any reviews, articles, catalog descriptions, or 
other information you print or distribute regarding the Textshot package at 
the following address:

                            McAdams Associates
                              P.O. Box 835505
                        Richardson, TX  75083-5505

Thank you for your time and assistance and for supporting the shareware 
marketing concept.



Vendor Information File                                         Page 3 of 3
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3440

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        36   2-08-92  11:43p
    SHOW     EXE      2040   9-12-88  10:48a
    README   DOC       601   2-26-92   7:58a
    TEXTSHOT EXE     15248   1-23-92  10:56a
    MANUAL   DOC     28317   8-31-92   4:07a
    REGISTER DOC      2201   2-26-92   8:01a
    SYSOP    DOC      6361   4-21-92   1:18a
    VENDOR   DOC      7520   2-26-92   5:24a
    PACKING  LST       128   2-26-92   7:35a
            9 file(s)      62452 bytes
                           95232 bytes free
