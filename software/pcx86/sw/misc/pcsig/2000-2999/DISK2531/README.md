---
layout: page
title: "PC-SIG Diskette Library (Disk #2531)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2531/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2531"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ANCHOR.TXT

{% raw %}
```
{{ aaaaaaaaaaaaaa, 1, 0, 2 }}
{{ bbbbbbbbbbbbbb, 2, 0, 3 }}
{{ cccccccccccccc, 3, 0, 4 }}
{{ dddddddddddddd, 4, 0, 5 }}
{{ eeeeeeeeeeeeee, 5, 0, 6 }}
{{ ffffffffffffff, 6, 0, 7 }}
{{ gggggggggggggg, 7, 0, 8 }}
{{ hhhhhhhhhhhhhh, 8, 0, 9 }}
{{ iiiiiiiiiiiiii, 9, 0, 10 }}
{{ jjjjjjjjjjjjjj, 10, 0, 11 }}
{{ kkkkkkkkkkkkkk, 11, 0, 12 }}
{{ llllllllllllll, 12, 0, 13 }}
{{ mmmmmmmmmmmmmm, 13, 0, 14 }}
{{ nnnnnnnnnnnnnn, 14, 0, 15 }}
{{ oooooooooooooo, 15, 0, 16 }}
{{ pppppppppppppp, 16, 0, 0 }}
This is an example of a help text topic nested 16 layers deep.
EZhelp will attempt to anchor each subsequent menu window at the
upper right corner of the previous menu. If that is not possible,
the menu window will be centered on the screen.

Before help text displays, all menus are removed from the screen,
or "unrolled". This is to insure that the screen is restored to
its original state before the help text is shown. This will allow
EZhelp to seamlessly fit with your application.

By default, error messages are turned off. If an error occurs,
EZhelp will return a code to your program specifying the error
number. If you turn error messages on, EZhelp will display the
error message before exiting. This option can prove helpful for
finding a mistake in a large help text file.
```
{% endraw %}

## EZHELP.TXT

