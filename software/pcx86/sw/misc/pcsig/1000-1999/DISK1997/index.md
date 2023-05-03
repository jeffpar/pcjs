---
layout: page
title: "PC-SIG Diskette Library (Disk #1997)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1997/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1997"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PMCAT +"

    Finally, a nice looking disk cataloger. PMCAT+ is designed to allow
    you to arrange, track, and sort the file information DOS stores in the
    directories of any hard drive or multiple diskettes.
    
    Detailed linking makes file searching and organization a snap. You can
    keep track of your disks, every file on those disks, or the layout of
    your hard drive. Categorize and organize your collection however you
    want, with as much detail as you need. Although PMCAT+ was originally
    intended to be used with small to moderate (50 - 200 diskettes)
    catalogs, it is quite capable of managing truly huge diskette
    collections.
    
    PMCAT+ offers a DOS shell for command execution and has the ability to
    read, de-archive, and catalog files that have been archived in .ARC,
    .ZIP, .LZH, and .PAK formats.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1997.TXT

{% raw %}
```
Disk No: 1997                                                           
Disk Title: PmCat +                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PmCat                                                    
Author Version: 5.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Finally, a nice looking disk cataloger.  PMCAT+ is designed to allow you
to arrange, track, and sort the file information DOS stores in the      
directories of any hard drive or multiple diskettes.                    
                                                                        
PMCAT+ stores files in memory as it reads them, in the form of a 'linked
list' of files.  Therefore, each file and directory has 'pointers' (an  
address of 4 bytes, in RAM, which tells PMCAT+ where the record for that
file or directory is, physically).  Every record (file, directory, or   
disk) has pointers as a portion of itself which tell where and what it  
is linked to--is it a subdirectory? are there subdirectories stemming   
from it? is it a disk? what files are on the disk? etc.                 
                                                                        
This detailed linking makes file searching and organization a snap.  You
can keep track of your disks, every file on those disks, or the layout  
of your hard drive.  Categorize and organize your collection however you
want, with as much detail as you need.  Although PMCAT+ was originally  
intended to be used with small to moderate (50 - 200 diskettes)         
catalogs, it is quite capable of managing truly huge diskette           
collections.                                                            
                                                                        
PMCAT+ offers a DOS shell for command execution and has the ability to  
read, de-archive, and catalog files that have been archived in ARC, ZIP,
LZH, and PAK formats.                                                   
                                                                        
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
║                    <<<<  Disk #1997  PMCAT +  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: PMCATPL      (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY PMCATPL.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MOP.DOC

{% raw %}
```


                                     MOP

                                Copyright 1989
                                      by
                                William C. Scott

   MOP is a utility designed to replace multiple utilities for deleting or
   'mopping-up' after a session of looking at and evaluating a number of
   archived files.  The archives can be in 'arc','pak','zip', 'lzh' or 'zoo'
   format.  Multiple archive formats can be handled simultaneously.


   USING MOP:

   To simplify your life, place MOP in a directory in your path so you can use
   it wherever you want.

   The command line syntax for MOP is as follows:

                  MOP [SOURCEPATH\]FILENAME.EXT [/v] [/d]

   Make sure you are in the directory with the archive files which you want MOP
   to act and type:

   SOURCEPATH - is the PATH to the directory containing the ARCHIVE you wish
                to use. The default PATH is whatever directory you are in.

   Use ...

   FILENAME - may be either the name of an archive, in which case you must
              provide some sort of extension (*,arc,zip,zoo,pak,lzh) or an
              asterisk ('*') in which case all archives of all names and types
              will be used.

   '*'  -     (only, no extension) to delete all files matching filenames
              listed in all .ZIP, .ARC, .PAK, .LZH and .ZOO libraries.
              Checking for the asterisk also involves checking for a '.' in
              the command line parameter, so '*.' will cause no action to
              occur.

   EXT  -     may be one of the supported archive types (arc,zip,zoo,pak,lzh)
              OR it may be an asterisk ('*') in which case all types of
              archives matching the supplied FILENAME will be searched and
              used.


  /v -  prevents you from previewing the files that are about to be deleted
        and mark any you wish to retain.

  /d -  will suppress the elimination of duplicate filenames from the
        verification display window.




    Entering a SourcePath allows all succeeding FILENAMEs to be looked for
    in the same directory.  Entry of another SourcePath causes all filenames
    that follow to be looked for in the last entered SourcePath.

    Example:  From root directory of drive C you enter ...

        MOP a:foofile.arc double.zip c:\dos\flipflop.lzh *.arc

  ... causes the following ...

'foofile.arc' and 'double.zip' are searched for in root directory of drive A.

