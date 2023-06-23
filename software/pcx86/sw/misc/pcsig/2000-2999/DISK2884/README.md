---
layout: page
title: "PC-SIG Diskette Library (Disk #2884)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2884/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2884"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BINGO.DOC

{% raw %}
```





                       The Bingo Programmer's Text Editor
                               A Shareware Product
                                  Version 2.11
















                                Reference Manual
                            Copyright 1989,1990,1991
                            Christopher R. S. Schanck

                                  May 10, 1992




                                Table of Contents
                                -----------------

     Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . .    2
          Philosophy . . . . . . . . . . . . . . . . . . . . . . . . .    3
          The Shareware Concept and Registering  . . . . . . . . . . .    5
          PsL Shareware Registration . . . . . . . . . . . . . . . . .    6
          Things to Possibly Come  . . . . . . . . . . . . . . . . . .    7
          Support  . . . . . . . . . . . . . . . . . . . . . . . . . .    8
          CompuServe . . . . . . . . . . . . . . . . . . . . . . . . .    9
          Getting the Latest Version . . . . . . . . . . . . . . . . .   10
          Using this Manual  . . . . . . . . . . . . . . . . . . . . .   11

     Critical Short Sections . . . . . . . . . . . . . . . . . . . . .   12
          Installing Bingo . . . . . . . . . . . . . . . . . . . . . .   12
          Invoking Bingo . . . . . . . . . . . . . . . . . . . . . . .   13
          The BINGO.INI file . . . . . . . . . . . . . . . . . . . . .   14
          Virtual Memory & the PAGESIZE Utility  . . . . . . . . . . .   15
          Impact of Virtual Memory on Performance  . . . . . . . . . .   16
          Bingo and Larger Screen Displays . . . . . . . . . . . . . .   17
          How Bingo Swaps Out of Memory and Back . . . . . . . . . . .   18
          Bingo's Menu System  . . . . . . . . . . . . . . . . . . . .   20
          Bingo's Dialogue Boxes . . . . . . . . . . . . . . . . . . .   21
               String Entry Boxes  . . . . . . . . . . . . . . . . . .   21
               Yes/No Boxes  . . . . . . . . . . . . . . . . . . . . .   21
               Non-Editable Display Boxes  . . . . . . . . . . . . . .   21
               List-Picking Boxes  . . . . . . . . . . . . . . . . . .   22
          Directory Lister . . . . . . . . . . . . . . . . . . . . . .   23
          Bingo and File Names . . . . . . . . . . . . . . . . . . . .   24
          The Status Line  . . . . . . . . . . . . . . . . . . . . . .   25
          KEYCFG: The Keyboard Configuration Program . . . . . . . . .   26
               Key Names . . . . . . . . . . . . . . . . . . . . . . .   26
               'open_end' Identifier . . . . . . . . . . . . . . . . .   29
               'cur_file' Identifier . . . . . . . . . . . . . . . . .   30
               KEYCFG Command Line Options . . . . . . . . . . . . . .   31
          Bingo & The Mouse  . . . . . . . . . . . . . . . . . . . . .   32
               The Mouse Cursor  . . . . . . . . . . . . . . . . . . .   32
               The Mouse at the General Editing Level  . . . . . . . .   32
               The Mouse and The Menus . . . . . . . . . . . . . . . .   34
               The Mouse & Dialogue Boxes  . . . . . . . . . . . . . .   35
                    String Entry Boxes . . . . . . . . . . . . . . . .   35
                    Yes/No Boxes . . . . . . . . . . . . . . . . . . .   35
                    Non-Editable Display Boxes . . . . . . . . . . . .   35
                    List-Picking Boxes . . . . . . . . . . . . . . . .   35
               The Mouse and The ASCII Table . . . . . . . . . . . . .   36
          Bingo and 4Dos . . . . . . . . . . . . . . . . . . . . . . .   37

     Basic Editing . . . . . . . . . . . . . . . . . . . . . . . . . .   38
          The Destructive Backspace  . . . . . . . . . . . . . . . . .   38
          Delete EOL vs. Delete Line vs. Delete BOL  . . . . . . . . .   38
          Deleting Words . . . . . . . . . . . . . . . . . . . . . . .   38

     File Handling . . . . . . . . . . . . . . . . . . . . . . . . . .   39
          Edit_file & Load_file  . . . . . . . . . . . . . . . . . . .   39




          Choose_file  . . . . . . . . . . . . . . . . . . . . . . . .   39
          Rename_file  . . . . . . . . . . . . . . . . . . . . . . . .   39
          Quit . . . . . . . . . . . . . . . . . . . . . . . . . . . .   39
          Quit_all . . . . . . . . . . . . . . . . . . . . . . . . . .   40
          Abort & Abort_all  . . . . . . . . . . . . . . . . . . . . .   40
          Delete_file  . . . . . . . . . . . . . . . . . . . . . . . .   40
          Zap_file . . . . . . . . . . . . . . . . . . . . . . . . . .   40
          Modify_save & Modify_save_all  . . . . . . . . . . . . . . .   40
          Switch_file  . . . . . . . . . . . . . . . . . . . . . . . .   40
          Clean_file & Clean_all . . . . . . . . . . . . . . . . . . .   40
          Pick_file  . . . . . . . . . . . . . . . . . . . . . . . . .   40

     Searching . . . . . . . . . . . . . . . . . . . . . . . . . . . .   42
          Regular Expression Search & Replace Examples . . . . . . . .   43

     Navigation  . . . . . . . . . . . . . . . . . . . . . . . . . . .   45

     Block Handling  . . . . . . . . . . . . . . . . . . . . . . . . .   46
          Marking  . . . . . . . . . . . . . . . . . . . . . . . . . .   46
          Operations on Blocks . . . . . . . . . . . . . . . . . . . .   46
          Named Buffers  . . . . . . . . . . . . . . . . . . . . . . .   47
          Miscellaneous Functions  . . . . . . . . . . . . . . . . . .   47
          Emacs_yank . . . . . . . . . . . . . . . . . . . . . . . . .   47

     Utilities . . . . . . . . . . . . . . . . . . . . . . . . . . . .   48

     Extra Functions . . . . . . . . . . . . . . . . . . . . . . . . .   49
          Help . . . . . . . . . . . . . . . . . . . . . . . . . . . .   49
          Info . . . . . . . . . . . . . . . . . . . . . . . . . . . .   49
          Pick & Exec  . . . . . . . . . . . . . . . . . . . . . . . .   49
          Quit and Save Status . . . . . . . . . . . . . . . . . . . .   49
          Global . . . . . . . . . . . . . . . . . . . . . . . . . . .   50
          Ascii_table  . . . . . . . . . . . . . . . . . . . . . . . .   50
          Load_ & Write_profile  . . . . . . . . . . . . . . . . . . .   50
          Repeat_last  . . . . . . . . . . . . . . . . . . . . . . . .   51
          Display_file . . . . . . . . . . . . . . . . . . . . . . . .   51
          Box Draw Mode  . . . . . . . . . . . . . . . . . . . . . . .   51
          Cmd_line . . . . . . . . . . . . . . . . . . . . . . . . . .   51

     System Operations . . . . . . . . . . . . . . . . . . . . . . . .   52
          Changing Directories . . . . . . . . . . . . . . . . . . . .   52
          Simple Execution & Shelling  . . . . . . . . . . . . . . . .   52
          Swap Execution & Shelling  . . . . . . . . . . . . . . . . .   52

     Macros  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   54
          Macro Space  . . . . . . . . . . . . . . . . . . . . . . . .   54
          Defining Macros  . . . . . . . . . . . . . . . . . . . . . .   54
          Saving Macros  . . . . . . . . . . . . . . . . . . . . . . .   55
          Saving the Entire Key Set  . . . . . . . . . . . . . . . . .   55
          Executing a Macro File . . . . . . . . . . . . . . . . . . .   55

     Windows . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   56
          Window_split, _edit & _load  . . . . . . . . . . . . . . . .   56
          Window_vertical  . . . . . . . . . . . . . . . . . . . . . .   56




          Window_resize  . . . . . . . . . . . . . . . . . . . . . . .   56
          Window_one & Window_zoom . . . . . . . . . . . . . . . . . .   56

     Printing  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   57

     Error Parsing and Undo  . . . . . . . . . . . . . . . . . . . . .   58
          How Error Parsing Works  . . . . . . . . . . . . . . . . . .   58
          Error Parsing Method . . . . . . . . . . . . . . . . . . . .   58
          Undo Capabilities  . . . . . . . . . . . . . . . . . . . . .   59
          Manipulating the Undo Stack  . . . . . . . . . . . . . . . .   60

     Configuring Bingo . . . . . . . . . . . . . . . . . . . . . . . .   61

     Function List . . . . . . . . . . . . . . . . . . . . . . . . . .   62
          General Editing  . . . . . . . . . . . . . . . . . . . . . .   62
          File Handling  . . . . . . . . . . . . . . . . . . . . . . .   64
          Searching  . . . . . . . . . . . . . . . . . . . . . . . . .   66
          Navigation . . . . . . . . . . . . . . . . . . . . . . . . .   68
          Block Handling . . . . . . . . . . . . . . . . . . . . . . .   71
          Utilities  . . . . . . . . . . . . . . . . . . . . . . . . .   73
          Extra Operations . . . . . . . . . . . . . . . . . . . . . .   75
          System Operations  . . . . . . . . . . . . . . . . . . . . .   77
          Macros . . . . . . . . . . . . . . . . . . . . . . . . . . .   78
          Windows  . . . . . . . . . . . . . . . . . . . . . . . . . .   79
          Printing . . . . . . . . . . . . . . . . . . . . . . . . . .   81
          Error Parsing and Undo . . . . . . . . . . . . . . . . . . .   82
          Configuration  . . . . . . . . . . . . . . . . . . . . . . .   83

     License Agreement . . . . . . . . . . . . . . . . . . . . . . . .   90

     Registration Form - Bingo 2.11  . . . . . . . . . . . . . . . . .   92

     The Author  . . . . . . . . . . . . . . . . . . . . . . . . . . .   94

     Acknowledgements  . . . . . . . . . . . . . . . . . . . . . . . .   95

     Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   96















                           Bingo 2.11 Reference Manual
                                        1




                                  Introduction
                                  ------------

          This document serves as the reference manual for Bingo 2.11. 
     Bingo is a full-featured text editor at the right price.  Some of its
     features include:

     -    high speed execution, with particularly fast searches, screen
          handling, and file I/O
     -    virtual memory for file storage; up to 240 Megabytes of file
          storage possible
     -    full color support
     -    programmable integrated mouse support
     -    support of VGA, EGA, & MCGA extended text modes
     -    superb macro capability
     -    large suite of utility functions: entab; detab; command repeat;
          shift; etc.
     -    custom define your own keyboard setup
     -    complete menu system supporting most Bingo functions
     -    multiple files, multiple windows: view different sections of the
          same file, or different files at the same time
     -    execute DOS commands, including command-line compilers within
          only ~4k of overhead
     -    regular expression search and replace
     -    completely configurable from within itself
     -    use placemarks to mark positions in files
     -    user definable help file
     -    extensive block operation support, include point, line and column
          marking, and two different sets of block operations
     -    one default block buffer, plus 26 additional named buffers
     -    wordwrap, paragraph formatting, and autoindent support included
          for text processing work
     -    C Mode supports programming in the C programming language
     -    User-defined delimiter and indentation matching
     -    directory list picker
     -    execute *any* Bingo function from within Bingo whether it has
          been assigned to a key or not using a 'function picker'
     -    interrupt Bingo at any point and exit, and when you restart Bingo
          it will pick up exactly where you left off
     -    print files & blocks through the serial port, parallel port, or
          to a file, with or without line numbers and/or page headers.
     -    set printing left margin, top margin, and lines per page
     -    automatic processing of errors generated by the Borland and
          Microsoft developmental tools.
     -    undelete stack of deleted items
     -    execute any command or macro "globally" over all files in the
          ring
     -    profile files allow file extension specific settings.
     -    box draw mode for easy screen design
     -    automated, timed backups


                           Bingo 2.11 Reference Manual
                                        2




     Philosophy
     ----------

          Text editors are not required for every system; at least, an
     editor of Bingo's power is not.  If all you require of your editor is
     that it allow you to modify batch files and such, Bingo is overkill. 
     Cheap overkill, but still overkill.  However, if you use an editor
     daily, as a programmer, as a consultant who hops from system to system
     and likes to have his/her own tools, or in any other situation where
     you need to depend on it, Bingo could very well be what you are
     looking for.  Why?  In spite of its power, Bingo is very inexpensive,
     and does some things no other editors do, as a look at its feature
     list will convince you.
          People who live with an editor daily for long stretches of time
     know that choosing an editor is a near-religious experience.  Defense
     of your choice develops into a kind of fanaticism.  In the Unix world,
     VI/Emacs wars promise to extend into the next millennium.  It was the
     fact that I could not find an editor I was truly comfortable with that
     prompted me to design Bingo.  In doing so I believe I have created an
     editor that should appeal to a broad base of users.  
          Bingo allows a large degree of latitude when it comes to
     assigning keys.  In a complementary fashion, it allows a user
     specified file to be used for help.  Further, because of Bingo's
     extensive and powerful menuing system, you do not need to memorize a
     large number of keystrokes in order to use Bingo effectively.  This
     allows you to get up and going in a minimum amount of time.
          Bingo has a large degree of programmable mouse support has been
     added.  I have found mouse use to be very nice when editing, and the
     response has been very enthusiastic.  Version 2.10e added an
     additional mouse primitive 'mouse_scroll' which, combined with the
     macro capability, allows you to scroll and drag with your mouse.
          Bingo is optimized for response time.  Screen response in
     particular is very quick, taking full advantage of the PC's direct
     video architecture.  Searches also occur at blazing speed -- a must if
     you spend many hours with an editor.
          Bingo is heavily configurable, all from within the editor itself. 
     This "on-the-fly" ability is a lifesaver if you hop from one system to
     another.
          Bingo has all the standard macro and file handling abilities, but
     it specifically excels at block handling.  Three types of marking, 27
     buffers to use, and a huge array of functions to deal with block
     operations allow you to use blocks to their fullest.
          Especially designed for programmers, Bingo includes a suite of
     utility functions to aid in handling program text.  Functions to shift
     blocks of text left and right, to align blocks, to sort blocks, to
     match delimiters, and to move by indentation are only a few of the
     many handy functions included.  In version 2.10e, you can specify just
     what a delimiter is, say "repeat" and "until".  Then you could sit on
     a "repeat", and let Bingo find the matching "until".
          With version 2.01, a powerful regular expression search and
     replace method has been added.  Further, 'profile' files, which enable

                           Bingo 2.11 Reference Manual
                                        3




     specific text settings to be associated with files having certain
     extensions, are supported.  To make this useful, each file (or buffer)
     in the ring now maintains its own set of these settings.  This allows
     you to have the correct settings for .DOC files show up when you load
     .DOC files, the correct settings for .CPP files do likewise, and so
     on.














































                           Bingo 2.11 Reference Manual
                                        4




     The Shareware Concept and Registering
     -------------------------------------
          This is just a general note as to what Bingo being Shareware
     means to you, the user.  Shareware could just as easily be called
     "Honorware": I depend upon you honor to mail in your payment for Bingo
     if you are using it regularly.  All of the legal jargon describing
     this Shareware concept is contained in the License & Registration
     section of this manual.
          Basically, I depend upon you to mail in your payment for Bingo
     after you have taken a reasonable amount of time to try it out.  If
     you use it regularly, please mail in the payment.  The number of man-
     hours which went into Bingo is incredible; the registration fee is a
     small price to pay. So if you use Bingo regularly, send me the
     registration fee I charge for Bingo -- it's not much money for a very
     sharp program.
          When you register, you are entitled to a number of advantages,
     depending on how you register.  If your registration is a Single
     Version registration ($40), these benefits include:
          1) If you request it, I will mail you a copy of the current
          release of Bingo free.
          2) You are entitled to support for 9 months, or until 1 month
          past the release of the next version, whichever is longer.
     If your registration is a Lifetime registration ($75), your benefits
     are a little more extensive.  They include:
          1) If you request it, I will mail you a copy of the current
          release of Bingo free.
          2) You are entitled to support for as long as Bingo is marketed
          as a product, be it as shareware or commercial.
          3) The next release will be mailed to you free of charge.
          4) You will be notified of each successive release, and each will
          be available to you for a mere $5.00 shipping fee.

          In addition, with version 2.01 and beyond, registered users of
     any sort get to have their named emblazoned on their copy for all to
     see;  this way everyone will know what honorable people they are.  And
     no, a simple sector editor cannot change this name -- it has to be
     done here.  The name will be shown on the initial screen which is
     popped up when bingo is executed, and can also be accessed from the
     'version_info' function.
          Also, some registered users are asked to beta-test upcoming
     versions -- a double-edged sword.  Beta testing is somewhat precarious
     at times, but you do get to take a hand in forming the next version. 
     Plus you get to have your complaints redressed faster than the general
     public.








                           Bingo 2.11 Reference Manual
                                        5




     PsL Shareware Registration
     --------------------------

          You can order directly from me at the below address or from
     Public (software) Library with your MC, Visa, AmEx or Discover
     card by calling 800-2424-PsL or 713-524-6394 or by FAX to
     713-524-6398 or by CompuServe to 71355,470 or by mail to PsL, PO
     Box 35705, Houston, Texas 77235-5705.  Bingo's order # is 10399.
     Please use this number when ordering if possible.  These numbers
     are for ordering only.  For information about dealer pricing,
     volume discounts, site licensing, shipping of product, returns,
     latest version number or other technical information, contact me
     at

                       Christopher R. S. Schanck
                       PO Box 279
                       Hanover MD 21076
                       (301) 730-9874


































                           Bingo 2.11 Reference Manual
                                        6




     Things to Possibly Come
     -----------------------
          "The one major thing which still(!) looms in Bingo's future is
          the ability to work with files larger than memory.  I am still
          thinking of implementing a virtual memory method, but it may or
          may not appear in later versions."

          This phrase, or something similar, has appeared in the
     documentation of each of the previous versions of Bingo prior to 2.10. 
     However, 2.10 introduced a fast, efficient virtual memory paradigm. 
     Theoretically, it allows you to edit up to 240 Megabytes of file
     storage -- that is a lot of files!  Practically, it means that if you
     have the disk storage, you need not worry about memory constraints
     again.  
          Implementing virtual memory necessitated almost a complete
     rewrite of Bingo.  Hence, not a lot of new functionality was
     introduced in this version; I believe the total is about 20 new
     functions, none of which add major functionality.  Several major
     things are in the works for the future, including customizable menus,
     a new window scheme, and an expanded macro language.  Further, the
     regular expression subsystem is going to be completely rewritten for
     the next release, much as the word functions were for this release.
          Currently (12/91) I am prototyping a full procedural interpreter
     which will be integrated into Bingo.  As I see it now, Bingo has a
     truly incredible amount of functionality, but it is not as accessible
     as I would like.  So, I am working on an interpreted language
     including looping, branching, functions, recursion, variables, and
     more.  This will in all liklihood constitute version 3.0, but I am not
     putting a date on it.  Language implementation is proving as hairy as
     virtual memory was ;-).






















                           Bingo 2.11 Reference Manual
                                        7




     Support
     -------

          As any of my registered users will tell you, I am committed to
     supporting Bingo.  Without my users, where would I be?  Anyone,
     registered or not, who calls or writes me will receive prompt and
     (hopefully) useful help.  I particularly like to hear of requests;
     anything you would like to see in Bingo, let me know.  One of my beta-
     testers remarked that he felt like he had a personal editor --
     anything he wanted was added.
          I am now residing in the Baltimore area.  My current address and
     phone number is:

          Christopher Schanck
          PO Box 279
          Hanover MD 21076
          (410) 799-7052

     You are welcome to call me at the above number, but while the address
     will be stable for the next several years, phone numbers do change. 
     Should this number become invalid for any reason, call (215) 691-1070
     (9am to 6pm, EST).  If you wish, you will be given a number where you
     can currently reach me, or you can leave your name and number, and I
     will return your call within 2-3 days.
          PLEASE feel free to contact me.  I very much like to hear from
     you!  


























                           Bingo 2.11 Reference Manual
                                        8




     CompuServe
     ----------
          Recently I became a subscriber to Compuserve.  You can contact me
     there as:
          70541,3614
     On the Internet, that would be:
          70541.3614@compuserve.com
     This is the fastest, most reliable way to contact me.












































                           Bingo 2.11 Reference Manual
                                        9




     Getting the Latest Version
     --------------------------
          If you have a copy of Bingo but are not sure if it is the latest
     version, the best way to find out is by calling the Computer
     Connection BBS in Washington DC.  This is a very large, well-managed
     BBS.  The latest version of Bingo will always be available here, and
     E-Mail left for me will be answered.  The number is (202) 547-2008. 
     Likewise, Bingo will always be on Compuserve, in the IBMNET section,
     generally named BINGO?.ZIP.











































                           Bingo 2.11 Reference Manual
                                       10




     Using this Manual
     -----------------
          This manual is broken into three parts.  The first is comprised
     of small sections concerned with particular little parts of Bingo,
     such as Installation and Invocation.  
          The second part consists of sections on each major functionality
     present in Bingo.  These individual sections are not tutorial in
     orientation, but rather give necessary information needed to utilize
     this functionality.  
          The final section is a listing of all of the functions supported
     by Bingo.
          I suggest that the first time user first read the initial
     sections for pertinent information, then go through the function list
     *thoroughly*.  This will give you a clear idea of the capabilities of
     Bingo.  Then, for clarification, go through the middle sections as
     needed.
          Finally, read the READ.ME file very carefully.  In some cases it
     will have information this file doesn't contain, and it may describe
     some things in greater detail as it is kept as a running log as I make
     changes.
































                           Bingo 2.11 Reference Manual
                                       11




                             Critical Short Sections
                             -----------------------

     Installing Bingo
     ----------------
          There are 3 files which are of critical importance for Bingo to
     run. 
          BE.EXE and BE.COM are the executables.  BE.EXE is the actual
     editor executable.  BE.COM is the loader file; this allows Bingo to
     swap itself in and out of memory.  Both of these files MUST, MUST,
     MUST reside in the same subdirectory (Got that?).  If you dislike
     typing 'be' at the DOS command, you CAN rename Bingo's executable. 
     Just rename both the .EXE and the .COM to be the same filename (with
     different extensions), for instance, you might shorten it to B.COM and
     B.EXE (programmer's, being lazy in their typing, will no doubt do
     this; I did ;-)  One point to remember, don't invoke the .EXE file
     directly.  As long as you have both in the same directory, you can
     type 'BE' (no extension), and the .COM file will be executed.  Or you
     can execute the .COM file directly.
          KEYCFG.SET is the compiled keyboard definition file.  This needs
     to be in the same directory as BE.EXE/.COM, or in the current
     directory.
          KEYCFG.EXE is another program of importance; it is the program
     used to generate a keyboard configuration.  It takes the name of a
     configuration file (usually BINGO.CFG) and generates a keyset file
     (usually called KEYCFG.SET).  See the section titled Configuring the
     Keyboard for more information.
          The help file BINGO.HLP, is an additional file which must be in
     the same subdirectory as BE.EXE.  When you invoke help, Bingo will
     look there for the file BINGO.HLP.  The file may contain your own
     description of the current key layout, or just about anything else you
     would like.  Bingo comes with a default help file.
          As an example, assume the Bingo distribution files are contained
     on drive A:, and you are installing Bingo on drive C:.      First,
     move to drive C: and create a directory for bingo, called \bingo using
     DOS's mkdir command.  Move to this subdirectory using 'cd \bingo'. 
     Now copy the files from drive A: over to the proper subdirectory by
     using 'copy A:*.* C:\BINGO'.
          Finally, you probably want to add 'C:\BINGO' to your PATH
     environment variable.












                           Bingo 2.11 Reference Manual
                                       12




     Invoking Bingo
     --------------
          Starting Bingo is simple.  Simply type:

               be <filespec> <filespec> ...
               be.com <filespec> <filespec> ...

     at the DOS prompt, and you are off.  One of several things will
     happen.  If each filename you gave is discreet (i.e., no wildcards),
     the files named will each be loaded, one after another.  If a filespec
     matches more than one file, a directory list of matching files will
     pop up which will allow you to choose a file or files.  See the
     section on the Directory List for further explanation.
          If no filespec is given, Bingo will ask behave as if you issued
     'be *.*'.

          You may also specify the starting line and column position for
     the each loaded file.  The '/pLL:CC' switch allows you to do this. 
     For example:

          be test.doc test2.doc /p10:5 /p20

     would load the file TEST.DOC and move to the 10th line, 5th column. 
     TEST2.DOC would begin on the 20th line.  If you do not give a column
     argument, the first column will be assumed.  

          Similarly, you can use the '-x<filename>' switch to run a macro
     file on startup.  For Example:

          be test.doc test2.doc /xfun1.mac

     would load both files, then execute the macro file FUN1.MAC inside the
     buffer holding TEST.DOC.



















                           Bingo 2.11 Reference Manual
                                       13




     The BINGO.INI file
     ------------------
          With version 2.11, Bingo's configuration settings are stored in a
     file called BINGO.INI.  When Bingo starts up, it will look first in
     the local directory, then in BE.EXE's execution directory.  If it is
     found in neither of these places, a message will appear upon startup
     indicating Bingo couldn't find its configuration file.  To create
     BINGO.INI, use the 'save_settings' function.
          Moving the settings to a seperate file means that the settings
     and the key configurations are held in 2 seperate files.  This allows
     you to effortlessly use executable compression programs such as LZEXE
     to compress BE.EXE; no longer is BE.EXE in the habit of modifying
     itself.







































                           Bingo 2.11 Reference Manual
                                       14




     Virtual Memory & the PAGESIZE Utility
     -------------------------------------
          In version 2.10, Bingo introduced a virtual memory paradigm to
     allow programmers to edit more and larger files.  Virtual memory is a
     simple, elegant, beautiful concept in the abstract; the reality, on an
     MS-DOS based PC, is a very hairy beasty indeed.  Many different
     methods for implementing virtual memory were examined.  The one I
     settled on seems a good compromise; Bingo is still quick, and the
     memory/disk swapping necessary when you are working with large files
     is relatively unobtrusive.  I still edit fairly regularly on an 8088
     machine, with a 65ms hard disk, and I find Bingo plenty fast enough. 
     On a 386 with a fast drive (say, an 80meg IDE drive with a 32k onboard
     cache), you never even realize it is swapping.
          Bingo treats file storage as a set of fixed length blocks.  As
     shipped, Bingo is generally configured for 2048 byte-sized blocks, or
     2k.  Internally, Bingo can deal with up to 16k of these blocks
     (buckets), configurable from 1k to 16k.  The blocksize, bucketsize, or
     *pagesize*, is configurable from 2k to 16k, in even increments (i.e,
     2k, 4k, 6k, 8k, etc).  The larger the pagesize, the more blocks (or
     buckets) allocated the higher the theoretical memory limit.  For
     instance, a pagesize of 16k with 8k buckets gives a theoretical memory
     limit of 128 Megabytes!  So why not just set the limits way up and be
     done with it, you ask?
          Two reasons.  First, the larger the pagesize, the harder Bingo
     works to manipulate text.  On faster machines, larger pagesizes are
     fine; on a 386/25 Mhz PC, a 16k pagesize is no problem at all.  On the
     other hand, a 2k pagesize is fine on every machine out there, hence
     the default setting.
          The larger the number of buckets allocated, the less conventional
     memory Bingo has available for use.  So allocating a lot more than you
     need is non-optimal use of your resources.
          Second, let's be serious about this.  Seldom, if ever, will
     someone really need to edit a file 200+ Megs in size.  Could happen;
     that is why I coded it as I did.  But still.  Also, do the arithmetic. 
     To edit a 200M file, you need roughly > 400M of disk storage; 200M for
     the file itself, + 200M for the swapfile, + some odd number of bytes
     for the file entries in the FAT table (grin).  Not a lot of systems
     around with several hundred megs of storage hanging about.  But we
     plan for the future.

          To set the pagesize, use the PAGESIZE.COM utility.  The syntax is

          pagesize <# of buckets> <pagesize> <.exe file>

     where <# buckets> is the number of buckets (in Kilobytes) to allocate
     on startup and <page size> is the size in Kilobytes (2,4,6,8,...,16)
     and the filename is .EXE name to configure (i.e., BE.EXE).





                           Bingo 2.11 Reference Manual
                                       15




     Impact of Virtual Memory on Performance
     ---------------------------------------
          Virtual memory has had a measurable impact on Bingo's performance
     in a number of areas.  Users coming from version 2.01 or earlier will
     appreciate this discussion of differences.  
          On the downside, general editing is, in my estimation, a touch
     slower.  Searches, scrolling, block operations, etc.  On the other
     hand,  the only machine I can tell the difference on is an ancient
     8088; use an AT-class machine, and you can't see a difference. 
     However, even on the 8088, things are by no means slow; searches and
     such are still very quick.
          One function in particular is much slower.  When you sort a
     block, things are much, *much* slower in this version.  This is not so
     much a consequence of the virtual memory per se, but of the new memory
     structure.  In version 2.01 and earlier, sorting was done with a
     recursive algorithm (N log N bound), and swapping lines meant swapping
     pointers only.  In version 2.10, a stack-based sort is not acceptable,
     because with a large file you could corrupt the stack.  So the
     excellent CombSort algorithm (April 1991 BYTE) was used instead.  This
     algorithm approximates N log N time, but is ultimately slower.  The
     real speed killer, however, is that I can no longer simply swap
     pointers.  Instead, I have to physically move the lines themselves
     around.  This is slow, slow, slow, pushing the sort time way, way up. 
     But I did not want to eliminate sorting entirely.  I use it too much
     to give up.
          On the upside, obviously, you can edit humongous files with ease,
     and a virtually unlimited number of files.  This is an obvious
     improvement.
          The other highly visible improvement is in File I/O.  File
     reading and writing has been speeded up by something approaching a
     factor of 4.  The larger you set the pagesize, the faster file IO will
     be.  ALthough increasing the pagesize past the size of a disk sector
     will generally not show a lot of improvement.



















                           Bingo 2.11 Reference Manual
                                       16




     Bingo and Larger Screen Displays
     --------------------------------
          EGA, VGA, and MCGA video display cards support displays larger
     than the standard 25 rows by 80 columns.  Bingo does support editing
     on these screen sizes.   Bingo can be set to handle screen displays in
     one of three ways:
          -    Bingo can be set to detect the current screen type and
               dimensions, and do retrace checking.
          -    Bingo can be set to detect the current screen type and size,
               but do no retrace checking.
          -    Bingo can be set to switch to 43/50 line mode if it is
               supported.  No retrace checking will be performed.
     As shipped, Bingo chooses the middle of these three courses.  The
     retrace checking is only done if you are using a color display with a
     25x80 configuration.





































                           Bingo 2.11 Reference Manual
                                       17




     How Bingo Swaps Out of Memory and Back
     --------------------------------------
          Bingo uses a somewhat common method to swap itself in and out of
     memory which has several advantages over other methods.  When you
     start Bingo, the small stub program BE.COM is run.  BE.COM immediately
     runs BE.EXE.  Memory looks like (a) after startup.

              (a)               (b)                (c)                
                                                             
           be.com 6k          be.com 6k          be.com 6k   
                                                             
           be.exe ??k         requested          be.exe ??k  
                              program ?k                     
                                                             
                                                             
                                                             
             memory             memory             memory    
                                                             
                                                             
                                                             
                                                             
                                                             

          When you swap execute out, BE.EXE saves it current status to
     disk, then executes the requested program by overlaying itself. 
     Memory now looks like (b).  
          When the requested program is finished and terminates, control
     returns to BE.COM.  BE.COM checks the original directory to see if
     Bingo was swapped out by seeing if the temporary files used to save
     Bingo's status exist.  If they do, BE.COM runs BE.EXE again.  Memory
     now looks like (c).  
          When BE.EXE begins execution, it also checks for the presence of
     the temporary status files.  If they exist, it loads their data in and
     resumes execution where it left off.

          This is a very simple method for optimal memory usage, and it has
     one very large advantage.  If, while you are swapped out, your system
     is rebooted (for instance while you are testing a just-compiled
     exectable), when you start Bingo up again, it will pick up where you
     are, no questions asked.  This is a very important advantage; you can
     swap out knowing you can do what you like without fear for your text.

          The above methodology also lends allows you some leeway.  BE.COM
     is the quickest method to manage BE.EXE swapping.  However, it is no
     the only method.  The following batchfile will work, providing the
     environment variable BINGO is set:






                           Bingo 2.11 Reference Manual
                                       18





     ----------------------- start of batch file ----------------------
     @echo off
     break off
     rem --------------------------------------------------------------
     rem The BINGO environment variable is used to denote the path spec
     rem where be.exe can be found.  Remember the trailing '\\'!
     rem For example, if BE.EXE is in C:\EDIT, use
     rem   SET BINGO=C:\EDIT\
     rem --------------------------------------------------------------
     %bingo%be.exe %1 %2 %3 %4 %5 %6 %7 %8 %9
     :toploop
     if not exist %bingo%swap0000.dat goto endloop
     %bingo%be.exe
     goto toploop
     :endloop
     ----------------------- end of batch file ------------------------

          This batch file run BE.EXE, located in the directory named by the
     BINGO environment variable, passing through up to 9 parameters.  When
     BE.EXE terminates, the batch file checks if the 'swap0000.dat' file
     exists in BE.EXE execution directory.  If it doesn't, the batch file
     terminates.  If it exists, it reruns BE.EXE.
          Using normal DOS batch interpretation, this file does not run
     particularly quickly on lower end machines.  On higher end machines,
     or if you convert it run under alternate command processors such as
     4Dos, it runs quickly indeed.  And it gives you a much greater degree
     of control over directory usage.
























                           Bingo 2.11 Reference Manual
                                       19




     Bingo's Menu System
     -------------------
          Bingo implements a comprehensive menu structure to aid you in
     utilizing Bingo's functions.  Many people, myself included, do not
     necessarily wish to spend the time to assign every function we need to
     a keyboard equivalent.  This requires a large time investment before
     you can begin using the editor.  On the other hand, it is very
     irritating when you need a particular function and cannot use it
     because you did not have the foresight to assigned it to a key
     combination.  
          Bingo's menu system was designed to handle just this situation. 
     By assigning the 'main_menu' function to a keystroke, you effectively
     have access to *every* function Bingo has.  First, greater than 75% of
     Bingo's functions are directly accessible from the menus, grouped in
     logical sets, following a logical hierarchy.  The remaining functions
     can be accessed by selecting the 'eXtras' sub-menu, then the 'Pick &
     exec' function.  This function then allows you to choose from a list
     of *all* supported functions.
          I have found that for most people, it pays to assign your most
     commonly needed functions to keystrokes, and then rely on the menu
     system for the ones which are used to a lesser degree.  The logical
     structure of the menus allows for easy access to less frequently
     needed functions.
          The menus themselves work quite easily.  A list of possibilities
     is presented.  A menubar can be moved up and down to make your choice;
     pressing Return selects the choice.  In addition, each choice has a
     highlighted character; pressing this character will automatically
     select the choice.
          In some cases you may be presented with a child menu.  Here again
     you may make a choice as before, with one additional bit of
     functionality.  If you are in a child menu, pressing the PgUp or PgDn
     keys will move you to the previous or next sibling menu, respectively. 

          The Print menu, as well as all of the configuration menus, is a
     multiple menu.  This means that after you have made a choice, the
     action will be executed and you will be returned to the menu at the
     same spot.  I have found that when printing and configuring, people
     usually want to do more than one task.  Menus which are multiple will
     have an asterisk ('*') printed at the bottom of the menu border.
          The Escape key always closes the current child menu.  If you are
     at the top menu, it quits the menu system entirely.  To see how your
     mouse, if you have one, interacts with the menus, see the section
     concerning Bingo and a mouse.









                           Bingo 2.11 Reference Manual
                                       20




     Bingo's Dialogue Boxes
     ----------------------
          Throughout Bingo, you will encounter many dialogue boxes.  There
     are four main types.  They are:

          String Entry Boxes:

          These are the boxes which ask you for string input.  The easiest
     example is when Bingo asks you for a filename.  These boxes allow you
     to enter string input in a flexible manner.  A wide variety of
     keystrokes are available to aid in this endeavor; they are:

                    ^F/CursRt      One Character Forward
                    ^B/CursLt      One Character Backward
                    ^A/Home        Beginning of Line
                    ^E/End         End of Line
                    ^K/CtrlEnd     Delete to Eol
                    CtrlHome       Delete to Bol
                    ^Y             Delete Line
                    Tab            Insert from Paste Buffer 
                    Insert         Toggle insert Mode
                    Alt-A          Invoke the ASCII Table
                    Up Arrow       Pops up a list of the previous 15
                                   strings entered.
                    PgUp           Pops up a list of the previous 15 
                                   filenames used.

          Pressing <Escape> will abort out of the string entry operation.

          Yes/No Boxes:

          These are the boxes which require a yes or no answer to a
     question.  An example of this is when you 'quit' a file and the file
     has been modified.  Bingo will ask you if you wish to save the file.
          Each time you enter a Yes/No box, one of the two options will be
     will be highlighted.  This is the default option which will be
     selected if you press <Return>.  By using the Left and Right Arrow
     keys, you can change the current selection.  Alternatively, you can
     press either the 'y' key (any case) for a yes answer, or the 'n' key
     (any case) for a no answer.
          Pressing <Escape> will abort the operation.

          Non-Editable Display Boxes:









                           Bingo 2.11 Reference Manual
                                       21




          The easiest example of this type of box is the Help box, or the
     Info box.  This type of box simply displays a number of lines within a
     box.  By using the Up and Down arrows (also the space bar) you may
     scroll by lines, and by using the Page Up and Page Down keys you may
     scroll by pages.
          Any other keystroke will exit the box.


          List-Picking Boxes:

          The best example of this type of dialogue box occurs when the
     'directory list picker' pops up.  This type of box is very similar to
     the Non-Editable box discussed above, but the idea here is not merely
     to display information but to facilitate making a choice.  There will
     be a menubar highlighted, showing the current selection.  You may move
     this bar up and down using the arrow and page keys.  Pressing <Return>
     will selection this option.
          Additionally, the initial character of each selection may be
     highlighted.  If so, pressing the corresponding character will
     automatically select this option.
          Finally, even if the leading characters of each selection are not
     so highlighted, you may "step" through the selections by pressing
     letter keys.  The menubar will move to the next selection which starts
     with the letter pressed.  If necessary, the menubar will wrap to the
     top of the list (Bingo will beep in this case).  In the case of the
     directory picker, the leading '\' characters of directory entries will
     be ignored.
          As is the custom, the <Escape> key will abort the operation.
























                           Bingo 2.11 Reference Manual
                                       22




     Directory Lister
     ----------------
          One of the extremely useful features of Bingo is its directory
     lister.  Often, Bingo will ask for a filename.  If the name you give
     matches more than one file, in the case of wildcards, for instance,
     the lister will appear with a list of matches and all subdirectories
     in the current directory.  There are several features embedded in this
     lister to assist you in choosing a file. 
          First, all subdirectory entries in the current directory will are
     shown at the top, with a '\' character preceding them.  Selecting any
     of these will cause the lister to change to that directory.
          Second, pressing a letter causes the Lister to move to the next
     filename whose first character matches the letter pressed.  A beep
     will sound if the search wraps around to the beginning.
          The list is sorted alphabetically by name, but subdirectory
     entries come first.  The last entry is always the New Specification
     entry, which allows you to type in a new specification, perhaps
     another drive if it is necessary. 
          You have 2 choices in the directory lister other than choosing a
     file.  The second-last option in the list, "Load All Matching Files",
     will, as you might guess, load all the files shown in the list.  It
     will not attempt to load subdirectories.  The last option, "New File
     Spec", allows you to re-choose the directory specification.





























                           Bingo 2.11 Reference Manual
                                       23




     Bingo and File Names
     --------------------
          Many times during normal operation, Bingo will ask you for a
     filename.  Bingo potentially handles filenames slightly differently
     than plain vanilla DOS.  In particular, let's examine the difference
     between

          'thisfile'          &         'thisfile.'

          The first does not contain a period.  In this case, Bingo will do
     two things.  First, it will, for each defined default extension, check
     if the file with that extension exists.  If it does, it will use that
     filename.  Possibly, on of the default extensions is '.*'.  This would
     lead you to a directory list picker.  
          The second contains the trailing period, and so will be used as
     is.  So, in order to specify a file ignoring the default extensions,
     you must add the trailing period.
          Additionally, Bingo accepts either '/' or '\' characters as file
     delimiters.  This will make life a little easier on those of us who
     use UNIX systems regularly.  Finally, version 2.10 allows the use of
     the '..' and '.' directory primitives.































                           Bingo 2.11 Reference Manual
                                       24




     The Status Line
     ---------------
          On the bottom line of each window in Bingo's display is the
     status line.  This line communicates several valuable pieces of
     information.  On the left side of the line, the current line and
     column are displayed.  Next are a series of flags:
                 a     Autoindent
                  b     Box Draw Mode
                 c     C mode 
                 i     Insert mode
                 m     Matching Mode
                 r     Recording Macro
                 t     Smart Tabs
                 w     Wordwrap
                 z     Zoom mode
     For each of these flags, if the letter is capitalized, it indicates
     that the toggle is on, while a lowercase character indicates the
     option is toggled off.
          Next you will see something looking like [x/y] where 'y' is the
     number of files in the ring, and 'x' is the position of the current
     file in the ring.
          Finally, the full pathname comes.  If it is prefaced with an
     asterisk '*', it means the file has been modified.
          At the end of one of the on screen status lines, you will see
     either one or three little pyramids.  If there is a single pyramid,
     that means it is not the active window.  If there are three pyramids,
     they tell you which is the active window.  If the three pyramids are
     pointing up, the full-width window above the status line is the
     current window.  If the three pyramids point to the left, this means
     that of the two windows above the status line, the one on the left is
     the active window.  If the three pyramids point to the right, the
     window on the right is active.
          The same rules concerning the direction of the pyramids hold for
     inactive status lines, except that only one pyramid will be present.
          If this all sounds complicated, don't worry.  Open a few windows
     and move among them; it will become much clearer.
          Finally, on the right end of the current status line, a 'T' or
     'F' character will be shown.  This represent whether the last
     operation Bingo executed returned a value of True or False; i.e.,
     whether it worked.  This does not have a major impact at the moment,
     but in future versions it will.











                           Bingo 2.11 Reference Manual
                                       25




     KEYCFG: The Keyboard Configuration Program
     ------------------------------------------
          KEYCFG is the program used to create a keyboard configuration
     which the Bingo executable can utilize.  The supplied configuration
     files (BINGO.CFG, EMACS.CFG, possibly others) give a good example of
     how to set up the file, so this section will simply go over the high
     points again.
          KEYCFG is invoked as follows:

               KEYCFG <configuration name> <keyset filename>

     <configuration name> is the name of the text configuration source file
     you wish KEYCFG to read, and <keyset filename> is the name you wish
     KEYCFG to write the compiled keyboard setup to.  The default keyset
     file which Bingo looks for on startup is KEYCFG.SET.  Bingo will look
     first in the current directory, then in Bingo's own home directory. 
     Alternate keyset files can be loaded from within Bingo using the
     'key_set_load' function.

     Key Names
     ---------
     f1-f10    are the function keys
     !f1-!f10  are the shifted function keys
     @f1-@f10  are the control function keys
     #f1-#f10  are the alt function keys
     @<key>    is the control-<key> combination
     #<key>    is the alt-<key> combination
     <key>     is a simple key

     These are named keys:

          backspace                          up_arrow
          backtab                            down_arrow
          tab                                shift_insert
          escape                             shift_delete
          ctrl_backspace                     shift_home
          return                             shift_end
          ctrl_return                        shift_pgup
          alt_return                         shift_pgdn
          ctrl_tab                           shift_right_arrow
          alt_tab                            shift_left_arrow
          alt_equal                          shift_up_arrow
          alt_minus                          shift_down_arrow
          insert                             ctrl_insert
          delete                             ctrl_delete
          home                               ctrl_home
          end                                ctrl_end
          pgup                               ctrl_pgup
          pgdn                               ctrl_pgdn
          right_arrow                        ctrl_right_arrow
          left_arrow                         ctrl_left_arrow

                           Bingo 2.11 Reference Manual
                                       26




          ctrl_up_arrow
          ctrl_down_arrow
          keypad_plus
          keypad_minus
          keypad_divide
          keypad_aster
          keypad_return
          ctrl_keypad_plus
          ctrl_keypad_minus
          ctrl_keypad_divide
          ctrl_keypad_aster
          ctrl_keypad_return
          alt_keypad_plus
          alt_keypad_minus                   Note:  The keynames with
          alt_keypad_divide                  'grey' in them, as well as
          alt_keypad_aster                   F11, F12, and several others,
          alt_keypad_return                  denote keys which are
          grey_up_arrow                      available only if you have an
          grey_down_arrow                    extended keyboard, and you
          grey_left_arrow                    have the 'Use Extended
          grey_right_arrow                   Keyboard Bios' option turned
          grey_delete                        on.
          grey_end
          grey_home
          grey_insert
          grey_pgup
          grey_pgdn
          ctrl_grey_up_arrow
          ctrl_grey_down_arrow
          ctrl_grey_left_arrow
          ctrl_grey_right_arrow
          ctrl_grey_delete
          ctrl_grey_end
          ctrl_grey_home
          ctrl_grey_insert
          ctrl_grey_pgup
          ctrl_grey_pgdn
          alt_grey_up_arrow
          alt_grey_down_arrow
          alt_grey_left_arrow
          alt_grey_right_arrow
          alt_grey_delete
          alt_grey_end
          alt_grey_home
          alt_grey_insert
          alt_grey_pgup
          alt_grey_pgdn





                           Bingo 2.11 Reference Manual
                                       27




          The configuration file itself consists of lines of the format:

          <key specifier> <function identifier>
     or
          <key specifier> macro <macro list>
     or
          <key specifier> <character>
     or 
          ; <comment text>

     A line starting with a space is a continuation of the previous line.

          <key specifier> is either a simple <key name>, or two key names
     strung together as <key name>+<key name>.  For instance, for you
     Wordstar people, control-k q would be entered as

          @k+q

     Note: in this case, the Bingo will recognize both the sequence @k+q
     and @k+Q as the same thing -- case is not significant.

          The <macro list> is a list of 0 or more function descriptors, as
     listed in the Function List section, and 0 or more literal
     occurrences, and 0 or more named keys, in any order.  The literals
     must be enclosed in single quotes.  The literals will occur in the
     macro exactly as if they had been typed.  For instance, the line

          f1    macro 'Chris' return

     would define the f1 key as my name followed by a return.

          The <character> is any printable ASCII character, entered without
     quotes.  For instance, 

          <    ,

     would redefined the less-than symbol to be the comma.  This
     translation will occur during general editing, as well as in the
     search and replace string-entry boxes.  Everywhere else it will be
     ignored.












                           Bingo 2.11 Reference Manual
                                       28




          The following macro would define the Alt-C key to save all
     current modified files, execute the make command while swapping Bingo
     out to disk, saving the errors in the ERRS file, then load the ERRS
     file.

          #c        macro save_all swap_execute 'make > errs' return return
                    load_file 'errs.' return

          A more interesting variant of this is the one I used prior to
     installing the auto-error processing:

          #c        macro modify_save_all swap_execute 'make > errs' return
                    return window_bottom load_file 'errs.' return

     This version will attempt to put the errors file in the bottom-most
     window, and it will initially only save those files as have been
     modified.
          After adding  the auto-error processing, I added a more complex
     version of this macro:

          #c        macro modify_save_all swap_execute 'make > errs' return
                    return window_one window_split load_file 'errs.' return
                    window_previous window_resize down_arrow down_arrow
                    down_arrow down_arrow down_arrow down_arrow return
                    setup_err_parse 'errs.' return return next_error

     This version saves all modified files, executes MAKE as before, and
     returns.  When it returns, it makes sure there is but one window,
     splits the current window, and loads in the ERRS file.  It then
     resizes it so the bottom window is smaller, resets the error parsing
     to the ERRS file, then searches for the next (first) error.
          This last version is very sweet to use if you have a compiler
     which generates agreeable error files.  Bingo will work with most
     compilers I have come across, including the Borland and Microsoft
     compilers/assemblers.  With the Microsoft tools, you may have to tweak
     the compile flags a bit to get a usable format.

     'open_end' Identifier
     ---------------------
          KEYCFG allows the use of the 'open_end' identifier in macros to
     force Bingo to fetch string input from the keyboard.  For example:

          f1   macro search open_end 'i' return









                           Bingo 2.11 Reference Manual
                                       29




     will execute the search function, wait for the user to input the
     target string, then input 'i' for the search modifier and do the
     search.
          'open_end' is effective only for string input --- single key
     input situations will not respond to it.

     'cur_file' Identifier
     ---------------------
          KEYCFG also allows the use of the 'cur_file' identifier in macros
     to expand into the current file's name (less path) in string input. 
     For example:

          f1   macro load_file cur_file return

     will force the reload of the current file, providing it is located in
     the current directory.  NOTE:  There was a bug related to 'cur_file'
     in version 2.01; basically, if it referenced a filename longer than 11
     characters (FOOBARED.TXT), bango, you were sunk.  


































                           Bingo 2.11 Reference Manual
                                       30




     KEYCFG Command Line Options
     ----------------------------
          KEYCFG recognizes three command line options.  One is a shortcut:

          keycfg !

     tells KEYCFG to assume the name of the configuration file is
     BINGO.CFG, and that the keyset file is KEYCFG.SET.  I put this in
     primarily for my own use, as I run KEYCFG often during development.

          'KEYCFG names' will provide an alphabetical list of all of the
     function names which are currently recognized.  Useful to have.

          Likewise 'KEYCFG keys' will list all recognized keynames.  Also
     useful to have.





































                           Bingo 2.11 Reference Manual
                                       31




     Bingo & The Mouse
     -----------------
          Bingo has the capacity to make extensive use of a Microsoft
     (trademark, copyright, and kudos to Microsoft) compatible mouse,
     should you have one installed.  In order for the mouse to work, three
     things must be true. 

          1) It must be connected to the computer properly.  See your mouse
     manual for instructions.
          2) You must have your mouse driver installed properly.  Again,
     see your mouse manual for instructions on how to accomplish this.
          3) You must have the 'Use Mouse' option turned on, found in the
     General configuration menu. Bingo is shipped with mouse use turned on.

          Bingo is designed to allow users of three button mice to make
     full use of all three buttons (I have a three button mouse).  However,
     users with two button mice will only lose a little functionality when
     it comes to programming the mouse, and no functionality at all when it
     comes to dealing with the menus and dialogue boxes.
          It is generally easy to tell if the mouse is working; the status
     line will have four additional "buttons", each consisting of three
     arrows enclosed in square braces.  Also, to conserve space, the
     filename will be shown without its full path.

     The Mouse Cursor
     ----------------
          The mouse cursor will appear on your screen as a solid, non-
     blinking block, which changes color depending on the underlying color. 
     It should be possible to move the cursor over the entire screen.  If
     the mouse cursor is present, it means that a response with the mouse
     is possible.  If it is not visible, this means that at this point, no
     mouse response makes sense.

     The Mouse at the General Editing Level
     --------------------------------------
          At the general editing screen, Bingo has 20 programmable mouse
     events.   The programmable events are handled exactly as key
     assignments are handled: through KEYCFG.  These are the mouse names:

                             Mouse Event Identifiers

          Three_buttons                 Left_right_buttons
          Left_middle_buttons           Multiple_left_button
          Single_left_button            Right_middle_buttons
          Multiple_right_button         Single_right_button
          Multiple_middle_button        Single_middle_button

          Single_pyramids               Multiple_pyramids
          Single_up_arrow               Single_down_arrow
          Single_left_arrow             Single_right_arrow
          Multiple_up_arrow             Multiple_down_arrow

                           Bingo 2.11 Reference Manual
                                       32




          Multiple_left_arrow           Multiple_right_arrow

          The first ten are concerned simply with what happens when you
     press the corresponding button sequence.  Note that users of two-
     button devices will only be able to utilize five of these, those
     dealing with the left and right buttons.
          The second ten refer to the 5 "hot spots" on the active status
     line.  There are two for each button, one for a single click and one
     for a double click.

          Now that you know of these event names, what can you do with
     them?  Well, you can assign them anything you could assign a key.  In
     addition, two special functions are provided to help deal with the
     mouse:

          snap_to_mouse_xy:
               this function moves the cursor to the current mouse
               position.  If necessary, it will change the active window.

          mouse_scroll:
               this function is kind of an expanded snap_to_mouse_xy. 
               First, it moves the cursor to the mouse position.  Then, as
               long as a mouse button is held down, the screen will scroll
               in the following manner:
                    1) If you are in the upper 1/8 of the screen you will
                    scroll up.
                    2) If you are in the next 1/8 of the screen, the screen
                    will scroll up, but more slowly.
                    3) If you are in the lower 1/8 of the screen you will
                    scroll down.
                    4) If you are in the next lower 1/8 of the screen, the
                    screen will scroll down, but more slowly.
               If you are elsewhere on the screen, you simply move the
               cursor about.  This makes 'click & drag' operations
               possible.


     Combining these with other functions, quite powerful mouse events can
     be programmed.  For example:

     Single_left_button       snap_to_mouse_xy
     Single_right_button      macro snap_to_mouse_xy point_mark
     Multiple_left_button     macro snap_to_mouse_xy linemark
                                   mouse_scroll linemark

     The first simply moves the cursor, while the second moves the cursor
     and drops a point mark.  The third lets you scroll about the file,
     delineating an area to be marked.

          The ten "hot spots" can also be programmed as if they were keys.
       

                           Bingo 2.11 Reference Manual
                                       33




     Single_down_arrow        cursor_down
     Double_down_arrow        down_page

     Here, this has defined the down arrow button to respond with a
     cursor_down if a single click occurs on it, or a down_page if a double
     click occurs on it.  
          These "buttons" work a little differently than you might expect -
     - as long as you hold the mouse button down, the function will
     repetitively execute.  So, if you double click on the down arrow
     "button" and hold the second click down, you will see the file whiz by
     at a truly astonishing speed.  The speed with which the functions are
     repetitively executed can be governed using the 'conf_mdelay'
     function.
          These 20 events give you the user an unparalleled degree of
     control over how the mouse responds.

     The Mouse and The Menus
     -----------------------
          The mouse would not be very useful if it was not well integrated
     into the menu system.  Great pains have been taken to make mouse use
     easy and intuitive with respect to the menu system.  
          It is very simple.  The left mouse button selects something, and
     the right mouse button closes the current menu.  However, there are a
     few refinements.
          If the item you select with a single left click is in the
     rightmost menu, the effect is the same as if you had moved to that
     selection and hit <return>.  If the item is not the rightmost menu,
     say the it is in the Main menu and you currently have the Block menu
     open, then you will simply be moved to the selection, with the other
     menus closed for you.  However, no equivalent <return> will be
     executed. 
          If, however, you use a double left click, the selection will be
     executed regardless of where it was on the menu hierarchy.  Any extra
     open menus will be closed to bring you to the selected level.
          Likewise, a single right click will close the current menu. 
     However, a double click will close *all* open menus.
          Note that this gives you some capabilities which are not
     available from the keyboard.
          If the above sounds complicated, don't worry.  In practice, it is
     very easy.  I would suggest you restrict yourself to single clicks
     when you begin, then move to double clicks when you are sure of what a
     single click would do.  You will very quickly find that the menus are
     effortlessly intertwined with the mouse.









                           Bingo 2.11 Reference Manual
                                       34




     The Mouse & Dialogue Boxes
     --------------------------
          Throughout Bingo, you will encounter many dialogue boxes.  There
     are four main types, and all support mouse use where appropriate. They
     are:

          String Entry Boxes:

          These are the boxes which ask you for string input.  The easiest
     example is when Bingo asks you for a filename.  There are only a few
     mouse options in these boxes; most of the time you must enter text
     from the keyboard.
          However, there are three supported button events.  A single left
     click has the same effect as a <return>; it accepts the current
     string.  A double left click wipes out the string; it in effect is a
     Control-Y equivalent.  Finally, any right button click is the
     equivalent of an <Escape> key.

          Yes/No Boxes:

          These are the boxes which require a yes or no answer to a
     question.  The easiest example of this is in the configuration
     options, where you are asked if you wish to toggle the option.  By
     placing the mouse cursor over the [Yes] selection and pressing the
     left mouse button, you answer in the affirmative.  Likewise, placing
     the mouse cursor over the [No] selection and pressing the left button
     answers in the negative.  
          As usual, pressing the right mouse button is equivalent to the
     <Escape> key.

          Non-Editable Display Boxes:

          The easiest example of this type of box is the Help box, or the
     Info box.  If there are more lines than fit within the box, up and
     down arrow boxes will appear in the upper and lower right hand corners
     of the box.  By moving the mouse cursor to the corresponding box and
     holding a mouse button down, the display will scroll in the
     corresponding direction.
          As expected, the right button exits.

          List-Picking Boxes:

          The best example of this type of dialogue box occurs when the
     'directory list picker' pops up.  Here, as in the Non-Editable Display
     Boxes, up and down arrow boxes will appear if necessary.  Furthermore,
     moving the mouse cursor to a particular selection and pressing a
     single left key will move the menubar to that selection.
          Moving the mouse cursor to a particular selection and double left
     clicking will select that particular selection as if you had moved the
     menubar there and typed <return>.
          As always, the right button is the equivalent of typing <Escape>.

                           Bingo 2.11 Reference Manual
                                       35




     The Mouse and The ASCII Table
     -----------------------------
          The mouse is also tightly integrated with the ASCII table
     function, 'ascii_table'.  Here, single left clicking on a character
     moves the cursor to it (updating the display).  Double left clicking
     selects the character and adds it to the string.
          Single left clicking on the [Bspace] bar is equivalent to typing
     <backspace>; it removes one character from the string.  A double left
     click on this spot zeroes the string entirely.
          As always, clicking the right button is the equivalent of typing
     <Escape>.









































                           Bingo 2.11 Reference Manual
                                       36




     Bingo and 4Dos
     --------------
          When version 4.0 of JPSoft's excellent command interpreter was
     released, users ran into a conflict using Bingo 2.10 with it.  This
     stemmed from the fact that the core 4Dos executable is 4DOS.COM. 
     While this file is a .COM file in name, it is actually a 100k+ .EXE
     format file.  Unfortunately, the spawn() routines used in Bingo
     currently use the file extension to determine the file type.  Hence,
     all sorts of unpredictable results occured.
          JPSoft Technical Support had the following solution:

          Rename 4DOS.COM to 4DOS.EXE.  

     Correspondingly, change the 
          shell=D:\path\4dos.com
     to
          shell=D:\path\4dos.exe
     in your CONFIG.SYS file.  

          The only side effect noted of this is that 4Dos will not set the
     COMSPEC environment variable by itself.  So you will need to add
          COMSPEC=D:\path\4dos.exe
     to your AUTOEXEC.BAT file.  

          This should clear up any problems with 4Dos or any like program.



























                           Bingo 2.11 Reference Manual
                                       37




                                  Basic Editing
                                  -------------

          Basic editing concerns deletion and insertion of characters. 
     Bingo provides a number of ways to delete text without recourse to the
     block operation.  Five of these operations push deleted text onto the
     unkill stack -- 'del_eol', 'del_line', 'del_bol', 'del_word_lt', and
     'del_word_rt'.   

     The Destructive Backspace
     -------------------------
          Bingo supports three backspace deletion modes.  The first is the
     old favorite, the simple one character destructive backspace.    The
     second mode destructively deletes back to the previous tab stop,
     provided there are only spaces in the way.  If there are non-space
     characters in the way, it functions as in mode 1.
          The final mode deletes all the way to the left margin (column 1),
     provided it consists only of spaces.  Again, if there are non-space
     characters, it functions as mode 2.

     Delete EOL vs. Delete Line vs. Delete BOL
     -----------------------------------------
          The 'del_eol' function deletes the remainder of the line from the
     cursor position.  If you are on the end of a line, it brings the next
     line up to the current position.
          The 'del_line' simple deletes the entire current line, no
     questions asked.  
          The 'del_bol' deletes from the current position back to the
     beginning of the line.  If you are at the begging of a line, nothing
     happens.
          In all three cases, the deleted text is pushed onto the undo
     stack.

     Deleting Words
     --------------
          The 'del_word_lt' & 'del_word_rt' functions delete to the start
     of the next word, left or right, respectively.  What is a word?  This
     is up to you.  You can configure the string describing what delimits a
     word via the 'conf_word' function.  The deleted text is pushed onto
     the unkill stack;












                           Bingo 2.11 Reference Manual
                                       38




                                  File Handling
                                  -------------

          Bingo has extensive file handling capabilities, more than almost
     any other editor available.  Literally, there is little you could want
     to do with a file which Bingo will not let you do.  
          A couple of words are in order about the file format.  Bingo
     cares not at all if the file you are reading is delimited by carriage-
     return/linefeed pairs or just linefeed characters; Bingo will read
     both with equal aplomb.  Similarly, Bingo doesn't object to files
     ending with the EOF character (ASCII 26).  On output, the output
     format is governed by the configuration settings accessible through
     the 'conf_eof' and 'conf_lfs' functions. 

          Here are some of the high points in file handling with Bingo.

     Edit_file & Load_file
     ---------------------
          Editing a file with an 'edit_file' function may not always
     physically load the file from disk.  If the asked for name is already
     being edited, you will simply be moved to the proper buffer. 
     Conversely, loading a file with the 'load_file' function will always
     load the file from disk; if it exists in the ring currently, the in-
     memory version will be killed first.

     Choose_file
     -----------
          The 'choose_file' function pops up a list of the current files in
     the ring, and allows you to choose from among them.  Also, the option
     to edit a new file exists; this option is equivalent to the
     'edit_file' function.

     Rename_file
     -----------
          The 'rename_file' function changes nothing on the disk until you
     save the file explicitly; however, it does change the name of the in-
     memory file.

     Quit
     ----
          This is the usual way to exit a file.  If the file has not been
     modified, Bingo will immediately quit the file.  If the file has been
     modified, Bingo will ask you if you wish to save the file.  Remember
     that in this case, a <return> indicates a yes answer.








                           Bingo 2.11 Reference Manual
                                       39




     Quit_all
     --------
          This function repeatedly does a 'quit_file' on each file in the
     ring.  You can abort the operation at any time by typing <Escape> in
     response to a query.

     Abort & Abort_all
     -----------------
          These are very dangerous functions.  'abort' exits the file, no
     questions asked.  'abort_all' exits the program, no questions asked.

     Delete_file
     -----------
          This is just an easy way to delete an arbitrary file on disk.  No
     more, no less, but sometimes you do need free up disk space.

     Zap_file
     --------
          This allows you to wipe out the disk copy of the currently active
     file.  It does nothing to the in-memory version of the file itself.

     Modify_save & Modify_save_all
     -----------------------------
          These functions respectively save the current file or each file
     if and only if it has been modified.  Useful when saving files to
     compile, so that only modified files get recompiled.

     Switch_file
     -----------
          This function essentially performs a 'quit_file' followed by an
     'edit_file'.


     Clean_file & Clean_all
     ----------------------
          These functions allow you to reset the status of the file (or all
     the files) to unmodified.

     Pick_file
     ---------
          Bingo will, if asked, maintain a list of the 15 most recently
     edited files.  Based on the setting via the 'conf_name_save' function,
     the files will be saved in either the current directory or in Bingo's
     home directory.  'Pick_file' will popup a list of the 15 files, most
     recent at the top.  By selecting a file, you are invoking the
     'edit_file' function on it.






                           Bingo 2.11 Reference Manual
                                       40




     Backup_file & Backup_all
     ------------------------
          These functions will force a backup attempt of the current file
     ('backup_file') or each file in the ring ('backup_all').  Only files
     which have automatic backups turned on will be affected (See the
     'conf_timed_backups' function.)














































                           Bingo 2.11 Reference Manual
                                       41




                                    Searching
                                    ---------

          There are two search algorithms present in Bingo.  One is very
     simple and very fast, and part of it is hand-coded in assembler for a
     bit more speed yet.  For 95% of what you want to do, it is just right.
          However, with the advent of version 2.01, a second search
     algorithm was added; a regular-expression method.  Regular expressions
     are a mathematical way to describe strings of text, and are very
     powerful.  Bingo's algorithm is reliable but not overly speedy; I
     suggest you keep this in mind when using it.
          If you are not familiar with regular expressions, I am not going
     to attempt to explain them to you here.  If, however, you have used
     them before, I will explain the notations I used in coding Bingo's
     algorithm.
          To perform a regexp search, use the 'R' modifier on you search
     (or replace).  If you use this modifier, the string will be
     interpreted as follows:

          -    classes, i.e. [0-9] and 'not' classes, i.e [~0-9]
          -    occurrences of once, once or none (?), one or more (+), none
     or more (*)
          -    grouping  {}
          -    ORing of {} groups |
          -    wildcard character .
          -    match begin and end of lines with ^ and $, respectively
          -    support for debugging regular expression search 
               patterns
          -    along with regular expression searches, you can specify the
               replacement in terms of the matched text.  '@n' in the
               replacement pattern places the text matching the nth group.
               '@@' matches the entire matched text. This allows you to do
               some nifty text manipulation.

          For some simple examples, see below.

          It is easy to limit the search area to a specific range by line
     marking a range of text.  Any search (or replace) which starts within
     a block will not move past the end of the block.  Basically, this
     means that no search or replace will continue past the end of a block.
          The 'C' option in the 'search' function will count the number of
     occurrences of the target string in the rest of the search area.
          The 'G'lobal option for search and replace operations starts from
     the current cursor position, not from the top of the file.
          Try the Search & Macro capability -- it is sharp.







                           Bingo 2.11 Reference Manual
                                       42




     Regular Expression Search & Replace Examples
     --------------------------------------------
          Here are some examples of regular example search and replace.

     Search for --> [a-z]+/.
          would match any sequence of one or more letters between 'a' and
          'z' followed by a single period.

     Search for --> help[a-z]+/.
          would match a sequence of 'help' followed by one or more letters
          then a single period.  It would match 'helpoooooo.' and 'helpp.'
          but not 'help.'

     Search for --> 19{87}|{88}
          would match '19' followed by one occurance of either '87' or
          '88'.

     Search for --> 19{87}*|{88}
          would match '19' followed by none or more occurances of '87' or a
          single occurance of '88'.  Thus it would match '19',
          '1987878787', or '1988'.

     Search for --> .
          matches any single character. (Note: /. would match a an actual
          period.)

     Search for --> ^[a-z]+
          matches a sequence of 1 or more letters, provided it starts a
          line.

     Search for --> ^[a-z]+$
          matches a sequence of 1 or more letters, provided it starts a
          line and ends a line.

     Search for --> ^[a-z]+/.[a-z]+
          basically matches filenames made up of alpha characters, which
          are found at the beginning of a line.

     Search for --> ^$
          matches a blank line.
                    
     Search for --> ^.
          matches a non-blank line.

     These last two allow you to do some neat stuff using
     the macro capability, i.e., apply a macro to every
     non-blank line.





                           Bingo 2.11 Reference Manual
                                       43




     Search for --> {[a-z]+}{/.}{[a-z]+}
     Replace with -->  @3.@1
          This will match a sequence of one or more letters, followed by a
          period, followed by one or more letters (a filename,
          essentially).  The replace will put the text matching the 3rd
          group first, then a period, then the text matching the 1st group. 
          On a filename, this will have the effect of reversing the order
          of the name and the extension, i.e:

               filename.txt

          would become

               txt.filename

          since 'filename' would match the first group and 'txt' matches
          the third group.  



































                           Bingo 2.11 Reference Manual
                                       44




                                   Navigation
                                   ----------

          Navigation in Bingo is very straightforward.  You may move in
     terms of characters, lines, words, windowfuls, and the entire file. 
     You can also jump to the beginning and end of a marked block. 
     Finally, you can jump to a specified line, or by a relative number of
     lines, in the file using the Jump function.
          In addition, Bingo supports placemarks.  I had never really used
     placemarks much, or "bookmarks" as they are sometimes called.  But a
     buddy of mine told me to try them when in big files, and I was
     impressed.  But the editor I tried them in allowed only one; this is
     just not enough.  So I went one better.  Actually, I went 9 better.
          Bingo provides 10 placemarks.  You can drop one, jump to one, or
     pop up a list of the current placemarks.  Each placemark defines a
     file, a line, and a column.  When you try to jump to a placemark and
     the file it pertains to is not in the ring, the file will be fetched.



































                           Bingo 2.11 Reference Manual
                                       45




                                 Block Handling
                                 --------------

     Marking
     -------
          Block marking is extremely flexible.  Three types of marking are
     supported.  Line marking considers lines to be the smallest
     indivisible chunks of text.  It is primarily used when editing large
     sections of program code, since much of this type of editing involves
     moving lines.
          Point marking, on the other hand, considers single characters to
     be the smallest indivisible portions of text.  this is useful for
     replicating portions of lines, rather than whole lines. 
          While Point marking "snakes" the mark from one point to the next,
     Vertical marking lets you define corners of a column-oriented block.
          As of 2.10c there are two methods of marking, governed by the
     'conf_automark' function.  If auto-marking is turned off, marking
     proceeds as follows: go to the beginning of the block you wish to
     mark; execute the appropriate mark function for the block type you are
     interested in; move to the end of the block you wish to mark; mark
     again.
          If automarking is turned on, things work differently.  Now, when
     you mark, you turn marking 'on'.  As you move about the file, the
     block will follow you until you decide to mark the end.  However, you
     do not have to mark the end of the block; Bingo will simply assume the
     current position is the other end of the block.
          You can also use the 'extend_mark' function.  This simply extends
     the current marking scheme to the current cursor position.  If there
     is no mark in the file, 'Extend_mark' will display an error message.

     Operations on Blocks
     --------------------
          Bingo supports two slightly different sets of block operations. 
     The first set will be familiar to users of many programming editors,
     while the second will bring back memories of any Wordstar compatible
     editor they may have used.
          The first set of operations consists of three functions: 'cut',
     'copy', 'paste'.  'cut' snips the marked region to the block buffer,
     removing it from the file.  'copy' does the same thing, but it leaves
     the marked text intact in the file.  In both cases, if nothing is
     marked and you have this option turned on, Bingo will assume you wish
     the current line to be linemarked.
          'paste' is very simple: whatever is currently in the block buffer
     is placed at the current cursor position, based on the marking method
     used.  If the contents were point marked, the contents are simply
     'squirted' into the text.  If the contents were line marked, the lines
     are inserted above the current line.

          There is also an alternate type of paste operation, that of
     'paste_replace'.  In this case, the paste buffer's contents overwrite
     the needed amount of space in the text, rather than squirting between

                           Bingo 2.11 Reference Manual
                                       46




     existing text.  This type of pasting will only work for Column and
     Line marked blocks.  Be careful! You can hurt yourself with this one.
          The second type of block operations available are similar in
     nature to those used by Wordstar-compatible editors.  Block operations
     consist of three steps: mark the text, move to the destination
     position, invoke the function.
          'block_move' moves the currently marked blocked of text to the
     current cursor position.  'block_copy' does the same thing, except it
     leaves a copy behind.
          'block_delete' is functionally identical to Cut, except that it
     requires that a block be marked; the setting of the auto linecut
     toggle has no effect on 'block_delete'.

     Named Buffers
     -------------
          In addition to the default paste buffer, Bingo supports 26 named
     buffers, 'a'-'z'.  In order to change which buffer is currently in
     use, use the 'name_buffer' function.  Press the letter of the buffer
     you want, or <return> for the default buffer.  Until you change the
     buffer, Bingo will use the currently named buffer for all its
     operations.  All buffers will be saved when a swapping operation is
     being done.

     Miscellaneous Functions
     -----------------------
          The 'buffer_info' function displays various pertinent info about
     all the paste buffers, as well as which buffer is the currently active
     one.  
          The 'look_buffer' function will display the current contents of
     the current paste buffer in a non-editable window, up to the first 100
     lies.  That should be enough to give you an idea of what is in there.
          The 'report_bsize' function reports the size of the currently
     marked block in terms of lines and characters.

     Emacs_yank
     ----------
          This function melds the unkill stack and the paste buffer
     together in the following manner.  If the most recent block
     operation/deletion was a block operation, 'emacs_yank' works exactly
     like 'paste', pushing the paste buffer contents into the text.  If the
     most recent operation was a deletion (word, line, -eol, -bol),
     'emacs_yank' works like the 'paste_kill' function, pulling text from
     the undo stack without disturbing its contents.  This allows you to
     use the deletion commands to manipulate text in concert with the paste
     buffer operations.







                           Bingo 2.11 Reference Manual
                                       47




                                    Utilities
                                    ---------

          Bingo provides large number of utilities to be used to manipulate
     text.  Functions are available to:

          -    change the case of a block
          -    strip the high bit from characters in a block
          -    place tabs within text, and expand tabs within text
          -    shift blocks a certain number of spaces
          -    align lines with other lines
          -    sort blocks, in ascending or descending order, on a
               particular column
          -    fill a vertically-marked block with a specific character 
          -    format a paragraph
          -    count the number of words over a span of lines
          -    insert the current time and date into the file

          The big thing with the utilities is: play with them.  They allow
     you to do some really useful things to your text.  Particularly,
     entab/detab are very useful when importing files from other
     systems/editors.  You can take a file with hard tabs in it which
     assumed a tabsize of 8 characters, detab it, change the tabsize to 3,
     entab it, and save it ready for another editor which demands hard tabs
     with a tabsize of 3.



























                           Bingo 2.11 Reference Manual
                                       48




                                 Extra Functions
                                 ---------------

     Help
     ----
          The 'help' function attempts to read the file BINGO.HLP located
     in the same directory as BE.EXE.  This file can consist of anything
     you wish, and contain as many lines as you wish (it must fit into
     memory...).

     Info
     ----
          This function simply brings up some useful info, such as the size
     each file will be when written to disk, current date and time, etc.

     Pick & Exec
     -----------
          This function asks for a function descriptor to execute.  The
     same function descriptors are used as are used by KEYCFG.  If you give
     it an unrecognized descriptor, a list of all supported functions are
     popped up for your convenience.  If you give it substring, such as
     'win', all functions descriptors which contain 'win' anywhere will be
     shown; in this case the window functions.  Tie this to an easy to
     remember key and all of Bingo's functions are at your fingertips.  
          This is also useful when you are trying to remember a particular
     function descriptor and you don't have the documentation handy.

     Quit and Save Status
     --------------------
          This simply saves the current Bingo status information, copies of
     all current files, and exits.  When you next start Bingo, it will ask
     if you wish to restore Bingo to its previous state.  If you say yes,
     you will be placed exactly where you left off.  If you indicate no,
     Bingo will proceed normally, leaving the suspension files in place to
     be dealt with the next time Bingo is invoked.
          This function is ultra-useful since it allows for easy
     interruptions when you are working.















                           Bingo 2.11 Reference Manual
                                       49




     Global
     ------
          This is an *extremely* powerful function.  When invoked, it asks
     for a keystroke to execute globally.  The keystroke can invoke a
     macro, or simple be tied to a function.  For each file in the ring,
     Bingo will ask if you wish the function to be executed; your options
     are the same as they are when doing a search & replace operation: 
          Y         Yes, do operation, go to next file
          N         No, don't do operation, but do go to next file
          O         Yes, do the operation, but abort the global operation
                    afterwards.
          G         Yes, do the operation, and do it for all remaining
                    files without asking.
          Q         Abort the global operation right now.
     You must be *very* careful when using this operation; any functions
     which change the number of files in the ring can be dangerous.  Be
     prudent when using it, and you will be fine, use it without some
     forethought, and you may get bitten and regret it.
          In version 2.10, this function was cleaned up a good deal; it
     should be rock-steady reliable, and much cleaner in its interface.
          Remember, do NOT use this function while recording a macro; you
     will get unpredictable results.

     Ascii_table
     -----------
          This function serves a dual purpose.  First, it will pop up a
     display of all 256 characters, serving as a handy reminder of the
     characters available.  As you move the cursor over the table, the
     decimal, octal, hexadecimal, and mnemonic values, if appropriate.
          Further, by moving onto a particular character and hitting
     return, you will add this character to the string displayed at the
     top.  You can build a string up to about 30 characters in length.  The
     <Backspace> key will delete the last character on the string.  When
     you press <Escape> to leave, the contents of the string will be
     inserted into the text at the current cursor position.

     Load_ & Write_profile
     ---------------------
          These functions allow you to manage profile files. 
     'load_profile' will load the profile file for the given extensions,
     given that it exists.
          'write_profile' will save the current text settings to the
     profile file for the named extension.  Further, you will be given the
     option of saving the file in the current directory (where Bingo looks
     first) or in Bingo's home directory (where Bingo looks second).







                           Bingo 2.11 Reference Manual
                                       50




     Repeat_last
     -----------
          This is a handy function.  It will execute the most-recently-
     executed function again.  It won't change what that most-recently-
     executed function was.

     Display_file
     ------------
          Simple, useful.  It will popup the named file into a scrollable
     window, very similar to the help file.  This would let you create
     multiple help files.

     Box Draw Mode
     -------------
          This is an enormously useful capability.  When the
     'toggle_box_draw' function is executed, you will be asked whether you
     wish to use single or double line drawing.  After you make your
     choice, the 4 cursor movement functions will respond differently. 
     When you move the cursor up via the 'cursor_up' function, the cursor
     will move up, but it will trail a line (of the appropriate mode)
     behind.  Corners and intersections will be handled automatically.  The
     line characters will be placed into the text as if Bingo was in
     overwrite mode. 

     Cmd_line
     --------
          This function gives you a command line entry space on the status
     line.  You may enter any valid Bingo function.  You only need to enter
     enough of the function to make it unique; for example, 'swap_ex' is
     enough to get you the swap_execute function.
          Further, you can pass parameters to the function you enter
     directly on the command line, provided the parameters would normally
     be entered into a string-entry box.  For example,

          swap_exec dir/p

     entered in response to the cmd_line would directly execute the "dir/p"
     command after swapping Bingo out.
          Note that this only works for parameters which would normally be
     entered in a string-entry box; parameters entered in response to a
     Yes/No box would not work.











                           Bingo 2.11 Reference Manual
                                       51




                                System Operations
                                -----------------

          Bingo supports a number of system operations.  While they are not
     large in number, they are large in utility.

     Changing Directories
     --------------------
          The 'chdir' function will allow you to change the currently
     logged directory, or even drive.  Not used often, but when it is
     needed, it tends to be *really* needed.

     Simple Execution & Shelling
     ---------------------------
          The 'exec_command' function simply executes a given DOS command
     line and returns.  It does not do anything fancy, and Bingo will
     remain in memory (consuming quite a bit of memory) but it is fast and
     simple for issuing short commands.
          The 'shell' function is identical to 'exec_command', except it
     takes no arguments.  It simply gives you a DOS shell.

     Swap Execution & Shelling
     -------------------------
          More often than not, particularly in the case of executing
     command-line compilers, you simply can't afford to let Bingo hang
     around in memory, since it consumes a bit.  So Bingo provides two
     other methods for executing commands.  While they appear identical in
     form and function to the previous pair of functions, 'swap_execute' &
     'swap_shell', are much more interesting.  
          While they, too, execute a command or shell to DOS, prior to
     doing so, they save all relevant information such as copies of the
     current files, etc., then swap Bingo out of memory.  When this
     happens, the ~4k kernel of BE.COM is left behind to manage things in
     Bingo's absence.  When the command is terminated, Bingo will reappear,
     load all the state info saved previously, and for all intents and
     purposes, you are right where you left off.  You can define macros
     across this gap, your placemarks stay intact, etc.  
          The cost is a small bit of speed when Bingo saves the state
     information and reads it again later, but it is negligible for the
     performance return.  It is ideal for running command-line compilers
     and other memory intensive programs from within Bingo.
          One thing to remember: the size of your paste buffers as well as
     the size of your undo stack affect the time it takes to save and
     restore Bingo's status.  Keep this in mind when you are configuring
     the stack size, and when you are utilizing multiple paste buffers.
          In versions prior to 1.1b, Bingo would not swap shell properly on
     some machines while running DOS 4.00 and higher.  This has been
     rectified.




                           Bingo 2.11 Reference Manual
                                       52




          If your machine should for some reason have to be reset while
     Bingo is swapped out (something that happens when you are developing
     software), the next time you start Bingo, it will treat the swap files
     as if they were suspension files, and restore Bingo to its previous
     state.  















































                           Bingo 2.11 Reference Manual
                                       53




                                     Macros
                                     ------

          Bingo provides tremendous support for the creation, management,
     and execution of keyboard macros.  This level is support was indicated
     by the author's own experience in developing Bingo.  
          I started using Bingo to develop Bingo very early on in Bingo's
     life (it didn't even have a search function at the time; horrible!) in
     the hopes that this would ferret out bugs more quickly than testing
     would.  However, one of the things I missed from my previous editor
     was the ability to define and replay macros on the fly.  In addition,
     I felt my previous editor was missing some key functionality when it
     came to dealing with the keyboard, so I had the opportunity to "do
     macros right".  Of course, my definition of useful macros may differ
     from yours, but...

               !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
               !!!!                                       !!!!
               !!!! Macros from versions prior to 2.0 are !!!!
               !!!!                  not                  !!!!
               !!!! compatible with version 2.0 and above !!!!
               !!!!                                       !!!!
               !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

          As of version 2.01, Bingo retains the status of the last function
     executed internally as a True or False value; you can see this
     reflected on the far right end of the active status line.  If, during
     the execution of a macro a function returns a False value, the macro
     will terminate.  Further, if applicable, the repeat command will
     terminate.  This allows you to execute macros "until function failure"
     based on things like trying to move beyond the beginning of the line.

     Macro Space
     -----------
          Prior to version 2.10, Binge restricted macro space to 2048 macro
     tokens and 200 key combinations.  With version 2.10, these limits have
     been removed.  Bingo will dynamically increase its macro space to
     compensate when you add or release memory.  Thus, macro space is
     limited by available memory.

     Defining Macros
     ---------------
          There are three ways to define macros, all very similar.  You can
     define the scrap key to hold a macro, a single key to hold a macro, or
     a two key combination to hold a macro.  Any of these functions will
     also end a macro definition if one is currently in progress.






                           Bingo 2.11 Reference Manual
                                       54




          Macros can be defined across any number of activities.  Pressing
     <Escape> at any time as the response to a query from Bingo will end
     the macro presently being recorded.

     Saving Macros
     -------------
          Using the single key save and load functions, you can save
     favorite macros to named files for later recall.  Single saving also
     saves the key sequence the macro is attached to, and loading it in
     again will redefine the key.

     Saving the Entire Key Set
     -------------------------
          Bingo also allows you to save the entire key table, including all
     key assignments and all macros, for later recall.  Recalling a keyset
     file will overwrite the entire key table, so be warned.  
          When you save a keyset file, you can name the keyset file, and
     you can have it saved in Bingo's home directory or in an arbitrary
     directory.  If you name it Keycfg.set, it becomes the default file
     keyset, depending where you put it.  When Bingo starts up, it looks
     first in the current directory, then in its home directory for
     KEYCFG.SET.  This allows you to have multiple key configurations in
     different disk locations while still maintaining one executable.

     Executing a Macro File
     ----------------------
          You may also execute any macro which was single saved to a file
     at any time.  This executes it one, without disturbing the current key
     table assignments.  Good for macros used infrequently, but which are
     very useful.  I have a whole library of interesting ones saved at this
     point.





















                           Bingo 2.11 Reference Manual
                                       55




                                     Windows
                                     -------

     Window_split, _edit & _load
     ---------------------------
           These three functions create new windows from the current
     window.  Window_split simply splits the current window into two, both
     containing the same file.
          Window_edit essentially performs a split, then executes an
     edit_file function.
          Window_load essentially performs a split, then a load_file
     function.

     Window_vertical
     ---------------
          Starting in version 2.0, Bingo provided the ability to split
     windows vertically.  There are some restrictions, however.  Vertical
     windows must always exist in pairs; that is, two windows sharing one
     status line.  They are even resized together.  This is not a large
     problem, but you should be aware of it.

     Window_resize
     -------------
          This function allows you to change the vertical size of a window,
     as well as the window below the current one.  

     Window_one & Window_zoom
     ------------------------
          While window_one and window_zoom superficially perform the same
     action, remember that zoom is simply a toggle, while the 'window_one'
     function eliminates all windows except the current, growing the
     current window to full size.




















                           Bingo 2.11 Reference Manual
                                       56




                                    Printing
                                    --------

          Prior to version 2.01, there were two functions to print, one for
     the file and one for a marked block.  As of version 2.01, these have
     been combined into 'print_file', which prints a block if it is marked,
     otherwise it prints the file.
          There are a number of options governing printing.  You can ask
     for line numbers to be printed, page headers (time, page, filename),
     and decide whether Bingo should terminate a line with a single
     linefeed, or with linefeed/carraige return pairs.
          You can also send standalone linefeed or formfeed character, or
     send a sequence of ASCII values.







































                           Bingo 2.11 Reference Manual
                                       57




                             Error Parsing and Undo
                             ----------------------

     How Error Parsing Works
     -----------------------
          Bingo provides the capability to automatically parse compiler
     generated error messages.  The procedure for this is fairly simple.
          First, you must have a text file containing the error output of
     the compiler (or assembler) in question.  This usually obtained by
     running said compiler and redirecting its output to a file.  Bring
     this file into the editor.
          Next, call the 'setup_err_parse' function, and give it the name
     of the file.  If the name matches a file in the ring, Bingo will tell
     you that error processing is setup properly.
          Now it is simple; simple call the 'next_error' or 'prev_error'
     functions.  The following things will happen:

          1)   Bingo will see if a next (or previous) error can be found. 
          If not, it will report that no more errors exist.
          2)   Assuming an error line is found, the filename and line
          number will be picked out of the line.  Bingo will perform and
          edit_file operation on the filename, then jump to the offending
          line.  All of this will happen within the current window.
          3)   Also, any onscreen window which contains the file being
          parsed will be updated.  The current error line will be
          highlighted automatically.

     As you can see, error parsing is super useful.  For a further example
     of how it works, see the example macro in the section on the KEYCFG
     program.

     Error Parsing Method
     --------------------
          Bingo parses error files using a "fuzzy" or "best-guess"
     algorithm.  It checks each line as follows.
          First, Bingo attempts to find a valid filename on the line.  The
     filename must contain a period, and it must have a file extension. 
     The filename cannot be a .EXE or .COM file, and it may contain the
     full path specification (new with version 2.10e).
          After finding such a filename, Bingo verifies that the named file
     exists on disk or in the current ring.  If it does, Bingo now begins
     to look for the line number within the error file.  Bingo will look
     for the first number to follow the filename, and use this as the line
     number.
          If both a filename & a line number are found, the line will be
     recognized as a valid error/warning line. 






                           Bingo 2.11 Reference Manual
                                       58




          This algorithm will work for the Borland and Microsoft
     developmental tools.  However, in some cases, you may have to consult
     your manual in order to find what command-line switches have to be set
     for your compiler to output errors in a usable message format.

          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          !!!!!!!!                                !!!!!!!!!
          !!!!!!!! Note that linker errors do not !!!!!!!!!
          !!!!!!!! have line numbers, and so will !!!!!!!!!
          !!!!!!!!      not be recognized.        !!!!!!!!!
          !!!!!!!!                                !!!!!!!!!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

     However, whenever Bingo encounters a situation where there are no more
     errors, it will display a message saying so.  Further, it will display
     a portion of the last non-blank line in the error file on the message
     line with the "No more Errors" message, so you can verify that all
     went well.

     Undo Capabilities
     -----------------
          Bingo has several capabilities to allow you to recover from
     recent mistakes.  The 'Restore_line' function, will simply recall the
     state of the current line to what it was when you first arrived.  This
     is good only as long as you do not move from the line; once you leave
     the line, its original state is lost forever.
          This type of error-recovery is good for small things, but
     something more substantial was needed.  So Bingo keeps a stack of
     recently deleted items; text deleted by 'del_eol', 'del_bol', and
     'del_line' functions.  This stack is kept in reverse order; that is,
     the most recently deleted text is placed in top of the undo stack.
          Additionally, you have an option regarding text cut to the paste
     buffer.  Normally, when you place text into the paste buffer (Using
     the 'cut', 'copy', etc. functions), if the paste buffer already
     contains something, that text is discarded.  However, if you set the
     'cut to stack' option on (in the General Config Menu, or with the
     'conf_cut_stack' function), this text will be pushed onto the stack
     also.
          You can control the size of the undo stack using the
     'conf_kill_size' function (1 to 10240 lines), or through the config
     menus.  You cannot, however, turn it off.











                           Bingo 2.11 Reference Manual
                                       59




     Manipulating the Undo Stack
     ---------------------------
          There are three functions available to help you deal with the
     undo stack.  'rotate_kill' will popup a list of the current stack's
     contents.  By moving the menu bar and hitting return, you can move the
     selected entry to the top of the stack.
          'unkill' and 'paste_kill' are very similar.  They take the top
     member of the stack and insert it in the current position.  If the top
     member of the stack was a full line, it will be inserted above the
     current line.  'unkill' also removes the top member from the stack.










































                           Bingo 2.11 Reference Manual
                                       60




                                Configuring Bingo
                                -----------------

          Bingo is extremely configurable.  To access the configuration
     menu, select the 'Config' option from the main menu, or attach keys to
     particular configuration functions.  The settings themselves are
     explained explicitly in the Function List section of this document in
     the Configuration portion.  
          To make the current selections permanent, select the "Write
     setting" option found on the main configuration menu.
          There is one item of interest of interest.  There are nine
     settings which as of version 2.01 are maintained on a per buffer
     basis.  These settings are the ones saved in profile files, and are
     found on the 'Text Settings' config menu.  Each time you change these
     with a 'conf_' function, you change both the underlying default (used
     when new files are brought in) and the current buffer's settings.  For
     a few settings, there are also 'toggle_' functions, such as
     'toggle_cmode'.  These change only the current buffer's settings.


































                           Bingo 2.11 Reference Manual
                                       61




                                  Function List
                                  -------------

          The following section contains a listing of the functions
     supported by Bingo, grouped by functionality.  The index at the end of
     this document makes alphabetical location of these functions simple.

     General Editing
     ---------------

     - insert_tab
          insert the number of spaces needed to move the cursor to the next
          tab stop, based on the current tabsize.

     - carriage
          If the 'conf_carraige' setting is turned on, this function splits
          the current line by moving the cursor to the start of the next
          line, taking everything to the right of the cursor along for the
          ride.  If this moves you onto the bottom line of the window, the
          line will be centered on the screen.  Depending on C mode and the
          AutoIndent mode settings, automatic indentation of some type may
          be performed.  If the 'conf_carraige' setting is turned off, this
          function simply moves the cursor down one line.

     - toggle_ins
          toggles the insert/overwrite mode. Changes only the setting of
          the current buffer.

     - toggle_wrap
          toggles the word wrap setting. Changes only the setting of the
          current buffer.

     - toggle_cmode
          toggles the C mode setting, regardless of the file name. Changes
          only the setting of the current buffer.

     - toggle_autoindent
          toggle the autoindent setting.  Changes only the setting of the
          current buffer.

     - main_menu
          invokes the main menu.

     - del_char
          deletes the current character at the cursor position; if it was
          at the end of a line and the 'conf_delete_join' setting is turned
          on, brings the next line up.





                           Bingo 2.11 Reference Manual
                                       62




     - back_space
          if the 'conf_delete_join' setting is turned on, performs a
          destructive backspace, if the current deletion mode is not
          Rubout.  If the current mode is Rubout, the cursor will back up
          one space and the current character will be blanked.based on the
          current deletion mode in effect.  If the setting is turned off,
          performs a rubout.

     - del_line
          deletes the entire current line, regardless of position.

     - del_eol
          deletes all text to the end of the line; if at the end of a line,
          joins the lines if the 'conf_delete_join' setting is turned on.

     - del_bol
          deletes all text to beginning of line, moves to first column. If
          at the beginning, joins the line with the previous line if the
          'conf_delete_join' setting is turned on.

     - default_del
          does one of two things depending on whether or not a block is
          marked.  If a block is marked, the 'cut' function is executed. 
          If no block is marked, the 'del_char' function is executed.

     - default_bspace
          similar to 'default_del', except that if no block is marked, a
          'back_space' function is executed.

     - del_word_rt
          deletes from the current cursor position to the start of the next
          word to the right.

     - del_word_lt
          deletes from the current cursor position to the start of the next
          word to the left.

     - new_line 
          inserts a new line before the current line, without moving the
          cursor. 












                           Bingo 2.11 Reference Manual
                                       63




     File Handling
     -------------

     - edit_file
          after asking for a filename; if the file is already in the ring,
          it simply switches to it.  If it is not in the ring, it loads the
          file.

     - choose_file
          pops up a list of current files in the ring, and an option for a
          new file.  Selecting the New File option performs an 'edit_file'
          function.

     - load_file
          after asking for a filename, it loads that file from disk.  If
          the file is already in the ring, the in-memory version is first
          deleted from memory.

     - rename_file
          renames current file.

     - switch_file
          switches to a different file, performing a quit on the current
          file first.  If you escape out of the quit option, the switch
          operation will abort.

     - save_file
          saves the current file; does not exit.

     - modify_save
          saves current file ONLY if it has been modified.

     - quit
          exits current file.  If the file was modified, it will ask you if
          you wish to save the file; a <return> indicates yes.

     - abort
          exits the file, no protection, no save.

     - file
          saves and exits current file.

     - next_file
          moves to the next file in ring.

     - prev_file
          moves to the previous file in the ring.

     - quit_all
          performs a quit on each file in the ring.


                           Bingo 2.11 Reference Manual
                                       64




     - abort_all
          aborts all files, no questions asks.

     - file_all
          saves and exits all files.

     - save_all
          saves all files.

     - modify_save_all
          saves each modified file in the ring.

     - delete_file
          asks for a filename to delete on disk.

     - zap_file
          delete's the disk copy of the current file. 

     - block_load
          loads a file into the current position

     - clean_file
          resets the 'modified' status of the file to FALSE.

     - clean_all
          resets the 'modified' status of all files in the ring to FALSE.

     - backup_file
          forces a backup attempt for the current file; this will only have
          an effect if the file's timed backup setting is on.

     - backup_all
          forces a backup attempt on each file in the ring.  For each file,
          this will only have an effect if the file's timed backup setting
          is on.

















                           Bingo 2.11 Reference Manual
                                       65




     Searching
     ---------

     - again
          repeat the last search operation.  If none has yet been done,
          works just like search.  If the last search operation done was a
          search & replace, only the search portion is done.

     - search
          search for text.  Will ask for the target text, and two
          modifiers:
                              I Ignore case
                              B Backwards
                              C Count
                              R Regexp
                              A Accent
          The 'C' option simply counts the number of occurrences.
          The 'R' option tells Bingo to interpret the input string as a
          regular expression.  See the section on searching and the READ.ME
          file for more details.
          The 'A' option tells Bingo to highlight the 'found' text until
          the next keystroke arrives.
          If the text is marked, the marking will be treated as
          linemarking, and Bingo's search will not continue past the end of
          the marked area.  This allows you to limit the searching scope to
          a particular area.


























                           Bingo 2.11 Reference Manual
                                       66




     - replace
          search and replace text.  Will ask for target, replacement text,
          and three modifiers:
                              I Ignore Case
                              B Backwards
                              G Global Search/Replace
                              R Regexp
                              A Accent
                              P Preserve
                              D Debug
          If Global is selected, Bingo will simply replace all matching
          occurrences with the replacement text.  If not, Bingo will stop
          at each match and ask:
                              Yes:      replace and continue.
                              No:       don't replace, but continue search.
                              Only:     Replace this and stop
                              Quit:     stop, no replacement.
                              Global:   Continue with global replacement
          'R' & 'A' options work as in the search case.
          'P' tells Bingo to preserve the original cursor location and
          return to it when done with the replace operation.
          'D' is useful for regular expression work.  It tells Bingo to
          display its conception of the target string (grouping, classes,
          occurance, etc).
          Marked text limits the range as in the search function.

     - search_macro
          will acted like the 'search' function, but will ask for a key to
          apply when found.  It will work like the replace function, but
          instead of replacing, it will execute the given key.  DO NOT use
          this function while recording a macro.

     - mark_last_found
          his will unmark the file and mark the last found text if you have
          not moved.

     - leap_forward
          searches forward for the next occurence of the next key pressed. 
          If the key is a function key or return, 'leap_forward' will use
          the previous target.

     - leap_backward
          searches backward for the next occurence of the next key pressed. 
          If the key is a function key or return, 'leap_backward' will use
          the previous target.







                           Bingo 2.11 Reference Manual
                                       67




     Navigation
     ----------

     - down_page
          moves down one windowful.

     - up_page
          moves up one windowful.

     - cursor_right
          moves right one char; wraps if necessary and if bounce mode is
          active.

     - cursor_left
          moves left one char, wraps if necessary and if bounce mode is
          active.

     - cursor_up
          moves up one line.

     - cursor_down
          moves down one line.

     - back_tab
          moves back to the previous tab stop.  Does not change the text at
          all.

     - begin_line
          goes to beginning of line.

     - end_line
          goes to end of line.

     - top_of_file
          jump to top of file.

     - bot_of_file
          jump to bottom of file.

     - next_word
          goes to beginning of next word.

     - prev_word
          goes to beginning of previous word.

     - top_of_screen
          jumps to the top of screen.

     - bottom_of_screen
          jumps to the bottom of screen.


                           Bingo 2.11 Reference Manual
                                       68




     - top_of_block
          jumps to the top of marked block.

     - bottom_of_block
          jumps to the bottom of marked block.

     - jump
          jump to position.  If the number is prefaced with a '+'
          character, Bingo will jump the relative distance forward.  If the
          number is prefaced with a '-' character, Bingo will jump the
          relative distance backwards.

     - center_line
          makes the current line the center line of the current window, and
          repaint the entire screen, all windows.  

     - begin_of_text
          moves the cursor to the first non-space character on the current
          line.

     - indent_up
          moves to previous line with same indentation scheme as current
          line.

     - indent_down
          moves to next line with same indentation scheme as current line.

     - snap_to_mouse_xy
          moves the cursor to the current mouse position, changing windows
          if necessary.

     - mouse_scroll
          moves the cursor to the mouse position when the mouse button is
          released;  while the button is depressed, the file will scroll up
          and down, depending on where the mouse cursor is moved.  The
          closer the cursor is to the top and bottom of the window, the
          faster the file will scroll.

     - place_mark
          drops a placemark, inquiring as which of the 10 allowed (0-9) you
          are concerned with.  Each placemark contains the filename, the
          line, the column.

     - jump_mark
          jumps to the specified placemark.  If the specified filename is
          not in the ring, Bingo will go and get it.

     - show_marks
          pops up a window showing the current placemarks in effect for
          this editing session.


                           Bingo 2.11 Reference Manual
                                       69




     - scroll_up
          scroll the display up one line, keeping the cursor in its same
          place.

     - scroll_down
          scroll the display down one line, keeping the cursor in its same
          place.

     - scroll_left
          scrolls the screen to left (the text to the right). 

     - scroll_right
          scrolls the screen to right (the txt to the left).







































                           Bingo 2.11 Reference Manual
                                       70




     Block Handling
     --------------

     - line_mark
          drop a line marker.  The block will be expanded or shrunk,
          depending on the last drop made.  Line marks consider the line to
          be the smallest markable element of text.

     - point_mark
          drop a point marker.  The block will be expanded or shrunk,
          depending on the last drop made.  Point marks consider the
          character to be the smallest markable element of text.

     - vertical_mark
          drop a vertical marker. Vertical, or column, blocks are defined
          by and upper and an opposing lower corner.

     - extend_mark
          extends the current marked block, using whichever marking scheme
          is in place.  Does nothing if no block is marked.

     - unmark
          unmark all text in current buffer.

     - cut
          cut the marked text to the block buffer.  The marked text is
          deleted from the file.  

     - copy
          copy the marked text to the block buffer.  The marked text is NOT
          deleted from the file.

     - paste
          pastes the contents of the block buffer into the text at the
          current position.  If the contents were linemarked, the contents
          will be pasted, as lines, above the current line.  

     - paste_replace
          pastes the contents of the block buffer at the current location,
          overwriting the needed amount of space.  This is only valid when
          the paste buffer is Line or Vertical marked.

     - block_move
          moves the currently marked blocked of text to the cursor
          position.

     - block_copy
          copies the currently marked blocked of text to the cursor
          position.



                           Bingo 2.11 Reference Manual
                                       71




     - block_delete
          deletes the currently marked block of text to the block buffer;
          identical to cut.

     - block_save
          writes the currently marked text to a file.

     - swap_buf_and_block
          takes the currently marked portion, and swaps it with the current
          contents of the paste buffer.  The two blocks need not be of the
          same type.

     - report_bsize
          reports the number of lines and characters (line breaks in point
          marked blocks count as one character) the currently marked block
          spans.

     - name_buffer
          allows you to change the current paste buffer.  <return>
          specifies the default buffer, and 'a'-'z' specify their
          respective buffers.

     - buffer_info
          displays various pertinent information about all the paste
          buffers.

     - look_buffer
          displays the contents of the current buffer in a non-editable
          window.  This only displays up to the first 100 lines in the
          buffer.

     - cut_append
          works exactly like 'Cut', except it appends the marked text to
          the current contents of the buffer.  The text in the buffer and
          the marked text must be of the same type.

     - copy_append
          just as 'Cut_append', but performs a copy instead.

     - emacs_yank
          melds the unkill stack and the paste buffer together.  If the
          most recent block operation/deletion was a block operation,
          'emacs_yank' works exactly like 'paste', pushing the paste buffer
          contents into the text.  If the most recent operation was a
          deletion (word, line, -eol, -bol), 'emacs_yank' works like the
          'paste_kill' function, pulling text from the undo stack without
          disturbing its contents.  This allows you to use the deletion
          commands to manipulate text in concert with the paste buffer
          operations.



                           Bingo 2.11 Reference Manual
                                       72




     Utilities
     ---------

     - entab
          compresses the linemarked region specified or the entire file by
          converting spaces to tabs.

     - indent_tab
          compresses the leading spaces of the linemark region specified or
          the entire file by converting into the proper tabs.  Rounds to
          the nearest tab stop, thus "normalizing" the indention to tab
          stops.

     - detab
          expands the linemarked region specified or the entire file by
          converting tabs to spaces.

     - shift_block
          shifts the specified linemarked region the number of columns
          specified.  Positive numbers indicate right-shifting, negative
          numbers, left-shifting.  The character 't' is used to signify tab
          widths '-3t' shifts the block left 3 tabwidths.

     - lcase_block
          lowercases the linemarked region.

     - ucase_block
          uppercases the linemarked region.

     - fcase_block
          flips the case of the linemarked region.

     - word_count
          counts the words in the linemarked region, default the whole
          file.  A word here is defined as non-whitespace and non-
          punctuation characters, NOT by the settings of the 'conf_word'
          function.

     - strip_highbit
          strips the 8th bit in the linemarked region, default the whole
          file.

     - sort_block
          sorts block, ascending or descending, on a certain column.

     - reform_para
          reformats a block of text to conform to the right margin; a
          paragraph is defined as text between blank lines.  The total
          amount of text contained in a single paragraph cannot be larger
          than 30000 characters.


                           Bingo 2.11 Reference Manual
                                       73




     - repeat
          repeats a keystroke n times.  If n is '*', the function repeats
          until a search fails.  The function halts repetition on a search
          failure.  DO NOT use this command while you are recording a
          macro; you will get unpredictable results.

     - dup_line
          duplicates the current line and increments cursor to the next
          line.

     - align
          slides the linemarked region left or right to match indentation
          with the line immediately above the first marked line.  If not
          lines are marked, the current line is aligned.

     - match_delim
          finds the proper match for a delimiter.  Delimiters include
          'begin'/'end' to help Pascal programmers, as well as '({[<'.

     - time_stamp
          inserts the current date and time into the text.

     - fill_block
          fills a vertically marked block with a specified character.

     - center_text
          centers the current non-space text of the current line (or
          linemarked block) on its line, relative to the right margin.
























                           Bingo 2.11 Reference Manual
                                       74




     Extra Operations
     ----------------

     - help
          views the help file BINGO.HLP.  This file must be located in the
          same directory as BE.EXE.

     - info
          pops up an info window, providing information on current files in
          the ring, and about Bingo's current condition

     - pick_exec
          this allows you to pick a function descriptor and have it
          executed.

     - quit_and_save_status
          his function saves the current status of Bingo as well as the
          current files, so that the next time Bingo is invoked, you will
          be given the option to pick up where you left off.

     - global
          this allows you to execute any keystroke globally, throughout all
          the files in the ring.  DO NOT use this function while recording
          a macro.

     - query_quote
          inserts an integer or sequence of integers as its raw ASCII
          character.  The decimal values must be comma delimited.

     - ascii_table
          pops up a display of all Ascii characters.  By hitting Return on
          a character, you add it to the string.  When you hit Escape, the
          string is inserted into the text. 

     - toggle_display
          toggles the display size between 25 lines and 43/50 lines.  Will
          in all likelihood screw up the cursor shape, since the scan line
          counts will change.

     - load_profile
          loads the profile file of your choice, searching first the
          current directory then Bingo's home directory.  Prompts to see if
          you wish to load a keyset file.









                           Bingo 2.11 Reference Manual
                                       75




     - write_profile
          saves the text settings of the active buffer to the profile file
          of your choice in either the current directory or Bingo's home
          directory.  Settings include:

                         &ins=1     (insert mode, 1=yes, 0=no)
                         &tabs=5    (tabsize)
                         &wrap=1    (wordwrap, 1=yes, 0=no)
                         &indent=1  (autoindention mode, 1=yes, 0=no)
                         &cmode=0   (C mode, 0=off, 1=mode 1, etc)
                         &rmarg=65  (right margin)
                         &smart=0   (smart tabs, 1=yes, 0=no)
                         &match=0   (matching mode, 1=yes, 0=no)
                         &bspace=0  (backspace mode)
                         &timed=256 (timed backups, range 0 - 32000)
      
     - version_info
          displays various version information and the name of the person
          this copy was registered to, if it is a registered copy.

     - repeat_last
          repeats the last function executed.  

     - display_file
          will popup the named file into a scrollable box, similar to the
          help file.


























                           Bingo 2.11 Reference Manual
                                       76




     System Operations
     -----------------

     - chdir
          change the currently logged directory.

     - exec_command
          execute a DOS command, while leaving Bingo completely resident in
          memory.

     - shell
          shell to DOS, leaving Bingo completely resident in memory.

     - swap_execute
          execute a DOS command while swapping Bingo out.  This will cause
          Bingo to save copies of the buffers as well as state information,
          and leave behind an ~10k kernel.

     - swap_shell
          shell to DOS while swapping as above.
































                           Bingo 2.11 Reference Manual
                                       77




     Macros
     ------

          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          !!!!!                                         !!!!!
          !!!!! All of these functions will end a macro !!!!!
          !!!!!        being currently defined          !!!!!
          !!!!!                                         !!!!!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

     - define_scrap
          start scrap macro definition.  

     - onekey_def
          start single-key macro definition.

     - twokey_def
          start two-key macro definition.

     - scrap
          execute the scrap macro.

     - single_key_save
          save a single macro to a file for later recall.  Saves the key it
          is attached to also.

     - single_key_load
          load a single macro from a file.  Overwrites the current
          definition for the key, if it has one.

     - key_set_save
          saves entire keyset, including macros, but not the scrap.

     - key_set_load
          load entire keyset.

     - run_macro_file
          runs a macro from a file saved with single_key_save.

     - undefine_key
          undefines a key.

     - end_macro
          ends the recording of a current macro.  Mostly useless, but it
          made for a useful menu entry.

     - key_set_impress
          THIS FUNCTION HAS BEEN DELETED AS OF VERSION 2.10.




                           Bingo 2.11 Reference Manual
                                       78




     Windows
     -------

     - window_edit
          this function ask for a filename, then splits the window and
          essentially performs and edit_file function for the requested
          filename.

     - window_load
          works like window_edit, except it forces a reload of the named
          file.

     - window_split
          this simply splits the current window in two and uses the current
          file for both.

     - window_vertical
          splits the current window vertically.  Windows can only be split
          so once.

     - window_close
          closes the current window and expands the above window to use its
          space.

     - window_zoom
          toggles the display between zoomed mode.  When the display is
          zoomed, the current window takes up the entire display, but Bingo
          'remembers' the rest of the windows and will restore them when
          zoom mode is toggled again.

     - window_one
          this function makes the current window the only window, wiping
          out all other windows.

     - window_next
          this moves to the next window down, or wraps to the top window if
          necessary.

     - window_previous
          this moves to the next window up, or wraps to the bottom if
          necessary.

     - window_top
          jumps to the topmost, leftmost window.

     - window_bottom
          jumps to the bottom-most, rightmost window.





                           Bingo 2.11 Reference Manual
                                       79




     - window_resize
          this allows you to resize the current window (and its left or
          right sibling, if it exists) and the window below (and *its* left
          or right sibling, if it exists) by 'rubberbanding' the current
          status line up and down.















































                           Bingo 2.11 Reference Manual
                                       80




     Printing
     --------

     - print_file
          print the current file, or a marked block if there is one, using
          the current printer settings, to the current destination. 
          Whenever Bingo encounters a formfeed character, it will assume
          that is the start of a new page, and start the remainder of the
          line at the left margin.

     - send_lf
          send a line feed character to the destination.

     - send_ff
          send a formfeed character to the destination

     - send_sequence
          send a sequence of character values to the printer; e.g.
                         12,12,12,12,12
          sends a series of 5 ASCII 12's (decimal) to the destination
































                           Bingo 2.11 Reference Manual
                                       81




     Error Parsing and Undo
     ----------------------

     - setup_err_parse
          this function will prompt you for a filename.  Bingo will from
          then on use the named file as the error file.  This must be
          called before next_error, prev_error, or last_error are called.

     - next_error
          moves, within the current window, to the next error as found in
          the current error file.  If no more errors can be found, Bingo
          will say so, and display the last non-blank line in the error
          file.  Otherwise, Bingo will edit the appropriate file into the
          current window, as well as highlighting the line in the error
          file being referenced.

     - prev_error
          same as error except it moves backward through the error file.

     - last_error
          redisplays the last error message, if there was one.

     - rotate_kill
          pops up the current kill stack and allows you to arbitrarily move
          a line of text to the top of the stack.

     - unkill
          inserts the top member of the stack at the current position.  If
          the top member of the stack was a full line, it is inserted above
          the current line.  Removes the top member from the stack.

     - paste_kill
          inserts the top member of the stack at the current position.  If
          the top member of the stack was a full line, it is inserted above
          the current line.  Leaves the stack itself alone.

     - restore_line
          restores the current line to its former form.














                           Bingo 2.11 Reference Manual
                                       82




     Configuration
     -------------

     - save_settings
          saves the current config settings to the file you name, usually
          BINGO.INI.  Upon startup, Bingo looks in the local directory then
          in Bingo's execution directory for BINGO.INI.

     - conf_color
          configure the color settings.  You select the color you are
          interested in by pressing the appropriate color.  Then, by
          watching the bottom line on the screen and pressing the up and
          down arrow keys for the foreground and the pageup and pagedown
          keys for the background, you select the color you want.  Pressing
          return will select the color.  For the overscan (border)
          attribute, only the background attribute matters.

     - conf_lfs
          alter the lfs-only setting.  If on, this setting has Bingo write
          files with lines separated by LF's only, in the UNIX fashion. 
          Otherwise, Bingo uses CR-LF pairs to delimit lines.

     - conf_backups
          allows you to specify the character Bingo uses to automatically
          create backup files when a file is saved.  The algorithm used
          takes the character you give and uses it to flesh out the
          extension of the original file to three characters; if the
          extension is already 3 characters long, the backup character
          replaces the third character of the extension.  For example, if
          the backup character is '$', 
               main.c         becomes        main.c$$
               main.cp        becomes        main.cp$
               main.pas       becomes        main.pa$

     - conf_eof
          alter whether Bingo writes a EOF character at the end of files
          (^Z).

     - conf_tabexpand
          THIS FUNCTION HAS BEEN DELETED AS OF VERSION 2.10.

     - conf_search
          allows you to predetermine which flags (I/G/B/etc...) will be set
          initially for a search and replace attempts.

     - conf_stripping
          onfigure whether Bingo strips the high bit of characters when
          reading.  Only really useful when reading Wordstar files.




                           Bingo 2.11 Reference Manual
                                       83




     - conf_rmargin
          set the right margin.  Affects paragraph reformatting and word
          wrap.  This changes the current buffer's setting and the global
          setting.    
     - conf_autoindent
          set whether Bingo uses autoindent mode.  Affects paragraph
          reformatting and word wrap.  This changes both the current
          buffer's setting and the global setting.

     - conf_wordwrap
          set the word wrap mode.  This changes both the current buffer's
          setting and the global setting.

     - conf_insert
          whether Bingo is in insert/overwrite mode.  This changes both the
          current buffer's setting and the global setting.

     - conf_tabsize
          set the tabsize.  This changes both the current buffer's setting
          and the global setting.

     - conf_backspace
          configure the backspace mode
                         1. Delete single chars
                         2. Delete spaces back to tab setting
                         3. Delete spaces to left margin
                         4. Rubout
          This changes both the current buffer's setting and the global
          setting.

     - conf_macro_death
          set whether a keystroke interrupts macros.  If on, this will slow
          things down a bit, but can prevent runaway macros.

     - conf_cmode
          configure whether Bingo uses C Mode on *.c and *.h files.  Allows
          you to choose between two different modes of C indention:

                    for(i=0;i<10;i++){   and    for(i=0;i<10;i++)
                         ...stuff...            {
                    }                                ...stuff...
                                                }
          This changes both the current buffer's setting and the global
          setting.

     - conf_sound
          allows you to set the frequency of the beep Bingo uses.  Setting
          it to zero will effectively turn off the sound.




                           Bingo 2.11 Reference Manual
                                       84




     - conf_mdelay
          allows you to specify the timing delay between repetitions of a
          function(s) being executed while a mouse button is held down. 
          For example, on reasonably quick machines, paging down while
          holding the mouse button down on one of the status line
          "hotspots" occurred so fast with version 2.0 so as to be useless. 

     - conf_button_wait
          allows you to configure, in milliseconds, the amount of delay
          Bingo will wait for the second click of a double click.

     - conf_shadow
          silly function, configures whether Bingo uses "shadow" boxes. 
          Play with it, amaze your friends.

     - conf_win_close
          controls whether Bingo automatically closes a window when the
          file is closed.

     - conf_def_ext
          allows you to specify the file extensions Bingo will attempt to
          use when you specify a filename without '.'.  The extensions are
          checked in order.

     - conf_video_mode
          allows you to choose from between three screen handling options:
                    - autodetect with retrace checking
                    - autodetect with no retrace checking
                    - 43 or 50 line mode, if supported
          Retrace checking will only be in effect if there are only 25
          lines to be displayed.

     - conf_cursor
          THIS FUNCTION HAS BEEN DROPPED FROM VERSION 2.10.

     - conf_prn
          set the printer destination, between the default serial port, the
          default parallel port, or a file.

     - conf_tmarg
          set the top margin, in terms of number of lines.

     - conf_bmarg
          set the bottom margin, in terms of number of lines.

     - conf_lmarg
          set the left margin which will be used when printing, in terms of
          spaces.

     - conf_lines_per
          set the lines per page, counting the top margin.

                           Bingo 2.11 Reference Manual
                                       85




     - conf_null
          THIS FUNCTION HAS BEEN DROPPED FROM VERSION 2.10.

     - conf_ctrl_display
          THIS FUNCTION HAS BEEN DROPPED FROM VERSION 2.10.

     - conf_kill_size
          alters the size of the kill buffer.

     - conf_cut_stack
          allows you to choose whether text about to be discarded from the
          paste buffer should be placed on the stack.  If this is on, this
          will slow block operations down a bit, but it is a nice safety
          feature.

     - conf_auto_cut
          allows you to toggle how the 'cut' & 'copy' functions respond
          when no block has been marked.  If auto cut is active, these
          functions will cut (or copy) the current line.  If auto cut is
          not active, the current line will be Linemarked.

     - conf_smart_tabs
          allows you to specify whether or not "Smart" tabs are active. 
          Smart tabs cause the 'insert_tab' function to tab over to the
          same column as the next nonspace character on the line previous. 
          This changes both the current buffer's setting and the global
          setting.

     - conf_matching
          configures matching mode.  If matching mode is active, entering a
          '[{<(' character will cause its matching close member to be
          entered automatically.  This changes both the current buffer's
          setting and the global setting.

     - conf_trail
          allows you to configure whether or not Bingo strips trailing
          spaces.















                           Bingo 2.11 Reference Manual
                                       86




     - conf_bounce
          allows you what cursor movement paradigm Bingo uses.  If Bounce
          mode is active, Bingo views the entire document as one long
          string of characters.  Thus, you cannot move off of exiting text. 
          Further, the cursor will automatically wrap at the end of lines. 
          If Bounce mode is turned off, cursor movement is by the more
          traditional method, where you can move any where (horizontally)
          you wish.

     - conf_key_bios
          this governs whether or not Bingo will use the Extended Keyboard
          Bios if it is found.  On some machines, Bingo may identify it
          incorrectly, or there may be compatibility problems.  This
          function allows you to tell Bingo to disregard the extended Bios,
          even if it is found.  If this is on, the two sets of arrow keys,
          for example, will be recognized as different.  They will
          therefore have to be defined separately in your keyboard config
          file.

     - conf_erronly
          allows you to tell Bingo to further restrict valid error lines to
          those containing the word 'error' (any case).  

     - conf_mouse
          controls whether or not Bingo uses a Mouse, if it finds one.

     - conf_profile
          controls whether Bingo will check for, and load if found, the
          profile file of a file's file extension each time a file is
          loaded.

     - conf_word
          allows you to edit the string containing what characters are not
          part of a word.

     - conf_scr_save
          controls whether Bingo will save, and then restore, the DOS
          screen upon startup and exit.  Will cost you some memory.

     - conf_name_save
          controls whether, and how, Bingo saves the last 15 files edited. 
          You can turn it off, tell it to save the info in the current
          directory (where Bingo looks first upon startup), or in Bingo's
          home directory.

     - conf_delims
          allows you to input and edit pairs of delimiters for Bingo to
          balance with the 'match_delim' function.  Both delimiters must be
          non-blank.



                           Bingo 2.11 Reference Manual
                                       87




     - conf_eol_display
          allows you to enter the ASCII decimal value of the character to
          be displayed as the end of line character.  The default is 32,
          the space character.

     - conf_exit_to_pick
          controls Bingo's actions upon exit.  If turned on, Bingo will
          popup an edit box when you quit the program (except when you exit
          through the abort_all function).

     - conf_prn_eol
          controls whether Bingo terminates lines with a linefeed only or a
          carraige return/linefeed pair while printing.

     - conf_prn_lineno
          sets whether or not Bingo prints line numbers on each line it
          prints.

     - conf_prn_header
          sets whether or not Bingo prints page headers on each page it
          prints.  Headers consist of the filename, the page number, and
          the date/time.

     - conf_timed_backups
          allows you to specify how often, in terms of changes, to save a
          backup of a file.  A value of zero (0) indicates no automatic
          backups are to take place.  The value input becomes the defult
          value for any subsequently entered files, and becomes the value
          for the current file; it does not change the value for any
          existing files.  Any operation which changes the file will
          increment the change counter.  The current number of changes for
          each file is displayed on the info screen.  When the
          predetermined number of changes has occurred, the file is saved
          as 
                 backXXXX.bak 
          where XXXX is the buffer 4 digit id number.  This id number is
          unique over an editing session, and is displayed as part of the
          info screen.  The backup files are identical to the files
          themselves, except that the first line contains the original name
          of the file (full pathname) and the time of the backup. 

          *Note*: Be very careful with setting this value.  Generally, a
          setting between 256 and 1024 is very useful.  However, if you are
          editing a multi-megabyte file, backups can be a large pain
          because of the time involved in saving the file.  

     - conf_carriage 
          this function toggles on and off whether or not the 'carraige'
          function splits lines. 



                           Bingo 2.11 Reference Manual
                                       88




     - conf_delete_join 
          this function toggles on and off whether or not deleting at the
          end of a line brings the next line up. 

















































                           Bingo 2.11 Reference Manual
                                       89




                                License Agreement
                                -----------------

          This section tells you is how to become a registered user once
     you decide that you like the program and want to use it on a regular
     basis.

          Bingo is distributed under the shareware marketing concept; it is
     not free software and it has not been released to the public domain.
     The documentation, executable images, and all other files distributed
     with Bingo are copyrighted.

          Shareware is a way of distributing computer software that allows
     you to try out a program before you purchase it. Programs distributed
     as shareware typically give you some period of time to use the program
     and evaluate its usefulness to you. If the program doesn't meet your
     needs, you're under no obligation to pay for it. If you do find the
     program useful and wish to continue using it on a regular basis, the
     shareware program's author usually requests that you pay for the
     program by sending him or her a completed registration form and
     payment. This is the approach I have taken in making Bingo available
     to the public.

          If you find Bingo to be a useful addition to your software
     library, you're requested to become a registered user by completing
     the enclosed registration form and returning it along with the
     indicated license/registration fee. I hope that you will agree that
     the $40.00 license fee (for the Single Version registration) or $75.00
     license fee (for the Lifetime registration) is a small price to pay
     for the continued use of the program. It requires a large investment
     to develop, market, and support a product of this complexity. Your
     support in the form of a license/registration fee will continue to
     make good software available at low prices.

          Quantity discounts are available to business, government, and
     other organizations that wish to use Bingo on multiple computer
     systems. Bingo is also available at very special rates to
     organizations who wish to use it for promotional purposes. Write the
     author for information on using the program this way.

          You are granted a limited license to use and examine Bingo on a
     trial basis to determine if Bingo is suitable for your needs. If you
     find Bingo useful and continue to use it on a regular basis, you
     should complete and return the registration form along with the
     indicated license/registration fee.







                           Bingo 2.11 Reference Manual
                                       90




          You are encouraged to make copies of Bingo for the trial use of
     other individuals and organizations, subject to the following
     restrictions:
          1)   All Bingo distribution files must be copied in unmodified
               form.
          2)   You may not include any other files with the distributed
               copy.

          You may not distribute Bingo with any other product or
     service without written permission of the author.

          Bingo may be included on electronic bulletin board systems for
     downloading by users of the bulletin board provided the above
     restrictions are met.

          Bingo and all accompanying materials are provided "as is" without
     warranty of any kind. The entire risk of using Bingo is assumed by
     you.

          The author, Christopher R. S. Schanck, makes no warranty of any
     kind, expressed or implied, including but not limited to any
     warranties of merchantability and fitness for a particular purpose.

          In no event will the author, Christopher R. S. Schanck, be liable
     for any damages whatsoever arising out of your use or inability to use
     the program.

          If you use Bingo on a regular basis, you should complete the
     registration form at the end of this document and return it along with
     the indicated license/registration fee. Registration gives you the
     right to use the software as documented in the license.

          A registration fee of $40.00 establishes you as a registered user
     of the current version of Bingo. 

          A registration of $75.00 establishes you as a Lifetime
     registrant, and in this situation you are entitled to the next version
     of Bingo free.  After that, you will be notified of each subsequent
     version, and they will be available for a five (5) dollar fee.

          When you submit your registration fee, unless you specifically
     request otherwise, the author will mail you a copy of the current
     version of Bingo and accompanying documentation on disk (3.5" or
     5.25") for free.  Mailing addresses outside of the continental United
     States will need to submit a $15.00 shipping and handling charge.







                           Bingo 2.11 Reference Manual
                                       91




                         Registration Form - Bingo 2.11
                         -------------------------------

     Remit to:            Christopher R.S. Schanck
                                   PO Box 279
                                Hanover MD 21076

                                   Bingo 2.11

     Disk size, circle one: (   3.5"   /   5.25"   / SEND NO DISK )


     Registration OPTIONS:

     One-Time Registration ............ _____ @ $ 40.00 each  $ _____

     Lifetime Registration ............ _____ @ $ 75.00 each  $ _____



     Bingo printed Documentation ...... _____ @ $ 15.00 each  $ _____



                                                    Subtotal  $ _____


     Shipping, Outside the Continental U.S. ......... $ 15.00 $ _____

                                            Total (U.S.Funds) $ _____
         


     Name: __________________________________________________________

     Company: _______________________________________________________

     Address: _______________________________________________________

     ________________________________________________________________

     ________________________________________________________________

     Day Phone: _______________________________ 

     Eve Phone: _______________________________


                    Prices subject to change without notice.



                           Bingo 2.11 Reference Manual
                                       92




                          Registration Form - Continued

     I acquired Bingo 2.11 from

     [ ] - Friend                

     [ ] - Computer Club
     Which One? ______________________________________________________

     [ ] - Electronic BBS        
     Which One? ______________________________________________________
     Phone #? ________________________________________________________

     [ ] - Other
     Specify: ________________________________________________________

     I would also appreciate any input you would care to give concerning
     Bingo. If you have any ideas or comments that would make Bingo a
     better program, then please let me know.

































                           Bingo 2.11 Reference Manual
                                       93




                                   The Author
                                   ----------

          I received my M.S. in Computer Science from The Ohio State
     University in March of 1990, and am now employed by a large
     engineering/manufacturing firm in the Baltimore area.  I was born in a
     steel town in Eastern Pennsylvania, and attended The Pennsylvania
     State University as an undergraduate, graduating in May of 1988. I
     hold a first-degree Black Belt in Tae Kwon Do, and I am an avid reader
     of science-fiction, fantasy, military fiction, mythology, and just
     about any other occurance of the printed word.









































                           Bingo 2.11 Reference Manual
                                       94




                                Acknowledgements
                                ----------------

          There are many I must acknowledge for the inspiration for writing
     this program: family, friends, colleagues. In addition, I want to
     thank Borland for their excellent Turbo C compiler, which I used to
     write Bingo; IBM for making my beloved baby, lo those many years ago;
     and all the other folks who wrote software I used to create Bingo. 
     Thanks to all my computer science professors, who instilled the
     knowledge to write such an application in me, often against my will. 
     I also thank the members of the Columbus Computer Society (CCS),
     particularly the members of the Programmer's SIG, several of whom
     served as Beta test people during versions 1.0 to 2.0, putting their
     programs In Harm's Way as they tested features.
          Thanks to the folks at Home Box Office for running an endless
     amount of truly bad movies at all hours of the night to keep me
     company on some of the more involved programming adventures.  
          And mucho thanks to my premier beta-tester, Bob Boyken, who was
     also the first registrant of version 1.1a.  Bob provided me with much
     needed time, effort, and ideas, not to mention a help file.  His
     efforts, both in using Bingo regularly, and in testing things for me
     on particular hardware combinations, was nothing short of awesome.
          Additional thanks to Rich Thompson, for looking at the earliest
     virtual-memory version of 2.10 and not cringing.  Or at least not
     cringing too much.
          Thanks to Beaker, Ernie, Cookie, and the rest of the Muppets for
     frequent sanity checks.
          Thanks to the BedPiglet, for understanding the time involved in
     doing this, and for her smile.























                           Bingo 2.11 Reference Manual
                                       95




                                      Index
                                      -----

     abort . . . . . . . . . . . . . . . . . . . 21, 22, 40, 50, 64, 65, 88
     abort_all . . . . . . . . . . . . . . . . . . . . . . . . . 40, 65, 88
     again . . . . . . . . .  7, 18, 20, 26, 32, 38, 46, 51, 52, 55, 66, 79
     align . . . . . . . . . . . . . . . . . . . . . . . . . . .  3, 48, 74
     ascii_table . . . . . . . . . . . . . . . . . . . . . . . . 36, 50, 75
     author  . . . . . . . . . . . . . . . . . . . . . . . . 54, 90, 91, 94
     back_space  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
     back_tab  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     backup_all  . . . . . . . . . . . . . . . . . . . . . . . . . . 41, 65
     backup_file . . . . . . . . . . . . . . . . . . . . . . . . . . 41, 65
     begin_line  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     begin_of_text   . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     block_copy  . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 71
     block_delete  . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     block_load  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
     block_move  . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 71
     block_save  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
     bot_of_file . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     bottom_of_block . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     bottom_of_screen  . . . . . . . . . . . . . . . . . . . . . . . . . 68
     buffer_info . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     carriage  . . . . . . . . . . . . . . . . . . . . . . . . . 39, 62, 88
     center_line . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     center_text   . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
     chdir . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52, 77
     choose_file . . . . . . . . . . . . . . . . . . . . . . . . . . 39, 64
     clean_all   . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 65
     clean_file  . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 65
     cmd_line  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
     compuserve  . . . . . . . . . . . . . . . . . . . . . . . . . 6, 9, 10
     conf_auto_cut . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_autoindent . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_backspace  . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_backups  . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
     conf_bmarg  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_bounce . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_button_wait  . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_cmode  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_color  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
     conf_ctrl_display . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_cursor . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_cut_stack  . . . . . . . . . . . . . . . . . . . . . . . . 59, 86
     conf_def_ext  . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_delims   . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_eof  . . . . . . . . . . . . . . . . . . . . . . . . . . . 39, 83
     conf_eol_display  . . . . . . . . . . . . . . . . . . . . . . . . . 88
     conf_erronly  . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_exit_to_pick   . . . . . . . . . . . . . . . . . . . . . . . . 88

                           Bingo 2.11 Reference Manual
                                       96




     conf_insert . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_key_bios . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_kill_size  . . . . . . . . . . . . . . . . . . . . . . . . 59, 86
     conf_lfs  . . . . . . . . . . . . . . . . . . . . . . . . . . . 39, 83
     conf_lines_per  . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_lmarg  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_macro_death  . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_matching . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_mdelay . . . . . . . . . . . . . . . . . . . . . . . . . . 34, 85
     conf_mouse  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_name_save  . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_null . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_prn  . . . . . . . . . . . . . . . . . . . . . . . . . . . 85, 88
     conf_prn_eol  . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
     conf_prn_header   . . . . . . . . . . . . . . . . . . . . . . . . . 88
     conf_prn_lineno   . . . . . . . . . . . . . . . . . . . . . . . . . 88
     conf_profile  . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_rmargin  . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_scr_save   . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_search . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83
     conf_shadow . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_smart_tabs . . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_sound  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_stripping  . . . . . . . . . . . . . . . . . . . . . . . . . . 83
     conf_tabexpand  . . . . . . . . . . . . . . . . . . . . . . . . . . 83
     conf_tabsize  . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     conf_timed_backups  . . . . . . . . . . . . . . . . . . . . . . 41, 88
     conf_tmarg  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_trail  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
     conf_video_mode . . . . . . . . . . . . . . . . . . . . . . . . . . 85
     conf_word   . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
     conf_wordwrap . . . . . . . . . . . . . . . . . . . . . . . . . . . 84
     copy  . . . . . . .  5, 10, 12, 40, 46, 47, 59, 65, 71, 72, 76, 86, 91
     copy_append . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
     cur_file  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
     cursor_down . . . . . . . . . . . . . . . . . . . . . . . . . . 34, 68
     cursor_left . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     cursor_right  . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     cursor_up . . . . . . . . . . . . . . . . . . . . . . . . . . . 51, 68
     cut . . . . . . . . . . . . . . . . . . . . 46, 47, 59, 63, 71, 72, 86
     cut_append  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
     default_bspace  . . . . . . . . . . . . . . . . . . . . . . . . . . 63
     default_del . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
     define_scrap  . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     del_bol . . . . . . . . . . . . . . . . . . . . . . . . . . 38, 59, 63
     del_char  . . . . . . . . . . . . . . . . . . . . . . . . . . . 62, 63
     del_eol . . . . . . . . . . . . . . . . . . . . . . . . . . 38, 59, 63
     del_line  . . . . . . . . . . . . . . . . . . . . . . . . . 38, 59, 63
     del_word_lt   . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
     del_word_rt   . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
     delete_file . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 65

                           Bingo 2.11 Reference Manual
                                       97




     detab . . . . . . . . . . . . . . . . . . . . . . . . . . .  2, 48, 73
     display_file  . . . . . . . . . . . . . . . . . . . . . . . . . 51, 76
     down_page . . . . . . . . . . . . . . . . . . . . . . . . . . . 34, 68
     dup_line  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
     edit_file . . . . . . . . . . . . . . . . . . . 39, 40, 56, 58, 64, 79
     emacs_yank  . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     end_line  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     end_macro . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     entab . . . . . . . . . . . . . . . . . . . . . . . . . . .  2, 48, 73
     exec_command  . . . . . . . . . . . . . . . . . . . . . . . . . 52, 77
     extend_mark . . . . . . . . . . . . . . . . . . . . . . . . . . 46, 71
     fcase_block . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     file   2-4, 7, 11-16, 19, 21, 23-26, 28-31, 33, 34, 37, 39-42, 45, 46,
                    48-51, 55, 56, 57-59, 62, 64-69, 71-73, 75, 76, 78, 79,
                                                      81-83, 85, 87, 88, 95
     file_all  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
     fill_block  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
     global  . . . . . . . . . . . . . . . . . . . . . . 50, 67, 75, 84, 86
     help  . . . . . . . 2, 3, 8, 12, 22, 33, 35, 43, 49, 51, 60, 74-76, 95
     indent_down . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     indent_up . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     info  . . . . . . . . . . .  5, 22, 35, 47, 49, 52, 72, 75, 76, 87, 88
     insert_tab  . . . . . . . . . . . . . . . . . . . . . . . . . . 62, 86
     jump  . . . . . . . . . . . . . . . . . . . . . . . . . 45, 58, 68, 69
     jump_mark . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     key_set_impress . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     key_set_load  . . . . . . . . . . . . . . . . . . . . . . . . . 26, 78
     key_set_save  . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     last_error  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
     lcase_block . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     leap_backward   . . . . . . . . . . . . . . . . . . . . . . . . . . 67
     leap_forward  . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
     license . . . . . . . . . . . . . . . . . . . . . . . . . .  5, 90, 91
     line_mark . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
     load_file . . . . . . . . . . . . . . . . . . . . . 29, 30, 39, 56, 64
     load_profile  . . . . . . . . . . . . . . . . . . . . . . . . . 50, 75
     look_buffer . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     macro  2, 3, 7, 13, 25, 28-30, 33, 42, 43, 50, 54, 55, 58, 67, 74, 75,
                                                                     78, 84
     main_menu . . . . . . . . . . . . . . . . . . . . . . . . . . . 20, 62
     mark_last_found   . . . . . . . . . . . . . . . . . . . . . . . . . 67
     match_delim . . . . . . . . . . . . . . . . . . . . . . . . . . 74, 87
     modify_save . . . . . . . . . . . . . . . . . . . . . . 29, 40, 64, 65
     modify_save_all . . . . . . . . . . . . . . . . . . . . . . 29, 40, 65
     mouse_scroll  . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     name_buffer . . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     next_error  . . . . . . . . . . . . . . . . . . . . . . . . 29, 58, 82
     next_file . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64
     next_word . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     onekey_def  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     open_end  . . . . . . . . . . . . . . . . . . . . . . . . . . . 29, 30

                           Bingo 2.11 Reference Manual
                                       98




     paste . . . . . . . . . . . . . 21, 46, 47, 52, 59, 60, 71, 72, 82, 86
     paste_kill  . . . . . . . . . . . . . . . . . . . . . . 47, 60, 72, 82
     paste_replace . . . . . . . . . . . . . . . . . . . . . . . . . 46, 71
     pick_exec . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
     pick_file   . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
     place_mark  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     point_mark  . . . . . . . . . . . . . . . . . . . . . . . . . . 33, 71
     prev_error  . . . . . . . . . . . . . . . . . . . . . . . . . . 58, 82
     prev_file . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64
     prev_word . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     print_file  . . . . . . . . . . . . . . . . . . . . . . . . . . 57, 81
     query_quote . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
     quit  . . . . . . . . . . . . . . . . . 21, 39, 40, 49, 64, 67, 75, 88
     quit_all  . . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 64
     quit_and_save_status  . . . . . . . . . . . . . . . . . . . . . . . 75
     reform_para . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     register  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  5
     rename_file . . . . . . . . . . . . . . . . . . . . . . . . . . 39, 64
     repeat  . . . . . . . . . . . . . . . . . . . 2, 3, 51, 54, 66, 74, 76
     repeat_last   . . . . . . . . . . . . . . . . . . . . . . . . . 51, 76
     replace . . . . . . . . . . .  2, 3, 28, 42-44, 46, 50, 66, 67, 71, 83
     report_bsize  . . . . . . . . . . . . . . . . . . . . . . . . . 47, 72
     restore_line  . . . . . . . . . . . . . . . . . . . . . . . . . 59, 82
     rotate_kill . . . . . . . . . . . . . . . . . . . . . . . . . . 60, 82
     run_macro_file  . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     save_all  . . . . . . . . . . . . . . . . . . . . . . . . . 29, 40, 65
     save_file . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64
     save_settings . . . . . . . . . . . . . . . . . . . . . . . . . 14, 83
     scrap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54, 78
     scroll_down . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
     scroll_left   . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
     scroll_right  . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
     scroll_up . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
     search  . . . . . . . . 2, 3, 23, 28-30, 42-44, 50, 54, 66, 67, 74, 83
     search_macro  . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
     send_ff . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
     send_lf . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
     send_sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
     setup_err_parse . . . . . . . . . . . . . . . . . . . . . . 29, 58, 82
     shell . . . . . . . . . . . . . . . . . . . . . . . . . . . 37, 52, 77
     shift_block . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     show_marks  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     single_key_load . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     single_key_save . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     snap_to_mouse_xy  . . . . . . . . . . . . . . . . . . . . . . . 33, 69
     sort_block  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     strip_highbit . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     support . . . . . . . . . . . . . . 2, 3, 5, 8, 17, 35, 37, 42, 54, 90
     swap_buf_and_block  . . . . . . . . . . . . . . . . . . . . . . . . 72
     swap_execute  . . . . . . . . . . . . . . . . . . . . . 29, 51, 52, 77
     swap_shell  . . . . . . . . . . . . . . . . . . . . . . . . . . 52, 77

                           Bingo 2.11 Reference Manual
                                       99




     switch_file . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 64
     time_stamp  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
     toggle_autoindent . . . . . . . . . . . . . . . . . . . . . . . . . 62
     toggle_cmode  . . . . . . . . . . . . . . . . . . . . . . . . . 61, 62
     toggle_display  . . . . . . . . . . . . . . . . . . . . . . . . . . 75
     toggle_ins  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
     toggle_wrap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
     top_of_block  . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
     top_of_file . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     top_of_screen . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     twokey_def  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     ucase_block . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     undefine_key  . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
     unkill  . . . . . . . . . . . . . . . . . . . . . . 38, 47, 60, 72, 82
     unmark  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67, 71
     up_page . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
     version_info  . . . . . . . . . . . . . . . . . . . . . . . . .  5, 76
     vertical_mark . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
     virtual memory  . . . . . . . . . . . . . . . . . . . . . 2, 7, 15, 16
     window_bottom . . . . . . . . . . . . . . . . . . . . . . . . . 29, 79
     window_close  . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
     window_edit . . . . . . . . . . . . . . . . . . . . . . . . . . 56, 79
     window_load . . . . . . . . . . . . . . . . . . . . . . . . . . 56, 79
     window_next . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
     window_one  . . . . . . . . . . . . . . . . . . . . . . . . 29, 56, 79
     window_previous . . . . . . . . . . . . . . . . . . . . . . . . 29, 79
     window_resize . . . . . . . . . . . . . . . . . . . . . . . 29, 56, 80
     window_split  . . . . . . . . . . . . . . . . . . . . . . . 29, 56, 79
     window_top  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
     window_vertical . . . . . . . . . . . . . . . . . . . . . . . . 56, 79
     window_zoom . . . . . . . . . . . . . . . . . . . . . . . . . . 56, 79
     word_count  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
     write_profile . . . . . . . . . . . . . . . . . . . . . . . . . 50, 76
     zap_file  . . . . . . . . . . . . . . . . . . . . . . . . . . . 40, 65


















                           Bingo 2.11 Reference Manual
                                       100

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                                License Agreement
                                -----------------

          This section tells you is how to become a registered user once
     you decide that you like the program and want to use it on a regular
     basis.

          Bingo is distributed under the shareware marketing concept; it is
     not free software and it has not been released to the public domain.
     The documentation, executable images, and all other files distributed
     with Bingo are copyrighted.

          Shareware is a way of distributing computer software that allows
     you to try out a program before you purchase it. Programs distributed
     as shareware typically give you some period of time to use the program
     and evaluate its usefulness to you. If the program doesn't meet your
     needs, you're under no obligation to pay for it. If you do find the
     program useful and wish to continue using it on a regular basis, the
     shareware program's author usually requests that you pay for the
     program by sending him or her a completed registration form and
     payment. This is the approach I have taken in making Bingo available
     to the public.

          If you find Bingo to be a useful addition to your software
     library, you're requested to become a registered user by completing
     the enclosed registration form and returning it along with the
     indicated license/registration fee. I hope that you will agree that
     the $40.00 license fee (for the Single Version registration) or $75.00
     license fee (for the Lifetime registration) is a small price to pay
     for the continued use of the program. It requires a large investment
     to develop, market, and support a product of this complexity. Your
     support in the form of a license/registration fee will continue to
     make good software available at low prices.

          Quantity discounts are available to business, government, and
     other organizations that wish to use Bingo on multiple computer
     systems. Bingo is also available at very special rates to
     organizations who wish to use it for promotional purposes. Write the
     author for information on using the program this way.

          You are granted a limited license to use and examine Bingo on a
     trial basis to determine if Bingo is suitable for your needs. If you
     find Bingo useful and continue to use it on a regular basis, you
     should complete and return the registration form along with the
     indicated license/registration fee.




          You are encouraged to make copies of Bingo for the trial use of
     other individuals and organizations, subject to the following
     restrictions:
          1)   All Bingo distribution files must be copied in unmodified
               form.
          2)   You may not include any other files with the distributed
               copy.

          You may not distribute Bingo with any other product or
     service without written permission of the author.

          Bingo may be included on electronic bulletin board systems for
     downloading by users of the bulletin board provided the above
     restrictions are met.

          Bingo and all accompanying materials are provided "as is" without
     warranty of any kind. The entire risk of using Bingo is assumed by
     you.

          The author, Christopher R. S. Schanck, makes no warranty of any
     kind, expressed or implied, including but not limited to any
     warranties of merchantability and fitness for a particular purpose.

          In no event will the author, Christopher R. S. Schanck, be liable
     for any damages whatsoever arising out of your use or inability to use
     the program.

          If you use Bingo on a regular basis, you should complete the
     registration form at the end of this document and return it along with
     the indicated license/registration fee. Registration gives you the
     right to use the software as documented in the license.

          A registration fee of $40.00 establishes you as a registered user
     of the current version of Bingo. 

          A registration of $75.00 establishes you as a Lifetime
     registrant, and in this situation you are entitled to the next version
     of Bingo free.  After that, you will be notified of each subsequent
     version, and they will be available for a five (5) dollar fee.

          When you submit your registration fee, unless you specifically
     request otherwise, the author will mail you a copy of the current
     version of Bingo and accompanying documentation on disk (3.5" or
     5.25") for free.  Mailing addresses outside of the continental United
     States will need to submit a $15.00 shipping and handling charge.




                         Registration Form - Bingo 2.11
                         -------------------------------

     Remit to:            Christopher R.S. Schanck
                                   PO Box 279
                                Hanover MD 21076

                                   Bingo 2.11

     Disk size, circle one: (   3.5"   /   5.25"   / SEND NO DISK )


     Registration OPTIONS:

     One-Time Registration ............ _____ @ $ 40.00 each  $ _____

     Lifetime Registration ............ _____ @ $ 75.00 each  $ _____



     Bingo printed Documentation ...... _____ @ $ 15.00 each  $ _____



                                                    Subtotal  $ _____


     Shipping, Outside the Continental U.S. ......... $ 15.00 $ _____

                                            Total (U.S.Funds) $ _____
         


     Name: __________________________________________________________

     Company: _______________________________________________________

     Address: _______________________________________________________

     ________________________________________________________________

     ________________________________________________________________

     Day Phone: _______________________________ 

     Eve Phone: _______________________________


                    Prices subject to change without notice.




                          Registration Form - Continued

     I acquired Bingo 2.11 from

     [ ] - Friend                

     [ ] - Computer Club
     Which One? ______________________________________________________

     [ ] - Electronic BBS        
     Which One? ______________________________________________________
     Phone #? ________________________________________________________

     [ ] - Other
     Specify: ________________________________________________________

     I would also appreciate any input you would care to give concerning
     Bingo. If you have any ideas or comments that would make Bingo a
     better program, then please let me know. 

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

## FILE2884.TXT

{% raw %}
```
Disk No: 2884                                                           
Disk Title: Bingo Text Editor                                           
PC-SIG Version: S2.11                                                   
                                                                        