{% raw %}
```
EZhelp Reference, EZcomp compiler,
EZsetup utility (C) Copyright 1990-1991,
Brain Child Systems.
All rights reserved.
--------------------------------------------------------------------------

{{ What's EZhelp?,  1,1,6 }}

{{ 4 easy steps,    1,2,0 }}

There are 4 steps to setting up a
help reference text:

■ Writing the reference help text -

  Forming an outline, creating topic
   definitions, and entering the
   reference text

■ Using EZcomp -

  Compiling the text with EZcomp.
++
■ Using EZhelp -

  Calling the program with a choice of startup options and/or default
  data created by EZsetup

■ Using EZsetup -

  Saving display colors and options in a file that EZhelp will use
  at runtime

{{ Writing text,    1,3,2 }}

   .... menu 2 is next ....

{{ Using EZcomp,    1,4,3 }}

   .... menu 3 is next ....

{{ Using EZhelp,    1,5,4 }}

   .... menu 4 is next ....

{{ Using EZsetup,   1,6,0 }}

   EZsetup is a utility that creates a data file of startup
options used by EZhelp at runtime. The options that can be
saved in the data file are:

  ■ Title color     ■ 1st letter auto selection
  ■ Letter color    ■ Automatic window sizing
  ■ Window color    ■ Page number display
  ■ Border color    ■ Error display
  ■ Hilite color    ■ Customized page up string
  ■ Border style    ■ Customized page down string
                    ■ Customized exit string
                    ■ Help window anchor
                    ■ Screen overlap

   Some of the startup data options can be overridden from
the command line when EZhelp is started. For more
information on command line parameters, see Using EZhelp,
Command line.

{{ Registering EZhelp,     1,7,5 }}

   EZhelp is a shareware product, and may be used for a reasonable
trial period free of charge. What defines a reasonable trial period?
You may evaluate the package for 30 days, which should be enough
time to decide if you would like to continue using it.

   The basic registration fee is $25. This fee includes a diskette
with all EZhelp executable files, including the compiler and setup
utility, and a printable user's guide on the diskette.

   To register EZhelp, print out a copy of the file "order.frm"
with this DOS command: COPY ORDER.DOC > PRN
{{ -------------------, 1,8,0 }}

{{ Charityware?,        1,9,0 }}
.............................................................

                        Charityware

   Twenty percent of each registration fee received for this
package will be donated to charity. This pledge extends for
the lifetime of this package and any subsequent versions.

   The concept of charityware is something that should be
explored. This package is fundamentally a shareware package,
with voluntary registration and trial use. No obligation on
your part is implied with its use during a reasonable trial
period. The basic trust embedded in the shareware concept can
have a double benefit with the Charityware concept - not only
have you done your part to promote shareware and shareware
authors, you also have made a charitable contribution that
counts.

.............................................................
{{ Forming an outline, 2,1,0 }}

   Writing an outline is the essential first step to creating
the reference. It will help to begin with the most general
subjects, and narrow the subjects into sub-topics and further
sub-topics. The outline itself should have no more than eight
levels of sub-topics.

   A typical printed reference guide has a table of contents
and body of text, and an optional index. An EZHelp text file
contains the same elements. The items in the outline become
topic definition lines in the text. The text can be entered
first, and the EZhelp topic lines inserted later, or the topic
lines can be entered first, and the text inserted between them.

   Topic lines include the name of the topic, the menu number,
the order within the menu, and sub-topics to follow, if
applicable. If there are no sub-topics to follow, the text
after the topic line will be displayed.

{{ Creating topics, 2,2,0 }}

   Working from your outline, you can create Topic Descriptions
that will be displayed in the pop-up menus. The topic itself is
a line of text that is inserted in your document, just above
the point where the help text begins for that topic.

The topic consists of:

  {{  topic name,    menu #,    menu order,     next menu  }}

    ■ {{ - double brackets placed in the text will begin
      a topic definition. A topic definition is ended with
      another set of brackets }}.

    ■ topic name - you may use up to nineteen characters for
        the topic, beginning with the first left character.

    ■ menu # - this will identify the group of topics which
        are to be shown on the same menu. The outermost menu,
        or most general, should begin with 1 as a rule.
++
    ■ menu order - this will specify the order of the topic
        among the other topics in the menu, from top to
        bottom. If you wish the menu topics to be sorted
        alphabetically, use 0 for the order number in each
        topic in the menu.

    ■ next menu - if this topic leads to another topic
        sub-menu, use the sub-menu number. If this topic leads
        to the help text (the help text follows the topic in
        the document), use 0.

The topic which defined the text you are now reading is:

    {{ Creating topics, 2,2,0 }}
++
   Note that each item in the topic should be followed with a comma.
The spacing between the parameters is not critical, but only numbers
should be used for the last three. Menu numbers may be 1 - 256, although
the maximum number of menu layers is 16. The topic definition must
contain a complete set of brackets, parameters, and commas, or an error
will occur during compilation.
++
Here is an example of a complete set of menu definitions
for a reference describing methods of transportation:

{{ Land,          1,  1,  2     }}
{{ Water,         1,  2,  3     }}   menu 1, 3 topics
{{ Air,           1,  3,  4     }}   ________________

{{ Car,           2,  1,  0     }}
{{ Bicycle,       2,  2,  0     }}   menu 2, 3 topics
{{ Feet,          2,  3,  0     }}   ________________

{{ Speedboat,     3,  1,  0     }}
{{ Yacht,         3,  2,  0     }}   menu 3, 3 topics
{{ Jet ski,       3,  3,  0     }}   ________________

{{ Airlines,      4,  1,  0     }}
{{ Hang glider,   4,  2,  0     }}   menu 4, 2 topics

Note that menu in menu 1, topic "Land" defines a next
menu, 2. Also in menu 1, topic "Water" defines a next
menu 3, and topic "Air" defines a next menu 4.
{{ Entering text,   2,3,0 }}

  This is the basic layout of an EZhelp text file:
┌──────────────────────────┐
│ .beginning of file       │
│                          │
│    Comments (a)          │  (a) Optional comments may be placed
│                          │    at the beginning of the file, until
│ Topic definition (b)     │    the first Topic definition.
│                          │
│    Accompanying text (c) │  (b) A topic definition line will
│                          │    always be followed with Accompanying
│ Topic definition (b)     │    text unless another menu is to
│                          │     follow.
│    Accompanying text (c) │
│                          │  (c) The accompanying text will be
│ Topic definition (b)     │    assumed to continue until the next
│                          │    topic definition is found, or the
│    Accompanying text (c) │    end of the file is reached.
│                          │
│ .end of file             │
└──────────────────────────┘
++
An EZhelp text file MUST conform to these three guidelines:

■ Carriage return/line feed  (CR/LF):

   A carriage return/line feed pair must terminate every line in
the file. What this means for text written with many commercial
word processors (Microsoft Word, Wordperfect, others) is that it
will likely be neccessary to press the return key at the end of
each line, rather than letting the line wrap around.

   One way to tell if your word processor generates the CR/LF at
the end of each line is to use the DOS "TYPE" command to view the
text file on the screen. If the text is not indented as you would
see it in the word processor, then you will need to press return
at the end of each line.

   Avoid using the tab key in the text. Instead, indent using
the space bar. All other text formatting commands used by your
word processor should be avoided also. If it is possible, save
the file with your word processor in unformatted mode.
++
■ Line length:

   A line MUST be 76 characters or less. If the line is longer
than 76 characters, unexpected results may occur. One common
result is when the entire page shifts up by one line. Take care
to follow this guideline.

■ Recompiling:

   The reference text file must be recompiled after each time
it is modified. If it is not recompiled, the help text displays
will overlap, and the topic definition line may be visible on
the screen.

{{ Imbedded commands, 2,3,0 }}

   You can imbed commands in your reference to control the display.
The commands must begin on the 1st column of a line.

  Command     Action
  --------    ----------------------------------------------

     ++       Forces the page to break at that point.

{{ Files involved,  3,1,0 }}

   "MYFILE.TXT",  when compiled, creates an index "MYFILE.HNX".

   ┌────────┐          ┌───────────────┐          ┌─────────┐
   │        │          │               │          │         │
   │  Text  │  ----->  │  EZcomp.exe   │  ----->  │  Text   │
   │  file  │  ----->  │  (compiler)   │  ----->  │  index  │
   │        │          │               │          │         │
   └────────┘          └───────────────┘          └─────────┘


      The index file name is created using the first part of the
   text file name and adding ".hnx" as the extension. The index
   file will be placed in the same subdirectory as the text file.

{{ Command line,    3,2,0 }}

   Use: EZcomp MYFILE.TXT [-pu] [-ps]

      From the DOS prompt, enter the following command to compile
   a help text file:

   EZcomp MYFILE.TXT

   The compiler runs for a moment, creates the index "myfile.hnx"
   using the text file "myfile.txt", and returns to the DOS prompt.

   To compile the text and print an unsorted report of the topics,
   enter this command:

   EZcomp MYFILE.TXT -pu

   To print a sorted report of the topics, substitute "-ps" on the
   command line, or include both "-pu" and "-ps" for both reports.

{{ Reporting,       3,3,0 }}

   Shown below is a sample report generated by EZcomp.exe. The report
can be printed in the natural order that topic definitions are found
in the text, or in sorted order.

----------------------------------------------------------------------
EZcomp v1.4   Reference Index report, unsorted: transpor.txt   Page  1
----------------------------------------------------------------------

Menu    Menu                     Next  Line    Line
number  order   Topic            menu  number  count   Offset  Size
------  ------  ---------------  ----  ------  ------  ------  ------
     1       1  Land                2      35       4    1117      63
     1       2  Water               3      39       4    1214      63
     1       3  Air                 4      43       4    1311      63

     2       1  Car                        47       4    1408      53
     2       2  Bicycle                    51       4    1495      57
     2       3  Feet                       55       4    1586      45
   .
   .
   .
{{ Memory needed,   4,1,0 }}

   EZhelp menus and help text windows allocate and release memory
as they are used. The amount of memory required will depend on the
size and levels of the menus. The program will have a pool of free
memory to use up to 64k. If there is no free memory to allocate,
the program will display an error message and exit.

{{ Files involved,  4,2,0 }}

                           ┌───────────────┐          ┌────────┐
   EZhelp.exe uses the     │               │  <-----  │  Text  │
   reference file created  │               │  <-----  │  index │
   with a word processor   │  EZhelp.exe   │          └────────┘
   or text editor, and     │  (help text   │
   the index created with  │   driver)     │          ┌────────┐
   EZcomp, to drive the    │               │  <-----  │  Text  │
   displays of menus and   │               │  <-----  │  file  │
   reference text.         └───────────────┘          └────────┘

{{ Command line,    4,3,0 }}

Use: EZhelp MYFILE.TXT [-Mnnn -Jnnn -Bn -Snn -Tmenu_title
                        -An -Dn -En -Ln -On]

MYFILE.TXT   The name of a text reference file to be used. Up to
             40 characters may be used for the full path and file
             name. The index MYFILE.HNX is assumed to reside in
             the same subdirectory.

-Mnnn        The number of the menu to start at. The program will
             begin by displaying the Topic descriptions for that
             menu, as defined in MYFILE.TXT. All subsequent menus
             from the point of the startup menu will be accessible.
             If none is specified, the default is 1. The maximum
             menu value possible is 255.

-Jnnn        The number of the topic in the start menu specified
             to display directly. If the -Jnn option is used, the
             menu will not be shown, and the help text for topic
             -Jnnn in menu -Mnnn will display. The maximum topic
             value possible is 255.
++
-Bn          A number to define the menu and help text window
             borders. There are four different choices, as shown
             below. The default is 1.

                      ┌───┐   ╒═══╕   ╔═══╗   ╓───╖
                      │ 1 │   │ 2 │   ║ 3 ║   ║ 4 ║
                      └───┘   ╘═══╛   ╚═══╝   ╙───╜

-Snn         A number to define the size (in lines) of the help text
             window display. The minimum window size is 4, and the
             maximum is 23. The default is 23 lines.

-Tmenu_title This will allow EZhelp to use the specified string 
             as the default for the startup menu. If two words
             are needed for the string, use the underbar character
             to separate them. The underbar will be replaced with
             a space at runtime.
++
---------------------------------------------------------------------
Override options - To set the option ON, use 1. To set it OFF, use 0.
---------------------------------------------------------------------

-An          Automatic window sizing? When OFF, window width
             will always be 80 columns.  Default = ON

-Dn          Display page numbers at the lower left? Default = ON

-En          Display error messages if an error occurs? Default = ON

-Ln          Anchor the reference at one of nine areas
             of the screen, like so:
                                            ┌───┬───┬───┐
                                            │ 1 │ 2 │ 3 │
                                            ├───┼───┼───┤
                   The default is 5,        │ 4 │ 5 │ 6 │
                   the center.              ├───┼───┼───┤
                                            │ 7 │ 8 │ 9 │
                                            └───┴───┴───┘
-On          Overlap windows? Default = OFF

Examples:

   1) EZhelp MYFILE.TXT

      Start MYFILE.TXT at menu 1, use all defaults.

   2) EZhelp MYFILE.TXT -M4 -J7 -S15

      Jump directly to the display of topic 7 in menu 4.
      Set the referece window size to 15 lines.

   3) EZhelp MYFILE.TXT  -E1 -A0 -L8

      Start MYFILE.TXT with error messages and automatic
      window sizing OFF. Display text at the lower center
      of the screen.

Note: The order of the specified options is not critical.
{{ Examples,        4,3,90 }}

   .... menu 90 is next ....

{{ Distribution,    4,5,0 }}

   You may distribute copies of this
package in its complete form, including
EZhelp.exe, EZcomp.exe, EZsetup.exe,
EZhelp.txt and EZhelp.hnx, and user's
guide. We encourage you to do so.

   Registered users may bundle EZhelp
with their own applications and
distribute unlimited copies.

   For more information on registering
EZhelp Reference, select the
"Registering" topic.

{{ Future enhancments,     4,6,0 }}

   This is a list of enhancements that are under
consideration for the next version of EZhelp.

   Additional imbedded commands
   Hypertext links to other topics
   Help text printing
   Additional text in menu window

   If you have any suggestions for enhancements
to this program, call or write the address on
the Registration form screen.

{{ -------------------, 4,7,0 }}

{{ Quick summary,   4,8,0 }}

─────────────────────── Topic definitions ─────────────────────────
{{  topic name,    menu #,       menu order,     next menu  }}

    1 - 19 chars   all of the    0 = sort on     0 = display
    ended with a   topics in     topic name;     text to follow;
    comma          a menu have   Other - use     Other - display
                   the same #    order chosen    the next menu

─────────────────── Compiling a reference file ────────────────────
EZcomp MYFILE.TXT [-pu] [-ps]

Note: Use your own help text file in place of MYFILE.TXT. Use the
      -pu and -ps options to print a report on the text file
      topics, unsorted or sorted.

───────────────────────── Running EZhelp ──────────────────────────
Use: EZhelp MYFILE.TXT [-Mnnn -Jnnn -Bn -Snn -Tmenu_title
                        -An -Dn -En -Ln -On]

{{ Registration form,   5,1,0 }}

The basic registration of EZhelp Reference includes:

    ■ Registered diskette   ■ Telephone support
    ■ User's guide booklet  ■ 1 low-cost update

          Press the PgDn key to view the
          registration form/user profile.

           With the form on the screen,
             press the PrintScrn key
                to print a copy.
++
       R e g i s t r a t i o n   F o r m  /  U s e r   P r o f i l e
............................................................................
          Name .                                 send: Brain Child Systems
       Company .                                   to: P.O. Box 3882
       Address .                                     : Austin, TX 78764
City State ZIP .                                     : (512) 442-1713
  Phone number .
               .
What type of   .
reference have .
you developed? .
               ..................................................
Today's date   .                   . Basic Registration  25.00   ......... 
EZhelp version .                   .       and/or
Diskette size  .                   . Registered Upgrade   5.00   .........
               .                   .
Where did you  .                   . TX resident tax     X  8%   .........
find EZhelp?   .                   .
               .                   . Total                       .........
Ser.D213....................................................................
    Twenty percent of each Basic Registration and Registered Upgrade fee
         will be donated to a non-profit, charitable organization.
{{ The 50/50 offer,     5,2,0 }}

   During 1991, we would like to extend a special
offer to those of you who donate to charities this
year. If you send us a photocopy of a reciept for
a tax-deductible donation of at least $50 to a
non-profit organization, you can take 50% off of
the Basic Registration price! You may photocopy
multiple receipts, as long as they add up to $50
or more. (Registered Upgrade not elgible)

This is a trial offer for 1991. If it induces you
to register, please say so.

{{ Upgrade info,        5,3,0 }}

EZhelp Reference v1.4   (last version 1.2)

Enhancements   ■ Better reference window control, anchoring, and sizing.
               ■ A page break command can be imbedded in reference text
                 by typing '++' as the first characters on a line.
               ■ Window overlap option allows reference pages to overlap
                 on the screen, rather than clearing the screen each time.
               ■ Improved compiler speed.
               ■ EZhelp Command line option "-T" allows a menu title to
                 be selected for the first menu display.

Bug fixes      Yes, everybody has 'em. These listed here have been fixed.
               ■ EZcomp not compiling files > 64k.
               ■ Text sometimes incorrect for topics in 2nd or 3rd column.

{{ Introduction,        6, 1, 0 }}
............................................................................




                          I N T R O D U C T I O N

                                   T O

                     E Z h e l p   R e f e r e n c e

                               version 1.4

                        A ShareWare reference tool

              (C) Copyright Brain Child Systems, 1990-1991

                           All rights reserved




............................................................................

   EZhelp Reference is a set of tools to create and display a menu-
driven text reference. Virtually any information kept in a text
file (such as letters, users's guide files, office procedures) can
be turned into an EZhelp Reference file in a matter of minutes.
EZhelp Reference is easy enough for a novice to use productively,
but it also has features that programmers can appreciate, for use
with their own programs.

   This reference guide is driven by EZhelp, and describes how to
set up your own text files for in-house use or distribution. Take
a moment to read the help topics and move through the different
menu levels.

   Any suggestions you have for the program would be appreciated.
Check the Future enhancements topic for a list of the features
planned for the next version. If you are a user of version 1.2,
read the upgrade topic to see what's new.

                   Thanks for trying the program!
++
EZhelp Reference consists of three programs:

  EZcomp.EXE -  A text compiler program that creates an index on
                help reference files. This index is used by
                EZhelp at runtime.

  EZhelp.EXE  - The help display engine that drives the display
                of the reference text, using the index created
                by EZcomp.

  EZsetup.EXE - A utility program used to create a customized
                file of startup options used by EZhelp.

You will need a text editor or word processor to create your
reference with. There are a few issues to be aware of when using
a word processor. For more information, select the "Entering text"
menu. You will also be more successful if you follow the hints on
organizing your topics. More information can be found in the
"Forming Outline" menu.

{{ Features,            6, 2, 0 }}

EZhelp features:

  ■ quick text compiler with optional topic
    sorting, reference report, error messages

  ■ pop-up menus
  ■ choice of line style
  ■ choice of colors on five screen items
  ■ manual/automatic text window sizing
  ■ optional page number display
  ■ choice of PageUp/PageDn/Escape messages
  ■ anchor text on one of nine screen areas
  ■ start at any menu level
  ■ jump directly to any help topic

  ■ 1 low-cost update

{{ 1 more menu,    90,0,91 }}

   .... menu 91 is next ....

{{ 2 aaaaaaaaaaaa, 90,0,0  }}
{{ 3 aaaaaaaaaaaa, 90,0,0  }}
{{ 4 aaaaaaaaaaaa, 90,0,0  }}
{{ 5 aaaaaaaaaaaa, 90,0,0  }}
{{ 6 aaaaaaaaaaaa, 90,0,0  }}
{{ 7 aaaaaaaaaaaa, 90,0,0  }}
{{ 8 aaaaaaaaaaaa, 90,0,0  }}
{{ 9 aaaaaaaaaaaa, 90,0,0  }}
{{ 10 aaaaaaaaaaa, 90,0,0  }}
{{ 11 aaaaaaaaaaa, 90,0,0  }}
{{ 12 aaaaaaaaaaa, 90,0,0  }}
{{ 13 aaaaaaaaaaa, 90,0,0  }}
{{ 14 aaaaaaaaaaa, 90,0,0  }}
{{ 15 aaaaaaaaaaa, 90,0,0  }}
{{ 16 aaaaaaaaaaa, 90,0,0  }}
{{ 17 aaaaaaaaaaa, 90,0,0  }}
{{ 18 aaaaaaaaaaa, 90,0,0  }}
{{ 19 aaaaaaaaaaa, 90,0,0  }}
{{ 20 aaaaaaaaaaa, 90,0,0  }}
{{ 21 aaaaaaaaaaa, 90,0,0  }}
{{ 22 aaaaaaaaaaa, 90,0,0  }}
{{ 23 aaaaaaaaaaa, 90,0,0  }}
{{ 24 aaaaaaaaaaa, 90,0,0  }}
{{ 25 aaaaaaaaaaa, 90,0,0  }}
{{ 26 aaaaaaaaaaa, 90,0,0  }}
{{ 27 aaaaaaaaaaa, 90,0,0  }}
{{ 28 aaaaaaaaaaa, 90,0,0  }}
{{ 29 aaaaaaaaaaa, 90,0,0  }}
{{ 30 aaaaaaaaaaa, 90,0,0  }}
{{ 31 aaaaaaaaaaa, 90,0,0  }}
{{ 32 aaaaaaaaaaa, 90,0,0  }}
{{ 33 aaaaaaaaaaa, 90,0,0  }}
{{ 34 aaaaaaaaaaa, 90,0,0  }}
{{ 35 aaaaaaaaaaa, 90,0,0  }}
{{ 36 aaaaaaaaaaa, 90,0,0  }}
{{ 37 aaaaaaaaaaa, 90,0,0  }}
{{ 38 aaaaaaaaaaa, 90,0,0  }}
{{ 39 aaaaaaaaaaa, 90,0,0  }}
{{ 40 aaaaaaaaaaa, 90,0,0  }}
{{ 41 aaaaaaaaaaa, 90,0,0  }}
{{ 42 aaaaaaaaaaa, 90,0,0  }}
{{ 43 aaaaaaaaaaa, 90,0,0  }}
{{ 44 aaaaaaaaaaa, 90,0,0  }}
{{ 45 aaaaaaaaaaa, 90,0,0  }}
{{ 46 aaaaaaaaaaa, 90,0,0  }}
{{ 47 aaaaaaaaaaa, 90,0,0  }}
{{ 48 aaaaaaaaaaa, 90,0,0  }}
{{ 49 aaaaaaaaaaa, 90,0,0  }}
{{ 50 aaaaaaaaaaa, 90,0,0  }}
{{ 51 aaaaaaaaaaa, 90,0,0  }}
{{ 52 aaaaaaaaaaa, 90,0,0  }}
{{ 53 aaaaaaaaaaa, 90,0,0  }}
{{ 54 aaaaaaaaaaa, 90,0,0  }}
{{ 55 aaaaaaaaaaa, 90,0,0  }}
{{ 56 aaaaaaaaaaa, 90,0,0  }}
{{ 57 aaaaaaaaaaa, 90,0,0  }}
{{ 58 aaaaaaaaaaa, 90,0,0  }}
{{ 59 aaaaaaaaaaa, 90,0,0  }}
{{ 60 aaaaaaaaaaa, 90,0,0  }}
{{ 61 aaaaaaaaaaa, 90,0,0  }}
{{ 62 aaaaaaaaaaa, 90,0,0  }}
{{ 63 aaaaaaaaaaa, 90,0,0  }}
{{ 64 aaaaaaaaaaa, 90,0,0  }}
{{ 65 aaaaaaaaaaa, 90,0,0  }}
{{ 66 aaaaaaaaaaa, 90,0,0  }}
{{ 67 aaaaaaaaaaa, 90,0,0  }}
{{ 68 aaaaaaaaaaa, 90,0,0  }}
{{ 69 aaaaaaaaaaa, 90,0,0  }}

{{ 1 more menu,    91,0,92 }}

   .... menu 92 is next ....

{{ 2 bbbbbbbbbbbb, 91,0,0  }}
{{ 3 bbbbbbbbbbbb, 91,0,0  }}
{{ 4 bbbbbbbbbbbb, 91,0,0  }}
{{ 5 bbbbbbbbbbbb, 91,0,0  }}
{{ 6 bbbbbbbbbbbb, 91,0,0  }}
{{ 7 bbbbbbbbbbbb, 91,0,0  }}

{{ 1 cccccccccccc, 92,0,0  }}
{{ 2 cccccccccccc, 92,0,0  }}
{{ 3 cccccccccccc, 92,0,0  }}
{{ 4 cccccccccccc, 92,0,0  }}
{{ 5 cccccccccccc, 92,0,0  }}
{{ 6 cccccccccccc, 92,0,0  }}
{{ 7 cccccccccccc, 92,0,0  }}
{{ 8 cccccccccccc, 92,0,0  }}
{{ 9 cccccccccccc, 92,0,0  }}
{{ 10 ccccccccccc, 92,0,0  }}
{{ 11 ccccccccccc, 92,0,0  }}
{{ 12 ccccccccccc, 92,0,0  }}
{{ 13 ccccccccccc, 92,0,0  }}
{{ 14 ccccccccccc, 92,0,0  }}
{{ 15 ccccccccccc, 92,0,0  }}
{{ 16 ccccccccccc, 92,0,0  }}
{{ 17 ccccccccccc, 92,0,0  }}
{{ 18 ccccccccccc, 92,0,0  }}
{{ 19 ccccccccccc, 92,0,0  }}
{{ 20 ccccccccccc, 92,0,0  }}
{{ 21 ccccccccccc, 92,0,0  }}
{{ 22 ccccccccccc, 92,0,0  }}
{{ 23 ccccccccccc, 92,0,0  }}
{{ 24 ccccccccccc, 92,0,0  }}
{{ 25 ccccccccccc, 92,0,0  }}
{{ 26 ccccccccccc, 92,0,0  }}
{{ 27 ccccccccccc, 92,0,0  }}
{{ 28 ccccccccccc, 92,0,0  }}
{{ 29 ccccccccccc, 92,0,0  }}
{{ 30 ccccccccccc, 92,0,0  }}
{{ 31 ccccccccccc, 92,0,0  }}
{{ 32 ccccccccccc, 92,0,0  }}
{{ 33 ccccccccccc, 92,0,0  }}
{{ 34 ccccccccccc, 92,0,0  }}
{{ 35 ccccccccccc, 92,0,0  }}
```
{% endraw %}

