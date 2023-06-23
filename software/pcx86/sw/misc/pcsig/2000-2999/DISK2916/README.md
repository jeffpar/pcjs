---
layout: page
title: "PC-SIG Diskette Library (Disk #2916)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2916/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2916"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ADMENU.DOC

{% raw %}
```















                         AdLib ZIP Menu Version 3.0

                          Released April 19, 1991




                     Written by Keith Ledbetter
                                4240 Ketcham Drive
                                Chesterfield, VA  23832
                                (804) 674-0780
                                (6:00pm - 10:00pm Eastern Time)



                    Tech Support BBS:   Blue Ridge Express
                                        804-790-1675
                                        26 Phone Lines
                                        Sub-board KEITHL
                                        ("J KEITHL")


                    Electronic mail on      GEnie: ORION.MICRO
                                       CompuServe: 72240,1221







       AdMenu and ADMplay are Copyright 1990-1991 by Keith Ledbetter.
                             All rights reserved.

     Portions Copyright Borland, International.   Written in Borland C++.


                                  AdMenu v3.0                          Page 1


                                Revision History                              



         Version         Changes made
         -------      --------------------
           3.0        - AdMenu now has its own "ROL player"!  This new
                        player is called ADMPLAY.EXE, and should be
                        placed somewhere in your PATH directories.  This
                        module replaces the PLAYROL.EXE file that you
                        needed with earlier releases.  Since 99% of the
                        tech support questions on Admenu were because
                        of PLAYROL (eg: "not enough memory to allocate
                        timbre"), I decided to write my own.  This should
                        alleviate all of the "out of memory" problems
                        people have been having when they have very large
                        bank files.

           2.0        - "ZIP comments" are now used (instead of the file
                        name) as a way to give more meaningful titles to
                        your songs.  If no comment is in the ZIP file for
                        a given song, that file's name will appear as the
                        title.  The maximum length of each comment is 25
                        characters.

                      - Loading of the ZIP file is now about 80% faster.

                      - Maximum number of songs per ZIP file was reduced
                        from 2048 to 1024, due to the overhead of allowing
                        longer song names (25 characters instead of 8).

                      - Added an "Edit" button so that you can easily
                        add comments (longer song titles) to your ZIP
                        file.  PKZIP will be spawned to add each title.
                        If you're doing lots of comment editing, it'll
                        probably be a lot faster to do it yourself with
                        PKZIP, as in:

                             C:> pkzip -c songs.zip b*.rol

                        which will allow you to add comments to all of
                        your B*.ROL files in one shot.

                      - Added a "Sort song names" function, mostly to
                        be used after you've "E"dited a bunch of song
                        names.

           1.2        - Major cosmetic changes were made to the display.

                      - Added a "find" function to search for partial
                        text in the song names.

                      - Pressing ALT + a letter (ie: ALT-B) takes you to
                        the first song whose name begins with that letter
                        (or, the next letter if no songs exist starting

                                  AdMenu v3.0                          Page 2


                                Revision History                              


                        with the specified letter).

           1.1        Minor cosmetic changes.


           1.0        Initial release.


                                  AdMenu v3.0                          Page 3


                                  Introduction                                




    Thank you for taking the time to try out AdMenu v3.0.  I just recently
purchased an Adlib Music card, and I couldn't believe how quickly I ate up
disk space with various song files (".ROL" files).  In just the first week
after purchasing the Adlib card, I had 496 song files eating up over 4 MB
of precious space on my hard drive.


    So, one day I got to thinking (yes, I know how dangerous that is!) ...
"Hmmm...wouldn't it be great if there was some way for me to ZIP down all of
these song files, yet still play them quickly and painlessly?".


    And (surprise, surprise), AdMenu was my answer to my own needs.  AdMenu
allows you to ZIP down all of your .ROL files into one ZIP file, yet still
play them from AdMenu's powerful menu system.   AdMenu will present you with
a scrollable menu of each file within your song ZIP file, which you can
easily play at the touch of a button.   AdMenu also supports (but does not
require) a Microsoft compatible mouse.   AdMenu will support up to 2,048
files within a single ZIP file.  If you have more files than this, simply
create multiple ZIP files and tell AdMenu through the command line parameter
which one you want to use.


    AdMenu doesn't do all of the work itself, so the following two programs
are REQUIRED to use AdMenu:  ADMPLAY.EXE and PKUNZIP.EXE.    ADMPLAY was
included in the archive for AdMenu; PKUNZIP is readily available on both
GEnie and CompuServe.



                                  AdMenu v3.0                          Page 4


                                  How It Works                                





    AdMenu works hand-in-hand with two other programs which you must have
somewhere in your PATH chain.  When AdMenu boots up, it reads all of the
".ROL" filenames present in the ZIP file that you told it to use.  It will
then present you with a menu from which you can select song(s) to be played.
When you select a song, AdMenu does the following steps:

          o   It creates a temporary directory on drive C:\.
              (See below if you need to change it to another drive).

          o   It calls PKUNZIP to extract the file selected into the
              temporary directory just created.

          o   It calls ADMPLAY.EXE to play the song just extracted.

          o   It deletes the extracted file and the temporary directory.

    You must make sure that both PKUNZIP.EXE and ADMPLAY.EXE are somewhere in
your PATH.   Just to make sure, AdMenu checks this for you when it's first
invoked, and will refuse to run if these programs aren't found.  Also, AdMenu
DOES NOT load SOUND.COM for you; you must make sure that your sound driver is
installed before running AdMenu.


    If you would prefer that AdMenu create the temporary files on a drive
other than drive C:, you can set an environment variable named AD_DRIVE.  For
example, to tell AdMenu to use drive D: instead of drive C:, you would do the
following:

                    "set ad_drive=D"

The easiest way to do this is to put the above command into your AUTOEXEC.BAT
file, so it will always get set at bootup time.


                                  AdMenu v3.0                          Page 5


                          Setting It Up and Running It                        



    OK, enough of that boring stuff.  Let's get our ZIP file set up and try
AdMenu out.   In this example, we will assume that:

                 (a) all of your .ROL files are in a subdirectory
                     named C:\ADLIB\SONGS.

                 (b) that your STANDARD.BNK file is in C:\ADLIB.


    First, you would change to your C:\ADLIB\SONGS subdirectory and enter in
the following command:

                       "pkzip -m Songs.Zip *.rol"

    This command will create a ZIP file named SONGS.ZIP, and will move each
.ROL file into the ZIP file and then delete them.   Go ahead and execute this
command......there, that should have freed up TONS of disk space!


    Now, make sure that your SOUND.COM sound driver is installed, and then
simply invoke AdMenu with the following command:


            "AdMenu c:\adlib\songs\songs.zip c:\adlib\standard.bnk"


    With this command line, you have told AdMenu that (a) your song ZIP file
is named "c:\adlib\songs\songs.zip", and that you want to use the bank file
named "c:\adlib\standard.bnk".  If you have PKUNZIP and ADMPLAY in your PATH
directories, then AdMenu will proceed to load in the filenames from your ZIP
file and present you with a menu of each song available.


                                  AdMenu v3.0                          Page 6


                             Working With the Menu                            




     You should now be looking at AdMenu's main menu.   You will notice a
scroll box in the middle of the screen with the different song names in it.
You can scroll up and down these names with either of the following ways:

              o   The up and down cursor keys
              o   The PgUp and PgDn keys
              o   Clicking on the scroll-bar arrows
              o   Clicking on the PgUp or PgDn boxes

     The song name that is highlighted in red is the current song that you
wish to act on.   You can do the following:


              o   Press <Return>, <P>, click the left mouse button, or
                  click on the Play box to play this one song.

              o   Press <M>, click the right button, or click on the
                  Mark box to mark this song for playing.

              o   Press <A> or click on the Play All Marked box to play
                  all songs that you have marked (this option will only
                  be available if you have at least one song marked).


     If you are playing "All marked songs", you will be given roughly ten
seconds at the end of each song to abort the playing.  If you don't press a
key within this time, the program will continue on playing the next song.

                                  AdMenu v3.0                          Page 7


                               That's All, Folks!                             




     That's about it for AdMenu.  I think the program is pretty easy to
catch on to, so I'm not going to go on with page after page of documentation.
While this program is copyrighted by me, it may be distributed freely by any
individual or club as long as no more than $2 is charged for the service.


     If you have any comments about this program, or have specific things that
you'd like to see added to it, please drop me a line at any of the places
mentioned on the first page of this document.


     If you feel that you'd like to contribute some money for this program,
it would be graciously accepted.  You can mail it to the address given on the
first page.   If you don't send money, at least drop me some Email and let me
know that you are using the program and benefitting from it (if you're not
benefitting from it, tell me why so I can fix it!).


                                           Enjoy!

                                           Keith Ledbetter

                                  AdMenu v3.0                          Page 8


                       Keith Ledbetter's Software Catalog                     





Keith Ledbetter's Software Catalog
----------------------------------

    Listed below is a chart of my other shareware and freeware utilities,
along with the current version number of each.  Also listed is the
filename that you will find them under on BBS systems (please note that
they may be different on your favorite BBS's, but it should help you at
least get close to locating them).   When you register one of my Shareware
programs, you will receive a disk with ALL of these utilities on it.


   Filename      Version            Description
  -----------    -------     -------------------------------
  SST_52A.ZIP      5.2a      The ultimate file-finder program.  Until
                             recently this was simply called "WhereIs".
                             It's now been renamed to "Supersonic Search
                             Tool" to avoid confusion with other programs.
                             Shareware: $15

  LCD_21A.ZIP      2.1a      "Led's Change Directory" is an intelligent
                             directory changing program.  This program was
                             voted one of "the 10 best utilities of 1990"
                             by the "Public (software) Library" magazine.
                             Shareware: $15

  AV_12.ZIP        1.2       "Archive Viewer" is used to display the names
                             of members of all of the popular archiving
                             programs (ZIP, ARC, LHARC, PKARC, ZOO, PAK).
                             No longer do you have to struggle remembering
                             the syntax to 6 different archiving programs.
                             Freeware: $0

  X_30.ZIP         3.0       "X: The Executioner" can save you a lot of
                             disk space.  X allows you to ZIP down those
                             seldom-used-but-hard-to-delete .COM, .EXE,
                             and .BAT files into one system "Command
                             Library".  You can then execute them easily
                             by simply typing an "x" in front of the
                             command line (eg: "x chkdsk c:").
                             Freeware: $0

  ADMENU30.ZIP     3.0       If you own an Adlib Music card, you need this
                             program.  It allows you to ZIP down all of
                             those .ROL song files you've accumulated, yet
                             still play them with no extra effort!  Uses
                             a mouse-able, easy-on-the-eyes window system.
                             Freeware: $0

  DELDIR12.ZIP     1.2       "Delete Directory" allows you to delete an

                                  AdMenu v3.0                          Page 9


                       Keith Ledbetter's Software Catalog                     


                             entire directory (and all directories under
                             it) with one quick command.  You will be
                             shown totals of what you are about to delete
                             and then be asked to confirm (the confirm
                             process can be over-ridden from the command
                             line).
                             Freeware: $0

  DIRSIZ11.ZIP     1.1       "Directory Size Information" allows you to
                             easily determine the total size (in both
                             files and bytes) of any directory.
                             Freeware: $0

  DUPICO10.ZIP     1.0       "Duplicate Icon Deleter" is for any Windows
                             3.0 user who has accumulated tons of icons.
                             It will go through a directory and delete all
                             duplicate icon images, regardless of what they
                             are named.
                             Freeware: $0

  TIMER10.ZIP      1.0       This program allows you to easily time the
                             execution of any program.  Simply use TIMER
                             to invoke the command (eg: "timer chkdsk C:")
                             and you will be shown, at the completion of
                             the command, the elapsed time.
                             Freeware: $0

  UNTAB10.ZIP      1.0       One of the fastest "un-tab" programs you will
                             find.  It takes the specified input file and
                             copies it to the specified output file,
                             replacing all tab characters with hard blanks
                             (you specify the "tab size").
                             Freeware: $0


  You can download all of these files from the Blue Ridge Express in
Richmond, VA.   This is the official tech support board for all of my
software, and there's a special "Keith Ledbetter" message section where
you can quickly get your questions answered.   Once you log on, just do
a "J KEITHL" to join my sub-board.

  The Blue Ridge Express is a first-class BBS, with 26 phone lines; no
need to worry about getting a busy signal!  The number is:

                        The Blue Ridge Express BBS
                               804-790-1675

End of document.
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## GIFEXE.DOC

{% raw %}
```
 

                           G I F E X E

                           Version 1.0
                          June 10, 1990
     
          A Self-Displayer Program for Your GIF(tm) Pictures
            Copyright 1990,1991 Steve Enns and Dan Magosse.
                       All right reserved. 
   
     GIFEXE is produced by:

           Steve Enns                     Dan Magosse 
        2425 Haultain Ave.             1321 14th St. East 
          Saskatoon, Sk.                 Saskatoon, Sk. 
          Canada S7J 1R2                 Canada S7H 0A6 

     Okay, here's the boring stuff, but don't worry, it's better
     than chewing tinfoil:

ACKNOWLEDGEMENTS

     Kudos, thanks, and good karma to John Bridges for the
     enlightening information and code contained in his VGAKIT
     package.  Trademarks like GIF(tm) and PC(tm) are held by
     their respective companies. 

DISCLAIMER

     The GIFEXE program is provided without warranty of any      
     kind.  The user of the GIFEXE assumes complete              
     responsibility for any and all incidental or consequential  
     damages which may occur during normal or abnormal use of the
     GIFEXE program.  Use the GIFEXE program at your own risk.

LICENSE 
 
     The entire GIFEXE package, including the GIFEXE program,
     documentation, and sample files are Copyright 1990,1991
     Steve Enns and Dan Magosse.  All rights reserved.  The      
     unregistered shareware version of the GIFEXE may be freely
     distributed to others by any means, as long the following
     (three) conditions are met:

          1) GIFEXE is distributed in a "package" containing     
          the following three files:
                              GIFEXE.EXE
                              GIFEXE.DOC
                              GE-READ.ME
          
          2) GIFEXE is not distributed as part of any other      
          product, except with specific written permission from
          the authors.

          3) NO fee of any kind is charged for the GIFEXE        
          package or for the service of providing the package,   
          except Computer Bulletin Board Systems, which may      
          distribute the GIFEXE package even though they may     
          charge a membership or service fee.
 
     You can use the "shareware" version for as long as you want,
     even until you're well into your nineties, but you are of
     course encouraged to send us lots of money, too. (I'm
     struggling to pay for my violin lessons, and Dan needs a new
     fishing rod.)  Here are some other programs we've made:

          GIFWARP!       Warp, bend stretch your GIFs for
                         interesting effects.

          GIFCLIP        Clip/crop your GIFs, add text or your
                         own GIF logo or signature.

     These programs are available in licensed SuperVGA versions
     for $8.00 U.S. each, or get both, and the latest version of
     GIFEXE for $15.00 U.S. 