Program Title: Bingo Text Editor                                        
Author Version: 2.11                                                    
Author Registration: $40.00/$75.00                                      
Special Requirements: 512K RAM and high density drive.                  
                                                                        
If you use an editor daily, as a programmer, a consultant who hops      
from system to system, or just as a regular everyday user who likes to  
have his/her own tools, or in any other situation where you need to     
depend on it, BINGO could very well be what you are looking for.  Why?  
In spite of its power, BINGO is very inexpensive, and does some things  
no other editors do.                                                    
                                                                        
High speed execution, along with particularly fast searches, screen     
handling, and file I/O make this package attractive. But what is        
particularly outstanding about BINGO is that it can handle up to 256    
Megabytes of file storage! In other words, BINGO will work with the big 
files most other text editors can't handle.                             
                                                                        
Other features include:                                                 
                                                                        
~ Full color support                                                    
                                                                        
~ Programmable integrated mouse support                                 
                                                                        
~ Support of VGA, EGA, & MCGA extended text modes                       
                                                                        
~ Superb macro capability                                               
                                                                        
~ Large suite of utility functions: entab; detab; command repeat; shift;
  etc.                                                                  
                                                                        
~ Custom define your own keyboard setup                                 
                                                                        
~ Complete menu system supporting most Bingo functions                  
                                                                        
