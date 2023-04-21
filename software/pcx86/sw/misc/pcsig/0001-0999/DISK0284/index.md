---
layout: page
title: "PC-SIG Diskette Library (Disk #284)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0284/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0284"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LABEL MAKER"

    A simple menu-driven labelmaker, perfect for novices.  Print labels for
    your library of floppies on the labels that come with your blank
    diskettes.
    
    The program automatically reads and prints all file names,
    subdirectories, a large title, up to eight lines of comments, the date,
    number of files, disk format, and bytes used/free on three different
    5.25 inchdiskette label sizes (3 1/2 x 15/16, 4 x 1 7/16, and 5 x 1
    7/16) and on two 3.5 inch diskette label sizes ( 2 3/4 x 2 3/4 and 2 3/4
    x 1 15/16).
    
    Options include printing multiple labels, and printing without listing
    file names. Supports LQ printers as well as Epson dot matrix printers,
    the IBM Proprinter or Graphics printer, and compatibles.  Will also work
    on any printer capable of enlarged and compressed print modes.
    Printer, screen colors, label size, size of title, and other options can
    be configured to your specifications.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISKOVER.DOC

{% raw %}
```
]




                             DISKOVER Users Manual      Feburary 2, 1989



           DISKOVER (C) Copyright 1986, 1989 by Karson W. Morrison
                        DBA Caleb Computer Consultants



                        Written by Karson W. Morrison

                    Documentation by Dex Hart,  Miami Fl.





         This program is licensed subject to the following conditions:

         1.  The program DISKVR5X and its derivatives may not be copied
             or shared.  It is for the use on one CPU.  The user-
             supported version DISKVR4X and its derivatives maybe copied
             and shared subject to the following included conditions:

               1. This program may be copied ad lib providing the
                  owners copyright notice and disclaimers of warranty
                  are reproduced in full.

               2. Copies of the program may not be sold, the only charge
                  may be for copying services.  (No more than 10 dollars)

               3. That all copies furnished to others include the
                  program, DISKOVER.DOC, and the README.1ST files, and
                  that the DISKOVER.DOC file contains the form to be
                  used when registering the program with the author.

         2.  The authors copyright notice are not to be removed.

         3. The program and documentation is supplied as-is and the
            author disclaims all warranties, expressed or implied,
            including, without limitation, the warranties of
            merchantability and the warranties of fitness for any
            purpose.

         4.  The author further reserves the right to make changes to
             the program or documentation without obligation to notify
             any person or organization of such changes.





                             DISKOVER Users Manual         Feb.  2, 1989

           DISKOVER (C) Copyright 1986, 1989 by Karson W. Morrison
                        DBA Caleb Computer Consultants

                        Written by Karson W. Morrison
                    Documentation by Dex Hart,  Miami Fl.

        What is DisKover?        _________________

        DisKover is a utility which prints sleeve inserts for floppy
        disks.  This seemingly simple objective is accomplished with
        style and lets you find programs and files without inserting a
        disk in your computer and without using a complex disk filing
        program.  DisKover does some other neat things too, but we'll get
        to those later.  This program is for PC/XT/AT and compatible
        computers.  A dot-matrix printer or HP LaserJet capable of
        condensed print (17 cpi or similar) is required.

        We've discovered most users don't want (or need) what is
        essentially a data base (disk filing) program just to locate a
        file.  The filing system we ourselves use (and we have a LOT of
        floppies) is to use plastic 50-75 disk storage boxes with
        dividers.  We label the dividers with headings such as 1-2-3, BBC
        Utility, Hard Disk Utility, DOS, Data Base, Word Processing, Back
        Up and so on.  The idea is to roughly cluster disks by type.
















            Sample DisKover (Ver. 5.0) printed on HPLaser Series II Printer

        When you use DisKover, you get a sleeve insert with a neat,
        double-column, condensed-type printout of a sorted disk
        directory.  This is a full-info printout, with files sorted (your
        choice of sort type with version 5.0) and time and date stamped.
        The time and date of insert creation is also included, along with
        disk free space and a plus--bytes occupied by the files.  Plus
        volume-ID, if present.  The program does not give you a file
        count, but then you're looking at them.  Using DisKover makes for
        a simple system, and finding a particular program rarely takes
        more than a few seconds--find the general category (which
        "shoebox") and then scan just a few disk inserts.  You quickly
        DisKover the file you want.        ________


                            Diskover Users Manual                 Page 2

        DisKover prints your directory listing inside a disk-sized
        border--just cut on the dotted lines and your insert will slide
        neatly into the sleeve, "Kovering" your disk.  If the file count
        exceeds the size of a floppy, the length is doubled, with a neat
        fold-line indicated.  The need for this is rare, but when you
        know you face a disk loaded with files, it's neatest if you print
        that one at the top of a page, to prevent the intrusion of a perf
        line.  (If you do get a perf line inside a DisKover printout, the
        program is smart enough to skip to the next top-of-form so the
        alignment is retained; you can either redo the cross-perf
        printout or just reinforce the perf line backside with
        transparent tape.)

        Normally, two DisKovers are printed per page.  Perf skip and form
        feed are automatic, of course.  And when you exit, your printer
        is on the original perf-line and reset to default mode.  Neat and
        tidy...."well-behaved."

        File Explosion:        _______________

        One of the neatest tricks DisKover can do is split out (explode)
        *.arc and *.lbr files.  If you so elect.  If you're not a software
        freak and don't download programs from electronic bulletin
        boards, this may not mean much to you.  Let's explain:  ARC means
        an "archive" file (LBR stands for "library"), which is simply a
        group of files individually squeezed and then collected into one.
        This is done to allow a multi-file program to be downloaded via
        your modem in a single step (only one file name) and more quickly
        because the *.arc file is much smaller than the sum of its
        unsqueezed parts (you don't want to waste Bulletin Board System
        (BBS) time--and you may be on long distance).

        Once downloaded, you will split and unsqueeze the *.arc file at
        the same time, with a single command, easily, fast, and reliably.
        There are single purpose programs from Phil Katz or Vern Buerg
        that do only this.  You may have received the text you are now
        reading as part of an ARC'd DisKover version (version 4.x) from a
        friend, a user group, or a bulletin board.

        Sometimes you split up a file, look at it, and want to save it
        even though you have no immediate use for it.  So save just
        the *.arc file and discard the rest.  Yet you may elect to list
        all the files in the arc when you create the sleeve insert with
        DisKover even though the "members" of the arc file have not been
        extracted.  DisKover prints the arc contents without disturbing
        the arc file or filling your floppy with actual files.  You save
        a lot of floppy space this way and also keep all the program
        members in one place--nothing gets lost.

        If you have the full-size ARCHIVE.EXE utility itself (which
        allows you to create arc files, and even run a program from
        within an arc file, you may go in and read the doc or "read-        ______
        me" file without even bothering to un-arc the whole....IF you
        know it exists and what the name is.  With DisKover you will.


                            Diskover Users Manual                 Page 3

        If you have a hard disk and split up an *.arc file to try it out
        and later want to discard it, how do you know which files on your
        crowded directory belong together?  The easiest way is to look at
        the floppy containing the *.arc file in question, read the
        DisKover insert, and you'll find a complete list of the files in
        question.  Deletion then becomes easy and safe.

        The fact is, the ability to split out the contents of an *.arc or
        the similar *.lbr (library) file without actually having the file
        members on disk is a major feature, and when combined with easy
        file location simply makes your life a lot easier (and deletion
        of unwanted files from your hard disk a lot safer).  That's what
        a good utility is supposed to do and we believe you'll rate
        DisKover among the select few of your favorite utilities.

        If you're a power user, we think you'll put DisKover into the
        class of list, where, sdir, archive.exe and the single-                 ____  _____  ____  ___________
        purpose arc-splitter programs.  (And if you don't have those
        programs, you should get them, as they, like DisKover, add joy                                                     ________
        and speed to using your computer.)

        Other abilities:        ________________

        DisKover will also print out the contents of a hard disk
        directory, or for that matter, the whole contents of a hard
        disk--all directories.  Printing is similar to that of a floppy,
        boxed and standard floppy size up to a directory count of about
        70 standard files.  Exceed that limit and the box is extended,
        but only as far as needed, not doubled as is the case with many-
        file floppies.  The program is intelligent.

        If a directory file count is big enough, or a new directory is
        started without enough space to be completed on that page, a
        bottom-of-page dashed line will be drawn with the notation "Cont.
        Line", the perf line skipped and the box begun again with this
        notation so you know you're looking at a continuation of the same
        directory.  All directories are labeled, of course.

        When you start the program you can choose to print immediately or
        write the print file to disk.  For example, if you desired the
        complete double-column printout of 18 megs of data, you would
        definitely write the file to disk.  Then when nothing else is
        going on you can type "print filename" and go have a cup of
        coffee.  DisKover tries not to waste your time.

        You can also write to disk the DisKovers for a stack of floppies
        and again print them at your leisure from the named disk file.

        A number of printers are directly supported (25 of the most
        widely used as of Dec 88) but most others can be easily
        customized via a short menu, assuming you can recognize the
        appropriate codes in your printer manual.  For color monitors,


                            Diskover Users Manual                 Page 4

        you can customize two different screen types with a multitude of
        choices--have it your way or accept the default selection (hit
        ESC twice) which we have carefully selected for legibility.

        DisKover Versions:        __________________

        DisKover is available in two basic versions, 4.x and 5.x.
        Versions 4.x are shareware, available free from bulletin boards
        but registration (and payment) is encouraged as you also will
        then receive version 5.x containing several improvements,
        including the insert title printed in large type (greatly
        speeding quick-and-easy file location which is the primary reason
        for using the program), larger file-count capacity (for listing
        hard disk directories), and some improved customization options
        which speed normal use.  However, version 4.x is a fully useful
        program, not a "crippled" version of the type often offered free.
        We'd like to gently encourage you to register, not force you.
        (Businesses must register.)

        Registration is just $25 (see the form at the end of this manual)
        and you will get a personalized, serialized copy of the current
        release.  On that disk will also be a serialized copy of the
        current shareware version.  Please share the new version with
        your friends and business associates.

        We ask registered owners to NOT distribute copies of 5.x, as it
        is not shareware, but modestly-priced commercial software.  Play
        by the rules and we can afford to keep improving an already
        useful program and meanwhile develop others.

        HOW TO USE DISKOVER

        Installation:        _____________

        It will probably take less space to tell you how to use the
        program than we used to tell you how useful it is.  Use is a
        snap, and once you've started you'll never have to refer to this
        manual again.  You probably could get by without reading it at
        all, but many users feel more comfortable with a manual as
        backup.  But before we use the program, it must be installed.

        If you buy version 5.x (or register 4.x) you get
        diskvr5x.com, the install program, diskinst.com, this        ____________                       ____________
        manual in printed form, and a disk file called "readme.1st" which
        may contain information not available or changed since the manual
        was last printed.  When you run diskinst.com the first time,                                        ____________


                            Diskover Users Manual                 Page 5

        you must respond to the first menu item in which you indicate            ____
        the input filename (diskvr5x.com is the default) and your
        preferred output filename (diskover.com is the default).  Other
        menu items are optional but you should at least pick a printer
        (or input your print codes if your printer is not listed).  We
        also suggest you elect to always explode *.arc and *.lbr files
        if you expect to encounter these types of files.





















                             Version 5.x install menu

        The 4.x version installs itself, and you may make changes
        (reinstall) any time you use the program; the sequences are a
        simplified version of the 5.x version install sequence.  The 5.x
        version uses a separate install program as there are more options
        and the separation allows a smaller working program to save disk
        space.  You can reinstall either version as many times as desired
        should you want to change printers or colors or any other option.
        If you get DisKover in archive form or from a friend, when you
        split it you will get the three 4.x version files: diskvr4x.com,
        this doc file on disk, and readme.1st



                            Diskover Users Manual                 Page 6

















          Start menu for version 5.x; you must choose the first item;
                        other choices are optional

        That sounds too complicated, so let's just do it.  Put the
        DisKover disk in A: (you made a back up, didn't you?) and type
        "diskvr4x" (or "diskinst" if setting up 5.x).  You will see a
        text screen on 4.x to nudge your conscience to register and get
        the somewhat-more-capable 5.x version as a reward.  Then follow
        the directions.

        After setting the filename and other options in version 5.x you
        will see two color selection screens (these are the opening
        screens in version 4.x after which you make the printer election
        and version 4.x installation is complete).

















            Color selection screen.  Pick the combination of text and
               background you prefer, for main screen and windows.

        On the color selection screen, mono people may just hit ESC twice
        (color people too, if you accept our choices, which we took pains
        to make legible on IBM color monitors).  Otherwise move the cursor


                            Diskover Users Manual                 Page 7

        to color combinations of your choice and hit return.  You make
        two selections, don't worry about which is which (for the record,
        you first choose the main screen colors, then window color
        combination).

        If you don't like what you did, do it over.  You can change
        selections every day if you want, so don't worry about making a
        bad choice.

        You get a choice of (as this is written) 11 popular printers
        which probably include the majority of printers in use in terms
        of unit count.  If you own one of these, just pick the matching
        number and hit return.  Your printer not on the list?  Type 12
        and hit return and you can enter ASCII codes for condensed type,
        top-of-form, printer reset, 8-lines-per-inch spacing and, for 5.x
        versions, expanded print code to allow for a more readable insert
        title.  Enter codes in ASCII, leading zero not required; enter a
        zero in any unused code entry location.

















                 Select a printer or choose a custom installation.

        On versions 5.x, you'll be asked if the printer is ready.  If Y,
        a full-width small box is printed with 50 digits running through
        it.  The idea here is to see how many wide-mode digits can be
        printed within the cut-line borders (the width of a floppy).
        Note the right box edge is identified by the two vertical bars
        above and below the line of numbers.  See how many numbers hang
        out to the right, subtract from 50 and give that answer.  Just to
        make sure, DisKover will print the box again, this time using the
        number you indicated.  If all the digits are within the box, type
        Y for yes.  If not, you type an N and you'll be given a chance to
        do it again and try a number 1 or 2 digits larger or smaller.
        Hard to go wrong.  And from then on we won't let you enter a
        title that won't fit on the insert--but we give you room for the
        longest title possible.


                            Diskover Users Manual                 Page 8







               In this example, a user would indicate that 24 letters
               fit into the available space.  Note also that if you
               choose a custom printer install, you can send codes
               for double-wide AND italics                                   _______

        Now you'll be asked to select a left margin (usually zero) and
        you're installed.  The program has been renamed "diskover.com" so
        to run it at any time, just type "diskover" and hit return.  The
        install program with version 5.x allows you to redo a program
        with a different name if you've renamed it.  If you have a hard
        disk, stick the program somewhere on the path and you'll be able
        to call it from anywhere.

        Use:        ____

        Everytime you start a 4.x version you'll see an option selection,
        press (escape) should you want to change the printer or color
        options.  What could be easier?  With either version you just
        chose from the mini-menu to print a sleeve insert (enter a 1) or
        write a file of inserts to disk for later printing (enter a 2).
        Then you'll be asked a short list of short questions requiring
        very short answers.        ____









                Select option 1 (print) or option 2 (file to disk)


        You'll be asked if you want to add a volume-ID if there isn't
        one.  If you choose Y you can type in a volume label if none
        existed before.  (If you have version 5.x you also have an
        option to change the volume label if one exists.)

        You'll be asked if you want to expand *.arc or *.lbr files if they
        exist.  Y or N.  If you ever use these types of files choose Yes.

        (The above comments apply mostly to version 4.x.  Version 5.x
        allows you to pre-answer some of these questions to save time
        during each program use.  Even so, you can elect to change most
        options at print time with an enlarged menu--usually you'll just
        ignore those options as that's why you set the defaults as you
        did.)



                            Diskover Users Manual                 Page 9

        You'll be asked whether you're working from a floppy or hard
        drive. Type F or H.

        Most times you'll choose F.  You'll be asked for a drive ID.
        Type A or B, wherever you've stuck the disk.  Note that by
        alternating drives, you can speed up the process when you're
        doing real-time printing of multiple floppy inserts.

        DisKover will read and sort the files and invite you to type in a
        title line (which will be printed in large type by version 5.x;
        this version also allows you to preselect sort modes other than
        filename).

        (If you are not sure what you want for a title, hit the F2 key
        and you see a DisKover of your floppy on the screen.  All the
        files and other data are displayed so you see what's on the disk
        you're about to title.  Because you may decide to do nothing with
        this disk, you must reenter a drive ID to continue, along with
        your newly formulated title line.)

        Hit return and that's it.  Keep in mind that if you have a disk
        loaded with files, start it at the top of a page, as it may print
        a "fold-line" and a second "page".  Normally you'll get two
        inserts per 8 1/2 x ll printed page.  Just cut on the dotted
        lines.

















                         Select drive and type in the title


        If you elected to write a file to disk earlier (you entered "2"),
        the file will be created in your current subdirectory (version
        4.x) or in your preselected subdirectory (version 5.x).  If you
        choose to read a hard disk you elect to print the whole disk or
        just a directory (A for All, D for Directory).  Choose Directory,
        and you enter the directory name, no drive ID is needed.  For


                            Diskover Users Manual                 Page 10

        subdirectory UTIL, just type "util"; you don't need a c: or a \.
        If you want to print a second-level directory, separate the names
        with the customary \, for example, UTIL\TAX.  Keep going as long
        as you want.  The printouts will all be condensed, wide titles in
        5.x, labeled, and neatly boxed.  No printing atop the perf lines.
        A very civilized program.  Sub-Directory \ is the same as the
        entire hard disk.  The program prints the Sub-Directory and its
        siblings.

        If you actually wanted to print the whole hard disk, it would be
        wise to have selected number 2 from the early menu, thus writing
        the resulting file to disk (dir.dir).  A hard disk containing
        about 17 megabytes results in a 70K file.  That'll take a while
        to print, so that's the kind to send to disk and then type "print
        dir.dir" and disappear for awhile.  And that's why we offered the
        disk file of directory listings.  You may want to use the disk
        file when doing a great pile of floppies too--like when you're
        first (and at last) beginning the Great Organizing Job.  The disk
        file, a "directory of directories" is called dir.dir in version
        4.x; users of 5.x can customize the name to their taste at
        installation time or skip that choice and stay with dir.dir as
        the default.

        Version 4.x can handle a total file count of about 650 on a
        device (floppy or hard disk); version 5.x has a limit of 800
        files within a subdirectory, unlimited on the device.

        That's really about it.  We've including a registration form for
        those of you who've not yet registered but who have now realized
        how valuable this program really is.  And would like the
        improvements offered by the 5.x version.  When we supply a
        version 5.x disk, we also include your serialized version of 4.x.
        This is the one you can legally pass out to friends.  Give them the
        4.x execuatble files, but please don't give them the 5.x files.
        For our kind of plan to work, we rely on the basic honesty of our
        users.  This is a well-written,  very useful,  modestly-priced
        program.   We've done our part...we ask that you do yours as well.

        A final miracle:  At this ridiculously low price we still
        offer support (and invite comments).  You can call us at the
        number listed on the registration form.  As a final gesture of
        good will on our part and an indication of our commitment to our
        product we will help install new or unusual dot-matrix printers.
        You must be registered, of course, but just send us photocopies
        of the printer-code pages and we will give as much help as
        possible and perhaps include that printer in future versions of
        DisKover.



        Appendix to Diskover User Manual                          Page 11

        Notes from the author:

        1.  To print this documentation do - PRINT DISKOVER.DOC <enter>

        2.  The commercial version of this program is sent along with
            a printed copy of this document and there is an actual
            exhibit where the blank spaces show on the disk version
            of the documentation.

        3.  Printer codes:
            The only standardization that exists in the printer world
            is no standardization!  Some people have been kind enough
            to send me copies of the print codes for the printers that
            are shown in the install menu.  I have not been able to
            verify that they all do work.  If you try one of the pre-
            installed printers and it does not work correctly, please
            send me the revised codes that you do get to work.

        4.  When you try to figure out what codes you want to enter
            into the program, look at the BASIC examples that are
            provided in most printer manuals.  You may see something
            like this  LPRINT CHR$(27);"0";
            That code is the EPSON code for 1/8th Line Spacing.
            To enter that code into my program you would enter for
            the first code 27, (the same as CHR$(27) above),
            the second code 48, which is the internal machine decimal
            value for the number 0.  These codes are usually listed
            in the manual.  But you might have to look for them.

        5.  Laser Jet Printing:
            There is some special coding in the program for laser
            printers.  They cannot print through a perf line, and
            the number of lines on a page are less than a
            continuous form printer.  If you are using a laser
            printer other than an HP Laser Jet you should tell
            this program you are using an HP Laser on the menu,
            and then enter your codes for each of the separate
            items.  Please send the codes that you get to work
            to me so I can include them in the install menu.
            (This can only be done on the commercial version of
            the program.)


        Appendix to Diskover User Manual                          Page 12

        6.  The user-supported version of DISKOVER allows up to six
            codes for each required field.  The commercial version
            allows for 10 codes.  The extra code fields are needed
            when you start using expanded codes or for those who
            have color printers; to print the title in a color, say
            red.  Most dot matrix printers allow you to mix codes to
            get different print styles.  You could have:
              Condensed;
              Condensed, Expanded;
              Condensed, Expanded, Italics;
              Expanded;
              Expanded, Italics;
            Each of these codes could be sent to the printer as you
            print your diskover.  You must remember though that if
            you turn it on, you probably also need to turn it off.

            On the Default Epson-FX that is in the issued commercial
            version of DISKOVER I use:

            Condensed_Print = 27 53 27 15 27 70 00 00 00 00;
               27 53 = Cancel alternate character set (italics)
               27 15 = Set condensed print mode
               27 70 = Cancel Emphasized print mode

            Top_Of_Form     = 12 00 00 00 00 00 00 00 00 00;
               12    = Top of form

            Reset_Printer   = 27 64 00 00 00 00 00 00 00 00;
               27 64 = Initalizes the printer
                 Note: Not all printer have this code, you may have
                       to enter Condensed off, 1/6th line spacing

            Line_Spacing    = 27 48 00 00 00 00 00 00 00 00;
               27 48 = 1/8th Line spacing

            Expanded_Print  = 18 27 52 14 27 69 00 00 00 00;
               18    = Cancel Condensed print mode
               27 52 = Selects Alternate Character set (italics)
               14    = Sets enlarged print mode
               27 69 = Sets emphasized print mode

            Experimentation can be fun; Try different codes, when
            you get one to work rename that version to hold for a
            while, why you try other codes.

        7.  The left margin option is used mainly for a hard disk
            printout where you may want a left margin so you can
            punch holes and put it in a binder.  The program is
            issued with a value of 50 you should change it to a
            value of 0 (zero).


        Appendix to Diskover User Manual                          Page 13

        8.  In order to use the expanded print option properly,
            you must run the section of the program where it asks
            if the printer is available.  Because, it is in that
            portion of the install that I determine how long a
            description title line you can have.  If you don't
            do this portion of the program install, the title line
            will probably extend past the right margin of the
            diskover.

        9.  Version 5.0B of Diskover has been modified to support
            additional printers.  The major printer is the new
            HP Laser Jet Series II.  This printer has internal fonts
            for printing the line drawing characters that are similar
            to the window lines on the screen.  We have modified the
            program to print the lines on the paper instead of dashes
            and bars for the sides.

       10.  Diskover version 5.0B will also print on 3 X 5 index cards.
            If you would like to create a card index box of all your
            disks.  You install the program for your regular options
            and printer.  You then back up one of the Menu items to
            Index cards.  Install your printer telling it that you
            want page length of 3 inches.  Some of the printers have
            codes already installed for the correct form length.  You
            cannot use 3 X 5 cards on the Laser Jet Options.

       11.  Diskover 5.0C was modified to allow 50 print codes for
            condensed and expanded printer commands.  This was done so
            that people with laser and color printers have additional
            codes at their disposal to use as needed.  If you are using
            a cartridge in a laser printer then you will need the
            additional codes.

       12.  Diskinst Version 1.0C and 1.0D had a problem with the 3X5
            index card option.  If you were keeping the Default FX printer,
            the program told the printer that the page length was 3 inches.
            If you changed to another printer the problem did not exist.
            Diskinst Version 1.0E corrected that problem.

       13.  Diskover has some testing coding stay in the release version
            which caused a floppy that had multiple subdirectories to not
            print correctly.  The data for the second floppy got merged
            unto the first as if it was the same floppy.  Diskover 5.0D
            corrected that problem.  The Volume-ID (if present) is also
            shown on the screen when you are asked for the Cover
            description.



               ************ Registration form here *************

               Please register me as an owner of a copy of the
               USER-SUPPORTED software program DISKOVER.  I agree
               to your disclaimer of all warranties and your
               restrictions on copying, and agree that the
               commercial version that I receive will not be
               copied or shared.

           Your Name   ____________________________________________

           Your Address____________________________________________

                       ____________________________________________

                       ____________________________________________

           Your Phone Number ____ _____________ in case I need to
           contact you for any reason.  (Not Required.)

           Mail this form with your $25.00 to receive the enhanced
           commercial version of this program to:

                           Caleb Computer Consultants
                           14 Larsen Road,
                           Ringoes NJ. 08551

                           (908) 788-1846  (in 1990)

           Include:

           Old Serial Number _____________________

           Old Version Number ____________________

           Printer this program will be used with _________________

           The printer codes you used for any not preinstalled in
           the Menu.

           Condensed          ___ ___ ___ ___ ___ ___ ___ ___ ___ ___

           1/8th Line spacing ___ ___ ___ ___ ___ ___ ___ ___ ___ ___

           Top of Form        ___ ___ ___ ___ ___ ___ ___ ___ ___ ___

           Reset Printer      ___ ___ ___ ___ ___ ___ ___ ___ ___ ___



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0284

     Volume in drive A has no label
     Directory of A:\

    #_______           100  10-01-90   5:46p
    DISKOVER DOC     35134  10-01-90   5:46p
    DISKREAD 1ST      3408  10-01-90   5:46p
    DISKVR46 COM     64907  10-01-90   5:46p
    LBL      BAT       549  10-01-90   5:46p
    LBLDLIB  EXE      5920  10-01-90   5:46p
    LBLDSTAT EXE      1152  10-01-90   5:46p
    LBLFDSET BAT      1415  10-01-90   5:46p
    LBLINS63 EXE     80028  10-01-90   5:46p
    LBLMKR63 DOC     29789  10-01-90   5:46p
    LBLRUN63 EXE    122896  10-01-90   5:46p
    LBLSETUP BAT      1007  10-01-90   5:46p
    GO       BAT        38   8-31-87   1:50p
    GO       TXT       694  10-10-90   6:20p
           14 file(s)     347037 bytes
                            6144 bytes free
