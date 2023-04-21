---
layout: page
title: "PC-SIG Diskette Library (Disk #1304)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1304/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1304"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PXL"

    Better than Turbo Pascal v4.0's source lister, PXL lets you
    generate a cross-reference listing that tells what lines have certain
    reserved and other specified words -- very useful for tracking down
    annoying problems.
    
    You can use this program for source files produced with Turbo Pascal
    v3.0, but you must use the reserved word file PXLT3.WDS instead of
    PXL.WDS.  PXL also lets you change the header appearing at the top of
    the listing.
    
    There is extensive documentation.  If you have special needs, such as a
    lister for another dialect of Pascal, the author spells out what you
    need to do to make PXL run properly for your Pascal.
    File Descriptions:
    
    PXL      DOC  PXL manual.
    PXL      EXE  PXL program.
    PXL      PAS  Main source file for PXL.
    PXL      PRN  Printer data used by PXL.
    PXL      WDS  PXL's list of words reserved in Turbo Pascal v4.0.
    PXLINIT  PAS  Source code for initialization unit (TP v4.0).
    PXLINST  EXE  Installation program.
    PXLINST  PAS  Source code for installation program.
    PXLLIST  PAS  Source code for listing unit (TP v4.0).
    PXLMENU  PAS  Source code for menu unit (TP v4.0).
    PXLT3    WDS  PXL's list of words reserved in Turbo Pascal v3.0.
    README        Text file.
    XXL      HDR  Sample header file; Change name to PXL.HDR to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1304.TXT