'flipflop.lzh' and all files with an '.arc' extension are looked for on drive
   C in the DOS directory.

  All files found in the directories of those archive files are checked
  against presence in root directory of drive C. Any matches are shown in the
  verification window and deleted when you press <ENTER> unless you
  specifically mark them to be retained.
  BOTH the internal masks (ARC,PAK,ZIP,ZOO,LZH) and the external masks (the
  ones you enter on the command line) CANNOT BE USED together. Using one
  disables the other one.
  When you don't defeat the preview option of MOP, you may mark the files
  you wish to retain by placing the selector bar on the file and pressing
  <SPACEBAR>.  Files marked in this manner won't be deleted.

 Why bother registering ... ?

    Won't the program be made obsolete by new archiving methods?
        Almost certainly.  But by becoming a licensed user, you will be
        notified when new methods and capabilities are added to MOP.

    I already have the program and there will be plenty of other people who
    send in their money ...
        Contrary to popular opinion, that just DOESN'T happen!  Few people
        are out-and-out thieves ... quite the opposite.  But all of us have
        that little habit of procrastination when it comes to shareware
        programs. We wait for a bit better version to see if it crosses
        that imaginary line of usefulness (even though we use it all the
        time as it is) ... and suddenly we don't need it any more (after
        a year or two).
        If you use the program, it's a fair deal.  There are few if any other
        products (besides shareware) for your computer you get to try before
        you pay for them.

    Most importantly, to me, it will provide me with income to repair my
    computer when it breaks.  I'm disabled with multiple sclerosis and
    diabetes and unable to work .  My monthly total income is $498 and it
    doesn't go far, so I would very much appreciate your contributions if this
    program meets your needs.  Writing simple utilities and small programs is
    both my only other potential source of income and the only thing that
    keeps me sane, since I am housebound and live alone.

 Copyright notice:
    MOP is copyright 1989 by William C. Scott. All rights reserved. No resale
    of MOP as a program is permitted.




 Distribution policy:
    MOP is not public domain software.  It is being distributed as a shareware
    product. You are encouraged to freely distribute it as long as the costs
    to the end user acquiring MOP alone do not exceed $3 and this file is
    included with the program file.

 Licensing and support:
    Licensing for the continued use (after a 30 day evaluation period) is
    required.  The fee for licensing is $5, payable by check or money order
    sent to the address below.
    Licensed users will be notified of any significant updates to MOP and
    other shareware products I plan to produce and have produced.

            William C. Scott
            22 Cary Annex
            Coalgate, OK 74538    PH: (405) 927-3840

    I encourage you to contact me with any suggestions or comments you have
    concerning MOP.  Letters will be answered and telephone queries answered
    if needed, to anyone who needs/asks.

    My Compuserve user # is 71406,1251
    My Genie address is WILLSCOTT

    I try to check these at least once a week, but sometimes am unable to.
    If you need a quick response, a phone call is likely to be the fastest.