REQUIREMENTS

          GIFEXE requires the following:

               -    PC(tm)/XT(tm)/AT(tm)/386(tm) computer thing
               -    About 280K of free RAM
               -    DOS 3.0, 3.1, 3.2, 3.3, 4.0 (others untested)
               -    A VGA or SuperVGA card

          and optionally:

               -    GIFEXE supports modes like 640x480, 800x600  
                    with 256 colours on 512K SuperVGA cards from
                    ATI, Ahead, Cirrus, Chips and Technologies,  
                    Everex, OAK, Paradise, Trident, Tseng and    
                    Video7.

INSTALLATION

     Copy the GIFEXE program (and this helpful document of
     course!) to any directory that you want - perhaps with      
     your favourite GIF(tm) viewer somewhere in the DOS          
     path.
     
USAGE

     Syntax for GIFEXE is as follows:

          GIFEXE [?] infilename[.GIF] [outfilename[.EXE]]


     After making an .EXE file, (see below) the /mode parameter
     may be used as follows:

                    /mode=0        Ordinary 320x200 mode
                    /mode=1        Low resolution SVGA
                                        640x400 or 640x350
                                        depending on your card.
                    /mode=2        Medium resolution 640x480
                    /mode=3        High resolution 800x600 

               {    /mode=4        Higher resolution 1024x768
                                        Coming soon? }      )
                                                       
     For example, try:

          C> GIFEXE                to see the title screen

          C> GIFEXE ?              to see the help/brag screen

          C> GIFEXE house          to make the .EXE HOUSE.EXE
                                   from the file HOUSE.GIF  
          C> GIFEXE house house2   make the .EXE file HOUSE2.EXE,
                                   from the GIF(tm) HOUSE.GIF
                              