## ANCHOR.TXT

{% raw %}
```
{{ aaaaaaaaaaaaaa, 1, 0, 2 }}
{{ bbbbbbbbbbbbbb, 2, 0, 3 }}
{{ cccccccccccccc, 3, 0, 4 }}
{{ dddddddddddddd, 4, 0, 5 }}
{{ eeeeeeeeeeeeee, 5, 0, 6 }}
{{ ffffffffffffff, 6, 0, 7 }}
{{ gggggggggggggg, 7, 0, 8 }}
{{ hhhhhhhhhhhhhh, 8, 0, 9 }}
{{ iiiiiiiiiiiiii, 9, 0, 10 }}
{{ jjjjjjjjjjjjjj, 10, 0, 11 }}
{{ kkkkkkkkkkkkkk, 11, 0, 12 }}
{{ llllllllllllll, 12, 0, 13 }}
{{ mmmmmmmmmmmmmm, 13, 0, 14 }}
{{ nnnnnnnnnnnnnn, 14, 0, 15 }}
{{ oooooooooooooo, 15, 0, 16 }}
{{ pppppppppppppp, 16, 0, 0 }}
This is an example of a help text topic nested 16 layers deep.
EZhelp will attempt to anchor each subsequent menu window at the
upper right corner of the previous menu. If that is not possible,
the menu window will be centered on the screen.

Before help text displays, all menus are removed from the screen,
or "unrolled". This is to insure that the screen is restored to
its original state before the help text is shown. This will allow
EZhelp to seamlessly fit with your application.

By default, error messages are turned off. If an error occurs,
EZhelp will return a code to your program specifying the error
number. If you turn error messages on, EZhelp will display the
error message before exiting. This option can prove helpful for
finding a mistake in a large help text file.
```
{% endraw %}