```
{% endraw %}

## PMCATPL.DOC

{% raw %}
```























                                     PMCAT+



                        A Disk File Cataloging Program

                                      by

                                Patrick Michaud
                                       &
                               William C. Scott



                                 Version 5.0
                              1 November, 1989














                                            _______
                                       ____|__     |               (tm)
                                    --|       |    |-------------------
                                      |   ____|__  |  Association of
                                      |  |       |_|  Shareware
                                      |__|   o   |    Professionals
                                    -----|   |   |---------------------
                                         |___|___|    MEMBER

                      Copyright 1989 by William C. Scott





                                                                 Page 1





    COPYRIGHT NOTICE

          PmCat+, copyright 1989 by William C. Scott PmCat+ is NOT
          public domain software.  You may use, copy and distribute it
          freely, but you MAY NOT RESELL PmCat+.  A modest fee for
          copying may be charged, not to exceed $3.00 exclusive of the
          cost of disk, mailer and postage. (See "About Our Marketing
          Process" for more details)





    DISCLAIMER:

          By using this product, the user agrees that neither William C.
          Scott nor Patrick R. Michaud are severly or jointly liable for
          any damages, direct or consequential, that might arise from
          the use or misuse of PmCat+.




































                                                                   i


                      About Our Marketing Process ... (Shareware)

          The term "shareware" has come to refer to a class of computer
          software that is marketed, basically, on an honor system.

          Hopefully, you noticed the logo of ASP, the Association of
          Shareware Professionals, on the cover sheet of this
          docementation file.  <ASP> is an organization that was formed
          and is supported by software authors and businesses with an
          interest in seeing shareware remain a viable means of
          marketing high quality software at reasonable prices.

          An author's membership in ASP guarantees you, the end user, at
          least some protection from the vagaries of earlier and present
          'public domain' software.  By becoming a member of ASP the
          author has promised his/her intention to support the product
          after licensing has taken place and already demostrated to ASP
          the product does in fact do what it is advertised to do and is
          a fully functional piece of software (not crippled or
          restricted).

          (See the file OMBUDSMAN.ASP for further info)

          The end user benefits from being able to actually try the
          software before paying for it, ensuring compatibility with the
          system it is intended for use upon.

          Both the author and the consumer benefit from the fact that
          neither has had to bear the burden of the enormous cost of
          adequate advertising.  The consumer benefits directly from the
          lower cost of the software, the author somewhat more
          indirectly in that he most likely would never have been able
          to make the product widely available because of a lack of
          capital.  In many cases you will find the support offered by
          ASP authors more comprehensive than would ever be possible
          from a large company.

          Finally, these ASP authors' products, like PmCat+, are not
          public domain nor intended to be free.  They are offered in
          good faith that they are as good as their commercial
          counterparts and the authors do expect to be paid for their
          efforts.

          Frankly, it is a difficult thing to offer one's work to others
          with the understanding you will be compensated *only* when the
          customer is convinced your product is worth purchasing.

          Please realize that PmCat+ didn't just "happen".  We have
          spent a great deal of money for compilers, language tools and
          hardware that is specifically dedicated to the development of
          PmCat+, not to even begin thinking about the many hours of
          sitting at the keyboard, tearing out hair trying to figure out
          why the obviously simple, isn't!  We must, at the very least,
          recover our investment so that we can continue to develop
          programs of this quality.



                                                                    ii



          Strictly speaking, if you do like and use PmCat+, we request
          you license the program after a reasonable trial period (about
          30 - 45 days).  We also realize there are those persons to
          whom even the $25 license fee would be a burden. For those
          persons, please continue to use PmCat+ for as long as you
          wish, with our blessing.  Obviously, whether or not you can
          afford to license PmCat+ is not a consideration we would be so
          bold as to decide.  We will trust that everyone is being
          honest with themselves and us about that matter and will, to
          the best of our ability,  answer any questions by anyone who
          wishes to inquire.

          For $25.00 you will receive:

            1.  A copy of the very latest version on 5.25 inch floppy
                 disk. ( 3.5 inch is also available see NOTE below )

            2.  Be placed on our mailing list to be notified of signi-
                 ficant future updates to PmCat+ or new products that we
                 have presently have under development.

            3.  One of the disks (of your choice) from the PMCAT.CAT
                 catalog which we included to aid your quick evaluation
                 of PmCat+.

          The present cost of obtaining updates is $7.00. (This includes
          persons who registered PmCat before the PLUS release)

          PLEASE NOTE:

          We can  provide registered copies of PmCat+ on 3.5" inch
          double density disks or high density disks as well.  There is
          an additional $1 charge for the 720K and $3.00 for the 1.44M
          because of the higher cost of the 3.5" media.

          If you wish to register PmCat+, please send check or Money
          Order to the address below:

                               William C. Scott
                                #22 Cary Annex
                              Coalgate, OK 74538
                              Ph: (405) 927-3840

            See the file PM-ORDER.FRM for an invoice type order form.
            If you need a copy as a invoice, please include two copies
            when you order and we will mark it PAID, date it and return
            it to you with your disk(s).




                                                                Page 2



                           TABLE OF CONTENTS

        About Our Marketing - Shareware and ASP                      i

        I.  Introduction

          A.  The Story of PmCat+                                    3

          B.  Features of PmCat+

            1.  List of features                                     6
            2.  Explanation of features                              7

       II.  Getting Started

          A.  System requirements.                                   5

          B.  Installation                                           8

      III.  Cataloging functions

          A.  Create a new catalog                                  10
          B.  Add to existing catalog                               10
          C.  Update an existing catalog                            10
          D.  Save present catalog                                  10

       IV.  Browse functions
          A.  File information  (InfoWindow)                        11
          B.  Read contents of cataloged files                      11
          C.  Volumes listing                                       11
          D.  Directories                                           11
          E.  Search                                                12
          F.  Sort                                                  12
          G.  Change catalogs                                       12
          H.  Masks                                                 12

        V.  Printing functions
          A.  Formatting output                                     13
          B.  Printing                                              14
          C.  Printer set up string                                 14
          D.  Saving to ASCII disk file                             14

       VI.  Misc functions
          A.  Delete volume                                         14
          B.  Erase (delete) file                                   14
          C.  Commenting                                            15
          D.  Shell                                                 15
          E.  Change volume label                                   15
          F.  Using the .DEF file                                   15

      VII.  Using Wildcards in PmCat+                               16



                                                                Page 3

    INTRODUCTION

                PmCat+ is a floppy and hard disk file cataloging and
            browsing program intended for use on PC/XT/AT and compatible
            systems.

        The Story of PmCat+ ...

                PmCat+ is a direct descendent of PmCat which was a disk
            file cataloging program intended for use only with floppy
            disk files.  So many users just naturally began using it to
            catalog their hard drive files that many requests were made
            for features that were obviously hard drive oriented. So, we
            decided PmCat+ should accomodate hard drives gracefully.

                PmCat was originally written by Patrick Michaud for my
            personal use when I first came into the MS-DOS world.  Like
            so many others, I couldn't find a cataloger that addressed
            my personal habits adequately (simple, fast and useful were
            some of my prime requisites).

                The basic cataloging engine that still drives PmCat+ is
            Patrick's original code, a tribute to its efficiency and
            speed. It does, for now, restrict us to a catalog that can
            be retained in memory, but the speed gained thus far seems
            to be worth remaining at that point.  A plan for the future
            is the possible inclusion of support for either one or both
            of expanded memory and extended memory.

                When Patrick first wrote PmCat, it was so good we
            decided to pat it on the rear and send it out into the 'real
            world' as a shareware product ... as an 'experiment' we
            decided, just to see what happened.

                Well, about three months later a phone call came to me
            from Alfred Glossbrenner who was writing a book about PC
            shareware products and wanted to include PmCat in his book
            ... which did occur when it was published.  My thought at
            this point was ... "here's a professional in the PC world
            who thinks highly enough of PmCat to choose it over all
            those others...gee whiz!"  Both Patrick and I were deeply
            flattered.

                When we came down off the cloud that put us on, we
            realized our experiment had told us we had something in
            PmCat so we set about making the necessary improvements to
            make it palatable to as many people as possible.

                As it turned out, Patrick's studies kept him from doing
            much more with PmCat except correcting and cleaning up my
            early code <grin>. (He is working on a PhD in Computer
            Science at the University of Southwestern Louisiana, and
            will finish that work this fall and recieve his PhD in
            January, 1990 at the ripe old age of 24.)

                Since late 1987, most of the changes made to PmCat have
            been a result of my meanderings through Turbo Pascal and the
            PmCat code in response to users requests for changes/fixes
            and improvements.





                                                                Page 4



                April of 1988 brought about a medical tragedy/blessing
            for me, personally.  I was diagnosed as having mulitiple
            sclerosis on the heels of about 4 months of various bizarre
            symptoms of paralysis and other stuff that goes along with
            the beast.

                I had to move to where I had help in getting the basic
            things of life, like groceries and where I ended up was in
            a small town (of 2000) in Oklahoma.

                At this point the influence of the contributions of
            another excellent programmer, Gil Yoder, entered PmCat. Gil
            was directly responsible for the original inclusion of
            archive file reading into the PmCat code and gave invaluable
            support with some mouse objects that are making their
            premiere appearance in PmCat+.

                Since I presently live on only $425 a month from my
            Social Security disability check, it became painfully
            apparent that I *had* to make some money from PmCat+.  The
            $10 and $15 registration fees I was getting for the original
            PmCat were not covering expenses.  Granted, they were
            expenses I was incurring anyway in the early days, but no
            longer.  So I begrudgingly decided to fix the registration
            fee for PmCat+ at $25, which still struck me as an excellent
            bargain.

                So here it is, PmCat+. I am calling it version 5.0 in
            deference to its PmCat heritage, but it has been
            substantially rewritten in many ways, including the use of
            overlays, but retains the familiar look of the original
            PmCat.





                                                                Page 5



        Minimum System Requirements:

            IBM PC/XT/AT or compatible, 640K RAM, one floppy disk
            drive.  Hard drives and subdirectories are supported.

        Suggested extra system features:

            Color monitor - either CGA, EGA or VGA makes fuller use of
                            the different menu options easier.

            Mouse - these rodents are down in price to about $30 on
                    the bottom line of pricing and make a lazy man's
                    use of a computer much more palatable.

            Disk caching - these programs are fairly common and many are
                           either public domain or shareware. This can
                           speed up PmCat+ because of its use of
                           overlays.





                                                                Page 6



        FEATURES

             * Catalog contents of archived files
             * View files, archived or not while in PmCat+!
             * Context sensitive help
             * Mouse support included
             * Include and/or exclude files (read/view/print)
             * Delete individual files from catalog
             * Delete volumes from catalog
             * Find Free Space on cataloged diskettes
             * Assign a DRIVE:\PATHNAME to be a VOLUME
             * Read subdirectories and labels, too
             * Comment each file with up to 80 characters
             * "Rubber-stamp" for comments for duplicate files
             * Sort catalog by filename, ext, size, path or date
             * Supports WILDCARD ("*" and "?") searches files
               and comments
             * User configurable printer formatting
             * Automatic update of catalog when disks are reread
             * User customizing of color, catalog name, ASCII filename
             * Relabel diskette if desired
             * Create ASCII disk file with user-assigned name
             * Multiple catalogs with your specified names





                                                                Page 7



        Explanation of features:

                The detailed explanation of each menu function is listed
                in the later part of the catalog.  This portion explains
                the general use of the keyboard and/or mouse to access
                those options.

                The HELP function is toggled ON/OFF by pressing the 'H'
                key on the keyboard or the right AND left buttons of the
                mouse at the same time.

                Each menu can be accessed through three functions, the
                HOT KEY, the MENU BAR or the mouse.

                On each menu item, one letter is capitalized. Pressing
                that letter on the keyboard will select that menu item
                and cause it to be executed.

                On each menu, one item is indicated at a time by the bar
                selector or MENU BAR.  The MENU BAR is moved using the
                RIGHT and LEFT keyboard arrow keys. When the bar is on a
                item, pressing <ENTER> on the keyboard will select that
                item and cause it to be executed.

                Where appropriate the RT/LT, UP/DN arrows, PgUp/PgDn and
                Home and End keys are active for the screen, as well as
                functions available to do the same things on the menu
                with the mouse.

                The cursor within the menu area (which you will see if a
                mouse is present) is the mouse cursor.  Use your mouse
                to select an item by placing the cursor on the item name
                or within 1 space on either side and pressing the left
                mouse button.  If HELP is turned on, another click of
                the left button is necessary to execute the function.
                This was done to allow you to see what the operation
                does before you execute it.  When HELP is turned off,
                the second click is not necessary.

                Pressing the RIGHT mouse button is the same as pressing
                the <ESC> key on the keyboard.




                                                                Page 8



        INSTALLING PmCat+

                Two files are required for PmCat+ to run, the
            PMCATPL.EXE file and the PMCATPL.OVR file.  The overlay
            file, (.OVR extension) must be either in the same directory
            from which PmCat+ is run or in a directory which is in your
            DOS path definition.

                You MUST retain the overlay filename of PMCATPL.OVR.
            The executable file of PmCatPL.exe may be renamed as you
            wish.

        The following items are essential only to the browsing and
        archive extraction functions of PmCat+.

            The defaults installed in PmCat+ will look for the other
             files it may require, in the current directory. (The
             directory you are in when you run PmCat+).  The defaults
             referred to involve the following programs and locations.

                1. Text viewer/editor - PMLIST.COM (which is really a
                                   public domain program called R.COM)
       ( Note use of R.COM -> )    is included for simple viewing of
                                   text files.  You may be able to use
                                   your favorite text viewer/editor in
                                   place of this (such as LIST or QEDIT)
                2. ARC extractor - program for extracting the contents
                                   of .ARC files. ARCE.COM is default.
                3. ZIP extractor - program for extracting the contents
                                   of .ZIP files. PKZIP.EXE is default.
                4. ZOO extractor - program for extracting the contents
                                   of .ZOO files. ZOO.EXE is default
                5. PAK extractor - program for extracting the contents
                                   of .PAK files. PAK.EXE is default
                6. LZH extractor - program for extracting the contents
                                   of .LZH files. LHARC.EXE is default.
                7. Scratch path -  a drive/directory path where the
                                   files extracted from an archive will
                                   be written while you view them. You
                                   cannot edit files from within an
                                   archive and update the archive with
                                   the changed file from PmCat+.
                8. Target drive - This is the drive on which PmCat+ will
                                   try to find the file chosen, using
                                   the pathname information stored in
                                   the PmCat+ catalog. The default is
                                   drive 'A'.




                                                                Page 9


            NOTE: NO decompressing code is in the PmCat+ program.  It is
                  assumed if you have files stored with a compression
                  program, that program can be excuted from the DOS
                  command line and thereby used to extract files.
                  PmCat+ just acts as a messenger between you and the
                  archiving program by sending the filename to extract
                  to the program you have said will extract it.

                If you don't know how to configure your system using
            PATH and don't want to deal with it (for whatever reason),
            just place copies of the appropriate programs from the
            above list in the same directory as your PmCat+ files and
            catalog.







                                                                Page 10

    CATALOGING FUNCTIONS

        CREATE A NEW CATALOG:  <R>ead, <W>rite  on MENU 1 and MENU 2

            Any time PmCat+ <R>eads a catalog from disk, you are shown
             the current catalog name and prompted for a catalog name. If
             you wish to use the catalog name shown, just press <ENTER>.
             If using a mouse, place the mouse cursor on the ENTER menu
             item and press the right button.

            To specify a name of your choosing just start typing it in
             and press <ENTER> or press the left mouse button when
             complete. A filename with wildcards is acceptable and will
             place you in the 'pick list' with the appropriate files to
             choose from.

            To select a catalog from the files on disk, select or type
             the asterisk ('*') and press <ENTER>.  This will present
             you with a 'pick list' from which to choose.

            This sequence of events first occurs when you run PmCat+. It
             also happens each time you <R>ead from or <W>rite to the
             disk.


        ADD FILES/UPDATE CATALOG:    <U>pdate menu option  on MENU 1

            <U>pdate appears only on the first menu (MENU 1) you
             encounter in PmCat+.  Choosing this option takes you to a
             window where you may

                1) Read files from a drive which you specify by pressing
                   the appropriate letter on the keyboard or choosing it
                   from the menu ... or

                2) Change the volume label of a disk drive by using the
                   '#' symbol on the menu or from the keyboard.

        SAVE CURRENT CATALOG TO DISK:  <W>rite  on MENU 1 or MENU 2

            <W>rite will save the current catalog to disk from
             either MENU 1 or MENU 2.




                                                                Page 11



    BROWSE FUNCTIONS:  <I>nfo, <V>olumes, <D>ir, <SPACE>  on MENU 2

    These are the functions you will use to find files and view their
    statistics, comments and contents of the actual file if desired.

        <I> key from MENU 2 will toggle the Comment and Info windows
         open/closed.  The Info window contains such information about
         the file as the volume on which it is located, the path to it
         on that volume and its size amd date. If the entry is a
         directory, it is so indicated and if it is a volume name, the
         free space on the volume is displayed.

        <V> menu selection from MENU 2 will cause a list of volumes
         contained within the current catalog to be displayed.  The
         volumes may be sorted just as though they were filenames (which
         really is what a DOS volume label is ... with the appropriate
         attribute set).

        <D> on MENU 2 will show the list of files contained within that
         directory-type object.  If it is a directory then the files are
         shown. If it is a compressed file then the contents of the
         archive are shown if you cataloged the disk with archive reading
         turned on.

        <SPACE> - pressing the spacebar will allow you to view the
         contents of the file that is currently being pointed to by the
         selector bar in the window.  Check to make sure the file is
         located on the drive indicated on the line just above the menu.
         If it needs to be changed, just press the appropriate key to
         select the right drive and then press <ENTER>.  What happens at
         this point is partly dependent on which program you have chosen
         to run (the text viewer/editor you specified or accepted in the
         Set Defaults area).






                                                                Page 12


        SEARCH:  <F>ind, <N>ext   on MENU 2

        These functions are use to find files by filename, an entry in
        the Comments field and they are also used to find free space on
        a volume when the list of volumes is displayed.

            <F>ind will first prompt you to select whether you wish to
             search for a file based on filename, comments or free
             space. The free space choice is an invalid choice if a list
             of volumes is not being displayed.

            <N>ext will find the next entry matching the search
             criterion you provided for the <F>ind command.


        SORT:  <S>ort    on MENU 2

            <S>ort can be selected from only MENU 2 while PmCat+ is
             running. However, turning autoSort ON while setting default
             filenames and paths will cause a sort by filename when you
             move from MENU 1 to MENU 2 to occur automatically.

            After selecting <S>ort from MENU 2, you will be prompted to
             choose among filename, ext, size, date and path as the
             options on which to sort.  Select one..

            Then you will be prompted for sort order - ascending or
             descending. Descending puts the largest value first whick
             would be appropriate for volume free space (that's the Size
             of volumes) but not for alphabetically arranged data.

        CHANGE CATALOGS: <R>ead   on MENU 1

            This procedure is identical to the initial reading of a
             catalog when you enter PmCat.  It first clears the memory
             of the existing catalog and then prompts you for a new
             catalog name which you may enter using the keybored or pick
             list function.


        MASKS: <M>ask-set  on MENU 1a3    (arrow keys disabled in menu)

            The Mask function consists of two portions, Include and
             Exclude and act as a filter.  It works on those files you
             wish to View, Print or Catalog using PmCat+ when either of
             its actions are turned ON.

            Include and Exclude may be toggled ON or OFF independently
             of each other by selecting them from MENU 1a3.




                                                                Page 13


            If both are selected, Include takes precedence.  Remember,
             if you turn both ON, NOTHING will be INCLUDED, except what
             you specify and the same goes for EXCLUDE.  This can be
             tricky until you get used to it.  Page 14

            The menu (1a3) for changing the MASK functions is buried
             with the set colors, set print formatting and set default
             paths, all of which are accessed thru the <S>et defaults
             option of MENU 1.

            At MENU 1a3:
                Exclude - toggles the exclude list ON/OFF
                Include - toggles the include list ON/OFF
                Clear - clears the item pointed to by the bar cursor
                <ENTER> - allows you to input a new or change the old item.


    PRINTING: <P>rint on MENU 2, <P>rint on MENU 1a4, <D>isk from print

        FORMATTING OUTPUT:   (arrow keys disabled in menu)

            <P>rint selected from MENU 1a4 opens a window to allow the
            format parameters for your printed catalog.

                Start-col is the column of the printed page on which the
                 field will begin.

                Width is how many characters the field will occupy on
                 the printed document. This can be any width you desire,
                 but if it is less than required for any field except
                 comments, it will be truncated (chopped off).

                Comments will print on the next line at the same start
                 col for the width you specify and repeat until all
                 actual comments for that file are printed. Then it
                 will begin printing the next entry. Comments are left
                 justified.

                Filename is a 12 character field consisting of the
                 filename, a period and the file extension. It is right
                 justified.

                Size is a number that will occupy 10 spaces. It is right
                 justified.

                Date will occupy 10 spaces, MM/DD/YY format.

                Path can be up to 65 characters and is the path to the
                 file on its particular volume.

                Volume is the volume name from which the file was read.
                 It may be up to 11 chars and is left justified.




                                                                Page 14



        PRINTING:  <P>rint  on MENU 2

            PRINTER SET UP STRING: <*>  on Print window menu

                <*> - will prompt you for a new string of characters
                 which will be sent to your printer before printing
                 of the catalog starts.
                    Each character must be in decimal form and
                    preceded by a '#' and followed by a space.

                        e.g.,   #27 #15

                    Up to 20 characters may be used here.

            ASCII DISK FILE: <D>   on Print window menu

                <D> - will cause the output which would normally go to
                 your printer, to be sent to the disk as a file with the
                 name you specify in ASCII format.  It can be easily
                 edited and/or printed at a later time.

    MISC FUNCTIONS:

        DELETE VOLUME:

            <D> - chosen at MENU 1 will open a window with all the
             volumes in your current catalog.  To delete a volume, use
             the UP/DN arrow keys and select it with the bar and press
             <ENTER>.  You will still be given an opportunity to abort
             the operation at this point by answering Y/N on the menu.
             Obviously this operation is not final till you save the
             modified catalog to disk...but at that point, it is
             permanent.

        ERASE FILE:

            <E>rase a file from MENU 2.  It is the same process as
             deleting a volume from MENU 1.  The difference in the two
             operations is, when you Erase a file, the slot it occupied
             on the screen is shown >>DELETED<< instead of removed
             altogether.  As with volume deletion, the operation is not
             final until you save the modified catalog to disk.




                                                                Page 15



        COMMENTING FILE:

            <C>omments may be added to files *and* volumes.  To comment
             a volume you just select the <V>olume list from MENU 2 and
             select <C> from the menu.  A small editor aids you in the
             input of your comments.  A 40x2 window accepts your
             comments.  The UP/DN arrow keys will move between the
             lines, the HOME/END keys are active and INSERT is the
             standard mode (there is NO overstrike mode).  DELETE works
             as well.  PgUp/PgDn will accept your comments and
             immediately place you in the comments field of the
             preceding or succeeding file, ready to type more comments.

        OPERATING SYSTEM (Shell):

            <O> - from MENU 2 will execute a call to create a temporary
             shell in DOS so you can copy, delete, inspect and otherwise
             wreak havoc on your poor unsuspecting system.  If enough
             memory is not available, this feature will refuse to work.

        CHANGING VOLUME LABEL:

            <#> - chosen when in the <U>pdate section, will read the
             present disk label, tell you what it is and ask you if you
             wish to change it.  You MUST have a drive selected for this
             feature to function.

        USING THE .DEF FILE:

            This option, frankly can be tricky if you want a different
            name than PMCAT.DEF.  PmCat+ will *always* look for
            'PMCAT.DEF' when it is run, if it isn't found the internal
            defaults are used.  The option of providing the alternative
            .DEF files was to cover the possibility that someone might
            want an alternative color set or other defaults on
            occassion.  Frankly, I use PMCAT every day and never use
            this option, but it was an option that was so simple to
            offer and doesn't get in the way of anything else, that it
            was put in.



                                                                Page 16



    USING WILDCARDS:

            PmCat+'s wildcards are a bit more flexible than DOS's.
             E.g., if you type *ca*.* with DOS's dir command, it will
             show ALL files.  It sees the first '*' and then looks for
             the '.' and extension wildcard.  If you used that same
             wildcard in PmCat+ it would find all files with 'ca'
             anywhere in their filename (not extension).

            When searching for a string in Comments, don't forget to
             precede it with a '*' unless you are certain the first
             character of the comments you want will match the first
             character of the string you search for.

            Where '*' assumes ALL characters match, '?' assumes the
             match of only a SINGLE character.