TUTORIAL

     (Nothin' to it!)

     Try out the following with your favourite GIF(tm) picture:

               C> GIFEXE picturename

     GIFEXE will prduce an EXE program with the name
     "picturename.EXE"  That's it!   Now just run the program
     you've just made:

               C> picturename

     The picture will be displayed on your screen in VGA, or in
     SuperVGA if your computer has SuperVGA, and the picture
     requires it.  If you want a small (VGA) picture to be
     displayed in SuperVGA resolution, try:

               C> picturename /mode=2

     to display the picture in medium SuperVGA resolution.

     
HINTS

     - The EXEs produced by GIFEXE are handy for startup screens
     on your computer, or title screens for your programs.


ERRORS

     - The following self explanatory error messages may be
     produced by GIFEXE.  The errors involving the GIF(tm) files
     will generally be due to disk errors or faulty image files. 
     Other errors refer to lack of enough free RAM space, or lack
     of required hardware (VGA).

          Can't initialize VGA graphics!
          Unexpected EOF reading GIF!
          Premature end of GIF!
          Not GIF file!
          Invalid GIF format
          Error writing GIF!
          Buffer allocation failure!
          
NOTES

     - GIFEXE reads both GIF87A standard (the original) and      
     new GIF89A pictures, although most of the extensions in the
     new GIF89A standard like (silly) text windows are ignored. 
     The last image in multi-image GIFs will be the one displayed
     by GIFEXE.
 
 
HISTORY

     - Version 1.0 Completed June.1 1991


          

     

               

     

     

     

                                                                 
```
{% endraw %}

## GIFLITE.DOC

{% raw %}
```

       ====== GIFLITE 1.51 =========================== Order Form ======

       Please send  cheque or money order  made payable to  "White River
       Software", overseas order in money order, please.  (Note that the
       current postage from US to Canada is $0.40.)

               White River Software
               P.O.Box 938, Unit 105
               St. Catharines, Ontario
               L2R 6Z4  Canada

       -----------------------------------------------------------------

         Qty.     Item                                 US/CAD    Amount


         ___  GIFLITE Registration                  @ $20/$23  $________
              (with registered version and document on disk)

                                 Add $1 per copy for 3.5 disk  $________

             Shipping and handling outside US and Canada @ $2  $________


                                         Total  US$________/CAD$________


                                    Signature __________________________


       Name     ________________________________________________________

       Address  ________________________________________________________

                ________________________________________________________

       Country  _____________________  Phone  (______) _________________

       Where did you first hear about GIFLITE ?_________________________

       Comments ________________________________________________________

       _________________________________________________________________


       Which chip set is your VGA using?

       [ ] AheadA  [ ] AheadB [ ] ATI Wonder [ ] Chip & Tech [ ] Everex
       [ ] Genoa   [ ] NCR    [ ] Oak Tech   [ ] Paradise    [ ] Trident
       [ ] Trident 8900       [ ] Tseng      [ ] Tseng 4000  [ ] Video7
       [ ] VESA compatible    [ ] Others ___________________

       [ ] Image displayed correctly  [ ] Image displayed incorrectly

       =================================================================
























                                     GIFLITE (tm) GIF Compressor 1.51


                                     ________________________________



                                     User Manual




                                     (c) Copyright 1992

                                     White River Software
                                     All Rights Reserved.

                                     17 April 1992





                                     P.O.Box 938 Unit 105
                                     St. Catharines
                                     Ontario, L2R 6Z4
                                     Canada






                                TABLE OF CONTENTS






         INTRODUCTION                                                 1

            What is GIFLITE . . . . . . . . . . . . . . . . . . . . . 1


         REGISTRATION                                                 2

            Evaluation Version  . . . . . . . . . . . . . . . . . . . 2

            License   . . . . . . . . . . . . . . . . . . . . . . . . 3

            Disclaimer  . . . . . . . . . . . . . . . . . . . . . . . 3

            Trademarks  . . . . . . . . . . . . . . . . . . . . . . . 3


         USING GIFLITE                                                4

            SET GIFLITE= Environment Variable . . . . . . . . . . . . 4

            Command Line  . . . . . . . . . . . . . . . . . . . . . . 5

            Command Options . . . . . . . . . . . . . . . . . . . . . 6

            ERRORLEVEL Exit Value . . . . . . . . . . . . . . . . . . 8


         EXAMPLES . . . . . . . . . . . . . . . . . . . . . . . . . . 9


         IMAGES THAT SHOULD BE NOT COMPRESSED                        12



                                                      INTRODUCTION    1


     INTRODUCTION
     __________________________________________________________________


         High resolution VGA's and full color scanners have produced  a
         mass volume of  high quality digitized  images. Most of  these
         images available in Bulletin Board System (BBS) are stored  in
         the Graphics Interchange Format (GIF).

         Though the GIF format uses a compression algorithm to store  a
         image, the size of  the resulting file  can still easily  over
         100K bytes or even over 200K bytes. If you are a GIF collector
         or a BBS sysop, you will  find your GIF collection occupied  a
         large portion of your hard disk.

         How would you like to save 25% of those expensive disk space?


     WHAT IS GIFLITE

         GIFLITE is an  easy to  use GIF file  compression program.  It
         compresses the GIF files so  that they will require much  less
         disk space yet still preserve the same quality and resolution.

         With GIFLITE, high quality digitized GIF images can be further
         compressed by  an  average of  15%  to 35%  depending  on  the
         complexity of the images. What  makes GIFLITE special is  that
         the resulting GIF  file are almost  identical to the  original
         file.  Human eyes can hardly tell them apart.

         GIFLITE conforms to both GIF87a and GIF89a standards. All non-
         image information is preserved in the resulting GIF files. The
         compressed images can be read  by standard GIF decoders,  such
         as VPIC v4+ and CSHOW v8.3+.

         Using GIFLITE is much like  using the other file  compressors.
         If you have used any  file compressor, you will find  yourself
         already familiar with the command structure and options.

         If you have any  questions, you can write  to us, or leave  e-
         mail to "Winfred Hu" in the  following BBSs' main board or  in
         CompuServe to  [72070,3515].  We  appreciate  suggestions  and
         ideas.

            PC Connect:        Toronto, Canada (416)733-9052 USR-HST/ds
            SouthWest Connect: Chatham, Canada (519)352-7010 USR-HST/ds
            User To User #1:   Dallas, USA     (214)492-6565 USR-HST/ds
            User To User #2:   Dallas, USA     (214)492-5695 HAYES V.42


                                                      REGISTRATION    2


     REGISTRATION
     __________________________________________________________________


         GIFLITE is  not free.    You must  register after  the  15-day
         evaluation time period.

         GIFLITE is  a Shareware  product.  It is  distributed  through
         public access channels so that perspective buyers can have the
         opportunity to evaluate the  product before making a  decision
         to buy. If you decide to use this software, then you are under
         both legal  and  moral  obligation to  register  it  with  the
         author. But if you decide not  to use it after evaluating  the
         software, you are under no  obligation. It is fully  protected
         by State, Federal and International copyright laws.

         If you continue  to use  GIFLITE after  the 15-day  evaluation
         time period you must register it.

             Registration Fee  :           $ 20.0 US
                                       or  $ 23.0 CAD

         To register your copy of GIFLITE,  fill in the order form  and
         mail along with your cheque  or money order payable to  "White
         River Software" in US or CAD  to the address indicated in  the
         form.

         When you register,  you will receive  the program diskette  of
         the current  version  with  your registration  number  on  it.
         Registration entitles you continue  using the current  version
         and all future versions.  The registration number will  remove
         any limitation functions  in the unregistered  version of  the
         current and the FUTURE releases.


     EVALUATION VERSION

         The evaluation version or the unregistered version distributed
         through the Shareware channel has the following limitation:

           1. The maximum resolution of an input GIF file is 640x480.
           2. The -f option (Filter out the GIFLITE header) is not
              available.
           3. The -h option (Do not insert GIFLITE header to output
              file) is not available.


         The limitation is removed in the registered version.



                                                      REGISTRATION    3


     LICENSE

         You are free to copy and distribute GIFLITE for NON-COMMERCIAL
         use IF:
               NO FEE IS CHARGED FOR USE, COPYING OR DISTRIBUTION,
                       AND IT IS NOT MODIFIED IN ANY WAY.

         Computer user groups or clubs  may make copies of GIFLITE  for
         distribution to  members for  a fee  that covers  copying  and
         other administrative costs.  Bulletin Board Systems (BBS) that
         operate  through  subscription  fees  may  post  GIFLITE   for
         download by its subscribers.

         Disk distributors of Shareware or User-Supported software  may
         distribute  GIFLITE,  which  includes  the  program  and   the
         document, for a fee under US$8 which covers copying and  other
         administrative costs.  Otherwise,  the  distributors  have  to
         obtain a written permission from the author.


     DISCLAIMER

         This program is provided AS IS without any warranty, expressed
         or implied,  including  but  not  limited  to  fitness  for  a
         particular use.

         Since, the  GIF file  format  does not  contain  decompression
         information, the compression process is not reversible,  which
         means once the images is compressed, it cannot be expanded  to
         the original.  Make  a  backup  if you  want  to  restore  the
         original images.


     TRADEMARKS

         GIFLITE is a trademark of the author.

         Graphics  Interchange  Format  and   GIF  are  trademarks   of
         CompuServe Inc. and H&R Block Company.

         Many specific products found in this manual are trademarks  of
         specific companies.


                                                     USING GIFLITE    4


     USING GIFLITE
     __________________________________________________________________


         GIFLITE requires an IBM  PC/AT/fully compatible computer,  DOS
         2.2 or greater, a minimum of 300K bytes of memory.

         Optional: GIFLITE makes full use of EMS (EXPanded Memory), XMS
         (EXTended Memory), hard disk space and VGA board memory during
         compression.

         GIFLITE is Windows aware  and will use  text mode under  these
         multitaskers.


     SET GIFLITE= ENVIRONMENT VARIABLE

         To help locating  the files GIFLITE.EXE  and GIFLITE.USE,  you
         should put the environment variable into the AUTOEXEC.BAT, for
         example,

              SET GIFLITE=C:\GIF

         If you are using  DOS 2.2 to 3.0,  it indicates the  directory
         where GIFLITE.EXE is in and where GIFLITE.USE should be in. If
         you are  using  DOS 3.1  or  higher, it  indicates  where  the
         GIFLITE.USE should be in.

         This environment variable tells GIFLITE  to put the usage  log
         into a single  GIFLITE.USE even  if you are  compress the  GIF
         files in different directory. If  the variable is not  present
         and you are using DOS 3.1 or higher, the usage log will be put
         into the same directory as the GIFLITE.EXE.

         IMPORTANT: If you are using  the registered version under  DOS
         2.2  to  3.0,  you   MUST  setup  the  environment   variable.
         Otherwise, GIFLITE may not be able to locate the  registration
         number and treated the copy as if it is not registered.



                                                     USING GIFLITE    5


     COMMAND LINE

         All the commands used are entered  on the command line at  the
         DOS prompt. These  options tell GIFLITE  to carry out  certain
         commands when the program is loaded. Below is the  description
         of the command line options.

         The GIFLITE command line structure is:

            GIFLITE [options] [GifFile]|[@ListFile] [OutFile]

         Parameters lists in  [] are  optional. If no  option and  file
         name is specified, GIFLITE will display a help screen  listing
         all the  options.  To  compress  files,  either  [GifFile]  or
         [@GifList] must be presented in the command line.

         [GifFile] is the name and directory of the source GIF file  to
         be compressed. The  file name can  contain wildcard  character
         '*' and '?'. To  prevent running out  of memory, the  wildcard
         expression should not contain too many files, say thousands.

         [@ListFile] is a file containing a list of the GIF files to be
         compressed. This option is used  when the GIF files cannot  be
         expressed as a wildcard easily. The names in the list file are
         separated by a space  or a carriage return  and the names  can
         contain wildcard character. To prevent running out of  memory,
         the list file  should not  contains too many  file names,  say
         thousands.

         [OutFile] is the name and directory of the output GIF file. If
         only path is specified, the output file with the same name  of
         the original file will be created in the specified path.

         [options] are the  GIFLITE options that  you can specify.  The
         following is a summary of all options available in GIFLITE.

           -9   Replace GIF87a header with GIF89a header.
           -b   No backup .BAK file of the original.
           -f   Filter out the GIFLITE header
           -h   Do not insert the GIFLITE header to output file.
           -i   Ignore GIFLITE header in the original.
           -l   No usage log to GIFLITE.USE.
           -m   Use method 0, 1, 2 or 3 (default is 1).
           -o   Overwrite output if it exists.
           -s   Statistics on usage log.
           -t   Text mode only, no graphic display.
           -u   Update file time/date to current time/date.
           -@   Exclude files.


                                                     USING GIFLITE    6


     COMMAND OPTIONS

         All  command  options  must  be  preceded  by  a  '-'  or  '/'
         character. The options are described below.


     -9  Replace GIF87a header with GIF89a header.

         This option will replace the GIF87a header in the output  file
         with  the  new  GIF89a  header.  The  GIF89a  header   ensures
         compatibility between a GIF89a decoder and the GIFLITE header.
         However, GIF87a  decoder  will  not  be  able  to  decode  the
         resulting GIF file. For maximum compatibility with GIF87a  and
         GIF89a decoders, you should use the -h option instead.

         Note: CompuServe Graphics Forum accepts GIFLITE processed  GIF
         files ONLY IF
           1. The GIF file is compressed with the -9 option, or
           2. The GIF file is compressed with the -h option.


     -b  No backup .BAK file of the original.

         By default,  a  backup  file  with a  .BAK  extension  of  the
         original uncompressed  file is  created. If  you specify  this
         option, no backup file is created. This option is useful  when
         you are compressing a large volume of GIF files and you do not
         have the disk space for backup.


     -f  Filter out the GIFLITE header.

         This option provides a  way to filter  out the GIFLITE  header
         without recompressing  the  file. It  is  used when  you  have
         compressed a  collection of  GIF files  with the  unregistered
         version or  without using  the -h  option and  later you  want
         maximum compatibility with non-standard decoders. This  option
         is available in the registered version only.


     -h  Do not insert the GIFLITE header to output file.

         By default, GIFLITE will insert  a short header to the  output
         file indicating it  is compressed by  GIFLITE. If you  specify
         this option, the header will  not be inserted into the  output
         file. According to  the GIF87a  standard, the  header will  be
         ignored by  a GIF  decoder and  most decoders  conform to  the
         standard. For maximum compatibility with non-standard decoder,
         you should specify  this option. This  option is available  in
         the registered version only.

         Note: CompuServe Graphics Forum accepts GIFLITE processed  GIF
         files ONLY IF
           1. The GIF file is compressed with the -9 option, or
           2. The GIF file is compressed with the -h option.


                                                     USING GIFLITE    7


     -i  Ignore GIFLITE header in the original.

         During compression,  GIFLITE will  check if  a GIFLITE  header
         exists in the source file and abort the process if it  exists.
         This prevents compressing an  already compressed file. If  you
         specify this  option,  GIFLITE  will  ignore  the  header  and
         attempt to compress the file. The old header will be  replaced
         by a new one.


     -l  No usage log to GIFLITE.USE.

         Normally, GIFLITE will produce  an usage log file  GIFLITE.USE
         recording the  compression information  so that  you can  keep
         track  of  which  files  are  compressed  and  the  ratio   of
         compression. If  you  specify  this  option,  the  compression
         information will not be written to the usage log file.


     -m[0,1,2,3]  Use method 0, 1, 2 or 3.

         The default  method 1  produces an  output file  with  maximum
         compression. Method  2 produces  a  less compressed  file  and
         method 3 produces  a least compressed  file. For most  images,
         the output images are almost  identical to the source  images.
         But for some images, such as hand-drawn images or images  with
         detail texture,  method 2  and method  3 will  reserve  better
         quality of  the original  images. Method  0 stores  the  image
         without compression  and can  be used  to insert  the  GIFLITE
         header in  order  to prevent  recompression.  In case  if  the
         original picture  is not  encoded  efficiently, method  0  may
         reduce the size.


     -o  Overwrite output if it exists.

         If the file you specified  in the output file already  exists,
         this option  tells  GIFLITE  to  automatically  overwrite  the
         output file.  If you  do  not use  this option,  GIFLITE  will
         prompt you for confirmation before it overwriting any existing
         output file.


     -s  Statistics on usage log.

         The usage  log  GIFLITE.USE  also  allows  you  to  perform  a
         statistic analysis on it. This  option displays the number  of
         files recorded in the usage  log, the original file size,  the
         compressed file size and  the overall compression ratio.  This
         option overrides  other options  and  no compression  will  be
         performed.



                                                     USING GIFLITE    8


     -t  Text mode only, no graphic display.

         By default,  GIFLITE  will attempt  to  display the  image  on
         screen during  compression. Using  the video  memory,  GIFLITE
         avoids using  the  main memory,  EMS,  XMS or  disk  space  as
         secondary storage to store the temporary image. If you specify
         this option or if there  is a conflict between the  resolution
         of the image  and the screen,  it will be  compressed in  text
         mode. If GIFLITE does not  display the image correctly on  the
         screen, you have a video adapter other than a VGA, or you  are
         running GIFLITE in a multitasker,  this option should be  used
         to avoid the conflict.


     -u  Update file time/date to current time/date.

         This option assigns the  current date and  time to the  output
         file. If you do not use this option, the date and time will be
         preserved in the output file.


     -@ExcludeListFile  Exclude files specified in ExcludeListFile.

         This option allows you to specify a list of files you want  to
         exclude. The ExcludeListFile should contains one file name per
         line. The file  name must  not contain  directory or  wildcard
         characters. Any characters  after the file  name are  ignored.
         This format allows the usage  log file GIFLITE.USE to be  used
         as the exclude list file.


     ERRORLEVEL EXIT VALUE

         When exit, GIFLITE sets  the ERRORLEVEL exit  value to one  of
         the following:

         0, Success: All files are compressed successfully.

         1, Unrecoverable Error: Any error that aborts the program, for
         example, Invalid command line, File not found, Disk full,  Not
         enough memory, etc.

         2, Recoverable Error:  One or more  of the input files have an
         image  error  or  are  already  compressed  by  GIFLITE.   The
         compression will  continue  until  all  the  other  files  are
         processed.

         3, Unregister Limit Reached:  One or more  of the input  files
         have a resolution greater  than 640x480, if  you are using  an
         unregistered copy of  GIFLITE. The  compression will  continue
         until all the other files are processed.



                                                     USING GIFLITE    9


     EXAMPLES
     __________________________________________________________________


      1. The simplest form of GIFLITE is

              C:\GIF>GIFLITE PICTURE.GIF

         In this example, the file  PICTURE.GIF will be compressed  and
         the output file will overwrite the original file. A backup  of
         the original file is produced as PICTURE.BAK.

         After  the  file  is  compressed,  GIFLITE  will  display  the
         original size  of  the  file, the  compressed  size,  and  the
         compression ratio.


      2. The following illustrates the use of an output directory.

              C:\GIF>GIFLITE -o K* D:\GIFLITE

         In this  example,  the  GIF  files  started  with  a  'K'  are
         compressed to the directory D:\GIFLITE with the same file name
         as  the  original.  Since  no  extension  for  the  files  are
         specified, GIFLITE  automatically compress  the files  with  a
         .GIF extension. The -o option  tells GIFLITE to overwrite  any
         existing output file automatically.


      3. For the statistic analysis,

              C:\GIF>GIFLITE -s

         The -s option reads the  usage log GIFLITE.USE and  calculates
         the total  original  size,  compressed size  and  the  overall
         compression ratio.


      4. GIFLITE will attempt to display the GIF files on screen during
         compression. In case of  incompatibility with the video  card,
         the -t option will forces GIFLITE  to use text mode only.  For
         example,

              C:\GIF>GIFLITE -t *


      5. To compress a hand-drawn image or a image with detail texture,

              C:\GIF>GIFLITE -m3 HANDRAWN.GIF

         The -m3  option  specifies  compression  method  3  which  may
         produce a more acceptable but less compressed image.



                                                    USING GIFLITE    10


      6. To compress all the GIF files without making backups,

              C:\>GIFLITE -b C:\GIF\*

         The wildcard 'C:\GIF\*'  tells GIFLITE to  compress all  *.GIF
         files in the C:\GIF directory. The -b option prevents  GIFLITE
         from making backup.


      7. If you are a BBS sysop or a GIF producer, you should  compress
         the GIF file with the -h option for maximum compatibility with
         non-standard GIF decoders.  And you could  put a message  into
         the bulletin  saying  that  the  GIF files  in  your  BBS  are
         compressed by  GIFLITE to  prevent users  from compressing  an
         already compressed GIF files.

              C:\GIF>GIFLITE -h @GIFLITE.LST

         The  example  also  illustrates  the   use  of  a  list   file
         GIFLITE.LST. A list file  contains one or  more lines of  file
         specification separated by a space  or a carriage return,  for
         example

              C:\GIF1\A* D:\GIF2\B*
              E:\GIF3\C*


      8. If  you have  already compressed a lot of  GIF files  with the
         unregistered version or without using  the -h option, you  can
         filter out the GIFLITE header quickly with the -f option.

              C:\GIFLITE>GIFLITE -f -b *

         If you are a BBS sysop and  you want to keep the GIF files  in
         maximum compatibility  with  non-standard  decoders,  you  can
         filter out the GIFLITE header from newly upload GIF files with
         this option.

         Normally there is  no need  to filter out  the GIFLITE  header
         since the header provides  additional information and you  can
         avoid compressing an already compressed file.


      9. Some BBSs, such as CompuServe, have  a strict policy  with the
         GIF files. Then you should compress  the GIF file with the  -9
         option which replace the GIF87a  header with GIF89a header  OR
         with the -h  option which skip  inserting the GIFLITE  header.
         For example,

              C:\GIF>GIFLITE -9 * \CIS
              C:\GIF>GIFLITE -h * \CIS



                                                    USING GIFLITE    11


     10. For images with detailed texture, you may not want to compress
         it with GIFLITE but yet you want to insert the GIFLITE  header
         to the picture such that GIFLITE will not compress it. You can
         use the -m0  option to  tell GIFLITE  not to  compress it  but
         insert the GIFLITE header.

              C:\GIF>GIFLITE -m0 TEXTURE.GIF

     11. To avoid compressing already compressed pictures,  you can use
         the usage log file GIFLITE.USE as the exclude list file.

              C:\GIF>GIFLITE -@GIFLITE.USE *

     12. If  you  are  compressing a  large  volume of  GIF files,  the
         process may continue for several hours. It would be better  to
         perform the compression overnight.  Fortunately, it is a  one-
         time process, once you have the files compressed, it will save
         the disk space permanently.


                             IMAGES THAT SHOULD NOT BE COMPRESSED    12


     IMAGES THAT SHOULD NOT BE COMPRESSED
     __________________________________________________________________


         GIFLITE can  compress most  GIF files.  However, not  all  GIF
         files can be compressed, they are:

            . Black and white 2 colors images
            . 16 or less colors images
            . Dither images


         Hand drawn images  or images with  detail texture may  produce
         poor result with  the default maximum  compression. For  these
         images, either method 2 (-m2) or method 3 (-m3) should be used
         to compress the image.


         Although the GIFLITE header is encoded in GIF89a format,  most
         popular GIF87a  decoders  will  ignore  the  header  and  they
         should, according to the GIF87a standard. If your decoder does
         not conform fully to the GIF87a standard, for example  Graphic
         Workshop, you should not compress the files or you should  use
         the -h option in the registered version to avoid inserting the
         GIFLITE header.


         Some BBSs, such as CompuServe,  have a strict policy with  the
         GIF files. Then you should compress  the GIF file with the  -9
         option which replace the GIF87a  header with GIF89a header  OR
         with the -h option which skip inserting the GIFLITE header.

         Note: CompuServe Graphics Forum accepts GIFLITE processed  GIF
         files ONLY IF
           1. The GIF file is compressed with the -9 option, or
           2. The GIF file is compressed with the -h option.


         Normally, GIFLITE  will attempt  to display  the image  before
         compressing the GIF  files. If  the images  are not  displayed
         correctly due to incompatible video  chip set, the files  will
         not be compressed correctly. In this case, you should use  the
         -t option  to  force  GIFLITE  not to  use  graphic  mode  and
         compress in text mode only.