## EZHELP.TXT

{% raw %}
```
EZhelp Reference, EZcomp compiler,
EZsetup utility (C) Copyright 1990-1991,
Brain Child Systems.
All rights reserved.
--------------------------------------------------------------------------

{{ What's EZhelp?,  1,1,6 }}

{{ 4 easy steps,    1,2,0 }}

There are 4 steps to setting up a
help reference text:

■ Writing the reference help text -

  Forming an outline, creating topic
   definitions, and entering the
   reference text

■ Using EZcomp -

  Compiling the text with EZcomp.
++
■ Using EZhelp -

  Calling the program with a choice of startup options and/or default
  data created by EZsetup

■ Using EZsetup -

  Saving display colors and options in a file that EZhelp will use
  at runtime

{{ Writing text,    1,3,2 }}

   .... menu 2 is next ....

{{ Using EZcomp,    1,4,3 }}

   .... menu 3 is next ....

{{ Using EZhelp,    1,5,4 }}

   .... menu 4 is next ....

{{ Using EZsetup,   1,6,0 }}

   EZsetup is a utility that creates a data file of startup
options used by EZhelp at runtime. The options that can be
saved in the data file are:

  ■ Title color     ■ 1st letter auto selection
  ■ Letter color    ■ Automatic window sizing
  ■ Window color    ■ Page number display
  ■ Border color    ■ Error display
  ■ Hilite color    ■ Customized page up string
  ■ Border style    ■ Customized page down string
                    ■ Customized exit string
                    ■ Help window anchor
                    ■ Screen overlap

   Some of the startup data options can be overridden from
the command line when EZhelp is started. For more
information on command line parameters, see Using EZhelp,
Command line.

{{ Registering EZhelp,     1,7,5 }}

   EZhelp is a shareware product, and may be used for a reasonable
trial period free of charge. What defines a reasonable trial period?
You may evaluate the package for 30 days, which should be enough
time to decide if you would like to continue using it.

   The basic registration fee is $25. This fee includes a diskette
with all EZhelp executable files, including the compiler and setup
utility, and a printable user's guide on the diskette.

   To register EZhelp, print out a copy of the file "order.frm"
with this DOS command: COPY ORDER.DOC > PRN
{{ -------------------, 1,8,0 }}

{{ Charityware?,        1,9,0 }}
.............................................................

                        Charityware

   Twenty percent of each registration fee received for this
package will be donated to charity. This pledge extends for
the lifetime of this package and any subsequent versions.

   The concept of charityware is something that should be
explored. This package is fundamentally a shareware package,
with voluntary registration and trial use. No obligation on
your part is implied with its use during a reasonable trial
period. The basic trust embedded in the shareware concept can
have a double benefit with the Charityware concept - not only
have you done your part to promote shareware and shareware
authors, you also have made a charitable contribution that
counts.

.............................................................
{{ Forming an outline, 2,1,0 }}

   Writing an outline is the essential first step to creating
the reference. It will help to begin with the most general
subjects, and narrow the subjects into sub-topics and further
sub-topics. The outline itself should have no more than eight
levels of sub-topics.

   A typical printed reference guide has a table of contents
and body of text, and an optional index. An EZHelp text file
contains the same elements. The items in the outline become
topic definition lines in the text. The text can be entered
first, and the EZhelp topic lines inserted later, or the topic
lines can be entered first, and the text inserted between them.

   Topic lines include the name of the topic, the menu number,
the order within the menu, and sub-topics to follow, if
applicable. If there are no sub-topics to follow, the text
after the topic line will be displayed.

{{ Creating topics, 2,2,0 }}

   Working from your outline, you can create Topic Descriptions
that will be displayed in the pop-up menus. The topic itself is
a line of text that is inserted in your document, just above
the point where the help text begins for that topic.

The topic consists of:

  {{  topic name,    menu #,    menu order,     next menu  }}

    ■ {{ - double brackets placed in the text will begin
      a topic definition. A topic definition is ended with
      another set of brackets }}.

    ■ topic name - you may use up to nineteen characters for
        the topic, beginning with the first left character.

    ■ menu # - this will identify the group of topics which
        are to be shown on the same menu. The outermost menu,
        or most general, should begin with 1 as a rule.
++
    ■ menu order - this will specify the order of the topic
        among the other topics in the menu, from top to
        bottom. If you wish the menu topics to be sorted
        alphabetically, use 0 for the order number in each
        topic in the menu.

    ■ next menu - if this topic leads to another topic
        sub-menu, use the sub-menu number. If this topic leads
        to the help text (the help text follows the topic in
        the document), use 0.

The topic which defined the text you are now reading is:

    {{ Creating topics, 2,2,0 }}
++
   Note that each item in the topic should be followed with a comma.
The spacing between the parameters is not critical, but only numbers
should be used for the last three. Menu numbers may be 1 - 256, although
the maximum number of menu layers is 16. The topic definition must
contain a complete set of brackets, parameters, and commas, or an error
will occur during compilation.
++
Here is an example of a complete set of menu definitions
for a reference describing methods of transportation:

{{ Land,          1,  1,  2     }}
{{ Water,         1,  2,  3     }}   menu 1, 3 topics
{{ Air,           1,  3,  4     }}   ________________

{{ Car,           2,  1,  0     }}
{{ Bicycle,       2,  2,  0     }}   menu 2, 3 topics
{{ Feet,          2,  3,  0     }}   ________________

{{ Speedboat,     3,  1,  0     }}
{{ Yacht,         3,  2,  0     }}   menu 3, 3 topics
{{ Jet ski,       3,  3,  0     }}   ________________

{{ Airlines,      4,  1,  0     }}
{{ Hang glider,   4,  2,  0     }}   menu 4, 2 topics

Note that menu in menu 1, topic "Land" defines a next
menu, 2. Also in menu 1, topic "Water" defines a next
menu 3, and topic "Air" defines a next menu 4.
{{ Entering text,   2,3,0 }}

  This is the basic layout of an EZhelp text file:
┌──────────────────────────┐
│ .beginning of file       │
│                          │
│    Comments (a)          │  (a) Optional comments may be placed
│                          │    at the beginning of the file, until
│ Topic definition (b)     │    the first Topic definition.
│                          │
│    Accompanying text (c) │  (b) A topic definition line will
│                          │    always be followed with Accompanying
│ Topic definition (b)     │    text unless another menu is to
│                          │     follow.
│    Accompanying text (c) │
│                          │  (c) The accompanying text will be
│ Topic definition (b)     │    assumed to continue until the next
│                          │    topic definition is found, or the
│    Accompanying text (c) │    end of the file is reached.
│                          │
│ .end of file             │
└──────────────────────────┘
++
An EZhelp text file MUST conform to these three guidelines:

■ Carriage return/line feed  (CR/LF):

   A carriage return/line feed pair must terminate every line in
the file. What this means for text written with many commercial
word processors (Microsoft Word, Wordperfect, others) is that it
will likely be neccessary to press the return key at the end of
each line, rather than letting the line wrap around.

   One way to tell if your word processor generates the CR/LF at
the end of each line is to use the DOS "TYPE" command to view the
text file on the screen. If the text is not indented as you would
see it in the word processor, then you will need to press return
at the end of each line.

   Avoid using the tab key in the text. Instead, indent using
the space bar. All other text formatting commands used by your
word processor should be avoided also. If it is possible, save
the file with your word processor in unformatted mode.
++
■ Line length:

   A line MUST be 76 characters or less. If the line is longer
than 76 characters, unexpected results may occur. One common
result is when the entire page shifts up by one line. Take care
to follow this guideline.

■ Recompiling:

   The reference text file must be recompiled after each time
it is modified. If it is not recompiled, the help text displays
will overlap, and the topic definition line may be visible on
the screen.

{{ Imbedded commands, 2,3,0 }}

   You can imbed commands in your reference to control the display.
The commands must begin on the 1st column of a line.

  Command     Action
  --------    ----------------------------------------------

     ++       Forces the page to break at that point.

{{ Files involved,  3,1,0 }}

   "MYFILE.TXT",  when compiled, creates an index "MYFILE.HNX".

   ┌────────┐          ┌───────────────┐          ┌─────────┐
   │        │          │               │          │         │
   │  Text  │  ----->  │  EZcomp.exe   │  ----->  │  Text   │
   │  file  │  ----->  │  (compiler)   │  ----->  │  index  │
   │        │          │               │          │         │
   └────────┘          └───────────────┘          └─────────┘


      The index file name is created using the first part of the
   text file name and adding ".hnx" as the extension. The index
   file will be placed in the same subdirectory as the text file.

{{ Command line,    3,2,0 }}

   Use: EZcomp MYFILE.TXT [-pu] [-ps]

      From the DOS prompt, enter the following command to compile
   a help text file:

   EZcomp MYFILE.TXT

   The compiler runs for a moment, creates the index "myfile.hnx"
   using the text file "myfile.txt", and returns to the DOS prompt.

   To compile the text and print an unsorted report of the topics,
   enter this command:

   EZcomp MYFILE.TXT -pu

   To print a sorted report of the topics, substitute "-ps" on the
   command line, or include both "-pu" and "-ps" for both reports.

{{ Reporting,       3,3,0 }}

   Shown below is a sample report generated by EZcomp.exe. The report
can be printed in the natural order that topic definitions are found
in the text, or in sorted order.

----------------------------------------------------------------------
EZcomp v1.4   Reference Index report, unsorted: transpor.txt   Page  1
----------------------------------------------------------------------

Menu    Menu                     Next  Line    Line
number  order   Topic            menu  number  count   Offset  Size
------  ------  ---------------  ----  ------  ------  ------  ------
     1       1  Land                2      35       4    1117      63
     1       2  Water               3      39       4    1214      63
     1       3  Air                 4      43       4    1311      63

     2       1  Car                        47       4    1408      53
     2       2  Bicycle                    51       4    1495      57
     2       3  Feet                       55       4    1586      45
   .
   .
   .
{{ Memory needed,   4,1,0 }}

   EZhelp menus and help text windows allocate and release memory
as they are used. The amount of memory required will depend on the
size and levels of the menus. The program will have a pool of free
memory to use up to 64k. If there is no free memory to allocate,
the program will display an error message and exit.

{{ Files involved,  4,2,0 }}

                           ┌───────────────┐          ┌────────┐
   EZhelp.exe uses the     │               │  <-----  │  Text  │
   reference file created  │               │  <-----  │  index │
   with a word processor   │  EZhelp.exe   │          └────────┘
   or text editor, and     │  (help text   │
   the index created with  │   driver)     │          ┌────────┐
   EZcomp, to drive the    │               │  <-----  │  Text  │
   displays of menus and   │               │  <-----  │  file  │
   reference text.         └───────────────┘          └────────┘

{{ Command line,    4,3,0 }}

Use: EZhelp MYFILE.TXT [-Mnnn -Jnnn -Bn -Snn -Tmenu_title
                        -An -Dn -En -Ln -On]

MYFILE.TXT   The name of a text reference file to be used. Up to
             40 characters may be used for the full path and file
             name. The index MYFILE.HNX is assumed to reside in
             the same subdirectory.

-Mnnn        The number of the menu to start at. The program will
             begin by displaying the Topic descriptions for that
             menu, as defined in MYFILE.TXT. All subsequent menus
             from the point of the startup menu will be accessible.
             If none is specified, the default is 1. The maximum
             menu value possible is 255.

-Jnnn        The number of the topic in the start menu specified
             to display directly. If the -Jnn option is used, the
             menu will not be shown, and the help text for topic
             -Jnnn in menu -Mnnn will display. The maximum topic
             value possible is 255.
++
-Bn          A number to define the menu and help text window
             borders. There are four different choices, as shown
             below. The default is 1.

                      ┌───┐   ╒═══╕   ╔═══╗   ╓───╖
                      │ 1 │   │ 2 │   ║ 3 ║   ║ 4 ║
                      └───┘   ╘═══╛   ╚═══╝   ╙───╜

-Snn         A number to define the size (in lines) of the help text
             window display. The minimum window size is 4, and the
             maximum is 23. The default is 23 lines.

-Tmenu_title This will allow EZhelp to use the specified string 
             as the default for the startup menu. If two words
             are needed for the string, use the underbar character
             to separate them. The underbar will be replaced with
             a space at runtime.
++
---------------------------------------------------------------------
Override options - To set the option ON, use 1. To set it OFF, use 0.
---------------------------------------------------------------------

-An          Automatic window sizing? When OFF, window width
             will always be 80 columns.  Default = ON

-Dn          Display page numbers at the lower left? Default = ON

-En          Display error messages if an error occurs? Default = ON

-Ln          Anchor the reference at one of nine areas
             of the screen, like so:
                                            ┌───┬───┬───┐
                                            │ 1 │ 2 │ 3 │
                                            ├───┼───┼───┤
                   The default is 5,        │ 4 │ 5 │ 6 │
                   the center.              ├───┼───┼───┤
                                            │ 7 │ 8 │ 9 │
                                            └───┴───┴───┘
-On          Overlap windows? Default = OFF

Examples:

   1) EZhelp MYFILE.TXT

      Start MYFILE.TXT at menu 1, use all defaults.

   2) EZhelp MYFILE.TXT -M4 -J7 -S15

      Jump directly to the display of topic 7 in menu 4.
      Set the referece window size to 15 lines.

   3) EZhelp MYFILE.TXT  -E1 -A0 -L8

      Start MYFILE.TXT with error messages and automatic
      window sizing OFF. Display text at the lower center
      of the screen.

Note: The order of the specified options is not critical.
{{ Examples,        4,3,90 }}

   .... menu 90 is next ....

{{ Distribution,    4,5,0 }}

   You may distribute copies of this
package in its complete form, including
EZhelp.exe, EZcomp.exe, EZsetup.exe,
EZhelp.txt and EZhelp.hnx, and user's
guide. We encourage you to do so.

   Registered users may bundle EZhelp
with their own applications and
distribute unlimited copies.

   For more information on registering
EZhelp Reference, select the
"Registering" topic.

{{ Future enhancments,     4,6,0 }}

   This is a list of enhancements that are under
consideration for the next version of EZhelp.

   Additional imbedded commands
   Hypertext links to other topics
   Help text printing
   Additional text in menu window

   If you have any suggestions for enhancements
to this program, call or write the address on
the Registration form screen.

{{ -------------------, 4,7,0 }}

{{ Quick summary,   4,8,0 }}

─────────────────────── Topic definitions ─────────────────────────
{{  topic name,    menu #,       menu order,     next menu  }}

    1 - 19 chars   all of the    0 = sort on     0 = display
    ended with a   topics in     topic name;     text to follow;
    comma          a menu have   Other - use     Other - display
                   the same #    order chosen    the next menu

─────────────────── Compiling a reference file ────────────────────
EZcomp MYFILE.TXT [-pu] [-ps]

Note: Use your own help text file in place of MYFILE.TXT. Use the
      -pu and -ps options to print a report on the text file
      topics, unsorted or sorted.

───────────────────────── Running EZhelp ──────────────────────────
Use: EZhelp MYFILE.TXT [-Mnnn -Jnnn -Bn -Snn -Tmenu_title
                        -An -Dn -En -Ln -On]

{{ Registration form,   5,1,0 }}

The basic registration of EZhelp Reference includes:

    ■ Registered diskette   ■ Telephone support
    ■ User's guide booklet  ■ 1 low-cost update

          Press the PgDn key to view the
          registration form/user profile.

           With the form on the screen,
             press the PrintScrn key
                to print a copy.
++
       R e g i s t r a t i o n   F o r m  /  U s e r   P r o f i l e
............................................................................
          Name .                                 send: Brain Child Systems
       Company .                                   to: P.O. Box 3882
       Address .                                     : Austin, TX 78764
City State ZIP .                                     : (512) 442-1713
  Phone number .
               .
What type of   .
reference have .
you developed? .
               ..................................................
Today's date   .                   . Basic Registration  25.00   ......... 
EZhelp version .                   .       and/or
Diskette size  .                   . Registered Upgrade   5.00   .........
               .                   .
Where did you  .                   . TX resident tax     X  8%   .........
find EZhelp?   .                   .
               .                   . Total                       .........
Ser.........................................................................
    Twenty percent of each Basic Registration and Registered Upgrade fee
         will be donated to a non-profit, charitable organization.
{{ The 50/50 offer,     5,2,0 }}

   During 1991, we would like to extend a special
offer to those of you who donate to charities this
year. If you send us a photocopy of a reciept for
a tax-deductible donation of at least $50 to a
non-profit organization, you can take 50% off of
the Basic Registration price! You may photocopy
multiple receipts, as long as they add up to $50
or more. (Registered Upgrade not elgible)

This is a trial offer for 1991. If it induces you
to register, please say so.

{{ Upgrade info,        5,3,0 }}

EZhelp Reference v1.4   (last version 1.2)

Enhancements   ■ Better reference window control, anchoring, and sizing.
               ■ A page break command can be imbedded in reference text
                 by typing '++' as the first characters on a line.
               ■ Window overlap option allows reference pages to overlap
                 on the screen, rather than clearing the screen each time.
               ■ Improved compiler speed.
               ■ EZhelp Command line option "-T" allows a menu title to
                 be selected for the first menu display.

Bug fixes      Yes, everybody has 'em. These listed here have been fixed.
               ■ EZcomp not compiling files > 64k.
               ■ Text sometimes incorrect for topics in 2nd or 3rd column.

{{ Introduction,        6, 1, 0 }}
............................................................................




                          I N T R O D U C T I O N

                                   T O

                     E Z h e l p   R e f e r e n c e

                               version 1.4

                        A ShareWare reference tool

              (C) Copyright Brain Child Systems, 1990-1991

                           All rights reserved




............................................................................

   EZhelp Reference is a set of tools to create and display a menu-
driven text reference. Virtually any information kept in a text
file (such as letters, users's guide files, office procedures) can
be turned into an EZhelp Reference file in a matter of minutes.
EZhelp Reference is easy enough for a novice to use productively,
but it also has features that programmers can appreciate, for use
with their own programs.

   This reference guide is driven by EZhelp, and describes how to
set up your own text files for in-house use or distribution. Take
a moment to read the help topics and move through the different
menu levels.

   Any suggestions you have for the program would be appreciated.
Check the Future enhancements topic for a list of the features
planned for the next version. If you are a user of version 1.2,
read the upgrade topic to see what's new.

                   Thanks for trying the program!
++
EZhelp Reference consists of three programs:

  EZcomp.EXE -  A text compiler program that creates an index on
                help reference files. This index is used by
                EZhelp at runtime.

  EZhelp.EXE  - The help display engine that drives the display
                of the reference text, using the index created
                by EZcomp.

  EZsetup.EXE - A utility program used to create a customized
                file of startup options used by EZhelp.

You will need a text editor or word processor to create your
reference with. There are a few issues to be aware of when using
a word processor. For more information, select the "Entering text"
menu. You will also be more successful if you follow the hints on
organizing your topics. More information can be found in the
"Forming Outline" menu.

{{ Features,            6, 2, 0 }}

EZhelp features:

  ■ quick text compiler with optional topic
    sorting, reference report, error messages

  ■ pop-up menus
  ■ choice of line style
  ■ choice of colors on five screen items
  ■ manual/automatic text window sizing
  ■ optional page number display
  ■ choice of PageUp/PageDn/Escape messages
  ■ anchor text on one of nine screen areas
  ■ start at any menu level
  ■ jump directly to any help topic

  ■ 1 low-cost update

{{ 1 more menu,    90,0,91 }}

   .... menu 91 is next ....

{{ 2 aaaaaaaaaaaa, 90,0,0  }}
{{ 3 aaaaaaaaaaaa, 90,0,0  }}
{{ 4 aaaaaaaaaaaa, 90,0,0  }}
{{ 5 aaaaaaaaaaaa, 90,0,0  }}
{{ 6 aaaaaaaaaaaa, 90,0,0  }}
{{ 7 aaaaaaaaaaaa, 90,0,0  }}
{{ 8 aaaaaaaaaaaa, 90,0,0  }}
{{ 9 aaaaaaaaaaaa, 90,0,0  }}
{{ 10 aaaaaaaaaaa, 90,0,0  }}
{{ 11 aaaaaaaaaaa, 90,0,0  }}
{{ 12 aaaaaaaaaaa, 90,0,0  }}
{{ 13 aaaaaaaaaaa, 90,0,0  }}
{{ 14 aaaaaaaaaaa, 90,0,0  }}
{{ 15 aaaaaaaaaaa, 90,0,0  }}
{{ 16 aaaaaaaaaaa, 90,0,0  }}
{{ 17 aaaaaaaaaaa, 90,0,0  }}
{{ 18 aaaaaaaaaaa, 90,0,0  }}
{{ 19 aaaaaaaaaaa, 90,0,0  }}
{{ 20 aaaaaaaaaaa, 90,0,0  }}
{{ 21 aaaaaaaaaaa, 90,0,0  }}
{{ 22 aaaaaaaaaaa, 90,0,0  }}
{{ 23 aaaaaaaaaaa, 90,0,0  }}
{{ 24 aaaaaaaaaaa, 90,0,0  }}
{{ 25 aaaaaaaaaaa, 90,0,0  }}
{{ 26 aaaaaaaaaaa, 90,0,0  }}
{{ 27 aaaaaaaaaaa, 90,0,0  }}
{{ 28 aaaaaaaaaaa, 90,0,0  }}
{{ 29 aaaaaaaaaaa, 90,0,0  }}
{{ 30 aaaaaaaaaaa, 90,0,0  }}
{{ 31 aaaaaaaaaaa, 90,0,0  }}
{{ 32 aaaaaaaaaaa, 90,0,0  }}
{{ 33 aaaaaaaaaaa, 90,0,0  }}
{{ 34 aaaaaaaaaaa, 90,0,0  }}
{{ 35 aaaaaaaaaaa, 90,0,0  }}
{{ 36 aaaaaaaaaaa, 90,0,0  }}
{{ 37 aaaaaaaaaaa, 90,0,0  }}
{{ 38 aaaaaaaaaaa, 90,0,0  }}
{{ 39 aaaaaaaaaaa, 90,0,0  }}
{{ 40 aaaaaaaaaaa, 90,0,0  }}
{{ 41 aaaaaaaaaaa, 90,0,0  }}
{{ 42 aaaaaaaaaaa, 90,0,0  }}
{{ 43 aaaaaaaaaaa, 90,0,0  }}
{{ 44 aaaaaaaaaaa, 90,0,0  }}
{{ 45 aaaaaaaaaaa, 90,0,0  }}
{{ 46 aaaaaaaaaaa, 90,0,0  }}
{{ 47 aaaaaaaaaaa, 90,0,0  }}
{{ 48 aaaaaaaaaaa, 90,0,0  }}
{{ 49 aaaaaaaaaaa, 90,0,0  }}
{{ 50 aaaaaaaaaaa, 90,0,0  }}
{{ 51 aaaaaaaaaaa, 90,0,0  }}
{{ 52 aaaaaaaaaaa, 90,0,0  }}
{{ 53 aaaaaaaaaaa, 90,0,0  }}
{{ 54 aaaaaaaaaaa, 90,0,0  }}
{{ 55 aaaaaaaaaaa, 90,0,0  }}
{{ 56 aaaaaaaaaaa, 90,0,0  }}
{{ 57 aaaaaaaaaaa, 90,0,0  }}
{{ 58 aaaaaaaaaaa, 90,0,0  }}
{{ 59 aaaaaaaaaaa, 90,0,0  }}
{{ 60 aaaaaaaaaaa, 90,0,0  }}
{{ 61 aaaaaaaaaaa, 90,0,0  }}
{{ 62 aaaaaaaaaaa, 90,0,0  }}
{{ 63 aaaaaaaaaaa, 90,0,0  }}
{{ 64 aaaaaaaaaaa, 90,0,0  }}
{{ 65 aaaaaaaaaaa, 90,0,0  }}
{{ 66 aaaaaaaaaaa, 90,0,0  }}
{{ 67 aaaaaaaaaaa, 90,0,0  }}
{{ 68 aaaaaaaaaaa, 90,0,0  }}
{{ 69 aaaaaaaaaaa, 90,0,0  }}

{{ 1 more menu,    91,0,92 }}

   .... menu 92 is next ....

{{ 2 bbbbbbbbbbbb, 91,0,0  }}
{{ 3 bbbbbbbbbbbb, 91,0,0  }}
{{ 4 bbbbbbbbbbbb, 91,0,0  }}
{{ 5 bbbbbbbbbbbb, 91,0,0  }}
{{ 6 bbbbbbbbbbbb, 91,0,0  }}
{{ 7 bbbbbbbbbbbb, 91,0,0  }}

{{ 1 cccccccccccc, 92,0,0  }}
{{ 2 cccccccccccc, 92,0,0  }}
{{ 3 cccccccccccc, 92,0,0  }}
{{ 4 cccccccccccc, 92,0,0  }}
{{ 5 cccccccccccc, 92,0,0  }}
{{ 6 cccccccccccc, 92,0,0  }}
{{ 7 cccccccccccc, 92,0,0  }}
{{ 8 cccccccccccc, 92,0,0  }}
{{ 9 cccccccccccc, 92,0,0  }}
{{ 10 ccccccccccc, 92,0,0  }}
{{ 11 ccccccccccc, 92,0,0  }}
{{ 12 ccccccccccc, 92,0,0  }}
{{ 13 ccccccccccc, 92,0,0  }}
{{ 14 ccccccccccc, 92,0,0  }}
{{ 15 ccccccccccc, 92,0,0  }}
{{ 16 ccccccccccc, 92,0,0  }}
{{ 17 ccccccccccc, 92,0,0  }}
{{ 18 ccccccccccc, 92,0,0  }}
{{ 19 ccccccccccc, 92,0,0  }}
{{ 20 ccccccccccc, 92,0,0  }}
{{ 21 ccccccccccc, 92,0,0  }}
{{ 22 ccccccccccc, 92,0,0  }}
{{ 23 ccccccccccc, 92,0,0  }}
{{ 24 ccccccccccc, 92,0,0  }}
{{ 25 ccccccccccc, 92,0,0  }}
{{ 26 ccccccccccc, 92,0,0  }}
{{ 27 ccccccccccc, 92,0,0  }}
{{ 28 ccccccccccc, 92,0,0  }}
{{ 29 ccccccccccc, 92,0,0  }}
{{ 30 ccccccccccc, 92,0,0  }}
{{ 31 ccccccccccc, 92,0,0  }}
{{ 32 ccccccccccc, 92,0,0  }}
{{ 33 ccccccccccc, 92,0,0  }}
{{ 34 ccccccccccc, 92,0,0  }}
{{ 35 ccccccccccc, 92,0,0  }}
```
{% endraw %}