```
{% endraw %}

## PMCTIPS.DOC

{% raw %}
```


                                     PMCAT+

                     Tips and Hints and General Information


        General Information:

            PMCAT+ is a 'disk file catalog' program.  When we first
            designed PMCAT+, the concept we had of a disk file catalog
            was a program that cataloged the programs on floppy disks
            only.  In the last two years, it has become increasingly
            apparent that many, if not most, users consider hard
            drives to belong in the realm of things a disk file cat-
            alog ought to deal with...and that is a very reasonable
            expectation.

            On the other hand, there were and still are some excellent
            programs I prefer to call 'file management' utilities,
            such as Xtree.  These file management programs have the
            ability to copy, move and even edit files, but don't
            perform the cataloging functions of a program like PMCAT+.

            In short, PMCAT+ is designed to allow you to do pretty much
            whatever you want to do with file information DOS stores
            in the directories of a disk or diskette.  When you need
            to work on the physical file itself, you must either use
            one of the file managers, or the DOS shell of PMCAT+ and
            then do whatever you need through the shell, at the
            command line prompt.  You may, however, read the contents
            of files using PMCAT+ in conjunction with a file lister
            and de-archiving (if the file is within an archive)
            utility.

            Despair not, however.  We are working on a program to
            incorporate the best of both worlds, file managers and
            file catalogers.  Keep an eye out for it.  It will be a
            product of Hip Pocket Software.


        Technical Information about PMCAT+:

            PMCAT+ stores files in memory as it reads them, in the form
            of a 'linked list' of files.  The CATALOG is the root or
            'parent' of every volume contained within that catalog.
            Each volume contained within the CATALOG is a 'child' of
            the parent CATALOG.  Each directory in the root directory
            of each volume is a parent to the files contained within
            the specific directory and so on.  Therefore, each file
            and directory has 'pointers' (an address of 4 bytes, in
            RAM, which tells PMCAT+ where the record for that file or
            directory is, physically).  Every record (file, volume,
            catalog) has pointers as a portion of itself which tell
            where and what its parent is, what and where its children
            are, and what and where its peers (a 'next' pointer to a
            file, directory or volume that has the same parent) are.

            Without going into too much more detail, you can know that
            each file read into PMCAT+ will occupy 38 bytes of memory
            plus the string representing each directory and/or
            subdirectory.  A good rule of thumb is about 45 bytes per
            entry on the average. If you comment a file, then add
            another 80 bytes to this requirement (per file commented).

            The alogrithm (sequence of processing steps) we use to
            link new files into the list automatically sorts files
            having the same parent.  This isn't apparent when you View
            the complete catalog unless you open the Infowindow and
            look at the path to the files.

            As you add comments to files that already exist in PMCAT+,
            the amount of memory required increases by up to 81
            characters per file (depending on how long your comment
            is).

            A practical technical limit for a machine with 500K
            available for cataloging is about 10,000 files.  If fully
            commented (every file contains an 80 character comment),
            the limit is about 3000 files.



        Hints and Tips:


            ARCHIVES -

            Although PMCAT+ has the ability to read the contents
            (directories) of ARC, ZIP ,LZH and PAK files, that process
            may be found to be interesting at first and inconvenient (in
            terms of memory use) later.  In most applications, the name
            of the compressed file indicates the overall function of the
            support and executable files contained within it. If you
            start by cataloging *every* file by using the features that
            read directories of compressed file format and later decide
            you wish you hadn't, a simple update by rereading the disk
            with the archive reading turned off will fix things.

            A good alternative to the above is to read your disks with
            archive reading turned on and the masking feature also
            active to get only the FILENAME.EXT's that you want.


            MULTIPLE CATALOGS -

            Although PMCAT+ was originally intended to be used with
            small to moderate (50 - 200 diskettes) catalogs, it is
            quite capable of managing truly huge diskette collections.

            For some the idea of splitting a collection into separate
            files is abhorent, for others it seems to make a great
            deal of sense.  The purpose of this is not to judge or
            offer opinions about how you should manage things, but
            rather to show how PMCAT+ *can* do it.

            We've had a number of requests to offer an option called
            'categories' to PMCAT+.  Given the fact that a simple word
            or indentifier in the comments section of a file record
            can accomplish that task, or the ease with which a
            different catalog can be loaded, we haven't *yet* done
            that particular update.  (The coding of the option would
            require the user to evaluate each file as it is read and
            that particular process is something we've tried very hard
            to avoid to date).  We would appreciate comments on how
            you would like to see the 'categories' feature implemented
            if we should go ahead with it.

            At any rate, splitting your collection into GAMES, UTILS,
            APPLICATIONS, etc., would allow PMCAT+ to work with your
            collection without hesitation.  We prefer the speed of
            PMCAT+ to be fully available at all times.  Obviously, if
            our users would rather have a huge catalog held on disk
            and accessed more slowly, we would be remiss in not
            addressing that request.


            SEARCHING FILENAMES AND COMMENTS -

            This newest version of PMCAT+ has had some surgery done on
            its searching routines ... for the better, we think.
            Wildcards, ('*' represents any number of characters of any
            form, '?' represents any single character of any form) may
            be used in your search of filenames or comments.  The
            search is now consistent in both areas due to improvements
            in the speed of 'parsing' (looking through the files and
            comments).