```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
GIFLITE v1.51  White River Software    Registration $ 20.00
GRAPHICS APRIL92 GIF GIF87A GIF89A DECODER ENCODER COMPRESSOR
FILES: giflt151.zip

Update

GIFLITE is an easy to use GIF file compression program. It
compresses the GIF files so that they will require much less
disk space yet still preserve the same quality and resolution.

With GIFLITE, high quality digitized GIF images can be further
compressed by an average of 15% to 35% depending on the
complexity of the images. What makes GIFLITE special is that
the resulting GIF file are almost identical to the original
file. Human eyes can hardly tell them apart.

GIFLITE conforms to both GIF87a and GIF89a standards. All non-
image information is preserved in the resulting GIF files. The
compressed images can be read by standard GIF decoders, such
as VPIC v4+ and CSHOW v8.3+.

Using GIFLITE is much like using the other file compressors.
If you have used any file compressor, you will find yourself
already familiar with the command structure and options.


Hardware Requirements : IBM PC, PC-compatible or MS-DOS computer
400k RAM

Other Requirements : DOS 2.2 or higher.

```
{% endraw %}

## GL_FRONT.DOC

{% raw %}
```



                          GIFLITE Front-End


GL_FRONT is a front-end GIF file scanning program intended for use 
with Tsung Hu's GIFLITE GIF compression program.  It will do a quick 
scan of all the GIFs in a specified directory and determine which of 
them do not contain the GIFLITE signature.  The names of these GIFs 
are written to a file that can be passed to GIFLITE.

GIFLITE is a great program and I use it all the time.  It has saved 
me several hundred megabytes (not to mention close to $1000 worth) of 
disk space.  GIFLITE does seem to have one small shortcoming though.  
It really doesn't handle directories with hundreds of GIFs very well. 
 As a programmer I can sympathize with Tsung Hu's plight in writing a 
program that must deal with hundreds of thousands of bytes of GIF data 
and still must be able to maintain potentially infinite lists of 
files.  

GL_FRONT has a big advantage in dealing with the file lists since 
that's all it does.  If you have hundreds of GIFs that need to be run 
through GIFLITE, you can use the GIFLITE batch feature of GL_FRONT to 
avoid some of the file handling shortcomings of GIFLITE.  If you have 
a directory with hundreds of GIFs, most of which have already been 
processed by GIFLITE and contain the GIFLITE signature, then GL_FRONT 
can give you the ability to quickly scan the directory and create a 
list of just those GIFs that still need to be compressed. This list 
of files can then be passed to GIFLITE.  If you run a BBS, you can 
easily set up an event to scan all the GIFs in your upload directory 
and run GIFLITE on those that need it.

GL_FRONT accepts several parameters.  All of the parameters can be 
either upper or lower case and can be preceded by either a dash (-) or 
a forward slash (/).  You can specify the name of the output file 
with the -O parameter (e.g. -Ogiflist.out).  The name of the output 
file can be a qualified path/file name.  If this parameter is omitted, 
GL_FRONT will use the default of GIFLITE.LST in the current directory.

GL_FRONT can be used to generate a batch file that will run GIFLITE
separately for each of the files found that do not contain the 
GIFLITE signature.  This file will be of the form

            GIFLITE <parameters> <filename>

This will be repeated for each of the non-GIFLITE'd files found.
This feature is enabled with the -G parameter.  GL_FRONT expects 
that you will be passing some parameters to GIFLITE, so you MUST
immediately follow the -G with a parameter string ENCLOSED IN
QUOTES.  (e.g. GL_FRONT -G"-9 -t")  If you normally use the 
GIFLITE defaults just put a space in between the quotes (e.g.
GL_FRONT -G" ").  This option can be combined with the -O
option above to generate a .BAT file that can be run immediately
after running GL_FRONT. (e.g. GL_FRONT -Oliten.bat -G"-9 -t")

GL_FRONT also provides for running other programs from a batch file
in the same manner as described above for the -G option.  With the 
-B option you have to specify both the command name and any parameters
that need to be associated with it (e.g. GL_FRONT -B"giflite -9").
Again, the parameters to the -B option MUST be enclosed in quotes.

GL_FRONT also allows the specification of the directory path to be 
searched for GIFs.  To specify more than one directory path just 
separate them with spaces.  You can specify as many as will fit on 
the command line.  This parameter is NOT preceded by a special 
designator like the others mentioned above.  If no directory path 
is specified, the current directory is used.  To specify the 
current directory in addition to other directories, list the 
current directory as . or .\ on the command line.

In somewhat condensed form, here's the precise command format:

           GL_FRONT [options] [path | [path]]

The possible values for [options] are:

      [-Ooutfile] - This specifies the output file.

      [-G"<GIFLite Parms>"] - This indicates that GL_FRONT should
      create a batch file that will run GIFLITE on each of the 
      files tagged by GL_FRONT.  Parameters to GIFLITE must be
      enclosed in quotes.  Even if no GIFLITE parameters are
      specified, the quotes MUST be present.
      
      [-B"<batch cmd>"] - This indicates that GL_FRONT should 
      create a batch file that will run the specified command
      on each of the files tagged by GL_FRONT.  The name of 
      the command and any parameters associated with it must
      be enclosed in quotes.

      The -G and -B options are mutually exclusive.

GL_FRONT will print some status info to the screen as it's doing
its job.  This is pretty self-explanatory.

Please note that GL_FRONT does it's thing by looking for the GIFLITE
signature in the GIF file.  This means any GIF processed by GIFLITE
using the -f or -h parameters will show up as not having been processed.
Reprocessing the GIF will not cause any problems other than wasting
time and computing resources.



                             Legal Stuff

Graphics Interchange Fromat and GIF are copyrighted by CompuServe 
        and H&R Block Company.

GIFLITE is copyrighted by Tsung Hu.

GL_FRONT is copyrighted by Jay Heyl.




                              License

GL_FRONT is copyrighted by the author, Jay Heyl, but no fee is charged 
or requested for its use in a non-commercial environment.  You are 
free to copy and distribute GL_FRONT as long as the program remains 
unchanged and this .DOC file accompanies it.  Non-profit organizations 
as well as commercial, for-profit distributors of freeware, 
shareware, and public domain software may make copies and distribute 
GL_FRONT.  These organizations may charge a small fee, not to exceed 
$6 US, to cover the costs of media and postage.  

Subscription Bulletin Board Systems may post GL_FRONT for download as 
long as there is no charge directly associated with the download of 
GL_FRONT.  

If you find a commercial use for GL_FRONT, contact the author at the
BBS or P.O. Box listed below and we'll talk.


                               Disclaimer

GL_FRONT is provided AS IS without any warranty, expressed or implied, 
including, but not limited to, fitness for any purpose.  Use of 
GL_FRONT, and the consequences thereof, are entirely your risk.  In no 
event will the author, Jay Heyl, be liable for any damages whatsoever 
resulting from the use of GL_FRONT.



If you have questions, comments, or suggestions concerning GL_FRONT, you
may contact Jay Heyl at The Cookie Jar BBS, 714-997-0350.  The latest
version of GL_FRONT will always be available there.  If you don't have
a modem (then where'd you get all those GIFs?) or don't want to pay for
the phone call, you can write me at P.O. Box 2221, Orange, CA  92669.


Revision History

Version 1.0  09/15/91  - Initial release.

Version 1.01 09/20/91  - Added -G and -B parameters.

Version 1.10 03/03/92  - Recompiled with BC++ 3.0.  No added 
                         functionality.


```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2916

     Volume in drive A has no label
     Directory of A:\

    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    GIFLITE  ZIP     52551  10-09-92   2:01p
    GO-STRT  DAT       548   2-11-92   2:15p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
    ADMN30   ZIP     36154  11-19-91  11:39a
    GIFEXE   ZIP     31157   6-26-91   5:36p
    GLFRNT11 ZIP     15314   3-03-92   6:35p
    VGACLR31 ZIP     32422  11-19-91   8:27a
           13 file(s)     232281 bytes
                           83968 bytes free