## EZSETUP.TXT

{% raw %}
```
EZsetup.txt    Reference file for EZsetup utility

{{ About EZsetup,  1,  1,  0 }}

   This setup program allows you to select start-up options that will
be used by EZhelp at runtime. A file will be created by the name of
EZhelp.dat, and it can be placed in a subdirectory with whichever
reference file is to be used with EZhelp. This is Setup 1, which
controls the colors and style of the help menu and reference window.

   To select an option, press Tab and move the »» color selector.
   To change the color or style of the option, use the arrow keys.
   To move to Setup 2, press F5. To save the options, press F10.
   To exit, press escape.
++
You can use the reference displayed
here as a preview of each change you
make to colors or options. Just
save the options by pressing F10,
then press F1 to see how the changes
look with EZhelp running.

{{ Title color,    1,  2,  0 }}
The title color will be used for the menu names, and the name of
the help reference window (the last menu topic selected).
{{ Window color,   1,  3,  0 }}
The window color will cover the un-hilited topics in each window,
and the help text color displayed in the reference windows.
{{ Hilite color,   1,  4,  0 }}
The hilite color appears on the moving selection bar on the
menu topics.
{{ Letter color,   1,  5,  0 }}
You may select a color for the first letter of each topic in
a menu.
{{ Border color,   1,  6,  0 }}
The border color will be used for both the topic menu and the
help reference window.
{{ Border style,   1,  7,  0 }}
                                         ┌───┐  ╒═══╕  ╓───╖  ╔═══╗
There are four border styles available:  │ 1 │  │ 2 │  ║ 3 ║  ║ 4 ║
                                         └───┘  ╘═══╛  ╙───╜  ╚═══╝
{{ Auto selection, 2,  1,  0 }}
When a letter key is pressed, the hilite bar will move to the next
topic matching that letter, when possible. If Auto selection is ON,
the return key need not be pressed for selection.
{{ Window sizing,  2,  2,  0 }}
If Window sizing is ON, EZhelp will make the help reference window
as narrow as possible for the text to be displayed. With Window
sizing OFF, the window will always be 80 columns.
{{ Page number,    2,  3,  0 }}
If Page numbers is ON, and there is more help text than can fit on
screen, a page count will display on the lower left of the window
in the format "n of n".
{{ Display errors, 2,  4,  0 }}
If display errors is ON, EZhelp will display an error on screen
before returning to the calling program with the error code. This
feature is useful when a help reference is initially developed.
{{ Overlap windows,    2,  5,  0 }}
If Overlap windows is ON, the original screen will not be restored
after each window display. This will allow window displays to
overlap on the screen.
{{ PgUp string,    2,  6,  0 }}
This string (or symbol) will display when there is more text to
display ABOVE the text in the window. You can insert special
symbols such as  or , by holding down the Alt key and
pressing the corresponding ASCII code for the symbol. Here are
the ASCII codes for the example symbols:

                    = 30                 = 24
{{ PgDn string,    2,  7,  0 }}
This string (or symbol) will display when there is more text to
display BELOW the text in the window. You can insert special
symbols such as  or , by holding down the Alt key and
pressing the corresponding ASCII code for the symbol. Here are
the ASCII codes for the example symbols:

                     = 31,                = 25
{{ Exit string,    2,  8,  0 }}
EZhelp returns to the calling program when escape is pressed.
The Exit string will display in the upper left hand of the help
reference window. Enter blanks if you want no display.
{{ Help anchor,    2,  9,  0 }}

The help anchor positions the reference
  window on the screen. The window is
  divided into nine sections like so:
   ┌─────────┬─────────┬─────────┐
   │         │         │         │
   │    1    │    2    │    3    │
   │         │         │         │
   ├─────────┼─────────┼─────────┤
   │         │         │         │
   │    4    │    5    │    6    │
   │         │         │         │
   ├─────────┼─────────┼─────────┤
   │         │         │         │
   │    7    │    8    │    9    │
   │         │         │         │
   └─────────┴─────────┴─────────┘
++
Choose the number of the section where
you would like the help window to display.

{{ Quit EZSETUP?,  3,  1,  0 }}
Press 'Y' to quit EZSETUP, 'N' to continue.
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
  EZhelp Reference Registration / User Profile                     Ser.......

  Each basic registration includes:

    * Registered diskette                * 1 low-cost update
    * Telephone support                  * User's guide booklet

  Brain Child Systems                Name: __________________________________
  P.O. Box 3882
  Austin, TX 78764              (Company): __________________________________
  (512) 442-1713
                                  (Title): __________________________________
  date: ___________
                                  Address: __________________________________
  Diskette  ___ 5 1/4"
  size:                        City,State: __________________________________
            ___ 3 1/2"                                               Zip Code
                             Phone Number: _________________________
  EZhelp version: __________

  Application to use EZhelp, if any         Comments:

  ______________________________________    _________________________________

  Enhancements you would like to see:       _________________________________
  
  ___________________________________       _________________________________

  ___________________________________       _________________________________
  
  ___________________________________       _________________________________

  ___________________________________       _________________________________

     Twenty percent of your registration fee received for this package
  will be donated to charity. The donation will be made to a nationally-
  known, non-profit organization that works with disadvantaged youth and
  youth from broken homes.

  EZhelp Basic Registration ........................... 25.00     _______
          and/or
  Registered Upgrade fee ..............................  5.00     _______

  Texas residents add 8% sales tax .................... X  8%     _______


                                             Total enclosed       _______

                                                      Brain Child Systems
                         Make checks payable to:      P.O. Box 3882
                                                      Austin, TX 78764

  Terms:  Check or Money Order, payment in U.S. dollars. All orders
          outside of the contintental United States must be prepaid.
          Registered users will be notified of updates. If the
          Registered Upgrade fee is included, one update will be
          mailed when it is released.

  EZhelp Reference
  (C) Copyright 1990-1991, Brain Child Systems.
  All rights reserved.


```
{% endraw %}