```
{% endraw %}

## PMDEL.DOC

{% raw %}
```



                                  PmDELDUP



        PmDELDUP was written specifically for licensed users of PmCat and
    PmCat+ and will be sent to each user who decides to register either
    version of PmCat.

        PmDELDUP will find all of the files with duplicate filenames in
    your PmCat catalog and then display them along with their sizes and
    pathnames (locations).

        PmDELDUP incorporates the same interface present in PmCat+.  That
    is, it has mouse support and pick lists to select your catalog(s).
    There is also the same context sensitive help for the menus.

    Using  PmDELDUP:

        1.  Read in a catalog file.

        2.  Select View from the menu.

        3.  (optionally) Sort the files if desired.

        4.  Use <SPACEBAR> to mark those files you wish to delete.

            Once the marking is done you will no longer be able to fully
            view those files.  The marker in the first letter of the file-
            name was just put there for possible reference.

            You leave the screen with <ESC> and if you wish to view the
            files again, the ones you marked for deletion will no longer
            be on the display.

        5.  Write the changed catalog to disk.

            THIS OPERATION OVERWRITES YOUR OLD PMCAT CATALOG AND THE FILES
            YOU DELETED WITH PMDELDUP ARE GONE, GONE, GONE!

            If you made an error in marking, just <R>ead in the original
            catalog again and you will be back at the starting point with
            nothing lost except a few minutes of time.

        I'm trying to think of an efficient way to allow un-marking of files
        as that is obviously a convenient feature ... but it eludes me for
        the time being.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1997

     Volume in drive A has no label
     Directory of A:\

    FILE1997 TXT      2813   1-02-90   6:35p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:04a
    MOP109   ARC     20945  11-03-89   2:51a
    OMBUDSMN ASP       595   7-21-89   1:01a
    PMCAT    CAT     21457  11-03-89   4:54p
    PMCATPL  DOC     37002  11-09-89   1:42a
    PMCATPL  EXE     60624  11-13-89  11:18a
    PMCATPL  OVR     66560  11-13-89  11:18a
    PMCORDER FRM      1815  11-14-89  10:50a
    PMCTIPS  DOC      7486  11-12-89   7:56a
    PMDEL    DOC      1823  11-01-89   5:58p
    PMLIST   COM       958  10-12-89  12:53p
    README            3502  11-02-89   5:40p
           14 file(s)     226158 bytes
                           90112 bytes free
