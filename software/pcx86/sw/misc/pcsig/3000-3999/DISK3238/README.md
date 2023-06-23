---
layout: page
title: "PC-SIG Diskette Library (Disk #3238)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3238/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3238"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ARJS-REG.TXT

{% raw %}
```

          ARJShell REGISTRATION (c) 1992 BY A KELLETT -- Please print


    NAME:   ______________________________     DISK SIZE: _____ 5.25"/360K
    ( Be sure your name is correct ! )         choose one
    ADDRESS:______________________________                _____ 3.5"/720K

            ______________________________     VERSION YOU HAVE: _______

    CITY:   ______________________________     WHERE    __________________
                                               YOU GOT
    STATE:  ____  ZIP CODE: ______ - _____     IT FROM: __________________

    COUNTRY (IF NOT IN U.S.): ________________          __________________


    REGISTRATION WITH SOURCE CODE:    ___  $15.00  (U.S.)

    REGISTRATION WITHOUT SOURCE CODE: ___  $ 8.00  (U.S.)

    SHIPPING/HANDLING FOR
       FOREIGN ORDERS ONLY            ___  $ 5.00  (U.S.)
    (CANADA NOT CONSIDERED FOREIGN)

                                   $_____ <--**TOTAL AMOUNT DUE HERE**


    ALL ORDERS SHOULD BE RECEIVED IN FOUR TO SIX WEEKS (OF COURSE WE TRY
    TO DO BETTER THAN THAT). ALL PAYMENTS SHOULD BE VIA PERSONAL CHECK OR
    MONEY ORDER PAYABLE IN U.S. DOLLARS.  THANKS FOR YOUR HELP!

    We do not accept credit card or phone orders at this time.  Thanks for
    registering!  If you have specific comments/gripes/suggestions we'd
    appreciate you putting them below, on the back of this sheet, or on
    another sheet if necessary/needed.

    REMARKS: _____________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________
                    Thanks to you, shareware works.

    Please mail this along     Andy Kellett
    with your payment to:      Attn: Shareware
                               Route One Box 430B
                               Summerville, GA  30747-9801
                                            U.S.A.

```
{% endraw %}

## ARJSHELL.DOC