## TRANSPOR.TXT

{% raw %}
```
Comment section......
Transpor.txt   Methods of transportation
------------------------------------------------------

Menu items and topics:

   Menu     Topic          Menu order     Next menu

     1      Land                1             2
     1      Water               2             3
     1      Air                 3             4

     2      Car                 1            ---
     2      Bicycle             2            ---
     2      Feet                3            ---

     3      Speedboat           1            ---
     3      Yacht               2            ---
     3      Jet ski             3            ---

     4      Airplanes           1             5
     4      Hot air baloon      2            ---

     5      Prop plane          1            ---
     5      Glider              2            ---
     5      Jet plane           3            ---

    10      Land                1            ---
    10      Water               2            ---
    10      Air                 3            ---


Topic definitions and reference text begins here.

{{ Land,          1,  1,  2     }}

   ...if the above topic is chosen, menu 2 will display

{{ Water,         1,  2,  3     }}

   ...if the above topic is chosen, menu 3 will display

{{ Air,           1,  3,  4     }}

   ...if the above topic is chosen, menu 4 will display

{{ Car,           2,  1,  0     }}

Cars are fun to drive, but not when drinking.

{{ Bicycle,       2,  2,  0     }}

Bicycles are fun to ride, but watch out for cars.

{{ Feet,          2,  3,  0     }}

Feet are the original transportation.

{{ Speedboat,     3,  1,  0     }}

Speedboats are fun, but use suntan oil.

{{ Yacht,         3,  2,  0     }}

A yacht is very fun, the stereotypical good life.

{{ Jet ski,       3,  3,  0     }}

A jet ski is fun and daring, to blow your hair back.

{{ Airplanes,     4,  1,  5     }}

if the above topic is chosen, menu 5 will display

{{ Hot air baloon,        4,  2,  0     }}

To float like a feather to the stars, divine.

{{ Prop plane,    5,  1,  0     }}

Airplanes are dangerous. Sit in the back.

{{ Hang glider,   5,  2,  0     }}

A quite peaceful way to travel.
++
  J
  o
  n
  a
  t
  h
  a
  n

  L.

  S
  e
  a
  g
  u
  l
  l

?????

{{ Jet,           5,  3,  0     }}

You'll be there before you know it.

{{ Land,         10,  1,  0     }}

This is the Land topic accessed through menu 10.
{{ Water,        10,  2,  0     }}
Water.
{{ Air,          10,  3,  0     }}

This is the Air topic accessed throught menu 10.






```
{% endraw %}