~ Multiple files, multiple windows: view different sections of the same 
  file, or different files at the same time                             
                                                                        
~ Execute DOS commands, including command-line compilers within only ~2K
  of overhead                                                           
                                                                        
~ Regular expression search and replace                                 
                                                                        
~ Completely configurable from within itself                            
                                                                        
~ Use placemarks to mark positions in files                             
                                                                        
~ User definable help file                                              
                                                                        
~ Extensive block operation support, include point, line and column     
  marking, and two different sets of block operations                   
                                                                        
~ One default block buffer, plus 26 additional named buffers            
                                                                        
~ Wordwrap, paragraph formatting, and autoindent support included for   
  text processing work                                                  
                                                                        
~ C Mode supports programming in the C programming language             
                                                                        
~ User-defined delimiter and indentation matching                       
                                                                        
~ Directory list picker                                                 
                                                                        
~ Execute any Bingo function from within Bingo whether it has been      
  assigned to a key or not using a 'function picker'                    
                                                                        
~ Interrupt Bingo at any point and exit, and when you restart Bingo     
  it will pick up exactly where you left off                            
                                                                        
~ Print files & blocks through the serial port, parallel port, or to a  
  file, with or without line numbers                                    
                                                                        
~ Set printing left margin, top margin, and lines per page              
                                                                        