{% raw %}
```


            ARJSHELL v1.50 is Copyright (c)1992 by A Kellett

        ARJ is Copyright (c) 1990-1992 by Robert K. Jung.  This program,
        ARJShell, is in no way associated with Robert K. Jung, it is
        merely my attempt to make his excellent compression product even
        easier to use.  Thanks for trying ARJShell, I hope you find it
        useful.

        To print out this manual, at the DOS prompt type:
           TYPE ARJSHELL.DOC > PRN


      ***************************** DISCLAIMER ******************************
      ARJSHELL IS LICENSED  "AS-IS".  A. KELLETT  MAKES NO WARRANTIES, EITHER
      EXPRESSED  OR  IMPLIED, WITH  RESPECT  TO THIS  SOFTWARE, ITS  QUALITY,
      PERFORMANCE,  MERCHANTABILITY,  OR FITNESS FOR  ANY PARTICULAR PURPOSE.
      IN PARTICULAR, IT IS NOT GUARANTEED TO PREVENT OR DETECT DAMAGE TO YOUR
      DATA OR  PROGRAMS.  IN  NO  EVENT  SHALL A. KELLETT  BE  LIABLE FOR ANY
      CLAIMS FOR LOST PROFITS OR  ANY  DAMAGE, INCLUDING, BUT NOT LIMITED TO,
      SPECIAL,  INCIDENTAL,  CONSEQUENTIAL  OR OTHER  DAMAGE.  SOME STATES DO
      NOT ALLOW THE  EXCLUSION OR  LIMITATION OF  INCIDENTAL OR CONSEQUENTIAL
      DAMAGES, SO THE ABOVE  LIMITATION OR  EXCLUSION  MAY  NOT APPLY TO YOU.
      IN  NO CASE SHALL A. KELLETTs'  LIABILITY  EXCEED THE LICENSE FEES PAID
      FOR THE RIGHT TO USE THE  LICENSED SOFTWARE.  THE LICENSE AGREEMENT AND
      WARRANTY SHALL BE  CONSTRUED, INTERPRETED  AND  GOVERNED BY THE LAWS OF
      THE STATE OF GEORGIA.
      ***************************** DISCLAIMER ******************************


                           ARJShell FEATURES:

        *   Easy-to-use interface: except for filenames, the Return/Enter
            key and the cursor keys will get you anywhere.

        *   No switches to memorize: almost anything ARJ can do for you,
            ARJShell will handle.

        *   Superior compression: ARJ v2.30 will compress smaller than
            PKZIP v1.1 on most types of files.

        *   ARJShell is small: less than 25k of valuable disk space,
            perfect for floppy-only or laptop users.

        *   Fast operation: ARJ is fast and so is ARJShell, even runs
            quickly on older 4.77MHz PCs.

        *   Security: compress your sensitive files into a space saving
            ARJ archive and garble them with your own password.

        *   Convenience: archive files into a tightly compressed
            self-extracting EXE to freely distribute via modem or disks.

        *   Save time: move your files to and from archived format
            without typing any DOS commands.

        *   Save space: compressed files leave you more valuable disk
            real estate (a precious commodity).

        *   Many options: compress to the max or go for the speed,
            you can find a balance suited to your needs.

        *   Beats paper training a litter of puppies!  Ooops, how did
            that get in here??

        *   Low cost/high value: Registration is very affordable and
            you can try out ALL the features before you buy!


                           WHY USE ARJShell?
        I have been a long and die-hard fan of PKZIP, but the much
        better compression ratios of ARJ finally won me over.  I now
        have over 500k of available hard drive room at home since moving
        4MB of ZIP files over to ARJ format.  ARJ also has more switches
        than anybody would usually want.  The complexity of all these
        switches was one thing that prompted me to start working on the
        early versions of ARJSHELL (yes, necessity IS the mother of
        invention).  All YOU have to remember is the path/filenames of
        the files you want to work with.  You can even easily try
        different compression methods to see what advantages or
        disadvantages they have using your own files!  You can compress
        to self-extracting EXE's, garble with a password, move files to
        and from archives, and much more!  If you use ARJ or simply want
        more valuable disk space available, try the ARJ and ARJShell
        team today!!  [End Of Commercial]


                             REGISTRATION:
        This program is distributed through the SHAREWARE method.  If
        you like it and use it beyond a 30-day trial period you should
        register.  When registering, please print and fill out the
        ARJS-REG.TXT file.  If you fill it in by hand, writing neatly
        will greatly improve the accuracy of my built-in optical
        character reading system.  For registration methods #1 or #2,
        let me know what disk size you require.  The registered version
        of ARJShell does not have the shareware exit screen, and you will
        get the latest version when you register.  Your financial support
        and suggestions are valuable to the future of ARJShell.  There
        are three methods of registering:

           1) Send $15 and get latest version (no exit screen) and
              Borland C++ v3.1 source code (it's in C, not C++).
              I'll also include a copy of TCWindow by Don Fordham
              (if you like it, you should register with him).
              Please note: source code is for personal use and
              study.  It is NOT for building and distributing
              derivitive works (ie ARJShell work-a-likes).  If
              you need more details, please write and include
              a self-addressed-stamped-envelope for a reply.

           2) Send $8 and get latest version (no exit screen)

           3) Send a nice postcard with suggestions or just to say
              thanks.  If you want a reply with method #3, please send
              a self-addressed envelope (try putting the envelope and
              the postcard in a bigger envelope to send me).

           The registered version will include your name embedded
           within ARJShell, so PLEASE print your name plainly on
           the registration form.


           My address is:  Andy Kellett
                           Attn: Shareware
                           Route One Box 430B
                           Summerville, GA  30747-9801
                                        U.S.A.
           (Please PRINT any handwritten correspondence)


        WHY REGISTER?  Registrations are a vote that you like ARJShell,
        have found it useful, and believe that shareware is a step in
        the right direction (try-before-you-buy should benefit the user
        AND the author by reducing costs at both ends).  It allows the
        author to continue development  (many hours went into ARJShell
        already), listen to user suggestions, and pay for the disks/
        mailers/postage needed to get the big shareware catalogs to
        consider distributing it.  Registering with method #1 or #2 will
        get you the latest version without the shareware screen (and the
        pause) when you exit.  If you like it somewhat, or just can't
        afford to register, try method #3 listed above as a vote of
        confidence to the author.


                    BUG REPORTS/SUGGESTIONS/CONTACT
        Use it, test it, then let me know what you think.  As an
        alternative to regular mail, you can contact me on the Final
        Burn BBS in Rome GA (706 232 5308) if it's nearby.  I usually
        read my mail twice weekly (see note at end about the Sysop).
        If you do have gripes, please be specific!  I can't make
        improvements based on vague gripes.  Specific gripes are some-
        thing I can work with, having done so for years in the
        mainframe/mini-computer world <slight grin here>.


                              USAGE NOTES
        CAUTION: I have never lost any data due to ARJ or ARJShell but
        it is always a good practice to make backup copies of anything
        stored on magnetic media.  Lightning does strike somewhere, and
        sunspots *do* ebb and flow.  It helps if you  are already
        familiar with ARJ first, especially the move-to and move-from
        options (the delete stuff hopefully will be obvious to anyone
        who is a compression veteran).

        Please be sure ARJ.EXE is in your path somewhere so ARJShell can
        find it.  This program uses approximately 90k of RAM while
        running.  If this causes too many users problems (and they
        register), I'll try spending some serious time reducing this
        amount.  However, in my testing with 560-610k of free RAM it
        hasn't been a problem even with multi-megabyte archive files.
        If you have 512k (total) of RAM or less ARJ may not have enough
        memory to work with, especially if you are using compression
        method JM or JM1.  For more information on memory usage, please
        see the ARJ documentation file (ARJ.DOC).

        This version of ARJShell was tested exclusively with ARJ 2.30 --
        the latest version.  If you have an earlier version of ARJ,
        downloading the newest one from a local BBS should be the first
        step towards solving any problems.  There were some reported
        bugs using the Garble function with ARJ v2.21a, so upgrading is
        the best option.  I have also tested using ARJ v2.39a (a BETA
        test version).  It worked fine but I will retest all functions
        when the final version of ARJ v2.40 becomes available.  DOS
        versions 3.1 and above should not cause problems except for
        lack of memory for ARJ itself (again, see ARJ.DOC for more
        details).

        ARJShell will live nicely on a floppy disk along with ARJ
        itself.  If you use PKLite on ARJ.EXE (seems to work for me),
        you will have approximately 260k of free space on a 360k floppy!
        For laptop users this will allow easily keeping storage space to
        a minimum (always a premium when travelling).  Desktop users
        can keep infrequently used programs or data files compressed
        until they need them.  I like to store infrequently used
        programs and data in archived format on floppies (1.44MB 3.5")
        to be unarchived only if and when they are needed again.  If
        a shareware program looks even remotely useful, I keep it
        around just in case one of my friends or I need it someday.
        (This has saved my hide more than once when an obscure program
        had to be found).

        Although there isn't a specific menu selection to do so, you
        *can* extract only the files you need from an archive.

           All files in archive        Selected files in archive

          filename -> MYTEST.ARJ        filename ->MYTEST.ARJ
          path     -> D:\               path     ->D:\*.DBF

        If this is confusing to many users, I can change the menu
        to have several different extracts (all, some, q/password...).


        SelF-eXtracting (sfx) EXE files should not be created using the
        M4 compression method.  Accordingly, ARJShell checks for M4 and
        will substitute M3 when creating an sfx EXE file for you.  If
        you DO NOT specify a file specification, ARJShell will default
        to ALL files in the current subdirectory, something you probably
        will not want.  Test all options to be sure what does happen is
        what you expected to happen.  ARJShell lets you create a sfx EXE
        from either an already created archive file or from a file spec
        (non-archived files):

                 From an ARJ                From a file spec

           filename ->TEST.EXE         filename ->TEST.EXE
           file spec->MYARCHIV.ARJ     file spec->C:\LOTUS\*.WK*

        If you are the Sysop of a bulletin board system and need to
        keep track of other BBSs which you receive files from, the
        "Capture comment to file" option can come in handy.  If
        there is a comment for the entire ARJ file, this lets you
        output the comment into a text file you specify.  You can
        browse through these later, or edit the text file and use
        it to comment other archive files.  If you find ARJShell
        handy, whether or not you register, upload it to *your*
        favorite BBS.  You get some upload points and gives other
        users a chance to try a program you find handy.

        If you are using a monochrome/amber/composite monitor and
        the default colors look really cruddy, use the /m (or /M)
        command line parameter for monochrome mode:
           ARJSHELL /M
        This should make everything more readable.  This was tested
        on a very burned-out monochrome VGA screen, and an old CGA
        screen which was jumpy and barely readable.  Even if you
        forget to set it for monochrome mode, the default colors
        are fairly readable also -- try both modes and see which
        one you prefer.


                         OLD ARJSHELL VERSIONS
        The early versions of ARJShell were written in PowerBasic to
        be included with my PBTool shareware package for PowerBasic
        programmers.  The positive response I received after uploading
        it to several local BBS's showed the need for newer versions
        with more options and a revamped user-interface.  Since there
        are lots of windowing packages for C/C++ (I program in C and
        Assembler too), I decided to rewrite it using Borland C++ v3.1
        and the TCWindow shareware package by Don Fordham.  The result
        was a much easier interface for the user, improved response in
        some areas, and removal of some design restraints.  This means
        a better overall program which consumes less memory and disk
        space too.


                     NEW FEATURES / RELEASE HISTORY

        09/1992 version 1.50

           *  Completely new user interface

           *  Completely rewritten in C

           *  Move files to and from an archive

           *  Smaller SelF-eXtracting EXE's (also know as SFX)

           *  Capture comments to text file

           *  Prompt before deleting files from an archive

           *  Pause during listing of archive contents

           *  View contents of a file within an archive


        08/1992 version 1.02

           * fixed a few minor glitches

           * added color per user suggestion [please note that when ARJ
             takes over, it'll use whatever colors DOS is using
             regardless of ARJShell's wishes...]

           * added more compression options per user suggestion

           * compress files and garble with a password (11 characters)

           * extract files from a garbled archive


        07/1992 version 1.00

           * initial release


                            FUTURE RELEASES:
        I have a few ideas in mind for future versions of ARJShell.
        I expect most changes to come from the users.  We'll see
        how many registrations and requests come in...I'd like for
        the future of ARJShell to be user-driven.  Lemme know.


                     CREDITS (heroes for them what cares):
        Special thanks to God, my wonderful wife and three special
        kids, my family, and close friends.  Thanks to Mike P. and
        Howard H. (two fine coders and lots-o-fun) for great advice and
        programming info over the years.  To all those who offered
        advice and kindly criticism, ARJShell is much improved beast
        due to your time and trouble.  Borland gets a tip-of-the-cap
        for producing darned good language tools and letting users
        upgrade affordably.  This is the first full-fledged application
        I have written in C.  Although there were lots of smaller-scale
        utilities before, it has been a relatively pleasant learning
        experience.


                              PLEASE NOTE:
        The Final Burn BBS is run by the Sysop, Critical Mass, and
        operates according to the rules he chooses to employ.  The Sysop
        is in no way endorsing or supporting ARJShell, other than the
        support given to all users of the Final Burn BBS.  My user id on
        the Final Burn is: ANDY KELLETT


                            TRADEMARKS and more:
        The following names are trademarks of their respective owners:
          PKZIP, PKLite, ARJ, TCWindow, PowerBasic, LZEXE,
          Borland C++ and Turbo C

```
{% endraw %}