## EZSETUP.TXT

{% raw %}
```
EZsetup.txt    Reference file for EZsetup utility

{{ About EZsetup,  1,  1,  0 }}

   This setup program allows you to select start-up options that will
be used by EZhelp at runtime. A file will be created by the name of
EZhelp.dat, and it can be placed in a subdirectory with whichever
reference file is to be used with EZhelp. This is Setup 1, which
controls the colors and style of the help menu and reference window.

   To select an option, press Tab and move the »» color selector.
   To change the color or style of the option, use the arrow keys.
   To move to Setup 2, press F5. To save the options, press F10.
   To exit, press escape.
++
You can use the reference displayed
here as a preview of each change you
make to colors or options. Just
save the options by pressing F10,
then press F1 to see how the changes
look with EZhelp running.

{{ Title color,    1,  2,  0 }}
The title color will be used for the menu names, and the name of
the help reference window (the last menu topic selected).
{{ Window color,   1,  3,  0 }}
The window color will cover the un-hilited topics in each window,
and the help text color displayed in the reference windows.
{{ Hilite color,   1,  4,  0 }}
The hilite color appears on the moving selection bar on the
menu topics.
{{ Letter color,   1,  5,  0 }}
You may select a color for the first letter of each topic in
a menu.
{{ Border color,   1,  6,  0 }}
The border color will be used for both the topic menu and the
help reference window.
{{ Border style,   1,  7,  0 }}
                                         ┌───┐  ╒═══╕  ╓───╖  ╔═══╗
There are four border styles available:  │ 1 │  │ 2 │  ║ 3 ║  ║ 4 ║
                                         └───┘  ╘═══╛  ╙───╜  ╚═══╝
{{ Auto selection, 2,  1,  0 }}
When a letter key is pressed, the hilite bar will move to the next
topic matching that letter, when possible. If Auto selection is ON,
the return key need not be pressed for selection.
{{ Window sizing,  2,  2,  0 }}
If Window sizing is ON, EZhelp will make the help reference window
as narrow as possible for the text to be displayed. With Window
sizing OFF, the window will always be 80 columns.
{{ Page number,    2,  3,  0 }}
If Page numbers is ON, and there is more help text than can fit on
screen, a page count will display on the lower left of the window
in the format "n of n".
{{ Display errors, 2,  4,  0 }}
If display errors is ON, EZhelp will display an error on screen
before returning to the calling program with the error code. This
feature is useful when a help reference is initially developed.
{{ Overlap windows,    2,  5,  0 }}
If Overlap windows is ON, the original screen will not be restored
after each window display. This will allow window displays to
overlap on the screen.
{{ PgUp string,    2,  6,  0 }}
This string (or symbol) will display when there is more text to
display ABOVE the text in the window. You can insert special
symbols such as  or , by holding down the Alt key and
pressing the corresponding ASCII code for the symbol. Here are
the ASCII codes for the example symbols:

                    = 30                 = 24
{{ PgDn string,    2,  7,  0 }}
This string (or symbol) will display when there is more text to
display BELOW the text in the window. You can insert special
symbols such as  or , by holding down the Alt key and
pressing the corresponding ASCII code for the symbol. Here are
the ASCII codes for the example symbols:

                     = 31,                = 25
{{ Exit string,    2,  8,  0 }}
EZhelp returns to the calling program when escape is pressed.
The Exit string will display in the upper left hand of the help
reference window. Enter blanks if you want no display.
{{ Help anchor,    2,  9,  0 }}

The help anchor positions the reference
  window on the screen. The window is
  divided into nine sections like so:
   ┌─────────┬─────────┬─────────┐
   │         │         │         │
   │    1    │    2    │    3    │
   │         │         │         │
   ├─────────┼─────────┼─────────┤
   │         │         │         │
   │    4    │    5    │    6    │
   │         │         │         │
   ├─────────┼─────────┼─────────┤
   │         │         │         │
   │    7    │    8    │    9    │
   │         │         │         │
   └─────────┴─────────┴─────────┘
++
Choose the number of the section where
you would like the help window to display.

{{ Quit EZSETUP?,  3,  1,  0 }}
Press 'Y' to quit EZSETUP, 'N' to continue.
```
{% endraw %}