{% raw %}
```
Disk No: 1304
Program Title:  PXL version 1.42
PC-SIG version: 1

Better than Turbo Pascal 4.0's source lister TLIST.EXE, PXL lets you
generate a cross-reference listing that tells what lines have certain
reserved and other specified words--very useful for tracking down
annoying problems.

You can use this program for source files produced with Turbo Pascal
3.0, but you must use the reserved word file PXLT3.WDS instead of
PXL.WDS.  PXL also lets you change the header appearing at the top of
the listing.

There is extensive documentation.  If you have special needs, such as a
lister for another dialect of Pascal, the author spells out what you
need to do to make PXL run properly for your Pascal.

Usage:  Cross-Reference Lister for Turbo Pascal 4.0 Programmers.

Special Requirements:  Turbo Pascal 4.0.  Can use with Turbo Pascal 3.0
with precautions taken as indicated in description.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

PXL      DOC  PXL manual.
PXL      EXE  PXL program.
PXL      PAS  Main source file for PXL.
PXL      PRN  Printer data used by PXL.
PXL      WDS  PXL's list of words reserved in Turbo Pascal 4.0.
PXLINIT  PAS  Source code for initialization unit (TP 4.0).
PXLINST  EXE  Installation program.
PXLINST  PAS  Source code for installation program.
PXLLIST  PAS  Source code for listing unit (TP 4.0).
PXLMENU  PAS  Source code for menu unit (TP 4.0).
PXLT3    WDS  PXL's list of words reserved in Turbo Pascal 3.0.
README        Text file.
XXL      HDR  Sample header file; Change name to PXL.HDR to use.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PXL.DOC

{% raw %}
```




















                                      PXL
                          Pascal Cross-Reference Lister

                                  Version 1.42































                                     Programmer: R. N. Wisan, April, 1988
                                    37 Clinton Street, Oneonta, NY, 13820

                                                    Not Copyright: Enjoy.







                                      Contents                                      Contents




                1  Introduction  . . . . . . . . . . . . . . . . . 1

                2  The Files . . . . . . . . . . . . . . . . . . . 2

                3  Running PXL . . . . . . . . . . . . . . . . . . 3

                   3.1  The Interactive Mode . . . . . . . . . . . 3

                   3.2  The Command Line Mode  . . . . . . . . . . 4

                   3.3  The Batch Mode . . . . . . . . . . . . . . 5

                   3.4  The Cross-Reference  . . . . . . . . . . . 5

                   3.5  Include Files  . . . . . . . . . . . . . . 6

                   3.6  Page Format  . . . . . . . . . . . . . . . 6
                      3.6.1  Headers                               6
                      3.6.2  Pagination                            9

                   3.7  Stopping PXL . . . . . . . . . . . . . . . 9

                4  Adapting PXL  . . . . . . . . . . . . . . . . . 9

                   4.1  For Other Pascals  . . . . . . . . . . .  10

                   4.2  For Other Printers . . . . . . . . . . .  10

                   4.3  PXLINST: Editing Print Control Symbols .  11
                      4.3.1  The Symbols You Need                 11
                      4.3.2  Running PXLINST                      12
                      4.3.3  Wide-Carriage Printers               13

                   4.4  Eliminating the Data Files . . . . . . .  13

                   4.5  Screen Colors  . . . . . . . . . . . . .  14

                Appendix A:  Using PXL in a Network  . . . . . .  15

                Appendix B:  History . . . . . . . . . . . . . .  16


        PXL 1.42 Pascal X-Ref Lister                               Page 1




                                 1  Introduction                                 1  Introduction


            Once upon a time, Borland's Turbo Pascal came with an unad-
        vertised source lister called "TLIST."  Unfortunately, it had
        bugs.  This program was written to do some of the things TLIST
        was supposed to do and some things it didn't.  Here are the main
        features:

            - It lists a file with headers: by default it puts file name
              (with user's ID) and creation date on page 1, file name and
              page numbers thereafter.  Or, if you prefer, you can make
              your own header of up to five lines.

            - If desired, it marks the reserved words by underlining
              them.

            - If desired, it numbers the lines and counts begin-end
              pairs.

            - It will paginate automatically, but you can insert symbols
              in the file to control page breaks.

            - It handles lines of up to 255 characters.  It can use con-
              densed and elite print.

            - It will make a cross-reference of the identifiers in the
              source file.

            - It will include in the listing (and cross-ref) files called
              with the {$I filename} directive.

            - It can be run from a batch file without stopping for inter-
              action.  Should anything go wrong, it sets ERRORLEVEL 1.

            - It will feed out a blank page before listing, if requested.

            - It will run on DOS 2.00 or later.  If you need to run it on
              an earlier version of DOS, you'll have to use an earlier
              version of PXL.  (1.12 was the last DOS 1.10 version.)

        If you leave the reserved words unmarked, of course, PXL will
        list any sort of plain ASCII file.


        PXL 1.42 Pascal X-Ref Lister                               Page 2




                                   2  The Files                                   2  The Files




        PXL.DOC is the documentation you are now reading.

        PXL.EXE is the working compilation.  You run it from DOS.

        PXL.WDS contains the list of reserved words PXL uses if you ask
            it to mark reserved words in the listing.  It must be in the
            default directory or somewhere on the DOS path when you run
            PXL.[1]

        PXL.PRN contains the printer control codes which PXL uses when it
            numbers the lines or marks the reserved words.  As it comes,
            it contains the codes for an Epson FX-80, but it may be
            changed by means of PXLINST.  It must be in the default
            directory or somewhere on the DOS path when you run PXL.[1]

        PXLINST.EXE is an installation program to put the proper print
            control symbols in PXL.PRN.  You don't need it to run PXL.
            It's only required if you have to adapt PXL for your printer.

        PXL.PAS, PXLINIT.PAS, PXLMENU.PAS and PXLLIST.PAS contain the
            source code for PXL.EXE.  You might need it if you have to
            recompile to change colors or as in note [1].

        PXLINST.PAS contains the source code for PXLINST.EXE.

        PXL.ID and PXL.HDR are not on your disk.  You make them yourself.
            PXL.ID can hold a personal ID if you want one in your header:
            just type your name in the Turbo Pascal editor, and save it
            under "PXL.ID."  When PXL finds such a file, it takes up to
            24 characters from it for an ID.  PXL.HDR can hold your own
            default header to replace PXL's standard one.  See Section
            3.6.1, page 6.



        -----------


        1. Strictly, PXL can be run without its .WDS and .PRN files.
           Without them it can still number the lines and break up long
           ones, but it can't mark reserved words or count begin-end
           pairs, and it can print only plain pica.  If you ask for any-
           thing it can't do, it will stop and complain.

                      __           But, there is a way of tinkering with the source code in
           PXL.PAS to get it to run properly without the external data
           files.  See "Adapting PXL," esp. page 13 below.


        PXL 1.42 Pascal X-Ref Lister                               Page 3




                                  3  Running PXL                                  3  Running PXL




            To run PXL, the two files, PXL.WDS and PXL.PRN must be on the
        default disk or somewhere on your DOS path.  If you want an ID in
        the header, you must make a PXL.ID file and keep it on the path
        or the default disk, too.  There are two ways to run the program:


        3.1  The Interactive Mode        3.1  The Interactive Mode



            You can simply enter PXL from the DOS prompt.  It will ask
        what file you want to list.  (It adds the extension .PAS  unless
        you tell it otherwise.)  It will search along the path, and, if
        it finds the file, it will ask you to confirm the file name.
        Then it offers some choices about how you want it printed.  You
        can ask for three characters (upper and lower case both work):

        M        M (Mark) makes it underline the reserved words.

        W        W (Wide) makes it use "condensed print" (if your printer is up to
          it) to handle wide files without breaking up the lines. (In any
          mode, it will break up long lines as necessary and line up the
          continuation flush with the beginning of the original.)

        L        L (Linenumber) makes it number the lines (and use elite type if
          your printer has it, to keep the lines from folding.)  Also, if
          you use any of the above options, it will keep count of begin-
          end pairs and print the number of open Begin (or Repeat or
          Case) statements at each line.

        P        P (Plain)  If you want none of these things, enter a P or just
          put blanks instead of the letters.  Four blanks make it print
          plain.  (Or, just hit <ENTER>)

        X        X (X-Ref) makes it produce a cross-reference of the identifiers
          in your source code.

        F        F (Form-Feed) makes it feed out a blank page before listing.  To
          do this, however, the printer must form-feed on getting the FF
          (char 12) symbol.  Unless it is told (in PXL.PRN) that the
          printer can do this, PXL will neither offer nor accept this
          option.


        PXL 1.42 Pascal X-Ref Lister                               Page 4


        Used this way PXL, is gabby.  It checks your choices, explains
        your errors, and lets you make corrections.


        3.2  The Command Line Mode        3.2  The Command Line Mode



            All this is time-consuming.  To short-cut, enter the informa-
        tion at the DOS prompt.  If you enter

           PXL filename

        PXL will accept the filename, check to see if it exists, and skip
        its opening inquiries.  For better speed, enter

           PXL filename xxxx

        (where "xxxx" is any string of characters) it will pick the print
        style letters out of the string, show you what you've asked for
        and ask for confirmation.  If you want a plain vanilla printout
        (no line numbers, key words unmarked), put a "P" in the string.
        Order doesn't matter, you can use upper or lower case, and addi-
        tional stray characters are ignored.  Note:  "P" will override
        anything else (except "X").  Thus, if you enter

           PXL XYZ whelp

        It will supply the suffix, ".PAS", notice the "p" and ignore the
        other letters.  You'll get file XYZ.PAS, printed plain vanilla.

           PXL xyz.pas MeltWax

        would get you file XYZ.PAS, with the works: condensed print (W),
        key words underlined (M), line numbers and begin-end counts (L),
        and a cross-reference (X).

           PXL XYZ.DOC L

        would print file XYZ.DOC with the lines numbered.

            When you enter the data at the command line this way, PXL
        will look for your file.  If the file is found, you get one
        screen asking you to confirm the file name and the print mode
        choices.  If you say, "Yes," it goes into its act.  If you say,
        "No" (or if it can't find your file), it reverts to the inter-
        active mode, and you can correct your instructions.

            However you start it going, PXL keeps you informed about what
        it's doing.  (Sending lines to printer, Scanning without print-
        ing, Sending X-ref lines to printer, etc.)  It gives you a run-
        ning line-count --to show that something's happening-- and at the
        end of an X-ref printout, you get some statistics about your
        file.


        PXL 1.42 Pascal X-Ref Lister                               Page 5



        3.3  The Batch Mode        3.3  The Batch Mode



            If you want to run PXL from a batch file, put a line in your
        file just as you'd enter it in the Command Line Mode, but put the
                 BAT        letters, BAT (upper or lower case) in the instructions.  In that
        case, PXL will not stop for interaction no matter what.  If all
        is well, it will print out as instructed.  If there is any hitch,
        file to print can't be found, .PRN or .WDS file not on the path,
                               <Esc>        or if somebody presses <Esc> during operation, it will set the
        ERRORLEVEL at 1.  Your batch file can take account of that in
        deciding what to do next.  Here's a sample, which will take the
        file name from the command line, execute PXL, printing the file
        with key words marked and lines numbered, and print "ALL WELL" if
        it's printed the whole file or "ENDED BADLY" if anything went
        wrong:

           echo off
           pxl %1 ml bat
           if errorlevel 1 goto Abort
              echo                            ALL WELL
              goto end
           :Abort
              echo                          ENDED BADLY
           :end


        3.4  The Cross-Reference        3.4  The Cross-Reference



            The cross-reference cites all the identifiers in your program
        with the line numbers in which they occur.  They are printed with
        the upper/lower case combination of their first occurrence.  At
        the end of the identifier listing, you get a list of all the pro-
        cedures and functions declared in the listing.

        I should mention two limitations of the cross-reference:

          1.  As far as PXL can tell, an identifier is a given combina-
              tion of symbols.  If you declare a variable like I: integer
              in several different procedures, they'll be lumped together
              in the X-ref listing.  If you care about having an accurate
              list of the declared procedures, be careful not to use a
              procedure name as a local variable earlier in the program.

          2.  Standard Pascal allows only numbers to be used as labels.
              Turbo Pascal allows any legal identifier (which must start
              with a letter) as well.  PXL ignores numbers, so it can't
              pick up labels like 99.  If you want your labels listed,
              start them with a letter.


        PXL 1.42 Pascal X-Ref Lister                               Page 6



        3.5  Include Files        3.5  Include Files



            Files called  with the {$I filename} Include directive, will
        be included in the listing and cross-reference, provided:

          1.  The {$I filename} directive begins in the first column of
              the code (if the directive starts anywhere else, PXL will
              simply ignore it), and

          2.  PXL can find it.  If the filename specifies a path, say
              {$I B:PXL2.INC}, it will look for the file first in the
              place specified and then search along the path.  Whether it
              finds the file or not, it will print a message on the
              screen and in the printout showing what's happened.

        This give you two ways to control inclusion of files in your
        listing.

        Note: As it does with the main file, PXL will add the suffix
            "PAS" to the name of include files if none is given.  To in-
            struct it otherwise, put a period at the end of the filename.


        3.6  Page Format        3.6  Page Format



            Unless otherwise instructed, PXL will make a one-line header
        of its own devising and paginate automatically every 62 lines
        (including the header).  But, you can instruct it otherwise.


        3.6.1  Headers        3.6.1  Headers


            The standard default header occupies one line.  On the left
        it puts the file name and the user's ID (if it can find a PXL.ID
        file).  On the right of page 1 it puts the file date; subsequent
        pages get the page number instead.

            If you prefer a different default header, you can write your
        own.  Keep it in a file called PXL.HDR anywhere on the path, and
        PXL will use it for its default header.  You can still alter the
        header by putting instructions in your text.[2]  Here are the
        rules for header instructions, whether in the text or in PXL.HDR:
        -----------


        2. There's a heavily commented header file on the disk, under the
           name XXL.HDR. To see what it does, change its name to PXL.HDR
           and run PXL.


        PXL 1.42 Pascal X-Ref Lister                               Page 7


        A PXL header can have up to five lines.[3]  You can change it at
        any point in the file.  Each header line has three segments which
        must be separately specified.  Each segment specifier has five
        parts:

         1. { (opening brace)

         2. One of the following symbols:

                .HN    = no header at all
                .HnL   = left side of Header line #n
                .HnC   = center of Header line #n
                .HnR   = right side of Header line #n
                .HnN   = no Header line number n
                .HPLnn = print nn pages per line (not really a header in-
                         struction at all, but it can be used in PXL.HDR.
                         See under "Pagination" in p. 9, below.

            "n" of course, stands for a numeral.  The other symbols must
            be upper case exactly as shown.

         3. a space.  (That's ONE space.  Spaces after the first one
            become part of the text of the header segment.)

         4. the text of the header segment.  Within the text, you can use
            the following symbols:

                .Fn = file name
                .Fd = file date (in long form)
                .Ft = file time (12-hr am/pm)
                .Pd = present (or printout) date (mm/dd/yy)
                .Pt = present (or printout) time (24 hr)
                .Id = user ID (from PXL.ID)
                 #  = page number (no period)

            These symbols are case-sensitive.  They must be upper/lower
            case exactly as shown.

         5. } (closing brace)

        Some remarks:

          + Header instructions can appear anywhere in a line, but each
            one must begin and end on the same line.

          + To empty a segment (that's previously been filled), put the
            closing brace right after the symbol and space: {.H2R} means
            empty right segment for 2nd header line.  In general, to emp-
            ty header lines:
        -----------


        3. This limit is controlled by constant MaxHeader, at the top of
           PXLLIST.PAS.


        PXL 1.42 Pascal X-Ref Lister                               Page 8


                              ___                {.HN} empties all the header lines (i.e., no header).
                {.H2N} empties the second (#2) header line.
                {.H2L} empties left segment of the second header line.

          + PXL normally puts one blank line above and one blank line
            below the header.  To force extra blanks lines below the
            header, make a blank (not empty) header segment.  {.H5L   }
            would do it --note the extra spaces between L and }.  The
            first space is eaten, the others become the left segment of
            header line 5.

          + Normally, header instructions take effect on the next page
            after the instructions.  To specify the opening header, you
                        ___            have to put all the instructions for it at the top of your
            file.  You can use several consecutive lines to do it, but
            there must be no blank lines between or before them.  At the
            top of the file, you could (almost) specify the standard
            default header thus:

                {.H1L File: .Fn  [.Id]}
                {.H1R .Ft, .Fd}

            Then, there or anywhere in the first page's worth of text:

                {.H1R Page #}

                                          ___          + Note: in PXL 1.41, specifying any header segments at all
            anywhere in the text canceled the default header.  This has
            been changed.  Beginning with PXL 1.42, new header specs
            change only the segments specified.  Thus:

              - To cancel the default header for a particular file, you
                must use {.HN}.  Put that in the first line of the file
                to head off the default before it gets onto the page.

              - If you don't want a default header at all --not ever,
                create a PXL.HDR file that contains no header instruc-
                tions.  A zero-byte file will do.  So long as that's on
                the path, PXL will make no headers on its own.  You can
                still insert header specs in the body of your file.

          + You can differentiate between headers for the first page and
            for subsequent pages.  Within PXL.HDR (and at the top of the
            text), the first specification for a given segment defines
            what's to go on the first page.  A subsequent spec for that
            segment will be used for other pages.  Thereafter, specifica-
            tions simply supersede each other.

          + If you need several default headers for different sorts of
            file, you could manage it by controlling the DOS PATH.


        PXL 1.42 Pascal X-Ref Lister                               Page 9



        3.6.2  Pagination        3.6.2  Pagination


            To control page breaks, put the following symbols in the
        file:

        {.PA}        {.PA} produces an absolute page advance.  The line on which the
            symbol appears will be the first line of the new page.

        {.CPnn}        {.CPnn} (where nn is a number) makes a conditional page break.
            If there isn't room for nn lines, it will start a new page at
            that point.  Look at the PXL source code.  It's peppered with
            these to keep the procedures whole.

            Caution: This command specifies physical lines on the page.
            If you write lines long enough to fold, PXL will not make
            allowance for it and may run out of space on the page and
            split your block across the page break.  If you write such
            lines, be sure to allow for it in specifying the nn.

        {.HPLnn} (where nn is a number) specifies the number of lines PXL
            is to print on the page (including the header).  The default
            is 62 lines on a 66 line page.  This command will override
            the standard 4-line bottom margin.[4]

            Here, too, a caution: This specifies the number of lines to
            print, not the size of the paper.  Make sure you don't over-
            run the paper by putting too large a number in HPL.  Specify
            actual paper size (in lines) in "Page Control", using PXLINST
            (see p. 11).

            Even though it's not a header specification, an HPL instruc-
            tion can be placed in PXL.HDR.


        3.7  Stopping PXL        3.7  Stopping PXL



            You can stop PXL at any point by pressing the <Esc> key.  You
        may have to wait while it finishes the line it's working on and
        folds up the files, but don't panic.  It will stop.






        -----------


        4. The default is controlled by variable BottomMargin, set in
           procedure SetUp in PXL.PAS


        PXL 1.42 Pascal X-Ref Lister                              Page 10


                                 4  Adapting PXL                                 4  Adapting PXL




            As it comes, PXL is designed to print source files from Turbo
        Pascal 4.0 on an Epson FX-80 from an IBM PC.  If that's what you
        want to do, you can use PXL.EXE as it is.  It can be adapted,
        however.

            - For other printers, it can be adapted  by changing the
              print control symbols in PXL.PRN.  See the instructions for
              other printers, below, for doing this.

            - Other Pascals (including earlier versions of Turbo Pascal
              can also be accommodated by changing the reserved word list
              in PXL.WDS (see below).


        4.1  For Other Pascals        4.1  For Other Pascals



            The only Pascal I'm familiar with is Borland's Turbo Pascal.
        If your source code is in plain ASCII text files, the only diffi-
        culty about other Pascals ought to be the list of reserved words.
        (PXL would print the file, but it would mark only words reserved
        in Turbo Pascal 4).

            The list of reserved words is in the file PXL.WDS, so all you
        need to do is rewrite the PXL.WDS file to contain your Pascal's
        reserved words.  Any text editor (like the Turbo Pascal editor)
        which makes plain ASCII files will do.  Put one word on each line
        (without any extra blanks).  Order doesn't matter.  Upper/lower
        case doesn't matter.  PXL can handle up to 100 reserved words
        (there are 43 in Turbo Pascal 1.00, 44 in 2.00 and 3.00 and 48 in
        4.00) and the words may be up to 10 characters long.  If you need
        more than that, you'll have to rewrite the source code.  The only
        things you'd have to change are in procedure SetUp at the begin-
        ning of the implementation of PXL.PAS.  They are identified with
        comments.


        4.2  For Other Printers        4.2  For Other Printers



            The Epson MX and IBM printers, resemble the FX-80, but with
        the standard PXL.PRN data, the line numbering mode may come out
        odd.  Unless you use the W (condensed print) option, line number-
        ing expects an elite font, which these printers lack. If you
        write lines long enough to fold, you should use PXLINST to change
        the print control symbols in PXL.PRN.


        PXL 1.42 Pascal X-Ref Lister                              Page 11


            For other printers, consult your printer manual to see what
        you need.  Again, use PXLINST to install the proper data.


        4.3  PXLINST: Editing Print Control Symbols        4.3  PXLINST: Editing Print Control Symbols



            To change the print control symbols, you must first work out
        what symbols you'll need.  Then, with PXL.PRN on the default
        drive, run PXLINST.


        4.3.1  The Symbols You Need        4.3.1  The Symbols You Need



            PXL assumes that your printer can be made to underline and to
        compress its type to 12-character-per-inch "elite" and 17-charac-
        ter-per-inch "condensed" by sending it control codes of 1 to 3
        characters.  These characters must be in PXL.PRN, on the default
        drive when you run PXL.  Seven print control strings are re-
        quired, start and stop for three type styles plus page control
        instructions:

        ____________        Underlining.  If you prefer to mark your reserved words in some
            other way (boldface? italics?), put here whatever your
            printer needs for it.

        _____        Elite (12 characters per inch) type.  Normally, when PXL uses the
            symbols you put here, it assumes it will get 96 characters
            per line.  Normally, it uses this font only when numbering
            the lines.

            If your printer hasn't got an "elite" font (e.g., the IBM
            printer), you have a choice.  If you put the symbols for
            "condensed" in both places, it will always use "condensed"
            for line numbering (it will adjust the line lengths prop-
            erly).  What I recommend is to put nothing in PXL.PRN for
            "elite."  Then, PXL's "L" command will number the lines in
            plain pica, and "WL" (wide, line-numbering) will number them
            using "condensed."

        _________        Condensed (17 characters per inch) typeface.  This is the font
            invoked by the "W" (for "wide") symbol.  If your printer
            hasn't got a "Condensed" font, put nothing here.  In that
            case, if you have something for "Elite," PXL will use elite
            for both elite and condensed, lines cut to fit 96 characters
            per line.  If you put nothing for "Elite" and nothing for
            "Condensed," everything will come out in pica at 80 charac-
            ters per line.

        ____________        Page Control.  Here, it needs to be told whether your printer
            will feed out a new page when sent a Char #12 ("FF") and, if


        PXL 1.42 Pascal X-Ref Lister                              Page 12


            not, how many lines it puts on a page.  If you give it a 12
            for "Page control," it will use Char #12 to form-feed.  If
            you give it any other number, it will take that for the num-
            ber of lines the printer gets to a page.

            Look up the print control symbols in your printer manual.
        Work out the ASCII numbers for them.  PXLINST requires the num-
        bers; it can't accept characters.  Thus, to enter "Escape G", you
        would use the numbers, 27, 71.  27 is the ASCII number for "Es-
        cape", and 71 is the number for "G". When you know what numbers
        you're going to need, put PXL.PRN on the default drive, and run
        PXLINST.


        4.3.2  Running PXLINST        4.3.2  Running PXLINST



            Since it's an .EXE file, PXLINST, like PXL runs straight from
        DOS.  When you run it, PXLINST gives you a screen showing the
        seven different instructions.  If it finds PXL.PRN somewhere on
        your DOS path, it will show you what is currently in the file for
        each instruction and the "Present Data" you've set for them.  It
        gives pretty good operating instructions.

            - Move the cursor to the line you want to change.

                                                    NUMBERS            - Enter the proper sequence of numbers (NUMBERS, not charac-
              ters), separating them with commas.  Press <Enter>, and it
              will move on to the next instructions.  You can use up to
              three ASCII numbers per instruction.

            - If you want nothing for a given instruction, press <Enter>
              alone.[5]

            - Make sure the "Present Data" display indicates what you
              wanted.

            - When the "Present Data" is what you want, press <Esc> to
              end the program.  It will then ask whether you want the
              file rewritten with your new data.  Up to this point,
              PXLINST hasn't actually changed the file.  If you've made a
              mess, you can say "No."

            If you happen to run PXLINST without PXL.PRN somewhere on the
        path, no matter.  It won't have any file data to show you, and it
        will start you out with "Present Data" of "[nothing]," but you
        -----------


        5. If your printer has none of these print options, enter nothing
           for everything but "Page Control."  PXL will then print plain
           vanilla, but it will break the lines appropriately, number
           them, give you begin/end counts, and make cross-references.


        PXL 1.42 Pascal X-Ref Lister                              Page 13


        can enter the numbers you want, and PXLINST will create a new
        PXL.PRN file on the default disk.


        4.3.3  Wide-Carriage Printers        4.3.3  Wide-Carriage Printers



            PXL is designed to run on a narrow-carriage printer, using
        8.5 inch wide paper.  If you have a wide printer which puts 133
        pica characters on a line, you can make use of the full width by
        giving PXL deceitful printer data.  The trick turns on the fact
        that "condensed" print on a narrow printer is designed to print
        133 columns per line to handle printouts meant for a wide
        printer.  So, when PXL thinks it's using "condensed" print, it
        makes wide lines.

            Run PXLINST, and, where it calls for "condensed" instruction
        symbols, put the instructions for plain pica.  Give "pica start"
        instructions for both "condensed start" and "condensed stop".
        The W (wide) option, will now print wide lines in pica.

            The L (line numbering) option (without a W) will still use
        elite and break lines at 84 columns of program text.  If entering
        LW bores you and you want the L option in full width, give pica
        instructions for both "elite" and "condensed."  PXL will now
        think it has "condensed" for both of these and adjust its width
        accordingly.


        4.4  Eliminating the Data Files        4.4  Eliminating the Data Files



            PXL can be made to run without the .PRN and .WDS data files
        by a simple alteration in PXL.PAS.  The program already contains
        the necessary code for loading the print instructions and re-
        served word list internally.

            All that's required is to set the value of DataFiles to False
        instead of True.  (You do this in procedure SetUp in PXL.PAS.
        The comments there will show you what's what.)  Of course, that
        will commit you to the TP4/Epson data that's in the code.  If you
                       ____        want to change that, you must go deeper

            - Procedure LoadReserv in PXLMENU.PAS contains a list of key
              words in Turbo Pascal 4.00

            - Procedure GetPrinterData in PXLINIT.PAS has the print con-
              trol symbols.  Be careful to preserve the data form.  (Es-
              sentially, it's the form of a Turbo Pascal string[3].)
              Each instruction takes four bytes.  The first (subscript 0)
              contains the number of following bytes which are signif-


        PXL 1.42 Pascal X-Ref Lister                              Page 14


              icant in the instruction.  Set unused bytes to $FF.  This
              is exactly how the data would come in from PXL.PRN.

              I suggest you begin by using PXL with the external files,
              because it's easier to experiment on printer data with
              PXLINST than by changing and re-compiling PXL.  When you
              know what numbers you need, you can make the necessary
              changes to GetPrinterData in PXLINIT.PAS, set DataFiles to
              false in PXL.PAS, and re-compile.

        If you set out to make this adaptation, it would be wise to make
        a copy of PXL first and experiment on the copy.


        4.5  Screen Colors        4.5  Screen Colors


            On a monochrome text monitor, PXL always runs in black and
        white.  On other monitors it normally uses color, and three vari-
        ables: NormalColor, FrameColor, and Background control the
        colors.  FrameColor is used only for the ornamental rectangle.
        Everything else is in NormalColor.  To set the colors to your
        liking, change the values in procedure SetUp in PXL.PAS.



            I hope you enjoy PXL and find it useful.  If you find bugs in
        it or make any improvements, do, please, send me word.

                                     Programmer: R. N. Wisan, April, 1988
                                    37 Clinton Street, Oneonta, NY, 13820


        PXL 1.42 Pascal X-Ref Lister                              Page 15




                       Appendix A:  Using PXL in a Network                       Appendix A:  Using PXL in a Network


            The batch mode (BAT) and form-feed (F) options were added in
        order to make  PXL usable conveniently on a printer-sharing net-
        work.  To illustrate this use of PXL, this appendix describes the
        use made of it with elementary classes in the PC Lab at Hartwick
        College in Oneonta, NY.  The network was the University of
        Waterloo's JANET.

            In this system, all utilities were kept on a virtual disk in
        "Drive A."  Students kept their own programs on a real disk drive
        labelled D: by the network, and they kept a PXL.ID user ID file
        on their disks.  They were taught to send printer output from
        their programs to a file, D:OUT.PUT.  To allow these beginning
        students to get their printouts with a minimum of confusion and a
        minimum of instruction, PXL was run from a batch file.  To get
        printouts, they merely entered:

            A:NEWPRINT programfilename

        Here is an annotated copy of NEWPRINT.BAT:

        ECHO OFF
        A:PXL D:%1 MLXF BAT  REM List program marked, numbered, xref, and FF
                             REM (to avoid the network's printout header)
        IF ERRORLEVEL 1 GOTO ABORT   REM Check that program listing went well
          A:PXL D:OUT.PUT BAT        REM List output file plain w/o FF
          IF ERRORLEVEL 1 GOTO ABORT REM Check that this went well
             A:PRINTIT          REM All went well, so send to printer,
                                                REM and report success:
             ECHO D:%1 and OUT.PUT sent to printer
        GOTO END
        :ABORT                       REM If all did not go well,
           A:PURGE *                 REM Abort printing,
                                     REM and report failure:
           ECHO Error in listing.  Printout has been aborted.
        :END

        Note: PRINTIT is the network's print command.  PURGE * cancels
              everything sent to the print spool from this work station.


        PXL 1.42 Pascal X-Ref Lister                              Page 16




                               Appendix B:  History                               Appendix B:  History




            In olden times, Turbo Pascal version 1.0 came with a source
        lister called TLIST.  Unfortunately, it was buggy.  Borland ex-
        plained that TLIST was an unadvertised freebie and wouldn't work
        on all printers.[6]  Mainly as an exercise, I wrote ELIST to do
        on my Epson (FX-80) some of the things TLIST was supposed to do.
        Some versions of it were circulated in July, 1984.

            In August of 1984, ELIST was revised to allow use of other
        printers and other Pascals by putting printer control symbols and
        reserved words in separate data files.  An awkward installation
        program was supplied to edit the printer data.  In honor of that,
        I renamed it "NELIST" (pronounce "N" and "E" separately).  Early
        versions worked only in the interactive mode.  Later versions
        added a command line mode to skip (most of) the interactive gab.


        NELIST Version 2.0, April, 1985, was improved:

          1.  Handles wide files (up to 255 characters):

                  - Breaks long lines neatly to prevent folding.

                  - Condensed print ("W") option added for wide files.

          2.  File header contains file's creation date instead of
              printout date.

          3.  Include files {$I filename} incorporated in the listing.

          4.  Interactive messages streamlined a little, especially for
              the command line mode.


        PXL Version 1.00, June, 1985:

            In the spring of 1985, when our Computer Science program (at
        Hartwick College) was overhauled, Turbo Pascal 3 was adopted as
        the beginning language, to be run on an IBM PC equipped network.
        For that installation, NELIST 2 seemed a useful accessory, but a
        -----------


                        _________        6. According to TUG Lines Vol. I, No. 3, p. 1, Borland will prob-
           ably never fix the bugs in TLIST.  Apparently, it was written
           as an in-house utility, and providing it to the customers "was
           entirely an afterthought.  One day the source code for TLIST
           was accidentally deleted..."


        PXL 1.42 Pascal X-Ref Lister                              Page 17


        cross-reference function was desired.  PXL is the result.  It is
        built on the old NELIST foundation, with the following changes:

          1.  The cross-reference (X) feature is, of course, the most
              important addition.

          2.  The options have been simplified.  The user now gets no
              choice about the manner of marking reserved words.  If you
              want to boldface instead of underlining them, you must
              change PXL.PRN.

          3.  Changing PXL.PRN is now much easier.  Installation program
              (now called PXLINST) rebuilt with full-screen data entry.

          4.  The ability to run without external .PRN and .WDS files has
              been built into the program.  If constant DataFiles is set
              to False, PXL will use built-in data.

          5.  While the program is running, a line count is displayed.
              The point of this is to assure user that the computer has
              not died.  At the end of an X-ref listing, various statis-
              tics about the program are given.


        PXL Version 1.10, July, 1985:

            Better documentation in PXL2.INC, smoother interactive mode,
        and:

          1.  PXL now understands hex numbers.

          2.  Programs containing exactly one procedure or function will
              now cross-ref properly.

          3.  For the sake of consistency, the former PXLID.DAT (the per-
              sonal ID file) has been renamed, PXL.ID.

          4.  You can now STOP the program at any point by pressing the
              <Esc> key.  (Control-Break doesn't work.)

          5.  PXL will now handle file names which have no extension.


        PXL Version 1.11, October, 1985

          1.  The main addition is the ability to run from batch files.
              In the batch mode it avoids interactive pauses and sets
              ERRORLEVEL 1 if anything goes wrong.

          2.  File name entered without a drive letter will be shown with
              the default drive letter.


        PXL 1.42 Pascal X-Ref Lister                              Page 18


          3.  Better control over include files.  Like TLIST, PXL will
              incorporate include files only if the {$I filename} command
              begins in the first column.

          4.  Manual includes better treatment of the problems of adap-
              ting PXL to other machines and operating systems.


        PXL Version 1.12, February, 1986

          1.  F (Form-Feed) option added to allow operation under a
              network which puts its own header on printouts.  The F
              option clears the network's header off the page.

          2.  PXL 1.11 could not safely be used in the batch mode under
              DOS 1.10 because any hitch would hang the machine.  Proce-
              dure SetErrorLevel now checks for DOS version, so batch
              mode is now safe under any DOS version.


        PXL Version 1.20, June, 1986

            PXL now searches along the whole DOS path both for the file
        it's to process and for its own auxiliary files.  This requires
        the newer DOS 2 file handling procedures, and the problem of DOS
        compatibility is evaded by abandoning DOS 1.10 entirely.


        PXL Version 1.21, September, 1986

            PXL is now savvy about screen colors.  Constants added to set
        colors to taste.  Further, PXL is polite: on exit, it returns the
        screen to the color it found there.


        PXL Version 1.22, November 15, 1986

            Small bug about Xref printout corrected.  Background added to
        screen color constants.


        PXL Version 1.23, November 22, 1986

            Bug corrected: PXL no longer hangs the machine on (a) no
        path, (b) a path which contains no semi-colon, or (c) a blank
        command-line entry.


        PXL Version 1.4X January, 1988

            The X means "experimental."  Rewritten in and for Turbo
        Pascal 4.00.  Provision made for Turbo 4's 8 layers of include
        files.  Asterisks at right of page indicate depth of inclusion.


        PXL 1.42 Pascal X-Ref Lister                              Page 19


            Instead of constants to switch colors & such, you must jigger
        procedure SetUp in PXL.PAS.


        PXL Version 1.41 February, 1988

            Some cleansy-upsy in source code.  The menu is still a hor-
        rible hack, but less horrible.  Generally, a less hasty response
        to TP4 than 1.4X was.

            New feature: User can override the default header and specify
        a header of up to five lines.


        PXL Version 1.42 April, 1988

            Improvement in header specification.  Version 1.41's in-text
        specification methods are still available, but now you can write
                _______        you own default header to replace PXL's by keeping what you want
        in PXL.HDR, anywhere on the path.

            One difference: in 1.41, any header specification in the text
        would cancel the entire default header.  Now, header instructions
        in the text replace only the segments specified.  To wipe out the
        default header, you must do so explicitly.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1304

     Volume in drive A has no label
     Directory of A:\

    FILE1304 TXT      1736   2-23-89   1:31p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   2-21-89  11:09a
    MANUAL   BAT       147  12-15-88  12:39p
    PXL      DOC     46254   5-05-88   1:52p
    PXL      EXE     48224   5-04-88  11:02p
    PXL      PAS      2964   5-04-88  11:02p
    PXL      PRN        28   6-09-85   9:08p
    PXL      WDS       326   1-08-88  10:41p
    PXLINIT  PAS     39406   5-04-88  10:49p
    PXLINST  EXE     15856   5-03-88  10:33a
    PXLINST  PAS     21276   5-03-88  10:33a
    PXLLIST  PAS     49200   5-04-88  10:36p
    PXLMENU  PAS     18755   5-04-88  10:57p
    PXLT3    WDS       285   7-17-84  10:50p
    README            1201   5-05-88   4:47p
    XXL      HDR      2383   5-06-88   8:05p
           17 file(s)     249081 bytes
                           62464 bytes free