~ Automatic processing of errors generated by the Borland and Microsoft 
  developmental tools                                                   
                                                                        
~ Undelete stack of deleted items                                       
                                                                        
~ Execute any command or macro "globally" over all files in the ring    
                                                                        
~ Profile files allow file extension specific settings                  
                                                                        
The size of files this program can handle, and its adaptability and     
configurability to the user's needs make this program a good value for  
the money.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1992 PC-SIG, Inc.                                         
```
{% endraw %}

## HOME&BUS.TXT

{% raw %}
```
T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed

by title, filename, PC-SIG disk number, and every word in the program
description.  A new utility, Narc, is implemented so you can look at the
program files and the author's on-line documentation without having to
first copy the program to your hard disk.  By using WordCruncher and
Narc, you can quickly find the program you want and review it to be
sure, without ever having to run it from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
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
you pay a registration fee to the author. However, if the program does
not fit your needs, there is no obligation to send the registration fee.
It's that simple

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
ensure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and checked every program
submitted to ensure that no viruses make their way to your computer or
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
how shareware affects what we do.

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
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2884

     Volume in drive A has no label
     Directory of A:\

    BINGO211 ZIP    197338   5-12-92  12:16a
    GO-STRT  DAT       587   7-08-92   8:56a
    GO       EXE     26022   1-10-92  12:14p
    HOME&BUS TXT      1644   2-04-92   6:15a
    PCSIG    TXT      2451   1-22-92   9:19a
    SHAREMAG TXT      1837   1-22-92   9:15a
    CDROM    TXT      3972   6-24-92   1:25p
    GO-FORM  DAT      3107   6-24-92   9:25a
    SIGORDER TXT      3107   6-24-92   9:27a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    FILE2884 TXT      7104   6-25-92  10:36a
           11 file(s)     270697 bytes
                           47104 bytes free