## FILE2531.TXT

{% raw %}
```
Disk No: 2531                                                           
Disk Title: EZhelp Reference                                            
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: EZhelp Reference                                         
Author Version: 1.4                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Now you can build your own help system (complete with overlapping pop-up
windows) to use stand-alone, link with software, or use as an on-line   
reference.  Why have people dig for a manual when they can pop up a menu
inviting them to investigate different topics.  Then, if users select a 
menu item, an overlapping menu appears with more subtopics.  Text on the
subtopics can run several informative pages.                            
                                                                        
EZHELP REFERENCE is your tool for linking your own help facility with   
existing software, or for building on-line reference manuals into your  
programs.  A companion program helps you choose colors for borders,     
backgrounds, text and highlights.  Eight different border styles are    
available.  No programming is necessary--just occasional one-line       
commands to tell EZHELP REFERENCE how to list menu items.               
                                                                        
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
║              <<<<  PC-SIG Disk #2531 EZHELP REFERENCE  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation, type: COPY USERS.DOC PRN (press Enter)     ║
║                                                                         ║
║  To start the program, type : EZ  (press Enter)                         ║
║                                                                         ║
║  To install the program to your hard drive, type : INSTALL              ║
║                                                        (press Enter)    ║
║  To print an registration form, type: COPY ORDER.DOC PRN                ║
║                                                         (press Enter)   ║
║                                       (c) COPYRIGHT 1991, PC-SIG INC.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
  EZhelp Reference Registration / User Profile                     Ser.D213..

  Each basic registration includes:

    * Registered diskette                * 1 low-cost update
    * Telephone support                  * User's guide booklet

  Brain Child Systems                Name: __________________________________
  P.O. Box 3882
  Austin, TX 78764              (Company): __________________________________
  (512) 442-1713
                                  (Title): __________________________________
  date: ___________
                                  Address: __________________________________
  Diskette  ___ 5 1/4"
  size:                        City,State: __________________________________
            ___ 3 1/2"                                               Zip Code
                             Phone Number: _________________________
  EZhelp version: __________

  Application to use EZhelp, if any         Comments:

  ______________________________________    _________________________________

  Enhancements you would like to see:       _________________________________
  
  ___________________________________       _________________________________

  ___________________________________       _________________________________
  
  ___________________________________       _________________________________

  ___________________________________       _________________________________

     Twenty percent of your registration fee received for this package
  will be donated to charity. The donation will be made to a nationally-
  known, non-profit organization that works with disadvantaged youth and
  youth from broken homes.

  EZhelp Basic Registration ........................... 25.00     _______
          and/or
  Registered Upgrade fee ..............................  5.00     _______

  Texas residents add 8% sales tax .................... X  8%     _______


                                             Total enclosed       _______

                                                      Brain Child Systems
                         Make checks payable to:      P.O. Box 3882
                                                      Austin, TX 78764

  Terms:  Check or Money Order, payment in U.S. dollars. All orders
          outside of the contintental United States must be prepaid.
          Registered users will be notified of updates. If the
          Registered Upgrade fee is included, one update will be
          mailed when it is released.

  EZhelp Reference
  (C) Copyright 1990-1991, Brain Child Systems.
  All rights reserved.


```
{% endraw %}

## TRANSPOR.TXT

{% raw %}
```
Comment section......
Transpor.txt   Methods of transportation
------------------------------------------------------

Menu items and topics:

   Menu     Topic          Menu order     Next menu

     1      Land                1             2
     1      Water               2             3
     1      Air                 3             4

     2      Car                 1            ---
     2      Bicycle             2            ---
     2      Feet                3            ---

     3      Speedboat           1            ---
     3      Yacht               2            ---
     3      Jet ski             3            ---

     4      Airplanes           1             5
     4      Hot air baloon      2            ---

     5      Prop plane          1            ---
     5      Glider              2            ---
     5      Jet plane           3            ---

    10      Land                1            ---
    10      Water               2            ---
    10      Air                 3            ---


Topic definitions and reference text begins here.

{{ Land,          1,  1,  2     }}

   ...if the above topic is chosen, menu 2 will display

{{ Water,         1,  2,  3     }}

   ...if the above topic is chosen, menu 3 will display

{{ Air,           1,  3,  4     }}

   ...if the above topic is chosen, menu 4 will display

{{ Car,           2,  1,  0     }}

Cars are fun to drive, but not when drinking.

{{ Bicycle,       2,  2,  0     }}

Bicycles are fun to ride, but watch out for cars.

{{ Feet,          2,  3,  0     }}

Feet are the original transportation.

{{ Speedboat,     3,  1,  0     }}

Speedboats are fun, but use suntan oil.

{{ Yacht,         3,  2,  0     }}

A yacht is very fun, the stereotypical good life.

{{ Jet ski,       3,  3,  0     }}

A jet ski is fun and daring, to blow your hair back.

{{ Airplanes,     4,  1,  5     }}

if the above topic is chosen, menu 5 will display

{{ Hot air baloon,        4,  2,  0     }}

To float like a feather to the stars, divine.

{{ Prop plane,    5,  1,  0     }}

Airplanes are dangerous. Sit in the back.

{{ Hang glider,   5,  2,  0     }}

A quite peaceful way to travel.
++
  J
  o
  n
  a
  t
  h
  a
  n

  L.

  S
  e
  a
  g
  u
  l
  l

?????

{{ Jet,           5,  3,  0     }}

You'll be there before you know it.

{{ Land,         10,  1,  0     }}

This is the Land topic accessed through menu 10.
{{ Water,        10,  2,  0     }}
Water.
{{ Air,          10,  3,  0     }}

This is the Air topic accessed throught menu 10.






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2531

     Volume in drive A has no label
     Directory of A:\

    README            1378   2-28-91
    EZHELP   EXE     36414   2-28-91
    EZCOMP   EXE     24992   2-28-91
    EZSETUP  EXE     39556   2-28-91
    EZSETUP  TXT      4575   2-28-91
    EZSETUP  HNX       612   2-28-91
    EZHELP   TXT     27354   2-28-91
    EZHELP   HNX      5040   2-28-91
    EZHELP   DAT       122   2-28-91
    TRANSPOR HNX       612   2-28-91
    TRANSPOR TXT      2680   2-28-91
    ANCHOR   HNX       576   2-28-91
    ANCHOR   TXT      1311   2-28-91
    USERS    DOC     41943   2-28-91
    ORDER    DOC      2654   2-28-91
    INSTALL  BAT      1197   2-28-91
    EZ       BAT        61   2-28-91
    EX1      BAT      2190   2-28-91
    EX2      BAT        19   2-28-91
    EZHELP14 ZIP     97364   2-28-91
    GO       BAT        28   4-19-91   8:52a
    GO       TXT      1002   4-19-91   9:01a
    FILE2531 TXT      2073   4-19-91   9:03a
    SRC          <DIR>    
           24 file(s)     293753 bytes

     Directory of A:\SRC

    .            <DIR>    
    ..           <DIR>    
    SPAWNHLP C        2641   2-28-91
            3 file(s)       2641 bytes

    Total files listed:
           27 file(s)     296394 bytes
                           11264 bytes free
