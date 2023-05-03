---
layout: page
title: "PC-SIG Diskette Library (Disk #3058)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3058/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3058"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #3058 VISUAL COMPARE  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the general information, type:  COPY README.DOC PRN  (Enter)  ║
║                                                                         ║
║  To print the documentation, type:  COPY MANUAL.DOC PRN  (press Enter)  ║
║                                                                         ║
║  To print the registration form, type:  COPY REGISTER.DOC PRN  (Enter)  ║
║                                                                         ║
║  To start the program, type:  VCS  (press Enter)                        ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## KEDIT.DOC

{% raw %}
```

        Users of Mansfield Software Group's KEDIT
        -----------------------------------------
        The macro VCS will display file one and file two in separate KEDIT
        windows and locate the deletions and insertions.  This macro uses the
        Visual Compare /D command line option.  See the macro file VCS.KEX
        for documentation.

        The macro VC will run Visual Compare from within KEDIT, using the
        Visual Compare /C command line option, and display output similar to
        that displayed in Visual Compare's visual mode, in a KEDIT window.
        See the macro file VC.KEX for documentation.

```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

                               Whitney Software, Inc.
                               Site-License Agreement

        A site-license allows you to copy and use this software within your
        organization on as many computers as contracted for.  An unlimited
        site-license allows unlimited copying of this software for internal
        use only.  This is copyrighted software and any distribution or
        reselling of this software to third parties is prohibited.  A
        site-license is required to use this software on a network.

        Whitney Software, Inc. grants ___________________________________ a
        site-license for the use of the Visual Compare software.

        This is a perpetual license for the use of this software within your
        organization, and is not transferable.  This site-license allows
        internal use and copying of this software for use by/on __________
        users/computers.

        Whitney Software, Inc. warrants that it has full power and authority
        to grant the site-license.

        This software is supplied as is, without any warranty.  To the extent
        permitted under applicable law, Whitney Software, Inc. disclaims all
        warranties, either express or implied, including but not limited to
        implied warranties of merchantability and fitness for a particular
        purpose.

        In no event shall Whitney Software, Inc. be liable for any damages
        whatsoever (including, without limitation, damages for loss of
        business profits, business interruption, loss of business
        information, or other pecuniary loss) arising out of the use of or
        inability to use this Whitney Software, Inc. product, even if Whitney
        Software, Inc. has been advised of the possibility of such damages.
        Some states do not allow the exclusion of liability for consequential
        or incidental damages, so the above limitation may not apply to you.

        This agreement shall be governed by the laws of the State of
        California and shall inure to the benefit of Whitney Software, Inc.,
        and any successors, administrators, heirs, and assigns.  Any action
        or proceeding brought by either party against the other arising out
        of or related to this agreement shall be brought only in a STATE or
        FEDERAL COURT of competent jurisdiction located in Contra Costa
        County, California.  The parties hereby consent to in personam
        jurisdiction of said courts.


        Company _____________________________________________________________

        Address _____________________________________________________________

                _____________________________________________________________

                _____________________________________________________________

        Daytime Phone _______________________________________________________


        ______________________________      _________________________________

        Authorized Signature                Authorized Signature


        ______________________________      John R. Whitney

        Print or Type Name


        _________________________________   President, Whitney Software, Inc.

        Title

        _________________________________   _________________________________

        Date                                Date


        To:

        Whitney Software, Inc.
        P.O. Box 4999
        Walnut Creek, CA 94596 USA


        If you are purchasing a site-license in order to use Visual Compare
        on a network, estimate the average number of users who might use
        Visual Compare simultaneously on the network.

        Site-License price schedule for the use of Visual Compare.  (Includes
        one diskette with the latest version.)
          2 to  10 computers...... @ $25 ea   # computers ____x $25
         11 to  20 computers...... @ $21 ea   # computers ____x $21
         21 to  50 computers...... @ $17 ea   # computers ____x $17
         51 to 100 computers...... @ $14 ea   # computers ____x $14
        101 to 200 computers...... @ $11 ea   # computers ____x $11
        201+       computers...... @ $2000 one-time fee              $ ______

        Extra diskette............ @  $5 ea   # diskettes ____x  $5  $ ______

                      California residents add applicable sales tax  $ ______

                             Shipping $3 ($5 outside North America)  $ ______

                                                              Total  $ ______

        Diskette format (choose one)   ____ 5.25" 360-KB   ____ 3.5" 720-KB

        Terms:

        Check or money order in U.S. dollars, drawn on a U.S. bank.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```














                                   Visual Compare

                                    Version 1.52






























                     A file comparison utility for programmers.


        Copyright Notice

        Copyright (C) John R. Whitney 1991, 1992
        All rights reserved.


        Trademarks

        CompuServe is a registered trademark of CompuServe, Inc.

        IBM is a registered trademark of International Business Machines
        Corporation.

        Lotus is a registered trademark of Lotus Development Corporation.

        Intel is a registered trademark of Intel Corporation.

        Microsoft is a registered trademark of Microsoft Corporation.


        Disclaimer and Agreement

        Visual Compare is supplied as is, without any warranty.  To the
        extent permitted under applicable law, Whitney Software, Inc.
        disclaims all warranties, either express or implied, including but
        not limited to implied warranties of merchantability and fitness for
        a particular purpose.

        In no event shall Whitney Software, Inc. be liable for any damages
        whatsoever (including, without limitation, damages for loss of
        business profits, business interruption, loss of business
        information, or other pecuniary loss) arising out of the use of or
        inability to use this Whitney Software, Inc. product, even if Whitney
        Software, Inc. has been advised of the possibility of such damages.
        Some states do not allow the exclusion of liability for consequential
        or incidental damages, so the above limitation may not apply to you.

        Visual Compare is a "shareware program" and is provided at no charge
        to the user for evaluation.  Feel free to share it with your friends,
        but you may not give it away altered or as part of another system.
        The essence of "user-supported" software is to provide personal
        computer users with quality software without high prices, and yet to
        provide incentive for programmers to continue to develop new
        products.  If you find this program useful and find that you are
        using Visual Compare and continue to use Visual Compare after a
        reasonable trial period, you must make a registration payment of $30
        to Whitney Software, Inc.  The $30 registration fee will license one
        copy for use on any one computer at any one time.  You must treat
        this software just like a book.  An example is that this software may
        be used by any number of people and may be freely moved from one
        computer location to another, so long as there is no possibility of
        it being used at one location while it's being used at another.  Just
        as a book cannot be read by two different people at the same time.

        Commercial users of Visual Compare must register and pay for their
        copies of Visual Compare within 30 days of first use or their license
        is withdrawn.  See the file LICENSE.DOC for a site-license agreement.

        Anyone distributing Visual Compare for any kind of remuneration must
        first contact Whitney Software, Inc. for authorization.  This
        authorization will be automatically granted to distributors
        recognized by the Association of Shareware Professionals as adhering
        to its guidelines for shareware distributors, and such distributors
        may begin offering Visual Compare immediately, however Whitney
        Software, Inc. must still be advised so that the distributor can be
        kept up-to-date with the latest version of Visual Compare.  A
        distribution fee for distributing Visual Compare may not exceed $10.

        You are encouraged to pass a copy of Visual Compare along to your
        friends for evaluation.  Please encourage them to register their copy
        if they find that they can use it.  All registered users will receive
        a copy of the latest version of Visual Compare and notice of updates
        to Visual Compare.


        Technical Support

        If you have any questions, comments, or suggestions regarding Visual
        Compare, please send a CompuServe message via CompuServe MAIL to
        70661,3463 or write:

        Whitney Software, Inc.
        P.O. Box 4999
        Walnut Creek, CA 94596 USA

                _______
           ____|__     |               (R)
        --|       |    |-------------------
          |   ____|__  |  Association of
          |  |       |_|  Shareware
          |__|   o   |    Professionals
        -----|   |   |---------------------
             |___|___|    MEMBER


        ASP Ombudsman Statement

        This program is produced by a member of the Association of Shareware
        Professionals (ASP).  ASP wants to make sure that the shareware
        principle works for you.  If you are unable to resolve a
        shareware-related problem with an ASP member by contacting the member
        directly, ASP may be able to help.  The ASP Ombudsman can help you
        resolve a dispute or problem with an ASP member, but does not provide
        technical support for members' products.

        Please write to the ASP Ombudsman at:

        ASP Ombudsman
        545 Grover Road
        Muskegon, MI 49442-9427 USA

        or send a CompuServe message via CompuServe MAIL to ASP Ombudsman
        70007,3536.


        Table of Contents
        _____________________________________________________________________


        Introduction ...................................................... 1

        Starting Visual Compare ........................................... 2

        Visual Mode ...................................................... 14

        Miscellaneous Notes .............................................. 15

        Version History .................................................. 16


        Introduction                                                        1
        _____________________________________________________________________


        This manual describes how to use the Visual Compare program to
        compare two program source files.  This manual and the Visual Compare
        program were written for programmers.

        Using Visual Compare's visual mode you can easily see the differences
        between two program source files and you can also selectively discard
        differences in order to quickly undo some of the changes that were
        made.

        Visual Compare requires an IBM Personal Computer or 100% compatible
        running DOS version 2.1 or later.

        Visual Compare uses a comparison algorithm that has been
        mathematically proven to always produce a shortest possible sequence
        of insertions and deletions that will convert file one to file two.


        Starting Visual Compare                                             2
        _____________________________________________________________________


        There are two ways to control the start of Visual Compare:

        1. Through arguments specified on the Visual Compare command line.

        2. Through commands specified in the Visual Compare initialization
           file.


        Visual Compare Command Line

        Run Visual Compare with no arguments to see a list of the available
        command line arguments or to have Visual Compare prompt for
        arguments.

        The form of the Visual Compare command line is as follows:

             VCOMP fileone filetwo [options]


        VCOMP

        The name of the program module.


        fileone

        The first of two files you wish to compare.


        filetwo

        The second of two files you wish to compare.


        If fileone or filetwo ends with a backslash (\) or colon (:) symbol,
        the filename (file name and optional extension) from the other
        fileone or filetwo command line argument is appended.  This can be
        convenient if file one and file two are in different subdirectories
        and have the same filename.  For example:

             VCOMP \OLD\ \NEW\SUPER.C

        is equivalent to

             VCOMP \OLD\SUPER.C \NEW\SUPER.C


        Starting Visual Compare                                             3
        _____________________________________________________________________


        If fileone or filetwo has a file name consisting of an asterisk (*)
        symbol, the file name from the other fileone or filetwo command line
        argument is substituted.  For example:

             VCOMP *.BAK SUPER.C

        is equivalent to

             VCOMP SUPER.BAK SUPER.C


        options

        The following options may be specified with a leading / or -,
        whichever you prefer:

        /B

        Same as the BLACKANDWHITE initialization file command.

        Use /B to tell Visual Compare that you have a monochrome display
        attached to your computer.

        Visual Compare can usually determine whether you have a color or
        monochrome display.  If you have a color display, Visual Compare
        takes advantage of this and uses colors on the screen.

        However, if you have a CGA (Color Graphics Adapter), Visual Compare
        can't tell whether you have a monochrome or color display.  Since
        Visual Compare will assume you have a color display, you may wish to
        use /B to tell Visual Compare otherwise.


        /Tn

        2-64
        Default value: 8

        Same as the TABWIDTH initialization file command.

        Specifies the tab width to be used when expanding tabs, compressing
        spaces, or shifting the display right and left with the Tab and
        Shift-Tab keys.


        /25

        Displays 25 lines in visual mode.


        Starting Visual Compare                                             4
        _____________________________________________________________________


        /43

        Displays 43 lines in visual mode if you have an EGA (Enhanced
        Graphics Adapter).


        /50

        Displays 50 lines in visual mode if you have a VGA (Video Graphics
        Array).


        /S[-]

        Writes an edit script to standard output that will consist of a
        shortest possible sequence of insertions and deletions that will
        convert file one to file two.

        Specify /S- to write the edit script in reverse order (from the end
        of file to the beginning of file).  This can be useful if you are
        using an editor to convert file one to file two using the edit
        script, since modifying the end of file one will not effect the line
        numbers in the edit script that refer to earlier lines in file one.


        /C

        Writes a composite file to standard output that is the same as the
        composite file displayed in visual mode except that strings are used
        to delimit text unique to file one or file two instead of colors.

        Use the ONESTART, ONEEND, TWOSTART, and TWOEND initialization file
        commands to specify the strings used to delimit text unique to file
        one or file two.  By default, ONESTART equals "$$$$$  fileone START
        $$$$$", ONEEND equals "$$$$$  fileone END  $$$$$", TWOSTART equals
        "$$$$$  filetwo START  $$$$$", and TWOEND equals "$$$$$  filetwo END
        $$$$$."  Where "fileone" and "filetwo" represent the fileone and
        filetwo command line arguments.

        One reason you might use this option is to run Visual Compare from
        within your editor in order to display output similar to that
        displayed in visual mode, in an editor window while you edit file two
        or file one in another editor window.


        Starting Visual Compare                                             5
        _____________________________________________________________________


        /D

        Writes a file to standard output that consists of information about
        each difference.  The information consists of the corresponding file
        positions for file one and file two, whether the difference is an
        insertion or deletion, and the number of lines inserted or deleted.

        You might use this option to interface a program of your own design
        to Visual Compare.


        /En

        0-32736
        Default value: 32736

        The edit distance is defined as the length of a shortest possible
        sequence of insertions and deletions that will convert file one to
        file two.

        Use /En to set the maximum edit distance.  If you specify a value
        greater than 32736, Visual Compare will use 32736.  If while
        comparing files the maximum edit distance is exceeded, Visual Compare
        will display an appropriate message and abort.

        Use this option if you are comparing files that may be too different
        for the comparison to be useful and you don't want to wait for Visual
        Compare to complete the comparison if the comparison won't be useful.


        /I

        Same as the IGNORE initialization file command.

        Ignores leading space and tab characters when comparing lines.  Use
        /I if you are not interested in changes in the indentation of lines.


        /K

        Same as the CASE initialization file command.

        Considers upper-case and lower-case letters equivalent when comparing
        lines.


        Starting Visual Compare                                             6
        _____________________________________________________________________


        /Z

        Visual Compare was designed to perform a line-oriented comparison on
        two program source files.  It is possible for Visual Compare to
        compare two files that are not the same at the byte level and report
        that they are identical.  This can happen for six reasons.  First,
        the lines in the files are not all delimited in the same manner.  For
        example, lines in one file are delimited by Cr and lines in the other
        file by Cr-Lf.  Second, end-of-file characters (Ctrl-Z) can cause
        this to happen, because end-of-file characters are normally discarded
        and files are not normally read past the first end-of-file character.
        Third, tab characters can cause this to happen, because tab
        characters are normally expanded to spaces before the comparison
        takes place.  Fourth, trailing space and tab characters at the end of
        lines can cause this to happen, because, by default, trailing space
        and tab characters at the end of lines are discarded before the
        comparison takes place.  (To change the default, see the TRAILING
        initialization file command.)  Fifth, the /I command line option or
        the IGNORE initialization file command can cause this to happen,
        because they tell Visual Compare to ignore leading space and tab
        characters when comparing lines.  Sixth, the /K command line option
        or the CASE initialization file command can cause this to happen,
        because they tell Visual Compare to consider upper-case and
        lower-case letters equivalent when comparing lines.

        Use /Z to determine if two files are identical at the byte level.
        This option tells Visual Compare to not discard line delimiters, to
        not discard end-of-file characters and to read any characters past
        end-of-file characters, to not expand tab characters, to not discard
        trailing space and tab characters at the end of lines, to ignore the
        /I command line option or the IGNORE initialization file command, and
        to ignore the /K command line option or the CASE initialization file
        command.  Visual Compare will still perform a line-oriented
        comparison.  Visual Compare will also ignore the /C, /S, and /D
        command line options and will enter visual mode if the files are not
        identical.


        Visual Compare Initialization File

        Visual Compare automatically processes an initialization file called
        VCOMP.INI at the start of execution.

        Visual Compare first looks for VCOMP.INI in the current working
        directory.  If it doesn't find VCOMP.INI, it next looks in the
        directories specified by the PATH environment variable.


        Starting Visual Compare                                             7
        _____________________________________________________________________


        The initialization file commands can be abbreviated.  For example,
        the TABSOUT command can be entered as TABS, TABSO, TABSOU, or
        TABSOUT.  The shortest legal abbreviation for a command is indicated
        by showing that portion of the command in uppercase and the rest of
        the command in lowercase.

        Some of the initialization file commands have command line option
        counterparts.  If both the initialization file command and the
        corresponding command line option are specified, the command line
        option will override.

        The available initialization file commands are as follows:

        Attributes

        Use ATTRIBUTES to control the colors Visual Compare uses on the
        screen.

        An attribute value is associated with each type of field that Visual
        Compare displays.  The following table lists the seven different
        field types displayed by Visual Compare.  Use ATTRIBUTES to specify
        an attribute value for each field type, in the order of the table
        below.

        Field                Description
        ----------------------------------------------------------
        Common               lines common to file one and file two
        Delete               lines deleted from file one
        Insert               lines inserted from file two
        Function             function key and file name lines
        Window               help and prompt windows
        Error                error message windows
        Key                  keys in help and prompt windows

        Attribute values are numbers ranging from 0 to 255.  Different
        attribute values cause text to appear in different colors,
        highlighted, blinking, etc.  On most display adapters that handle
        color, you can use the following table to determine the attribute
        value corresponding to a given color.  Add the number corresponding
        to the desired foreground color to the number corresponding to the
        desired background color.  To also get blinking, add 128.


        Starting Visual Compare                                             8
        _____________________________________________________________________


        Foreground           Background
        -------------------------------
        0 black              0 black
        1 blue               16 blue
        2 green              32 green
        3 cyan               48 cyan
        4 red                64 red
        5 magenta            80 magenta
        6 brown              96 brown
        7 white              112 white
        8 gray
        9 light blue
        10 light green
        11 light cyan
        12 light red
        13 light magenta
        14 yellow
        15 bright white

        On a MDA (Monochrome Display Adapter), the available attribute values
        are 7 for normal text, 15 for highlighted text, 65 for underlined
        text, and 112 for reverse video text.  To also get blinking, add 128
        to any of these values.

        Examples:

             ATTRIBUTES 27 28 26 30 63 79 15

        The default attribute values used by Visual Compare on a CGA (Color
        Graphics Adapter), an EGA (Enhanced Graphics Adapter), or a VGA
        (Video Graphics Array).

             ATTRIBUTES 7 112 15 7 112 112 15

        The default attribute values used by Visual Compare on a MDA
        (Monochrome Display Adapter).


        Starting Visual Compare                                             9
        _____________________________________________________________________


        Blackandwhite

        Same as the /B command line option.

        Use BLACKANDWHITE to tell Visual Compare that you have a monochrome
        display attached to your computer.

        Visual Compare can usually determine whether you have a color or
        monochrome display.  If you have a color display, Visual Compare
        takes advantage of this and uses colors on the screen.

        However, if you have a CGA (Color Graphics Adapter), Visual Compare
        can't tell whether you have a monochrome or color display.  Since
        Visual Compare will assume you have a color display, you may wish to
        use BLACKANDWHITE to tell Visual Compare otherwise.


        Case

        Same as the /K command line option.

        Use CASE to tell Visual Compare to consider upper-case and lower-case
        letters equivalent when comparing lines.


        ENdofline

        CRLF, CR, or LF
        Default value: CRLF

        Use ENDOFLINE to tell Visual Compare the line delimiter to use when
        the composite file is written to disk by the F2 write function.  If
        Visual Compare is started with the /Z command line option, it will
        not discard the line delimiters in file one and file two and will
        write them to the composite file, instead of using the line delimiter
        specified by ENDOFLINE.


        Starting Visual Compare                                            10
        _____________________________________________________________________


        EXPanded

        YES or NO

        Visual Compare keeps the contents of the files you are comparing in
        memory.  Visual Compare can use up to four megabytes of DOS and EMS
        (Lotus-Intel-Microsoft Expanded Memory Specification, version 3.0 or
        later) memory or DOS and XMS (eXtended Memory Specification) memory
        to store your files.  If Visual Compare detects that EMS memory is
        present in your system, it will automatically use it.  If EMS memory
        is not detected and XMS memory is detected, Visual Compare will
        automatically use XMS memory.

        Use EXPANDED NO to tell Visual Compare to ignore any EMS memory in
        your system, and to use only DOS and possibly XMS memory.  You may
        need to use EXPANDED NO if your EMS driver is not compatible with
        Visual Compare.  You may also want to use EXPANDED NO for performance
        reasons.


        EXTended

        YES or NO

        Visual Compare keeps the contents of the files you are comparing in
        memory.  Visual Compare can use up to four megabytes of DOS and EMS
        (Lotus-Intel-Microsoft Expanded Memory Specification, version 3.0 or
        later) memory or DOS and XMS (eXtended Memory Specification) memory
        to store your files.  If Visual Compare detects that EMS memory is
        present in your system, it will automatically use it.  If EMS memory
        is not detected and XMS memory is detected, Visual Compare will
        automatically use XMS memory.

        Use EXTENDED NO to tell Visual Compare to ignore any XMS memory in
        your system, and to use only DOS and possibly EMS memory.  You may
        need to use EXTENDED NO if your XMS driver is not compatible with
        Visual Compare.  You may also want to use EXTENDED NO for performance
        reasons.


        Height

        25, 43, or 50

        Use HEIGHT to tell Visual Compare how many lines to display in visual
        mode.  You must have either an EGA (Enhanced Graphics Adapter) or a
        VGA (Video Graphics Array) for this command to have any effect.


        Starting Visual Compare                                            11
        _____________________________________________________________________


        Ignore

        Same as the /I command line option.

        If you are not interested in changes in the indentation of lines, use
        IGNORE to tell Visual Compare to ignore leading space and tab
        characters when comparing lines.


        SHadow

        YES or NO

        Use SHADOW to tell Visual Compare whether or not windows should have
        shadows.


        SNowcontrol

        YES or NO

        The IBM Color Graphics Adapter (CGA) requires special programming to
        prevent "snow" from appearing on the screen when a program changes
        the contents of the screen.  The special programming slows down
        screen updating and is not necessary for most other display adapters.
        If Visual Compare detects a MDA (Monochrome Display Adapter), an EGA
        (Enhanced Graphics Adapter), or a VGA (Video Graphics Array), it does
        not "desnow."  If Visual Compare detects a CGA, it will try to
        determine whether "desnowing" is necessary.

        If you suspect that Visual Compare is "desnowing" when it is not
        necessary, you may want to use SNOWCONTROL NO which will allow Visual
        Compare to run faster.

        If your computer "locks up" when you run Visual Compare, use
        SNOWCONTROL NO.

        If Visual Compare incorrectly determines that your CGA does not
        require "desnowing", you can force Visual Compare to "desnow" by
        using SNOWCONTROL YES.


        Starting Visual Compare                                            12
        _____________________________________________________________________


        TABSout

        Use TABSOUT to tell Visual Compare to compress spaces in the
        composite file to tab characters (using the default tab width of 8 or
        the tab width specified by the TABWIDTH initialization file command
        or the /Tn command line option) before writing the composite file to
        disk.  Spaces appearing after the first single or double quote on a
        line are not compressed and single spaces are not changed to tab
        characters.

        TABSOUT effects the composite file written to disk by the visual mode
        F2 write function and has no effect on the composite file written to
        standard output by the /C command line option.


        TABWidth

        2-64
        Default value: 8

        Same as the /Tn command line option.

        Specifies the tab width to be used when expanding tabs, compressing
        spaces, or shifting the display right and left with the Tab and
        Shift-Tab keys.


        TRailing

        YES or NO
        Default value: YES

        Use TRAILING to tell Visual Compare whether or not trailing space and
        tab characters at the end of lines should be discarded.


        ONEStart

        "string" or 'string'
        Default value: "$$$$$  fileone START  $$$$$"

        If the /C command line option is specified, ONESTART specifies the
        string to be written to standard output at the start of text that is
        unique to file one.  The "fileone" in the default value represents
        the fileone command line argument.


        Starting Visual Compare                                            13
        _____________________________________________________________________


        ONEEnd

        "string" or 'string'
        Default value: "$$$$$  fileone END  $$$$$"

        If the /C command line option is specified, ONEEND specifies the
        string to be written to standard output at the end of text that is
        unique to file one.  The "fileone" in the default value represents
        the fileone command line argument.


        TWOStart

        "string" or 'string'
        Default value: "$$$$$  filetwo START  $$$$$"

        If the /C command line option is specified, TWOSTART specifies the
        string to be written to standard output at the start of text that is
        unique to file two.  The "filetwo" in the default value represents
        the filetwo command line argument.


        TWOEnd

        "string" or 'string'
        Default value: "$$$$$  filetwo END  $$$$$"

        If the /C command line option is specified, TWOEND specifies the
        string to be written to standard output at the end of text that is
        unique to file two.  The "filetwo" in the default value represents
        the filetwo command line argument.


        Working

        YES or NO

        Use WORKING to tell Visual Compare whether or not to display the
        "Working" message.


        Here is an example initialization file:

             CASE
             EXP NO
             TABW 4

        Consider upper-case and lower-case letters equivalent when comparing
        lines, ignore any EMS memory in your system, and use a tab width of
        4.


        Visual Mode                                                        14
        _____________________________________________________________________


        Visual Compare can be run in batch mode by using the /C, /S, or /D
        command line option.  However, most of the time you will probably run
        Visual Compare in visual mode.  In visual mode you can easily see the
        differences between two program source files and you can also
        selectively discard differences in order to quickly undo some of the
        changes that were made.

        If the /C, /S, or /D command line option is not given, Visual Compare
        will enter visual mode.  In visual mode you will be presented with a
        scrollable display of a composite of file one and file two.  The
        composite file consists of lines that are common to file one and file
        two, lines unique to file one (deleted from file one), and lines
        unique to file two (inserted from file two).  Invoke the F1 help
        function to see a list of the available functions and their keys.

        To selectively discard differences, use the F7 remove one function,
        the F8 remove two function, the Del key, and the Minus key to remove
        insertions and deletions from the composite file.  Then invoke the F2
        write function to write the modified composite file to disk.  All
        lines in the composite file except those that have been removed will
        be written to disk.  When you invoke the F2 write function, you will
        be prompted for a composite file name.

        Use the F5 show/hide function to display insertions and deletions
        that have been removed.  Use the F4 number function to mark the
        removed insertions and deletions.  Use the Shift-F7 key, the Shift-F8
        key, the Ins key, and the Plus key to unremove insertions and
        deletions.  To use the Ins or Plus key to unremove an insertion or
        deletion, you must first position the cursor on the removed insertion
        or deletion (the removed insertion or deletion must be displayed with
        the F5 show/hide function).

        If there are lines that are too long to be completely displayed, use
        the right and left arrow keys, the End key, and the Home key to
        horizontally scroll the display.  The End key will scroll the display
        so that the last character of the longest displayed line is visible.


        Miscellaneous Notes                                                15
        _____________________________________________________________________


        Lines in file one and file two can be delimited with Cr, Lf, or
        Cr-Lf.  The maximum allowed line length in file one and file two is
        2048 characters.  The maximum number of lines that file one and file
        two each can contain is 16368.  The maximum number of lines that the
        composite file can contain is 16368.

        Visual Compare will normally terminate with a return code of 1.
        However, if Visual Compare determines that file one and file two are
        identical, it will display an appropriate message and terminate with
        a return code of 0.  Also, if Visual Compare encounters an error
        condition while not in visual mode, it will display an appropriate
        message and terminate with a return code of 2.

        Visual Compare uses a comparison algorithm that is described by
        Eugene W. Myers in "An O(ND) difference algorithm and its variations"
        (Algorithmica, 1986, pp. 251-266).  Visual Compare uses the linear
        space refinement of the basic algorithm.


        Version History                                                    16
        _____________________________________________________________________


        Version 1.32

        Released March 5, 1992.

        First shareware version.


        Version 1.40

        Released March 20, 1992.


        New Features

        1. Support for XMS (eXtended Memory Specification) memory.  (See the
           EXTENDED initialization file command.)

        2. The maximum allowed line length in file one and file two was
           increased from 255 to 2048 characters.

        3. The ability to consider upper-case and lower-case letters
           equivalent when comparing lines.  (See the /K command line
           option and the CASE initialization file command.)

        4. The ability to not discard trailing space and tab characters at
           the end of lines.  (See the TRAILING initialization file command.)

        5. The ability to substitute for a file name consisting of an
           asterisk (*) the file name from the other fileone or filetwo
           command line argument.

        6. The ability to substitute the fileone command line argument for
           "fileone" in strings specified by the ONESTART and ONEEND
           initialization file commands.  The ability to substitute the
           filetwo command line argument for "filetwo" in strings specified
           by the TWOSTART and TWOEND initialization file commands.

        7. The termination return codes were changed.  (See the section
           "Miscellaneous Notes.")


        Version History                                                    17
        _____________________________________________________________________


        Version 1.50

        Released May 6, 1992.


        New Features

        1. The ability to prompt for arguments when Visual Compare is run
           with no arguments.

        2. The Shift-Del key, used to remove insertions and deletions from
           the composite file, was changed to the Minus key.  The Shift-Ins
           key, used to unremove insertions and deletions, was changed to the
           Plus key.

        3. The Shift-F7 key will unremove all deletions from the composite
           file.  The Shift-F8 key will unremove all insertions.

        4. The Ctrl-End and Ctrl-Home keys respectively position the cursor
           on the bottom and top line of the display.

        5. The Tab and Shift-Tab keys respectively shift the display right
           and left, tab width columns.

        6. The ability to consider all characters significant.  (See the /Z
           command line option.)

        7. If fileone or filetwo ends with a colon (:) symbol, the filename
           (file name and optional extension) from the other fileone or
           filetwo command line argument is appended.

        8. The ability to specify the line delimiter to use when the
           composite file is written to disk by the F2 write function.  (See
           the ENDOFLINE initialization file command.)


        Version 1.50 Revision A

        Released May 19, 1992.

        Documentation changes only, primarily regarding ASP membership.


        Version 1.51

        Released June 12, 1992.

        Faster and smaller program module.


        Version History                                                    18
        _____________________________________________________________________


        Version 1.52

        Released June 16, 1992.

        Bug fix.  If file one and file two had certain characteristics and
        EMS or XMS memory was used, Visual Compare would fail to produce a
        correct comparison.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

        To:

        Whitney Software, Inc.
        P.O. Box 4999
        Walnut Creek, CA 94596 USA


        From:

        Name ________________________________________________________________

        Company _____________________________________________________________

        Address _____________________________________________________________

                _____________________________________________________________

                _____________________________________________________________

        Daytime Phone _______________________________________________________


        ____ Visual Compare............................... @ $30 ea  $ ______
             (Includes a diskette with the latest version.)

                      California residents add applicable sales tax  $ ______

                             Shipping $3 ($5 outside North America)  $ ______

                                                              Total  $ ______

        Diskette format (choose one)   ____ 5.25" 360-KB   ____ 3.5" 720-KB

        Terms:

        Check or money order in U.S. dollars, drawn on a U.S. bank.  Purchase
        orders (net 30) accepted from within the U.S. and Canada.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3058

     Volume in drive A has no label
     Directory of A:\

    VCM      BAT       220   6-16-92  10:44a
    VCS      BAT       263   6-16-92  10:44a
    KEDIT    DOC       649   6-16-92  10:44a
    LICENSE  DOC      4828   6-16-92  10:44a
    MANUAL   DOC     37274   6-16-92  10:44a
    REGISTER DOC      1246   6-16-92  10:44a
    VCOMP    EXE     50939   6-16-92  10:44a
    VC       KEX      2905   6-16-92  10:44a
    VCS      KEX      7058   6-16-92  10:44a
    PACKING  LST       599   6-16-92  10:44a
    GO       TXT      1001   1-11-93   2:31p
    GO       BAT        31   6-04-92   2:25a
           12 file(s)     107013 bytes
                           50176 bytes free