## PLEXUS.DOC

{% raw %}
```

                  P L E X U S   1.0   I N S T R U C T I O N S

     PLEXUS is a word game with quotations, word lists and scrambled
     letters. It will run on any PC or clone with color or monochrome
     monitor.

     Start the program by typing PLEXUS<Enter>. PLEXUS will display a
     START-UP MENU. Type I<Enter> if you want to read instructions. Press
     <Enter> to begin play.

     The PUZZLE SELECTION DISPLAY shows you which puzzles you have played
     and lets you choose puzzles. If you press <Enter> without typing a
     puzzle number, PLEXUS will select a puzzle for you.

     The PLEXUS game display shows a list (up to four columns) of words
     with scrambled letters and underscores next to each word. Most puzzles
     also show a few letters as hints. When you figure out a word, type it
     on the underscores. The letters will also appear in the quote at the
     bottom of the screen.

     When you move the cursor you will see a highlight jump around the
     screen. Type a letter at the cursor location (on an underscore) and
     the letter also appears at the highlight location. This highlight
     shows letter correspondence between the word list and the quote.

     When you recognize words in the quote tou can move the cursor down to
     the quote and type there. The letters will also appear in the
     corresponding places in the word list.

     Begin solving with the smaller words. Then go back-and-forth between
     the word list and the quote until you get all of the letters. When you
     solve the puzzle PLEXUS will beep and flash a message.

     Press[F9] to see the solution to a puzzle. Press <Esc> to go back to
     the PUZZLE SELECTION DISPLAY. Press <Esc> twice to quit PLEXUS and
     return to DOS.

     NOTE: Many of the smaller words used in PLEXUS  have several anagrams.
     For example, the letters DRAE might be DEAR, DARE or READ. If you have
     entered all of the letters in a puzzle and PLEXUS does not announce
     the solution, try to spot the wrong letters in the quote. Move the
     cursor to the wrong letter, and the highlight will show you which
     scrambled word to reexamine.

     PLEXUS 1.0 consists of the following files.
                     PLEXUS.EXE      The game program.
                     PUZZLES1.PLX    The puzzle file.
                     PLEXUS.DOC      This documentation file.
     When you run PLEXUS the first time it will create a file called
     STFIL1.PLX in the current directory. This file keeps track of which
     puzzles you have played.

     Enjoy PLEXUS. Register and get volume 2 of PLEXUS as well as
     information on other BLANCHARD SOFTWARE word games.

                               BLANCHARD SOFTWARE
                                 P.O. BOX 1650
                              NORRISTOWN, PA 19401

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3238

     Volume in drive A has no label
     Directory of A:\

    ARJSHELL DOC     16784   9-09-92   4:54p
    ARJSHELL AD       1134   9-05-92   2:27p
    ARJSHELL EXE     19580   9-09-92   9:42p
    ARJS-REG TXT      2315   9-09-92   4:52p
    PLEXUS   EXE     61610   9-27-92   9:00p
    PUZZLES1 PLX     21238   9-23-92  11:58a
    PLEXUS   DOC      2899   9-23-92  11:27a
    README   PLX      1152   9-26-92   6:34p
    GO       BAT        74  11-10-92   2:21p
    SHOW     EXE      2040   9-12-88  10:48a
           10 file(s)     128826 bytes
                           28672 bytes free
